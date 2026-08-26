const fs = require('fs');
const path = require('path');

function analyzeBatchB() {
  const rawData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'batch-b-raw-text.json'), 'utf8')
  );

  console.log(`Analyzing ${rawData.length} pages of Batch B:\n`);

  rawData.forEach((page) => {
    console.log(`=======================================================`);
    console.log(`PDF Page ${page.pdfPage} (Printed Page ${page.printedPage})`);
    console.log(`=======================================================`);
    const lines = page.text
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    
    // Print all lines or first 25 lines
    lines.forEach((line, idx) => {
      console.log(`[L${idx + 1}] ${line}`);
    });
    console.log('\n');
  });
}

analyzeBatchB();
