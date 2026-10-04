import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

async function main() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outDir = path.resolve('007', 'PRINT DESIGNER', 'previews');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const htmlPath = path.resolve('007', 'PRINT DESIGNER', '03_CHAPTER_01_A4_BW.html');
  const fullHtml = fs.readFileSync(htmlPath, 'utf-8');

  // We can create a single-page viewer HTML for each of the 8 pages and screenshot them at 794x1123 (A4 at 96 DPI) or 1240x1754 (A4 at 150 DPI)
  // Let's split pages or make a viewer with page selector
  for (let i = 1; i <= 8; i++) {
    const pageHtml = fullHtml.replace(
      '</head>',
      `<style>
        .page { display: none !important; }
        .page:nth-of-type(${i}) { display: flex !important; margin: 0 !important; }
        body { background: #fff !important; margin: 0 !important; }
      </style></head>`
    );
    
    const tempHtml = path.join(outDir, `temp_p${i}.html`);
    fs.writeFileSync(tempHtml, pageHtml, 'utf-8');

    const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), `edge-prev-${i}-`));
    const outPng = path.join(outDir, `page_${i}.png`);
    const fileUrl = 'file:///' + tempHtml.replace(/\\/g, '/');

    // 210mm x 297mm at ~144 DPI is 1190 x 1684 px
    const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --window-size=1190,1684 --screenshot="${outPng}" "${fileUrl}"`;

    try {
      execSync(cmd, { stdio: 'ignore' });
      console.log(`Rendered page ${i} -> ${outPng}`);
    } catch (e: any) {
      console.error(`Error rendering page ${i}:`, e.message);
    } finally {
      try {
        fs.rmSync(tempProfileDir, { recursive: true, force: true });
        if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
      } catch (e) {}
    }
  }

  console.log('Finished capturing all 8 pages!');
}

main();
