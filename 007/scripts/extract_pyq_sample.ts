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

  console.log('Calling parser.getText()...');
  const textResult = await parser.getText();
  console.log('Type of textResult:', typeof textResult);
  if (typeof textResult === 'string') {
    console.log('Length:', textResult.length);
    console.log('Preview (First 1500 chars):');
    console.log(textResult.slice(0, 1500));
  } else {
    console.log('Keys:', Object.keys(textResult));
    console.log('Result sample:', JSON.stringify(textResult).slice(0, 1000));
  }

  await parser.destroy();
}

main().catch(console.error);
