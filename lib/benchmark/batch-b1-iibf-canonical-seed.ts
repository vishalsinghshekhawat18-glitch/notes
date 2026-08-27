/**
 * Batch B1 IIBF Canonical Knowledge Seed (Topics 38–41: 16 Concepts)
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers:
 * - Topic 38: Indian Financial System Architecture & Specialized Banking Tiers (CON-IIBF-01 to CON-IIBF-05)
 * - Topic 39: Financial Markets, Fixed Income & Derivatives (CON-IIBF-06 to CON-IIBF-13)
 * - Topic 40: Forex Markets & NRI Banking Framework (CON-IIBF-14 to CON-IIBF-15)
 * - Topic 41: Sustainable Finance & Banking Technology (CON-IIBF-16)
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const BATCH_B1_IIBF_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 38: INDIAN FINANCIAL SYSTEM ARCHITECTURE & SPECIALIZED BANKING TIERS
  // =========================================================================
  {
    id: 'CON-IIBF-01',
    topicOrder: 38,
    topicSlug: 'iibf-indian-financial-system-architecture',
    topicTitle: 'Indian Financial System Architecture & Institutional Tiers',
    topicDescription: 'Evolution of Indian financial system, phase transitions (Pre-1951, Nationalization 1969/1980, Post-1991 Narasimham reforms), and institutional matrix.',
    slug: 'indian-financial-system-evolution-institutional-structure-and-phase-transitions',
    title: 'Indian Financial System: Structural Evolution, Institutional Pillars & Phase Transitions',
    shortDefinition: 'The historical and institutional architecture of the Indian Financial System: evolution across four distinct phases (Pre-Independence colonial banking, Post-Independence State Domination and 14/6 Bank Nationalizations in 1969 & 1980, Narasimham Committee I & II post-1991 structural reforms), the formal financial system quad (Financial Institutions, Financial Markets, Financial Instruments, Financial Services), and dual intermediation through Banks vs Non-Bank Financial Intermediaries.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-01-01',
        statement: 'The Indian banking system underwent two major nationalization waves under the Banking Companies (Acquisition and Transfer of Undertakings) Acts: 14 major commercial banks with deposits >₹50 Crore on July 19, 1969, and 6 additional commercial banks with deposits >₹200 Crore on April 15, 1980, shifting banking from class banking to mass social banking.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Banking Companies (Acquisition and Transfer of Undertakings) Acts, 1969 & 1980; RBI History Vol III',
        excerpt: '14 banks nationalized in 1969 (>₹50 Cr deposits) and 6 banks nationalized in 1980 (>₹200 Cr deposits).',
      },
      {
        id: 'CLM-IIBF-01-02',
        statement: 'The Narasimham Committee on Financial System (1991) and Banking Sector Reforms (1998) laid the foundations of modern Indian commercial banking: progressive reduction of CRR/SLR, deregulation of interest rates, introduction of prudential IRACP norms, entry of new private sector banks, and phased adoption of Basel capital adequacy.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reports of the Committee on the Financial System (M. Narasimham, 1991 & 1998); RBI Bulletin',
        excerpt: 'Narasimham reforms reduced statutory pre-emptions, deregulated rates, and introduced prudential norms.',
      },
      {
        id: 'CLM-IIBF-01-03',
        statement: 'Mega-mergers of Public Sector Banks (effective April 1, 2020) consolidated 10 public sector banks into 4 anchor banks (PNB, Canara, Union Bank, Indian Bank), reducing the total number of Public Sector Banks (PSBs) in India from 27 in 2017 to exactly 12 (including SBI).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government of India Gazette Notifications on PSB Consolidation (March 2020); Ministry of Finance',
        excerpt: 'PSB mega-consolidation reduced public sector banks from 27 to 12 anchor banks.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Elite Commercial Guilds to Financial Lifelines of 1.4 Billion',
        body: 'In early post-independence India, commercial banks were closely controlled by industrial cartels, funneling 80% of urban deposits into promoter companies while ignoring agriculture, rural artisans, and small enterprises.\n\nThe structural journey of Indian banking is defined by two monumental pivots: the **1969 Social Banking Revolution (Nationalization)** which pushed branches into unbanked villages, and the **1991 Narasimham Reforms** which introduced prudential solvency, global risk management, and technological core banking systems.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Pillars of the Indian Financial System',
        body: '```mermaid\ngraph TD\n    IFS["INDIAN FINANCIAL SYSTEM"]\n    IFS --> FI["1. Financial Institutions: Commercial Banks, Cooperative Banks, RRBs, SFBs, NBFCs, DFIs"]\n    IFS --> FM["2. Financial Markets: Money Market (<1 yr) & Capital Market (>1 yr)"]\n    IFS --> INS["3. Financial Instruments: Deposits, G-Secs, T-Bills, Commercial Paper, Equity, Bonds, Derivatives"]\n    IFS --> FS["4. Financial Services: Merchant Banking, Custodial, Underwriting, Depository, Factoring, Forex"]\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Pre-1991 Controlled Banking vs Post-1991 Reformed Banking',
        body: '| Dimension | Pre-1991 Regime | Post-1991 Modern Regime |\n| :--- | :--- | :--- |\n| **Statutory Pre-emptions** | Peak **CRR up to 15%** and **SLR up to 38.5%** (over 53% of bank funds pre-empted by State). | CRR lowered to ~4.5% and SLR lowered to 18.0%, freeing bank loanable funds. |\n| **Interest Rate Regime** | Strictly administered by RBI for deposits and loans. | **Fully deregulated**; lending benchmarked to External Benchmark (EBLR: Repo linked). |\n| **Asset Classification** | Vague health-code system without mandatory loss provisions. | Strict **Prudential IRACP Norms (90-day overdue NPA rule)** and graded provisioning. |\n| **Competition & Entry** | State monopoly; private entry barred. | Universal Private Banks (HDFC, ICICI, Axis) and Differentiated Banks (SFBs, Payments Banks). |\n| **Capital Standards** | Nominal net-worth rules. | **Basel III Capital Regulations (9% CRAR + 2.5% CCB = 11.5%)**. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Indian Financial System',
        body: '1. **Deposit Thresholds for Nationalization:** 1969 threshold was **₹50 Crore** (14 banks); 1980 threshold was **₹200 Crore** (6 banks).\n2. **Current Number of PSBs:** Exactly **12 Public Sector Banks** operate in India today (State Bank of India + 11 nationalized banks: PNB, BoB, Canara, Union, Indian, BoI, Central Bank, IOB, UCO, Bank of Maharashtra, Punjab & Sind Bank).\n3. **First Bank in India:** Bank of Hindostan (1770 in Calcutta by Alexander and Co.). First bank with limited liability managed by Indians: Oudh Commercial Bank (1881). First purely Indian bank: Punjab National Bank (1894 in Lahore).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A & B - Indian Financial System & Banking Evolution',
        notes: 'Direct MCQs on nationalization dates/thresholds (1969 ₹50Cr, 1980 ₹200Cr) and 12 PSBs list.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bank Nationalization: 1969 (14 banks, >₹50 Cr deposits) + 1980 (6 banks, >₹200 Cr deposits). Narasimham Committee I (1991) & II (1998) deregulated rates, reduced CRR/SLR, introduced 90-day IRACP and Basel norms. 2020 PSB mega-mergers reduced PSBs from 27 to 12 anchor banks. 4 pillars: Institutions, Markets, Instruments, Services.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What were the minimum deposit thresholds required for the nationalization of commercial banks in India in July 1969 and April 1980 respectively?',
        options: [
          '₹50 Crore in 1969 (14 banks) and ₹200 Crore in 1980 (6 banks)',
          '₹100 Crore in 1969 (14 banks) and ₹500 Crore in 1980 (6 banks)',
          '₹25 Crore in 1969 (14 banks) and ₹100 Crore in 1980 (6 banks)',
          '₹50 Crore in 1969 (20 banks) and ₹200 Crore in 1980 (10 banks)',
        ],
        correctAnswer: '₹50 Crore in 1969 (14 banks) and ₹200 Crore in 1980 (6 banks)',
        explanation: 'Under the Banking Companies (Acquisition and Transfer of Undertakings) Ordinance 1969, 14 banks with demand and time liabilities of not less than ₹50 Crore were nationalized on 19 July 1969. In the second wave on 15 April 1980, 6 banks with liabilities exceeding ₹200 Crore were nationalized.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-02',
    topicOrder: 38,
    topicSlug: 'iibf-indian-financial-system-architecture',
    topicTitle: 'Indian Financial System Architecture & Institutional Tiers',
    topicDescription: 'Regional Rural Banks (RRBs) structure, equity holding split, amalgamation phases, and PSL compliance.',
    slug: 'regional-rural-banks-structure-amalgamation-and-ownership-governance',
    title: 'Regional Rural Banks (RRBs): Capital Structure, Sponsor Bank Roles & Phased Amalgamations',
    shortDefinition: 'The statutory framework governing Regional Rural Banks under the Regional Rural Banks Act 1976 (M. Narasimham Working Group, 1975): statutory tripartite equity shareholding (Central Government 50%, Sponsor Public Sector Bank 35%, State Government 15%), target beneficiary focus (Small/Marginal Farmers, Agricultural Laborers, Rural Artisans), mandatory 75% Priority Sector Lending allocation, supervision by NABARD under Section 35A of Banking Regulation Act 1949, and consolidation from 196 original RRBs to 43 RRBs across three amalgamation waves.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-02-01',
        statement: 'Regional Rural Banks were created under the RRB Act 1976 with a statutorily mandated tripartite capital shareholding structure: Central Government holds 50%, the Sponsor Commercial Bank holds 35%, and the concerned State Government holds 15%.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Regional Rural Banks Act, 1976 (Section 6(1)); NABARD Annual Report on RRBs',
        excerpt: 'RRB capital structure is fixed by statute: Center 50%, Sponsor Bank 35%, State Govt 15%.',
      },
      {
        id: 'CLM-IIBF-02-02',
        statement: 'Under RBI Priority Sector Lending guidelines, Regional Rural Banks (RRBs) are mandated to allocate 75% of their Adjusted Net Bank Credit (ANBC) to Priority Sectors, with at least 54% directed to Agriculture and allied rural activities.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Directions – Priority Sector Lending – Targets and Classification for RRBs',
        excerpt: 'RRBs must meet a 75% PSL target (vs 40% for domestic scheduled commercial banks).',
      },
      {
        id: 'CLM-IIBF-02-03',
        statement: 'The first RRB established in India was the Prathama Bank (sponsored by Syndicate Bank in Moradabad, UP on October 2, 1975); phased amalgamations between 2005 and 2021 consolidated 196 standalone RRBs into 43 state-level amalgamated RRBs.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NABARD Compendium on RRB Structural Reforms; Ministry of Finance',
        excerpt: 'Prathama Bank was 1st RRB (Oct 2, 1975); 196 RRBs consolidated into 43.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Combining Rural Touch with Modern Commercial Discipline',
        body: 'Commercial banks possessed modern organizational discipline and capital, but had high urban cost structures and lacked local rural touch. Cooperative banks had deep local rural roots, but suffered from chronic political interference and financial mismanagement.\n\nThe **Narasimham Working Group (1975)** conceptualized **Regional Rural Banks (RRBs)** as an institution combining the *local feel and familiarity of cooperatives* with the *business acumen and modernized accounting of commercial banks*.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Tripartite Capital Structure & Governance Matrix',
        body: '```mermaid\ngraph TD\n    RRB["Regional Rural Bank (RRB Act 1976)"]\n    RRB --> C50["Central Government: 50% Equity Share"]\n    RRB --> S35["Sponsor Public Sector Bank: 35% Equity Share (Provides IT, management, officers)"]\n    RRB --> ST15["Concerned State Government: 15% Equity Share (Provides land, local administrative coordination)"]\n```\n\n### Institutional Supervision\n* **Licensing & Monetary Norms:** Governed by the **Reserve Bank of India (RBI)**.\n* **Statutory Inspection & Supervision:** Carried out by **NABARD** under Section 35(6) of the *Banking Regulation Act, 1949*.',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in RRB Framework',
        body: '1. **Capital Equity Split:** Always remember the statutory 50:35:15 formula: **Center 50% / Sponsor Bank 35% / State Govt 15%**.\n2. **PSL Quota for RRBs:** RRBs have a **75% Priority Sector Lending target**, NOT the 40% commercial bank quota!\n3. **Amalgamation Roadmap:** India reduced RRBs from 196 to **43 RRBs** ("One State, One RRB" principle under Phase III/IV amalgamation).',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Regional Rural Banks Structure & Governance',
        notes: 'Direct MCQs on 50:35:15 capital ratio, 75% PSL target, and NABARD inspection authority.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RRB Act 1976 (Narasimham 1975). Equity: 50% Center, 35% Sponsor Bank, 15% State Govt. 1st RRB: Prathama Bank (Syndicate Bank, Moradabad, Oct 2 1975). Consolidated from 196 to 43 RRBs. Mandatory 75% PSL target. Inspected by NABARD under BR Act Section 35.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Section 6 of the Regional Rural Banks Act 1976, what is the statutory proportion of issued capital held by the Sponsor Commercial Bank in an RRB?',
        options: [
          '50% of the total issued capital',
          '35% of the total issued capital',
          '15% of the total issued capital',
          '26% of the total issued capital',
        ],
        correctAnswer: '35% of the total issued capital',
        explanation: 'Under Section 6(1) of the RRB Act 1976, the issued capital of an RRB is subscribed in the fixed statutory ratio of: 50% by the Central Government, 35% by the Sponsor Commercial Bank, and 15% by the State Government.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-03',
    topicOrder: 38,
    topicSlug: 'iibf-indian-financial-system-architecture',
    topicTitle: 'Indian Financial System Architecture & Institutional Tiers',
    topicDescription: 'Cooperative Banking Framework, BR Act Amendment 2020 & 4-Tier UCB Categorization.',
    slug: 'cooperative-banking-framework-br-act-amendment-2020-and-4-tier-ucb-categorization',
    title: 'Cooperative Banking Framework: Dual Regulation, BR Act Amendment 2020 & 4-Tier UCB System',
    shortDefinition: 'The statutory structure of cooperative banking in India: the historic problem of Dual Regulation (Registrar of Cooperative Societies [RCS] under State laws vs RBI under BR Act 1949), the landmark Banking Regulation (Amendment) Act 2020 bringing all Urban Cooperative Banks (UCBs) and Multi-State Cooperative Banks under direct regulatory and supervisory control of RBI (powers over management supersession, board reconstitution, audit, and resolution), the N.S. Vishwanathan Committee 4-Tier UCB regulatory hierarchy (Tier 1 [deposits ≤₹100 Cr], Tier 2 [₹100-1000 Cr], Tier 3 [₹1000-10000 Cr], Tier 4 [>₹10000 Cr]), and phased PSL transition to 75%.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-03-01',
        statement: 'The Banking Regulation (Amendment) Act 2020 amended Section 3 and Section 56 of the BR Act 1949 to give the Reserve Bank of India full regulatory and supervisory authority over Urban Cooperative Banks (UCBs) and State/District Central Cooperative Banks on banking matters (licensing, board governance, management removal, statutory audit, and resolution schemes), while leaving administrative incorporation/registration with the Registrar of Cooperative Societies (RCS).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Banking Regulation (Amendment) Act, 2020 (Act No. 39 of 2020, effective June/Sept 2020)',
        excerpt: '2020 BR Amendment empowered RBI to supersede cooperative bank boards and regulate governance.',
      },
      {
        id: 'CLM-IIBF-03-02',
        statement: 'Based on the N.S. Vishwanathan Expert Committee recommendations (2021/2022), RBI categorized Primary (Urban) Cooperative Banks into a 4-Tier regulatory framework: Tier 1 (Deposits up to ₹100 Crore), Tier 2 (Deposits >₹100 Cr to ₹1,000 Cr), Tier 3 (Deposits >₹1,000 Cr to ₹10,000 Cr), and Tier 4 (Deposits >₹10,000 Crore).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Circular on Revised Regulatory Framework for Urban Co-operative Banks (UCBs, Dec 2022)',
        excerpt: '4-Tier UCB structure: Tier 1 (<=₹100 Cr), Tier 2 (₹100-1k Cr), Tier 3 (₹1k-10k Cr), Tier 4 (>₹10k Cr).',
      },
      {
        id: 'CLM-IIBF-03-03',
        statement: 'Tier 1 UCBs operating within a single district must maintain a minimum CRAR of 9.0%, while Tier 2, 3, and 4 UCBs (and all other UCBs) must maintain a minimum CRAR of 12.0%; all UCBs must achieve a phased 75% Priority Sector Lending target by March 31, 2026.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Prudential Norms on Capital Adequacy for UCBs (2023)',
        excerpt: 'Tier 1 single-district UCBs require 9% CRAR; Tiers 2-4 require 12% CRAR; PSL target is 75% by 2026.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Ending the Dual-Regulation Black Hole',
        body: 'For decades, Urban Cooperative Banks operated under **Dual Regulation**: state cooperative registrars (RCS) controlled management, elections, and board appointments, while the RBI controlled banking licenses. When cooperative bank directors siphoned money (such as the catastrophic *PMC Bank scam in 2019*), the RBI lacked statutory power to remove corrupt directors or reconstruct the bank without state approval.\n\nThe landmark **Banking Regulation (Amendment) Act 2020** ended this loophole, giving the RBI supreme regulatory and board-supersession powers over all cooperative banks.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4-Tier UCB Regulatory Framework (N.S. Vishwanathan Committee)',
        body: '| UCB Tier | Deposit Size Range | Minimum Capital Adequacy (CRAR) | Regulatory Intensity |\n| :--- | :--- | :--- | :--- |\n| **Tier 1 UCB** | **Deposits $\\le ₹100 \\text{ Crore}$** | **9.0%** (if single-district; 12.0% otherwise). | Light-touch regulation; basic banking services; PSL target 75%. |\n| **Tier 2 UCB** | **Deposits $> ₹100 \\text{ Cr} \\text{ to } ₹1,000 \\text{ Cr}$** | **12.0%** | Differentiated capital requirements; automated branch expansion. |\n| **Tier 3 UCB** | **Deposits $> ₹1,000 \\text{ Cr} \\text{ to } ₹10,000 \\text{ Cr}$** | **12.0%** | Advanced risk management, compliance officers, and CBS audits. |\n| **Tier 4 UCB** | **Deposits $> ₹10,000 \\text{ Crore}$** | **12.0%** | Treated on par with Scheduled Commercial Banks (stringent Basel-like supervision). |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Cooperative Banking',
        body: '1. **Primary Agricultural Credit Societies (PACS):** PACS and Land Development Banks are **EXCLUDED from the Banking Regulation Act 1949 (Section 3)**; they are NOT supervised by RBI.\n2. **CRAR for UCBs:** Tier 1 UCBs need **9% CRAR**, but Tiers 2, 3, and 4 need **12% CRAR** (higher than commercial banks\' 9%).\n3. **DICGC Insurance:** All cooperative bank deposits are fully insured up to **₹5 Lakh per depositor** under the *DICGC Act, 1961*.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): Cooperative Banking & 2020 BR Amendment',
        notes: 'High-yield: 4-Tier UCB thresholds (100Cr, 1kCr, 10kCr), 12% CRAR rule, and PACS exclusion.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'BR Amendment 2020: Gave RBI complete powers over UCB governance, management supersession, and resolution (PACS excluded). 4-Tier UCBs (Vishwanathan Comm): Tier 1 (<=₹100 Cr, 9% CRAR), Tier 2 (₹100-1k Cr), Tier 3 (₹1k-10k Cr), Tier 4 (>₹10k Cr). CRAR for Tiers 2-4 = 12%. UCB PSL Target = 75% by March 2026. Deposit insurance = ₹5 Lakh (DICGC).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the revised 4-Tier regulatory framework for Primary (Urban) Cooperative Banks (UCBs) introduced by the RBI, what is the deposit threshold for a UCB to be classified as a "Tier 3 UCB"?',
        options: [
          'Deposits between ₹100 Crore and ₹500 Crore',
          'Deposits between >₹100 Crore and ₹1,000 Crore',
          'Deposits between >₹1,000 Crore and ₹10,000 Crore',
          'Deposits exceeding ₹10,000 Crore',
        ],
        correctAnswer: 'Deposits between >₹1,000 Crore and ₹10,000 Crore',
        explanation: 'Under the RBI guidelines based on the N.S. Vishwanathan Committee, UCBs are classified into four tiers: Tier 1 (deposits <= ₹100 Cr), Tier 2 (deposits > ₹100 Cr up to ₹1,000 Cr), Tier 3 (deposits > ₹1,000 Cr up to ₹10,000 Cr), and Tier 4 (deposits > ₹10,000 Cr).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-04',
    topicOrder: 38,
    topicSlug: 'iibf-indian-financial-system-architecture',
    topicTitle: 'Indian Financial System Architecture & Institutional Tiers',
    topicDescription: 'Non-Banking Financial Companies (NBFCs), Scale-Based Regulation (SBR) & Housing Finance Companies.',
    slug: 'non-banking-financial-companies-scale-based-regulation-and-regulatory-layers',
    title: 'Non-Banking Financial Companies (NBFCs): Scale-Based Regulation (SBR) & Four-Tier Architecture',
    shortDefinition: 'The statutory framework governing Non-Banking Financial Companies under Chapter III-B of the Reserve Bank of India Act 1934: the 50-50 Principle Principal Business Test (financial assets >50% of total assets and income from financial assets >50% of gross income), Deposit-taking (NBFC-D) vs Non-Deposit-taking (NBFC-ND), the landmark Scale-Based Regulation (SBR, effective October 2022) grouping NBFCs into four layers (Base Layer [asset size <₹1,000 Cr], Middle Layer [asset size ≥₹1,000 Cr, all deposit-taking, and HFCs], Upper Layer [top 15 systemically important NBFCs subject to bank-like prudential norms], and Top Layer [currently empty]), and NPA recognition harmonization to the 90-day overdue rule.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-04-01',
        statement: 'An entity qualifies as an NBFC under Section 45-IA of the RBI Act 1934 only if it meets the statutory "50-50 Principal Business Test": its financial assets constitute more than 50% of total assets AND its income from financial assets constitutes more than 50% of gross income.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Act, 1934 (Chapter III-B, Section 45-IA); RBI Master Direction – Non-Banking Financial Company',
        excerpt: '50-50 test: Financial assets >50% of total assets & financial income >50% of gross income.',
      },
      {
        id: 'CLM-IIBF-04-02',
        statement: 'Under the Scale-Based Regulation (SBR) framework effective October 1, 2022, NBFCs are structured into four progressive regulatory layers: Base Layer (NBFC-ND <₹1000 Cr asset size, Type I NBFC-ND, peer-to-peer lending platforms, account aggregators), Middle Layer (NBFC-ND-SI ≥₹1000 Cr, all NBFC-D, all HFCs, CICs), Upper Layer (top 15 identified systemically significant NBFCs), and Top Layer (held empty, populated only if an Upper Layer NBFC poses severe systemic contagion risk).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Scale Based Regulation (SBR): A Revised Regulatory Framework for NBFCs (Oct 2022)',
        excerpt: 'SBR 4-layer structure: Base (<₹1k Cr), Middle (>=₹1k Cr + HFCs), Upper (top 15), Top (empty).',
      },
      {
        id: 'CLM-IIBF-04-03',
        statement: 'SBR harmonized the NPA classification period for all NBFCs to the 90-day overdue norm (phased from the earlier 180-day norm), mandating a minimum Net Owned Fund (NOF) requirement of ₹10 Crore for standard NBFCs and a Tier 1 capital ratio of 10% (out of minimum 15% CRAR).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Reserve Bank of India (Non-Banking Financial Company – Scale Based Regulation) Directions, 2023',
        excerpt: 'SBR mandates 90-day NPA rule, ₹10 Cr NOF, and 15% CRAR with 10% Tier 1.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Shadow Banking Solvency: Bridging Credit without Contagion',
        body: 'NBFCs provide vital specialized credit to micro-entrepreneurs, real estate, gold loans, and infrastructure where traditional commercial banks hesitate. However, because NBFCs fund themselves by borrowing heavily from commercial banks and mutual funds, an NBFC collapse (such as *IL&FS in 2018* and *DHFL in 2019*) can trigger severe liquidity freezing across the entire banking system.\n\nThe **Scale-Based Regulation (SBR)** framework subjects large systemically important NBFCs to bank-grade capital, liquidity, and governance oversight.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 SBR Regulatory Layers of NBFCs',
        body: '```mermaid\ngraph TD\n    SBR["Scale-Based Regulation (SBR) Architecture"]\n    SBR --> TOP["1. TOP LAYER: Currently Empty (Populated if Upper Layer entity poses extreme systemic hazard)"]\n    SBR --> UPPER["2. UPPER LAYER (NBFC-UL): Top 15 identified NBFCs (Bajaj Finance, Tata Sons, Shriram, etc.) - Bank-like regulations, CET1 9%, Leverage limits"]\n    SBR --> MID["3. MIDDLE LAYER (NBFC-ML): Non-Deposit NBFCs >= ₹1,000 Cr, ALL Deposit-Taking NBFCs (NBFC-D), Housing Finance Companies (HFCs), CICs, Standalone Primary Dealers"]\n    SBR --> BASE["4. BASE LAYER (NBFC-BL): Non-Deposit NBFCs < ₹1,000 Cr, P2P Lending, Account Aggregators, NOFHCs"]\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Commercial Banks vs NBFCs: Legal Comparison',
        body: '| Operational Parameter | Commercial Banks | Non-Banking Financial Companies (NBFCs) |\n| :--- | :--- | :--- |\n| **Demand Deposits** | **Can accept demand deposits** (Savings & Current accounts withdrawable by cheque). | **CANNOT accept demand deposits** (can only accept fixed term deposits for 12 to 60 months, if licensed as NBFC-D). |\n| **Cheque Issuance** | Form part of the Payment and Settlement System; **can issue cheques drawn on themselves**. | **CANNOT issue cheques** drawn on themselves; cannot be part of clearinghouse. |\n| **Deposit Insurance** | Depositors insured up to **₹5 Lakh by DICGC**. | **NO deposit insurance** from DICGC for NBFC depositors. |\n| **Cash Reserve Ratio (CRR)** | Mandatory maintenance of **CRR with RBI** (~4.5%). | **NO CRR requirement** (NBFC-Ds maintain 13% SLR in approved liquid assets). |\n| **Minimum CRAR** | **9.0%** (plus 2.5% CCB = 11.5%). | **15.0%** (with minimum 10% Tier 1 Capital). |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in NBFC Regulation',
        body: '1. **50-50 Rule:** Must satisfy BOTH: **Financial Assets $>50\\%$ of total assets** AND **Financial Income $>50\\%$ of gross income**.\n2. **Deposit Insurance Trap:** **DICGC deposit insurance DOES NOT apply to NBFCs**! Only bank deposits are insured.\n3. **HFC Regulation:** Housing Finance Companies (HFCs) are now regulated directly by the **Reserve Bank of India (RBI)** (transferred from National Housing Bank - NHB in August 2019).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - NBFCs, Scale-Based Regulation & HFCs',
        notes: 'Direct MCQs on 50-50 rule, SBR layers (1000 Cr threshold), 15% CRAR, and bank vs NBFC distinctions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NBFCs (RBI Act Ch III-B): 50-50 Principle (Assets & Income >50% financial). SBR 4-Layers: Base (<₹1k Cr), Middle (>=₹1k Cr + ALL NBFC-D + HFCs), Upper (Top 15), Top (Empty). CRAR = 15% (Tier 1 >= 10%). NOF = ₹10 Cr. NPA = 90 days. NBFCs CANNOT accept demand deposits, CANNOT issue cheques, NO DICGC insurance, NO CRR.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Scale-Based Regulation (SBR) framework of the RBI, in which regulatory layer are all Housing Finance Companies (HFCs) and all Deposit-Taking NBFCs (NBFC-D) mandatorily placed?',
        options: [
          'Base Layer (NBFC-BL)',
          'Middle Layer (NBFC-ML)',
          'Upper Layer (NBFC-UL)',
          'Top Layer (NBFC-TL)',
        ],
        correctAnswer: 'Middle Layer (NBFC-ML)',
        explanation: 'Under the RBI SBR framework, all deposit-taking NBFCs (NBFC-D) irrespective of asset size, all Housing Finance Companies (HFCs), Core Investment Companies (CICs), and non-deposit NBFCs with asset size of ₹1,000 Crore and above are classified in the Middle Layer (NBFC-ML).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-05',
    topicOrder: 38,
    topicSlug: 'iibf-indian-financial-system-architecture',
    topicTitle: 'Indian Financial System Architecture & Institutional Tiers',
    topicDescription: 'Development Financial Institutions (NABARD, SIDBI, EXIM, NHB & NaBFID) statutory mandates.',
    slug: 'development-financial-institutions-nabard-sidbi-exim-nhb-and-nabfid-statutory-mandates',
    title: 'Development Financial Institutions (DFIs): NABARD, SIDBI, EXIM Bank, NHB & NaBFID',
    shortDefinition: 'The specialized statutory long-term refinancing and developmental lending architecture: the evolution of All-India Financial Institutions (AIFIs) regulated under Section 45L of the RBI Act 1934: NABARD (NABARD Act 1981, B. Sivaraman Committee, July 12, 1982: RIDF, refinance to RRBs/cooperatives), SIDBI (SIDBI Act 1989, operational 1990: MSME refinance, MUDRA), EXIM Bank (EXIM Bank Act 1981: cross-border export credit & Lines of Credit), NHB (NHB Act 1987: housing refinance), and the newly established NaBFID (National Bank for Financing Infrastructure and Development Act 2021: ₹1 Lakh Crore developmental infrastructure debt).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-05-01',
        statement: 'The National Bank for Agriculture and Rural Development (NABARD) was established on July 12, 1982 under the NABARD Act 1981 based on the B. Sivaraman Committee recommendations (CRAFICARD), taking over the agricultural credit functions of the RBI\'s Agricultural Refinance and Development Corporation (ARDC) and Agricultural Credit Department (ACD).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NABARD Act, 1981 (Act No. 61 of 1981); CRAFICARD Report (1979)',
        excerpt: 'NABARD established 12 July 1982 on Sivaraman Committee recommendations.',
      },
      {
        id: 'CLM-IIBF-05-02',
        statement: 'The National Bank for Financing Infrastructure and Development (NaBFID) was established under the NaBFID Act 2021 as the fifth All-India Financial Institution (AIFI) under RBI regulation, dedicated to long-term non-recourse infrastructure financing with initial Central Government equity of 100% (phased down to minimum 26%).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'National Bank for Financing Infrastructure and Development Act, 2021 (Act No. 17 of 2021)',
        excerpt: 'NaBFID created in 2021 as 5th AIFI for dedicated long-term infrastructure debt.',
      },
      {
        id: 'CLM-IIBF-05-03',
        statement: 'Five specialized institutions currently hold statutory status as All-India Financial Institutions (AIFIs) regulated by the Reserve Bank of India: NABARD, SIDBI, EXIM Bank, National Housing Bank (NHB), and NaBFID.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Bulletin on Financial Institutions; Section 45L of RBI Act 1934',
        excerpt: '5 AIFIs under RBI regulation: NABARD, SIDBI, EXIM, NHB, NaBFID.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Funding 30-Year Infrastructure when Commercial Banks Cannot',
        body: 'Commercial banks cannot easily fund a 25-year hydroelectric dam or a dedicated freight railway line because bank liabilities consist of short-term 1-to-3-year customer deposits (**Asset-Liability Maturity Mismatch**).\n\n**Development Financial Institutions (DFIs)** were established to raise ultra-long-term patient capital from sovereign bonds and multilateral credit to finance national nation-building infrastructure, agriculture, MSMEs, and housing.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 5 All-India Financial Institutions (AIFIs) Matrix',
        body: '| DFI / AIFI | Statutory Act & Inception | Key Promoter / Committee | Core Functional Mandate |\n| :--- | :--- | :--- | :--- |\n| **NABARD** | *NABARD Act, 1981* (July 12, 1982). | B. Sivaraman Committee (CRAFICARD). | Apex refinance for Agriculture & Rural Development; manages **RIDF**; supervises RRBs and Cooperative Banks. |\n| **SIDBI** | *SIDBI Act, 1989* (April 2, 1990). | Carved out of IDBI (HQ in **Lucknow**). | Apex refinancing and direct lending for **MSMEs**; manages MUDRA, CGTMSE, and Fund of Funds. |\n| **EXIM Bank** | *Export-Import Bank of India Act, 1981* (March 1, 1982). | Government of India (HQ in Mumbai). | Export-import financing, buyer\'s credit, overseas investment finance, and sovereign **Lines of Credit (LOC)**. |\n| **NHB** | *National Housing Bank Act, 1987* (July 9, 1988). | 100% owned by Central Govt (transferred from RBI in 2019). | Apex refinancing for Housing Finance Companies (HFCs) and affordable housing schemes (PMAY). |\n| **NaBFID** | *NaBFID Act, 2021* (Operational 2022). | Union Budget 2021-22 (HQ in Mumbai, K.V. Kamath 1st Chair). | Dedicated DFI to fund the **National Infrastructure Pipeline (NIP)**; target lending >₹5 Lakh Crore. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Development Financial Institutions',
        body: '1. **SIDBI Headquarters:** SIDBI headquarters is in **LUCKNOW** (Uttar Pradesh), NOT Mumbai or New Delhi!\n2. **Ownership of NHB & NABARD:** Both NABARD and NHB are now **100% owned by the Government of India** (the RBI divested its entire equity stake in both institutions to eliminate conflicts of interest between regulator and owner).\n3. **5th AIFI:** **NaBFID** is the 5th AIFI regulated by RBI under Section 45L of the RBI Act 1934.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Development Financial Institutions & AIFIs',
        notes: 'Direct MCQs on Sivaraman Comm, SIDBI Lucknow HQ, 5 AIFIs list, and NaBFID act year (2021).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '5 AIFIs under RBI: NABARD (1982 Sivaraman - Rural/Agri), SIDBI (1990 Lucknow HQ - MSME), EXIM Bank (1982 - Trade), NHB (1988 - Housing), NaBFID (2021 K.V. Kamath - Infra). NABARD and NHB are 100% Govt of India owned (RBI divested stake). RIDF managed by NABARD.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Where is the Principal Corporate Headquarters of the Small Industries Development Bank of India (SIDBI) located?',
        options: [
          'Mumbai, Maharashtra',
          'New Delhi',
          'Lucknow, Uttar Pradesh',
          'Bengaluru, Karnataka',
        ],
        correctAnswer: 'Lucknow, Uttar Pradesh',
        explanation: 'Unlike most national financial institutions headquartered in Mumbai or New Delhi, the Small Industries Development Bank of India (SIDBI) has its principal head office located in Lucknow, Uttar Pradesh.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 39: FINANCIAL MARKETS, FIXED INCOME & DERIVATIVES
  // =========================================================================
  {
    id: 'CON-IIBF-06',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Money Market vs Capital Market, Primary vs Secondary markets, fixed income securities, duration, and financial derivatives.',
    slug: 'financial-markets-duality-money-market-vs-capital-market-mechanisms',
    title: 'Financial Markets Duality: Money Market vs Capital Market Mechanics & Intermediation',
    shortDefinition: 'The macroeconomic structure of financial markets: Money Market (wholesale wholesale market for short-term funds up to 1 year, managing liquidity and working capital under RBI regulation) vs Capital Market (market for long-term equity and debt capital exceeding 1 year under SEBI regulation), Primary Market (raising fresh capital via Public Issue, Private Placement, Rights Issue) vs Secondary Market (trading existing securities providing continuous liquidity on BSE/NSE), and the regulatory boundary between RBI and SEBI.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-06-01',
        statement: 'Financial markets are segmented by instrument maturity into the Money Market (debt instruments maturing within 365 days, regulated by RBI) and the Capital Market (equity and debt instruments with maturity exceeding 1 year or perpetual tenure, regulated by SEBI).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Act 1934; SEBI Act 1992; NCERT Class 12 Business Studies, Ch 10',
        excerpt: 'Money Market <= 1 year (RBI regulated); Capital Market > 1 year (SEBI regulated).',
      },
      {
        id: 'CLM-IIBF-06-02',
        statement: 'Primary Market mechanisms for corporate capital raising include: Initial Public Offering (IPO: first sale of shares to public), Follow-on Public Offering (FPO), Rights Issue (Section 62 of Companies Act 2013: offering shares to existing shareholders pro-rata), Bonus Issue (capitalizing free reserves without cash inflow), and Qualified Institutional Placement (QIP: private placement to QIBs without prospectus delays).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Companies Act, 2013 (Sections 23, 42, 62); SEBI (ICDR) Regulations, 2018',
        excerpt: 'Primary issuance modes: IPO, FPO, Rights Issue, Bonus Issue, Private Placement, QIP.',
      },
      {
        id: 'CLM-IIBF-06-03',
        statement: 'Secondary markets provide price discovery and exit liquidity through automated screen-based order-matching on recognized stock exchanges (BSE, NSE), operating on a T+1 Rolling Settlement cycle since January 2023 with optional T+0 settlement introduced in March 2024.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'SEBI Circular on Implementation of T+1 and T+0 Settlement Cycles (2023-2024)',
        excerpt: 'Indian stock exchanges operate on T+1 rolling settlement with optional T+0 mechanism.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Matching Overnight Cash Surpluses with 30-Year Capital Projects',
        body: 'A bank with an excess ₹500 Crore cash for 3 days needs an ultra-safe, liquid parking avenue (**Money Market**).\nA manufacturing firm building a semiconductor foundry needs ₹10,000 Crore equity and 20-year debt (**Capital Market**).\n\nFinancial markets organize these flows across distinct maturity horizons and risk appetites.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Money Market vs Capital Market Master Matrix',
        body: '| Feature | Money Market | Capital Market |\n| :--- | :--- | :--- |\n| **Maturity Horizon** | **Up to 1 Year ($\\le 365$ days)** (Overnight to 1 year). | **Long-term ($> 1$ Year) & Perpetual Equity**. |\n| **Primary Purpose** | Working capital, liquidity adjustment, reserve requirements. | Fixed capital investment, plant expansion, corporate equity. |\n| **Primary Instruments** | Call Money, T-Bills, Commercial Paper (CP), CD, TREPS. | Equity Shares, Preference Shares, Debentures, Corporate Bonds, Zero Coupon Bonds. |\n| **Apex Regulatory Authority** | **Reserve Bank of India (RBI)**. | **Securities & Exchange Board of India (SEBI)**. |\n| **Market Risk** | Low credit risk; minimal price fluctuation. | Higher price volatility, market risk, and business risk. |\n| **Participant Profile** | Banks, Primary Dealers, Mutual Funds, RBI, Corporates (Wholesale institutional market). | Retail investors, FPIs, DIIs, Mutual Funds, Promoters. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Market Architecture',
        body: '1. **Settlement Cycle:** Indian secondary stock exchanges operate standardly on **T+1 rolling settlement** (trade settled next business day), with beta testing of **T+0 same-day settlement**.\n2. **Rights Issue vs Bonus Issue:** In a **Rights Issue**, shareholders must **PAY cash** to buy additional shares at a discount. In a **Bonus Issue**, shares are issued **FREE OF COST** by capitalizing accumulated reserves.\n3. **Green Shoe Option:** A price-stabilizing mechanism in an IPO allowing the underwriting syndicate to over-allot up to an additional **15% of shares** to stabilize post-listing market price.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Financial Markets Structure',
        notes: 'Direct MCQs on <=1yr vs >1yr rules, T+1 settlement, and Rights vs Bonus definitions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Money Market = <=1 yr (RBI regulated, Call money/T-bills/CP/CD). Capital Market = >1 yr (SEBI regulated, Equity/Bonds). Primary = New issues (IPO, FPO, Rights, QIP). Secondary = Existing trading (T+1 rolling settlement). Rights issue = Paid by shareholders; Bonus issue = Free via reserve capitalization. Green Shoe option = Max 15% over-allotment.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the standard rolling settlement cycle currently implemented for equity secondary market transactions on Indian stock exchanges (BSE/NSE)?',
        options: [
          'T+3 Rolling Settlement',
          'T+2 Rolling Settlement',
          'T+1 Rolling Settlement',
          'T+5 Rolling Settlement',
        ],
        correctAnswer: 'T+1 Rolling Settlement',
        explanation: 'India completed the phased transition of all equity secondary market trading on recognized stock exchanges to the T+1 (Trade date plus One business day) rolling settlement cycle in January 2023, making India the second major market globally after China to operate on T+1.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-07',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Money Market Instruments: Call/Notice/Term Money, T-Bills, Commercial Paper (CP), CD & TREPS.',
    slug: 'money-market-instruments-call-notice-term-money-t-bills-cp-cd-and-treps',
    title: 'Money Market Instruments: Call, Notice & Term Money, Treasury Bills, CP, CD and TREPS',
    shortDefinition: 'The detailed regulatory and statutory specifications of core Indian money market instruments: Call Money (1-day overnight) vs Notice Money (2-14 days) vs Term Money (15-365 days) on NDS-CALL, Treasury Bills (91-day, 182-day, 364-day zero-coupon sovereign discount papers issued at discount and redeemed at par), Commercial Paper (CP: unsecured corporate promissory notes, min ₹5 Lakh, maturity 7 days to 1 year, min A2 rating), Certificates of Deposit (CD: tradable bank term deposits, min ₹1 Lakh, maturity 7 days to 1 year for banks / up to 3 years for AIFIs), and Triparty Repo (TREPS on CCIL).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-07-01',
        statement: 'The Inter-bank Money Market is classified strictly by borrowing tenure: Call Money is lending/borrowing for exactly 1 day (overnight); Notice Money is lending/borrowing for 2 to 14 days; Term Money is lending/borrowing for 15 days up to 1 year, accessible only to Scheduled Commercial Banks, Cooperative Banks, and Primary Dealers.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Money Market Instruments: Call, Notice and Term Money Markets (2021/2024)',
        excerpt: 'Call (1 day), Notice (2-14 days), Term (15-365 days) market for banks and PDs.',
      },
      {
        id: 'CLM-IIBF-07-02',
        statement: 'Commercial Paper (CP) is an unsecured money market promissory note issued by eligible corporates, NBFCs, and AIFIs with a minimum net worth of ₹4 Crore, issued in minimum denominations of ₹5 Lakh and multiples thereof, with maturity ranging from a minimum of 7 days to a maximum of 1 year, requiring a minimum credit rating of A3 (or A2).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Commercial Paper and Non-Convertible Debentures of original maturity up to one year (2024)',
        excerpt: 'CP: Min ₹5 Lakh, maturity 7 days to 1 year, min net worth ₹4 Cr, min A3 rating.',
      },
      {
        id: 'CLM-IIBF-07-03',
        statement: 'Certificates of Deposit (CDs) are negotiable money market promissory notes issued against funds deposited with a bank/AIFI, issued in minimum denominations of ₹1 Lakh (and multiples of ₹1 Lakh), with maturity between 7 days and 1 year for commercial banks, and 1 year to 3 years for All-India Financial Institutions.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Reserve Bank of India (Certificate of Deposit) Directions, 2021',
        excerpt: 'CD: Min ₹1 Lakh, maturity 7 days to 1 year for banks (up to 3 years for AIFIs).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Wholesale Engine of Overnight and Short-Term Solvency',
        body: 'Every afternoon, banks face unpredictable cash surpluses or deficits due to customer withdrawals, tax remittances, and clearinghouse settlements. The **Money Market** provides the liquid plumbing where hundreds of thousands of crores change hands every day across standardized instruments without default risk.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Specifications of Indian Money Market Instruments',
        body: '| Instrument | Issuer | Minimum Denomination | Maturity Tenor | Pricing / Interest Type |\n| :--- | :--- | :--- | :--- | :--- |\n| **Call Money** | Commercial Banks & Primary Dealers (PDs). | N/A (Market lots). | **1 Day (Overnight)**. | Market interest rate (NDS-CALL platform). |\n| **Notice Money** | Commercial Banks & PDs. | N/A (Market lots). | **2 to 14 Days**. | Market interest rate. |\n| **Term Money** | Commercial Banks & PDs. | N/A (Market lots). | **15 Days to 1 Year**. | Market interest rate. |\n| **Treasury Bills (T-Bills)**| **Central Government ONLY** (RBI issues on behalf). | **₹10,000** (and multiples of ₹10k). | **91 Days, 182 Days, 364 Days**. | **Zero-Coupon:** Issued at discount, redeemed at par (FV ₹100). |\n| **Commercial Paper (CP)** | Corporates (Net worth $\\ge ₹4 \\text{ Cr}$), NBFCs, AIFIs. | **₹5 Lakh** (and multiples of ₹5L). | **7 Days to 1 Year**. | Issued at discount to face value (Unsecured Promissory Note). |\n| **Certificate of Deposit (CD)**| Scheduled Commercial Banks & AIFIs. | **₹1 Lakh** (and multiples of ₹1L). | Banks: **7 Days to 1 Year**.<br>AIFIs: **1 Year to 3 Years**. | Discount or floating/fixed coupon (Negotiable/Tradable). |\n| **TREPS (Triparty Repo)** | Banks, MFs, Corporates (cleared via **CCIL**). | N/A (Standardized). | **1 Day to 1 Year** (mostly 1–14 days). | Repo rate collateralized against G-Secs with CCIL central counterparty guarantee. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Money Market Instruments',
        body: '1. **State Governments CANNOT Issue T-Bills:** Treasury Bills are issued **EXCLUSIVELY by the Central Government**. State Governments raise market loans through **State Development Loans (SDLs)** and manage short-term liquidity through **Ways and Means Advances (WMA)**.\n2. **CP vs CD Minimum Denominations:** Commercial Paper is minimum **₹5 Lakh**; Certificate of Deposit is minimum **₹1 Lakh**; T-Bills are minimum **₹10,000**.\n3. **Loans Against CD/CP Prohibited:** Banks are **statutorily prohibited from granting loans against their own Certificates of Deposit (CDs)**, and cannot buy back CDs before maturity.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Money Market Instruments',
        notes: 'High-frequency core: Call (1d) / Notice (2-14d) / Term (15-365d), CP min ₹5L / 7d-1yr, CD min ₹1L, T-bills 91/182/364d.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Call Money = 1 day; Notice Money = 2-14 days; Term Money = 15-365 days (Banks/PDs). T-Bills = Central Govt only (91, 182, 364 days; min ₹10k; zero coupon). Commercial Paper (CP) = Min ₹5 Lakh, 7 days to 1 year, min net worth ₹4 Cr, unsecured. Certificate of Deposit (CD) = Min ₹1 Lakh, 7 days to 1 year for banks (up to 3 yrs for AIFIs); no loans against CDs. TREPS = Triparty repo via CCIL.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What are the MINIMUM denomination and MINIMUM maturity period for issuing a "Commercial Paper (CP)" in the Indian money market?',
        options: [
          'Minimum ₹1 Lakh denomination and minimum maturity of 7 days',
          'Minimum ₹5 Lakh denomination and minimum maturity of 7 days',
          'Minimum ₹5 Lakh denomination and minimum maturity of 15 days',
          'Minimum ₹10 Lakh denomination and minimum maturity of 30 days',
        ],
        correctAnswer: 'Minimum ₹5 Lakh denomination and minimum maturity of 7 days',
        explanation: 'Under RBI Master Directions on Commercial Paper, CPs must be issued in minimum denominations of ₹5 Lakh and in multiples of ₹5 Lakh thereafter. The maturity of CP shall not be less than 7 days and not more than 1 year from the date of issue.',
        trapExplanation: 'Candidates confuse the ₹5 Lakh minimum of CP with the ₹1 Lakh minimum of Certificate of Deposit (CD).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-08',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Capital Markets, Stock Exchanges & Depository Architecture (NSDL, CDSL).',
    slug: 'capital-markets-primary-issue-mechanisms-ipo-fpo-ofs-and-depository-systems-nsdl-cdsl',
    title: 'Capital Markets: Primary Issue Modes (IPO, FPO, OFS) & Depository Architecture (NSDL, CDSL)',
    shortDefinition: 'The structural framework of India\'s capital markets: public issue mechanisms (Book Building process, Floor Price, Price Band [max 20% spread], Cut-Off Price, ASBA via UPI), Offer for Sale (OFS), Qualified Institutional Placement (QIP), and the paperless two-tier depository architecture under the Depositories Act 1996 (National Securities Depository Limited [NSDL, sponsored by NSE/IDBI, 1996] and Central Depository Services Limited [CDSL, sponsored by BSE/banks, 1999]), Dematerialization (Demata: DRF/RRF), ISIN 12-digit code structure, and SEBI listing regulations.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-08-01',
        statement: 'Under the Depositories Act 1996, India operates a two-tier depository model where the Depository (NSDL or CDSL) acts as the registered owner in company records, while investors hold securities as Beneficial Owners (BO) through Depository Participants (DPs: banks, brokerage houses).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Depositories Act, 1996 (Sections 10 & 11); SEBI (Depositories and Participants) Regulations, 2018',
        excerpt: 'Two-tier depository: Depository is Registered Owner; Investor is Beneficial Owner via DP.',
      },
      {
        id: 'CLM-IIBF-08-02',
        statement: 'Application Supported by Blocked Amount (ASBA) is a mandatory application facility for public issues (IPOs/FPOs) where application funds remain blocked in the investor\'s bank account until final share allotment, unblocking surplus funds automatically without refund delays.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'SEBI Master Circular – Issue of Capital and Disclosure Requirements (ICDR Regulations)',
        excerpt: 'ASBA mandates application money stays blocked in investor bank account until allotment.',
      },
      {
        id: 'CLM-IIBF-08-03',
        statement: 'Every security in the depository system is assigned a 12-character alphanumeric International Securities Identification Number (ISIN) standardized under ISO 6166: 2-character country code ("IN"), 9-character alphanumeric security identifier, and 1-digit check sum.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ISO 6166 Standard; NSDL & CDSL Operating Guidelines on ISIN Allotment',
        excerpt: 'ISIN is 12-digit alphanumeric code (e.g. INE002A01018) representing unique security.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Bad Delivery and Forged Paper Certificates to Instant Electronic Demat',
        body: 'Before 1996, Indian stock trading required physically mailing paper share certificates across the country, causing rampant signature mismatch, forged certificates, theft, and 45-to-60-day settlement delays.\n\nThe **Depositories Act 1996** established the electronic **Demat Architecture** (NSDL and CDSL)—converting physical shares into electronic book-entry credits, identical to how money is stored in bank accounts.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Two Depositories of India: NSDL vs CDSL',
        body: '| Parameter | NSDL (National Securities Depository Ltd) | CDSL (Central Depository Services Ltd) |\n| :--- | :--- | :--- |\n| **Inception Date** | **August 1996** (India\'s 1st depository). | **February 1999**. |\n| **Lead Promoters** | **National Stock Exchange (NSE)**, IDBI, UTI. | **Bombay Stock Exchange (BSE)**, State Bank of India, HDFC Bank. |\n| **Account Format** | 8-character DP ID + 8-character Client ID (**Total 16 chars: e.g. IN300126-10245678**). | 16-digit purely numeric Beneficiary Owner ID (**e.g. 1201060000123456**). |\n| **Supervising Regulator**| **SEBI** (under Depositories Act 1996). | **SEBI** (under Depositories Act 1996). |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Capital Markets',
        body: '1. **ASBA Facility:** ASBA is **MANDATORY for all retail and institutional IPO applications** (using UPI ID or Net Banking blocking).\n2. **Book Building Price Band:** In an IPO book building process, the **Cap Price cannot exceed 120% of the Floor Price (maximum 20% price band spread)**.\n3. **ISIN Composition:** ISIN consists of exactly **12 alphanumeric characters** (Country code: 2 letters [IN] + Company/Type: 9 chars + Check digit: 1 char).',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Capital Markets & Depository System',
        notes: 'Direct MCQs on NSDL vs CDSL, ASBA rules, 20% price band spread, and 12-char ISIN.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Depositories Act 1996: NSDL (1996, NSE/IDBI, starts with IN) & CDSL (1999, BSE/SBI, 16-digit numeric). Depository = Registered Owner; Investor = Beneficial Owner via DP. ASBA = Mandatory fund blocking in bank account for IPOs. ISIN = 12-character alphanumeric code (ISO 6166). Book building price band = Cap max 20% above Floor price.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under SEBI (ICDR) Regulations for an Initial Public Offering (IPO) conducted through the Book Building mechanism, what is the maximum allowable spread between the Floor Price and the Cap Price in the Price Band?',
        options: [
          'The Cap Price cannot exceed 110% of the Floor Price (10% spread)',
          'The Cap Price cannot exceed 120% of the Floor Price (20% spread)',
          'The Cap Price cannot exceed 130% of the Floor Price (30% spread)',
          'There is no regulatory ceiling on the price band spread',
        ],
        correctAnswer: 'The Cap Price cannot exceed 120% of the Floor Price (20% spread)',
        explanation: 'Under SEBI ICDR Regulations, the price band announced by the issuer company in a book built issue shall have a cap price which shall not be more than 120% of the floor price (i.e. the maximum spread between the floor and cap price cannot exceed 20%).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-09',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Fixed Income Securities, Bond Pricing, Yield to Maturity (YTM), Duration & Convexity.',
    slug: 'fixed-income-mathematics-bond-pricing-yield-to-maturity-macaulay-duration-and-convexity',
    title: 'Fixed Income Mathematics: Bond Pricing, Yield to Maturity (YTM), Macaulay Duration & Convexity',
    shortDefinition: 'The mathematical and financial valuation of fixed-income debt securities: Bond Pricing formula as the present value of future coupon cash flows plus par redemption ($\\text{Price} = \\sum \\frac{C}{(1+y)^t} + \\frac{M}{(1+y)^n}$), the inverse relationship between Bond Price and Yield, Clean Price vs Dirty Price (Dirty = Clean + Accrued Interest), Yield to Maturity (YTM: internal rate of return assuming reinvestment at YTM), Macaulay Duration (weighted average time to cash flow recovery), Modified Duration ($\\text{MD} = \\frac{D_{\\text{Mac}}}{1 + y}$ measuring price sensitivity to $\\Delta \\text{yield}$), and Convexity as second-order curvature protection.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-09-01',
        statement: 'Bond Price and Market Yield (YTM) have an exact mathematical INVERSE relationship: when market interest rates rise, bond prices fall; when market interest rates fall, bond prices rise. A bond trades at Par when Coupon = YTM, at Discount when Coupon < YTM, and at Premium when Coupon > YTM.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Frank Fabozzi, Bond Markets, Analysis and Strategies; IIBF AFMB Module B',
        excerpt: 'Inverse price-yield relationship; Coupon < YTM means discount bond; Coupon > YTM means premium bond.',
      },
      {
        id: 'CLM-IIBF-09-02',
        statement: 'Macaulay Duration measures the weighted average maturity of a bond\'s cash flows in years; Modified Duration (MD = Macaulay Duration / [1 + YTM]) directly quantifies the percentage change in bond price for a 100-basis-point (1 percentage point) shift in yield: %Δ Price ≈ - Modified Duration * Δ Yield.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Frederick Macaulay (1938); IIBF Treasury Management & AFMB Curriculum',
        excerpt: 'Modified Duration measures percentage price sensitivity to interest rate changes.',
      },
      {
        id: 'CLM-IIBF-09-03',
        statement: 'The Macaulay Duration of a Zero-Coupon Bond is EXACTLY equal to its term to maturity (Duration = Maturity), whereas the Macaulay Duration of a coupon-paying bond is ALWAYS strictly less than its term to maturity.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Bond Valuation Theory; IIBF Paper 1 & 3 Master Guide',
        excerpt: 'Zero-coupon bond duration equals maturity; coupon-paying bond duration is less than maturity.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Bond Prices Fluctuate like a Seesaw with Interest Rates',
        body: 'If you buy a 10-year Government bond paying a fixed 7.0% coupon, and the RBI subsequently cuts interest rates so that newly issued bonds offer only 6.0%, your existing 7.0% bond becomes extremely valuable in the market—investors bid up its price above par (**Premium Bond**).\n\nConversely, if market yields rise to 8.0%, your 7.0% bond is unappealing unless sold at a discount (**Discount Bond**). **Duration** quantifies exactly how violent this price swing will be.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Master Bond Pricing & Duration Formula Suite',
        body: '### 1. Bond Valuation Equation\n$$\\mathbf{P = \\sum_{t=1}^{n} \\frac{C}{(1 + y)^t} + \\frac{M}{(1 + y)^n}}$$\n* $P$: Bond Price | $C$: Annual/Semi-annual coupon | $y$: Yield to Maturity (YTM) | $M$: Par Value at maturity ($n$ years).\n\n### 2. Macaulay Duration & Modified Duration\n$$\\mathbf{D_{\\text{Mac}} = \\frac{\\sum_{t=1}^{n} \\frac{t \\cdot C}{(1+y)^t} + \\frac{n \\cdot M}{(1+y)^n}}{\\text{Bond Price } (P)}} \\quad \\text{(in Years)}$$\n$$\\mathbf{D_{\\text{Mod}} = \\frac{D_{\\text{Mac}}}{1 + y}}$$\n$$\\mathbf{\\% \\Delta \\text{Price} \\approx - D_{\\text{Mod}} \\times \\Delta y}$$\n\n* *Example:* If a bond has a Modified Duration of **5.0 years** and market yields increase by **$1.0\\%$ (+100 bps)**, the bond price will **fall by approximately $5.0\\%$**.',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Fixed Income Mathematics',
        body: '1. **Zero-Coupon Bond Duration:** The duration of a 10-year Zero-Coupon Bond is **EXACTLY 10 YEARS**.\n2. **Clean Price vs Dirty Price:**\n   $$\\mathbf{\\text{Dirty Price (Settlement Price)} = \\text{Clean Price} + \\text{Accrued Interest}}$$\n3. **Properties of Duration:** Duration is **higher** for bonds with: longer maturity, lower coupon rate, and lower YTM.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 3 (AFMB): Module B - Bond Valuation & Duration Mathematics',
        notes: 'High-weightage numerical problems: calculating bond price, Modified Duration percentage price change, and YTM approximations.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bond Price & Yield have an INVERSE relationship. Coupon = YTM -> Par; Coupon < YTM -> Discount; Coupon > YTM -> Premium. Dirty Price = Clean Price + Accrued Interest. Macaulay Duration of Zero-Coupon Bond = Maturity. Modified Duration = D_Mac / (1 + y). %Δ Price ≈ - D_Mod * Δ Yield. Lower coupon = Higher duration = Higher price volatility.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A 10-year government bond has a Modified Duration of 6.5 years. If the market yield on the bond increases by 50 basis points (+0.50%), what is the approximate expected percentage change in the bond price?',
        options: [
          'Price increases by approximately 3.25%',
          'Price decreases by approximately 3.25%',
          'Price decreases by approximately 6.50%',
          'Price increases by approximately 13.00%',
        ],
        correctAnswer: 'Price decreases by approximately 3.25%',
        explanation: 'Using the Modified Duration price sensitivity formula: %Δ Price ≈ - Modified Duration * Δ Yield. Here, %Δ Price ≈ - (6.5) * (+0.50%) = - 3.25%. Because yield increased, the bond price must decrease by 3.25%.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-10',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Financial Derivatives: Forwards, Futures, Options Payoffs & Interest Rate Swaps (IRS).',
    slug: 'financial-derivatives-forwards-futures-options-payoffs-and-interest-rate-swaps',
    title: 'Financial Derivatives: Forwards vs Futures, Call & Put Option Payoffs, and Swaps (IRS)',
    shortDefinition: 'The financial engineering and risk management mechanics of derivative instruments: Forwards (bilateral OTC, customizable, credit risk) vs Futures (exchange-traded on NSE/BSE, standardized, daily MTM margins via Clearing Corporation, zero credit risk), Options contracts (Call Option: right to buy vs Put Option: right to sell, Strike Price $K$, In-the-Money [ITM], At-the-Money [ATM], Out-of-the-Money [OTM], Intrinsic Value + Time Value), Option Payoff profiles, and Interest Rate Swaps (IRS: Plain Vanilla Fixed-for-Floating swaps benchmarked to MIBOR / SOFR).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-10-01',
        statement: 'A Forward Contract is a customized over-the-counter (OTC) bilateral agreement settled at maturity with inherent counterparty default risk; a Futures Contract is a standardized exchange-traded contract settled daily through marked-to-market (MTM) margin requirements with central counterparty guarantee eliminating default risk.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'John C. Hull, Options, Futures, and Other Derivatives; SEBI Derivatives Guidelines',
        excerpt: 'Forwards are OTC and customizable with credit risk; Futures are exchange-traded with daily MTM.',
      },
      {
        id: 'CLM-IIBF-10-02',
        statement: 'In Options contracts, the Buyer (Holder) pays a non-refundable Premium and acquires a RIGHT without obligation: Call Buyer gains if Spot Price exceeds Strike Price (Max Loss = Premium paid, Max Profit = Unlimited); Put Buyer gains if Spot Price falls below Strike Price (Max Loss = Premium paid, Max Profit = Strike Price - Premium). Option Writers (Sellers) take on unlimited risk for a maximum gain limited to the premium.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'SEBI Master Circular on Equity and Currency Derivatives; IIBF Treasury Management',
        excerpt: 'Option buyers have limited risk (premium) and unlimited profit; option writers have unlimited risk.',
      },
      {
        id: 'CLM-IIBF-10-03',
        statement: 'In an Interest Rate Swap (IRS), two counterparties agree to exchange interest rate cash flows based on a specified Notional Principal without exchanging underlying principal: in a Plain Vanilla Swap, Party A pays a fixed coupon rate and receives a floating rate (e.g. MIBOR), while Party B pays floating and receives fixed.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Reserve Bank of India (Financial Benchmark Administrators) Directions; FIMMDA Guidelines',
        excerpt: 'Interest Rate Swap exchanges fixed for floating interest cash flows on notional principal without principal exchange.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Insurance vs Speculation: Transferring Unwanted Risk',
        body: 'A derivative is a financial contract whose value is derived from an underlying asset (stock, bond, interest rate, forex, or commodity).\n\nIf an Indian software exporter earns $10 Million in 3 months, it faces the risk of the Rupee appreciating (**Currency Risk**). By selling dollars in a **3-Month Forward Contract**, the exporter locks in a guaranteed conversion rate today, shifting currency volatility to the market.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Forwards vs Futures Comparison Matrix',
        body: '| Feature | Forward Contract | Futures Contract |\n| :--- | :--- | :--- |\n| **Trading Venue** | **Over-the-Counter (OTC)** (Direct bilateral bank deal). | **Recognized Stock Exchange** (NSE, BSE, MCX). |\n| **Contract Terms** | **Fully Customized** (any amount, any delivery date). | **Strictly Standardized** (fixed lot size, fixed expiry date). |\n| **Counterparty Risk** | **High** (if counterparty defaults, loss occurs). | **Zero / Guaranteed** by Clearing Corporation (NSCCL). |\n| **Settlement Mode** | Single settlement on **Expiry Date**. | **Daily Marked-to-Market (MTM)** margin settlement. |\n| **Liquidity & Exit** | Low; difficult to cancel without counterparty consent. | **High**; position can be squared off instantly anytime during market hours. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The 4 Basic Option Payoff Profiles',
        body: '```mermaid\ngraph TD\n    OPT["Option Positions (Strike Price = K, Premium = P)"]\n    OPT --> LC["1. Long Call (Buy Call): Bullish | Payoff = max(S - K, 0) - P | Max Loss = P | Max Gain = Unlimited"]\n    OPT --> SC["2. Short Call (Sell Call): Bearish | Payoff = P - max(S - K, 0) | Max Gain = P | Max Loss = Unlimited"]\n    OPT --> LP["3. Long Put (Buy Put): Bearish | Payoff = max(K - S, 0) - P | Max Loss = P | Max Gain = K - P"]\n    OPT --> SP["4. Short Put (Sell Put): Bullish | Payoff = P - max(K - S, 0) | Max Gain = P | Max Loss = K - P"]\n```\n\n### Moneyness of Options (Spot Price $S$ vs Strike Price $K$)\n* **Call Option:** ITM if $S > K$; ATM if $S = K$; OTM if $S < K$.\n* **Put Option:** ITM if $S < K$; ATM if $S = K$; OTM if $S > K$.\n* **Option Premium Formula:** $\\mathbf{\\text{Premium} = \\text{Intrinsic Value} + \\text{Time Value}}$.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Derivatives',
        body: '1. **American vs European Options:**\n   * **American Option:** Can be exercised on **ANY business day on or before expiry**.\n   * **European Option:** Can be exercised **ONLY ON the final expiry date** (All index options in India on NSE/BSE are European style).\n2. **IRS Principal Exchange:** In an Interest Rate Swap, **underlying principal is NEVER exchanged**; only net interest differentials on notional principal are settled.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): Module B - Derivatives & Risk Management',
        notes: 'Direct MCQs on Forwards vs Futures (MTM margins), Call/Put payoff calculations, and European vs American exercise rules.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Forwards = Bilateral OTC, customized, default risk. Futures = Exchange-traded, standardized, daily MTM, zero credit risk. Long Call = Right to BUY (bullish, max loss premium). Long Put = Right to SELL (bearish, max loss premium). American = Exercise anytime; European = Exercise only at expiry. Option Premium = Intrinsic Value + Time Value. IRS = Exchange fixed for floating interest on notional principal (no principal exchanged).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'An investor purchases a European CALL Option with a Strike Price of ₹500 by paying an option premium of ₹30. On the expiration date, the underlying share price closes at ₹570. What is the net profit or loss per share for the investor?',
        options: [
          'Net Profit of ₹70 per share',
          'Net Profit of ₹40 per share',
          'Net Loss of ₹30 per share',
          'Net Profit of ₹570 per share',
        ],
        correctAnswer: 'Net Profit of ₹40 per share',
        explanation: 'For a Call Option buyer: Payoff = Max(Spot Price - Strike Price, 0) - Premium Paid. Here: Payoff = (₹570 - ₹500) - ₹30 = ₹70 - ₹30 = ₹40 Net Profit per share.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-11',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Collective Investment Vehicles: Mutual Funds (NAV), AIFs & REITs/InvITs.',
    slug: 'collective-investment-vehicles-mutual-funds-nav-aif-categories-and-reits-invits',
    title: 'Collective Investment Vehicles: Mutual Funds, Net Asset Value (NAV), AIFs & REITs/InvITs',
    shortDefinition: 'The regulatory and operational framework of collective pooling vehicles under SEBI regulations: Mutual Funds (3-tier trust structure: Sponsor, Board of Trustees, Asset Management Company [AMC], Custodian), Net Asset Value formula ($\\text{NAV} = \\frac{\\text{Total Assets} - \\text{Total Liabilities}}{\\text{Total Units Outstanding}}$), Open-Ended vs Close-Ended vs Exchange Traded Funds (ETFs), Alternate Investment Funds (AIF Regulations 2012: Category I [Venture Capital, SME, Social Impact], Category II [PE, Real Estate, Debt], Category III [Hedge Funds, complex trading]), and Real Estate / Infrastructure Investment Trusts (REITs & InvITs).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-11-01',
        statement: 'Under SEBI (Mutual Funds) Regulations 1996, a mutual fund must be established as a Trust under the Indian Trusts Act 1882 with a three-tier structural separation: the Sponsor (establishes trust), the Board of Trustees (fiduciary protectors of unitholders), and the Asset Management Company (AMC, regulated entity managing investments with minimum net worth of ₹50 Crore).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'SEBI (Mutual Funds) Regulations, 1996; AMFI Guidelines',
        excerpt: 'Mutual fund 3-tier structure: Sponsor, Trustees, AMC (min ₹50 Cr net worth), and Custodian.',
      },
      {
        id: 'CLM-IIBF-11-02',
        statement: 'Under SEBI (Alternative Investment Funds) Regulations 2012, AIFs are classified into three distinct categories with a minimum investment ticket of ₹1 Crore per investor: Category I (startups, social ventures, infrastructure funds with positive economic spillovers), Category II (private equity and debt funds not undertaking leverage), and Category III (hedge funds employing diverse or complex trading strategies and leverage).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'SEBI (Alternative Investment Funds) Regulations, 2012',
        excerpt: 'AIF Categories: Cat I (Startups/VC), Cat II (PE/Debt), Cat III (Hedge funds/Leverage); Min ticket ₹1 Crore.',
      },
      {
        id: 'CLM-IIBF-11-03',
        statement: 'Real Estate Investment Trusts (REITs) and Infrastructure Investment Trusts (InvITs) are investment trusts that pool capital to invest in income-generating commercial real estate and infrastructure assets, mandatorily distributing at least 90% of their Net Distributable Cash Flows (NDCF) to unitholders semi-annually.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'SEBI (Real Estate Investment Trusts) Regulations, 2014; SEBI (InvIT) Regulations, 2014',
        excerpt: 'REITs/InvITs must distribute at least 90% of Net Distributable Cash Flows to unitholders.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Democratizing Commercial Real Estate and Blue-Chip Portfolios',
        body: 'A single retail investor with ₹1,000 cannot buy a diversified portfolio of 50 blue-chip stocks, and cannot buy a ₹500 Crore corporate glass office tower in Cyber City Gurugram.\n\n**Collective Investment Vehicles** pool funds from millions of investors, hiring professional fund managers to run diversified portfolios (**Mutual Funds**) or income-yielding commercial real estate (**REITs**).',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 3 AIF Categories Comparison',
        body: '| AIF Category | Eligible Fund Types | Key Operational Rules |\n| :--- | :--- | :--- |\n| **Category I AIF** | Venture Capital Funds (VCF), SME Funds, Social Venture Funds, Infrastructure Funds. | Invests in early-stage startups and socially positive enterprises; receives government incentives and tax pass-through status. |\n| **Category II AIF** | Private Equity (PE) Funds, Real Estate Funds, Debt Funds, Funds of Funds. | Standard private investment; **NO leverage allowed** except for meeting operational working capital up to 30 days. |\n| **Category III AIF** | **Hedge Funds**, PIPE Funds, Long-Short Equity Funds. | Employs complex trading, short-selling, and **leverage (borrowing)** up to 2 times NAV. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Pooled Vehicles',
        body: '1. **AIF Minimum Investment:** Minimum investment ticket size for an investor in an AIF is **₹1 Crore** (reduced to **₹25 Lakh for employees/directors of the AMC** and **₹10 Lakh for Angel Funds**).\n2. **REITs Mandatory Payout:** REITs and InvITs must distribute at least **90% of Net Distributable Cash Flows (NDCF)** to unitholders at least once every 6 months.\n3. **NAV Formula:** $\\mathbf{\\text{NAV} = \\frac{\\text{Market Value of Investments} + \\text{Receivables} - \\text{Accrued Liabilities}}{\\text{Total Number of Outstanding Units}}}$.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Mutual Funds, AIFs & REITs',
        notes: 'Direct MCQs on AIF 3 categories, ₹1 Cr minimum ticket, 90% REIT payout rule, and NAV formula.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Mutual Funds (1996 SEBI): Sponsor + Trustees + AMC (min ₹50 Cr net worth). NAV = (Assets - Liabilities) / Units. AIF (2012): Min ticket ₹1 Crore (Angel ₹10L). Cat I = Startups/VC; Cat II = PE/Debt (no leverage); Cat III = Hedge funds (leverage allowed). REITs & InvITs = Must distribute >=90% of cash flows to unitholders.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under SEBI Regulations, what is the minimum percentage of Net Distributable Cash Flows (NDCF) that a Real Estate Investment Trust (REIT) is legally required to distribute to its unitholders?',
        options: [
          'At least 50% of NDCF',
          'At least 75% of NDCF',
          'At least 90% of NDCF',
          'At least 100% of NDCF',
        ],
        correctAnswer: 'At least 90% of NDCF',
        explanation: 'Under the SEBI (Real Estate Investment Trusts) Regulations 2014, not less than 90% of the Net Distributable Cash Flows (NDCF) of the REIT must be distributed to the unitholders at least semi-annually (twice a year).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-12',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Insurance Principles, IRDAI Bima Trinity & National Pension System (NPS).',
    slug: 'insurance-and-pension-systems-principles-of-insurance-bima-trinity-and-national-pension-system',
    title: 'Insurance & Pension Systems: 6 Fundamental Principles, IRDAI Bima Trinity & NPS',
    shortDefinition: 'The legal and regulatory framework of insurance and retirement pensions in India: the 6 classical principles of insurance law (Utmost Good Faith [Uberrimae Fidei & Section 45 of Insurance Act 1938], Insurable Interest, Indemnity, Subrogation, Contribution, and Proximate Cause [Causa Proxima]), IRDAI\'s "Insurance for All by 2047" Bima Trinity reforms (Bima Sugam digital marketplace, Bima Vistaar composite product, Bima Vahak women-led distribution), and the National Pension System (NPS: Tier 1 locked-in retirement account vs Tier 2 voluntary savings account, PFRDA regulation, CRA, and Annuity Service Providers).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-12-01',
        statement: 'Under Section 45 of the Insurance Act 1938 (amended 2015), a life insurance policy cannot be called in question or repudiated by the insurer on any ground whatsoever (including fraudulent misrepresentation) after the expiry of three years from the date of policy issuance or revival.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Insurance Act, 1938 (Section 45 as amended by Insurance Laws (Amendment) Act, 2015)',
        excerpt: 'Section 45 bars policy repudiation on any ground after 3 years from issuance.',
      },
      {
        id: 'CLM-IIBF-12-02',
        statement: 'The principle of Indemnity applies exclusively to General / Property / Liability insurance (ensuring the insured is restored to the exact financial position held prior to loss without profit); it DOES NOT apply to Life Insurance and Personal Accident Insurance, which are benefit contracts where human life cannot be monetarily valued.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'General Principles of Insurance Law; IRDAI Guidelines',
        excerpt: 'Indemnity, subrogation, and contribution apply to general insurance, NOT to life insurance.',
      },
      {
        id: 'CLM-IIBF-12-03',
        statement: 'Under the National Pension System (NPS) regulated by PFRDA, all Indian citizens aged 18 to 70 years can open an NPS account with a unique 12-digit Permanent Retirement Account Number (PRAN), where Tier 1 is a mandatory locked-in retirement account (min 40% annuity purchase on superannuation at age 60) and Tier 2 is a voluntary withdrawable savings account.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PFRDA Act, 2013; PFRDA (Exits and Withdrawals under the National Pension System) Regulations',
        excerpt: 'NPS: 12-digit PRAN, entry age 18-70, Tier 1 locked with 40% annuity, Tier 2 liquid.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Pooling Catastrophic Risk & Securing Longevity Income',
        body: 'Insurance is an institutional mechanism for transferring the financial risk of catastrophic losses from an individual to a collective pool.\n\nBecause insurance contracts are based on events that haven\'t happened yet, they are governed by unique common-law doctrines—above all, **Uberrimae Fidei (Utmost Good Faith)**, requiring complete, honest disclosure from both policyholder and insurer.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 6 Fundamental Principles of Insurance Law',
        body: '| Insurance Principle | Legal Definition | Applicable Scope |\n| :--- | :--- | :--- |\n| **1. Utmost Good Faith (*Uberrimae Fidei*)** | Both parties must disclose all material facts honestly. Section 45 protects life policies from repudiation after **3 years**. | **All Insurance** (Life & General). |\n| **2. Insurable Interest** | The insured must have a legal financial stake in the preservation of the subject matter (must exist at inception in life; at inception AND time of loss in fire; at time of loss in marine). | **All Insurance**. |\n| **3. Principle of Indemnity** | Insured is reimbursed only for actual financial loss sustained; **cannot make a profit** from insurance. | **General Insurance ONLY** (Does NOT apply to Life). |\n| **4. Principle of Subrogation** | After paying full claim, the insurer steps into the legal shoes of the insured to recover damages from the responsible third party. | **General Insurance ONLY**. |\n| **5. Principle of Contribution** | If insured holds policies with multiple insurers for the same asset, insurers share loss proportionally. | **General Insurance ONLY**. |\n| **6. Proximate Cause (*Causa Proxima*)** | The direct, active, efficient cause that sets in motion a train of events without an intervening force. | **All Insurance**. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'IRDAI Bima Trinity & NPS Architecture',
        body: '### 1. IRDAI Bima Trinity ("Insurance for All by 2047")\n* **Bima Sugam:** Unified one-stop digital portal for buying, servicing, and settling claims across all life and non-life insurers.\n* **Bima Vistaar:** Affordable, all-in-one bundled micro-insurance product covering life, health, personal accident, and property.\n* **Bima Vahak:** Dedicated women-centric distribution force at Gram Panchayat level.\n\n### 2. NPS Architecture (PFRDA)\n* **Tier 1 (Retirement Account):** Tax-incentivized under Sec 80CCD; minimum **40% of accumulated corpus must be used to purchase an Annuity** for monthly pension upon retirement at age 60 (up to 60% can be withdrawn tax-free as lump-sum).\n* **Tier 2 (Savings Account):** No lock-in period; voluntary deposits and anytime withdrawals (no tax deduction for private sector).',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Insurance & Pensions',
        body: '1. **Section 45 Insurance Act 3-Year Rule:** After **3 continuous years**, an insurer CANNOT reject a life insurance claim for ANY reason (even alleged fraud)!\n2. **Insurable Interest Timing:**\n   * **Life Insurance:** Must exist **AT INCEPTION ONLY** (not required at time of death).\n   * **Marine Insurance:** Must exist **AT THE TIME OF LOSS ONLY**.\n   * **Fire Insurance:** Must exist **BOTH AT INCEPTION AND TIME OF LOSS**.\n3. **NPS Entry Age:** Entry age into NPS is **18 to 70 years** (can remain invested up to age 75).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Insurance & Pension Systems',
        notes: 'Direct MCQs on 6 principles, Section 45 3-yr bar, insurable interest timing, and NPS Tier 1 40% annuity rule.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '6 Insurance Principles: Utmost Good Faith (Sec 45: 3-yr non-repudiation bar), Insurable Interest, Indemnity (General only, not life), Subrogation (General only), Contribution (General only), Proximate Cause. Insurable interest timing: Life (inception), Marine (time of loss), Fire (both). Bima Trinity: Bima Sugam (portal), Bima Vistaar (composite product), Bima Vahak (women agents). NPS: 18-70 yrs, 12-digit PRAN, Tier 1 (40% annuity at 60), Tier 2 (liquid).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the fundamental principles of insurance law, for which type of insurance contract must "Insurable Interest" exist BOTH at the time of taking the policy AND at the time of loss?',
        options: [
          'Life Insurance',
          'Marine Cargo Insurance',
          'Fire Insurance',
          'Personal Accident Insurance',
        ],
        correctAnswer: 'Fire Insurance',
        explanation: 'In Fire Insurance, insurable interest must exist both at the time of entering the contract and at the time of the actual loss/damage. In Life Insurance, insurable interest is required only at inception; in Marine Insurance, it is required only at the time of loss.',
        trapExplanation: 'Candidates confuse the three distinct timing rules across Life, Marine, and Fire insurance.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-13',
    topicOrder: 39,
    topicSlug: 'iibf-financial-markets-and-instruments',
    topicTitle: 'Financial Markets, Fixed Income & Derivatives Architecture',
    topicDescription: 'Factoring, Forfaiting and TReDS Trade Receivables Financing Architecture.',
    slug: 'factoring-forfaiting-and-treds-trade-receivables-financing-mechanisms',
    title: 'Factoring, Forfaiting & TReDS Architecture: Trade Receivables Financing Mechanisms',
    shortDefinition: 'The institutional financing of business trade receivables: Factoring under the Factoring Regulation Act 2011 (amended 2021: non-recourse vs recourse factoring, assignment of receivables, factoring vs bill discounting) vs Forfaiting (medium-to-long term 100% non-recourse export receivables financing guaranteed by an Aval / Bank Guarantee), and the RBI-regulated Trade Receivables Discounting System (TReDS: electronic platform connecting MSME sellers, corporate/government buyers, and multiple financiers for transparent competitive reverse auction discounting).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-13-01',
        statement: 'Under the Factoring Regulation (Amendment) Act 2021, the restrictive "Principal Business Condition" was abolished, allowing all registered NBFCs (other than NBFC-Factors) to undertake factoring business, while mandating that assignment of receivables must be registered with the Central Registry (CERSAI) within 30 days.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Factoring Regulation (Amendment) Act, 2021 (Act No. 32 of 2021); RBI Master Direction',
        excerpt: '2021 Act liberalized factoring for all NBFCs and mandated CERSAI registration within 30 days.',
      },
      {
        id: 'CLM-IIBF-13-02',
        statement: 'Forfaiting is a specialized trade finance mechanism used for medium-to-long term export transactions (1 to 5 years), where a forfaiter purchases negotiable trade bills (bills of exchange, promissory notes) from an exporter on a 100% Without Recourse (non-recourse) basis, protected by an Aval / Bank Guarantee from the importer\'s bank.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICC Uniform Rules for Forfeiting (URF 800); EXIM Bank Guidelines on Forfaiting',
        excerpt: 'Forfaiting is 100% without recourse medium/long-term export financing guaranteed by an Aval.',
      },
      {
        id: 'CLM-IIBF-13-03',
        statement: 'Trade Receivables Discounting System (TReDS) is an electronic auction platform setup under RBI guidelines to facilitate factoring of trade receivables of MSMEs from corporate buyers, Central Government departments, and CPSEs through online competitive bidding by multiple banks and NBFC-Factors without recourse to the MSME seller.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Guidelines for the Trade Receivables Discounting System (TReDS); Ministry of MSME Mandate',
        excerpt: 'TReDS enables transparent reverse-factoring auction of MSME invoices without recourse.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Unlocking Working Capital Trapped in Unpaid Invoices',
        body: 'When an MSME supplies goods to a large corporation, payment is frequently delayed by 60 to 90 days. The MSME cannot pay its workers or buy raw materials while its working capital is locked in unpaid invoices.\n\n**Factoring and TReDS** allow the MSME to sell these invoices immediately to financial institutions at a small discount, converting future receivables into instant liquid cash today.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Factoring vs Forfaiting Comparison',
        body: '| Parameter | Factoring | Forfaiting |\n| :--- | :--- | :--- |\n| **Maturity Tenor** | **Short-Term** (up to 90–180 days). | **Medium to Long-Term** (1 year to 5+ years). |\n| **Scope** | Domestic and International trade receivables. | **International Export Trade ONLY**. |\n| **Recourse Option** | Can be **Recourse** (seller absorbs bad debts) or **Non-Recourse** (factor absorbs bad debts). | **STRICTLY 100% NON-RECOURSE (Without Recourse)** to the exporter. |\n| **Underlying Instrument**| Invoices, book debts, accounts receivable ledger. | Negotiable trade bills (Bills of Exchange, Promissory Notes) with **Bank Aval / Guarantee**. |\n| **Financing Quantum** | Typically **80% to 90% upfront advance** (balance paid on collection less fees). | **100% upfront financing** less discount charges. |\n| **Services Provided** | Financing + Sales Ledger Maintenance + Debt Collection + Credit Protection. | **Pure Financing ONLY** (no ledger maintenance). |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The TReDS Reverse Auction Architecture',
        body: '```mermaid\ngraph TD\n    MSME["1. MSME Seller uploads goods invoice on TReDS platform (e.g. RXIL, M1xchange, Invoicemart)"]\n    MSME --> BUYER["2. Corporate / CPSE Buyer accepts and digitally validates the invoice"]\n    BUYER --> AUCTION["3. Multiple Banks & NBFC-Factors bid competitive discount rates in reverse auction"]\n    AUCTION --> MSME_AC["4. Lowest bidder funds MSME bank account within T+1 days on Without-Recourse basis"]\n    AUCTION --> SETTLE["5. On invoice due date (e.g. Day 60), Buyer pays 100% invoice amount directly to Financier via NACH"]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Trade Receivables',
        body: '1. **Recourse in Forfaiting:** Forfaiting is **ALWAYS 100% WITHOUT RECOURSE** (Non-Recourse) to the exporter.\n2. **TReDS Mandatory Registration:** All CPSEs and companies with turnover $> ₹250 \\text{ Crore}$ are mandatorily required to register on TReDS.\n3. **CERSAI Registration:** Under Factoring Act 2021, assignment of receivables must be registered with **CERSAI within 30 days**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): Factoring, Forfaiting & TReDS',
        notes: 'Direct MCQs on Factoring vs Forfaiting (without recourse rule), TReDS ₹250 Cr turnover mandate, and CERSAI 30 days.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Factoring = Short-term (90-180d, domestic/export, with/without recourse, 80-90% advance, ledger management). Forfaiting = Medium-long term (1-5 yrs, export only, 100% WITHOUT RECOURSE, 100% advance, Aval guaranteed). TReDS = RBI electronic invoice bidding platform for MSMEs (reverse auction, without recourse, mandatory for CPSEs/firms >₹250 Cr turnover). CERSAI registration = 30 days.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following is a DEFINING characteristic of "Forfaiting" in international trade finance that distinguishes it from standard factoring?',
        options: [
          'It is always short-term credit of less than 30 days',
          'It is strictly a WITH-RECOURSE transaction where the exporter remains liable for buyer default',
          'It is strictly a 100% WITHOUT-RECOURSE (non-recourse) medium-to-long term transaction for export receivables guaranteed by an Aval',
          'It is restricted exclusively to domestic agricultural crop sales within India',
        ],
        correctAnswer: 'It is strictly a 100% WITHOUT-RECOURSE (non-recourse) medium-to-long term transaction for export receivables guaranteed by an Aval',
        explanation: 'Forfaiting is a specialized trade finance mechanism used exclusively for medium-to-long term export receivables (1 to 5 years), where the forfaiter purchases export bills 100% without recourse to the exporter, backed by an unconditional bank guarantee (Aval) from the importer\'s bank.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 40: FOREX MARKETS & NRI BANKING FRAMEWORK
  // =========================================================================
  {
    id: 'CON-IIBF-14',
    topicOrder: 40,
    topicSlug: 'iibf-forex-markets-and-nri-banking',
    topicTitle: 'Foreign Exchange Markets & NRI Banking Framework',
    topicDescription: 'Foreign exchange quotations, FEDAI rules, cross rates, Nostro/Vostro/Loro accounts, and NRI deposit schemes.',
    slug: 'forex-market-mechanics-direct-vs-indirect-quotes-cross-rates-and-fedaic-rules',
    title: 'Forex Market Mechanics: Direct vs Indirect Quotes, Cross Rates, FEDAI Rules & Nostro/Vostro Accounts',
    shortDefinition: 'The technical operations of the foreign exchange market: Direct Quotation (units of domestic currency per 1 foreign currency unit: 1 USD = ₹83.50) vs Indirect Quotation, Bid-Ask Spread and the Rule "Buy Low, Sell High" from the banker\'s perspective, Cross Rate calculations, Settlement dates (Cash/Value Today, TOM / Value Tomorrow, Spot / Value Day After Tomorrow [T+2], Forward contracts), FEDAI (Foreign Exchange Dealers\' Association of India) statutory rules, and Correspondent Banking accounts (Nostro: "Our account with you", Vostro: "Your account with us", Loro: "Their account with them").',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-14-01',
        statement: 'Foreign exchange quotations in India follow the Direct Quote convention (since August 2, 1993), expressing a variable number of domestic currency (INR) units per fixed unit of foreign currency (e.g. 1 USD = ₹83.40 / 83.50); in direct quotes, the bank BUYS foreign currency at the lower Bid rate and SELLS foreign currency at the higher Ask rate.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'FEDAI Rule Book; RBI Master Direction – Foreign Exchange Management',
        excerpt: 'India uses direct quotations (1 USD = ₹X); Bank buys at Bid (lower) and sells at Ask (higher).',
      },
      {
        id: 'CLM-IIBF-14-02',
        statement: 'Foreign exchange transactions are classified by value/settlement date: Cash / Value Today (settlement on trade date T+0), TOM / Value Tomorrow (settlement on T+1 business day), Spot / Value Spot (settlement on T+2 business days), and Forward (settlement on a mutually agreed date beyond T+2).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'FEDAI Guidelines on Settlement Cycles; IIBF IE&IFS Module B',
        excerpt: 'Forex settlements: Cash (T+0), TOM (T+1), Spot (T+2), Forward (>T+2).',
      },
      {
        id: 'CLM-IIBF-14-03',
        statement: 'In international correspondent banking terminology: a Nostro Account is an Indian bank\'s foreign currency account maintained with a foreign correspondent bank abroad; a Vostro Account is a foreign bank\'s Rupee account maintained with an Indian bank in India; a Loro Account is a third-party bank\'s account referred to in inter-bank dealings.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction on External Commercial Borrowings, Trade Credits and Structured Obligations; FEDAI Rules',
        excerpt: 'Nostro = Our account with you; Vostro = Your account with us; Loro = Their account.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Global Currency Plumbing: Nostro, Vostro, and Exchange Math',
        body: 'When an Indian bank in Mumbai needs to pay a German supplier in Euros, money doesn\'t physically fly on an airplane. The State Bank of India maintains a Euro account with Deutsche Bank in Frankfurt (**Nostro Account**), and instructs Deutsche Bank to debit its account and credit the German supplier.\n\nUnderstanding these foreign exchange accounts and exchange rate math is fundamental to cross-border trade operations.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Correspondent Banking Account Matrix',
        body: '| Account Type | Latin Meaning | Operational Reality | Example |\n| :--- | :--- | :--- | :--- |\n| **NOSTRO Account** | *"Our account with you"* | An Indian bank opens and maintains a foreign currency account with a foreign bank abroad. | State Bank of India maintains a **US Dollar account with Citibank in New York**. |\n| **VOSTRO Account** | *"Your account with us"* | A foreign bank opens and maintains an Indian Rupee (INR) account with an Indian bank in India. | JP Morgan Chase maintains an **INR account with HDFC Bank in Mumbai** (used for Special Rupee Vostro Accounts - SRVA for rupee trade). |\n| **LORO Account** | *"Their account with them"* | Referring to a third party\'s Nostro/Vostro account during settlement discussions. | Bank of Baroda tells Citibank New York: *"Please credit Punjab National Bank\'s Nostro account with you."* |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Forex Settlement Dates & Two-Way Quotations',
        body: '```mermaid\ngraph LR\n    T0["1. CASH / VALUE TODAY (Settled on Trade Date T+0)"]\n    T1["2. TOM / VALUE TOMORROW (Settled on Next Business Day T+1)"]\n    T2["3. SPOT / VALUE SPOT (Settled on Day After Tomorrow T+2)"]\n    FWD["4. FORWARD (Settled on fixed maturity date beyond T+2)"]\n    T0 --> T1\n    T1 --> T2\n    T2 --> FWD\n```\n\n### The Two-Way Quote Rule: "Buy Low, Sell High"\n* In India, quotes are **Direct Quotes**: $\\mathbf{\\text{USD/INR} = 83.40 / 83.50}$\n* **Bid Rate (₹83.40):** The rate at which the **bank BUYS dollars** from the customer.\n* **Ask / Offer Rate (₹83.50):** The rate at which the **bank SELLS dollars** to the customer.\n* **Spread:** $\\text{Spread} = 83.50 - 83.40 = ₹0.10$ (Bank\'s operational margin).',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Forex Calculations',
        body: '1. **Banker\'s Perspective:** In all IIBF forex numericals, always calculate from the **BANK\'S PERSPECTIVE**: the bank buys cheap (Bid) and sells expensive (Ask).\n2. **Spot Settlement:** Spot rate settlement is **T+2 BUSINESS DAYS** (excluding Saturdays, Sundays, and public holidays in both currency centers).\n3. **Forward Premium vs Discount:**\n   * If Forward Rate > Spot Rate, the foreign currency is at a **Forward Premium**.\n   * If Forward Rate < Spot Rate, the foreign currency is at a **Forward Discount**.\n   $$\\mathbf{\\text{Annualized Premium } (\\%) = \\frac{\\text{Forward Rate} - \\text{Spot Rate}}{\\text{Spot Rate}} \\times \\frac{12}{\\text{Tenor in Months}} \\times 100}$$',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): Forex Operations & Quotes',
        notes: 'Direct numerical problems: cross currency rate computation, TT buying/selling rate selection, Nostro/Vostro definitions, and forward premium %.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Forex Quotes: Direct quote (1 USD = ₹X). Bank buys at Bid (low) and sells at Ask (high). Settlements: Cash (T+0), TOM (T+1), Spot (T+2), Forward (>T+2). Nostro = Our account with you (SBI USD with Citi NY). Vostro = Your account with us (Foreign bank INR with SBI Mumbai). Loro = Their account with them. Forward Premium % = (Forward - Spot) / Spot * (12 / months) * 100.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'An Indian bank maintains a US Dollar-denominated bank account with Citibank in New York to facilitate foreign exchange transactions. From the perspective of the Indian bank, how is this account officially classified?',
        options: [
          'Vostro Account',
          'Nostro Account',
          'Loro Account',
          'FCNR(B) Account',
        ],
        correctAnswer: 'Nostro Account',
        explanation: 'A Nostro Account (Latin: "our account") is an account that a domestic bank holds in a foreign currency with a foreign correspondent bank abroad (e.g. State Bank of India holding a USD account with Citibank in New York).',
        trapExplanation: 'Candidates confuse Nostro ("our account with you") with Vostro ("your account with us").',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-15',
    topicOrder: 40,
    topicSlug: 'iibf-forex-markets-and-nri-banking',
    topicTitle: 'Foreign Exchange Markets & NRI Banking Framework',
    topicDescription: 'Non-Resident Indian (NRI) Deposit Accounts: NRE, NRO & FCNR(B) Comparative Matrix.',
    slug: 'nri-deposit-accounts-framework-nre-nro-and-fcnr-b-comparative-matrix',
    title: 'NRI Deposit Accounts Framework: NRE vs NRO vs FCNR(B) Comparative Architecture',
    shortDefinition: 'The statutory regime governing Non-Resident Indian (NRI) and Person of Indian Origin (PIO/OCI) bank accounts under Foreign Exchange Management (Deposit) Regulations: Non-Resident External (NRE: Rupee-denominated, fully repatriable, exempt from Indian income tax, foreign currency conversion risk borne by depositor), Non-Resident Ordinary (NRO: Rupee-denominated for legitimate domestic Indian incomes like rent/dividends, subject to Indian TDS/income tax, restricted repatriation up to USD 1 Million per financial year), and Foreign Currency Non-Resident (Bank) (FCNR[B]: foreign currency denominated term deposits for 1 to 5 years, zero currency risk to depositor, tax-free).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-15-01',
        statement: 'Under FEMA regulations, Non-Resident External (NRE) accounts are Rupee-denominated accounts opened from inward remittances in convertible foreign currency, where both principal and interest are freely and fully repatriable abroad, and interest earned is completely exempt from Indian Income Tax.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Foreign Exchange Management (Deposit) Regulations, 2016 (Schedule 1); Income Tax Act 1961 (Section 10(4)(ii))',
        excerpt: 'NRE accounts are Rupee-denominated, fully repatriable, and 100% tax-free in India.',
      },
      {
        id: 'CLM-IIBF-15-02',
        statement: 'Non-Resident Ordinary (NRO) accounts are Rupee-denominated accounts maintained to receive and manage legitimate incomes arising in India (rent, dividends, pension, sale of local assets); interest earned is subject to applicable Indian Income Tax / TDS (typically 30% plus cess, subject to DTAA), and repatriation of funds is subject to an annual ceiling of USD 1 Million per financial year.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Foreign Exchange Management (Deposit) Regulations, 2016 (Schedule 3); FEMA Master Direction on Remittance',
        excerpt: 'NRO accounts manage domestic Indian income; interest is taxable; repatriation capped at $1M/yr.',
      },
      {
        id: 'CLM-IIBF-15-03',
        statement: 'Foreign Currency Non-Resident (Bank) [FCNR(B)] accounts are maintained strictly as Term Deposits (fixed deposits for 1 to 5 years only) denominated in approved designated foreign currencies (USD, GBP, EUR, JPY, CAD, AUD), where the foreign exchange currency risk is borne entirely by the bank, and interest earned is exempt from Indian Income Tax.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'FEMA (Deposit) Regulations, 2016 (Schedule 2); RBI Master Direction on Deposits and Accounts',
        excerpt: 'FCNR(B) deposits are foreign currency term deposits (1-5 yrs); currency risk borne by bank; tax-free.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Managing Cross-Border Incomes and Sovereign Foreign Currency Inflows',
        body: 'When an Indian citizen moves abroad to Dubai or London to work, two distinct banking needs emerge:\n1. How can they send overseas salary earnings back to India safely with zero Indian tax and the ability to take the money back anytime? (**NRE & FCNR[B] Accounts**)\n2. What happens to the rental income from their apartment in Jaipur or dividends from their Indian stocks? (**NRO Account**)',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Comparative Matrix: NRE vs NRO vs FCNR(B)',
        body: '| Parameter | NRE Account | NRO Account | FCNR(B) Account |\n| :--- | :--- | :--- | :--- |\n| **Account Denomination** | **Indian Rupees (INR)**. | **Indian Rupees (INR)**. | **Designated Foreign Currencies** (USD, GBP, EUR, JPY, AUD, CAD). |\n| **Permitted Account Types** | Savings, Current, Recurring, Fixed Term Deposits. | Savings, Current, Recurring, Fixed Term Deposits. | **TERM DEPOSITS ONLY** (Fixed deposits for **1 to 5 Years ONLY**). |\n| **Eligible Source Inflows** | Inward remittances from abroad in foreign currency only. | Incomes arising in India (rent, dividend, pension) + Foreign remittances. | Inward remittances in foreign currency. |\n| **Taxability in India** | **100% EXEMPT** from Indian Income Tax and TDS. | **TAXABLE** in India (TDS at 30% + cess, or DTAA rate). | **100% EXEMPT** from Indian Income Tax. |\n| **Repatriability Abroad** | **Freely and fully repatriable** without any upper limit. | Current income is repatriable; capital funds capped at **USD 1 Million per FY**. | **Freely and fully repatriable** (principal and interest). |\n| **Exchange Rate Risk** | **Borne by Depositor** (Dollars converted to INR on entry; reconverted on exit). | **Borne by Depositor**. | **BORNE BY THE BANK** (Depositor deposits USD and withdraws USD). |\n| **Joint Account Rules** | With another NRI, or with resident Indian relative on **Former or Survivor** basis. | Jointly with resident Indian relative on **Former or Survivor** basis. | With another NRI, or resident relative on **Former or Survivor** basis. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in NRI Deposit Accounts',
        body: '1. **FCNR(B) Tenor Limits:** FCNR(B) deposits can be opened for a **minimum of 1 YEAR and a maximum of 5 YEARS ONLY** (No savings/current accounts allowed; no term <1 yr or >5 yrs).\n2. **Who Bears Currency Risk:** In **NRE**, the **Depositor bears currency risk**. In **FCNR(B)**, the **Bank bears currency risk**.\n3. **NRO Repatriation Limit:** NRO account capital funds can be repatriated up to a statutory ceiling of **USD 1 Million per financial year** (subject to Form 15CA/15CB tax clearance).',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): NRI Accounts Framework',
        notes: 'Classic high-frequency topic: NRE vs NRO taxability, FCNR(B) 1-5 yr tenor, and $1M NRO repatriation limit.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NRE: Rupee-denominated, foreign source, tax-free, fully repatriable, depositor bears forex risk. NRO: Rupee-denominated, Indian local income, TAXABLE (30% TDS), repatriation max USD 1M/yr. FCNR(B): Foreign currency Term Deposit ONLY (1 to 5 years), tax-free, fully repatriable, BANK bears forex risk. Joint accounts with resident relatives permitted on Former or Survivor basis.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements regarding Foreign Currency Non-Resident (Bank) [FCNR(B)] deposit accounts is CORRECT?',
        options: [
          'They can be opened as Savings Bank accounts, Current accounts, or Term deposits for any duration up to 10 years',
          'They are maintained strictly as Term Deposits for a tenure between 1 year and 5 years, and the foreign exchange risk is borne by the bank',
          'Interest earned on FCNR(B) accounts is subject to 30% TDS under the Indian Income Tax Act',
          'The depositor bears 100% of the currency exchange rate fluctuation risk upon maturity conversion',
        ],
        correctAnswer: 'They are maintained strictly as Term Deposits for a tenure between 1 year and 5 years, and the foreign exchange risk is borne by the bank',
        explanation: 'Under FEMA regulations, FCNR(B) accounts can be opened strictly as Term Deposits for a minimum period of 1 year and a maximum period of 5 years in designated foreign currencies (USD, GBP, EUR, JPY, etc.). The interest is tax-exempt in India, and the foreign exchange risk is borne entirely by the accepting bank.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 41: SUSTAINABLE FINANCE & BANKING TECHNOLOGY
  // =========================================================================
  {
    id: 'CON-IIBF-16',
    topicOrder: 41,
    topicSlug: 'iibf-sustainable-finance-and-banking-technology',
    topicTitle: 'Sustainable Finance, Climate Risk & Banking Technology',
    topicDescription: 'Climate risk frameworks, green deposits, BRSR reporting, and technology foundations in banking.',
    slug: 'sustainable-finance-climate-risk-framework-green-deposits-and-brsr-reporting',
    title: 'Sustainable Finance: Climate Risk Framework, Green Deposits & BRSR Reporting',
    shortDefinition: 'The emerging regulatory framework for sustainable green banking in India: RBI\'s Framework for Acceptance of Green Deposits (April 2023: dedicated allocation of deposit proceeds to green activities like renewable energy, clean transport, and energy efficiency with third-party verification), Climate Risk taxonomy (Physical Risk [extreme weather/sea level rise] vs Transition Risk [carbon taxes, technological obsolescence]), Task Force on Climate-related Financial Disclosures (TCFD) pillars (Governance, Strategy, Risk Management, Metrics/Targets), and SEBI\'s Business Responsibility and Sustainability Report (BRSR Core) mandatory disclosures.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-16-01',
        statement: 'Under the RBI Framework for Acceptance of Green Deposits (effective June 1, 2023), Regulated Entities (REs) can issue interest-bearing green deposits denominated in Indian Rupees, with proceeds earmarked strictly for allocated green projects (renewable energy, energy efficiency, clean transportation, water management) verified through an annual independent Third-Party Verification and Assurance report.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Framework for Acceptance of Green Deposits (Circular RBI/2023-24/14, April 11, 2023)',
        excerpt: 'RBI Green Deposit Framework mandates proceeds allocation to verified green projects with independent assurance.',
      },
      {
        id: 'CLM-IIBF-16-02',
        statement: 'Climate-related financial risks are categorized into Physical Risks (direct financial losses from severe acute weather events and chronic shifts like rising temperatures/sea levels) and Transition Risks (financial risks arising from the structural transition to a low-carbon economy, including carbon taxes, policy shifts, and stranded asset write-downs).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'BCBS Principles for the Effective Management and Supervision of Climate-related Financial Risks (2022); RBI Discussion Paper on Climate Risk',
        excerpt: 'Climate risks comprise Physical Risks (acute/chronic climate damage) and Transition Risks (policy/technology shifts).',
      },
      {
        id: 'CLM-IIBF-16-03',
        statement: 'Under SEBI listing regulations, the top 1,000 listed entities by market capitalization are mandatorily required to submit a Business Responsibility and Sustainability Report (BRSR) covering Environmental, Social, and Governance (ESG) disclosures across 9 National Voluntary Guidelines principles, with BRSR Core reasonable assurance phased in for top listed firms.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'SEBI Circular on Business Responsibility and Sustainability Reporting (BRSR, May 2021 & July 2023)',
        excerpt: 'Top 1,000 listed entities must submit BRSR ESG disclosures with BRSR Core assurance.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Pricing Climate Disruption into the Banking Balance Sheet',
        body: 'If a commercial bank extends a 20-year loan to a thermal coal power plant that becomes obsolete due to solar tariffs (**Transition Risk**), or lends to a coastal resort flooded by rising sea levels (**Physical Risk**), the bank faces catastrophic loan default.\n\n**Sustainable Finance** establishes mandatory frameworks to identify, measure, and disclose environmental risks while mobilizing retail and institutional savings into **Green Deposits** and **Sovereign Green Bonds**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Physical Risk vs Transition Risk in Banking',
        body: '```mermaid\ngraph TD\n    CR["Climate-Related Financial Risks for Banks"]\n    CR --> PR["1. PHYSICAL RISK: Direct damage to borrower physical assets (Floods, Cyclones, Heatwaves destroying crop harvests/factories)"]\n    CR --> TR["2. TRANSITION RISK: Economic disruption from rapid shift to Net-Zero (Carbon border taxes, emission caps, EV disruption stranding oil refineries)"]\n    PR --> CREDIT["Credit Risk Surge: Borrower insolvency & NPA creation"]\n    TR --> CREDIT\n    PR --> MKT["Market Risk & Liquidity Risk: Collapse in value of carbon-heavy collateral"]\n    TR --> MKT\n```',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Green Finance',
        body: '1. **Green Deposit Currency:** Under RBI guidelines, Green Deposits issued by Indian banks must be **denominated in Indian Rupees (INR)**.\n2. **Excluded Activities for Green Deposit Financing:** Proceeds **CANNOT be used** for fossil fuel projects, nuclear power generation, direct biomass burning, landfill projects, or tobacco/gambling industries.\n3. **BRSR Applicability:** Mandatory for the **top 1,000 listed companies by market capitalization on BSE/NSE**.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Sustainable Finance & Climate Risk',
        notes: 'Direct MCQs on RBI Green Deposit rules (2023), Physical vs Transition risk definitions, and BRSR top 1000 threshold.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RBI Green Deposits (2023): INR-denominated deposits earmarked for verified green projects with 3rd-party audit; excludes fossil fuels/nuclear. Climate Risks: Physical (weather damage) vs Transition (carbon tax/tech obsolescence). TCFD: Governance, Strategy, Risk Mgmt, Metrics. SEBI BRSR = Top 1,000 listed firms mandatory ESG disclosures.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s "Framework for Acceptance of Green Deposits" (2023), which of the following activities is EXPLICITLY PROHIBITED from being financed using funds raised through Green Deposits?',
        options: [
          'Grid-connected Solar and Wind energy generation projects',
          'Electric Vehicle (EV) public charging infrastructure',
          'Projects involving new fossil fuel extraction, refining, or nuclear power generation',
          'Municipal rainwater harvesting and wastewater treatment plants',
        ],
        correctAnswer: 'Projects involving new fossil fuel extraction, refining, or nuclear power generation',
        explanation: 'Under the RBI Green Deposit Framework, an explicit negative list prohibits allocating green deposit proceeds to projects involving new fossil fuel extraction/refining, nuclear power generation, direct waste incineration, landfill projects, and tobacco/weapons industries.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
];

export async function seedBatchB1IIBFCanonicalKnowledge() {
  console.log('Seeding Batch B1 IIBF Canonical Knowledge (Topics 38–41: 16 concepts)...');

  let domain = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'banking-finance-commercial-operations' },
        { slug: 'iibf-banking-finance' },
        { name: 'Banking, Finance & Commercial Operations' },
      ],
    },
  });

  if (!domain) {
    domain = await db.domain.create({
      data: {
        name: 'Banking, Finance & Commercial Operations',
        slug: 'banking-finance-commercial-operations',
        description: 'Comprehensive banking regulations, principles and practices of banking (PPB), accounting and financial management (AFMB), retail banking (RBWM), and Indian financial system architecture.',
      },
    });
  }

  let subject = await db.subject.findFirst({
    where: { slug: 'iibf-banking-regulations' },
  });

  if (!subject) {
    subject = await db.subject.create({
      data: {
        name: 'IIBF & Banking Regulations',
        slug: 'iibf-banking-regulations',
        domainId: domain.id,
        scopeStatement: 'Master curriculum for IIBF DBF, JAIIB/CAIIB, and RBI Grade B banking examinations encompassing IE&IFS, PPB, AFMB, and RBWM.',
        description: 'Complete academic repository for banking laws, financial management, retail banking, and statutory compliance.',
      },
    });
  }

  const source = await db.source.upsert({
    where: { id: 'SRC-IIBF-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-IIBF-MASTER-2026',
      title: 'IIBF & Banking Regulations Master Corpus (2026)',
      sourceType: 'STATUTORY_REPORTS',
      authorityTier: 'PRIMARY_GOVERNMENT_RECORD',
      description: 'Authoritative IIBF, Banking Regulation Act 1949, RBI Master Directions, and DBF/JAIIB master repository.',
    },
  });

  const iibf = await db.exam.upsert({
    where: { slug: 'iibf-dbf' },
    update: {},
    create: {
      slug: 'iibf-dbf',
      name: 'IIBF Diploma in Banking & Finance',
      conductingBody: 'Indian Institute of Banking & Finance',
      description: 'Premier professional banking qualification (DBF / JAIIB / CAIIB).',
    },
  });

  const upsc = await db.exam.upsert({
    where: { slug: 'upsc-cse' },
    update: {},
    create: {
      slug: 'upsc-cse',
      name: 'UPSC Civil Services Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'National civil services examination.',
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

  const examMap: Record<string, string> = {
    'iibf-dbf': iibf.id,
    'upsc-cse': upsc.id,
    'rpsc-ras': rpsc.id,
  };

  const topicsMap: Record<string, { title: string; order: number; description: string; concepts: CanonicalConceptDefinition[] }> = {};
  for (const c of BATCH_B1_IIBF_CONCEPTS) {
    if (!topicsMap[c.topicSlug]) {
      topicsMap[c.topicSlug] = {
        title: c.topicTitle,
        order: c.topicOrder,
        description: c.topicDescription,
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
        description: topicData.description,
        status: 'ACTIVE',
      },
      create: {
        subjectId: subject.id,
        slug: topicSlug,
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
    });

    for (const cDef of topicData.concepts) {
      const concept = await db.concept.upsert({
        where: { id: cDef.id },
        update: {
          topicId: topic.id,
          slug: cDef.slug,
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

      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

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

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: source.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'STATUTORY_INSTRUMENT',
            authority: 'PRIMARY_GOVERNMENT_RECORD',
            evidentiarySupport: 'DIRECT_PROOF',
            extractionConfidence: 'CERTAIN',
          },
        });
      }

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
              frequentTraps: em.frequentTraps,
            },
          });
        }
      }

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
          },
        });
      }
    }
  }
}
