import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';

async function auditPages() {
  const dir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_1', 'chapters');
  let currentStart = 1;
  const results = [];
  for (let ch = 1; ch <= 27; ch++) {
    const chStr = String(ch).padStart(2, '0');
    const p = path.join(dir, `${chStr}_CHAPTER_${chStr}_A4_BW.pdf`);
    const bytes = fs.readFileSync(p);
    const doc = await PDFDocument.load(bytes);
    const count = doc.getPageCount();
    const end = currentStart + count - 1;
    results.push({ ch, pages: count, start: currentStart, end });
    console.log(`Ch ${chStr}: ${count} pages (p. ${currentStart}..${end})`);
    currentStart = end + 1;
  }
  const totalBodyPages = currentStart - 1;
  console.log(`\nTOTAL BODY PAGES: ${totalBodyPages}`);
  fs.writeFileSync(path.resolve('007', 'scripts', 'paper_1_page_offsets.json'), JSON.stringify(results, null, 2));
}

auditPages().catch(console.error);
