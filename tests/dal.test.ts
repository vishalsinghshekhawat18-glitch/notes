import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { createDomain, createSubject, getSubjectBySlug } from '../lib/knowledge/domain';
import { createTopic, createConcept, createContentBlock, getFullConceptForLearning } from '../lib/knowledge/concept';
import { createClaim, attachEvidence } from '../lib/claims/claims';
import { registerSource, addSourceSection, createCoverageUnit, calculateSourceCoverageMetrics, updateCoverageUnitStatus } from '../lib/coverage/coverage';
import { createExam, mapConceptToExam, createRevisionUnit } from '../lib/exams/exams';
import { createQuestion } from '../lib/questions/questions';
import { createKnowledgeAudit } from '../lib/audit/audit';

describe('Phase 1 Foundation: Relational Model & DAL Verification', () => {
  beforeAll(async () => {
    // Clear test tables in dependency order
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
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('should create Domain, Subject, and Topic with strict hierarchy and scope', async () => {
    const domain = await createDomain({
      slug: 'governance',
      name: 'Governance & Polity',
      description: 'Constitutional and administrative systems',
    });

    expect(domain.id).toBeDefined();
    expect(domain.slug).toBe('governance');

    const subject = await createSubject({
      domainId: domain.id,
      slug: 'indian-polity',
      name: 'Indian Polity',
      scopeStatement: 'Covers constitutional architecture, fundamental rights, judiciary, executive, and statutory bodies. Excludes international law and state-specific local acts unless cross-referenced.',
    });

    expect(subject.id).toBeDefined();
    expect(subject.scopeStatement).toContain('Covers constitutional architecture');

    const topic = await createTopic({
      subjectId: subject.id,
      slug: 'fundamental-rights',
      title: 'Fundamental Rights',
      scope: 'Articles 12 through 35 of the Constitution of India',
    });

    expect(topic.id).toBeDefined();
    expect(topic.slug).toBe('fundamental-rights');

    // Retrieve via DAL
    const retrievedSubject = await getSubjectBySlug('indian-polity');
    expect(retrievedSubject?.topics.length).toBe(1);
  });

  it('should support recursive Concept hierarchy (Parent Concept and Child Concept)', async () => {
    const topic = await db.topic.findFirstOrThrow({ where: { slug: 'fundamental-rights' } });

    // 1. Parent Concept / Cluster
    const parentConcept = await createConcept({
      topicId: topic.id,
      slug: 'right-to-equality',
      title: 'Right to Equality (Articles 14–18)',
      shortDefinition: 'Guarantees equal standing before the law and prohibits state discrimination while permitting affirmative action.',
      difficulty: 'INTERMEDIATE',
    });

    expect(parentConcept.id).toBeDefined();

    // 2. Child Concept
    const childConcept = await createConcept({
      topicId: topic.id,
      parentId: parentConcept.id,
      slug: 'article-14-equality-before-law',
      title: 'Article 14: Equality Before the Law and Equal Protection',
      shortDefinition: 'Prohibits arbitrary discrimination by state action, establishing equality before the law and equal protection of the laws.',
      difficulty: 'BEGINNER',
    });

    expect(childConcept.parentId).toBe(parentConcept.id);

    // 3. Modular Content Blocks (Composable)
    const block1 = await createContentBlock({
      conceptId: childConcept.id,
      type: 'CORE_IDEA',
      title: 'The Core Idea',
      body: 'Like should be treated alike. The state cannot arbitrarily favor or disadvantage any individual.',
      order: 1,
    });

    const block2 = await createContentBlock({
      conceptId: childConcept.id,
      type: 'MECHANISM',
      title: 'Two-Pronged Reasonable Classification Test',
      body: 'To be valid, differentiation must satisfy: (1) Intelligible Differentia, and (2) Rational Nexus to the legislative objective.',
      order: 2,
    });

    expect(block1.id).toBeDefined();
    expect(block2.id).toBeDefined();
  });

  it('should enforce Source, SourceSection, and the Zero Unaccounted-For Source Omission ledger', async () => {
    const source = await registerSource({
      title: 'The Constitution of India',
      author: 'Government of India / Legislative Dept',
      sourceType: 'LAW',
      authorityTier: 'TIER_A_PRIMARY',
      identifier: 'GOI-CONST-1950',
    });

    expect(source.id).toBeDefined();
    expect(source.authorityTier).toBe('TIER_A_PRIMARY');

    const part3 = await addSourceSection({
      sourceId: source.id,
      title: 'Part III — Fundamental Rights',
      sectionType: 'PART',
      locator: 'Arts. 12-35',
    });

    const art14Section = await addSourceSection({
      sourceId: source.id,
      parentId: part3.id,
      title: 'Article 14 — Equality before law',
      sectionType: 'ARTICLE',
      locator: 'Art. 14',
    });

    expect(art14Section.parentId).toBe(part3.id);

    // Create Coverage Units
    const cu1 = await createCoverageUnit({
      sourceId: source.id,
      sourceSectionId: art14Section.id,
      label: 'Article 14 Full Provision Text',
      scopeDescription: 'Equality before law and equal protection within territory of India',
      status: 'UNPROCESSED',
    });

    const cu2 = await createCoverageUnit({
      sourceId: source.id,
      label: 'Article 15 Non-Discrimination Clauses',
      status: 'UNPROCESSED',
    });

    // Calculate initial coverage metrics
    let metrics = await calculateSourceCoverageMetrics(source.id);
    expect(metrics.total).toBe(2);
    expect(metrics.accountedCount).toBe(0);
    expect(metrics.coverageIndexPercentage).toBe(0);
    expect(metrics.isFullyAccounted).toBe(false);

    // Update 1 unit to VERIFIED and 1 to EXCLUDED_WITH_REASON
    await updateCoverageUnitStatus(cu1.id, 'VERIFIED');
    await updateCoverageUnitStatus(cu2.id, 'EXCLUDED_WITH_REASON', {
      exclusionReason: 'Deferred to separate ingestion unit',
    });

    metrics = await calculateSourceCoverageMetrics(source.id);
    expect(metrics.accountedCount).toBe(2);
    expect(metrics.coverageIndexPercentage).toBe(100);
    expect(metrics.isFullyAccounted).toBe(true);
  });

  it('should create Claim with Evidence provenance links', async () => {
    const concept = await db.concept.findFirstOrThrow({ where: { slug: 'article-14-equality-before-law' } });
    const source = await db.source.findFirstOrThrow();
    const section = await db.sourceSection.findFirstOrThrow({ where: { title: 'Article 14 — Equality before law' } });

    const claim = await createClaim({
      conceptId: concept.id,
      statement: 'Article 14 extends guarantees to any person within the territory of India, including non-citizens and legal corporations.',
      claimType: 'LEGAL',
      importance: 'MUST_KNOW',
      confidence: 'ESTABLISHED_FACT',
      status: 'VERIFIED',
    });

    expect(claim.id).toBeDefined();

    const evidence = await attachEvidence({
      claimId: claim.id,
      sourceId: source.id,
      sourceSectionId: section.id,
      locator: 'Art. 14, text clause',
      excerpt: 'The State shall not deny to any person equality before the law...',
      evidenceType: 'PRIMARY_STATUTORY_TEXT',
      authority: 'DIRECT_AUTHORITY',
    });

    expect(evidence.id).toBeDefined();
    expect(evidence.claimId).toBe(claim.id);
  });

  it('should support Exam Lenses, Revision Units, Questions, and Subject Audits', async () => {
    const concept = await db.concept.findFirstOrThrow({ where: { slug: 'article-14-equality-before-law' } });

    // Exam Lens
    const exam = await createExam({
      slug: 'rpsc-ras',
      name: 'RPSC Rajasthan Administrative Services',
      conductingBody: 'RPSC',
    });

    const mapping = await mapConceptToExam({
      examId: exam.id,
      conceptId: concept.id,
      syllabusUnit: 'Paper 3, Unit 1',
      relevance: 'CORE',
      priority: 'MUST_MASTER',
      requiredDepth: 'ANALYTICAL_MAINS',
      frequentTraps: 'Confusing "any person" with "citizens only"',
    });

    expect(mapping.examId).toBe(exam.id);

    // Revision Unit
    const revision = await createRevisionUnit({
      conceptId: concept.id,
      examId: exam.id,
      type: 'ONE_MINUTE_RECALL',
      content: '• Art 14: Applies to ALL persons (citizens + foreigners).\n• UK = Equality before law (negative).\n• US = Equal protection (positive).',
      priority: 'CRITICAL',
    });

    expect(revision.id).toBeDefined();

    // Question / PYQ
    const question = await createQuestion({
      conceptId: concept.id,
      examId: exam.id,
      type: 'MCQ_SINGLE',
      stem: 'Which of the following Fundamental Rights is available to both citizens and foreigners (except enemy aliens)?',
      options: JSON.stringify(['Article 15', 'Article 16', 'Article 14', 'Article 19']),
      correctAnswer: 'Article 14',
      explanation: 'Article 14 applies to "any person", whereas Articles 15, 16, and 19 apply exclusively to Indian citizens.',
      difficulty: 'MODERATE',
      isPYQ: true,
      pyqYear: 2021,
      pyqPaper: 'Prelims GS-1',
    });

    expect(question.isPYQ).toBe(true);

    // Subject Audit
    const audit = await createKnowledgeAudit({
      targetType: 'CONCEPT',
      targetId: concept.id,
      auditType: 'ACCURACY',
      protocol: 'POLITY',
      severity: 'INFO',
      finding: 'Concept accurately distinguishes between citizen and non-citizen scope.',
      auditor: 'Agent:PolityAuditor',
    });

    expect(audit.id).toBeDefined();

    // Full Learning Concept Aggregation
    const fullConcept = await getFullConceptForLearning(concept.id);
    expect(fullConcept?.contentBlocks.length).toBe(2);
    expect(fullConcept?.claims.length).toBe(1);
    expect(fullConcept?.claims[0].evidence.length).toBe(1);
    expect(fullConcept?.examMappings.length).toBe(1);
    expect(fullConcept?.revisionUnits.length).toBe(1);
    expect(fullConcept?.questions.length).toBe(1);
  });
});
