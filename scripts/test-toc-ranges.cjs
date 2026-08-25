const { POLITY_PDF_TOC } = require('../lib/ingestion/polity-pdf-ingestor');

let prevPdfEnd = 6; // After front matter (1-6)
for (const entry of POLITY_PDF_TOC) {
  if (entry.pdfStart !== prevPdfEnd + 1) {
    console.log(`Gap/Mismatch before Topic ${entry.topicNumber} (${entry.topicName}): prevEnd=${prevPdfEnd}, currentStart=${entry.pdfStart}`);
  }
  prevPdfEnd = entry.pdfEnd;
}
console.log(`Final pdfEnd=${prevPdfEnd}`);
