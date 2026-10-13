import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function runBw6Audit() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  console.log('======================================================');
  console.log('AUDITING FINAL BINARY PDF: BW(6) POST-COMPILATION AUDIT');
  console.log('File:', pdfPath);
  console.log('======================================================');

  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const text = (await parser.getText()).text;
  console.log(`Total extracted character count: ${text.length}`);

  let failed = false;

  console.log('\n--- 1. SPECIFIC NEGATIVE TARGETS (MUST BE 0) ---');
  
  // 1. "85% of loss" / "85%-of-loss"
  const lossMatches = [...text.matchAll(/85%\s*-?\s*of\s*loss(?!es)/gi)];
  if (lossMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "85% of loss" / "85%-of-loss"');
  } else {
    console.error(`✗ FAIL [${lossMatches.length} occurrences]: "85% of loss":`, lossMatches.map(m => m[0]));
    failed = true;
  }

  // 2. "₹50,000 net loss" / "50,000 net loss"
  const netLoss50kMatches = [...text.matchAll(/(?:₹\s*|Rs\.?\s*)?50[,.]?000\s*net\s*loss|net\s*loss\s*(?:of\s*)?(?:₹\s*|Rs\.?\s*)?50[,.]?000/gi)];
  if (netLoss50kMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "₹50,000 net loss" / "50,000 net loss"');
  } else {
    console.error(`✗ FAIL [${netLoss50kMatches.length} occurrences]: "50,000 net loss":`, netLoss50kMatches.map(m => m[0]));
    failed = true;
  }

  // 3. "1 year" in Ombudsman context
  const omb1YearMatches = [...text.matchAll(/(?:complaint[^.\n]*Ombudsman[^.\n]*1\s*year|Ombudsman[^.\n]*within\s*1\s*year|filing\s*window[^.\n]*1\s*year)/gi)];
  if (omb1YearMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "1 year" + Ombudsman filing window');
  } else {
    console.error(`✗ FAIL [${omb1YearMatches.length} occurrences]: "1 year" + Ombudsman:`, omb1YearMatches.map(m => m[0]));
    failed = true;
  }

  // 4. "award or rejection" in appeal context
  const awardRejectionMatches = [...text.matchAll(/award\s*or\s*rejection/gi)];
  if (awardRejectionMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "award or rejection" in appeal context');
  } else {
    console.error(`✗ FAIL [${awardRejectionMatches.length} occurrences]: "award or rejection":`, awardRejectionMatches.map(m => m[0]));
    failed = true;
  }

  // 5. "Payment System Participants" in RB-IOS context
  const pspMatches = [...text.matchAll(/Payment\s*System\s*Participants/gi)];
  if (pspMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "Payment System Participants" in RB-IOS coverage');
  } else {
    console.error(`✗ FAIL [${pspMatches.length} occurrences]: "Payment System Participants":`, pspMatches.map(m => m[0]));
    failed = true;
  }

  // 6. "33,668" (BHAVYA obsolete figure)
  const bhavyaOldMatches = [...text.matchAll(/33[,.]?668/g)];
  if (bhavyaOldMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "33,668" (Obsolete BHAVYA figure)');
  } else {
    console.error(`✗ FAIL [${bhavyaOldMatches.length} occurrences]: "33,668" found in PDF:`, bhavyaOldMatches.map(m => m[0]));
    failed = true;
  }

  // 7. LaTeX leakage tokens
  const latexMatches = [...text.matchAll(/(?:CURRENCY_USD|\$le\$|\$ge\$|\$T\+5\$)/gi)];
  if (latexMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: LaTeX leakage tokens (CURRENCY_USD, $le$, $ge$, $T+5$)');
  } else {
    console.error(`✗ FAIL [${latexMatches.length} occurrences]: LaTeX leakage:`, latexMatches.map(m => m[0]));
    failed = true;
  }

  console.log('\n--- 2. SPECIFIC POSITIVE TARGETS (MUST BE PRESENT) ---');

  // Positive 1: "85% of net loss"
  const netLoss85Matches = [...text.matchAll(/85%\s*of\s*net\s*loss/gi)];
  if (netLoss85Matches.length >= 2) {
    console.log(`✓ PASS [${netLoss85Matches.length} occurrences]: "85% of net loss"`);
  } else {
    console.error(`✗ FAIL [${netLoss85Matches.length} occurrences]: "85% of net loss" not found enough times!`);
    failed = true;
  }

  // Positive 2: "gross loss up to ₹50,000"
  const grossLossMatches = [...text.matchAll(/gross\s*loss\s*up\s*to\s*(?:₹\s*|Rs\.?\s*)?50[,.]?000/gi)];
  if (grossLossMatches.length >= 2) {
    console.log(`✓ PASS [${grossLossMatches.length} occurrences]: "gross loss up to ₹50,000"`);
  } else {
    console.error(`✗ FAIL [${grossLossMatches.length} occurrences]: "gross loss up to ₹50,000" not found enough times!`);
    failed = true;
  }

  // Positive 3: Canonical Exam Formula
  const canonicalFormulaMatches = [...text.matchAll(/Eligible\s*fraudulent\s*EBT\s*involving\s*gross\s*loss\s*up\s*to\s*(?:₹\s*|Rs\.?\s*)?50[,.]?000:\s*compensation\s*=\s*85%\s*of\s*net\s*loss\s*or\s*(?:₹\s*|Rs\.?\s*)?25[,.]?000/gi)];
  if (canonicalFormulaMatches.length >= 2) {
    console.log(`✓ PASS [${canonicalFormulaMatches.length} occurrences]: Canonical EBT Exam Formula`);
  } else {
    console.error(`✗ FAIL [${canonicalFormulaMatches.length} occurrences]: Canonical EBT Exam Formula not found enough times!`);
    failed = true;
  }

  // Positive 4: "Effective 1 January 2027 — 5 calendar days"
  const eff2027Matches = [...text.matchAll(/Effective\s*1\s*January\s*2027\s*—\s*5\s*calendar\s*days/gi)];
  if (eff2027Matches.length >= 2) {
    console.log(`✓ PASS [${eff2027Matches.length} occurrences]: "Effective 1 January 2027 — 5 calendar days"`);
  } else {
    console.error(`✗ FAIL [${eff2027Matches.length} occurrences]: "Effective 1 January 2027 — 5 calendar days" not found enough times!`);
    failed = true;
  }

  // Positive 5: "Pre-1 January 2027 / legacy 2017 customer-liability framework"
  const legacyDemarcMatches = [...text.matchAll(/Pre-1\s*January\s*2027\s*\/\s*legacy\s*2017\s*customer-liability\s*framework/gi)];
  if (legacyDemarcMatches.length >= 2) {
    console.log(`✓ PASS [${legacyDemarcMatches.length} occurrences]: "Pre-1 January 2027 / legacy 2017 customer-liability framework"`);
  } else {
    console.error(`✗ FAIL [${legacyDemarcMatches.length} occurrences]: Legacy framework demarcation not found enough times!`);
    failed = true;
  }

  // Positive 6: "90 days from expiry of the applicable response timeline"
  const omb90DaysMatches = [...text.matchAll(/90\s*days\s*from\s*expiry\s*of\s*the\s*applicable\s*response\s*timeline/gi)];
  if (omb90DaysMatches.length >= 2) {
    console.log(`✓ PASS [${omb90DaysMatches.length} occurrences]: RB-IOS 2026 filing deadline within 90 days from expiry of response timeline`);
  } else {
    console.error(`✗ FAIL [${omb90DaysMatches.length} occurrences]: RB-IOS 90-day deadline not found enough times!`);
    failed = true;
  }

  // Positive 7: Appeal available strictly against Award
  const appealAwardMatches = [...text.matchAll(/Appeal\s*is\s*available\s*(?:only|strictly)\s*against\s*an\s*Award\s*of\s*the\s*RBI\s*Ombudsman/gi)];
  if (appealAwardMatches.length >= 2) {
    console.log(`✓ PASS [${appealAwardMatches.length} occurrences]: Appeal available strictly against Award of Ombudsman`);
  } else {
    console.error(`✗ FAIL [${appealAwardMatches.length} occurrences]: Appeal only against Award not found enough times!`);
    failed = true;
  }

  // Positive 8: Non-bank Prepaid Payment Instrument Issuers
  const ppiMatches = [...text.matchAll(/Non-bank\s*Prepaid\s*Payment\s*Instrument\s*Issuers/gi)];
  if (ppiMatches.length >= 2) {
    console.log(`✓ PASS [${ppiMatches.length} occurrences]: RB-IOS 2026 coverage category "Non-bank Prepaid Payment Instrument Issuers"`);
  } else {
    console.error(`✗ FAIL [${ppiMatches.length} occurrences]: Non-bank PPI Issuers not found enough times!`);
    failed = true;
  }

  // Positive 9: "33,660" (BHAVYA canonical figure)
  const bhavyaNewMatches = [...text.matchAll(/33[,.]?660/g)];
  if (bhavyaNewMatches.length >= 3) {
    console.log(`✓ PASS [${bhavyaNewMatches.length} occurrences]: "33,660" (Canonical BHAVYA outlay figure)`);
  } else {
    console.error(`✗ FAIL [${bhavyaNewMatches.length} occurrences]: 33,660 not found enough times!`);
    failed = true;
  }

  console.log('\n======================================================');
  if (failed) {
    console.error('🔴 BW(6) POST-COMPILATION AUDIT FAILED');
    process.exit(1);
  } else {
    console.log('🟢 BW(6) POST-COMPILATION AUDIT PASSED WITH 100% SUCCESS!');
  }
  console.log('======================================================');
}

runBw6Audit().catch(console.error);
