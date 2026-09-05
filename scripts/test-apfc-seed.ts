import { db } from '../lib/db/client';
import { seedAPFCIRCanonicalKnowledge } from '../lib/benchmark/batch-apfc-ir-canonical-seed';

async function main() {
  console.log('--- Seeding APFC / IR Canonical Knowledge ---');
  await seedAPFCIRCanonicalKnowledge();

  const conceptCount = await db.concept.count();
  const claimCount = await db.claim.count();
  const evidenceCount = await db.evidence.count();
  const contentBlockCount = await db.contentBlock.count();
  const examMappingCount = await db.examConceptMapping.count();
  const revisionUnitCount = await db.revisionUnit.count();
  const questionCount = await db.question.count();

  console.log('\n--- Current Database Counters ---');
  console.log(`Concepts: ${conceptCount}`);
  console.log(`Claims: ${claimCount}`);
  console.log(`Evidence: ${evidenceCount}`);
  console.log(`ContentBlocks: ${contentBlockCount}`);
  console.log(`ExamMappings: ${examMappingCount}`);
  console.log(`RevisionUnits: ${revisionUnitCount}`);
  console.log(`Questions: ${questionCount}`);
}

main().catch(console.error).finally(() => process.exit(0));
