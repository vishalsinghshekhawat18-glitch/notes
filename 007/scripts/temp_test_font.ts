import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import katex from 'katex';

function renderMath(tex: string, displayMode = false): string {
  try {
    return katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
    });
  } catch (e) {
    return tex;
  }
}

function renderHtmlToPdf(html: string, pdfOutPath: string) {
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const tempHtmlPath = pdfOutPath.replace(/\.pdf$/i, '.html');
  fs.writeFileSync(tempHtmlPath, html, 'utf-8');

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-master-fused-'));
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

  const pdfPath = path.join(outDir, 'temp_test_11_5.pdf');
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');

  // Load KaTeX CSS
  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

  // Math expressions pre-rendered
  const mathLeakages = renderMath('\\mathbf{S + T + M = I + G + X}', true);
  const mathGrossInv = renderMath('\\text{Gross Investment} = \\text{Net Addition to Fixed Assets} + \\Delta\\text{Inventories}', true);
  const mathNetInv = renderMath('\\text{Net Investment} = \\text{Gross Investment} - \\text{Depreciation (CFC)}', true);
  const mathInlineEquil = renderMath('S + T + M = I + G + X', false);
  const mathInlineMRT = renderMath('\\text{MRT}', false);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Chapter 01: Foundations of Economic Organization</title>
<style>
  ${katexCss}

  @page {
    size: A4 portrait;
    margin: 0;
  }

  :root {
    --ink: #000;
    --ink2: #222;
    --rule: #555;
    --rule-light: #aaa;
    --tint: #f3f3f3;
    --tint-subtle: #fafafa;
    --serif: "Times New Roman", "Baskerville", "Georgia", serif;
    --sans: "Helvetica Neue", "Arial", sans-serif;
    --mono: "Courier New", Courier, monospace;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    margin: 0;
    font-family: var(--serif);
    color: var(--ink);
    font-size: 11.5pt;
    line-height: 1.44;
    background: #fff;
  }

  /* =========================================================
     PAGE CONTAINER WITH DUPLEX ALTERNATING GUTTERS
     ========================================================= */
  .page {
    width: 210mm;
    height: 297mm;
    position: relative;
    page-break-after: always;
    overflow: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .page:last-child {
    page-break-after: avoid;
  }

  /* Recto (Odd: 1, 3, 5, 7) -> 24mm Left Binding Gutter, 14mm Right Margin */
  .page.recto {
    padding: 13mm 14mm 12mm 24mm;
  }

  /* Verso (Even: 2, 4, 6, 8) -> 14mm Left Margin, 24mm Right Binding Gutter */
  .page.verso {
    padding: 13mm 24mm 12mm 14mm;
  }

  /* =========================================================
     RUNNING HEADERS & FOOTERS
     ========================================================= */
  .rh {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 0.8pt solid #000;
    padding-bottom: 1.2mm;
    margin-bottom: 3.2mm;
    font: 700 7pt var(--sans);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #222;
  }

  .rf {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5mm;
    padding-top: 1.2mm;
    border-top: 0.8pt solid #000;
  }

  .rf-left {
    font: 700 7pt var(--sans);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #222;
  }

  .rf-page {
    font: 700 10.5pt var(--serif);
    color: #000;
    margin-left: auto;
  }

  .page-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  /* =========================================================
     CHAPTER OPENER BANNER (PAGE 1)
     ========================================================= */
  .opener {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5mm;
    border-top: 2pt solid #000;
    border-bottom: 0.8pt solid #000;
    padding: 3mm 0;
    margin-bottom: 3.2mm;
  }

  .opener .n-box {
    border: 1.2pt solid #000;
    background: #f7f7f7;
    padding: 1.5mm 3.5mm;
    text-align: center;
    flex-shrink: 0;
  }

  .opener .n-lbl {
    font: 800 6.5pt var(--sans);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #333;
  }

  .opener .n {
    font: 900 28pt/0.95 var(--serif);
    letter-spacing: -0.02em;
    color: #000;
  }

  .opener .t {
    flex-grow: 1;
  }

  .opener .t small {
    display: block;
    font: 700 6.8pt var(--sans);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 1.2mm;
  }

  .opener .t h1 {
    font: 900 14pt/1.18 var(--sans);
    margin: 0;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000;
  }

  .opener .citadel-box {
    flex-shrink: 0;
  }

  .opener .citadel-box img {
    height: 18mm;
    width: auto;
    display: block;
    object-fit: contain;
  }

  /* =========================================================
     SECTION BARS & SUBSECTION HEADERS
     ========================================================= */
  .section-bar {
    display: flex;
    align-items: center;
    gap: 3mm;
    background: #f0f0f0;
    border: 0.8pt solid #000;
    padding: 1.2mm 2.5mm;
    margin: 2.8mm 0 2.2mm;
  }

  .section-bar.first {
    margin-top: 0;
  }

  .sec-pill {
    background: #000;
    color: #fff;
    font: 800 8.5pt var(--sans);
    padding: 0.6mm 2.2mm;
    letter-spacing: 0.05em;
    flex-shrink: 0;
  }

  .sec-title {
    font: 800 10.5pt var(--sans);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #000;
  }

  .subsec-bar {
    display: flex;
    align-items: center;
    gap: 2mm;
    background: #f7f7f7;
    border-left: 3.5pt solid #000;
    padding: 1mm 2.5mm;
    margin: 2.2mm 0 1.6mm;
    font: 700 9.2pt var(--sans);
    color: #000;
  }

  p {
    margin: 0 0 1.8mm;
    text-align: justify;
    text-justify: inter-word;
  }

  .dc:first-letter {
    font: 700 24pt/0.8 var(--serif);
    float: left;
    padding: 0.8mm 1.8mm 0 0;
    color: #000;
  }

  .term {
    font-weight: 700;
    font-variant: small-caps;
    letter-spacing: 0.02em;
  }

  /* =========================================================
     SKETCH-GRADE ILLUSTRATION & CONTENT CARDS
     ========================================================= */
  .dashed-card {
    border: 0.8pt dashed #666;
    padding: 2.2mm 3mm;
    margin-bottom: 2.5mm;
    background: #fff;
  }

  .card-2col {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3.5mm;
    align-items: center;
  }

  .card-2col-equal {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.5mm;
    align-items: center;
  }

  /* Scarcity Flowchart Box */
  .scarcity-flow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2mm;
  }

  .flow-row {
    display: flex;
    align-items: center;
    gap: 2mm;
    width: 100%;
    justify-content: center;
  }

  .flow-pill {
    border: 0.8pt solid #333;
    padding: 1mm 2.5mm;
    font: 700 8pt var(--sans);
    background: #fafafa;
    text-align: center;
  }

  .flow-pill.dark {
    background: #000;
    color: #fff;
    border-color: #000;
  }

  .flow-arr {
    font: 700 8.5pt var(--sans);
  }

  /* Key Takeaway / Lesson Boxes */
  .key-lesson-box {
    background: #f2f2f2;
    border-left: 3pt solid #000;
    padding: 1.5mm 2.5mm;
    margin-top: 1.5mm;
    font-size: 8.8pt;
    line-height: 1.35;
  }

  .takeaway-bar {
    background: #000;
    color: #fff;
    padding: 1.6mm 3mm;
    margin-top: 1.5mm;
    font: 700 8.6pt var(--sans);
    text-align: center;
    letter-spacing: 0.02em;
  }

  /* =========================================================
     ECONOMIC SYSTEMS CARDS (PAGES 2 & 3)
     ========================================================= */
  .sys-card {
    border: 0.8pt dashed #666;
    padding: 2.2mm 3mm;
    margin-bottom: 2.5mm;
    background: #fff;
  }

  .sys-card-header {
    font: 700 9.2pt var(--sans);
    border-bottom: 0.6pt solid #ccc;
    padding-bottom: 1mm;
    margin-bottom: 1.6mm;
    color: #000;
  }

  .sys-grid {
    display: grid;
    grid-template-columns: 1fr 48mm;
    gap: 3.5mm;
    align-items: center;
  }

  .sys-bullets {
    font-size: 9pt;
    line-height: 1.35;
  }

  .sys-bullets div {
    margin-bottom: 1.2mm;
  }

  .sys-bullets b {
    font-family: var(--sans);
    font-size: 8.2pt;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #111;
  }

  .sys-img-box {
    text-align: center;
  }

  .sys-img-box img {
    max-width: 100%;
    height: auto;
    max-height: 32mm;
    display: block;
    margin: 0 auto;
    object-fit: contain;
  }

  /* =========================================================
     SECTORS & TABLES (PAGE 4)
     ========================================================= */
  table.t-grid {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.8pt;
    margin-bottom: 2mm;
  }

  table.t-grid th, table.t-grid td {
    border: 0.6pt solid #444;
    padding: 1.4mm 2mm;
    vertical-align: top;
  }

  table.t-grid th {
    background: #000;
    color: #fff;
    font: 700 8pt var(--sans);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    text-align: left;
  }

  table.t-grid tr:nth-child(even) td {
    background: #f9f9f9;
  }

  .macro-sect-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5mm;
    margin-bottom: 2.5mm;
  }

  .macro-card {
    border: 0.8pt solid #000;
    padding: 2mm 2.5mm;
    background: #fafafa;
    position: relative;
  }

  .macro-card-head {
    display: flex;
    align-items: center;
    gap: 1.8mm;
    font: 700 8.8pt var(--sans);
    margin-bottom: 1.2mm;
    border-bottom: 0.5pt solid #bbb;
    padding-bottom: 0.8mm;
  }

  .macro-pill {
    background: #000;
    color: #fff;
    font: 800 7.5pt var(--sans);
    width: 4mm;
    height: 4mm;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
  }

  .macro-card-body {
    font-size: 8.5pt;
    line-height: 1.35;
  }

  /* =========================================================
     EXAMINER TRAPS HAZARD STRIPE BOX (.TRAP)
     ========================================================= */
  .trap-card {
    border: 0.8pt solid #000;
    border-left: 6mm solid transparent;
    border-image: repeating-linear-gradient(
      -45deg,
      #000,
      #000 3mm,
      #fff 3mm,
      #fff 6mm
    ) 16;
    padding: 2mm 3mm;
    margin-bottom: 2.5mm;
    background: #fff;
    font-size: 8.8pt;
    line-height: 1.35;
  }

  .trap-card-head {
    font: 800 8.5pt var(--sans);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1mm;
    display: flex;
    align-items: center;
    gap: 1.5mm;
  }

  /* =========================================================
     MEMORY SKELETON (.SK)
     ========================================================= */
  .sk-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.6pt;
    margin-bottom: 2.5mm;
  }

  .sk-table td {
    border-bottom: 0.5pt solid #ccc;
    padding: 1.2mm 2mm;
    vertical-align: top;
  }

  .sk-table td.sk-key {
    font-family: var(--sans);
    font-weight: 700;
    font-size: 8.2pt;
    width: 32mm;
    background: #f7f7f7;
    border-right: 0.6pt solid #bbb;
  }

  /* =========================================================
     DIAGNOSTIC CARDS
     ========================================================= */
  .diag-card {
    border: 0.8pt solid #000;
    margin-bottom: 2.2mm;
    background: #fff;
  }

  .diag-q {
    background: #f2f2f2;
    border-bottom: 0.6pt solid #000;
    padding: 1.4mm 2.5mm;
    font: 700 8.5pt var(--sans);
  }

  .diag-a {
    padding: 1.8mm 2.5mm;
    font-size: 8.6pt;
    line-height: 1.35;
  }

  .diag-a b {
    font-family: var(--sans);
    font-size: 8.2pt;
    text-transform: uppercase;
  }

</style>
</head>
<body>

  <!-- =========================================================
       PAGE 1 (RECTO): OPENER, § 1.1 SCARCITY & PARADOX (NO HEADER)
       ========================================================= -->
  <div class="page recto">
    <div>
      <div class="opener">
        <div class="n-box">
          <div class="n-lbl">Chapter</div>
          <div class="n">01</div>
        </div>
        <div class="t">
          <small>C H A P T E R &nbsp; 0 1</small>
          <h1>FOUNDATIONS OF ECONOMIC ORGANIZATION</h1>
        </div>
        <div class="citadel-box">
          <img src="file:///${assetsDir}/ch1_opener_fort.png" alt="Aravalli Ridge Historic Citadel" />
        </div>
      </div>

      <div class="section-bar first">
        <span class="sec-pill">§ 1.1</span>
        <span class="sec-title">The Epistemic Foundation: Scarcity &amp; The Economic Problem</span>
      </div>

      <div class="subsec-bar">
        <span>The Universal Dilemma: Unlimited Wants vs. Scarce Means</span>
      </div>
      <p class="dc">Economics is the study of how human societies allocate scarce resources that have alternative uses to satisfy unlimited human wants (Lionel Robbins, 1932).</p>
      <p>If resources were infinite, goods would be "free goods" (like atmospheric air in its natural state), prices would not exist, and economic systems would be unnecessary. Absolute scarcity forces every human society to make choices, and every choice irrevocably incurs an <span class="term">Opportunity Cost</span>.</p>

      <div class="dashed-card">
        <div class="card-2col">
          <div class="scarcity-flow">
            <div class="flow-row">
              <span class="flow-pill">Unlimited Human Desires</span>
              <span class="flow-arr">vs.</span>
              <span class="flow-pill">Finite Productive Resources</span>
            </div>
            <div class="flow-arr">▼</div>
            <div class="flow-pill dark">Absolute Scarcity</div>
            <div class="flow-arr">▼</div>
            <div class="flow-pill">Compulsory Choice</div>
            <div class="flow-arr">▼</div>
            <div class="flow-pill dark">Opportunity Cost</div>
            <div style="font-size: 7.5pt; font-style: italic; color: #444; margin-top: 0.5mm;">
              (Value of the next best alternative foregone)
            </div>
          </div>
          <div style="text-align: center; width: 55mm;">
            <img src="file:///${assetsDir}/ch1_scarcity_signpost.png" style="max-width: 100%; height: auto; max-height: 27mm; display: block; margin: 0 auto;" alt="Scarcity Signpost" />
          </div>
        </div>
      </div>

      <div class="subsec-bar">
        <span>The Beginner's Mental Model: The “Car Mileage in a Lab” Analogy (Ceteris Paribus)</span>
      </div>
      <div class="dashed-card">
        <div class="card-2col">
          <div>
            <p style="font-size: 8.8pt; margin-bottom: 1.2mm;">
              <strong>Pedagogical Insight (K. Sankarganesh):</strong> Why do economic theories rely on assumptions like "All other things being equal" (<em>Ceteris Paribus</em>)?
            </p>
            <p style="font-size: 8.6pt; line-height: 1.35; margin-bottom: 1.2mm;">
              In a car's brochure, the maker claims <strong>22 KMPL</strong>. Yet in Indian city traffic, it yields only 15 KMPL. The 22 KMPL was measured under controlled lab conditions—a frictionless track, calibrated tire pressure, and zero congestion—to isolate engine efficiency.
            </p>
            <div class="key-lesson-box">
              <strong>The Economic Lesson:</strong> Economists formulate laws (e.g., Law of Demand) by holding other variables constant (<em>Ceteris Paribus</em>) to isolate causal engines before layering real-world friction.
            </div>
          </div>
          <div style="text-align: center; width: 45mm;">
            <img src="file:///${assetsDir}/ch1_car_analogy.png" style="max-width: 100%; height: auto; max-height: 32mm; display: block; margin: 0 auto;" alt="Car Mileage Analogy" />
          </div>
        </div>
      </div>

      <div class="subsec-bar">
        <span>The Adam Smith Water-Diamond Paradox: Value-in-Use vs. Value-in-Exchange</span>
      </div>
      <p style="font-style: italic; font-size: 8.8pt; margin-bottom: 1.5mm;">
        Why is life-giving water virtually free, while useless decorative diamonds command millions?
      </p>
      <div class="dashed-card" style="margin-bottom: 1.5mm;">
        <div class="card-2col-equal">
          <div style="display: flex; gap: 2.5mm; align-items: center;">
            <img src="file:///${assetsDir}/ch1_water_glass.png" style="height: 17mm; width: auto;" alt="Water Glass" />
            <div style="font-size: 8.5pt; line-height: 1.35;">
              <strong>Value-in-Use:</strong> Essential for survival, but in immense abundance. The <strong>Marginal Utility</strong> of the last glass drops to near zero, yielding negligible price.
            </div>
          </div>
          <div style="display: flex; gap: 2.5mm; align-items: center;">
            <img src="file:///${assetsDir}/ch1_diamond.png" style="height: 15mm; width: auto;" alt="Diamond" />
            <div style="font-size: 8.5pt; line-height: 1.35;">
              <strong>Value-in-Exchange:</strong> Exceptionally scarce. The <strong>Marginal Utility</strong> of the last unit is astronomical, commanding exorbitant exchange price.
            </div>
          </div>
        </div>
      </div>

      <div class="takeaway-bar">
        Core Takeaway: Market prices reflect Marginal Utility and Scarcity, NOT total utility or moral necessity!
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">1</span>
    </div>
  </div>

  <!-- =========================================================
       PAGE 2 (VERSO): PPF, THREE QUESTIONS, MARKET ECONOMY
       ========================================================= -->
  <div class="page verso">
    <div>
      <div class="rh">
        <span>Shelf 007 : Indian Macroeconomic Architecture</span>
        <span>Chapter 01 : Foundations of Economic Organization</span>
      </div>

      <div class="subsec-bar" style="margin-top: 0;">
        <span>The Production Possibility Frontier (PPF)</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        The PPF demonstrates the maximum feasible combinations of two goods an economy can produce given fixed resources and technology:
      </p>

      <div class="dashed-card" style="margin-bottom: 2.5mm;">
        <div class="card-2col">
          <div style="font-size: 8.6pt; line-height: 1.38;">
            <div style="margin-bottom: 1.2mm;">
              <strong>Points on Curve:</strong> Productive efficiency (full resource employment and optimal allocation).
            </div>
            <div style="margin-bottom: 1.2mm;">
              <strong>Points inside Curve:</strong> Inefficiency or under-utilization (unemployment, idle factories, wasted inputs).
            </div>
            <div style="margin-bottom: 1.2mm;">
              <strong>Points outside Curve:</strong> Currently unattainable without economic growth (technological shift, capital accumulation).
            </div>
            <div>
              <strong>Slope of PPF:</strong> Represents <strong>Marginal Rate of Transformation (${mathInlineMRT})</strong>, reflecting increasing opportunity costs as resources are shifted.
            </div>
          </div>
          <div style="text-align: center; width: 60mm;">
            <img src="file:///${assetsDir}/ch1_ppf_graph.png" style="max-width: 100%; height: auto; max-height: 38mm; display: block; margin: 0 auto;" alt="PPF Graph" />
          </div>
        </div>
      </div>

      <div class="section-bar">
        <span class="sec-pill">§ 1.2</span>
        <span class="sec-title">The Three Fundamental Economic Questions</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        Every economic society, regardless of political ideology, must solve three structural allocation questions:
      </p>

      <table class="t-grid" style="margin-bottom: 2.5mm;">
        <thead>
          <tr>
            <th style="width: 32mm;">Fundamental Question</th>
            <th>Structural Economic Decision &amp; Mechanism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. What to produce?</strong></td>
            <td>Allocation of scarce resources between consumer goods and capital goods; civil goods vs. defense equipment.</td>
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

      <div class="section-bar">
        <span class="sec-pill">§ 1.3</span>
        <span class="sec-title">Typology of Economic Systems</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        Human societies organize production and distribution through three primary institutional frameworks:
      </p>

      <div class="sys-card" style="margin-bottom: 0;">
        <div class="sys-card-header">
          1. Market Economy (Capitalism / Free Enterprise)
        </div>
        <div class="sys-grid">
          <div class="sys-bullets">
            <div><b>Core Mechanism:</b> Private ownership of factors of production. Allocation is driven exclusively by Adam Smith's "Invisible Hand"—the market price mechanism operating via supply and demand.</div>
            <div><b>Consumer Sovereignty:</b> Production strictly follows consumer willingness and purchasing ability ("dollar voting").</div>
            <div><b>Critical Vulnerabilities:</b> Severe market failures in public goods (defense, roads), rampant wealth inequality, negative externalities, neglect of social welfare.</div>
            <div><b>Examples:</b> United States, United Kingdom, Singapore.</div>
          </div>
          <div class="sys-img-box">
            <img src="file:///${assetsDir}/ch1_market_economy.png" alt="Market Economy" />
          </div>
        </div>
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">2</span>
    </div>
  </div>

  <!-- =========================================================
       PAGE 3 (RECTO): SOCIALIST, MIXED, COMMAND, TAKEAWAY
       ========================================================= -->
  <div class="page recto">
    <div>
      <div class="rh">
        <span>Chapter 01 : Foundations of Economic Organization</span>
        <span>Shelf 007 : Indian Macroeconomic Architecture</span>
      </div>

      <div class="sys-card" style="margin-top: 0;">
        <div class="sys-card-header">
          2. Socialist Economy (Democratic Socialism)
        </div>
        <div class="sys-grid">
          <div class="sys-bullets">
            <div><b>Core Mechanism:</b> Predominant or total state ownership of factors of production, with central planning to achieve economic and social equality.</div>
            <div><b>Strengths:</b> Substantially reduces income inequality and guarantees provision of essential public merit goods (universal education, healthcare).</div>
            <div><b>Weaknesses:</b> High risk of bureaucratic inefficiency, weak innovation incentives, and potential resource misallocation due to lack of competitive price signals.</div>
            <div><b>Examples:</b> Scandinavian economies (Nordic Model with strong welfare), Cuba (traditional model).</div>
          </div>
          <div class="sys-img-box">
            <img src="file:///${assetsDir}/ch1_socialist_building.png" alt="Socialist Economy" />
          </div>
        </div>
      </div>

      <div class="sys-card">
        <div class="sys-card-header">
          3. Mixed Economy (The Indian Paradigm)
        </div>
        <div class="sys-grid">
          <div class="sys-bullets">
            <div><b>Core Mechanism:</b> Coexistence of a robust Private Sector driven by profit incentives and an active Public Sector regulating markets, providing core infrastructure, and safeguarding equity.</div>
            <div><b>Indian Historical Trajectory:</b>
              <br>• <em>1947–1991 (Nehruvian-Mahalanobis Strategy):</em> Mixed economy with state commanding the "commanding heights" (heavy industry, banking, utilities) via the License-Quota-Permit Raj.
              <br>• <em>Post-1991 (LPG Reforms):</em> Transitioned toward market-friendly governance where private sector drives growth, while state pivots to safety nets and regulation.
            </div>
            <div><b>Critical Vulnerabilities:</b> Policy conflicts, regulatory uncertainty, and potential "crowding out" of private investment.</div>
          </div>
          <div class="sys-img-box">
            <img src="file:///${assetsDir}/ch1_mixed_economy_scale.png" alt="Mixed Economy Scale" />
          </div>
        </div>
      </div>

      <div class="sys-card">
        <div class="sys-card-header">
          4. Command Economy (Centrally Planned Economy)
        </div>
        <div class="sys-grid">
          <div class="sys-bullets">
            <div><b>Core Mechanism:</b> Complete state ownership and control over all productive assets. A central planning authority determines what, how, and for whom to produce.</div>
            <div><b>Strengths:</b> Allows rapid, massive mobilization of national resources for strategic objectives (heavy industrialization, wartime mobilization).</div>
            <div><b>Weaknesses:</b> <strong>Economic Calculation Problem (Ludwig von Mises)</strong>: Without market prices, planners cannot calculate economic value, causing chronic shortages, surpluses, and stagnation.</div>
            <div><b>Examples:</b> Former Soviet Union (Gosplan), North Korea.</div>
          </div>
          <div class="sys-img-box">
            <img src="file:///${assetsDir}/ch1_command_economy_building.png" alt="Command Economy" />
          </div>
        </div>
      </div>

      <div class="dashed-card" style="background: #f9f9f9; padding: 2mm 3mm; margin-bottom: 0;">
        <div style="font: 800 8.5pt var(--sans); text-transform: uppercase; margin-bottom: 1mm; display: flex; align-items: center; gap: 2mm;">
          <span style="background: #000; color: #fff; padding: 0.4mm 1.8mm; font-size: 7.5pt;">SYNTHESIS</span>
          <span>Core Takeaway on Economic Systems</span>
        </div>
        <ul style="padding-left: 4.5mm; font-size: 8.8pt; line-height: 1.35;">
          <li>No modern economy is purely capitalist, socialist, or command in isolation; virtually all operate along a mixed spectrum.</li>
          <li>The critical modern debate is not "State vs. Market," but the precise institutional calibration between market efficiency and state regulatory intervention.</li>
        </ul>
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">3</span>
    </div>
  </div>

  <!-- =========================================================
       PAGE 4 (VERSO): SECTORS OF ECONOMY (CONTINUUM & VENN)
       ========================================================= -->
  <div class="page verso">
    <div>
      <div class="rh">
        <span>Shelf 007 : Indian Macroeconomic Architecture</span>
        <span>Chapter 01 : Foundations of Economic Organization</span>
      </div>

      <div class="section-bar first">
        <span class="sec-pill">§ 1.4</span>
        <span class="sec-title">Sectors of the Economy</span>
      </div>

      <div class="subsec-bar">
        <span>1. Primary, Secondary and Tertiary Sectors</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        Economic activity is classified into three broad sectors based on the nature of output and stage of production:
      </p>

      <div class="dashed-card" style="margin-bottom: 2.5mm;">
        <div class="card-2col">
          <table class="t-grid" style="margin-bottom: 0;">
            <thead>
              <tr>
                <th style="width: 22mm;">Sector</th>
                <th>Definition</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary</strong></td>
                <td>Direct extraction of natural resources from the earth/nature.</td>
                <td>Agriculture, forestry, fishing, mining, quarrying.</td>
              </tr>
              <tr>
                <td><strong>Secondary</strong></td>
                <td>Processing of raw materials into finished manufactured goods.</td>
                <td>Manufacturing, construction, power, basic industries (steel).</td>
              </tr>
              <tr>
                <td><strong>Tertiary</strong></td>
                <td>Provision of tangible and intangible services.</td>
                <td>Trade, transport, banking, IT, education, healthcare.</td>
              </tr>
            </tbody>
          </table>
          <div style="text-align: center; width: 62mm;">
            <img src="file:///${assetsDir}/ch1_three_sectors_continuum.png" style="max-width: 100%; height: auto; max-height: 40mm; display: block; margin: 0 auto;" alt="Three Sectors Continuum" />
          </div>
        </div>
      </div>

      <div class="subsec-bar">
        <span>2. Further Classification of Sectors</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        Sectors are also categorized on the basis of ownership, legal organization, and formality:
      </p>

      <div class="dashed-card" style="margin-bottom: 2.2mm;">
        <div class="card-2col">
          <div style="font-size: 8.5pt; line-height: 1.35;">
            <div style="border: 0.6pt solid #ccc; background: #fafafa; padding: 1.4mm 2mm; margin-bottom: 1.2mm;">
              <strong>A. Organised vs. Unorganised Sector:</strong>
              <br>• <em>Organised:</em> Registered under government laws, formal job security, social security benefits.
              <br>• <em>Unorganised:</em> Small, unregistered units, low capital, absence of formal labor protections.
            </div>
            <div style="border: 0.6pt solid #ccc; background: #fafafa; padding: 1.4mm 2mm; margin-bottom: 1.2mm;">
              <strong>B. Public vs. Private Sector:</strong>
              <br>• <em>Public:</em> Owned and operated by the government with social welfare objective.
              <br>• <em>Private:</em> Owned and operated by individuals/corporations driven by profit motive.
            </div>
            <div style="border: 0.6pt solid #ccc; background: #fafafa; padding: 1.4mm 2mm;">
              <strong>C. Formal vs. Informal Sector:</strong>
              <br>• <em>Formal:</em> Legally registered, pays taxes, maintains audited books, contracts.
              <br>• <em>Informal:</em> Operates outside legal-tax ambit; casual and unprotected employment.
            </div>
          </div>
          <div style="text-align: center; width: 55mm;">
            <img src="file:///${assetsDir}/ch1_sectors_venn_diagram.png" style="max-width: 100%; height: auto; max-height: 46mm; display: block; margin: 0 auto;" alt="Multi-Dimensional Venn Diagram" />
          </div>
        </div>
      </div>

      <div class="subsec-bar">
        <span>3. Sectoral Composition and Economic Development</span>
      </div>
      <div class="dashed-card" style="background: #fdfdfd; padding: 1.8mm 2.5mm; margin-bottom: 0;">
        <div style="font-size: 8.6pt; line-height: 1.35;">
          <div style="margin-bottom: 1mm;">
            <strong>Stage of Development:</strong> Developed economies feature a dominant Tertiary sector (~70–80% of GDP). Developing economies transition out of Primary dominance into Secondary and Tertiary.
          </div>
          <div style="margin-bottom: 1mm;">
            <strong>The Indian Anomaly (Premature De-industrialization / Leapfrogging):</strong> India transitioned directly from Agriculture to Services without establishing a dominant manufacturing base, creating structural employment friction.
          </div>
          <div>
            <strong>Policy Imperative:</strong> Make in India, PLI schemes, and infrastructure corridors aim to correct this sectoral imbalance.
          </div>
        </div>
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">4</span>
    </div>
  </div>

  <!-- =========================================================
       PAGE 5 (RECTO): 4 MACRO SECTORS & CIRCULAR FLOW
       ========================================================= -->
  <div class="page recto">
    <div>
      <div class="rh">
        <span>Chapter 01 : Foundations of Economic Organization</span>
        <span>Shelf 007 : Indian Macroeconomic Architecture</span>
      </div>

      <div class="section-bar first">
        <span class="sec-pill">§ 1.4B</span>
        <span class="sec-title">The Four Macroeconomic Sectors</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        To understand national output and accounting, modern macroeconomics divides the economic universe into four interacting sectors:
      </p>

      <div class="macro-sect-grid">
        <div class="macro-card">
          <div class="macro-card-head">
            <span class="macro-pill">1</span>
            <span>The Household Sector</span>
          </div>
          <div class="macro-card-body">
            <strong>Dual Role:</strong> Ultimate owners of all factors of production (land, labor, capital, entrepreneurship) AND ultimate consumers of final goods and services.
            <br><strong>Income Source:</strong> Factor payments (Rent, Wages, Interest, Profit) and government transfer payments.
          </div>
        </div>
        <div class="macro-card">
          <div class="macro-card-head">
            <span class="macro-pill">2</span>
            <span>The Business Sector (Firms)</span>
          </div>
          <div class="macro-card-body">
            <strong>Production Units:</strong> Hire factor services from households to produce goods and services for sale.
            <br><strong>Objective:</strong> Profit maximization and investment in capital formation.
          </div>
        </div>
        <div class="macro-card">
          <div class="macro-card-head">
            <span class="macro-pill">3</span>
            <span>The Government Sector</span>
          </div>
          <div class="macro-card-body">
            <strong>Regulatory &amp; Welfare Entity:</strong> Collects compulsory taxes, purchases goods/services, produces public goods, and redistributes income via transfers (pensions, subsidies).
          </div>
        </div>
        <div class="macro-card">
          <div class="macro-card-head">
            <span class="macro-pill">4</span>
            <span>The External Sector (Rest of World)</span>
          </div>
          <div class="macro-card-body">
            <strong>International Arena:</strong> Engages in international trade (exports, imports) and cross-border factor flows (remittances, external debt, FDI/FPI investments).
          </div>
        </div>
      </div>

      <div class="section-bar">
        <span class="sec-pill">§ 1.5</span>
        <span class="sec-title">The Circular Flow of Income &amp; Product</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        Economic activity is a continuous, unbroken circle: <strong>Production generates Income, and Income generates Expenditure on Production:</strong>
      </p>

      <div class="dashed-card" style="padding: 1.8mm 2.5mm; margin-bottom: 2.2mm;">
        <div class="flow-row" style="justify-content: space-between;">
          <div class="flow-pill dark" style="flex: 1; margin: 0 1mm;">
            1. Production Phase<br><small style="font-weight: normal;">Generation of Value Added</small>
          </div>
          <span>→</span>
          <div class="flow-pill" style="flex: 1; margin: 0 1mm;">
            2. Income Distribution Phase<br><small style="font-weight: normal;">Distribution of Factor Income</small>
          </div>
          <span>→</span>
          <div class="flow-pill dark" style="flex: 1; margin: 0 1mm;">
            3. Expenditure Phase<br><small style="font-weight: normal;">Disposition of Income on Goods</small>
          </div>
          <span>↺</span>
        </div>
      </div>

      <div class="card-2col-equal" style="margin-bottom: 2.2mm;">
        <div style="border: 0.6pt solid #000; background: #fafafa; padding: 1.8mm 2.2mm;">
          <div style="font: 800 8pt var(--sans); text-transform: uppercase; margin-bottom: 1mm;">
            Real Flows
          </div>
          <p style="font-size: 8.5pt; line-height: 1.35; margin: 0;">
            The physical movement of factor services (labor hours, land usage, capital equipment) from households to firms, and physical goods/services from firms to households.
          </p>
        </div>
        <div style="border: 0.6pt solid #000; background: #fafafa; padding: 1.8mm 2.2mm;">
          <div style="font: 800 8pt var(--sans); text-transform: uppercase; margin-bottom: 1mm;">
            Nominal (Money) Flows
          </div>
          <p style="font-size: 8.5pt; line-height: 1.35; margin: 0;">
            The monetary counterpart: firms paying factor incomes (wages, rent, interest, profit) to households, and households spending money income on goods produced by firms.
          </p>
        </div>
      </div>

      <div class="subsec-bar">
        <span>The Leakages-Injections Equilibrium</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        In an open economy with government, income generated is not fully spent on domestic consumer goods:
      </p>

      <table class="t-grid" style="margin-bottom: 2mm;">
        <thead>
          <tr>
            <th style="width: 50%;">Leakages / Withdrawals (W)</th>
            <th>Injections / Additions (J)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Income diverted away from domestic circular flow:
              <br>• <strong>Savings (S)</strong> by households
              <br>• <strong>Taxes (T)</strong> paid to government
              <br>• <strong>Imports (M)</strong> spent on foreign output
            </td>
            <td>
              Exogenous spending injected into circular flow:
              <br>• <strong>Investment (I)</strong> by business firms
              <br>• <strong>Government Spending (G)</strong> on public goods
              <br>• <strong>Exports (X)</strong> demanded by foreign nations
            </td>
          </tr>
        </tbody>
      </table>

      <div style="border: 1pt solid #000; background: #fff; padding: 2mm 3mm; margin-bottom: 0;">
        <div style="font: 800 8.5pt var(--sans); text-transform: uppercase; margin-bottom: 1mm; text-align: center;">
          Macroeconomic Equilibrium Identity
        </div>
        <div style="font-size: 11pt; text-align: center; margin: 1mm 0 1.5mm;">
          ${mathLeakages}
        </div>
        <p style="font-size: 8.5pt; line-height: 1.35; margin: 0; text-align: center;">
          <strong>Policy Implication:</strong> If Leakages exceed Injections ($W > J$), aggregate demand contracts, driving deflation and unemployment. If Injections exceed Leakages ($J > W$), aggregate demand expands, risking demand-pull inflation.
        </p>
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">5</span>
    </div>
  </div>

  <!-- =========================================================
       PAGE 6 (VERSO): TYPOLOGY OF GOODS & INVESTMENT
       ========================================================= -->
  <div class="page verso">
    <div>
      <div class="rh">
        <span>Shelf 007 : Indian Macroeconomic Architecture</span>
        <span>Chapter 01 : Foundations of Economic Organization</span>
      </div>

      <div class="section-bar first">
        <span class="sec-pill">§ 1.6</span>
        <span class="sec-title">The Universal Typology of Goods</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.8mm;">
        Understanding how goods are classified is the single most heavily tested foundational area across UPSC, RPSC, and Banking exams.
      </p>

      <div class="subsec-bar">
        <span>A. Final Goods vs. Intermediate Goods (The Double-Counting Boundary)</span>
      </div>
      <table class="t-grid" style="margin-bottom: 2mm;">
        <thead>
          <tr>
            <th style="width: 50%;">Final Goods</th>
            <th>Intermediate Goods</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              • Crossed the production boundary line.
              <br>• Purchased for final consumption or capital formation.
              <br>• <strong>Directly included in GDP calculation.</strong>
              <br>• <em>Examples:</em> Bread eaten by a family; car bought by driver.
            </td>
            <td>
              • Remains within the production boundary line.
              <br>• Purchased for resale OR for use as inputs in the same year.
              <br>• <strong>NOT included in GDP</strong> (already embedded in final good).
              <br>• <em>Examples:</em> Flour bought by baker; tires bought by Maruti.
            </td>
          </tr>
        </tbody>
      </table>

      <div style="border: 0.8pt solid #000; background: #fafafa; padding: 1.8mm 2.5mm; margin-bottom: 2.5mm;">
        <div style="font: 800 8.2pt var(--sans); text-transform: uppercase; margin-bottom: 1mm;">
          ★ The Golden Test of Classification: End-Use Principle
        </div>
        <p style="font-size: 8.5pt; line-height: 1.35; margin: 0;">
          A good is NOT defined by its physical nature, but strictly by its <strong>end-use</strong>:
          <br>• Sugar bought by a household → <strong>Final Consumption Good</strong>.
          <br>• Sugar bought by a sweet shop (halwai) → <strong>Intermediate Good</strong>.
          <br>• Coal bought by a thermal power plant → <strong>Intermediate Good</strong>.
          <br>• Coal bought by a family for winter heating → <strong>Final Good</strong>.
        </p>
      </div>

      <div class="subsec-bar">
        <span>B. Consumption Goods vs. Capital Goods</span>
      </div>
      <table class="t-grid" style="margin-bottom: 2mm;">
        <thead>
          <tr>
            <th style="width: 50%;">Consumption Goods</th>
            <th>Capital Goods</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Satisfy human wants directly. Sub-divided into:
              <br>1. <strong>Durable Goods:</strong> Lifespan ≥ 3 years (cars, TV, AC).
              <br>2. <strong>Semi-Durable Goods:</strong> Lifespan ~1 year (clothes, shoes).
              <br>3. <strong>Non-Durable Goods:</strong> Single-use (milk, petrol, bread).
              <br>4. <strong>Services:</strong> Intangibles (banking, healthcare, legal).
            </td>
            <td>
              Tangible durable tools produced for further production:
              <br>• Machine tools, tractors, factory buildings, blast furnaces.
              <br>• Undergo wear and tear over time (Depreciation).
              <br>• <em>Rule:</em> All capital goods are producer goods, but not all producer goods are capital goods (single-use raw materials are producer goods, but not capital goods).
            </td>
          </tr>
        </tbody>
      </table>

      <div class="subsec-bar">
        <span>C. Gross Investment, Depreciation &amp; Net Investment</span>
      </div>
      <div class="card-2col-equal" style="margin-bottom: 2mm;">
        <div style="border: 0.6pt solid #ccc; background: #fafafa; padding: 1.5mm 2mm; font-size: 8.4pt;">
          <strong>Consumption of Fixed Capital (CFC / Depreciation):</strong> Expected, normal wear and tear and foreseen obsolescence of capital assets during normal production.
        </div>
        <div style="border: 0.6pt solid #ccc; background: #fafafa; padding: 1.5mm 2mm; font-size: 8.4pt;">
          <strong>Capital Loss (Unforeseen Destruction):</strong> Destruction caused by natural disasters (earthquakes, floods) or wars. Capital loss is <strong>NOT depreciation</strong> and is never deducted to arrive at Net National Product.
        </div>
      </div>

      <div style="border: 1pt solid #000; background: #fff; padding: 1.8mm 2.5mm; margin-bottom: 0;">
        <div style="font: 800 8.2pt var(--sans); text-transform: uppercase; margin-bottom: 1mm; text-align: center;">
          National Accounting Identities
        </div>
        <div style="font-size: 10pt; text-align: center; margin: 1mm 0;">
          ${mathGrossInv}
        </div>
        <div style="font-size: 10pt; text-align: center; margin: 1mm 0;">
          ${mathNetInv}
        </div>
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">6</span>
    </div>
  </div>

  <!-- =========================================================
       PAGE 7 (RECTO): 4-QUADRANT MATRIX & EXAM LENSES
       ========================================================= -->
  <div class="page recto">
    <div>
      <div class="rh">
        <span>Chapter 01 : Foundations of Economic Organization</span>
        <span>Shelf 007 : Indian Macroeconomic Architecture</span>
      </div>

      <div class="subsec-bar" style="margin-top: 0;">
        <span>D. The Four-Quadrant Excludability &amp; Rivalry Matrix</span>
      </div>
      <p style="font-size: 8.8pt; margin-bottom: 1.5mm;">
        Economics categorizes all goods in society by two physical and legal characteristics:
        <br>• <strong>Excludability:</strong> Can individuals be prevented from consuming the good if they do not pay for it?
        <br>• <strong>Rivalry:</strong> Does one person's consumption diminish the amount available for another person?
      </p>

      <table class="t-grid" style="margin-bottom: 2mm;">
        <thead>
          <tr>
            <th style="width: 26mm;"></th>
            <th style="width: 50%;">Rivalrous (Diminishing)</th>
            <th>Non-Rivalrous (Non-Diminishing)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="background: #000; color: #fff; font-weight: 700;">Excludable</td>
            <td>
              <strong>PRIVATE GOODS</strong>
              <br>• Food, clothing, smartphones, cars.
              <br>• Toll roads with traffic congestion.
            </td>
            <td>
              <strong>CLUB GOODS (Toll Goods)</strong>
              <br>• Cinemas, subscription TV (Netflix), gym.
              <br>• Toll highway (uncongested).
            </td>
          </tr>
          <tr>
            <td style="background: #000; color: #fff; font-weight: 700;">Non-Excludable</td>
            <td>
              <strong>COMMON POOL RESOURCES</strong>
              <br>• Ocean fisheries, pastures, groundwater aquifers.
              <br>• Public road in peak hour traffic.
            </td>
            <td>
              <strong>PURE PUBLIC GOODS</strong>
              <br>• National defense, lighthouses, clean air.
              <br>• Street lights, flood control dams.
            </td>
          </tr>
        </tbody>
      </table>

      <div class="card-2col-equal" style="margin-bottom: 2.2mm;">
        <div style="border: 0.6pt solid #000; background: #fafafa; padding: 1.5mm 2mm; font-size: 8.3pt; line-height: 1.35;">
          <strong>Pure Public Goods &amp; Free-Rider Problem:</strong> Once provided, non-payers cannot be excluded, and one citizen's consumption does not diminish protection for another. Consumers withhold voluntary payment; competitive markets produce zero output. The State must finance them via compulsory taxation.
        </div>
        <div style="border: 0.6pt solid #000; background: #fafafa; padding: 1.5mm 2mm; font-size: 8.3pt; line-height: 1.35;">
          <strong>Common Resources &amp; Tragedy of Commons:</strong> Anyone can access the resource, but every unit harvested diminishes the remaining stock for others. Individual self-interest leads to over-exploitation and collapse (Garrett Hardin). Solved via quotas or community governance (Elinor Ostrom).
        </div>
      </div>

      <div class="subsec-bar">
        <span>E. Specialized Goods Typology (Frequently Tested Traps)</span>
      </div>
      <table class="t-grid" style="margin-bottom: 2.2mm;">
        <thead>
          <tr>
            <th style="width: 25mm;">Good Type</th>
            <th style="width: 48mm;">Defining Epistemic Mechanism</th>
            <th>Real-World Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Merit Goods</strong></td>
            <td>Goods whose social benefit exceeds private benefit (positive externalities); under-consumed if left to market forces.</td>
            <td>Primary education, immunization vaccines, basic healthcare. State subsidizes or provides free of cost.</td>
          </tr>
          <tr>
            <td><strong>Demerit Goods</strong></td>
            <td>Goods whose social cost exceeds private cost (negative externalities); over-consumed in free markets due to imperfect info.</td>
            <td>Cigarettes, alcohol, gambling. State imposes heavy sin taxes or outright statutory bans.</td>
          </tr>
          <tr>
            <td><strong>Veblen Goods</strong></td>
            <td>Conspicuous luxury goods whose demand INCREASES as price rises (Status/Snob appeal). Violates the Law of Demand.</td>
            <td>Rolex watches, luxury sports cars, designer jewelry. Higher price signals elite social status.</td>
          </tr>
          <tr>
            <td><strong>Giffen Goods</strong></td>
            <td>Non-luxury inferior staple goods whose demand INCREASES as price rises due to an overwhelming negative income effect.</td>
            <td>Coarse grains (bajra, potatoes) for destitute households. Negative income effect eclipses substitution effect.</td>
          </tr>
        </tbody>
      </table>

      <div class="section-bar">
        <span class="sec-pill">§ 1.7</span>
        <span class="sec-title">Multi-Examination Analytical Lenses</span>
      </div>
      <div style="font-size: 8.5pt; line-height: 1.35;">
        <div style="border-left: 2.5pt solid #000; padding-left: 2mm; margin-bottom: 1.2mm;">
          <strong>1. UPSC Civil Services &amp; APFC Lens:</strong> Focuses on market failures (why markets fail to supply Merit Goods), the Free-Rider problem, and connecting Public Goods to Article 21 (Clean Environment, Health).
        </div>
        <div style="border-left: 2.5pt solid #000; padding-left: 2mm; margin-bottom: 1.2mm;">
          <strong>2. RPSC RAS &amp; State PCS Lens:</strong>
          <br>• <em>2-Markers:</em> Define Opportunity Cost; Differentiate Gross vs Net Investment.
          <br>• <em>5-Markers:</em> Explain the 4-quadrant classification of goods based on excludability and rivalry with examples.
          <br>• <em>10-Markers:</em> Trace the evolution of India's mixed economy from state-led commanding heights to regulatory market governance post-1991.
        </div>
        <div style="border-left: 2.5pt solid #000; padding-left: 2mm;">
          <strong>3. Banking &amp; RBI Grade B Lens:</strong> Macroeconomic Equilibrium of Leakages and Injections (${mathInlineEquil}); transmission of Gross Fixed Capital Formation (GFCF) into productivity; capital losses vs depreciation.
        </div>
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">7</span>
    </div>
  </div>

  <!-- =========================================================
       PAGE 8 (VERSO): EXAMINER TRAPS, SKELETON, ACTIVE RECALL
       ========================================================= -->
  <div class="page verso">
    <div>
      <div class="rh">
        <span>Shelf 007 : Indian Macroeconomic Architecture</span>
        <span>Chapter 01 : Foundations of Economic Organization</span>
      </div>

      <div class="section-bar first">
        <span class="sec-pill">§ 1.8</span>
        <span class="sec-title">Examiner Traps &amp; Warning Vault</span>
      </div>

      <div class="trap-card">
        <div class="trap-card-head">
          <span>▲ WARNING — TRAP 1: The "Physical Nature" Fallacy</span>
        </div>
        <div>
          <strong>Exam Trap:</strong> "A tractor or computer is always a capital good."
          <br><strong>Correction:</strong> FALSE. An asset's status is determined exclusively by its <strong>end-use</strong>. A computer purchased by an IT software firm is a capital good; the exact same computer purchased by a student for gaming is a consumer durable good.
        </div>
      </div>

      <div class="trap-card">
        <div class="trap-card-head">
          <span>▲ WARNING — TRAP 2: Confusing Depreciation with Capital Loss</span>
        </div>
        <div>
          <strong>Exam Trap:</strong> "Factory machinery destroyed during a sudden earthquake is deducted as Depreciation in calculating NDP."
          <br><strong>Correction:</strong> FALSE. Natural disasters, accidental fires, and wars cause <strong>Capital Losses</strong>, not Depreciation. Depreciation (CFC) covers only normal, foreseen wear and tear and expected obsolescence.
        </div>
      </div>

      <div class="trap-card">
        <div class="trap-card-head">
          <span>▲ WARNING — TRAP 3: Public Goods vs. Publicly Provided Goods</span>
        </div>
        <div>
          <strong>Exam Trap:</strong> "Any good provided by the Government is a Public Good."
          <br><strong>Correction:</strong> FALSE. The government often provides <strong>Private Goods</strong> (subsidized wheat through PDS ration shops, train tickets). A good is only a Public Good if it satisfies both <strong>non-excludability and non-rivalry</strong> (national defense, street lighting).
        </div>
      </div>

      <div class="section-bar">
        <span class="sec-pill">§ 1.9</span>
        <span class="sec-title">The 60-Second Memory Skeleton (Rapid Recall)</span>
      </div>

      <table class="sk-table">
        <tbody>
          <tr>
            <td class="sk-key">Scarcity → Choice → Opportunity Cost</td>
            <td>Every economic decision involves sacrifice. Opportunity cost is the value of next best alternative foregone.</td>
          </tr>
          <tr>
            <td class="sk-key">PPF Curve</td>
            <td>Points on curve = full employment; slope = Marginal Rate of Transformation (${mathInlineMRT}).</td>
          </tr>
          <tr>
            <td class="sk-key">Three Questions</td>
            <td>What (allocation), How (technique: LIT vs CIT), For Whom (distribution: rent, wages, interest, profit).</td>
          </tr>
          <tr>
            <td class="sk-key">Four Sectors</td>
            <td>Households (factor owners/consumers), Firms (producers), Govt (tax/transfers/public goods), External (trade).</td>
          </tr>
          <tr>
            <td class="sk-key">Equilibrium Identity</td>
            <td>Leakages (${renderMath('S + T + M', false)}) = Injections (${renderMath('I + G + X', false)}).</td>
          </tr>
          <tr>
            <td class="sk-key">End-Use Rule</td>
            <td>Final Good = crossed production boundary (included in GDP); Intermediate Good = input for resale/re-use (excluded).</td>
          </tr>
          <tr>
            <td class="sk-key">Depreciation</td>
            <td>Normal wear/tear + foreseen obsolescence. Unforeseen disasters = Capital Loss (not CFC).</td>
          </tr>
          <tr>
            <td class="sk-key">Goods Matrix</td>
            <td>• Excludable + Rival = Private Good<br>• Excludable + Non-Rival = Club Good<br>• Non-Excludable + Rival = Common Pool Resource (Tragedy of Commons)<br>• Non-Excludable + Non-Rival = Public Good (Free-rider problem → Tax funding)</td>
          </tr>
        </tbody>
      </table>

      <div class="section-bar">
        <span class="sec-pill">§ 1.10</span>
        <span class="sec-title">Active Recall Diagnostic Cards</span>
      </div>

      <div class="diag-card">
        <div class="diag-q">
          ✦ CARD 1 (CONCEPTUAL MECHANICS): Why does the presence of "Non-Excludability" in pure public goods inevitably cause competitive market mechanisms to fail?
        </div>
        <div class="diag-a">
          <b>Causal Answer:</b> Competitive markets function by excluding consumers who refuse to pay the equilibrium price. When a good is non-excludable (national defense or clean air), it is technically impossible or prohibitively expensive to prevent non-paying individuals from consuming it once it is provided. Rational individuals recognize this and withhold voluntary payment, acting as <strong>Free Riders</strong>. Because private producers cannot generate revenue through market pricing to cover production costs, expected private profit is zero, and the market produces zero output. Therefore, public goods require compulsory collective financing through sovereign taxation.
        </div>
      </div>

      <div class="diag-card" style="margin-bottom: 0;">
        <div class="diag-q">
          ✦ CARD 2 (DIAGNOSTIC DISTINCTION): A printing press buys paper worth ₹50,000 for books, and a digital laser machine worth ₹10,000,000. Classify both.
        </div>
        <div class="diag-a">
          <b>Causal Answer:</b>
          <br>1. <strong>Paper Sheets (₹50,000):</strong> Intermediate Good. Transformed and physically incorporated into final textbooks; value fully reflected in final book price; counting separately would cause double-counting.
          <br>2. <strong>Digital Laser Printing Press (₹10,00,000):</strong> Final Capital Good (Gross Fixed Capital Formation). Remains outside final product, yields productive services across multiple operating cycles, and depreciates gradually.
        </div>
      </div>
    </div>

    <div class="rf">
      <span class="rf-left">Mind of Aravalli Press</span>
      <span class="rf-page">8</span>
    </div>
  </div>

</body>
</html>`;

  console.log('Rendering Master Fused Chapter 01 to PDF with updated headers/footers...');
  renderHtmlToPdf(html, pdfPath);

  const stats = fs.statSync(pdfPath);
  console.log(`✓ Master Fused Chapter 01 regenerated successfully: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error('Fatal error generating Master Fused Chapter 01:', err);
  process.exit(1);
});
