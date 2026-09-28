import { db } from '../lib/db/client';

async function countSpecificTrap() {
  const blocks = await db.contentBlock.findMany({
    where: {
      body: {
        contains: 'Article & Nomenclature Confusion'
      }
    },
    select: {
      id: true,
      title: true,
      body: true,
      concept: {
        select: {
          id: true,
          slug: true,
          title: true,
          topic: {
            select: {
              title: true
            }
          }
        }
      }
    }
  });

  console.log(`Found ${blocks.length} blocks with the generic trap!`);
  blocks.forEach((b, i) => {
    console.log(`${i+1}. [${b.concept?.id}] ${b.concept?.title} (Topic: ${b.concept?.topic?.title})`);
  });
}

countSpecificTrap().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});
