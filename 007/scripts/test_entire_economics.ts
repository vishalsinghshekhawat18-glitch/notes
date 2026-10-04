import * as fs from 'fs';
import * as path from 'path';
import { SOVEREIGN_SUBJECT_CATALOG, collectSubjectMarkdownFiles, transformMarkdownToPrintHtml } from './build_sovereign_books';

const econ = SOVEREIGN_SUBJECT_CATALOG.find(s => s.slug === 'economics')!;
const baseNotesDir = path.resolve('007', 'notes');
const mdFiles = collectSubjectMarkdownFiles(econ, baseNotesDir);

let combinedMd = '';
for (const f of mdFiles) {
  if (path.basename(f) === '00_COVER.md') continue;
  combinedMd += '\n\n' + fs.readFileSync(f, 'utf-8') + '\n\n';
}

const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
const katexCssContent = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

console.log('Transforming full Economics corpus (' + mdFiles.length + ' files, ' + combinedMd.length + ' chars)...');
const html = transformMarkdownToPrintHtml(combinedMd, econ, katexCssContent);
console.log('HTML size:', html.length);

// 1. Verify Chapter 26 is NOT code
const ch26IsCode = html.includes('<pre class=" pre-ultrawide"><code>\n### High-Yield Descriptive') ||
                   html.includes('<pre><code>\n### High-Yield Descriptive');
console.log('Is Chapter 26 trapped in code?', ch26IsCode);

// 2. Audit HTML for unrendered LaTeX leaks outside of code blocks
const noCodeHtml = html.replace(/<pre[\s\S]*?<\/pre>/g, '').replace(/<code[\s\S]*?<\/code>/g, '');
const rawLatexRegex = /\\(mathbf|text|frac|lambda|implies|approx|Delta|alpha|beta|sigma|mu|le|ge)\b/g;

const matches = [];
let m;
while ((m = rawLatexRegex.exec(noCodeHtml)) !== null) {
  const start = Math.max(0, m.index - 40);
  const end = Math.min(noCodeHtml.length, m.index + 80);
  matches.push({ leak: m[0], snippet: noCodeHtml.slice(start, end).replace(/\n/g, ' ') });
}

console.log('Total raw LaTeX leaks outside code blocks:', matches.length);
if (matches.length > 0) {
  console.log('All leaks:');
  matches.forEach((match, idx) => {
    console.log(`[${idx+1}] ${match.leak} -> "${match.snippet}"`);
  });
}
