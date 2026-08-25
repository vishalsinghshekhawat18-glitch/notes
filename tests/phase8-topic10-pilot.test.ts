import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedTopic9CanonicalKnowledge } from '../lib/benchmark/topic-9-canonical-seed';
import {
  seedTopic10CanonicalKnowledge,
  TOPIC_10_CANONICAL_CONCEPTS,
} from '../lib/benchmark/topic-10-canonical-seed';
import { getConceptTeachingView } from '../lib/knowledge/teaching-engine';
import { TOPIC_10_SEMANTIC_UNITS } from '../lib/ingestion/semantic-coverage';

describe('Phase 8 Pilot: Topic 10 (Directive Principles of State Policy)', () => {
  let sourceId: string;
  let topic10CoverageUnitId: string;

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

    // Seed Topic 10 Pilot
    const result = await seedTopic10CanonicalKnowledge();
    sourceId = result.sourceId;
    topic10CoverageUnitId = result.coverageUnitId;
  }, 30000);

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify all 5 Topic 10 canonical concepts are seeded and marked CANONICAL', async () => {
    const concepts = await db.concept.findMany({
      where: { topic: { title: 'Part IV: Directive Principles of State Policy' } },
      orderBy: { id: 'asc' },
    });

    expect(concepts.length).toBe(5);
    expect(concepts.every((c) => c.status === 'CANONICAL')).toBe(true);

    const slugs = concepts.map((c) => c.slug);
    expect(slugs).toContain('dpsp-nature-justiciability-article-37');
    expect(slugs).toContain('dpsp-classification-socialistic-gandhian-liberal');
    expect(slugs).toContain('article-44-uniform-civil-code-jurisprudence');
    expect(slugs).toContain('part-3-part-4-conflict-harmonious-construction');
    expect(slugs).toContain('directivism-outside-part-4-implementation-schemes');
  });

  it('2. should verify 100% of 18 semantic units are accounted for in Topic 10 concepts', async () => {
    const allMappedSemanticUnits = new Set<string>();
    for (const c of TOPIC_10_CANONICAL_CONCEPTS) {
      for (const semId of c.semanticUnitIds) {
        allMappedSemanticUnits.add(semId);
      }
    }

    expect(allMappedSemanticUnits.size).toBe(18);
    for (const u of TOPIC_10_SEMANTIC_UNITS) {
      expect(allMappedSemanticUnits.has(u.semanticUnitId)).toBe(true);
    }
  });

  it('3. should verify all Topic 10 claims have verified evidence provenance to CERAMIC-POLITY-2026', async () => {
    const topic10 = await db.topic.findFirstOrThrow({
      where: { title: 'Part IV: Directive Principles of State Policy' },
    });

    const claims = await db.claim.findMany({
      where: { concept: { topicId: topic10.id } },
      include: {
        evidence: {
          include: {
            source: true,
          },
        },
      },
    });

    expect(claims.length).toBeGreaterThanOrEqual(15);
    expect(claims.every((c) => c.status === 'VERIFIED')).toBe(true);

    for (const claim of claims) {
      expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
      expect(claim.evidence[0].source.id).toBe(sourceId);
      expect(claim.evidence[0].source.title).toContain('Indian Polity');
      expect(claim.evidence[0].locator).toBeDefined();
    }
  });

  it('4. should verify progressive depth filtering in teaching engine for Topic 10', async () => {
    const uccConcept = await db.concept.findFirstOrThrow({
      where: { slug: 'article-44-uniform-civil-code-jurisprudence' },
    });

    const beginnerView = await getConceptTeachingView(uccConcept.id, 'BEGINNER');
    const standardView = await getConceptTeachingView(uccConcept.id, 'STANDARD');
    const advancedView = await getConceptTeachingView(uccConcept.id, 'ADVANCED');

    expect(beginnerView.blocks.length).toBeGreaterThan(0);
    expect(standardView.blocks.length).toBeGreaterThanOrEqual(beginnerView.blocks.length);
    expect(advancedView.blocks.length).toBeGreaterThanOrEqual(standardView.blocks.length);
  });

  it('5. should verify multi-exam lenses (UPSC, RPSC, IIBF) exist for Topic 10 concepts', async () => {
    const dpspClassConcept = await db.concept.findFirstOrThrow({
      where: { slug: 'dpsp-classification-socialistic-gandhian-liberal' },
      include: { examMappings: { include: { exam: true } } },
    });

    expect(dpspClassConcept.examMappings.length).toBe(3);
    const examSlugs = dpspClassConcept.examMappings.map((m) => m.exam.slug);
    expect(examSlugs).toContain('upsc-cse');
    expect(examSlugs).toContain('rpsc-ras');
    expect(examSlugs).toContain('iibf-dbf');
  });

  it('6. should verify multi-tier revision units (30s, 2m, 5m) exist for all Topic 10 concepts', async () => {
    const topic10 = await db.topic.findFirstOrThrow({
      where: { title: 'Part IV: Directive Principles of State Policy' },
    });

    const revisionUnits = await db.revisionUnit.findMany({
      where: { concept: { topicId: topic10.id } },
    });

    expect(revisionUnits.length).toBe(5 * 3); // 15 revision units across 5 concepts

    const tiers = revisionUnits.map((r) => r.type);
    expect(tiers.filter((t) => t === 'FLASH_30S').length).toBe(5);
    expect(tiers.filter((t) => t === 'SUMMARY_2M').length).toBe(5);
    expect(tiers.filter((t) => t === 'ARCHITECTURE_5M').length).toBe(5);
  });

  it('7. should verify active recall questions exist with distractor rationales for Topic 10', async () => {
    const topic10 = await db.topic.findFirstOrThrow({
      where: { title: 'Part IV: Directive Principles of State Policy' },
    });

    const questions = await db.question.findMany({
      where: { concept: { topicId: topic10.id } },
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

  it('8. should verify 2024 benchmarks are present in Topic 10 (Uttarakhand UCC & Property Owners Association)', async () => {
    const claims = await db.claim.findMany({
      where: {
        statement: {
          contains: '2024',
        },
      },
    });

    const uccClaim = claims.find((c) => c.statement.includes('Uttarakhand'));
    expect(uccClaim).toBeDefined();

    const propClaim = claims.find((c) => c.statement.includes('Property Owners Association'));
    expect(propClaim).toBeDefined();
  });
});
