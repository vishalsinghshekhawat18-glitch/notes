import * as fs from 'fs';

function testTable(file: string, blockIdx: number) {
  const content = fs.readFileSync(file, 'utf-8');
  const blocks = content.match(/```[\s\S]*?```/g) || [];
  const b = blocks[blockIdx];
  console.log(`=== ${file} Block ${blockIdx} ===`);
  console.log(b);
}

testTable('007/notes/economics/03_CHAPTER_02_NATIONAL_INCOME_ACCOUNTING_GVA.md', 0);
testTable('007/notes/economics/03_CHAPTER_02_NATIONAL_INCOME_ACCOUNTING_GVA.md', 2);
testTable('007/notes/economics/24_CHAPTER_22_ECONOMIC_PLANNING_FIVE_YEAR_PLANS_NITI_AAYOG.md', 0);
