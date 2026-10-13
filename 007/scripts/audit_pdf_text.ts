import * as path from 'path';
import { PDFParse } from 'pdf-parse';

async function check() {
  const pdfPath = path.resolve('007', 'PRINT DESIGNER', '007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf');
  const parser = new PDFParse({ url: pdfPath });
  await parser.load();
  const result = await parser.getText();
  const text = typeof result === 'string' ? result : JSON.stringify(result);

  console.log('PDF Extracted Text Length:', text.length);

  const auditTerms = [
    'CURRENCY_USD',
    'Masato Kanda',
    'Dan Katz',
    'RB-IOS 2026',
    '60% of ANBC',
    '2022–23',
    '100% under automatic route',
    'T+5'
  ];

  for (const t of auditTerms) {
    const escaped = t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const matches = text.match(new RegExp(escaped, 'g')) || [];
    console.log(`Term "${t}": ${matches.length} occurrences`);
  }
}

check().catch(console.error);
