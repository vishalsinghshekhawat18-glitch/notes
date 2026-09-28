import * as fs from 'fs';
import * as path from 'path';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import { execSync } from 'child_process';

const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
const katexCss = fs.readFileSync(katexCssPath, 'utf-8');

marked.use(
  markedKatex({
    throwOnError: false,
    output: 'htmlAndMathml',
  })
);

function buildStudyBookHtml(rawMd: string, subjectTitle: string, category: string): string {
  // 1. Unescape math if needed
  let content = rawMd.replace(/\\\\\$/g, '___ESC_DOLLAR___');

  // Parse markdown
  let html = marked.parse(content) as string;

  // Custom post-processing for Exam Angle boxes
  // Wrap blockquotes that contain 🎯 or ⚠️ in .exam-angle-box
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (match, inner) => {
    if (inner.includes('🎯') || inner.includes('⚠️') || inner.includes('Exam Angle') || inner.includes('Exam Anchor') || inner.includes('Trap')) {
      return `<div class="exam-angle-box"><div class="exam-box-header">🎯 EXAMINER ANCHOR & TRAP MATRIX</div><div class="exam-box-text">${inner}</div></div>`;
    }
    return `<blockquote class="standard-quote">${inner}</blockquote>`;
  });

  // Wrap h2 elements in section banners, except first one if it's TOC
  let h2Count = 0;
  html = html.replace(/<h2 id="([^"]*)">([\s\S]*?)<\/h2>/g, (match, id, text) => {
    h2Count++;
    const isToc = text.toLowerCase().includes('table of contents') || text.toLowerCase().includes('master index') || h2Count === 1;
    const pageBreakClass = isToc ? 'toc-banner' : 'section-banner unit-page-break';
    return `<h2 id="${id}" class="${pageBreakClass}"><span class="section-banner-title">${text}</span></h2>`;
  });

  const printCss = `
    @page {
      size: A4 portrait;
      margin: 18mm 18mm 20mm 18mm;

      @bottom-left {
        content: "Mind of Aravalli • ${subjectTitle} • B&W Study Edition";
        font-family: Calibri, "Segoe UI", Arial, sans-serif;
        font-size: 8.5pt;
        color: #555555;
      }
      @bottom-right {
        content: "Page " counter(page);
        font-family: Calibri, "Segoe UI", Arial, sans-serif;
        font-size: 9pt;
        font-weight: 600;
        color: #000000;
      }
    }

    *, *:before, *:after {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 11.5pt;
      font-weight: 400;
      line-height: 1.55;
      color: #1a1a1a;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }

    /* Keywords & Bold: Semibold 600 to prevent faux-bold ink bleeding */
    strong, b {
      font-weight: 600 !important;
      color: #000000;
    }

    /* Masthead */
    .doc-masthead {
      border-top: 3px solid #000000;
      border-bottom: 1.5px solid #000000;
      padding: 14px 0 10px 0;
      margin-bottom: 24px;
      text-align: center;
    }

    .doc-masthead-meta {
      display: flex;
      justify-content: space-between;
      font-size: 8.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #333333;
      border-bottom: 0.5px solid #888888;
      padding-bottom: 4px;
      margin-bottom: 8px;
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
    }

    .doc-masthead-title {
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 17pt;
      font-weight: 700;
      line-height: 1.25;
      color: #000000;
      text-transform: uppercase;
      margin: 0 0 6px 0;
      letter-spacing: 0.3px;
    }

    .doc-masthead-sub {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 10pt;
      font-style: italic;
      color: #333333;
      margin: 0 0 8px 0;
      line-height: 1.3;
    }

    .doc-masthead-bar {
      display: flex;
      justify-content: space-around;
      background: #f5f5f5 !important;
      border-top: 1px solid #000000;
      border-bottom: 1px solid #000000;
      padding: 5px 10px;
      font-size: 8.5pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #000000;
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
    }

    /* Headings */
    h1 {
      display: none; /* Handled by Masthead */
    }

    /* Section Banner (H2) */
    h2.section-banner {
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 13.5pt;
      font-weight: 700;
      line-height: 1.3;
      background: #f4f4f4 !important;
      border-left: 5px solid #000000;
      padding: 8px 12px;
      margin: 28px 0 16px 0;
      color: #000000;
      break-after: avoid;
      page-break-after: avoid;
    }

    h2.unit-page-break {
      break-before: page;
      page-break-before: always;
    }

    h2.toc-banner {
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 13.5pt;
      font-weight: 700;
      background: #f4f4f4 !important;
      border-left: 5px solid #000000;
      padding: 8px 12px;
      margin: 12px 0 14px 0;
      color: #000000;
      break-before: auto !important;
      page-break-before: auto !important;
      break-after: avoid;
      page-break-after: avoid;
    }

    h3 {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 12.5pt;
      font-weight: 700;
      line-height: 1.35;
      color: #000000;
      margin: 18px 0 8px 0;
      padding-bottom: 2px;
      border-bottom: 0.5px solid #dddddd;
      break-after: avoid;
      page-break-after: avoid;
    }

    h4 {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 11pt;
      font-weight: 700;
      color: #222222;
      margin: 14px 0 6px 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    p {
      margin-top: 0;
      margin-bottom: 8pt;
      text-align: justify;
      text-justify: inter-word;
      orphans: 3;
      widows: 3;
    }

    ul, ol {
      margin-top: 4pt;
      margin-bottom: 8pt;
      padding-left: 22pt;
    }

    li {
      margin-bottom: 4pt;
      orphans: 2;
      widows: 2;
    }

    /* Exam Angle & Trap Matrix Callout Box */
    .exam-angle-box {
      margin: 14px 0 16px 0;
      padding: 10px 14px;
      background: #fafafa !important;
      border: 1px solid #444444;
      border-left: 4px solid #000000;
      border-radius: 2px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .exam-box-header {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 9.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 0.75px solid #cccccc;
      padding-bottom: 4px;
      margin-bottom: 6px;
      color: #000000;
    }

    .exam-box-text {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.50;
      color: #1a1a1a;
    }

    .exam-box-text p {
      margin-bottom: 4pt;
    }

    blockquote.standard-quote {
      margin: 10px 0;
      padding: 8px 12px;
      border-left: 3px solid #666666;
      background-color: #f7f7f7;
      font-size: 10.5pt;
      line-height: 1.48;
      border-radius: 0 2px 2px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    blockquote.standard-quote p {
      margin-bottom: 0;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      font-size: 9.5pt;
      line-height: 1.38;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    th, td {
      border: 0.75pt solid #333333;
      padding: 5pt 7pt;
      text-align: left;
      vertical-align: top;
    }

    th {
      background-color: #eaeaea !important;
      color: #000000;
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-weight: 700;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    tr:nth-child(even) td {
      background-color: #fafafa !important;
    }

    /* Inline & Display Code */
    pre, code {
      font-family: "Consolas", "Courier New", monospace;
    }

    code {
      font-size: 10pt;
      background-color: #f0f0f0;
      padding: 1px 4px;
      border: 0.5px solid #cccccc;
      border-radius: 2px;
      color: #111111;
    }

    pre {
      background-color: #f7f7f7 !important;
      border: 0.75pt solid #333333;
      border-radius: 2px;
      padding: 8pt 10pt;
      font-size: 9pt;
      line-height: 1.35;
      overflow-x: hidden;
      white-space: pre-wrap;
      word-break: break-all;
      break-inside: avoid;
      page-break-inside: avoid;
      margin: 10px 0;
    }

    pre code {
      background: none;
      border: none;
      padding: 0;
      font-size: 9pt;
    }

    /* Math formulas */
    .katex-display {
      margin: 8pt 0 !important;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    hr {
      border: none;
      border-top: 0.75px dashed #888888;
      margin: 18px 0;
    }
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${subjectTitle} — Master Study-Book Edition</title>
  <style>
    ${katexCss}
    ${printCss}
  </style>
</head>
<body>
  <header class="doc-masthead">
    <div class="doc-masthead-meta">
      <span>Mind of Aravalli • Reading Hub</span>
      <span>Canonical Knowledge Base</span>
      <span>Exam Learning System</span>
    </div>
    <div class="doc-masthead-title">${subjectTitle}</div>
    <div class="doc-masthead-sub">${category} • Master Study-Book Dossier (A4 Black & White Edition)</div>
    <div class="doc-masthead-bar">
      <span>High-Yield Invariants</span>
      <span>•</span>
      <span>Zero Source Omission</span>
      <span>•</span>
      <span>Audit-Verified Claims</span>
      <span>•</span>
      <span>Exam Trap Matrices</span>
    </div>
  </header>
  ${html}
</body>
</html>`;
}

// Update build-subject-print-pdfs.ts with this exact implementation
const scriptPath = path.resolve('scripts/build-subject-print-pdfs.ts');
let scriptCode = fs.readFileSync(scriptPath, 'utf-8');

// Replace the html generation and printCss in build-subject-print-pdfs.ts
fs.writeFileSync(path.resolve('scripts/study-book-builder.ts'), buildStudyBookHtml.toString(), 'utf-8');
console.log('Tested buildStudyBookHtml function structure.');
