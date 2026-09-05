import { seedAgricultureCanonicalKnowledge } from '../lib/benchmark/batch-agriculture-canonical-seed';
import { db } from '../lib/db/client';

async function main() {
  console.log('--- EXECUTING AGRICULTURE SEED ---');
  await seedAgricultureCanonicalKnowledge();
  
  const totalConcepts = await db.concept.count();
  const ardConcepts = await db.concept.count({
    where: { id: { startsWith: 'CON-ARD-' } }
  });
  const totalClaims = await db.claim.count();
  const totalBlocks = await db.contentBlock.count();
  const totalMappings = await db.examConceptMapping.count();
  const totalRevision = await db.revisionUnit.count();
  const totalQuestions = await db.question.count();

  console.log('--- DATABASE STATUS AFTER AGRICULTURE SEED ---');
  console.log('Total Canonical Concepts in DB:', totalConcepts);
  console.log('Agriculture Concepts (CON-ARD-*):', ardConcepts);
  console.log('Total Claims:', totalClaims);
  console.log('Total Content Blocks:', totalBlocks);
  console.log('Total Exam Mappings:', totalMappings);
  console.log('Total Revision Units:', totalRevision);
  console.log('Total Questions:', totalQuestions);
}

main()
  .catch(err => {
    console.error('Execution failed:', err);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
