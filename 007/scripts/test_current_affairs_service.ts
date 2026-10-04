import {
  getCurrentAffairsChapters,
  getShelf007PartGroups,
  getShelf007Subjects,
} from '@/lib/shelf007/service';

console.log('Testing Current Affairs in Shelf 007 service...');

const chapters = getCurrentAffairsChapters();
console.log(`Discovered ${chapters.length} chapters.`);
chapters.forEach((c) => {
  console.log(`  [${c.slug}] Order: ${c.order} | "${c.shortTitle}" | Words: ${c.wordCount} | Sections: ${c.sections.length}`);
});

const groups = getShelf007PartGroups('current-affairs');
console.log(`\nPart groups count: ${groups.length}`);
groups.forEach((g) => {
  console.log(`  Part: ${g.partNumber} - ${g.groupTitle} (${g.chapters.length} chapters)`);
  g.chapters.forEach((c) => console.log(`      -> ${c.slug}: ${c.title}`));
});

const subjects = getShelf007Subjects();
const caMeta = subjects.find((s) => s.slug === 'current-affairs');
console.log(`\nCurrent Affairs Meta:`, caMeta);
