const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function extractTopic9() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  const pages = textResult.pages;

  console.log('Extracting Topic 9: Fundamental Rights (PDF pp. 62 to 88, Printed pp. 56 to 82)...');
  
  const topic9Pages = [];
  for (let p = 61; p <= 87; p++) {
    const pageNum = p + 1;
    const printedPage = pageNum - 6;
    const text = pages[p].text;
    topic9Pages.push({
      pdfPage: pageNum,
      printedPage: printedPage,
      charCount: text.length,
      lines: text.split('\n').map(l => l.trim()).filter(Boolean),
      fullText: text
    });
  }

  fs.writeFileSync(path.join(__dirname, 'topic-9-extracted.json'), JSON.stringify(topic9Pages, null, 2));
  console.log(`Saved ${topic9Pages.length} pages of Topic 9 to scripts/topic-9-extracted.json`);
}

extractTopic9().catch(console.error);
