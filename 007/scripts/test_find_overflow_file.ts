import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { SOVEREIGN_SUBJECT_CATALOG, collectSubjectMarkdownFiles, transformMarkdownToPrintHtml } from './build_sovereign_books';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const subject = SOVEREIGN_SUBJECT_CATALOG.find(s => s.slug === 'iibf_dbf')!;
const baseNotesDir = path.resolve('007', 'notes');
const mdFiles = collectSubjectMarkdownFiles(subject, baseNotesDir);

const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
const katexCssContent = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

function checkFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const html = transformMarkdownToPrintHtml(content, subject, katexCssContent);
  const htmlPath = path.resolve('test_single.html');
  const pdfPath = path.resolve('test_single.pdf');
  fs.writeFileSync(htmlPath, html, 'utf-8');

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'ignore' });

  const buf = fs.readFileSync(pdfPath);
  let pos = 0;
  let cmFound: string = '';
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
        cmFound = cms[1] || cms[0] || '';
        break;
      }
    } catch(e) {}
    pos = end + 9;
  }
  const isDownscaled = cmFound.includes('2.083');
  console.log(`${path.basename(filePath).padEnd(50)} -> ${isDownscaled ? '❌ DOWNSCALED (2.083)' : '✓ FULL SCALE (3.125)'}`);
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
}

console.log('Testing each of the source files:');
for (const f of mdFiles) {
  checkFile(f);
}
