const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function inspectPdf() {
  const pdfPath = path.join(__dirname, '..', 'Indian-Polity-English-[2026]-pdf.pdf');
  const dataBuffer = fs.readFileSync(pdfPath);

  console.log('Loading PDF...');
  
  // Custom pager callback to capture page-by-page text
  const pages = [];
  function render_page(pageData) {
    let render_options = {
      normalizeWhitespace: false,
      disableCombineTextItems: false
    }
    return pageData.getTextContent(render_options)
      .then(function(textContent) {
        let lastY, text = '';
        for (let item of textContent.items) {
          if (lastY == item.transform[5] || !lastY){
            text += item.str;
          } else {
            text += '\n' + item.str;
          }
          lastY = item.transform[5];
        }
        pages.push(text);
        return text;
      });
  }

  let options = {
    pagerender: render_page
  };

  const data = await pdf(dataBuffer, options);
  console.log(`Total Pages: ${data.numpages}`);
  console.log(`PDF Info:`, data.info);

  // Inspect first 10 pages for TOC
  console.log('\n--- FIRST 6 PAGES PREVIEW ---');
  for (let i = 0; i < Math.min(6, pages.length); i++) {
    console.log(`\n=== PAGE ${i + 1} ===\n`);
    console.log(pages[i].substring(0, 800));
  }

  // Save parsed pages summary to a JSON file for analysis
  fs.writeFileSync(
    path.join(__dirname, 'parsed-summary.json'),
    JSON.stringify({
      numpages: data.numpages,
      info: data.info,
      pageSamples: pages.map((p, idx) => ({
        pageNum: idx + 1,
        length: p.length,
        hasTableOrDiagram: /table|chart|diagram|figure|box|flowchart/i.test(p),
        hasPYQ: /pyq|upsc|ras|rpsc|prelims|mains|question/i.test(p),
        firstLines: p.split('\n').filter(l => l.trim()).slice(0, 4).join(' | ')
      }))
    }, null, 2)
  );

  console.log('\nSummary saved to scripts/parsed-summary.json');
}

inspectPdf().catch(console.error);
