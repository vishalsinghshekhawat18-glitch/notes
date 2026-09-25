import * as fs from 'fs';
import * as path from 'path';

function runDeepAudit() {
  const filePath = path.resolve('03_Indian_Economy_Macro_Master.md');
  const text = fs.readFileSync(filePath, 'utf-8');
  const lines = text.split('\n');

  console.log(`=======================================================`);
  console.log(`  FORENSIC AUDIT: 03_Indian_Economy_Macro_Master.md`);
  console.log(`  Lines: ${lines.length} | Size: ${(text.length / 1024).toFixed(1)} KB`);
  console.log(`=======================================================\n`);

  // --- 1. CONTROL CHARACTER CORRUPTIONS ---
  const controlChars: { line: number; type: string; snippet: string }[] = [];
  lines.forEach((line, idx) => {
    // Check for literal tab byte 0x09 followed by ext{ (corrupted \text)
    if (line.includes('\text{') || line.includes('\text') || line.includes('\t' + 'ext{')) {
      if (line.includes('\t' + 'ext{')) {
        controlChars.push({ line: idx + 1, type: 'Literal tab byte (0x09) instead of \\text', snippet: line.trim() });
      }
    }
    // Check for form feed \x0c (corrupted \frac)
    if (line.includes('\x0c') || line.includes('\x0crac')) {
      controlChars.push({ line: idx + 1, type: 'Corrupted \\frac (formfeed \\x0c)', snippet: line.trim() });
    }
    // Check for backspace \x08 (corrupted \mathbf)
    if (line.includes('\x08') || line.includes('\x08f')) {
      controlChars.push({ line: idx + 1, type: 'Corrupted \\mathbf (backspace \\x08)', snippet: line.trim() });
    }
  });

  console.log(`[ISSUE 1] Control Character & Corrupted LaTeX Escape Sequences: ${controlChars.length}`);
  controlChars.slice(0, 15).forEach((c) => {
    console.log(`  Line ${c.line} [${c.type}]: ${c.snippet.slice(0, 90)}`);
  });
  if (controlChars.length > 15) {
    console.log(`  ... and ${controlChars.length - 15} more instances.`);
  }

  // --- 2. EMPTY CODE BLOCKS ---
  const emptyCodeBlocks: { start: number; end: number; lang: string }[] = [];
  let inCode = false;
  let codeStart = 0;
  let codeLang = '';
  let codeLines: string[] = [];

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      if (!inCode) {
        inCode = true;
        codeStart = idx + 1;
        codeLang = trimmed.slice(3).trim();
        codeLines = [];
      } else {
        inCode = false;
        if (codeLines.length === 0 || codeLines.every((l) => l.trim() === '')) {
          emptyCodeBlocks.push({ start: codeStart, end: idx + 1, lang: codeLang });
        }
      }
    } else if (inCode) {
      codeLines.push(line);
    }
  });

  console.log(`\n[ISSUE 2] Empty Code Blocks: ${emptyCodeBlocks.length}`);
  emptyCodeBlocks.forEach((b) => {
    console.log(`  Line ${b.start}-${b.end}: \`\`\`${b.lang} (completely blank/empty)`);
  });

  // --- 3. UNESCAPED '%' IN LATEX MATH ---
  const unescapedPercent: { line: number; math: string }[] = [];
  const mathInlineRe = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;

  lines.forEach((line, idx) => {
    if (line.trim().startsWith('```')) return;
    let match: RegExpExecArray | null;
    while ((match = mathInlineRe.exec(line)) !== null) {
      const expr = match[1];
      if (expr.includes('%') && !expr.includes('\\%')) {
        unescapedPercent.push({ line: idx + 1, math: expr.trim() });
      }
    }
  });

  console.log(`\n[ISSUE 3] Unescaped '%' in LaTeX Math Delimiters: ${unescapedPercent.length}`);
  unescapedPercent.slice(0, 15).forEach((p) => {
    console.log(`  Line ${p.line}: $${p.math}$`);
  });
  if (unescapedPercent.length > 15) {
    console.log(`  ... and ${unescapedPercent.length - 15} more instances.`);
  }

  // --- 4. UNBALANCED '$' DELIMITERS ---
  const unbalancedDollars: { line: number; count: number; snippet: string }[] = [];
  let fenced = false;
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      fenced = !fenced;
      return;
    }
    if (fenced) return;
    const clean = line.split('$$').join('').split('\\$').join('');
    const count = (clean.match(/\$/g) || []).length;
    if (count % 2 !== 0) {
      unbalancedDollars.push({ line: idx + 1, count, snippet: trimmed.slice(0, 90) });
    }
  });

  console.log(`\n[ISSUE 4] Unbalanced Single '$' Delimiters in a Single Line: ${unbalancedDollars.length}`);
  unbalancedDollars.slice(0, 15).forEach((u) => {
    console.log(`  Line ${u.line} (odd count=${u.count}): ${u.snippet}`);
  });

  // --- 5. SPACING ISSUES AROUND MATH AND PUNCTUATION ---
  const spacingIssues: { line: number; type: string; snippet: string }[] = [];
  const beforeMath = /([A-Za-z0-9])\$([^\$]+)\$/g;
  const afterMath = /\$([^\$]+)\$([A-Za-z0-9])/g;

  lines.forEach((line, idx) => {
    if (line.trim().startsWith('```')) return;
    let m: RegExpExecArray | null;
    while ((m = beforeMath.exec(line)) !== null) {
      const char = m[1];
      if (!['S', 's', 'U', 'u', 'R', 'r', '₹'].includes(char)) {
        spacingIssues.push({ line: idx + 1, type: 'No space before math', snippet: `${char}$${m[2]}$` });
      }
    }
    while ((m = afterMath.exec(line)) !== null) {
      spacingIssues.push({ line: idx + 1, type: 'No space after math', snippet: `$${m[1]}$${m[2]}` });
    }
  });

  console.log(`\n[ISSUE 5] Spacing Errors Around Math: ${spacingIssues.length}`);
  spacingIssues.slice(0, 15).forEach((s) => {
    console.log(`  Line ${s.line} [${s.type}]: ${s.snippet.slice(0, 60)}`);
  });

  // --- 5B. MISSING BACKSLASH IN LATEX COMMANDS ---
  const missingBackslash: { line: number; text: string }[] = [];
  const mathInline = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;

  lines.forEach((l, idx) => {
    if (l.trim().startsWith('```')) return;
    let m: RegExpExecArray | null;
    while ((m = mathInline.exec(l)) !== null) {
      const expr = m[1];
      for (const cmd of ['ge', 'le', 'pm', 'times', 'sim', 'ne']) {
        const r = new RegExp('(^|[^a-zA-Z\\\\])' + cmd + '([^a-zA-Z]|$)');
        if (r.test(expr)) {
          missingBackslash.push({ line: idx + 1, text: `Missing \\${cmd} in: $${expr}$` });
        }
      }
    }
  });

  console.log(`\n[ISSUE 5B] Missing Backslashes in LaTeX Commands: ${missingBackslash.length}`);
  missingBackslash.forEach((m) => {
    console.log(`  Line ${m.line}: ${m.text}`);
  });

  // --- 6. MATHEMATICAL FORMULAS AUDIT & SIGN INVARIANTS ---
  console.log(`\n[ISSUE 6] Specific Mathematical & Identity Formula Audit:`);
  
  // Specific checks on key identities:
  lines.forEach((line, idx) => {
    const l = line.trim();
    // Check BoP formula
    if (l.toLowerCase().includes('current account balance') && l.includes('=')) {
      console.log(`  [BoP Check - Line ${idx + 1}]: ${l}`);
    }
    // Check Fiscal Deficit formula
    if (l.toLowerCase().includes('primary deficit') && l.includes('=')) {
      console.log(`  [Primary Deficit - Line ${idx + 1}]: ${l}`);
    }
    // Check GDP / GVA formulas
    if (l.toLowerCase().includes('gva at basic') && l.includes('=')) {
      console.log(`  [GVA Basic Prices - Line ${idx + 1}]: ${l}`);
    }
    if (l.toLowerCase().includes('gdp at market') && l.includes('=')) {
      console.log(`  [GDP Market Prices - Line ${idx + 1}]: ${l}`);
    }
    if (l.toLowerCase().includes('lorenz') && l.toLowerCase().includes('gini') && l.includes('=')) {
      console.log(`  [Gini Formula - Line ${idx + 1}]: ${l}`);
    }
    if (l.toLowerCase().includes('money multiplier') && l.includes('=')) {
      console.log(`  [Money Multiplier - Line ${idx + 1}]: ${l}`);
    }
  });

  // --- 7. PRESENTATION & METADATA COPY-PASTE REPETITION ---
  const copyPastedHeaders: { unit: string; line: number; text: string }[] = [];
  lines.forEach((line, idx) => {
    if (line.startsWith('## ') && idx + 15 < lines.length) {
      const unitTitle = line.trim();
      let execSummary = '';
      let contextHook = '';
      let keyConcept = '';

      for (let j = idx; j < idx + 25 && j < lines.length; j++) {
        if (lines[j].startsWith('> **Executive Summary:**')) {
          execSummary = lines[j].replace('> **Executive Summary:**', '').trim();
        }
        if (lines[j].startsWith('🪝 Context Hook —')) {
          contextHook = lines[j].replace('🪝 Context Hook —', '').trim();
        }
        if (lines[j].startsWith('> The ') || (lines[j].startsWith('> ') && lines[j].length > 30)) {
          if (!keyConcept && !lines[j].startsWith('> **Executive')) {
            keyConcept = lines[j].replace(/^>\s*/, '').trim();
          }
        }
      }

      if (execSummary && contextHook && execSummary === contextHook) {
        copyPastedHeaders.push({ unit: unitTitle, line: idx + 1, text: execSummary.slice(0, 70) });
      }
    }
  });

  console.log(`\n[ISSUE 7] Copy-Pasted Triplet Headers (Executive Summary == Context Hook): ${copyPastedHeaders.length} units`);
  copyPastedHeaders.slice(0, 10).forEach((c) => {
    console.log(`  Line ${c.line} (${c.unit}): "${c.text}..."`);
  });
}

runDeepAudit();
