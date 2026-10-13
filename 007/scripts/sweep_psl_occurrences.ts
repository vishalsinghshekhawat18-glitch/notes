import * as fs from 'fs';
import * as path from 'path';

const notesDir = path.resolve('007', 'notes', 'current_affairs');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.md'));

console.log('=== GLOBAL PSL AUDIT ACROSS SOURCE CORPUS ===\n');

interface Occurrence {
  file: string;
  line: number;
  content: string;
  issue: string;
}

const occurrences: Occurrence[] = [];

for (const file of files) {
  const filePath = path.join(notesDir, file);
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');

  lines.forEach((text, idx) => {
    const lineNum = idx + 1;
    // Look for PSL / Priority Sector targets
    if (/PSL|Priority Sector|ANBC|CEOBSE|CEOBE/i.test(text)) {
      let issue = '';
      // Check if UCB is stated to have a 75% target as current
      if (/(?:UCBs?|Urban Co-operative Banks?)[^.\n]*(?:target|quota|glidepath|reaching|achieve|level)[^.\n]*75%/i.test(text) &&
          !/superseded|earlier|obsolete|erstwhile|replaces?|instead of/i.test(text)) {
        issue = 'OBSOLETE UCB 75% TARGET STATED AS CURRENT';
      } else if (/(?:SFBs?|Small Finance Banks?)[^.\n]*(?:target|quota|mandate)[^.\n]*75%/i.test(text) &&
          !/superseded|earlier|obsolete|erstwhile|rationalised|replaces?|instead of/i.test(text)) {
        issue = 'OBSOLETE SFB 75% TARGET STATED AS CURRENT';
      } else if (/RRBs?[^.\n]*(?:target|quota)[^.\n]*60%/i.test(text)) {
        issue = 'INCORRECT RRB 60% TARGET (RRB IS 75%)';
      }

      if (issue || /75%|60%|40%/i.test(text)) {
        occurrences.push({
          file,
          line: lineNum,
          content: text.trim(),
          issue: issue || 'NEEDS VERIFICATION / CLEAN'
        });
      }
    }
  });
}

for (const o of occurrences) {
  console.log(`[${o.file}:${o.line}] [${o.issue}]`);
  console.log(`   ${o.content}\n`);
}

console.log(`Total PSL target lines found: ${occurrences.length}`);
console.log(`Total flag issues found: ${occurrences.filter(o => o.issue !== 'NEEDS VERIFICATION / CLEAN').length}`);
