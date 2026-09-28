import * as fs from 'fs';
import * as path from 'path';

const files = [
  'History_Culture_Master.md',
  '03_Indian_Economy_Macro_Master.md',
  '07_Geography_Environment_Master.md',
  '08_Science_BioTech_Master.md',
  '09_Agriculture_Rural_Development_Master.md',
  '02_IIBF_Banking_Regulations_Master.md',
  '01_UPSC_APFC_EPFO_Master.md',
  '11_Computer_Aptitude_Banking_Master.md',
  'Quant_Reasoning_Master.md',
  'English_Descriptive_Writing_Master.md'
];

for (const f of files) {
  const filePath = path.resolve(f);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find all `## \d+\.` or `## ` headings
  const regex = /^##\s+(\d+\.\s+.*)$/gm;
  let match;
  const list: string[] = [];
  while ((match = regex.exec(content)) !== null) {
    list.push(match[1].trim());
  }
  
  console.log(`\n========================================`);
  console.log(`FILE: ${f} (${list.length} chapters found)`);
  console.log(`========================================`);
  list.forEach(item => console.log(`  ${item}`));
}
