import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

export function renderHtmlToPdf(html: string, pdfOutPath: string) {
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const tempHtmlPath = pdfOutPath.replace(/\.pdf$/i, '.html');
  fs.writeFileSync(tempHtmlPath, html, 'utf-8');

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-profile-'));
  const htmlFileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
  const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${pdfOutPath}" "${htmlFileUrl}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
  } finally {
    try {
      fs.rmSync(tempProfileDir, { recursive: true, force: true });
    } catch (e) {}
    if (fs.existsSync(tempHtmlPath)) {
      // Keep html for quick browser inspection if desired, or unlink
      // fs.unlinkSync(tempHtmlPath);
    }
  }
}

async function main() {
  const outDir = path.resolve('007', 'PRINT DESIGNER');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const pdfPath = path.join(outDir, '01_FRONT_MATTER_A4_BW.pdf');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 01: Economics - Front Matter</title>
<style>
  @page {
    size: A4 portrait;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Times New Roman', 'Baskerville', 'Georgia', serif;
    color: #111;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* =========================================================
     PAGE 1: ARCHITECTURAL NEOCLASSICAL COVER
     ========================================================= */
  .cover-sheet {
    page-break-after: always;
    width: 210mm;
    height: 297mm;
    padding: 15mm 16mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
  }

  .cover-frame-outer {
    width: 100%;
    height: 100%;
    border: 2.5pt solid #000;
    padding: 3mm;
    display: flex;
    flex-direction: column;
  }

  .cover-frame-inner {
    width: 100%;
    height: 100%;
    border: 0.75pt solid #000;
    padding: 10mm 12mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  /* Header Masthead */
  .masthead {
    border-bottom: 1pt solid #000;
    padding-bottom: 4mm;
  }

  .masthead-series {
    font-size: 8.5pt;
    font-weight: 700;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    color: #000;
  }

  .masthead-sub {
    font-size: 7.5pt;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    color: #333;
    margin-top: 1.5mm;
  }

  /* Medallion */
  .medallion-container {
    margin: 3mm 0 1mm 0;
  }

  .medallion-crest {
    display: inline-block;
    width: 22mm;
    height: 22mm;
    border: 1.5pt solid #000;
    border-radius: 50%;
    padding: 1.5mm;
  }

  .medallion-inner {
    width: 100%;
    height: 100%;
    border: 0.5pt solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Times New Roman', serif;
    font-size: 13pt;
    font-weight: bold;
    letter-spacing: 1px;
  }

  /* Book Titles */
  .title-group {
    margin: 2mm 0;
  }

  .codex-badge {
    display: inline-block;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.5mm 4mm;
    background: #000;
    color: #fff;
    margin-bottom: 4mm;
  }

  .main-title {
    font-size: 25pt;
    font-weight: 900;
    line-height: 1.18;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 3mm;
  }

  .title-divider {
    width: 35mm;
    height: 1.5pt;
    background: #000;
    margin: 3mm auto;
  }

  .subtitle {
    font-size: 10.5pt;
    font-style: italic;
    line-height: 1.45;
    color: #222;
    max-width: 140mm;
    margin: 0 auto;
  }

  /* Canonical Sources Cartouche */
  .cartouche-box {
    border: 1pt solid #000;
    padding: 3.5mm 4.5mm;
    background: #fafafa;
    text-align: left;
    margin: 3mm 0;
  }

  .cartouche-header {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-bottom: 0.5pt solid #000;
    padding-bottom: 1.5mm;
    margin-bottom: 2mm;
    display: flex;
    justify-content: space-between;
  }

  .cartouche-content {
    font-size: 8.5pt;
    line-height: 1.4;
    color: #111;
  }

  .cartouche-sources {
    font-weight: bold;
    margin-bottom: 1mm;
  }

  .cartouche-verification {
    font-size: 7.5pt;
    color: #444;
    font-style: italic;
  }

  /* Cover Footer */
  .cover-footer {
    border-top: 1pt solid #000;
    padding-top: 3.5mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  /* =========================================================
     PAGE 2: VERSO / COLOPHON & CIP BLOCK
     ========================================================= */
  .verso-sheet {
    page-break-after: always;
    width: 210mm;
    height: 297mm;
    padding: 24mm 20mm 20mm 26mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    font-size: 9pt;
    line-height: 1.55;
  }

  .verso-top {
    border-bottom: 0.5pt solid #000;
    padding-bottom: 5mm;
  }

  .verso-series-label {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 1.5mm;
  }

  .verso-title {
    font-size: 15pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1.5mm;
  }

  .verso-edition {
    font-size: 9pt;
    font-style: italic;
    color: #333;
  }

  /* CIP Block */
  .cip-box {
    border: 1pt solid #000;
    padding: 5mm 6mm;
    margin: 6mm 0;
    background: #fff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 8pt;
    line-height: 1.45;
  }

  .cip-header {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 3mm;
    border-bottom: 0.5pt dashed #444;
    padding-bottom: 1.5mm;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
  }

  .pledge-box {
    border-left: 3pt solid #000;
    padding: 4mm 6mm;
    background: #f7f7f7;
    margin: 5mm 0;
  }

  .pledge-title {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 2mm;
  }

  .pledge-quote {
    font-size: 9pt;
    font-style: italic;
    line-height: 1.5;
    color: #111;
  }

  .verso-footer {
    border-top: 0.5pt solid #000;
    padding-top: 4mm;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7pt;
    color: #666;
    display: flex;
    justify-content: space-between;
  }
</style>
</head>
<body>

  <!-- PAGE 1: REFINED BLACK & WHITE COVER -->
  <div class="cover-sheet">
    <div class="cover-frame-outer">
      <div class="cover-frame-inner">

        <!-- Masthead -->
        <div class="masthead">
          <div class="masthead-series">Shelf 007 • Sovereign Knowledge Bastion</div>
          <div class="masthead-sub">Universal Monograph Series on Indian Macroeconomic Architecture</div>
        </div>

        <!-- Crest Medallion -->
        <div class="medallion-container">
          <div class="medallion-crest">
            <div class="medallion-inner">007</div>
          </div>
        </div>

        <!-- Title Block -->
        <div class="title-group">
          <div><span class="codex-badge">Sovereign Master Codex • Volume I</span></div>
          <h1 class="main-title">Indian Economy &amp;<br>Macroeconomic Architecture</h1>
          <div class="title-divider"></div>
          <p class="subtitle">
            A Definitive First-Principles Synthesis of Macroeconomic Theory, Structural Policies,
            Regulatory Frameworks, and Empirical Governance for Sovereign Examinations
          </p>
        </div>

        <!-- Canonical Sources Cartouche -->
        <div class="cartouche-box">
          <div class="cartouche-header">
            <span>Canonical Source Authority</span>
            <span>Penta-Treatise Fusion</span>
          </div>
          <div class="cartouche-content">
            <div class="cartouche-sources">
              Ramesh Singh (McGraw Hill) • Vivek Singh (7th Ed.) • Nitin Singhania (McGraw Hill) • Sanjeev Verma • K. Sankarganesh
            </div>
            <div class="cartouche-verification">
              Cross-verified with MoSPI National Accounts Statistics, Reserve Bank of India Bulletins, Union Budget &amp; Economic Survey.
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="cover-footer">
          <span>Mind of Aravalli Press</span>
          <span>A4 Monochrome Edition</span>
          <span>2026 Archive</span>
        </div>

      </div>
    </div>
  </div>

  <!-- PAGE 2: VERSO / CIP COLOPHON & EPISTEMIC PLEDGE -->
  <div class="verso-sheet">

    <div class="verso-top">
      <div class="verso-series-label">Shelf 007 Monograph Series — Codex ECO-007</div>
      <h2 class="verso-title">Indian Economy &amp; Macroeconomic Architecture</h2>
      <div class="verso-edition">First Edition — 2026 Publication Archive</div>
    </div>

    <!-- Cataloging in Publication Block -->
    <div class="cip-box">
      <div class="cip-header">Cataloging-in-Publication Data (Shelf 007 Bastion)</div>
      <div><strong>Title:</strong> Indian Economy &amp; Macroeconomic Architecture : Sovereign Master Codex.</div>
      <div><strong>Series:</strong> Shelf 007 Universal Examination Treatises ; Vol. I.</div>
      <div><strong>Subjects:</strong> Macroeconomics — India. National Income Accounting. Monetary Policy — Reserve Bank of India. Public Finance &amp; FRBM. Banking Architecture &amp; NPAs. External Sector &amp; BoP. Human Development Metrics.</div>
      <div><strong>Curricular Lenses:</strong> UPSC Civil Services (Mains GS-III &amp; Prelims) • Reserve Bank of India Grade B (ESI &amp; Finance) • IIBF Diploma in Banking &amp; Finance (IE&amp;IFS) • RPSC RAS • State PSCs.</div>
      <div><strong>Standard:</strong> Monochrome Oxford Monograph &amp; A4 Archival Print Standard.</div>
    </div>

    <!-- Epistemic Pledge -->
    <div class="pledge-box">
      <div class="pledge-title">The Epistemic Pledge (The Golden Test of Total Replacement)</div>
      <div class="pledge-quote">
        "If the reader never opens the source treatises, they will not miss a single foundational model, statutory definition, causal transmission mechanism, empirical ratio, diagnostic distinction, or examination trap."
      </div>
    </div>

    <!-- Colophon / Typography Statement -->
    <div style="font-size: 8.5pt; color: #333; line-height: 1.5;">
      <strong>Note on Typographic Design:</strong> This volume is formatted strictly for high-clarity black-and-white physical printing on standard ISO A4 paper (210 × 297 mm). Margins incorporate an asymmetrical 20mm binding gutter to ensure comfortable twin-loop spiral or ring-binder filing. Primary serif body faces are set with balanced leading to optimize extended reading stamina and visual recall.
    </div>

    <!-- Verso Footer -->
    <div class="verso-footer">
      <span>Shelf 007 Knowledge Bastion</span>
      <span>Printed &amp; Bound from Sovereign Source Repository</span>
      <span>All Institutional Rights Reserved</span>
    </div>

  </div>

</body>
</html>`;

  console.log('Rendering Front Matter PDF via Edge/Chrome headless...');
  renderHtmlToPdf(html, pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log(`✓ Front Matter generated: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
