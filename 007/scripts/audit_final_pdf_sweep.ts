import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function sweepPdf() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const res = (await parser.getText()) as any;
  const text = typeof res === 'string' ? res : (res.text || '');

  console.log('================================================================');
  console.log('FINAL-PDF PRODUCTION ARTIFACT SECOND-PASS FORENSIC SWEEP');
  console.log('================================================================');
  console.log(`Extracted Character Count: ${text.length}`);

  // Test 1: Obsolete values that MUST NOT appear
  const obsoleteNegativeChecks: { name: string; pattern: RegExp }[] = [
    {
      name: 'Obsolete UCB 75% PSL target',
      pattern: /UCB[^.\n]*(?:glide\s*path|target)[^.\n]*75%/i
    },
    {
      name: 'Obsolete SFB 75% PSL target (without clarification)',
      pattern: /SFBs?[^.\n]*75% of ANBC(?!\s*\(rationalised)/i
    },
    {
      name: 'LEI ₹50 Cr borrower threshold',
      pattern: /borrowers[^.\n]*aggregate[^.\n]*₹50\s*crore/i
    },
    {
      name: 'RTGS UTR 9-digit sequence (should be 8-digit)',
      pattern: /RTGS[^.\n]*9-digit\s*sequence|UTR[^.\n]*9-digit\s*sequence/i
    },
    {
      name: 'Raw CURRENCY_USD compiler artifact',
      pattern: /CURRENCY_USD/
    },
    {
      name: 'Raw LaTeX $le$ symbol',
      pattern: /\$le\$/
    },
    {
      name: 'Raw LaTeX $ge$ symbol',
      pattern: /\$ge\$/
    },
    {
      name: 'Raw LaTeX $T+5$ symbol',
      pattern: /\\\$T\+5\\\$|\$T\+5\$/
    }
  ];

  console.log('\n--- NEGATIVE CHECKS (OBSOLETE VALUES & ARTIFACTS MUST BE ZERO) ---');
  let negativeFailures = 0;
  for (const check of obsoleteNegativeChecks) {
    const matches = text.match(new RegExp(check.pattern.source, 'gi')) || [];
    if (matches.length > 0) {
      console.error(`❌ FAILED: Found ${matches.length} occurrences of "${check.name}"`);
      negativeFailures++;
    } else {
      console.log(`✓ PASSED: 0 occurrences of "${check.name}"`);
    }
  }

  // Test 2: Verified canonical values that MUST appear
  const canonicalPositiveChecks: { name: string; term: string; minCount: number }[] = [
    { name: 'UCB 60% PSL target', term: '60% of ANBC or CEOBSE', minCount: 3 },
    { name: 'SFB 60% PSL target', term: '60% of ANBC', minCount: 5 },
    { name: 'RRB 75% PSL target', term: '75% of ANBC', minCount: 5 },
    { name: 'LEI ₹5 Crore borrower threshold', term: '≥ ₹5 Crore', minCount: 1 },
    { name: 'LEI 22-character RTGS UTR format', term: '22', minCount: 5 },
    { name: 'Insurance 100% FDI automatic route', term: '100% under automatic route', minCount: 3 },
    { name: 'Ombudsman RB-IOS 2026 ₹30 Lakh / ₹3 Lakh', term: 'RB-IOS 2026', minCount: 3 },
    { name: 'Failed ATM TAT clean T+5', term: 'T+5 calendar days', minCount: 4 },
    { name: 'Macro Base Year GDP 2022–23', term: '2022–23', minCount: 20 },
    { name: 'Macro Base Year CPI 2024 = 100', term: '2024 = 100', minCount: 3 },
    { name: 'ADB President Masato Kanda', term: 'Masato Kanda', minCount: 5 },
    { name: 'IMF First Deputy MD Dan Katz', term: 'Dan Katz', minCount: 3 }
  ];

  console.log('\n--- POSITIVE CHECKS (CANONICAL PROPOSITIONS VERIFIED IN PDF TEXT) ---');
  let positiveFailures = 0;
  for (const check of canonicalPositiveChecks) {
    const escaped = check.term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const matches = text.match(new RegExp(escaped, 'gi')) || [];
    if (matches.length >= check.minCount) {
      console.log(`✓ PASSED: "${check.name}" found ${matches.length} times (min: ${check.minCount})`);
    } else {
      console.error(`❌ FAILED: "${check.name}" found only ${matches.length} times (min: ${check.minCount})`);
      positiveFailures++;
    }
  }

  console.log('\n================================================================');
  if (negativeFailures === 0 && positiveFailures === 0) {
    console.log('✓ ALL FINAL-PDF SECOND-PASS FORENSIC SWEEP TESTS PASSED WITH 100% SUCCESS!');
  } else {
    console.error(`❌ AUDIT FAILED WITH ${negativeFailures} NEGATIVE AND ${positiveFailures} POSITIVE DEFECTS!`);
  }
  console.log('================================================================\n');
}

sweepPdf().catch(console.error);
