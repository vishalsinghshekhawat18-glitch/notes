import { db } from '../lib/db/client';
import { seedPolityMasterCanonicalKnowledge } from '../lib/benchmark/batch-polity-master-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';
import { seedBatchE1CanonicalKnowledge } from '../lib/benchmark/batch-e1-canonical-seed';
import { seedBatchE2CanonicalKnowledge } from '../lib/benchmark/batch-e2-canonical-seed';
import { seedBatchE3CanonicalKnowledge } from '../lib/benchmark/batch-e3-canonical-seed';
import { seedBatchE4CanonicalKnowledge } from '../lib/benchmark/batch-e4-canonical-seed';
import { seedBatchE5CanonicalKnowledge } from '../lib/benchmark/batch-e5-canonical-seed';
import { seedBatchE6CanonicalKnowledge } from '../lib/benchmark/batch-e6-canonical-seed';
import { seedBatchE7CanonicalKnowledge } from '../lib/benchmark/batch-e7-canonical-seed';
import { seedBatchE8CanonicalKnowledge } from '../lib/benchmark/batch-e8-canonical-seed';
import { seedIIBFMasterCanonicalKnowledge } from '../lib/benchmark/batch-iibf-master-canonical-seed';
import { seedBatchGASchemesCanonicalKnowledge } from '../lib/benchmark/batch-ga-schemes-canonical-seed';
import { seedBatchEnglishCanonicalKnowledge } from '../lib/benchmark/batch-english-canonical-seed';
import { seedAncientMasterCanonicalKnowledge } from '../lib/benchmark/batch-ancient-master-canonical-seed';
import { seedBatchQuantBatch1CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-1-canonical-seed';
import { seedBatchQuantBatch2CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-2-canonical-seed';
import { seedBatchQuantBatch3PracticeBank } from '../lib/benchmark/batch-quant-batch-3-practice-seed';
import { seedBasicScienceMasterCanonicalKnowledge } from '../lib/benchmark/batch-science-master-canonical-seed';

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

  // Seed Modernized Indian Polity Master (Topics 1-25: 136 concepts, 4 blocks, 8 exam mappings, 272+ questions)
  await seedPolityMasterCanonicalKnowledge();

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
  // Seed Economics Batch 6 (Topics 77-85: 18 concepts)
  await seedBatchE6CanonicalKnowledge();
  // Seed Economics Batch 7 (Topics 86-94: 18 concepts)
  await seedBatchE7CanonicalKnowledge();
  // Seed Economics Batch 8 (Topics 95-102: 18 concepts - Final Capstone)
  await seedBatchE8CanonicalKnowledge();

  // Seed Modernized IIBF & Banking Regulations Master (Topics 38-62: 80 concepts, 4 blocks, 8 exam mappings, 160+ questions)
  await seedIIBFMasterCanonicalKnowledge();

  // Seed Static GA & Government Schemes (Topics 52-56: 8 concepts)
  await seedBatchGASchemesCanonicalKnowledge();

  // Seed English Language & Descriptive Writing (Topics 57-62: 15 concepts)
  await seedBatchEnglishCanonicalKnowledge();

  // Seed Modernized Ancient Indian History Master (Topics 1-25: 65 concepts, 4 blocks, 8 exam mappings, 130+ questions)
  await seedAncientMasterCanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 1: Topics 80-84: 16 concepts)
  await seedBatchQuantBatch1CanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 2: Topics 85-89: 11 concepts)
  await seedBatchQuantBatch2CanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 3: Practice & PYQ Consolidation Bank)
  await seedBatchQuantBatch3PracticeBank();

  // Seed Basic Science & Scientific Literacy Master (Part 1: Topics 1-6: 26 concepts)
  await seedBasicScienceMasterCanonicalKnowledge();

  const count = await db.concept.count();
  console.log(`Successfully seeded ${count} canonical concepts.`);
  await db.$disconnect();
}

main().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
