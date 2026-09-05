import { db } from '../db/client';

export interface StaticGABatch2ConceptDef {
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

export const STATIC_GA_BATCH_2_CONCEPTS: StaticGABatch2ConceptDef[] = [
  // =========================================================================
  // TOPIC 66: Financial Regulators, Monetary Systems & Banking Governance
  // =========================================================================
  {
    id: 'CON-GA-04',
    slug: 'apex-financial-regulators-rbi-sebi-irdai-pfrda-ifsca-statutory-mandates',
    title: 'Apex Financial Regulators of India: RBI, SEBI, IRDAI, PFRDA & IFSCA Statutory Mandates & Jurisdiction Boundaries',
    shortDefinition: 'Statutory architecture of India\'s 5 apex financial regulators: Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), Insurance Regulatory and Development Authority of India (IRDAI), Pension Fund Regulatory and Development Authority (PFRDA), and International Financial Services Centres Authority (IFSCA).',
    difficulty: 'INTERMEDIATE',
    order: 4,
    topicSlug: 'financial-regulators-and-banking-governance',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Dividing the Financial Universe: Why Multiple Specialized Regulators Exist',
        body: `Imagine a sprawling modern metropolis with diverse complex activities: vehicular traffic, criminal justice, building construction, and environmental pollution. If you assign a single police department to manage traffic lights, design structural engineering codes for skyscrapers, and inspect hospital surgeries, the entire city collapses into administrative chaos.

Similarly, a modern market economy spans distinct financial universes:
1. Commercial banking and currency issuance (where stability and depositor protection are paramount).
2. Capital markets and securities trading (where risk-taking, transparent disclosures, and investor protection are paramount).
3. Insurance underwriting (long-term mortality and asset risk pooling).
4. Pension fund accumulation (multi-decade retirement annuity security).
5. Cross-border offshore financial operations (international tax, foreign exchange, and global securities).

India adopted a **sectoral regulatory architecture**, establishing 5 specialized statutory regulators governed by specific acts of Parliament. When jurisdictional overlaps arise—such as Unit Linked Insurance Plans (ULIPs) combining insurance and stock investments—the **Financial Stability and Development Council (FSDC)** serves as the apex inter-regulatory coordination forum.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 5 Apex Statutory Regulators Master Comparison Matrix',
        body: `### The 5 Apex Financial Regulators Statutory Directory

| Regulator | Governing Statute & Founding Year | Head Office Location | Core Regulatory Jurisdiction | Apex Leadership Structure |
| :--- | :--- | :--- | :--- | :--- |
| **Reserve Bank of India (RBI)** | **RBI Act, 1934** (Established April 1, 1935 upon Hilton Young Commission recommendations; Nationalized Jan 1, 1949). | **Mumbai, Maharashtra** (Shifted from Kolkata in 1937). | Commercial banks, Cooperative banks, NBFCs, Payments Systems, Forex reserves, Monetary policy. | Governor + Maximum 4 Deputy Governors (appointed by ACC). |
| **Securities and Exchange Board of India (SEBI)** | **SEBI Act, 1992** (Established non-statutory 1988; statutory powers April 12, 1992). | **Mumbai, Maharashtra** | Stock exchanges, Commodity derivatives, Mutual Funds, Depositories, Merchant Bankers, Credit Rating Agencies. | Chairperson + Whole-Time Members (WTMs). |
| **Insurance Regulatory & Development Authority of India (IRDAI)** | **IRDA Act, 1999** (Formed based on Malhotra Committee recommendations). | **Hyderabad, Telangana** (Shifted from New Delhi in 2001). | Life insurance, General insurance, Health insurance, Reinsurance (GIC Re), Insurance Web Aggregators. | Chairperson + 5 Whole-Time Members + 4 Part-Time Members. |
| **Pension Fund Regulatory & Development Authority (PFRDA)** | **PFRDA Act, 2013** (Established via executive order 2003; statutory status Feb 1, 2014). | **New Delhi** | National Pension System (NPS), Atal Pension Yojana (APY), Pension Fund Managers, Central Recordkeeping Agencies. | Chairperson + Maximum 3 Whole-Time Members. |
| **International Financial Services Centres Authority (IFSCA)** | **IFSCA Act, 2019** (Established April 27, 2020). | **GIFT City, Gandhinagar, Gujarat** | Unified regulator for all financial products, services, and institutions in Special Economic Zones / IFSCs (offshore finance). | Chairperson + Nominees from RBI, SEBI, IRDAI, PFRDA, and Ministry of Finance. |

### The FSDC Inter-Regulatory Mechanism
* Chaired by the **Union Minister of Finance**.
* Members: RBI Governor, SEBI Chairperson, IRDAI Chairperson, PFRDA Chairperson, IFSCA Chairperson, Finance Secretary, Chief Economic Adviser, and IT Secretary.
* Mandate: Macroprudential supervision, resolving inter-regulatory jurisdictional disputes, and financial literacy.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Regulatory Boundaries, Appellate Tribunals & Enforcement Pipelines',
        body: `### The Appellate Hierarchy for Financial Regulatory Orders
To maintain constitutional rule of law, no regulator possesses unchecked judicial authority. Orders passed by regulators are appealable before specialized judicial tribunals:
1. **SEBI & PFRDA & IRDAI $\\implies$ Securities Appellate Tribunal (SAT):**
   * SAT (located in Mumbai) hears appeals against orders passed by SEBI, PFRDA, and IRDAI.
   * Appeals against SAT rulings go directly to the **Supreme Court of India**.
2. **RBI Regulatory Penalties $\\implies$ Appellate Authority / High Courts:**
   * RBI banking license cancellations and prompt corrective action (PCA) directives are challenged before the Appellate Authority under the Banking Regulation Act, 1949 or via writ jurisdiction under Article 226/32.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Headquarter Relocations & Founding Act Nuances',
        body: `### Critical Examiner Traps in Regulatory Institutions

1. **The IRDAI Headquarters Relocation Trap:**
   * *Trap:* Assuming all financial regulators have headquarters in Mumbai or New Delhi.
   * *Truth:* IRDAI is headquartered in **Hyderabad, Telangana** (relocated from New Delhi in 2001).

2. **The SEBI Statutory Inception Trap:**
   * *Trap:* Assuming SEBI was created in 1992.
   * *Truth:* SEBI was initially established as an administrative body in **1988**, but received formal statutory teeth via the **SEBI Act on April 12, 1992** (post the Harshad Mehta securities scam).

3. **IFSCA Unified Jurisdiction Trap:**
   * *Trap:* Believing RBI regulates offshore banking units (OBUs) in GIFT City.
   * *Truth:* Under the IFSCA Act 2019, **IFSCA has completely superseded the powers of RBI, SEBI, IRDAI, and PFRDA** inside the GIFT City International Financial Services Centre!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-04-1',
        statement: 'IRDAI was constituted under the IRDA Act, 1999 based on Malhotra Committee recommendations and is headquartered in Hyderabad, Telangana.',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-10',
        excerpt: 'IRDAI HQ: Located in Hyderabad, Telangana (shifted from New Delhi in 2001).',
      },
      {
        id: 'CLM-GA-04-2',
        statement: 'The International Financial Services Centres Authority (IFSCA) is a unified regulator established under the IFSCA Act 2019 with headquarters in GIFT City, Gandhinagar, Gujarat.',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-33',
        excerpt: 'Part 1: Regulatory & Apex Bodies: IFSCA unified offshore jurisdiction in GIFT City.',
      },
      {
        id: 'CLM-GA-04-3',
        statement: 'The Securities Appellate Tribunal (SAT) in Mumbai possesses statutory appellate jurisdiction to hear appeals against decisions of SEBI, IRDAI, and PFRDA.',
        claimType: 'JUDICIAL_HIERARCHY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-33',
        excerpt: 'Appellate structures: SAT hears appeals against SEBI, PFRDA, and IRDAI.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General & Banking Awareness — Regulatory Architecture',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_CRITERIA',
        notes: 'Heavily tested in Prelims and Mains on headquarters, founding acts, and committee roots.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Apex Regulatory Bodies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_CRITERIA',
        notes: 'Standard 2-3 questions in Mains GA.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Finance & Management — Regulatory Framework of Financial Sector',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core foundation for descriptive answers on FSDC and sectoral vs unified regulation.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Statutory, Regulatory and Various Quasi-Judicial Bodies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_GOVERNANCE_ANALYSIS',
        notes: 'Regulatory independence, appointments, and appellate mechanisms tested in Prelims & GS 3.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Economy & Auditing — Regulatory Bodies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Direct multiple-statement questions on PFRDA, IRDAI, and SEBI powers.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Financial and Regulatory Architecture',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'DESCRIPTIVE_OVERVIEW',
        notes: 'Tested in 2-mark and 5-mark administrative questions.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Economic & Financial Institutions',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on headquarters, establishment years, and committee names.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Regulatory Environment — Apex Banking & Market Regulators',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'REGULATORY_JURISDICTIONS',
        notes: 'Mandatory knowledge for banking operations and cross-selling financial products.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Regulators: RBI (1935, Mumbai, Hilton Young), SEBI (1992, Mumbai), IRDAI (1999, Hyderabad, Malhotra), PFRDA (2013, New Delhi), IFSCA (2019, GIFT City Gandhinagar). SAT hears appeals against SEBI, IRDAI, and PFRDA! FSDC chaired by Finance Minister.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Apex Financial Regulators Blueprint: 1) RBI: Governs banks, NBFCs, forex, and payment systems. 2) SEBI: Governs securities, commodities, mutual funds. 3) IRDAI: Headquartered in Hyderabad; governs life/non-life insurance. 4) PFRDA: Governs NPS and APY; based in New Delhi. 5) IFSCA: Unified regulator for offshore financial centre in GIFT City Gandhinagar. 6) SAT: Securities Appellate Tribunal hears appeals against SEBI, IRDAI, PFRDA.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Financial Regulatory Architecture: 1) Policy Coordination: Financial Stability and Development Council (FSDC) chaired by Union Finance Minister. 2) Sectoral Authorities: RBI (Money/Credit), SEBI (Capital), IRDAI (Risk pooling), PFRDA (Retirement savings). 3) Offshore Unified Carve-Out: IFSCA supersedes all domestic regulators in GIFT City. 4) Judicial Recourse: Regulatory Adjudication -> SAT (Mumbai) -> Supreme Court of India.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'REGULATOR_MCQ',
        stem: 'Where is the permanent head office of the Insurance Regulatory and Development Authority of India (IRDAI) located?',
        options: ['Mumbai, Maharashtra', 'New Delhi', 'Hyderabad, Telangana', 'Bengaluru, Karnataka'],
        correctAnswer: 'Hyderabad, Telangana',
        explanation: 'IRDAI was initially established in New Delhi in 1999, but its headquarters was permanently relocated to Hyderabad, Telangana, in the year 2001.',
        trapExplanation: 'Most candidates assume financial regulators are based in Mumbai (like RBI and SEBI) or New Delhi (like PFRDA). IRDAI in Hyderabad is a classic trap.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'SBI PO Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Unusual headquarters location of a national financial regulator.',
      },
      {
        type: 'REGULATOR_MCQ',
        stem: 'The Securities Appellate Tribunal (SAT) exercises statutory appellate jurisdiction over orders passed by which of the following regulatory authorities?\n1. Securities and Exchange Board of India (SEBI)\n2. Insurance Regulatory and Development Authority of India (IRDAI)\n3. Pension Fund Regulatory and Development Authority (PFRDA)\n4. Reserve Bank of India (RBI)',
        options: ['1 only', '1 and 2 only', '1, 2 and 3 only', '1, 2, 3 and 4'],
        correctAnswer: '1, 2 and 3 only',
        explanation: 'The Securities Appellate Tribunal (SAT) is a statutory body established to hear and dispose of appeals against orders passed by SEBI, IRDAI, and PFRDA. RBI orders do NOT go to SAT; RBI disputes are subject to separate departmental appellate authorities and constitutional High Court/Supreme Court writ jurisdiction.',
        trapExplanation: 'Assuming SAT only hears SEBI appeals, or assuming it hears appeals from all financial regulators including RBI, are the common errors.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Scope of appellate tribunal jurisdiction across disparate sectoral regulators.',
      },
    ],
  },
  {
    id: 'CON-GA-05',
    slug: 'rbi-monetary-operations-liquidity-architecture-and-dsib-framework',
    title: 'RBI Monetary Operations, Liquidity Architecture & Domestic Systemically Important Banks (D-SIBs)',
    shortDefinition: 'Reserve Bank of India operational mechanics: Liquidity Adjustment Facility (LAF) corridor (Repo, SDF floor, MSF ceiling), Standing Deposit Facility (SDF) collateral-free mechanics, CRR/SLR invariants, and Domestic Systemically Important Banks (D-SIBs) capital surcharge bucketing.',
    difficulty: 'ADVANCED',
    order: 5,
    topicSlug: 'financial-regulators-and-banking-governance',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Central Bank\'s Steering Wheel: Steering Interest Rates and Liquidity',
        body: `How does the Reserve Bank of India ensure that interest rates across thousands of bank branches remain aligned with its national inflation target? The RBI does not dictate the interest rate on your personal car loan or fixed deposit by direct statutory decree.

Instead, the RBI controls the price of **wholesale overnight liquidity** using the **Liquidity Adjustment Facility (LAF) Corridor**.

Think of the LAF Corridor as an elevator shaft with a ceiling, an anchor, and a floor:
* **The Ceiling (Marginal Standing Facility / Bank Rate):** The penal rate at which desperate commercial banks borrow emergency overnight liquidity by pledging G-Secs.
* **The Anchor (Policy Repo Rate):** The benchmark rate at which banks borrow routine overnight funds against approved government securities.
* **The Floor (Standing Deposit Facility - SDF):** The rate at which banks park excess liquidity with the RBI *without the RBI having to provide government securities as collateral*.

Concurrently, to prevent systemic financial collapse, the RBI designates mega-lenders whose failure would wreck the Indian economy as **Domestic Systemically Important Banks (D-SIBs)**—institutions that are "Too Big To Fail"—and mandates that they maintain additional Common Equity Tier 1 (CET1) capital buffers.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Modern LAF Corridor Architecture & D-SIB CET1 Capital Buckets',
        body: `### 1. The Modern RBI Liquidity Adjustment Facility (LAF) Corridor

$$\\mathbf{\\text{Ceiling: MSF / Bank Rate}} \\quad (\\text{Repo} + 25 \\text{ bps})$$
$$\\uparrow$$
$$\\mathbf{\\text{Anchor: Policy Repo Rate}} \\quad (\\text{Operational Benchmark})$$
$$\\downarrow$$
$$\\mathbf{\\text{Floor: Standing Deposit Facility (SDF)}} \\quad (\\text{Repo} - 25 \\text{ bps})$$

* **LAF Corridor Width:** Symmetric **±25 basis points (total corridor width 50 bps)** around the Policy Repo Rate.
* **The SDF Revolution (April 2022):** Under Section 17 of the RBI Act (amended in 2018), SDF replaced the Fixed Rate Reverse Repo as the operative absorption floor. Key invariant: **SDF absorbs liquidity with ZERO collateral provision by RBI**, ending the constraint where RBI ran out of G-Secs to absorb excess banking liquidity.
* **Fixed Rate Reverse Repo (3.35%):** Remains a dormant instrument at the discretion of RBI.

### 2. Statutory Reserve Ratios: CRR vs SLR Invariants

| Parameter | Cash Reserve Ratio (CRR) | Statutory Liquidity Ratio (SLR) |
| :--- | :--- | :--- |
| **Governing Statute** | **Section 42(1) of the RBI Act, 1934** | **Section 24 of the Banking Regulation Act, 1949** |
| **Asset Form** | Maintained strictly as **CASH with the RBI**. | Maintained as **Cash, Gold, or approved unencumbered G-Secs / T-Bills**. |
| **Return / Interest** | **ZERO interest** paid by RBI on CRR cash balances. | Earns market coupon interest on G-Secs and price appreciation on gold. |
| **Current Prescribed Level** | Typically around **4.00% to 4.50%** of Net Demand and Time Liabilities (NDTL). | Statutory cap of 40%; currently maintained at **18.00%** of NDTL. |

### 3. Domestic Systemically Important Banks (D-SIBs) Capital Framework
Introduced in 2014 based on the Basel Committee's "Too Big to Fail" methodology. Evaluated on: Size, Interconnectedness, Lack of Substitutability, and Complexity:

| D-SIB Bucket | Additional CET1 Surcharge (% of RWA) | Empanelled Banks (2025–2026 Assessment) |
| :--- | :--- | :--- |
| **Bucket 5** | +1.00% | *(Empty)* |
| **Bucket 4** | **+0.80%** | **State Bank of India (SBI)** |
| **Bucket 3** | +0.60% | *(Empty)* |
| **Bucket 2** | **+0.40%** | **HDFC Bank** |
| **Bucket 1** | **+0.20%** | **ICICI Bank** |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'MSF Dipping into SLR & Variable Rate Operations (VRR/VRRR)',
        body: `### 1. Marginal Standing Facility (MSF) Mechanics
* Commercial banks facing acute overnight liquidity shortages can borrow up to a specified percentage of their NDTL (typically 2% to 3%) by **dipping into their statutory SLR quota**.
* Penal rate: Pegged at 25 bps above the Repo Rate.
* Access restricted to Scheduled Commercial Banks only.

### 2. Fine-Tuning Liquidity via VRR and VRRR Auctions
While the LAF window provides daily standing access, RBI fine-tunes durable liquidity through market auctions:
* **Variable Rate Reverse Repo (VRRR):** Auctions to absorb frictional liquidity for tenures of 7, 14, or 28 days at market-determined cut-off rates.
* **Variable Rate Repo (VRR):** Auctions to inject liquidity during advance tax outflows or festive currency demand.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, CRR Governing Acts & D-SIB CET1 Allocation',
        body: `### High-Yield Traps in RBI Monetary Policy

1. **The CRR vs SLR Governing Statute Trap (Very Frequent!):**
   * CRR is governed by the **RBI Act, 1934 (Section 42)**.
   * SLR is governed by the **Banking Regulation Act, 1949 (Section 24)**.
   * *Trap:* Swapping the governing acts in objective multiple-statement questions.

2. **The CRR Interest Trap:**
   * *Trap:* Assuming banks earn nominal interest (like savings rate) on their CRR balances held with the RBI.
   * *Truth:* The RBI pays **ZERO interest** on CRR balances!

3. **D-SIB CET1 Allocation Ranks:**
   * SBI is in **Bucket 4** requiring **+0.80%** additional CET1.
   * HDFC Bank is in **Bucket 2** requiring **+0.40%** additional CET1.
   * ICICI Bank is in **Bucket 1** requiring **+0.20%** additional CET1.
   * *Trap:* Assuming HDFC Bank is in Bucket 1 or that Bucket 5 is occupied.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-05-1',
        statement: 'Under the revised LAF corridor, the Standing Deposit Facility (SDF) acts as the operative floor requiring zero collateral from the RBI, while the Marginal Standing Facility (MSF) acts as the ceiling.',
        claimType: 'MONETARY_MECHANISM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-12',
        excerpt: 'SDF vs Reverse Repo: SDF is the operative floor since April 2022 without collateral.',
      },
      {
        id: 'CLM-GA-05-2',
        statement: 'Cash Reserve Ratio (CRR) is mandated under Section 42(1) of the RBI Act, 1934 and earns zero interest, whereas Statutory Liquidity Ratio (SLR) is mandated under Section 24 of the Banking Regulation Act, 1949.',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-12',
        excerpt: 'CRR Interest: CRR cash deposits with RBI earn ZERO interest. SLR assets earn coupon interest.',
      },
      {
        id: 'CLM-GA-05-3',
        statement: 'The three Domestic Systemically Important Banks (D-SIBs) in India are SBI (Bucket 4, +0.80% CET1), HDFC Bank (Bucket 2, +0.40% CET1), and ICICI Bank (Bucket 1, +0.20% CET1).',
        claimType: 'REGULATORY_DESIGNATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-8',
        excerpt: 'D-SIB CET1 Buckets: SBI in Bucket 4 (0.80%), HDFC Bank in Bucket 2 (0.40%), ICICI Bank in Bucket 1 (0.20%).',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Banking Awareness — RBI Monetary Policy & D-SIBs',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_OPERATIONAL_PARAMETERS',
        notes: 'Guaranteed questions on D-SIB bucketing and LAF corridor rate hierarchy.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Banking Awareness — Monetary Policy Instruments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_OPERATIONAL_PARAMETERS',
        notes: 'High weightage across Prelims and Mains.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Finance — Monetary Policy & Central Banking Operations',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_ANALYTICAL',
        notes: 'Core foundation for 15-mark questions on liquidity management frameworks and Basel III D-SIB capital buffers.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Indian Economy & Issues Relating to Planning, Mobilization of Resources',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_MACROECONOMIC_ANALYSIS',
        notes: 'SDF collateral rules and CRR vs SLR legal provisions frequently tested in Prelims.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Economy & Auditing — Banking Regulations',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATUTORY_SECTIONS',
        notes: 'Tested on Section 42 of RBI Act vs Section 24 of BR Act.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Banking System & Monetary Policy of RBI',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'CONCEPTUAL_AND_DESCRIPTIVE',
        notes: 'Direct 5-mark question on qualitative vs quantitative instruments of RBI.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Banking & Financial Awareness',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on D-SIB bank names and zero interest on CRR.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Banking Operations & Regulations — Reserve Ratios & Liquidity',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPLIANCE_AND_CALCULATION',
        notes: 'Daily maintenance of CRR and bi-monthly maintenance of SLR is mandatory for branch officers.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'LAF: Floor = SDF (Repo - 25 bps, NO collateral), Anchor = Repo, Ceiling = MSF/Bank Rate (Repo + 25 bps). CRR = Sec 42 RBI Act (Cash, ZERO interest). SLR = Sec 24 BR Act (G-Secs, gold). D-SIBs: SBI (Bucket 4, +0.80%), HDFC (Bucket 2, +0.40%), ICICI (Bucket 1, +0.20%).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'RBI Liquidity & Stability Framework: 1) LAF Corridor: Operative floor is Standing Deposit Facility (SDF) which absorbs excess cash without collateral; anchor is Policy Repo Rate; ceiling is Marginal Standing Facility (MSF) where banks borrow dipping into SLR. 2) Reserve Ratios: CRR under Section 42 RBI Act (100% cash, 0% interest); SLR under Section 24 BR Act (18% in G-Secs/gold). 3) D-SIBs: Basel Too-Big-To-Fail lenders requiring extra Common Equity Tier 1 capital: SBI (+0.80%), HDFC Bank (+0.40%), ICICI Bank (+0.20%).',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Central Banking Monetary Operations Architecture: 1) Quantitative Tools: Direct Reserves (CRR, SLR) + Market Operations (LAF Repo, SDF, MSF, VRR/VRRR, OMO). 2) Operating Target: Weighted Average Call Rate (WACR) anchored within LAF corridor. 3) Systemic Resilience: D-SIB assessment based on size, interconnectedness, and complexity enforcing counter-cyclical CET1 buffers.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'MONETARY_MCQ',
        stem: 'Under the Reserve Bank of India\'s Liquidity Adjustment Facility (LAF) framework, what distinguishes the Standing Deposit Facility (SDF) from the traditional Reverse Repo facility?',
        options: [
          'SDF pays a higher interest rate than the Marginal Standing Facility',
          'SDF allows the RBI to absorb liquidity from commercial banks without providing government securities as collateral',
          'SDF can only be accessed by Non-Banking Financial Companies (NBFCs)',
          'SDF mandates that banks maintain a 14-day lock-in period for parked funds'
        ],
        correctAnswer: 'SDF allows the RBI to absorb liquidity from commercial banks without providing government securities as collateral',
        explanation: 'The fundamental innovation of the Standing Deposit Facility (SDF) introduced under Section 17 of the RBI Act is that it empowers the RBI to absorb excess liquidity from the banking system without requiring the central bank to provide government securities (collateral) in exchange. Under traditional Reverse Repo, the RBI had to transfer G-Secs to the lender, which constrained liquidity absorption if the RBI’s collateral stock was depleted.',
        trapExplanation: 'Thinking SDF is exclusively for NBFCs or carries a lock-in period are distractors.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Collateral requirement distinction between SDF and Reverse Repo.',
      },
      {
        type: 'DSIB_MCQ',
        stem: 'Which Domestic Systemically Important Bank (D-SIB) is placed in Bucket 4 of the RBI D-SIB framework, and what is its applicable additional Common Equity Tier 1 (CET1) capital requirement?',
        options: [
          'HDFC Bank; +0.40% of Risk Weighted Assets',
          'ICICI Bank; +0.20% of Risk Weighted Assets',
          'State Bank of India (SBI); +0.80% of Risk Weighted Assets',
          'State Bank of India (SBI); +1.00% of Risk Weighted Assets'
        ],
        correctAnswer: 'State Bank of India (SBI); +0.80% of Risk Weighted Assets',
        explanation: 'Under the RBI’s D-SIB assessment, State Bank of India (SBI) is placed in Bucket 4, which requires an additional Common Equity Tier 1 (CET1) capital surcharge of 0.80% of its Risk Weighted Assets (RWA). HDFC Bank is in Bucket 2 (+0.40%), and ICICI Bank is in Bucket 1 (+0.20%). Bucket 5 (+1.00%) currently has no bank assigned.',
        trapExplanation: 'Candidates frequently guess Bucket 5 (+1.00%) for SBI because it is India’s largest bank, unaware that Bucket 5 remains unoccupied.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Confusing Bucket 4 (0.80%) with unoccupied Bucket 5 (1.00%) for SBI.',
      },
    ],
  },
  {
    id: 'CON-GA-06',
    slug: 'sebi-capital-market-infrastructure-t0-mf-lite-fo-restructuring-and-cas',
    title: 'SEBI Capital Market Infrastructure: Settlement Cycles (T+0), MF Lite Framework, F&O Risk Restructuring & Closing Auction Session (CAS)',
    shortDefinition: 'Modern capital market regulatory reforms by SEBI: optional T+0 same-day trade settlement rollout, MF Lite Framework under SEBI (Mutual Funds) Regulations 2026 for passive index funds, Derivatives (F&O) retail risk restructuring (₹15–20 Lakh contract size, 1 expiry/exchange), and the Closing Auction Session (CAS).',
    difficulty: 'ADVANCED',
    order: 6,
    topicSlug: 'capital-markets-insurance-and-pensions',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Accelerating Cash to Milliseconds While Ring-Fencing Speculative Mania',
        body: `For decades in stock market history, buying a share involved waiting weeks for a physical paper certificate to arrive by postal mail (T+15 settlement). If a broker defaulted during those 15 days, your life savings vanished. Over thirty years, the Securities and Exchange Board of India (SEBI) progressively compressed settlement times: from T+5 to T+3, then to T+2, and in January 2023, India became the first major global economy to adopt **T+1 settlement** across all listed equities.

In 2024–2026, SEBI pushed this frontier to **T+0 (Same-Day Settlement)**, allowing investors to receive shares and cash in their accounts on the exact same day a trade occurs.

However, alongside frictionless cash markets, a dark crisis emerged: hyperactive retail gambling in **Equity Derivatives (Futures & Options - F&O)**. SEBI study reports revealed that over **93% of individual retail traders in F&O suffered net financial losses**, losing over ₹1.81 Lakh Crore.

To safeguard household savings without choking legitimate institutional hedging, SEBI instituted a massive **F&O Risk Containment Overhaul** (quadrupling minimum contract sizes and curtailing hyper-speculative weekly expiries), alongside the **MF Lite Framework** to democratize low-cost passive index investing.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'SEBI Capital Market Reforms Matrix: T+0, MF Lite, F&O & CAS',
        body: `### 1. The Settlement Cycle Evolution: T+1 to T+0 (Same-Day Settlement)
* **T+1 Settlement:** Complete market standard since January 2023.
* **T+0 Settlement (Phase 1):** Introduced on an optional basis in March 2024 for an initial basket of 25 liquid stocks, expanded in 2026 to the **top 500 capital-ranked stocks** in the Equity Cash Segment.
* Trades executed up to 1:30 PM settle by 4:30 PM on the same trading day (T+0). Eliminates overnight broker counterparty risk.

### 2. MF Lite Framework (Effective April 1, 2026)
Codified under the **SEBI (Mutual Funds) Regulations, 2026**:
* **Objective:** Create a simplified, light-touch regulatory regime for **Passive Schemes** (ETFs and Index Funds that merely mirror benchmark indices like NIFTY 50 or S&P BSE SENSEX).
* **Relaxed Compliance:** Lower net worth requirements for sponsors, simplified disclosure requirements, and drastically reduced compliance overhead compared to active mutual fund asset management companies.
* Drives down Total Expense Ratios (TER) for retail investors to near-zero levels.

### 3. F&O Retail Risk Containment Overhaul (2024–2026)
To curb speculative retail frenzy in equity derivatives:

| Regulatory Intervention | Legacy Practice | Revised SEBI Rule | Core Risk-Containment Objective |
| :--- | :--- | :--- | :--- |
| **Minimum Contract Size** | ₹5 Lakh to ₹10 Lakh | Raised to **₹15 Lakh to ₹20 Lakh** | Prevents small uncapitalized retail traders from gambling with borrowed pocket money. |
| **Weekly Expiries Rationalization** | Daily / multiple weekly expiries across every index | **Limited strictly to ONE benchmark index per exchange** (NSE: NIFTY 50 only; BSE: SENSEX only). | Eliminates "expiry casino" speculation happening every single day of the week. |
| **Extreme Loss Margin (ELM)** | Standard uniform margin | **Additional 2% Extreme Loss Margin (ELM)** levied on all short options on expiry day. | Dampens tail-risk volatility during high-gamma expiry trading. |
| **Calendar Spread Margin** | Full margin benefit allowed on expiry contracts | **Zero calendar spread benefit** on contracts expiring on that day. | Prevents basis-risk blowouts when nearby contracts experience wild price spikes. |

### 4. Closing Auction Session (CAS - Operational August 3, 2026)
* **Legacy Method:** Stock closing price was calculated as the 30-minute Volume Weighted Average Price (VWAP) between 3:00 PM and 3:30 PM.
* **CAS Reform:** Replaced 30-min VWAP with a **Single Price Auction Session (3:20 PM – 3:30 PM order collection)** for F&O-eligible cash stocks. F&O trading hours adjusted to 3:40 PM.
* Eliminates end-of-day price manipulation and spoofing.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'T+0 Settlement DVP Architecture & ASBA in Secondary Market',
        body: `### The Delivery Versus Payment (DVP-III) Protocol in T+0
1. **Trade Execution:** Investor executes trade on stock exchange before 1:30 PM.
2. **Clearing Corporation (CC) Real-Time Netting:** The clearing corporation (NSCCL / ICCL) nets cash and securities obligations.
3. **Electronic Movement:**
   * Cash leg: Directly pulled from buyer's UPI-blocked fund facility (Secondary Market ASBA) via clearing banks.
   * Securities leg: Directly pulled from seller's demat account (CDSL / NSDL) via API.
4. **Immediate Pay-Out:** By 4:30 PM, cash is credited to seller and shares are credited to buyer's demat account with zero counterparty settlement risk.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, F&O Size Thresholds & MF Lite Targets',
        body: `### High-Yield Traps in SEBI Regulatory Reforms

1. **F&O Contract Size Threshold Trap:**
   * *Trap:* Believing the minimum derivative contract size is ₹10 Lakh.
   * *Truth:* SEBI raised the minimum contract value to **₹15 Lakh to ₹20 Lakh**!

2. **Weekly Expiry Frequency Rule:**
   * *Trap:* Assuming weekly options expiries have been completely banned.
   * *Truth:* Weekly expiries are NOT banned; each exchange is permitted to offer weekly contracts for **ONLY ONE benchmark index** (e.g. NSE can only offer Nifty 50 weekly; BSE can only offer Sensex weekly). Bank Nifty, Fin Nifty, and Midcap Nifty weekly expiries were discontinued.

3. **MF Lite Scope:**
   * MF Lite applies **ONLY to Passive Funds (Index Funds and ETFs)**, NOT to actively managed equity funds (Flexi Cap, Small Cap, Large & Mid Cap).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-06-1',
        statement: 'SEBI revised the minimum derivative contract size for equity index derivatives to ₹15 Lakh to ₹20 Lakh and restricted weekly index options to only one benchmark index per exchange.',
        claimType: 'REGULATORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-36',
        excerpt: 'F&O Restructuring: Index derivative contract size raised to ₹15–20 lakh; weekly expiries limited to one benchmark index per exchange.',
      },
      {
        id: 'CLM-GA-06-2',
        statement: 'The MF Lite framework codified under SEBI (Mutual Funds) Regulations, 2026 creates a light-touch regulatory regime specifically for passive mutual fund schemes (Index Funds and ETFs).',
        claimType: 'REGULATORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-36',
        excerpt: 'MF Lite Framework: Codified under SEBI (Mutual Funds) Regulations, 2026 for passive schemes.',
      },
      {
        id: 'CLM-GA-06-3',
        statement: 'The Closing Auction Session (CAS) replaces the 30-minute VWAP with a single price auction mechanism between 3:20 PM and 3:30 PM for F&O-eligible cash stocks.',
        claimType: 'MARKET_MICROSTRUCTURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-36',
        excerpt: 'Closing Auction Session (CAS): Replaced 30-min VWAP calculation with a single price auction mechanism (3:20 PM - 3:30 PM).',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Capital Markets & SEBI Guidelines',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_REGULATORY_METRICS',
        notes: 'Heavily tested on F&O contract sizes (₹15–20L) and T+0 settlement rules.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Securities Market Developments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_REGULATORY_METRICS',
        notes: 'Frequent source of Mains GA questions.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Finance — Primary and Secondary Capital Markets',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for descriptive questions on financialization of household savings and derivatives regulation.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Indian Economy / Mobilization of Resources & Capital Markets',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'Retail investor protection and settlement infrastructure tested in Prelims and Mains.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Economy & Financial Markets',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Tested on mutual fund regulations and market manipulation safeguards.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Capital Markets & Stock Exchanges in India',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'MARKET_OVERVIEW',
        notes: 'Tested on modern stock market reforms and SEBI role.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Economy & Capital Markets',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on T+0 settlement and F&O contract sizes.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Commercial Banking — Capital Market Services & ASBA',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'OPERATIONAL_RULES',
        notes: 'Banks acting as Self-Certified Syndicate Banks (SCSBs) must understand Secondary Market ASBA and T+0.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'SEBI Reforms: T+0 = same-day settlement (expanded in 2026). MF Lite = April 2026 for passive index funds/ETFs. F&O Overhaul: Contract size raised to ₹15–20 Lakh, weekly expiries limited to 1 index per exchange, +2% Extreme Loss Margin on expiry. CAS = single price auction 3:20-3:30 PM.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'SEBI Capital Market Infrastructure Overhaul: 1) Settlement: India pioneered T+1 in 2023; rolled out optional T+0 same-day settlement for top 500 liquid stocks. 2) MF Lite: Codified under SEBI Mutual Funds Regulations 2026 to slash compliance costs for passive index funds and ETFs. 3) F&O Restructuring: Tripled contract sizes to ₹15-20 Lakh; restricted weekly options to only one benchmark index per exchange (NSE Nifty 50, BSE Sensex); extra 2% ELM margin. 4) Closing Auction Session (CAS): Replaces 30-min VWAP with single-price auction.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Capital Markets Microstructure Architecture: 1) Settlement Velocity: T+1 (Standard) -> T+0 (Optional DVP-III real-time netting). 2) Retail Investor Protection: F&O entry barrier elevated to ₹15-20L contract value to discourage gambling. 3) Low-Cost Asset Allocation: MF Lite creating passive index fund highway. 4) Closing Price Integrity: CAS auction eliminates end-of-day order-book spoofing.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CAPITAL_MARKETS_MCQ',
        stem: 'Under SEBI’s revised equity index derivatives framework, what is the mandatory minimum contract size for index futures and options, and how are weekly index expiries restricted?',
        options: [
          '₹5 Lakh to ₹10 Lakh; weekly expiries are completely prohibited across all indices',
          '₹15 Lakh to ₹20 Lakh; weekly expiries are limited to strictly one benchmark index per exchange',
          '₹25 Lakh to ₹50 Lakh; weekly expiries are permitted on all indices without restriction',
          '₹10 Lakh to ₹15 Lakh; weekly expiries are allowed only on monthly expiry Thursdays'
        ],
        correctAnswer: '₹15 Lakh to ₹20 Lakh; weekly expiries are limited to strictly one benchmark index per exchange',
        explanation: 'Under SEBI\'s retail risk containment measures for equity derivatives, the minimum contract size for index derivatives was raised from ₹5–10 Lakh to ₹15–20 Lakh. Furthermore, exchanges are restricted to offering weekly options contracts on strictly ONE benchmark index per exchange (e.g. NIFTY 50 on NSE and SENSEX on BSE).',
        trapExplanation: 'Assuming weekly expiries were banned completely or assuming the minimum contract size remains at ₹10 Lakh are standard traps.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Exact contract size threshold (₹15–20L) and single-benchmark weekly restriction.',
      },
      {
        type: 'CAPITAL_MARKETS_MCQ',
        stem: 'The "MF Lite" framework introduced under the SEBI (Mutual Funds) Regulations, 2026 is specifically designed for which category of mutual fund schemes?',
        options: [
          'Small-Cap and Mid-Cap active equity funds',
          'Passive schemes including Index Funds and Exchange Traded Funds (ETFs)',
          'High-risk alternative investment funds (AIFs)',
          'Liquid funds and overnight corporate treasury schemes'
        ],
        correctAnswer: 'Passive schemes including Index Funds and Exchange Traded Funds (ETFs)',
        explanation: 'The MF Lite framework is a light-touch regulatory regime specifically designed for passive investment schemes—namely Index Funds and ETFs that track a published benchmark index. Because fund managers do not engage in active stock picking in passive funds, SEBI reduced sponsor net-worth thresholds and reporting compliance to reduce fees for retail investors.',
        trapExplanation: 'Confusing passive funds with small-cap or liquid funds is the common error.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Scope restriction of MF Lite strictly to passive schemes.',
      },
    ],
  },
  {
    id: 'CON-GA-07',
    slug: 'insurance-regulatory-modernization-act-2024-100-fdi-and-bima-trinity',
    title: 'Insurance Regulatory Modernization: Insurance Laws (Amendment) Act 2024, 100% FDI, and the Bima Trinity Architecture',
    shortDefinition: 'Structural transformation of India\'s insurance sector: Insurance Laws (Amendment) Act 2024 (100% FDI automatic route, composite licenses), IRDAI\'s Bima Trinity inclusion framework (Bima Sugam, Bima Vistaar, Bima Vahak, Bima Sakhi), and the national vision of "Insurance for All by 2047".',
    difficulty: 'ADVANCED',
    order: 7,
    topicSlug: 'capital-markets-insurance-and-pensions',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Overcoming the 4% Barrier: Moving from Push-Product to Universal Safety Net',
        body: `For over seven decades, life and general insurance in India was sold rather than bought. Penetration stagnated around a modest **4% of GDP**, with millions of rural families viewing insurance agents with suspicion. If a farmer wanted to protect his life, his tractor, his family\'s health, and his hut, he had to purchase four separate policies from different companies, sign eighty pages of fine print, and navigate four disparate claim-settlement offices.

To smash these structural barriers, the **Insurance Regulatory and Development Authority of India (IRDAI)** launched a historic modernization drive aimed at achieving **"Insurance for All by 2047"** (coinciding with India's centenary of independence).

This modernization rests on two pillars:
1. **The Insurance Laws (Amendment) Act, 2024:** Raising the Foreign Direct Investment (FDI) limit to **100% under the automatic route** and permitting **Composite Licenses** (allowing a single insurer to sell both Life and General insurance).
2. **The Bima Trinity:** A revolutionary open-architecture triad:
   * **Bima Sugam:** The digital marketplace (the UPI/ONDC of insurance).
   * **Bima Vistaar:** The all-in-one affordable composite product.
   * **Bima Vahak:** Women-led grassroots village distribution forces.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Bima Trinity & Insurance Laws Amendment Act 2024 Matrix',
        body: `### 1. The Bima Trinity: IRDAI's Three-Pillar Inclusion Architecture

| Pillar | Operational Role & Functional Definition | Key Features & Implementation Mechanism |
| :--- | :--- | :--- |
| **1. Bima Sugam** | **The Digital Marketplace (Technology Layer)** | Unified digital platform for policy purchase, servicing, and claims settlement across all Indian insurers. Issues a mandatory **e-Insurance Account (eIA)** to every policyholder; enables 1-click paperless claims via DigiLocker and ABDM integration. |
| **2. Bima Vistaar** | **The Composite Product (Product Layer)** | An affordable, standardized, bundled composite micro-insurance policy combining **Life + Personal Accident + Health + Property/Asset cover** in a single policy with defined fixed benefits and minimal documentation. |
| **3. Bima Vahak** | **The Grassroots Channel (Distribution Layer)** | Women-led distribution force licensed by IRDAI operating through Self-Help Groups (SHGs) and Gram Sabhas to educate villagers, onboard women, and process instant local claim verification at the village level. |
| **Complementary: Bima Sakhi** | **LIC Women Agent Force** | Launched December 9, 2024 by Life Insurance Corporation (LIC) to recruit women agents (ages 18–70) with 3-year stipends (Yr 1: ₹7k/mo, Yr 2: ₹6k/mo, Yr 3: ₹5k/mo) selling LIC products. |

### 2. The Insurance Laws (Amendment) Act, 2024 Structural Reforms
* **100% FDI under Automatic Route:** Enhanced foreign investment limit from 74% to 100% for insurance companies, attracting global capital and advanced underwriting reinsurance capacity.
* **Composite Insurance Licensing:** Repealed the strict statutory wall separating Life and Non-Life insurance. A single entity can now hold a composite license to underwrite life, health, and general insurance products simultaneously.
* **Reduction in Statutory Capital Requirements:** Replaced rigid one-size-fits-all ₹100 Crore minimum capital requirements with risk-based capital (RBC) norms, enabling specialized micro-insurers and regional boutique insurers to enter.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Bima Sugam Electronic Clearing & Paperless Claim Settlement',
        body: `### How Bima Sugam Resolves Claims in Under 48 Hours
1. **e-Insurance Account (eIA):** Every citizen's policies across all insurers (LIC, SBI Life, New India Assurance, Star Health) are linked to their eIA number and Aadhaar.
2. **Event Trigger:** In the event of death or hospitalization, hospital systems ping Bima Sugam via API.
3. **Automated Verification:** Death certificate fetched directly from Civil Registration System (CRS); hospital discharge summary fetched from Ayushman Bharat Digital Mission (ABDM).
4. **Direct Settlement:** Claim amount disbursed directly to nominee's Aadhaar-seeded bank account via PFMS/DBT, bypassing predatory intermediaries and fraudulent paperwork.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Bima Vahak vs Bima Sakhi & FDI Limits',
        body: `### High-Frequency Examiner Traps in Insurance Reforms

1. **Bima Vahak vs Bima Sakhi (Crucial Distinction!):**
   * **Bima Vahak:** An **IRDAI industry-wide framework** deploying women-led SHG channels to sell multi-insurer *Bima Vistaar* composite policies.
   * **Bima Sakhi:** A **specific corporate initiative of LIC** launched in late 2024 with fixed monthly stipends exclusively selling LIC policies!

2. **The FDI Limit Invariant:**
   * *Trap:* Believing FDI in insurance is capped at 49% or 74%.
   * *Truth:* Under the Insurance Laws Amendment Act 2024, FDI in insurance companies is permitted up to **100% under the automatic route**.

3. **Composite Licensing Invariant:**
   * *Trap:* Believing Indian law strictly prohibits life insurers from selling health policies.
   * *Truth:* The 2024 amendment explicitly legalizes **Composite Licenses**, allowing single corporate balance sheets to sell both life and non-life products.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-07-1',
        statement: 'The Bima Trinity is IRDAI\'s three-pillar strategy for universal insurance comprising Bima Sugam (digital marketplace), Bima Vistaar (composite all-in-one product), and Bima Vahak (women-led grassroots distribution).',
        claimType: 'POLICY_ARCHITECTURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-37',
        excerpt: 'The Bima Trinity: 1. Bima Sugam (Digital Marketplace), 2. Bima Vistaar (Composite Product), 3. Bima Vahak (Distribution Entity).',
      },
      {
        id: 'CLM-GA-07-2',
        statement: 'Under the Insurance Laws (Amendment) Act 2024, Foreign Direct Investment (FDI) in Indian insurance companies is permitted up to 100% under the automatic route.',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-10',
        excerpt: 'FDI Limit: 100% FDI permitted under automatic route in insurance.',
      },
      {
        id: 'CLM-GA-07-3',
        statement: 'Bima Sakhi is a specialized LIC initiative launched in December 2024 recruiting women agents aged 18–70 with 3-year stipends to sell LIC policies, distinct from IRDAI\'s multi-insurer Bima Vahak framework.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-37',
        excerpt: 'Bima Sakhi: LIC initiative launched Dec 9, 2024 to recruit women agents with 3-year stipends.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Insurance Reforms & Bima Trinity',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_REGULATORY_METRICS',
        notes: 'Guaranteed questions in Mains GA on Bima Sugam, Bima Vistaar, and 100% FDI.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Insurance Sector Developments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_REGULATORY_METRICS',
        notes: 'Core scoring area in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI & Finance — Financial Inclusion & Insurance Penetration',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for 15-mark descriptive essays on achieving universal insurance by 2047.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Mobilization of Resources / Financial Inclusion & Insurance',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'Composite licenses, micro-insurance, and FDI liberalisation tested in Prelims and Mains.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security in India — Insurance Principles & Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Direct multiple-statement questions on IRDAI regulations and Bima Vistaar.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Insurance Sector in India',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'DESCRIPTIVE_OVERVIEW',
        notes: 'Tested in 5-mark questions on financial inclusion and social insurance.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes & Insurance',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on 100% FDI and Bima Sugam platform definition.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Bancassurance & Risk Management — Insurance Operations',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'OPERATIONAL_RULES',
        notes: 'Crucial for commercial banks engaged in bancassurance partnerships under IRDAI guidelines.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bima Trinity (IRDAI): Bima Sugam = Digital Platform; Bima Vistaar = All-in-one product (Life+Health+Accident+Property); Bima Vahak = Women SHG distributors. Bima Sakhi = LIC-specific women agents with 3-yr stipend. Insurance FDI = 100% automatic route. Target: Insurance for all by 2047.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Insurance Modernization Blueprint: 1) Vision: "Insurance for All by 2047". 2) Legislative Reform: Insurance Laws (Amendment) Act 2024 permits 100% FDI under automatic route and introduces Composite Licenses (single company selling Life + General). 3) Bima Trinity: Bima Sugam (open digital marketplace with eIA), Bima Vistaar (composite affordable micro-insurance), and Bima Vahak (women-led grassroots distribution). 4) Bima Sakhi: LIC-specific agent recruitment program with monthly stipends.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Insurance Sector Architecture: 1) Statutory Layer: Insurance Act 1938 & IRDA Act 1999 (amended 2024 for 100% FDI & composite licenses). 2) Operational Layer: Bima Sugam digital exchange connecting insurers, policyholders, and ABDM/DigiLocker. 3) Product Layer: Bima Vistaar standardized micro-insurance. 4) Social Distribution: Bima Vahaks mobilizing rural women collectives.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'INSURANCE_MCQ',
        stem: 'Under IRDAI\'s "Bima Trinity" strategy, which component acts as the unified digital electronic marketplace for buying, servicing, and settling insurance claims across all insurance providers?',
        options: ['Bima Vistaar', 'Bima Sugam', 'Bima Vahak', 'Bima Sakhi'],
        correctAnswer: 'Bima Sugam',
        explanation: 'Bima Sugam is the digital public infrastructure (DPI) marketplace designed as an open-architecture electronic platform where citizens can discover, purchase, service, and settle claims for any insurance policy across all life and general insurance companies in India.',
        trapExplanation: 'Confusing the digital platform (Bima Sugam) with the product (Bima Vistaar) or distribution force (Bima Vahak) is the primary trap.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'IBPS PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Confusing the three pillars of the Bima Trinity (Platform vs Product vs Channel).',
      },
      {
        type: 'INSURANCE_MCQ',
        stem: 'What is the Foreign Direct Investment (FDI) limit permitted in Indian insurance companies under the Insurance Laws (Amendment) Act, 2024, and through which route?',
        options: [
          '49% under Automatic Route',
          '74% under Government Approval Route',
          '100% under Automatic Route',
          '51% under Automatic Route and 100% under Government Route'
        ],
        correctAnswer: '100% under Automatic Route',
        explanation: 'Under the Insurance Laws (Amendment) Act, 2024, the FDI ceiling in Indian insurance companies was enhanced to 100% under the automatic route (up from the earlier 74% limit set in 2021 and 49% set in 2015), allowing foreign insurers to own wholly-owned subsidiaries in India.',
        trapExplanation: 'Outdated study materials still cite 74% (from 2021) or 49% (from 2015).',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Outdated historical FDI ceilings (74% vs 100%).',
      },
    ],
  },
  {
    id: 'CON-GA-08',
    slug: 'national-pension-architecture-nps-apy-ups-and-nps-vatsalya',
    title: 'National Pension Architecture: NPS (Tier I & II), APY, Unified Pension Scheme (UPS) & NPS Vatsalya',
    shortDefinition: 'Exhaustive architecture of India\'s statutory pension frameworks: National Pension System (NPS Tier I locked vs Tier II voluntary), Atal Pension Yojana (APY ₹1,000–₹5,000 guaranteed pension), Unified Pension Scheme (UPS: 50% assured pension, 18.5% employer contribution), and NPS Vatsalya for minors.',
    difficulty: 'ADVANCED',
    order: 8,
    topicSlug: 'capital-markets-insurance-and-pensions',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Solving Old-Age Poverty: Shifting from Defined Benefit to Defined Contribution and Back',
        body: `Imagine an economy where citizens work during their youth, but as lifespans extend toward 80+ years, millions of elderly citizens find themselves without physical strength to work and without a single rupee in savings. 

Historically, government employees enjoyed an un-funded **Defined Benefit Pension (Old Pension Scheme - OPS)**, where the state paid 50% of the last drawn basic pay for life out of current tax revenues. But as the government's pension bill surged, threatening to swallow entire state budgets, the Government of India launched the **National Pension System (NPS)** on January 1, 2004—a defined-contribution market-linked retirement framework.

Over the last two decades, India's pension architecture expanded across every demographic:
* **For unorganized informal workers:** The **Atal Pension Yojana (APY)** provides guaranteed minimum monthly pensions.
* **For minor children:** **NPS Vatsalya** allows parents to start compounding retirement savings from infancy.
* **For government employees seeking pension certainty:** In August 2024, the Union Cabinet approved the **Unified Pension Scheme (UPS)**, combining the fiscal prudence of NPS with the assured 50% pension certainty of the old system!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Master Indian Pension Architecture Comparison Matrix',
        body: `### The 4 Pillars of Indian Pension Architecture

| Parameter | National Pension System (NPS) | Atal Pension Yojana (APY) | Unified Pension Scheme (UPS) | NPS Vatsalya |
| :--- | :--- | :--- | :--- | :--- |
| **Target Demographic** | All citizens aged **18 to 70 years** (mandatory for post-2004 central govt staff). | Unorganized sector workers aged **18 to 40 years**. | Central government employees (effective **April 1, 2025**; optional migration from NPS). | Minor children (aged **0 to 18 years**), opened by parents/guardians. |
| **Benefit Structure** | **Market-linked Defined Contribution:** Corpus invested in Equities (E), Corporate Debt (C), and G-Secs (G). | **Guaranteed Minimum Pension:** **₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month** starting at age 60. | **Assured 50% Pension:** 50% of average basic pay drawn in last 12 months for minimum 25 years service. | Converts automatically into a standard **NPS Tier-I account** upon attaining age 18. |
| **Minimum Service / Tenure** | Minimum investment tenure until age 60. | Contribution tenure of **minimum 20 years** (until age 60). | Minimum **25 years service** for full 50% pension; proportionate pension for min 10 years service. | Minimum ₹1,000 opening contribution; ₹1,000 annual deposit. |
| **Minimum Assured Pension** | Zero assurance (depends on market returns). | ₹1,000 to ₹5,000 per month (shortfall funded by Central Govt). | Minimum **₹10,000 per month** assured for at least 10 years of service. | Converts to adult NPS Tier I at age 18. |
| **Assured Family Pension** | Nominee receives remaining annuity / accumulated corpus. | Spouse receives identical monthly pension; corpus returned to nominee. | **Assured 60% of employee\'s pension** paid to spouse upon demise. | Standard NPS death provisions apply. |
| **Contribution Ratios** | Employee 10%, Central Govt 14% of (Basic + DA). | Fixed monthly contribution based on joining age (e.g. ₹210/mo at age 18 for ₹5k pension). | Employee contributes **10%**; Central Govt contributes **18.5%** (enhanced from 14%). | Funded entirely by parents/guardians. |
| **Tax Exemption** | **EEE Status:** Sec 80CCD(1) up to ₹1.5L + Sec 80CCD(1B) additional ₹50,000. 60% lump-sum tax-free. | Covered under Section 80CCD. | Standard government pension tax rules. | Standard NPS tax incentives apply. |

### NPS Tier I vs Tier II Architecture
* **NPS Tier-I (Retirement Account):** Strictly locked until age 60. Max 60% lump-sum tax-free withdrawal at maturity; minimum **40% must be mandatorily converted into a life annuity**.
* **NPS Tier-II (Voluntary Savings Account):** Open-access investment account with **zero withdrawal restrictions** and zero lock-in (no special tax benefits for private citizens).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Unified Pension Scheme (UPS) Actuarial Balance & Dearness Relief',
        body: `### Why the Unified Pension Scheme (UPS) is an Actuarial Breakthrough
1. **Inflation Indexation (Dearness Relief):** Like serving employees who receive Dearness Allowance (DA), pensioners under UPS receive **Dearness Relief (DR)** linked to the All India Consumer Price Index for Industrial Workers (CPI-IW).
2. **Lump-Sum Superannuation Payment:** In addition to the 50% assured monthly pension, employees receive a lump sum at retirement: **1/10th of monthly emolument (Basic + DA) for every completed 6 months of service** (does not reduce monthly pension).
3. **The Separate Government Pool (18.5%):** To finance the guarantee without risking state bankruptcy, the Central Government enhanced its contribution to **18.5% of salary**. Part of this fund goes into an actuarial guarantee buffer managed by PFRDA.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Age Invariants & Income Tax Payer Exclusions in APY',
        body: `### Critical Examiner Traps in Pension Schemes

1. **Atal Pension Yojana (APY) Income Tax Payer Disqualification:**
   * *Trap:* Believing any Indian citizen aged 18–40 can join APY.
   * *Truth:* Effective October 1, 2022, **any citizen who is or has been an Income Tax payer is STRICTLY INELIGIBLE to join APY**!

2. **Unified Pension Scheme (UPS) Minimum Thresholds:**
   * Full 50% assured pension requires **minimum 25 years of service**.
   * Minimum qualifying service is **10 years**, which guarantees a minimum floor pension of **₹10,000 per month**.
   * Central Government employer contribution is **18.5%**, NOT 14%!

3. **NPS Vatsalya Transition Rule:**
   * Opened for minors (under 18 years).
   * **Mandatory Transition:** On the day the child turns 18, the account **automatically shifts into a regular NPS Tier-I account**, and fresh KYC is completed by the major child.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-08-1',
        statement: 'The Unified Pension Scheme (UPS) approved in August 2024 provides an assured pension of 50% of the average basic pay drawn over the last 12 months for central government employees with at least 25 years of service, backed by an enhanced government contribution of 18.5%.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-18',
        excerpt: 'Indian Pension Architecture: UPS assured 50% pension, 18.5% government contribution, effective April 1, 2025.',
      },
      {
        id: 'CLM-GA-08-2',
        statement: 'Atal Pension Yojana (APY) provides a guaranteed minimum pension of ₹1,000 to ₹5,000 per month from age 60 for unorganized workers joining between ages 18 and 40, strictly excluding income tax payers.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-18',
        excerpt: 'Atal Pension Yojana: Guaranteed pension slabs ₹1k-₹5k; income tax payers barred since Oct 2022.',
      },
      {
        id: 'CLM-GA-08-3',
        statement: 'NPS Vatsalya allows parents and guardians to open pension accounts for minor children under 18, which automatically convert into adult NPS Tier-I accounts upon attaining majority.',
        claimType: 'POLICY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-18',
        excerpt: 'NPS Vatsalya: Pension savings for minors converting to standard Tier-I at age 18.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Indian Pension Architecture & UPS',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_METRICS',
        notes: 'Heavily tested on UPS features (50% pension, 18.5% govt share) and NPS Vatsalya.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Social Security Schemes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_METRICS',
        notes: 'High weightage in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Social Security & Pension Reforms in India',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for 15-mark descriptive essays comparing defined benefit (OPS/UPS) vs defined contribution (NPS).',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper II & III — Welfare Schemes / Public Finance & Fiscal Implications of Pensions',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'Fiscal sustainability of UPS vs OPS and APY subscriber rules tested in Prelims and Mains GS 3.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security in India — Pension Funds & PFRDA Acts',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_CRITERIA',
        notes: 'Pension architecture is the single highest-yield topic in UPSC EPFO/APFC.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I & III — Social Security in Rajasthan & Pension Policies',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPARATIVE_STATE_PENSION_ANALYSIS',
        notes: 'Rajasthan had reverted to OPS; comparing OPS, NPS, and UPS is a premier RAS exam question.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on APY age bracket (18-40) and UPS 50% assured pension.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Retail Banking — Pension Products & POP Services',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'BANK_DISTRIBUTION_RULES',
        notes: 'Banks serve as Points of Presence (POPs) for NPS and distribution channels for APY.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Pensions: NPS = Defined Contribution, Tier-I locked (min 40% annuity, 60% tax-free lump sum). APY = Ages 18-40, ₹1k-₹5k pension at 60, tax payers barred. UPS = Assured 50% pension (min 25 yrs service), min ₹10k/mo (10 yrs service), Govt contribution 18.5%. NPS Vatsalya = Minors (<18 yrs) converting to Tier-I at 18.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Indian Pension Framework: 1) NPS: Regulated by PFRDA; all citizens aged 18-70. Tier-I locked until 60; Tier-II open voluntary. 2) APY: Guaranteed monthly pension of ₹1k-₹5k for unorganized sector joining between 18-40 yrs; income tax payers barred. 3) Unified Pension Scheme (UPS): Effective April 1, 2025; provides central government employees assured 50% pension for 25 yrs service and 60% family pension; employer share raised to 18.5%. 4) NPS Vatsalya: Launched 2024 for minor children, converting to standard Tier-I at age 18.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'National Pension Architecture: 1) Regulatory Anchor: PFRDA. 2) Recordkeeping & Management: Central Recordkeeping Agencies (CRAs: Protean, KFintech) + Pension Fund Managers (SBI, LIC, UTI, HDFC). 3) Scheme Spectrum: Informal Workers (APY guaranteed floor) -> Formal/General Public (NPS market-linked defined contribution) -> Minors (NPS Vatsalya) -> Civil Servants (UPS hybrid assured defined benefit).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'PENSION_MCQ',
        stem: 'Under the Unified Pension Scheme (UPS) approved by the Union Cabinet, what is the government\'s monthly contribution rate towards the employee\'s pension corpus, and what is the minimum assured monthly pension for employees completing at least 10 years of service?',
        options: [
          '14% contribution; ₹5,000 per month minimum pension',
          '18.5% contribution; ₹10,000 per month minimum pension',
          '20% contribution; ₹9,000 per month minimum pension',
          '10% contribution; ₹12,500 per month minimum pension'
        ],
        correctAnswer: '18.5% contribution; ₹10,000 per month minimum pension',
        explanation: 'Under the Unified Pension Scheme (UPS) effective April 1, 2025, the Central Government\'s contribution was enhanced from 14% to 18.5% of basic pay plus DA (while the employee continues to contribute 10%). Employees who complete a minimum of 10 years of service are guaranteed an assured minimum pension of ₹10,000 per month.',
        trapExplanation: 'Assuming the government contribution remains at the legacy NPS rate of 14% is the most common error.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Exact government contribution percentage (18.5%) and minimum floor pension (₹10,000).',
      },
      {
        type: 'PENSION_MCQ',
        stem: 'Which of the following individuals is STRICTLY DISQUALIFIED from enrolling in the Atal Pension Yojana (APY)?',
        options: [
          'A 22-year-old self-employed shopkeeper who does not pay income tax',
          'A 35-year-old agricultural laborer who has never filed an income tax return',
          'A 28-year-old private sector employee who has filed an income tax return',
          'An 18-year-old gig-economy delivery worker'
        ],
        correctAnswer: 'A 28-year-old private sector employee who has filed an income tax return',
        explanation: 'Effective October 1, 2022, the Ministry of Finance amended APY guidelines to mandate that any citizen who is, or has been, an income-tax payer under the Income-tax Act, 1961, is not eligible to join the Atal Pension Yojana. If an income tax payer joins, the account is liable to be closed and the accumulated corpus refunded.',
        trapExplanation: 'Candidates often believe APY is open to anyone between ages 18 and 40 without income tax restrictions.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC APFC / EPFO',
        pyqStage: 'Recruitment Test',
        examinerTrapPattern: 'Income-tax payer statutory disqualification rule in APY.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 68: Banking Law, Foreign Exchange & Rural Employment Statutes
  // =========================================================================
  {
    id: 'CON-GA-09',
    slug: 'negotiable-instruments-act-1881-promissory-notes-bills-cheques-section-138',
    title: 'Negotiable Instruments Act 1881: Legal Framework of Promissory Notes, Bills of Exchange, Cheques & Section 138 Dishonour Jurisprudence',
    shortDefinition: 'Statutory mechanics of the Negotiable Instruments Act, 1881: definitions and legal distinctions of Promissory Notes (Sec 4), Bills of Exchange (Sec 5), Cheques and Truncated Cheques (Sec 6), Crossing types, Holder in Due Course (Sec 9), and criminal dishonour penalties under Section 138.',
    difficulty: 'ADVANCED',
    order: 9,
    topicSlug: 'banking-law-forex-and-rural-statutes',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Commercial Paper as Cash: The Legal Invention of Negotiability',
        body: `In ordinary contract law, if someone owes you ₹10,00,000 and writes a signed agreement, you cannot simply hand that piece of paper to a third party and expect them to treat it as hard currency. The third party would have to execute a formal deed of assignment, verify your debtor's signature, and take on the risk of legal dispute.

The **Negotiable Instruments Act, 1881** fundamentally revolutionized commercial civilization by inventing the legal doctrine of **Negotiability**.

A negotiable instrument is a financial document that guarantees the payment of a specific amount of money, either on demand or at a set time, with two extraordinary legal superpowers:
1. **Free Transferability:** It can be transferred from person to person simply by **delivery** (if bearer) or by **endorsement and delivery** (if order).
2. **The "Holder in Due Course" Invariant (Section 9):** A person who takes the instrument in good faith and for valuable consideration acquires a **clean title that is superior to the title of the person who transferred it**, completely free from underlying defects!

To enforce commercial integrity and prevent fraudsters from issuing worthless paper, Parliament introduced **Section 138**, converting the dishonour of a cheque for insufficiency of funds into a **cognizable criminal offense** carrying up to 2 years imprisonment.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Triad of Negotiable Instruments & Section 138 Criminal Penalties',
        body: `### 1. The 3 Canonical Negotiable Instruments (Sections 4, 5, 6)

| Parameter | Promissory Note (Section 4) | Bill of Exchange (Section 5) | Cheque (Section 6) |
| :--- | :--- | :--- | :--- |
| **Parties Involved** | **2 Parties:** Maker (Debtor) and Payee (Creditor). | **3 Parties:** Drawer (Creator), Drawee (Payer), and Payee (Recipient). | **3 Parties:** Drawer (Account holder), Drawee (Strictly a specified Bank), and Payee. |
| **Nature of Undertaking** | **Unconditional PROMISE** to pay (*"I promise to pay B or order ₹50,000"*). | **Unconditional ORDER** to pay (*"Pay B or order ₹50,000"*). | **Unconditional ORDER drawn on a specified banker**. |
| **Drawee Identity** | Maker is himself the payer. | Drawee can be an individual, firm, company, or bank. | **Drawee is ALWAYS and EXCLUSIVELY a Bank**. |
| **Payable on Demand vs Usance** | Can be payable on demand or after a specified time. | Can be payable on demand or after a specified time (Usance Bill). | **ALWAYS payable on demand ONLY** (zero grace period). |
| **Acceptance Required?** | No acceptance needed (maker creates it himself). | **Requires formal Acceptance** by the drawee to become legally binding. | No acceptance required. |
| **Validity Period** | Subject to Limitation Act (3 years from due date). | Subject to Limitation Act (3 years from due date). | Strictly valid for **3 Months** from the date written on the cheque. |

### 2. Truncated Cheques & Electronic Cheques (Section 6 Amendment)
* **Truncated Cheque:** A paper cheque that is scanned at the collecting bank branch, generating a secure digital electronic image (Cheque Truncation System - CTS). The physical paper stops moving, and the clearing process proceeds via digital image and MICR data.

### 3. Section 138 Dishonour Jurisprudence (Criminal Liability)
When a cheque is dishonoured by the bank due to **insufficiency of funds** or because it exceeds the arrangement:
* **Statutory Criminal Penalty:** Imprisonment for a term which may extend to **2 Years**, or with fine which may extend to **twice the amount of the cheque (2x Cheque Amount)**, or both.
* **Mandatory Chronological Timeline:**
  1. Cheque presented within its validity period (**3 months**).
  2. Cheque bounced; bank issues Dishonour Memo.
  3. Payee must issue a formal **written Legal Demand Notice within 30 days** of receiving the dishonour memo.
  4. Drawer is given **15 days** from receipt of notice to make payment.
  5. If payment is NOT made within 15 days, the payee must file a criminal complaint before the Judicial Magistrate **within 1 month** thereafter.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Cheque Crossing Types & The "Not Negotiable" Invariant',
        body: `### Crossing of Cheques (Sections 123 to 131)
1. **General Crossing (Sec 123):** Two parallel transverse lines on the face of the cheque (with or without "and Co."). **Mandate: Can ONLY be paid through a bank account**, never across the cash counter!
2. **Special Crossing (Sec 124):** Contains the name of a specific bank (e.g. *"State Bank of India"*). **Mandate: Can only be collected by that specific named bank**.
3. **The "Not Negotiable" Crossing (Sec 130) Trap:**
   * Does "Not Negotiable" mean the cheque cannot be transferred? **NO! The cheque CAN still be transferred from person to person!**
   * **Legal Effect:** It destroys the "Holder in Due Course" protection. The receiver gets **no better title than the transferor** (*Nemo dat quod non habet*). If the cheque was stolen, a subsequent holder cannot enforce payment even if they took it innocently!
4. **Account Payee Crossing:** Restricts transfer completely; proceeds must be credited exclusively to the named payee's account.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Grace Days & Cheque Validity Dates',
        body: `### High-Frequency Traps in Negotiable Instruments

1. **The 3 Days of Grace Trap:**
   * Bills of Exchange and Promissory Notes payable at a specified period (usance) are entitled to **3 Days of Grace** after the due date.
   * **Cheques NEVER receive grace days**, because cheques are *always payable on demand*!

2. **Section 138 Statutory Notice Windows:**
   * Notice must be sent within **30 days** of bounce memo.
   * Drawer gets **15 days** to pay.
   * Criminal complaint filed within **1 month (30 days)** after the 15-day window expires.
   * *Trap:* Mixing up the 30-day notice period with the 15-day payment window!

3. **Post-Dated vs Stale Cheques:**
   * **Stale Cheque:** Presented more than **3 months** after the written date (bank will reject).
   * **Post-Dated Cheque:** Presented *before* the written date (bank cannot pay until that date arrives).
   * **Ante-Dated Cheque:** Dated prior to current date, valid as long as within the 3-month window.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-09-1',
        statement: 'Under the Negotiable Instruments Act 1881, Section 4 defines Promissory Notes (unconditional promise), Section 5 defines Bills of Exchange (unconditional order), and Section 6 defines Cheques (unconditional order drawn on a specified banker payable on demand).',
        claimType: 'STATUTORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-15',
        excerpt: 'NI Act Sections: Section 4 (Promissory Note), Section 5 (Bill of Exchange), Section 6 (Cheque).',
      },
      {
        id: 'CLM-GA-09-2',
        statement: 'Under Section 138 of the NI Act, dishonour of a cheque for insufficiency of funds is punishable with imprisonment up to 2 years, or with a fine up to twice the cheque amount, following a mandatory 30-day statutory notice.',
        claimType: 'PENAL_SANCTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-15',
        excerpt: 'Cheque Dishonour (Section 138): Punishable with up to 2 years imprisonment or fine up to twice the cheque amount (30-day statutory notice).',
      },
      {
        id: 'CLM-GA-09-3',
        statement: 'Cheques are strictly valid for 3 months from the date of issue, are always payable on demand, and are not entitled to the 3 days of grace applicable to usance bills.',
        claimType: 'COMMERCIAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-15',
        excerpt: 'Negotiable Instruments validity: Cheque 3 months validity, payable on demand with zero grace days.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Banking Awareness — Negotiable Instruments Act 1881',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_CRITERIA',
        notes: 'Guaranteed 2-3 questions in Prelims and Mains on cheque crossing and Section 138.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Banking Law & Practice — Negotiable Instruments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_CRITERIA',
        notes: 'High-frequency scoring area in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Finance — Banking System & Commercial Law',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'LEGAL_AND_ANALYTICAL',
        notes: 'Tested in Phase 1 GA and Phase 2 Finance on legal negotiability and CTS clearing.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Mobilization of Resources & Legal Regulatory Frameworks',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_LEGAL_AWARENESS',
        notes: 'Cheque truncation and commercial dispute resolution mechanisms in India.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Commercial Law & Auditing — Negotiable Instruments Act',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_SECTION_APPLICATION',
        notes: 'Sections 4, 5, 6, 9, 131, and 138 are heavily tested in APFC/EPFO.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper III — Commercial Law (Law Section)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'DESCRIPTIVE_LEGAL_ANALYSIS',
        notes: 'Direct 5-mark question in RAS Law on definition of Cheque and Section 138 procedure.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Commercial Law & Banking',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Section 138 penalty (2 yrs / 2x amount) and cheque validity (3 months).',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Legal and Regulatory Aspects of Banking — Negotiable Instruments Act',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'PROFESSIONAL_LEGAL_MASTERY',
        notes: 'Mandatory operational compliance for all bank cashiers, passing officers, and clearing desks.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NI Act 1881: Sec 4 = Promissory Note (2 parties, promise to pay). Sec 5 = Bill of Exchange (3 parties, order to pay). Sec 6 = Cheque (drawn on bank, payable on demand, 3 months validity, 0 grace days). Sec 138 = Cheque bounce penalty up to 2 yrs jail or 2x cheque amount (30-day notice, 15-day payment window).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Negotiable Instruments Act Blueprint: 1) Triad: Promissory Note (Sec 4 - Maker promises Payee), Bill of Exchange (Sec 5 - Drawer orders Drawee to pay Payee), Cheque (Sec 6 - Drawee is strictly a bank, payable on demand). 2) Holder in Due Course (Sec 9): Clean title acquired for consideration in good faith. 3) Crossings: General (two lines - account credit only), Special (named bank), "Not Negotiable" (removes HDC protection; title cannot be better than transferor\'s). 4) Section 138: Dishonour for lack of funds carries up to 2 years imprisonment or fine up to double the cheque amount.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Commercial Paper Legal Architecture: 1) Three Foundations: Promissory Note (Maker promises), Bill of Exchange (Drawer orders), Cheque (Banker orders). 2) Transferability vs Negotiability: Endorsement & Delivery vs "Not Negotiable" caveat. 3) Clearing Evolution: Paper clearance -> Cheque Truncation System (CTS-2010). 4) Penal Deterrence: Section 138 strict statutory timelines: 30-day notice -> 15-day cure window -> 1-month court filing.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'BANKING_LAW_MCQ',
        stem: 'Under Section 138 of the Negotiable Instruments Act 1881, what is the maximum criminal punishment and fine that a Judicial Magistrate can impose for the dishonour of a cheque due to insufficiency of funds?',
        options: [
          'Imprisonment up to 1 year or fine up to the cheque amount',
          'Imprisonment up to 2 years or fine up to twice the amount of the cheque, or both',
          'Imprisonment up to 3 years or fine up to ₹5 Lakh',
          'Imprisonment up to 6 months with mandatory forfeiture of bank account'
        ],
        correctAnswer: 'Imprisonment up to 2 years or fine up to twice the amount of the cheque, or both',
        explanation: 'Section 138 of the Negotiable Instruments Act explicitly mandates that any person committing the offense of dishonour of cheque for insufficiency of funds shall be punished with imprisonment for a term which may be extended to two years, or with fine which may extend to twice the amount of the cheque, or with both.',
        trapExplanation: 'Assuming 1 year imprisonment or a fine equal to the cheque amount is a common distractor.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'UPSC APFC / EPFO',
        pyqStage: 'Recruitment Test',
        examinerTrapPattern: 'Exact statutory criminal penalty numbers (2 years / twice the cheque amount).',
      },
      {
        type: 'BANKING_LAW_MCQ',
        stem: 'What is the precise legal consequence of writing the words "Not Negotiable" across the face of a crossed cheque?',
        options: [
          'The cheque becomes completely void and cannot be transferred to any person',
          'The cheque can still be transferred, but the holder cannot acquire a title better than that of the transferor',
          'The cheque can only be cashed in physical currency across the bank counter',
          'The bank is legally prohibited from processing the cheque through the Cheque Truncation System'
        ],
        correctAnswer: 'The cheque can still be transferred, but the holder cannot acquire a title better than that of the transferor',
        explanation: 'Under Section 130 of the NI Act, the words "Not Negotiable" do NOT stop transferability. The instrument can still be transferred by endorsement and delivery, but the recipient loses the special protection of a "Holder in Due Course" (HDC). The recipient takes the cheque subject to all legal defects in the title of prior holders (Nemo dat quod non habet).',
        trapExplanation: 'The widespread lay misconception is that "Not Negotiable" means the cheque cannot be transferred at all.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Equating "Not Negotiable" with non-transferability.',
      },
    ],
  },
  {
    id: 'CON-GA-10',
    slug: 'cross-border-banking-nre-nro-fcnrb-accounts-and-nostro-vostro-loro-matrix',
    title: 'Cross-Border Banking & Non-Resident Accounts: NRE, NRO, FCNR(B) Tax-Repatriation Matrices & Nostro/Vostro/Loro Mechanisms',
    shortDefinition: 'Foreign exchange banking architecture: Non-Resident External (NRE), Non-Resident Ordinary (NRO), and Foreign Currency Non-Resident Bank [FCNR(B)] accounts taxability and repatriation rules, alongside correspondent banking Nostro, Vostro, and Loro accounts.',
    difficulty: 'ADVANCED',
    order: 10,
    topicSlug: 'banking-law-forex-and-rural-statutes',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Banking Across Borders: Managing Currency Risk and Repatriation',
        body: `When an Indian engineer moves to Silicon Valley or a doctor moves to Dubai, they face two distinct financial challenges:
1. They earn US Dollars or Dirhams abroad and want to send savings back to India without paying Indian income taxes and with the freedom to transfer the money back abroad whenever they wish.
2. At the same time, they still own ancestral property, rent out an apartment in Bengaluru, or earn dividends from Indian mutual funds—income generated *inside* India that is legally subject to Indian tax laws.

To separate legitimate foreign earnings from domestic taxable income, the Reserve Bank of India, under the **Foreign Exchange Management Act (FEMA), 1999**, established a three-tier Non-Resident Account architecture: **NRE**, **NRO**, and **FCNR(B)**.

Concurrently, to settle international trade payments across different national currencies, global commercial banks maintain specialized correspondent accounts termed **Nostro**, **Vostro**, and **Loro** accounts.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The NRE vs NRO vs FCNR(B) Master Comparison Matrix',
        body: `### 1. The NRI Account Triad Comparison

| Operational Feature | Non-Resident External (NRE) | Non-Resident Ordinary (NRO) | Foreign Currency Non-Resident [FCNR(B)] |
| :--- | :--- | :--- | :--- |
| **Denomination Currency** | **Indian Rupees (INR)** | **Indian Rupees (INR)** | **Permitted Foreign Currencies** (USD, GBP, EUR, JPY, CAD, AUD, etc.). |
| **Permissible Credits** | Inward remittances from abroad in foreign currency only. | Inward foreign remittances PLUS **legitimate income earned in India** (rent, dividends, pension). | Inward remittances in foreign currency only. |
| **Account Type Options** | Savings, Current, Recurring, or Fixed Deposit. | Savings, Current, Recurring, or Fixed Deposit. | **Fixed Term Deposits ONLY** (Tenure: **1 year to 5 years**). |
| **Exchange Rate Risk** | **Borne by the Depositor** (foreign currency converted to INR; depreciating rupee reduces foreign value). | **Borne by the Depositor** (denominated in INR). | **Borne by the BANK** (Depositor faces ZERO currency conversion risk; deposited in USD, returned in USD!). |
| **Taxability in India** | **100% TAX-FREE** (Both principal and interest are exempt from Indian Income Tax and Wealth Tax). | **TAXABLE in India** (Interest earned is subject to Tax Deducted at Source TDS, typically at 30% + surcharge, subject to DTAA). | **100% TAX-FREE** (Interest earned is completely tax-exempt in India). |
| **Repatriability (Transfer Abroad)** | **100% Freely Repatriable** (Principal and interest can be transferred abroad without limit). | **Restricted Repatriability:** Current income freely remittable; capital funds capped at **USD 1 Million ($1,000,000) per financial year**. | **100% Freely Repatriable** (both principal and interest). |
| **Joint Account Holding** | Permitted with other NRIs; with resident close relative on "Former or Survivor" basis. | Permitted with any resident Indian relative on "Former or Survivor" basis. | Permitted with other NRIs; with resident relative on "Former or Survivor" basis. |

### 2. Correspondent Banking Nomenclature: Nostro, Vostro, Loro

| Account Type | Latin Literal Meaning | Practical Banking Meaning & Direction | Real-World Transaction Model |
| :--- | :--- | :--- | :--- |
| **Nostro Account** | *"Our account with you"* | An Indian bank's account maintained in a foreign bank abroad in the **foreign country's currency**. | **State Bank of India (SBI)** maintaining a **US Dollar account with Citibank New York**. |
| **Vostro Account** | *"Your account with us"* | A foreign bank's account maintained in an Indian bank in India in **Indian Rupees (INR)**. | **Sberbank of Russia** maintaining an **INR account with UCO Bank in Kolkata** to settle bilateral trade. |
| **Special Rupee Vostro Account (SRVA)** | *Rupee Trade Settlement* | Specialized Vostro account permitted by RBI in 2022 to settle international export/import invoices directly in INR, bypassing US Dollar clearing. | Russian or Sri Lankan importers paying for Indian goods directly in INR via their bank's SRVA in India. |
| **Loro Account** | *"Their account"* | A third party bank referring to an account held by another bank. | Bank of Baroda referencing SBI's Nostro account with Citibank NY (*"We will settle via their account"*). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'FCNR(B) Fixed Deposit Regulations & Currency Risk Insulation',
        body: `### The FCNR(B) Currency Protection Mechanism
* **Tenure Constraints:** FCNR(B) deposits are permitted for a **minimum period of 1 year** and a **maximum period of 5 years**. Deposits for less than 1 year or more than 5 years are strictly prohibited under RBI regulations.
* **Why Ultra-High-Net-Worth NRIs Prefer FCNR(B):**
  * If an NRI deposits $100,000 in an FCNR(B) account at 5% interest for 3 years:
  * At maturity, the bank returns **$100,000 principal + $15,762 compound interest = $115,762 in US Dollars**.
  * Even if the Indian Rupee depreciated from ₹80 to ₹95 per USD during those 3 years, the depositor loses nothing because the funds never converted into INR.
  * The interest earned is 100% tax-free in India.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, NRO $1 Million Cap & Nostro/Vostro Confusion',
        body: `### High-Frequency Traps in Foreign Exchange Banking

1. **NRE vs NRO Tax Trap (The #1 Exam Question!):**
   * *Trap:* Believing both NRE and NRO interest are tax-free.
   * *Truth:* **NRE interest is 100% tax-free.** **NRO interest is TAXABLE in India** at 30% TDS!

2. **NRO Repatriation Limit:**
   * Funds in an NRO account can only be repatriated abroad up to **USD 1 Million ($1,000,000) per financial year**, subject to tax clearance and Chartered Accountant 15CA/15CB certificates.
   * NRE and FCNR(B) have **zero repatriation limits**.

3. **Nostro vs Vostro Reversal Trap:**
   * *Trap:* Thinking an Indian bank's account abroad is a Vostro account.
   * *Mnemonic:* **N**ostro = **N**uestra (Our account abroad in their currency); **V**ostro = **V**uestra (Your account with us in our currency).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-10-1',
        statement: 'NRE account balances and interest are completely tax-free and freely repatriable without limit, whereas NRO account interest is taxable in India and capital repatriation is capped at USD 1 Million per financial year.',
        claimType: 'TAX_AND_FOREX_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-15',
        excerpt: 'NRE vs NRO Taxability: NRE interest is tax-exempt and fully repatriable. NRO interest is taxable in India with restricted repatriability ($1M/yr).',
      },
      {
        id: 'CLM-GA-10-2',
        statement: 'A Nostro account is an account held by a domestic bank in a foreign bank abroad in foreign currency, whereas a Vostro account is held by a foreign bank in a domestic bank in local currency.',
        claimType: 'BANKING_TERMINOLOGY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-32',
        excerpt: 'Nostro Account: Our account with you. Vostro Account: Your account with us. Loro Account: Their account.',
      },
      {
        id: 'CLM-GA-10-3',
        statement: 'FCNR(B) deposits are accepted strictly as term deposits for tenures between 1 year and 5 years in designated foreign currencies, with currency risk borne entirely by the bank and interest being tax-exempt.',
        claimType: 'REGULATORY_SPECIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-31',
        excerpt: 'NRI Account Architecture: FCNR-B foreign currency term deposits 1-5 years with zero currency risk to depositor.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Banking Awareness — Foreign Exchange & NRI Accounts',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_OPERATIONAL_PARAMETERS',
        notes: 'Guaranteed 2-3 questions in Prelims and Mains on NRE/NRO taxability and Nostro/Vostro.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Banking Awareness — Non-Resident Banking',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_OPERATIONAL_PARAMETERS',
        notes: 'Core scoring area in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Finance — Foreign Exchange Market & Balance of Payments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for descriptive questions on capital account convertibility and Rupee internationalization via SRVA.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper III — Balance of Payments, Foreign Exchange Reserves & Remittances',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'Remittances and Rupee trade settlement mechanisms regularly examined in Prelims and Mains.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Economy & Auditing — Forex Banking',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STATUTORY_PARAMETERS',
        notes: 'Tested on FEMA regulations, NRE/NRO tax rules, and FCNR tenure.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Foreign Trade & Exchange Rate Management',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Tested in 2-mark and 5-mark economic questions.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Banking & Economy',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Nostro/Vostro definitions and NRO $1M limit.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'International Banking & Forex Operations — NRI Accounts',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'OPERATIONAL_COMPLIANCE',
        notes: 'Mandatory operational mastery for all authorized dealer (AD Category I) bank branches.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NRI Accounts: NRE = Rupee account, foreign earnings only, 100% tax-free, 100% repatriable. NRO = Rupee account, domestic Indian income, TAXABLE in India (30% TDS), max $1M/yr repatriation. FCNR(B) = Foreign currency fixed deposit (1 to 5 yrs only), 100% tax-free, bank bears currency risk. Nostro = Our account with you. Vostro = Your account with us.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Cross-Border Banking & Forex Framework: 1) NRE Account: Foreign earnings parked in INR; interest is completely tax-exempt; principal and interest are freely repatriable. 2) NRO Account: Designed to deposit income earned inside India (rents, dividends); interest is taxable at 30% TDS; capital repatriation capped at USD 1 Million per financial year. 3) FCNR(B): Foreign currency term deposit (1-5 yrs); eliminates currency risk for depositor; tax-free. 4) Correspondent Accounts: Nostro (Indian bank account abroad in foreign currency); Vostro (Foreign bank account in India in INR). Special Rupee Vostro Accounts (SRVA) settle bilateral trade in INR.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Forex & Non-Resident Account Architecture: 1) Regulatory Framework: Foreign Exchange Management Act (FEMA), 1999 administered by RBI. 2) The NRI Triad: NRE (INR, Foreign Source, Tax-Exempt), NRO (INR, Indian Source, Taxable, $1M Cap), FCNR-B (Foreign Currency, Term Only 1-5 yrs, Tax-Exempt). 3) Bilateral Clearing: SWIFT-connected Nostro/Vostro correspondent rails transitioning to local-currency SRVA arrangements.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'FOREX_MCQ',
        stem: 'What is the maximum amount of funds that an NRI is permitted to repatriate abroad from an Indian Non-Resident Ordinary (NRO) account in a single financial year?',
        options: ['USD 250,000', 'USD 500,000', 'USD 1,000,000 (USD 1 Million)', 'USD 5,000,000'],
        correctAnswer: 'USD 1,000,000 (USD 1 Million)',
        explanation: 'Under the Foreign Exchange Management (Remittance of Assets) Regulations, an NRI/PIO is permitted to remit abroad through an Authorized Dealer bank an amount up to USD 1 Million (USD 1,000,000) per financial year out of balances held in their NRO account, subject to payment of applicable taxes.',
        trapExplanation: 'Confusing the USD 1 Million NRO limit with the USD 250,000 annual limit under the Liberalised Remittance Scheme (LRS) for resident Indians is a classic trap.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'SBI PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Confusing NRO $1M repatriation limit with resident LRS $250k limit.',
      },
      {
        type: 'FOREX_MCQ',
        stem: 'Which of the following statements correctly describes a "Vostro Account"?',
        options: [
          'An account maintained by an Indian commercial bank in London in British Pounds',
          'An account maintained by a foreign bank in an Indian bank in India in Indian Rupees',
          'A personal savings account opened by a Non-Resident Indian in a foreign currency',
          'A specialized escrow account maintained strictly with the International Monetary Fund'
        ],
        correctAnswer: 'An account maintained by a foreign bank in an Indian bank in India in Indian Rupees',
        explanation: 'A Vostro account (from the Latin "your account with us") is an account that a foreign bank maintains with a domestic bank in the domestic bank’s country and currency (e.g. a Russian bank holding a Rupee account with an Indian bank in India).',
        trapExplanation: 'Option A describes a Nostro account ("our account with you"), which is the exact opposite of a Vostro account.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Reversal of Nostro and Vostro operational directions.',
      },
    ],
  },
  {
    id: 'CON-GA-11',
    slug: 'rural-employment-modernization-vb-gram-g-act-2025-and-day-nrlm',
    title: 'Rural Employment Modernization & Agrarian Transformation: VB-G RAM G Act 2025 (MGNREGA Repeal & 125-Day Guarantee) & DAY-NRLM Credit Framework',
    shortDefinition: 'Statutory transformation of rural livelihoods: Viksit Bharat - Grameen Rozgar Aur Aajeevika Mission Guarantee (VB-G RAM G) Act 2025 (repealing MGNREGA 2005, enhancing work guarantee to 125 days, unemployment allowance rules), and Deendayal Antyodaya Yojana - NRLM (₹20 Lakh collateral-free SHG loans, Lakhpati Didi mission).',
    difficulty: 'ADVANCED',
    order: 11,
    topicSlug: 'banking-law-forex-and-rural-statutes',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Survival Safety-Net to Productive Capital Formation',
        body: `For two decades, the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) 2005 served as India's primary rural survival mechanism, guaranteeing 100 days of manual unskilled work per rural household. However, over time, critical structural limitations emerged:
* Allegations of "digging holes and filling them up" with zero durable community asset creation.
* Conflicts during peak agricultural harvesting season, where farm owners complained of artificial farm labour shortages because workers preferred public work sites.
* Protracted wage payment delays and ghost muster rolls.

To replace this legacy welfare model with a high-productivity, asset-generating architecture, Parliament enacted the **Viksit Bharat - Grameen Rozgar Aur Aajeevika Mission Guarantee (VB-G RAM G) Act, 2025**, which came into full force on **July 1, 2026**, officially repealing MGNREGA 2005.

The new Act raises the statutory work guarantee from **100 days to 125 days per household**, incorporates mandatory 60-day agricultural harvesting pauses, and converges with **DAY-NRLM (National Rural Livelihoods Mission)** to transform women Self-Help Groups into commercial micro-enterprises under the **Lakhpati Didi Mission**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The VB-G RAM G Act 2025 vs MGNREGA 2005 Master Comparison Matrix',
        body: `### 1. The Statutory Evolution: MGNREGA 2005 vs VB-G RAM G Act 2025

| Parameter | Legacy MGNREGA 2005 (Repealed) | VB-G RAM G Act 2025 (In Force July 1, 2026) |
| :--- | :--- | :--- |
| **Statutory Work Guarantee** | **100 days** of guaranteed wage employment per rural household per financial year. | **125 days** of guaranteed wage employment per rural household per financial year. |
| **Agricultural Protection Pause** | Work offered continuously throughout the year (leading to farm labour scarcity during sowing/harvesting). | **Mandatory 60-day Agricultural Pause:** Works paused during peak sowing and harvesting seasons to ensure farm labour availability. |
| **Work Allocation Radius** | Within 5 km of village (if beyond 5 km, 10% extra wage paid). | Strictly within **5 km radius** of applicant's residence (transport allowance if exceeded). |
| **Unemployment Allowance (Section 11)** | If employment not provided within 15 days of application: min 25% of wage for first 30 days; min 50% thereafter. | **Strictly Enforced Section 11:** First 30 days = **minimum 25% (1/4th) of wage rate**; Remaining period = **minimum 50% (1/2) of wage rate**. |
| **Asset Creation Standard** | Primarily mud roads, pond digging, and desilting. | **Durable Capital Formation:** Solar micro-grids, farm ponds, check dams, cold storage units, and rural logistics pathways. |
| **Biometric & Wage Payments** | Aadhaar-Based Payment System (ABPS) via DBT. | **100% Digital Telemetry:** National Mobile Monitoring System (NMMS) geo-tagged attendance with real-time biometric DBT credit within 7 days. |

### 2. Deendayal Antyodaya Yojana - NRLM (DAY-NRLM) Credit Architecture
Implemented by the **Ministry of Rural Development (MoRD)**:
* **Target:** Universal mobilization of rural poor households into Self Help Groups (SHGs) and federations.
* **Collateral-Free Credit Limit:** Commercial banks are statutorily prohibited from demanding collateral for loans up to **₹20,00,000 (₹20 Lakh)** to Women SHGs under DAY-NRLM.
* **Interest Subvention Scheme:** Women SHGs receive loans up to **₹3 Lakh at 7% per annum**, with an additional **3% subvention for prompt repayment**, lowering the effective interest rate to **4% per annum**.
* **Lakhpati Didi Mission:** National mission to enable at least **3 Crore (30 million) women SHG members** to earn a sustainable annual income of at least **₹1,00,000 (₹1 Lakh) per year** through micro-enterprises, agri-drones (Namo Drone Didi), and community value chains.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The 125-15-5-60 Operational Mnemonic & Unemployment Allowance Pipeline',
        body: `### The "125-15-5-60" Statutory Operational Rule of VB-G RAM G
$$\\mathbf{125} \\text{ Days Work Guarantee} \\implies \\mathbf{15} \\text{ Days Assignment Window} \\implies \\mathbf{5} \\text{ km Radius} \\implies \\mathbf{60} \\text{ Days Agricultural Pause}$$

1. **Day 0:** Rural household submits formal written/digital application for work.
2. **Days 1 to 15:** Gram Panchayat / Program Officer must allocate work site within 5 km.
3. **Day 16 Trigger (If no work provided):** Automatic statutory liability triggered against the State Government under Section 11:
   * Days 16 to 45 (First 30 days): State must pay minimum **25% of the daily minimum wage rate** into beneficiary's account.
   * Day 46 onwards: State must pay minimum **50% of the daily minimum wage rate** until work is provided.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Household vs Individual Rules & Collateral Thresholds',
        body: `### Critical Traps in Rural Employment & Livelihood Schemes

1. **Per Household vs Per Person Trap (The Classic Trap!):**
   * *Trap:* Assuming the 125-day work guarantee is *per person*.
   * *Truth:* The guarantee is strictly **125 days per HOUSEHOLD**, shared among all adult members who register.

2. **MGNREGA Repeal Timing:**
   * *Trap:* Believing MGNREGA 2005 is still operative in perpetuity.
   * *Truth:* The **VB-G RAM G Act 2025 came into statutory force on July 1, 2026**, officially superseding and repealing the 2005 Act.

3. **DAY-NRLM Collateral-Free Limit:**
   * *Trap:* Assuming collateral-free SHG lending is capped at ₹10 Lakh.
   * *Truth:* The Reserve Bank of India enhanced the collateral-free lending threshold for Women SHGs to **₹20 Lakh**!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-GA-11-1',
        statement: 'The VB-G RAM G Act 2025 came into statutory force on July 1, 2026, officially repealing the MGNREGA 2005 and enhancing the legal wage employment guarantee to 125 days per rural household per financial year.',
        claimType: 'STATUTORY_REPLACEMENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-14',
        excerpt: 'MGNREGA Repeal Date: VB-G RAM G Act 2025 came into force on July 1, 2026, repealing MGNREGA 2005; Statutory Days Guarantee enhanced to 125 days.',
      },
      {
        id: 'CLM-GA-11-2',
        statement: 'Under Section 11 of the VB-G RAM G Act 2025, failure to provide work within 15 days triggers a mandatory unemployment allowance of minimum 25% of wages for the first 30 days and minimum 50% thereafter.',
        claimType: 'STATUTORY_COMPENSATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-14',
        excerpt: 'Unemployment Allowance (Sec 11): First 30 days = min 25% (1/4th) of wage; Remaining = min 50% (1/2).',
      },
      {
        id: 'CLM-GA-11-3',
        statement: 'Under DAY-NRLM, commercial banks provide collateral-free loans up to ₹20 Lakh to women Self-Help Groups, with an interest subvention reducing effective rates to 4% on prompt repayment.',
        claimType: 'CREDIT_REGULATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Static_GA_Superbook_Master.md#note-14',
        excerpt: 'Collateral-Free Limit: No collateral up to ₹20 lakh for women SHGs under DAY-NRLM.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Rural Schemes & Priority Sector Lending',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_METRICS',
        notes: 'Guaranteed questions on 125 days guarantee and ₹20L collateral-free SHG limit.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Rural Livelihoods & Employment',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STATUTORY_METRICS',
        notes: 'Core scoring area in Mains General Awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'ESI — Rural and Agricultural Finance / Poverty Alleviation',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE_AND_OBJECTIVE',
        notes: 'Core topic for 15-mark descriptive essays on rural employment transitions and SHG microfinance.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper II & III — Welfare Schemes / Employment, Poverty & Inclusive Growth',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CRITICAL_POLICY_EVALUATION',
        notes: 'Statutory rights, unemployment allowance jurisprudence, and asset quality tested in Prelims and Mains GS 3.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Social Security in India — Employment Guarantee Legislation',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATUTORY_SECTIONS',
        notes: 'Statutory wage and allowance provisions are heavily examined in APFC/EPFO.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I & III — Rural Development & Employment Schemes in Rajasthan',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'STATE_AND_CENTRAL_SCHEMES',
        notes: 'Rajasthan was the pioneer in employment guarantee; comparing state models with VB-G RAM G is a top RAS question.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Government Schemes',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on 125 days, ₹20 Lakh limit, and July 1 2026 effective date.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Priority Sector Lending — SHG Bank Linkage & Rural Credit',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'OPERATIONAL_LENDING_LIMITS',
        notes: 'Direct circular guidelines on ₹20 Lakh collateral exemption for Women SHGs under PSL.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rural Employment: VB-G RAM G Act 2025 in force July 1, 2026 (repeals MGNREGA 2005). 125 days work/household/yr. Work within 5 km. Sec 11 Unemployment Allowance: 1st 30 days = min 25% wage; then min 50%. 60-day ag pause. DAY-NRLM: ₹20 Lakh collateral-free loan for women SHGs. Lakhpati Didi target = 3 Cr women.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rural Employment & Livelihood Blueprint: 1) VB-G RAM G Act 2025: In force July 1, 2026, superseding MGNREGA 2005; enhances statutory work guarantee to 125 days per household; mandates 60-day agricultural harvest pause; enforces Section 11 unemployment allowance (25% for 30 days, 50% thereafter) if work not assigned within 15 days. 2) DAY-NRLM: Organizes rural women into SHGs; provides collateral-free loans up to ₹20 Lakh; interest subvention down to 4% for prompt repayment. 3) Lakhpati Didi: National mission empowering 3 Crore women SHG members to earn >₹1 Lakh/year.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rural Welfare Statutory Architecture: 1) Legislative Transition: MGNREGA 2005 -> VB-G RAM G Act 2025 (100 -> 125 days; asset durability & harvest protection). 2) Legal Remedies: 15-day assignment mandate backed by Section 11 statutory daily compensation. 3) Financial Inclusion Pipeline: DAY-NRLM SHG-Bank Linkage -> ₹20L collateral exemption -> Lakhpati Didi enterprise scaling.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'RURAL_SCHEME_MCQ',
        stem: 'Under the Viksit Bharat - Grameen Rozgar Aur Aajeevika Mission Guarantee (VB-G RAM G) Act 2025, how many days of guaranteed wage employment are statutory provided per rural household in a financial year, and what is the mandatory pause period during peak agricultural operations?',
        options: [
          '100 days of guaranteed employment; zero agricultural pause',
          '125 days of guaranteed employment; mandatory 60-day agricultural pause',
          '150 days of guaranteed employment; mandatory 90-day agricultural pause',
          '125 days of guaranteed employment; mandatory 30-day agricultural pause'
        ],
        correctAnswer: '125 days of guaranteed employment; mandatory 60-day agricultural pause',
        explanation: 'Under the VB-G RAM G Act 2025 (which replaced MGNREGA on July 1, 2026), the statutory wage employment guarantee was enhanced from 100 days to 125 days per household per financial year. To protect farm productivity and avoid agricultural labor shortages, the Act introduces a mandatory 60-day agricultural pause during peak sowing and harvesting seasons.',
        trapExplanation: 'Assuming 100 days (from legacy MGNREGA) or 150 days (which was limited to drought districts under MGNREGA) is the common error.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Exact enhanced days guarantee (125 days) and agricultural pause duration (60 days).',
      },
      {
        type: 'RURAL_SCHEME_MCQ',
        stem: 'What is the maximum collateral-free loan limit prescribed by the Reserve Bank of India for women Self-Help Groups (SHGs) under the DAY-NRLM framework?',
        options: ['₹5 Lakh', '₹10 Lakh', '₹15 Lakh', '₹20 Lakh'],
        correctAnswer: '₹20 Lakh',
        explanation: 'Under the revised Reserve Bank of India priority sector and financial inclusion guidelines for DAY-NRLM, commercial banks are statutorily mandated not to demand any collateral or margin for loans up to ₹20,00,000 (₹20 Lakh) sanctioned to women Self-Help Groups.',
        trapExplanation: 'The legacy threshold was ₹10 Lakh (raised from ₹5 Lakh years ago). Outdated materials still cite ₹10 Lakh.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'RBI Grade B Phase 1',
        pyqStage: 'Phase 1',
        examinerTrapPattern: 'Outdated collateral-free threshold (₹10L vs current ₹20L).',
      },
    ],
  },
];

export async function seedBatchStaticGABatch2CanonicalKnowledge() {
  console.log('Seeding Static GA Batch 2 (Regulators, Monetary Tools, SEBI F&O, Insurance Bima Trinity, Pensions UPS, NI Act, Forex NRE/NRO, VB-G RAM G)...');

  // 1. Ensure Subject exists
  let subject = await db.subject.findUnique({
    where: { slug: 'general-awareness' },
  });
  if (!subject) {
    const domain = await db.domain.findFirst({
      where: { slug: 'domain-economic-commercial-financial-intelligence' },
    });
    subject = await db.subject.create({
      data: {
        name: 'General Awareness & Global Institutions',
        slug: 'general-awareness',
        domainId: domain ? domain.id : 'domain-economic-commercial-financial-intelligence',
        scopeStatement: 'Apex financial regulators, central banking operations, capital markets, insurance reforms, pensions, negotiable instruments, cross-border accounts, and rural employment statutes.',
        description: 'Comprehensive static banking, regulatory architecture, multilateral development institutions, and statutory economic frameworks.',
        order: 4,
        status: 'ACTIVE',
      },
    });
  }

  // 2. Ensure Topics exist (Topics 66, 67, 68)
  const topicDefs = [
    {
      slug: 'financial-regulators-and-banking-governance',
      title: 'Financial Regulators, Monetary Systems & Banking Governance',
      description: 'Apex regulators (RBI, SEBI, IRDAI, PFRDA, IFSCA), LAF corridor mechanics, and Domestic Systemically Important Banks (D-SIBs).',
      order: 66,
    },
    {
      slug: 'capital-markets-insurance-and-pensions',
      title: 'Capital Markets, Insurance Reforms & Pension Architecture',
      description: 'T+0 settlement, MF Lite, F&O derivatives risk containment, Bima Trinity, 100% FDI in insurance, NPS, APY, and Unified Pension Scheme (UPS).',
      order: 67,
    },
    {
      slug: 'banking-law-forex-and-rural-statutes',
      title: 'Banking Law, Foreign Exchange & Rural Employment Statutes',
      description: 'Negotiable Instruments Act 1881, Section 138 cheque dishonour, NRE/NRO/FCNR accounts, Nostro/Vostro mechanics, and VB-G RAM G Act 2025.',
      order: 68,
    },
  ];

  for (const t of topicDefs) {
    await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: t.slug,
        },
      },
      update: {
        title: t.title,
        description: t.description,
        order: t.order,
        status: 'ACTIVE',
      },
      create: {
        slug: t.slug,
        title: t.title,
        description: t.description,
        order: t.order,
        subjectId: subject.id,
        status: 'ACTIVE',
      },
    });
  }

  // 3. Ensure Source exists
  const sourceGA = await db.source.upsert({
    where: { id: 'SRC-STATIC-GA-2026' },
    update: {},
    create: {
      id: 'SRC-STATIC-GA-2026',
      title: 'Static General & Financial Awareness Superbook Master Corpus (2026)',
      sourceType: 'COMPREHENSIVE_BANKING_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Canonical regulatory synthesis covering statutory acts, central banking liquidity frameworks, capital market regulations, and legal banking instruments.',
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

  for (const c of STATIC_GA_BATCH_2_CONCEPTS) {
    const topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: c.topicSlug,
      },
    });
    if (!topic) {
      console.warn(`Topic not found for slug: ${c.topicSlug}, skipping concept: ${c.id}`);
      continue;
    }

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
          sourceId: sourceGA.id,
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
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
          notes: em.notes,
        },
        create: {
          examId: exam.id,
          conceptId: concept.id,
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
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

  console.log(`Successfully seeded ${STATIC_GA_BATCH_2_CONCEPTS.length} Batch 2 Static GA canonical concepts.`);
}
