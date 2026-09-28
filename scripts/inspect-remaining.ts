import * as fs from 'fs';

const files = [
  '01_UPSC_APFC_EPFO_Master.md',
  '02_IIBF_Banking_Regulations_Master.md',
  '09_Agriculture_Rural_Development_Master.md',
  '11_Computer_Aptitude_Banking_Master.md'
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    const h2s = lines.filter(l => l.startsWith('## ') && !l.startsWith('## 📑') && !l.startsWith('## Table of Contents'));
    console.log(`\n=== ${f} (lines: ${lines.length}, chapters: ${h2s.length}) ===`);
    h2s.slice(0, 15).forEach((h, i) => console.log(`${i + 1}. ${h}`));
    if (h2s.length > 15) console.log(`... and ${h2s.length - 15} more`);
  }
}
