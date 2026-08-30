import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchAncientIndiaCanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-canonical-seed';
import { seedBatchAncientIndiaBatch2CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-2-canonical-seed';

describe('Ancient India Batch 2 Canonical Knowledge Verification', () => {
  beforeAll(async () => {
    await seedBatchAncientIndiaCanonicalKnowledge();
    await seedBatchAncientIndiaBatch2CanonicalKnowledge();
  });

  it('verifies that Subject "Ancient Indian History" possesses all 8 Topics (Topics 63 to 70)', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'ancient-indian-history' },
      include: {
        topics: {
          orderBy: { order: 'asc' },
        },
      },
    });
    expect(subject).toBeDefined();
    expect(subject?.topics.length).toBeGreaterThanOrEqual(8);

    const topicSlugs = subject?.topics.map((t) => t.slug);
    const expectedSlugs = [
      'prehistory-and-early-human-cultures',
      'indus-valley-civilisation',
      'vedic-period-and-transformation',
      'mahajanapadas-and-second-urbanisation',
      'rise-of-magadha',
      'buddhism-philosophy-and-spread',
      'jainism-philosophy-and-tradition',
      'buddhism-vs-jainism-comparative-synthesis',
    ];
    for (const slug of expectedSlugs) {
      expect(topicSlugs).toContain(slug);
    }
  });

  it('verifies all 11 Batch 2 canonical concepts exist with complete content blocks, claims, and questions', async () => {
    const conceptIds = [
      'CON-HIST-10',
      'CON-HIST-11',
      'CON-HIST-12',
      'CON-HIST-13',
      'CON-HIST-14',
      'CON-HIST-15',
      'CON-HIST-16',
      'CON-HIST-17',
      'CON-HIST-18',
      'CON-HIST-19',
      'CON-HIST-20',
    ];

    const concepts = await db.concept.findMany({
      where: {
        id: { in: conceptIds },
      },
      include: {
        contentBlocks: true,
        claims: { include: { evidence: true } },
        examMappings: true,
        revisionUnits: true,
        questions: true,
      },
    });

    expect(concepts.length).toBe(11);

    for (const c of concepts) {
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(c.claims.length).toBeGreaterThanOrEqual(1);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(1);
      expect(c.revisionUnits.length).toBeGreaterThanOrEqual(1);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);

      // Verify bodies are comprehensive
      for (const block of c.contentBlocks) {
        expect(block.body.length).toBeGreaterThan(100);
      }
    }
  });

  it('verifies landmark factual claims across Mahajanapadas, Magadha, Buddhism, and Jainism', async () => {
    // 1. Mahajanapadas
    const mahajanapadaClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-11-01' },
      include: { evidence: true },
    });
    expect(mahajanapadaClaim).toBeDefined();
    expect(mahajanapadaClaim?.statement).toContain('Anguttara Nikaya');

    // 2. Magadha
    const magadhaClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-12-01' },
      include: { evidence: true },
    });
    expect(magadhaClaim).toBeDefined();
    expect(magadhaClaim?.statement).toContain('iron ore');

    // 3. Buddhism
    const buddhaClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-14-01' },
      include: { evidence: true },
    });
    expect(buddhaClaim).toBeDefined();
    expect(buddhaClaim?.statement).toContain('Lumbini');

    // 4. Jainism
    const jainClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-18-01' },
      include: { evidence: true },
    });
    expect(jainClaim).toBeDefined();
    expect(jainClaim?.statement).toContain('Anekantavada');
  });
});
