import fs from 'fs';
import path from 'path';

export async function auditPdf(targetPdfPath?: string) {
  const pdfPath = targetPdfPath || path.resolve('print_output', '007_Book_07_IIBF_DBF_Banking_Finance_Master_Codex_A4_BW.pdf');
  if (!fs.existsSync(pdfPath)) {
    console.error('PDF file does not exist:', pdfPath);
    return null;
  }

  const pdfjsPath = path.resolve('node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  const pdfjsLib = await import('file:///' + pdfjsPath.replace(/\\/g, '/'));
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log(`\n======================================================`);
  console.log(`FORENSIC PDF AUDIT: ${path.basename(pdfPath)}`);
  console.log(`Total Pages: ${doc.numPages}`);
  console.log(`======================================================`);

  const globalSizeDistribution: Record<number, number> = {};
  const globalSizeSamples: Record<number, string[]> = {};

  // Check MediaBox on multiple pages
  for (let p = 1; p <= Math.min(10, doc.numPages); p++) {
    const page = await doc.getPage(p);
    const view = page.view; // [x, y, w, h] in points (72 points = 1 inch)
    const widthMm = (view[2] * 25.4 / 72).toFixed(2);
    const heightMm = (view[3] * 25.4 / 72).toFixed(2);
    if (p <= 3) {
      console.log(`Page ${p} MediaBox: [${view.join(', ')}] pt -> ${widthMm} mm x ${heightMm} mm (ISO A4 = 210 x 297 mm)`);
    }

    const tc = await page.getTextContent();
    for (const item of tc.items as any[]) {
      if (!item.str || !item.str.trim()) continue;
      // In PDF text matrices: transform = [a, b, c, d, e, f]
      // Font size in points is hypot(a, b)
      const a = item.transform[0];
      const b = item.transform[1];
      const fontSizePt = Math.round(Math.hypot(a, b) * 10) / 10;

      globalSizeDistribution[fontSizePt] = (globalSizeDistribution[fontSizePt] || 0) + item.str.length;
      if (!globalSizeSamples[fontSizePt]) {
        globalSizeSamples[fontSizePt] = [];
      }
      if (globalSizeSamples[fontSizePt].length < 3 && item.str.trim().length > 10) {
        globalSizeSamples[fontSizePt].push(item.str.trim());
      }
    }
  }

  console.log(`\n------------------------------------------------------`);
  console.log(`ACTUAL PDF FONT SIZE DISTRIBUTION (Pages 1 to 10):`);
  console.log(`------------------------------------------------------`);
  const sorted = Object.entries(globalSizeDistribution).sort((a, b) => b[1] - a[1]);
  for (const [sizeStr, charCount] of sorted) {
    const sz = parseFloat(sizeStr);
    const samples = (globalSizeSamples[sz] || []).join(' | ');
    console.log(`${sz.toFixed(1).padStart(5, ' ')} pt : ${String(charCount).padStart(6, ' ')} chars | Sample: "${samples.slice(0, 80)}"`);
  }

  // Check trailing page
  const lastPage = await doc.getPage(doc.numPages);
  const lastTc = await lastPage.getTextContent();
  const lastText = (lastTc.items as any[]).map(i => i.str).join(' ').trim();
  console.log(`\n------------------------------------------------------`);
    console.log(`LAST PAGE (Page ${doc.numPages}) TEXT CONTENT LENGTH: ${lastText.length} chars`);
    console.log(`Last Page Preview: "${lastText.slice(0, 200)}"`);
    console.log(`------------------------------------------------------\n`);

    return {
      numPages: doc.numPages,
      distribution: sorted,
      lastPageTextLength: lastText.length,
    };
  }

  if (process.argv[1] && process.argv[1].includes('forensic_pdf_audit')) {
    auditPdf().catch(console.error);
  }
