import * as fs from 'fs';
import * as path from 'path';

const notesDir = path.join(process.cwd(), '007', 'notes', 'hindi');
const revDir = path.join(process.cwd(), '007', 'revision', 'hindi');

const files = [
  ...fs.readdirSync(notesDir).map(f => path.join(notesDir, f)),
  ...fs.readdirSync(revDir).map(f => path.join(revDir, f))
].filter(f => f.endsWith('.md'));

let issuesCount = 0;

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  const lines = content.split('\n');

  // 1. Check KaTeX dollar balance
  // Ignore literal escaped \$
  const unescapedDollars = (content.replace(/\\\$/g, '').match(/\$/g) || []).length;
  if (unescapedDollars % 2 !== 0) {
    console.log(`[MATH UNBALANCED] ${fileName}: Found odd number (${unescapedDollars}) of unescaped $ signs!`);
    issuesCount++;
  }

  // 2. Check HTML tags balance
  const tags = ['table', 'thead', 'tbody', 'tr', 'th', 'td', 'div'];
  for (const tag of tags) {
    const openCount = (content.match(new RegExp(`<${tag}[\\s>]`, 'gi')) || []).length;
    const closeCount = (content.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
    // Self-closing div like <div style="..."/> or page-break
    if (tag === 'div') {
      const selfClosing = (content.match(/<div[^>]*\/>/gi) || []).length;
      if (openCount - selfClosing !== closeCount) {
        console.log(`[HTML TAG MISMATCH] ${fileName}: <${tag}> open=${openCount}, close=${closeCount}`);
        issuesCount++;
      }
    } else {
      if (openCount !== closeCount) {
        console.log(`[HTML TAG MISMATCH] ${fileName}: <${tag}> open=${openCount}, close=${closeCount}`);
        issuesCount++;
      }
    }
  }

  // 3. Markdown table column count audit
  let inTable = false;
  let expectedCols = 0;
  let tableStartLine = 0;

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cols = trimmed.split('|').length - 2;
      if (!inTable) {
        inTable = true;
        expectedCols = cols;
        tableStartLine = idx + 1;
      } else {
        // Separator line | :--- | :--- |
        if (/^\|[\s\-:]+\|$/.test(trimmed)) {
          // separator
        } else if (cols !== expectedCols) {
          console.log(`[TABLE COL MISMATCH] ${fileName} Line ${idx + 1}: expected ${expectedCols} cols, got ${cols}`);
          issuesCount++;
        }
      }
    } else {
      inTable = false;
    }
  });
}

console.log(`Integrity audit finished. Total syntax/tag/table issues: ${issuesCount}`);
