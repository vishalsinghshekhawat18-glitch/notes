import * as fs from 'fs';
import * as path from 'path';

function isAsciiTable(text: string): boolean {
  const lines = text.trim().split('\n').map(l => l.trim());
  if (lines.length < 3) return false;
  // Does it start with box top border: ┌───┬───┐ or +---+---+
  const first = lines[0];
  const last = lines[lines.length - 1];
  const hasBoxTop = first.startsWith('┌') && first.endsWith('┐') && first.includes('┬');
  const hasBoxBottom = last.startsWith('└') && last.endsWith('┘') && (last.includes('┴') || last.includes('─'));
  const hasMiddleDivider = lines.some(l => l.startsWith('├') && l.endsWith('┤') && (l.includes('┼') || l.includes('─')));
  
  return (hasBoxTop && (hasMiddleDivider || hasBoxBottom));
}

let tableCount = 0;
let otherDiagramCount = 0;

function scanDir(dir: string) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (f.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf-8');
      const blocks = content.match(/```[\s\S]*?```/g) || [];
      blocks.forEach((b, i) => {
        const inner = b.replace(/^```[^\n]*\n/, '').replace(/\n```$/, '');
        if (isAsciiTable(inner)) {
          tableCount++;
          console.log(`[TABLE] ${f} - block ${i} (${inner.split('\n').length} lines)`);
        } else if (b.includes('┌') || b.includes('│')) {
          otherDiagramCount++;
        }
      });
    }
  }
}

console.log('=== SCANNING ===');
scanDir('007/notes/economics');
scanDir('007/notes/iibf_dbf');
console.log(`\nSUMMARY: Found ${tableCount} ASCII tables and ${otherDiagramCount} other diagrams.`);
