const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function getTOC() {
  const buf = fs.readFileSync('007/PDF\'s/_OceanofPDF.com_Indian_Polity_8th_edition_-_M_Laxmikanth.pdf');
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;
  console.log('Total pages array length:', pages.length);
  
  let tocText = '';
  // Usually TOC is in the first 45 pages
  for (let i = 0; i < Math.min(45, pages.length); i++) {
    const pText = pages[i].text;
    tocText += '\n=== PAGE ' + (i + 1) + ' ===\n' + pText;
  }
  fs.writeFileSync('007/scripts/laxmikanth_8e_toc.txt', tocText);
  console.log('Saved TOC text to 007/scripts/laxmikanth_8e_toc.txt');
}

getTOC().catch(console.error);
