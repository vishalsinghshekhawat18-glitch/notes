const fs = require('fs');
const path = require('path');

const userDir = 'C:\\Users\\visha';
const now = Date.now();
const fifteenMins = 30 * 60 * 1000; // last 30 minutes

function scan(dir, depth = 0) {
  if (depth > 5) return [];
  let res = [];
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'AppData' || item === '.gemini' || item === 'node_modules' || item === '.git' || item === '.next' || item === '.vscode') continue;
      const full = path.join(dir, item);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          res = res.concat(scan(full, depth + 1));
        } else if (item.endsWith('.md')) {
          if (now - stat.mtimeMs < fifteenMins) {
            res.push({ path: full, mtime: stat.mtime, size: stat.size });
          }
        }
      } catch(e) {}
    }
  } catch(e) {}
  return res;
}

const recent = scan(userDir);
recent.sort((a,b) => b.mtime - a.mtime);
console.log('RECENT MD FILES (last 30m):');
recent.forEach(r => console.log(r.mtime.toISOString(), r.size, r.path));
