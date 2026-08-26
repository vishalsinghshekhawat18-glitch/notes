import { db } from '../db/client';

export interface BatchP3SemanticUnit {
  semanticUnitId: string;
  legacyUnitId: string;
  topicNumber: number;
  localHeading: string;
  contentType:
    | 'CONSTITUTIONAL_TEXT'
    | 'LEGAL_RULE'
    | 'JUDICIAL_DOCTRINE'
    | 'HISTORICAL_CLAIM'
    | 'CONCEPT'
    | 'DEFINITION'
    | 'EXPLANATION'
    | 'COMPARISON'
    | 'COMPARISON_TABLE'
    | 'EXCEPTION_QUALIFICATION'
    | 'PYQ'
    | 'EXAM_TRAP';
  origin: 'TEXT_DERIVED' | 'TABLE_DERIVED' | 'MIXED';
  shortDescription: string;
  requiresVerification: boolean;
  status: 'INVENTORIED' | 'REVIEW_REQUIRED' | 'VERIFIED' | 'CANONICALIZED';
  notes?: string;
}

export const BATCH_P3_SEMANTIC_UNITS: BatchP3SemanticUnit[] = [
  // =========================================================================
  // TOPIC 16: THE UNION JUDICIARY (THE SUPREME COURT OF INDIA)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T16-01',
    legacyUnitId: 'LEG-POL-052',
    topicNumber: 16,
    localHeading: 'Supreme Court Architecture: Composition (34 Judges), Qualifications & Independence Safeguards',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 124: 1 CJI + 33 Judges (SC Number of Judges Act 2019). Qualifications (Citizen, 5 yrs HC Judge or 10 yrs HC Advocate or distinguished jurist). Retirement age 65 years. Salaries charged on CFI.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T16-02',
    legacyUnitId: 'LEG-POL-052',
    topicNumber: 16,
    localHeading: 'The Collegium System Evolution: Three Judges Cases (1981, 1993, 1998) & NJAC Verdict (2015)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Evolution of judicial appointments: First Judges Case 1981 (Executive primacy), Second Judges Case 1993 (CJI + 2 senior judges collegium), Third Judges Case 1998 (CJI + 4 senior judges collegium), Fourth Judges Case 2015 (99th CAA / NJAC struck down as unconstitutional).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T16-03',
    legacyUnitId: 'LEG-POL-052',
    topicNumber: 16,
    localHeading: 'Judicial Removal Procedure (Article 124(4)) & Judges (Inquiry) Act 1968',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 124(4) grounds: Proved misbehaviour or incapacity. Motion signed by 100 LS or 50 RS MPs. 3-member inquiry committee (SC Judge + HC CJ + distinguished jurist). Special Majority in each House (total majority + 2/3rd present and voting). Presidential order.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T16-04',
    legacyUnitId: 'LEG-POL-052',
    topicNumber: 16,
    localHeading: 'Exclusive Federal Original Jurisdiction (Article 131) & Constitutional Exclusions',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 131: Original and exclusive jurisdiction for federal disputes (Centre vs States, State vs State). Exclusions: Pre-constitution treaties/agreements, inter-state river water disputes (Art 262), Finance Commission references, ordinary private citizen suits.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T16-05',
    legacyUnitId: 'LEG-POL-052',
    topicNumber: 16,
    localHeading: 'Appellate Jurisdiction (Arts 132–134) & Special Leave Petitions (Article 136)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Constitutional (Art 132), Civil (Art 133), Criminal appeals (Art 134). Special Leave Petition (Art 136): Discretionary, extraordinary, plenary appellate power against any judgment/order of any court or tribunal in India (EXCEPT Military Tribunals / Court Martial under Art 136(2)).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T16-06',
    legacyUnitId: 'LEG-POL-052',
    topicNumber: 16,
    localHeading: 'Advisory Jurisdiction (Art 143), Complete Justice (Art 142) & Law of the Land (Art 141)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 143: Presidential reference (Clause 1 public law: discretionary; Clause 2 pre-constitution treaties: mandatory to advise; opinion is non-binding). Article 142: Inherent power to pass decree for complete justice. Article 141: Law declared by SC is binding on all courts. Article 129: Court of Record and contempt powers.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 17: STATE JUDICIARY (HIGH COURTS & SUBORDINATE COURTS)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T17-01',
    legacyUnitId: 'LEG-POL-016',
    topicNumber: 17,
    localHeading: 'High Court Architecture: Structure (25 HCs), Appointment, Qualifications & Transfer (Arts 214-224A)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 214 (HC for each State), 7th CAA 1956 (Common HC for 2+ states). Appointed by President (consults CJI + Governor + HC CJ). HC Collegium (CJI + 2 senior SC judges). Qualifications: Citizen, 10 yrs judicial office or 10 yrs HC advocate (NO distinguished jurist in HC!). Age limit 62 yrs. Transfer under Art 222.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T17-02',
    legacyUnitId: 'LEG-POL-016',
    topicNumber: 17,
    localHeading: 'Writ Jurisdiction of High Courts: Article 226 vs Article 32 Scope Comparison',
    contentType: 'COMPARISON',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 226 is WIDER in subject matter than Article 32 (enforces Fundamental Rights AND other ordinary legal rights). Article 32 is a Fundamental Right itself and non-refusable; Article 226 is a constitutional power and discretionary. Territorial jurisdiction under Art 226(2).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T17-03',
    legacyUnitId: 'LEG-POL-016',
    topicNumber: 17,
    localHeading: 'Supervisory Jurisdiction (Article 227) & Court of Record (Article 215)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 227: Power of superintendence over all courts and tribunals throughout its territorial jurisdiction (both administrative and judicial superintendence; wider than Art 226). Article 215: Court of record with power to punish for contempt of itself.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T17-04',
    legacyUnitId: 'LEG-POL-016',
    topicNumber: 17,
    localHeading: 'Subordinate Courts Architecture (Articles 233–237) & High Court Control (Article 235)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'District Judges appointed by Governor in consultation with High Court (Art 233). Other judicial officers appointed via State PSC + HC consultation (Art 234). Article 235: Complete administrative, posting, promotion, and disciplinary control over subordinate judiciary is vested in the High Court.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T17-05',
    legacyUnitId: 'LEG-POL-016',
    topicNumber: 17,
    localHeading: 'Rajasthan High Court Architecture: Jodhpur Principal Seat, Jaipur Bench & Evolution',
    contentType: 'HISTORICAL_CLAIM',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Inaugurated August 29, 1949 at Jodhpur by Rajpramukh Maharaja Sawai Man Singh. First Chief Justice: Kamala Kant Verma. Satyanarayan Rao Committee (1958) confirmed Jodhpur seat. Permanent Jaipur Bench created 1976 (operational Jan 31, 1977). Sanctioned strength: 50 judges (38 permanent + 12 additional).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 18: JUDICIAL INNOVATION & TRIBUNALS ARCHITECTURE
  // =========================================================================
  {
    semanticUnitId: 'SEM-T18-01',
    legacyUnitId: 'LEG-POL-019',
    topicNumber: 18,
    localHeading: 'Public Interest Litigation (PIL): Relaxation of Locus Standi & Epistolary Jurisdiction',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'PIL pioneered in India by Justice V.R. Krishna Iyer and Justice P.N. Bhagwati (S.P. Gupta 1981). Relaxation of traditional locus standi to allow public-spirited citizens/groups to approach SC (Art 32) or HC (Art 226) for marginalized sections. Epistolary jurisdiction (letters treated as writ petitions).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T18-02',
    legacyUnitId: 'LEG-POL-019',
    topicNumber: 18,
    localHeading: 'Landmark PIL Jurisprudence & Guidelines against Frivolous Litigation',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Hussainara Khatoon 1979 (undertrial prisoners/speedy trial), Bandhua Mukti Morcha 1984 (bonded labour), M.C. Mehta 1987 (Oleum gas / absolute liability), Vishaka 1997 (workplace sexual harassment guidelines). Safeguards against private vendetta, publicity, and frivolous PILs.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T18-03',
    legacyUnitId: 'LEG-POL-019',
    topicNumber: 18,
    localHeading: 'Judicial Review vs Judicial Activism vs Judicial Overreach & Separation of Powers',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Judicial Review (Constitutional power to test legislative/executive validity against Constitution; basic structure). Judicial Activism (Proactive judicial defense of rights when other branches fail). Judicial Overreach (Transgression into pure executive policy or legislative domain; violates separation of powers).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T18-04',
    legacyUnitId: 'LEG-POL-054',
    topicNumber: 18,
    localHeading: 'Tribunals Constitutional Framework: Part XIV-A (42nd CAA), Article 323A vs Article 323B',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Part XIV-A inserted by 42nd CAA 1976 (Swaran Singh Committee). Article 323A: Administrative Tribunals (established ONLY by Parliament; for public service recruitment/conditions; CAT & SATs under Administrative Tribunals Act 1985). Article 323B: Other Tribunals (tax, foreign exchange, land reforms, rent; established by Parliament OR State Legislatures).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T18-05',
    legacyUnitId: 'LEG-POL-054',
    topicNumber: 18,
    localHeading: 'L. Chandra Kumar (1997) Doctrine, Judicial Review over Tribunals & Tribunal Reforms Act 2021',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'L. Chandra Kumar v. Union of India (1997): 7-judge bench struck down clause excluding HC jurisdiction; held power of judicial review under Arts 226/227 and 32 is part of Basic Structure. All tribunal decisions must be appealed before a Division Bench of the High Court before approaching Supreme Court under Art 136. Tribunal Reforms Act 2021.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
];

export async function seedBatchP3SemanticInventory() {
  console.log(`Seeding Batch P3 semantic units (${BATCH_P3_SEMANTIC_UNITS.length} units)...`);

  const source = await db.source.upsert({
    where: { id: 'LEGACY-POLITY-VAULT-2026' },
    update: {},
    create: {
      id: 'LEGACY-POLITY-VAULT-2026',
      title: 'Polity & Governance Master Vault (Recovered Corpus 2026)',
      sourceType: 'RECOVERED_MASTER_CORPUS',
      authorityTier: 'TIER_C_EDUCATIONAL',
      description: 'Comprehensive 58-chapter recovered master corpus for Indian Polity and Governance.',
      identifier: '05_Polity_Governance_Master.md',
    },
  });

  for (const unit of BATCH_P3_SEMANTIC_UNITS) {
    await db.coverageUnit.upsert({
      where: { id: `CU-${unit.semanticUnitId}` },
      update: {
        label: unit.localHeading,
        scopeDescription: unit.shortDescription,
        status: 'PROCESSED',
      },
      create: {
        id: `CU-${unit.semanticUnitId}`,
        sourceId: source.id,
        label: unit.localHeading,
        scopeDescription: unit.shortDescription,
        status: 'PROCESSED',
        order: unit.topicNumber,
      },
    });
  }

  console.log(`Successfully seeded ${BATCH_P3_SEMANTIC_UNITS.length} Batch P3 semantic units.`);
  return BATCH_P3_SEMANTIC_UNITS.length;
}
