import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

export async function scanPdfForFlaws(pdfPath?: string) {
  const filePath = pdfPath || path.resolve('007', 'PRINT DESIGNER', '007_Book_01_Economics_Master_Codex_A4_BW.pdf');
  const data = fs.readFileSync(filePath);
  const parser = new PDFParse({ data });
  await (parser as any).load();
  const res = await parser.getText();
  console.log(`Scanning ${res.total} pages in ${filePath}...`);

  const forbidden = [
    '\\text{',
    '\\frac',
    '\\mathbf{',
    '\\ge',
    '\\le',
    '\\implies',
    '\\quad',
    '\\begin{',
    '\\end{',
    '\\operatorname',
    '\\mathrm',
    '\\times',
    '\\approx',
    '\\sum',
    '\\cdot',
    '\\left',
    '\\right',
    '\\sqrt',
  ];

  const malformedPatterns = [
    'Statutory minimum is (PSBs',
    'Tenor Year',
    'Headline − [Food +',
    'Headline - [Food +',
  ];

  let totalFlaws = 0;
  const flawSummary: { page: number; hits: string[]; sample: string }[] = [];

  for (let idx = 0; idx < res.pages.length; idx++) {
    const pageObj = res.pages[idx];
    const pageNum = idx + 1;
    const str = pageObj.text || '';

    const hits: string[] = [];
    for (const tok of forbidden) {
      if (str.includes(tok)) {
        hits.push(tok);
      }
    }

    for (const mal of malformedPatterns) {
      if (str.includes(mal)) {
        if (mal.includes('Food +') && str.includes('Fuel]')) {
          continue; // Complete formula, not truncated!
        }
        hits.push(`MALFORMED: "${mal}"`);
      }
    }

    // Check for raw unrendered math like $...$
    // Match dollar expressions that are NOT currency (e.g., $M_1$, $\mathbf{...}$, $P \uparrow$)
    const rawDollarMatches = str.match(/\$([a-zA-Z\\{][^\$\n]*?)\$/g);
    if (rawDollarMatches) {
      hits.push(`RAW_MATH_DOLLARS: ${rawDollarMatches.slice(0, 3).join(', ')}`);
    }

    if (hits.length > 0) {
      totalFlaws++;
      console.log(`\n======================================================`);
      console.log(`PAGE ${pageNum} (Physical) FLAW(S): ${hits.join(' | ')}`);
      let sample = '';
      for (const h of hits) {
        let needle = h;
        if (h.startsWith('MALFORMED: "')) {
          needle = h.replace('MALFORMED: "', '').replace('"', '');
        } else if (h.startsWith('RAW_MATH_DOLLARS: ')) {
          needle = '$';
        }
        const pos = str.indexOf(needle);
        if (pos !== -1) {
          const start = Math.max(0, pos - 60);
          const end = Math.min(str.length, pos + 100);
          const snippet = str.substring(start, end).replace(/\n/g, ' ');
          console.log(`  Context [${needle}]: ...${snippet}...`);
          if (!sample) sample = snippet;
        }
      }
      flawSummary.push({ page: pageNum, hits, sample });
    }
  }

  await parser.destroy();

  console.log(`\n======================================================`);
  console.log(`SCAN COMPLETE: Found ${totalFlaws} page(s) with raw LaTeX or malformed math out of ${res.total}.`);
  console.log(`======================================================`);

  return { totalFlaws, flawSummary };
}

if (process.argv[1] && process.argv[1].endsWith('scan_raw_latex_flaws.ts')) {
  scanPdfForFlaws().then(({ totalFlaws }) => {
    if (totalFlaws > 0) {
      console.error(`BUILD GATE: FAILED with ${totalFlaws} flawed pages.`);
      process.exit(1);
    } else {
      console.log(`BUILD GATE: PASSED with 0 raw LaTeX flaws.`);
      process.exit(0);
    }
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
}
