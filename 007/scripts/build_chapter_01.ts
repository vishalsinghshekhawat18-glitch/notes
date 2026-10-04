import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

// Configure marked with KaTeX
marked.use(
  markedKatex({
    throwOnError: false,
    strict: false,
    output: 'html',
    nonStandard: true,
  })
);

function renderHtmlToPdf(html: string, pdfOutPath: string) {
  const browserPath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const tempHtmlPath = pdfOutPath.replace(/\.pdf$/i, '.html');
  fs.writeFileSync(tempHtmlPath, html, 'utf-8');

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-ch1-profile-'));
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

function preprocessMarkdown(md: string): string {
  let text = md;

  // 1. Currency USD disambiguation
  text = text.replace(/\\\$/g, '___CURRENCY_USD___');

  // 2. Rupee in math
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (m, inner) => {
    let clean = inner
      .replace(/\\mathbf\{₹([^}]*)\}/g, '\\text{₹}\\mathbf{$1}')
      .replace(/(?<!\\text\{)₹/g, '\\text{₹}')
      .replace(/\n+/g, ' ');
    return `\n\n$$ ${clean} $$\n\n`;
  });

  text = text.replace(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g, (m, inner) => {
    let clean = inner
      .replace(/\\mathbf\{₹([^}]*)\}/g, '\\text{₹}\\mathbf{$1}')
      .replace(/(?<!\\text\{)₹/g, '\\text{₹}');
    return `$${clean}$`;
  });

  // 3. Details/summary tag expansion for active recall cards
  text = text.replace(/<details>\s*<summary>(.*?)<\/summary>([\s\S]*?)<\/details>/gi, (m, summaryText, bodyText) => {
    return `\n\n<div class="active-recall-card">\n<div class="card-answer-header">✦ ${summaryText.trim()}</div>\n<div class="card-answer-body">\n\n${bodyText.trim()}\n\n</div>\n</div>\n\n`;
  });

  // 4. Warning alert boxes
  text = text.replace(/>\s*\[!WARNING\]\s*\n((?:>.*(?:\n|$))+)/gi, (m, body) => {
    const cleanLines = body.split('\n').map((l: string) => l.replace(/^>\s?/, '')).join('\n');
    return `\n\n<div class="exam-trap-box">\n<div class="exam-trap-header">⚡ EXAM TRAP ALERT &amp; PITFALL MATRIX</div>\n<div class="exam-trap-content">\n\n${cleanLines}\n\n</div>\n</div>\n\n`;
  });

  // 5. Restore USD
  text = text.replace(/___CURRENCY_USD___/g, '\\$');

  return text;
}

async function main() {
  const outDir = path.resolve('007', 'PRINT DESIGNER');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const pdfPath = path.join(outDir, '03_CHAPTER_01_A4_BW.pdf');
  const sourcePath = path.resolve('007', 'notes', 'ECONOMICS', '02_CHAPTER_01_FOUNDATIONS_SECTORS_GOODS.md');

  if (!fs.existsSync(sourcePath)) {
    console.error('Source file not found:', sourcePath);
    process.exit(1);
  }

  console.log('Reading Chapter 01 source...');
  let md = fs.readFileSync(sourcePath, 'utf-8');

  // Strip top manual page break if present
  md = md.replace(/^<div style="page-break-before: always;"><\/div>\s*/i, '');

  console.log('Preprocessing Markdown & Math...');
  const processedMd = preprocessMarkdown(md);

  console.log('Parsing Markdown to HTML via marked + KaTeX...');
  let bodyHtml = marked.parse(processedMd) as string;

  // Enhance Chapter Opener (Chapter 1 badge and main title together)
  bodyHtml = bodyHtml.replace(
    /<h1>CHAPTER 01:\s*([^<]+)<\/h1>/i,
    `<div class="chapter-opener">
      <div class="chapter-pill-tag">CHAPTER 01</div>
      <h1 class="chapter-display-title">$1</h1>
      <div class="chapter-rule-double"></div>
    </div>`
  );

  // Remove Canonical Sources block completely as requested
  bodyHtml = bodyHtml.replace(
    /<p><strong>Canonical Sources Unified<\/strong>:\s*<\/p>\s*<ul>[\s\S]*?<\/ul>/i,
    ''
  );

  // Remove the redundant <hr> immediately following the opener
  bodyHtml = bodyHtml.replace(
    /(<div class="chapter-opener">[\s\S]*?<\/div>)\s*<hr\s*\/?>/i,
    '$1'
  );

  // Add section numbers styling to H2
  bodyHtml = bodyHtml.replace(
    /<h2>(\d+\.\d+)\s*([^<]+)<\/h2>/gi,
    `<h2 class="section-heading"><span class="section-tag">§ $1</span> $2</h2>`
  );

  // Add 3-line Drop Cap to the very first paragraph of section 1.1
  bodyHtml = bodyHtml.replace(
    /(<h2 class="section-heading">[\s\S]*?<\/h2>\s*<h3[^>]*>[\s\S]*?<\/h3>\s*<p>)([A-Z])/,
    `$1<span class="drop-cap">$2</span>`
  );

  // Load KaTeX CSS
  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Chapter 01: Foundations of Economic Organization</title>
<style>
  ${katexCss}

  @page {
    size: A4 portrait;
  }

  @page :right {
    margin: 18mm 16mm 18mm 24mm;
    @top-right {
      content: "Chapter 01 : Foundations of Economic Organization";
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 7.5pt;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #444;
      border-bottom: 0.5pt solid #888;
      padding-bottom: 1.5mm;
    }
    @bottom-right {
      content: counter(page);
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 8pt;
      font-weight: 700;
      color: #222;
    }
  }

  @page :left {
    margin: 18mm 24mm 18mm 16mm;
    @top-left {
      content: "Shelf 007 : Indian Macroeconomic Architecture";
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 7.5pt;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #444;
      border-bottom: 0.5pt solid #888;
      padding-bottom: 1.5mm;
    }
    @bottom-left {
      content: counter(page);
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 8pt;
      font-weight: 700;
      color: #222;
    }
  }

  @page :first {
    @top-right { content: none; }
    @top-left { content: none; }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Times New Roman', 'Baskerville', 'Georgia', serif;
    font-size: 11pt;
    line-height: 1.52;
    color: #111;
    background: #fff;
    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Chapter Opener */
  .chapter-opener {
    margin-bottom: 6mm;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .chapter-pill-tag {
    display: inline-block;
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8.5pt;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.5mm 4mm;
    margin-bottom: 3.5mm;
  }

  .chapter-display-title {
    font-size: 20pt;
    font-weight: 900;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000;
    margin-bottom: 3mm;
  }

  .chapter-rule-double {
    border-top: 2pt solid #000;
    border-bottom: 0.75pt solid #000;
    height: 2pt;
    margin: 3mm 0 6mm 0;
  }

  /* Section Headings */
  .section-heading {
    font-size: 13.5pt;
    font-weight: 800;
    color: #000;
    margin-top: 7.5mm;
    margin-bottom: 3.5mm;
    border-bottom: 1pt solid #000;
    padding-bottom: 1.2mm;
    page-break-after: avoid;
    break-after: avoid;
    display: flex;
    align-items: baseline;
  }

  .section-tag {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 10.5pt;
    font-weight: 800;
    color: #444;
    margin-right: 3mm;
  }

  h3 {
    font-size: 11.8pt;
    font-weight: bold;
    color: #000;
    margin-top: 5.5mm;
    margin-bottom: 2.2mm;
    page-break-after: avoid;
    break-after: avoid;
  }

  h4 {
    font-size: 11pt;
    font-style: italic;
    color: #222;
    margin-top: 4mm;
    margin-bottom: 1.8mm;
    page-break-after: avoid;
    break-after: avoid;
  }

  p {
    margin-bottom: 3.5mm;
  }

  ul, ol {
    margin-left: 6mm;
    margin-bottom: 3.8mm;
  }

  li {
    margin-bottom: 1.4mm;
  }

  /* Drop Cap */
  .drop-cap {
    float: left;
    font-size: 3.4em;
    line-height: 0.78;
    padding-top: 1.5mm;
    padding-right: 2.5mm;
    padding-bottom: 0.5mm;
    font-family: 'Times New Roman', serif;
    font-weight: bold;
    color: #000;
  }

  /* Blockquotes / Pull-quotes */
  blockquote {
    border-left: 2.5pt solid #333;
    padding: 3mm 4.5mm;
    margin: 4.5mm 0;
    background: #fbfbfb;
    font-size: 10.5pt;
    line-height: 1.5;
    font-style: italic;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  blockquote p {
    margin-bottom: 2mm;
  }

  /* Tables - Tufte Academic Standards */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 5.5mm 0;
    font-size: 9.5pt;
    line-height: 1.38;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  thead th {
    border-top: 1.5pt solid #000;
    border-bottom: 1pt solid #000;
    padding: 2.2mm 3.2mm;
    text-align: left;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8.5pt;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background: #f5f5f5;
  }

  tbody td {
    padding: 2.2mm 3.2mm;
    border-bottom: 0.5pt solid #ddd;
    vertical-align: top;
  }

  tbody tr:last-child td {
    border-bottom: 1.5pt solid #000;
  }

  tbody tr:nth-child(even) td {
    background-color: #fafafa;
  }

  /* Monospaced ASCII Blocks */
  pre {
    background: #fcfcfc;
    border: 0.75pt solid #bbb;
    padding: 3.5mm 4.5mm;
    margin: 5mm 0;
    font-family: 'Courier New', Courier, monospace;
    font-size: 8pt;
    line-height: 1.25;
    white-space: pre-wrap;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 9pt;
    background: #f4f4f4;
    padding: 0.2mm 1.5mm;
    border-radius: 2px;
  }

  pre code {
    background: transparent;
    padding: 0;
  }

  /* KaTeX Equations */
  .katex-display {
    margin: 4.5mm 0 !important;
    text-align: center;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Exam Trap Matrix */
  .exam-trap-box {
    border-left: 3.5pt solid #000;
    border-top: 0.5pt solid #ccc;
    border-right: 0.5pt solid #ccc;
    border-bottom: 0.5pt solid #ccc;
    background: #fafafa;
    margin: 5.5mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .exam-trap-header {
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1.4mm 4mm;
  }

  .exam-trap-content {
    padding: 3.8mm 5mm;
    font-size: 10pt;
    line-height: 1.48;
  }

  .exam-trap-content p {
    margin-bottom: 2mm;
  }

  /* Active Recall Diagnostic Cards */
  .active-recall-card {
    border: 1pt solid #222;
    background: #fff;
    margin: 5mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .card-answer-header {
    background: #efefef;
    border-bottom: 0.75pt solid #222;
    padding: 1.8mm 4mm;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #111;
  }

  .card-answer-body {
    padding: 4mm 5mm;
    font-size: 10pt;
    line-height: 1.48;
  }

  .card-answer-body p {
    margin-bottom: 2mm;
  }

  hr {
    border: none;
    border-top: 0.75pt solid #ccc;
    margin: 6mm 0;
  }
</style>
</head>
<body>

  ${bodyHtml}

</body>
</html>`;

  console.log('Rendering Chapter 01 PDF via Edge headless...');
  renderHtmlToPdf(fullHtml, pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log(`✓ Chapter 01 generated successfully: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
