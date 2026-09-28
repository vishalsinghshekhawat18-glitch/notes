import { db } from '../lib/db/client';

async function checkContentBlocks() {
  const blocks = await db.contentBlock.findMany({
    where: {
      body: {
        contains: '\\n'
      }
    },
    select: {
      id: true,
      type: true,
      title: true,
      body: true,
      concept: {
        select: {
          slug: true,
          title: true
        }
      }
    }
  });

  console.log(`Found ${blocks.length} content blocks with literal \\n in database!`);
  blocks.slice(0, 5).forEach((b, i) => {
    console.log(`\n--- Block ${i + 1} (${b.type} in ${b.concept?.title}) ---`);
    console.log(`Title: ${b.title}`);
    console.log(`Body preview: ${b.body.slice(0, 150)}...`);
  });
}

checkContentBlocks().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});
