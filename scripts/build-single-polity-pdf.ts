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

const edgeExecutable = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.resolve('print_output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function buildPolityPdf() {
  const sourcePath = path.resolve('05_Polity_Governance_Master.md');
  const outPdf = path.join(outDir, '04_Indian_Polity_Governance_A4_Print.pdf');
  const tempHtml = path.join(outDir, 'temp_polity_print.html');

  console.log('Reading 05_Polity_Governance_Master.md...');
  const mdContent = fs.readFileSync(sourcePath, 'utf-8');
  let rawHtml = await marked.parse(mdContent);

  // Transform callout blockquotes into exam-angle-box
  rawHtml = rawHtml.replace(
    /<blockquote>\s*<p>(?:🎯|⚠️|🔥)\s*(?:<strong>)?(Exam Angle|Exam Anchor|Trap|Warning|Caution)(?:<\/strong>)?[:\s—\-]*([\s\S]*?)<\/p>\s*<\/blockquote>/gi,
    '<div class="exam-angle-box"><div class="exam-angle-header">🎯 EXAM ANGLE & TRAP PROTOCOL</div><div class="exam-angle-content">$2</div></div>'
  );

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Indian Polity & Constitutional Governance - Publication Master</title>
<style>
${katexCss}

@page {
  size: A4 portrait;
  margin: 18mm 18mm 20mm 18mm;
  @bottom-left {
    content: "Mind of Aravalli | Reading Hub — Canonical Indian Polity & Governance";
    font-family: Calibri, "Segoe UI", Arial, sans-serif;
    font-size: 8.5pt;
    color: #555555;
  }
  @bottom-right {
    content: "Page " counter(page);
    font-family: Calibri, "Segoe UI", Arial, sans-serif;
    font-size: 8.5pt;
    font-weight: 600;
    color: #111111;
  }
}

html, body {
  background-color: #ffffff;
  color: #1a1a1a;
  font-family: Calibri, "Segoe UI", Arial, sans-serif;
  font-size: 11.5pt;
  line-height: 1.55;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

strong, b {
  font-weight: 600 !important;
  color: #000000;
}

.document-masthead {
  border-top: 3px solid #000000;
  border-bottom: 1.5px solid #000000;
  padding: 18px 0 14px 0;
  margin-bottom: 24px;
  text-align: center;
}
.document-masthead .masthead-tagline {
  font-family: Calibri, "Segoe UI", Arial, sans-serif;
  font-size: 8.5pt;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #555555;
  margin-bottom: 6px;
  font-weight: 600;
}
.document-masthead h1 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 20pt;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #000000;
  margin: 0 0 6px 0;
  text-transform: uppercase;
}
.document-masthead .masthead-subtitle {
  font-family: Georgia, serif;
  font-size: 10.5pt;
  font-style: italic;
  color: #444444;
  margin-bottom: 12px;
}
.document-masthead .metadata-strip {
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
  border: 1px solid #000000;
  padding: 5px 14px;
  font-size: 9pt;
  font-weight: 600;
  color: #000000;
}

h2 {
  font-family: Georgia, serif;
  font-size: 13.5pt;
  font-weight: 700;
  color: #000000;
  background-color: #f4f4f4;
  border-left: 5px solid #000000;
  padding: 8px 12px;
  margin: 32px 0 16px 0;
  break-after: avoid;
  break-before: page;
}

h3 {
  font-family: Calibri, "Segoe UI", Arial, sans-serif;
  font-size: 12.5pt;
  font-weight: 700;
  color: #000000;
  margin: 20px 0 8px 0;
  border-bottom: 0.5px solid #cccccc;
  padding-bottom: 4px;
  break-after: avoid;
}

h4 {
  font-family: Calibri, "Segoe UI", Arial, sans-serif;
  font-size: 11.5pt;
  font-weight: 700;
  color: #111111;
  margin: 14px 0 6px 0;
  break-after: avoid;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 14px 0 18px 0;
  font-size: 9.5pt;
  line-height: 1.4;
  break-inside: auto;
}

tr {
  break-inside: avoid;
}

thead {
  display: table-header-group;
}

th {
  background-color: #f0f0f0;
  color: #000000;
  font-weight: 700;
  border: 1px solid #333333;
  padding: 6px 8px;
  text-align: left;
}

td {
  border: 1px solid #666666;
  padding: 5px 8px;
  vertical-align: top;
}

tbody tr:nth-child(even) {
  background-color: #fafafa;
}

.exam-angle-box {
  background-color: #fafafa;
  border: 1px solid #444444;
  border-left: 4px solid #000000;
  padding: 10px 14px;
  margin: 16px 0;
  break-inside: avoid;
}

.exam-angle-header {
  font-family: Calibri, sans-serif;
  font-size: 9pt;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 6px;
  border-bottom: 0.5px solid #888888;
  padding-bottom: 3px;
}

pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  border-left: 3px solid #000000;
  padding: 10px 12px;
  font-family: Consolas, "Courier New", monospace;
  font-size: 9pt;
  line-height: 1.35;
  white-space: pre-wrap;
  break-inside: avoid;
  margin: 14px 0;
}

code {
  font-family: Consolas, "Courier New", monospace;
  font-size: 9.5pt;
  background-color: #f2f2f2;
  padding: 1px 4px;
  border-radius: 2px;
}

p, ul, ol {
  margin: 0 0 10px 0;
}

li {
  margin-bottom: 4px;
}
</style>
</head>
<body>

<div class="document-masthead">
  <div class="masthead-tagline">MIND OF ARAVALLI &bull; READING HUB CANONICAL DOSSIER</div>
  <h1>Indian Polity & Constitutional Governance</h1>
  <div class="masthead-subtitle">Master Comprehensive Edition: Constitutional Law, 2024–2025 Case Jurisprudence, State Administration & Legal Frameworks</div>
  <div class="metadata-strip">
    <span>AUTHORITY: Banking Command Center & Doctoral Council</span>
    <span>TOTAL CHAPTERS: 59 MASTER UNITS</span>
    <span>PAGE FORMAT: A4 PRINT MONOCHROME</span>
  </div>
</div>

${rawHtml}

</body>
</html>`;

  fs.writeFileSync(tempHtml, fullHtml, 'utf-8');
  console.log(`Saved HTML to ${tempHtml}. Invoking Edge headless...`);

  const edgeCmd = `"${edgeExecutable}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPdf}" "${tempHtml}"`;
  execSync(edgeCmd, { stdio: 'inherit' });

  if (fs.existsSync(outPdf)) {
    const stats = fs.statSync(outPdf);
    console.log(`SUCCESS! Generated ${outPdf} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    if (fs.existsSync(tempHtml)) {
      fs.unlinkSync(tempHtml);
    }
  } else {
    console.error('PDF compilation failed.');
  }
}

buildPolityPdf();
