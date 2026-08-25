import { db } from '../db/client';

export interface SemanticContentUnit {
  semanticUnitId: string;
  sourceId: string;
  coverageUnitId?: string;
  sourceObservationId?: string;
  provenanceType?: 'DIRECT_1_TO_1' | 'SEMANTIC_DECOMPOSITION' | 'DERIVED_SYNTHESIS';
  pdfPage: number;
  printedPage: number;
  localHeading: string;
  contentType:
    | 'FACT'
    | 'CONSTITUTIONAL_TEXT'
    | 'LEGAL_RULE'
    | 'JUDICIAL_DOCTRINE'
    | 'HISTORICAL_CLAIM'
    | 'CONCEPT'
    | 'DEFINITION'
    | 'EXPLANATION'
    | 'COMPARISON'
    | 'COMPARISON_TABLE'
    | 'VISUAL_DIAGRAM'
    | 'EXCEPTION_QUALIFICATION'
    | 'MNEMONIC'
    | 'PYQ'
    | 'EXAM_TRAP'
    | 'CURRENT_AFFAIRS_REFERENCE';
  origin: 'TEXT_DERIVED' | 'VISUAL_DERIVED' | 'TABLE_DERIVED' | 'MIXED';
  shortDescription: string;
  rawExcerpt?: string;
  requiresVerification: boolean;
  isDuplicate: boolean;
  status: 'INVENTORIED' | 'REVIEW_REQUIRED' | 'VERIFIED' | 'EXCLUDED_WITH_REASON';
  exclusionReason?: string;
  notes?: string;
}

/**
 * Topic 9 (Fundamental Rights, Printed pp. 56-82 / PDF pp. 62-88)
 * Complete Reconciled 45-Unit Semantic Content Inventory.
 * Exactly 1-to-1 mapped to Independent Source Observations OBS-T9-01 to OBS-T9-45.
 */
export const TOPIC_9_SEMANTIC_UNITS: Omit<SemanticContentUnit, 'sourceId' | 'coverageUnitId'>[] = [
  // Page 56 (PDF 62)
  {
    semanticUnitId: 'SEM-T9-01',
    pdfPage: 62,
    printedPage: 56,
    localHeading: 'Overview of Part III — Historical Evolution & Magna Carta of India',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Historical evolution from Magna Carta 1215, French Declaration 1789, US Bill of Rights 1791; Part III called Magna Carta of India.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-02',
    pdfPage: 62,
    printedPage: 56,
    localHeading: 'Natural Rights vs Human Rights vs Fundamental Rights Distinction',
    contentType: 'COMPARISON',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Conceptual distinction between natural rights, human rights, ordinary legal rights, and constitutionally guaranteed fundamental rights.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-03',
    pdfPage: 62,
    printedPage: 56,
    localHeading: '6 Categories of Fundamental Rights Comparison Matrix',
    contentType: 'COMPARISON_TABLE',
    origin: 'TABLE_DERIVED',
    shortDescription: 'Structured classification table of 6 FR categories with article spans; deletion of Right to Property noted.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 57 (PDF 63)
  {
    semanticUnitId: 'SEM-T9-04',
    pdfPage: 63,
    printedPage: 57,
    localHeading: 'Article 12 — Statutory Definition of State (4 Limbs)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '4 statutory limbs: Union Govt/Parliament, State Govt/Legislatures, Local Authorities, Other Authorities.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-05',
    pdfPage: 63,
    printedPage: 57,
    localHeading: 'Article 12 — Judicial Interpretation of "Other Authorities"',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Tests of instrumentality/agency of State: Ajay Hasia, Rajasthan SEB, Zee Telefilms (BCCI held not State under Art 12), Judiciary as State debates.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 58 (PDF 64)
  {
    semanticUnitId: 'SEM-T9-06',
    pdfPage: 64,
    printedPage: 58,
    localHeading: 'Article 13 — Pre/Post Constitutional Inconsistency & Law Definition',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '13(1) Pre-constitutional laws, 13(2) Post-constitutional laws, 13(3) Definition of Law (orders, bye-laws, customs, usages).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-07',
    pdfPage: 64,
    printedPage: 58,
    localHeading: 'Article 13 — Doctrine of Severability',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Only the unconstitutional portion of a statute is void if severable from the valid portion (AK Gopalan, RMDC).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-08',
    pdfPage: 64,
    printedPage: 58,
    localHeading: 'Article 13 — Doctrines of Eclipse and Waiver',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Doctrine of Eclipse (Bhikaji Narayan 1955: pre-constitutional law remains dormant); Doctrine of Waiver (Basheshar Nath: citizens cannot waive fundamental rights).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 59 (PDF 65)
  {
    semanticUnitId: 'SEM-T9-09',
    pdfPage: 65,
    printedPage: 59,
    localHeading: 'Article 14 — Equality Before Law & Equal Protection of Laws',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Dual expressions: Equality before law (UK Common Law/Dicey) and Equal protection of laws (US 14th Amendment); Personal scope covers "any person".',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-10',
    pdfPage: 65,
    printedPage: 59,
    localHeading: 'Article 14 — Reasonable Classification vs Class Legislation',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Prohibition of class legislation; 2-pronged test: Intelligible Differentia and Rational Nexus (Anwar Ali Sarkar, Chiranjit Lal, Ram Krishna Dalmia).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-11',
    pdfPage: 65,
    printedPage: 59,
    localHeading: 'Article 14 — Dynamic Non-Arbitrariness Doctrine',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'EP Royappa (1974), Maneka Gandhi (1978), Ajay Hasia (1981); Equality is antithetical to arbitrariness.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 60 (PDF 66)
  {
    semanticUnitId: 'SEM-T9-12',
    pdfPage: 66,
    printedPage: 60,
    localHeading: 'Article 15 — Prohibited Grounds & Special Protective Clauses',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '15(1) & 15(2) Prohibition on 5 grounds (religion, race, caste, sex, place of birth); 15(3) women/children; 15(4) 1st Amendment 1951 (Champakam); 15(5) 93rd Amendment 2005.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-13',
    pdfPage: 66,
    printedPage: 60,
    localHeading: 'Sub Topic 1: Creamy Layer Concept for Backward Classes',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Meaning of Creamy Layer for OBCs, Ram Nandan Committee 1993, and income threshold evolution (1 lakh in 1993 to 8 lakh in 2017).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 61 (PDF 67)
  {
    semanticUnitId: 'SEM-T9-14',
    pdfPage: 67,
    printedPage: 61,
    localHeading: 'Article 16 — Equality of Opportunity in Public Employment',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '16(1) & 16(2) 7 prohibited grounds (including Descent and Residence); 16(3) Parliamentary residence qualification; 16(4) reservation.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-15',
    pdfPage: 67,
    printedPage: 61,
    localHeading: 'Articles 16(4A), 16(4B) & SC/ST Promotion Reservation / Seniority Debate',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: '77th Amendment (16(4A)), 81st Amendment (16(4B) 50% cap on backlog vacancies), 85th Amendment (consequential seniority); Arguments on creamy layer in promotion for SC/ST.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 62 (PDF 68)
  {
    semanticUnitId: 'SEM-T9-16',
    pdfPage: 68,
    printedPage: 62,
    localHeading: 'Sub Topic 2: Justice Rohini Commission (OBC Sub-Categorization Model)',
    contentType: 'CURRENT_AFFAIRS_REFERENCE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Constituted Oct 2017 under Article 340; Findings on concentration of reservation benefits; Proposed 4-tier sub-categorization model.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 63 (PDF 69)
  {
    semanticUnitId: 'SEM-T9-17',
    pdfPage: 69,
    printedPage: 63,
    localHeading: '103rd Constitutional Amendment Act 2019 — 10% EWS Reservation',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Inserted Articles 15(6) and 16(6); 8 lakh income criteria; Janhit Abhiyan v. UOI (2022) 3:2 Constitution Bench verdict upholding EWS quota.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 64 (PDF 70)
  {
    semanticUnitId: 'SEM-T9-18',
    pdfPage: 70,
    printedPage: 64,
    localHeading: 'Reservation Landmark Judgments Matrix (1992 Indra Sawhney → 2024 Davinder Singh)',
    contentType: 'COMPARISON_TABLE',
    origin: 'TABLE_DERIVED',
    shortDescription: 'Comprehensive table tracing Indra Sawhney (1992), M. Nagaraj (2006), Jarnail Singh (2018), and State of Punjab v. Davinder Singh (2024 SC/ST sub-classification).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 65 (PDF 71)
  {
    semanticUnitId: 'SEM-T9-19',
    pdfPage: 71,
    printedPage: 65,
    localHeading: 'Article 17 — Abolition of Untouchability & Statutory Framework',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Absolute constitutional prohibition; Protection of Civil Rights Act 1955; SC/ST (POA) Act 1989; Applies against state and private individuals.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-20',
    pdfPage: 71,
    printedPage: 65,
    localHeading: 'Article 18 — Abolition of Titles & National Awards Standing',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '18(1) No title conferred except military/academic; 18(2) Foreign titles barred; Balaji Raghavan v. UOI (1996) national honours upheld.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 66 (PDF 72)
  {
    semanticUnitId: 'SEM-T9-21',
    pdfPage: 72,
    printedPage: 66,
    localHeading: 'Article 19 — 6 Democratic Freedoms & Reasonable Restriction Matrix',
    contentType: 'COMPARISON_TABLE',
    origin: 'TABLE_DERIVED',
    shortDescription: '19(1)(a) Speech, 19(1)(b) Assembly, 19(1)(c) Association/Cooperatives, 19(1)(d) Movement, 19(1)(e) Residence, 19(1)(g) Profession; Paired with 19(2)-19(6) restriction grounds.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 67 (PDF 73)
  {
    semanticUnitId: 'SEM-T9-22',
    pdfPage: 73,
    printedPage: 67,
    localHeading: 'Topic: Right to Internet & Telecommunication Suspension',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Indian Telegraph Act 1885 rules; Anuradha Bhasin v. UOI (2020) & Faheema Shirin v. State of Kerala (2019); Proportionality requirement for shutdowns.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 68 (PDF 74)
  {
    semanticUnitId: 'SEM-T9-23',
    pdfPage: 74,
    printedPage: 68,
    localHeading: 'Topic: Phone Tapping Rules & Privacy Rights (*PUCL 1997*)',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'PUCL v. UOI (1997) phone tapping guidelines; Section 5(2) Telegraph Act grounds; Review committee oversight.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 69 (PDF 75)
  {
    semanticUnitId: 'SEM-T9-24',
    pdfPage: 75,
    printedPage: 69,
    localHeading: 'Topic: Right to Protest vs Public Convenience (*Shaheen Bagh / Amit Sahni 2020*)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Amit Sahni v. Commissioner of Police (2020) Shaheen Bagh ruling: Right to protest cannot occupy public roads indefinitely; Designated protest spaces.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 70 (PDF 76)
  {
    semanticUnitId: 'SEM-T9-25',
    pdfPage: 70,
    printedPage: 70,
    localHeading: 'Article 20 — Protection in Respect of Conviction for Offences',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '20(1) Ex-post facto criminal law protection; 20(2) Double jeopardy (court/tribunal only); 20(3) Self-incrimination (Selvi v. State of Karnataka 2010 narco/polygraph ban).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 71 (PDF 77)
  {
    semanticUnitId: 'SEM-T9-26',
    pdfPage: 71,
    printedPage: 71,
    localHeading: 'Article 21 — Protection of Life & Personal Liberty (Procedure vs Due Process)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'AK Gopalan (1950) literal procedure established by law overturned in Maneka Gandhi (1978) substantive due process; Interplay of Arts 14, 19, 21.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-27',
    pdfPage: 71,
    printedPage: 71,
    localHeading: 'Article 21 — Catalog of 30+ Inferred Substantive Fundamental Rights',
    contentType: 'FACT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Catalog of 30+ implied fundamental rights under Art 21 (human dignity, clean environment, health, shelter, livelihood, speedy trial, legal aid, sleep, emergency medical care).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 72 (PDF 78)
  {
    semanticUnitId: 'SEM-T9-28',
    pdfPage: 72,
    printedPage: 72,
    localHeading: 'Topic 1: Right to Privacy (*K.S. Puttaswamy 2017*)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: '9-judge bench holding privacy as intrinsic part of Article 21 and Part III; 3-fold proportionality test (Legality, Legitimate Goal, Proportionality); UPSC 2017 PYQ callout.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-29',
    pdfPage: 72,
    printedPage: 72,
    localHeading: 'Topic 2: Right to Die with Dignity & Living Wills (*Common Cause 2018*)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Aruna Shanbaug (2011) and Common Cause (2018): Passive euthanasia and advance medical directives (Living Wills) upheld under Article 21.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 73 (PDF 79)
  {
    semanticUnitId: 'SEM-T9-30',
    pdfPage: 73,
    printedPage: 73,
    localHeading: 'Article 21A — Right to Free & Compulsory Education (86th Amendment & RTE Act)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Mohini Jain (1992) & Unni Krishnan (1993); 86th Amendment Act 2002 inserted Article 21A (free & compulsory education 6-14 years); RTE Act 2009.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-31',
    pdfPage: 73,
    printedPage: 73,
    localHeading: 'Article 22 — Protection Against Arrest & Preventive Detention',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Punitive arrest rights (grounds of arrest, 24h magistrate production, legal counsel); Preventive detention safeguards (Advisory Board, 3-month max rule).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 74 (PDF 80)
  {
    semanticUnitId: 'SEM-T9-32',
    pdfPage: 74,
    printedPage: 74,
    localHeading: 'Topic: Preventive Detention & UAPA Bail Jurisprudence',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Section 43D(5) UAPA vs Article 21 speedy trial right; Vernon Gonsalves (2023) and Union of India v. KA Najeeb (2021) Supreme Court rulings on prolonged incarceration.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 75 (PDF 81)
  {
    semanticUnitId: 'SEM-T9-33',
    pdfPage: 81,
    printedPage: 75,
    localHeading: 'Articles 23 & 24 — Right Against Exploitation (Begar, Human Trafficking, Child Labour)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 23 (Trafficking in human beings, Begar, bonded labour prohibited; state compulsory service exception); Article 24 (Child labour prohibition below 14 in factories/mines/hazardous work).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-34',
    pdfPage: 81,
    printedPage: 75,
    localHeading: 'Article 25 — Freedom of Conscience, Profession, Practice and Propagation of Religion',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Freedom of conscience, profession, practice, propagation; Subject to Public Order, Morality, Health and other Part III rights.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-35',
    pdfPage: 81,
    printedPage: 75,
    localHeading: 'Article 25 — Essential Religious Practices Doctrine (Sabarimala / Triple Talaq / Santhara)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Shirur Mutt case (1954), Sabarimala (2018), Shayara Bano (2017), Santhara practice (2015), Jallikattu.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 76 (PDF 82)
  {
    semanticUnitId: 'SEM-T9-36',
    pdfPage: 82,
    printedPage: 76,
    localHeading: 'Articles 26, 27, 28 — Institutional Religious Freedoms & No Religious Tax',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 26 (Religious denominations rights to manage affairs), Article 27 (Prohibition of taxes for religion), Article 28 (Religious instruction in state-funded institutions).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-37',
    pdfPage: 82,
    printedPage: 76,
    localHeading: 'Article 29 — Protection of Interests of Linguistic & Cultural Minorities',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '29(1) Right of any section of citizens with distinct language/script/culture; 29(2) Non-discrimination in state-funded educational institutions on religion/race/caste/language.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 77 (PDF 83)
  {
    semanticUnitId: 'SEM-T9-38',
    pdfPage: 83,
    printedPage: 77,
    localHeading: 'Article 30 — Minorities Right to Establish & Administer Educational Institutions',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Applies to religious and linguistic minorities; 30(1A) 44th Amendment compensation; St. Stephens (1992), TMA Pai (2002), PA Inamdar (2005) regulatory autonomy benchmarks.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-39',
    pdfPage: 83,
    printedPage: 77,
    localHeading: 'Article 31 & 300A — Deletion of Right to Property as Fundamental Right (44th Amendment)',
    contentType: 'HISTORICAL_CLAIM',
    origin: 'TEXT_DERIVED',
    shortDescription: '44th Constitutional Amendment Act 1978 deleted Art 19(1)(f) and Art 31; Transferred to Art 300A (Part XII) as constitutional/legal right.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 78 (PDF 84)
  {
    semanticUnitId: 'SEM-T9-40',
    pdfPage: 84,
    printedPage: 78,
    localHeading: 'Topic: Demolition Actions ("Bulldozer Justice") & Judicial Due Process Directives',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Supreme Court guidelines on punitive demolitions: violation of Rule of Law and Right to Shelter under Article 21; Mandatory 15-day notice and due process requirement.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 79 (PDF 85)
  {
    semanticUnitId: 'SEM-T9-41',
    pdfPage: 85,
    printedPage: 79,
    localHeading: 'Article 32 — Right to Constitutional Remedies ("Heart and Soul of Constitution")',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: '"Heart and Soul of the Constitution" (BR Ambedkar); Fundamental right to approach Supreme Court for Part III enforcement; Basic structure doctrine.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T9-42',
    pdfPage: 85,
    printedPage: 79,
    localHeading: 'Comparative Matrix of 5 Constitutional Writs (Habeas Corpus, Mandamus, etc.)',
    contentType: 'COMPARISON_TABLE',
    origin: 'TABLE_DERIVED',
    shortDescription: 'Comprehensive structured table comparing Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto (Literal meaning, Against whom issued, When not issued).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 80 (PDF 86)
  {
    semanticUnitId: 'SEM-T9-43',
    pdfPage: 86,
    printedPage: 80,
    localHeading: 'Articles 33, 34, 35 — Special Limitations on Fundamental Rights (Armed Forces & Martial Law)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 33 (Armed forces, police, intelligence restrictions by Parliament), Article 34 (Indemnity under Martial Law), Article 35 (Exclusive Parliamentary legislative competence for Part III).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 81 (PDF 87)
  {
    semanticUnitId: 'SEM-T9-44',
    pdfPage: 87,
    printedPage: 81,
    localHeading: 'Constitutional Amendability of Fundamental Rights Timeline (1951 Shankari Prasad → 1973 Kesavananda)',
    contentType: 'HISTORICAL_CLAIM',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Chronological timeline: Shankari Prasad (1951) → Sajjan Singh (1965) → Golaknath (1967) → 24th Amendment (1971) → Kesavananda Bharati (1973) Basic Structure Doctrine.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 82 (PDF 88)
  {
    semanticUnitId: 'SEM-T9-45',
    pdfPage: 88,
    printedPage: 82,
    localHeading: 'Article 31C & Harmonious Balance Between FRs and DPSPs (Minerva Mills 1980)',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: '25th Amendment 1971 inserted 31C; 42nd Amendment 1976 blanket extension invalidated in Minerva Mills (1980); Doctrine of harmonious construction between Part III and Part IV.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
];

/**
 * Ingests the complete 45-unit granular semantic inventory for Topic 9 into the database staging layer.
 */
export async function seedTopic9SemanticInventory(sourceId: string, coverageUnitId: string) {
  // Clear any existing ingestion items for this coverage unit
  await db.ingestionItem.deleteMany({ where: { coverageUnitId } });

  const createdItems = [];
  for (const item of TOPIC_9_SEMANTIC_UNITS) {
    const record = await db.ingestionItem.create({
      data: {
        sourceId,
        coverageUnitId,
        rawInput: `PDF Page ${item.pdfPage} (Printed p. ${item.printedPage}) - ${item.localHeading}`,
        extractedContent: JSON.stringify({
          semanticUnitId: item.semanticUnitId,
          pdfPage: item.pdfPage,
          printedPage: item.printedPage,
          localHeading: item.localHeading,
          contentType: item.contentType,
          origin: item.origin,
          shortDescription: item.shortDescription,
          requiresVerification: item.requiresVerification,
          isDuplicate: item.isDuplicate,
          status: item.status,
        }),
        status: 'EXTRACTED',
        reviewerNotes: `Origin: ${item.origin}; Verification required: ${item.requiresVerification}`,
      },
    });
    createdItems.push(record);
  }

  return createdItems;
}

/**
 * Semantic Coverage Auditor: Evaluates whether all expected semantic modules exist
 * within a declared CoverageUnit and flags any unaccounted or missing content.
 */
export async function auditSemanticCoverage(coverageUnitId: string) {
  const items = await db.ingestionItem.findMany({
    where: { coverageUnitId },
  });

  const parsedUnits = items.map((i) => JSON.parse(i.extractedContent || '{}') as SemanticContentUnit);

  // Check for presence of all key constitutional modules in Topic 9
  const expectedMandatoryKeywords = [
    { key: 'Article 12', pattern: /Article(s)?\s*12\b/i, desc: 'Definition of State' },
    { key: 'Article 13', pattern: /Article(s)?\s*13\b/i, desc: 'Judicial review & Doctrines' },
    { key: 'Article 14', pattern: /Article(s)?\s*14\b/i, desc: 'Right to Equality' },
    { key: 'Article 15', pattern: /Article(s)?\s*15\b/i, desc: 'Non-discrimination & Protective clauses' },
    { key: 'Article 16', pattern: /Article(s)?\s*16\b/i, desc: 'Public employment & Reservations' },
    { key: 'Article 17', pattern: /Article(s)?\s*17\b/i, desc: 'Abolition of Untouchability' },
    { key: 'Article 18', pattern: /Article(s)?\s*18\b/i, desc: 'Abolition of Titles' },
    { key: 'Article 19', pattern: /Article(s)?\s*19\b/i, desc: '6 Democratic Freedoms' },
    { key: 'Article 20', pattern: /Article(s)?\s*20\b/i, desc: 'Protection against Conviction' },
    { key: 'Article 21', pattern: /Article(s)?\s*21\b/i, desc: 'Right to Life & Personal Liberty' },
    { key: 'Article 21A', pattern: /Article(s)?\s*21A\b/i, desc: 'Right to Education' },
    { key: 'Article 22', pattern: /Article(s)?\s*22\b/i, desc: 'Preventive Detention' },
    { key: 'Article 23', pattern: /Article(s)?\s*23\b/i, desc: 'Prohibition of Begar & Trafficking' },
    { key: 'Article 24', pattern: /Article(s)?\s*24\b/i, desc: 'Prohibition of Child Labour' },
    { key: 'Article 25', pattern: /Article(s)?\s*25\b/i, desc: 'Freedom of Religion' },
    { key: 'Article 29', pattern: /Article(s)?\s*29\b/i, desc: 'Protection of Minorities' },
    { key: 'Article 30', pattern: /Article(s)?\s*30\b/i, desc: 'Minority Educational Institutions' },
    { key: 'Article 32', pattern: /Article(s)?\s*32\b/i, desc: 'Constitutional Remedies & 5 Writs' },
    { key: 'Article 33', pattern: /Article(s)?\s*(33|33-35|33,\s*34,\s*35)\b/i, desc: 'Armed forces restrictions' },
    { key: 'Article 35', pattern: /Article(s)?\s*(35|33-35|33,\s*34,\s*35)\b/i, desc: 'Legislation to give effect to FRs' },
  ];

  const missingModules = [];
  for (const exp of expectedMandatoryKeywords) {
    const found = parsedUnits.some(
      (u) =>
        exp.pattern.test(u.localHeading) ||
        exp.pattern.test(u.shortDescription) ||
        u.localHeading.includes(exp.key) ||
        u.shortDescription.includes(exp.key)
    );
    if (!found) {
      missingModules.push({ key: exp.key, desc: exp.desc });
    }
  }

  const textDerivedCount = parsedUnits.filter((u) => u.origin === 'TEXT_DERIVED').length;
  const tableDerivedCount = parsedUnits.filter((u) => u.origin === 'TABLE_DERIVED').length;
  const visualDerivedCount = parsedUnits.filter((u) => u.origin === 'VISUAL_DERIVED').length;
  const verificationRequiredCount = parsedUnits.filter((u) => u.requiresVerification).length;

  return {
    coverageUnitId,
    totalSemanticUnits: items.length,
    textDerivedCount,
    tableDerivedCount,
    visualDerivedCount,
    verificationRequiredCount,
    missingModulesCount: missingModules.length,
    missingModules,
    hasOmission: missingModules.length > 0,
    semanticStatus: missingModules.length === 0 ? 'SEMANTICALLY_INVENTORIED_WITHIN_AUDIT_SCOPE' : 'OMISSION_DETECTED',
  };
}

/**
 * Topic 10 (Directive Principles of State Policy, Printed pp. 83-93 / PDF pp. 89-99)
 * Complete 18-Unit Semantic Content Inventory for Phase 8 Pilot.
 */
export const TOPIC_10_SEMANTIC_UNITS: Omit<SemanticContentUnit, 'sourceId' | 'coverageUnitId'>[] = [
  // Page 83 (PDF 89)
  {
    semanticUnitId: 'SEM-T10-01',
    pdfPage: 89,
    printedPage: 83,
    localHeading: 'Overview of Part IV — Nature, Features & Irish Origin of DPSPs',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Part IV (Articles 36–51); Borrowed from Irish Constitution 1937 (which copied Spanish Constitution); Instrument of Instructions under GoI Act 1935.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T10-02',
    pdfPage: 89,
    printedPage: 83,
    localHeading: 'Article 36 — Definition of State for Part IV Application',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Article 36 applies the same definition of "State" as defined in Article 12 in Part III.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 84 (PDF 90)
  {
    semanticUnitId: 'SEM-T10-03',
    pdfPage: 90,
    printedPage: 84,
    localHeading: 'Article 37 — Non-Justiciability & Fundamental Nature in Governance',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'DPSPs are non-enforceable by courts, but fundamental in governance; duty of the State to apply these principles in lawmaking.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T10-04',
    pdfPage: 90,
    printedPage: 84,
    localHeading: 'Three-Fold Ideological Classification of Directive Principles',
    contentType: 'COMPARISON_TABLE',
    origin: 'TABLE_DERIVED',
    shortDescription: 'Non-textual academic classification into Socialistic, Gandhian, and Liberal-Intellectual principles.',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 85 (PDF 91)
  {
    semanticUnitId: 'SEM-T10-05',
    pdfPage: 91,
    printedPage: 85,
    localHeading: 'Socialistic Principles & Welfare State Directives (Arts 38, 39, 39A, 41, 42, 43, 43A, 47)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Social order, minimizing inequalities (38), livelihood & distribution of material resources (39), equal justice & free legal aid (39A), right to work (41), just/humane work & maternity relief (42), living wage (43), workers participation (43A), nutrition & public health (47).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T10-06',
    pdfPage: 91,
    printedPage: 85,
    localHeading: 'Gandhian Principles (Arts 40, 43, 43B, 46, 47, 48)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Village Panchayats (40), cottage industries (43), cooperatives (43B), educational/economic interests of SC/ST (46), prohibition of intoxicating drinks (47), prohibition of cow slaughter & modern animal husbandry (48).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 86 (PDF 92)
  {
    semanticUnitId: 'SEM-T10-07',
    pdfPage: 92,
    printedPage: 86,
    localHeading: 'Liberal-Intellectual Principles (Arts 44, 45, 48, 48A, 49, 50, 51)',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Uniform Civil Code (44), early childhood education (45), agriculture/animal husbandry (48), environment & forests (48A), national monuments (49), separation of judiciary (50), international peace & arbitration (51).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T10-08',
    pdfPage: 92,
    printedPage: 86,
    localHeading: '42nd Constitutional Amendment Act 1976 — Addition of 4 New DPSPs',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Added Article 39(f) healthy development of children, Article 39A free legal aid, Article 43A worker participation in management, and Article 48A protection of environment and wildlife.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 87 (PDF 93)
  {
    semanticUnitId: 'SEM-T10-09',
    pdfPage: 93,
    printedPage: 87,
    localHeading: '44th Constitutional Amendment Act 1978 — Article 38(2) Inequality Minimization',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Inserted Article 38(2) directing the State to minimize inequalities in income, status, facilities, and opportunities among individuals and groups.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T10-10',
    pdfPage: 93,
    printedPage: 87,
    localHeading: '86th Constitutional Amendment Act 2002 — Modification of Article 45',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Replaced Article 45 text to mandate early childhood care and education for children until they complete the age of six years (coinciding with insertion of Article 21A).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 88 (PDF 94)
  {
    semanticUnitId: 'SEM-T10-11',
    pdfPage: 94,
    printedPage: 88,
    localHeading: '97th Constitutional Amendment Act 2011 — Article 43B Cooperative Societies',
    contentType: 'LEGAL_RULE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Inserted Article 43B directing the State to promote voluntary formation, autonomous functioning, democratic control, and professional management of Cooperative Societies.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T10-12',
    pdfPage: 94,
    printedPage: 88,
    localHeading: 'Directives Outside Part IV of the Constitution',
    contentType: 'CONSTITUTIONAL_TEXT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Directives located in other parts: Article 335 (Part XVI: SC/ST claims in services), Article 350A (Part XVII: Mother tongue instruction), Article 351 (Part XVII: Development of Hindi language).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 89 (PDF 95)
  {
    semanticUnitId: 'SEM-T10-13',
    pdfPage: 95,
    printedPage: 89,
    localHeading: 'Article 44 — Uniform Civil Code (UCC) Constitutional Debate & Ideological Tensions',
    contentType: 'CONCEPT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Constituent Assembly debates (KM Munshi, Alladi Krishnaswamy Iyer, Dr. BR Ambedkar); Secularism vs Personal Laws; Gender justice & equality considerations.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 90 (PDF 96)
  {
    semanticUnitId: 'SEM-T10-14',
    pdfPage: 96,
    printedPage: 90,
    localHeading: 'Article 44 — Landmark Judicial Decisions & Uttarakhand UCC Act 2024 Benchmark',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Shah Bano (1985), Jordan Diengdeh (1985), Sarla Mudgal (1995), John Vallamattom (2003), Shayara Bano (2017); Uttarakhand UCC Act 2024 provisions and exceptions.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 91 (PDF 97)
  {
    semanticUnitId: 'SEM-T10-15',
    pdfPage: 97,
    printedPage: 91,
    localHeading: 'Fundamental Rights vs DPSPs Conflict & Judicial Evolution (1951 Champakam → 1973 Kesavananda)',
    contentType: 'HISTORICAL_CLAIM',
    origin: 'TEXT_DERIVED',
    shortDescription: 'State of Madras v. Champakam Dorairajan (1951, DPSPs subsidiary to FRs), In Re Kerala Education Bill (1958, Harmonious construction), Golaknath (1967), 25th Amendment 1971 (Article 31C insertion), Kesavananda Bharati (1973).',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 92 (PDF 98)
  {
    semanticUnitId: 'SEM-T10-16',
    pdfPage: 98,
    printedPage: 92,
    localHeading: 'Minerva Mills (1980) & Modern Integrated Harmonization of Parts III and IV',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Minerva Mills (1980, Two wheels of a chariot); Unni Krishnan (1993) & Bandhua Mukti Morcha: reading DPSPs into Article 21; Integrated interpretation doctrine.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  {
    semanticUnitId: 'SEM-T10-17',
    pdfPage: 98,
    printedPage: 92,
    localHeading: 'Article 39(b) & 39(c) Material Resources of Community Benchmark (*Property Owners 2024*)',
    contentType: 'JUDICIAL_DOCTRINE',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Sanjeev Coke (1983) expansive state socialist view vs 9-judge Constitution Bench in Property Owners Association v. State of Maharashtra (2024) holding not all private property is material resource of community.',
    requiresVerification: true,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
  // Page 93 (PDF 99)
  {
    semanticUnitId: 'SEM-T10-18',
    pdfPage: 99,
    printedPage: 93,
    localHeading: 'Legislative Implementation & Welfare Scheme Trajectory of DPSPs',
    contentType: 'FACT',
    origin: 'TEXT_DERIVED',
    shortDescription: 'Key statutory implementation: Panchayati Raj (73rd/74th Amds), MGNREGA 2005 (Art 41), Maternity Benefit Act (Art 42), Legal Services Authorities Act 1987 (Art 39A), Wildlife Protection Act 1972 & Forest Conservation Act (Art 48A).',
    requiresVerification: false,
    isDuplicate: false,
    status: 'INVENTORIED',
  },
];

/**
 * Ingests the complete 18-unit semantic inventory for Topic 10 into the database staging layer.
 */
export async function seedTopic10SemanticInventory(sourceId: string, coverageUnitId: string) {
  // Clear any existing ingestion items for this coverage unit
  await db.ingestionItem.deleteMany({ where: { coverageUnitId } });

  const createdItems = [];
  for (const item of TOPIC_10_SEMANTIC_UNITS) {
    const record = await db.ingestionItem.create({
      data: {
        sourceId,
        coverageUnitId,
        rawInput: `PDF Page ${item.pdfPage} (Printed p. ${item.printedPage}) - ${item.localHeading}`,
        extractedContent: JSON.stringify({
          semanticUnitId: item.semanticUnitId,
          pdfPage: item.pdfPage,
          printedPage: item.printedPage,
          localHeading: item.localHeading,
          contentType: item.contentType,
          origin: item.origin,
          shortDescription: item.shortDescription,
          requiresVerification: item.requiresVerification,
          isDuplicate: item.isDuplicate,
          status: item.status,
        }),
        status: 'EXTRACTED',
        reviewerNotes: `Origin: ${item.origin}; Verification required: ${item.requiresVerification}`,
      },
    });
    createdItems.push(record);
  }

  return createdItems;
}

