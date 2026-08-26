const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function extractBatchA() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  
  console.log(`Total pages parsed: ${textResult.pages.length}`);
  
  // Extract pages 7 to 40 (0-indexed 6 to 39)
  const batchAPages = [];
  for (let i = 6; i < 40; i++) {
    batchAPages.push({
      pdfPage: i + 1,
      printedPage: i - 5, // approx printed page
      text: textResult.pages[i].text
    });
  }

  fs.writeFileSync(
    path.join(__dirname, 'batch-a-raw-text.json'),
    JSON.stringify(batchAPages, null, 2)
  );

  console.log('Saved batch-a-raw-text.json (PDF pages 7 to 40).');
  
  // Print summary per topic
  console.log('\n--- TOPIC SUMMARY ---');
  console.log('Topic 1 (Basic Concepts, PDF 7-9):', batchAPages.slice(0, 3).map(p => `p.${p.pdfPage} (${p.text.length} chars)`).join(', '));
  console.log('Topic 2 (Constituent Assembly, PDF 10-19):', batchAPages.slice(3, 13).map(p => `p.${p.pdfPage} (${p.text.length} chars)`).join(', '));
  console.log('Topic 3 (Preamble, PDF 20-33):', batchAPages.slice(13, 27).map(p => `p.${p.pdfPage} (${p.text.length} chars)`).join(', '));
  console.log('Topic 4 (Schedules, PDF 34-40):', batchAPages.slice(27, 34).map(p => `p.${p.pdfPage} (${p.text.length} chars)`).join(', '));
}

extractBatchA().catch(console.error);
