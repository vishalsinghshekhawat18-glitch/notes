import * as fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function inspectPages() {
  const buf = fs.readFileSync('print_output/01_Computer_Aptitude_Banking_A4_Print.pdf');
  const parser = new PDFParse({ data: new Uint8Array(buf) });
  const textRes = await parser.getText();
  
  console.log(`Total Pages: ${textRes.pages.length}`);
  for (let i = 0; i < Math.min(10, textRes.pages.length); i++) {
    const p = textRes.pages[i];
    const firstLine = p.text.trim().split('\n')[0] || '';
    const lastLine = p.text.trim().split('\n').slice(-2).join(' | ');
    const charCount = p.text.trim().length;
    console.log(`Page ${i + 1}: chars=${charCount} | First: "${firstLine.slice(0, 60)}" | Last: "${lastLine.slice(0, 60)}"`);
  }
  await parser.destroy();
}

inspectPages().catch(console.error);
