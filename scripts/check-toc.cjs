const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function checkTOC() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  
  for (let i = 0; i < 6; i++) {
    console.log(`\n================ TOC PAGE ${i + 1} ================`);
    console.log(textResult.pages[i].text);
  }
}

checkTOC().catch(console.error);
