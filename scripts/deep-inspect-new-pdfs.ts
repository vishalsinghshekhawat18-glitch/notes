import * as fs from 'fs';
import * as path from 'path';

const outDir = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text';

// 1. Check Unit-7 vs Mains-Part-1 Unit-7 exact comparison
const u7Text = fs.readFileSync(path.join(outDir, 'Unit-7-State-Politics-(ENGLISH).txt'), 'utf-8');
const p1Text = fs.readFileSync(path.join(outDir, 'Mains-Part-1-(English.txt'), 'utf-8');

// Check if Unit-7 text is identical to the first 32 pages of Mains-Part-1
const p1U7 = p1Text.split(/-- 33 of 170 --/)[0]; // roughly Unit 7
console.log(`Unit 7 length: ${u7Text.length}, P1 Unit 7 length: ${p1U7.length}`);

// 2. Extract all topics from Mains-Current-Affairs-Polity
const caText = fs.readFileSync(path.join(outDir, 'Mains-Current-Affairs-Polity(English).txt'), 'utf-8');
console.log('\n--- Mains CA Sections ---');
const caPages = caText.split(/-- \d+ of 44 --/);
caPages.forEach((page, idx) => {
  const lines = page.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.includes('CERAMIC') && !l.includes('ONE STOP') && !l.includes('Youtube'));
  if (lines.length > 0) {
    const titleCandidates = lines.filter(l => l.length < 80 && (l.includes('Deep Dive') || l.includes('Why') || /^[0-9]+\.\s+[A-Z]/.test(l) || /^[A-Z\s]{4,}$/.test(l) || l.includes('•')));
    console.log(`Page ${idx + 1}: ${lines[0]} | ${lines[1] || ''}`);
  }
});
