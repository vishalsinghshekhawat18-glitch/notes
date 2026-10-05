import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import katex from 'katex';
import { marked } from 'marked';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { CHAPTERS_REGISTRY, transformChapterMarkdown, generateChapterPrintCss, ChapterMeta } from './build_all_chapters';

const EXACT_TOC_MAPPING = [
  { ch: 1, start: 1, end: 7, pages: 7 },
  { ch: 2, start: 8, end: 15, pages: 8 },
  { ch: 3, start: 16, end: 24, pages: 9 },
  { ch: 4, start: 25, end: 30, pages: 6 },
  { ch: 5, start: 31, end: 38, pages: 8 },
  { ch: 6, start: 39, end: 44, pages: 6 },
  { ch: 7, start: 45, end: 53, pages: 9 },
  { ch: 8, start: 54, end: 58, pages: 5 },
  { ch: 9, start: 59, end: 67, pages: 9 },
  { ch: 10, start: 68, end: 75, pages: 8 },
  { ch: 11, start: 76, end: 84, pages: 9 },
  { ch: 12, start: 85, end: 90, pages: 6 },
  { ch: 13, start: 91, end: 96, pages: 6 },
  { ch: 14, start: 97, end: 103, pages: 7 },
  { ch: 15, start: 104, end: 109, pages: 6 },
  { ch: 16, start: 110, end: 112, pages: 3 },
  { ch: 17, start: 113, end: 119, pages: 7 },
  { ch: 18, start: 120, end: 126, pages: 7 },
  { ch: 19, start: 127, end: 136, pages: 10 },
  { ch: 20, start: 137, end: 145, pages: 9 },
  { ch: 21, start: 146, end: 154, pages: 9 },
  { ch: 22, start: 155, end: 161, pages: 7 },
  { ch: 23, start: 162, end: 168, pages: 7 },
  { ch: 24, start: 169, end: 173, pages: 5 },
  { ch: 25, start: 174, end: 178, pages: 5 },
  { ch: 26, start: 179, end: 198, pages: 20 },
  { ch: 27, start: 199, end: 207, pages: 9 },
];

export function buildTableOfContentsHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 01: Economics - Master Table of Contents</title>
<style>
  @page {
    size: A4 portrait;
  }

  @page toc-page:left {
    margin: 12mm 24mm 11mm 14mm;
    @top-left {
      content: "TABLE OF CONTENTS & CURRICULAR MAP";
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.2pt;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #111;
      border-bottom: 0.8pt solid #000;
      padding-bottom: 1.5mm;
    }
    @bottom-left {
      content: "MIND OF ARAVALLI PRESS";
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7pt;
      font-weight: 700;
      letter-spacing: 0.14em;
      border-top: 0.8pt solid #000;
      padding-top: 1.5mm;
    }
    @bottom-right {
      content: "iii";
      font-family: "Times New Roman", Georgia, serif;
      font-size: 11pt;
      font-weight: 700;
      border-top: 0.8pt solid #000;
      padding-top: 1.5mm;
    }
  }

  @page toc-page:right {
    margin: 12mm 14mm 11mm 24mm;
    @top-left {
      content: "SHELF 007 : INDIAN MACROECONOMIC ARCHITECTURE";
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.2pt;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #111;
      border-bottom: 0.8pt solid #000;
      padding-bottom: 1.5mm;
    }
    @bottom-left {
      content: "MIND OF ARAVALLI PRESS";
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7pt;
      font-weight: 700;
      letter-spacing: 0.14em;
      border-top: 0.8pt solid #000;
      padding-top: 1.5mm;
    }
    @bottom-right {
      content: "iv";
      font-family: "Times New Roman", Georgia, serif;
      font-size: 11pt;
      font-weight: 700;
      border-top: 0.8pt solid #000;
      padding-top: 1.5mm;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    font-family: "Times New Roman", "Baskerville", "Georgia", serif;
    color: #111;
    background: #fff;
    font-size: 9.5pt;
    line-height: 1.42;
  }

  .toc-wrapper {
    page: toc-page;
  }

  .toc-sheet {
    page-break-after: always;
  }

  .toc-sheet:last-child {
    page-break-after: avoid;
  }

  .toc-opener-header {
    border-top: 2.2pt solid #000;
    border-bottom: 0.8pt solid #000;
    padding: 2.5mm 0;
    margin-bottom: 3.5mm;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .toc-opener-header .title-area small {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #444;
    display: block;
    margin-bottom: 0.8mm;
  }

  .toc-opener-header .title-area h1 {
    font-size: 14pt;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 1.1;
  }

  .toc-opener-header .meta-tag {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.5pt;
    font-weight: 700;
    background: #ececec;
    border: 0.8pt solid #000;
    padding: 1.2mm 2.5mm;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .part-banner {
    background: #ececec;
    border: 1pt solid #000;
    border-left: 3.5pt solid #000;
    padding: 1mm 2.5mm;
    margin-top: 2.8mm;
    margin-bottom: 1.5mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    page-break-after: avoid;
    break-after: avoid;
  }

  .part-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.8pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #000;
  }

  .part-tag {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 6.8pt;
    font-weight: 700;
    color: #333;
    letter-spacing: 0.05em;
  }

  .chapter-row {
    margin-bottom: 1.5mm;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .chapter-main-line {
    display: flex;
    align-items: baseline;
    font-size: 9.2pt;
  }

  .chapter-num {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.2pt;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.4mm 1.5mm;
    border: 0.6pt solid #000;
    background: #f7f7f7;
    margin-right: 2mm;
    flex-shrink: 0;
  }

  .chapter-name {
    font-weight: 700;
    color: #000;
    flex-shrink: 0;
  }

  .leader-dots {
    flex-grow: 1;
    border-bottom: 0.8pt dotted #888;
    margin: 0 2mm 1mm 2mm;
    height: 1px;
  }

  .chapter-locator {
    font-family: "Times New Roman", Georgia, serif;
    font-size: 9pt;
    font-weight: 700;
    flex-shrink: 0;
    color: #000;
  }

  .chapter-subtopics {
    font-size: 7.4pt;
    color: #444;
    margin-left: 12mm;
    line-height: 1.28;
    margin-top: 0.2mm;
  }
</style>
</head>
<body>
<div class="toc-wrapper">

  <!-- ==================== TOC SHEET 1 (PARTS I TO V: CHAPTERS 01 TO 13) ==================== -->
  <div class="toc-sheet">
    <div class="toc-opener-header">
      <div class="title-area">
        <small>Curricular Architecture • Shelf 007 Bastion</small>
        <h1>Table of Contents &amp; Master Syllabus</h1>
      </div>
      <div class="meta-tag">27 Chapters • 207 Pages</div>
    </div>

    <!-- PART I -->
    <div class="part-banner">
      <span class="part-title">Part I : Macroeconomic Foundations &amp; National Output</span>
      <span class="part-tag">Chapters 01 – 03</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 01</span>
        <span class="chapter-name">Foundations of Economic Organization, Sectors &amp; Goods</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 1</span>
      </div>
      <div class="chapter-subtopics">Scarcity &amp; Opportunity Cost • PPF Curve • Typology of Systems • Circular Flow • 4-Quadrant Goods Matrix</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 02</span>
        <span class="chapter-name">National Income Accounting, GVA &amp; 2015–2026 Methodological Evolution</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 8</span>
      </div>
      <div class="chapter-subtopics">GDP / NDP / GNP / NNP • Basic Price vs. Market Price • 3 Methods • ICOR • GDP Deflator</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 03</span>
        <span class="chapter-name">Growth, Capital Productivity &amp; Welfare Metrics</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 16</span>
      </div>
      <div class="chapter-subtopics">Economic Growth vs. Development • HDI Geometric Mean • NITI Aayog 12-Indicator MPI • Green GDP</div>
    </div>

    <!-- PART II -->
    <div class="part-banner">
      <span class="part-title">Part II : Money, Central Banking &amp; Monetary Transmission</span>
      <span class="part-tag">Chapters 04 – 06</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 04</span>
        <span class="chapter-name">Nature of Money, Liquidity Aggregates &amp; Creation</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 25</span>
      </div>
      <div class="chapter-subtopics">RBI Act §33 Minimum Reserve System • M0 / M1 / M2 / M3 / M4 • Multiplier m=(1+c)/(c+r) • Fisher Identity</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 05</span>
        <span class="chapter-name">The Reserve Bank of India &amp; Inflation Targeting</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 31</span>
      </div>
      <div class="chapter-subtopics">Flexible Inflation Targeting (4% ± 2%) • MPC 6-Member Structure • §45ZN Failure • Bimal Jalan ECF</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 06</span>
        <span class="chapter-name">Instruments of Monetary Policy &amp; Transmission Channels</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 39</span>
      </div>
      <div class="chapter-subtopics">50 bps LAF Corridor (MSF ↔ Repo ↔ SDF) • CRR &amp; SLR • Open Market Operations • EBLR Transmission</div>
    </div>

    <!-- PART III -->
    <div class="part-banner">
      <span class="part-title">Part III : Banking Architecture, NPAs &amp; Financial Markets</span>
      <span class="part-tag">Chapters 07 – 09</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 07</span>
        <span class="chapter-name">Indian Banking Architecture &amp; Capital Adequacy</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 45</span>
      </div>
      <div class="chapter-subtopics">Scheduled Banks • Differentiated Banks (Payments vs SFB) • Basel III 11.5% CRAR • PCA Framework</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 08</span>
        <span class="chapter-name">Non-Performing Assets (NPAs), IBC 2016 &amp; Bad Banks</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 54</span>
      </div>
      <div class="chapter-subtopics">90-Day Overdue &amp; SMA 0/1/2 • IBC 2016 (66% CoC &amp; 330 Days) • Section 53 Waterfall • NARCL-IDRCL</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 09</span>
        <span class="chapter-name">Financial Markets, G-Secs &amp; Capital Market Ecosystem</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 59</span>
      </div>
      <div class="chapter-subtopics">Money Market (RBI) vs Capital Market (SEBI) • T-Bills (91/182/364D) • Bond Yields • Masala Bonds</div>
    </div>

    <!-- PART IV -->
    <div class="part-banner">
      <span class="part-title">Part IV : Public Finance, Budgetary Architecture &amp; Tax</span>
      <span class="part-tag">Chapters 10 – 12</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 10</span>
        <span class="chapter-name">Budgetary Architecture: Revenue, Capital, Deficits &amp; FRBM</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 68</span>
      </div>
      <div class="chapter-subtopics">Constitutional Funds (Articles 266 &amp; 267) • Fiscal Deficit • N.K. Singh 60% Debt • Union Budget 2026–27 Anchor (4.3%)</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 11</span>
        <span class="chapter-name">Taxation Architecture in India: Direct Taxes &amp; GST</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 76</span>
      </div>
      <div class="chapter-subtopics">Income-tax Act, 2025 (Effective 1 April 2026) • Rules 2026 • GST Council 75% Majority • ITC • Corporate Tax 22%</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 12</span>
        <span class="chapter-name">Fiscal Federalism, Finance Commission &amp; Relations</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 85</span>
      </div>
      <div class="chapter-subtopics">Article 270 Divisible Pool • 16th FC (2026–31, 41% Vertical) • Final Horizontal Formula (Income Dist 42.5%) • Article 293(3)</div>
    </div>

    <!-- PART V (START) -->
    <div class="part-banner">
      <span class="part-title">Part V : Inflation Theories &amp; Price Indices</span>
      <span class="part-tag">Chapter 13</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 13</span>
        <span class="chapter-name">Inflation: Mechanisms, Theories &amp; Indices (CPI vs WPI)</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 91</span>
      </div>
      <div class="chapter-subtopics">Headline vs Core • CPI 2024 Series (358 Items, Food 36.75%) vs 2012 Base • FIT 4% ± 2% (2026–31) • WPI 697 Items • Phillips Curve</div>
    </div>
  </div>

  <!-- ==================== TOC SHEET 2 (PARTS V CONTD TO X: CHAPTERS 14 TO 27) ==================== -->
  <div class="toc-sheet">
    <!-- PART V (CONTD) -->
    <div class="part-banner" style="margin-top: 0;">
      <span class="part-title">Part V (Contd.) : Employment Dynamics &amp; Poverty Estimation</span>
      <span class="part-tag">Chapters 14 – 15</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 14</span>
        <span class="chapter-name">Employment Dynamics, Periodic Labour Force Survey &amp; Types</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 97</span>
      </div>
      <div class="chapter-subtopics">Unemployment Rate Formula • UPSS vs CWS 1-Hour Rule • Disguised MPL=0 • Demographic Dividend (2018-2055)</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 15</span>
        <span class="chapter-name">Poverty Estimation Methodologies &amp; Inequality Metrics</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 104</span>
      </div>
      <div class="chapter-subtopics">Tendulkar MRP Poverty Line (21.9%) • Rangarajan Methodology • Lorenz Curve &amp; Gini Coefficient</div>
    </div>

    <!-- PART VI -->
    <div class="part-banner">
      <span class="part-title">Part VI : Balance of Payments, Forex &amp; Global Institutions</span>
      <span class="part-tag">Chapters 16 – 18</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 16</span>
        <span class="chapter-name">Balance of Payments (BoP) Architecture: Current &amp; Capital</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 110</span>
      </div>
      <div class="chapter-subtopics">Current Account (Trade + Invisibles) • Capital Account • Arvind Mayaram 10% FDI Rule • Forex Hierarchy</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 17</span>
        <span class="chapter-name">Forex Dynamics, NEER, REER &amp; Currency Convertibility</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 113</span>
      </div>
      <div class="chapter-subtopics">NEER &amp; REER Valuation • Current Account Convertibility (1994) • Capital Convertibility • FTP 2023 • SRVA</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 18</span>
        <span class="chapter-name">International Economic Organizations: IMF, World Bank, WTO</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 120</span>
      </div>
      <div class="chapter-subtopics">IMF SDR Basket • World Bank Group (India Non-Membership in ICSID) • WTO AoA Boxes • Appellate Body / MPIA</div>
    </div>

    <!-- PART VII -->
    <div class="part-banner">
      <span class="part-title">Part VII : Sectoral Architecture: Agriculture, Industry &amp; Infra</span>
      <span class="part-tag">Chapters 19 – 21</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 19</span>
        <span class="chapter-name">Indian Agriculture, MSP &amp; Rural Economy (NABARD ARD Suite)</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 127</span>
      </div>
      <div class="chapter-subtopics">86.2% Small/Marginal • CACP 23 Crops • NABARD Refinance • 3-Tier STCCS (PACS) • RIDF • PMFBY • e-NAM &amp; e-NWRs</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 20</span>
        <span class="chapter-name">Industrial Architecture, MSMEs, Disinvestment &amp; Policy</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 137</span>
      </div>
      <div class="chapter-subtopics">April 2025 MSME Criteria (₹2.5/₹25/₹125 Cr) • Export Turnover Excluded • 9-Core Industries (Iron Ore) • Atomic/Rail Reservation</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 21</span>
        <span class="chapter-name">Infrastructure, PM GatiShakti &amp; Energy Transition</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 146</span>
      </div>
      <div class="chapter-subtopics">HAM (40% Cash / NHAI Traffic Risk) • National Logistics Policy • COP26 Panchamrit (2070 Net-Zero) • Carbon Market</div>
    </div>

    <!-- PART VIII -->
    <div class="part-banner">
      <span class="part-title">Part VIII : Planning, Labor Codes &amp; Socio-Demographics</span>
      <span class="part-tag">Chapters 22 – 25</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 22</span>
        <span class="chapter-name">Economic Planning History, Five-Year Plans &amp; NITI Aayog</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 155</span>
      </div>
      <div class="chapter-subtopics">Planning Commission History • NITI Aayog Think-Tank Architecture • 112 Aspirational Districts (3Cs)</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 23</span>
        <span class="chapter-name">Labor Law Architecture, IR &amp; Four New Labor Codes</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 162</span>
      </div>
      <div class="chapter-subtopics">21 Nov 2025 Implementation • 50% Wage-Allowance Rule • 300-Worker Retrenchment • 1-Year FTE Gratuity • Gig Fund</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 24</span>
        <span class="chapter-name">Urbanization, Demographic Transition &amp; Migration</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 169</span>
      </div>
      <div class="chapter-subtopics">Census Towns (5000 / 75% Non-Agri / 400 density) • Census 2011 (31.16% Urban) • Harris-Todaro Model</div>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 25</span>
        <span class="chapter-name">Social Structure, Multiculturalism, Secularism &amp; Pluralism</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 174</span>
      </div>
      <div class="chapter-subtopics">Kymlicka Group Rights • Principled Distance Secularism • 11 Classical Languages • Articles 15, 25-30 • Affirmative Action</div>
    </div>

    <!-- PART IX -->
    <div class="part-banner">
      <span class="part-title">Part IX : Master Consolidated Synthesis &amp; Revision Vault</span>
      <span class="part-tag">Chapter 26</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 26</span>
        <span class="chapter-name">The Grand Synthesis: Master Revision &amp; Diagnostic Vault</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 179</span>
      </div>
      <div class="chapter-subtopics">60-Second Skeletons (Ch 01-27) • 10 Comparative Matrices • 35 Traps • 72 Recall Cards • Multi-Exam PYQ Matrix</div>
    </div>

    <!-- PART X -->
    <div class="part-banner">
      <span class="part-title">Part X : State Economic Architecture (RPSC RAS Master Block)</span>
      <span class="part-tag">Chapter 27</span>
    </div>
    <div class="chapter-row">
      <div class="chapter-main-line">
        <span class="chapter-num">Ch. 27</span>
        <span class="chapter-name">Economy of Rajasthan: GSDP, Sectors, Infrastructure &amp; Reforms</span>
        <span class="leader-dots"></span>
        <span class="chapter-locator">p. 199</span>
      </div>
      <div class="chapter-subtopics">2025–26 AE GSDP (₹18.75L Cr) / PCI (₹2.02L) • 6th SFC • IGNP &amp; ERCP/PKC • RIICO / RIPS 2024 • HRRL (9 MMTPA) • Solar #1 • Welfare &amp; Farmer Schemes</div>
    </div>
  </div>

</div>
</body>
</html>`;
}

export function compileUnifiedContinuousBodyHtml(notesDir: string, assetsDir: string, katexCss: string): string {
  let combinedBodyHtml = '';
  let perChapterCss = '';

  for (const meta of CHAPTERS_REGISTRY) {
    const chKey = `ch${meta.index}`;
    const filePath = path.join(notesDir, meta.filename);
    const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
    const transformedHtml = transformChapterMarkdown(rawMarkdown, meta, assetsDir);

    // CSS rules for this specific chapter
    perChapterCss += `
      /* Chapter ${meta.index} Opener */
      @page ${chKey}-opener {
        margin-top: 12mm;
        margin-bottom: 11mm;
        margin-left: 24mm; /* Recto */
        margin-right: 14mm;
        @top-left { content: none !important; border: none !important; }
        @bottom-left {
          content: "MIND OF ARAVALLI PRESS";
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 7pt;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #222;
          border-top: 0.8pt solid #000;
          padding-top: 1.5mm;
        }
        @bottom-right {
          content: counter(page);
          font-family: "Times New Roman", Georgia, serif;
          font-size: 11pt;
          font-weight: 700;
          color: #000;
          border-top: 0.8pt solid #000;
          padding-top: 1.5mm;
        }
      }

      /* Chapter ${meta.index} Verso (Even) */
      @page ${chKey}:left {
        margin-top: 12mm;
        margin-bottom: 11mm;
        margin-left: 14mm;
        margin-right: 24mm;
        @top-left {
          content: "${meta.shortHeader}";
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 7.2pt;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #111;
          border-bottom: 0.8pt solid #000;
          padding-bottom: 1.5mm;
          vertical-align: bottom;
        }
        @bottom-left {
          content: "MIND OF ARAVALLI PRESS";
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 7pt;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #222;
          border-top: 0.8pt solid #000;
          padding-top: 1.5mm;
        }
        @bottom-right {
          content: counter(page);
          font-family: "Times New Roman", Georgia, serif;
          font-size: 11pt;
          font-weight: 700;
          color: #000;
          border-top: 0.8pt solid #000;
          padding-top: 1.5mm;
        }
      }

      /* Chapter ${meta.index} Recto (Odd) */
      @page ${chKey}:right {
        margin-top: 12mm;
        margin-bottom: 11mm;
        margin-left: 24mm;
        margin-right: 14mm;
        @top-left {
          content: "SHELF 007 : INDIAN MACROECONOMIC ARCHITECTURE";
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 7.2pt;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #111;
          border-bottom: 0.8pt solid #000;
          padding-bottom: 1.5mm;
          vertical-align: bottom;
        }
        @bottom-left {
          content: "MIND OF ARAVALLI PRESS";
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 7pt;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #222;
          border-top: 0.8pt solid #000;
          padding-top: 1.5mm;
        }
        @bottom-right {
          content: counter(page);
          font-family: "Times New Roman", Georgia, serif;
          font-size: 11pt;
          font-weight: 700;
          color: #000;
          border-top: 0.8pt solid #000;
          padding-top: 1.5mm;
        }
      }
    `;

    // Wrap the chapter in a container that initiates a clean new page
    combinedBodyHtml += `
      <div class="chapter-container" style="page: ${chKey}; page-break-before: always; break-before: page;">
        ${transformedHtml}
      </div>
    `;
  }

  // Common typography & element styling (exact duplicate of perfected Chapter 1)
  const masterStyle = `
    ${katexCss}

    @page {
      size: A4 portrait;
    }

    ${perChapterCss}

    :root {
      --serif: "Times New Roman", "Baskerville", "Georgia", serif;
      --sans: "Helvetica Neue", "Arial", sans-serif;
      --mono: "Consolas", "Courier New", monospace;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: var(--serif);
      font-size: 11.5pt;
      line-height: 1.45;
      color: #000;
      background: #fff;
    }

    p {
      margin: 0 0 2mm 0;
      text-align: justify;
      text-justify: inter-word;
    }

    strong, b {
      font-weight: 700;
      color: #000;
    }

    em, i {
      font-style: italic;
    }

    .chapter-container:first-child {
      page-break-before: avoid !important;
      break-before: avoid !important;
    }

    .opener {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3.5mm;
      border-top: 2.2pt solid #000;
      border-bottom: 0.8pt solid #000;
      padding: 3mm 0;
      margin-bottom: 3.2mm;
      page-break-after: avoid;
      break-after: avoid;
    }

    .opener .n-box {
      border: 1.2pt solid #000;
      background: #f7f7f7;
      padding: 1.5mm 3.5mm;
      text-align: center;
      flex-shrink: 0;
    }

    .opener .n-box .n-lbl {
      font: 700 7pt var(--sans);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #333;
    }

    .opener .n-box .n {
      font: 900 24pt var(--serif);
      line-height: 1;
      color: #000;
    }

    .opener .t {
      flex: 1;
      text-align: center;
    }

    .opener .t small {
      font: 700 7pt var(--sans);
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #555;
      display: block;
      margin-bottom: 0.8mm;
    }

    .opener .t h1 {
      font: 900 13.5pt var(--serif);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      line-height: 1.2;
      color: #000;
      margin: 0;
    }

    .opener .citadel-box {
      width: 20mm;
      height: 15mm;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .opener .citadel-box img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: grayscale(100%) contrast(120%);
    }

    .section-bar {
      display: flex;
      align-items: stretch;
      background: #ececec;
      border: 1pt solid #000;
      border-left: 3.5pt solid #000;
      margin: 3.2mm 0 2mm 0;
      page-break-after: avoid;
      break-after: avoid;
    }

    .sec-pill {
      background: #000;
      color: #fff;
      font: 900 9pt var(--sans);
      padding: 1.2mm 2.8mm;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.04em;
    }

    .sec-title {
      font: 800 9.5pt var(--sans);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 1.2mm 2.8mm;
      display: flex;
      align-items: center;
      color: #000;
    }

    .subsec-bar {
      border-bottom: 1pt solid #000;
      border-left: 2.2pt solid #000;
      padding: 0.8mm 2mm;
      margin: 2.5mm 0 1.5mm 0;
      font: 800 9.2pt var(--sans);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #111;
      background: #fafafa;
      page-break-after: avoid;
      break-after: avoid;
    }

    p.dc::first-letter {
      float: left;
      font-size: 3.2em;
      line-height: 0.82;
      padding-right: 2.5mm;
      padding-top: 0.8mm;
      font-family: var(--serif);
      font-weight: 900;
      color: #000;
    }

    ul, ol {
      margin: 1.5mm 0 2.2mm 5mm;
      padding-left: 2mm;
    }

    li {
      margin-bottom: 1.2mm;
      line-height: 1.42;
    }

    .t-grid {
      width: 100%;
      border-collapse: collapse;
      font-size: 9pt;
      margin: 2mm 0 2.8mm 0;
      border-top: 1.4pt solid #000;
      border-bottom: 1.4pt solid #000;
      page-break-inside: auto;
    }

    .t-grid th {
      background: #ececec;
      border-bottom: 0.8pt solid #000;
      padding: 1.5mm 2.2mm;
      font: 800 8.5pt var(--sans);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      text-align: left;
      color: #000;
    }

    .t-grid td {
      border-bottom: 0.4pt solid #ddd;
      padding: 1.5mm 2.2mm;
      vertical-align: top;
      line-height: 1.35;
    }

    .t-grid tr:nth-child(even) td {
      background: #fafafa;
    }

    pre.ascii-diagram {
      font-family: var(--mono) !important;
      background: #fdfdfd !important;
      border: 0.75pt solid #333 !important;
      padding: 4pt 6pt !important;
      font-size: 7.2pt !important;
      line-height: 1.25 !important;
      letter-spacing: -0.025em !important;
      white-space: pre !important;
      word-break: normal !important;
      overflow-x: hidden !important;
      margin: 2mm 0 2.8mm 0 !important;
      page-break-inside: avoid;
    }

    pre.pre-wide {
      font-size: 6.0pt !important;
      line-height: 1.20 !important;
      letter-spacing: -0.03em !important;
    }

    pre.pre-ultrawide {
      font-size: 4.8pt !important;
      line-height: 1.15 !important;
      letter-spacing: -0.035em !important;
    }

    .active-recall-card {
      border: 0.8pt solid #000;
      margin: 2.2mm 0 3mm 0;
      background: #fff;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .card-prompt-bar {
      background: #ececec;
      border-bottom: 0.6pt solid #000;
      padding: 1.2mm 2.5mm;
      font: 800 8.2pt var(--sans);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #000;
    }

    .card-prompt-summary {
      padding: 1.4mm 2.5mm;
      font: 700 8.8pt var(--sans);
      border-bottom: 0.4pt dashed #aaa;
      background: #fcfcfc;
    }

    .card-answer-box {
      padding: 1.8mm 2.5mm;
      font-size: 9pt;
      line-height: 1.38;
      background: #fff;
    }

    .card-answer-tag {
      font: 800 7.8pt var(--sans);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #333;
      margin-bottom: 1mm;
    }

    .trap-card {
      border: 0.8pt solid #000;
      border-left: 5mm solid transparent;
      border-image: repeating-linear-gradient(
        -45deg,
        #000,
        #000 3mm,
        #fff 3mm,
        #fff 6mm
      ) 16;
      padding: 1.8mm 2.8mm;
      margin: 2mm 0 2.5mm 0;
      background: #fff;
      font-size: 9.2pt;
      line-height: 1.38;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .trap-card-head {
      font: 800 8.4pt var(--sans);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1mm;
      color: #000;
    }

    .key-lesson-box {
      background: #f4f4f4;
      border-left: 3pt solid #000;
      padding: 1.5mm 2.5mm;
      margin: 2mm 0 2.5mm 0;
      font-size: 9.2pt;
      line-height: 1.38;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .math-display-wrap {
      text-align: center;
      margin: 2mm 0 2.5mm 0;
      page-break-inside: avoid;
    }
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Economics Master Codex — Body Chapters</title>
<style>
${masterStyle}
</style>
</head>
<body>
${combinedBodyHtml}
</body>
</html>`;
}

export async function assembleContinuousBodyPdf(
  printDesignerDir: string,
  outBodyPdfPath: string
): Promise<number> {
  console.log(`\n======================================================`);
  console.log(`ASSEMBLING CONTINUOUS 189-PAGE MASTER BODY FROM CHAPTERS`);
  console.log(`======================================================`);

  const bodyPdf = await PDFDocument.create();
  const font = await bodyPdf.embedFont(StandardFonts.TimesRomanBold);
  const chaptersDir = path.join(printDesignerDir, 'chapters');

  let totalPagesCount = 0;

  for (let chIdx = 0; chIdx < EXACT_TOC_MAPPING.length; chIdx++) {
    const map = EXACT_TOC_MAPPING[chIdx];
    const chNumStr = String(map.ch).padStart(2, '0');
    const chPdfPath = path.join(chaptersDir, `${chNumStr}_CHAPTER_${chNumStr}_A4_BW.pdf`);

    if (!fs.existsSync(chPdfPath)) {
      throw new Error(`Missing chapter PDF: ${chPdfPath}`);
    }

    const chBytes = fs.readFileSync(chPdfPath);
    const chDoc = await PDFDocument.load(chBytes);
    const pageCount = chDoc.getPageCount();

    if (pageCount !== map.pages) {
      console.warn(`[WARNING] Chapter ${map.ch} expected ${map.pages} pages, found ${pageCount} pages`);
    }

    // Embed font in source doc or copy then modify
    const copiedPages = await bodyPdf.copyPages(chDoc, chDoc.getPageIndices());

    for (let pIdx = 0; pIdx < copiedPages.length; pIdx++) {
      const page = copiedPages[pIdx];
      const pageNum = map.start + pIdx;
      const pageNumStr = String(pageNum);
      const isVersoInChapter = pIdx % 2 === 1; // page 2, 4, 6 in chapter layout
      const textWidth = font.widthOfTextAtSize(pageNumStr, 11);

      // Chapter 1 already has folios 1 to 8 natively
      if (map.ch > 1) {
        if (!isVersoInChapter) {
          // Recto layout inside chapter file: margin-right is 14mm
          // Whiteout old chapter-relative number box (y: 5 to 27) without touching line at y: 31.17
          page.drawRectangle({
            x: 520,
            y: 5,
            width: 40,
            height: 22,
            color: rgb(1, 1, 1),
          });

          page.drawText(pageNumStr, {
            x: 556.5 - textWidth,
            y: 9.42,
            size: 11,
            font: font,
            color: rgb(0, 0, 0),
          });
        } else {
          // Verso layout inside chapter file: margin-right is 24mm
          page.drawRectangle({
            x: 490,
            y: 5,
            width: 40,
            height: 22,
            color: rgb(1, 1, 1),
          });

          page.drawText(pageNumStr, {
            x: 528.0 - textWidth,
            y: 9.42,
            size: 11,
            font: font,
            color: rgb(0, 0, 0),
          });
        }
      }

      bodyPdf.addPage(page);
    }

    console.log(`✓ Added Chapter ${chNumStr}: ${copiedPages.length} pages (Global folios p. ${map.start}–${map.start + copiedPages.length - 1})`);
    totalPagesCount += copiedPages.length;
  }

  const finalBodyBytes = await bodyPdf.save();
  fs.writeFileSync(outBodyPdfPath, finalBodyBytes);
  console.log(`✓ Unified Master Body PDF saved: ${outBodyPdfPath} (${totalPagesCount} pages)\n`);
  return totalPagesCount;
}

export async function mergeFullBookPdf(
  frontMatterPdfPath: string,
  tocPdfPath: string,
  bodyPdfPath: string,
  outFinalPdfPath: string
) {
  console.log(`\n======================================================`);
  console.log(`STITCHING UNIFIED MASTER CODEX WITH PDF-LIB`);
  console.log(`======================================================`);

  const mergedPdf = await PDFDocument.create();

  // 1. Append Front Matter (Cover + Verso CIP)
  if (fs.existsSync(frontMatterPdfPath)) {
    const fmBytes = fs.readFileSync(frontMatterPdfPath);
    const fmDoc = await PDFDocument.load(fmBytes);
    const fmPages = await mergedPdf.copyPages(fmDoc, fmDoc.getPageIndices());
    fmPages.forEach(p => mergedPdf.addPage(p));
    console.log(`✓ Added Front Matter: ${fmPages.length} pages (Cover + Colophon CIP)`);
  }

  // 2. Append Table of Contents
  if (fs.existsSync(tocPdfPath)) {
    const tocBytes = fs.readFileSync(tocPdfPath);
    const tocDoc = await PDFDocument.load(tocBytes);
    const tocPages = await mergedPdf.copyPages(tocDoc, tocDoc.getPageIndices());
    tocPages.forEach(p => mergedPdf.addPage(p));
    console.log(`✓ Added Table of Contents: ${tocPages.length} pages`);
  }

  // 3. Append Body Chapters (202 Continuous Pages)
  if (fs.existsSync(bodyPdfPath)) {
    const bodyBytes = fs.readFileSync(bodyPdfPath);
    const bodyDoc = await PDFDocument.load(bodyBytes);
    const bodyPages = await mergedPdf.copyPages(bodyDoc, bodyDoc.getPageIndices());
    bodyPages.forEach(p => mergedPdf.addPage(p));
    console.log(`✓ Added Body Chapters: ${bodyPages.length} pages (Continuous 1 to 202)`);
  }

  const finalBytes = await mergedPdf.save();
  fs.writeFileSync(outFinalPdfPath, finalBytes);

  const stats = fs.statSync(outFinalPdfPath);
  console.log(`======================================================`);
  console.log(`✓ MASTER CODEX COMPILED: ${outFinalPdfPath}`);
  console.log(`  Total Pages: ${mergedPdf.getPageCount()}`);
  console.log(`  File Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`======================================================\n`);
}

async function main() {
  const printDesignerDir = path.resolve('007', 'PRINT DESIGNER');
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  // 1. Build Table of Contents PDF
  console.log(`[1/3] Building Master Table of Contents PDF with Verified Page Numbers...`);
  const tocHtml = buildTableOfContentsHtml();
  const tocHtmlPath = path.join(printDesignerDir, '02_TABLE_OF_CONTENTS_A4_BW.html');
  const tocPdfPath = path.join(printDesignerDir, '02_TABLE_OF_CONTENTS_A4_BW.pdf');
  fs.writeFileSync(tocHtmlPath, tocHtml, 'utf-8');

  const tempProfileDir1 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-toc-'));
  try {
    execSync(`"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir1}" --print-to-pdf="${tocPdfPath}" "file:///${tocHtmlPath.replace(/\\/g, "/")}"`, { stdio: 'pipe' });
  } finally {
    try { fs.rmSync(tempProfileDir1, { recursive: true, force: true }); } catch (e) {}
  }
  console.log(`✓ Table of Contents PDF ready: ${tocPdfPath}`);

  // 2. Assemble Unified Continuous Body PDF (Pages 1 to 202)
  console.log(`\n[2/3] Assembling Continuous 27-Chapter Master Body PDF (202 Pages)...`);
  const bodyPdfPath = path.join(printDesignerDir, '03_UNIFIED_BODY_202P_A4_BW.pdf');
  await assembleContinuousBodyPdf(printDesignerDir, bodyPdfPath);

  // 3. Merge Front Matter + TOC + Body into Master Monograph
  console.log(`\n[3/3] Assembling Complete Master Monograph...`);
  const frontMatterPdfPath = path.join(printDesignerDir, '01_FRONT_MATTER_A4_BW.pdf');
  const masterCodexPdfPath = path.join(printDesignerDir, '007_Book_01_Economics_Master_Codex_A4_BW.pdf');

  await mergeFullBookPdf(frontMatterPdfPath, tocPdfPath, bodyPdfPath, masterCodexPdfPath);
}

main().catch(console.error);
