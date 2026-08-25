import { db } from '../lib/db/client';

async function checkSections() {
  const sections = await db.sourceSection.findMany({
    where: { source: { id: 'source-ceramic-polity-2026' } },
    orderBy: { order: 'asc' },
  });

  console.log(`Total sections: ${sections.length}`);
  let expectedStart = 1;
  for (const s of sections) {
    console.log(`Order: ${s.order}, Title: ${s.title}, Start: ${s.pageStart}, End: ${s.pageEnd}, ExpectedStart: ${expectedStart}`);
    if (s.pageStart !== expectedStart) {
      console.log(`>>> MISMATCH AT Order ${s.order} (${s.title}): s.pageStart=${s.pageStart}, expected=${expectedStart}`);
    }
    expectedStart = (s.pageEnd ?? s.pageStart ?? 0) + 1;
  }
}

checkSections().catch(console.error).finally(() => db.$disconnect());

