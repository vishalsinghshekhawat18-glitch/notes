import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { SOVEREIGN_SUBJECT_CATALOG, transformMarkdownToPrintHtml } from './build_sovereign_books';

const subject = SOVEREIGN_SUBJECT_CATALOG.find(s => s.slug === 'iibf_dbf')!;
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const modB = fs.readFileSync('007/notes/iibf_dbf/01_PAPER_1_IE_IFS/02_MODULE_B_ECONOMIC_CONCEPTS_RELATED_TO_BANKING.md', 'utf-8');
const html = transformMarkdownToPrintHtml(modB, subject, '');

function getCm(htmlContent: string) {
  const htmlPath = path.resolve('hypo.html');
  const pdfPath = path.resolve('hypo.pdf');
  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');

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
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
  return cm;
}

console.log('1. Original Full Mod B:');
console.log('   CM:', getCm(html));

console.log('2. Without margin in @page:first:');
const noFirstMargin = html.replace(/@page:first\s*\{[^}]*\}/g, '');
console.log('   CM:', getCm(noFirstMargin));

console.log('3. Simple @page { size: A4; margin: 18mm 16mm 18mm 20mm; } without pseudo-classes:');
const simplePage = html.replace(/@page[\s\S]*?@page:first[\s\S]*?\}/g, '@page { size: A4 portrait; margin: 18mm 16mm 18mm 20mm; }');
console.log('   CM:', getCm(simplePage));
