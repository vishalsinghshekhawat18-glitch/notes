import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchP1CanonicalKnowledge, BATCH_P1_CONCEPTS } from '../lib/benchmark/batch-p1-canonical-seed';
import { BATCH_P1_SEMANTIC_UNITS } from '../lib/ingestion/batch-p1-semantic-inventory';

describe('Phase Polity Migration: Batch P1 (Union & State Executive, Civil Services)', () => {
  beforeAll(async () => {
    await seedBatchP1CanonicalKnowledge();
  });

  it('should seed exactly 12 canonical concepts across Topics 11, 12, and 13', async () => {
    expect(BATCH_P1_CONCEPTS).toHaveLength(12);

    const topic11Concepts = BATCH_P1_CONCEPTS.filter((c) => c.topicSlug === 'the-union-executive');
    const topic12Concepts = BATCH_P1_CONCEPTS.filter((c) => c.topicSlug === 'the-state-executive');
    const topic13Concepts = BATCH_P1_CONCEPTS.filter((c) => c.topicSlug === 'civil-services-and-public-services');

    expect(topic11Concepts).toHaveLength(6);
    expect(topic12Concepts).toHaveLength(4);
    expect(topic13Concepts).toHaveLength(2);
  });

  it('should have 18 semantic inventory units mapped to legacy chapters', async () => {
    expect(BATCH_P1_SEMANTIC_UNITS).toHaveLength(18);

    const coverageUnits = await db.coverageUnit.findMany({
      where: {
        id: {
          in: BATCH_P1_SEMANTIC_UNITS.map((u) => `CU-${u.semanticUnitId}`),
        },
      },
    });

    expect(coverageUnits).toHaveLength(18);
    coverageUnits.forEach((cu) => {
      expect(cu.status).toBe('PROCESSED');
    });
  });

  it('should verify that all 12 concepts have atomic claims with evidence locators', async () => {
    for (const conceptDef of BATCH_P1_CONCEPTS) {
      const dbConcept = await db.concept.findUnique({
        where: { id: conceptDef.id },
        include: {
          claims: {
            include: {
              evidence: true,
            },
          },
        },
      });

      expect(dbConcept).toBeDefined();
      expect(dbConcept!.claims.length).toBeGreaterThanOrEqual(2);
      dbConcept!.claims.forEach((cl) => {
        expect(cl.evidence.length).toBeGreaterThanOrEqual(1);
        expect(cl.evidence[0].locator).toBeDefined();
      });
    }
  });

  it('should verify that all 12 concepts have complete content blocks, revision layers, and exam mappings', async () => {
    for (const conceptDef of BATCH_P1_CONCEPTS) {
      const dbConcept = await db.concept.findUnique({
        where: { id: conceptDef.id },
        include: {
          contentBlocks: true,
          revisionUnits: true,
          examMappings: true,
          questions: true,
        },
      });

      expect(dbConcept).toBeDefined();
      expect(dbConcept!.contentBlocks.length).toBeGreaterThanOrEqual(2);
      expect(dbConcept!.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(dbConcept!.examMappings.length).toBeGreaterThanOrEqual(2);
      expect(dbConcept!.questions.length).toBeGreaterThanOrEqual(1);

      // Verify 3-tier revision presence
      const revTypes = dbConcept!.revisionUnits.map((r) => r.type);
      expect(revTypes).toContain('FLASH_30S');
      expect(revTypes).toContain('SUMMARY_2M');
      expect(revTypes).toContain('ARCHITECTURE_5M');
    }
  });

  it('should verify that landmark judicial doctrines are accurately embedded in claims', async () => {
    const claims = await db.claim.findMany({
      where: {
        conceptId: {
          in: BATCH_P1_CONCEPTS.map((c) => c.id),
        },
      },
    });

    const allStatements = claims.map((c) => c.statement).join(' ');

    // President Veto & Ordinance
    expect(allStatements).toContain('D.C. Wadhwa');
    expect(allStatements).toContain('Krishna Kumar Singh');
    // Clemency
    expect(allStatements).toContain('Maru Ram');
    expect(allStatements).toContain('Kehar Singh');
    expect(allStatements).toContain('Epuru Sudhakar');
    // Governor
    expect(allStatements).toContain('B.P. Singhal');
    expect(allStatements).toContain('Article 163(1)');
    // State Cabinet & Shamsher Singh
    expect(allStatements).toContain('Shamsher Singh');
    expect(allStatements).toContain('15%');
    // Civil Services & Tulsiram Patel
    expect(allStatements).toContain('Tulsiram Patel');
    expect(allStatements).toContain('Article 311(2)');
  });
});
