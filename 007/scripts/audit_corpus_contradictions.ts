import * as fs from 'fs';
import * as path from 'path';

const notesDir = path.resolve('007', 'notes', 'current_affairs');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.md'));

console.log('=== GLOBAL SECOND-PASS MULTI-CATEGORY SWEEP ===\n');

interface AuditCheck {
  category: string;
  pattern: RegExp;
  obsoletePattern: RegExp;
  description: string;
}

const checks: AuditCheck[] = [
  // 1. PSL
  {
    category: 'PSL - UCB',
    pattern: /UCB|Urban Co-operative/i,
    obsoletePattern: /75%.*ANBC|ANBC.*75%|glide.*75%|March 31, 2026.*75%/i,
    description: 'UCB PSL target stated as 75% instead of 60%'
  },
  {
    category: 'PSL - SFB',
    pattern: /SFB|Small Finance Bank/i,
    obsoletePattern: /Total PSL.*75%|PSL.*75% of ANBC|SFB PSL Quota: \*\*75%/i,
    description: 'SFB PSL target stated as 75% without noting revision to 60%'
  },
  // 2. LEI
  {
    category: 'LEI Threshold',
    pattern: /LEI|Legal Entity Identifier/i,
    obsoletePattern: /borrowers.*≥\s*₹50\s*crore|non-individual borrowers.*50\s*crore/i,
    description: 'LEI borrower threshold stated as ₹50 Cr instead of ₹5 Cr'
  },
  // 3. RTGS UTR
  {
    category: 'RTGS UTR',
    pattern: /RTGS.*UTR|UTR.*RTGS/i,
    obsoletePattern: /9-digit sequence|4\s*\+\s*1\s*\+\s*8\s*\+\s*9/i,
    description: 'RTGS UTR decomposed into 9-digit sequence instead of 8+8'
  },
  // 4. Insurance FDI
  {
    category: 'Insurance FDI',
    pattern: /Insurance.*FDI|FDI.*Insurance/i,
    obsoletePattern: /74%.*insurance companies|FDI Limit:\s*74%/i,
    description: 'Insurance FDI stated as 74% instead of 100%'
  },
  // 5. Ombudsman Compensation
  {
    category: 'Ombudsman Compensation',
    pattern: /Ombudsman.*compensation|RB-IOS.*Lakh/i,
    obsoletePattern: /up to ₹20 Lakh(?!\s*\([^)]*pre-July)/i,
    description: 'Ombudsman compensation stated only as ₹20L without versioning RB-IOS 2026 (₹30L)'
  },
  // 6. ATM TAT T+5
  {
    category: 'ATM TAT',
    pattern: /Failed ATM|ATM.*compensation|T\+5/i,
    obsoletePattern: /\\\$T\+5\\\$|\$T\+5\$/i,
    description: 'Failed ATM reversal has escaped LaTeX syntax ($T+5$)'
  },
  // 7. Base Years
  {
    category: 'Macro Base Years',
    pattern: /Base Year|base year/i,
    obsoletePattern: /Current Base Year:\s*\*\*2011-12|Current Base Year:\s*\*\*2012/i,
    description: 'GDP/CPI base year stated as current 2011-12/2012 without 2026 series'
  },
  // 8. Leadership
  {
    category: 'ADB Leadership',
    pattern: /Asian Development Bank|ADB/i,
    obsoletePattern: /President.*Asakawa|Masatsugu Asakawa(?!\s*\(predecessor|\s*succeeding)/i,
    description: 'ADB President stated as Asakawa instead of Masato Kanda'
  },
  {
    category: 'IMF Leadership',
    pattern: /International Monetary Fund|IMF/i,
    obsoletePattern: /First Deputy MD:\s*Gita Gopinath(?!\s*\(predecessor|\s*succeeded by)/i,
    description: 'IMF First Deputy MD stated as Gita Gopinath without Dan Katz'
  },
  // 9. DICGC 90-day
  {
    category: 'DICGC Moratorium',
    pattern: /DICGC.*Moratorium|Section 18A/i,
    obsoletePattern: /90\s*days.*(?!\b45\b)/i,
    description: 'DICGC 90-day missing 45+45 breakdown'
  }
];

let totalHits = 0;

for (const file of files) {
  const filePath = path.join(notesDir, file);
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');

  lines.forEach((text, idx) => {
    const lineNum = idx + 1;
    for (const check of checks) {
      if (check.pattern.test(text) && check.obsoletePattern.test(text)) {
        console.log(`[FLAG] [${check.category}] ${file}:${lineNum}`);
        console.log(`   Desc: ${check.description}`);
        console.log(`   Line: ${text.trim()}\n`);
        totalHits++;
      }
    }
  });
}

console.log(`Total Flagged Anomaly Lines across Source Corpus: ${totalHits}`);
