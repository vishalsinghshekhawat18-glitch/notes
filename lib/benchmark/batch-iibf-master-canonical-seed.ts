// IIBF & Banking Regulations — Master Canonical Knowledge Seeder
// Consolidates 25 Canonical Topics & 80 Concepts (CON-BNK-001 to CON-BNK-080)
// Standardized 4-Block Architecture, 8-Exam Mappings & 2 Questions per Concept

import { db } from '../db/client';
import { IIBF_MASTER_PART_1_CONCEPTS } from './batch-iibf-master-part1';
import { IIBF_MASTER_PART_2_CONCEPTS } from './batch-iibf-master-part2';
import { IIBF_MASTER_PART_3_CONCEPTS } from './batch-iibf-master-part3';
import { IIBF_MASTER_PART_4_CONCEPTS } from './batch-iibf-master-part4';

export interface MasterBankingConceptDefinition {
  id: string;
  topicOrder?: number;
  topicSlug: string;
  topicTitle?: string;
  title: string;
  slug: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EASY';
  claims: Array<{
    id?: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }>;
  contentBlocks: Array<{
    type: 'INTUITION' | 'CORE_IDEA' | 'MECHANISM' | 'EXAM_APPLICATION' | string;
    title: string;
    body: string;
    order: number;
    visibility?: 'PUBLIC' | 'RESTRICTED' | 'CANONICAL_FULL' | string;
  }>;
  examMappings: Array<{
    examCode: 'UPSC_APFC' | 'RPSC_RAS' | 'RBI_GRADE_B' | 'NABARD_GRADE_A' | 'SBI_PO' | 'IBPS_PO' | 'SEBI_GRADE_A' | 'IIBF_DBF';
    syllabusUnit: string;
    relevance: string;
    priority: string;
    requiredDepth: string;
    notes?: string;
  }>;
  revisionUnits: Array<{
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    priority?: string;
    order: number;
  }>;
  questions: Array<{
    type: string;
    stem: string;
    options: string[] | string;
    correctAnswer: string;
    explanation: string;
    trapExplanation: string;
    difficulty?: 'EASY' | 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
    isPYQ?: boolean;
    pyqYear?: number;
    pyqPaper?: string;
    pyqQuestionNumber?: number;
  }>;
}

export const CANONICAL_25_IIBF_TOPICS = [
  {
    order: 38,
    slug: 'rbi-constitution-governance-statutory-powers',
    title: 'Reserve Bank of India: Constitution, Governance & Statutory Powers',
    description: 'RBI Act 1934 constitutional framework, Central & Local Boards, Section 7 statutory directions, core central banking functions (currency issue, banker to government/banks, lender of last resort), and statutory supervisory powers under BR Act 1949 (inspections, board supersession, directives, penalties).',
  },
  {
    order: 39,
    slug: 'banking-regulation-act-licensing-governance-operations',
    title: 'Banking Regulation Act 1949: Licensing, Governance & Operations',
    description: 'Statutory definition of banking under Section 5(b), permitted and prohibited businesses (Sections 6 & 8), disposal of non-banking assets (Section 9), licensing criteria (Section 22), branch licensing (Section 23), voting caps (Section 12), CEO/WTD approval (Section 10B), and prohibition of loans to directors (Section 20).',
  },
  {
    order: 40,
    slug: 'liquidity-reserve-requirements-crr-slr-assets',
    title: 'Liquidity & Reserve Requirements: CRR, SLR & Asset Maintenance',
    description: 'Cash Reserve Ratio (CRR) under Section 42 RBI Act, Net Demand and Time Liabilities (NDTL) computation, penalties for shortfalls, Incremental CRR, Statutory Liquidity Ratio (SLR) under Section 24 BR Act, eligible liquid assets, and Section 25 maintenance of assets in India.',
  },
  {
    order: 41,
    slug: 'banker-customer-relationship-legal-foundations-rights',
    title: 'Banker-Customer Relationship: Legal Foundations & Rights',
    description: 'Legal relationships (Debtor-Creditor, Trustee, Principal-Agent, Bailee, Licensor-Licensee), Banker’s General Lien under Section 171 Indian Contract Act, Right of Set-Off conditions, Appropriation of Payments under Clayton’s Rule (Sections 59-61 Contract Act), and duty of secrecy with statutory exceptions (Section 45E RBI Act).',
  },
  {
    order: 42,
    slug: 'special-types-customers-account-operations',
    title: 'Special Types of Customers & Account Operations',
    description: 'Operations in special accounts: Minors (Contract & NI Act provisions), Joint Accounts (Either or Survivor, Former or Survivor), Illiterate & Blind persons, Mandates vs Power of Attorney (General/Special) and revocation rules, Sole Proprietorships, Partnerships (Sections 19/22), HUF (Karta), Limited Companies (Section 180 Companies Act), Trusts, Societies, and Section 8 Companies.',
  },
  {
    order: 43,
    slug: 'nomination-deceased-claims-inoperative-accounts',
    title: 'Nomination, Deceased Claims & Inoperative Accounts',
    description: 'Nomination facility under Sections 45ZA to 45ZF BR Act, rights of nominee vs legal heirs (Supreme Court rulings), settlement of deceased depositor claims with/without nomination, survivor clauses, succession certificates, probates, letters of administration, inoperative/dormant accounts, DEA Fund (Section 26A BR Act), and UDGAM portal.',
  },
  {
    order: 44,
    slug: 'garnishee-attachment-orders-statutory-claims',
    title: 'Garnishee Orders & Statutory Attachment Orders',
    description: 'Garnishee Orders under Order XXI Rule 46 Code of Civil Procedure (CPC), Order Nisi vs Order Absolute, attachable vs non-attachable funds, Section 226(3) Income Tax Act 1961 attachment orders, Section 83 CGST Act, and priority conflicts between Garnishee and IT orders.',
  },
  {
    order: 45,
    slug: 'negotiable-instruments-characteristics-types-parties',
    title: 'Negotiable Instruments: Characteristics, Types & Parties',
    description: 'Negotiable Instruments Act 1881 core characteristics, statutory presumptions (Section 118), Promissory Notes (Section 4) vs Bills of Exchange (Section 5), Cheques (Section 6), Electronic/Truncated Cheques, Demand Drafts (Section 85A), CTS-2010, Positive Pay System, Parties (Drawer, Drawee, Payee, Holder under Sec 8), and Holder in Due Course (HDC - Sec 9) privileges.',
  },
  {
    order: 46,
    slug: 'endorsement-crossing-material-alteration-instruments',
    title: 'Endorsement, Crossing & Material Alteration of Instruments',
    description: 'Negotiation & Endorsements (Blank, Full, Restrictive, Conditional, Sans Recourse, Facultative under Sections 15, 16, 50, 52), Crossing of Cheques (General Sec 123, Special Sec 124, Account Payee, Not Negotiable Sec 130), Material Alteration (Section 87), forged signatures vs forged endorsements, and statutory protection for altered instruments (Section 89).',
  },
  {
    order: 47,
    slug: 'paying-banker-collecting-banker-statutory-protection',
    title: 'Paying Banker & Collecting Banker: Statutory Protection & Duties',
    description: 'Paying Banker duties & protection: Payment in Due Course (Section 10), protection for Order Cheques (Section 85(1)), Bearer Cheques (Section 85(2)), Crossed Cheques (Section 128), revocation of banker’s authority (death, insolvency, lunacy, stop payment), Collecting Banker duties & protection under Section 131 NI Act, conversion liability, and good faith/absence of negligence tests.',
  },
  {
    order: 48,
    slug: 'cheque-dishonour-section-138-ni-act-remedies',
    title: 'Cheque Dishonour: Section 138 NI Act & Legal Remedies',
    description: 'Offence of dishonour for insufficiency of funds under Section 138 NI Act, essential ingredients, legally enforceable debt requirement, statutory notice (30 days), remedy period (15 days), 1-month limitation period for complaints (Section 142), penalties (up to 2 years imprisonment / double cheque amount), Interim Compensation (Section 143A up to 20%), and Appellate Deposit (Section 148 minimum 20%).',
  },
  {
    order: 49,
    slug: 'principles-sound-lending-credit-appraisal-working-capital',
    title: 'Principles of Sound Lending, Credit Appraisal & Working Capital',
    description: 'Principles of sound lending (Safety, Liquidity, Purpose, Profitability, Spread, Security, 5 Cs of Credit), Working Capital assessment methods (Tandon Committee MPBF Methods I & II, Nayak Committee Turnover Method for MSEs, Cash Budget Method), and Term Loan appraisal (DSCR, IRR, Break-Even & Sensitivity Analysis).',
  },
  {
    order: 50,
    slug: 'non-fund-based-facilities-letters-of-credit-guarantees',
    title: 'Non-Fund Based Facilities: Letters of Credit & Bank Guarantees',
    description: 'Bank Guarantees (Financial, Performance, Deferred Payment Guarantees under Section 126 Contract Act), invocation, court injunctions, Letters of Credit (LC) mechanism, parties, types (Irrevocable, Confirmed, Revolving, Transferable, Back-to-Back, Red/Green Clause), UCPDC 600 rules, co-acceptance of bills, and trade credit guidelines.',
  },
  {
    order: 51,
    slug: 'securities-bank-advances-mortgages-charge-creation',
    title: 'Securities for Bank Advances: Mortgages & Charge Creation',
    description: 'Mortgages under Section 58 Transfer of Property Act 1882 (Simple, English, Usufructuary, Conditional Sale, Anomalous), Equitable Mortgage by Deposit of Title Deeds (Section 58(f)), territorial scope, memorandum of entry, stamp duty, priority of mortgages, and doctrines of Marshalling (Sec 81), Contribution (Sec 82), and Subrogation (Sec 92).',
  },
  {
    order: 52,
    slug: 'securities-bank-advances-hypothecation-pledge-assignment',
    title: 'Securities for Bank Advances: Hypothecation, Pledge & Assignment',
    description: 'Pledge under Sections 172–179 Indian Contract Act 1872 (delivery of possession, pawnee rights, sale on default, pledge by non-owner), Hypothecation under Section 2(1)(n) SARFAESI Act (nature of charge, fixed vs floating charge), and Assignment under Section 130 Transfer of Property Act (absolute vs conditional assignment, actionable claims, LIC policies, supply bills, book debts).',
  },
  {
    order: 53,
    slug: 'sarfaesi-act-enforcement-security-interest',
    title: 'SARFAESI Act 2002: Enforcement of Security Interest & ARCs',
    description: 'SARFAESI Act 2002 objectives, definitions (NPA, Default, Secured Asset), Section 31 statutory exemptions (agricultural land, claims < ₹1 lakh, remaining debt < 20%), Section 13(2) 60-day demand notice, Section 13(3A) 15-day objection response, Section 13(4) enforcement measures, Section 14 CMM/DM assistance for physical possession, Section 17 DRT appeal (45 days, 50% pre-deposit), Asset Reconstruction Companies (ARCs), and CERSAI mandatory registration (Chapter IV-A).',
  },
  {
    order: 54,
    slug: 'debt-recovery-tribunals-commercial-recovery-mechanisms',
    title: 'Debt Recovery Tribunals (DRT), DRAT & Lok Adalats',
    description: 'Recovery of Debts and Bankruptcy Act 1993 (RDB Act), DRT jurisdiction (₹20 Lakh threshold), powers of Presiding Officers & Recovery Officers, Recovery Certificate process, execution of orders, Section 20 appeal to DRAT (30 days, 50% pre-deposit), Lok Adalats under Legal Services Authorities Act 1987 (₹20 Lakh ceiling), and Permanent Lok Adalats.',
  },
  {
    order: 55,
    slug: 'insolvency-bankruptcy-code-bankers',
    title: 'Insolvency & Bankruptcy Code 2016 (IBC) for Bankers',
    description: 'IBC 2016 institutional pillars (IBBI, IP, IPA, IU), initiation of CIRP under Section 7 by Financial Creditors (₹1 Crore threshold), Section 14 moratorium, IRP/RP roles, Committee of Creditors (CoC) voting thresholds (66% for resolution plan), Section 53 liquidation waterfall mechanism (priority of secured financial creditors, workmen, unsecured, operational, government), and Pre-Packaged Insolvency (PPIRP) for MSMEs (Chapter III-A, ₹10L to ₹1Cr).',
  },
  {
    order: 56,
    slug: 'prudential-norms-asset-classification-provisioning-stressed-assets',
    title: 'Prudential Norms: Asset Classification, Provisioning & Stressed Assets',
    description: 'Asset classification (Standard, Sub-Standard <= 12m NPA, Doubtful D1/D2/D3, Loss), income recognition on realisation basis, standard asset provisioning (0.40%), sub-standard (15% secured / 25% unsecured), doubtful, loss (100%), Prudential Framework for Resolution of Stressed Assets (June 7, 2019 / current: SMA-0/1/2, 30-day review, 180-day resolution plan, ICA 75% value / 60% number), Wilful Defaulters, CRILC (₹5 Cr threshold), and Large Exposures Framework (LEF: 20% single / 25% group).',
  },
  {
    order: 57,
    slug: 'basel-iii-framework-capital-adequacy-leverage-liquidity',
    title: 'Basel III Framework: Capital Adequacy, Leverage, Liquidity & PCA',
    description: 'Basel III Three Pillars (Minimum Capital, Supervisory Review, Market Discipline), Capital Adequacy Ratio (CRAR 9% / 11.5% with CCB), Common Equity Tier 1 (CET1: 5.5%), Tier 1 Capital (7.0%), Tier 2 Capital (2.0%), Capital Conservation Buffer (CCB: 2.5% in CET1), Countercyclical Capital Buffer (CCCB: 0–2.5%), Liquidity Coverage Ratio (LCR: 100% HQLA), Net Stable Funding Ratio (NSFR: 100%), Leverage Ratio (3.5% / 4.0% D-SIBs), and Prompt Corrective Action (PCA) framework risk thresholds.',
  },
  {
    order: 58,
    slug: 'kyc-aml-pmla-framework-banking-operations',
    title: 'KYC, AML, Prevention of Money Laundering Act (PMLA) & FIU-IND',
    description: 'Prevention of Money Laundering Act 2002 (PMLA): Three stages (Placement, Layering, Integration), Section 3 proceeds of crime, Section 12 reporting obligations, Customer Due Diligence (CDD), 6 Officially Valid Documents (OVDs), CKYCR registry, Video-based Customer Identification Process (V-CIP), periodic KYC updation (2/8/10 years), and FIU-IND reporting (CTR > ₹10 Lakhs by 15th, STR within 7 days, CBWTR, 5-year record retention).',
  },
  {
    order: 59,
    slug: 'payment-settlement-systems-act-digital-banking-cyber-security',
    title: 'Payment & Settlement Systems, Digital Banking & Cyber Security',
    description: 'Payment and Settlement Systems Act 2007 (PSSA), RBI designated authority, Section 23 settlement finality & netting, PPI regulations (wallets, cards), NPCI payment rails (RTGS 24x7, NEFT 24x7, IMPS, UPI, BBPS, AePS), RBI Digital Lending Guidelines (REs vs LSPs, Key Fact Statement KFS, APR disclosure, cooling-off period, direct disbursals), and Cyber Security Framework (CCMP, C-SOC, 6-hour incident reporting to RBI/CERT-In).',
  },
  {
    order: 60,
    slug: 'customer-protection-fair-lending-ombudsman-schemes',
    title: 'Customer Protection, Fair Lending, Penal Charges & Integrated Ombudsman',
    description: 'RBI Integrated Ombudsman Scheme 2021 (One Nation One Ombudsman, CRPC Chandigarh, ₹20 Lakh award ceiling + ₹1 Lakh mental agony, internal ombudsman), Limiting Customer Liability in Unauthorized Electronic Banking Transactions (Zero liability within 3 days, limited liability 4-7 days), and Fair Lending Practice & Penal Charges Directions 2024 (total ban on compounding penal interest, transparent penal charges, non-capitalisation, floating rate loan reset options).',
  },
  {
    order: 61,
    slug: 'foreign-exchange-management-act-fema-nri-banking',
    title: 'Foreign Exchange Management Act 1999 (FEMA) & NRI Banking',
    description: 'FEMA 1999 architecture: Current Account transactions (Section 5 / liberalized) vs Capital Account transactions (Section 6 / regulated), Authorised Persons (AD Category I, II, III), compounding of contraventions, Liberalised Remittance Scheme (LRS: $250,000 per financial year for resident individuals, TCS rules), and NRI Banking accounts (NRE: INR, tax-free, repatriable; FCNR-B: term deposit, foreign currency, tax-free; NRO: INR, taxable, $1M/year repatriation limit).',
  },
  {
    order: 62,
    slug: 'specialized-banking-institutions-psl-dicgc-coverage',
    title: 'Special Banking Entities, SBR, DICGC & Priority Sector Lending (PSL)',
    description: 'Small Finance Banks (SFBs: ₹200 Cr net worth, 75% PSL), Payments Banks (₹100 Cr net worth, ₹2 Lakh deposit cap, no lending), Cooperative Banks (BR Amendment Act 2020), Scale-Based Regulation (SBR) for NBFCs (Base, Middle, Upper, Top layers), DICGC Act 1961 (₹5 Lakh deposit insurance coverage per depositor per bank within 90 days under Section 18A), and Priority Sector Lending (PSL targets: 40% commercial banks / 75% SFBs & RRBs, sub-targets: Agri 18%, SMF 10%, Micro 7.5%, Weaker Sections 12%, and PSLCs).',
  },
];

export const ALL_IIBF_MASTER_CONCEPTS: any[] = [
  ...IIBF_MASTER_PART_1_CONCEPTS,
  ...IIBF_MASTER_PART_2_CONCEPTS,
  ...IIBF_MASTER_PART_3_CONCEPTS,
  ...IIBF_MASTER_PART_4_CONCEPTS,
];

export const CONCEPT_ID_TO_TOPIC_ORDER: Record<string, number> = {
  'CON-BNK-001': 38, 'CON-BNK-002': 38, 'CON-BNK-003': 38,
  'CON-BNK-004': 39, 'CON-BNK-005': 39, 'CON-BNK-006': 39,
  'CON-BNK-007': 40, 'CON-BNK-008': 40,
  'CON-BNK-009': 41, 'CON-BNK-010': 41, 'CON-BNK-011': 41, 'CON-BNK-012': 41,
  'CON-BNK-013': 42, 'CON-BNK-014': 42, 'CON-BNK-015': 42, 'CON-BNK-016': 42,
  'CON-BNK-017': 43, 'CON-BNK-018': 43, 'CON-BNK-019': 43,
  'CON-BNK-020': 44, 'CON-BNK-021': 44,
  'CON-BNK-022': 45, 'CON-BNK-023': 45, 'CON-BNK-024': 45,
  'CON-BNK-025': 46, 'CON-BNK-026': 46, 'CON-BNK-027': 46,
  'CON-BNK-028': 47, 'CON-BNK-029': 47, 'CON-BNK-030': 47,
  'CON-BNK-031': 48, 'CON-BNK-032': 48, 'CON-BNK-033': 48,
  'CON-BNK-034': 49, 'CON-BNK-035': 49, 'CON-BNK-036': 49,
  'CON-BNK-037': 50, 'CON-BNK-038': 50, 'CON-BNK-039': 50,
  'CON-BNK-040': 51, 'CON-BNK-041': 51, 'CON-BNK-042': 51,
  'CON-BNK-043': 52, 'CON-BNK-044': 52, 'CON-BNK-045': 52,
  'CON-BNK-046': 53, 'CON-BNK-047': 53, 'CON-BNK-048': 53, 'CON-BNK-049': 53, 'CON-BNK-050': 53,
  'CON-BNK-051': 54, 'CON-BNK-052': 54, 'CON-BNK-053': 54,
  'CON-BNK-054': 55, 'CON-BNK-055': 55, 'CON-BNK-056': 55, 'CON-BNK-057': 55,
  'CON-BNK-058': 56, 'CON-BNK-059': 56, 'CON-BNK-060': 56, 'CON-BNK-061': 56,
  'CON-BNK-062': 57, 'CON-BNK-063': 57, 'CON-BNK-064': 57, 'CON-BNK-065': 57,
  'CON-BNK-066': 58, 'CON-BNK-067': 58, 'CON-BNK-068': 58,
  'CON-BNK-069': 59, 'CON-BNK-070': 59, 'CON-BNK-071': 59, 'CON-BNK-072': 59,
  'CON-BNK-073': 60, 'CON-BNK-074': 60, 'CON-BNK-075': 60,
  'CON-BNK-076': 61, 'CON-BNK-077': 61, 'CON-BNK-078': 61,
  'CON-BNK-079': 62, 'CON-BNK-080': 62,
};

function normalizeClaimType(ct: string): string {
  if (
    ct === 'STATUTORY_RULE' ||
    ct === 'CORE_PRINCIPLE' ||
    ct === 'REGULATORY_DIRECTION' ||
    ct === 'JUDICIAL_DOCTRINE' ||
    ct === 'HISTORICAL_FACT'
  ) {
    return ct;
  }
  return 'STATUTORY_RULE';
}

function normalizeRelevance(rel: string): string {
  if (rel === 'HIGH' || rel === 'VERY_HIGH' || rel === 'CORE') return 'CORE';
  if (rel === 'MEDIUM' || rel === 'ESSENTIAL') return 'ESSENTIAL';
  return 'ANCILLARY_COVERAGE';
}

function normalizePriority(pri: string): string {
  if (pri === 'P1' || pri === 'HIGH') return 'HIGH';
  return 'MEDIUM';
}

function normalizeRequiredDepth(dep: string): string {
  if (dep === 'EXHAUSTIVE' || dep === 'EXPERT') return 'EXPERT';
  if (dep === 'MODERATE' || dep === 'PROFICIENT') return 'PROFICIENT';
  return 'AWARENESS';
}

export async function seedIIBFMasterCanonicalKnowledge() {
  console.log(`Seeding Modernized IIBF & Banking Regulations Master Knowledge (${ALL_IIBF_MASTER_CONCEPTS.length} Concepts across 25 Topics)...`);

  // 1. Ensure Domain & Subject
  const domain = await db.domain.upsert({
    where: { slug: 'banking-and-finance' },
    update: {
      name: 'Banking & Financial Regulations',
      description: 'Comprehensive regulatory, statutory, prudential, and operational architecture of the Indian banking and financial system.',
    },
    create: {
      slug: 'banking-and-finance',
      name: 'Banking & Financial Regulations',
      description: 'Comprehensive regulatory, statutory, prudential, and operational architecture of the Indian banking and financial system.',
      order: 2,
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'iibf-banking-regulations' },
    update: {
      name: 'IIBF & Banking Regulations',
      description: 'Comprehensive master corpus covering the Banking Regulation Act 1949, RBI Act 1934, Negotiable Instruments Act 1881, SARFAESI Act 2002, DRT, IBC 2016, Basel III, KYC/AML, Digital Banking, Consumer Protection, and FEMA.',
      scopeStatement: 'Canonical knowledge base for IIBF & Banking Regulations governing the Indian financial sector, encompassing statutory mandates, RBI Master Directions, credit facilities, recovery tribunals, IBC 2016, and modern digital lending regulations.',
      domainId: domain.id,
      order: 2,
    },
    create: {
      slug: 'iibf-banking-regulations',
      name: 'IIBF & Banking Regulations',
      description: 'Comprehensive master corpus covering the Banking Regulation Act 1949, RBI Act 1934, Negotiable Instruments Act 1881, SARFAESI Act 2002, DRT, IBC 2016, Basel III, KYC/AML, Digital Banking, Consumer Protection, and FEMA.',
      scopeStatement: 'Canonical knowledge base for IIBF & Banking Regulations governing the Indian financial sector, encompassing statutory mandates, RBI Master Directions, credit facilities, recovery tribunals, IBC 2016, and modern digital lending regulations.',
      domainId: domain.id,
      order: 2,
    },
  });

  // 2. Upsert Canonical 25 Topics
  const topicMap = new Map<string, string>(); // slug -> topicId
  const topicOrderMap = new Map<number, string>(); // order -> topicId
  for (const t of CANONICAL_25_IIBF_TOPICS) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: t.slug,
        },
      },
      update: {
        title: t.title,
        description: t.description,
        order: t.order,
      },
      create: {
        subjectId: subject.id,
        slug: t.slug,
        title: t.title,
        description: t.description,
        order: t.order,
      },
    });
    topicMap.set(t.slug, topic.id);
    topicOrderMap.set(t.order, topic.id);
  }

  // 3. Clean up legacy concepts
  const canonicalConceptIds = ALL_IIBF_MASTER_CONCEPTS.map((c) => c.id);
  const existingConcepts = await db.concept.findMany({
    where: {
      topic: {
        subjectId: subject.id,
      },
    },
    select: { id: true },
  });

  const staleConceptIds = existingConcepts
    .map((c) => c.id)
    .filter((id) => !canonicalConceptIds.includes(id));

  if (staleConceptIds.length > 0) {
    console.log(`Cleaning up ${staleConceptIds.length} legacy/stale concept records in IIBF...`);
    await db.evidence.deleteMany({ where: { claim: { conceptId: { in: staleConceptIds } } } });
    await db.claim.deleteMany({ where: { conceptId: { in: staleConceptIds } } });
    await db.contentBlock.deleteMany({ where: { conceptId: { in: staleConceptIds } } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: { in: staleConceptIds } } });
    await db.revisionUnit.deleteMany({ where: { conceptId: { in: staleConceptIds } } });
    await db.question.deleteMany({ where: { conceptId: { in: staleConceptIds } } });
    await db.connection.deleteMany({
      where: {
        OR: [
          { sourceConceptId: { in: staleConceptIds } },
          { targetConceptId: { in: staleConceptIds } },
        ],
      },
    });
    await db.concept.deleteMany({ where: { id: { in: staleConceptIds } } });
  }

  // Clean up legacy topics
  const canonicalTopicSlugs = CANONICAL_25_IIBF_TOPICS.map((t) => t.slug);
  const existingTopics = await db.topic.findMany({
    where: { subjectId: subject.id },
    select: { id: true, slug: true },
  });
  const staleTopicIds = existingTopics
    .filter((t) => !canonicalTopicSlugs.includes(t.slug))
    .map((t) => t.id);

  if (staleTopicIds.length > 0) {
    console.log(`Cleaning up ${staleTopicIds.length} legacy topic records in IIBF...`);
    await db.topic.deleteMany({ where: { id: { in: staleTopicIds } } });
  }

  // 4. Upsert all Exams
  const examSlugToId: Record<string, string> = {};
  const EXAMS = [
    { code: 'UPSC_APFC', slug: 'upsc-apfc', name: 'UPSC APFC / EPFO', conductingBody: 'UPSC' },
    { code: 'RPSC_RAS', slug: 'rpsc-ras', name: 'RPSC RAS / RTS', conductingBody: 'RPSC' },
    { code: 'RBI_GRADE_B', slug: 'rbi-grade-b', name: 'RBI Grade B Officer', conductingBody: 'RBI' },
    { code: 'NABARD_GRADE_A', slug: 'nabard-grade-a', name: 'NABARD Grade A Officer', conductingBody: 'NABARD' },
    { code: 'SBI_PO', slug: 'sbi-po', name: 'SBI Probationary Officer', conductingBody: 'SBI' },
    { code: 'IBPS_PO', slug: 'ibps-po', name: 'IBPS Probationary Officer', conductingBody: 'IBPS' },
    { code: 'SEBI_GRADE_A', slug: 'sebi-grade-a', name: 'SEBI Grade A Officer', conductingBody: 'SEBI' },
    { code: 'IIBF_DBF', slug: 'iibf-dbf', name: 'IIBF DBF / JAIIB', conductingBody: 'IIBF' },
  ];

  for (const ex of EXAMS) {
    const examRecord = await db.exam.upsert({
      where: { slug: ex.slug },
      update: { name: ex.name, conductingBody: ex.conductingBody },
      create: { slug: ex.slug, name: ex.name, conductingBody: ex.conductingBody },
    });
    examSlugToId[ex.code] = examRecord.id;
    examSlugToId[ex.slug] = examRecord.id;
  }

  // 5. Upsert Source for Provenance
  const source = await db.source.upsert({
    where: { id: 'source-iibf-banking-regulations-statutory-corpus' },
    update: {},
    create: {
      id: 'source-iibf-banking-regulations-statutory-corpus',
      title: 'RBI Master Directions, Banking Regulation Act 1949 & IIBF Benchmark',
      author: 'Reserve Bank of India & IIBF',
      sourceType: 'STATUTE',
      authorityTier: 'PRIMARY_AUTHORITY',
      description: 'Authoritative statutory text, regulatory circulars, and landmark ratios.',
    },
  });

  // 6. Iterate and seed all Concepts
  let conceptOrderInTopic: Record<string, number> = {};

  for (const def of ALL_IIBF_MASTER_CONCEPTS) {
    const topicOrder = CONCEPT_ID_TO_TOPIC_ORDER[def.id] || (def.topicOrder && def.topicOrder >= 38 ? def.topicOrder : 38);
    let topicId = topicOrderMap.get(topicOrder);
    if (!topicId) {
      topicId = topicMap.get(def.topicSlug);
    }
    if (!topicId) {
      throw new Error(`Topic not found for slug: ${def.topicSlug} (Concept: ${def.id})`);
    }

    if (!conceptOrderInTopic[topicId]) conceptOrderInTopic[topicId] = 1;
    const currentOrder = conceptOrderInTopic[topicId]++;

    const concept = await db.concept.upsert({
      where: { id: def.id },
      update: {
        title: def.title,
        slug: def.slug,
        shortDefinition: def.shortDefinition,
        difficulty: def.difficulty === 'EASY' ? 'BEGINNER' : def.difficulty,
        topicId: topicId,
        order: currentOrder,
        status: 'PUBLISHED',
      },
      create: {
        id: def.id,
        title: def.title,
        slug: def.slug,
        shortDefinition: def.shortDefinition,
        difficulty: def.difficulty === 'EASY' ? 'BEGINNER' : def.difficulty,
        topicId: topicId,
        order: currentOrder,
        status: 'PUBLISHED',
      },
    });

    // Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const cb of def.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: cb.visibility || 'PUBLIC',
        },
      });
    }

    // Claims & Evidence
    const existingClaims = await db.claim.findMany({ where: { conceptId: concept.id } });
    for (const ec of existingClaims) {
      await db.evidence.deleteMany({ where: { claimId: ec.id } });
    }
    await db.claim.deleteMany({ where: { conceptId: concept.id } });

    for (let i = 0; i < def.claims.length; i++) {
      const cl = def.claims[i];
      const claimId = cl.id || `CLM-${def.id}-${(i + 1).toString().padStart(2, '0')}`;
      const claim = await db.claim.create({
        data: {
          id: claimId,
          statement: cl.statement,
          claimType: normalizeClaimType(cl.claimType),
          epistemicLevel: cl.epistemicLevel || 'CANONICAL_CLAIM',
          confidence: cl.confidence || 'ESTABLISHED_FACT',
          conceptId: concept.id,
        },
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: source.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'STATUTORY_PROVISION',
          authority: 'PRIMARY_AUTHORITY',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH',
        },
      });
    }

    // Exam Concept Mappings
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    for (const em of def.examMappings) {
      const examId = examSlugToId[em.examCode];
      if (examId) {
        await db.examConceptMapping.create({
          data: {
            examId: examId,
            conceptId: concept.id,
            syllabusUnit: em.syllabusUnit,
            relevance: normalizeRelevance(em.relevance),
            priority: normalizePriority(em.priority),
            requiredDepth: normalizeRequiredDepth(em.requiredDepth),
            notes: em.notes || '',
          },
        });
      }
    }

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of def.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: ru.order,
        },
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of def.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type || 'CONCEPT_CHECK',
          stem: q.stem,
          options: typeof q.options === 'string' ? q.options : JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation || '',
          difficulty: q.difficulty === 'BEGINNER' ? 'EASY' : (q.difficulty || 'INTERMEDIATE'),
          isPYQ: q.isPYQ || false,
          pyqYear: q.pyqYear,
          pyqPaper: q.pyqPaper,
          pyqQuestionNumber: q.pyqQuestionNumber,
        },
      });
    }
  }

  console.log(`Successfully seeded ${ALL_IIBF_MASTER_CONCEPTS.length} Modernized IIBF Canonical Concepts across 25 Topics.`);
}
