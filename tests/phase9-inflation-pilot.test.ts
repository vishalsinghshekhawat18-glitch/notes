import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import {
  seedInflationCanonicalKnowledge,
  INFLATION_CANONICAL_CONCEPTS,
  INFLATION_SOURCE_SEMANTIC_UNITS,
} from '../lib/benchmark/inflation-canonical-seed';
import { getConceptTeachingView } from '../lib/knowledge/teaching-engine';

describe('Phase 9 Cross-Domain Pilot: Economics (Inflation)', () => {
  let sourceId: string;
  let topicId: string;

  beforeAll(async () => {
    // Clear DB tables in dependency order
    await db.knowledgeAudit.deleteMany();
    await db.question.deleteMany();
    await db.revisionUnit.deleteMany();
    await db.examConceptMapping.deleteMany();
    await db.exam.deleteMany();
    await db.connection.deleteMany();
    await db.contentBlock.deleteMany();
    await db.knowledgeIssue.deleteMany();
    await db.evidence.deleteMany();
    await db.ingestionItem.deleteMany();
    await db.coverageUnit.deleteMany();
    await db.sourceSection.deleteMany();
    await db.source.deleteMany();
    await db.claim.deleteMany();
    await db.concept.deleteMany();
    await db.topic.deleteMany();
    await db.subject.deleteMany();
    await db.domain.deleteMany();

    // Seed Inflation Pilot
    const result = await seedInflationCanonicalKnowledge();
    sourceId = result.sourceId;
    topicId = result.topicId;
  }, 30000);

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify all 5 Inflation canonical concepts are seeded and marked CANONICAL in Economics domain', async () => {
    const topic = await db.topic.findUniqueOrThrow({
      where: { id: topicId },
      include: {
        subject: {
          include: {
            domain: true,
          },
        },
      },
    });

    expect(topic.subject.domain.slug).toBe('economics-public-policy');
    expect(topic.subject.slug).toBe('indian-economy');

    const concepts = await db.concept.findMany({
      where: { topicId },
      orderBy: { id: 'asc' },
    });

    expect(concepts.length).toBe(5);
    expect(concepts.every((c) => c.status === 'CANONICAL')).toBe(true);

    const slugs = concepts.map((c) => c.slug);
    expect(slugs).toContain('inflation-definition-distinctions-real-nominal');
    expect(slugs).toContain('price-indices-measurement-cpi-wpi-core-headline');
    expect(slugs).toContain('inflation-causes-mechanisms-demand-cost-structural');
    expect(slugs).toContain('inflation-distributional-impacts-growth-tradeoffs-phillips-curve');
    expect(slugs).toContain('inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side');
  });

  it('2. should verify 100% of 15 source semantic units are accounted for in Inflation concepts', async () => {
    const allMappedSemanticUnits = new Set<string>();
    for (const c of INFLATION_CANONICAL_CONCEPTS) {
      for (const semId of c.semanticUnitIds) {
        allMappedSemanticUnits.add(semId);
      }
    }

    expect(allMappedSemanticUnits.size).toBe(15);
    for (const u of INFLATION_SOURCE_SEMANTIC_UNITS) {
      expect(allMappedSemanticUnits.has(u.semanticUnitId)).toBe(true);
    }
  });

  it('3. should verify all claims have verified evidence provenance to the Economics Treatise', async () => {
    const claims = await db.claim.findMany({
      where: { concept: { topicId } },
      include: {
        evidence: {
          include: {
            source: true,
          },
        },
      },
    });

    expect(claims.length).toBeGreaterThanOrEqual(18);
    expect(claims.every((c) => c.status === 'VERIFIED')).toBe(true);

    for (const claim of claims) {
      expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
      expect(claim.evidence[0].source.id).toBe(sourceId);
      expect(claim.evidence[0].locator).toBeDefined();
      expect(claim.evidence[0].notes).toContain('Temporal Status:');
    }
  });

  it('4. should verify progressive depth filtering in teaching engine for Economics concepts', async () => {
    const causesConcept = await db.concept.findFirstOrThrow({
      where: { slug: 'inflation-causes-mechanisms-demand-cost-structural' },
    });

    const beginnerView = await getConceptTeachingView(causesConcept.id, 'BEGINNER');
    const standardView = await getConceptTeachingView(causesConcept.id, 'STANDARD');
    const advancedView = await getConceptTeachingView(causesConcept.id, 'ADVANCED');

    expect(beginnerView.blocks.length).toBeGreaterThan(0);
    expect(standardView.blocks.length).toBeGreaterThanOrEqual(beginnerView.blocks.length);
    expect(advancedView.blocks.length).toBeGreaterThanOrEqual(standardView.blocks.length);
  });

  it('5. should verify multi-exam lenses with explicit Prelims vs Mains focus (UPSC, RPSC, IIBF)', async () => {
    const policyConcept = await db.concept.findFirstOrThrow({
      where: { slug: 'inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side' },
      include: { examMappings: { include: { exam: true } } },
    });

    expect(policyConcept.examMappings.length).toBe(3);
    for (const em of policyConcept.examMappings) {
      expect(em.notes).toContain('[Prelims]:');
      expect(em.notes).toContain('[Mains]:');
    }
  });

  it('6. should verify multi-tier revision units (30s, 2m, 5m) exist for all 5 concepts (15 total units)', async () => {
    const revisionUnits = await db.revisionUnit.findMany({
      where: { concept: { topicId } },
    });

    expect(revisionUnits.length).toBe(5 * 3); // 15 revision units

    const tiers = revisionUnits.map((r) => r.type);
    expect(tiers.filter((t) => t === 'FLASH_30S').length).toBe(5);
    expect(tiers.filter((t) => t === 'SUMMARY_2M').length).toBe(5);
    expect(tiers.filter((t) => t === 'ARCHITECTURE_5M').length).toBe(5);
  });

  it('7. should verify active recall questions with distractor explanations', async () => {
    const questions = await db.question.findMany({
      where: { concept: { topicId } },
    });

    expect(questions.length).toBe(5);

    for (const q of questions) {
      expect(q.stem).toBeDefined();
      expect(q.explanation).toBeDefined();
      const options = JSON.parse(q.options || '[]');
      expect(options.length).toBe(4);
      expect(options.some((o: any) => o.isCorrect)).toBe(true);
    }
  });

  it('8. should verify functional mathematical relations are included without decorative formula clutter', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const hasFisherEquation = blocks.some(
      (b) => (b.title?.includes('Fisher') || b.body.includes('Fisher')) && b.body.includes('Real Interest Rate')
    );
    expect(hasFisherEquation).toBe(true);

    const hasBaseEffectFormula = blocks.some((b) => b.body.includes('Base Effect') && b.body.includes('Index'));
    expect(hasBaseEffectFormula).toBe(true);
  });
});
