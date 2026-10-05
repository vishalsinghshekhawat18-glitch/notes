import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

async function main() {
  const dir = path.join(process.cwd(), '007', "PDF's");
  const files = fs.readdirSync(dir);
  console.log('Files in 007/PDF\'s:', files);

  const targetFile = files.find(f => f.includes('RPSC') && f.endsWith('.pdf'));
  if (!targetFile) {
    console.error('Target PDF not found!');
    return;
  }

  const filePath = path.join(dir, targetFile);
  const stats = fs.statSync(filePath);
  console.log(`File: ${targetFile}`);
  console.log(`Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);

  const fileBytes = fs.readFileSync(filePath);
  console.log('Reading PDF with pdf-lib...');
  const pdfDoc = await PDFDocument.load(fileBytes, { ignoreEncryption: true });
  const pageCount = pdfDoc.getPageCount();
  console.log(`Total Pages: ${pageCount}`);
  console.log('Title:', pdfDoc.getTitle());
  console.log('Author:', pdfDoc.getAuthor());
  console.log('Subject:', pdfDoc.getSubject());
}

main().catch(console.error);
