import * as fs from 'fs';

const text = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text/State-Polity-English-(PYQ).txt', 'utf-8');
const lines = text.split('\n');

// Find lines containing "Answer Key" or tables of answers
console.log('Searching for Answer Keys...');
lines.forEach((l, idx) => {
  if (l.toLowerCase().includes('answer key') || (l.includes('1') && l.includes('A') && l.includes('B') && l.length < 50 && lines[idx-1]?.toLowerCase().includes('answer'))) {
    console.log(`L${idx}: ${l}`);
    console.log(lines.slice(Math.max(0, idx - 2), idx + 8).join('\n'));
    console.log('---');
  }
});
