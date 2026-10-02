const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function dumpAllText() {
  console.log("Reading PDF...");
  const buf = fs.readFileSync("007/PDF's/_OceanofPDF.com_Objective_Indian_Polity_-_M_Laxmikant.pdf");
  const parser = new PDFParse({ data: buf });
  const textObj = await parser.getText();
  const pages = textObj.pages;
  console.log("Total pages:", pages.length);

  // Group pages by part
  // Part 1: p. 15 to 78 (I.5 to I.64)
  // Part 2: p. 79 to 110 (II.5 to II.32)
  // Part 3: p. 111 to 180 (III.5 to III.70)
  // Part 4 & 5 & 6: p. 181 to 254 (IV.5 to VI.10)
  // Part 7 & 8: p. 255 to 320 (VII.5 to VIII.28)
  // Part 9, 10, 11: p. 321 to 368 (IX.5 to XI.6)
  // Part 12 (Appendices): p. 369 to 397 (XII.5 to XII.30)
  // Part 13 (Model Tests 1-10): p. 398 to 469 (XIII.5 to XIII.74)

  const sections = [
    { name: "part_01_framework", start: 14, end: 78 },
    { name: "part_02_system_govt", start: 79, end: 110 },
    { name: "part_03_central_govt", start: 111, end: 180 },
    { name: "part_04_state_local_uts", start: 181, end: 254 },
    { name: "part_05_bodies", start: 255, end: 320 },
    { name: "part_06_dynamics_working", start: 321, end: 368 },
    { name: "part_07_appendices", start: 369, end: 397 },
    { name: "part_08_model_tests", start: 398, end: 468 },
  ];

  for (const sec of sections) {
    let out = '';
    for (let i = sec.start; i <= sec.end; i++) {
      out += `\n--- [PDF PAGE ${i+1}] ---\n` + (pages[i] ? pages[i].text : '');
    }
    fs.writeFileSync(`007/scripts/${sec.name}.txt`, out);
    console.log(`Saved ${sec.name}.txt (${out.length} chars)`);
  }
}

dumpAllText().catch(console.error);
