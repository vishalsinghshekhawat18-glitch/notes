import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export interface CATocItem {
  ch: number;
  filename: string;
  shortHeader: string;
  fullTitle: string;
  sub: string;
  pages: number;
  start: number;
  end: number;
}

export function buildFrontMatterHtml(): string {
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book 06: Current Affairs & Banking Regulation - Front Matter</title>
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

  /* RECTO COVER (PAGE 1) */
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
    margin: 6mm 0;
  }
  .super-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 10pt;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 2.5mm;
  }
  .main-title {
    font-size: 23pt;
    font-weight: 900;
    letter-spacing: 0.03em;
    line-height: 1.15;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 3.5mm;
  }
  .main-title-sub {
    font-size: 14pt;
    font-style: italic;
    color: #222;
    margin-bottom: 4mm;
  }
  .rule-double {
    border-top: 2pt solid #000;
    border-bottom: 0.6pt solid #000;
    height: 3.5pt;
    margin: 3.5mm auto;
    width: 75%;
  }
  .subtitle {
    font-size: 9.5pt;
    line-height: 1.45;
    color: #333;
    max-width: 155mm;
    margin: 0 auto;
  }
  .seal-wrapper {
    margin: 4mm auto;
    width: 44mm;
    height: 44mm;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .seal-img {
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(100%) contrast(150%);
  }
  .sources-box {
    border: 1.2pt solid #000;
    background: #fbfbfb;
    padding: 3mm 4mm;
    max-width: 165mm;
    margin: 0 auto;
    text-align: left;
  }
  .sources-header {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #000;
    border-bottom: 0.8pt solid #000;
    padding-bottom: 1.5mm;
    margin-bottom: 2mm;
    text-align: center;
  }
  .sources-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5mm 4mm;
    font-size: 7.5pt;
    line-height: 1.35;
    color: #222;
  }
  .sources-grid div span {
    font-weight: 700;
  }
  .footer-creds {
    border-top: 1.5pt solid #000;
    padding-top: 3mm;
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.5pt;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #333;
    font-weight: 700;
  }
  .footer-creds span {
    color: #000;
    font-weight: 900;
  }

  /* VERSO CIP COLOPHON (PAGE 2) */
  .colophon-container {
    padding: 24mm 22mm 20mm 26mm;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 8.5pt;
    line-height: 1.5;
    color: #222;
  }
  .cip-block {
    border: 1pt solid #444;
    padding: 5mm 6mm;
    background: #fafafa;
    margin-bottom: 6mm;
  }
  .cip-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-bottom: 0.8pt solid #666;
    padding-bottom: 1.5mm;
    margin-bottom: 3mm;
  }
  .cip-line {
    margin-bottom: 1.5mm;
    font-size: 8pt;
  }
  .cip-line strong {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.5pt;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .colophon-prose {
    text-align: justify;
    font-size: 8pt;
    line-height: 1.55;
    margin-bottom: 4mm;
  }
  .colophon-prose strong {
    font-weight: 700;
  }
  .imprimatur-box {
    border-left: 3pt solid #000;
    padding: 3mm 4mm;
    background: #f4f4f4;
    margin: 4mm 0;
    font-style: italic;
    font-size: 8pt;
  }
</style>
</head>
<body>
  <!-- PAGE 1: RECTO COVER -->
  <div class="page">
    <div class="cover-container">
      <div>
        <div class="press-badge">MIND OF ARAVALLI ACADEMIC MONOGRAPHS</div><br/>
        <div class="shelf-tag">SHELF 007 • SOVEREIGN KNOWLEDGE BASTION</div>
      </div>

      <div class="title-group">
        <div class="super-title">BOOK 06 • MASTER CONTEMPORARY COMPENDIUM</div>
        <div class="main-title">CONTEMPORARY ISSUES, BANKING REGULATION &amp; CURRENT AFFAIRS</div>
        <div class="main-title-sub">The Senior Paper-Setter Master Strike Codex (2026 Edition)</div>
        <div class="rule-double"></div>
        <div class="subtitle">
          Doctoral Statutory Banking Acts • RBI Master Directions • Basel III Capital Norms • 
          2026 Chronological Policy Dossiers (Q1 to Q3) • IBPS 35+ Marks Guarantee Vault • 
          Computer Aptitude &amp; Digital Financial Systems
        </div>
      </div>

      <div class="seal-wrapper">
        <img class="seal-img" src="${assetsDir}/cover_medallion_full.png" alt="Aravalli Academic Seal" />
      </div>

      <div class="sources-box">
        <div class="sources-header">Primary Statutory Enactments &amp; Regulatory Authorities</div>
        <div class="sources-grid">
          <div><span>Statutory Acts:</span> RBI Act 1934, BR Act 1949, DICGC 1961, NI Act 1881, SARFAESI 2002, IBC 2016</div>
          <div><span>Financial Regulators:</span> Reserve Bank of India, SEBI, IRDAI, PFRDA, IFSCA (GIFT City IFSC)</div>
          <div><span>National Repositories:</span> The Gazette of India, PIB Releases, Union Budget 2026-27, MoSPI PLFS</div>
          <div><span>Examination Scope:</span> IBPS PO/Clerk Mains (35+ Marks), SBI PO, RBI Grade B, SEBI Grade A, UPSC, RAS</div>
        </div>
      </div>

      <div class="footer-creds">
        <span>Mind of Aravalli Academic Press</span> • A4 Monochrome Master Codex Series • Jaipur &amp; Delhi
      </div>
    </div>
  </div>

  <!-- PAGE 2: VERSO CIP COLOPHON -->
  <div class="page">
    <div class="colophon-container">
      <div>
        <div class="cip-block">
          <div class="cip-title">Library &amp; Curricular Cataloging-in-Publication Data</div>
          <div class="cip-line"><strong>Main Title:</strong> Contemporary Issues, Banking Regulation &amp; Current Affairs Master Codex</div>
          <div class="cip-line"><strong>Series:</strong> Shelf 007 Sovereign Examination Codices • Book 06</div>
          <div class="cip-line"><strong>Curricular Focus:</strong> Static Banking Acts, Prudential Regimes, 2026 Policy Dossiers (Jan–Sept), IBPS 35+ Guarantee &amp; Computer Aptitude</div>
          <div class="cip-line"><strong>Target Examinations:</strong> IBPS PO/Clerk Mains, SBI PO/Clerk, RBI Grade B, SEBI Grade A, IFSCA Grade A, NABARD Grade A, UPSC CSE, RPSC RAS</div>
          <div class="cip-line"><strong>Standard:</strong> ISO A4 (210 × 297 mm) Duplex-Engineered • 24 mm Binding Gutter / 14 mm Outer Margin</div>
          <div class="cip-line"><strong>Typography:</strong> Times New Roman body with Helvetica Neue technical display architecture</div>
        </div>

        <div class="colophon-prose">
          <strong>Curricular Scope &amp; Statutory Authority:</strong> This volume provides a comprehensive curricular synthesis of Contemporary Issues, Banking Regulation, and Macroeconomic Policy for high-scoring examination mastery. Every statutory citation—including the Reserve Bank of India Act 1934, the Banking Regulation Act 1949, the SARFAESI Act 2002, the Insolvency and Bankruptcy Code 2016, and the Negotiable Instruments Act 1881—adheres strictly to authoritative bare acts and official Gazette notifications.
        </div>

        <div class="colophon-prose">
          <strong>The Zero-Omission Epistemic Standard:</strong> This master treatise eliminates the fragmentation of coaching pamphlets and video playlists. Chronological dossiers for 2026 (Q1 January–March through September) cover monetary policy determinations, financial market regulations, multilateral institutional treaties, union budget allocations, and flagship socio-economic programs without trivial summarization.
        </div>

        <div class="imprimatur-box">
          "The sovereign guarantee of this treatise: if the candidate studies these 10 chapters, no multi-statement statutory question, prudential ratio, or contemporary policy benchmark will remain unaddressed."
        </div>
      </div>

      <div style="font-size: 7.5pt; color: #555; border-top: 0.5pt solid #ccc; padding-top: 3mm;">
        Published by Mind of Aravalli Academic Press • Shelf 007 Bastion • All Rights Reserved Under Indian Copyright Act, 1957.
      </div>
    </div>
  </div>
</body>
</html>`;
}

export function buildTableOfContentsHtml(tocItems: CATocItem[]): string {
  const page1Items = tocItems.filter(i => i.ch >= 1 && i.ch <= 6);
  const page2Items = tocItems.filter(i => i.ch >= 7 && i.ch <= 10);

  function renderRows(items: CATocItem[]) {
    return items.map(item => `
      <div class="toc-row">
        <div class="toc-ch-pill">CH ${String(item.ch).padStart(2, '0')}</div>
        <div class="toc-content-col">
          <div class="toc-title-line">
            <span class="toc-title">${item.fullTitle}</span>
            <span class="toc-dots"></span>
            <span class="toc-page">p. ${item.start}–${item.end}</span>
          </div>
          <div class="toc-sub">${item.sub}</div>
        </div>
      </div>
    `).join('\n');
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Table of Contents</title>
<style>
  @page {
    size: A4 portrait;
  }
  @page toc-page:left {
    margin: 12mm 24mm 11mm 14mm;
    @top-left {
      content: "BOOK 06 : CURRENT AFFAIRS & BANKING REGULATION";
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
    @top-right {
      content: "SHELF 007 • CONTEMPORARY ISSUES & CURRENT AFFAIRS";
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
    font-size: 9pt;
    line-height: 1.38;
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
  .toc-row {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2.2mm;
  }
  .toc-ch-pill {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 6.8pt;
    font-weight: 800;
    background: #000;
    color: #fff;
    padding: 0.8mm 2mm;
    margin-right: 2.5mm;
    flex-shrink: 0;
    margin-top: 0.4mm;
  }
  .toc-content-col {
    flex-grow: 1;
  }
  .toc-title-line {
    display: flex;
    align-items: baseline;
  }
  .toc-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 7.8pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #000;
  }
  .toc-dots {
    flex-grow: 1;
    border-bottom: 1pt dotted #777;
    margin: 0 2mm 0.8mm 2mm;
  }
  .toc-page {
    font-family: "Times New Roman", Georgia, serif;
    font-size: 8.5pt;
    font-weight: 700;
    color: #000;
    flex-shrink: 0;
  }
  .toc-sub {
    font-size: 7.2pt;
    line-height: 1.32;
    color: #444;
    margin-top: 0.4mm;
  }
</style>
</head>
<body>
<div class="toc-wrapper">
  <!-- PAGE iii: PARTS I & II (CH 01 TO 06) -->
  <div class="toc-sheet">
    <div class="toc-opener-header">
      <div class="title-area">
        <small>Curricular Architecture • Multi-Exam Canon</small>
        <h1>Table of Contents &amp; Master Syllabus</h1>
      </div>
      <div class="meta-tag">Parts I &amp; II • Chapters 01–06</div>
    </div>

    <div class="part-banner">
      <span class="part-title">PART I: STATIC BANKING, REGULATORY ACTS &amp; PRUDENTIAL NORMS</span>
      <span class="part-tag">Core Bare Acts &amp; Basel III</span>
    </div>
    ${renderRows(page1Items.filter(i => i.ch === 1))}

    <div class="part-banner">
      <span class="part-title">PART II: 2026 CHRONOLOGICAL &amp; THEMATIC POLICY DOSSIERS</span>
      <span class="part-tag">Q1 2026 through June 2026</span>
    </div>
    ${renderRows(page1Items.filter(i => i.ch >= 2 && i.ch <= 6))}
  </div>

  <!-- PAGE iv: PARTS II (CONT.), III & IV (CH 07 TO 10) -->
  <div class="toc-sheet">
    <div class="toc-opener-header">
      <div class="title-area">
        <small>Curricular Architecture • Multi-Exam Canon</small>
        <h1>Table of Contents &amp; Master Syllabus</h1>
      </div>
      <div class="meta-tag">Parts II, III &amp; IV • Chapters 07–10</div>
    </div>

    <div class="part-banner">
      <span class="part-title">PART II: 2026 CHRONOLOGICAL DOSSIERS (CONT.)</span>
      <span class="part-tag">July through September 2026</span>
    </div>
    ${renderRows(page2Items.filter(i => i.ch === 7 || i.ch === 8))}

    <div class="part-banner">
      <span class="part-title">PART III: SOVEREIGN 35+ MARKS GUARANTEE MEGA-COMPENDIUM</span>
      <span class="part-tag">Flagship Multi-Exam Synthesis</span>
    </div>
    ${renderRows(page2Items.filter(i => i.ch === 9))}

    <div class="part-banner">
      <span class="part-title">PART IV: COMPUTER APTITUDE, DIGITAL BANKING &amp; CYBERSECURITY</span>
      <span class="part-tag">Units COMP-001 to COMP-018</span>
    </div>
    ${renderRows(page2Items.filter(i => i.ch === 10))}
  </div>
</div>
</body>
</html>`;
}

export async function compileFrontMatterAndToc(tocItems: CATocItem[], buildDir: string): Promise<{ fmPdf: string; tocPdf: string }> {
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  // 1. Front Matter
  console.log(`[1/3] Building Front Matter PDF (Cover + Colophon CIP)...`);
  const fmHtml = buildFrontMatterHtml();
  const fmHtmlPath = path.join(buildDir, '01_FRONT_MATTER_A4_BW.html');
  const fmPdfPath = path.join(buildDir, '01_FRONT_MATTER_A4_BW.pdf');
  fs.writeFileSync(fmHtmlPath, fmHtml, 'utf8');

  const p1 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-fm-'));
  const cmdFm = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${p1}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${fmPdfPath}" "file:///${fmHtmlPath.replace(/\\/g, '/')}"`;
  execSync(cmdFm, { stdio: 'pipe' });
  try { fs.rmSync(p1, { recursive: true, force: true }); } catch (e) {}
  try { fs.unlinkSync(fmHtmlPath); } catch (e) {}
  console.log(`✓ Front Matter PDF ready: ${fmPdfPath}`);

  // 2. Table of Contents
  console.log(`\n[2/3] Building Table of Contents PDF...`);
  const tocHtml = buildTableOfContentsHtml(tocItems);
  const tocHtmlPath = path.join(buildDir, '02_TABLE_OF_CONTENTS_A4_BW.html');
  const tocPdfPath = path.join(buildDir, '02_TABLE_OF_CONTENTS_A4_BW.pdf');
  fs.writeFileSync(tocHtmlPath, tocHtml, 'utf8');

  const p2 = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-toc-'));
  const cmdToc = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${p2}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${tocPdfPath}" "file:///${tocHtmlPath.replace(/\\/g, '/')}"`;
  execSync(cmdToc, { stdio: 'pipe' });
  try { fs.rmSync(p2, { recursive: true, force: true }); } catch (e) {}
  try { fs.unlinkSync(tocHtmlPath); } catch (e) {}
  console.log(`✓ Table of Contents PDF ready: ${tocPdfPath}`);

  return { fmPdf: fmPdfPath, tocPdf: tocPdfPath };
}

export async function stitchMasterCodex() {
  const buildDir = path.resolve('007', 'PRINT DESIGNER', 'CURRENT_AFFAIRS_BUILD');
  const chaptersDir = path.join(buildDir, 'chapters');
  const jsonPath = path.join(buildDir, 'toc_mapping.json');
  const finalPdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');

  if (!fs.existsSync(jsonPath)) {
    throw new Error(`TOC mapping JSON not found at ${jsonPath}. Run audit_ca_chapters.ts first.`);
  }

  const tocItems: CATocItem[] = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  // 1. Build FM & TOC
  const { fmPdf, tocPdf } = await compileFrontMatterAndToc(tocItems, buildDir);

  // 2. Build Unified Body with Global Folios (using the Books 02-05 proven coordinate system)
  console.log(`\n======================================================`);
  console.log(`ASSEMBLING CONTINUOUS MASTER BODY FOR CURRENT AFFAIRS`);
  console.log(`======================================================`);

  const masterBodyDoc = await PDFDocument.create();
  const font = await masterBodyDoc.embedFont(StandardFonts.TimesRomanBold);

  let totalPagesCount = 0;

  for (let chIdx = 0; chIdx < tocItems.length; chIdx++) {
    const item = tocItems[chIdx];
    const chapterPdfPath = path.join(chaptersDir, `CA_CH_${String(item.ch).padStart(2, '0')}.pdf`);
    const chapterBytes = fs.readFileSync(chapterPdfPath);
    const chapterDoc = await PDFDocument.load(chapterBytes);
    const numPages = chapterDoc.getPageCount();

    const copiedPages = await masterBodyDoc.copyPages(chapterDoc, chapterDoc.getPageIndices());

    for (let pIdx = 0; pIdx < copiedPages.length; pIdx++) {
      const page = copiedPages[pIdx];
      const pageNum = item.start + pIdx;
      const pageNumStr = String(pageNum);
      const isVersoInChapter = pIdx % 2 === 1; // 0-indexed: 0 is page 1 (Recto), 1 is page 2 (Verso)
      const textWidth = font.widthOfTextAtSize(pageNumStr, 11);

      if (!isVersoInChapter) {
        // Recto layout: margin-right is 14mm, page width is 595.28 pt -> coordinate ~556.5 - textWidth
        page.drawText(pageNumStr, {
          x: 556.5 - textWidth,
          y: 9.42,
          size: 11,
          font: font,
          color: rgb(0, 0, 0),
        });
      } else {
        // Verso layout: margin-right is 24mm -> coordinate ~528.0 - textWidth
        page.drawText(pageNumStr, {
          x: 528.0 - textWidth,
          y: 9.42,
          size: 11,
          font: font,
          color: rgb(0, 0, 0),
        });
      }

      masterBodyDoc.addPage(page);
    }

    console.log(`✓ Added Chapter ${String(item.ch).padStart(2, '0')}: ${copiedPages.length} pages (Global folios p. ${item.start}–${item.end})`);
    totalPagesCount += copiedPages.length;
  }

  const unifiedBodyPath = path.join(buildDir, '03_UNIFIED_BODY_A4_BW.pdf');
  const unifiedBodyBytes = await masterBodyDoc.save();
  fs.writeFileSync(unifiedBodyPath, unifiedBodyBytes);
  console.log(`✓ Master Body PDF saved: ${unifiedBodyPath} (${totalPagesCount} pages)\n`);

  // 3. Final Master Stitching
  console.log(`======================================================`);
  console.log(`STITCHING MASTER CODEX WITH PDF-LIB`);
  console.log(`======================================================`);

  const finalDoc = await PDFDocument.create();

  // Front Matter (2 pages)
  const fmDoc = await PDFDocument.load(fs.readFileSync(fmPdf));
  const fmPages = await finalDoc.copyPages(fmDoc, fmDoc.getPageIndices());
  fmPages.forEach(p => finalDoc.addPage(p));
  console.log(`✓ Added Front Matter: ${fmDoc.getPageCount()} pages (Cover + Colophon CIP)`);

  // TOC (2 pages)
  const tocDoc = await PDFDocument.load(fs.readFileSync(tocPdf));
  const tocPages = await finalDoc.copyPages(tocDoc, tocDoc.getPageIndices());
  tocPages.forEach(p => finalDoc.addPage(p));
  console.log(`✓ Added Table of Contents: ${tocDoc.getPageCount()} pages (Pages iii–iv)`);

  // Body
  const bodyDoc = await PDFDocument.load(fs.readFileSync(unifiedBodyPath));
  const bodyPages = await finalDoc.copyPages(bodyDoc, bodyDoc.getPageIndices());
  bodyPages.forEach(p => finalDoc.addPage(p));
  console.log(`✓ Added Body Chapters: ${bodyDoc.getPageCount()} pages (Continuous 1 to ${totalPagesCount})`);

  const finalBytes = await finalDoc.save();
  fs.writeFileSync(finalPdfPath, finalBytes);

  const stats = fs.statSync(finalPdfPath);
  console.log(`======================================================`);
  console.log(`✓ MASTER CODEX COMPILED: ${finalPdfPath}`);
  console.log(`  Total Pages: ${finalDoc.getPageCount()}`);
  console.log(`  File Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`======================================================\n`);
}

if (process.argv[1] && process.argv[1].includes('build_ca_master_codex')) {
  stitchMasterCodex().catch(console.error);
}
