import * as fs from 'fs';

const content = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/03_Indian_Economy_Macro_Master.md', 'utf-8');
const regex = /^## (\d+)\.\s+(.*)$/gm;
let match;
const chapters: { num: number; title: string }[] = [];
while ((match = regex.exec(content)) !== null) {
  chapters.push({ num: parseInt(match[1]), title: match[2].trim() });
}

console.log(`Found ${chapters.length} chapters in 03_Indian_Economy_Macro_Master.md:`);
chapters.forEach(c => console.log(`${c.num}. ${c.title}`));
