const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function extractBatchB() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  
  console.log(`Total pages in PDF: ${textResult.pages.length}`);
  
  // Extract PDF pages 41 to 61 (0-indexed 40 to 60)
  const batchBPages = [];
  for (let i = 40; i <= 60; i++) {
    batchBPages.push({
      pdfPage: i + 1,
      printedPage: i - 5, // printed page number in book
      text: textResult.pages[i].text
    });
  }

  fs.writeFileSync(
    path.join(__dirname, 'batch-b-raw-text.json'),
    JSON.stringify(batchBPages, null, 2)
  );

  console.log('Saved batch-b-raw-text.json (PDF pages 41 to 61, 21 physical pages).');
  
  // Print breakdown
  console.log('\n--- TOPIC BREAKDOWN IN BATCH B ---');
  console.log('Topic 5 (Union & Territory, Arts 1-4, PDF 41-44):', batchBPages.slice(0, 4).map(p => `p.${p.pdfPage} (printed p.${p.printedPage})`).join(', '));
  console.log('Topic 6 (Unification of India, PDF 45-48):', batchBPages.slice(4, 8).map(p => `p.${p.pdfPage} (printed p.${p.printedPage})`).join(', '));
  console.log('Topic 7 (Reorganisation of States, PDF 49-53):', batchBPages.slice(8, 13).map(p => `p.${p.pdfPage} (printed p.${p.printedPage})`).join(', '));
  console.log('Topic 8 (Citizenship, Arts 5-11, PDF 54-61):', batchBPages.slice(13, 21).map(p => `p.${p.pdfPage} (printed p.${p.printedPage})`).join(', '));
}

extractBatchB().catch(console.error);
