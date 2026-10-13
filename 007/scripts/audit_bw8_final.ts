import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function runBw8Audit() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  console.log('======================================================');
  console.log('AUDITING FINAL BINARY PDF: BW(8) POST-COMPILATION AUDIT');
  console.log('File:', pdfPath);
  console.log('======================================================');

  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const text = (await parser.getText()).text;
  console.log(`Total extracted character count: ${text.length}`);

  let failed = false;

  console.log('\n--- 1. DIVIDEND & REMITTANCE OBSOLETE NEGATIVES (MUST BE 0) ---');

  // Negative 1: "CET1 13%" + "75%"
  const cet13_75Matches = [...text.matchAll(/CET1[^.\n]*13%[^.\n]*75%|75%[^.\n]*CET1[^.\n]*13%/gi)];
  if (cet13_75Matches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "CET1 13%" + "75%"');
  } else {
    console.error(`✗ FAIL [${cet13_75Matches.length} occurrences]: "CET1 13%" + "75%":`, cet13_75Matches.map(m => m[0]));
    failed = true;
  }

  // Negative 2: "CET1 ratio ≥ 13.0%" + "75%"
  const cet130_75Matches = [...text.matchAll(/CET1\s*ratio\s*[≥>=]\s*13\.0%[^.\n]*75%|75%[^.\n]*CET1\s*ratio\s*[≥>=]\s*13\.0%/gi)];
  if (cet130_75Matches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "CET1 ratio ≥ 13.0%" + "75%"');
  } else {
    console.error(`✗ FAIL [${cet130_75Matches.length} occurrences]: "CET1 ratio ≥ 13.0%" + "75%":`, cet130_75Matches.map(m => m[0]));
    failed = true;
  }

  // Negative 3: "80% for foreign branches"
  const forBranch80Matches = [...text.matchAll(/80%\s*for\s*foreign\s*branches/gi)];
  if (forBranch80Matches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "80% for foreign branches"');
  } else {
    console.error(`✗ FAIL [${forBranch80Matches.length} occurrences]: "80% for foreign branches":`, forBranch80Matches.map(m => m[0]));
    failed = true;
  }

  // Negative 4: Obsolete statement saying foreign bank branches may remit up to 80% / remittance cap is 80%
  const forBank80Matches = [...text.matchAll(/(?:foreign\s*bank\s*branches|foreign\s*branch)[^.\n]*(?:may\s*remit\s*up\s*to\s*80%|remit\s*up\s*to\s*80%|remittance\s*cap\s*is\s*80%|capped\s*at\s*80%)/gi)];
  if (forBank80Matches.length === 0) {
    console.log('✓ PASS [0 occurrences]: Obsolete statement "foreign bank branches may remit up to 80%"');
  } else {
    console.error(`✗ FAIL [${forBank80Matches.length} occurrences]: Obsolete foreign bank branch 80% statement:`, forBank80Matches.map(m => m[0]));
    failed = true;
  }

  // Negative 5: "Domestic vs Foreign Cap"
  const domVsForMatches = [...text.matchAll(/Domestic\s*vs\s*Foreign\s*Cap/gi)];
  if (domVsForMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "Domestic vs Foreign Cap"');
  } else {
    console.error(`✗ FAIL [${domVsForMatches.length} occurrences]: "Domestic vs Foreign Cap":`, domVsForMatches.map(m => m[0]));
    failed = true;
  }

  // Negative 6: "75% bank dividend payout cap (80%"
  const div75_80Matches = [...text.matchAll(/75%\s*bank\s*dividend\s*payout\s*cap\s*\(\s*80%/gi)];
  if (div75_80Matches.length === 0) {
    console.log('✓ PASS [0 occurrences]: "75% bank dividend payout cap (80%"');
  } else {
    console.error(`✗ FAIL [${div75_80Matches.length} occurrences]: "75% bank dividend payout cap (80%":`, div75_80Matches.map(m => m[0]));
    failed = true;
  }

  console.log('\n--- 2. DIVIDEND & REMITTANCE POSITIVE CANONICAL FACTS ---');

  // Positive 1: ">12% to ≤14%" or ">12% and up to 14%"
  const bucketMatches = [...text.matchAll(/>\s*12%\s*(?:to\s*[≤<=]|and\s*up\s*to)\s*14%/gi)];
  if (bucketMatches.length >= 2) {
    console.log(`✓ PASS [${bucketMatches.length} occurrences]: ">12% to ≤14%" CET1 bucket`);
  } else {
    console.error(`✗ FAIL [${bucketMatches.length} occurrences]: ">12% to ≤14%" CET1 bucket not found enough times!`);
    failed = true;
  }

  // Positive 2: "40% of adjusted PAT"
  const pat40Matches = [...text.matchAll(/40%\s*of\s*adjusted\s*PAT/gi)];
  if (pat40Matches.length >= 2) {
    console.log(`✓ PASS [${pat40Matches.length} occurrences]: "40% of adjusted PAT"`);
  } else {
    console.error(`✗ FAIL [${pat40Matches.length} occurrences]: "40% of adjusted PAT" not found enough times!`);
    failed = true;
  }

  // Positive 3: aggregate ceiling 75% of PAT
  const ceil75Matches = [...text.matchAll(/(?:overall\s*ceiling\s*of\s*75%\s*of\s*PAT|aggregate\s*(?:75%\s*PAT\s*ceiling|ceiling\s*75%\s*of\s*PAT|75%\s*of\s*PAT\s*ceiling))/gi)];
  if (ceil75Matches.length >= 2) {
    console.log(`✓ PASS [${ceil75Matches.length} occurrences]: Aggregate 75% of PAT ceiling`);
  } else {
    console.error(`✗ FAIL [${ceil75Matches.length} occurrences]: Aggregate 75% of PAT ceiling not found enough times!`);
    failed = true;
  }

  // Positive 4: foreign bank net profit/surplus without prior RBI approval
  const forRemitMatches = [...text.matchAll(/remit\s*net\s*profit\s*\/\s*surplus[^.\n]*without\s*prior\s*RBI\s*approval|remit\s*net\s*profit[^.\n]*without\s*prior\s*RBI\s*approval/gi)];
  if (forRemitMatches.length >= 2) {
    console.log(`✓ PASS [${forRemitMatches.length} occurrences]: Foreign bank net profit remittance without prior RBI approval`);
  } else {
    console.error(`✗ FAIL [${forRemitMatches.length} occurrences]: Foreign bank remittance without approval not found enough times!`);
    failed = true;
  }

  // Positive 5: Exam Trap (CET1 bucket percentage ≠ aggregate 75% ceiling)
  const divTrapMatches = [...text.matchAll(/CET1\s*bucket\s*percentage\s*≠\s*aggregate\s*75%\s*ceiling/gi)];
  if (divTrapMatches.length >= 1) {
    console.log(`✓ PASS [${divTrapMatches.length} occurrences]: Exam trap "CET1 bucket percentage ≠ aggregate 75% ceiling"`);
  } else {
    console.error(`✗ FAIL [${divTrapMatches.length} occurrences]: Exam trap for dividend bucket missing!`);
    failed = true;
  }

  console.log('\n--- 3. DIGITAL-FRAUD TEMPORAL COMPLETENESS ---');

  // Positive 6: Digital-fraud 1-year window sentence
  const oneYearWindowMatches = [...text.matchAll(/prescribed\s*one-year\s*window\s*from\s*its\s*effective\s*date/gi)];
  if (oneYearWindowMatches.length >= 2) {
    console.log(`✓ PASS [${oneYearWindowMatches.length} occurrences]: Digital fraud one-year window sentence`);
  } else {
    console.error(`✗ FAIL [${oneYearWindowMatches.length} occurrences]: Digital fraud 1-year window sentence not found enough times!`);
    failed = true;
  }

  console.log('\n--- 4. REGRESSION CONTROLS (BW-7 & BW-6 PRESERVATION) ---');

  // Repo 5.50% & Calibrated Tightening
  const repo550Matches = [...text.matchAll(/(?:Repo|Policy Repo Rate)[^.\n]*5\.50%/gi)];
  const calibratedMatches = [...text.matchAll(/Calibrated\s*Tightening/gi)];
  if (repo550Matches.length >= 3 && calibratedMatches.length >= 3) {
    console.log(`✓ PASS: Operative Repo 5.50% (${repo550Matches.length}) and Calibrated Tightening (${calibratedMatches.length}) verified`);
  } else {
    console.error(`✗ FAIL: Operative Repo 5.50% or Calibrated Tightening missing!`);
    failed = true;
  }

  // Zero generic current repo 5.25%
  const genericRepoMatches = [...text.matchAll(/(?:current|operative|latest|present)\s*(?:repo\s*rate|policy\s*rate)[^.\n]*5\.25%|repo\s*rate[^.\n]*(?:currently|is)\s*5\.25%/gi)];
  if (genericRepoMatches.length === 0) {
    console.log('✓ PASS [0 occurrences]: Zero generic "current repo rate = 5.25%"');
  } else {
    console.error(`✗ FAIL: Generic current repo 5.25% found!`);
    failed = true;
  }

  // Digital fraud canonical formula
  const canonicalFormulaMatches = [...text.matchAll(/Eligible\s*fraudulent\s*EBT\s*involving\s*gross\s*loss\s*up\s*to\s*(?:₹\s*|Rs\.?\s*)?50[,.]?000:\s*compensation\s*=\s*85%\s*of\s*net\s*loss\s*or\s*(?:₹\s*|Rs\.?\s*)?25[,.]?000/gi)];
  if (canonicalFormulaMatches.length >= 2) {
    console.log(`✓ PASS [${canonicalFormulaMatches.length} occurrences]: Canonical EBT Exam Formula`);
  } else {
    console.error(`✗ FAIL: Canonical EBT formula missing!`);
    failed = true;
  }

  console.log('\n======================================================');
  if (failed) {
    console.error('🔴 BW(8) POST-COMPILATION AUDIT FAILED');
    process.exit(1);
  } else {
    console.log('🟢 BW(8) POST-COMPILATION AUDIT PASSED WITH 100% SUCCESS!');
  }
  console.log('======================================================');
}

runBw8Audit().catch(console.error);
