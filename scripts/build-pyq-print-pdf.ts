import * as fs from 'fs';
import * as path from 'path';
import { marked } from 'marked';
import { execSync } from 'child_process';

const edgeExecutable = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.resolve('print_output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function buildPyqPdf() {
  const sourcePath = path.resolve('Rajasthan_State_Polity_700_PYQ_Master.md');
  const outPdf = path.join(outDir, '04B_Rajasthan_State_Polity_700_PYQs_A4_Print.pdf');
  const tempHtml = path.join(outDir, 'temp_pyq_print.html');

  console.log('Reading Rajasthan_State_Polity_700_PYQ_Master.md...');
  const mdContent = fs.readFileSync(sourcePath, 'utf-8');
  const rawHtml = await marked.parse(mdContent);

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Rajasthan State Polity 700+ PYQ Master Workbook</title>
<style>
@page {
  size: A4 portrait;
  margin: 15mm 15mm 18mm 15mm;
  @bottom-left {
    content: "Mind of Aravalli | Reading Hub — Rajasthan State Polity 700+ PYQ Compendium";
    font-family: Calibri, "Segoe UI", Arial, sans-serif;
    font-size: 8pt;
    color: #555555;
  }
  @bottom-right {
    content: "Page " counter(page);
    font-family: Calibri, "Segoe UI", Arial, sans-serif;
    font-size: 8pt;
    font-weight: 600;
    color: #111111;
  }
}

html, body {
  background-color: #ffffff;
  color: #1a1a1a;
  font-family: Calibri, "Segoe UI", Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.45;
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
  padding: 16px 0 12px 0;
  margin-bottom: 20px;
  text-align: center;
}
.document-masthead .masthead-tagline {
  font-family: Calibri, "Segoe UI", Arial, sans-serif;
  font-size: 8pt;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #555555;
  margin-bottom: 4px;
  font-weight: 600;
}
.document-masthead h1 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18pt;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #000000;
  margin: 0 0 6px 0;
  text-transform: uppercase;
}
.document-masthead .masthead-subtitle {
  font-family: Georgia, serif;
  font-size: 10pt;
  font-style: italic;
  color: #444444;
  margin-bottom: 10px;
}
.document-masthead .metadata-strip {
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
  border: 1px solid #000000;
  padding: 4px 12px;
  font-size: 8.5pt;
  font-weight: 600;
  color: #000000;
}

h2 {
  font-family: Georgia, serif;
  font-size: 13pt;
  font-weight: 700;
  color: #000000;
  background-color: #f4f4f4;
  border-left: 5px solid #000000;
  padding: 6px 10px;
  margin: 26px 0 14px 0;
  break-after: avoid;
  break-before: page;
}

h3 {
  font-family: Calibri, "Segoe UI", Arial, sans-serif;
  font-size: 11.5pt;
  font-weight: 700;
  color: #000000;
  margin: 16px 0 8px 0;
  border-bottom: 0.5px solid #cccccc;
  padding-bottom: 3px;
  break-after: avoid;
}

pre {
  background-color: #f8f8f8;
  border: 1px solid #000000;
  padding: 8px 10px;
  font-family: Consolas, "Courier New", monospace;
  font-size: 9pt;
  line-height: 1.35;
  white-space: pre-wrap;
  break-inside: avoid;
  margin: 10px 0 16px 0;
}

code {
  font-family: Consolas, "Courier New", monospace;
  font-size: 9pt;
  background-color: #f0f0f0;
  padding: 1px 4px;
  border-radius: 2px;
  font-weight: 600;
  color: #222222;
}

p {
  margin: 0 0 8px 0;
  break-inside: avoid;
}

ul, ol {
  margin: 0 0 10px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 3px;
}

blockquote {
  border-left: 3px solid #666666;
  background-color: #fafafa;
  margin: 8px 0 12px 0;
  padding: 6px 12px;
  font-size: 9.5pt;
  color: #333333;
}
</style>
</head>
<body>

<div class="document-masthead">
  <div class="masthead-tagline">MIND OF ARAVALLI &bull; READING HUB SPECIALIZED EXAM SUITE</div>
  <h1>Rajasthan State Polity 700+ PYQ Master Workbook</h1>
  <div class="masthead-subtitle">Authentic RPSC Previous Years' Question Bank (RAS Pre, PSI, Asst. Professor, JLO, EO/RO, Lecturer 2013–2025)</div>
  <div class="metadata-strip">
    <span>SOURCE: 14 Categorized Modules</span>
    <span>TOTAL QUESTIONS: 700+ VERIFIED MCQs</span>
    <span>FORMAT: A4 PRINT MONOCHROME WORKBOOK</span>
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

buildPyqPdf();
