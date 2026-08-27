/**
 * Batch P7 Semantic Inventory — Deepening Substantially Migrated Units
 * Mind of Aravalli — Academic Reading Hub
 *
 * Fully migrates and deepens the 6 legacy units into canonical concepts:
 * - LEG-POL-009: Citizen Charter, District Administration & Public Service Delivery Acts (Chapter 9) -> CON-T23-06
 * - LEG-POL-010: Coalition Governments, Pressure Groups & Non-Party Lobbies (Chapter 10) -> CON-T11-05
 * - LEG-POL-012: Dynamic Politics of India, Voting Behavior & Tech Mobilization (Chapter 12) -> CON-T22-05
 * - LEG-POL-018: Issues Related to National Integration & Internal Security Management (Chapter 18) -> CON-T20-05
 * - LEG-POL-028: Official Language, Special Directives & Constitutional Morality (Chapter 28) -> CON-T08-05
 * - LEG-POL-039: Potential Areas of Socio-Political Conflicts & Future Governance Blueprint (Chapter 39) -> CON-T19-05
 */

export interface SemanticUnitP7 {
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
  temporalStatus: 'CURRENT_DATA' | 'CENSUS_HISTORICAL' | 'CONSTITUTIONAL_TEXT' | 'STATUTORY_RULE';
}

export const BATCH_P7_SEMANTIC_UNITS: SemanticUnitP7[] = [
  {
    semanticUnitId: 'SEM-T23-06',
    legacyUnitId: 'LEG-POL-009',
    legacyChapterNumber: 9,
    title: 'District Administration, Citizen Charters, Sevottam Model & Public Service Guarantee Acts',
    scope: 'District Collector 3-in-1 role (Revenue Collector created 1772 by Warren Hastings, District Magistrate under BNSS/CrPC, District Development Officer), Sub-divisional hierarchy (SDM -> Tehsildar -> Naib Tehsildar -> Kanungo -> Patwari with Khatauni/Khasra/Girdawari), Board of Revenue Ajmer (Nov 1, 1949 Ordinance 22 of 1949), Chief Secretary post (K. Radhakrishnan, B.S. Mehta), Citizen Charters (UK 1991 John Major, India 1997 CM Conference), Sevottam Model (IS 15700:2005 3 pillars: Citizen Charter, Public Grievance, Capability), Rajasthan Guaranteed Delivery of Public Services Act 2011 (1st in India, 153 services, ₹500-₹5000 penalty on officers), and Rajasthan Right to Hearing Act 2012 (15-day mandatory disposal).',
    statutoryBasis: 'Rajasthan Guaranteed Delivery of Public Services Act 2011; Rajasthan Right to Hearing Act 2012; Rajasthan Land Revenue Act 1956; BNSS 2023; IS 15700:2005',
    keyArticles: ['Article 233', 'Article 234', 'Article 235', 'Article 309', 'Article 311'],
    targetConceptId: 'CON-T23-06',
    targetTopicOrder: 23,
    verifiedYear: 2026,
    temporalStatus: 'STATUTORY_RULE',
  },
  {
    semanticUnitId: 'SEM-T11-07',
    legacyUnitId: 'LEG-POL-010',
    legacyChapterNumber: 10,
    title: 'Coalition Governments, Common Minimum Programme, Hung Assemblies & Pressure Groups',
    scope: 'Evolution of coalition governance in India (Single-party dominance 1952-1967/1977 -> Multi-party coalition era 1989-2014 -> Dominant coalition post-2014), Common Minimum Programme (CMP), Coalition Coordination Committees, Cabinet collective responsibility under Art 75(3), Sarkaria & Punchhi Commission hierarchy of invitation in hung assemblies (Pre-poll alliance -> Single largest party -> Post-poll coalition), and Pressure Group typology (Almond-Finer classification: Associational like FICCI/CII/BKU/AITUC, Institutional, Non-Associational, Anomic) and techniques (lobbying, litigation/PIL, protest, tripartite advisory committees).',
    statutoryBasis: 'Constitution of India, Articles 74, 75, 163, 164; Sarkaria Commission (1988); Punchhi Commission (2010)',
    keyArticles: ['Article 74', 'Article 75(3)', 'Article 163', 'Article 164(2)', 'Article 19(1)(c)'],
    targetConceptId: 'CON-T11-07',
    targetTopicOrder: 11,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
  {
    semanticUnitId: 'SEM-T22-05',
    legacyUnitId: 'LEG-POL-012',
    legacyChapterNumber: 12,
    title: 'Determinants of Voting Behavior, EVM-VVPAT Architecture & Electoral Technology Reforms',
    scope: 'Structural determinants of Indian voting behavior (Caste/Jati, Religion, Language, Region vs Governance performance, DBT/welfare delivery, leadership, women voter turnout parity), EVM architecture (standalone non-networked direct recording electronic system, pilot 1982 Paravur, universal 2004), VVPAT statutory mandate (Subramanian Swamy v. ECI 2013, 100% deployment, 5 polling stations random audit per assembly constituency, Association for Democratic Reforms v. ECI 2024 upholding EVM integrity and reject paper ballot return), and ECI digital governance platforms (cVIGIL, ENCORE, Suvidha, Voter Helpline).',
    statutoryBasis: 'Representation of the People Act 1951, Conduct of Elections Rules 1961 (Rule 49A to 49X); Subramanian Swamy v. ECI (2013); ADR v. ECI (2024)',
    keyArticles: ['Article 324', 'Article 325', 'Article 326', 'Article 327', 'Article 329'],
    targetConceptId: 'CON-T22-05',
    targetTopicOrder: 22,
    verifiedYear: 2026,
    temporalStatus: 'CURRENT_DATA',
  },
  {
    semanticUnitId: 'SEM-T20-05',
    legacyUnitId: 'LEG-POL-018',
    legacyChapterNumber: 18,
    title: 'National Integration Mechanisms, Inter-State Council & Internal Security Framework',
    scope: 'National Integration Council (NIC, established 1961 by PM Nehru), Inter-State Council (Article 263, Sarkaria Commission recommendation, established 1990 by Presidential Order, chaired by PM with all CMs and 6 Union Cabinet Ministers), Zonal Councils (Statutory bodies under States Reorganisation Act 1956, 5 zones chaired by Union Home Minister + North Eastern Council under NEC Act 1971), Constitutional internal security architecture (Public Order and Police as State List entries 1 and 2, Article 355 Union duty to protect States against external aggression and internal disturbance), and statutory apparatus (Central Armed Police Forces - CRPF, BSF, CISF, ITBP, SSB, Assam Rifles; NIA Act 2008/2019 extraterritorial mandate; UAPA 1967/2019 terrorist designation; AFSPA 1958 Section 3 disturbed areas).',
    statutoryBasis: 'Constitution of India, Articles 263, 355; States Reorganisation Act 1956; North Eastern Council Act 1971; NIA Act 2008; UAPA 1967; AFSPA 1958',
    keyArticles: ['Article 263', 'Article 355', 'Article 356', 'Article 365', 'Seventh Schedule List II Entries 1, 2'],
    targetConceptId: 'CON-T20-05',
    targetTopicOrder: 20,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
  {
    semanticUnitId: 'SEM-T04-09',
    legacyUnitId: 'LEG-POL-028',
    legacyChapterNumber: 28,
    title: 'Official Language Constitutional Scheme (Part XVII), Special Linguistic Directives & Constitutional Morality',
    scope: 'Constitutional scheme of Official Language under Part XVII (Articles 343 to 351): Article 343 (Hindi in Devanagari script with international numerals as official language of Union, English continuation), Article 344 (Official Language Commission & Parliamentary Committee: B.G. Kher 1955, Pant Committee 1957), Official Languages Act 1963 (amended 1967 indefinite English continuation), Article 345 (State official languages), Article 346 (inter-governmental communication), Article 348 (authoritative English texts for Supreme Court, High Courts, and Acts), Special Directives (Article 350 grievance representation, Article 350A primary instruction in mother tongue for linguistic minorities, Article 350B Special Officer for Linguistic Minorities, Article 351 development of Hindi drawing from Sanskrit and 8th Schedule languages), and the constitutional doctrine of Constitutional Morality (Dr. Ambedkar in Constituent Assembly, Manoj Narula 2014, Navtej Johar 2018, NCT of Delhi 2018, Sabarimala 2018).',
    statutoryBasis: 'Constitution of India, Part XVII (Articles 343-351), Eighth Schedule; Official Languages Act 1963 (amended 1967)',
    keyArticles: ['Article 343', 'Article 344', 'Article 345', 'Article 348', 'Article 350', 'Article 350A', 'Article 350B', 'Article 351'],
    targetConceptId: 'CON-T04-09',
    targetTopicOrder: 4,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
  {
    semanticUnitId: 'SEM-T19-06',
    legacyUnitId: 'LEG-POL-039',
    legacyChapterNumber: 39,
    title: 'Inter-State River Water Disputes (Article 262), Boundary Adjudication & Sub-Classification Jurisprudence',
    scope: 'Constitutional dispute resolution in federalism: Inter-State River Water Disputes Act 1956 under Article 262 (exclusive tribunal adjudication, ouster of Supreme Court original jurisdiction under Art 262(2) though SLP under Art 136 remains), Inter-State boundary disputes under Article 131 original jurisdiction, 2nd Administrative Reforms Commission (ARC) conflict management blueprint, and affirmative action jurisprudence including the historic 7-judge Supreme Court Constitution Bench ruling in State of Punjab v. Davinder Singh (2024) permitting sub-classification of Scheduled Castes and Scheduled Tribes under Article 341/342 based on empirical backwardness without violating the presidential list.',
    statutoryBasis: 'Constitution of India, Articles 131, 262, 341, 342; Inter-State River Water Disputes Act 1956; State of Punjab v. Davinder Singh (2024)',
    keyArticles: ['Article 131', 'Article 262', 'Article 341', 'Article 342', 'Article 14', 'Article 15(4)', 'Article 16(4)'],
    targetConceptId: 'CON-T19-06',
    targetTopicOrder: 19,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
];
