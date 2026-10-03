const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function inspectPDF(filePath, outTOCPath, maxPages = 40) {
  console.log(`\n========================================`);
  console.log(`Inspecting: ${filePath}`);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  const stat = fs.statSync(filePath);
  console.log(`Size: ${(stat.size / (1024 * 1024)).toFixed(2)} MB`);

  const buf = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages || [];
  console.log(`Total Pages: ${pages.length}`);

  let headerText = `FILE: ${filePath}\nTOTAL PAGES: ${pages.length}\n`;
  for (let i = 0; i < Math.min(maxPages, pages.length); i++) {
    headerText += `\n=== PAGE ${i + 1} ===\n` + (pages[i]?.text || '');
  }
  fs.writeFileSync(outTOCPath, headerText);
  console.log(`Saved TOC & Front Matter to ${outTOCPath}`);

  // Also print snippet of first few pages to stdout
  for (let i = 0; i < Math.min(10, pages.length); i++) {
    const snippet = (pages[i]?.text || '').trim().replace(/\s+/g, ' ').slice(0, 150);
    if (snippet) console.log(`Page ${i + 1}: ${snippet}`);
  }
}

async function main() {
  await inspectPDF(
    "007/PDF's/_OceanofPDF.com_Objective_Indian_and_World_Geography___General_Studies_-_Paper_1_-_Majid_Husain.pdf",
    "007/scripts/majid_husain_toc.txt",
    40
  );

  await inspectPDF(
    "007/PDF's/_OceanofPDF.com_Environment_-_Shankar_IAS_Shankar.pdf",
    "007/scripts/shankar_ias_toc.txt",
    40
  );
}

main().catch(console.error);
