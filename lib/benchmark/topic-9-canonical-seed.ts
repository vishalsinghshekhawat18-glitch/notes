import { db } from '../db/client';
import { executePhase6ControlledIngestion } from '../ingestion/polity-pdf-ingestor';
import { seedTopic9SemanticInventory, TOPIC_9_SEMANTIC_UNITS } from '../ingestion/semantic-coverage';

export interface ConceptSeedDefinition {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  semanticUnitIds: string[];
  beneficiaryScope: {
    wording: string;
    practicalScope: string;
    qualifications: string;
    examTrap: string;
  };
  claims: Array<{
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: 'ESTABLISHED_FACT' | 'INTERPRETATION' | 'INFERENCE';
    confidence: 'HIGH' | 'MEDIUM' | 'DEBATED';
    scopeConditions?: string;
    evidenceLocator: string;
    verbatimQuote?: string;
  }>;
  contentBlocks: Array<{
    type: string;
    title?: string;
    body: string;
    order: number;
    visibility: 'STANDARD' | 'DEEP_DIVE' | 'ADVANCED_REFERENCE';
    analogyMetadata?: {
      analogy: string;
      intendedInsight: string;
      whereItBreaksDown: string;
    };
  }>;
  examMappings: Array<{
    examCode: 'UPSC_CSE' | 'RPSC_RAS' | 'IIBF_DBF';
    examName: string;
    relevance: 'CORE_HIGH_YIELD' | 'SECONDARY' | 'BACKGROUND';
    weightage: 'HIGH' | 'MEDIUM' | 'LOW';
    syllabusSection: string;
    examNotes: string;
  }>;
  revisionUnits: Array<{
    tier: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    timeBudgetSeconds: number;
    summary: string;
    keyTakeaways: string[];
    order: number;
  }>;
  questions: Array<{
    stem: string;
    type: 'CONCEPTUAL' | 'APPLICATION' | 'ANALYTICAL';
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    explanation: string;
    options: Array<{
      text: string;
      isCorrect: boolean;
      distractorExplanation?: string;
    }>;
  }>;
}

export const TOPIC_9_CANONICAL_CONCEPTS: ConceptSeedDefinition[] = [
  // 1. Part III Overview
  {
    id: 'CON-T9-01',
    slug: 'part-3-overview-nature-of-fundamental-rights',
    title: 'Part III Overview & Nature of Fundamental Rights',
    shortDefinition:
      'Part III of the Indian Constitution (Articles 12–35), known as the Magna Carta of India, guarantees justifiable basic political and civil rights against State encroachment.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T9-01', 'SEM-T9-02', 'SEM-T9-03'],
    beneficiaryScope: {
      wording: 'Divided across Articles (Persons vs Citizens)',
      practicalScope: 'Civil and political rights guaranteed against State encroachment.',
      qualifications: 'Articles 15, 16, 19, 29, 30 are citizen-only; Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, 28 apply to all persons.',
      examTrap: 'Assuming all Part III rights apply universally to foreigners or companies.',
    },
    claims: [
      {
        id: 'CLM-T9-01.1',
        statement: 'Part III of the Constitution (Articles 12 to 35) is termed the Magna Carta of India.',
        claimType: 'HISTORICAL_CLAIM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 62 (Printed p. 56)',
        verbatimQuote: 'Part-3 is known as the Magna Carta of India. Magna Carta is the first written document of Fundamental Rights issued in 1215 in England.',
      },
      {
        id: 'CLM-T9-01.2',
        statement: 'Fundamental Rights differ from Natural and Human Rights by being constitutionally codified, enforceable against the State, and subject to reasonable constitutional restrictions.',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 62 (Printed p. 56)',
      },
      {
        id: 'CLM-T9-01.3',
        statement: 'The Indian Constitution currently guarantees 6 broad categories of Fundamental Rights following the deletion of the Right to Property by the 44th Amendment Act 1978.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 62 (Printed p. 56)',
      },
      {
        id: 'CLM-T9-01.4',
        statement: 'Fundamental Rights operate primarily as Negative Obligations (restraints on State power, e.g. Arts 14, 15, 21), with select Positive Obligations (mandating State provision, e.g. Art 21A free education).',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 62 (Printed p. 56)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Fundamental Rights Exist',
        body: 'Fundamental Rights represent the basic civic charter securing individual liberty, equality, and human dignity against arbitrary majoritarian or executive tyranny. They establish a "government of laws and not of men".',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'CONSTITUTIONAL_TEXT',
        title: '6 Categories of Guaranteed Rights',
        body: '1. Right to Equality (Arts 14–18)\n2. Right to Freedom (Arts 19–22)\n3. Right against Exploitation (Arts 23–24)\n4. Right to Freedom of Religion (Arts 25–28)\n5. Cultural and Educational Rights (Arts 29–30)\n6. Right to Constitutional Remedies (Art 32).\n\n*(Note: Right to Property under Arts 19(1)(f) and 31 was deleted by the 44th Amendment 1978 and relocated to Article 300A in Part XII)*.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Negative Restraints vs Positive Mandates',
        body: 'Most Fundamental Rights are negative prohibitions telling the State what it CANNOT do (e.g. Art 14: "The State shall not deny...", Art 15: "The State shall not discriminate..."). Conversely, Article 21A imposes a positive duty on the State to provide free and compulsory education.',
        order: 3,
        visibility: 'STANDARD',
        analogyMetadata: {
          analogy: 'A constitutional shield held by the individual against the sword of sovereign authority.',
          intendedInsight: 'Rights are inherent limitations on State power, not privileges granted by the government of the day.',
          whereItBreaksDown: 'Unlike an absolute shield, Fundamental Rights are not absolute and are subject to constitutional reasonable restrictions.',
        },
      },
      {
        type: 'COMPARISON',
        title: 'Applicability Matrix: Citizens vs All Persons',
        body: '| Beneficiary Scope | Articles Guaranteed | Key Exclusions |\n| :--- | :--- | :--- |\n| **Exclusively Indian Citizens** | **Articles 15, 16, 19, 29, 30** | Non-citizens, foreign corporations cannot invoke these |\n| **All Persons (Citizens + Foreigners)** | **Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, 28** | Enemy aliens excluded from Art 22(1)-(2) protections |',
        order: 4,
        visibility: 'DEEP_DIVE',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Indian Constitution — Historical Underpinnings, Evolution, Features, Amendments.',
        examNotes: 'Focus on constitutionalism, negative vs positive rights, and distinction between Part III and Part IV.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Indian Political System & Constitution.',
        examNotes: 'Direct questions on 6 categories, 44th Amendment impact, and Magna Carta historical origins.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'LOW',
        syllabusSection: 'Legal & Regulatory Aspects of Banking: Constitutional framework.',
        examNotes: 'Basic awareness of constitutional supremacy and applicability of fundamental rights to statutory corporations.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Part III Overview Rapid Pegs:\n• Magna Carta of India (Arts 12–35, 6 Categories).\n• Citizen-Only: Arts 15, 16, 19, 29, 30; All Persons: Arts 14, 20-28.\n• Property deleted by 44th Amd 1978 (now Art 300A in Part XII).',
        keyTakeaways: ['Magna Carta of India (Arts 12–35)', 'Citizen-Only vs Universal Rights Matrix', '44th Amendment Property transition to Art 300A'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Part III originated from Magna Carta (1215) and US Bill of Rights (1791). Codifies negative obligations on State to secure civil liberties. Enforceable directly via Supreme Court (Art 32) and High Courts (Art 226). Rights are not absolute but subject to reasonable restrictions.',
        keyTakeaways: ['Magna Carta 1215', 'Rights are justifiable under Art 32', 'Not absolute: subject to reasonable restrictions'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Complete structural framework of Part III: General provisions (Arts 12–13), Equality (14–18), Freedom (19–22), Exploitation (23–24), Religion (25–28), Culture (29–30), Property (31/300A), Remedies (32), and Limitations (33–35).',
        keyTakeaways: ['Full Article Structure 12–35', 'Enforceability via Supreme Court & High Courts', 'Basic structure status'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Which of the following Fundamental Rights in Part III of the Indian Constitution is available ONLY to Indian citizens?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'Articles 15, 16, 19, 29, and 30 are available exclusively to Indian citizens. Article 14, 20, 21, and 25 are available to all persons (both citizens and foreigners).',
        options: [
          { text: 'Article 14 (Equality before law)', isCorrect: false, distractorExplanation: 'Article 14 applies to any person.' },
          { text: 'Article 19 (Six Democratic Freedoms)', isCorrect: true },
          { text: 'Article 21 (Protection of life and personal liberty)', isCorrect: false, distractorExplanation: 'Article 21 applies to any person.' },
          { text: 'Article 25 (Freedom of conscience and religion)', isCorrect: false, distractorExplanation: 'Article 25 applies to all persons.' },
        ],
      },
    ],
  },

  // 2. Article 12 — Definition of State
  {
    id: 'CON-T9-02',
    slug: 'article-12-definition-of-state',
    title: 'Article 12 — Definition of State & Instrumentalities',
    shortDefinition:
      'Article 12 defines the term "State" for Part III enforcement, encompassing Union/State executives and legislatures, local authorities, statutory instrumentalities, and the administrative side of the Judiciary.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T9-04', 'SEM-T9-05'],
    beneficiaryScope: {
      wording: 'Defines the Duty-Bearer (the "State")',
      practicalScope: 'Applies to all authorities against whom Part III Fundamental Rights can be enforced.',
      qualifications: 'Includes statutory bodies, PSBs, government companies under deep state control; excludes purely private bodies without state control.',
      examTrap: 'Assuming BCCI or private un-aided schools are "State" under Art 12, or that judicial orders can be challenged as State action via Art 32.',
    },
    claims: [
      {
        id: 'CLM-T9-02.1',
        statement: 'Article 12 defines "State" to include: (1) Government and Parliament of India, (2) Government and Legislature of each State, (3) all local authorities (Panchayats, Municipalities, Port Trusts), and (4) other authorities within India or under Union control.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 63 (Printed p. 57)',
        verbatimQuote: 'Article 12: Definition of State for the purposes of Part III.',
      },
      {
        id: 'CLM-T9-02.2',
        statement: 'In Ajay Hasia v. Khalid Mujib (1981), the Supreme Court established a 6-factor test to determine if a body is an instrumentality or agency of the State under "Other Authorities".',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 63 (Printed p. 57)',
      },
      {
        id: 'CLM-T9-02.3',
        statement: 'In Zee Telefilms v. Union of India (2005), the Supreme Court held that the Board of Control for Cricket in India (BCCI) is not "State" under Article 12 due to lack of deep and pervasive State financial and administrative control.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 63 (Printed p. 57)',
      },
      {
        id: 'CLM-T9-02.4',
        statement: 'Under Article 12, the Judiciary operates in a dual capacity: on its administrative side (recruitment, staff service rules), it is "State"; on its judicial side, judicial decrees cannot be challenged as State violations of Part III via Article 32 writ against the judge (Naresh Mirajkar 1967, Rupa Ashok Hurra 2002).',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 63 (Printed p. 57)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Purpose of Article 12: Identifying the Duty-Bearer',
        body: 'Because Fundamental Rights are primarily shields against sovereign power, Article 12 specifies precisely which entities are legally bound not to violate them.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Ajay Hasia 6-Factor Instrumentality Test',
        body: '1. Entire share capital held by Government\n2. Financial assistance meeting almost entire expenditure\n3. Monopoly status conferred or protected by State\n4. Deep and pervasive State control\n5. Functions of public importance closely related to governmental functions\n6. Transfer of a government department to a corporation.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_ANALYSIS',
        title: 'Dual Status of the Judiciary & Autonomous Bodies',
        body: '**Is the Judiciary "State"?**\n• **Administrative Side**: YES (rules, staff appointments, registry tenders are subject to writ jurisdiction under Art 32/226).\n• **Judicial Side**: NO (judicial orders of a competent court cannot be challenged via Art 32 writ petition claiming the judge violated Part III; remedy lies in appellate review or curative petition under Art 137/142 — *Naresh Mirajkar 1967*, *Rupa Hurra 2002*).\n\n**Private Bodies Performing Public Functions**:\n• Statutory bodies (LIC, ONGC, SAIL, SBI) = State.\n• Private autonomous bodies (BCCI, NCERT) = Outside Art 12 (*Zee Telefilms 2005*).',
        order: 3,
        visibility: 'DEEP_DIVE',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Executive and Judiciary structure, statutory bodies.',
        examNotes: 'Questions frequently test whether private bodies performing public functions or the Judiciary on its administrative side qualify as State.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Indian Constitution & Administrative Law.',
        examNotes: 'Direct questions on Ajay Hasia tests and Rajasthan SEB v. Mohan Lal ruling.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Legal Framework: Public Sector Banks as State under Article 12.',
        examNotes: 'PSBs and RBI are instrumentalities of State under Article 12, making writ jurisdiction under Art 32/226 directly applicable to service and administrative actions.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 12 Rapid Pegs:\n• 4 Limbs: Union/State Govts, Parliaments/Assemblies, Local & Other Authorities.\n• Ajay Hasia 6-Factor Test: Deep/pervasive state control = State (PSBs/LIC = State; BCCI ≠ State).\n• Judiciary Dual Role: Administrative side = State; Judicial decrees ≠ State (appeals only).',
        keyTakeaways: ['4 Limbs of State', 'Ajay Hasia 6-Factor Test (PSBs = State, BCCI ≠ State)', 'Judiciary: Admin side = State; Judicial orders ≠ State'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 12 establishes the jurisdictional scope of Part III. "Other authorities" includes statutory corporations and instrumentalities meeting financial, functional, and administrative control tests. Judiciary is State administratively, but judicial decrees cannot be challenged via Art 32.',
        keyTakeaways: ['Ajay Hasia v. Khalid Mujib (1981)', 'Deep and pervasive state control test', 'Judiciary: administrative side is State, judicial side debated'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of Article 12: Historical expansion from restrictive ejusdem generis in University of Madras to liberal instrumentality doctrine in Electricity Board Rajasthan, Ajay Hasia, and Zee Telefilms.',
        keyTakeaways: ['University of Madras (1954)', 'Rajasthan SEB (1967)', 'R.D. Shetty (1979)', 'Ajay Hasia (1981)', 'Zee Telefilms (2005)'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Can a writ petition under Article 32 be filed against a High Court judge claiming that their judicial decree on the bench violated the petitioner Fundamental Rights?',
        type: 'APPLICATION',
        difficulty: 'HARD',
        explanation: 'In Naresh Shridhar Mirajkar (1967) and Rupa Ashok Hurra (2002), the Supreme Court ruled that a judicial order of a competent court cannot be challenged as a violation of Fundamental Rights under Article 32. The remedy against a judicial decree lies exclusively in appeal, review, or curative petition.',
        options: [
          { text: 'Yes, because the judiciary is a branch of the State under Article 12.', isCorrect: false, distractorExplanation: 'The judiciary is State only on its administrative side, not in its judicial decrees.' },
          { text: 'No, judicial decrees cannot be challenged via Article 32 writ petitions; remedy lies in appeal, review, or curative petition.', isCorrect: true },
          { text: 'Yes, but only with prior sanction of the President of India.', isCorrect: false, distractorExplanation: 'No Presidential sanction exists for writ petitions.' },
          { text: 'Only if the High Court judge was sitting as a single bench.', isCorrect: false, distractorExplanation: 'The principle applies regardless of bench strength.' },
        ],
      },
    ],
  },

  // 3. Article 13 — Judicial Review & Constitutional Doctrines
  {
    id: 'CON-T9-03',
    slug: 'article-13-judicial-review-doctrines',
    title: 'Article 13 — Judicial Review & Constitutional Doctrines',
    shortDefinition:
      'Article 13 invalidates pre- and post-constitutional laws inconsistent with Fundamental Rights and establishes the constitutional foundation for judicial review through the Doctrines of Severability, Eclipse, and Waiver.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T9-06', 'SEM-T9-07', 'SEM-T9-08'],
    beneficiaryScope: {
      wording: 'Inconsistency/Voidness threshold on all Laws',
      practicalScope: 'Operates as an invalidation mechanism over pre- and post-constitutional legislation.',
      qualifications: 'Pre-constitutional laws (13(1)) are dormant/eclipsed; Post-constitutional laws (13(2)) are void ab initio. Citizens cannot waive Part III rights.',
      examTrap: 'Assuming a post-constitutional law violating Part III remains dormant like pre-constitutional laws. It is stillborn / void ab initio.',
    },
    claims: [
      {
        id: 'CLM-T9-03.1',
        statement: 'Article 13(1) renders pre-constitutional laws void to the extent of inconsistency with Part III, while Article 13(2) prohibits the State from making any post-constitutional law abridging Part III rights (rendering them void ab initio).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 64 (Printed p. 58)',
      },
      {
        id: 'CLM-T9-03.2',
        statement: 'Under the Doctrine of Severability, if an invalid provision of an Act can be severed without affecting the surviving legislative intent, only the offending provision is declared void (A.K. Gopalan 1950, R.M.D.C. 1957).',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 64 (Printed p. 58)',
      },
      {
        id: 'CLM-T9-03.3',
        statement: 'Under the Doctrine of Eclipse (Bhikaji Narayan 1955), a pre-constitutional law violating Part III is not dead ab initio but remains dormant/shadowed, becoming active again if the constitutional limitation is removed.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 64 (Printed p. 58)',
      },
      {
        id: 'CLM-T9-03.4',
        statement: 'In Basheshar Nath v. CIT (1959), the Supreme Court ruled that an Indian citizen cannot waive any Fundamental Right, as Part III rights are matters of public policy.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 64 (Printed p. 58)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Article 13 as the Guardian Clause',
        body: 'Article 13 is the constitutional gatekeeper: it gives teeth to Fundamental Rights by ensuring any conflicting legislative or executive measure is null and void.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Doctrinal Triptych: Severability, Eclipse, and Waiver',
        body: '1. **Severability**: Blue pencil test — prune the diseased branch, preserve the tree.\n2. **Eclipse**: Pre-constitutional law is shadowed, not dead; a constitutional amendment can revive it.\n3. **Waiver**: Fundamental Rights cannot be surrendered by private consent in India (*Basheshar Nath 1959*).',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Judicial Review, Constitutional doctrines, Basic Structure.',
        examNotes: 'Distinction between void ab initio (13(2)) vs dormant shadow (13(1)) is a classic prelims/mains trap.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Constitutional Law & Doctrines.',
        examNotes: 'Short 20-word and 50-word questions on Doctrine of Eclipse and Doctrine of Severability.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'LOW',
        syllabusSection: 'Legal Principles: Validity of subordinate banking legislation.',
        examNotes: 'Banking regulations and circulars must conform to Part III under Art 13(3) definition of "Law".',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 13 Rapid Pegs:\n• 13(1) vs 13(2): Pre-con laws = Eclipsed/shadowed; Post-con laws = Void ab initio (stillborn).\n• Severability: Blue-pencil test strikes void clause while preserving valid statute (RMDC 1957).\n• No Waiver: Indian citizens cannot waive Part III rights by consent (Basheshar Nath 1959).',
        keyTakeaways: ['13(1) Pre-con Eclipse vs 13(2) Post-con Void Ab Initio', 'Severability Blue-Pencil Test', 'Basheshar Nath: No Waiver of FRs'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 13(1) governs pre-con laws (Eclipse doctrine applies); 13(2) governs post-con laws (void ab initio); 13(3) defines Law broadly; Waiver prohibited in India unlike US.',
        keyTakeaways: ['13(1) vs 13(2)', 'Severability (RMDC case)', 'Bhikaji Narayan (1955)', 'Basheshar Nath (1959)'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of Article 13 doctrines, definition of law (including customs and ordinances), and the amendability debate leading to Kesavananda Bharati.',
        keyTakeaways: ['Article 13(4) vs 368', 'Pre-constitutional vs Post-constitutional distinction', 'Complete case lineage'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'According to the Supreme Court ruling in Basheshar Nath v. CIT (1959), can an Indian citizen waive their Fundamental Rights?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'In Basheshar Nath (1959), the Supreme Court held that Fundamental Rights are instituted for public benefit and constitutional order, and cannot be waived by an individual.',
        options: [
          { text: 'Yes, any Fundamental Right can be waived with informed written consent.', isCorrect: false, distractorExplanation: 'This is the US constitutional position, but expressly rejected in India.' },
          { text: 'No, Fundamental Rights in India cannot be waived by a citizen.', isCorrect: true },
          { text: 'Only economic rights under Article 19(1)(g) can be waived.', isCorrect: false, distractorExplanation: 'No Part III right can be waived in India.' },
          { text: 'Yes, but only with prior permission of the High Court.', isCorrect: false, distractorExplanation: 'No judicial waiver mechanism exists.' },
        ],
      },
    ],
  },

  // 4. Article 14 — Right to Equality & Non-Arbitrariness
  {
    id: 'CON-T9-04',
    slug: 'article-14-equality-non-arbitrariness',
    title: 'Article 14 — Right to Equality & Non-Arbitrariness',
    shortDefinition:
      'Article 14 commands that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India, prohibiting class legislation while permitting reasonable classification.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T9-09', 'SEM-T9-10', 'SEM-T9-11'],
    beneficiaryScope: {
      wording: '"any person"',
      practicalScope: 'Natural persons (citizens & foreigners), Legal/Juristic persons (corporations, registered companies).',
      qualifications: 'Foreigners can claim equality, but deportation procedures follow distinct reasonable classifications.',
      examTrap: 'Believing non-citizens or private corporations cannot enforce Article 14.',
    },
    claims: [
      {
        id: 'CLM-T9-04.1',
        statement: 'Article 14 combines negative equality (Equality before law, UK Dicey tradition) and positive equality (Equal protection of laws, US 14th Amendment tradition) applying to all persons.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 65 (Printed p. 59)',
      },
      {
        id: 'CLM-T9-04.2',
        statement: 'Under State of West Bengal v. Anwar Ali Sarkar (1952) and Ram Krishna Dalmia (1958), a valid legislative classification requires intelligible differentia and a rational nexus to the legislative objective.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 65 (Printed p. 59)',
      },
      {
        id: 'CLM-T9-04.3',
        statement: 'In E.P. Royappa (1974) and Maneka Gandhi (1978), the Supreme Court expanded Article 14 into a dynamic guarantee against State arbitrariness, establishing that equality and arbitrariness are sworn enemies.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 65 (Printed p. 59)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Core Concept: Equals Treated Equally, Unequals Treated Unequally',
        body: 'Article 14 does not demand universal mechanical uniformity; it forbids discriminatory favouritism while allowing affirmative support for disadvantaged groups.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Dual Evolution: Traditional Classification to Modern Non-Arbitrariness',
        body: '1. **Traditional Test**: Intelligible Differentia + Rational Nexus.\n2. **Modern Test**: Absence of arbitrariness, proportionality, and adherence to natural justice.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Equality jurisprudence, Golden Triangle (Arts 14, 19, 21).',
        examNotes: 'High-yield for Mains essays and answers on administrative fairness and statutory classifications.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Right to Equality & Administrative Law.',
        examNotes: 'Frequent 50-word questions on Intelligible Differentia and Rational Nexus.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'MEDIUM',
        syllabusSection: 'Banking Regulation: Non-discrimination in credit allocation and administrative actions.',
        examNotes: 'PSB recruitment, tender allocation, and recovery policies must satisfy non-arbitrariness under Article 14.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 14 Rapid Pegs:\n• Dual Origin: Equality Before Law (UK negative) + Equal Protection of Laws (US positive).\n• Traditional Test: Intelligible Differentia + Rational Nexus (Anwar Ali Sarkar 1952).\n• Dynamic Test: Non-Arbitrariness & Natural Justice (Royappa 1974 / Maneka 1978).',
        keyTakeaways: ['Equality Before Law vs Equal Protection', 'Intelligible Differentia + Rational Nexus', 'Royappa Non-Arbitrariness Doctrine'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 14 prohibits class legislation but permits classification based on intelligible differentia with rational nexus to legislative aim. Royappa (1974) added non-arbitrariness doctrine.',
        keyTakeaways: ['Equality Before Law vs Equal Protection', 'Anwar Ali Sarkar (1952)', 'E.P. Royappa (1974)', 'Maneka Gandhi (1978)'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Deep architectural dive into Article 14: Dicey Rule of Law, 14th Amendment substantive equality, Shayara Bano manifest arbitrariness doctrine, and 2024 Property Owners Association Article 31C benchmark.',
        keyTakeaways: ['Full doctrinal progression from 1950 to 2024', 'Manifest arbitrariness standard', 'Exceptions (Arts 31C, 359, 361, Diplomatic immunity)'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Which landmark Supreme Court decision introduced the "new dynamic doctrine" that equality is antithetical to arbitrariness under Article 14?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'In E.P. Royappa v. State of Tamil Nadu (1974), Justice P.N. Bhagwati articulated that equality is a dynamic concept which cannot be cribbed, cabined, and confined within traditional classification limits, and is antithetical to arbitrariness.',
        options: [
          { text: 'A.K. Gopalan v. State of Madras (1950)', isCorrect: false, distractorExplanation: 'A.K. Gopalan established a narrow, literal interpretation of Article 21.' },
          { text: 'E.P. Royappa v. State of Tamil Nadu (1974)', isCorrect: true },
          { text: 'Shankari Prasad v. Union of India (1951)', isCorrect: false, distractorExplanation: 'Shankari Prasad dealt with constitutional amendability of Part III.' },
          { text: 'Minerva Mills v. Union of India (1980)', isCorrect: false, distractorExplanation: 'Minerva Mills struck down the blanket extension of Article 31C.' },
        ],
      },
    ],
  },

  // 5. Articles 15 & 16 — Protective Discrimination & Reservations
  {
    id: 'CON-T9-05',
    slug: 'articles-15-16-reservations-protective-discrimination',
    title: 'Articles 15 & 16 — Protective Discrimination & Reservation Jurisprudence',
    shortDefinition:
      'Articles 15 and 16 prohibit discrimination on specified grounds while enabling affirmative action, creamy layer exclusions, EWS quotas (103rd Amendment), and reservation in public employment and education.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T9-12', 'SEM-T9-13', 'SEM-T9-14', 'SEM-T9-15', 'SEM-T9-16', 'SEM-T9-17', 'SEM-T9-18'],
    beneficiaryScope: {
      wording: '"any citizen"',
      practicalScope: 'Indian citizens exclusively.',
      qualifications: '5 prohibited grounds under Art 15 vs 7 prohibited grounds under Art 16 (adds descent & residence). Applies to State institutions, not private sector employment.',
      examTrap: 'Confusing grounds: residence is NOT a prohibited ground under Art 15 (States can reserve state-quota university seats by domicile), but IS a prohibited ground for central public jobs under Art 16.',
    },
    claims: [
      {
        id: 'CLM-T9-05.1',
        statement: 'Article 15 prohibits discrimination on 5 grounds (religion, race, caste, sex, place of birth), but permits special provisions for women/children (15(3)), SEBCs/SCs/STs (15(4)), educational admissions (15(5)), and EWS (15(6)).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 66 (Printed p. 60)',
      },
      {
        id: 'CLM-T9-05.2',
        statement: 'Article 16 guarantees equality of opportunity in public employment on 7 grounds (adding descent and residence), permitting reservations for inadequately represented backward classes (16(4)), promotions (16(4A)), carry-forward backlog (16(4B)), and EWS (16(6)).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 67 (Printed p. 61)',
      },
      {
        id: 'CLM-T9-05.3',
        statement: 'In Indra Sawhney v. Union of India (1992), the 9-judge bench upheld 27% OBC reservation, established the 50% ceiling cap, mandated the exclusion of the Creamy Layer, and barred reservation in promotions (later enabled for SC/ST via 77th Amendment).',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 70 (Printed p. 64)',
      },
      {
        id: 'CLM-T9-05.4',
        statement: 'In Janhit Abhiyan v. Union of India (2022), a 3:2 Constitution Bench upheld the 103rd Amendment Act 2019 providing 10% reservation to Economically Weaker Sections (EWS), holding that economic criteria alone can form the basis of affirmative action.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 69 (Printed p. 63)',
      },
      {
        id: 'CLM-T9-05.5',
        statement: 'In State of Punjab v. Davinder Singh (2024), a 7-judge Constitution Bench held that States have the constitutional authority to sub-classify SCs and STs to provide preferential reservation to more backward sub-groups within the quota.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 70 (Printed p. 64)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Substantive Equality vs Formal Equality',
        body: 'Articles 15 and 16 operationalize substantive equality by recognizing that treating unequals equally perpetuates inequality, justifying constitutional affirmative action.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 6-Step Chronological Ladder of Indian Reservation Jurisprudence',
        body: '• **Step 1: Champakam Dorairajan (1951)** $\\rightarrow$ Supreme Court strikes down communal G.O.; Parliament responds with **1st Amendment (1951)** inserting Article 15(4).\n• **Step 2: Indra Sawhney (1992)** $\\rightarrow$ 9-judge bench upholds 27% OBC quota; caps total reservation at 50%; mandates Creamy Layer exclusion; bars reservation in promotions.\n• **Step 3: 77th, 81st & 85th Amendments (1995–2001)** $\\rightarrow$ Inserts Art 16(4A) for SC/ST promotion quotas, Art 16(4B) exempting backlog vacancies from 50% cap, and consequential seniority.\n• **Step 4: M. Nagaraj (2006) & Jarnail Singh (2018)** $\\rightarrow$ Upholds promotion quotas subject to quantifiable backwardness data; extends Creamy Layer principle to SC/ST promotions.\n• **Step 5: 103rd Amendment & Janhit Abhiyan (2022)** $\\rightarrow$ 10% EWS quota based solely on economic disadvantage upheld (does not breach 50% cap because 50% rule applies to social reservation).\n• **Step 6: Davinder Singh (2024)** $\\rightarrow$ 7-judge bench overrules *E.V. Chinnaiah (2004)*, empowering States to sub-classify SCs and STs for preferential intra-quota benefits.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Welfare schemes, Affirmative Action, Judicial Judgments.',
        examNotes: 'Critical for Prelims and Mains. Expect questions on Davinder Singh (2024), Janhit Abhiyan (2022), and Article 16(4A)/(4B).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Social Justice & Reservation Policy in India and Rajasthan.',
        examNotes: 'State-specific reservation dynamics, MBC/EWS quotas, and Rohini Commission recommendations.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'HR & Service Rules: Reservation rosters in Public Sector Banks.',
        examNotes: 'Roster points, carry-forward backlog rules under Art 16(4B), and EWS quota implementation in bank recruitment.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Articles 15 & 16 Rapid Pegs:\n• Grounds: Art 15 (5 grounds) vs Art 16 (7 grounds: adds descent & residence).\n• Milestones: Indra Sawhney 50% cap & Creamy Layer -> 77th/81st Amds (Arts 16(4A)/(4B) promotions & backlog).\n• Current Law: 103rd Amd (10% EWS upheld 2022) + Davinder Singh 2024 (SC/ST sub-classification upheld).',
        keyTakeaways: ['Art 15 (5 grounds) vs Art 16 (7 grounds)', 'Indra Sawhney 50% Cap & Creamy Layer', 'Davinder Singh 2024 SC Sub-classification'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Articles 15 & 16 balance merit and social justice. Covers Creamy layer (Ram Nandan Committee), 77th/81st Amds for promotions/backlogs, Rohini Commission, and 2024 Davinder Singh ruling.',
        keyTakeaways: ['Creamy layer 8 lakh cap', 'Art 16(4A) SC/ST promotion', 'Art 16(4B) Backlog 50% cap exemption', 'Davinder Singh 2024'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Complete constitutional and judicial trajectory from Champakam Dorairajan (1951) through Indra Sawhney, Nagaraj, Jarnail Singh, Janhit Abhiyan, and 2024 Davinder Singh 7-judge bench.',
        keyTakeaways: ['Full case law matrix', 'Creamy layer extension to SC/ST promotions', 'EWS criteria legality'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'In the landmark 2024 7-judge Constitution Bench decision in State of Punjab v. Davinder Singh, what did the Supreme Court hold regarding reservations?',
        type: 'APPLICATION',
        difficulty: 'HARD',
        explanation: 'In State of Punjab v. Davinder Singh (2024), a 7-judge bench held that States are constitutionally empowered to sub-classify Scheduled Castes and Scheduled Tribes to ensure targeted affirmative action for the most disadvantaged within those groups.',
        options: [
          { text: 'States have no power to sub-classify Scheduled Castes without a constitutional amendment.', isCorrect: false, distractorExplanation: 'This was the old 2004 E.V. Chinnaiah view, which was expressly overruled in 2024.' },
          { text: 'States have constitutional authority to sub-classify SCs and STs for granting preferential reservation benefits.', isCorrect: true },
          { text: 'The 50% reservation ceiling is completely unconstitutional.', isCorrect: false, distractorExplanation: 'The 50% ceiling was not struck down; sub-classification operates within the existing quota.' },
          { text: 'Creamy layer concept cannot be applied to any OBC category.', isCorrect: false, distractorExplanation: 'Creamy layer is mandatory for OBCs.' },
        ],
      },
    ],
  },

  // 6. Articles 17 & 18 — Abolition of Untouchability & Titles
  {
    id: 'CON-T9-06',
    slug: 'articles-17-18-abolition-untouchability-titles',
    title: 'Articles 17 & 18 — Abolition of Untouchability & Titles',
    shortDefinition:
      'Article 17 absolutely abolishes untouchability in any form, enforceable against the State and private individuals, while Article 18 abolishes aristocratic titles to establish civic equality.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T9-19', 'SEM-T9-20'],
    beneficiaryScope: {
      wording: 'Universal / Absolute Prohibition',
      practicalScope: 'Operates as an absolute ban on Untouchability (horizontal effect against private persons) and prohibition of feudal titles.',
      qualifications: 'Untouchability has no constitutional exceptions. National Awards (Bharat Ratna) are valid merit decorations if not used as titles.',
      examTrap: 'Believing Article 17 has reasonable restrictions. It is absolute with zero exceptions.',
    },
    claims: [
      {
        id: 'CLM-T9-06.1',
        statement: 'Article 17 abolishes "Untouchability" and forbids its practice in any form, making its enforcement a punishable offence under the Protection of Civil Rights Act 1955 and SC/ST (Prevention of Atrocities) Act 1989.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 71 (Printed p. 65)',
      },
      {
        id: 'CLM-T9-06.2',
        statement: 'Article 18 prohibits the State from conferring any title (except military and academic distinctions) and forbids citizens from accepting foreign titles.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 71 (Printed p. 65)',
      },
      {
        id: 'CLM-T9-06.3',
        statement: 'In Balaji Raghavan v. Union of India (1996), the Supreme Court upheld National Awards (Bharat Ratna, Padma Vibhushan, Padma Bhushan, Padma Shri) as constitutional decorations of merit, provided they are not used as prefixes or suffixes to names.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 71 (Printed p. 65)',
      },
      {
        id: 'CLM-T9-06.4',
        statement: 'The term "Untouchability" is not defined anywhere in the Constitution or the PCR Act 1955; the Mysore High Court in Devrajiah (1958) ruled that it refers to historical caste-based social disabilities, not temporary social boycotts.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 71 (Printed p. 65)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Eradicating Feudal and Caste Hierarchies',
        body: 'Articles 17 and 18 dismantle inherited feudal privileges and caste hierarchies, establishing that all Indian citizens stand in equal civic brotherhood without hereditary nobility or ritual subjugation.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Article 17: Self-Executing Absolute Prohibition',
        body: 'Article 17 is one of the few Fundamental Rights available directly against private individuals (horizontal effect), backed by statutory penalties under the PCR Act 1955 and Atrocities Act 1989. It has NO exceptions and cannot be suspended.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'GS Paper II: Social Justice, SC/ST protections, National Awards.',
        examNotes: 'Tests on horizontal rights (Arts 15(2), 17, 23, 24) and Balaji Raghavan prefix/suffix conditions.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: SC/ST (POA) Act 1989 & Civil Rights protections.',
        examNotes: 'Statutory provisions of PCR Act 1955 and 1989 Atrocities Act.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'General Awareness: Civic equality and national honours.',
        examNotes: 'Basic awareness of civic equality laws.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Articles 17 & 18 Rapid Pegs:\n• Art 17: Untouchability abolished (Absolute horizontal right, zero exceptions, PCR Act 1955).\n• Devrajiah (1958): "Untouchability" not defined in Constitution; means historical caste disability.\n• Art 18: Feudal titles banned; National Awards valid if NOT used as prefix/suffix (Balaji Raghavan 1996).',
        keyTakeaways: ['Article 17 has absolute horizontal effect', 'Devrajiah 1958 definition scope', 'Balaji Raghavan prefix/suffix rule'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 17 is absolute with no constitutional exceptions. Implemented via PCR Act 1955 and SC/ST (POA) Act 1989. Article 18 bans aristocratic titles but permits merit awards without title usage.',
        keyTakeaways: ['No exceptions to Article 17', 'Balaji Raghavan (1996)', 'Foreign titles require Presidential consent'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Complete legal analysis of Articles 17 and 18: Meaning of Untouchability (Mysore HC in Devrajiah), statutory evolution from Untouchability Offences Act 1955 to 1976 PCR Act, and National Honours committee guidelines.',
        keyTakeaways: ['Untouchability not defined in Constitution', 'Devrajiah case (1958)', 'Balaji Raghavan (1996) 5-judge bench'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'In Balaji Raghavan v. Union of India (1996), on what condition did the Supreme Court uphold the validity of National Awards like Bharat Ratna and Padma awards under Article 18?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'The Supreme Court ruled that National Awards are mere decorations of merit and not "titles" within Article 18, provided that the recipients do not use them as prefixes or suffixes to their names.',
        options: [
          { text: 'They must carry monetary grants approved by Parliament.', isCorrect: false, distractorExplanation: 'National awards carry no monetary grants.' },
          { text: 'They must not be used as prefixes or suffixes to the awardee names.', isCorrect: true },
          { text: 'They can only be conferred on serving civil servants.', isCorrect: false, distractorExplanation: 'National awards are conferred on distinguished citizens in any field.' },
          { text: 'They are restricted to post-humous conferment only.', isCorrect: false, distractorExplanation: 'Living recipients can receive awards.' },
        ],
      },
    ],
  },

  // 7. Article 19 — Democratic Freedoms & Contemporary Civil Liberties
  {
    id: 'CON-T9-07',
    slug: 'article-19-democratic-freedoms-civil-liberties',
    title: 'Article 19 — Democratic Freedoms & Contemporary Civil Liberties',
    shortDefinition:
      'Article 19 guarantees 6 fundamental democratic freedoms to citizens, subject to exhaustive, reasonable restrictions under Articles 19(2) through 19(6), covering modern civil liberties like internet access, surveillance safeguards, and peaceful assembly.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T9-21', 'SEM-T9-22', 'SEM-T9-23', 'SEM-T9-24'],
    beneficiaryScope: {
      wording: '"all citizens"',
      practicalScope: 'Natural Indian citizens exclusively.',
      qualifications: 'Juristic entities (companies, corporations) are NOT citizens (STC v. CTO 1963). Restrictions must be reasonable and confined to clauses 19(2)–(6).',
      examTrap: 'A foreign company filing a writ petition claiming violation of Article 19(1)(g) (Freedom of Trade). Petition is inadmissible.',
    },
    claims: [
      {
        id: 'CLM-T9-07.1',
        statement: 'Article 19(1) guarantees 6 democratic freedoms to Indian citizens: (a) speech and expression, (b) peaceful assembly without arms, (c) forming associations or cooperative societies, (d) moving freely throughout India, (e) residing and settling anywhere, and (g) practicing any profession, trade, or business.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 72 (Printed p. 66)',
      },
      {
        id: 'CLM-T9-07.2',
        statement: 'Restrictions on Article 19 freedoms can ONLY be imposed on grounds explicitly enumerated in Articles 19(2) to 19(6) and must satisfy the test of reasonableness and proportionality.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 72 (Printed p. 66)',
      },
      {
        id: 'CLM-T9-07.3',
        statement: 'In Anuradha Bhasin v. Union of India (2020), the Supreme Court declared that the freedom of speech, expression, and trade/business through the medium of the internet is constitutionally protected under Article 19(1)(a) and 19(1)(g), and indefinite internet shutdowns are illegal.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 73 (Printed p. 67)',
      },
      {
        id: 'CLM-T9-07.4',
        statement: 'In PUCL v. Union of India (1997), the Supreme Court laid down mandatory procedural guidelines for telephone tapping under Section 5(2) of the Indian Telegraph Act 1885 to safeguard privacy rights.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 74 (Printed p. 68)',
      },
      {
        id: 'CLM-T9-07.5',
        statement: 'In Amit Sahni v. Commissioner of Police (2020) (Shaheen Bagh case), the Supreme Court held that while the right to peaceful protest is fundamental under Articles 19(1)(a) and 19(1)(b), public ways and roads cannot be occupied indefinitely.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 75 (Printed p. 69)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Backbone of Indian Democracy',
        body: 'Article 19 forms the core democratic charter enabling public debate, dissenting speech, peaceful assembly, free movement, and economic enterprise.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 6 Freedoms & Restriction Clauses Matrix',
        body: '| Freedom | Restriction Clause | Grounds of Reasonable Restriction |\n| :--- | :--- | :--- |\n| **19(1)(a) Speech & Expression** | **19(2)** | Sovereignty & Integrity of India, Security of State, Friendly relations with foreign states, Public order, Decency/Morality, Contempt of court, Defamation, Incitement to an offence |\n| **19(1)(b) Peaceful Assembly** | **19(3)** | Sovereignty & Integrity of India, Public order |\n| **19(1)(c) Associations/Cooperatives** | **19(4)** | Sovereignty & Integrity of India, Public order, Morality |\n| **19(1)(d) Free Movement** | **19(5)** | General public interests, Protection of Scheduled Tribes |\n| **19(1)(e) Residence & Settlement** | **19(5)** | General public interests, Protection of Scheduled Tribes |\n| **19(1)(g) Profession, Trade, Business**| **19(6)** | General public interests, Professional/technical qualifications, State monopoly |',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Fundamental Freedoms, Internet Governance, Sedition, Free Speech.',
        examNotes: 'Questions frequently test Anuradha Bhasin internet rules, sedition/hate speech boundaries, and reasonable restriction grounds.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Fundamental Freedoms and Public Order.',
        examNotes: 'Direct matching questions between freedoms in 19(1) and restriction clauses in 19(2)–(6).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Trade & Profession: Article 19(1)(g) and reasonable restrictions on banking operations.',
        examNotes: 'State licensing of banks, professional qualification rules under 19(6), and RBI regulatory restrictions on trade.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 19 Rapid Pegs:\n• 6 Freedoms to CITIZENS ONLY (Companies/aliens excluded; STC v. CTO 1963).\n• Restriction Grounds in 19(2)-(6) are EXHAUSTIVE and must satisfy proportionality.\n• Modern Extensions: Internet access (Anuradha Bhasin 2020), Protest limits (Amit Sahni 2020).',
        keyTakeaways: ['Citizens-only (No corporate citizenship)', 'Exhaustive restriction clauses 19(2)-(6)', 'Anuradha Bhasin internet proportionality'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 19(1)(a)-(g) freedoms are qualified by 19(2)-(6). Covers modern rights: internet access, phone tapping safeguards (PUCL 1997), and protest limits (Amit Sahni 2020).',
        keyTakeaways: ['97th Amd (Cooperatives in 19(1)(c))', 'Anuradha Bhasin proportionality', 'PUCL 1997 wiretapping rules'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of Article 19: Chintaman Rao test of reasonableness, Modern proportionality doctrine in Puttaswamy/Anuradha Bhasin, Freedom of Press jurisprudence (Romesh Thappar, Indian Express).',
        keyTakeaways: ['Test of Reasonableness', 'Press freedom as part of 19(1)(a)', 'Telecom Suspension Rules 2017/2020'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'In Anuradha Bhasin v. Union of India (2020), what did the Supreme Court hold regarding internet access and Fundamental Rights?',
        type: 'APPLICATION',
        difficulty: 'MEDIUM',
        explanation: 'In Anuradha Bhasin (2020), the Supreme Court ruled that freedom of speech and expression and freedom to practice any profession or business over the internet is constitutionally protected under Article 19(1)(a) and Article 19(1)(g), and any suspension must satisfy the test of proportionality and cannot be indefinite.',
        options: [
          { text: 'Internet access is not protected under any Fundamental Right.', isCorrect: false, distractorExplanation: 'Overruled by Anuradha Bhasin.' },
          { text: 'Freedom of speech and trade over the internet is protected under Articles 19(1)(a) and 19(1)(g), and suspension orders must be temporary and proportional.', isCorrect: true },
          { text: 'Internet can be suspended indefinitely without publishing the suspension order.', isCorrect: false, distractorExplanation: 'The court held indefinite suspension illegal and mandated publishing of orders.' },
          { text: 'Only government websites are protected under Article 19.', isCorrect: false, distractorExplanation: 'All lawful internet speech and trade are protected.' },
        ],
      },
    ],
  },

  // 8. Article 20 — Protection in Respect of Conviction for Offences
  {
    id: 'CON-T9-08',
    slug: 'article-20-conviction-protections',
    title: 'Article 20 — Protection in Respect of Conviction for Offences',
    shortDefinition:
      'Article 20 provides vital criminal justice protections: prohibition of ex-post facto penal laws (20(1)), prohibition against double jeopardy (20(2)), and prohibition against self-incrimination (20(3)).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T9-25'],
    beneficiaryScope: {
      wording: '"any person"',
      practicalScope: 'Citizens, foreigners, corporations accused of criminal offences.',
      qualifications: '20(1) applies to criminal trials only (not civil/tax retrospectivity). 20(2) requires court trial & punishment (not departmental probes). 20(3) applies to accused persons (physical evidence allowed per Kathi Kalu Oghad 1961).',
      examTrap: 'Assuming retroactive tax laws violate Art 20(1) (they do not), or that fingerprinting an accused violates Art 20(3) (it does not).',
    },
    claims: [
      {
        id: 'CLM-T9-08.1',
        statement: 'Article 20(1) prohibits retroactive criminal legislation (ex-post facto law) and penalties greater than those applicable at the time of the commission of the offence; it does not apply to civil or tax liability.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 76 (Printed p. 70)',
      },
      {
        id: 'CLM-T9-08.2',
        statement: 'Article 20(2) protects against Double Jeopardy (nemo debet bis vexari), prohibiting prosecution and punishment for the same offence more than once; it applies only to proceedings before a court of law or judicial tribunal, not departmental or administrative proceedings.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 76 (Printed p. 70)',
      },
      {
        id: 'CLM-T9-08.3',
        statement: 'Article 20(3) protects an accused person against compulsory self-incrimination. In Selvi v. State of Karnataka (2010), the Supreme Court ruled that involuntary narco-analysis, polygraph tests, and Brain Electrical Activation Profiles (BEAP) violate Article 20(3) and Article 21.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 76 (Printed p. 70)',
      },
      {
        id: 'CLM-T9-08.4',
        statement: 'In State of Bombay v. Kathi Kalu Oghad (1961), an 11-judge Constitution Bench ruled that giving handwriting specimens, thumb impressions, fingerprints, DNA, or bodily measurements does NOT violate Article 20(3) because it is physical non-communicative evidence, not compelled testimony.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 76 (Printed p. 70)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Protection of the Accused in the Criminal Process',
        body: 'Article 20 erects fundamental procedural barriers ensuring that the punitive machinery of the State cannot be retroactively manipulated, repeatedly deployed, or used to coerce self-incriminating confessions.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Three Pillars of Article 20 & Physical vs Testimonial Evidence',
        body: '1. **20(1) No Ex-Post Facto Law**: Criminal laws cannot be retrospective (civil and tax retrospectivity is valid).\n2. **20(2) No Double Jeopardy**: Must be both prosecuted AND punished before a court (departmental inquiries/dismissals do not bar criminal trials).\n3. **20(3) No Self-Incrimination**: Accused cannot be compelled to testify against themselves.\n   • **Kathi Kalu Oghad (1961)**: Physical evidence (fingerprints, signature specimen, DNA) is legal and admissible.\n   • **Selvi (2010)**: Mental/cognitive invasion (narco-analysis, polygraph) without consent is strictly unconstitutional.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Criminal Justice System, Emergency provisions (Arts 20 & 21 non-suspendability).',
        examNotes: 'Article 20 and 21 cannot be suspended even during a National Emergency under Article 359 (44th Amendment 1978).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Criminal Jurisprudence & Fundamental Rights.',
        examNotes: 'Direct questions on Double Jeopardy departmental vs judicial proceedings and Selvi case.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'MEDIUM',
        syllabusSection: 'Banking Offences: Departmental inquiry vs criminal prosecution for bank fraud.',
        examNotes: 'Departmental proceedings against bank officers do not attract Double Jeopardy under Art 20(2) alongside criminal prosecution.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 20 Rapid Pegs:\n• 20(1) Ex-Post Facto: Criminal laws only (tax/civil retrospectivity is valid).\n• 20(2) Double Jeopardy: Court conviction required (departmental inquiry does not bar criminal trial).\n• 20(3) Self-Incrimination: Testimonial coercion/narco banned (Selvi 2010); Physical DNA/fingerprints allowed (Kathi Kalu Oghad 1961).\n• Non-suspendable during Emergency under Art 359.',
        keyTakeaways: ['20(1) Criminal-only retrospective ban', '20(2) Court prosecution required', 'Kathi Kalu Oghad physical samples allowed vs Selvi narco ban'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 20 guarantees 3 criminal shields. Ex-post facto protection applies only to criminal conviction/penalty. Double jeopardy requires both prosecution and punishment in court. Self-incrimination bans involuntary forensic tests.',
        keyTakeaways: ['20(1) Criminal only', '20(2) Court of law required', '20(3) Involuntary narco-analysis invalid', 'Art 359 non-suspendable'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Complete analysis of Article 20: Kathi Kalu Oghad (1961) physical samples vs mental testimonies, Selvi (2010) cognitive privacy, and Maqbool Hussain (1953) customs confiscation vs double jeopardy.',
        keyTakeaways: ['Kathi Kalu Oghad (1961)', 'Selvi (2010)', 'Maqbool Hussain (1953)', '44th Amendment emergency immunity'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'In State of Bombay v. Kathi Kalu Oghad (1961), what did the Supreme Court rule regarding taking fingerprint impressions from an accused person?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'In Kathi Kalu Oghad (1961), an 11-judge bench held that taking fingerprints, handwriting specimens, or bodily measurements does not violate Article 20(3) because it constitutes physical evidence, not compelled personal testimony.',
        options: [
          { text: 'It violates Article 20(3) as self-incrimination.', isCorrect: false, distractorExplanation: 'Overruled by 11-judge bench.' },
          { text: 'It is constitutionally valid because Article 20(3) protects against compelled testimonial communication, not physical material evidence.', isCorrect: true },
          { text: 'It can only be done with prior permission of the High Court.', isCorrect: false, distractorExplanation: 'No High Court permission required.' },
          { text: 'It is permissible only for non-citizens.', isCorrect: false, distractorExplanation: 'Applies equally to all accused persons.' },
        ],
      },
    ],
  },

  // 9. Article 21 & 21A — Right to Life, Liberty, Privacy & Education
  {
    id: 'CON-T9-09',
    slug: 'article-21-21a-life-liberty-privacy-education',
    title: 'Article 21 & 21A — Life, Liberty, Privacy & Education',
    shortDefinition:
      'Article 21 guarantees life and personal liberty except according to procedure established by law (expanded into substantive due process), encompassing privacy, dignity, living wills, and the Article 21A Right to Education.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T9-26', 'SEM-T9-27', 'SEM-T9-28', 'SEM-T9-29', 'SEM-T9-30'],
    beneficiaryScope: {
      wording: '"any person" (Art 21) / "all children aged 6 to 14 years" (Art 21A)',
      practicalScope: 'All human beings within Indian jurisdiction (citizens, friendly aliens, enemy aliens, refugees, prisoners).',
      qualifications: 'Deprivation requires just, fair, and reasonable law. Art 21A RTE 25% quota applies to non-minority schools (minority schools exempt per Pramati 2014).',
      examTrap: 'Assuming foreign nationals do not possess Art 21 protections against custodial brutality. They are fully protected.',
    },
    claims: [
      {
        id: 'CLM-T9-09.1',
        statement: 'In Maneka Gandhi v. Union of India (1978), the Supreme Court overruled A.K. Gopalan (1950), holding that "procedure established by law" under Article 21 must be just, fair, and reasonable, incorporating American Substantive Due Process into Indian constitutional law.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 77 (Printed p. 71)',
      },
      {
        id: 'CLM-T9-09.2',
        statement: 'Article 21 encompasses a wide catalog of 30+ implied fundamental rights, including the rights to human dignity, clean environment (M.C. Mehta), livelihood (Olga Tellis), free legal aid, speedy trial, medical care, shelter, and sleep.',
        claimType: 'FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 77 (Printed p. 71)',
      },
      {
        id: 'CLM-T9-09.3',
        statement: 'In K.S. Puttaswamy v. Union of India (2017), a 9-judge Constitution Bench declared the Right to Privacy as an intrinsic fundamental right under Article 21 and Part III, establishing a 3-fold test of legality, legitimate aim, and proportionality.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 78 (Printed p. 72)',
      },
      {
        id: 'CLM-T9-09.4',
        statement: 'In Common Cause v. Union of India (2018), the Supreme Court recognized the Right to Die with Dignity, legalizing passive euthanasia and Advance Medical Directives (Living Wills) under Article 21.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 78 (Printed p. 72)',
      },
      {
        id: 'CLM-T9-09.5',
        statement: 'The 86th Constitutional Amendment Act 2002 inserted Article 21A, making free and compulsory education for all children aged 6 to 14 years a Fundamental Right, enacted through the Right to Education (RTE) Act 2009.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 79 (Printed p. 73)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Great Reservoir of Fundamental Rights',
        body: 'Article 21 is the heart of the Indian Constitution. Judicial interpretation has expanded it from mere animal existence into a rich tapestry of rights securing a life lived with human dignity.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Golden Triangle: Interplay of Articles 14, 19, and 21',
        body: 'Post-Maneka Gandhi, any law depriving personal liberty under Article 21 must also be non-arbitrary under Article 14 and satisfy reasonable restriction standards under Article 19.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Right to Privacy, Due Process, Right to Education, Health & Environment.',
        examNotes: 'Highest-yield topic across Prelims and Mains. Frequent questions on Puttaswamy proportionality test, passive euthanasia, and RTE Act.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Right to Life, Privacy, RTE Act 2009.',
        examNotes: 'Detailed questions on 86th Amendment Act 2002 and Article 21 implied rights catalog.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Customer Privacy & Data Protection: Puttaswamy judgment and Digital Personal Data Protection Act.',
        examNotes: 'Direct application of Puttaswamy privacy principles to banking customer data and KYC digital biometric storage.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 21 & 21A Rapid Pegs:\n• Maneka Gandhi 1978: Procedure established by law must be fair, just, and reasonable (Substantive Due Process & Golden Triangle).\n• Puttaswamy 2017: 9-judge bench declares Privacy fundamental (3-fold test: Legality, Aim, Proportionality).\n• Article 21A: 86th Amd 2002 makes schooling for 6–14 years fundamental right (RTE Act 2009).',
        keyTakeaways: ['Maneka Gandhi Substantive Due Process', 'Puttaswamy 3-Fold Privacy Test', 'Article 21A 86th Amendment (6-14 years)'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 21 evolved from narrow Gopalan view to substantive due process in Maneka Gandhi. Encompasses 30+ unenumerated rights. Puttaswamy 3-pronged proportionality test (Legality, Need, Proportionality). Art 21A guarantees free schooling.',
        keyTakeaways: ['Golden Triangle (14, 19, 21)', 'Puttaswamy 3-fold test', 'Common Cause passive euthanasia', '86th Amendment & RTE 2009'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Full evolution of Article 21 from drafting history (B.N. Rau vs Felix Frankfurter on Due Process) to Gopalan, Kharak Singh, Maneka Gandhi, Olga Tellis, Puttaswamy, Common Cause, and modern digital privacy/AI surveillance.',
        keyTakeaways: ['Drafting debate on Due Process', 'M.C. Mehta environmental jurisprudence', 'Navtej Johar LGBTQ dignity', 'RTE Act Section 12(1)(c) 25% quota'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'In K.S. Puttaswamy v. Union of India (2017), what 3-pronged test did the Supreme Court lay down for any State encroachment on the Right to Privacy?',
        type: 'APPLICATION',
        difficulty: 'HARD',
        explanation: 'In Puttaswamy (2017), the 9-judge bench held that an invasion of privacy must satisfy: (1) Legality (existence of a valid law), (2) Need / Legitimate State Aim, and (3) Proportionality (rational nexus and least intrusive means).',
        options: [
          { text: 'Legality, Executive Convenience, and Financial Benefit', isCorrect: false, distractorExplanation: 'Executive convenience is never a valid constitutional ground.' },
          { text: 'Legality, Legitimate State Aim, and Proportionality', isCorrect: true },
          { text: 'Prior Judicial Warrant, Public Polling, and Parliamentary Sanction', isCorrect: false, distractorExplanation: 'Incorrect standard.' },
          { text: 'Cabinet Approval, National Security Exemption, and Non-Disclosure', isCorrect: false, distractorExplanation: 'Cabinet approval alone cannot bypass proportionality.' },
        ],
      },
    ],
  },

  // 10. Article 22 — Punitive Arrest Safeguards & Preventive Detention
  {
    id: 'CON-T9-10',
    slug: 'article-22-arrest-safeguards-preventive-detention',
    title: 'Article 22 — Punitive Arrest Safeguards & Preventive Detention',
    shortDefinition:
      'Article 22 establishes dual constitutional regimes: procedural safeguards against ordinary punitive arrest (22(1)–(2)) and constitutional limitations/safeguards on preventive detention laws (22(4)–(7)).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T9-31', 'SEM-T9-32'],
    beneficiaryScope: {
      wording: '"every person arrested and detained"',
      practicalScope: 'Divided regime: 22(1)-(2) for ordinary arrests; 22(4)-(7) for preventive detainees.',
      qualifications: 'EXPRESSLY EXCLUDES: (1) Enemy aliens, and (2) Preventive detainees (Art 22(3)). Preventive detention max without Advisory Board is 3 months (44th Amd 2-month reduction was never notified).',
      examTrap: 'Assuming a preventive detainee has the right to 24-hour magistrate production under Art 22(2). They are explicitly excluded by Art 22(3).',
    },
    claims: [
      {
        id: 'CLM-T9-10.1',
        statement: 'Under Article 22(1) and 22(2), a person arrested under ordinary punitive law must be informed of the grounds of arrest, has the right to consult and be defended by a legal practitioner, and must be produced before the nearest magistrate within 24 hours (excluding journey time).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 79 (Printed p. 73)',
      },
      {
        id: 'CLM-T9-10.2',
        statement: 'Article 22(4) mandates that no preventive detention law can authorize detention beyond 3 months unless an Advisory Board (High Court judges) confirms sufficient cause before expiry.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 79 (Printed p. 73)',
      },
      {
        id: 'CLM-T9-10.3',
        statement: 'In Union of India v. K.A. Najeeb (2021) and Vernon Gonsalves (2023), the Supreme Court held that statutory bail restrictions under special laws like Section 43D(5) UAPA do not oust constitutional courts jurisdiction to grant bail under Article 21 where trial is delayed.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 80 (Printed p. 74)',
      },
      {
        id: 'CLM-T9-10.4',
        statement: 'Although the 44th Constitutional Amendment Act 1978 provided for reducing the maximum preventive detention period without Advisory Board approval from 3 months to 2 months, Section 3 of that Amendment was never notified by the Union Government (A.K. Roy 1982), leaving the operational threshold at 3 months.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 79 (Printed p. 73)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Punitive Arrest vs Preventive Detention',
        body: 'Punitive arrest punishes a person for a committed crime; Preventive detention detains a person without trial to prevent anticipated future public order or national security disruption.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Constitutional Safeguards for Preventive Detainees & The 3-Month Rule',
        body: '1. **Advisory Board Review**: Required for detention exceeding 3 months (44th Amd 2-month reduction was never notified by the Executive).\n2. **Right to Earliest Representation**: Grounds must be communicated to the detainee as soon as possible.\n3. **Public Interest Privilege**: State may withhold specific facts if disclosure is against public interest.\n4. **Exclusions under 22(3)**: Ordinary arrest rights (magistrate production within 24h) do NOT apply to enemy aliens or preventive detainees.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Preventive Detention, UAPA, Civil Liberties vs State Security.',
        examNotes: 'Questions on D.K. Basu arrest guidelines, Advisory Board composition, and UAPA bail jurisprudence.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Criminal Procedure and Detention Laws.',
        examNotes: 'Direct 20-word questions on 24-hour magistrate production rule and 3-month detention limit.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Legal Aspects: Financial Crimes and Enforcement Directorates arrest powers.',
        examNotes: 'Basic awareness of PMLA arrest and bail guidelines.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 22 Rapid Pegs:\n• Punitive Arrest: Grounds communication + lawyer + 24h magistrate production (excluding travel).\n• Exclusions (Art 22(3)): Enemy aliens and preventive detainees get NO 24h magistrate safeguard.\n• Preventive Detention: Max 3 months without Advisory Board (44th Amd 2-month cut never notified; A.K. Roy 1982).\n• Special Bail: UAPA Sec 43D(5) cannot block Art 21 bail for delayed trial (K.A. Najeeb 2021).',
        keyTakeaways: ['Punitive 24h magistrate rule', 'Art 22(3) exclusions (Enemy aliens & Preventive detainees)', '3-month threshold (44th Amd 2-month cut not notified)'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 22 separates ordinary arrest from preventive detention. 22(1)-(2) does not apply to enemy aliens or preventive detainees. Advisory board headed by HC judges. K.A. Najeeb (2021) upholds bail under Art 21 despite UAPA Section 43D(5).',
        keyTakeaways: ['Exceptions to 22(1)-(2)', '44th Amendment 2-month reduction never notified', 'K.A. Najeeb (2021)'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of preventive detention laws in India: Preventive Detention Act 1950, MISA 1971, COFEPOSA 1974, TADA 1985, POTA 2002, UAPA 1967, and D.K. Basu (1997) arrest guidelines.',
        keyTakeaways: ['D.K. Basu guidelines', 'History of preventive detention laws in India', 'Advisory board procedure and judicial review'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Under Article 22 of the Constitution, what is the maximum period a person can be held in preventive detention without the approval of an Advisory Board?',
        type: 'CONCEPTUAL',
        difficulty: 'EASY',
        explanation: 'Article 22(4) stipulates that no person can be detained under preventive detention for more than 3 months unless an Advisory Board confirms sufficient cause. Although the 44th Amendment 1978 passed a provision to reduce it to 2 months, that provision was never brought into force by executive notification.',
        options: [
          { text: '1 month', isCorrect: false, distractorExplanation: 'Incorrect period.' },
          { text: '3 months', isCorrect: true },
          { text: '2 months', isCorrect: false, distractorExplanation: '44th Amendment reduction to 2 months was never notified by the Union Govt.' },
          { text: '6 months', isCorrect: false, distractorExplanation: 'Requires periodic Advisory Board reviews.' },
        ],
      },
    ],
  },

  // 11. Articles 23 & 24 — Right Against Exploitation
  {
    id: 'CON-T9-11',
    slug: 'articles-23-24-right-against-exploitation',
    title: 'Articles 23 & 24 — Right Against Exploitation',
    shortDefinition:
      'Articles 23 and 24 prohibit human trafficking, begar, forced labour, and the employment of children below 14 years in hazardous occupations, creating enforceable horizontal rights against exploitation.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T9-33'],
    beneficiaryScope: {
      wording: '"any person" (Art 23) / "no child below 14 years" (Art 24)',
      practicalScope: 'All human beings, citizens and non-citizens. Operates horizontally against private employers and contractors.',
      qualifications: 'Art 23(2) allows State compulsory service for public purposes without discrimination. Art 24 child labour ban is absolute below 14 years.',
      examTrap: 'Assuming Art 23 only restrains State officers. It binds private landlords, factory owners, and contractors directly.',
    },
    claims: [
      {
        id: 'CLM-T9-11.1',
        statement: 'Article 23(1) prohibits traffic in human beings, begar (unpaid forced labour), and other similar forms of forced labour, enforceable against both the State and private individuals.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 81 (Printed p. 75)',
      },
      {
        id: 'CLM-T9-11.2',
        statement: 'Under Article 23(2), the State is permitted to impose compulsory service for public purposes (such as military conscription or social work) without discriminating on grounds of religion, race, caste, or class.',
        claimType: 'EXCEPTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 81 (Printed p. 75)',
      },
      {
        id: 'CLM-T9-11.3',
        statement: 'Article 24 absolutely prohibits the employment of children below the age of 14 years in any factory, mine, or other hazardous occupation, operationalized through the Child and Adolescent Labour (Prohibition and Regulation) Act 1986.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 81 (Printed p. 75)',
      },
      {
        id: 'CLM-T9-11.4',
        statement: 'In PUDR v. Union of India (1982) (Asiad Workers Case), the Supreme Court ruled that paying less than statutory minimum wages constitutes "forced labour" violative of Article 23.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 81 (Printed p. 75)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Protecting Vulnerable Individuals from Coercion',
        body: 'Articles 23 and 24 eradicate traditional feudal practices of bonded labour (begar), modern human trafficking, and industrial child exploitation.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Horizontal Effect & Minimum Wage Jurisprudence',
        body: 'Like Article 17, Articles 23 and 24 bind private employers and individuals directly.\n• **PUDR / Asiad Workers (1982)**: Economic helplessness forcing someone to work below minimum wage constitutes unconstitutional forced labour under Art 23.\n• **Child Labour Act 2016**: Complete ban below 14 years in all occupations (except family business after school hours); regulation of adolescents (14–18 years) in hazardous occupations.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'GS Paper II: Social Justice, Child Labour laws, Human Trafficking.',
        examNotes: 'Questions on Child Labour Amendment Act 2016, PUDR v. Union of India (Asiad Workers case), and horizontal rights.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Labour Laws & Social Justice.',
        examNotes: 'Direct questions on definitions of Begar and Article 23(2) public service exception.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Social Responsibility: Prevention of child labour and ESG compliance.',
        examNotes: 'Corporate governance and compliance with child labour prohibitions in financed enterprises.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Articles 23 & 24 Rapid Pegs:\n• Art 23: Bans Trafficking & Begar (Horizontal effect against private masters; PUDR 1982 below-minimum wage is forced labour).\n• Art 23(2) Exception: State compulsory public service (military/disaster) without caste/religion discrimination.\n• Art 24: Absolute ban on Child Labour below 14 in factories/mines/hazardous work.',
        keyTakeaways: ['Horizontal effect against private persons', 'PUDR 1982: Sub-minimum wage = forced labour', 'Art 24 absolute child labour ban below 14'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Articles 23 & 24 secure freedom from exploitation. PUDR (1982) established that paying less than minimum wage constitutes forced labour under Art 23. Child Labour Act 2016 bans all commercial employment below 14.',
        keyTakeaways: ['PUDR Asiad Workers case (1982)', 'M.C. Mehta Child Labour case (1996)', 'Child Labour Amendment Act 2016'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of anti-exploitation jurisprudence: Bonded Labour Abolition Act 1976, Bandhua Mukti Morcha (1984), M.C. Mehta Sivakasi fireworks rehabilitation fund, and 2016 Child Labour amendments.',
        keyTakeaways: ['Bandhua Mukti Morcha (1984)', 'Child Labour Rehabilitation Welfare Fund', 'Adolescent labour (14-18) hazardous regulation'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Under Article 23(2) of the Constitution, what is the State permitted to impose as an exception to the prohibition of forced labour?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'Article 23(2) allows the State to impose compulsory service for public purposes (such as national defence or disaster relief), provided there is no discrimination on grounds of religion, race, caste, or class.',
        options: [
          { text: 'Compulsory commercial service in private factories.', isCorrect: false, distractorExplanation: 'Private forced labour is strictly barred.' },
          { text: 'Compulsory service for public purposes without discrimination.', isCorrect: true },
          { text: 'Unpaid labour for debt recovery.', isCorrect: false, distractorExplanation: 'Bonded labour for debt is unconstitutional.' },
          { text: 'Compulsory domestic work for agricultural landlords.', isCorrect: false, distractorExplanation: 'Feudal begar is abolished.' },
        ],
      },
    ],
  },

  // 12. Articles 25–28 — Freedom of Religion & Essential Religious Practices
  {
    id: 'CON-T9-12',
    slug: 'articles-25-28-freedom-of-religion-essential-practices',
    title: 'Articles 25–28 — Freedom of Religion & Essential Religious Practices',
    shortDefinition:
      'Articles 25–28 guarantee individual freedom of conscience and propagation, collective religious institutional management, tax immunity for religious promotion, and freedom from religious instruction in State schools, governed by the Essential Religious Practices doctrine.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T9-34', 'SEM-T9-35', 'SEM-T9-36'],
    beneficiaryScope: {
      wording: '"all persons" (Art 25) / "every religious denomination" (Art 26)',
      practicalScope: 'Art 25 applies to individual human beings (citizens & foreign nationals). Art 26 applies to collective religious denominations/sects.',
      qualifications: 'Art 25 is subject to Part III rights + public order, morality, health. Art 26 is subject only to public order, morality, health (not all Part III rights).',
      examTrap: 'Claiming a foreign national has no Art 25 religious freedom in India. They do, but propagation excludes fraudulent/coercive conversion.',
    },
    claims: [
      {
        id: 'CLM-T9-12.1',
        statement: 'Article 25 guarantees to all persons freedom of conscience and the right freely to profess, practice, and propagate religion, subject to public order, morality, health, and other provisions of Part III.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 81 (Printed p. 75)',
      },
      {
        id: 'CLM-T9-12.2',
        statement: 'In the Shirur Mutt Case (1954), the Supreme Court established the Doctrine of Essential Religious Practices (ERP), holding that constitutional protection under Article 25 extends only to practices that are integral and essential to a religion.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 81 (Printed p. 75)',
      },
      {
        id: 'CLM-T9-12.3',
        statement: 'Article 26 guarantees religious denominations the right to establish and maintain religious/charitable institutions and manage their own religious affairs, subject to public order, morality, and health.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 82 (Printed p. 76)',
      },
      {
        id: 'CLM-T9-12.4',
        statement: 'Article 27 prohibits the State from compelling any person to pay taxes whose proceeds are specifically appropriated for the promotion of any particular religion (though regulatory fees are permissible).',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 82 (Printed p. 76)',
      },
      {
        id: 'CLM-T9-12.5',
        statement: 'Article 28 prohibits religious instruction in educational institutions wholly maintained out of State funds.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 82 (Printed p. 76)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Indian Model of Secularism',
        body: 'Indian secularism is characterized not by strict wall-of-separation (as in France or the US), but by equal respect for all religions (Sarva Dharma Sambhava) combined with active State power to reform social evils.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Essential Religious Practices (ERP) Test Matrix',
        body: '1. **Shirur Mutt (1954)**: Court determines what is integral to religion.\n2. **Shayara Bano (2017)**: Instant Triple Talaq held non-essential and unconstitutional.\n3. **Indian Young Lawyers / Sabarimala (2018)**: Exclusion of women aged 10-50 held non-essential and violative of Articles 14, 15, and 21.\n4. **Santhara (2015)** & **Jallikattu**: Balancing cultural traditions with constitutional morality.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Secularism, Freedom of Religion, Constitutional Morality.',
        examNotes: 'High-yield for Mains questions on Essential Religious Practices doctrine, Sabarimala review, and Hijab ban controversies.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Secularism & Freedom of Religion.',
        examNotes: 'Direct questions on Articles 25 vs 26, Article 27 fee vs tax distinction, and Santhara practice ruling.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'General Law: Religious trusts and charitable endowments governance.',
        examNotes: 'Banking operations for religious trusts under Article 26.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Articles 25–28 Rapid Pegs:\n• Art 25 (Individual) vs Art 26 (Denominational): Both subject to public order, morality, health (Art 25 also subject to other FRs).\n• ERP Doctrine: Judicial test for integral religious rituals (Shirur Mutt 1954; Sabarimala 2018).\n• Art 27 (Taxes banned for religion, secular fees allowed) + Art 28 (No religious teaching in 100% State-funded schools).',
        keyTakeaways: ['Art 25 Individual vs Art 26 Denominational', 'ERP Doctrine (Shirur Mutt 1954)', 'Art 27 Tax ban vs Fee permission'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 25 is subject to public order, morality, health, and other Part III rights. Article 26 is collective. Article 27 permits fees for pilgrim facilities but bans taxes. Article 28 completely bans religious instruction in state schools.',
        keyTakeaways: ['Shirur Mutt (1954)', 'Ratilal v. State of Bombay (Art 27 fee)', '4 categories of schools under Art 28'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of religious freedom jurisprudence: Indian vs Western Secularism, ERP test critique (judiciary acting as clergy), Constitutional Morality standard, and 9-judge Sabarimala reference questions.',
        keyTakeaways: ['Full ERP jurisprudence (1954 to present)', 'Sabarimala 9-judge reference issues', 'Secularism as Basic Structure (S.R. Bommai 1994)'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Under Article 27 of the Constitution, what is the legal distinction between a "tax" and a "fee" regarding religious places?',
        type: 'APPLICATION',
        difficulty: 'MEDIUM',
        explanation: 'In Ratilal v. State of Bombay (1954), the Supreme Court ruled that Article 27 prohibits the levy of a tax whose proceeds are used to promote a specific religion, but the State can charge a regulatory fee to provide secular services or maintenance at religious shrines.',
        options: [
          { text: 'Taxes can be levied on shrines, but fees are unconstitutional.', isCorrect: false, distractorExplanation: 'Taxes for promoting religion are prohibited.' },
          { text: 'The State cannot levy a tax to promote a religion, but can charge a fee for secular facilities and regulation.', isCorrect: true },
          { text: 'Neither taxes nor fees can ever be collected from any religious place under any circumstances.', isCorrect: false, distractorExplanation: 'Regulatory fees are permissible.' },
          { text: 'Fees can only be collected by religious heads, not by government authorities.', isCorrect: false, distractorExplanation: 'State can collect fees for public amenities.' },
        ],
      },
    ],
  },

  // 13. Articles 29 & 30 — Cultural & Educational Rights of Minorities
  {
    id: 'CON-T9-13',
    slug: 'articles-29-30-minority-cultural-educational-rights',
    title: 'Articles 29 & 30 — Cultural & Educational Rights of Minorities',
    shortDefinition:
      'Articles 29 and 30 protect the cultural identity of all distinct citizen groups and guarantee religious and linguistic minorities the fundamental right to establish and administer educational institutions.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T9-37', 'SEM-T9-38'],
    beneficiaryScope: {
      wording: '"any section of the citizens" (Art 29(1)) / "all minorities" (Art 30(1))',
      practicalScope: 'Citizens only. 29(1) covers any section of citizens (majority or minority); 30(1) covers religious and linguistic minorities exclusively.',
      qualifications: 'Art 30 does not cover ethnic/caste minorities. Institutional autonomy protects administration, but does not shield against reasonable academic/anti-maladministration regulations.',
      examTrap: 'Assuming Article 29(1) is exclusively a minority right. It applies to ANY section of citizens.',
    },
    claims: [
      {
        id: 'CLM-T9-13.1',
        statement: 'Article 29(1) grants any section of citizens residing in India having a distinct language, script, or culture the right to conserve the same (applies to minorities and majority groups alike).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 82 (Printed p. 76)',
      },
      {
        id: 'CLM-T9-13.2',
        statement: 'Article 29(2) prohibits denial of admission into any educational institution maintained by the State or receiving State aid on grounds only of religion, race, caste, or language.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 82 (Printed p. 76)',
      },
      {
        id: 'CLM-T9-13.3',
        statement: 'Article 30(1) grants all minorities, whether based on religion or language, the right to establish and administer educational institutions of their choice.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 83 (Printed p. 77)',
      },
      {
        id: 'CLM-T9-13.4',
        statement: 'In T.M.A. Pai Foundation (2002) and P.A. Inamdar (2005), the Supreme Court ruled that while minority institutions have administrative autonomy, reasonable State regulations for academic excellence, teacher qualifications, and prevention of maladministration are constitutional.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 83 (Printed p. 77)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Preserving Cultural Diversity & Minority Autonomy',
        body: 'Articles 29 and 30 assure minority communities that their language, heritage, and autonomous institutions will not be submerged by majoritarian pressures.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Article 29 vs Article 30 Key Distinctions',
        body: '1. **Article 29**: Protects "any section of citizens" (linguistic, cultural, or script); includes majority groups (*DAV College Bathinda 1971*).\n2. **Article 30**: Exclusively available to religious and linguistic minorities (State is unit for determining minority status).\n3. **State Regulation**: Autonomy in administration cannot be misused for maladministration (T.M.A. Pai 2002).',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Minority Rights, Educational Institutions, Regulatory Autonomy.',
        examNotes: 'Distinction between Art 29 (any section of citizens) and Art 30 (minorities only) is a frequent prelims trap.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Cultural & Educational Protections.',
        examNotes: 'Direct questions on religious vs linguistic minorities definition and T.M.A. Pai guidelines.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'General Law: Legal status of minority educational trusts.',
        examNotes: 'Regulatory compliance of educational trust accounts.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Articles 29 & 30 Rapid Pegs:\n• Art 29(1): Protects ANY section of citizens (majority or minority) conserving language/script/culture.\n• Art 30(1): Exclusively for Religious & Linguistic minorities to establish/administer schools.\n• T.M.A. Pai 2002: Minority status is State-wise; State can regulate academic standards against maladministration.',
        keyTakeaways: ['Art 29 covers any section of citizens', 'Art 30 is Religious & Linguistic minority-only', 'T.M.A. Pai State-level minority unit'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Articles 29 & 30 protect diversity. 29(1) right to conserve script; 29(2) non-discrimination in state-aided admissions. 30(1) minority schools. 44th Amd added 30(1A) ensuring full compensation on property acquisition. T.M.A. Pai allows academic standards regulation.',
        keyTakeaways: ['Article 30(1A) compensation rule', 'T.M.A. Pai Foundation (2002)', 'P.A. Inamdar (2005)'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of minority educational rights: Determination of minority status at State level (T.M.A. Pai), St. Stephens admission quota, AMU minority status jurisprudence, and RTE Section 12(1)(c) exemption.',
        keyTakeaways: ['State as unit for determining minority status', 'St. Stephens (1992)', 'Pramati Educational Trust (2014) RTE exemption'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'What types of minorities are explicitly recognized under Article 30 of the Indian Constitution?',
        type: 'CONCEPTUAL',
        difficulty: 'EASY',
        explanation: 'Article 30(1) explicitly recognizes only two categories of minorities: religious minorities and linguistic minorities.',
        options: [
          { text: 'Religious and Linguistic minorities only', isCorrect: true },
          { text: 'Religious, Linguistic, and Ethnic minorities', isCorrect: false, distractorExplanation: 'Ethnic minorities are not mentioned in Article 30.' },
          { text: 'Caste-based and Economic minorities', isCorrect: false, distractorExplanation: 'Article 30 does not apply to caste or economic groups.' },
          { text: 'Regional and Cultural minorities only', isCorrect: false, distractorExplanation: 'The constitutional text specifies Religious and Linguistic.' },
        ],
      },
    ],
  },

  // 14. Articles 31, 300A & Bulldozer Jurisprudence — Property & Due Process
  {
    id: 'CON-T9-14',
    slug: 'articles-31-300a-property-due-process',
    title: 'Articles 31 & 300A — Property Abolition & Due Process Jurisprudence',
    shortDefinition:
      'Traces the constitutional transition of the Right to Property from a Fundamental Right (Article 31) to a constitutional/legal right (Article 300A by the 44th Amendment), alongside contemporary Supreme Court directives against punitive property demolitions ("Bulldozer Justice").',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T9-39', 'SEM-T9-40'],
    beneficiaryScope: {
      wording: '"no person shall be deprived of his property"',
      practicalScope: 'Any person (citizens and non-citizens, natural and juristic persons).',
      qualifications: 'Deprivation requires statutory authority of law, public purpose, and fair procedure. Not in Part III (cannot move Art 32 for pure property loss without Art 21 link).',
      examTrap: 'Assuming Property is a fundamental right. It is a constitutional right in Part XII.',
    },
    claims: [
      {
        id: 'CLM-T9-14.1',
        statement: 'The 44th Constitutional Amendment Act 1978 deleted the Right to Property from Part III (repealing Articles 19(1)(f) and 31) and relocated it as a constitutional/legal right under Article 300A in Part XII.',
        claimType: 'HISTORICAL_CLAIM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 83 (Printed p. 77)',
      },
      {
        id: 'CLM-T9-14.2',
        statement: 'Under Article 300A, no person shall be deprived of their property save by authority of law, requiring a valid statute, public purpose, and fair procedure.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 83 (Printed p. 77)',
      },
      {
        id: 'CLM-T9-14.3',
        statement: 'In landmark 2024 directives, the Supreme Court laid down nationwide guidelines against punitive executive demolitions ("Bulldozer Justice"), ruling that demolition of properties without notice, hearing, and due process violates the Rule of Law and the Right to Shelter under Article 21.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 84 (Printed p. 78)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Fundamental Right to Legal Due Process',
        body: 'The deletion of Article 31 prevented wealthy landowners from blocking socialist agrarian land reforms, while Article 300A ensures that citizens cannot be arbitrarily dispossessed without statutory authority and due process.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_ANALYSIS',
        title: '2024 Supreme Court Directives Against Punitive Demolitions',
        body: 'The Supreme Court held that the executive cannot act as a judge and penalize accused persons by demolishing their homes. Mandatory safeguards include: 15-day prior show-cause notice, personal hearing, reasoned speaking order, and digital videography.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Rule of Law, Separation of Powers, Administrative Overreach, Article 300A.',
        examNotes: 'High-yield for Mains questions on administrative due process vs arbitrary demolitions and Article 300A compensation standards.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Administrative Law & Property Rights.',
        examNotes: 'Direct questions on 44th Amendment Act 1978 and municipal demolition procedures.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'SARFAESI Act & Recovery: Legal seizure of mortgaged property vs Article 300A.',
        examNotes: 'Bank property attachments under SARFAESI Act 2002 must strictly follow statutory authority of law under Article 300A.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Articles 31 & 300A Rapid Pegs:\n• 44th Amd 1978: Property deleted from Part III (Arts 19(1)(f) & 31); relocated to Art 300A in Part XII.\n• Art 300A: Deprivation requires valid legislative statute and fair procedure.\n• 2024 SC Directives: Punitive bulldozer demolitions without 15-day notice and hearing violate Rule of Law & Art 21.',
        keyTakeaways: ['44th Amendment transition to Art 300A', 'Article 300A statutory authority', '2024 SC Demolition Due Process Guidelines'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Property transitioned from Part III (Art 31) to Part XII (Art 300A). Deprivation requires authority of law and public purpose. 2024 SC directives establish that punitive demolition without hearing violates Rule of Law and Art 21.',
        keyTakeaways: ['Article 300A authority of law', 'Eminent domain limits', '2024 Demolition guidelines: 15-day notice & videography'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of property rights in India: 1st, 4th, 25th, and 44th Amendments, agrarian land reform litigation (Bela Banerjee, Kameshwar Singh), Kolkata Municipal Corp (2024) 7 procedural rights under 300A, and 2024 Bulldozer action bench.',
        keyTakeaways: ['Kolkata Municipal Corp v. Bimal Kumar (2024)', '7 sub-rights under Article 300A', 'Due process safeguards against executive demolition'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'What is the current constitutional status of the Right to Property in India?',
        type: 'CONCEPTUAL',
        difficulty: 'EASY',
        explanation: 'Following the 44th Amendment Act 1978, the Right to Property was deleted from Part III and is now a constitutional/legal right under Article 300A in Part XII.',
        options: [
          { text: 'A Fundamental Right under Part III', isCorrect: false, distractorExplanation: 'Repealed by 44th Amendment.' },
          { text: 'A Constitutional / Legal Right under Article 300A (Part XII)', isCorrect: true },
          { text: 'A Directive Principle of State Policy under Part IV', isCorrect: false, distractorExplanation: 'It is a constitutional right in Part XII.' },
          { text: 'A mere customary right without constitutional backing', isCorrect: false, distractorExplanation: 'Article 300A is a constitutional provision.' },
        ],
      },
    ],
  },

  // 15. Article 32 & Writs — Right to Constitutional Remedies
  {
    id: 'CON-T9-15',
    slug: 'article-32-writs-constitutional-remedies',
    title: 'Article 32 & Writs — Right to Constitutional Remedies',
    shortDefinition:
      'Article 32 guarantees the fundamental right to approach the Supreme Court for the enforcement of Part III rights, empowering the Court to issue 5 prerogative writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T9-41', 'SEM-T9-42'],
    beneficiaryScope: {
      wording: '"the right to move the Supreme Court"',
      practicalScope: 'Any person whose Part III Fundamental Right is infringed.',
      qualifications: 'Article 32 is itself a Fundamental Right; limited strictly to Part III violations (unlike Article 226 which covers fundamental and ordinary legal rights).',
      examTrap: 'Filing an Art 32 petition for violation of an ordinary legal or statutory right (e.g. breach of contract or Art 300A property loss). Must go under Art 226.',
    },
    claims: [
      {
        id: 'CLM-T9-15.1',
        statement: 'Dr. B.R. Ambedkar described Article 32 as the "Heart and Soul of the Constitution", as it guarantees the fundamental right to move the Supreme Court by appropriate proceedings for the enforcement of Part III rights.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 85 (Printed p. 79)',
        verbatimQuote: 'Dr. B.R. Ambedkar called Article 32 the "Heart and Soul of the Constitution".',
      },
      {
        id: 'CLM-T9-15.2',
        statement: 'Article 32 is itself a Fundamental Right, making the Supreme Court the protector and guarantor of fundamental rights, unlike Article 226 High Court writ jurisdiction which is a constitutional (discretionary) power.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 85 (Printed p. 79)',
      },
      {
        id: 'CLM-T9-15.3',
        statement: 'The Supreme Court and High Courts can issue 5 types of prerogative writs: (1) Habeas Corpus (produce the body), (2) Mandamus (command to perform public duty), (3) Prohibition (prevent lower court exceeding jurisdiction), (4) Certiorari (quash lower court order), and (5) Quo Warranto (challenge unlawful public office holding).',
        claimType: 'COMPARISON_TABLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 85 (Printed p. 79)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'A Right Without a Remedy is a Meaningless Declaration',
        body: 'Article 32 makes Fundamental Rights real by providing a direct, non-derogable constitutional highway to the highest court of the land.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'COMPARISON',
        title: 'Comparative Matrix of the 5 Constitutional Writs',
        body: '| Writ | Literal Meaning | Against Whom Issued | When NOT Issued |\n| :--- | :--- | :--- | :--- |\n| **Habeas Corpus** | "To have the body of" | Public authorities & Private individuals | Lawful detention, contempt of court/legislature, detention outside jurisdiction |\n| **Mandamus** | "We command" | Public officials, statutory bodies, lower courts, Government | Private individuals, discretionary duties, contractual obligations, President/Governor |\n| **Prohibition** | "To forbid" | Judicial and Quasi-judicial authorities only | Administrative, legislative, or private bodies |\n| **Certiorari** | "To be certified" | Judicial, Quasi-judicial, and Administrative authorities affecting rights | Legislative bodies and private individuals |\n| **Quo Warranto** | "By what authority" | Public offices of substantive character created by statute/Constitution | Ministerial offices or private private offices |',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Writ Jurisdiction, Comparison of Art 32 vs Art 226, Judicial Review.',
        examNotes: 'Frequently tests differences between Prohibition vs Certiorari, Mandamus limitations, and Article 32 vs 226 scope.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: High Court and Supreme Court Writ Jurisdiction.',
        examNotes: 'Detailed 50-word and 100-word questions on each writ and Article 32 as Basic Structure.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Banking Law: Writ petitions against Public Sector Banks and RBI.',
        examNotes: 'Mandamus and Certiorari applications against PSB disciplinary actions, loan recovery orders, and banking ombudsman rulings.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 32 Rapid Pegs:\n• Dr. Ambedkar Heart & Soul of Constitution; unassailable Basic Structure (L. Chandra Kumar 1997).\n• Art 32 (FR only, mandatory SC remedy) vs Art 226 (FR + Legal rights, discretionary HC remedy).\n• 5 Writs: Habeas Corpus (public+private), Mandamus (public duty), Prohibition (prevent), Certiorari (quash), Quo Warranto (office title).',
        keyTakeaways: ['Article 32 is itself a Fundamental Right', 'Art 32 (FR only) vs Art 226 (FR + Legal rights)', '5 Prerogative Writs Matrix'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 32 provides remedies. Habeas Corpus applies to private & public unlawful detention. Mandamus enforces public duty. Prohibition stops proceedings; Certiorari quashes completed illegal orders. Quo Warranto challenges public office holding.',
        keyTakeaways: ['Dr. B.R. Ambedkar Heart & Soul', 'Habeas Corpus against private parties', 'Certiorari applies to administrative bodies post-1991'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Deep architectural comparison of Articles 32 and 226: Locus standi evolution through Public Interest Litigation (PIL / S.P. Gupta 1981), Basic Structure doctrine status (Fertilizer Corporation, L. Chandra Kumar 1997), and territorial scope.',
        keyTakeaways: ['L. Chandra Kumar (1997) Basic Structure', 'PIL and relaxation of Locus Standi', 'Article 32 vs Article 226 complete comparison'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Which constitutional writ can be issued against BOTH public authorities AND private individuals for unlawful detention?',
        type: 'CONCEPTUAL',
        difficulty: 'EASY',
        explanation: 'Habeas Corpus is the only writ that can be issued against both public officials and private individuals who unlawfully confine or detain a person.',
        options: [
          { text: 'Mandamus', isCorrect: false, distractorExplanation: 'Mandamus cannot be issued against private individuals.' },
          { text: 'Habeas Corpus', isCorrect: true },
          { text: 'Certiorari', isCorrect: false, distractorExplanation: 'Certiorari is issued against judicial/administrative bodies, not private individuals.' },
          { text: 'Quo Warranto', isCorrect: false, distractorExplanation: 'Quo Warranto is issued only against substantive public offices.' },
        ],
      },
    ],
  },

  // 16. Articles 33–35 & Amendability — Limitations & Basic Structure
  {
    id: 'CON-T9-16',
    slug: 'articles-33-35-amendability-basic-structure',
    title: 'Articles 33–35 & Amendability — Limitations & Basic Structure',
    shortDefinition:
      'Articles 33–35 empower Parliament to modify Fundamental Rights for armed forces, indemnify acts during Martial Law, and exclusively legislate for Part III, framed within the historical amendability debate from Shankari Prasad (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T9-43', 'SEM-T9-44', 'SEM-T9-45'],
    beneficiaryScope: {
      wording: 'Parliamentary Competence / Armed Forces Limits',
      practicalScope: 'Applies to Armed Forces, police, intelligence agencies (Art 33), areas under Martial Law (Art 34), and parliamentary exclusivity (Art 35).',
      qualifications: 'State Legislatures are strictly barred from enacting penal laws under Part III (Art 35). Amendability is subject to Basic Structure.',
      examTrap: 'Assuming a State Assembly can pass a law prescribing punishment for Untouchability under Art 17. Only Parliament has this power under Art 35.',
    },
    claims: [
      {
        id: 'CLM-T9-16.1',
        statement: 'Article 33 empowers Parliament exclusively to restrict or abrogate Fundamental Rights in their application to members of the Armed Forces, paramilitary forces, police, and intelligence agencies to ensure proper discharge of duties and discipline.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 86 (Printed p. 80)',
      },
      {
        id: 'CLM-T9-16.2',
        statement: 'Article 34 empowers Parliament to indemnify any person in service of the Union or State for acts done during the operation of Martial Law, while Article 35 reserves exclusive legislative competence to Parliament to make laws giving effect to Part III (Arts 16(3), 32(3), 33, 34).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 86 (Printed p. 80)',
      },
      {
        id: 'CLM-T9-16.3',
        statement: 'The constitutional amendability of Fundamental Rights evolved chronologically through Shankari Prasad (1951, Parliament can amend FRs) → Sajjan Singh (1965) → Golaknath (1967, Parliament cannot abridge FRs) → 24th Amendment (1971) → Kesavananda Bharati (1973, Basic Structure Doctrine).',
        claimType: 'HISTORICAL_CLAIM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 87 (Printed p. 81)',
      },
      {
        id: 'CLM-T9-16.4',
        statement: 'In Minerva Mills v. Union of India (1980), the Supreme Court struck down the 42nd Amendment expansion of Article 31C, holding that the harmony and balance between Fundamental Rights (Part III) and Directive Principles (Part IV) is an essential feature of the Basic Structure.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 88 (Printed p. 82)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'National Security Discipline & Constitutional Balance',
        body: 'Articles 33–35 preserve the operational integrity of security forces and legislative uniformity, while the Basic Structure doctrine prevents legislative destruction of core constitutional freedoms.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Great Amendability Chronology (1951 → 1980)',
        body: '1. **Shankari Prasad (1951)**: Article 368 includes power to amend Part III.\n2. **Golaknath (1967)**: 11-judge bench holds Part III is transcendental; Art 368 is only procedure.\n3. **24th Amendment (1971)**: Parliament asserts power to amend any part of Constitution.\n4. **Kesavananda Bharati (1973)**: 13-judge bench establishes Basic Structure Doctrine; Parliament can amend Part III without destroying basic features.\n5. **Minerva Mills (1980)**: Fundamental Rights and DPSPs are two wheels of a chariot; neither can destroy the other.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Basic Structure Doctrine, Constitutional Amendments, Article 368.',
        examNotes: 'Foundational for both Prelims and Mains. Expect questions on Kesavananda Bharati 50-year anniversary, Minerva Mills balance, and Article 33 scope.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Constitutional Amendments & Basic Structure.',
        examNotes: 'Detailed questions on Golaknath, 24th Amendment, and Kesavananda Bharati milestones.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Supremacy: Basic structure limits on statutory amendments.',
        examNotes: 'Basic awareness of constitutional supremacy.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Articles 33–35 & Amendability Rapid Pegs:\n• Art 33/34: Parliament can modify FRs for Armed Forces & indemnify acts under Martial Law.\n• Art 35: ONLY Parliament (not State legislatures) can enact laws prescribing punishments for Part III offences.\n• Amendability: Shankari Prasad (1951) -> Golaknath (1967) -> Kesavananda (1973 Basic Structure) -> Minerva Mills (1980 Part III-IV balance).',
        keyTakeaways: ['Art 35 Parliament exclusive power', 'Kesavananda Bharati (1973) Basic Structure', 'Minerva Mills (1980) Part III-IV Two Wheels of Chariot'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 33 restricts FRs for armed forces/intelligence. Article 35 gives exclusive power to Parliament (not State Legislatures) to make laws under Arts 16(3), 32(3), 33, 34. Kesavananda Bharati (1973) established Basic Structure. Minerva Mills (1980) struck down 42nd Amd extension of 31C.',
        keyTakeaways: ['State legislatures cannot enact Part III penal laws', 'Golaknath prospective overruling', 'Kesavananda 7:6 majority', 'Harmonious construction between Part III and IV'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of constitutional amendment jurisprudence: Shankari Prasad, Sajjan Singh, Golaknath, 24th/25th/42nd Amendments, Kesavananda Bharati, Indira Gandhi v. Raj Narain, Minerva Mills, and 2024 Property Owners Association Article 31C benchmark.',
        keyTakeaways: ['Complete constitutional case trajectory', 'Basic Structure components', 'Property Owners Association (2024) Article 31C status'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'In Minerva Mills v. Union of India (1980), how did the Supreme Court characterize the relationship between Fundamental Rights (Part III) and Directive Principles (Part IV)?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'In Minerva Mills (1980), Chief Justice Chandrachud observed that the Indian Constitution is founded on the bedrock of the balance between Part III and Part IV. They are like the two wheels of a chariot, neither having absolute primacy over the other.',
        options: [
          { text: 'Directive Principles have absolute supremacy over Fundamental Rights in all circumstances.', isCorrect: false, distractorExplanation: 'This was the 42nd Amendment view struck down in Minerva Mills.' },
          { text: 'Fundamental Rights and Directive Principles are two wheels of a chariot, and their harmony is part of the Basic Structure.', isCorrect: true },
          { text: 'Directive Principles were deleted from constitutional review.', isCorrect: false, distractorExplanation: 'DPSPs remain fundamental in the governance of the country under Article 37.' },
          { text: 'Parliament can abrogate Part III entirely using Article 368.', isCorrect: false, distractorExplanation: 'Violates the Basic Structure Doctrine established in Kesavananda Bharati.' },
        ],
      },
    ],
  },
];

/**
 * Executes full canonical knowledge seeding across all 16 Topic 9 concepts.
 */
export async function seedTopic9CanonicalKnowledge() {
  const result = await executePhase6ControlledIngestion();
  const sourceId = result.sourceId;

  const cuTopic9 = await db.coverageUnit.findFirstOrThrow({
    where: { sourceId, label: { contains: 'Coverage Unit 9:' } },
  });

  // Seed 45 semantic inventory items first
  await seedTopic9SemanticInventory(sourceId, cuTopic9.id);

  // Setup Domain -> Subject -> Topic hierarchy
  let domain = await db.domain.findFirst({ where: { name: 'Indian Governance & Administration' } });
  if (!domain) {
    domain = await db.domain.create({
      data: {
        name: 'Indian Governance & Administration',
        slug: 'indian-governance-administration',
        description: 'Constitutional, administrative, and public policy framework of India.',
      },
    });
  }

  let subject = await db.subject.findFirst({ where: { name: 'Indian Polity', domainId: domain.id } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        name: 'Indian Polity',
        slug: 'indian-polity',
        domainId: domain.id,
        scopeStatement: 'Constitutional law, state institutions, political dynamics, and governance.',
        description: 'Constitutional law, state institutions, political dynamics, and governance.',
      },
    });
  }

  let topic = await db.topic.findFirst({ where: { title: 'Part III: Fundamental Rights', subjectId: subject.id } });
  if (!topic) {
    topic = await db.topic.create({
      data: {
        title: 'Part III: Fundamental Rights',
        slug: 'part-3-fundamental-rights',
        subjectId: subject.id,
        order: 9,
        description: 'Constitutional charter of fundamental rights under Articles 12 to 35.',
      },
    });
  }

  const seededConcepts = [];

  for (const conceptDef of TOPIC_9_CANONICAL_CONCEPTS) {
    // Upsert Concept
    const concept = await db.concept.upsert({
      where: {
        topicId_slug: {
          topicId: topic.id,
          slug: conceptDef.slug,
        },
      },
      update: {
        title: conceptDef.title,
        shortDefinition: conceptDef.shortDefinition,
        difficulty: conceptDef.difficulty,
        status: 'CANONICAL',
      },
      create: {
        id: conceptDef.id,
        slug: conceptDef.slug,
        title: conceptDef.title,
        shortDefinition: conceptDef.shortDefinition,
        difficulty: conceptDef.difficulty,
        topicId: topic.id,
        status: 'CANONICAL',
      },
    });

    // Clear old claims, blocks, exams, questions, revision units
    await db.evidence.deleteMany({ where: { claim: { conceptId: concept.id } } });
    await db.claim.deleteMany({ where: { conceptId: concept.id } });
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    await db.question.deleteMany({ where: { conceptId: concept.id } });

    // Seed Claims & Evidence
    for (const c of conceptDef.claims) {
      const claim = await db.claim.create({
        data: {
          id: c.id,
          conceptId: concept.id,
          statement: c.statement,
          claimType: c.claimType as any,
          epistemicLevel: c.epistemicLevel,
          confidence: c.confidence,
          scopeConditions: c.scopeConditions || null,
          status: 'VERIFIED',
        },
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId,
          locator: c.evidenceLocator,
          excerpt: c.verbatimQuote || c.statement,
          notes: `Verified provenance against CERAMIC-POLITY-2026.`,
        },
      });
    }

    // Seed Content Blocks
    for (const b of conceptDef.contentBlocks) {
      let bodyText = b.body;
      if (b.analogyMetadata) {
        bodyText = `${bodyText}\n\n> **Analogy**: ${b.analogyMetadata.analogy}\n> **Core Insight**: ${b.analogyMetadata.intendedInsight}\n> **Where Analogy Breaks Down**: ${b.analogyMetadata.whereItBreaksDown}`;
      }

      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: b.type,
          title: b.title || null,
          body: bodyText,
          order: b.order,
          visibility: b.visibility,
        },
      });
    }

    // Seed Exam Mappings
    for (const em of conceptDef.examMappings) {
      const examSlug = em.examCode.toLowerCase().replace(/_/g, '-');
      let exam = await db.exam.findFirst({ where: { slug: examSlug } });
      if (!exam) {
        exam = await db.exam.create({
          data: {
            slug: examSlug,
            name: em.examName,
            description: `${em.examName} competitive examination.`,
          },
        });
      }

      await db.examConceptMapping.create({
        data: {
          examId: exam.id,
          conceptId: concept.id,
          relevance: em.relevance,
          priority: em.weightage === 'HIGH' ? 'HIGH_YIELD' : 'MEDIUM_YIELD',
          syllabusUnit: em.syllabusSection,
          notes: em.examNotes,
        },
      });
    }

    // Seed Revision Units
    for (const ru of conceptDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.tier,
          content: `${ru.summary}\n\nKey Takeaways:\n${ru.keyTakeaways.map((t) => `- ${t}`).join('\n')}`,
          priority: 'HIGH',
          order: ru.order,
        },
      });
    }

    // Seed Active Recall Questions
    for (const q of conceptDef.questions) {
      const correctOption = q.options.find((o) => o.isCorrect)?.text || q.options[0].text;
      await db.question.create({
        data: {
          conceptId: concept.id,
          stem: q.stem,
          type: q.type === 'APPLICATION' ? 'MCQ_APPLICATION' : 'MCQ_SINGLE',
          difficulty: q.difficulty === 'EASY' ? 'BASIC' : q.difficulty === 'HARD' ? 'ADVANCED' : 'MODERATE',
          explanation: q.explanation,
          options: JSON.stringify(q.options),
          correctAnswer: correctOption,
        },
      });
    }

    seededConcepts.push(concept);
  }

  return {
    sourceId,
    coverageUnitId: cuTopic9.id,
    seededConceptsCount: seededConcepts.length,
    concepts: seededConcepts,
  };
}
