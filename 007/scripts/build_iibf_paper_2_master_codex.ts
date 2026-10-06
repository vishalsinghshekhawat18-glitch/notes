import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export interface TocEntry {
  ch: number;
  start: number;
  end: number;
  pages: number;
  title: string;
  sub: string;
}

export const EXACT_TOC_MAPPING_PPB: TocEntry[] = [
  { ch: 1, start: 1, end: 4, pages: 4, title: "Banker-Customer Relationship, Rights & Statutory Duties", sub: "Debtor-Creditor • Trustee-Beneficiary • Bailee-Bailor • Banker's General Lien (§171) • Right of Set-Off & Clayton's Rule" },
  { ch: 2, start: 5, end: 7, pages: 3, title: "AML / KYC Architecture, PMLA Framework & CDD Norms", sub: "PMLA 2002 • 6 OVDs • June 2025 KYC Amendments (June 30, 2026 Window) • CTR/STR/CCR Reporting • CKYCR 10-Day Mandate" },
  { ch: 3, start: 8, end: 10, pages: 3, title: "Accounts of Special Customers, Operational Mandates & LEI", sub: "Minors (>10 Yrs Self-Operate) • Hindu Succession Coparcenary/Karta • Blind/Differently-Abled • LEI ₹5 Cr Mandate" },
  { ch: 4, start: 11, end: 13, pages: 3, title: "Companies, Trusts, Societies & Charge Registration", sub: "Corporate Accounts • MOA/AOA Ultra Vires • Companies Act §77 Charge Registration (30d; +60d creation; +60d adv) • Sec 87" },
  { ch: 5, start: 14, end: 16, pages: 3, title: "Deposit Operations, Unclaimed Balances & Attachment Orders", sub: "Inoperative Accounts (2 Yrs) • DEA Fund (10 Yrs) • UDGAM Portal • Garnishee Orders (Debts Due) vs IT Sec 226(3)" },
  { ch: 6, start: 17, end: 19, pages: 3, title: "Safe Deposit Lockers, Safe Custody & Nomination (2025/2026)", sub: "Banking Laws (Amendment) Act 2025 (Up to 4 Simultaneous Nominees) • Nominee as Trustee • RBI 100x Rent Liability Cap" },
  { ch: 7, start: 20, end: 22, pages: 3, title: "Foreign Exchange Management Act (FEMA), NRI Accounts & LRS", sub: "LRS USD 250,000/FY • NRE vs NRO vs FCNR(B) Taxation • RFC/EEFC • FCRA 2010 • Ban on Agricultural Land Purchase" },
  { ch: 8, start: 23, end: 25, pages: 3, title: "Cash Operations, Clean Note Policy, Counterfeit & CMS", sub: "Clean Note Policy Stapling Ban • Soiled vs Mutilated 80%/40% Refund • Counterfeit Impounding & FIR (>=5 Notes) • CMS" },
  { ch: 9, start: 26, end: 28, pages: 3, title: "Negotiable Instruments Act 1881 & CTS Clearing", sub: "Promissory Note vs BOE vs Cheque • HIDC Privileges • Continuous CTS Grid Clearing • Sec 138 Dishonor 30/15-Day Rules" },
  { ch: 10, start: 29, end: 31, pages: 3, title: "Paying & Collecting Banker Duties, Protections & Ancillary Services", sub: "Paying Bank Protection (§85/85A/89) • Forged Drawer Zero Protection • Collecting Bank (§131) • DD Non-Bearer • NEFT/RTGS" },
  { ch: 11, start: 32, end: 34, pages: 3, title: "Financial Inclusion, PMJDY, Customer Service & Secrecy", sub: "PMJDY BSBDA (Zero Min Bal, ₹10,000 OD) • BC/BF Model • Damodaran Committee • Dissolution of BCSBI • CIC Reporting" },
  { ch: 12, start: 35, end: 37, pages: 3, title: "Grievance Redressal, Integrated Ombudsman, CPA 2019 & RTI", sub: "RBI Integrated Ombudsman (RB-IOS 2021, ₹20L/₹1L) • CPA 2019 Pecuniary Tiers (₹50L/₹2Cr) • RTI Act 2005 (30-Day/48-Hr)" },
  { ch: 13, start: 38, end: 40, pages: 3, title: "Principles of Lending, Loan Policy, EBLR & Recovery Norms", sub: "5 Cs of Credit • CC/OD/TL/DL Taxonomy • Mandatory EBLR Quarterly Reset • Fair Practices Code • Recovery Agent Calling Hours" },
  { ch: 14, start: 41, end: 43, pages: 3, title: "Credit Appraisal, Ratio Analysis, Nayak & Tandon Working Capital", sub: "Nayak Turnover Method (25% WCR, 20% Bank, 5% Margin) • Tandon Method II (1.33:1 CR) • DSCR Policy Benchmarks" },
  { ch: 15, start: 44, end: 46, pages: 3, title: "Collateral Charges, Mortgages, Stamping & Limitation Act", sub: "Pledge vs Hypothecation vs Lien vs Assignment • 6 Mortgages (Equitable in Notified Towns) • Stamp Act DPN • Limitation" },
  { ch: 16, start: 47, end: 49, pages: 3, title: "Contracts of Indemnity, Guarantee & Bank Guarantee Doctrine", sub: "Indemnity vs Guarantee • Co-Extensive Liability (§128) • Contract Act §28 Exception 3 (Min 1-Yr Claim) vs Limitation Act" },
  { ch: 17, start: 50, end: 52, pages: 3, title: "Letters of Credit (LC), UCPDC 600 Rules & Bill Finance", sub: "UCPDC 600 Irrevocability • Article 14b 5-Banking-Day Examination • Strict Compliance • Red vs Green Clause • D/P vs D/A" },
  { ch: 18, start: 53, end: 55, pages: 3, title: "Personal Finance, Housing LTV Ratios & Credit Card Regulations", sub: "Home Loan LTV (90%/80%/75%) • Prepayment Directions 2026 (Floating Non-Biz & MSE) • Credit Card Rules" },
  { ch: 19, start: 56, end: 57, pages: 2, title: "Priority Sector Lending (PSL 2025/2026), KCC & Agricultural Credit", sub: "PSL 40% (SFB/RRB 75%) • Micro Enterprises Sub-Target: 7.5% • KCC Collateral-Free ₹2.00L • MISS ₹5.00L (4% Net Rate)" },
  { ch: 20, start: 58, end: 60, pages: 3, title: "MSME Statutory Architecture, CGTMSE, TReDS & Government Schemes", sub: "MSME 2025 Criteria (₹2.5/10 Cr, ₹25/100 Cr, ₹125/500 Cr) • CGTMSE ₹10 Cr (90% Women) • MSMED §16 • MUDRA • DAY-NRLM" },
  { ch: 21, start: 61, end: 63, pages: 3, title: "NPA Management, Prudential IRAC Norms & Stressed Assets", sub: "90-Day Overdue Norm • Standard/Substandard (15%/25%) • Doubtful D1/D2/D3 (25%/40%/100%) • Loss 100% • June 7, 2019 Framework" },
  { ch: 22, start: 64, end: 66, pages: 3, title: "Debt Recovery Statutes: SARFAESI Act 2002, DRT, IBC & Lok Adalats", sub: "SARFAESI §13(2)/13(4) • §31(j) Debt < 20% Exemption • DRT ₹20L • IBC ₹1 Cr • Lok Adalat ₹20L DRT Referral" },
  { ch: 23, start: 67, end: 69, pages: 3, title: "Finance to MFIs, Bank-NBFC Co-Lending & SBR Framework", sub: "NBFC-MFI 2022/2025 Norms (60% Qualifying Assets, ₹3L Cap) • Co-Lending 80:20 Split • Scale Based Regulation" },
  { ch: 24, start: 70, end: 72, pages: 3, title: "Core Banking Systems (CBS), Hardware Architecture & Data Centers", sub: "CBS Real-Time Engine • Maker-Checker Controls • Online UPS 0 ms vs Offline • Data Warehousing ETL • PDC & DRS Mirroring" },
  { ch: 25, start: 73, end: 78, pages: 6, title: "Delivery Channels, Electronic Payments, Harmonised TAT & Liability", sub: "WLAs vs BLAs • POS/MDR • NEFT 24x7 48 Batches • RTGS Min ₹2L • SWIFT MT/MX STP • RBI Customer Liability (3-Day 0-Liability)" },
  { ch: 26, start: 79, end: 84, pages: 6, title: "NPCI Digital Rails, e-RUPI, Central Bank Digital Currency & Account Aggregators", sub: "IMPS ₹5L • UPI Caps • e-RUPI ₹1L • CBDC e₹ • NBFC-AA • RegTech & SupTech (DAKSH) • Open Banking" },
  { ch: 27, start: 85, end: 88, pages: 4, title: "Cybersecurity, Incident Response, BCP/DR & The IT Act 2000", sub: "Independent CISO • 24x7 SOC • Gopalakrishnan Report • CERT-In 6-Hr Reporting • RPO vs RTO • IT Act §43, 65, 66C/D, 66F, 72" },
  { ch: 28, start: 89, end: 92, pages: 4, title: "Ethics, Business Values, Corporate Governance & Banking Perspectives", sub: "Fiduciary Trust in Finance • Kantian Duty vs Utilitarianism • Kidder's 4 Dilemmas • Satyam, Enron, PNB-SWIFT & Wells Fargo Cases" },
  { ch: 29, start: 93, end: 96, pages: 4, title: "Employee Ethics, Workplace Conduct, POSH Act, Whistleblowing & DPDP Act", sub: "Insider Trading UPSI • POSH 2013 IC (>=50% Women) • Whistleblower §177(9)/(10) Audit Comm Access • DPDP 2023 • IPR" },
  { ch: 30, start: 97, end: 104, pages: 8, title: "The Grand Synthesis: 55-Unit Reconciled Fast-Recall Vault & Diagnostic Drill", sub: "55-Unit Complete Fast-Recall Codex • 50 Master Examiner Traps (PPB) • Comprehensive Multi-Statement Diagnostic Drill" },
];

export function buildFrontMatterHtml(): string {
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 03: IIBF Paper 2 - Front Matter</title>
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
    font-size: 12pt;
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
        <div class="super-title">BOOK 03 • IIBF DIPLOMA IN BANKING &amp; FINANCE (DB&amp;F / JAIIB)</div>
        <h1 class="main-title">PRINCIPLES &amp; PRACTICES<br>OF BANKING</h1>
        <div class="sub-title">Paper 2 Comprehensive Master Monograph: Statutory Banking Operations, Credit Management, Banking Technology &amp; Professional Ethics</div>
      </div>

      <div class="cover-illustration">
        <img src="${assetsDir}/cover_medallion_full.png" alt="Press Seal" />
      </div>

      <div>
        <div class="edition-banner">
          <div class="edition-text">SECOND REVISED PRINT EDITION • IIBF 2026 RULES &amp; SYLLABUS OFFICIAL BENCHMARK</div>
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
        <p><strong>Title:</strong> Principles &amp; Practices of Banking (PPB): Book 03 — Master Curricular Monograph.</p>
        <p><strong>Series:</strong> Mind of Aravalli Shelf 007 Banking Monograph Series (Volume 3).</p>
        <p><strong>Classification:</strong> IIBF JAIIB / DB&amp;F Paper 2 • Statutory Banking Law • Credit Appraisal • FinTech &amp; Cyber Security • Professional Ethics.</p>
        <p><strong>Curriculum Benchmark:</strong> Fully aligned with official IIBF 2026 Rules &amp; Syllabus Dual-Coverage Framework Modules A, B, C &amp; D (55-Unit Reconciled Crosswalk).</p>
        <p><strong>Typography &amp; Format:</strong> ISO A4 Portrait (210 mm × 297 mm) • 11.5pt Serif Typeface • 24mm Duplex Gutter Margin • Monochrome Laser Edition • 30 Comprehensive Chapters • 104 Body Pages.</p>
      </div>

      <div>
        <p style="font-size: 8pt; color: #666;">Compiled and synthesized directly from statutory enactments (NI Act 1881, BR Act 1949, RBI Act 1934, Banking Laws Amendment Act 2025, SARFAESI 2002, PMLA 2002, Companies Act 2013, POSH Act 2013, DPDP Act 2023, IT Act 2000), RBI Master Directions, and official courseware. Manufactured for physical print and desk revision.</p>
      </div>
    </div>
  </div>

</body>
</html>`;
}

export function buildTableOfContentsHtml(): string {
  let sheet1RowsHtml = '';
  let sheet2RowsHtml = '';

  for (const item of EXACT_TOC_MAPPING_PPB) {
    let partBanner = '';
    if (item.ch === 1) {
      partBanner = `<div class="part-banner"><span class="part-title">Part I : Module A — General Banking Operations &amp; Regulatory Framework</span><span class="part-tag">Chapters 01 – 12</span></div>`;
    } else if (item.ch === 13) {
      partBanner = `<div class="part-banner"><span class="part-title">Part II : Module B — Functions of Banks / Credit &amp; Lending Operations</span><span class="part-tag">Chapters 13 – 23</span></div>`;
    } else if (item.ch === 15) {
      partBanner = `<div class="part-banner" style="margin-top: 0;"><span class="part-title">Part II : Module B (Contd.) — Credit Charges, PSL &amp; Recovery</span><span class="part-tag">Chapters 15 – 23</span></div>`;
    } else if (item.ch === 24) {
      partBanner = `<div class="part-banner"><span class="part-title">Part III : Module C — Banking Technology &amp; Digital Innovations</span><span class="part-tag">Chapters 24 – 27</span></div>`;
    } else if (item.ch === 28) {
      partBanner = `<div class="part-banner"><span class="part-title">Part IV : Module D — Ethics in Banks &amp; Financial Institutions</span><span class="part-tag">Chapters 28 – 29</span></div>`;
    } else if (item.ch === 30) {
      partBanner = `<div class="part-banner"><span class="part-title">Part V : Master Consolidated Revision &amp; Diagnostic Vault</span><span class="part-tag">Chapter 30</span></div>`;
    }

    const rowMarkup = `
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

    if (item.ch <= 14) {
      sheet1RowsHtml += rowMarkup;
    } else {
      sheet2RowsHtml += rowMarkup;
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 03: IIBF Paper 2 - Table of Contents</title>
<style>
  @page {
    size: A4 portrait;
  }
  @page toc-page:left {
    margin: 12mm 24mm 11mm 14mm;
    @top-left {
      content: "IIBF PAPER 2 (PPB) : MASTER CURRICULAR MAP";
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
    line-height: 1.35;
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
    margin-bottom: 2.5mm;
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
    font-size: 13.5pt;
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
    padding: 1.1mm 2.5mm;
    margin-top: 2.2mm;
    margin-bottom: 1.2mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    page-break-after: avoid;
    break-after: avoid;
  }
  .part-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.6pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
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
    margin-bottom: 1.4mm;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .chapter-main-line {
    display: flex;
    align-items: baseline;
    font-size: 8.8pt;
  }
  .chapter-num {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7pt;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.3mm 1.4mm;
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
    font-size: 8.8pt;
    font-weight: 700;
    flex-shrink: 0;
    color: #000;
  }
  .chapter-subtopics {
    font-size: 7.1pt;
    color: #444;
    margin-left: 11mm;
    line-height: 1.22;
    margin-top: 0.1mm;
  }
</style>
</head>
<body>
<div class="toc-wrapper">
  <div class="toc-sheet">
    <div class="toc-opener-header">
      <div class="title-area">
        <small>Curricular Architecture • IIBF DB&amp;F Paper 2</small>
        <h1>Table of Contents &amp; Master Syllabus</h1>
      </div>
      <div class="meta-tag">30 Chapters • 104 Body Pages</div>
    </div>
    ${sheet1RowsHtml}
  </div>

  <div class="toc-sheet">
    ${sheet2RowsHtml}
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
  console.log(`ASSEMBLING CONTINUOUS 104-PAGE BODY FOR IIBF PAPER 2`);
  console.log(`======================================================`);

  const bodyPdf = await PDFDocument.create();
  const font = await bodyPdf.embedFont(StandardFonts.TimesRomanBold);

  let totalPagesCount = 0;

  for (let chIdx = 0; chIdx < EXACT_TOC_MAPPING_PPB.length; chIdx++) {
    const map = EXACT_TOC_MAPPING_PPB[chIdx];
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
  console.log(`STITCHING IIBF PAPER 2 MASTER CODEX WITH PDF-LIB`);
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
    console.log(`✓ Added Body Chapters: ${bodyPages.length} pages (Continuous 1 to 104)`);
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
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const outBaseDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_2');
  const chaptersDir = path.join(outBaseDir, 'chapters');
  const workDir = path.join(outBaseDir, 'codex_build');
  if (!fs.existsSync(workDir)) {
    fs.mkdirSync(workDir, { recursive: true });
  }

  const frontMatterHtmlPath = path.join(workDir, '00_front_matter.html');
  const frontMatterPdfPath = path.join(workDir, '00_front_matter.pdf');
  const tocHtmlPath = path.join(workDir, '00_toc.html');
  const tocPdfPath = path.join(workDir, '00_toc.pdf');
  const bodyPdfPath = path.join(workDir, 'master_body_104_pages.pdf');
  const finalMasterPdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_03_IIBF_Paper_2_PPB_Master_Codex_A4_BW.pdf');

  console.log('Rendering Front Matter (Cover + Colophon)...');
  const fmHtml = buildFrontMatterHtml();
  fs.writeFileSync(frontMatterHtmlPath, fmHtml, 'utf-8');
  renderHtmlToPdf(frontMatterHtmlPath, frontMatterPdfPath, browserPath);

  console.log('Rendering Table of Contents...');
  const tocHtml = buildTableOfContentsHtml();
  fs.writeFileSync(tocHtmlPath, tocHtml, 'utf-8');
  renderHtmlToPdf(tocHtmlPath, tocPdfPath, browserPath);

  await assembleContinuousBodyPdf(chaptersDir, bodyPdfPath);
  await mergeFullBookPdf(frontMatterPdfPath, tocPdfPath, bodyPdfPath, finalMasterPdfPath);

  console.log('Book 03: IIBF Paper 2 Master Codex build completed successfully!');
}

function renderHtmlToPdf(htmlPath: string, pdfPath: string, browserPath: string) {
  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-master-ppb-'));
  const htmlUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${pdfPath}" "${htmlUrl}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
  } finally {
    try {
      fs.rmSync(tempProfileDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

if (process.argv[1] && (process.argv[1].includes('build_iibf_paper_2_master_codex.ts') || process.argv[1].includes('build_iibf_paper_2_master_codex'))) {
  main().catch(console.error);
}
