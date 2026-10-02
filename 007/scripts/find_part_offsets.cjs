const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function findPartOffsets() {
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Objective_Indian_Polity_-_M_Laxmikant.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;
  console.log('Total pages in PDF:', pages.length);

  const partKeywords = [
    "Part One", "Part Two", "Part Three", "Part Four", "Part Five",
    "Part Six", "Part Seven", "Part Eight", "Part Nine", "Part Ten",
    "Part Eleven", "Part Twelve", "Part Thirteen", "Model Test Paper – 1",
    "Model Test Paper – 2", "Model Test Paper – 5", "Model Test Paper – 10"
  ];

  const findings = [];

  for (let i = 0; i < pages.length; i++) {
    const text = pages[i].text;
    for (const kw of partKeywords) {
      if (new RegExp(kw, 'i').test(text)) {
        findings.push({ pageIndex: i + 1, keyword: kw, snippet: text.slice(0, 150).replace(/\n/g, ' ') });
      }
    }
  }

  fs.writeFileSync('007/scripts/part_locations.json', JSON.stringify(findings, null, 2));
  console.log('Saved findings count:', findings.length);
}

findPartOffsets().catch(console.error);
