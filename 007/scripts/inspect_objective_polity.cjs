const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function inspectBook() {
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Objective_Indian_Polity_-_M_Laxmikant.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;
  console.log('Total pages array length:', pages.length);
  
  let headerText = '';
  // Inspect the first 35 pages (title, edition, contents)
  for (let i = 0; i < Math.min(35, pages.length); i++) {
    const pText = pages[i].text;
    headerText += '\n=== PAGE ' + (i + 1) + ' ===\n' + pText;
  }
  fs.writeFileSync('007/scripts/objective_polity_toc.txt', headerText);
  console.log('Saved inspection text to 007/scripts/objective_polity_toc.txt');
  
  // Sample a later page to see question style and structure
  if (pages.length > 50) {
    console.log('\n--- SAMPLE PAGE 50 ---');
    console.log(pages[50].text.slice(0, 1000));
  }
  if (pages.length > 100) {
    console.log('\n--- SAMPLE PAGE 100 ---');
    console.log(pages[100].text.slice(0, 1000));
  }
}

inspectBook().catch(console.error);
