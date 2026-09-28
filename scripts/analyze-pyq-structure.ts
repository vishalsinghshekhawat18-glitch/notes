import * as fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function analyzePyqPdf() {
  const filePath = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/State-Polity-English-(PYQ)-pdf.pdf';
  const dataBuffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const textRes = await parser.getText();

  console.log(`Total extracted characters: ${textRes.text.length}`);
  
  // Find question numbers and chapter headings
  const lines = textRes.text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  // Detect where numbering restarts (1., 2., ...) which indicates a new chapter!
  const chapterStarts: { lineNum: number; line: string; prevQuestion: number }[] = [];
  let currentQ = 0;
  let totalQuestionsCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const match = l.match(/^(\d+)\.\s+/);
    if (match) {
      const qNum = parseInt(match[1]);
      if (qNum === 1 && currentQ > 0) {
        // Numbering restarted -> New topic/chapter!
        chapterStarts.push({ lineNum: i, line: lines.slice(Math.max(0, i - 4), i).join(' | '), prevQuestion: currentQ });
      }
      currentQ = qNum;
      totalQuestionsCount++;
    }
  }

  console.log(`Total Question mentions found: ${totalQuestionsCount}`);
  console.log(`Number of Chapter / Topic restarts detected: ${chapterStarts.length}`);
  chapterStarts.forEach((cs, idx) => {
    console.log(`Chapter ${idx + 1} restart at line ${cs.lineNum} (previous ended at Q${cs.prevQuestion}): Context: [${cs.line}]`);
  });

  await parser.destroy();
}

analyzePyqPdf();
