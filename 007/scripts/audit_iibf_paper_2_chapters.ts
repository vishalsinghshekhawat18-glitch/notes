import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';
import { IIBF_PAPER_2_REGISTRY } from './build_iibf_paper_2_chapters';

async function main() {
  const chaptersDir = path.resolve('007', 'PRINT DESIGNER', 'IIBF_PAPER_2', 'chapters');
  let currentStart = 1;
  const auditResults = [];

  for (const meta of IIBF_PAPER_2_REGISTRY) {
    const chNumStr = String(meta.index).padStart(2, '0');
    const pdfPath = path.join(chaptersDir, `${chNumStr}_CHAPTER_${chNumStr}_A4_BW.pdf`);
    if (!fs.existsSync(pdfPath)) {
      console.error(`Not found: ${pdfPath}`);
      return;
    }
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();
    const end = currentStart + pageCount - 1;

    auditResults.push({
      ch: meta.index,
      title: meta.fullTitle,
      shortHeader: meta.shortHeader,
      pages: pageCount,
      start: currentStart,
      end: end,
    });

    currentStart = end + 1;
  }

  console.log('AUDITED CHAPTERS MAPPING:');
  console.log(JSON.stringify(auditResults, null, 2));
  console.log(`\nTotal body pages: ${currentStart - 1}`);
}

main().catch(console.error);
