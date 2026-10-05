import * as fs from 'fs';
import * as path from 'path';

const dir = path.resolve('007', 'notes', 'current_affairs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

// Comprehensive emoji regex
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F910}-\u{1F96B}\u{1F980}-\u{1F9E0}]/gu;

const emojiSet = new Set<string>();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = content.match(emojiRegex);
  if (matches) {
    for (const m of matches) emojiSet.add(m);
  }
}

console.log('Unique emojis found:', Array.from(emojiSet).join(' '));
