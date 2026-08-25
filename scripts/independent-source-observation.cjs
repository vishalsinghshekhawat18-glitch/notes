const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function runIndependentObservation() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  const textResult = await parser.getText();
  const pages = textResult.pages;

  console.log('--- INDEPENDENT RAW SOURCE OBSERVATION: TOPIC 9 (PDF pp. 62 to 88) ---');
  
  const rawObservations = [];
  let obsCounter = 1;

  for (let p = 61; p <= 87; p++) {
    const pdfPage = p + 1;
    const printedPage = pdfPage - 6;
    const text = pages[p].text;
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

    console.log(`\n================== PDF PAGE ${pdfPage} (PRINTED PAGE ${printedPage}) ==================`);
    console.log(`Total lines: ${lines.length}, Total chars: ${text.length}`);
    
    // Scan the page lines to identify distinct coherent structures
    // (Headings, bold markers , sub-bullets , tables, case citations, questions)
    let currentBlock = [];
    let currentHeading = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Skip running header/footer
      if (line.includes('CERAMIC ACADEMY') || line === `${printedPage}` || line === 'Fundamental Rights') {
        continue;
      }
      currentBlock.push(line);
    }

    rawObservations.push({
      pdfPage,
      printedPage,
      lines: currentBlock,
      fullText: currentBlock.join('\n')
    });
  }

  fs.writeFileSync(path.join(__dirname, 'raw-observations-dump.json'), JSON.stringify(rawObservations, null, 2));
  console.log('\nSaved raw page dumps to scripts/raw-observations-dump.json');
}

runIndependentObservation().catch(console.error);
