import * as fs from 'fs';
import * as path from 'path';

export interface ParsedTable {
  bannerTitle?: string;
  headers: string[];
  rows: string[][];
}

export function parseAsciiTable(text: string): ParsedTable | null {
  const lines = text.trim().split('\n').map(l => l.trimEnd());
  if (lines.length < 3) return null;

  // Reject obvious tree/flowchart diagrams: contains arrows (▼, ▲, ►, ◄, ─►, ◄─)
  if (/[▼▲►◄]/.test(text)) return null;

  // 1. Identify start line starting with ┌ and ending with ┐
  const startIdx = lines.findIndex(l => l.trim().startsWith('┌') && l.trim().endsWith('┐'));
  if (startIdx === -1) return null;

  // 2. Identify end line starting with └ and ending with ┘
  const endIdx = lines.findLastIndex ? lines.findLastIndex(l => l.trim().startsWith('└') && l.trim().endsWith('┘'))
    : lines.map((l, i) => ({ l, i })).reverse().find(x => x.l.trim().startsWith('└') && x.l.trim().endsWith('┘'))?.i ?? -1;
  if (endIdx === -1 || endIdx <= startIdx + 2) return null;

  // 3. Find a divider line with column splits (either ┬ on line 0, or ┬ / ┼ on subsequent lines)
  let colSplits: number[] = [];
  let bannerTitle: string | undefined = undefined;
  let headerStartIdx = startIdx + 1;

  const topLine = lines[startIdx].trim();
  if (topLine.includes('┬')) {
    for (let i = 0; i < topLine.length; i++) {
      if (topLine[i] === '┌' || topLine[i] === '┬' || topLine[i] === '┐') {
        colSplits.push(i);
      }
    }
  } else {
    // Possibly a banner row first: ┌─────┐, │ Title │, ├────┬────┤
    const dividerIdx = lines.slice(startIdx + 1, endIdx).findIndex(l => {
      const t = l.trim();
      return (t.startsWith('├') || t.startsWith('┌')) && (t.includes('┬') || t.includes('┼')) && (t.endsWith('┤') || t.endsWith('┐'));
    });
    if (dividerIdx !== -1) {
      const actualDividerIdx = startIdx + 1 + dividerIdx;
      // Banner text is between startIdx and actualDividerIdx
      const bannerLines = lines.slice(startIdx + 1, actualDividerIdx)
        .map(l => l.replace(/^[\s│]+|[\s│]+$/g, '').trim())
        .filter(l => l.length > 0);
      bannerTitle = bannerLines.join(' ');
      headerStartIdx = actualDividerIdx + 1;

      const dLine = lines[actualDividerIdx].trim();
      for (let i = 0; i < dLine.length; i++) {
        if (dLine[i] === '├' || dLine[i] === '┼' || dLine[i] === '┤' || dLine[i] === '┬') {
          colSplits.push(i);
        }
      }
    }
  }

  if (colSplits.length < 3) return null; // Needs at least 2 columns

  // Extract content lines between headerStartIdx and endIdx
  const contentLines = lines.slice(headerStartIdx, endIdx);

  // Group lines into sections split by horizontal dividers ├...┤
  const sections: string[][] = [];
  let currentSection: string[] = [];

  for (const line of contentLines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('├') && trimmed.endsWith('┤')) {
      if (currentSection.length > 0) {
        sections.push(currentSection);
        currentSection = [];
      }
    } else if (trimmed.startsWith('│') && trimmed.endsWith('│')) {
      currentSection.push(trimmed);
    }
  }
  if (currentSection.length > 0) {
    sections.push(currentSection);
  }

  if (sections.length < 2) {
    return null;
  }

  // Helper to extract cell text
  function extractCells(group: string[]): string[] {
    const numCols = colSplits.length - 1;
    const colTexts: string[][] = Array.from({ length: numCols }, () => []);

    for (const line of group) {
      for (let c = 0; c < numCols; c++) {
        const start = colSplits[c] + 1;
        const end = Math.min(colSplits[c + 1], line.length);
        if (start < line.length) {
          const chunk = line.substring(start, end).trim();
          if (chunk.length > 0) {
            colTexts[c].push(chunk);
          }
        }
      }
    }

    return colTexts.map(formatCellText);
  }

  function formatCellText(cellLines: string[]): string {
    if (cellLines.length === 0) return '';
    
    // Check if this cell contains numbered or bulleted items
    const hasListItems = cellLines.some(l => /^(?:[•●○■◆\-–]|\d+[\.\)])\s+/.test(l));
    if (hasListItems) {
      const items: string[] = [];
      let currentItem = '';
      for (const line of cellLines) {
        if (/^(?:[•●○■◆\-–]|\d+[\.\)])\s+/.test(line)) {
          if (currentItem.length > 0) {
            items.push(currentItem);
          }
          currentItem = line;
        } else {
          if (currentItem.length > 0) {
            currentItem += ' ' + line;
          } else {
            currentItem = line;
          }
        }
      }
      if (currentItem.length > 0) items.push(currentItem);
      
      if (items.length > 1) {
        return items.map(it => `<div class="cell-item">${formatInlineMarkdown(it)}</div>`).join('');
      } else {
        return formatInlineMarkdown(items[0]);
      }
    }

    // Single block
    return formatInlineMarkdown(cellLines.join(' '));
  }

  function formatInlineMarkdown(str: string): string {
    let out = str;
    // Bold: **text**
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Italics: *text*
    out = out.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
    return out;
  }

  const headers = extractCells(sections[0]).map(h => h.replace(/<[^>]+>/g, '').trim());
  const rows: string[][] = [];

  for (let s = 1; s < sections.length; s++) {
    rows.push(extractCells(sections[s]));
  }

  return { bannerTitle, headers, rows };
}

export function renderTableHtml(table: ParsedTable): string {
  const numCols = table.headers.length;
  let html = `<table class="t-grid">\n`;
  if (table.bannerTitle) {
    html += `  <thead>\n    <tr class="t-banner-row"><th colspan="${numCols}" class="t-banner-th">${table.bannerTitle}</th></tr>\n  </thead>\n`;
  }
  html += `  <thead>\n    <tr>\n`;
  for (const h of table.headers) {
    html += `      <th>${h}</th>\n`;
  }
  html += `    </tr>\n  </thead>\n  <tbody>\n`;
  for (const row of table.rows) {
    html += `    <tr>\n`;
    for (const cell of row) {
      html += `      <td>${cell}</td>\n`;
    }
    html += `    </tr>\n`;
  }
  html += `  </tbody>\n</table>\n`;
  return html;
}

// Test against all files
let countSuccess = 0;
let countFail = 0;

function runTest(dir: string) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      runTest(full);
    } else if (f.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf-8');
      const blocks = content.match(/```[\s\S]*?```/g) || [];
      blocks.forEach((b, i) => {
        const inner = b.replace(/^```[^\n]*\n/, '').replace(/\n```$/, '');
        if ((inner.includes('┌') && inner.includes('┐')) && (inner.includes('┬') || inner.includes('┼') || inner.includes('├'))) {
          const parsed = parseAsciiTable(inner);
          if (parsed) {
            countSuccess++;
          } else {
            // Check if it's an ASCII flowchart
            if (/[▼▲►◄]/.test(inner)) {
              // Intended flowchart diagram
            } else {
              countFail++;
              console.log(`Failed in ${f} block ${i}: ${inner.split('\n')[0]}`);
            }
          }
        }
      });
    }
  }
}

runTest('007/notes/economics');
runTest('007/notes/iibf_dbf');
console.log(`\nFinal Test: ${countSuccess} successfully converted to full-width HTML tables, ${countFail} failed.`);
