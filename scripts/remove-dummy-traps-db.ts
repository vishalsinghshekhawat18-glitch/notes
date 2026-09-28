import { db } from '../lib/db/client';

async function removeDummyTraps() {
  const result = await db.contentBlock.deleteMany({
    where: {
      type: 'EXAM_APPLICATION',
      body: {
        contains: 'Article & Nomenclature Confusion'
      }
    }
  });

  console.log(`Successfully deleted ${result.count} generic dummy trap blocks from database!`);
}

removeDummyTraps().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});
