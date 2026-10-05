import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import katex from 'katex';
import { marked } from 'marked';
import { tryConvertAsciiTable } from './table_parser';

export interface ChapterMeta {
  index: number;
  filename: string;
  shortHeader: string;
  fullTitle: string;
}

export const IIBF_PAPER_1_REGISTRY: ChapterMeta[] = [
  {
    index: 1,
    filename: '01_CHAPTER_01_OVERVIEW_DEMOGRAPHIC_TRANSITION.md',
    shortHeader: 'CHAPTER 01 : OVERVIEW OF INDIAN ECONOMY & DEMOGRAPHY',
    fullTitle: 'OVERVIEW OF THE INDIAN ECONOMY & DEMOGRAPHIC TRANSITION',
  },
  {
    index: 2,
    filename: '02_CHAPTER_02_SECTORAL_ARCHITECTURE.md',
    shortHeader: 'CHAPTER 02 : SECTORAL ARCHITECTURE & STRUCTURAL SHIFTS',
    fullTitle: 'SECTORAL ARCHITECTURE: PRIMARY, SECONDARY & TERTIARY',
  },
  {
    index: 3,
    filename: '03_CHAPTER_03_ECONOMIC_PLANNING_NITI_AAYOG.md',
    shortHeader: 'CHAPTER 03 : ECONOMIC PLANNING & NITI AAYOG',
    fullTitle: 'ECONOMIC PLANNING ARCHITECTURE & NITI AAYOG STRATEGY',
  },
  {
    index: 4,
    filename: '04_CHAPTER_04_PRIORITY_SECTOR_LENDING_MSME.md',
    shortHeader: 'CHAPTER 04 : PRIORITY SECTOR LENDING & MSMES',
    fullTitle: 'PRIORITY SECTOR LENDING (PSL) & MSME ARCHITECTURE',
  },
  {
    index: 5,
    filename: '05_CHAPTER_05_INFRASTRUCTURE_LOGISTICS_CLIMATE_SDGS.md',
    shortHeader: 'CHAPTER 05 : INFRASTRUCTURE & CLIMATE SDGS',
    fullTitle: 'INFRASTRUCTURE, LOGISTICS & CLIMATE SDGs',
  },
  {
    index: 6,
    filename: '06_CHAPTER_06_GLOBALIZATION_FOREIGN_TRADE_WTO.md',
    shortHeader: 'CHAPTER 06 : GLOBALIZATION, TRADE & WTO',
    fullTitle: 'GLOBALIZATION, FOREIGN TRADE POLICY & GLOBAL INSTITUTIONS',
  },
  {
    index: 7,
    filename: '07_CHAPTER_07_ECONOMIC_REFORMS_ISSUES_INDIAN_ECONOMY.md',
    shortHeader: 'CHAPTER 07 : ECONOMIC REFORMS & STRUCTURAL ISSUES',
    fullTitle: 'ECONOMIC REFORMS & ISSUES FACING THE INDIAN ECONOMY',
  },
  {
    index: 8,
    filename: '08_CHAPTER_08_FUNDAMENTALS_ECONOMICS_MARKET_STRUCTURES.md',
    shortHeader: 'CHAPTER 08 : MARKET STRUCTURES & PRICE THEORIES',
    fullTitle: 'FUNDAMENTALS OF ECONOMICS & MARKET STRUCTURES',
  },
  {
    index: 9,
    filename: '09_CHAPTER_09_DEMAND_SUPPLY_ELASTICITY_FORMULAS.md',
    shortHeader: 'CHAPTER 09 : DEMAND, SUPPLY & ELASTICITY',
    fullTitle: 'LAW OF DEMAND, SUPPLY & ELASTICITY FORMULAS',
  },
  {
    index: 10,
    filename: '10_CHAPTER_10_NATIONAL_INCOME_ACCOUNTING_GVA_DEFLATOR.md',
    shortHeader: 'CHAPTER 10 : NATIONAL INCOME & GVA METHODOLOGY',
    fullTitle: 'NATIONAL INCOME ACCOUNTING, GVA & GDP DEFLATOR',
  },
  {
    index: 11,
    filename: '11_CHAPTER_11_MONEY_SUPPLY_AGGREGATES_INFLATION.md',
    shortHeader: 'CHAPTER 11 : MONEY SUPPLY AGGREGATES & INFLATION',
    fullTitle: 'MONEY SUPPLY MEASURES (M0-M4, L1-L3) & INFLATION',
  },
  {
    index: 12,
    filename: '12_CHAPTER_12_THEORIES_OF_INTEREST_KEYNES_IS_LM_CURVE.md',
    shortHeader: 'CHAPTER 12 : THEORIES OF INTEREST & IS-LM CURVE',
    fullTitle: 'THEORIES OF INTEREST, LIQUIDITY PREFERENCE & IS-LM CURVE',
  },
  {
    index: 13,
    filename: '13_CHAPTER_13_BUSINESS_CYCLES_MONETARY_FISCAL_UNION_BUDGET.md',
    shortHeader: 'CHAPTER 13 : BUSINESS CYCLES & UNION BUDGET',
    fullTitle: 'BUSINESS CYCLES, MONETARY POLICY & THE UNION BUDGET',
  },
  {
    index: 14,
    filename: '14_CHAPTER_14_INDIAN_FINANCIAL_SYSTEM_REFORMS_NARASIMHAM.md',
    shortHeader: 'CHAPTER 14 : FINANCIAL SYSTEM & BANKING REFORMS',
    fullTitle: 'INDIAN FINANCIAL SYSTEM & BANKING SECTOR REFORMS',
  },
  {
    index: 15,
    filename: '15_CHAPTER_15_APEX_REGULATORY_HIERARCHY_RBI_SEBI_IRDAI_FSDC.md',
    shortHeader: 'CHAPTER 15 : APEX REGULATORY HIERARCHY',
    fullTitle: 'APEX REGULATORY HIERARCHY: RBI, SEBI, IRDAI & FSDC',
  },
  {
    index: 16,
    filename: '16_CHAPTER_16_STATUTORY_FRAMEWORK_RBI_ACT_BR_ACT.md',
    shortHeader: 'CHAPTER 16 : STATUTORY FRAMEWORK: RBI & BR ACTS',
    fullTitle: 'STATUTORY FRAMEWORK: RBI ACT, 1934 & BANKING REGULATION ACT, 1949',
  },
  {
    index: 17,
    filename: '17_CHAPTER_17_COMMERCIAL_BANKING_BASEL_III_PCA_FRAMEWORK.md',
    shortHeader: 'CHAPTER 17 : COMMERCIAL BANKING & BASEL III',
    fullTitle: 'COMMERCIAL BANKING, BASEL III & PCA FRAMEWORK',
  },
  {
    index: 18,
    filename: '18_CHAPTER_18_DIFFERENTIATED_BANKING_RRBS_4_TIER_UCBS.md',
    shortHeader: 'CHAPTER 18 : RRBS & COOPERATIVE BANKING',
    fullTitle: 'DIFFERENTIATED BANKING: RRBs & 4-TIER COOPERATIVE BANKS',
  },
  {
    index: 19,
    filename: '19_CHAPTER_19_NBFCS_SCALE_BASED_REGULATION_HFCS_MFIS.md',
    shortHeader: 'CHAPTER 19 : NBFCS, HFCS & MICROFINANCE',
    fullTitle: 'NBFCs SCALE-BASED REGULATION, HFCs & MICROFINANCE (MFIs)',
  },
  {
    index: 20,
    filename: '20_CHAPTER_20_DFIS_NABFID_FINANCIAL_INCLUSION_NPCI_CBDC.md',
    shortHeader: 'CHAPTER 20 : DFIS, FINANCIAL INCLUSION & DIGITAL RAILS',
    fullTitle: 'DFIs, NaBFID, FINANCIAL INCLUSION & DIGITAL RAILS',
  },
  {
    index: 21,
    filename: '21_CHAPTER_21_MONEY_MARKET_CALL_TBILLS_CP_CD_TREPS.md',
    shortHeader: 'CHAPTER 21 : MONEY MARKET & LIQUIDITY ASSETS',
    fullTitle: 'MONEY MARKET ARCHITECTURE: CALL, T-BILLS, CP, CD & TREPS',
  },
  {
    index: 22,
    filename: '22_CHAPTER_22_CAPITAL_MARKETS_STOCK_EXCHANGES_GSECS_BOND_YIELDS.md',
    shortHeader: 'CHAPTER 22 : CAPITAL MARKETS & G-SECS',
    fullTitle: 'CAPITAL MARKETS, STOCK EXCHANGES, G-SECS & BOND YIELDS',
  },
  {
    index: 23,
    filename: '23_CHAPTER_23_DERIVATIVES_FOREX_FEMA_NRI_ACCOUNTS.md',
    shortHeader: 'CHAPTER 23 : DERIVATIVES & FOREX ARCHITECTURE',
    fullTitle: 'FINANCIAL DERIVATIVES, FOREX, FEMA & NRI ACCOUNTS',
  },
  {
    index: 24,
    filename: '24_CHAPTER_24_INTERCONNECTEDNESS_AND_MERCHANT_BANKING.md',
    shortHeader: 'CHAPTER 24 : MARKET INTERCONNECTION & MERCHANT BANKING',
    fullTitle: 'FINANCIAL MARKET INTERCONNECTEDNESS & MERCHANT BANKING',
  },
  {
    index: 25,
    filename: '25_CHAPTER_25_MUTUAL_FUNDS_AIFS_REITS_FACTORING_TREDS.md',
    shortHeader: 'CHAPTER 25 : MUTUAL FUNDS, REITS & TREDS',
    fullTitle: 'MUTUAL FUNDS, AIFs, REITs, FACTORING & TReDS',
  },
  {
    index: 26,
    filename: '26_CHAPTER_26_PARABANKING_INSURANCE_PENSION_CRAS.md',
    shortHeader: 'CHAPTER 26 : PARA-BANKING, INSURANCE & PENSIONS',
    fullTitle: 'PARA-BANKING, INSURANCE, PENSION, LEASING & CRAs',
  },
  {
    index: 27,
    filename: '27_CHAPTER_27_THE_GRAND_SYNTHESIS_MASTER_REVISION_VAULT.md',
    shortHeader: 'CHAPTER 27 : THE GRAND SYNTHESIS REVISION VAULT',
    fullTitle: 'THE GRAND SYNTHESIS: IIBF PAPER 1 MASTER REVISION VAULT',
  },
];

export function transformChapterMarkdown(text: string, meta: ChapterMeta, assetsDir: string): string {
  // 1. Remove metadata blocks
  text = text.replace(/^Metadata:[\s\S]*?(?=\n\n|\n#|$)/gm, '');

  // 1b. Fail-safe: Strip all emojis and variation selectors from input
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

  // 7. Protect Active Recall Cards from markdown parser (avoiding 4-space codeblock wrapping)
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
          <small>SHELF 007 • IIBF DIPLOMA IN BANKING &amp; FINANCE</small>
          <h1>${meta.fullTitle}</h1>
        </div>
        <div class="citadel-box">
          <img src="${assetsDir}/cover_medallion_full.png" alt="Press Seal" />
        </div>
      </div>
    `;
  });

  // 11. Transform Section Bars (§ X.Y)
  html = html.replace(/<h2(?: id="[^"]*")?>\s*(§\s*\d+\.\d+)\s*([^<]+)<\/h2>/gi, (match, sectionNum, sectionTitle) => {
    return `
      <div class="section-bar">
        <div class="sec-pill">${sectionNum.trim()}</div>
        <div class="sec-title">${sectionTitle.trim()}</div>
      </div>
    `;
  });

  // 12. Transform Subsection Bars
  html = html.replace(/<h3(?: id="[^"]*")?>([^<]+)<\/h3>/gi, (match, subTitle) => {
    return `
      <div class="subsec-bar">${subTitle.trim()}</div>
    `;
  });

  // 13. Blockquote Transformations (Exam Traps & Key Lessons)
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    if (
      inner.includes('Exam Anchor') ||
      inner.includes('Exam Trap') ||
      inner.includes('Examiner Trap') ||
      inner.includes('Hazard') ||
      inner.includes('Pitfall')
    ) {
      return `
        <div class="trap-card">
          <div class="trap-card-head">EXAMINER TRAP &amp; CONCEPTUAL PITFALL ALERT</div>
          <div class="trap-body">${inner.trim()}</div>
        </div>
      `;
    }
    return `
      <div class="key-lesson-box">
        ${inner.trim()}
      </div>
    `;
  });

  // 14. Style Tables
  html = html.replace(/<table>/g, '<table class="t-grid">');

  // 15. Tag wide ASCII diagrams
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

  // 16. Inject Drop Cap on first lead paragraph after opener
  html = html.replace(/(<div class="opener">[\s\S]*?<\/div>[\s\S]*?<p>)/i, (match) => {
    return match.replace('<p>', '<p class="dc">');
  });

  return html;
}

export function generateChapterPrintCss(chMeta: ChapterMeta, katexCss: string): string {
  const chKey = `ch${chMeta.index}`;
  return `
    ${katexCss}

    @page {
      size: A4 portrait;
    }

    /* Chapter Opener Page (Page 1) - First page of document suppresses running header */
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
        content: "${chMeta.shortHeader}";
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

      @top-left {
        content: "IIBF DBF PAPER 1 : IE&IFS";
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
        content: none !important;
        border-top: 0.8pt solid #000;
        padding-top: 1.5mm;
      }
    }

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

    .chapter-body-wrapper {
      page: ${chKey};
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

    /* Section Bars (§ 2.1) */
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

    /* Headings and Page Break Avoidance */
    h2, h3, h4, .section-bar, .subsec-bar {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }

    h2 {
      font: 800 10.2pt var(--sans);
      letter-spacing: 0.03em;
      color: #000;
      border-bottom: 0.8pt solid #000;
      padding-bottom: 0.8mm;
      margin: 2.5mm 0 1.6mm 0;
      page-break-after: avoid !important;
      break-after: avoid !important;
    }

    h4 {
      font: 800 8.8pt var(--sans);
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #222;
      margin: 1.8mm 0 1mm 0;
      page-break-after: avoid !important;
      break-after: avoid !important;
    }

    .page-break {
      page-break-before: always !important;
      break-before: page !important;
      height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    /* Subsection Bars */
    .subsec-bar {
      border-bottom: 1pt solid #000;
      border-left: 2.2pt solid #000;
      padding: 0.8mm 2mm;
      margin: 2.2mm 0 1.4mm 0;
      font: 800 9.2pt var(--sans);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #111;
      background: #fafafa;
      page-break-after: avoid;
      break-after: avoid;
    }

    /* Drop Cap */
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

    p {
      margin: 1.2mm 0 1.8mm 0;
      line-height: 1.38;
    }

    /* Lists */
    ul, ol {
      margin: 1.2mm 0 1.8mm 4mm;
      padding-left: 2mm;
    }

    li {
      margin-bottom: 0.8mm;
      line-height: 1.36;
    }

    /* Tables (Print-Friendly) */
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
      border: 0.5pt solid #000;
      border-bottom: 1.2pt solid #000;
      padding: 1.5mm 2.2mm;
      font: 800 8.5pt var(--sans);
      letter-spacing: 0.04em;
      text-align: left;
      color: #000;
    }

    .t-grid td {
      border: 0.4pt solid #bbb;
      padding: 1.5mm 2.2mm;
      vertical-align: top;
      line-height: 1.35;
    }

    .t-grid tr:nth-child(even) td {
      background: #fafafa;
    }

    .cell-item {
      margin-bottom: 2pt;
      line-height: 1.35;
    }

    .cell-item:last-child {
      margin-bottom: 0;
    }

    .t-banner-row th {
      background: #111 !important;
      color: #fff !important;
      text-align: center !important;
      font: 800 8.5pt var(--sans) !important;
      letter-spacing: 0.05em !important;
      text-transform: uppercase !important;
      padding: 1.6mm 2.2mm !important;
    }

    /* ASCII Diagrams */
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
      margin: 2.2mm auto 2.8mm auto !important;
      width: 100% !important;
      box-sizing: border-box !important;
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

    /* Active Recall Diagnostic Cards */
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

    /* Examiner Traps */
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

    /* Key Lesson / Feature Box */
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

    /* Math Display */
    .math-display-wrap {
      text-align: center;
      margin: 2mm 0 2.5mm 0;
      page-break-inside: avoid;
    }
  `;
}

export function compileChapterHtml(meta: ChapterMeta, notesDir: string, assetsDir: string, katexCss: string): string {
  const filePath = path.join(notesDir, meta.filename);
  const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
  const bodyHtml = transformChapterMarkdown(rawMarkdown, meta, assetsDir);
  const css = generateChapterPrintCss(meta, katexCss);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${meta.shortHeader}</title>
<style>
${css}
</style>
</head>
<body>
<div class="chapter-body-wrapper">
  ${bodyHtml}
</div>
</body>
</html>`;
}

export function renderHtmlToPdf(html: string, pdfOutPath: string, browserPath: string) {
  const tempHtmlPath = pdfOutPath.replace(/\.pdf$/i, '.html');
  fs.writeFileSync(tempHtmlPath, html, 'utf-8');

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-iibf-ch-'));
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

export async function main() {
  const notesDir = path.resolve('007', 'notes', 'iibf_dbf', 'paper_1_chapters');
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  const outChaptersDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_1', 'chapters');
  if (!fs.existsSync(outChaptersDir)) {
    fs.mkdirSync(outChaptersDir, { recursive: true });
  }

  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

  console.log(`\n======================================================`);
  console.log(`BATCH COMPILING ALL 27 CHAPTERS FOR IIBF PAPER 1 (IE&IFS)`);
  console.log(`======================================================`);

  for (const meta of IIBF_PAPER_1_REGISTRY) {
    const chNum = String(meta.index).padStart(2, '0');
    const pdfName = `${chNum}_CHAPTER_${chNum}_A4_BW.pdf`;
    const pdfPath = path.join(outChaptersDir, pdfName);

    console.log(`Compiling Chapter ${chNum}: ${meta.shortHeader}...`);
    const html = compileChapterHtml(meta, notesDir, assetsDir, katexCss);
    renderHtmlToPdf(html, pdfPath, browserPath);

    const stats = fs.statSync(pdfPath);
    console.log(`  -> Finished ${pdfName} (${(stats.size / 1024).toFixed(1)} KB)`);
  }

  console.log(`\n✓ All 27 chapters compiled successfully into ${outChaptersDir}!`);
}

if (process.argv[1] && (process.argv[1].includes('build_iibf_paper_1_chapters.ts') || process.argv[1].includes('build_iibf_paper_1_chapters'))) {
  main().catch(console.error);
}
