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
  'English_Descriptive_Writing_Master.md',
  'Static_GA_Superbook_Master.md',
  '10_Rapid_Revision_Traps_Master.md'
];

for (const f of files) {
  const filePath = path.resolve(f);
  if (!fs.existsSync(filePath)) {
    console.log(`[FILE NOT FOUND]: ${f}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  console.log(`\n========================================`);
  console.log(`FILE: ${f} (${lines.length} lines, ${(content.length / 1024).toFixed(1)} KB)`);
  console.log(`========================================`);
  
  // Find headings
  const headings = lines.filter(l => l.match(/^##\s+\d+\.\s+/)).slice(0, 15);
  if (headings.length > 0) {
    headings.forEach(h => console.log(h));
  } else {
    // If no ## \d+., find ## or # headings
    const h2s = lines.filter(l => l.match(/^##\s+/)).slice(0, 15);
    h2s.forEach(h => console.log(h));
  }
}
