import { db } from '../db/client';
import { createDomain, createSubject } from '../knowledge/domain';
import { createTopic, createConcept, createConnection } from '../knowledge/concept';
import { registerSource, addSourceSection } from '../ingestion/source-registry';
import { createClaim, attachEvidence } from '../claims/claims';
import { assembleConceptTeaching } from '../knowledge/teaching-engine';
import { applyExamLens } from '../exams/exam-lens';
import { generateRevisionLayers } from '../revision/revision-generator';
import { createQuestion } from '../questions/questions';

/**
 * Seeds or synchronizes the complete Audited Article 14 Benchmark into the database.
 * Incorporates 2024 9-Judge Constitution Bench in Property Owners Association v. State of Maharashtra.
 */
export async function seedArticle14Benchmark() {
  // 1. Domain, Subject, Topic
  const domain = await db.domain.upsert({
    where: { slug: 'governance' },
    update: { name: 'Governance & Polity' },
    create: { slug: 'governance', name: 'Governance & Polity' },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'indian-polity' },
    update: {
      name: 'Indian Polity',
      domainId: domain.id,
      scopeStatement: 'Constitutional Architecture, Fundamental Rights, and Governance Systems',
    },
    create: {
      slug: 'indian-polity',
      name: 'Indian Polity',
      domainId: domain.id,
      scopeStatement: 'Constitutional Architecture, Fundamental Rights, and Governance Systems',
    },
  });

  const topic = await db.topic.upsert({
    where: {
      subjectId_slug: {
        subjectId: subject.id,
        slug: 'fundamental-rights',
      },
    },
    update: {
      title: 'Fundamental Rights (Part III)',
      description: 'Constitutional guarantees of liberty, equality, and protection against state overreach.',
    },
    create: {
      slug: 'fundamental-rights',
      title: 'Fundamental Rights (Part III)',
      subjectId: subject.id,
      description: 'Constitutional guarantees of liberty, equality, and protection against state overreach.',
    },
  });

  // 2. Canonical Concept: Article 14
  const concept = await db.concept.upsert({
    where: {
      topicId_slug: {
        topicId: topic.id,
        slug: 'article-14-equality',
      },
    },
    update: {
      title: 'Article 14: Equality Before the Law and Equal Protection of the Laws',
      shortDefinition:
        'Article 14 guarantees to every person equality before the law and the equal protection of the laws within the territory of India; it commands that equals must be treated equally while permitting reasonable classification, and prohibits arbitrary state action.',
      difficulty: 'INTERMEDIATE',
      status: 'CANONICAL',
    },
    create: {
      slug: 'article-14-equality',
      topicId: topic.id,
      title: 'Article 14: Equality Before the Law and Equal Protection of the Laws',
      shortDefinition:
        'Article 14 guarantees to every person equality before the law and the equal protection of the laws within the territory of India; it commands that equals must be treated equally while permitting reasonable classification, and prohibits arbitrary state action.',
      difficulty: 'INTERMEDIATE',
      status: 'CANONICAL',
    },
  });

  // 3. Related Concepts for Graph Connections
  const ruleOfLawConcept = await db.concept.upsert({
    where: {
      topicId_slug: {
        topicId: topic.id,
        slug: 'rule-of-law',
      },
    },
    update: { title: 'Rule of Law', shortDefinition: 'Supremacy of regular law over arbitrary power.' },
    create: { slug: 'rule-of-law', topicId: topic.id, title: 'Rule of Law', shortDefinition: 'Supremacy of regular law over arbitrary power.' },
  });

  const affirmativeActionConcept = await db.concept.upsert({
    where: {
      topicId_slug: {
        topicId: topic.id,
        slug: 'affirmative-action-art-15-16',
      },
    },
    update: { title: 'Affirmative Action (Articles 15 & 16)', shortDefinition: 'Substantive equality mechanisms for backward classes.' },
    create: { slug: 'affirmative-action-art-15-16', topicId: topic.id, title: 'Affirmative Action (Articles 15 & 16)', shortDefinition: 'Substantive equality mechanisms for backward classes.' },
  });

  const judicialReviewConcept = await db.concept.upsert({
    where: {
      topicId_slug: {
        topicId: topic.id,
        slug: 'judicial-review-art-13-32',
      },
    },
    update: { title: 'Judicial Review (Articles 13, 32 & 226)', shortDefinition: 'Power of the judiciary to invalidate unconstitutional state action.' },
    create: { slug: 'judicial-review-art-13-32', topicId: topic.id, title: 'Judicial Review (Articles 13, 32 & 226)', shortDefinition: 'Power of the judiciary to invalidate unconstitutional state action.' },
  });

  // Create Meaningful Cross-Domain Connections with Explicit "Why This Matters" Rationale
  await db.connection.deleteMany({ where: { sourceConceptId: concept.id } });

  await createConnection({
    sourceConceptId: concept.id,
    targetConceptId: ruleOfLawConcept.id,
    type: 'SHARED_PRINCIPLE',
    strength: 'DIRECT',
    explanation: 'WHY THIS MATTERS: Article 14 translates A.V. Dicey\'s Rule of Law into enforceable Indian constitutional law by guaranteeing that no person or authority is above ordinary law and that executive power cannot be exercised arbitrarily.',
  });

  await createConnection({
    sourceConceptId: concept.id,
    targetConceptId: affirmativeActionConcept.id,
    type: 'APPLICATION',
    strength: 'DIRECT',
    explanation: 'WHY THIS MATTERS: Articles 15 and 16 are not exceptions to Article 14, but are specialized, affirmative applications of Article 14\'s core command of substantive equality, designed to eliminate historical inequalities.',
  });

  await createConnection({
    sourceConceptId: concept.id,
    targetConceptId: judicialReviewConcept.id,
    type: 'CAUSAL_CONNECTION',
    strength: 'DIRECT',
    explanation: 'WHY THIS MATTERS: Without judicial review under Articles 13, 32, and 226, the guarantee of equality would be a mere declaration; judicial review provides the constitutional teeth to strike down arbitrary legislation and executive actions.',
  });

  // 4. Primary & Secondary Sources
  const primarySource = await db.source.upsert({
    where: { id: 'source-constitution-india' },
    update: { title: 'The Constitution of India', authorityTier: 'TIER_A_PRIMARY', sourceType: 'CONSTITUTION' },
    create: { id: 'source-constitution-india', title: 'The Constitution of India', authorityTier: 'TIER_A_PRIMARY', sourceType: 'CONSTITUTION', identifier: 'GOI-CONST-1950' },
  });

  const part3Section = await db.sourceSection.upsert({
    where: { id: 'section-part-3-fr' },
    update: { title: 'Part III — Fundamental Rights', sourceId: primarySource.id, sectionType: 'PART', locator: 'Arts. 12-35' },
    create: { id: 'section-part-3-fr', title: 'Part III — Fundamental Rights', sourceId: primarySource.id, sectionType: 'PART', locator: 'Arts. 12-35' },
  });

  const art14Section = await db.sourceSection.upsert({
    where: { id: 'section-art-14' },
    update: { title: 'Article 14 — Equality before law', sourceId: primarySource.id, parentId: part3Section.id, sectionType: 'ARTICLE', locator: 'Art. 14' },
    create: { id: 'section-art-14', title: 'Article 14 — Equality before law', sourceId: primarySource.id, parentId: part3Section.id, sectionType: 'ARTICLE', locator: 'Art. 14' },
  });

  const secondarySource = await db.source.upsert({
    where: { id: 'source-sc-judgments' },
    update: { title: 'Constitutional Law of India: Landmark Judgments Compendium', authorityTier: 'TIER_B_SCHOLARLY', sourceType: 'JUDGMENT' },
    create: { id: 'source-sc-judgments', title: 'Constitutional Law of India: Landmark Judgments Compendium', authorityTier: 'TIER_B_SCHOLARLY', sourceType: 'JUDGMENT' },
  });

  // 5. Clean existing content blocks, claims, questions, revision units for concept
  await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
  await db.claim.deleteMany({ where: { conceptId: concept.id } });
  await db.question.deleteMany({ where: { conceptId: concept.id } });
  await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
  await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });

  // 6. Register 20 Audited Canonical Claims with Full Traceability Provenance
  const propositions = [
    {
      stmt: 'Article 14 guarantees equality before the law and equal protection of the laws within the territory of India.',
      type: 'LEGAL_PROVISION',
      sourceId: primarySource.id,
      locator: 'Constitution of India, Art. 14',
      excerpt: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Article 14 protects "any person", extending to citizens, non-citizens, statutory corporations, and juristic entities.',
      type: 'RULE',
      sourceId: primarySource.id,
      locator: 'Constitution of India, Art. 14 text & General Clauses Act 1897',
      excerpt: '"person" encompasses both natural persons and legal/juristic persons.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Equality before the law is an expression reflecting British Common Law influence representing formal subjection to ordinary law.',
      type: 'COMPARISON',
      sourceId: secondarySource.id,
      locator: 'D.D. Basu Commentary on Const. of India, Art 14 analysis',
      excerpt: 'Equality before the law is of English origin derived from Dicey\'s concept of Rule of Law.',
      support: 'STRONG_SUPPORT',
    },
    {
      stmt: 'Equal protection of the laws is an expression reflecting American 14th Amendment influence representing equal treatment in like circumstances.',
      type: 'COMPARISON',
      sourceId: secondarySource.id,
      locator: 'D.D. Basu Commentary on Const. of India, Art 14 analysis',
      excerpt: 'Equal protection of the laws is of American origin (Section 1 of the 14th Amendment).',
      support: 'STRONG_SUPPORT',
    },
    {
      stmt: 'Indian constitutional equality doctrine synthesizes British and American historical influences into an independent indigenous framework.',
      type: 'PRINCIPLE',
      sourceId: secondarySource.id,
      locator: 'State of W.B. v. Anwar Ali Sarkar, (1952) SCR 284',
      excerpt: 'Our Constitution has adopted both phrases to ensure both absence of privilege and positive social justice.',
      support: 'STRONG_SUPPORT',
    },
    {
      stmt: 'Article 14 does not require identical treatment for all persons in all circumstances.',
      type: 'RULE',
      sourceId: secondarySource.id,
      locator: 'Chiranjit Lal Chowdhuri v. Union of India, (1950) SCR 869',
      excerpt: 'The guarantee against denial of equal protection does not mean that identically the same rules of law should be made applicable to all persons.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Article 14 prohibits arbitrary class legislation while permitting reasonable classification.',
      type: 'RULE',
      sourceId: secondarySource.id,
      locator: 'State of W.B. v. Anwar Ali Sarkar, (1952) SCR 284, para 12',
      excerpt: 'Article 14 forbids class legislation, but does not forbid reasonable classification for the purposes of legislation.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Reasonable classification requires an Intelligible Differentia distinguishing grouped persons from excluded persons.',
      type: 'MECHANISM',
      sourceId: secondarySource.id,
      locator: 'State of W.B. v. Anwar Ali Sarkar, (1952) SCR 284, para 14',
      excerpt: 'The classification must be founded on an intelligible differentia which distinguishes persons or things that are grouped together from others left out of the group.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Reasonable classification requires a Rational Nexus between the differentia and the statutory objective.',
      type: 'MECHANISM',
      sourceId: secondarySource.id,
      locator: 'State of W.B. v. Anwar Ali Sarkar, (1952) SCR 284, para 14',
      excerpt: 'That differentia must have a rational relation to the object sought to be achieved by the statute in question.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Both prongs of the classification test (Intelligible Differentia and Rational Nexus) must be satisfied cumulatively.',
      type: 'RULE',
      sourceId: secondarySource.id,
      locator: 'Ram Krishna Dalmia v. Justice S.R. Tendolkar, (1959) SCR 279',
      excerpt: 'The two conditions must both be satisfied for a classification to pass the test of permissible legislative differentiation.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'E.P. Royappa (1974) held that equality is a dynamic concept antithetical to arbitrariness.',
      type: 'PRINCIPLE',
      sourceId: secondarySource.id,
      locator: 'E.P. Royappa v. State of T.N., (1974) 4 SCC 3, para 85',
      excerpt: 'Equality is a dynamic concept with many aspects and dimensions... From a positivistic point of view, equality is antithetic to arbitrariness.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Maneka Gandhi (1978) integrated Article 14 into Article 21, requiring procedure depriving liberty to be non-arbitrary.',
      type: 'LEGAL_PROVISION',
      sourceId: secondarySource.id,
      locator: 'Maneka Gandhi v. Union of India, (1978) 1 SCC 248, para 56',
      excerpt: 'The procedure prescribed by law under Article 21 must not be arbitrary, fanciful or oppressive; it must be right and just and fair.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Shayara Bano (2017) recognized manifest arbitrariness as an independent ground to strike down primary legislation under Article 14.',
      type: 'INTERPRETATION',
      sourceId: secondarySource.id,
      locator: 'Shayara Bano v. Union of India, (2017) 9 SCC 1, para 101',
      excerpt: 'Manifest arbitrariness must be something done by the legislature capriciously, irrationally or without adequate determining principle.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'The non-arbitrariness doctrine expands the scope of Article 14 rather than wholly discarding classification analysis.',
      type: 'INTERPRETATION',
      sourceId: secondarySource.id,
      locator: 'Subramanian Swamy v. Director, CBI, (2014) 8 SCC 682, para 48',
      excerpt: 'The classification test and the test of non-arbitrariness are not mutually exclusive; they reinforce each other.',
      support: 'STRONG_SUPPORT',
    },
    {
      stmt: 'Article 361 provides personal procedural immunity to the President and Governors during their term of office.',
      type: 'RULE',
      sourceId: primarySource.id,
      locator: 'Constitution of India, Art. 361, cls. (1)-(4)',
      excerpt: 'The President, or the Governor of a State, shall not be answerable to any court for the exercise and performance of the powers and duties of his office.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Article 361 immunity is for the office; executive actions taken in the name of the President or Governor remain reviewable under Article 14.',
      type: 'RULE',
      sourceId: secondarySource.id,
      locator: 'Rameshwar Prasad (VI) v. Union of India, (2006) 2 SCC 1, para 173',
      excerpt: 'The personal immunity under Article 361 does not bar the court from examining the constitutional validity of the action taken in the name of the President or Governor.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Article 31C was introduced by the 25th Amendment (1971) to protect laws implementing Directive Principles in Articles 39(b) and 39(c).',
      type: 'CHRONOLOGICAL_CLAIM',
      sourceId: primarySource.id,
      locator: 'Constitution (Twenty-fifth Amendment) Act, 1971, Section 3',
      excerpt: 'Notwithstanding anything contained in article 13, no law giving effect to the policy of the State towards securing all or any of the principles laid down in clause (b) or clause (c) of article 39...',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Minerva Mills (1980) invalidated the 42nd Amendment expansion of Article 31C to all Directive Principles as a violation of the Basic Structure.',
      type: 'LEGAL_PROVISION',
      sourceId: secondarySource.id,
      locator: 'Minerva Mills v. Union of India, (1980) 3 SCC 625, paras 56-59',
      excerpt: 'To destroy the guarantees given by Part III in order purportedly to achieve the goals of Part IV is to destroy the harmony of the Constitution.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Property Owners Association v. State of Maharashtra (2024) confirmed that unamended Article 31C (protecting 39(b) and 39(c)) remains valid operative law.',
      type: 'LEGAL_PROVISION',
      sourceId: secondarySource.id,
      locator: 'Property Owners Association v. State of Maharashtra, 2024 INSC 834 (9-Judge Bench), paras 180-184',
      excerpt: 'Article 31C as it stood prior to the 42nd Amendment, and to the extent upheld in Kesavananda Bharati, continues to remain in force.',
      support: 'DEFINITIVE',
    },
    {
      stmt: 'Diplomatic immunity arises from international treaties and the Diplomatic Relations (Vienna Convention) Act 1972, not an internal Article 14 exception.',
      type: 'LEGAL_PROVISION',
      sourceId: primarySource.id,
      locator: 'Diplomatic Relations (Vienna Convention) Act, 1972, Section 2 & Schedule',
      excerpt: 'Gives domestic force of law to the Vienna Convention on Diplomatic Relations, 1961.',
      support: 'DEFINITIVE',
    },
  ];

  for (const p of propositions) {
    const claim = await createClaim({
      conceptId: concept.id,
      statement: p.stmt,
      claimType: p.type,
      importance: 'MUST_KNOW',
      confidence: 'ESTABLISHED_FACT',
      status: 'VERIFIED',
    });

    await attachEvidence({
      claimId: claim.id,
      sourceId: p.sourceId,
      locator: p.locator,
      excerpt: p.excerpt,
      evidentiarySupport: p.support,
    });
  }

  // 7. Assemble Composable Teaching Blocks with Beginner Mental Model & 2024 Article 31C Update
  await assembleConceptTeaching({
    conceptId: concept.id,
    blocks: [
      {
        conceptId: concept.id,
        type: 'CORE_IDEA',
        title: '1. What is Article 14? (The Core Constitutional Guarantee)',
        body: 'Article 14 of the Constitution of India provides:\n\n> *"The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."*\n\nIt guarantees two intertwined legal dimensions:\n1. **Equality Before the Law**: The principle that no individual is above the law and all persons are subject to the jurisdiction of ordinary courts (reflecting British Common Law influence).\n2. **Equal Protection of the Laws**: The principle that persons situated in similar circumstances must receive equal legal treatment, authorizing affirmative protection for disadvantaged groups (reflecting American 14th Amendment influence).\n\n*Historical Context*: While the two expressions reflect British and American traditions, Indian constitutional doctrine has developed independently through India\'s own constitutional text, socio-economic priorities, and Supreme Court jurisprudence.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        conceptId: concept.id,
        type: 'WHY_IT_MATTERS',
        title: '2. The Mental Model of Equality: Why Baseline Equality Permits Classification',
        body: 'To understand Article 14, think through this logical progression:\n\n1. **Baseline Equality**: Every person is presumed entitled to equal standing before the law.\n2. **Differential Treatment Requires Justification**: The State often must legislate for diverse groups (e.g., progressive taxation, disability accommodations, labor protections). Imposing identical mathematical rules on unequals produces severe injustice.\n3. **Permissibility of Classification**: Article 14 forbids arbitrary "class legislation" (creating arbitrary privileges), but permits "reasonable classification".\n4. **Constitutional Justification**: To be valid, differential treatment must satisfy the two-pronged nexus test established by the Supreme Court.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        conceptId: concept.id,
        type: 'MECHANISM',
        title: '3. The Two-Pronged Reasonable Classification Test (*Anwar Ali Sarkar, 1952*)',
        body: 'In *State of West Bengal v. Anwar Ali Sarkar (1952)*, the Supreme Court established that for a legislative classification to be constitutional, it must satisfy two cumulative conditions:\n\n1. **Intelligible Differentia**: The classification must be founded on a clear, understandable characteristic distinguishing persons or things grouped together from those left out.\n2. **Rational Nexus**: The differentia must have a direct, logical connection to the specific statutory objective sought to be achieved.\n\n*Example*: Setting different speed limits and axle-weight regulations for heavy commercial trucks versus civilian light passenger vehicles: axle weight is an intelligible differentia, and preserving highway infrastructure is a legitimate statutory objective bearing a direct rational nexus.',
        order: 3,
        visibility: 'STANDARD',
      },
      {
        conceptId: concept.id,
        type: 'TIMELINE',
        title: '4. Jurisprudential Evolution: Classification to Non-Arbitrariness (1952 → 2024)',
        body: 'Article 14 jurisprudence has evolved through landmark Supreme Court decisions:\n\n• **1952 — *State of West Bengal v. Anwar Ali Sarkar*** [JUDICIAL HOLDING]: Established the classical two-pronged classification doctrine.\n• **1974 — *E.P. Royappa v. State of Tamil Nadu*** [JUDICIAL HOLDING]: Justice P.N. Bhagwati articulated that equality is a dynamic concept antithetical to arbitrariness. Later Supreme Court jurisprudence expanded Article 14 review beyond traditional classification analysis to address arbitrary State action.\n• **1978 — *Maneka Gandhi v. Union of India*** [JUDICIAL HOLDING]: Integrated Article 14 into Article 21, establishing that any procedure depriving personal liberty must be "just, fair, and reasonable" (the *Golden Triangle* of Articles 14, 19, and 21).\n• **2017 — *Shayara Bano v. Union of India*** [INTERPRETIVE DEVELOPMENT]: Formally recognized **manifest arbitrariness** as an independent ground to strike down primary legislation under Article 14.\n• **2024 — *Property Owners Association v. State of Maharashtra*** [JUDICIAL HOLDING (9-Judge Bench)]: Conclusively affirmed that the unamended Article 31C (protecting laws giving effect to Articles 39(b) and 39(c)) remains valid operative law.\n\n*Doctrinal Relationship*: The classification test and the non-arbitrariness doctrine are complementary tools of judicial review; one does not completely discard the other.',
        order: 4,
        visibility: 'STANDARD',
      },
      {
        conceptId: concept.id,
        type: 'EXCEPTION',
        title: '5. Related Constitutional Immunities & Qualifications (Temporal Chain of Art. 31C)',
        body: '• **Article 361 (Presidential and Gubernatorial Procedural Immunity)**: The President and Governors are personally immune from court proceedings for official acts and cannot be subjected to criminal proceedings or arrest during their term. *State actions taken in their name remain fully amenable to judicial review under Article 14.*\n• **Article 31C (Complete Temporal Chain 1971 → 2024)**:\n  1. *25th Amendment (1971)*: Inserted Art. 31C protecting laws implementing DPSPs in Arts. 39(b) and 39(c) from Art. 14 challenges.\n  2. *Kesavananda Bharati (1973)*: Upheld 31C protection for 39(b)/(c), but struck down clause barring judicial review.\n  3. *42nd Amendment (1976)*: Attempted blanket expansion to ALL Directive Principles.\n  4. *Minerva Mills (1980)*: Struck down 42nd Amendment expansion for destroying the Basic Structure.\n  5. *Property Owners Association (2024)*: 9-judge bench conclusively clarified that unamended Art. 31C (protecting 39(b)/(c)) remains valid operative law.\n• **Diplomatic Immunity**: Foreign envoys and ambassadors enjoy immunity under international treaties and the domestic *Diplomatic Relations (Vienna Convention) Act, 1972*, rather than an internal constitutional exception.',
        order: 5,
        visibility: 'STANDARD',
      },
      {
        conceptId: concept.id,
        type: 'COMPARISON',
        title: '6. Equality Before the Law vs. Equal Protection of the Laws',
        body: '| Dimension | Equality Before the Law | Equal Protection of the Laws |\n| :--- | :--- | :--- |\n| **Historical Influence** | British Common Law (Dicey\'s Rule of Law) | American Constitution (14th Amendment) |\n| **Nature of Obligation** | Negative (Absence of special legal privileges) | Positive (Affirmative duty to ensure equal treatment in like circumstances) |\n| **Core Command** | No person is above the ordinary law of the land | Like should be treated alike, not unequals alike |\n| **Indian Synthesis** | Integrated into Article 14 to guarantee formal equality | Integrated into Article 14 to authorize substantive affirmative equality |',
        order: 6,
        visibility: 'STANDARD',
      },
      {
        conceptId: concept.id,
        type: 'MISCONCEPTION',
        title: '7. Common Examiner Traps & Misconceptions',
        body: '❌ **Misconception 1**: Article 14 applies only to Indian citizens.\n✔️ **Fact**: Article 14 uses the broad term "any person", protecting foreign citizens, statutory corporations, and juristic persons alike (contrast with citizen-only Articles 15, 16, 19, 29, 30).\n\n❌ **Misconception 2**: Article 14 forbids all legislative classification.\n✔️ **Fact**: Article 14 permits reasonable classification satisfying the intelligible differentia and rational nexus tests.\n\n❌ **Misconception 3**: Article 31C was completely wiped out by Minerva Mills (1980).\n✔️ **Fact**: The 9-judge bench in *Property Owners Association (2024)* confirmed that Article 31C remains operative law for Articles 39(b) and 39(c).',
        order: 7,
        visibility: 'STANDARD',
      },
    ],
  });

  // 8. Exam Lenses with Strict Evidence-Origin Rule
  await applyExamLens({
    examSlug: 'rpsc-ras',
    examName: 'RPSC Rajasthan Administrative Services',
    conductingBody: 'RPSC',
    conceptId: concept.id,
    syllabusUnit: 'GS Paper 3: Unit 1 (Indian Political System & Constitutional Foundations)',
    relevance: 'CORE',
    priority: 'MUST_MASTER',
    requiredDepth: 'ANALYTICAL_MAINS',
    evidenceOrigin: 'OBSERVED_FROM_PYQ',
    questionStyle: '50-word analytical questions on the two prongs of classification; 100-word questions on the E.P. Royappa non-arbitrariness doctrine.',
    frequentTraps: 'Confusing "any person" with citizen-only articles; omitting either prong of the Anwar Ali test.',
    notes: 'Direct PYQ Evidence Stored: RPSC RAS Mains 2018 GS Paper 3 (Q2) & 2021 GS Paper 3 (Q4) explicitly tested the two prongs of reasonable classification.',
  });

  await applyExamLens({
    examSlug: 'upsc-apfc',
    examName: 'UPSC Assistant Public Provident Fund Commissioner',
    conductingBody: 'UPSC',
    conceptId: concept.id,
    syllabusUnit: 'General Studies: Indian Polity, Constitution & Administrative Law',
    relevance: 'HIGH',
    priority: 'HIGH_YIELD',
    requiredDepth: 'FACTUAL_RECALL',
    evidenceOrigin: 'INFERRED_FROM_PATTERN',
    questionStyle: 'Multi-statement elimination MCQs on constitutional articles, personal scope ("any person"), immunities under Art. 361, and the Minerva Mills / 2024 limitation on Art. 31C.',
    frequentTraps: 'Assuming Article 31C covers all DPSPs instead of strictly 39(b) and 39(c).',
    notes: 'Inferred from UPSC standard polity MCQ statement-combination testing patterns.',
  });

  await applyExamLens({
    examSlug: 'iibf-dbf',
    examName: 'IIBF Diploma in Banking and Finance',
    conductingBody: 'IIBF',
    conceptId: concept.id,
    syllabusUnit: 'Legal & Regulatory Aspects of Banking: Module A (Regulatory Framework of Banking)',
    relevance: 'BACKGROUND',
    priority: 'STANDARD',
    requiredDepth: 'OVERVIEW',
    evidenceOrigin: 'GENERAL_EXAM_STRATEGY',
    questionStyle: 'Direct objective MCQs on definition of State under Article 12, public sector bank accountability, and legal person rights under Article 14.',
    frequentTraps: 'Assuming commercial banks are outside constitutional oversight (Public sector banks are State under Art 12 and bound by Art 14).',
    notes: 'Audited DBF Scope: Constitutional law forms introductory Module A context for banking regulation; focus is on non-discriminatory statutory treatment.',
  });

  // 9. Revision Representations
  await generateRevisionLayers({
    conceptId: concept.id,
    oneMinuteBullets: [
      'Article 14 = Equality before law (UK influence / negative) + Equal protection of laws (US influence / positive).',
      'Applies to "ANY PERSON" (citizens, non-citizens, statutory corporations, juristic persons).',
      'Classification Test (Anwar Ali, 1952) = Intelligible Differentia + Rational Nexus (cumulative).',
      'Non-Arbitrariness (Royappa 1974, Shayara Bano 2017) = Equality is antithetical to arbitrariness.',
      'Immunities: Art. 361 (President/Governor personal & criminal immunity; state acts remain reviewable).',
      'Art. 31C (1971 → Minerva Mills 1980 → Property Owners 2024): Operative protection strictly for Arts. 39(b) and 39(c).',
    ],
    trapPoints: [
      'Conflating "any person" (Art 14) with "citizens only" (Arts 15, 16, 19, 29, 30).',
      'Believing Article 14 forbids all legislative classification (It allows reasonable classification).',
      'Assuming Article 31C was completely voided (Property Owners Association 2024 confirmed it survives for 39(b)/(c)).',
      'Assuming Article 361 shields executive actions taken in the President\'s name from judicial review.',
    ],
    comparisonTableMarkdown:
      '| Feature | Equality Before the Law | Equal Protection of the Laws |\n| :--- | :--- | :--- |\n| **Historical Influence** | British Common Law (Dicey) | US 14th Amendment |\n| **Nature of Obligation** | Negative obligation (No special privilege) | Positive obligation (Equal treatment in like circumstances) |\n| **Core Command** | Subjection of all to ordinary law | Like should be treated alike |',
  });

  // 10. Actual Stored PYQs & Active Recall Questions
  const clm1 = await db.claim.findFirstOrThrow({ where: { conceptId: concept.id, statement: { contains: 'territory of India' } } });
  const clm2 = await db.claim.findFirstOrThrow({ where: { conceptId: concept.id, statement: { contains: 'Intelligible Differentia' } } });
  const clm5 = await db.claim.findFirstOrThrow({ where: { conceptId: concept.id, statement: { contains: 'Property Owners Association' } } });

  // RPSC RAS Actual Stored PYQ (2018 GS Paper 3)
  await createQuestion({
    conceptId: concept.id,
    claimId: clm2.id,
    type: 'SHORT_ANSWER',
    difficulty: 'LEVEL_3_DISTINCTION',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'GS Paper 3',
    pyqStage: 'MAINS',
    stem: '[RPSC RAS Mains 2018] Explain the two essential conditions required for a valid legislative classification under Article 14 of the Constitution of India. (50 words)',
    correctAnswer: 'Under State of W.B. v. Anwar Ali Sarkar (1952), a valid classification requires two cumulative conditions: 1. Intelligible Differentia (a clear distinguishing characteristic between those grouped and those excluded), and 2. Rational Nexus (a direct logical connection between that differentia and the statutory objective).',
    explanation: 'The answer directly tests the two prongs of reasonable classification established in Anwar Ali Sarkar (1952).',
  });

  // Level 1 Diagnostic Question
  await createQuestion({
    conceptId: concept.id,
    claimId: clm1.id,
    type: 'MCQ_SINGLE',
    difficulty: 'LEVEL_1_FACTUAL',
    stem: 'Who is entitled to the protection of equality before the law and equal protection of the laws under Article 14 of the Constitution of India?',
    options: JSON.stringify([
      'Indian citizens only',
      'Citizens of India and permanent residents only',
      'Any person (including citizens, foreigners, statutory corporations, and legal persons) within the territory of India',
      'Natural persons residing in India only, excluding juristic entities',
    ]),
    correctAnswer: 'Any person (including citizens, foreigners, statutory corporations, and legal persons) within the territory of India',
    explanation: 'Article 14 explicitly employs the universal term "any person", extending constitutional protection to foreign citizens, statutory corporations, and juristic entities alike within the territory of India. This contrasts with citizen-exclusive rights such as Articles 15, 16, 19, 29, and 30.',
    trapExplanation: 'Examiners often test whether candidates confuse Article 14 with Articles 15 and 16, which explicitly restrict their protections to "citizens".',
  });

  // Level 5 Diagnostic Question (Updated with 2024 9-judge bench)
  await createQuestion({
    conceptId: concept.id,
    claimId: clm5.id,
    type: 'MCQ_SINGLE',
    difficulty: 'LEVEL_5_ELIMINATION',
    stem: 'Consider the following statements regarding the current constitutional standing of Article 31C:\n1. The 42nd Amendment expansion of Article 31C to all Directive Principles was invalidated in Minerva Mills (1980).\n2. A 9-judge Constitution Bench in Property Owners Association (2024) confirmed that Article 31C protection continues to apply to laws giving effect to Articles 39(b) and 39(c).\nWhich of the statements given above is/are correct?',
    options: JSON.stringify([
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2',
    ]),
    correctAnswer: 'Both 1 and 2',
    explanation: 'Minerva Mills (1980) struck down the blanket 42nd Amendment expansion to all DPSPs. The 9-judge bench in Property Owners Association v. State of Maharashtra (2024) conclusively clarified that the pre-42nd Amendment Article 31C (protecting laws giving effect to Articles 39(b) and 39(c) as upheld in Kesavananda Bharati) remains valid, operative constitutional law.',
    trapExplanation: 'Candidates often believe that Minerva Mills voided Article 31C entirely; the 2024 9-judge bench settled that it survives for Articles 39(b) and 39(c).',
  });

  return concept;
}
