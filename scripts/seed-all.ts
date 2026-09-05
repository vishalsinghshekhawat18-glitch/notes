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
import { seedBatchGASchemesBatch2CanonicalKnowledge } from '../lib/benchmark/batch-ga-schemes-batch-2-canonical-seed';
import { seedBatchStaticGABatch2CanonicalKnowledge } from '../lib/benchmark/batch-static-ga-batch-2-canonical-seed';
import { seedBatchEnglishCanonicalKnowledge } from '../lib/benchmark/batch-english-canonical-seed';
import { seedBatchEnglishBatch2CanonicalKnowledge } from '../lib/benchmark/batch-english-batch-2-canonical-seed';
import { seedAncientMasterCanonicalKnowledge } from '../lib/benchmark/batch-ancient-master-canonical-seed';
import { seedMedievalMasterCanonicalKnowledge } from '../lib/benchmark/batch-medieval-history-canonical-seed';
import { seedModernMasterCanonicalKnowledge } from '../lib/benchmark/batch-modern-history-canonical-seed';
import { seedArtCultureRajasthanMasterCanonicalKnowledge } from '../lib/benchmark/batch-art-culture-rajasthan-canonical-seed';
import { seedWorldHistoryMasterCanonicalKnowledge } from '../lib/benchmark/batch-world-history-canonical-seed';
import { seedBatchQuantBatch1CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-1-canonical-seed';
import { seedBatchQuantBatch2CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-2-canonical-seed';
import { seedBatchQuantBatch3PracticeBank } from '../lib/benchmark/batch-quant-batch-3-practice-seed';
import { seedBatchQuantBatch4CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-4-canonical-seed';
import { seedBasicScienceMasterCanonicalKnowledge } from '../lib/benchmark/batch-science-master-canonical-seed';
import { seedBiotechCanonicalKnowledge } from '../lib/benchmark/batch-biotech-canonical-seed';
import { seedGeographyCanonicalKnowledge } from '../lib/benchmark/batch-geography-canonical-seed';
import { seedAgricultureCanonicalKnowledge } from '../lib/benchmark/batch-agriculture-canonical-seed';
import { seedAPFCIRCanonicalKnowledge } from '../lib/benchmark/batch-apfc-ir-canonical-seed';
import { seedPreviousYearQuestionsAndTraps } from '../lib/benchmark/batch-pyqs-and-traps-canonical-seed';

export async function main() {
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
  // Seed Government Schemes Batch 2: Health, Housing, Women/Child, Energy, Education, GatiShakti, AIF (8 concepts)
  await seedBatchGASchemesBatch2CanonicalKnowledge();
  // Seed Static GA Batch 2: Regulators, D-SIBs, SEBI F&O, Bima Trinity, UPS, NI Act, NRE/NRO, VB-G RAM G (8 concepts)
  await seedBatchStaticGABatch2CanonicalKnowledge();

  // Seed English Language & Descriptive Writing (Topics 57-62: 15 concepts)
  await seedBatchEnglishCanonicalKnowledge();
  // Seed English Language Batch 2: Grammar Foundations, Vocabulary, RC & Para-jumbles (Topics 63-65: 8 concepts)
  await seedBatchEnglishBatch2CanonicalKnowledge();

  // Seed Modernized Ancient Indian History Master (Topics 1-25: 65 concepts, 4 blocks, 8 exam mappings, 130+ questions)
  await seedAncientMasterCanonicalKnowledge();
  // Seed Modernized Medieval Indian History Master (Topics 1-8: 10 concepts, 4 blocks, 8 exam mappings, 20 questions)
  await seedMedievalMasterCanonicalKnowledge();
  // Seed Modernized Modern Indian History & National Movement Master (Topics 1-13: 21 concepts, 4 blocks, 8 exam mappings, 42 questions)
  await seedModernMasterCanonicalKnowledge();
  // Seed Indian Art, Heritage & Rajasthan History Master (Topics 1-5: 6 concepts, 4 blocks, 8 exam mappings, 12 questions)
  await seedArtCultureRajasthanMasterCanonicalKnowledge();
  // Seed World History & Modern Revolutions Master (Topics 1-9: 9 concepts, 4 blocks, 8 exam mappings, 18 questions)
  await seedWorldHistoryMasterCanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 1: Topics 80-84: 16 concepts)
  await seedBatchQuantBatch1CanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 2: Topics 85-89: 11 concepts)
  await seedBatchQuantBatch2CanonicalKnowledge();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 3: Practice & PYQ Consolidation Bank)
  await seedBatchQuantBatch3PracticeBank();

  // Seed Quantitative Aptitude & Data Interpretation (Batch 4: Geometry, Solids, Quadratics, Series, DS & Logic)
  await seedBatchQuantBatch4CanonicalKnowledge();

  // Seed Basic Science & Scientific Literacy Master (Part 1: Topics 1-6: 26 concepts)
  await seedBasicScienceMasterCanonicalKnowledge();

  // Seed Applied Science, Biotechnology & Emerging Tech (Topic 26: 5 concepts CON-SCI-116 to CON-SCI-120)
  await seedBiotechCanonicalKnowledge();

  // Seed Geography & Environment Master (Topics 1-5: 14 concepts CON-GEO-001 to CON-GEO-014)
  await seedGeographyCanonicalKnowledge();

  // Seed Agriculture & Rural Development Master (Topics 1-4: 12 concepts CON-ARD-001 to CON-ARD-012)
  await seedAgricultureCanonicalKnowledge();

  // Seed UPSC APFC, Industrial Relations, Social Security & Governance (Topics 1-5: 5 concepts CON-IRL-001 to CON-IRL-005)
  await seedAPFCIRCanonicalKnowledge();

  // Seed SBI PO Mains Quant & UPSC APFC PYQs & Rapid Revision Traps
  await seedPreviousYearQuestionsAndTraps();

  const count = await db.concept.count();
  console.log(`Successfully seeded ${count} canonical concepts.`);
  await db.$disconnect();
}

main().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
