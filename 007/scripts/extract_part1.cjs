const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function extractPart1() {
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Objective_Indian_Polity_-_M_Laxmikant.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;

  let part1Text = '';
  // Part 1 is roughly from page 15 to page 78
  for (let i = 14; i <= 78; i++) {
    part1Text += `\n--- [PDF PAGE ${i+1}] ---\n` + pages[i].text;
  }

  fs.writeFileSync('007/scripts/part1_extracted.txt', part1Text);
  console.log('Saved Part 1 text. Total length:', part1Text.length);
}

extractPart1().catch(console.error);
