import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function main() {
  const filePath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  const buffer = fs.readFileSync(filePath);

  const parser = new PDFParse({ data: buffer });
  await parser.load();

  console.log(`Scanning all ${parser.doc.numPages} pages for visual and structural flaws...`);

  let doublePageNumCount = 0;
  let headerWrapCount = 0;
  const sampleHeaderWraps: number[] = [];

  for (let p = 5; p <= parser.doc.numPages; p++) {
    const pageData = await parser.doc.getPage(p);
    const textContent = await pageData.getTextContent();
    const bottomItems = textContent.items.filter((it: any) => it.transform[5] < 45 && it.str.trim().length > 0);
    const topItems = textContent.items.filter((it: any) => it.transform[5] > 805 && it.str.trim().length > 0);

    // Check for double page numbers
    const numItems = bottomItems.filter((it: any) => /^\d+$/.test(it.str.trim()));
    if (numItems.length >= 2) {
      doublePageNumCount++;
    }

    // Check for multi-line top header
    const topYValues = new Set(topItems.map((it: any) => Math.round(it.transform[5])));
    if (topYValues.size >= 2) {
      headerWrapCount++;
      if (sampleHeaderWraps.length < 5) sampleHeaderWraps.push(p);
    }
  }

  console.log(`Pages with double stacked page numbers: ${doublePageNumCount} / ${parser.doc.numPages - 4}`);
  console.log(`Pages with broken/wrapping running headers: ${headerWrapCount} / ${parser.doc.numPages - 4}`);
  console.log(`Sample wrapping header pages:`, sampleHeaderWraps);

  await parser.destroy();
}

main().catch(console.error);
