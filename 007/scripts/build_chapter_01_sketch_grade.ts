import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

// Configure marked with KaTeX
marked.use(
  markedKatex({
    throwOnError: false,
    strict: false,
    output: 'html',
    nonStandard: true,
  })
);

function renderHtmlToPdf(html: string, pdfOutPath: string) {
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const tempHtmlPath = pdfOutPath.replace(/\.pdf$/i, '.html');
  fs.writeFileSync(tempHtmlPath, html, 'utf-8');

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-ch1-sketch-profile-'));
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

  const pdfPath = path.join(outDir, '03_CHAPTER_01_A4_BW.pdf');
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');

  // Load KaTeX CSS
  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Chapter 01: Foundations of Economic Organization</title>
<style>
  ${katexCss}

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
    font-size: 10.5pt;
    line-height: 1.45;
    color: #111;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* =========================================================
     PAGE CONTAINER (EXACT A4: 210mm x 297mm)
     ========================================================= */
  .page {
    page-break-after: always;
    width: 210mm;
    height: 297mm;
    padding: 8mm 10mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .page:last-child {
    page-break-after: avoid;
  }

  /* Alternating Duplex Binding Margin */
  .page.recto {
    padding-left: 12mm;
    padding-right: 8mm;
  }

  .page.verso {
    padding-left: 8mm;
    padding-right: 12mm;
  }

  /* DOUBLE-RULE BORDER FRAME */
  .border-outer {
    width: 100%;
    height: 100%;
    border: 1.8pt solid #000;
    padding: 1.8mm;
    display: flex;
    flex-direction: column;
  }

  .border-inner {
    width: 100%;
    height: 100%;
    border: 0.6pt solid #000;
    padding: 5mm 6mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content-area {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  /* RUNNING HEADER */
  .running-header {
    border-bottom: 0.75pt solid #000;
    padding-bottom: 1.2mm;
    margin-bottom: 3.5mm;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.2pt;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #000;
  }

  /* RUNNING FOOTER */
  .running-footer {
    border-top: 0.75pt solid #000;
    padding-top: 1.5mm;
    margin-top: 2.5mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 6.8pt;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #000;
  }

  .footer-col {
    flex: 1;
    text-align: center;
  }

  .footer-divider-vert {
    width: 0.5pt;
    height: 3.5mm;
    background: #000;
  }

  /* CHAPTER OPENER BANNER */
  .ch-opener-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1.2pt solid #000;
    padding: 2.5mm 3.5mm;
    margin-bottom: 3.5mm;
    background: #fff;
  }

  .ch-pill-box {
    border: 1pt solid #777;
    background: #f7f7f7;
    padding: 1.5mm 3mm;
    text-align: center;
    flex-shrink: 0;
    margin-right: 3.5mm;
  }

  .ch-pill-label {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 6.5pt;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #444;
  }

  .ch-pill-num {
    font-family: 'Times New Roman', serif;
    font-size: 22pt;
    font-weight: 900;
    line-height: 1;
    color: #000;
  }

  .ch-title-box {
    flex-grow: 1;
  }

  .ch-main-title {
    font-size: 15.5pt;
    font-weight: 900;
    line-height: 1.15;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #000;
  }

  .ch-fort-box {
    flex-shrink: 0;
    margin-left: 3.5mm;
  }

  .ch-fort-box img {
    height: 16mm;
    width: auto;
    display: block;
    object-fit: contain;
  }

  /* SECTION BAR (§ 1.X) */
  .section-bar {
    display: flex;
    align-items: center;
    margin-top: 2.5mm;
    margin-bottom: 2.5mm;
  }

  .section-tag-box {
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8.5pt;
    font-weight: 900;
    letter-spacing: 1px;
    padding: 1.2mm 3.5mm;
    flex-shrink: 0;
  }

  .section-title-box {
    background: #f0f0f0;
    color: #000;
    font-size: 9.5pt;
    font-weight: 800;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 1.2mm 4mm;
    flex-grow: 1;
    border: 0.5pt solid #ddd;
    border-left: none;
  }

  /* SUBSECTION BANNER (▌ 1. Subtopic) */
  .subsection-banner {
    display: flex;
    align-items: center;
    background: #f4f4f4;
    border-left: 3.5pt solid #000;
    padding: 1mm 3mm;
    font-size: 9.2pt;
    font-weight: bold;
    color: #000;
    margin-top: 2mm;
    margin-bottom: 2mm;
  }

  /* TYPOGRAPHY */
  p {
    font-size: 10pt;
    line-height: 1.45;
    margin-bottom: 2mm;
    text-align: justify;
    text-justify: inter-word;
  }

  .drop-cap {
    float: left;
    font-size: 2.8em;
    line-height: 0.8;
    padding-top: 1mm;
    padding-right: 2mm;
    padding-bottom: 0;
    font-family: 'Times New Roman', serif;
    font-weight: bold;
    color: #000;
  }

  /* CARD FRAMES */
  .card-box {
    border: 0.75pt solid #ccc;
    background: #fff;
    padding: 2.5mm 3.5mm;
    margin-bottom: 2.5mm;
  }

  .card-box-dotted {
    border: 0.75pt dashed #999;
    background: #fff;
    padding: 2.5mm 3.5mm;
    margin-bottom: 2.5mm;
  }

  /* TWO-COLUMN LAYOUT */
  .split-row {
    display: flex;
    gap: 3.5mm;
    margin-bottom: 2.5mm;
  }

  .col-left {
    flex: 1.2;
  }

  .col-right {
    flex: 1;
  }

  .col-half {
    flex: 1;
  }

  /* BULLET LIST WITH RIGHT-FACING TRIANGLES */
  .bullet-list {
    list-style: none;
    font-size: 9.5pt;
    line-height: 1.4;
  }

  .bullet-list li {
    position: relative;
    padding-left: 4.5mm;
    margin-bottom: 1.8mm;
    text-align: justify;
  }

  .bullet-list li::before {
    content: "►";
    position: absolute;
    left: 0;
    font-size: 7.5pt;
    color: #000;
  }

  /* FLOWCHART SKELETON (SCARCITY) */
  .flowchart-container {
    border: 0.75pt solid #888;
    padding: 2.5mm;
    background: #fafafa;
    text-align: center;
  }

  .flow-node {
    border: 0.75pt solid #333;
    padding: 1.2mm 2.5mm;
    background: #fff;
    font-size: 8.5pt;
    font-weight: bold;
    display: inline-block;
    margin: 1mm 0;
  }

  .flow-arrow {
    font-size: 9pt;
    font-weight: bold;
    margin: 0.5mm 0;
  }

  /* CALLOUT BARS */
  .callout-bar-gray {
    background: #efefef;
    padding: 1.5mm 3.5mm;
    font-size: 8.5pt;
    line-height: 1.35;
    margin-top: 1.5mm;
    text-align: justify;
  }

  .takeaway-box {
    display: flex;
    border: 0.75pt solid #888;
    margin-top: 2.5mm;
    background: #f7f7f7;
  }

  .takeaway-badge {
    background: #000;
    color: #fff;
    padding: 3mm 4mm;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    flex-shrink: 0;
    width: 25mm;
  }

  .takeaway-content {
    padding: 2.5mm 3.5mm;
    font-size: 8.8pt;
    line-height: 1.4;
    flex-grow: 1;
  }

  .takeaway-content ul {
    margin-left: 4mm;
  }

  /* TABLES */
  .sketch-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.5pt;
    line-height: 1.35;
    margin-bottom: 2mm;
  }

  .sketch-table th {
    border: 0.75pt solid #000;
    background: #eee;
    padding: 1.5mm 2.5mm;
    font-weight: bold;
    text-align: center;
  }

  .sketch-table td {
    border: 0.75pt solid #aaa;
    padding: 1.5mm 2.5mm;
    vertical-align: top;
  }

  /* IMAGES */
  .img-frame {
    border: 0.75pt solid #ccc;
    background: #fff;
    padding: 1mm;
    text-align: center;
  }

  .img-frame img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    object-fit: contain;
  }

  .img-caption-top {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.2pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 0.5pt solid #aaa;
    padding-bottom: 1mm;
    margin-bottom: 1.5mm;
    text-align: center;
  }

  /* EXAM TRAP MATRIX */
  .exam-trap-sketch {
    border: 1pt solid #000;
    margin-bottom: 2.5mm;
  }

  .exam-trap-sketch-header {
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1.2mm 3mm;
  }

  .exam-trap-sketch-body {
    padding: 2.5mm 3.5mm;
    background: #fafafa;
    font-size: 9pt;
    line-height: 1.4;
  }

  /* ACTIVE RECALL CARD */
  .recall-card-sketch {
    border: 1pt solid #000;
    margin-bottom: 2.5mm;
    background: #fff;
  }

  .recall-card-sketch-header {
    background: #eee;
    border-bottom: 0.75pt solid #000;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    text-transform: uppercase;
    padding: 1.2mm 3mm;
  }

  .recall-card-sketch-body {
    padding: 2.5mm 3.5mm;
    font-size: 9pt;
    line-height: 1.4;
  }
</style>
</head>
<body>

  <!-- =========================================================
       PAGE 1 (RECTO): CHAPTER OPENER & § 1.1 SCARCITY
       ========================================================= -->
  <div class="page recto">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <!-- Chapter Opener Banner -->
          <div class="ch-opener-banner">
            <div class="ch-pill-box">
              <div class="ch-pill-label">Chapter</div>
              <div class="ch-pill-num">01</div>
            </div>
            <div class="ch-title-box">
              <h1 class="ch-main-title">Foundations of Economic Organization, Sectors &amp; Goods Typology</h1>
            </div>
            <div class="ch-fort-box">
              <img src="file:///${assetsDir}/ch1_opener_fort.png" alt="Fortress Vignette" />
            </div>
          </div>

          <!-- Section 1.1 Header -->
          <div class="section-bar">
            <div class="section-tag-box">§ 1.1</div>
            <div class="section-title-box">The Epistemic Foundation: Scarcity &amp; The Economic Problem</div>
          </div>

          <!-- Subsection: Unlimited Wants vs Scarce Means -->
          <div class="subsection-banner">
            <span>The Universal Dilemma: Unlimited Wants vs. Scarce Means</span>
          </div>

          <p>
            <span class="drop-cap">E</span>conomics is the study of how societies allocate <strong>scarce resources</strong> that have <strong>alternative uses</strong> to satisfy unlimited human wants (Lionel Robbins, 1932). If resources were infinite, goods would be "free goods" (like atmospheric air in its natural state), prices would not exist, and economic systems would be unnecessary. Scarcity forces every human society to make <strong>choices</strong>, and every choice incurs an <strong>Opportunity Cost</strong>.
          </p>

          <!-- Split: Flowchart + Signpost Illustration -->
          <div class="split-row card-box-dotted">
            <div class="col-left flowchart-container">
              <div class="flow-node">Unlimited Human Desires &nbsp;vs.&nbsp; Finite Productive Resources</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-node">Absolute Scarcity</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-node">Compulsory Choice</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-node" style="border: 1pt solid #000; background: #f5f5f5;">
                Opportunity Cost<br><span style="font-size: 7.8pt; font-weight: normal;">(Value of the next best alternative foregone)</span>
              </div>
            </div>
            <div class="col-right img-frame">
              <img src="file:///${assetsDir}/ch1_scarcity_signpost.png" alt="Wants vs Resources Signpost" />
            </div>
          </div>

          <!-- Subsection: Car Mileage in a Lab Analogy -->
          <div class="subsection-banner">
            <span>The Beginner's Mental Model: The "Car Mileage in a Lab" Analogy (Ceteris Paribus)</span>
          </div>

          <div class="card-box" style="margin-bottom: 2mm;">
            <div class="split-row" style="margin-bottom: 1.5mm;">
              <div class="col-left" style="font-size: 8.8pt; line-height: 1.4; font-style: italic;">
                <strong>Why do economic theories rely on assumptions like "All other things being equal" (Ceteris Paribus)?</strong><br>
                In a car's technical brochure, the manufacturer claims a mileage of <strong>22 KMPL</strong>. Yet when you drive it on city roads, it yields only 15 KMPL. Does the 22 KMPL claim mean the engineering test failed?<br>
                <strong>No.</strong> The 22 KMPL was measured under <strong>strictly controlled laboratory conditions</strong>—a frictionless track, calibrated tire pressure, and zero traffic. This isolation was essential to measure the <em>inherent efficiency of the engine itself</em>.
              </div>
              <div class="col-right img-frame">
                <img src="file:///${assetsDir}/ch1_car_analogy.png" alt="Car Lab vs Real World" />
              </div>
            </div>
            <div class="callout-bar-gray">
              <strong>The Economic Lesson:</strong> Economists formulate laws by assuming <em>Ceteris Paribus</em> to isolate the fundamental causal engine. Once the core law is understood, real-world friction is layered back.
            </div>
          </div>

          <!-- Subsection: Water-Diamond Paradox -->
          <div class="subsection-banner">
            <span>The Adam Smith Water-Diamond Paradox: Value-in-Use vs. Value-in-Exchange</span>
          </div>

          <div class="card-box-dotted" style="margin-bottom: 1.5mm;">
            <div style="font-size: 8.8pt; font-style: italic; margin-bottom: 1.5mm;">
              Why is life-giving water virtually free, while useless decorative diamonds command millions?
            </div>
            <div class="split-row">
              <div class="col-half" style="display: flex; gap: 2mm; align-items: center;">
                <img src="file:///${assetsDir}/ch1_water_glass.png" style="height: 18mm; width: auto;" alt="Water" />
                <div style="font-size: 8.2pt; line-height: 1.35;">
                  <strong>Value-in-Use:</strong> Immense total utility (civilization perishes without it). Abundant supply makes <strong>Marginal Utility of the last glass</strong> near zero ⟶ Low price.
                </div>
              </div>
              <div class="col-half" style="display: flex; gap: 2mm; align-items: center;">
                <img src="file:///${assetsDir}/ch1_diamond.png" style="height: 16mm; width: auto;" alt="Diamond" />
                <div style="font-size: 8.2pt; line-height: 1.35;">
                  <strong>Value-in-Exchange:</strong> Exceptionally scarce. The <strong>Marginal Utility of the last unit</strong> is astronomical ⟶ Exorbitant exchange price.
                </div>
              </div>
            </div>
          </div>

          <div class="callout-bar-gray" style="text-align: center; font-weight: bold; font-size: 8.5pt;">
            Core Takeaway: Market prices reflect Marginal Utility and Scarcity, NOT total utility or moral necessity!
          </div>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">1</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 2 (VERSO): PPF CURVE, § 1.2 QUESTIONS & MARKET ECONOMY
       ========================================================= -->
  <div class="page verso">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <!-- Subsection: PPF Curve -->
          <div class="subsection-banner">
            <span>The Production Possibility Frontier (PPF)</span>
          </div>

          <p style="font-size: 9.5pt; margin-bottom: 2mm;">
            The PPF is a graphical curve demonstrating the maximum feasible combinations of two goods an economy can produce given fixed resources and existing technology.
          </p>

          <div class="split-row card-box" style="margin-bottom: 3mm;">
            <div class="col-left">
              <ul class="bullet-list" style="font-size: 8.8pt;">
                <li><strong>Points on the Curve:</strong> Productive efficiency (full resource employment).</li>
                <li><strong>Points inside the Curve:</strong> Inefficiency or under-utilization (unemployment, idle factory capacity).</li>
                <li><strong>Points outside the Curve:</strong> Currently unattainable without economic growth (technological innovation, capital accumulation).</li>
                <li><strong>Slope of PPF:</strong> Represents the <strong>Marginal Rate of Transformation (MRT)</strong>, which reflects increasing opportunity cost as resources are imperfectly substitutable between sectors.</li>
              </ul>
            </div>
            <div class="col-right img-frame">
              <div class="img-caption-top">Illustrative Production Possibility Frontier (PPF)</div>
              <img src="file:///${assetsDir}/ch1_ppf_graph.png" alt="PPF Graph" />
            </div>
          </div>

          <!-- Section 1.2 Header -->
          <div class="section-bar">
            <div class="section-tag-box">§ 1.2</div>
            <div class="section-title-box">The Three Fundamental Economic Questions</div>
          </div>

          <p style="font-size: 9.5pt; margin-bottom: 2mm;">
            Every economic society, regardless of its ideology, must solve three structural questions:
          </p>

          <table class="sketch-table" style="margin-bottom: 3mm;">
            <thead>
              <tr>
                <th style="width: 38%;">Fundamental Question</th>
                <th>Structural Economic Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. What to produce?</strong></td>
                <td>Allocation of resources between consumer goods and capital goods; civil goods vs. defense equipment.</td>
              </tr>
              <tr>
                <td><strong>2. How to produce?</strong></td>
                <td>Choice of production technique: Labor-Intensive Technology (LIT) vs. Capital-Intensive Technology (CIT).</td>
              </tr>
              <tr>
                <td><strong>3. For whom to produce?</strong></td>
                <td>Distribution of national product across factors of production: Rent (Land), Wages (Labor), Interest (Capital), and Profit (Enterprise).</td>
              </tr>
            </tbody>
          </table>

          <!-- Section 1.3 Header -->
          <div class="section-bar">
            <div class="section-tag-box">§ 1.3</div>
            <div class="section-title-box">Typology of Economic Systems</div>
          </div>

          <p style="font-size: 9.5pt; margin-bottom: 2mm;">
            Human societies organize production and distribution through three primary institutional frameworks:
          </p>

          <!-- 1. Market Economy -->
          <div class="subsection-banner">
            <span>1. Market Economy (Capitalism / Free Enterprise)</span>
          </div>

          <div class="split-row card-box-dotted">
            <div class="col-left">
              <ul class="bullet-list" style="font-size: 8.8pt;">
                <li><strong>Core Mechanism:</strong> Private ownership of factors of production. Allocation driven exclusively by Adam Smith's "Invisible Hand"—the market price mechanism operating via supply and demand.</li>
                <li><strong>Strength:</strong> High productive efficiency, dynamic innovation, and consumer sovereignty.</li>
                <li><strong>Weakness:</strong> Market failures in public goods, severe income inequality, negative externalities, neglect of welfare.</li>
                <li><strong>Examples:</strong> United States, United Kingdom.</li>
              </ul>
            </div>
            <div class="col-right img-frame">
              <img src="file:///${assetsDir}/ch1_market_economy.png" alt="Market Economy" />
            </div>
          </div>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">2</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 3 (RECTO): SOCIALIST, MIXED & COMMAND ECONOMIES
       ========================================================= -->
  <div class="page recto">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <!-- 2. Socialist Economy -->
          <div class="subsection-banner">
            <span>2. Socialist Economy (Democratic Socialism)</span>
          </div>

          <div class="split-row card-box-dotted" style="margin-bottom: 2.5mm;">
            <div class="col-left">
              <ul class="bullet-list" style="font-size: 8.8pt;">
                <li><strong>Core Mechanism:</strong> Predominant or total state ownership of factors of production, with central planning to achieve economic and social equality.</li>
                <li><strong>Strength:</strong> Reduces income inequality, guarantees social safety nets, ensures public provision of healthcare and education.</li>
                <li><strong>Weakness:</strong> Bureaucratic inefficiency, weak innovation incentives, and misallocation of resources due to absence of price signals.</li>
                <li><strong>Examples:</strong> Scandinavian Nordic model (welfare-oriented), Cuba.</li>
              </ul>
            </div>
            <div class="col-right img-frame">
              <img src="file:///${assetsDir}/ch1_socialist_building.png" alt="Social Welfare" />
            </div>
          </div>

          <!-- 3. Mixed Economy -->
          <div class="subsection-banner">
            <span>3. Mixed Economy (The Indian Paradigm)</span>
          </div>

          <div class="split-row card-box" style="margin-bottom: 2.5mm;">
            <div class="col-left">
              <ul class="bullet-list" style="font-size: 8.8pt;">
                <li><strong>Core Mechanism:</strong> Coexistence of a robust Private Sector driven by market incentives and an active Public Sector regulating markets and safeguarding social equity.</li>
                <li><strong>Strength:</strong> Combines market efficiency with state-directed social justice and public infrastructure creation.</li>
                <li><strong>Weakness:</strong> Can suffer from policy conflicts, regulatory delays, and the crowding-out effect.</li>
                <li><strong>Indian Evolution:</strong> 1947–1991 (Nehruvian-Mahalanobis state commanding heights) ⟶ Post-1991 (LPG market-friendly mixed economy).</li>
              </ul>
            </div>
            <div class="col-right img-frame">
              <img src="file:///${assetsDir}/ch1_mixed_economy_scale.png" alt="Mixed Economy Scale" />
            </div>
          </div>

          <!-- 4. Command Economy -->
          <div class="subsection-banner">
            <span>4. Command Economy (Centrally Planned Economy)</span>
          </div>

          <div class="split-row card-box-dotted" style="margin-bottom: 2.5mm;">
            <div class="col-left">
              <ul class="bullet-list" style="font-size: 8.8pt;">
                <li><strong>Core Mechanism:</strong> Complete state control over all factors of production. A central planning body determines what, how, and for whom to produce.</li>
                <li><strong>Strength:</strong> Rapid mobilization of national resources for strategic national priorities.</li>
                <li><strong>Weakness:</strong> Eliminates individual incentives, leads to chronic shortages/surpluses (Ludwig von Mises calculation problem).</li>
                <li><strong>Examples:</strong> Former Soviet Union (Gosplan), North Korea.</li>
              </ul>
            </div>
            <div class="col-right img-frame">
              <img src="file:///${assetsDir}/ch1_command_economy_building.png" alt="Command Economy" />
            </div>
          </div>

          <!-- Bottom Core Takeaway Box -->
          <div class="takeaway-box">
            <div class="takeaway-badge">
              <div style="font-size: 14pt; margin-bottom: 1mm;">💡</div>
              <div>Core<br>Takeaway</div>
            </div>
            <div class="takeaway-content">
              <ul>
                <li>No economy in the real world is purely capitalist, socialist, or command.</li>
                <li>Most modern economies, including India, operate as <strong>mixed economies</strong> with varying degrees of state intervention.</li>
                <li>The choice of economic system reflects a society's ideological priorities, institutions, and historical developmental context.</li>
              </ul>
            </div>
          </div>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">3</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 4 (VERSO): § 1.4 SECTORS OF THE ECONOMY
       ========================================================= -->
  <div class="page verso">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <!-- Section 1.4 Header -->
          <div class="section-bar">
            <div class="section-tag-box">§ 1.4</div>
            <div class="section-title-box">Sectors of the Economy</div>
          </div>

          <!-- 1. Primary, Secondary and Tertiary Sectors -->
          <div class="subsection-banner">
            <span>1. Primary, Secondary and Tertiary Sectors</span>
          </div>

          <p style="font-size: 9.5pt; margin-bottom: 2mm;">
            Economic activity can be classified into three broad sectors based on the nature of output and stage of production:
          </p>

          <div class="split-row card-box" style="margin-bottom: 3mm;">
            <div class="col-left">
              <table class="sketch-table" style="margin-bottom: 0;">
                <thead>
                  <tr>
                    <th>Sector</th>
                    <th>Definition</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Primary</strong></td>
                    <td>Direct extraction of natural resources from nature.</td>
                    <td>Agriculture, forestry, fishing, mining, quarrying.</td>
                  </tr>
                  <tr>
                    <td><strong>Secondary</strong></td>
                    <td>Processing raw materials into finished manufactured goods.</td>
                    <td>Manufacturing, construction, power, basic industries.</td>
                  </tr>
                  <tr>
                    <td><strong>Tertiary</strong></td>
                    <td>Provision of intangible services to households &amp; enterprises.</td>
                    <td>Trade, transport, banking, insurance, IT services.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-right img-frame">
              <img src="file:///${assetsDir}/ch1_three_sectors_continuum.png" alt="Three Sectors Continuum" />
            </div>
          </div>

          <!-- 2. Further Classification of Sectors -->
          <div class="subsection-banner">
            <span>2. Further Classification of Sectors</span>
          </div>

          <p style="font-size: 9.5pt; margin-bottom: 2mm;">
            Sectors can also be classified on the basis of ownership, organization and functional role in the economy:
          </p>

          <div class="split-row card-box-dotted" style="margin-bottom: 2.5mm;">
            <div class="col-left" style="display: flex; flex-direction: column; gap: 2mm;">
              <div style="border: 0.5pt solid #bbb; padding: 2mm; background: #fafafa;">
                <strong style="font-size: 8.8pt;">A. Organised vs. Unorganised Sector</strong>
                <ul class="bullet-list" style="font-size: 8.2pt; margin-top: 1mm;">
                  <li><strong>Organised:</strong> Registered under government acts, formal employment security, social security.</li>
                  <li><strong>Unorganised:</strong> Small unregistered units, low capital, absence of formal labor rights.</li>
                </ul>
              </div>
              <div style="border: 0.5pt solid #bbb; padding: 2mm; background: #fafafa;">
                <strong style="font-size: 8.8pt;">B. Public vs. Private Sector</strong>
                <ul class="bullet-list" style="font-size: 8.2pt; margin-top: 1mm;">
                  <li><strong>Public:</strong> Owned/managed by State; focuses on social welfare and strategic assets.</li>
                  <li><strong>Private:</strong> Owned by individuals/firms; driven by profit and market incentives.</li>
                </ul>
              </div>
              <div style="border: 0.5pt solid #bbb; padding: 2mm; background: #fafafa;">
                <strong style="font-size: 8.8pt;">C. Formal vs. Informal Sector</strong>
                <ul class="bullet-list" style="font-size: 8.2pt; margin-top: 1mm;">
                  <li><strong>Formal:</strong> Legally documented, tax-paying units with written employment contracts.</li>
                  <li><strong>Informal:</strong> Cash-based, unrecorded activities with informal labor arrangements.</li>
                </ul>
              </div>
            </div>
            <div class="col-right img-frame">
              <img src="file:///${assetsDir}/ch1_sectors_venn_diagram.png" alt="Multi-Dimensional View of Sectors" />
            </div>
          </div>

          <!-- 3. Sectoral Composition and Development -->
          <div class="subsection-banner">
            <span>3. Sectoral Composition and Structural Transformation</span>
          </div>

          <ul class="bullet-list" style="font-size: 8.8pt;">
            <li><strong>Stage of Development:</strong> Developed economies feature a large tertiary sector (~70%+), a moderate secondary sector, and a small primary sector. Developing economies begin with large agrarian shares.</li>
            <li><strong>Structural Transformation:</strong> As an economy develops, labor and resources transition from low-productivity agriculture to high-productivity manufacturing and services.</li>
            <li><strong>The Indian Anomaly:</strong> India bypassed the traditional deep industrialization phase, leaping directly from an agrarian base into services-led growth.</li>
          </ul>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">4</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 5 (RECTO): CIRCULAR FLOW, LEAKAGES & GOODS TYPOLOGY
       ========================================================= -->
  <div class="page recto">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <!-- Section 1.5 Header -->
          <div class="section-bar">
            <div class="section-tag-box">§ 1.5</div>
            <div class="section-title-box">The Circular Flow of Income &amp; Product</div>
          </div>

          <p style="font-size: 9.8pt; margin-bottom: 2mm;">
            Economic activity is an unbroken circle: <strong>Production generates Income, and Income generates Expenditure on Production.</strong>
          </p>

          <div class="card-box" style="text-align: center; font-size: 9pt; font-weight: bold; padding: 2mm; margin-bottom: 3mm;">
            Production Phase ⟶ Income Distribution Phase ⟶ Expenditure / Disposition Phase ⟶ Production Phase
          </div>

          <div class="split-row card-box-dotted" style="margin-bottom: 3mm;">
            <div class="col-half">
              <strong style="font-size: 9pt;">Real Flows:</strong>
              <p style="font-size: 8.5pt; margin-top: 1mm;">
                The physical movement of factor services (labor hours, land usage, capital tools) from households to firms, and physical goods/services from firms to households.
              </p>
            </div>
            <div class="col-half">
              <strong style="font-size: 9pt;">Money Flows:</strong>
              <p style="font-size: 8.5pt; margin-top: 1mm;">
                The monetary counterpart: firms paying factor incomes (wages, rent, interest, profit) to households, and households spending money income on goods produced by firms.
              </p>
            </div>
          </div>

          <div class="subsection-banner">
            <span>The Leakages-Injections Equilibrium</span>
          </div>

          <p style="font-size: 9.5pt; margin-bottom: 2mm;">
            In an open macroeconomy with government, income generated is not fully recycled into domestic consumption:
          </p>

          <div class="card-box" style="padding: 2.5mm; margin-bottom: 3mm;">
            <div style="text-align: center; font-size: 10pt; font-weight: bold; margin-bottom: 1.5mm;">
              $$\\text{Leakages } (W) = \\text{Savings } (S) + \\text{Taxes } (T) + \\text{Imports } (M)$$
              $$\\text{Injections } (J) = \\text{Investment } (I) + \\text{Government Spending } (G) + \\text{Exports } (X)$$
            </div>
            <div class="callout-bar-gray" style="font-size: 8.5pt; margin-top: 1.5mm;">
              <strong>Equilibrium Identity:</strong> Macroeconomic balance requires Total Leakages = Total Injections ($$S + T + M = I + G + X$$). If Leakages exceed Injections, aggregate demand contracts (deflationary pressure); if Injections exceed Leakages, aggregate demand expands (inflationary risk).
            </div>
          </div>

          <!-- Section 1.6 Header -->
          <div class="section-bar">
            <div class="section-tag-box">§ 1.6</div>
            <div class="section-title-box">The Universal Typology of Goods</div>
          </div>

          <div class="subsection-banner">
            <span>A. Final Goods vs. Intermediate Goods (The Double-Counting Boundary)</span>
          </div>

          <table class="sketch-table" style="margin-bottom: 2.5mm;">
            <thead>
              <tr>
                <th style="width: 50%;">Final Goods</th>
                <th style="width: 50%;">Intermediate Goods</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• Goods that have crossed the production boundary.<br>• Purchased for final consumption or capital formation.<br>• <strong>Included directly in National Income (GDP).</strong><br>• <em>Examples:</em> Bread eaten by a family; car bought by driver.</td>
                <td>• Goods that remain within the production boundary line.<br>• Purchased for resale OR for use as inputs in the same year.<br>• <strong>NOT included in GDP</strong> (already embedded in final good).<br>• <em>Examples:</em> Flour bought by baker; tires bought by Maruti.</td>
              </tr>
            </tbody>
          </table>

          <div class="callout-bar-gray" style="font-size: 8.8pt;">
            <strong>The Golden Test of Classification:</strong> A good is NOT defined by its physical nature, but by its <strong>end-use</strong>. Sugar bought by a household = Final Good; sugar bought by a sweet shop (halwai) = Intermediate Good.
          </div>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">5</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 6 (VERSO): CAPITAL, DEPRECIATION & EXCLUDABILITY MATRIX
       ========================================================= -->
  <div class="page verso">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <div class="subsection-banner">
            <span>B. Consumption Goods vs. Capital Goods</span>
          </div>

          <div class="split-row card-box" style="margin-bottom: 3mm;">
            <div class="col-half">
              <strong style="font-size: 9pt;">1. Consumption Goods:</strong>
              <ul class="bullet-list" style="font-size: 8.5pt; margin-top: 1mm;">
                <li><strong>Durable Goods:</strong> Multi-year lifespan (cars, television).</li>
                <li><strong>Semi-Durable:</strong> Roughly one-year lifespan (clothes, shoes).</li>
                <li><strong>Non-Durable:</strong> Single-use act (milk, bread, petrol).</li>
                <li><strong>Services:</strong> Intangible activities (teaching, healthcare).</li>
              </ul>
            </div>
            <div class="col-half">
              <strong style="font-size: 9pt;">2. Capital Goods:</strong>
              <ul class="bullet-list" style="font-size: 8.5pt; margin-top: 1mm;">
                <li>Tangible durable assets produced to facilitate further production (machine tools, industrial tractors, factory plants).</li>
                <li>Do not merge into final product; undergo wear and tear over time (<strong>Depreciation</strong>).</li>
                <li><em>Crucial distinction:</em> A sewing machine in a boutique = Capital Good; the same machine in a household = Consumer Durable.</li>
              </ul>
            </div>
          </div>

          <div class="subsection-banner">
            <span>C. Gross Investment, Depreciation &amp; Net Investment</span>
          </div>

          <div class="card-box" style="padding: 2.5mm; margin-bottom: 3mm;">
            <div style="text-align: center; font-size: 9.8pt; font-weight: bold; margin-bottom: 1.5mm;">
              $$\\text{Gross Investment} = \\text{Net Addition to Fixed Assets} + \\Delta \\text{Inventories}$$
              $$\\text{Net Investment} = \\text{Gross Investment} - \\text{Depreciation (CFC)}$$
            </div>
            <ul class="bullet-list" style="font-size: 8.8pt;">
              <li><strong>Consumption of Fixed Capital (CFC / Depreciation):</strong> Expected, normal wear and tear and foreseen obsolescence of capital assets during normal production.</li>
              <li><strong>Capital Loss (Unforeseen Destruction):</strong> Destruction of assets by natural disasters (earthquakes, floods) or wars. <strong>Capital loss is NOT depreciation</strong> and is never deducted to calculate Net National Product.</li>
            </ul>
          </div>

          <div class="subsection-banner">
            <span>D. The Four-Quadrant Excludability &amp; Rivalry Matrix</span>
          </div>

          <p style="font-size: 9.2pt; margin-bottom: 1.5mm;">
            Economics categorizes all goods in human society by two fundamental physical and legal characteristics:
          </p>

          <table class="sketch-table" style="margin-bottom: 2mm;">
            <thead>
              <tr>
                <th style="width: 25%;">Feature</th>
                <th style="width: 37.5%;">Rivalrous (Consumption diminishes availability)</th>
                <th style="width: 37.5%;">Non-Rivalrous (Consumption does not diminish availability)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Excludable</strong> (Non-payers can be prevented)</td>
                <td><strong>PRIVATE GOODS</strong><br>• Food, clothing, cars<br>• Toll roads with heavy traffic</td>
                <td><strong>CLUB GOODS</strong><br>• Cinemas, subscription television<br>• Toll highway (uncongested)</td>
              </tr>
              <tr>
                <td><strong>Non-Excludable</strong> (Impossible to prevent non-payers)</td>
                <td><strong>COMMON POOL RESOURCES</strong><br>• Ocean fisheries, shared pastures<br>• Ground water aquifers (Tragedy of Commons)</td>
                <td><strong>PURE PUBLIC GOODS</strong><br>• National defense, lighthouses<br>• Street lighting, clean air (Free-Rider problem)</td>
              </tr>
            </tbody>
          </table>

          <div class="callout-bar-gray" style="font-size: 8.5pt;">
            <strong>The Free-Rider Market Failure:</strong> Because consumers know they cannot be excluded from Public Goods, they withhold voluntary payment. Markets produce zero output. Therefore, the State must finance them through <strong>compulsory sovereign taxation</strong>.
          </div>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">6</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 7 (RECTO): SPECIALIZED GOODS & EXAMINATION LENSES
       ========================================================= -->
  <div class="page recto">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <div class="subsection-banner">
            <span>E. Specialized Goods Typology (High-Yield Traps)</span>
          </div>

          <table class="sketch-table" style="margin-bottom: 3mm;">
            <thead>
              <tr>
                <th style="width: 22%;">Good Type</th>
                <th style="width: 48%;">Defining Epistemic Mechanism</th>
                <th style="width: 30%;">Real-World Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Merit Goods</strong></td>
                <td>Social benefit exceeds private benefit (positive externalities); under-consumed if left to free market forces.</td>
                <td>Primary education, immunization vaccines, basic healthcare. State subsidizes.</td>
              </tr>
              <tr>
                <td><strong>Demerit Goods</strong></td>
                <td>Social cost exceeds private cost (negative externalities); over-consumed in free markets due to imperfect info.</td>
                <td>Cigarettes, alcohol, gambling. State levies heavy sin taxes or bans.</td>
              </tr>
              <tr>
                <td><strong>Veblen Goods</strong></td>
                <td>Conspicuous luxury goods whose demand INCREASES as price rises (Status/Snob appeal). Violates Law of Demand.</td>
                <td>Rolex watches, designer jewelry, luxury sports cars.</td>
              </tr>
              <tr>
                <td><strong>Giffen Goods</strong></td>
                <td>Non-luxury inferior staple goods whose demand INCREASES as price rises due to an overwhelming negative income effect.</td>
                <td>Coarse grains (bajra, potatoes) for destitute households.</td>
              </tr>
            </tbody>
          </table>

          <!-- Section 1.7 Header -->
          <div class="section-bar">
            <div class="section-tag-box">§ 1.7</div>
            <div class="section-title-box">Multi-Examination Analytical Lenses</div>
          </div>

          <div class="card-box" style="margin-bottom: 2.5mm;">
            <strong style="font-size: 9pt;">1. UPSC Civil Services &amp; APFC Lens:</strong>
            <p style="font-size: 8.5pt; margin-top: 1mm; margin-bottom: 1.5mm;">
              Focuses on structural market failures: Why the market under-supplies Merit Goods and pure Public Goods. Questions frequently test the <strong>Free-Rider problem</strong>, <strong>Tragedy of the Commons</strong>, and the distinction between <strong>Intermediate vs. Final Goods</strong> in supply chains. Conceptual link: Relate Public Goods to Article 21 (Clean Environment, Health) and DPSPs.
            </p>
          </div>

          <div class="card-box" style="margin-bottom: 2.5mm;">
            <strong style="font-size: 9pt;">2. RPSC RAS &amp; State PCS Lens:</strong>
            <ul class="bullet-list" style="font-size: 8.2pt; margin-top: 1mm;">
              <li><strong>2-Markers:</strong> Define Opportunity Cost (value of next best sacrifice). Differentiate Gross vs Net Investment ($$\\text{Gross} - \\text{CFC} = \\text{Net}$$).</li>
              <li><strong>5-Markers:</strong> Explain the 4-quadrant classification of goods based on excludability and rivalry with examples. Analyze circular flow in a 3-sector economy.</li>
              <li><strong>10-Markers:</strong> Trace the evolution of India's mixed economy from state commanding heights to regulatory market governance post-1991.</li>
            </ul>
          </div>

          <div class="card-box">
            <strong style="font-size: 9pt;">3. Banking &amp; RBI Grade B Lens:</strong>
            <p style="font-size: 8.5pt; margin-top: 1mm;">
              Focuses on Macroeconomic Equilibrium of Leakages and Injections ($$S + T + M = I + G + X$$). Emphasizes transmission of Gross Fixed Capital Formation (GFCF) into productive capacity and separating unexpected capital losses from depreciation in national balance sheets.
            </p>
          </div>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">7</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

  <!-- =========================================================
       PAGE 8 (VERSO): EXAM TRAPS, MEMORY SKELETON & CARDS
       ========================================================= -->
  <div class="page verso">
    <div class="border-outer">
      <div class="border-inner">

        <!-- Running Header -->
        <div class="running-header">
          <span>Shelf 007 • Indian Macroeconomic Architecture</span>
          <span>Chapter 01</span>
        </div>

        <div class="content-area">

          <!-- Section 1.8 Header -->
          <div class="section-bar" style="margin-top: 1mm; margin-bottom: 1.8mm;">
            <div class="section-tag-box">§ 1.8</div>
            <div class="section-title-box">Examiner Traps &amp; Warning Vault</div>
          </div>

          <div class="split-row" style="margin-bottom: 2mm; gap: 2.5mm;">
            <div class="col-half exam-trap-sketch" style="margin-bottom: 0;">
              <div class="exam-trap-sketch-header">⚡ TRAP 1: Physical Nature Fallacy</div>
              <div class="exam-trap-sketch-body" style="font-size: 8.2pt; padding: 1.8mm 2.5mm;">
                <strong>Trap:</strong> "A computer/tractor is always a capital good."<br>
                <strong>Correction:</strong> FALSE. Determined strictly by <strong>end-use</strong>. Computer in an IT firm = Capital Good; computer bought by a student for gaming = Consumer Durable.
              </div>
            </div>
            <div class="col-half exam-trap-sketch" style="margin-bottom: 0;">
              <div class="exam-trap-sketch-header">⚡ TRAP 2: Depreciation vs Capital Loss</div>
              <div class="exam-trap-sketch-body" style="font-size: 8.2pt; padding: 1.8mm 2.5mm;">
                <strong>Trap:</strong> "Factory destroyed in an earthquake is deducted as Depreciation."<br>
                <strong>Correction:</strong> FALSE. Disasters cause <strong>Capital Losses</strong>, recorded in Balance Sheets. Depreciation (CFC) covers only normal foreseen wear/tear.
              </div>
            </div>
          </div>

          <div class="exam-trap-sketch" style="margin-bottom: 2mm;">
            <div class="exam-trap-sketch-header">⚡ TRAP 3: Public Goods vs. Publicly Provided Goods</div>
            <div class="exam-trap-sketch-body" style="font-size: 8.2pt; padding: 1.8mm 2.5mm;">
              <strong>Trap:</strong> "Any good provided by the Government is a Public Good."<br>
              <strong>Correction:</strong> FALSE. The State often provides <strong>Private Goods</strong> (subsidized wheat in PDS ration shops, train tickets). A good is only a Public Good if it satisfies both <strong>non-excludability and non-rivalry</strong> (national defense, street lighting).
            </div>
          </div>

          <!-- Section 1.9 Header -->
          <div class="section-bar" style="margin-top: 1mm; margin-bottom: 1.8mm;">
            <div class="section-tag-box">§ 1.9</div>
            <div class="section-title-box">60-Second Memory Skeleton (Rapid Recall)</div>
          </div>

          <div class="card-box" style="padding: 1.5mm 2.5mm; margin-bottom: 2mm; font-size: 8pt; line-height: 1.35; background: #fafafa;">
            <strong>Scarcity ⟶ Choice ⟶ Opportunity Cost</strong> • <strong>PPF:</strong> Slope = Marginal Rate of Transformation ($$MRT$$) • <strong>Three Questions:</strong> What (allocation), How (technique), For Whom (distribution) • <strong>Four Sectors:</strong> Households, Firms, Govt, External • <strong>Equilibrium:</strong> $$S + T + M = I + G + X$$ • <strong>End-Use Rule:</strong> Final (in GDP) vs. Intermediate (excluded to prevent double-counting) • <strong>CFC:</strong> Foreseen wear/tear; Disasters = Capital Loss • <strong>Goods Matrix:</strong> Private (Ex+Riv), Club (Ex+NonRiv), Common Pool (NonEx+Riv), Public (NonEx+NonRiv) • <strong>Special:</strong> Merit (Subsidized), Demerit (Sin tax), Veblen (Status luxury), Giffen (Inferior staple).
          </div>

          <!-- Section 1.10 Header -->
          <div class="section-bar" style="margin-top: 1mm; margin-bottom: 1.8mm;">
            <div class="section-tag-box">§ 1.10</div>
            <div class="section-title-box">Active Recall Diagnostic Cards</div>
          </div>

          <div class="recall-card-sketch" style="margin-bottom: 1.5mm;">
            <div class="recall-card-sketch-header" style="padding: 1mm 2.5mm; font-size: 7.2pt;">✦ Card 1: Free-Rider Failure in Public Goods</div>
            <div class="recall-card-sketch-body" style="padding: 1.5mm 2.5mm; font-size: 8.2pt; line-height: 1.35;">
              <strong>Q: Why does "Non-Excludability" cause market mechanisms to fail?</strong><br>
              Non-paying consumers cannot be excluded. Rational consumers act as <strong>Free Riders</strong>. Because private producers cannot generate revenue through market prices, expected profit is zero, and markets produce zero output. Sovereign tax financing is compulsory.
            </div>
          </div>

          <div class="recall-card-sketch" style="margin-bottom: 1.5mm;">
            <div class="recall-card-sketch-header" style="padding: 1mm 2.5mm; font-size: 7.2pt;">✦ Card 2: Intermediate vs. Capital Good Accounting</div>
            <div class="recall-card-sketch-body" style="padding: 1.5mm 2.5mm; font-size: 8.2pt; line-height: 1.35;">
              <strong>Q: How does national accounting classify paper sheets (₹50k) vs. a printing press (₹10L)?</strong><br>
              <strong>Paper (₹50k):</strong> Intermediate Good (physically transformed and entirely used up; embedded in final book price; counting separately = double-counting).<br>
              <strong>Printing Press (₹10L):</strong> Final Capital Good / GFCF (yields productive services across multiple cycles, depreciates gradually, added to Gross Investment in GDP).
            </div>
          </div>

          <div class="recall-card-sketch" style="margin-bottom: 0;">
            <div class="recall-card-sketch-header" style="padding: 1mm 2.5mm; font-size: 7.2pt;">✦ Card 3: Common Pool Resources &amp; Tragedy of Commons</div>
            <div class="recall-card-sketch-body" style="padding: 1.5mm 2.5mm; font-size: 8.2pt; line-height: 1.35;">
              <strong>Q: Why is an open-access aquifer a Common Pool Resource rather than a Public Good?</strong><br>
              It is <strong>non-excludable</strong> (any farmer can drill a borewell) but <strong>rivalrous in consumption</strong> (water drawn reduces the table for neighbors). This induces the <strong>Tragedy of the Commons</strong>: individual self-interest leads to competitive over-extraction and aquifer collapse.
            </div>
          </div>

        </div>

        <!-- Running Footer -->
        <div class="running-footer">
          <div class="footer-col">Mind of Aravalli Press</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">8</div>
          <div class="footer-divider-vert"></div>
          <div class="footer-col">Sovereign Master Codex • Volume I</div>
        </div>

      </div>
    </div>
  </div>

</body>
</html>`;

  console.log('Rendering Chapter 01 (Sketch-Grade Layout) via Edge headless...');
  renderHtmlToPdf(html, pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log(`✓ Chapter 01 generated successfully: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
