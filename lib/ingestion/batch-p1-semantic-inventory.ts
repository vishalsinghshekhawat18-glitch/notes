import { db } from '../db/client';

export interface BatchP1SemanticUnit {
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

export const BATCH_P1_SEMANTIC_UNITS: BatchP1SemanticUnit[] = [
  // =========================================================================
  // TOPIC 11: THE UNION EXECUTIVE (LEG-POL-056, 057, 040, 021)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T11-01',
    legacyUnitId: 'LEG-POL-056',
    topicNumber: 11,
    localHeading: 'President of India: Constitutional Status, Qualifications & Security Deposit',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 52, 53, 58, 59: Head of State, de jure executive, citizen, 35 years age, LS qualification, office of profit disqualification, ₹15,000 security deposit with 50 proposers and 50 seconders.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-02',
    legacyUnitId: 'LEG-POL-056',
    topicNumber: 11,
    localHeading: 'Presidential Electoral College & Single Transferable Vote Formula (Arts 54-55)',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 54, 55, 71: Elected MPs + Elected MLAs (States + Delhi + Puducherry 70th CAA). Excludes nominated members and MLCs. MLA vote value formula (1971 census), MP vote value formula, Quota calculation, SC sole dispute jurisdiction (Art 71).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-03',
    legacyUnitId: 'LEG-POL-056',
    topicNumber: 11,
    localHeading: 'Presidential Term, Vacancy & Impeachment Procedure (Articles 56, 61, 62)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 56, 61, 62: 5-year term, resignation to VP. Impeachment for "Violation of the Constitution": 14-day notice signed by 1/4th members, passed by Special Majority of 2/3rd TOTAL MEMBERSHIP in both Houses. Nominated MPs participate; MLAs do not.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-04',
    legacyUnitId: 'LEG-POL-056',
    topicNumber: 11,
    localHeading: 'Presidential Legislative Powers, Veto (Art 111) & Ordinance Power (Art 123)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 111 (Absolute, Suspensive, Pocket Veto / 1986 Post Office Bill). Article 123 Ordinance power (max 6m + 6w; DC Wadhwa 1987 & Krishna Kumar Singh 2017 limits on re-promulgation and judicial review of satisfaction).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-05',
    legacyUnitId: 'LEG-POL-056',
    topicNumber: 11,
    localHeading: 'Presidential Judicial & Pardoning Power (Article 72)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 72: Pardon, Commutation, Remission, Respite, Reprieve for Court Martial, Union laws, and Death sentences. Exercised on aid and advice of COM (Maru Ram 1980, Kehar Singh 1989), limited judicial review for arbitrariness (Epuru Sudhakar 2006, Shatrughan Chauhan 2014).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-06',
    legacyUnitId: 'LEG-POL-057',
    topicNumber: 11,
    localHeading: 'Vice-President: Constitutional Office, Election (Art 66) & Removal (Art 67)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 63-69: Ex-officio Chairman of Rajya Sabha (Art 64). Electoral college = ALL MPs (Elected + Nominated, no MLAs). Removal: 14-day notice, Effective Majority in RS + Simple Majority in LS (no formal impeachment). Acts as President max 6 months (Art 65).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-07',
    legacyUnitId: 'LEG-POL-040',
    topicNumber: 11,
    localHeading: 'Prime Minister & Council of Ministers: Constitutional Architecture (Arts 74, 75)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 74, 75: Real executive (de facto). 42nd CAA (binding advice), 44th CAA (1-time return). Art 74(2) judicial non-inquiry of advice. 91st CAA 2003: 15% LS ceiling on ministers. 6-month non-member rule (Art 75(5)).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-08',
    legacyUnitId: 'LEG-POL-040',
    topicNumber: 11,
    localHeading: 'Collective vs Individual Responsibility & Cabinet Architecture',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 75(3) Collective responsibility to Lok Sabha; No-confidence motion; Cabinet solidarity doctrine. Article 75(2) Individual responsibility (Pleasure of President on PM advice). Article 78 PM duties to inform President. Cabinet word in Art 352 (44th CAA).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-09',
    legacyUnitId: 'LEG-POL-040',
    topicNumber: 11,
    localHeading: 'Cabinet Committees: Extra-Constitutional Decision-Making Framework',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Rules of Business (Art 77(3)): Political Affairs Committee (Super-Cabinet, PM chair), Appointments Committee of Cabinet (ACC, PM chair), Cabinet Committee on Economic Affairs (CCEA, PM chair), Cabinet Committee on Parliamentary Affairs (chaired by Minister, not PM).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T11-10',
    legacyUnitId: 'LEG-POL-021',
    topicNumber: 11,
    localHeading: 'Attorney General of India (Article 76) & Law Officers Architecture',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 76: SC Judge qualifications, pleasure of President. Article 88: Right to speak and participate in Parliament/Committees without voting right. Audience in all courts. Private practice allowed with restrictions. Solicitor General is non-constitutional statutory officer.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 12: THE STATE EXECUTIVE (LEG-POL-050, 008, 021)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T12-01',
    legacyUnitId: 'LEG-POL-050',
    topicNumber: 12,
    localHeading: 'Governor of the State: Constitutional Dual Role, Appointment & Removal',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 153-157: Dual role (State Head + Centre Agent). 7th CAA (dual state governor). Pleasure of President (Art 156). BP Singhal (2010): Arbitrary removal unconstitutional, subject to judicial review. Sarkaria/Punchhi conventions on outsider & active politics.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T12-02',
    legacyUnitId: 'LEG-POL-050',
    topicNumber: 12,
    localHeading: 'Governor Discretionary Powers (Article 163) & Floor Test Rules',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 163(1) explicit constitutional discretion; Art 163(2) finality of Governor decision. Constitutional vs Situational discretion. SR Bommai 1994 (Floor test is mandatory; not subjective pleasure). Nabam Rebia 2016 (Narrow discretion, house summoning on COM aid/advice).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T12-03',
    legacyUnitId: 'LEG-POL-050',
    topicNumber: 12,
    localHeading: 'Governor Legislative Powers, Bill Reservation (Arts 200-201), Ordinance & Pardoning',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 200 (Assent, Withhold, Return, Reserve for President). Article 201 (Presidential veto on state bills). Article 213 (State Ordinance power). Article 161 (Pardoning power: cannot pardon death sentence, no court-martial jurisdiction). MLC 1/6th nomination (cooperative movement).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T12-04',
    legacyUnitId: 'LEG-POL-021',
    topicNumber: 12,
    localHeading: 'Advocate General for the State (Article 165) & Legislative Rights (Art 177)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 165: Highest law officer in State, HC Judge qualifications, pleasure of Governor. Article 177: Right to speak and participate in Assembly/Council without voting right.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T12-05',
    legacyUnitId: 'LEG-POL-008',
    topicNumber: 12,
    localHeading: 'Chief Minister & State Council of Ministers: Architecture (Arts 163, 164, 167)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 163, 164, 167: CM real executive. 91st CAA: 15% assembly ceiling and minimum 12 ministers limit (Art 164(1A)). Collective responsibility to Legislative Assembly (Art 164(2)). Shamsher Singh 1974 aid & advice rule.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 13: CIVIL SERVICES & PUBLIC SERVICES (LEG-POL-042)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T13-01',
    legacyUnitId: 'LEG-POL-042',
    topicNumber: 13,
    localHeading: 'Constitutional Framework of Public Services (Articles 308-309) & Classification',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Part XIV, Articles 308, 309: Parliament and State Legislature powers to regulate recruitment and conditions of service. Classification: All-India Services, Central Civil Services, State Civil Services.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T13-02',
    legacyUnitId: 'LEG-POL-042',
    topicNumber: 13,
    localHeading: 'All-India Services (Article 312) & Rajya Sabha Exclusive Federal Role',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 312: Creation of new AIS (IAS, IPS, IFS - Indian Forest Service created 1966). Requires Rajya Sabha resolution by 2/3rd members present and voting. Dual control mechanism (State immediate, Centre ultimate).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T13-03',
    legacyUnitId: 'LEG-POL-042',
    topicNumber: 13,
    localHeading: 'Doctrine of Pleasure (Article 310) & Article 311 Safeguards with Exceptions',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 310 (Pleasure of President/Governor). Article 311(1) (No dismissal by subordinate authority). Article 311(2) (Reasonable opportunity of being heard). Three 311(2) exceptions: Criminal conviction (2a), Impracticability (2b), Security of State (2c). Union of India v. Tulsiram Patel (1985).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
];

export async function seedBatchP1SemanticInventory() {
  console.log(`Seeding Batch P1 semantic units (${BATCH_P1_SEMANTIC_UNITS.length} units)...`);

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

  for (const unit of BATCH_P1_SEMANTIC_UNITS) {
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

  console.log(`Successfully seeded ${BATCH_P1_SEMANTIC_UNITS.length} Batch P1 semantic units.`);
  return BATCH_P1_SEMANTIC_UNITS.length;
}
