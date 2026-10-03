import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function checkHtml(name: string, html: string) {
  const htmlPath = path.resolve('test_part.html');
  const pdfPath = path.resolve('test_part.pdf');
  fs.writeFileSync(htmlPath, html, 'utf-8');

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'ignore' });

  const buf = fs.readFileSync(pdfPath);
  let pos = 0;
  let cms: string[] = [];
  while ((pos = buf.indexOf('stream', pos)) !== -1) {
    const start = pos + 6;
    const end = buf.indexOf('endstream', start);
    if (end === -1) break;
    let chunk = buf.slice(start, end);
    if (chunk[0] === 0x0d && chunk[1] === 0x0a) chunk = chunk.slice(2);
    else if (chunk[0] === 0x0a || chunk[0] === 0x0d) chunk = chunk.slice(1);
    try {
      const s = zlib.inflateSync(chunk).toString('latin1');
      if (s.includes('Tf') && s.includes('cm')) {
        cms = [...s.matchAll(/([0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+)\s+cm/g)].map(m => m[1]);
        break;
      }
    } catch(e) {}
    pos = end + 9;
  }
  console.log(`${name.padEnd(35)} -> CMs: ${cms.slice(0, 2).join(' | ')}`);
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
}

// Read luxuryPrintCss from build_sovereign_books.ts
const buildScript = fs.readFileSync('007/scripts/build_sovereign_books.ts', 'utf-8');
const cssMatch = buildScript.match(/const luxuryPrintCss = `([\s\S]*?)`;/);
const luxuryCss = cssMatch ? cssMatch[1] : '';

// 1. Just paragraph with luxuryCss
checkHtml('1. Paragraph with luxuryCss', `<!DOCTYPE html><html><head><style>${luxuryCss}</style></head><body><p>Test paragraph content.</p></body></html>`);

// 2. Cover page container
const coverHtml = `<div class="sovereign-book-cover-container">
  <div class="cover-top-masthead">TOP</div>
  <div class="cover-center-body"><div class="cover-title">TITLE</div></div>
  <div class="cover-bottom-footer">FOOTER</div>
</div>`;
checkHtml('2. Cover page with luxuryCss', `<!DOCTYPE html><html><head><style>${luxuryCss}</style></head><body>${coverHtml}</body></html>`);

// 3. Cover page + Content paragraph
checkHtml('3. Cover + Paragraph', `<!DOCTYPE html><html><head><style>${luxuryCss}</style></head><body>${coverHtml}<p>Hello on next page</p></body></html>`);

// 4. Sample table
const tableHtml = `<table><thead><tr><th>Header 1</th><th>Header 2</th></tr></thead><tbody><tr><td>Data 1</td><td>Data 2</td></tr></tbody></table>`;
checkHtml('4. Table with luxuryCss', `<!DOCTYPE html><html><head><style>${luxuryCss}</style></head><body>${tableHtml}</body></html>`);

// 5. KaTeX CSS + paragraph
const katexCss = fs.readFileSync('node_modules/katex/dist/katex.min.css', 'utf-8');
checkHtml('5. KaTeX CSS + luxuryCss', `<!DOCTYPE html><html><head><style>${katexCss}\n${luxuryCss}</style></head><body><p>KaTeX test paragraph</p></body></html>`);
