import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

async function main() {
  const targetPath = path.resolve('print_output', '007_Book_07_IIBF_DBF_Banking_Finance_Master_Codex_A4_BW.pdf');
  if (!fs.existsSync(targetPath)) {
    console.error('File not found:', targetPath);
    process.exit(1);
  }

  const stats = fs.statSync(targetPath);
  const fileBuf = fs.readFileSync(targetPath);
  const hash = crypto.createHash('sha256').update(fileBuf).digest('hex');

  const pdfjsPath = path.resolve('node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  const pdfjsLib = await import('file:///' + pdfjsPath.replace(/\\/g, '/'));
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(fileBuf) }).promise;

  // Extract Page 1 (Cover)
  const page1 = await doc.getPage(1);
  const tc1 = await page1.getTextContent();
  const page1Text = tc1.items.map((i: any) => i.str).join(' ');

  console.log('=== FINAL ARTIFACT IDENTITY AUDIT ===');
  console.log('ARTIFACT_PATH:', targetPath);
  console.log('FILE_SIZE:', stats.size, 'bytes');
  console.log('MODIFIED:', stats.mtime.toISOString());
  console.log('PAGE_COUNT:', doc.numPages);
  console.log('SHA256:', hash);

  console.log('\n--- COVER PLEDGE AUDIT ---');
  const hasCalibrated = page1Text.includes('Comprehensive 4-Paper Curricular Synthesis');
  const hasOld = page1Text.includes('Zero Unaccounted-For Source Omission');
  console.log('Calibrated claim verified:', hasCalibrated ? 'YES' : 'NO');
  console.log('Old unverified claim present:', hasOld ? 'YES' : 'NO');
  console.log('Cover text excerpt:', page1Text.slice(0, 300));

  console.log('\n--- PAGES 204 TO 206 TEXT EXTRACTION ---');
  for (let p = Math.max(1, doc.numPages - 2); p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    const text = tc.items.map((i: any) => i.str).join(' ').replace(/\s+/g, ' ').trim();
    console.log(`\n[PAGE ${p}] (${text.length} chars):`);
    console.log(text);
  }
}

main().catch(console.error);
