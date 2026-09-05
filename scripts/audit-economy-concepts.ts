import { db } from '../lib/db/client';

async function main() {
  const concepts = await db.concept.findMany({
    where: { id: { startsWith: 'CON-ECO-' } },
    select: { id: true, title: true, topic: { select: { slug: true, title: true, subject: { select: { slug: true } } } } },
    orderBy: { id: 'asc' }
  });

  console.log(`Found ${concepts.length} concepts starting with CON-ECO-`);
  const ids = concepts.map(c => c.id);
  console.log('Sample IDs:', ids.slice(0, 15));
  console.log('Sample IDs mid:', ids.slice(95, 110));
  console.log('Sample IDs end:', ids.slice(150, 160));
  
  // Check subjects of these concepts
  const subjMap: Record<string, number> = {};
  for (const c of concepts) {
    const s = c.topic?.subject?.slug || 'unknown';
    subjMap[s] = (subjMap[s] || 0) + 1;
  }
  console.log('Subject distribution for CON-ECO-*:', subjMap);
}

main().catch(console.error).finally(() => process.exit(0));
