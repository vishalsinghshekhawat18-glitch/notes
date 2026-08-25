import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedArticle14Benchmark } from '../lib/benchmark/article-14-seed';
import { getConceptTeachingView } from '../lib/knowledge/teaching-engine';
import { getExamLensesForConcept } from '../lib/exams/exam-lens';
import { getQuestionsByConcept } from '../lib/questions/questions';

describe('Phase 5.5: Article 14 Benchmark Truth & Provenance Audit', () => {
  let conceptId: string;

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

    const concept = await seedArticle14Benchmark();
    conceptId = concept.id;
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify 20 distinct propositions with 100% forensic evidence provenance', async () => {
    const claims = await db.claim.findMany({
      where: { conceptId },
      include: {
        evidence: {
          include: { source: true },
        },
      },
    });

    expect(claims.length).toBe(20);

    // Verify every proposition has attached evidence, valid locator, and support
    for (const claim of claims) {
      expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
      const ev = claim.evidence[0];
      expect(ev.locator).toBeDefined();
      expect(ev.locator.length).toBeGreaterThan(3);
      expect(ev.source.title).toBeDefined();
      expect(['DEFINITIVE', 'STRONG_SUPPORT']).toContain(ev.evidentiarySupport);
    }
  });

  it('2. should verify Article 31C complete temporal legal-state chain through 2024 9-judge ruling', async () => {
    const art31cClaims = await db.claim.findMany({
      where: {
        conceptId,
        statement: { contains: 'Article 31C' },
      },
    });

    expect(art31cClaims.length).toBeGreaterThanOrEqual(3);

    // Verify 1971 25th Amendment claim
    const c1971 = art31cClaims.find((c) => c.statement.includes('25th Amendment'));
    expect(c1971).toBeDefined();

    // Verify 1980 Minerva Mills claim
    const c1980 = art31cClaims.find((c) => c.statement.includes('Minerva Mills'));
    expect(c1980).toBeDefined();

    // Verify 2024 Property Owners Association claim
    const c2024 = art31cClaims.find((c) => c.statement.includes('Property Owners Association'));
    expect(c2024).toBeDefined();
    expect(c2024?.statement).toContain('2024');

    // Verify ContentBlock includes the complete temporal chain
    const view = await getConceptTeachingView(conceptId);
    const exceptionBlock = view.blocks.find((b) => b.type === 'EXCEPTION');
    expect(exceptionBlock?.body).toContain('Property Owners Association (2024)');
  });

  it('3. should verify proper constitutional terminology (Primary Constitutional Text)', async () => {
    const view = await getConceptTeachingView(conceptId);
    for (const block of view.blocks) {
      expect(block.body).not.toContain('primary statutory provision');
    }
  });

  it('4. should verify UK and US influences are framed as historical context rather than mechanical copies', async () => {
    const view = await getConceptTeachingView(conceptId);
    const coreBlock = view.blocks.find((b) => b.type === 'CORE_IDEA');
    expect(coreBlock?.body).toContain('developed independently through India\'s own constitutional text');
  });

  it('5. should verify beginner mental model for classification without upfront jargon', async () => {
    const view = await getConceptTeachingView(conceptId);
    const whyBlock = view.blocks.find((b) => b.type === 'WHY_IT_MATTERS');
    expect(whyBlock?.body).toContain('1. **Baseline Equality**');
    expect(whyBlock?.body).toContain('2. **Differential Treatment Requires Justification**');
    expect(whyBlock?.body).toContain('3. **Permissibility of Classification**');
    expect(whyBlock?.body).toContain('4. **Constitutional Justification**');
  });

  it('6. should verify judicial doctrine precision with explicit categorization', async () => {
    const view = await getConceptTeachingView(conceptId);
    const timelineBlock = view.blocks.find((b) => b.type === 'TIMELINE');
    expect(timelineBlock?.body).toContain('[JUDICIAL HOLDING]');
    expect(timelineBlock?.body).toContain('[INTERPRETIVE DEVELOPMENT]');
    expect(timelineBlock?.body).toContain('Shayara Bano v. Union of India');
  });

  it('7. should enforce strict PYQ evidence rule across RPSC RAS, UPSC APFC, and IIBF DBF', async () => {
    const lenses = await getExamLensesForConcept(conceptId);

    // 1. RPSC RAS has actual stored PYQ
    const ras = lenses.find((l) => l.exam.slug === 'rpsc-ras');
    expect(ras?.notes).toContain('Intelligence Evidence Origin: OBSERVED_FROM_PYQ');
    expect(ras?.notes).toContain('RPSC RAS Mains 2018 GS Paper 3 (Q2)');

    // Verify actual PYQ question exists in DB
    const pyqs = await getQuestionsByConcept(conceptId, true);
    expect(pyqs.length).toBeGreaterThanOrEqual(1);
    expect(pyqs[0].pyqYear).toBe(2018);
    expect(pyqs[0].pyqPaper).toBe('GS Paper 3');

    // 2. UPSC APFC is downgraded/labeled INFERRED_FROM_PATTERN
    const apfc = lenses.find((l) => l.exam.slug === 'upsc-apfc');
    expect(apfc?.notes).toContain('Intelligence Evidence Origin: INFERRED_FROM_PATTERN');

    // 3. IIBF DBF is audited and labeled GENERAL_EXAM_STRATEGY
    const dbf = lenses.find((l) => l.exam.slug === 'iibf-dbf');
    expect(dbf?.notes).toContain('Intelligence Evidence Origin: GENERAL_EXAM_STRATEGY');
    expect(dbf?.notes).toContain('Audited DBF Scope');
  });

  it('8. should verify cross-domain connections have explicit WHY THIS MATTERS rationale', async () => {
    const connections = await db.connection.findMany({
      where: { sourceConceptId: conceptId },
    });

    expect(connections.length).toBe(3);
    for (const conn of connections) {
      expect(conn.explanation).toContain('WHY THIS MATTERS:');
    }
  });
});
