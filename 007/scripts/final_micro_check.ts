import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function runFinalMicroCheck() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  console.log('Loading compiled master PDF:', pdfPath);
  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const text = (await parser.getText()).text;
  console.log(`Extracted text layer length: ${text.length} characters`);

  console.log('\n--- NEGATIVE CHECKS ON COMPILED PDF TEXT LAYER ---');
  const negativeList: { name: string; pattern: RegExp }[] = [
    { name: 'Parameswaran Iyer / Neelkanth Mishra', pattern: /Parameswaran\s*Iyer\s*\/\s*Neelkanth\s*Mishra/i },
    { name: 'systemically important NBFCs (in RB-IOS blanket)', pattern: /systemically\s*important\s*NBFCs/i },
    { name: '45 + 45', pattern: /45\s*\+\s*45/ },
    { name: '45 days + 45 days', pattern: /45\s*days\s*\+\s*45\s*days/i },
    { name: '45 days bank + 45 days', pattern: /45\s*days\s*bank\s*\+\s*45\s*days/i },
    { name: '45 days submission + 45 days', pattern: /45\s*days\s*submission\s*\+\s*45\s*days/i },
    { name: 'allocated strictly based on population', pattern: /allocated\s*strictly\s*based\s*on\s*population/i },
    { name: 'held by Finance Secretary', pattern: /held\s*by\s*Finance\s*Secretary/i },
    { name: 'CURRENCY_USD', pattern: /CURRENCY_USD/ },
    { name: 'PROTECTED_USD_TOKEN', pattern: /PROTECTED_USD_TOKEN/ },
    { name: '$le$', pattern: /\$le\$/ },
    { name: '$ge$', pattern: /\$ge\$/ },
    { name: '$T+5$', pattern: /\$T\+5\$/ },
    { name: 'TODO', pattern: /\bTODO\b/ },
    { name: 'TBD', pattern: /\bTBD\b/ },
    { name: 'FIXME', pattern: /\bFIXME\b/ },
    { name: 'undefined', pattern: /\bundefined\b/ },
    { name: 'NaN', pattern: /\bNaN\b/ },
    { name: 'Triple underscores ___', pattern: /___/ }
  ];

  let anyFail = false;
  for (const item of negativeList) {
    const matches = [...text.matchAll(new RegExp(item.pattern, 'g'))];
    if (matches.length === 0) {
      console.log(`✓ PASS [0 occurrences]: "${item.name}"`);
    } else {
      console.error(`✗ FAIL [${matches.length} occurrences]: "${item.name}"`);
      anyFail = true;
    }
  }

  console.log('\n--- POSITIVE CANONICAL VERIFICATIONS ON COMPILED PDF ---');
  const positiveList: { name: string; pattern: RegExp; min: number }[] = [
    {
      name: 'World Bank ED: Neelkanth Mishra (succeeded Parameswaran Iyer in 2026)',
      pattern: /Neelkanth\s*Mishra[^.\n]*succeeded\s*Parameswaran\s*Iyer\s*in\s*2026/i,
      min: 2
    },
    {
      name: 'RB-IOS Coverage full canonical listing',
      pattern: /Non-bank\s*Prepaid\s*Payment\s*Instrument\s*Issuers,\s*and\s*Credit\s*Information\s*Companies/i,
      min: 2
    },
    {
      name: 'DICGC 45 + 30 + 15 = 90 days statutory breakdown',
      pattern: /45\s*\+\s*30\s*\+\s*15\s*=\s*90\s*days/i,
      min: 4
    },
    {
      name: 'Article 267 placed at the disposal of the President',
      pattern: /placed\s*at\s*the\s*disposal\s*of\s*the\s*President/i,
      min: 2
    },
    {
      name: 'Article 283 custody and operational rules',
      pattern: /Article\s*283\s*and\s*applicable\s*rules/i,
      min: 2
    },
    {
      name: 'Fourth Schedule Rajya Sabha 233 + 12 allocation',
      pattern: /233\s*elected\s*representatives\s*\+\s*12\s*members\s*nominated/i,
      min: 2
    }
  ];

  for (const item of positiveList) {
    const matches = [...text.matchAll(new RegExp(item.pattern, 'g'))];
    if (matches.length >= item.min) {
      console.log(`✓ PASS [${matches.length} occurrences, expected ≥ ${item.min}]: "${item.name}"`);
    } else {
      console.error(`✗ FAIL [${matches.length} occurrences, expected ≥ ${item.min}]: "${item.name}"`);
      anyFail = true;
    }
  }

  if (anyFail) {
    console.error('\n🔴 MICRO-CHECK ENCOUNTERED FAILURES');
    process.exit(1);
  } else {
    console.log('\n🟢 ALL NEGATIVE AND POSITIVE MICRO-CHECKS PASSED 100%!');
  }
}

runFinalMicroCheck().catch(console.error);
