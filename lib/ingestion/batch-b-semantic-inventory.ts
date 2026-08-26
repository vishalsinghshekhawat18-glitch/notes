import { db } from '../db/client';

export interface BatchBSemanticUnit {
  semanticUnitId: string;
  topicNumber: 5 | 6 | 7 | 8;
  pdfPage: number;
  printedPage: number;
  localHeading: string;
  contentType: 'CONSTITUTIONAL_TEXT' | 'CONCEPT' | 'STATUTORY_FRAMEWORK' | 'HISTORICAL_TIMELINE' | 'CASE_LAW' | 'COMPARISON_TABLE' | 'POLICY_ANALYSIS';
  origin: 'TEXT_DERIVED' | 'TABLE_DERIVED' | 'MIXED';
  shortDescription: string;
  requiresVerification: boolean;
  status: 'INVENTORIED' | 'CANONICALIZED' | 'VERIFIED';
}

export const BATCH_B_SEMANTIC_UNITS: BatchBSemanticUnit[] = [
  // =========================================================================
  // TOPIC 5: PART I — UNION AND ITS TERRITORY (PDF 41–44, Printed pp. 35–38)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T5-01',
    topicNumber: 5,
    pdfPage: 41,
    printedPage: 35,
    localHeading: 'Article 1: Union of States, Indestructibility & Dr. Ambedkar Rationale',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 1(1) declares "India, that is Bharat, shall be a Union of States". Dr. Ambedkar explained two reasons: Indian federation is not the result of an agreement among states, and states have no right to secede from the federation.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T5-02',
    topicNumber: 5,
    pdfPage: 41,
    printedPage: 35,
    localHeading: 'Article 1(3): Territory of India vs Union of India',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Territory of India (Article 1(3)) comprises (a) Territories of States, (b) Union Territories, and (c) Acquired territories. "Territory of India" is wider than "Union of India" (which includes only States). Acquired territories include Dadra & Nagar Haveli (1954), Goa, Daman & Diu (1961), Puducherry (1962), Sikkim (1975).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T5-03',
    topicNumber: 5,
    pdfPage: 42,
    printedPage: 36,
    localHeading: 'Article 2: Admission or Establishment of New States',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Parliament may by law admit into the Union, or establish, new States on terms and conditions it thinks fit. Relates to foreign/external territories not previously part of India.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T5-04',
    topicNumber: 5,
    pdfPage: 42,
    printedPage: 36,
    localHeading: 'Article 3: Internal Reorganisation of States & Statutory Procedure',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Formation of new states, alteration of areas, boundaries, or names of existing states. Procedure: Prior recommendation of President required; President refers bill to concerned State Legislature for views within specified time (views are NOT binding on President or Parliament); passed by Simple Majority. India is an "Indestructible Union of Destructible States".',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T5-05',
    topicNumber: 5,
    pdfPage: 43,
    printedPage: 37,
    localHeading: 'Article 4: Non-Article 368 Character of Reorganisation Laws',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Laws made under Articles 2 and 3 provide for amendment of First and Fourth Schedules and are not deemed to be amendments of the Constitution under Article 368 (enacted by Simple Majority).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T5-06',
    topicNumber: 5,
    pdfPage: 43,
    printedPage: 37,
    localHeading: 'Cession of Indian Territory & The Berubari Union Doctrine (1960)',
    contentType: 'CASE_LAW',
    origin: 'TEXT_DERIVED',
    shortDescription: 'In Re Berubari Union (1960): Supreme Court held that Article 3 does NOT empower Parliament to cede Indian territory to a foreign state. Cession requires an Article 368 Constitutional Amendment (e.g. 9th Amendment 1960, 100th Amendment 2015). Settlement of a boundary dispute does not require constitutional amendment (Maganbhai Ishwarbhai Patel 1969).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T5-07',
    topicNumber: 5,
    pdfPage: 44,
    printedPage: 38,
    localHeading: 'Union Territories: Constitutional Architecture & 100th Amendment Enclaves Exchange',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Union Territories created for political/strategic reasons, cultural distinction, administrative convenience, or special treatment. 100th Constitutional Amendment Act 2015 operationalized 1974 Land Boundary Agreement with Bangladesh (transferred 111 enclaves to Bangladesh, acquired 51 enclaves from Bangladesh).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 6: UNIFICATION OF INDIA (PDF 45–48, Printed pp. 39–42)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T6-01',
    topicNumber: 6,
    pdfPage: 45,
    printedPage: 39,
    localHeading: 'Lapse of British Paramountcy & Patel-Menon Integration Framework',
    contentType: 'HISTORICAL_TIMELINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Section 7(1)(b) of Indian Independence Act 1947 lapsed British paramountcy over 565 Princely States (552 contiguous to India). Sardar Vallabhbhai Patel and V.P. Menon utilized Standstill Agreements and Instruments of Accession (Defence, External Affairs, Communications) alongside Privy Purses to integrate 549 states prior to Aug 15, 1947.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T6-02',
    topicNumber: 6,
    pdfPage: 46,
    printedPage: 40,
    localHeading: 'Integration of Challenging States: Junagadh, Hyderabad & Jammu and Kashmir',
    contentType: 'HISTORICAL_TIMELINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Junagadh (Nawab fled; public uprising; plebiscite in Feb 1948 voted for India); Hyderabad (Nizam & Razakars; Operation Polo / Police Action Sept 13-18, 1948 under Maj. Gen. J.N. Chaudhuri); Jammu & Kashmir (Pakistani tribal invasion; Maharaja Hari Singh signed Instrument of Accession on Oct 26, 1947; Article 370 special provisions; 2019 Reorganisation).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T6-03',
    topicNumber: 6,
    pdfPage: 47,
    printedPage: 41,
    localHeading: 'Liberation and Integration of French and Portuguese Colonial Enclaves',
    contentType: 'HISTORICAL_TIMELINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'French Enclaves (Chandernagore 1949 plebiscite; Puducherry, Karikal, Mahe, Yanam de facto Nov 1, 1954, de jure treaty 1956/1962, 14th Amendment 1962). Portuguese Enclaves (Dadra & Nagar Haveli 1954 liberation, 10th Amendment 1961; Goa, Daman & Diu Operation Vijay Dec 18-19, 1961, 12th Amendment 1962; Goa 25th State in 1987 via 56th Amendment).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T6-04',
    topicNumber: 6,
    pdfPage: 48,
    printedPage: 42,
    localHeading: 'Integration of Sikkim: From Associate State to Full Statehood & 1950 4-Fold Classification',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Sikkim under Chogyal dynasty was Indian protectorate (1950). 35th Amendment 1974 added Article 2A & 10th Schedule ("Associate State"). 36th Amendment 1975 repealed Art 2A and made Sikkim the 22nd State of India (Article 371F). 1950 Constitution 4-fold classification: Part A (9 Governor provinces), Part B (9 Princely state unions), Part C (10 Chief Commissioner provinces), Part D (Andaman & Nicobar Islands).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 7: REORGANISATION OF STATES (PDF 49–53, Printed pp. 43–47)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T7-01',
    topicNumber: 7,
    pdfPage: 49,
    printedPage: 43,
    localHeading: 'Linguistic Demands & Early Commissions: S.K. Dhar Commission & JVP Committee',
    contentType: 'HISTORICAL_TIMELINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Linguistic state demand originated in 1920 INC Nagpur session. S.K. Dhar Commission (June 1948) rejected linguistic reorganization, recommending administrative convenience. JVP Committee (Dec 1948: Jawaharlal Nehru, Vallabhbhai Patel, Pattabhi Sitaramayya) formally rejected language as basis for states.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T7-02',
    topicNumber: 7,
    pdfPage: 50,
    printedPage: 44,
    localHeading: 'Creation of Andhra State (1953) & The Fazal Ali Commission (SRC 1953–55)',
    contentType: 'HISTORICAL_TIMELINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Potti Sreeramulu 56-day hunger strike death led to creation of Andhra State on Oct 1, 1953 (first linguistic state). States Reorganisation Commission appointed in Dec 1953: Justice Fazal Ali (Chairman), K.M. Panikkar, H.N. Kunzru. Accepted language as basis but rejected "One Language, One State". Laid down 4 principles: National Unity/Security, Linguistic/Cultural Homogeneity, Financial/Administrative Viability, Successful Plan Execution.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T7-03',
    topicNumber: 7,
    pdfPage: 51,
    printedPage: 45,
    localHeading: 'States Reorganisation Act 1956, 7th Amendment & Post-1956 Evolution (1960–1987)',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TABLE_DERIVED',
    shortDescription: 'States Reorganisation Act 1956 & 7th Amendment 1956 created 14 States and 6 UTs (abolished Part A, B, C, D classification). Post-1956 additions: 1960 Gujarat/Maharashtra (15th state), 1963 Nagaland (16th), 1966 Haryana (17th) & Chandigarh UT, 1971 HP (18th), 1972 Manipur (19th), Tripura (20th), Meghalaya (21st), 1975 Sikkim (22nd), 1987 Mizoram (23rd), Arunachal (24th), Goa (25th).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T7-04',
    topicNumber: 7,
    pdfPage: 52,
    printedPage: 46,
    localHeading: 'State Reorganisation from 2000 to Present: 28 States & 8 Union Territories',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TABLE_DERIVED',
    shortDescription: 'Year 2000 new states: Chhattisgarh (26th — Nov 1), Uttarakhand (27th — Nov 9), Jharkhand (28th — Nov 15). 2014 Telangana (29th — June 2). 2019 J&K Reorganisation Act created UT of J&K and UT of Ladakh (Oct 31, 2019). 2020 Merger of Dadra & Nagar Haveli and Daman & Diu (Jan 26, 2020). Current status: 28 States and 8 UTs.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T7-05',
    topicNumber: 7,
    pdfPage: 53,
    printedPage: 47,
    localHeading: 'Zonal Councils & North-Eastern Council: Inter-State Cooperative Architecture',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Zonal Councils are statutory bodies under Part III of the States Reorganisation Act 1956 (Northern, Central, Eastern, Western, Southern). North-Eastern Council created under North-Eastern Council Act 1971. Common Chairman is Union Home Minister; Chief Ministers act as Vice-Chairman by rotation for 1 year.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },

  // =========================================================================
  // TOPIC 8: CITIZENSHIP (PDF 54–61, Printed pp. 48–55)
  // =========================================================================
  {
    semanticUnitId: 'SEM-T8-01',
    topicNumber: 8,
    pdfPage: 54,
    printedPage: 48,
    localHeading: 'Meaning of Citizenship & Constitutional Rights Exclusive to Citizens',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Citizenship denotes full and equal membership in the political community. Exclusive rights for Indian citizens: Articles 15, 16, 19, 29, 30, right to vote (Article 326), right to contest elections, eligibility for constitutional offices (President, VP, SC/HC judges, Governor, Attorney General, Advocate General).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-02',
    topicNumber: 8,
    pdfPage: 54,
    printedPage: 48,
    localHeading: 'Constitutional Provisions at Commencement: Articles 5 to 11',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Articles 5–11 identify persons who became citizens on Jan 26, 1950: Art 5 (Domicile), Art 6 (Migration from Pakistan), Art 7 (Migrants to Pakistan returning under permit), Art 8 (Indian origin residing abroad), Art 9 (Voluntary foreign citizenship terminates Indian citizenship), Art 10 (Continuance of citizenship rights), Art 11 (Parliament exclusive power to regulate citizenship).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-03',
    topicNumber: 8,
    pdfPage: 55,
    printedPage: 49,
    localHeading: 'Citizenship Act 1955 Overview: 5 Acquisition & 3 Loss Modes',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Enacted under Article 11. Provides 5 modes of acquiring citizenship (Birth, Descent, Registration, Naturalisation, Incorporation of Territory) and 3 modes of losing citizenship (Renunciation, Termination, Deprivation).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-04',
    topicNumber: 8,
    pdfPage: 56,
    printedPage: 50,
    localHeading: 'Acquisition of Citizenship: Detailed Rules & Statutory Evolution',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Detailed acquisition criteria: Birth (evolution from jus soli to requiring at least one parent Indian and neither illegal migrant); Descent (1992 amendment introduced gender equality — mother or father); Registration (PIOs, spouses of citizens, 7 years residence); Naturalisation (12 years aggregate residence, 8th schedule language proficiency, good character); Incorporation of Territory (automatic citizenship by government notification).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-05',
    topicNumber: 8,
    pdfPage: 57,
    printedPage: 51,
    localHeading: 'Loss of Citizenship (Renunciation, Termination, Deprivation) & Single Citizenship',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Loss of citizenship: Renunciation (voluntary declaration by adult; minor children also lose citizenship, can resume at 18); Termination (automatic upon acquiring foreign citizenship); Deprivation (compulsory termination by Central Govt for fraud, disloyalty to Constitution, unlawful trade with enemy, 2 years imprisonment within 5 years of naturalisation, 7 years continuous residence abroad). Single Citizenship principle vs dual citizenship.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-06',
    topicNumber: 8,
    pdfPage: 58,
    printedPage: 52,
    localHeading: 'Overseas Citizen of India (OCI) Genesis, L.M. Singhvi Committee & 2015 PIO Merger',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TEXT_DERIVED',
    shortDescription: 'L.M. Singhvi High Level Committee (2000–2002) recommended dual citizenship framework. Citizenship (Amendment) Act 2003 & 2005 created OCI. Citizenship (Amendment) Act 2015 merged PIO card with OCI card (effective Jan 9, 2015), creating a unified OCI scheme.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-07',
    topicNumber: 8,
    pdfPage: 59,
    printedPage: 53,
    localHeading: 'Rights Conferred (Section 7B) vs Rights Denied to OCI Cardholders (Section 7B(2))',
    contentType: 'STATUTORY_FRAMEWORK',
    origin: 'TEXT_DERIVED',
    shortDescription: 'OCI Rights: Lifelong multi-purpose visa, parity with NRIs in economic, financial, and educational fields, property ownership (except agricultural land/plantations). Rights Denied (Section 7B(2)): No equality of opportunity in public employment (Art 16), cannot be President (Art 58), Vice-President (Art 66), SC Judge (Art 124), HC Judge (Art 217), cannot register as voter (RPA 1950), cannot contest Parliament/State Legislature (RPA 1951).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-08',
    topicNumber: 8,
    pdfPage: 60,
    printedPage: 54,
    localHeading: 'Cancellation of OCI Card (Section 7D) & NRI vs OCI vs PIO Comparative Matrix',
    contentType: 'COMPARISON_TABLE',
    origin: 'TABLE_DERIVED',
    shortDescription: 'Section 7D cancellation grounds: Fraud, disloyalty to Constitution, aiding enemy during war, 2 years imprisonment within 5 years, sovereignty/security interests, dissolution of marriage. Procedural safeguard: Reasonable opportunity of being heard required. Detailed comparative table between NRI (Indian citizen residing abroad), OCI (foreign citizen with special status), and PIO (discontinued).',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
  {
    semanticUnitId: 'SEM-T8-09',
    topicNumber: 8,
    pdfPage: 61,
    printedPage: 55,
    localHeading: 'Policy Analysis: Dual Citizenship Debate, Renunciation Trends & Soft Power',
    contentType: 'POLICY_ANALYSIS',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Policy analysis on Single Citizenship: Over 1.6 million Indians renounced citizenship since 2011 (225,620 in 2023 alone). 85+ countries permit dual citizenship; economic diplomacy, Golden Visas, talent attraction, passport strength. Balancing dual loyalty concerns with diaspora socio-economic integration.',
    requiresVerification: false,
    status: 'CANONICALIZED',
  },
];

export async function seedBatchBSemanticInventory() {
  console.log(`Seeding Batch B semantic units (${BATCH_B_SEMANTIC_UNITS.length} units)...`);

  const source = await db.source.upsert({
    where: { id: 'CERAMIC-POLITY-2026' },
    update: {},
    create: {
      id: 'CERAMIC-POLITY-2026',
      title: 'Ceramic Polity Treatise (2026)',
      sourceType: 'COACHING_COMPILATION',
      authorityTier: 'TIER_C_EDUCATIONAL',
      description: 'Comprehensive Indian Polity treatise by Ceramic Academy (408 pages).',
      identifier: 'Indian-Polity-English-[2026]-pdf.pdf',
    },
  });

  for (const unit of BATCH_B_SEMANTIC_UNITS) {
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
        order: unit.pdfPage,
      },
    });
  }

  console.log(`Successfully seeded ${BATCH_B_SEMANTIC_UNITS.length} Batch B semantic units.`);
}
