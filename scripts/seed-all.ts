import { db } from '../lib/db/client';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';
import { seedBatchBCanonicalKnowledge } from '../lib/benchmark/batch-b-canonical-seed';
import { seedBatchP1CanonicalKnowledge } from '../lib/benchmark/batch-p1-canonical-seed';
import { seedBatchP2CanonicalKnowledge } from '../lib/benchmark/batch-p2-canonical-seed';
import { seedBatchP3CanonicalKnowledge } from '../lib/benchmark/batch-p3-canonical-seed';
import { seedBatchP4CanonicalKnowledge } from '../lib/benchmark/batch-p4-canonical-seed';
import { seedBatchP5CanonicalKnowledge } from '../lib/benchmark/batch-p5-canonical-seed';
import { seedTopic9CanonicalKnowledge } from '../lib/benchmark/topic-9-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '../lib/benchmark/topic-10-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';

async function main() {
  console.log('Seeding canonical database for static build...');

  // Clear DB tables in dependency order
  await db.knowledgeAudit.deleteMany();
  await db.question.deleteMany();
  await db.revisionUnit.deleteMany();
  await db.examConceptMapping.deleteMany();
  await db.exam.deleteMany();
  await db.connection.deleteMany();
  await db.contentBlock.deleteMany();
  await db.knowledgeIssue.deleteMany();
  await db.evidence.deleteMany();
  await db.ingestionItem.deleteMany();
  await db.coverageUnit.deleteMany();
  await db.sourceSection.deleteMany();
  await db.source.deleteMany();
  await db.claim.deleteMany();
  await db.concept.deleteMany();
  await db.topic.deleteMany();
  await db.subject.deleteMany();
  await db.domain.deleteMany();

  // Seed Batch A (Topics 1-4: 22 concepts)
  await seedBatchACanonicalKnowledge();
  // Seed Batch B (Topics 5-8: 18 concepts)
  await seedBatchBCanonicalKnowledge();
  // Seed Topic 9 (16 concepts)
  await seedTopic9CanonicalKnowledge();
  // Seed Topic 10 (5 concepts)
  await seedTopic10CanonicalKnowledge();
  // Seed Batch P1 (Topics 11-13: 12 concepts)
  await seedBatchP1CanonicalKnowledge();
  // Seed Batch P2 (Topics 14-15: 10 concepts)
  await seedBatchP2CanonicalKnowledge();
  // Seed Batch P3 (Topics 16-18: 10 concepts)
  await seedBatchP3CanonicalKnowledge();
  // Seed Batch P4 (Topics 19-20: 9 concepts)
  await seedBatchP4CanonicalKnowledge();
  // Seed Batch P5 (Topics 21-23: 13 concepts)
  await seedBatchP5CanonicalKnowledge();
  // Seed Inflation (5 concepts)
  await seedInflationCanonicalKnowledge();

  const count = await db.concept.count();
  console.log(`Successfully seeded ${count} canonical concepts.`);
  await db.$disconnect();
}

main().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
