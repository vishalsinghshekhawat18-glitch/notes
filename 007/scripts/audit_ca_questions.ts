import * as fs from 'fs';
import * as path from 'path';

const dir = path.resolve('007', 'notes', 'current_affairs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  let qMatches = 0;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    if (/^(\*\*Q\d+[\.:]|\*\*Question\s*\d+|Q\d+[\.:]|\(a\)\s+|\(b\)\s+|\[A\]|\[B\])/i.test(l)) {
      qMatches++;
    }
  }
  console.log(`${file}: potential MCQ markers = ${qMatches}`);
}
