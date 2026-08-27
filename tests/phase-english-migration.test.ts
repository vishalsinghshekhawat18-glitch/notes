import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { ENGLISH_CANONICAL_CONCEPTS, seedBatchEnglishCanonicalKnowledge } from '../lib/benchmark/batch-english-canonical-seed';
import { ENGLISH_SOURCE_INVENTORY_LEDGER } from '../lib/ingestion/english-descriptive-inventory';

describe('Phase: English Language & Descriptive Writing Canonical Migration', () => {
  beforeAll(async () => {
    await seedBatchEnglishCanonicalKnowledge();
  });
  it('should verify Subject 6 (english-descriptive-writing) is registered with proper metadata', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'english-descriptive-writing' },
      include: {
        domain: true,
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(subject).not.toBeNull();
    expect(subject?.name).toBe('English Language & Descriptive Writing');
    expect(subject?.order).toBe(6);
    expect(subject?.domain.slug).toBe('english-language-communication');
    expect(subject?.topics.length).toBe(6);

    const totalConcepts = subject?.topics.reduce(
      (acc, topic) => acc + topic.concepts.length,
      0
    );
    expect(totalConcepts).toBe(15);
  });

  it('should verify all 6 English topics are active and in sequence', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'english-descriptive-writing' },
    });
    expect(subject).not.toBeNull();

    const topics = await db.topic.findMany({
      where: { subjectId: subject!.id },
      orderBy: { order: 'asc' },
    });

    expect(topics.length).toBe(6);

    const expectedTopics = [
      { slug: 'discourse-and-syntax-foundations', order: 57 },
      { slug: 'essay-writing-and-argumentation', order: 58 },
      { slug: 'precis-writing-and-synthesis', order: 59 },
      { slug: 'professional-correspondence-and-workplace-writing', order: 60 },
      { slug: 'model-exemplars-and-deconstructions', order: 61 },
      { slug: 'active-practice-and-exam-strategy', order: 62 },
    ];

    for (let i = 0; i < expectedTopics.length; i++) {
      expect(topics[i].slug).toBe(expectedTopics[i].slug);
      expect(topics[i].order).toBe(expectedTopics[i].order);
    }
  });

  it('should verify all 15 English canonical concepts have rich content blocks, claims, and exam mappings', async () => {
    for (const cDef of ENGLISH_CANONICAL_CONCEPTS) {
      const concept = await db.concept.findUnique({
        where: { id: cDef.id },
        include: {
          contentBlocks: true,
          claims: {
            include: { evidence: true },
          },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Concept ${cDef.id} must exist`).not.toBeNull();
      expect(concept?.slug).toBe(cDef.slug);
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(1);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(2);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(1);

      // Verify evidence provenance is linked
      for (const claim of concept!.claims) {
        expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
        expect(claim.evidence[0].sourceId).toBe('SRC-ENG-DESCRIPTIVE-MASTER-2026');
      }
    }
  });

  it('should enforce the Zero Unaccounted-For Source Omission principle on all 20 master notes', () => {
    expect(ENGLISH_SOURCE_INVENTORY_LEDGER.length).toBe(20);

    const migratedOrConsolidated = ENGLISH_SOURCE_INVENTORY_LEDGER.filter(
      (u) => u.status === 'MIGRATED' || u.status === 'CONSOLIDATED'
    );
    const excludedFiller = ENGLISH_SOURCE_INVENTORY_LEDGER.filter(
      (u) => u.status === 'EXCLUDED_FILLER'
    );

    // 19 notes migrated/consolidated, 1 objective para-jumble filler note excluded
    expect(migratedOrConsolidated.length).toBe(19);
    expect(excludedFiller.length).toBe(1);
  });
});
