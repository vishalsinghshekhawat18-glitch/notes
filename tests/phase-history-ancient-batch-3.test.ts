import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchAncientIndiaCanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-canonical-seed';
import { seedBatchAncientIndiaBatch2CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-2-canonical-seed';
import { seedBatchAncientIndiaBatch3CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-3-canonical-seed';

describe('Ancient India Batch 3 (Mauryan Empire & Ashoka) Canonical Verification', () => {
  beforeAll(async () => {
    await seedBatchAncientIndiaCanonicalKnowledge();
    await seedBatchAncientIndiaBatch2CanonicalKnowledge();
    await seedBatchAncientIndiaBatch3CanonicalKnowledge();
  });

  it('verifies that Subject "Ancient Indian History" now possesses all 12 Topics (Topics 63 to 74)', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'ancient-indian-history' },
      include: {
        topics: {
          orderBy: { order: 'asc' },
        },
      },
    });
    expect(subject).toBeDefined();
    expect(subject?.topics.length).toBeGreaterThanOrEqual(12);

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
      'mauryan-sources-and-imperial-foundation',
      'mauryan-administration-and-economy',
      'ashoka-inscriptions-and-dhamma',
      'ashokan-state-decline-and-legacy',
    ];
    for (const slug of expectedSlugs) {
      expect(topicSlugs).toContain(slug);
    }
  });

  it('verifies all 9 Batch 3 canonical concepts exist with complete content blocks, claims, and questions', async () => {
    const conceptIds = [
      'CON-HIST-21',
      'CON-HIST-22',
      'CON-HIST-23',
      'CON-HIST-24',
      'CON-HIST-25',
      'CON-HIST-26',
      'CON-HIST-27',
      'CON-HIST-28',
      'CON-HIST-29',
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

    expect(concepts.length).toBe(9);

    for (const c of concepts) {
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(c.claims.length).toBeGreaterThanOrEqual(1);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(1);
      expect(c.revisionUnits.length).toBeGreaterThanOrEqual(1);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);

      // Verify bodies are rich
      for (const block of c.contentBlocks) {
        expect(block.body.length).toBeGreaterThan(100);
      }
    }
  });

  it('verifies landmark factual claims across Mauryan Sources, Seleucid Treaty, Administration, Kalinga, and Dhamma', async () => {
    // 1. Sources & Seleucid Treaty
    const seleucidClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-22-01' },
      include: { evidence: true },
    });
    expect(seleucidClaim).toBeDefined();
    expect(seleucidClaim?.statement).toContain('Seleucus I Nicator');
    expect(seleucidClaim?.statement).toContain('500 war elephants');

    // 2. Administration
    const adminClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-24-01' },
      include: { evidence: true },
    });
    expect(adminClaim).toBeDefined();
    expect(adminClaim?.statement).toContain('Samaharta');
    expect(adminClaim?.statement).toContain('Rajukas');

    // 3. Kalinga War
    const kalingaClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-26-01' },
      include: { evidence: true },
    });
    expect(kalingaClaim).toBeDefined();
    expect(kalingaClaim?.statement).toContain('Major Rock Edict XIII');
    expect(kalingaClaim?.statement).toContain('Bherighosha');

    // 4. Dhamma & Religious Harmony
    const dhammaClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-27-01' },
      include: { evidence: true },
    });
    expect(dhammaClaim).toBeDefined();
    expect(dhammaClaim?.statement).toContain('Major Rock Edict XII');
    expect(dhammaClaim?.statement).toContain('Samavaya');

    // 5. Inscriptions Decipherment
    const prinsepClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-28-01' },
      include: { evidence: true },
    });
    expect(prinsepClaim).toBeDefined();
    expect(prinsepClaim?.statement).toContain('James Prinsep');
    expect(prinsepClaim?.statement).toContain('1837');
  });
});
