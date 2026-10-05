import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';
import { EXACT_TOC_MAPPING_IIBF } from './build_iibf_paper_1_master_codex';

async function compare() {
  const chaptersDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_1', 'chapters');
  console.log(`\n======================================================`);
  console.log(`COMPARING CHAPTER PAGES VS TOC MAPPING`);
  console.log(`======================================================`);

  let currentStart = 1;
  const newMapping: any[] = [];

  for (let i = 0; i < EXACT_TOC_MAPPING_IIBF.length; i++) {
    const oldEntry = EXACT_TOC_MAPPING_IIBF[i];
    const chNum = String(oldEntry.ch).padStart(2, '0');
    const pdfPath = path.join(chaptersDir, `${chNum}_CHAPTER_${chNum}_A4_BW.pdf`);
    const doc = await PDFDocument.load(fs.readFileSync(pdfPath));
    const pages = doc.getPageCount();

    const start = currentStart;
    const end = currentStart + pages - 1;
    currentStart = end + 1;

    console.log(`Ch ${chNum}: Actual=${pages}p (Old TOC=${oldEntry.pages}p, Start: ${start}..${end}) - "${oldEntry.title}"`);
    newMapping.push({
      ch: oldEntry.ch,
      start,
      end,
      pages,
      title: oldEntry.title,
      sub: oldEntry.sub
    });
  }

  const totalBodyPages = currentStart - 1;
  console.log(`\nTOTAL BODY PAGES: ${totalBodyPages} (Total Book Folios: ${totalBodyPages + 4})`);
  console.log(`======================================================\n`);

  fs.writeFileSync(path.resolve('007', 'scripts', 'new_toc_mapping.json'), JSON.stringify(newMapping, null, 2));
}

compare().catch(console.error);
