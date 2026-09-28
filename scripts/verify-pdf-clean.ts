import * as fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function verifyPdf() {
  const buf = fs.readFileSync('print_output/01_Computer_Aptitude_Banking_A4_Print.pdf');
  const parser = new PDFParse({ data: new Uint8Array(buf) });
  const textRes = await parser.getText();
  
  const hasMetadata = textRes.text.includes('Item ID:') || textRes.text.includes('comp-unit-2-generations-classification') || textRes.text.includes('Category / Section:');
  console.log(`01_Computer_Aptitude_Banking_A4_Print.pdf has metadata: ${hasMetadata}`);
  await parser.destroy();
}

verifyPdf().catch(console.error);
