import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchAncientIndiaCanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-canonical-seed';

describe('Ancient India Batch 1 Canonical Knowledge Verification', () => {
  beforeAll(async () => {
    await seedBatchAncientIndiaCanonicalKnowledge();
  });

  it('verifies that Domain "Indian & World History" and Subject "Ancient Indian History" exist and are active', async () => {
    const domain = await db.domain.findUnique({
      where: { slug: 'indian-and-world-history' },
      include: { subjects: true },
    });
    expect(domain).toBeDefined();
    expect(domain?.status).toBe('ACTIVE');

    const subject = await db.subject.findUnique({
      where: { slug: 'ancient-indian-history' },
      include: { topics: true },
    });
    expect(subject).toBeDefined();
    expect(subject?.status).toBe('ACTIVE');
    expect(subject?.topics.length).toBeGreaterThanOrEqual(3);
  });

  it('verifies Topics for Batch 1 are registered with correct ordering', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'ancient-indian-history' },
      include: {
        topics: {
          orderBy: { order: 'asc' },
        },
      },
    });

    const topicSlugs = subject?.topics.map((t) => t.slug);
    expect(topicSlugs).toContain('prehistory-and-early-human-cultures');
    expect(topicSlugs).toContain('indus-valley-civilisation');
    expect(topicSlugs).toContain('vedic-period-and-transformation');
  });

  it('verifies all 9 canonical concepts exist with complete content blocks and claims', async () => {
    const concepts = await db.concept.findMany({
      where: {
        id: {
          in: [
            'CON-HIST-01',
            'CON-HIST-02',
            'CON-HIST-03',
            'CON-HIST-04',
            'CON-HIST-05',
            'CON-HIST-06',
            'CON-HIST-07',
            'CON-HIST-08',
            'CON-HIST-09',
          ],
        },
      },
      include: {
        contentBlocks: true,
        claims: { include: { evidence: true } },
        examMappings: true,
        revisionUnits: true,
        questions: true,
      },
    });

    expect(concepts.length).toBe(9);

    for (const c of concepts) {
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(c.claims.length).toBeGreaterThanOrEqual(1);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(1);
      expect(c.revisionUnits.length).toBeGreaterThanOrEqual(1);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);

      // Verify no empty bodies
      for (const block of c.contentBlocks) {
        expect(block.body.length).toBeGreaterThan(100);
      }
    }
  });

  it('verifies key archaeological and textual historical claims are verified and canonical', async () => {
    const hathnoraClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-01-01' },
      include: { evidence: true },
    });
    expect(hathnoraClaim).toBeDefined();
    expect(hathnoraClaim?.statement).toContain('Hathnora');
    expect(hathnoraClaim?.epistemicLevel).toBe('ESTABLISHED');

    const pashupatiClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-04-01' },
      include: { evidence: true },
    });
    expect(pashupatiClaim).toBeDefined();
    expect(pashupatiClaim?.statement).toContain('Pashupati');

    const upanishadClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-08-01' },
      include: { evidence: true },
    });
    expect(upanishadClaim).toBeDefined();
    expect(upanishadClaim?.statement).toContain('Satyameva Jayate');
  });
});
