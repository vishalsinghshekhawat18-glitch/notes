import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function main() {
  const filePath = path.join(process.cwd(), '007', "PDF's", 'RPSC हिंदी ALL PYQ (2011 - 2025).pdf');
  const buffer = fs.readFileSync(filePath);

  const parser = new PDFParse({ data: buffer });
  await parser.load();

  const outDir = path.join(process.cwd(), '007', 'scripts', 'extracted_pages');
  
  // Extract pages 4, 5, 6
  for (const pNum of [4, 5, 6]) {
    const res = await parser.getImage({ partial: [pNum] });
    if (res.pages && res.pages[0] && res.pages[0].images.length > 0) {
      const img = res.pages[0].images[0];
      const base64Data = img.dataUrl.replace(/^data:image\/\w+;base64,/, '');
      const buf = Buffer.from(base64Data, 'base64');
      const outPath = path.join(outDir, `page_${pNum}.png`);
      fs.writeFileSync(outPath, buf);
      console.log(`Saved page ${pNum} (${(buf.length / 1024).toFixed(1)} KB)`);
    }
  }

  await parser.destroy();
}

main().catch(console.error);
