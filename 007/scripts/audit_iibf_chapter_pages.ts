import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';

async function audit() {
  const chaptersDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_1', 'chapters');
  const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.pdf')).sort();

  console.log(`Auditing chapters in: ${chaptersDir}`);
  let total = 0;
  for (const f of files) {
    const p = path.join(chaptersDir, f);
    const bytes = fs.readFileSync(p);
    const doc = await PDFDocument.load(bytes);
    const count = doc.getPageCount();
    total += count;
    console.log(`${f}: ${count} pages`);
  }
  console.log(`TOTAL BODY PAGES: ${total}`);
}

audit().catch(console.error);
