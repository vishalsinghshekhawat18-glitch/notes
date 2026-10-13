import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function runBw7Audit() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  console.log('======================================================');
  console.log('AUDITING FINAL BINARY PDF: BW(7) POST-COMPILATION AUDIT');
  console.log('File:', pdfPath);
  console.log('======================================================');

  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const text = (await parser.getText()).text;
  console.log(`Total extracted character count: ${text.length}`);

  let failed = false;

  console.log('\n--- 1. CURRENT POLICY SNAPSHOT VERIFICATION (OCTOBER 7, 2026) ---');

  // Check 1: 5.50% Policy Repo Rate
  const repo550Matches = [...text.matchAll(/(?:Repo|Policy Repo Rate)[^.\n]*5\.50%/gi)];
  if (repo550Matches.length >= 3) {
    console.log(`✓ PASS [${repo550Matches.length} occurrences]: Policy Repo Rate at 5.50%`);
  } else {
    console.error(`✗ FAIL [${repo550Matches.length} occurrences]: Policy Repo Rate 5.50% not found enough times!`);
    failed = true;
  }

  // Check 2: SDF 5.25%
  const sdf525Matches = [...text.matchAll(/SDF[^.\n]*5\.25%/gi)];
  if (sdf525Matches.length >= 3) {
    console.log(`✓ PASS [${sdf525Matches.length} occurrences]: SDF at 5.25%`);
  } else {
    console.error(`✗ FAIL [${sdf525Matches.length} occurrences]: SDF 5.25% not found enough times!`);
    failed = true;
  }

  // Check 3: MSF / Bank Rate 5.75%
  const msf575Matches = [...text.matchAll(/MSF[^.\n]*5\.75%/gi)];
  if (msf575Matches.length >= 3) {
    console.log(`✓ PASS [${msf575Matches.length} occurrences]: MSF at 5.75%`);
  } else {
    console.error(`✗ FAIL [${msf575Matches.length} occurrences]: MSF 5.75% not found enough times!`);
    failed = true;
  }

  // Check 4: Calibrated Tightening
  const calibratedMatches = [...text.matchAll(/Calibrated\s*Tightening/gi)];
  if (calibratedMatches.length >= 3) {
    console.log(`✓ PASS [${calibratedMatches.length} occurrences]: Monetary stance "Calibrated Tightening"`);
  } else {
    console.error(`✗ FAIL [${calibratedMatches.length} occurrences]: Calibrated Tightening not found enough times!`);
    failed = true;
  }

  // Check 5: Canonical Exam Trap
  const examTrapMatches = [...text.matchAll(/August\s*2026\s*=\s*5\.25%,\s*Neutral;\s*October\s*7,\s*2026\s*=\s*5\.50%,\s*Calibrated\s*Tightening/gi)];
  if (examTrapMatches.length >= 2) {
    console.log(`✓ PASS [${examTrapMatches.length} occurrences]: Canonical Exam Trap ("August 2026 = 5.25%, Neutral; October 7, 2026 = 5.50%, Calibrated Tightening")`);
  } else {
    console.error(`✗ FAIL [${examTrapMatches.length} occurrences]: Canonical Exam Trap not found enough times!`);
    failed = true;
  }

  // Check 6: Projections (GDP 7.1%, CPI 5.2%)
  const gdp71Matches = [...text.matchAll(/(?:GDP|growth)[^.\n]*7\.1%/gi)];
  const cpi52Matches = [...text.matchAll(/CPI[^.\n]*5\.2%/gi)];
  if (gdp71Matches.length >= 2 && cpi52Matches.length >= 2) {
    console.log(`✓ PASS [GDP: ${gdp71Matches.length}, CPI: ${cpi52Matches.length} occurrences]: FY27 Projections (GDP 7.1%, CPI 5.2%)`);
  } else {
    console.error(`✗ FAIL: GDP 7.1% (${gdp71Matches.length}) or CPI 5.2% (${cpi52Matches.length}) missing!`);
    failed = true;
  }

  console.log('\n--- 2. NEGATIVE CHECKS: NO GENERIC "CURRENT REPO = 5.25%" FORMULATION ---');

  // Check for generic current repo 5.25% statements
  const genericRepoMatches = [...text.matchAll(/(?:current|operative|latest|present)\s*(?:repo\s*rate|policy\s*rate)[^.\n]*5\.25%|repo\s*rate[^.\n]*(?:currently|is)\s*5\.25%/gi)];
  if (genericRepoMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: No generic "current repo rate = 5.25%" statement found');
  } else {
    console.error(`✗ FAIL [${genericRepoMatches.length} occurrences]: Generic current repo 5.25% found:`, genericRepoMatches.map(m => m[0]));
    failed = true;
  }

  // All 5.25% entries must be explicitly historical
  const repo525Matches = [...text.matchAll(/5\.25%/g)];
  console.log(`Info: Total '5.25%' matches across book: ${repo525Matches.length} (comprises historical 2026 meetings & current SDF 5.25%)`);

  console.log('\n--- 3. BW(6) REGRESSION CONTROLS ---');

  // Negative 1: "85% of loss" / "85%-of-loss"
  const lossMatches = [...text.matchAll(/85%\s*-?\s*of\s*loss(?!es)/gi)];
  if (lossMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "85% of loss" / "85%-of-loss"');
  } else {
    console.error(`✗ FAIL [${lossMatches.length} occurrences]: "85% of loss":`, lossMatches.map(m => m[0]));
    failed = true;
  }

  // Negative 2: "₹50,000 net loss" / "50,000 net loss"
  const netLoss50kMatches = [...text.matchAll(/(?:₹\s*|Rs\.?\s*)?50[,.]?000\s*net\s*loss|net\s*loss\s*(?:of\s*)?(?:₹\s*|Rs\.?\s*)?50[,.]?000/gi)];
  if (netLoss50kMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "₹50,000 net loss" / "50,000 net loss"');
  } else {
    console.error(`✗ FAIL [${netLoss50kMatches.length} occurrences]: "50,000 net loss":`, netLoss50kMatches.map(m => m[0]));
    failed = true;
  }

  // Negative 3: "1 year" in Ombudsman context
  const omb1YearMatches = [...text.matchAll(/(?:complaint[^.\n]*Ombudsman[^.\n]*1\s*year|Ombudsman[^.\n]*within\s*1\s*year|filing\s*window[^.\n]*1\s*year)/gi)];
  if (omb1YearMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "1 year" + Ombudsman filing window');
  } else {
    console.error(`✗ FAIL [${omb1YearMatches.length} occurrences]: "1 year" + Ombudsman:`, omb1YearMatches.map(m => m[0]));
    failed = true;
  }

  // Negative 4: "award or rejection" in appeal context
  const awardRejectionMatches = [...text.matchAll(/award\s*or\s*rejection/gi)];
  if (awardRejectionMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "award or rejection" in appeal context');
  } else {
    console.error(`✗ FAIL [${awardRejectionMatches.length} occurrences]: "award or rejection":`, awardRejectionMatches.map(m => m[0]));
    failed = true;
  }

  // Positive: Canonical EBT Exam Formula
  const canonicalFormulaMatches = [...text.matchAll(/Eligible\s*fraudulent\s*EBT\s*involving\s*gross\s*loss\s*up\s*to\s*(?:₹\s*|Rs\.?\s*)?50[,.]?000:\s*compensation\s*=\s*85%\s*of\s*net\s*loss\s*or\s*(?:₹\s*|Rs\.?\s*)?25[,.]?000/gi)];
  if (canonicalFormulaMatches.length >= 2) {
    console.log(`✓ PASS [${canonicalFormulaMatches.length} occurrences]: Canonical EBT Exam Formula`);
  } else {
    console.error(`✗ FAIL [${canonicalFormulaMatches.length} occurrences]: Canonical EBT Exam Formula not found enough times!`);
    failed = true;
  }

  console.log('\n======================================================');
  if (failed) {
    console.error('🔴 BW(7) POST-COMPILATION AUDIT FAILED');
    process.exit(1);
  } else {
    console.log('🟢 BW(7) POST-COMPILATION AUDIT PASSED WITH 100% SUCCESS!');
  }
  console.log('======================================================');
}

runBw7Audit().catch(console.error);
