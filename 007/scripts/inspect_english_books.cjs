const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function inspectPDF(filePath, name, maxPages = 20) {
  console.log(`\n==================================================`);
  console.log(`INSPECTING: ${name}`);
  console.log(`File: ${filePath}`);
  console.log(`Size: ${(fs.statSync(filePath).size / (1024 * 1024)).toFixed(2)} MB`);
  
  const buf = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;
  
  console.log(`Total Pages: ${pages.length}`);
  
  let sample = '';
  for (let i = 0; i < Math.min(maxPages, pages.length); i++) {
    sample += `\n--- [PAGE ${i+1}] ---\n` + (pages[i] ? pages[i].text : '');
  }
  
  console.log(`--- First ${maxPages} Pages Text Sample ---`);
  console.log(sample.slice(0, 4000));
  
  // Save first 30 pages of text to a file for deeper analysis
  const dumpPath = path.join(process.cwd(), '007', 'scripts', `${name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}_sample.txt`);
  let fullSample = '';
  for (let i = 0; i < Math.min(30, pages.length); i++) {
    fullSample += `\n--- [PAGE ${i+1}] ---\n` + (pages[i] ? pages[i].text : '');
  }
  fs.writeFileSync(dumpPath, fullSample);
  console.log(`Dumped 30 pages to ${dumpPath}`);
}

async function main() {
  const dir = path.join(process.cwd(), '007', "PDF's");
  const files = fs.readdirSync(dir);
  
  const blackBook = files.find(f => f.includes('BLACK_BOOK'));
  const vocabProdigy = files.find(f => f.includes('Vocab_prodigy'));
  
  if (blackBook) {
    await inspectPDF(path.join(dir, blackBook), 'black_book_english_vocabulary', 20);
  }
  if (vocabProdigy) {
    await inspectPDF(path.join(dir, vocabProdigy), 'vocab_prodigy_nimisha_bansal', 20);
  }
}

main().catch(console.error);
