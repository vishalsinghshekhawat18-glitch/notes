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

  const checkPages = [99, 100, 138, 139, 178, 179, 384, 385];
  for (const pageNum of checkPages) {
    const p = textResult.pages[pageNum - 1];
    console.log(`\n=================== PAGE ${pageNum} ===================`);
    console.log(p.text.slice(0, 1000));
  }

  await parser.destroy();
}

main().catch(console.error);
