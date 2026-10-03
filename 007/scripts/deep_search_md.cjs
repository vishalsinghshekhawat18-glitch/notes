const fs = require('fs');
const path = require('path');

const now = Date.now();
const twoHours = 4 * 60 * 60 * 1000; // last 4 hours

function findMd(dir, depth = 0) {
  if (depth > 6) return [];
  let res = [];
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'AppData' && depth === 1) {
        // Only check Local/Temp or Gemini if needed, otherwise skip heavy AppData
        continue;
      }
      if (item === '.git' || item === 'node_modules' || item === '.next') continue;
      const full = path.join(dir, item);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          res = res.concat(findMd(full, depth + 1));
        } else if (item.toLowerCase().endsWith('.md')) {
          if (now - stat.mtimeMs < twoHours) {
            res.push({ path: full, mtime: stat.mtime, size: stat.size });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  return res;
}

const found = findMd('C:\\Users\\visha');
found.sort((a, b) => b.mtime - a.mtime);
console.log('ALL MD MODIFIED IN LAST 4 HOURS UNDER C:\\Users\\visha:');
found.forEach(f => console.log(f.mtime.toISOString(), f.size, f.path));
