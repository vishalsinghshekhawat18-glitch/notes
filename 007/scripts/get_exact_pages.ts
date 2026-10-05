import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';

async function main() {
  const dir = path.resolve('007', 'PRINT DESIGNER', 'chapters');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf')).sort();
  let currentStart = 1;
  const mapping = [];

  for (const f of files) {
    const chNum = parseInt(f.substring(0, 2), 10);
    const bytes = fs.readFileSync(path.join(dir, f));
    const doc = await PDFDocument.load(bytes);
    const count = doc.getPageCount();
    mapping.push({ ch: chNum, start: currentStart, end: currentStart + count - 1, pages: count });
    currentStart += count;
  }

  console.log('EXACT_TOC_MAPPING =', JSON.stringify(mapping, null, 2));
  console.log('Total Body Pages:', currentStart - 1);
}

main().catch(console.error);
