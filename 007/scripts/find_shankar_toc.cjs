const fs = require('fs');
const content = fs.readFileSync('007/scripts/shankar_ias_toc.txt', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.match(/(PART\s*[-–]|CHAPTER\s*[-–\d]|CONTENTS|TABLE OF CONTENTS)/i)) {
    console.log(`L${idx+1}: ${line.trim()}`);
  }
});
