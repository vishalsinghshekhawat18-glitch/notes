import * as fs from 'fs';
import * as path from 'path';
import { PDFParse } from 'pdf-parse';

const pdfDir = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf';
const files = [
  'Mains-Current-Affairs-Polity(English).pdf',
  'Mains-Part-1-(English.pdf',
  'State-Polity-[English]-pdf.pdf',
  'Unit-7-State-Politics-(ENGLISH).pdf'
];

async function inspectPdfs() {
  for (const file of files) {
    const filePath = path.join(pdfDir, file);
    const dataBuffer = fs.readFileSync(filePath);
    try {
      const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
      const info = await parser.getInfo();
      const textRes = await parser.getText({ partial: [1, 2, 3, 4, 5] });
      console.log(`=== File: ${file} ===`);
      console.log(`Total Pages: ${info.total}`);
      console.log(`Title: ${info.info?.Title || 'N/A'}`);
      console.log(`Pages extracted: ${textRes.pages.length}`);
      console.log(`Sample Text from first pages:`);
      for (let i = 0; i < Math.min(3, textRes.pages.length); i++) {
        const p = textRes.pages[i];
        console.log(`--- Page ${i + 1} ---`);
        console.log(p.text.slice(0, 400));
      }
      await parser.destroy();
      console.log(`\n----------------------------------------\n`);
    } catch (err: any) {
      console.error(`Error parsing ${file}:`, err.message);
    }
  }
}

inspectPdfs();
