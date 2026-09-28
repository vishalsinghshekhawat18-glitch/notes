import * as fs from 'fs';
import * as path from 'path';

const outDir = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text';

// 1. Get index of State-Polity-[English]-pdf.txt
const stateText = fs.readFileSync(path.join(outDir, 'State-Polity-[English]-pdf.txt'), 'utf-8');
const stateLines = stateText.split('\n');

console.log('--- State Polity Index (first 60 lines around INDEX) ---');
const idxPos = stateLines.findIndex(l => l.includes('INDEX'));
if (idxPos !== -1) {
  console.log(stateLines.slice(idxPos, idxPos + 40).join('\n'));
}

// 2. Get headings of Mains-Current-Affairs-Polity(English).txt
const caText = fs.readFileSync(path.join(outDir, 'Mains-Current-Affairs-Polity(English).txt'), 'utf-8');
const caLines = caText.split('\n');

console.log('\n--- Mains-Current-Affairs-Polity Topics ---');
// Let's find title of each topic. Usually starts on new pages or has prominent lines.
for (let i = 0; i < caLines.length; i++) {
  const line = caLines[i].trim();
  if (line.startsWith('-- ') && line.includes(' of 44 --')) {
    // next few lines contain topic title
    const nextFew = caLines.slice(i + 1, i + 6).map(l => l.trim()).filter(l => l.length > 0 && !l.includes('CERAMIC') && !l.includes('Youtube'));
    console.log(`[Page ${line}]:`, nextFew.slice(0, 2).join(' | '));
  }
}

// 3. Get Mains-Part-1 TOC / Structure
const p1Text = fs.readFileSync(path.join(outDir, 'Mains-Part-1-(English.txt'), 'utf-8');
const p1Lines = p1Text.split('\n');
console.log('\n--- Mains-Part-1 Topics ---');
const p1Idx = p1Lines.findIndex(l => l.includes('Index'));
if (p1Idx !== -1) {
  console.log(p1Lines.slice(p1Idx, p1Idx + 30).join('\n'));
}

// 4. Unit-7 TOC
const u7Text = fs.readFileSync(path.join(outDir, 'Unit-7-State-Politics-(ENGLISH).txt'), 'utf-8');
const u7Lines = u7Text.split('\n');
console.log('\n--- Unit-7 Topics ---');
for (let i = 0; i < u7Lines.length; i++) {
  const line = u7Lines[i].trim();
  if (line.startsWith('-- ') && line.includes(' of 39 --')) {
    const nextFew = u7Lines.slice(i + 1, i + 5).map(l => l.trim()).filter(l => l.length > 0 && !l.includes('CERAMIC') && !l.includes('Political Dynamics'));
    console.log(`[Page ${line}]:`, nextFew.slice(0, 2).join(' | '));
  }
}
