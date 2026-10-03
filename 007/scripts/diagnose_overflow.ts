import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { SOVEREIGN_SUBJECT_CATALOG, collectSubjectMarkdownFiles, transformMarkdownToPrintHtml } from './build_sovereign_books';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const subject = SOVEREIGN_SUBJECT_CATALOG.find(s => s.slug === 'iibf_dbf')!;
const baseNotesDir = path.resolve('007', 'notes');

const mdFiles = collectSubjectMarkdownFiles(subject, baseNotesDir);
let combinedMd = '';
for (const f of mdFiles) {
  combinedMd += `\n\n${fs.readFileSync(f, 'utf-8')}\n\n`;
}

const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
const katexCssContent = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

const fullHtml = transformMarkdownToPrintHtml(combinedMd, subject, katexCssContent);
fs.writeFileSync('diagnose_full.html', fullHtml, 'utf-8');

function checkScale(name: string, htmlContent: string) {
  const htmlPath = path.resolve('diagnose_test.html');
  const pdfPath = path.resolve('diagnose_test.pdf');
  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'ignore' });

  const buf = fs.readFileSync(pdfPath);
  let pos = 0;
  let cmFound: string[] = [];
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
        const cms = [...s.matchAll(/([0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+\s+[0-9.-]+)\s+cm/g)].map(m => m[1]);
        cmFound = cms;
        break;
      }
    } catch(e) {}
    pos = end + 9;
  }
  console.log(`[${name}] -> CMs:`, cmFound.slice(0, 3));
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
}

// Test full
checkScale('Full HTML', fullHtml);

// Test without cover page container
const noCover = fullHtml.replace(/<div class="sovereign-book-cover-container">[\s\S]*?<\/div>\s*<\/div>/, '');
checkScale('No Cover Container', noCover);

// Test only first chapter (Paper 1 Module A)
const firstChapterOnly = fullHtml.slice(0, fullHtml.indexOf('IEIFS Unit 3')) + '</body></html>';
checkScale('First Chapter Only', firstChapterOnly);

// Test with global overflow-x: clip and table-layout: fixed
const withContainment = fullHtml.replace('<style>', '<style>\n* { max-width: 100% !important; box-sizing: border-box !important; } table { table-layout: fixed !important; width: 100% !important; }\n');
checkScale('With Strict Width Containment', withContainment);
