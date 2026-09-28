import * as fs from 'fs';
import * as path from 'path';

const outDir = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text';

// Check Mains-Current-Affairs pages 22-44
const caText = fs.readFileSync(path.join(outDir, 'Mains-Current-Affairs-Polity(English).txt'), 'utf-8');
const caPages = caText.split(/-- \d+ of 44 --/);
console.log(`Mains CA pages count: ${caPages.length}`);
for (let i = 21; i < Math.min(caPages.length, 44); i++) {
  const pLines = caPages[i].trim().split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.includes('CERAMIC') && !l.includes('Polity Current Affairs'));
  console.log(`Page ${i + 1}: ${pLines.slice(0, 3).join(' // ')}`);
}

// Compare Unit-7 text vs Mains-Part-1 pages 2-32
const u7Text = fs.readFileSync(path.join(outDir, 'Unit-7-State-Politics-(ENGLISH).txt'), 'utf-8');
const p1Text = fs.readFileSync(path.join(outDir, 'Mains-Part-1-(English.txt'), 'utf-8');

console.log('\n--- Comparing Unit-7 vs Mains-Part-1 ---');
console.log(`Unit-7 length: ${u7Text.length}, Mains-Part-1 length: ${p1Text.length}`);
console.log(`Unit-7 first 300 chars:\n${u7Text.slice(0, 300)}`);
