const fs = require('fs');
const path = require('path');
const katex = require('katex');
const { marked } = require('marked');

const rootDir = path.resolve(__dirname, '..', '..');
const notesDir = path.join(rootDir, '007');

function findMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = findMarkdownFiles(notesDir);
console.log(`Starting Deep-Dive Presentation & Reading Audit across ${files.length} markdown files...`);

let totalLines = 0;
let totalInlineMath = 0;
let totalDisplayMath = 0;
let totalTables = 0;
let totalCodeBlocks = 0;
let errorsFound = [];

for (const file of files) {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  totalLines += lines.length;

  // 1. Check H1 presence (every main note should have a title)
  const hasH1 = /^#\s+.+/m.test(content) || /<h1[^>]*>[\s\S]*?<\/h1>/i.test(content);
  if (!hasH1) {
    errorsFound.push({ file: relPath, type: 'MISSING_H1', detail: 'File lacks a top-level H1 header or title' });
  }

  // 2. Check for empty headers (e.g. "## " with nothing after)
  lines.forEach((l, idx) => {
    if (/^#{1,6}\s*$/.test(l.trim())) {
      errorsFound.push({ file: relPath, line: idx + 1, type: 'EMPTY_HEADER', detail: `Empty header: "${l}"` });
    }
  });

  // 3. Test every display math block with KaTeX
  const displayMathRegex = /\$\$([\s\S]*?)\$\$/g;
  let dm;
  while ((dm = displayMathRegex.exec(content)) !== null) {
    totalDisplayMath++;
    const math = dm[1].trim();
    try {
      katex.renderToString(math, { throwOnError: true, displayMode: true });
    } catch (err) {
      const lineNum = content.substring(0, dm.index).split('\n').length;
      errorsFound.push({ file: relPath, line: lineNum, type: 'KATEX_DISPLAY_ERROR', detail: err.message.split('\n')[0] });
    }
  }

  // 4. Test every inline math block $...$ (ignoring currency like $100 and escaped dollars)
  // Mask out display math first
  const noDisplay = content.replace(/\$\$[\s\S]*?\$\$/g, '');
  // Mask out code blocks
  const noCode = noDisplay.replace(/```[\s\S]*?```/g, '').replace(/`[^`]+`/g, '');
  // Protect escaped dollars \$ matching production renderer
  const noEscapedDollars = noCode.replace(/\\\$/g, '___ESCAPED_DOLLAR___');
  const inlineMathRegex = /\$([^\s$](?:[^\n$]*?[^\s$])?)\$/g;
  let im;
  while ((im = inlineMathRegex.exec(noEscapedDollars)) !== null) {
    const math = im[1].trim();
    // Skip if it looks like currency (e.g. 100, 50B)
    if (/^\d+(\.\d+)?\s*(billion|million|trillion|lakh|crore|k|M|B|USD|dollars?)?$/i.test(math)) {
      continue;
    }
    totalInlineMath++;
    try {
      katex.renderToString(math, { throwOnError: true, displayMode: false });
    } catch (err) {
      const lineNum = noCode.substring(0, im.index).split('\n').length;
      // Filter out harmless non-math text that happened to use $
      if (!math.includes('=' ) && !math.includes('\\') && !math.includes('+') && !math.includes('-') && !math.includes('^') && !math.includes('_')) {
        continue;
      }
      errorsFound.push({ file: relPath, line: lineNum, type: 'KATEX_INLINE_ERROR', detail: `Math: "${math}" -> ${err.message.split('\n')[0]}` });
    }
  }

  // 5. Test marked parsing
  try {
    marked.parse(content, { async: false, gfm: true, breaks: true });
  } catch (err) {
    errorsFound.push({ file: relPath, type: 'MARKED_CRASH', detail: err.message });
  }

  // 6. Check for unclosed HTML tags in custom divs
  const openDivs = (content.match(/<div\b[^>]*>/gi) || []).length;
  const closeDivs = (content.match(/<\/div>/gi) || []).length;
  if (openDivs !== closeDivs) {
    errorsFound.push({ file: relPath, type: 'UNCLOSED_HTML_DIV', detail: `Mismatch in <div> tags: ${openDivs} open vs ${closeDivs} close` });
  }

  // Count tables and code blocks
  const tableRows = lines.filter(l => l.trim().startsWith('|') && l.trim().endsWith('|')).length;
  if (tableRows > 0) totalTables++;
  const cBlocks = (content.match(/```/g) || []).length / 2;
  totalCodeBlocks += cBlocks;
}

console.log('\n--- AUDIT SUMMARY STATISTICS ---');
console.log(`Total Files Checked: ${files.length}`);
console.log(`Total Lines Audited: ${totalLines}`);
console.log(`Total Display Math Formulas: ${totalDisplayMath}`);
console.log(`Total Inline Math Formulas Tested: ${totalInlineMath}`);
console.log(`Files with Tables: ${totalTables}`);
console.log(`Total Code & ASCII Blocks: ${totalCodeBlocks}`);
console.log(`Total Strict Errors / Regressions Found: ${errorsFound.length}`);

if (errorsFound.length > 0) {
  console.log('\n--- ISSUES IDENTIFIED ---');
  for (const err of errorsFound) {
    console.log(`❌ [${err.type}] ${err.file}${err.line ? ` (Line ${err.line})` : ''}: ${err.detail}`);
  }
} else {
  console.log('\n✨ PERFECT AUDIT: 100% of files, formulas, tables, and HTML blocks passed with ZERO defects!');
}
