import fs from 'fs';
import path from 'path';

const rawPages = JSON.parse(fs.readFileSync('scripts/raw-observations-dump.json', 'utf8'));
const page75 = rawPages.find((p: any) => p.printedPage === 75);

console.log('--- PRINTED PAGE 75 (PDF PAGE 81) FULL TEXT STREAM ---');
console.log(page75?.fullText);
