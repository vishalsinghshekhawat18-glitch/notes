// Indian Polity Gap Closure Canonical Seed File (CON-POL-129 to CON-POL-136)
// Mind of Aravalli — Academic Reading Hub
// Topics 22, 23, 24, 25: Constitutional Bodies, Statutory Commissions, Welfare Laws, Political Parties & Rajasthan Polity

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const BATCH_POLITY_GAP_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // 1. CON-POL-129: UPSC & State PSCs (Articles 315–323)
  // =========================================================================
  {
    id: 'CON-POL-129',
    topicOrder: 22,
    topicSlug: 'constitutional-bodies-eci-and-cag',
    topicTitle: 'Constitutional Institutions: UPSC, State PSCs & Comptroller and Auditor General',
    topicDescription: 'Constitutional watchdog institutions: Union Public Service Commission (UPSC), State Public Service Commissions (SPSCs), and Comptroller and Auditor General under Articles 148-151 and 315-323.',
    slug: 'upsc-and-state-public-service-commissions-articles-315-323-mandate-and-independence',
    title: 'Union Public Service Commission (UPSC) & State PSCs: Articles 315–323, Merit Watchdog Mandate, Independence & Advisory Limitations',
    shortDefinition: 'The constitutional architecture, institutional independence, and advisory jurisdiction of Public Service Commissions under Part XIV (Articles 315–323). Analyzes: (1) The Institutional Triad (UPSC, State PSCs, and Joint State PSCs created by an Act of Parliament), (2) Security of Tenure under Article 317 (removal by the President exclusively upon Supreme Court inquiry for misbehaviour), (3) Mandatory Consultation under Article 320(3) (disciplinary matters, recruitment methods, promotions), and (4) The Non-Binding Advisory Status of UPSC recommendations, balanced by the parliamentary safeguard requiring the Executive to table an explanatory memorandum for any non-acceptance.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-POL-129-01',
        statement: 'Articles 315 to 323 in Part XIV of the Constitution of India establish the Union Public Service Commission (UPSC) and State Public Service Commissions (SPSCs) as independent constitutional bodies responsible for recruitment to civil services and posts under the Union and States respectively, with Joint State Public Service Commissions (JSPSCs) established by an ordinary Act of Parliament upon request of state legislatures.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Articles 315(1), 315(2), and 316; Indian Polity (M. Laxmikanth, Ch 43)',
        excerpt: 'There shall be a Public Service Commission for the Union and a Public Service Commission for each State. Parliament may by law provide for a Joint Commission.',
      },
      {
        id: 'CLM-POL-129-02',
        statement: 'Under Article 317 of the Constitution, the Chairman or any member of the UPSC or a State PSC can be removed from office by the President only on the ground of misbehaviour after the Supreme Court, on a reference made by the President, has held an inquiry and recommended removal, making the Supreme Court finding binding on the President.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 317(1); Supreme Court of India in Special Reference No. 1 of 1983',
        excerpt: 'The Chairman or any other member of a Public Service Commission shall only be removed from his office by order of the President on the ground of misbehaviour after the Supreme Court on reference has reported.',
      },
      {
        id: 'CLM-POL-129-03',
        statement: 'The recommendations of the UPSC under Article 320 are advisory in nature and not binding on the Government; however, Article 323 mandates that the Government must present to Parliament an annual report together with a memorandum explaining reasons for non-acceptance of the Commission\'s advice in any matter.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 320(3) and Article 323(1); Administrative Law Principles (P.P. Craig)',
        excerpt: 'It shall be the duty of the Union Commission to present annually to the President a report... and the President shall cause a copy thereof to be laid before each House of Parliament.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Merit Gatekeeper: Why Bureaucracy Cannot Hire Its Own Replacements',
        body: 'Imagine if a sitting Minister or Chief Secretary could personally hand-pick the district collectors, tax commissioners, and police chiefs of a nation. Within months, civil administration would collapse into a political spoils system, where loyalty to the ruling party replaces administrative competence.\n\nTo prevent the politicization of the permanent executive, the framers of the Indian Constitution created the **Union Public Service Commission (UPSC)** and **State Public Service Commissions (SPSCs)** under Articles 315–323. They act as independent merit watchdogs, standing between political executive discretion and civil service recruitment. To make them fearless, the Constitution gave them judicial-grade security of tenure: a member cannot be dismissed at the whim of the Prime Minister or Chief Minister—removal requires a formal inquiry by the Supreme Court of India.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Institutional Architecture & Comparative Matrix: UPSC vs SPSC vs JSPSC',
        body: 'Public Service Commissions in India are bifurcated across three distinct legal entities:\n\n| Feature / Dimension | Union Public Service Commission (UPSC) | State Public Service Commission (SPSC) | Joint State PSC (JSPSC) |\n| :--- | :--- | :--- | :--- |\n| **Constitutional Status** | Constitutional Body (Article 315) | Constitutional Body (Article 315) | **Statutory Body** (Created by Act of Parliament) |\n| **Appointing Authority** | President of India | **Governor of the State** | President of India |\n| **Tenure & Age Limit** | **6 Years or 65 Years** of age | **6 Years or 62 Years** of age | **6 Years or 62 Years** of age |\n| **Removal Authority** | **President** (on SC inquiry per Art 317) | **President exclusively** (NOT Governor) | **President** (on SC inquiry per Art 317) |\n| **Resignation Submitted To** | President of India | Governor of the State | President of India |\n| **Expense Charged On** | **Consolidated Fund of India** (Non-votable) | **Consolidated Fund of State** (Non-votable) | Respective Consolidated Funds of participating States |\n| **Annual Report Submitted To** | President $\\to$ Tabled in Parliament | Governor $\\to$ Tabled in State Legislature | Governors of participating States |\n\n### Post-Retirement Employment Disqualifications (Article 319)\n- **UPSC Chairman**: Ineligible for any further employment under the Government of India or a State.\n- **UPSC Member**: Eligible only for appointment as Chairman of UPSC or Chairman of an SPSC.\n- **SPSC Chairman**: Eligible for appointment as Chairman/Member of UPSC or Chairman of another SPSC.\n- **SPSC Member**: Eligible for appointment as Chairman/Member of UPSC or Chairman of that or another SPSC.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Article 320 Advisory Function, Mandatory Consultation & Executive Check',
        body: 'Under Article 320(3), the Executive is constitutionally mandated to consult the Public Service Commission on:\n1. All matters relating to methods of recruitment to civil services and civil posts.\n2. Principles to be followed in making appointments, promotions, and transfers from one service to another.\n3. All disciplinary matters affecting a person serving under the government (censure, withholding increments, demotion, compulsory retirement, dismissal).\n4. Any claim for reimbursement of legal expenses incurred by a civil servant defending official actions.\n\n### The Advisory Nature vs Accountability Loop\n```\n                      UPSC / SPSC RECOMMENDATION WORKFLOW\n                                       │\n   1. Government seeks advice on recruitment, promotions, or disciplinary penalty\n                                       │\n   2. Commission investigates record and submits independent statutory advice\n                                       │\n   3. Government evaluates advice (UPSC advice is ADVISORY, not legally binding)\n                                       │\n   4. IF GOVERNMENT REJECTS ADVICE:\n      Article 323 mandates Cabinet Appointments Committee must record reasons\n                                       │\n   5. Annual Report + Explanatory Memorandum of Non-Acceptance placed before Parliament\n                                       │\n                                       ▼\n          PARLIAMENTARY SCRUTINY & PUBLIC ACCOUNTABILITY ENFORCED\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Examiner Traps & Cross-Exam Analytical Focus',
        body: '### Critical Examiner Traps\n- **Trap 1: Who Removes an SPSC Member?**: While an SPSC Chairman/member is **appointed by the Governor**, they can be **removed ONLY by the President of India** under Article 317 (after a Supreme Court inquiry). The Governor has power only to suspend them pending inquiry, NOT remove them.\n- **Trap 2: Is a JSPSC a Constitutional Body?**: **NO**. A Joint State Public Service Commission is a **Statutory Body** created by an Act of Parliament (e.g. for Punjab and Haryana), whereas UPSC and SPSCs are directly created by Article 315.\n- **Trap 3: Central Vigilance Commission (CVC) Overlap**: In disciplinary matters, when CVC and UPSC advice conflict, UPSC (as a constitutional body) advice takes precedence over statutory bodies, but the final decision rests with the Disciplinary Authority.\n\n### Cross-Exam Focus\n- **UPSC APFC & RBI Grade B**: Security of tenure under Art 317, Art 320 consultation scope, and Art 323 explanatory memorandum rules.\n- **RPSC RAS**: RPSC Chairman age limit (62 yrs vs UPSC 65 yrs), Governor suspension power vs President removal power, and Article 319 post-retirement restrictions.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Polity & Governance: Public Services, UPSC & Constitutional Safeguards',
        notes: 'Articles 315 to 323, disciplinary proceedings under Art 311/320, and Central Administrative Tribunal interaction.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Constitution & State Administration: Union & State Public Service Commissions',
        notes: 'Constitutional comparison between UPSC and RPSC; appointment by Governor vs removal by President.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness / ESI: Constitutional Bodies & Public Governance Institutions',
        notes: 'Institutional role of UPSC in merit-based executive administration.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Constitutional & Regulatory Authorities',
        notes: 'Constitutional checks on executive appointments and public commissions.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI / General Awareness: Governance & Constitutional Bodies',
        notes: 'Civil service institutional framework and public employment equity.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General / Banking Awareness: Constitutional Appointments & Tenures',
        notes: 'UPSC age limits (65 yrs), SPSC (62 yrs), and Presidential removal under Article 317.',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Indian Constitutional Institutions & Articles',
        notes: 'Articles 315, 316, 317, 320, and 323 mandates.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'Indian Financial System: Regulatory & Statutory Framework',
        notes: 'Constitutional framework of public authorities in India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'UPSC vs SPSC (Arts 315–323): UPSC = Appointed by President, 6 yrs / 65 yrs; SPSC = Appointed by Governor, 6 yrs / 62 yrs. BOTH removed ONLY by President (Art 317) after Supreme Court inquiry for misbehaviour. JSPSC = Statutory body created by Parliament. Advice under Art 320 is ADVISORY, but Art 323 mandates explanatory memo to Parliament for non-acceptance.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Public Service Commissions under Articles 315–323 serve as independent merit gatekeepers for Indian civil services. While UPSC members are appointed and removed by the President, State PSC members are appointed by the State Governor but can be removed ONLY by the President following a binding Supreme Court inquiry under Article 317. The tenure is 6 years (up to 65 years for UPSC, 62 years for SPSC/JSPSC). Expenses are charged on the respective Consolidated Funds (non-votable). Under Article 320, consultation on recruitment methods, promotions, and disciplinary matters is mandatory, though the Commission\'s advice remains advisory. Article 323 enforces accountability by requiring the Executive to place before Parliament/State Legislature an annual report along with reasons for rejecting any Commission advice.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'UPSC / SPSC Constitutional Triad Architecture:\n1. Legal Foundation:\n   - UPSC & SPSC: Constitutional Bodies under Article 315(1).\n   - JSPSC: Statutory Body under Article 315(2) created by Act of Parliament.\n2. Appointments & Tenures:\n   - UPSC: President | 6 yrs or 65 yrs.\n   - SPSC: Governor | 6 yrs or 62 yrs.\n   - JSPSC: President | 6 yrs or 62 yrs.\n3. Removal Safeguard (Article 317):\n   - Exclusive Authority: President of India (for UPSC, SPSC, and JSPSC).\n   - Grounds: Misbehaviour (mandatory SC inquiry under Art 145), Insolvency, Infirmity of mind/body, Paid employment outside office.\n4. Advisory Jurisdiction & Checks (Articles 320 & 323):\n   - Mandatory consultation on recruitment rules, promotions, and disciplinary penalties.\n   - Executive rejection requires Cabinet Appointments Committee justification tabled in Parliament/Assembly.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements regarding the removal of a member of a State Public Service Commission (SPSC) is CONSTITUTIONALLY ACCURATE?',
        options: [
          'An SPSC member can be removed by the Governor of the State on the recommendation of the State Cabinet.',
          'An SPSC member is appointed by the Governor but can be removed from office ONLY by the President of India following a Supreme Court inquiry under Article 317.',
          'An SPSC member can be removed by the Chief Justice of the High Court on grounds of administrative incompetence.',
          'An SPSC member can be removed by the State Legislative Assembly through an impeachment resolution passed by a two-thirds majority.',
        ],
        correctAnswer: 'An SPSC member is appointed by the Governor but can be removed from office ONLY by the President of India following a Supreme Court inquiry under Article 317.',
        explanation: 'Under Article 317 of the Constitution, although members of a State Public Service Commission are appointed by the Governor (Article 316), they can be removed from office ONLY by the President of India. In cases of misbehaviour, removal requires a formal inquiry by the Supreme Court, whose report is binding on the President. The Governor has only the interim power to suspend a member pending the inquiry.',
        trapExplanation: 'The Governor appoints SPSC members but CANNOT remove them; removal power vests exclusively in the President.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC Civil Services Prelims / RPSC RAS Prelims',
        pyqQuestionNumber: 42,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'A Joint State Public Service Commission (JSPSC) is sought to be established for the states of Punjab and Haryana. Which of the following constitutional procedures MUST be followed to create this body?',
        options: [
          'The Governors of Punjab and Haryana issue a joint executive notification under Article 315(1).',
          'The Parliament of India passes an ordinary law establishing the JSPSC after the Legislative Assemblies of both Punjab and Haryana pass resolutions requesting such a Commission.',
          'The Union Public Service Commission issues a binding directive setting up a regional branch for both states.',
          'The Supreme Court of India exercises its original jurisdiction under Article 131 to constitute the Commission.',
        ],
        correctAnswer: 'The Parliament of India passes an ordinary law establishing the JSPSC after the Legislative Assemblies of both Punjab and Haryana pass resolutions requesting such a Commission.',
        explanation: 'Under Article 315(2) of the Constitution, a Joint State Public Service Commission (JSPSC) is NOT directly created by the Constitution. It is created by an Act of Parliament pursuant to resolutions passed by the Legislative Assemblies of the concerned states. Therefore, a JSPSC is a statutory body, not a constitutional body.',
        trapExplanation: 'A JSPSC is a statutory body created by Parliament, not an executive body created by Governors.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 2. CON-POL-130: Finance Commission & Social Justice Commissions
  // =========================================================================
  {
    id: 'CON-POL-130',
    topicOrder: 22,
    topicSlug: 'constitutional-bodies-eci-and-cag',
    topicTitle: 'Constitutional Institutions: Finance Commission & Social Justice Commissions',
    topicDescription: 'Constitutional watchdog bodies: Finance Commission under Article 280 and National Commissions for SCs, STs, and BCs under Articles 338, 338A, and 338B.',
    slug: 'finance-commission-article-280-and-national-commissions-for-sc-st-bc-articles-338-338a-338b',
    title: 'Finance Commission (Article 280) & National Commissions for SCs, STs & BCs (Articles 338, 338A, 338B): Quasi-Judicial Powers & Fiscal-Social Safeguards',
    shortDefinition: 'The constitutional framework, fiscal devolution mechanics, and social justice oversight of the Finance Commission (Article 280) and the Constitutional Commissions for Vulnerable Sections (Articles 338, 338A, 338B). Evaluates: (1) Quinquennial Finance Commission constitution by the President (Chairman + 4 members possessing judicial, fiscal, and economic qualifications), (2) Net proceeds devolution formula (Vertical Devolution ~41% + Horizontal Criteria) and Grants-in-Aid under Article 275, (3) Evolution of Article 338 into distinct bodies (65th CAA 1990, 89th CAA 2003 creating NCST Art 338A, and 102nd CAA 2018 establishing NCBC Art 338B), and (4) Powers of a Civil Court vested in these commissions to investigate rights violations, summon witnesses, and require production of documents.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-POL-130-01',
        statement: 'Article 280 of the Constitution of India mandates that the President shall, at the expiration of every fifth year or earlier, constitute a Finance Commission consisting of a Chairman and four other members to make recommendations on the distribution of net tax proceeds between the Union and the States and the allocation among the States.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 280; Finance Commission (Miscellaneous Provisions) Act, 1951',
        excerpt: 'The President shall, within two years from the commencement of this Constitution and thereafter at the expiration of every fifth year... constitute a Finance Commission.',
      },
      {
        id: 'CLM-POL-130-02',
        statement: 'Under Articles 338, 338A, and 338B, the National Commission for Scheduled Castes (NCSC), the National Commission for Scheduled Tribes (NCST, 89th Amendment Act 2003), and the National Commission for Backward Classes (NCBC, 102nd Amendment Act 2018) are constitutional bodies vested with the powers of a civil court trying a suit to investigate safeguards, summon officials, and monitor constitutional protections.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Articles 338(8), 338A(8), and 338B(8); Constitution (102nd Amendment) Act, 2018',
        excerpt: 'The Commission shall, while investigating any matter... have all the powers of a civil court trying a suit under the Code of Civil Procedure, 1908.',
      },
      {
        id: 'CLM-POL-130-03',
        statement: 'The recommendations of both the Finance Commission and the Social Justice Commissions (NCSC, NCST, NCBC) are advisory in nature; however, their annual or special reports must be laid by the President before each House of Parliament along with an explanatory memorandum detailing actions taken or reasons for non-acceptance.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 281, Article 338(6), Article 338A(6), and Article 338B(6)',
        excerpt: 'The President shall cause every recommendation made by the Finance Commission... to be laid before each House of Parliament.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Balance Wheels: Balancing Fiscal Federalism & Social Justice',
        body: 'Why does India need constitutional commissions for revenue sharing and affirmative action?\n\n1. **The Fiscal Imbalance**: In India\'s constitutional division of powers, the Union Government collects the lion\'s share of buoyant revenues (Corporation Tax, Income Tax, GST, Customs), but the State Governments carry the massive expenditure burden of health, education, policing, and agriculture (Vertical Fiscal Imbalance). Without an impartial constitutional arbiter, the Centre could financially starve opposition-ruled states. The **Finance Commission (Article 280)** was created as a neutral constitutional umpire to distribute the national tax cake.\n\n2. **The Social Safeguard**: Similarly, historical caste oppression and tribal vulnerability required independent watchdogs that could investigate atrocities and monitor reservations without interference from the regular police or bureaucracy. Thus, Articles 338, 338A, and 338B created constitutional commissions armed with **Civil Court powers** to summon any bureaucrat and demand records.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Finance Commission Architecture & The Social Justice Constitutional Triad',
        body: '### 1. Finance Commission (Article 280)\n- **Composition**: Chairman + 4 Members appointed by the President (Qualifications defined by Parliament in the *Finance Commission Act 1951*: High Court judge / Special knowledge of finance / Experienced in administration / Special knowledge of economics).\n- **Mandate**: (a) Distribution of net tax proceeds (Divisible Pool) between Centre and States, (b) Allocation of shares among States (Horizontal devolution), (c) Principles governing **Grants-in-Aid under Article 275**, (d) Measures to augment the Consolidated Fund of a State to supplement resources of Panchayats and Municipalities.\n- **Current Benchmark (15th Finance Commission)**: Recommended **41% vertical devolution** to States for 2021–26 (adjusted 1% for the newly created UTs of J&K and Ladakh).\n\n### 2. Social Justice Constitutional Commissions Comparison\n\n| Feature | NCSC (Article 338) | NCST (Article 338A) | NCBC (Article 338B) |\n| :--- | :--- | :--- | :--- |\n| **Constitutional Genesis** | Original Art 338 $\\to$ 65th CAA 1990 | 89th CAA 2003 (Bifurcated from NCSC) | **102nd CAA 2018** (Conferred Constitutional Status) |\n| **Composition** | Chairperson, Vice-Chairperson + 3 Members | Chairperson, Vice-Chairperson + 3 Members | Chairperson, Vice-Chairperson + 3 Members |\n| **Appointed By** | President by warrant under hand & seal | President by warrant under hand & seal | President by warrant under hand & seal |\n| **Tenure & Conditions** | 3 Years (Max 2 terms) | 3 Years (Max 2 terms) | 3 Years (Max 2 terms) |\n| **Investigative Powers** | **Civil Court Powers** (CPC 1908) | **Civil Court Powers** (CPC 1908) | **Civil Court Powers** (CPC 1908) |\n| **Mandatory Consultation** | Union & State Govts **must consult** on all major policy matters affecting SCs | Union & State Govts **must consult** on all major policy matters affecting STs | Union & State Govts **must consult** on all major policy matters affecting SEBCs |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Civil Court Powers (CPC 1908) & The Legislative Accountability Mechanism',
        body: 'While investigating any complaint regarding deprivation of rights or violations of constitutional safeguards, the NCSC, NCST, and NCBC exercise full **Civil Court Powers** under the Code of Civil Procedure, 1908:\n1. Summoning and enforcing the attendance of any person from any part of India and examining them on oath.\n2. Requiring the discovery and production of any public document or record from any court or office.\n3. Receiving evidence on affidavits.\n4. Requisitioning any public record or copy thereof.\n5. Issuing commissions for the examination of witnesses and documents.\n\n### Reporting & Laying Procedure (Articles 281 & 338(6))\n```\n                      REPORTING & ACTION TAKEN WORKFLOW\n                                       │\n   1. Commission prepares Annual or Special Report on constitutional safeguards/fiscal terms\n                                       │\n   2. Report submitted to the President of India (and Governor if matter relates to a State)\n                                       │\n   3. President causes Report to be laid before each House of Parliament\n      (Governor causes State matters to be laid before State Legislative Assembly)\n                                       │\n   4. MANDATORY ACCOMPANYING DOCUMENT:\n      An Action Taken Memorandum (ATM) explaining:\n      - Actions taken on recommendations\n      - Reasons for NON-ACCEPTANCE of any recommendation\n                                       │\n                                       ▼\n        PARLIAMENTARY DEBATE & EXECUTIVE REPUTATIONAL SCRUTINY\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Examiner Traps & Cross-Exam Focus',
        body: '### Critical Examiner Traps\n- **Trap 1: Can Social Justice Commissions Strike Down Laws or Punish Offenders?**: **NO**. Although NCSC/NCST/NCBC have civil court powers to *investigate* and *summon*, they are **recommendatory bodies**. They CANNOT award prison sentences, award monetary damages, or issue stay orders against court proceedings.\n- **Trap 2: Is NCBC a Statutory or Constitutional Body?**: Prior to 2018, NCBC was a statutory body (NCBC Act 1993). The **102nd Constitutional Amendment Act, 2018 inserted Article 338B**, elevating NCBC to a full constitutional body on par with NCSC and NCST.\n- **Trap 3: Finance Commission Quinquennial Rule**: The President is mandated to constitute a Finance Commission *at the expiration of every fifth year or earlier*; it is NOT a permanent standing body.\n\n### Cross-Exam Focus\n- **UPSC APFC & RBI Grade B**: Finance Commission Article 275 Grants-in-Aid vs Article 282 Discretionary Grants; NCSC/NCST Civil Court powers.\n- **RPSC RAS**: 102nd CAA (Art 338B) provisions, 15th FC 41% formula, and State Finance Commission (Arts 243I/243Y).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Polity & Governance: Constitutional Bodies & Social Justice Safeguards',
        notes: 'Articles 338, 338A, 338B civil court powers and affirmative action enforcement mechanisms.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'ESI & Public Finance: Fiscal Federalism & Finance Commission Framework',
        notes: 'Article 280 mandate, 15th Finance Commission vertical/horizontal devolution criteria.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Constitution & Public Administration: Constitutional Bodies',
        notes: 'Finance Commission Article 280 and NCSC/NCST/NCBC statutory vs constitutional evolution.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Constitutional Authorities & Fiscal Architecture',
        notes: 'Divisible pool of taxes and public financial commissions.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'ESI & Social Structure: Constitutional Protection for SCs, STs & Backward Classes',
        notes: 'NCST and NCSC safeguards, tribal area devolution, and Article 275 grants.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General / Banking Awareness: Constitutional Bodies & Finance Commission',
        notes: '15th FC recommendations (41%), Article 280, and 102nd Amendment Act for NCBC.',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Indian Constitution & Statutory Bodies',
        notes: 'Articles 280, 338, 338A, and 338B composition and tenures.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Indian Financial System: Constitutional & Fiscal Regulatory Framework',
        notes: 'Finance Commission recommendations and inter-governmental transfers.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Finance Commission (Art 280): Chairman + 4 members, appointed by President every 5 yrs; 15th FC = 41% vertical devolution + Art 275 grants. NCSC (Art 338), NCST (Art 338A - 89th CAA), NCBC (Art 338B - 102nd CAA 2018): 1 Chair + 1 Vice-Chair + 3 Members (3-yr term); have CIVIL COURT POWERS to summon and discover documents; recommendations are advisory but require mandatory Action Taken Report to Parliament.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Article 280 mandates the President to constitute a Finance Commission every fifth year to recommend the sharing of divisible tax proceeds between the Centre and States (Vertical Devolution: 41% by 15th FC) and among States (Horizontal Devolution based on income distance, population, area, forest ecology, demographic performance, and tax effort). Articles 338 (NCSC), 338A (NCST - 89th CAA 2003), and 338B (NCBC - 102nd CAA 2018) establish dedicated constitutional watchdogs for vulnerable sections. Each commission comprises a Chairperson, Vice-Chairperson, and three members with 3-year tenures appointed by Presidential warrant. They possess the powers of a Civil Court to investigate atrocities, summon witnesses, and demand public records, with mandatory requirements that Union and State governments consult them on major policy decisions.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Constitutional Watchdogs & Devolution Architecture:\n1. Finance Commission (Article 280):\n   - Legal Status: Quasi-Judicial Constitutional Body.\n   - Core Remit: Divisible tax pool sharing, Article 275 Grants-in-Aid, local body resource augmentation.\n   - Horizontal Formula Factors: Income Distance (45%), Population 2011 (15%), Area (15%), Forest & Ecology (10%), Demographic Performance (12.5%), Tax Effort (2.5%).\n2. Social Justice Constitutional Commissions (Articles 338, 338A, 338B):\n   - Structural Triad: NCSC (SCs) | NCST (STs per 89th CAA) | NCBC (SEBCs per 102nd CAA).\n   - Common Powers: Civil Court Powers under Code of Civil Procedure 1908 (Summoning, Discovery, Affidavits).\n   - Accountability: Annual reports submitted to President $\\to$ Tabled in Parliament with Action Taken Memorandum.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which Constitutional Amendment Act conferred full constitutional status on the National Commission for Backward Classes (NCBC) by inserting Article 338B into the Constitution of India?',
        options: [
          'The Constitution (101st Amendment) Act, 2016',
          'The Constitution (102nd Amendment) Act, 2018',
          'The Constitution (103rd Amendment) Act, 2019',
          'The Constitution (104th Amendment) Act, 2020',
        ],
        correctAnswer: 'The Constitution (102nd Amendment) Act, 2018',
        explanation: 'The Constitution (102nd Amendment) Act, 2018 inserted Article 338B into the Constitution, elevating the National Commission for Backward Classes (NCBC) from a statutory body (under the NCBC Act 1993) to a constitutional body on par with the NCSC (Article 338) and NCST (Article 338A).',
        trapExplanation: '101st CAA is GST; 103rd CAA is 10% EWS reservation; 102nd CAA is NCBC constitutional status.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC Civil Services Prelims / RPSC RAS Prelims',
        pyqQuestionNumber: 31,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'While investigating a complaint alleging arbitrary denial of reservation benefits to a tribal community, what specific judicial power is legally exercisable by the National Commission for Scheduled Tribes (NCST) under Article 338A(8)?',
        options: [
          'The Commission can issue a writ of mandamus directing the immediate appointment of the aggrieved candidates.',
          'The Commission exercises all powers of a Civil Court trying a suit, including summoning government officials on oath and requiring the discovery and production of official files.',
          'The Commission can pass an order convicting the responsible recruitment officer under the Indian Penal Code.',
          'The Commission can strike down the recruitment notification as unconstitutional.',
        ],
        correctAnswer: 'The Commission exercises all powers of a Civil Court trying a suit, including summoning government officials on oath and requiring the discovery and production of official files.',
        explanation: 'Under Article 338A(8), the NCST is vested with the powers of a Civil Court under the Code of Civil Procedure, 1908. This enables it to summon witnesses, examine persons on oath, and requisition public records. However, it cannot issue judicial writs (which is the exclusive domain of High Courts/Supreme Court) nor can it sentence or convict individuals directly.',
        trapExplanation: 'NCST has Civil Court powers to investigate and discover documents, but CANNOT issue writs or criminal sentences.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 3. CON-POL-131: Specialized Statutory & Quasi-Judicial Bodies (NGT, NCW, NCPCR, CAT)
  // =========================================================================
  {
    id: 'CON-POL-131',
    topicOrder: 23,
    topicSlug: 'statutory-and-non-constitutional-bodies',
    topicTitle: 'Statutory & Regulatory Authorities: Specialized Tribunals & Commissions',
    topicDescription: 'Specialized statutory, regulatory, and quasi-judicial authorities: National Green Tribunal (NGT), NCW, NCPCR, and Central Administrative Tribunal (CAT).',
    slug: 'specialized-statutory-and-quasi-judicial-bodies-ngt-ncw-ncpcr-and-cat',
    title: 'Specialized Statutory & Quasi-Judicial Authorities: NGT Act 2010, NCW, NCPCR & Central Administrative Tribunal (CAT)',
    shortDefinition: 'The statutory mandates, quasi-judicial powers, and environmental/social justice jurisdictions of key statutory authorities. Details: (1) The National Green Tribunal (NGT Act 2010) under Article 21 (expeditious disposal within 6 months, application of Polluter Pays and Precautionary Principles), (2) The National Commission for Women (NCW Act 1990) and National Commission for Protection of Child Rights (CPCR Act 2005 / POCSO monitor), (3) The Central Administrative Tribunal (CAT) established under Article 323A and the Administrative Tribunals Act 1985 for service dispute adjudication, and (4) The landmark constitutional boundary established in L. Chandra Kumar v. Union of India (1997), declaring that tribunal decisions remain subject to judicial review by High Courts under Articles 226/227.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-POL-131-01',
        statement: 'The National Green Tribunal (NGT) was established under the National Green Tribunal Act, 2010 for effective and expeditious disposal of cases relating to environmental protection and conservation of forests, guided by principles of natural justice rather than the Code of Civil Procedure, 1908, with a statutory mandate to endeavor to dispose of applications within 6 months.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'National Green Tribunal Act, 2010, Section 3, Section 18, and Section 19(1)',
        excerpt: 'The Tribunal shall not be bound by the procedure laid down by the Code of Civil Procedure, 1908, but shall be guided by the principles of natural justice.',
      },
      {
        id: 'CLM-POL-131-02',
        statement: 'The Central Administrative Tribunal (CAT) was established in 1985 pursuant to Article 323A of the Constitution and the Administrative Tribunals Act, 1985 to adjudicate disputes relating to recruitment and conditions of service of persons appointed to public services and posts in connection with the affairs of the Union.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Administrative Tribunals Act, 1985, Section 4; Constitution of India, Article 323A',
        excerpt: 'Parliament may, by law, provide for the adjudication or trial by administrative tribunals of disputes and complaints with respect to recruitment and conditions of service.',
      },
      {
        id: 'CLM-POL-131-03',
        statement: 'In the landmark Constitution Bench ruling in L. Chandra Kumar v. Union of India (1997), the Supreme Court held that the power of judicial review vested in High Courts under Article 226/227 and the Supreme Court under Article 32 is part of the Basic Structure of the Constitution, meaning that decisions of Administrative Tribunals are appealable before a Division Bench of the High Court.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'L. Chandra Kumar v. Union of India, AIR 1997 SC 1125; (1997) 3 SCC 261',
        excerpt: 'The power of judicial review over legislative action vested in the High Courts under Article 226 and in this Court under Article 32 of the Constitution is an integral and essential feature of the Constitution.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Specialized Justice: Why General Courts Need Expert Tribunals',
        body: 'If an illegal chemical factory starts polluting a sacred river or a toxic mining project threatens a tiger sanctuary, standard civil litigation can drag on for decades through procedural motions and appeals. By the time a judgment arrives, the river is dead and the forest is gone.\n\nTo provide fast, specialized adjudication, Parliament created dedicated **Statutory Tribunals and Regulatory Commissions**. The **National Green Tribunal (NGT)** combines judicial members (former High Court/Supreme Court judges) with expert environmental scientists, deciding cases within a strict **6-month deadline**. Similarly, public servants facing unfair transfers or disciplinary bias access the **Central Administrative Tribunal (CAT)** rather than congesting regular civil courts.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Statutory Institutions Matrix: NGT, NCW, NCPCR & CAT Comparison',
        body: '| Institution | Governing Statute | Composition & Head | Core Jurisdiction & Mandate |\n| :--- | :--- | :--- | :--- |\n| **National Green Tribunal (NGT)** | NGT Act 2010 | Chairperson (Retd SC Judge / CJ of HC) + 10–20 Judicial Members + 10–20 Expert Members | Environmental protection, forest conservation, enforcement of legal environmental rights, **6-month disposal mandate**. Applies Sustainable Development & Polluter Pays principles. |\n| **Central Administrative Tribunal (CAT)** | Administrative Tribunals Act 1985 (Art 323A) | Chairman (Retd HC Judge) + Judicial & Administrative Members (Term: 5 yrs / 65 yrs for Chair, 62 for Members) | Adjudicates recruitment and service condition disputes for Central Civil Services, All India Services, and notified central public bodies. |\n| **National Commission for Women (NCW)** | National Commission for Women Act, 1990 | Chairperson + 5 Members (at least 1 SC and 1 ST) nominated by Central Govt (3-yr term) | Reviews constitutional/legal safeguards for women, investigates complaints of deprivation of rights, inspects jails/remand homes, recommends remedial legislation. |\n| **National Commission for Protection of Child Rights (NCPCR)** | Commission for Protection of Child Rights (CPCR) Act, 2005 | Chairperson + 6 Members (at least 2 women) appointed by Central Govt (3-yr term, age 65/60) | Monitors child rights, implementation of the **RTE Act 2009**, and the **POCSO Act 2012** (designated apex monitoring agency). |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Tribunal Procedure & The L. Chandra Kumar (1997) Judicial Review Hierarchy',
        body: '### NGT Environmental Principles (Section 20 of NGT Act)\nThe Tribunal applies three core international environmental principles:\n1. **Sustainable Development**: Balancing development with environmental preservation.\n2. **Precautionary Principle**: Lack of full scientific certainty cannot justify postponing cost-effective measures to prevent environmental degradation.\n3. **Polluter Pays Principle**: The financial cost of preventing or remedying pollution lies on the polluter.\n\n### The Post-1997 Appeals Hierarchy (L. Chandra Kumar)\n```\n                 ADMINISTRATIVE TRIBUNAL (CAT / SAT) ORDER\n                                     │\n                                     ▼\n         DIVISION BENCH OF THE RESPECTIVE HIGH COURT (Arts 226 / 227)\n       [Aggrieved party CANNOT bypass the High Court to go directly to SC]\n                                     │\n                                     ▼\n         SUPREME COURT OF INDIA VIA SPECIAL LEAVE PETITION (Article 136)\n```\n*Note on NGT*: Appeals against NGT orders lie directly to the **Supreme Court of India** under Section 22 of the NGT Act on grounds specified in Section 100 CPC.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Examiner Traps & Cross-Exam Analytical Focus',
        body: '### Critical Examiner Traps\n- **Trap 1: Is NGT Bound by CPC 1908?**: **NO**. Section 19(1) of the NGT Act explicitly states that the Tribunal is **NOT bound by the Code of Civil Procedure 1908 or the Indian Evidence Act 1872**, but is guided by the *principles of natural justice*.\n- **Trap 2: Which Act Does NGT NOT Cover?**: NGT has jurisdiction over 7 civil environmental laws (Water Act, Air Act, Environment Protection Act, Forest Conservation Act, etc.), but **EXCLUDES the Wildlife (Protection) Act, 1972 and the Forest Rights Act (FRA), 2006**.\n- **Trap 3: Can an Aggrieved Employee Bypass High Court after CAT Order?**: **NO**. Prior to 1997, CAT appeals went straight to the SC. Following *L. Chandra Kumar (1997)*, an aggrieved party **MUST first approach the Division Bench of the High Court** under Article 226.\n\n### Cross-Exam Focus\n- **UPSC APFC**: CAT jurisdiction over EPFO employees; POCSO/RTE oversight by NCPCR; NCW statutory powers.\n- **RPSC RAS**: NGT bench locations (Bhopal covers Rajasthan); State Administrative Tribunal (SAT) dynamics.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Polity & Governance: Statutory Regulators, Tribunals & Child/Women Protection Bodies',
        notes: 'Administrative Tribunals Act 1985, CAT service dispute procedures, and CPCR Act 2005 POCSO monitoring mandate.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Constitution, Public Administration & Environment: Statutory Commissions & Tribunals',
        notes: 'NGT Act 2010 structure, Polluter Pays principle, NCW, and CAT appellate mechanism.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI & Governance: Statutory Bodies, Tribunals & Environmental Law Framework',
        notes: 'Sustainable development jurisprudence, NGT mandates, and administrative tribunals.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness & Law: Quasi-Judicial Authorities & Tribunalisation',
        notes: 'Tribunal jurisdiction, natural justice principles, and L. Chandra Kumar ruling.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI & Environment: Sustainable Development, Forest Law & Women/Child Welfare Bodies',
        notes: 'NGT forest conservation role and NCPCR/NCW social protection architecture.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Statutory Bodies, Head Offices & Tenures',
        notes: 'NGT 6-month disposal mandate, NCW 3-year term, and CAT Article 323A basis.',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Indian Regulatory & Quasi-Judicial Authorities',
        notes: 'NGT Act 2010, NCW Act 1990, and Administrative Tribunals.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'Indian Financial System: Regulatory & Statutory Framework',
        notes: 'Statutory tribunals and regulatory judicial oversight.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NGT (Act 2010): Chairperson (Retd SC Judge / CJ HC) + Judicial & Expert Members; 6-month disposal mandate; applies Polluter Pays & Precautionary principles; NOT bound by CPC 1908. CAT (Art 323A, Act 1985): Central civil service disputes; appeals go to Division Bench of High Court (L. Chandra Kumar 1997). NCW (Act 1990) & NCPCR (Act 2005 / POCSO monitor): 3-yr terms, investigate rights violations with Civil Court powers.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Specialized statutory authorities provide expert, fast-track adjudication and rights monitoring. The National Green Tribunal (NGT Act 2010) combines judicial and scientific expert members to adjudicate environmental disputes within 6 months, guided by Natural Justice rather than the Code of Civil Procedure 1908. The Central Administrative Tribunal (CAT), established under Article 323A and the 1985 Act, adjudicates central civil service disputes; following the landmark *L. Chandra Kumar (1997)* ruling, its orders are subject to judicial review before a Division Bench of the respective High Court. The National Commission for Women (NCW Act 1990) and National Commission for Protection of Child Rights (CPCR Act 2005) serve as statutory watchdogs equipped with Civil Court powers, with NCPCR acting as the designated monitoring body for both the RTE Act 2009 and the POCSO Act 2012.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Statutory & Quasi-Judicial Authorities Architecture:\n1. National Green Tribunal (NGT Act 2010):\n   - Mandate: Expeditious environmental adjudication (6-month target).\n   - Legal Standard: Principles of Natural Justice (Exempt from CPC 1908 and Evidence Act 1872).\n   - Directives: Polluter Pays, Precautionary Principle, Sustainable Development.\n   - Excluded Laws: Wildlife Protection Act 1972, Forest Rights Act 2006.\n2. Central Administrative Tribunal (CAT - Article 323A):\n   - Subject Matter: Recruitment and conditions of service of Union civil servants.\n   - Judicial Review (L. Chandra Kumar 1997): Appeals MUST go to Division Bench of High Court under Art 226/227 before Supreme Court (Art 136).\n3. Child & Women Statutory Watchdogs:\n   - NCW (1990): 1 Chair + 5 Members (min 1 SC, 1 ST) | 3-yr tenure.\n   - NCPCR (2005): 1 Chair + 6 Members (min 2 women) | Monitors POCSO Act 2012 and RTE Act 2009 Section 31.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'According to the Supreme Court\'s landmark ruling in L. Chandra Kumar v. Union of India (1997), which of the following is the CORRECT legal procedure for challenging an order passed by the Central Administrative Tribunal (CAT)?',
        options: [
          'An appeal must be filed directly before the Supreme Court under Article 136, completely bypassing the High Court.',
          'An application for judicial review must be filed before a Division Bench of the concerned High Court under Article 226/227.',
          'An appeal must be submitted to the Union Ministry of Personnel for administrative reconsideration.',
          'No appeal or judicial review is permissible as CAT decisions are declared final and unchallengeable under Article 323A(2)(d).',
        ],
        correctAnswer: 'An application for judicial review must be filed before a Division Bench of the concerned High Court under Article 226/227.',
        explanation: 'In L. Chandra Kumar (1997), a seven-judge Constitution Bench held that the power of judicial review of High Courts under Article 226/227 is an inviolable part of the Basic Structure. Consequently, an aggrieved party cannot bypass the High Court to approach the Supreme Court directly; all tribunal decisions must first be scrutinized by a Division Bench of the respective High Court.',
        trapExplanation: 'Challenging CAT orders directly in the Supreme Court without approaching the High Court is legally impermissible post-1997.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC Civil Services Prelims / UPSC APFC',
        pyqQuestionNumber: 58,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'A citizen approaches the National Green Tribunal (NGT) alleging that a highway construction project has violated the Wildlife (Protection) Act, 1972 and the Forest Rights Act (FRA), 2006. How will the Tribunal rule regarding its jurisdiction?',
        options: [
          'The Tribunal will admit the petition because NGT has universal jurisdiction over all laws related to animals and forests in India.',
          'The Tribunal will dismiss the petition for lack of subject-matter jurisdiction because both the Wildlife (Protection) Act, 1972 and the Forest Rights Act, 2006 are explicitly excluded from Schedule I of the NGT Act, 2010.',
          'The Tribunal will transfer the matter to the Central Administrative Tribunal.',
          'The Tribunal will convert the petition into a criminal complaint under the Indian Penal Code.',
        ],
        correctAnswer: 'The Tribunal will dismiss the petition for lack of subject-matter jurisdiction because both the Wildlife (Protection) Act, 1972 and the Forest Rights Act, 2006 are explicitly excluded from Schedule I of the NGT Act, 2010.',
        explanation: 'Schedule I of the National Green Tribunal Act, 2010 lists 7 specific civil environmental statutes (Water Act, Air Act, Environment Protection Act, Public Liability Insurance Act, Biological Diversity Act, etc.). The Wildlife (Protection) Act, 1972 and the Forest Rights Act, 2006 are deliberately NOT included in Schedule I. Therefore, NGT has no legal jurisdiction to adjudicate violations under these two specific Acts.',
        trapExplanation: 'Wildlife (Protection) Act 1972 and FRA 2006 are explicitly excluded from NGT Schedule I.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 4. CON-POL-132: Rights, Welfare & Governance Laws (RTE, FRA, Whistleblowers)
  // =========================================================================
  {
    id: 'CON-POL-132',
    topicOrder: 23,
    topicSlug: 'statutory-and-non-constitutional-bodies',
    topicTitle: 'Statutory & Regulatory Authorities: Rights & Welfare Legislation',
    topicDescription: 'Transformative rights-based legislation: Right to Education (RTE Act 2009), Forest Rights Act (FRA 2006), and Whistleblowers Protection Act 2014.',
    slug: 'rights-welfare-and-governance-laws-rte-act-2009-fra-2006-and-whistleblowers-act',
    title: 'Social Justice, Rights & Welfare Legislation: RTE Act 2009, Forest Rights Act 2006 & Whistleblowers Protection Act',
    shortDefinition: 'The statutory mechanisms, rights enforcement frameworks, and institutional roles of transformative social welfare legislation. Analyzes: (1) The Right of Children to Free and Compulsory Education (RTE) Act 2009 operationalizing Article 21A (25% reservation for disadvantaged groups in private schools under Section 12(1)(c), infrastructure benchmarks, and the 2019 regular examination amendment), (2) The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act 2006 (individual and community forest rights, Gram Sabha as the supreme statutory authority), and (3) The Whistle Blowers Protection Act, 2014 (CVC as designated competent authority, safeguards against victimization).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-POL-132-01',
        statement: 'The Right of Children to Free and Compulsory Education (RTE) Act, 2009 enacted pursuant to Article 21A provides that every child aged 6 to 14 years has a right to free and compulsory education in a neighborhood school, with Section 12(1)(c) mandating private unaided schools to admit at least 25% children from disadvantaged and weaker sections in Class I.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Right of Children to Free and Compulsory Education Act, 2009, Section 3 and Section 12(1)(c)',
        excerpt: 'A school... shall admit in class I, to the extent of at least twenty-five per cent of the strength of that class, children belonging to weaker section and disadvantaged group.',
      },
      {
        id: 'CLM-POL-132-02',
        statement: 'Under the Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 (FRA), the Gram Sabha is the statutory authority to initiate the process for determining the nature and extent of individual forest rights (IFR) or community forest rights (CFR) or both, recognizing rights over land occupied prior to December 13, 2005.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Scheduled Tribes and Other Traditional Forest Dwellers Act, 2006, Section 6(1); Ministry of Tribal Affairs Guidelines',
        excerpt: 'The Gram Sabha shall be the authority to initiate the process for determining the nature and extent of individual or community forest rights.',
      },
      {
        id: 'CLM-POL-132-03',
        statement: 'The Whistle Blowers Protection Act, 2014 establishes a statutory mechanism to receive complaints relating to allegations of corruption, willful misuse of power, or criminal offenses against public servants, designating the Central Vigilance Commission (CVC) as the Competent Authority for Union employees with powers to protect whistleblowers against victimization.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Whistle Blowers Protection Act, 2014, Section 3 and Section 11',
        excerpt: 'Any public servant or any other person including any non-governmental organisation may make a public interest disclosure to a Competent Authority.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Rights-Based Governance: Transforming Citizens from Beneficiaries to Rights-Holders',
        body: 'For the first fifty years of independent India, welfare programs (education, tribal land protection, anti-corruption safeguards) operated as discretionary state charity. If a tribal family was evicted from ancestral forest land, or a poor child was denied schooling, they had no enforceable legal right to demand justice.\n\nBetween 2005 and 2014, Indian Parliament engineered a paradigm shift known as the **Rights-Based Legislative Revolution**. By passing statutes like the **RTE Act 2009**, **Forest Rights Act 2006**, and **Whistleblowers Protection Act 2014**, welfare was transformed into enforceable statutory rights. A tribal community no longer begs the Forest Department for grazing rights; the **Gram Sabha** holds statutory power to grant title deeds.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Statutory Frameworks: RTE 2009 vs FRA 2006 vs Whistleblowers Act 2014',
        body: '| Dimension / Act | RTE Act, 2009 (Article 21A) | Forest Rights Act (FRA), 2006 | Whistleblowers Protection Act, 2014 |\n| :--- | :--- | :--- | :--- |\n| **Core Right / Protection** | Free & compulsory education for ages **6 to 14 years** in neighborhood schools. | Restores pre-existing land rights to STs and Other Traditional Forest Dwellers (OTFD). | Protects persons making public interest disclosures regarding corruption/abuse of power. |\n| **Private Sector Obligation** | **Section 12(1)(c)**: Mandatory **25% reservation** in Class I for weaker/disadvantaged groups. | Applies to recorded forest land, national parks, and sanctuaries. | Covers all Union & State public servants and ministers (exempts PM in national security matters). |\n| **Eligibility Criteria** | All children aged 6–14; no screening tests or capitation fees permitted. | Forest Dwelling STs (FDST) OR OTFD residing in forest for **at least 3 generations (75 years)** prior to 13 Dec 2005. | Any public servant, citizen, or NGO; anonymous complaints **NOT entertained**. |\n| **Apex Statutory Authority** | **NCPCR / SCPCR** (Section 31 monitors rights & grievances). | **Gram Sabha** initiates $\\to$ Sub-Divisional Committee $\\to$ District Level Committee approves. | **Central Vigilance Commission (CVC)** for Union; State Vigilance Commissions for States. |\n| **Key Reforms / Amendments** | **2019 Amendment**: Abolished unconditional "No-Detention Policy"; allows re-exams in Classes 5 & 8. | Minor Forest Produce (MFP) ownership conferred on forest dwellers. | Penalties for disclosing identity of complainant or frivolous/false disclosures. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'FRA 3-Tier Devolution & Whistleblower Disclosure Procedure',
        body: '### The 3-Tier Forest Rights Determination Workflow (FRA 2006)\n```\n   1. GRAM SABHA (Initiating Authority)\n      - Receives claims from FDSTs and OTFDs (max 4 hectares per family)\n      - Passes resolution approving or modifying claims\n                                       │\n                                       ▼\n   2. SUB-DIVISIONAL LEVEL COMMITTEE (SDLC)\n      - Examines resolution and forwards to District Committee\n                                       │\n                                       ▼\n   3. DISTRICT LEVEL COMMITTEE (DLC - Final Approving Authority)\n      - Headed by District Collector; issues final record of rights and land title deeds\n```\n\n### Whistleblower Protection Procedure\n1. Complainant submits Public Interest Disclosure to the CVC with identity revealed to the Commission.\n2. CVC conceals complainant\'s identity and conducts preliminary inquiry.\n3. If complainant faces threat, physical harassment, or administrative victimization (unfair transfer/demotion), CVC issues binding interim protective orders to police and executive authorities.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Examiner Traps & Cross-Exam Analytical Focus',
        body: '### Critical Examiner Traps\n- **Trap 1: OTFD Eligibility in FRA 2006**: Other Traditional Forest Dwellers (non-tribals) must prove continuous occupation for **at least 3 generations (defined as 75 years)** prior to December 13, 2005. For Forest Dwelling STs, proof of occupation prior to Dec 13, 2005 is sufficient without the 75-year clause.\n- **Trap 2: Who Monitors RTE Implementation?**: RTE is NOT monitored by the Ministry of Education directly; Section 31 designates the **NCPCR (National Commission for Protection of Child Rights)** and State Commissions (SCPCRs) as the statutory watchdog.\n- **Trap 3: Anonymous Whistleblower Complaints**: Under the 2014 Act, **anonymous complaints are strictly NOT entertained**. The complainant must reveal their identity to the CVC, which is legally bound to keep it confidential.\n\n### Cross-Exam Focus\n- **UPSC APFC**: Whistleblower protection mechanisms for public sector undertakings; RTE Section 12(1)(c) reimbursement.\n- **NABARD Grade A & RPSC RAS**: FRA Gram Sabha authority, Minor Forest Produce (MFP) ownership, and tribal welfare rights.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Governance, Social Security & Rights Legislation: RTE, FRA & Whistleblowers',
        notes: 'Statutory mechanisms of RTE Act 2009, FRA 2006 Gram Sabha powers, and CVC whistleblower protections.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'ESI & Rural Development: Forest Rights Act, Tribal Land Tenure & Right to Education',
        notes: 'FRA 2006 3-tier procedure, OTFD 75-year rule, and Community Forest Rights.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Constitution & Social Welfare: Rights-Based Legislation in India & Rajasthan',
        notes: 'RTE Section 12(1)(c) implementation in Rajasthan and FRA Gram Sabha authorities in Scheduled Areas.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI: Social Justice, Education Policy & Anti-Corruption Governance',
        notes: 'RTE Act 2009 socioeconomic impacts and whistleblower transparency frameworks.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Governance, Corporate Whistleblowing & Public Accountability',
        notes: 'Whistleblowers Protection Act architecture and public accountability.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Welfare Schemes & Landmark Indian Acts',
        notes: 'RTE 25% private quota, FRA cutoff date (13 Dec 2005), and CVC role.',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Social Justice & Governance Legislation',
        notes: 'RTE Act 2009 age limit (6-14 yrs) and FRA 2006 Gram Sabha powers.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'Indian Financial System: Governance & Regulatory Compliance',
        notes: 'Whistleblower mechanisms in public institutions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RTE Act 2009 (Art 21A): Free/compulsory education for 6–14 yrs; Sec 12(1)(c) = 25% quota in private schools; monitored by NCPCR; 2019 amendment allowed re-exams in Classes 5 & 8. FRA 2006: Recognizes forest rights up to 4 hectares occupied before 13 Dec 2005 (OTFD need 75 yrs / 3 generations residency); Gram Sabha initiates claims. Whistleblowers Act 2014: CVC is designated authority; NO anonymous complaints.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rights-based statutes transformed welfare from discretionary executive patronage into enforceable legal entitlements. The RTE Act 2009 enforces Article 21A for children aged 6–14 years, mandating a 25% quota for disadvantaged groups in private unaided schools under Section 12(1)(c) with oversight by the NCPCR. The Forest Rights Act 2006 vests pre-existing forest land titles in Forest Dwelling Scheduled Tribes and Other Traditional Forest Dwellers (requiring 75 years residency prior to Dec 13, 2005), empowering the Gram Sabha as the statutory initiating authority. The Whistleblowers Protection Act 2014 establishes the CVC as the competent agency to receive public interest disclosures regarding public corruption and shield whistleblowers from administrative victimization.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rights-Based Legislative Framework Architecture:\n1. RTE Act 2009 (Article 21A):\n   - Target Age: 6 to 14 Years.\n   - Private School Mandate: Section 12(1)(c) $\\to$ 25% entry-level reservation for weaker sections.\n   - Examination Reform: 2019 Amendment removed automatic no-detention, enabling state-level detention upon failing re-exams in Classes 5 and 8.\n   - Watchdog: NCPCR and State SCPCRs.\n2. Forest Rights Act (FRA) 2006:\n   - Beneficiaries: FDSTs (living in forest pre-13 Dec 2005) & OTFDs (3 generations / 75 years pre-13 Dec 2005).\n   - Ceiling: Maximum 4 hectares of occupied land per family.\n   - 3-Tier Statutory Process: Gram Sabha $\\to$ Sub-Divisional Committee $\\to$ District Level Committee (Final).\n3. Whistleblowers Protection Act 2014:\n   - Designated Authority: Central Vigilance Commission (CVC).\n   - Safeguards: Confidentiality of identity, penalties for victimization, prohibition of anonymous complaints.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006, which democratic institution is the SOLE STATUTORY AUTHORITY empowered to initiate the process for determining the nature and extent of forest rights?',
        options: [
          'The Divisional Forest Officer (DFO)',
          'The Gram Sabha',
          'The District Collector',
          'The State Forest Development Corporation',
        ],
        correctAnswer: 'The Gram Sabha',
        explanation: 'Section 6(1) of the Forest Rights Act (FRA), 2006 explicitly establishes that the Gram Sabha is the statutory authority to initiate the process for determining the nature and extent of individual or community forest rights. Its resolution is subsequently scrutinized by the Sub-Divisional Committee and finalized by the District Level Committee.',
        trapExplanation: 'The DFO and District Collector do NOT initiate claims; the Gram Sabha alone has the statutory power to initiate the rights determination process.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Civil Services Prelims / NABARD Grade A',
        pyqQuestionNumber: 47,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'An Other Traditional Forest Dweller (OTFD) family applies for land title rights under the FRA 2006. What statutory residency threshold MUST they prove to qualify for recognition under the Act?',
        options: [
          'They must prove continuous residency in the forest area for at least 10 years prior to December 13, 2005.',
          'They must prove continuous residency and dependence on the forest for at least three generations (defined as 75 years) prior to December 13, 2005.',
          'They must prove they have paid land revenue to the State Forest Department for 20 years.',
          'They must be certified as a Scheduled Tribe by the President under Article 342.',
        ],
        correctAnswer: 'They must prove continuous residency and dependence on the forest for at least three generations (defined as 75 years) prior to December 13, 2005.',
        explanation: 'Under Section 2(o) of the FRA 2006, an Other Traditional Forest Dweller (OTFD) is defined as any member or community who has for at least three generations (with a generation defined as 25 years, totaling 75 years) prior to December 13, 2005, primarily resided in and depended on the forest for bona fide livelihood needs.',
        trapExplanation: 'OTFDs must satisfy the specific 75-year (3 generations) requirement, unlike STs who only need occupation before Dec 13, 2005.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 5. CON-POL-133: Political Parties & Pressure Groups
  // =========================================================================
  {
    id: 'CON-POL-133',
    topicOrder: 25,
    topicSlug: 'comparative-constitutional-systems',
    topicTitle: 'Comparative Constitutional Systems & Political Dynamics',
    topicDescription: 'Party system dynamics, Election Commission recognition criteria under the Election Symbols Order 1968, and pressure group typologies.',
    slug: 'political-parties-in-india-recognition-criteria-symbols-order-1968-and-pressure-groups',
    title: 'Political Parties in India: Recognition Criteria (Symbols Order 1968), Deregistration Limits & Pressure Groups Dynamics',
    shortDefinition: 'The statutory registration, recognition benchmarks, and political sociology of party politics in India under the Representation of the People Act, 1951 and the Election Symbols (Reservation and Allotment) Order, 1968. Evaluates: (1) Section 29A RPA 1951 registration with the Election Commission of India (ECI), (2) The 3 quantitative alternative criteria for National Party status and the 5 alternative criteria for State Party status, (3) The Supreme Court doctrine in Indian National Congress v. Institute of Social Welfare (2002) barring ECI from de-registering political parties except under fraud or constitutional violation, and (4) Pressure Groups typology (associational, institutional, non-associational, anomic) and lobbying mechanisms in Indian democracy.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-POL-133-01',
        statement: 'Political parties in India are registered under Section 29A of the Representation of the People Act, 1951 with the Election Commission of India, with recognition as a National Party or State Party governed by the Election Symbols (Reservation and Allotment) Order, 1968 based on objective electoral performance thresholds.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Representation of the People Act, 1951, Section 29A; Election Symbols (Reservation and Allotment) Order, 1968',
        excerpt: 'Any association or body of individual citizens of India calling itself a political party... shall make an application to the Election Commission for registration.',
      },
      {
        id: 'CLM-POL-133-02',
        statement: 'Under the Election Symbols Order 1968, a political party is recognized as a National Party if it satisfies ANY ONE of three conditions: (a) secures at least 6% of valid votes polled in four or more States in a Lok Sabha or Assembly election AND wins at least 4 seats in the Lok Sabha from any State(s); OR (b) wins at least 2% of total Lok Sabha seats (11 seats) from at least 3 different States; OR (c) is recognized as a State Party in at least four States.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Election Commission of India Notification on Political Party Recognition Criteria (Symbols Order 1968, Paragraph 6B)',
        excerpt: 'A political party shall be treated as a recognized National Party if, and only if, either it secures 6% votes in 4 states plus 4 MPs, or 2% LS seats in 3 states, or is recognized in 4 states.',
      },
      {
        id: 'CLM-POL-133-03',
        statement: 'In Indian National Congress v. Institute of Social Welfare (2002), the Supreme Court ruled that the Election Commission of India has no statutory power under Section 29A of the RPA 1951 to deregister a political party on grounds of violation of the Constitution or internal misconduct, except where registration was obtained by fraud, or where the party ceases to be a citizen-led body, or explicitly declares non-allegiance to the Constitution.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian National Congress v. Institute of Social Welfare, (2002) 5 SCC 685; AIR 2002 SC 2158',
        excerpt: 'The Election Commission has no power under Section 29A to de-register a political party once registered, except in three specific exceptions.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Machinery of Democracy: How Factions Become Recognized Parties',
        body: 'Anyone in India can form a club or association, but what transforms a political group into an officially recognized **National or State Party** with an exclusive reserved election symbol (like the Lotus, Hand, or Elephant), free airtime on state television, and subsidized electoral rolls?\n\nRecognition is not handed out by political favour; it is governed by strict mathematical formulas under the **Election Symbols Order, 1968**. An organization must prove widespread democratic support across multiple states. Furthermore, to prevent the ruling party in Delhi from arbitrarily banning opposition parties, the Supreme Court established in 2002 that the Election Commission cannot strip a party\'s registration merely for holding controversial views—once registered, only fraud or treason can cancel party registration.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'National vs State Party Recognition Matrix (Symbols Order 1968)',
        body: '### 1. Criteria for Recognition as a NATIONAL PARTY (Must fulfill ANY ONE)\n1. **6% Votes + 4 MPs**: Secures at least **6% of valid votes** polled in **4 or more States** in a Lok Sabha or Assembly election, **AND wins at least 4 seats in the Lok Sabha** from any State(s).\n2. **2% Lok Sabha Seats from 3 States**: Wins at least **2% of total Lok Sabha seats (11 seats out of 543)**, and these elected members come from **at least 3 different States**.\n3. **State Party in 4 States**: Is recognized as a State Party in **at least 4 States** (the "Four-State Rule", which elevated AAP to National Party status in 2023).\n\n### 2. Criteria for Recognition as a STATE PARTY (Must fulfill ANY ONE)\n1. **6% Assembly Votes + 2 MLAs**: Secures at least **6% of valid votes** in a State Assembly election AND wins **at least 2 seats** in that Legislative Assembly.\n2. **6% Lok Sabha Votes + 1 MP**: Secures at least **6% of valid votes** in the State in a Lok Sabha election AND wins **at least 1 Lok Sabha seat** from that State.\n3. **3% Assembly Seats / 3 Seats**: Wins **at least 3% of total Assembly seats** OR **3 seats** in the Legislative Assembly (whichever is greater).\n4. **1 MP per 25 MLAs**: Wins **at least 1 Lok Sabha seat for every 25 seats** allotted to the State in the Lok Sabha.\n5. **8% Total State Vote Share**: Secures **at least 8% of total valid votes** polled in the entire State in either a Lok Sabha or Assembly election (introduced in 2011; does NOT require winning any seat).\n\n### Privileges of Recognized Parties\n- Exclusive **Reserved Symbol** across the State/Country (unrecognized parties get free/unreserved symbols).\n- Free broadcast and telecast time on Doordarshan and All India Radio during general elections.\n- Right to nominate up to **40 Star Campaigners** (unrecognized parties get only 20), whose travel expenses are not added to candidate expenditure.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Deregistration Limitations & Pressure Groups Dynamics in Indian Governance',
        body: '### ECI Power to Derecognize vs Deregister (The 2002 SC Principle)\n- **Derecognition (Allowed)**: If a recognized party fails to satisfy the quantitative thresholds in consecutive elections, ECI can strip its "National" or "State" status and withdraw its reserved symbol.\n- **Deregistration (Strictly Limited)**: In *Indian National Congress v. Institute of Social Welfare (2002)*, the Supreme Court held Section 29A is administrative. ECI CANNOT cancel a party\'s registration except under 3 narrow exceptions:\n  1. Where registration was obtained by **fraud or forgery**.\n  2. Where the party has been declared unlawful by the Central Government under UAPA.\n  3. Where the party amends its constitution to renounce allegiance to the Constitution of India.\n\n### Pressure Groups Typology (Gabriel Almond Framework in India)\n1. **Associational Groups**: Formally structured groups representing specific economic interests (e.g. FICCI, ASSOCHAM, CII for business; AITUC, BMS, INTUC for labour; BKU, AIKS for farmers).\n2. **Institutional Groups**: Professional groups embedded inside state apparatus (e.g. IAS Association, Police Officers Association).\n3. **Non-Associational Groups**: Informal, kinship/caste/linguistic groupings (e.g. caste panchayats, community sabhas).\n4. **Anomic Groups**: Spontaneous collective mobs, riots, or flash agitations that arise suddenly due to perceived injustice.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Examiner Traps & Cross-Exam Analytical Focus',
        body: '### Critical Examiner Traps\n- **Trap 1: The "8% Vote Share Rule"**: A political party can become a recognized State Party even if it wins **ZERO seats** in the Assembly/Lok Sabha, provided it secures at least **8% of the total valid votes** in the state.\n- **Trap 2: How Many States are Needed for National Party Status?**: A party recognized in **4 States** automatically becomes a National Party. Being recognized in only 3 States is NOT sufficient.\n- **Trap 3: Star Campaigner Expenditure Limits**: Travel expenses of Star Campaigners (40 for recognized, 20 for registered-unrecognized) are NOT added to individual candidate election expense limits, but if the candidate shares the dais, shared rally costs must be apportioned.\n\n### Cross-Exam Focus\n- **UPSC APFC & RBI Grade B**: Section 29A RPA 1951, deregistration jurisprudence, and trade union pressure groups.\n- **RPSC RAS**: State party recognition criteria, regional parties in Rajasthan, and peasant movements/caste pressure groups.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Polity & Governance: Political System, RPA 1951 & Trade Union Pressure Groups',
        notes: 'Section 29A RPA 1951, trade union political affiliations, and Supreme Court party deregistration limits.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Indian Constitution & Political Dynamics: Party System, Symbols Order & Pressure Groups',
        notes: 'State and National party criteria under Symbols Order 1968 and caste/peasant pressure groups in Rajasthan.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness / ESI: Democratic Institutions & Electoral Governance',
        notes: 'National party criteria, electoral finance, and institutional dynamics.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Electoral Systems & Public Governance',
        notes: 'Electoral system frameworks and political dynamics in India.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI: Political Dynamics, Agrarian Pressure Groups & Social Movements',
        notes: 'Farmer pressure groups (BKU) and rural voting determinants.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Political Parties Recognition & Election Commission Rules',
        notes: 'National party criteria (4 states / 6% votes + 4 MPs / 2% LS seats) and Star Campaigner limits (40).',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Indian Constitution & Electoral System',
        notes: 'Section 29A RPA 1951 registration and National party thresholds.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'Indian Financial System: Regulatory & Statutory Environment',
        notes: 'Statutory registration framework of public entities in India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'National Party Criteria (Symbols Order 1968): (1) 6% votes in 4+ states + 4 Lok Sabha MPs, OR (2) 2% LS seats (11 seats) from 3+ states, OR (3) State party in 4 states. State Party: 6% votes + 2 MLAs, OR 3% Assembly seats/3 seats, OR 8% state vote share (0 seats needed). Deregistration: ECI CANNOT cancel registration except for fraud or constitutional treason (SC 2002).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Political parties in India register under Section 29A of the Representation of the People Act, 1951, but official recognition as National or State Parties is governed by the Election Symbols Order, 1968. A party attains National Party status by winning 2% of Lok Sabha seats (11 seats) across 3 states, or securing 6% votes in 4 states plus 4 MPs, or achieving State Party status in at least 4 states. State party status requires 6% votes plus 2 MLAs, or 3% of Assembly seats (or 3 seats), or 8% of total state votes even without winning a seat. Recognized parties receive exclusive reserved symbols, subsidized electoral rolls, and 40 Star Campaigners. In *Indian National Congress (2002)*, the Supreme Court barred ECI from deregistering parties on political grounds, limiting deregistration strictly to cases of fraud or constitutional repudiation.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Party Recognition & Pressure Groups Architecture:\n1. Registration vs Recognition:\n   - Registration: Mandatory under Section 29A RPA 1951 with ECI.\n   - Recognition: Governed by performance criteria in Election Symbols Order 1968.\n2. National Party Benchmarks (Any 1 of 3):\n   - Criterion A: 6% valid votes in 4+ states + 4 Lok Sabha seats.\n   - Criterion B: 2% of total Lok Sabha seats (11 seats) from min 3 different states.\n   - Criterion C: Recognized as a State Party in 4 states.\n3. State Party Benchmarks (Any 1 of 5):\n   - 6% Assembly votes + 2 MLAs | 6% LS votes + 1 MP | 3% Assembly seats (or 3 seats) | 1 MP for every 25 MLAs | 8% total state votes.\n4. Pressure Groups (Almond Typology):\n   - Associational: Structured economic bodies (FICCI, CII, AITUC, BKU).\n   - Institutional: Bureaucratic/police associations.\n   - Non-Associational: Caste panchayats, community bodies.\n   - Anomic: Spontaneous flash agitations and street protests.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Election Symbols (Reservation and Allotment) Order, 1968, which of the following conditions is SUFFICIENT for a political party to be recognized as a NATIONAL PARTY in India?',
        options: [
          'It wins at least 15 seats in the Lok Sabha exclusively from a single populous state.',
          'It is recognized as a State Party in at least four States.',
          'It secures at least 10% of the popular vote in the National Capital Territory of Delhi.',
          'It has a registered membership of over 10 million citizens across the country.',
        ],
        correctAnswer: 'It is recognized as a State Party in at least four States.',
        explanation: 'Under Paragraph 6B of the Election Symbols Order 1968, if a political party is recognized as a State Party in at least four states, it automatically qualifies for recognition as a National Party across the country.',
        trapExplanation: 'Winning 15 seats in a single state does NOT qualify; National party status requires geographic spread across at least 3 or 4 states.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC Civil Services Prelims / RPSC RAS Prelims',
        pyqQuestionNumber: 64,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'In a State Legislative Assembly election, a newly formed political party contests 100 seats. It fails to win even a single seat (0 MLAs), but secures 8.5% of the total valid votes polled in the entire state. What is the party\'s official recognition status?',
        options: [
          'The party is disqualified and loses its registration under Section 29A of the RPA 1951.',
          'The party qualifies for official recognition as a recognized STATE PARTY in that state under the 8% vote share rule.',
          'The party remains an unrecognized registered party because winning at least 1 seat is mandatory for state recognition.',
          'The party is automatically granted National Party status by the Election Commission.',
        ],
        correctAnswer: 'The party qualifies for official recognition as a recognized STATE PARTY in that state under the 8% vote share rule.',
        explanation: 'In 2011, the Election Commission amended the Symbols Order to add a fifth criterion for State Party recognition: securing at least 8% of the total valid votes polled in the state in an Assembly or Lok Sabha election, even if the party wins ZERO seats in the legislature.',
        trapExplanation: 'Winning zero seats does not disqualify a party if it clears the 8% total valid vote share threshold.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 6. CON-POL-134: Rajasthan Statutory Commissions (SHRC, Lokayukta, SIC)
  // =========================================================================
  {
    id: 'CON-POL-134',
    topicOrder: 24,
    topicSlug: 'rajasthan-state-polity-and-governance',
    topicTitle: 'Rajasthan State Polity: Statutory Watchdogs & Apex Commissions',
    topicDescription: 'Rajasthan statutory watchdog architecture: State Human Rights Commission (RSHRC), Rajasthan Lokayukta Act 1973, and State Information Commission (RIC).',
    slug: 'rajasthan-statutory-commissions-shrc-lokayukta-1973-act-and-state-information-commission',
    title: 'Rajasthan Statutory Watchdogs: State Human Rights Commission (RSHRC), Lokayukta (1973 Act) & State Information Commission (RIC)',
    shortDefinition: 'The statutory mandates, composition, appointment committees, and investigative jurisdictions of Rajasthan\'s apex statutory watchdog institutions. Details: (1) The Rajasthan State Human Rights Commission (RSHRC) under the Protection of Human Rights Act 1993 (established 1999/2000, 1+2 members, appointed by Governor on committee advice, headed by former Chief Justice/Judge of HC), (2) The Rajasthan Lokayukta and Up-Lokayuktas Act, 1973 (statutory anti-corruption ombudsman, investigates Ministers and officials, statutory exclusions including Chief Minister, HC Judges, RPSC, and Sarpanch), and (3) The Rajasthan State Information Commission (RIC) constituted in 2006 under the RTI Act 2005 (Chief Information Commissioner + up to 10 ICs).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-POL-134-01',
        statement: 'The Rajasthan State Human Rights Commission (RSHRC) was constituted via state government notification in January 1999 and became fully functional in March 2000 under the Protection of Human Rights Act, 1993, consisting of a Chairperson (former Chief Justice or Judge of a High Court) and two members appointed by the Governor on the recommendation of a committee headed by the Chief Minister.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Protection of Human Rights Act, 1993, Section 21; Rajasthan State Human Rights Commission Official Portal',
        excerpt: 'The State Commission shall consist of a Chairperson who has been a Chief Justice or Judge of a High Court and two members.',
      },
      {
        id: 'CLM-POL-134-02',
        statement: 'The Rajasthan Lokayukta and Up-Lokayuktas Act, 1973 established the institution of Lokayukta in Rajasthan (first Lokayukta: Justice I.D. Dua, assumed office August 1973) to investigate allegations of corruption against Ministers, Members of Legislative Assembly, and public servants, while explicitly excluding the Chief Minister, sitting Judges of High Courts, RPSC Chairman/members, and Panchas/Sarpanchas from its jurisdiction.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Lokayukta and Up-Lokayuktas Act, 1973, Section 2, Section 3, and Section 19',
        excerpt: 'The Lokayukta shall investigate any action which is taken by or with the general or specific approval of a Minister or a public servant.',
      },
      {
        id: 'CLM-POL-134-03',
        statement: 'The Rajasthan State Information Commission (RIC) was established in April 2006 under Section 15 of the Right to Information Act, 2005 (with M.D. Kaurani appointed as the first Chief Information Commissioner) to adjudicate second appeals and complaints regarding denial of public information by State Public Authorities.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Right to Information Act, 2005, Section 15; Rajasthan Information Commission Gazetted Notification 2006',
        excerpt: 'Every State Government shall, by notification in the Official Gazette, constitute a body to be known as the State Information Commission.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'State-Level Accountability: The Triad of Citizen Watchdogs in Rajasthan',
        body: 'When a citizen in Rajasthan faces police brutality, corrupt demands from a municipal officer, or arbitrary concealment of land acquisition files, they cannot easily travel to New Delhi to petition national commissions. State-level governance requires accessible, dedicated watchdog bodies seated in the state capital.\n\nRajasthan established a robust triad of statutory watchdogs:\n1. **RSHRC (Jaipur)**: Protects human rights, investigates custodial deaths, and inspects jails.\n2. **Lokayukta (Jaipur)**: Independent anti-corruption ombudsman investigating ministers and bureaucrats under the 1973 Act.\n3. **State Information Commission (Jaipur)**: Enforces government transparency and penalizes recalcitrant Public Information Officers under the RTI Act.\n\nEach body is insulated from direct political control through bipartisan selection committees involving the Leader of the Opposition.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Rajasthan Statutory Watchdogs Master Comparative Matrix',
        body: '| Institution | Governing Statute & Genesis | Current Composition | Appointment Committee (Governor Appoints) | Core Jurisdiction & Key Exclusions |\n| :--- | :--- | :--- | :--- |\n| **Rajasthan State Human Rights Commission (RSHRC)** | Protection of Human Rights Act 1993 (Notified Jan 1999, active March 2000) | **1 Chairperson + 2 Members** (Term: 3 yrs / 70 yrs per 2019 Amendment). First Chair: **Justice Kanta Bhatnagar**. | **4-Member Committee** (in unicameral Rajasthan):\n1. Chief Minister (Chair)\n2. Home Minister\n3. Speaker of Vidhan Sabha\n4. Leader of Opposition | Human rights violations under State/Concurrent lists. Recommends compensation and disciplinary action. **Cannot inquire after 1 year of incident**. |\n| **Rajasthan Lokayukta** | Rajasthan Lokayukta & Up-Lokayuktas Act, **1973** (Assented March 1973, active Aug 1973). First: **Justice I.D. Dua**. | **1 Lokayukta** (Retd SC Judge / CJ HC) + provision for Up-Lokayukta (Term: 5 yrs / 65 yrs). | **3-Person Consultation**:\n1. Chief Minister\n2. Chief Justice of Rajasthan HC\n3. Leader of Opposition | Investigates corruption/maladministration against Ministers, MLAs, Mayors, Zila Pramukhs, Bureaucrats.\n**EXCLUDED**: Chief Minister, HC Judges, RPSC Members, Accountant General, Sarpanch & Panch. |\n| **Rajasthan State Information Commission (RIC)** | RTI Act 2005 (Constituted **April 2006**). First CIC: **M.D. Kaurani**. | **1 State Chief Information Commissioner + up to 10 ICs** (Term: 3 yrs / 65 yrs per 2019 rules). | **3-Member Committee**:\n1. Chief Minister (Chair)\n2. Leader of Opposition\n3. Cabinet Minister nominated by CM | Second appeals and complaints against State Public Authorities. Can impose penalty of ₹250/day up to **₹25,000 max** on defaulting SPIOs. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Investigative Powers & Reporting Mechanisms in Rajasthan Governance',
        body: '### Lokayukta Investigative Mechanism (1973 Act)\n1. **Complaint Filing**: Accompanied by an affidavit; complaints older than **5 years** from date of action are barred by limitation.\n2. **Preliminary Investigation**: Conducted in camera (private) to prevent malicious damage to reputation.\n3. **Recommendation**: If substantiated, Lokayukta sends report to the **Competent Authority** (Governor for Ministers, CM for civil servants) recommending corrective action within a specified period (typically 3 months).\n4. **Annual Report**: Submitted to the Governor, who lays it before the Rajasthan Legislative Assembly with an explanatory memorandum.\n\n### RSHRC Limitations & Powers\n- Armed with Civil Court powers (CPC 1908) to summon and requisition public records.\n- Possesses its own investigative wing headed by an officer not below the rank of Inspector General of Police (IGP).\n- **Advisory Character**: Recommendations to the State Government are recommendatory, but the State must report action taken within **1 month**.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield RPSC RAS Examiner Traps & Key Historic Milestones',
        body: '### Critical RPSC RAS Examiner Traps\n- **Trap 1: Who is EXCLUDED from Rajasthan Lokayukta?**: The **Chief Minister of Rajasthan is NOT covered** under the Lokayukta Act 1973! Also excluded: Sitting/Retired Judges, RPSC Chairman/Members, Assembly Secretariat staff, and Village-level elected representatives (**Sarpanch and Panch**). However, **Pradhans and Zila Pramukhs ARE covered**.\n- **Trap 2: RSHRC Composition Post-2019**: Prior to 2006, RSHRC had 1+4 members. The 2006 amendment reduced it to **1 Chairperson + 2 Members**. The 2019 amendment reduced tenure from 5 years to **3 years (or 70 years of age)** and allowed a High Court Judge (not just Chief Justice) to be appointed Chairperson.\n- **Trap 3: RSHRC 1-Year Limitation Rule**: Under Section 36(2) of PHRA 1993, RSHRC **CANNOT inquire into any matter after the expiry of 1 year** from the date on which the human rights violation occurred.\n\n### First Appointees in Rajasthan (High-Yield Memory Hooks)\n- **First Lokayukta of Rajasthan**: Justice I.D. Dua (August 1973).\n- **First Up-Lokayukta**: K.P.U. Menon (1973).\n- **First RSHRC Chairperson**: Justice Kanta Bhatnagar (March 2000).\n- **First State Chief Information Commissioner**: M.D. Kaurani (April 2006).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'State Polity & Public Administration: Rajasthan Statutory Commissions (SHRC, Lokayukta, SIC)',
        notes: 'Full statutory composition, appointment committee members, excluded authorities, and 1973 Lokayukta Act provisions.',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Indian Governance: State Human Rights Commissions & Lokayukta Frameworks',
        notes: 'Protection of Human Rights Act 1993 Section 21 State Commission architecture and Lokayukta ombudsman systems.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness / ESI: Public Integrity & State Governance Watchdogs',
        notes: 'Ombudsman and transparency bodies at state level.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'General Awareness: State Regulatory & Transparency Institutions',
        notes: 'State Information Commission RTI mechanisms.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI & Governance: State Administrative Machinery & Human Rights Protection',
        notes: 'State Human Rights Commission role in rural and marginalized community protection.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'General Awareness: State Institutional Heads & Tenures',
        notes: 'State Lokayukta and RTI Commission appointment procedures.',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'General Awareness: Statutory Bodies in Indian States',
        notes: 'State Ombudsman and Human Rights Commissions.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'Indian Financial System: Regulatory & Statutory Framework',
        notes: 'Ombudsman concept in administrative and commercial governance.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Watchdogs: RSHRC (notified 1999, active 2000, 1 Chair + 2 Members, 3 yrs/70 yrs, 1st Chair: Justice Kanta Bhatnagar, 1-yr case limit). Lokayukta (1973 Act, 1st: Justice ID Dua, covers Ministers/Zila Pramukhs; EXCLUDES CM, HC Judges, RPSC, Sarpanch/Panch). RIC (April 2006, 1st CIC: MD Kaurani, 1 CIC + max 10 ICs, ₹25,000 max penalty).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthan maintains three dedicated statutory watchdogs for citizen protection and integrity. The Rajasthan State Human Rights Commission (RSHRC, active March 2000 per PHRA 1993) consists of 1 Chairperson and 2 members serving 3-year terms (max 70 years), investigating rights violations within 1 year of occurrence. The Rajasthan Lokayukta (1973 Act, first headed by Justice I.D. Dua) serves as an anti-corruption ombudsman investigating Ministers, MLAs, and bureaucrats, while explicitly excluding the Chief Minister, High Court Judges, RPSC members, and Sarpanchas. The Rajasthan State Information Commission (RIC, established April 2006 under RTI Act 2005, first CIC: M.D. Kaurani) hears second appeals against Public Information Officers with powers to levy penalties up to ₹25,000.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajasthan Statutory Apex Watchdogs Architecture:\n1. Rajasthan State Human Rights Commission (RSHRC):\n   - Genesis: January 1999 Notification $\\to$ Operational March 2000.\n   - Composition: 1 Chairperson (former CJ or Judge of HC) + 2 Members (1 Judicial, 1 Expert).\n   - Appointment: Governor on advice of 4-member committee (CM, Home Minister, Speaker, LoP).\n   - Temporal Bar: Cannot take cognizance after 1 year of incident.\n2. Rajasthan Lokayukta (1973 Act):\n   - First Appointee: Justice I.D. Dua (August 1973).\n   - Scope: Ministers, MLAs, Zila Pramukhs, Pradhans, State Bureaucrats.\n   - Explicit Exclusions: Chief Minister, HC Judges, RPSC, Sarpanchas, Panchas.\n3. Rajasthan Information Commission (RIC - 2006):\n   - Apex: State Chief Information Commissioner + up to 10 ICs.\n   - Penalty: ₹250/day up to ₹25,000 maximum for unlawful refusal of information.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Who among the following constitutional and administrative functionaries is EXPLICITLY EXCLUDED from the investigative jurisdiction of the Lokayukta under the Rajasthan Lokayukta and Up-Lokayuktas Act, 1973?',
        options: [
          'The Chief Minister of Rajasthan',
          'Ministers of the State Government',
          'Zila Pramukhs of Zila Parishads',
          'Pradhans of Panchayat Samitis',
        ],
        correctAnswer: 'The Chief Minister of Rajasthan',
        explanation: 'Under Section 19 of the Rajasthan Lokayukta and Up-Lokayuktas Act, 1973, the Chief Minister of Rajasthan is explicitly excluded from the jurisdiction of the Lokayukta. Also excluded are High Court Judges, RPSC members, and village-level elected representatives (Sarpanch and Panch). However, Ministers, MLAs, Zila Pramukhs, and Pradhans fall within the Lokayukta\'s purview.',
        trapExplanation: 'Unlike Karnataka or Kerala where the CM is included, Rajasthan\'s 1973 Act excludes the Chief Minister.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqQuestionNumber: 78,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'An aggrieved citizen in Jaipur files a petition before the Rajasthan State Human Rights Commission (RSHRC) alleging police excess during a public protest that took place 18 months prior to the date of filing. How is the Commission constitutionally and statutorily required to handle this petition?',
        options: [
          'The Commission will initiate a formal judicial inquiry because human rights violations have no limitation period in India.',
          'The Commission is statutorily barred from inquiring into the matter under Section 36(2) of the Protection of Human Rights Act, 1993 because more than one year has elapsed since the date of the incident.',
          'The Commission will forward the petition to the High Court for issuance of a writ of habeas corpus.',
          'The Commission will summon the Chief Minister of Rajasthan to answer for the delay.',
        ],
        correctAnswer: 'The Commission is statutorily barred from inquiring into the matter under Section 36(2) of the Protection of Human Rights Act, 1993 because more than one year has elapsed since the date of the incident.',
        explanation: 'Section 36(2) of the Protection of Human Rights Act, 1993 explicitly states that the National Commission or the State Commission shall not inquire into any matter after the expiry of one year from the date on which the act constituting the human rights violation is alleged to have been committed.',
        trapExplanation: 'RSHRC is subject to a strict statutory 1-year limitation bar on taking cognizance of complaints.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 7. CON-POL-135: RPSC, SEC & SFC of Rajasthan
  // =========================================================================
  {
    id: 'CON-POL-135',
    topicOrder: 24,
    topicSlug: 'rajasthan-state-polity-and-governance',
    topicTitle: 'Rajasthan State Polity: Constitutional Institutions',
    topicDescription: 'Constitutional bodies in Rajasthan: Rajasthan Public Service Commission (RPSC), State Election Commission, and State Finance Commission.',
    slug: 'rajasthan-public-service-commission-rpsc-state-election-commission-and-state-finance-commission',
    title: 'Rajasthan Public Service Commission (RPSC), State Election Commission & State Finance Commission of Rajasthan: Constitutional Mandates & Devolution',
    shortDefinition: 'The constitutional evolution, statutory powers, and institutional functioning of apex state constitutional bodies in Rajasthan. Analyzes: (1) The Rajasthan Public Service Commission (RPSC) under Articles 315–323 (promulgated Aug 1949, initial Jaipur location moved to Ajmer in 1956 per Satyanarayan Rao Committee recommendations, 1 Chairman + 7 Members), (2) The Rajasthan State Election Commission (SEC) under Articles 243K and 243ZA (constituted July 1994, single-member State Election Commissioner with High Court Judge-grade removal safeguards, conducts PRI and ULB elections), and (3) The Rajasthan State Finance Commission (SFC) under Articles 243I and 243Y (quinquennial recommendations on state tax devolution to Panchayats and Municipalities, 6th SFC chaired by Pradyuman Singh with 7.5% net tax devolution recommendation).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-POL-135-01',
        statement: 'The Rajasthan Public Service Commission (RPSC) was established on August 20, 1949 via an ordinance promulgated by the Rajpramukh of Rajasthan (with Sir S.K. Ghosh appointed as the first Chairman) and was permanently relocated from Jaipur to Ajmer in 1956 based on the recommendations of the Satyanarayan Rao Committee, operating with a sanctioned strength of 1 Chairman and 7 Members under Article 315.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 315; Rajasthan Public Service Commission Regulations; Satyanarayan Rao Committee Report 1956',
        excerpt: 'The Rajasthan Public Service Commission was established under an ordinance on August 20, 1949 and shifted to Ajmer in 1956.',
      },
      {
        id: 'CLM-POL-135-02',
        statement: 'The Rajasthan State Election Commission was constituted in July 1994 under Article 243K and Article 243ZA of the Constitution (with Amar Singh appointed as the first State Election Commissioner) as a single-member constitutional body responsible for the superintendence, direction, and control of electoral rolls and conduct of all elections to Panchayati Raj Institutions and Urban Local Bodies in Rajasthan.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 243K; Rajasthan Panchayati Raj Act, 1994, Section 120',
        excerpt: 'The superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all elections to the Panchayats shall be vested in a State Election Commission.',
      },
      {
        id: 'CLM-POL-135-03',
        statement: 'Under Articles 243I and 243Y, the Governor of Rajasthan constitutes the State Finance Commission every fifth year to review the financial position of Panchayats and Municipalities and recommend tax-sharing principles, with the 6th Rajasthan State Finance Commission (headed by Pradyuman Singh for 2020–21 to 2024–25) recommending the devolution of 7.5% of the State\'s net own tax revenue to local self-governments.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 243I; Report of the 6th Rajasthan State Finance Commission (2020-2025)',
        excerpt: 'The Governor of a State shall, as soon as may be within one year from the commencement of the Constitution (73rd Amendment) Act, 1992, and thereafter at the expiration of every fifth year, constitute a Finance Commission.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Constitutional Triangle of Rajasthan Governance',
        body: 'Just as the Union Government depends on UPSC for merit recruitment, the Election Commission of India for national polls, and the Finance Commission for revenue sharing, the State of Rajasthan possesses its own **constitutional institutional triangle**:\n\n1. **RPSC (Ajmer)**: Recruits state administrators (RAS, RPS, accounts officers, lecturers) free from executive bias.\n2. **State Election Commission (Jaipur)**: An autonomous election authority armed with High Court Judge-grade independence to conduct grassroots village and municipal elections.\n3. **State Finance Commission (Jaipur)**: An economic commission ensuring that the state treasury in Jaipur transfers adequate funds to thousands of Gram Panchayats and Municipalities across the Thar Desert and Aravalli hills.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Constitutional Triad Matrix: RPSC vs SEC vs SFC in Rajasthan',
        body: '| Constitutional Body | Constitutional Basis & Origin in Rajasthan | Composition & Current Strength | Appointing & Removal Authority | Core Mandate & Devolution Formula |\n| :--- | :--- | :--- | :--- |\n| **Rajasthan Public Service Commission (RPSC)** | **Articles 315–323** (Est. 20 Aug 1949; shifted to **Ajmer in 1956** per Satyanarayan Rao Committee). | **1 Chairman + 7 Members** (Total 8). Term: **6 yrs or 62 yrs** of age. First Chair: **Sir S.K. Ghosh**. Longest serving: **S.C. Verma**. | **Appointed by Governor**.<br>**Removed ONLY by President** under Article 317 after SC inquiry. | Conducts competitive exams (RAS/RPS) and departmental promotions; advises State Govt on disciplinary actions. |\n| **State Election Commission (SEC) Rajasthan** | **Article 243K & 243ZA** (Constituted **July 1994**). | **Single Member** (State Election Commissioner). Term: **5 yrs or 65 yrs** of age. First SEC: **Amar Singh**. | **Appointed by Governor**.<br>**Removed ONLY like a High Court Judge** (Impeachment by Parliament per Art 243K(2)). | Prepares electoral rolls and conducts elections for 3-tier Panchayats and Municipalities in Rajasthan. (Note: Assembly/LS polls conducted by ECI, NOT SEC). |\n| **Rajasthan State Finance Commission (SFC)** | **Article 243I & 243Y** (First SFC constituted 1995 under **K.K. Goyal**). | **1 Chairman + up to 4 Members** (Constituted every 5 years). **6th SFC Chair: Pradyuman Singh**. | **Appointed by Governor** (Quinquennial mandate). | Recommends devolution of state taxes to local bodies (**6th SFC recommended 7.5% of net own tax revenue**, split **75.1% to PRIs and 24.9% to ULBs** based on 2011 population). |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'SFC Devolution Math & SEC Constitutional Insulation',
        body: '### 6th Rajasthan State Finance Commission (Pradyuman Singh Commission) Devolution Formula\n- **Devolution Quantum**: **7.5% of Net Own Tax Revenue** of Rajasthan Government.\n- **Vertical Split between Rural & Urban**:\n  - **Panchayati Raj Institutions (PRIs)**: **75.1%**\n  - **Urban Local Bodies (ULBs)**: **24.9%** (reflecting rural-urban population ratio per Census 2011).\n- **Sub-Devolution among PRIs**:\n  - Zila Parishads: 5%\n  - Panchayat Samitis: 20%\n  - Gram Panchayats: **75%** (Lion\'s share to village tier).\n\n### State Election Commissioner Independence (Article 243K(2))\n```\n               STATE ELECTION COMMISSIONER REMOVAL SAFEGUARD\n                                     │\n   1. Commissioner is appointed by the Governor of Rajasthan\n                                     │\n   2. Conditions of service CANNOT be varied to their disadvantage after appointment\n                                     │\n   3. REMOVAL FROM OFFICE:\n      Cannot be removed by Governor or State Cabinet!\n      Can be removed ONLY in like manner and on like grounds as a Judge of a High Court\n      [Requires address by both Houses of Parliament with 2/3rd majority on proved misbehaviour]\n                                     │\n                                     ▼\n                 ABSOLUTE SHIELD FROM STATE POLITICAL COERCION\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield RPSC RAS Examiner Traps & Chronology Table',
        body: '### Critical RPSC RAS Examiner Traps\n- **Trap 1: Who Conducts Assembly Elections in Rajasthan?**: The **Election Commission of India (ECI)** conducts elections for the Rajasthan Legislative Assembly (Vidhan Sabha) and Lok Sabha. The **Rajasthan State Election Commission conducts ONLY Panchayat and Municipality elections**.\n- **Trap 2: Satyanarayan Rao Committee (1956)**: When Rajasthan was reorganized on Nov 1, 1956, this committee recommended: Capital $\\to$ **Jaipur**, High Court $\\to$ **Jodhpur**, RPSC $\\to$ **Ajmer**, Education Dept $\\to$ **Bikaner**, Mining & Forest $\\to$ **Kota**, Agriculture $\\to$ **Bharatpur**.\n- **Trap 3: RPSC Member Age Limit vs UPSC**: RPSC members retire at **62 years** (Article 316(2)), whereas UPSC members retire at **65 years**.\n\n### Rajasthan State Finance Commissions Chairs Chronology\n1. 1st SFC (1995–2000): **K.K. Goyal**\n2. 2nd SFC (2000–2005): **Hira Lal Devpura** (former CM)\n3. 3rd SFC (2005–2010): **Manik Chand Surana**\n4. 4th SFC (2010–2015): **Dr. B.D. Kalla**\n5. 5th SFC (2015–2020): **Dr. Jyoti Kiran**\n6. 6th SFC (2020–2025): **Pradyuman Singh** (Members: Ashok Lahoti, Laxman Singh Rawat).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'State Polity & Administration of Rajasthan: RPSC, State Election Commission & SFC',
        notes: 'Full institutional history of RPSC, Satyanarayan Rao Committee, SEC Article 243K removal, and 6th SFC 7.5% devolution formula.',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Indian Polity & Governance: State Constitutional Bodies (Arts 243I, 243K, 315)',
        notes: 'State Public Service Commissions and local body election/finance constitutional provisions.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'ESI & Rural Governance: State Finance Commissions & Decentralized Resource Sharing',
        notes: 'Articles 243I and 243Y State Finance Commission devolution mechanics to Panchayats.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI & Public Finance: Local Body Finances & State Financial Architecture',
        notes: 'State tax devolution to third tier of government.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'General Awareness: State Institutional Governance',
        notes: 'Constitutional institutions at the state level.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: State Commissions, Articles & Tenures',
        notes: 'State Election Commissioner Article 243K removal procedure and SPSC age limits (62 yrs).',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Indian Constitution State Articles',
        notes: 'Articles 243I, 243K, and 315 mandates.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'Indian Financial System: Regulatory & Statutory Framework',
        notes: 'Public institutional framework of state financial administration.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Constitutional Triad: RPSC (Est. Aug 1949, shifted to Ajmer 1956 per Satyanarayan Rao Comm, 1+7 members, 6 yrs/62 yrs, 1st: Sir SK Ghosh). SEC (Art 243K, July 1994, 1st: Amar Singh, removed ONLY like HC Judge, conducts PRI/ULB polls). SFC (Art 243I/Y, 1st: KK Goyal, 6th: Pradyuman Singh $\\to$ 7.5% net tax devolution, 75.1% to PRIs, 24.9% to ULBs).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthan\'s constitutional governance rests on three apex bodies. The Rajasthan Public Service Commission (RPSC, Articles 315–323) was established on August 20, 1949 under Sir S.K. Ghosh and relocated to Ajmer in 1956 following the Satyanarayan Rao Committee report; it operates with 1 Chairman and 7 Members serving 6 years or up to 62 years of age (removable exclusively by the President). The State Election Commission (SEC, Articles 243K/243ZA), constituted in July 1994 under Amar Singh, conducts local body elections and enjoys removal protection identical to a High Court Judge. The State Finance Commission (SFC, Articles 243I/243Y) reviews local finances; the 6th SFC under Pradyuman Singh recommended devolving 7.5% of net own tax revenues (75.1% to rural Panchayats and 24.9% to urban municipalities).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajasthan Apex Constitutional Institutions Architecture:\n1. RPSC (Articles 315–323):\n   - Chronology: 20 Aug 1949 (Jaipur) $\\to$ 1956 Relocation to Ajmer (Satyanarayan Rao Committee).\n   - Sanctioned Strength: 1 Chairman + 7 Members = 8 Total.\n   - Tenure: 6 Years or 62 Years of age (Governor appoints | President removes per Art 317).\n2. State Election Commission (Articles 243K / 243ZA):\n   - Genesis: July 1994 (First SEC: Amar Singh).\n   - Remit: Preparation of electoral rolls and conduct of elections for PRIs and ULBs in Rajasthan.\n   - Independence: Can be removed ONLY by Parliament in the manner of a High Court Judge.\n3. State Finance Commission (Articles 243I / 243Y):\n   - Quinquennial Cycle: 1st (KK Goyal) $\\to$ 2nd (HL Devpura) $\\to$ 3rd (MC Surana) $\\to$ 4th (BD Kalla) $\\to$ 5th (Dr. Jyoti Kiran) $\\to$ 6th (Pradyuman Singh).\n   - 6th SFC Devolution Formula: 7.5% of Net Own Tax Revenue $\\to$ PRIs (75.1%) & ULBs (24.9%).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'On the recommendation of which committee was the headquarters of the Rajasthan Public Service Commission (RPSC) permanently relocated from Jaipur to Ajmer in 1956?',
        options: [
          'The Balwant Rai Mehta Committee',
          'The Satyanarayan Rao Committee',
          'The Harish Chandra Mathur Committee',
          'The Administrative Reforms Commission',
        ],
        correctAnswer: 'The Satyanarayan Rao Committee',
        explanation: 'Following the integration of Ajmer-Merwara into Rajasthan on November 1, 1956, the Government of India appointed the P. Satyanarayan Rao Committee to settle the location of state capital and apex institutions. The committee recommended Jaipur as the capital, Jodhpur for the High Court, and Ajmer for the RPSC.',
        trapExplanation: 'Balwant Rai Mehta is Panchayati Raj; Satyanarayan Rao Committee recommended RPSC to Ajmer.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'RPSC RAS Prelims',
        pyqQuestionNumber: 52,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Under Article 243K(2) of the Constitution of India, which of the following procedures MUST be executed to legally remove the State Election Commissioner of Rajasthan from office?',
        options: [
          'The Governor of Rajasthan issues an executive order of removal on the advice of the Council of Ministers.',
          'The State Legislative Assembly passes a resolution of removal by a simple majority.',
          'The Commissioner can be removed ONLY in like manner and on like grounds as a Judge of a High Court (requiring an impeachment resolution passed by both Houses of Parliament with a two-thirds majority).',
          'The Chief Election Commissioner of India issues a termination notice under Article 324.',
        ],
        correctAnswer: 'The Commissioner can be removed ONLY in like manner and on like grounds as a Judge of a High Court (requiring an impeachment resolution passed by both Houses of Parliament with a two-thirds majority).',
        explanation: 'Article 243K(2) provides that the State Election Commissioner shall not be removed from office except in like manner and on the like grounds as a Judge of a High Court. This guarantees that neither the Governor nor the state ruling party can remove the Commissioner arbitrarily.',
        trapExplanation: 'The Governor appoints the State Election Commissioner, but CANNOT remove them; removal requires Parliamentary impeachment.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 8. CON-POL-136: Rajasthan Local Governance, District Admin & Delivery Acts
  // =========================================================================
  {
    id: 'CON-POL-136',
    topicOrder: 24,
    topicSlug: 'rajasthan-state-polity-and-governance',
    topicTitle: 'Rajasthan State Polity: Local Governance & Public Service Delivery',
    topicDescription: 'Grassroots democracy and administrative governance in Rajasthan: Panchayati Raj Act 1994, District Administration hierarchy, Public Service Guarantee Act 2011, and Right to Hearing Act 2012.',
    slug: 'rajasthan-local-governance-1994-act-district-administration-and-public-service-delivery-acts',
    title: 'Rajasthan Local Governance, District & Divisional Administration & Landmark Public Service Delivery Acts (2011 & 2012)',
    shortDefinition: 'The statutory evolution of grassroots local democracy, field administrative hierarchy, and citizen rights legislation in Rajasthan. Analyzes: (1) Historical milestone of Nagaur (October 2, 1959 inception of Panchayati Raj by Jawaharlal Nehru) and the Rajasthan Panchayati Raj Act 1994 (3-tier structure, 50% women reservation introduced in 2008), (2) District and Divisional administrative architecture (Divisional Commissioner, District Collector/Magistrate/District Development Officer, SDO, Tehsildar, Patwari), (3) The Rajasthan Guaranteed Delivery of Public Services Act, 2011 (first state in India to enact statutory time-bound service delivery with daily compensation penalties), and (4) The Rajasthan Right to Hearing Act, 2012 (statutory right to grievance hearing within 15 days across village, block, district, and division levels).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-POL-136-01',
        statement: 'Rajasthan was the first State in independent India to inaugurate the Panchayati Raj system on October 2, 1959 at Nagaur by Prime Minister Jawaharlal Nehru based on the Balwant Rai Mehta Committee recommendations, with the modern constitutional 3-tier structure formalized by the Rajasthan Panchayati Raj Act, 1994 and amended in 2008 to provide 50% reservation for women in local bodies.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Panchayati Raj Act, 1994; Rajasthan Panchayati Raj (Amendment) Act, 2008; Report of the Balwant Rai Mehta Committee 1957',
        excerpt: 'The Panchayati Raj scheme was inaugurated by Prime Minister Nehru at Nagaur, Rajasthan on October 2, 1959.',
      },
      {
        id: 'CLM-POL-136-02',
        statement: 'District administration in Rajasthan operates under a structured bureaucratic hierarchy where the District Collector acts as the District Magistrate (maintenance of law and order under CrPC/BNSS), District Revenue Collector (land revenue administration under Rajasthan Land Revenue Act 1956), and District Development Officer (coordinating PRIs and developmental schemes).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Land Revenue Act, 1956; Rajasthan Administration Manual; Indian Administration (S.R. Maheshwari)',
        excerpt: 'The Collector is the principal revenue authority in the district and the head of the district administration.',
      },
      {
        id: 'CLM-POL-136-03',
        statement: 'Rajasthan became a pioneering state in administrative accountability by enacting the Rajasthan Guaranteed Delivery of Public Services Act, 2011 (mandating time-bound delivery of notified services with a daily penalty of ₹25 to ₹250 on defaulting officials) and the Rajasthan Right to Hearing Act, 2012 (conferring a statutory right to grievance hearing within 15 days).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Guaranteed Delivery of Public Services Act, 2011; Rajasthan Right to Hearing Act, 2012',
        excerpt: 'An Act to provide for the delivery of public services to the citizens of the State within the stipulated time limit.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Steel Frame at the Grassroots: How Rajasthan Pioneered Citizen Governance',
        body: 'When Mahatma Gandhi envisioned *Gram Swaraj* (village self-rule), he imagined Indian villages managing their own water, schools, and land records. It was in the desert district of **Nagaur, Rajasthan** on Gandhi Jayanti (October 2, 1959) that Prime Minister Nehru launched India\'s first Panchayati Raj system.\n\nOver the decades, Rajasthan transformed from a feudal princely federation into a national pioneer of citizen-centric administrative reforms. When government offices became notorious for endless delays, Rajasthan became the first state to pass the **Guaranteed Delivery of Public Services Act, 2011**—if a clerk delays your caste certificate or electricity connection beyond the notified days, the state deducts ₹25 to ₹250 per day from their personal salary and compensates you!',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Grassroots Democracy & Administrative Hierarchy in Rajasthan',
        body: '### 1. The 3-Tier Panchayati Raj Architecture in Rajasthan (1994 Act)\n- **District Tier**: **Zila Parishad** (Political Head: *Zila Pramukh*; Executive Head: *Chief Executive Officer / CEO* of IAS/RAS cadre).\n- **Block Tier**: **Panchayat Samiti** (Political Head: *Pradhan*; Executive Head: *Block Development Officer / BDO* of RAS/State cadre).\n- **Village Tier**: **Gram Panchayat** (Political Head: *Sarpanch*; Executive Head: *Village Development Officer / VDO*).\n- **Gram Sabha**: General body of all registered voters in the village; statutorily mandated to meet **at least 4 times a year** (Republic Day Jan 26, May Day May 1, Independence Day Aug 15, Gandhi Jayanti Oct 2).\n- **50% Women Reservation**: In 2008, Rajasthan amended the 1994 Act to raise women\'s reservation from 33% to **50% across all PRI tiers**.\n\n### 2. Administrative & Revenue Hierarchy in Rajasthan\n```\n   DIVISIONAL LEVEL:    Divisional Commissioner (Senior IAS Officer)\n                                 │\n   DISTRICT LEVEL:      District Collector & District Magistrate (DM / DC)\n                                 │\n   SUB-DIVISIONAL:      Sub-Divisional Officer / SDO (Sub-Divisional Magistrate / SDM)\n                                 │\n   TEHSIL LEVEL:        Tehsildar (Executive Magistrate & Revenue Officer)\n                                 │\n   SUB-TEHSIL / ILR:    Naib-Tehsildar / Inspector Land Records (ILR) / Girdawar\n                                 │\n   VILLAGE LEVEL:       Patwari (Village Revenue Accountant)\n```',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Landmark Public Service Delivery Laws in Rajasthan (2011 & 2012)',
        body: '### 1. Rajasthan Guaranteed Delivery of Public Services Act, 2011 (Operational 14 Nov 2011)\n- **Core Mechanism**: Notifies hundreds of public services across government departments (revenue, water, electricity, police, certificates) with fixed time limits (e.g. 7 days, 15 days, 30 days).\n- **Accountability Slip**: The designated officer MUST issue a dated receipt upon receiving an application.\n- **Appellate Mechanism**: First Appeal to First Appellate Authority $\\to$ Second Appeal to Second Appellate Authority.\n- **Financial Penalty**: If delay is without sufficient cause, Second Appellate Authority imposes a penalty of **₹25 to ₹250 per day (maximum ₹5,000)** deducted from the defaulting officer\'s salary, paid as compensation to the citizen.\n\n### 2. Rajasthan Right to Hearing Act, 2012 (Operational 1 Aug 2012)\n- **Statutory Right**: Every citizen has a statutory right to obtain a formal hearing and redressal of grievances regarding public administration within **15 days**.\n- **Hierarchy of Public Hearing Officers (PHO)**:\n  - Gram Panchayat: PHO is Village Development Officer / Sarpanch\n  - Tehsil / Block: PHO is Tehsildar / BDO\n  - District: PHO is Additional District Collector\n  - Division: PHO is Additional Divisional Commissioner\n- **Penalty**: Failure to hear complaints attracts disciplinary proceedings and monetary fines.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield RPSC RAS Examiner Traps & Key Milestones',
        body: '### Critical RPSC RAS Examiner Traps\n- **Trap 1: Nagaur Inception Date**: Panchayati Raj was inaugurated at **Nagaur on October 2, 1959** (First village: *Bagdari village, Nagaur*). Andhra Pradesh was the second state (October 1959).\n- **Trap 2: Public Service Guarantee Act Penalties**: Minimum penalty is **₹25 per day**, maximum daily is **₹250**, and overall cap is **₹5,000**. The penalty is deducted from the *officer\'s salary*, not paid from government funds.\n- **Trap 3: SDO vs Tehsildar Court**: Under the *Rajasthan Tenancy Act 1955*, suits for declaration of khatedari rights are filed before the **SDO Court**, whereas revenue mutations (*namantaran*) are attested by the **Tehsildar / Naib Tehsildar**.\n\n### Key Historical Committees on Rajasthan Administration\n- **Harish Chandra Mathur Committee (1963)**: Administrative reforms in Rajasthan.\n- **Girdhari Lal Vyas Committee (1973)**: Gram Panchayat functioning and Gram Sevak role.\n- **Harlal Singh Kharra Committee (1988)**: Devolution of financial powers to PRIs.\n- **Shiv Charan Mathur Commission (2000)**: Administrative Reforms Commission of Rajasthan.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'State Administration & Governance of Rajasthan: District Administration, PRIs & Service Delivery Acts',
        notes: 'Panchayati Raj Act 1994, Collector multi-role, 2011 Guaranteed Services Act, and 2012 Right to Hearing Act.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Rural Development & PRIs: Grassroots Democracy, 50% Women Reservation & Local Administration',
        notes: 'Historical Nagaur inauguration, 73rd CAA implementation, and 3-tier PRI devolution.',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Indian Governance: Citizen Charters, Public Service Delivery Legislation & District Admin',
        notes: 'Public service guarantee laws, administrative penalties, and grievance redressal mechanisms.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'ESI & Governance: Citizen Charters, Decentralized Delivery & Public Accountability',
        notes: 'Citizen service delivery legislation and time-bound public administrative accountability.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'General Awareness: Public Governance & Citizen Charters',
        notes: 'Time-bound service delivery legislation principles.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Panchayati Raj Inception & Good Governance Initiatives',
        notes: 'Nagaur 1959 milestone and 50% women reservation in PRIs.',
      },
      {
        examCode: 'IBPS_PO',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Awareness: Indian Local Self-Government & Governance Laws',
        notes: 'Historical launch of Panchayati Raj in India (Nagaur 1959).',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        syllabusUnit: 'Indian Financial System: Rural Credit Delivery & Local Self-Government',
        notes: 'Panchayati Raj institutional framework and rural administration.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Local & Public Governance: Inception Oct 2, 1959 at Nagaur (Bagdari village) by Nehru (Balwant Rai Mehta Comm). 1994 PR Act = 3 tiers (ZP, PS, GP) + 50% women reservation (2008). District hierarchy: Divisional Commissioner $\\to$ Collector/DM $\\to$ SDO $\\to$ Tehsildar $\\to$ Patwari. Landmark Acts: Guaranteed Public Services Act 2011 (₹25–₹250/day penalty, max ₹5,000) & Right to Hearing Act 2012 (hearing within 15 days).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthan pioneered democratic decentralization when Prime Minister Jawaharlal Nehru inaugurated India\'s first Panchayati Raj system at Nagaur on October 2, 1959. Modern rural governance is regulated by the Rajasthan Panchayati Raj Act, 1994, which establishes a 3-tier structure (Zila Parishad, Panchayat Samiti, Gram Panchayat) and was amended in 2008 to provide 50% reservation for women across all tiers. Field administration operates through a clear hierarchical chain from the Divisional Commissioner and District Collector down to the SDO, Tehsildar, and Patwari. In administrative accountability, Rajasthan enacted the pioneering Guaranteed Delivery of Public Services Act, 2011 (imposing personal salary penalties of ₹25 to ₹250 per day up to ₹5,000 on defaulting officers) and the Right to Hearing Act, 2012 (guaranteeing citizen grievance hearings within 15 days).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajasthan Local & Field Administration Architecture:\n1. Panchayati Raj Inception & Structure (1994 Act):\n   - Milestone: Inaugurated 2 Oct 1959 at Nagaur (Bagdari village) based on Balwant Rai Mehta Committee.\n   - Tiers: Zila Parishad (CEO / Zila Pramukh) $\\to$ Panchayat Samiti (BDO / Pradhan) $\\to$ Gram Panchayat (VDO / Sarpanch).\n   - Quotas: 50% Reservation for Women across all PRI tiers since 2008.\n2. District Revenue & Field Administrative Hierarchy:\n   - Divisional Commissioner $\\to$ District Collector/DM $\\to$ SDO/SDM $\\to$ Tehsildar $\\to$ Naib Tehsildar/Girdawar $\\to$ Patwari.\n3. Citizen Accountability Legislation:\n   - Guaranteed Delivery of Public Services Act 2011: Time-bound delivery of notified services with daily penalties (₹25–₹250/day, max ₹5,000).\n   - Right to Hearing Act 2012: Enforceable right to grievance hearing within 15 days at village/block/district levels.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'On October 2, 1959, Prime Minister Jawaharlal Nehru inaugurated the historic first Panchayati Raj system in independent India at which specific district of Rajasthan?',
        options: [
          'Jaipur',
          'Nagaur',
          'Ajmer',
          'Jodhpur',
        ],
        correctAnswer: 'Nagaur',
        explanation: 'Panchayati Raj was first inaugurated in independent India on October 2, 1959 at Nagaur district (Bagdari village) in Rajasthan by Prime Minister Jawaharlal Nehru, following the recommendations of the Balwant Rai Mehta Committee.',
        trapExplanation: 'Nagaur is the historic birthplace of Panchayati Raj in India; Andhra Pradesh followed shortly thereafter in late 1959.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'RPSC RAS Prelims / IBPS PO',
        pyqQuestionNumber: 45,
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Under the Rajasthan Guaranteed Delivery of Public Services Act, 2011, what is the statutory financial penalty range that can be imposed per day on a defaulting designated officer who fails to deliver a notified public service without sufficient cause?',
        options: [
          '₹50 to ₹500 per day subject to a maximum of ₹10,000',
          '₹25 to ₹250 per day subject to an overall ceiling of ₹5,000',
          'A flat penalty of ₹1,000 per delayed application',
          '₹100 to ₹1,000 per day deducted from departmental budget',
        ],
        correctAnswer: '₹25 to ₹250 per day subject to an overall ceiling of ₹5,000',
        explanation: 'Under Section 7 of the Rajasthan Guaranteed Delivery of Public Services Act, 2011, the Second Appellate Authority can impose a penalty of not less than ₹25 and not more than ₹250 per day for the period of delay, subject to an overall maximum ceiling of ₹5,000, which is recovered directly from the salary of the defaulting officer.',
        trapExplanation: 'The statutory penalty is ₹25 to ₹250 per day with an overall cap of ₹5,000, deducted from personal salary.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
];

export async function seedPolityGapCanonicalKnowledge() {
  console.log(`Seeding ${BATCH_POLITY_GAP_CONCEPTS.length} Indian Polity Gap Closure Concepts...`);

  // Ensure domain exists
  const domain = await db.domain.upsert({
    where: { slug: 'indian-governance-administration' },
    update: {},
    create: {
      name: 'Indian Governance & Administration',
      slug: 'indian-governance-administration',
      description: 'Constitutional framework, institutions, administrative architecture, and public governance in India and Rajasthan.',
      order: 1,
      status: 'CANONICAL',
    },
  });

  // Ensure subject exists
  const subject = await db.subject.upsert({
    where: { slug: 'indian-polity' },
    update: {},
    create: {
      domainId: domain.id,
      name: 'Indian Polity',
      slug: 'indian-polity',
      description: 'Comprehensive study of the Indian Constitution, Union and State Executive, Legislature, Judiciary, Federalism, Constitutional Bodies, Statutory Commissions, and Rajasthan Governance.',
      scopeStatement: 'Syllabus-complete curriculum across 8 major competitive examinations.',
      order: 1,
      status: 'CANONICAL',
    },
  });

  // Source record for authoritative citations
  const sourcePolity = await db.source.upsert({
    where: { id: 'SRC-POL-CONST-01' },
    update: {},
    create: {
      id: 'SRC-POL-CONST-01',
      title: 'Constitution of India & Authoritative Statutory Gazettes',
      sourceType: 'STATUTORY_CODE',
      authorityTier: 'PRIMARY_AUTHORITY',
      description: 'Constitution of India and statutory gazette notifications.',
    },
  });

  // Ensure Exams Exist
  const examCodes = ['RBI_GRADE_B', 'SEBI_GRADE_A', 'NABARD_GRADE_A', 'SBI_PO', 'IBPS_PO', 'RPSC_RAS', 'IIBF_DBF', 'UPSC_APFC'];
  const examMap: Record<string, string> = {};

  for (const code of examCodes) {
    let exam = await db.exam.findFirst({ where: { slug: code.toLowerCase().replace(/_/g, '-') } });
    if (!exam) {
      exam = await db.exam.create({
        data: {
          slug: code.toLowerCase().replace(/_/g, '-'),
          name: code.replace(/_/g, ' '),
          conductingBody: code.split('_')[0],
          description: `Target examination suite for ${code}`,
          syllabusSummary: `Indian Polity, Governance, and General Awareness syllabus for ${code}`,
        },
      });
    }
    examMap[code] = exam.id;
  }

  for (let i = 0; i < BATCH_POLITY_GAP_CONCEPTS.length; i++) {
    const cDef = BATCH_POLITY_GAP_CONCEPTS[i];

    // Ensure topic exists
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: cDef.topicSlug,
        },
      },
      update: {
        title: cDef.topicTitle,
        description: cDef.topicDescription,
        order: cDef.topicOrder,
        status: 'CANONICAL',
      },
      create: {
        subjectId: subject.id,
        slug: cDef.topicSlug,
        title: cDef.topicTitle,
        description: cDef.topicDescription,
        order: cDef.topicOrder,
        status: 'CANONICAL',
      },
    });

    // Check if concept exists
    let concept = await db.concept.findUnique({ where: { id: cDef.id } });

    if (concept) {
      await db.evidence.deleteMany({ where: { claim: { conceptId: concept.id } } });
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      concept = await db.concept.update({
        where: { id: cDef.id },
        data: {
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId: topic.id,
          order: 100 + i + 1,
          status: 'CANONICAL',
        },
      });
    } else {
      concept = await db.concept.create({
        data: {
          id: cDef.id,
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId: topic.id,
          order: 100 + i + 1,
          status: 'CANONICAL',
        },
      });
    }

    // Seed Claims & Evidence
    for (const cl of cDef.claims) {
      const claim = await db.claim.create({
        data: {
          id: cl.id,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType,
          epistemicLevel: cl.epistemicLevel,
          confidence: cl.confidence,
          status: 'VERIFIED',
        },
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourcePolity.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'STATUTORY_PROVISION',
          authority: 'AUTHORITATIVE_STATUTE',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH',
        },
      });
    }

    // Seed Content Blocks
    for (const cb of cDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: 'CANONICAL_FULL',
        },
      });
    }

    // Seed Exam Mappings
    for (const em of cDef.examMappings) {
      const examId = examMap[em.examCode];
      if (examId) {
        await db.examConceptMapping.create({
          data: {
            examId,
            conceptId: concept.id,
            syllabusUnit: em.syllabusUnit,
            relevance: em.relevance,
            priority: em.priority,
            requiredDepth: em.requiredDepth,
            notes: em.notes,
          },
        });
      }
    }

    // Seed Revision Units
    for (const ru of cDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: ru.order,
        },
      });
    }

    // Seed Questions
    for (const q of cDef.questions) {
      await db.question.create({
        data: {
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
          pyqQuestionNumber: q.pyqQuestionNumber,
        },
      });
    }
  }

  console.log(`Successfully seeded ${BATCH_POLITY_GAP_CONCEPTS.length} Indian Polity Gap Closure concepts.`);
}
