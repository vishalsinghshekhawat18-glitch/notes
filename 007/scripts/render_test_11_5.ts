import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

async function main() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outDir = path.resolve('007', 'PRINT DESIGNER', 'test_previews');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const htmlPath = path.resolve('007', 'PRINT DESIGNER', '03_CHAPTER_01_A4_BW.html');
  const baseHtml = fs.readFileSync(htmlPath, 'utf-8');

  // Test 11.5pt
  const font11Html = baseHtml.replace(/font-size:\s*10\.5pt;/g, 'font-size: 11.5pt;');

  for (let i = 1; i <= 8; i++) {
    const pageHtml = font11Html.replace(
      '</head>',
      `<style>
        .page { display: none !important; }
        .page:nth-of-type(${i}) { display: flex !important; margin: 0 !important; }
        body { background: #fff !important; margin: 0 !important; }
      </style></head>`
    );

    const tempHtml = path.join(outDir, `temp_p${i}.html`);
    fs.writeFileSync(tempHtml, pageHtml, 'utf-8');

    const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), `edge-test-prev-${i}-`));
    const outPng = path.join(outDir, `test_11_5_page_${i}.png`);
    const fileUrl = 'file:///' + tempHtml.replace(/\\/g, '/');

    const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --window-size=1190,1684 --screenshot="${outPng}" "${fileUrl}"`;

    try {
      execSync(cmd, { stdio: 'ignore' });
      console.log(`Rendered page ${i} at 11.5pt -> ${outPng}`);
    } catch (e: any) {
      console.error(`Error:`, e.message);
    } finally {
      try {
        fs.rmSync(tempProfileDir, { recursive: true, force: true });
        if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
      } catch (e) {}
    }
  }

  console.log('All 11.5pt pages captured!');
}

main();
