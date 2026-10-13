import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function verifyAllTokens() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const text = (await parser.getText()).text;

  const patterns = [
    { name: 'CURRENCY_USD', regex: /CURRENCY_USD/g },
    { name: 'PROTECTED_USD_TOKEN', regex: /PROTECTED_USD_TOKEN/g },
    { name: 'LaTeX $le$', regex: /\$le\$/g },
    { name: 'LaTeX $ge$', regex: /\$ge\$/g },
    { name: 'TODO', regex: /\bTODO\b/g },
    { name: 'TBD', regex: /\bTBD\b/g },
    { name: 'FIXME', regex: /\bFIXME\b/g },
    { name: 'undefined', regex: /\bundefined\b/g },
    { name: 'NaN', regex: /\bNaN\b/g },
    { name: 'Three underscores ___', regex: /___/g }
  ];

  for (const p of patterns) {
    const matches = [...text.matchAll(p.regex)];
    console.log(`${p.name}: ${matches.length} occurrences`);
  }
}

verifyAllTokens().catch(console.error);
