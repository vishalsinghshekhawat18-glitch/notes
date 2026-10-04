import * as fs from 'fs';
import * as path from 'path';

const notesDir = path.join(process.cwd(), '007', 'notes', 'hindi');
const revDir = path.join(process.cwd(), '007', 'revision', 'hindi');

const files = [
  ...fs.readdirSync(notesDir).map(f => path.join(notesDir, f)),
  ...fs.readdirSync(revDir).map(f => path.join(revDir, f))
].filter(f => f.endsWith('.md'));

const auditRules = [
  { wrong: 'श्रृंगार', right: 'शृंगार' },
  { wrong: 'कवियत्री', right: 'कवयित्री' },
  { wrong: 'कवियित्री', right: 'कवयित्री' },
  { wrong: 'मिष्ठान्न', right: 'मिष्टान्न' },
  { wrong: 'अहिल्या', right: 'अहल्या' },
  { wrong: 'पूज्यनीय', right: 'पूजनीय' },
  { wrong: 'मान्यनीय', right: 'माननीय' },
  { wrong: 'पुनरावलोकन', right: 'पुनरवलोकन' },
  { wrong: 'अनाधिकार', right: 'अनधिकार' },
  { wrong: 'दुरावस्था', right: 'दुरवस्था' },
  { wrong: 'सौंदर्यता', right: 'सौंदर्य' },
  { wrong: 'माधुर्यता', right: 'माधुर्य' },
  { wrong: 'ऐक्यता', right: 'ऐक्य' },
  { wrong: 'धैर्यता', right: 'धैर्य' },
  { wrong: 'सादृश्यता', right: 'सादृश्य' },
  { wrong: 'अभ्यारण्य', right: 'अभयारण्य' },
  { wrong: 'उपरोक्त', right: 'उपर्युक्त' },
  { wrong: 'तदोपरांत', right: 'तदुपरांत' },
  { wrong: 'श्रीमति', right: 'श्रीमती' },
  { wrong: 'निरपराधी', right: 'निरपराध' },
];

let proseMistakes = 0;

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Ignore lines inside tables (markdown table or html table)
    if (line.includes('<td') || line.startsWith('|') || line.includes('<tr>')) return;

    // Check if it's in regular prose
    for (const rule of auditRules) {
      if (line.includes(rule.wrong)) {
        // If not in quotes or marked as error
        const isExplanation = line.includes('❌') || line.includes('अशुद्ध') || line.includes('(') || line.includes('?') || line.includes('vs') || line.includes('बनाम');
        if (!isExplanation) {
          console.log(`[PROSE LEAK] ${path.basename(filePath)} Line ${idx + 1}: '${rule.wrong}' found in prose!`);
          console.log(`  Line: ${line.trim()}`);
          proseMistakes++;
        }
      }
    }
  });
}

console.log(`Prose check complete. True mistakes in regular prose: ${proseMistakes}`);
