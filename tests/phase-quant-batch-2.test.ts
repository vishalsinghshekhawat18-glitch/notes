import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchQuantBatch1CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-1-canonical-seed';
import { seedBatchQuantBatch2CanonicalKnowledge, QUANT_BATCH_2_CONCEPTS } from '../lib/benchmark/batch-quant-batch-2-canonical-seed';

describe('Quantitative Aptitude & Data Interpretation (Batch 2: Topics 85–89) Canonical Verification', () => {
  beforeAll(async () => {
    // Ensure Batch 1 is seeded first to test proper extension
    await seedBatchQuantBatch1CanonicalKnowledge();
    await seedBatchQuantBatch2CanonicalKnowledge();
  }, 30000);

  it('verifies that Subject "Quantitative Aptitude & Data Interpretation" contains 10 Topics (Topics 80 to 89)', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'quantitative-aptitude-and-data-interpretation' },
      include: {
        topics: {
          orderBy: { order: 'asc' },
        },
      },
    });

    expect(subject).toBeDefined();
    expect(subject?.name).toBe('Quantitative Aptitude & Data Interpretation');
    expect(subject?.topics.length).toBe(10);

    const topicSlugs = subject?.topics.map((t) => t.slug);
    expect(topicSlugs).toContain('calculation-speed-simplification-and-algebra');
    expect(topicSlugs).toContain('number-system-series-and-modern-mathematics');
    expect(topicSlugs).toContain('arithmetic-and-financial-mathematics');
    expect(topicSlugs).toContain('mensuration-and-geometric-invariants');
    expect(topicSlugs).toContain('data-interpretation-data-sufficiency-and-mains');
    // Batch 2 topics:
    expect(topicSlugs).toContain('advanced-arithmetic-time-work-and-efficiency');
    expect(topicSlugs).toContain('advanced-time-speed-and-distance');
    expect(topicSlugs).toContain('advanced-commercial-arithmetic');
    expect(topicSlugs).toContain('advanced-ratio-average-mixture-and-alligation');
    expect(topicSlugs).toContain('advanced-data-interpretation');
  });

  it('verifies all 11 Batch 2 canonical concepts (CON-QUANT-17 to CON-QUANT-27) exist with complete content blocks, claims, and practice questions', async () => {
    const batch2ConceptIds = QUANT_BATCH_2_CONCEPTS.map((c) => c.id);
    expect(batch2ConceptIds.length).toBe(11);

    for (const conceptId of batch2ConceptIds) {
      const concept = await db.concept.findUnique({
        where: { id: conceptId },
        include: {
          contentBlocks: true,
          claims: {
            include: { evidence: true },
          },
          questions: true,
          revisionUnits: true,
          examMappings: true,
        },
      });

      expect(concept).toBeDefined();
      expect(concept?.status).toBe('CANONICAL');
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(1);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(1);

      // Verify zero empty solutions or derivations
      for (const q of concept!.questions) {
        expect(q.correctAnswer.trim().length).toBeGreaterThan(0);
        expect(q.explanation.trim().length).toBeGreaterThan(10);
        expect(q.trapExplanation?.trim().length).toBeGreaterThan(10);
      }
    }
  });

  it('verifies mathematical solutions and PYQ provenance fields in Batch 2', async () => {
    // 1. CON-QUANT-17 (Rotating 3-agent alternate days)
    const workConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-17' },
      include: { questions: true },
    });
    expect(workConcept?.questions[0].correctAnswer).toBe('15 days, ₹1,500');
    expect(workConcept?.questions[0].isPYQ).toBe(true);
    expect(workConcept?.questions[0].pyqPaper).toBe('SBI PO Mains Memory-Based');

    // 2. CON-QUANT-18 (Alternate hour leak threshold)
    const pipeConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-18' },
      include: { questions: true },
    });
    expect(pipeConcept?.questions[0].correctAnswer).toBe('55 hours');
    expect(pipeConcept?.questions[0].isPYQ).toBe(true);

    // 3. CON-QUANT-19 (Post-meeting speed ratio theorem)
    const kinematicsConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-19' },
      include: { questions: true },
    });
    expect(kinematicsConcept?.questions[0].correctAnswer).toBe('40 km/h');

    // 4. CON-QUANT-20 (Moving escalator harmonic step count)
    const escalatorConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-20' },
      include: { questions: true },
    });
    expect(escalatorConcept?.questions[0].correctAnswer).toBe('45 steps');

    // 5. CON-QUANT-21 (Dual false weight cheating)
    const commercialConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-21' },
      include: { questions: true },
    });
    expect(commercialConcept?.questions[0].correctAnswer).toBe('32%');

    // 6. CON-QUANT-22 (CI Loan installment)
    const installmentConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-22' },
      include: { questions: true },
    });
    expect(installmentConcept?.questions[0].correctAnswer).toBe('₹12,100');

    // 7. CON-QUANT-24 (3-vessel unequal capacity mixture)
    const mixtureConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-24' },
      include: { questions: true },
    });
    expect(mixtureConcept?.questions[0].correctAnswer).toBe('151:59');

    // 8. CON-QUANT-26 (3-circle Venn diagram caselet)
    const vennConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-26' },
      include: { questions: true },
    });
    expect(vennConcept?.questions[0].correctAnswer).toBe('90');
  });

  it('verifies that Batch 1 and Batch 2 total 27 canonical Quant concepts', async () => {
    const quantSubject = await db.subject.findUnique({
      where: { slug: 'quantitative-aptitude-and-data-interpretation' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    const totalQuantConcepts = quantSubject?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalQuantConcepts).toBe(27);
  });
});
