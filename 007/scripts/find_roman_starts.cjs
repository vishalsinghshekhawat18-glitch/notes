const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function findRomanStarts() {
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Objective_Indian_Polity_-_M_Laxmikant.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;

  const romanPrefixes = [
    { part: 1, prefix: "I." },
    { part: 2, prefix: "II." },
    { part: 3, prefix: "III." },
    { part: 4, prefix: "IV." },
    { part: 5, prefix: "V." },
    { part: 6, prefix: "VI." },
    { part: 7, prefix: "VII." },
    { part: 8, prefix: "VIII." },
    { part: 9, prefix: "IX." },
    { part: 10, prefix: "X." },
    { part: 11, prefix: "XI." },
    { part: 12, prefix: "XII." },
    { part: 13, prefix: "XIII." },
  ];

  const partStarts = {};

  for (let i = 12; i < pages.length; i++) {
    const text = pages[i].text;
    for (const r of romanPrefixes) {
      if (!partStarts[r.part]) {
        const regex = new RegExp(`(?:${r.prefix}\\d+)`, 'i');
        if (regex.test(text)) {
          partStarts[r.part] = { part: r.part, pageIndex: i + 1, snippet: text.slice(0, 100).replace(/\n/g, ' ') };
        }
      }
    }
  }

  console.log("Detected Part Starts:", JSON.stringify(partStarts, null, 2));
}

findRomanStarts().catch(console.error);
