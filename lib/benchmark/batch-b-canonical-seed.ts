import { db } from '../db/client';
import { seedBatchBSemanticInventory, BATCH_B_SEMANTIC_UNITS } from '../ingestion/batch-b-semantic-inventory';

export interface ConceptDefinition {
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
  }>;
  contentBlocks: Array<{
    type: 'CORE_IDEA' | 'INTUITION' | 'MECHANISM' | 'DISTINCTION' | 'TIMELINE' | 'CASE_LAW' | 'MISCONCEPTION_SHIELD' | 'EXAMPLE';
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
    type: 'CONCEPT_CHECK' | 'APPLICATION' | 'ANALYTICAL';
    stem: string;
    options: Record<string, string>;
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ?: boolean;
    pyqYear?: number;
    pyqPaper?: string;
  }>;
}

export const BATCH_B_CONCEPTS: ConceptDefinition[] = [
  // =========================================================================
  // TOPIC 5: PART I — UNION AND ITS TERRITORY (4 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T5-01',
    slug: 'article-1-union-of-states-federal-nature-territory-of-india',
    topicSlug: 'part-1-union-and-its-territory',
    topicTitle: 'Part I: The Union and Its Territory',
    topicOrder: 5,
    title: 'Article 1: Union of States, Federal Nature & Territory of India',
    shortDefinition: 'The foundational constitutional declaration of India as an indestructible "Union of States", the distinction between "Union of India" (States) and "Territory of India" (States, UTs, and Acquired Territories), and Dr. Ambedkar’s dual rationale against state secession.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T5-01', 'SEM-T5-02'],
    claims: [
      {
        id: 'CLM-T5-01.1',
        statement: 'Article 1(1) of the Indian Constitution declares that "India, that is Bharat, shall be a Union of States", choosing the term "Union" instead of "Federation" to emphasize that the Indian federation is not the result of an agreement among constituent states and that no state has the legal right to secede.',
        claimType: 'CONSTITUTIONAL_TEXT_AXIOM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 41 (Printed p. 35)',
      },
      {
        id: 'CLM-T5-01.2',
        statement: 'Under Article 1(3), the "Territory of India" is wider in scope than the "Union of India", comprising three distinct categories: (a) the territories of the States, (b) the Union Territories specified in the First Schedule, and (c) such other territories as may be acquired by India at any time.',
        claimType: 'CONSTITUTIONAL_JURISDICTION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 41 (Printed p. 35)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Why "Union of States" rather than "Federation of States"',
        body: 'Article 1(1) opens with the dual name **"India, that is Bharat"** (reconciling ancient heritage with modern international identity) and designates the country as a **"Union of States"**.\n\nDr. B.R. Ambedkar explained in the Constituent Assembly that the phrase "Union of States" was deliberately preferred over "Federation of States" to assert two non-negotiable principles:\n1. **Not Formed by Treaty/Agreement:** Unlike the United States of America, the Indian Union was not formed through a voluntary contract or treaty among sovereign independent states.\n2. **Zero Right of Secession:** The Union is permanent and indestructible; no state or regional unit has any constitutional or legal power to separate or secede from India.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Union of India vs Territory of India',
        body: '| Parameter | Union of India | Territory of India (Article 1(3)) |\n| :--- | :--- | :--- |\n| **Constituent Scope** | Includes **only the 28 States** sharing federal power | Includes **States + Union Territories + Acquired Territories** |\n| **Geographical Range** | Narrower legal concept | Wider sovereign geographic concept |\n| **Federal Partnership** | States are federal partners sharing sovereign legislative powers (7th Schedule) | Union Territories are administered directly by the President/Centre under Part VIII |\n| **Acquired Territories** | Not part of the federal Union until formally converted into a State | Automatically part of the Territory of India upon sovereign acquisition |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Modes and Examples of Acquired Territories',
        body: 'Under international law and Article 1(3)(c), India can acquire foreign territories through treaty, purchase, cession, plebiscite, conquest, or subjugation. Once acquired, they become part of the *Territory of India*:\n• **Dadra & Nagar Haveli (1954):** Liberated from Portuguese rule; administered as an acquired territory until made a UT via 10th Amendment (1961).\n• **Goa, Daman & Diu (1961):** Liberated through Operation Vijay; acquired territory until made UTs via 12th Amendment (1962).\n• **Puducherry, Karikal, Mahe, Yanam (1954/1962):** Transferred by France; made a UT via 14th Amendment (1962).\n• **Sikkim (1975):** Integrated via 36th Amendment (1975).',
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
        syllabusSection: 'GS Paper II: Structure and Nature of Indian Union; Article 1 vs Federalism.',
        examNotes: 'High yield for conceptual MCQs on Union of India vs Territory of India and Ambedkar’s rationale for "Union".',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Part I — Union and its Territory.',
        examNotes: 'Repeatedly tested in 20-word and 50-word questions regarding Article 1(3) components.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Jurisdiction of Central Banking Acts.',
        examNotes: 'Statutory banking acts apply across the entire "Territory of India".',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 1: "India, that is Bharat, shall be a Union of States". Union > Federation (No agreement, no right to secede). Territory of India (States + UTs + Acquired) is wider than Union of India (States only).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 1(1):** "Union of States" reflects indestructible federal unity without right to secede.\n• **Article 1(3):** Territory of India includes 28 States, 8 UTs, and foreign territories acquired under international law.\n• **Union vs Territory:** Union includes only States (federal partners); Territory includes all sovereign lands.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The architectural design of Article 1 establishes a centripetal federalism where national sovereignty is absolute and indivisible, creating an asymmetrical union capable of integrating diverse colonial enclaves, protectorates, and tribal regions into a singular constitutional whole.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T5-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements correctly distinguishes the "Union of India" from the "Territory of India"?',
        options: {
          A: 'The Union of India includes both States and Union Territories, whereas the Territory of India includes only States.',
          B: 'The Territory of India is a wider expression than the Union of India because it includes States, Union Territories, and acquired territories.',
          C: 'There is no legal or constitutional distinction between the two expressions.',
          D: 'The Union of India includes acquired foreign territories, whereas the Territory of India does not.',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 1(3), the "Territory of India" encompasses the territories of the States, Union Territories, and territories that may be acquired. The "Union of India" includes only the States that are constituent units of the federal system.',
        trapExplanation: 'Option A inverts the definition; Option D falsely attributes acquired territories to the Union instead of the wider Territory.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
  {
    id: 'CON-T5-02',
    slug: 'articles-2-and-3-admission-vs-internal-reorganisation-of-states',
    topicSlug: 'part-1-union-and-its-territory',
    topicTitle: 'Part I: The Union and Its Territory',
    topicOrder: 5,
    title: 'Articles 2 and 3: Admission vs Internal Reorganisation of States',
    shortDefinition: 'The constitutional distinction between admitting new external territories under Article 2 versus reorganising existing internal state boundaries, areas, and names under Article 3, embodying India as an "Indestructible Union of Destructible States".',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T5-03', 'SEM-T5-04'],
    claims: [
      {
        id: 'CLM-T5-02.1',
        statement: 'Article 2 empowers Parliament to admit into the Union, or establish, new States on terms and conditions it thinks fit, relating exclusively to the admission or establishment of territories that were not previously part of India.',
        claimType: 'CONSTITUTIONAL_POWER_SCOPE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 42 (Printed p. 36)',
      },
      {
        id: 'CLM-T5-02.2',
        statement: 'Article 3 authorizes Parliament to form new states, increase or diminish the area of any state, alter state boundaries, or change state names, requiring prior recommendation of the President and reference to the concerned State Legislature for its non-binding views, enacted by a Simple Majority.',
        claimType: 'CONSTITUTIONAL_PROCEDURAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 42 (Printed p. 36)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'External Admission (Article 2) vs Internal Reorganisation (Article 3)',
        body: '• **Article 2 (External Domain):** Deals with admitting or establishing new states from territories **outside** the existing Indian territory (e.g. admission of Sikkim under the 35th and 36th Amendments).\n• **Article 3 (Internal Domain):** Deals with the internal redrawing of India’s political map, including forming a new state by separating territory, uniting states, altering boundaries, increasing/diminishing area, or changing state names (e.g. bifurcation of Bombay in 1960, creation of Telangana in 2014).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Step-by-Step Procedure for Reorganisation under Article 3',
        body: '1. **Prior Presidential Recommendation:** A bill under Article 3 can be introduced in either House of Parliament **only on the recommendation of the President**.\n2. **Reference to State Legislature:** If the bill affects the area, boundaries, or name of any State, the President **must refer** the bill to the concerned State Legislature for expressing its views within a specified time period.\n3. **Views are NOT Binding:** The views expressed by the State Legislature are **purely advisory and not binding** on the President or Parliament. Parliament can accept, modify, or completely reject state suggestions.\n4. **No Fresh Reference on Amendments:** If Parliament moves amendments to the bill after receiving state views, there is no requirement to refer the amended bill back to the State Legislature.\n5. **Simple Majority Enactment:** The bill is passed by both Houses of Parliament by an ordinary **Simple Majority** (majority of members present and voting).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Indestructible Union of Destructible States (India vs USA)',
        body: '| Parameter | India (Article 3) | United States of America |\n| :--- | :--- | :--- |\n| **State Territorial Integrity** | **No territorial guarantee:** Parliament can redraw any state map without state consent | **Guaranteed:** Congress cannot alter state boundaries without the express consent of the state legislature |\n| **Nature of Union** | **Indestructible Union of Destructible States** | **Indestructible Union of Indestructible States** |\n| **State Consent Required?** | **No** (State views are non-binding) | **Yes** (State consent is mandatory under US Constitution Article IV) |',
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
        syllabusSection: 'GS Paper II: Article 3 procedure, Federal Reorganisation, and Unitary Bias.',
        examNotes: 'UPSC Prelims repeatedly tests the non-binding nature of state legislative views under Article 3 and simple majority requirement.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Procedure of State Reorganisation under Article 3.',
        examNotes: 'High frequency for 50-word questions explaining the exact steps required to create a new state or rename an existing state.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Legal Reorganisation and Bank Jurisdiction.',
        examNotes: 'State reorganisation acts include transition clauses transferring bank liabilities and assets.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 2 = Admission of foreign/external states. Art 3 = Internal reorganisation (Presidential recommendation + non-binding state reference + Simple Majority). India = Indestructible Union of Destructible States.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 2 vs 3:** Art 2 admits external territories; Art 3 reshapes existing Indian states.\n• **Article 3 Procedure:** Prior Presidential sanction -> State Assembly consultation (views non-binding) -> Passed by Simple Majority.\n• **Constitutional Reality:** Parliament can unilaterally change state boundaries, area, or name.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 3 deliberately denies territorial integrity to constituent states, equipping the Union with the flexibility to reorganize administrative and linguistic boundaries to meet evolving demographic, developmental, and security exigencies without requiring cumbersome state ratifications.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T5-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 3 of the Indian Constitution, a bill for the creation of a new State:',
        options: {
          A: 'Can be introduced in Parliament only after obtaining the mandatory approval of the affected State Legislature.',
          B: 'Requires a special majority under Article 368 with ratification by half of the states.',
          C: 'Can be introduced only on the recommendation of the President, and the views of the State Legislature are not binding on Parliament.',
          D: 'Can be introduced only in the Lok Sabha with the consent of the Chief Minister of the concerned State.',
        },
        correctAnswer: 'C',
        explanation: 'A bill altering state boundaries or creating new states requires prior presidential recommendation. While referred to the state legislature for its opinion, the state views are purely advisory and non-binding, and the bill is passed by a simple majority.',
        trapExplanation: 'State approval is not mandatory (ruling out A); Article 4 explicitly exempts it from Article 368 special majority (ruling out B).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2014,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T5-03',
    slug: 'article-4-and-cession-of-territory-the-berubari-doctrine',
    topicSlug: 'part-1-union-and-its-territory',
    topicTitle: 'Part I: The Union and Its Territory',
    topicOrder: 5,
    title: 'Article 4 & Cession of Indian Territory: The Berubari Doctrine',
    shortDefinition: 'Article 4’s rule that state reorganisation laws are enacted by simple majority outside Article 368, and the landmark Berubari Union doctrine (1960) establishing that ceding Indian territory to a foreign state requires a formal Constitutional Amendment.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T5-05', 'SEM-T5-06'],
    claims: [
      {
        id: 'CLM-T5-03.1',
        statement: 'Article 4(2) explicitly provides that laws made under Article 2 (admission) and Article 3 (reorganisation) to amend the First and Fourth Schedules shall not be deemed to be amendments of the Constitution for the purposes of Article 368, allowing them to be enacted by ordinary simple majority.',
        claimType: 'CONSTITUTIONAL_EXEMPTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 43 (Printed p. 37)',
      },
      {
        id: 'CLM-T5-03.2',
        statement: 'In Re Berubari Union (1960), the Supreme Court ruled that the power of Parliament to diminish the area of a state under Article 3 does not include the power to cede Indian territory to a foreign nation; cession can be effected only by amending the Constitution under Article 368 (leading to the 9th Amendment Act 1960 and 100th Amendment Act 2015).',
        claimType: 'LANDMARK_JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 43 (Printed p. 37)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Article 4: Simple Majority for Internal Map-Making',
        body: 'When Parliament creates a new state under Article 3, the First Schedule (list of States/UTs) and Fourth Schedule (allocation of Rajya Sabha seats) automatically change. **Article 4(2)** declares that such consequential changes are **NOT** constitutional amendments under Article 368. They are enacted like any ordinary legislation with a **Simple Majority**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'The Berubari Union Case (1960 — Presidential Reference under Art 143)',
        body: '### The Legal Issue:\nUnder the 1958 Nehru-Noon Agreement, India agreed to transfer half of the Berubari Union enclave in West Bengal to Pakistan. The question referred to the Supreme Court was: *Can the Central Government cede Indian territory through ordinary executive action or under Article 3?*\n\n### The Supreme Court Ruling:\n1. **Article 3 is Purely Internal:** The power to diminish state territory under Article 3 relates only to internal adjustments between Indian states; it does **not** cover the cession of national territory to a foreign state.\n2. **Cession Requires Article 368 Amendment:** Ceding sovereign territory reduces the sovereign area of Bharat and therefore mandates a formal **Constitutional Amendment under Article 368** (passed with special majority in Parliament).\n3. **Result:** Parliament enacted the **9th Constitutional Amendment Act, 1960** to transfer Berubari Union to Pakistan.\n\n### Settlement of Boundary Disputes (*Maganbhai Ishwarbhai Patel Case, 1969*):\nThe Supreme Court clarified that the **demarcation and settlement of an undefined boundary dispute** with another country does not amount to cession and can be implemented by executive action alone without a constitutional amendment.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Cession vs Boundary Dispute vs Internal Reorganisation',
        body: '| Action | Constitutional Route | Required Majority |\n| :--- | :--- | :--- |\n| **Internal Reorganisation (Art 3)** | Ordinary Statute (Art 3 + Art 4) | **Simple Majority** |\n| **Cession of Indian Territory to Foreign State** | Constitutional Amendment (Art 368) | **Special Majority** (2/3rd present & voting + absolute majority) |\n| **Settlement / Demarcation of Boundary Dispute** | Executive Action | **No legislative act or amendment required** |',
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
        syllabusSection: 'GS Paper II: Cession of Territory, Berubari Precedent, and Land Boundary Agreements.',
        examNotes: 'High frequency for testing 9th Amendment (Berubari) and 100th Amendment (India-Bangladesh enclaves) mechanisms.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Landmark Constitutional References — Berubari Union Case.',
        examNotes: 'Frequently asked as a 50-word case law question on the legal requirements for ceding territory.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Sovereign Jurisdiction over Territories.',
        examNotes: 'Bank legal operating zones align strictly with sovereign territory.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 4: Art 2 & 3 laws are NOT Art 368 amendments (Simple Majority). Berubari Case (1960): Cession of territory requires Art 368 amendment (9th & 100th Amendments). Boundary settlement = Executive action.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 4:** Internal state reorganisation needs only simple majority.\n• **Berubari Union (1960):** Article 3 cannot be used to cede territory to foreign nations. Cession requires Article 368 amendment.\n• **Boundary Settlement:** Demarcating disputable borders can be done by executive agreement without amendment.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Berubari doctrine safeguards Indian sovereignty by preventing the political executive from alienating national territory through bilateral diplomacy without securing a broad parliamentary consensus under the stringent special majority thresholds of Article 368.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T5-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'According to the Supreme Court in the Berubari Union Case (1960), how can Indian territory be ceded to a foreign state?',
        options: {
          A: 'By an ordinary law enacted by Parliament under Article 3.',
          B: 'By an executive agreement signed by the Prime Minister.',
          C: 'Only by amending the Constitution under Article 368.',
          D: 'By a joint resolution passed by both Houses of Parliament.',
        },
        correctAnswer: 'C',
        explanation: 'The Supreme Court ruled that Article 3 does not authorize cession of Indian territory to a foreign power. Such cession alters the territory defined in the First Schedule and can be executed only through a formal Constitutional Amendment under Article 368.',
        trapExplanation: 'Article 3 applies only to internal changes, and executive action is sufficient only for boundary demarcations, not cession.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T5-04',
    slug: 'union-territories-architecture-and-100th-amendment-enclaves-exchange',
    topicSlug: 'part-1-union-and-its-territory',
    topicTitle: 'Part I: The Union and Its Territory',
    topicOrder: 5,
    title: 'Union Territories: Constitutional Architecture & Enclaves Exchange',
    shortDefinition: 'The constitutional categorization of Union Territories under Part VIII, reasons for their distinct administration, and the historic 100th Constitutional Amendment Act (2015) operationalizing the Indo-Bangladesh Land Boundary Agreement.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T5-07'],
    claims: [
      {
        id: 'CLM-T5-04.1',
        statement: 'Union Territories are administrative units under the direct governance of the Central Government (Part VIII of the Constitution), created for distinct strategic, cultural, administrative, or developmental reasons.',
        claimType: 'ADMINISTRATIVE_FRAMEWORK_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 44 (Printed p. 38)',
      },
      {
        id: 'CLM-T5-04.2',
        statement: 'The 100th Constitutional Amendment Act, 2015, amended the First Schedule to operationalize the 1974 Land Boundary Agreement with Bangladesh, transferring 111 Indian enclaves to Bangladesh and acquiring 51 Bangladeshi enclaves in India.',
        claimType: 'CONSTITUTIONAL_AMENDMENT_PURPOSE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 44 (Printed p. 38)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Why Union Territories Exist in a Federal Republic',
        body: 'Unlike States which enjoy autonomous constitutional powers under the 7th Schedule, **Union Territories (UTs)** are directly administered by the President through an appointed Administrator or Lieutenant Governor. They were created for four primary considerations:\n1. **Political and Administrative Considerations:** Delhi (National Capital Territory) and Chandigarh (Joint capital of Punjab and Haryana).\n2. **Cultural Distinctiveness:** Puducherry, Dadra & Nagar Haveli, and Daman & Diu (preserving distinct French and Portuguese cultural legacies).\n3. **Strategic and National Security Importance:** Andaman & Nicobar Islands, Lakshadweep, and Ladakh.\n4. **Special Treatment for Backward/Tribal Regions:** Mizoram, Manipur, and Tripura originally began as UTs before attaining full statehood.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 100th Constitutional Amendment Act, 2015 (Enclaves Exchange)',
        body: '### Historical Context:\nThe Partition of 1947 left 111 Indian enclaves inside Bangladesh (then East Pakistan) and 51 Bangladeshi enclaves inside India, creating stateless islands without basic governance, roads, electricity, or schools.\n\n### The Constitutional Solution:\n• In accordance with the *Berubari precedent*, transferring Indian sovereign territory required an Article 368 amendment.\n• **Parliament enacted the 100th Constitutional Amendment Act, 2015** (amending the First Schedule along the borders of Assam, West Bengal, Meghalaya, and Tripura).\n• **Exchange Figures:** India transferred **111 enclaves** (approx. 17,160 acres) to Bangladesh, and Bangladesh transferred **51 enclaves** (approx. 7,110 acres) to India, granting full citizenship and rehabilitation rights to all residents.',
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
        syllabusSection: 'GS Paper II: Union Territories Governance & 100th Amendment Enclave Resolution.',
        examNotes: 'UPSC Prelims and Mains frequently examine the special constitutional status of UTs and boundary treaties.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Union Territories & Constitutional Amendments.',
        examNotes: 'Tests 100th Amendment details (India-Bangladesh) and current 8 UTs architecture.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Financial Administration in Union Territories.',
        examNotes: 'UTs with and without legislatures have distinct consolidated fund arrangements.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'UTs = Direct Central administration (Part VIII) for strategic, cultural, administrative reasons. 100th Amend 2015 = India-Bangladesh enclaves exchange (111 transferred to BD, 51 acquired from BD).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **UT Rationale:** Capital territory (Delhi), cultural legacy (Puducherry), strategic borders (Ladakh, A&N).\n• **100th Amendment (2015):** Exchanged 111 Indian enclaves for 51 Bangladeshi enclaves under 1974 Land Boundary Agreement.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The governance of Union Territories demonstrates the flexibility of Indian asymmetric federalism, providing a tailored administrative spectrum ranging from pure centrally administered territories without legislatures (Ladakh, Chandigarh) to hybrid democratic systems with legislative assemblies and councils of ministers (Delhi, Puducherry, J&K).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T5-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'The 100th Constitutional Amendment Act, 2015 was enacted to:',
        options: {
          A: 'Grant statehood to Delhi.',
          B: 'Operationalize the Land Boundary Agreement and exchange of enclaves with Bangladesh.',
          C: 'Bifurcate Jammu and Kashmir into two Union Territories.',
          D: 'Merge the Union Territories of Dadra & Nagar Haveli and Daman & Diu.',
        },
        correctAnswer: 'B',
        explanation: 'The 100th Constitutional Amendment Act, 2015 was passed to give effect to the acquiring of certain territories by India and transfer of certain other territories to Bangladesh through the exchange of enclaves.',
        trapExplanation: 'J&K bifurcation was done via statutory act in 2019, and DNH/DD merger was statutory in 2020.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 6: UNIFICATION OF INDIA (4 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T6-01',
    slug: 'lapse-of-paramountcy-and-patel-menon-integration-architecture',
    topicSlug: 'unification-of-india',
    topicTitle: 'Unification and Integration of India',
    topicOrder: 6,
    title: 'Lapse of Paramountcy & The Patel-Menon Integration Architecture',
    shortDefinition: 'The legal crisis created by Section 7(1)(b) of the Indian Independence Act 1947 (lapse of British paramountcy over 565 princely states) and the diplomatic strategy of Sardar Vallabhbhai Patel and V.P. Menon utilizing Standstill Agreements, Instruments of Accession, and Privy Purses.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T6-01'],
    claims: [
      {
        id: 'CLM-T6-01.1',
        statement: 'Under Section 7(1)(b) of the Indian Independence Act 1947, British paramountcy over 565 Princely States lapsed on August 15, 1947, returning sovereign rights to rulers and theoretically granting them the choice to accede to India, accede to Pakistan, or remain independent.',
        claimType: 'HISTORICAL_LEGAL_STATUTE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 45 (Printed p. 39)',
      },
      {
        id: 'CLM-T6-01.2',
        statement: 'Sardar Vallabhbhai Patel (Minister for States) and Secretary V.P. Menon successfully integrated 549 out of the 552 princely states geographically contiguous to India before August 15, 1947, utilizing the Standstill Agreement, the Instrument of Accession (surrendering Defence, External Affairs, and Communications), and Privy Purses.',
        claimType: 'HISTORICAL_ADMINISTRATIVE_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 45 (Printed p. 39)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Threat of "Balkanisation" of India in 1947',
        body: 'At independence, India was divided into two distinct entities:\n1. **British Indian Provinces:** Governed directly by the British Crown (approx. 60% of territory).\n2. **565 Princely States:** Governed by native rulers under British suzerainty (**Paramountcy**).\n\nWhen the British left, they declared that **Paramountcy lapsed**, leaving 565 potential independent kingdoms scattered inside India. Had these rulers chosen independence, the subcontinent would have disintegrated into dozens of hostile, landlocked micro-states ("Balkanisation").',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Three Institutional Instruments of Patel and Menon',
        body: 'Sardar Vallabhbhai Patel (known as the *Bismarck of India* and *Iron Man of India*) and senior civil servant **V.P. Menon** devised a brilliant two-stage diplomatic strategy:\n\n1. **Standstill Agreement:** An interim agreement preserving existing administrative, customs, postal, and commercial arrangements between the Dominion of India and the Princely State until a final constitution was enacted.\n2. **Instrument of Accession (IoA):** Rulers surrendered only three critical federal subjects to the Government of India:\n   • **Defence**\n   • **External Affairs**\n   • **Communications**\n   *(Internal sovereignty and local administration remained with the ruler at this initial stage).*\n3. **Privy Purses (Financial Guarantee):** Tax-free constitutional annual stipends guaranteed to former rulers in compensation for surrendering their armies, treasuries, and sovereign territory (later abolished in 1971 by the 26th Constitutional Amendment).',
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
        syllabusSection: 'GS Paper I & II: Post-Independence Consolidation & Integration of Princely States.',
        examNotes: 'Core topic for post-independence history and federal emergence.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper I (History) & Paper III (Polity): Integration of Princely States & Sardar Patel Role.',
        examNotes: 'Repeatedly tested regarding Instrument of Accession terms and integration chronology.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'History of Central Currency Unification.',
        examNotes: 'Accession ended separate princely state currencies and established unified RBI legal tender.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Indian Independence Act 1947: Lapse of Paramountcy over 565 Princely States. Patel & Menon secured 549/552 contiguous accessions via Standstill Agreement, Instrument of Accession (Defence, External Affairs, Communications), and Privy Purses.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Lapse of Paramountcy:** Rulers gained theoretical choice to join India, Pakistan, or stay independent.\n• **Patel-Menon Strategy:** Instrument of Accession ceded only 3 subjects (Defence, External Affairs, Communications) to secure immediate unity.\n• **Privy Purses:** Guaranteed financial payments to rulers (abolished by 26th Amendment 1971).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Patel-Menon integration architecture transformed 565 disparate feudal autocracies into constituent units of a democratic constitutional republic within two years, representing the largest peaceful territorial integration in modern political history.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T6-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under the initial Instrument of Accession signed by Princely States in 1947, which three subjects were surrendered to the Dominion of India?',
        options: {
          A: 'Defence, Finance, and Taxation',
          B: 'Defence, External Affairs, and Communications',
          C: 'Foreign Trade, Currency, and Communications',
          D: 'Defence, Police, and Judiciary',
        },
        correctAnswer: 'B',
        explanation: 'Under the standard Instrument of Accession, princely rulers acceded to the Dominion of India on three specific subjects: Defence, External Affairs, and Communications, retaining internal administrative autonomy.',
        trapExplanation: 'Finance and Taxation were retained by rulers initially; Police and Judiciary were strictly internal provincial matters.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T6-02',
    slug: 'integration-of-challenging-states-junagadh-hyderabad-and-jammu-kashmir',
    topicSlug: 'unification-of-india',
    topicTitle: 'Unification and Integration of India',
    topicOrder: 6,
    title: 'Integration of Challenging States: Junagadh, Hyderabad & Jammu & Kashmir',
    shortDefinition: 'The distinct historical, legal, and military dynamics of integrating the three recalcitrant princely states: the Junagadh plebiscite (1948), Operation Polo in Hyderabad (1948), and the Instrument of Accession and Article 370 trajectory in Jammu & Kashmir (1947–2019).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T6-02'],
    claims: [
      {
        id: 'CLM-T6-02.1',
        statement: 'Junagadh was integrated into India following a popular uprising against the Nawab’s accession to Pakistan, culminating in a democratic plebiscite in February 1948 where over 99% of voters chose accession to India.',
        claimType: 'HISTORICAL_INTEGRATION_EVENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 46 (Printed p. 40)',
      },
      {
        id: 'CLM-T6-02.2',
        statement: 'Hyderabad was integrated through a police action codenamed "Operation Polo" (September 13–18, 1948) led by Major General J.N. Chaudhuri, ending the Nizam’s bid for an independent autocratic state and halting atrocities by the Razakars.',
        claimType: 'MILITARY_POLICE_ACTION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 46 (Printed p. 40)',
      },
      {
        id: 'CLM-T6-02.3',
        statement: 'Jammu & Kashmir acceded to India on October 26, 1947, when Maharaja Hari Singh signed the Instrument of Accession following a Pakistani tribal invasion (Operation Gulmarg), leading to special transitional status under Article 370, which was modified in August 2019 alongside the bifurcation into two Union Territories.',
        claimType: 'CONSTITUTIONAL_ACCESSION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 46 (Printed p. 40)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Three Problem States of 1947',
        body: 'By August 15, 1947, three princely states contiguous to India refused to sign the Instrument of Accession, each posing a distinct constitutional and geopolitical challenge:\n1. **Junagadh (Kathiawar, Gujarat):** Muslim ruler (Nawab Muhammad Mahabat Khan III) ruling over an 80%+ Hindu majority population surrounded by Indian territory.\n2. **Hyderabad (Deccan):** Muslim ruler (Nizam Mir Osman Ali Khan) heading the largest and richest princely state, surrounded entirely by Indian land, seeking sovereign independence.\n3. **Jammu & Kashmir (Himalayan Frontier):** Hindu ruler (Maharaja Hari Singh) ruling over a Muslim-majority state bordering both India and Pakistan, initially desiring complete neutrality.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'How Each State Was Integrated',
        body: '### 1. Junagadh — Democratic Plebiscite (Feb 1948):\n• The Nawab announced accession to Pakistan on Aug 15, 1947, despite no land contiguity.\n• A public uprising led by the *Aarzi Hukumat* (Provisional Government under Samaldas Gandhi) forced the Nawab to flee to Karachi.\n• The Dewan (Shah Nawaz Bhutto) invited the Government of India to take over the administration.\n• A **plebiscite was held in February 1948**, wherein 190,870 votes were cast for India and only 91 for Pakistan.\n\n### 2. Hyderabad — Operation Polo (Sept 1948):\n• The Nizam refused accession and signed a 1-year Standstill Agreement while expanding his private militia (**Razakars**, led by Kasim Razvi).\n• Razakars unleashed widespread communal violence against citizens advocating merger with India.\n• **Operation Polo (Police Action):** On September 13, 1948, the Indian Army under Major General J.N. Chaudhuri entered Hyderabad. The Nizam surrendered on September 17, 1948, and Hyderabad signed the Instrument of Accession in November 1948.\n\n### 3. Jammu & Kashmir — Instrument of Accession (Oct 1947):\n• Pakistan launched a covert tribal invasion (**Operation Gulmarg**) in October 1947.\n• Facing military collapse, Maharaja Hari Singh appealed to India for assistance and signed the **Instrument of Accession on October 26, 1947** (accepted by Governor-General Lord Mountbatten on Oct 27).\n• Indian troops airlifted to Srinagar repelled the invaders, securing two-thirds of the territory.\n• Article 370 provided temporary special status, which was reconstituted on August 5–6, 2019 via the *Constitution (Application to Jammu and Kashmir) Order, 2019* and the *Jammu and Kashmir Reorganisation Act, 2019*.',
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
        syllabusSection: 'GS Paper I & II: Integration of Junagadh, Hyderabad, and J&K; Article 370 Abrogation.',
        examNotes: 'UPSC Prelims and Mains frequently test Operation Polo, Junagadh plebiscite, and J&K accession dates.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper I & III: Integration of Hyderabad (Operation Polo) and Junagadh.',
        examNotes: 'High yield for 20-word definitions (e.g. Operation Polo, Razakars) and 50-word integration narratives.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Integration of State Financial Systems.',
        examNotes: 'Hyderabad State Bank was integrated into State Bank of Hyderabad under RBI regulation.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Junagadh = Plebiscite (Feb 1948, 99%+ India). Hyderabad = Operation Polo police action (Sept 13-18, 1948, Maj Gen J.N. Chaudhuri). J&K = Instrument of Accession signed Oct 26, 1947 by Hari Singh (Art 370 restructured 2019).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Junagadh:** Nawab joined Pakistan -> Aarzi Hukumat revolt -> Feb 1948 plebiscite joined India.\n• **Hyderabad:** Nizam + Razakars -> Operation Polo (Sept 1948) -> Surrender and accession.\n• **Jammu & Kashmir:** Pak tribal invasion -> Hari Singh signed IoA on Oct 26, 1947 -> 2019 J&K Reorganisation into 2 UTs.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The resolution of Junagadh, Hyderabad, and Kashmir established three distinct doctrines in Indian statecraft: democratic plebiscite where rulers diverged from popular will, decisive police action against internal secessionist autocracies, and formal legal accession under international law during external aggression.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T6-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'The military/police action code-named "Operation Polo" was launched by the Government of India in September 1948 to integrate which princely state?',
        options: {
          A: 'Junagadh',
          B: 'Hyderabad',
          C: 'Goa',
          D: 'Kashmir',
        },
        correctAnswer: 'B',
        explanation: 'Operation Polo was the military action conducted in September 1948 that integrated the princely state of Hyderabad into the Indian Union.',
        trapExplanation: 'Goa was integrated via Operation Vijay (1961), Junagadh via plebiscite (1948), and Kashmir via Instrument of Accession (1947).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T6-03',
    slug: 'liberation-of-foreign-enclaves-french-and-portuguese-territories',
    topicSlug: 'unification-of-india',
    topicTitle: 'Unification and Integration of India',
    topicOrder: 6,
    title: 'Liberation of Foreign Enclaves: French and Portuguese Territories',
    shortDefinition: 'The diplomatic transfer of French colonial possessions (Puducherry, Chandernagore) and the military liberation of Portuguese settlements (Goa, Daman & Diu, Dadra & Nagar Haveli via Operation Vijay) into the Indian Union.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T6-03'],
    claims: [
      {
        id: 'CLM-T6-03.1',
        statement: 'French settlements in India were integrated primarily through bilateral diplomacy: Chandernagore joined in 1949 via plebiscite, while Puducherry, Karikal, Mahe, and Yanam were transferred de facto on November 1, 1954, and formally ratified in 1962, becoming a Union Territory via the 14th Constitutional Amendment Act 1962.',
        claimType: 'DIPLOMATIC_INTEGRATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 47 (Printed p. 41)',
      },
      {
        id: 'CLM-T6-03.2',
        statement: 'Portuguese enclaves were integrated through public liberation and military action: Dadra & Nagar Haveli was liberated in 1954 (10th Amendment 1961), while Goa, Daman & Diu were liberated through "Operation Vijay" (December 18–19, 1961; 12th Amendment 1962), with Goa attaining full statehood in 1987 via the 56th Constitutional Amendment Act.',
        claimType: 'MILITARY_LIBERATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 47 (Printed p. 41)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Post-1947 Decolonisation: Eliminating Foreign Pockets',
        body: 'Even after the British withdrawal in August 1947, France and Portugal continued to hold strategic coastal enclaves inside India. India’s decolonisation was incomplete until these colonial territories were merged into the Indian Republic.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'TIMELINE',
        title: 'Chronology of French and Portuguese Integration',
        body: '### A. French Settlements (Diplomatic Pathway):\n• **Chandernagore (Bengal):** Joined India in 1949 following a democratic plebiscite (merged with West Bengal in 1954).\n• **Puducherry, Karikal, Mahe, Yanam:** France signed an agreement transferring administrative control to India on **November 1, 1954 (De Facto transfer)**.\n• **De Jure Treaty of Cession:** Ratified by the French Parliament on **August 16, 1962**.\n• **14th Constitutional Amendment (1962):** Formally created the Union Territory of Puducherry.\n\n### B. Portuguese Settlements (Direct Action Pathway):\n• **Dadra & Nagar Haveli:** Liberated from Portuguese rule by local nationalist volunteers on **August 2, 1954**; administered autonomously until the **10th Constitutional Amendment Act, 1961** made it a Union Territory.\n• **Goa, Daman & Diu (Operation Vijay):** Portugal’s Salazar regime refused diplomatic negotiations. On **December 18–19, 1961**, Indian Armed Forces launched **Operation Vijay**, liberating Goa, Daman, and Diu within 36 hours.\n• **12th Constitutional Amendment (1962):** Constituted Goa, Daman & Diu as a Union Territory.\n• **56th Constitutional Amendment (1987):** Elevated Goa to become the **25th State of India**, leaving Daman and Diu as a separate Union Territory.',
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
        syllabusSection: 'GS Paper I & II: Decolonisation of French and Portuguese Pockets in India.',
        examNotes: 'UPSC Prelims tests Operation Vijay (1961) vs Operation Polo (1948), and 10th/12th/14th/56th Amendments.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Territorial Integration & Post-Independence Decolonisation.',
        examNotes: 'Frequently asked in 20-word matching questions on Operation Vijay and Goa statehood year (1987).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Currency and Legal Integration.',
        examNotes: 'Portuguese Escudo was replaced by the Indian Rupee in 1961.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'French: Chandernagore (1949 plebiscite), Puducherry (De facto 1954, De jure 1962, 14th Amend 1962). Portuguese: Dadra & Nagar Haveli (1954, 10th Amend 1961), Goa/Daman/Diu (Operation Vijay Dec 1961, 12th Amend 1962, Goa Statehood 56th Amend 1987).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **French Enclaves:** Peaceful transfer (Nov 1, 1954 de facto -> Aug 16, 1962 de jure treaty -> 14th Amendment).\n• **Portuguese Enclaves:** Operation Vijay (Dec 18-19, 1961) ended 451 years of Portuguese rule in Goa.\n• **Goa Statehood:** Elevated from UT to 25th State by 56th Amendment in 1987.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The contrast between French diplomatic cession and Portuguese military eviction demonstrated India’s commitment to bilateral negotiation while establishing the absolute sovereign prerogative of using armed force to eliminate foreign colonial enclaves from Indian soil.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T6-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'By which Constitutional Amendment Act was Goa elevated from a Union Territory to a full-fledged State of the Indian Union in 1987?',
        options: {
          A: '12th Constitutional Amendment Act, 1962',
          B: '36th Constitutional Amendment Act, 1975',
          C: '56th Constitutional Amendment Act, 1987',
          D: '71st Constitutional Amendment Act, 1992',
        },
        correctAnswer: 'C',
        explanation: 'The 56th Constitutional Amendment Act, 1987 conferred full statehood on Goa as the 25th State of India, while Daman and Diu remained a Union Territory.',
        trapExplanation: '12th Amendment made Goa a UT in 1962; 36th Amendment made Sikkim a state in 1975.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
  {
    id: 'CON-T6-04',
    slug: 'integration-of-sikkim-from-associate-state-to-full-statehood',
    topicSlug: 'unification-of-india',
    topicTitle: 'Unification and Integration of India',
    topicOrder: 6,
    title: 'Integration of Sikkim: From Associate State to Full Statehood',
    shortDefinition: 'The novel constitutional mechanism of Sikkim’s integration: from a 1950 protectorate under the Chogyal dynasty to an "Associate State" via the 35th Amendment (1974), full statehood via the 36th Amendment (1975), and the 1950 four-fold state classification.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T6-04'],
    claims: [
      {
        id: 'CLM-T6-04.1',
        statement: 'Sikkim, governed by the hereditary Chogyal dynasty, was an Indian protectorate under the 1950 Indo-Sikkim Treaty, where India managed its defence, external affairs, and communications while Sikkim retained internal autonomy.',
        claimType: 'PROTECTORATE_STATUS_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 48 (Printed p. 42)',
      },
      {
        id: 'CLM-T6-04.2',
        statement: 'The 35th Constitutional Amendment Act (1974) introduced Article 2A and the Tenth Schedule to create the novel status of "Associate State" for Sikkim, which was subsequently replaced by the 36th Constitutional Amendment Act (1975) making Sikkim the 22nd full State of India under Article 371F.',
        claimType: 'CONSTITUTIONAL_AMENDMENT_EVOLUTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 48 (Printed p. 42)',
      },
      {
        id: 'CLM-T6-04.3',
        statement: 'Under the original 1950 Constitution, Indian states were categorized into a four-fold classification: Part A (9 Governor provinces), Part B (9 Princely state unions with Rajpramukhs), Part C (10 Chief Commissioner provinces), and Part D (Andaman & Nicobar Islands).',
        claimType: 'CONSTITUTIONAL_CLASSIFICATION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 48 (Printed p. 42)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Unique Constitutional Journey of Sikkim',
        body: 'Sikkim was never a British Indian province or a standard princely state. Under the **1950 Indo-Sikkim Treaty**, Sikkim was a **Protectorate of India** (India handled defense, diplomacy, and communications, while the Chogyal ruled internally).\n\nIn 1974, popular democratic protests against the Chogyal led the Sikkim Assembly to seek closer integration with India.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Two-Step Constitutional Integration (35th vs 36th Amendments)',
        body: '### Step 1: 35th Constitutional Amendment Act (1974) — The "Associate State" Experiment:\n• Created a brand-new constitutional category: **Associate State**.\n• Inserted **Article 2A** and a new **Tenth Schedule** into the Constitution specifying the terms of association (allowing Sikkim representatives to sit in the Indian Parliament).\n\n### Step 2: 36th Constitutional Amendment Act (1975) — Full Statehood:\n• Following a public referendum in Sikkim where 97.5% voted to abolish the monarchy and join India, Parliament enacted the **36th Amendment Act, 1975**.\n• **Repealed Article 2A and the Tenth Schedule** (vacating the temporary associate status).\n• Amended the First Schedule, making **Sikkim the 22nd State of India**.\n• Inserted **Article 371F** containing special transitional and protective provisions for Sikkim’s social, cultural, and political rights.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Original 1950 Four-Fold Classification of States',
        body: '| Category | Description | Total Units | Examples |\n| :--- | :--- | :--- | :--- |\n| **Part A States** | Former British Indian Governors’ Provinces | **9 States** | Assam, Bihar, Bombay, MP, Madras, Odisha, Punjab, UP, West Bengal |\n| **Part B States** | Former Princely States or Unions of Princely States (headed by *Rajpramukh*) | **9 States** | **Rajasthan**, Hyderabad, Jammu & Kashmir, Madhya Bharat, Mysore, Patiala & East Punjab (PEPSU), Saurashtra, Travancore-Cochin, Vindhya Pradesh (later moved to Part C) |\n| **Part C States** | Former Chief Commissioners’ Provinces & small princely states | **10 States** | Ajmer, Bhopal, Bilaspur, Coorg, Delhi, Himachal Pradesh, Kutch, Manipur, Tripura, Vindhya Pradesh |\n| **Part D States** | Centrally administered island territory | **1 Territory** | Andaman & Nicobar Islands |\n*(Note: This four-fold classification was completely abolished by the 7th Constitutional Amendment Act, 1956).*',
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
        syllabusSection: 'GS Paper II: 35th & 36th Amendments (Sikkim), Article 371F, and 1950 State Taxonomy.',
        examNotes: 'UPSC repeatedly tests the difference between 35th Amendment (Associate status/Art 2A) and 36th Amendment (Full statehood/Art 371F).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: 1950 Four-fold Classification (Part B State Rajasthan) and 7th Amendment.',
        examNotes: 'High yield for Rajasthan as a Part B state and Ajmer as a Part C state prior to 1956 reorganisation.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Special Banking Provisions under Article 371F.',
        examNotes: 'State Bank of Sikkim operates with special status under Article 371F.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Sikkim: 35th Amend 1974 (Art 2A & 10th Sched = "Associate State") -> 36th Amend 1975 (Repealed Art 2A, 22nd State, Art 371F). 1950 classification: Part A (9), Part B (9 incl. Rajasthan), Part C (10 incl. Ajmer), Part D (1).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Sikkim Integration:** 35th Amendment created "Associate State" (1974); 36th Amendment made it 22nd full State (1975) under Article 371F.\n• **1950 State System:** Part A (Governor Provinces), Part B (Princely Unions), Part C (Chief Commissioners), Part D (A&N Islands).\n• **1956 Abolition:** 7th Amendment replaced 4-fold system with States and UTs.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The two-stage constitutional integration of Sikkim exemplifies the doctrinal versatility of Article 2, creating an unprecedented associate relationship that respected democratic self-determination while preparing the constitutional terrain for permanent federal union under Article 371F.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T6-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'By which Constitutional Amendment Act was Sikkim made a full-fledged State of the Indian Union and the 10th Schedule of that time repealed?',
        options: {
          A: '35th Constitutional Amendment Act, 1974',
          B: '36th Constitutional Amendment Act, 1975',
          C: '42nd Constitutional Amendment Act, 1976',
          D: '44th Constitutional Amendment Act, 1978',
        },
        correctAnswer: 'B',
        explanation: 'The 36th Constitutional Amendment Act, 1975 admitted Sikkim as the 22nd State of the Indian Union, repealed Article 2A and the original 10th Schedule, and added Article 371F.',
        trapExplanation: '35th Amendment made Sikkim an "Associate State", not a full state.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 7: REORGANISATION OF STATES (4 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T7-01',
    slug: 'linguistic-demands-and-early-commissions-dhar-and-jvp',
    topicSlug: 'reorganisation-of-states',
    topicTitle: 'Reorganisation of States & Zonal Councils',
    topicOrder: 7,
    title: 'Linguistic Demands & Early Commissions: Dhar Commission & JVP Committee',
    shortDefinition: 'The historical emergence of the demand for linguistic states after 1947, the S.K. Dhar Commission’s recommendation prioritizing administrative convenience, and the JVP Committee’s initial rejection of language-based state reorganization.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T7-01'],
    claims: [
      {
        id: 'CLM-T7-01.1',
        statement: 'In June 1948, Constituent Assembly President Dr. Rajendra Prasad appointed the Linguistic Provinces Commission headed by Justice S.K. Dhar, which recommended that the reorganisation of states should be based on administrative convenience, geographical continuity, and financial self-reliance rather than linguistic considerations.',
        claimType: 'HISTORICAL_COMMISSION_REPORT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 49 (Printed p. 43)',
      },
      {
        id: 'CLM-T7-01.2',
        statement: 'In December 1948, the Indian National Congress appointed the JVP Committee (Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya) at its Jaipur session, which submitted its report in April 1949 formally rejecting language as the basis for state reorganisation in the interest of national unity.',
        claimType: 'HISTORICAL_COMMITTEE_REPORT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 49 (Printed p. 43)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Clash Between Congress Promises and Post-Independence Reality',
        body: 'During the freedom struggle, the Indian National Congress had pledged (at its **1920 Nagpur Session**) that independent India’s provinces would be reorganized along linguistic lines. However, the catastrophic violence of Partition in 1947 made national leaders fearful that reorganizing states by language would trigger regional chauvinism and jeopardize national integrity.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Two Early Reorganisation Inquiries (1948)',
        body: '### 1. S.K. Dhar Commission (Linguistic Provinces Commission — June 1948):\n• **Appointed by:** Dr. Rajendra Prasad (President of Constituent Assembly).\n• **Members:** Justice S.K. Dhar (Chairman), J.N. Lal, Panna Lall.\n• **Findings (Submitted Dec 1948):** Strongly advised **against** creating linguistic states. Recommended that administrative convenience, financial viability, geographical contiguity, and development capacity should be the sole criteria.\n\n### 2. JVP Committee (December 1948):\n• **Appointed by:** INC Jaipur Session (1948) due to intense public backlash against the Dhar report.\n• **Members:** **J**awaharlal Nehru, **V**allabhbhai Patel, **P**attabhi Sitaramayya.\n• **Findings (Submitted April 1949):** Re-examined the issue and **formally rejected language** as the basis for state formation, arguing that national unity, security, and economic development were the supreme priorities in post-partition India.',
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
        syllabusSection: 'GS Paper I & II: Evolution of Linguistic Federalism; Dhar vs JVP findings.',
        examNotes: 'UPSC Prelims frequently tests the sequence of committees: Dhar Commission (1948) -> JVP Committee (1948) -> Fazal Ali Commission (1953).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Reorganisation of States — Historical Inquiries.',
        examNotes: 'Repeated 20-word questions on JVP committee members and Dhar commission recommendations.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Administrative Background of Indian States.',
        examNotes: 'Background history of federal administration.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Dhar Commission (June 1948) = Rejected language, favored administrative convenience. JVP Committee (Dec 1948: Nehru, Patel, Sitaramayya) = Rejected linguistic states for national unity.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Dhar Commission (1948):** Appointed by Rajendra Prasad; prioritized administrative efficiency over language.\n• **JVP Committee (1948):** Formed at Jaipur session; Nehru, Patel, Sitaramayya rejected language-based states.\n• **Result:** Delayed linguistic reorganisation until the 1953 Andhra crisis.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Dhar and JVP reports reflected the cautious centralist consensus of the founding generation, who viewed linguistic regionalism as a centripetal threat to national cohesion immediately following the trauma of Partition.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T7-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Who among the following was NOT a member of the JVP Committee appointed in 1948 to examine the linguistic reorganization of states?',
        options: {
          A: 'Jawaharlal Nehru',
          B: 'Vallabhbhai Patel',
          C: 'Pattabhi Sitaramayya',
          D: 'Justice S.K. Dhar',
        },
        correctAnswer: 'D',
        explanation: 'The JVP Committee consisted of Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya. Justice S.K. Dhar headed the earlier Linguistic Provinces Commission.',
        trapExplanation: 'Justice S.K. Dhar was chairman of the Dhar Commission, not the JVP Committee.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2012,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T7-02',
    slug: 'andhra-crisis-and-fazal-ali-commission-src-1953-1955',
    topicSlug: 'reorganisation-of-states',
    topicTitle: 'Reorganisation of States & Zonal Councils',
    topicOrder: 7,
    title: 'Andhra Crisis & Fazal Ali Commission (States Reorganisation Commission 1953–55)',
    shortDefinition: 'The creation of Andhra State in 1953 following Potti Sreeramulu’s fast unto death, the appointment of the Fazal Ali Commission (SRC), its acceptance of language as a major criterion, its rejection of "One Language, One State", and its four core principles.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T7-02'],
    claims: [
      {
        id: 'CLM-T7-02.1',
        statement: 'Following the death of veteran Gandhian leader Potti Sreeramulu after a 56-day hunger strike, the Government of India created the first linguistic state—Andhra State (for Telugu speakers carved out of Madras State)—on October 1, 1953.',
        claimType: 'HISTORICAL_POLITICAL_TURNING_POINT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 50 (Printed p. 44)',
      },
      {
        id: 'CLM-T7-02.2',
        statement: 'In December 1953, the Government appointed the States Reorganisation Commission (SRC) comprising Justice Fazal Ali (Chairman), K.M. Panikkar, and H.N. Kunzru, which submitted its report in September 1955 accepting language as a primary basis of state reorganisation while explicitly rejecting the rigid doctrine of "One Language, One State".',
        claimType: 'STATUTORY_COMMISSION_MANDATE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 50 (Printed p. 44)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Catalyst: Potti Sreeramulu and the Birth of Andhra State',
        body: 'The creation of linguistic states became unavoidable in October 1952 when **Potti Sreeramulu** undertook a fast unto death demanding a separate state for Telugu speakers. His death on the 56th day sparked intense public unrest, forcing Prime Minister Nehru to concede the creation of **Andhra State on October 1, 1953** (with Kurnool as capital and High Court at Guntur).\n\nThis triggered nationwide demands for linguistic statehood across Maharashtra, Gujarat, Karnataka, and Punjab.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Fazal Ali Commission (States Reorganisation Commission 1953–1955)',
        body: 'To comprehensively address the demand, the Central Government appointed a 3-member **States Reorganisation Commission (SRC)** in December 1953:\n1. **Justice Fazal Ali** (Chairman)\n2. **K.M. Panikkar**\n3. **Hriday Nath Kunzru**\n\n### Core Findings (Submitted Sept 1955):\n• **Accepted Language as Basis:** Acknowledged that linguistic states foster democratic participation and administrative efficiency.\n• **Rejected "One Language, One State":** Refused to create mono-linguistic enclaves that could threaten national integration.\n\n### The 4 Pillars of State Reorganisation:\n1. **Preservation and strengthening of the unity and security of India** (Supreme consideration).\n2. **Linguistic and cultural homogeneity**.\n3. **Financial, economic, and administrative viability**.\n4. **Planning and promotion of the welfare of the people in each State and the nation as a whole**.',
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
        syllabusSection: 'GS Paper II: States Reorganisation Commission (1953–55) Principles and Linguistic Federalism.',
        examNotes: 'UPSC repeatedly tests the 3 members of the Fazal Ali Commission and its 4 foundational principles.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Fazal Ali Commission & Formation of Present Rajasthan.',
        examNotes: 'High yield for K.M. Panikkar (who was also a Rajasthan representative in Constituent Assembly) and the merger of Ajmer-Merwara into Rajasthan (1956).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State-Level Banking Committees.',
        examNotes: 'State reorganisation determined the geographical remit of State Level Bankers’ Committees (SLBC).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Andhra State = 1st linguistic state (Oct 1, 1953; Potti Sreeramulu 56-day fast). Fazal Ali Commission (1953–55: Fazal Ali, Panikkar, Kunzru) accepted language, rejected "One Language, One State", laid 4 principles.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Andhra Trigger:** Potti Sreeramulu’s martyrdom forced first linguistic state in 1953.\n• **Fazal Ali Commission (SRC 1953-55):** Members = Fazal Ali, K.M. Panikkar, H.N. Kunzru.\n• **4 Principles:** National unity/security, linguistic homogeneity, administrative viability, welfare planning.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Fazal Ali Commission successfully reconciled linguistic regional aspirations with national unity, replacing the arbitrary colonial provincial boundaries with culturally organic, democratically accessible administrative units.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T7-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which was the first linguistic State created in independent India in 1953?',
        options: {
          A: 'Gujarat',
          B: 'Andhra State',
          C: 'Maharashtra',
          D: 'Kerala',
        },
        correctAnswer: 'B',
        explanation: 'Andhra State was created on October 1, 1953 for Telugu-speaking people carved out of Madras State, becoming the first linguistic state in India.',
        trapExplanation: 'Gujarat and Maharashtra were created in 1960; Kerala was created in 1956.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T7-03',
    slug: 'states-reorganisation-act-1956-and-historical-evolution-of-indian-states',
    topicSlug: 'reorganisation-of-states',
    topicTitle: 'Reorganisation of States & Zonal Councils',
    topicOrder: 7,
    title: 'States Reorganisation Act 1956 & Evolution of States (1956–2020)',
    shortDefinition: 'The landmark 7th Constitutional Amendment Act and States Reorganisation Act 1956 creating 14 States and 6 UTs, followed by the chronological evolution through 1960 (GJ/MH), 1966 (Haryana), 1972 (NE States), 2000 (CG, UK, JH), 2014 (Telangana), 2019 (J&K UTs), and 2020 (UT merger) leading to 28 States and 8 UTs.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T7-03', 'SEM-T7-04'],
    claims: [
      {
        id: 'CLM-T7-03.1',
        statement: 'The States Reorganisation Act 1956 and the 7th Constitutional Amendment Act 1956 abolished the four-fold Part A, B, C, D classification and established 14 States and 6 Union Territories on November 1, 1956.',
        claimType: 'CONSTITUTIONAL_RESTRUCTURING_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 51 (Printed p. 45)',
      },
      {
        id: 'CLM-T7-03.2',
        statement: 'India’s internal political geography evolved from 14 States in 1956 to currently 28 States and 8 Union Territories following major reorganisation milestones including 2000 (Chhattisgarh, Uttarakhand, Jharkhand), 2014 (Telangana), 2019 (J&K bifurcation into UTs), and 2020 (Dadra & Nagar Haveli and Daman & Diu merger).',
        claimType: 'POLITICAL_GEOGRAPHY_CHRONOLOGY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 52 (Printed p. 46)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The 1956 Baseline: 14 States & 6 Union Territories',
        body: 'On **November 1, 1956**, the **7th Constitutional Amendment Act** and the **States Reorganisation Act, 1956** came into force, creating:\n• **14 States:** Andhra Pradesh, Assam, Bihar, Bombay, Jammu & Kashmir, Kerala, Madhya Pradesh, Madras, Mysore, Orissa, Punjab, **Rajasthan** (merging Ajmer-Merwara, Abu, and Sunel Tappa), Uttar Pradesh, West Bengal.\n• **6 Union Territories:** Andaman & Nicobar Islands, Delhi, Himachal Pradesh, Laccadive/Minicoy/Amindivi Islands, Manipur, Tripura.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'TIMELINE',
        title: 'Chronological Evolution of New States (1960–2020)',
        body: '1. **1960 — Maharashtra & Gujarat (15th State):** Bilingual Bombay State bifurcated into Marathi-speaking Maharashtra and Gujarati-speaking Gujarat.\n2. **1963 — Nagaland (16th State):** Naga Hills and Tuensang area separated from Assam to satisfy tribal aspirations.\n3. **1966 — Haryana (17th State) & Chandigarh UT:** Punjab bifurcated on the recommendation of the **Shah Commission** into Punjabi-speaking Punjab and Hindi-speaking Haryana, with Chandigarh as a shared Union Territory.\n4. **1971 — Himachal Pradesh (18th State):** Elevated from UT to full State.\n5. **1972 — Manipur (19th), Tripura (20th), Meghalaya (21st):** Created under the *North-Eastern Areas (Reorganisation) Act, 1971*.\n6. **1975 — Sikkim (22nd State):** Integrated via the 36th Amendment Act.\n7. **1987 — Mizoram (23rd), Arunachal Pradesh (24th), Goa (25th):** Elevated to full statehood.\n8. **2000 — The Millennial States (Carved under Art 3):**\n   • **Chhattisgarh (26th State — Nov 1, 2000):** Carved out of Madhya Pradesh.\n   • **Uttarakhand (27th State — Nov 9, 2000):** Carved out of Uttar Pradesh (initially named Uttaranchal, renamed 2007).\n   • **Jharkhand (28th State — Nov 15, 2000):** Carved out of southern Bihar.\n9. **2014 — Telangana (29th State — June 2, 2014):** Carved out of Andhra Pradesh under the *Andhra Pradesh Reorganisation Act, 2014*.\n10. **2019 — J&K Reorganisation (Oct 31, 2019):** State of Jammu & Kashmir bifurcated into **UT of Jammu & Kashmir** (with legislature) and **UT of Ladakh** (without legislature).\n11. **2020 — Merger of UTs (Jan 26, 2020):** Dadra & Nagar Haveli and Daman & Diu merged into a single UT.\n\n**Current Architecture (2026):** **28 States and 8 Union Territories**.',
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
        syllabusSection: 'GS Paper II: Reorganisation of States Timeline, 2019 J&K Reorganisation, and 2020 UT Merger.',
        examNotes: 'High frequency for chronological order questions in Prelims (e.g. Haryana 1966 -> HP 1971 -> Meghalaya 1972 -> Sikkim 1975).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Reorganisation of States & Nov 1, 1956 Integration of Rajasthan.',
        examNotes: 'Very high yield for Rajasthan integration completion on Nov 1, 1956 and dates of year 2000 states.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Lead Bank Scheme and District Reorganisation.',
        examNotes: 'New state formation alters Lead Bank assignments.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '1956: 14 States + 6 UTs (7th Amend). Key dates: 1960 (Gujarat 15th), 1963 (Nagaland 16th), 1966 (Haryana 17th), 1971 (HP 18th), 1972 (Manipur/Tripura/Meghalaya), 1975 (Sikkim 22nd), 1987 (Mizoram/Arunachal/Goa), 2000 (CG/UK/JH), 2014 (Telangana). Now: 28 States + 8 UTs.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **1956 Baseline:** 14 States and 6 UTs created by 7th Amendment.\n• **2000 Triad:** Chhattisgarh (Nov 1), Uttarakhand (Nov 9), Jharkhand (Nov 15).\n• **2014–2020:** Telangana created (2014) -> J&K bifurcated into 2 UTs (2019) -> DNH & DD merged (2020).\n• **Current Count:** 28 States & 8 UTs.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The post-1956 reorganisation of Indian states evolved across three distinct waves: first, linguistic assertions in peninsular India (1960–1966); second, ethnic and tribal statehood in the North-East (1971–1987); and third, developmental and administrative decentralization in the Hindi heartland (2000) and Telangana (2014).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T7-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'Arrange the following States in the correct chronological order of their creation:\n1. Haryana\n2. Gujarat\n3. Sikkim\n4. Nagaland',
        options: {
          A: '2 — 4 — 1 — 3',
          B: '4 — 2 — 1 — 3',
          C: '2 — 1 — 4 — 3',
          D: '1 — 2 — 3 — 4',
        },
        correctAnswer: 'A',
        explanation: 'Gujarat was created in 1960 (15th state), Nagaland in 1963 (16th state), Haryana in 1966 (17th state), and Sikkim in 1975 (22nd state). Therefore, the correct chronological sequence is 2 — 4 — 1 — 3.',
        trapExplanation: 'Nagaland (1963) was created before Haryana (1966).',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T7-04',
    slug: 'zonal-councils-and-north-eastern-council-inter-state-cooperative-architecture',
    topicSlug: 'reorganisation-of-states',
    topicTitle: 'Reorganisation of States & Zonal Councils',
    topicOrder: 7,
    title: 'Zonal Councils & North-Eastern Council: Inter-State Cooperative Architecture',
    shortDefinition: 'The statutory framework of Zonal Councils created under Part III of the States Reorganisation Act 1956 and the North-Eastern Council (1971), establishing regional cooperation, linguistic dispute resolution, and economic coordination under the chairmanship of the Union Home Minister.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T7-05'],
    claims: [
      {
        id: 'CLM-T7-04.1',
        statement: 'Zonal Councils are statutory (non-constitutional) advisory bodies established under Part III of the States Reorganisation Act, 1956, dividing India into five zones: Northern, Central, Eastern, Western, and Southern Zonal Councils.',
        claimType: 'STATUTORY_INSTITUTION_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 53 (Printed p. 47)',
      },
      {
        id: 'CLM-T7-04.2',
        statement: 'The Union Home Minister acts as the common Chairman of all Zonal Councils, while the Chief Ministers of member states act as Vice-Chairman by rotation for a term of one year.',
        claimType: 'INSTITUTIONAL_COMPOSITION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 53 (Printed p. 47)',
      },
      {
        id: 'CLM-T7-04.3',
        statement: 'The North-Eastern Council was established under a separate statute—the North-Eastern Council Act, 1971—to address the specialized regional planning, security, and developmental needs of the eight northeastern states (Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, and Sikkim added in 2002).',
        claimType: 'REGIONAL_DEVELOPMENT_STATUTE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 53 (Printed p. 47)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Statutory Regional Cooperation vs Constitutional Bodies',
        body: 'While the **Inter-State Council (Article 263)** is a *constitutional body*, **Zonal Councils** are purely **statutory bodies** established by Parliament under the **States Reorganisation Act, 1956**.\n\nThey were conceptualized by Jawaharlal Nehru to develop a habit of cooperative working among states that were newly divided along linguistic lines, preventing regional friction over river waters, border disputes, linguistic minorities, and inter-state transport.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Composition and Territorial Zones',
        body: '### Five Statutory Zonal Councils (1956 Act):\n1. **Northern Zonal Council:** Haryana, Himachal Pradesh, Punjab, Rajasthan, NCT of Delhi, UT of Jammu & Kashmir, UT of Ladakh, UT of Chandigarh (HQ: New Delhi).\n2. **Central Zonal Council:** Chhattisgarh, Madhya Pradesh, Uttarakhand, Uttar Pradesh (HQ: Prayagraj / Allahabad).\n3. **Eastern Zonal Council:** Bihar, Jharkhand, Odisha, West Bengal (HQ: Kolkata).\n4. **Western Zonal Council:** Goa, Gujarat, Maharashtra, UT of Dadra & Nagar Haveli and Daman & Diu (HQ: Mumbai).\n5. **Southern Zonal Council:** Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana, UT of Puducherry (HQ: Chennai).\n\n### Institutional Leadership:\n• **Chairman:** **Union Home Minister** (acts as common Chairman for all 5 Zonal Councils).\n• **Vice-Chairman:** **Chief Ministers** of the member States in the zone, holding office by rotation for **one year** at a time.\n• **Members:** Chief Minister and two other Ministers nominated by the Governor from each state, and two members from each Union Territory.\n• **Advisors (Without Voting Rights):** One nominee from NITI Aayog, Chief Secretaries of member states, and Development Commissioners.\n\n### The North-Eastern Council (NEC — 1971 Act):\n• Set up under the *North-Eastern Council Act, 1971* (not the 1956 Act).\n• Covers the **8 North-Eastern States**: Assam, Meghalaya, Manipur, Nagaland, Tripura, Arunachal Pradesh, Mizoram, and **Sikkim** (added via 2002 amendment).\n• Functions as a regional planning and infrastructure development agency (HQ: Shillong).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Zonal Councils vs Inter-State Council Matrix',
        body: '| Parameter | Zonal Councils | Inter-State Council |\n| :--- | :--- | :--- |\n| **Constitutional Basis** | **Statutory** (States Reorganisation Act 1956 & NEC Act 1971) | **Constitutional** (Article 263) |\n| **Establishment** | Enacted by Parliament in 1956 | Established by Presidential Order in 1990 (Sarkaria Commission recommendation) |\n| **Chairman** | **Union Home Minister** | **Prime Minister of India** |\n| **Scope** | Regional focus (group of 4–6 neighboring states) | All-India national focus (all 28 States & UTs with assemblies) |\n| **Decision Nature** | Purely advisory recommendations | Advisory recommendations |',
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
        syllabusSection: 'GS Paper II: Statutory vs Constitutional Bodies; Inter-State Dispute Mechanisms.',
        examNotes: 'Classic UPSC Prelims trap: Zonal Councils are statutory (NOT constitutional under Art 263) and chaired by Home Minister (NOT Prime Minister).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Northern Zonal Council and Inter-State Cooperation.',
        examNotes: 'High yield for Rajasthan membership in the Northern Zonal Council (HQ: New Delhi).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Regional Infrastructure Schemes.',
        examNotes: 'NEC funding coordinates regional transport and banking financial inclusion projects in Northeast.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Zonal Councils = Statutory (1956 Act; 5 zones). Chairman = Union Home Minister. Vice-Chairman = CMs by 1-yr rotation. North-Eastern Council = Separate 1971 Act (8 states incl. Sikkim 2002). Non-constitutional advisory bodies.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Statutory Status:** Created by States Reorganisation Act 1956 (NOT Article 263).\n• **Leadership:** Union Home Minister is Chairman; rotating Chief Minister is Vice-Chairman.\n• **5 Councils + NEC:** North, Central, East, West, South + separate North-Eastern Council (1971 Act).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Zonal Councils provide a regional intermediate platform between state-level autonomy and national-level coordination, enabling neighboring states to resolve localized trans-boundary frictions (water sharing, power grids, police coordination) without escalating them to the Supreme Court or Parliament.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T7-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements regarding Zonal Councils in India is INCORRECT?',
        options: {
          A: 'Zonal Councils are constitutional bodies established under Article 263 of the Constitution.',
          B: 'The Union Home Minister is the common Chairman of all the five Zonal Councils.',
          C: 'The Chief Ministers of the member States act as Vice-Chairman by rotation for a period of one year.',
          D: 'The North-Eastern Council was established under a separate Act of Parliament in 1971.',
        },
        correctAnswer: 'A',
        explanation: 'Statement A is incorrect. Zonal Councils are statutory bodies created by the States Reorganisation Act, 1956, not constitutional bodies under Article 263 (which establishes the Inter-State Council).',
        trapExplanation: 'Zonal Councils are frequently confused with the constitutional Inter-State Council.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 8: PART II — CITIZENSHIP (6 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T8-01',
    slug: 'citizenship-meaning-civil-rights-and-constitutional-articles-5-to-11',
    topicSlug: 'part-2-citizenship',
    topicTitle: 'Part II: Citizenship (Articles 5 to 11)',
    topicOrder: 8,
    title: 'Citizenship: Meaning, Civil Rights & Constitutional Articles (5–11)',
    shortDefinition: 'The legal and political meaning of citizenship, exclusive constitutional rights and privileges reserved for citizens (Arts 15, 16, 19, 29, 30, 326), and the transitional constitutional provisions governing citizenship at the commencement of the Constitution (Articles 5 to 11).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T8-01', 'SEM-T8-02'],
    claims: [
      {
        id: 'CLM-T8-01.1',
        statement: 'Citizenship confers full and equal membership in the Indian political community, granting fundamental rights exclusively reserved for citizens (Articles 15, 16, 19, 29, 30), the right to vote (Article 326), the right to contest elections, and eligibility to hold top constitutional offices.',
        claimType: 'LEGAL_STATUS_PRIVILEGES_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 54 (Printed p. 48)',
      },
      {
        id: 'CLM-T8-01.2',
        statement: 'Articles 5 to 11 in Part II of the Constitution only identify who became an Indian citizen at the commencement of the Constitution on January 26, 1950, leaving the entire permanent law of citizenship to the plenary legislative power of Parliament under Article 11.',
        claimType: 'CONSTITUTIONAL_SCOPE_LIMITATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 54 (Printed p. 48)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Citizens vs Aliens: Exclusive Constitutional Rights',
        body: 'A **Citizen** is a full member of the Indian State owing allegiance to it and enjoying all civil and political rights. **Aliens** (citizens of other states) enjoy certain basic human rights under Article 21 and 14, but are excluded from political participation.\n\n### Rights Guaranteed ONLY to Indian Citizens (Exam High-Yield):\n1. **Article 15:** Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.\n2. **Article 16:** Equality of opportunity in matters of public employment.\n3. **Article 19:** Six fundamental democratic freedoms (speech, assembly, association, movement, residence, profession).\n4. **Articles 29 & 30:** Cultural and educational rights of minorities.\n5. **Article 326:** Right to vote in elections to the Lok Sabha and State Legislative Assemblies.\n6. **Right to Contest:** Eligibility to become MP, MLA, MLC.\n7. **Constitutional Offices:** Eligibility to hold the office of President (Art 58), Vice-President (Art 66), Supreme Court Judge (Art 124), High Court Judge (Art 217), Governor (Art 157), Attorney General (Art 76), Advocate General (Art 165).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Constitutional Provisions at Commencement (Articles 5–11)',
        body: 'Articles 5 to 11 dealt only with the initial citizenship snapshot on **January 26, 1950**:\n• **Article 5 (Citizenship by Domicile):** Person domiciled in India who was (a) born in India, OR (b) either parent born in India, OR (c) ordinarily resident for 5+ years before commencement.\n• **Article 6 (Migrants from Pakistan):** Persons who migrated from Pakistan before **July 19, 1948** (ordinarily resident) or after July 19, 1948 (registered after 6 months residence).\n• **Article 7 (Migrants to Pakistan returning):** Persons who migrated to Pakistan after March 1, 1947 but returned to India under a permit for resettlement.\n• **Article 8 (Persons of Indian Origin Abroad):** Persons residing outside undivided India whose parents/grandparents were born in India, registered by Indian diplomatic/consular representatives.\n• **Article 9 (Voluntary Foreign Citizenship):** If a person voluntarily acquires foreign citizenship, **Indian citizenship terminates automatically** (Single Citizenship rule).\n• **Article 10 (Continuance of Rights):** Every citizen continues to be a citizen, subject to any law made by Parliament.\n• **Article 11 (Parliament Plenary Power):** Parliament has the supreme, unrestricted constitutional power to regulate the acquisition, termination, and all other matters relating to citizenship.',
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
        syllabusSection: 'GS Paper II: Part II Provisions (Arts 5–11) & Fundamental Rights exclusive to Citizens.',
        examNotes: 'UPSC Prelims repeatedly tests which Fundamental Rights are available only to citizens (15, 16, 19, 29, 30).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Part II Citizenship Articles and Exclusive Citizen Rights.',
        examNotes: 'Frequent 20-word definitions of Article 9 (single citizenship termination) and Article 11 (Parliament power).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'KYC Norms and Citizenship Verification.',
        examNotes: 'Citizenship status dictates banking account types (Resident vs NRE/NRO).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rights ONLY for Citizens: Arts 15, 16, 19, 29, 30 + voting (326) + holding public offices. Arts 5-11 = Jan 26, 1950 snapshot. Art 9 = Single Citizenship (auto-termination on foreign citizenship). Art 11 = Parliament supreme power.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Exclusive Citizen Rights:** 15, 16, 19, 29, 30 + voting + constitutional posts.\n• **Constitutional Scheme (5-11):** Art 5 (Domicile), Art 6 (Pakistan migrants), Art 7 (Returnees), Art 8 (PIOs abroad), Art 9 (No dual citizenship), Art 11 (Parliament power to legislate).\n• **Transitional Character:** Constitution did not lay down permanent citizenship acquisition rules; left it to Parliament (Citizenship Act 1955).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The framers deliberately avoided freezing permanent citizenship rules into the Constitution due to the unprecedented fluidity of partition migrations and diaspora movements, using Article 11 as an enabling clause that delegated complete statutory authority to Parliament.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T8-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following Fundamental Rights under Part III of the Indian Constitution are available ONLY to citizens of India and NOT to foreigners?',
        options: {
          A: 'Articles 14, 20, 21, 21A',
          B: 'Articles 15, 16, 19, 29, 30',
          C: 'Articles 20, 21, 22, 25',
          D: 'Articles 14, 19, 21, 32',
        },
        correctAnswer: 'B',
        explanation: 'Articles 15, 16, 19, 29, and 30 are exclusively available to Indian citizens. Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28 are available to all persons (citizens and non-citizens alike, except enemy aliens for Art 22).',
        trapExplanation: 'Article 14 and Article 21 apply to "any person", not just citizens.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T8-02',
    slug: 'acquisition-of-indian-citizenship-under-citizenship-act-1955',
    topicSlug: 'part-2-citizenship',
    topicTitle: 'Part II: Citizenship (Articles 5 to 11)',
    topicOrder: 8,
    title: 'Acquisition of Indian Citizenship under Citizenship Act 1955',
    shortDefinition: 'The five statutory pathways for acquiring Indian citizenship under the Citizenship Act 1955 (Birth, Descent, Registration, Naturalisation, and Incorporation of Territory) and their evolving legal criteria through landmark amendments (1986, 1992, 2003, 2015, 2019).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T8-03', 'SEM-T8-04'],
    claims: [
      {
        id: 'CLM-T8-02.1',
        statement: 'Under the Citizenship Act 1955 enacted by Parliament pursuant to Article 11, Indian citizenship can be acquired through five exhaustive modes: (1) Birth, (2) Descent, (3) Registration, (4) Naturalisation, and (5) Incorporation of Territory.',
        claimType: 'STATUTORY_ACQUISITION_FRAMEWORK',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 55 (Printed p. 49)',
      },
      {
        id: 'CLM-T8-02.2',
        statement: 'Citizenship by birth evolved from pure jus soli (territorial birth between 1950 and 1987) to qualified jus sanguinis via the 1986 Amendment (requiring at least one parent to be an Indian citizen) and the 2003 Amendment (requiring both parents to be citizens, or one citizen and the other not an illegal migrant at the time of birth).',
        claimType: 'STATUTORY_EVOLUTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 56 (Printed p. 50)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The 5 Modes of Acquiring Indian Citizenship (Section 3 to 7)',
        body: 'The **Citizenship Act, 1955** establishes five statutory routes to Indian citizenship:\n1. **By Birth (*Jus Soli* — Section 3)**\n2. **By Descent (*Jus Sanguinis* — Section 4)**\n3. **By Registration (Section 5)**\n4. **By Naturalisation (Section 6)**\n5. **By Incorporation of Territory (Section 7)**',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Detailed Criteria for the 5 Acquisition Pathways',
        body: '### 1. By Birth (Section 3 — Evolution of Law):\n• **Jan 26, 1950 to July 1, 1987:** Pure *Jus Soli* (born in India = automatic citizen, irrespective of parents’ nationality).\n• **July 1, 1987 to Dec 3, 2004:** Born in India + **at least one parent must be an Indian citizen** at the time of birth (1986 Amendment).\n• **After Dec 3, 2004 (2003 Amendment):** Born in India + **both parents are citizens of India**, OR **one parent is a citizen and the other is NOT an illegal migrant** at birth.\n\n### 2. By Descent (Section 4 — Born Outside India):\n• Born outside India on or after Jan 26, 1950 if father was an Indian citizen.\n• **1992 Amendment (Gender Equality):** Either **father OR mother** was an Indian citizen at the time of birth.\n• **Post-2004:** Birth must be registered at an Indian consulate within **1 year** with an undertaking that the minor does not hold a foreign passport.\n\n### 3. By Registration (Section 5 — Prescribed Categories):\n• Persons of Indian Origin (PIO) ordinarily resident in India for **7 years** before applying.\n• Persons married to an Indian citizen and resident in India for **7 years**.\n• Minor children of Indian citizens.\n• Persons of full age whose parents were registered as citizens of independent India.\n\n### 4. By Naturalisation (Section 6 — Foreigners):\n• Qualifications: Not an illegal migrant; renounces foreign citizenship; resident in India for **12 continuous months** preceding application, plus **11 years aggregate residence out of the preceding 14 years** (shortened to 5 years for CAA 2019 beneficiaries); good character; adequate knowledge of an **Eighth Schedule language**; intends to reside in India.\n\n### 5. By Incorporation of Territory (Section 7):\n• If foreign territory becomes part of India, the Central Government specifies by notification the persons who become citizens of India (e.g. Goa 1962, Sikkim 1975, Bangladesh enclaves 2015).',
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
        syllabusSection: 'GS Paper II: Citizenship Act 1955 Acquisition Modes and 1986/2003/2019 Amendments.',
        examNotes: 'UPSC Prelims repeatedly tests the evolution of citizenship by birth and the 8th Schedule language requirement for naturalisation.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Modes of Acquisition of Citizenship.',
        examNotes: 'High frequency for 50-word and 100-word questions asking for the 5 modes of acquisition.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Customer Identification Procedures (CIP).',
        examNotes: 'Proof of citizenship acquisition determines statutory banking documentation.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '5 Acquisition Modes: Birth (Jus Soli -> qualified 1986/2003), Descent (father or mother post-1992), Registration (PIO/Spouse 7 yrs), Naturalisation (11+1 yrs, 8th Sched lang), Incorporation of Territory (Govt notification).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Birth:** Post-2004 requires both parents citizens OR one citizen + other not illegal migrant.\n• **Descent:** Either parent Indian citizen (1992 gender equality).\n• **Registration:** 7 years residence for PIOs and foreign spouses.\n• **Naturalisation:** 12 years aggregate residence + 8th Schedule language proficiency.\n• **Incorporation:** Automatic citizenship upon territorial merger.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The legislative evolution of the 1955 Act highlights a structural transition from inclusive universal birthright citizenship (*jus soli*) toward restrictive ancestry and lawful presence standards (*jus sanguinis*), driven by security concerns over illegal migration and cross-border demographic shifts.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T8-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under the Citizenship Act 1955, which of the following is a mandatory qualification for acquiring Indian citizenship by Naturalisation?',
        options: {
          A: 'The applicant must have been born in undivided India.',
          B: 'The applicant must possess adequate knowledge of at least one language specified in the Eighth Schedule of the Constitution.',
          C: 'The applicant must be married to an Indian citizen for at least 7 years.',
          D: 'The applicant must own immovable agricultural property in India.',
        },
        correctAnswer: 'B',
        explanation: 'Under the Third Schedule of the Citizenship Act 1955, an applicant for naturalisation must have an adequate knowledge of at least one language specified in the Eighth Schedule to the Constitution of India.',
        trapExplanation: 'Undivided India birth relates to Registration (PIO); marriage is for Registration, not Naturalisation.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
  {
    id: 'CON-T8-03',
    slug: 'loss-of-indian-citizenship-renunciation-termination-and-deprivation',
    topicSlug: 'part-2-citizenship',
    topicTitle: 'Part II: Citizenship (Articles 5 to 11)',
    topicOrder: 8,
    title: 'Loss of Indian Citizenship: Renunciation, Termination & Deprivation',
    shortDefinition: 'The three legal mechanisms for losing Indian citizenship under Sections 8, 9, and 10 of the Citizenship Act 1955: voluntary Renunciation, automatic Termination upon acquiring foreign nationality, and compulsory Deprivation by the Central Government on grounds of fraud, disloyalty, or treason.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T8-05'],
    claims: [
      {
        id: 'CLM-T8-03.1',
        statement: 'Under the Citizenship Act 1955, Indian citizenship is lost through three specific modes: (1) Renunciation (Section 8 — voluntary surrender by an adult), (2) Termination (Section 9 — automatic forfeiture upon acquiring foreign nationality), and (3) Deprivation (Section 10 — compulsory cancellation by Central Government order).',
        claimType: 'STATUTORY_TERMINATION_FRAMEWORK',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 57 (Printed p. 51)',
      },
      {
        id: 'CLM-T8-03.2',
        statement: 'Deprivation under Section 10 is an involuntary loss of citizenship applicable to citizens acquired by registration or naturalisation on specific grounds: fraud, disloyalty to the Constitution, trading with an enemy during war, sentencing to 2+ years imprisonment within 5 years of naturalisation, or 7 years continuous ordinary residence abroad.',
        claimType: 'STATUTORY_DEPRIVATION_GROUNDS',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 57 (Printed p. 51)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The 3 Ways an Indian Citizen Loses Citizenship',
        body: 'The **Citizenship Act, 1955** prescribes three exhaustive legal mechanisms for the loss of Indian citizenship:\n1. **By Renunciation (Voluntary Act)**\n2. **By Termination (Operation of Law)**\n3. **By Deprivation (Executive Order / Penalty)**',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Detailed Breakdown of the 3 Loss Mechanisms',
        body: '### 1. By Renunciation (Section 8 — Voluntary Surrender):\n• Any Indian citizen of full age and capacity who is also a citizen/national of another country can make a formal declaration renouncing Indian citizenship.\n• **Wartime Rule:** The Central Government can withhold registration of renunciation if made during a war in which India is engaged.\n• **Effect on Minor Children:** When a person renounces citizenship, **every minor child of that person also ceases to be an Indian citizen**. However, such a child may resume Indian citizenship within **one year of attaining full age (18 years)**.\n\n### 2. By Termination (Section 9 — Automatic Loss):\n• If an Indian citizen **voluntarily acquires the citizenship of another country**, their Indian citizenship **automatically terminates** by operation of law.\n• Does not apply during wartime without the central government’s explicit approval.\n\n### 3. By Deprivation (Section 10 — Compulsory Cancellation):\n• Applicable to citizens who acquired citizenship by **Registration or Naturalisation** (or under Article 5(c) / Article 6).\n• **Statutory Grounds for Deprivation:**\n  1. Obtained citizenship through **fraud, false representation, or concealment of material facts**.\n  2. Shown **disloyalty or disaffection towards the Constitution of India** by act or speech.\n  3. Unlawfully traded or communicated with an enemy during war.\n  4. Within **5 years** of registration/naturalisation, sentenced to imprisonment in any country for **not less than 2 years**.\n  5. Continuously ordinarily resident out of India for **7 continuous years** (without being a student, in government service, or registering annually at an Indian consulate).',
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
        syllabusSection: 'GS Paper II: Loss of Citizenship Mechanisms (Renunciation vs Termination vs Deprivation).',
        examNotes: 'UPSC Prelims tests the effect of renunciation on minor children and the specific grounds for deprivation.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Loss of Citizenship Grounds.',
        examNotes: 'High frequency for 20-word questions distinguishing Termination from Deprivation.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Foreign Account Tax Compliance Act (FATCA) & Renunciation.',
        examNotes: 'Renunciation of Indian citizenship triggers mandatory account reclassification from Resident to NRO/NRE.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Loss of Citizenship: 1. Renunciation (Voluntary; minor child loses citizenship, can resume at 18). 2. Termination (Automatic on acquiring foreign citizenship). 3. Deprivation (Compulsory for fraud, disloyalty, wartime treason, 2 yrs jail within 5 yrs, 7 yrs abroad).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Renunciation:** Voluntary surrender by adult (minor child also loses, can resume at 18).\n• **Termination:** Automatic by operation of law upon acquiring foreign nationality.\n• **Deprivation:** Government cancellation for fraud, disaffection to Constitution, aiding enemy, 2 yrs jail within 5 yrs, or 7 yrs abroad.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Deprivation of citizenship represents an extraordinary administrative sanction designed to protect the sovereign loyalty and integrity of the constitutional compact, applicable strictly to naturalized/registered citizens under robust procedural safeguards.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T8-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'When a person renounces Indian citizenship under Section 8 of the Citizenship Act 1955, what happens to the citizenship of their minor child?',
        options: {
          A: 'The minor child retains Indian citizenship automatically.',
          B: 'The minor child also loses Indian citizenship, but may resume it within one year of attaining 18 years of age.',
          C: 'The minor child becomes a stateless person permanently.',
          D: 'The minor child retains citizenship only if the mother continues to be an Indian citizen.',
        },
        correctAnswer: 'B',
        explanation: 'Section 8(2) of the Citizenship Act 1955 provides that upon renunciation by an adult, every minor child also ceases to be an Indian citizen, but may resume Indian citizenship by making a declaration within one year after attaining full age (18 years).',
        trapExplanation: 'The minor child does not permanently lose citizenship; the law provides a 1-year window upon turning 18 to reclaim it.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
  {
    id: 'CON-T8-04',
    slug: 'single-citizenship-vs-dual-citizenship-and-constitutional-unity',
    topicSlug: 'part-2-citizenship',
    topicTitle: 'Part II: Citizenship (Articles 5 to 11)',
    topicOrder: 8,
    title: 'Single Citizenship vs Dual Citizenship & Constitutional Unity',
    shortDefinition: 'The Indian constitutional doctrine of Single Citizenship (Article 9) establishing undivided allegiance to the Union without separate state citizenship, contrasting with dual citizenship federal models like the United States and Switzerland.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T8-05'],
    claims: [
      {
        id: 'CLM-T8-04.1',
        statement: 'The Indian Constitution establishes a system of Single Citizenship for the entire country, meaning an Indian citizen owes allegiance only to the Union of India and holds no separate state-level citizenship, unlike dual-citizenship federal systems like the United States and Switzerland.',
        claimType: 'CONSTITUTIONAL_FEDERATION_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 57 (Printed p. 51)',
      },
      {
        id: 'CLM-T8-04.2',
        statement: 'Single Citizenship ensures that all Indian citizens enjoy identical fundamental civil and political rights across all states and territories, subject only to reasonable constitutional exceptions such as tribal land protections under the Fifth and Sixth Schedules and local residential employment criteria under Article 16(3).',
        claimType: 'CONSTITUTIONAL_EQUALITY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 57 (Printed p. 51)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'One Nation, One Citizenship',
        body: 'Although the Indian Constitution established a dual polity (Union Government and State Governments), it deliberately created **only ONE single citizenship** — **Indian Citizenship**.\n\nThere is no such thing as "Rajasthan Citizenship", "Maharashtra Citizenship", or "Tamil Nadu Citizenship". Every citizen enjoys uniform civil and political rights across the length and breadth of India.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Single Citizenship (India) vs Dual Citizenship (USA)',
        body: '| Parameter | India (Single Citizenship) | United States (Dual Citizenship) |\n| :--- | :--- | :--- |\n| **Citizenship Levels** | **Single Level:** Citizen of India only | **Dual Level:** Citizen of USA **and** Citizen of the specific State (e.g. California, Texas) |\n| **Legal System** | Single integrated judicial and legal system | Dual legal system (Federal law + separate State laws) |\n| **Inter-State Discrimination** | Prohibited (Art 15): No state can discriminate against citizens from other states in voting or basic civil rights | States can favor their own citizens in certain civil rights, state voting, and state university tuition |\n| **Allegiance** | Undivided single allegiance to the Republic of India | Dual allegiance to the National Union and the State Government |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MISCONCEPTION_SHIELD',
        title: 'Exceptions to Universal Uniformity under Single Citizenship',
        body: 'While Single Citizenship guarantees equality of rights across India, the Constitution provides narrow, protective exceptions:\n1. **Article 16(3):** Parliament (and **only Parliament**, not State Legislatures) may prescribe **residence** within a State/UT as a qualification for certain classes of public employment.\n2. **Article 19(5):** Free movement and residence can be reasonably restricted in the interest of protecting the culture, land, and economic autonomy of **Scheduled Tribes** (e.g. Inner Line Permit in NE states, 5th/6th Schedules).\n3. **State Educational Fee Concessions:** States may charge lower tuition fees for domiciled residents in state universities (held valid by Supreme Court in *D.P. Joshi v. State of Bharat 1955*, ruling that place of residence/domicile is distinct from place of birth).',
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
        syllabusSection: 'GS Paper II: Federal Features vs Unitary Bias — Single Citizenship.',
        examNotes: 'UPSC Prelims 2021 specifically asked: "In India, there is only one citizenship and one domicile."',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Salient Features of the Indian Constitution — Single Citizenship.',
        examNotes: 'Frequent question on unitary features of the Indian federal constitution.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Unified Financial Regulations.',
        examNotes: 'Single citizenship enables pan-India banking operations without interstate financial passporting.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'India = Single Citizenship (Art 9; no state citizenship; contrast with USA dual citizenship). Exceptions: Art 16(3) Parliamentary residence rule, tribal area protections (19(5)), state domicile college fees (D.P. Joshi).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Core Feature:** Dual polity with Single Citizenship to foster national integration.\n• **India vs USA:** US has dual citizenship (federal + state); India has single undivided citizenship.\n• **Exceptions:** Art 16(3) residence for jobs (Parliament only); tribal land protections.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Single citizenship serves as the essential constitutional glue of the Indian federation, ensuring that despite deep linguistic, cultural, and religious regional divisions, all citizens stand before the state as equal members of a singular sovereign fraternity.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T8-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding citizenship in India:\n1. In India, there is only one citizenship and one domicile.\n2. A citizen by birth only can become the Head of State.\n3. A foreigner once granted citizenship cannot be deprived of it under any circumstances.\nWhich of the statements given above is/are correct?',
        options: {
          A: '1 only',
          B: '2 only',
          C: '1 and 3 only',
          D: '2 and 3 only',
        },
        correctAnswer: 'A',
        explanation: 'Statement 1 is correct (India has single citizenship and single domicile). Statement 2 is incorrect (in India, both a citizen by birth and a naturalised citizen are eligible to become President/Head of State; unlike USA where only natural-born citizens can become President). Statement 3 is incorrect (naturalised citizens can be deprived of citizenship under Section 10).',
        trapExplanation: 'In India, naturalised citizens CAN become President (unlike the US Constitution).',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T8-05',
    slug: 'overseas-citizen-of-india-oci-scheme-and-rights-framework',
    topicSlug: 'part-2-citizenship',
    topicTitle: 'Part II: Citizenship (Articles 5 to 11)',
    topicOrder: 8,
    title: 'Overseas Citizen of India (OCI) Scheme & Rights Framework',
    shortDefinition: 'The statutory Overseas Citizen of India (OCI) cardholder scheme instituted under the L.M. Singhvi Committee recommendations, the 2015 merger of PIO into OCI, the extensive economic/educational rights granted under Section 7B, the strict denial of political/constitutional rights under Section 7B(2), and the NRI vs OCI vs PIO matrix.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T8-06', 'SEM-T8-07', 'SEM-T8-08'],
    claims: [
      {
        id: 'CLM-T8-05.1',
        statement: 'The Overseas Citizen of India (OCI) scheme was introduced by the Citizenship (Amendment) Acts of 2003 and 2005 based on the L.M. Singhvi High-Level Committee on the Indian Diaspora, and further streamlined by the Citizenship (Amendment) Act 2015 which merged the Person of Indian Origin (PIO) card scheme into the OCI card scheme (effective January 9, 2015).',
        claimType: 'STATUTORY_DIASPORA_FRAMEWORK',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 58 (Printed p. 52)',
      },
      {
        id: 'CLM-T8-05.2',
        statement: 'Under Section 7B(2) of the Citizenship Act 1955, an OCI cardholder is strictly barred from political and constitutional rights: they cannot vote (RPA 1950), cannot contest elections to Parliament or State Legislatures (RPA 1951), cannot claim equality of opportunity in public employment (Article 16), and cannot hold constitutional posts (President, Vice-President, Supreme Court or High Court Judges).',
        claimType: 'STATUTORY_RIGHTS_EXCLUSION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 59 (Printed p. 53)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'What is OCI? (Immigration Status, NOT Dual Citizenship)',
        body: 'The **Overseas Citizen of India (OCI)** scheme is **NOT dual citizenship**. An OCI cardholder is a **foreign citizen** possessing a foreign passport who enjoys a privileged statutory immigration and economic status in India due to Indian ancestry.\n\n### Historical Genesis:\n• **L.M. Singhvi Committee (2000–2002):** Recommended creating a special overseas citizenship status to connect the global Indian diaspora with national development.\n• **Citizenship (Amendment) Act, 2003 & 2005:** Established the statutory OCI framework.\n• **2015 Merger:** The **Person of Indian Origin (PIO)** scheme was formally discontinued and merged into the OCI card scheme on **January 9, 2015** (Pravasi Bharatiya Divas).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Rights Granted (Section 7B) vs Rights Denied (Section 7B(2))',
        body: '### Rights GRANTED to OCI Cardholders (Section 7B):\n1. **Lifelong Multiple-Entry Visa:** Can enter, visit, and stay in India indefinitely without a visa or police reporting (exemption from FRRO registration for any length of stay).\n2. **Parity with NRIs in Economic/Financial Fields:** Equal treatment in inter-country adoption, domestic airfares, entry fees to national monuments/parks.\n3. **Property Ownership:** Can purchase and hold residential and commercial real estate in India (**except agricultural land, farmhouses, and plantation properties**).\n4. **Professional Pursuit:** Can pursue professions in India as doctors, dentists, nurses, advocates, architects, and chartered accountants.\n\n### Rights STRICTLY DENIED to OCI Cardholders (Section 7B(2)):\n1. **No Equality of Public Employment:** Cannot claim Article 16 rights for government jobs.\n2. **No Voting Rights:** Cannot register as a voter under the Representation of the People Act, 1950.\n3. **No Contesting Elections:** Cannot become a Member of Parliament (Lok Sabha/Rajya Sabha) or State Legislature (Assembly/Council) under RPA 1951.\n4. **No Constitutional Posts:** Ineligible to become President (Art 58), Vice-President (Art 66), Judge of the Supreme Court (Art 124), Judge of a High Court (Art 217), Governor (Art 157), Attorney General (Art 76), or Advocate General (Art 165).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Deep Comparison: NRI vs OCI vs PIO',
        body: '| Parameter | Non-Resident Indian (NRI) | Overseas Citizen of India (OCI) | Person of Indian Origin (PIO) |\n| :--- | :--- | :--- | :--- |\n| **Legal Status** | **Indian Citizen** residing abroad | **Foreign Citizen** with Indian roots | **Discontinued Scheme** (Merged into OCI in 2015) |\n| **Passport** | **Indian Passport** | **Foreign Passport** + OCI Card | Foreign Passport + PIO Card (Invalid post-2015) |\n| **Voting Rights** | **YES** (Enrolled in constituency) | **NO** | **NO** |\n| **Contest Elections** | **YES** | **NO** | **NO** |\n| **Government Jobs** | **Eligible** (Subject to post rules) | **Ineligible** (Except permitted posts) | **Ineligible** |\n| **Agricultural Land** | Can inherit / restricted purchase | **Strictly prohibited** (No farm/plantation land) | Strictly prohibited |\n| **Constitutional Posts** | **Eligible** | **Ineligible** | **Ineligible** |',
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
        syllabusSection: 'GS Paper II: Indian Diaspora, OCI Scheme, and Constitutional Exclusions.',
        examNotes: 'UPSC Prelims frequently asks what rights an OCI cardholder does NOT possess (voting, constitutional posts, agricultural land).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: NRI vs OCI Comparison & L.M. Singhvi Committee.',
        examNotes: 'High frequency for 50-word comparison tables between NRI and OCI.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'FEMA Guidelines for NRIs and OCIs; NRE/NRO/FCNR Accounts.',
        examNotes: 'OCIs and NRIs have identical property investment and foreign remittance entitlements under FEMA.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'OCI = Foreign citizen with Indian ancestry (L.M. Singhvi Comm; 2015 PIO merged into OCI). Rights: Lifelong visa, parity with NRIs in economics/education. Denied: Voting (RPA 1950), contesting polls (RPA 1951), Art 16 govt jobs, constitutional posts, agricultural land.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **OCI Status:** Not dual citizenship; foreign national with lifelong visa.\n• **Rights Granted:** Multiple-entry lifelong visa, commercial property purchase, NRI parity in tuition.\n• **Rights Denied:** No voting, no contesting elections, no constitutional posts (President/Judges), no agricultural land, no Article 16 jobs.\n• **NRI vs OCI:** NRI is an Indian citizen with voting rights; OCI is a foreign citizen without voting rights.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The OCI architecture represents an innovative balance between diaspora economic engagement and constitutional sovereignty, granting comprehensive economic and residency rights to overseas Indians while preserving core political sovereignty exclusively for full citizens.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T8-05-01',
        type: 'CONCEPT_CHECK',
        stem: 'An Overseas Citizen of India (OCI) cardholder is entitled to which of the following rights in India?',
        options: {
          A: 'Right to vote in General Elections under the Representation of the People Act, 1950.',
          B: 'Right to be appointed as a Judge of a High Court under Article 217.',
          C: 'Exemption from registration with the Foreigners Regional Registration Officer (FRRO) for any length of stay in India.',
          D: 'Right to purchase agricultural land and plantation properties in India.',
        },
        correctAnswer: 'C',
        explanation: 'OCI cardholders enjoy a multiple-entry, multi-purpose lifelong visa and are exempt from registration with the local police / FRRO for any length of stay in India. They are barred from voting, holding judicial posts, and purchasing agricultural land.',
        trapExplanation: 'Voting, judicial appointment, and agricultural land purchases are strictly prohibited for OCIs under Section 7B(2).',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T8-06',
    slug: 'citizenship-policy-renunciation-trends-and-dual-citizenship-debate',
    topicSlug: 'part-2-citizenship',
    topicTitle: 'Part II: Citizenship (Articles 5 to 11)',
    topicOrder: 8,
    title: 'Contemporary Citizenship Dynamics: Renunciation Trends & Policy Debate',
    shortDefinition: 'The contemporary socio-economic and policy dimensions of Indian citizenship: the renunciation of citizenship by over 1.6 million Indians since 2011, passport power rankings, economic diplomacy, Golden Visas, and the cost-benefit analysis of permitting conditional dual citizenship.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T8-09'],
    claims: [
      {
        id: 'CLM-T8-06.1',
        statement: 'Between 2011 and 2023, over 1.6 million Indians formally renounced their Indian citizenship (with a record 225,620 in 2023 alone), primarily seeking citizenship in the United States, Canada, Australia, and Western European nations.',
        claimType: 'EMPIRICAL_DEMOGRAPHIC_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 61 (Printed p. 55)',
      },
      {
        id: 'CLM-T8-06.2',
        statement: 'Over 85 countries worldwide permit dual citizenship, prompting a growing policy debate in India on whether to transition from strict Single Citizenship to conditional dual citizenship to retain diaspora capital, technological talent, and global soft power while safeguarding national security.',
        claimType: 'POLICY_ANALYSIS_ARGUMENT',
        epistemicLevel: 'INTERPRETATION',
        confidence: 'HIGH',
        evidenceLocator: 'PDF Page 61 (Printed p. 55)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Great Indian Passport Renunciation Wave',
        body: 'In recent years, the rigidity of India’s single-citizenship rule has intersected with unprecedented global mobility. Government data presented in Parliament revealed that **more than 1.6 million Indians have renounced their citizenship since 2011**, with 2023 witnessing an all-time high of **225,620 renunciations**.\n\nThe vast majority of these individuals represent high-skilled professionals, entrepreneurs, and students settling in the US, Canada, the UK, Australia, and Germany.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Drivers of Renunciation & The Global Landscape',
        body: '### Why Do Skilled Indians Give Up Citizenship?\n1. **Single Citizenship Constraint:** Because India does not allow dual nationality, an Indian citizen who qualifies for a foreign passport must compulsorily surrender their Indian passport under Article 9 and Section 9.\n2. **Passport Power & Global Mobility:** The Indian passport ranks around 80th globally (providing visa-free/visa-on-arrival access to ~62 countries), whereas passports of Western democracies offer visa-free travel to 180+ destinations.\n3. **Economic and Social Integration:** Long-term social security benefits, ease of doing business, and political participation in destination countries.\n4. **Rise of Global Investment Migration:** Over 30 nations offer residency-by-investment and "Golden Visas" (e.g. UAE, Portugal, Greece), treating citizenship as an instrument of economic diplomacy.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Cost-Benefit Analysis: Should India Permit Dual Citizenship?',
        body: '| Potential Benefits of Dual Citizenship | Strategic and Security Concerns |\n| :--- | :--- |\n| **Halting Brain Drain & Capital Flight:** Encourages affluent NRIs to maintain permanent ties, bank accounts, and real estate investments in India | **Dual Loyalty & Security Risks:** Complications during international geopolitical conflicts or war |\n| **Diaspora Philanthropy & Innovation:** Easier flow of venture capital, technological transfer, and philanthropic endowments | **Reciprocity Demands:** Requires complex bilateral treaties and Double Taxation Avoidance Agreements (DTAA) |\n| **Global Soft Power:** Expanding India’s influence in destination country politics while maintaining home ties | **Administrative and Legal Burden:** Electoral roll integrity and military conscription exemptions |',
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
        syllabusSection: 'GS Paper II: Indian Diaspora, Single Citizenship Policy, and Dual Citizenship Debate.',
        examNotes: 'Mains analytical topic for questions on Indian Diaspora policy, brain drain vs brain gain, and passport diplomacy.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Paper III: Current Issues in Indian Polity — Citizenship & Diaspora.',
        examNotes: 'Useful for 50-word and 100-word analytical questions on diaspora policy.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'Inward Remittances, DTAA, and Cross-Border Capital Flows.',
        examNotes: 'India remains the world’s largest recipient of remittances ($125B+), heavily driven by diaspora policies.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '1.6M+ Indians renounced citizenship since 2011 (225K in 2023). 85+ countries allow dual citizenship. Debate: Retaining talent/capital vs dual loyalty/security concerns. OCI serves as current middle ground.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Renunciation Surge:** 1.6M+ Indians gave up passport since 2011 due to lack of dual citizenship.\n• **Global Context:** 85+ countries permit dual citizenship; economic diplomacy & golden visas.\n• **Policy Dilemma:** Balancing diaspora economic capital against national security and undivided loyalty.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The contemporary debate over dual citizenship highlights the friction between classical 20th-century nation-state sovereignty based on singular territorial allegiance and 21st-century hyper-mobile global talent networks, where the OCI card functions as a pragmatic constitutional bridge.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T8-06-01',
        type: 'APPLICATION',
        stem: 'Which of the following is the primary constitutional and legal barrier preventing an Indian citizen who acquires foreign nationality from retaining their Indian passport?',
        options: {
          A: 'Article 19(1)(d) restricting foreign travel.',
          B: 'Article 9 of the Constitution and Section 9 of the Citizenship Act 1955 mandating automatic termination upon acquiring foreign citizenship.',
          C: 'The Foreign Exchange Management Act (FEMA) prohibiting foreign assets.',
          D: 'The Passport Act 1967 prohibiting international residency.',
        },
        correctAnswer: 'B',
        explanation: 'Article 9 of the Constitution read with Section 9 of the Citizenship Act 1955 establishes the principle of Single Citizenship, providing that voluntary acquisition of foreign nationality results in the automatic termination of Indian citizenship.',
        trapExplanation: 'Article 19 guarantees freedom of movement, not single citizenship; FEMA regulates currency, not citizenship status.',
        difficulty: 'EASY',
        isPYQ: false,
      },
    ],
  },
];

export async function seedBatchBCanonicalKnowledge() {
  console.log(`Seeding Batch B Canonical Knowledge (${BATCH_B_CONCEPTS.length} concepts)...`);

  // Ensure semantic inventory is present
  await seedBatchBSemanticInventory();

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

  // Ensure Source exists
  await db.source.upsert({
    where: { id: 'CERAMIC-POLITY-2026' },
    update: {},
    create: {
      id: 'CERAMIC-POLITY-2026',
      title: 'Ceramic Academy Indian Polity Master Course (2026)',
      sourceType: 'SECONDARY_COMPILATION',
      authorityTier: 'STANDARD_AUTHORITY',
      description: 'Foundational Indian Polity curriculum from Ceramic Academy.',
    },
  });

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
      description: 'Flagship professional banking examination.',
    },
  });

  const examMap: Record<string, string> = {
    UPSC_CSE: upsc.id,
    RPSC_RAS: rpsc.id,
    IIBF_DBF: iibf.id,
  };

  // Topics in Batch B
  const topicsToSeed = [
    {
      slug: 'part-1-union-and-its-territory',
      title: 'Part I: The Union and Its Territory',
      order: 5,
      description: 'Constitutional framework of the Indian Union, admission and reorganisation of states under Articles 1 to 4.',
      concepts: BATCH_B_CONCEPTS.filter((c) => c.topicOrder === 5),
    },
    {
      slug: 'unification-of-india',
      title: 'Unification and Integration of India',
      order: 6,
      description: 'Historical and constitutional integration of 565 Princely States, Junagadh, Hyderabad, Kashmir, French and Portuguese enclaves, and Sikkim.',
      concepts: BATCH_B_CONCEPTS.filter((c) => c.topicOrder === 6),
    },
    {
      slug: 'reorganisation-of-states',
      title: 'Reorganisation of States & Zonal Councils',
      order: 7,
      description: 'Linguistic state reorganisation from Dhar and JVP commissions to Fazal Ali SRC 1956, post-1956 evolution to 28 states & 8 UTs, and Zonal Councils.',
      concepts: BATCH_B_CONCEPTS.filter((c) => c.topicOrder === 7),
    },
    {
      slug: 'part-2-citizenship',
      title: 'Part II: Citizenship (Articles 5 to 11)',
      order: 8,
      description: 'Constitutional articles 5 to 11, Citizenship Act 1955 acquisition and loss modes, Single Citizenship, OCI scheme, and dual citizenship policy debate.',
      concepts: BATCH_B_CONCEPTS.filter((c) => c.topicOrder === 8),
    },
  ];

  for (const topicData of topicsToSeed) {
    let topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: topicData.slug,
      },
    });

    if (!topic) {
      topic = await db.topic.create({
        data: {
          slug: topicData.slug,
          title: topicData.title,
          order: topicData.order,
          description: topicData.description,
          subjectId: subject.id,
        },
      });
    }

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
          order: cDef.claims.length,
        },
      });

      // Clear existing child records to allow idempotent reseeding
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      // Seed Claims
      for (const clm of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: clm.id,
            conceptId: concept.id,
            statement: clm.statement,
            claimType: clm.claimType,
            epistemicLevel: clm.epistemicLevel,
            confidence: clm.confidence,
            status: 'CANONICAL_CLAIM',
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
            title: cb.title || null,
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
            trapExplanation: q.trapExplanation || null,
            difficulty: q.difficulty,
            isPYQ: q.isPYQ || false,
            pyqYear: q.pyqYear || null,
            pyqPaper: q.pyqPaper || null,
          },
        });
      }
    }
  }

  console.log(`Successfully seeded Batch B knowledge base. Total concepts: ${BATCH_B_CONCEPTS.length}.`);
}
