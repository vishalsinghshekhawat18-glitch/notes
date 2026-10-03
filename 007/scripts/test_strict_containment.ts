import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { SOVEREIGN_SUBJECT_CATALOG, transformMarkdownToPrintHtml } from './build_sovereign_books';

const subject = SOVEREIGN_SUBJECT_CATALOG.find(s => s.slug === 'iibf_dbf')!;
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const modB = fs.readFileSync('007/notes/iibf_dbf/01_PAPER_1_IE_IFS/02_MODULE_B_ECONOMIC_CONCEPTS_RELATED_TO_BANKING.md', 'utf-8');
let html = transformMarkdownToPrintHtml(modB, subject, '');

// Inject strict containment CSS
const strictCss = `
  html, body {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: clip !important;
  }
  table {
    width: 100% !important;
    max-width: 100% !important;
    table-layout: fixed !important;
  }
  td, th {
    word-break: break-word !important;
    overflow-wrap: break-word !important;
  }
  pre {
    max-width: 100% !important;
    overflow-x: hidden !important;
    white-space: pre-wrap !important;
    word-break: break-all !important;
  }
  * {
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
`;

html = html.replace('</style>', `${strictCss}\n</style>`);

const htmlPath = path.resolve('strict_test.html');
const pdfPath = path.resolve('strict_test.pdf');
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

console.log('With Strict Containment -> CM:', cm);
console.log('Result:', cm.includes('3.125') ? '🎉 SUCCESS! 100% FULL SCALE (3.125)!' : 'Still downscaled: ' + cm);

if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
