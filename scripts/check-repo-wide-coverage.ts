import * as fs from 'fs';
import * as path from 'path';

const rootDir = 'c:/Users/visha/OneDrive/Documents/Notes';
const allMdFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.md') && !f.startsWith('.'));

const terms = [
  'Sarpanch Pati',
  'Mission Shakti',
  'R.N. Ravi',
  'Davinder Singh',
  'Sub-classification',
  'Caste Census',
  'Three-Language Formula',
  'Bharatiya Nyaya Sanhita',
  'Aligarh Muslim University',
  'Azeez Basha',
  'Living Will',
  'Kovind',
  'Simultaneous Elections',
  'Waqf',
  'Gurmukh Nihal Singh',
  'Haribhau Bagde',
  'Raghukul Tilak',
  'Bhajan Lal Sharma',
  'Vasudev Devnani',
  'Kamal Kant Verma',
  'Kasliwal',
  'Kanta Kumari Bhatnagar',
  'Amar Singh Rathore',
  'Kaurani',
  'Pradyuman Singh',
  'Kushal Singh',
  'Usha Sharma',
  'POCSO',
  'Domestic Violence',
  'POSH',
  'Kanta Khaturia',
  'Bharat Adivasi Party',
  'Rashtriya Loktantrik Party',
  'Rajni Kothari',
  'Nari Shakti Vandan'
];

console.log(`Checking across ${allMdFiles.length} markdown files...`);

for (const t of terms) {
  const re = new RegExp(t, 'i');
  const matchingFiles = allMdFiles.filter(f => {
    const content = fs.readFileSync(path.join(rootDir, f), 'utf-8');
    return re.test(content);
  });
  if (matchingFiles.length > 0) {
    console.log(`[FOUND in ${matchingFiles.join(', ')}] : ${t}`);
  } else {
    console.log(`[NOWHERE in repo] : ${t}`);
  }
}
