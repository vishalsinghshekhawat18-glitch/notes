import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { ALL_IIBF_MASTER_CONCEPTS, seedIIBFMasterCanonicalKnowledge } from '../lib/benchmark/batch-iibf-master-canonical-seed';

describe('Phase IIBF & Banking Regulations Migration Audit', () => {
  beforeAll(async () => {
    await seedIIBFMasterCanonicalKnowledge();
  });

  it('should verify total 80 canonical concepts across the modernized master corpus', () => {
    expect(ALL_IIBF_MASTER_CONCEPTS.length).toBe(80);
  });

  it('should verify every concept contains 4 standardized blocks, 8 exam mappings, 3 revision speeds, and practice questions', () => {
    for (const c of ALL_IIBF_MASTER_CONCEPTS) {
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      expect(c.contentBlocks.length).toBe(4);
      expect(c.examMappings.length).toBe(8);
      expect(c.revisionUnits.length).toBe(3);
      expect(c.questions.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('should verify database contains all 80 active IIBF concepts across 25 topics', async () => {
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
    expect(subject?.topics.length).toBe(25);

    const dbConceptCount = subject?.topics.reduce(
      (sum, t) => sum + t.concepts.length,
      0
    );
    expect(dbConceptCount).toBe(80);
  });
});
