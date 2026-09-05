import { db } from '../db/client';

export interface SchemesBatch2ConceptDef {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  order: number;
  topicSlug: string;
  contentBlocks: {
    type: string;
    title: string;
    body: string;
    order: number;
    visibility: string;
  }[];
  claims: {
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }[];
  examMappings: {
    examCode: string;
    syllabusUnit: string;
    relevance: string;
    priority: string;
    requiredDepth: string;
    notes: string;
  }[];
  revisionUnits: {
    type: string;
    content: string;
    priority: string;
    order: number;
  }[];
  questions: {
    type: string;
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation: string;
    difficulty: string;
    isPYQ?: boolean;
    pyqYear?: number;
    pyqPaper?: string;
    pyqStage?: string;
    examinerTrapPattern?: string;
  }[];
}

export const SCHEMES_BATCH_2_CONCEPTS: SchemesBatch2ConceptDef[] = [
  // =========================================================================
  // TOPIC 54: Public Policy & Scheme Implementation Framework
  // =========================================================================
  {
    id: 'CON-SCH-06',
    slug: 'universal-health-and-nutrition-ayushman-bharat-pmjay-70-expansion-nha-poshan-2',
    title: 'Universal Health & Nutrition Architecture: Ayushman Bharat PM-JAY, AB-PMJAY 70+ Expansion, NHA Digital Ecosystem & Poshan 2.0',
    shortDefinition: 'Exhaustive architecture of India\'s flagship health and nutrition welfare programs: Ayushman Bharat PM-JAY cashless hospitalization limits (₹5 Lakh), 2024 universal geriatric expansion for all citizens aged 70+, NHA implementation architecture, and Mission Saksham Anganwadi & Poshan 2.0.',
    difficulty: 'ADVANCED',
    order: 6,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Insulating Vulnerable Households Against Catastrophic Health Expenditure',
        body: `In developmental economics, catastrophic out-of-pocket health expenditure (OOPE) is recognized as the single most ruthless driver of generational impoverishment in India. A single episode of critical hospitalization—such as open-heart surgery, severe trauma, or oncology treatment—routinely costs between ₹2 Lakh and ₹5 Lakh, instantly wiping out years of family savings and forcing informal households into debt bondage with usurious moneylenders.

To dismantle this systemic vulnerability, the Government of India rolled out **Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)** in September 2018. Designed as the world's largest tax-funded health assurance scheme, it completely decouples tertiary healthcare from immediate cash solvency.

In late 2024, the government enacted a historic policy milestone: **the universalization of AB PM-JAY to ALL senior citizens aged 70 and above**, completely regardless of socio-economic status, income tier, or wealth background. Concurrently, under **Mission Saksham Anganwadi and Poshan 2.0**, the state pairs clinical health protection with preventive maternal and child nutritional security.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'AB PM-JAY Statutory Invariants, Benefit Matrices & Universal 70+ Expansion',
        body: `### 1. Ayushman Bharat PM-JAY Foundational Parameters

| Structural Parameter | Statutory Policy Specification |
| :--- | :--- |
| **Financial Health Cover** | **₹5,00,000 (₹5 Lakh)** per family per year on a family floater basis for secondary and tertiary care hospitalization. |
| **Target Demographic** | Bottom 40% vulnerable population (approx. 12 Crore families / 55 Crore individuals) mapped via Socio-Economic Caste Census (SECC 2011) and NFSA. |
| **Pre-existing Diseases** | **Covered from Day 1** (zero waiting period, zero exclusions for pre-existing medical conditions). |
| **Pre- & Post-Hospitalization** | Covers medical examinations, tests, and medicines up to **3 days prior to admission** and **15 days post-discharge**. |
| **Portability** | **100% Nationwide Portability** (beneficiaries can seek cashless treatment at any empanelled public or private hospital across any Indian state/UT). |
| **Apex Nodal Body** | **National Health Authority (NHA)** attached to the Ministry of Health and Family Welfare (MoHFW), implemented on the ground by **State Health Agencies (SHAs)**. |
| **Financing Pattern** | Centrally Sponsored Scheme: **60:40** (General States), **90:10** (NE & Himalayan States), **100:0** (UTs without legislature). |

### 2. The Historic 2024 Universal 70+ Geriatric Expansion
In September 2024, the Union Cabinet approved the universal expansion of AB PM-JAY:
* **Eligibility:** **Every single Indian citizen aged 70 years and above** is entitled to coverage, strictly based on age verification (Aadhaar-based e-KYC), regardless of income.
* **Top-Up Architecture:**
  * Senior citizens aged 70+ belonging to existing AB PM-JAY eligible families receive an **exclusive additional top-up cover of ₹5 Lakh per year** solely for themselves (not shared with the rest of the family).
  * Senior citizens aged 70+ not previously covered receive a distinct **Ayushman Vay Vandana Card** providing up to **₹5 Lakh per year** on a family floater basis for elderly members.
* **Choice of Schemes:** Seniors covered under other public health insurance schemes (CGHS, ECHS, Ayushman CAPF) are given a **one-time choice** to either retain their existing scheme or migrate to AB PM-JAY. Private health insurance policyholders can avail AB PM-JAY concurrently.

### 3. Mission Saksham Anganwadi & Poshan 2.0
Implemented by the **Ministry of Women and Child Development (MoWCD)**, Poshan 2.0 integrates:
* Supplementary Nutrition Programme (SNP) under Anganwadi Services
* POSHAN Abhiyaan (National Nutrition Mission)
* Scheme for Adolescent Girls (14–18 years in aspirational districts)
* Focuses on addressing stunting, wasting, underweight, and anaemia among children (0–6 years), pregnant women, and lactating mothers via the digital **Poshan Tracker** app.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'NHA Operational Architecture, SHA Claims Workflow & Anti-Fraud Engine',
        body: `### The Cashless Treatment & Claims Settlement Workflow
1. **Beneficiary Identification System (BIS):** Patient arrives at an Empanelled Health Care Provider (EHCP). An **Ayushman Mitra** verifies identity via Aadhaar biometric authentication on the BIS portal and issues the golden Ayushman Card.
2. **Pre-Authorization:** Hospital submits clinical diagnosis and proposed treatment package to the SHA via the **Transaction Management System (TMS)**. Pre-authorization is processed electronically within 6 to 12 hours.
3. **Cashless Treatment Execution:** Patient receives consultation, surgery, medications, diagnostic tests, food, and post-operative care with zero cash outlay.
4. **Discharge & Post-Hospitalization:** Hospital dispenses 15 days of post-discharge medicines.
5. **Electronic Claim Settlement:** Hospital submits final medical summary and discharge telemetry. The State Health Agency (SHA) / Third Party Administrator (TPA) conducts medical audit and remits payment via Direct Benefit Transfer (DBT) within **15 days of claim submission**.
6. **National Anti-Fraud Unit (NAFU):** NHA deploys AI-driven pattern recognition algorithms to detect aberrant billing, phantom surgeries, and excessive package bundling.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Age Invariants & Nodal Ministry Distinctions',
        body: `### Critical Examiner Traps in Health & Nutrition Schemes

1. **The ₹5 Lakh Coverage Scope Trap:**
   * *Trap:* Assuming the ₹5 Lakh cover is *per individual*.
   * *Truth:* The ₹5 Lakh cover is **per family per year on a family floater basis** (except for the 70+ expansion, where an individual top-up of ₹5 Lakh is ring-fenced for the elderly member).
   * *Trap:* Assuming OPD (Out-Patient Doctor visits) is covered. AB PM-JAY covers **secondary and tertiary in-patient hospitalization ONLY**, not routine dispensary OPD visits!

2. **Nodal Ministry & Implementation Entity Trap:**
   * AB PM-JAY is implemented by the **National Health Authority (NHA)**, NOT the Insurance Regulatory and Development Authority of India (IRDAI).
   * Poshan 2.0 is under the **Ministry of Women and Child Development (MoWCD)**, NOT the Ministry of Health.

3. **Geriatric 70+ Eligibility Conditions:**
   * *Trap:* Claiming that senior citizens must have an income below ₹2.5 Lakh to qualify.
   * *Truth:* The 70+ expansion has **ZERO income criteria**. An elderly industrialist or retired judge aged 70+ is as fully eligible as an informal worker.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-06-1',
        statement: 'Ayushman Bharat PM-JAY provides a cashless health assurance cover of ₹5,00,000 per family per year for secondary and tertiary care hospitalization to over 12 crore vulnerable families.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '02_IIBF_Banking_Regulations_Master.md#note-14',
        excerpt: 'Ayushman Bharat PM-JAY: Provides cashless health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization.',
      },
      {
        id: 'CLM-SCH-06-2',
        statement: 'In 2024, AB PM-JAY was universalized to include all Indian citizens aged 70 years and above, providing an exclusive ₹5 Lakh cover regardless of socio-economic status or income level.',
        claimType: 'POLICY_UPDATE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Cluster 5: Social Security: PM-JAY 70+ expansion providing universal coverage for senior citizens.',
      },
      {
        id: 'CLM-SCH-06-3',
        statement: 'Pre-existing medical diseases and conditions are covered from day one under Ayushman Bharat PM-JAY, with zero waiting periods and nationwide portability across empanelled hospitals.',
        claimType: 'STATUTORY_INVARIANT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Bucket 1 Flagship: Ayushman Bharat PM-JAY addresses healthcare access through comprehensive secondary/tertiary coverage.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General & Banking Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_AND_POLICY',
        notes: 'Guaranteed questions on coverage limits, age expansion, and nodal authority.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Social Sector Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_AND_POLICY',
        notes: 'High weightage in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Economic & Social Issues (ESI) — Social Sectors in India (Health)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for 15-mark descriptive questions on universal healthcare financing.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper II — Issues Relating to Development & Management of Social Sector (Health)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'Frequently examined in Prelims (features) and Mains GS 2 (health financing).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security in India — Health Assurance Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_CRITERIA',
        notes: 'Direct multiple-statement questions on eligibility and NHA mandates.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper III — Social Justice & Public Health Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPARATIVE_STATE_CENTRAL_ANALYSIS',
        notes: 'Tested in 5-mark and 10-mark questions comparing PM-JAY with Rajasthan Chiranjeevi / Mukhya Mantri Ayushman.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on coverage limit (₹5L), launch year (2018), and age 70+ expansion.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Priority Sector Lending — Social Infrastructure Financing',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'BANK_LENDING_THRESHOLDS',
        notes: 'Bank loans up to ₹10 Cr for Ayushman Bharat empanelled hospitals qualify under PSL.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'AB PM-JAY: ₹5 Lakh/family/year for secondary/tertiary hospitalization. Pre-existing diseases covered from Day 1. Pre 3 days, post 15 days. Implemented by NHA. 2024 Expansion: ALL citizens aged 70+ get ₹5 Lakh cover with ZERO income limit. Poshan 2.0 = MoWCD.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Ayushman Bharat PM-JAY Framework: Cashless, paperless in-patient care up to ₹5 Lakh per family per year across empanelled public/private hospitals. Nationwide portability. Zero waiting period for pre-existing diseases. Governed by National Health Authority (NHA) with SHAs in states. Funded 60:40. In late 2024, extended universally to all citizens aged 70+ (Aadhaar verification, no income cap, distinct ₹5L cover). Poshan 2.0 integrates Anganwadi, Poshan Abhiyaan, and adolescent nutrition under MoWCD.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Universal Health Architecture: 1) Tiered Delivery: Ayushman Arogya Mandirs (Primary health & screening) -> District/Empanelled Hospitals (Secondary/Tertiary surgical and medical care under PM-JAY). 2) Financing: 60:40 Centre-State. Package rates determined by NHA. 3) Geriatric Universalization: Age 70+ cohort receives non-means-tested coverage. 4) Digital Core: Ayushman Bharat Digital Mission (ABDM), ABHA ID, BIS, and National Anti-Fraud Unit (NAFU).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'With reference to the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY), consider the following statements:\n1. It provides a health cover of ₹5,00,000 per individual per year for primary and secondary outpatient care.\n2. Pre-existing medical conditions are covered from the very first day of enrolment.\n3. The scheme covers medical expenses incurred up to 3 days prior to hospitalization and up to 15 days post-discharge.\n4. Citizens aged 70 years and above are entitled to scheme benefits only if their annual family income is below ₹3,00,000.\nWhich of the statements given above are correct?',
        options: ['1 and 4 only', '2 and 3 only', '2, 3 and 4 only', '1, 2 and 3 only'],
        correctAnswer: '2 and 3 only',
        explanation: 'Statement 1 is incorrect: AB PM-JAY provides ₹5,00,000 per FAMILY (not per individual) per year on a family floater basis, and covers SECONDARY and TERTIARY in-patient hospitalization (not outpatient primary care). Statement 2 is correct: Pre-existing conditions are covered from Day 1 with zero waiting period. Statement 3 is correct: Pre-hospitalization expenses up to 3 days and post-hospitalization expenses up to 15 days are covered. Statement 4 is incorrect: Under the 2024 expansion, ALL citizens aged 70 and above are covered universally regardless of income or socio-economic background.',
        trapExplanation: 'The traps are: (a) confusing per family with per individual, (b) confusing inpatient with outpatient care, and (c) assuming the 70+ expansion has an income threshold.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Per family vs per individual, and income thresholds in universalized senior citizen schemes.',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'Which nodal body is responsible for the overall governance, policy formulation, and technical platform operations of Ayushman Bharat PM-JAY at the national level?',
        options: [
          'Insurance Regulatory and Development Authority of India (IRDAI)',
          'National Health Authority (NHA)',
          'National Health Mission Directorate',
          'Medical Council of India'
        ],
        correctAnswer: 'National Health Authority (NHA)',
        explanation: 'The National Health Authority (NHA) is the apex statutory body responsible for implementing Ayushman Bharat PM-JAY and the Ayushman Bharat Digital Mission (ABDM). It is an attached office of the Ministry of Health and Family Welfare (MoHFW) and is headed by a Chief Executive Officer (CEO).',
        trapExplanation: 'Students often choose IRDAI because PM-JAY is an insurance/assurance scheme, or National Health Mission because of similar naming.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'SBI PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Confusing regulatory insurance body (IRDAI) with specialized scheme agency (NHA).',
      },
    ],
  },
  {
    id: 'CON-SCH-07',
    slug: 'universal-housing-and-urban-transformation-pmay-urban-2-pmay-gramin-clss-amrut-2',
    title: 'Universal Housing & Urban Transformation: PMAY-Urban 2.0, PMAY-Gramin, CLSS Subsidies & AMRUT 2.0',
    shortDefinition: 'Urban and rural housing infrastructure schemes: PMAY-Urban 2.0 (₹10 Lakh Cr investment, CLSS interest subvention), PMAY-Gramin unit norms and funding ratios (60:40/90:10), and urban rejuvenation under AMRUT 2.0 and Smart Cities.',
    difficulty: 'ADVANCED',
    order: 7,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Shelter as an Economic Multiplier: Transforming Pucca Housing into Capital',
        body: `A home is far more than four walls and a roof; in developmental economics, a pucca house is the primary asset that unlocks household creditworthiness, sanitary security, educational attainment, and inter-generational wealth accumulation. When poor rural and urban families live in kuccha mud-and-thatch huts, a single monsoon inundation wipes out their physical belongings and exposes children to waterborne epidemics.

To deliver universal housing security, the state launched the **Pradhan Mantri Awas Yojana (PMAY)**, structurally bifurcated into:
1. **PMAY-Gramin (PMAY-G)** under the Ministry of Rural Development: targeting homeless rural households via SECC 2011 and Awaas+ surveys.
2. **PMAY-Urban (PMAY-U)** under the Ministry of Housing and Urban Affairs: targeting urban slum dwellers, EWS, and LIG households.

In August 2024, the Union Cabinet approved **PMAY-Urban 2.0**, committing an astronomical investment of **₹10 Lakh Crore** to construct an additional **1 Crore (10 million) urban houses** over 5 years. Concurrently, **AMRUT 2.0** guarantees that these new homes have functional tap water connections and underground sewage facilities.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'PMAY-Gramin vs PMAY-Urban 2.0 Comparative Matrix & Subsidy Architecture',
        body: `### 1. PMAY-Gramin vs PMAY-Urban 2.0 Structural Blueprint

| Feature | PMAY-Gramin (PMAY-G) | PMAY-Urban 2.0 (PMAY-U 2.0) |
| :--- | :--- | :--- |
| **Nodal Ministry** | **Ministry of Rural Development (MoRD)** | **Ministry of Housing and Urban Affairs (MoHUA)** |
| **Target Group** | Rural homeless and households living in 0, 1, or 2 room kutcha houses (Awaas+ survey). | Economically Weaker Section (EWS: income up to ₹3L), Low Income Group (LIG: ₹3L–₹6L), Middle Income Group (MIG: ₹6L–₹9L). |
| **Minimum Unit Size** | **25 sq. meters** (including a dedicated hygienic cooking space). | **30 sq. meters** carpet area for EWS with water, sanitation, and electricity. |
| **Direct Unit Assistance** | • **₹1,20,000 (₹1.20 Lakh)** in Plain areas.<br>• **₹1,30,000 (₹1.30 Lakh)** in Hilly, North-Eastern, and Difficult/IAP areas. | Provided across 4 verticals: ISS, BLC, AHP, and ARHC. |
| **Credit Linked Subsidy (CLSS / ISS)** | Optional bank loan up to ₹70,000 at 3% interest subvention. | **Interest Subsidy Scheme (ISS):** 4.0% interest subsidy on home loans up to ₹25 Lakh (loan tenure up to 12 years) for EWS/LIG/MIG, subsidy capped at **₹1.80 Lakh**. |
| **Convergence Benefits** | • 90/95 person-days of unskilled labour under MGNREGA (~₹25,000).<br>• ₹12,000 for toilet construction under Swachh Bharat Mission-Gramin (SBM-G).<br>• Ujjwala LPG and Saubhagya electricity connections. | Convergence with PM-Surya Ghar (rooftop solar), AMRUT 2.0 (tap water & sewage), and PM SVANidhi. |
| **Mandatory Title Holding** | Registered jointly in the name of **Husband and Wife**, or solely in the name of the **Female head**. | Ownership must be in the name of an **adult female member** or joint ownership with female member. |

### 2. The 4 Operational Verticals of PMAY-Urban
1. **Beneficiary-Led Construction (BLC):** Direct central assistance of ₹1.5 Lakh to EWS families constructing homes on their own land.
2. **Affordable Housing in Partnership (AHP):** Central assistance of ₹1.5 Lakh per EWS house in projects built in partnership with States/UTs or private developers.
3. **Affordable Rental Housing Complexes (ARHC):** Converting existing government-funded housing or constructing new rental dormitories for migrant labour.
4. **Interest Subsidy Scheme (ISS):** Direct subsidy credited to borrower loan account via National Housing Bank (NHB) and HUDCO.

### 3. AMRUT 2.0 (Atal Mission for Rejuvenation and Urban Transformation)
* **Goal:** Universal coverage of **water supply through functional tap connections** to all households in all **4,700+ statutory Urban Local Bodies (ULBs)**.
* **Sewage Coverage:** 100% coverage of sewerage and septage management in 500 AMRUT cities.
* Rejuvenation of urban water bodies (*Amrit Sarovars*) and promotion of circular water economy (reusing treated wastewater for industrial and landscaping use).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Geotagging Verification Workflow & DBT Direct Benefit Disbursement',
        body: `### The 4-Stage Geotagging Milestone Workflow under PMAY-G (AwaasApp)
To prevent leakage and corruption, fund transfers under PMAY-G are 100% milestone-linked via the **AwaasSoft** and **AwaasApp** mobile platforms:
1. **Milestone 0 (Sanction & Geotagged Geo-Evidence):** Gram Panchayat and Block Development Officer (BDO) geotag the existing kuccha house with beneficiary standing in front. 1st installment (25%) transferred to beneficiary bank account via PFMS/DBT.
2. **Milestone 1 (Plinth Level Inspection):** Beneficiary digs foundations and constructs plinth. Geo-tagged photo uploaded. 2nd installment (40% to 45%) disbursed.
3. **Milestone 2 (Lintel / Roof Cast Level):** Walls erected up to lintel level and roof cast. Geo-tagged photo validated. 3rd installment (30%) disbursed.
4. **Milestone 3 (Completion & Convergence):** House painted, toilet constructed under SBM, doors/windows fitted. Final geo-tagged photo uploaded with beneficiary holding registration board. Remaining balance and MGNREGA wage credits released.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Unit Norms & Ministry Ownership Errors',
        body: `### Critical Examiner Traps in Housing & Urban Schemes

1. **The Ministry Bifurcation Trap:**
   * PMAY-Gramin belongs to the **Ministry of Rural Development (MoRD)**.
   * PMAY-Urban belongs to the **Ministry of Housing and Urban Affairs (MoHUA)**.
   * *Trap:* Mixing up the nodal ministries in objective multi-statement questions.

2. **The Unit Assistance Metric Trap:**
   * *Trap:* Thinking PMAY-G gives ₹2.5 Lakh in cash.
   * *Truth:* PMAY-G cash assistance is **₹1.20 Lakh (Plain areas)** and **₹1.30 Lakh (Hilly/NE areas)**. Additional money comes from MGNREGA wages (~₹25,000) and SBM toilets (₹12,000). Total package is around ₹1.57 Lakh.

3. **Mandatory Female Ownership Rule:**
   * Under both PMAY-G and PMAY-U, houses **CANNOT be registered solely in the name of the male head**, except where there is no adult female member in the family. The deed must be in the female's name or held jointly.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-07-1',
        statement: 'PMAY-Gramin provides direct financial assistance of ₹1,20,000 in plain areas and ₹1,30,000 in hilly, north-eastern, and difficult terrain for constructing a minimum 25 sq. meter pucca house.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Bucket 1 Flagship: PMAY-Urban & PMAY-Gramin address housing for the poor across distinct rural and urban ministries.',
      },
      {
        id: 'CLM-SCH-07-2',
        statement: 'PMAY-Urban 2.0 was approved with an outlay of ₹10 Lakh Crore to construct 1 Crore additional houses, featuring an Interest Subsidy Scheme of 4.0% on home loans up to ₹25 Lakh.',
        claimType: 'POLICY_UPDATE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Ministry of Housing & Urban Affairs: PMAY-Urban, Smart Cities, AMRUT 2.0.',
      },
      {
        id: 'CLM-SCH-07-3',
        statement: 'Under both PMAY-Gramin and PMAY-Urban, title ownership of the house must mandatorily be registered in the name of the female head or held jointly with her spouse.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Master Trap Table: PMAY-Urban = Housing & Urban Affairs; PMAY-Gramin = Rural Development.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Flagship Housing Programs',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FINANCIAL_AND_SCHEME_DETAILS',
        notes: 'High weightage on PMAY-U 2.0 outlay and interest subsidy rates.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Urban and Rural Development',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FINANCIAL_AND_SCHEME_DETAILS',
        notes: 'Tested in Prelims and Mains GA sections.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Social Structure / Urbanization and Migration',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ANALYTICAL_AND_DESCRIPTIVE',
        notes: 'Frequent 10-mark descriptive questions on affordable housing and urban infrastructure.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper II & III — Welfare Schemes / Urbanization & Infrastructure',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'POLICY_EVALUATION',
        notes: 'PMAY-G convergence with MGNREGA and SBM is heavily tested in Prelims.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security in India — Housing Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Tested on unit sizes, subsidy numbers, and female ownership rules.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper III — Public Administration & Rural Development',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_IMPLEMENTATION_ANALYSIS',
        notes: 'Direct 5-mark question on PMAY-G and AMRUT progress in Rajasthan.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on ₹1.2L vs ₹1.3L assistance and PMAY-U 2.0 targets.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Priority Sector Lending — Housing Finance',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'REGULATORY_PSL_LIMITS',
        notes: 'Bank loans up to ₹35 Lakh in metropolitan centres for housing qualify for PSL.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PMAY-G: MoRD, 25 sq.m min, ₹1.20L (plains) / ₹1.30L (hilly/NE). 90 days MGNREGA labour + ₹12k SBM toilet. PMAY-U 2.0: MoHUA, 1 Crore houses, ₹10 Lakh Cr outlay, 4% interest subsidy up to ₹25L loan (max ₹1.80L subsidy). Female ownership mandatory.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Universal Housing Blueprint: 1) PMAY-Gramin: Under MoRD; provides ₹1.20L (plains) / ₹1.30L (hills) for 25 sq.m house. Linked to AwaasApp geotagging across 4 milestones. Converged with MGNREGA wages and SBM toilets. 2) PMAY-Urban 2.0: Under MoHUA; targets EWS/LIG/MIG with ₹10 Lakh Cr total investment. Includes Interest Subsidy Scheme (4% subsidy on loans up to ₹25L). 3) Mandatory Gender Invariant: Sole female or joint ownership. 4) AMRUT 2.0: Universal water supply to all 4,700 ULBs.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Housing & Urban Infrastructure Architecture: 1) Institutional Division: MoRD (Rural) vs MoHUA (Urban). 2) Beneficiary Mapping: Rural uses SECC 2011 + Awaas+ list; Urban uses EWS (up to 3L), LIG (3L-6L), MIG (6L-9L). 3) Digital Governance: AwaasSoft / PFMS direct account credit; geo-referenced time-stamped inspection. 4) Urban Triad: PMAY-U 2.0 (Housing) + AMRUT 2.0 (Water & Septage) + Smart Cities (Digital Urban Mobility).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'Under the Pradhan Mantri Awas Yojana - Gramin (PMAY-G), what is the minimum unit size of the house and the direct financial assistance provided to beneficiaries in plain areas?',
        options: [
          '20 sq. meters and ₹1,00,000',
          '25 sq. meters and ₹1,20,000',
          '25 sq. meters and ₹1,50,000',
          '30 sq. meters and ₹1,30,000'
        ],
        correctAnswer: '25 sq. meters and ₹1,20,000',
        explanation: 'Under PMAY-G, the minimum prescribed unit size of a pucca house is 25 square meters (enhanced from 20 sq.m under the erstwhile Indira Awaas Yojana), which includes a dedicated hygienic cooking area. The direct financial assistance is ₹1,20,000 in plain areas and ₹1,30,000 in hilly states, North-Eastern states, and difficult/Integrated Action Plan (IAP) districts.',
        trapExplanation: 'Students often confuse the ₹1.20 Lakh plain assistance with the ₹1.30 Lakh hilly assistance or confuse the 25 sq.m rural minimum with the 30 sq.m urban EWS carpet area.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact unit area (25 vs 30 sq.m) and assistance differentiation (1.2L vs 1.3L).',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'Which of the following statements regarding PMAY-Urban 2.0 is INCORRECT?',
        options: [
          'It aims to construct 1 Crore additional affordable houses over a period of 5 years.',
          'It is administered by the Ministry of Rural Development.',
          'It includes an Interest Subsidy Scheme offering a 4% interest subvention on home loans up to ₹25 Lakh.',
          'Ownership of the house must mandatorily be in the name of an adult female member or held jointly.'
        ],
        correctAnswer: 'It is administered by the Ministry of Rural Development.',
        explanation: 'Statement B is INCORRECT. PMAY-Urban (and PMAY-Urban 2.0) is administered by the Ministry of Housing and Urban Affairs (MoHUA). The Ministry of Rural Development (MoRD) administers PMAY-Gramin. All other statements are factually accurate regarding PMAY-Urban 2.0 approved in August 2024.',
        trapExplanation: 'Nodal ministry confusion is the classic trap set by examiners in housing scheme questions.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Assigning rural ministry to urban housing programs.',
      },
    ],
  },
  {
    id: 'CON-SCH-08',
    slug: 'women-empowerment-small-savings-sukanya-samriddhi-pm-matru-vandana-mission-shakti',
    title: 'Women Empowerment, Child Development & Small Savings: Sukanya Samriddhi Yojana (SSY), PM Matru Vandana Yojana (PMMVY) & Mission Shakti',
    shortDefinition: 'Gender welfare and small-savings architectures: Sukanya Samriddhi Yojana (8.2% interest, EEE tax status, age limits), Pradhan Mantri Matru Vandana Yojana (conditional maternity DBT tranches), Beti Bachao Beti Padhao, and Mission Shakti (Sambal and Samarthya).',
    difficulty: 'INTERMEDIATE',
    order: 8,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Direct Benefit Incentives: Countering Gender Bias & Maternal Wage Loss',
        body: `For decades, patriarchal societal biases and economic vulnerability produced two acute developmental crises in India:
1. **The Declining Child Sex Ratio (CSR):** Parents viewing the birth of a girl child as a future financial liability (due to wedding costs and dowry), leading to female foeticide and educational neglect.
2. **Maternal Malnutrition & Under-Nutrition:** Women working in informal, unorganized manual labour until the final weeks of pregnancy and returning to work days after childbirth, sacrificing breastfeeding and newborn care to avoid starvation.

To confront these deep-seated socio-economic challenges, the state deployed targeted financial architectures under the umbrella of **Beti Bachao Beti Padhao** and **Mission Shakti**:
* **Sukanya Samriddhi Yojana (SSY):** A specialized sovereign small-savings account that delivers the highest government-backed compound interest rate and triple-tax-exempt (EEE) status, transforming the girl child into a compounding financial asset.
* **Pradhan Mantri Matru Vandana Yojana (PMMVY):** A conditional cash transfer that partially compensates pregnant and lactating mothers for wage loss, incentivizing institutional hospital delivery and early childhood immunization.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Sukanya Samriddhi Yojana (SSY) & PMMVY Master Parameter Matrix',
        body: `### 1. Sukanya Samriddhi Yojana (SSY) Foundational Invariants

| Operational Parameter | Statutory Policy Rule | Critical Exam Invariant |
| :--- | :--- | :--- |
| **Account Opening Age** | From birth of girl child up to the age of **10 years**. | Grace period of 1 year was permitted only at inception. |
| **Account Limit per Family** | Maximum **1 account per girl child**, maximum **2 accounts per family**. | Exception: Up to 3 accounts permitted in case of **twins/triplets** born in first/subsequent birth. |
| **Deposit Limits** | Minimum **₹250 per financial year**; Maximum **₹1,50,000 (₹1.5 Lakh) per financial year**. | Default penalty of ₹50 per year if minimum ₹250 is not deposited. |
| **Deposit Period** | Deposits can be made for **15 years** from the date of account opening. | Account continues to earn interest after 15 years until maturity. |
| **Maturity Period** | Matures upon completion of **21 years** from account opening, or upon marriage of girl child after age 18. | Account cannot continue after marriage. |
| **Partial Withdrawal** | Up to **50% of the balance** at the end of preceding FY permitted after the girl reaches **18 years of age** or passes **10th standard** (for higher education). | Strict documentary proof of college admission required. |
| **Tax Treatment** | **Exempt-Exempt-Exempt (EEE) Status** under Section 80C of the Income Tax Act. | Investment, interest earned, and maturity withdrawal are all 100% tax-free! |
| **Current Interest Rate** | **8.2% per annum** (highest among all small savings schemes, compounded annually). | Notified quarterly by Ministry of Finance. |

### 2. Pradhan Mantri Matru Vandana Yojana (PMMVY 2.0)
Administered by the **Ministry of Women and Child Development (MoWCD)** as a component of **Samarthya (Mission Shakti)**:
* **Target:** Pregnant Women and Lactating Mothers (PW&LM) in unorganized sectors (excluding central/state government employees who receive paid maternity leave).
* **Maternity Benefit Structure:**
  * **First Child:** Total cash benefit of **₹5,000** disbursed in **2 installments**:
    1. *1st Installment (₹3,000):* Upon early pregnancy registration and at least one Ante-Natal Check-up (ANC) within 6 months.
    2. *2nd Installment (₹2,000):* Upon registration of child birth and completion of first cycle of primary immunizations (BCG, OPV, DPT, Hepatitis B).
    *(Combined with Janani Suraksha Yojana JSY incentive of ₹1,400, total assistance reaches ₹6,400).*
  * **Second Child Incentive (Girl Child Protection):**
    * In PMMVY 2.0, if the **second child is a GIRL**, the mother receives a direct one-time benefit of **₹6,000** in a single installment post-birth and immunization, discouraging sex-selective abortion.

### 3. Mission Shakti Unified Architecture
* **Sambal (Safety & Security):** 100% centrally funded. Includes One Stop Centres (OSC), Women Helpline (181), Beti Bachao Beti Padhao (BBBP), and Nari Adalats.
* **Samarthya (Empowerment):** Centrally sponsored (60:40). Includes Ujjawala (anti-trafficking), Swadhar Greh, Working Women Hostels (Sakhi Niwas), National Creche Scheme (Palna), and PMMVY.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Interest Compounding & PMMVY Conditional Verification Protocols',
        body: `### The SSY 15/21 Year Chronological Timeline
1. **Year 0:** Girl born. Parent opens account with ₹250.
2. **Years 1 to 15 (Active Deposit Window):** Parent deposits between ₹250 and ₹1.5 Lakh annually. Interest compounds annually at quarterly declared rates (currently 8.2%).
3. **Years 16 to 21 (Zero Deposit Compounding Window):** No further deposits permitted. The accumulated corpus continues to earn compounded annual interest automatically.
4. **Year 18 Threshold:** If girl reaches age 18, up to 50% can be withdrawn for university fees.
5. **Year 21 (Final Maturity):** Entire principal plus compounded interest is disbursed directly to the **daughter** (who is now the exclusive account operator).

### PMMVY DBT Verification Architecture
Implemented via the **PMMVY-CAS (Citizen Access Portal)**:
* Uses Mother and Child Protection (MCP) card telemetry.
* Direct authentication via Aadhaar-seeded bank account eliminates ghost beneficiaries.
* Validated directly against institutional birth registry and RCH (Reproductive and Child Health) portal.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Age Invariants & Deposit Limit Discrepancies',
        body: `### High-Yield Traps in Women & Child Schemes

1. **The SSY Deposit Window vs Maturity Window Trap:**
   * *Trap:* Thinking deposits must be made for 21 years.
   * *Truth:* Deposits are made for **15 years ONLY**. The account matures at **21 years** from opening!
   * *Trap:* Thinking the account matures when the girl turns 21. It matures **21 years after the date of account opening** (e.g. opened at age 5 $\\implies$ matures at age 26, unless married after 18).

2. **The PMMVY Second Child Gender Condition:**
   * *Trap:* Believing PMMVY gives ₹6,000 for any second child.
   * *Truth:* The second child benefit of ₹6,000 is granted **IF AND ONLY IF the second child is a GIRL**. If the second child is a boy, zero benefit is paid under PMMVY 2.0!

3. **PMMVY Exclusion Invariant:**
   * Women employed in Central / State Governments or Public Sector Undertakings (PSUs) are **strictly ineligible**, as they receive statutory paid maternity leave under the Maternity Benefit Act, 2017.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-08-1',
        statement: 'Sukanya Samriddhi Yojana allows deposits for 15 years from account opening, matures after 21 years, offers EEE tax exemption under Section 80C, and permits up to 50% partial withdrawal after age 18 for higher education.',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-25',
        excerpt: 'Ministry of Finance & Financial Inclusion: Sukanya Samriddhi Yojana small savings rules and tax exemption.',
      },
      {
        id: 'CLM-SCH-08-2',
        statement: 'Pradhan Mantri Matru Vandana Yojana (PMMVY 2.0) provides a cash benefit of ₹5,000 in two installments for the first child, and ₹6,000 in a single installment for the second child strictly if the newborn is a girl.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Ministry of Women and Child Development: Mission Shakti, PMMVY maternity benefits.',
      },
      {
        id: 'CLM-SCH-08-3',
        statement: 'Sukanya Samriddhi accounts can be opened for a girl child up to the age of 10 years, with a minimum annual deposit of ₹250 and a maximum limit of ₹1,50,000 per financial year.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-25',
        excerpt: 'SSY Parameters: Age up to 10 years, min deposit ₹250, max ₹1.5 Lakh, max 2 accounts per family.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Government Schemes & Small Savings',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Heavily tested in Prelims and Mains GA on SSY interest and PMMVY rules.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Women & Child Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Standard 2 questions in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Gender Issues & Social Safety Nets',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'POLICY_AND_DESCRIPTIVE',
        notes: 'Core content for descriptive questions on female labour force participation and child sex ratio.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper II — Welfare Schemes for Vulnerable Sections (Women & Children)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_SCHEME_ANALYSIS',
        notes: 'PMMVY and Mission Shakti components (Sambal vs Samarthya) regularly appear in Prelims.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security in India — Maternity Benefits & Child Welfare',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_CRITERIA',
        notes: 'Direct multiple-statement questions on PMMVY installments and SSY age rules.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper III — Women Empowerment & Child Welfare Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_AND_CENTRAL_SCHEMES',
        notes: 'Tested in 5-mark questions on maternity entitlements and Beti Bachao Beti Padhao.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on SSY age limit (10 yrs), min deposit (₹250), and PMMVY cash amount (₹5,000).',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Retail Banking — Government Small Savings Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ACCOUNT_OPENING_RULES',
        notes: 'Banks authorized to open SSY accounts must master deposit rules and interest crediting.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'SSY: Girl child age 0-10, min ₹250, max ₹1.5L/yr, 15 yrs deposit, 21 yrs maturity, 50% withdrawal at 18 for college, 8.2% interest, EEE tax status. PMMVY: ₹5,000 in 2 installments for 1st child; ₹6,000 for 2nd child ONLY IF A GIRL. Mission Shakti = Sambal + Samarthya.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Women & Child Welfare Blueprint: 1) Sukanya Samriddhi Yojana: Small-savings scheme under MoF; open up to 10 yrs age; deposit for 15 yrs; matures in 21 yrs; EEE tax exempt; 50% partial withdrawal at age 18. Maximum 2 accounts per family (triplets exception). 2) PMMVY 2.0: Under MoWCD (Mission Shakti - Samarthya); conditional DBT compensating wage loss. 1st child gets ₹5,000 (₹3k + ₹2k). 2nd child gets ₹6,000 only if a girl. 3) Sambal (Safety: OSC, BBBP) vs Samarthya (Empowerment: PMMVY, Palna).',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Gender & Child Welfare Architecture: 1) Financial Asset Building: Sukanya Samriddhi Yojana (compounding small savings to eliminate perceived female financial burden). 2) Maternal Wage Protection: PMMVY conditional cash transfer linked to ANC and childhood immunization milestones. 3) Institutional Umbrella: Mission Shakti divided into Sambal (Protection & Justice) and Samarthya (Economic Empowerment & Nutrition).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'Regarding the Sukanya Samriddhi Yojana (SSY), which of the following statements is INCORRECT?',
        options: [
          'An account can be opened for a girl child from her birth up to the age of 10 years.',
          'The account matures strictly 15 years after the date of opening.',
          'A maximum of two accounts are permitted in a family, with exceptions allowed for twins or triplets.',
          'Up to 50% of the balance can be withdrawn for the girl’s higher education once she reaches 18 years of age.'
        ],
        correctAnswer: 'The account matures strictly 15 years after the date of opening.',
        explanation: 'Statement B is INCORRECT. The deposit period is 15 years, but the account MATURES 21 years from the date of account opening (or upon the marriage of the girl after attaining 18 years). Statements A, C, and D are factually and statutory accurate.',
        trapExplanation: 'Confusing the 15-year deposit window with the 21-year maturity duration is the single most common exam trap in Sukanya Samriddhi Yojana questions.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'IBPS PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Confusing deposit tenure (15 years) with maturity duration (21 years).',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'Under Pradhan Mantri Matru Vandana Yojana (PMMVY 2.0), what is the direct cash benefit provided for the second child, and what is the mandatory condition attached to it?',
        options: [
          '₹5,000 in two installments, provided the child is immunized within 12 months.',
          '₹6,000 in a single installment, provided the second child is a girl.',
          '₹6,000 in three installments, applicable to all newborn second children.',
          '₹4,000 in a single installment, provided the delivery is conducted in a private hospital.'
        ],
        correctAnswer: '₹6,000 in a single installment, provided the second child is a girl.',
        explanation: 'Under PMMVY 2.0 (Mission Shakti), the benefit for the second child is specifically engineered to improve the Child Sex Ratio (CSR). A direct cash benefit of ₹6,000 is given in a single installment post-birth and immunization IF AND ONLY IF the second child is a girl child. If the second child is a boy, zero cash benefit is paid under PMMVY.',
        trapExplanation: 'Assuming the second child benefit applies universally to boys and girls is the primary trap.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Gender contingency on second child maternity entitlement.',
      },
    ],
  },
  {
    id: 'CON-SCH-09',
    slug: 'decentralized-renewable-energy-pm-kusum-pm-surya-ghar-muft-bijli-ujjwala-2',
    title: 'Decentralized Renewable Energy & Solarization: PM-KUSUM (Components A, B, C), PM Surya Ghar: Muft Bijli Yojana & Ujjwala 2.0',
    shortDefinition: 'Clean energy transition and rural solarization schemes: PM-KUSUM 3-component agricultural solarization framework, PM Surya Ghar: Muft Bijli Yojana (₹75,021 Cr outlay, 300 free units, rooftop solar subsidies), and clean cooking access under Pradhan Mantri Ujjwala Yojana 2.0.',
    difficulty: 'ADVANCED',
    order: 9,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'De-Dieselizing Indian Agriculture & Democratizing Rooftop Solar',
        body: `For decades, two energy challenges have drained public finances and environmental health across India:
1. **The Agrarian Groundwater-Power Subsidy Nexus:** State power distribution companies (DISCOMs) lose tens of thousands of crores supplying free, unmetered agricultural electricity, prompting farmers to run inefficient pumps during the middle of the night. Where grid power is absent, farmers burn billions of litres of expensive diesel, driving emissions and eroding crop margins.
2. **Thermal Grid Dependency in Urban Households:** Middle-class and lower-income homes face escalating monthly electricity bills, while coal-fired power plants generate over 70% of India's electricity.

To solve both crises at once, the **Ministry of New and Renewable Energy (MNRE)** launched two flagship decentralized solar revolutions:
* **PM-KUSUM:** Transforming farmers from passive energy consumers into solar power producers (*Urjadata*), solarizing water pumps and creating rural clean power grids.
* **PM Surya Ghar: Muft Bijli Yojana:** A massive ₹75,000+ Crore initiative delivering up to **300 units of free electricity per month** to 1 Crore households via direct rooftop solar capital subsidies.
Concurrently, **PM Ujjwala Yojana 2.0** provides clean cooking LPG to eliminate indoor smoke pollution.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'PM-KUSUM Architecture & PM Surya Ghar Subsidy Specifications',
        body: `### 1. PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan)
Administered by the **Ministry of New and Renewable Energy (MNRE)**, extended up to **March 31, 2026**:

| Component | Target Capacity | Core Operational Mechanism | Financial Subsidy Architecture |
| :--- | :--- | :--- | :--- |
| **Component A** | **10,000 MW** | Setting up small decentralized ground-mounted, grid-connected solar power plants (capacities **500 kW to 2 MW**) on barren/fallow agricultural land by farmers. | DISCOMs purchase power at feed-in tariffs (PPA). Procurement-based incentive (PBI) of ₹0.40/kWh paid to DISCOMs for 5 years. |
| **Component B** | **14 Lakh (1.4 million)** pumps | Installation of standalone solar agriculture pumps (capacities **up to 7.5 HP**) to replace diesel pumps in off-grid rural areas. | • **30% Central Financial Assistance (CFA)**.<br>• **30% State Subsidy**.<br>• **40% Farmer share** (up to 30% available via bank loan; farmer pays only 10% cash). |
| **Component C** | **35 Lakh** pumps | **Solarization of Grid-Connected Agriculture Pumps**: Individual Pump Solarization (IPS) and **Feeder Level Solarization (FLS)**. | CFA of 30% (50% for NE/Hills). Farmers sell excess solar energy back to DISCOMs at pre-fixed tariffs. |

### 2. PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar Revolution)
Launched by the Prime Minister on **February 13, 2024**, with a total financial outlay of **₹75,021 Crore**:
* **National Objective:** Provide up to **300 units of free electricity every month** to **1 Crore (10 million) residential households** by installing rooftop solar systems.
* **Direct Central Financial Assistance (CFA) Subsidy Slab:**
  * **1 kW System:** **₹30,000** fixed capital subsidy.
  * **2 kW System:** **₹60,000** fixed capital subsidy.
  * **3 kW System and Above:** **₹78,000** capped maximum capital subsidy.
* **Collateral-Free Concessional Financing:** Commercial banks provide collateral-free loans up to 3 kW at concessional interest rates capped at **Repo Rate + 0.5%** (currently approx. 7.0%).
* **National Portal & Model Solar Villages:** Implemented via the unified *pmsuryaghar.gov.in* portal. Creates 1 "Model Solar Village" in every district.

### 3. Pradhan Mantri Ujjwala Yojana 2.0 (PMUY 2.0)
Administered by the **Ministry of Petroleum and Natural Gas (MoPNG)**:
* Target: Provide deposit-free LPG connections to impoverished adult women in BPL households.
* **Ujjwala 2.0 Enrolment Advantages:**
  * Self-declaration based proof of address for migrant workers (no ration card required).
  * **Free first LPG cylinder refill** PLUS a **free double-burner hotplate (stove)**.
  * Ongoing targeted subsidy of **₹300 per 14.2 kg cylinder** (up to 12 refills per year) directly credited via DBTL (PAHAL).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Feeder Level Solarization (FLS) & Net Metering Workflow',
        body: `### Why Feeder Level Solarization (FLS) Under PM-KUSUM Component C is Revolutionizing DISCOM Finances
Instead of installing millions of small individual solar panels on dispersed farm wells (which entails high capital costs and maintenance headaches):
1. The DISCOM identifies an entire **dedicated agricultural feeder line** supplying power to 100–200 farm tubewells.
2. A single utility-scale solar plant (e.g. 1 MW to 5 MW) is constructed right next to the local 33/11 kV distribution sub-station.
3. During daytime (when the sun shines), solar power is fed directly into the agricultural feeder at ultra-low cost (approx. ₹2.20/kWh vs thermal grid cost of ₹6.00/kWh).
4. Farmers get uninterrupted, high-voltage daytime power for irrigation without burning diesel or operating dangerous night pumps.
5. DISCOMs eliminate agricultural power losses and drastically reduce their annual subsidy burden.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Ministry Mismatches & Subsidy Ceilings',
        body: `### Critical Examiner Traps in Energy & Welfare Schemes

1. **The Nodal Ministry Trap for PM-KUSUM:**
   * *Trap:* Because PM-KUSUM has "Kisan" in its name and deals with agricultural pumps, students assume it belongs to the *Ministry of Agriculture & Farmers Welfare*.
   * *Truth:* PM-KUSUM is administered strictly by the **Ministry of New and Renewable Energy (MNRE)**!

2. **PM Surya Ghar Subsidy Ceiling Trap:**
   * *Trap:* Assuming that installing a 5 kW or 10 kW residential rooftop solar plant yields proportional subsidies (e.g. ₹1.5 Lakh).
   * *Truth:* The central capital subsidy is **strictly capped at ₹78,000 for 3 kW and above**. Any capacity installed beyond 3 kW receives zero additional central financial assistance.

3. **Ujjwala Connection Ownership Rule:**
   * LPG connections under Ujjwala 2.0 can **ONLY be released in the name of an adult woman member of the household**. Connections cannot be issued to male heads of the family.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-09-1',
        statement: 'PM-KUSUM is implemented by the Ministry of New and Renewable Energy (MNRE) across three components: Component A (10,000 MW decentralized solar plants), Component B (14 Lakh standalone solar pumps), and Component C (35 Lakh grid-connected pump solarization).',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Master Trap 4: PM-KUSUM = Ministry of New & Renewable Energy, NOT Agriculture Ministry.',
      },
      {
        id: 'CLM-SCH-09-2',
        statement: 'PM Surya Ghar: Muft Bijli Yojana provides up to 300 units of free electricity monthly to 1 Crore households with direct subsidies of ₹30,000 for 1 kW, ₹60,000 for 2 kW, and capped at ₹78,000 for 3 kW and above.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-1',
        excerpt: 'Agriculture, Energy & Water Resources: PM Surya Ghar Muft Bijli Yojana rooftop solar subsidy slabs.',
      },
      {
        id: 'CLM-SCH-09-3',
        statement: 'Under Pradhan Mantri Ujjwala Yojana 2.0, deposit-free LPG connections are issued exclusively in the name of adult women from BPL households, complete with a free first refill and a free gas stove.',
        claimType: 'POLICY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Ujjwala clean cooking access and gender-targeted LPG connection allocations.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Energy & Environment Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FINANCIAL_SPECIFICATION',
        notes: 'Heavily tested in 2024-2026 on PM Surya Ghar outlay (₹75,021 Cr) and KUSUM components.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Renewable Energy Policies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FINANCIAL_SPECIFICATION',
        notes: 'High-frequency question in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Sustainable Development & Environmental Issues',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'POLICY_DECONSTRUCTION_AND_ANALYSIS',
        notes: 'Core topic for descriptive questions on energy transition and DISCOM turnaround.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Energy, Infrastructure & Renewable Technology',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'PM-KUSUM feeder-level solarization and solar pump capacity regularly tested in Prelims.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Developmental Schemes — Energy & Environment',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Tested on subsidy percentages and pump capacity thresholds (7.5 HP).',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I & III — Rajasthan Energy Sector & Solar Policies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_RENEWABLE_INTEGRATION',
        notes: 'Rajasthan leads India in solar capacity; KUSUM implementation is a top RAS question.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on PM Surya Ghar free units (300 units) and MNRE ministry ownership.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Priority Sector Lending — Renewable Energy Finance',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'REGULATORY_PSL_LIMITS',
        notes: 'Bank loans up to ₹30 Crore to borrowers for solar/biomass generators qualify for PSL.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PM-KUSUM: MNRE (not Agri!), Comp A (10k MW plants), Comp B (14L standalone pumps up to 7.5 HP), Comp C (35L grid pumps / FLS). PM Surya Ghar: ₹75,021 Cr outlay, 1 Cr homes, 300 free units/mo. Subsidies: 1kW=₹30k, 2kW=₹60k, 3kW+=₹78k (cap). Ujjwala 2.0 = adult women only, free 1st refill + stove.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Decentralized Clean Energy Blueprint: 1) PM-KUSUM (MNRE): De-dieselizes agriculture through Component A (500kW-2MW solar plants on fallow land), Component B (off-grid solar pumps up to 7.5 HP, 30% Centre + 30% State + 10% farmer cash), and Component C (feeder level solarization). Extended to March 2026. 2) PM Surya Ghar: Muft Bijli Yojana: Launched Feb 2024; ₹75,021 Cr outlay; rooftop solar delivering up to 300 free units/mo to 1 Crore homes. Max subsidy capped at ₹78,000 for 3kW+. Concessional loans at Repo+0.5%. 3) Ujjwala 2.0: MoPNG; free LPG connection for adult BPL women with free refill and stove.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Energy Transition Architecture: 1) Rural Power Decoupling: PM-KUSUM shifts irrigation from night grid electricity to daytime solar, rescuing DISCOMs via Feeder Level Solarization. 2) Urban Prosumer Revolution: PM Surya Ghar transforms 1 Crore residential homes into micro-generators (Net Metering). 3) Indoor Environmental Justice: PM Ujjwala 2.0 eradicates biomass smoke in rural kitchens.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'Under PM Surya Ghar: Muft Bijli Yojana, what is the maximum central capital subsidy that a residential household can receive for installing a rooftop solar plant of 4 kW capacity?',
        options: ['₹60,000', '₹78,000', '₹90,000', '₹1,20,000'],
        correctAnswer: '₹78,000',
        explanation: 'Under PM Surya Ghar: Muft Bijli Yojana, the subsidy slab provides ₹30,000 for 1 kW, ₹60,000 for 2 kW, and is strictly capped at ₹78,000 for systems of 3 kW capacity and above. Therefore, even for a 4 kW (or larger) residential system, the maximum central financial assistance is capped at ₹78,000.',
        trapExplanation: 'The common trap is assuming that because 2 kW gets ₹60,000, 4 kW must receive double that (₹1,20,000). The scheme rules explicitly cap central subsidy at ₹78,000 for 3 kW+.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Assuming linear subsidy scaling beyond the 3 kW regulatory cap.',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'Consider the following statements regarding the PM-KUSUM Scheme:\n1. It is administered by the Ministry of Agriculture and Farmers Welfare.\n2. Component B supports the installation of standalone solar agriculture pumps of capacities up to 7.5 HP.\n3. Under Component A, individual farmers can set up renewable energy power plants of capacities between 500 kW and 2 MW.\nWhich of the statements given above is/are correct?',
        options: ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        correctAnswer: '2 and 3 only',
        explanation: 'Statement 1 is incorrect: PM-KUSUM is administered by the Ministry of New and Renewable Energy (MNRE), NOT the Ministry of Agriculture. Statement 2 is correct: Component B covers standalone solar pumps up to 7.5 HP. Statement 3 is correct: Component A covers decentralized grid-connected solar power plants of capacity 500 kW to 2 MW on agricultural land.',
        trapExplanation: 'The classic trap is associating PM-KUSUM with the Ministry of Agriculture due to the word "Kisan" in its name.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Nodal ministry trap in agrarian renewable schemes.',
      },
    ],
  },
  {
    id: 'CON-SCH-10',
    slug: 'national-education-architecture-nep-2020-pm-shri-schools-nipun-bharat-mission',
    title: 'National Education Architecture & Foundational Literacy: NEP 2020 Implementation, PM SHRI Schools & NIPUN Bharat Mission',
    shortDefinition: 'Structural transformation of Indian education: National Education Policy (NEP) 2020 5+3+3+4 curricular model, PM SHRI Schools exemplar network (14,500+ schools), and foundational literacy and numeracy targets under NIPUN Bharat.',
    difficulty: 'ADVANCED',
    order: 10,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Pivoting from Rote Memorization to Foundational Competence',
        body: `For over three decades, India's schooling system operated under the rigid **10+2 structure** established by the 1986 National Policy on Education. In practice, this legacy framework suffered from three devastating pedagogical failures:
1. **Neglect of Early Childhood Care (Ages 3–6):** Crucial formative years of neurological development were excluded from formal school curriculum.
2. **The Foundational Learning Crisis:** Annual ASER surveys repeatedly revealed that nearly 50% of Grade 5 children could not read a simple Grade 2 text or solve basic subtraction.
3. **Rigid Academic Silos:** Arbitrary walls separated Arts, Science, and Commerce, while vocational education was stigmatized as a fallback for academic dropouts.

To overhaul this architecture from first principles, the government unveiled the **National Education Policy (NEP) 2020**, replacing the 10+2 system with an integrated **5+3+3+4 curricular design**.

To anchor this transformation on the ground, the state deployed **PM SHRI Schools** (exemplar smart schools showcasing NEP pedagogy) and the **NIPUN Bharat Mission**, which establishes a national mission to guarantee that every single child in India attains **Foundational Literacy and Numeracy (FLN) by Grade 3**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'NEP 2020 Curricular Matrix, PM SHRI & NIPUN Bharat Invariants',
        body: `### 1. The 5+3+3+4 Pedagogical Structure of NEP 2020

| Curricular Stage | Age Group | Schooling Classes | Pedagogical Focus |
| :--- | :--- | :--- | :--- |
| **1. Foundational Stage (5 Years)** | Ages **3 to 8** | 3 years Pre-school / Anganwadi (*Balvatika*) + Classes 1 and 2 | Play-based, discovery-oriented learning, mother tongue / regional language medium, no formal exams. |
| **2. Preparatory Stage (3 Years)** | Ages **8 to 11** | Classes 3 to 5 | Gradual transition to interactive classroom learning, basic reading, writing, speaking, numeracy, physical education. |
| **3. Middle Stage (3 Years)** | Ages **11 to 14** | Classes 6 to 8 | Subject-oriented experiential learning in sciences, mathematics, humanities; introduction of **vocational crafts (10 bagless days)**. |
| **4. Secondary Stage (4 Years)** | Ages **14 to 18** | Classes 9 to 12 (Two phases: 9-10 and 11-12) | Multidisciplinary study, critical thinking, flexibility in subject choices (no hard separation of Arts, Science, Commerce). |

### 2. PM SHRI Schools (PM Schools for Rising India)
* **Outlay & Scope:** Central Sector / Centrally Sponsored scheme with total project cost of **₹27,360 Crore** over 5 years (FY 2022–23 to 2026–27).
* **Network:** Upgrading **over 14,500 existing schools** managed by Central / State / UT governments (including Kendriya Vidyalayas and Jawahar Navodaya Vidyalayas) into **exemplar institutions**.
* **Key Features:**
  * Green Schools with solar panels, LED lighting, nutrition gardens, and waste management.
  * Modern pedagogy emphasizing experiential learning, smart classrooms, and vocational labs.
  * Act as mentorship hubs for surrounding neighborhood schools.

### 3. NIPUN Bharat Mission (National Initiative for Proficiency in Reading with Understanding and Numeracy)
* Administered by the **Department of School Education and Literacy (Ministry of Education)** under Samagra Shiksha.
* **National Target:** Ensure that every child in India achieves desired learning competencies in **Foundational Literacy and Numeracy (FLN) by the end of Grade 3 by 2026–27**.
* **Lakshyas (Learning Goals):**
  * *Oral Reading Fluency:* Read with comprehension at least 45–60 words per minute by Grade 2; at least 60 words per minute by Grade 3.
  * *Numeracy Competence:* Perform basic addition and subtraction up to 99 by Grade 2; addition/subtraction up to 999 and multiplication tables up to 10 by Grade 3.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'PARAKH National Assessment Centre & Academic Bank of Credits (ABC)',
        body: `### Key Institutional Innovations under NEP 2020
1. **PARAKH (Performance Assessment, Review, and Analysis of Knowledge for Holistic Development):**
   * Setup as an independent assessment unit within **NCERT**.
   * Establishes standardized norms, benchmarks, and guidelines for school student assessment across all state and central examination boards (CBSE, ICSE, State Boards) to remove board evaluation discrepancies.
2. **Academic Bank of Credits (ABC) & APAAR ID:**
   * In higher education, students receive an **Automated Permanent Academic Account Registry (APAAR / One Nation One Student ID)**.
   * Digistores academic credits earned across different higher education institutions, enabling flexible multiple entry and exit points (Certificate at 1 yr, Diploma at 2 yrs, Bachelor's Degree at 3 yrs, Honours with Research at 4 yrs).
3. **National Professional Standards for Teachers (NPST):** Sets transparent merit-based standards for teacher recruitment and continuous professional development.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Foundational Age Spans & Gross Enrollment Targets',
        body: `### High-Frequency Examiner Traps in Education Policies

1. **The 5+3+3+4 Age Alignment Trap:**
   * *Trap:* Assuming the "5" corresponds to Classes 1 to 5.
   * *Truth:* The Foundational "5" corresponds to **3 years of pre-school (ages 3–6) PLUS Classes 1 and 2 (ages 6–8)**. Class 3 begins in the Preparatory stage!

2. **Gross Enrollment Ratio (GER) Targets under NEP 2020:**
   * **100% GER in School Education (Pre-school to Secondary):** Target year is **2030**.
   * **50% GER in Higher Education:** Target year is **2035** (up from ~28% currently).
   * *Trap:* Mixing up the 2030 school target with the 2035 higher education target!

3. **Public Investment Target in Education:**
   * NEP 2020 reaffirms the historic Kothari Commission goal of raising public investment in education (Centre + States combined) to **6% of GDP** (currently hovering around 4.1%–4.4%).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-10-1',
        statement: 'NEP 2020 replaces the legacy 10+2 school education structure with an integrated 5+3+3+4 design covering ages 3 to 18 across Foundational, Preparatory, Middle, and Secondary stages.',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '02_IIBF_Banking_Regulations_Master.md#note-14',
        excerpt: 'Synthesis of Education / NEP 2020: 5+3+3+4 curricular model and vocational integration.',
      },
      {
        id: 'CLM-SCH-10-2',
        statement: 'NIPUN Bharat Mission establishes a statutory mandate to ensure every child achieves Foundational Literacy and Numeracy (FLN) by the end of Grade 3 by the target year 2026–27.',
        claimType: 'POLICY_TARGET',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Education Welfare: NIPUN Bharat and Samagra Shiksha framework.',
      },
      {
        id: 'CLM-SCH-10-3',
        statement: 'The PM SHRI scheme upgrades over 14,500 existing central and state government schools into green, experiential exemplar institutions showcasing NEP 2020 pedagogy.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'PM SHRI Schools: Central exemplar network implementing NEP 2020 standards.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — National Education Policy Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Heavily tested on PM SHRI school counts and NIPUN Bharat target years.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Education & Social Sector',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Standard questions on NEP 2020 targets.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Human Development: Education and Skill Development',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for 15-mark descriptive essays on human capital and learning deficits.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper II — Issues Relating to Development and Management of Education',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'PARAKH, APAAR ID, and Foundational stage curricular rules regularly appear in Prelims and Mains.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security & Developmental Policies — Education',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Tested on age divisions and gross enrollment targets.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper III — Education Policies & Rajasthan Samagra Shiksha',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_AND_CENTRAL_SCHEMES',
        notes: 'Tested on PM SHRI schools in Rajasthan and FLN initiatives.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Policies',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on 5+3+3+4 formula and 6% GDP target.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Priority Sector Lending — Education Loans',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'REGULATORY_PSL_LIMITS',
        notes: 'Education loans up to ₹20 Lakh qualify under Priority Sector Lending.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NEP 2020: 5+3+3+4 structure (Foundational 3-8, Prep 8-11, Middle 11-14, Secondary 14-18). NIPUN Bharat: FLN by Grade 3 by 2026-27. PM SHRI: 14,500+ exemplar schools. GER targets: 100% in school by 2030, 50% in higher ed by 2035. Education target = 6% of GDP.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'National Education Framework: 1) NEP 2020: Replaces 10+2 with 5+3+3+4; integrates early childhood education (ages 3-6); regional language instruction; no hard separation between arts/science; 10 bagless vocational days in middle school. 2) PM SHRI: ₹27,360 Cr scheme to modernize 14,500+ schools as green, experiential exemplar hubs. 3) NIPUN Bharat: Department of School Education mission ensuring every child achieves reading comprehension and basic math by Grade 3 by 2026-27. 4) PARAKH: National assessment center setting standard board evaluation norms.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Education Architecture Hierarchy: 1) Curricular Paradigm: 5+3+3+4 (Ages 3-8, 8-11, 11-14, 14-18). 2) National Targets: 100% School GER by 2030; 50% Higher Ed GER by 2035; Public spending at 6% of GDP. 3) Foundational Literacy: NIPUN Bharat FLN milestones by Grade 3. 4) Exemplar Infrastructure: PM SHRI Schools network. 5) Digital Lifelong Ledger: APAAR ID & Academic Bank of Credits.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'Under the 5+3+3+4 curricular structure of the National Education Policy (NEP) 2020, what does the initial "Foundational Stage" of 5 years comprise?',
        options: [
          'Classes 1 to 5 for children aged 6 to 11 years',
          '3 years of Anganwadi / Pre-school followed by Classes 1 and 2 for children aged 3 to 8 years',
          '2 years of Pre-school followed by Classes 1, 2, and 3 for children aged 4 to 9 years',
          'Classes 1 to 5 with mandatory computer programming education'
        ],
        correctAnswer: '3 years of Anganwadi / Pre-school followed by Classes 1 and 2 for children aged 3 to 8 years',
        explanation: 'The Foundational Stage under NEP 2020 consists of 5 years of flexible, multilevel, play/activity-based learning. It comprises 3 years of early childhood care and education (ECCE) in Anganwadis or pre-schools (Balvatika) for ages 3–6, followed by Classes 1 and 2 in primary school for ages 6–8.',
        trapExplanation: 'The common trap is assuming the number 5 represents traditional primary school (Classes 1 to 5).',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Equating the Foundational 5 with traditional Primary Classes 1-5.',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'What is the primary objective and statutory target deadline of the NIPUN Bharat Mission launched by the Ministry of Education?',
        options: [
          'Providing free tablets and laptops to all secondary school students by 2025',
          'Achieving universal Foundational Literacy and Numeracy (FLN) for every child by the end of Grade 3 by 2026–27',
          'Ensuring 100% Gross Enrollment Ratio in Higher Education by 2030',
          'Mandating coding and artificial intelligence curriculum in all primary schools by 2024'
        ],
        correctAnswer: 'Achieving universal Foundational Literacy and Numeracy (FLN) for every child by the end of Grade 3 by 2026–27',
        explanation: 'The NIPUN Bharat Mission (National Initiative for Proficiency in Reading with Understanding and Numeracy) was launched under Samagra Shiksha with the explicit objective of ensuring that every child in the country necessarily attains foundational literacy and numeracy by the end of Grade 3 by 2026–27.',
        trapExplanation: 'Confusing the 2026–27 FLN deadline with the 2030 100% School GER target or the 2035 50% Higher Education GER target is the classic trap.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Conflating NIPUN Bharat FLN Grade 3 deadline with general GER targets.',
      },
    ],
  },
  {
    id: 'CON-SCH-11',
    slug: 'national-vocational-skilling-pmkvy-4-skill-india-naps-apprenticeship',
    title: 'National Vocational Skilling & Apprenticeship: Skill India Mission, PMKVY 4.0 & National Apprenticeship Promotion Scheme (NAPS)',
    shortDefinition: 'Vocational training and youth employability ecosystem: Skill India Mission, PMKVY 4.0 (Industry 4.0 courses, AI/Drones, on-the-job training), National Apprenticeship Promotion Scheme (NAPS-2 stipend subsidies), and Skill India Digital Hub.',
    difficulty: 'INTERMEDIATE',
    order: 11,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Bridging the Employability Chasm: Transforming Degrees into Industrial Skills',
        body: `Every year, millions of Indian youth graduate from colleges holding academic degrees in humanities, science, and engineering, only to find that corporate employers deem them unemployable. Industry reports routinely highlight that over 70% of engineering and general graduates lack the practical, job-ready skills demanded by modern industrial shop-floors.

This paradox—where millions of youth are desperate for jobs while industries complain of acute skilled labour shortages—stems from a deep historical disconnect between textbook curricula and workplace realities.

To bridge this chasm, the **Ministry of Skill Development and Entrepreneurship (MSDE)** and the **National Skill Development Corporation (NSDC)** launched the **Skill India Mission**. 

Through **PMKVY 4.0 (Pradhan Mantri Kaushal Vikas Yojana 4.0)**, the state has pivoted from classroom-based theory to **Industry 4.0 technologies** (AI, robotics, IoT, drones, 3D printing) combined with subsidized industrial internships under the **National Apprenticeship Promotion Scheme (NAPS)**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'PMKVY 4.0 & NAPS-2 Architecture, Stipends & Digital Infrastructure',
        body: `### 1. Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY 4.0)
Implemented by the **National Skill Development Corporation (NSDC)** under MSDE:
* **Key Strategic Shifts in Version 4.0:**
  * **Demand-Driven Skilling:** Training programs mapped strictly to district-level skill gap studies and corporate hiring pledges, eliminating supply-push training waste.
  * **FutureSkills & Industry 4.0 Integration:** Specialized courses in Artificial Intelligence (AI), Machine Learning, Robotics, Mechatronics, Internet of Things (IoT), Drone piloting and maintenance, 5G network maintenance, and Green Energy / Solar technician roles.
  * **Mandatory On-the-Job Training (OJT):** Training partners must incorporate minimum 30% to 50% practical workplace exposure on real factory floors.
* **Core Skilling Components:**
  1. *Short Term Training (STT):* 200 to 600 hours of formal NSQF-aligned skilling for school/college dropouts and unemployed youth.
  2. *Recognition of Prior Learning (RPL):* Formally assessing, certifying, and standardizing the skills of informal craftspersons and workers (with ₹500 monetary reward and accidental insurance).
  3. *Special Projects:* Tailored skilling for vulnerable demographics (tribal groups, jail inmates, persons with disabilities).

### 2. National Apprenticeship Promotion Scheme (NAPS-2)
Administered by the Directorate General of Training (DGT) under MSDE:
* **Objective:** Incentivize commercial establishments (MSMEs and corporate enterprises) to hire technical apprentices under the Apprentices Act, 1961.
* **Stipend Support Mechanism:**
  * Government directly reimburses **25% of prescribed stipend** paid to apprentices, capped at a maximum of **₹1,50,00 (₹1,500) per month per apprentice**.
  * Reimbursed directly to the apprentice's bank account via Direct Benefit Transfer (DBT).
* **Target:** Train over 46 Lakh apprentices across manufacturing and services.

### 3. Skill India Digital Hub (SIDH)
A Digital Public Infrastructure (DPI) integrating:
* Unified portal for skill discovery, course enrollment, apprenticeship matching, and entrepreneurship loans.
* Issues digitally verifiable, tamper-proof **Skill Badges and NSQF Certificates** integrated directly into DigiLocker.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'National Skills Qualifications Framework (NSQF) Competency Levels',
        body: `### The NSQF Competency Hierarchy (Levels 1 to 10)
To establish universal equivalency between formal academic schooling and vocational skills, the government organized all skills under the **National Skills Qualifications Framework (NSQF)**:
* **Level 1 to 3:** Entry-level vocational awareness and manual operational skills (semi-skilled trade helpers).
* **Level 4:** Standard ITI (Industrial Training Institute) certificate holder / skilled machine operator (equivalent to Class 10/12 vocational certification).
* **Level 5 to 6:** Advanced Polytechnic Diploma / Supervisor level (equivalent to early college undergraduate diplomas).
* **Level 7:** Bachelor of Vocation (B.Voc) / Professional Engineer (equivalent to academic Bachelor's degree).
* **Level 8 to 10:** Master's degree, Post-graduate specialization, and Doctoral / Master Craftsman level.
*(NEP 2020 enables seamless credit transfer between academic schooling and NSQF vocational levels via the Academic Bank of Credits).*`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Stipend Caps & Ministry Boundaries',
        body: `### Critical Examiner Traps in Skilling & Employment Schemes

1. **NAPS Stipend Reimbursement Cap Trap:**
   * *Trap:* Assuming the government pays the entire apprentice stipend, or pays 50%.
   * *Truth:* The state reimburses strictly **25% of the stipend**, and that reimbursement is strictly **capped at ₹1,500 per month**. The employer must pay the remaining 75%.

2. **Nodal Ministry Distinction:**
   * Skill India, PMKVY 4.0, and NAPS belong to the **Ministry of Skill Development and Entrepreneurship (MSDE)**.
   * Do NOT confuse with the *Ministry of Labour and Employment (MoLE)*, which manages EPFO, ESIC, and the e-Shram portal.

3. **Recognition of Prior Learning (RPL):**
   * *Trap:* Believing RPL is a training program for beginners.
   * *Truth:* RPL does NOT provide fresh training; it provides formal **testing and certification for existing informal workers** (e.g. self-taught carpenters or masons) to validate their skills.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-11-1',
        statement: 'PMKVY 4.0 is implemented by the National Skill Development Corporation (NSDC) under MSDE, prioritizing Industry 4.0 courses such as AI, robotics, mechatronics, and drones with mandatory on-the-job training.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Bucket 1 Flagship: PMKVY 4.0 / MGNREGS addresses skills and youth employment challenges.',
      },
      {
        id: 'CLM-SCH-11-2',
        statement: 'Under the National Apprenticeship Promotion Scheme (NAPS-2), the government directly reimburses 25% of the prescribed stipend, capped at ₹1,500 per month per apprentice, via DBT.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-28',
        excerpt: 'MSME, Industry & Commerce: National Apprenticeship Promotion Scheme stipend subsidy architecture.',
      },
      {
        id: 'CLM-SCH-11-3',
        statement: 'The National Skills Qualifications Framework (NSQF) organizes qualifications according to a series of levels of knowledge, skills, and aptitude from Level 1 to Level 10, enabling horizontal and vertical mobility.',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '02_IIBF_Banking_Regulations_Master.md#note-14',
        excerpt: 'Vocational integration and NSQF framework alignment with formal educational degrees.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Skilling Schemes & Youth Employment',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Tested in Prelims and Mains on PMKVY 4.0 features.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Employment Policies',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Frequent questions on NAPS stipend limits.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Employment Generation & Skill Development in India',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'POLICY_DECONSTRUCTION_AND_DESCRIPTIVE',
        notes: 'Core topic for descriptive essays on youth demographic dividend and vocational skilling.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper II & III — Government Policies / Employment & Skill Development',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'Regularly tested on NSQF levels, RPL, and apprenticeship promotion.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security in India — Apprenticeship & Skilling',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'The Apprentices Act, 1961 and NAPS-2 are central to APFC/EPFO.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Human Resource Development & Skill Development Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_AND_CENTRAL_SCHEMES',
        notes: 'Tested in 5-mark and 10-mark questions on Rajasthan Skill and Livelihoods Development Corporation (RSLDC).',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on MSDE ministry ownership and PMKVY 4.0 components.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Priority Sector Lending — Vocational Credit',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'BANK_CREDIT_LIMITS',
        notes: 'Loans to individuals for educational/vocational purposes qualify under PSL.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Skill India: MSDE + NSDC. PMKVY 4.0 focuses on Industry 4.0 (AI, Drones, Robotics), On-the-Job Training (OJT), and Recognition of Prior Learning (RPL). NAPS-2: Government reimburses 25% of stipend (max ₹1,500/month/apprentice) via DBT. NSQF = 10 competency levels.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'National Skilling Framework: 1) PMKVY 4.0: Administered by MSDE through NSDC; shifts to demand-driven skilling, Industry 4.0 future-skills (AI, mechatronics, drones), and mandatory on-the-job training. Includes Short Term Training (STT) and Recognition of Prior Learning (RPL). 2) NAPS-2: Incentivizes employers to hire apprentices by subsidizing 25% of stipend up to ₹1,500/month. 3) NSQF: 10 levels aligning vocational skills with academic degrees. 4) SIDH: Unified digital hub for skill badges and job matching.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Skilling & Employability Architecture: 1) Institutional Framework: MSDE (Policy) -> NSDC (Execution) -> Sector Skill Councils (Industry mapping). 2) Programmatic Triad: PMKVY 4.0 (Fresh skilling & RPL) + NAPS-2 (Apprenticeship stipend support) + Jan Shikshan Sansthan (Grassroots community skilling). 3) Digital Backbone: Skill India Digital Hub (SIDH) issuing verifiable DigiLocker credentials.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'Under the National Apprenticeship Promotion Scheme (NAPS-2), what percentage of the prescribed stipend is reimbursed by the Government of India, and what is the maximum monthly ceiling per apprentice?',
        options: [
          '50% of stipend, up to ₹3,000 per month',
          '25% of stipend, up to ₹1,500 per month',
          '33% of stipend, up to ₹2,000 per month',
          '100% of stipend, up to ₹5,000 per month'
        ],
        correctAnswer: '25% of stipend, up to ₹1,500 per month',
        explanation: 'Under NAPS-2, the Government of India provides financial support to employers by sharing 25% of the prescribed stipend paid to apprentices, subject to a maximum ceiling of ₹1,500 per month per apprentice, transferred directly via Direct Benefit Transfer (DBT) to the apprentice’s account.',
        trapExplanation: 'Assuming a 50% share or higher subsidy ceilings (e.g. ₹3,000) is the standard examiner trap.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Exact stipend sharing ratio (25%) and ceiling cap (₹1,500).',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'What is the primary function of the Recognition of Prior Learning (RPL) component under PMKVY?',
        options: [
          'Providing a 3-year diploma in engineering for undergraduate students',
          'Formally assessing and certifying the existing informal skills of experienced workers without requiring long classroom training',
          'Distributing free laptops to all students admitted to Industrial Training Institutes (ITIs)',
          'Extending collateral-free microloans up to ₹10 Lakh to first-generation entrepreneurs'
        ],
        correctAnswer: 'Formally assessing and certifying the existing informal skills of experienced workers without requiring long classroom training',
        explanation: 'Recognition of Prior Learning (RPL) is a key component of PMKVY designed to evaluate, assess, and formally certify the skills acquired by workers informally through experiential learning (e.g. traditional carpenters, plumbers, mechanics), aligning them with formal NSQF standards and granting them formal certificates.',
        trapExplanation: 'Confusing RPL with formal fresh training programs (STT) or loan schemes (MUDRA) is the common error.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Confusing skill assessment (RPL) with fresh skill training (STT).',
      },
    ],
  },
  {
    id: 'CON-SCH-12',
    slug: 'multi-modal-infrastructure-pm-gatishakti-7-engines-bharatnet-logistics-efficiency',
    title: 'Multi-Modal Infrastructure & Digital Public Infrastructure: PM GatiShakti National Master Plan (7 Engines), BharatNet & Logistics Efficiency',
    shortDefinition: 'National multi-modal logistics and digital infrastructure framework: PM GatiShakti (the 7 institutional infrastructure engines, BISAG-N GIS spatial planning), National Logistics Policy (slashing logistics costs below 9% of GDP), and BharatNet rural broadband connectivity.',
    difficulty: 'ADVANCED',
    order: 12,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Ending Departmental Silos: The Synchronized Multi-Modal Revolution',
        body: `For decades, infrastructure development in India was plagued by a comical and costly lack of coordination between government departments:
* The Ministry of Road Transport would build a world-class 6-lane national highway.
* Six months later, the Department of Telecommunications would dig up the freshly laid highway to lay optical fiber cables.
* A year later, the Ministry of Petroleum would dig up the same highway again to lay natural gas pipelines!
* Meanwhile, a new deep-sea port would be inaugurated, but freight trains could not access it because a 5-kilometer rail connector had not been cleared by the Ministry of Railways.

These bureaucratic silos inflicted astronomical economic damage: India's **logistics costs hovered at an uncompetitive 13% to 14% of GDP**, compared to global benchmarks of 7% to 8% in developed economies, severely crippling India's manufacturing export competitiveness.

To dismantle these silos forever, the Prime Minister launched **PM GatiShakti - National Master Plan** on October 13, 2021: an integrated digital spatial planning platform that harmonizes the infrastructure plans of **16 central ministries** across **7 multi-modal transport engines**. Concurrently, **BharatNet** delivers the digital broadband backbone across all Gram Panchayats.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 7 GatiShakti Engines, Institutional Hierarchy & Logistics Targets',
        body: `### 1. The 7 Institutional Engines of PM GatiShakti
PM GatiShakti is driven by the coordinated simultaneous expansion of **7 infrastructural engines**:
1. **Roadways (National Highways / Expressways - Bharatmala Pariyojana)**
2. **Railways (Dedicated Freight Corridors, Vande Bharat freight, station redevelopment)**
3. **Airports (UDAN regional connectivity, greenfield international airports)**
4. **Ports (Sagarmala coastal shipping, port mechanization, deep drafts)**
5. **Mass Transport (Metro rail, Regional Rapid Transit Systems RRTS, electric bus fleets)**
6. **Waterways (National Waterways NW-1, NW-2, river cargo transport)**
7. **Logistics Infrastructure (Multi-Modal Logistics Parks MMLPs, cold chain corridors, inland container depots)**

### 2. Digital Platform Architecture & BISAG-N Integration
* Developed by the **Bhaskaracharya National Institute for Space Applications and Geo-informatics (BISAG-N)** in Gujarat.
* Overlays **over 1,400 geospatial data layers** (satellite imagery, forest boundaries, river courses, railway tracks, gas pipelines, telecom towers, power transmission grids) onto a single dynamic 3D GIS map.
* Ministries plan infrastructure projects digitally on the GIS map, identifying inter-departmental conflicts and right-of-way bottlenecks in seconds before a single rupee of physical capital is committed.

### 3. National Logistics Policy (NLP) 2022 Targets
Complementing PM GatiShakti, the NLP establishes three quantifiable milestones:
* **Cost Reduction:** Reduce logistics costs in India from ~13-14% of GDP to **below 9% of GDP by 2030**.
* **Global Ranking:** Propel India into the **top 25 nations in the World Bank Logistics Performance Index (LPI)** by 2030 (India stood at rank 38 in 2023).
* **Unified Logistics Interface Platform (ULIP):** Integrates 34 digital systems across 7 ministries (FASTag, ICEGATE, Vahan, Sarathi, FOIS) into a single digital data highway for logistics tracking.

### 4. BharatNet (National Optical Fiber Network)
* Administered by the **Department of Telecommunications (DoT)**, Ministry of Communications.
* **Objective:** Connect all **2.5 Lakh Gram Panchayats** and 6.4 Lakh inhabited villages across India with high-speed optical fiber broadband.
* Implementation: Bharat Broadband Network Limited (BBNL) merged with BSNL to accelerate execution and maintenance.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Institutional Decision-Making Framework: EGOS, NPG & Technical Unit',
        body: `### The 3-Tier Governance Hierarchy of PM GatiShakti
To ensure executive accountability without inter-ministerial gridlock:
1. **Empowered Group of Secretaries (EGOS):**
   * Chaired by the **Cabinet Secretary**.
   * Consists of Secretaries of 16 infrastructure and economic ministries.
   * Mandate: Evaluates progress, resolves interstate and inter-ministerial conflicts, and issues binding directives.
2. **Network Planning Group (NPG):**
   * Composed of the heads of network planning divisions of all connectivity ministries.
   * **Mandate:** Any infrastructure project involving connectivity investment of **over ₹500 Crore** MUST mandatorily be routed through the NPG for multi-modal validation and alignment before submission to the Public Investment Board (PIB) or Cabinet Committee on Economic Affairs (CCEA).
3. **Technical Support Unit (TSU):** Located in DPIIT, providing specialized spatial analytics and engineering validation.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, The 7 Engines Memorization & NPG Thresholds',
        body: `### Critical Traps in Infrastructure Policy Questions

1. **The 7 Engines Scope Trap:**
   * *Trap:* Assuming Telecommunications or Power are engines of GatiShakti.
   * *Truth:* Telecom and Power are *support layers*, NOT one of the 7 engines! The 7 engines are strictly transport-focused: **Roads, Railways, Airports, Ports, Mass Transport, Waterways, Logistics Infrastructure**.

2. **The NPG Mandatory Project Scrutiny Threshold:**
   * *Trap:* Assuming all infrastructure projects go to NPG.
   * *Truth:* Only connectivity projects with capital investments of **₹500 Crore and above** are mandatorily evaluated by the Network Planning Group (NPG).

3. **Nodal Department Trap:**
   * PM GatiShakti is anchored by the **Department for Promotion of Industry and Internal Trade (DPIIT)** under the Ministry of Commerce and Industry, NOT the Ministry of Road Transport or NITI Aayog.
   * BharatNet belongs to the **Department of Telecommunications (DoT)**, NOT MeitY!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-12-1',
        statement: 'PM GatiShakti is driven by seven transformative infrastructural engines: Roads, Railways, Airports, Ports, Mass Transport, Waterways, and Logistics Infrastructure.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '02_IIBF_Banking_Regulations_Master.md#note-14',
        excerpt: 'Synthesis of National Infrastructure Pipeline, PM GatiShakti (7 engines), National Logistics Policy, and PPP models.',
      },
      {
        id: 'CLM-SCH-12-2',
        statement: 'All connectivity infrastructure projects with a capital outlay of ₹500 Crore or more must be mandatorily appraised by the Network Planning Group (NPG) under PM GatiShakti.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '02_IIBF_Banking_Regulations_Master.md#note-14',
        excerpt: 'PM GatiShakti governance hierarchy: NPG mandatory appraisal for projects exceeding ₹500 Cr.',
      },
      {
        id: 'CLM-SCH-12-3',
        statement: 'The National Logistics Policy 2022 aims to reduce logistics costs in India from ~13-14% of GDP to below 9% of GDP and place India among the top 25 nations in the World Bank LPI by 2030.',
        claimType: 'POLICY_TARGET',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '02_IIBF_Banking_Regulations_Master.md#note-14',
        excerpt: 'National Logistics Policy targets: reduce logistics cost to single digits and elevate LPI ranking.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Infrastructure & Economic Policies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Guaranteed questions on the 7 engines, NPG threshold (₹500 Cr), and NLP targets.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Infrastructure & Logistics',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FACTUAL_ACCURACY',
        notes: 'Core scoring area in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Industrial and Services Sector / Infrastructure Policies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Prime candidate for 15-mark descriptive essays on logistics efficiency and capital expenditure.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Infrastructure: Energy, Ports, Roads, Airports, Railways',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'PM GatiShakti multi-modal connectivity and ULIP are tested in Prelims and Mains GS 3.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Economy & Infrastructure Policies',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Tested on GatiShakti institutional mechanisms and BharatNet.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Major Infrastructure Projects & Industrial Development',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_AND_CENTRAL_INFRASTRUCTURE',
        notes: 'Direct 5-mark and 10-mark questions on DMIC, DFC, and GatiShakti in Rajasthan.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Economic Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on the 7 engines and BISAG-N portal.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Commercial Banking — Infrastructure Financing & Project Loans',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'PROJECT_APPRAISAL_AND_LOAN_MONITORING',
        notes: 'Understanding multi-modal connectivity is critical for assessing infrastructure project credit risk.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PM GatiShakti: DPIIT/Commerce, 7 Engines (Roads, Railways, Airports, Ports, Mass Transport, Waterways, Logistics Infra). BISAG-N 1400+ GIS layers. NPG clears connectivity projects ≥ ₹500 Cr. EGOS headed by Cabinet Secretary. NLP 2022: Logistics cost < 9% GDP & Top 25 LPI by 2030.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Multi-Modal Infrastructure Framework: 1) PM GatiShakti: Launched Oct 2021; anchored by DPIIT; breaks departmental silos using BISAG-N GIS spatial mapping. Governed by 7 transport engines (Roads, Rail, Air, Ports, Mass Transit, Waterways, Logistics). 2) Governance: Network Planning Group (NPG) appraises all connectivity projects ≥ ₹500 Cr; Empowered Group of Secretaries (EGOS) chaired by Cabinet Secretary. 3) National Logistics Policy: Cuts logistics costs from 14% to below 9% of GDP by 2030; ULIP platform. 4) BharatNet: DoT initiative connecting 2.5L Gram Panchayats with high-speed optical fiber.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Logistics & Infrastructure Architecture: 1) Institutional Integration: EGOS (Cabinet Secretary) -> NPG (Planning heads) -> TSU (Technical support). 2) The 7 Kinetic Engines: Roads, Railways, Airports, Ports, Mass Transit, Inland Waterways, Multi-Modal Logistics Parks (MMLPs). 3) Digital Data Enablers: BISAG-N GIS spatial modeling + ULIP unified logistics APIs. 4) Telecom Backbone: BharatNet providing rural gigabit connectivity.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'Which of the following is NOT one of the 7 foundational infrastructural engines of the PM GatiShakti National Master Plan?',
        options: ['Waterways', 'Mass Transport', 'Telecommunications', 'Logistics Infrastructure'],
        correctAnswer: 'Telecommunications',
        explanation: 'The 7 engines of PM GatiShakti are: Roads, Railways, Airports, Ports, Mass Transport, Waterways, and Logistics Infrastructure. Telecommunications, power transmission, and gas pipelines provide crucial support layers, but are NOT classified as one of the 7 core transport engines.',
        trapExplanation: 'Because digital connectivity and optical fiber are crucial to modern governance, candidates frequently assume Telecommunications is one of the 7 engines.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Confusing a support infrastructure layer (telecom) with the 7 core transport engines.',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'Under PM GatiShakti governance rules, what is the mandatory financial threshold for connectivity projects that require appraisal by the Network Planning Group (NPG)?',
        options: [
          'Projects with capital investment of ₹100 Crore and above',
          'Projects with capital investment of ₹250 Crore and above',
          'Projects with capital investment of ₹500 Crore and above',
          'Projects with capital investment of ₹1,000 Crore and above'
        ],
        correctAnswer: 'Projects with capital investment of ₹500 Crore and above',
        explanation: 'Under PM GatiShakti institutional guidelines, all connectivity infrastructure projects involving a capital investment of ₹500 Crore and above must be mandatorily routed through and examined by the Network Planning Group (NPG) before they can be sent to the Public Investment Board (PIB) or Cabinet Committee on Economic Affairs (CCEA).',
        trapExplanation: 'Candidates often guess ₹1,000 Crore or ₹100 Crore, missing the exact ₹500 Crore statutory threshold.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Exact capital investment threshold for mandatory NPG project clearance.',
      },
    ],
  },
  {
    id: 'CON-SCH-13',
    slug: 'agrarian-modernization-pmksy-per-drop-more-crop-aif-infrastructure-fund',
    title: 'Agrarian Modernization, Micro-Irrigation & Allied Welfare: PM Krishi Sinchayee Yojana (PMKSY), Per Drop More Crop & Agriculture Infrastructure Fund (AIF)',
    shortDefinition: 'Agrarian capital modernization schemes: PM Krishi Sinchayee Yojana (Har Khet Ko Pani, Accelerated Irrigation Benefit Programme), Per Drop More Crop micro-irrigation, Agriculture Infrastructure Fund (₹1 Lakh Cr debt financing with 3% interest subvention), and e-NAM.',
    difficulty: 'INTERMEDIATE',
    order: 13,
    topicSlug: 'public-policy-and-scheme-implementation-framework',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Solving the Monsoon Lottery: From Water Waste to Precision Micro-Irrigation',
        body: `Agriculture in India has historically been characterized as a **"gamble with the monsoons"**. Over 50% of the country's net sown area remains completely rainfed, leaving millions of smallholders vulnerable to drought and climate shocks. 

Even where canal irrigation exists, traditional flood irrigation wastes over 60% of water through seepage and evaporation, while leaching nutrients and causing severe soil salinization.

Furthermore, Indian farmers suffer from devastating post-harvest losses—exceeding ₹1 Lakh Crore annually—because they lack localized cold storage, grading units, and primary processing centers, forcing them to sell fresh produce to middlemen at distress prices immediately after harvest.

To resolve these twin structural bottlenecks:
1. **PM Krishi Sinchayee Yojana (PMKSY)** expands physical access to water (*Har Khet Ko Pani*) while enforcing water-use efficiency (*Per Drop More Crop* via drip and sprinkler irrigation).
2. **The Agriculture Infrastructure Fund (AIF)** provides **₹1 Lakh Crore in bank debt financing** with a 3% interest subvention to build cold stores, silos, and pack houses right at the farm gate.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'PMKSY Component Architecture & Agriculture Infrastructure Fund (AIF) Rules',
        body: `### 1. PM Krishi Sinchayee Yojana (PMKSY) Component Matrix

| Component | Nodal Ministry / Department | Core Mandate & Target |
| :--- | :--- | :--- |
| **Accelerated Irrigation Benefit Programme (AIBP)** | Department of Water Resources, River Development & Ganga Rejuvenation (Ministry of Jal Shakti) | Time-bound completion of major and medium incomplete irrigation projects to expand gross irrigated area. |
| **Har Khet Ko Pani (HKKP)** | Department of Water Resources (Ministry of Jal Shakti) | Command Area Development (CAD), creating new water sources through minor irrigation (surface and groundwater), and restoring traditional water bodies. |
| **Watershed Development** | Department of Land Resources (Ministry of Rural Development) | Rainwater harvesting, soil and moisture conservation, run-off management, and regeneration of degraded agricultural lands. |
| **Per Drop More Crop (PDMC)** | Department of Agriculture and Farmers Welfare (MoA&FW) | Promoting **Precision Micro-Irrigation (Drip and Sprinkler Systems)** to enhance on-farm water use efficiency by 40–50%. Central subsidy covers 55% for small/marginal farmers and 45% for other farmers. |

### 2. Agriculture Infrastructure Fund (AIF)
Administered by the **Department of Agriculture and Farmers Welfare (MoA&FW)**:
* **Total Financing Outlay:** **₹1,00,000 Crore (₹1 Lakh Crore)** in medium-to-long term debt financing provided by commercial banks and financial institutions (FY 2020–21 to 2032–33).
* **Target Beneficiaries:** Primary Agricultural Credit Societies (PACS), Marketing Cooperative Societies, Farmer Producer Organizations (FPOs), Self Help Groups (SHGs), Joint Liability Groups (JLGs), agri-entrepreneurs, and startups.
* **Key Financial Incentives:**
  1. **Interest Subvention:** **3.0% per annum** on loans up to **₹2,00,00,000 (₹2 Crore)** for a maximum tenure of **7 years**.
  2. **Credit Guarantee Coverage:** Credit guarantee under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) for loans up to **₹2 Crore**, with guarantee fee paid entirely by the Government.
  3. **Moratorium:** Moratorium period for repayment ranges from minimum 6 months up to a maximum of **2 years**.
* **Eligible Assets:** Post-harvest management infrastructure (Cold chains, silos, warehouses, sorting/grading units, ripening chambers) and community farming assets.

### 3. National Agriculture Market (e-NAM)
* Pan-India electronic trading portal integrating existing APMC mandis to create a unified national market for agricultural commodities.
* Eliminates geographic barriers, promotes transparent online bidding, and guarantees prompt payment directly to farmer bank accounts.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Micro-Irrigation Agronomic Efficiency & AIF Portal Loan Disbursement',
        body: `### The Water-Use Efficiency Equation in Micro-Irrigation
Under conventional flood irrigation:
$$\\text{Water Use Efficiency (WUE)} = \\frac{\\text{Water Beneficially Used by Crop}}{\\text{Total Water Diverted from Source}} \\approx 30\\% - 40\\%$$
Under Drip / Micro-Irrigation (PDMC):
$$\\text{Water Use Efficiency (WUE)} \\approx 80\\% - 90\\%$$
* Water is applied directly to the root zone via drippers at low pressure.
* **Fertigation:** Water-soluble fertilizers are dissolved directly into irrigation lines, cutting fertilizer consumption by 30% while boosting crop yields by 20–35%.

### AIF Digital Loan Workflow
1. Borrower submits DPR (Detailed Project Report) on unified AIF portal (*agriinfra.dac.gov.in*).
2. Ministry conducts preliminary validation within 7 days.
3. Loan application routed electronically to selected participating commercial bank.
4. Bank sanctions loan, claims CGTMSE guarantee, and disburses funds with automated 3% interest subvention credit.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, AIF Financial Ceilings & Multi-Ministry Coordination',
        body: `### Critical Examiner Traps in Agrarian Welfare Schemes

1. **The Multi-Ministry PMKSY Coordination Trap:**
   * PMKSY is an umbrella scheme spanning **THREE distinct ministries**:
     * AIBP & Har Khet Ko Pani $\\implies$ **Ministry of Jal Shakti**.
     * Watershed Development $\\implies$ **Ministry of Rural Development**.
     * Per Drop More Crop (PDMC) $\\implies$ **Ministry of Agriculture & Farmers Welfare**.
   * *Trap:* Claiming that the entire PMKSY scheme is run by the Ministry of Agriculture.

2. **AIF Interest Subvention Ceiling Trap:**
   * *Trap:* Assuming the 3% interest subvention applies to the *entire* loan amount if a borrower takes ₹5 Crore.
   * *Truth:* The 3% interest subvention is strictly capped up to **₹2 Crore**. If a project loan is ₹5 Crore, the subvention applies to the first ₹2 Crore, and standard commercial rates apply to the remaining ₹3 Crore.
   * *Subvention tenure:* Capped at **7 years maximum**.

3. **e-NAM Mandi Autonomy:**
   * e-NAM does NOT replace state APMC Acts; it digitally networks existing state APMC mandis that have amended their APMC Acts to allow electronic trading, single unified licenses, and single-point levy of market fees.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-SCH-13-1',
        statement: 'The Agriculture Infrastructure Fund (AIF) provides ₹1 Lakh Crore in debt financing with a 3% per annum interest subvention and CGTMSE credit guarantee on loans up to ₹2 Crore for up to 7 years.',
        claimType: 'FINANCIAL_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '02_IIBF_Banking_Regulations_Master.md#note-14',
        excerpt: 'Agriculture Infrastructure Fund: ₹1 Lakh Crore financing facility with 3% interest subvention up to ₹2 Crore.',
      },
      {
        id: 'CLM-SCH-13-2',
        statement: 'PM Krishi Sinchayee Yojana (PMKSY) integrates three ministries: Jal Shakti (AIBP and Har Khet Ko Pani), Rural Development (Watershed Development), and Agriculture (Per Drop More Crop micro-irrigation).',
        claimType: 'POLICY_ARCHITECTURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government_Schemes_Master.md#note-1',
        excerpt: 'Ministry of Agriculture: PMKSY More Crop Per Drop, eNAM, RKVY-RAFTAAR.',
      },
      {
        id: 'CLM-SCH-13-3',
        statement: 'Per Drop More Crop (PDMC) promotes precision drip and sprinkler irrigation, providing central financial subsidies covering 55% of costs for small and marginal farmers and 45% for other farmers.',
        claimType: 'POLICY_SUBSIDY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-1',
        excerpt: 'Agriculture & Water Resources: Micro-irrigation subsidies and efficiency targets.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Agricultural Credit & Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FINANCIAL_SPECIFICATION',
        notes: 'Guaranteed questions on AIF interest subvention (3%) and loan cap (₹2 Cr).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Agricultural Infrastructure',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FINANCIAL_SPECIFICATION',
        notes: 'High weightage in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Agriculture: Institutional Finance & Irrigation',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for 15-mark descriptive questions on post-harvest agricultural infrastructure.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Major Crop Patterns, Irrigation & Post-Harvest Infrastructure',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'PMKSY components and AIF are recurring topics in Prelims and Mains GS 3.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Agricultural Development & Rural Infrastructure',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Tested on AIF lending rules and micro-irrigation subsidies.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I & II — Agriculture Sector & Water Management in Rajasthan',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_IRRIGATION_ANALYSIS',
        notes: 'Rajasthan faces acute water scarcity; PMKSY and micro-irrigation are top exam questions.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Agriculture Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on AIF ₹1 Lakh Cr outlay and e-NAM.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Priority Sector Lending — Agriculture Infrastructure',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'REGULATORY_PSL_LIMITS',
        notes: 'Bank loans up to ₹100 Crore per borrower for agri-infrastructure qualify for PSL.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PMKSY: Jal Shakti (AIBP + HKKP), MoRD (Watershed), MoA&FW (Per Drop More Crop - Drip/Sprinkler 55% subsidy). AIF: ₹1 Lakh Cr debt facility, 3% interest subvention on loans up to ₹2 Cr for 7 yrs, CGTMSE coverage. e-NAM: unified national online APMC mandi.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Agrarian Modernization Blueprint: 1) PMKSY Umbrella: Accelerates incomplete irrigation projects (AIBP), expands water access (Har Khet Ko Pani), conserves soil moisture (Watershed Development), and promotes water efficiency (Per Drop More Crop micro-irrigation). 2) Agriculture Infrastructure Fund (AIF): ₹1 Lakh Cr financing facility providing 3% interest subvention for post-harvest infrastructure (cold chains, silos, warehouses) on loans up to ₹2 Cr for up to 7 years. 3) e-NAM: Digital portal linking APMCs nationwide.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Agricultural Modernization Architecture: 1) Irrigation Triad (PMKSY): Water Resource Creation (Jal Shakti) -> Catchment Watershed Management (Rural Dev) -> On-Farm Precision Drip/Sprinkler Efficiency (Agriculture). 2) Post-Harvest Value Addition: AIF debt financing with 3% subvention + CGTMSE risk underwriting. 3) Market Integration: e-NAM electronic commodity auctioning.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SCHEME_MCQ',
        stem: 'Under the Agriculture Infrastructure Fund (AIF), what is the rate of interest subvention provided on bank loans, and what is the maximum loan ceiling eligible for this subvention?',
        options: [
          '2% per annum on loans up to ₹1 Crore',
          '3% per annum on loans up to ₹2 Crore',
          '4% per annum on loans up to ₹3 Crore',
          '5% per annum on loans up to ₹5 Crore'
        ],
        correctAnswer: '3% per annum on loans up to ₹2 Crore',
        explanation: 'Under the Agriculture Infrastructure Fund (AIF), loans sanctioned by commercial banks and financial institutions receive an interest subvention of 3.0% per annum. This subvention is available for a maximum period of 7 years and is capped on loan amounts up to ₹2 Crore.',
        trapExplanation: 'Assuming 2% (which is common in Kisan Credit Card short-term subvention) or confusing the ₹2 Crore subvention ceiling with larger total loan amounts is the standard trap.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'RBI Grade B Phase 1',
        pyqStage: 'Phase 1',
        examinerTrapPattern: 'Exact interest subvention percentage (3%) and loan eligibility cap (₹2 Crore).',
      },
      {
        type: 'SCHEME_MCQ',
        stem: 'Which department and ministry is responsible for implementing the "Per Drop More Crop" (PDMC) micro-irrigation component of PM Krishi Sinchayee Yojana?',
        options: [
          'Department of Water Resources, Ministry of Jal Shakti',
          'Department of Land Resources, Ministry of Rural Development',
          'Department of Agriculture and Farmers Welfare, Ministry of Agriculture & Farmers Welfare',
          'Department of Drinking Water and Sanitation, Ministry of Jal Shakti'
        ],
        correctAnswer: 'Department of Agriculture and Farmers Welfare, Ministry of Agriculture & Farmers Welfare',
        explanation: 'While AIBP and Har Khet Ko Pani are implemented by the Ministry of Jal Shakti, and Watershed Development is implemented by the Ministry of Rural Development, the "Per Drop More Crop" (PDMC) precision micro-irrigation component is specifically administered by the Department of Agriculture and Farmers Welfare under the Ministry of Agriculture & Farmers Welfare.',
        trapExplanation: 'Because it involves irrigation, candidates commonly attribute PDMC to the Ministry of Jal Shakti.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Multi-ministry division of PMKSY components.',
      },
    ],
  },
];

export async function seedBatchGASchemesBatch2CanonicalKnowledge() {
  console.log('Seeding Government Schemes Batch 2 (Health, Housing, Women/Child, Energy, Education, Infrastructure, Agrarian)...');

  // 1. Ensure Subject exists
  let subject = await db.subject.findUnique({
    where: { slug: 'government-schemes' },
  });
  if (!subject) {
    const domain = await db.domain.findFirst({
      where: { slug: 'domain-economic-commercial-financial-intelligence' },
    });
    subject = await db.subject.create({
      data: {
        name: 'Government Schemes & Welfare Architecture',
        slug: 'government-schemes',
        domainId: domain ? domain.id : 'domain-economic-commercial-financial-intelligence',
        scopeStatement: 'Flagship welfare initiatives, social security, financial inclusion, public health, housing, education, and rural development architectures across central sector and centrally sponsored schemes.',
        description: 'Comprehensive policy frameworks, funding ratios, eligibility criteria, and operational mechanisms of flagship government welfare programs.',
        order: 5,
        status: 'ACTIVE',
      },
    });
  }

  // 2. Ensure Topic 54 exists
  const topic = await db.topic.upsert({
    where: {
      subjectId_slug: {
        subjectId: subject.id,
        slug: 'public-policy-and-scheme-implementation-framework',
      },
    },
    update: {},
    create: {
      slug: 'public-policy-and-scheme-implementation-framework',
      title: 'Public Policy & Scheme Implementation Framework',
      description: 'Central sector vs centrally sponsored funding formulas, nodal delivery bodies, DBT pipelines, and flagship social security architectures.',
      order: 54,
      subjectId: subject.id,
      status: 'ACTIVE',
    },
  });

  // 3. Ensure Canonical Source exists
  const sourceSchemes = await db.source.upsert({
    where: { id: 'SRC-SCHEMES-CANONICAL-2026' },
    update: {},
    create: {
      id: 'SRC-SCHEMES-CANONICAL-2026',
      title: 'Government Schemes & Social Welfare Canonical Corpus (2026)',
      sourceType: 'STATUTORY_COMPILATION',
      authorityTier: 'PRIMARY_REGULATORY_TEXT',
      description: 'Official gazette notifications, ministry operational guidelines, cabinet decisions, and budgetary allocations across central and centrally sponsored schemes.',
    },
  });

  // Ensure Target Exams exist
  const defaultExams = [
    { slug: 'sbi-po', name: 'SBI PO' },
    { slug: 'ibps-po', name: 'IBPS PO' },
    { slug: 'rbi-grade-b', name: 'RBI Grade B' },
    { slug: 'ssc-cgl', name: 'SSC CGL' },
    { slug: 'rpsc-ras', name: 'RPSC RAS' },
    { slug: 'upsc-cse', name: 'UPSC CSE' },
    { slug: 'upsc-apfc', name: 'UPSC APFC' },
    { slug: 'iibf-dbf', name: 'IIBF DBF' },
  ];
  for (const ex of defaultExams) {
    await db.exam.upsert({
      where: { slug: ex.slug },
      update: {},
      create: { slug: ex.slug, name: ex.name, status: 'ACTIVE' },
    });
  }

  // 4. Seed Concepts
  const examSlugMap: Record<string, string> = {
    SBI_PO: 'sbi-po',
    IBPS_PO: 'ibps-po',
    RBI_GRADE_B: 'rbi-grade-b',
    SSC_CGL: 'ssc-cgl',
    RPSC_RAS: 'rpsc-ras',
    UPSC_CSE: 'upsc-cse',
    UPSC_APFC: 'upsc-apfc',
    IIBF_DBF: 'iibf-dbf',
  };

  for (const c of SCHEMES_BATCH_2_CONCEPTS) {
    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
    });

    // Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const block of c.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: block.type as any,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: block.visibility as any,
        },
      });
    }

    // Claims & Evidence
    for (const clm of c.claims) {
      const claim = await db.claim.upsert({
        where: { id: clm.id },
        update: {
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: clm.id,
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
      });

      await db.evidence.deleteMany({ where: { claimId: claim.id } });
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceSchemes.id,
          locator: clm.locator,
          excerpt: clm.excerpt,
          evidenceType: 'EXCERPT',
          authority: 'PRIMARY_REGULATORY_TEXT',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'CERTAIN',
        },
      });
    }

    // Exam Concept Mappings
    for (const em of c.examMappings) {
      const slug = examSlugMap[em.examCode] || em.examCode.toLowerCase().replace(/_/g, '-');
      const exam = await db.exam.findFirst({
        where: { slug },
      });
      if (!exam) continue;

      await db.examConceptMapping.upsert({
        where: {
          examId_conceptId: {
            examId: exam.id,
            conceptId: concept.id,
          },
        },
        update: {
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance,
          priority: em.priority,
          requiredDepth: em.requiredDepth,
          notes: em.notes,
        },
        create: {
          examId: exam.id,
          conceptId: concept.id,
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance,
          priority: em.priority,
          requiredDepth: em.requiredDepth,
          notes: em.notes,
        },
      });
    }

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of c.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type as any,
          content: ru.content,
          priority: ru.priority as any,
          order: ru.order,
        },
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of c.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type as any,
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty as any,
          isPYQ: q.isPYQ ?? false,
          pyqYear: q.pyqYear,
          pyqPaper: q.pyqPaper,
          pyqStage: q.pyqStage,
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }
  }

  console.log(`Successfully seeded ${SCHEMES_BATCH_2_CONCEPTS.length} Batch 2 Government Schemes canonical concepts.`);
}
