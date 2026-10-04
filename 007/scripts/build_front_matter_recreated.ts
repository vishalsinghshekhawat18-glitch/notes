import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

function renderHtmlToPdf(html: string, pdfOutPath: string) {
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const tempHtmlPath = pdfOutPath.replace(/\.pdf$/i, '.html');
  fs.writeFileSync(tempHtmlPath, html, 'utf-8');

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-front-profile-'));
  const htmlFileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
  const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${pdfOutPath}" "${htmlFileUrl}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
  } finally {
    try {
      fs.rmSync(tempProfileDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

async function main() {
  const outDir = path.resolve('007', 'PRINT DESIGNER');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const pdfPath = path.join(outDir, '01_FRONT_MATTER_A4_BW.pdf');

  // Absolute paths to cropped authentic engravings
  const medallionPath = path.resolve('007', 'PRINT DESIGNER', 'assets', 'cover_medallion_full.png').replace(/\\/g, '/');
  const coverEngravingPath = path.resolve('007', 'PRINT DESIGNER', 'assets', 'cover_fortress_engraving.png').replace(/\\/g, '/');
  const versoEngravingPath = path.resolve('007', 'PRINT DESIGNER', 'assets', 'verso_ridge_engraving.png').replace(/\\/g, '/');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Shelf 007 - Book 01: Economics - Front Matter</title>
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
    color: #000;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* =========================================================
     PAGE CONTAINER (EXACT A4: 210mm x 297mm)
     ========================================================= */
  .a4-page {
    page-break-after: always;
    width: 210mm;
    height: 297mm;
    padding: 10mm 12mm;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .a4-page:last-child {
    page-break-after: avoid;
  }

  /* DOUBLE-RULE BORDER FRAME */
  .border-outer {
    width: 100%;
    height: 100%;
    border: 2pt solid #000;
    padding: 2.2mm;
    display: flex;
    flex-direction: column;
  }

  .border-inner {
    width: 100%;
    height: 100%;
    border: 0.75pt solid #000;
    padding: 7mm 8mm 6mm 8mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  /* =========================================================
     PAGE 1: COVER
     ========================================================= */
  /* Top Masthead with side rules */
  .masthead-block {
    margin-bottom: 2mm;
  }

  .rule-line-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5mm;
  }

  .rule-line-container .line {
    flex: 1;
    height: 0.75pt;
    background-color: #000;
    max-width: 28mm;
  }

  .masthead-main {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.8pt;
    font-weight: 800;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    color: #000;
    padding: 0 4mm;
  }

  .masthead-sub {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 6.8pt;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: #222;
  }

  /* Medallion */
  .medallion-box {
    margin: 2mm auto 2.5mm auto;
    text-align: center;
  }

  .medallion-box img {
    height: 38mm;
    width: auto;
    display: block;
    margin: 0 auto;
  }

  /* Sovereign Master Codex Volume 1 Banner */
  .volume-banner {
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.8pt;
    font-weight: 800;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 1.8mm 6mm;
    display: block;
    width: 100%;
    margin: 0 auto 3.5mm auto;
  }

  /* Main Title */
  .main-title {
    font-size: 27pt;
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 2.5mm;
    font-family: 'Times New Roman', 'Baskerville', serif;
  }

  .main-subtitle {
    font-size: 10pt;
    font-style: italic;
    line-height: 1.4;
    color: #111;
    max-width: 155mm;
    margin: 0 auto 2mm auto;
  }

  .diamond-separator {
    font-size: 8pt;
    margin: 1.5mm 0;
    color: #000;
  }

  /* Canonical Source Authority */
  .source-block {
    margin: 1.5mm auto 2.5mm auto;
    max-width: 165mm;
  }

  .source-header {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.2pt;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 1.5mm;
  }

  .source-names {
    font-size: 8.8pt;
    font-weight: bold;
    color: #000;
    line-height: 1.35;
    margin-bottom: 2mm;
  }

  .source-divider {
    width: 100%;
    height: 0.5pt;
    background: #000;
    margin: 1.8mm auto;
  }

  .source-verification {
    font-size: 7.8pt;
    font-style: italic;
    color: #222;
    line-height: 1.35;
  }

  /* Engraved Fortress Image */
  .fortress-engraving-container {
    width: 100%;
    margin: 1mm 0 2mm 0;
    text-align: center;
  }

  .fortress-engraving-container img {
    width: 100%;
    max-height: 48mm;
    object-fit: contain;
    display: block;
    filter: contrast(110%);
  }

  /* Footer 3-columns */
  .cover-footer {
    border-top: 0.75pt solid #000;
    padding-top: 2.5mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7pt;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #000;
  }

  .footer-col {
    flex: 1;
    text-align: center;
  }

  .footer-divider-vert {
    width: 0.5pt;
    height: 4mm;
    background: #000;
  }

  /* =========================================================
     PAGE 2: VERSO (CIP, RIDGE ENGRAVING & PLEDGE)
     ========================================================= */
  .verso-masthead {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3mm;
  }

  .verso-masthead .line {
    flex: 1;
    height: 0.75pt;
    background-color: #000;
    max-width: 30mm;
  }

  .verso-masthead-text {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #000;
    padding: 0 4mm;
  }

  .verso-title {
    font-size: 21pt;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #000;
    line-height: 1.15;
    margin-bottom: 1.5mm;
  }

  .verso-edition {
    font-size: 9.5pt;
    font-style: italic;
    color: #222;
    margin-top: 1.5mm;
    margin-bottom: 2mm;
  }

  /* Mountain Ridge Engraving */
  .ridge-engraving-container {
    width: 100%;
    margin: 2mm 0 3.5mm 0;
    text-align: center;
  }

  .ridge-engraving-container img {
    width: 100%;
    max-height: 38mm;
    object-fit: contain;
    display: block;
    filter: contrast(110%);
  }

  /* CIP Box */
  .cip-box {
    border: 1pt solid #000;
    padding: 3.5mm 5mm;
    margin: 2mm 0 3mm 0;
    text-align: left;
    background: #fff;
  }

  .cip-header {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 2mm;
  }

  .cip-dotted-rule {
    border-bottom: 0.75pt dotted #444;
    margin-bottom: 2.5mm;
  }

  .cip-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.2pt;
    line-height: 1.42;
  }

  .cip-table td {
    vertical-align: top;
    padding-bottom: 1.2mm;
  }

  .cip-label {
    width: 25mm;
    font-weight: bold;
    color: #000;
  }

  .cip-colon {
    width: 5mm;
    text-align: center;
    font-weight: bold;
  }

  .cip-val {
    color: #111;
  }

  /* Epistemic Pledge Box */
  .pledge-callout {
    background: #f8f8f8;
    border-left: 4.5pt solid #000;
    padding: 3mm 4.5mm;
    margin: 2.5mm 0;
    text-align: left;
  }

  .pledge-header {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 1.5mm;
  }

  .pledge-text {
    font-size: 8.8pt;
    font-style: italic;
    line-height: 1.45;
    color: #111;
  }

  /* Typographic note */
  .typographic-note {
    font-size: 8.2pt;
    line-height: 1.42;
    color: #222;
    text-align: justify;
    text-justify: inter-word;
    margin: 2.5mm 0;
  }

  .typographic-note strong {
    color: #000;
  }
</style>
</head>
<body>

  <!-- =========================================================
       PAGE 1: EXACT RECREATION OF USER COVER (RECTO)
       ========================================================= -->
  <div class="a4-page">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Masthead -->
        <div class="masthead-block">
          <div class="rule-line-container">
            <span class="line"></span>
            <span class="masthead-main">SHELF 007 • SOVEREIGN KNOWLEDGE BASTION</span>
            <span class="line"></span>
          </div>
          <div class="masthead-sub">UNIVERSAL MONOGRAPH SERIES ON INDIAN MACROECONOMIC ARCHITECTURE</div>
        </div>

        <!-- Authentic Medallion with Wings -->
        <div class="medallion-box">
          <img src="file:///${medallionPath}" alt="Shelf 007 Crest Medallion" />
        </div>

        <!-- Volume Banner -->
        <div class="volume-banner">SOVEREIGN MASTER CODEX • VOLUME 1</div>

        <!-- Main Display Title -->
        <h1 class="main-title">
          INDIAN ECONOMY &amp;<br>
          MACROECONOMIC<br>
          ARCHITECTURE
        </h1>

        <!-- Subtitle -->
        <p class="main-subtitle">
          A Definitive First-Principles Synthesis of Macroeconomic Theory, Structural Policies,
          Regulatory Frameworks, and Empirical Governance for Sovereign Examinations
        </p>

        <!-- Diamond -->
        <div class="diamond-separator">♦</div>

        <!-- Canonical Sources -->
        <div class="source-block">
          <div class="source-header">CANONICAL SOURCE AUTHORITY • PENTA-TREATISE FUSION</div>
          <div class="source-names">
            Ramesh Singh (McGraw Hill) • Vivek Singh (7th Ed.) • Nitin Singhania (McGraw Hill) • Sanjeev Verma • K. Sankarganesh
          </div>
          <div class="source-divider"></div>
          <div class="source-verification">
            Cross-verified with MoSPI National Accounts Statistics, Reserve Bank of India Bulletins, Union Budget &amp; Economic Survey.
          </div>
        </div>

        <!-- Fortress Woodcut Engraving -->
        <div class="fortress-engraving-container">
          <img src="file:///${coverEngravingPath}" alt="Aravalli Ridge Historic Fortress Engraving" />
        </div>

        <!-- Cover Footer -->
        <div class="cover-footer">
          <div class="footer-col">MIND OF ARAVALLI PRESS</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">A4 MONOCHROME EDITION</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">2026 ARCHIVE</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 2: EXACT RECREATION OF USER VERSO
       ========================================================= -->
  <div class="a4-page">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Top Masthead -->
        <div class="verso-masthead">
          <span class="line"></span>
          <span class="verso-masthead-text">SHELF 007 MONOGRAPH SERIES — CODEX ECO-007</span>
          <span class="line"></span>
        </div>

        <!-- Title Block -->
        <div>
          <h2 class="verso-title">INDIAN ECONOMY &amp;<br>MACROECONOMIC ARCHITECTURE</h2>
          <div class="diamond-separator">♦</div>
          <div class="verso-edition">First Edition — 2026 Publication Archive</div>
        </div>

        <!-- Mountain Ridge Engraving -->
        <div class="ridge-engraving-container">
          <img src="file:///${versoEngravingPath}" alt="Aravalli Mountain Ridge & Citadel Engraving" />
        </div>

        <!-- Cataloging in Publication Block -->
        <div class="cip-box">
          <div class="cip-header">CATALOGING-IN-PUBLICATION DATA (SHELF 007 BASTION)</div>
          <div class="cip-dotted-rule"></div>
          <table class="cip-table">
            <tr>
              <td class="cip-label">Title</td>
              <td class="cip-colon">:</td>
              <td class="cip-val">Indian Economy &amp; Macroeconomic Architecture : Sovereign Master Codex.</td>
            </tr>
            <tr>
              <td class="cip-label">Series</td>
              <td class="cip-colon">:</td>
              <td class="cip-val">Shelf 007 Universal Examination Treatises ; Vol. I.</td>
            </tr>
            <tr>
              <td class="cip-label">Subjects</td>
              <td class="cip-colon">:</td>
              <td class="cip-val">Macroeconomics — India. National Income Accounting. Monetary Policy — Reserve Bank of India. Public Finance &amp; FRBM. Banking Architecture &amp; NPAs. External Sector &amp; BoP. Human Development Metrics.</td>
            </tr>
            <tr>
              <td class="cip-label">Curricular Lenses</td>
              <td class="cip-colon">:</td>
              <td class="cip-val">UPSC Civil Services (Mains GS-III &amp; Prelims) • Reserve Bank of India Grade B (ESI &amp; Finance) • IIBF Diploma in Banking &amp; Finance (IE&amp;IFS) • RPSC RAS • State PSCs.</td>
            </tr>
            <tr>
              <td class="cip-label">Standard</td>
              <td class="cip-colon">:</td>
              <td class="cip-val">Monochrome Oxford Monograph &amp; A4 Archival Print Standard.</td>
            </tr>
          </table>
        </div>

        <!-- Epistemic Pledge -->
        <div class="pledge-callout">
          <div class="pledge-header">THE EPISTEMIC PLEDGE (THE GOLDEN TEST OF TOTAL REPLACEMENT)</div>
          <div class="pledge-text">
            “If the reader never opens the source treatises, they will not miss a single foundational model, statutory definition, causal transmission mechanism, empirical ratio, diagnostic distinction, or examination trap.”
          </div>
        </div>

        <!-- Typographic Design Note -->
        <div class="typographic-note">
          <strong>Note on Typographic Design:</strong> This volume is formatted strictly for high-clarity black-and-white physical printing on standard ISO A4 paper (210 × 297 mm). Margins incorporate an asymmetrical 20mm binding gutter to ensure comfortable twin-loop spiral or ring-binder filing. Primary serif body faces are set with balanced leading to optimize extended reading stamina and visual recall.
        </div>

        <!-- Verso Footer -->
        <div class="cover-footer">
          <div class="footer-col">Shelf 007 Knowledge Bastion</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Printed &amp; Bound from Sovereign Source Repository</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">All Institutional Rights Reserved</div>
        </div>

      </div>
    </div>
  </div>

</body>
</html>`;

  console.log('Rendering Front Matter with authentic engravings to PDF...');
  renderHtmlToPdf(html, pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log(`✓ Front Matter successfully recreated: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
