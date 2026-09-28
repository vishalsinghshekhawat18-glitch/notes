import * as fs from 'fs';
import * as path from 'path';

const files = [
  '03_Indian_Economy_Macro_Master.md',
  '07_Geography_Environment_Master.md',
  '08_Science_BioTech_Master.md',
  'English_Descriptive_Writing_Master.md',
  'Quant_Reasoning_Master.md'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const h2s = content.split('\n')
      .filter(l => l.startsWith('## ') && !l.startsWith('## Table of Contents') && !l.startsWith('## Volume'))
      .map(l => l.replace(/^##\s+/, '').trim());
    console.log(`\n========================================\nFILE: ${file} (Count: ${h2s.length})\n========================================`);
    h2s.forEach((h, i) => console.log(`${i + 1}. ${h}`));
  } else {
    console.log(`File not found: ${file}`);
  }
}
