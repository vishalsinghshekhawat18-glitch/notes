const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'topic-9-extracted.json'), 'utf8'));

console.log(`Analyzing ${pages.length} pages of Topic 9...`);

const semanticUnits = [];

pages.forEach((page) => {
  const text = page.fullText;
  const lines = page.lines;
  
  // Parse lines to detect coherent semantic chunks
  console.log(`\n--- Page ${page.printedPage} (PDF ${page.pdfPage}) --- Chars: ${page.charCount}`);
  const first5 = lines.slice(0, 5).join(' | ');
  console.log(`Headers: ${first5}`);
});
