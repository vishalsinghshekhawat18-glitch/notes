import { db } from '../lib/db/client';

async function checkAllLiteralNewlines() {
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
      concept: {
        select: {
          title: true,
          topic: {
            select: {
              title: true,
              subject: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      }
    }
  });

  const subjectCounts = new Map<string, number>();
  for (const b of blocks) {
    const sName = b.concept?.topic?.subject?.name || 'Unknown';
    subjectCounts.set(sName, (subjectCounts.get(sName) || 0) + 1);
  }

  console.log('Subject breakdown of literal \\n:');
  for (const [s, count] of subjectCounts.entries()) {
    console.log(`- ${s}: ${count} blocks`);
  }
}

checkAllLiteralNewlines().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});
