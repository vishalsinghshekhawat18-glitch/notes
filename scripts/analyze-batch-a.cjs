const fs = require('fs');
const path = require('path');

const batchA = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch-a-raw-text.json'), 'utf8'));

function dumpTopic(name, startPdf, endPdf) {
  console.log(`\n======================================================`);
  console.log(`TOPIC: ${name} (PDF ${startPdf} - ${endPdf})`);
  console.log(`======================================================\n`);

  const pages = batchA.filter(p => p.pdfPage >= startPdf && p.pdfPage <= endPdf);
  pages.forEach(p => {
    console.log(`\n----------------- PDF Page ${p.pdfPage} (Printed p.${p.printedPage}) [${p.text.length} chars] -----------------`);
    console.log(p.text);
  });
}

// Dump Topic 3 & 4
dumpTopic('Topic 3: Preamble', 20, 33);
dumpTopic('Topic 4: Schedules', 34, 40);
