const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function findStart() {
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Environment_-_Shankar_IAS_Shankar.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages || [];
  console.log(`Total Pages: ${pages.length}`);

  for (let i = 0; i < Math.min(100, pages.length); i++) {
    const text = pages[i]?.text || '';
    if (text.toLowerCase().includes('ecology') || text.toLowerCase().includes('biodiversity') || text.toLowerCase().includes('content')) {
      const firstLine = text.trim().split('\n')[0] || '';
      console.log(`Page ${i + 1}: ${firstLine.slice(0, 100)}`);
    }
  }
}

findStart().catch(console.error);
