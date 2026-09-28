import * as fs from 'fs';

const masterMd = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md', 'utf-8');
const lines = masterMd.split('\n');

const masterNotes: { num: number; title: string; line: number }[] = [];
for (let i = 0; i < lines.length; i++) {
  const match = lines[i].match(/^## (\d+)\.\s+(.*)/);
  if (match) {
    masterNotes.push({ num: parseInt(match[1]), title: match[2].trim(), line: i + 1 });
  }
}

console.log(`Found ${masterNotes.length} master notes in 05_Polity_Governance_Master.md:`);
masterNotes.forEach(n => console.log(`${n.num}. ${n.title} (line ${n.line})`));
