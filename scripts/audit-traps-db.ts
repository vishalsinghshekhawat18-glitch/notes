import { db } from '../lib/db/client';

async function auditIdenticalTraps() {
  const allTraps = await db.contentBlock.findMany({
    where: {
      type: 'EXAM_APPLICATION'
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

  console.log(`Total EXAM_APPLICATION blocks in DB: ${allTraps.length}`);
  
  const trapFrequencies = new Map<string, number>();
  for (const t of allTraps) {
    const snippet = t.body.trim().slice(0, 100);
    trapFrequencies.set(snippet, (trapFrequencies.get(snippet) || 0) + 1);
  }

  console.log('\nTrap body frequencies:');
  for (const [snippet, count] of trapFrequencies.entries()) {
    console.log(`Count: ${count} | Snippet: "${snippet.replace(/\n/g, '\\n')}..."`);
  }
}

auditIdenticalTraps().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});
