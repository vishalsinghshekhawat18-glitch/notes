const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractPageImages() {
  const filePath = path.join(process.cwd(), '007', "PDF's", '_OceanofPDF.com_Vocab_prodigy_-_Nimisha_bansal.pdf');
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  console.log('Doc numPages:', doc.numPages);
  
  // Inspect metadata
  const meta = await doc.getMetadata();
  console.log('Metadata:', JSON.stringify(meta, null, 2));

  // Let's check textContent on first 10 pages in case pdf-parse missed it
  for (let i = 1; i <= 10; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const str = content.items.map(it => it.str).join(' ');
    console.log(`Page ${i} text length:`, str.trim().length, str.slice(0, 100));
  }
}

extractPageImages().catch(console.error);
