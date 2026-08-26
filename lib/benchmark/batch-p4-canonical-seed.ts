import { db } from '../db/client';
import { seedBatchP4SemanticInventory } from '../ingestion/batch-p4-semantic-inventory';

export interface BatchP4ConceptSeedDefinition {
  id: string;
  slug: string;
  topicSlug: string;
  topicTitle: string;
  topicOrder: number;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  semanticUnitIds: string[];
  claims: {
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: 'ESTABLISHED_FACT' | 'INTERPRETATION' | 'DEBATED_CLAIM';
    confidence: 'HIGH' | 'MEDIUM';
    evidenceLocator: string;
  }[];
  contentBlocks: {
    type: 'CORE_IDEA' | 'MECHANISM' | 'DISTINCTION' | 'TIMELINE' | 'MISCONCEPTION_SHIELD' | 'CASE_LAW';
    title: string;
    body: string;
    order: number;
    visibility: 'STANDARD' | 'DEEP_DIVE' | 'EXAM_ONLY';
  }[];
  examMappings: {
    examCode: 'UPSC_CSE' | 'RPSC_RAS' | 'IIBF_DBF';
    examName: string;
    relevance: 'CORE_HIGH_YIELD' | 'IMPORTANT' | 'BACKGROUND';
    weightage: 'HIGH' | 'MEDIUM' | 'LOW';
    syllabusSection: string;
    examNotes: string;
  }[];
  revisionUnits: {
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    priority: 'ESSENTIAL' | 'HIGH_YIELD' | 'DEEP_DIVE';
    order: number;
  }[];
  questions: {
    id: string;
    type: 'CONCEPT_CHECK' | 'EXAM_TRAP' | 'APPLICATION';
    stem: string;
    options: Record<string, string>;
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ: boolean;
    pyqYear?: number;
    pyqPaper?: string;
  }[];
}

export const BATCH_P4_CONCEPTS: BatchP4ConceptSeedDefinition[] = [
  // =========================================================================
  // TOPIC 19: CENTRE-STATE RELATIONS & FEDERAL STRUCTURE (5 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T19-01',
    slug: 'nature-of-indian-federalism-and-asymmetric-structure',
    topicSlug: 'centre-state-relations-and-federalism',
    topicTitle: 'Part XI & XII: Centre–State Relations & Federal Architecture',
    topicOrder: 19,
    title: 'Nature of Indian Federalism: Quasi-Federal Character & Asymmetric Provisions',
    shortDefinition: 'The constitutional nature of Indian federalism under Article 1 ("Union of States"), K.C. Wheare’s "quasi-federal" classification, strong unitary/centripetal features, asymmetric federalism through special provisions (Articles 371 to 371-J) and 5th/6th Schedules, and federalism as an inviolable Basic Structure doctrine (S.R. Bommai 1994).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T19-01'],
    claims: [
      {
        id: 'CLM-T19-01.1',
        statement: 'Article 1 describes India as a "Union of States" rather than a federation, signifying that the Indian federation is not the result of an agreement among states and that no state possesses the right to secede from the Union.',
        claimType: 'CONSTITUTIONAL_FEDERAL_FOUNDATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 15, Art 1)',
      },
      {
        id: 'CLM-T19-01.2',
        statement: 'In S.R. Bommai v. Union of India (1994), a 9-judge Constitution Bench held that Federalism is an essential part of the Basic Structure of the Indian Constitution, despite its strong centripetal features and asymmetric provisions under Articles 371 to 371-J.',
        claimType: 'JUDICIAL_FEDERALISM_BASIC_STRUCTURE_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 15, S.R. Bommai)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'An Indestructible Union of Destructible States',
        body: 'The Indian constitutional design balances national unity and regional diversity through a unique federal model often termed **"Holding Together Federalism"** (as opposed to "Coming Together Federalism" like the United States).\n\n• **Article 1:** India is a **"Union of States"**.\n• **Dr. B.R. Ambedkar\'s Rationale:** (1) The federation is not formed by voluntary treaty among sovereign states, and (2) No state has the right to secede from the Union.\n• **Indestructible Union:** Under **Article 3**, Parliament can alter state boundaries, change state names, or form new states without the consent of the state legislature, making India **"an indestructible Union of destructible States"**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Federal Features vs Unitary (Centripetal) Tilt',
        body: '| Federal Features | Unitary / Centripetal Features |\n| :--- | :--- |\n| **Dual Polity** (Centre and States) | **Single Integrated Constitution** (no separate state constitutions) |\n| **Written Constitution & Supremacy** | **Single Integrated Judiciary** (Supreme Court at apex) |\n| **Division of Powers** (7th Schedule 3 Lists) | **Single Citizenship** (Article 9) |\n| **Rigid Amendment** for federal clauses (Art 368(2)) | **Flexibility of Constitution** (Parliament can amend most parts simply) |\n| **Independent Judiciary** (Basic Structure) | **Appointment of Governor by President** (holds office during pleasure) |\n| **Bicameralism** (Rajya Sabha represents states) | **All India Services (IAS, IPS, IFoS)** serving under dual control |\n| | **Emergency Provisions (Arts 352, 356, 360)** converting federation to unitary state |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Asymmetric Federalism in India (Articles 371 to 371-J)',
        body: 'Unlike pure symmetrical federations where all states enjoy identical constitutional status, India incorporates **Asymmetric Federalism** to accommodate cultural, historical, and socio-economic specificities:\n• **Article 371:** Maharashtra and Gujarat (separate development boards for Vidarbha, Marathwada, Saurashtra, Kutch).\n• **Article 371A:** Nagaland (religious/social practices, customary law, land ownership protected from Parliamentary acts unless state assembly consents).\n• **Article 371B:** Assam (tribal areas committee).\n• **Article 371C:** Manipur (hill areas committee).\n• **Article 371D & 371E:** Andhra Pradesh & Telangana (equitable opportunities in education and public employment).\n• **Article 371F:** Sikkim (protection of existing laws and special assembly composition).\n• **Article 371G:** Mizoram (customary law and land ownership safeguards).\n• **Article 371H:** Arunachal Pradesh (Governor’s special law-and-order responsibility).\n• **Article 371I:** Goa (minimum assembly strength of 30).\n• **Article 371J (98th CAA 2012):** Karnataka (Hyderabad-Karnataka region special development board and reservations).',
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
        syllabusSection: 'GS Paper II: Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure.',
        examNotes: 'UPSC tests: Asymmetric federalism provisions (Arts 371-371J), S.R. Bommai federalism basic structure holding, and Holding Together vs Coming Together dynamics.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Federalism in India — Nature, Unitary Features & Inter-State Relations.',
        examNotes: 'High yield for 20-word definitions of Quasi-federal and 50-word explanations of Asymmetric Federalism.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Governance.',
        examNotes: 'Federal structure of regulatory administration.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Indian Federalism: Art 1 "Union of States" (indestructible union of destructible states; no right to secede). Quasi-federal (KC Wheare) with unitary tilt (single constitution, integrated judiciary, Governor, AIS, Emergency). Federalism is Basic Structure (SR Bommai 1994). Asymmetric federalism: Arts 371-371J & 5th/6th Schedules.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Core Nature:** Holding-together federation; Article 1 "Union of States".\n• **Unitary Bias:** Single citizenship, All India Services, emergency powers, Governor.\n• **Basic Structure:** S.R. Bommai (1994) established federalism as non-derogable.\n• **Asymmetry:** Articles 371 to 371-J provide targeted developmental/cultural autonomy.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Indian constitutional architecture fuses federal division of powers with centripetal overrides, creating a flexible institutional mechanism capable of maintaining territorial integrity in times of crisis while fostering regional autonomy through asymmetric constitutional accommodation.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T19-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following is/are considered unitary or non-federal features of the Indian Constitution?\n1. Single Integrated Judiciary\n2. Appointment of the Governor by the President\n3. All India Services\n4. Bicameralism in Parliament\nSelect the correct answer using the code given below:',
        options: {
          A: '1 and 2 only',
          B: '1, 2 and 3 only',
          C: '2, 3 and 4 only',
          D: '1, 2, 3 and 4',
        },
        correctAnswer: 'B',
        explanation: 'Statements 1, 2, and 3 are unitary (centripetal) features that centralize authority. Bicameralism (Statement 4) is a classical federal feature because the Upper House (Rajya Sabha) represents the States in the Union legislature.',
        trapExplanation: 'Bicameralism is a federal feature, whereas single judiciary, Governor appointment, and All India Services are unitary features.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T19-02',
    slug: 'legislative-relations-three-lists-residuary-powers-and-exceptions',
    topicSlug: 'centre-state-relations-and-federalism',
    topicTitle: 'Part XI & XII: Centre–State Relations & Federal Architecture',
    topicOrder: 19,
    title: 'Legislative Relations: Three Lists (7th Schedule), Residuary Powers & Exceptions',
    shortDefinition: 'The constitutional division of legislative powers under Part XI (Articles 245–255), territorial legislative limits (Art 245 & Territorial Nexus), 7th Schedule Three Lists, residuary powers with Parliament (Art 248), 5 extraordinary circumstances for central legislation on State List (Arts 249, 250, 252, 253, 356), Repugnancy under Article 254, and judicial doctrines (Pith & Substance, Colourable Legislation).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T19-02', 'SEM-T19-03', 'SEM-T19-04'],
    claims: [
      {
        id: 'CLM-T19-02.1',
        statement: 'Under Article 246 and the Seventh Schedule, legislative powers are divided into the Union List (List I: 100 subjects), State List (List II: 61 subjects), and Concurrent List (List III: 52 subjects), with Article 248 vesting all Residuary Powers of legislation exclusively in Parliament.',
        claimType: 'CONSTITUTIONAL_LEGISLATIVE_DISTRIBUTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 7, Arts 246, 248)',
      },
      {
        id: 'CLM-T19-02.2',
        statement: 'Parliament can make laws on any subject in the State List under 5 exceptional constitutional circumstances: (1) Article 249 (Rajya Sabha 2/3rd resolution in national interest), (2) Article 250 (National Emergency), (3) Article 252 (Consent of 2 or more States), (4) Article 253 (Implementation of International Treaties), and (5) Article 356 (President\'s Rule).',
        claimType: 'CONSTITUTIONAL_STATE_LIST_OVERRIDE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 7, Arts 249-253, 356)',
      },
      {
        id: 'CLM-T19-02.3',
        statement: 'Under Article 254(1), if a State law on a Concurrent List subject is repugnant to a Central law, the Central law prevails and the State law is void to the extent of repugnancy, EXCEPT when the State law has been reserved for the consideration of the President and has received his assent under Article 254(2).',
        claimType: 'CONSTITUTIONAL_REPUGNANCY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 7, Art 254)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Twofold Distribution: Territorial and Subject-Matter Jurisdiction',
        body: 'Under **Part XI, Chapter I (Articles 245–255)**, legislative relations are governed by a dual division:\n1. **Territorial Limits (Article 245):**\n   - **Parliament:** Can make laws for the whole or any part of India, and possesses **extra-territorial legislative competence** (laws apply to Indian citizens and property abroad).\n   - **State Legislature:** Can make laws only for the whole or any part of that State. (Cannot have extra-territorial operation unless there is a **real Territorial Nexus** between the object and the State, e.g. *State of Bombay v. R.M.D. Chamarbaugwala, 1957*).\n2. **Subject-Matter Division (Article 246 & 7th Schedule):**\n   - **List I (Union List):** 100 subjects (originally 97) — Defence, Foreign Affairs, Banking, Atomic Energy, Railways, Currency, Income Tax, Customs.\n   - **List II (State List):** 61 subjects (originally 66) — Public Order, Police, Public Health, Agriculture, Land, Local Government, State Taxes.\n   - **List III (Concurrent List):** 52 subjects (originally 47) — Criminal Law, Civil Procedure, Marriage, Contracts, Economic/Social Planning.\n   - **42nd CAA 1976:** Transferred **5 subjects from State List to Concurrent List**: (1) Education, (2) Forests, (3) Weights and Measures, (4) Protection of wild animals and birds, (5) Administration of justice (constitution of lower courts).\n• **Residuary Powers (Article 248):** Any matter not enumerated in the three lists vests **exclusively in Parliament** (unlike USA and Australia where residuary powers belong to the states).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Five Extraordinary Circumstances for Parliamentary Law on State List',
        body: '1. **Article 249 (Rajya Sabha Resolution):** If Rajya Sabha declares by resolution supported by **not less than 2/3rd of members present and voting** that it is necessary in the national interest. Resolution remains in force for **1 year at a time**; law ceases 6 months after resolution expires.\n2. **Article 250 (During National Emergency):** Parliament can legislate on any State List matter for the whole or part of India. Law ceases 6 months after emergency ceases.\n3. **Article 252 (Consent of Two or More States):** If legislatures of **two or more States pass resolutions** requesting Parliament to enact a law. Law applies only to those states (and any other state adopting it later). **The state legislatures CANNOT amend or repeal this law; only Parliament can amend or repeal it!** (*e.g. Wildlife Protection Act 1972, Water Pollution Act 1974*).\n4. **Article 253 (To Implement International Agreements):** Parliament can make laws on any State subject to implement any international treaty, agreement, or convention without state consent.\n5. **Article 356 (During President\'s Rule):** Parliament is conferred the power to exercise the legislative powers of the State Assembly.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'Repugnancy (Article 254) & Judicial Interpretation Doctrines',
        body: '### Article 254 (Doctrine of Repugnancy):\n• **Article 254(1):** In case of a conflict between a Central law and a State law on a **Concurrent List (List III)** matter, the Central law prevails and the State law is void to the extent of repugnancy.\n• **Article 254(2) Exception:** If the State law on List III has been **reserved for the President\'s consideration and has received Presidential assent**, the State law prevails **in that State**. However, Parliament can still override it subsequently by enacting a new law on the same matter.\n\n### Key Constitutional Doctrines:\n1. **Doctrine of Pith and Substance (*Prafulla Kumar v. Bank of Commerce, 1947*):** Examines the true nature and character of a statute. If a law substantially falls within the legislative competence of the legislature enacting it, incidental encroachment into another list does not invalidate the law.\n2. **Doctrine of Colourable Legislation (*K.C. Gajapati Narayan Deo v. State of Orissa, 1953*):** *"What cannot be done directly cannot be done indirectly."* A legislature cannot transgress constitutional limitations under the guise of an apparently valid statute.\n3. **Doctrine of Severability (*R.M.D.C. Case, 1957*):** If unconstitutional provisions of a law can be severed from the valid provisions without altering the legislative intent, only the invalid portion is struck down.',
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
        syllabusSection: 'GS Paper II: Legislative relations, 7th Schedule, Articles 248, 249, 252, 253, 254.',
        examNotes: 'UPSC frequently tests Article 252 (states cannot repeal parliamentary law enacted under Art 252), Article 254(2) Presidential assent exception, and 42nd CAA transferred subjects.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Centre-State Legislative Relations & Seventh Schedule.',
        examNotes: 'High yield for 20-word definitions of Residuary Powers, Doctrine of Pith and Substance, and Article 249.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Statutory Legislative Authority.',
        examNotes: 'Banking regulation under Union List Entry 45.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Legislative Relations (Arts 245-255): Art 246 7th Schedule: Union (100), State (61), Concurrent (52). Residuary powers with Parliament (Art 248). Parliament legislates on State List: Art 249 (RS 2/3rd resolution, 1 yr), Art 250 (National Emergency), Art 252 (2+ states consent; states cannot repeal!), Art 253 (International treaties), Art 356. Art 254 Repugnancy: Central law wins, unless State law got Presidential assent (Art 254(2)).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Lists:** Union List, State List, Concurrent List (5 subjects shifted by 42nd CAA in 1976).\n• **Residuary:** Article 248 vests residuary power in Parliament.\n• **State List Overrides:** Articles 249, 250, 252, 253, 356.\n• **Repugnancy (254):** Central law prevails on List III; State law saved only with President assent.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The constitutional architecture of legislative relations establishes Union legislative supremacy while maintaining exhaustive enumeration across three lists, backed by judicial doctrines of Pith and Substance and Article 254 repugnancy filters to resolve federal statutory conflicts.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T19-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'If the legislatures of two or more States pass resolutions requesting Parliament to enact a law on a subject enumerated in the State List under Article 252 of the Constitution, which of the following statements is CORRECT?',
        options: {
          A: 'The law enacted by Parliament can be amended or repealed by the state legislatures that passed the resolution.',
          B: 'The law enacted by Parliament applies to all States in India automatically.',
          C: 'The law applies only to the requesting States and can be amended or repealed ONLY by Parliament, not by the State Legislatures.',
          D: 'The law remains in force for a maximum duration of one year only.',
        },
        correctAnswer: 'C',
        explanation: 'Under Article 252(2), an Act passed by Parliament pursuant to resolutions by two or more States applies only to those States (and any other State that adopts it subsequently), and it CANNOT be amended or repealed by an Act of the Legislature of any State, but only by an Act of Parliament.',
        trapExplanation: 'State legislatures surrender their amending/repealing power to Parliament once they invoke Article 252.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T19-03',
    slug: 'administrative-relations-directives-all-india-services-and-water-disputes',
    topicSlug: 'centre-state-relations-and-federalism',
    topicTitle: 'Part XI & XII: Centre–State Relations & Federal Architecture',
    topicOrder: 19,
    title: 'Administrative Relations: Directives (Arts 256-257), Sanctions (Art 365) & All India Services',
    shortDefinition: 'The administrative hierarchy under Part XI Chapter II (Articles 256–263), Union executive directives to States (Arts 256, 257), constitutional sanction under Article 365, the Union’s duty under Article 355, All India Services under Article 312, inter-state delegation (Arts 258/258A), Full Faith and Credit (Art 261), and Inter-State River Water Disputes under Article 262.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T19-05', 'SEM-T19-06'],
    claims: [
      {
        id: 'CLM-T19-03.1',
        statement: 'Under Articles 256 and 257, the executive power of the Union extends to giving binding directions to States to ensure compliance with Parliamentary laws, for the construction and maintenance of means of communication of national or military importance, and for the protection of railways within the State.',
        claimType: 'CONSTITUTIONAL_ADMINISTRATIVE_DIRECTIVES_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 5, Arts 256, 257)',
      },
      {
        id: 'CLM-T19-03.2',
        statement: 'Under Article 365, where any State has failed to comply with, or to give effect to, any directions given in the exercise of the executive power of the Union under any of the provisions of the Constitution, it shall be lawful for the President to hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of the Constitution (triggering Article 356).',
        claimType: 'CONSTITUTIONAL_ADMINISTRATIVE_SANCTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 5, Art 365)',
      },
      {
        id: 'CLM-T19-03.3',
        statement: 'Under Article 312, Parliament may by law create one or more All India Services (including an All India Judicial Service) common to the Union and the States, provided the Rajya Sabha passes a resolution supported by not less than two-thirds of members present and voting.',
        claimType: 'CONSTITUTIONAL_ALL_INDIA_SERVICES_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 5, Art 312)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Executive Co-ordination and Union Administrative Primacy',
        body: 'While legislative powers are divided, executive power is co-extensive with legislative power. Under **Part XI, Chapter II (Articles 256–263)**, the Constitution establishes mechanisms to ensure that state administrative machinery executes Union laws effectively without administrative sabotage.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Binding Directives, Sanctions & Article 355 Duty',
        body: '### 1. Executive Directions from Centre to States:\n• **Article 256:** State executive power must ensure compliance with laws made by Parliament. Centre can give necessary directions.\n• **Article 257:** State executive power must not impede or prejudice the executive power of the Union. Centre can direct States to:\n  1. Construct and maintain **means of communication of national or military importance**.\n  2. Take measures for the **protection of railways** within the State.\n  3. Provide facilities for instruction in the **mother tongue at the primary stage** to linguistic minority children (Article 350A).\n  4. Draw up and execute schemes for the welfare of **Scheduled Tribes** (Article 339(2)).\n\n### 2. Constitutional Sanction (Article 365):\n• If a State fails to comply with any lawful Union direction, **Article 365 empowers the President to deem it a breakdown of constitutional machinery in the State**, justifying the imposition of **President\'s Rule under Article 356**.\n\n### 3. Union Duty to Protect States (Article 355):\n• It is the duty of the Union to **protect every State against external aggression and internal disturbance**, and to ensure that the government of every State is carried on in accordance with the provisions of the Constitution.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'All India Services (Art 312) & Inter-State River Disputes (Art 262)',
        body: '### All India Services (Article 312):\n• Common to both Union and States (IAS, IPS, and **Indian Forest Service created in 1966**).\n• **Creation Mechanism:** Requires a **Rajya Sabha resolution supported by a 2/3rd majority of members present and voting**.\n• **Dual Control:** State governments exercise immediate administrative control (postings, transfers), while the Central Government exercises ultimate disciplinary authority (dismissal, removal).\n\n### Inter-State River Water Disputes (Article 262):\n• Parliament may by law provide for the adjudication of any dispute relating to the use, distribution, or control of waters of any inter-state river or river valley.\n• Under the *Inter-State River Water Disputes Act, 1956*, Parliament has **excluded the jurisdiction of the Supreme Court and all other courts** over such water disputes, entrusting adjudication exclusively to ad-hoc tribunals (*e.g. Cauvery, Krishna, Godavari tribunals*).',
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
        syllabusSection: 'GS Paper II: Administrative relations, Article 355 vs 365, Article 312 All India Services & Article 262 water disputes.',
        examNotes: 'UPSC frequently tests the operational relationship between Article 256/257 directives, Article 365 sanction, and Article 356 imposition.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Centre-State Administrative Relations & All India Services.',
        examNotes: 'High yield for 20-word definitions of Article 312 and Article 365.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Public Administration.',
        examNotes: 'Administrative governance.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Administrative Relations (Arts 256-263): Centre gives binding directions to States (Arts 256/257: compliance with Union laws, railways, communications). Non-compliance triggers Art 365 -> grounds for Art 356 President Rule! Art 355: Union duty to protect States against aggression/disturbance. Art 312: Rajya Sabha 2/3rd resolution creates new All India Services (IFoS 1966). Art 262: Inter-state water tribunals oust SC jurisdiction.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Directives (256/257):** Centre directs states on federal laws, railways, national communications.\n• **Sanction (365):** Non-compliance with directions allows President to impose Art 356.\n• **Article 355:** Duty of Union to protect states from external aggression and internal disturbance.\n• **Article 312:** Rajya Sabha special power to create All India Services.\n• **Article 262:** Water dispute tribunals exclude Supreme Court jurisdiction.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The constitutional framework connects Union directives under Articles 256–257 with ultimate enforcement sanctions under Article 365 and All India Services under Article 312, guaranteeing uniform administrative standards across the federation.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T19-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'What is the constitutional consequence if a State Government fails to comply with or give effect to lawful executive directions given by the Union Government under Article 256 or 257 of the Constitution?',
        options: {
          A: 'The Supreme Court automatically dissolves the State Legislative Assembly.',
          B: 'Under Article 365, the President may hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the Constitution, enabling the imposition of Article 356.',
          C: 'The Governor of the State is automatically dismissed by the President.',
          D: 'The Union Government can withhold the entire state share of central taxes permanently.',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 365, if a State fails to comply with or give effect to lawful directions of the Union executive, it is deemed a failure of constitutional machinery in that State, enabling the President to impose President\'s Rule under Article 356.',
        trapExplanation: 'Article 365 provides the constitutional bridge linking non-compliance with central directions to Article 356 President\'s Rule.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T19-04',
    slug: 'inter-state-council-zonal-councils-and-federal-commissions',
    topicSlug: 'centre-state-relations-and-federalism',
    topicTitle: 'Part XI & XII: Centre–State Relations & Federal Architecture',
    topicOrder: 19,
    title: 'Inter-State Council (Art 263), Zonal Councils & Federal Commissions',
    shortDefinition: 'Institutions fostering cooperative federalism: the constitutional Inter-State Council under Article 263 (established 1990 by Presidential Order on Sarkaria Commission advice), 5 statutory Zonal Councils under the States Reorganisation Act 1956 and North-Eastern Council (1971), and landmark federal commission recommendations (Sarkaria 1983-88, Punchhi 2007-10, NCRWC 2002).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T19-07'],
    claims: [
      {
        id: 'CLM-T19-04.1',
        statement: 'Under Article 263, the President may by order establish an Inter-State Council to inquire into and advise upon disputes between States, investigate subjects of common interest, and make recommendations for better coordination of policy; it was formally established in 1990 on the recommendation of the Sarkaria Commission.',
        claimType: 'CONSTITUTIONAL_INTERSTATE_COUNCIL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 5, Art 263, Sarkaria)',
      },
      {
        id: 'CLM-T19-04.2',
        statement: 'Zonal Councils are statutory bodies created by the States Reorganisation Act 1956 (divided into Northern, Central, Eastern, Western, and Southern Zones) plus the North-Eastern Council Act 1971, with the Union Home Minister acting as the common Chairman of all Zonal Councils.',
        claimType: 'STATUTORY_ZONAL_COUNCILS_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 5, Zonal Councils)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Institutional Machinery for Cooperative Federalism',
        body: 'To prevent federal friction and resolve inter-governmental disputes through dialogue rather than litigation, the Indian Constitution and statutory framework establish high-level deliberative bodies bringing together the Prime Minister, Union Ministers, and State Chief Ministers.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Inter-State Council (Constitutional) vs Zonal Councils (Statutory)',
        body: '| Parameter | Inter-State Council (Article 263) | Zonal Councils (Statutory) |\n| :--- | :--- | :--- |\n| **Legal Status** | **Constitutional Body** under Article 263 (established by Presidential Order in 1990) | **Statutory Bodies** under *States Reorganisation Act, 1956* (and NE Council Act 1971) |\n| **Composition** | • **Chairman:** Prime Minister of India\n• **Members:** All State Chief Ministers, UT Chief Ministers/Administrators, and 6 Union Cabinet Ministers nominated by PM | • **Chairman:** Union Home Minister (common chairman for all zones)\n• **Vice-Chairman:** Chief Ministers of member states by annual rotation\n• **Members:** CM and 2 other Ministers of each state in the zone |\n| **Zonal Groupings**| Nationwide single apex body | **5 Zonal Councils** (Northern, Central, Eastern, Western, Southern) + 1 **North-Eastern Council** (1971) |\n| **Rajasthan Zone** | Full member of Inter-State Council | Member of **Northern Zonal Council** (along with Haryana, Punjab, HP, Rajasthan, Delhi, J&K, Ladakh, Chandigarh) |\n| **Nature of Decisions** | **Advisory only**; non-binding consultative recommendations | **Advisory only**; promotes regional economic and social cooperation |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Landmark Federal Commissions & Their Core Doctrines',
        body: '### 1. Sarkaria Commission (1983–1988 — Justice R.S. Sarkaria):\n• Recommended setting up a permanent **Inter-State Council under Article 263** (implemented in 1990).\n• **Article 356:** Must be used only as a **"measure of last resort"** after exhausting all other remedies.\n• **Governor Appointment:** Appointee must be an eminent person from outside the State, not actively involved in politics in the recent past, appointed in consultation with the State Chief Minister.\n• **Deployment of Central Armed Forces:** Centre has the power to deploy armed forces in a State even without state consent, though consultation is desirable.\n\n### 2. Punchhi Commission (2007–2010 — Justice M.M. Punchhi):\n• **Governor Tenure:** Recommended fixed 5-year tenure for Governors; removal by State Legislature impeachment process rather than arbitrary Presidential pleasure.\n• **Article 355/356 ("Localized Emergency"):** Recommended amending Articles 355 & 356 to permit the Union to declare localized emergencies confined to specific problem districts rather than suspending an entire state government.\n• **Treaty Making (Article 253):** Recommended prior consultation with States for international treaties impacting state subjects.',
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
        syllabusSection: 'GS Paper II: Inter-State Council, Zonal Councils, Sarkaria & Punchhi Commission recommendations.',
        examNotes: 'UPSC frequently tests: Inter-State Council composition (PM chair) vs Zonal Council composition (Home Minister chair), and Punchhi localized emergency proposal.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Inter-State Council, Zonal Councils & Rajasthan Northern Zonal Council Membership.',
        examNotes: 'High yield: Rajasthan is in the Northern Zonal Council; Union Home Minister is Chairman.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Inter-governmental bodies.',
        examNotes: 'Inter-state coordination.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Inter-State Council (Art 263, est 1990 on Sarkaria advice): PM Chairman, all CMs + 6 Cabinet Ministers; advisory. Zonal Councils: Statutory (States Reorganisation Act 1956; 5 zones + NE Council 1971); Union Home Minister is common Chairman; Rajasthan in Northern Zone. Sarkaria (1983-88): Art 356 as last resort, outside Governor. Punchhi (2007-10): Localized emergency under Art 355/356, fixed Governor tenure.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Inter-State Council:** Article 263 constitutional body; chaired by Prime Minister; established 1990.\n• **Zonal Councils:** Statutory bodies under 1956 Act; chaired by Union Home Minister.\n• **Sarkaria Commission:** Recommended Inter-State Council and restrained use of Article 356.\n• **Punchhi Commission:** Recommended localized emergency and fixed tenure for Governors.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'These inter-governmental deliberative forums bridge the formal separation of powers, converting potential legal confrontations between Union and State executives into structured policy negotiation.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T19-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding the Inter-State Council and Zonal Councils:\n1. The Inter-State Council is a constitutional body established under Article 263, chaired by the Prime Minister.\n2. Zonal Councils are constitutional bodies established under Article 263, chaired by the Prime Minister.\n3. The Union Home Minister serves as the common Chairman of all Zonal Councils.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '1 and 3 only',
          C: '2 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect because Zonal Councils are STATUTORY bodies established under the States Reorganisation Act, 1956 (not constitutional bodies under Article 263), and they are chaired by the Union Home Minister, not the Prime Minister.',
        trapExplanation: 'Inter-State Council is constitutional (chaired by PM); Zonal Councils are statutory (chaired by Home Minister).',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T19-05',
    slug: 'financial-relations-finance-commission-and-gst-council',
    topicSlug: 'centre-state-relations-and-federalism',
    topicTitle: 'Part XI & XII: Centre–State Relations & Federal Architecture',
    topicOrder: 19,
    title: 'Financial Relations: Division of Taxes, Finance Commission (Art 280) & GST Council',
    shortDefinition: 'The constitutional framework of fiscal federalism under Part XII (Articles 268–293), the 101st CAA 2016 Goods and Services Tax architecture (Art 246A & GST Council Art 279A), Finance Commission under Article 280 (vertical vs horizontal devolution criteria), Statutory Grants (Art 275) vs Discretionary Grants (Art 282), and borrowing rules (Arts 292-293).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T19-08', 'SEM-T19-09'],
    claims: [
      {
        id: 'CLM-T19-05.1',
        statement: 'Under Article 280, the President constitutes a Finance Commission every 5 years (or earlier) comprising a Chairman and 4 other members to recommend the vertical sharing of the net proceeds of divisible central taxes between Union and States, and horizontal distribution among States.',
        claimType: 'CONSTITUTIONAL_FINANCE_COMMISSION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 6, Art 280)',
      },
      {
        id: 'CLM-T19-05.2',
        statement: 'Under Article 279A (inserted by the 101st Constitutional Amendment Act 2016), the GST Council is a joint constitutional forum where the Central Government holds one-third of the total votes cast and all State Governments combined hold two-thirds of the votes cast, with every decision requiring a weighted majority of not less than three-fourths (75%) of the votes cast.',
        claimType: 'CONSTITUTIONAL_GST_COUNCIL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 6, Art 279A, 101st CAA)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Fiscal Asymmetry and Constitutional Redistribution Mechanisms',
        body: 'In India’s federal design, there is a deliberate **vertical fiscal imbalance**: the Union Government commands the most productive and elastic revenue sources (e.g. Income Tax, Corporate Tax, Customs, Central GST), while State Governments bear the bulk of developmental, health, education, and law-and-order expenditures.\n\nTo bridge this gap, the Constitution provides two major institutional engines:\n1. **The Finance Commission (Article 280)** for general revenue devolution.\n2. **The GST Council (Article 279A)** for indirect tax harmonization.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'GST Council Architecture & Voting Formula (Article 279A)',
        body: '• **Constitutional Insertion:** 101st Constitutional Amendment Act, 2016 (along with **Article 246A** granting concurrent legislative power on GST to Parliament and State Legislatures).\n• **Composition:**\n  - **Chairperson:** Union Finance Minister\n  - **Members:** Union Minister of State for Finance + State Finance / Taxation Ministers from each State.\n• **Decision-Making Formula (Article 279A(9)):**\n  - Quorum: Half of total members.\n  - **Weighted Voting Formula:**\n    1. Central Government vote weight = **1/3rd (33.33%)** of total votes cast.\n    2. All State Governments combined vote weight = **2/3rd (66.67%)** of total votes cast (each state has equal vote share among states).\n    3. **Passing Threshold:** Every decision requires a majority of **not less than 3/4th (75%) of the weighted votes cast**.\n• **Federal Veto Dynamic:** Neither the Centre alone (33.33%) nor the States alone (66.67%) can pass a decision without substantial consensus from the other side, institutionalizing cooperative fiscal federalism.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Grants-in-Aid (Art 275 vs Art 282) & Borrowing Powers (Arts 292-293)',
        body: '### Grants-in-Aid Comparison:\n• **Article 275 (Statutory Grants):** Recommended by the Finance Commission, charged on the **Consolidated Fund of India**; given to specific needy states to bridge non-plan revenue deficits and for tribal welfare.\n• **Article 282 (Discretionary Grants):** Spending power of Union and States for any public purpose (used for Centrally Sponsored Schemes / central transfers outside the Finance Commission award).\n\n### Borrowing Powers:\n• **Article 292 (Union Borrowing):** Central Government can borrow within India or from abroad upon the security of the Consolidated Fund of India, subject to limits set by Parliament.\n• **Article 293 (State Borrowing):**\n  - States can borrow **ONLY within India** (cannot raise foreign loans directly).\n  - **Proviso (Article 293(3)):** A State **cannot raise any new loan without the consent of the Central Government** if there is any outstanding part of a Central loan or guarantee given to the State.',
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
        syllabusSection: 'GS Paper II & III: Fiscal Federalism, Finance Commission, GST Council (Art 279A) & Article 293 borrowing.',
        examNotes: 'UPSC repeatedly tests the GST Council voting weights (Centre 1/3rd, States 2/3rd, 75% threshold) and Article 293 borrowing restrictions.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Centre-State Financial Relations & State Finance Commission.',
        examNotes: 'High yield for 20-word definitions of Article 280 Finance Commission and Article 275 Statutory Grants.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Fiscal Architecture, State Borrowing & Tax Devolution.',
        examNotes: 'Article 293 state borrowing restrictions and fiscal deficit targets under FRBM.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Fiscal Relations (Arts 268-293): Art 280 Finance Commission (President appoints every 5 yrs; vertical/horizontal devolution). Art 279A GST Council (101st CAA 2016): Union has 1/3rd vote, States have 2/3rd vote, 75% weighted majority required. Art 275: Statutory grants on FC advice. Art 282: Discretionary grants. Art 293: States borrow ONLY within India; need Centre consent if central loan pending.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Finance Commission (280):** 5-year constitutional body for tax sharing and statutory grants.\n• **GST Council (279A):** Union 1/3rd + States 2/3rd votes; requires 75% weighted approval.\n• **Grants:** Article 275 (Statutory on FC recommendation) vs Article 282 (Discretionary).\n• **Borrowing (293):** States cannot borrow abroad; require Centre consent if central debt outstanding.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The dual framework of five-yearly Finance Commission awards (addressing structural fiscal imbalances) and the ongoing GST Council voting structure (securing shared tax sovereignty) provides institutional stability to India’s evolving fiscal federalism.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T19-05-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Goods and Services Tax (GST) Council established under Article 279A of the Constitution, consider the following statements:\n1. The vote of the Central Government has a weightage of one-third of the total votes cast in the meeting.\n2. The votes of all the State Governments combined have a weightage of two-thirds of the total votes cast.\n3. Every decision of the GST Council is taken by a majority of not less than two-thirds of the weighted votes of the members present and voting.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'A',
        explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect because every decision of the GST Council requires a weighted majority of not less than THREE-FOURTHS (75%) of the weighted votes of members present and voting, not two-thirds.',
        trapExplanation: 'The GST Council decision threshold is three-fourths (75%), not two-thirds (66.67%).',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 20: EMERGENCY PROVISIONS & SAFEGUARDS (4 CONCEPTS)
  // =========================================================================
  {
    id: 'CON-T20-01',
    slug: 'national-emergency-article-352-grounds-approval-and-safeguards',
    topicSlug: 'emergency-provisions-and-safeguards',
    topicTitle: 'Part XVIII: Emergency Provisions & Constitutional Safeguards',
    topicOrder: 20,
    title: 'National Emergency (Article 352): Grounds, Approval & 44th CAA Safeguards',
    shortDefinition: 'The constitutional framework of National Emergency under Part XVIII (Articles 352–360), three explicit grounds (War, External Aggression, Armed Rebellion), the transformative safeguards enacted by the 44th Constitutional Amendment Act 1978 (written cabinet advice, 1-month approval, Special Majority in both houses, 6-month periodic renewal, and disapproval motion mechanism).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T20-01'],
    claims: [
      {
        id: 'CLM-T20-01.1',
        statement: 'Under Article 352, the President can proclaim a National Emergency when the security of India or any part of its territory is threatened by War, External Aggression, or Armed Rebellion, only upon the written recommendation of the Union Cabinet (Prime Minister and other Ministers of Cabinet rank).',
        claimType: 'CONSTITUTIONAL_NATIONAL_EMERGENCY_INVOCATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, Art 352, 44th CAA)',
      },
      {
        id: 'CLM-T20-01.2',
        statement: 'Following the 44th Constitutional Amendment Act 1978, a proclamation of National Emergency must be approved by both Houses of Parliament within 1 month by a Special Majority (majority of total membership + 2/3rd present and voting), operates for 6 months at a time, and can be revoked if Lok Sabha passes a disapproval resolution by Simple Majority.',
        claimType: 'CONSTITUTIONAL_EMERGENCY_APPROVAL_SAFEGUARD_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, Art 352 Safeguards)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Federal Conversion to Unitary System in Existential Crises',
        body: 'Under **Part XVIII (Articles 352–360)**, the Constitution incorporates emergency provisions to protect the sovereignty, unity, integrity, and security of the country and the democratic constitutional order.\n\nDuring an emergency, the normal federal constitutional structure is transformed into a **unitary system without requiring a formal constitutional amendment under Article 368**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Grounds, Invocations & The 44th Constitutional Amendment 1978',
        body: '### Grounds for Proclamation (Article 352(1)):\n1. **War** (Formal declaration of war with another country)\n2. **External Aggression** (Hostile acts without formal war declaration)\n3. **Armed Rebellion**\n• **External Emergency:** Proclaimed on grounds of War or External Aggression.\n• **Internal Emergency:** Proclaimed on ground of Armed Rebellion.\n• **Territorial Scope (42nd CAA 1976):** Can be declared for the entire country or restricted to a specific part of India.\n\n### Historical Invocations in India:\n1. **October 1962 – January 1968:** Chinese aggression.\n2. **December 1971 – March 1977:** Indo-Pakistan war (Bangladesh liberation).\n3. **June 1975 – March 1977:** Declared on ground of *"internal disturbance"* by Indira Gandhi government.\n\n### Comprehensive Safeguards by 44th CAA 1978:\n1. **Substituted "Armed Rebellion" for "Internal Disturbance"**: Eliminated the vague political pretext used in 1975.\n2. **Written Advice of Cabinet:** President can proclaim emergency ONLY upon the **written communication of the Union Cabinet** (not PM alone).\n3. **Approval Window:** Reduced from 2 months to **1 Month**.\n4. **Approval Majority:** Elevated from Simple Majority to **Special Majority** in each House (majority of total membership + not less than 2/3rd present and voting).\n5. **Periodic Renewal:** Operates for **6 months at a time**; requires fresh Special Majority resolution every 6 months for continuation.\n6. **Disapproval by Lok Sabha:** A disapproval resolution can be passed by **Lok Sabha only, by a Simple Majority** (if 1/10th of LS MPs give written notice to Speaker/President, a special sitting must be held within 14 days).',
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
        syllabusSection: 'GS Paper II: Emergency Provisions — Article 352 & 44th Amendment Act 1978.',
        examNotes: 'UPSC frequently tests: 44th CAA changes (1 month approval, special majority, armed rebellion, written cabinet advice, and LS disapproval mechanism).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Emergency Provisions in Indian Constitution.',
        examNotes: 'High yield for 20-word definitions of Article 352 and 50-word explanations of 44th Amendment emergency safeguards.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Crisis Powers.',
        examNotes: 'Emergency powers.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'National Emergency (Art 352): Grounds = War, External Aggression, Armed Rebellion ("internal disturbance" deleted by 44th CAA 1978). Written Cabinet advice mandatory. Approval: 1 month by SPECIAL MAJORITY in both Houses; 6-month periodic renewal. Disapproval: LS only by SIMPLE MAJORITY (1/10th notice -> 14-day sitting).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Grounds:** War, External Aggression, Armed Rebellion (44th CAA).\n• **Cabinet Safeguard:** Written recommendation of full Cabinet mandatory.\n• **Parliamentary Approval:** 1 month window; Special Majority in both Houses; 6-month validity.\n• **Revocation:** Simple majority in Lok Sabha (1/10th members requisition special sitting).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The post-44th Amendment architecture of Article 352 converts what was once an unbridled executive power into a stringently monitored constitutional mechanism requiring multi-party parliamentary consensus and periodic legislative reaffirmation.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T20-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following safeguards were introduced by the 44th Constitutional Amendment Act, 1978 with respect to the proclamation of a National Emergency under Article 352?\n1. Substitution of the phrase "internal disturbance" with "armed rebellion".\n2. Requirement of written advice from the Union Cabinet before the President can issue the proclamation.\n3. Reduction of the initial parliamentary approval period from two months to one month.\n4. Requirement of a Special Majority in both Houses for approving the proclamation.\nSelect the correct answer using the code given below:',
        options: {
          A: '1 and 2 only',
          B: '1, 3 and 4 only',
          C: '2, 3 and 4 only',
          D: '1, 2, 3 and 4',
        },
        correctAnswer: 'D',
        explanation: 'All four statements are correct. The 44th Amendment Act 1978 introduced: (1) Armed Rebellion in place of Internal Disturbance, (2) Written Cabinet advice, (3) 1-month approval window (down from 2 months), and (4) Special Majority in both Houses for approval and 6-month renewals.',
        trapExplanation: 'All four were introduced by the 44th Amendment Act 1978 to prevent repetition of the 1975 emergency abuse.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T20-02',
    slug: 'national-emergency-effects-and-fundamental-rights-art-358-vs-359',
    topicSlug: 'emergency-provisions-and-safeguards',
    topicTitle: 'Part XVIII: Emergency Provisions & Constitutional Safeguards',
    topicOrder: 20,
    title: 'National Emergency Impact: Federal Balance & Fundamental Rights (Art 358 vs Art 359)',
    shortDefinition: 'The constitutional consequences of National Emergency on executive, legislative, and financial relations, extension of Lok Sabha tenure, and the fundamental distinction between Article 358 (automatic suspension of Article 19 for external emergency only) and Article 359 (Presidential suspension of right to move court, with Articles 20 & 21 never suspendable under the 44th Amendment).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T20-02', 'SEM-T20-03'],
    claims: [
      {
        id: 'CLM-T20-02.1',
        statement: 'During a National Emergency, the executive power of the Union extends to giving directions to any State on ANY matter, Parliament acquires concurrent legislative power over State List subjects (without suspending State legislatures), and the life of the Lok Sabha may be extended by law for one year at a time.',
        claimType: 'CONSTITUTIONAL_EMERGENCY_FEDERAL_EFFECTS_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, Arts 353, 354)',
      },
      {
        id: 'CLM-T20-02.2',
        statement: 'Under Article 358, the six freedoms guaranteed by Article 19 are automatically suspended ONLY when National Emergency is declared on grounds of War or External Aggression (not Armed Rebellion), whereas under Article 359, the President may suspend the right to move courts for specified Fundamental Rights, but the enforcement of Article 20 (Protection against conviction) and Article 21 (Protection of life and liberty) CAN NEVER BE SUSPENDED under any emergency.',
        claimType: 'CONSTITUTIONAL_FR_SUSPENSION_COMPARISON_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, Arts 358, 359, 44th CAA)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Federal Centralization and Fundamental Rights Alteration',
        body: 'A proclamation of National Emergency fundamentally alters two pillars of the constitutional structure:\n1. **The Federal Balance:** State autonomy is subordinated to Union command.\n2. **Fundamental Rights:** Citizen rights are temporarily curtailed to prioritize state survival.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Effects on Executive, Legislature, Life of House & Finances',
        body: '1. **Executive Relations (Article 353(a)):** The Centre becomes entitled to give executive directions to a State on **any matter** (in normal times, directions are limited to Arts 256/257). State governments continue to exist but are under the complete control of the Union.\n2. **Legislative Relations (Article 353(b)):** Parliament becomes empowered to make laws on **any matter in the State List**. The State Legislature is **NOT suspended or dissolved**; its legislative power becomes concurrent with Parliament (Central law prevails under Art 254).\n3. **Life of the Lok Sabha & State Assemblies:** Parliament may by law extend the normal 5-year term of the Lok Sabha for **one year at a time for any length of time**, but the extension cannot continue beyond **6 months after the emergency ceases to operate** (done in 1976 for 5th Lok Sabha).\n4. **Financial Relations (Article 354):** The President may by order modify the constitutional distribution of revenues between Union and States.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Article 358 vs Article 359: Comprehensive Comparison',
        body: '| Parameter | Article 358 | Article 359 |\n| :--- | :--- | :--- |\n| **Rights Affected** | Confined **ONLY to Article 19** (Six fundamental freedoms) | Extends to **all Fundamental Rights specified in Presidential Order**, EXCEPT **Articles 20 and 21** |\n| **Mechanism of Suspension** | **Automatic suspension** as soon as emergency is declared (no separate order needed) | **Does NOT suspend the right itself**; suspends only the **right to move any court** for enforcement via Presidential Order |\n| **Grounds Limitation (44th CAA)** | Operates **ONLY during External Emergency** (War / External Aggression). **NO suspension during Armed Rebellion!** | Operates during **both External and Internal Emergency** (War, Aggression, or Armed Rebellion) |\n| **Articles 20 & 21 Safeguard** | Article 19 only | **Articles 20 & 21 CANNOT BE SUSPENDED under any circumstances** (44th CAA 1978) |\n| **Territorial Scope** | Extends automatically to the **entire country** | Can be restricted to the **whole of India or any specified part** |\n| **Duration** | Operates for the **entire duration** of the National Emergency | Operates for the period **specified in the Presidential Order** (or shorter) |',
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
        syllabusSection: 'GS Paper II: Article 358 vs Article 359, Non-derogable Articles 20 & 21.',
        examNotes: 'UPSC repeatedly tests: Art 358 (Art 19 auto-suspended only for external emergency) vs Art 359 (Presidential order, Arts 20 & 21 inviolable).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Emergency Provisions — Impact on Fundamental Rights.',
        examNotes: 'High yield for 50-word comparison between Article 358 and Article 359.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Rights.',
        examNotes: 'Enforceability of contractual rights during emergency.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Emergency Effects: Centre directs states on ANY matter; Parliament makes laws on State List (State assembly NOT dissolved). Lok Sabha term extendable 1 yr at a time. FR Suspension: Art 358 auto-suspends Art 19 ONLY for External Emergency (war/aggression). Art 359 suspends court enforcement of specified FRs by Presidential Order, but Arts 20 & 21 CAN NEVER BE SUSPENDED (44th CAA).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Federal Effects:** State governments remain functional but subordinate to Union directives; Parliament acquires concurrent power on State List.\n• **House Life:** Lok Sabha term extendable by 1 year at a time.\n• **Article 358:** Auto-suspends Article 19 only for War/External Aggression (not Armed Rebellion).\n• **Article 359:** Suspends judicial remedy for specified FRs; Articles 20 & 21 are completely non-suspendable.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The constitutional firewall created by the 44th Amendment around Articles 20 and 21 guarantees that even under the most severe existential national emergencies, the fundamental right to life, personal liberty, and protection against retrospective criminal punishment remains judicially enforceable.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T20-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'During the operation of a National Emergency declared on grounds of "Armed Rebellion", which of the following statements regarding Fundamental Rights is CORRECT?',
        options: {
          A: 'The fundamental freedoms guaranteed under Article 19 are automatically suspended under Article 358.',
          B: 'The fundamental freedoms under Article 19 CANNOT be suspended under Article 358, because Article 358 operates only during an External Emergency (War or External Aggression).',
          C: 'The right to move courts for enforcement of Article 21 can be suspended by a Presidential Order under Article 359.',
          D: 'All Fundamental Rights in Part III of the Constitution are automatically extinguished.',
        },
        correctAnswer: 'B',
        explanation: 'Following the 44th Constitutional Amendment Act 1978, Article 358 automatically suspends Article 19 freedoms ONLY when the emergency is declared on grounds of War or External Aggression (External Emergency). During an emergency proclaimed on the ground of Armed Rebellion (Internal Emergency), Article 19 is NOT automatically suspended under Article 358.',
        trapExplanation: 'Article 358 does NOT apply to Armed Rebellion emergencies; Articles 20 and 21 can NEVER be suspended under Article 359.',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T20-03',
    slug: 'presidents-rule-article-356-and-sr-bommai-doctrine',
    topicSlug: 'emergency-provisions-and-safeguards',
    topicTitle: 'Part XVIII: Emergency Provisions & Constitutional Safeguards',
    topicOrder: 20,
    title: 'President\'s Rule (Articles 356 & 365): Grounds, Procedure & S.R. Bommai Doctrine',
    shortDefinition: 'State Emergency under Article 356 (breakdown of constitutional machinery) and Article 365 (failure to follow central directions), parliamentary approval within 2 months by Simple Majority, maximum 3-year limit with 44th CAA restrictions, dismissal of state executive and legislative delegation, and the landmark 9-judge ruling in S.R. Bommai v. Union of India (1994) establishing judicial review, floor test primacy, and basic structure protection.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T20-04', 'SEM-T20-05', 'SEM-T20-06'],
    claims: [
      {
        id: 'CLM-T20-03.1',
        statement: 'Under Article 356, President\'s Rule may be proclaimed if the President, on receipt of a report from the Governor or otherwise, is satisfied that a situation has arisen in which the government of the State cannot be carried on in accordance with the Constitution, and must be approved by Parliament within 2 months by Simple Majority in each House.',
        claimType: 'CONSTITUTIONAL_PRESIDENTS_RULE_INVOCATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, Art 356)',
      },
      {
        id: 'CLM-T20-03.2',
        statement: 'Under the 44th Amendment Act 1978, President\'s Rule can be extended beyond 1 year (up to a maximum of 3 years) ONLY if: (1) a National Emergency is in operation in whole or part of the State, AND (2) the Election Commission certifies that general elections to the Legislative Assembly cannot be held.',
        claimType: 'CONSTITUTIONAL_PRESIDENTS_RULE_DURATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, 44th CAA Limits)',
      },
      {
        id: 'CLM-T20-03.3',
        statement: 'In S.R. Bommai v. Union of India (1994), a 9-judge Constitution Bench held that a proclamation under Article 356 is subject to Judicial Review, the Legislative Assembly cannot be dissolved until Parliament approves the proclamation, the floor of the Assembly is the sole forum to test majority, and the Supreme Court can revive a dissolved assembly if the proclamation is unconstitutional.',
        claimType: 'JUDICIAL_SR_BOMMAI_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, S.R. Bommai)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Constitutional Breakdown and the S.R. Bommai Jurisprudential Revolution',
        body: 'Historically the most abused provision of the Constitution (invoked over **130 times** to dismiss opposition-ruled state governments), **Article 356 (President\'s Rule)** allows the Union Executive to assume the governance of a State when its constitutional machinery collapses.\n\nThe landmark 9-judge Supreme Court verdict in ***S.R. Bommai v. Union of India (1994)*** transformed Article 356 from an instrument of partisan executive power into a stringently monitored constitutional remedy of last resort.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Two Invocations, Parliamentary Approval & Duration Limits',
        body: '### Two Constitutional Grounds:\n1. **Article 356:** The President is satisfied (on **Governor\'s report OR *suo motu***) that the state government cannot be carried on in accordance with the Constitution.\n2. **Article 365:** A State fails to comply with or give effect to any **lawful direction from the Union Executive**.\n\n### Parliamentary Approval & Duration:\n• **Approval Window:** Must be approved by both Houses of Parliament within **2 Months** from date of issue.\n• **Majority Required:** **Simple Majority** in each House (unlike Art 352 which requires Special Majority!).\n• **Initial Validity:** Valid for **6 months** once approved.\n• **Ordinary Maximum:** Can be extended every 6 months up to a **maximum of 1 Year**.\n• **Exceptional Extension up to 3 Years (44th CAA 1978):** Beyond 1 year, it can be extended for 6 months at a time up to **3 Years ONLY IF TWO CONDITIONS ARE MET SIMULTANEOUSLY**:\n  1. A **National Emergency (Art 352)** is in operation in the whole of India or in the State, **AND**\n  2. The **Election Commission of India certifies** that holding assembly elections is difficult.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'The Landmark S.R. Bommai Principles (1994)',
        body: '1. **Judicial Review:** The Presidential proclamation under Article 356 is **NOT immune from judicial review**. The court can examine whether the satisfaction was based on relevant material or was *mala fide* (arbitrary/unconstitutional).\n2. **Burden of Proof:** The burden lies on the **Union Government** to prove that relevant material existed to justify the proclamation.\n3. **Assembly Cannot Be Dissolved Before Parliamentary Approval:** The President can only **suspend** the State Legislative Assembly initially. The Assembly can be **dissolved ONLY AFTER Parliament approves the proclamation**.\n4. **Floor Test Primacy:** The floor of the Legislative Assembly is the **sole constitutional forum** to test whether a Ministry has lost its majority. A Governor cannot dismiss a government based on subjective assessment without a floor test.\n5. **Court\'s Power to Restore Government:** If the court finds the proclamation unconstitutional, it has the power to **reactivate the dissolved Legislative Assembly and reinstate the dismissed Ministry** (*e.g. Uttarakhand 2016, Arunachal Pradesh 2016*).\n6. **Secularism as Basic Structure:** Any state government pursuing anti-secular policies or instigating communal violence can be validly dismissed under Article 356.',
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
        syllabusSection: 'GS Paper II: President\'s Rule (Article 356), Article 365, S.R. Bommai Guidelines & Judicial Review.',
        examNotes: 'UPSC frequently tests: S.R. Bommai principles (assembly dissolution only after parliamentary approval, floor test mandatory, court revival of dissolved assemblies), and Simple Majority approval requirement.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: President\'s Rule in India & Rajasthan (4 Invocations: 1967, 1977, 1980, 1992).',
        examNotes: 'Extremely high yield for RPSC: Rajasthan President\'s Rule history (1967 Sampurnanand, 1977, 1980, 1992 Babri fallout) and S.R. Bommai principles.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Administration.',
        examNotes: 'State governance transitions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'President\'s Rule (Art 356 & 365): Approval within 2 MONTHS by SIMPLE MAJORITY in both Houses. Valid 6m, max 1 yr (extendable to max 3 yrs ONLY if National Emergency on + ECI cert). State executive dismissed, assembly suspended/dissolved. SR Bommai (1994): Subject to judicial review; Assembly CANNOT be dissolved before Parliament approves; floor test mandatory; court can restore dissolved assembly.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Grounds:** Article 356 (breakdown of machinery) and Article 365 (non-compliance with directives).\n• **Parliamentary Approval:** 2 months window; Simple Majority; 6-month extensions up to 1 year.\n• **3-Year Extension Rule:** Requires Art 352 emergency + ECI certification.\n• **S.R. Bommai (1994):** Floor test is sole test of majority; dissolution only after Parliament approval; judicial review can restore assembly.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The S.R. Bommai jurisprudence transformed Article 356 from a blunt tool of central majoritarianism into a tightly checked constitutional remedy, establishing the floor test as a non-negotiable norm and empowering constitutional courts to undo unconstitutional assembly dissolutions.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T20-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'According to the landmark Supreme Court judgment in S.R. Bommai v. Union of India (1994), when can the President dissolve a State Legislative Assembly following the proclamation of President\'s Rule under Article 356?',
        options: {
          A: 'Immediately upon issuing the proclamation under Article 356.',
          B: 'Only after the proclamation has been approved by both Houses of Parliament.',
          C: 'Only after the Election Commission gives written permission.',
          D: 'The President can never dissolve a State Legislative Assembly under Article 356.',
        },
        correctAnswer: 'B',
        explanation: 'Under the S.R. Bommai (1994) ruling, the President can only SUSPEND the State Legislative Assembly initially. The Assembly can be dissolved ONLY AFTER the proclamation has been approved by both Houses of Parliament. If Parliament rejects the proclamation, the suspended assembly is revived.',
        trapExplanation: 'Before parliamentary approval, the Assembly can only be suspended, NOT dissolved.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T20-04',
    slug: 'financial-emergency-article-360-invocation-and-consequences',
    topicSlug: 'emergency-provisions-and-safeguards',
    topicTitle: 'Part XVIII: Emergency Provisions & Constitutional Safeguards',
    topicOrder: 20,
    title: 'Financial Emergency (Article 360): Invocation, Indefinite Duration & Distinctive Powers',
    shortDefinition: 'The constitutional architecture of Financial Emergency under Article 360 (threat to financial stability or credit of India), parliamentary approval within 2 months by Simple Majority, the unique rule of indefinite continuation without periodic renewal, executive directions to reduce public salaries (including Supreme Court and High Court judges), reservation of state money bills, and the historical fact that it has never been declared in India.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T20-07'],
    claims: [
      {
        id: 'CLM-T20-04.1',
        statement: 'Under Article 360, the President can proclaim a Financial Emergency if satisfied that a situation has arisen whereby the financial stability or credit of India or any part of its territory is threatened; it must be approved by Parliament within 2 months by Simple Majority, and ONCE APPROVED, IT CONTINUES INDEFINITELY WITHOUT PERIODIC PARLIAMENTARY APPROVAL until revoked by the President.',
        claimType: 'CONSTITUTIONAL_FINANCIAL_EMERGENCY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, Art 360)',
      },
      {
        id: 'CLM-T20-04.2',
        statement: 'During a Financial Emergency under Article 360, the Union Executive can direct any State to observe specified canons of financial propriety, order the reduction of salaries and allowances of all persons serving in the State or Union (including Judges of the Supreme Court and High Courts), and require all State Money Bills to be reserved for Presidential consideration.',
        claimType: 'CONSTITUTIONAL_FINANCIAL_EMERGENCY_POWERS_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 14, Art 360 Powers)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Sovereign Fiscal Safety Net of the Republic',
        body: 'Under **Article 360**, the Constitution equips the Union Government with supreme financial authority to rescue the economic stability and sovereign credit of the nation during extreme financial distress.\n\n⚠️ **Historical Note:** A Financial Emergency has **NEVER been declared in India** to date (not even during the severe balance of payments crisis of 1991).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Invocation, Parliamentary Approval & The "Indefinite Duration" Rule',
        body: '### Invocation (Article 360(1)):\n• Proclaimed by the President if satisfied that the **financial stability or credit of India or any part of its territory is threatened**.\n• Subject to judicial review (38th CAA made satisfaction final, but 44th CAA 1978 deleted it).\n\n### Parliamentary Approval & Duration:\n• **Approval Window:** Must be approved by both Houses of Parliament within **2 Months**.\n• **Majority Required:** **Simple Majority** in each House.\n• ⚠️ **CRITICAL EXAM TRAP (INDEFINITE DURATION):**\n  - Unlike Article 352 (National Emergency) and Article 356 (President\'s Rule) which expire after 6 months and require periodic parliamentary approval, **a Financial Emergency once approved by Parliament CONTINUES INDEFINITELY until revoked by the President!**\n  - There is **no maximum period** prescribed for its operation, and **no repeated parliamentary approval is required**.\n• **Revocation:** Can be revoked by the President at any time by a subsequent proclamation (does not require parliamentary approval).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Executive Powers During Financial Emergency',
        body: '1. **Canons of Financial Propriety:** Union Executive can give directions to any State to observe such canons of financial propriety as specified.\n2. **Reduction of Salaries:** Union can order the reduction of salaries and allowances of:\n   - All or any class of persons serving in connection with the affairs of the State.\n   - All or any class of persons serving in connection with the affairs of the Union, **INCLUDING THE JUDGES OF THE SUPREME COURT AND HIGH COURTS** (in normal times, judicial salaries cannot be reduced to their disadvantage during tenure).\n3. **Reservation of State Money Bills:** All Money Bills or other Financial Bills passed by the State Legislature can be required to be **reserved for the consideration of the President**.',
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
        syllabusSection: 'GS Paper II: Financial Emergency (Article 360) vs National Emergency & President\'s Rule.',
        examNotes: 'UPSC tests: Indefinite duration without 6-month renewal, reduction of SC/HC judges salaries, and the fact that it has never been declared.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Emergency Provisions — Financial Emergency (Article 360).',
        examNotes: 'High yield for 20-word definitions of Article 360.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Sovereign Credit & Financial Emergency Provisions.',
        examNotes: 'Article 360 powers over public finances and banking stability.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Financial Emergency (Art 360): Threat to financial stability/credit. Approved within 2 MONTHS by SIMPLE MAJORITY. ONCE APPROVED, CONTINUES INDEFINITELY WITHOUT PERIODIC PARLIAMENTARY APPROVAL until revoked! Powers: Reduce salaries of all public servants INCLUDING SC/HC Judges; reserve all state money bills for President. Never declared in India.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Ground:** Threat to financial stability or sovereign credit of India.\n• **Parliamentary Approval:** 2 months window; Simple Majority.\n• **Duration:** Once approved, operates indefinitely until revoked (no 6-month renewals needed).\n• **Powers:** Salary cuts for all officials including SC/HC judges; reservation of State money bills.\n• **History:** Never invoked in India.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 360 provides the sovereign republic with total financial centralization during acute fiscal crises, allowing temporary overrides of constitutional salary guarantees and state budgetary autonomy.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T20-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding a Financial Emergency proclaimed under Article 360 of the Constitution of India:\n1. A proclamation of Financial Emergency must be approved by both Houses of Parliament within two months by a Special Majority.\n2. Once approved by Parliament, the Financial Emergency continues indefinitely until it is revoked by the President.\n3. During a Financial Emergency, the President can order a reduction in the salaries and allowances of Supreme Court and High Court judges.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statements 2 and 3 are correct. Statement 1 is incorrect because a proclamation of Financial Emergency requires approval by a SIMPLE MAJORITY in both Houses of Parliament, not a Special Majority.',
        trapExplanation: 'Approval requires a Simple Majority (not Special Majority); once approved, it continues indefinitely without periodic renewal.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
];

export async function seedBatchP4CanonicalKnowledge() {
  console.log(`Seeding Batch P4 Canonical Knowledge (${BATCH_P4_CONCEPTS.length} concepts)...`);

  // Seed semantic units
  await seedBatchP4SemanticInventory();

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
    where: { slug: 'indian-polity' },
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
  const topicsMap: Record<string, { title: string; order: number; concepts: BatchP4ConceptSeedDefinition[] }> = {};
  for (const c of BATCH_P4_CONCEPTS) {
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
          topicId: topic.id,
        },
        create: {
          id: cDef.id,
          slug: cDef.slug,
          topicId: topic.id,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
      });

      // Clear existing child relations to allow idempotent re-seeding
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      // Claims & Evidence
      for (const cl of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: cl.id,
            conceptId: concept.id,
            statement: cl.statement,
            claimType: cl.claimType,
            epistemicLevel: cl.epistemicLevel,
            confidence: cl.confidence,
            status: 'CANONICAL_CLAIM',
          },
        });

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: 'LEGACY-POLITY-VAULT-2026',
            locator: cl.evidenceLocator,
            excerpt: cl.statement,
            evidenceType: 'SECONDARY_COMPILATION',
            authority: 'TIER_C_EDUCATIONAL',
            evidentiarySupport: 'STRONG_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }

      // Content Blocks
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

      // Exam Mappings
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
              requiredDepth: 'PROFICIENT',
              notes: em.examNotes,
            },
          });
        }
      }

      // Revision Units
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

      // Questions
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
            isPYQ: q.isPYQ,
            pyqYear: q.pyqYear || null,
            pyqPaper: q.pyqPaper || null,
          },
        });
      }
    }
  }

  console.log(`Successfully seeded Batch P4 knowledge base. Total concepts: ${BATCH_P4_CONCEPTS.length}.`);
  return BATCH_P4_CONCEPTS.length;
}
