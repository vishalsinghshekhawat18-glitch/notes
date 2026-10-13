import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function runFinalProductionFreezeAudit() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  console.log('======================================================');
  console.log('PRODUCTION FREEZE AUDIT: FINAL BINARY VERIFICATION');
  console.log('File:', pdfPath);
  console.log('======================================================');

  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const text = (await parser.getText()).text;
  console.log(`Total extracted character count: ${text.length}`);

  let failed = false;

  console.log('\n--- 1. SPECIFIC REGRESSION TARGETS: BAD (MUST BE 0) ---');

  // Bad 1: "CET1 13%" + "75%"
  const bad1 = [...text.matchAll(/CET1[^.\n]*13%[^.\n]*75%|75%[^.\n]*CET1[^.\n]*13%/gi)];
  if (bad1.length === 0) {
    console.log('✓ PASS [0 occurrences]: "CET1 13%" + "75%"');
  } else {
    console.error(`✗ FAIL [${bad1.length} occurrences]: "CET1 13%" + "75%":`, bad1.map(m => m[0]));
    failed = true;
  }

  // Bad 2: "CET1 ratio ≥13.0%" + "75%"
  const bad2 = [...text.matchAll(/CET1\s*ratio\s*[≥>=]\s*13\.0%[^.\n]*75%|75%[^.\n]*CET1\s*ratio\s*[≥>=]\s*13\.0%/gi)];
  if (bad2.length === 0) {
    console.log('✓ PASS [0 occurrences]: "CET1 ratio ≥ 13.0%" + "75%"');
  } else {
    console.error(`✗ FAIL [${bad2.length} occurrences]: "CET1 ratio ≥ 13.0%" + "75%":`, bad2.map(m => m[0]));
    failed = true;
  }

  // Bad 3: "80% for foreign branches"
  const bad3 = [...text.matchAll(/80%\s*for\s*foreign\s*branches/gi)];
  if (bad3.length === 0) {
    console.log('✓ PASS [0 occurrences]: "80% for foreign branches"');
  } else {
    console.error(`✗ FAIL [${bad3.length} occurrences]: "80% for foreign branches":`, bad3.map(m => m[0]));
    failed = true;
  }

  // Bad 4: "foreign bank branches may remit up to 80%"
  const bad4 = [...text.matchAll(/foreign\s*bank\s*branches[^.\n]*(?:may\s*remit\s*up\s*to\s*80%|remit\s*up\s*to\s*80%|remittance\s*cap\s*is\s*80%)/gi)];
  if (bad4.length === 0) {
    console.log('✓ PASS [0 occurrences]: "foreign bank branches may remit up to 80%"');
  } else {
    console.error(`✗ FAIL [${bad4.length} occurrences]: "foreign bank branches may remit up to 80%":`, bad4.map(m => m[0]));
    failed = true;
  }

  console.log('\n--- 2. SPECIFIC REGRESSION TARGETS: GOOD (MUST BE PRESENT) ---');

  // Good 1: ">12% and ≤14%" / ">12% to ≤14%"
  const good1 = [...text.matchAll(/>\s*12%\s*(?:to\s*[≤<=]|and\s*[≤<=]|and\s*up\s*to)\s*14%/gi)];
  if (good1.length >= 2) {
    console.log(`✓ PASS [${good1.length} occurrences]: ">12% and ≤14%"`);
  } else {
    console.error(`✗ FAIL: ">12% and ≤14%" missing!`);
    failed = true;
  }

  // Good 2: "40% of adjusted PAT"
  const good2 = [...text.matchAll(/40%\s*of\s*adjusted\s*PAT/gi)];
  if (good2.length >= 2) {
    console.log(`✓ PASS [${good2.length} occurrences]: "40% of adjusted PAT"`);
  } else {
    console.error(`✗ FAIL: "40% of adjusted PAT" missing!`);
    failed = true;
  }

  // Good 3: "aggregate ... 75% of PAT"
  const good3 = [...text.matchAll(/(?:overall\s*ceiling\s*of\s*75%\s*of\s*PAT|aggregate\s*(?:75%\s*PAT\s*ceiling|ceiling\s*75%\s*of\s*PAT|75%\s*of\s*PAT\s*ceiling))/gi)];
  if (good3.length >= 2) {
    console.log(`✓ PASS [${good3.length} occurrences]: "aggregate ... 75% of PAT" ceiling`);
  } else {
    console.error(`✗ FAIL: "aggregate ... 75% of PAT" missing!`);
    failed = true;
  }

  // Good 4: Foreign bank remittance without prior RBI approval
  const good4 = [...text.matchAll(/remit\s*net\s*profit\s*\/\s*surplus[^.\n]*without\s*prior\s*RBI\s*approval|remit\s*net\s*profit[^.\n]*without\s*prior\s*RBI\s*approval/gi)];
  if (good4.length >= 2) {
    console.log(`✓ PASS [${good4.length} occurrences]: Foreign bank branch remittance subject to RBI conditions`);
  } else {
    console.error(`✗ FAIL: Foreign bank remittance missing!`);
    failed = true;
  }

  console.log('\n--- 3. VERIFY ALL PREVIOUSLY APPROVED CORRECTIONS ---');

  const checkList: [string, RegExp, number][] = [
    ['Repo 5.50%', /(?:Repo|Policy Repo Rate)[^.\n]*5\.50%/gi, 3],
    ['SDF 5.25%', /SDF[^.\n]*5\.25%/gi, 3],
    ['MSF/Bank Rate 5.75%', /MSF[^.\n]*5\.75%/gi, 3],
    ['Calibrated Tightening', /Calibrated\s*Tightening/gi, 3],
    ['85% of net loss', /85%\s*of\s*net\s*loss/gi, 2],
    ['gross loss up to ₹50,000', /gross\s*loss\s*up\s*to\s*(?:₹\s*|Rs\.?\s*)?50[,.]?000/gi, 2],
    ['5 calendar days', /5\s*calendar\s*days/gi, 2],
    ['RB-IOS 90 days', /90\s*days\s*from\s*expiry\s*of\s*the\s*applicable\s*response\s*timeline/gi, 2],
    ['DICGC 45+30+15', /45\s*\+\s*30\s*\+\s*15/gi, 1],
    ['BHAVYA ₹33,660 crore', /33[,.]?660/g, 2],
    ['LEI ₹5 crore / ₹50 crore distinction', /LEI\s*Dual-Threshold\s*Trap|LEI[^.\n]*≥\s*₹5\s*Crore/gi, 2],
    ['RTGS 4+1+1+8+8', /4\s*\+\s*1\s*\+\s*1\s*\+\s*8\s*\+\s*8/g, 1],
    ['PSL 40/75/60/60', /40%[^.\n]*75%[^.\n]*60%|PSL[^.\n]*60%/gi, 1],
    ['Insurance FDI 100%', /100%[^.\n]*FDI[^.\n]*Insurance|Insurance[^.\n]*100%[^.\n]*FDI|FDI\s*in\s*Insurance[^.\n]*100%/gi, 1],
    ['GDP/CPI/IIP revised bases', /2022–23|2022-23/g, 2],
    ['Neelkanth Mishra', /Neelkanth\s*Mishra/gi, 1],
    ['Dan Katz', /Dan\s*Katz/gi, 1],
    ['Masato Kanda', /Masato\s*Kanda/gi, 1]
  ];

  for (const [name, regex, minCount] of checkList) {
    const matches = [...text.matchAll(regex)];
    if (matches.length >= minCount) {
      console.log(`✓ PASS [${matches.length} occurrences]: ${name}`);
    } else {
      console.error(`✗ FAIL [${matches.length}/${minCount} occurrences]: ${name} not found!`);
      failed = true;
    }
  }

  console.log('\n======================================================');
  if (failed) {
    console.error('🔴 PRODUCTION FREEZE AUDIT FAILED');
    process.exit(1);
  } else {
    console.log('🟢 PRODUCTION FREEZE AUDIT PASSED: 100% SUCCESS!');
  }
  console.log('======================================================');
}

runFinalProductionFreezeAudit().catch(console.error);
