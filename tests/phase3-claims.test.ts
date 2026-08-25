import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { createDomain, createSubject } from '../lib/knowledge/domain';
import { createTopic, createConcept } from '../lib/knowledge/concept';
import { registerSource, addSourceSection } from '../lib/ingestion/source-registry';
import { createClaim, attachEvidence, getClaimWithFullProvenance } from '../lib/claims/claims';
import { reconcileClaim } from '../lib/reconciliation/reconciliation-engine';
import { compareClaims } from '../lib/reconciliation/similarity';
import { buildConceptSynthesisBridge } from '../lib/knowledge/synthesis-bridge';

describe('Phase 3: Atomic Claims, Evidence, Reconciliation & Canonical Knowledge Preparation', () => {
  let conceptId: string;
  let primarySourceId: string;
  let secondarySourceId: string;
  let art14SectionId: string;

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

    // Setup foundational hierarchy
    const domain = await createDomain({
      slug: 'governance',
      name: 'Governance & Polity',
    });

    const subject = await createSubject({
      domainId: domain.id,
      slug: 'indian-polity',
      name: 'Indian Polity',
      scopeStatement: 'Constitutional Architecture and Fundamental Rights',
    });

    const topic = await createTopic({
      subjectId: subject.id,
      slug: 'fundamental-rights',
      title: 'Fundamental Rights',
    });

    const concept = await createConcept({
      topicId: topic.id,
      slug: 'article-14-equality',
      title: 'Article 14: Equality Before the Law and Equal Protection',
      shortDefinition: 'Prohibits arbitrary discrimination by the State and guarantees equal standing and equal protection under law.',
      difficulty: 'INTERMEDIATE',
    });

    conceptId = concept.id;

    // Register Source 1 (Tier A Primary: Constitution of India)
    const primarySource = await registerSource({
      title: 'The Constitution of India',
      sourceType: 'CONSTITUTION',
      authorityTier: 'TIER_A_PRIMARY',
      author: 'Government of India',
      identifier: 'GOI-CONST-1950',
    });
    primarySourceId = primarySource.id;

    const part3 = await addSourceSection({
      sourceId: primarySource.id,
      title: 'Part III — Fundamental Rights',
      sectionType: 'PART',
      locator: 'Arts. 12-35',
    });

    const art14Sec = await addSourceSection({
      sourceId: primarySource.id,
      parentId: part3.id,
      title: 'Article 14 — Equality before law',
      sectionType: 'ARTICLE',
      locator: 'Art. 14',
    });
    art14SectionId = art14Sec.id;

    // Register Source 2 (Tier B Scholarly: Supreme Court Judgments & Commentary)
    const secondarySource = await registerSource({
      title: 'Constitutional Law of India: Landmark Judgments Compendium',
      sourceType: 'JUDGMENT',
      authorityTier: 'TIER_B_SCHOLARLY',
      author: 'Supreme Court of India / Judicial Commentary',
    });
    secondarySourceId = secondarySource.id;
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. Atomicity: Meaningful proposition remains coherent without artificial fragmentation', async () => {
    const claim = await createClaim({
      conceptId,
      statement: 'Article 14 guarantees equality before the law and equal protection of the laws to any person within the territory of India.',
      claimType: 'LEGAL_PROVISION',
      epistemicLevel: 'CANONICAL_CLAIM',
      importance: 'MUST_KNOW',
      confidence: 'ESTABLISHED_FACT',
      status: 'CANDIDATE',
    });

    expect(claim.id).toBeDefined();
    expect(claim.statement).toContain('any person within the territory of India');
    expect(claim.claimType).toBe('LEGAL_PROVISION');
  });

  it('2. Evidence: Every accepted canonical claim is backed by explicit evidence with locator and support strength', async () => {
    const claim = await db.claim.findFirstOrThrow({ where: { conceptId } });

    const evidence = await attachEvidence({
      claimId: claim.id,
      sourceId: primarySourceId,
      sourceSectionId: art14SectionId,
      locator: 'Article 14, Main Provision Clause',
      excerpt: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
      evidenceType: 'PRIMARY_STATUTORY_TEXT',
      authority: 'TIER_A_PRIMARY',
      evidentiarySupport: 'DEFINITIVE',
      extractionConfidence: 'HIGH',
    });

    expect(evidence.id).toBeDefined();
    expect(evidence.evidentiarySupport).toBe('DEFINITIVE');
    expect(evidence.locator).toBe('Article 14, Main Provision Clause');

    // Reconcile and promote to VERIFIED
    const decision = await reconcileClaim({
      claimId: claim.id,
      outcome: 'ACCEPTED',
      reasoning: 'Primary constitutional text definitively supports the statement.',
      reviewer: 'Agent:PolityAuditor',
    });

    expect(decision.status).toBe('VERIFIED');
  });

  it('3. Conflict: Conflicting sources generate an explicit KnowledgeIssue instead of silent overwrite', async () => {
    const disputedClaim = await createClaim({
      conceptId,
      statement: 'Article 14 applies exclusively to Indian citizens.',
      claimType: 'RULE',
      status: 'CANDIDATE',
    });

    const decision = await reconcileClaim({
      claimId: disputedClaim.id,
      outcome: 'UNRESOLVED',
      reasoning: 'Contradicts primary constitutional text which explicitly uses "any person". Secondary summary conflated Art 14 with Art 15.',
      conflictingSourceId: secondarySourceId,
      conflictDescription: 'Source asserts citizen limitation, contradicting constitutional text "any person".',
      reviewer: 'Agent:PolityAuditor',
    });

    expect(decision.status).toBe('DISPUTED');
    expect(decision.knowledgeIssueId).toBeDefined();

    const issue = await db.knowledgeIssue.findUniqueOrThrow({
      where: { id: decision.knowledgeIssueId! },
    });
    expect(issue.type).toBe('CONFLICT');
    expect(issue.severity).toBe('HIGH');
    expect(issue.status).toBe('OPEN');
  });

  it('4. Context: Conditionally valid claims preserve their operational conditions and scope', async () => {
    const conditionalClaim = await createClaim({
      conceptId,
      statement: 'The State may classify persons or things for legislative purposes.',
      claimType: 'RULE',
      scopeConditions: 'Permissible only if classification satisfies Intelligible Differentia and Rational Nexus to legislative objective.',
      status: 'CANDIDATE',
    });

    const decision = await reconcileClaim({
      claimId: conditionalClaim.id,
      outcome: 'ACCEPTED_WITH_SCOPE',
      reasoning: 'Reasonable classification is constitutionally permissible under the two-pronged nexus test established in Anwar Ali Sarkar (1952).',
      scopeConditions: 'Subject to intelligible differentia and rational nexus tests.',
      reviewer: 'Agent:PolityAuditor',
    });

    expect(decision.status).toBe('VERIFIED');
    const updated = await db.claim.findUniqueOrThrow({ where: { id: conditionalClaim.id } });
    expect(updated.scopeConditions).toContain('intelligible differentia');
  });

  it('5. Temporal Validity: Older and newer doctrines coexist with explicit time boundaries', async () => {
    // 1952 Classical Doctrine: Anwar Ali Sarkar
    const classicalDoctrine = await createClaim({
      conceptId,
      statement: 'Article 14 validity is tested strictly through the two-pronged test of intelligible differentia and rational nexus.',
      claimType: 'MECHANISM',
      validFrom: new Date('1952-01-11'),
      status: 'CANDIDATE',
    });

    await reconcileClaim({
      claimId: classicalDoctrine.id,
      outcome: 'ACCEPTED',
      reasoning: 'Established in State of West Bengal v. Anwar Ali Sarkar (1952).',
      validFrom: new Date('1952-01-11'),
      reviewer: 'Agent:PolityAuditor',
    });

    // 1974 New Doctrine: E.P. Royappa
    const newDoctrine = await createClaim({
      conceptId,
      statement: 'Equality is a dynamic concept antithetical to arbitrariness; state arbitrariness in any form violates Article 14.',
      claimType: 'PRINCIPLE',
      validFrom: new Date('1974-03-01'),
      status: 'CANDIDATE',
    });

    await reconcileClaim({
      claimId: newDoctrine.id,
      outcome: 'ACCEPTED',
      reasoning: 'Established by Justice Bhagwati in E.P. Royappa v. State of Tamil Nadu (1974), expanding beyond classical classification.',
      validFrom: new Date('1974-03-01'),
      reviewer: 'Agent:PolityAuditor',
    });

    const claims = await db.claim.findMany({
      where: { conceptId, claimType: { in: ['MECHANISM', 'PRINCIPLE'] } },
      orderBy: { validFrom: 'asc' },
    });

    expect(claims.length).toBe(2);
    expect(claims[0].statement).toContain('two-pronged test');
    expect(claims[1].statement).toContain('antithetical to arbitrariness');
  });

  it('6. Scholarly Disagreement: Multiple credible interpretations coexist without false consensus', async () => {
    const debatedClaim = await createClaim({
      conceptId,
      statement: 'The non-arbitrariness doctrine completely supersedes the classical classification test in modern judicial review.',
      claimType: 'INTERPRETATION',
      confidence: 'DEBATED',
      status: 'CANDIDATE',
    });

    const decision = await reconcileClaim({
      claimId: debatedClaim.id,
      outcome: 'MULTIPLE_VALID_VIEWS',
      reasoning: 'Scholars and subsequent benches debate whether non-arbitrariness replaces classification or serves as an additional overarching test (e.g. Subramanian Swamy 2014 & Shayara Bano 2017).',
      reviewer: 'Agent:PolityAuditor',
    });

    expect(decision.status).toBe('VERIFIED');
    expect(decision.knowledgeIssueId).toBeDefined();

    const verifiedDebated = await db.claim.findUniqueOrThrow({ where: { id: debatedClaim.id } });
    expect(verifiedDebated.confidence).toBe('DEBATED');
  });

  it('7. Deduplication: Non-destructive similarity classifier distinguishes relations without destructive merging', async () => {
    // 1. Same
    const cmp1 = compareClaims(
      'Article 14 guarantees equality before law.',
      'Article 14 guarantees equality before law.'
    );
    expect(cmp1.relationType).toBe('SAME');
    expect(cmp1.recommendation).toBe('MERGE_CANDIDATE');

    // 2. Contradictory
    const cmp2 = compareClaims(
      'Article 14 applies to all persons in India.',
      'Article 14 prohibits non-citizens from claiming equality in India.'
    );
    expect(cmp2.relationType).toBe('CONTRADICTORY');
    expect(cmp2.recommendation).toBe('FLAG_CONTRADICTION');

    // 3. Parent-Child / Subsumption
    const cmp3 = compareClaims(
      'Article 14 permits reasonable classification.',
      'Article 14 permits reasonable classification based on intelligible differentia.'
    );
    expect(cmp3.relationType).toBe('PARENT_CHILD');
    expect(cmp3.recommendation).toBe('ESTABLISH_HIERARCHY');

    // 4. Complementary
    const cmp4 = compareClaims(
      'Equality before law is of British origin representing negative equality.',
      'Equal protection of laws is of American origin representing positive equality.'
    );
    expect(cmp4.relationType).toBe('COMPLEMENTARY');
    expect(cmp4.recommendation).toBe('KEEP_DISTINCT');
  });

  it('8. Inference: Inferences are explicitly labeled and cannot masquerade as source facts', async () => {
    const inferenceClaim = await createClaim({
      conceptId,
      statement: 'The transition from Anwar Ali Sarkar (1952) to E.P. Royappa (1974) reflects an institutional shift from formal equality toward substantive anti-subjugation justice.',
      claimType: 'INFERENCE',
      epistemicLevel: 'INFERENCE',
      status: 'VERIFIED',
    });

    expect(inferenceClaim.epistemicLevel).toBe('INFERENCE');
    expect(inferenceClaim.confidence).toBe('INFERENCE');
  });

  it('9. Provenance: Every canonical claim is forensically traceable back to source and locator', async () => {
    const verifiedClaim = await db.claim.findFirstOrThrow({
      where: { conceptId, statement: { contains: 'equality before the law and equal protection' } },
    });

    const fullProvenance = await getClaimWithFullProvenance(verifiedClaim.id);

    expect(fullProvenance).toBeDefined();
    expect(fullProvenance?.concept.title).toContain('Article 14');
    expect(fullProvenance?.evidence.length).toBe(1);
    expect(fullProvenance?.evidence[0].source.title).toBe('The Constitution of India');
    expect(fullProvenance?.evidence[0].source.authorityTier).toBe('TIER_A_PRIMARY');
    expect(fullProvenance?.evidence[0].locator).toBe('Article 14, Main Provision Clause');
  });

  it('10. Concept Synthesis Bridge: Concept cleanly aggregates claims, evidence, qualifications, and grounded metrics', async () => {
    const synthesis = await buildConceptSynthesisBridge(conceptId);

    expect(synthesis.conceptTitle).toContain('Article 14');
    expect(synthesis.canonicalClaims.length).toBeGreaterThanOrEqual(5);
    expect(synthesis.qualificationsAndExceptions.length).toBeGreaterThanOrEqual(1);
    expect(synthesis.disputedOrDebatedPoints.length).toBeGreaterThanOrEqual(2); // 1 disputed + 1 debated

    // Grounded, non-fabricated metrics
    expect(synthesis.knowledgeMetrics.totalClaimsExtracted).toBe(7);
    expect(synthesis.knowledgeMetrics.verifiedClaimsCount).toBe(6);
    expect(synthesis.knowledgeMetrics.inferencesCount).toBe(1);
    expect(synthesis.knowledgeMetrics.openKnowledgeIssuesCount).toBe(1); // 1 active conflict issue
  });
});
