import * as fs from 'fs';
import * as path from 'path';

const notesDir = path.resolve('007', 'notes', 'current_affairs');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.md'));

console.log('=== GLOBAL DEEP MULTI-CATEGORY SWEEP ===\n');

interface TestCheck {
  id: string;
  name: string;
  badRegex: RegExp;
  whitelistRegex?: RegExp;
  message: string;
}

const checks: TestCheck[] = [
  {
    id: 'UCB-75',
    name: 'UCB 75% PSL Target',
    badRegex: /(?:UCB|Urban Co-operative Bank)[^.\n]*(?:target|reach|glidepath|achieve)[^.\n]*75%/i,
    whitelistRegex: /superseded|earlier|obsolete|erstwhile|rationalised|replaces?|instead of/i,
    message: 'Found obsolete 75% PSL target stated for UCBs'
  },
  {
    id: 'SFB-75',
    name: 'SFB 75% PSL Target',
    badRegex: /(?:SFB|Small Finance Bank)[^.\n]*(?:target|quota|mandate)[^.\n]*75%/i,
    whitelistRegex: /superseded|earlier|obsolete|erstwhile|rationalised|replaces?|typographical/i,
    message: 'Found obsolete 75% PSL target stated for SFBs'
  },
  {
    id: 'LEI-50',
    name: 'LEI Borrower Threshold ₹50 Cr',
    badRegex: /LEI[^.\n]*borrowers?[^.\n]*(?:≥|>=|exceeding|aggregate)[^.\n]*₹?50\s*crore/i,
    whitelistRegex: /cross-border|foreign exchange|outward|remittance/i,
    message: 'Found obsolete ₹50 Cr borrower threshold for LEI'
  },
  {
    id: 'RTGS-9',
    name: 'RTGS UTR 9-digit sequence',
    badRegex: /RTGS[^.\n]*UTR[^.\n]*9-digit sequence/i,
    message: 'Found incorrect 9-digit sequence in RTGS UTR'
  },
  {
    id: 'INS-74',
    name: 'Insurance FDI 74%',
    badRegex: /Insurance FDI[^.\n]*74%/i,
    whitelistRegex: /erstwhile|hiked from|raised from|earlier|replaces?/i,
    message: 'Found obsolete 74% Insurance FDI stated as current'
  },
  {
    id: 'OMB-20L-ONLY',
    name: 'Ombudsman Compensation Unversioned',
    badRegex: /Ombudsman[^.\n]*award compensation up to \*\*₹20 Lakh\*\*(?!\s*\([^)]*pre-July)/i,
    message: 'Found unversioned ₹20L Ombudsman compensation'
  },
  {
    id: 'ADB-ASAKAWA',
    name: 'ADB President Asakawa as Current',
    badRegex: /ADB President[^.\n]*Masatsugu Asakawa|President is \*\*Masatsugu Asakawa\*\*/i,
    whitelistRegex: /succeeding|predecessor|former/i,
    message: 'Found Masatsugu Asakawa stated as current ADB President'
  },
  {
    id: 'IMF-GITA',
    name: 'IMF First Deputy MD Gita Gopinath as Current',
    badRegex: /First Deputy MD:\s*\*\*?Gita Gopinath\*\*?(?!\s*\(predecessor|\s*succeeded by)/i,
    message: 'Found Gita Gopinath stated as current IMF First Deputy MD'
  },
  {
    id: 'LATEX-T5',
    name: 'Escaped LaTeX T+5',
    badRegex: /\\\$T\+5\\\$|\$T\+5\$/i,
    message: 'Found escaped LaTeX delimiter around T+5'
  },
  {
    id: 'LATEX-LE',
    name: 'Escaped LaTeX le/ge',
    badRegex: /\\\$le\\\$|\$le\$|\\\$ge\\\$|\$ge\$/i,
    message: 'Found raw unrendered LaTeX le/ge symbol'
  }
];

let errorsCount = 0;

for (const file of files) {
  const filePath = path.join(notesDir, file);
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');

  lines.forEach((lineText, idx) => {
    const lineNum = idx + 1;
    for (const c of checks) {
      if (c.badRegex.test(lineText)) {
        if (c.whitelistRegex && c.whitelistRegex.test(lineText)) {
          continue; // Valid context
        }
        console.error(`[VIOLATION] [${c.id}] ${file}:${lineNum}`);
        console.error(`   Message: ${c.message}`);
        console.error(`   Line Content: ${lineText.trim()}\n`);
        errorsCount++;
      }
    }
  });
}

console.log('==============================================');
if (errorsCount === 0) {
  console.log('✓ ZERO CONTRADICTIONS FOUND ACROSS ALL SOURCE FILES!');
} else {
  console.error(`❌ FOUND ${errorsCount} RESIDUAL CONTRADICTION(S) IN SOURCE CORPUS!`);
}
console.log('==============================================');
