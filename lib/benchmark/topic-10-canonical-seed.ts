import { db } from '../db/client';
import { executePhase6ControlledIngestion } from '../ingestion/polity-pdf-ingestor';
import { seedTopic10SemanticInventory, TOPIC_10_SEMANTIC_UNITS } from '../ingestion/semantic-coverage';

export interface Topic10ConceptSeedDefinition {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  semanticUnitIds: string[];
  dutyBearerScope: {
    wording: string;
    practicalScope: string;
    enforceabilityLimits: string;
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

export const TOPIC_10_CANONICAL_CONCEPTS: Topic10ConceptSeedDefinition[] = [
  // 1. Nature & Justiciability (Arts 36–37)
  {
    id: 'CON-T10-01',
    slug: 'dpsp-nature-justiciability-article-37',
    title: 'Nature, Features & Justiciability of Directive Principles (Articles 36–37)',
    shortDefinition:
      'Part IV of the Indian Constitution (Articles 36–51) embodies the ideals of a Welfare State and socio-economic democracy, borrowed from Ireland, which are non-justiciable under Article 37 yet declared fundamental in governance.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T10-01', 'SEM-T10-02', 'SEM-T10-03'],
    dutyBearerScope: {
      wording: '"Duty of the State to apply these principles in making laws" (Art 37)',
      practicalScope: 'Binds all organs of the State (Union & State Executives, Legislatures, Local and Other Authorities per Art 36/12).',
      enforceabilityLimits: 'Explicitly non-enforceable by any court (no writ of mandamus can compel enactment of a DPSP), but serves as a constitutional test of legislative reasonableness under Arts 14 and 19.',
      examTrap: 'Filing a writ petition under Art 32 seeking judicial mandamus to enact a DPSP. Courts cannot issue such writs.',
    },
    claims: [
      {
        id: 'CLM-T10-01.1',
        statement: 'Part IV (Articles 36 to 51) was borrowed from the Irish Constitution of 1937 (which in turn derived it from the Spanish Constitution), resembling the "Instrument of Instructions" under the Government of India Act 1935.',
        claimType: 'HISTORICAL_CLAIM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 89 (Printed p. 83)',
        verbatimQuote: 'Directive Principles of State Policy are enumerated in Part IV of the Constitution from Articles 36 to 51. The framers borrowed this idea from the Irish Constitution of 1937.',
      },
      {
        id: 'CLM-T10-01.2',
        statement: 'Article 36 provides that the term "State" in Part IV has the same meaning as in Article 12 of Part III (Union/State governments, legislatures, local and other statutory authorities).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 89 (Printed p. 83)',
      },
      {
        id: 'CLM-T10-01.3',
        statement: 'Article 37 establishes that Directive Principles shall not be enforceable by any court, but are nevertheless fundamental in the governance of the country, and it shall be the duty of the State to apply these principles in making laws.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 90 (Printed p. 84)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Socio-Economic Democracy vs Political Democracy',
        body: 'While Fundamental Rights in Part III establish *political democracy* by setting boundaries around State power, Directive Principles in Part IV establish *socio-economic democracy* by outlining the affirmative blueprint for a Welfare State.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Dual Character of Article 37',
        body: 'Article 37 contains a deliberate constitutional paradox:\n1. **Negative Shield**: "The provisions contained in this Part shall not be enforceable by any court."\n2. **Positive Duty**: "The principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws."\n\n*Judicial Significance*: Courts cannot strike down a statute for failing to implement a DPSP, but courts routinely use DPSPs to determine "reasonable restrictions" under Articles 14, 19, and 21.',
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
        syllabusSection: 'GS Paper II: Directive Principles of State Policy, Welfare State, Constitutionalism.',
        examNotes: 'High-yield for conceptual Prelims questions (Instrument of Instructions, Irish lineage, Article 37 non-justiciability) and Mains analysis of socio-economic democracy.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Directive Principles of State Policy & State Welfare Schemes.',
        examNotes: 'Direct 20-word and 50-word questions on Article 37 text, Irish origin, and difference between Part III and Part IV.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'LOW',
        syllabusSection: 'Socio-Economic Framework: State welfare directives and priority sector lending.',
        examNotes: 'Basic awareness of constitutional welfare mandates guiding public banking objectives.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'DPSPs Overview Rapid Pegs:\n• Part IV (Arts 36–51): Borrowed from Irish Constitution 1937; resembles 1935 Instrument of Instructions.\n• Art 36: State has same definition as Art 12.\n• Art 37: Non-justiciable in court, yet FUNDAMENTAL in governance (Duty of State in lawmaking).',
        keyTakeaways: ['Irish Origin (Articles 36–51)', 'Article 36 adopts Art 12 definition', 'Article 37 Non-Justiciable but Fundamental'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Directive Principles embody socio-economic democracy and the Welfare State concept. Unlike Part III negative political rights, Part IV contains positive affirmative directives. Under Article 37, they cannot be enforced via court writs, but guide statutory interpretation and reasonableness tests.',
        keyTakeaways: ['Political Democracy (Part III) vs Socio-Economic Democracy (Part IV)', 'Article 37 non-enforceability', 'Instrument of Instructions legacy'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Deep architectural analysis of Part IV: Constituent Assembly debates (Sir B.N. Rau recommendation of Justiciable vs Non-Justiciable rights), comparison with Irish Bunreacht na hÉireann Article 45, and modern constitutional reliance on DPSPs for validating progressive welfare statutes.',
        keyTakeaways: ['B.N. Rau dual rights formulation', 'Granville Austin: Part III and IV as Conscience of Constitution', 'Justiciability vs Governance enforceability'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Under Article 37 of the Constitution, what is the legal character of Directive Principles of State Policy?',
        type: 'CONCEPTUAL',
        difficulty: 'EASY',
        explanation: 'Article 37 explicitly declares that DPSPs are not enforceable by any court, but are nevertheless fundamental in the governance of the country, making it the duty of the State to apply them in making laws.',
        options: [
          { text: 'They are directly enforceable by High Courts and the Supreme Court through writs.', isCorrect: false, distractorExplanation: 'Article 37 explicitly bars court enforceability.' },
          { text: 'They are non-enforceable by courts but fundamental in governance and mandatory for State lawmaking.', isCorrect: true },
          { text: 'They are subordinate to ordinary statutory laws passed by Parliament.', isCorrect: false, distractorExplanation: 'They are constitutional directives that guide statutory interpretation.' },
          { text: 'They apply only during National Emergencies.', isCorrect: false, distractorExplanation: 'They apply continuously to all State governance.' },
        ],
      },
    ],
  },

  // 2. Three-Fold Typology & Amendments (Arts 38–51)
  {
    id: 'CON-T10-02',
    slug: 'dpsp-classification-socialistic-gandhian-liberal',
    title: 'Three-Fold Typology & Constitutional Amendments of DPSPs',
    shortDefinition:
      'Although the Constitution does not formally classify DPSPs, they are categorized based on their ideological content into Socialistic, Gandhian, and Liberal-Intellectual principles, enriched by the 42nd, 44th, 86th, and 97th Amendments.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T10-04', 'SEM-T10-05', 'SEM-T10-06', 'SEM-T10-07', 'SEM-T10-08', 'SEM-T10-09', 'SEM-T10-10', 'SEM-T10-11'],
    dutyBearerScope: {
      wording: 'State policy mandates across socio-economic spheres',
      practicalScope: 'Guides administrative planning, tax policy, labour welfare, environmental law, and educational programs.',
      enforceabilityLimits: 'Directives set target goals; realization is subject to state financial capacity and legislative enactment.',
      examTrap: 'Confusing article categories: e.g., assuming Article 44 (UCC) is a Gandhian principle (it is Liberal-Intellectual), or Article 40 (Panchayats) is Liberal (it is Gandhian).',
    },
    claims: [
      {
        id: 'CLM-T10-02.1',
        statement: 'Socialistic principles (Articles 38, 39, 39A, 41, 42, 43, 43A, 47) aim to eliminate inequalities in income, secure adequate livelihood, distribute material resources for common good, prevent concentration of wealth, and ensure living wages and worker participation.',
        claimType: 'COMPARISON_TABLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 91 (Printed p. 85)',
      },
      {
        id: 'CLM-T10-02.2',
        statement: 'Gandhian principles (Articles 40, 43, 43B, 46, 47, 48) reflect Gandhi programme of national reconstruction: organizing Village Panchayats, promoting cottage industries and cooperatives, advancing SC/ST interests, prohibiting intoxicants, and banning cow slaughter.',
        claimType: 'COMPARISON_TABLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 91 (Printed p. 85)',
      },
      {
        id: 'CLM-T10-02.3',
        statement: 'Liberal-Intellectual principles (Articles 44, 45, 48, 48A, 49, 50, 51) embody modern liberal ideology: Uniform Civil Code, early childhood care, scientific agriculture, environmental protection, monument preservation, separation of judiciary, and international peace.',
        claimType: 'COMPARISON_TABLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 92 (Printed p. 86)',
      },
      {
        id: 'CLM-T10-02.4',
        statement: 'Four major Constitutional Amendments added or modified DPSPs: 42nd Amendment 1976 (added Arts 39(f), 39A, 43A, 48A), 44th Amendment 1978 (inserted Art 38(2)), 86th Amendment 2002 (modified Art 45 for early childhood), and 97th Amendment 2011 (inserted Art 43B).',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Pages 92-94 (Printed pp. 86-88)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Ideological Pluralism in the Constituent Assembly',
        body: 'The three-fold classification of DPSPs reflects the ideological synthesis of the Indian freedom movement: combining Fabian Socialism (Nehru), Village Swaraj and moral reform (Gandhi), and modern Western constitutional liberalism (Ambedkar).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'COMPARISON',
        title: 'The Comprehensive Three-Fold Ideological Matrix',
        body: '| Ideological Category | Constitutional Articles | Key State Objectives |\n| :--- | :--- | :--- |\n| **Socialistic Principles** | **Arts 38, 39, 39A, 41, 42, 43, 43A, 47** | Welfare state, wealth de-concentration, equal pay for equal work, free legal aid, right to work, living wage, workers management participation, public health |\n| **Gandhian Principles** | **Arts 40, 43, 43B, 46, 47, 48** | Village Panchayats as units of self-government, cottage industries, cooperative societies, SC/ST upliftment, prohibition of liquor/drugs, cow protection |\n| **Liberal-Intellectual** | **Arts 44, 45, 48, 48A, 49, 50, 51** | Uniform Civil Code, early childhood care, scientific animal husbandry, forest/wildlife protection, monuments protection, separation of judiciary from executive, international peace & arbitration |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Chronological Ladder of DPSP Amendments (1976 → 2011)',
        body: '• **42nd Amendment Act 1976** $\\rightarrow$ Added 4 new provisions:\n  1. *Article 39(f)*: Healthy development of children.\n  2. *Article 39A*: Equal justice and free legal aid to the poor.\n  3. *Article 43A*: Participation of workers in the management of industries.\n  4. *Article 48A*: Protection and improvement of environment and safeguarding forests and wildlife.\n• **44th Amendment Act 1978** $\\rightarrow$ Inserted *Article 38(2)* mandating the State to minimize inequalities in income, status, facilities, and opportunities.\n• **86th Amendment Act 2002** $\\rightarrow$ Changed subject matter of *Article 45* to Early Childhood Care and Education below 6 years (while shifting 6-14 schooling to Fundamental Right under Art 21A).\n• **97th Amendment Act 2011** $\\rightarrow$ Inserted *Article 43B* promoting voluntary and autonomous Cooperative Societies.',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Classification of DPSPs, 42nd/44th/86th Amendments, Separation of Powers (Art 50).',
        examNotes: 'Frequent Prelims questions requiring classification of specific articles (e.g. which of the following are Gandhian principles?).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Gandhian & Socialistic Directives, Panchayati Raj (Art 40).',
        examNotes: 'Detailed questions on 42nd Amendment additions and Article 40 implementation via 73rd Amendment.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'LOW',
        syllabusSection: 'Cooperative Banking: Article 43B and governance of cooperative societies.',
        examNotes: 'Article 43B constitutional backing for Primary Agricultural Credit Societies (PACS) and Urban Cooperative Banks (UCBs).',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'DPSP Typology & Amendments Rapid Pegs:\n• 3 Ideological Groups: Socialistic (38, 39, 39A, 41-43A, 47), Gandhian (40, 43, 43B, 46-48), Liberal-Intellectual (44, 45, 48A, 49-51).\n• 42nd Amd 1976 added 4: 39(f), 39A (Free Legal Aid), 43A (Worker Management), 48A (Forests/Wildlife).\n• Other Amds: 44th (Art 38(2) income inequality), 86th (Art 45 below 6 years), 97th (Art 43B Cooperatives).',
        keyTakeaways: ['Three-Fold Typology Matrix', '42nd Amendment 4 New DPSPs (39(f), 39A, 43A, 48A)', '86th (Art 45) & 97th (Art 43B) Amendments'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'DPSPs blend socialist welfare, Gandhian village empowerment, and liberal institutional norms. 42nd Amendment 1976 added 39(f), 39A, 43A, and 48A. 44th Amendment added 38(2) on inequality. 86th Amendment refocused Art 45 on early childhood care. 97th Amendment added Art 43B for cooperatives.',
        keyTakeaways: ['Socialistic vs Gandhian vs Liberal articles', 'Article 50: Separation of Judiciary from Executive', 'Article 51: International Peace & Arbitration'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Complete architectural analysis of all 16 DPSP articles and their legislative realization: Legal Services Authorities Act 1987 (Art 39A), 73rd/74th Amendments (Art 40), Maternity Benefit Act 2017 (Art 42), Wildlife Protection Act 1972 (Art 48A), and CrPC Section 3 judicial separation (Art 50).',
        keyTakeaways: ['Full Article-by-Article statutory implementation map', 'Article 43A Industrial Disputes Act linkage', 'Article 50 executive magistrate separation'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Which of the following Directive Principles was NOT added by the 42nd Constitutional Amendment Act of 1976?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'Article 43B (promotion of cooperative societies) was added by the 97th Amendment Act 2011. The 42nd Amendment Act 1976 added Article 39(f), Article 39A, Article 43A, and Article 48A.',
        options: [
          { text: 'Article 39A (Equal justice and free legal aid)', isCorrect: false, distractorExplanation: 'Added by 42nd Amendment.' },
          { text: 'Article 43A (Participation of workers in management of industries)', isCorrect: false, distractorExplanation: 'Added by 42nd Amendment.' },
          { text: 'Article 43B (Promotion of cooperative societies)', isCorrect: true },
          { text: 'Article 48A (Protection and improvement of environment)', isCorrect: false, distractorExplanation: 'Added by 42nd Amendment.' },
        ],
      },
    ],
  },

  // 3. Article 44 — Uniform Civil Code (UCC)
  {
    id: 'CON-T10-03',
    slug: 'article-44-uniform-civil-code-jurisprudence',
    title: 'Article 44 & The Uniform Civil Code (UCC) Jurisprudence',
    shortDefinition:
      'Article 44 directs the State to secure for citizens a Uniform Civil Code throughout the territory of India, balancing religious personal laws against gender equality, constitutional morality, and contemporary legislative models like the Uttarakhand UCC Act 2024.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T10-13', 'SEM-T10-14'],
    dutyBearerScope: {
      wording: '"The State shall endeavour to secure for the citizens a Uniform Civil Code" (Art 44)',
      practicalScope: 'Directs Union and State legislatures regarding civil personal laws (marriage, divorce, inheritance, succession, maintenance).',
      enforceabilityLimits: 'Non-justiciable directive; courts have repeatedly exhorted the State to enact UCC but cannot issue a writ of mandamus.',
      examTrap: 'Assuming only Parliament can enact a UCC. States have concurrent legislative power over marriage and succession (Entry 5, List III), enabling state-level UCC statutes like Uttarakhand (2024).',
    },
    claims: [
      {
        id: 'CLM-T10-03.1',
        statement: 'Article 44 directs that the State shall endeavour to secure for the citizens a Uniform Civil Code throughout the territory of India, designed to replace disparate religious personal laws with a common civil code for marriage, divorce, inheritance, and adoption.',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 95 (Printed p. 89)',
      },
      {
        id: 'CLM-T10-03.2',
        statement: 'In the Constituent Assembly, Dr. B.R. Ambedkar, K.M. Munshi, and Alladi Krishnaswamy Iyer defended Article 44, arguing that personal laws govern secular civil relations rather than religious essentials, and a UCC is vital for national integration and gender justice.',
        claimType: 'HISTORICAL_CLAIM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 95 (Printed p. 89)',
      },
      {
        id: 'CLM-T10-03.3',
        statement: 'In landmark decisions including Shah Bano (1985), Jordan Diengdeh (1985), Sarla Mudgal (1995), John Vallamattom (2003), and Shayara Bano (2017), the Supreme Court repeatedly observed that a Uniform Civil Code is necessary to eliminate gender discrimination in personal laws.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 96 (Printed p. 90)',
      },
      {
        id: 'CLM-T10-03.4',
        statement: 'In 2024, Uttarakhand became the first Indian State post-independence to enact a Uniform Civil Code (Uttarakhand UCC Act 2024), standardizing marriage, divorce, succession, and live-in relationships while exempting Scheduled Tribes.',
        claimType: 'CURRENT_AFFAIRS_REFERENCE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 96 (Printed p. 90)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Core Debate: Personal Law Diversity vs Gender Equality',
        body: 'Article 44 addresses the core tension between freedom of religious conscience (Articles 25–26) and universal gender equality / non-discrimination (Articles 14, 15, 21), aiming to ensure equal civil rights for all women regardless of religious identity.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Judicial Lineage & State Legislative Competence',
        body: '**Landmark Judicial Exhortations**:\n1. **Shah Bano (1985)**: SC ruled Section 125 CrPC applies to Muslim women; regretted that Art 44 remained a dead letter.\n2. **Sarla Mudgal (1995)**: Converting to Islam solely to practice polygamy held void and bigamous under Sec 494 IPC.\n3. **Shayara Bano (2017)**: Instant Triple Talaq (Talaq-e-Biddat) held unconstitutional.\n\n**Concurrent List & Uttarakhand Model 2024**:\nUnder Entry 5 of the Concurrent List (List III), both Parliament and State Legislatures are competent to legislate on marriage, divorce, and succession. Uttarakhand enacted the UCC Act 2024, mandating equal inheritance for daughters and compulsory registration of live-in relationships, while exempting Scheduled Tribes under Article 342.',
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
        syllabusSection: 'GS Paper II: Uniform Civil Code, Secularism, Gender Justice, 21st/22nd Law Commission views.',
        examNotes: 'Crucial for Mains essays and GS2 analytical questions on balancing Article 44 with Articles 25/29 and federal legislative powers under List III.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Uniform Civil Code & Women Rights.',
        examNotes: 'Direct questions on landmark cases (Shah Bano, Sarla Mudgal) and key features of modern UCC proposals.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'General Law: Succession laws and nomination procedures in banking accounts.',
        examNotes: 'Uniform succession and inheritance rules impact banking nominee settlement procedures.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Article 44 & UCC Rapid Pegs:\n• Art 44: Directive to secure Uniform Civil Code for all citizens throughout India.\n• Judicial Milestones: Shah Bano (1985 Section 125), Sarla Mudgal (1995 bigamy conversion void), Shayara Bano (2017 Triple Talaq void).\n• 2024 Benchmark: Uttarakhand becomes first post-independence state to pass UCC Act (List III Entry 5; STs exempted).',
        keyTakeaways: ['Article 44 Text & Scope', 'Judicial Exhortations (Shah Bano, Sarla Mudgal)', 'Uttarakhand UCC Act 2024 (List III Entry 5)'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Article 44 seeks to replace religious personal laws with common civil rules for marriage, divorce, and inheritance. Supported by Ambedkar/Munshi in CA for national unity and gender justice. Upheld in multiple SC cases (Shah Bano, Sarla Mudgal). Enacted at state level by Uttarakhand in 2024 under Concurrent List Entry 5.',
        keyTakeaways: ['Constituent Assembly debate on Art 44', 'Sarla Mudgal (1995)', 'List III Entry 5 state legislative power'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of UCC jurisprudence: Goa Civil Code 1867 legacy, Law Commission 2018 Consultation Paper (equality within personal laws vs uniform code), 22nd Law Commission review, Uttarakhand UCC Act 2024 provisions (compulsory marriage registration, equal succession, live-in reporting), and tribal customary exemption.',
        keyTakeaways: ['Goa Civil Code vs Uttarakhand UCC 2024', 'Law Commission of India positions', 'Constitutional reconciliation of Art 25 and Art 44'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Under which entry of the Seventh Schedule of the Indian Constitution do both Parliament and State Legislatures derive the competence to legislate on marriage, divorce, and succession (the subject matter of a Uniform Civil Code)?',
        type: 'APPLICATION',
        difficulty: 'HARD',
        explanation: 'Marriage, divorce, infants and minors, adoption, wills, intestacy, and succession fall under Entry 5 of List III (Concurrent List) in the Seventh Schedule, empowering both Union and State Legislatures to enact laws on these civil subjects.',
        options: [
          { text: 'Entry 1 of List I (Union List)', isCorrect: false, distractorExplanation: 'Entry 1 of List I deals with Defence of India.' },
          { text: 'Entry 5 of List III (Concurrent List)', isCorrect: true },
          { text: 'Entry 2 of List II (State List)', isCorrect: false, distractorExplanation: 'Entry 2 of List II deals with Police.' },
          { text: 'Residuary Powers under Article 248', isCorrect: false, distractorExplanation: 'Residuary powers are not required as it is explicitly enumerated in List III.' },
        ],
      },
    ],
  },

  // 4. FR vs DPSP Conflict & Harmonious Construction
  {
    id: 'CON-T10-04',
    slug: 'part-3-part-4-conflict-harmonious-construction',
    title: 'Fundamental Rights vs DPSPs Conflict & Harmonious Construction',
    shortDefinition:
      'Traces the constitutional struggle between Part III and Part IV from Champakam Dorairajan (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980), establishing the Doctrine of Harmonious Construction and the 2024 Property Owners Association benchmark on Article 39(b).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T10-15', 'SEM-T10-16', 'SEM-T10-17'],
    dutyBearerScope: {
      wording: 'Constitutional balance between individual rights and collective welfare',
      practicalScope: 'Governs judicial review of socialist welfare legislation infringing Articles 14 and 19.',
      enforceabilityLimits: 'Article 31C protects laws giving effect to Articles 39(b) and 39(c) from invalidation under Arts 14 and 19; blanket protection to all DPSPs is unconstitutional.',
      examTrap: 'Believing DPSPs have absolute supremacy over Fundamental Rights. Neither has absolute primacy; their balance is part of the Basic Structure.',
    },
    claims: [
      {
        id: 'CLM-T10-04.1',
        statement: 'In State of Madras v. Champakam Dorairajan (1951), the Supreme Court ruled that Fundamental Rights are sacrosanct and Directive Principles must run subsidiary to and conform with Fundamental Rights.',
        claimType: 'HISTORICAL_CLAIM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 97 (Printed p. 91)',
      },
      {
        id: 'CLM-T10-04.2',
        statement: 'The 25th Amendment Act 1971 inserted Article 31C providing that laws implementing Articles 39(b) and 39(c) cannot be declared void for violating Articles 14 or 19; the 42nd Amendment attempted to extend this immunity to ALL Directive Principles.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 97 (Printed p. 91)',
      },
      {
        id: 'CLM-T10-04.3',
        statement: 'In Minerva Mills v. Union of India (1980), the Supreme Court struck down the 42nd Amendment extension of Article 31C, holding that the harmony and balance between Fundamental Rights (Part III) and Directive Principles (Part IV) is an essential feature of the Basic Structure ("Two wheels of a chariot").',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 98 (Printed p. 92)',
      },
      {
        id: 'CLM-T10-04.4',
        statement: 'In Property Owners Association v. State of Maharashtra (2024), a 9-judge Constitution Bench held that while the unamended Article 31C (protecting Arts 39(b) and 39(c)) survives, not all privately owned property qualifies as "material resources of the community" under Article 39(b).',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 98 (Printed p. 92)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Great Constitutional Dialogue',
        body: 'The history of Indian constitutional law is largely the story of reconciling individual liberty in Part III with collective socio-economic justice in Part IV. The Supreme Court moved from strict hierarchy to organic harmony.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 5-Stage Evolutionary Trajectory of FR vs DPSP',
        body: '• **Stage 1: Champakam Dorairajan (1951)** $\\rightarrow$ Strict Subordination: DPSPs run subsidiary to Part III.\n• **Stage 2: In Re Kerala Education Bill (1958)** $\\rightarrow$ Early Harmonization: Courts should adopt harmonious construction and not create conflict where none exists.\n• **Stage 3: 25th Amendment & Kesavananda Bharati (1973)** $\\rightarrow$ Introduction of Article 31C: Laws giving effect to Articles 39(b) and 39(c) shielded from Articles 14 and 19.\n• **Stage 4: Minerva Mills (1980)** $\\rightarrow$ Bedrock Balance: Striking down blanket extension of 31C; Parts III and IV are two wheels of a chariot.\n• **Stage 5: Modern Integrated Approach (Unni Krishnan / 2024 Property Owners)** $\\rightarrow$ Reading DPSPs into Article 21 to create enforceable fundamental rights (education, clean environment, health), while disciplining State acquisition of private assets under Art 39(b).',
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
        syllabusSection: 'GS Paper II: Basic Structure, Relationship between Part III and Part IV, Article 31C.',
        examNotes: 'Highest-yield topic for Mains analytical questions. Must cite Minerva Mills chariot analogy and 2024 Property Owners Association 9-judge ruling.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Constitutional Balance & Landmark Cases.',
        examNotes: 'Detailed 50-word and 100-word questions on Champakam Dorairajan, Minerva Mills, and Article 31C.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'LOW',
        syllabusSection: 'Banking Nationalization: Article 39(b)/(c) wealth distribution vs private ownership.',
        examNotes: 'Bank nationalization history was anchored in Article 39(b)/(c) principles.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'FR vs DPSP Conflict Rapid Pegs:\n• Evolution: Champakam (1951 DPSPs subsidiary) -> Kerala Education (1958 Harmonious construction) -> 25th Amd 1971 (Art 31C for 39(b)/(c)).\n• Minerva Mills 1980: Parts III & IV are "Two Wheels of a Chariot"; balance is Basic Structure.\n• 2024 Property Owners Bench: Not all private property is "material resource of community" under Art 39(b).',
        keyTakeaways: ['Champakam (1951) to Minerva Mills (1980)', 'Article 31C Surviving Scope', 'Property Owners Association (2024) 9-Judge Ruling'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'The conflict between Part III and Part IV evolved from strict supremacy of FRs (Champakam) to equal partnership in Minerva Mills (1980). Article 31C protects laws under Arts 39(b) and 39(c) against Arts 14 and 19. In 2024, a 9-judge bench ruled that private property does not automatically become a community resource under 39(b).',
        keyTakeaways: ['Harmonious Construction Doctrine', 'Article 31C scope', 'Property Owners Association 2024'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Complete jurisprudence of Part III vs Part IV: Evolution of Article 31C (25th vs 42nd Amendment), Sanjeev Coke vs Mafatlal vs Property Owners Association (2024) on private property as material resources, and the expansion of Article 21 through DPSP incorporation (Bandhua Mukti Morcha, Olga Tellis, Mohini Jain).',
        keyTakeaways: ['Complete Case Lineage (1951 to 2024)', 'Reading DPSPs into Article 21', 'Article 39(b) criteria in 2024 judgment'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'In the landmark 2024 9-judge Constitution Bench decision in Property Owners Association v. State of Maharashtra, what did the Supreme Court hold regarding Article 39(b) and private property?',
        type: 'APPLICATION',
        difficulty: 'HARD',
        explanation: 'In Property Owners Association (2024), a 9-judge Constitution Bench held that while privately owned resources can theoretically qualify as "material resources of the community" under Article 39(b), not all private property automatically qualifies; it depends on the nature of the resource, its scarcity, and impact on community welfare.',
        options: [
          { text: 'All privately owned property is automatically a material resource of the community that can be nationalized without restriction.', isCorrect: false, distractorExplanation: 'This was the old expansive socialist view in Sanjeev Coke, which was rejected.' },
          { text: 'Not all private property automatically qualifies as a material resource of the community under Article 39(b); qualification depends on factors like resource nature and community impact.', isCorrect: true },
          { text: 'Article 31C was completely struck down as unconstitutional.', isCorrect: false, distractorExplanation: 'Unamended Article 31C protecting 39(b) and (c) was upheld.' },
          { text: 'Directive Principles cannot be implemented through any statutory laws.', isCorrect: false, distractorExplanation: 'DPSPs remain fundamental in lawmaking.' },
        ],
      },
    ],
  },

  // 5. Directives Outside Part IV & Implementation Trajectory
  {
    id: 'CON-T10-05',
    slug: 'directivism-outside-part-4-implementation-schemes',
    title: 'Directives Outside Part IV & Statutory Implementation Trajectory',
    shortDefinition:
      'Explores non-Part IV constitutional directives (Articles 335, 350A, 351) alongside the vast legislative and welfare architecture created by the Union and States to realize the Directive Principles.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T10-12', 'SEM-T10-18'],
    dutyBearerScope: {
      wording: 'Constitutional Directives in other Parts + Statutory Implementation',
      practicalScope: 'Directs administrative efficiency, linguistic protections, and national language development.',
      enforceabilityLimits: 'Like Part IV, directives outside Part IV are non-justiciable directives, but carry equal constitutional weight.',
      examTrap: 'Assuming all Directive Principles are located exclusively inside Part IV. Articles 335, 350A, and 351 are located in Parts XVI and XVII.',
    },
    claims: [
      {
        id: 'CLM-T10-05.1',
        statement: 'The Constitution contains three specific Directives outside Part IV: (1) Article 335 in Part XVI (claims of SC/ST to services consistent with administrative efficiency), (2) Article 350A in Part XVII (instruction in mother tongue at primary stage), and (3) Article 351 in Part XVII (development and spread of Hindi language).',
        claimType: 'CONSTITUTIONAL_TEXT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 94 (Printed p. 88)',
      },
      {
        id: 'CLM-T10-05.2',
        statement: 'Directive Principles have been operationalized through major parliamentary statutes, including the 73rd/74th Amendments (Art 40 Panchayats), MGNREGA 2005 (Art 41 Right to Work), Maternity Benefit Act 2017 (Art 42), Legal Services Authorities Act 1987 (Art 39A), and Wildlife Protection Act 1972 (Art 48A).',
        claimType: 'FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 99 (Printed p. 93)',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Beyond Part IV: Holistic Constitutional Directivism',
        body: 'The framers distributed special policy directives outside Part IV to emphasize specific national priorities: administrative efficiency in affirmative action (Part XVI) and linguistic federalism (Part XVII).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Directives Outside Part IV vs Part IV Comparison',
        body: '| Article | Constitutional Part | Subject Matter | Status |\n| :--- | :--- | :--- | :--- |\n| **Article 335** | **Part XVI** (Special Provisions) | Claims of SCs and STs to services and posts, consistent with maintenance of efficiency in administration | Non-justiciable directive; amended by 82nd Amendment 2000 |\n| **Article 350A** | **Part XVII** (Official Language) | Facilities for instruction in mother-tongue at primary stage to children belonging to linguistic minority groups | Non-justiciable directive; inserted by 7th Amendment 1956 |\n| **Article 351** | **Part XVII** (Official Language) | Duty of the Union to promote the spread and development of the Hindi language as a medium of expression for all elements of composite culture | Non-justiciable directive |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_ANALYSIS',
        title: 'Statutory Implementation Trajectory of DPSPs',
        body: '• **Article 39A (Free Legal Aid)** $\\rightarrow$ Legal Services Authorities Act 1987 (NALSA, Lok Adalats).\n• **Article 40 (Village Panchayats)** $\\rightarrow$ 73rd and 74th Constitutional Amendment Acts 1992.\n• **Article 41 (Right to Work)** $\\rightarrow$ Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) 2005.\n• **Article 42 (Maternity Relief)** $\\rightarrow$ Maternity Benefit (Amendment) Act 2017 (26 weeks paid leave).\n• **Article 48A (Environment Protection)** $\\rightarrow$ Wildlife Protection Act 1972, Forest Conservation Act 1980, Environment Protection Act 1986.',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Non-Part IV Directives, Welfare Legislation, Panchayati Raj.',
        examNotes: 'Classic Prelims trap on identifying directives located outside Part IV (Arts 335, 350A, 351).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Welfare Schemes & Directives outside Part IV.',
        examNotes: 'Direct questions on Article 350A and Rajasthan state implementation of MGNREGA and Legal Aid.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'LOW',
        syllabusSection: 'Financial Inclusion: NALSA, PMJDY, and rural livelihood schemes.',
        examNotes: 'Statutory welfare implementation impact on rural banking mandates.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Directives Outside Part IV Rapid Pegs:\n• 3 Non-Part IV Directives: Art 335 (SC/ST service efficiency in Part XVI), Art 350A (Mother tongue primary schooling in Part XVII), Art 351 (Hindi development in Part XVII).\n• Equal weight: Same non-justiciable status as Part IV DPSPs.\n• Key Implementations: NALSA 1987 (Art 39A), 73rd Amd (Art 40), MGNREGA 2005 (Art 41), Maternity Benefit 2017 (Art 42).',
        keyTakeaways: ['Articles 335, 350A, 351 (Directives Outside Part IV)', 'Same legal effect as Part IV DPSPs', 'Key Implementing Welfare Acts'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'The Constitution places three directives outside Part IV: Art 335 (SC/ST efficiency in Part XVI), Art 350A (Mother tongue in Part XVII), and Art 351 (Hindi spread in Part XVII). Major welfare acts operationalize DPSPs: MGNREGA (Art 41), Maternity Benefit (Art 42), NALSA (Art 39A), and Panchayati Raj (Art 40).',
        keyTakeaways: ['Non-Part IV article numbers and parts', 'Statutory welfare realization', '82nd Amendment proviso to Art 335'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive analysis of non-Part IV directivism and welfare legislative trajectory: Article 335 relaxation of qualifying marks via 82nd Amendment (2000), Article 350A Special Officer for Linguistic Minorities (Art 350B), and evolution of India from Police State to Welfare State.',
        keyTakeaways: ['Article 335 82nd Amendment proviso', 'Article 350B Linguistic Minorities Commissioner', 'Welfare State statutory framework'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Which of the following articles contains a constitutional directive located OUTSIDE Part IV of the Constitution?',
        type: 'CONCEPTUAL',
        difficulty: 'MEDIUM',
        explanation: 'Article 350A is located in Part XVII (Official Language) and directs every State to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups.',
        options: [
          { text: 'Article 43A', isCorrect: false, distractorExplanation: 'Article 43A is inside Part IV.' },
          { text: 'Article 48A', isCorrect: false, distractorExplanation: 'Article 48A is inside Part IV.' },
          { text: 'Article 350A', isCorrect: true },
          { text: 'Article 39A', isCorrect: false, distractorExplanation: 'Article 39A is inside Part IV.' },
        ],
      },
    ],
  },
];

/**
 * Executes full canonical knowledge seeding across all 5 Topic 10 concepts.
 */
export async function seedTopic10CanonicalKnowledge() {
  const result = await executePhase6ControlledIngestion();
  const sourceId = result.sourceId;

  const cuTopic10 = await db.coverageUnit.findFirstOrThrow({
    where: { sourceId, label: { contains: 'Coverage Unit 10:' } },
  });

  // Seed 18 semantic inventory items first
  await seedTopic10SemanticInventory(sourceId, cuTopic10.id);

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

  let topic = await db.topic.findFirst({ where: { title: 'Part IV: Directive Principles of State Policy', subjectId: subject.id } });
  if (!topic) {
    topic = await db.topic.create({
      data: {
        title: 'Part IV: Directive Principles of State Policy',
        slug: 'part-4-directive-principles-of-state-policy',
        subjectId: subject.id,
        order: 10,
        description: 'Constitutional directives and welfare blueprint under Articles 36 to 51.',
      },
    });
  }

  const seededConcepts = [];

  for (const conceptDef of TOPIC_10_CANONICAL_CONCEPTS) {
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
    coverageUnitId: cuTopic10.id,
    seededConceptsCount: seededConcepts.length,
    concepts: seededConcepts,
  };
}
