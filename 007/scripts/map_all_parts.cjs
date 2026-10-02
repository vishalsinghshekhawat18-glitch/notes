const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function mapParts() {
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Objective_Indian_Polity_-_M_Laxmikant.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;

  const partNames = [
    { id: 1, name: "CONSTITUTIONAL FRAMEWORK", pattern: /Part\s+(One|1)/i },
    { id: 2, name: "SYSTEM OF GOVERNMENT", pattern: /Part\s+(Two|2)/i },
    { id: 3, name: "CENTRAL GOVERNMENT", pattern: /Part\s+(Three|3)/i },
    { id: 4, name: "STATE GOVERNMENT", pattern: /Part\s+(Four|4)/i },
    { id: 5, name: "LOCAL GOVERNMENT", pattern: /Part\s+(Five|5)/i },
    { id: 6, name: "UNION TERRITORIES AND SPECIAL AREAS", pattern: /Part\s+(Six|6)/i },
    { id: 7, name: "CONSTITUTIONAL BODIES", pattern: /Part\s+(Seven|7)/i },
    { id: 8, name: "NON-CONSTITUTIONAL BODIES", pattern: /Part\s+(Eight|8)/i },
    { id: 9, name: "OTHER CONSTITUTIONAL DIMENSIONS", pattern: /Part\s+(Nine|9)/i },
    { id: 10, name: "POLITICAL DYNAMICS", pattern: /Part\s+(Ten|10)/i },
    { id: 11, name: "WORKING OF THE CONSTITUTION", pattern: /Part\s+(Eleven|11)/i },
    { id: 12, name: "APPENDICES", pattern: /Part\s+(Twelve|12)/i },
    { id: 13, name: "MODEL TEST PAPERS", pattern: /Part\s+(Thirteen|13)/i },
  ];

  const partMap = {};

  for (let i = 12; i < pages.length; i++) {
    const text = pages[i].text;
    for (const p of partNames) {
      if (p.pattern.test(text) && !partMap[p.id]) {
        partMap[p.id] = { id: p.id, name: p.name, startPage: i + 1 };
      }
    }
  }

  console.log("Part mapping:", JSON.stringify(partMap, null, 2));
  fs.writeFileSync('007/scripts/part_page_ranges.json', JSON.stringify(partMap, null, 2));
}

mapParts().catch(console.error);
