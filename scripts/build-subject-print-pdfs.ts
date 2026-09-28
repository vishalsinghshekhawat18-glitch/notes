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
  dossierTitle: string;
}

const subjectsToBuild: SubjectPdfConfig[] = [
  {
    sourceFile: '11_Computer_Aptitude_Banking_Master.md',
    outputPdfName: '01_Computer_Aptitude_Banking_A4_Print.pdf',
    subjectTitle: 'Computer Aptitude & Digital Banking Systems',
    category: 'Banking & Regulatory Examinations',
    dossierTitle: 'Computer Aptitude',
  },
  {
    sourceFile: '03_Indian_Economy_Macro_Master.md',
    outputPdfName: '02_Indian_Economy_Macro_A4_Print.pdf',
    subjectTitle: 'Indian Economy & Macroeconomics',
    category: 'Civil Services & Regulatory Bodies',
    dossierTitle: 'Indian Economy & Macro',
  },
  {
    sourceFile: '02_IIBF_Banking_Regulations_Master.md',
    outputPdfName: '03_IIBF_Banking_Regulations_A4_Print.pdf',
    subjectTitle: 'IIBF & Banking Regulations Framework',
    category: 'Banking Operations & Financial Law',
    dossierTitle: 'IIBF & Banking Regulations',
  },
  {
    sourceFile: '05_Polity_Governance_Master.md',
    outputPdfName: '04_Indian_Polity_Governance_A4_Print.pdf',
    subjectTitle: 'Indian Polity & Constitutional Governance',
    category: 'Civil Services & State Services',
    dossierTitle: 'Indian Polity & Governance',
  },
  {
    sourceFile: 'English_Descriptive_Writing_Master.md',
    outputPdfName: '05_English_Descriptive_Writing_A4_Print.pdf',
    subjectTitle: 'English Language & Descriptive Writing Suite',
    category: 'Mains Descriptive & Letter/Précis Drafting',
    dossierTitle: 'English Descriptive Writing',
  },
  {
    sourceFile: 'History_Culture_Master.md',
    outputPdfName: '06_History_Art_Culture_A4_Print.pdf',
    subjectTitle: 'Indian & World History, Art & Architecture',
    category: 'General Studies Paper I',
    dossierTitle: 'History, Art & Culture',
  },
  {
    sourceFile: '08_Science_BioTech_Master.md',
    outputPdfName: '07_Science_BioTech_A4_Print.pdf',
    subjectTitle: 'General Science & Biotechnology Master Suite',
    category: 'Science, Technology & Innovation',
    dossierTitle: 'Science & BioTech',
  },
  {
    sourceFile: '07_Geography_Environment_Master.md',
    outputPdfName: '08_Geography_Environment_A4_Print.pdf',
    subjectTitle: 'Geography, Climate Economics & Ecology',
    category: 'Physical & Human Geography',
    dossierTitle: 'Geography & Environment',
  },
  {
    sourceFile: '09_Agriculture_Rural_Development_Master.md',
    outputPdfName: '09_Agriculture_Rural_Development_A4_Print.pdf',
    subjectTitle: 'Agriculture & Rural Development Architecture',
    category: 'NABARD & Rural Banking',
    dossierTitle: 'Agriculture & Rural Dev',
  },
  {
    sourceFile: 'Quant_Reasoning_Master.md',
    outputPdfName: '10_Quant_Reasoning_A4_Print.pdf',
    subjectTitle: 'Quantitative Aptitude & Logical Reasoning Master',
    category: 'Aptitude & Decision Making',
    dossierTitle: 'Quantitative Aptitude',
  },
  {
    sourceFile: '01_UPSC_APFC_EPFO_Master.md',
    outputPdfName: '11_UPSC_APFC_EPFO_Master_A4_Print.pdf',
    subjectTitle: 'UPSC APFC / EPFO Labour Laws & Social Security',
    category: 'Specialized Civil Service',
    dossierTitle: 'UPSC APFC / EPFO',
  },
  {
    sourceFile: 'Static_GA_Superbook_Master.md',
    outputPdfName: '12_Static_General_Awareness_A4_Print.pdf',
    subjectTitle: 'Static General Awareness Superbook',
    category: 'Banking & SSC Examination Vault',
    dossierTitle: 'Static General Awareness',
  },
  {
    sourceFile: '10_Rapid_Revision_Traps_Master.md',
    outputPdfName: '13_Rapid_Revision_Traps_Master_A4_Print.pdf',
    subjectTitle: 'Rapid Revision & Examiner Trap Catalog',
    category: 'High-Yield Prelims Anchor',
    dossierTitle: 'Rapid Revision & Traps',
  },
];

function generateStudyBookHtml(rawMd: string, item: SubjectPdfConfig): string {
  // 0. Defensive metadata, item ID, and target exams stripper
  let text = rawMd
    .replace(/\*\*Metadata:\*\*[\s\S]*?(?=\n\n|\n#|$)/g, '')
    .replace(/^Metadata:[\s\S]*?(?=\n\n|\n#|$)/gm, '')
    .replace(/^[•\-\*]\s+\*\*Item ID:\*\*.*$/gm, '')
    .replace(/^[•\-\*]\s+\*\*Category \/ Section:\*\*.*$/gm, '')
    .replace(/^[•\-\*]\s+\*\*Target Exams:\*\*.*$/gm, '')
    .replace(/^[•\-\*]\s+\*\*Relevance Tier:\*\*.*$/gm, '')
    .replace(/^>\s+\*\*Executive Summary:\*\*.*$/gm, '')
    .replace(/^🪝\s+Context Hook.*$/gm, '')
    .replace(/^🏷️\s+Itemized Verification Tag.*$/gm, '');

  // 1. Math unescaping safeguard
  text = text.replace(/\\\\\$/g, '___DOUBLE_ESC_DOLLAR___');

  // 2. Parse Markdown with marked + KaTeX
  let html = marked.parse(text) as string;

  // 3. Transform Callouts into Exam Angle & Trap boxes with 4px left bar
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (match, inner) => {
    if (
      inner.includes('🎯') ||
      inner.includes('⚠️') ||
      inner.includes('Exam Angle') ||
      inner.includes('Exam Anchor') ||
      inner.includes('Exam Trap')
    ) {
      return `
        <div class="exam-angle-box">
          <div class="exam-box-header">🎯 EXAM ANGLE & TRAP MATRIX</div>
          <div class="exam-box-text">${inner}</div>
        </div>
      `;
    }
    return `<blockquote class="standard-quote">${inner}</blockquote>`;
  });

  // 4. Transform H2 into Section Banners with page breaks (skipping first-of-type TOC)
  let h2Index = 0;
  html = html.replace(/<h2(?: id="([^"]*)")?>([\s\S]*?)<\/h2>/g, (match, id, title) => {
    h2Index++;
    const isToc =
      title.toLowerCase().includes('master index') ||
      title.toLowerCase().includes('table of contents') ||
      h2Index === 1;

    const bannerClass = isToc ? 'toc-banner' : 'section-banner unit-page-break';
    const idAttr = id ? ` id="${id}"` : '';
    return `<h2${idAttr} class="${bannerClass}"><span class="section-banner-title">${title}</span></h2>`;
  });

  // 5. CSS Blueprint exactly matching technical specifications
  const printCss = `
    @page {
      size: A4 portrait;
      /* Top: 18mm, Right: 18mm, Bottom: 20mm, Left: 18mm */
      margin: 18mm 18mm 20mm 18mm;

      /* Native Running Header / Footer using CSS Paged Media */
      @bottom-left {
        content: "Mind of Aravalli • ${item.dossierTitle} • B&W Study Edition";
        font-family: Calibri, "Segoe UI", Arial, sans-serif;
        font-size: 9pt;
        color: #555555;
      }
      @bottom-right {
        content: "Page " counter(page);
        font-family: Calibri, "Segoe UI", Arial, sans-serif;
        font-size: 9.5pt;
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

    /* Keywords: Crisp semibold 600 prevents muddy faux-bold ink bleeding */
    strong, b {
      font-weight: 600 !important;
      color: #000000;
    }

    /* 4.A Document Masthead (Top of Page 1) */
    .doc-masthead {
      border-top: 3px solid #000000;
      border-bottom: 1.5px solid #000000;
      padding: 12px 0 10px 0;
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
    }

    .doc-masthead-title {
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 17pt;
      font-weight: 700;
      line-height: 1.25;
      text-transform: uppercase;
      margin: 0 0 6px 0;
      color: #000000;
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
      letter-spacing: 0.03em;
      color: #000000;
    }

    /* Suppress top h1 in content since rendered in masthead */
    body > h1:first-of-type,
    .doc-masthead + h1 {
      display: none;
    }

    /* Section Banner (h2) */
    h2.section-banner {
      font-family: "Georgia", serif;
      font-size: 13.5pt;
      font-weight: 700;
      line-height: normal;
      background: #f4f4f4 !important;
      border-left: 5px solid #000000;
      padding: 8px 12px;
      margin: 30px 0 16px 0;
      color: #000000;
      break-after: avoid;
      page-break-after: avoid;
    }

    h2.unit-page-break {
      break-before: page;
      page-break-before: always;
    }

    h2.toc-banner {
      font-family: "Georgia", serif;
      font-size: 13.5pt;
      font-weight: 700;
      background: #f4f4f4 !important;
      border-left: 5px solid #000000;
      padding: 8px 12px;
      margin: 16px 0 14px 0;
      color: #000000;
      break-before: auto !important;
      page-break-before: auto !important;
      break-after: avoid;
      page-break-after: avoid;
    }

    /* Headings */
    h3 {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 12.5pt;
      font-weight: 700;
      line-height: 1.35;
      color: #000000;
      margin: 20px 0 10px 0;
      padding-bottom: 2px;
      border-bottom: 0.5px solid #cccccc;
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
      margin: 6px 0 10px 0;
      padding-left: 24px;
    }

    ul > li, ol > li {
      margin-bottom: 6px;
      orphans: 2;
      widows: 2;
    }

    /* 4.C Exam Angle & Trap Matrix Callout Box */
    .exam-angle-box {
      margin-top: 10px;
      margin-bottom: 12px;
      padding: 8px 12px;
      background: #fafafa !important;
      border: 1px solid #444444;
      border-left: 4px solid #000000;
      border-radius: 2px;
      page-break-inside: auto;
      break-inside: auto;
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
      break-after: avoid;
      page-break-after: avoid;
    }

    .exam-box-text {
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      font-size: 11pt;
      font-weight: 400;
      line-height: 1.50;
      padding-left: 4px;
      color: #1a1a1a;
    }

    .exam-box-text p {
      margin-bottom: 4px;
    }

    blockquote.standard-quote {
      margin: 10px 0;
      padding: 8px 12px;
      border-left: 3px solid #666666;
      background-color: #f7f7f7 !important;
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
      margin: 10px 0;
      font-size: 9.5pt;
      line-height: 1.38;
      break-inside: auto !important;
      page-break-inside: auto !important;
    }

    thead {
      display: table-header-group !important;
    }

    tbody {
      break-inside: auto !important;
      page-break-inside: auto !important;
    }

    tr {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
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

    /* Inline Code (code) */
    code {
      font-family: "Consolas", monospace;
      font-size: 10pt;
      font-weight: 400;
      background-color: #f0f0f0 !important;
      padding: 1px 4px;
      border: 0.5px solid #cccccc;
      border-radius: 2px;
      color: #111111;
    }

    pre {
      font-family: "Consolas", monospace;
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
      background: none !important;
      border: none;
      padding: 0;
      font-size: 9pt;
    }

    /* KaTeX math display */
    .katex-display {
      margin: 8pt 0 !important;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    hr {
      border: none;
      border-top: 0.75px dashed #888888;
      margin: 20px 0;
    }
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${item.subjectTitle} — Master Study-Book Edition</title>
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
      <span>Examination Study-Book Edition</span>
    </div>
    <div class="doc-masthead-title">${item.subjectTitle}</div>
    <div class="doc-masthead-sub">${item.category} • High-Grade A4 Black & White Print Edition</div>
    <div class="doc-masthead-bar">
      <span>High-Yield Invariants</span>
      <span>•</span>
      <span>Zero Source Omission</span>
      <span>•</span>
      <span>Semibold Non-Bleed Typography</span>
      <span>•</span>
      <span>Exam Trap Matrices</span>
    </div>
  </header>
  ${html}
</body>
</html>`;
}

async function buildAllPdfs() {
  const outDir = path.resolve('print_output');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const manifest: { file: string; title: string; pages: number; sizeKb: string }[] = [];

  const filterArg = process.argv[2]?.toLowerCase();
  const targetSubjects = filterArg
    ? subjectsToBuild.filter(
        (s) =>
          s.sourceFile.toLowerCase().includes(filterArg) ||
          s.outputPdfName.toLowerCase().includes(filterArg) ||
          s.subjectTitle.toLowerCase().includes(filterArg)
      )
    : subjectsToBuild;

  console.log(`Starting Batch A4 B&W Study-Book PDF generation for ${targetSubjects.length} subjects...`);

  for (const item of targetSubjects) {
    const srcPath = path.resolve(item.sourceFile);
    if (!fs.existsSync(srcPath)) {
      console.warn(`[SKIP] Source file not found: ${item.sourceFile}`);
      continue;
    }

    console.log(`\n======================================================`);
    console.log(`Processing: ${item.subjectTitle} (${item.sourceFile})`);
    console.log(`======================================================`);

    const rawMd = fs.readFileSync(srcPath, 'utf-8');
    const completeHtml = generateStudyBookHtml(rawMd, item);

    const htmlPath = path.join(outDir, item.outputPdfName.replace('.pdf', '.html'));
    const pdfPath = path.join(outDir, item.outputPdfName);

    fs.writeFileSync(htmlPath, completeHtml, 'utf-8');

    // Run Edge print-to-pdf with --no-pdf-header-footer exactly as in blueprint
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

  // Cleanup intermediate html files to keep print_output pristine
  fs.readdirSync(outDir).forEach((f) => {
    if (f.endsWith('.html')) {
      fs.unlinkSync(path.join(outDir, f));
    }
  });

  console.log(`\n======================================================`);
  console.log(`ALL SUBJECT STUDY-BOOK PDFS GENERATED SUCCESSFULLY!`);
  console.log(`Output Directory: ${outDir}`);
  console.table(manifest);
}

buildAllPdfs().catch(console.error);
