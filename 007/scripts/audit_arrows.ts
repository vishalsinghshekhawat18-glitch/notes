import * as fs from 'fs';
import * as path from 'path';

const dir = path.resolve('007', 'notes', 'current_affairs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const arrows = new Set<string>();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.includes('→')) {
      const match = line.match(/^[\s\*\-_]*([A-Za-z0-9\s]{2,25})\s*→/);
      if (match) {
        arrows.add(match[1].trim());
      }
    }
  }
}

console.log('Arrow prefixes found:');
arrows.forEach(a => console.log(' -', a));
