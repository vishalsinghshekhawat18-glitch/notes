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

export const CHAPTERS_REGISTRY: ChapterMeta[] = [
  {
    index: 1,
    filename: '02_CHAPTER_01_FOUNDATIONS_SECTORS_GOODS.md',
    shortHeader: 'CHAPTER 01 : FOUNDATIONS OF ECONOMIC ORGANIZATION',
    fullTitle: 'FOUNDATIONS OF ECONOMIC ORGANIZATION',
  },
  {
    index: 2,
    filename: '03_CHAPTER_02_NATIONAL_INCOME_ACCOUNTING_GVA.md',
    shortHeader: 'CHAPTER 02 : NATIONAL INCOME ACCOUNTING & GVA',
    fullTitle: 'NATIONAL INCOME ACCOUNTING, GVA & THE 2015 NSO METHODOLOGY',
  },
  {
    index: 3,
    filename: '04_CHAPTER_03_GROWTH_DEVELOPMENT_WELFARE_METRICS.md',
    shortHeader: 'CHAPTER 03 : GROWTH, DEVELOPMENT & WELFARE METRICS',
    fullTitle: 'ECONOMIC GROWTH, HUMAN DEVELOPMENT & WELFARE METRICS',
  },
  {
    index: 4,
    filename: '05_CHAPTER_04_MONEY_LIQUIDITY_AGGREGATES.md',
    shortHeader: 'CHAPTER 04 : NATURE OF MONEY & LIQUIDITY AGGREGATES',
    fullTitle: 'THE NATURE OF MONEY, LIQUIDITY AGGREGATES & MONEY CREATION',
  },
  {
    index: 5,
    filename: '06_CHAPTER_05_RBI_AND_INFLATION_TARGETING.md',
    shortHeader: 'CHAPTER 05 : RBI & INFLATION TARGETING FRAMEWORK',
    fullTitle: 'THE RESERVE BANK OF INDIA & THE INFLATION TARGETING FRAMEWORK',
  },
  {
    index: 6,
    filename: '07_CHAPTER_06_INSTRUMENTS_MONETARY_POLICY_TRANSMISSION.md',
    shortHeader: 'CHAPTER 06 : MONETARY POLICY & TRANSMISSION CHANNELS',
    fullTitle: 'INSTRUMENTS OF MONETARY POLICY & THE TRANSMISSION CHANNELS',
  },
  {
    index: 7,
    filename: '08_CHAPTER_07_INDIAN_BANKING_ARCHITECTURE_CAPITAL_ADEQUACY.md',
    shortHeader: 'CHAPTER 07 : INDIAN BANKING ARCHITECTURE & CAPITAL ADEQUACY',
    fullTitle: 'INDIAN BANKING ARCHITECTURE, DIFFERENTIATED BANKS & CAPITAL ADEQUACY',
  },
  {
    index: 8,
    filename: '09_CHAPTER_08_NPAS_IBC_AND_BAD_BANKS.md',
    shortHeader: 'CHAPTER 08 : NPAS, IBC & BAD BANKS',
    fullTitle: 'NON-PERFORMING ASSETS (NPAS), IBC & BAD BANKS',
  },
  {
    index: 9,
    filename: '10_CHAPTER_09_FINANCIAL_MARKETS_GSECS_CAPITAL_MARKET.md',
    shortHeader: 'CHAPTER 09 : FINANCIAL MARKETS, G-SECS & CAPITAL MARKETS',
    fullTitle: 'FINANCIAL MARKETS, G-SECS & THE CAPITAL MARKET ECOSYSTEM',
  },
  {
    index: 10,
    filename: '11_CHAPTER_10_BUDGETARY_ARCHITECTURE_DEFICITS_FRBM.md',
    shortHeader: 'CHAPTER 10 : BUDGETARY ARCHITECTURE, DEFICITS & FRBM',
    fullTitle: 'BUDGETARY ARCHITECTURE: REVENUE, CAPITAL, DEFICITS & THE FRBM ACT',
  },
  {
    index: 11,
    filename: '12_CHAPTER_11_TAXATION_ARCHITECTURE_GST.md',
    shortHeader: 'CHAPTER 11 : TAXATION ARCHITECTURE IN INDIA & GST',
    fullTitle: 'TAXATION ARCHITECTURE IN INDIA: DIRECT TAXES & THE GST ECOSYSTEM',
  },
  {
    index: 12,
    filename: '13_CHAPTER_12_FISCAL_FEDERALISM_FINANCE_COMMISSION.md',
    shortHeader: 'CHAPTER 12 : FISCAL FEDERALISM & FINANCE COMMISSION',
    fullTitle: 'FISCAL FEDERALISM, FINANCE COMMISSION & CENTRE-STATE RELATIONS',
  },
  {
    index: 13,
    filename: '14_CHAPTER_13_INFLATION_THEORIES_INDICES.md',
    shortHeader: 'CHAPTER 13 : INFLATION THEORIES & PRICE INDICES',
    fullTitle: 'INFLATION: MECHANISMS, THEORIES, HEADLINE VS CORE & PRICE INDICES',
  },
  {
    index: 14,
    filename: '15_CHAPTER_14_EMPLOYMENT_DYNAMICS_PLFS_UNEMPLOYMENT.md',
    shortHeader: 'CHAPTER 14 : EMPLOYMENT DYNAMICS, PLFS & UNEMPLOYMENT',
    fullTitle: 'EMPLOYMENT DYNAMICS, LABOR FORCE SURVEYS (PLFS) & UNEMPLOYMENT',
  },
  {
    index: 15,
    filename: '16_CHAPTER_15_POVERTY_ESTIMATION_INEQUALITY_METRICS.md',
    shortHeader: 'CHAPTER 15 : POVERTY ESTIMATION & INEQUALITY METRICS',
    fullTitle: 'POVERTY ESTIMATION METHODOLOGIES & INEQUALITY METRICS IN INDIA',
  },
  {
    index: 16,
    filename: '17_CHAPTER_16_BOP_ARCHITECTURE_CURRENT_CAPITAL.md',
    shortHeader: 'CHAPTER 16 : BALANCE OF PAYMENTS ARCHITECTURE',
    fullTitle: 'BALANCE OF PAYMENTS (BOP) ARCHITECTURE: CURRENT & CAPITAL ACCOUNTS',
  },
  {
    index: 17,
    filename: '18_CHAPTER_17_FOREX_NEER_REER_CONVERTIBILITY.md',
    shortHeader: 'CHAPTER 17 : FOREX DYNAMICS, NEER, REER & CONVERTIBILITY',
    fullTitle: 'FOREIGN EXCHANGE DYNAMICS, NEER, REER & CURRENCY CONVERTIBILITY',
  },
  {
    index: 18,
    filename: '19_CHAPTER_18_INTERNATIONAL_FINANCIAL_INSTITUTIONS_WTO.md',
    shortHeader: 'CHAPTER 18 : INTERNATIONAL ECONOMIC ORGANIZATIONS & WTO',
    fullTitle: 'INTERNATIONAL ECONOMIC ORGANIZATIONS: IMF, WORLD BANK GROUP & WTO',
  },
  {
    index: 19,
    filename: '20_CHAPTER_19_AGRICULTURE_CAPITAL_FORMATION_MSP.md',
    shortHeader: 'CHAPTER 19 : INDIAN AGRICULTURE, MSP & CAPITAL FORMATION',
    fullTitle: 'INDIAN AGRICULTURE: CAPITAL FORMATION, PRICING (MSP) & BOTTLENECKS',
  },
  {
    index: 20,
    filename: '21_CHAPTER_20_INDUSTRIAL_ARCHITECTURE_MSMES_DISINVESTMENT.md',
    shortHeader: 'CHAPTER 20 : INDUSTRIAL ARCHITECTURE & MSMES',
    fullTitle: 'INDUSTRIAL ARCHITECTURE, MSMES, DISINVESTMENT & MANUFACTURING',
  },
  {
    index: 21,
    filename: '22_CHAPTER_21_INFRASTRUCTURE_LOGISTICS_ENERGY_TRANSITION.md',
    shortHeader: 'CHAPTER 21 : INFRASTRUCTURE, PM GATISHAKTI & LOGISTICS',
    fullTitle: 'INFRASTRUCTURE, LOGISTICS (PM GATISHAKTI) & ENERGY TRANSITION',
  },
  {
    index: 22,
    filename: '24_CHAPTER_22_ECONOMIC_PLANNING_FIVE_YEAR_PLANS_NITI_AAYOG.md',
    shortHeader: 'CHAPTER 22 : ECONOMIC PLANNING & NITI AAYOG GOVERNANCE',
    fullTitle: 'ECONOMIC PLANNING IN INDIA, FIVE-YEAR PLANS HISTORY & NITI AAYOG',
  },
  {
    index: 23,
    filename: '25_CHAPTER_23_LABOR_LAW_ARCHITECTURE_FOUR_LABOR_CODES.md',
    shortHeader: 'CHAPTER 23 : LABOR LAW ARCHITECTURE & FOUR LABOR CODES',
    fullTitle: 'LABOR LAW ARCHITECTURE, INDUSTRIAL RELATIONS & FOUR LABOR CODES',
  },
  {
    index: 24,
    filename: '26_CHAPTER_24_URBANIZATION_DEMOGRAPHIC_TRANSITION_MIGRATION.md',
    shortHeader: 'CHAPTER 24 : URBANIZATION & DEMOGRAPHIC TRANSITION',
    fullTitle: 'URBANIZATION, DEMOGRAPHIC TRANSITION & INTERNAL MIGRATION',
  },
  {
    index: 25,
    filename: '27_CHAPTER_25_SOCIAL_STRUCTURE_MULTICULTURALISM_PLURALISM.md',
    shortHeader: 'CHAPTER 25 : SOCIAL STRUCTURE & PLURALISM IN INDIA',
    fullTitle: 'SOCIAL STRUCTURE, MULTICULTURALISM, SECULARISM & PLURALISM',
  },
  {
    index: 26,
    filename: '28_CHAPTER_26_THE_GRAND_SYNTHESIS_MASTER_REVISION_VAULT.md',
    shortHeader: 'CHAPTER 26 : THE GRAND SYNTHESIS REVISION VAULT',
    fullTitle: 'THE GRAND SYNTHESIS: MASTER CONSOLIDATED REVISION VAULT',
  },
  {
    index: 27,
    filename: '29_CHAPTER_27_ECONOMY_OF_RAJASTHAN.md',
    shortHeader: 'CHAPTER 27 : ECONOMY OF RAJASTHAN (RPSC RAS)',
    fullTitle: 'ECONOMY OF RAJASTHAN: GSDP, SECTORAL ARCHITECTURE & REFORMS',
  },
];

export function transformChapterMarkdown(rawMarkdown: string, meta: ChapterMeta, assetsDir: string): string {
  let text = rawMarkdown;

  // 1. Strip raw HTML frontmatter or metadata artifacts
  text = text.replace(/<div[^>]*style="[^"]*page-break-[^"]*"[^>]*>\s*<\/div>/gi, '');
  text = text.replace(/\*\*Metadata:\*\*[\s\S]*?(?=\n\n|\n#|$)/g, '');
  text = text.replace(/^Metadata:[\s\S]*?(?=\n\n|\n#|$)/gm, '');

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
    const cardHtml = `<div class="active-recall-card">\n<div class="card-prompt-bar">⚡ ACTIVE RECALL &amp; DIAGNOSTIC PROMPT</div>\n<div class="card-prompt-summary">${summaryText.trim()}</div>\n<div class="card-answer-box">\n<div class="card-answer-tag">RIGOROUS CAUSAL PROOF &amp; EXAM SOLUTION:</div>\n<div class="card-answer-body">\n${marked.parse(bodyText.trim())}\n</div>\n</div>\n</div>`;
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
          <div class="n-lbl">Chapter</div>
          <div class="n">${chNum}</div>
        </div>
        <div class="t">
          <small>C H A P T E R &nbsp; ${chNum}</small>
          <h1>${meta.fullTitle}</h1>
        </div>
        <div class="citadel-box">
          <img src="file:///${assetsDir}/ch1_opener_fort.png" alt="Aravalli Ridge Historic Citadel" />
        </div>
      </div>
    `;
  });

  // 11. Section Headings (H2) into Section Banners
  html = html.replace(/<h2(?: id="[^"]*")?>\s*(?:(?:§\s*)?(\d+\.\d+))?\s*:?\s*([\s\S]*?)<\/h2>/g, (match, secNum, title) => {
    const pill = secNum ? `<span class="sec-pill">§ ${secNum}</span>` : `<span class="sec-pill">§</span>`;
    return `
      <div class="section-bar">
        ${pill}
        <span class="sec-title">${title.trim()}</span>
      </div>
    `;
  });

  // 12. Subsection Headings (H3) into SubSection Bars
  html = html.replace(/<h3(?: id="[^"]*")?>([\s\S]*?)<\/h3>/g, (match, title) => {
    return `
      <div class="subsec-bar">
        <span>${title.trim()}</span>
      </div>
    `;
  });

  // 13. Blockquotes into Examiner Traps / Lesson Boxes
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (match, inner) => {
    if (
      inner.includes('TRAP') ||
      inner.includes('WARNING') ||
      inner.includes('Hazard') ||
      inner.includes('Pitfall')
    ) {
      return `
        <div class="trap-card">
          <div class="trap-card-head">⚡ EXAMINER TRAP &amp; CONCEPTUAL PITFALL ALERT</div>
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
        content: counter(page);
        font-family: "Times New Roman", Georgia, serif;
        font-size: 11pt;
        font-weight: 700;
        color: #000;
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
        content: counter(page);
        font-family: "Times New Roman", Georgia, serif;
        font-size: 11pt;
        font-weight: 700;
        color: #000;
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

    /* Chapter Opener Container */
    .chapter-opener-wrapper {
      page: ${chKey}-opener;
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

    /* Subsection Bars */
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

    /* Lists */
    ul, ol {
      margin: 1.5mm 0 2.2mm 5mm;
      padding-left: 2mm;
    }

    li {
      margin-bottom: 1.2mm;
      line-height: 1.42;
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

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-all-ch-'));
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
  const notesDir = path.resolve('007', 'notes', 'economics');
  const assetsDir = path.resolve('007', 'PRINT DESIGNER', 'assets').replace(/\\/g, '/');
  const outChaptersDir = path.resolve('007', 'PRINT DESIGNER', 'chapters');
  if (!fs.existsSync(outChaptersDir)) {
    fs.mkdirSync(outChaptersDir, { recursive: true });
  }

  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

  const args = process.argv.slice(2);
  const chArg = args.find(a => a.startsWith('--chapter='));
  const targetIndex = chArg ? parseInt(chArg.split('=')[1], 10) : null;

  if (targetIndex) {
    const meta = CHAPTERS_REGISTRY.find(c => c.index === targetIndex);
    if (!meta) {
      console.error(`Chapter index ${targetIndex} not found!`);
      return;
    }

    console.log(`\n======================================================`);
    console.log(`Compiling Single Chapter: ${meta.shortHeader}`);
    console.log(`Source: ${meta.filename}`);
    console.log(`======================================================`);

    const chNum = String(meta.index).padStart(2, '0');
    const pdfName = `${chNum}_CHAPTER_${chNum}_A4_BW.pdf`;
    const pdfPath = path.join(outChaptersDir, pdfName);

    // If Chapter 1, we can reuse the master fused layout or compile via this engine
    const html = compileChapterHtml(meta, notesDir, assetsDir, katexCss);
    renderHtmlToPdf(html, pdfPath, browserPath);

    const stats = fs.statSync(pdfPath);
    console.log(`✓ Compiled: ${pdfName} (${(stats.size / 1024).toFixed(1)} KB)`);
    return;
  }

  console.log(`\n======================================================`);
  console.log(`BATCH COMPILING ALL ${CHAPTERS_REGISTRY.length} CHAPTERS FOR SHELF 007`);
  console.log(`======================================================`);

  for (const meta of CHAPTERS_REGISTRY) {
    const chNum = String(meta.index).padStart(2, '0');
    const pdfName = `${chNum}_CHAPTER_${chNum}_A4_BW.pdf`;
    const pdfPath = path.join(outChaptersDir, pdfName);

    if (meta.index === 1 && fs.existsSync(pdfPath)) {
      console.log(`  -> Preserving perfected Master Chapter 01 (${pdfPath})`);
      continue;
    }

    console.log(`Compiling Chapter ${chNum}: ${meta.shortHeader}...`);
    const html = compileChapterHtml(meta, notesDir, assetsDir, katexCss);
    renderHtmlToPdf(html, pdfPath, browserPath);

    const stats = fs.statSync(pdfPath);
    console.log(`  -> Finished ${pdfName} (${(stats.size / 1024).toFixed(1)} KB)`);
  }

  console.log(`\n✓ All chapters compiled successfully into ${outChaptersDir}!`);
}

if (process.argv[1] && (process.argv[1].includes('build_all_chapters.ts') || process.argv[1].includes('build_all_chapters'))) {
  main().catch(console.error);
}
