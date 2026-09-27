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

interface SubjectPdfConfig {
  sourceFile: string;
  outputPdfName: string;
  subjectTitle: string;
  category: string;
}

const subjectsToBuild: SubjectPdfConfig[] = [
  {
    sourceFile: '11_Computer_Aptitude_Banking_Master.md',
    outputPdfName: '01_Computer_Aptitude_Banking_A4_Print.pdf',
    subjectTitle: 'Computer Aptitude & Digital Banking Systems',
    category: 'Banking & Regulatory Examinations',
  },
  {
    sourceFile: '03_Indian_Economy_Macro_Master.md',
    outputPdfName: '02_Indian_Economy_Macro_A4_Print.pdf',
    subjectTitle: 'Indian Economy & Macroeconomics',
    category: 'Civil Services & Regulatory Bodies',
  },
  {
    sourceFile: '02_IIBF_Banking_Regulations_Master.md',
    outputPdfName: '03_IIBF_Banking_Regulations_A4_Print.pdf',
    subjectTitle: 'IIBF & Banking Regulations Framework',
    category: 'Banking Operations & Financial Law',
  },
  {
    sourceFile: '05_Polity_Governance_Master.md',
    outputPdfName: '04_Indian_Polity_Governance_A4_Print.pdf',
    subjectTitle: 'Indian Polity & Constitutional Governance',
    category: 'Civil Services & State Services',
  },
  {
    sourceFile: 'English_Descriptive_Writing_Master.md',
    outputPdfName: '05_English_Descriptive_Writing_A4_Print.pdf',
    subjectTitle: 'English Language & Descriptive Writing Suite',
    category: 'Mains Descriptive & Letter/Précis Drafting',
  },
  {
    sourceFile: 'History_Culture_Master.md',
    outputPdfName: '06_History_Art_Culture_A4_Print.pdf',
    subjectTitle: 'Indian & World History, Art & Architecture',
    category: 'General Studies Paper I',
  },
  {
    sourceFile: '08_Science_BioTech_Master.md',
    outputPdfName: '07_Science_BioTech_A4_Print.pdf',
    subjectTitle: 'General Science & Biotechnology Master Suite',
    category: 'Science, Technology & Innovation',
  },
  {
    sourceFile: '07_Geography_Environment_Master.md',
    outputPdfName: '08_Geography_Environment_A4_Print.pdf',
    subjectTitle: 'Geography, Climate Economics & Ecology',
    category: 'Physical & Human Geography',
  },
  {
    sourceFile: '09_Agriculture_Rural_Development_Master.md',
    outputPdfName: '09_Agriculture_Rural_Development_A4_Print.pdf',
    subjectTitle: 'Agriculture & Rural Development Architecture',
    category: 'NABARD & Rural Banking',
  },
  {
    sourceFile: 'Quant_Reasoning_Master.md',
    outputPdfName: '10_Quant_Reasoning_A4_Print.pdf',
    subjectTitle: 'Quantitative Aptitude & Logical Reasoning Master',
    category: 'Aptitude & Decision Making',
  },
  {
    sourceFile: '01_UPSC_APFC_EPFO_Master.md',
    outputPdfName: '11_UPSC_APFC_EPFO_Master_A4_Print.pdf',
    subjectTitle: 'UPSC APFC / EPFO Labour Laws & Social Security',
    category: 'Specialized Civil Service',
  },
  {
    sourceFile: 'Static_GA_Superbook_Master.md',
    outputPdfName: '12_Static_General_Awareness_A4_Print.pdf',
    subjectTitle: 'Static General Awareness Superbook',
    category: 'Banking & SSC Examination Vault',
  },
  {
    sourceFile: '10_Rapid_Revision_Traps_Master.md',
    outputPdfName: '13_Rapid_Revision_Traps_Master_A4_Print.pdf',
    subjectTitle: 'Rapid Revision & Examiner Trap Catalog',
    category: 'High-Yield Prelims Anchor',
  },
];

const printCss = `
  @page {
    size: A4 portrait;
    margin: 15mm 13mm 15mm 13mm;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Charter", "Georgia", "Cambria", "Times New Roman", serif;
    font-size: 9.5pt;
    line-height: 1.44;
    color: #0a0a0a;
    background: #ffffff;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Document Institutional Header */
  .doc-header-banner {
    border-bottom: 2pt solid #111111;
    padding-bottom: 8pt;
    margin-bottom: 16pt;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .doc-header-banner .brand {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 9pt;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #111111;
  }

  .doc-header-banner .meta {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 8pt;
    color: #444444;
    text-align: right;
  }

  /* Headings */
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 19pt;
    font-weight: 800;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 8pt;
    padding-bottom: 4pt;
    border-bottom: 1.5pt solid #111111;
    color: #000000;
    break-after: avoid;
    page-break-after: avoid;
  }

  h2 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 13.5pt;
    font-weight: 700;
    line-height: 1.25;
    margin-top: 20pt;
    margin-bottom: 8pt;
    padding-bottom: 3pt;
    border-bottom: 1.2pt solid #222222;
    color: #000000;
    break-before: page;
    page-break-before: always;
    break-after: avoid;
    page-break-after: avoid;
  }

  /* Never force page break before the very first H2 (Master Index / TOC) */
  h1 + h2, h2:first-of-type, .doc-header-banner + h1 + h2 {
    break-before: auto !important;
    page-break-before: auto !important;
    margin-top: 10pt;
  }

  h3 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 11pt;
    font-weight: 700;
    margin-top: 11pt;
    margin-bottom: 4pt;
    color: #111111;
    break-after: avoid;
    page-break-after: avoid;
  }

  h4 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 10pt;
    font-weight: 700;
    margin-top: 8pt;
    margin-bottom: 3pt;
    color: #222222;
    break-after: avoid;
    page-break-after: avoid;
  }

  p {
    margin-top: 0;
    margin-bottom: 5.5pt;
    text-align: justify;
    text-justify: inter-word;
    orphans: 3;
    widows: 3;
  }

  ul, ol {
    margin-top: 2pt;
    margin-bottom: 5.5pt;
    padding-left: 17pt;
  }

  li {
    margin-bottom: 2pt;
    orphans: 2;
    widows: 2;
  }

  strong, b {
    font-weight: 700;
    color: #000000;
  }

  /* Blockquotes & Exam Anchors */
  blockquote {
    margin: 6pt 0;
    padding: 5.5pt 9pt;
    border-left: 2.5pt solid #222222;
    background-color: #f7f7f7;
    font-size: 9pt;
    line-height: 1.4;
    border-radius: 0 3pt 3pt 0;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  blockquote p {
    margin-bottom: 0;
  }

  /* Tables - High legibility, crisp outlines, light halftone fill */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 7pt 0;
    font-size: 8.5pt;
    line-height: 1.32;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  th, td {
    border: 0.75pt solid #333333;
    padding: 4pt 5.5pt;
    text-align: left;
    vertical-align: top;
  }

  th {
    background-color: #eaeaea;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-weight: 700;
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  tr:nth-child(even) td {
    background-color: #fafafa;
  }

  /* Code blocks & ASCII Mindmaps */
  pre, code {
    font-family: "Consolas", "Courier New", monospace;
  }

  code {
    font-size: 8pt;
    background-color: #f2f2f2;
    padding: 0.5pt 2.5pt;
    border-radius: 2pt;
    border: 0.5pt solid #cccccc;
    color: #111111;
  }

  pre {
    background-color: #f7f7f7;
    border: 0.75pt solid #333333;
    border-radius: 2.5pt;
    padding: 5pt 7pt;
    font-size: 8pt;
    line-height: 1.28;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-break: break-all;
    break-inside: avoid;
    page-break-inside: avoid;
    margin: 5.5pt 0;
  }

  pre code {
    background: none;
    border: none;
    padding: 0;
  }

  /* Math display */
  .katex-display {
    margin: 5pt 0 !important;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  hr {
    border: none;
    border-top: 0.75pt dashed #666666;
    margin: 12pt 0;
  }
`;

async function buildAllPdfs() {
  const outDir = path.resolve('print_output');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const manifest: { file: string; title: string; pages: number; sizeKb: string }[] = [];

  console.log(`Starting Batch A4 B&W PDF generation for ${subjectsToBuild.length} subjects...`);

  for (const item of subjectsToBuild) {
    const srcPath = path.resolve(item.sourceFile);
    if (!fs.existsSync(srcPath)) {
      console.warn(`[SKIP] Source file not found: ${item.sourceFile}`);
      continue;
    }

    console.log(`\n======================================================`);
    console.log(`Processing: ${item.subjectTitle} (${item.sourceFile})`);
    console.log(`======================================================`);

    const rawMd = fs.readFileSync(srcPath, 'utf-8');
    const htmlContent = marked.parse(rawMd);

    const completeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${item.subjectTitle} — Master Notes (A4 Print Edition)</title>
  <style>
    ${katexCss}
    ${printCss}
  </style>
</head>
<body>
  <div class="doc-header-banner">
    <div class="brand">
      ▲ Mind of Aravalli • Reading Hub
    </div>
    <div class="meta">
      <strong>${item.subjectTitle}</strong><br>
      ${item.category} • A4 Black & White Master Print Edition
    </div>
  </div>
  ${htmlContent}
</body>
</html>`;

    const htmlPath = path.join(outDir, item.outputPdfName.replace('.pdf', '.html'));
    const pdfPath = path.join(outDir, item.outputPdfName);

    fs.writeFileSync(htmlPath, completeHtml, 'utf-8');

    // Run Edge print-to-pdf
    const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlPath}"`;
    try {
      execSync(cmd, { stdio: 'inherit' });
      const stats = fs.statSync(pdfPath);
      const content = fs.readFileSync(pdfPath, 'latin1');
      const pageMatches = content.match(/\/Type\s*\/Page\b/g);
      const pageCount = pageMatches ? pageMatches.length : 0;
      const sizeKb = (stats.size / 1024).toFixed(1);

      console.log(`✓ GENERATED: ${item.outputPdfName}`);
      console.log(`  Pages: ${pageCount} | Size: ${sizeKb} KB`);
      manifest.push({
        file: item.outputPdfName,
        title: item.subjectTitle,
        pages: pageCount,
        sizeKb: sizeKb + ' KB',
      });
    } catch (err: any) {
      console.error(`✗ Error generating PDF for ${item.subjectTitle}:`, err.message);
    }
  }

  console.log(`\n======================================================`);
  console.log(`ALL SUBJECT PDFS GENERATED SUCCESSFULLY!`);
  console.log(`Output Directory: ${outDir}`);
  console.table(manifest);
}

buildAllPdfs().catch(console.error);
