import * as fs from 'fs';

const content = fs.readFileSync('03_Indian_Economy_Macro_Master.md', 'utf8');
const lines = content.split('\n');
const chapters: string[] = [];

for (const line of lines) {
  if (line.startsWith('## ') && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents')) {
    chapters.push(line.replace(/^##\s+/, '').trim());
  }
}

console.log(`Total chapters found: ${chapters.length}`);
chapters.forEach((c, i) => console.log(`${i + 1}: ${c}`));
