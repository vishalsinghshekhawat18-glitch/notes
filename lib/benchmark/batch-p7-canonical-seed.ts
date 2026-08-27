/**
 * Batch P7 Canonical Knowledge Base Seeder — Deepening Substantially Migrated Units
 * Mind of Aravalli — Academic Reading Hub
 *
 * Implements 6 Deepened Canonical Concepts:
 * 1. CON-T23-06 (Topic 23): District Administration, Citizen Charters, Sevottam Model & Public Service Guarantee Acts (LEG-POL-009)
 * 2. CON-T11-05 (Topic 11): Coalition Governments, Common Minimum Programme, Hung Assemblies & Pressure Groups (LEG-POL-010)
 * 3. CON-T22-05 (Topic 22): Determinants of Voting Behavior, EVM-VVPAT Architecture & Electoral Technology Reforms (LEG-POL-012)
 * 4. CON-T20-05 (Topic 20): National Integration Mechanisms, Inter-State Council & Internal Security Framework (LEG-POL-018)
 * 5. CON-T08-05 (Topic 8):  Official Language Constitutional Scheme (Part XVII), Special Linguistic Directives & Constitutional Morality (LEG-POL-028)
 * 6. CON-T19-05 (Topic 19): Inter-State River Water Disputes (Article 262), Boundary Adjudication & Sub-Classification Jurisprudence (LEG-POL-039)
 */

import { db } from '../db/client';
import { BATCH_P7_SEMANTIC_UNITS } from '../ingestion/batch-p7-semantic-inventory';

export interface BatchP7ConceptDef {
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
    claimType: 'CONSTITUTIONAL_PROVISION' | 'STATUTORY_RULE' | 'JUDICIAL_DOCTRINE' | 'HISTORICAL_FACT' | 'PROCEDURAL_RULE' | 'CENSUS_DATA';
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

export const BATCH_P7_CONCEPTS: BatchP7ConceptDef[] = [
  // =========================================================================
  // 1. CON-T23-06 (LEG-POL-009): DISTRICT ADMINISTRATION & CITIZEN CHARTERS
  // =========================================================================
  {
    id: 'CON-T23-06',
    topicOrder: 23,
    topicSlug: 'statutory-regulatory-quasi-judicial-bodies',
    topicTitle: 'Statutory, Regulatory & Quasi-Judicial Bodies',
    topicDescription: 'Statutory commissions, regulatory frameworks, anti-corruption machinery, grassroots district administration, and public service delivery statutes in India and Rajasthan.',
    slug: 'district-administration-citizen-charters-sevottam-model-public-service-guarantee-acts',
    title: 'District Administration, Citizen Charters, Sevottam Model & Public Service Guarantee Acts',
    shortDefinition: 'Grassroots administrative architecture headed by the District Collector (Revenue Collector, District Magistrate under BNSS, and District Development Officer), Board of Revenue Ajmer (est. Nov 1, 1949), Citizen Charters, Sevottam Model (IS 15700:2005), and statutory service delivery frameworks (Rajasthan Guaranteed Delivery of Public Services Act 2011 & Right to Hearing Act 2012).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T23-06-01',
        statement: 'The office of the District Collector, created by Warren Hastings in 1772, functions as a tripartite institutional nexus: Revenue Collector (head of district revenue administration under State Land Revenue Acts), District Magistrate (head of law, order, and preventive magisterial powers under BNSS 2023/CrPC), and District Development Officer (coordinating Panchayati Raj and rural development schemes).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Land Revenue Act 1956; Bharatiya Nagarik Suraksha Sanhita 2023; 2nd ARC 15th Report',
        excerpt: 'District Collector: 3-in-1 role (Revenue Collector, District Magistrate, District Development Officer).',
      },
      {
        id: 'CLM-T23-06-02',
        statement: 'The Board of Revenue for Rajasthan, established on November 1, 1949 at Ajmer under Ordinance 22 of 1949 and governed by the Rajasthan Land Revenue Act 1956, is the apex revenue court of the state, possessing supervisory and appellate jurisdiction over all divisional commissioners, collectors, SDOs, tehsildars, and patwaris.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Land Revenue Act 1956, Section 4-10; Revenue Board Ordinance 22 of 1949',
        excerpt: 'Board of Revenue for Rajasthan est. Nov 1, 1949 at Ajmer as apex revenue court.',
      },
      {
        id: 'CLM-T23-06-03',
        statement: 'Rajasthan became the first state in India to enact the Rajasthan Guaranteed Delivery of Public Services Act on November 14, 2011, establishing statutory delivery timelines across 153+ notified services in 18 departments, backed by a two-tier appellate mechanism and mandatory financial penalties of ₹500 to ₹5,000 (deducted directly from the salary of negligent designated officers).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Guaranteed Delivery of Public Services Act 2011, Sections 3-9',
        excerpt: 'RJ Public Services Guarantee Act 2011: First state in India, 153 services, ₹500-₹5000 salary penalty.',
      },
      {
        id: 'CLM-T23-06-04',
        statement: 'The Sevottam Model (standardized under IS 15700:2005 by the Bureau of Indian Standards) is the national quality management framework for public service delivery comprising three interconnected pillars: (1) Citizen Charter formulation and performance standards, (2) Public Grievance Redressal mechanisms, and (3) Service Delivery Capability and infrastructure assessment.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department of Administrative Reforms and Public Grievances (DARPG), Sevottam Framework IS 15700:2005',
        excerpt: 'Sevottam Model (IS 15700:2005): 3 pillars — Citizen Charter, Public Grievance Redressal, Service Delivery Capability.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Shift from Administrative Discretion to Statutory Citizen Rights',
        body: 'In traditional colonial public administration, citizens approached government offices as supplicants petitioning for administrative benevolence. Timelines were discretionary, bureaucratic delays carried no personal consequences for civil servants, and voluntary Citizen Charters (first introduced in the UK in 1991 by John Major and adopted in India following the 1997 Chief Ministers Conference) lacked justiciable legal teeth.\n\nThe modern administrative paradigm transforms service delivery into an **enforceable statutory right**. Through legislation like the *Rajasthan Guaranteed Delivery of Public Services Act 2011* and the *Rajasthan Right to Hearing Act 2012*, failure to deliver a notified public service within the prescribed statutory period triggers mandatory daily financial penalties deducted directly from the defaulting officer\'s salary, operationalized by the grassroots district administrative hierarchy.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Tripartite Role of District Collector & Sub-Divisional Hierarchy',
        body: 'The district is the foundational territorial unit of field administration in India. The **District Collector (DC)**, an office created by Warren Hastings in 1772, integrates three primary executive roles:\n\n1. **Revenue Collector:** Apex revenue authority in the district under the *Rajasthan Land Revenue Act 1956*, responsible for land revenue assessment, record-of-rights (*Jamabandi*), disaster relief management, and supervising the subordinate revenue hierarchy.\n2. **District Magistrate (DM):** Head of the executive magistracy exercising preventive and regulatory powers under the *Bharatiya Nagarik Suraksha Sanhita 2023 (BNSS)* / CrPC (e.g. Section 163 BNSS / old Section 144 CrPC, preventive detention, arms licensing, and coordinating law and order with the District Police Chief / Superintendent of Police).\n3. **District Development Officer (DDO):** Coordinates developmental planning, centrally sponsored and state welfare schemes, and liaises with the Zila Parishad and District Planning Committee (Article 243ZD).\n\n### The Grassroots Sub-Divisional & Revenue Hierarchy\n\n```\nDistrict Collector (DM / DDO)\n  └── Sub-Divisional Officer (SDO / SDM) — Head of Sub-Division\n        └── Tehsildar (Executive Magistrate & Head of Tehsil)\n              └── Naib Tehsildar (Sub-Tehsil In-Charge)\n                    └── Revenue Inspector (RI / Kanungo / Girdawar) — Revenue Circle\n                          └── Patwari (Grassroots Land Official — Patwar Circle)\n```\n\nThe **Patwari** is the foundational village-level revenue official responsible for maintaining three vital registers:\n* **Khatauni:** Register of land ownership and tenancy rights.\n* **Khasra:** Field index register mapping land parcels, soil quality, and ownership.\n* **Girdawari:** Biannual harvest and crop inspection register essential for crop loss compensation.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Statutory Service Guarantees & The Sevottam Framework',
        body: '### 1. Rajasthan Guaranteed Delivery of Public Services Act 2011\n\nEnacted on **November 14, 2011**, Rajasthan became the pioneer state in India to codify enforceable service delivery timelines across 153+ services (e.g. caste certificates, revenue records, electricity connections, birth/death registrations) across 18 departments.\n\n* **Designated Officer:** Prescribed official responsible for delivering the service within the stipulated timeline (e.g. 7 days for a caste certificate).\n* **First Appeal:** If the service is rejected or delayed, the citizen files a first appeal within 30 days to the First Appellate Authority (e.g. SDO).\n* **Second Appeal & Penalty:** The Second Appellate Authority (e.g. District Collector) is empowered to impose a financial penalty ranging from **₹500 to ₹5,000** (or ₹250 per day of delay) directly recovered from the defaulting officer\'s salary and awarded as compensation to the aggrieved citizen.\n\n### 2. Rajasthan Right to Hearing Act 2012 (Enacted August 1, 2012)\n\nComplements the 2011 Act by creating a mandatory right to hearing for any administrative grievance at four progressive tiers:\n1. **Gram Panchayat Level:** Public Hearing Officer (Panchayat Secretary / VDO) — Disposal within 15 days.\n2. **Block / Tehsil Level:** First Appellate Authority (SDO / BDO).\n3. **District Level:** Second Appellate Authority (District Collector).\n4. **State Level:** State Level Public Grievance Redressal Committee.\n\n### 3. The Sevottam Model (IS 15700:2005)\n\nDeveloped by the Department of Administrative Reforms and Public Grievances (DARPG) and standardized by the Bureau of Indian Standards (BIS):\n\n| Sevottam Pillar | Focus Area | Operational Requirement |\n| :--- | :--- | :--- |\n| **Pillar 1: Citizen\'s Charter** | Standards & Commitments | Clear statement of service standards, delivery timelines, and designated responsibility centers. |\n| **Pillar 2: Public Grievance Redressal** | Receipt & Resolution | Well-publicized grievance channels, standardized acknowledgment, and time-bound disposal. |\n| **Pillar 3: Service Delivery Capability** | Infrastructure & Culture | Systematic assessment of workforce training, technological capability, and public interface. |',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Board of Revenue Ajmer vs Civil Judiciary in Land Disputes',
        body: '| Feature | Board of Revenue for Rajasthan (Ajmer) | High Court & Subordinate Civil Courts |\n| :--- | :--- | :--- |\n| **Establishment** | November 1, 1949 (Ordinance 22 of 1949) & Rajasthan Land Revenue Act 1956 | Constitution of India (Articles 214–237) & Code of Civil Procedure 1908 |\n| **Subject Jurisdiction** | Agricultural land tenancy, revenue mutation, *Khatauni* disputes, agricultural land demarcation | Proprietary title suits, contract disputes, criminal trials, non-agricultural civil suits |\n| **Apex Appellate Bench** | Chairman (Senior IAS officer) and Administrative/Judicial Members sitting at Ajmer | High Court of Judicature for Rajasthan (Principal Seat Jodhpur, Jaipur Bench) |\n| **Supervisory Writ Control** | Decisions are subject to High Court supervisory writ jurisdiction under Articles 226/227 | High Court is an independent Constitutional Court of Record (Article 215) |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps & State Administration High-Yield Points',
        body: '1. **Creation of District Collector Post:** Created in **1772 by Warren Hastings** (not Lord Cornwallis, who introduced the 1793 Cornwallis Code separating judicial from revenue functions).\n2. **Apex Revenue Court Location:** Head office of the Board of Revenue for Rajasthan is located at **Ajmer** (established 1 Nov 1949), not Jaipur or Jodhpur.\n3. **Pioneer State in Public Service Guarantee:** Rajasthan was the **first state** in India to enact the Guaranteed Delivery of Public Services Act with financial salary penalty provisions on Nov 14, 2011.\n4. **First Chief Secretary of Rajasthan:** **K. Radhakrishnan** (1949); Longest serving Chief Secretary: **Bhagwat Singh Mehta (B.S. Mehta)**.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'State Administrative Structure, District Administration & Public Service Delivery Acts',
        notes: 'Directly tested in RAS Prelims and RAS Mains Paper III (Administrative Ethics & Public Administration).',
        frequentTraps: 'Confusing the 2011 Public Services Guarantee Act (153 services, salary deduction penalty) with the 2012 Right to Hearing Act (15-day mandatory hearing across Gram Panchayat to District tiers).',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'GS Paper II: Governance, Citizen Charters & Sevottam Model',
        notes: 'Tests Sevottam Model 3-pillar framework (IS 15700:2005) and 2nd ARC recommendations on district administration.',
        frequentTraps: 'Believing that Citizen Charters are automatically legally justiciable under common law; they require statutory backing like state Service Guarantee Acts to carry financial penalties.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'District Collector (est. 1772 Warren Hastings) = Revenue Collector + District Magistrate (BNSS) + DDO. Board of Revenue = Ajmer (1 Nov 1949). Sevottam (IS 15700) = Charters + Grievances + Capability. Rajasthan Public Services Act 2011 = 1st in India, ₹500–₹5000 salary penalty.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'District Administration operates through the DC (Revenue, Magisterial, Developmental) supported by SDO, Tehsildar, RI, and Patwari (Khatauni, Khasra, Girdawari). The Board of Revenue at Ajmer is the apex state revenue court. Rajasthan pioneered statutory public service delivery through the Guaranteed Delivery of Public Services Act 2011 (penalties on negligent officers) and the Right to Hearing Act 2012 (15-day disposal).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Administrative Triad: Revenue (Land Revenue Act 1956), Law & Order (BNSS 2023), Development (Panchayati Raj coordination).\n2. Revenue Chain: DC -> SDO -> Tehsildar -> Kanungo -> Patwari.\n3. Apex Revenue Court: Board of Revenue Ajmer (1 Nov 1949).\n4. Citizen Empowerment Statutes: 2011 Service Guarantee Act (153 services, ₹500–₹5000 salary deduction) & 2012 Right to Hearing Act (15-day mandatory hearing).\n5. Sevottam Model (IS 15700:2005): 3 pillars — Citizen Charter standards, Grievance redressal, Service delivery capability.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Rajasthan Guaranteed Delivery of Public Services Act 2011, what is the statutory penalty consequence if a designated officer fails to provide a notified public service within the stipulated timeline without sufficient cause?',
        options: [
          'Immediate departmental suspension without inquiry',
          'A financial penalty ranging from ₹500 to ₹5,000 deducted directly from their salary and awarded as compensation to the applicant',
          'Transfer of the officer to another district by the State Government',
          'Criminal prosecution before the High Court of Rajasthan',
        ],
        correctAnswer: 'A financial penalty ranging from ₹500 to ₹5,000 deducted directly from their salary and awarded as compensation to the applicant',
        explanation: 'Section 7 of the Rajasthan Guaranteed Delivery of Public Services Act 2011 empowers the Second Appellate Authority to impose a penalty of ₹500 to ₹5,000 (or ₹250 per day of delay) on the designated officer, which is deducted from their salary and paid as compensation to the aggrieved citizen.',
        trapExplanation: 'Examiners test whether the 2011 Act is merely hortatory like voluntary Citizen Charters or has enforceable financial salary deductions.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 2. CON-T11-07 (LEG-POL-010): COALITION GOVERNMENTS & PRESSURE GROUPS
  // =========================================================================
  {
    id: 'CON-T11-07',
    topicOrder: 11,
    topicSlug: 'the-union-executive',
    topicTitle: 'The Union Executive: President, Vice-President, PM & Council of Ministers',
    topicDescription: 'Constitutional architecture of the Union Executive under Part V: President, Vice-President, Prime Minister, Central Council of Ministers, Cabinet governance, Coalition Politics, and Pressure Groups.',
    slug: 'coalition-governments-common-minimum-programme-hung-assemblies-pressure-groups',
    title: 'Coalition Governments, Common Minimum Programme, Hung Assemblies & Pressure Groups',
    shortDefinition: 'Evolution and dynamics of coalition governance in India (1989–2014 multi-party coalition era vs post-2014 dominant alliances), Common Minimum Programme (CMP), constitutional conventions on hung assemblies (Sarkaria and Punchhi Commission invitation hierarchy), and the typology of pressure groups (Almond-Finer classification: associational, institutional, non-associational, anomic).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T11-07-01',
        statement: 'Under Article 75(3) and Article 164(2), the Council of Ministers is collectively responsible to the Lok Sabha / State Legislative Assembly; in coalition governments, political coherence is operationalized through non-statutory extra-constitutional consensus mechanisms such as the Common Minimum Programme (CMP) and Coalition Coordination Committees.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 75(3); Sarkaria Commission Report (1988), Chapter 4',
        excerpt: 'Collective responsibility under Art 75(3) in coalitions operationalized via Common Minimum Programme (CMP).',
      },
      {
        id: 'CLM-T11-07-02',
        statement: 'The Sarkaria Commission (1988) and Punchhi Commission (2010) established an authoritative constitutional hierarchy for the President / Governor when inviting a Prime Minister / Chief Minister in a hung Parliament / Assembly: (1) An alliance formed prior to elections, (2) The single largest party with support of other parties/independents, (3) A post-electoral coalition where all partners join government, (4) A post-electoral alliance where some partners offer outside support.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Sarkaria Commission Report on Centre-State Relations (1988); Punchhi Commission Report (2010), Vol. II',
        excerpt: 'Hung assembly invitation order: Pre-poll alliance -> Single largest party -> Post-poll coalition -> Post-poll alliance with outside support.',
      },
      {
        id: 'CLM-T11-07-03',
        statement: 'According to Gabriel Almond\'s structural-functional classification, pressure groups in India operate in four distinct structural forms: Associational (organized specialized groups like FICCI, ASSOCHAM, BKU, AITUC), Institutional (formal civil service/military associations), Non-Associational (informal kinship, caste, or ethnic groups), and Anomic (spontaneous flashpoint protest formations).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Gabriel Almond & G. Bingham Powell, Comparative Politics: A Developmental Approach; M. Laxmikanth, Indian Polity (7th Ed), Chapter on Pressure Groups',
        excerpt: 'Almond classification of pressure groups: Associational, Institutional, Non-Associational, and Anomic.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Reality of Fragmented Mandates & Extra-Constitutional Consensus',
        body: 'The Indian Constitution was drafted with the assumption of clear legislative majorities following Westminster conventions. However, the period between 1989 and 2014 witnessed a quarter-century of **Coalition Governments** at the Centre (from the National Front in 1989 to the United Front, NDA, and UPA regimes).\n\nIn a coalition, no single party holds a standalone majority in the Lok Sabha. Consequently, the constitutional principle of **Collective Responsibility (Article 75(3))** is tested by ideological divergence among coalition partners. To manage this tension, coalition partners invent informal governance instruments like the **Common Minimum Programme (CMP)**, steering committees, and post-poll ministerial allocation formulas that reconcile federal diversity with cabinet cohesion.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Hung Parliaments & The Sarkaria-Punchhi Discretionary Hierarchy',
        body: 'When no single political party or pre-poll alliance secures an absolute majority in a general election, the Head of State (President at the Centre, Governor in States) exercises **situational discretion** under Articles 75(1) / 164(1).\n\nTo prevent arbitrary and partisan appointments, the **Sarkaria Commission (1988)** and **Punchhi Commission (2010)** laid down an authoritative four-step order of priority:\n\n1. **Pre-Poll Alliance:** An alliance of parties formed prior to the elections, as the electorate voted for them as a collective political unit.\n2. **Single Largest Party:** The single largest party claiming to form the government with the demonstrated support of other parties or independent legislators.\n3. **Post-Poll Coalition:** A coalition of parties formed after the elections, where all constituent partners agree to join the Council of Ministers.\n4. **Post-Poll Alliance with Outside Support:** A coalition where some constituent partners join the government while others support it from outside.\n\nIn all cases, the appointed Prime Minister / Chief Minister must prove their majority on the floor of the House within a strict timeframe (typically 14 to 30 days), as reaffirmed in *S.R. Bommai v. Union of India (1994)* and the *Karnataka Assembly Floor Test ruling (2018)*.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Typology & Influence Techniques of Pressure Groups',
        body: 'Unlike political parties, **Pressure Groups (Interest Groups)** do not contest elections or seek direct formal control of political power. Instead, they organize specific socioeconomic interests to influence executive policy, administrative rules, and legislative enactments from the outside.\n\n### Almond-Finer Typology of Pressure Groups\n\n| Pressure Group Type | Defining Characteristics | Prominent Indian Examples |\n| :--- | :--- | :--- |\n| **1. Associational Groups** | Formally organized, specialized bodies with constitution, permanent office, and targeted professional/economic aims. | **Business:** FICCI, CII, ASSOCHAM.<br>**Trade Unions:** INTUC, AITUC, BMS, CITU.<br>**Agrarian:** Bharatiya Kisan Union (BKU), All India Kisan Sabha. |\n| **2. Institutional Groups** | Formally established entities within government or bureaucracy pursuing institutional interests. | IAS Officers\' Association, IPS Association, Central Secretariat Service Forum. |\n| **3. Non-Associational Groups** | Informal collectives mobilizing on primordial identity (caste, tribe, religion, or language). | Caste sabhas (e.g. Karni Sena, Jat Mahasabha), linguistic movements. |\n| **4. Anomic Groups** | Spontaneous, unorganized crowds acting through flashpoint agitations, demonstrations, or direct action. | Spontaneous student agitations, sudden localized civil protests. |\n\n### Primary Influence Techniques\n* **Legislative Lobbying & Committee Representations:** Deposition before Parliamentary Standing Committees considering draft Bills.\n* **Judicial Litigation:** Sponsoring Public Interest Litigations (PIL) under Articles 32 and 226.\n* **Tripartite Advisory Mechanisms:** Structured participation in Indian Labour Conference, Board of Trade, and National Minimum Wage advisory boards.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Political Parties vs Pressure Groups',
        body: '| Dimension | Political Parties | Pressure Groups |\n| :--- | :--- | :--- |\n| **Primary Objective** | Capture state power by contesting elections and forming the government. | Influence public policy and legislative outcomes without seeking formal office. |\n| **Membership & Base** | Broad-based, aggregating diverse societal interests across an entire electorate. | Narrow, specialized, representing specific functional, economic, or professional interests. |\n| **Constitutional Status** | Recognized under Representation of the People Act 1951 and Tenth Schedule (52nd CAA). | Protected under Fundamental Right to form associations (Article 19(1)(c)). |\n| **Accountability** | Directly accountable to voters in periodic periodic elections. | Accountable internally to their specific members and donors. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps in Coalition Dynamics & Pressure Groups',
        body: '1. **Discretion in Hung Assemblies:** The President / Governor cannot arbitrarily invite anyone; they are bound by the Sarkaria/Punchhi sequence where a **pre-poll alliance takes precedence** over a single largest party that lacks pre-poll allies.\n2. **Floor Test Mandate:** The legitimacy of a coalition government is tested **exclusively on the floor of the House** (*S.R. Bommai 1994*), not through subjective private assessments in Raj Bhavan.\n3. **Pressure Groups vs Lobbyists:** Indian law does not formally recognize institutionalized commercial lobbying like the US Lobbying Disclosure Act; influence is exerted through registered societies, trade unions, industry chambers, and consultative statutory committees.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Pressure Groups, Coalition Politics & Functioning of Executive',
        notes: 'Frequently asked in Mains regarding role of pressure groups in policy formulation and Governor\'s discretionary powers in hung assemblies.',
        frequentTraps: 'Confusing the Sarkaria Commission order of preference in hung assemblies by placing the single largest party before a pre-poll alliance.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Political Dynamics of India: Coalition Politics & Pressure Groups in Rajasthan',
        notes: 'Covers political parties, pressure groups, and state assembly floor test precedents.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Coalition Governance = Art 75(3) Collective Responsibility mediated by Common Minimum Programme (CMP). Hung Assembly hierarchy (Sarkaria/Punchhi) = Pre-poll alliance -> Single largest party -> Post-poll coalition. Pressure groups (Almond) = Associational (FICCI/BKU), Institutional, Non-associational, Anomic.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Coalition politics in India operationalizes collective responsibility through Common Minimum Programmes. In hung assemblies, the Sarkaria and Punchhi Commissions mandate a 4-tier invitation hierarchy prioritizing pre-poll alliances. Pressure groups (classified by Gabriel Almond into Associational, Institutional, Non-Associational, and Anomic) influence public policy without contesting elections through lobbying, PILs, and advisory committees.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Coalition Mechanisms: Common Minimum Programme (CMP), Coalition Coordination Committees, Portfolio bargaining.\n2. Hung Assembly Hierarchy: (1) Pre-poll alliance, (2) Single largest party with allies, (3) Post-poll coalition, (4) Post-poll alliance with outside support.\n3. Floor Test Doctrine: Floor of the House is the sole constitutional test (*S.R. Bommai 1994*).\n4. Pressure Group Typology: Associational (FICCI, BKU, CITU), Institutional (IAS Association), Non-Associational (Caste/regional bodies), Anomic (Spontaneous protests).\n5. Constitutional Protection: Article 19(1)(c) right to form associations.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'According to the Sarkaria Commission (1988) and Punchhi Commission (2010) guidelines, which political formation must be given FIRST priority by the Governor when appointing a Chief Minister in a hung legislative assembly?',
        options: [
          'The single largest party in terms of seats won, regardless of alliances',
          'An alliance of parties that was formed prior to the elections',
          'A post-election coalition of parties where all members join the cabinet',
          'The political party that secured the highest aggregate percentage of popular votes',
        ],
        correctAnswer: 'An alliance of parties that was formed prior to the elections',
        explanation: 'Both the Sarkaria Commission (1988) and Punchhi Commission (2010) explicitly recommend that a pre-poll alliance must be treated as a single entity and invited FIRST because the electorate voted for the coalition as a recognizable joint electoral platform.',
        trapExplanation: 'Candidates often erroneously choose the single largest party, but a pre-poll alliance holds constitutional priority because of its pre-electoral mandate.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 3. CON-T22-05 (LEG-POL-012): VOTING BEHAVIOR & EVM-VVPAT REFORMS
  // =========================================================================
  {
    id: 'CON-T22-05',
    topicOrder: 22,
    topicSlug: 'election-commission-and-electoral-reforms',
    topicTitle: 'Election Commission of India & Electoral Governance',
    topicDescription: 'Constitutional framework of elections under Part XV: Election Commission of India (Article 324), electoral rolls, voting behavior determinants, EVM-VVPAT integrity, and digital electoral reforms.',
    slug: 'determinants-voting-behavior-evm-vvpat-architecture-electoral-technology-reforms',
    title: 'Determinants of Voting Behavior, EVM-VVPAT Architecture & Electoral Technology Reforms',
    shortDefinition: 'Structural determinants of Indian voting behavior (primordial identity vs governance performance, welfare delivery, and gender participation), technological evolution of voting systems (EVM standalone architecture, VVPAT statutory mandate under Subramanian Swamy 2013 and ADR 2024 verification standard), and ECI digital governance mechanisms (cVIGIL, ENCORE, Suvidha).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T22-05-01',
        statement: 'The Voter Verifiable Paper Audit Trail (VVPAT), introduced under the Conduct of Elections (Amendment) Rules 2013 following the Supreme Court judgment in Subramanian Swamy v. Election Commission of India (2013), generates a physical paper slip visible to the voter for 7 seconds through a transparent window before dropping into a sealed drop-box, ensuring verifiable transparency in electronic voting.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Conduct of Elections Rules 1961, Rule 49A, 49M, 49X; Subramanian Swamy v. ECI (2013) 10 SCC 446',
        excerpt: 'VVPAT slip displays candidate serial number, name, and symbol for 7 seconds before dropping into sealed box.',
      },
      {
        id: 'CLM-T22-05-02',
        statement: 'In Association for Democratic Reforms (ADR) v. Election Commission of India (2024), a two-judge bench of the Supreme Court unanimously rejected the demand to revert to paper ballots or mandate 100% VVPAT paper slip matching, upholding the integrity of the standalone non-networked Electronic Voting Machine (EVM) system while directing: (1) sealing and storing of Symbol Loading Units (SLU) in strongrooms for 45 days, and (2) enabling candidates who place 2nd or 3rd to request technical verification of 5% EVM microcontrollers per assembly segment.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Association for Democratic Reforms v. Election Commission of India (2024) INSC 341',
        excerpt: 'SC 2024 ADR ruling upholds EVM-VVPAT integrity, rejects paper ballots, orders 45-day SLU sealing and 5% microcontroller verification on request.',
      },
      {
        id: 'CLM-T22-05-03',
        statement: 'Electronic Voting Machines (EVMs) in India, manufactured exclusively by Bharat Electronics Limited (BEL) and Electronics Corporation of India Limited (ECIL), are standalone, air-gapped, battery-operated devices with One-Time Programmable (OTP) masked microcontrollers that have no wireless, Bluetooth, internet, or external communication capabilities.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ECI Manual on Electronic Voting Machine (EVM) and VVPAT (2023 Edition)',
        excerpt: 'EVMs are standalone, non-networked, air-gapped devices manufactured by BEL and ECIL with OTP microcontrollers.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Ballot Box Stuffing to Standalone Cryptographic Verifiability',
        body: 'For the first four decades of Indian democracy, elections relied on paper ballot sheets. This era was plagued by booth capturing, physical ballot stuffing, prolonged manual counting delays, and thousands of rejected invalid ballots. The introduction of **Electronic Voting Machines (EVMs)** in a pilot in 1982 (Paravur, Kerala) and their universal rollout across all parliamentary constituencies in the 2004 General Elections revolutionized Indian democracy by eliminating invalid votes and physical ballot hijacking.\n\nTo bridge the gap between digital counting and physical voter verifiability, the **Voter Verifiable Paper Audit Trail (VVPAT)** was mandated by the Supreme Court in 2013, creating a dual-layered audit system that guarantees the integrity of every cast vote.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Architecture of the Indian EVM-VVPAT System',
        body: 'The Indian EVM system comprises three interconnected standalone units:\n\n```\n[ Balloting Unit (BU) ]  <───>  [ VVPAT Unit ]  <───>  [ Control Unit (CU) ]\n(Voter presses button)      (Displays paper slip        (Presiding Officer activates;\n                             for 7 seconds & drops)      records & tallies vote totals)\n```\n\n### Core Engineering & Security Features\n1. **Air-Gapped & Non-Networked:** EVMs operate on independent battery power. They possess **zero network interfaces** (no Wi-Fi, no Bluetooth, no cellular modems, no internet connectivity).\n2. **One-Time Programmable (OTP) Microcontrollers:** The firmware is burned permanently into the microcontrollers during manufacturing at BEL / ECIL and cannot be modified, reprogrammed, or rewritten.\n3. **Randomization Process:**\n   * **First Randomization:** EVMs allocated randomly from district warehouse to assembly constituencies using computerized software in the presence of recognized political party representatives.\n   * **Second Randomization:** EVMs allocated randomly to specific polling stations just prior to poll day.\n4. **Mock Poll Protocol:** A mandatory mock poll of at least 50 votes is conducted by the Presiding Officer on election morning in the presence of polling agents of all candidates, and mock poll certificates are signed.',
        order: 2,
      },
      {
        type: 'CASE_LAW',
        title: 'Subramanian Swamy (2013) & ADR v. ECI (2024) Supreme Court Rulings',
        body: '### 1. Subramanian Swamy v. ECI (2013)\nThe Supreme Court ruled that a "paper trail is an indispensable requirement of free and fair elections" because it enables a voter to verify that their vote was recorded accurately. The court directed the Union Government to provide necessary financial support to equip all EVMs with VVPAT units.\n\n### 2. Mandatory 5 Polling Station Verification (2019 SC Order)\nIn 2019, the Supreme Court directed the ECI to increase the physical verification of VVPAT slips from 1 polling station per assembly constituency to **5 randomly selected polling stations per assembly constituency / segment**.\n\n### 3. Association for Democratic Reforms (ADR) v. ECI (April 2024)\nA two-judge bench (Justice Sanjiv Khanna and Justice Dipankar Datta) dismissed petitions seeking 100% VVPAT slip counting or a return to paper ballots, holding:\n* EVMs have proven to be robust, secure, and resilient against tampering.\n* **Symbol Loading Units (SLU)** used to load candidate names and symbols into VVPATs must be sealed in containers and stored in the strongroom along with EVMs for **at least 45 days** post-election declaration.\n* Candidates securing 2nd or 3rd positions can submit a written request within 7 days of results to verify the microcontroller firmware of **up to 5% of EVMs** per assembly segment, with verification costs paid by the candidate (refundable if tampering is detected).',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Determinants of Voting Behavior & ECI Digital Platforms',
        body: '### Determinants of Voting Behavior in India\nIndian voting behavior is shaped by an ongoing interplay between traditional primordial identities and emerging performance metrics:\n\n1. **Caste & Sub-Caste (*Jati* Networks):** Mobilization around social identity, community coalitions, and representation.\n2. **Governance & Welfare Delivery (*Labharthi* Phenomenon):** Direct Benefit Transfer (DBT), subsidized food security, housing, and infrastructure influencing voting choices regardless of traditional caste lines.\n3. **Gender Participation & The Silent Voter Surge:** Significant increase in female voter turnout, creating an independent women voter constituency focused on safety, prohibition, welfare pensions, and LPG subsidies.\n4. **Leadership & National Narrative:** The role of prime ministerial / chief ministerial face in presidential-style electoral campaigns.\n\n### ECI Digital Governance Platforms\n* **cVIGIL App:** Mobile application allowing citizens to report Model Code of Conduct (MCC) violations with geo-tagged photographic evidence, guaranteeing response within 100 minutes.\n* **ENCORE (Enabling Communications on Real-time Environment):** Comprehensive software suite for Returning Officers to manage candidate nomination, scrutiny, voter turnout trends, and round-wise counting.\n* **Suvidha Portal:** Single-window digital interface for political parties and candidates to request rally permissions, vehicle permits, and campaign venue allocations on a first-come, first-served basis.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Electoral Law & EVM Technology',
        body: '1. **VVPAT Display Time:** The paper slip is visible to the voter through the transparent glass for **7 seconds** before it is cut automatically and falls into the sealed drop box.\n2. **Manufacturer of EVMs:** Indian EVMs are produced exclusively by two public sector undertakings: **Bharat Electronics Limited (BEL, Bangalore)** and **Electronics Corporation of India Limited (ECIL, Hyderabad)**.\n3. **Current VVPAT Audit Standard:** Physical VVPAT slip matching is mandatory for **5 randomly selected polling stations** per assembly constituency / segment.\n4. **Rule 49MA (Test Vote):** If a voter alleges that their VVPAT slip displayed a different candidate than the one selected, the Presiding Officer can conduct a test vote after warning the voter of criminal penalty under Section 177 IPC / BNS if the complaint is found to be false.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Elections, Electoral Reforms & Representation of the People Act',
        notes: 'Covers EVM-VVPAT constitutional validity, ADR 2024 Supreme Court verdict, and tech-driven electoral integrity.',
        frequentTraps: 'Believing that EVMs can be hacked via Wi-Fi; Indian EVMs are strictly air-gapped standalone devices with OTP microcontrollers.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Elections in India: Voting Behavior, ECI, EVM/VVPAT & Digital Platforms',
        notes: 'Covers ECI digital tools (cVIGIL, ENCORE) and voting behavior patterns in Rajasthan.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'EVM = Standalone air-gapped OTP microcontroller (BEL/ECIL). VVPAT = 7-second slip (Subramanian Swamy 2013). ADR v. ECI (2024) = SC upheld EVM integrity, rejected paper ballots, ordered 45-day SLU sealing and 5% microcontroller audit on request. VVPAT audit = 5 polling booths per assembly segment.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Indian elections use standalone non-networked EVMs (BU, VVPAT, CU) manufactured by BEL and ECIL. VVPAT displays a 7-second slip. In ADR v. ECI (2024), the Supreme Court rejected reverting to paper ballots, confirmed EVM security, mandated 45-day strongroom storage of Symbol Loading Units, and allowed 2nd/3rd place candidates to request 5% microcontroller verification. Digital tools include cVIGIL (100-min response), ENCORE, and Suvidha.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. EVM Architecture: Balloting Unit (BU) -> VVPAT Unit -> Control Unit (CU). No wireless/internet capabilities.\n2. Security Protocols: 2-stage randomization, mandatory 50-vote mock poll with party agents.\n3. Landmark SC Jurisprudence:\n   - *Subramanian Swamy (2013)*: Mandated VVPAT.\n   - *2019 SC Order*: 5 randomly selected polling stations per assembly constituency.\n   - *ADR v. ECI (2024)*: Rebuffed 100% counting / paper ballot return; mandated 45-day SLU sealing and 5% candidate-requested audit.\n4. Voting Behavior: Caste identity vs DBT welfare delivery (*Labharthi*) and women voter turnout surge.\n5. Digital ECI Stack: cVIGIL (MCC violations), ENCORE (counting), Suvidha (campaign permissions).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the landmark case of Association for Democratic Reforms (ADR) v. Election Commission of India (April 2024), what major directive did the Supreme Court issue regarding the post-poll security of the electoral apparatus?',
        options: [
          'It ordered 100% physical counting of all VVPAT paper slips alongside EVM electronic tallies',
          'It directed that Symbol Loading Units (SLUs) must be sealed and stored in strongrooms for at least 45 days, and enabled candidates placing 2nd or 3rd to seek technical verification of 5% microcontrollers per assembly segment',
          'It mandated a complete return to paper ballot voting for all future Lok Sabha elections',
          'It ordered the transfer of EVM manufacturing from BEL and ECIL to private international corporations',
        ],
        correctAnswer: 'It directed that Symbol Loading Units (SLUs) must be sealed and stored in strongrooms for at least 45 days, and enabled candidates placing 2nd or 3rd to seek technical verification of 5% microcontrollers per assembly segment',
        explanation: 'In ADR v. ECI (April 2024), the Supreme Court upheld the integrity of the EVM-VVPAT system, rejected paper ballots, and issued twin directives: (1) seal and store Symbol Loading Units in strongrooms for 45 days, and (2) permit 2nd/3rd placed candidates to request verification of 5% EVM microcontrollers per assembly segment within 7 days of results.',
        trapExplanation: 'Candidates often misremember the verdict as ordering 100% VVPAT counting, whereas the Supreme Court explicitly rejected 100% counting and upheld the existing 5-booth sample audit.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 4. CON-T20-05 (LEG-POL-018): NATIONAL INTEGRATION & INTERNAL SECURITY
  // =========================================================================
  {
    id: 'CON-T20-05',
    topicOrder: 20,
    topicSlug: 'emergency-provisions-and-federal-crisis',
    topicTitle: 'Emergency Provisions & Federal Security Architecture',
    topicDescription: 'Constitutional emergency powers under Part XVIII (Articles 352–360), National Integration Council, Inter-State Council (Article 263), Article 355 Union duty, and the statutory internal security apparatus.',
    slug: 'national-integration-mechanisms-inter-state-council-internal-security-framework',
    title: 'National Integration Mechanisms, Inter-State Council & Internal Security Framework',
    shortDefinition: 'Constitutional and institutional mechanisms for national integration: National Integration Council (1961), Inter-State Council (Article 263, established 1990), Zonal Councils (States Reorganisation Act 1956), Union duty under Article 355, Central Armed Police Forces (CAPF), and statutory internal security frameworks (NIA Act, UAPA, AFSPA).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T20-05-01',
        statement: 'Under Article 263 of the Constitution, the President is empowered to establish an Inter-State Council to investigate and advise upon disputes between States and discuss subjects of common interest; following the recommendations of the Sarkaria Commission, the Inter-State Council was formally constituted by Presidential Order on May 28, 1990, chaired by the Prime Minister and comprising Chief Ministers of all States and Union Territories with legislatures and 6 Union Cabinet Ministers.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 263; Presidential Order No. F. 19/1/90-ISC (May 28, 1990)',
        excerpt: 'Inter-State Council established under Art 263 on 28 May 1990 based on Sarkaria Commission recommendations, chaired by PM.',
      },
      {
        id: 'CLM-T20-05-02',
        statement: 'Zonal Councils are statutory (not constitutional) bodies established under Part III of the States Reorganisation Act 1956, dividing India into five zones (Northern, Central, Eastern, Western, and Southern), each chaired by the Union Home Minister, with the Chief Ministers of the member States acting as Vice-Chairmen by annual rotation to promote inter-state cooperation and national integration.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'States Reorganisation Act 1956, Sections 15-22; North-Eastern Council Act 1971',
        excerpt: 'Zonal Councils are statutory bodies under States Reorganisation Act 1956, chaired by Union Home Minister.',
      },
      {
        id: 'CLM-T20-05-03',
        statement: 'Article 355 of the Constitution imposes a mandatory constitutional duty on the Union to protect every State against external aggression and internal disturbance, and to ensure that the government of every State is carried on in accordance with the provisions of the Constitution, providing the legal foundation for the deployment of Central Armed Police Forces (CAPF) and the National Investigation Agency (NIA).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 355; Naga People\'s Movement of Human Rights v. Union of India (1998) 2 SCC 109',
        excerpt: 'Article 355 imposes duty on Union to protect States against external aggression and internal disturbance.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Balancing State Police Jurisdiction with National Federal Security',
        body: 'In the constitutional design of the Seventh Schedule, **Public Order** and **Police** are assigned exclusively to State Legislatures under List II (Entries 1 and 2). However, challenges like cross-border terrorism, left-wing extremism, communal flare-ups, and inter-state insurgencies transcend state boundaries.\n\nTo preserve national unity without destroying the federal balance, the Constitution provides dual mechanisms: (1) **Consultative Federal Institutions** (Inter-State Council under Article 263, Zonal Councils, National Integration Council) to build political consensus, and (2) **Constitutional & Statutory Security Powers** (Article 355, NIA Act, CAPF deployment, UAPA) enabling the Union to assist or intervene when state administrative machinery faces existential security threats.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Institutional Architecture of National Integration',
        body: '### 1. Inter-State Council (Article 263) — Constitutional Body\n* **Constitutional Basis:** Article 263 empowers the President to create the Council if public interest is served.\n* **Establishment:** Set up on **May 28, 1990** upon the recommendation of the Sarkaria Commission.\n* **Composition:**\n  - **Chairman:** Prime Minister of India.\n  - **Members:** Chief Ministers of all States and UTs with Assemblies, Administrators of UTs without Assemblies, and 6 Union Cabinet Ministers nominated by the PM.\n* **Standing Committee:** Chaired by the Union Home Minister with 5 Union Cabinet Ministers and 9 Chief Ministers.\n* **Mandate:** Inquiring into disputes between States, investigating subjects of common interest, and deliberating policy coordination.\n\n### 2. Zonal Councils (States Reorganisation Act 1956) — Statutory Bodies\n* **Status:** Created under Part III of the *States Reorganisation Act 1956* (NOT a constitutional body).\n* **Five Zones:** Northern, Central, Eastern, Western, and Southern.\n* **Leadership:**\n  - **Chairman:** Union Home Minister (common chairman for all five Zonal Councils).\n  - **Vice-Chairman:** Chief Ministers of member States by annual rotation.\n* **North Eastern Council (NEC):** Created separately under the *North Eastern Council Act 1971* covering the 8 North-Eastern states (Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, and Sikkim added in 2002).\n\n### 3. National Integration Council (NIC)\n* **Origin:** Constituted in **1961 by Prime Minister Jawaharlal Nehru** following the National Integration Conference.\n* **Role:** Extra-constitutional advisory body to address communalism, casteism, regionalism, and linguistic chauvinism.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Internal Security Statutory Stack & Article 355',
        body: '### Article 355: The Protective Duty of the Union\nArticle 355 acts as the constitutional bridge between peace-time federalism and emergency intervention. It imposes a two-fold duty on the Union:\n1. Protect every State against **external aggression and internal disturbance**.\n2. Ensure that state governance is conducted **in accordance with the Constitution**.\n\n### The Statutory Internal Security Apparatus\n\n| Statutory Instrument | Enactment / Amendments | Core Powers & Operational Mandate |\n| :--- | :--- | :--- |\n| **National Investigation Agency (NIA) Act** | 2008 (Amended 2019) | Specialized central counter-terror agency with suo motu concurrent jurisdiction to investigate scheduled offenses across India without state consent; 2019 amendment added extra-territorial jurisdiction for crimes committed against Indian interests abroad. |\n| **Unlawful Activities (Prevention) Act (UAPA)** | 1967 (Amended 2004, 2008, 2012, 2019) | Primary anti-terror legislation; 2019 amendment empowers Union Government to designate **individuals as terrorists** (previously only organizations) and authorizes NIA Director General to approve property attachment. |\n| **Armed Forces (Special Powers) Act (AFSPA)** | 1958 | Authorizes Governor / Central Government to declare an area as "Disturbed Area" (Section 3); grants armed forces search, seizure, and arrest powers with prior sanction requirement for prosecution under Section 6. |',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Inter-State Council (Art 263) vs Zonal Councils (1956 Act)',
        body: '| Feature | Inter-State Council | Zonal Councils |\n| :--- | :--- | :--- |\n| **Origin & Nature** | Constitutional Body (Article 263) | Statutory Body (States Reorganisation Act 1956) |\n| **Chairman** | Prime Minister of India | Union Home Minister |\n| **Geographical Scope** | National (all States and UTs) | Regional (divided into 5 geographic zones + NEC) |\n| **Vice-Chairman** | None (PM presides) | Chief Ministers of member States rotate annually |\n| **Advisory Scope** | Macro-federal policies and Inter-State disputes | Regional transport, river waters, linguistic minorities, border disputes |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps & High-Yield Distinction Points',
        body: '1. **Zonal Councils Are NOT Constitutional:** A classic examiner trap is claiming Zonal Councils are created under Article 263. They are purely **statutory bodies created by Section 15 of the States Reorganisation Act 1956**.\n2. **Chairman of Zonal Councils:** The Chairman of all five Zonal Councils is the **Union Home Minister**, NOT the Prime Minister.\n3. **Chairman of Inter-State Council:** The Chairman of the Inter-State Council is the **Prime Minister**.\n4. **Article 355 vs 356:** Article 355 is a general duty of protection; it does not automatically dissolve state assemblies. Article 356 is the specific mechanism for President\'s Rule when constitutional machinery fails.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Inter-State Relations & Internal Security Architecture',
        notes: 'Covers Article 263 Inter-State Council, Zonal Councils, Article 355, and federal internal security agencies (NIA/UAPA).',
        frequentTraps: 'Confusing the chairmanship of Inter-State Council (Prime Minister) with Zonal Councils (Union Home Minister).',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Federal Framework: Zonal Councils (Northern Zonal Council - Rajasthan) & Inter-State Coordination',
        notes: 'Rajasthan is a member of the **Northern Zonal Council** (along with Punjab, Haryana, Himachal Pradesh, J&K, Ladakh, Delhi, and Chandigarh).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Inter-State Council = Art 263 (Est. 1990 Sarkaria), Chaired by PM. Zonal Councils = Statutory (1956 Act), 5 zones, Chaired by Home Minister. RJ is in Northern Zonal Council. Art 355 = Duty of Union to protect States against external aggression/internal disturbance. NIA (2008/2019) = Extra-territorial counter-terror jurisdiction.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'National integration relies on the constitutional Inter-State Council (Article 263, chaired by the PM, est. 1990) and five statutory Zonal Councils (States Reorganisation Act 1956, chaired by the Home Minister; RJ is in Northern Zone). Article 355 mandates the Union to protect states from external aggression and internal disturbance, anchoring central security apparatuses like CAPF, NIA, and UAPA.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Consultative Federal Bodies:\n   - Inter-State Council: Art 263, PM Chairman, all CMs + 6 Cabinet Ministers.\n   - Zonal Councils: Statutory (1956 Act), 5 zones, Union Home Minister Chairman, rotating CM Vice-Chair.\n   - North Eastern Council: Statutory (NEC Act 1971), 8 states.\n   - National Integration Council: Extra-constitutional (1961 Nehru).\n2. Constitutional Security Powers:\n   - Article 355: Union duty to protect states against external aggression and internal disturbance.\n3. Statutory Security Stack: NIA Act 2008/2019 (suo motu cross-border jurisdiction), UAPA 1967/2019 (individual terrorist designation), AFSPA 1958 (Disturbed Areas).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements correctly distinguishes the Inter-State Council from the Zonal Councils in India?',
        options: [
          'The Inter-State Council is a statutory body chaired by the Home Minister, while Zonal Councils are constitutional bodies chaired by the Prime Minister',
          'The Inter-State Council is a constitutional body under Article 263 chaired by the Prime Minister, while Zonal Councils are statutory bodies under the States Reorganisation Act 1956 chaired by the Union Home Minister',
          'Both are constitutional bodies established under Article 263 and chaired by the President of India',
          'Both are extra-constitutional advisory bodies established by executive resolutions of NITI Aayog',
        ],
        correctAnswer: 'The Inter-State Council is a constitutional body under Article 263 chaired by the Prime Minister, while Zonal Councils are statutory bodies under the States Reorganisation Act 1956 chaired by the Union Home Minister',
        explanation: 'Article 263 provides for the constitutional establishment of the Inter-State Council (chaired by the Prime Minister), whereas Zonal Councils are statutory bodies established under Part III of the States Reorganisation Act 1956 and chaired by the Union Home Minister.',
        trapExplanation: 'Examiners frequently test the contrast between constitutional status (Art 263 for ISC) versus statutory status (1956 Act for Zonal Councils) and their respective chairpersons (PM vs Home Minister).',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 5. CON-T04-09 (LEG-POL-028): OFFICIAL LANGUAGE & CONSTITUTIONAL MORALITY
  // =========================================================================
  {
    id: 'CON-T04-09',
    topicOrder: 4,
    topicSlug: 'schedules-of-the-indian-constitution',
    topicTitle: 'Schedules of the Indian Constitution & Language Scheme',
    topicDescription: 'Constitutional Schedules 1 to 12, Eighth Schedule linguistic architecture, Part XVII Official Language Scheme (Articles 343–351), and the doctrine of Constitutional Morality.',
    slug: 'official-language-constitutional-scheme-part-xvii-special-directives-constitutional-morality',
    title: 'Official Language Constitutional Scheme (Part XVII), Special Linguistic Directives & Constitutional Morality',
    shortDefinition: 'Constitutional architecture of Official Language under Part XVII (Articles 343–351), Official Languages Act 1963/1967 bilingual compromise, language of superior judiciary (Article 348), special directives for primary education in mother tongue (Article 350A) and Linguistic Minorities Commissioner (Article 350B), and the foundational doctrine of Constitutional Morality (Ambedkar to Navtej Johar and NCT Delhi).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T04-09-01',
        statement: 'Under Article 343(1) of the Constitution, the official language of the Union is Hindi in Devanagari script, with the international form of Indian numerals for official purposes; by virtue of the Official Languages Act 1963 (amended in 1967), the English language continues to be used alongside Hindi for all official purposes of the Union and for parliamentary proceedings indefinitely.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 343; Official Languages Act 1963 (Act No. 19 of 1963), Section 3',
        excerpt: 'Official language of Union is Hindi in Devanagari script; English continued indefinitely under Official Languages Act 1963/1967.',
      },
      {
        id: 'CLM-T04-09-02',
        statement: 'Under Article 348(1), until Parliament by law otherwise provides, all proceedings in the Supreme Court and in every High Court, as well as authoritative texts of all Bills, Acts, Ordinances, and statutory orders, shall be in the English language; under Article 348(2), the Governor with previous consent of the President may authorize the use of Hindi or another official language in High Court proceedings (excluding judgments, decrees, and orders).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 348(1) and 348(2)',
        excerpt: 'Article 348 mandates English for Supreme Court and High Courts; Governor with President consent can permit Hindi in HC proceedings.',
      },
      {
        id: 'CLM-T04-09-03',
        statement: 'The Special Directives under Part XVII include: Article 350 (right to submit grievance representations in any language used in the Union/State), Article 350A (duty of State to provide primary education in mother tongue to linguistic minorities, added by 7th CAA 1956), Article 350B (Special Officer for Linguistic Minorities appointed by the President, added by 7th CAA 1956), and Article 351 (Directive for the development and enrichment of the Hindi language drawing primarily from Sanskrit).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Articles 350, 350A, 350B, 351; 7th Constitutional Amendment Act 1956',
        excerpt: 'Part XVII Special Directives: Art 350 (grievance language), Art 350A (mother tongue in primary education), Art 350B (Linguistic Minorities Officer), Art 351 (Hindi development).',
      },
      {
        id: 'CLM-T04-09-04',
        statement: 'The doctrine of Constitutional Morality, originally articulated by Dr. B.R. Ambedkar in the Constituent Assembly on November 4, 1948 (citing George Grote) and revitalized by Constitution Benches of the Supreme Court (e.g. Manoj Narula 2014, Navtej Singh Johar 2018, Govt of NCT of Delhi 2018, Sabarimala 2018), mandates strict fidelity to constitutional values, institutional self-restraint, protection of pluralistic minority rights, and checks against majoritarian populist overreach.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constituent Assembly Debates (Nov 4, 1948); Navtej Singh Johar v. Union of India (2018) 10 SCC 1; Govt. of NCT of Delhi v. Union of India (2018) 8 SCC 501',
        excerpt: 'Constitutional Morality: Ambedkar doctrine revitalized by SC — institutional self-restraint, pluralism, and fidelity to constitutional values over popular morality.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Munshi-Ayyangar Formula & Linguistic Pluralism',
        body: 'The linguistic debate in the Constituent Assembly was among the most intensely contested issues during the making of the Indian Constitution. Proponents of Hindi as the sole national language clashed with representatives from non-Hindi-speaking southern and eastern states who feared political and administrative marginalization.\n\nThe deadlock was resolved through the celebrated **Munshi-Ayyangar Formula**, codified in **Part XVII (Articles 343–351)**. Rather than declaring a single "National Language", India designated **Hindi in Devanagari script** as the **Official Language of the Union**, while permitting English for a transitional 15-year period. When that period expired in 1965, the *Official Languages Act 1963 (amended 1967)* established an open-ended bilingual compromise, preserving national unity across India\'s linguistic mosaic.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Constitutional Architecture of Part XVII (Official Language)',
        body: 'Part XVII is divided into four distinct chapters governing Union language, regional languages, superior courts, and special directives:\n\n### 1. Language of the Union (Articles 343–344)\n* **Article 343:** Official language of the Union is Hindi in Devanagari script. Numerals for official purposes must be the **international form of Indian numerals** (1, 2, 3... not Devanagari numerals).\n* **Article 344:** Mandates the appointment of an Official Language Commission (first chaired by **B.G. Kher in 1955**) and a Parliamentary Committee on Official Language (chaired by **Govind Ballabh Pant in 1957**) to review progress.\n\n### 2. Regional Languages (Articles 345–347)\n* **Article 345:** State Legislatures may adopt any one or more languages in use in the State, or Hindi, as the official language(s) of that State.\n* **Article 346:** The language authorized for Union official purposes (currently English/Hindi) is the official language for communication between States, and between a State and the Union.\n* **Article 347:** President may direct that a language spoken by a substantial proportion of a state\'s population be officially recognized within that state.\n\n### 3. Language of Superior Courts & Legislation (Article 348)\n* **Article 348(1):** Authoritative texts of all proceedings in the **Supreme Court and High Courts**, and all Bills, Acts, Ordinances, and Rules, must be in **English**.\n* **Article 348(2):** The Governor of a State, with the **prior consent of the President**, may authorize the use of Hindi or the State\'s official language in High Court proceedings (though judgments, decrees, and orders must still be translated/accompanied by English texts).',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Special Directives & The Eighth Schedule',
        body: '### Special Directives for Linguistic Protection\n1. **Article 350:** Every person has the right to submit a representation for the redress of any grievance to any officer or authority in **any of the languages used in the Union or the State** (cannot be rejected on linguistic grounds).\n2. **Article 350A (Added by 7th CAA 1956):** Imposes a positive obligation on every State and local authority to provide adequate facilities for instruction in the **mother tongue at the primary stage of education** to children belonging to linguistic minority groups.\n3. **Article 350B (Added by 7th CAA 1956):** Provides for a **Special Officer for Linguistic Minorities** (Commissioner for Linguistic Minorities, headquartered in Prayagraj / Allahabad with regional offices in Belgaum, Chennai, and Kolkata), appointed by the President to investigate and report on constitutional safeguards.\n4. **Article 351:** A directive to the Union to promote the spread and development of the **Hindi language**, drawing its vocabulary primarily from **Sanskrit** and secondarily from other languages specified in the Eighth Schedule.\n\n### The Eighth Schedule Evolution (22 Languages)\n* **Original 1950 Constitution:** 14 languages.\n* **21st Amendment Act (1967):** Added **Sindhi** (15th language).\n* **71st Amendment Act (1992):** Added **Konkani, Manipuri, Nepali** (16th, 17th, 18th languages — mnemonic *KMN*).\n* **92nd Amendment Act (2003):** Added **Bodo, Dogri, Maithili, Santhali** (19th, 20th, 21st, 22nd languages — mnemonic *BDMS*).',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'The Doctrine of Constitutional Morality',
        body: '### Origin: Ambedkar\'s Assembly Exposition (Nov 4, 1948)\nIntroducing the Draft Constitution, Dr. B.R. Ambedkar quoted historian George Grote to explain that **Constitutional Morality** is not a natural sentiment but must be cultivated. It signifies paramount reverence for the forms of the Constitution, enforcement of constitutional norms, and self-restraint by the majority against overriding minority rights or subverting institutional checks.\n\n### Modern Judicial Revitalization by the Supreme Court\n\n| Landmark Judgment | Core Doctrinal Application of Constitutional Morality |\n| :--- | :--- |\n| **Manoj Narula v. Union of India (2014)** | The Prime Minister and Chief Ministers bear a constitutional duty under constitutional morality to avoid appointing persons facing grave criminal charges to the Council of Ministers. |\n| **Navtej Singh Johar v. UOI (2018)** | **Constitutional Morality vs Popular Morality:** Section 377 IPC unconstitutional. The Court held that fundamental rights of minorities cannot be subjected to majoritarian public sentiment or popular morality. |\n| **Govt. of NCT of Delhi v. UOI (2018)** | Constitutional Morality requires the Lieutenant Governor and the elected Council of Ministers to act with mutual respect, institutional self-restraint, and collaborative federalism. |\n| **Indian Young Lawyers Association (Sabarimala, 2018)** | Freedom of religion (Article 25) is subject to the overarching principles of individual dignity, gender equality, and Constitutional Morality over rigid customary exclusions. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Official Language & Constitutional Morality',
        body: '1. **National Language Fallacy:** The Constitution of India **does NOT declare a National Language** (*Rashtrabhasha*); Hindi is the *Official Language of the Union* (*Rajbhasha*) under Article 343.\n2. **Numerals Trap:** Article 343(1) explicitly mandates the **international form of Indian numerals** (1, 2, 3...), NOT Devanagari numerals (१, २, ३...).\n3. **Articles 350A and 350B:** Both articles were NOT in the original 1950 text; they were inserted by the **7th Constitutional Amendment Act 1956** on the recommendation of the States Reorganisation Commission (SRC).\n4. **Judicial Language:** High Court proceedings in Hindi/regional language require the **prior consent of the President**, and authoritative judgments remain in English under Article 348.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Part XVII Official Language, Linguistic Minorities & Constitutional Morality',
        notes: 'Covers Articles 343-351, 8th Schedule amendments (21st, 71st, 92nd CAAs), and Constitutional Morality vs Popular Morality jurisprudence.',
        frequentTraps: 'Confusing Article 350A (primary education in mother tongue) with Article 350B (Special Officer for Linguistic Minorities).',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Constitutional Provisions: Part XVII Official Language & Constitutional Morality Doctrine',
        notes: 'Tested in RAS Prelims (Articles 343, 348, 350A) and RAS Mains Paper III.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Part XVII = Official Language (Arts 343–351). Hindi is Official Language of Union (Art 343, international numerals); English continued indefinitely (1963/1967 Act). Art 348 = Superior courts in English. Art 350A = Mother tongue in primary schooling. Art 350B = Linguistic Minorities Officer. 8th Schedule = 22 languages (14 -> +Sindhi 21st -> +KMN 71st -> +BDMS 92nd). Constitutional Morality (Ambedkar / Navtej Johar) = Constitutional values over popular majoritarianism.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Part XVII (Articles 343–351) governs the Official Language framework. Hindi in Devanagari script with international numerals is the Union Official Language, with English continued under the 1963 Act. Superior court proceedings require English under Article 348. The 7th CAA 1956 added Article 350A (mother tongue primary education) and Article 350B (Linguistic Minorities Commissioner). Constitutional Morality, introduced by Ambedkar and applied in Navtej Johar and NCT Delhi, mandates fidelity to constitutional values over popular majoritarian morality.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Union Language: Art 343 (Hindi + international numerals), Art 344 (Language Commission: B.G. Kher 1955).\n2. Regional Languages: Art 345 (State language), Art 346 (Inter-state communication).\n3. Judiciary Language: Art 348 (English mandatory for SC/HC; Governor + President consent for Hindi in HC).\n4. Special Directives: Art 350 (Grievance language), Art 350A (Mother tongue primary education - 7th CAA), Art 350B (Linguistic Minorities Officer - 7th CAA), Art 351 (Directive to develop Hindi).\n5. 8th Schedule: 22 languages (21st CAA 1967 Sindhi; 71st CAA 1992 Konkani, Manipuri, Nepali; 92nd CAA 2003 Bodo, Dogri, Maithili, Santhali).\n6. Constitutional Morality: Ambedkar (1948) -> Manoj Narula (2014) -> Navtej Johar (2018) -> NCT Delhi (2018).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which Constitutional Amendment Act inserted Article 350A (facilities for instruction in mother tongue at primary stage) and Article 350B (Special Officer for Linguistic Minorities) into the Constitution of India?',
        options: [
          '1st Constitutional Amendment Act, 1951',
          '7th Constitutional Amendment Act, 1956',
          '42nd Constitutional Amendment Act, 1976',
          '44th Constitutional Amendment Act, 1978',
        ],
        correctAnswer: '7th Constitutional Amendment Act, 1956',
        explanation: 'Both Article 350A (obligation to provide mother-tongue education at primary stage for linguistic minorities) and Article 350B (Special Officer for Linguistic Minorities) were inserted into Part XVII of the Constitution by the 7th Constitutional Amendment Act, 1956, following the recommendations of the States Reorganisation Commission (SRC).',
        trapExplanation: 'Candidates often confuse the 7th CAA (1956) with the 42nd CAA (1976) for minor constitutional insertions, but linguistic minority safeguards were part of the 1956 reorganization package.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // 6. CON-T19-06 (LEG-POL-039): INTER-STATE WATER DISPUTES & SUB-CLASSIFICATION
  // =========================================================================
  {
    id: 'CON-T19-06',
    topicOrder: 19,
    topicSlug: 'centre-state-relations-and-federalism',
    topicTitle: 'Centre-State Relations, Federal Finance & Inter-State Governance',
    topicDescription: 'Constitutional distribution of legislative, administrative, and financial powers under Part XI & XII, Inter-State River Water Disputes (Article 262), and affirmative action sub-classification jurisprudence.',
    slug: 'inter-state-river-water-disputes-boundary-adjudication-sub-classification-jurisprudence',
    title: 'Inter-State River Water Disputes (Article 262), Boundary Adjudication & Sub-Classification Jurisprudence',
    shortDefinition: 'Constitutional conflict-resolution mechanisms: Inter-State River Water Disputes Act 1956 under Article 262 (exclusive tribunal adjudication, ouster of Supreme Court original jurisdiction under Art 262(2)), original jurisdiction in boundary disputes under Article 131, 2nd Administrative Reforms Commission (ARC) conflict management blueprint, and affirmative action jurisprudence including the historic 7-judge Supreme Court Constitution Bench ruling in State of Punjab v. Davinder Singh (2024) permitting sub-classification of Scheduled Castes and Scheduled Tribes under Article 341/342 based on empirical backwardness.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T19-06-01',
        statement: 'Under Article 262 of the Constitution, Parliament enacted the Inter-State River Water Disputes (ISRWD) Act 1956, empowering the Union to establish ad-hoc tribunals for adjudicating disputes regarding the waters of inter-state rivers; under Article 262(2) and Section 11 of the Act, the original and appellate jurisdiction of the Supreme Court and all other courts regarding such disputes is completely barred (though the Supreme Court exercises exceptional jurisdiction via Special Leave Petitions under Article 136).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 262; Inter-State River Water Disputes Act 1956, Sections 3, 4, 11',
        excerpt: 'Article 262 bars Supreme Court jurisdiction over inter-state river water disputes; adjudication vested in statutory tribunals.',
      },
      {
        id: 'CLM-T19-06-02',
        statement: 'In State of Punjab v. Davinder Singh (2024), a 7-judge Constitution Bench of the Supreme Court, by a 6:1 majority, overruled the earlier 5-judge bench decision in E.V. Chinnaiah (2005), holding that State Governments are constitutionally empowered under Articles 15(4) and 16(4) to sub-classify Scheduled Castes and Scheduled Tribes for preferential reservation quotas, provided such sub-classification is supported by quantifiable empirical data demonstrating varying degrees of backwardness and does not result in 100% exclusion of any sub-group.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'State of Punjab v. Davinder Singh (2024) INSC 562; Overruling E.V. Chinnaiah v. State of A.P. (2005) 1 SCC 394',
        excerpt: 'SC 2024 7-judge bench permits sub-classification of SC/ST for quota benefits based on empirical data, overruling EV Chinnaiah 2005.',
      },
      {
        id: 'CLM-T19-06-03',
        statement: 'Inter-state boundary disputes (e.g. Maharashtra-Karnataka over Belagavi, Assam-Mizoram border dispute) fall under the exclusive Original Jurisdiction of the Supreme Court under Article 131, subject to the condition that the dispute involves a question on which the existence or extent of a legal right depends.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 131; State of Karnataka v. State of Maharashtra (Belagavi border suit)',
        excerpt: 'Inter-state territorial and boundary disputes fall under Supreme Court exclusive Original Jurisdiction under Article 131.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Challenge of Resource & Identity Conflicts in a Diverse Federation',
        body: 'A federal union of 28 States and 8 Union Territories inevitably generates deep structural flashpoints. These flashpoints broadly fall into two categories:\n\n1. **Natural Resource & Territorial Conflicts:** Shared river basins (e.g. Cauvery, Krishna, Godavari, Ravi-Beas) and inter-state territorial boundaries where upstream and downstream states have conflicting agricultural and industrial demands.\n2. **Socio-Political & Affirmative Action Conflicts:** Competing demands for reservation, inclusion, and sub-categorization within affirmative action frameworks.\n\nTo resolve these flashpoints peacefully, the Indian Constitution created specialized dispute resolution mechanisms: Article 262 tribunals for river waters, Article 131 original jurisdiction for territorial disputes, and Constitution Bench jurisprudence to harmonize equality rights under Articles 14–16 with group-specific backwardness.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Article 262 & Inter-State River Water Disputes Act 1956',
        body: 'Water is fundamentally a State List subject under **Entry 17 of List II** (subject to Entry 56 of List I, which gives Parliament power over the regulation of inter-state rivers in the public interest).\n\n### The Dual Framework of Article 262\n* **Article 262(1):** Parliament may by law provide for the adjudication of any dispute or complaint regarding the use, distribution, or control of the waters of any inter-state river or river valley.\n* **Article 262(2):** Parliament may by law enact that **neither the Supreme Court nor any other court shall exercise jurisdiction** in respect of any such dispute.\n\n### The Inter-State River Water Disputes (ISRWD) Act 1956\n1. **Tribunal Constitution:** When a State requests the Union Government and the Union is satisfied that the dispute cannot be settled through negotiations, the Union constitutes an ad-hoc Water Disputes Tribunal within 1 year.\n2. **Tribunal Composition:** Chaired by a sitting Supreme Court Judge or High Court Chief Justice, nominated by the Chief Justice of India.\n3. **Award Finality:** The award of the tribunal, once published in the Official Gazette, has the **same force as an order or decree of the Supreme Court**.\n4. **Ouster of Judicial Jurisdiction (Section 11):** Original suits in the Supreme Court are barred under Section 11. However, the Supreme Court in the *Cauvery Water Dispute (2018)* affirmed that it retains appellate oversight under **Article 136 (Special Leave Petition)** on questions of law and fundamental human right to drinking water.',
        order: 2,
      },
      {
        type: 'CASE_LAW',
        title: 'Sub-Classification Jurisprudence: State of Punjab v. Davinder Singh (2024)',
        body: '### The Legal Controversy (E.V. Chinnaiah 2005 vs Davinder Singh 2024)\nIn *E.V. Chinnaiah v. State of Andhra Pradesh (2005)*, a 5-judge bench ruled that the Scheduled Castes Presidential List under Article 341 forms a "monolithic, homogeneous class" that cannot be divided or sub-classified by States into sub-quotas (e.g. allocating specific percentages to Valmikis, Mazhabi Sikhs, or Madigas).\n\n### The Historic 7-Judge Bench Ruling (August 1, 2024)\nA 7-judge Constitution Bench headed by Chief Justice D.Y. Chandrachud overruled *E.V. Chinnaiah* by a **6:1 majority**, holding:\n\n1. **Sub-Classification Does NOT Alter Presidential List:** Articles 341(1) and 342(1) give the President and Parliament the exclusive power to designate castes/tribes in the schedule. Sub-classification for reservation under Articles 15(4) and 16(4) does not add or delete any caste from the Presidential List; it merely prioritizes the most disadvantaged within that list.\n2. **Substantive Equality Requires Internal Nuance:** The Court held that Scheduled Castes are not a homogeneous class; acute historical disparities exist within the SC umbrella.\n3. **Mandatory Quantifiable Empirical Data:** States cannot create arbitrary sub-classifications for political expediency. The State must produce **verifiable empirical data** proving that the sub-group is inadequately represented.\n4. **No 100% Exclusion:** States cannot allocate 100% of the reservation quota to one sub-group to the total exclusion of other sub-castes in the Presidential List.',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Inter-State Boundary Adjudication & 2nd ARC Conflict Resolution Blueprint',
        body: '### Inter-State Boundary Disputes (Article 131)\nBoundary disputes between constituent States (e.g. Maharashtra vs Karnataka over Belagavi, Assam vs Mizoram / Nagaland) are justiciable exclusively under the **Original Jurisdiction of the Supreme Court (Article 131)**.\n* Requires a legal dispute between the Government of India and one or more States, or between two or more States.\n* Must involve a question on which the existence or extent of a **legal right** depends (not purely political controversies).\n\n### 2nd Administrative Reforms Commission (ARC) Key Recommendations on Conflict Management\n* **Institutionalizing Inter-State Council:** The Inter-State Council should meet regularly (at least thrice a year) and serve as the primary pre-litigation dialogue forum for river and boundary disputes.\n* **Permanent Water Tribunal:** Replace ad-hoc tribunals with a permanent multi-bench Inter-State River Water Disputes Tribunal with time-bound statutory adjudication (within 2 years).\n* **National Water Data Bank:** Centralized transparent hydrological data repository managed by the Central Water Commission to eliminate state-level data disputes.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in River Disputes & Reservation Law',
        body: '1. **Jurisdiction Ouster under Art 262:** Unlike other inter-state disputes under Article 131, **Article 262 expressly authorizes the exclusion of the Supreme Court\'s original jurisdiction** over inter-state river water disputes.\n2. **Article 136 Window:** Even though original suits under Article 131 are barred for river water disputes, the Supreme Court can entertain **Special Leave Petitions (SLPs) under Article 136** against final tribunal awards (*Cauvery Water Disputes Tribunal 2018*).\n3. **Sub-Classification Current Law (2024):** In 2024 (*Davinder Singh*), the Supreme Court **permitted sub-classification of SC/STs** by states with empirical data, explicitly overruling the 2005 *E.V. Chinnaiah* ruling.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Inter-State River Water Disputes (Art 262), Federal Conflicts & Sub-Classification Jurisprudence',
        notes: 'Directly relevant for Mains 2024-2026 following the historic 7-judge Constitution Bench ruling in Davinder Singh (2024).',
        frequentTraps: 'Relying on the outdated 2005 EV Chinnaiah rule; as of August 2024, the Supreme Court permits sub-classification of SC/STs for reservations.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Centre-State Relations: River Water Disputes (Ravi-Beas / Yamuna / Narmada - Rajasthan context) & Social Justice',
        notes: 'Covers Rajasthan water allocations (Ravi-Beas Tribunal / Eradi Tribunal and Indira Gandhi Canal water sharing).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 262 = Inter-State River Water Disputes (1956 Act), SC original jurisdiction ousted (Art 262(2) & Sec 11), SLP under Art 136 remains. Art 131 = Inter-state boundary suits. State of Punjab v. Davinder Singh (7-judge bench, 2024) = SC overruled EV Chinnaiah (2005), permitting States to sub-classify SC/STs based on empirical backwardness data without altering Presidential list.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Article 262 governs inter-state river water disputes through the ISRWD Act 1956, establishing ad-hoc tribunals whose awards have the force of a Supreme Court decree while barring original court jurisdiction. Boundary disputes fall under Article 131 original jurisdiction. In State of Punjab v. Davinder Singh (2024), a 7-judge Supreme Court bench overruled EV Chinnaiah (2005), upholding the constitutional power of States to sub-classify SC/STs for reservation quotas supported by quantifiable empirical data.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. River Water Disputes (Art 262):\n   - Parliament enacted ISRWD Act 1956.\n   - Tribunals chaired by sitting SC/HC judges.\n   - Section 11 bars court original jurisdiction; Art 136 SLP remains open.\n2. Territorial Boundary Disputes:\n   - Article 131 Exclusive Original Jurisdiction of Supreme Court.\n3. SC/ST Sub-Classification Jurisprudence:\n   - *EV Chinnaiah (2005)*: SC held SCs are a homogeneous class; banned sub-classification.\n   - *State of Punjab v. Davinder Singh (2024)* (7-judge bench): Overruled Chinnaiah (6:1). Allowed sub-classification under Arts 15(4)/16(4) with empirical data, without altering Art 341/342 Presidential list.\n4. 2nd ARC Blueprint: Permanent water dispute tribunal, national water data bank, active Inter-State Council.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the landmark 7-judge Constitution Bench decision in State of Punjab v. Davinder Singh (August 2024), what was the Supreme Court\'s ruling regarding the sub-classification of Scheduled Castes for reservation benefits?',
        options: [
          'It held that Scheduled Castes are a monolithic homogeneous group and completely barred any sub-classification, upholding the 2005 E.V. Chinnaiah decision',
          'It overruled the 2005 E.V. Chinnaiah judgment and held that State Governments have the constitutional authority under Articles 15(4) and 16(4) to sub-classify Scheduled Castes based on quantifiable empirical data showing varying degrees of backwardness',
          'It declared all caste-based reservations unconstitutional under Article 14',
          'It held that only the President of India, and not the State Governments or Parliament, has the power to sub-classify Scheduled Castes',
        ],
        correctAnswer: 'It overruled the 2005 E.V. Chinnaiah judgment and held that State Governments have the constitutional authority under Articles 15(4) and 16(4) to sub-classify Scheduled Castes based on quantifiable empirical data showing varying degrees of backwardness',
        explanation: 'In State of Punjab v. Davinder Singh (August 1, 2024), a 7-judge Constitution Bench of the Supreme Court overruled E.V. Chinnaiah (2005) by a 6:1 majority, holding that States are constitutionally permitted under Articles 15(4) and 16(4) to sub-classify Scheduled Castes and Scheduled Tribes to ensure substantive equality, provided the sub-classification is backed by empirical data of backwardness.',
        trapExplanation: 'This is the most critical recent constitutional precedent (August 2024); older textbooks still state that sub-classification is barred under the overruled Chinnaiah ruling.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },
];

/**
 * Seeder execution function for Batch P7
 */
export async function seedBatchP7CanonicalKnowledge() {
  console.log(`Seeding Batch P7 Canonical Knowledge (${BATCH_P7_CONCEPTS.length} concepts)...`);

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

  // 2. Ensure Source exists
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
  console.log(`Seeding Batch P7 semantic units (${BATCH_P7_SEMANTIC_UNITS.length} units)...`);
  for (const sUnit of BATCH_P7_SEMANTIC_UNITS) {
    const coverageUnitId = `CU-${sUnit.semanticUnitId}`;
    const cu = await db.coverageUnit.upsert({
      where: { id: coverageUnitId },
      update: {
        status: 'PROCESSED',
        notes: `Batch P7 deepened Concept: ${sUnit.targetConceptId}`,
      },
      create: {
        id: coverageUnitId,
        sourceId: source.id,
        label: `${sUnit.semanticUnitId}: ${sUnit.title}`,
        scopeDescription: sUnit.scope,
        status: 'PROCESSED',
        notes: `Batch P7 deepened Concept: ${sUnit.targetConceptId}`,
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

  for (const cDef of BATCH_P7_CONCEPTS) {
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

    // Clear child relations for idempotent re-seeding
    await db.claim.deleteMany({ where: { conceptId: concept.id } });
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    await db.question.deleteMany({ where: { conceptId: concept.id } });

    // Seed Claims & Evidence
    for (const claimDef of cDef.claims) {
      const claim = await db.claim.create({
        data: {
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
      await db.contentBlock.create({
        data: {
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
        await db.examConceptMapping.create({
          data: {
            examId,
            conceptId: concept.id,
            relevance: em.relevance,
            priority: em.priority,
            requiredDepth: em.requiredDepth,
            syllabusUnit: em.syllabusUnit,
            notes: em.notes,
            frequentTraps: em.frequentTraps || null,
          },
        });
      }
    }

    // Seed Revision Units
    for (const ru of cDef.revisionUnits) {
      const ruId = `RU-${concept.id}-${ru.type}`;
      await db.revisionUnit.create({
        data: {
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
      await db.question.create({
        data: {
          id: qId,
          conceptId: concept.id,
          type: 'MULTIPLE_CHOICE',
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation || null,
          difficulty: q.difficulty,
          isPYQ: q.isPYQ,
        },
      });
    }
  }

  console.log(`Successfully seeded Batch P7 knowledge base. Total concepts: ${BATCH_P7_CONCEPTS.length}.`);
}
