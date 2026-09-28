import * as fs from 'fs';
import * as path from 'path';

function searchFiles(dir: string, pattern: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchFiles(fullPath, pattern);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
      const c = fs.readFileSync(fullPath, 'utf8');
      if (c.includes(pattern)) {
        console.log(`Found "${pattern}" in: ${fullPath}`);
      }
    }
  }
}

searchFiles(process.cwd(), 'EXAM APPLICATION');
searchFiles(process.cwd(), 'Examiner Traps');
searchFiles(process.cwd(), 'EXAM_APPLICATION');
