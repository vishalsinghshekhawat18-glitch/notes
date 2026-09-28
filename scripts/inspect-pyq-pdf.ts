import * as fs from 'fs';
import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function inspectPyqPdf() {
  const filePath = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/State-Polity-English-(PYQ)-pdf.pdf';
  const dataBuffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const info = await parser.getInfo();
  console.log(`Total Pages: ${info.total}`);
  
  // Extract text from first 10 pages to see structure/index
  const textRes = await parser.getText({ partial: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
  console.log('--- Sample Text (First 10 pages) ---');
  for (let i = 0; i < textRes.pages.length; i++) {
    const p = textRes.pages[i];
    console.log(`\n=== PAGE ${i + 1} ===`);
    console.log(p.text.slice(0, 600));
  }

  // Also extract text from a middle page (e.g. page 20, 50)
  const midPages = [20, 30, 40].filter(n => n <= info.total);
  if (midPages.length > 0) {
    const midRes = await parser.getText({ partial: midPages });
    for (let j = 0; j < midRes.pages.length; j++) {
      const p = midRes.pages[j];
      console.log(`\n=== MID PAGE ${midPages[j]} ===`);
      console.log(p.text.slice(0, 600));
    }
  }

  await parser.destroy();
}

inspectPyqPdf();
