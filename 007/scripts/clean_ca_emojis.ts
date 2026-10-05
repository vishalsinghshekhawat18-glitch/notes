import * as fs from 'fs';
import * as path from 'path';

const dir = path.resolve('007', 'notes', 'current_affairs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

// Comprehensive emoji regex matching all emoji ranges
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F910}-\u{1F96B}\u{1F980}-\u{1F9E0}]/gu;

function sanitizeContent(text: string): string {
  let res = text;

  // Replace specific exam angle markers
  res = res.replace(/🎯\s*Exam Angle\s*(?:→|:)?/gi, '**EXAM ANGLE:**');
  res = res.replace(/🎯\s*EXAM ANGLE\s*(?:→|:)?/gi, '**EXAM ANGLE:**');

  // Replace common icons before identifiers like [STA-001], [Q1-001], etc.
  res = res.replace(/(?:📰|📌|🏛️|🏛|🏦|💼|⚡|🔥|🏆|📊|🔬)\s*(\[[A-Z0-9\-]+\])/g, '$1');

  // Strip all remaining emojis
  res = res.replace(emojiRegex, '');

  // Fix header formatting: remove double spaces, fix ## [emoji removed]
  res = res.replace(/^(#+)\s*(\d+[\.\)]?)\s*[:\-–]?\s*/gm, '$1 $2 ');
  res = res.replace(/^(#+)\s+/gm, '$1 ');

  // Clean trailing spaces
  res = res.replace(/[ \t]+$/gm, '');

  return res;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  const original = fs.readFileSync(filePath, 'utf8');
  const cleaned = sanitizeContent(original);
  
  fs.writeFileSync(filePath, cleaned, 'utf8');
  console.log(`✓ Cleaned & saved: ${file}`);
}
console.log('All Current Affairs source markdown files sanitized to 0 emojis!');
