import * as fs from 'fs';

const content = fs.readFileSync('English_Descriptive_Writing_Master.md', 'utf8');
const lines = content.split('\n');

let currentHeader = '';
let currentItemId = '';
let currentSummary = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if ((line.startsWith('## ') || line.startsWith('# ')) && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents')) {
    if (currentHeader) {
      console.log(`HEADER: ${currentHeader} | ID: ${currentItemId} | SUM: ${currentSummary}`);
    }
    currentHeader = line;
    currentItemId = '';
    currentSummary = '';
  }
  if (line.includes('- **Item ID:**')) {
    currentItemId = line.replace(/.*- \*\*Item ID:\*\*\s*`?([^`\n]+)`?.*/, '$1').trim();
  }
  if (line.includes('> **Executive Summary:**')) {
    currentSummary = line.replace(/.*> \*\*Executive Summary:\*\*\s*/, '').trim();
  }
}
if (currentHeader) {
  console.log(`HEADER: ${currentHeader} | ID: ${currentItemId} | SUM: ${currentSummary}`);
}
