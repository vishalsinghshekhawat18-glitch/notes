import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const EXACT_TOC_MAPPING_AFMB = [
  { ch: 1, start: 1, end: 4, pages: 4, title: "Accounting Concepts, Principles (GAAP) & Ind AS Framework", sub: "Business Entity • Money Measurement • Going Concern • Cost Concept • Accrual & Matching • Prudence • Ind AS 109 ECL • FTP" },
  { ch: 2, start: 5, end: 8, pages: 4, title: "Golden Rules of Accounting, Journalizing & Ledger Posting", sub: "Luca Pacioli 1494 • Personal, Real & Nominal Accounts • Double-Entry Rules • Subsidiary Books • Imprest Petty Cash" },
  { ch: 3, start: 9, end: 12, pages: 4, title: "Trial Balance, Rectification of Errors & Suspense Account", sub: "Arithmetical Proof • Principle, Omission, Commission, Compensating • Suspense Account Mechanics • P&L Adjustment A/c" },
  { ch: 4, start: 13, end: 16, pages: 4, title: "Bank Reconciliation Statement (BRS) & Timing Discrepancies", sub: "Cash Book vs Passbook • Favorable vs Overdraft Polarity • Adjusted Cash Book Procedure • Direct Bank Entries" },
  { ch: 5, start: 17, end: 20, pages: 4, title: "Depreciation Accounting & Mathematical Methods (SLM & WDV)", sub: "Ind AS 16 / AS 10 • SLM & WDV • Freehold Land (Indefinite Life) • Sec 32 IT Block of Assets & 180-Day Rule • Prospective Change" },
  { ch: 6, start: 21, end: 23, pages: 3, title: "Bills of Exchange, Accommodation Bills & Rebate on Bills", sub: "NI Act §§4 & 5 • 3 Days of Grace (§22) • Public vs Emergency Holidays (§25) • Rebate on Bills Discounted (Schedule 5)" },
  { ch: 7, start: 24, end: 27, pages: 4, title: "Time Value of Money (TVM) & Compounding Arithmetic", sub: "PV & FV Foundations • Intra-Year Compounding • Effective Annual Rate (EAR) • Rules 72, 114, 144 • Continuous Compounding" },
  { ch: 8, start: 28, end: 31, pages: 4, title: "Annuities, Equated Monthly Installments (EMI) & Sinking Funds", sub: "Ordinary Annuity vs Annuity Due (1+r) • Perpetuities • Sinking Fund • Reducing-Balance Loan Amortization & EMI Formula" },
  { ch: 9, start: 32, end: 35, pages: 4, title: "Bond Valuation, Yield to Maturity (YTM) & Modified Duration", sub: "Intrinsic Value • Inverse Price-Yield Rule • YTM Approximation • Zero-Coupon D=n • Macaulay Duration & Modified Duration" },
  { ch: 10, start: 36, end: 42, pages: 7, title: "Bank Final Accounts: Balance Sheet (Form A) & P&L (Form B)", sub: "Third Schedule BR Act 1949 • Form A (1–12) • Form B (13–16) • Slip System • IBRA • Suspense vs Sundry • CTS • Statutory/Concurrent/RBIA" },
  { ch: 11, start: 43, end: 48, pages: 6, title: "Final Accounts Adjustments, Company Accounts, Cash & Funds Flow", sub: "Year-End Adjustments • DTA & DTL (AS 22 / Ind AS 12) • Share Capital & Forfeiture (§52/§53) • AS 3 / Ind AS 7 Cash Flow • Funds Flow" },
  { ch: 12, start: 49, end: 53, pages: 5, title: "Computerised Accounting, CBS, Disclosures & Basel III Capital", sub: "Core Banking Solutions (CBS) • Information Security • Notes to Accounts • Multi-Tier Basel III Capital (SCBs, SFBs, PBs, RRBs, UCBs)" },
  { ch: 13, start: 54, end: 57, pages: 4, title: "Financial Management Overview & Ratio Analysis for Credit Appraisal", sub: "Wealth vs Profit Maximization • Current & Quick Ratios • Debt-Equity • DSCR Benchmark (1.50–2.00) • Turnover & Solvency" },
  { ch: 14, start: 58, end: 61, pages: 4, title: "Foreign Exchange Arithmetic & Quotation Mechanics", sub: "Direct Quotation (2 Aug 1993) • Bid-Ask Spread • Chain Rule • Ascending Premium (Add) & Descending Discount (Subtract)" },
  { ch: 15, start: 62, end: 64, pages: 3, title: "Capital Budgeting, Term Loan Appraisal & Project Finance", sub: "CFAT Cash Flows • Payback • ARR • NPV vs IRR Conflicts (NPV Priority) • Profitability Index • Project Financing & DPGs" },
  { ch: 16, start: 65, end: 69, pages: 5, title: "Cost of Capital, Capital Structure Theories & Leverages (DOL, DFL)", sub: "Kd = I(1-t) • Ke (CAPM) • WACC & WMCC • Hurdle Rates • Flotation Costs • Capital Structure (NI, NOI, MM) • Leverages (DOL, DFL)" },
  { ch: 17, start: 70, end: 74, pages: 5, title: "Working Capital Finance, Factoring, Forfaiting & Leasing", sub: "Operating Cycle • [Historical] Tandon Method 2 (1.33:1) • [Current] Nayak Turnover (25%/20%) • Factoring vs Forfaiting • Finance vs Operating Lease" },
  { ch: 18, start: 75, end: 78, pages: 4, title: "Derivative Products: Forwards, Futures, Swaps & Options", sub: "Forward vs Futures (MTM Settlement) • Plain Vanilla Swaps • Call/Put Payoffs • Option Buyer vs Writer Asymmetry" },
  { ch: 19, start: 79, end: 87, pages: 9, title: "Direct & Indirect Taxation, Costing Methods, Marginal Costing & Budgets", sub: "TDS §194A (Current ₹50K/₹100K; Hist ₹40K/₹50K) • Form 121 Transition • §194N • CGST §17(4) • Costing Methods • Variances • Budgets" },
  { ch: 20, start: 88, end: 115, pages: 28, title: "The Grand Synthesis: IIBF Paper 3 (AFMB) Master Revision Vault", sub: "Master Matrices A–G • 100 Verified Traps • 100 Rapid Active Recall Prompts • 50 Numerical Triggers • Countdown Protocols" },
];

export function buildFrontMatterHtml(): string {
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 04: IIBF Paper 3 - Front Matter</title>
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
    font-size: 25pt;
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.15;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 3.5mm;
  }
  .sub-title {
    font-size: 12.5pt;
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
        <div class="super-title">BOOK 04 • IIBF DIPLOMA IN BANKING &amp; FINANCE (DB&amp;F / JAIIB)</div>
        <h1 class="main-title">ACCOUNTING &amp; FINANCIAL<br>MANAGEMENT FOR BANKERS</h1>
        <div class="sub-title">Paper 3 Comprehensive Master Monograph: Accounting Principles, Financial Mathematics, Bank Balance Sheets, Capital Budgeting &amp; Taxation</div>
      </div>

      <div class="cover-illustration">
        <img src="${assetsDir}/cover_medallion_full.png" alt="Press Seal" />
      </div>

      <div>
        <div class="edition-banner">
          <div class="edition-text">FIRST DUPLEX MONOCHROME PRINT EDITION • IIBF 2026 BENCHMARK CURRICULUM COMPLIANT</div>
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
        <p style="margin-top: 3mm; font-size: 8.5pt;">Copyright © 2026 Mind of Aravalli Academic Press. All rights reserved.</p>
        <p style="font-size: 8.5pt; margin-top: 1.5mm;">No part of this publication may be reproduced, distributed, or transmitted without prior written permission, except in brief quotations embodied in critical reviews.</p>
      </div>

      <div class="cip-box">
        <div class="cip-title">Cataloging-in-Publication Data (CIP)</div>
        <p><strong>Title:</strong> Accounting &amp; Financial Management for Bankers (AFMB): Book 04 — Master Curricular Monograph.</p>
        <p><strong>Series:</strong> Mind of Aravalli Shelf 007 Banking Monograph Series (Volume 4).</p>
        <p><strong>Classification:</strong> IIBF JAIIB / DB&amp;F Paper 3 • Financial Accounting • Financial Mathematics • Bank Accounts • Corporate Finance &amp; Taxation.</p>
        <p><strong>Curriculum Benchmark:</strong> Fully aligned with official IIBF Courseware Modules A, B, C &amp; D (35 Units) &amp; 2026 Examination Mandates.</p>
        <p><strong>Typography &amp; Format:</strong> ISO A4 Portrait (210 mm × 297 mm) • 11.2pt Serif Typeface • 24mm Duplex Gutter Margin • Monochrome Laser Edition.</p>
      </div>

      <div>
        <p style="font-size: 8pt; color: #666;">Compiled and synthesized directly from statutory enactments (BR Act 1949 Third Schedule, Companies Act 2013, Income-tax Act 1961 / 2025 Transition Framework, CGST Act 2017), Ind AS frameworks, and official courseware. Manufactured for physical print and desk revision.</p>
      </div>
    </div>
  </div>

</body>
</html>`;
}

export function buildTableOfContentsHtml(): string {
  let rowsHtml = '';

  for (const item of EXACT_TOC_MAPPING_AFMB) {
    let partBanner = '';
    if (item.ch === 1) {
      partBanner = `<div class="part-banner"><span class="part-title">Part I : Module A — Accounting Principles and Processes</span><span class="part-tag">Chapters 01 – 06</span></div>`;
    } else if (item.ch === 7) {
      partBanner = `<div class="part-banner"><span class="part-title">Part II : Module B — Financial Mathematics &amp; Bank Financial Statements</span><span class="part-tag">Chapters 07 – 12</span></div>`;
    } else if (item.ch === 13) {
      partBanner = `<div class="part-banner" style="margin-top: 0;"><span class="part-title">Part III : Module C — Financial Management, Capital Budgeting &amp; Working Capital</span><span class="part-tag">Chapters 13 – 18</span></div>`;
    } else if (item.ch === 19) {
      partBanner = `<div class="part-banner"><span class="part-title">Part IV : Module D — Taxation, Costing Methods &amp; Operational Controls</span><span class="part-tag">Chapter 19</span></div>`;
    } else if (item.ch === 20) {
      partBanner = `<div class="part-banner"><span class="part-title">Part V : Master Consolidated Revision &amp; Diagnostic Vault</span><span class="part-tag">Chapter 20</span></div>`;
    }

    const pageBreak = item.ch === 13 ? `</div><div class="toc-sheet"><div class="toc-opener-header" style="margin-bottom: 2mm;"><div class="title-area"><small>Curricular Architecture • IIBF DB&amp;F Paper 3</small><h1 style="font-size: 13pt;">Table of Contents &amp; Master Syllabus (Contd.)</h1></div><div class="meta-tag">Chapters 13 – 20 • p. 54–115</div></div>` : '';

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
<title>Book 04: IIBF Paper 3 - Table of Contents</title>
<style>
  @page {
    size: A4 portrait;
  }
  @page toc-page:first {
    margin: 12mm 14mm 11mm 24mm;
    @top-left {
      content: none !important;
    }
    @top-right {
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
      content: "iii";
      font-family: "Times New Roman", Georgia, serif;
      font-size: 11pt;
      font-weight: 700;
      border-top: 0.8pt solid #000;
      padding-top: 1.5mm;
    }
  }
  @page toc-page:left {
    margin: 12mm 24mm 11mm 14mm;
    @top-left {
      content: "IIBF PAPER 3 (AFMB) : MASTER CURRICULAR MAP";
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.2pt;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #111;
      border-bottom: 0.8pt solid #000;
      padding-bottom: 1.5mm;
    }
    @top-right {
      content: none !important;
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
  @page toc-page:right {
    margin: 12mm 14mm 11mm 24mm;
    @top-left {
      content: none !important;
    }
    @top-right {
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
      content: "iii";
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
    padding: 1.2mm 2.5mm;
    margin-top: 3.2mm;
    margin-bottom: 1.8mm;
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
    margin-bottom: 2.2mm;
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
  <div class="toc-sheet">
    <div class="toc-opener-header">
      <div class="title-area">
        <small>Curricular Architecture • IIBF DB&amp;F Paper 3</small>
        <h1>Table of Contents &amp; Master Syllabus</h1>
      </div>
      <div class="meta-tag">20 Chapters • 115 Body Pages</div>
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
  console.log(`ASSEMBLING CONTINUOUS 115-PAGE BODY FOR IIBF PAPER 3`);
  console.log(`======================================================`);

  const bodyPdf = await PDFDocument.create();
  const font = await bodyPdf.embedFont(StandardFonts.TimesRomanBold);

  let totalPagesCount = 0;

  for (let chIdx = 0; chIdx < EXACT_TOC_MAPPING_AFMB.length; chIdx++) {
    const map = EXACT_TOC_MAPPING_AFMB[chIdx];
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
  console.log(`STITCHING IIBF PAPER 3 MASTER CODEX WITH PDF-LIB`);
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
  const printDesignerDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_3');
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

  const tempProfileDir1 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-fm-iibf-afmb-'));
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

  const tempProfileDir2 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-toc-iibf-afmb-'));
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
  const masterCodexPdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_04_IIBF_Paper_3_AFMB_Master_Codex_A4_BW.pdf');
  await mergeFullBookPdf(fmPdfPath, tocPdfPath, bodyPdfPath, masterCodexPdfPath);
}

if (process.argv[1] && (process.argv[1].includes('build_iibf_paper_3_master_codex.ts') || process.argv[1].includes('build_iibf_paper_3_master_codex'))) {
  main().catch(console.error);
}
