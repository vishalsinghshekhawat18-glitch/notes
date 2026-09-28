import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'English_Descriptive_Writing_Master.md');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
const items: { id: string; rawTitle: string; lineNo: number }[] = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('## ') && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents')) {
    // find item id within next 20 lines
    let id = '';
    for (let j = i; j < Math.min(i + 20, lines.length); j++) {
      if (lines[j].includes('- **Item ID:**')) {
        id = lines[j].replace(/.*- \*\*Item ID:\*\*\s*`?([^`\n]+)`?.*/, '$1').trim();
        break;
      }
    }
    items.push({ id, rawTitle: line.replace(/^##\s+/, '').trim(), lineNo: i + 1 });
  }
}

console.log(`Found ${items.length} sections in English.`);
items.forEach((it, i) => console.log(`${i + 1}. [L${it.lineNo}] ID: "${it.id}" | Title: "${it.rawTitle}"`));
