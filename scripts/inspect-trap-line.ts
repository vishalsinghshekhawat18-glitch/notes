import * as fs from 'fs';

const content = fs.readFileSync('lib/benchmark/batch-polity-master-part1.ts', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Critical Traps & Multi-Statement')) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
    // print previous and next 2 lines
    for (let j = Math.max(0, i - 2); j <= Math.min(lines.length - 1, i + 5); j++) {
      console.log(`  ${j + 1}: ${lines[j]}`);
    }
    break;
  }
}
