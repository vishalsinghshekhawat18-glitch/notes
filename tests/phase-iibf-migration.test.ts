import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { IIBF_SEMANTIC_INVENTORY } from '../lib/ingestion/iibf-semantic-inventory';
import { BATCH_B1_IIBF_CONCEPTS, seedBatchB1IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b1-iibf-canonical-seed';
import { BATCH_B2_IIBF_CONCEPTS, seedBatchB2IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b2-iibf-canonical-seed';
import { BATCH_B3_IIBF_CONCEPTS, seedBatchB3IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b3-iibf-canonical-seed';

describe('Phase IIBF & Banking Regulations Migration Audit', () => {
  beforeAll(async () => {
    await seedBatchB1IIBFCanonicalKnowledge();
    await seedBatchB2IIBFCanonicalKnowledge();
    await seedBatchB3IIBFCanonicalKnowledge();
  });

  it('should verify all semantic inventory units map into canonical concepts', () => {
    expect(IIBF_SEMANTIC_INVENTORY.length).toBe(52);
    const coveredConcepts = new Set(IIBF_SEMANTIC_INVENTORY.map((u) => u.targetConceptId));
    expect(coveredConcepts.size).toBe(51);
  });

  it('should verify total 51 canonical concepts across Batch B1, B2, and B3', () => {
    const totalConcepts =
      BATCH_B1_IIBF_CONCEPTS.length +
      BATCH_B2_IIBF_CONCEPTS.length +
      BATCH_B3_IIBF_CONCEPTS.length;
    expect(totalConcepts).toBe(51);
    expect(BATCH_B1_IIBF_CONCEPTS.length).toBe(16);
    expect(BATCH_B2_IIBF_CONCEPTS.length).toBe(16);
    expect(BATCH_B3_IIBF_CONCEPTS.length).toBe(19);
  });

  it('should verify every concept contains claims, content blocks, and exam mappings', () => {
    const allConcepts = [
      ...BATCH_B1_IIBF_CONCEPTS,
      ...BATCH_B2_IIBF_CONCEPTS,
      ...BATCH_B3_IIBF_CONCEPTS,
    ];

    for (const c of allConcepts) {
      expect(c.claims.length).toBeGreaterThanOrEqual(2);
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(1);
      expect(c.revisionUnits.length).toBeGreaterThanOrEqual(1);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('should verify database contains all 51 active IIBF concepts across 14 topics', async () => {
    const subject = await db.subject.findFirst({
      where: { slug: 'iibf-banking-regulations' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(subject).not.toBeNull();
    if (!subject) return;

    expect(subject.topics.length).toBeGreaterThanOrEqual(14);
    const totalDbConcepts = subject.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalDbConcepts).toBeGreaterThanOrEqual(51);
  });
});
