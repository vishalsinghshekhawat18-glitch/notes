import * as fs from 'fs';
import { parseAsciiTable, renderTableHtml } from './test_ascii_parser';

const content = fs.readFileSync('007/notes/economics/03_CHAPTER_02_NATIONAL_INCOME_ACCOUNTING_GVA.md', 'utf-8');
const blocks = content.match(/```[\s\S]*?```/g) || [];
const b1 = blocks[1].replace(/^```[^\n]*\n/, '').replace(/\n```$/, '');
const parsed = parseAsciiTable(b1);
if (parsed) {
  console.log(renderTableHtml(parsed));
} else {
  console.log('FAILED TO PARSE');
}
