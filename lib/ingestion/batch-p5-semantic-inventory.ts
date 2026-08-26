/**
 * Batch P5 Semantic Inventory
 * Mind of Aravalli — Academic Reading Hub
 *
 * Maps legacy chapters to canonical semantic units:
 * - LEG-POL-022: 73rd Constitutional Amendment / Panchayati Raj (Note 22)
 * - LEG-POL-023: 74th Constitutional Amendment / Urban Local Bodies (Note 23)
 * - LEG-POL-013: Election Commission of India (ECI - Article 324) (Note 13)
 * - LEG-POL-011: Comptroller and Auditor-General of India (CAG - Articles 148-151) (Note 11)
 * - LEG-POL-003: Central Information Commission (CIC) & RTI Framework (Note 3)
 * - LEG-POL-004: Central Vigilance Commission (CVC) & Anti-Corruption Framework (Note 4)
 * - LEG-POL-026: National Human Rights Commission (NHRC) & SHRCs (Note 26)
 * - LEG-POL-024: Lokpal, Lokayukta & Special Commissions (Note 24)
 * - LEG-POL-027: NITI Aayog: Structure, Functions & Cooperative Federalism (Note 27)
 */

export interface SemanticUnitP5 {
  semanticUnitId: string;
  legacyUnitId: string;
  legacyChapterNumber: number;
  title: string;
  scope: string;
  statutoryBasis: string;
  keyArticles: string[];
  targetConceptId: string;
  targetTopicOrder: number;
  verifiedYear: number;
}

export const BATCH_P5_SEMANTIC_UNITS: SemanticUnitP5[] = [
  // =========================================================================
  // TOPIC 21: RURAL & URBAN LOCAL GOVERNANCE (73RD & 74TH CAAS)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T21-01',
    legacyUnitId: 'LEG-POL-022',
    legacyChapterNumber: 22,
    title: '73rd Constitutional Amendment: Panchayati Raj Architecture & 3-Tier Devolution',
    scope: 'Part IX, Articles 243 to 243-O, Eleventh Schedule 29 functional items, mandatory vs voluntary provisions, Gram Sabha, State Election Commission (Art 243K), State Finance Commission (Art 243I), and 3Fs devolution reality.',
    statutoryBasis: 'Constitution (73rd Amendment) Act, 1992',
    keyArticles: ['Article 243', 'Article 243A', 'Article 243B', 'Article 243C', 'Article 243D', 'Article 243E', 'Article 243I', 'Article 243K', 'Article 243O'],
    targetConceptId: 'CON-T21-01',
    targetTopicOrder: 21,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T21-02',
    legacyUnitId: 'LEG-POL-022',
    legacyChapterNumber: 22,
    title: 'PESA Act 1996 & Tribal Self-Governance in Fifth Schedule Areas',
    scope: 'Panchayats (Extension to Scheduled Areas) Act 1996, Dilip Singh Bhuria Committee, Gram Sabha supremacy over minor forest produce, land alienation prevention, local dispute resolution, and mining concessions across 10 Fifth Schedule States.',
    statutoryBasis: 'PESA Act, 1996 (Act No. 40 of 1996)',
    keyArticles: ['Article 243M(4)(b)', 'Article 244(1)', 'Fifth Schedule'],
    targetConceptId: 'CON-T21-02',
    targetTopicOrder: 21,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T21-03',
    legacyUnitId: 'LEG-POL-023',
    legacyChapterNumber: 23,
    title: '74th Constitutional Amendment: Urban Local Bodies & Metropolitan Planning',
    scope: 'Part IX-A, Articles 243-P to 243-ZG, Twelfth Schedule 18 functional items, 3 types of Municipalities (Nagar Panchayat, Municipal Council, Municipal Corporation), Wards Committees, District Planning Committee (Art 243ZD), Metropolitan Planning Committee (Art 243ZE).',
    statutoryBasis: 'Constitution (74th Amendment) Act, 1992',
    keyArticles: ['Article 243P', 'Article 243Q', 'Article 243S', 'Article 243ZD', 'Article 243ZE', 'Article 243ZG'],
    targetConceptId: 'CON-T21-03',
    targetTopicOrder: 21,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T21-04',
    legacyUnitId: 'LEG-POL-022',
    legacyChapterNumber: 22,
    title: 'Local Governance in Rajasthan: Nagaur Inception, 5-Tier Devolution & Rajasthan Acts',
    scope: 'October 2, 1959 Nagaur inception by Jawaharlal Nehru, Balwant Rai Mehta Committee, Ashok Mehta, G.V.K. Rao, L.M. Singhvi committees, Rajasthan Panchayati Raj Act 1994, 50% women reservation in Rajasthan PRIs, Gram Nyayalayas.',
    statutoryBasis: 'Rajasthan Panchayati Raj Act, 1994 & Rajasthan Municipalities Act, 2009',
    keyArticles: ['Article 40', 'Article 243D', 'Article 243T'],
    targetConceptId: 'CON-T21-04',
    targetTopicOrder: 21,
    verifiedYear: 2026,
  },

  // =========================================================================
  // TOPIC 22: CONSTITUTIONAL INSTITUTIONS (ECI & CAG)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T22-01',
    legacyUnitId: 'LEG-POL-013',
    legacyChapterNumber: 13,
    title: 'Election Commission of India: Article 324, Autonomy & CEC/EC Appointment Act 2023',
    scope: 'Part XV Article 324, multi-member body since 1993 (1 CEC + 2 ECs, equal status), CEC removal as SC judge (Art 324(5)) vs EC removal on CEC advice, Anoop Baranwal (2023) judgment, Chief Election Commissioner and other ECs Act 2023 Selection Committee (PM, Union Minister, LoP/Single largest opposition party leader), Model Code of Conduct & plenary powers under Mohinder Singh Gill (1978).',
    statutoryBasis: 'Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023',
    keyArticles: ['Article 324', 'Article 325', 'Article 326', 'Article 327', 'Article 328', 'Article 329'],
    targetConceptId: 'CON-T22-01',
    targetTopicOrder: 22,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T22-02',
    legacyUnitId: 'LEG-POL-013',
    legacyChapterNumber: 13,
    title: 'Electoral Architecture & Representation of the People Acts (1950 & 1951)',
    scope: 'RPA 1950 (Delimitation, seat allocation, electoral rolls preparation, ordinary residence) vs RPA 1951 (Conduct of elections, qualifications, disqualifications under Sec 8, corrupt practices, election petitions, political party registration under Sec 29A), Electoral Bonds judgment (ADR 2024), EVM/VVPAT verification standards.',
    statutoryBasis: 'Representation of the People Act, 1950 & 1951',
    keyArticles: ['Article 326', 'Article 327', 'Article 329', 'Article 102(1)(e)'],
    targetConceptId: 'CON-T22-02',
    targetTopicOrder: 22,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T22-03',
    legacyUnitId: 'LEG-POL-011',
    legacyChapterNumber: 11,
    title: 'Comptroller and Auditor-General of India: Constitutional Independence & Duties (Arts 148-151)',
    scope: 'Part V Chapter V Articles 148 to 151, Dr. Ambedkar\'s "most important officer" classification, independence guarantees (removal as SC judge, ineligibility for future office, charged salary on CFI), CAG\'s (DPC) Act 1971, separation of accounting and auditing (1976), 3 annual audit reports to President/Governor, relationship with Public Accounts Committee (PAC).',
    statutoryBasis: 'CAG\'s (Duties, Powers and Conditions of Service) Act, 1971',
    keyArticles: ['Article 148', 'Article 149', 'Article 150', 'Article 151'],
    targetConceptId: 'CON-T22-03',
    targetTopicOrder: 22,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T22-04',
    legacyUnitId: 'LEG-POL-011',
    legacyChapterNumber: 11,
    title: 'Public Audit Spectrum & Institutional Limitations: Regulatory vs Propriety vs Performance Audit',
    scope: 'Three audit tiers (Regulatory/Legal Audit, Propriety Audit/Wisdom of expenditure, Performance/Efficiency Audit), limits of CAG audit (post-mortem audit, secret service expenditure, public-private partnerships & private telecom discoms in Association of Unified Telecom Service Providers 2014).',
    statutoryBasis: 'CAG Regulations on Audit and Accounts, 2020',
    keyArticles: ['Article 149', 'Article 151'],
    targetConceptId: 'CON-T22-04',
    targetTopicOrder: 22,
    verifiedYear: 2026,
  },

  // =========================================================================
  // TOPIC 23: STATUTORY & NON-CONSTITUTIONAL BODIES
  // =========================================================================
  {
    semanticUnitId: 'SEM-T23-01',
    legacyUnitId: 'LEG-POL-003',
    legacyChapterNumber: 3,
    title: 'Central Information Commission & RTI Act 2005: Architecture, Exemptions & 2019 Amendments',
    scope: 'RTI Act 2005 statutory creation, Section 4 proactive disclosures, Section 8 national security/privacy exemptions, Section 12-14 CIC composition (1 CIC + max 10 ICs), 3-member Selection Committee (PM, LoP, Union Cabinet Minister), RTI Amendment Act 2019 central power to determine tenure and salary terms, comparison with State Information Commissions (SICs).',
    statutoryBasis: 'Right to Information Act, 2005 & RTI (Amendment) Act, 2019',
    keyArticles: ['Article 19(1)(a)'],
    targetConceptId: 'CON-T23-01',
    targetTopicOrder: 23,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T23-02',
    legacyUnitId: 'LEG-POL-004',
    legacyChapterNumber: 4,
    title: 'Central Vigilance Commission: Santhanam Committee to Statutory Apex Anti-Corruption Body',
    scope: 'Santhanam Committee (1962-64) genesis, 1964 executive resolution, Supreme Court Vineet Narain (1997) directive, CVC Act 2003 statutory status, CVC + max 2 VCs, 4-yr or 65-yr non-renewable tenure, 3-member Selection Committee (PM, Home Minister, LoP), superintendence over CBI (DSPE Act) for Prevention of Corruption Act cases, Whistle Blowers Protection Act 2014.',
    statutoryBasis: 'Central Vigilance Commission Act, 2003',
    keyArticles: ['Article 311', 'Article 14'],
    targetConceptId: 'CON-T23-02',
    targetTopicOrder: 23,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T23-03',
    legacyUnitId: 'LEG-POL-026',
    legacyChapterNumber: 26,
    title: 'National Human Rights Commission: Protection of Human Rights Act 1993 & 2019 Amendments',
    scope: 'Protection of Human Rights Act 1993 (Paris Principles compliance), 2019 Amendments (CJI or SC Judge as Chairperson, 3-yr or 70-yr tenure eligible for reappointment), 6-member Selection Committee (PM, Speaker, Deputy Chairman RS, Leaders of Opposition in LS & RS, Union Home Minister), powers of civil court, structural limits (1-year limitation period, armed forces recommendations only, purely recommendatory nature), Rajasthan SHRC (1999 notification, functional 2000, 1st Chair Justice Kanta Bhatnagar).',
    statutoryBasis: 'Protection of Human Rights Act, 1993 & PHRA Amendment Act, 2019',
    keyArticles: ['Article 21', 'Universal Declaration of Human Rights 1948'],
    targetConceptId: 'CON-T23-03',
    targetTopicOrder: 23,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T23-04',
    legacyUnitId: 'LEG-POL-024',
    legacyChapterNumber: 24,
    title: 'Lokpal and Lokayuktas Act 2013: Anti-Corruption Ombudsman & State Architectures',
    scope: 'Administrative Reforms Commission (1966) ombudsman recommendations, Lokpal and Lokayuktas Act 2013, Chairperson (former CJI/SC judge/eminent person) + max 8 members (50% judicial, 50% SC/ST/OBC/Minority/Women), 5-member Selection Committee (PM, Speaker, LoP, CJI/nominee, Eminent Jurist), jurisdiction over PM (with 2/3rd full bench safeguards), Ministers, MPs, civil servants, Rajasthan Lokayukta Act 1973 (Justice I.D. Dua 1st Lokayukta, CM strictly excluded).',
    statutoryBasis: 'Lokpal and Lokayuktas Act, 2013 & Rajasthan Lokayukta and Up-Lokayuktas Act, 1973',
    keyArticles: ['Article 252', 'Article 253'],
    targetConceptId: 'CON-T23-04',
    targetTopicOrder: 23,
    verifiedYear: 2026,
  },
  {
    semanticUnitId: 'SEM-T23-05',
    legacyUnitId: 'LEG-POL-027',
    legacyChapterNumber: 27,
    title: 'NITI Aayog vs Planning Commission: Think Tank Architecture & Cooperative Federalism',
    scope: 'January 1, 2015 Union Cabinet Resolution (non-constitutional, non-statutory executive think tank), Governing Council (PM + all State CMs + Lt Governors), bottom-up cooperative federalism vs top-down Planning Commission (1950-2014), abolition of National Development Council (NDC), zero financial allocation powers (retained by Finance Ministry), Team India Hub, Knowledge & Innovation Hub, SDG India Index, Aspirational Districts Programme.',
    statutoryBasis: 'Cabinet Secretariat Resolution No. 511/2/1/2015-Cab (Jan 1, 2015)',
    keyArticles: ['Article 282', 'Seventh Schedule'],
    targetConceptId: 'CON-T23-05',
    targetTopicOrder: 23,
    verifiedYear: 2026,
  },
];
