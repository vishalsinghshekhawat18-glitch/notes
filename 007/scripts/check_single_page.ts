import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function test() {
  const buf = fs.readFileSync('007/PRINT DESIGNER/007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  const parser = new PDFParse({ data: buf });
  await parser.load();
  for (let p = 5; p <= parser.doc.numPages; p++) {
    const pageData = await parser.doc.getPage(p);
    const textContent = await pageData.getTextContent();
    const bottomItems = textContent.items.filter((it: any) => it.transform[5] < 45 && it.str.trim().length > 0);
    const numItems = bottomItems.filter((it: any) => /^\d+$/.test(it.str.trim()));
    if (numItems.length >= 2) {
      console.log('Page', p, 'has bottom numbers:', numItems.map((n: any) => ({ str: n.str.trim(), x: n.transform[4], y: n.transform[5] })));
    }
  }
}
test().catch(console.error);
