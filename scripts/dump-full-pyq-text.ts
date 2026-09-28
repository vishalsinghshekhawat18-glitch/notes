import * as fs from 'fs';
import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function parseAllPyqs() {
  const filePath = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/State-Polity-English-(PYQ)-pdf.pdf';
  const dataBuffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const textRes = await parser.getText();
  
  console.log(`Extracted total characters: ${textRes.text.length}`);
  fs.writeFileSync('c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text/State-Polity-English-(PYQ).txt', textRes.text, 'utf-8');
  console.log('Saved raw PYQ text to extracted_text/State-Polity-English-(PYQ).txt');
  await parser.destroy();
}

parseAllPyqs();
