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

  const outDir = path.join(process.cwd(), '007', 'scripts', 'extracted_pages');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const res = await parser.getImage({ partial: [3] });
  if (res.pages && res.pages[0] && res.pages[0].images.length > 0) {
    const img = res.pages[0].images[0];
    console.log('img.kind:', img.kind);
    console.log('img.dataUrl prefix:', img.dataUrl?.slice(0, 50));
    
    if (img.dataUrl) {
      const base64Data = img.dataUrl.replace(/^data:image\/\w+;base64,/, '');
      const buf = Buffer.from(base64Data, 'base64');
      const ext = img.dataUrl.includes('jpeg') ? 'jpg' : 'png';
      const outPath = path.join(outDir, `page_3.${ext}`);
      fs.writeFileSync(outPath, buf);
      console.log(`Saved ${outPath} (${(buf.length / 1024).toFixed(1)} KB)`);
    }
  }

  await parser.destroy();
}

main().catch(console.error);
