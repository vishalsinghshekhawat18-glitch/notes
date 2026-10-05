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
  const textResult = await parser.getText();

  console.log(`Mapping all ${textResult.pages.length} pages...`);

  const textRanges: { start: number; end: number; sample: string }[] = [];
  let currentStart = -1;
  let currentSample = '';

  textResult.pages.forEach((p: any, idx: number) => {
    const hasText = p.text.trim().length > 30;
    if (hasText) {
      if (currentStart === -1) {
        currentStart = p.num;
        currentSample = p.text.trim().slice(0, 100).replace(/\n/g, ' ');
      }
    } else {
      if (currentStart !== -1) {
        textRanges.push({ start: currentStart, end: p.num - 1, sample: currentSample });
        currentStart = -1;
      }
    }
  });

  if (currentStart !== -1) {
    textRanges.push({ start: currentStart, end: textResult.pages.length, sample: currentSample });
  }

  console.log('Text ranges found in PDF:');
  console.table(textRanges);

  let totalTextPages = 0;
  textRanges.forEach(r => {
    totalTextPages += (r.end - r.start + 1);
  });
  console.log(`Total Text Pages: ${totalTextPages} / ${textResult.pages.length}`);
  console.log(`Total Scanned/Image Pages: ${textResult.pages.length - totalTextPages}`);

  await parser.destroy();
}

main().catch(console.error);
