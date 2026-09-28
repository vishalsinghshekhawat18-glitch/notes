import * as fs from 'fs';

const rawTxt = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text/State-Polity-English-(PYQ).txt', 'utf-8');

// Normalize line endings
const lines = rawTxt.split(/\r?\n/).map(l => l.trim());

// Filter out header boilerplate
const cleanLines: string[] = [];
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (l.includes('CERAMIC ACADEMY') || l.includes('One Stop Solution For IAS') || l.match(/^-- \d+ of 75 --$/)) {
    continue;
  }
  cleanLines.push(l);
}

console.log(`Cleaned lines: ${cleanLines.length}`);
fs.writeFileSync('c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text/State-Polity-English-(PYQ)-clean.txt', cleanLines.join('\n'), 'utf-8');
console.log('Saved clean text.');
