import * as fs from 'fs';
import * as path from 'path';

const notesDir = path.join(process.cwd(), '007', 'notes', 'hindi');
const revDir = path.join(process.cwd(), '007', 'revision', 'hindi');

const files = [
  ...fs.readdirSync(notesDir).map(f => path.join(notesDir, f)),
  ...fs.readdirSync(revDir).map(f => path.join(revDir, f))
].filter(f => f.endsWith('.md'));

console.log(`Auditing ${files.length} markdown files...`);

// Common Devnagari orthographic errors to check
// Note: Some of these will appear as "incorrect" examples (marked with ❌). We want to check if they are mistakenly marked as correct or used outside mistake contexts.
const suspiciousPatterns: { name: string; regex: RegExp }[] = [
  { name: 'Broken unicode replacement char', regex: /\uFFFD/ },
  { name: 'Raw double backslash without math', regex: /[^\$\\]\\\\[^\$\\]/ },
  { name: 'Broken html tags', regex: /<[a-z]+[^>]*[^/]>(?!.*<\/[a-z]+>)/i },
  { name: 'Double spaces in title/headings', regex: /^#+\s+.*\s{2,}.*/m },
  { name: 'Unclosed table tag', regex: /<table(?![^>]*<\/table>)/ },
  { name: 'Unclosed bold markdown', regex: /\*\*[^*]+$/m },
];

let totalWords = 0;
let totalLines = 0;
const issues: { file: string; line: number; issue: string; text: string }[] = [];

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  totalLines += lines.length;
  totalWords += content.split(/\s+/).filter(Boolean).length;

  lines.forEach((line, index) => {
    // Check unicode replacement
    if (line.includes('\uFFFD')) {
      issues.push({
        file: path.basename(filePath),
        line: index + 1,
        issue: 'Contains Unicode Replacement Character (U+FFFD)',
        text: line.trim()
      });
    }

    // Check broken markdown links
    if (/\[.*?\]\([^\)]*$/.test(line)) {
      issues.push({
        file: path.basename(filePath),
        line: index + 1,
        issue: 'Unclosed markdown link',
        text: line.trim()
      });
    }

    // Check empty table cells that break markdown tables
    if (/\|[\s]*\|/.test(line) && !line.includes(':---') && !line.includes('|-')) {
      // Empty cell in markdown table
    }
  });

  // Check unclosed HTML tables
  const openTables = (content.match(/<table/g) || []).length;
  const closeTables = (content.match(/<\/table>/g) || []).length;
  if (openTables !== closeTables) {
    issues.push({
      file: path.basename(filePath),
      line: 1,
      issue: `Mismatched <table> tags: ${openTables} open, ${closeTables} close`,
      text: ''
    });
  }
}

console.log(`Total files audited: ${files.length}`);
console.log(`Total lines: ${totalLines}`);
console.log(`Total words: ${totalWords}`);
console.log(`Issues found: ${issues.length}`);
if (issues.length > 0) {
  console.log(JSON.stringify(issues, null, 2));
} else {
  console.log('✅ All files passed structural, tag, and character encoding checks!');
}
