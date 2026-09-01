import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { BATCH_POLITY_GAP_CONCEPTS, seedPolityGapCanonicalKnowledge } from '../lib/benchmark/batch-polity-gap-canonical-seed';

describe('Indian Polity Gap Closure Canonical Knowledge & Exam Readiness', () => {
  beforeAll(async () => {
    await seedPolityGapCanonicalKnowledge();
  }, 60000);

  it('should have exactly 8 gap-closure concepts defined', () => {
    expect(BATCH_POLITY_GAP_CONCEPTS).toHaveLength(8);
  });

  it('should ensure all 8 concepts have required claims, blocks, mappings, revisions and questions', () => {
    for (const c of BATCH_POLITY_GAP_CONCEPTS) {
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      expect(c.contentBlocks.length).toBe(4);
      expect(c.examMappings.length).toBe(8);
      expect(c.revisionUnits.length).toBe(3);
      expect(c.questions.length).toBe(2);

      // Verify block types
      const blockTypes = c.contentBlocks.map(b => b.type);
      expect(blockTypes).toContain('INTUITION');
      expect(blockTypes).toContain('CORE_IDEA');
      expect(blockTypes).toContain('MECHANISM');
      expect(blockTypes).toContain('EXAM_APPLICATION');

      // Verify revision unit types
      const ruTypes = c.revisionUnits.map(r => r.type);
      expect(ruTypes).toContain('FLASH_30S');
      expect(ruTypes).toContain('SUMMARY_2M');
      expect(ruTypes).toContain('ARCHITECTURE_5M');
    }
  });

  it('should verify database persistence of all 8 concepts', async () => {
    for (const c of BATCH_POLITY_GAP_CONCEPTS) {
      const dbConcept = await db.concept.findUnique({
        where: { id: c.id },
        include: {
          claims: true,
          contentBlocks: true,
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(dbConcept).toBeDefined();
      expect(dbConcept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(dbConcept?.contentBlocks.length).toBe(4);
      expect(dbConcept?.examMappings.length).toBe(8);
      expect(dbConcept?.revisionUnits.length).toBe(3);
      expect(dbConcept?.questions.length).toBe(2);
    }
  });

  it('should verify RPSC RAS expert depth on Rajasthan Polity concepts', async () => {
    const rpscConcepts = ['CON-POL-134', 'CON-POL-135', 'CON-POL-136'];
    for (const id of rpscConcepts) {
      const dbMapping = await db.examConceptMapping.findFirst({
        where: {
          conceptId: id,
          exam: { slug: 'rpsc-ras' },
        },
      });
      expect(dbMapping).toBeDefined();
      expect(dbMapping?.requiredDepth).toBe('EXPERT');
    }
  });
});
