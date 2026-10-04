import { getShelf007Subjects, getHindiChapters } from '../../lib/shelf007/service';

const subjects = getShelf007Subjects();
const hindi = subjects.find(s => s.slug === 'hindi');
const chs = getHindiChapters();

console.log('=== SHELF 007 HINDI SERVICE AUDIT ===');
console.log('Total Subjects in Shelf 007:', subjects.length);
console.log('Hindi Subject Registered:', !!hindi);
console.log('Hindi Subject Code:', hindi?.code);
console.log('Total Hindi Chapters / Items:', chs.length);
console.log('Total Words in Hindi Codex:', chs.reduce((acc, c) => acc + c.wordCount, 0));
console.log('Cover / Front-matter slug:', chs[0]?.slug, '->', chs[0]?.title);
console.log('First Master Chapter:', chs[2]?.slug, '->', chs[2]?.title);
console.log('Last Master Chapter:', chs[21]?.slug, '->', chs[21]?.title);
console.log('Revision files count:', chs.filter(c => c.slug.startsWith('rev-')).length);
