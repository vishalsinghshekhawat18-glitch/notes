import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';

async function check() {
  const dir = path.resolve('007', 'PRINT DESIGNER', 'chapters');
  let total = 0;
  console.log('=== BOOK 1 CHAPTER PAGE COUNTS ===');
  for (let i = 1; i <= 26; i++) {
    const chStr = String(i).padStart(2, '0');
    const p = path.join(dir, `${chStr}_CHAPTER_${chStr}_A4_BW.pdf`);
    const bytes = fs.readFileSync(p);
    const doc = await PDFDocument.load(bytes);
    const count = doc.getPageCount();
    console.log(`Ch ${chStr}: ${count} pages`);
    total += count;
  }
  console.log(`TOTAL BODY PAGES: ${total}`);

  const iibfDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_1', 'chapters');
  let iibfTotal = 0;
  console.log('\n=== BOOK 2 (IIBF) CHAPTER PAGE COUNTS ===');
  for (let i = 1; i <= 24; i++) {
    const chStr = String(i).padStart(2, '0');
    const p = path.join(iibfDir, `${chStr}_CHAPTER_${chStr}_A4_BW.pdf`);
    const bytes = fs.readFileSync(p);
    const doc = await PDFDocument.load(bytes);
    const count = doc.getPageCount();
    console.log(`Ch ${chStr}: ${count} pages`);
    iibfTotal += count;
  }
  console.log(`TOTAL IIBF BODY PAGES: ${iibfTotal}`);
}

check().catch(console.error);
