/**
 * Batch P5 Canonical Knowledge Base Seeder
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers 13 Canonical Concepts across Topics 21, 22, and 23:
 * - Topic 21: Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs) (4 concepts)
 * - Topic 22: Constitutional Institutions: Election Commission of India & Comptroller and Auditor General (4 concepts)
 * - Topic 23: Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity (5 concepts)
 */

import { db } from '../db/client';
import { BATCH_P5_SEMANTIC_UNITS } from '../ingestion/batch-p5-semantic-inventory';

export interface BatchP5ConceptDef {
  id: string;
  topicOrder: number;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  claims: Array<{
    id: string;
    statement: string;
    claimType: 'CONSTITUTIONAL_PROVISION' | 'STATUTORY_RULE' | 'JUDICIAL_DOCTRINE' | 'HISTORICAL_FACT' | 'PROCEDURAL_RULE';
    epistemicLevel: 'ESTABLISHED_FACT';
    confidence: 'HIGH';
    locator: string;
    excerpt: string;
  }>;
  contentBlocks: Array<{
    type: 'INTUITION' | 'CORE_IDEA' | 'MECHANISM' | 'COMPARISON' | 'LEGAL_DISTINCTION' | 'CASE_LAW' | 'EXAM_APPLICATION';
    title: string;
    body: string;
    order: number;
  }>;
  examMappings: Array<{
    examCode: 'upsc-cse' | 'rpsc-ras' | 'iibf-dbf';
    relevance: 'CORE_SYLLABUS' | 'DIRECT_OVERLAY' | 'APPLIED_ANALYTICAL';
    priority: 'HIGH' | 'MEDIUM';
    requiredDepth: 'EXPERT' | 'PROFICIENT' | 'CONCEPTUAL';
    syllabusUnit: string;
    notes: string;
    frequentTraps?: string;
  }>;
  revisionUnits: Array<{
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    order: number;
  }>;
  questions: Array<{
    type: 'CONCEPT_CHECK' | 'EXAM_PYQ';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ: boolean;
  }>;
}

export const BATCH_P5_CONCEPTS: BatchP5ConceptDef[] = [
  // =========================================================================
  // TOPIC 21: RURAL & URBAN LOCAL GOVERNANCE (73RD & 74TH CAAS)
  // =========================================================================
  {
    id: 'CON-T21-01',
    topicOrder: 21,
    topicSlug: 'local-governance-panchayats-and-municipalities',
    topicTitle: 'Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)',
    topicDescription: 'Constitutional institutionalization of local self-government, 3-tier Panchayati Raj, PESA tribal self-rule, urban local bodies, and fiscal-functional devolution.',
    slug: '73rd-amendment-panchayati-raj-architecture-and-devolution',
    title: '73rd Constitutional Amendment Act: Panchayati Raj Architecture & 3-Tier Devolution',
    shortDefinition: 'Constitutionalization of rural local self-government under Part IX (Articles 243–243O) and Eleventh Schedule (29 matters), establishing mandatory 3-tier PRIs, Gram Sabha, State Election Commission (Art 243K), and State Finance Commission (Art 243I).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T21-01-01',
        statement: 'The 73rd Constitutional Amendment Act 1992 added Part IX (Articles 243 to 243-O) and the Eleventh Schedule containing 29 functional items, giving constitutional status to a mandatory 3-tier Panchayati Raj structure (except in states with populations under 20 lakhs which may omit the intermediate tier).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Part IX, Arts 243-243O; Eleventh Schedule',
        excerpt: '73rd Amendment inserted Part IX and Eleventh Schedule (29 functional subjects); 3-tier structure mandatory for states with pop > 20 lakhs.',
      },
      {
        id: 'CLM-T21-01-02',
        statement: 'Article 243D mandates reservation of seats for SCs and STs in proportion to their population and not less than one-third (33.33%) of total seats and chairpersons for women, while Articles 243-I and 243-K establish independent State Finance Commissions and State Election Commissions respectively.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Arts 243D, 243I, 243K',
        excerpt: 'Art 243D mandates min 1/3rd women reservation; Art 243I creates State Finance Commission; Art 243K creates State Election Commission.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Constitutionalize Local Government?',
        body: 'Prior to 1992, Panchayati Raj existed purely as a non-justiciable directive under Article 40. State governments routinely superseded panchayats, delayed elections for decades, starved them of funds, and treated them as subordinate administrative departments. The 73rd Amendment transformed local self-governance from an optional state experiment into an irreducible third tier of Indian constitutional democracy with guaranteed tenure, regular elections, and constitutional financial review.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Part IX Architecture & Mandatory vs Voluntary Provisions',
        body: 'The 73rd Amendment establishes a sharp constitutional boundary between mandatory provisions (which every state must enact) and voluntary provisions (left to state legislative discretion):\n\n1. Mandatory Constitutional Provisions:\n   • Gram Sabha as the foundational democratic assembly of registered village voters (Art 243A).\n   • 3-tier structure: Gram Panchayat (village), Panchayat Samiti (intermediate/block), and Zilla Parishad (district) under Art 243B (states with population below 20 lakhs may skip intermediate tier).\n   • Direct elections for all members at all three levels (Art 243C).\n   • Indirect elections for chairpersons at intermediate and district levels; chairperson election mode at village level left to state law.\n   • Fixed 5-year tenure (Art 243E) with mandatory fresh elections within 6 months of dissolution.\n   • Minimum 1/3rd reservation for women across seats and chairpersons (Art 243D).\n   • Independent State Election Commission (Art 243K) with removal equivalence to a High Court Judge.\n   • State Finance Commission (Art 243I) constituted every 5 years to review PRI finances.\n\n2. Voluntary Discretionary Provisions:\n   • Extent of functional devolution from the 29 subjects in the Eleventh Schedule.\n   • Granting taxation and financial powers (Art 243H).\n   • Reservation for Backward Classes (OBCs).\n   • Giving voting rights to MPs and MLAs in Panchayats.',
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'The Devolution Paradox: The 3Fs (Funds, Functions, Functionaries)',
        body: 'While the Constitution gave PRIs de jure status, effective local self-governance depends on the actual devolution of the Three Fs:\n\n• Functions: States have transferred subjects on paper without executive operational rules.\n• Funds: PRIs generate less than 5% of their total revenue from internal taxation, relying heavily on tied central/state grants (Finance Commission grants under Art 280(3)(bb)).\n• Functionaries: Key grassroots administrative officers (Gram Vikas Adhikari / BDO / Chief Executive Officer) belong to state civil services, maintaining upward accountability to state secretariats rather than downward accountability to the elected Gram Panchayat.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examination Angle & Frequent Traps',
        body: '• Trap 1: Gram Sabha is NOT composed of all adult village residents; it consists ONLY of persons registered in the electoral rolls of the village (Art 243(b)).\n• Trap 2: If a Panchayat is dissolved before 5 years, the newly elected Panchayat serves ONLY the remainder of the 5-year period, NOT a fresh full 5-year term (Art 243E(4)). Exception: If the remaining term is less than 6 months, no mid-term election is held.\n• Trap 3: The State Election Commissioner is appointed by the Governor, but can be removed ONLY in the manner and on the grounds as a High Court Judge (by the President via Parliamentary address under Art 243K(2)).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Devolution of Powers and Finances up to Local Levels and Challenges Therein',
        notes: 'Emphasize mandatory vs voluntary provisions, State Finance Commission link with Central FC (Art 280(3)(bb)), and 3Fs operational deficits.',
        frequentTraps: 'Confusing Gram Sabha voter criteria with total village population; assuming SEC is subordinate to ECI.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity & Administrative System of Rajasthan: Panchayati Raj & 73rd Amendment',
        notes: 'Rajasthan was the first state to adopt PRIs (Nagaur, Oct 2, 1959). Rajasthan provides 50% women reservation in PRIs.',
        frequentTraps: 'Rajasthan Panchayati Raj Act 1994 section numbers and 50% women quota implementation.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Rural Banking and Financial Inclusion: Local Body Governance',
        notes: 'PRIs role in rural credit delivery, SHG bank linkage, and direct benefit transfer (DBT) beneficiary identification.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '73rd CAA 1992: Part IX (Arts 243-243O) & 11th Schedule (29 matters). Mandatory 3-tier PRIs, Gram Sabha (registered voters), min 1/3rd women reservation (50% in RJ), fixed 5-yr term (remainder term rule), SEC (Art 243K, removed like HC judge), SFC (Art 243I every 5 yrs).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The 73rd Amendment created constitutional rural local self-governance. Mandatory rules include 3 tiers (village, block, district; block skippable if population < 20L), direct member elections, min 1/3rd women quota, fixed 5-yr tenure with 6m election rule, SEC (removed as HC judge), and SFC. Voluntary rules include 29-item functional devolution, taxation powers, and OBC quotas. Core deficit: Lack of genuine 3Fs (Funds, Functions, Functionaries) devolution.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Structural Anatomy of Part IX (Panchayati Raj):\n• Art 243: Definitions (Gram Sabha = registered voters).\n• Art 243B: 3-tier structure (Gram, Intermediate, District).\n• Art 243C: Composition (Members directly elected; Intermediate/District Chairs indirectly elected).\n• Art 243D: Reservations (SC/ST proportional; Women min 1/3rd across seats & chairs).\n• Art 243E: Duration (5 years; dissolved body reconstituted only for remainder term; no election if < 6m left).\n• Art 243I: State Finance Commission (Reviews fiscal position, tax sharing, grant-in-aid).\n• Art 243K: State Election Commission (Superintendence of PRI rolls/elections; removed as HC judge).\n• Art 243O: Bar to interference by courts in electoral matters (delimitation unquestionable).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If a Gram Panchayat in India is dissolved after 2 years and 6 months of its 5-year tenure, the newly elected Gram Panchayat will serve for:',
        options: [
          'A full fresh term of 5 years from the date of its first meeting',
          'Only the remaining period of 2 years and 6 months',
          'A term of 3 years as per State Election Commission discretion',
          'Until the next Zilla Parishad election only',
        ],
        correctAnswer: 'Only the remaining period of 2 years and 6 months',
        explanation: 'Under Article 243E(4), a Panchayat reconstituted upon the dissolution of a Panchayat before the expiration of its duration shall continue only for the remainder of the period for which the dissolved Panchayat would have continued.',
        trapExplanation: 'Examiner trap: Students frequently assume that every newly elected body gets a fresh 5-year term like Parliament/Assemblies. Reconstituted PRIs only get the residual term.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T21-02',
    topicOrder: 21,
    topicSlug: 'local-governance-panchayats-and-municipalities',
    topicTitle: 'Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)',
    topicDescription: 'Constitutional institutionalization of local self-government, 3-tier Panchayati Raj, PESA tribal self-rule, urban local bodies, and fiscal-functional devolution.',
    slug: 'pesa-act-1996-tribal-self-governance-fifth-schedule',
    title: 'PESA Act (1996) & Tribal Self-Governance in Fifth Schedule Areas',
    shortDefinition: 'The Provisions of the Panchayats (Extension to the Scheduled Areas) Act 1996, extending Part IX with critical modifications to Fifth Schedule areas across 10 states, granting Gram Sabhas sovereign authority over natural resources, minor forest produce, and land preservation.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T21-02-01',
        statement: 'The PESA Act 1996 was enacted on the recommendations of the Dilip Singh Bhuria Committee to extend Part IX provisions to Fifth Schedule areas in 10 states (including Rajasthan), vesting unprecedented statutory powers in the Gram Sabha.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PESA Act, 1996; Art 243M(4)(b)',
        excerpt: 'PESA 1996 enacted on Bhuria Committee recommendations extends Part IX to Fifth Schedule areas across 10 states.',
      },
      {
        id: 'CLM-T21-02-02',
        statement: 'Under Section 4 of PESA, the Gram Sabha possesses statutory ownership of Minor Forest Produce (MFP), mandatory prior consultation for land acquisition and mineral leasing, power to prevent land alienation of STs, and control over local dispute resolution through traditional customs.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PESA Act 1996, Section 4(d), 4(i), 4(m)',
        excerpt: 'PESA Sec 4 grants Gram Sabha ownership of MFP, mandatory land acquisition consultation, and anti-alienation powers.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why a Separate Architecture for Tribal Areas?',
        body: 'Article 243M explicitly exempted Fifth Schedule tribal areas from the standard 73rd Amendment framework. Standard Panchayati Raj structures risked imposing majoritarian administrative models that could displace traditional tribal customary laws and accelerate corporate exploitation of forest and mineral resources. PESA reversed this dynamic by making the traditional village Gram Sabha—not bureaucratic panchayat bodies—the supreme custodian of tribal self-rule and resource sovereignty.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Core Architecture & Powers of PESA Gram Sabha',
        body: 'PESA applies to Fifth Schedule areas in 10 states: Andhra Pradesh, Telangana, Chhattisgarh, Gujarat, Himachal Pradesh, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, and Rajasthan.\n\nKey Statutory Mandates under PESA:\n1. Customary Law Primacy: State legislation must conform with customary law, social and religious practices, and traditional management practices of community resources (Sec 4(a)).\n2. Natural Resource Sovereignty:\n   • Ownership of Minor Forest Produce (MFP) vests directly in the Gram Sabha.\n   • Mandatory Prior Consultation before land acquisition for development projects and resettlement (Sec 4(i)).\n   • Mandatory Recommendation before granting prospecting licenses or mining leases for minor minerals (Sec 4(k)).\n3. Social & Institutional Safeguards:\n   • Power to enforce prohibition or regulate/restrict the sale of intoxicants.\n   • Power to prevent alienation of tribal land and restore unlawfully alienated land.\n   • Power to manage village markets and control local money lending to STs.\n4. Electoral Reservation: Every Panchayat in Scheduled Areas must have ST reservation of at least 50%, and Chairpersons at all levels must be STs only.',
        order: 2,
      },
      {
        type: 'CASE_LAW',
        title: 'Judicial Affirmation: Niyamgiri Judgment (2013)',
        body: 'In Orissa Mining Corporation v. Ministry of Environment & Forests (2013) (the landmark Niyamgiri Hills case), the Supreme Court upheld the sovereign authority of the Dongria Kondh Gram Sabhas under PESA and Forest Rights Act 2006, ruling that bauxite mining on sacred tribal land could not proceed without the free and informed consent of the local Gram Sabha.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Statutory, Regulatory and Various Quasi-Judicial Bodies; Tribal Governance',
        notes: 'Highlight Bhuria Committee, Niyamgiri case, 10 states coverage, and Gram Sabha vs Panchayat council powers.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: Tribal Area Governance (TSP Areas in Southern Rajasthan)',
        notes: 'Rajasthan TSP districts (Banswara, Dungarpur, Pratapgarh, parts of Udaipur and Sirohi) governed by PESA.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Priority Sector Lending: Credit Delivery in Tribal and Remote Areas',
        notes: 'PESA restrictions on money lending and recovery of micro-finance debts in Scheduled Areas.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PESA 1996 (Bhuria Committee): Extends Part IX to Fifth Schedule areas (10 states incl RJ). Gram Sabha is supreme: owns Minor Forest Produce, mandatory consultation for land acquisition/mining, prevents land alienation. All PRI Chairs in PESA must be STs.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'PESA 1996 extends Panchayati Raj to Fifth Schedule tribal areas with custom-preserving modifications. Key features: Gram Sabha owns minor forest produce, must be consulted before land acquisition/mining leases, controls village markets/money lending, and protects against tribal land alienation. Chairperson seats at all PRI levels in Scheduled Areas are reserved 100% for Scheduled Tribes.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'PESA 1996 Statutory Framework:\n• Genesis: Dilip Singh Bhuria Committee (1995).\n• Geographical Reach: 10 Fifth Schedule States (AP, TS, CG, GJ, HP, JH, MP, MH, OD, RJ).\n• Gram Sabha Supremacy: Approves plans, selects beneficiaries, certifies fund utilization.\n• Resource Control: Minor Forest Produce ownership, minor water body management, minor mineral lease recommendations.\n• Social Control: Anti-alienation of land, alcohol regulation, money lending control.\n• Reservation Rule: Min 50% seats for STs; 100% Chairpersons at all tiers must be STs.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'Under the PESA Act 1996, which of the following powers is explicitly vested in the Gram Sabha in Scheduled Areas?',
        options: [
          'Ownership of minor forest produce and power to prevent alienation of tribal land',
          'Power to conduct criminal trials and pass sentences of imprisonment',
          'Authority to levy income tax on local corporate entities',
          'Power to amend state criminal law codes',
        ],
        correctAnswer: 'Ownership of minor forest produce and power to prevent alienation of tribal land',
        explanation: 'Under Section 4 of PESA 1996, the Gram Sabha is endowed with the ownership of minor forest produce and the power to prevent alienation of land in the Scheduled Areas and to take appropriate action to restore any unlawfully alienated land of a Scheduled Tribe.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T21-03',
    topicOrder: 21,
    topicSlug: 'local-governance-panchayats-and-municipalities',
    topicTitle: 'Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)',
    topicDescription: 'Constitutional institutionalization of local self-government, 3-tier Panchayati Raj, PESA tribal self-rule, urban local bodies, and fiscal-functional devolution.',
    slug: '74th-amendment-urban-local-bodies-and-metropolitan-planning',
    title: '74th Constitutional Amendment Act: Urban Local Bodies & Metropolitan Planning',
    shortDefinition: 'Constitutionalization of Urban Local Bodies (ULBs) under Part IX-A (Articles 243P–243ZG) and Twelfth Schedule (18 matters), establishing 3 municipal tiers, Wards Committees, District Planning Committees (Art 243ZD), and Metropolitan Planning Committees (Art 243ZE).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T21-03-01',
        statement: 'The 74th Constitutional Amendment Act 1992 inserted Part IX-A (Articles 243-P to 243-ZG) and the Twelfth Schedule (18 functional items), creating three categories of Municipalities: Nagar Panchayat (transitional area), Municipal Council (smaller urban area), and Municipal Corporation (larger urban area).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Part IX-A, Arts 243P, 243Q; Twelfth Schedule',
        excerpt: '74th Amendment inserted Part IX-A and 12th Schedule (18 subjects); 3 ULB types based on demographic thresholds.',
      },
      {
        id: 'CLM-T21-03-02',
        statement: 'Article 243-ZD mandates District Planning Committees (DPCs) where at least 4/5th members are elected from ZP and ULB representatives, while Article 243-ZE mandates Metropolitan Planning Committees (MPCs) for areas with population of 10 lakhs or more where at least 2/3rd members are elected.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Arts 243ZD, 243ZE',
        excerpt: 'Art 243ZD: DPC (min 4/5th elected from ZP & ULBs); Art 243ZE: MPC (min 2/3rd elected from ULBs & ZP).',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Part IX-A Municipal Structure & Twelfth Schedule',
        body: 'The 74th Amendment Act parallelled the rural framework for urban areas:\n\n1. Three Types of Municipalities (Art 243Q):\n   • Nagar Panchayat: For transitional areas (rural to urban transition).\n   • Municipal Council (Nagar Palika): For smaller urban areas.\n   • Municipal Corporation (Nagar Nigam): For larger urban metropolitan cities.\n   • Industrial Townships: Exemption where municipal services are provided by statutory industrial authorities (e.g. Jamshedpur).\n\n2. Wards Committees (Art 243S):\n   • Mandatory constitution of Wards Committees within the territorial area of a Municipality having a population of 3 lakhs or more.\n\n3. Twelfth Schedule (18 Functional Subjects):\n   • Urban planning including town planning, regulation of land use, roads and bridges, water supply, public health, fire services, urban forestry, safeguarding weaker sections, slum improvement, and solid waste management.',
        order: 1,
      },
      {
        type: 'MECHANISM',
        title: 'Integrated Spatial Planning: DPC (Art 243ZD) vs MPC (Art 243ZE)',
        body: 'To prevent rural-urban planning fragmentation, Part IX-A created constitutional spatial planning bodies:\n\n• District Planning Committee (DPC - Art 243ZD):\n  - Consolidates plans prepared by Panchayats and Municipalities across the district into a draft development plan.\n  - Composition: At least 4/5th (80%) of members must be elected by and from amongst the elected members of the district Zilla Parishad and Municipalities in proportion to their rural-urban population ratio.\n\n• Metropolitan Planning Committee (MPC - Art 243ZE):\n  - Formed for Metropolitan Areas having a population of 10 lakhs (1 million) or more.\n  - Composition: At least 2/3rd (66.67%) of members must be elected by and from amongst the elected members of Municipalities and Chairpersons of Panchayats in the metropolitan area.',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Urban Governance, Metropolitan Planning & Municipal Finance',
        notes: 'Focus on Municipal Bonds, property tax reforms, DPC vs MPC member composition formulas, and smart city governance frictions.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: Urban Local Self-Government & Rajasthan Municipalities Act 2009',
        notes: 'Rajasthan Municipalities Act 2009, Mayor / Chairperson election dynamics, and municipal ward committees.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Urban Infrastructure Financing: Municipal Bonds and Urban Local Bodies',
        notes: 'Credit rating of ULBs, Municipal Bonds issuance under SEBI framework, and AMRUT/Smart Cities financing.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '74th CAA 1992: Part IX-A (Arts 243P-243ZG) & 12th Schedule (18 subjects). 3 tiers (Nagar Panchayat, Municipal Council, Municipal Corp). Wards Committees for pop >= 3L. DPC (Art 243ZD, 4/5th elected) & MPC (Art 243ZE, 2/3rd elected for pop >= 10L).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The 74th Amendment constitutionalized Urban Local Bodies (ULBs) with an 18-subject Twelfth Schedule. Establishes Nagar Panchayats, Municipal Councils, and Municipal Corporations. Wards Committees mandatory for cities with >= 3 lakh population. Spatial planning: DPCs (Art 243ZD) require 4/5th members elected from ZP/ULBs; MPCs (Art 243ZE) require 2/3rd elected members for metropolitan areas with >= 10 lakh population.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Part IX-A (Municipalities) Complete Architecture:\n• Art 243Q: 3 Types of Municipalities.\n• Art 243S: Wards Committees (Mandatory for pop >= 3 Lakhs).\n• Art 243T: Reservations (SCs/STs proportional; Women min 1/3rd).\n• Art 243U: 5-year duration (6-month re-election rule; residual term rule).\n• Art 243ZD: District Planning Committee (4/5th elected from ZP & Municipalities).\n• Art 243ZE: Metropolitan Planning Committee (2/3rd elected from Municipalities & ZP Chairs for metro areas >= 10 Lakhs).\n• Art 243ZG: Bar on court interference in electoral/delimitation matters.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What proportion of members of a District Planning Committee (DPC) under Article 243-ZD must be elected by and from amongst the elected members of the district Zilla Parishad and Municipalities?',
        options: [
          'Not less than four-fifths (4/5th)',
          'Not less than two-thirds (2/3rd)',
          'Not less than three-fourths (3/4th)',
          'Exactly one-half (1/2)',
        ],
        correctAnswer: 'Not less than four-fifths (4/5th)',
        explanation: 'Under Article 243-ZD(2)(b), not less than four-fifths (80%) of the total number of members of a District Planning Committee shall be elected by, and from amongst, the elected members of the Panchayat at the district level and of the Municipalities in the district.',
        trapExplanation: 'Examiner trap: Confusing the 4/5th ratio for DPCs (Art 243ZD) with the 2/3rd ratio for Metropolitan Planning Committees (Art 243ZE).',
        difficulty: 'HARD',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T21-04',
    topicOrder: 21,
    topicSlug: 'local-governance-panchayats-and-municipalities',
    topicTitle: 'Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)',
    topicDescription: 'Constitutional institutionalization of local self-government, 3-tier Panchayati Raj, PESA tribal self-rule, urban local bodies, and fiscal-functional devolution.',
    slug: 'local-governance-rajasthan-nagaur-inception-acts-and-devolution',
    title: 'Local Governance in Rajasthan: Nagaur Inception, 5-Tier Devolution & Rajasthan Acts',
    shortDefinition: 'The pioneering historic evolution of Panchayati Raj inaugurated at Nagaur, Rajasthan on October 2, 1959, the major committee trajectories, and modern Rajasthan-specific local governance features (Rajasthan Panchayati Raj Act 1994, 50% women quota, Ward Sabha).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T21-04-01',
        statement: 'Rajasthan was the first state in independent India to establish Panchayati Raj, inaugurated by Prime Minister Jawaharlal Nehru on 2 October 1959 at Nagaur (followed by Andhra Pradesh on 1 November 1959), based on the Balwant Rai Mehta Committee recommendations.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan State Archives; Balwant Rai Mehta Report 1957',
        excerpt: 'Rajasthan was first state to launch PRIs at Nagaur on 2 Oct 1959 under Balwant Rai Mehta model.',
      },
      {
        id: 'CLM-T21-04-02',
        statement: 'Under the Rajasthan Panchayati Raj Act 1994 (amended in 2008), Rajasthan provides 50% reservation for women in Panchayati Raj Institutions and Urban Local Bodies, and instituted a unique 4th sub-tier called the Ward Sabha below the Gram Sabha.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Panchayati Raj Act 1994, Sec 15, Sec 3; 2008 Amendment',
        excerpt: 'Rajasthan PR Act 1994 mandates 50% women reservation and institutionalizes Ward Sabha.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Rajasthan’s Historical Milestone & Committee Evolution',
        body: 'The institutional evolution of local government in India is anchored by key national committees:\n\n1. Balwant Rai Mehta Committee (1957):\n   • Recommended a 3-tier Panchayati Raj System (Gram, Block, District) with democratic decentralization.\n   • Direct outcome: Rajasthan inaugurated the first 3-tier PRI at Nagaur on October 2, 1959.\n\n2. Ashok Mehta Committee (1977):\n   • Recommended a 2-tier system (Mandal Panchayat + Zilla Parishad), compulsory taxation powers, and political party participation.\n\n3. G.V.K. Rao Committee (1985):\n   • Highlighted bureaucratization ("Grass without roots"), recommended making Zilla Parishad the apex planning body and creating the post of District Development Commissioner.\n\n4. L.M. Singhvi Committee (1986):\n   • Recommended constitutional recognition for Panchayati Raj, judicial tribunals for election disputes, and financial viability for village panchayats.',
        order: 1,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Rajasthan-Specific Institutional Architecture',
        body: 'Key Rajasthan-specific legal and structural features:\n\n• 50% Women Reservation: Rajasthan increased women reservation in PRIs and ULBs from 33% to 50% via state statutory amendment in 2008.\n• Ward Sabha: Rajasthan introduced Ward Sabhas (all adult voters residing within a ward of a Gram Panchayat) below the Gram Sabha for micro-level quorum and planning.\n• Education Criteria Debate: Rajasthan introduced minimum educational qualifications for PRI candidates in 2015, which was subsequently repealed in 2019 to preserve universal democratic candidacy.\n• Gram Nyayalaya Act 2008: Rajasthan established the first Gram Nyayalaya at Bassi (Jaipur) in 2010 to deliver affordable grassroots summary civil and criminal justice.',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: Panchayati Raj & Urban Governance in Rajasthan',
        notes: 'High yield for RAS Prelims and Mains Paper III: Nagaur Oct 2 1959, 50% women reservation, Ward Sabha, Bassi Gram Nyayalaya 2010.',
        frequentTraps: 'Confusing 2nd state (Andhra Pradesh, Nov 1959) with Rajasthan; confusing Bassi (Jaipur) Gram Nyayalaya date.',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'GS Paper II: Panchayati Raj Evolution Committees (Balwant Rai, Ashok Mehta, Singhvi)',
        notes: 'Comparative models: 3-tier (Balwant Rai) vs 2-tier (Ashok Mehta) vs Constitutional status (Singhvi).',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Financial Inclusion and Grassroots Institutions',
        notes: 'Gram Panchayats role in monitoring Business Correspondents (BCs) and rural digital literacy.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan PRI: 1st state to launch PRIs (Nagaur, 2 Oct 1959, Nehru). Balwant Rai (3-tier 1957) → Ashok Mehta (2-tier 1977) → Singhvi (Constitutional status 1986). Rajasthan features: 50% women quota, Ward Sabha, 1st Gram Nyayalaya at Bassi (Jaipur, 2010).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthan pioneered Indian local governance on Oct 2, 1959 at Nagaur following the Balwant Rai Mehta report. Subsequent landmark committees (Ashok Mehta 1977, GVK Rao 1985, LM Singhvi 1986) shaped the 73rd CAA 1992. Rajasthan-specific laws include the Rajasthan Panchayati Raj Act 1994, 50% reservation for women, Ward Sabhas, and India\'s first Gram Nyayalaya at Bassi (Jaipur 2010).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Evolutionary Trajectory & Rajasthan PRI Setup:\n1. Committee Milestones:\n   • 1957: Balwant Rai Mehta (3-tier democratic decentralization).\n   • 1977: Ashok Mehta (2-tier Mandal Panchayat + Zilla Parishad).\n   • 1985: G.V.K. Rao (Grass without roots critique, DDC post).\n   • 1986: L.M. Singhvi (Constitutional recognition demand).\n2. Rajasthan Landmarks:\n   • Oct 2, 1959: Nagaur PRI inauguration by PM Nehru.\n   • Nov 1, 1959: Andhra Pradesh becomes 2nd state.\n   • 1994: Rajasthan Panchayati Raj Act enacted (23 April 1994).\n   • 2008: 50% women reservation enacted.\n   • 2010: First Gram Nyayalaya at Bassi, Jaipur.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'Which committee explicitly recommended that Panchayati Raj Institutions should be constitutionally recognized, protected and preserved by the inclusion of a new chapter in the Constitution?',
        options: [
          'L.M. Singhvi Committee (1986)',
          'Balwant Rai Mehta Committee (1957)',
          'Ashok Mehta Committee (1977)',
          'G.V.K. Rao Committee (1985)',
        ],
        correctAnswer: 'L.M. Singhvi Committee (1986)',
        explanation: 'The L.M. Singhvi Committee appointed in 1986 by the Rajiv Gandhi government recommended that local self-government should be constitutionally recognized, protected, and preserved through a dedicated constitutional chapter.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 22: CONSTITUTIONAL INSTITUTIONS (ECI & CAG)
  // =========================================================================
  {
    id: 'CON-T22-01',
    topicOrder: 22,
    topicSlug: 'constitutional-bodies-eci-and-cag',
    topicTitle: 'Constitutional Institutions: Election Commission of India & Comptroller and Auditor General',
    topicDescription: 'Constitutional design, independence guarantees, appointment mechanisms, statutory powers, and auditing limits of ECI (Art 324) and CAG (Arts 148–151).',
    slug: 'election-commission-of-india-article-324-and-2023-appointment-act',
    title: 'Election Commission of India (Article 324): Composition, Independence & CEC/EC Appointment Act 2023',
    shortDefinition: 'The constitutional framework of the Election Commission under Article 324, its multi-member evolution, removal protections, plenary powers under Mohinder Singh Gill (1978), the Anoop Baranwal (2023) bench, and the CEC & Other ECs (Appointment) Act 2023.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T22-01-01',
        statement: 'Under Article 324(2), the Election Commission consists of the Chief Election Commissioner (CEC) and such number of other Election Commissioners as the President may fix (1 CEC + 2 ECs since October 1993), all having equal decision-making powers and salary equivalent to a Supreme Court Judge.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Art 324(2); T.N. Seshan v. UOI (1995)',
        excerpt: 'Art 324 multi-member commission (1 CEC + 2 ECs); all 3 commissioners have equal voting power; majority rule prevails.',
      },
      {
        id: 'CLM-T22-01-02',
        statement: 'Under the Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act 2023 enacted following Anoop Baranwal (2023), the CEC and ECs are appointed by the President on the recommendation of a 3-member Selection Committee comprising the Prime Minister (Chairperson), a Union Cabinet Minister, and the Leader of Opposition or Leader of the largest opposition party in Lok Sabha.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'CEC and Other ECs Act 2023, Section 7; Anoop Baranwal v. UOI (2023)',
        excerpt: '2023 Act creates 3-member selection panel (PM, Union Cabinet Minister, LoP/Leader of largest opposition party).',
      },
      {
        id: 'CLM-T22-01-03',
        statement: 'Under Article 324(5), the CEC cannot be removed except in like manner and on like grounds as a Judge of the Supreme Court (Parliamentary address requiring Special Majority), whereas other Election Commissioners can be removed by the President on the recommendation of the CEC.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Art 324(5)',
        excerpt: 'CEC removal equivalence with SC Judge; other ECs removable by President only on CEC recommendation.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Constitutional Independence Asymmetry & Multi-Member Nature',
        body: 'Article 324 establishes a permanent, autonomous, all-India constitutional body responsible for conducting elections to Parliament, State Legislatures, and the offices of President and Vice-President (municipal and panchayat elections are conducted by State Election Commissions under Arts 243K/243ZA, NOT the ECI).\n\nKey Institutional Pillars:\n1. Multi-Member Dynamics: Initially a single-member body until 1989, and permanently multi-member since October 1, 1993 (1 CEC + 2 ECs). In T.N. Seshan v. Union of India (1995), the Supreme Court affirmed that the CEC is not superior to other ECs; all three have equal rank, salary (equivalent to an SC Judge), and equal voting power. Decisions are taken by consensus or majority.\n2. Removal Asymmetry: While the CEC enjoys Article 324(5) security of tenure (removable only through impeachment like an SC judge on proven misbehavior or incapacity), the other ECs do not have identical direct constitutional protection and can be removed on the recommendation of the CEC.',
        order: 1,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Appointment Paradigm Shift: Anoop Baranwal (2023) to 2023 Act',
        body: 'For 73 years, the Executive appointed the CEC and ECs unilaterally under Article 324(2) ("subject to any law made by Parliament", which was never enacted):\n\n• Anoop Baranwal v. Union of India (March 2023):\n  - A 5-judge Constitution Bench ruled that executive exclusivity in election commissioner appointments undermines free and fair elections (part of Basic Structure).\n  - The Court directed an interim collegium: Prime Minister + Leader of Opposition (or largest opposition party leader) + Chief Justice of India (CJI).\n\n• Parliamentary Enactment (December 2023):\n  - Parliament enacted the Chief Election Commissioner and other Election Commissioners Act, 2023.\n  - The statutory Selection Committee consists of:\n    1. Prime Minister (Chairperson)\n    2. A Union Cabinet Minister nominated by the PM\n    3. Leader of Opposition (or leader of largest opposition party) in Lok Sabha.\n  - A Search Committee headed by the Cabinet Secretary prepares a panel of 5 candidates.',
        order: 2,
      },
      {
        type: 'CASE_LAW',
        title: 'Plenary Powers: Mohinder Singh Gill (1978)',
        body: 'In Mohinder Singh Gill v. Chief Election Commissioner (1978), the Supreme Court ruled that Article 324 is a reservoir of plenary executive power. Where enacted statutory law is silent, the ECI possesses inherent constitutional powers to pass any administrative order (including cancelling polls or ordering repolls) to ensure free and fair elections, subject only to the Rule of Law and natural justice.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Appointment to various Constitutional Posts, Powers, Functions and Responsibilities of various Constitutional Bodies',
        notes: 'Crucial topic: Compare Anoop Baranwal (2023) collegium vs 2023 Act panel, Article 324(5) removal asymmetry, and MCC statutory backing debate.',
        frequentTraps: 'Believing ECI conducts local panchayat elections; confusing EC removal procedure with CEC removal.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Indian Constitution & Apex Bodies: Election Commission of India',
        notes: 'Multi-member composition, 6-year or 65-year tenure, Model Code of Conduct application.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Public Administration and Statutory Compliance',
        notes: 'Compliance with election commission expenditure rules during election cycles.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'ECI (Art 324): 1 CEC + 2 ECs (equal power, majority rule, SC judge salary). CEC removed ONLY as SC Judge; ECs removed on CEC advice. 2023 Appointment Act Selection Committee: PM + Union Minister + LoP (CJI omitted). Conducts Parliament, Assembly, President/VP elections (NOT Panchayats).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Article 324 establishes the ECI for Union and State legislative elections. Multi-member since 1993 (1 CEC + 2 ECs with equal powers and 6yr/65yr tenure). CEC has SC judge removal protection (Art 324(5)); ECs removable on CEC recommendation. 2023 Act established a 3-member panel (PM, Union Cabinet Minister, LoP) for appointments. Plenary powers affirmed in Mohinder Singh Gill (1978).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'ECI Constitutional & Statutory Architecture:\n• Mandate: Conducts elections to Lok Sabha, Rajya Sabha, Vidhan Sabha, Vidhan Parishad, President, and Vice-President.\n• Excluded: Panchayats and Municipalities (managed by State Election Commissions under Arts 243K/243ZA).\n• Composition: 1 CEC + 2 ECs (T.N. Seshan 1995: equal status).\n• Appointment Panel (2023 Act): PM (Chair) + Union Cabinet Minister + Leader of Opposition in Lok Sabha.\n• Tenure: 6 years or 65 years of age.\n• Removal: CEC by Parliamentary address (Art 124(4)); ECs by President on CEC advice.\n• Model Code of Conduct: Non-statutory operational framework enforceable via Art 324 plenary powers.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023, who are the members of the Selection Committee for recommending appointments of CEC and ECs?',
        options: [
          'Prime Minister, a Union Cabinet Minister nominated by the PM, and the Leader of Opposition / single largest opposition party in Lok Sabha',
          'Prime Minister, Chief Justice of India, and the Leader of Opposition in Lok Sabha',
          'President of India, Prime Minister, and Chief Justice of India',
          'Prime Minister, Speaker of Lok Sabha, and Chairman of Rajya Sabha',
        ],
        correctAnswer: 'Prime Minister, a Union Cabinet Minister nominated by the PM, and the Leader of Opposition / single largest opposition party in Lok Sabha',
        explanation: 'Under Section 7 of the CEC and other ECs Act 2023, the Selection Committee consists of the Prime Minister as Chairperson, a Union Cabinet Minister nominated by the PM, and the Leader of the Opposition or leader of the largest opposition party in Lok Sabha.',
        trapExplanation: 'Examiner trap: Students frequently pick the Chief Justice of India based on the temporary March 2023 Supreme Court ruling (Anoop Baranwal), unaware that the December 2023 Parliamentary Act replaced the CJI with a Union Cabinet Minister.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-T22-02',
    topicOrder: 22,
    topicSlug: 'constitutional-bodies-eci-and-cag',
    topicTitle: 'Constitutional Institutions: Election Commission of India & Comptroller and Auditor General',
    topicDescription: 'Constitutional design, independence guarantees, appointment mechanisms, statutory powers, and auditing limits of ECI (Art 324) and CAG (Arts 148–151).',
    slug: 'electoral-reforms-and-representation-of-the-people-acts-1950-1951',
    title: 'Electoral Reforms & Representation of the People Acts (1950 & 1951)',
    shortDefinition: 'The statutory dual-statute architecture governing Indian democracy—RPA 1950 (seats, delimitation, voter rolls) vs RPA 1951 (conduct of elections, qualifications, disqualifications under Section 8, corrupt practices, anti-defection, and electoral transparency).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T22-02-01',
        statement: 'Parliament enacted two separate statutes under Article 327: the Representation of the People Act 1950 (providing for allocation of seats, delimitation of constituencies, and preparation of electoral rolls) and the Representation of the People Act 1951 (providing for the actual conduct of elections, qualifications, disqualifications, corrupt practices, and election petitions).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RPA 1950; RPA 1951; Constitution of India Art 327',
        excerpt: 'RPA 1950 governs voter rolls and delimitation; RPA 1951 governs actual election conduct, disqualifications, and corrupt practices.',
      },
      {
        id: 'CLM-T22-02-02',
        statement: 'Under Section 8(3) of the RPA 1951 (with Section 8(4) struck down in Lily Thomas 2013), a legislator convicted of any offense and sentenced to imprisonment for not less than 2 years stands immediately disqualified from the date of conviction and continues to be disqualified for 6 years after release.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RPA 1951, Section 8(3); Lily Thomas v. UOI (2013)',
        excerpt: 'Sec 8(3) disqualification triggers immediately upon 2+ yr sentence; Lily Thomas struck down 3-month protection window.',
      },
    ],
    contentBlocks: [
      {
        type: 'COMPARISON',
        title: 'RPA 1950 vs RPA 1951: The Statutory Division of Labour',
        body: 'Candidates must never confuse the two distinct electoral statutes:\n\n1. Representation of the People Act, 1950 (Pre-Election Machinery):\n   • Allocation of seats in the Lok Sabha and State Legislative Assemblies/Councils.\n   • Delimitation of constituencies (based on Delimitation Commission orders).\n   • Qualifications of voters (citizenship, 18+ years under 61st CAA 1988, ordinary residence).\n   • Preparation and revision of electoral rolls (Chief Electoral Officer, Electoral Registration Officers).\n\n2. Representation of the People Act, 1951 (Election Conduct & Forensics):\n   • Qualifications and disqualifications for membership of Parliament and State Legislatures.\n   • Notification of elections, nominations, scrutiny, and voting procedures.\n   • Section 8 criminal disqualifications.\n   • Section 29A registration of political parties with the ECI.\n   • Corrupt practices (Section 123: bribery, undue influence, appeal on grounds of religion/caste).\n   • Election petitions (original jurisdiction in High Courts under Art 329(b)).',
        order: 1,
      },
      {
        type: 'CASE_LAW',
        title: 'Landmark Electoral Transparency Jurisprudence',
        body: '1. Lily Thomas v. Union of India (2013): Struck down Section 8(4) of RPA 1951 which had allowed convicted MPs/MLAs to retain their seats by filing an appeal within 3 months. Disqualification is now instantaneous.\n2. People’s Union for Civil Liberties (PUCL) v. UOI (2013): Directed ECI to introduce NOTA (None of the Above) on EVMs.\n3. Association for Democratic Reforms (ADR) v. UOI (2024): A unanimous 5-judge Constitution Bench struck down the Electoral Bond Scheme (and amendments to the Finance Act 2017, Income Tax Act, and RPA Sec 29C) as unconstitutional, holding that voters have a fundamental Right to Information under Article 19(1)(a) regarding political funding.',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Salient Features of the Representation of the People’s Act; Electoral Reforms',
        notes: 'High yield for Mains: Electoral Bonds verdict (ADR 2024), criminalization of politics (Lily Thomas, Ramesh Dalal), and internal party democracy.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Indian Political System: Representation of the People Acts & Electoral Reforms',
        notes: 'Distinction between RPA 1950 and 1951, election petitions before High Court, VVPAT verification.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Banking Regulation & Political Party Accounts Transparency',
        notes: 'Impact of Electoral Bonds judgment on banking disclosures and compliance with political party accounts.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RPA 1950: Seats, delimitation, voter rolls, 18+ voting age. RPA 1951: Conduct of polls, Sec 8 disqualifications (2+ yr prison = instant disqualification + 6 yrs after release per Lily Thomas 2013), Sec 29A party registration, Sec 123 corrupt practices. ADR 2024: Electoral bonds unconstitutional (Art 19(1)(a)).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'RPA 1950 sets up the pre-election framework (seats allocation, electoral rolls, voter qualifications). RPA 1951 regulates active election conduct, party registration (Sec 29A), corrupt practices (Sec 123), and criminal disqualification (Sec 8: 2-year imprisonment = immediate disqualification under Lily Thomas 2013). Supreme Court landmark ADR (2024) struck down Electoral Bonds to uphold voter transparency under Art 19(1)(a).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Dual Electoral Legislation Architecture:\n• RPA 1950 (Preparation & Rolls):\n  - Part II: Allocation of seats & delimitation.\n  - Part III: Electoral rolls for Assembly & Parliamentary constituencies.\n  - Part IV: Officers (CEO, DEO, ERO).\n• RPA 1951 (Conduct, Penalties & Petitions):\n  - Chapter III: Disqualifications (Sec 8 criminal convictions, Sec 9 corrupt dismissals, Sec 10 government contracts).\n  - Part IVA: Political Party Registration (Sec 29A).\n  - Part VII: Corrupt Practices & Electoral Offences.\n  - Part VI: Election Petitions before High Court (appeal to Supreme Court).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following matters is governed by the Representation of the People Act, 1950 (and NOT by the Representation of the People Act, 1951)?',
        options: [
          'Preparation and revision of electoral rolls for Parliamentary and Assembly constituencies',
          'Disqualification of legislators on conviction for criminal offences',
          'Registration of political parties with the Election Commission of India',
          'Trial of election petitions in the High Court',
        ],
        correctAnswer: 'Preparation and revision of electoral rolls for Parliamentary and Assembly constituencies',
        explanation: 'Preparation and revision of electoral rolls, allocation of seats, and delimitation are governed by the Representation of the People Act, 1950. Disqualifications (Sec 8), party registration (Sec 29A), and election petitions are governed by RPA 1951.',
        trapExplanation: 'Examiner trap: Confusing voter registration (RPA 1950) with candidate disqualification or party registration (RPA 1951).',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-T22-03',
    topicOrder: 22,
    topicSlug: 'constitutional-bodies-eci-and-cag',
    topicTitle: 'Constitutional Institutions: Election Commission of India & Comptroller and Auditor General',
    topicDescription: 'Constitutional design, independence guarantees, appointment mechanisms, statutory powers, and auditing limits of ECI (Art 324) and CAG (Arts 148–151).',
    slug: 'comptroller-and-auditor-general-of-india-articles-148-151',
    title: 'Comptroller and Auditor-General of India (Articles 148–151): Independence & Duties',
    shortDefinition: 'The constitutional office of the CAG under Articles 148–151 as the supreme guardian of the public purse, with institutional independence protections, duties under the CAG DPC Act 1971, separation of accounting from audit (1976), and partnership with the Public Accounts Committee.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T22-03-01',
        statement: 'Under Article 148, the CAG is appointed by the President by warrant under his hand and seal, can only be removed in like manner and on like grounds as a Supreme Court Judge, is ineligible for any further office under the Government of India or any State, and has administrative expenses charged on the Consolidated Fund of India.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Art 148',
        excerpt: 'Art 148 CAG appointment by warrant; removed as SC judge; ineligible for future government post; salary charged on CFI.',
      },
      {
        id: 'CLM-T22-03-02',
        statement: 'Under the CAG’s (Duties, Powers and Conditions of Service) Act 1971 as amended in 1976, accounting was separated from auditing at the Union level (transferring accounting to the Controller General of Accounts - CGA under the Finance Ministry), while the CAG continues to audit all expenditures from the Consolidated Funds of India, States, and UTs.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'CAG DPC Act 1971; 1976 Amendment; Art 149',
        excerpt: '1976 reform separated Union accounting from audit; CAG audits Consolidated Funds of Union, States, and UTs.',
      },
      {
        id: 'CLM-T22-03-03',
        statement: 'Under Article 151, the CAG submits three annual audit reports (Appropriation Accounts, Finance Accounts, and Public Undertakings) relating to Union accounts to the President (who causes them to be laid before Parliament), where they are examined by the Public Accounts Committee (PAC).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Art 151',
        excerpt: 'Art 151 requires CAG to submit 3 annual audit reports to President/Governor; examined by PAC.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Guardian of the Public Purse: Ambedkar’s Classification',
        body: 'Dr. B.R. Ambedkar declared in the Constituent Assembly that the CAG is "probably the most important officer in the Constitution of India." If the executive is responsible to the legislature for every rupee spent from the Consolidated Fund, Parliament needs an incorruptible, technically skilled, and fearless constitutional auditor to verify whether public money was spent legally, economically, and in accordance with parliamentary sanctions.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Constitutional Independence Safeguards (Article 148)',
        body: 'To ensure complete fearless scrutiny of executive expenditure, Article 148 guarantees:\n1. Removal Protection: Removable ONLY by the President following a Parliamentary address passed by Special Majority on grounds of proven misbehavior or incapacity (identical to an SC Judge).\n2. Post-Retirement Disqualification: Ineligible for further office under the Government of India or the Government of any State after ceasing to hold office (prevents executive inducement).\n3. Non-Votable Expenses: Administrative expenses, salaries, allowances, and pensions of the CAG and staff are charged upon the Consolidated Fund of India (non-votable by Parliament).\n4. Service Conditions: Salary and rights in respect of leave of absence, pension, or age of retirement cannot be varied to his disadvantage after appointment.',
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Audit vs Accounting: The 1976 Separation Reform',
        body: 'Candidates must distinguish between the CAG and the CGA:\n\n• Prior to 1976: CAG was responsible for both compiling accounts and auditing expenditures for both the Union and the States.\n• 1976 Reform: Accounting was separated from auditing at the Union level. Departmentalisation of Union accounts was transferred to the Controller General of Accounts (CGA) in the Department of Expenditure, Ministry of Finance (a non-constitutional civil service post).\n• At the State Level: The CAG continues to perform BOTH accounting and auditing functions for state governments (due to cost constraints).\n• Indian CAG vs British CAG: In the UK, the CAG is an actual "Comptroller" who controls the issue of money from the exchequer (no money can be drawn without CAG sanction). In India, the CAG has no control over the issue of money; the CAG audits accounts post-facto after the expenditure has already occurred ("Auditor General only").',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Constitutional Bodies: Comptroller and Auditor General of India',
        notes: 'Critical distinctions: CAG vs CGA, British vs Indian CAG, 3 audit reports under Art 151, PAC-CAG relationship ("friend, philosopher, and guide").',
        frequentTraps: 'Confusing CAG with CGA; believing CAG can stop executive money withdrawals before expenditure.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Indian Polity & Financial Administration: CAG & Public Accounts Committee',
        notes: 'Article 148-151 provisions, 6-year or 65-year tenure, State Accountant General role.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Accounting and Financial Management: Government Audit & Commercial Audit',
        notes: 'Audit of Public Sector Banks, statutory corporations, government companies under Companies Act 2013 (Sec 139/143), and supplementary audit powers.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'CAG (Arts 148-151): Appointed by President (warrant & seal), removed like SC judge, ineligible for future govt post, salary charged on CFI. Separated from Union accounts in 1976 (now with CGA), but handles both audit & accounts for States. Submits 3 reports under Art 151 to PAC.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The CAG (Arts 148-151) is the constitutional auditor of India. Appointed for 6 years or 65 years. Enjoying Supreme Court judge removal protection, post-retirement job ban, and charged expenses. Since 1976, Union accounts are managed by the CGA (Finance Ministry), while CAG audits. Submits 3 annual reports (Appropriation, Finance, PSUs) under Art 151, examined by Parliament\'s Public Accounts Committee (PAC). Note: Indian CAG audits post-facto, unlike British CAG who controls exchequer issues.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Constitutional Architecture of the CAG:\n• Art 148: Establishment, appointment, oath, removal (SC judge parity), ineligibility for future office, charged budget.\n• Art 149: Duties and powers (governed by CAG DPC Act 1971).\n• Art 150: Form of accounts of Union and States (prescribed by President on CAG advice).\n• Art 151: Audit reports (Union reports to President → Parliament; State reports to Governor → State Legislature).\n• 3 Annual Audit Reports:\n  1. Audit Report on Appropriation Accounts (compares expenditure with budget grant).\n  2. Audit Report on Finance Accounts (annual receipts & disbursements).\n  3. Audit Report on Commercial / Public Undertakings.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'Consider the following statements regarding the Comptroller and Auditor General of India (CAG):\n1. The CAG is ineligible for further office either under the Government of India or the Government of any State after ceasing to hold office.\n2. The administrative expenses of the office of the CAG are subject to the vote of Parliament.\n3. The CAG compiles and maintains the accounts of both the Union and the State Governments.\nWhich of the statements given above is/are correct?',
        options: [
          '1 only',
          '1 and 3 only',
          '2 and 3 only',
          '1, 2 and 3',
        ],
        correctAnswer: '1 only',
        explanation: 'Statement 1 is correct (Art 148(4)). Statement 2 is incorrect because CAG expenses are charged upon the Consolidated Fund of India and are non-votable (Art 148(6)). Statement 3 is incorrect because since 1976, the CAG does NOT compile Union accounts (handled by CGA), although CAG still compiles State accounts.',
        trapExplanation: 'Examiner trap: Believing CAG still compiles Union accounts (separated in 1976) and confusing charged expenditure with votable expenditure.',
        difficulty: 'HARD',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T22-04',
    topicOrder: 22,
    topicSlug: 'constitutional-bodies-eci-and-cag',
    topicTitle: 'Constitutional Institutions: Election Commission of India & Comptroller and Auditor General',
    topicDescription: 'Constitutional design, independence guarantees, appointment mechanisms, statutory powers, and auditing limits of ECI (Art 324) and CAG (Arts 148–151).',
    slug: 'public-audit-spectrum-regulatory-propriety-performance-audit',
    title: 'Public Audit Architecture & Financial Oversight: Regulatory, Propriety & Performance Audit',
    shortDefinition: 'The three-dimensional methodology of public audit (Regulatory, Propriety, and Performance/Efficiency audit), institutional limitations (post-mortem nature, secret service limits), and expanded jurisdiction over PPPs and private discoms.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T22-04-01',
        statement: 'The CAG conducts three progressive levels of public audit: Regulatory/Compliance Audit (verifying statutory legality and sanctions), Propriety Audit (evaluating expenditure against wisdom, economy, and ethics), and Performance/Value-for-Money Audit (evaluating efficiency, economy, and effectiveness).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'CAG Regulations on Audit and Accounts 2020; DPC Act 1971',
        excerpt: 'Public audit encompasses compliance, propriety, and 3E performance audit (Economy, Efficiency, Effectiveness).',
      },
      {
        id: 'CLM-T22-04-02',
        statement: 'In Association of Unified Telecom Service Providers v. Union of India (2014), the Supreme Court ruled that the CAG has the statutory authority under Section 16 of the DPC Act to audit the revenue accounts of private telecom companies sharing revenue with the Consolidated Fund of India.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Association of Unified Telecom Service Providers v. UOI (2014) 3 SCC 84',
        excerpt: 'Supreme Court upheld CAG audit of private entities where natural resources and revenue share are involved.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Three Tiers of Public Financial Audit',
        body: '1. Regulatory & Compliance Audit (Legal Audit):\n   • Verifies whether money was spent according to the Appropriation Act.\n   • Checks that expenditure was authorized by a competent authority and conforms to accounting rules.\n   • Mandatory statutory duty under Article 149.\n\n2. Propriety Audit (Wisdom & Ethics Audit):\n   • Goes beyond literal legal conformity to examine whether expenditure violated canons of financial propriety.\n   • Verifies that public money was not spent for personal benefit, that expenditure was not more than the occasion demanded, and that public funds were managed with the diligence of a person of ordinary prudence.\n\n3. Performance & Efficiency Audit (Value-for-Money):\n   • Evaluates whether government schemes achieved their intended outcomes with the "3Es":\n     - Economy: Minimizing resource costs without compromising quality.\n     - Efficiency: Maximizing output from given inputs.\n     - Effectiveness: Achieving intended socioeconomic objectives.',
        order: 1,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Institutional Limits & Jurisdictional Frontiers',
        body: '1. Limits of the CAG:\n   • Post-Mortem Audit: Audit happens after money has been spent; CAG cannot halt corrupt expenditure in real-time.\n   • Secret Service Expenditure: CAG cannot demand detailed vouchers for secret service intelligence expenditures, accepting an administrative certificate from the competent authority.\n   • Autonomous Bodies: Audit of certain statutory corporations (e.g. RBI, SBI, LIC, FCI) is done exclusively by private commercial chartered accountants, not the CAG.\n\n2. Expanding Frontiers (Private Audit & PPPs):\n   • In Association of Unified Telecom Service Providers (2014), the Supreme Court affirmed that whenever private entities exploit public natural resources (e.g. telecom spectrum) on a revenue-sharing model with the Consolidated Fund, the CAG is constitutionally and statutorily empowered to audit their books.',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Accountability and Ethical Governance; Financial Control by CAG',
        notes: 'Canons of financial propriety, performance audit methodology, and auditing PPP infrastructure projects.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Bank Audit, Internal Controls and Statutory Compliance',
        notes: 'Commercial audit under Companies Act Sec 139/143, role of Statutory Central Auditors in PSBs, and CAG supplementary audits.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Public Administration & Financial Management: Social Audit & Performance Audit',
        notes: 'Social audit mechanisms under MGNREGA in Rajasthan compared with CAG performance audit.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Audit Spectrum: Compliance (legal legality) → Propriety (wisdom/ethics/prudence) → Performance (3Es: Economy, Efficiency, Effectiveness). CAG limits: Post-mortem, secret service receipts excepted, RBI/SBI/LIC audited by private CAs. Landmark: Telecom judgment (2014) allows CAG audit of private PPP/revenue-share books.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'CAG audit encompasses three levels: Regulatory (compliance with law/grants), Propriety (canons of financial prudence), and Performance (evaluating Economy, Efficiency, and Effectiveness). Key limitations: CAG performs post-mortem audit and cannot demand itemized vouchers for secret service funds. Financial institutions like RBI/SBI/LIC are audited by private CAs. In 2014, the Supreme Court ruled that CAG can audit private entities sharing revenue with the Consolidated Fund.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Public Audit Framework:\n• 1. Legal/Compliance Audit: Verifies statutory appropriation and legal competence.\n• 2. Propriety Audit: Enforces Canons of Financial Propriety (no self-interest, vigilance of an ordinary prudent person).\n• 3. Performance Audit: Evaluates 3Es (Economy, Efficiency, Effectiveness).\n• 4. Secret Service Limits: Limited to checking spending authority certificates.\n• 5. Commercial Bodies Audit: Discretionary/Supplementary audit for Government Companies under Companies Act 2013.\n• 6. PPP Extension: Authorized by Supreme Court in Telecom Revenue Share case (2014).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following bodies is NOT directly audited by the Comptroller and Auditor General of India (CAG)?',
        options: [
          'Reserve Bank of India (RBI)',
          'Damodar Valley Corporation',
          'Airports Authority of India',
          'Oil and Natural Gas Corporation (ONGC)',
        ],
        correctAnswer: 'Reserve Bank of India (RBI)',
        explanation: 'The Reserve Bank of India (RBI), State Bank of India (SBI), Life Insurance Corporation (LIC), and Food Corporation of India (FCI) are audited exclusively by private professional chartered accountants appointed by the government, not by the CAG.',
        trapExplanation: 'Examiner trap: Believing CAG audits all central statutory corporations. RBI, SBI, and LIC are notable statutory exceptions audited by private CAs.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // TOPIC 23: STATUTORY & NON-CONSTITUTIONAL BODIES
  // =========================================================================
  {
    id: 'CON-T23-01',
    topicOrder: 23,
    topicSlug: 'statutory-and-non-constitutional-bodies',
    topicTitle: 'Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity',
    topicDescription: 'Creation, appointment committees, tenure terms, powers, and structural limitations of statutory watchdogs (CIC, CVC, NHRC, Lokpal) and policy think tanks (NITI Aayog).',
    slug: 'central-information-commission-rti-act-2005-and-2019-amendments',
    title: 'Central Information Commission (CIC) & RTI Act (2005): Architecture, Exemptions & 2019 Amendments',
    shortDefinition: 'Statutory transparency watchdog established under the Right to Information Act 2005, proactive disclosures under Section 4, exemptions under Section 8, the 3-member Selection Committee, and the impact of the RTI (Amendment) Act 2019.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T23-01-01',
        statement: 'The Central Information Commission (CIC) was established in 2005 under the Right to Information Act 2005 as a statutory quasi-judicial body comprising the Chief Information Commissioner and up to 10 Information Commissioners, appointed by the President on the recommendation of a 3-member committee (PM, Leader of Opposition in Lok Sabha, and a Union Cabinet Minister).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RTI Act 2005, Sections 12-14',
        excerpt: 'CIC established under RTI Act 2005; 1 Chief + max 10 ICs; 3-member selection panel (PM, LoP, Union Cabinet Minister).',
      },
      {
        id: 'CLM-T23-01-02',
        statement: 'Under the RTI (Amendment) Act 2019, the fixed 5-year tenure and parity of salaries/allowances with Election Commissioners were eliminated, granting the Central Government the statutory power to prescribe the tenure, salaries, and service conditions of both Central and State Information Commissioners.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RTI (Amendment) Act, 2019; Right to Information Rules 2019',
        excerpt: '2019 Amendment removed 5-yr fixed tenure and EC salary parity, giving Central Govt rule-making power over terms.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Transparency as a Fundamental Right',
        body: 'In State of UP v. Raj Narain (1975) and SP Gupta (1981), the Supreme Court derived the citizen’s Right to Information directly from Article 19(1)(a) (Freedom of Speech and Expression). The RTI Act 2005 operationalized this constitutional guarantee by dismantling bureaucratic colonial secrecy (Official Secrets Act 1923), mandating proactive disclosures, and establishing an independent quasi-judicial appellate mechanism through Information Commissions.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Statutory Architecture & Section 8 Exemptions',
        body: '1. Composition & Appointment (Section 12):\n   • Chief Information Commissioner + max 10 Information Commissioners (ineligible for reappointment).\n   • Selection Committee: Prime Minister (Chair) + Leader of Opposition in Lok Sabha + Union Cabinet Minister nominated by the PM.\n\n2. Key RTI Provisions:\n   • Section 4(1)(b): Mandatory proactive *suo motu* disclosure of 17 categories of operational information by public authorities.\n   • Section 7: Time limits (30 days normally; 48 hours if information concerns life or personal liberty of a person).\n   • Section 8(1) Exemptions: National sovereignty/security, cabinet papers (until decision taken), trade secrets, fiduciary relationships, foreign government confidences, and personal privacy.\n   • Section 8(2) Public Interest Override: Information may be disclosed notwithstanding the Official Secrets Act if public interest in disclosure outweighs the harm to protected interests.',
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'The 2019 Amendment Debate: Autonomy vs Executive Discretion',
        body: 'The RTI (Amendment) Act 2019 fundamentally altered the institutional standing of the CIC:\n• Original 2005 Position: Chief IC enjoyed fixed 5-year tenure (or 65 years age) and salary/perks equivalent to Chief Election Commissioner (SC Judge parity), giving constitutional parity to a statutory office.\n• 2019 Amendment: Removed fixed statutory tenure and salary parity. Under the 2019 RTI Rules, the Central Government fixed the tenure at 3 years and determined salaries at its executive discretion, raising concerns over institutional autonomy and federal erosion of State Information Commissions.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Transparency & Accountability, Citizens Charters, RTI Act & CIC',
        notes: 'Focus on Section 8 exemptions vs Section 8(2) public interest override, Section 4 proactive disclosures, and 2019 amendment critique.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Public Administration & Rajasthan Institutions: State Information Commission & RTI',
        notes: 'Rajasthan State Information Commission setup, 3-member state selection panel (CM, LoP, Cabinet Minister).',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Banking Regulation & Customer Privacy vs RTI Disclosure',
        notes: 'RBI and Public Sector Banks disclosure obligations under RTI vs Section 8(1)(d) commercial confidence.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'CIC (RTI Act 2005): Statutory body (1 CIC + max 10 ICs). Selection Panel: PM + LoP + Union Cabinet Minister. 2019 Amendment: Central Govt sets tenure (now 3 yrs) and salary (removed EC parity). Section 4 = proactive disclosure; Sec 8 = exemptions; Sec 7 = 30-day (48-hr for life/liberty) limit.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Central Information Commission is a statutory body under RTI Act 2005. Appointed by the President on the advice of PM, LoP, and a Union Cabinet Minister. Under the 2019 Amendments, fixed 5-year tenure and Election Commissioner salary parity were removed, empowering the Centre to determine tenure (3 years) and salary. Section 4 mandates proactive disclosure, Section 7 sets a 30-day deadline (48 hrs for life/liberty), and Section 8 provides exemptions subject to a public interest override.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'RTI & CIC Statutory Architecture:\n• Genesis: Derived from Art 19(1)(a) (Raj Narain 1975).\n• Enactment: RTI Act 2005.\n• Appointments: President on recommendation of PM (Chair) + LoP + Union Cabinet Minister.\n• 2019 Amendments: Tenure reduced from 5 to 3 years; salaries determined by Central Govt rules.\n• Timelines: 30 days general, 48 hours for life/liberty, 35 days if submitted to Assistant PIO.\n• Exemptions: Sec 8(1) (security, privacy, trade secret, cabinet papers).\n• Public Interest Override: Sec 8(2) overrides Official Secrets Act 1923.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Right to Information Act 2005, what is the mandatory time limit for a Public Information Officer (PIO) to provide information if the request concerns the life or liberty of a person?',
        options: [
          'Within 48 hours of receipt of the request',
          'Within 24 hours of receipt of the request',
          'Within 7 days of receipt of the request',
          'Within 30 days of receipt of the request',
        ],
        correctAnswer: 'Within 48 hours of receipt of the request',
        explanation: 'Under the proviso to Section 7(1) of the RTI Act 2005, where the information sought concerns the life or liberty of a person, the same shall be provided within forty-eight hours of the receipt of the request.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T23-02',
    topicOrder: 23,
    topicSlug: 'statutory-and-non-constitutional-bodies',
    topicTitle: 'Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity',
    topicDescription: 'Creation, appointment committees, tenure terms, powers, and structural limitations of statutory watchdogs (CIC, CVC, NHRC, Lokpal) and policy think tanks (NITI Aayog).',
    slug: 'central-vigilance-commission-and-anti-corruption-framework',
    title: 'Central Vigilance Commission (CVC): Santhanam Committee to Statutory Apex Anti-Corruption Body',
    shortDefinition: 'The apex statutory anti-corruption vigilance authority established on Santhanam Committee recommendations, statutory recognition via the CVC Act 2003 following Vineet Narain (1997), superintendence over CBI for corruption offences, and Whistleblowers Protection framework.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T23-02-01',
        statement: 'The Central Vigilance Commission was originally created in 1964 by executive resolution on the recommendations of the Santhanam Committee (1962–64) and conferred statutory status by the CVC Act 2003 following the landmark Supreme Court ruling in Vineet Narain v. Union of India (1997).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'CVC Act 2003; Vineet Narain v. UOI (1997) 1 SCC 226',
        excerpt: 'CVC created 1964 on Santhanam recommendations; granted statutory status under CVC Act 2003 per Vineet Narain mandate.',
      },
      {
        id: 'CLM-T23-02-02',
        statement: 'Under Section 4 of the CVC Act 2003, the Commission consists of a Central Vigilance Commissioner (Chairperson) and not more than two Vigilance Commissioners, appointed by the President on the recommendation of a 3-member committee comprising the Prime Minister (Chairperson), the Union Minister of Home Affairs, and the Leader of Opposition in Lok Sabha, holding office for 4 years or until age 65 (non-renewable).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'CVC Act 2003, Sections 3-5',
        excerpt: 'CVC + max 2 VCs; 3-member panel (PM, Home Minister, LoP); 4-year or 65-year non-renewable tenure.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Genesis, Composition & Unique 4-Year Tenure',
        body: 'The CVC is the apex vigilance institution free from executive control, monitoring all vigilance activity under the Central Government:\n\n1. Composition:\n   • Central Vigilance Commissioner (Chairperson) + not more than two Vigilance Commissioners.\n   • Appointed by the President by warrant under hand and seal.\n   • Selection Committee: Prime Minister (Chair) + Minister of Home Affairs + Leader of the Opposition in the House of the People.\n\n2. Unique Tenure & Removal:\n   • Term: 4 years or until attaining 65 years of age (whichever is earlier). Notice: 4 years is unique in Indian administration (most bodies have 3, 5, or 6 years).\n   • Ineligible for further employment under Central or State Governments.\n   • Removal: Removed by President on grounds of proven misbehavior or incapacity only after a Supreme Court inquiry under Section 6.',
        order: 1,
      },
      {
        type: 'MECHANISM',
        title: 'Superintendence over CBI & Whistleblowers Mandate',
        body: '1. Superintendence over Delhi Special Police Establishment (CBI):\n   • Under Section 8(1) of the CVC Act 2003, the CVC exercises superintendence over the CBI in so far as it relates to the investigation of offenses under the Prevention of Corruption Act, 1988.\n   • The Central Government cannot issue directives to the CBI to investigate corruption cases in a particular manner.\n\n2. Whistle Blowers Protection (Public Interest Disclosure):\n   • CVC is designated as the Designated Agency under the Public Interest Disclosure and Protection of Informers (PIDPI) Resolution / Whistle Blowers Protection Act 2014 to receive complaints against corruption and protect whistleblower identity.\n\n3. Limitation:\n   • The CVC is an advisory/supervisory body; it has no direct power to register criminal FIRs or prosecute directly, relying on the CBI or Chief Vigilance Officers (CVOs) of respective departments.',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Statutory, Regulatory and Various Quasi-Judicial Bodies; CVC, CBI and Anti-Corruption Architecture',
        notes: 'Santhanam Committee origins, Vineet Narain judgment (Single Directive struck down), CVC superintendence over CBI vs Ministry of Personnel.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Preventive Vigilance and Fraud Management in Commercial Banks',
        notes: 'CVC guidelines on bank frauds, Chief Vigilance Officers (CVO) in Public Sector Banks, and Advisory Board for Banking and Financial Frauds (ABBFF).',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Administrative Ethics and Anti-Corruption: CVC, Lokayukta & ACB Rajasthan',
        notes: 'Comparison of CVC powers with Rajasthan State Vigilance Commission and Anti-Corruption Bureau (ACB).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'CVC (Santhanam Committee 1964, Statutory under CVC Act 2003 per Vineet Narain 1997). 1 CVC + max 2 VCs. Selection: PM + Home Minister + LoP. Unique 4-year/65-year tenure (non-renewable). Superintends CBI for Prevention of Corruption Act cases.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The CVC is India’s apex integrity watchdog. Converted into a statutory body via CVC Act 2003. Consists of 1 CVC and max 2 VCs, appointed by President on advice of PM, Home Minister, and LoP. Serves a distinct 4-year or 65-year non-renewable term. Exercises superintendence over the CBI for corruption investigations under the Prevention of Corruption Act 1988 and acts as the designated agency for whistleblower protection.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'CVC Statutory Anatomy:\n• Genesis: Santhanam Committee (1962–64) → 1964 Executive Resolution → Vineet Narain (1997) → CVC Act 2003.\n• Selection Panel: PM (Chair) + Minister of Home Affairs + Leader of Opposition in Lok Sabha.\n• Composition: 1 Central Vigilance Commissioner + up to 2 Vigilance Commissioners.\n• Tenure: 4 years or 65 years age (strictly non-renewable).\n• Jurisdiction: Central Govt officers (Group A/All India Services), Public Sector Banks (Scale V and above), PSUs (Chief Executives/Board Members).\n• Role: Superintends CBI for corruption cases; assesses CVOs; whistleblower designated authority.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the statutory tenure of the Central Vigilance Commissioner under the Central Vigilance Commission Act, 2003?',
        options: [
          '4 years or until attaining the age of 65 years, whichever is earlier',
          '5 years or until attaining the age of 65 years, whichever is earlier',
          '6 years or until attaining the age of 62 years, whichever is earlier',
          '3 years or until attaining the age of 70 years, whichever is earlier',
        ],
        correctAnswer: '4 years or until attaining the age of 65 years, whichever is earlier',
        explanation: 'Under Section 5(1) of the CVC Act 2003, the Central Vigilance Commissioner and the Vigilance Commissioners hold office for a term of four years from the date on which they enter upon office or until they attain the age of sixty-five years, whichever is earlier.',
        trapExplanation: 'Examiner trap: CVC is the only major central body with a 4-year tenure. Students often confuse it with 5 years (UPSC/CIC/CAG) or 3 years (NHRC).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T23-03',
    topicOrder: 23,
    topicSlug: 'statutory-and-non-constitutional-bodies',
    topicTitle: 'Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity',
    topicDescription: 'Creation, appointment committees, tenure terms, powers, and structural limitations of statutory watchdogs (CIC, CVC, NHRC, Lokpal) and policy think tanks (NITI Aayog).',
    slug: 'national-human-rights-commission-and-state-hrcs-framework',
    title: 'National Human Rights Commission (NHRC): Protection of Human Rights Act 1993 & 2019 Reforms',
    shortDefinition: 'Statutory human rights watchdog under PHRA 1993 conforming to Paris Principles, 6-member Selection Committee, 2019 Amendment reforms (broadened Chairperson eligibility and 3-yr tenure), civil court powers, and structural limitations (1-yr bar, armed forces restrictions).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T23-03-01',
        statement: 'The National Human Rights Commission (NHRC) is a statutory body established under the Protection of Human Rights Act (PHRA) 1993 in conformity with the UN Paris Principles 1991, composed of a Chairperson and 5 full-time members plus 7 deemed ex-officio members.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PHRA 1993, Section 3; Paris Principles 1991',
        excerpt: 'NHRC statutory body under PHRA 1993; Chairperson + 5 members + 7 ex-officio heads of National Commissions.',
      },
      {
        id: 'CLM-T23-03-02',
        statement: 'Under the PHRA (Amendment) Act 2019, a former Judge of the Supreme Court (in addition to a former CJI) is eligible to be appointed Chairperson, tenure was reduced from 5 years to 3 years (or age 70, eligible for reappointment), and the appointment is made on the recommendation of a 6-member committee (PM, Speaker, Deputy Chairman RS, Home Minister, and Leaders of Opposition in LS and RS).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PHRA (Amendment) Act 2019, Sections 3, 4, 6',
        excerpt: '2019 Amendment allows SC Judge as Chair, reduces tenure to 3 yrs (max 70), 6-member selection committee.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Composition & The 6-Member High-Power Selection Panel',
        body: '1. Chairperson & Member Eligibility (Post-2019 Amendment):\n   • Chairperson: A person who has been a Chief Justice of India OR a Judge of the Supreme Court.\n   • Members: 1 serving/retired SC Judge + 1 serving/retired High Court Chief Justice + 3 persons having knowledge of human rights (at least one must be a woman).\n   • 7 Deemed Ex-Officio Members: Chairpersons of National Commission for Minorities, NCST, NCSC, NCW, NCBC, NCPCR, and Chief Commissioner for Persons with Disabilities.\n\n2. 6-Member Selection Committee (Section 4):\n   1. Prime Minister (Chairperson)\n   2. Speaker of the House of the People\n   3. Minister of Home Affairs\n   4. Leader of Opposition in the House of the People\n   5. Leader of Opposition in the Council of States\n   6. Deputy Chairman of the Council of States (RS Chairman is NOT a member).',
        order: 1,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Powers of Civil Court vs Structural Limitations',
        body: '1. Powers (Section 13):\n   • While inquiring into complaints, NHRC possesses all powers of a Civil Court trying a suit under the CPC 1908 (summoning witnesses, examining under oath, discovering documents, receiving evidence on affidavits).\n\n2. Critical Institutional Limitations ("Toothless Tiger" Critique):\n   • Purely Recommendatory: Decisions and compensation orders are recommendations; NHRC cannot enforce orders or penalize wrongdoers directly.\n   • 1-Year Limitation Bar (Section 36(2)): NHRC cannot inquire into any matter after the expiry of one year from the date on which the alleged human rights violation occurred.\n   • Armed Forces Restrictions (Section 19): In cases of human rights violations by armed forces, NHRC cannot investigate directly; it can only seek a report from the Central Government and make recommendations.',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Statutory Bodies: National Human Rights Commission & Human Rights Jurisprudence',
        notes: 'Paris Principles, 2019 Amendments (SC Judge eligibility, 3-yr term), 1-year bar under Sec 36(2), armed forces limitation under Sec 19.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: State Human Rights Commission (SHRC)',
        notes: 'Rajasthan SHRC: Notified 18 Jan 1999, functional 23 March 2000. 1st Chairperson: Justice Kanta Bhatnagar. Post-2019: 1 Chair + 2 Members.',
        frequentTraps: 'Confusing 4-member state panel (CM, Home Minister, Speaker, LoP) with central 6-member panel; remembering RS Chairman is NOT in central panel.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Human Rights, Fair Practices Code and Workplace Standards in Banking',
        notes: 'NHRC guidelines on workplace harassment and fair treatment of contract labour in public institutions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NHRC (PHRA 1993, Paris Principles): Chair = former CJI or SC Judge (2019 Act). 6-member panel: PM + Speaker + Dep Chair RS + Home Minister + LoP (LS & RS). Tenure: 3 yrs or 70 yrs (re-eligible). Limits: 1-yr limitation bar, armed forces reports only, advisory nature. RJ SHRC: 2000 functional, 1st Chair Kanta Bhatnagar.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'NHRC is a statutory body created under PHRA 1993. 2019 Amendments made former SC judges eligible as Chair and reduced tenure to 3 years (max 70, eligible for reappointment). Selected by a 6-member committee (PM, Speaker, Deputy Chair RS, Home Minister, LoP LS, LoP RS). Operates with civil court powers, but constrained by an absolute 1-year limitation bar (Sec 36(2)), limited purview over armed forces (Sec 19), and advisory recommendations.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'NHRC Architecture & Statutory Framework:\n• Mandate: Protection of human rights guaranteed by Constitution or international covenants.\n• Selection Panel (6 Members): PM (Chair), Speaker Lok Sabha, Deputy Chairman Rajya Sabha, Union Home Minister, Leader of Opposition (Lok Sabha), Leader of Opposition (Rajya Sabha).\n• Composition: 1 Chair + 5 Full-Time Members + 7 Deemed Ex-Officio Members.\n• Tenure: 3 years or 70 years age (re-eligible).\n• State HRC Selection Panel (4 Members): Chief Minister (Chair), Speaker Vidhan Sabha, State Home Minister, Leader of Opposition in Vidhan Sabha (plus Legislative Council Chairman & LoP if council exists).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Who among the following is NOT a member of the Selection Committee for the appointment of the Chairperson and Members of the National Human Rights Commission (NHRC)?',
        options: [
          'Chairman of the Council of States (Vice-President of India)',
          'Deputy Chairman of the Council of States',
          'Leader of Opposition in the House of the People',
          'Speaker of the House of the People',
        ],
        correctAnswer: 'Chairman of the Council of States (Vice-President of India)',
        explanation: 'Under Section 4(1) of the Protection of Human Rights Act 1993, the Selection Committee includes the Deputy Chairman of the Rajya Sabha, NOT the Chairman of the Rajya Sabha (Vice-President of India), to maintain inter-branch protocol with the Prime Minister acting as Chairperson of the committee.',
        trapExplanation: 'Examiner trap: The Chairman of the Rajya Sabha (Vice-President) is NOT on the panel; the DEPUTY Chairman of the Rajya Sabha is on the panel.',
        difficulty: 'HARD',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T23-04',
    topicOrder: 23,
    topicSlug: 'statutory-and-non-constitutional-bodies',
    topicTitle: 'Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity',
    topicDescription: 'Creation, appointment committees, tenure terms, powers, and structural limitations of statutory watchdogs (CIC, CVC, NHRC, Lokpal) and policy think tanks (NITI Aayog).',
    slug: 'lokpal-and-lokayuktas-act-2013-anti-corruption-ombudsman',
    title: 'Lokpal and Lokayuktas Act (2013): Anti-Corruption Architecture & State Ombudsman',
    shortDefinition: 'Statutory anti-corruption ombudsman established under the Lokpal and Lokayuktas Act 2013 following ARC (1966) recommendations and Anna Hazare movement, jurisdiction covering PM, Ministers, MPs, and public servants, alongside state Lokayukta systems (Rajasthan 1973 model).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T23-04-01',
        statement: 'The Lokpal and Lokayuktas Act 2013 established an independent anti-corruption ombudsman comprising a Chairperson (former CJI, SC Judge, or eminent jurist) and up to 8 members (50% judicial members, and min 50% from SC/ST/OBC/Minorities/Women), appointed by the President on the recommendation of a 5-member Selection Committee (PM, Speaker LS, LoP LS, CJI/nominee, and an Eminent Jurist).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Lokpal and Lokayuktas Act, 2013, Sections 3-4',
        excerpt: 'Lokpal Act 2013: 1 Chair + max 8 members (50% judicial, 50% diversity quota); 5-member selection panel.',
      },
      {
        id: 'CLM-T23-04-02',
        statement: 'Lokpal’s jurisdiction covers the Prime Minister (with exceptions for international relations, external security, public order, atomic energy, and space, requiring full bench 2/3rd approval in camera), Union Ministers, MPs (excluding speeches/votes in Parliament protected by Art 105), and Group A, B, C, and D central public servants.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Lokpal and Lokayuktas Act 2013, Section 14',
        excerpt: 'Lokpal jurisdiction covers PM (with national security safeguards), Ministers, MPs, and Groups A-D officers.',
      },
      {
        id: 'CLM-T23-04-03',
        statement: 'Under the Rajasthan Lokayukta and Up-Lokayuktas Act 1973 (effective 3 Feb 1973), Rajasthan created an ombudsman (1st Lokayukta Justice I.D. Dua) where the Chief Minister, RPSC Members, and High Court Judges are strictly excluded from its jurisdiction.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Lokayukta and Up-Lokayuktas Act 1973, Section 19',
        excerpt: 'Rajasthan Lokayukta 1973: 1st Lokayukta Justice I.D. Dua; Chief Minister strictly excluded from jurisdiction.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Genesis & The 5-Member Selection Committee',
        body: 'The concept of an administrative ombudsman was first recommended by the First Administrative Reforms Commission (ARC 1966 chaired by Morarji Desai) based on the Scandinavian Ombudsman and New Zealand Parliamentary Commissioner models. After multiple failed legislative attempts between 1968 and 2011, the Lokpal and Lokayuktas Act was enacted in 2013.\n\nSelection Committee (Section 4):\n1. Prime Minister (Chairperson)\n2. Speaker of the Lok Sabha\n3. Leader of Opposition in the Lok Sabha\n4. Chief Justice of India or an SC Judge nominated by the CJI\n5. An Eminent Jurist nominated by the President on the recommendation of the first four members.\n\nA Search Committee of at least 7 members (50% SC/ST/OBC/Women) prepares a shortlist.',
        order: 1,
      },
      {
        type: 'MECHANISM',
        title: 'Jurisdiction & Statutory Safeguards for Prime Minister',
        body: '1. Prime Minister Purview:\n   • The Lokpal can inquire into allegations of corruption against the Prime Minister.\n   • Statutory Safeguards: Lokpal CANNOT inquire into allegations related to international relations, external and internal security, public order, atomic energy, and space.\n   • Special In-Camera Procedure: Any inquiry against the PM must be approved by the Full Bench of Lokpal with a two-thirds (2/3rd) majority in an in-camera hearing. If the complaint is dismissed, records shall not be published.\n\n2. Inquiry & Prosecution Wings:\n   • Lokpal has an Inquiry Wing headed by a Director of Inquiry for preliminary inquiry.\n   • Lokpal has a Prosecution Wing headed by a Director of Prosecution for filing cases before Special Courts.\n   • Power to superintend CBI when cases are referred to CBI by Lokpal.',
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'State Ombudsman: The Rajasthan Lokayukta Model (1973)',
        body: 'Section 63 of the 2013 Central Act mandated every state to establish a Lokayukta. However, several states had enacted Lokayukta acts decades earlier (Maharashtra 1971 was first; Rajasthan 1973 was among the earliest):\n\n• Rajasthan Model:\n  - Enacted via Rajasthan Lokayukta and Up-Lokayuktas Act, 1973 (effective 3 Feb 1973; Presidential assent 26 March 1973).\n  - First Lokayukta: Justice I.D. Dua (sworn in 28 Aug 1973); First Up-Lokayukta: K.P.U. Menon.\n  - Appointed by Governor in consultation with Chief Justice of Rajasthan High Court and Leader of Opposition.\n  - Tenure: 5 years.\n  - Jurisdiction Exclusions: Chief Minister (strictly EXCLUDED, unlike Karnataka), RPSC Chairman/Members, High Court Judges, Chief Election Officer, and Panchas/Sarpanchas.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Statutory Bodies, Lokpal, Anti-Corruption Ombudsman & Institutional Accountability',
        notes: 'ARC 1966 genesis, Lokpal Act 2013 5-member selection committee, PM jurisdiction safeguards, search committee diversity quota.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: Lokayukta & Up-Lokayukta Architecture in Rajasthan',
        notes: 'Top RAS Trap: Chief Minister is EXCLUDED from Rajasthan Lokayukta jurisdiction (Sec 19). 1st Lokayukta: Justice I.D. Dua (1973).',
        frequentTraps: 'Believing Rajasthan CM is covered under Lokayukta; confusing First Lokayukta Justice I.D. Dua with first SHRC Chair Justice Kanta Bhatnagar.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'Banking Ombudsman Scheme vs Statutory Ombudsman',
        notes: 'Compare RBI Banking Ombudsman (consumer grievance redressal under Section 35A BR Act) with Lokpal (anti-corruption watchdog).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Lokpal Act 2013 (ARC 1966 genesis): 1 Chair + max 8 members (50% judicial, 50% SC/ST/OBC/Women). Selection Panel: PM + Speaker + LoP + CJI/nominee + Eminent Jurist. Covers PM (with 2/3rd full bench security safeguards), Ministers, MPs, Groups A-D. Rajasthan Lokayukta (1973): Justice I.D. Dua 1st Chair; CM is strictly EXCLUDED.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Lokpal and Lokayuktas Act 2013 created a statutory anti-corruption ombudsman. Appointed by President on the advice of a 5-member committee (PM, Speaker, LoP, CJI nominee, Eminent Jurist). Composed of 1 Chair and up to 8 members (with 50% judicial and 50% diversity quotas). Covers the Prime Minister (with in-camera 2/3rd safeguards), Ministers, MPs, and civil servants. In Rajasthan, the Lokayukta Act 1973 created a state ombudsman (first headed by Justice I.D. Dua) which strictly excludes the Chief Minister.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Lokpal & Lokayukta Architecture:\n• Central Lokpal (2013 Act):\n  - 5-Member Selection Panel: PM (Chair), Speaker Lok Sabha, Leader of Opposition Lok Sabha, CJI or Judge nominee, Eminent Jurist.\n  - Composition: 1 Chair + 8 Members (4 Judicial + 4 Non-Judicial; min 4 from SC/ST/OBC/Minority/Women).\n  - Tenure: 5 years or 70 years age.\n  - Jurisdiction: PM (except atomic energy, space, foreign relations, public order), Union Ministers, MPs, Groups A/B/C/D.\n• Rajasthan Lokayukta (1973 Act):\n  - Appointed by Governor on advice of CM, Chief Justice of Rajasthan HC, and LoP.\n  - Tenure: 5 years.\n  - Excluded from Jurisdiction: Chief Minister, RPSC Members, Judges, Chief Electoral Officer.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'Under the Rajasthan Lokayukta and Up-Lokayuktas Act 1973, which of the following public functionaries is strictly EXCLUDED from the investigative jurisdiction of the Lokayukta?',
        options: [
          'Chief Minister of Rajasthan',
          'Ministers and State Ministers',
          'Members of the Legislative Assembly (MLAs)',
          'Mayors and Municipal Corporation Chairpersons',
        ],
        correctAnswer: 'Chief Minister of Rajasthan',
        explanation: 'Under Section 19 of the Rajasthan Lokayukta and Up-Lokayuktas Act 1973, the Chief Minister of Rajasthan is explicitly excluded from the jurisdiction of the Lokayukta (unlike states like Karnataka where the Chief Minister is included).',
        trapExplanation: 'Examiner trap: Students frequently assume that anti-corruption ombudsmen cover all elected executives. In Rajasthan, the Chief Minister is strictly excluded.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T23-05',
    topicOrder: 23,
    topicSlug: 'statutory-and-non-constitutional-bodies',
    topicTitle: 'Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity',
    topicDescription: 'Creation, appointment committees, tenure terms, powers, and structural limitations of statutory watchdogs (CIC, CVC, NHRC, Lokpal) and policy think tanks (NITI Aayog).',
    slug: 'niti-aayog-vs-planning-commission-think-tank-and-cooperative-federalism',
    title: 'NITI Aayog vs Planning Commission: Think Tank Architecture & Cooperative Federalism',
    shortDefinition: 'The extra-constitutional executive think tank established on 1 January 2015 replacing the top-down Planning Commission (1950–2014), emphasizing bottom-up cooperative federalism, the Governing Council, Team India Hub, and the structural transfer of fund allocation powers to the Finance Ministry.',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-T23-05-01',
        statement: 'NITI Aayog (National Institution for Transforming India) was established on 1 January 2015 via a Union Cabinet Resolution as a non-constitutional, non-statutory executive think tank, replacing the 65-year-old Planning Commission.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Cabinet Secretariat Resolution No. 511/2/1/2015-Cab (Jan 1, 2015)',
        excerpt: 'NITI Aayog established Jan 1, 2015 by Cabinet resolution as a non-constitutional, non-statutory think tank.',
      },
      {
        id: 'CLM-T23-05-02',
        statement: 'Unlike the Planning Commission which possessed the power to allocate central funds and approve state annual plans, NITI Aayog has zero financial allocation power (funds devolution is managed by the Finance Ministry under Art 282 and Art 280 Finance Commission recommendations), functioning purely as a directional, policy, and technical think tank.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Cabinet Secretariat Notification; Ministry of Finance Allocation Rules',
        excerpt: 'NITI Aayog possesses zero fund allocation powers; funds allocation transferred to Ministry of Finance.',
      },
      {
        id: 'CLM-T23-05-03',
        statement: 'The Governing Council of NITI Aayog comprises the Prime Minister (Chairperson), Chief Ministers of all States, Chief Ministers of Union Territories with legislatures (Delhi, Puducherry, J&K), and Lieutenant Governors of other UTs, institutionalizing a bottom-up cooperative federal architecture.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog Constitution Resolution 2015, Clause 3',
        excerpt: 'Governing Council includes PM + all CMs + Lt Governors, replacing the National Development Council.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'NITI Aayog Structure & Institutional Innovation',
        body: 'NITI Aayog was conceptualized to transition India from centralized "one-size-fits-all" socialist planning to competitive and cooperative federalism:\n\n1. Organizational Structure:\n   • Chairperson: Prime Minister of India.\n   • Vice-Chairperson: Appointed by the PM (holds Cabinet Minister rank).\n   • Full-Time Members: Hold Minister of State rank.\n   • Ex-Officio Members: Max 4 Union Cabinet Ministers nominated by the PM.\n   • Special Invitees: Experts and specialists nominated by the PM.\n   • Chief Executive Officer (CEO): Appointed by the PM in the rank of Secretary to the Government of India for a fixed tenure.\n\n2. Key Operational Hubs:\n   • Team India Hub: Leads state-centre engagement and acts as a direct interface for states in New Delhi.\n   • Knowledge and Innovation Hub: Builds think-tank research capabilities, innovation ecosystems (Atal Innovation Mission), and evidence-based policy benchmarking.\n\n3. Flagship Monitoring Frameworks:\n   • SDG India Index (tracks state-level progress on 17 UN Sustainable Development Goals).\n   • Aspirational Districts Programme (data-driven convergence and competitive ranking of 112 underdeveloped districts across India).\n   • Multidimensional Poverty Index (MPI) tracking non-income poverty metrics.',
        order: 1,
      },
      {
        type: 'COMPARISON',
        title: 'Comprehensive Matrix: Planning Commission vs NITI Aayog',
        body: '| Feature | Planning Commission (1950–2014) | NITI Aayog (2015–Present) |\n| :--- | :--- | :--- |\n| **Legal Status** | Non-constitutional, non-statutory (Cabinet Resolution) | Non-constitutional, non-statutory (Cabinet Resolution) |\n| **Approach** | Top-down ("Centre decides, States implement") | Bottom-up ("States as equal national partners") |\n| **State Participation** | States were passive recipients; National Development Council (NDC) met infrequently | States are permanent voting members in the apex Governing Council |\n| **Fund Allocation** | Allocated plan funds and approved state annual plans | Zero financial allocation power (vested in Finance Ministry) |\n| **Planning Model** | Rigid Five-Year Plans (1st to 12th Plan) | 15-Year Vision, 7-Year Strategy, and 3-Year Action Agenda |\n| **Role of Experts** | Limited bureaucratic cadre | Extensive domain experts, lateral entry, and research fellows |',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Statutory, Regulatory & Quasi-Judicial Bodies; Planning & Cooperative Federalism',
        notes: 'Cooperative vs competitive federalism, SDG India Index, Aspirational Districts Programme, and post-planning fiscal architecture.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Economy and Polity of India: NITI Aayog & State Planning Architecture',
        notes: 'Rajasthan performance in NITI Aayog SDG Index, Aspirational Districts in Rajasthan (Jaisalmer, Dholpur, Baran, Karauli, Sirohi).',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Economic and Social Development: Policy Architecture and Financial Inclusion',
        notes: 'NITI Aayog initiatives in digital payments, fintech regulation, and Aspirational Districts financial inclusion targets.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NITI Aayog (1 Jan 2015 Cabinet Resolution): Non-constitutional, non-statutory think tank. PM is Chair; Governing Council = PM + all CMs + Lt Govs. Bottom-up cooperative federalism. ZERO financial allocation powers (Finance Ministry allocates funds). Hubs: Team India & Knowledge/Innovation. Replaced Planning Commission & 5-yr plans.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Established on Jan 1, 2015 by Cabinet resolution, NITI Aayog replaced the Planning Commission. It is an extra-constitutional, non-statutory think tank. Chaired by the PM, with a Governing Council of all State CMs and Lt Governors. Crucial distinction: Unlike the Planning Commission, NITI Aayog cannot allocate funds to States (transferred to Finance Ministry). Operates Team India and Knowledge Hubs, manages SDG Index and Aspirational Districts Programme.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'NITI Aayog Architecture:\n• Status: Non-constitutional, non-statutory advisory think tank.\n• Apex Council: Governing Council (PM + all Chief Ministers + Lieutenant Governors).\n• Leadership: PM (Chair), Vice-Chair (Cabinet rank), CEO (Secretary rank), Full-time & Ex-officio Members.\n• Strategic Architecture: 15-Year Vision, 7-Year Strategy, 3-Year Action Agenda (replacing 5-Year Plans).\n• Core Difference from Planning Commission: Stripped of financial grant powers (vested in Finance Ministry under Art 282).\n• Flagship Programs: Atal Innovation Mission, Aspirational Districts Programme, SDG India Index, National Multidimensional Poverty Index.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following is a primary distinction between the erstwhile Planning Commission and NITI Aayog?',
        options: [
          'NITI Aayog has no power to allocate financial funds to State Governments, whereas the Planning Commission possessed fund allocation powers',
          'NITI Aayog is a constitutional body created under Article 280, whereas the Planning Commission was a statutory body',
          'NITI Aayog excludes State Chief Ministers, whereas the Planning Commission included all Chief Ministers in its governing body',
          'NITI Aayog reports directly to the Supreme Court of India, whereas the Planning Commission reported to the President',
        ],
        correctAnswer: 'NITI Aayog has no power to allocate financial funds to State Governments, whereas the Planning Commission possessed fund allocation powers',
        explanation: 'The fundamental structural distinction is that NITI Aayog is purely an advisory policy think tank with zero financial allocation powers (funds allocation was transferred to the Ministry of Finance), whereas the Planning Commission had the power to allocate plan funds to states.',
        trapExplanation: 'Examiner trap: Both bodies were created by Cabinet Resolution (neither is constitutional or statutory). Chief Ministers are in NITI Aayog’s Governing Council (unlike Planning Commission where they only sat in NDC).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },
];

export async function seedBatchP5CanonicalKnowledge() {
  console.log(`Seeding Batch P5 Canonical Knowledge (${BATCH_P5_CONCEPTS.length} concepts)...`);

  // 1. Ensure Domain & Subject exist
  const polityDomain = await db.domain.upsert({
    where: { slug: 'indian-polity-and-governance' },
    update: {},
    create: {
      name: 'Indian Polity & Governance',
      slug: 'indian-polity-and-governance',
      description: 'Comprehensive canonical study of the Constitution of India, administrative frameworks, and governance doctrines.',
      order: 1,
    },
  });

  const politySubject = await db.subject.upsert({
    where: { slug: 'indian-polity' },
    update: {},
    create: {
      name: 'Indian Polity',
      slug: 'indian-polity',
      description: 'Systematic study of the Indian Constitutional Architecture, Organs of State, and Democratic Institutions.',
      scopeStatement: 'Constitutional law, state institutions, political dynamics, and governance.',
      domainId: polityDomain.id,
      order: 1,
    },
  });

  // Ensure Exams exist
  const exams = [
    { slug: 'upsc-cse', name: 'UPSC Civil Services Examination', conductingBody: 'UPSC' },
    { slug: 'rpsc-ras', name: 'RPSC Rajasthan Administrative Services', conductingBody: 'RPSC' },
    { slug: 'iibf-dbf', name: 'IIBF Diploma in Banking & Finance', conductingBody: 'IIBF' },
  ];

  const examMap: Record<string, string> = {};
  for (const ex of exams) {
    const record = await db.exam.upsert({
      where: { slug: ex.slug },
      update: {},
      create: {
        slug: ex.slug,
        name: ex.name,
        conductingBody: ex.conductingBody,
        status: 'ACTIVE',
      },
    });
    examMap[ex.slug] = record.id;
  }

  // 2. Ensure Source exists for Batch P5
  const source = await db.source.upsert({
    where: { id: 'LEGACY-POLITY-VAULT-2026' },
    update: {},
    create: {
      id: 'LEGACY-POLITY-VAULT-2026',
      title: 'Polity & Governance Master Markdown Vault (2026)',
      sourceType: 'STATUTORY_COMPILATION',
      authorityTier: 'STANDARD_AUTHORITY',
      description: '05_Polity_Governance_Master.md, Mind of Aravalli Knowledge Base, 2026',
    },
  });

  // 3. Seed Semantic Units / Coverage Units
  console.log(`Seeding Batch P5 semantic units (${BATCH_P5_SEMANTIC_UNITS.length} units)...`);
  for (const sUnit of BATCH_P5_SEMANTIC_UNITS) {
    const coverageUnitId = `CU-${sUnit.semanticUnitId}`;
    const cu = await db.coverageUnit.upsert({
      where: { id: coverageUnitId },
      update: {
        status: 'PROCESSED',
        notes: `Batch P5 mapped to Concept: ${sUnit.targetConceptId}`,
      },
      create: {
        id: coverageUnitId,
        sourceId: source.id,
        label: `${sUnit.semanticUnitId}: ${sUnit.title}`,
        scopeDescription: sUnit.scope,
        status: 'PROCESSED',
        notes: `Batch P5 mapped to Concept: ${sUnit.targetConceptId}`,
      },
    });

    await db.ingestionItem.upsert({
      where: { id: `ING-${sUnit.semanticUnitId}` },
      update: {
        status: 'MAPPED',
        extractedContent: sUnit.scope,
      },
      create: {
        id: `ING-${sUnit.semanticUnitId}`,
        sourceId: source.id,
        coverageUnitId: cu.id,
        rawInput: `Legacy Chapter ${sUnit.legacyChapterNumber}: ${sUnit.title}`,
        extractedContent: sUnit.scope,
        status: 'MAPPED',
      },
    });
  }

  // 4. Seed Topics & Concepts
  const topicMap: Record<number, string> = {};

  for (const cDef of BATCH_P5_CONCEPTS) {
    if (!topicMap[cDef.topicOrder]) {
      const topicRecord = await db.topic.upsert({
        where: {
          subjectId_slug: {
            subjectId: politySubject.id,
            slug: cDef.topicSlug,
          },
        },
        update: {
          title: cDef.topicTitle,
          description: cDef.topicDescription,
          order: cDef.topicOrder,
        },
        create: {
          title: cDef.topicTitle,
          slug: cDef.topicSlug,
          description: cDef.topicDescription,
          subjectId: politySubject.id,
          order: cDef.topicOrder,
        },
      });
      topicMap[cDef.topicOrder] = topicRecord.id;
    }

    const topicId = topicMap[cDef.topicOrder];

    // Upsert Concept
    const concept = await db.concept.upsert({
      where: { id: cDef.id },
      update: {
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        topicId: topicId,
      },
      create: {
        id: cDef.id,
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        status: 'CANONICAL',
        topicId: topicId,
      },
    });

    // Seed Claims & Evidence
    for (const claimDef of cDef.claims) {
      const claim = await db.claim.upsert({
        where: { id: claimDef.id },
        update: {
          statement: claimDef.statement,
          claimType: claimDef.claimType,
          confidence: claimDef.confidence,
          epistemicLevel: claimDef.epistemicLevel,
        },
        create: {
          id: claimDef.id,
          conceptId: concept.id,
          statement: claimDef.statement,
          claimType: claimDef.claimType,
          confidence: claimDef.confidence,
          epistemicLevel: claimDef.epistemicLevel,
          status: 'CANONICAL_CLAIM',
        },
      });

      const evidenceId = `EVD-${claimDef.id}`;
      await db.evidence.upsert({
        where: { id: evidenceId },
        update: {
          locator: claimDef.locator,
          excerpt: claimDef.excerpt,
        },
        create: {
          id: evidenceId,
          claimId: claim.id,
          sourceId: source.id,
          locator: claimDef.locator,
          excerpt: claimDef.excerpt,
          evidenceType: 'STATUTORY_PROVISION',
          authority: 'STATUTORY_AUTHORITY',
          evidentiarySupport: 'DIRECT_STATUTORY',
        },
      });
    }

    // Seed Content Blocks
    for (const block of cDef.contentBlocks) {
      const blockId = `CB-${concept.id}-${block.order}`;
      await db.contentBlock.upsert({
        where: { id: blockId },
        update: {
          title: block.title,
          body: block.body,
          type: block.type,
          order: block.order,
        },
        create: {
          id: blockId,
          conceptId: concept.id,
          type: block.type,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: 'PUBLIC',
        },
      });
    }

    // Seed Exam Mappings
    for (const em of cDef.examMappings) {
      const examId = examMap[em.examCode];
      if (examId) {
        await db.examConceptMapping.upsert({
          where: {
            examId_conceptId: {
              examId,
              conceptId: concept.id,
            },
          },
          update: {
            relevance: em.relevance,
            priority: em.priority,
            requiredDepth: em.requiredDepth,
            syllabusUnit: em.syllabusUnit,
            notes: em.notes,
            frequentTraps: em.frequentTraps,
          },
          create: {
            examId,
            conceptId: concept.id,
            relevance: em.relevance,
            priority: em.priority,
            requiredDepth: em.requiredDepth,
            syllabusUnit: em.syllabusUnit,
            notes: em.notes,
            frequentTraps: em.frequentTraps,
          },
        });
      }
    }

    // Seed Revision Units
    for (const ru of cDef.revisionUnits) {
      const ruId = `RU-${concept.id}-${ru.type}`;
      await db.revisionUnit.upsert({
        where: { id: ruId },
        update: {
          content: ru.content,
          order: ru.order,
        },
        create: {
          id: ruId,
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          priority: 'CORE',
          order: ru.order,
        },
      });
    }

    // Seed Questions
    for (let qIdx = 0; qIdx < cDef.questions.length; qIdx++) {
      const q = cDef.questions[qIdx];
      const qId = `Q-${concept.id}-${qIdx + 1}`;
      await db.question.upsert({
        where: { id: qId },
        update: {
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty,
          isPYQ: q.isPYQ,
        },
        create: {
          id: qId,
          conceptId: concept.id,
          type: 'MULTIPLE_CHOICE',
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

  console.log(`Successfully seeded Batch P5 knowledge base. Total concepts: ${BATCH_P5_CONCEPTS.length}.`);
}
