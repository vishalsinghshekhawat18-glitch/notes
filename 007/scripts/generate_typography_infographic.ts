import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const artifactDir = 'C:\\Users\\visha\\.gemini\\antigravity\\brain\\3edac2ed-2272-4b41-a296-32eb5a9a1472';
const outPngPath = path.join(artifactDir, 'chapter_01_typography_visual_guide.png');
const tempHtmlPath = path.resolve('007', 'temp_annotated_ch1.html');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Chapter 01 Typography Visual Guide</title>
<style>
  :root {
    --serif: "Times New Roman", "Baskerville", "Georgia", serif;
    --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --mono: "Consolas", "Courier New", monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0f172a;
    font-family: var(--sans);
    color: #e2e8f0;
    padding: 32px;
    display: flex;
    justify-content: center;
  }

  .canvas {
    width: 1280px;
    background: #1e293b;
    border-radius: 16px;
    border: 1px solid #334155;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  /* Header Header */
  .guide-header {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    padding: 24px 32px;
    border-bottom: 2px solid #3b82f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .guide-header h1 {
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #f8fafc;
  }
  .guide-header p {
    font-size: 13px;
    color: #94a3b8;
    margin-top: 4px;
  }
  .badge-v6 {
    background: #059669;
    color: #fff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  /* Comparison Banner */
  .scale-strip {
    background: #090d16;
    padding: 16px 32px;
    border-bottom: 1px solid #334155;
    display: flex;
    gap: 24px;
    align-items: center;
  }
  .scale-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: #64748b;
  }
  .scale-item {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 8px 14px;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .scale-item.highlight {
    background: #1d4ed8;
    border-color: #60a5fa;
  }
  .scale-val {
    font-weight: 800;
    font-size: 15px;
    color: #f8fafc;
  }
  .scale-desc {
    font-size: 11px;
    color: #94a3b8;
  }
  .scale-item.highlight .scale-desc {
    color: #dbeafe;
  }

  /* Main Showcase Layout */
  .main-grid {
    display: grid;
    grid-template-columns: 820px 1fr;
    gap: 24px;
    padding: 28px 32px;
    background: #0f172a;
  }

  /* Simulated Printed Page */
  .page-container {
    background: #ffffff;
    color: #000000;
    padding: 32px 36px;
    border-radius: 6px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    position: relative;
    border: 1px solid #cbd5e1;
    font-family: var(--serif);
  }

  /* Callout pins container */
  .annotated-element {
    position: relative;
    margin-bottom: 8px;
  }

  .pin {
    position: absolute;
    right: -28px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--sans);
    font-size: 11px;
    font-weight: 800;
    color: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    z-index: 10;
  }
  .pin-blue { background: #2563eb; }
  .pin-emerald { background: #059669; }
  .pin-amber { background: #d97706; }
  .pin-purple { background: #7c3aed; }
  .pin-rose { background: #e11d48; }

  /* Actual Chapter 1 Elements Styling */
  .ch-opener {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2.2pt solid #000;
    border-bottom: 0.8pt solid #000;
    padding: 8px 0;
    margin-bottom: 12px;
  }
  .opener-num-box {
    border: 1.2pt solid #000;
    background: #f7f7f7;
    padding: 4px 10px;
    text-align: center;
  }
  .opener-num-label {
    font-family: var(--sans);
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #333;
  }
  .opener-num {
    font-family: var(--serif);
    font-size: 24pt;
    font-weight: 900;
    line-height: 1;
  }
  .opener-title-center {
    flex: 1;
    text-align: center;
    padding: 0 12px;
  }
  .opener-subhead {
    font-family: var(--sans);
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 3px;
  }
  .opener-title {
    font-family: var(--serif);
    font-size: 13.5pt;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1.2;
  }

  .lead-para {
    font-family: var(--serif);
    font-size: 11.5pt;
    line-height: 1.45;
    text-align: justify;
    margin-bottom: 10px;
  }
  .drop-cap {
    float: left;
    font-family: var(--serif);
    font-size: 3.2em; /* ~36.8pt */
    line-height: 0.82;
    padding-right: 8px;
    padding-top: 2px;
    font-weight: 900;
  }

  /* Section Bar */
  .sec-bar {
    display: flex;
    align-items: stretch;
    background: #ececec;
    border: 1pt solid #000;
    border-left: 3.5pt solid #000;
    margin: 12px 0 8px 0;
  }
  .sec-pill {
    background: #000;
    color: #fff;
    font-family: var(--sans);
    font-size: 9pt;
    font-weight: 900;
    padding: 4px 8px;
    display: flex;
    align-items: center;
  }
  .sec-title {
    font-family: var(--sans);
    font-size: 9.5pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 4px 8px;
    display: flex;
    align-items: center;
  }

  /* Subsection Bar */
  .subsec-bar {
    border-bottom: 1pt solid #000;
    border-left: 2.2pt solid #000;
    padding: 3px 7px;
    margin: 10px 0 6px 0;
    font-family: var(--sans);
    font-size: 9.2pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    background: #fafafa;
  }

  .body-p {
    font-family: var(--serif);
    font-size: 11.5pt;
    line-height: 1.45;
    text-align: justify;
    margin-bottom: 8px;
  }

  /* Analogy Card */
  .analogy-box {
    background: #f4f4f4;
    border-left: 3pt solid #000;
    padding: 6px 10px;
    margin: 8px 0;
    font-family: var(--serif);
    font-size: 9.2pt;
    line-height: 1.38;
  }
  .analogy-head {
    font-family: var(--sans);
    font-size: 8.4pt;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 4px;
    color: #111;
  }

  /* ASCII Diagram */
  .ascii-box {
    font-family: var(--mono);
    background: #fcfcfc;
    border: 0.75pt solid #333;
    padding: 6px 10px;
    font-size: 7.2pt;
    line-height: 1.25;
    margin: 8px 0;
    white-space: pre;
  }

  /* Table */
  .mini-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9pt;
    margin: 8px 0;
    border-top: 1.4pt solid #000;
    border-bottom: 1.4pt solid #000;
  }
  .mini-table th {
    background: #ececec;
    border: 0.5pt solid #000;
    padding: 4px 8px;
    font-family: var(--sans);
    font-size: 8.5pt;
    font-weight: 800;
    text-align: left;
  }
  .mini-table td {
    border: 0.4pt solid #bbb;
    padding: 4px 8px;
    font-family: var(--serif);
    font-size: 9pt;
    line-height: 1.35;
  }

  /* Side Annotation Column */
  .annotations-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .card-legend {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .card-legend-top {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .legend-badge {
    padding: 3px 8px;
    border-radius: 6px;
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 800;
    color: #fff;
  }
  .legend-title {
    font-weight: 700;
    font-size: 14px;
    color: #f1f5f9;
  }
  .legend-desc {
    font-size: 12px;
    color: #94a3b8;
    line-height: 1.4;
  }
  .legend-target {
    font-family: var(--mono);
    font-size: 11px;
    color: #60a5fa;
    background: #0f172a;
    padding: 2px 6px;
    border-radius: 4px;
    width: fit-content;
  }

  .footer-summary {
    background: #090d16;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #334155;
    font-size: 12px;
    color: #94a3b8;
  }
  .footer-summary strong {
    color: #f8fafc;
  }
</style>
</head>
<body>

<div class="canvas">

  <!-- Header -->
  <div class="guide-header">
    <div>
      <h1>CHAPTER 01 : EXACT TYPOGRAPHY &amp; FONT SCALE VISUAL GUIDE</h1>
      <p>Direct Visual Annotation of the Updated A4 Black &amp; White PDF Master Codex</p>
    </div>
    <div class="badge-v6">V6 FINAL CERTIFIED MASTER</div>
  </div>

  <!-- Scale Strip -->
  <div class="scale-strip">
    <div class="scale-label">Standard Scale:</div>
    <div class="scale-item">
      <div class="scale-val">7.2 pt</div>
      <div class="scale-desc">Monospace Logic Diagrams</div>
    </div>
    <div class="scale-item">
      <div class="scale-val">9.0 pt</div>
      <div class="scale-desc">Tables &amp; Cards</div>
    </div>
    <div class="scale-item">
      <div class="scale-val">9.5 pt</div>
      <div class="scale-desc">Section Headers</div>
    </div>
    <div class="scale-item highlight">
      <div class="scale-val">★ 11.5 pt</div>
      <div class="scale-desc">Main Body Content (Optimized Reading)</div>
    </div>
    <div class="scale-item">
      <div class="scale-val">13.5 pt</div>
      <div class="scale-desc">Chapter Title</div>
    </div>
    <div class="scale-item">
      <div class="scale-val">24.0 pt</div>
      <div class="scale-desc">Opener Numeral</div>
    </div>
  </div>

  <!-- Main Body Grid -->
  <div class="main-grid">

    <!-- Actual Page Simulation -->
    <div class="page-container">

      <!-- 1. Chapter Opener -->
      <div class="annotated-element ch-opener">
        <div class="opener-num-box">
          <div class="opener-num-label">CHAPTER</div>
          <div class="opener-num">01</div>
        </div>
        <div class="opener-title-center">
          <div class="opener-subhead">CHAPTER 01</div>
          <div class="opener-title">FOUNDATIONS OF ECONOMIC ORGANIZATION</div>
        </div>
        <div style="font-family: var(--sans); font-size: 8pt; font-weight: 800; border: 1pt solid #000; padding: 4px 6px;">
          SHELF 007
        </div>
        <div class="pin pin-rose" style="top: 25px;">A</div>
        <div class="pin pin-purple" style="top: 55px;">B</div>
      </div>

      <!-- 2. Lead Paragraph with Drop Cap -->
      <div class="annotated-element lead-para">
        <span class="drop-cap">C</span>anonical Sources Unified: Vivek Singh (7th Ed., Ch. 1), Ramesh Singh (McGraw Hill, Ch. 1), Sanjeev Verma (Output of an Economy), K. Sankarganesh, and NCERT Class XII Introductory Macroeconomics. This master synthesis establishes first-principles foundations.
        <div class="pin pin-amber" style="top: 18px;">C</div>
        <div class="pin pin-blue" style="top: 48px;">D</div>
      </div>

      <!-- 3. Section Bar -->
      <div class="annotated-element sec-bar">
        <div class="sec-pill">§ 1.1</div>
        <div class="sec-title">THE EPISTEMIC FOUNDATION: SCARCITY &amp; THE ECONOMIC PROBLEM</div>
        <div class="pin pin-emerald">E</div>
      </div>

      <!-- 4. Subsection Bar -->
      <div class="annotated-element subsec-bar">
        THE UNIVERSAL DILEMMA: UNLIMITED WANTS VS. SCARCE MEANS
        <div class="pin pin-emerald" style="right: -28px;">F</div>
      </div>

      <!-- 5. Body Paragraph -->
      <div class="annotated-element body-p">
        Economics is the study of how human societies allocate <strong>scarce productive resources</strong> that have <strong>alternative uses</strong> to satisfy unlimited human wants (Lionel Robbins, 1932). If resources were infinite, goods would be "free goods", market prices would not exist, and economic systems would be unnecessary. Scarcity forces every human society to make <strong>choices</strong>, and every choice incurs an <strong>Opportunity Cost</strong>.
        <div class="pin pin-blue" style="top: 50%;">D</div>
      </div>

      <!-- 6. ASCII Diagram -->
      <div class="annotated-element ascii-box">[Unlimited Human Wants]  vs.  [Finite Productive Resources]
          │
    [Absolute Scarcity] ──► [Compulsory Choice] ──► [Opportunity Cost] (Value of next best alternative)<div class="pin pin-amber" style="top: 50%;">G</div>
      </div>

      <!-- 7. Key Analogy Box -->
      <div class="annotated-element analogy-box">
        <div class="analogy-head">THE BEGINNER'S MENTAL MODEL: THE "CAR MILEAGE IN A LAB" ANALOGY (CETERIS PARIBUS)</div>
        Why do economic models assume "All other things being equal"? In a car's technical brochure, the manufacturer claims a mileage of 22 KMPL measured under controlled test track conditions. In real road conditions, traffic friction reduces this. Economists isolate causal laws by holding external variables constant.
        <div class="pin pin-purple" style="top: 50%;">H</div>
      </div>

      <!-- 8. Compact Table -->
      <div class="annotated-element">
        <table class="mini-table">
          <thead>
            <tr>
              <th style="width: 38%;">Fundamental Question</th>
              <th>Structural Economic Decision Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. What to produce?</strong></td>
              <td>Allocation of resources between consumer goods and capital goods.</td>
            </tr>
            <tr>
              <td><strong>2. How to produce?</strong></td>
              <td>Choice of technique: Labor-Intensive (LIT) vs. Capital-Intensive (CIT).</td>
            </tr>
          </tbody>
        </table>
        <div class="pin pin-rose" style="top: 50%;">I</div>
      </div>

    </div>

    <!-- Right Side Explanations Column -->
    <div class="annotations-panel">

      <div class="card-legend">
        <div class="card-legend-top">
          <span class="legend-badge" style="background: #2563eb;">Pin D</span>
          <span class="legend-title">Main Content: 11.5 pt</span>
        </div>
        <div class="legend-target">Prose Paragraphs &amp; Explanations</div>
        <div class="legend-desc">
          <strong>The core reading experience.</strong> 11.5pt Serif with 1.45 line-height provides superior legibility for sustained study sessions without eye fatigue, larger and clearer than standard 10pt textbook print.
        </div>
      </div>

      <div class="card-legend">
        <div class="card-legend-top">
          <span class="legend-badge" style="background: #e11d48;">Pin A</span>
          <span class="legend-title">Chapter Opener: 24.0 pt</span>
        </div>
        <div class="legend-target">Hero Numeral Box (.n)</div>
        <div class="legend-desc">
          Extra-bold serif numeral inside a bordered badge for instantaneous visual identification when flipping through physical pages.
        </div>
      </div>

      <div class="card-legend">
        <div class="card-legend-top">
          <span class="legend-badge" style="background: #7c3aed;">Pin B</span>
          <span class="legend-title">Chapter Title: 13.5 pt</span>
        </div>
        <div class="legend-target">Main Chapter Headline (.t h1)</div>
        <div class="legend-desc">
          High-contrast serif small-caps heading with 0.05em tracking for authoritative presence.
        </div>
      </div>

      <div class="card-legend">
        <div class="card-legend-top">
          <span class="legend-badge" style="background: #059669;">Pin E &amp; F</span>
          <span class="legend-title">Section Bars: 9.5 pt &amp; 9.2 pt</span>
        </div>
        <div class="legend-target">§ Section Pills &amp; Banners</div>
        <div class="legend-desc">
          Compact sans-serif headers with solid black pills to maintain hierarchical discipline and break content into digestible chunks.
        </div>
      </div>

      <div class="card-legend">
        <div class="card-legend-top">
          <span class="legend-badge" style="background: #d97706;">Pin G</span>
          <span class="legend-title">ASCII Diagram: 7.2 pt</span>
        </div>
        <div class="legend-target">pre.ascii-diagram (Consolas)</div>
        <div class="legend-desc">
          Monospaced condensed type ensuring wide multi-node structural flowcharts fit comfortably within the A4 printable margins without wrapping.
        </div>
      </div>

      <div class="card-legend">
        <div class="card-legend-top">
          <span class="legend-badge" style="background: #7c3aed;">Pin H</span>
          <span class="legend-title">Analogy &amp; Traps: 9.2 pt</span>
        </div>
        <div class="legend-target">Key Lesson &amp; Trap Cards</div>
        <div class="legend-desc">
          Slightly reduced font with tinted background and solid left spine to clearly separate pedagogical commentary from core theoretical prose.
        </div>
      </div>

      <div class="card-legend">
        <div class="card-legend-top">
          <span class="legend-badge" style="background: #e11d48;">Pin I</span>
          <span class="legend-title">Tables: 9.0 pt (Body) / 8.5 pt (Head)</span>
        </div>
        <div class="legend-target">High-Yield Comparative Grids</div>
        <div class="legend-desc">
          Calibrated density allowing multi-column analytical matrices to hold dense economic data without crowding.
        </div>
      </div>

    </div>

  </div>

  <!-- Footer -->
  <div class="footer-summary">
    <div><strong>Design Verdict:</strong> 11.5pt body text is the golden standard for publication codices—comfortably readable in print while allowing dense, rigorous coverage across 211 pages.</div>
    <div>Mind of Aravalli Press • Shelf 007</div>
  </div>

</div>

</body>
</html>
`;

fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');
console.log('Generated temp annotated HTML.');

// Render to PNG using Edge headless
const cmd = `"${edgePath}" --headless=new --screenshot="${outPngPath}" --window-size=1360,1280 --hide-scrollbars "file:///${tempHtmlPath.replace(/\\\\/g, '/')}"`;
console.log('Rendering high-res screenshot...');
execSync(cmd, { stdio: 'inherit' });

console.log('✓ Visual Typography Guide generated at:', outPngPath);
fs.unlinkSync(tempHtmlPath);
