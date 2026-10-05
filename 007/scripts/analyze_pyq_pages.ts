import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function main() {
  const filePath = path.join(process.cwd(), '007', "PDF's", 'RPSC हिंदी ALL PYQ (2011 - 2025).pdf');
  const buffer = fs.readFileSync(filePath);

  const parser = new PDFParse({ data: buffer });
  await parser.load();
  const textResult = await parser.getText();

  console.log(`Analyzing ${textResult.pages.length} pages...`);

  let pagesWithText = 0;
  let pagesEmpty = 0;
  const pageStats: { page: number; len: number; preview: string }[] = [];

  textResult.pages.forEach((p: any) => {
    const cleanText = p.text.trim();
    if (cleanText.length > 20) {
      pagesWithText++;
    } else {
      pagesEmpty++;
    }
    if (cleanText.length > 0 && pageStats.length < 25) {
      pageStats.push({
        page: p.num,
        len: cleanText.length,
        preview: cleanText.slice(0, 100).replace(/\n/g, ' ')
      });
    }
  });

  console.log(`Pages with text (>20 chars): ${pagesWithText}`);
  console.log(`Pages empty / near-empty (<20 chars): ${pagesEmpty}`);
  console.log('\nFirst 20 non-empty pages preview:');
  console.table(pageStats);

  // Check some pages later in the PDF (e.g. page 10, 50, 100, 200, 300, 400)
  const sampleIndices = [6, 7, 8, 9, 10, 15, 20, 50, 100, 150, 200, 250, 300, 350, 400];
  console.log('\nSampling specific pages across the book:');
  for (const idx of sampleIndices) {
    if (idx <= textResult.pages.length) {
      const p = textResult.pages[idx - 1];
      console.log(`Page ${idx}: length=${p.text.trim().length}, text="${p.text.trim().slice(0, 80).replace(/\n/g, ' ')}"`);
    }
  }

  await parser.destroy();
}

main().catch(console.error);
