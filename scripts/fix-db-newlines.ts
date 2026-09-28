import { db } from '../lib/db/client';

async function fixDatabaseNewlines() {
  const blocks = await db.contentBlock.findMany({
    where: {
      body: {
        contains: '\\n'
      }
    },
    select: {
      id: true,
      body: true
    }
  });

  console.log(`Fixing ${blocks.length} blocks with literal \\n in database...`);

  let count = 0;
  for (const b of blocks) {
    const fixedBody = b.body.replace(/\\n/g, '\n');
    await db.contentBlock.update({
      where: { id: b.id },
      data: { body: fixedBody }
    });
    count++;
  }

  console.log(`Successfully updated ${count} blocks in the database!`);
}

fixDatabaseNewlines().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});
