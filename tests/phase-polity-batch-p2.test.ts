import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchP2CanonicalKnowledge, BATCH_P2_CONCEPTS } from '../lib/benchmark/batch-p2-canonical-seed';
import { BATCH_P2_SEMANTIC_UNITS } from '../lib/ingestion/batch-p2-semantic-inventory';

describe('Phase Polity Migration: Batch P2 (Union & State Legislature)', () => {
  beforeAll(async () => {
    await seedBatchP2CanonicalKnowledge();
  });

  it('should seed exactly 10 canonical concepts across Topics 14 and 15', async () => {
    expect(BATCH_P2_CONCEPTS).toHaveLength(10);

    const topic14Concepts = BATCH_P2_CONCEPTS.filter((c) => c.topicOrder === 14);
    const topic15Concepts = BATCH_P2_CONCEPTS.filter((c) => c.topicOrder === 15);

    expect(topic14Concepts).toHaveLength(6);
    expect(topic15Concepts).toHaveLength(4);
  });

  it('should have 18 semantic inventory units mapped to legacy chapters', async () => {
    expect(BATCH_P2_SEMANTIC_UNITS).toHaveLength(18);

    const coverageUnits = await db.coverageUnit.findMany({
      where: {
        id: {
          in: BATCH_P2_SEMANTIC_UNITS.map((u) => `CU-${u.semanticUnitId}`),
        },
      },
    });

    expect(coverageUnits).toHaveLength(18);
    coverageUnits.forEach((cu) => {
      expect(cu.status).toBe('PROCESSED');
    });
  });

  it('should verify that all 10 concepts have atomic claims with evidence locators', async () => {
    for (const cDef of BATCH_P2_CONCEPTS) {
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
    for (const cDef of BATCH_P2_CONCEPTS) {
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

  it('should verify that landmark legislative rules and judicial holdings are accurately embedded in claims', async () => {
    const claims = await db.claim.findMany({
      where: {
        conceptId: {
          in: ['CON-T14-02', 'CON-T14-03', 'CON-T14-04', 'CON-T14-05', 'CON-T15-01', 'CON-T15-02', 'CON-T15-03', 'CON-T15-04'],
        },
      },
    });

    const allStatements = claims.map((c) => c.statement).join(' ');

    // Verification of key doctrines, cases, and rules
    expect(allStatements).toContain('Kihoto Hollohan');
    expect(allStatements).toContain('Article 108');
    expect(allStatements).toContain('Money Bill');
    expect(allStatements).toContain('Article 112');
    expect(allStatements).toContain('Consolidated Fund');
    expect(allStatements).toContain('Public Accounts Committee');
    expect(allStatements).toContain('Estimates Committee');
    expect(allStatements).toContain('Article 169');
    expect(allStatements).toContain('Article 171');
    expect(allStatements).toContain('Article 197');
    expect(allStatements).toContain('Rajasthan');
  });
});
