import * as fs from 'fs';

function inspectFile(file: string) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  console.log(`\n=== INSPECTING ${file} (lines: ${lines.length}) ===`);
  lines.forEach((l, idx) => {
    if (l.startsWith('# ') || l.startsWith('## ')) {
      console.log(`L${idx + 1}: ${l}`);
    }
  });
}

inspectFile('English_Descriptive_Writing_Master.md');
inspectFile('Quant_Reasoning_Master.md');
