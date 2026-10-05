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
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Extract images from pages 3, 15, 30, 50, 75
  const samplePages = [3, 15, 30, 50, 75];
  for (const pNum of samplePages) {
    try {
      console.log(`Extracting image from page ${pNum}...`);
      const res = await parser.getImage({ partial: [pNum] });
      if (res.pages && res.pages[0] && res.pages[0].images.length > 0) {
        const img = res.pages[0].images[0];
        console.log(`Page ${pNum} image: ${img.width}x${img.height}`);
        
        // Convert to PNG using sharp if raw RGB/RGBA
        // Let's inspect img object keys
        console.log('Image keys:', Object.keys(img));
        if (img.data) {
          // Check if sharp can handle raw buffer
          // Usually pdf-parse gives raw RGBA or RGB
          const channels = img.data.length / (img.width * img.height);
          console.log(`Calculated channels: ${channels}`);
          if (channels === 3 || channels === 4) {
            const pngBuf = await sharp(img.data, {
              raw: {
                width: img.width,
                height: img.height,
                channels: channels as (3 | 4)
              }
            })
            .resize({ width: 1000 }) // resize to keep size small
            .png()
            .toBuffer();
            
            const outPath = path.join(outDir, `page_${pNum}.png`);
            fs.writeFileSync(outPath, pngBuf);
            console.log(`Saved ${outPath} (${(pngBuf.length / 1024).toFixed(1)} KB)`);
          }
        }
      }
    } catch (e) {
      console.error(`Error on page ${pNum}:`, e);
    }
  }

  await parser.destroy();
}

main().catch(console.error);
