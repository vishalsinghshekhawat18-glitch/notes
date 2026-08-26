import { db } from '../db/client';
import { seedBatchP2SemanticInventory } from '../ingestion/batch-p2-semantic-inventory';

export interface BatchP2ConceptSeedDefinition {
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

export const BATCH_P2_CONCEPTS: BatchP2ConceptSeedDefinition[] = [
  // =========================================================================
  // TOPIC 14: THE UNION LEGISLATURE (6 CONCEPTS: CON-T14-01 to CON-T14-06)
  // =========================================================================
  {
    id: 'CON-T14-01',
    slug: 'parliament-architecture-bicameralism-composition-and-sessions',
    topicSlug: 'the-union-legislature',
    topicTitle: 'Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)',
    topicOrder: 14,
    title: 'Parliament Architecture: Bicameralism (Art 79), Composition & Sessions',
    shortDefinition: 'The tripartite structure of Parliament (President, Rajya Sabha, Lok Sabha under Art 79), federal composition of Rajya Sabha (Art 80), democratic representation in Lok Sabha (Art 81), and constitutional rules for sessions, prorogation, and quorum (Arts 83, 85, 100).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T14-01', 'SEM-T14-02'],
    claims: [
      {
        id: 'CLM-T14-01.1',
        statement: 'Under Article 79, the Parliament of India consists of the President and two Houses: the Council of States (Rajya Sabha) and the House of the People (Lok Sabha), with the President acting as an integral part of Parliament without sitting in either House.',
        claimType: 'CONSTITUTIONAL_PARLIAMENT_STRUCTURE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 58, Art 79)',
      },
      {
        id: 'CLM-T14-01.2',
        statement: 'Under Article 80, the Rajya Sabha is a permanent House not subject to dissolution, with a maximum strength of 250 (238 elected by State MLAs via STV + 12 nominated by the President in Literature, Science, Art, and Social Service), where one-third of members retire every second year.',
        claimType: 'CONSTITUTIONAL_RAJYA_SABHA_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 58, Art 80)',
      },
      {
        id: 'CLM-T14-01.3',
        statement: 'Following the 104th Constitutional Amendment Act 2019 which ended the nomination of 2 Anglo-Indians, the Lok Sabha has a maximum elective strength of 550 (530 from States + 20 from UTs), currently functioning at 543 directly elected members under First-Past-The-Post.',
        claimType: 'CONSTITUTIONAL_LOK_SABHA_COMPOSITION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 58, Art 81, 104th CAA)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Tripartite Bicameral Design of the Union Legislature',
        body: 'Under **Article 79**, the Parliament of India is not merely the two legislative chambers; it is a tripartite institution comprising:\n1. **The President of India**\n2. **The Council of States (Rajya Sabha)**\n3. **The House of the People (Lok Sabha)**\n\nAlthough the President does not sit or participate in regular debates, the President is an indispensable component of Parliament because no bill passed by both Houses can become law without **Presidential Assent (Article 111)**, and the President exercises exclusive constitutional prerogatives to summon, prorogue, and dissolve the Lok Sabha (Article 85).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Rajya Sabha vs Lok Sabha Structural Comparison',
        body: '| Feature | Rajya Sabha (Council of States) | Lok Sabha (House of the People) |\n| :--- | :--- | :--- |\n| **Constitutional Basis** | Article 80 | Article 81 |\n| **Maximum Strength** | **250** (238 elected + 12 nominated) | **550** (530 States + 20 UTs; 104th CAA abolished Anglo-Indians) |\n| **Current Strength** | **245** (225 States + 8 UTs + 12 nominated) | **543** (524 States + 19 UTs) |\n| **Dissolution / Life** | **Permanent House** (Never dissolved; Art 83(1)) | **5 Years** (Subject to prior dissolution; Art 83(2)) |\n| **Member Tenure** | **6 Years** (1/3rd retire every 2nd year) | **5 Years** (Co-terminus with House) |\n| **Minimum Age (Art 84)** | **30 Years** | **25 Years** |\n| **Electoral Method** | Proportional Representation by STV by elected MLAs | Direct adult suffrage via **First-Past-The-Post (FPTP)** |\n| **Exclusive Powers** | 1. Art 312: Create new All-India Services<br>2. Art 249: Legislate on State List<br>3. Arts 352/356/360: Approve emergency when LS dissolved | 1. Arts 109/110: Exclusive Money Bill powers<br>2. Art 75(3): No-Confidence Motion<br>3. Art 113: Exclusive vote on Demands for Grants |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Nominated Members, Sessions & Quorum Rules',
        body: '### Nominated Members in Rajya Sabha (Article 80(3)):\n• The President nominates **12 members** having special knowledge or practical experience in:\n  1. **Literature**\n  2. **Science**\n  3. **Art**\n  4. **Social Service**\n• ⚠️ **EXAM TRAP:** *"Sports"* is NOT an explicit constitutional category in Art 80(3); Sachin Tendulkar was nominated under "Art/Social Service". Furthermore, *"Cooperative Movement"* is listed in State Governor nominations under Article 171, but is NOT in Rajya Sabha Art 80(3).\n\n### Parliamentary Sessions & Quorum (Articles 85 & 100):\n• **Sessions:** President summons each House. Maximum permissible gap between two sessions **shall not exceed 6 months** (Parliament must meet at least twice a year; conventionally meets in 3 sessions: Budget, Monsoon, Winter).\n• **Adjournment vs Prorogation vs Dissolution:**\n  - **Adjournment:** Suspends sitting for hours/days/weeks; done by the **Presiding Officer (Speaker/Chairman)**.\n  - **Adjournment Sine Die:** Terminates sitting without naming a day for reassembly; done by the **Presiding Officer**.\n  - **Prorogation:** Terminates a session of the House; done by the **President of India** under Article 85(2)(a).\n  - **Dissolution:** Ends the very life of the Lok Sabha; done by the **President of India** under Article 85(2)(b) (Rajya Sabha cannot be dissolved).\n• **Quorum (Article 100(3)):** Minimum **10% (1/10th) of the total membership** of the House required to constitute a meeting (55 members in Lok Sabha, 25 members in Rajya Sabha).',
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
        syllabusSection: 'GS Paper II: Parliament and State Legislatures — Structure, Functioning & Conduct of Business.',
        examNotes: 'UPSC frequently tests Rajya Sabha special powers (Articles 249 & 312), 104th CAA Anglo-Indian seat abolition, and the distinction between Adjournment vs Prorogation.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Parliament Architecture, Lok Sabha vs Rajya Sabha.',
        examNotes: 'High yield for Rajasthan representation in Parliament: 25 Lok Sabha seats (4 SC, 3 ST) and 10 Rajya Sabha seats.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Sovereign Legislative Framework.',
        examNotes: 'Parliament as supreme sovereign law-maker.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Parliament (Art 79) = President + RS + LS. RS (Art 80) = Max 250 (238 elected MLAs STV + 12 nominated in Lit/Sci/Art/SocServ; permanent, 6-yr tenure, 1/3rd retire every 2 yrs). LS (Art 81) = 543 elected FPTP (104th CAA ended Anglo-Indians). Quorum (Art 100) = 1/10th. Max gap between sessions = 6 months.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Tripartite Body:** President is integral part of Parliament (assent required for all laws).\n• **Bicameral Balance:** Lok Sabha represents direct popular democracy; Rajya Sabha represents federal state interests.\n• **Nominated Fields:** 4 fields in RS (Literature, Science, Art, Social Service). No sports or cooperation in Art 80(3).\n• **Sessions:** Max 6 months gap; Prorogation/Dissolution by President; Adjournment by Presiding Officer.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The bicameral architecture under Articles 79–81 balances majoritarian national representation with federal state continuity, positioning the permanent Rajya Sabha as a constitutional stabilizer that prevents rash legislative action and preserves state-level federal consensus during executive transitions.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T14-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following special powers is/are EXCLUSIVELY vested in the Rajya Sabha under the Constitution of India?\n1. Authorizing Parliament to make laws on a matter in the State List (Article 249).\n2. Creating one or more new All-India Services (Article 312).\n3. Voting on Demands for Grants for the Union Budget (Article 113).\nSelect the correct answer using the code given below:',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'A',
        explanation: 'Articles 249 and 312 are exclusive federal powers of the Rajya Sabha. Statement 3 is incorrect because voting on Demands for Grants under Article 113 is an exclusive power of the Lok Sabha; Rajya Sabha has no voting power over Demands for Grants.',
        trapExplanation: 'Demands for Grants voting is exclusive to Lok Sabha; Rajya Sabha can only discuss the budget.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2012,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T14-02',
    slug: 'presiding-officers-speaker-vs-chairman-and-disqualifications',
    topicSlug: 'the-union-legislature',
    topicTitle: 'Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)',
    topicOrder: 14,
    title: 'Presiding Officers: Speaker vs Chairman (Arts 89, 93) & Disqualifications',
    shortDefinition: 'The constitutional roles and powers of the Speaker of Lok Sabha and Chairman of Rajya Sabha (Arts 89, 93), casting vote (Art 100), Money Bill certification (Art 110(3)), and the dual disqualification frameworks under Article 102 vs the 10th Schedule (Kihoto Hollohan).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T14-03', 'SEM-T14-04'],
    claims: [
      {
        id: 'CLM-T14-02.1',
        statement: 'Under Articles 93 and 110(3), the Speaker of the Lok Sabha is the final authority to certify whether a bill is a Money Bill, presides over Joint Sittings of Parliament under Article 118(4), exercises a casting vote in case of an equality of votes under Article 100, and submits their resignation to the Deputy Speaker.',
        claimType: 'CONSTITUTIONAL_SPEAKER_POWERS_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 58, Arts 93, 110, 118)',
      },
      {
        id: 'CLM-T14-02.2',
        statement: 'Disqualification of an MP under Article 102(1) (office of profit, unsound mind, insolvency, foreign citizenship) is decided by the President acting on the binding opinion of the Election Commission of India (Art 103), whereas disqualification under the 10th Schedule (Anti-Defection) is decided by the Presiding Officer and is subject to judicial review (Kihoto Hollohan 1992).',
        claimType: 'JUDICIAL_DISQUALIFICATION_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 58, Arts 102-103, 10th Schedule)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Custodians of Parliamentary Sovereignty and House Order',
        body: 'The Presiding Officers—the **Speaker of the Lok Sabha (Article 93)** and the **Chairman of the Rajya Sabha (Article 89)**—act as the constitutional guardians of the dignity, order, and procedural sovereignty of their respective chambers.\n\nWhile the Speaker is elected from amongst the members of the Lok Sabha, the Chairman of the Rajya Sabha is the **Vice-President of India *ex-officio*** (Article 64) and is therefore **NOT a member of the Rajya Sabha**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Speaker of Lok Sabha vs Chairman of Rajya Sabha',
        body: '| Parameter | Speaker of Lok Sabha | Chairman of Rajya Sabha |\n| :--- | :--- | :--- |\n| **Constitutional Provision** | Article 93 | Article 89 (read with Art 64) |\n| **Membership of House** | **Must be an elected member** of Lok Sabha | **NOT a member** of Rajya Sabha (Vice-President) |\n| **Resignation Submitted To** | **Deputy Speaker of Lok Sabha** | **President of India** (as Vice-President) |\n| **Joint Sittings (Art 118(4))**| **PRESIDES** over Joint Sittings | **CANNOT preside** over Joint Sittings |\n| **Money Bill Certification** | **Sole and final authority** (Art 110(3)) | Has no certification power |\n| **Removal Resolution Pending**| Cannot preside; can speak and **VOTE in 1st instance**, but NO casting vote (Art 96) | Cannot preside; can speak, but **CANNOT VOTE AT ALL** (Art 92) |\n| **Casting Vote (Art 100)** | Exercises casting vote in case of tie | Exercises casting vote in case of tie |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Dual Disqualification Architecture: Article 102 vs 10th Schedule',
        body: '### 1. Constitutional Disqualifications (Article 102(1)):\n• Holds any **Office of Profit** under the Government of India or State Government (unless exempted by Parliament under the *Parliament (Prevention of Disqualification) Act, 1959*).\n• Declared of **unsound mind** by a competent court.\n• Undischarged **insolvent**.\n• Not a citizen of India, or voluntarily acquired foreign citizenship.\n• Disqualified by any law made by Parliament (e.g. *Representation of the People Act, 1951* — conviction for $\\ge 2$ years under Sec 8(3)).\n• **Decision-Making Authority (Article 103):** The **President of India** decides. **Crucial Rule:** The President **MUST obtain the opinion of the Election Commission of India (ECI) and ACT ACCORDING TO SUCH OPINION** (the ECI opinion is strictly binding on the President).\n\n### 2. Anti-Defection Disqualifications (10th Schedule / 52nd CAA 1985):\n• Voluntarily gives up party membership; votes or abstains contrary to party whip without 15-day condonation; independent member joins any political party; nominated member joins a political party *after 6 months*.\n• **Decision-Making Authority:** The **Speaker of Lok Sabha** or **Chairman of Rajya Sabha**.\n• **Judicial Review (*Kihoto Hollohan v. Zachillhu, 1992*):** The Presiding Officer acts as a **Tribunal** while deciding anti-defection petitions. The decision is **subject to Judicial Review** by High Courts and Supreme Court on grounds of *mala fides*, perversity, or violation of natural justice (though courts will not intervene before the Presiding Officer makes a formal decision).',
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
        syllabusSection: 'GS Paper II: Presiding Officers, Article 102 vs 10th Schedule & Kihoto Hollohan.',
        examNotes: 'UPSC tests the decision authority difference: Article 102 = President + ECI binding advice; 10th Schedule = Speaker/Chairman as Tribunal subject to judicial review.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Speaker Powers, Money Bill Certification & Disqualifications.',
        examNotes: 'High yield for Speaker resignation (to Deputy Speaker) and Article 103 ECI binding role.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Parliamentary Governance.',
        examNotes: 'Presiding officer authority.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Speaker (Art 93): Elected by LS; resigns to Deputy Speaker; presides Joint Sittings (Art 118(4)); certifies Money Bills (Art 110(3)); casting vote (Art 100). Disqualification: Art 102 (Office of profit, conviction) -> Decided by President on BINDING ECI opinion (Art 103). 10th Schedule (Defection) -> Decided by Speaker/Chairman (Kihoto Hollohan: reviewable).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Speaker Special Powers:** Sole Money Bill certifier; Joint Sitting chair; casting vote on ties.\n• **Speaker Resignation:** Submits to Deputy Speaker, NOT the President.\n• **Chairman RS:** Vice-President ex-officio; cannot preside over Joint Sittings; resigns to President.\n• **Disqualification Split:** Art 102 grounds = President on ECI advice (Art 103); Defection grounds = Speaker/Chairman as tribunal (Kihoto Hollohan).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The bifurcated disqualification architecture under Articles 102–103 and the Tenth Schedule separates pure statutory electoral integrity (entrusted to the non-partisan ECI and the Head of State) from legislative party cohesion and parliamentary floor discipline (entrusted to the Presiding Officer as a quasi-judicial tribunal).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T14-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Who decides whether a Member of Parliament has become subject to disqualification under the Tenth Schedule (Anti-Defection Law) to the Constitution of India?',
        options: {
          A: 'The President of India on the advice of the Election Commission of India',
          B: 'The Supreme Court of India',
          C: 'The Chairman of the Rajya Sabha or the Speaker of the Lok Sabha',
          D: 'The Union Ministry of Law and Justice',
        },
        correctAnswer: 'C',
        explanation: 'Under Paragraph 6 of the Tenth Schedule, questions of disqualification arising out of defection are decided by the Chairman in the case of Rajya Sabha and by the Speaker in the case of Lok Sabha. In Kihoto Hollohan (1992), the SC affirmed that the Presiding Officer acts as a Tribunal subject to judicial review.',
        trapExplanation: 'Option A is the procedure for Article 102 disqualifications, NOT the Tenth Schedule.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2014,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T14-03',
    slug: 'legislative-enactments-classification-of-bills-and-joint-sittings',
    topicSlug: 'the-union-legislature',
    topicTitle: 'Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)',
    topicOrder: 14,
    title: 'Legislative Enactments: Classification of Bills (Arts 107–110, 117) & Joint Sittings (Art 108)',
    shortDefinition: 'The four-tier classification of parliamentary bills (Ordinary, Money, Financial Types I & II), Speaker’s Money Bill certification, Article 108 Joint Sittings architecture with strict exclusions (Money Bills & CAAs), and Article 107 rules on the lapse of bills upon dissolution.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T14-05', 'SEM-T14-06', 'SEM-T14-07'],
    claims: [
      {
        id: 'CLM-T14-03.1',
        statement: 'Under Article 110, a Money Bill must contain ONLY provisions dealing with 7 specified tax, debt, and Consolidated Fund matters, can be introduced ONLY in the Lok Sabha on the prior recommendation of the President, and Rajya Sabha can delay it for a maximum of 14 days without power of amendment or rejection.',
        claimType: 'CONSTITUTIONAL_MONEY_BILL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 29, Arts 109, 110)',
      },
      {
        id: 'CLM-T14-03.2',
        statement: 'Under Article 108, a Joint Sitting can be summoned by the President to resolve a legislative deadlock between the two Houses ONLY for Ordinary Bills and Financial Bills (Types I & II), and is strictly prohibited for Money Bills (Article 109) and Constitutional Amendment Bills (Article 368).',
        claimType: 'CONSTITUTIONAL_JOINT_SITTING_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 29, Art 108)',
      },
      {
        id: 'CLM-T14-03.3',
        statement: 'Under Article 107, upon dissolution of the Lok Sabha, all bills pending in the Lok Sabha and all bills passed by the Lok Sabha and pending in the Rajya Sabha lapse, while bills originated in and pending in the Rajya Sabha, bills passed by both Houses awaiting Presidential assent, and bills returned by the President do not lapse.',
        claimType: 'CONSTITUTIONAL_LAPSE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 29, Art 107)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Four Categories of Parliamentary Legislation',
        body: 'The Constitution establishes four distinct classes of legislative bills, each subjected to different procedural rules, introduction chambers, presidential recommendations, and Rajya Sabha powers:\n1. **Ordinary Bills (Articles 107, 108)**\n2. **Money Bills (Articles 109, 110)**\n3. **Financial Bills — Category I (Article 117(1))**\n4. **Financial Bills — Category II (Article 117(3))**\n*(Constitutional Amendment Bills under Article 368 constitute an independent fifth sovereign category).*',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Master Comparative Matrix of Legislative Bills',
        body: '| Feature | Ordinary Bill | Money Bill (Art 110) | Financial Bill (I) (Art 117(1)) | Financial Bill (II) (Art 117(3)) |\n| :--- | :--- | :--- | :--- | :--- |\n| **Subject Matter** | Any general matter | Contains **ONLY** the 7 matters in Art 110(1) | Art 110 matter + General legislation | General legislation involving expenditure from CFI |\n| **Introduction Chamber** | Either LS or RS | **Lok Sabha ONLY** (Art 109(1)) | **Lok Sabha ONLY** | **Either LS or RS** |\n| **Prior President Recommendation**| Not required | **MANDATORY** (Art 117(1)) | **MANDATORY** (Art 117(1)) | Not needed for intro; **Needed for Consideration** |\n| **Rajya Sabha Powers** | Equal powers (Can amend/reject) | **No power to reject/amend**; Max **14 days** | Equal powers (Can amend/reject) | Equal powers (Can amend/reject) |\n| **Joint Sitting (Art 108)** | **YES** (If deadlock > 6 months)| **NO** (Strictly Barred) | **YES** | **YES** |\n| **Presidential Veto (Art 111)**| Assent, Withhold, or Return | Assent or Withhold (**CANNOT RETURN**) | Assent, Withhold, or Return | Assent, Withhold, or Return |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Joint Sitting Architecture (Article 108) & Dissolution Lapse Rules (Article 107)',
        body: '### Joint Sitting (Article 108):\n• **Trigger:** If after a bill is passed by one House and sent to the other: (a) rejected by the other House, (b) Houses disagree on amendments, or (c) more than **6 months elapse** without being passed.\n• **Summoned by:** The **President of India** by notification.\n• **Presided by:** **Speaker of Lok Sabha** $\\rightarrow$ in absence, Deputy Speaker $\\rightarrow$ in absence, Deputy Chairman of Rajya Sabha (⚠️ **Chairman of Rajya Sabha NEVER presides**).\n• **Majority Required:** **Simple Majority** of the total number of members of both Houses present and voting (Lok Sabha’s numerical superiority of 543 vs 245 usually guarantees passage).\n• **Strict Bars:** **NEVER held for Money Bills (Art 109) or Constitutional Amendment Bills (Art 368)**.\n\n### Rules on Lapse of Bills upon Lok Sabha Dissolution (Article 107):\n• **BILLS THAT LAPSE:**\n  1. A Bill pending in the **Lok Sabha** (whether originated in LS or transmitted from RS).\n  2. A Bill passed by the **Lok Sabha** but pending in the **Rajya Sabha**.\n• **BILLS THAT DO NOT LAPSE:**\n  1. A Bill originated in the **Rajya Sabha and pending in the Rajya Sabha** (not yet passed by Lok Sabha).\n  2. A Bill passed by **BOTH Houses** and waiting for the **Assent of the President**.\n  3. A Bill passed by **BOTH Houses** and returned by the President for reconsideration.\n  4. A Bill where the President has already notified intention to summon a **Joint Sitting** before dissolution.',
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
        syllabusSection: 'GS Paper II: Legislative Procedure, Money Bill vs Financial Bill & Lapse of Bills.',
        examNotes: 'UPSC repeatedly tests Financial Bill Type I vs Type II differences, Article 107 lapse rules, and Joint Sitting presiding order.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Legislative Procedure in Parliament, Money Bills & Joint Sittings.',
        examNotes: 'High yield for 14-day Rajya Sabha limitation and Money Bill definition under Article 110.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Banking Financial Legislation.',
        examNotes: 'Finance Act enacted annually as a Money Bill.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Money Bill (Art 110): Only 7 tax/debt/CFI items; LS only; President prior nod; RS 14-day limit; NO joint sitting; President CANNOT return. Financial Bill I (Art 117(1)): LS only, President nod, RS equal power, Joint sitting YES. Financial Bill II (Art 117(3)): Either house, President nod for consideration only. Joint Sitting (Art 108): Speaker presides; barred for Money/CAA. Lapse (Art 107): LS pending / LS passed lapses; RS only pending does not lapse.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Money Bill (110):** Speaker certificate final; RS has 14 days; President cannot return.\n• **Financial I (117(1)):** Introduced in LS with President recommendation, but treated as Ordinary Bill thereafter (RS has equal powers, Joint Sitting applies).\n• **Financial II (117(3)):** Introduced in either House without prior recommendation; needs recommendation before consideration.\n• **Joint Sitting (108):** Speaker presides (RS Chairman never presides); passed by simple majority.\n• **Lapse Rules (107):** LS pending lapses; RS pending (not passed by LS) survives.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The legislative classification framework balances the democratic primacy of the directly elected Lok Sabha over public taxation and the national purse (Articles 109–110) with the federal deliberative scrutiny of the Rajya Sabha over general policy and substantive social legislation (Articles 107–108).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T14-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'Regarding the dissolution of the Lok Sabha, which of the following bills DOES NOT lapse under Article 107 of the Constitution?',
        options: {
          A: 'A bill originated in the Lok Sabha and pending in the Lok Sabha.',
          B: 'A bill passed by the Lok Sabha but pending in the Rajya Sabha.',
          C: 'A bill originated in the Rajya Sabha and pending in the Rajya Sabha, which has not been passed by the Lok Sabha.',
          D: 'A bill originated in the Lok Sabha and transmitted to the Rajya Sabha on which no action has been taken for 3 months.',
        },
        correctAnswer: 'C',
        explanation: 'Under Article 107(4), a bill pending in the Rajya Sabha which has not been passed by the Lok Sabha shall not lapse on a dissolution of the House of the People, because it has never been seized by the dissolved House.',
        trapExplanation: 'If the Lok Sabha has touched or passed the bill, it lapses; if it is purely pending in Rajya Sabha, it survives.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T14-04',
    slug: 'parliamentary-financial-control-and-budget-procedure',
    topicSlug: 'the-union-legislature',
    topicTitle: 'Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)',
    topicOrder: 14,
    title: 'Parliamentary Financial Control: Budget Procedure & Cut Motions (Arts 112–116)',
    shortDefinition: 'The six-stage procedure of the Union Budget (Annual Financial Statement under Art 112), distinction between Charged and Voted expenditure, Demands for Grants (Art 113), the three Cut Motions (Policy, Economy, Token), the Guillotine, and Appropriation vs Finance Bills.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T14-08', 'SEM-T14-09', 'SEM-T14-10'],
    claims: [
      {
        id: 'CLM-T14-04.1',
        statement: 'Under Article 112, the Constitution refers to the budget as the "Annual Financial Statement", dividing expenditure into Expenditure Charged upon the Consolidated Fund of India (discussed but non-votable) and Expenditure Made from the Consolidated Fund of India (voted exclusively by the Lok Sabha as Demands for Grants under Article 113).',
        claimType: 'CONSTITUTIONAL_BUDGET_STRUCTURE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 30, Arts 112-113)',
      },
      {
        id: 'CLM-T14-04.2',
        statement: 'Under Article 114, no money can be withdrawn from the Consolidated Fund of India without the enactment of the Appropriation Bill, and under Article 116(1)(a), Parliament passes a Vote on Account to provide advance operational funds to the Government pending the completion of the full budgetary cycle.',
        claimType: 'CONSTITUTIONAL_APPROPRIATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 30, Arts 114, 116)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Constitutional Power of the Purse (Articles 265 & 266)',
        body: 'Parliamentary democracy is founded on the principle that the Executive cannot levy taxes or spend public revenue without explicit statutory authorization from Parliament:\n1. **Article 265:** *"No tax shall be levied or collected except by authority of law."*\n2. **Article 266(3):** *"No moneys out of the Consolidated Fund of India shall be appropriated except in accordance with law and for the purposes and in the manner provided in this Constitution."*\n\nThe word *"Budget"* does not appear anywhere in the Constitution; **Article 112** designates it as the **Annual Financial Statement (AFS)**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 6 Stages of the Budget in Parliament',
        body: '1. **Stage 1: Presentation of Budget (Article 112):** Presented by the Finance Minister in the Lok Sabha on **1st February** (since 2017 reform; Railway Budget merged with Union Budget). No discussion on day of presentation.\n2. **Stage 2: General Discussion:** Broad fiscal and macroeconomic principles discussed for 3–4 days in both Houses. No voting; no cut motions allowed.\n3. **Stage 3: Scrutiny by Departmentally Related Standing Committees (DRSCs):** Parliament adjourns for 3–4 weeks. The **24 DRSCs** scrutinize detailed Demands for Grants of all ministries and submit reports to both Houses.\n4. **Stage 4: Voting on Demands for Grants (Article 113):** **EXCLUSIVE TO LOK SABHA** (Rajya Sabha has no voting power). Cut Motions are moved. On the final allotted day, the Speaker applies the **"Guillotine"** (putting all remaining undiscussed demands to vote together).\n5. **Stage 5: Passage of Appropriation Bill (Article 114):** Authorizes the legal withdrawal of money from the Consolidated Fund of India for both Voted grants and Charged expenditure.\n6. **Stage 6: Passage of Finance Bill:** Enacts the government’s taxation proposals to legalise revenue collection (must be passed within **75 days** under the *Provisional Collection of Taxes Act, 1931*).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Charged vs Voted Expenditure & The 3 Cut Motions',
        body: '### Charged vs Voted Expenditure (Article 112(3)):\n• **Charged Expenditure (Non-Votable):** Discussed by both Houses, but **NOT voted on**. Includes:\n  - Emoluments of President, Vice-President, Speaker/Deputy Speaker, Chairman/Deputy Chairman.\n  - Salaries, allowances, and pensions of **Supreme Court Judges**.\n  - Salaries, allowances, and pensions of the **CAG** and **UPSC Members**.\n  - ⚠️ **CRITICAL EXAM TRAP:** High Court Judges’ **Salaries are charged on the State Consolidated Fund**, but their **Pensions are charged on the Consolidated Fund of India!**\n• **Voted Expenditure:** Voted upon as Demands for Grants exclusively in the Lok Sabha.\n\n### The 3 Cut Motions in Lok Sabha:\n1. **Policy Disapproval Cut:** *"That the amount of the demand be reduced to **₹1**."* (Represents complete disapproval of underlying policy; member must advocate an alternative policy).\n2. **Economy Cut:** *"That the amount of the demand be reduced by a **specified amount**."* (Proposes economy in stated expenditure).\n3. **Token Cut:** *"That the amount of the demand be reduced by **₹100**."* (Ventilates a specific grievance within government responsibility).\n• ⚠️ **CONSTITUTIONAL IMPLICATION:** If ANY Cut Motion is passed in Lok Sabha, it amounts to a **Vote of No-Confidence**, and the Council of Ministers MUST resign!',
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
        syllabusSection: 'GS Paper II: Parliament Budget Procedure, Cut Motions & Charged Expenditure.',
        examNotes: 'UPSC frequently tests High Court Judges pension vs salary charging, Cut Motion classifications (Policy Disapproval ₹1 vs Token ₹100), and Guillotine mechanism.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Budgetary Procedure in Parliament and State Assembly.',
        examNotes: 'High yield for 20-word definitions of Appropriation Bill, Vote on Account, and Guillotine.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'IMPORTANT',
        weightage: 'MEDIUM',
        syllabusSection: 'Fiscal Policy & Union Budget Formulation.',
        examNotes: 'Annual Financial Statement structure and fiscal deficit authorizations.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Budget = Annual Financial Statement (Art 112). 6 Stages: Presentation -> General Discussion -> DRSC Scrutiny -> Voting on Demands (LS only, Art 113) -> Appropriation Bill (Art 114 withdrawal power) -> Finance Bill (tax law). Cut Motions: Policy (₹1), Economy (specified sum), Token (₹100). Passing cut motion = Govt falls. HC salary on State; HC pension on Union.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Power of Purse:** Art 265 (No tax without law); Art 266(3) (No withdrawal without Appropriation Act).\n• **Charged vs Voted:** Charged items (SC judges, CAG) are discussed but non-votable.\n• **High Court Trap:** HC salaries charged on State Consolidated Fund; HC pensions charged on Consolidated Fund of India.\n• **Cut Motions:** Policy Disapproval (reduces demand to ₹1); Economy Cut (reduces by amount); Token Cut (reduces by ₹100).\n• **Guillotine:** Speaker puts all remaining demands to vote together on last day.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The six-stage budget procedure enforces complete legislative supremacy over public finances by mandating that expenditure demands must undergo committee-level scrutiny and chamber voting before the Appropriation Act converts executive proposals into legally enforceable spending limits.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T14-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following expenditures is/are CHARGED upon the Consolidated Fund of India under Article 112(3) of the Constitution?\n1. Salaries and allowances of the Judges of the High Courts.\n2. Pensions of the Judges of the High Courts.\n3. Salaries, allowances, and pensions of the Judges of the Supreme Court.\nSelect the correct answer using the code given below:',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 112(3)(d), pensions of High Court Judges are charged upon the Consolidated Fund of India, while their salaries and allowances are charged upon the Consolidated Fund of the State (Article 202(3)(d)). Supreme Court Judges salaries, allowances, and pensions are all charged upon the Consolidated Fund of India.',
        trapExplanation: 'High Court Judge salaries are paid by the State, but their pensions are paid by the Union to maintain judicial independence during transfers.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T14-05',
    slug: 'parliamentary-standing-committees-pac-estimates-copu-and-drscs',
    topicSlug: 'the-union-legislature',
    topicTitle: 'Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)',
    topicOrder: 14,
    title: 'Parliamentary Standing Committees: PAC (1921), Estimates (1950), COPU (1964) & DRSCs',
    shortDefinition: 'The three premier Financial Standing Committees (Public Accounts Committee, Estimates Committee with 30 LS-only members, Committee on Public Undertakings), the 24 Departmentally Related Standing Committees (DRSCs), and the constitutional ban on ministerial membership.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T14-11', 'SEM-T14-12'],
    claims: [
      {
        id: 'CLM-T14-05.1',
        statement: 'The Public Accounts Committee (PAC, established 1921) consists of 22 members (15 Lok Sabha + 7 Rajya Sabha) elected by proportional representation by single transferable vote, with its Chairman conventionally appointed by the Speaker from the Opposition since 1967 to examine CAG audit reports.',
        claimType: 'PARLIAMENTARY_COMMITTEE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 30, Financial Committees)',
      },
      {
        id: 'CLM-T14-05.2',
        statement: 'The Estimates Committee (established 1950 on the recommendation of John Mathai) is the largest Parliamentary Committee consisting of 30 members drawn EXCLUSIVELY from the Lok Sabha (zero Rajya Sabha representation), and a Minister cannot be elected as a member of any financial standing committee.',
        claimType: 'PARLIAMENTARY_ESTIMATES_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 30, Estimates Committee)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Committees as the "Eyes and Ears" of Parliament',
        body: 'Because Parliament is too large a body and lacks the specialized time to examine complex legislative bills, fiscal expenditures, and executive administration in detail, it functions through a network of **Parliamentary Committees** appointed or elected under **Article 118(1)**.\n\nA committee is a Parliamentary Committee only if: (1) Appointed/elected by the House or nominated by the Presiding Officer; (2) Works under direction of the Presiding Officer; (3) Presents report to the House/Presiding Officer; (4) Has a secretariat provided by Lok Sabha/Rajya Sabha.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'The Three Financial Standing Committees Comparison',
        body: '| Committee | Origin & Genesis | Composition | Chairman Appointment | Core Functional Mandate |\n| :--- | :--- | :--- | :--- | :--- |\n| **Public Accounts Committee (PAC)** | Set up in **1921** under the *Government of India Act, 1919* | **22 Members** (15 Lok Sabha + 7 Rajya Sabha) | Appointed by Speaker; by convention from the **OPPOSITION** since 1967 | Examines the Appropriation accounts, Finance accounts, and the **CAG Audit Reports**. Acts as watchdog against financial waste (*ex-post audit*). |\n| **Estimates Committee** | Set up in **1950** on the recommendation of Finance Minister **John Mathai** | **30 Members** (**ALL 30 FROM LOK SABHA ONLY**; Zero RS!) | Appointed by Speaker from the **RULING PARTY** | Examines budget estimates to suggest economies, organizational efficiency, and policy improvements (*"Continuous Economy Committee"*). |\n| **Committee on Public Undertakings (COPU)** | Set up in **1964** on the recommendation of **Krishna Menon Committee** | **22 Members** (15 Lok Sabha + 7 Rajya Sabha) | Appointed by Speaker from amongst **Lok Sabha members ONLY** | Examines reports and accounts of Public Sector Undertakings (PSUs) and CAG audit reports on commercial enterprises. |\n\n• ⚠️ **CRUCIAL UNIVERSAL RULE:** A **Minister CANNOT be elected** as a member of the PAC, Estimates Committee, or COPU. If a member becomes a Minister, they cease to be a committee member.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Departmentally Related Standing Committees (24 DRSCs)',
        body: '• **Structure:** Initiated in 1993, there are currently **24 DRSCs** covering all Union ministries (16 work under Lok Sabha Speaker, 8 work under Rajya Sabha Chairman).\n• **Composition:** Each DRSC consists of **31 members** (21 from Lok Sabha nominated by Speaker + 10 from Rajya Sabha nominated by Chairman).\n• **Term:** 1 year. Ministers cannot be nominated.\n• **Core Functions:**\n  1. Scrutinize the Demands for Grants of the concerned ministries during the budget recess.\n  2. Examine legislative bills referred by the Presiding Officer.\n  3. Consider annual reports of ministries.\n• **Advisory Nature:** Reports of DRSCs are recommendatory in nature and not legally binding on the Government, but carry immense moral and parliamentary weight.',
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
        syllabusSection: 'GS Paper II: Parliamentary Committees, PAC, Estimates Committee & DRSCs.',
        examNotes: 'UPSC repeatedly tests: Estimates Committee has 30 members all from LS; PAC chairman from Opposition convention; ban on Ministers in committees.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Financial Committees of Parliament & State Assembly Committees.',
        examNotes: 'High yield for 20-word definitions of PAC and Estimates Committee composition.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'PSU Oversight.',
        examNotes: 'COPU reviews public sector banking and enterprise reports.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PAC (1921): 22 mem (15 LS + 7 RS), Opposition chair since 1967, examines CAG reports. Estimates (1950, John Mathai): 30 mem (ALL LS ONLY), largest committee, suggests economies. COPU (1964, Krishna Menon): 22 mem (15 LS + 7 RS). 24 DRSCs: 31 mem (21 LS + 10 RS). Ministers CANNOT be members of financial committees.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **PAC:** 15 LS + 7 RS; opposition leader as chairman; examines CAG audit reports.\n• **Estimates Committee:** 30 members ALL from Lok Sabha (zero Rajya Sabha representation); continuous economy committee.\n• **COPU:** 15 LS + 7 RS; examines public sector enterprises.\n• **Universal Rule:** Ministers are strictly barred from membership in all 3 financial committees.\n• **DRSCs:** 24 committees, 31 members each (21 LS + 10 RS); scrutinize budget demands.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The parliamentary standing committee subsystem operates as an institutionalized non-partisan accountability filter, enabling detailed multi-party scrutiny of executive expenditure and legislative drafts away from the televised adversarial posturing of the parliamentary chamber floor.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T14-05-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Parliamentary Committees in India, consider the following statements:\n1. The Estimates Committee is the largest committee of Parliament, having members drawn exclusively from the Lok Sabha.\n2. A Union Cabinet Minister can be appointed as the Chairman of the Public Accounts Committee.\n3. The Public Accounts Committee examines the annual audit reports of the Comptroller and Auditor-General of India.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '1 and 3 only',
          C: '2 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect because a Minister cannot be elected or appointed as a member or Chairman of the Public Accounts Committee (or any financial committee); by convention since 1967, the PAC Chairman is appointed from the Opposition.',
        trapExplanation: 'Ministers are strictly disqualified from sitting on financial committees to prevent conflict of interest.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T14-06',
    slug: 'parliamentary-privileges-motions-and-procedural-devices',
    topicSlug: 'the-union-legislature',
    topicTitle: 'Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)',
    topicOrder: 14,
    title: 'Parliamentary Privileges (Art 105), Motions & Procedural Devices',
    shortDefinition: 'Constitutional privileges and immunities of Parliament (Article 105), individual vs collective privileges, parliamentary devices (Question Hour, Zero Hour, Calling Attention), and major motions (No-Confidence, Adjournment, Censure).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T14-13'],
    claims: [
      {
        id: 'CLM-T14-06.1',
        statement: 'Under Article 105, Members of Parliament enjoy freedom of speech in Parliament and complete immunity from court proceedings in respect of anything said or any vote given by them in Parliament or its committees, subject only to the constitutional provisions and parliamentary rules of procedure.',
        claimType: 'CONSTITUTIONAL_PRIVILEGES_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 58, Art 105)',
      },
      {
        id: 'CLM-T14-06.2',
        statement: 'A No-Confidence Motion under Lok Sabha Rule 198 can be moved only in the Lok Sabha with the support of at least 50 members, does not require stating reasons, and if passed by a simple majority, obligates the entire Council of Ministers to resign.',
        claimType: 'PARLIAMENTARY_MOTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 58, Rule 198)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Protecting Parliamentary Autonomy and Executive Accountability',
        body: 'To perform their constitutional duties without fear of executive coercion, judicial interference, or external intimidation, the Constitution grants special **Powers, Privileges, and Immunities** to Parliament, its committees, and its members under **Article 105** (and to State Legislatures under **Article 194**).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Individual vs Collective Privileges (Article 105)',
        body: '### 1. Individual Privileges of Members:\n• **Freedom of Speech in Parliament (Art 105(1)):** Complete immunity from civil/criminal liability in any court for anything said or any vote cast in Parliament.\n• **Immunity from Civil Arrest:** Cannot be arrested in **civil cases** during the session of Parliament and **40 days before and 40 days after** the session.\n  - ⚠️ **EXAM TRAP:** This immunity applies **ONLY to civil cases**. It does **NOT extend to criminal offences or preventive detention!**\n• **Exemption from Jury/Witness Service:** Cannot be summoned as a witness in court during session without permission of the House.\n\n### 2. Collective Privileges of the House:\n• Right to publish debates and reports, and the right to **prohibit others from publishing** unauthorized reports.\n• Right to exclude strangers and hold **secret (in-camera) sittings**.\n• Right to regulate internal procedure and adjudicate upon parliamentary matters without court interference (Article 122).\n• **Power to Punish for Contempt:** The House has the penal power to reprimand, admonish, or imprison members or outsiders for **Breach of Privilege** (*Searchlight Case 1959*, *Raja Ram Pal 2007*).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Procedural Devices: Question Hour, Zero Hour & Major Motions',
        body: '### Parliamentary Hours:\n• **Question Hour (1st hour of sitting, 11 AM – 12 PM):**\n  1. **Starred Questions:** Require an **oral answer**; supplementary questions **CAN be asked**.\n  2. **Unstarred Questions:** Require a **written answer**; supplementary questions **CANNOT be asked**.\n  3. **Short Notice Questions:** Asked on matters of urgent public importance with less than 10 days notice; answered orally.\n• **Zero Hour (Starts at 12 PM immediately after Question Hour):**\n  - An **informal Indian parliamentary innovation (introduced in 1962)**; not mentioned in Rules of Procedure. Members raise urgent matters without prior notice.\n\n### Major Parliamentary Motions:\n| Motion | Key Mechanism & Voting | Constitutional Consequence |\n| :--- | :--- | :--- |\n| **No-Confidence Motion (Rule 198)** | Moved in **Lok Sabha ONLY**; requires support of **50 MPs**; no reasons needed. | If passed, the **entire Council of Ministers MUST resign** (Art 75(3)). |\n| **Censure Motion** | Moved in **Lok Sabha ONLY**; must state specific reasons/policies against a minister or COM. | If passed, COM **does not need to resign**, but must regain house confidence. |\n| **Adjournment Motion** | Requires support of **50 MPs** in Lok Sabha to draw attention to a definite urgent matter of public importance. | Involves an element of censure; interrupts regular business for 2.5+ hours. |\n| **Calling Attention Motion** | Indian parliamentary innovation (1954); calls minister’s attention to urgent matter. | Authoritative statement by Minister; does NOT involve censure. |',
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
        syllabusSection: 'GS Paper II: Parliamentary Privileges (Art 105), No-Confidence Motion & Question Hour.',
        examNotes: 'UPSC tests: Starred vs Unstarred questions (supplementaries allowed in Starred only), Civil arrest immunity 40-day rule (does not apply to criminal cases), Zero Hour is an Indian innovation.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Legislative Privileges & Motions in State Assembly.',
        examNotes: 'High yield for 20-word definitions of Adjournment Motion, Zero Hour, and Starred Questions.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Parliamentary Accountability.',
        examNotes: 'Parliamentary questions on public sector banking.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Privileges (Art 105): Speech immunity in House; Civil arrest immunity (40 days before/after, NOT for criminal cases); Contempt punishment power. Starred Question = Oral answer + supplementaries. Unstarred = Written answer + NO supplementaries. Zero Hour = Indian innovation (1962). No-Confidence Motion = LS only, 50 MPs support, passing forces Govt resignation.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 105 Privileges:** Individual (freedom of speech, civil arrest immunity 40 days) + Collective (in-camera sittings, contempt power).\n• **Question Hour:** Starred (oral + supplementaries); Unstarred (written, no supplementaries).\n• **Zero Hour:** Indian innovation since 1962 (starts at 12 PM; not in rulebook).\n• **No-Confidence Motion:** Lok Sabha only, 50 members to admit; forces cabinet resignation.\n• **Censure Motion:** States specific faults; does not immediately force resignation.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 105 immunities and chamber procedural motions form the operational core of daily executive accountability, protecting lawmakers from civil harassment while equipping the opposition with calibrated mechanisms ranging from information extraction (Question Hour) to total government dismissal (No-Confidence Motion).',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T14-06-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Parliament of India, what is the difference between a Starred Question and an Unstarred Question during Question Hour?',
        options: {
          A: 'A Starred Question requires a written answer and supplementary questions can follow, whereas an Unstarred Question requires an oral answer and no supplementaries are allowed.',
          B: 'A Starred Question requires an oral answer and supplementary questions can follow, whereas an Unstarred Question requires a written answer and no supplementary questions can follow.',
          C: 'Starred Questions can be asked only by Opposition members, while Unstarred Questions can be asked by any member.',
          D: 'Starred Questions require 10 days notice, while Unstarred Questions require no prior notice.',
        },
        correctAnswer: 'B',
        explanation: 'A Starred Question is distinguished by an asterisk mark and requires an oral answer on the floor of the House, allowing members to ask supplementary questions based on the Minister’s reply. An Unstarred Question requires a written answer laid on the table, and no supplementary questions can be asked.',
        trapExplanation: 'Option A inverts the definitions; Starred = Oral + Supplementary; Unstarred = Written + No supplementary.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 15: THE STATE LEGISLATURE (4 CONCEPTS: CON-T15-01 to CON-T15-04)
  // =========================================================================
  {
    id: 'CON-T15-01',
    slug: 'state-legislature-architecture-and-creation-abolition-of-councils',
    topicSlug: 'the-state-legislature',
    topicTitle: 'Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)',
    topicOrder: 15,
    title: 'State Legislature Architecture & Creation/Abolition of Councils (Art 169)',
    shortDefinition: 'The constitutional structure of State Legislatures under Part VI, bicameral vs unicameral states (Article 168), Legislative Assembly strength (Article 170), and the two-stage procedure for creating or abolishing Legislative Councils under Article 169.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T15-01', 'SEM-T15-02'],
    claims: [
      {
        id: 'CLM-T15-01.1',
        statement: 'Under Article 168, State Legislatures may be unicameral (Governor + Legislative Assembly) or bicameral (Governor + Legislative Assembly + Legislative Council), with currently 6 States maintaining bicameral legislatures: Uttar Pradesh, Bihar, Maharashtra, Karnataka, Andhra Pradesh, and Telangana.',
        claimType: 'CONSTITUTIONAL_STATE_LEGISLATURE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 168)',
      },
      {
        id: 'CLM-T15-01.2',
        statement: 'Under Article 169, Parliament can by law abolish an existing Legislative Council or create a new one if the Legislative Assembly of the State passes a resolution to that effect by a Special Majority (majority of total membership and not less than 2/3rd members present and voting), and Parliament passes the law by a Simple Majority, which is not deemed an amendment under Article 368.',
        claimType: 'CONSTITUTIONAL_COUNCIL_CREATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 169)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Unicameralism vs Asymmetric State Bicameralism',
        body: 'Under **Part VI (Articles 168–212)**, the Constitution provides for a legislature in every State. However, unlike Parliament which is mandatorily bicameral, State Legislatures are predominantly **unicameral**.\n\nIn a unicameral State, the State Legislature consists of the **Governor and the Legislative Assembly (Vidhan Sabha)**. In a bicameral State, it consists of the **Governor, the Legislative Assembly (Vidhan Sabha), and the Legislative Council (Vidhan Parishad)**.\n\nCurrently, only **6 States** have a Legislative Council: **Uttar Pradesh, Bihar, Maharashtra, Karnataka, Andhra Pradesh, and Telangana** (Jammu & Kashmir Council was abolished under the J&K Reorganisation Act 2019; West Bengal abolished its Council in 1969, Punjab in 1970, and Tamil Nadu in 1986).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Two-Stage Procedure for Creation/Abolition of Councils (Article 169)',
        body: 'Article 169 provides an extraordinary constitutional mechanism that allows a State to create or abolish a Legislative Council without undergoing the rigid Article 368 constitutional amendment procedure:\n\n### Stage 1: State Assembly Special Majority Resolution:\n• The Legislative Assembly of the State must pass a resolution requesting Parliament to create or abolish the Council.\n• **Majority Required:** **Special Majority under Article 169(1)**:\n  1. A majority of the **total membership** of the Assembly, **AND**\n  2. A majority of **not less than two-thirds of the members of the Assembly present and voting**.\n\n### Stage 2: Parliamentary Ordinary Law:\n• Upon receiving the State resolution, **Parliament enacts an Act** abolishing or creating the Council.\n• **Majority Required in Parliament:** **Simple Majority** (like an ordinary bill).\n• **Article 169(3):** The law passed by Parliament is **NOT deemed to be an amendment of the Constitution for the purposes of Article 368**.\n\n*(Note: Parliament is not constitutionally compelled to act immediately upon receiving an Assembly resolution; e.g. Andhra Pradesh passed an abolition resolution in 2020 which remained pending).*',
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
        syllabusSection: 'GS Paper II: State Legislature Architecture & Article 169 Procedure.',
        examNotes: 'UPSC frequently tests Article 169: Assembly requires Special Majority, but Parliament requires Simple Majority (not an Art 368 amendment).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Rajasthan Legislative Assembly (Unicameral) & Article 169.',
        examNotes: 'High yield: Rajasthan Assembly passed a resolution in 2012 for creating a Legislative Council (66 seats), which remains pending in Parliament.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Statutory Framework.',
        examNotes: 'State legislative structure.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'State Legislature (Art 168): 6 bicameral states (UP, Bihar, Maharashtra, Karnataka, AP, Telangana). Art 169 Creation/Abolition: Stage 1 = State Assembly passes resolution by Special Majority (Total majority + 2/3rd present & voting); Stage 2 = Parliament passes law by Simple Majority (NOT an Art 368 amendment).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Bicameral States (6):** UP, Bihar, Maharashtra, Karnataka, Andhra Pradesh, Telangana.\n• **Article 169 Process:** Assembly initiates by Special Majority -> Parliament passes by Simple Majority.\n• **Article 368 Exemption:** Council creation/abolition is not an Article 368 amendment.\n• **Rajasthan Context:** Unicameral (200 MLAs); Council creation resolution passed in 2012 pending at Centre.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 169 provides a flexible federal mechanism that permits states to establish or dissolve secondary legislative chambers based on their evolving fiscal capacity and administrative requirements without imposing a permanent rigid bicameral burden across all states.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T15-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 169 of the Constitution of India, the creation or abolition of a Legislative Council in a State requires:',
        options: {
          A: 'A resolution passed by the State Legislative Assembly by a simple majority, followed by a constitutional amendment under Article 368.',
          B: 'A resolution passed by the State Legislative Assembly by a special majority, followed by an Act of Parliament passed by a simple majority.',
          C: 'An Ordinance promulgated by the Governor on the advice of the State Cabinet.',
          D: 'A resolution passed by the Rajya Sabha by a two-thirds majority under Article 312.',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 169, the State Legislative Assembly must pass a resolution by a special majority (majority of total membership + 2/3rd present and voting), after which Parliament passes an ordinary law by simple majority. Under Article 169(3), this law is not deemed an amendment under Article 368.',
        trapExplanation: 'Parliament requires only a simple majority, not an Article 368 constitutional amendment.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T15-02',
    slug: 'composition-of-legislative-council-and-governor-nominations',
    topicSlug: 'the-state-legislature',
    topicTitle: 'Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)',
    topicOrder: 15,
    title: 'Composition of Legislative Council (Art 171) & 5-Tier Electoral Formula',
    shortDefinition: 'The structural strength limits of the Legislative Council (max 1/3rd of Assembly, min 40 under Art 171), the 5-tier proportional representation electoral formula, and the 1/6th Governor nomination across 5 fields (including Cooperative Movement).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T15-03'],
    claims: [
      {
        id: 'CLM-T15-02.1',
        statement: 'Under Article 171, the total membership of the Legislative Council of a State shall not exceed one-third of the total membership of the Legislative Assembly, but shall not be less than 40 members.',
        claimType: 'CONSTITUTIONAL_COUNCIL_SIZE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 171(1))',
      },
      {
        id: 'CLM-T15-02.2',
        statement: 'Under Article 171(3) and 171(5), five-sixths of the members of the Legislative Council are indirectly elected through four distinct electoral colleges (1/3rd local bodies, 1/12th graduates, 1/12th teachers, 1/3rd MLAs), while one-sixth are nominated by the Governor from five fields: Literature, Science, Art, Cooperative Movement, and Social Service.',
        claimType: 'CONSTITUTIONAL_COUNCIL_COMPOSITION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 171)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Size Limits & Functional Representation in the Upper Chamber',
        body: 'Under **Article 171(1)**, the size of the Legislative Council is strictly tied to the size of the Legislative Assembly:\n1. **Maximum Strength:** **One-third (1/3rd)** of the total membership of the Legislative Assembly of that State.\n2. **Minimum Floor:** **40 Members**.\n\n*(Example: If a State has 200 MLAs, the maximum permitted strength of its Legislative Council is $200 / 3 = 66$ members).*',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 5-Tier Composition Formula (Article 171(3) & 171(5))',
        body: 'The members of the Legislative Council (MLCs) are chosen through a unique composite system combining functional, local, professional, and political representation:\n\n1. **1/3rd Elected by Local Authorities:** Elected by electorates consisting of members of Municipalities, District Boards, and other local authorities specified by Parliament.\n2. **1/12th Elected by Graduates:** Elected by persons residing in the state who have been graduates of at least **3 years standing** of any Indian university.\n3. **1/12th Elected by Teachers:** Elected by persons who have been engaged for at least **3 years in teaching** in educational institutions within the state not lower in standard than secondary schools.\n4. **1/3rd Elected by MLAs:** Elected by the members of the Legislative Assembly from amongst persons who are **NOT members of the Assembly**.\n5. **1/6th Nominated by the Governor (Article 171(5)):** Nominated from persons having special knowledge or practical experience in:\n   - **Literature**\n   - **Science**\n   - **Art**\n   - **Cooperative Movement** *(⚠️ CRITICAL EXAM TRAP: Present in Governor nomination under Art 171, but ABSENT in Presidential nomination to Rajya Sabha under Art 80(3)!)*\n   - **Social Service**',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Rajya Sabha vs Legislative Council Nomination Comparison',
        body: '| Parameter | Rajya Sabha Nomination (Art 80(3)) | Legislative Council Nomination (Art 171(5)) |\n| :--- | :--- | :--- |\n| **Nominated By** | **President of India** | **Governor of the State** |\n| **Proportion** | Fixed at **12 Members** | **One-Sixth (1/6th)** of total Council strength |\n| **Fields Specified** | 4 Fields: Literature, Science, Art, Social Service | **5 Fields:** Literature, Science, Art, **COOPERATIVE MOVEMENT**, Social Service |\n| **Unique Category** | None | **Cooperative Movement** is exclusive to State Councils |',
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
        syllabusSection: 'GS Paper II: Composition of State Legislative Councils (Art 171).',
        examNotes: 'UPSC frequently tests the 5 fractions (1/3 local, 1/12 grad, 1/12 teach, 1/3 MLAs, 1/6 Governor) and the Cooperative Movement field.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Legislative Council Electoral Composition.',
        examNotes: 'High yield for 50-word and 20-word questions on Article 171 composition formula.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Cooperative Governance.',
        examNotes: 'Cooperative movement representation in State Legislative Councils.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Vidhan Parishad (Art 171): Max 1/3rd of Assembly, Min 40. 5-Tier Formula: 1/3rd Local Bodies, 1/12th 3-yr Graduates, 1/12th 3-yr Teachers, 1/3rd MLAs, 1/6th Governor nomination in 5 fields (Literature, Science, Art, Cooperative Movement, Social Service). Cooperative movement is unique to Governor nominations.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Size:** Max 1/3rd of Assembly strength; Minimum floor of 40 members.\n• **Electoral Formula:** 1/3 Local + 1/12 Graduates + 1/12 Teachers + 1/3 MLAs + 1/6 Governor.\n• **Nomination Difference:** Governor nominates in 5 fields (includes Cooperative Movement); President in RS nominates in 4 fields (no cooperative movement).\n• **Tenure:** Permanent house, 6-year term, 1/3rd retire every 2nd year.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The five-tier composition formula under Article 171 broadens democratic representation beyond purely partisan territorial electorates by institutionalizing voices from local municipalities, higher education teachers, university graduates, and cooperative movement leaders.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T15-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 171(5) of the Constitution of India, which of the following fields is included for nomination of members to a State Legislative Council by the Governor, but is NOT included for nomination to the Rajya Sabha by the President?',
        options: {
          A: 'Social Service',
          B: 'Literature',
          C: 'Cooperative Movement',
          D: 'Science',
        },
        correctAnswer: 'C',
        explanation: 'Under Article 171(5), the Governor nominates members to the Legislative Council having special knowledge in Literature, Science, Art, Cooperative Movement, and Social Service. In contrast, Article 80(3) for the Rajya Sabha lists only four fields (Literature, Science, Art, and Social Service), omitting Cooperative Movement.',
        trapExplanation: 'Cooperative Movement is unique to State Legislative Councils.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T15-03',
    slug: 'state-legislative-procedure-and-delaying-powers-of-councils',
    topicSlug: 'the-state-legislature',
    topicTitle: 'Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)',
    topicOrder: 15,
    title: 'State Legislative Procedure: 4-Month Delaying Powers & Absence of Joint Sitting',
    shortDefinition: 'The legislative relationship between the Vidhan Sabha and Vidhan Parishad, the maximum 4-month delaying power of the Council on ordinary bills (Articles 197–198), total absence of joint sitting in State Legislatures, and the ultimate supremacy of the Legislative Assembly.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T15-04'],
    claims: [
      {
        id: 'CLM-T15-03.1',
        statement: 'Under Article 197, the Legislative Council has no equal powers with the Legislative Assembly over ordinary bills and possesses only a delaying power of a maximum of 3 months in the first instance and 1 month in the second instance (total 4 months max), after which the bill is deemed passed by both Houses in the form passed by the Assembly.',
        claimType: 'CONSTITUTIONAL_COUNCIL_DELAY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 197)',
      },
      {
        id: 'CLM-T15-03.2',
        statement: 'There is NO provision for a Joint Sitting of the two Houses of the State Legislature in the Constitution of India; in case of a legislative deadlock between the Assembly and the Council, the will of the Legislative Assembly completely prevails.',
        claimType: 'CONSTITUTIONAL_NO_JOINT_SITTING_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 197)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Asymmetry of Power: Rajya Sabha vs Vidhan Parishad',
        body: 'A critical structural difference between Parliament and State Legislatures lies in the power of the upper chamber:\n1. **Rajya Sabha (Federal Equal Chamber):** Has equal powers with Lok Sabha on ordinary bills; if deadlock occurs, a **Joint Sitting (Article 108)** is summoned to resolve it.\n2. **Legislative Council (Subordinate Delaying Chamber):** Has **NO equal powers** with the Legislative Assembly on ordinary bills. The Council is only a **dilatory (delaying) chamber**; there is **NO JOINT SITTING** in State Legislatures.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The 4-Month Delaying Rule for Ordinary Bills (Article 197)',
        body: 'When an ordinary bill passed by the **Legislative Assembly** is transmitted to the **Legislative Council**, the Council has four choices:\n1. Passes the bill as sent by the Assembly.\n2. Passes the bill with amendments to which the Assembly agrees.\n3. Rejects the bill altogether.\n4. Takes no action on the bill.\n\n### The Two-Stage Delaying Timeline:\n• **First Instance (3 Months):** The Council can hold or reject the bill for a maximum of **3 months**.\n• If the Council rejects the bill, makes unacceptable amendments, or takes no action for 3 months, the **Assembly may pass the bill a SECOND TIME** (with or without amendments) and transmit it again to the Council.\n• **Second Instance (1 Month):** In the second instance, the Council can hold or reject the bill for a maximum of **1 month**.\n• If the Council rejects the bill again or takes no action for 1 month, **the Bill is deemed to have been passed by BOTH Houses** in the form in which it was passed by the Legislative Assembly for the second time.\n• **Maximum Total Delay:** $3\\text{ months (1st instance)} + 1\\text{ month (2nd instance)} = \\mathbf{4\\text{ Months}}$ max.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Bills Originating in the Council & Money Bills',
        body: '### Bills Originating in the Legislative Council:\n• If an ordinary bill originates in the Legislative Council and is transmitted to the Legislative Assembly, and the Assembly **rejects the bill**, the **BILL DIES IMMEDIATELY**.\n• There is no second passage mechanism and no joint sitting.\n\n### Money Bills in State Legislature (Article 198):\n• Money Bills can be introduced **ONLY in the Legislative Assembly** on the prior recommendation of the Governor.\n• The Legislative Council has only **14 days** to make recommendations (identical to Rajya Sabha).\n• The Assembly may accept or reject any recommendation; if not returned within 14 days, it is deemed passed by both Houses.',
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
        syllabusSection: 'GS Paper II: Powers of State Legislative Assembly vs Council & Article 197.',
        examNotes: 'UPSC frequently tests the absence of Joint Sittings in State Legislatures and the 4-month maximum delaying power (3m + 1m).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Legislative Process in State Legislature & Assembly Supremacy.',
        examNotes: 'High yield for 20-word definitions of delaying powers of Legislative Council under Article 197.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Enactments.',
        examNotes: 'State legislative process.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Vidhan Parishad has NO equal powers with Assembly on ordinary bills. Delaying power only: Max 3 months (1st instance) + 1 month (2nd instance) = 4 months max. Assembly overrides Council by passing bill 2nd time. NO JOINT SITTING in State Legislature. Money bill: 14-day limit.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **No Joint Sitting:** Unlike Parliament (Art 108), state legislatures have zero provision for joint sittings.\n• **4-Month Rule:** Council can delay ordinary bill for 3 months initially; if Assembly re-passes, Council can delay for only 1 month.\n• **Assembly Supremacy:** In all conflicts, the will of the directly elected Legislative Assembly prevails.\n• **Council Origin:** If a bill starts in Council and Assembly rejects it, the bill dies immediately.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'By denying the Legislative Council both parity on ordinary bills and the right to a joint sitting, the Constitution deliberately prevents the upper state chamber from obstructing the popular mandate of the directly elected Legislative Assembly while preserving a brief four-month window for revising reflection.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T15-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'If a bill passed by the State Legislative Assembly is transmitted to the State Legislative Council and the Council rejects the bill, for how long in TOTAL (including first and second instances) can the Legislative Council delay the passage of the bill under Article 197 of the Constitution?',
        options: {
          A: '6 Months',
          B: '4 Months',
          C: '3 Months',
          D: '14 Days',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 197, the Legislative Council can delay an ordinary bill for a maximum of 3 months in the first instance, and if the Assembly passes it a second time, for a maximum of 1 month in the second instance. Thus, the total maximum delaying power is 4 months (3 + 1).',
        trapExplanation: '14 days applies to Money Bills; 6 months applies to Parliamentary deadlocks before joint sitting; State Councils have a 4-month maximum delay for ordinary bills.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T15-04',
    slug: 'state-legislature-privileges-disqualifications-and-rajasthan-assembly',
    topicSlug: 'the-state-legislature',
    topicTitle: 'Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)',
    topicOrder: 15,
    title: 'State Legislature: Privileges (Art 194), Disqualifications (Art 191) & Rajasthan Assembly',
    shortDefinition: 'State legislative powers, privileges and immunities under Article 194, disqualification grounds for MLAs/MLCs under Article 191, and the historical architecture of the Rajasthan Legislative Assembly (200 unicameral seats, SC/ST reservations).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T15-05'],
    claims: [
      {
        id: 'CLM-T15-04.1',
        statement: 'Under Article 194, Members of the State Legislature enjoy freedom of speech in the legislature, complete immunity from court proceedings for statements/votes in the House or its committees, and civil arrest immunity 40 days before and after sessions.',
        claimType: 'CONSTITUTIONAL_STATE_PRIVILEGES_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 194)',
      },
      {
        id: 'CLM-T15-04.2',
        statement: 'Under Article 191, an MLA or MLC is disqualified for holding an office of profit, unsound mind, insolvency, foreign citizenship, or defection under the 10th Schedule, with the Rajasthan Legislative Assembly functioning as a unicameral chamber of 200 members (34 SC, 25 ST, 141 General).',
        claimType: 'CONSTITUTIONAL_STATE_DISQUALIFICATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 51, Art 191, Ch 43)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'State Legislative Privileges & Democratic Mandate',
        body: 'Just as Article 105 protects Members of Parliament, **Article 194** provides identical powers, privileges, and immunities to the Members of State Legislative Assemblies and Councils.\n\nSimultaneously, **Article 191** mirrors Article 102 by establishing constitutional disqualification criteria for state legislators, with disputes under Article 191 decided by the **Governor acting on the binding opinion of the Election Commission of India (Article 192)**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Rajasthan Legislative Assembly Structure & Historical Evolution',
        body: '### Historical Evolution of Rajasthan Vidhan Sabha:\n• **1st Rajasthan Legislative Assembly (1952–1957):** Constituted on March 29, 1952 with **160 members**.\n• **Expansion Timeline:**\n  - 1952: 160 seats.\n  - 1957 (2nd Assembly): Increased to 176 seats following merger of Ajmer-Merwara.\n  - 1967 (4th Assembly): Increased to 184 seats.\n  - **1977 (6th Assembly):** Increased to **200 seats** (current strength).\n• **Current Seat Reservation (200 Seats Total):**\n  - **Scheduled Castes (SC):** **34 Seats** (17%)\n  - **Scheduled Tribes (ST):** **25 Seats** (12.5%)\n  - **General / Unreserved:** **141 Seats** (70.5%)\n• **Unicameral Nature:** Rajasthan has a unicameral legislature (Vidhan Sabha only; no Vidhan Parishad).\n• **Presiding Officers:** Speaker of Rajasthan Legislative Assembly (first Speaker: **Narottam Lal Joshi**; first Deputy Speaker: **Lal Singh Shaktawat**; first Leader of Opposition: **Jaswant Singh**).',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'IMPORTANT',
        weightage: 'MEDIUM',
        syllabusSection: 'GS Paper II: Powers and Privileges of State Legislatures (Art 194) & Disqualifications (Art 191).',
        examNotes: 'UPSC compares Article 105 (Parliament) with Article 194 (State Legislature).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Rajasthan Legislative Assembly — History, Composition, SC/ST Reservations & Speakers.',
        examNotes: 'High yield for Rajasthan assembly seat expansion history (160 to 200 in 1977), 34 SC / 25 ST seat counts, and first Speaker Narottam Lal Joshi.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Constitutional Governance.',
        examNotes: 'State legislative background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 194 Privileges = State counterpart of Art 105. Art 191 Disqualification = Decided by Governor on binding ECI opinion (Art 192). Rajasthan Vidhan Sabha = Unicameral, 200 seats (34 SC, 25 ST, 141 Gen). Expanded from 160 (1952) to 200 (1977). First Speaker = Narottam Lal Joshi.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 194:** Freedom of speech in House; civil arrest immunity 40 days before/after; contempt powers.\n• **Article 191 Disqualifications:** Decided by Governor on binding ECI advice under Art 192.\n• **Rajasthan Assembly:** 200 seats (34 SC, 25 ST); 1st assembly 160 seats in 1952; reached 200 in 1977 (6th assembly).\n• **Key Personalities:** First Speaker Narottam Lal Joshi; first Leader of Opposition Jaswant Singh.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 194 and Article 191 replicate the Westminster balance of privileges and ethical disqualifications at the state level, while Rajasthan’s constitutional progression from a 160-seat assembly in 1952 to a stable 200-seat chamber in 1977 reflects the state’s territorial integration and demographic consolidation.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T15-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'In the Rajasthan Legislative Assembly (Vidhan Sabha), out of the total 200 seats, how many seats are reserved for Scheduled Castes (SC) and Scheduled Tribes (ST) respectively?',
        options: {
          A: '34 SC and 25 ST',
          B: '32 SC and 24 ST',
          C: '30 SC and 20 ST',
          D: '35 SC and 25 ST',
        },
        correctAnswer: 'A',
        explanation: 'In the 200-seat Rajasthan Legislative Assembly, 34 seats are reserved for Scheduled Castes (SC) and 25 seats are reserved for Scheduled Tribes (ST), with the remaining 141 seats being unreserved/general.',
        trapExplanation: '34 SC and 25 ST is the standard constitutional distribution for Rajasthan Vidhan Sabha since the 1977 delimitation.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
];

export async function seedBatchP2CanonicalKnowledge() {
  console.log(`Seeding Batch P2 Canonical Knowledge (${BATCH_P2_CONCEPTS.length} concepts)...`);

  // Seed semantic units
  await seedBatchP2SemanticInventory();

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
  const topicsMap: Record<string, { title: string; order: number; concepts: BatchP2ConceptSeedDefinition[] }> = {};
  for (const c of BATCH_P2_CONCEPTS) {
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

  console.log(`Successfully seeded Batch P2 knowledge base. Total concepts: ${BATCH_P2_CONCEPTS.length}.`);
  return BATCH_P2_CONCEPTS.length;
}
