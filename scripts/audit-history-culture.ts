import * as fs from 'fs';
import * as path from 'path';

interface NoteDetail {
  num: number;
  id: string;
  title: string;
  category: string;
  targetExams: string;
  startLine: number;
  endLine: number;
  charCount: number;
  lineCount: number;
  bodyType: 'REAL_CONTENT' | 'BOILERPLATE_STUB';
  trapType: 'CUSTOM_RAJASTHAN' | 'GENERIC_POLITY_1773' | 'GENERIC_GANDHI_1917' | 'OTHER';
  trapText: string;
  keyClaims: string[];
}

const filePath = path.join(process.cwd(), 'History_Culture_Master.md');
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

const notes: NoteDetail[] = [];
let current: any = null;
let currentLines: string[] = [];
let startLine = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^##\s+(\d+)\.\s*(.*)/);
  if (m) {
    if (current) {
      processNote(current, startLine, i, currentLines);
    }
    current = { num: parseInt(m[1], 10), title: m[2].trim() };
    startLine = i + 1;
    currentLines = [];
  } else if (current) {
    currentLines.push(line);
  }
}
if (current) {
  processNote(current, startLine, lines.length, currentLines);
}

function processNote(curr: any, start: number, end: number, noteLines: string[]) {
  const text = noteLines.join('\n');
  const idMatch = text.match(/Item ID:\*\* `([^`]+)`/);
  const catMatch = text.match(/Category \/ Section:\*\* ([^\n\r]+)/);
  const examMatch = text.match(/Target Exams:\*\* ([^\n\r]+)/);

  const isGenericPolity = text.includes('Landmark Legislative Chronology: (1) Regulating Act 1773');
  const isGenericGandhi = text.includes('Gandhian Movement Chronology & Triggers: (1) Champaran 1917');
  const isRajasthan = text.includes('RPSC RAS Top');

  let trapType: 'CUSTOM_RAJASTHAN' | 'GENERIC_POLITY_1773' | 'GENERIC_GANDHI_1917' | 'OTHER' = 'OTHER';
  if (isRajasthan) trapType = 'CUSTOM_RAJASTHAN';
  else if (isGenericPolity) trapType = 'GENERIC_POLITY_1773';
  else if (isGenericGandhi) trapType = 'GENERIC_GANDHI_1917';

  // Check if body is real or stub
  const isBoilerplate =
    text.includes('Institutional centralization & cultural synthesis') &&
    text.includes('Primary Source:') &&
    text.includes('Historiography:') &&
    text.includes('Agrarian Surplus:') &&
    text.includes('Chronological Span:') &&
    text.includes('Administrative Architecture:');

  const bodyType = isBoilerplate ? 'BOILERPLATE_STUB' : 'REAL_CONTENT';

  const trapMatch = text.match(/🎯 Exam Angle[^\n\r]+/);

  notes.push({
    num: curr.num,
    id: idMatch ? idMatch[1] : `note-${curr.num}`,
    title: curr.title,
    category: catMatch ? catMatch[1].trim() : 'Unknown',
    targetExams: examMatch ? examMatch[1].trim() : 'Unknown',
    startLine: start,
    endLine: end,
    charCount: text.length,
    lineCount: noteLines.length,
    bodyType,
    trapType,
    trapText: trapMatch ? trapMatch[0] : '',
    keyClaims: []
  });
}

console.log('Total notes parsed:', notes.length);
console.log('\n--- DETAILED AUDIT PER NOTE ---');
for (const n of notes) {
  console.log(
    `Note ${String(n.num).padStart(2, '0')}: [${n.bodyType.padEnd(16)}] [${n.trapType.padEnd(19)}] ${n.title} (Lines ${n.startLine}-${n.endLine})`
  );
}

// Summary Statistics
const realContentNotes = notes.filter((n) => n.bodyType === 'REAL_CONTENT');
const boilerplateNotes = notes.filter((n) => n.bodyType === 'BOILERPLATE_STUB');

console.log('\n=== EXECUTIVE SUMMARY ===');
console.log(`Total Notes: ${notes.length}`);
console.log(`Real Substantive Notes: ${realContentNotes.length}`);
console.log(`Boilerplate Stub Notes: ${boilerplateNotes.length}`);
console.log('\nReal Content Breakdown:');
realContentNotes.forEach((n) => {
  console.log(`- Note ${n.num}: ${n.title} (Lines ${n.startLine}-${n.endLine}, Category: ${n.category})`);
});
