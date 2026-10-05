import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

async function main() {
  const filePath = path.join(process.cwd(), '007', "PDF's", 'RPSC हिंदी ALL PYQ (2011 - 2025).pdf');
  const buffer = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });

  console.log('PDF Page Count:', pdfDoc.getPageCount());

  // Let's check page sizes and dimensions across the PDF
  const samplePages = [1, 2, 3, 10, 20, 50, 75, 100, 150, 200, 250, 300, 350, 400];
  for (const pNum of samplePages) {
    const page = pdfDoc.getPage(pNum - 1);
    const { width, height } = page.getSize();
    console.log(`Page ${pNum}: width=${width.toFixed(1)}, height=${height.toFixed(1)}`);
  }
}

main().catch(console.error);
