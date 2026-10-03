const fs = require('fs');
const path = require('path');

function search(dir, depth = 0) {
  if (depth > 4) return [];
  let found = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      if (item === 'node_modules' || item === '.git' || item === '.next' || item === '.agents') continue;
      const full = path.join(dir, item);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          found = found.concat(search(full, depth + 1));
        } else if (item.endsWith('.md')) {
          found.push({ path: full, mtime: stat.mtime, size: stat.size });
        }
      } catch (e) {}
    }
  } catch (e) {}
  return found;
}

// Search C:\Users\visha\OneDrive\Documents\Notes
const notesMd = search('C:\\Users\\visha\\OneDrive\\Documents\\Notes');
// Sort by mtime desc
notesMd.sort((a, b) => b.mtime - a.mtime);
console.log('--- RECENT MD IN NOTES ---');
notesMd.slice(0, 30).forEach(x => console.log(x.mtime.toISOString(), x.size, x.path));

// Also check C:\Users\visha\OneDrive\Documents
const docMd = search('C:\\Users\\visha\\OneDrive\\Documents', 2);
docMd.sort((a, b) => b.mtime - a.mtime);
console.log('--- RECENT MD IN ONEDRIVE DOCUMENTS ---');
docMd.slice(0, 20).forEach(x => console.log(x.mtime.toISOString(), x.size, x.path));
