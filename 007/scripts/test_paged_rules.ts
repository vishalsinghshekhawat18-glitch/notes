import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fullHtml = fs.readFileSync('diagnose_full.html', 'utf-8');

function testVariant(name: string, modifiedHtml: string) {
  const htmlPath = path.resolve('diag_var.html');
  const pdfPath = path.resolve('diag_var.pdf');
  fs.writeFileSync(htmlPath, modifiedHtml, 'utf-8');

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
  console.log(`${name.padEnd(50)} -> ${isDownscaled ? '❌ DOWNSCALED (2.083)' : '✓ FULL SCALE (3.125)'} [CM: ${cm}]`);
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
}

// 1. As is
testVariant('1. Full HTML As-Is', fullHtml);

// 2. Remove @top-left, @top-right, @bottom-left, @bottom-right
const noMarginBoxes = fullHtml.replace(/@top-left[\s\S]*?@bottom-right[\s\S]*?}/, '');
testVariant('2. Without @top/@bottom Margin Boxes', noMarginBoxes);

// 3. Remove @page:first
const noPageFirst = fullHtml.replace(/@page:first[\s\S]*?}/, '');
testVariant('3. Without @page:first', noPageFirst);

// 4. Clean minimal @page
const minimalPage = fullHtml.replace(/@page[\s\S]*?@page:first[\s\S]*?}/, '@page { size: A4; margin: 18mm 16mm 18mm 20mm; }');
testVariant('4. Minimal @page { size: A4; margin: ... }', minimalPage);
