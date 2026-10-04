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

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-ch1-synth-profile-'));
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
  }

  /* PHYSICAL BINDING MARGINS (DUPLEX-SAFE 24mm GUTTER) */
  @page :right {
    margin: 18mm 16mm 18mm 24mm;
    @top-right {
      content: "Chapter 01 : Foundations of Economic Organization";
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #333;
      border-bottom: 0.5pt solid #000;
      padding-bottom: 1.8mm;
    }
    @bottom-right {
      content: counter(page);
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 8.5pt;
      font-weight: 700;
      color: #000;
    }
    @bottom-left {
      content: "Shelf 007 • Sovereign Master Codex";
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 7pt;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #666;
    }
  }

  @page :left {
    margin: 18mm 24mm 18mm 16mm;
    @top-left {
      content: "Shelf 007 : Indian Macroeconomic Architecture";
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #333;
      border-bottom: 0.5pt solid #000;
      padding-bottom: 1.8mm;
    }
    @bottom-left {
      content: counter(page);
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 8.5pt;
      font-weight: 700;
      color: #000;
    }
    @bottom-right {
      content: "Mind of Aravalli Press • 2026 Archive";
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 7pt;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #666;
    }
  }

  @page :first {
    @top-right { content: none; }
    @top-left { content: none; }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Times New Roman', 'Baskerville', 'Georgia', serif;
    font-size: 11pt;
    line-height: 1.52;
    color: #111;
    background: #fff;
    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* CHAPTER OPENER */
  .chapter-opener {
    border: 1.5pt solid #000;
    padding: 4mm 5mm;
    margin-bottom: 6mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .ch-badge-box {
    border: 1pt solid #777;
    background: #f7f7f7;
    padding: 2mm 3.5mm;
    text-align: center;
    flex-shrink: 0;
    margin-right: 4mm;
  }

  .ch-badge-label {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7pt;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #444;
  }

  .ch-badge-num {
    font-family: 'Times New Roman', serif;
    font-size: 26pt;
    font-weight: 900;
    line-height: 1;
    color: #000;
  }

  .ch-title-box {
    flex-grow: 1;
  }

  .ch-title-text {
    font-size: 18pt;
    font-weight: 900;
    line-height: 1.18;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000;
  }

  .ch-vignette-box {
    flex-shrink: 0;
    margin-left: 4mm;
  }

  .ch-vignette-box img {
    height: 18mm;
    width: auto;
    display: block;
    object-fit: contain;
  }

  /* SECTION BAR (§ 1.X) */
  .section-bar {
    display: flex;
    align-items: center;
    margin-top: 6mm;
    margin-bottom: 3.5mm;
    page-break-after: avoid;
    break-after: avoid;
  }

  .section-tag-box {
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 9.5pt;
    font-weight: 900;
    letter-spacing: 1px;
    padding: 1.5mm 4mm;
    flex-shrink: 0;
  }

  .section-title-box {
    background: #f2f2f2;
    color: #000;
    font-size: 11pt;
    font-weight: 800;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 1.5mm 4.5mm;
    flex-grow: 1;
    border: 0.5pt solid #ccc;
    border-left: none;
  }

  /* SUBSECTION BANNER (▌ Subtopic) */
  .subsection-banner {
    display: flex;
    align-items: center;
    background: #f7f7f7;
    border-left: 3.5pt solid #000;
    padding: 1.4mm 3.5mm;
    font-size: 10.5pt;
    font-weight: bold;
    color: #000;
    margin-top: 4.5mm;
    margin-bottom: 2.5mm;
    page-break-after: avoid;
    break-after: avoid;
  }

  /* PARAGRAPHS & DROP CAP */
  p {
    margin-bottom: 3.2mm;
    text-align: justify;
    text-justify: inter-word;
  }

  .drop-cap {
    float: left;
    font-size: 3.3em;
    line-height: 0.8;
    padding-top: 1.5mm;
    padding-right: 2.5mm;
    padding-bottom: 0;
    font-family: 'Times New Roman', serif;
    font-weight: bold;
    color: #000;
  }

  /* CARDS & SPLIT LAYOUTS FOR HIGH-YIELD INFOGRAPHICS */
  .split-row {
    display: flex;
    gap: 4.5mm;
    margin: 4mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .col-left {
    flex: 1.25;
  }

  .col-right {
    flex: 1;
  }

  .col-half {
    flex: 1;
  }

  .card-box {
    border: 0.75pt solid #aaa;
    background: #fff;
    padding: 3mm 4mm;
    margin: 3.5mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .img-card {
    border: 0.75pt solid #aaa;
    background: #fff;
    padding: 2mm;
    text-align: center;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .img-card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    object-fit: contain;
  }

  .img-caption-top {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 0.5pt solid #aaa;
    padding-bottom: 1.2mm;
    margin-bottom: 1.8mm;
    text-align: center;
  }

  /* BULLETS */
  .bullet-list {
    list-style: none;
    font-size: 10pt;
    line-height: 1.48;
    margin: 2mm 0 3mm 0;
  }

  .bullet-list li {
    position: relative;
    padding-left: 5mm;
    margin-bottom: 1.8mm;
    text-align: justify;
  }

  .bullet-list li::before {
    content: "►";
    position: absolute;
    left: 0;
    font-size: 8pt;
    color: #000;
  }

  /* TUFTE / BOOKTABS ACADEMIC TABLES */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 4.5mm 0;
    font-size: 9.6pt;
    line-height: 1.42;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  thead th {
    border-top: 1.5pt solid #000;
    border-bottom: 1pt solid #000;
    padding: 2.2mm 3.2mm;
    text-align: left;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8.5pt;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background: #f5f5f5;
  }

  tbody td {
    padding: 2.2mm 3.2mm;
    border-bottom: 0.5pt solid #ddd;
    vertical-align: top;
  }

  tbody tr:last-child td {
    border-bottom: 1.5pt solid #000;
  }

  tbody tr:nth-child(even) td {
    background-color: #fafafa;
  }

  /* EXAM TRAP MATRIX */
  .exam-trap-box {
    border-left: 4pt solid #000;
    border-top: 0.5pt solid #ccc;
    border-right: 0.5pt solid #ccc;
    border-bottom: 0.5pt solid #ccc;
    background: #fafafa;
    margin: 4.5mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .exam-trap-header {
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1.5mm 4mm;
  }

  .exam-trap-content {
    padding: 3.5mm 4.5mm;
    font-size: 10pt;
    line-height: 1.48;
  }

  /* CORE TAKEAWAY BANNER */
  .takeaway-box {
    display: flex;
    border: 1pt solid #000;
    margin: 5mm 0;
    background: #f7f7f7;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .takeaway-badge {
    background: #000;
    color: #fff;
    padding: 3mm 4.5mm;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.8pt;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    flex-shrink: 0;
    width: 28mm;
  }

  .takeaway-content {
    padding: 3mm 4.5mm;
    font-size: 9.5pt;
    line-height: 1.45;
    flex-grow: 1;
  }

  .takeaway-content ul {
    margin-left: 5mm;
  }

  .takeaway-content li {
    margin-bottom: 1.5mm;
  }

  /* ACTIVE RECALL CARD */
  .recall-card {
    border: 1pt solid #222;
    background: #fff;
    margin: 4.5mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .recall-card-header {
    background: #efefef;
    border-bottom: 0.75pt solid #222;
    padding: 1.5mm 4mm;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #111;
  }

  .recall-card-body {
    padding: 3.5mm 4.5mm;
    font-size: 9.8pt;
    line-height: 1.48;
  }

  /* KaTeX Equations */
  .katex-display {
    margin: 4mm 0 !important;
    text-align: center;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .callout-gray {
    background: #f4f4f4;
    border-left: 3pt solid #444;
    padding: 2.5mm 4mm;
    margin: 3.5mm 0;
    font-size: 9.5pt;
    line-height: 1.45;
    page-break-inside: avoid;
    break-inside: avoid;
  }
</style>
</head>
<body>

  <!-- =========================================================
       PAGE 1: CHAPTER OPENER & § 1.1 SCARCITY
       ========================================================= -->
  <div class="chapter-opener">
    <div class="ch-badge-box">
      <div class="ch-badge-label">Chapter</div>
      <div class="ch-badge-num">01</div>
    </div>
    <div class="ch-title-box">
      <h1 class="ch-title-text">Foundations of Economic Organization, Sectors &amp; Goods Typology</h1>
    </div>
    <div class="ch-vignette-box">
      <img src="file:///${assetsDir}/ch1_opener_fort.png" alt="Aravalli Ridge Historic Citadel" />
    </div>
  </div>

  <!-- Section 1.1 Header -->
  <div class="section-bar">
    <div class="section-tag-box">§ 1.1</div>
    <div class="section-title-box">The Epistemic Foundation: Scarcity &amp; The Economic Problem</div>
  </div>

  <div class="subsection-banner">
    <span>The Universal Dilemma: Unlimited Wants vs. Scarce Means</span>
  </div>

  <p>
    <span class="drop-cap">E</span>conomics is the study of how human societies allocate <strong>scarce resources</strong> that have <strong>alternative uses</strong> to satisfy unlimited human wants (Lionel Robbins, 1932). If productive resources were infinite, goods would be "free goods" (like atmospheric air in its unpolluted state), prices would not exist, and economic organization would be unnecessary. Absolute scarcity forces every human civilization to make <strong>compulsory choices</strong>, and every choice irrevocably incurs an <strong>Opportunity Cost</strong>.
  </p>

  <!-- Flowchart & Scarcity Signpost -->
  <div class="split-row">
    <div class="col-left card-box" style="text-align: center; padding: 3mm 4mm; display: flex; flex-direction: column; justify-content: center;">
      <div style="font-weight: bold; border: 0.75pt solid #444; padding: 1.5mm; background: #fafafa; font-size: 9.2pt;">
        [Unlimited Human Desires] &nbsp;vs.&nbsp; [Finite Productive Resources]
      </div>
      <div style="font-weight: bold; margin: 1mm 0;">↓</div>
      <div style="font-weight: bold; border: 0.75pt solid #444; padding: 1.5mm; background: #fafafa; font-size: 9.2pt;">
        [Absolute Scarcity]
      </div>
      <div style="font-weight: bold; margin: 1mm 0;">↓</div>
      <div style="font-weight: bold; border: 0.75pt solid #444; padding: 1.5mm; background: #fafafa; font-size: 9.2pt;">
        [Compulsory Choice]
      </div>
      <div style="font-weight: bold; margin: 1mm 0;">↓</div>
      <div style="font-weight: bold; border: 1.2pt solid #000; padding: 1.8mm; background: #f0f0f0; font-size: 9.5pt;">
        [Opportunity Cost]<br>
        <span style="font-size: 8.5pt; font-weight: normal; font-style: italic;">(The quantified value of the next highest alternative foregone)</span>
      </div>
    </div>
    <div class="col-right img-card">
      <div class="img-caption-top">The Foundational Dilemma</div>
      <img src="file:///${assetsDir}/ch1_scarcity_signpost.png" alt="Wants vs Resources Signpost" />
    </div>
  </div>

  <div class="subsection-banner">
    <span>The Beginner's Mental Model: The "Car Mileage in a Lab" Analogy (Ceteris Paribus)</span>
  </div>

  <div class="split-row">
    <div class="col-left card-box">
      <p style="font-size: 9.5pt; line-height: 1.45; font-style: italic; margin-bottom: 2mm;">
        <strong>Why do economic laws assume "All other things being equal" (Ceteris Paribus)?</strong><br>
        In a car brochure, the manufacturer claims a mileage of <strong>22 Kilometres per Litre (KMPL)</strong>. Yet when driven on Indian city roads, it yields only 15 KMPL. Does the 22 KMPL claim mean the engineering test failed?<br>
        <strong>No.</strong> The 22 KMPL was measured under <strong>strictly controlled laboratory conditions</strong>—a frictionless track, calibrated tire pressure, and zero traffic congestion. This isolation was essential to measure the <em>inherent efficiency of the engine itself</em>.
      </p>
      <div class="callout-gray" style="margin: 0; padding: 2mm 3.5mm; font-size: 9pt;">
        <strong>The Economic Lesson:</strong> Economists isolate laws (like the Law of Demand) by holding other variables constant. Once the engine is understood, real-world friction is layered back.
      </div>
    </div>
    <div class="col-right img-card">
      <div class="img-caption-top">Controlled Isolation vs. Real Friction</div>
      <img src="file:///${assetsDir}/ch1_car_analogy.png" alt="Car Lab Test vs Real World" />
    </div>
  </div>

  <div class="subsection-banner">
    <span>The Adam Smith Water-Diamond Paradox: Value-in-Use vs. Value-in-Exchange</span>
  </div>

  <p>
    Why is life-giving water virtually free, while decorative diamonds command millions?
  </p>
  <ul class="bullet-list">
    <li><strong>Value-in-Use:</strong> The qualitative utility derived from consuming a good. Water has immense value-in-use; without it, human civilization perishes in days. But because water is abundant, the <strong>Marginal Utility of the last consumed glass</strong> drops to near zero, yielding a low price.</li>
    <li><strong>Value-in-Exchange:</strong> The purchasing power a good commands in the market. Diamonds are exceptionally scarce, so the <strong>Marginal Utility of the last unit</strong> is astronomical, commanding an exorbitant exchange price.</li>
  </ul>

  <div class="callout-gray" style="text-align: center; font-weight: bold;">
    Core Epistemic Takeaway: Market prices reflect Marginal Utility and Relative Scarcity, NOT total utility or moral necessity!
  </div>

  <!-- =========================================================
       PAGE 2: PPF & § 1.2 FUNDAMENTAL QUESTIONS
       ========================================================= -->


  <div class="subsection-banner">
    <span>The Production Possibility Frontier (PPF)</span>
  </div>

  <p>
    The PPF is a graphical curve demonstrating the maximum feasible combinations of two goods an economy can produce given fixed resources and existing technology:
  </p>

  <div class="split-row">
    <div class="col-left card-box">
      <ul class="bullet-list" style="margin: 0;">
        <li><strong>Points on the Curve (A, B):</strong> Productive efficiency (full resource employment and optimal technique).</li>
        <li><strong>Points inside the Curve (C):</strong> Inefficiency or under-utilization (unemployment, idle factory machinery).</li>
        <li><strong>Points outside the Curve (D):</strong> Currently unattainable without economic growth (technological innovation, capital accumulation, or labor force expansion).</li>
        <li><strong>Slope of PPF:</strong> Represents the <strong>Marginal Rate of Transformation (MRT)</strong>, which reflects increasing opportunity cost as resources are imperfectly substitutable between sectors.</li>
      </ul>
    </div>
    <div class="col-right img-card">
      <div class="img-caption-top">Production Possibility Frontier (PPF)</div>
      <img src="file:///${assetsDir}/ch1_ppf_graph.png" alt="PPF Curve Graph" />
    </div>
  </div>

  <!-- Section 1.2 Header -->
  <div class="section-bar">
    <div class="section-tag-box">§ 1.2</div>
    <div class="section-title-box">The Three Fundamental Economic Questions</div>
  </div>

  <p>
    Every human society, regardless of political ideology, must solve three structural allocative questions:
  </p>

  <table>
    <thead>
      <tr>
        <th style="width: 32%;">Fundamental Question</th>
        <th>Structural Economic Decision &amp; Mechanism</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. What to produce?</strong></td>
        <td>Allocation of scarce resources between consumer goods and capital goods; civil goods vs. national defense equipment.</td>
      </tr>
      <tr>
        <td><strong>2. How to produce?</strong></td>
        <td>Choice of production technique: Labor-Intensive Technology (LIT) vs. Capital-Intensive Technology (CIT).</td>
      </tr>
      <tr>
        <td><strong>3. For whom to produce?</strong></td>
        <td>Distribution of national product across the factors of production: Rent (Land), Wages (Labor), Interest (Capital), and Profit (Enterprise).</td>
      </tr>
    </tbody>
  </table>

  <!-- Section 1.3 Header -->
  <div class="section-bar">
    <div class="section-tag-box">§ 1.3</div>
    <div class="section-title-box">Typology of Economic Systems</div>
  </div>

  <p>
    Human societies organize production and distribution through three primary institutional frameworks:
  </p>

  <div class="subsection-banner">
    <span>1. Market Economy (Capitalism / Free Enterprise)</span>
  </div>

  <ul class="bullet-list">
    <li><strong>Core Mechanism:</strong> Private ownership of factors of production. Allocation is driven exclusively by Adam Smith's "Invisible Hand"—the market price mechanism operating via supply and demand without state intervention.</li>
    <li><strong>Consumer Sovereignty:</strong> Production follows consumer willingness and purchasing ability.</li>
    <li><strong>Critical Vulnerabilities:</strong> Chronic market failure in providing pure public goods (defense, roads), acute wealth inequality, unpriced negative externalities (pollution), and neglect of non-profitable social welfare.</li>
    <li><strong>Examples:</strong> United States, United Kingdom, Singapore.</li>
  </ul>

  <!-- =========================================================
       PAGE 3: SOCIALIST, MIXED & COMMAND SYSTEMS
       ========================================================= -->


  <div class="subsection-banner">
    <span>2. Command Economy (Socialist / State-Directed)</span>
  </div>

  <ul class="bullet-list">
    <li><strong>Core Mechanism:</strong> Complete state ownership of all collective means of production (Karl Marx). Allocation is planned centrally by a National Planning Authority (e.g., Gosplan in the Soviet Union).</li>
    <li><strong>Decision Criterion:</strong> Social welfare, equitable distribution, and planned heavy industrialization rather than individual profit.</li>
    <li><strong>Critical Vulnerability:</strong> Inefficient resource allocation due to absence of price signals (the <em>Economic Calculation Problem</em> identified by Ludwig von Mises), bureaucratic sclerosis, lack of consumer choice, and suppression of entrepreneurial innovation.</li>
    <li><strong>Examples:</strong> Former Soviet Union (USSR), North Korea, Cuba.</li>
  </ul>

  <div class="subsection-banner">
    <span>3. Mixed Economy (The Indian Paradigm)</span>
  </div>

  <ul class="bullet-list">
    <li><strong>Core Mechanism:</strong> Coexistence of a robust <strong>Private Sector</strong> driven by market incentives and an active <strong>Public Sector</strong> regulating markets, providing core infrastructure, and safeguarding social equity.</li>
    <li><strong>Indian Historical Trajectory:</strong>
      <ul style="margin-left: 5mm; margin-top: 1.5mm;">
        <li><strong>1947–1991 (Nehruvian-Mahalanobis Strategy):</strong> Mixed economy with the State commanding the "commanding heights" (heavy industry, banking, utilities) via the License-Quota-Permit Raj.</li>
        <li><strong>Post-1991 (LPG Reforms):</strong> Transitioned toward a market-friendly mixed economy where the private sector is the prime engine of growth, while the State pivots toward social safety nets, independent regulation, and macroeconomic stability.</li>
      </ul>
    </li>
  </ul>

  <!-- Core Takeaway Box -->
  <div class="takeaway-box">
    <div class="takeaway-badge">
      <div style="font-size: 14pt; margin-bottom: 1mm;">💡</div>
      <div>Core<br>Takeaway</div>
    </div>
    <div class="takeaway-content">
      <ul>
        <li>No economy in the modern world is purely capitalist or purely socialist.</li>
        <li>Most economies, including India, operate as <strong>mixed economies</strong> with varying degrees of state intervention.</li>
        <li>The choice of economic system reflects a society's ideological balance between <em>market efficiency</em> and <em>social equity</em>.</li>
      </ul>
    </div>
  </div>

  <!-- Section 1.4 Header -->
  <div class="section-bar">
    <div class="section-tag-box">§ 1.4</div>
    <div class="section-title-box">Sectors of the Economy &amp; Structural Transformation</div>
  </div>

  <div class="subsection-banner">
    <span>1. Primary, Secondary and Tertiary Sectors</span>
  </div>

  <p>
    Economic activity is classified into three broad sectors based on the nature of output and stage of production:
  </p>

  <div class="split-row">
    <div class="col-left">
      <table>
        <thead>
          <tr>
            <th style="width: 25%;">Sector</th>
            <th style="width: 45%;">Definition</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primary</strong></td>
            <td>Direct extraction of natural resources from the earth.</td>
            <td>Agriculture, forestry, fishing, mining, quarrying.</td>
          </tr>
          <tr>
            <td><strong>Secondary</strong></td>
            <td>Processing raw materials into finished manufactured goods.</td>
            <td>Manufacturing, construction, power, basic industries (steel).</td>
          </tr>
          <tr>
            <td><strong>Tertiary</strong></td>
            <td>Provision of intangible services to households &amp; firms.</td>
            <td>Trade, transport, banking, IT, education, healthcare.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-right img-card">
      <div class="img-caption-top">Continuum of Value Addition</div>
      <img src="file:///${assetsDir}/ch1_three_sectors_continuum.png" alt="Three Sectors Continuum" />
    </div>
  </div>

  <!-- =========================================================
       PAGE 4: CLASSIFICATION OF SECTORS & FOUR MACRO SECTORS
       ========================================================= -->


  <div class="subsection-banner">
    <span>2. Further Multi-Dimensional Classification of Sectors</span>
  </div>

  <div class="split-row">
    <div class="col-left">
      <div class="card-box" style="margin-bottom: 2.5mm;">
        <strong style="font-size: 9.5pt;">A. Organised vs. Unorganised Sector (Operational Framework):</strong>
        <p style="font-size: 9pt; margin-top: 1mm; margin-bottom: 0;">
          <strong>Organised:</strong> Registered under government statutes (Factories Act, Shops &amp; Establishments Act), formal contracts, social security (EPFO/ESIC).<br>
          <strong>Unorganised:</strong> Small unregistered units, low capital, absence of statutory job security.
        </p>
      </div>
      <div class="card-box" style="margin-bottom: 2.5mm;">
        <strong style="font-size: 9.5pt;">B. Public vs. Private Sector (Ownership of Assets):</strong>
        <p style="font-size: 9pt; margin-top: 1mm; margin-bottom: 0;">
          <strong>Public:</strong> Owned/controlled by Government (PSUs, Railways); targets social welfare and strategic assets.<br>
          <strong>Private:</strong> Owned by individuals/corporations; driven by profit and market signals.
        </p>
      </div>
      <div class="card-box">
        <strong style="font-size: 9.5pt;">C. Formal vs. Informal Sector (Legal &amp; Tax Boundary):</strong>
        <p style="font-size: 9pt; margin-top: 1mm; margin-bottom: 0;">
          <strong>Formal:</strong> Legally incorporated, maintains audited accounts, pays direct/indirect taxes.<br>
          <strong>Informal:</strong> Unrecorded transactions, high cash reliance, vulnerable employment.
        </p>
      </div>
    </div>
    <div class="col-right img-card">
      <div class="img-caption-top">Multi-Dimensional View of Sectors</div>
      <img src="file:///${assetsDir}/ch1_sectors_venn_diagram.png" alt="Multi-Dimensional Sectors Venn Diagram" />
    </div>
  </div>

  <div class="subsection-banner">
    <span>3. The Four Macroeconomic Sectors in National Accounts</span>
  </div>

  <p>
    To calculate national income and financial flows, macroeconomics divides the economic universe into four interacting sectors:
  </p>

  <ul class="bullet-list">
    <li><strong>The Household Sector:</strong> The ultimate owners of all factors of production (land, labor, capital, entrepreneurship) AND the ultimate consumers of final goods and services. Income sources: factor payments (Rent, Wages, Interest, Profit) and transfer payments.</li>
    <li><strong>The Business Sector (Firms / Enterprises):</strong> Production units that hire factor services from households to produce goods and services for sale.</li>
    <li><strong>The Government Sector:</strong> Collects compulsory taxes, purchases goods/services, produces pure public goods, and redistributes income via welfare transfers.</li>
    <li><strong>The External Sector (Rest of the World):</strong> Engages in international trade (exports, imports) and cross-border factor flows (remittances, external debt, FDI/FPI).</li>
  </ul>

  <!-- =========================================================
       PAGE 5: CIRCULAR FLOW & LEAKAGES-INJECTIONS
       ========================================================= -->


  <div class="section-bar">
    <div class="section-tag-box">§ 1.5</div>
    <div class="section-title-box">The Circular Flow of Income &amp; Product</div>
  </div>

  <p>
    Economic activity is an unbroken circle: <strong>Production generates Income, and Income generates Expenditure on Production:</strong>
  </p>

  <div class="card-box" style="text-align: center; font-weight: bold; font-size: 9.8pt; padding: 2.5mm;">
    Production Phase ⟶ Income Distribution Phase ⟶ Expenditure / Disposition Phase ⟶ Production Phase
  </div>

  <div class="split-row">
    <div class="col-half card-box">
      <strong style="font-size: 9.5pt;">Real Flows:</strong>
      <p style="font-size: 9pt; margin-top: 1.5mm;">
        The physical movement of factor services (labor hours, land usage, capital tools) from households to firms, and the counter-movement of physical goods/services from firms to households.
      </p>
    </div>
    <div class="col-half card-box">
      <strong style="font-size: 9.5pt;">Money Flows:</strong>
      <p style="font-size: 9pt; margin-top: 1.5mm;">
        The monetary counterpart: firms paying factor incomes (wages, rent, interest, profit) to households, and households spending money income on goods produced by firms.
      </p>
    </div>
  </div>

  <div class="subsection-banner">
    <span>The Leakages-Injections Equilibrium</span>
  </div>

  <p>
    In an open macroeconomy with government, income generated is not fully spent on domestic consumer goods:
  </p>

  <div class="card-box" style="padding: 3mm 4mm;">
    <div style="text-align: center; font-size: 10.5pt; font-weight: bold; margin-bottom: 2mm;">
      $$\\text{Leakages } (W) = \\text{Savings } (S) + \\text{Taxes } (T) + \\text{Imports } (M)$$
      $$\\text{Injections } (J) = \\text{Investment } (I) + \\text{Government Spending } (G) + \\text{Exports } (X)$$
    </div>
    <div class="callout-gray" style="margin: 0; font-size: 9.2pt;">
      <strong>Macroeconomic Equilibrium Condition:</strong> Total Leakages must equal Total Injections:
      $$\\mathbf{S + T + M = I + G + X}$$
      <em>Policy Implication:</em> If Leakages exceed Injections ($S + T + M > I + G + X$), aggregate demand contracts, driving deflation and unemployment. If Injections exceed Leakages, aggregate demand expands, risking demand-pull inflation.
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

  <table>
    <thead>
      <tr>
        <th style="width: 50%;">Final Goods</th>
        <th style="width: 50%;">Intermediate Goods</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          • Goods that have crossed the production boundary.<br>
          • Purchased for final consumption or capital formation.<br>
          • <strong>Value is directly included in GDP.</strong><br>
          • <em>Examples:</em> Bread eaten by a family; car bought by driver.
        </td>
        <td>
          • Goods that remain within the production boundary.<br>
          • Purchased for resale OR used as inputs in the same year.<br>
          • <strong>Value is NOT included in GDP</strong> (already embedded).<br>
          • <em>Examples:</em> Flour bought by baker; tires bought by Maruti.
        </td>
      </tr>
    </tbody>
  </table>

  <div class="callout-gray">
    <strong>The Golden Test of Classification:</strong> A good is NOT defined by its physical nature, but by its <strong>end-use</strong>. Sugar bought by a household = Final Good; sugar bought by a sweet shop (halwai) = Intermediate Good. Coal bought by a power plant = Intermediate Good; coal bought by a family for heating = Final Good.
  </div>

  <!-- =========================================================
       PAGE 6: CAPITAL, DEPRECIATION & EXCLUDABILITY MATRIX
       ========================================================= -->


  <div class="subsection-banner">
    <span>B. Consumption Goods vs. Capital Goods</span>
  </div>

  <div class="split-row">
    <div class="col-half card-box">
      <strong style="font-size: 9.5pt;">1. Consumption Goods:</strong>
      <ul class="bullet-list" style="margin: 1mm 0 0 0;">
        <li><strong>Durable Goods:</strong> Multi-year lifespan (cars, television, refrigerators).</li>
        <li><strong>Semi-Durable Goods:</strong> Roughly one-year lifespan (clothes, footwear).</li>
        <li><strong>Non-Durable Goods:</strong> Consumed in a single act (milk, bread, petrol).</li>
        <li><strong>Services:</strong> Intangible activities (teaching, legal counsel, banking).</li>
      </ul>
    </div>
    <div class="col-half card-box">
      <strong style="font-size: 9.5pt;">2. Capital Goods:</strong>
      <ul class="bullet-list" style="margin: 1mm 0 0 0;">
        <li>Tangible durable goods produced to facilitate further production (machine tools, blast furnaces, tractors).</li>
        <li>Do not merge into final product; undergo wear and tear over time (<strong>Depreciation</strong>).</li>
        <li><em>Crucial distinction:</em> A sewing machine in a commercial boutique = Capital Good; the same machine used at home = Consumer Durable.</li>
      </ul>
    </div>
  </div>

  <div class="subsection-banner">
    <span>C. Gross Investment, Depreciation &amp; Net Investment</span>
  </div>

  <div class="card-box" style="padding: 3mm 4mm;">
    <div style="text-align: center; font-size: 10.2pt; font-weight: bold; margin-bottom: 2mm;">
      $$\\text{Gross Investment} = \\text{Net Addition to Fixed Assets} + \\Delta \\text{Inventories}$$
      $$\\text{Net Investment} = \\text{Gross Investment} - \\text{Depreciation (CFC)}$$
    </div>
    <ul class="bullet-list" style="margin: 0;">
      <li><strong>Consumption of Fixed Capital (CFC / Depreciation):</strong> Expected, normal wear and tear and foreseen obsolescence of capital assets during normal production.</li>
      <li><strong>Capital Loss (Unforeseen Destruction):</strong> Destruction caused by natural disasters (earthquakes, floods) or wars. <strong>Capital loss is NOT depreciation</strong> and is never deducted from GDP to arrive at Net National Product.</li>
    </ul>
  </div>

  <div class="subsection-banner">
    <span>D. The Four-Quadrant Excludability &amp; Rivalry Matrix</span>
  </div>

  <p>
    Economics categorizes all goods in society by two physical and legal characteristics:
  </p>

  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Characteristic</th>
        <th style="width: 37.5%;">Rivalrous (Diminishes availability)</th>
        <th style="width: 37.5%;">Non-Rivalrous (Does not diminish availability)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Excludable</strong><br><span style="font-size: 8pt; font-weight: normal;">(Non-payers can be prevented)</span></td>
        <td><strong>PRIVATE GOODS</strong><br>• Food, clothing, cars<br>• Toll roads with heavy traffic</td>
        <td><strong>CLUB GOODS</strong><br>• Cinemas, subscription television<br>• Toll highway (uncongested)</td>
      </tr>
      <tr>
        <td><strong>Non-Excludable</strong><br><span style="font-size: 8pt; font-weight: normal;">(Non-payers cannot be prevented)</span></td>
        <td><strong>COMMON POOL RESOURCES</strong><br>• Ocean fisheries, shared pastures<br>• Ground water aquifers (Tragedy of Commons)</td>
        <td><strong>PURE PUBLIC GOODS</strong><br>• National defense, lighthouses<br>• Street lighting, clean air (Free-Rider problem)</td>
      </tr>
    </tbody>
  </table>

  <div class="callout-gray">
    <strong>The Free-Rider Market Failure:</strong> Because consumers cannot be excluded from Public Goods, they withhold voluntary payment. Markets produce zero output. Therefore, the State must finance them through <strong>compulsory sovereign taxation</strong>.
  </div>

  <!-- =========================================================
       PAGE 7: SPECIALIZED GOODS & EXAMINATION LENSES
       ========================================================= -->


  <div class="subsection-banner">
    <span>E. Specialized Goods Typology (High-Yield Traps)</span>
  </div>

  <table>
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
        <td>Social benefit exceeds private benefit (positive externalities); under-consumed if left to market forces.</td>
        <td>Primary schooling, immunization vaccines, basic healthcare. State subsidizes.</td>
      </tr>
      <tr>
        <td><strong>Demerit Goods</strong></td>
        <td>Social cost exceeds private cost (negative externalities); over-consumed in free markets due to imperfect info.</td>
        <td>Cigarettes, alcohol, gambling. State imposes heavy sin taxes or bans.</td>
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

  <div class="card-box" style="margin-bottom: 3mm;">
    <strong style="font-size: 9.8pt;">1. UPSC Civil Services &amp; APFC Lens:</strong>
    <p style="font-size: 9.2pt; margin-top: 1.5mm; margin-bottom: 0;">
      Focuses on structural market failures: Why markets under-supply Merit Goods and pure Public Goods. Questions frequently test the <strong>Free-Rider problem</strong>, <strong>Tragedy of the Commons</strong>, and the distinction between <strong>Intermediate vs. Final Goods</strong> in supply chains. Relate Public Goods to Article 21 (Clean Environment, Health) and DPSPs.
    </p>
  </div>

  <div class="card-box" style="margin-bottom: 3mm;">
    <strong style="font-size: 9.8pt;">2. RPSC RAS &amp; State PCS Lens:</strong>
    <ul class="bullet-list" style="margin: 1.5mm 0 0 0; font-size: 9pt;">
      <li><strong>2-Markers:</strong> Define Opportunity Cost (value of next best sacrifice). Differentiate Gross vs Net Investment ($$\\text{Gross} - \\text{CFC} = \\text{Net}$$).</li>
      <li><strong>5-Markers:</strong> Explain the 4-quadrant classification of goods based on excludability and rivalry with examples. Analyze circular flow in a 3-sector economy.</li>
      <li><strong>10-Markers:</strong> Trace the evolution of India's mixed economy from state commanding heights to regulatory market governance post-1991.</li>
    </ul>
  </div>

  <div class="card-box">
    <strong style="font-size: 9.8pt;">3. Banking &amp; RBI Grade B Lens:</strong>
    <p style="font-size: 9.2pt; margin-top: 1.5mm; margin-bottom: 0;">
      Focuses on Macroeconomic Equilibrium of Leakages and Injections ($$S + T + M = I + G + X$$). Emphasizes transmission of Gross Fixed Capital Formation (GFCF) into productive capacity and separating unexpected capital losses from depreciation in national balance sheets.
    </p>
  </div>

  <!-- =========================================================
       PAGE 8: EXAM TRAPS, RECALL SKELETON & CARDS
       ========================================================= -->


  <!-- Section 1.8 Header -->
  <div class="section-bar" style="margin-top: 0;">
    <div class="section-tag-box">§ 1.8</div>
    <div class="section-title-box">Examiner Traps &amp; Warning Vault</div>
  </div>

  <div class="exam-trap-box">
    <div class="exam-trap-header">⚡ TRAP 1: The "Physical Nature" Fallacy</div>
    <div class="exam-trap-content">
      <strong>Exam Trap:</strong> "A tractor or computer is always a capital good."<br>
      <strong>Correction:</strong> FALSE. An asset's status is determined exclusively by its <strong>end-use</strong>. A computer purchased by an IT software firm is a capital good; the exact same computer purchased by a student for gaming is a consumer durable good.
    </div>
  </div>

  <div class="exam-trap-box">
    <div class="exam-trap-header">⚡ TRAP 2: Confusing Depreciation with Capital Loss</div>
    <div class="exam-trap-content">
      <strong>Exam Trap:</strong> "Factory machinery destroyed during an earthquake is deducted as Depreciation in calculating NDP."<br>
      <strong>Correction:</strong> FALSE. Natural disasters, fires, and wars cause <strong>Capital Losses</strong>, not Depreciation. Depreciation (CFC) covers only normal, foreseen wear and tear and expected obsolescence.
    </div>
  </div>

  <div class="exam-trap-box">
    <div class="exam-trap-header">⚡ TRAP 3: Public Goods vs. Publicly Provided Goods</div>
    <div class="exam-trap-content">
      <strong>Exam Trap:</strong> "Any good provided by the Government is a Public Good."<br>
      <strong>Correction:</strong> FALSE. The State often provides <strong>Private Goods</strong> (e.g., subsidized food in PDS ration shops, train tickets). A good is only a Public Good if it satisfies both <strong>non-excludability and non-rivalry</strong> (national defense, street lighting).
    </div>
  </div>

  <!-- Section 1.9 Header -->
  <div class="section-bar">
    <div class="section-tag-box">§ 1.9</div>
    <div class="section-title-box">60-Second Memory Skeleton (Rapid Recall)</div>
  </div>

  <div class="callout-gray" style="font-size: 8.8pt; line-height: 1.42; margin-bottom: 4mm;">
    <strong>Scarcity ⟶ Choice ⟶ Opportunity Cost</strong> • <strong>PPF:</strong> Slope = Marginal Rate of Transformation ($$MRT$$) • <strong>Three Questions:</strong> What (allocation), How (technique), For Whom (distribution) • <strong>Four Sectors:</strong> Households, Firms, Govt, External • <strong>Equilibrium Identity:</strong> $$S + T + M = I + G + X$$ • <strong>End-Use Rule:</strong> Final (included in GDP) vs. Intermediate (excluded to prevent double-counting) • <strong>CFC:</strong> Foreseen wear/tear; Disasters = Capital Loss • <strong>Goods Matrix:</strong> Private (Ex+Riv), Club (Ex+NonRiv), Common Pool (NonEx+Riv), Public (NonEx+NonRiv) • <strong>Special Goods:</strong> Merit (Positive externalities), Demerit (Sin taxes), Veblen (Status luxury), Giffen (Inferior staple).
  </div>

  <!-- Section 1.10 Header -->
  <div class="section-bar">
    <div class="section-tag-box">§ 1.10</div>
    <div class="section-title-box">Active Recall Diagnostic Cards</div>
  </div>

  <div class="recall-card">
    <div class="recall-card-header">✦ Card 1: Free-Rider Failure in Public Goods</div>
    <div class="recall-card-body">
      <strong>Question: Why does "Non-Excludability" cause competitive markets to fail?</strong><br>
      When a good is non-excludable, non-paying consumers cannot be prevented from enjoying it once provided. Rational consumers act as <strong>Free Riders</strong>. Because private producers cannot generate revenue through market prices, expected profit is zero, and markets produce zero output. Therefore, public goods require compulsory sovereign tax financing.
    </div>
  </div>

  <div class="recall-card">
    <div class="recall-card-header">✦ Card 2: Intermediate vs. Capital Good Accounting</div>
    <div class="recall-card-body">
      <strong>Question: How does national accounting classify paper sheets (₹50,000) vs. a printing press (₹10,00,000)?</strong><br>
      <strong>Paper (₹50,000):</strong> Intermediate Good (physically transformed and entirely used up; embedded in final book price; counting separately = double-counting).<br>
      <strong>Printing Press (₹10,00,000):</strong> Final Capital Good / GFCF (yields productive services across multiple cycles, depreciates gradually, added to Gross Investment in GDP).
    </div>
  </div>

  <div class="recall-card">
    <div class="recall-card-header">✦ Card 3: Common Pool Resources &amp; Tragedy of Commons</div>
    <div class="recall-card-body">
      <strong>Question: Why is an open-access aquifer a Common Pool Resource rather than a Public Good?</strong><br>
      It is <strong>non-excludable</strong> (any farmer can drill a borewell) but <strong>rivalrous in consumption</strong> (water drawn reduces the table for neighbors). This induces the <strong>Tragedy of the Commons</strong>: individual self-interest leads to competitive over-extraction and collective aquifer collapse.
    </div>
  </div>

</body>
</html>`;

  console.log('Rendering Chapter 01 (Sovereign Synthesis: Option A) via Edge headless...');
  renderHtmlToPdf(html, pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log(`✓ Chapter 01 (Option A) generated successfully: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
