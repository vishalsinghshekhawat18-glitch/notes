import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function runBw5Audit() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  console.log('======================================================');
  console.log('AUDITING FINAL BINARY PDF: BW(5)');
  console.log('File:', pdfPath);
  console.log('======================================================');

  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const text = (await parser.getText()).text;
  console.log(`Total extracted character count: ${text.length}`);

  let failed = false;

  console.log('\n--- 1. SPECIFIC NEGATIVE TARGETS (MUST BE 0) ---');
  
  // 1. "1 year" in Ombudsman context
  const omb1YearMatches = [...text.matchAll(/(?:complaint[^.\n]*Ombudsman[^.\n]*1\s*year|Ombudsman[^.\n]*within\s*1\s*year|filing\s*window[^.\n]*1\s*year)/gi)];
  if (omb1YearMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "1 year" + Ombudsman filing window');
  } else {
    console.error(`✗ FAIL [${omb1YearMatches.length} occurrences]: "1 year" + Ombudsman:`, omb1YearMatches.map(m => m[0]));
    failed = true;
  }

  // 2. "award or rejection" in appeal context
  const awardRejectionMatches = [...text.matchAll(/award\s*or\s*rejection/gi)];
  if (awardRejectionMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "award or rejection" in appeal context');
  } else {
    console.error(`✗ FAIL [${awardRejectionMatches.length} occurrences]: "award or rejection":`, awardRejectionMatches.map(m => m[0]));
    failed = true;
  }

  // 3. "Payment System Participants" in RB-IOS context
  const pspMatches = [...text.matchAll(/Payment\s*System\s*Participants/gi)];
  if (pspMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "Payment System Participants" in RB-IOS coverage');
  } else {
    console.error(`✗ FAIL [${pspMatches.length} occurrences]: "Payment System Participants":`, pspMatches.map(m => m[0]));
    failed = true;
  }

  // 4. "3 working days" combined with new digital fraud compensation
  const fraud3DaysMatches = [...text.matchAll(/(?:new|small-value|EBT|2027)[^.\n]*fraud[^.\n]*3\s*working\s*days|3\s*working\s*days[^.\n]*(?:new|small-value|EBT|2027)\s*fraud/gi)];
  if (fraud3DaysMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "3 working days" for new digital fraud compensation');
  } else {
    console.error(`✗ FAIL [${fraud3DaysMatches.length} occurrences]: "3 working days" in new fraud:`, fraud3DaysMatches.map(m => m[0]));
    failed = true;
  }

  // 5. "33,668" (BHAVYA obsolete figure)
  const bhavyaOldMatches = [...text.matchAll(/33[,.]?668/g)];
  if (bhavyaOldMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "33,668" (Obsolete BHAVYA figure)');
  } else {
    console.error(`✗ FAIL [${bhavyaOldMatches.length} occurrences]: "33,668" found in PDF:`, bhavyaOldMatches.map(m => m[0]));
    failed = true;
  }

  console.log('\n--- 2. SPECIFIC POSITIVE TARGETS (MUST BE PRESENT) ---');

  // Positive 1: "90 days from expiry of the applicable response timeline"
  const omb90DaysMatches = [...text.matchAll(/90\s*days\s*from\s*expiry\s*of\s*the\s*applicable\s*response\s*timeline/gi)];
  if (omb90DaysMatches.length >= 2) {
    console.log(`✓ PASS [${omb90DaysMatches.length} occurrences]: RB-IOS 2026 filing deadline within 90 days from expiry of response timeline`);
  } else {
    console.error(`✗ FAIL [${omb90DaysMatches.length} occurrences]: RB-IOS 90-day deadline not found enough times!`);
    failed = true;
  }

  // Positive 2: Appeal available only against an Award
  const appealAwardMatches = [...text.matchAll(/Appeal\s*is\s*available\s*(?:only|strictly)\s*against\s*an\s*Award\s*of\s*the\s*RBI\s*Ombudsman/gi)];
  if (appealAwardMatches.length >= 2) {
    console.log(`✓ PASS [${appealAwardMatches.length} occurrences]: Appeal available strictly against Award of Ombudsman`);
  } else {
    console.error(`✗ FAIL [${appealAwardMatches.length} occurrences]: Appeal only against Award not found enough times!`);
    failed = true;
  }

  // Positive 3: Non-bank Prepaid Payment Instrument Issuers
  const ppiMatches = [...text.matchAll(/Non-bank\s*Prepaid\s*Payment\s*Instrument\s*Issuers/gi)];
  if (ppiMatches.length >= 2) {
    console.log(`✓ PASS [${ppiMatches.length} occurrences]: RB-IOS 2026 coverage category "Non-bank Prepaid Payment Instrument Issuers"`);
  } else {
    console.error(`✗ FAIL [${ppiMatches.length} occurrences]: Non-bank PPI Issuers not found enough times!`);
    failed = true;
  }

  // Positive 4: "5 calendar days" + digital fraud
  const fraud5DaysMatches = [...text.matchAll(/5\s*calendar\s*days[^.\n]*(?:NCRP|1930|bank|fraud|compensation)|(?:NCRP|1930|bank|fraud|compensation)[^.\n]*5\s*calendar\s*days/gi)];
  if (fraud5DaysMatches.length >= 2) {
    console.log(`✓ PASS [${fraud5DaysMatches.length} occurrences]: "5 calendar days" reporting window for new digital fraud`);
  } else {
    console.error(`✗ FAIL [${fraud5DaysMatches.length} occurrences]: 5 calendar days digital fraud not found enough times!`);
    failed = true;
  }

  // Positive 5: "33,660" (BHAVYA canonical figure)
  const bhavyaNewMatches = [...text.matchAll(/33[,.]?660/g)];
  if (bhavyaNewMatches.length >= 3) {
    console.log(`✓ PASS [${bhavyaNewMatches.length} occurrences]: "33,660" (Canonical BHAVYA outlay figure)`);
  } else {
    console.error(`✗ FAIL [${bhavyaNewMatches.length} occurrences]: 33,660 not found enough times!`);
    failed = true;
  }

  // Positive 6: Legacy 2017 3 working days rule explicitly retained and demarcated
  const legacy3DaysMatches = [...text.matchAll(/legacy\s*2017[^.\n]*3\s*working\s*days|3\s*working\s*days[^.\n]*legacy/gi)];
  if (legacy3DaysMatches.length >= 2) {
    console.log(`✓ PASS [${legacy3DaysMatches.length} occurrences]: Legacy 2017 zero-liability 3 working days rule preserved with explicit demarcation`);
  } else {
    console.error(`✗ FAIL [${legacy3DaysMatches.length} occurrences]: Legacy 2017 3 working days demarcation not found enough times!`);
    failed = true;
  }

  console.log('\n======================================================');
  if (failed) {
    console.error('🔴 BW(5) POST-COMPILATION AUDIT FAILED');
    process.exit(1);
  } else {
    console.log('🟢 BW(5) POST-COMPILATION AUDIT PASSED WITH 100% SUCCESS!');
  }
  console.log('======================================================');
}

runBw5Audit().catch(console.error);
