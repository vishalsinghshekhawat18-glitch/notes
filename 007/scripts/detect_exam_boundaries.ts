import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

async function main() {
  const filePath = path.join(process.cwd(), '007', "PDF's", 'RPSC हिंदी ALL PYQ (2011 - 2025).pdf');
  const buffer = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });

  const totalPages = pdfDoc.getPageCount();
  console.log(`Total Pages: ${totalPages}`);

  // Analyze page dimensions to find transitions between merged documents
  const transitions: { fromPage: number; toPage: number; oldDim: string; newDim: string }[] = [];
  let lastDim = '';

  for (let i = 1; i <= totalPages; i++) {
    const page = pdfDoc.getPage(i - 1);
    const { width, height } = page.getSize();
    const dim = `${Math.round(width)}x${Math.round(height)}`;

    if (i === 1) {
      lastDim = dim;
      transitions.push({ fromPage: 0, toPage: 1, oldDim: '', newDim: dim });
    } else if (dim !== lastDim) {
      transitions.push({ fromPage: i - 1, toPage: i, oldDim: lastDim, newDim: dim });
      lastDim = dim;
    }
  }

  console.log(`Found ${transitions.length} document transition points:`);
  console.table(transitions);
}

main().catch(console.error);
