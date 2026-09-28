import * as fs from 'fs';

const content = fs.readFileSync('07_Geography_Environment_Master.md', 'utf8');
const lines = content.split('\n');
const chapters: string[] = [];

for (const line of lines) {
  if (line.startsWith('## ') && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents') && !line.startsWith('## Volume')) {
    chapters.push(line.replace(/^##\s+/, '').trim());
  }
}

console.log(`Geography chapters: ${chapters.length}`);
chapters.forEach((c, i) => console.log(`${i + 1}: ${c}`));
