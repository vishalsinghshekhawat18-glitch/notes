import { db } from '../db/client';
import { executePhase6ControlledIngestion } from '../ingestion/polity-pdf-ingestor';
import { seedBatchASemanticInventory, BATCH_A_SEMANTIC_UNITS } from '../ingestion/batch-a-semantic-inventory';

export interface BatchAConceptSeedDefinition {
  id: string;
  slug: string;
  topicSlug: string;
  topicTitle: string;
  topicOrder: number;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  semanticUnitIds: string[];
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
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    priority: 'ESSENTIAL' | 'HIGH_YIELD' | 'DEEP_DIVE';
    order: number;
  }>;
  questions: Array<{
    id: string;
    type: 'CONCEPT_CHECK' | 'EXAM_SIMULATION' | 'TRANSFER_SCENARIO';
    stem: string;
    options: Record<string, string>;
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ: boolean;
    pyqYear?: number;
    pyqPaper?: string;
  }>;
}

export const BATCH_A_CONCEPTS: BatchAConceptSeedDefinition[] = [
  // =========================================================================
  // TOPIC 1: BASIC CONCEPTS OF POLITY (4 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T1-01',
    slug: 'state-and-nation-constituent-elements-saptanga-theory',
    topicSlug: 'basic-concepts-of-polity',
    topicTitle: 'Basic Concepts of Polity',
    topicOrder: 1,
    title: 'The State and Nation: Constituent Elements, Saptanga Theory & Distinctions',
    shortDefinition: 'The State as a sovereign political-legal entity defined by four universal elements (territory, population, government, sovereignty), Kautilya’s organic Saptanga model, and the crucial distinction from the cultural concept of Nation.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T1-01', 'SEM-T1-02', 'SEM-T1-03'],
    claims: [
      {
        id: 'CLM-T1-01.1',
        statement: 'A State consists of four indispensable constituent elements: a defined physical territory, a permanent population, an organized government, and internal-external sovereignty.',
        claimType: 'POLITICAL_THEORY_AXIOM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 7 (Printed p. 1)',
      },
      {
        id: 'CLM-T1-01.2',
        statement: "In ancient Indian political thought, Kautilya's Arthashastra articulates the Saptanga Theory comprising seven organic elements of the state: Swami (King), Amatya (Ministers), Janapada/Rashtra (Territory & People), Durga (Fort/Capital), Kosha (Treasury), Danda/Bala (Army), and Mitra (Ally).",
        claimType: 'HISTORICAL_POLITICAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 7 (Printed p. 1)',
      },
      {
        id: 'CLM-T1-01.3',
        statement: 'State is a political-legal concept characterized by sovereign coercive authority, whereas Nation is a socio-cultural and psychological concept rooted in shared identity, language, history, and consciousness.',
        claimType: 'CONCEPTUAL_DISTINCTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 7 (Printed p. 1)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Legal Entity vs The Cultural Consciousness',
        body: 'A **State** is a political and legal entity possessing sovereign authority over a defined territory and population. In contrast, a **Nation** is a cultural, psychological, and historical collective of people who perceive themselves as united by shared language, customs, memory, or destiny.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'INTUITION',
        title: 'Why Political Science Separates State from Nation',
        body: 'Imagine a household with a formal title deed and legal enforcement (the State) versus the emotional bond and mutual cultural belonging of the family living within it (the Nation). A state can exist without being a homogeneous nation (e.g. multinational states or ancient empires), and a nation can exist dispersed without a sovereign state of its own (e.g. the historical Jewish diaspora or Kurds today). When the boundaries of the cultural nation coincide with the sovereign boundaries of the state, we get a **Nation-State**.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 4 Modern Elements & Kautilya’s Saptanga Architecture',
        body: '### 1. The Four Modern Elements of Statehood\n• **Definite Territory:** A demarcated geographical space over which jurisdiction is exercised.\n• **Permanent Population:** An aggregate of individuals residing within the territory.\n• **Government:** The political apparatus through which the will of the state is formulated, expressed, and executed.\n• **Sovereignty:** The supreme, absolute power free from external control (external sovereignty) and superior to all internal associations (internal sovereignty).\n\n### 2. Kautilya’s Saptanga Theory (Arthashastra)\nKautilya conceptualized the state as a living organism with 7 interdependent organs (*Saptanga*):\n1. **Swami (The King / Head):** The apex decision-maker providing vision and moral leadership.\n2. **Amatya (Ministers / Eyes):** The administrative apparatus and bureaucracy executing governance.\n3. **Janapada / Rashtra (Territory & People / Limbs):** Fertile land populated by industrious subjects.\n4. **Durga (Fortified Capital / Arms):** Defensive infrastructure securing the realm.\n5. **Kosha (Treasury / Mouth):** Legitimate fiscal resources derived from just taxation.\n6. **Danda or Bala (Armed Forces / Brain):** Military might ensuring domestic order and external defense.\n7. **Mitra (Friendly Ally / Ears):** External diplomatic alliances providing international security.',
        order: 3,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'State vs Nation: Analytical Comparison Matrix',
        body: '| Dimension | State | Nation |\n| :--- | :--- | :--- |\n| **Nature** | Political and legal entity | Socio-cultural and psychological identity |\n| **Essential Basis** | Sovereignty, territory, government, law | Shared history, culture, language, consciousness |\n| **Coercive Power** | Possesses legal monopoly over legitimate violence | Possesses moral and emotional loyalty; lacks legal force |\n| **Physical Boundary** | Strictly defined by international borders | Fluid; extends across territorial boundaries |\n| **Examples** | India (State + Nation), Japan (Nation-State), Arab World (Nation across multiple States) |',
        order: 4,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'GS Paper II: Political Theory, Concept of State and Sovereignty.',
        examNotes: 'UPSC Prelims frequently asks analytical questions on the essential elements of the State (e.g. 2021 question on which is the most appropriate definition of the State).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Political Science & Indian Political Thought.',
        examNotes: 'High-yield for 20-word and 50-word questions on Kautilya Saptanga Theory and State vs Nation distinctions.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Legal & Regulatory Framework: Sovereign State Authority.',
        examNotes: 'Banking regulations trace sovereign legislative powers of the State.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'State = 4 elements (Territory, Population, Government, Sovereignty). Kautilya Saptanga = Swami, Amatya, Janapada, Durga, Kosha, Danda, Mitra. State is legal/political; Nation is cultural/psychological.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **State:** Political-legal entity requiring territory, population, government, and supreme sovereignty.\n• **Nation:** Cultural-psychological consciousness based on shared history/culture.\n• **Saptanga (Kautilya):** 7 organs (Swami, Amatya, Janapada, Durga, Kosha, Danda, Mitra). Mitra is the only external element.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Statehood requires the coexistence of 4 classical elements where Sovereignty is the distinctive sine qua non. Without sovereignty, a territorial unit (like a province or colony) is not a State in international law. Kautilya’s organic theory complements Western formal legalism by emphasizing administrative capability (Amatya), fiscal viability (Kosha), and diplomatic deterrence (Mitra).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T1-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which one of the following is considered the most indispensable distinguishing feature that separates a State from other social associations?',
        options: {
          A: 'Common religious or linguistic identity',
          B: 'Sovereignty (supreme internal and external power)',
          C: 'A written constitution',
          D: 'A democratic system of government',
        },
        correctAnswer: 'B',
        explanation: 'Sovereignty is the exclusive defining characteristic of the State; no other association possesses supreme coercive legal authority free from external control.',
        trapExplanation: 'Option C is a feature of constitutionalism, not statehood itself. Option A defines a nation, not a state.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T1-02',
    slug: 'theories-of-origin-of-state-divine-social-contract-marxist',
    topicSlug: 'basic-concepts-of-polity',
    topicTitle: 'Basic Concepts of Polity',
    topicOrder: 1,
    title: 'Theories of the Origin of the State: Divine, Social Contract, Historical & Marxist',
    shortDefinition: 'Philosophical accounts of how the state emerged: Divine Origin (theocratic sanction), Social Contract (Hobbes, Locke, Rousseau overcoming the state of nature / Matsya Nyaya), Historical-Evolutionary, and Marxist class-instrument models.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T1-04'],
    claims: [
      {
        id: 'CLM-T1-02.1',
        statement: 'The Divine Origin Theory posits that the State is created by God, with the monarch acting as God’s direct representative on Earth (e.g. Jillh-e-Ilahi or Shadow of God), demanding unconditional obedience.',
        claimType: 'POLITICAL_THEORY_HISTORY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 7 (Printed p. 1)',
      },
      {
        id: 'CLM-T1-02.2',
        statement: 'The Social Contract Theory formulated by Hobbes, Locke, and Rousseau explains that individuals escaped the pre-political anarchy of the "state of nature" (Matsya Nyaya) by voluntarily surrendering certain liberties to establish a civil sovereign government.',
        claimType: 'PHILOSOPHICAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 7 (Printed p. 1)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Why Human Beings Invented the State',
        body: 'The origin of the state has been explained through four dominant paradigms: as a **divine creation** (ruler as God’s vicar), a **voluntary human covenant** (Social Contract), an **organic historical evolution** (family $\\rightarrow$ clan $\\rightarrow$ tribe $\\rightarrow$ state), or an **instrument of class dominance** (Marxist theory).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Classical Social Contract Matrix',
        body: 'In ancient Indian philosophy, the state of nature was termed **Matsya Nyaya** (the law of the fish, where the big fish swallows the small fish). In Western political philosophy, three thinkers revolutionized state legitimacy:\n\n1. **Thomas Hobbes (Leviathan, 1651):**\n   • State of nature: "Nasty, brutish, and short".\n   • Contract: Absolute surrender of all rights to an all-powerful sovereign (*Leviathan*) in exchange for security of life.\n\n2. **John Locke (Two Treatises of Government, 1689):**\n   • State of nature: Peaceful but insecure property/rights.\n   • Contract: Limited government as a trustee protecting natural rights to **Life, Liberty, and Property**. If violated, citizens have the right to revolt.\n\n3. **Jean-Jacques Rousseau (The Social Contract, 1762):**\n   • State of nature: Noble savage, corrupted by private property.\n   • Contract: Surrender of individual will to the **General Will** (*Volonté Générale*), founding direct popular sovereignty.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Divine Right vs Social Contract vs Historical Theory',
        body: '| Theory | Source of Legitimacy | Accountability of Ruler | Modern Status |\n| :--- | :--- | :--- | :--- |\n| **Divine Origin** | God’s mandate | Accountable only to God | Obsolete in secular democracies |\n| **Social Contract** | Consent of the governed | Accountable to citizens / Constitution | Foundational bedrock of constitutional democracy |\n| **Evolutionary / Historical** | Kinship, religion, economic needs, war | Gradual institutional evolution | Most scientifically accepted by modern historians |',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'SECONDARY',
        weightage: 'MEDIUM',
        syllabusSection: 'GS Paper II & Political Science: Social Contract and Basis of Legitimacy.',
        examNotes: 'Conceptual understanding of Locke is vital for analyzing Fundamental Rights (Lockean natural rights doctrine).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Concepts of Political Theory — Origin of State.',
        examNotes: 'Direct 50-word and 100-word questions on Social Contract Theory and Matsya Nyaya.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'General Jurisprudence.',
        examNotes: 'Foundational concept for legal enforceability of contracts.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'State of Nature = Matsya Nyaya (anarchy). Hobbes = Absolute Leviathan. Locke = Limited Govt / Natural Rights (Life, Liberty, Property). Rousseau = General Will. Modern accepted theory = Historical/Evolutionary.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Divine Theory:** Ruler is God’s deputy (Jillh-e-Ilahi); unaccountable to people.\n• **Social Contract:** People agreed to form a state to escape anarchy. Locke is father of limited government; Rousseau of popular sovereignty.\n• **Evolutionary Theory:** State is an organic product of history, kinship, religion, and political consciousness.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Social Contract transition shifted sovereignty from transcendental divine sanction to secular popular consent. Locke’s fiduciary theory of state (government as a trust held for citizens) directly inspired the American Declaration of Independence and the doctrine of Constitutionalism that permeates the Indian Constitution.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T1-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which political philosopher’s conception of the Social Contract established the doctrine of "limited government" based on natural rights to life, liberty, and estate?',
        options: {
          A: 'Thomas Hobbes',
          B: 'John Locke',
          C: 'Jean-Jacques Rousseau',
          D: 'Karl Marx',
        },
        correctAnswer: 'B',
        explanation: 'John Locke advocated limited government where the ruler acts as a trustee to protect pre-existing natural rights; breach of trust legitimizes replacement of government.',
        trapExplanation: 'Hobbes advocated absolute, unchallengeable sovereign power (Leviathan). Rousseau emphasized the collective General Will.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
  {
    id: 'CON-T1-03',
    slug: 'systems-of-governance-parliamentary-presidential-constitutional-supremacy',
    topicSlug: 'basic-concepts-of-polity',
    topicTitle: 'Basic Concepts of Polity',
    topicOrder: 1,
    title: 'Systems of Governance: Parliamentary vs Presidential & Constitutional Supremacy',
    shortDefinition: 'Structural classification of constitutional governance: Dual Legislature and Executive in India, Unified Judiciary, Parliamentary executive-legislative fusion vs US strict Separation of Powers, and Parliamentary Sovereignty (UK) vs Constitutional Supremacy (India).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T1-05', 'SEM-T1-06'],
    claims: [
      {
        id: 'CLM-T1-03.1',
        statement: 'India has a dual legislature (Parliament at Centre, State Legislatures in States) and dual executive, but a unified, integrated judiciary where High Courts and subordinate courts are hierarchically integrated under the Supreme Court.',
        claimType: 'CONSTITUTIONAL_STRUCTURE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 8 (Printed p. 2)',
      },
      {
        id: 'CLM-T1-03.2',
        statement: 'In the British Parliamentary system, there is Parliamentary Sovereignty where Parliament can make or unmake any law without constitutional limitation, whereas in India, Constitutional Supremacy prevails where all organs are bound by written constitutional limits and judicial review.',
        claimType: 'COMPARATIVE_CONSTITUTIONAL_LAW',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 8 (Printed p. 2)',
      },
      {
        id: 'CLM-T1-03.3',
        statement: 'The Parliamentary system is characterized by the fusion of powers (the executive is drawn from and collectively responsible to the legislature), whereas the Presidential system (e.g. USA) enforces strict separation of powers with mutual checks and balances.',
        claimType: 'POLITICAL_SYSTEM_TAXONOMY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 8 (Printed p. 2)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Fusion of Powers vs Strict Separation',
        body: 'The fundamental architectural choice in democratic governance lies between the **Parliamentary System** (where the executive emerges from and remains answerable to the legislature) and the **Presidential System** (where executive and legislature are strictly independent with separate mandates).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Indian Governance Triad',
        body: '### 1. Dual Legislature & Dual Executive\n• **Union Level:** Parliament (Lok Sabha: 543 elected + Rajya Sabha: 245) & Union Council of Ministers headed by PM.\n• **State Level:** State Legislative Assembly (MLA) & Legislative Council (MLC, where bicameral) & State Council of Ministers headed by CM.\n\n### 2. Single Integrated Judiciary\nUnlike the USA (which has separate Federal and State court hierarchies), India has a **unified, pyramid judiciary** enforcing both central and state laws:\n$$\\text{Supreme Court} \\longrightarrow \\text{High Courts} \\longrightarrow \\text{District \\& Subordinate Courts}$$\n\n### 3. Parliamentary Sovereignty (UK) vs Constitutional Supremacy (India)\n• **UK Model:** Parliament is sovereign; no written constitution can limit statutory acts (*De Lolme: Parliament can do anything except make a man into a woman*).\n• **Indian Model:** The Constitution is sovereign; Parliament’s legislative power is circumscribed by Fundamental Rights (Part III), federal division of powers (7th Schedule), and the Basic Structure doctrine (Kesavananda Bharati).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'India vs UK vs USA: Comparative Constitutional Matrix',
        body: '| Feature | India | United Kingdom | United States (USA) |\n| :--- | :--- | :--- | :--- |\n| **System** | Parliamentary Democratic Republic | Parliamentary Constitutional Monarchy | Presidential Federal Republic |\n| **Executive-Legislature Relation** | Fusion of powers (Executive inside Legislature) | Fusion of powers | Strict Separation of Powers |\n| **Judiciary Structure** | Single Unified Integrated Hierarchy | Unified Supreme Court (since 2009) | Dual Judiciary (Federal Courts + State Courts) |\n| **Head of State** | Elected President (Republic) | Hereditary Monarch | Elected President (combines Head of State & Govt) |\n| **Sovereignty Doctrine** | **Constitutional Supremacy** | **Parliamentary Sovereignty** | **Constitutional Supremacy** |',
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
        syllabusSection: 'GS Paper II: Comparison of Indian Constitutional Scheme with Other Countries.',
        examNotes: 'UPSC Mains GS II repeatedly asks comparative questions contrasting Indian Constitutional Supremacy with British Parliamentary Sovereignty and American Presidential checks & balances.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Indian Constitution, Nature of Federalism & Judicial System.',
        examNotes: 'High frequency of questions on Unified Judiciary vs Dual Polity in India.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'SECONDARY',
        weightage: 'MEDIUM',
        syllabusSection: 'Banking Laws: Constitutional validity of Central Banking legislations.',
        examNotes: 'Parliamentary enactments affecting banking must conform to Constitutional Supremacy.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'India = Parliamentary + Constitutional Supremacy + Unified Judiciary. UK = Parliamentary Sovereignty (fusion of powers). USA = Presidential + Strict Separation of Powers + Dual Judiciary.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **India:** Dual legislature + Dual executive, but **single integrated judiciary**.\n• **Sovereignty:** UK has Parliamentary Sovereignty; India has Constitutional Supremacy governed by judicial review.\n• **Executive:** Drawn from legislature and collectively responsible to Lok Sabha (Art 75(3)).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'India synthesized the British parliamentary executive (to ensure day-to-day responsiveness and executive accountability) with the American doctrine of Judicial Review and Constitutional Supremacy (to prevent majoritarian tyranny in a highly diverse federal polity).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T1-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding the Indian constitutional architecture:\n1. India possesses a dual legislature and a dual executive, but a single integrated judiciary.\n2. Unlike the United Kingdom, India follows the principle of Constitutional Supremacy rather than Parliamentary Sovereignty.\nWhich of the statements given above is/are correct?',
        options: {
          A: '1 only',
          B: '2 only',
          C: 'Both 1 and 2',
          D: 'Neither 1 nor 2',
        },
        correctAnswer: 'C',
        explanation: 'Both statements are correct. India has central and state legislatures/executives, but courts form a single hierarchical chain headed by the Supreme Court. The Constitution is the supreme lex loci.',
        trapExplanation: 'Do not confuse dual polity (federalism) with a dual judiciary. In the US, state courts interpret state laws; in India, High Courts enforce both central and state statutes.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
  {
    id: 'CON-T1-04',
    slug: 'constitution-and-constitutionalism-nature-functions-pillars',
    topicSlug: 'basic-concepts-of-polity',
    topicTitle: 'Basic Concepts of Polity',
    topicOrder: 1,
    title: 'Constitution & Constitutionalism: Nature, Functions & Pillars of Limited Government',
    shortDefinition: 'The formal Constitution as the supreme organic legal instrument defining state architecture versus Constitutionalism as the underlying political philosophy of limited government, rule of law, and institutional restraint.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T1-07', 'SEM-T1-08'],
    claims: [
      {
        id: 'CLM-T1-04.1',
        statement: 'The word Constitution is derived from the Latin "Constitutio" (meaning to command or establish), serving as the supreme formal document defining state organs, citizenship rights, and core socio-economic goals.',
        claimType: 'LEGAL_ETYMOLOGY_DEFINITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 9 (Printed p. 3)',
      },
      {
        id: 'CLM-T1-04.2',
        statement: 'Constitutionalism denotes a political philosophy and system of governance where government power is legally limited and regulated by constitutional restraints, preventing authoritarian or arbitrary rule.',
        claimType: 'POLITICAL_PHILOSOPHY_AXIOM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 9 (Printed p. 3)',
      },
      {
        id: 'CLM-T1-04.3',
        statement: 'The five core institutional pillars of Constitutionalism are: (1) Limited Government, (2) Rule of Law, (3) Protection of Fundamental Rights, (4) Separation of Powers, and (5) Independent Judicial Review.',
        claimType: 'POLITICAL_THEORY_PILLARS',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 9 (Printed p. 3)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Having a Constitution vs Practicing Constitutionalism',
        body: 'A **Constitution** is the written or unwritten structural rulebook of a state. **Constitutionalism** is the living philosophy that state power must be limited, bounded by the rule of law, and subject to institutional checks so that no ruler exercises arbitrary or unchecked power.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'INTUITION',
        title: 'The Analogy of a Country with Rules vs Genuine Restraint',
        body: 'Many authoritarian regimes possess elaborate written constitutions containing declarations of rights on paper (e.g. the 1936 Soviet Constitution or totalitarian constitutions today). However, they lack **Constitutionalism** because their governments face zero effective judicial review, independent restraint, or enforceable rights. A constitution is the *vehicle*; constitutionalism is the *braking system*.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 5 Core Pillars of Constitutionalism',
        body: '1. **Limited Government:** Power is circumscribed; rulers cannot act beyond their constitutionally enumerated authority (*ultra vires*).\n2. **Rule of Law:** Governance by established, predictable, non-arbitrary laws (*lex regnat*), ensuring equality before law.\n3. **Protection of Fundamental Rights:** Enforceable individual and collective civil liberties justifiable against executive and legislative encroachment.\n4. **Separation of Powers & Checks/Balances:** Dispersal of legislative, executive, and judicial powers among distinct organs to prevent monopoly.\n5. **Independent Judiciary & Judicial Review:** An autonomous court system empowered to strike down unconstitutional state actions (Articles 13, 32, 226).',
        order: 3,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Constitution vs Constitutionalism Matrix',
        body: '| Parameter | Constitution | Constitutionalism |\n| :--- | :--- | :--- |\n| **Nature** | Legal document / statute book | Political philosophy and institutional culture |\n| **Presence** | Almost all modern states have a constitution | Exists only where government is genuinely limited by law |\n| **Objective** | Establishes state organs and allocates powers | Restrains state power and protects citizen liberty |\n| **Failure Mode** | Can be suspended or manipulated by authoritarian rulers | Crumbles when judicial review and rights protections are compromised |',
        order: 4,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Constitutionalism, Rule of Law, and Limited Government.',
        examNotes: 'UPSC Prelims 2020 & 2021 specifically asked: "Constitutional government by definition is a government limited by the terms of a constitution."',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Concepts of Constitution, Constitutionalism, and Rule of Law.',
        examNotes: 'Frequently tested in 20-word definition questions and 50-word analytical questions.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Rule of Law in Financial Institutions.',
        examNotes: 'Administrative actions in public sector banks must strictly abide by rule of law.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Constitution = supreme legal document. Constitutionalism = limited government philosophy. 5 pillars: Limited Govt, Rule of Law, Rights Protection, Separation of Powers, Judicial Review.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Core Distinction:** A country can have a Constitution without Constitutionalism (if ruler power is unlimited).\n• **Constitutional Government:** By definition, a government limited by constitutional checks and balances.\n• **5 Pillars:** Limited Government, Rule of Law, Rights Protection, Separation of Powers, Judicial Review.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Constitutionalism represents the transition from arbitrary rule by men to rational rule by law. In India, the Basic Structure doctrine operates as the ultimate institutional guardian of constitutionalism, preventing even an elected parliamentary majority from altering the fundamental architecture of limited government.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T1-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Constitutional government by definition is:',
        options: {
          A: 'Government by legislature',
          B: 'Popular government',
          C: 'Multi-party government',
          D: 'Limited government',
        },
        correctAnswer: 'D',
        explanation: 'Constitutional government by definition is a limited government whose power is circumscribed by the constitution to protect individual rights and prevent arbitrariness.',
        trapExplanation: 'A multi-party government or government by legislature does not guarantee limited powers unless institutional restraints operate.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 2: CONSTITUENT ASSEMBLY (6 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T2-01',
    slug: 'historical-evolution-demand-for-constituent-assembly',
    topicSlug: 'constituent-assembly',
    topicTitle: 'Constituent Assembly of India',
    topicOrder: 2,
    title: 'Historical Evolution & Demand for the Constituent Assembly (1895–1946)',
    shortDefinition: 'The constitutional progression of the demand for a sovereign Constitution-making body: from Tilak’s Swaraj Bill (1895) and Nehru Report (1928) to M.N. Roy’s formal formulation (1934), INC official demands, August Offer (1940), Cripps Mission (1942), and Cabinet Mission Plan (1946).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T2-01'],
    claims: [
      {
        id: 'CLM-T2-01.1',
        statement: 'The idea of a Constituent Assembly for India was implicitly articulated in the 1895 Constitution of India Bill (Swaraj Bill) inspired by Bal Gangadhar Tilak, and reiterated in 1922 by Mahatma Gandhi stating that Swaraj must spring from the expressed will of Indians.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 10 (Printed p. 4)',
      },
      {
        id: 'CLM-T2-01.2',
        statement: 'In 1934, M.N. Roy formally put forward the explicit idea of a Constituent Assembly for India for the first time, which was officially adopted as a demand by the Indian National Congress in 1935 at the Faizpur session (1936).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 10 (Printed p. 4)',
      },
      {
        id: 'CLM-T2-01.3',
        statement: 'The British Government accepted the demand for a Constituent Assembly in principle for the first time in the August Offer of 1940, followed by the Cripps Mission (1942), and formally constituted it under the Cabinet Mission Plan (1946).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 10 (Printed p. 4)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Half-Century Struggle for an Indigenous Constitution',
        body: 'The Constituent Assembly was not a sudden gift of British decolonization; it was the culmination of a 50-year nationalist struggle insisting that India’s fundamental law must be drafted by Indians themselves without external interference.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 8-Stage Chronological Trajectory (1895–1946)',
        body: '1. **1895 — Swaraj Bill (Tilak):** First unofficial articulation outlining basic rights and constitutional framework.\n2. **1922 — Mahatma Gandhi:** Declared that Indian independence means that the Constitution shall be framed according to the will of the Indian people.\n3. **1928 — Nehru Report (Motilal Nehru):** First indigenous attempt by an all-party conference to draft a full constitution with a Bill of Rights and Dominion Status.\n4. **1934 — M.N. Roy:** First formal formulation of the explicit demand for a dedicated "Constituent Assembly".\n5. **1935–38 — INC & Jawaharlal Nehru:** INC officially endorsed the demand in 1935. In 1938, Nehru declared: *"The Constitution of free India must be framed, without outside interference, by a Constituent Assembly elected on the basis of adult franchise."*\n6. **1940 — August Offer:** Viceroy Linlithgow conceded for the first time that framing a constitution was primarily the responsibility of Indians (rejected because it promised post-war dominion status with minority veto).\n7. **1942 — Cripps Mission (Sir Stafford Cripps):** Proposed a solely Indian constituent body after WWII (rejected by INC for Dominion status and partition-enabling provincial opt-out clauses; rejected by Muslim League for not granting Pakistan).\n8. **1946 — Cabinet Mission Plan (Pethick-Lawrence, Stafford Cripps, A.V. Alexander):** Rejected the demand for two separate Constituent Assemblies; established the definitive indirect election mechanism for a single Constituent Assembly.',
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
        syllabusSection: 'GS Paper II: Historical Underpinnings and Evolution of the Constitution.',
        examNotes: 'Prelims repeatedly tests chronological milestones (M.N. Roy 1934, August Offer 1940, Cripps 1942, Cabinet Mission 1946).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Constituent Assembly — Historical Background.',
        examNotes: 'High-frequency 20-word questions on M.N. Roy and Nehru declaration of 1938.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Historical Origins of Sovereign Indian Laws.',
        examNotes: 'Constitutional lineage of central banking acts.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '1895 Swaraj Bill -> 1934 M.N. Roy (1st formal idea) -> 1935 INC demand -> 1940 August Offer (1st British acceptance in principle) -> 1946 Cabinet Mission (actual creation).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **First Idea:** M.N. Roy (1934).\n• **Official Demand:** INC (1935) & Nehru (1938 on adult franchise).\n• **British Concession:** August Offer (1940) in principle; Cripps (1942) detailed scheme; Cabinet Mission (1946) finalized election blueprint.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Cabinet Mission Plan succeeded where Cripps failed because it preserved Indian unity by rejecting a separate Pakistan assembly while providing a 3-tier grouping of provinces. The Constituent Assembly was created under this scheme as a partly elected, partly nominated body.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T2-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Who among the following was the first to put forward the formal idea of a Constituent Assembly for India in 1934?',
        options: {
          A: 'Mahatma Gandhi',
          B: 'M.N. Roy',
          C: 'Jawaharlal Nehru',
          D: 'Dr. B.R. Ambedkar',
        },
        correctAnswer: 'B',
        explanation: 'M.N. Roy was a pioneer of the communist movement in India and the first person to formally advocate for an elected Constituent Assembly in 1934.',
        trapExplanation: 'While Tilak (1895) and Gandhi (1922) expressed early thoughts on self-determination, M.N. Roy formulated the specific institutional demand in 1934.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 1996,
        pyqPaper: 'UPSC Prelims GS',
      },
    ],
  },
  {
    id: 'CON-T2-02',
    slug: 'composition-election-restructuring-constituent-assembly',
    topicSlug: 'constituent-assembly',
    topicTitle: 'Constituent Assembly of India',
    topicOrder: 2,
    title: 'Composition, Election Framework & Restructuring of the Constituent Assembly',
    shortDefinition: 'The original 389-seat architecture under the Cabinet Mission Plan (292 British provinces, 93 princely states, 4 Chief Commissioner provinces), indirect proportional voting via single transferable vote, and post-partition reduction to 299 seats.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T2-02', 'SEM-T2-03'],
    claims: [
      {
        id: 'CLM-T2-02.1',
        statement: 'Under the Cabinet Mission Plan, the total strength of the Constituent Assembly was fixed at 389 seats: 292 from 11 British Provinces, 93 from Princely States, and 4 from Chief Commissioner Provinces (Delhi, Ajmer-Merwara, Coorg, British Balochistan).',
        claimType: 'CONSTITUTIONAL_COMPOSITION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 11 (Printed p. 5)',
      },
      {
        id: 'CLM-T2-02.2',
        statement: 'Seats were allocated in proportion to population (roughly 1 seat per 1 million people) and divided among three principal communities: Muslims, Sikhs (in Punjab), and General.',
        claimType: 'ELECTORAL_RULE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 11 (Printed p. 5)',
      },
      {
        id: 'CLM-T2-02.3',
        statement: 'The Constituent Assembly was a partly elected and partly nominated body: provincial members were elected indirectly by the Provincial Legislative Assemblies via Single Transferable Vote (under the limited 1935 franchise based on tax, property, and education), while princely state representatives were nominated by the rulers.',
        claimType: 'ELECTORAL_MECHANISM_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 11 (Printed p. 5)',
      },
      {
        id: 'CLM-T2-02.4',
        statement: 'Following the Mountbatten Plan (June 3, 1947) and partition, the membership of the Constituent Assembly for India was reduced from 389 to 299 (229 from British Indian Provinces and 70 from Princely States).',
        claimType: 'POST_PARTITION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 12 (Printed p. 6)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'A Partly Elected, Partly Nominated Chamber',
        body: 'The Constituent Assembly was not directly elected by universal adult franchise due to post-war logistical hurdles, communal riots, and time constraints. Instead, it was indirectly elected by members of the Provincial Assemblies elected under the Government of India Act 1935, combined with nominated princely representatives.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Seat Breakdown & Partition Reduction',
        body: '### 1. Initial Allotment (Cabinet Mission Plan — 389 Seats)\n• **British Indian Provinces (292 seats):** Madras (49), Bombay (21), UP (55), Bihar (36), Central Provinces (17), Punjab (28), Bengal (60), Assam (10), Orissa (9), NWFP (3), Sindh (4).\n• **Chief Commissioner Provinces (4 seats):** Delhi (1), Ajmer-Merwara (1), Coorg (1), British Balochistan (1).\n• **Princely States (93 seats):** Nominated by rulers.\n\n### 2. July–August 1946 Election Outcome\n• Indian National Congress: **208 seats**\n• Muslim League: **73 seats**\n• Others & Independents: **15 seats**\n\n### 3. Post-Partition Reduction (Indian Independence Act 1947 — 299 Seats)\nAfter the Muslim League members from Pakistan areas withdrew:\n• Indian Provinces: **229 seats** (down from 296)\n• Princely States: **70 seats** (down from 93)\n• **Total Indian Strength: 299 seats** (on Nov 26, 1949, 284 members actually signed the Constitution).',
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
        syllabusSection: 'GS Paper II: Making of the Constitution — Assembly Composition.',
        examNotes: 'Prelims tests exact numerical distribution (389 -> 299) and the method of election (proportional representation by single transferable vote).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Constituent Assembly — Structure and Membership.',
        examNotes: 'Frequent questions on Chief Commissioner Provinces (Ajmer-Merwara representation) and total post-partition count.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional History.',
        examNotes: 'Historical background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Original 389 (292 Provinces + 93 Princely + 4 Chief Comm: Delhi, Ajmer-Merwara, Coorg, Balochistan). Post-partition = 299 (229 Provinces + 70 Princely). 284 signed on Nov 26, 1949.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Election Method:** Indirect election via Single Transferable Vote by Provincial Assemblies (1935 Act franchise).\n• **Princely States:** Nominated by rulers.\n• **Communities:** 3 categories (Muslims, Sikhs in Punjab, General).\n• **Partition Shift:** 389 -> 299 seats.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The indirect election mechanism ensured that despite lacking universal adult franchise, the Assembly contained representatives of all major political, religious, and social groups (Hindus, Muslims, Sikhs, Parsis, Anglo-Indians, Christians, SCs, STs, and 15 women).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T2-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Constituent Assembly of India, which of the following statements is/are correct?\n1. It was elected directly on the basis of universal adult franchise.\n2. The representatives of the Princely States were nominated by the heads of the Princely States.\n3. The total strength of the Assembly was reduced to 299 after the partition of India.',
        options: {
          A: '1 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statement 1 is incorrect because it was elected indirectly by the Provincial Assemblies under the limited 1935 franchise. Statements 2 and 3 are historically accurate.',
        trapExplanation: 'Universal adult suffrage was introduced for general elections in 1951-52, not for the Constituent Assembly in 1946.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS',
      },
    ],
  },
  {
    id: 'CON-T2-03',
    slug: 'functioning-working-timeline-dual-roles-constituent-assembly',
    topicSlug: 'constituent-assembly',
    topicTitle: 'Constituent Assembly of India',
    topicOrder: 2,
    title: 'Functioning, Working Timeline & Dual Roles of the Constituent Assembly',
    shortDefinition: 'Chronological roadmap of the Assembly: December 9, 1946 opening meeting, leadership appointments, Objectives Resolution, its dual role as Constitution-maker and Provisional Parliament, adoption on Nov 26, 1949, and commencement on Jan 26, 1950.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T2-04', 'SEM-T2-05'],
    claims: [
      {
        id: 'CLM-T2-03.1',
        statement: 'The Constituent Assembly held its first meeting on December 9, 1946, with Dr. Sachchidananda Sinha serving as the temporary Chairman following the French convention of appointing the oldest member.',
        claimType: 'HISTORICAL_EVENT_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 13 (Printed p. 7)',
      },
      {
        id: 'CLM-T2-03.2',
        statement: 'On December 11, 1946, Dr. Rajendra Prasad was elected permanent President of the Assembly, H.C. Mukherjee and V.T. Krishnamachari were elected Vice-Presidents, and Sir B.N. Rau was appointed Constitutional Advisor.',
        claimType: 'OFFICIAL_APPOINTMENT_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 13 (Printed p. 7)',
      },
      {
        id: 'CLM-T2-03.3',
        statement: 'On December 13, 1946, Jawaharlal Nehru introduced the historic Objectives Resolution outlining the philosophical foundation of the Republic, which was unanimously adopted on January 22, 1947, later becoming the basis for the Preamble.',
        claimType: 'HISTORICAL_CONSTITUTIONAL_EVENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 14 (Printed p. 8)',
      },
      {
        id: 'CLM-T2-03.4',
        statement: 'Under the Indian Independence Act 1947, the Assembly became a sovereign body performing dual functions: as a Constitution-making body (chaired by Dr. Rajendra Prasad) and as the Dominion Legislature / Provisional Parliament (chaired by G.V. Mavalankar).',
        claimType: 'INSTITUTIONAL_DUAL_ROLE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 14 (Printed p. 8)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Two Hats of the Same Assembly',
        body: 'Between August 15, 1947 and the first general elections of 1952, the Constituent Assembly wore two distinct institutional hats: when meeting to draft the Constitution, it was presided over by **Dr. Rajendra Prasad**; when meeting to pass ordinary laws as India’s first parliament, it was presided over by Speaker **G.V. Mavalankar**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Key Milestones and Timeline Breakdown',
        body: '• **Dec 9, 1946:** First sitting (attended by 211 members; Muslim League boycotted).\n• **Dec 11, 1946:** Dr. Rajendra Prasad elected President; B.N. Rau appointed Constitutional Advisor.\n• **Dec 13, 1946:** Objectives Resolution moved by Nehru (adopted Jan 22, 1947).\n• **July 22, 1947:** National Flag adopted (ratio 3:2, designed by Pingali Venkayya; Sarojini Naidu presented it).\n• **Aug 15, 1947:** Became fully sovereign under Indian Independence Act 1947.\n• **Aug 29, 1947:** Drafting Committee appointed.\n• **Nov 26, 1949:** Constitution adopted, enacted, and given to ourselves (395 Articles, 8 Schedules, 22 Parts). 15 Articles came into force immediately (Articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392, 393).\n• **Jan 24, 1950:** Final sitting; National Anthem (*Jana Gana Mana*) and National Song (*Vande Mataram*) adopted; Dr. Rajendra Prasad elected first President of India; 284 members signed the original copies.\n• **Jan 26, 1950:** Full commencement of the Constitution (commemorating the 1930 declaration of *Purna Swaraj*).',
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
        syllabusSection: 'GS Paper II: Making of the Constitution — Timeline and Functioning.',
        examNotes: 'Very high yield for dual role (Prasad vs Mavalankar) and Articles that came into force on Nov 26, 1949.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Constituent Assembly — Significant Milestones.',
        examNotes: 'Repeated questions on B.N. Rau (Advisor) and G.V. Mavalankar (Speaker of provisional legislature).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional History.',
        examNotes: 'Statutory emergence of Indian sovereign legal framework.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Dec 9, 1946 (Sinha) -> Dec 11 (Prasad President, B.N. Rau Advisor) -> Dec 13 (Objectives Resolution) -> July 22, 1947 (Flag) -> Nov 26, 1949 (Adopted) -> Jan 24, 1950 (Anthem/Song/Prasad President) -> Jan 26, 1950 (Commencement).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Dual Role:** Rajendra Prasad presided over Constitution drafting; G.V. Mavalankar presided over legislative sittings.\n• **Time Taken:** 2 years, 11 months, 18 days across 11 sessions (plus Jan 24, 1950 final session).\n• **Nov 26, 1949:** Citizenship (5-9), Elections (324), and transitional provisions took effect immediately.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The dual-role mechanism allowed India to maintain continuous legislative governance and administrative stability while simultaneously debating fundamental constitutional law, preventing the legal vacuum that destabilized other post-colonial transitions.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T2-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'Who presided over the Constituent Assembly when it met as the legislative body (Provisional Parliament) of independent India?',
        options: {
          A: 'Dr. Rajendra Prasad',
          B: 'Dr. B.R. Ambedkar',
          C: 'G.V. Mavalankar',
          D: 'Dr. Sachchidananda Sinha',
        },
        correctAnswer: 'C',
        explanation: 'When the Assembly met as the legislative body to enact ordinary statutes, G.V. Mavalankar took the chair. When it met to frame the constitution, Dr. Rajendra Prasad presided.',
        trapExplanation: 'Dr. Rajendra Prasad was the permanent President for constitution-making, but G.V. Mavalankar was Speaker for legislative work.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2012,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T2-04',
    slug: 'committees-of-constituent-assembly-and-drafting-committee',
    topicSlug: 'constituent-assembly',
    topicTitle: 'Constituent Assembly of India',
    topicOrder: 2,
    title: 'Committees of the Constituent Assembly & The Drafting Committee',
    shortDefinition: 'The division of labor in the Assembly across 8 major committees and numerous minor committees, with deep focus on the 7-member Drafting Committee chaired by Dr. B.R. Ambedkar appointed on August 29, 1947.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T2-06'],
    claims: [
      {
        id: 'CLM-T2-04.1',
        statement: 'The Constituent Assembly appointed 8 major committees and several minor committees to examine specific areas of the constitutional architecture.',
        claimType: 'ASSEMBLY_ORGANIZATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 15 (Printed p. 9)',
      },
      {
        id: 'CLM-T2-04.2',
        statement: 'The Drafting Committee was appointed on August 29, 1947, under the Chairmanship of Dr. B.R. Ambedkar, consisting of 7 members: (1) Dr. B.R. Ambedkar, (2) N. Gopalaswamy Ayyangar, (3) Alladi Krishnaswamy Iyer, (4) Dr. K.M. Munshi, (5) Syed Mohammad Saadulla, (6) N. Madhava Rau (replacing B.L. Mitter due to ill-health), and (7) T.T. Krishnamachari (replacing D.P. Khaitan who died in 1948).',
        claimType: 'COMMITTEE_MEMBERSHIP_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 15 (Printed p. 9)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Functional Division of Labor in Constitution-Making',
        body: 'Rather than debating complex constitutional clauses in a 300-member plenary session, the Constituent Assembly appointed specialized committees to draft specific constitutional domains. These specialized drafts were then consolidated, scrutinized, and legally formulated by the **Drafting Committee**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Functional Grouping of the 8 Major Committees & Sub-Committees',
        body: 'Understanding the committee architecture requires seeing **who handled what type of constitutional work**:\n\n### 1. National Governance & Federal Architecture (Chaired by Jawaharlal Nehru)\n• **Union Powers Committee:** Demarcated the scope of Central legislative powers and federal balance.\n• **Union Constitution Committee:** Designed the structure of the Union Executive, Parliament, and Judiciary.\n• **States Committee:** Negotiated accession and integration modalities with Princely States.\n\n### 2. State Governance, Rights & Minorities (Chaired by Sardar Vallabhbhai Patel)\n• **Provincial Constitution Committee:** Designed State/Provincial executives and legislative structures.\n• **Advisory Committee on Fundamental Rights, Minorities & Tribal/Excluded Areas:** A massive 54-member body that operated through crucial sub-committees:\n  - *Fundamental Rights Sub-Committee:* **J.B. Kripalani** (Drafted the civil liberties charter of Part III)\n  - *Minorities Sub-Committee:* **H.C. Mukherjee** (Drafted safeguards for religious and linguistic minorities)\n  - *North-East Frontier Tribal Areas & Assam Excluded Areas Sub-Committee:* **Gopinath Bardoloi** (Drafted the framework for the 6th Schedule)\n  - *Excluded and Partially Excluded Areas (Other than Assam) Sub-Committee:* **A.V. Thakkar** (Drafted the framework for the 5th Schedule)\n\n### 3. Assembly Governance & Procedural Rules (Chaired by Dr. Rajendra Prasad)\n• **Rules of Procedure Committee:** Formulated parliamentary procedure and voting mechanisms.\n• **Steering Committee:** Managed the legislative timetable, business agenda, and committee sequencing.\n• *(Also chaired the Finance & Staff Committee and the Ad Hoc Committee on the National Flag).*\n\n### 4. Synthesis & Formal Drafting (Chaired by Dr. B.R. Ambedkar)\n• **Drafting Committee (Appointed Aug 29, 1947):** Scrutinized the initial constitutional draft prepared by Constitutional Advisor Sir B.N. Rau and formulated the official Draft Constitution of India.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Drafting Committee Composition & Replacements',
        body: '| Member | Background / Party | Replacement Note |\n| :--- | :--- | :--- |\n| **Dr. B.R. Ambedkar (Chairman)** | Scheduled Castes Federation (Non-Congress) | Father of Indian Constitution / Modern Manu |\n| **N. Gopalaswamy Ayyangar** | Former Prime Minister of Kashmir | Key architect of Article 370 draft |\n| **Alladi Krishnaswamy Iyer** | Former Advocate-General of Madras | Eminent jurist and procedural expert |\n| **Dr. K.M. Munshi** | Indian National Congress | Swatantra Party founder later |\n| **Syed Mohammad Saadulla** | Muslim League (Assam) | Former Premier of Assam |\n| **N. Madhava Rau** | Former Diwan of Mysore | Replaced **B.L. Mitter** who resigned due to ill-health |\n| **T.T. Krishnamachari** | Indian National Congress | Replaced **D.P. Khaitan** who died in 1948 |',
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
        syllabusSection: 'GS Paper II: Drafting Committee and Major Committee Leadership.',
        examNotes: 'Prelims frequently matches Committee names with their Chairpersons (e.g. Patel vs Nehru vs Prasad).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Drafting Committee Members and Replacements.',
        examNotes: 'High-frequency question on replacements (Madhava Rau for Mitter, Krishnamachari for Khaitan).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional History.',
        examNotes: 'Historical background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nehru = Union Powers/Const/States. Patel = Provincial/Advisory (FR & Minorities). Prasad = Rules/Steering. Ambedkar = Drafting Committee (7 members: Ambedkar, Ayyangar, Alladi, Munshi, Saadulla, Madhava Rau, TTK).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Drafting Committee:** Appointed Aug 29, 1947 (7 members).\n• **Replacements:** N. Madhava Rau replaced B.L. Mitter; T.T. Krishnamachari replaced D.P. Khaitan.\n• **Only 2 Congressmen:** K.M. Munshi and T.T. Krishnamachari were original Congress members in the Drafting Committee.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The drafting process relied fundamentally on Sir B.N. Rau’s initial draft (October 1947, containing 243 articles and 13 schedules) which the Drafting Committee scrutinized, debated, and revised into the February 1948 Draft Constitution published for public feedback.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T2-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Who among the following was NOT a member of the Drafting Committee of the Constituent Assembly?',
        options: {
          A: 'N. Gopalaswamy Ayyangar',
          B: 'Alladi Krishnaswamy Iyer',
          C: 'Dr. Rajendra Prasad',
          D: 'Dr. K.M. Munshi',
        },
        correctAnswer: 'C',
        explanation: 'Dr. Rajendra Prasad was the President of the Constituent Assembly and chaired the Rules and Steering Committees, but was not a member of the 7-member Drafting Committee.',
        trapExplanation: 'Ayyangar, Alladi, and Munshi were core members of the Drafting Committee chaired by Ambedkar.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2008,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T2-05',
    slug: 'sources-of-the-indian-constitution-borrowing-matrix',
    topicSlug: 'constituent-assembly',
    topicTitle: 'Constituent Assembly of India',
    topicOrder: 2,
    title: 'Major Sources Borrowed & Constitutional Borrowing Matrix',
    shortDefinition: 'The systematic constitutional borrowing from the Government of India Act 1935 and 10 world democracies (UK, USA, Ireland, Canada, Australia, Germany, USSR, France, South Africa, Japan), synthesized to suit Indian realities.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T2-09', 'SEM-T2-10'],
    claims: [
      {
        id: 'CLM-T2-05.1',
        statement: 'The Government of India Act 1935 served as the primary administrative blueprint for the Indian Constitution, providing over 200 provisions including the federal scheme, office of Governor, judiciary framework, Public Service Commissions, emergency administrative details, and ordinance-making power.',
        claimType: 'CONSTITUTIONAL_BORROWING_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 18 (Printed p. 12)',
      },
      {
        id: 'CLM-T2-05.2',
        statement: 'The British Constitution contributed the Parliamentary form of government, Rule of Law, legislative procedure, Single Citizenship, Cabinet system, Prerogative Writs, Parliamentary Privileges, and Bicameralism.',
        claimType: 'CONSTITUTIONAL_BORROWING_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 18 (Printed p. 12)',
      },
      {
        id: 'CLM-T2-05.3',
        statement: 'The US Constitution contributed Fundamental Rights, Judicial Review, Independence of the Judiciary, Impeachment of the President, Removal of Supreme Court/High Court Judges, post of Vice-President, and the opening phrase of the Preamble.',
        claimType: 'CONSTITUTIONAL_BORROWING_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 18 (Printed p. 12)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Ransacking the World’s Constitutions',
        body: 'As Dr. B.R. Ambedkar famously remarked in the Assembly, the Indian Constitution was framed after **"ransacking all the known constitutions of the world"** to incorporate proven democratic practices while adapting them to Indian social pluralism.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Master Constitutional Borrowing Matrix',
        body: '1. **Government of India Act 1935:** Federal scheme, Office of Governor, Judiciary, Public Service Commissions, Emergency administrative provisions, Ordinance power.\n2. **United Kingdom (UK):** Parliamentary system, Rule of Law, Single Citizenship, Cabinet system, Prerogative Writs, Bicameralism, Parliamentary Privileges.\n3. **United States (USA):** Fundamental Rights, Judicial Review, Independence of Judiciary, Impeachment of President, Removal of Judges, Vice-President, Preamble opening phrase.\n4. **Ireland:** Directive Principles of State Policy (DPSPs), Nomination of members to Rajya Sabha, Method of Presidential election.\n5. **Canada:** Federation with a strong Centre, Vesting of residuary powers in the Centre (Art 248), Appointment of State Governors by Centre, Advisory jurisdiction of Supreme Court (Art 143).\n6. **Australia:** Concurrent List (7th Schedule), Joint Sitting of both Houses of Parliament (Art 108), Freedom of inter-state trade, commerce and intercourse (Part XIII).\n7. **Weimar Germany:** Suspension of Fundamental Rights during National Emergency (Art 358 & 359).\n8. **Soviet Union (USSR):** Fundamental Duties (Part IVA / Art 51A), Ideals of Justice (Social, Economic, Political) in the Preamble, Planning Commission model.\n9. **France:** Republic system, Ideals of Liberty, Equality, and Fraternity in the Preamble.\n10. **South Africa:** Procedure for amendment of the Constitution (Art 368), Election of members of Rajya Sabha.\n11. **Japan:** "Procedure established by law" (Art 21).',
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
        syllabusSection: 'GS Paper II: Sources of the Indian Constitution.',
        examNotes: 'Prelims matching questions are extremely frequent (e.g. Australia = Joint Sitting; Canada = Residuary Powers; Ireland = DPSP).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Sources Borrowed in the Constitution.',
        examNotes: 'Very high frequency in 20-word matching and direct questions.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Architecture.',
        examNotes: 'Constitutional roots of administrative law.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '1935 Act = Blueprint (Federal/Governor/UPSC). UK = Parliamentary/Rule of Law/Writs. USA = FR/Judicial Review. Ireland = DPSP. Canada = Strong Centre/Residuary. Australia = Concurrent/Joint Sitting. Germany = FR Suspension. USSR = Duties/Justice. France = Republic/Liberty. South Africa = Amendment.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Largest Source:** 1935 Act (over 50% structural text).\n• **Philosophical Sources:** USA (Fundamental Rights) + Ireland (DPSPs).\n• **Political Sources:** UK (Parliamentary Executive & Cabinet accountability).\n• **Federal Sources:** Canada (Strong Centre) + Australia (Concurrent list).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Constitutional borrowing was not mechanical plagiarism. The framers modified foreign features to eliminate flaws: e.g. adopting the American Bill of Rights but adding explicit reasonable restrictions to prevent judicial veto over welfare legislation.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T2-05-01',
        type: 'CONCEPT_CHECK',
        stem: 'The concept of "A Federation with a Strong Centre" and the vesting of "Residuary Powers in the Centre" in the Indian Constitution were borrowed from:',
        options: {
          A: 'United States of America',
          B: 'Canada',
          C: 'Australia',
          D: 'Ireland',
        },
        correctAnswer: 'B',
        explanation: 'Canada’s 1867 British North America Act established a federation with a strong centre and residuary powers vested in the Dominion Parliament, which India adopted under Article 248.',
        trapExplanation: 'The US and Australia vest residuary powers in the constituent States, not the Centre.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T2-06',
    slug: 'constituent-assembly-rajasthan-representation-criticisms',
    topicSlug: 'constituent-assembly',
    topicTitle: 'Constituent Assembly of India',
    topicOrder: 2,
    title: 'Constituent Assembly: Rajasthan Representation, Critical Appraisals & Rebuttals',
    shortDefinition: 'The 14 representative members from Rajasthan princely states/Ajmer-Merwara, key officers and calligraphers of the Assembly, and comprehensive intellectual rebuttals to the 6 classical criticisms of the Assembly.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T2-07', 'SEM-T2-08'],
    claims: [
      {
        id: 'CLM-T2-06.1',
        statement: 'A total of 14 prominent leaders represented Rajasthan in the Constituent Assembly across princely states and the Chief Commissioner province of Ajmer-Merwara, including V.T. Krishnamachari, Hiralal Shastri, Manikya Lal Varma, Balwant Singh Mehta, Jai Narayan Vyas, C.S. Venkatachari, K.M. Panikkar, and Mukut Bihari Lal Bhargava.',
        claimType: 'RAJASTHAN_REGIONAL_HISTORY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 16 (Printed p. 10)',
      },
      {
        id: 'CLM-T2-06.2',
        statement: 'Key artistic and administrative officers included: Elephant symbol as Seal, H.V.R. Iyengar as Secretary, S.N. Mukherjee as Chief Draftsman, Prem Behari Narain Raizada as Principal Calligrapher (English), Vasant Krishan Vaidya as Hindi Calligrapher, and Nandalal Bose with Beohar Rammanohar Sinha for artistic illumination.',
        claimType: 'HISTORICAL_ARTIFACT_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 16 (Printed p. 10)',
      },
      {
        id: 'CLM-T2-06.3',
        statement: 'The classical criticisms of the Assembly (non-representative, lack of initial sovereignty, time-consuming Drifting Committee tag by Naziruddin Ahmad, Congress/Hindu/lawyer dominance) are rebutted by historical evidence of broad ideological diversity, consensus-based decision-making, and immediate enactment of universal adult franchise.',
        claimType: 'HISTORIOGRAPHICAL_ANALYSIS',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 17 (Printed p. 11)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Legitimacy Beyond Formal Mandate',
        body: 'Although critics attacked the Assembly as an unrepresentative, Congress-dominated, time-consuming body of lawyers, its legitimacy derived from its **consensus-driven ethos**, its deep socio-economic commitments, and its immediate establishment of universal adult franchise in independent India.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Rajasthan Members in the Constituent Assembly',
        body: '1. **V.T. Krishnamachari** (Jaipur — also Vice-President of Assembly)\n2. **Hiralal Shastri** (Jaipur)\n3. **C.S. Venkatachari** (Jodhpur)\n4. **Jai Narayan Vyas** (Jodhpur)\n5. **Manikya Lal Varma** (Udaipur)\n6. **Balwant Singh Mehta** (Udaipur — first signatory from Rajasthan)\n7. **Dalel Singh** (Kotah)\n8. **Gokul Lal Asawa** (Shahpura)\n9. **Jaswant Singh** (Bikaner)\n10. **K.M. Panikkar** (Bikaner)\n11. **Raj Bahadur** (Bharatpur)\n12. **Mukut Bihari Lal Bhargava** (Ajmer-Merwara)\n13. **Ramchandra Upadhyaya** (Alwar)\n14. **K.S. Himmat Singh** (Idar/Rajasthan States)',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'The 6 Major Criticisms vs Historical Rebuttals',
        body: '1. **"Not a Representative Body":** Direct election was impossible due to widespread partition riots and princely integration hurdles. The Assembly proved its popular mandate by immediately conducting the 1951-52 general elections on universal adult suffrage.\n2. **"Not a Sovereign Body":** While created under the British Cabinet Mission, it became 100% sovereign on August 15, 1947 via Section 6 of the Indian Independence Act.\n3. **"Wastage of Time (Drifting Committee)":** Naziruddin Ahmad mocked the Drafting Committee, comparing India’s 2 yrs 11 mos 18 days with the US 4 months. Rebuttal: The US had 7 articles and no state constitutions; India had 395 articles addressing massive religious, linguistic, and caste diversities. Australia took 9 years; Pakistan took 9 years.\n4. **"Congress Dominated (Granville Austin: Congress is India)":** Congress was a broad national umbrella movement containing socialist, conservative, and liberal factions. Dr. Ambedkar (Chairman) was non-Congress, and decisions were reached by consensus.\n5. **"Hindu Dominated (Churchill / Viscount Simon)":** Proportion increased purely because Muslim-majority areas opted for Pakistan; the Constitution established an explicitly secular state with robust minority safeguards (Arts 25–30).\n6. **"Lawyer-Politician Paradise":** Legal precision was essential to safeguard fundamental rights and delineate delicate federal Centre-State jurisdictions in a complex country.',
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
        syllabusSection: 'GS Paper II: Critical Evaluation of Constituent Assembly.',
        examNotes: 'UPSC Mains GS II frequently asks analytical questions on the representative character and legitimacy of the Constituent Assembly.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Rajasthan’s Role in Constitution Making & Key Figures.',
        examNotes: 'Extremely high yield for Rajasthan leaders (Balwant Singh Mehta, Hiralal Shastri, Mukut Bihari Lal Bhargava).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Foundations.',
        examNotes: 'Historical context.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '14 Rajasthan members (1st signatory = Balwant Singh Mehta). Calligrapher = Prem Behari Raizada. Artist = Nandalal Bose. Rebuttal to Naziruddin Ahmad "Drifting Committee": Indian diversity + single constitution for Union & States needed thorough deliberation.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Rajasthan Leaders:** V.T. Krishnamachari, Hiralal Shastri, Manikya Lal Varma, Balwant Singh Mehta, J.N. Vyas, Mukut Bihari Lal Bhargava.\n• **Key Officers:** H.V.R. Iyengar (Secretary), S.N. Mukherjee (Chief Draftsman).\n• **Consensus Ethos:** Granville Austin noted decision-making by consensus and accommodation was the hallmark of the Assembly.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Constituent Assembly’s transformative success lay in its commitment to constitutional morality over majoritarian impulse, crafting a living document that preserved Indian democracy while neighboring post-colonial states descended into military dictatorships.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T2-06-01',
        type: 'CONCEPT_CHECK',
        stem: 'Who was the first person from Rajasthan to sign the Constitution of India in the Constituent Assembly?',
        options: {
          A: 'Hiralal Shastri',
          B: 'Manikya Lal Varma',
          C: 'Balwant Singh Mehta',
          D: 'Jai Narayan Vyas',
        },
        correctAnswer: 'C',
        explanation: 'Balwant Singh Mehta, representing Udaipur, was the first member from Rajasthan to sign the original manuscript of the Indian Constitution.',
        trapExplanation: 'Hiralal Shastri and Manikya Lal Varma were also key signatories, but Mehta signed first among Rajasthan members.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },

  // =========================================================================
  // TOPIC 3: PREAMBLE (4 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T3-01',
    slug: 'preamble-historical-genesis-text-authority-jurist-views',
    topicSlug: 'preamble',
    topicTitle: 'The Preamble of the Indian Constitution',
    topicOrder: 3,
    title: 'Preamble: Historical Genesis, Text, Source of Authority & Eminent Perspectives',
    shortDefinition: 'The preface of the Constitution rooted in Nehru’s Objectives Resolution (1946), verbatim text enacted on Oct 17, 1949, popular sovereignty ("We the People"), and famous characterizations by Palkhivala, Munshi, and Thakur Das Bhargava.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T3-01', 'SEM-T3-02', 'SEM-T3-12'],
    claims: [
      {
        id: 'CLM-T3-01.1',
        statement: 'The Preamble is based on the "Objectives Resolution" moved by Jawaharlal Nehru on December 13, 1946, and adopted by the Constituent Assembly on January 22, 1947.',
        claimType: 'HISTORICAL_ORIGIN_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 20 (Printed p. 14)',
      },
      {
        id: 'CLM-T3-01.2',
        statement: 'The opening words "WE, THE PEOPLE OF INDIA" establish the doctrine of Popular Sovereignty, indicating that ultimate authority originates from the citizens of India and not an external sovereign.',
        claimType: 'CONSTITUTIONAL_DOCTRINE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 21 (Printed p. 15)',
      },
      {
        id: 'CLM-T3-01.3',
        statement: 'Eminent jurists described the Preamble as the "Identity Card of the Constitution" (N.A. Palkhivala), "Political Horoscope of our Sovereign Democratic Republic" (K.M. Munshi), and "Soul and Key to the Constitution" (Pandit Thakur Das Bhargava).',
        claimType: 'JURISTIC_OPINION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 31 (Printed p. 25)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Identity Card of the Constitution',
        body: 'The **Preamble** is the introductory statement of the Constitution that embodies its foundational philosophy, core values, sovereign source of authority, and overarching socio-political goals.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Verbatim Text & Structural Components',
        body: '> **"WE, THE PEOPLE OF INDIA**, having solemnly resolved to constitute India into a **SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC** and to secure to all its citizens:\n> **JUSTICE**, social, economic and political;\n> **LIBERTY** of thought, expression, belief, faith and worship;\n> **EQUALITY** of status and of opportunity;\n> and to promote among them all\n> **FRATERNITY** assuring the dignity of the individual and the unity and integrity of the Nation;\n> **IN OUR CONSTITUENT ASSEMBLY** this twenty-sixth day of November, 1949, do **HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION."**\n\n### The 4 Structural Pillars:\n1. **Source of Authority:** The People of India.\n2. **Nature of State:** Sovereign, Socialist, Secular, Democratic, Republic.\n3. **Objectives:** Justice, Liberty, Equality, Fraternity.\n4. **Date of Adoption:** November 26, 1949.',
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
        syllabusSection: 'GS Paper II: Preamble — Philosophy and Key Words.',
        examNotes: 'Prelims frequently tests exact sequence of opening adjectives (Sovereign, Socialist, Secular, Democratic, Republic) and quotes.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Preamble — Key Terms and Quotes.',
        examNotes: 'Matching questions on jurist quotes (Palkhivala, Munshi, Bhargava).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Preamble Foundations.',
        examNotes: 'Basic legal awareness.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Objectives Resolution (Nehru, 1946) -> Preamble. Order = SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC. Palkhivala = "Identity Card", Munshi = "Horoscope", Bhargava = "Soul".',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Adopted:** Nov 26, 1949 (enacted last in the Assembly on Oct 17, 1949).\n• **Source:** "We, The People" indicates popular sovereignty.\n• **Sequence:** Sovereign -> Socialist -> Secular -> Democratic -> Republic.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Preamble was voted into the Constitution after all other provisions were finalized to ensure complete harmony with the substantive Articles. It reflects the moral aspirations of the freedom movement.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T3-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Who described the Preamble of the Indian Constitution as the "Identity Card of the Constitution"?',
        options: {
          A: 'N.A. Palkhivala',
          B: 'Dr. K.M. Munshi',
          C: 'Sir Alladi Krishnaswamy Iyer',
          D: 'Dr. B.R. Ambedkar',
        },
        correctAnswer: 'A',
        explanation: 'Eminent jurist and constitutional expert N.A. Palkhivala called the Preamble the "Identity Card of the Constitution".',
        trapExplanation: 'K.M. Munshi called it the "Political Horoscope", not the "Identity Card".',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T3-02',
    slug: 'nature-of-indian-state-sovereign-socialist-secular-democratic-republic',
    topicSlug: 'preamble',
    topicTitle: 'The Preamble of the Indian Constitution',
    topicOrder: 3,
    title: 'Nature of the Indian State: Sovereign, Socialist, Secular, Democratic, Republic',
    shortDefinition: 'In-depth analysis of the five defining attributes of the Indian State: absolute internal-external sovereignty, democratic (non-Marxist) socialism, positive secularism (Sarva Dharma Sambhava), representative democracy, and republican headship.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T3-03', 'SEM-T3-04', 'SEM-T3-05', 'SEM-T3-06'],
    claims: [
      {
        id: 'CLM-T3-02.1',
        statement: 'Sovereignty implies India is neither a dependency nor a dominion of any other nation, possessing absolute legal authority to legislate on any subject, acquire foreign territory, or cede territory subject to constitutional procedure.',
        claimType: 'CONSTITUTIONAL_DOCTRINE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 22 (Printed p. 16)',
      },
      {
        id: 'CLM-T3-02.2',
        statement: 'Indian Socialism is "Democratic Socialism" (a mixed economy where public and private sectors coexist to eliminate poverty and inequality), not "Communist Socialism" (state ownership of all means of production).',
        claimType: 'JUDICIAL_INTERPRETATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 23 (Printed p. 17)',
      },
      {
        id: 'CLM-T3-02.3',
        statement: 'Indian Secularism follows the positive concept of "Sarva Dharma Sambhava" (equal respect and protection for all religions with state power to enact social reform under Arts 25-28), distinct from Western negative secularism (strict wall of separation between Church and State).',
        claimType: 'COMPARATIVE_SECULARISM_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 24 (Printed p. 18)',
      },
      {
        id: 'CLM-T3-02.4',
        statement: 'India is a Republic because its Head of State (the President) is elected for a fixed term of 5 years, in contrast to a monarchy (like the UK) where the head of state holds a hereditary position.',
        claimType: 'POLITICAL_CLASSIFICATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 25 (Printed p. 19)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Five Adjectives Defining the Indian State',
        body: 'The Preamble characterizes the Indian State using five precise terms: **Sovereign** (independent master of its destiny), **Socialist** (welfare commitment to reduce inequality), **Secular** (positive equal respect for all faiths), **Democratic** (government by consent and election), and **Republic** (elected head of state).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Detailed Analytical Breakdown of the 5 Pillars',
        body: '1. **SOVEREIGN:**\n   • Complete external independence (membership in Commonwealth or UN does not impair sovereignty).\n   • Power to acquire foreign territory or cede territory (requires constitutional amendment under Art 368 per Berubari 1960 / 100th Amendment 2015).\n\n2. **SOCIALIST (Added by 42nd Amendment 1976):**\n   • In *D.S. Nakara v. Union of India (1983)*, the Supreme Court held: "Democratic socialism aims to end poverty, ignorance, disease and inequality of opportunity."\n   • *Excel Wear v. Union of India (1978):* Socialism does not mean total nationalization of private enterprise.\n\n3. **SECULAR (Added by 42nd Amendment 1976):**\n   • In *S.R. Bommai v. Union of India (1994)*, a 9-judge bench ruled that **Secularism is part of the Basic Structure** of the Constitution.\n   • Articles 25 to 28 guarantee freedom of religion as a fundamental right.\n\n4. **DEMOCRATIC:**\n   • Indirect Representative Parliamentary Democracy.\n   • Universal Adult Suffrage (Article 326), Periodic Elections, Rule of Law, Judicial Independence.\n\n5. **REPUBLIC:**\n   • Head of State is elected (indirectly by Electoral College), not hereditary.\n   • Political sovereignty is vested in the people, not a monarch.\n   • Absence of any privileged aristocratic class; all public offices open to all citizens.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Western Secularism vs Indian Positive Secularism',
        body: '| Dimension | Western Secularism (Negative) | Indian Secularism (Positive / Sarva Dharma Sambhava) |\n| :--- | :--- | :--- |\n| **State-Religion Separation** | Strict wall of mutual exclusion (State cannot aid or regulate religion) | Principled distance (State respects all religions equally but can intervene) |\n| **Reform Capacity** | State cannot intervene in religious customs | State can legally intervene for social welfare and reform (e.g. Art 17 abolishing untouchability, Art 25(2)(b) opening temples) |\n| **Financial Aid** | No state funds to religious institutions | State can provide non-discriminatory educational aid to religious minority institutions (Art 30) |',
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
        syllabusSection: 'GS Paper II: Secularism, Democratic Socialism, and Republic features.',
        examNotes: 'UPSC Mains GS II repeatedly asks questions contrasting Indian Secularism with the French/Western model.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Preamble Key Terms — Secularism and Republic.',
        examNotes: 'Direct 50-word and 100-word questions on why India is called a Republic and the nature of Indian Secularism.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Public Policy Environment.',
        examNotes: 'Socio-economic objectives influencing banking priority sector norms.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Sovereign = absolute internal/external power. Socialist = mixed democratic welfare economy (D.S. Nakara). Secular = Sarva Dharma Sambhava (Bommai basic structure). Democratic = adult suffrage (Art 326). Republic = elected President.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Republic:** Head of State is elected for 5 years; public offices open to all.\n• **Socialist & Secular:** Added explicitly by 42nd Amendment 1976 (though implicit in Arts 25-28 and Part IV DPSPs).\n• **Secularism:** Basic structure since S.R. Bommai (1994).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The five attributes form an interconnected constitutional ecosystem: Sovereignty ensures autonomy, Socialism and Secularism ensure socio-cultural equity, while Democracy and Republic ensure participatory political legitimacy.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T3-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Why is India described as a "Republic" in the Preamble of the Constitution?',
        options: {
          A: 'Because it has a written constitution and fundamental rights',
          B: 'Because the Head of the State is elected and not hereditary',
          C: 'Because it follows a parliamentary form of government',
          D: 'Because the judiciary is independent of the executive',
        },
        correctAnswer: 'B',
        explanation: 'A republic is a state in which the supreme power rests in the body of citizens entitled to vote and is exercised by representatives chosen directly or indirectly by them, with an elected Head of State.',
        trapExplanation: 'Option C describes a democracy/parliamentary system (the UK has a parliamentary system but is a monarchy, not a republic).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T3-03',
    slug: 'constitutional-objectives-justice-liberty-equality-fraternity',
    topicSlug: 'preamble',
    topicTitle: 'The Preamble of the Indian Constitution',
    topicOrder: 3,
    title: 'Constitutional Objectives: Justice, Liberty, Equality, Fraternity & Dignity',
    shortDefinition: 'The four constitutional ideals promised to citizens: three-dimensional Justice (Social, Economic, Political from Russian Revolution 1917), bounded Liberty (French Revolution 1789), Equality of Status/Opportunity, and Fraternity assuring individual dignity and national integrity.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T3-07', 'SEM-T3-08'],
    claims: [
      {
        id: 'CLM-T3-03.1',
        statement: 'The ideal of Justice in the Preamble embraces three distinct dimensions—Social, Economic, and Political—secured through Fundamental Rights and Directive Principles, inspired by the 1917 Russian Revolution.',
        claimType: 'CONSTITUTIONAL_OBJECTIVE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 26 (Printed p. 20)',
      },
      {
        id: 'CLM-T3-03.2',
        statement: 'The ideals of Liberty, Equality, and Fraternity in the Preamble were inspired by the French Revolution (1789); Liberty is not absolute license but bounded by constitutional restrictions.',
        claimType: 'HISTORICAL_INSPIRATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 27 (Printed p. 21)',
      },
      {
        id: 'CLM-T3-03.3',
        statement: 'The word "Integrity" was added to "Unity of the Nation" by the 42nd Constitutional Amendment Act, 1976, emphasizing both psychological integration and territorial inviolability.',
        claimType: 'AMENDMENT_TEXT_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 27 (Printed p. 21)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Four Promises to Every Citizen',
        body: 'The Preamble articulates four grand objectives: **Justice** (removing social, economic, and political disadvantages), **Liberty** (freedom to develop one’s personality), **Equality** (equal status and opportunity), and **Fraternity** (universal brotherhood fostering dignity and national integrity).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Detailed Breakdown of the 4 Objectives',
        body: '### 1. JUSTICE (Social, Economic, Political — 1917 Russian Revolution)\n• **Social Justice:** Equal treatment of all citizens without discrimination based on caste, color, race, religion, sex; upliftment of SCs, STs, OBCs, and women.\n• **Economic Justice:** Non-discrimination on economic factors; non-concentration of wealth (Articles 39(b) and 39(c)); eradication of poverty.\n• **Political Justice:** Equal access to political offices and equal voice in government (Universal Adult Suffrage under Art 326; non-discriminatory electoral rolls under Art 325).\n• *Distributive Justice = Social Justice + Economic Justice*.\n\n### 2. LIBERTY (Thought, Expression, Belief, Faith, Worship — 1789 French Revolution)\n• Provides conditions for full intellectual and spiritual development.\n• Liberty is **qualified/bounded**, not absolute (subject to reasonable restrictions under Art 19(2)-(6) and Arts 25-28).\n\n### 3. EQUALITY (Status and Opportunity)\n• Absence of special privileges to any section.\n• Civic equality (Arts 14-18), Political equality (Arts 325-326), Economic equality (Art 39).\n\n### 4. FRATERNITY (Assuring Dignity and Unity/Integrity)\n• Promoted through single citizenship and Fundamental Duties (Art 51A(e)).\n• Individual dignity is an essential prerequisite for national unity and integrity.',
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
        syllabusSection: 'GS Paper II: Preamble Objectives — Distributive Justice and Liberty.',
        examNotes: 'Prelims 2017 & 2019 tested: "Economic Justice as one of the objectives is provided in Preamble and DPSPs" and "Liberty of Thought, Expression, Belief, Faith, Worship".',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Objectives of the Preamble.',
        examNotes: 'Frequent questions on the three types of Justice and sources of inspiration (Russia vs France).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Financial Inclusion Objectives.',
        examNotes: 'Economic justice underlies priority lending policies.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Justice = Social, Economic, Political (Russia 1917). Liberty = Thought, Expression, Belief, Faith, Worship (France 1789). Equality = Status & Opportunity. Fraternity = Dignity + Unity & Integrity (42nd Amendment).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Distributive Justice:** Combined operation of Preamble and DPSPs (Arts 38 & 39).\n• **Liberty:** 5 dimensions (Thought, Expression, Belief, Faith, Worship); bounded by law.\n• **42nd Amendment:** Added "Integrity" to "Unity of the Nation".',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Dr. B.R. Ambedkar stressed that Liberty, Equality, and Fraternity form a "union of trinity" in a constitutional democracy: to divorce one from the other is to defeat the very purpose of democracy.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T3-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'In the Constitution of India, "Economic Justice" as one of the objectives is provided in:',
        options: {
          A: 'the Preamble and the Fundamental Rights',
          B: 'the Preamble and the Directive Principles of State Policy',
          C: 'the Fundamental Rights and the Directive Principles of State Policy',
          D: 'None of the above',
        },
        correctAnswer: 'B',
        explanation: 'Economic justice is explicitly mentioned in the Preamble ("JUSTICE, social, economic and political") and operationalized in Part IV Directive Principles (Articles 38, 39(b), 39(c)).',
        trapExplanation: 'Part III Fundamental Rights primarily guarantees civil and political liberties, whereas economic redistribution is located in Part IV.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T3-04',
    slug: 'status-justiciability-amendability-of-the-preamble',
    topicSlug: 'preamble',
    topicTitle: 'The Preamble of the Indian Constitution',
    topicOrder: 3,
    title: 'Constitutional Status, Justiciability & Amendability of the Preamble',
    shortDefinition: 'The landmark judicial evolution of the Preamble from Berubari Union (1960 — not part of Constitution) to Kesavananda Bharati (1973 — integral part and amendable under Art 368 subject to Basic Structure) and LIC of India (1995), its non-justiciable legal character, and the 42nd Amendment.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T3-09', 'SEM-T3-10', 'SEM-T3-11'],
    claims: [
      {
        id: 'CLM-T3-04.1',
        statement: 'In the Berubari Union Case (1960), the Supreme Court held that the Preamble is a key to open the mind of the makers, but is NOT a part of the Constitution.',
        claimType: 'JUDICIAL_PRECEDENT_HISTORY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 28 (Printed p. 22)',
      },
      {
        id: 'CLM-T3-04.2',
        statement: 'In the landmark Kesavananda Bharati Case (1973), a 13-judge Constitution Bench overruled Berubari, holding that the Preamble IS an integral part of the Constitution, enacted through the same constituent procedure, and is amendable under Article 368 provided the Basic Structure is not destroyed.',
        claimType: 'LANDMARK_JUDICIAL_HOLDING',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 28 (Printed p. 22)',
      },
      {
        id: 'CLM-T3-04.3',
        statement: 'The Preamble is non-justiciable (not directly enforceable in courts of law) and is neither a source of substantive power for the legislature nor a prohibition/limitation upon legislative power, functioning instead as an aid to interpretation in cases of statutory ambiguity.',
        claimType: 'LEGAL_ENFORCEABILITY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 30 (Printed p. 24)',
      },
      {
        id: 'CLM-T3-04.4',
        statement: 'The Preamble has been amended only once in constitutional history by the 42nd Constitutional Amendment Act, 1976, which added three new words: "SOCIALIST", "SECULAR", and "and INTEGRITY".',
        claimType: 'CONSTITUTIONAL_AMENDMENT_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 29 (Printed p. 23)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'An Integral, Amendable, yet Non-Justiciable Preface',
        body: 'The Preamble is an **integral part of the Constitution** and can be amended under Article 368 without altering the Basic Structure. However, it is **non-justiciable**: citizens cannot file a writ petition claiming a direct violation of the Preamble alone.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 3-Stage Judicial Evolution of Preamble Status',
        body: '1. **Berubari Union Case (1960 — 8-Judge Bench):**\n   • Held: Preamble shows the general purpose of the Constitution, but is *not* a part of the Constitution.\n   • Consequence: It could not be amended under Article 368.\n\n2. **Kesavananda Bharati v. State of Kerala (1973 — 13-Judge Bench):**\n   • Overruled Berubari Union.\n   • Held: The Preamble is an integral part of the Constitution. It was voted upon by the Assembly with the motion: *"That the Preamble stand part of the Constitution."*\n   • Held: It can be amended under Article 368, but elements forming the **Basic Structure** (e.g. secularism, democracy, sovereignty) cannot be abrogated.\n\n3. **LIC of India v. Consumer Education and Research Centre (1995):**\n   • Supreme Court once again reiterated that the Preamble is an integral part of the Constitution.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Summary of Legal Effect & Enforceability',
        body: '| Feature | Legal Position |\n| :--- | :--- |\n| **Is it part of the Constitution?** | **YES** (since Kesavananda Bharati, 1973) |\n| **Can it be amended under Art 368?** | **YES** (subject to Basic Structure doctrine) |\n| **How many times amended?** | **ONCE** (42nd Amendment 1976: added *Socialist*, *Secular*, *Integrity*) |\n| **Is it enforceable in Court (Justiciable)?** | **NO** (non-justiciable) |\n| **Is it a source of legislative power?** | **NO** (cannot confer independent power) |\n| **Is it a limitation on legislative power?** | **NO** (cannot invalidate a statute on its own) |\n| **Interpretative Value** | Used to interpret ambiguous Articles & determine Basic Structure |',
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
        syllabusSection: 'GS Paper II: Preamble Amendability, Justiciability, and Landmark Judgments.',
        examNotes: 'UPSC Prelims 2020 asked: "The Preamble to the Constitution of India is: (a) a part of the Constitution but has no legal effect independently of other parts."',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Preamble Cases — Berubari vs Kesavananda and 42nd Amendment.',
        examNotes: 'Frequent 50-word question on Kesavananda Bharati ruling on Preamble.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Precedents.',
        examNotes: 'Basic Structure implications.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Berubari 1960 (NOT part) -> Kesavananda 1973 (IS part & amendable under Art 368 without destroying Basic Structure). Non-justiciable. 42nd Amendment 1976 = Socialist, Secular, Integrity.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Status:** Integral part of Constitution (Kesavananda Bharati, 1973; LIC 1995).\n• **Amendable:** Yes, under Article 368.\n• **Enforceability:** Non-justiciable; has no independent legal effect apart from other provisions.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Preamble serves as the constitutional compass: while non-justiciable in isolation, judges routinely read the Preamble alongside Part III (Fundamental Rights) and Part IV (DPSPs) to construct modern socio-economic rights (e.g. Maneka Gandhi, Puttaswamy).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T3-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'What is the exact legal status of the Preamble to the Constitution of India?',
        options: {
          A: 'It is not a part of the Constitution and has no legal effect.',
          B: 'It is a part of the Constitution and has the same legal effect as any other part.',
          C: 'It is a part of the Constitution but has no legal effect independently of other parts.',
          D: 'It is not a part of the Constitution but has independent legal effect.',
        },
        correctAnswer: 'C',
        explanation: 'As settled in Kesavananda Bharati (1973) and reaffirmed by the Supreme Court, the Preamble is an integral part of the Constitution, but being non-justiciable, it has no legal effect independently of other parts.',
        trapExplanation: 'Option B is incorrect because substantive Articles have direct legal enforceability, whereas the Preamble is non-justiciable on its own.',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 4: SCHEDULES OF THE INDIAN CONSTITUTION (8 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T4-01',
    slug: 'schedules-overview-evolution-and-structural-matrix',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: 'Overview, Evolution & Structural Matrix of the 12 Schedules',
    shortDefinition: 'The functional role of Schedules as detailed constitutional appendices, their expansion from 8 in 1949 to 12 today through four constitutional amendments (1st, 52nd, 73rd, 74th), and their direct constitutional anchorage in specific Articles.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T4-01'],
    claims: [
      {
        id: 'CLM-T4-01.1',
        statement: 'The Indian Constitution originally contained 8 Schedules at the time of adoption in 1949, which expanded to 12 Schedules through four distinct constitutional amendments.',
        claimType: 'CONSTITUTIONAL_CHRONOLOGY_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 34 (Printed p. 28)',
      },
      {
        id: 'CLM-T4-01.2',
        statement: 'The four additional Schedules were added as follows: 9th Schedule by the 1st Amendment (1951), 10th Schedule by the 52nd Amendment (1985), 11th Schedule by the 73rd Amendment (1992), and 12th Schedule by the 74th Amendment (1992).',
        claimType: 'AMENDMENT_CHRONOLOGY_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 34 (Printed p. 28)',
      },
      {
        id: 'CLM-T4-01.3',
        statement: 'Every Schedule in the Indian Constitution is anchored in and derives its legal authority directly from specific substantive Articles of the Constitution.',
        claimType: 'CONSTITUTIONAL_STRUCTURE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 40 (Printed p. 34)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Why the Constitution Uses Schedules',
        body: 'A **Schedule** is an appendix attached to the Constitution containing elaborate lists, operational rules, salary tables, and administrative details that would otherwise clutter the main text of the substantive Articles.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Complete 12 Schedules Master Map (TEARS OF OLD PM)',
        body: 'A famous mnemonic to remember the 12 Schedules in exact order:\n\n• **T — Territory:** 1st Schedule (Names of States & UTs with boundaries — Arts 1 & 4)\n• **E — Emoluments:** 2nd Schedule (Salaries of President, Governors, Judges, CAG — Arts 59, 65, 75, 97, 125, 148, 158, 164, 186, 221)\n• **A — Affirmations / Oaths:** 3rd Schedule (Oaths for Ministers, MPs, Judges, CAG — Arts 75, 84, 99, 124, 146, 173, 188, 219)\n• **R — Rajya Sabha:** 4th Schedule (Allocation of Rajya Sabha seats to States/UTs — Arts 4(1) & 80(2))\n• **S — Scheduled Areas:** 5th Schedule (Administration of Scheduled Areas/Tribes in 10 states — Art 244(1))\n• **O — Other Tribal Areas:** 6th Schedule (Tribal Areas in Assam, Meghalaya, Tripura, Mizoram — Arts 244(2) & 275(1))\n• **F — Federal Lists:** 7th Schedule (Union, State, Concurrent Lists — Art 246)\n• **O — Official Languages:** 8th Schedule (22 recognized languages — Arts 344(1) & 351)\n• **L — Land Reforms:** 9th Schedule (Validation of certain Acts & Regulations — Art 31B, 1st Amendment 1951)\n• **D — Defection:** 10th Schedule (Anti-Defection provisions — Arts 102(2) & 191(2), 52nd Amendment 1985)\n• **P — Panchayats:** 11th Schedule (29 functional items — Art 243G, 73rd Amendment 1992)\n• **M — Municipalities:** 12th Schedule (18 functional items — Art 243W, 74th Amendment 1992)',
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
        syllabusSection: 'GS Paper II: Schedules of the Constitution.',
        examNotes: 'Matching questions on Schedules and their substantive articles appear regularly in Prelims.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: All 12 Schedules — Numerical and Substantive Match.',
        examNotes: 'Direct 20-word matching questions on Schedule numbers and subjects.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Schedules Overview.',
        examNotes: 'Structural overview.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Original 8 Schedules -> 12 today. Added: 9th (1st Amend 1951), 10th (52nd Amend 1985), 11th (73rd Amend 1992), 12th (74th Amend 1992). Mnemonic: TEARS OF OLD PM.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **1-4:** Territory, Emoluments, Oaths, Rajya Sabha.\n• **5-6:** Scheduled Areas (5th) vs North-East Tribal Areas AMTM (6th).\n• **7-8:** 3 Legislative Lists (7th) vs 22 Languages (8th).\n• **9-12:** Land Reforms (9th), Anti-Defection (10th), Panchayats (11th), Municipalities (12th).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Schedules are not independent constitutional codes; they are operational annexures referenced by substantive articles. Amending a schedule requires an amendment under Article 368 unless the Constitution explicitly provides otherwise (e.g. Schedule 1, 5, 6 changes by simple majority).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'How many Schedules were originally present in the Constitution of India at the time of its adoption in 1949?',
        options: {
          A: '8',
          B: '10',
          C: '12',
          D: '14',
        },
        correctAnswer: 'A',
        explanation: 'The Constitution originally had 8 Schedules in 1949. Four more (9th, 10th, 11th, and 12th) were added by subsequent constitutional amendments.',
        trapExplanation: '12 is the current number of schedules, not the original number.',
        difficulty: 'EASY',
        isPYQ: false,
      },
    ],
  },
  {
    id: 'CON-T4-02',
    slug: 'schedules-1-to-4-territory-emoluments-oaths-rajya-sabha',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: 'Schedules 1 to 4: Territory, Emoluments, Oaths and Rajya Sabha Seat Allocation',
    shortDefinition: 'Detailed examination of the first four schedules: 1st Schedule (28 States & 8 UTs), 2nd Schedule (dignitary emoluments; Ministers excluded), 3rd Schedule (forms of oaths; President, VP, Governors excluded), and 4th Schedule (population-weighted Rajya Sabha seats).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T4-01'],
    claims: [
      {
        id: 'CLM-T4-02.1',
        statement: 'The 1st Schedule lists the names of States (28) and Union Territories (8) along with their territorial jurisdictions under Articles 1 and 4.',
        claimType: 'CONSTITUTIONAL_TEXT_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 34 (Printed p. 28)',
      },
      {
        id: 'CLM-T4-02.2',
        statement: 'The 2nd Schedule specifies salaries and emoluments of the President, Governors, Speakers/Deputy Speakers, Judges of SC/HC, and the CAG; the Prime Minister and Council of Ministers are NOT mentioned in the 2nd Schedule.',
        claimType: 'CONSTITUTIONAL_EXCLUSION_TRAP',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 34 (Printed p. 28)',
      },
      {
        id: 'CLM-T4-02.3',
        statement: 'The 3rd Schedule prescribes forms of oaths/affirmations for Union/State Ministers, MPs, MLAs/MLCs, SC/HC Judges, and CAG; oaths of the President (Art 60), Vice-President (Art 69), and Governor (Art 159) are contained in their respective substantive Articles and NOT in the 3rd Schedule.',
        claimType: 'CONSTITUTIONAL_EXCLUSION_TRAP',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 34 (Printed p. 28)',
      },
      {
        id: 'CLM-T4-02.4',
        statement: 'The 4th Schedule allocates seats in the Rajya Sabha to States and UTs on the basis of population (Articles 4(1) & 80(2)), with Uttar Pradesh holding the highest (31 seats) and Rajasthan holding 10 seats.',
        claimType: 'CONSTITUTIONAL_ALLOCATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 34 (Printed p. 28)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Operational Bedrock of Constitutional Dignitaries',
        body: 'The first four schedules define **where** the Indian state operates (territories), **how much** constitutional heads are paid (emoluments), **what allegiance** public officials swear (oaths), and **how** states are represented in the federal Upper House (Rajya Sabha).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Detailed Breakdown & High-Yield Examiner Traps',
        body: '### 1. First Schedule (Articles 1 & 4)\n• Contains names of 28 States and 8 Union Territories and their territorial extents.\n• Any creation of a new state or alteration of boundary (Art 3) requires amendment of the First Schedule (by simple majority under Art 4).\n\n### 2. Second Schedule (Emoluments & Privileges)\n• Dignitaries included: President, Governors, Lok Sabha Speaker/Deputy Speaker, Rajya Sabha Chairman/Deputy Chairman, State Assembly Speakers/Deputy Speakers, State Council Chairmen/Deputy Chairmen, Supreme Court Judges, High Court Judges, Comptroller & Auditor General (CAG).\n• **EXAM TRAP:** Prime Minister, Union Ministers, Chief Ministers, and State Ministers are **NOT** listed in the 2nd Schedule (their salaries are determined by Parliament under ordinary statutes).\n\n### 3. Third Schedule (Forms of Oaths & Affirmations)\n• Officials included: Union Ministers, Parliamentary Election Candidates, MPs, Supreme Court Judges, CAG, State Ministers, State Election Candidates, MLAs/MLCs, High Court Judges.\n• **CRITICAL EXAM TRAP:** The oaths for **President (Art 60)**, **Vice-President (Art 69)**, and **Governor (Art 159)** are **NOT in the Third Schedule**. They are written directly in their respective substantive Articles!\n\n### 4. Fourth Schedule (Rajya Sabha Seat Allocation — Arts 4 & 80)\n• Unlike the USA (where every state gets equal representation of 2 Senators regardless of size), India allocates Rajya Sabha seats based on population.\n• UP = 31 seats, Maharashtra = 19, West Bengal = 16, Bihar = 16, Tamil Nadu = 18, **Rajasthan = 10 seats**.\n• UTs with representation: Delhi (3), Puducherry (1), Jammu & Kashmir (4).',
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
        syllabusSection: 'GS Paper II: Schedules 1 to 4 — Oaths and Seat Allocation.',
        examNotes: 'Classic UPSC Prelims trap: Asking whether the President’s oath is in the 3rd Schedule (Answer: No, it is in Article 60).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: 4th Schedule Rajasthan Seats (10 seats) & Oaths.',
        examNotes: 'Direct question on Rajasthan’s Rajya Sabha quota (10 seats) and 2nd/3rd schedule exclusions.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Framework.',
        examNotes: 'Basic legal awareness.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '1st = 28 States + 8 UTs. 2nd = Salaries (PM/Ministers EXCLUDED). 3rd = Oaths (President [60], VP [69], Governor [159] EXCLUDED). 4th = RS Seats (Rajasthan = 10, UP = 31).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **2nd Schedule:** Salaries of President, Governors, Presiding Officers, Judges, CAG. (Ministers not included).\n• **3rd Schedule:** 8 categories of oaths. (President Art 60, VP Art 69, Governor Art 159 are in Articles).\n• **4th Schedule:** Population-weighted Rajya Sabha allocation.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The exclusion of the President, Vice-President, and Governor from the 3rd Schedule is intentional: their oaths contain substantive constitutional obligations (e.g. the President swears to "preserve, protect and defend the Constitution") that define their constitutional office rather than a generic oath of secrecy/office.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'The form of oath or affirmation for which of the following constitutional dignitaries is NOT contained in the Third Schedule of the Indian Constitution?',
        options: {
          A: 'Judges of the Supreme Court',
          B: 'Comptroller and Auditor General of India',
          C: 'President of India',
          D: 'Union Ministers',
        },
        correctAnswer: 'C',
        explanation: 'The form of oath for the President of India is specifically provided under Article 60 of the Constitution, not in the Third Schedule.',
        trapExplanation: 'SC Judges, CAG, and Union Ministers have their oath forms explicitly in the 3rd Schedule.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T4-03',
    slug: 'schedules-5-and-6-scheduled-and-tribal-areas-administration',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: 'Schedules 5 and 6: Administration of Scheduled & Tribal Areas',
    shortDefinition: 'Constitutional protection of indigenous tribal autonomy: 5th Schedule administration in 10 states via Tribes Advisory Councils and Governor regulations versus 6th Schedule Autonomous District Councils in the four North-Eastern states (Assam, Meghalaya, Tripura, Mizoram — AMTM).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T4-02'],
    claims: [
      {
        id: 'CLM-T4-03.1',
        statement: 'The 5th Schedule deals with the administration and control of Scheduled Areas and Scheduled Tribes in 10 states (excluding the four 6th Schedule states): Andhra Pradesh, Telangana, Jharkhand, Chhattisgarh, Madhya Pradesh, Maharashtra, Gujarat, Odisha, Rajasthan, and Himachal Pradesh (Article 244(1)).',
        claimType: 'CONSTITUTIONAL_JURISDICTION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 35 (Printed p. 29)',
      },
      {
        id: 'CLM-T4-03.2',
        statement: 'Under the 5th Schedule, each state with Scheduled Areas must establish a Tribes Advisory Council (TAC) consisting of not more than 20 members (of which three-fourths must be ST MLAs in the State Assembly), and the Governor is empowered to direct that any Act of Parliament or State Legislature shall not apply or apply with modifications.',
        claimType: 'GOVERNANCE_MECHANISM_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 35 (Printed p. 29)',
      },
      {
        id: 'CLM-T4-03.3',
        statement: 'The 6th Schedule governs tribal administration in four North-Eastern states—Assam, Meghalaya, Tripura, and Mizoram (AMTM)—through Autonomous District Councils (ADCs) and Regional Councils possessing legislative, judicial, and financial powers (Articles 244(2) & 275(1)).',
        claimType: 'AUTONOMY_FRAMEWORK_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 35 (Printed p. 29)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Asymmetric Federalism for Tribal Governance',
        body: 'The Indian Constitution creates two distinct constitutional mechanisms for tribal areas under the core principle: **"Different constitutional arrangements were designed for different tribal-administration contexts."**',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'INTUITION',
        title: 'Why the Arrangements Differ: Institutional Logic Behind 5th vs 6th Schedules',
        body: 'To understand why the 5th and 6th Schedules operate differently, consider the distinct socio-administrative realities they address:\n\n1. **Fifth Schedule Context (10 Mainland States — Regulated Protection):**\n   • *Context:* Mainland tribal communities (e.g. Bhils, Gonds, Santhals) live interspersed with non-tribal populations within standard state administrative boundaries.\n   • *Institutional Strategy:* They do not require a separate mini-legislature. Instead, the Constitution uses **protective oversight**: the Governor exercises special regulatory powers (backed by an advisory **Tribes Advisory Council**) to prohibit land alienation, regulate moneylending, and filter out disruptive state/central laws.\n\n2. **Sixth Schedule Context (4 North-Eastern States: AMTM — Autonomous Self-Governance):**\n   • *Context:* North-Eastern hill tribes (e.g. Khasi, Garo, Jaintia, Mizo, Bodo) historically formed compact, contiguous ethnic communities with unbroken traditional self-governing institutions and distinct customary legal codes.\n   • *Institutional Strategy:* They are granted **statutory regional self-rule**: **Autonomous District Councils (ADCs)** act as miniature local legislatures endowed with direct law-making, customary court administration, and local revenue-raising powers ("states within a state").',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: '5th Schedule vs 6th Schedule: Deep Comparative Matrix',
        body: '| Parameter | Fifth Schedule (Article 244(1)) | Sixth Schedule (Articles 244(2) & 275(1)) |\n| :--- | :--- | :--- |\n| **Geographical Scope** | **10 Mainland States:** AP, Telangana, Jharkhand, Chhattisgarh, MP, Maharashtra, Gujarat, Odisha, Rajasthan, HP | **4 North-Eastern States (AMTM):** Assam, Meghalaya, Tripura, Mizoram |\n| **Institutional Apex** | **Tribes Advisory Council (TAC):** Up to 20 members (3/4th ST MLAs). Advisory body to the Governor. | **Autonomous District Councils (ADCs):** Up to 30 members (26 elected by adult franchise + 4 nominated by Governor; 5-year term). |\n| **Legislative Power** | TAC has **no law-making power**. Governor issues regulations prohibiting transfer of land and moneylending. | ADCs possess **direct legislative power** to make laws on land, forests, canal water, shifting cultivation, village administration, inheritance, marriage, social customs (assent of Governor required). |\n| **Judicial Power** | Standard judicial hierarchy applies. | ADCs can constitute village courts and councils to try suits between scheduled tribes. |\n| **Application of Central/State Laws** | Governor directs if an Act of Parliament/State Legislature applies or applies with modifications. | In Assam, Governor directs; in Meghalaya, Tripura, Mizoram, the President directs for central laws and Governor for state laws. |',
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
        syllabusSection: 'GS Paper II: 5th & 6th Schedules, Tribal Autonomy, and ADC Powers.',
        examNotes: 'Extremely high frequency in UPSC Prelims (2015, 2018, 2019, 2022) testing 5th schedule states, TAC composition, and AMTM states.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Scheduled Areas in Rajasthan (TSP Area & 5th Schedule).',
        examNotes: 'High yield for Rajasthan TSP districts (Banswara, Dungarpur, Pratapgarh) under 5th Schedule and TAC role.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Tribal Land Protections & Lending Regulations.',
        examNotes: '5th Schedule land alienation laws prohibit mortgaging tribal land to non-tribals.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '5th Schedule = 10 mainland states (incl. Rajasthan), TAC (max 20, 3/4th ST MLAs), Governor regulations. 6th Schedule = AMTM (Assam, Meghalaya, Tripura, Mizoram), ADCs (30 members: 26 elected + 4 nominated) with law-making powers.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **5th Schedule (10 states):** AP, TS, JH, CG, MP, MH, GJ, OD, RJ, HP. Governor has wide power to adapt/exclude laws.\n• **6th Schedule (AMTM):** Assam, Meghalaya, Tripura, Mizoram. Autonomous District Councils have legislative + judicial authority.\n• **TAC:** Max 20 members (3/4th ST MLAs).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The 6th Schedule represents "states within a state" created under the Bordoloi Committee recommendations (1949), granting self-rule to distinct indigenous communities without disrupting national integrity.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'The provisions of the Sixth Schedule of the Indian Constitution apply to the tribal areas of which of the following groups of states?',
        options: {
          A: 'Assam, Meghalaya, Tripura, and Mizoram',
          B: 'Manipur, Meghalaya, Tripura, and Nagaland',
          C: 'Arunachal Pradesh, Assam, Tripura, and Manipur',
          D: 'Assam, Nagaland, Meghalaya, and Mizoram',
        },
        correctAnswer: 'A',
        explanation: 'The Sixth Schedule applies exclusively to the 4 North-Eastern states of Assam, Meghalaya, Tripura, and Mizoram (mnemonic: AMTM).',
        trapExplanation: 'Manipur and Nagaland are NOT covered under the 6th Schedule (Nagaland is covered under special Article 371A).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T4-04',
    slug: '7th-schedule-division-of-powers-lists-and-residuary-power',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: '7th Schedule: Legislative Lists, Division of Powers & Residuary Powers',
    shortDefinition: 'The constitutional distribution of legislative competencies under Article 246 across Union List (100 subjects), State List (61 subjects), and Concurrent List (52 subjects), the historic 42nd Amendment shift of five subjects, and Canadian-style Residuary Powers under Article 248.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T4-03'],
    claims: [
      {
        id: 'CLM-T4-04.1',
        statement: 'Under Article 246, the 7th Schedule divides legislative powers into three lists: Union List (List I: originally 97, currently 100 subjects), State List (List II: originally 66, currently 61 subjects), and Concurrent List (List III: originally 47, currently 52 subjects).',
        claimType: 'CONSTITUTIONAL_DIVISION_OF_POWERS',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 36 (Printed p. 30)',
      },
      {
        id: 'CLM-T4-04.2',
        statement: 'The 42nd Constitutional Amendment Act 1976 transferred five crucial subjects from the State List to the Concurrent List: (1) Education, (2) Forests, (3) Weights and Measures, (4) Protection of wild animals and birds, and (5) Administration of justice, constitution and organization of all courts except the Supreme Court and High Courts.',
        claimType: 'CONSTITUTIONAL_AMENDMENT_TRANSFER',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 36 (Printed p. 30)',
      },
      {
        id: 'CLM-T4-04.3',
        statement: 'Residuary powers of legislation (matters not enumerated in any of the three lists) are exclusively vested in the Union Parliament under Article 248, following the Canadian constitutional model.',
        claimType: 'RESIDUARY_POWER_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 36 (Printed p. 30)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Federal Division of Competencies',
        body: 'The **Seventh Schedule** embodies the federal principle by dividing governance into three distinct spheres: national concerns exclusively for Parliament (**Union List**), local and regional matters for State Legislatures (**State List**), and matters requiring national uniformity with local adaptation (**Concurrent List**).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 3 Lists & 42nd Amendment Reallocation',
        body: '### 1. List I — Union List (100 Subjects)\n• Defence, Armed Forces, Foreign Affairs, Treaties, War and Peace, Citizenship, Railways, Highways, Shipping, Airways, Posts & Telegraphs, Currency, Banking, Insurance, Atomic Energy, Inter-State Trade, Census, Income Tax (other than agricultural income), Corporation Tax.\n\n### 2. List II — State List (61 Subjects)\n• Public Order, Police, Prisons, Public Health & Sanitation, Hospitals, Agriculture, Land, Fisheries, Local Government, Markets & Fairs, State Public Services, Tolls, Land Revenue, Tax on agricultural income, Betting and Gambling.\n\n### 3. List III — Concurrent List (52 Subjects)\n• Criminal Law, Criminal Procedure, Marriage & Divorce, Transfer of Property (other than agricultural land), Contracts, Civil Procedure, Trade Unions, Social Security, Price Control, Stamp Duties, Electricity.\n\n### 4. The 5 Subjects Transferred by 42nd Amendment (1976)\n1. **Education**\n2. **Forests**\n3. **Weights and Measures**\n4. **Protection of Wild Animals and Birds**\n5. **Administration of Justice; Constitution and organization of all courts except Supreme Court and High Courts**',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Federal Precedence & Residuary Powers',
        body: '• **Federal Supremacy Rule (Art 246 & 254):** If there is a conflict between Union List and State/Concurrent List, the **Union List prevails**. In the Concurrent List, a Central law prevails over a State law, unless the State law received Presidential assent under Article 254(2).\n• **Residuary Powers (Art 248):** Any unlisted subject (e.g. Cyber Law, Space exploration, AI regulation) belongs **exclusively to Parliament** (unlike USA/Australia where residuary powers belong to States).',
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
        syllabusSection: 'GS Paper II: Seventh Schedule, Federal Issues, and Concurrent List Dynamics.',
        examNotes: 'UPSC Prelims repeatedly tests subject classification (e.g. Police vs Cyber Law; Agriculture vs Banking; 42nd amendment transferred subjects).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Seventh Schedule and Centre-State Division of Subjects.',
        examNotes: 'Very high yield for 50-word questions on subjects transferred by 42nd Amendment.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Banking Regulation Act & Entry 45 of Union List.',
        examNotes: 'Banking is Entry 45 of Union List; RBI and commercial banks operate under exclusive Union jurisdiction.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Union List = 100 (Banking, Defence, Foreign). State List = 61 (Police, Public Order, Health, Agri). Concurrent = 52 (Criminal, Marriage, + 5 from 42nd Amend: Education, Forests, Weights, Wildlife, Subordinate Courts). Residuary = Parliament (Art 248).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 246:** Union (List I - 100), State (List II - 61), Concurrent (List III - 52).\n• **42nd Amendment (1976):** Shifted Education, Forests, Weights/Measures, Wildlife, Subordinate Courts from State to Concurrent List.\n• **Article 248:** Residuary powers to Parliament (Canadian model).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The 7th Schedule establishes exhaustive subject-matter division to minimize intergovernmental litigation. The doctrine of Pith and Substance is applied by the Supreme Court when examining whether a statute legitimately falls within a legislature’s competent list.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following subjects was transferred from the State List to the Concurrent List by the 42nd Constitutional Amendment Act, 1976?',
        options: {
          A: 'Public Health and Sanitation',
          B: 'Education',
          C: 'Police',
          D: 'Agriculture',
        },
        correctAnswer: 'B',
        explanation: 'Education was transferred from the State List (Entry 11) to the Concurrent List (Entry 25) by the 42nd Constitutional Amendment Act, 1976.',
        trapExplanation: 'Public Health, Police, and Agriculture remain in the State List.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T4-05',
    slug: '8th-schedule-22-official-languages-classical-languages',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: '8th Schedule: 22 Official Languages, Classical Languages & Amendments',
    shortDefinition: 'The linguistic pluralism of the 8th Schedule: starting from 14 languages in 1949 to 22 languages today across three constitutional amendments (21st, 71st, 92nd), language exclusions (English and Rajasthani), and the 11 Classical Languages recognized by the Ministry of Culture.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T4-04'],
    claims: [
      {
        id: 'CLM-T4-05.1',
        statement: 'The 8th Schedule originally recognized 14 languages in 1949, which increased to 22 languages through three constitutional amendments: 21st Amendment 1967 (Sindhi), 71st Amendment 1992 (Konkani, Manipuri, Nepali), and 92nd Amendment 2003 (Bodo, Dogri, Maithili, Santhali).',
        claimType: 'CONSTITUTIONAL_CHRONOLOGY_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 37 (Printed p. 31)',
      },
      {
        id: 'CLM-T4-05.2',
        statement: 'English and Rajasthani are NOT included in the 8th Schedule of the Indian Constitution.',
        claimType: 'CONSTITUTIONAL_EXCLUSION_TRAP',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 37 (Printed p. 31)',
      },
      {
        id: 'CLM-T4-05.3',
        statement: 'The Government of India (Ministry of Culture) has recognized 11 Classical Languages: Tamil (2004), Sanskrit (2005), Kannada (2008), Telugu (2008), Malayalam (2013), Odia (2014), and five languages added in 2024 (Assamese, Bengali, Marathi, Pali, and Prakrit).',
        claimType: 'OFFICIAL_CULTURAL_POLICY_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 38 (Printed p. 32)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Constitutional Recognition of India’s Linguistic Wealth',
        body: 'The **Eighth Schedule** (Articles 344(1) and 351) lists the official languages recognized by the Constitution to promote Hindi by drawing upon their forms and vocabulary, and to ensure representation on the Official Languages Commission.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 22 Languages & 3 Constitutional Amendments',
        body: '### Original 14 Languages (1949):\nAssamese, Bengali, Gujarati, Hindi, Kannada, Kashmiri, Malayalam, Marathi, Odia, Punjabi, Sanskrit, Tamil, Telugu, Urdu.\n\n### 8 Languages Added by Amendments:\n1. **21st Constitutional Amendment Act, 1967:** Added **Sindhi** (15th language).\n2. **71st Constitutional Amendment Act, 1992 (Mnemonic: KMN):** Added **Konkani, Manipuri, Nepali** (16th, 17th, 18th languages).\n3. **92nd Constitutional Amendment Act, 2003 (Mnemonic: BDM-S):** Added **Bodo, Dogri, Maithili, Santhali** (19th, 20th, 21st, 22nd languages).\n• *96th Amendment 2011:* Renamed "Oriya" to "Odia".\n\n### 11 Classical Languages of India:\n1. **Tamil** (2004 — First)\n2. **Sanskrit** (2005)\n3. **Kannada** (2008)\n4. **Telugu** (2008)\n5. **Malayalam** (2013)\n6. **Odia** (2014)\n7. **Assamese** (2024)\n8. **Bengali** (2024)\n9. **Marathi** (2024)\n10. **Pali** (2024)\n11. **Prakrit** (2024)',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Crucial Misconception Shield: Classical Language Status ≠ Eighth Schedule Status',
        body: '> **CLASSICAL LANGUAGE STATUS ≠ EIGHTH SCHEDULE STATUS**\n\nLearners frequently confuse these two classifications because several major languages appear in both lists. However, they represent completely different legal and institutional frameworks:\n\n1. **Eighth Schedule Status (Constitutional Schedule):**\n   • *Authority:* Articles 344(1) and 351 of the Constitution.\n   • *Mechanism:* Can only be added or modified through a **Constitutional Amendment Act passed by Parliament**.\n   • *Purpose:* Official language development, representation on the Official Languages Commission, and linguistic enrichment of Hindi.\n   • *Total:* **22 Languages**.\n\n2. **Classical Language Status (Executive Classification):**\n   • *Authority:* Executive notification by the **Ministry of Culture, Government of India** (based on criteria set by an expert committee of the Sahitya Akademi).\n   • *Mechanism:* Purely an **executive decision**; does *not* require an Article 368 constitutional amendment.\n   • *Purpose:* Promotion of ancient scholarship, national awards for eminent scholars, and establishing dedicated university research chairs.\n   • *Criteria:* High antiquity of early texts/recorded history (1,500–2,000 years), valuable ancient literature considered heritage by generations, and original literary tradition not borrowed from another speech community.\n   • *Total:* **11 Languages** (as of October 2024).\n\n3. **The Non-Identity Rule in Practice:**\n   • *In Classical list but NOT in 8th Schedule:* **Pali** and **Prakrit** are recognized Classical Languages (2024) but are **NOT** Eighth Schedule languages.\n   • *In 8th Schedule but NOT Classical:* Languages such as Hindi, Punjabi, Gujarati, Sindhi, Nepali, Konkani, Dogri, and Maithili are in the Eighth Schedule but do not possess Classical Language status.',
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
        syllabusSection: 'GS Paper II & Prelims: Eighth Schedule and Classical Languages criteria.',
        examNotes: 'UPSC Prelims frequently asks which languages are in the 8th Schedule (English is NOT) and which have Classical status.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: 8th Schedule and Demand for Rajasthani Language Inclusion.',
        examNotes: 'High-frequency 20-word question on 92nd Amendment languages (BDMS) and 2024 classical languages.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Official Language Policy in Public Sector Banks.',
        examNotes: 'Official language policy compliance under Art 343 and 8th Schedule.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Original 14 -> 22 languages today. 21st Amend (Sindhi), 71st Amend (Konkani, Manipuri, Nepali - KMN), 92nd Amend (Bodo, Dogri, Maithili, Santhali - BDMS). English & Rajasthani NOT in 8th Schedule. 11 Classical Languages (incl. 2024 additions).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **22 Official Languages:** Articles 344(1) & 351.\n• **Amendments:** 21st (1967), 71st (1992), 92nd (2003).\n• **11 Classical Languages:** Tamil, Sanskrit, Kannada, Telugu, Malayalam, Odia, Assamese, Bengali, Marathi, Pali, Prakrit.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 351 directs the Union to promote the spread of the Hindi language, drawing primarily on Sanskrit and secondarily on the languages of India specified in the Eighth Schedule for its vocabulary.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-05-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following languages is NOT included in the Eighth Schedule of the Constitution of India?',
        options: {
          A: 'Sanskrit',
          B: 'Sindhi',
          C: 'English',
          D: 'Nepali',
        },
        correctAnswer: 'C',
        explanation: 'English is not recognized in the Eighth Schedule of the Indian Constitution, although it is an official language of the Union and the language of the Supreme Court and High Courts.',
        trapExplanation: 'Sindhi was added by 21st Amendment, Nepali by 71st Amendment, and Sanskrit was in the original 14.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2011,
        pyqPaper: 'UPSC Prelims GS',
      },
    ],
  },
  {
    id: 'CON-T4-06',
    slug: '9th-schedule-land-reforms-protective-umbrella-ir-coelho',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: '9th Schedule: Land Reforms, Protective Umbrella & The I.R. Coelho Doctrine',
    shortDefinition: 'The creation of the 9th Schedule via the 1st Amendment (1951) and Article 31B to protect agrarian land reforms and Zamindari abolition from fundamental rights judicial review, its growth to 284 laws, and the landmark 9-judge I.R. Coelho ruling (2007) subjecting post-1973 laws to Basic Structure scrutiny.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T4-05'],
    claims: [
      {
        id: 'CLM-T4-06.1',
        statement: 'The 9th Schedule was added to the Constitution by the 1st Constitutional Amendment Act, 1951, alongside Article 31B, to insulate land reform and Zamindari abolition statutes from judicial review on grounds of violating Fundamental Rights (Articles 14, 19, 31).',
        claimType: 'CONSTITUTIONAL_AMENDMENT_PURPOSE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 38 (Printed p. 32)',
      },
      {
        id: 'CLM-T4-06.2',
        statement: 'The number of laws protected under the 9th Schedule grew from an initial 13 Acts to 284 Acts over successive constitutional amendments.',
        claimType: 'LEGISLATIVE_STATISTICS_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 38 (Printed p. 32)',
      },
      {
        id: 'CLM-T4-06.3',
        statement: 'In the landmark I.R. Coelho v. State of Tamil Nadu case (2007), a 9-judge Constitution Bench held that the 9th Schedule does not enjoy blanket immunity; any law inserted into the 9th Schedule after April 24, 1973 (the date of the Kesavananda Bharati verdict) is open to judicial review if it violates the Fundamental Rights forming part of the Basic Structure (Articles 14, 19, 21).',
        claimType: 'LANDMARK_JUDICIAL_HOLDING',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 38 (Printed p. 32)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Constitutional Vault & Its Judicial Breakthrough',
        body: 'The **Ninth Schedule** was conceived as an impregnable constitutional vault to shield socio-economic land reform laws from judicial invalidation. In 2007, the Supreme Court established the **I.R. Coelho Doctrine**, holding that no statutory vault can override the Basic Structure of the Constitution.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The I.R. Coelho (2007) 9-Judge Benchmark Principles',
        body: '1. **Article 31B & 9th Schedule:** Acts included in the 9th Schedule cannot be deemed void on the ground of inconsistency with Fundamental Rights.\n2. **The Cut-Off Date (April 24, 1973):** Laws inserted on or before April 24, 1973 (Kesavananda Bharati judgment date) remain valid and immune from challenge.\n3. **Post-1973 Scrutiny:** Any law inserted after April 24, 1973 can be challenged if it damages the Basic Structure of the Constitution.\n4. **The "Rights Test" vs "Essence of Rights Test":** Even if an amendment inserting a law into the 9th Schedule is valid, if the substantive law destroys the essence of fundamental rights under **Articles 14, 19, or 21**, it will be struck down.\n5. **Judicial Review as Basic Structure:** The power of judicial review is an integral part of the basic structure and cannot be ousted by creating statutory immunity.',
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
        syllabusSection: 'GS Paper II: Ninth Schedule, Article 31B, and I.R. Coelho Case.',
        examNotes: 'UPSC Prelims 2018 & 2019 asked: "The Ninth Schedule was introduced in the Constitution of India during the prime ministership of: (Jawaharlal Nehru)" and judicial review limits.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Judicial Review, Basic Structure & I.R. Coelho Case.',
        examNotes: 'Frequent 50-word and 100-word questions on I.R. Coelho ruling and 9th schedule land reforms.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Property Laws and Land Ceiling Acts.',
        examNotes: 'Historical background of agrarian mortgage and land tenancy laws.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '9th Schedule = 1st Amendment 1951 + Art 31B (Nehru PM) for land reforms. 13 -> 284 Acts. I.R. Coelho (2007, 9 judges): Laws added after April 24, 1973 subject to judicial review for Basic Structure / Arts 14, 19, 21 violations.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Added:** 1st Amendment 1951 alongside Article 31B.\n• **Purpose:** Protect Zamindari abolition and agrarian land reforms.\n• **I.R. Coelho Case (2007):** Struck down blanket immunity; post-April 24, 1973 insertions open to judicial review.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The I.R. Coelho verdict closed the "black hole" loophole where governments could shield unconstitutional statutes (including reservation quotas exceeding 50% or civil liberty restrictions) by simply amending the Constitution to drop them into the 9th Schedule.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-06-01',
        type: 'CONCEPT_CHECK',
        stem: 'The Ninth Schedule was introduced in the Constitution of India during the prime ministership of:',
        options: {
          A: 'Jawaharlal Nehru',
          B: 'Lal Bahadur Shastri',
          C: 'Indira Gandhi',
          D: 'Morarji Desai',
        },
        correctAnswer: 'A',
        explanation: 'The Ninth Schedule was added by the First Constitutional Amendment Act, 1951, under the Prime Ministership of Jawaharlal Nehru.',
        trapExplanation: 'While Indira Gandhi added many laws to the 9th Schedule during the Emergency, it was introduced in 1951 by Nehru.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T4-07',
    slug: '10th-schedule-anti-defection-law-exceptions-judicial-evolution',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: '10th Schedule: Anti-Defection Law, Exceptions & Judicial Evolution',
    shortDefinition: 'The 10th Schedule (Articles 102(2) & 191(2)) added by 52nd Amendment (1985) and amended by 91st Amendment (2003): disqualification grounds, the British convention of the Whip, Kihoto Holohan (1992) judicial review, and Keisham Meghchandra (2020) time-limit doctrine.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T4-06', 'SEM-T4-07'],
    claims: [
      {
        id: 'CLM-T4-07.1',
        statement: 'The 10th Schedule (Anti-Defection Law) was added to the Constitution by the 52nd Constitutional Amendment Act, 1985 (Articles 102(2) and 191(2)), formally recognizing the term "Political Party" in the Constitution for the first time.',
        claimType: 'CONSTITUTIONAL_AMENDMENT_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 39 (Printed p. 33)',
      },
      {
        id: 'CLM-T4-07.2',
        statement: 'Disqualification under the 10th Schedule occurs if: (1) an elected member voluntarily gives up party membership, (2) votes/abstains contrary to party directions without 15-day condonation, (3) an independent member joins any political party, or (4) a nominated member joins a party after 6 months.',
        claimType: 'DISQUALIFICATION_RULES_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 39 (Printed p. 33)',
      },
      {
        id: 'CLM-T4-07.3',
        statement: 'The 91st Constitutional Amendment Act 2003 deleted the split exemption (which permitted 1/3rd members to split without disqualification), retaining only the merger exemption where at least two-thirds (2/3rd) of members agree to merge with another political party.',
        claimType: 'AMENDMENT_RESTRICTION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 39 (Printed p. 33)',
      },
      {
        id: 'CLM-T4-07.4',
        statement: 'In Kihoto Holohan v. Zachillhu (1992), the Supreme Court struck down Paragraph 7 (bar of court jurisdiction) and held that the Speaker/Chairman acts as a tribunal while deciding disqualification petitions, making the decision subject to judicial review.',
        claimType: 'LANDMARK_JUDICIAL_HOLDING',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 39 (Printed p. 33)',
      },
      {
        id: 'CLM-T4-07.5',
        statement: 'In Keisham Meghchandra Singh v. Speaker, Manipur Legislative Assembly (2020), the Supreme Court held that the Speaker cannot sit indefinitely on disqualification petitions and must decide within a reasonable period (ordinarily 3 months), failing which the Court may invoke Article 142 powers.',
        claimType: 'JUDICIAL_DOCTRINE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 40 (Printed p. 34)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Curbing the "Aaya Ram, Gaya Ram" Defection Culture',
        body: 'The **Tenth Schedule** was enacted in 1985 to eliminate opportunistic floor-crossing and political horse-trading by penalizing legislators who betray the electoral mandate of the political party on whose ticket they were elected.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 4 Grounds of Disqualification & 2/3rd Merger Exception',
        body: '### 1. The Four Disqualification Triggers:\n1. **Voluntarily Giving Up Membership:** Includes formal resignation or conduct showing abandonment of party discipline (e.g. anti-party public rallies).\n2. **Defying the Party Whip:** Voting or abstaining from voting in the House contrary to any direction issued by the political party, unless condoned by the party within **15 days**.\n3. **Independent Members:** An independent MLA/MP is disqualified if they **join any political party** after election.\n4. **Nominated Members:** A nominated member is disqualified if they join a political party **after the expiry of 6 months** from taking their seat.\n\n### 2. Exceptions (91st Amendment 2003):\n• **Merger Exemption:** Disqualification does not apply if a political party merges with another party and not less than **two-thirds (2/3rd)** of the legislative party members agree to the merger.\n• **Presiding Officer Exemption:** If a member is elected Speaker/Deputy Speaker/Chairman and resigns from their party for the duration of the office, they are not disqualified.\n\n### 3. High-Yield Convention Distinction: The "Whip"\n• The word **"Whip" is NOT mentioned in the Constitution**, any statute, or parliamentary procedural rules.\n• It is an inherited British parliamentary convention. The 10th Schedule refers only to "directions issued by a political party".',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Kihoto Holohan (1992) vs Keisham Meghchandra (2020)',
        body: '| Landmark Case | Judicial Bench | Core Holding |\n| :--- | :--- | :--- |\n| **Kihoto Holohan (1992)** | 5-Judge Constitution Bench | Struck down Paragraph 7; held Speaker functions as a statutory **tribunal**; decision is subject to judicial review on grounds of mala fides, perversity, or constitutional violation. |\n| **Keisham Meghchandra Singh (2020)** | 3-Judge Bench | Held Speaker **cannot indefinitely delay** disqualification petitions; must decide within a reasonable period (**3 months**). Suggested Parliament create an independent permanent tribunal headed by a retired judge to decide defection cases. |',
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
        syllabusSection: 'GS Paper II: Tenth Schedule, Anti-Defection Law, Speaker’s Discretion, and Reform Proposals.',
        examNotes: 'UPSC Prelims 2020 & 2022 and Mains GS II constantly test 10th schedule disqualification rules, 2/3rd merger, and Speaker’s judicial review.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Anti-Defection Law (10th Schedule) & Kihoto Holohan.',
        examNotes: 'High-frequency 50-word and 100-word questions on grounds of defection and 91st Amendment changes.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Legislative Integrity.',
        examNotes: 'General awareness of parliamentary governance.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '10th Schedule = 52nd Amend 1985 (Arts 102(2) & 191(2)). 4 triggers (voluntary give up, defy whip, independent joins party, nominated joins after 6 mos). 91st Amend 2003 = 2/3rd merger only (1/3rd split deleted). Speaker = Tribunal (Kihoto Holohan 1992). 3-month time limit (Keisham 2020).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Deciding Authority:** Speaker / Chairman of the House (subject to judicial review).\n• **Whip:** British convention, not in constitutional text.\n• **Nominated Member:** Can join within 6 months without disqualification; disqualified if joins after 6 months.\n• **Independent Member:** Disqualified immediately upon joining any party.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The anti-defection law balances representative loyalty to the electorate against inner-party dissent. While it successfully reduced retail bribery, the elimination of the split exemption under the 91st Amendment shifted the practice to wholesale defections (2/3rd mergers) or tactical resignations to bypass the law.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-07-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding the Anti-Defection Law (Tenth Schedule) in India:\n1. An independent member of a House becomes disqualified to remain on that seat if he/she joins any political party after the election.\n2. The law does not provide any time-frame within which the presiding officer has to decide a disqualification case.\nWhich of the statements given above is/are correct?',
        options: {
          A: '1 only',
          B: '2 only',
          C: 'Both 1 and 2',
          D: 'Neither 1 nor 2',
        },
        correctAnswer: 'C',
        explanation: 'Both statements are correct. Independent members are disqualified upon joining any political party. The Tenth Schedule does not explicitly specify a statutory time limit for the Speaker to decide (though the SC in Keisham Meghchandra 2020 prescribed a 3-month guideline).',
        trapExplanation: 'Nominated members have a 6-month window to join a party; independent members have zero window.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T4-08',
    slug: '11th-and-12th-schedules-local-governance-devolutions',
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution',
    topicOrder: 4,
    title: '11th and 12th Schedules: Panchayati Raj & Municipal Functional Devolutions',
    shortDefinition: 'The constitutionalization of local democratic decentralization via the 73rd and 74th Amendments (1992): 11th Schedule (29 functional subjects for Panchayats under Article 243G) and 12th Schedule (18 functional subjects for Municipalities under Article 243W).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T4-07'],
    claims: [
      {
        id: 'CLM-T4-08.1',
        statement: 'The 11th Schedule was added by the 73rd Constitutional Amendment Act, 1992 (effective April 24, 1993), specifying 29 functional items devolved to Panchayati Raj Institutions under Article 243G.',
        claimType: 'CONSTITUTIONAL_DEVOLUTION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 40 (Printed p. 34)',
      },
      {
        id: 'CLM-T4-08.2',
        statement: 'The 12th Schedule was added by the 74th Constitutional Amendment Act, 1992 (effective June 1, 1993), specifying 18 functional items devolved to Urban Local Bodies (Municipalities) under Article 243W.',
        claimType: 'CONSTITUTIONAL_DEVOLUTION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 40 (Printed p. 34)',
      },
      {
        id: 'CLM-T4-08.3',
        statement: 'In Rajasthan, 25 out of the 29 subjects under the 11th Schedule have been devolved to Panchayats, whereas Kerala has devolved all 29 subjects.',
        claimType: 'RAJASTHAN_REGIONAL_DEVOLUTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 40 (Printed p. 34)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Deepening Democracy to the Grassroots',
        body: 'The **Eleventh and Twelfth Schedules** translated the directive principle of Village Panchayats (Article 40) into a constitutional third tier of governance, endowing rural and urban local bodies with substantive developmental responsibilities.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Comparison of 11th and 12th Schedules',
        body: '### 1. 11th Schedule — Panchayats (29 Subjects — Article 243G / 73rd Amendment 1992)\n• Key Subjects: Agriculture & agricultural extension, Land improvement & soil conservation, Minor irrigation & water management, Animal husbandry & poultry, Fisheries, Social forestry & farm forestry, Minor forest produce, Small-scale industries, Khadi & village industries, Rural housing, Drinking water, Fuel & fodder, Roads, culverts & rural bridges, Rural electrification, Non-conventional energy, Poverty alleviation programmes, Primary & secondary education, Technical training & vocational education, Adult education, Libraries, Cultural activities, Markets & fairs, Health & sanitation (hospitals/PHCs), Family welfare, Women & child development, Social welfare (including welfare of handicapped), Welfare of weaker sections (SC/ST), Public Distribution System (PDS), Maintenance of community assets.\n\n### 2. 12th Schedule — Municipalities (18 Subjects — Article 243W / 74th Amendment 1992)\n• Key Subjects: Urban planning including town planning, Regulation of land use and construction of buildings, Planning for economic and social development, Roads and bridges, Water supply for domestic, industrial and commercial purposes, Public health, sanitation, conservancy and solid waste management, Fire services, Urban forestry, protection of the environment and promotion of ecological aspects, Safeguarding the interests of weaker sections, Slum improvement and upgradation, Urban poverty alleviation, Provision of urban amenities (parks, gardens, playgrounds), Promotion of cultural, educational and aesthetic aspects, Burials and burial grounds; cremations and cremation grounds, Cattle pounds; prevention of cruelty to animals, Vital statistics including registration of births and deaths, Public amenities including street lighting, parking lots, bus stops and public conveniences, Regulation of slaughterhouses and tanneries.',
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
        syllabusSection: 'GS Paper II: 73rd and 74th Amendments, Devolution of Powers and Finances.',
        examNotes: 'Prelims repeatedly asks numerical count (29 vs 18 subjects) and specific entries (e.g. Minor forest produce, PDS, Urban forestry).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Local Self Government in Rajasthan — 11th and 12th Schedules.',
        examNotes: 'High-frequency question on 29 subjects in 11th Schedule and 25 subjects devolved in Rajasthan.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Rural Credit and Local Governance.',
        examNotes: 'Panchayat developmental schemes interfacing with rural credit delivery.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '11th Schedule = 73rd Amend 1992 (Art 243G, 29 subjects for Panchayats; RJ devolved 25, Kerala 29). 12th Schedule = 74th Amend 1992 (Art 243W, 18 subjects for Municipalities).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **11th Schedule:** 29 subjects (Panchayati Raj Institutions).\n• **12th Schedule:** 18 subjects (Urban Local Bodies).\n• **Constitutionalization:** Transformed Article 40 DPSP into statutory third tier.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'While the 11th and 12th Schedules provide an illustrative list of developmental functions, the actual transfer of Functions, Funds, and Functionaries (3Fs) remains at the discretion of the respective State Legislatures under Articles 243G and 243W.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T4-08-01',
        type: 'CONCEPT_CHECK',
        stem: 'How many functional items are placed within the purview of Panchayats under the Eleventh Schedule of the Indian Constitution?',
        options: {
          A: '18',
          B: '21',
          C: '25',
          D: '29',
        },
        correctAnswer: 'D',
        explanation: 'The Eleventh Schedule (Article 243G) contains 29 functional subjects over which Panchayats may be endowed with powers and authority by State legislation.',
        trapExplanation: '18 is the number of subjects for Municipalities in the Twelfth Schedule. 25 is the number of subjects devolved so far in Rajasthan.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2014,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
];

/**
 * Seeder function for Batch A (Topics 1 to 4)
 */
export async function seedBatchACanonicalKnowledge() {
  console.log(`Seeding Batch A Canonical Knowledge (${BATCH_A_CONCEPTS.length} concepts)...`);

  // Ensure semantic inventory is present
  await seedBatchASemanticInventory();

  // Setup Domain -> Subject hierarchy
  let domain = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'indian-governance-administration' },
        { slug: 'constitutional-law-governance' },
        { name: 'Indian Governance & Administration' },
      ],
    },
  });

  if (!domain) {
    domain = await db.domain.create({
      data: {
        name: 'Indian Governance & Administration',
        slug: 'indian-governance-administration',
        description: 'Constitutional, administrative, and public policy framework of India.',
      },
    });
  }

  let subject = await db.subject.findFirst({
    where: {
      slug: 'indian-polity',
    },
  });

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

  // Ensure exams exist
  const upsc = await db.exam.upsert({
    where: { slug: 'upsc-cse' },
    update: {},
    create: {
      slug: 'upsc-cse',
      name: 'UPSC Civil Services Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'Premier national civil services examination.',
    },
  });

  const rpsc = await db.exam.upsert({
    where: { slug: 'rpsc-ras' },
    update: {},
    create: {
      slug: 'rpsc-ras',
      name: 'RPSC Rajasthan Administrative Services',
      conductingBody: 'Rajasthan Public Service Commission',
      description: 'Apex state civil services examination for Rajasthan.',
    },
  });

  const iibf = await db.exam.upsert({
    where: { slug: 'iibf-dbf' },
    update: {},
    create: {
      slug: 'iibf-dbf',
      name: 'IIBF Diploma in Banking & Finance',
      conductingBody: 'Indian Institute of Banking & Finance',
      description: 'Professional banking qualification.',
    },
  });

  const examMap: Record<string, string> = {
    UPSC_CSE: upsc.id,
    RPSC_RAS: rpsc.id,
    IIBF_DBF: iibf.id,
  };

  // Group concepts by topic
  const topicsMap: Record<string, { title: string; order: number; concepts: BatchAConceptSeedDefinition[] }> = {};
  for (const c of BATCH_A_CONCEPTS) {
    if (!topicsMap[c.topicSlug]) {
      topicsMap[c.topicSlug] = {
        title: c.topicTitle,
        order: c.topicOrder,
        concepts: [],
      };
    }
    topicsMap[c.topicSlug].concepts.push(c);
  }

  for (const [topicSlug, topicData] of Object.entries(topicsMap)) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: topicSlug,
        },
      },
      update: {
        title: topicData.title,
        order: topicData.order,
        status: 'ACTIVE',
      },
      create: {
        subjectId: subject.id,
        slug: topicSlug,
        title: topicData.title,
        order: topicData.order,
        status: 'ACTIVE',
      },
    });

    for (const cDef of topicData.concepts) {
      const concept = await db.concept.upsert({
        where: { id: cDef.id },
        update: {
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
        create: {
          id: cDef.id,
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
      });

      // Seed Claims
      for (const clm of cDef.claims) {
        const claim = await db.claim.upsert({
          where: { id: clm.id },
          update: {
            statement: clm.statement,
            claimType: clm.claimType,
            epistemicLevel: clm.epistemicLevel,
            confidence: clm.confidence,
          },
          create: {
            id: clm.id,
            conceptId: concept.id,
            statement: clm.statement,
            claimType: clm.claimType,
            epistemicLevel: clm.epistemicLevel,
            confidence: clm.confidence,
          },
        });

        // Evidence
        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: 'CERAMIC-POLITY-2026',
            locator: clm.evidenceLocator,
            excerpt: clm.statement,
            evidenceType: 'SECONDARY_COMPILATION',
            authority: 'TIER_C_EDUCATIONAL',
            evidentiarySupport: 'STRONG_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }

      // Seed ContentBlocks
      for (const cb of cDef.contentBlocks) {
        await db.contentBlock.create({
          data: {
            conceptId: concept.id,
            type: cb.type,
            title: cb.title,
            body: cb.body,
            order: cb.order,
            visibility: cb.visibility,
          },
        });
      }

      // Seed ExamConceptMappings
      for (const em of cDef.examMappings) {
        const examId = examMap[em.examCode];
        if (examId) {
          await db.examConceptMapping.create({
            data: {
              examId,
              conceptId: concept.id,
              syllabusUnit: em.syllabusSection,
              relevance: em.relevance,
              priority: em.weightage,
              requiredDepth: 'EXAM_STANDARD',
              notes: em.examNotes,
            },
          });
        }
      }

      // Seed RevisionUnits
      for (const ru of cDef.revisionUnits) {
        await db.revisionUnit.create({
          data: {
            conceptId: concept.id,
            type: ru.type,
            content: ru.content,
            priority: ru.priority,
            order: ru.order,
          },
        });
      }

      // Seed Questions
      for (const q of cDef.questions) {
        await db.question.create({
          data: {
            id: q.id,
            conceptId: concept.id,
            type: q.type,
            stem: q.stem,
            options: JSON.stringify(q.options),
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            trapExplanation: q.trapExplanation,
            difficulty: q.difficulty,
            isPYQ: q.isPYQ,
            pyqYear: q.pyqYear,
            pyqPaper: q.pyqPaper,
          },
        });
      }
    }
  }

  const count = await db.concept.count();
  console.log(`Successfully seeded Batch A knowledge base. Total concepts: ${count}.`);
  return BATCH_A_CONCEPTS.length;
}
