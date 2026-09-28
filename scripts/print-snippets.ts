import * as fs from 'fs';
import * as path from 'path';

const outDir = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text';
const caText = fs.readFileSync(path.join(outDir, 'Mains-Current-Affairs-Polity(English).txt'), 'utf-8');
const caPages = caText.split(/-- \d+ of 44 --/);

for (let i = 22; i < 44; i++) {
  const p = caPages[i] || '';
  const lines = p.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.includes('CERAMIC') && !l.includes('ONE STOP') && !l.includes('Polity Current Affairs'));
  console.log(`=== Page ${i + 1} ===`);
  console.log(lines.slice(0, 8).join('\n'));
}
