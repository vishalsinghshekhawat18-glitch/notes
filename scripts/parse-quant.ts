import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'Quant_Reasoning_Master.md');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
const items: { id: string; rawTitle: string; content: string[] }[] = [];

let currentItem: { id: string; rawTitle: string; content: string[] } | null = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('## ') && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents') && !line.startsWith('## Volume')) {
    if (currentItem) {
      items.push(currentItem);
    }
    const rawTitle = line.replace(/^##\s+/, '').trim();
    currentItem = { id: '', rawTitle, content: [] };
  } else if (currentItem) {
    if (line.includes('- **Item ID:**')) {
      currentItem.id = line.replace(/.*- \*\*Item ID:\*\*\s*`?([^`\n]+)`?.*/, '$1').trim();
    }
    currentItem.content.push(line);
  }
}
if (currentItem) {
  items.push(currentItem);
}

console.log(`Parsed ${items.length} items from Quant.`);
items.forEach(it => console.log(`ID: ${it.id} | Title: ${it.rawTitle}`));
