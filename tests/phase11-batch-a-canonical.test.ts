import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchACanonicalKnowledge, BATCH_A_CONCEPTS } from '../lib/benchmark/batch-a-canonical-seed';
import { seedTopic9CanonicalKnowledge } from '../lib/benchmark/topic-9-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '../lib/benchmark/topic-10-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';
import { BATCH_A_SEMANTIC_UNITS } from '../lib/ingestion/batch-a-semantic-inventory';
import {
  getAllLibraryData,
  getTopicWithConcepts,
  getConceptWithFullContext,
  searchConcepts,
} from '../lib/knowledge/web-data';

describe('Phase 11: Indian Polity Batch A Canonical Knowledge Expansion', () => {
  beforeAll(async () => {
    // Clear DB
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

    // Seed Batch A + Existing Benchmarks
    await seedBatchACanonicalKnowledge();
    await seedTopic9CanonicalKnowledge();
    await seedTopic10CanonicalKnowledge();
    await seedInflationCanonicalKnowledge();
  }, 45000);

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify 100% semantic coverage accounting across Batch A (Topics 1 to 4)', () => {
    expect(BATCH_A_SEMANTIC_UNITS.length).toBe(37);
    const uninventoried = BATCH_A_SEMANTIC_UNITS.filter(
      (u) => u.status !== 'CANONICALIZED' && u.status !== 'VERIFIED' && u.status !== 'INVENTORIED'
    );
    expect(uninventoried.length).toBe(0);

    // Verify all 4 topics represented
    const topic1Units = BATCH_A_SEMANTIC_UNITS.filter((u) => u.topicNumber === 1);
    const topic2Units = BATCH_A_SEMANTIC_UNITS.filter((u) => u.topicNumber === 2);
    const topic3Units = BATCH_A_SEMANTIC_UNITS.filter((u) => u.topicNumber === 3);
    const topic4Units = BATCH_A_SEMANTIC_UNITS.filter((u) => u.topicNumber === 4);

    expect(topic1Units.length).toBeGreaterThanOrEqual(8);
    expect(topic2Units.length).toBeGreaterThanOrEqual(10);
    expect(topic3Units.length).toBeGreaterThanOrEqual(12);
    expect(topic4Units.length).toBeGreaterThanOrEqual(7);
  });

  it('2. should verify all 22 canonical concepts across Batch A are active and populated in DB', async () => {
    expect(BATCH_A_CONCEPTS.length).toBe(22);

    for (const cDef of BATCH_A_CONCEPTS) {
      const concept = await db.concept.findUnique({
        where: { id: cDef.id },
        include: {
          claims: true,
          contentBlocks: true,
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept).toBeDefined();
      expect(concept?.title).toBe(cDef.title);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(2);
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(2);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(3); // UPSC, RPSC, IIBF
      expect(concept?.revisionUnits.length).toBe(3); // 30s, 2m, 5m
      expect(concept?.questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('3. should verify Topic 1 (Basic Concepts of Polity) concepts and theoretical integrity', async () => {
    const topic1 = await getTopicWithConcepts('basic-concepts-of-polity');
    expect(topic1).toBeDefined();
    expect(topic1?.concepts.length).toBe(4);

    // Verify Saptanga Theory concept
    const saptangaConcept = topic1?.concepts.find((c) => c.slug.includes('saptanga'));
    expect(saptangaConcept).toBeDefined();
    expect(saptangaConcept?.shortDefinition).toContain('sovereign political-legal entity');

    // Verify Constitutionalism concept
    const constitutionalismConcept = topic1?.concepts.find((c) => c.slug.includes('constitutionalism'));
    expect(constitutionalismConcept).toBeDefined();
  });

  it('4. should verify Topic 2 (Constituent Assembly) concepts, borrowing matrix, and Rajasthan representation', async () => {
    const topic2 = await getTopicWithConcepts('constituent-assembly');
    expect(topic2).toBeDefined();
    expect(topic2?.concepts.length).toBe(6);

    // Verify Committees functional grouping (Correction 1)
    const committeeConcept = await getConceptWithFullContext('committees-of-constituent-assembly-and-drafting-committee');
    expect(committeeConcept).toBeDefined();
    const committeeText = committeeConcept?.contentBlocks.map((b) => b.body).join(' ');
    expect(committeeText).toContain('National Governance & Federal Architecture');
    expect(committeeText).toContain('State Governance, Rights & Minorities');
    expect(committeeText).toContain('Assembly Governance & Procedural Rules');
    expect(committeeText).toContain('Synthesis & Formal Drafting');

    // Verify Rajasthan representation concept
    const rajConcept = await getConceptWithFullContext('constituent-assembly-rajasthan-representation-criticisms');
    expect(rajConcept).toBeDefined();
    const rajText = rajConcept?.contentBlocks.map((b) => b.body).join(' ');
    expect(rajText).toContain('Balwant Singh Mehta');
    expect(rajText).toContain('Hiralal Shastri');
    expect(rajText).toContain('Mukut Bihari Lal Bhargava');

    // Verify Borrowing Matrix
    const borrowingConcept = await getConceptWithFullContext('sources-of-the-indian-constitution-borrowing-matrix');
    expect(borrowingConcept).toBeDefined();
    const borrowingText = borrowingConcept?.contentBlocks.map((b) => b.body).join(' ');
    expect(borrowingText).toContain('Government of India Act 1935');
    expect(borrowingText).toContain('Canada');
    expect(borrowingText).toContain('Australia');
    expect(borrowingText).toContain('Ireland');
  });

  it('5. should verify Topic 3 (Preamble) concepts, landmark cases, and 42nd Amendment integrity', async () => {
    const topic3 = await getTopicWithConcepts('preamble');
    expect(topic3).toBeDefined();
    expect(topic3?.concepts.length).toBe(4);

    // Verify Status and Amendability
    const statusConcept = await getConceptWithFullContext('status-justiciability-amendability-of-the-preamble');
    expect(statusConcept).toBeDefined();
    const statusText = statusConcept?.contentBlocks.map((b) => b.body).join(' ');
    expect(statusText).toContain('Berubari Union');
    expect(statusText).toContain('Kesavananda Bharati');
    expect(statusText).toContain('42nd Amendment');
    expect(statusText).toContain('non-justiciable');
  });

  it('6. should verify Topic 4 (Schedules) concepts, classical languages, and 10th Schedule judicial evolution', async () => {
    const topic4 = await getTopicWithConcepts('schedules-of-the-indian-constitution');
    expect(topic4).toBeDefined();
    expect(topic4?.concepts.length).toBe(8);

    // Verify 5th vs 6th Schedule institutional logic bridge (Correction 2)
    const schedule56Concept = await getConceptWithFullContext('schedules-5-and-6-scheduled-and-tribal-areas-administration');
    expect(schedule56Concept).toBeDefined();
    const schedule56Text = schedule56Concept?.contentBlocks.map((b) => b.body).join(' ');
    expect(schedule56Text).toContain('Different constitutional arrangements were designed for different tribal-administration contexts.');
    expect(schedule56Text).toContain('Tribes Advisory Council');
    expect(schedule56Text).toContain('Autonomous District Councils');

    // Verify 8th Schedule languages & misconception shield (Correction 3)
    const langConcept = await getConceptWithFullContext('8th-schedule-22-official-languages-classical-languages');
    expect(langConcept).toBeDefined();
    const langText = langConcept?.contentBlocks.map((b) => b.body).join(' ');
    expect(langText).toContain('21st Constitutional Amendment');
    expect(langText).toContain('Assamese');
    expect(langText).toContain('Pali');
    expect(langText).toContain('Prakrit');
    expect(langText).toContain('CLASSICAL LANGUAGE STATUS ≠ EIGHTH SCHEDULE STATUS');

    // Verify 10th Schedule Anti-Defection
    const defectionConcept = await getConceptWithFullContext('10th-schedule-anti-defection-law-exceptions-judicial-evolution');
    expect(defectionConcept).toBeDefined();
    const defectionText = defectionConcept?.contentBlocks.map((b) => b.body).join(' ');
    expect(defectionText).toContain('Kihoto Holohan');
    expect(defectionText).toContain('Keisham Meghchandra');
    expect(defectionText).toContain('two-thirds (2/3rd)');
  });

  it('7. should verify search indexing across all 48 canonical concepts', async () => {
    const saptangaResults = await searchConcepts('Saptanga');
    expect(saptangaResults.length).toBeGreaterThanOrEqual(1);

    const preambleResults = await searchConcepts('Preamble');
    expect(preambleResults.length).toBeGreaterThanOrEqual(1);

    const coelhoResults = await searchConcepts('Coelho');
    expect(coelhoResults.length).toBeGreaterThanOrEqual(1);

    const totalConcepts = await db.concept.count();
    expect(totalConcepts).toBe(48); // 22 (Batch A) + 16 (T9) + 5 (T10) + 5 (Inflation)
  });
});
