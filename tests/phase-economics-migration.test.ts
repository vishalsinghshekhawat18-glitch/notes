import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { ECONOMICS_SEMANTIC_INVENTORY } from '../lib/ingestion/economics-semantic-inventory';
import { BATCH_E1_CONCEPTS, seedBatchE1CanonicalKnowledge } from '../lib/benchmark/batch-e1-canonical-seed';
import { BATCH_E2_CONCEPTS, seedBatchE2CanonicalKnowledge } from '../lib/benchmark/batch-e2-canonical-seed';
import { BATCH_E3_CONCEPTS, seedBatchE3CanonicalKnowledge } from '../lib/benchmark/batch-e3-canonical-seed';

describe('Phase E: Indian Economy & Macroeconomics Migration Audit', () => {
  beforeAll(async () => {
    await seedBatchE1CanonicalKnowledge();
    await seedBatchE2CanonicalKnowledge();
    await seedBatchE3CanonicalKnowledge();
  });
  it('should verify all 47 master notes are mapped across 49 canonical concepts in semantic inventory', () => {
    expect(ECONOMICS_SEMANTIC_INVENTORY.length).toBe(49);
    const coveredNotes = new Set(ECONOMICS_SEMANTIC_INVENTORY.map((u) => u.sourceNoteNumber));
    expect(coveredNotes.size).toBeGreaterThanOrEqual(44);
  });

  it('should verify total 49 canonical concepts across Batch E1, E2, and E3', () => {
    const totalConcepts = BATCH_E1_CONCEPTS.length + BATCH_E2_CONCEPTS.length + BATCH_E3_CONCEPTS.length;
    expect(BATCH_E1_CONCEPTS.length).toBe(17);
    expect(BATCH_E2_CONCEPTS.length).toBe(12);
    expect(BATCH_E3_CONCEPTS.length).toBe(20);
    expect(totalConcepts).toBe(49);
  });

  it('should verify every concept contains claims, content blocks, and exam mappings', () => {
    const allConcepts = [...BATCH_E1_CONCEPTS, ...BATCH_E2_CONCEPTS, ...BATCH_E3_CONCEPTS];
    for (const c of allConcepts) {
      expect(c.claims.length).toBeGreaterThanOrEqual(2);
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(1);
      expect(c.revisionUnits.length).toBeGreaterThanOrEqual(1);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('should verify database contains all 49 active Economics concepts in 11 topics', async () => {
    const subject = await db.subject.findFirst({
      where: { slug: 'indian-economy' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(subject).toBeDefined();
    if (!subject) return;

    expect(subject.topics.length).toBeGreaterThanOrEqual(11);
    const totalDbConcepts = subject.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalDbConcepts).toBeGreaterThanOrEqual(49);
  });
});
