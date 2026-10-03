const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function checkVocabProdigy() {
  const filePath = path.join(process.cwd(), '007', "PDF's", '_OceanofPDF.com_Vocab_prodigy_-_Nimisha_bansal.pdf');
  const buf = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;
  console.log('Total pages in Vocab Prodigy:', pages.length);
  
  let pagesWithText = 0;
  let textSample = [];
  for (let i = 0; i < pages.length; i++) {
    const t = pages[i]?.text?.trim() || '';
    if (t.length > 20) {
      pagesWithText++;
      if (textSample.length < 10) {
        textSample.push({ page: i + 1, length: t.length, snippet: t.slice(0, 300).replace(/\n/g, ' ') });
      }
    }
  }
  console.log('Pages with text > 20 chars:', pagesWithText, 'out of', pages.length);
  console.log('Samples:', JSON.stringify(textSample, null, 2));
}

checkVocabProdigy().catch(console.error);
