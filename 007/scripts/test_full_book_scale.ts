import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fullHtml = fs.readFileSync('diagnose_full.html', 'utf-8');

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

const modifiedHtml = fullHtml.replace('</style>', `${strictCss}\n</style>`);

const htmlPath = path.resolve('full_strict_test.html');
const pdfPath = path.resolve('full_strict_test.pdf');
fs.writeFileSync(htmlPath, modifiedHtml, 'utf-8');

const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
console.log('Compiling Full Book with Strict Containment...');
execSync(cmd, { stdio: 'inherit' });

const buf = fs.readFileSync(pdfPath);
let pos = 0;
let cmsFound: string[] = [];
let tfsFound: string[] = [];

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
      const tfs = [...s.matchAll(/\/([A-Za-z0-9_]+)\s+([0-9.]+)\s+Tf/g)].map(m => m[2]);
      cmsFound = cms;
      tfsFound = tfs;
      break;
    }
  } catch(e) {}
  pos = end + 9;
}

console.log('Full Book CMs:', cmsFound.slice(0, 3));
console.log('Full Book Tfs:', [...new Set(tfsFound)]);
console.log('Status:', cmsFound.some(c => c.includes('3.125')) ? '🎉 FULL BOOK IS 100% FULL SCALE (3.125)!' : 'Still downscaled: ' + cmsFound.join(' | '));

if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
