const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function saveImages() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const filePath = path.join(process.cwd(), '007', "PDF's", '_OceanofPDF.com_Vocab_prodigy_-_Nimisha_bansal.pdf');
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  for (let p = 1; p <= 6; p++) {
    const page = await doc.getPage(p);
    const ops = await page.getOperatorList();
    const imgIndex = ops.fnArray.indexOf(pdfjsLib.OPS.paintImageXObject);
    if (imgIndex !== -1) {
      const imgName = ops.argsArray[imgIndex][0];
      const img = await new Promise((resolve) => {
        page.objs.get(imgName, resolve);
      });
      if (img && img.data) {
        console.log(`Page ${p}: img ${img.width}x${img.height}, kind: ${img.kind}`);
        // If kind == 1 (grayscale) or 2 (RGB) or 3 (RGBA)
        const channels = img.data.length / (img.width * img.height);
        console.log(`Channels: ${channels}`);
        const outPath = path.join(process.cwd(), '007', 'scripts', `vocab_p${p}.png`);
        await sharp(Buffer.from(img.data), {
          raw: {
            width: img.width,
            height: img.height,
            channels: Math.round(channels),
          }
        }).toFile(outPath);
        console.log(`Saved ${outPath}`);
      }
    }
  }
}

saveImages().catch(console.error);
