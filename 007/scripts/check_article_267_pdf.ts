import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function checkPdf() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const res = (await parser.getText()) as any;
  const text = typeof res === 'string' ? res : (res.text || '');

  console.log('Total characters extracted:', text.length);
  const foundArt267 = text.includes('placed at the disposal of the President');
  const foundArt283 = text.includes('Article 283 and applicable rules');
  const foundFourthSchedule = text.includes('233 elected representatives + 12 members nominated by the President');
  const oldHeldBy = text.includes('held by Finance Secretary on behalf of President');
  const oldPopulation = text.includes('allocated strictly based on population');

  console.log('Found updated Article 267 (disposal of the President):', foundArt267);
  console.log('Found Article 283:', foundArt283);
  console.log('Found updated Fourth Schedule:', foundFourthSchedule);
  console.log('Old "held by Finance Secretary" text exists (MUST BE FALSE):', oldHeldBy);
  console.log('Old "allocated strictly based on population" text exists (MUST BE FALSE):', oldPopulation);
}

checkPdf().catch(console.error);
