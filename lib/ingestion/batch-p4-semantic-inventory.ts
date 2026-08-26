import { db } from '../db/client';

export interface BatchP4SemanticUnit {
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

export const BATCH_P4_SEMANTIC_UNITS: BatchP4SemanticUnit[] = [
  // =========================================================================
  // TOPIC 19: CENTRE–STATE RELATIONS & FEDERAL STRUCTURE
  // =========================================================================
  {
    semanticUnitId: 'SEM-T19-01',
    legacyUnitId: 'LEG-POL-015',
    topicNumber: 19,
    localHeading: 'Nature of Indian Federalism: Quasi-Federal Structure & Asymmetric Federalism (Arts 371-371J)',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 1 "Union of States". K.C. Wheare "Quasi-federal", Granville Austin "Cooperative federalism". Unitary tilt (single constitution, integrated judiciary, emergency, flexible amendment). Asymmetric federalism via special provisions (Arts 371 to 371-J) and 5th/6th Schedules. Federalism as Basic Structure (S.R. Bommai 1994).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-02',
    legacyUnitId: 'LEG-POL-007',
    topicNumber: 19,
    localHeading: 'Territorial Legislative Jurisdiction (Art 245) & Doctrine of Territorial Nexus',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 245: Parliament legislates for whole/part of India and has extra-territorial legislative competence. State legislatures make laws for whole/part of State. Doctrine of Territorial Nexus (State of Bombay v. RMD Chamarbaugwala).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-03',
    legacyUnitId: 'LEG-POL-007',
    topicNumber: 19,
    localHeading: 'Subject-Matter Distribution (Art 246, 7th Schedule) & Residuary Powers (Art 248)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Three-fold distribution under 7th Schedule: List I (Union List - 100 items), List II (State List - 61 items), List III (Concurrent List - 52 items). 42nd CAA 1976 transferred 5 subjects from State to Concurrent List (Education, Forests, Weights/Measures, Protection of wild animals/birds, Administration of justice). Article 248: Residuary powers of legislation vest exclusively in Parliament.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-04',
    legacyUnitId: 'LEG-POL-007',
    topicNumber: 19,
    localHeading: 'Parliamentary Legislation on State List (Arts 249, 250, 252, 253, 356) & Repugnancy (Art 254)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '5 Exceptional situations for Parliamentary law on State List: (1) Art 249 Rajya Sabha resolution by 2/3rd present & voting in national interest; (2) Art 250 National Emergency; (3) Art 252 Consent of 2+ States; (4) Art 253 Implementing International Treaties; (5) Art 356 President Rule. Article 254 Repugnancy rule & Presidential assent proviso. Doctrines of Pith & Substance, Colourable Legislation.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-05',
    legacyUnitId: 'LEG-POL-005',
    topicNumber: 19,
    localHeading: 'Centre-State Administrative Directives (Arts 256-257), Sanctions (Art 365) & Art 355 Duty',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 256 & 257: Executive power of Union to give binding directions to States regarding compliance with Union laws, construction/maintenance of means of communication of national/military importance, and protection of railways. Article 365: Failure to comply with Union directions deemed breakdown of constitutional machinery (grounds for Art 356). Article 355: Duty of Union to protect States against external aggression and internal disturbance.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-06',
    legacyUnitId: 'LEG-POL-005',
    topicNumber: 19,
    localHeading: 'All India Services (Art 312), Delegation of Functions (Arts 258/258A) & Water Disputes (Art 262)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 312: Creation of new All India Services by Parliament on Rajya Sabha resolution passed by 2/3rd present and voting (IAS, IPS, IFoS 1966). Delegation of executive powers under Arts 258 & 258A. Full Faith and Credit under Art 261. Inter-State River Water Disputes under Art 262 and Inter-State River Water Disputes Act 1956 (ouster of SC jurisdiction).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-07',
    legacyUnitId: 'LEG-POL-005',
    topicNumber: 19,
    localHeading: 'Inter-State Council (Art 263), Zonal Councils & Federal Commissions (Sarkaria, Punchhi)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 263: Inter-State Council set up by Presidential Order in 1990 on Sarkaria Commission advice (chaired by PM, all CMs, 6 Union Cabinet Ministers). Zonal Councils (5 statutory under States Reorganisation Act 1956 + North-Eastern Council 1971; Union Home Minister is common chairman). Sarkaria Commission (1983-88), Punchhi Commission (2007-10), NCRWC (2002).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-08',
    legacyUnitId: 'LEG-POL-006',
    topicNumber: 19,
    localHeading: 'Division of Taxing Powers, GST Council (Art 279A) & 101st Constitutional Amendment Act 2016',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Part XII Arts 268-293. 101st CAA 2016 inserted Goods and Services Tax (GST) under Art 246A (concurrent legislative power on GST) and GST Council under Art 279A. GST Council decision formula: Union weight 1/3rd, States weight 2/3rd, 3/4th weighted majority required to pass decisions.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T19-09',
    legacyUnitId: 'LEG-POL-006',
    topicNumber: 19,
    localHeading: 'Finance Commission (Art 280), Grants-in-Aid (Art 275 vs Art 282) & Borrowing Powers (Arts 292-293)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 280: Quasi-judicial Finance Commission constituted every 5 years by President (Chairman + 4 members). Vertical devolution (Divisible pool to States) & Horizontal devolution formula. Grants-in-Aid: Statutory Grants under Art 275 (on FC recommendation, charged on CFI) vs Discretionary Grants under Art 282 (spending power for public purposes). Borrowing powers: Centre under Art 292 vs States under Art 293 (State cannot borrow abroad; requires Centre consent if existing central loan outstanding).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 20: EMERGENCY PROVISIONS & SAFEGUARDS
  // =========================================================================
  {
    semanticUnitId: 'SEM-T20-01',
    legacyUnitId: 'LEG-POL-014',
    topicNumber: 20,
    localHeading: 'National Emergency Architecture (Article 352): Grounds, Approval & 44th CAA 1978 Safeguards',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Part XVIII (Arts 352-360). Article 352 Grounds: War, External Aggression, Armed Rebellion. 44th CAA 1978 substituted "armed rebellion" for "internal disturbance", required WRITTEN communication of Cabinet, reduced approval window from 2 months to 1 month, mandated SPECIAL MAJORITY in both Houses, 6-month periodic re-approval, and 1/10th Lok Sabha requisition for disapproval motion by Simple Majority.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T20-02',
    legacyUnitId: 'LEG-POL-014',
    topicNumber: 20,
    localHeading: 'National Emergency Effects: Federal Centralization, Life of Lok Sabha & Financial Reallocation',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Executive power of Centre extends to giving directions to States on ANY matter (State governments NOT dismissed). Parliament can make laws on State List (State legislature NOT suspended/dissolved, but concurrency created). Life of Lok Sabha can be extended by 1 year at a time (max 6 months after emergency ceases). President can modify financial devolution under Art 354.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T20-03',
    legacyUnitId: 'LEG-POL-014',
    topicNumber: 20,
    localHeading: 'Suspension of Fundamental Rights during National Emergency: Article 358 vs Article 359',
    contentType: 'COMPARISON',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 358: Automatically suspends Article 19 freedoms ONLY for External Emergency (war/external aggression), NOT for armed rebellion (44th CAA); applies to entire India. Article 359: President can by order suspend right to move courts for enforcement of specified FRs (for external or internal emergency); 44th CAA strictly barred suspension of Articles 20 and 21 under any circumstances.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T20-04',
    legacyUnitId: 'LEG-POL-014',
    topicNumber: 20,
    localHeading: 'President\'s Rule (Article 356 & Article 365): Grounds, Procedure & Parliamentary Duration Limits',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 356: Breakdown of constitutional machinery in State on Governor report or suo motu. Article 365: Failure of State to comply with Union directions. Parliamentary approval within 2 MONTHS by SIMPLE MAJORITY in both Houses. Valid for 6 months, extendable up to 1 year; max 3 years ONLY if National Emergency in operation AND Election Commission certifies difficulty in holding elections (44th CAA).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T20-05',
    legacyUnitId: 'LEG-POL-014',
    topicNumber: 20,
    localHeading: 'President\'s Rule Consequences: State Executive Dismissal, Legislative Delegation & Court Insulation',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'President dismisses Council of Ministers (Governor administers with chief secretary). State Assembly suspended or dissolved (cannot be dissolved until Parliament approves). Parliament exercises state legislative powers or delegates to President/designated authority (Presidential Acts). High Court powers and independence remain completely untouched by Art 356.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T20-06',
    legacyUnitId: 'LEG-POL-014',
    topicNumber: 20,
    localHeading: 'S.R. Bommai v. Union of India (1994) Doctrine: Judicial Review & Anti-Abuse Principles for Art 356',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'S.R. Bommai v. Union of India (1994) 9-judge bench: Article 356 proclamation is subject to judicial review; Burden of proof on Centre to show relevant material; Assembly cannot be dissolved before Parliamentary approval; Floor test in Assembly is the sole constitutional test of majority; Secularism is Basic Structure; Court has power to restore dissolved Assembly and dismissed government if Art 356 is struck down.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T20-07',
    legacyUnitId: 'LEG-POL-014',
    topicNumber: 20,
    localHeading: 'Financial Emergency (Article 360): Invocation, Approval, Indefinite Duration & Powers',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 360: Threat to financial stability or credit of India or part of territory. Parliamentary approval within 2 MONTHS by SIMPLE MAJORITY. ONCE APPROVED, CONTINUES INDEFINITELY WITHOUT PERIODIC PARLIAMENTARY APPROVAL until revoked by President. Powers: Directions to observe canons of financial propriety, reduction of salaries of public servants including SC/HC Judges, reservation of all money/financial bills passed by State for President consideration. Never declared in India.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
];

export async function seedBatchP4SemanticInventory() {
  console.log(`Seeding Batch P4 semantic units (${BATCH_P4_SEMANTIC_UNITS.length} units)...`);

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

  for (const unit of BATCH_P4_SEMANTIC_UNITS) {
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

  console.log(`Successfully seeded ${BATCH_P4_SEMANTIC_UNITS.length} Batch P4 semantic units.`);
  return BATCH_P4_SEMANTIC_UNITS.length;
}
