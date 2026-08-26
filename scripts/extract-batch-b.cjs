const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function extractBatchB() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  
  console.log(`\n=== TOC (Pages 1 to 6) ===`);
  for (let i = 0; i < 6; i++) {
    console.log(`--- TOC Page ${i + 1} ---`);
    console.log(textResult.pages[i].text);
  }

  console.log('\n--- SCANNING PDF PAGES 40 to 65 ---');
  for (let i = 39; i < 65; i++) {
    console.log(`\n========================================`);
    console.log(`=== PDF PAGE ${i + 1} (Printed Page ~${i - 5}) ===`);
    console.log(`========================================`);
    console.log(textResult.pages[i].text.slice(0, 1500));
  }
}

extractBatchB().catch(console.error);
