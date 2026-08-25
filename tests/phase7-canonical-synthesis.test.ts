import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import {
  seedTopic9CanonicalKnowledge,
  TOPIC_9_CANONICAL_CONCEPTS,
} from '../lib/benchmark/topic-9-canonical-seed';
import { getConceptTeachingView } from '../lib/knowledge/teaching-engine';
import { TOPIC_9_SEMANTIC_UNITS } from '../lib/ingestion/semantic-coverage';

describe('Phase 7: Canonical Knowledge Assembly & Pedagogical Synthesis (Topic 9)', () => {
  let sourceId: string;
  let topic9CoverageUnitId: string;

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

    const result = await seedTopic9CanonicalKnowledge();
    sourceId = result.sourceId;
    topic9CoverageUnitId = result.coverageUnitId;
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify all 16 canonical concepts are seeded and marked CANONICAL', async () => {
    const concepts = await db.concept.findMany({
      where: { topic: { title: 'Part III: Fundamental Rights' } },
      orderBy: { id: 'asc' },
    });

    expect(concepts.length).toBe(16);
    expect(concepts.every((c) => c.status === 'CANONICAL')).toBe(true);

    const slugs = concepts.map((c) => c.slug);
    expect(slugs).toContain('part-3-overview-nature-of-fundamental-rights');
    expect(slugs).toContain('article-12-definition-of-state');
    expect(slugs).toContain('article-13-judicial-review-doctrines');
    expect(slugs).toContain('article-14-equality-non-arbitrariness');
    expect(slugs).toContain('articles-15-16-reservations-protective-discrimination');
    expect(slugs).toContain('articles-17-18-abolition-untouchability-titles');
    expect(slugs).toContain('article-19-democratic-freedoms-civil-liberties');
    expect(slugs).toContain('article-20-conviction-protections');
    expect(slugs).toContain('article-21-21a-life-liberty-privacy-education');
    expect(slugs).toContain('article-22-arrest-safeguards-preventive-detention');
    expect(slugs).toContain('articles-23-24-right-against-exploitation');
    expect(slugs).toContain('articles-25-28-freedom-of-religion-essential-practices');
    expect(slugs).toContain('articles-29-30-minority-cultural-educational-rights');
    expect(slugs).toContain('articles-31-300a-property-due-process');
    expect(slugs).toContain('article-32-writs-constitutional-remedies');
    expect(slugs).toContain('articles-33-35-amendability-basic-structure');
  });

  it('2. should verify 100% of 45 semantic units are accounted for in canonical concepts', async () => {
    const allMappedSemanticUnits = new Set<string>();
    for (const c of TOPIC_9_CANONICAL_CONCEPTS) {
      for (const semId of c.semanticUnitIds) {
        allMappedSemanticUnits.add(semId);
      }
    }

    expect(allMappedSemanticUnits.size).toBe(45);
    for (const u of TOPIC_9_SEMANTIC_UNITS) {
      expect(allMappedSemanticUnits.has(u.semanticUnitId)).toBe(true);
    }
  });

  it('3. should verify all canonical claims have verified evidence provenance to CERAMIC-POLITY-2026', async () => {
    const claims = await db.claim.findMany({
      include: {
        evidence: {
          include: {
            source: true,
          },
        },
      },
    });

    expect(claims.length).toBeGreaterThanOrEqual(45);
    expect(claims.every((c) => c.status === 'VERIFIED')).toBe(true);

    for (const claim of claims) {
      expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
      expect(claim.evidence[0].source.id).toBe(sourceId);
      expect(claim.evidence[0].source.title).toContain('Indian Polity');
      expect(claim.evidence[0].locator).toBeDefined();
    }
  });

  it('4. should verify progressive depth filtering in teaching engine', async () => {
    const art21 = await db.concept.findFirstOrThrow({
      where: { slug: 'article-21-21a-life-liberty-privacy-education' },
    });

    const beginnerView = await getConceptTeachingView(art21.id, 'BEGINNER');
    const standardView = await getConceptTeachingView(art21.id, 'STANDARD');
    const advancedView = await getConceptTeachingView(art21.id, 'ADVANCED');

    expect(beginnerView.blocks.length).toBeGreaterThan(0);
    expect(standardView.blocks.length).toBeGreaterThanOrEqual(beginnerView.blocks.length);
    expect(advancedView.blocks.length).toBeGreaterThanOrEqual(standardView.blocks.length);
  });

  it('5. should verify analogy safety rule enforcement', async () => {
    const blocksWithAnalogy = await db.contentBlock.findMany({
      where: { body: { contains: '**Where Analogy Breaks Down**' } },
    });

    expect(blocksWithAnalogy.length).toBeGreaterThanOrEqual(1);
    for (const block of blocksWithAnalogy) {
      expect(block.body).toContain('**Analogy**:');
      expect(block.body).toContain('**Core Insight**:');
      expect(block.body).toContain('**Where Analogy Breaks Down**:');
    }
  });

  it('6. should verify multi-exam lenses (UPSC, RPSC, IIBF) exist for concepts', async () => {
    const art12 = await db.concept.findFirstOrThrow({
      where: { slug: 'article-12-definition-of-state' },
      include: { examMappings: { include: { exam: true } } },
    });

    expect(art12.examMappings.length).toBe(3);
    const examSlugs = art12.examMappings.map((m) => m.exam.slug);
    expect(examSlugs).toContain('upsc-cse');
    expect(examSlugs).toContain('rpsc-ras');
    expect(examSlugs).toContain('iibf-dbf');
  });

  it('7. should verify multi-tier revision units (30s, 2m, 5m) exist for all concepts', async () => {
    const revisionUnits = await db.revisionUnit.findMany();
    expect(revisionUnits.length).toBe(16 * 3); // 48 revision units across 16 concepts

    const tiers = revisionUnits.map((r) => r.type);
    expect(tiers.filter((t) => t === 'FLASH_30S').length).toBe(16);
    expect(tiers.filter((t) => t === 'SUMMARY_2M').length).toBe(16);
    expect(tiers.filter((t) => t === 'ARCHITECTURE_5M').length).toBe(16);
  });

  it('8. should verify active recall questions exist with distractor rationales', async () => {
    const questions = await db.question.findMany();
    expect(questions.length).toBeGreaterThanOrEqual(16);

    for (const q of questions) {
      expect(q.stem).toBeDefined();
      expect(q.explanation).toBeDefined();
      const options = JSON.parse(q.options || '[]');
      expect(options.length).toBe(4);
      expect(options.some((o: any) => o.isCorrect)).toBe(true);
    }
  });
});
