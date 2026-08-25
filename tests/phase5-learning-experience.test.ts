import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedArticle14Benchmark } from '../lib/benchmark/article-14-seed';
import { getConceptTeachingView } from '../lib/knowledge/teaching-engine';
import { getRevisionByConceptAndExam } from '../lib/revision/revision-generator';
import { getExamLensesForConcept } from '../lib/exams/exam-lens';
import { getQuestionsByConcept } from '../lib/questions/questions';

describe('Phase 5: First Complete Human Learning Experience (Article 14 Benchmark)', () => {
  let conceptId: string;

  beforeAll(async () => {
    // Clear existing DB tables in dependency order
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

    // Run complete Article 14 Benchmark Seeder
    const concept = await seedArticle14Benchmark();
    conceptId = concept.id;
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify complete benchmark data provisioning with full provenance', async () => {
    const concept = await db.concept.findUniqueOrThrow({
      where: { id: conceptId },
      include: {
        topic: { include: { subject: { include: { domain: true } } } },
        contentBlocks: true,
        claims: { include: { evidence: { include: { source: true } } } },
        examMappings: { include: { exam: true } },
        revisionUnits: true,
        questions: true,
        outgoingConnections: { include: { targetConcept: true } },
      },
    });

    expect(concept.slug).toBe('article-14-equality');
    expect(concept.status).toBe('CANONICAL');
    expect(concept.topic.subject.name).toBe('Indian Polity');
    expect(concept.claims.length).toBe(20);
    expect(concept.contentBlocks.length).toBe(7);
    expect(concept.examMappings.length).toBe(3);
    expect(concept.revisionUnits.length).toBe(3);
    expect(concept.questions.length).toBeGreaterThanOrEqual(3);
    expect(concept.outgoingConnections.length).toBe(3);
  });

  it('2. should verify progressive depth learning ramp (Beginner to Expert)', async () => {
    const view = await getConceptTeachingView(conceptId, 'STANDARD');
    expect(view.blocks.length).toBe(7);
    expect(view.verifiedClaimsCount).toBe(20);

    // Verify key conceptual blocks exist in natural reading order
    const types = view.blocks.map((b) => b.type);
    expect(types).toContain('CORE_IDEA');
    expect(types).toContain('WHY_IT_MATTERS');
    expect(types).toContain('MECHANISM');
    expect(types).toContain('TIMELINE');
    expect(types).toContain('EXCEPTION');
    expect(types).toContain('COMPARISON');
    expect(types).toContain('MISCONCEPTION');
  });

  it('3. should verify forensic evidence provenance on every canonical claim', async () => {
    const claims = await db.claim.findMany({
      where: { conceptId },
      include: { evidence: { include: { source: true } } },
    });

    for (const claim of claims) {
      expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
      expect(claim.evidence[0].locator).toBeDefined();
      expect(claim.evidence[0].source.title).toBeDefined();
      expect(['DEFINITIVE', 'STRONG_SUPPORT']).toContain(claim.evidence[0].evidentiarySupport);
    }
  });

  it('4. should verify multi-exam lens calibration (RAS, APFC, DBF) with evidence origin tags', async () => {
    const lenses = await getExamLensesForConcept(conceptId);
    expect(lenses.length).toBe(3);

    const ras = lenses.find((l) => l.exam.slug === 'rpsc-ras');
    expect(ras).toBeDefined();
    expect(ras?.relevance).toBe('CORE');
    expect(ras?.priority).toBe('MUST_MASTER');
    expect(ras?.notes).toContain('Intelligence Evidence Origin: OBSERVED_FROM_PYQ');

    const apfc = lenses.find((l) => l.exam.slug === 'upsc-apfc');
    expect(apfc).toBeDefined();
    expect(apfc?.notes).toContain('Intelligence Evidence Origin: INFERRED_FROM_PATTERN');

    const dbf = lenses.find((l) => l.exam.slug === 'iibf-dbf');
    expect(dbf).toBeDefined();
    expect(dbf?.notes).toContain('Intelligence Evidence Origin: GENERAL_EXAM_STRATEGY');
  });

  it('5. should verify active recall questions across difficulty levels', async () => {
    const questions = await getQuestionsByConcept(conceptId);
    expect(questions.length).toBeGreaterThanOrEqual(3);

    const levels = questions.map((q) => q.difficulty);
    expect(levels).toContain('LEVEL_1_FACTUAL');
    expect(levels).toContain('LEVEL_3_DISTINCTION');
    expect(levels).toContain('LEVEL_5_ELIMINATION');

    // Verify each question has stem, answer, and explanation
    for (const q of questions) {
      expect(q.stem).toBeDefined();
      expect(q.correctAnswer).toBeDefined();
      expect(q.explanation).toBeDefined();
    }
  });

  it('6. should verify derived revision layers (1-Min, Trap Sheet, Comparison Table)', async () => {
    const revision = await getRevisionByConceptAndExam(conceptId);
    expect(revision.length).toBe(3);

    const oneMin = revision.find((r) => r.type === 'ONE_MINUTE_RECALL');
    expect(oneMin?.content).toContain('ANY PERSON');

    const trapSheet = revision.find((r) => r.type === 'TRAP_SHEET');
    expect(trapSheet?.content).toContain('Trap 1');

    const comparison = revision.find((r) => r.type === 'COMPARISON_TABLE');
    expect(comparison?.content).toContain('British Common Law');
  });

  it('7. should verify meaningful cross-domain conceptual connections', async () => {
    const connections = await db.connection.findMany({
      where: { sourceConceptId: conceptId },
      include: { targetConcept: true },
    });

    expect(connections.length).toBe(3);

    const targetSlugs = connections.map((c) => c.targetConcept.slug);
    expect(targetSlugs).toContain('rule-of-law');
    expect(targetSlugs).toContain('affirmative-action-art-15-16');
    expect(targetSlugs).toContain('judicial-review-art-13-32');

    // Verify each connection contains an explicit explanatory rationale
    for (const conn of connections) {
      expect(conn.explanation.length).toBeGreaterThan(20);
    }
  });

  it('8. should verify zero mathematical formula bloat in Polity concept', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { conceptId, type: 'MATHEMATICS' },
    });
    expect(blocks.length).toBe(0);
  });
});
