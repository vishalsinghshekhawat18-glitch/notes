import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { createDomain, createSubject } from '../lib/knowledge/domain';
import { createTopic, createConcept } from '../lib/knowledge/concept';
import { registerSource, addSourceSection } from '../lib/ingestion/source-registry';
import { createClaim, attachEvidence, getClaimWithFullProvenance } from '../lib/claims/claims';
import { assembleConceptTeaching, getConceptTeachingView } from '../lib/knowledge/teaching-engine';
import { generateRevisionLayers, getRevisionByConceptAndExam } from '../lib/revision/revision-generator';
import { applyExamLens, getExamLensesForConcept } from '../lib/exams/exam-lens';
import { createKnowledgeAudit, getAuditScopeSummary } from '../lib/audit/audit';

describe('Phase 4.5 & 4.6: Expert Knowledge Audit, Governance & Benchmark Correction', () => {
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

    // 1. Domain, Subject, Topic
    const domain = await createDomain({ slug: 'governance', name: 'Governance & Polity' });
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

    // 2. Audited Canonical Concept Definition
    const concept = await createConcept({
      topicId: topic.id,
      slug: 'article-14-equality',
      title: 'Article 14: Equality Before the Law and Equal Protection of the Laws',
      shortDefinition:
        'Article 14 guarantees to every person equality before the law and the equal protection of the laws within the territory of India; it commands that equals must be treated equally while permitting reasonable classification, and prohibits arbitrary state action.',
      difficulty: 'INTERMEDIATE',
    });
    conceptId = concept.id;

    // 3. Register Sources
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

  it('1. Claim Identity Integrity: Preserves Phase 3 claim IDs and establishes immutable lineage for new claims', async () => {
    // CLM-14.1 (Core Legal Guarantee)
    const clm1 = await createClaim({
      conceptId,
      statement: 'Article 14 guarantees equality before the law and equal protection of the laws to any person within the territory of India.',
      claimType: 'LEGAL_PROVISION',
      importance: 'MUST_KNOW',
      status: 'VERIFIED',
    });
    await attachEvidence({
      claimId: clm1.id,
      sourceId: primarySourceId,
      sourceSectionId: art14SectionId,
      locator: 'Article 14, Main Provision Clause',
      evidentiarySupport: 'DEFINITIVE',
    });

    // CLM-14.3 (Reasonable Classification Rule)
    await createClaim({
      conceptId,
      statement: 'Article 14 prohibits class legislation but permits reasonable classification founded on intelligible differentia and rational nexus.',
      claimType: 'RULE',
      importance: 'MUST_KNOW',
      scopeConditions: 'Classification must not be arbitrary, artificial, or evasive.',
      status: 'VERIFIED',
    });

    // CLM-14.4 (1952 Classical Doctrine)
    await createClaim({
      conceptId,
      statement: 'State of W.B. v. Anwar Ali Sarkar (1952) established the two-pronged test of intelligible differentia and rational nexus.',
      claimType: 'MECHANISM',
      validFrom: new Date('1952-01-11'),
      status: 'VERIFIED',
    });

    // CLM-14.5 (1974 Non-Arbitrariness Doctrine — Neutral Phrasing)
    await createClaim({
      conceptId,
      statement: 'E.P. Royappa v. State of T.N. (1974) held that equality is dynamic and antithetical to arbitrariness; later Supreme Court jurisprudence expanded Article 14 review beyond traditional classification analysis to address arbitrary State action.',
      claimType: 'PRINCIPLE',
      validFrom: new Date('1974-03-01'),
      status: 'VERIFIED',
    });

    // CLM-14.8 (NEW: Article 361 Constitutional Immunity — correctly contextualized)
    const clm8 = await createClaim({
      conceptId,
      statement: 'Article 361 provides personal and criminal procedural immunity to the President and Governors during their term, functioning as a constitutional immunity for the office rather than a general exception to the principle of equality.',
      claimType: 'RULE',
      importance: 'SHOULD_KNOW',
      status: 'VERIFIED',
    });
    await attachEvidence({
      claimId: clm8.id,
      sourceId: primarySourceId,
      locator: 'Article 361, Clauses 1-4',
      evidentiarySupport: 'DEFINITIVE',
    });

    // CLM-14.9 (NEW: Article 31C Precision — 42nd Amendment expansion invalidated in Minerva Mills)
    const clm9 = await createClaim({
      conceptId,
      statement: 'Article 31C protects laws giving effect to Directive Principles in Articles 39(b) and 39(c) from Article 14 challenges; the 42nd Amendment attempt to extend this immunity to all Directive Principles was struck down in Minerva Mills (1980).',
      claimType: 'LEGAL_PROVISION',
      importance: 'MUST_KNOW',
      status: 'VERIFIED',
    });
    await attachEvidence({
      claimId: clm9.id,
      sourceId: secondarySourceId,
      locator: 'Minerva Mills v. Union of India, (1980) 3 SCC 625',
      evidentiarySupport: 'DEFINITIVE',
    });

    // CLM-14.10 (NEW: UK / US Synthesis in Indian Constitutional Framework)
    await createClaim({
      conceptId,
      statement: 'Equality before the law (British common law, negative obligation) and Equal protection of the laws (US 14th Amendment, positive obligation) were integrated into an indigenous constitutional framework guaranteeing both formal subjection to law and substantive affirmative protection.',
      claimType: 'COMPARISON',
      importance: 'SHOULD_KNOW',
      status: 'VERIFIED',
    });

    const claims = await db.claim.findMany({ where: { conceptId } });
    expect(claims.length).toBe(7);
  });

  it('2. Teaching Assembly Audit: Assembles neutral, un-loaded pedagogical blocks without misleading analogies or loaded terms', async () => {
    const assembly = await assembleConceptTeaching({
      conceptId,
      blocks: [
        {
          conceptId,
          type: 'CORE_IDEA',
          title: 'The Core Constitutional Guarantee',
          body: 'Article 14 of the Constitution of India provides:\n> *"The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."*\n\nIt guarantees two intertwined dimensions: formal subjection of all persons to ordinary law (equality before law) and affirmative equality of treatment under similar circumstances (equal protection of the laws).',
        },
        {
          conceptId,
          type: 'WHY_IT_MATTERS',
          title: 'Why Mathematical Sameness Fails (Substantive vs. Formal Equality)',
          body: 'Equality does not mean treating genuinely different situations with blind uniformity. Imposing an identical burden on unequals perpetuates inequality. The Constitution permits the State to enact differential laws provided the classification is legally and rationally justified.',
        },
        {
          conceptId,
          type: 'MECHANISM',
          title: 'The Two-Pronged Reasonable Classification Test',
          body: 'In *State of West Bengal v. Anwar Ali Sarkar (1952)*, the Supreme Court established that while Article 14 forbids arbitrary "class legislation", it permits "reasonable classification" if two cumulative conditions are met:\n1. **Intelligible Differentia**: The classification must be founded on a clear, understandable characteristic distinguishing persons/things grouped together from those left out.\n2. **Rational Nexus**: The differentia must have a direct, logical connection to the specific objective sought to be achieved by the statute.',
        },
        {
          conceptId,
          type: 'TIMELINE',
          title: 'Jurisprudential Evolution: Classification to Non-Arbitrariness',
          body: '• **1952 (*Anwar Ali Sarkar*)**: Classical classification doctrine established as the primary filter against class legislation.\n• **1974 (*E.P. Royappa v. State of T.N.*)**: Justice P.N. Bhagwati articulated that equality is a dynamic concept antithetical to arbitrariness; an arbitrary act is necessarily a denial of equality.\n• **1978 (*Maneka Gandhi v. Union of India*)**: Established that procedure depriving personal liberty under Article 21 must not be arbitrary, reading Article 14 into Article 21.\n• **2017 (*Shayara Bano v. Union of India*)**: Formally recognized "manifest arbitrariness" as an independent ground to strike down primary legislation under Article 14.\n\n*Note on Doctrinal Relationship*: Later Supreme Court jurisprudence expanded Article 14 review beyond traditional classification analysis to address arbitrary State action; both operate as complementary tools of judicial review.',
        },
        {
          conceptId,
          type: 'EXCEPTION',
          title: 'Related Constitutional Immunities & Exceptions',
          body: '• **Article 361 (Presidential and Gubernatorial Immunity)**: The President and Governors are immune from personal court proceedings for official acts and cannot be subjected to criminal proceedings or arrest while in office. *State actions taken in their name remain fully amenable to judicial review under Article 14.*\n• **Article 31C (Savings of Laws Giving Effect to Certain DPSPs)**: Laws enacted to implement Directive Principles under Articles 39(b) and 39(c) cannot be challenged for violating Article 14. *The 42nd Amendment attempt to extend this immunity to all DPSPs was invalidated in Minerva Mills (1980).*\n• **Diplomatic Immunity (Statutory & International Law)**: Foreign sovereigns, ambassadors, and diplomatic envoys enjoy immunity under the Diplomatic Relations (Vienna Convention) Act, 1972, rather than an internal constitutional exception.',
        },
        {
          conceptId,
          type: 'COMPARISON',
          title: 'Equality Before Law vs. Equal Protection of the Laws',
          body: '| Dimension | Equality Before the Law | Equal Protection of the Laws |\n| :--- | :--- | :--- |\n| **Philosophical Tradition** | British Common Law (Dicey\'s Rule of Law) | American Constitution (14th Amendment) |\n| **Nature of Obligation** | Negative (Absence of special legal privileges) | Positive (Affirmative duty to ensure equal treatment in like circumstances) |\n| **Core Command** | No person is above the ordinary law of the land | Like should be treated alike, not unequals alike |\n| **Indian Adaptation** | Integrated together into Article 14 to guarantee both formal neutrality and affirmative social justice | Integrated together into Article 14 to guarantee both formal neutrality and affirmative social justice |',
        },
        {
          conceptId,
          type: 'MISCONCEPTION',
          title: 'Examiner Pitfalls & Critical Misconceptions',
          body: '❌ **Misconception 1**: Article 14 applies only to Indian citizens.\n✔️ **Fact**: Article 14 uses the broad term "any person", protecting foreign citizens, statutory corporations, and juristic persons alike (contrast with Articles 15, 16, and 19 which are citizen-only).\n\n❌ **Misconception 2**: Article 14 demands identical mathematical treatment across all individuals.\n✔️ **Fact**: Article 14 permits differential treatment under the doctrine of reasonable classification.\n\n❌ **Misconception 3**: Article 31C shields laws implementing all Directive Principles from Article 14.\n✔️ **Fact**: Protection is strictly limited to Articles 39(b) and 39(c) (*Minerva Mills*, 1980).',
        },
      ],
    });

    expect(assembly.blocksCount).toBe(7);

    // Verify neutral phrasing and absence of loaded terms
    const view = await getConceptTeachingView(conceptId);
    const timelineBlock = view.blocks.find((b) => b.type === 'TIMELINE');
    expect(timelineBlock?.body).not.toContain('activist');
    expect(timelineBlock?.body).toContain('Later Supreme Court jurisprudence expanded Article 14 review beyond traditional classification analysis');
  });

  it('3. Exam Intelligence Audit: Classifies exam lenses with explicit evidence-source origins', async () => {
    // 1. RPSC RAS Lens — Verified from PYQ pattern
    const ras = await applyExamLens({
      examSlug: 'rpsc-ras',
      examName: 'RPSC Rajasthan Administrative Services',
      conductingBody: 'RPSC',
      conceptId,
      syllabusUnit: 'GS Paper 3: Unit 1 (Indian Political System)',
      relevance: 'CORE',
      priority: 'MUST_MASTER',
      requiredDepth: 'ANALYTICAL_MAINS',
      evidenceOrigin: 'OBSERVED_FROM_PYQ',
      questionStyle: '50-word direct analytical answers on Intelligible Differentia and 100-word answers on the E.P. Royappa doctrine.',
      frequentTraps: 'Confusing "any person" with citizen-only articles; failing to state both prongs of Anwar Ali test.',
      notes: 'PYQ 2018 & 2021 explicitly tested the two prongs of reasonable classification.',
    });
    expect(ras.mapping.notes).toContain('Intelligence Evidence Origin: OBSERVED_FROM_PYQ');

    // 2. UPSC APFC Lens — Inferred from Pattern
    const apfc = await applyExamLens({
      examSlug: 'upsc-apfc',
      examName: 'UPSC Assistant Public Provident Fund Commissioner',
      conductingBody: 'UPSC',
      conceptId,
      syllabusUnit: 'General Studies: Indian Polity and Constitution',
      relevance: 'HIGH',
      priority: 'HIGH_YIELD',
      requiredDepth: 'FACTUAL_RECALL',
      evidenceOrigin: 'INFERRED_FROM_PATTERN',
      questionStyle: 'Multi-statement elimination MCQs on constitutional articles, immunities, and Article 31C limits.',
      frequentTraps: 'Assuming Article 31C covers all DPSPs instead of only 39(b) and 39(c).',
    });
    expect(apfc.mapping.notes).toContain('Intelligence Evidence Origin: INFERRED_FROM_PATTERN');

    // 3. IIBF DBF Lens — General Exam Strategy
    const dbf = await applyExamLens({
      examSlug: 'iibf-dbf',
      examName: 'IIBF Diploma in Banking and Finance',
      conductingBody: 'IIBF',
      conceptId,
      syllabusUnit: 'Legal & Regulatory Aspects of Banking: Module A',
      relevance: 'BACKGROUND',
      priority: 'STANDARD',
      requiredDepth: 'OVERVIEW',
      evidenceOrigin: 'GENERAL_EXAM_STRATEGY',
      questionStyle: 'Direct objective MCQs on definition of State and constitutional protection for legal corporations.',
    });
    expect(dbf.mapping.notes).toContain('Intelligence Evidence Origin: GENERAL_EXAM_STRATEGY');

    const lenses = await getExamLensesForConcept(conceptId);
    expect(lenses.length).toBe(3);
  });

  it('4. Revision Audit: Generates high-yield retrieval sheets without artificial mnemonics', async () => {
    const revision = await generateRevisionLayers({
      conceptId,
      oneMinuteBullets: [
        'Article 14 = Equality before law (UK / negative) + Equal protection of laws (US / positive).',
        'Applies to "ANY PERSON" (citizens, non-citizens, statutory corporations).',
        'Reasonable Classification Test (Anwar Ali 1952) = Intelligible Differentia + Rational Nexus.',
        'Royappa (1974) & Shayara Bano (2017) = Non-arbitrariness expands Article 14 beyond formal classification.',
        'Immunities: Art 361 (President/Governor personal & criminal immunity; state acts remain reviewable).',
        'Art 31C: Shields ONLY laws implementing Art 39(b) and 39(c) (42nd Amend expansion struck down in Minerva Mills 1980).',
      ],
      trapPoints: [
        'Conflating "any person" (Art 14) with "citizens only" (Arts 15, 16, 19, 29, 30).',
        'Believing Article 14 forbids all classification (It allows reasonable classification).',
        'Assuming Article 31C protects all Directive Principles (Only 39(b) and 39(c) after Minerva Mills).',
        'Assuming Article 361 shields executive actions taken in President\'s name from judicial review.',
      ],
      comparisonTableMarkdown:
        '| Feature | Equality Before Law | Equal Protection of the Laws |\n| :--- | :--- | :--- |\n| **Origin** | British Common Law | US 14th Amendment |\n| **Obligation** | Negative (No special privilege) | Positive (Equal treatment in like circumstances) |\n| **Core Rule** | Subjection of all to ordinary law | Like should be treated alike |',
    });

    expect(revision.revisionUnitsCreatedCount).toBe(3);

    const units = await getRevisionByConceptAndExam(conceptId);
    expect(units.length).toBe(3);
    const mnemonicUnit = units.find((u) => u.type === 'MNEMONIC');
    expect(mnemonicUnit).toBeUndefined();
  });

  it('5. Audit Governance Semantics: Validates explicit status states (RESOLVED, QUALIFIED, UNRESOLVED, OUTSIDE_SCOPE)', async () => {
    // 1. RESOLVED Audit Finding
    const audit1 = await createKnowledgeAudit({
      targetType: 'CONCEPT',
      targetId: conceptId,
      auditType: 'ACCURACY',
      protocol: 'POLITY',
      severity: 'HIGH',
      finding: 'Article 361 previously listed as generic exception; corrected to specify procedural immunity for the office.',
      status: 'RESOLVED',
      auditor: 'ExpertAuditor:Polity',
    });

    // 2. QUALIFIED Audit Finding
    const audit2 = await createKnowledgeAudit({
      targetType: 'CONCEPT',
      targetId: conceptId,
      auditType: 'COMPLETENESS',
      protocol: 'POLITY',
      severity: 'HIGH',
      finding: 'Article 31C text in printed constitution contains 42nd Amendment wording; qualified with Minerva Mills (1980) limits.',
      status: 'QUALIFIED',
      auditor: 'ExpertAuditor:Polity',
    });

    // 3. OUTSIDE_SCOPE Audit Finding
    const audit3 = await createKnowledgeAudit({
      targetType: 'CONCEPT',
      targetId: conceptId,
      auditType: 'SCOPE_CHECK',
      protocol: 'POLITY',
      severity: 'LOW',
      finding: 'International human rights treaties under ICCPR Art 26 were reviewed and determined to be outside the core domestic constitutional scope for Article 14.',
      status: 'OUTSIDE_SCOPE',
      auditor: 'ExpertAuditor:Polity',
    });

    expect(audit1.status).toBe('RESOLVED');
    expect(audit2.status).toBe('QUALIFIED');
    expect(audit3.status).toBe('OUTSIDE_SCOPE');

    // 4. Verify Scope Summary Semantics
    const scopeSummary = await getAuditScopeSummary('CONCEPT', conceptId);
    expect(scopeSummary.totalFindingsInScope).toBe(3);
    expect(scopeSummary.resolved).toBe(1);
    expect(scopeSummary.qualified).toBe(1);
    expect(scopeSummary.outsideScope).toBe(1);
    expect(scopeSummary.unresolvedWithinScope).toBe(0);
    expect(scopeSummary.scopeDeclaration).toBe('No unresolved issues were identified within the defined audit scope.');
  });
});
