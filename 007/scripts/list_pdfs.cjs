const fs = require('fs');
const path = require('path');

const p = path.join('C:', 'Users', 'visha', 'OneDrive', 'Documents', 'Notes', '007', "PDF's");
try {
  const files = fs.readdirSync(p);
  console.log("FILES IN 007/PDF's (" + files.length + "):");
  files.forEach(f => {
    const s = fs.statSync(path.join(p, f));
    console.log(s.mtime.toISOString(), s.size, f);
  });
} catch(e) {
  console.error("Error reading PDF's:", e.message);
}
