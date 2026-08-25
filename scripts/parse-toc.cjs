const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function parseTOC() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  
  console.log('=== PAGE 3 ===\n', textResult.pages[2].text);
  console.log('\n=== PAGE 4 ===\n', textResult.pages[3].text);
  console.log('\n=== PAGE 7 (FIRST CONTENT PAGE?) ===\n', textResult.pages[6].text.substring(0, 800));
  console.log('\n=== LAST PAGE (408) ===\n', textResult.pages[407].text.substring(0, 800));

  // Determine offset between printed page numbers and PDF page indices
  // Let's inspect page 7, 8, 9 to see where printed page 1 begins
  for (let p = 4; p < 12; p++) {
    console.log(`\n--- PDF PAGE ${p + 1} ---`);
    console.log(textResult.pages[p].text.substring(0, 300));
  }
}

parseTOC().catch(console.error);
