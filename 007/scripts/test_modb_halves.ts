import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { SOVEREIGN_SUBJECT_CATALOG, transformMarkdownToPrintHtml } from './build_sovereign_books';

const subject = SOVEREIGN_SUBJECT_CATALOG.find(s => s.slug === 'iibf_dbf')!;
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function testSnippet(name: string, md: string) {
  const html = transformMarkdownToPrintHtml(md, subject, '');
  const htmlPath = path.resolve('bin_test.html');
  const pdfPath = path.resolve('bin_test.pdf');
  fs.writeFileSync(htmlPath, html, 'utf-8');

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'ignore' });

  const buf = fs.readFileSync(pdfPath);
  let pos = 0;
  let cm = '';
  while ((pos = buf.indexOf('stream', pos)) !== -1) {
    const start = pos + 6;
    const end = buf.indexOf('endstream', start);
    if (end === -1) break;
    let chunk = buf.slice(start, end);
    if (chunk[0] === 0x0d && chunk[1] === 0x0a) chunk = chunk.slice(2);
    else if (chunk[0] === 0x0a || chunk[0] === 0x0d) chunk = chunk.slice(1);
    try {
      const s = zlib.inflateSync(chunk).toString('latin1');
      if (s.includes('Tf') && s.includes('cm')) {
        const cms = [...s.matchAll(/([0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+)\s+cm/g)].map(m => m[1]);
        cm = cms[1] || cms[0] || '';
        break;
      }
    } catch(e) {}
    pos = end + 9;
  }
  const isDownscaled = cm.includes('2.083');
  console.log(`${name.padEnd(40)} -> ${isDownscaled ? '❌ DOWNSCALED (2.083)' : '✓ FULL SCALE (3.125)'}`);
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
}

const modB = fs.readFileSync('007/notes/iibf_dbf/01_PAPER_1_IE_IFS/02_MODULE_B_ECONOMIC_CONCEPTS_RELATED_TO_BANKING.md', 'utf-8');
const lines = modB.split('\n');

testSnippet('Top Half (1 to 217)', lines.slice(0, 217).join('\n'));
testSnippet('Bottom Half (218 to 434)', lines.slice(217).join('\n'));
