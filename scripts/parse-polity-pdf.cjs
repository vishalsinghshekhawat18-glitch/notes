const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function run() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  
  const parser = new PDFParse(uint8);
  
  const info = await parser.getInfo();
  console.log('PDF Info:', JSON.stringify(info, null, 2));
  
  const textResult = await parser.getText();
  console.log('textResult keys:', Object.keys(textResult));
  console.log('Total pages:', textResult.pages ? textResult.pages.length : textResult.numpages || 'unknown');
  
  if (textResult.pages) {
    console.log(`Extracted ${textResult.pages.length} pages.`);
    
    // Save table of contents preview (first 10 pages)
    console.log('\n--- PAGES 1 TO 6 PREVIEW ---');
    for (let i = 0; i < Math.min(6, textResult.pages.length); i++) {
      console.log(`\n=================== PAGE ${i + 1} ===================`);
      console.log(textResult.pages[i].text.substring(0, 1000));
    }

    const pagesData = textResult.pages.map((p, idx) => ({
      pageNum: idx + 1,
      charCount: p.text.length,
      firstLines: p.text.split('\n').filter(l => l.trim()).slice(0, 5).join(' | '),
      hasTables: /table|chart|tabular|column|vs\./i.test(p.text),
      hasDiagrams: /diagram|figure|flowchart|illustration/i.test(p.text),
      hasPYQ: /pyq|upsc|ras|rpsc|prelims|mains|question/i.test(p.text),
      hasExamTag: /ras prelims|ras mains|psi|upsc/i.test(p.text),
      preview: p.text.substring(0, 400)
    }));

    fs.writeFileSync(
      path.join(__dirname, 'polity-pages-inventory.json'),
      JSON.stringify({
        totalPages: textResult.pages.length,
        info,
        pages: pagesData
      }, null, 2)
    );
    console.log('\nSaved full inventory to scripts/polity-pages-inventory.json');
  } else {
    console.log('Text result preview:', typeof textResult === 'string' ? textResult.substring(0, 2000) : textResult);
  }
}

run().catch(console.error);
