import * as fs from 'fs';
import * as path from 'path';

const outDir = 'c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text';

function getFileAnalysis(fileName: string) {
  const text = fs.readFileSync(path.join(outDir, fileName), 'utf-8');
  const lines = text.split('\n');
  return { fileName, length: text.length, lineCount: lines.length, text, lines };
}

async function runAnalysis() {
  const fCurrent = getFileAnalysis('Mains-Current-Affairs-Polity(English).txt');
  const fPart1 = getFileAnalysis('Mains-Part-1-(English.txt');
  const fState = getFileAnalysis('State-Polity-[English]-pdf.txt');
  const fUnit7 = getFileAnalysis('Unit-7-State-Politics-(ENGLISH).txt');

  console.log('=== 1. Mains-Current-Affairs-Polity(English) ===');
  // Find major headings
  const caHeadings = fCurrent.lines.filter(l => 
    l.length < 80 && (
      l.includes('Deep Dive') || 
      l.includes('Why in discussion?') || 
      /^[0-9]+\.\s+[A-Z]/.test(l) ||
      /^[A-Z\s]{4,}$/.test(l)
    )
  ).slice(0, 40);
  console.log('Sample CA Headings:', caHeadings.slice(0, 20));

  console.log('\n=== 2. State-Polity-[English]-pdf (TOC) ===');
  // Let's find INDEX in State-Polity
  const stateLines = fState.lines;
  for (let i = 0; i < Math.min(200, stateLines.length); i++) {
    if (stateLines[i].includes('INDEX') || stateLines[i].includes('Governor') || stateLines[i].includes('Chief Minister')) {
      console.log(`L${i}: ${stateLines[i]}`);
    }
  }

  console.log('\n=== 3. Unit-7-State-Politics-(ENGLISH) ===');
  console.log(fUnit7.lines.slice(0, 30).join('\n'));
}

runAnalysis();
