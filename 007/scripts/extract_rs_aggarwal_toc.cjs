const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function getTOC() {
  console.log('Reading PDF buffer...');
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Quantitative_aptitude_-_RS_AGGARWAL.pdf");
  console.log('Parsing PDF...');
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;
  console.log('Total pages parsed:', pages ? pages.length : 'no pages array');

  let tocText = '';
  const limit = pages ? Math.min(30, pages.length) : 0;
  for (let i = 0; i < limit; i++) {
    const pText = pages[i].text;
    tocText += '\n=== PAGE ' + (i + 1) + ' ===\n' + pText;
  }
  fs.writeFileSync('007/scripts/rs_aggarwal_toc.txt', tocText);
  console.log('Saved TOC to 007/scripts/rs_aggarwal_toc.txt');
}

getTOC().catch(console.error);
