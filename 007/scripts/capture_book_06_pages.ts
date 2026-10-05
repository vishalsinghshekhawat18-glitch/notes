import { execSync } from 'child_process';
import fs from 'fs';
import http from 'http';
import path from 'path';

const outDir = path.resolve('007', 'PRINT DESIGNER', 'inspection_b6');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const server = http.createServer((req, res) => {
  const reqUrl = (req.url || '/').split('?')[0];
  let filePath = path.resolve('.' + reqUrl);
  if (reqUrl === '/') filePath = path.resolve('render_viewer.html');

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found: ' + filePath);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes: Record<string, string> = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.css': 'text/css',
    '.pdf': 'application/pdf',
    '.png': 'image/png',
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(9124, async () => {
  console.log('Static server listening on http://localhost:9124');

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const pagesToCapture = [1, 2, 3, 4, 5, 6, 18, 19];
  const os = await import('os');
  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-b6-'));

  const bookRelPath = './007/PRINT DESIGNER/007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf';

  try {
    for (const pageNum of pagesToCapture) {
      const padded = String(pageNum).padStart(3, '0');
      const outPng = path.join(outDir, `page_${padded}.png`);
      const targetUrl = `http://localhost:9124/render_viewer.html?file=${encodeURIComponent(bookRelPath)}&page=${pageNum}&scale=1.4`;
      const cmd = `"${edgePath}" --headless --disable-gpu --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --virtual-time-budget=4000 --window-size=1150,1650 --screenshot="${outPng}" "${targetUrl}"`;

      try {
        execSync(cmd, { stdio: 'ignore' });
        const size = fs.existsSync(outPng) ? fs.statSync(outPng).size : 0;
        console.log(`Page ${pageNum} -> ${outPng} (${size} bytes)`);
      } catch (err: any) {
        console.error(`Error capturing page ${pageNum}:`, err.message);
      }
    }
  } finally {
    try {
      fs.rmSync(tempProfileDir, { recursive: true, force: true });
    } catch(e) {}
  }

  server.close(() => {
    console.log('All inspection pages captured. Server closed.');
    process.exit(0);
  });
});
