const fs = require('fs');
const path = require('path');

const summary = JSON.parse(fs.readFileSync('007/scripts/esi_analysis_summary.json', 'utf8'));

console.log(`TOTAL ESI COACHING PDFS ANALYZED: ${summary.length}\n`);

summary.forEach((item, i) => {
  console.log(`[${i + 1}] FILE: ${item.file}`);
  console.log(`    Size: ${item.sizeKB} KB | Words: ${item.words} | PYQs Included: ${item.hasPYQs ? 'YES' : 'NO'}`);
  console.log(`    Key Headings: ${item.previewHeadings.slice(0, 5).join(' | ')}`);
  console.log(`    Snippet: ${item.sampleText.slice(0, 150)}...`);
  console.log('');
});
