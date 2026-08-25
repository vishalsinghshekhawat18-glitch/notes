const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function deepScan() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  const pages = textResult.pages;

  console.log(`Total Pages Extracted: ${pages.length}`);

  let totalChars = 0;
  let pagesWithTables = 0;
  let pagesWithDiagrams = 0;
  let pagesWithPYQ = 0;
  let pagesWithExamTags = 0;
  let pagesWithMnemonics = 0;
  let pagesWithLatinOrQuotes = 0;
  let potentialQualityIssues = [];

  const topicDist = {};

  for (let i = 0; i < pages.length; i++) {
    const pageNum = i + 1;
    const text = pages[i].text;
    totalChars += text.length;

    // Detect structural modalities
    if (/table|column|vs\.|comparative chart/i.test(text) || (text.match(/│|\||\t/g) || []).length > 5) {
      pagesWithTables++;
    }
    if (/diagram|flowchart|hierarchy|tree|flow chart/i.test(text) || (text.match(/→|➔|↓|↑|↔/g) || []).length > 3) {
      pagesWithDiagrams++;
    }
    if (/pyq|upsc|rpsc|ras|prelims|mains|previous year/i.test(text)) {
      pagesWithPYQ++;
    }
    if (/ras \(pre\)|ras \(mains\)|psi|ist grade/i.test(text)) {
      pagesWithExamTags++;
    }
    if (/mnemonic|trick|short trick|remember|code word/i.test(text)) {
      pagesWithMnemonics++;
    }
    if (/quod|ultra vires|suo motu|ratio decidendi|obiter|habeas corpus|mandamus|certiorari|prohibition|quo warranto/i.test(text)) {
      pagesWithLatinOrQuotes++;
    }

    // Identify candidate source-quality issues or anomalies
    if (text.length < 50 && pageNum > 6 && pageNum < 408) {
      potentialQualityIssues.push({
        pageNum,
        type: 'LOW_TEXT_DENSITY',
        description: `Page has only ${text.length} characters (potential pure image, diagram, or scan failure).`
      });
    }

    if (/Article 31C/i.test(text) && !/Minerva Mills|Property Owners/i.test(text)) {
      // Check if page discusses 31C without judicial caveats
      if (text.includes('31C') || text.includes('31 C')) {
        potentialQualityIssues.push({
          pageNum,
          type: 'QUALIFICATION_NEEDED',
          description: 'Mentions Article 31C; requires verification against Minerva Mills (1980) and 2024 9-judge bench ruling.'
        });
      }
    }
  }

  const report = {
    totalPages: pages.length,
    totalCharacters: totalChars,
    avgCharsPerPage: Math.round(totalChars / pages.length),
    modalities: {
      pagesWithTables,
      pagesWithDiagrams,
      pagesWithPYQ,
      pagesWithExamTags,
      pagesWithMnemonics,
      pagesWithLatinOrQuotes
    },
    qualityIssuesCount: potentialQualityIssues.length,
    sampleIssues: potentialQualityIssues.slice(0, 10)
  };

  console.log('\n--- MULTI-MODAL & QUALITY DEEP SCAN RESULTS ---');
  console.log(JSON.stringify(report, null, 2));

  fs.writeFileSync(path.join(__dirname, 'deep-scan-report.json'), JSON.stringify(report, null, 2));
}

deepScan().catch(console.error);
