import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';
import { CA_REGISTRY } from './build_ca_chapters';

async function main() {
  const chaptersDir = path.resolve('007', 'PRINT DESIGNER', 'CURRENT_AFFAIRS_BUILD', 'chapters');
  console.log(`======================================================`);
  console.log(`AUDITING CURRENT AFFAIRS CHAPTER PDFS & GLOBAL FOLIOS`);
  console.log(`======================================================`);

  let currentStartPage = 1;
  const auditResults: any[] = [];

  for (const meta of CA_REGISTRY) {
    const pdfPath = path.join(chaptersDir, `CA_CH_${String(meta.index).padStart(2, '0')}.pdf`);
    if (!fs.existsSync(pdfPath)) {
      console.warn(`[MISSING] Chapter ${meta.index} PDF not found: ${pdfPath}`);
      continue;
    }

    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();

    const endPage = currentStartPage + pageCount - 1;
    auditResults.push({
      ch: meta.index,
      filename: meta.filename,
      shortHeader: meta.shortHeader,
      fullTitle: meta.fullTitle,
      sub: meta.sub,
      pages: pageCount,
      start: currentStartPage,
      end: endPage,
    });

    console.log(`Ch ${String(meta.index).padStart(2, '0')}: ${meta.shortHeader.padEnd(45)} -> ${pageCount} pages (Folios p. ${currentStartPage}–${endPage})`);
    currentStartPage = endPage + 1;
  }

  const totalBodyPages = currentStartPage - 1;
  console.log(`======================================================`);
  console.log(`Total Compiled Chapters: ${auditResults.length} / ${CA_REGISTRY.length}`);
  console.log(`Total Body Pages: ${totalBodyPages}`);
  console.log(`Estimated Total Book Pages (with 2 FM + 2 TOC): ${totalBodyPages + 4}`);
  console.log(`======================================================\n`);

  // Output JSON mapping for the master builder script
  const jsonPath = path.resolve('007', 'PRINT DESIGNER', 'CURRENT_AFFAIRS_BUILD', 'toc_mapping.json');
  fs.writeFileSync(jsonPath, JSON.stringify(auditResults, null, 2), 'utf8');
}

main().catch(console.error);
