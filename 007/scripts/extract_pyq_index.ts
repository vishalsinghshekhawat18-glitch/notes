import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function main() {
  const filePath = path.join(process.cwd(), '007', "PDF's", 'RPSC हिंदी ALL PYQ (2011 - 2025).pdf');
  const buffer = fs.readFileSync(filePath);

  console.log('Loading PDF...');
  const parser = new PDFParse({ data: buffer });
  await parser.load();

  const textResult = await parser.getText();
  console.log(`Total Pages: ${textResult.total}`);
  console.log(`Total Characters: ${textResult.text.length}`);

  // Print first 5 pages to inspect the complete INDEX
  console.log('\n=================== INDEX PAGES (Pages 1 to 5) ===================');
  for (let i = 0; i < 5 && i < textResult.pages.length; i++) {
    console.log(`\n--- PAGE ${textResult.pages[i].num} ---`);
    console.log(textResult.pages[i].text);
  }

  // Save the full index to a file for detailed review
  const indexPath = path.join(process.cwd(), '007', 'sources', 'pyq_index.txt');
  fs.writeFileSync(indexPath, textResult.pages.slice(0, 5).map((p: any) => `PAGE ${p.num}:\n${p.text}`).join('\n\n'));
  console.log(`\nSaved index to ${indexPath}`);

  await parser.destroy();
}

main().catch(console.error);
