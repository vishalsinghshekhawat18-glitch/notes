import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { createDomain, createSubject } from '../lib/knowledge/domain';
import { createTopic, createConcept } from '../lib/knowledge/concept';
import { registerSource } from '../lib/ingestion/source-registry';
import { createClaim, attachEvidence } from '../lib/claims/claims';
import { assembleConceptTeaching, getConceptTeachingView } from '../lib/knowledge/teaching-engine';
import { generateRevisionLayers, getRevisionByConceptAndExam } from '../lib/revision/revision-generator';
import { applyExamLens, getExamLensesForConcept } from '../lib/exams/exam-lens';

describe('Phase 4: Canonical Knowledge Assembly & Adaptive Teaching Architecture', () => {
  let polityConceptId: string;
  let econConceptId: string;
  let minimalConceptId: string;
  let primarySourceId: string;

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

    // 1. Setup Polity Structure
    const govDomain = await createDomain({ slug: 'governance', name: 'Governance' });
    const politySubject = await createSubject({
      domainId: govDomain.id,
      slug: 'indian-polity',
      name: 'Indian Polity',
      scopeStatement: 'Constitutional Architecture and Fundamental Rights',
    });
    const frTopic = await createTopic({
      subjectId: politySubject.id,
      slug: 'fundamental-rights',
      title: 'Fundamental Rights',
    });
    const polityConcept = await createConcept({
      topicId: frTopic.id,
      slug: 'article-14-equality',
      title: 'Article 14: Equality Before the Law and Equal Protection',
      shortDefinition: 'Prohibits state arbitrariness, guaranteeing equal legal standing and equal protection under like circumstances.',
      difficulty: 'INTERMEDIATE',
    });
    polityConceptId = polityConcept.id;

    // 2. Setup Economics Structure
    const econDomain = await createDomain({ slug: 'economy', name: 'Economy' });
    const econSubject = await createSubject({
      domainId: econDomain.id,
      slug: 'macroeconomics',
      name: 'Macroeconomics & Banking',
      scopeStatement: 'Monetary Systems, Central Banking, and Credit Creation',
    });
    const bankingTopic = await createTopic({
      subjectId: econSubject.id,
      slug: 'money-banking',
      title: 'Money and Banking',
    });
    const econConcept = await createConcept({
      topicId: bankingTopic.id,
      slug: 'money-multiplier',
      title: 'Money Multiplier Process',
      shortDefinition: 'The maximum amount of commercial bank money that can be created per unit of central bank reserve money.',
      difficulty: 'ADVANCED',
    });
    econConceptId = econConcept.id;

    // 3. Setup Minimal Concept Structure
    const minimalConcept = await createConcept({
      topicId: frTopic.id,
      slug: 'article-17-untouchability',
      title: 'Article 17: Abolition of Untouchability',
      shortDefinition: 'Abolishes untouchability in all forms and forbids its practice under penal consequences.',
      difficulty: 'BEGINNER',
    });
    minimalConceptId = minimalConcept.id;

    // Register Source
    const source = await registerSource({
      title: 'The Constitution of India',
      sourceType: 'CONSTITUTION',
      authorityTier: 'TIER_A_PRIMARY',
    });
    primarySourceId = source.id;

    // Create Verified Claims for Article 14
    const clm1 = await createClaim({
      conceptId: polityConceptId,
      statement: 'Article 14 guarantees equality before the law and equal protection of the laws to any person in India.',
      claimType: 'LEGAL_PROVISION',
      status: 'VERIFIED',
    });
    await attachEvidence({
      claimId: clm1.id,
      sourceId: primarySourceId,
      locator: 'Art. 14',
      excerpt: 'The State shall not deny to any person equality...',
    });

    await createClaim({
      conceptId: polityConceptId,
      statement: 'Article 14 permits reasonable classification satisfying intelligible differentia and rational nexus.',
      claimType: 'RULE',
      scopeConditions: 'Classification must not be arbitrary.',
      status: 'VERIFIED',
    });

    await createClaim({
      conceptId: polityConceptId,
      statement: 'Article 361 provides personal immunity to the President and State Governors from criminal proceedings during their term.',
      claimType: 'EXCEPTION',
      status: 'VERIFIED',
    });

    await createClaim({
      conceptId: polityConceptId,
      statement: 'State of W.B. v. Anwar Ali Sarkar (1952) established the two-pronged nexus test; E.P. Royappa v. State of T.N. (1974) introduced the non-arbitrariness doctrine.',
      claimType: 'CHRONOLOGICAL_CLAIM',
      status: 'VERIFIED',
    });
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should assemble a concept with minimal composable blocks without rigid template bloat', async () => {
    const assembly = await assembleConceptTeaching({
      conceptId: minimalConceptId,
      blocks: [
        {
          conceptId: minimalConceptId,
          type: 'CORE_IDEA',
          title: 'The Core Prohibition',
          body: 'Article 17 completely abolishes untouchability in all forms and makes its practice punishable by law.',
        },
        {
          conceptId: minimalConceptId,
          type: 'EXAM_NOTE',
          title: 'Exam Trap',
          body: 'Neither the Constitution nor the Protection of Civil Rights Act (1955) defines the term "Untouchability".',
        },
      ],
    });

    expect(assembly.blocksCount).toBe(2);
    const view = await getConceptTeachingView(minimalConceptId);
    expect(view.blocks.length).toBe(2);
    expect(view.status).toBe('CANONICAL');
  });

  it('2. should assemble a rich benchmark concept (Article 14) with multiple adaptive blocks', async () => {
    const assembly = await assembleConceptTeaching({
      conceptId: polityConceptId,
      blocks: [
        {
          conceptId: polityConceptId,
          type: 'CORE_IDEA',
          title: 'What Article 14 Guarantees',
          body: 'Article 14 prevents the State from treating individuals arbitrarily. It commands that equals must be treated equally, while unequals may be treated differently to achieve substantive justice.',
        },
        {
          conceptId: polityConceptId,
          type: 'WHY_IT_MATTERS',
          title: 'Why Mathematical Equality Fails',
          body: 'Treating a billionaire and a daily-wage laborer identically under a flat tax would produce deep injustice. Article 14 recognizes that formal sameness can perpetuate structural inequality.',
        },
        {
          conceptId: polityConceptId,
          type: 'MECHANISM',
          title: 'The Two-Pronged Reasonable Classification Test',
          body: 'In Anwar Ali Sarkar (1952), the Supreme Court held that for classification to be constitutional:\n1. **Intelligible Differentia**: The grouping must be based on a clear, understandable characteristic distinguishing those grouped from others left out.\n2. **Rational Nexus**: The differentia must have a direct, logical connection to the objective sought by the statute.',
        },
        {
          conceptId: polityConceptId,
          type: 'TIMELINE',
          title: 'Doctrinal Evolution (1952 → 1974)',
          body: '• **1952 (Anwar Ali Sarkar)**: Classical classification test.\n• **1974 (E.P. Royappa)**: Justice Bhagwati articulates that equality is a dynamic concept antithetical to arbitrariness.\n• **1978 (Maneka Gandhi)**: Procedure depriving personal liberty must be just, fair, and reasonable (reading Article 14 into Article 21).',
        },
        {
          conceptId: polityConceptId,
          type: 'EXCEPTION',
          title: 'Constitutional and Jurisdictional Exceptions',
          body: '• **Article 361**: The President and Governors are immune from court proceedings for official acts and criminal proceedings while in office.\n• **Foreign Diplomats**: Enjoy diplomatic immunity under international conventions.\n• **Article 31C**: Laws implementing DPSPs under Art 39(b)/(c) cannot be challenged for violating Article 14.',
        },
        {
          conceptId: polityConceptId,
          type: 'COMPARISON',
          title: 'Equality Before Law vs. Equal Protection of Laws',
          body: '| Dimension | Equality Before Law | Equal Protection of the Laws |\n| :--- | :--- | :--- |\n| **Origin** | British Common Law | American Constitution (14th Amendment) |\n| **Concept Type** | Negative (No special privileges) | Positive (Equal treatment under equal circumstances) |\n| **Application** | Subjection of all to ordinary law | Affirmative protection for disadvantaged groups |',
        },
        {
          conceptId: polityConceptId,
          type: 'MISCONCEPTION',
          title: 'Common Misconceptions',
          body: '❌ **Misconception**: Article 14 applies only to Indian citizens.\n✔️ **Fact**: Article 14 uses the word "any person", protecting foreign citizens, statutory corporations, and legal persons alike.',
        },
      ],
    });

    expect(assembly.blocksCount).toBe(7);
    const view = await getConceptTeachingView(polityConceptId);
    expect(view.blocks.length).toBe(7);
  });

  it('3. should support Analogy Safety with explicit intended insight and breakdown boundaries', async () => {
    await assembleConceptTeaching({
      conceptId: polityConceptId,
      blocks: [
        {
          conceptId: polityConceptId,
          type: 'INTUITION',
          title: 'The Traffic Light Analogy for Affirmative Action',
          body: 'Why does the law allow different rules for emergency vehicles vs. civilian cars?',
          analogyMetadata: {
            analogy: 'Giving ambulances priority at a green signal while stopping regular traffic.',
            intendedInsight: 'Differentiating between vehicles based on urgency (differentia) serves the legitimate goal of saving lives (rational nexus).',
            whereItBreaksDown: 'Unlike traffic lights where green is temporary, constitutional classifications often involve deep socioeconomic affirmative action programs that operate over decades.',
          },
        },
      ],
    });

    const view = await getConceptTeachingView(polityConceptId);
    const intuitionBlock = view.blocks.find((b) => b.type === 'INTUITION');
    expect(intuitionBlock).toBeDefined();
    expect(intuitionBlock?.body).toContain('Where Analogy Breaks Down');
  });

  it('4. should support mathematical formalization ONLY when justified (Economics concept)', async () => {
    // 1. Economics concept containing legitimate mathematical model
    await assembleConceptTeaching({
      conceptId: econConceptId,
      blocks: [
        {
          conceptId: econConceptId,
          type: 'CORE_IDEA',
          title: 'Credit Creation Principle',
          body: 'Commercial banks create credit money by lending out a portion of their customer deposits.',
        },
        {
          conceptId: econConceptId,
          type: 'MATHEMATICS',
          title: 'Formal Multiplier Model',
          body: 'Under fractional reserve banking, the theoretical money multiplier \\(M\\) is given by:\n\n\\[M = \\frac{1}{r}\\]\n\nwhere \\(r\\) is the reserve ratio (CRR + SLR). If \\(r = 0.10\\), then \\(M = 10\\).',
        },
        {
          conceptId: econConceptId,
          type: 'LIMITATION',
          title: 'Model Assumptions and Leakages',
          body: 'The \\(1/r\\) formula assumes zero cash drain (no currency holding by the public) and zero excess reserve holding by commercial banks.',
        },
      ],
    });

    const econView = await getConceptTeachingView(econConceptId);
    const mathBlock = econView.blocks.find((b) => b.type === 'MATHEMATICS');
    expect(mathBlock).toBeDefined();
    expect(mathBlock?.body).toContain('\\[M = \\frac{1}{r}\\]');

    // 2. Polity concept contains NO mathematics blocks
    const polityView = await getConceptTeachingView(polityConceptId);
    const polityMathBlock = polityView.blocks.find((b) => b.type === 'MATHEMATICS');
    expect(polityMathBlock).toBeUndefined();
  });

  it('5. should map canonical concepts to multiple distinct exam lenses without mutating truth', async () => {
    // 1. Apply RPSC RAS Lens
    const ras = await applyExamLens({
      examSlug: 'rpsc-ras',
      examName: 'RPSC Rajasthan Administrative Services',
      conductingBody: 'RPSC',
      conceptId: polityConceptId,
      syllabusUnit: 'GS Paper 3: Unit 1 (Indian Political System)',
      relevance: 'CORE',
      priority: 'MUST_MASTER',
      requiredDepth: 'ANALYTICAL_MAINS',
      questionStyle: '50-word analytical questions on Intelligible Differentia and 100-word questions on non-arbitrariness.',
      frequentTraps: 'Confusing "any person" with "citizens only"; forgetting the two prongs of classification.',
    });
    expect(ras.examSlug).toBe('rpsc-ras');

    // 2. Apply UPSC APFC Lens
    const apfc = await applyExamLens({
      examSlug: 'upsc-apfc',
      examName: 'UPSC Assistant Public Provident Fund Commissioner',
      conductingBody: 'UPSC',
      conceptId: polityConceptId,
      syllabusUnit: 'General Studies: Indian Polity and Constitution',
      relevance: 'HIGH',
      priority: 'HIGH_YIELD',
      requiredDepth: 'FACTUAL_RECALL',
      questionStyle: 'Statement-based elimination MCQs on constitutional articles and immunities.',
    });
    expect(apfc.examSlug).toBe('upsc-apfc');

    // 3. Apply IIBF DBF Lens
    const dbf = await applyExamLens({
      examSlug: 'iibf-dbf',
      examName: 'IIBF Diploma in Banking and Finance',
      conductingBody: 'IIBF',
      conceptId: polityConceptId,
      syllabusUnit: 'Legal & Regulatory Aspects of Banking: Constitutional Overview',
      relevance: 'BACKGROUND',
      priority: 'STANDARD',
      requiredDepth: 'OVERVIEW',
      questionStyle: 'Direct objective questions on state action under Article 12 and non-discrimination.',
    });
    expect(dbf.examSlug).toBe('iibf-dbf');

    const lenses = await getExamLensesForConcept(polityConceptId);
    expect(lenses.length).toBe(3);
  });

  it('6. should generate multiple derived revision representations from canonical knowledge', async () => {
    const revision = await generateRevisionLayers({
      conceptId: polityConceptId,
      oneMinuteBullets: [
        'Article 14 = Equality before law (UK, negative) + Equal protection (US, positive).',
        'Applies to ANY PERSON (citizens, foreigners, corporations).',
        'Reasonable classification allowed: Requires Intelligible Differentia + Rational Nexus.',
        'Royappa (1974): Equality is antithetical to arbitrariness.',
        'Exceptions: President/Governor immunity (Art 361), Foreign diplomats, DPSP laws (Art 31C).',
      ],
      trapPoints: [
        'Assuming Article 14 applies only to Indian citizens (It applies to ANY person).',
        'Assuming Article 14 prohibits all classification (It allows REASONABLE classification).',
        'Confusing Equality before law (British) with Equal Protection (American).',
      ],
      comparisonTableMarkdown:
        '| Feature | Equality before Law | Equal Protection of Laws |\n| :--- | :--- | :--- |\n| **Origin** | British Common Law | US 14th Amendment |\n| **Nature** | Negative obligation | Positive obligation |',
      mnemonicText: 'E-P-R: Equality (UK), Protection (US), Reasonable Nexus.',
    });

    expect(revision.revisionUnitsCreatedCount).toBe(4);

    const units = await getRevisionByConceptAndExam(polityConceptId);
    expect(units.length).toBe(4);

    const oneMin = units.find((u) => u.type === 'ONE_MINUTE_RECALL');
    expect(oneMin?.content).toContain('ANY PERSON');

    const trapSheet = units.find((u) => u.type === 'TRAP_SHEET');
    expect(trapSheet?.content).toContain('Trap 1');
  });

  it('7. should support progressive learner depth filtering (Beginner vs Standard vs Advanced)', async () => {
    const beginnerView = await getConceptTeachingView(polityConceptId, 'BEGINNER');
    const standardView = await getConceptTeachingView(polityConceptId, 'STANDARD');

    expect(beginnerView.blocks.length).toBeGreaterThan(0);
    expect(standardView.blocks.length).toBeGreaterThanOrEqual(beginnerView.blocks.length);
    expect(standardView.verifiedClaimsCount).toBe(4);
    expect(standardView.examLensesCount).toBe(3);
  });
});
