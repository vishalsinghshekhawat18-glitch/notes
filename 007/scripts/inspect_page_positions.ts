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

  // Inspect page 10 (which is body page 6 of chapter 1)
  // and page 20 (which is body page 16, i.e. page 2 of chapter 2)
  for (const pageNum of [5, 6, 19, 20]) {
    const pageData = await parser.doc.getPage(pageNum);
    const textContent = await pageData.getTextContent();
    console.log(`\n=================== ITEMS ON PAGE ${pageNum} ===================`);
    for (const item of textContent.items) {
      // Check items near top (y > 780) or bottom (y < 80)
      const tx = item.transform; // [scaleX, skewY, skewX, scaleY, x, y]
      const x = tx[4];
      const y = tx[5];
      if (y < 80 || y > 780) {
        console.log(`Text: "${item.str.trim()}" at x=${x.toFixed(1)}, y=${y.toFixed(1)}`);
      }
    }
  }

  await parser.destroy();
}

main().catch(console.error);
