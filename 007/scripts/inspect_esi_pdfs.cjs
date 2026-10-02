const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = path.join(process.cwd(), '007', "PDF's");
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

async function analyze() {
  console.log(`Found ${files.length} PDF files in ${dir}\n`);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const buffer = fs.readFileSync(fullPath);
    const uint8 = new Uint8Array(buffer);
    try {
      const p = new PDFParse(uint8);
      await p.load();
      const info = await p.getInfo();
      const page1 = await p.getPageText(1);
      const text1 = (page1.text || '').replace(/\s+/g, ' ').trim().slice(0, 350);
      
      console.log(`=== FILE: ${file} ===`);
      console.log(`Total Pages: ${info.pages} | Size: ${(buffer.length / 1024).toFixed(1)} KB`);
      console.log(`Sample Text (Page 1): ${text1}`);
      console.log('--------------------------------------------------\n');
    } catch (err) {
      console.log(`=== FILE: ${file} === ERROR: ${err.message}\n`);
    }
  }
}

analyze();
