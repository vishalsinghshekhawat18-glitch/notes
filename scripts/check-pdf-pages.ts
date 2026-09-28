import * as fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function check() {
  const buf = fs.readFileSync('print_output/04_Indian_Polity_Governance_A4_Print.pdf');
  const parser = new PDFParse({ data: new Uint8Array(buf) });
  const info = await parser.getInfo();
  console.log('Recompiled Chronological Polity PDF Total Pages:', info.total);
  await parser.destroy();
}
check();
