import * as fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function getChapterTitles() {
  const filePath = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/State-Polity-English-(PYQ)-pdf.pdf';
  const dataBuffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const textRes = await parser.getText();
  const lines = textRes.text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  let currentQ = 0;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const match = l.match(/^1\.\s+/);
    if (match) {
      // Print the preceding 5 lines to see the chapter title!
      console.log(`\n--- Chapter Start near line ${i} (previous ended at Q${currentQ}) ---`);
      console.log(lines.slice(Math.max(0, i - 6), i).join(' // '));
      console.log(`Q1: ${l.slice(0, 100)}`);
    }
    const qMatch = l.match(/^(\d+)\.\s+/);
    if (qMatch) {
      currentQ = parseInt(qMatch[1]);
    }
  }

  await parser.destroy();
}

getChapterTitles();
