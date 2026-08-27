import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { STATIC_GA_SCHEMES_INVENTORY } from '../lib/ingestion/static-ga-schemes-inventory';
import { GA_SCHEMES_CONCEPTS, seedBatchGASchemesCanonicalKnowledge } from '../lib/benchmark/batch-ga-schemes-canonical-seed';

describe('Phase Static GA & Government Schemes Migration Audit', () => {
  beforeAll(async () => {
    await seedBatchGASchemesCanonicalKnowledge();
  });

  it('should verify all 39 source inventory units are accounted for with zero omissions', () => {
    expect(STATIC_GA_SCHEMES_INVENTORY.length).toBe(39);
    const actions = new Set(STATIC_GA_SCHEMES_INVENTORY.map((u) => u.action));
    expect(actions.has('CANONICAL_CONCEPT')).toBe(true);
    expect(actions.has('DEDUPLICATED_INTO_EXISTING')).toBe(true);
    expect(actions.has('EXCLUDED_CURRENT_AFFAIRS')).toBe(true);
    expect(actions.has('EXCLUDED_STUB')).toBe(true);
    expect(actions.has('CORRECTED_STATUTORY_FRAMEWORK')).toBe(true);
  });

  it('should verify total 8 canonical concepts in the GA and Schemes seed', () => {
    expect(GA_SCHEMES_CONCEPTS.length).toBe(8);
  });

  it('should verify every concept contains claims, content blocks, and exam mappings', () => {
    for (const c of GA_SCHEMES_CONCEPTS) {
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(3);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(2);
      expect(c.revisionUnits.length).toBeGreaterThanOrEqual(2);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('should verify database contains both new subjects with active topics and concepts', async () => {
    const gaSubject = await db.subject.findFirst({
      where: { slug: 'general-awareness' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(gaSubject).not.toBeNull();
    expect(gaSubject?.topics.length).toBe(2);
    const gaConceptsCount = gaSubject?.topics.reduce(
      (sum, t) => sum + t.concepts.length,
      0
    );
    expect(gaConceptsCount).toBe(3);

    const schemesSubject = await db.subject.findFirst({
      where: { slug: 'government-schemes' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(schemesSubject).not.toBeNull();
    expect(schemesSubject?.topics.length).toBe(3);
    const schemesConceptsCount = schemesSubject?.topics.reduce(
      (sum, t) => sum + t.concepts.length,
      0
    );
    expect(schemesConceptsCount).toBe(5);
  });

  it('should verify MGNREGA 2005 statutory claims and absence of fictional VB-G RAM G repeal', async () => {
    const mgnregaConcept = await db.concept.findFirst({
      where: { slug: 'employment-guarantee-and-agricultural-income-support' },
      include: {
        claims: true,
        contentBlocks: true,
      },
    });

    expect(mgnregaConcept).not.toBeNull();
    const claimStatements = mgnregaConcept?.claims.map((c) => c.statement).join(' ');
    expect(claimStatements).toContain('MGNREGA 2005');
    expect(claimStatements).not.toContain('VB-G RAM G Act 2025');

    const contentText = mgnregaConcept?.contentBlocks.map((cb) => cb.body).join(' ');
    expect(contentText).toContain('MGNREGA 2005');
    expect(contentText).toContain('Unemployment Allowance');
  });
});
