import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchP3CanonicalKnowledge, BATCH_P3_CONCEPTS } from '../lib/benchmark/batch-p3-canonical-seed';
import { BATCH_P3_SEMANTIC_UNITS } from '../lib/ingestion/batch-p3-semantic-inventory';

describe('Phase Polity Migration: Batch P3 (Judiciary & Tribunals)', () => {
  beforeAll(async () => {
    await seedBatchP3CanonicalKnowledge();
  });

  it('should seed exactly 10 canonical concepts across Topics 16, 17, and 18', async () => {
    expect(BATCH_P3_CONCEPTS).toHaveLength(10);

    const topic16Concepts = BATCH_P3_CONCEPTS.filter((c) => c.topicOrder === 16);
    const topic17Concepts = BATCH_P3_CONCEPTS.filter((c) => c.topicOrder === 17);
    const topic18Concepts = BATCH_P3_CONCEPTS.filter((c) => c.topicOrder === 18);

    expect(topic16Concepts).toHaveLength(3);
    expect(topic17Concepts).toHaveLength(4);
    expect(topic18Concepts).toHaveLength(3);
  });

  it('should have 16 semantic inventory units mapped to legacy chapters', async () => {
    expect(BATCH_P3_SEMANTIC_UNITS).toHaveLength(16);

    const coverageUnits = await db.coverageUnit.findMany({
      where: {
        id: {
          in: BATCH_P3_SEMANTIC_UNITS.map((u) => `CU-${u.semanticUnitId}`),
        },
      },
    });

    expect(coverageUnits).toHaveLength(16);
    coverageUnits.forEach((cu) => {
      expect(cu.status).toBe('PROCESSED');
    });
  });

  it('should verify that all 10 concepts have atomic claims with evidence locators', async () => {
    for (const cDef of BATCH_P3_CONCEPTS) {
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

  it('should verify that all 10 concepts have complete content blocks, revision layers, and exam mappings', async () => {
    for (const cDef of BATCH_P3_CONCEPTS) {
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

  it('should verify that landmark judicial doctrines and case laws are accurately embedded in claims', async () => {
    const claims = await db.claim.findMany({
      where: {
        conceptId: {
          in: ['CON-T16-01', 'CON-T16-02', 'CON-T16-03', 'CON-T17-01', 'CON-T17-02', 'CON-T17-04', 'CON-T18-01', 'CON-T18-02', 'CON-T18-03'],
        },
      },
    });

    const allStatements = claims.map((c) => c.statement).join(' ');

    // Verification of key doctrines, cases, and rules
    expect(allStatements).toContain('34 Judges');
    expect(allStatements).toContain('Collegium');
    expect(allStatements).toContain('Article 131');
    expect(allStatements).toContain('Article 136');
    expect(allStatements).toContain('Article 143');
    expect(allStatements).toContain('Article 142');
    expect(allStatements).toContain('Article 226');
    expect(allStatements).toContain('Rajasthan High Court');
    expect(allStatements).toContain('Public Interest Litigation');
    expect(allStatements).toContain('L. Chandra Kumar');
    expect(allStatements).toContain('Article 323A');
  });
});
