import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const EXACT_TOC_MAPPING_PPB = [
  { ch: 1, start: 1, end: 3, pages: 3, title: "Banker-Customer Relationship, Rights & Statutory Duties", sub: "Debtor-Creditor • Trustee-Beneficiary • Bailee-Bailor • Banker's Lien (§171) • Set-Off & Clayton's Rule" },
  { ch: 2, start: 4, end: 6, pages: 3, title: "AML / KYC Norms, Risk Categorization & Due Diligence (CDD)", sub: "PMLA 2002 • 6 OVDs & Simplified Due Diligence • High/Med/Low Risk Review (2/8/10 Yrs) • CTR/STR to FIU-IND" },
  { ch: 3, start: 7, end: 9, pages: 3, title: "Operations in Accounts of Special Categories of Customers", sub: "Minors & Natural Guardians • Illiterate Persons • Blind & Differently-Abled • Joint Accounts • Sole Proprietorship" },
  { ch: 4, start: 10, end: 12, pages: 3, title: "Accounts of Companies, Trusts, Clubs & Charge Registration", sub: "MOA & AOA Ultra Vires • Board Resolution • ROC Charge Registration (§77, 30+300 Days) • Public vs Private Trusts" },
  { ch: 5, start: 13, end: 15, pages: 3, title: "Mandates, Power of Attorney & Court Orders (Garnishee / Attachment)", sub: "Mandate vs General/Special POA • Garnishee Order Nisi & Absolute (Order 21 CPC) • IT Attachment Order (§226(3))" },
  { ch: 6, start: 16, end: 18, pages: 3, title: "Safe Deposit Lockers, Safe Custody & Nomination Norms", sub: "Lessor-Lessee • Bailor-Bailee • RBI Revised Locker Directions 2021 • Section 45ZA-ZF Nomination • 100x Rent Liability" },
  { ch: 7, start: 19, end: 21, pages: 3, title: "Cash Operations, Clean Note Policy & Counterfeit Currency", sub: "Clean Note Policy 1999 • Soiled vs Mutilated Notes (RBI Note Refund Rules 2009) • Impounding FICN • FIR Thresholds" },
  { ch: 8, start: 22, end: 24, pages: 3, title: "Negotiable Instruments Act 1881: Cheques, Protection & Sec 138", sub: "Promissory Note (§4), Bill of Exchange (§5), Cheque (§6) • Paying Banker (§85) • Collecting Banker (§131) • Sec 138" },
  { ch: 9, start: 25, end: 26, pages: 2, title: "Principles of Lending, Working Capital & Term Loan Appraisal", sub: "Canons of Lending (Safety, Liquidity, Purpose) • MPBF Tandon & Nayak Committees • Turnover Method • DSCR Math" },
  { ch: 10, start: 27, end: 29, pages: 3, title: "Collaterals & Charges: Pledge, Hypothecation, Lien & Mortgages", sub: "Pledge (Pawnor-Pawnee) • Hypothecation • Banker's General Lien • 6 Mortgages (TP Act §58: Equitable vs Simple)" },
  { ch: 11, start: 30, end: 32, pages: 3, title: "Non-Fund Facilities I: Letters of Credit (LC) & UCPDC 600", sub: "Revocable vs Irrevocable • Confirmed vs Unconfirmed • UCPDC 600 Rules • Strict Compliance • Autonomy Principle" },
  { ch: 12, start: 33, end: 35, pages: 3, title: "Non-Fund Facilities II: Bank Guarantees (BG) & Deferred Payments", sub: "Performance vs Financial BG • Indian Contract Act §126 • Limitation Act §28 (1-Year Claim) • Co-Acceptance & DPGs" },
  { ch: 13, start: 36, end: 38, pages: 3, title: "Export Finance, Pre/Post-Shipment Credit & ECGC Policies", sub: "Pre-Shipment Packing Credit (PCFC) • Post-Shipment Negotiation • Concessional Interest Subvention • ECGC Cover" },
  { ch: 14, start: 39, end: 41, pages: 3, title: "Priority Sector Lending (PSL), MSME Mandates & CGTMSE", sub: "40% Domestic vs 75% RRB/SFB Targets • 18% Agri (10% SF/MF) • Revised MSME Definition • CGTMSE ₹5 Cr Hybrid Cover" },
  { ch: 15, start: 42, end: 44, pages: 3, title: "NPA Management, Asset Classification, SARFAESI Act & DRT", sub: "90-Day Out of Order Norm • Substandard (15%), Doubtful (25/40/100%), Loss (100%) • SARFAESI §13(2) & 13(4) • DRT Recovery" },
  { ch: 16, start: 45, end: 47, pages: 3, title: "Credit Appraisal Mathematics & Failed Transaction TAT Rules", sub: "Operating Cycle Math • Current & Quick Ratio • DSCR Calculation • RBI Harmonisation TAT Framework (₹100/Day)" },
  { ch: 17, start: 48, end: 50, pages: 3, title: "Bank Computerization, Core Banking (CBS) & Data Centers", sub: "CBS 24x7 Architecture • Primary Data Center (PDC) & Disaster Recovery (DRC) • RPO vs RTO • Cloud Computing in Banks" },
  { ch: 18, start: 51, end: 53, pages: 3, title: "Electronic Payment Systems, NPCI Platforms & Digital Rupee (e₹)", sub: "NEFT (Batch) vs RTGS (Gross Real-Time) • IMPS & UPI Architecture • CTS-2010 • CBDC e-Rupee Tokenized Architecture" },
  { ch: 19, start: 54, end: 56, pages: 3, title: "Cyber Security in Banks, ISO 27001 & IT Act 2000", sub: "RBI Cyber Security Framework 2016 • SOC 24x7 • Phishing, Ransomware & DDoS • IT Act 2000 (§43A, §66, §85) • CERT-In" },
  { ch: 20, start: 57, end: 59, pages: 3, title: "Banking Ethics, Customer Rights Charter & Governance", sub: "BCSBI Codes • RBI Customer Rights Charter (5 Rights) • Whistleblower Policy • ESG & Corporate Governance in Banks" },
  { ch: 21, start: 60, end: 63, pages: 4, title: "The Grand Synthesis: IIBF Paper 2 (PPB) Master Revision Vault", sub: "20 Chapter Master Skeletons • 10 High-Yield Matrices • 50 Examiner Traps • Rapid Diagnostic Active Recall Drill" },
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
        <div class="super-title">BOOK 03 • IIBF DIPLOMA IN BANKING &amp; FINANCE (DB&amp;F / JAIIB)</div>
        <h1 class="main-title">PRINCIPLES &amp; PRACTICES<br>OF BANKING</h1>
        <div class="sub-title">Paper 2 Comprehensive Master Monograph: Statutory Banking Operations, Credit Management, Banking Technology &amp; Professional Ethics</div>
      </div>

      <div class="cover-illustration">
        <img src="${assetsDir}/cover_medallion_full.png" alt="Press Seal" />
      </div>

      <div>
        <div class="edition-banner">
          <div class="edition-text">FIRST DUPLEX MONOCHROME PRINT EDITION • MACMILLAN 2023 CURRICULUM COMPLIANT</div>
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
        <p><strong>Curriculum Benchmark:</strong> Fully aligned with official IIBF Macmillan Courseware 2023 Modules A, B, C &amp; D (55 Units).</p>
        <p><strong>Typography &amp; Format:</strong> ISO A4 Portrait (210 mm × 297 mm) • 11.5pt Serif Typeface • 24mm Duplex Gutter Margin • Monochrome Laser Edition.</p>
      </div>

      <div>
        <p style="font-size: 8pt; color: #666;">Compiled and synthesized directly from statutory enactments (NI Act 1881, BR Act 1949, RBI Act 1934, SARFAESI 2002, PMLA 2002, IT Act 2000), RBI Master Directions, and official courseware. Manufactured for physical print and desk revision.</p>
      </div>
    </div>
  </div>

</body>
</html>`;
}

export function buildTableOfContentsHtml(): string {
  let rowsHtml = '';

  for (const item of EXACT_TOC_MAPPING_PPB) {
    let partBanner = '';
    if (item.ch === 1) {
      partBanner = `<div class="part-banner"><span class="part-title">Part I : Module A — General Banking Operations</span><span class="part-tag">Chapters 01 – 08</span></div>`;
    } else if (item.ch === 9) {
      partBanner = `<div class="part-banner"><span class="part-title">Part II : Module B — Functions of Banks / Credit &amp; Lending Operations</span><span class="part-tag">Chapters 09 – 13</span></div>`;
    } else if (item.ch === 14) {
      partBanner = `<div class="part-banner" style="margin-top: 0;"><span class="part-title">Part II : Module B (Contd.) — Credit, PSL &amp; Recovery Framework</span><span class="part-tag">Chapters 14 – 16</span></div>`;
    } else if (item.ch === 17) {
      partBanner = `<div class="part-banner"><span class="part-title">Part III : Module C — Banking Technology &amp; Digital Innovations</span><span class="part-tag">Chapters 17 – 19</span></div>`;
    } else if (item.ch === 20) {
      partBanner = `<div class="part-banner"><span class="part-title">Part IV : Module D — Ethics in Banks &amp; Financial Institutions</span><span class="part-tag">Chapter 20</span></div>`;
    } else if (item.ch === 21) {
      partBanner = `<div class="part-banner"><span class="part-title">Part V : Master Consolidated Revision &amp; Diagnostic Vault</span><span class="part-tag">Chapter 21</span></div>`;
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
    margin-bottom: 2mm;
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
        <small>Curricular Architecture • IIBF DB&amp;F Paper 2</small>
        <h1>Table of Contents &amp; Master Syllabus</h1>
      </div>
      <div class="meta-tag">21 Chapters • 63 Body Pages</div>
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
  console.log(`ASSEMBLING CONTINUOUS 63-PAGE BODY FOR IIBF PAPER 2`);
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

      if (map.ch > 1) {
        if (!isVersoInChapter) {
          // Recto layout inside chapter file
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
          // Verso layout inside chapter file
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
    console.log(`✓ Added Body Chapters: ${bodyPages.length} pages (Continuous 1 to 63)`);
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
  const printDesignerDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_2');
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

  const tempProfileDir1 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-fm-iibf-ppb-'));
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

  const tempProfileDir2 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-toc-iibf-ppb-'));
  try {
    execSync(`"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir2}" --print-to-pdf="${tocPdfPath}" "file:///${tocHtmlPath.replace(/\\/g, "/")}"`, { stdio: 'pipe' });
  } finally {
    try { fs.rmSync(tempProfileDir2, { recursive: true, force: true }); } catch (e) {}
  }
  console.log(`✓ Table of Contents PDF ready: ${tocPdfPath}`);

  // 3. Assemble Continuous Body PDF
  const bodyPdfPath = path.join(printDesignerDir, '03_UNIFIED_BODY_63P_A4_BW.pdf');
  await assembleContinuousBodyPdf(chaptersDir, bodyPdfPath);

  // 4. Merge Everything into Master Codex
  const masterCodexPdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_03_IIBF_Paper_2_PPB_Master_Codex_A4_BW.pdf');
  await mergeFullBookPdf(fmPdfPath, tocPdfPath, bodyPdfPath, masterCodexPdfPath);
}

if (process.argv[1] && (process.argv[1].includes('build_iibf_paper_2_master_codex.ts') || process.argv[1].includes('build_iibf_paper_2_master_codex'))) {
  main().catch(console.error);
}
