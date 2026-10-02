import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function testPdf(name: string, path: string) {
  try {
    const dataBuffer = fs.readFileSync(path);
    const data = await pdf(dataBuffer, { max: 15 });
    console.log(`========================================`);
    console.log(`=== ${name} ===`);
    console.log(`Total Pages: ${data.numpages}`);
    console.log(`Sample Text:\n${data.text.slice(0, 1500)}`);
  } catch (e: any) {
    console.error(`Error reading ${name}:`, e.message);
  }
}

async function main() {
  await testPdf('Ramesh Singh', '007/PDF\'s/Indian_Economy_-_Ramesh_Singh.pdf');
  await testPdf('Vivek Singh', '007/PDF\'s/Indian_economy_-_Vivek_singh.pdf');
  await testPdf('Sanjeev Verma', '007/PDF\'s/Indian_Economy_-_Sanjeev_Verma.pdf');
}

main();
