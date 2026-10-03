const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  let res = [];
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      const full = path.join(dir, item);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          res = res.concat(scanDir(full));
        } else {
          res.push({ path: full, mtime: stat.mtime, size: stat.size });
        }
      } catch(e) {}
    }
  } catch(e) {}
  return res;
}

const convDir = 'C:\\Users\\visha\\.gemini\\antigravity\\brain\\9836bf0b-2643-44b2-8ee1-600b287ddd63';
const all = scanDir(convDir);
all.sort((a,b) => b.mtime - a.mtime);
console.log('CONV DIR FILES:');
all.slice(0, 20).forEach(x => console.log(x.mtime.toISOString(), x.size, x.path));
