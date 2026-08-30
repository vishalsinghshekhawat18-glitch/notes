import { db } from '../lib/db/client';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';
import { seedBatchBCanonicalKnowledge } from '../lib/benchmark/batch-b-canonical-seed';
import { seedBatchP1CanonicalKnowledge } from '../lib/benchmark/batch-p1-canonical-seed';
import { seedBatchP2CanonicalKnowledge } from '../lib/benchmark/batch-p2-canonical-seed';
import { seedBatchP3CanonicalKnowledge } from '../lib/benchmark/batch-p3-canonical-seed';
import { seedBatchP4CanonicalKnowledge } from '../lib/benchmark/batch-p4-canonical-seed';
import { seedBatchP5CanonicalKnowledge } from '../lib/benchmark/batch-p5-canonical-seed';
import { seedBatchP6CanonicalKnowledge } from '../lib/benchmark/batch-p6-canonical-seed';
import { seedBatchP7CanonicalKnowledge } from '../lib/benchmark/batch-p7-canonical-seed';
import { seedTopic9CanonicalKnowledge } from '../lib/benchmark/topic-9-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '../lib/benchmark/topic-10-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';
import { seedBatchE1CanonicalKnowledge } from '../lib/benchmark/batch-e1-canonical-seed';
import { seedBatchE2CanonicalKnowledge } from '../lib/benchmark/batch-e2-canonical-seed';
import { seedBatchE3CanonicalKnowledge } from '../lib/benchmark/batch-e3-canonical-seed';
import { seedBatchE4CanonicalKnowledge } from '../lib/benchmark/batch-e4-canonical-seed';
import { seedBatchE5CanonicalKnowledge } from '../lib/benchmark/batch-e5-canonical-seed';
import { seedBatchB1IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b1-iibf-canonical-seed';
import { seedBatchB2IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b2-iibf-canonical-seed';
import { seedBatchB3IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b3-iibf-canonical-seed';
import { seedBatchGASchemesCanonicalKnowledge } from '../lib/benchmark/batch-ga-schemes-canonical-seed';
import { seedBatchEnglishCanonicalKnowledge } from '../lib/benchmark/batch-english-canonical-seed';
import { seedBatchAncientIndiaCanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-canonical-seed';
import { seedBatchAncientIndiaBatch2CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-2-canonical-seed';
import { seedBatchAncientIndiaBatch3CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-3-canonical-seed';
import { seedBatchAncientIndiaBatch4CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-4-canonical-seed';
import { seedBatchQuantBatch1CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-1-canonical-seed';
import { seedBatchQuantBatch2CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-2-canonical-seed';
import { seedBatchQuantBatch3PracticeBank } from '../lib/benchmark/batch-quant-batch-3-practice-seed';

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
  // Seed Batch P6 (Topics 24-25: 7 concepts)
  await seedBatchP6CanonicalKnowledge();
  // Seed Batch P7 (Deepening 6 Substantially Migrated Units: 6 concepts)
  await seedBatchP7CanonicalKnowledge();

  // Seed Economics Batch 1 (Topics 27-32: 17 concepts)
  await seedBatchE1CanonicalKnowledge();
  // Seed Economics Batch 2 (Topics 33-39: 15 concepts)
  await seedBatchE2CanonicalKnowledge();
  // Seed Economics Batch 3 (Topics 40-48: 21 concepts)
  await seedBatchE3CanonicalKnowledge();
  // Seed Economics Batch 4 (Topics 49-61: 26 concepts)
  await seedBatchE4CanonicalKnowledge();
  // Seed Economics Batch 5 (Topics 62-76: 27 concepts)
  await seedBatchE5CanonicalKnowledge();

  // Seed Batch B1 (IIBF Topics 38-41: 16 concepts)
  await seedBatchB1IIBFCanonicalKnowledge();
  // Seed Batch B2 (IIBF Topics 42-45: 16 concepts)
  await seedBatchB2IIBFCanonicalKnowledge();
  // Seed Batch B3 (IIBF Topics 46-51: 19 concepts)
  await seedBatchB3IIBFCanonicalKnowledge();

  // Seed Static GA & Government Schemes (Topics 52-56: 8 concepts)
  await seedBatchGASchemesCanonicalKnowledge();

  // Seed English Language & Descriptive Writing (Topics 57-62: 15 concepts)
  await seedBatchEnglishCanonicalKnowledge();

  // Seed Ancient Indian History (Topics 63-65: 9 concepts)
  await seedBatchAncientIndiaCanonicalKnowledge();

  // Seed Ancient Indian History (Batch 2: Topics 66-70: 11 concepts)
  await seedBatchAncientIndiaBatch2CanonicalKnowledge();

  // Seed Ancient Indian History (Batch 3: Topics 71-74: 9 concepts)
  await seedBatchAncientIndiaBatch3CanonicalKnowledge();

  // Seed Ancient Indian History (Batch 4: Topics 75-79: 14 concepts)
  await seedBatchAncientIndiaBatch4CanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 1: Topics 80-84: 16 concepts)
  await seedBatchQuantBatch1CanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 2: Topics 85-89: 11 concepts)
  await seedBatchQuantBatch2CanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 3: Practice & PYQ Consolidation Bank)
  await seedBatchQuantBatch3PracticeBank();

  const count = await db.concept.count();
  console.log(`Successfully seeded ${count} canonical concepts.`);
  await db.$disconnect();
}

main().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
