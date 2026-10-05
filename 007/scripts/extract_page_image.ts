import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function main() {
  const filePath = path.join(process.cwd(), '007', "PDF's", 'RPSC हिंदी ALL PYQ (2011 - 2025).pdf');
  const buffer = fs.readFileSync(filePath);

  const parser = new PDFParse({ data: buffer });
  await parser.load();

  console.log('Extracting images from page 3...');
  const res = await parser.getImage({ partial: [3] });
  console.log('Total pages processed:', res.total);
  console.log('Pages array length:', res.pages.length);
  if (res.pages.length > 0) {
    const p3 = res.pages[0];
    console.log('Page 3 images count:', p3.images.length);
    if (p3.images.length > 0) {
      console.log('First image info:', {
        width: p3.images[0].width,
        height: p3.images[0].height,
        dataLength: p3.images[0].data?.length
      });
    }
  }

  await parser.destroy();
}

main().catch(console.error);
