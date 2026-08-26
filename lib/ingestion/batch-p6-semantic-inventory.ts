/**
 * Batch P6 Semantic Inventory
 * Mind of Aravalli — Academic Reading Hub
 *
 * Maps legacy chapters to canonical semantic units:
 * - LEG-POL-038: Political Demography, Party System & Electoral Competition in Rajasthan (Note 38)
 * - LEG-POL-043: RAS Polity Chapter 1: Governor of Rajasthan, Chief Minister & State Legislative Assembly (Note 43)
 * - LEG-POL-044: RAS Polity Chapter 2: Rajasthan High Court, RPSC, SHRC & Lokayukta (Note 44)
 * - LEG-POL-045: RAS Mains Paper III: Comparative Constitutions - UK, USA, Canada, Germany & Switzerland (Note 45)
 */

export interface SemanticUnitP6 {
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

export const BATCH_P6_SEMANTIC_UNITS: SemanticUnitP6[] = [
  // =========================================================================
  // TOPIC 24: RAJASTHAN STATE POLITY & GOVERNANCE
  // =========================================================================
  {
    semanticUnitId: 'SEM-T24-01',
    legacyUnitId: 'LEG-POL-038',
    legacyChapterNumber: 38,
    title: 'Political Demography, Electoral Geography & Social Stratification of Rajasthan',
    scope: 'Census 2011 baseline (6.85 Cr population, density 200/km2, sex ratio 928, literacy 66.1%, SC 17.8%, ST 13.5%), regional geography (Marwar, Mewar, Dhundhar, Hadoti, Shekhawati), 200 Assembly seats (34 SC, 25 ST), 25 Lok Sabha seats (4 SC, 3 ST), 10 Rajya Sabha seats, TSP areas in southern Rajasthan.',
    statutoryBasis: 'Census of India 2011; Delimitation Order 2008; Representation of the People Act 1950',
    keyArticles: ['Article 81', 'Article 82', 'Article 170', 'Article 244(1)', 'Article 330', 'Article 332'],
    targetConceptId: 'CON-T24-01',
    targetTopicOrder: 24,
    verifiedYear: 2026,
    temporalStatus: 'CENSUS_HISTORICAL',
  },
  {
    semanticUnitId: 'SEM-T24-02',
    legacyUnitId: 'LEG-POL-043',
    legacyChapterNumber: 43,
    title: 'State Executive of Rajasthan: Governor, Chief Minister & Council of Ministers',
    scope: 'Creation of Governor office on 1 Nov 1956 (7th CAA / State Reorganisation Act, replacing Rajpramukh Maharaja Sawai Man Singh II), First Governor Gurumukh Nihal Singh, First woman Governor Pratibha Patil, 4 Governors who died in office (Darbara Singh, Nirmal Chandra Jain, S.K. Singh, Prabha Rau), First nominated CM Hiralal Shastri (1949) vs first elected CM Tikaram Paliwal (1952) vs Jai Narayan Vyas (both), Mohan Lal Sukhadia (~17 yrs tenure), CM Secretariat and Council of Ministers.',
    statutoryBasis: 'Constitution of India, Part VI (Articles 153-167); 7th Constitutional Amendment Act 1956',
    keyArticles: ['Article 153', 'Article 154', 'Article 155', 'Article 156', 'Article 161', 'Article 163', 'Article 164', 'Article 167'],
    targetConceptId: 'CON-T24-02',
    targetTopicOrder: 24,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
  {
    semanticUnitId: 'SEM-T24-03',
    legacyUnitId: 'LEG-POL-043',
    legacyChapterNumber: 43,
    title: 'Rajasthan Legislative Assembly: Evolution, Committees & Unicameral Procedure',
    scope: 'Evolution of Assembly strength: 160 seats in 1st Assembly (1952) to 200 seats in 6th Assembly (1977 onwards), 34 SC and 25 ST reserved seats, First Speaker Narottam Lal Joshi, First Deputy Speaker Lal Singh Shaktawat, First Leader of Opposition Jaswant Singh, Vidhan Sabha Rules of Procedure, PAC and Financial Committees, unicameral nature (zero Legislative Council).',
    statutoryBasis: 'Constitution of India, Part VI (Articles 168-212); Rules of Procedure of Rajasthan Legislative Assembly',
    keyArticles: ['Article 168', 'Article 170', 'Article 174', 'Article 178', 'Article 191', 'Article 208'],
    targetConceptId: 'CON-T24-03',
    targetTopicOrder: 24,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
  {
    semanticUnitId: 'SEM-T24-04',
    legacyUnitId: 'LEG-POL-044',
    legacyChapterNumber: 44,
    title: 'Judicial & Constitutional Bodies of Rajasthan: High Court (Jodhpur/Jaipur) & RPSC (Ajmer)',
    scope: 'Rajasthan High Court inaugurated on 29 Aug 1949 at Jodhpur by Rajpramukh, First CJ Kamala Kant Verma, Satyanarayan Rao Committee (1957) -> Jaipur Permanent Bench created 31 Jan 1977, sanctioned strength of 50 judges (38 permanent + 12 additional); RPSC constituted 20 Aug 1949 at Jaipur -> shifted to Ajmer in 1956, 1 Chairman + 7 Members, First Chair Sir S.K. Ghosh, appointment by Governor vs removal by President under Art 317, 6-yr/62-yr tenure.',
    statutoryBasis: 'Constitution of India (Articles 214-231, 315-323); Rajasthan High Court Ordinance 1949; RPSC Regulations 1963',
    keyArticles: ['Article 214', 'Article 216', 'Article 217', 'Article 226', 'Article 227', 'Article 315', 'Article 316', 'Article 317'],
    targetConceptId: 'CON-T24-04',
    targetTopicOrder: 24,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },

  // =========================================================================
  // TOPIC 25: COMPARATIVE CONSTITUTIONAL SYSTEMS
  // =========================================================================
  {
    semanticUnitId: 'SEM-T25-01',
    legacyUnitId: 'LEG-POL-045',
    legacyChapterNumber: 45,
    title: 'Constitutional Models & Sovereignty: UK Parliamentary Sovereignty vs USA Judicial Supremacy vs Indian Synthesis',
    scope: 'UK unwritten constitution, Dicey\'s Parliamentary Sovereignty, executive-legislative fusion (Westminster model), zero judicial review of primary legislation vs USA written rigid constitution (1787), strict separation of powers (Montesquieu), substantive Due Process of Law (5th & 14th Amendments, Marbury v. Madison 1803); Indian constitutional synthesis of Parliamentary democracy with Judicial Supremacy checked by Basic Structure Doctrine (Kesavananda Bharati 1973) and Maneka Gandhi (1978).',
    statutoryBasis: 'Comparative Constitutional Law Jurisprudence; Basic Structure Doctrine',
    keyArticles: ['Article 13', 'Article 21', 'Article 368', 'Preamble'],
    targetConceptId: 'CON-T25-01',
    targetTopicOrder: 25,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
  {
    semanticUnitId: 'SEM-T25-02',
    legacyUnitId: 'LEG-POL-045',
    legacyChapterNumber: 45,
    title: 'Comparative Federal Architectures: USA, Canada, Australia, Germany & Indian Asymmetric Federalism',
    scope: 'US Dual Federalism (Indestructible Union of Indestructible States, dual citizenship, state residuary powers) vs Canadian Federalism (Federation with strong centre, central appointment of Governors, central residuary powers) vs Australian Federalism (Concurrent list, joint sittings, inter-state trade) vs German Basic Law 1949 (Administrative federalism, emergency provisions) vs Indian Quasi-Federal model (K.C. Wheare) with Article 371 asymmetric accommodations.',
    statutoryBasis: 'Comparative Constitutional Treatises; British North America Act 1867; US Constitution 1787; German Basic Law 1949',
    keyArticles: ['Article 1', 'Article 248', 'Article 254', 'Article 356', 'Article 371'],
    targetConceptId: 'CON-T25-02',
    targetTopicOrder: 25,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
  {
    semanticUnitId: 'SEM-T25-03',
    legacyUnitId: 'LEG-POL-045',
    legacyChapterNumber: 45,
    title: 'Instruments of Direct Democracy & Plural Executive: The Swiss Constitutional Model',
    scope: 'Direct Democracy instruments in Switzerland: Mandatory Referendum (constitutional amendments) and Optional Referendum (laws on 50k signatures), Popular Initiative (100k signatures for constitutional amendments), Recall, Landsgemeinde (open-air cantonal assemblies); Swiss Plural Executive (7-member collegial Federal Council with annually rotating Federal President) compared with Indian representative parliamentary system.',
    statutoryBasis: 'Swiss Federal Constitution of 1999',
    keyArticles: ['Preamble', 'Article 74', 'Article 75'],
    targetConceptId: 'CON-T25-03',
    targetTopicOrder: 25,
    verifiedYear: 2026,
    temporalStatus: 'CONSTITUTIONAL_TEXT',
  },
];
