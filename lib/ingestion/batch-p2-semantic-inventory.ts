import { db } from '../db/client';

export interface BatchP2SemanticUnit {
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

export const BATCH_P2_SEMANTIC_UNITS: BatchP2SemanticUnit[] = [
  // =========================================================================
  // TOPIC 14: THE UNION LEGISLATURE (PARLIAMENT ARCHITECTURE & PROCEDURE)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T14-01',
    legacyUnitId: 'LEG-POL-058',
    topicNumber: 14,
    localHeading: 'Parliament Architecture: Bicameralism (Art 79), Lok Sabha & Rajya Sabha Composition (Arts 80-81)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 79 (President + RS + LS). Article 80 (RS max 250, 238 elected + 12 nominated in Literature/Science/Art/Social Service). Article 81 (LS 543 elected; 104th CAA abolished Anglo-Indian quota). Article 83 (RS permanent house, 6-yr tenure, 1/3rd retire every 2nd yr; LS 5-yr term).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-02',
    legacyUnitId: 'LEG-POL-058',
    topicNumber: 14,
    localHeading: 'Parliamentary Sessions, Prorogation, Dissolution & Quorum (Arts 83, 85, 100)',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 85 (President summons, max 6 months gap between sessions). Adjournment (presiding officer) vs Prorogation/Dissolution (President). Article 100(3) Quorum is 10% (1/10th) of total membership (55 LS, 25 RS).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-03',
    legacyUnitId: 'LEG-POL-058',
    topicNumber: 14,
    localHeading: 'Presiding Officers: Speaker of Lok Sabha vs Chairman of Rajya Sabha (Arts 89, 93, 100)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Speaker (Art 93, resigns to Deputy Speaker, presides over Joint Sittings Art 118(4), certifies Money Bills Art 110(3), casting vote Art 100). Chairman of RS (Art 89, VP ex-officio, not a member of RS, resigns to President as VP).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-04',
    legacyUnitId: 'LEG-POL-058',
    topicNumber: 14,
    localHeading: 'Disqualification of Members: Article 102 vs 10th Schedule Anti-Defection',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 102(1) disqualifications (Office of profit, unsound mind, insolvency, citizenship) decided by President on binding opinion of ECI (Art 103). 10th Schedule disqualifications (defection) decided by Speaker/Chairman subject to judicial review (Kihoto Hollohan 1992).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-05',
    legacyUnitId: 'LEG-POL-029',
    topicNumber: 14,
    localHeading: 'Classification of Bills: Ordinary, Money (Art 110), Financial Types I & II (Art 117)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 110 (Money Bill contains ONLY 7 specified tax/borrowing/CFI matters; introduced in LS only with President recommendation; RS 14-day delay). Financial Bill I (Art 117(1) - LS only, recommendation). Financial Bill II (Art 117(3) - either House, recommendation for consideration).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-06',
    legacyUnitId: 'LEG-POL-029',
    topicNumber: 14,
    localHeading: 'Joint Sitting Architecture & Constitutional Exclusions (Article 108)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 108: Deadlock on Ordinary & Financial Bills after 6 months. Summoned by President, presided by Speaker. Passed by Simple Majority of total members present and voting. STRICTLY BARRED for Money Bills (Art 109) and Constitutional Amendment Bills (Art 368).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-07',
    legacyUnitId: 'LEG-POL-029',
    topicNumber: 14,
    localHeading: 'Lapse of Bills on Dissolution of Lok Sabha (Article 107 Rules)',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 107: Bill pending in LS lapses; Bill passed by LS pending in RS lapses. Bill originated in RS and pending in RS does NOT lapse. Bill passed by both Houses waiting Presidential assent does NOT lapse. Bill returned for reconsideration does NOT lapse.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-08',
    legacyUnitId: 'LEG-POL-030',
    topicNumber: 14,
    localHeading: 'The Union Budget: 6-Stage Procedure & Power of Purse (Arts 112–116, 265, 266)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Annual Financial Statement (Art 112). 6 Stages: Presentation (Feb 1), General Discussion, DRSC Scrutiny, Voting on Demands for Grants (LS exclusive, Art 113), Appropriation Bill (Art 114), Finance Bill (tax proposals within 75 days). Vote on Account (Art 116(1)(a)).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-09',
    legacyUnitId: 'LEG-POL-030',
    topicNumber: 14,
    localHeading: 'Charged vs Voted Expenditure & High Court Judges Salary/Pension Trap (Art 112(3))',
    contentType: 'EXAM_TRAP',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 112(3) Charged on CFI (discussed but not voted): President/VP/SC Judges/CAG/UPSC salaries. High Court Judges SALARIES are charged on State Consolidated Fund, but High Court Judges PENSIONS are charged on Consolidated Fund of India.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-10',
    legacyUnitId: 'LEG-POL-030',
    topicNumber: 14,
    localHeading: 'Three Cut Motions (Policy, Economy, Token) & Guillotine Mechanism',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Cut Motions in Lok Sabha: Policy Disapproval (reduced to ₹1), Economy Cut (reduced by specific sum), Token Cut (reduced by ₹100). Passage equals No-Confidence. Guillotine: Putting all undiscussed demands for grants to vote on final day without debate.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-11',
    legacyUnitId: 'LEG-POL-030',
    topicNumber: 14,
    localHeading: 'Three Financial Standing Committees: PAC (1921), Estimates (1950), COPU (1964)',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Public Accounts Committee (22 mem: 15 LS + 7 RS; opposition chair convention since 1967; examines CAG reports). Estimates Committee (30 mem: ALL LS ONLY; largest committee; John Mathai). COPU (22 mem: 15 LS + 7 RS; Krishna Menon 1964). Ministers CANNOT be members.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-12',
    legacyUnitId: 'LEG-POL-030',
    topicNumber: 14,
    localHeading: 'Departmentally Related Standing Committees (24 DRSCs) & Committee Powers',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: '24 DRSCs (16 under Lok Sabha, 8 under Rajya Sabha). Each has 31 members (21 LS + 10 RS) nominated by Speaker/Chairman. Scrutinize budget Demands for Grants during 3-4 week recess; examine bills and annual reports.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T14-13',
    legacyUnitId: 'LEG-POL-058',
    topicNumber: 14,
    localHeading: 'Parliamentary Privileges (Article 105), Motions & Question/Zero Hour Architecture',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 105 (Freedom of speech in Parliament, immunity from court proceedings for speech/vote). Individual privileges (civil arrest immunity 40 days before/after session). Collective privileges (in camera sittings, punish contempt). Question Hour (Starred/Unstarred/Short notice). Zero Hour (Indian innovation 1962).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 15: THE STATE LEGISLATURE (VIDHAN SABHA & VIDHAN PARISHAD)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T15-01',
    legacyUnitId: 'LEG-POL-051',
    topicNumber: 15,
    localHeading: 'State Legislature Architecture: Bicameral vs Unicameral States & Vidhan Sabha (Art 170)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 168 (6 bicameral states: UP, Bihar, Maharashtra, Karnataka, Andhra Pradesh, Telangana). Article 170: Legislative Assembly (Vidhan Sabha) strength max 500, min 60 (exceptions: Sikkim 32, Goa 40, Mizoram 40). 5-year term; direct election via FPTP.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T15-02',
    legacyUnitId: 'LEG-POL-051',
    topicNumber: 15,
    localHeading: 'Creation and Abolition of Legislative Councils (Article 169 Procedure)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 169: Two-stage constitutional mechanism. (1) State Assembly passes resolution by SPECIAL MAJORITY (majority of total membership + 2/3rd present & voting). (2) Parliament passes ordinary law by SIMPLE MAJORITY. Not deemed an amendment under Article 368.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T15-03',
    legacyUnitId: 'LEG-POL-051',
    topicNumber: 15,
    localHeading: '5-Tier Composition Formula of Legislative Council (Article 171) & Governor Nomination',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 171: Max 1/3rd of Assembly, Min 40. Five-tier composition: 1/3rd elected by Local Bodies, 1/12th by 3-yr Graduates, 1/12th by 3-yr Teachers, 1/3rd by MLAs, 1/6th nominated by Governor from Literature/Science/Art/COOPERATIVE MOVEMENT/Social Service.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T15-04',
    legacyUnitId: 'LEG-POL-051',
    topicNumber: 15,
    localHeading: 'State Legislative Procedure: 4-Month Delaying Power & Absence of Joint Sitting',
    contentType: 'COMPARISON',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Legislative Council has NO EQUAL POWER with Assembly on Ordinary Bills. Council can delay ordinary bill for max 3 months in first instance and 1 month in second instance (total 4 months max). Assembly overrides Council by passing bill again. NO JOINT SITTING in State Legislature.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T15-05',
    legacyUnitId: 'LEG-POL-051',
    topicNumber: 15,
    localHeading: 'Privileges (Art 194), Disqualifications (Art 191) & Rajasthan Assembly (200 Seats)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 194 state legislative privileges. Article 191 disqualifications of MLAs/MLCs. Rajasthan Legislative Assembly: Unicameral legislature, 200 seats (34 SC, 25 ST, 141 General), 1st assembly 1952 (160 seats) expanded to 200 seats in 1977.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
];

export async function seedBatchP2SemanticInventory() {
  console.log(`Seeding Batch P2 semantic units (${BATCH_P2_SEMANTIC_UNITS.length} units)...`);

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

  for (const unit of BATCH_P2_SEMANTIC_UNITS) {
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

  console.log(`Successfully seeded ${BATCH_P2_SEMANTIC_UNITS.length} Batch P2 semantic units.`);
  return BATCH_P2_SEMANTIC_UNITS.length;
}
