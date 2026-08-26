import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchP4CanonicalKnowledge, BATCH_P4_CONCEPTS } from '../lib/benchmark/batch-p4-canonical-seed';
import { BATCH_P4_SEMANTIC_UNITS } from '../lib/ingestion/batch-p4-semantic-inventory';

describe('Phase Polity Migration: Batch P4 (Federalism, Centre-State Relations & Emergency)', () => {
  beforeAll(async () => {
    await seedBatchP4CanonicalKnowledge();
  });

  it('should seed exactly 9 canonical concepts across Topics 19 and 20', async () => {
    expect(BATCH_P4_CONCEPTS).toHaveLength(9);

    const topic19Concepts = BATCH_P4_CONCEPTS.filter((c) => c.topicOrder === 19);
    const topic20Concepts = BATCH_P4_CONCEPTS.filter((c) => c.topicOrder === 20);

    expect(topic19Concepts).toHaveLength(5);
    expect(topic20Concepts).toHaveLength(4);
  });

  it('should have 16 semantic inventory units mapped to legacy chapters', async () => {
    expect(BATCH_P4_SEMANTIC_UNITS).toHaveLength(16);

    const coverageUnits = await db.coverageUnit.findMany({
      where: {
        id: {
          in: BATCH_P4_SEMANTIC_UNITS.map((u) => `CU-${u.semanticUnitId}`),
        },
      },
    });

    expect(coverageUnits).toHaveLength(16);
    coverageUnits.forEach((cu) => {
      expect(cu.status).toBe('PROCESSED');
    });
  });

  it('should verify that all 9 concepts have atomic claims with evidence locators', async () => {
    for (const cDef of BATCH_P4_CONCEPTS) {
      const claims = await db.claim.findMany({
        where: { conceptId: cDef.id },
        include: { evidence: true },
      });

      expect(claims.length).toBeGreaterThanOrEqual(2);
      for (const claim of claims) {
        expect(claim.status).toBe('CANONICAL_CLAIM');
        expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
        expect(claim.evidence[0].sourceId).toBe('LEGACY-POLITY-VAULT-2026');
        expect(claim.evidence[0].locator).toBeTruthy();
      }
    }
  });

  it('should verify that all 9 concepts have complete content blocks, revision layers, and exam mappings', async () => {
    for (const cDef of BATCH_P4_CONCEPTS) {
      const contentBlocks = await db.contentBlock.findMany({
        where: { conceptId: cDef.id },
      });
      const revisionUnits = await db.revisionUnit.findMany({
        where: { conceptId: cDef.id },
      });
      const examMappings = await db.examConceptMapping.findMany({
        where: { conceptId: cDef.id },
      });
      const questions = await db.question.findMany({
        where: { conceptId: cDef.id },
      });

      expect(contentBlocks.length).toBeGreaterThanOrEqual(2);
      expect(revisionUnits.length).toBe(3); // 30s, 2m, 5m
      expect(examMappings.length).toBeGreaterThanOrEqual(2); // UPSC, RPSC
      expect(questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('should verify that federal and emergency doctrines, cases, and constitutional articles are accurately embedded in claims', async () => {
    const claims = await db.claim.findMany({
      where: {
        conceptId: {
          in: ['CON-T19-01', 'CON-T19-02', 'CON-T19-03', 'CON-T19-04', 'CON-T19-05', 'CON-T20-01', 'CON-T20-02', 'CON-T20-03', 'CON-T20-04'],
        },
      },
    });

    const allStatements = claims.map((c) => c.statement).join(' ');

    // Verification of key doctrines, cases, and rules
    expect(allStatements).toContain('Union of States');
    expect(allStatements).toContain('S.R. Bommai');
    expect(allStatements).toContain('Seventh Schedule');
    expect(allStatements).toContain('Article 248');
    expect(allStatements).toContain('Article 254');
    expect(allStatements).toContain('Article 365');
    expect(allStatements).toContain('Article 312');
    expect(allStatements).toContain('Article 280');
    expect(allStatements).toContain('GST Council');
    expect(allStatements).toContain('Article 352');
    expect(allStatements).toContain('Article 358');
    expect(allStatements).toContain('Article 359');
    expect(allStatements).toContain('Article 356');
    expect(allStatements).toContain('Article 360');
  });
});
