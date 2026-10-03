const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function dumpPages() {
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Environment_-_Shankar_IAS_Shankar.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages || [];

  let out = '';
  for (let p = 35; p <= 52; p++) {
    out += `\n\n==================== PAGE ${p} ====================\n` + (pages[p - 1]?.text || '');
  }
  fs.writeFileSync('007/scripts/shankar_pages_35_52.txt', out);
  console.log('Saved to 007/scripts/shankar_pages_35_52.txt');
}

dumpPages().catch(console.error);
