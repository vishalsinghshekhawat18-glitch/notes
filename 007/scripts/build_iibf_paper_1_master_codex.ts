import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const EXACT_TOC_MAPPING_IIBF = [
  { ch: 1, start: 1, end: 3, pages: 3, title: "Overview of Indian Economy & Demographic Transition", sub: "Pre-1947 to Post-1991 • 4-Stage DTM • 1921 Great Divide • Stage 3 Window • 2008 GFC Resilience" },
  { ch: 2, start: 4, end: 6, pages: 3, title: "Sectoral Architecture: Primary, Secondary & Tertiary", sub: "Leapfrogging Anomaly • 18% Agri / 46% Workforce • Disguised Unemployment • NMP Core Architecture" },
  { ch: 3, start: 7, end: 10, pages: 4, title: "Economic Planning Architecture & NITI Aayog Strategy", sub: "12 FYPs History • Harrod-Domar & PC Mahalanobis • NITI Aayog Think-Tank • Zero Financial Grants" },
  { ch: 4, start: 11, end: 14, pages: 4, title: "Priority Sector Lending (PSL) & MSME Architecture", sub: "PSL 2025 Targets (UCB 60%, SFB/RRB 75%) • 18% Agri / 10% SMF • April 2025 MSME Criteria • 3x Penalty" },
  { ch: 5, start: 15, end: 18, pages: 4, title: "Infrastructure, Logistics & Climate SDGs", sub: "NIP ₹111L Cr • PM GatiShakti • HAM 40% Grant / 100% Traffic Risk • COP26 Panchamrit 2070 • CSR §135" },
  { ch: 6, start: 19, end: 23, pages: 5, title: "Globalization, Foreign Trade Policy & Global Institutions", sub: "FTP 2023 $2T Target • Special Rupee Vostro (SRVA) • IMF SDR Basket • World Bank Arms • WTO AoA Boxes" },
  { ch: 7, start: 24, end: 28, pages: 5, title: "Economic Reforms & Issues Facing the Indian Economy", sub: "1991 LPG Balance-of-Payments Crisis • Tendulkar vs Rangarajan Poverty Lines • NITI MPI • Jobless Growth" },
  { ch: 8, start: 29, end: 31, pages: 3, title: "Fundamentals of Economics & Market Structures", sub: "Positive vs Normative • 4 Market Structures • Sweezy Kinked Demand Curve • Pigou Price Discrimination" },
  { ch: 9, start: 32, end: 35, pages: 4, title: "Law of Demand, Supply & Elasticity Formulas", sub: "Point & Arc Elasticity • Marshall Outlay Method • Cross-Price Substitutes/Complements • Income Elasticity" },
  { ch: 10, start: 36, end: 39, pages: 4, title: "National Income Accounting, GVA & GDP Deflator", sub: "MoSPI New Series Base 2022-23 (27 Feb 2026) • 2011-12 Historical • GVA Basic Price vs GDP • ICOR Formula" },
  { ch: 11, start: 40, end: 42, pages: 3, title: "Money Supply Measures (M0-M4, L1-L3) & Inflation", sub: "RBI §33 Minimum Reserve System • M0 to M4 & NM1 to NM3 • Money Multiplier • CPI 4%±2% Anchor vs WPI" },
  { ch: 12, start: 43, end: 47, pages: 5, title: "Theories of Interest, Liquidity Preference & IS-LM Curve", sub: "Classical Real vs Keynesian Monetary Theory • Liquidity Trap • Hicks-Hansen IS-LM Simultaneous Equilibrium" },
  { ch: 13, start: 48, end: 51, pages: 4, title: "Business Cycles, Monetary Policy & The Union Budget", sub: "4 Cycle Phases • RBI MPC §45ZB • 50 bps LAF Corridor • SDF & MSF • Union Budget Deficit Metrics" },
  { ch: 14, start: 52, end: 55, pages: 4, title: "Indian Financial System & Banking Sector Reforms", sub: "4 Pillars • Narasimham I & II • Bad Bank NARCL (51% PSB) & IDRCL • 15:85 SRs • EASE 1.0 to 7.0" },
  { ch: 15, start: 56, end: 58, pages: 3, title: "Apex Regulatory Hierarchy: RBI, SEBI, IRDAI & FSDC", sub: "RBI Act 1934 • SEBI 1992 • IRDAI Hyderabad 1999 • PFRDA • IFSCA GIFT City Remit • FSDC Structure" },
  { ch: 16, start: 59, end: 64, pages: 6, title: "Statutory Framework: RBI Act, 1934 & BR Act, 1949", sub: "RBI Act Chapters I-V & Schedules • BR Act 1949 Sections 1-56 Exhaustive Indexed Statutory Reference Map" },
  { ch: 17, start: 65, end: 68, pages: 4, title: "Commercial Banking, Basel III & PCA Framework", sub: "Commercial Banks • Indian CRAR 11.5% (9% Tier 1 + 2.5% CCB) • LCR/NSFR 100% • PCA Net NPA ≥ 6% Trigger" },
  { ch: 18, start: 69, end: 71, pages: 3, title: "Differentiated Banking: RRBs & 4-Tier Cooperative Banks", sub: "RRBs 50:15:35 Equity • 75% PSL • 4-Tier UCB Architecture (60% PSL) • SFBs ₹25L Quota • Payment Banks" },
  { ch: 19, start: 72, end: 75, pages: 4, title: "NBFCs Scale-Based Regulation, HFCs & Microfinance (MFIs)", sub: "SBR (Base, Middle, Upper, Top 10 Rule) • HFCs under RBI • Microfinance 2022 Directions (₹3L Cap, 0% Prepay)" },
  { ch: 20, start: 76, end: 79, pages: 4, title: "DFIs, NaBFID, Financial Inclusion & Digital Rails", sub: "DFI Evolution (IFCI, ICICI, IDBI) • NaBFID Act 2021 (₹20,000 Cr Capital) • PMJDY ₹10K OD • FI-Index • CBDC" },
  { ch: 21, start: 80, end: 84, pages: 5, title: "Money Market Architecture: Call, T-Bills, CP, CD & TREPS", sub: "Call/Notice/Term • T-Bills (91/182/364D) • CP ₹5L • CD ₹5L (RBI CD Directions) • TREPS CCIL • BRDS & TLTRO" },
  { ch: 22, start: 85, end: 89, pages: 5, title: "Capital Markets, Stock Exchanges, G-Secs & Bond Yields", sub: "Primary & Secondary • ASBA & T+1 • G-Secs Yield Dynamics • Modified Duration • FBIL valuation + FIMMDA conventions / market practices • Retail Direct" },
  { ch: 23, start: 90, end: 94, pages: 5, title: "Financial Derivatives, Forex, FEMA & NRI Accounts", sub: "Options Greeks • CDS ISDA • Spot T+2 • NRE Tax-Free Repatriable • NRO $1M Cap Taxable • FCNR(B) Zero FX Risk" },
  { ch: 24, start: 95, end: 99, pages: 5, title: "Financial Market Interconnectedness & Merchant Banking", sub: "Treasury 4 Desks • Contagion Spillover • SEBI MB Regs (Dual Cat: Cat I ₹50 Cr, Cat II ₹10 Cr) • Prohibitions" },
  { ch: 25, start: 100, end: 104, pages: 5, title: "Mutual Funds, AIFs, REITs, Factoring & TReDS", sub: "NAV Computation • AIF Cat I/II/III • REITs/InvITs 80:90 Rule • Factoring vs Forfaiting • Ind AS 116 Leasing" },
  { ch: 26, start: 105, end: 109, pages: 5, title: "Para-Banking, Insurance, Pension, Leasing & CRAs", sub: "CRAs BBB- Floor • CICs 300-900 • Bancassurance 3+3+3 • NPS 3-Model Exit (All-Citizen ₹8L / Govt ₹5L) • APY & UPS" },
  { ch: 27, start: 110, end: 115, pages: 6, title: "The Grand Synthesis: IIBF Paper 1 Master Revision Vault", sub: "Capstone Revision Matrix • 50 High-Yield Examiner Traps • Formula Index • Diagnostic Active Recall Engine" },
];

export function buildFrontMatterHtml(): string {
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 02: IIBF Paper 1 - Front Matter</title>
<style>
  @page {
    size: A4 portrait;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body {
    font-family: "Times New Roman", "Georgia", serif;
    color: #111;
    background: #fff;
  }
  .page {
    width: 210mm;
    height: 297mm;
    page-break-after: always;
    position: relative;
    overflow: hidden;
  }
  .page:last-child {
    page-break-after: avoid;
  }

  /* ================= RECTO COVER (PAGE 1) ================= */
  .cover-container {
    padding: 18mm 18mm 16mm 18mm;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    border: 3.5pt solid #000;
    outline: 1pt solid #000;
    outline-offset: -7mm;
  }
  .press-badge {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 8.5pt;
    font-weight: 800;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #333;
    border-bottom: 1.5pt solid #000;
    padding-bottom: 2.5mm;
    display: inline-block;
    margin: 0 auto;
  }
  .shelf-tag {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 10pt;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #000;
    background: #ececec;
    border: 1.2pt solid #000;
    padding: 1.5mm 4mm;
    margin-top: 4mm;
    display: inline-block;
  }
  .title-group {
    margin: 8mm 0;
  }
  .super-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 11pt;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 3mm;
  }
  .main-title {
    font-size: 26pt;
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.15;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 3.5mm;
  }
  .sub-title {
    font-size: 13pt;
    font-style: italic;
    color: #222;
    line-height: 1.35;
    max-width: 155mm;
    margin: 0 auto;
  }
  .cover-illustration {
    margin: 3mm auto;
    width: 65mm;
    height: 65mm;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cover-illustration img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(100%) contrast(120%);
  }
  .edition-banner {
    border-top: 1.2pt solid #000;
    border-bottom: 1.2pt solid #000;
    padding: 2.5mm 0;
    margin: 3mm 0;
  }
  .edition-text {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 8.5pt;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .imprint {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #222;
  }

  /* ================= VERSO CIP COLOPHON (PAGE 2) ================= */
  .colophon-container {
    padding: 22mm 20mm 20mm 24mm;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 9pt;
    line-height: 1.45;
    color: #222;
  }
  .cip-box {
    border: 1pt solid #000;
    padding: 4mm 5mm;
    margin: 5mm 0;
    font-size: 8.5pt;
    line-height: 1.4;
    background: #fafafa;
  }
  .cip-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 2mm;
    border-bottom: 0.6pt solid #000;
    padding-bottom: 1mm;
  }
</style>
</head>
<body>

  <!-- PAGE 1: RECTO COVER -->
  <div class="page">
    <div class="cover-container">
      <div>
        <div class="press-badge">MIND OF ARAVALLI ACADEMIC PRESS</div>
        <br>
        <div class="shelf-tag">SHELF 007 • SOVEREIGN BANKING CODEX</div>
      </div>

      <div class="title-group">
        <div class="super-title">BOOK 02 • IIBF DIPLOMA IN BANKING &amp; FINANCE (DB&amp;F / JAIIB)</div>
        <h1 class="main-title">INDIAN ECONOMY &amp;<br>INDIAN FINANCIAL SYSTEM</h1>
        <div class="sub-title">Paper 1 Comprehensive Master Monograph: Economic Architecture, Banking Macroeconomics, Financial Institutions &amp; Market Instruments</div>
      </div>

      <div class="cover-illustration">
        <img src="${assetsDir}/cover_medallion_full.png" alt="Press Seal" />
      </div>

      <div>
        <div class="edition-banner">
          <div class="edition-text">FINAL RELEASE PRINT EDITION (v5.0) • IIBF 2026 RULES &amp; SYLLABUS OFFICIAL BENCHMARK</div>
        </div>
        <div class="imprint">PUBLISHED UNDER THE CHARTER OF MIND OF ARAVALLI • SHELF 007 BASTION</div>
      </div>
    </div>
  </div>

  <!-- PAGE 2: VERSO CIP COLOPHON -->
  <div class="page">
    <div class="colophon-container">
      <div>
        <p style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 9.5pt;">MIND OF ARAVALLI ACADEMIC PRESS</p>
        <p style="font-size: 8.5pt; color: #555;">Reading Hub Monograph Series • Shelf 007 Bastion</p>
        <p style="margin-top: 2.5mm; font-size: 8.5pt;">Copyright © 2026 Mind of Aravalli Academic Press. All rights reserved.</p>
        <p style="font-size: 8.5pt; margin-top: 1.5mm;">No part of this publication may be reproduced, distributed, or transmitted without prior written permission, except in brief quotations embodied in critical reviews.</p>
      </div>

      <div class="cip-box">
        <div class="cip-title">Cataloging-in-Publication Data (CIP)</div>
        <p><strong>Title:</strong> Indian Economy &amp; Indian Financial System (IE&amp;IFS): Book 02 — Master Curricular Monograph.</p>
        <p><strong>Edition:</strong> Final Release Print Edition (v5.0) • IIBF 2026 Rules &amp; Syllabus Official Benchmark (October 2026).</p>
        <p><strong>Series:</strong> Mind of Aravalli Shelf 007 Banking Monograph Series (Volume 2).</p>
        <p><strong>Classification:</strong> IIBF JAIIB / DB&amp;F Paper 1 • Macroeconomics • Banking Law • Financial Markets.</p>
        <p><strong>Curriculum Benchmark:</strong> Fully aligned with official IIBF 2026 Rules &amp; Syllabus Dual-Coverage Framework Modules A, B, C &amp; D (45 Units).</p>
        <p><strong>Typography &amp; Format:</strong> ISO A4 Portrait (210 mm × 297 mm) • 11.5pt Serif Typeface • 24mm Duplex Gutter Margin • Monochrome Laser Edition • 27 Comprehensive Chapters • 115 Body Pages.</p>
      </div>

      <div class="cip-box" style="background: #ffffff; border: 1.2pt solid #000; margin: 2mm 0;">
        <div class="cip-title">EXAM FREEZE — NOVEMBER 2026 CYCLE (30 JUNE 2026 STATUTORY CUT-OFF)</div>
        <p><strong>Official IIBF Examination Cycle Rule:</strong> In accordance with statutory IIBF examination regulations, tests conducted during the September–February cycle assess regulatory directives, Master Directions, and legislative enactments notified on or before <strong>30 June 2026</strong>. All primary numerical thresholds, reserve requirements, and institutional frameworks in this Monograph are strictly calibrated to this frozen baseline. Forward-looking statutory and market developments post-dating 30 June 2026 are explicitly marked <em>[REFERENCE / POST-CUTOFF UPDATE]</em> for prospective orientation.</p>
      </div>

      <div>
        <p style="font-size: 8pt; color: #666;">Compiled and synthesized directly from statutory enactments, RBI Master Directions, SEBI Regulations, and official courseware. Manufactured for physical print and desk revision.</p>
      </div>
    </div>
  </div>

</body>
</html>`;
}

export function buildTableOfContentsHtml(): string {
  let rowsHtml = '';

  for (const item of EXACT_TOC_MAPPING_IIBF) {
    let partBanner = '';
    if (item.ch === 1) {
      partBanner = `<div class="part-banner"><span class="part-title">Part I : Module A — Indian Economic Architecture</span><span class="part-tag">Chapters 01 – 07</span></div>`;
    } else if (item.ch === 8) {
      partBanner = `<div class="part-banner"><span class="part-title">Part II : Module B — Economic Concepts Related to Banking</span><span class="part-tag">Chapters 08 – 13</span></div>`;
    } else if (item.ch === 14) {
      partBanner = `<div class="part-banner" style="margin-top: 0;"><span class="part-title">Part III : Module C — Indian Financial Architecture &amp; Institutions</span><span class="part-tag">Chapters 14 – 20</span></div>`;
    } else if (item.ch === 21) {
      partBanner = `<div class="part-banner"><span class="part-title">Part IV : Module D — Financial Markets, Products &amp; Instruments</span><span class="part-tag">Chapters 21 – 26</span></div>`;
    } else if (item.ch === 27) {
      partBanner = `<div class="part-banner"><span class="part-title">Part V : Master Consolidated Revision &amp; Diagnostic Vault</span><span class="part-tag">Chapter 27</span></div>`;
    }

    const pageBreak = item.ch === 14 ? `</div><div class="toc-sheet">` : '';

    rowsHtml += `
      ${pageBreak}
      ${partBanner}
      <div class="chapter-row">
        <div class="chapter-main-line">
          <span class="chapter-num">Ch. ${String(item.ch).padStart(2, '0')}</span>
          <span class="chapter-name">${item.title}</span>
          <span class="leader-dots"></span>
          <span class="chapter-locator">p. ${item.start}</span>
        </div>
        <div class="chapter-subtopics">${item.sub}</div>
      </div>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 02: IIBF Paper 1 - Table of Contents</title>
<style>
  @page {
    size: A4 portrait;
  }
  @page toc-page:left {
    margin: 12mm 24mm 11mm 14mm;
    @top-left {
      content: "IIBF PAPER 1 (IE&IFS) : MASTER CURRICULAR MAP";
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
      content: "SHELF 007 • IIBF DIPLOMA IN BANKING & FINANCE";
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
    font-family: "Times New Roman", "Georgia", serif;
    color: #111;
    background: #fff;
    font-size: 9.5pt;
    line-height: 1.40;
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
    margin-bottom: 3mm;
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
    margin-top: 2.5mm;
    margin-bottom: 1.2mm;
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
    margin-bottom: 1.2mm;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .chapter-main-line {
    display: flex;
    align-items: baseline;
    font-size: 9.0pt;
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
    font-size: 7.2pt;
    color: #444;
    margin-left: 12mm;
    line-height: 1.25;
    margin-top: 0.2mm;
  }
</style>
</head>
<body>
<div class="toc-wrapper">
  <div class="toc-sheet">
    <div class="toc-opener-header">
      <div class="title-area">
        <small>Curricular Architecture • IIBF DB&amp;F Paper 1</small>
        <h1>Table of Contents &amp; Master Syllabus</h1>
      </div>
      <div class="meta-tag">27 Chapters • 115 Body Pages</div>
    </div>
    ${rowsHtml}
  </div>
</div>
</body>
</html>`;
}

export async function assembleContinuousBodyPdf(
  chaptersDir: string,
  outBodyPdfPath: string
): Promise<number> {
  console.log(`\n======================================================`);
  console.log(`ASSEMBLING CONTINUOUS 115-PAGE BODY FOR IIBF PAPER 1`);
  console.log(`======================================================`);

  const bodyPdf = await PDFDocument.create();
  const font = await bodyPdf.embedFont(StandardFonts.TimesRomanBold);

  let totalPagesCount = 0;

  for (let chIdx = 0; chIdx < EXACT_TOC_MAPPING_IIBF.length; chIdx++) {
    const map = EXACT_TOC_MAPPING_IIBF[chIdx];
    const chNumStr = String(map.ch).padStart(2, '0');
    const chPdfPath = path.join(chaptersDir, `${chNumStr}_CHAPTER_${chNumStr}_A4_BW.pdf`);

    if (!fs.existsSync(chPdfPath)) {
      throw new Error(`Missing chapter PDF: ${chPdfPath}`);
    }

    const chBytes = fs.readFileSync(chPdfPath);
    const chDoc = await PDFDocument.load(chBytes);
    const copiedPages = await bodyPdf.copyPages(chDoc, chDoc.getPageIndices());

    for (let pIdx = 0; pIdx < copiedPages.length; pIdx++) {
      const page = copiedPages[pIdx];
      const pageNum = map.start + pIdx;
      const pageNumStr = String(pageNum);
      const isVersoInChapter = pIdx % 2 === 1;
      const textWidth = font.widthOfTextAtSize(pageNumStr, 11);

      if (!isVersoInChapter) {
        // Recto layout inside chapter file (margin-left: 24mm, margin-right: 14mm)
        page.drawText(pageNumStr, {
          x: 556.5 - textWidth,
          y: 9.42,
          size: 11,
          font: font,
          color: rgb(0, 0, 0),
        });
      } else {
        // Verso layout inside chapter file (margin-left: 14mm, margin-right: 24mm)
        page.drawText(pageNumStr, {
          x: 528.0 - textWidth,
          y: 9.42,
          size: 11,
          font: font,
          color: rgb(0, 0, 0),
        });
      }

      bodyPdf.addPage(page);
    }

    console.log(`✓ Added Chapter ${chNumStr}: ${copiedPages.length} pages (Global folios p. ${map.start}–${map.start + copiedPages.length - 1})`);
    totalPagesCount += copiedPages.length;
  }

  const finalBodyBytes = await bodyPdf.save();
  fs.writeFileSync(outBodyPdfPath, finalBodyBytes);
  console.log(`✓ Master Body PDF saved: ${outBodyPdfPath} (${totalPagesCount} pages)\n`);
  return totalPagesCount;
}

export async function mergeFullBookPdf(
  frontMatterPdfPath: string,
  tocPdfPath: string,
  bodyPdfPath: string,
  outFinalPdfPath: string
) {
  console.log(`\n======================================================`);
  console.log(`STITCHING IIBF PAPER 1 MASTER CODEX WITH PDF-LIB`);
  console.log(`======================================================`);

  const mergedPdf = await PDFDocument.create();

  // 1. Front Matter
  if (fs.existsSync(frontMatterPdfPath)) {
    const fmBytes = fs.readFileSync(frontMatterPdfPath);
    const fmDoc = await PDFDocument.load(fmBytes);
    const fmPages = await mergedPdf.copyPages(fmDoc, fmDoc.getPageIndices());
    fmPages.forEach(p => mergedPdf.addPage(p));
    console.log(`✓ Added Front Matter: ${fmPages.length} pages (Cover + Colophon CIP)`);
  }

  // 2. Table of Contents
  if (fs.existsSync(tocPdfPath)) {
    const tocBytes = fs.readFileSync(tocPdfPath);
    const tocDoc = await PDFDocument.load(tocBytes);
    const tocPages = await mergedPdf.copyPages(tocDoc, tocDoc.getPageIndices());
    tocPages.forEach(p => mergedPdf.addPage(p));
    console.log(`✓ Added Table of Contents: ${tocPages.length} pages (Pages iii–iv)`);
  }

  // 3. Body Chapters
  if (fs.existsSync(bodyPdfPath)) {
    const bodyBytes = fs.readFileSync(bodyPdfPath);
    const bodyDoc = await PDFDocument.load(bodyBytes);
    const bodyPages = await mergedPdf.copyPages(bodyDoc, bodyDoc.getPageIndices());
    bodyPages.forEach(p => mergedPdf.addPage(p));
    console.log(`✓ Added Body Chapters: ${bodyPages.length} pages (Continuous 1 to 115)`);
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
  const printDesignerDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_1');
  const chaptersDir = path.join(printDesignerDir, 'chapters');

  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  // 1. Build Front Matter PDF
  console.log(`[1/3] Building Front Matter PDF (Cover + Colophon CIP)...`);
  const fmHtml = buildFrontMatterHtml();
  const fmHtmlPath = path.join(printDesignerDir, '01_FRONT_MATTER_A4_BW.html');
  const fmPdfPath = path.join(printDesignerDir, '01_FRONT_MATTER_A4_BW.pdf');
  fs.writeFileSync(fmHtmlPath, fmHtml, 'utf-8');

  const tempProfileDir1 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-fm-iibf-'));
  try {
    execSync(`"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir1}" --print-to-pdf="${fmPdfPath}" "file:///${fmHtmlPath.replace(/\\/g, "/")}"`, { stdio: 'pipe' });
  } finally {
    try { fs.rmSync(tempProfileDir1, { recursive: true, force: true }); } catch (e) {}
  }
  console.log(`✓ Front Matter PDF ready: ${fmPdfPath}`);

  // 2. Build Table of Contents PDF
  console.log(`\n[2/3] Building Table of Contents PDF...`);
  const tocHtml = buildTableOfContentsHtml();
  const tocHtmlPath = path.join(printDesignerDir, '02_TABLE_OF_CONTENTS_A4_BW.html');
  const tocPdfPath = path.join(printDesignerDir, '02_TABLE_OF_CONTENTS_A4_BW.pdf');
  fs.writeFileSync(tocHtmlPath, tocHtml, 'utf-8');

  const tempProfileDir2 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-toc-iibf-'));
  try {
    execSync(`"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir2}" --print-to-pdf="${tocPdfPath}" "file:///${tocHtmlPath.replace(/\\/g, "/")}"`, { stdio: 'pipe' });
  } finally {
    try { fs.rmSync(tempProfileDir2, { recursive: true, force: true }); } catch (e) {}
  }
  console.log(`✓ Table of Contents PDF ready: ${tocPdfPath}`);

  // 3. Assemble Continuous Body PDF
  const bodyPdfPath = path.join(printDesignerDir, '03_UNIFIED_BODY_115P_A4_BW.pdf');
  await assembleContinuousBodyPdf(chaptersDir, bodyPdfPath);

  // 4. Merge Everything into Master Codex
  const masterCodexPdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_02_IIBF_Paper_1_IE_IFS_Master_Codex_A4_BW.pdf');
  await mergeFullBookPdf(fmPdfPath, tocPdfPath, bodyPdfPath, masterCodexPdfPath);
}

if (process.argv[1] && (process.argv[1].includes('build_iibf_paper_1_master_codex.ts') || process.argv[1].includes('build_iibf_paper_1_master_codex'))) {
  main().catch(console.error);
}
