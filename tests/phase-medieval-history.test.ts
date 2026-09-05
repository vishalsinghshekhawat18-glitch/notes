import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedMedievalMasterCanonicalKnowledge } from '../lib/benchmark/batch-medieval-history-canonical-seed';

describe('Phase C1: Medieval Indian History & Islamic Polities Certification Suite', () => {
  beforeAll(async () => {
    await seedMedievalMasterCanonicalKnowledge();
  });

  it('1. should verify all 10 Medieval History canonical concepts satisfy the 4-layer architecture', async () => {
    const medievalSlugs = [
      'early-medieval-tripartite-struggle-and-chola-village-autonomy',
      'delhi-sultanate-dynastic-succession-balban-kingship-and-iqta-system',
      'alauddin-khalji-market-reforms-and-muhammad-bin-tughlaq-experiments',
      'vijayanagara-empire-dynasties-krishnadevaraya-and-amaranayaka-system',
      'the-bahmani-kingdom-and-the-five-deccan-sultanates',
      'bhakti-and-sufi-movements-saguna-nirguna-and-silsila-traditions',
      'mughal-empire-mansabdari-system-jagirdari-and-todar-mal-zabt-dahsala',
      'mughal-statecraft-rajput-policy-ibadat-khana-and-sulh-i-kul',
      'indo-islamic-architectural-evolution-trabeate-to-arcuate-and-mughal-monuments',
      'foreign-travellers-and-medieval-historiography-albiruni-ibn-battuta-bernier',
    ];

    for (const slug of medievalSlugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Concept ${slug} must exist in DB`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);

      // Verify content block types
      const blockTypes = concept?.contentBlocks.map((b) => b.type);
      expect(blockTypes).toContain('INTUITION');
      expect(blockTypes).toContain('CORE_IDEA');
      expect(blockTypes).toContain('MECHANISM');
      expect(blockTypes).toContain('EXAM_APPLICATION');

      // Verify revision speeds
      const revTypes = concept?.revisionUnits.map((r) => r.type);
      expect(revTypes).toContain('FLASH_30S');
      expect(revTypes).toContain('SUMMARY_2M');
      expect(revTypes).toContain('ARCHITECTURE_5M');

      // Verify claims & evidence provenance
      for (const claim of concept?.claims || []) {
        expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
        expect(claim.evidence[0].locator).toBeTruthy();
        expect(claim.evidence[0].excerpt).toBeTruthy();
      }
    }
  });

  it('2. should verify Medieval subject and topics are correctly linked', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'medieval-indian-history' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(subject).toBeDefined();
    expect(subject?.topics.length).toBe(8);

    const totalConcepts = subject?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBe(10);
  });
});
