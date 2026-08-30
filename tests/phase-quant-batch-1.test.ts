import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchQuantBatch1CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-1-canonical-seed';

describe('Quantitative Aptitude & Data Interpretation (Batch 1: Topics 80–84) Canonical Verification', () => {
  beforeAll(async () => {
    await seedBatchQuantBatch1CanonicalKnowledge();
  });

  it('verifies that Subject "Quantitative Aptitude & Data Interpretation" exists and contains 5 Topics (Topics 80 to 84)', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'quantitative-aptitude-and-data-interpretation' },
      include: {
        topics: {
          orderBy: { order: 'asc' },
        },
      },
    });
    expect(subject).toBeDefined();
    expect(subject?.topics.length).toBeGreaterThanOrEqual(5);

    const topicSlugs = subject?.topics.map((t) => t.slug);
    const expectedSlugs = [
      'calculation-speed-simplification-and-algebra',
      'number-system-series-and-modern-mathematics',
      'arithmetic-and-financial-mathematics',
      'mensuration-and-geometric-invariants',
      'data-interpretation-data-sufficiency-and-mains',
    ];
    for (const slug of expectedSlugs) {
      expect(topicSlugs).toContain(slug);
    }
  });

  it('verifies all 16 Batch 1 canonical concepts exist with complete content blocks, claims, and practice questions', async () => {
    const conceptIds = [
      'CON-QUANT-01',
      'CON-QUANT-02',
      'CON-QUANT-03',
      'CON-QUANT-04',
      'CON-QUANT-05',
      'CON-QUANT-06',
      'CON-QUANT-07',
      'CON-QUANT-08',
      'CON-QUANT-09',
      'CON-QUANT-10',
      'CON-QUANT-11',
      'CON-QUANT-12',
      'CON-QUANT-13',
      'CON-QUANT-14',
      'CON-QUANT-15',
      'CON-QUANT-16',
    ];

    for (const cid of conceptIds) {
      const concept = await db.concept.findUnique({
        where: { id: cid },
        include: {
          contentBlocks: true,
          claims: {
            include: {
              evidence: true,
            },
          },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept).toBeDefined();
      expect(concept?.status).toBe('CANONICAL');
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(1);
      expect(concept?.claims[0].evidence.length).toBeGreaterThanOrEqual(1);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(1);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(1);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('verifies exact mathematical solutions for high-risk problem families in Batch 1', async () => {
    // 1. Inradius of right triangle 15, 20
    const inradiusConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-12' },
      include: { questions: true },
    });
    expect(inradiusConcept?.questions[0].correctAnswer).toBe('5 cm');

    // 2. CI-SI 2-year difference P determination
    const cisiConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-08' },
      include: { questions: true },
    });
    expect(cisiConcept?.questions[0].correctAnswer).toBe('₹10,000');

    // 3. Successive Dilution 80L pure milk, 8L replaced twice
    const dilutionConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-09' },
      include: { questions: true },
    });
    expect(dilutionConcept?.questions[0].correctAnswer).toBe('64.8 litres');

    // 4. Circular Track distinct meeting points
    const trackConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-11' },
      include: { questions: true },
    });
    expect(trackConcept?.questions[0].correctAnswer).toBe('8 points');

    // 5. BANANA permutation arrangements
    const bananaConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-05' },
      include: { questions: true },
    });
    expect(bananaConcept?.questions[0].correctAnswer).toBe('60');

    // 6. NPA recovery caselet ratio
    const npaConcept = await db.concept.findUnique({
      where: { id: 'CON-QUANT-15' },
      include: { questions: true },
    });
    expect(npaConcept?.questions[0].correctAnswer).toBe('37:100');
  });

  it('verifies total database count reflects at least 16 canonical concepts', async () => {
    const count = await db.concept.count();
    expect(count).toBeGreaterThanOrEqual(16);
  });
});
