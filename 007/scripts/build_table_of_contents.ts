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

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-toc-profile-'));
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

  const pdfPath = path.join(outDir, '02_TABLE_OF_CONTENTS_A4_BW.pdf');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 01: Economics - Table of Contents</title>
<style>
  @page {
    size: A4 portrait;
    margin: 14mm 16mm 14mm 22mm;
  }

  @page :left {
    margin: 14mm 22mm 14mm 16mm;
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
    font-size: 9.2pt;
    line-height: 1.4;
  }

  .toc-page {
    page-break-after: always;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .toc-page:last-child {
    page-break-after: avoid;
  }

  /* Running Header & Folio */
  .toc-header-bar {
    border-bottom: 1.2pt solid #000;
    padding-bottom: 1.5mm;
    margin-bottom: 3.5mm;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .toc-kicker {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
  }

  .toc-title {
    font-size: 15pt;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .toc-subtitle {
    font-size: 7.8pt;
    font-style: italic;
    color: #444;
  }

  /* Part Banners */
  .part-banner {
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1.2mm 3mm;
    margin-top: 3mm;
    margin-bottom: 1.8mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .part-banner-tag {
    font-size: 6.8pt;
    font-weight: 500;
    letter-spacing: 0.8px;
    opacity: 0.9;
  }

  /* Chapter Rows */
  .chapter-row {
    margin-bottom: 1.8mm;
    page-break-inside: avoid;
  }

  .chapter-main-line {
    display: flex;
    align-items: baseline;
    font-size: 9pt;
  }

  .chapter-num {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7pt;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.5mm 1.8mm;
    border: 0.75pt solid #000;
    margin-right: 2.2mm;
    flex-shrink: 0;
    background: #fff;
  }

  .chapter-name {
    font-weight: bold;
    color: #000;
    flex-shrink: 0;
  }

  .leader-dots {
    flex-grow: 1;
    border-bottom: 0.75pt dotted #777;
    margin: 0 2mm 1mm 2mm;
    height: 1px;
  }

  .chapter-locator {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7.8pt;
    font-weight: bold;
    flex-shrink: 0;
    text-align: right;
  }

  .chapter-topics {
    font-size: 7.4pt;
    color: #444;
    margin-left: 13mm;
    line-height: 1.3;
    margin-top: 0.3mm;
  }

  .chapter-topics strong {
    color: #111;
  }

  /* Bottom Curricular Note */
  .nav-guide-box {
    border: 0.75pt solid #000;
    padding: 2.5mm 3.5mm;
    background: #f7f7f7;
    margin-top: 3mm;
    font-size: 7.2pt;
    line-height: 1.35;
  }

  .nav-guide-title {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.8mm;
  }

  .footer-folio-bar {
    border-top: 0.5pt solid #888;
    padding-top: 1.5mm;
    margin-top: 3mm;
    display: flex;
    justify-content: space-between;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 7pt;
    color: #555;
  }
</style>
</head>
<body>

  <!-- =========================================================
       PAGE 1 OF TOC (PARTS I TO V: CHAPTERS 01 TO 13)
       ========================================================= -->
  <div class="toc-page">

    <div class="toc-header-bar">
      <div>
        <div class="toc-kicker">Sovereign Curricular Map • Shelf 007 Bastion</div>
        <div class="toc-title">Table of Contents &amp; Master Syllabus</div>
      </div>
      <div class="toc-subtitle">Volume I : Macroeconomic Architecture</div>
    </div>

    <!-- PART I -->
    <div class="part-banner">
      <span>Part I : Macroeconomic Foundations &amp; National Output</span>
      <span class="part-banner-tag">Chapters 01 – 03</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 01</span>
        <span class="chapter-name">Foundations of Economic Organization, Sectors &amp; Goods Typology</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 01</span>
      </div>
      <div class="chapter-topics">
        Core Scarcity • PPF Frontier • Market vs. Command • Circular Flow • Excludability/Rivalry Matrix • Exam Traps
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 02</span>
        <span class="chapter-name">National Income Accounting, GVA &amp; The 2015 NSO Methodology</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 02</span>
      </div>
      <div class="chapter-topics">
        GDP/NDP/GNP/NNP • Factor Cost vs. Basic Price vs. Market Price • MCA-21 Database • ICOR • GDP Deflator
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 03</span>
        <span class="chapter-name">Growth, Capital Productivity &amp; Human Development Metrics</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 03</span>
      </div>
      <div class="chapter-topics">
        Growth vs. Development • Amartya Sen Capabilities • HDI / IHDI / GDI / GII • Global Multidimensional Poverty Index
      </div>
    </div>

    <!-- PART II -->
    <div class="part-banner">
      <span>Part II : Money, Central Banking &amp; Monetary Transmission</span>
      <span class="part-banner-tag">Chapters 04 – 06</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 04</span>
        <span class="chapter-name">The Nature of Money, Liquidity Aggregates &amp; Money Creation</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 04</span>
      </div>
      <div class="chapter-topics">
        Functions of Money • High-Powered Money ($M_0$) • Reserve Money Multiplier • $M_1/M_2/M_3/M_4$ vs. $NM_1/NM_2/NM_3$
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 05</span>
        <span class="chapter-name">The Reserve Bank of India &amp; Inflation Targeting Framework</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 05</span>
      </div>
      <div class="chapter-topics">
        RBI Act 1934 • Monetary Policy Framework Agreement (MPFA) • MPC Composition &amp; Mandate ($4\% \pm 2\%$)
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 06</span>
        <span class="chapter-name">Instruments of Monetary Policy &amp; The Transmission Channel</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 06</span>
      </div>
      <div class="chapter-topics">
        CRR &amp; SLR • LAF (Repo/Reverse Repo/SDF/MSF) • Open Market Operations • MCLR vs. EBLR Transmission Channels
      </div>
    </div>

    <!-- PART III -->
    <div class="part-banner">
      <span>Part III : Financial Markets, Banking Sector &amp; Regulation</span>
      <span class="part-banner-tag">Chapters 07 – 09</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 07</span>
        <span class="chapter-name">Indian Banking Architecture, SCBs &amp; Capital Adequacy</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 07</span>
      </div>
      <div class="chapter-topics">
        Scheduled Commercial Banks • Small Finance &amp; Payments Banks • Basel III Accords (CRAR, Tier 1/2, CCB, D-SIBs)
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 08</span>
        <span class="chapter-name">Non-Performing Assets (NPAs), IBC &amp; Bad Bank Ecosystem</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 08</span>
      </div>
      <div class="chapter-topics">
        SMA 0/1/2 Classifications • SARFAESI Act • Insolvency &amp; Bankruptcy Code 2016 (CIRP) • NARCL-IDRCL Bad Bank
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 09</span>
        <span class="chapter-name">Financial Markets: Money Market, G-Secs &amp; Capital Market</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 09</span>
      </div>
      <div class="chapter-topics">
        Call/Notice Money • T-Bills &amp; Commercial Paper • G-Sec Yield Curves • Stock Exchanges &amp; SEBI Regulatory Powers
      </div>
    </div>

    <!-- PART IV -->
    <div class="part-banner">
      <span>Part IV : Public Finance, Fiscal Policy &amp; Tax Architecture</span>
      <span class="part-banner-tag">Chapters 10 – 12</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 10</span>
        <span class="chapter-name">Budgetary Architecture: Revenue, Capital, Deficits &amp; FRBM</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 10</span>
      </div>
      <div class="chapter-topics">
        Consolidated/Contingency/Public Accounts • Fiscal vs. Revenue vs. Primary Deficit • FRBM Targets &amp; Escape Clauses
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 11</span>
        <span class="chapter-name">Taxation Architecture in India: Direct Taxes &amp; GST Ecosystem</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 11</span>
      </div>
      <div class="chapter-topics">
        Progressive vs. Regressive Taxes • Corporate Tax Slabs • GST Architecture (CGST/SGST/IGST), Input Tax Credit
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 12</span>
        <span class="chapter-name">Fiscal Federalism, Finance Commission &amp; Centre-State Relations</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 12</span>
      </div>
      <div class="chapter-topics">
        Article 280 Mandate • Vertical vs. Horizontal Devolution Formulae (15th FC) • Cess vs. Surcharge Divisible Pool
      </div>
    </div>

    <div class="footer-folio-bar">
      <span>Shelf 007 Monograph Series : Codex ECO-007</span>
      <span>Contents Page 1 of 2</span>
      <span>Page iii</span>
    </div>

  </div>

  <!-- =========================================================
       PAGE 2 OF TOC (PARTS V TO X: CHAPTERS 13 TO 26)
       ========================================================= -->
  <div class="toc-page">

    <div class="toc-header-bar">
      <div>
        <div class="toc-kicker">Sovereign Curricular Map • Shelf 007 Bastion</div>
        <div class="toc-title">Table of Contents &amp; Master Syllabus (Contd.)</div>
      </div>
      <div class="toc-subtitle">Volume I : Structural Policies &amp; Synthesis</div>
    </div>

    <!-- PART V -->
    <div class="part-banner">
      <span>Part V : Inflation Dynamics, Labor Markets &amp; Poverty</span>
      <span class="part-banner-tag">Chapters 13 – 15</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 13</span>
        <span class="chapter-name">Inflation: Theories, Indices &amp; Monetary Transmission</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 13</span>
      </div>
      <div class="chapter-topics">
        Demand-Pull vs. Cost-Push • Headline vs. Core Inflation • CPI-C vs. WPI Differences &amp; Weightages
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 14</span>
        <span class="chapter-name">Employment Dynamics, Labor Force Surveys (PLFS) &amp; Unemployment</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 14</span>
      </div>
      <div class="chapter-topics">
        LFPR, WPR &amp; Unemployment Rates • Disguised &amp; Structural Unemployment • UPS vs. CWS Methodologies
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 15</span>
        <span class="chapter-name">Poverty Estimation Methodologies &amp; Inequality Metrics</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 15</span>
      </div>
      <div class="chapter-topics">
        Alagh, Lakdawala, Tendulkar &amp; Rangarajan Committees • Consumption Baskets • Gini Coefficient &amp; Lorenz Curve
      </div>
    </div>

    <!-- PART VI -->
    <div class="part-banner">
      <span>Part VI : External Sector, Balance of Payments &amp; Trade</span>
      <span class="part-banner-tag">Chapters 16 – 18</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 16</span>
        <span class="chapter-name">Balance of Payments (BoP): Current &amp; Capital Accounts</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 16</span>
      </div>
      <div class="chapter-topics">
        Trade Balance vs. Current Account Balance (CAD) • FDI vs. FPI / FII • Foreign Exchange Reserves &amp; BoP Crises
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 17</span>
        <span class="chapter-name">Foreign Exchange Dynamics, NEER, REER &amp; Convertibility</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 17</span>
      </div>
      <div class="chapter-topics">
        Nominal &amp; Real Effective Exchange Rates • Tarapore Committee Reports • Current vs. Capital Account Convertibility
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 18</span>
        <span class="chapter-name">International Economic Organizations: IMF, World Bank &amp; WTO</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 18</span>
      </div>
      <div class="chapter-topics">
        IMF SDR Quotas • World Bank Group Institutions (IBRD, IDA, IFC) • WTO Agreements, Amber/Blue/Green Boxes
      </div>
    </div>

    <!-- PART VII -->
    <div class="part-banner">
      <span>Part VII : Sectoral Engines: Agriculture, Industry &amp; Energy</span>
      <span class="part-banner-tag">Chapters 19 – 21</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 19</span>
        <span class="chapter-name">Indian Agriculture: Capital Formation, Pricing (MSP) &amp; Reforms</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 19</span>
      </div>
      <div class="chapter-topics">
        A2, A2+FL &amp; C2 Cost Formulae • CACP Recommendations • Agricultural Credit (KCC, PSL) • PM-KISAN &amp; E-NAM
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 20</span>
        <span class="chapter-name">Industrial Architecture, MSMEs, Disinvestment &amp; PLI</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 20</span>
      </div>
      <div class="chapter-topics">
        Revised MSME Composite Criteria • Strategic Disinvestment Policy • Production Linked Incentive (PLI) Scheme
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 21</span>
        <span class="chapter-name">Infrastructure, Logistics (PM GatiShakti) &amp; Energy Transition</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 21</span>
      </div>
      <div class="chapter-topics">
        National Infrastructure Pipeline (NIP) • PM GatiShakti Multi-modal Master Plan • Renewable Energy &amp; COP Pledges
      </div>
    </div>

    <!-- PART VIII & IX -->
    <div class="part-banner">
      <span>Part VIII &amp; IX : Planning, Labor Codes &amp; Social Structure</span>
      <span class="part-banner-tag">Chapters 22 – 25</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 22</span>
        <span class="chapter-name">Economic Planning in India: Five-Year Plans &amp; NITI Aayog</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 22</span>
      </div>
      <div class="chapter-topics">
        Harrod-Domar to Mahalanobis Strategy • Planning Commission Dissolution • NITI Aayog Cooperative Federalism
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 23</span>
        <span class="chapter-name">Indian Labor Law Architecture &amp; The Four Comprehensive Labor Codes</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 23</span>
      </div>
      <div class="chapter-topics">
        Code on Wages 2019 • Industrial Relations Code • Social Security Code • Occupational Safety &amp; Health Code
      </div>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 24–25</span>
        <span class="chapter-name">Urbanization, Demographics &amp; Social Welfare Architecture</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 24–25</span>
      </div>
      <div class="chapter-topics">
        Demographic Dividend &amp; Dependency Ratios • Migration Pull/Push Factors • Constitutional Social Justice Framework
      </div>
    </div>

    <!-- PART X -->
    <div class="part-banner">
      <span>Part X : The Capstone Master Revision &amp; Examination Vault</span>
      <span class="part-banner-tag">Chapter 26</span>
    </div>

    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 26</span>
        <span class="chapter-name">The Grand Synthesis: 70 Active Recall Diagnostic Cards &amp; Vault</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">Module 26</span>
      </div>
      <div class="chapter-topics">
        60-Second Retrieval Skeletons • Distinction Matrices • High-Yield Formulas • 70 Descriptive Flashcards
      </div>
    </div>

    <!-- Navigation Guide -->
    <div class="nav-guide-box">
      <div class="nav-guide-title">Curricular Navigation &amp; Examination Lens Alignment</div>
      <div><strong>UPSC CSE:</strong> Focus on Causal Linkages, FRBM Escape Clauses, GST Federalism, and Agri-MSP Reforms.</div>
      <div><strong>RBI Grade B:</strong> Focus on Monetary Aggregates ($M_0/M_3/NM_3$), LAF Transmission Corridors, and Basel III CRAR.</div>
      <div><strong>IIBF DBF:</strong> Focus on Commercial Banking Statutes, SARFAESI, IBC Timelines, and Money Market Instruments.</div>
    </div>

    <div class="footer-folio-bar">
      <span>Shelf 007 Monograph Series : Codex ECO-007</span>
      <span>Contents Page 2 of 2</span>
      <span>Page iv</span>
    </div>

  </div>

</body>
</html>`;

  console.log('Rendering Table of Contents PDF via Edge headless...');
  renderHtmlToPdf(html, pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log(`✓ Table of Contents generated: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
