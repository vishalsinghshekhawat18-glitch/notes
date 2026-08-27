import { db } from '../db/client';
import { seedBatchP3SemanticInventory } from '../ingestion/batch-p3-semantic-inventory';

export interface BatchP3ConceptSeedDefinition {
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

export const BATCH_P3_CONCEPTS: BatchP3ConceptSeedDefinition[] = [
  // =========================================================================
  // TOPIC 16: THE UNION JUDICIARY (3 CONCEPTS: CON-T16-01 to CON-T16-03)
  // =========================================================================
  {
    id: 'CON-T16-01',
    slug: 'supreme-court-architecture-composition-collegium-and-removal',
    topicSlug: 'the-union-judiciary',
    topicTitle: 'Part V: The Union Judiciary (The Supreme Court of India)',
    topicOrder: 16,
    title: 'Supreme Court Architecture: Composition (34 Judges), Collegium & Removal',
    shortDefinition: 'The constitutional framework of the Supreme Court of India under Articles 124–128, evolution of the Collegium system through the Three Judges Cases (1981, 1993, 1998) and NJAC verdict (2015), and the impeachment removal procedure under Article 124(4) read with the Judges (Inquiry) Act 1968.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T16-01', 'SEM-T16-02', 'SEM-T16-03'],
    claims: [
      {
        id: 'CLM-T16-01.1',
        statement: 'Under Article 124 and the Supreme Court (Number of Judges) Amendment Act 2019, the Supreme Court of India comprises a maximum of 34 Judges (1 Chief Justice of India + 33 Puissne Judges), who hold office until attaining the age of 65 years.',
        claimType: 'CONSTITUTIONAL_COURT_STRENGTH_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 52, Art 124, 2019 Act)',
      },
      {
        id: 'CLM-T16-01.2',
        statement: 'The Collegium system for Supreme Court appointments consists of the Chief Justice of India and the four senior-most puisne Judges of the Supreme Court, established by the Third Judges Case (1998) and reaffirmed by the Supreme Court Advocates-on-Record Association case (2015) striking down the 99th Constitutional Amendment Act (NJAC).',
        claimType: 'JUDICIAL_COLLEGIUM_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 52, Three Judges Cases)',
      },
      {
        id: 'CLM-T16-01.3',
        statement: 'Under Article 124(4) and the Judges (Inquiry) Act 1968, a Supreme Court Judge can be removed by Presidential Order only on grounds of "proved misbehaviour" or "incapacity", after an address supported by a Special Majority in each House of Parliament following an inquiry by a 3-member statutory committee.',
        claimType: 'CONSTITUTIONAL_JUDICIAL_REMOVAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 52, Art 124(4), 1968 Act)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Apex Custodian of the Constitution and Fundamental Rights',
        body: 'The **Supreme Court of India** stands at the apex of an integrated, unified judicial hierarchy established under **Part V, Chapter IV (Articles 124–147)** of the Constitution. Unlike federal jurisdictions like the United States (which have separate federal and state court hierarchies), India has a **single integrated judicial system** that administers both Union and State laws.\n\nInaugurated on **January 28, 1950** (succeeding the Federal Court of India established under the Government of India Act 1935), the Supreme Court functions as the **final interpreter of the Constitution, guarantor of Fundamental Rights (Article 32), and highest court of appeal**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'TIMELINE',
        title: 'Evolution of Judicial Appointments: The Four Judges Cases',
        body: '• **Constitutional Text (Article 124(2)):** Every Judge of the SC is appointed by the President after *"consultation"* with such Judges of the SC and HCs as the President deems necessary.\n• **1. First Judges Case (*S.P. Gupta v. Union of India, 1981*):** Held that *"consultation"* does not mean *"concurrence"*; executive had primacy in judicial appointments.\n• **2. Second Judges Case (*SC Advocates-on-Record Association v. UOI, 1993*):** Overruled *S.P. Gupta*. Held that *"consultation"* means **"concurrence"**; created the **Collegium System** (CJI + 2 senior-most SC judges) to protect judicial independence.\n• **3. Third Judges Case (*Special Reference No. 1 of 1998*):** Expanded the SC Collegium to the **CJI + 4 senior-most puisne Judges of the Supreme Court**. If two judges give an adverse opinion, CJI should not send the recommendation to the Government.\n• **4. Fourth Judges Case (*NJAC Case, 2015*):** The 99th Constitutional Amendment Act (2014) created the National Judicial Appointments Commission (NJAC). A 5-judge Constitution Bench struck down the 99th CAA as **violating the Basic Structure of the Constitution (Judicial Independence)**, reviving the Collegium system.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Qualifications, Independence Safeguards & Removal Process',
        body: '### Qualifications for Appointment (Article 124(3)):\n1. Must be a citizen of India, **AND**\n2. Has been for at least **5 years a Judge of a High Court** (or two or more such courts in succession); **OR**\n3. Has been for at least **10 years an Advocate of a High Court**; **OR**\n4. Is, in the opinion of the President, a **distinguished jurist**.\n*(⚠️ EXAM TRAP: The "distinguished jurist" category exists for appointment to the Supreme Court under Art 124(3)(c), but is NOT available for High Court appointments under Art 217(2)!)*\n\n### Removal Procedure (Article 124(4) & Judges (Inquiry) Act 1968):\n• **Grounds:** Only two constitutional grounds: **(1) Proved Misbehaviour**, or **(2) Incapacity**.\n• **Step 1:** Removal motion signed by **100 Lok Sabha MPs** or **50 Rajya Sabha MPs** submitted to Presiding Officer.\n• **Step 2:** Presiding Officer admits the motion and appoints a **3-Member Inquiry Committee** consisting of: (a) Chief Justice or a Judge of SC, (b) Chief Justice of a High Court, and (c) a distinguished jurist.\n• **Step 3:** If committee finds the judge guilty, each House of Parliament must pass the address by a **Special Majority**:\n  - Majority of the **total membership** of that House, **AND**\n  - Majority of **not less than two-thirds of members present and voting**.\n• **Step 4:** The President passes an order removing the Judge.',
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
        syllabusSection: 'GS Paper II: Structure, Organization and Functioning of the Executive and the Judiciary.',
        examNotes: 'UPSC frequently tests the Collegium composition (CJI + 4 senior SC judges), Judges Inquiry Act 1968 3-member committee, and 99th CAA NJAC basic structure ruling.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Supreme Court of India — Composition, Collegium & Removal.',
        examNotes: 'High yield for 20-word definitions of Special Majority for judicial removal and Collegium structure.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Apex Judicial System.',
        examNotes: 'Supreme Court as supreme judicial authority.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Supreme Court (Arts 124-147): 1 CJI + 33 Judges (max 34, 2019 Act). Retirement age 65. Qualifications: 5-yr HC judge / 10-yr HC advocate / distinguished jurist. Collegium = CJI + 4 senior SC judges (3rd Judges Case 1998; NJAC struck down 2015). Removal (Art 124(4)): 100 LS / 50 RS motion -> 3-member inquiry committee -> Special Majority in both Houses -> President order.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Integrated System:** Single unified hierarchy for Union and State laws.\n• **Collegium Evolution:** 1st Case (Executive primacy) -> 2nd Case (CJI + 2 judges) -> 3rd Case (CJI + 4 judges) -> 4th Case (NJAC struck down 2015).\n• **Qualifications:** Distinguished jurist clause is unique to SC (not in HC).\n• **Removal:** Article 124(4) read with Judges Inquiry Act 1968; requires special majority.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Supreme Court’s institutional architecture blends statutory strength regulations with judge-made Collegium conventions, ensuring judicial independence from executive dominance while maintaining constitutional accountability through a rigorous parliamentary impeachment threshold.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T16-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Supreme Court of India, consider the following statements:\n1. A person who has been a distinguished jurist in the opinion of the President is eligible for appointment as a Judge of the Supreme Court as well as a High Court.\n2. The Collegium for recommending appointments to the Supreme Court consists of the Chief Justice of India and four senior-most judges of the Supreme Court.\n3. The motion for removal of a Supreme Court Judge must be supported by a special majority of both Houses of Parliament.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statements 2 and 3 are correct. Statement 1 is incorrect because the provision for appointing a "distinguished jurist" exists under Article 124(3)(c) for the Supreme Court only, and is NOT available for High Court appointments under Article 217(2).',
        trapExplanation: 'The distinguished jurist category applies ONLY to the Supreme Court, NOT to High Courts.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T16-02',
    slug: 'supreme-court-jurisdiction-original-appellate-and-special-leave',
    topicSlug: 'the-union-judiciary',
    topicTitle: 'Part V: The Union Judiciary (The Supreme Court of India)',
    topicOrder: 16,
    title: 'Supreme Court Jurisdiction: Original (Art 131), Appellate & SLP (Art 136)',
    shortDefinition: 'The multi-tiered jurisdictional architecture of the Supreme Court: Exclusive Federal Original Jurisdiction (Art 131) and its exceptions, Constitutional/Civil/Criminal Appellate Jurisdiction (Arts 132–134), and the plenary discretionary nature of Special Leave Petitions under Article 136.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T16-04', 'SEM-T16-05'],
    claims: [
      {
        id: 'CLM-T16-02.1',
        statement: 'Under Article 131, the Supreme Court has exclusive and original jurisdiction in any dispute between the Government of India and one or more States, or between two or more States, involving any question on which the existence or extent of a legal right depends, strictly excluding pre-Constitution treaties and inter-state river water disputes under Article 262.',
        claimType: 'CONSTITUTIONAL_ORIGINAL_JURISDICTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 52, Art 131)',
      },
      {
        id: 'CLM-T16-02.2',
        statement: 'Under Article 136, the Supreme Court possesses extraordinary discretionary power to grant Special Leave to Appeal from any judgment, decree, sentence or order in any cause or matter passed by any court or tribunal in India, with the sole constitutional exception of Military Tribunals and Court Martials under Article 136(2).',
        claimType: 'CONSTITUTIONAL_SLP_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 52, Art 136)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Broadest Jurisdiction of Any Apex Court in the World',
        body: 'The Supreme Court of India possesses a wider jurisdictional reach than almost any other apex court globally (including the US Supreme Court). Its jurisdiction encompasses:\n1. **Original Federal Jurisdiction (Article 131)**\n2. **Writ Jurisdiction (Article 32)**\n3. **Appellate Jurisdiction (Articles 132–134)**\n4. **Special Leave Jurisdiction (Article 136)**\n5. **Advisory Jurisdiction (Article 143)**\n6. **Review Jurisdiction (Article 137)**',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Original Federal Jurisdiction (Article 131) & Its Strict Boundaries',
        body: '### What Falls Under Article 131:\n• A dispute between the **Government of India and one or more States**.\n• A dispute between the **Government of India and any State(s) on one side and other State(s) on the other**.\n• A dispute between **two or more States**.\n• **Legal Right Requirement:** The dispute must involve a question of law or fact on which the **existence or extent of a legal right depends** (purely political disputes are excluded).\n\n### What is EXCLUDED from Article 131:\n1. Disputes arising out of any **pre-Constitution treaty, agreement, covenant, or engagement** (Article 131 Proviso).\n2. **Inter-State River Water Disputes:** Excluded by Article 262(2) and the *Inter-State River Water Disputes Act, 1956* (entrusted to ad-hoc tribunals).\n3. Matters referred to the **Finance Commission (Article 280)**.\n4. Disputes between a **private citizen / entity against the Centre or a State** (these must be filed in High Courts under Art 226 or lower civil courts).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Appellate Hierarchy & Special Leave Petitions (Article 136)',
        body: '### 1. Ordinary Appellate Routes:\n• **Constitutional Matters (Article 132):** Appeal from High Court if HC certifies under Article 134A that the case involves a **substantial question of law as to the interpretation of the Constitution**.\n• **Civil Matters (Article 133):** If HC certifies that the case involves a substantial question of law of general importance.\n• **Criminal Matters (Article 134):** Appeal lies as of right if HC on appeal reversed an acquittal and sentenced the accused to **death**, or withdrew a case from subordinate court and sentenced to death.\n\n### 2. Special Leave Petition (Article 136):\n• **Extraordinary & Discretionary:** It is not an ordinary right of appeal; it is a **plenary discretionary power** of the Supreme Court to prevent grave miscarriage of justice.\n• **Universal Scope:** Can be granted against **any judgment, decree, determination, sentence or order** passed by **any court or tribunal in the territory of India** (whether final or interlocutory).\n• **Sole Constitutional Exception (Article 136(2)):** Does **NOT apply to any judgment or order passed by any court or tribunal constituted by or under any law relating to the Armed Forces (Court Martial / Armed Forces Tribunal)**.',
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
        syllabusSection: 'GS Paper II: Supreme Court Jurisdiction, Article 131 vs 136 & River Water Exclusions.',
        examNotes: 'UPSC repeatedly tests Article 131 exclusions (inter-state river water disputes, private citizen suits) and Article 136 exclusion of Armed Forces tribunals.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Jurisdiction of Supreme Court of India.',
        examNotes: 'High yield for 20-word definitions of Original Jurisdiction and Special Leave Petition.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Judicial Appeals.',
        examNotes: 'Appeals from NCLAT and DRAT to the Supreme Court under SLP.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Original Jurisdiction (Art 131): Exclusive federal disputes (Centre vs States, State vs State). Excludes: pre-constitution treaties, water disputes (Art 262), private citizen suits. SLP (Art 136): Discretionary plenary power against ANY court/tribunal in India, EXCEPT Military Court Martials (Art 136(2)).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 131:** Exclusive federal original jurisdiction; tests legal rights between Union and States.\n• **Article 131 Exclusions:** Pre-constitution pacts, inter-state river disputes, private claims.\n• **Article 136:** Special Leave Petition; extraordinary discretionary remedy against any court/tribunal.\n• **Article 136 Exception:** Armed Forces tribunals/court martials are exempt from Art 136.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The dual framework of Article 131 (protecting the federal constitutional balance between Union and State sovereigns) and Article 136 (providing an overarching safety net against gross injustice across all judicial tribunals) cements the Supreme Court’s role as both the federal arbiter and supreme appellate court.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T16-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following disputes CANNOT be adjudicated by the Supreme Court of India under its Original Jurisdiction under Article 131 of the Constitution?\n1. A dispute between the Government of India and the State of Punjab regarding federal tax devolution.\n2. A dispute between the State of Karnataka and the State of Tamil Nadu regarding the sharing of Cauvery river water.\n3. A dispute between a private commercial company and the Union Ministry of Railways regarding a contract breach.\nSelect the correct answer using the code given below:',
        options: {
          A: '1 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 131, disputes relating to inter-state river waters are excluded by Article 262 and statutory tribunal mechanisms (Statement 2), and disputes involving private citizens/companies are excluded because Article 131 is strictly confined to Union and State governments (Statement 3). Statement 1 is a valid federal dispute under Article 131.',
        trapExplanation: 'Inter-state water disputes and private party suits are barred under Article 131.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2014,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T16-03',
    slug: 'advisory-jurisdiction-article-143-and-inherent-powers-141-142',
    topicSlug: 'the-union-judiciary',
    topicTitle: 'Part V: The Union Judiciary (The Supreme Court of India)',
    topicOrder: 16,
    title: 'Advisory Jurisdiction (Art 143), Complete Justice (Art 142) & Law of Land (Art 141)',
    shortDefinition: 'The consultative role of the Supreme Court under Article 143 (Presidential references and their binding/non-binding character), the inherent power to do "Complete Justice" under Article 142, binding precedent under Article 141, and Court of Record contempt powers under Article 129.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T16-06'],
    claims: [
      {
        id: 'CLM-T16-03.1',
        statement: 'Under Article 143, the President may refer a question of law or fact of public importance to the Supreme Court for its advisory opinion; the Supreme Court is free to give or refuse its opinion under Clause (1), but is bound to give its opinion on pre-Constitution dispute references under Clause (2), and the rendered advisory opinion is not legally binding on the President.',
        claimType: 'CONSTITUTIONAL_ADVISORY_JURISDICTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 52, Art 143)',
      },
      {
        id: 'CLM-T16-03.2',
        statement: 'Under Article 142(1), the Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing "complete justice" in any cause or matter pending before it, which is enforceable throughout the territory of India.',
        claimType: 'CONSTITUTIONAL_COMPLETE_JUSTICE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 52, Art 142)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Extraordinary Inherent Powers of the Supreme Court',
        body: 'Beyond adjudicating conventional lawsuits, the Constitution equips the Supreme Court with extraordinary constitutional doctrines to maintain the supremacy of constitutional law, offer consultative guidance to the Head of State, and remedy systemic legal inadequacies:\n1. **Article 143:** Advisory Jurisdiction (Consultative references).\n2. **Article 142:** Decree for **"Complete Justice"**.\n3. **Article 141:** Law declared by the Supreme Court is **binding on all courts** within India.\n4. **Article 129 & 137:** Court of Record, power to punish for contempt, and power to review its own judgments.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Advisory Jurisdiction Under Article 143: Clause (1) vs Clause (2)',
        body: '| Parameter | Article 143(1) Reference | Article 143(2) Reference |\n| :--- | :--- | :--- |\n| **Subject Matter** | Any question of law or fact of **public importance** | Any dispute arising out of **pre-Constitution treaties, covenants, or agreements** (mentioned in Art 131 Proviso) |\n| **Supreme Court Obligation** | **Discretionary** — The SC **MAY give or REFUSE to give** its opinion (*e.g. refused in Ayodhya Reference 1994*) | **MANDATORY** — The SC **IS BOUND to give** its opinion to the President |\n| **Nature of Opinion** | **Advisory only**; NOT binding on the President or Government | **Advisory only**; NOT binding on the President or Government |\n| **Precedential Value** | High persuasive value, but technically not a binding judicial precedent under Art 141 | High persuasive value, but technically not a binding judicial precedent under Art 141 |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Article 142 ("Complete Justice") & Article 141 ("Law of the Land")',
        body: '### 1. Article 142 ("Complete Justice"):\n• Allows the Supreme Court to transcend statutory procedural limitations where necessary to deliver substantive justice.\n• **Landmark Applications:**\n  - *Union Carbide Corp v. Union of India (Bhopal Gas Tragedy, 1989):* Approved a \$470 million settlement bypassing ordinary statutory litigation procedures.\n  - *Ayodhya Title Dispute (2019):* Invoked Article 142 to grant 5 acres of alternative land for a mosque.\n  - *Coal Block & 2G Spectrum Cancellations:* Invoked to undo unlawful executive allocations *en masse*.\n  - Dissolution of marriage on the ground of **"irretrievable breakdown of marriage"** (*Shilpa Sailesh v. Varun Sreenivasan, 2023*) dispensing with the mandatory 6-month statutory waiting period.\n\n### 2. Article 141 (Binding Precedent) & Article 129 (Court of Record):\n• **Article 141:** The law declared by the Supreme Court shall be binding on all courts within the territory of India (establishes the doctrine of *stare decisis*).\n• **Article 129:** The Supreme Court is a **Court of Record**—its proceedings and judgments are preserved as perpetual testimony, and it has the inherent power to **punish for contempt of itself**.',
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
        syllabusSection: 'GS Paper II: Supreme Court Advisory Jurisdiction (Art 143) & Article 142 Inherent Powers.',
        examNotes: 'UPSC tests Article 143 Clause 1 (discretionary) vs Clause 2 (mandatory to answer), non-binding nature of advice, and Article 142 landmark applications.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Supreme Court Powers — Articles 141, 142, 143.',
        examNotes: 'High yield for 20-word definitions of Article 142 "Complete Justice" and Article 143 Advisory Jurisdiction.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Binding Legal Precedent.',
        examNotes: 'Article 141 binding effect on debt recovery tribunals and commercial courts.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 143 Advisory: Cl 1 (Public importance - SC can refuse, e.g. Ayodhya 1994); Cl 2 (Pre-constitution treaty - SC bound to answer). Opinion is NON-BINDING on President. Art 142: Inherent power for "complete justice". Art 141: SC law binding on all courts in India. Art 129: Court of record and contempt power.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 143:** President seeks advisory opinion; SC can refuse under Cl(1) but must answer under Cl(2); opinion is not binding.\n• **Article 142:** Complete justice power; used in Bhopal gas, Ayodhya, and irretrievable breakdown of marriage.\n• **Article 141:** Law of the land binding on all courts.\n• **Article 129:** Court of record; penal contempt jurisdiction.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Articles 141–143 establish the Supreme Court not merely as an appellate tribunal but as an overarching constitutional authority capable of providing consultative guidance, creating nationwide binding jurisprudence, and crafting equitable remedies beyond the rigid boundaries of statutory procedure.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T16-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Advisory Jurisdiction of the Supreme Court of India under Article 143, consider the following statements:\n1. The Supreme Court is bound to give its opinion on any matter of public importance referred to it by the President under Article 143(1).\n2. The advisory opinion delivered by the Supreme Court under Article 143 is binding on the President of India.\nWhich of the statements given above is/are CORRECT?',
        options: {
          A: '1 only',
          B: '2 only',
          C: 'Both 1 and 2',
          D: 'Neither 1 nor 2',
        },
        correctAnswer: 'D',
        explanation: 'Both statements are incorrect. Under Article 143(1), the Supreme Court is not bound to give its opinion on a matter of public importance and may refuse to do so (as in the 1994 Ayodhya reference). Furthermore, the advisory opinion rendered under Article 143 is consultative in nature and is not legally binding on the President.',
        trapExplanation: 'SC can refuse under Clause (1), and the advice is NEVER binding on the President.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 17: STATE JUDICIARY (4 CONCEPTS: CON-T17-01 to CON-T17-04)
  // =========================================================================
  {
    id: 'CON-T17-01',
    slug: 'high-court-architecture-appointments-qualifications-and-transfers',
    topicSlug: 'the-state-judiciary',
    topicTitle: 'Part VI: State Judiciary (High Courts & Subordinate Courts)',
    topicOrder: 17,
    title: 'High Court Architecture: Appointments, Qualifications & Transfers (Arts 214–224A)',
    shortDefinition: 'The constitutional framework of High Courts in India (25 High Courts under Arts 214–231), common High Courts (7th CAA 1956), judicial appointments via the High Court Collegium, qualifications (and the absence of the "distinguished jurist" category), retirement age (62 years), and transfers under Article 222.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T17-01'],
    claims: [
      {
        id: 'CLM-T17-01.1',
        statement: 'Under Article 214 and the 7th Constitutional Amendment Act 1956 (Article 231), Parliament may establish a common High Court for two or more States or Union Territories, with 25 High Courts currently functioning in India.',
        claimType: 'CONSTITUTIONAL_HIGH_COURT_STRUCTURE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Arts 214, 231)',
      },
      {
        id: 'CLM-T17-01.2',
        statement: 'Under Article 217, High Court Judges are appointed by the President after consultation with the CJI, the Governor of the State, and the Chief Justice of the High Court, hold office until 62 years of age, and must have held judicial office for 10 years or been an advocate in a High Court for 10 years (with no provision for appointing a distinguished jurist).',
        claimType: 'CONSTITUTIONAL_HIGH_COURT_APPOINTMENT_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Art 217)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Apex Judicial Body at the State Level',
        body: 'Under **Part VI, Chapter V (Articles 214–231)**, the Constitution provides for a **High Court in every State**. The High Court occupies the apex position in the judicial administration of the State.\n\nHowever, in India’s unified judicial system, a High Court is **NOT subordinate to the Supreme Court administratively**, but is an independent constitutional court of coordinate standing, subject only to the appellate and constitutional jurisdiction of the Supreme Court.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Appointment, Collegium & Qualifications (Article 217)',
        body: '### Appointment Procedure:\n• Appointed by the **President of India** by warrant under his hand and seal.\n• **Consultation Mechanism:** The President consults:\n  1. The **Chief Justice of India (CJI)**\n  2. The **Governor of the State**\n  3. The **Chief Justice of that High Court** (for appointment of puisne judges).\n• **High Court Collegium:** In the Second and Third Judges Cases, it was established that for HC appointments, the CJI consults a collegium of the **two senior-most Judges of the Supreme Court**.\n\n### Qualifications for a High Court Judge (Article 217(2)):\n1. Must be a citizen of India, **AND**\n2. Has for at least **10 years held a judicial office** in the territory of India; **OR**\n3. Has for at least **10 years been an advocate** of a High Court (or two or more such courts in succession).\n• ⚠️ **CRITICAL EXAM TRAP:** Unlike the Supreme Court (Art 124(3)(c)), there is **NO provision for appointing a "distinguished jurist" as a High Court Judge!**\n• **Retirement Age:** **62 Years** (compared to 65 years for Supreme Court judges).\n\n### Transfer of Judges (Article 222):\n• The President may, after consultation with the CJI, transfer a Judge from one High Court to another.\n• The CJI’s recommendation requires consultation with the **four senior-most SC judges**, plus the Chief Justices of both the transferring and receiving High Courts.',
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
        syllabusSection: 'GS Paper II: Structure, Organization and Functioning of High Courts.',
        examNotes: 'UPSC tests: Retirement age (62 vs 65), absence of distinguished jurist in HC, and Article 222 transfer collegium requirements.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: High Court Architecture, Appointment & Transfer of Judges.',
        examNotes: 'High yield for 20-word definitions of High Court qualifications and retirement age.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Judiciary.',
        examNotes: 'High Courts as supervisory courts over commercial disputes.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'High Courts (Arts 214-231): 25 HCs in India (7th CAA common HCs). Appointed by President (consults CJI + Governor + HC CJ). Qualifications: 10-yr judicial office / 10-yr HC advocate. NO distinguished jurist in HC! Retirement age = 62 yrs. Transfer under Art 222. Salaries on State Fund; Pensions on Union Fund.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Structure:** 25 High Courts; Parliament can create common HCs under Art 231.\n• **Appointment:** President appoints on CJI + 2 senior SC judges collegium advice.\n• **Qualifications:** 10 years judicial office or 10 years HC advocate (no distinguished jurist).\n• **Retirement:** 62 years; removed on same grounds/process as SC judge (Art 217(1)(b)).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The High Court operates as an independent constitutional court at the state level, structured with high qualification thresholds, insulated salary charges on the State Consolidated Fund, and an independent appointment collegium to insulate state-level adjudication from regional political pressures.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T17-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding the qualifications and tenure of High Court Judges in India:\n1. A distinguished jurist in the opinion of the President can be appointed as a Judge of a High Court.\n2. A Judge of a High Court holds office until attaining the age of 62 years.\n3. The salaries of High Court Judges are charged on the Consolidated Fund of the State, while their pensions are charged on the Consolidated Fund of India.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statements 2 and 3 are correct. Statement 1 is incorrect because the Constitution provides for the appointment of a distinguished jurist only to the Supreme Court (Article 124(3)(c)), and NOT to High Courts (Article 217(2)).',
        trapExplanation: 'Distinguished jurist is an SC-only provision; HC retirement age is 62 (not 65).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T17-02',
    slug: 'high-court-writ-jurisdiction-art-226-vs-art-32-and-superintendence',
    topicSlug: 'the-state-judiciary',
    topicTitle: 'Part VI: State Judiciary (High Courts & Subordinate Courts)',
    topicOrder: 17,
    title: 'High Court Jurisdiction: Writ Jurisdiction (Art 226 vs Art 32) & Superintendence (Art 227)',
    shortDefinition: 'The expansive writ jurisdiction of High Courts under Article 226 (enforcing Fundamental Rights and other legal rights), structural comparison with Supreme Court Article 32, supervisory jurisdiction over all courts and tribunals under Article 227, and Court of Record status under Article 215.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T17-02', 'SEM-T17-03'],
    claims: [
      {
        id: 'CLM-T17-02.1',
        statement: 'Under Article 226, the writ jurisdiction of the High Court is broader in subject-matter scope than that of the Supreme Court under Article 32, as High Courts can issue writs for the enforcement of Fundamental Rights as well as for "any other purpose" (ordinary legal/statutory rights).',
        claimType: 'CONSTITUTIONAL_WRIT_COMPARISON_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Arts 226, 32)',
      },
      {
        id: 'CLM-T17-02.2',
        statement: 'Under Article 227, every High Court has administrative and judicial superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction (except military courts/tribunals), which is broader than the supervisory jurisdiction under Article 226.',
        claimType: 'CONSTITUTIONAL_SUPERINTENDENCE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Art 227)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Dual Constitutional Pillars of High Court Authority',
        body: 'The constitutional power and prestige of the High Court rests upon two immense jurisdictional powers:\n1. **Article 226 (Writ Jurisdiction):** Extraordinary power to issue prerogative writs (*Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari*) against any government, authority, or person.\n2. **Article 227 (Power of Superintendence):** Superintending authority over all subordinate courts and tribunals within its territorial jurisdiction.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Article 32 (Supreme Court) vs Article 226 (High Court) Writ Comparison',
        body: '| Parameter | Article 32 (Supreme Court) | Article 226 (High Court) |\n| :--- | :--- | :--- |\n| **Subject Matter Scope** | **Narrower:** Can issue writs **ONLY for the enforcement of Fundamental Rights** (Part III) | **WIDER:** Can issue writs for Fundamental Rights **AND "for any other purpose"** (ordinary legal rights) |\n| **Constitutional Nature** | **Article 32 is itself a Fundamental Right** (SC cannot refuse to entertain a genuine petition) | **Article 226 is a discretionary constitutional remedy** (HC may refuse if alternative effective statutory remedy exists) |\n| **Territorial Jurisdiction**| **Wider:** Can issue writs against any authority throughout the entire territory of India | **Narrower:** Limited to its State territory, or where the **cause of action arises** within territory (Art 226(2)) |\n| **Remedy Status** | Guarantor and protector of Fundamental Rights | Constitutional court of general legal oversight |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Supervisory Jurisdiction (Article 227) & Court of Record (Article 215)',
        body: '### Article 227 (Superintendence over all Courts and Tribunals):\n• High Court exercises both **administrative superintendence** and **judicial superintendence**.\n• Covers all subordinate civil and criminal courts, as well as statutory tribunals (e.g. CAT benches, tax tribunals, labour tribunals within the State).\n• **Difference from Article 226:**\n  - Article 226 is directed against actions/orders; Article 227 is a continuous supervisory power over the functioning of courts/tribunals.\n  - Article 227 can be exercised **suo motu** (on the court’s own motion) without an application by an aggrieved party.\n• **Exclusion:** Does not extend to courts/tribunals constituted under Armed Forces laws (Court Martial).\n\n### Article 215 (Court of Record):\n• High Court is a Court of Record; its acts and judicial proceedings are recorded for perpetual memory and testimony.\n• It possesses the inherent power to **punish for contempt of itself** (civil or criminal contempt).',
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
        syllabusSection: 'GS Paper II: Article 226 vs Article 32 & Article 227 Superintendence.',
        examNotes: 'UPSC frequently asks why Article 226 is wider in scope than Article 32 (ordinary legal rights enforcement) but narrower in territorial scope.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: High Court Jurisdiction — Articles 226, 227 & 215.',
        examNotes: 'High yield for 50-word comparison between Article 226 and Article 32.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Writ Remedies in Banking.',
        examNotes: 'Writ petitions filed in High Courts challenging SARFAESI or DRT proceedings.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 226 vs Art 32: Art 226 is WIDER in subject matter (Fundamental Rights + ordinary legal rights "for any other purpose"), but DISCRETIONARY. Art 32 is a Fundamental Right itself, non-refusable, but limited strictly to Part III. Art 227: Administrative and judicial superintendence over all courts and tribunals. Art 215: Court of record and contempt power.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Article 226:** Enforces Fundamental Rights + ordinary statutory rights; discretionary remedy.\n• **Article 32:** Enforces ONLY Fundamental Rights; mandatory constitutional right.\n• **Article 227:** Supervisory power over all courts and tribunals (except armed forces); can act suo motu.\n• **Article 215:** Court of record with contempt jurisdiction.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The dual framework of Article 226 (providing accessible constitutional and administrative writ remedies within the state) and Article 227 (ensuring uniform judicial discipline across all subordinate tribunals) positions the High Court as the primary judicial fortress protecting the rule of law within state boundaries.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T17-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Why is the writ jurisdiction of a High Court under Article 226 considered broader than that of the Supreme Court under Article 32 of the Constitution?',
        options: {
          A: 'Because High Courts can issue writs against foreign governments, while the Supreme Court cannot.',
          B: 'Because High Courts can issue writs for the enforcement of Fundamental Rights as well as ordinary legal rights ("for any other purpose"), whereas the Supreme Court can issue writs ONLY for Fundamental Rights.',
          C: 'Because High Court writs cannot be appealed to the Supreme Court.',
          D: 'Because High Courts can issue writs without hearing the respondent.',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 226, High Courts are empowered to issue writs not only for the enforcement of Fundamental Rights (Part III) but also "for any other purpose" (enforcement of any ordinary legal or statutory right). In contrast, Article 32 is strictly confined to the enforcement of Fundamental Rights.',
        trapExplanation: 'Article 226 is wider in subject-matter reach because of the phrase "and for any other purpose".',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T17-03',
    slug: 'subordinate-judiciary-architecture-and-high-court-control',
    topicSlug: 'the-state-judiciary',
    topicTitle: 'Part VI: State Judiciary (High Courts & Subordinate Courts)',
    topicOrder: 17,
    title: 'Subordinate Judiciary Architecture (Arts 233–237) & High Court Control (Art 235)',
    shortDefinition: 'The constitutional framework of the subordinate judiciary under Part VI, appointment and posting of District Judges (Art 233), recruitment of judicial officers (Art 234), and the complete administrative and disciplinary control of the High Court over lower courts under Article 235.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T17-04'],
    claims: [
      {
        id: 'CLM-T17-03.1',
        statement: 'Under Article 233, appointments, postings, and promotions of District Judges in any State are made by the Governor of the State in consultation with the High Court exercising jurisdiction over such State.',
        claimType: 'CONSTITUTIONAL_DISTRICT_JUDGE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Art 233)',
      },
      {
        id: 'CLM-T17-03.2',
        statement: 'Under Article 235, the administrative control over district courts and courts subordinate thereto, including postings, promotions, grant of leave, and disciplinary oversight of persons belonging to the judicial service of a State, is vested entirely in the High Court.',
        claimType: 'CONSTITUTIONAL_HIGH_COURT_CONTROL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Art 235)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Subordinate Judicial Hierarchy Under State Auspices',
        body: 'Under **Part VI, Chapter VI (Articles 233–237)**, the Constitution organizes the subordinate judiciary operating below the High Court.\n\nTo ensure the separation of the judiciary from the executive mandated by **Article 50 (DPSP)**, the Constitution completely insulates the subordinate judiciary from executive interference by vesting **exclusive administrative, posting, promotion, and disciplinary control in the High Court under Article 235**.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Appointment of Judicial Officers (Articles 233 & 234)',
        body: '### 1. Appointment of District Judges (Article 233):\n• **Appointing Authority:** The **Governor of the State in consultation with the High Court**.\n• **Eligibility for Direct Recruitment from Bar:**\n  1. Must not already be in the service of the Union or of the State.\n  2. Must have been for **not less than 7 years an advocate or a pleader**.\n  3. Must be **recommended by the High Court** for appointment.\n\n### 2. Appointment of Other Judicial Officers (Article 234):\n• Appointments of persons other than district judges to the judicial service of a State are made by the **Governor** in accordance with rules made by him after consultation with the **State Public Service Commission (SPSC)** and the **High Court**.\n\n### 3. Complete Control of High Court (Article 235):\n• The High Court exercises complete control over the subordinate judiciary: postings, promotions, transfers, leave, and disciplinary proceedings.\n• The Governor retains only the formal power of appointment, dismissal, and removal (acting on the binding recommendation of the High Court).',
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
        syllabusSection: 'GS Paper II: Subordinate Judiciary & Article 235 High Court Control.',
        examNotes: 'UPSC tests the 7-year advocate requirement for District Judge direct recruitment and Article 235 control.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Subordinate Judiciary in Rajasthan — District Courts & Civil Courts.',
        examNotes: 'High yield for Rajasthan Judicial Service (RJS) recruitment framework under Article 234.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Civil Court Hierarchy.',
        examNotes: 'District courts and civil litigation.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Subordinate Courts (Arts 233-237): District Judges appointed by Governor in consultation with High Court (Art 233; min 7 yrs advocate for direct entry). Other judges appointed via SPSC + HC (Art 234). Art 235: Complete administrative, posting, and disciplinary control over lower judiciary is vested in the High Court.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **District Judges (233):** Appointed by Governor on HC consultation (7 years advocate practice).\n• **Judicial Officers (234):** Recruited via State PSC + HC consultation.\n• **Article 235 Control:** Complete control of subordinate courts belongs to High Court (enforces Art 50 separation of powers).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 235 acts as the constitutional firewall protecting trial-level and district-level judges from executive harassment, vesting all internal administration and career promotions directly in the independent High Court.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T17-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 233 of the Constitution of India, who among the following appoints the District Judges in a State?',
        options: {
          A: 'The Chief Justice of the High Court',
          B: 'The Governor of the State in consultation with the High Court',
          C: 'The President of India on the advice of the Chief Justice of India',
          D: 'The State Public Service Commission',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 233(1), appointments of persons to be, and the posting and promotion of, district judges in any State shall be made by the Governor of the State in consultation with the High Court exercising jurisdiction in relation to such State.',
        trapExplanation: 'Governor is the formal appointing authority, acting in mandatory consultation with the High Court.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T17-04',
    slug: 'rajasthan-high-court-architecture-and-judicial-administration',
    topicSlug: 'the-state-judiciary',
    topicTitle: 'Part VI: State Judiciary (High Courts & Subordinate Courts)',
    topicOrder: 17,
    title: 'Rajasthan High Court Architecture: Jodhpur Principal Seat & Jaipur Bench',
    shortDefinition: 'The historical evolution of the Rajasthan High Court established under the Rajasthan High Court Ordinance 1949, inauguration at Jodhpur on August 29, 1949, first Chief Justice Kamala Kant Verma, Satyanarayan Rao Committee (1958), the permanent Jaipur Bench (1976/1977), and sanctioned judicial strength.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T17-05'],
    claims: [
      {
        id: 'CLM-T17-04.1',
        statement: 'The Rajasthan High Court was inaugurated on August 29, 1949 at Jodhpur by Rajpramukh Maharaja Sawai Man Singh under the Rajasthan High Court Ordinance 1949, with Justice Kamala Kant Verma taking oath as its first Chief Justice.',
        claimType: 'HISTORICAL_RAJASTHAN_HIGH_COURT_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Rajasthan HC)',
      },
      {
        id: 'CLM-T17-04.2',
        statement: 'Following the recommendations of the Satyanarayan Rao Committee (1958) which confirmed Jodhpur as the Principal Seat, a permanent Bench of the Rajasthan High Court was established at Jaipur in 1976 (operational January 31, 1977), with the High Court having a total sanctioned strength of 50 Judges (38 permanent + 12 additional).',
        claimType: 'STATUTORY_RAJASTHAN_BENCH_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 16, Rajasthan HC Bench)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Apex Judicial Body of Rajasthan',
        body: 'The **Rajasthan High Court** is the constitutional high court for the State of Rajasthan. Following the integration of princely states into Rajasthan, the High Court was established by promulgating the *Rajasthan High Court Ordinance, 1949*.\n\nIt was formally inaugurated on **August 29, 1949** at **Jodhpur** by Rajpramukh Maharaja Sawai Man Singh of Jaipur. **Justice Kamala Kant Verma** was sworn in as the **first Chief Justice of Rajasthan** alongside 11 puisne judges.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'TIMELINE',
        title: 'Evolution of Principal Seat & Jaipur Bench',
        body: '• **1949 (Integration):** High court benches initially functioned at Jaipur, Udaipur, Kota, and Bikaner.\n• **1958 (Satyanarayan Rao Committee):** The P. Satyanarayan Rao Committee was appointed following the *States Reorganisation Act 1956* to settle capital and administrative locations. It recommended that **Jodhpur be the sole Principal Seat** of the High Court (while Jaipur was made the state capital), and the Jaipur bench was abolished in 1958.\n• **1976 (Revival of Jaipur Bench):** Under the *High Court of Rajasthan (Establishment of a Permanent Bench at Jaipur) Order, 1976*, a permanent bench was created at **Jaipur**, becoming fully operational on **January 31, 1977**.\n• **Territorial Jurisdiction Distribution:**\n  - **Jaipur Bench:** Handles cases from eastern and northeastern districts (e.g. Jaipur, Ajmer, Alwar, Bharatpur, Kota, Dausa, Sikar, Jhunjhunu, Tonk, Sawai Madhopur, etc.).\n  - **Jodhpur Principal Seat:** Handles cases from western, southern, and northern districts (e.g. Jodhpur, Bikaner, Udaipur, Jaisalmer, Barmer, Nagaur, Pali, Jalore, Sirohi, Sri Ganganagar, etc.).\n• **Sanctioned Judicial Strength:** **50 Judges** (38 Permanent + 12 Additional Judges).',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'GS Paper II: High Court Benches.',
        examNotes: 'High court permanent benches established by Presidential order.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Rajasthan High Court — History, Jodhpur Principal Seat, Jaipur Bench & First Chief Justice.',
        examNotes: 'Extremely high yield for RPSC: Inauguration date (August 29, 1949), 1st CJ Kamala Kant Verma, Satyanarayan Rao Committee (1958), Jaipur bench operational date (Jan 31, 1977), and 50 total sanctioned judges.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State High Court Jurisdiction.',
        examNotes: 'Rajasthan jurisdiction.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan High Court: Inaugurated Aug 29, 1949 at Jodhpur by Maharaja Sawai Man Singh. First CJ = Kamala Kant Verma. Satyanarayan Rao Committee (1958) confirmed Jodhpur Principal Seat. Jaipur Permanent Bench established 1976 (operational Jan 31, 1977). Sanctioned strength = 50 Judges (38 perm + 12 addl).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Inauguration:** Aug 29, 1949 at Jodhpur; first CJ Kamala Kant Verma.\n• **Satyanarayan Rao Committee (1958):** Assigned capital to Jaipur and Principal Seat of High Court to Jodhpur.\n• **Jaipur Bench:** Permanent bench revived in 1976; operational Jan 31, 1977.\n• **Strength:** 50 Judges total (38 permanent + 12 additional).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The dual-seat architecture of the Rajasthan High Court—balancing the historical Jodhpur Principal Seat with the Jaipur administrative bench—embodies the political and regional equilibrium established under the post-reorganization settlement.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T17-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'On the recommendation of which Committee was the Principal Seat of the Rajasthan High Court established permanently at Jodhpur following the reorganisation of states?',
        options: {
          A: 'P. Satyanarayan Rao Committee',
          B: 'Jaswant Singh Committee',
          C: 'Fazl Ali Commission',
          D: 'Balwant Rai Mehta Committee',
        },
        correctAnswer: 'A',
        explanation: 'Following the States Reorganisation Act 1956, the P. Satyanarayan Rao Committee was appointed to resolve administrative and judicial locations in Rajasthan. It recommended that Jaipur remain the State Capital and Jodhpur be the sole Principal Seat of the Rajasthan High Court.',
        trapExplanation: 'Satyanarayan Rao Committee decided the Jodhpur High Court vs Jaipur Capital allocation in 1958.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },

  // =========================================================================
  // TOPIC 18: JUDICIAL INNOVATION & TRIBUNALS (3 CONCEPTS: CON-T18-01 to CON-T18-03)
  // =========================================================================
  {
    id: 'CON-T18-01',
    slug: 'public-interest-litigation-pil-locus-standi-and-epistolary-jurisdiction',
    topicSlug: 'judicial-innovation-and-tribunals',
    topicTitle: 'Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture',
    topicOrder: 18,
    title: 'Public Interest Litigation (PIL): Relaxation of Locus Standi & Epistolary Jurisdiction',
    shortDefinition: 'The transformative doctrine of Public Interest Litigation (PIL) pioneered by Justice V.R. Krishna Iyer and Justice P.N. Bhagwati, the democratic relaxation of the strict rule of locus standi, epistolary jurisdiction (letters as writ petitions), and landmark public interest jurisprudence.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T18-01', 'SEM-T18-02'],
    claims: [
      {
        id: 'CLM-T18-01.1',
        statement: 'Public Interest Litigation (PIL) originated in the United States and was pioneered in India in the late 1970s and early 1980s by Justice V.R. Krishna Iyer (Mumbai Kamgar Sabha 1976) and Justice P.N. Bhagwati (S.P. Gupta 1981), relaxing the traditional Anglo-Saxon rule of locus standi to democratize access to justice for disadvantaged sections.',
        claimType: 'JUDICIAL_PIL_FOUNDATION_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 19, PIL Origin)',
      },
      {
        id: 'CLM-T18-01.2',
        statement: 'Under Epistolary Jurisdiction, the Supreme Court (under Article 32) and High Courts (under Article 226) can treat simple letters, postcards, or telegrams addressed to the court by public-spirited citizens as formal writ petitions to remedy violations of constitutional rights.',
        claimType: 'JUDICIAL_EPISTOLARY_JURISDICTION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 19, Epistolary Jurisdiction)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Democratizing Constitutional Justice Through PIL',
        body: 'In traditional Anglo-Saxon jurisprudence, judicial proceedings could be initiated only by an **aggrieved person** whose direct legal rights were violated (**strict *locus standi***).\n\nIn India, where millions of poor, illiterate, and marginalized citizens are incapable of approaching courts due to socio-economic handicaps, the Supreme Court transformed the concept of standing in the late 1970s by introducing **Public Interest Litigation (PIL)** (or Social Action Litigation). Under PIL, any **public-spirited citizen or voluntary organization** can approach the Supreme Court (Article 32) or High Court (Article 226) for the enforcement of constitutional or legal rights of disadvantaged groups.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'Landmark Precedents Shaping PIL Jurisprudence',
        body: '• **1. *Mumbai Kamgar Sabha v. Abdulbhai (1976)*:** Justice V.R. Krishna Iyer first planted the seeds of representative standing for industrial workers.\n• **2. *Hussainara Khatoon v. Home Secretary, State of Bihar (1979)*:** First major PIL in India; filed by advocate Pushpa Kapila Hingorani based on newspaper reports regarding undertrial prisoners languishing in Bihar jails. Led to the release of over **40,000 undertrials** and established the **Right to Speedy Trial under Article 21**.\n• **3. *S.P. Gupta v. Union of India (Judges Transfer Case, 1981)*:** Justice P.N. Bhagwati formally articulated the foundational doctrine of PIL: *"Where a legal wrong or injury is caused to a person or determinate class of persons who by reason of poverty, helplessness or disability cannot approach the court, any member of the public can maintain an application for an appropriate direction or writ."*\n• **4. *Bandhua Mukti Morcha v. Union of India (1984)*:** Supreme Court recognized letters and postcards as writ petitions (**Epistolary Jurisdiction**) to free bonded labourers from stone quarries.\n• **5. *M.C. Mehta Cases (1986–2000s)*:** Pioneered environmental jurisprudence (Ganga water pollution, Taj Trapezium air pollution, vehicular pollution in Delhi, and the **Absolute Liability Doctrine** in the Oleum Gas Leak case).\n• **6. *Vishaka v. State of Rajasthan (1997)*:** Supreme Court laid down binding guidelines preventing **Sexual Harassment of Women at the Workplace** (filling a legislative vacuum until the 2013 Act).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MISCONCEPTION_SHIELD',
        title: 'Guidelines Against Frivolous and Private-Interest Litigation',
        body: 'Because the PIL mechanism became vulnerable to abuse by individuals seeking cheap publicity, political vendetta, or commercial extortion (*"Publicity Interest Litigation"* or *"Private Interest Litigation"*), the Supreme Court laid down strict operational filters in ***State of Uttaranchal v. Balwant Singh Chaufal (2010)***:\n1. The court must verify the **credentials and bona fides** of the petitioner.\n2. The petition must involve a **genuine public cause**, not private profit or political motivation.\n3. PILs are **NOT maintainable** in: landlord-tenant disputes, service matters / pension claims, admission to educational institutions, or early disposal of private court cases.\n4. Courts must impose **heavy exemplary costs** on frivolous petitioners.',
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
        syllabusSection: 'GS Paper II: Public Interest Litigation (PIL), Epistolary Jurisdiction & Judicial Remedies.',
        examNotes: 'UPSC frequently tests PIL origin (US), Indian pioneers (Krishna Iyer & PN Bhagwati), locus standi relaxation, and landmark cases (Hussainara Khatoon, Bandhua Mukti Morcha, Vishaka).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Public Interest Litigation & Judicial Activism in India.',
        examNotes: 'High yield for 50-word and 20-word questions on Locus Standi and Vishaka v. State of Rajasthan case.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Consumer Legal Remedies.',
        examNotes: 'PILs in consumer and environmental banking matters.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PIL: Origin US; pioneered in India by Justice VR Krishna Iyer & PN Bhagwati (SP Gupta 1981). Relaxes strict locus standi so public-spirited citizens can file writs under Art 32/226 for poor/marginalized. Epistolary jurisdiction (letters/postcards as writs). Landmark: Hussainara Khatoon (undertrials), Bandhua Mukti Morcha (bonded labour), Vishaka (workplace harassment). Not for service/landlord matters.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Concept:** Relaxation of locus standi to democratize justice for disadvantaged citizens.\n• **Pioneers:** Justice V.R. Krishna Iyer and Justice P.N. Bhagwati.\n• **Epistolary Jurisdiction:** Letters and telegrams treated as formal writ petitions.\n• **Landmarks:** Hussainara Khatoon (1979), S.P. Gupta (1981), Bandhua Mukti Morcha (1984), Vishaka (1997).\n• **Abuse Safeguards:** Balwant Singh Chaufal (2010) rules against publicity/private vendetta.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Public Interest Litigation represents a radical procedural innovation within Indian constitutionalism, converting the courts from passive dispute-adjudicators into proactive defenders of socio-economic human rights for the unrepresented majority.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T18-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to Public Interest Litigation (PIL) in the Indian legal system, consider the following statements:\n1. The concept of PIL was introduced in India through an explicit constitutional amendment to Article 32.\n2. Under PIL, the traditional Anglo-Saxon rule of locus standi has been relaxed to allow third-party representation.\n3. Epistolary jurisdiction refers to the judicial practice of treating letters and postcards as formal writ petitions.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statements 2 and 3 are correct. Statement 1 is incorrect because PIL was not introduced through a constitutional amendment; it is a judge-made procedural innovation pioneered by Justice V.R. Krishna Iyer and Justice P.N. Bhagwati through judicial interpretation of Articles 32 and 226.',
        trapExplanation: 'PIL is entirely a judge-made constitutional innovation, NOT a statutory or constitutional amendment.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T18-02',
    slug: 'judicial-review-vs-activism-vs-judicial-overreach',
    topicSlug: 'judicial-innovation-and-tribunals',
    topicTitle: 'Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture',
    topicOrder: 18,
    title: 'Judicial Review vs Judicial Activism vs Judicial Overreach',
    shortDefinition: 'The conceptual boundaries separating legitimate Judicial Review (examining constitutionality under Articles 13, 32, 226), positive Judicial Activism (proactive rights enforcement during executive inaction), and unconstitutional Judicial Overreach (transgressing into policy-making and legislative domains).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T18-03'],
    claims: [
      {
        id: 'CLM-T18-02.1',
        statement: 'Judicial Review is an integral part of the Basic Structure of the Constitution (Kesavananda Bharati 1973, L. Chandra Kumar 1997), empowering the judiciary to examine the constitutional validity of legislative enactments and executive orders under Articles 13, 32, 136, 226, and 227.',
        claimType: 'CONSTITUTIONAL_JUDICIAL_REVIEW_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 19, Judicial Review)',
      },
      {
        id: 'CLM-T18-02.2',
        statement: 'While Judicial Activism involves the proactive role played by the judiciary in protecting citizen rights and filling legislative vacuums, Judicial Overreach occurs when the judiciary breaches the constitutional separation of powers by encroaching upon the exclusive policy-making and administrative domains of the Executive and Legislature.',
        claimType: 'CONCEPTUAL_JUDICIAL_ACTIVISM_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 19, Judicial Activism)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Tripartite Spectrum of Judicial Power',
        body: 'In Indian constitutional governance, the exercise of judicial authority ranges across three distinct tiers:\n1. **Judicial Review:** The **constitutionally mandated power** to examine the legal validity of laws and executive acts.\n2. **Judicial Activism:** The **proactive assertion of judicial power** to protect rights, enforce statutory duties, and fill policy vacuums caused by executive apathy or legislative deadlock.\n3. **Judicial Overreach (Judicial Adventurism):** The **unconstitutional transgression** of courts into the core executive or legislative domains, violating the **Separation of Powers** doctrine.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Comparative Analysis: Review vs Activism vs Overreach',
        body: '| Parameter | Judicial Review | Judicial Activism | Judicial Overreach |\n| :--- | :--- | :--- | :--- |\n| **Constitutional Basis** | Explicitly anchored in **Articles 13, 32, 136, 226, 227**; part of **Basic Structure** | Implied expansion of **Article 21** and PIL procedural innovations | **No constitutional basis**; breaches Article 50 Separation of Powers |\n| **Trigger Mechanism** | Legal challenge brought by an aggrieved party or petitioner | Proactive judicial intervention to protect public welfare and fundamental rights | Court dictating administrative policies, levying taxes, or drafting complex regulations |\n| **Key Examples** | Striking down 99th CAA (NJAC) in 2015; striking down Section 66A of IT Act (*Shreya Singhal 2015*) | Formulating workplace guidelines (*Vishaka 1997*); recognizing Right to Privacy (*Puttaswamy 2017*) | Imposing a ban on liquor sales within 500m of highways (2016); running cricket administration (BCCI CoA); canceling master plans |\n| **Democratic Legitimacy** | **Universally Accepted** as the primary duty of constitutional courts | **Widely Applauded** when executive fails to protect citizens | **Criticized as "Judicial Tyranny"**; undermines institutional accountability |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Judicial Self-Restraint Doctrine',
        body: 'To prevent judicial activism from degenerating into judicial overreach, the Supreme Court has repeatedly emphasized the doctrine of **Judicial Self-Restraint** (*Divisional Manager, Aravali Golf Club v. Chander Haas, 2008*):\n• Courts must recognize that they lack the **technical expertise, fiscal resources, and democratic accountability** to manage complex administrative problems.\n• Courts cannot take over the governance of the State or act as a "Third Chamber of the Legislature".\n• Judges must not substitute their personal policy preferences for those of the elected government.',
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
        syllabusSection: 'GS Paper II: Separation of Powers, Judicial Review, Judicial Activism vs Overreach.',
        examNotes: 'UPSC frequently asks analytical Mains questions on Judicial Activism vs Judicial Overreach and the limits of Article 142.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Judicial Review & Judicial Activism in Indian Governance.',
        examNotes: 'High yield for 50-word and 100-word Mains answers on Judicial Activism.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Administrative Law.',
        examNotes: 'Judicial review of regulatory bodies.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Judicial Review: Constitutional power (Arts 13, 32, 226) to test law validity; Basic Structure. Judicial Activism: Proactive rights defense when executive fails (e.g. Vishaka guidelines). Judicial Overreach: Unconstitutional intrusion into policy/administration (e.g. highway liquor ban, executive micromanagement); violates Separation of Powers.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Judicial Review:** Testing legislative/executive constitutionality; part of Basic Structure.\n• **Judicial Activism:** Proactive judicial enforcement of human rights (Vishaka, Right to Privacy).\n• **Judicial Overreach:** Transgression into executive policy-making and legislative drafting.\n• **Self-Restraint:** Courts lack fiscal and democratic accountability to govern the country.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The dynamic tension between Judicial Activism (essential for vindicating neglected fundamental rights in a developing democracy) and Judicial Self-Restraint (essential for preserving the constitutional separation of powers) defines the modern institutional frontier of the Indian judiciary.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T18-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'In Indian constitutional jurisprudence, which of the following is considered an example of "Judicial Overreach" rather than legitimate "Judicial Review"?',
        options: {
          A: 'Striking down a parliamentary statute that violates Fundamental Rights under Article 13.',
          B: 'Setting aside an arbitrary executive transfer order that violates Article 14.',
          C: 'Banning the sale of liquor within 500 metres of all National and State highways through judicial decree.',
          D: 'Issuing a writ of Habeas Corpus to release an illegally detained individual.',
        },
        correctAnswer: 'C',
        explanation: 'Options A, B, and D are classical exercises of Judicial Review and constitutional writ enforcement. Option C (the 2016 Highway Liquor Ban) is widely cited by legal scholars and courts as an example of Judicial Overreach, where the court created a substantive administrative policy and commercial regulation that fell squarely within the executive and legislative domain.',
        trapExplanation: 'Enforcing Fundamental Rights is legitimate Judicial Review; framing administrative policies is Judicial Overreach.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T18-03',
    slug: 'tribunals-architecture-article-323a-vs-323b-and-l-chandra-kumar',
    topicSlug: 'judicial-innovation-and-tribunals',
    topicTitle: 'Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture',
    topicOrder: 18,
    title: 'Tribunals Architecture: Part XIV-A (42nd CAA), Art 323A vs 323B & L. Chandra Kumar',
    shortDefinition: 'The constitutional framework of administrative and specialized tribunals under Part XIV-A (Articles 323A & 323B inserted by 42nd CAA 1976), Central Administrative Tribunal (CAT), distinction between Art 323A and 323B, and the landmark 7-judge bench ruling in L. Chandra Kumar v. Union of India (1997) subjecting all tribunals to High Court Division Bench judicial review under Articles 226/227.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T18-04', 'SEM-T18-05'],
    claims: [
      {
        id: 'CLM-T18-03.1',
        statement: 'Part XIV-A was inserted into the Constitution by the 42nd Amendment Act 1976 on the recommendation of the Swaran Singh Committee, creating Article 323A (Administrative Tribunals for public service disputes, established ONLY by Parliament) and Article 323B (Tribunals for other specified matters like taxation, land reforms, foreign exchange, established by Parliament OR State Legislatures).',
        claimType: 'CONSTITUTIONAL_TRIBUNAL_FRAMEWORK_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 54, Arts 323A, 323B)',
      },
      {
        id: 'CLM-T18-03.2',
        statement: 'In L. Chandra Kumar v. Union of India (1997), a 7-judge Constitution Bench held that the power of Judicial Review under Articles 226/227 (High Courts) and Article 32 (Supreme Court) is part of the Basic Structure of the Constitution, and therefore all decisions of Tribunals under Articles 323A and 323B are subject to scrutiny before a Division Bench of the High Court before approaching the Supreme Court.',
        claimType: 'JUDICIAL_TRIBUNAL_REVIEW_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 54, L. Chandra Kumar)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Specialized Adjudication and the Tribunalisation of Justice',
        body: 'To relieve regular constitutional and civil courts from crushing case backlogs and provide speedy, specialized, and expert dispute resolution, **Part XIV-A (Articles 323A & 323B)** was added to the Constitution by the **42nd Constitutional Amendment Act, 1976** (based on the recommendations of the **Swaran Singh Committee**).\n\nTribunals are quasi-judicial bodies consisting of both **Judicial Members** (former judges/advocates) and **Administrative / Technical Members** (experts in public administration, taxation, environment, or company law).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Article 323A vs Article 323B: Comprehensive Comparison',
        body: '| Parameter | Article 323A (Administrative Tribunals) | Article 323B (Tribunals for Other Matters) |\n| :--- | :--- | :--- |\n| **Subject Matter** | **Public Service Disputes ONLY** (Recruitment and conditions of service of persons appointed to public services of Union, States, or local authorities) | **Other Specified Matters:** Taxation, Foreign Exchange, Industrial & Labour disputes, Land Reforms, Ceiling on urban property, Elections to legislature, Foodstuffs, Rent & Tenancy |\n| **Establishing Authority** | **PARLIAMENT ONLY** can establish by law (State Legislatures have NO power) | **PARLIAMENT OR STATE LEGISLATURES** can establish (within their legislative competence under 7th Schedule) |\n| **Hierarchy of Tribunals** | Only **one tribunal for Union (CAT)** and **one for each State (SAT)** or a joint tribunal (no hierarchy) | A **hierarchy of tribunals** can be created by law |\n| **Statutory Enactment** | *Administrative Tribunals Act, 1985* (CAT established on Nov 1, 1985; Principal Bench at New Delhi) | Enacted via specialized acts (e.g. NCLT under Companies Act, NGT Act 2010, ITAT) |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'The Landmark L. Chandra Kumar Doctrine (1997)',
        body: '### The Constitutional Challenge:\n• The original *Administrative Tribunals Act, 1985* (pursuant to Art 323A(2)(d)) excluded the jurisdiction of all courts **including High Courts under Articles 226/227**, providing a direct appeal from CAT only to the Supreme Court under Article 136.\n\n### The Supreme Court Ruling (*L. Chandra Kumar v. Union of India, 1997* — 7-Judge Bench):\n1. **Basic Structure:** The power of **Judicial Review** over legislative and administrative actions vested in High Courts under **Articles 226/227** and Supreme Court under **Article 32** is an **integral and essential feature of the Basic Structure of the Constitution** and CANNOT be excluded by any constitutional amendment or statute.\n2. **Tribunals as Supplementary Courts:** Tribunals can function as **courts of first instance**, but they are **supplemental to, and NOT substitutes for, the High Courts**.\n3. **Mandatory Appeal to High Court Division Bench:** All decisions of Tribunals (whether CAT, NCLT, NGT, or SAT) are **subject to judicial review before a Division Bench of the concerned High Court** under Article 226/227. An aggrieved party **cannot bypass the High Court** to directly approach the Supreme Court under Article 136.',
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
        syllabusSection: 'GS Paper II: Statutory, Regulatory and Quasi-judicial Bodies; Tribunals & L. Chandra Kumar.',
        examNotes: 'UPSC repeatedly tests Article 323A (Parliament only) vs 323B (Parliament and States), and the L. Chandra Kumar mandatory High Court Division Bench review rule.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Administrative Tribunals — Central Administrative Tribunal (CAT) & State Tribunals.',
        examNotes: 'High yield for 20-word definitions of CAT and differences between Art 323A and 323B.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'IMPORTANT',
        weightage: 'MEDIUM',
        syllabusSection: 'Quasi-Judicial Tribunals.',
        examNotes: 'Debt Recovery Tribunals (DRT) and NCLT operational framework.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Tribunals (Part XIV-A, 42nd CAA 1976, Swaran Singh Committee). Art 323A: Administrative Tribunals (Parliament ONLY, public service disputes; CAT 1985). Art 323B: Other Tribunals (tax, land, rent; Parliament OR States). L. Chandra Kumar (1997): Exclusion of HC review is unconstitutional; all tribunal orders MUST be appealed before HC Division Bench (Arts 226/227) before going to SC.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Part XIV-A:** Added by 42nd Amendment (1976); Swaran Singh Committee.\n• **Article 323A:** Public services recruitment/disputes; established ONLY by Parliament (CAT 1985).\n• **Article 323B:** Other matters (tax, industry, rent); established by Parliament OR State legislatures.\n• **L. Chandra Kumar (1997):** Judicial review under Arts 226/227 is Basic Structure; all tribunal orders are subject to HC Division Bench review.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The L. Chandra Kumar constitutional equilibrium reconciles the administrative necessity for specialized, technocratic dispute resolution in modern welfare states with the inviolable constitutional imperative of preserving High Court judicial superintendence over all subordinate tribunals.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T18-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the constitutional provisions regarding Tribunals in India, consider the following statements:\n1. While Tribunals under Article 323A can be established only by Parliament, Tribunals under Article 323B can be established by both Parliament and State Legislatures.\n2. In the landmark case of L. Chandra Kumar v. Union of India (1997), the Supreme Court ruled that decisions of Tribunals are subject to judicial review before a Division Bench of the High Court.\n3. The Constitution originally contained Part XIV-A providing for Tribunals since its commencement in 1950.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '2 and 3 only',
          C: '1 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'A',
        explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect because Part XIV-A (Articles 323A and 323B) was NOT present in the original 1950 Constitution; it was inserted by the 42nd Constitutional Amendment Act, 1976 on the recommendation of the Swaran Singh Committee.',
        trapExplanation: 'Part XIV-A was added by the 42nd Amendment Act 1976, not part of the original 1950 text.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
];

export async function seedBatchP3CanonicalKnowledge() {
  console.log(`Seeding Batch P3 Canonical Knowledge (${BATCH_P3_CONCEPTS.length} concepts)...`);

  // Seed semantic units
  await seedBatchP3SemanticInventory();

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

  // Ensure Source exists
  await db.source.upsert({
    where: { id: 'LEGACY-POLITY-VAULT-2026' },
    update: {},
    create: {
      id: 'LEGACY-POLITY-VAULT-2026',
      title: 'Polity & Governance Master Archive (2026)',
      sourceType: 'SECONDARY_COMPILATION',
      authorityTier: 'STANDARD_AUTHORITY',
      description: 'Polity & Governance authoritative master curriculum.',
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
      description: 'Professional banking qualification.',
    },
  });

  const examMap: Record<string, string> = {
    UPSC_CSE: upsc.id,
    RPSC_RAS: rpsc.id,
    IIBF_DBF: iibf.id,
  };

  // Group concepts by topic
  const topicsMap: Record<string, { title: string; order: number; concepts: BatchP3ConceptSeedDefinition[] }> = {};
  for (const c of BATCH_P3_CONCEPTS) {
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

  console.log(`Successfully seeded Batch P3 knowledge base. Total concepts: ${BATCH_P3_CONCEPTS.length}.`);
  return BATCH_P3_CONCEPTS.length;
}
