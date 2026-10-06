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

export const IIBF_PAPER_3_REGISTRY: ChapterMeta[] = [
  {
    index: 1,
    filename: '01_CHAPTER_01_ACCOUNTING_CONCEPTS_GAAP_IND_AS.md',
    shortHeader: 'CHAPTER 01 : ACCOUNTING CONCEPTS & GAAP',
    fullTitle: 'ACCOUNTING CONCEPTS, PRINCIPLES (GAAP) & IND AS FRAMEWORK',
  },
  {
    index: 2,
    filename: '02_CHAPTER_02_GOLDEN_RULES_JOURNAL_LEDGER.md',
    shortHeader: 'CHAPTER 02 : GOLDEN RULES & JOURNALIZING',
    fullTitle: 'GOLDEN RULES OF ACCOUNTING, JOURNALIZING & LEDGER POSTING',
  },
  {
    index: 3,
    filename: '03_CHAPTER_03_TRIAL_BALANCE_RECTIFICATION_ERRORS.md',
    shortHeader: 'CHAPTER 03 : TRIAL BALANCE & RECTIFICATION',
    fullTitle: 'TRIAL BALANCE, RECTIFICATION OF ERRORS & SUSPENSE ACCOUNT',
  },
  {
    index: 4,
    filename: '04_CHAPTER_04_BANK_RECONCILIATION_STATEMENT.md',
    shortHeader: 'CHAPTER 04 : BANK RECONCILIATION STATEMENT',
    fullTitle: 'BANK RECONCILIATION STATEMENT (BRS) & TIMING DISCREPANCIES',
  },
  {
    index: 5,
    filename: '05_CHAPTER_05_DEPRECIATION_ACCOUNTING_METHODS.md',
    shortHeader: 'CHAPTER 05 : DEPRECIATION ACCOUNTING',
    fullTitle: 'DEPRECIATION ACCOUNTING & MATHEMATICAL METHODS (SLM & WDV)',
  },
  {
    index: 6,
    filename: '06_CHAPTER_06_BILLS_OF_EXCHANGE_REBATE_DISCOUNT.md',
    shortHeader: 'CHAPTER 06 : BILLS OF EXCHANGE & REBATE',
    fullTitle: 'BILLS OF EXCHANGE, ACCOMMODATION BILLS & REBATE ON BILLS DISCOUNTED',
  },
  {
    index: 7,
    filename: '07_CHAPTER_07_TIME_VALUE_OF_MONEY_COMPOUNDING.md',
    shortHeader: 'CHAPTER 07 : TIME VALUE OF MONEY',
    fullTitle: 'TIME VALUE OF MONEY (TVM) & COMPOUNDING ARITHMETIC',
  },
  {
    index: 8,
    filename: '08_CHAPTER_08_ANNUITIES_EMI_SINKING_FUNDS.md',
    shortHeader: 'CHAPTER 08 : ANNUITIES & EMI MATHEMATICS',
    fullTitle: 'ANNUITIES, EQUATED MONTHLY INSTALLMENTS (EMI) & SINKING FUNDS',
  },
  {
    index: 9,
    filename: '09_CHAPTER_09_BOND_VALUATION_YTM_DURATION.md',
    shortHeader: 'CHAPTER 09 : BOND VALUATION & YTM',
    fullTitle: 'BOND VALUATION, YIELD TO MATURITY (YTM) & MODIFIED DURATION',
  },
  {
    index: 10,
    filename: '10_CHAPTER_10_BANK_FINAL_ACCOUNTS_BALANCE_SHEET.md',
    shortHeader: 'CHAPTER 10 : BANK BALANCE SHEET (FORM A)',
    fullTitle: 'BANK FINAL ACCOUNTS I: STATUTORY BALANCE SHEET (THIRD SCHEDULE)',
  },
  {
    index: 11,
    filename: '11_CHAPTER_11_BANK_FINAL_ACCOUNTS_PROFIT_LOSS.md',
    shortHeader: 'CHAPTER 11 : BANK PROFIT & LOSS (FORM B)',
    fullTitle: 'BANK FINAL ACCOUNTS II: PROFIT & LOSS STATEMENT & PROVISIONS',
  },
  {
    index: 12,
    filename: '12_CHAPTER_12_FOREX_ARITHMETIC_EXCHANGE_RATES.md',
    shortHeader: 'CHAPTER 12 : FOREX ARITHMETIC & QUOTATIONS',
    fullTitle: 'FOREIGN EXCHANGE ARITHMETIC & QUOTATION MECHANICS',
  },
  {
    index: 13,
    filename: '13_CHAPTER_13_CAPITAL_BUDGETING_DECISIONS.md',
    shortHeader: 'CHAPTER 13 : CAPITAL BUDGETING TECHNIQUES',
    fullTitle: 'CAPITAL BUDGETING & LONG-TERM INVESTMENT DECISIONS',
  },
  {
    index: 14,
    filename: '14_CHAPTER_14_COST_OF_CAPITAL_WACC.md',
    shortHeader: 'CHAPTER 14 : COST OF CAPITAL & WACC',
    fullTitle: 'COST OF CAPITAL (WACC) & CAPITAL STRUCTURE DECISIONS',
  },
  {
    index: 15,
    filename: '15_CHAPTER_15_LEVERAGE_ANALYSIS_EBIT_EPS.md',
    shortHeader: 'CHAPTER 15 : LEVERAGE & EBIT-EPS ANALYSIS',
    fullTitle: 'BUSINESS & FINANCIAL LEVERAGES (EBIT-EPS ANALYSIS)',
  },
  {
    index: 16,
    filename: '16_CHAPTER_16_FINANCIAL_RATIOS_CREDIT_APPRAISAL.md',
    shortHeader: 'CHAPTER 16 : FINANCIAL RATIO ANALYSIS',
    fullTitle: 'FINANCIAL RATIO ANALYSIS FOR CREDIT & SOLVENCY APPRAISAL',
  },
  {
    index: 17,
    filename: '17_CHAPTER_17_MARGINAL_COSTING_BREAK_EVEN.md',
    shortHeader: 'CHAPTER 17 : MARGINAL COSTING & BEP',
    fullTitle: 'FUNDAMENTALS OF COSTING, MARGINAL COSTING & BREAK-EVEN ANALYSIS',
  },
  {
    index: 18,
    filename: '18_CHAPTER_18_STANDARD_COSTING_BUDGETARY_CONTROL.md',
    shortHeader: 'CHAPTER 18 : STANDARD COSTING & BUDGETS',
    fullTitle: 'STANDARD COSTING, VARIANCE ANALYSIS & BUDGETARY CONTROL',
  },
  {
    index: 19,
    filename: '19_CHAPTER_19_TAXATION_GST_TDS_IN_BANKING.md',
    shortHeader: 'CHAPTER 19 : TAXATION, GST & TDS',
    fullTitle: 'DIRECT & INDIRECT TAXATION: GST & TDS IN BANKING OPERATIONS',
  },
  {
    index: 20,
    filename: '20_CHAPTER_20_THE_GRAND_SYNTHESIS_AFMB_REVISION_VAULT.md',
    shortHeader: 'CHAPTER 20 : AFMB MASTER REVISION VAULT',
    fullTitle: 'THE GRAND SYNTHESIS: IIBF PAPER 3 (AFMB) MASTER REVISION VAULT',
  },
];

export function transformChapterMarkdown(text: string, meta: ChapterMeta, assetsDir: string): string {
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
          <small>SHELF 007 • IIBF DIPLOMA IN BANKING &amp; FINANCE</small>
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

  // 12. GitHub-style Callouts
  html = html.replace(/<blockquote>\s*<p>\s*\[!NOTE\]([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    return `<div class="callout callout-note"><div class="callout-head">EXAM NOTE &amp; STATUTORY BENCHMARK</div><div class="callout-body"><p>${inner.trim()}</div></div>`;
  });
  html = html.replace(/<blockquote>\s*<p>\s*\[!WARNING\]([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    return `<div class="callout callout-warn"><div class="callout-head">CRITICAL STATUTORY COMPLIANCE WARNING</div><div class="callout-body"><p>${inner.trim()}</div></div>`;
  });
  html = html.replace(/<blockquote>\s*<p>\s*\[!CAUTION\]([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    return `<div class="callout callout-warn"><div class="callout-head">EXAMINER TRAP &amp; CONCEPTUAL PITFALL ALERT</div><div class="callout-body"><p>${inner.trim()}</div></div>`;
  });
  html = html.replace(/<blockquote>\s*<p>\s*\[!TIP\]([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    return `<div class="callout callout-tip"><div class="callout-head">HIGH-YIELD REVISION SHORTCUT &amp; TIP</div><div class="callout-body"><p>${inner.trim()}</div></div>`;
  });
  html = html.replace(/<blockquote>\s*<p>\s*\[!IMPORTANT\]([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    return `<div class="callout callout-note"><div class="callout-head">MANDATORY REGULATORY BENCHMARK</div><div class="callout-body"><p>${inner.trim()}</div></div>`;
  });

  // 13. Blockquote Transformations
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

    /* Chapter Opener Page (Page 1) */
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

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      font-family: "Times New Roman", "Georgia", serif;
      font-size: 11.2pt;
      line-height: 1.45;
      color: #111;
      background: #fff;
      margin: 0;
      padding: 0;
    }

    .chapter-body-wrapper {
      page: ${chKey};
    }

    /* Typography Defaults */
    p {
      margin-top: 0;
      margin-bottom: 1.8mm;
      text-align: justify;
      text-justify: inter-word;
    }

    /* Snug list margins */
    ul, ol {
      margin-top: 0.6mm;
      margin-bottom: 1.8mm;
      padding-left: 5mm;
    }
    li {
      margin-bottom: 0.8mm;
      line-height: 1.4;
      text-align: justify;
    }

    /* Headings Pagination Protection */
    h2, h3, h4, .section-bar, .subsec-bar {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }
    .chapter-row, .active-recall-card, .trap-card, .callout {
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
      min-width: 17mm;
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
      margin-bottom: 1mm;
      display: block;
    }
    .opener .t h1 {
      font-size: 13.5pt;
      font-weight: 900;
      line-height: 1.2;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      margin: 0;
      color: #000;
    }
    .opener .citadel-box {
      width: 15mm;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 2mm;
    }
    .opener .citadel-box img {
      max-width: 100%;
      max-height: 14mm;
      object-fit: contain;
      filter: grayscale(100%);
    }

    /* Lead Paragraph Drop Cap */
    p.dc::first-letter {
      float: left;
      font-family: "Times New Roman", Georgia, serif;
      font-size: 38pt;
      line-height: 0.78;
      padding-top: 1.5mm;
      padding-right: 2.5mm;
      padding-bottom: 0mm;
      font-weight: 900;
      color: #000;
    }

    /* Section Bars */
    .section-bar {
      margin-top: 3.5mm;
      margin-bottom: 2mm;
      border-bottom: 1.2pt solid #000;
      padding-bottom: 0.8mm;
    }
    .section-bar h2 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 9.8pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin: 0;
      color: #000;
    }

    .subsec-bar {
      margin-top: 2.8mm;
      margin-bottom: 1.5mm;
      border-bottom: 0.6pt solid #444;
      padding-bottom: 0.6mm;
    }
    .subsec-bar h3 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 8.8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin: 0;
      color: #111;
    }

    h4 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 8.2pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 2.2mm;
      margin-bottom: 1mm;
      color: #222;
    }

    /* Full-width Responsive Grid Tables */
    table.t-grid {
      width: 100% !important;
      border-collapse: collapse !important;
      margin: 2.5mm 0 !important;
      font-size: 8.4pt !important;
      line-height: 1.35 !important;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    table.t-grid th, table.t-grid td {
      border: 0.8pt solid #333 !important;
      padding: 1.5mm 2mm !important;
      text-align: left !important;
      vertical-align: top !important;
    }
    table.t-grid th {
      background: #e8e8e8 !important;
      font-family: "Helvetica Neue", Arial, sans-serif !important;
      font-size: 7.8pt !important;
      font-weight: 800 !important;
      text-transform: uppercase !important;
      letter-spacing: 0.04em !important;
      color: #000 !important;
      border-bottom: 1.2pt solid #000 !important;
    }
    table.t-grid tr:nth-child(even) td {
      background: #fafafa !important;
    }

    /* Callouts & Trap Cards */
    .callout {
      border: 1pt solid #000;
      margin: 2.5mm 0;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .callout-head {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.2pt;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 1mm 2.5mm;
      border-bottom: 0.8pt solid #000;
      background: #e5e5e5;
    }
    .callout-body {
      padding: 2mm 2.5mm 1mm 2.5mm;
      font-size: 9.4pt;
      line-height: 1.38;
    }

    .trap-card {
      border: 1.2pt solid #000;
      border-left: 3.5pt solid #000;
      background: #fafafa;
      margin: 2.5mm 0;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .trap-card-head {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.2pt;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      background: #000;
      color: #fff;
      padding: 1mm 2.5mm;
    }
    .trap-body {
      padding: 2mm 2.5mm 1mm 2.5mm;
      font-size: 9.4pt;
      line-height: 1.38;
    }

    .key-lesson-box {
      border: 1pt solid #444;
      border-left: 3pt solid #000;
      background: #fdfdfd;
      padding: 2mm 2.5mm;
      margin: 2.5mm 0;
      font-size: 9.5pt;
      line-height: 1.4;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Active Recall Cards */
    .active-recall-card {
      border: 1.2pt solid #000;
      margin: 2.8mm 0;
      page-break-inside: avoid;
      break-inside: avoid;
      background: #fff;
    }
    .card-prompt-bar {
      background: #111;
      color: #fff;
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 7.2pt;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      padding: 1mm 2.5mm;
    }
    .card-prompt-summary {
      padding: 2mm 2.5mm;
      font-weight: 700;
      font-size: 9.6pt;
      line-height: 1.35;
      background: #f7f7f7;
      border-bottom: 0.8pt dashed #777;
    }
    .card-answer-box {
      padding: 2mm 2.5mm 1mm 2.5mm;
      background: #fff;
    }
    .card-answer-tag {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 6.8pt;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #333;
      margin-bottom: 1mm;
    }
    .card-answer-body {
      font-size: 9.2pt;
      line-height: 1.38;
    }

    /* Math Formulas */
    .math-display-wrap {
      margin: 2mm 0;
      text-align: center;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* ASCII Diagrams */
    pre.ascii-diagram {
      font-family: "Courier New", Courier, monospace;
      font-size: 7.2pt;
      line-height: 1.25;
      background: #f9f9f9;
      border: 0.8pt solid #333;
      padding: 2mm;
      margin: 2.5mm 0;
      overflow: hidden;
      white-space: pre;
      page-break-inside: avoid;
      break-inside: avoid;
    }
  `;
}

export function compileChapterHtml(
  meta: ChapterMeta,
  notesDir: string,
  assetsDir: string,
  katexCss: string
): string {
  const filePath = path.join(notesDir, meta.filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const rawMd = fs.readFileSync(filePath, 'utf-8');
  const bodyHtml = transformChapterMarkdown(rawMd, meta, assetsDir);
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
<div class="chapter-body-wrapper">
  ${bodyHtml}
</div>
</body>
</html>`;
}

export function renderHtmlToPdf(html: string, pdfOutPath: string, browserPath: string) {
  const tempHtmlPath = pdfOutPath.replace(/\.pdf$/i, '.html');
  fs.writeFileSync(tempHtmlPath, html, 'utf-8');

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-iibf-afmb-ch-'));
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
  const notesDir = path.resolve('007', 'notes', 'iibf_dbf', 'paper_3_chapters');
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  const outChaptersDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_3', 'chapters');
  if (!fs.existsSync(outChaptersDir)) {
    fs.mkdirSync(outChaptersDir, { recursive: true });
  }

  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

  console.log(`\n======================================================`);
  console.log(`BATCH COMPILING ALL 20 CHAPTERS FOR IIBF PAPER 3 (AFMB)`);
  console.log(`======================================================`);

  for (const meta of IIBF_PAPER_3_REGISTRY) {
    const chNum = String(meta.index).padStart(2, '0');
    const pdfName = `${chNum}_CHAPTER_${chNum}_A4_BW.pdf`;
    const pdfPath = path.join(outChaptersDir, pdfName);

    console.log(`Compiling Chapter ${chNum}: ${meta.shortHeader}...`);
    const html = compileChapterHtml(meta, notesDir, assetsDir, katexCss);
    renderHtmlToPdf(html, pdfPath, browserPath);

    const stats = fs.statSync(pdfPath);
    console.log(`  -> Finished ${pdfName} (${(stats.size / 1024).toFixed(1)} KB)`);
  }

  console.log(`\n✓ All 20 chapters compiled successfully into ${outChaptersDir}!`);
}

if (process.argv[1] && (process.argv[1].includes('build_iibf_paper_3_chapters.ts') || process.argv[1].includes('build_iibf_paper_3_chapters'))) {
  main().catch(console.error);
}
