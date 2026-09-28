import * as fs from 'fs';
import * as path from 'path';

function searchDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next' || entry.name === 'dist') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchDir(fullPath);
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.ts') || entry.name.endsWith('.js') || entry.name.endsWith('.json') || entry.name.endsWith('.sql') || entry.name.endsWith('.md')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('Article & Nomenclature Confusion') || content.includes('Critical Traps & Multi-Statement')) {
            console.log(`FOUND IN: ${fullPath}`);
          }
        } catch (e) {}
      }
    }
  }
}

searchDir(process.cwd());
console.log('Search finished.');
