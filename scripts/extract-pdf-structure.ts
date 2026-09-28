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

async function extractStructures() {
  const outDir = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const file of files) {
    console.log(`Processing ${file}...`);
    const filePath = path.join(pdfDir, file);
    const dataBuffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
    const info = await parser.getInfo();
    console.log(`${file}: ${info.total} total pages.`);

    // Extract all text
    const textRes = await parser.getText();
    
    // Save raw text
    const outTxtName = file.replace('.pdf', '.txt');
    fs.writeFileSync(path.join(outDir, outTxtName), textRes.text, 'utf-8');
    console.log(`Saved raw text to ${outTxtName} (${textRes.text.length} chars).`);

    // Let's also extract headings / outline patterns
    const lines = textRes.text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    // Filter lines that look like headings or topic titles
    const headings: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Match common patterns: numbering (1., 1.1, I, Chapter, Topic, etc.) or uppercase or short prominent strings
      if (
        /^(chapter|unit|topic|part)\s+\d+/i.test(line) ||
        /^[0-9]+[\.\)]\s+[A-Z]/.test(line) ||
        /^[I|V|X]+[\.\)]\s+[A-Z]/.test(line) ||
        /^INDEX/i.test(line) ||
        /^Table of Contents/i.test(line) ||
        (line.length < 60 && line.length > 4 && /^[A-Z0-9\s\:\-\,\(\)\.\/]+$/.test(line) && !line.includes('CERAMIC') && !line.includes('ONE STOP SOLUTION') && !line.includes('YOUTUBE'))
      ) {
        headings.push(line);
      }
    }
    fs.writeFileSync(path.join(outDir, file.replace('.pdf', '_headings.txt')), headings.join('\n'), 'utf-8');
    
    await parser.destroy();
  }
  console.log('Finished extraction.');
}

extractStructures();
