import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'lib/benchmark/batch-ancient-india-canonical-seed.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.replace(/confidence:\s*(?:0\.\d+|1\.0),/g, "confidence: 'VERY_HIGH',");
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed all confidences to string in batch-ancient-india-canonical-seed.ts');
