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

  console.log(`Total Pages: ${parser.doc.numPages}`);

  // Inspect first 10 pages and a few random body pages
  const samplePages = [1, 2, 3, 4, 5, 6, 18, 19, 46, 47, 80, 100, 150, 200, 250, 300, 319];

  for (const pageNum of samplePages) {
    if (pageNum > parser.doc.numPages) continue;
    const pageData = await parser.doc.getPage(pageNum);
    const textContent = await pageData.getTextContent();
    const strings = textContent.items.map((item: any) => item.str);
    const fullText = strings.join(' ');
    
    console.log(`\n=================== PAGE ${pageNum} ===================`);
    console.log(`First 300 chars: ${fullText.slice(0, 300)}`);
    console.log(`Last 200 chars: ${fullText.slice(-200)}`);

    // Check for artifacts
    const rawTags = fullText.match(/<[^>]+>|@@@|___/g);
    if (rawTags) {
      console.warn(`[WARNING] Page ${pageNum} has raw tags or markers:`, rawTags.slice(0, 5));
    }
  }

  await parser.destroy();
}

main().catch(console.error);
