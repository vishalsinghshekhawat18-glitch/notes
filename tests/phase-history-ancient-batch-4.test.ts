import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchAncientIndiaCanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-canonical-seed';
import { seedBatchAncientIndiaBatch2CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-2-canonical-seed';
import { seedBatchAncientIndiaBatch3CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-3-canonical-seed';
import { seedBatchAncientIndiaBatch4CanonicalKnowledge } from '../lib/benchmark/batch-ancient-india-batch-4-canonical-seed';

describe('Ancient India Batch 4 (Post-Mauryan to Sangam Age) Canonical Verification', () => {
  beforeAll(async () => {
    await seedBatchAncientIndiaCanonicalKnowledge();
    await seedBatchAncientIndiaBatch2CanonicalKnowledge();
    await seedBatchAncientIndiaBatch3CanonicalKnowledge();
    await seedBatchAncientIndiaBatch4CanonicalKnowledge();
  });

  it('verifies that Subject "Ancient Indian History" possesses all 17 Topics (Topics 63 to 79)', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'ancient-indian-history' },
      include: {
        topics: {
          orderBy: { order: 'asc' },
        },
      },
    });
    expect(subject).toBeDefined();
    expect(subject?.topics.length).toBe(17);

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
      'indo-greeks-and-post-mauryan-transformations',
      'shakas-and-western-kshatrapas',
      'the-kushana-empire',
      'satavahanas-and-the-deccan',
      'sangam-age-and-early-tamilakam',
    ];
    expect(topicSlugs).toEqual(expectedSlugs);
  });

  it('verifies all 14 Batch 4 canonical concepts exist with complete content blocks, claims, and questions', async () => {
    const conceptIds = [
      'CON-HIST-30',
      'CON-HIST-31',
      'CON-HIST-32',
      'CON-HIST-33',
      'CON-HIST-34',
      'CON-HIST-35',
      'CON-HIST-36',
      'CON-HIST-37',
      'CON-HIST-38',
      'CON-HIST-39',
      'CON-HIST-40',
      'CON-HIST-41',
      'CON-HIST-42',
      'CON-HIST-43',
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

    expect(concepts.length).toBe(14);

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

  it('verifies landmark factual claims across Shungas, Indo-Greeks, Western Kshatrapas, Kushanas, Satavahanas, and Sangam Age', async () => {
    // 1. Shunga Ayodhya Inscription
    const shungaClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-30-01' },
      include: { evidence: true },
    });
    expect(shungaClaim).toBeDefined();
    expect(shungaClaim?.statement).toContain('Pushyamitra Shunga');
    expect(shungaClaim?.statement).toContain('two Ashvamedha');

    // 2. Besnagar Heliodorus Inscription
    const heliodorusClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-32-01' },
      include: { evidence: true },
    });
    expect(heliodorusClaim).toBeDefined();
    expect(heliodorusClaim?.statement).toContain('Heliodorus');
    expect(heliodorusClaim?.statement).toContain('Devadeva Vasudeva');

    // 3. Junagadh Sanskrit Inscription
    const junagadhClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-34-01' },
      include: { evidence: true },
    });
    expect(junagadhClaim).toBeDefined();
    expect(junagadhClaim?.statement).toContain('Rudradaman I');
    expect(junagadhClaim?.statement).toContain('150 CE');
    expect(junagadhClaim?.statement).toContain('Sudarshana Lake');

    // 4. Rabatak & Kushanas
    const rabatakClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-35-01' },
      include: { evidence: true },
    });
    expect(rabatakClaim).toBeDefined();
    expect(rabatakClaim?.statement).toContain('Kujula Kadphises');
    expect(rabatakClaim?.statement).toContain('Purushapura');

    // 5. Satavahana Nasik Inscription
    const satavahanaClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-39-01' },
      include: { evidence: true },
    });
    expect(satavahanaClaim).toBeDefined();
    expect(satavahanaClaim?.statement).toContain('Gautamiputra Satakarni');
    expect(satavahanaClaim?.statement).toContain('Ekabrahmana');

    // 6. Sangam Indo-Roman Trade
    const sangamClaim = await db.claim.findUnique({
      where: { id: 'CLM-HIST-43-01' },
      include: { evidence: true },
    });
    expect(sangamClaim).toBeDefined();
    expect(sangamClaim?.statement).toContain('Yavanapriya');
    expect(sangamClaim?.statement).toContain('Muziris');
    expect(sangamClaim?.statement).toContain('Arikamedu');
  });
});
