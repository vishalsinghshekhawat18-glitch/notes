import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

async function main() {
  const browserPath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const htmlPath = path.resolve('007', 'PRINT DESIGNER', '03_CHAPTER_01_A4_BW.html');
  const baseHtml = fs.readFileSync(htmlPath, 'utf-8');

  // Let's test with font-size: 11pt, 11.5pt, 12pt
  // Remove strict height: 297mm and overflow: hidden so natural page breaking happens
  for (const fontSize of ['10.5pt', '11pt', '11.5pt']) {
    let testHtml = baseHtml
      .replace(/font-size:\s*10\.5pt;/g, `font-size: ${fontSize};`)
      .replace(
        '.page {',
        `.page { min-height: 270mm; /* auto flow */ `
      )
      .replace('overflow: hidden;', 'overflow: visible;');

    // Also inject a client-side measurement script
    testHtml = testHtml.replace('</body>', `
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          const pages = document.querySelectorAll('.page');
          const report = [];
          pages.forEach((p, i) => {
            const body = p.querySelector('.page-body') || p.firstElementChild;
            const h = p.scrollHeight;
            const pxToMm = 25.4 / 96;
            const mm = (h * pxToMm).toFixed(1);
            report.push({ page: i + 1, scrollHeightPx: h, heightMm: mm, exceedsA4: h * pxToMm > 297 });
          });
          console.log('MEASUREMENT_RESULT:' + JSON.stringify(report));
        });
      </script>
    </body>`);

    const tempHtml = path.resolve('007', 'PRINT DESIGNER', `test_flow_${fontSize}.html`);
    const tempPdf = path.resolve('007', 'PRINT DESIGNER', `test_flow_${fontSize}.pdf`);
    fs.writeFileSync(tempHtml, testHtml, 'utf-8');

    const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), `edge-overflow-`));
    const fileUrl = 'file:///' + tempHtml.replace(/\\/g, '/');

    const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${tempPdf}" "${fileUrl}"`;
    try {
      execSync(cmd, { stdio: 'pipe' });
      const buf = fs.readFileSync(tempPdf);
      const matches = buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g);
      console.log(`[Font: ${fontSize}] -> Natural PDF Page Count: ${matches ? matches.length : 'unknown'}`);
    } catch (e: any) {
      console.error(e.message);
    } finally {
      try {
        fs.rmSync(tempProfileDir, { recursive: true, force: true });
        if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
        if (fs.existsSync(tempPdf)) fs.unlinkSync(tempPdf);
      } catch (e) {}
    }
  }
}

main();
