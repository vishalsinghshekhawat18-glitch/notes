import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import katex from 'katex';
import { marked } from 'marked';
import { tryConvertAsciiTable } from './table_parser';

export interface CAChapterMeta {
  index: number;
  filename: string;
  shortHeader: string;
  fullTitle: string;
  sub: string;
}

export const CA_REGISTRY: CAChapterMeta[] = [
  {
    index: 1,
    filename: '02_CHAPTER_01_STATIC_BANKING_REGULATORY_CORE.md',
    shortHeader: 'CH 01 : STATIC BANKING CORE',
    fullTitle: 'MASTER STATIC BANKING, REGULATORY ACTS & PRUDENTIAL NORMS CORE',
    sub: 'RBI Act 1934 • BR Act 1949 • DICGC 1961 • NI Act 1881 • SARFAESI 2002 • IBC 2016 • Basel III CRAR & PSL',
  },
  {
    index: 2,
    filename: '03_CHAPTER_02_CURRENT_AFFAIRS_2026_Q1_JAN_MAR.md',
    shortHeader: 'CH 02 : Q1 2026 DOSSIER',
    fullTitle: 'Q1 2026 (JANUARY – MARCH) COMPREHENSIVE CONSOLIDATED DOSSIER',
    sub: 'ESI & Macrofinance • Regulatory Circulars • Banking Mergers • MoUs • National Science & PIB Releases',
  },
  {
    index: 3,
    filename: '04_CHAPTER_03_CURRENT_AFFAIRS_2026_APRIL.md',
    shortHeader: 'CH 03 : APRIL 2026 DOSSIER',
    fullTitle: 'APRIL 2026 CONSOLIDATED DOSSIER & REGULATORY MOVEMENTS',
    sub: 'Financial Regulators • Banking Trends • International Accords • Central Sector Scheme Benchmarks',
  },
  {
    index: 4,
    filename: '05_CHAPTER_04_CURRENT_AFFAIRS_2026_MAY.md',
    shortHeader: 'CH 04 : MAY 2026 DOSSIER',
    fullTitle: 'MAY 2026 CONSOLIDATED DOSSIER (PIB & REGULATORY DIRECTIONS)',
    sub: 'Agrarian Pricing & MSP • Constitutional Reforms • Clean Energy Targets • Critical Strategic Reserves',
  },
  {
    index: 5,
    filename: '06_CHAPTER_05_CURRENT_AFFAIRS_2026_JUNE.md',
    shortHeader: 'CH 05 : JUNE 2026 DOSSIER',
    fullTitle: 'JUNE 2026 CONSOLIDATED DOSSIER (BANKING & FINANCIAL REGULATION)',
    sub: 'Monetary Policy Stance • ECLGS Norms • SEBI Derivatives Guidelines • Cross-Border UPI Rails',
  },
  {
    index: 6,
    filename: '07_CHAPTER_06_CURRENT_AFFAIRS_2026_JULY.md',
    shortHeader: 'CH 06 : JULY 2026 DOSSIER',
    fullTitle: 'JULY 2026 CONSOLIDATED DOSSIER (STATE OF ECONOMY & REGULATORS)',
    sub: 'RBI Monthly Bulletin • RBI-DPI Metrics (445.50) • FY25/26 GDP Trajectories • Multilateral Indices',
  },
  {
    index: 7,
    filename: '08_CHAPTER_07_CURRENT_AFFAIRS_2026_AUGUST.md',
    shortHeader: 'CH 07 : AUGUST 2026 DOSSIER',
    fullTitle: 'AUGUST 2026 CONSOLIDATED DOSSIER (FULL MONTH + PIB COMPENDIUM)',
    sub: 'ICI Base Year 2022-23 (9 Industries) • MeitY MPMS TS1/TS2 • RRB ₹10,176 Cr Profit • PMJDY 12-Yr Milestones',
  },
  {
    index: 8,
    filename: '09_CHAPTER_08_CURRENT_AFFAIRS_2026_SEPTEMBER.md',
    shortHeader: 'CH 08 : SEPTEMBER 2026 DOSSIER',
    fullTitle: 'SEPTEMBER 2026 CONSOLIDATED DOSSIER (120 POLICY CLUSTERS)',
    sub: 'IFSCA GIFT City Market Abuse Regulations • Sovereign Credit Ratings • QCCPs • Space & Defence Mandates',
  },
  {
    index: 9,
    filename: '10_CHAPTER_09_IBPS_MAINS_35PLUS_MEGA_COMPENDIUM_JAN_SEPT.md',
    shortHeader: 'CH 09 : IBPS 35+ COMPENDIUM',
    fullTitle: 'IBPS PO / CLERK MAINS 35+ MARKS GUARANTEE MEGA-COMPENDIUM',
    sub: 'High-Yield Strike Grids • Distinction Matrices • Flagship Welfare Schemes • Exam Trap Warning Vaults',
  },
  {
    index: 10,
    filename: '11_CHAPTER_10_COMPUTER_APTITUDE_DIGITAL_BANKING_CYBERSECURITY.md',
    shortHeader: 'CH 10 : COMPUTER & DIGITAL BANKING',
    fullTitle: 'COMPUTER APTITUDE, DIGITAL BANKING SYSTEMS & CYBERSECURITY',
    sub: 'Units COMP-001 to COMP-018 • CPU/Memory • OS & Networks • CBS Architecture • RTGS/NEFT/UPI • Cyber Defense',
  },
];

export function transformChapterMarkdown(text: string, meta: CAChapterMeta, assetsDir: string): string {
  // 1. Remove metadata blocks
  text = text.replace(/^Metadata:[\s\S]*?(?=\n\n|\n#|$)/gm, '');

  // 1b. Fail-safe: Strip all emojis and variation selectors
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}\u{200D}]/gu;
  text = text.replace(emojiRegex, '');
  text = text.replace(/^(#+)[ \t]+/gm, '$1 ');
  text = text.replace(/^>[ \t]+/gm, '> ');

  // 2. Protect code blocks from math parsing, AND convert ASCII tables to HTML
  const codeBlocks: string[] = [];
  const tableReplacements: string[] = [];

  text = text.replace(/(```[\s\S]*?```)/g, (match) => {
    const tableHtml = tryConvertAsciiTable(match);
    if (tableHtml) {
      tableReplacements.push(tableHtml);
      return `\n\n@@@TABLE_BLOCK_${tableReplacements.length - 1}@@@\n\n`;
    }
    codeBlocks.push(match);
    return `___CODE_BLOCK_${codeBlocks.length - 1}___`;
  });

  // 3. Currency symbol protection
  text = text.replace(/\\(\$)/g, '___CURRENCY_USD___');
  text = text.replace(/(^|[\s\(\[\{>\-–+~])\$(\d+[\d,\.]*\s*(?:billion|million|trillion|crore|lakh|bn|m|b|k)\b)/gi, '$1___CURRENCY_USD___$2');
  text = text.replace(/(^|[\s\(\[\{>\-–+~])\$(\d[\d,\.]*)(?![^\n]*\$)(?![%+\-*=/^_\\])/g, '$1___CURRENCY_USD___$2');
  text = text.replace(/\bUS\$/g, 'US___CURRENCY_USD_SIGN___');

  // 4. Pre-render KaTeX display math
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (m, inner) => {
    let clean = inner
      .replace(/\n+/g, ' ')
      .replace(/(?<!\\text\{)₹/g, '\\text{₹}')
      .replace(/(?<=[0-9])(?<!\\)%/g, '\\%')
      .trim();
    try {
      const rendered = katex.renderToString(clean, { displayMode: true, throwOnError: false, strict: false });
      return `\n\n<div class="math-display-wrap">${rendered}</div>\n\n`;
    } catch (e) {
      return m;
    }
  });

  // 5. Pre-render KaTeX inline math
  text = text.replace(/(?<!\$)\$([^\$\n]+)\$(?!\$)/g, (m, inner) => {
    let clean = inner
      .replace(/(?<!\\text\{)₹/g, '\\text{₹}')
      .replace(/(?<=[0-9])(?<!\\)%/g, '\\%')
      .trim();
    try {
      return katex.renderToString(clean, { displayMode: false, throwOnError: false, strict: false });
    } catch (e) {
      return m;
    }
  });

  // 6. Restore code blocks
  codeBlocks.forEach((cb, idx) => {
    text = text.replace(`___CODE_BLOCK_${idx}___`, cb);
  });

  // 7. Protect Active Recall Cards from markdown parser
  const recallCards: string[] = [];
  text = text.replace(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi, (match, summaryText, bodyText) => {
    const cardHtml = `<div class="active-recall-card">\n<div class="card-prompt-bar">ACTIVE RECALL &amp; DIAGNOSTIC PROMPT</div>\n<div class="card-prompt-summary">${summaryText.trim()}</div>\n<div class="card-answer-box">\n<div class="card-answer-tag">RIGOROUS CAUSAL PROOF &amp; EXAM SOLUTION:</div>\n<div class="card-answer-body">\n${marked.parse(bodyText.trim())}\n</div>\n</div>\n</div>`;
    recallCards.push(cardHtml);
    return `\n\n@@@ACTIVE_RECALL_BLOCK_${recallCards.length - 1}@@@\n\n`;
  });

  // 8. Normal markdown list normalization
  text = text.replace(/^([ \t]*)[•●○■◆]\s+/gm, '$1- ');
  text = text.replace(/\*\*([^*\n\r]+)\*\*:[ \t]*/g, '**$1:** ');

  // 9. Parse through marked
  let html = marked.parse(text) as string;

  // Restore protected currency
  html = html.replace(/___CURRENCY_USD___/g, '$');
  html = html.replace(/___CURRENCY_USD_SIGN___/g, '$');

  // Restore converted table blocks and active recall cards
  tableReplacements.forEach((tbl, idx) => {
    html = html.replace(new RegExp(`(<p>)?@@@TABLE_BLOCK_${idx}@@@(<\/p>)?`, 'g'), tbl);
  });
  recallCards.forEach((rc, idx) => {
    html = html.replace(new RegExp(`(<p>)?@@@ACTIVE_RECALL_BLOCK_${idx}@@@(<\/p>)?`, 'g'), rc);
  });

  // 10. Transform Chapter H1 into Opener Banner
  html = html.replace(/<h1(?: id="[^"]*")?>([\s\S]*?)<\/h1>/i, () => {
    const chNum = String(meta.index).padStart(2, '0');
    return `
      <div class="opener">
        <div class="n-box">
          <div class="n-lbl">CHAPTER</div>
          <div class="n">${chNum}</div>
        </div>
        <div class="t">
          <small>SHELF 007 • CONTEMPORARY ISSUES &amp; BANKING REGULATION</small>
          <h1>${meta.fullTitle}</h1>
        </div>
        <div class="citadel-box">
          <img src="${assetsDir}/cover_medallion_full.png" alt="Press Seal" />
        </div>
      </div>
    `;
  });

  // 11. Headings Styling
  html = html.replace(/<h2>/g, '<div class="section-bar"><h2>');
  html = html.replace(/<\/h2>/g, '</h2></div>');
  html = html.replace(/<h3>/g, '<div class="subsec-bar"><h3>');
  html = html.replace(/<\/h3>/g, '</h3></div>');

  // 12. Exam Angle Callout Box Styling (handling flexible leading whitespace)
  html = html.replace(/<p>\s*<strong>EXAM ANGLE:<\/strong>(?:&rarr;|→)?\s*([\s\S]*?)<\/p>/gi, (match, body) => {
    return `
      <div class="exam-angle-box">
        <div class="exam-angle-tag">EXAM ANGLE &amp; MULTI-STATEMENT PITFALLS</div>
        <div class="exam-angle-content">${body.trim()}</div>
      </div>
    `;
  });

  // 13. Interview Q Box Styling (handling flexible leading whitespace)
  html = html.replace(/<p>\s*Interview Q\s*(?:&rarr;|→)\s*([\s\S]*?)<\/p>/gi, (match, body) => {
    return `
      <div class="interview-q-box">
        <div class="interview-q-tag">INTERVIEW &amp; MAINS DESCRIPTIVE ANGLE</div>
        <div class="interview-q-content">${body.trim()}</div>
      </div>
    `;
  });

  // 14. Mnemonic Box Styling (handling flexible leading whitespace)
  html = html.replace(/<p>\s*Mnemonic\s*(?:&rarr;|→)\s*([\s\S]*?)<\/p>/gi, (match, body) => {
    return `
      <div class="mnemonic-box">
        <div class="mnemonic-tag">HIGH-YIELD MEMORY MNEMONIC</div>
        <div class="mnemonic-content">${body.trim()}</div>
      </div>
    `;
  });

  // 15. Style Tables
  html = html.replace(/<table>/g, '<table class="t-grid">');

  // 16. Tag wide ASCII diagrams
  html = html.replace(/<pre><code(?:\s+class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g, (match, lang, codeContent) => {
    const lines = codeContent.split('\n');
    const maxLine = Math.max(...lines.map((l: string) => l.length));
    let extraClass = '';
    if (maxLine > 130) {
      extraClass = ' pre-ultrawide';
    } else if (maxLine > 88) {
      extraClass = ' pre-wide';
    }
    return `<pre class="ascii-diagram${extraClass}"><code>${codeContent}</code></pre>`;
  });

  // 17. Wrap inside Chapter Body Wrapper with Chapter Key
  return `<div class="chapter-body-wrapper">${html}</div>`;
}

export function generateChapterPrintCss(meta: CAChapterMeta, katexCss: string): string {
  const chKey = `ch${meta.index}`;
  return `
    ${katexCss}

    @page {
      size: A4 portrait;
    }

    /* Chapter Opener Page (Page 1) - Recto */
    @page ${chKey}:first {
      margin-top: 12mm;
      margin-bottom: 11mm;
      margin-left: 24mm; /* Recto Left Binding Gutter */
      margin-right: 14mm;

      @top-left {
        content: none !important;
        border: none !important;
      }
      @top-right {
        content: none !important;
        border: none !important;
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

      /* NO PAGE NUMBER IN CHROMIUM - STAMPED UNIQUELY & FLAWLESSLY BY PDF-LIB */
      @bottom-right {
        content: none !important;
        border-top: 0.8pt solid #000;
        padding-top: 1.5mm;
      }
    }

    /* Verso (Even Pages: 2, 4, 6...) */
    @page ${chKey}:left {
      margin-top: 12mm;
      margin-bottom: 11mm;
      margin-left: 14mm;
      margin-right: 24mm; /* Verso Right Binding Gutter */

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
      @top-right {
        content: none !important;
        border: none !important;
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

      /* NO PAGE NUMBER IN CHROMIUM - STAMPED UNIQUELY & FLAWLESSLY BY PDF-LIB */
      @bottom-right {
        content: none !important;
        border-top: 0.8pt solid #000;
        padding-top: 1.5mm;
      }
    }

    /* Recto (Odd Pages: 3, 5, 7...) */
    @page ${chKey}:right {
      margin-top: 12mm;
      margin-bottom: 11mm;
      margin-left: 24mm; /* Recto Left Binding Gutter */
      margin-right: 14mm;

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
        vertical-align: bottom;
      }
      @top-left {
        content: none !important;
        border: none !important;
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

      /* NO PAGE NUMBER IN CHROMIUM - STAMPED UNIQUELY & FLAWLESSLY BY PDF-LIB */
      @bottom-right {
        content: none !important;
        border-top: 0.8pt solid #000;
        padding-top: 1.5mm;
      }
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      font-family: "Times New Roman", "Georgia", serif;
      font-size: 8.8pt;
      line-height: 1.38;
      color: #111;
      background: #fff;
      margin: 0;
      padding: 0;
      text-rendering: optimizeLegibility;
    }

    .chapter-body-wrapper {
      page: ${chKey};
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

    ul, ol {
      margin: 0 0 2.2mm 0;
      padding-left: 4.5mm;
    }
    li {
      margin-bottom: 0.8mm;
      text-align: justify;
      line-height: 1.36;
    }

    /* Headings Pagination Protection */
    h2, h3, h4, .section-bar, .subsec-bar {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }
    .exam-angle-box, .interview-q-box, .mnemonic-box, .active-recall-card, .t-grid {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Opener Banner */
    .opener {
      display: flex;
      align-items: stretch;
      border-top: 2.5pt solid #000;
      border-bottom: 1.5pt solid #000;
      padding: 3mm 0;
      margin-bottom: 4mm;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .opener .n-box {
      border-right: 1.5pt solid #000;
      padding-right: 3.5mm;
      margin-right: 3.5mm;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 18mm;
    }
    .opener .n-lbl {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 6.8pt;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #333;
    }
    .opener .n {
      font-size: 24pt;
      font-weight: 900;
      line-height: 1;
      color: #000;
      font-family: "Helvetica Neue", Arial, sans-serif;
    }
    .opener .t {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .opener .t small {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 6.8pt;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #444;
      display: block;
      margin-bottom: 1mm;
    }
    .opener .t h1 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 11pt;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      line-height: 1.2;
      margin: 0;
      color: #000;
    }
    .opener .citadel-box {
      width: 20mm;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1pt solid #000;
      padding-left: 2mm;
    }
    .opener .citadel-box img {
      max-width: 17mm;
      max-height: 17mm;
      object-fit: contain;
      filter: grayscale(100%) contrast(150%);
    }

    /* Section Bars */
    .section-bar {
      border-top: 1.8pt solid #000;
      border-bottom: 0.8pt solid #000;
      background: #f0f0f0;
      padding: 1.4mm 2.5mm;
      margin-top: 4.5mm;
      margin-bottom: 2.5mm;
    }
    .section-bar h2 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 8.8pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin: 0;
      color: #000;
    }
    .subsec-bar {
      border-left: 3pt solid #000;
      background: #f7f7f7;
      padding: 1.2mm 2.2mm;
      margin-top: 3.5mm;
      margin-bottom: 1.8mm;
    }
    .subsec-bar h3 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 8.2pt;
      font-weight: 800;
      margin: 0;
      color: #111;
    }
    h4 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.8pt;
      font-weight: 700;
      margin: 2.2mm 0 1mm 0;
      color: #222;
      page-break-after: avoid;
    }

    /* Tables */
    .t-grid {
      width: 100%;
      border-collapse: collapse;
      margin: 3mm 0;
      font-size: 7.5pt;
      line-height: 1.25;
    }
    .t-grid th, .t-grid td {
      border: 0.6pt solid #222;
      padding: 1.4mm 2mm;
      text-align: left;
      vertical-align: top;
    }
    .t-grid th {
      background: #e6e6e6;
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-weight: 800;
      color: #000;
    }
    .t-grid tr:nth-child(even) td {
      background: #f9f9f9;
    }

    /* Exam Angle Callout Box */
    .exam-angle-box {
      border: 1.2pt solid #000;
      border-left: 3.5pt solid #000;
      background: #f7f7f7;
      padding: 2.5mm 3.5mm;
      margin: 3.5mm 0;
    }
    .exam-angle-tag {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #000;
      margin-bottom: 1.5mm;
      border-bottom: 0.5pt solid #999;
      padding-bottom: 1mm;
    }
    .exam-angle-content {
      font-size: 8pt;
      line-height: 1.32;
      color: #111;
    }

    /* Interview Q Callout Box */
    .interview-q-box {
      border: 1pt solid #000;
      border-left: 3.5pt solid #333;
      background: #fafafa;
      padding: 2.5mm 3.5mm;
      margin: 3.5mm 0;
    }
    .interview-q-tag {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #222;
      margin-bottom: 1.5mm;
      border-bottom: 0.5pt solid #aaa;
      padding-bottom: 1mm;
    }
    .interview-q-content {
      font-size: 8pt;
      line-height: 1.32;
      color: #111;
    }

    /* Mnemonic Callout Box */
    .mnemonic-box {
      border: 1pt dashed #000;
      background: #f5f5f5;
      padding: 2mm 3.5mm;
      margin: 3mm 0;
    }
    .mnemonic-tag {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7pt;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #000;
      margin-bottom: 1mm;
    }
    .mnemonic-content {
      font-size: 8pt;
      line-height: 1.3;
      color: #222;
      font-style: italic;
    }

    /* Active Recall Card */
    .active-recall-card {
      border: 1pt solid #000;
      margin: 3mm 0;
    }
    .card-prompt-bar {
      background: #000;
      color: #fff;
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 6.5pt;
      font-weight: 800;
      letter-spacing: 0.15em;
      padding: 1mm 2.5mm;
    }
    .card-prompt-summary {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-weight: 700;
      font-size: 8pt;
      padding: 2mm 2.5mm;
      background: #f2f2f2;
      border-bottom: 0.5pt solid #ccc;
    }
    .card-answer-box {
      padding: 2.5mm;
      background: #fff;
    }
    .card-answer-tag {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 6.5pt;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: #444;
      margin-bottom: 1.5mm;
    }
    .card-answer-body {
      font-size: 8pt;
      line-height: 1.3;
    }

    .math-display-wrap {
      margin: 2.5mm 0;
      text-align: center;
      page-break-inside: avoid;
    }

    blockquote {
      border-left: 2pt solid #000;
      background: #f8f8f8;
      margin: 2.5mm 0;
      padding: 2mm 3.5mm;
      font-style: italic;
      font-size: 8pt;
    }

    /* ASCII Diagrams */
    pre.ascii-diagram {
      margin: 2.5mm 0;
      padding: 2mm;
      background: #f5f5f5;
      border: 0.8pt solid #333;
      overflow: hidden;
      page-break-inside: avoid;
    }
    pre.ascii-diagram code {
      font-family: "Consolas", monospace;
      font-size: 6.8pt;
      line-height: 1.15;
      color: #000;
      display: block;
      white-space: pre;
    }
    pre.ascii-diagram.pre-wide code {
      font-size: 5.8pt;
      line-height: 1.1;
    }
    pre.ascii-diagram.pre-ultrawide code {
      font-size: 4.8pt;
      line-height: 1.05;
    }
  `;
}

export function buildCompleteChapterHtml(bodyHtml: string, meta: CAChapterMeta): string {
  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf8') : '';
  const printCss = generateChapterPrintCss(meta, katexCss);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${meta.shortHeader}</title>
<style>
${printCss}
</style>
</head>
<body>
  ${bodyHtml}
</body>
</html>`;
}

export async function compileCAChapterPdf(meta: CAChapterMeta, outDir: string, notesDir: string): Promise<string> {
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  const srcMdPath = path.join(notesDir, meta.filename);

  if (!fs.existsSync(srcMdPath)) {
    throw new Error(`Markdown file not found: ${srcMdPath}`);
  }

  const rawMd = fs.readFileSync(srcMdPath, 'utf8');
  const bodyHtml = transformChapterMarkdown(rawMd, meta, assetsDir);
  const fullHtml = buildCompleteChapterHtml(bodyHtml, meta);

  const htmlOutPath = path.join(outDir, `CA_CH_${String(meta.index).padStart(2, '0')}.html`);
  const pdfOutPath = path.join(outDir, `CA_CH_${String(meta.index).padStart(2, '0')}.pdf`);

  fs.writeFileSync(htmlOutPath, fullHtml, 'utf8');

  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-ca-'));
  const htmlUrl = 'file:///' + htmlOutPath.replace(/\\/g, '/');

  const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${pdfOutPath}" "${htmlUrl}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
  } finally {
    try { fs.rmSync(tempProfileDir, { recursive: true, force: true }); } catch (e) {}
    try { if (fs.existsSync(htmlOutPath)) fs.unlinkSync(htmlOutPath); } catch (e) {}
  }

  return pdfOutPath;
}

async function main() {
  const notesDir = path.resolve('007', 'notes', 'current_affairs');
  const buildDir = path.resolve('007', 'PRINT DESIGNER', 'CURRENT_AFFAIRS_BUILD', 'chapters');

  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }

  const args = process.argv.slice(2);
  const chArg = args.find(a => a.startsWith('--ch='));
  const targetCh = chArg ? parseInt(chArg.split('=')[1], 10) : null;

  const targets = targetCh
    ? CA_REGISTRY.filter(c => c.index === targetCh)
    : CA_REGISTRY;

  console.log(`======================================================`);
  console.log(`COMPILING ${targets.length} CURRENT AFFAIRS CHAPTER(S)`);
  console.log(`======================================================`);

  for (const meta of targets) {
    const t0 = Date.now();
    process.stdout.write(`Compiling Chapter ${String(meta.index).padStart(2, '0')} (${meta.shortHeader})... `);
    const pdfPath = await compileCAChapterPdf(meta, buildDir, notesDir);
    const dt = ((Date.now() - t0) / 1000).toFixed(1);
    const size = (fs.statSync(pdfPath).size / 1024).toFixed(1);
    console.log(`✓ OK (${size} KB in ${dt}s)`);
  }

  console.log(`======================================================`);
  console.log(`All targeted chapter PDFs successfully compiled!`);
  console.log(`Location: ${buildDir}`);
  console.log(`======================================================\n`);
}

if (process.argv[1] && process.argv[1].includes('build_ca_chapters')) {
  main().catch(console.error);
}
