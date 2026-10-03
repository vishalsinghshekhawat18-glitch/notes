import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function testVariation(name: string, flags: string, htmlContent: string) {
  const htmlPath = path.resolve('test_scale.html');
  const pdfPath = path.resolve('test_scale.pdf');
  fs.writeFileSync(htmlPath, htmlContent);

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu ${flags} --print-to-pdf="${pdfPath}" "${fileUrl}"`;
  
  try {
    execSync(cmd, { stdio: 'ignore' });
  } catch (e: any) {
    console.error(name, 'Exec error:', e.message);
    return;
  }

  if (!fs.existsSync(pdfPath)) {
    console.error(name, 'PDF not created');
    return;
  }

  const buf = fs.readFileSync(pdfPath);
  let pos = 0;
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
        console.log(`\n[${name}]`);
        console.log('  CM matrices:', cms);
        console.log('  Tf font sizes:', tfs);
        
        // Calculate effective scale
        let ctmScale = 1.0;
        const outerMatch = cms[0]?.match(/([0-9.-]+)\s+0\s+0\s+([0-9.-]+)/);
        if (outerMatch) ctmScale = Math.abs(parseFloat(outerMatch[1]));
        console.log('  Outer CTM factor:', ctmScale);
        break;
      }
    } catch (e) {}
    pos = end + 9;
  }

  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
}

// 1. Standard test
const testHtml = `<!DOCTYPE html>
<html>
<head>
<style>
  @page {
    size: A4 portrait;
    margin: 20mm;
  }
  body {
    font-family: Georgia, serif;
    font-size: 12pt;
    line-height: 1.5;
  }
</style>
</head>
<body>
  <h1>Test Chapter Opener Title</h1>
  <p>This is a paragraph of standard body text that should be 12 points on paper.</p>
</body>
</html>`;

testVariation('1. Default Edge Flags', '', testHtml);
testVariation('2. With --headless=new', '--headless=new', testHtml);
testVariation('3. With --force-device-scale-factor=1', '--force-device-scale-factor=1', testHtml);
testVariation('4. With --no-pdf-header-footer', '--no-pdf-header-footer', testHtml);
testVariation('5. Combined: --headless=new --no-pdf-header-footer', '--headless=new --no-pdf-header-footer', testHtml);
