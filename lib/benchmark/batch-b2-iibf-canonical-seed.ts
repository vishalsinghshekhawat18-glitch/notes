/**
 * Batch B2 IIBF Canonical Knowledge Seed (Topics 42–45: 16 Concepts)
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers Paper 2 (Principles & Practices of Banking - PPB):
 * - Topic 42: Banker-Customer Relationship & Account Operations (CON-IIBF-17 to CON-IIBF-23)
 * - Topic 43: Principles of Lending & Collateral Charges (CON-IIBF-24 to CON-IIBF-25)
 * - Topic 44: Non-Fund Based Facilities & Trade Finance (CON-IIBF-26 to CON-IIBF-28)
 * - Topic 45: Digital Banking, Payment Rails & Cyber Security (CON-IIBF-29 to CON-IIBF-32)
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const BATCH_B2_IIBF_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 42: BANKER-CUSTOMER RELATIONSHIP & ACCOUNT OPERATIONS
  // =========================================================================
  {
    id: 'CON-IIBF-17',
    topicOrder: 42,
    topicSlug: 'iibf-banker-customer-relationship-and-customer-service',
    topicTitle: 'Banker-Customer Relationship & Customer Service Operations',
    topicDescription: 'Statutory nature of relationship, rights and duties, banker\'s general lien, Clayton\'s Case rule, and right of set-off.',
    slug: 'banker-customer-relationship-statutory-nature-rights-and-legal-duties',
    title: 'Banker-Customer Relationship: Statutory Nature, Clayton\'s Rule, General Lien & Right of Set-Off',
    shortDefinition: 'The multifaceted legal relationship between a banker and customer under the Indian Contract Act 1872, Negotiable Instruments Act 1881, and Banking Regulation Act 1949: General Relationship as Debtor-Creditor for bank deposits (Banker is Debtor; Customer is Creditor) vs Creditor-Debtor for loans, Special Relationships (Bailor-Bailee in Safe Deposit Lockers/Safe Custody, Trustee-Beneficiary in collection/escrow, Agent-Principal in standing instructions), Clayton\'s Case Rule of appropriation (Section 59-61 Indian Contract Act), Banker\'s General Lien (Section 171: statutory right to retain goods/securities in the ordinary course of banking without special agreement), and Right of Set-Off (combining debit and credit balances in same right and capacity after reasonable notice).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-17-01',
        statement: 'In deposit accounts, the fundamental legal relationship between a banker and customer is that of Debtor and Creditor (the Banker is the Debtor, and the Customer is the Creditor, reversed when a loan is granted); this relationship is governed by the Indian Contract Act 1872 and includes an implied obligation on the banker to honor cheques up to the available credit balance.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Foley v Hill (1848) 2 HL Cas 28; Indian Contract Act, 1872; NI Act 1881 (Section 31)',
        excerpt: 'Banker is Debtor for deposits and Creditor for advances; must honor customer cheques.',
      },
      {
        id: 'CLM-IIBF-17-02',
        statement: 'Under Section 171 of the Indian Contract Act 1872, a banker has a statutory General Lien over all goods, securities, and negotiable instruments delivered to it in the ordinary course of business by a customer, empowering the bank to retain them until any general balance of debt due from that customer is discharged, in the absence of a contract to the contrary.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Contract Act, 1872 (Section 171); Brandao v Barnett (1846) 12 Cl & F 787',
        excerpt: 'Banker\'s general lien under Section 171 permits retention of securities for general balance of debt.',
      },
      {
        id: 'CLM-IIBF-17-03',
        statement: 'The Rule in Clayton\'s Case (Devaynes v Noble, 1816; codified in Sections 59–61 of the Indian Contract Act 1872) establishes that in a running running cash credit/overdraft account, payments into the account are appropriated chronologically to discharge the earliest debit items in order of time ("first in, first out").',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Devaynes v Noble (Clayton\'s Case, 1816) 1 Mer 572; Indian Contract Act, 1872 (Sections 59-61)',
        excerpt: 'Clayton\'s Rule: In running accounts, credits discharge the earliest debit entries chronologically.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why a Banker is Not a Trustee of Your Money',
        body: 'When you deposit ₹1 Lakh into a bank, the bank does not hold your specific currency notes in trust inside a labeled box. The money becomes the absolute property of the bank to lend, invest, or use as it pleases.\n\nThe bank is simply your **Debtor**—it owes you an equal sum of money on demand.\n\nHowever, the legal relationship dynamically shifts depending on the banking service provided: when you hire a safe deposit locker, the bank becomes a **Bailee**; when you send a cheque for collection, the bank becomes an **Agent**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Banker-Customer Relationship Matrix',
        body: '| Banking Transaction / Service | Banker Legal Status | Customer Legal Status |\n| :--- | :--- | :--- |\n| **Deposit Account (Savings/Current/FD)** | **Debtor** | **Creditor** |\n| **Loan / Advance / Overdraft Account** | **Creditor** | **Debtor** |\n| **Safe Custody of Sealed Articles** | **Bailee** | **Bailor** |\n| **Safe Deposit Locker** | **Lessor (Landlord) / Bailee** (as per SC 2021) | **Lessee (Tenant)** |\n| **Collection of Cheques / Standing Instructions**| **Agent** | **Principal** |\n| **Funds Remitted with Specific Purpose (Escrow)** | **Trustee** | **Beneficiary / Trustor** |\n| **Pledge of Shares / Goods for Loan** | **Pawnee (Pledgee)** | **Pawnor (Pledgor)** |\n| **Hypothecation of Plant / Vehicle** | **Hypothecatee** | **Hypothecator** |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Banker\'s General Lien vs Right of Set-Off',
        body: '### 1. Banker\'s General Lien (Section 171 Indian Contract Act)\n* It is an **Implied Pledge**—the banker can not only retain the security, but also sell it after giving reasonable notice to the borrower.\n* **Exclusions from Lien:** Safe custody articles, securities deposited for a specific purpose (e.g. left for sale), goods left inadvertently in bank premises, or shares deposited as trustee.\n\n### 2. Banker\'s Right of Set-Off\n* The legal right to combine two accounts of the same customer (e.g. adjust a credit balance of ₹50,000 in a savings account against an overdue debit balance of ₹40,000 in a personal loan account).\n* **Mandatory Condition:** Debts must be in the **SAME RIGHT AND SAME CAPACITY** (e.g. A sole proprietor account can be combined with his personal account; a partnership account CANNOT be combined with an individual partner\'s personal account).',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Banker-Customer Relations',
        body: '1. **Clayton\'s Case Trap:** If a partner dies or retires and the bank fails to freeze the running cash credit account, all subsequent credits into the account will wipe out the deceased/retired partner\'s debt, releasing their estate from liability (**Rule in Clayton\'s Case**)!\n2. **Safe Custody vs Deposit:** In Safe Custody, the relationship is **Bailor & Bailee**, NOT Debtor & Creditor.\n3. **Notice for Set-Off:** Banks must serve **reasonable prior notice** before exercising the right of set-off, unless explicitly waived in the loan agreement.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module A - Banker-Customer Relationship',
        notes: 'Guaranteed MCQs: Relationship table (Debtor/Creditor, Bailee/Bailor, Agent/Principal), Clayton\'s rule in CC accounts, and Section 171 General Lien exclusions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Deposit = Banker is Debtor / Customer is Creditor. Advance = Banker Creditor / Customer Debtor. Safe Custody = Bailee / Bailor. Cheque Collection = Agent / Principal. Escrow = Trustee / Beneficiary. Section 171 General Lien = Right to retain securities for general debt (implied pledge; excludes safe custody/specific purpose). Clayton\'s Rule (Sec 59-61) = FIFO debt discharge in running accounts. Set-Off = Combining accounts in same right/capacity.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'When a customer deposits a sealed packet containing valuable jewellery with a commercial bank for "Safe Custody", what is the exact legal relationship established between the Bank and the Customer?',
        options: [
          'Bank is Debtor, Customer is Creditor',
          'Bank is Bailee, Customer is Bailor',
          'Bank is Agent, Customer is Principal',
          'Bank is Trustee, Customer is Lessee',
        ],
        correctAnswer: 'Bank is Bailee, Customer is Bailor',
        explanation: 'When articles or sealed packets are accepted by a bank for safe custody, the contract is one of bailment under Section 148 of the Indian Contract Act 1872. The bank acts as the Bailee (obligated to exercise ordinary prudence to protect the goods) and the customer is the Bailor.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-18',
    topicOrder: 42,
    topicSlug: 'iibf-banker-customer-relationship-and-customer-service',
    topicTitle: 'Banker-Customer Relationship & Customer Service Operations',
    topicDescription: 'Anti-Money Laundering (PMLA 2002), Customer Due Diligence (CDD), and RBI KYC Master Directions.',
    slug: 'anti-money-laundering-pmla-2002-and-rbi-kyc-master-directions',
    title: 'Anti-Money Laundering (AML) & KYC Master Directions: PMLA 2002, CDD & Reporting Regimes',
    shortDefinition: 'The statutory compliance architecture to combat money laundering and terrorist financing under the Prevention of Money Laundering Act 2002 (PMLA) and RBI Master Direction on KYC: the 3 stages of money laundering (Placement, Layering, Integration), Customer Due Diligence (CDD: identifying customer, verifying identity using Officially Valid Documents [OVDs], and determining Beneficial Ownership [BO: 10% threshold for companies/trusts, 15% for partnerships]), Risk Categorization (Low, Medium, High Risk with periodic KYC update every 10, 8, and 2 years respectively), Central KYC Registry (CKYCR 14-digit number), and mandatory statutory reporting to FIU-IND (Cash Transaction Report [CTR: transactions >₹10 Lakh] and Suspicious Transaction Report [STR within 7 days]).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-18-01',
        statement: 'Under PMLA 2002 and PML Rules, money laundering consists of three distinct chronological stages: Placement (introducing illicit cash into the financial system), Layering (distancing illicit funds from their illegal origin through complex series of financial transactions across accounts/jurisdictions), and Integration (re-entering laundered funds into the legitimate economy as clean wealth).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Prevention of Money Laundering Act, 2002 (PMLA); FATF 40 Recommendations',
        excerpt: '3 AML stages: Placement, Layering, Integration.',
      },
      {
        id: 'CLM-IIBF-18-02',
        statement: 'Under RBI Master Direction on KYC, Officially Valid Documents (OVDs) for Proof of Identity (PoI) and Proof of Address (PoA) are strictly limited to six documents: Passport, Driving Licence, Proof of possession of Aadhaar number, Voter\'s Identity Card, NREGA Job Card (signed by state official), and Letter issued by National Population Register (NPR); PAN Card is a verification document for tax purposes but is NOT an OVD for address proof.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Know Your Customer (KYC) Direction, 2016 (updated 2024); PML Rules Section 2(d)',
        excerpt: '6 OVDs: Passport, DL, Aadhaar, Voter ID, NREGA Job Card, NPR Letter.',
      },
      {
        id: 'CLM-IIBF-18-03',
        statement: 'Regulated Entities must file Cash Transaction Reports (CTR) for all cash transactions over ₹10 Lakh (or equivalent in foreign currency) to Financial Intelligence Unit - India (FIU-IND) by the 15th day of the succeeding month, and Suspicious Transaction Reports (STR) within 7 working days of arriving at a conclusion of suspicion, while ensuring absolute prohibition against tipping-off the customer.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PMLA Rules 2005 (Rule 3 & Rule 8); FIU-IND Reporting Guidelines',
        excerpt: 'CTR (>₹10 Lakh) by 15th of next month; STR within 7 days of suspicion without tipping-off.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Closing the Financial Pipeline to Crime and Terrorism',
        body: 'Drug traffickers, corrupt officials, and cybercriminals generate vast sums of dirty paper cash. To buy luxury real estate, shares, or corporate jets without raising law enforcement flags, they must disguise the illegal origin of this cash through the banking system.\n\n**AML & KYC frameworks** establish a legal fortress requiring banks to know exactly who every customer is, where their funds originated, and who ultimately owns the business.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 3 Stages of Money Laundering',
        body: '```mermaid\ngraph LR\n    DIRT["1. DIRTY CASH (Extortion, Smuggling, Cyber Fraud)"]\n    DIRT --> PL["STAGE 1: PLACEMENT<br>(Depositing cash into bank accounts, smurfing below ₹50,000 threshold, buying chips)"]\n    PL --> LAY["STAGE 2: LAYERING<br>(Wire transfers across multiple foreign shell companies, crypto swaps, complex web of transactions)"]\n    LAY --> INT["STAGE 3: INTEGRATION<br>(Purchasing luxury real estate, luxury yachts, legitimate hotels, clean corporate loans)"]\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'KYC Risk Classification & Periodic Updation Matrix',
        body: '| Customer Risk Profile | Profile Characteristics | Mandatory Periodic KYC Refresh Interval |\n| :--- | :--- | :--- |\n| **Low Risk** | Salaried employees, pensioners, government departments, low-turnover domestic retail accounts. | **Once every 10 YEARS** (can be done via self-declaration if no change in address). |\n| **Medium Risk** | Medium-sized traders, businesses, non-resident individuals with standard profiles. | **Once every 8 YEARS**. |\n| **High Risk** | Politically Exposed Persons (PEPs), NGOs/NPOs, high-net-worth non-residents, jewelers, arms dealers, cash-intensive businesses. | **Once every 2 YEARS** (with enhanced customer due diligence - ECDD and senior management approval). |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in AML / KYC Rules',
        body: '1. **Beneficial Ownership (BO) Thresholds:**\n   * **Companies & Trusts:** Natural person holding $> 10\\%$ of shares, capital, or profits (amended from 25% in 2023).\n   * **Partnerships & Unincorporated Entities:** Natural person holding $> 15\\%$ of capital or profits.\n2. **PAN Card Trap:** PAN Card is **NOT an Officially Valid Document (OVD) for Address Proof** (it contains no residential address)!\n3. **Tipping-off Prohibition:** Under Section 12 of PMLA, it is a **criminal offense** to inform (tip-off) a customer that an STR has been filed against their account.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module A - KYC / AML Master Directions',
        notes: 'High-frequency MCQs: 6 OVDs list, 10/8/2 year KYC periodic updates, CTR/STR deadlines (15th of next month vs 7 days), and 10% BO threshold.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'AML 3 Stages: Placement, Layering, Integration. 6 OVDs: Passport, DL, Aadhaar, Voter ID, NREGA card, NPR letter (PAN is not address proof). Periodic KYC: Low Risk (10 yrs), Medium Risk (8 yrs), High Risk / PEPs (2 yrs). Beneficial Owner threshold = 10% for companies/trusts (15% for partnerships). FIU-IND Reporting: CTR (>₹10 Lakh) by 15th of next month; STR within 7 days. Tipping-off is prohibited.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s Master Directions on KYC, what is the mandatory frequency for carrying out periodic KYC updation for customers categorized under the "HIGH RISK" profile?',
        options: [
          'At least once every 10 years',
          'At least once every 8 years',
          'At least once every 5 years',
          'At least once every 2 years',
        ],
        correctAnswer: 'At least once every 2 years',
        explanation: 'Under RBI KYC Master Directions, regulated entities are required to carry out periodic updation of KYC at least once every 2 years for high-risk customers, once every 8 years for medium-risk customers, and once every 10 years for low-risk customers.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-19',
    topicOrder: 42,
    topicSlug: 'iibf-banker-customer-relationship-and-customer-service',
    topicTitle: 'Banker-Customer Relationship & Customer Service Operations',
    topicDescription: 'Operations in accounts of special customers: minors, illiterates, visually impaired, and insolvents.',
    slug: 'operations-in-accounts-of-special-customers-minors-illiterates-blind-and-insolvents',
    title: 'Special Customer Accounts: Minors, Illiterates, Visually Impaired, Lunatics & Insolvents',
    shortDefinition: 'The legal and operational rules governing bank accounts of special categories of individuals under the Indian Majority Act 1875, Guardians and Wards Act 1890, and RBI guidelines: Minor accounts (natural guardians under Hindu Minority and Guardianship Act 1956 [Father, then Mother], self-operated minor accounts above age 10 for savings accounts without overdrafts, contract with minor is void ab initio under Section 11 Indian Contract Act [Mohori Bibee case]), Illiterate persons (Left Thumb Impression [LTI] witnessed by independent party, joint accounts restricted, no cheque book without special safeguards), Visually Impaired customers (equal banking rights, talking ATMs, biometric authentication), and Lunatics/Insolvents (automatic suspension of mandate upon adjudication).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-19-01',
        statement: 'Under Section 11 of the Indian Contract Act 1872 and the landmark Privy Council ruling in Mohori Bibee v Dharmodas Ghose (1903), a contract entered into by a minor is Void Ab Initio (void from the very beginning); a bank cannot sue a minor for recovery of any overdraft or loan granted, and a minor cannot ratify a debt contracted during minority after attaining majority.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Contract Act, 1872 (Section 11); Mohori Bibee v Dharmodas Ghose (1903) 30 IA 114',
        excerpt: 'Minor contract is void ab initio; minor cannot be sued for overdraft or loan recovery.',
      },
      {
        id: 'CLM-IIBF-19-02',
        statement: 'Under RBI guidelines, minors who have attained the age of 10 years are permitted to open and operate Savings Bank accounts independently in their own name, subject to prudential balance caps set by banks, but NO OVERDRAFT or credit facility can be legally extended to a minor account.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Customer Service in Banks (Facility of Opening Bank Accounts for Minors)',
        excerpt: 'Minors aged 10+ can operate savings accounts independently; no overdrafts permitted.',
      },
      {
        id: 'CLM-IIBF-19-03',
        statement: 'Under the Hindu Minority and Guardianship Act 1956 (as interpreted in Gita Hariharan v RBI, 1999), both Father and Mother are recognized as natural guardians with equal legal authority, enabling a mother to open and operate a bank account on behalf of her minor child as a natural guardian.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hindu Minority and Guardianship Act, 1956 (Section 6); Gita Hariharan v RBI (1999) 2 SCC 228',
        excerpt: 'Mother has equal status as natural guardian along with father (Gita Hariharan case).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Balancing Financial Inclusion with Legal Contractual Capacity',
        body: 'The law protects vulnerable classes of individuals—minors, illiterates, and persons of unsound mind—from being exploited or trapped into unfair contracts.\n\nBecause a bank account involves contractual rights and liabilities, bankers must adhere to strict statutory protocols when opening and servicing accounts for special customers to prevent fraud while ensuring dignified, non-discriminatory access.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Special Customer Operations Matrix',
        body: '| Category | Legal Governing Framework | Operational Rules for Bankers |\n| :--- | :--- | :--- |\n| **Minors** (Below 18 yrs; 21 yrs if court guardian appointed). | *Indian Majority Act, 1875*; *Contract Act (Sec 11)*. | * Minors aged **$\\ge 10$ years** can open self-operated SB accounts.<br>* Minors below 10 operated by natural guardian.<br>* **NO OVERDRAFTS / LOANS ALLOWED** (Void ab initio).<br>* On attaining majority, balance confirmed and fresh specimen signature taken. |\n| **Illiterate Persons** | Banking Operational Practice & RBI Norms. | * Account opened with **Left Thumb Impression (LTI)** for males / **Right Thumb Impression (RTI)** for females, attested by an independent witness.<br>* For cash withdrawals, customer must appear in person with passbook.<br>* Cheque book generally not issued (if issued, crossed only). |\n| **Visually Impaired / Blind** | *Rights of Persons with Disabilities Act, 2016*. | * Full equal banking facilities (Cheque book, Net banking, ATM cards with Braille/Voice).<br>* No mandatory requirement for witness if customer operates independently. |\n| **Insolvent Persons** | *Insolvency and Bankruptcy Code, 2016* / *Presidency Towns Insolvency Act*. | * Upon receipt of notice of insolvency / adjudication order, bank must **immediately STOP all debit operations**.<br>* Funds vest in the Official Assignee / Liquidator / Insolvency Resolution Professional (IRP). |\n| **Persons of Unsound Mind (Lunatic)**| *Mental Healthcare Act, 2017*. | * If a customer becomes insane, the contract is void under Section 12 of Contract Act; bank must **freeze operations upon certified medical/court notice**.<br>* Court-appointed legal manager/guardian operates account. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Special Customer Accounts',
        body: '1. **Minor Attaining Majority:** An account operated by a guardian does NOT automatically become self-operated upon majority. The bank must **obtain fresh signature and KYC directly from the minor after majority**.\n2. **Mohori Bibee Doctrine:** If a bank mistakenly grants an overdraft of ₹50,000 to a minor, the bank **CANNOT legally recover the debt through a court of law** because the contract is void ab initio.\n3. **Court-Appointed Guardian Age:** If a guardian is appointed by a court under the Guardians and Wards Act 1890, the minor attains majority at **21 YEARS**, not 18 years!',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module A - Operations in Accounts of Special Customers',
        notes: 'Guaranteed MCQs: Minor age limits (10 yrs for self-operation, 21 yrs for court guardian), Mohori Bibee void ab initio rule, and Gita Hariharan natural guardianship.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Minors: Contract is Void Ab Initio (Mohori Bibee 1903); cannot sue minor for loan recovery. Minors >= 10 yrs can self-operate savings accounts (no overdrafts). Natural guardians: Father and Mother equal (Gita Hariharan 1999). Court-appointed guardian = majority at 21 years. Illiterates = LTI with witness; in-person withdrawal. Visually impaired = Equal rights (Braille/audio). Insolvent/Lunatic = Immediate stop payment upon official notice.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If a Guardian of the person or property of a minor has been appointed by a Court of Law under the Guardians and Wards Act 1890, at what age does the minor legally attain "Majority" in India?',
        options: [
          'Upon completing 18 years of age',
          'Upon completing 20 years of age',
          'Upon completing 21 years of age',
          'Upon completing 25 years of age',
        ],
        correctAnswer: 'Upon completing 21 years of age',
        explanation: 'Under Section 3 of the Indian Majority Act 1875, every minor of whose person or property a guardian has been appointed by any court of justice, or whose property is under the superintendence of a Court of Wards, attains majority upon completing twenty-one (21) years of age (instead of the normal 18 years).',
        trapExplanation: 'Candidates assume 18 years applies in all situations.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-20',
    topicOrder: 42,
    topicSlug: 'iibf-banker-customer-relationship-and-customer-service',
    topicTitle: 'Banker-Customer Relationship & Customer Service Operations',
    topicDescription: 'Operations in accounts of entities: proprietorships, partnerships, companies, and trusts.',
    slug: 'operations-in-accounts-of-entities-proprietorships-partnerships-companies-and-trusts',
    title: 'Entity Accounts Operations: Proprietorships, Partnerships, Companies, Trusts & Clubs',
    shortDefinition: 'The legal and operational mandate architecture for institutional and corporate bank accounts: Sole Proprietorships (no separate legal entity; operated under proprietary mandate), Partnership Accounts under Indian Partnership Act 1932 (implied authority of partners under Section 19, joint and several liability, stop payment upon death/insolvency/retirement of a partner, Rule in Clayton\'s Case), Limited Liability Partnerships (LLP Act 2008: body corporate with separate legal entity), Joint Stock Companies under Companies Act 2013 (Memorandum of Association [MOA: object clause/Ultra Vires doctrine], Articles of Association [AOA: internal management/Doctrine of Indoor Management in Royal British Bank v Turquand], Board Resolution, Certificate of Incorporation), and Public/Private Trusts under Indian Trusts Act 1882 (Trust Deed, no delegation of trustee powers unless authorized).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-20-01',
        statement: 'Under Section 25 of the Indian Partnership Act 1932, every partner is liable jointly and severally for all acts of the firm done while they are a partner; in banking operations, any single partner has implied authority to bind the firm by opening and operating accounts in the firm\'s name, but does NOT have implied authority to submit a dispute to arbitration or open a bank account in their personal name on behalf of the firm.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Partnership Act, 1932 (Sections 18, 19, 25); Landmark rulings on implied authority',
        excerpt: 'Partners have joint/several liability; implied authority excludes opening account in personal name or arbitration.',
      },
      {
        id: 'CLM-IIBF-20-02',
        statement: 'Under the Companies Act 2013, a company is an artificial legal person with perpetual succession; the Doctrine of Ultra Vires renders any contract or borrowing outside the Object Clause of the MOA completely null and void, while the Doctrine of Indoor Management (Turquand\'s Rule) protects a bank dealing with a company by entitling it to presume that internal corporate procedures have been duly complied with.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Companies Act, 2013; Ashbury Railway Carriage Co v Riche (1875); Royal British Bank v Turquand (1856)',
        excerpt: 'Ultra Vires acts outside MOA are void; Indoor Management protects banks on internal regularity.',
      },
      {
        id: 'CLM-IIBF-20-03',
        statement: 'Under the Indian Trusts Act 1882 (Section 47), a trustee cannot delegate their office or any of their duties to a co-trustee or a stranger unless authorized by the Trust Deed, by necessity, or with beneficiary consent; therefore, all trustees must execute banking mandates jointly unless the trust deed explicitly authorizes operation by specified trustees.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Trusts Act, 1882 (Section 47); Principles of Trust Law',
        excerpt: 'Trustees must act jointly; delegation prohibited unless expressly authorized by Trust Deed.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Who is Authorized to Sign? Corporate Veils and Legal Powers',
        body: 'When a human customer signs a cheque, they sign for themselves. When an officer signs a cheque for "Tata Motors Limited" or "Jaipur Welfare Trust", they sign on behalf of an artificial legal entity.\n\nA banker must verify the foundational constitutional documents—the **Partnership Deed**, the **MOA/AOA and Board Resolution**, or the **Trust Deed**—to ensure the signer possesses valid statutory authority to bind the entity.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Entity Account Governance Comparison',
        body: '| Entity Type | Legal Personhood | Mandatory Account Documents | Operational Signing Authority |\n| :--- | :--- | :--- | :--- |\n| **Sole Proprietorship** | **No separate legal entity** (Proprietor is fully personally liable). | 2 proofs of business activity (GST, Shop & Est, Udyam) + Proprietor KYC. | Sole Proprietor (or legally authorized Mandate holder / Power of Attorney). |\n| **Partnership Firm** | **No separate legal person** (Partners jointly & severally liable). | Partnership Deed + Registration Certificate (if registered) + Firm PAN. | Any partner or authorized partners as per mandate. **ANY partner can stop payment of a cheque signed by another partner**! |\n| **Limited Liability Partnership (LLP)** | **Separate Legal Body Corporate** (Limited liability). | LLP Agreement + Certificate of Incorporation from ROC + LLP PAN. | Designated Partners as authorized by the LLP Agreement / Resolution. |\n| **Joint Stock Company (Pvt / Public Ltd)** | **Separate Legal Person** (Perpetual succession). | Certificate of Incorporation + MOA & AOA + PAN + **Certified Board Resolution**. | Authorized Signatories appointed by Board Resolution under corporate seal. |\n| **Public / Private Trust** | **Trustees hold property in fiduciary capacity**. | Trust Deed + Registration Certificate + Trust PAN. | **ALL Trustees must sign jointly**, unless Trust Deed specifically permits single/joint operation. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Entity Accounts',
        body: '1. **Revocation by Single Partner:** Even if a partnership account is operated on "Anyone or Survivor" basis, **ANY SINGLE PARTNER has the absolute legal right to stop payment of a cheque** drawn by any other partner or instruct the bank to stop operations.\n2. **Delegation by Trustees Prohibited:** Under Section 47 of Trusts Act, a trustee **CANNOT execute a Power of Attorney / Mandate to a third party** unless explicitly permitted by the Trust Deed.\n3. **Turquand\'s Rule Exception:** The Doctrine of Indoor Management DOES NOT protect a bank if the bank had actual knowledge of internal irregularity, or if the transaction involves obvious forgery.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module A - Accounts of Various Types of Customers',
        notes: 'Direct MCQs on: Partner stopping payment, Joint trust operations, Board Resolution requirement, and Turquand\'s Rule.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Partnership (1932 Act): Partners jointly & severally liable; any single partner can stop payment of any cheque. LLP (2008 Act): Body corporate with limited liability. Companies (2013 Act): Separate legal person; MOA (Object clause - Ultra Vires void), AOA (Indoor Management / Turquand\'s rule protects bank), Board Resolution mandatory. Trusts (1882 Act): Trustees must act jointly; no delegation without Trust Deed authority.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In a partnership firm account operating under the operational mandate "Either or Survivor", Partner A issues a cheque for ₹2,00,000 to a supplier. Before the cheque is presented for payment, Partner B visits the bank and gives written instructions to stop payment of the cheque. How should the banker proceed?',
        options: [
          'Ignore Partner B\'s notice because Partner A is an authorized signatory under the "Either or Survivor" mandate',
          'Immediately stop payment of the cheque, because any partner has the legal right to revoke the authority or stop payment on a firm cheque',
          'Pay the cheque and advise Partner B to settle the dispute internally with Partner A',
          'Freeze all operations only after obtaining a court injunction order',
        ],
        correctAnswer: 'Immediately stop payment of the cheque, because any partner has the legal right to revoke the authority or stop payment on a firm cheque',
        explanation: 'Under the Indian Partnership Act 1932 and banking law, any partner has the inherent legal right to countermand (stop payment of) a cheque drawn by any other partner on the firm\'s account, or to revoke the operational mandate of the account. The banker must immediately act on the stop-payment notice.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-21',
    topicOrder: 42,
    topicSlug: 'iibf-banker-customer-relationship-and-customer-service',
    topicTitle: 'Banker-Customer Relationship & Customer Service Operations',
    topicDescription: 'Legal Orders Affecting Bank Accounts: Garnishee Order vs Income Tax Attachment Order.',
    slug: 'legal-orders-affecting-bank-accounts-garnishee-order-vs-income-tax-attachment-order',
    title: 'Legal Orders on Bank Accounts: Garnishee Orders (Order XXI CPC) vs IT Attachment Orders (Sec 226)',
    shortDefinition: 'The statutory procedure and legal mechanics of judicial and statutory orders attaching customer bank accounts: Garnishee Order under Order XXI Rule 46 of the Code of Civil Procedure 1908 (Judgment Creditor, Judgment Debtor, and Garnishee Bank: Order Nisi [provisional freeze] vs Order Absolute [direction to pay court]), scope of attachment (attaches debts "due or accruing due" at the exact moment of service; DOES NOT attach future credits or uncleared cheques), and Income Tax Attachment Order under Section 226(3) of the Income Tax Act 1961 (drastically wider scope: attaches existing funds AND all subsequent/future credits received into the account until the tax demand is fully satisfied).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-21-01',
        statement: 'A Garnishee Order is issued by a Civil Court under Order XXI Rule 46 of CPC 1908, proceeding in two stages: Order Nisi (directing the Garnishee Bank to freeze debts due or accruing due to the Judgment Debtor up to the specified amount and explain why they should not be paid) followed by Order Absolute (ordering the bank to pay the attached funds directly into court).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Code of Civil Procedure, 1908 (Order XXI, Rules 46A to 46-I); Banking Law Principles',
        excerpt: 'Garnishee order issued in 2 stages: Order Nisi (freeze) and Order Absolute (pay to court).',
      },
      {
        id: 'CLM-IIBF-21-02',
        statement: 'A Garnishee Order attaches ONLY the clear credit balance existing in the customer\'s account at the exact date and time the Order Nisi is served on the bank ("debts due or accruing due"); it DOES NOT attach subsequent deposits made after the time of service, unutilized sanctioned overdraft limits, or uncleared cheques.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rogers v Whiteley (1892) AC 118; Heppenstall v Jackson (1939) 1 KB 585',
        excerpt: 'Garnishee order attaches only funds in account at the moment of service; does not attach future deposits.',
      },
      {
        id: 'CLM-IIBF-21-03',
        statement: 'An Attachment Order issued by the Income Tax Department under Section 226(3) of the Income Tax Act 1961 takes statutory priority over a Garnishee Order and attaches NOT ONLY existing credit balances at the time of service, BUT ALSO ALL subsequent credits/deposits that become due to the customer thereafter until the entire tax demand is fully satisfied.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Income Tax Act, 1961 (Section 226(3)); Supreme Court rulings on Crown Debt Priority',
        excerpt: 'IT Attachment Order under Section 226 attaches existing funds AND all future credits until tax is paid.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'When the Law Steps Between a Banker and Customer',
        body: 'If a bank customer loses a civil lawsuit and refuses to pay the ₹10 Lakh judgment debt, or evades payment of income taxes, the civil court or tax authorities do not need to hunt down the debtor\'s physical cash.\n\nThey serve a legal attachment order directly on the debtor\'s bank. The bank is legally compelled to freeze the customer\'s funds and pay them over to the court or tax authorities.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Garnishee Order vs Income Tax Attachment Order Comparison',
        body: '| Parameter | Garnishee Order (CPC Order XXI) | Income Tax Attachment Order (Sec 226(3)) |\n| :--- | :--- | :--- |\n| **Issuing Authority** | **Civil Court** (at the instance of Judgment Creditor). | **Tax Recovery Officer (TRO) / Assessing Officer** of Income Tax Dept. |\n| **Applicable Statute** | **Code of Civil Procedure, 1908 (Order XXI Rule 46)**. | **Income Tax Act, 1961 (Section 226(3))**. |\n| **Stages of Issuance** | **Two Stages:** Order Nisi (show cause & freeze) $\\rightarrow$ Order Absolute (pay court). | **Single Notice** requiring direct remittance to the government. |\n| **Scope on Future Deposits** | **DOES NOT ATTACH FUTURE CREDITS** (Attaches ONLY funds existing at the exact minute of service). | **ATTACHES FUTURE CREDITS AS WELL** (Any subsequent deposit received into the account is automatically attached). |\n| **Unutilized Overdraft Limit**| **Cannot attach unutilized loan/OD limits** (Borrowing limit is not a debt due to customer). | Cannot attach unutilized loan/OD limits. |\n| **Joint Account Application** | * Order against A alone **CANNOT attach joint account of A & B** (even if operational mandate is Former or Survivor / Either or Survivor). | * Attaches the proportionate share of A in a joint account (unless proved otherwise). |\n| **Statutory Priority** | Subordinate to Government / Tax dues. | **Crown Debt Priority:** Takes statutory precedence over civil Garnishee orders. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Account Attachment Orders',
        body: '1. **Garnishee on Joint Accounts:** A Garnishee Order in the name of \'X\' ALONE **CANNOT ATTACH a joint account in the names of \'X & Y\'** (partnership rule: you cannot attach B\'s property for A\'s debt).\n2. **Garnishee in Joint Names on Single Account:** However, a Garnishee Order in the joint names of \'X & Y\' **CAN attach individual accounts of X and individual accounts of Y**!\n3. **Future Credits:** Remember the critical distinction: **Garnishee Order = NO future credits**; **IT Attachment Order = ATTACHES ALL future credits**!',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module A - Legal Orders Affecting Bank Accounts',
        notes: 'Guaranteed MCQs: Garnishee vs IT attachment on future credits, joint account attachment rules, and Order Nisi vs Order Absolute.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Garnishee Order (CPC Order XXI): Issued by civil court in 2 stages (Order Nisi -> Order Absolute). Attaches ONLY funds existing at the exact moment of service; DOES NOT attach future deposits. Order on \'A\' alone CANNOT attach joint account of \'A & B\'. IT Attachment Order (Sec 226(3) IT Act): Attaches existing balance AND ALL future deposits until tax debt cleared; takes priority over Garnishee orders.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A bank is served with a Garnishee Order Nisi for ₹1,00,000 against customer \'A\' on Monday at 11:00 AM when the credit balance in A\'s savings account is ₹60,000. On Tuesday at 2:00 PM, customer A deposits ₹50,000 cash into the account. What amount is legally attached under the Garnishee Order?',
        options: [
          'The entire ₹1,00,000 (combining Monday balance of ₹60,000 and Tuesday deposit of ₹50,000)',
          'Only ₹60,000 (the credit balance existing at the exact time of service of Order Nisi)',
          '₹1,10,000 (the entire aggregate balance in the account)',
          'Zero, because the balance was less than the decree amount of ₹1,00,000',
        ],
        correctAnswer: 'Only ₹60,000 (the credit balance existing at the exact time of service of Order Nisi)',
        explanation: 'Under Order XXI of CPC 1908 and established banking case law (Rogers v Whiteley), a Garnishee Order attaches only "debts due or accruing due" at the exact date and time the order is served on the bank. It does not attach subsequent deposits made after the service of the order. Therefore, only the ₹60,000 existing on Monday at 11:00 AM is attached.',
        trapExplanation: 'Candidates confuse Garnishee rules with Income Tax Attachment Orders (which attach future credits).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-22',
    topicOrder: 42,
    topicSlug: 'iibf-banker-customer-relationship-and-customer-service',
    topicTitle: 'Banker-Customer Relationship & Customer Service Operations',
    topicDescription: 'Safe Deposit Lockers, Safe Custody & Statutory Nomination Framework.',
    slug: 'safe-deposit-lockers-safe-custody-and-statutory-nomination-framework',
    title: 'Safe Deposit Lockers & Nomination: Revised RBI Directions 2021/2023 & Claim Settlement',
    shortDefinition: 'The regulatory and legal regime governing Safe Deposit Lockers, Safe Custody, and Statutory Nomination under Sections 45ZA to 45ZF of the Banking Regulation Act 1949: Revised RBI Locker Directions (Supreme Court Amitabha Dasgupta v UBI ruling: model stamped locker agreement, term deposit as locker rent security [max 3 years\' rent + break-open charges], bank liability capped at 100 times annual locker rent for fire/theft/building collapse caused by bank negligence), Breaking open lockers (procedure for overdue rent / inactive lockers after 3 years), and Statutory Nomination rules (nominee receives valid discharge for bank; nominee acts as trustee for legal heirs; settlement timeline strictly within 15 days of claim receipt).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-22-01',
        statement: 'Under Sections 45ZA to 45ZF of the Banking Regulation Act 1949, a bank customer (individual/sole proprietor) can appoint a Nominee for deposit accounts, safe custody articles, and safe deposit lockers; payment/release to a registered nominee provides a complete and valid statutory discharge to the bank, though the nominee holds the assets in a fiduciary capacity as a Trustee for the rightful legal heirs.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Banking Regulation Act, 1949 (Sections 45ZA to 45ZF); Banking Companies (Nomination) Rules, 1985',
        excerpt: 'Nomination provides valid legal discharge to the bank; nominee holds funds as trustee for heirs.',
      },
      {
        id: 'CLM-IIBF-22-02',
        statement: 'Under RBI\'s Revised Instructions on Safe Deposit Locker Operations (effective January 2022/2023), a bank\'s maximum compensation liability for loss of locker contents arising from fire, theft, burglary, dacoity, building collapse, or employee fraud due to bank negligence is statutorily fixed at an amount equivalent to 100 times the prevailing annual rent of the safe deposit locker.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Circular on Safe Deposit Locker / Safe Custody Article Facility (Circular RBI/2021-2022/86)',
        excerpt: 'Bank compensation liability for locker loss due to negligence is capped at 100 times annual rent.',
      },
      {
        id: 'CLM-IIBF-22-03',
        statement: 'To ensure prompt settlement of claims in deceased accounts where a valid nomination exists or survivor mandate (Either or Survivor / Former or Survivor) is registered, RBI mandates that banks must settle claims and release funds within a maximum timeframe of 15 days from the date of receipt of the claim with minimum documentation.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Customer Service in Banks (Deceased Depositor Claims Settlement)',
        excerpt: 'Deceased depositor claims with valid nomination must be settled within 15 days.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Protecting Heirs and Relieving Banks from Inheritance Disputes',
        body: 'When a bank customer passes away leaving ₹50 Lakh in a savings account, family members frequently engage in bitter succession disputes. If the bank had to wait for a court **Succession Certificate** or probate for every single account, families would starve for months and banks would be inundated with court notices.\n\nThe **Statutory Nomination Framework** empowers the bank to hand over funds immediately to the registered nominee, granting the bank complete legal immunity while leaving family members to settle succession claims among themselves.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Nomination Forms & Rules (BR Act 1949)',
        body: '| Category / Facility | New Nomination Form | Cancellation / Variation Form | Maximum Number of Nominees Permitted |\n| :--- | :--- | :--- | :--- |\n| **Bank Deposit Accounts** (Savings, Current, FD) | **Form DA-1** | **Form DA-2** (Cancellation)<br>**Form DA-3** (Variation) | **ONLY ONE Nominee** per individual/joint deposit account. |\n| **Safe Custody Articles** | **Form SC-1** (Single)<br>**Form SC-2** (Joint) | **Form SC-3** | **ONE Nominee** for single depositor; **Multiple nominees** permitted for joint depositors. |\n| **Safe Deposit Lockers** | **Form SL-1** (Single)<br>**Form SL-1A** (Joint) | **Form SL-2** (Cancellation)<br>**Form SL-3** (Variation) | **ONE Nominee** for single locker hirer; **More than one Nominee** permitted for joint hirers. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Revised RBI Locker Directions (2022/2023)',
        body: '```mermaid\ngraph TD\n    LOCKER["RBI Revised Safe Deposit Locker Rules"]\n    LOCKER --> SEC["1. Security Deposit: Bank may obtain a Term Deposit covering max 3 YEARS\' RENT + Break-open charges (cannot demand exorbitant FDs)"]\n    LOCKER --> LIAB["2. Bank Liability: For fire, burglary, dacoity, building collapse due to bank deficiency, Bank liability = 100 TIMES ANNUAL RENT"]\n    LOCKER --> NAT["3. Natural Calamities: Bank is NOT liable for damage from floods, earthquake, tsunami, war (Acts of God)"]\n    LOCKER --> INACT["4. Inactive Lockers: If locker is inactive for 7 years (even if rent is paid), bank may break open locker after due notice to hirer/nominee"]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Locker & Nomination Rules',
        body: '1. **Legal Status of Nominee:** A nominee is **NOT an absolute owner/heir**! The nominee receives funds merely as a **Trustee** on behalf of the legal heirs entitled under personal succession laws.\n2. **Bank Compensation Ceiling:** The statutory compensation limit is **100 times the annual locker rent** (e.g. If annual rent is ₹3,000, max bank liability is $₹3,000 \\times 100 = ₹3,00,000$).\n3. **Locker Term Deposit Security:** Banks can take a term deposit covering a **MAXIMUM of 3 years\' rent plus break-open charges**, and cannot insist on term deposits from existing operational customers.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module A - Lockers, Safe Custody & Nomination Facility',
        notes: 'Direct MCQs on DA-1/DA-2/DA-3 forms, 100x annual rent compensation cap, max 3 yrs FD security, and 15-day settlement rule.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nomination (BR Act 45ZA-ZF): Form DA-1 (New deposit nomination), DA-2 (Cancel), DA-3 (Vary). Only 1 nominee for deposit account. Nominee gets valid discharge for bank, but holds funds as Trustee for legal heirs. Deceased claim settlement = within 15 days. RBI Locker Rules: Max FD security = 3 years\' rent + break-open charges. Bank liability for theft/fire/negligence = 100 times annual locker rent. Inactive locker break-open = 7 years.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s revised directions on Safe Deposit Locker operations, what is the maximum financial compensation liability of a bank in the event of theft, burglary, robbery, dacoity, or building collapse occurring due to the bank\'s negligence or deficiency in security?',
        options: [
          'The actual value of jewellery declared by the locker hirer in writing',
          'A fixed statutory sum of ₹5,00,000 per locker',
          'An amount equivalent to 100 times the prevailing annual rent of the safe deposit locker',
          'Banks are completely exempt from all liability for locker contents under all circumstances',
        ],
        correctAnswer: 'An amount equivalent to 100 times the prevailing annual rent of the safe deposit locker',
        explanation: 'Under the revised RBI guidelines on locker operations issued pursuant to the Supreme Court ruling in Amitabha Dasgupta v Union of India, in instances where loss of contents occurs due to fire, theft, burglary, dacoity, building collapse or employee fraud arising from bank negligence, the bank\'s liability is capped at 100 times the prevailing annual rent of the locker.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-23',
    topicOrder: 42,
    topicSlug: 'iibf-banker-customer-relationship-and-customer-service',
    topicTitle: 'Banker-Customer Relationship & Customer Service Operations',
    topicDescription: 'Cash Operations Management, Clean Note Policy & Counterfeit Currency Detection.',
    slug: 'cash-operations-management-clean-note-policy-and-ficn-counterfeit-detection',
    title: 'Cash Operations & Currency Management: Clean Note Policy & Counterfeit (FICN) Detection Rules',
    shortDefinition: 'The statutory guidelines governing cash operations and sovereign currency under the RBI Act 1934 and Reserve Bank of India (Note Refund) Rules 2009 (amended 2018): Clean Note Policy (ban on writing/scribbling on notes, stapling notes, and sorting into ATM-fit/soiled), Note classification (Soiled Notes [dirty/limp], Mutilated Notes [portion missing or composed of more than two pieces], Imperfect Notes [obliterated/indecipherable]), and Forged / Counterfeit Currency (Fake Indian Currency Notes - FICN) impounding protocol (mandatory impounding with "COUNTERFEIT NOTE IMPOUNDED" stamp; no return to customer; issuing receipt; filing FIR with police if 5 or more fake notes detected in a single transaction).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-23-01',
        statement: 'Under RBI\'s Clean Note Policy, bank branches are strictly prohibited from stapling currency note packets or writing/scribbling on the watermark window or body of banknotes, and must sort cash into ATM-fit, issuer-fit, and soiled notes using calibrated note sorting machines before reissuing to the public.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Detection and Impounding of Counterfeit Notes; RBI Clean Note Policy Directives',
        excerpt: 'Clean Note Policy bars stapling and scribbling on currency; requires machine sorting.',
      },
      {
        id: 'CLM-IIBF-23-02',
        statement: 'Under RBI guidelines on Detection and Impounding of Counterfeit Notes, whenever a counterfeit banknote is detected at a bank counter, the cashier must mandatorily impound the note by stamping "COUNTERFEIT NOTE IMPOUNDED", issue an acknowledgment receipt to the presenter, and under NO circumstances return the forged note to the customer or credit the customer\'s account.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction on Counterfeit Notes; Section 39 of Indian Penal Code / BNSS',
        excerpt: 'Counterfeit notes must be impounded immediately; never returned to customer or credited.',
      },
      {
        id: 'CLM-IIBF-23-03',
        statement: 'In counterfeit currency reporting: if up to 4 counterfeit notes are detected in a single transaction, the bank branch sends a consolidated report to the local police at the end of the month; if 5 or MORE counterfeit notes are detected in a single transaction, the branch must immediately file a First Information Report (FIR) with the local police station.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Detection and Impounding of Counterfeit Notes (Reporting Mechanism)',
        excerpt: 'FIR mandatory for 5 or more fake notes in a transaction; monthly report for 1 to 4 fake notes.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Preserving Sovereign Trust in the Physical Rupee',
        body: 'Paper currency functions solely on trust in the sovereign guarantee of the Reserve Bank of India. If torn, defaced, or counterfeit banknotes circulate unchecked, public confidence in legal tender collapses.\n\nBank cashiers serve as the nation\'s frontline guardians—ensuring high-quality clean notes in circulation and systematically intercepting counterfeit currency.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Note Refund Rules: Soiled vs Mutilated Notes',
        body: '| Note Category | Definition under Note Refund Rules 2018 | Exchange / Refund Criteria |\n| :--- | :--- | :--- |\n| **Soiled Note** | A banknote that has become dirty, limp due to usage, or two pieces of the same note pasted together where both pieces belong to the same note and no essential feature is missing. | **Full Value Exchanged** across any bank counter freely. |\n| **Mutilated Note** | A banknote of which a portion is missing, or which is composed of more than two pieces pasted together. | **Full Value** if undivided area $\\ge 80\\%$ (for ₹50/100/200/500 notes).<br>**Half Value** if area $\\ge 40\\%$ but $< 80\\%$.<br>**Zero Value / Rejected** if area $< 40\\%$. |\n| **Imperfect Note** | Any banknote which is wholly or partially obliterated, shrunken, washed, or altered, but not mutilated. | Evaluated at RBI Issue Department based on decipherable security features. |\n| **Extremely Brittle / Burnt** | Notes charred by fire or stuck together. | **CANNOT be exchanged at bank branches**; must be submitted directly to **RBI Issue Department**. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Protocol on Counterfeit Note Detection (FICN)',
        body: '```mermaid\ngraph TD\n    FAKE["Fake Note Presented at Bank Cash Counter"]\n    FAKE --> IMP["1. Mandatory Impounding: Cashier stamps COUNTERFEIT NOTE IMPOUNDED (Uniform rubber stamp: 5cm x 5cm)"]\n    FAKE --> NO_RET["2. Absolute Non-Return: Never return to customer; Never credit customer account"]\n    FAKE --> RCPT["3. Issue Receipt: Issue serially numbered acknowledgment receipt to customer (countersigned by customer)"]\n    FAKE --> POLICE["4. Police Action: <br>• 1 to 4 notes: Monthly consolidated report to Nodal Police Station.<br>• 5 or MORE notes: Immediate FIR filed with Police."]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Currency Operations',
        body: '1. **5 Fake Notes Threshold for FIR:** Always remember the **5 notes rule**! Up to 4 notes = Monthly report. **5 or more notes = Immediate FIR** with police!\n2. **Mutilated Area for Full Value (High Denominations):** For ₹50, ₹100, ₹200, and ₹500 notes, **Full Value requires $\\ge 80\\%$ undivided area**; Half value requires **$\\ge 40\\%$ area**.\n3. **Return of Counterfeit Currency:** A cashier who returns a fake note to the customer is guilty of abetment of an offense under the Indian Penal Code / Bharatiya Nyaya Sanhita.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module A - Cash Management, Clean Note Policy & Fake Currency Rules',
        notes: 'Direct MCQs on 5 fake notes FIR threshold, 80%/40% mutilated area refund rules, and impounding receipt requirements.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Clean Note Policy: No stapling/scribbling. Note Refund Rules 2018: Soiled = Full exchange. Mutilated (₹50-500) = >=80% area gets Full Value, 40-79% area gets Half Value, <40% gets Nil. Counterfeit notes: Impound immediately with stamp, issue receipt, never return/credit. Police action: 1-4 fake notes = monthly report; 5 or MORE fake notes = immediate FIR.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'When counterfeit banknotes are detected at a commercial bank counter during a cash deposit, what is the minimum number of forged notes detected in a single transaction that legally mandates the immediate filing of an FIR (First Information Report) with the local police?',
        options: [
          'Detection of 1 or more forged notes',
          'Detection of 3 or more forged notes',
          'Detection of 5 or more forged notes',
          'Detection of 10 or more forged notes',
        ],
        correctAnswer: 'Detection of 5 or more forged notes',
        explanation: 'Under RBI Master Directions on Detection and Impounding of Counterfeit Notes, if up to 4 counterfeit notes are detected in a single transaction, the branch sends a consolidated report to the police at the end of the month. If 5 or more counterfeit notes are detected in a single transaction, the branch must immediately file an FIR with the local police station.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 43: PRINCIPLES OF LENDING & COLLATERAL CHARGES
  // =========================================================================
  {
    id: 'CON-IIBF-24',
    topicOrder: 43,
    topicSlug: 'iibf-principles-of-lending-and-credit-assessment',
    topicTitle: 'Principles of Lending, Credit Assessment & Working Capital Methods',
    topicDescription: 'Principles of bank lending (Safety, Liquidity, Profitability, Purpose), Working Capital assessment methods (Turnover / Nayak Method, MPBF / Tandon-Chore Method, Cash Budget System).',
    slug: 'principles-of-bank-lending-and-working-capital-assessment-turnover-mpbf-and-cash-budget',
    title: 'Principles of Lending & Working Capital Assessment: Nayak Turnover, Tandon MPBF & Cash Budget',
    shortDefinition: 'The foundational credit underwriting architecture of commercial banks: The 5 Principles of Sound Lending (Safety, Liquidity, Profitability, Purpose, Spread of Risk), the 5 Cs of Credit (Character, Capacity, Capital, Collateral, Conditions), and the 3 classic Working Capital assessment methodologies: Turnover Method (P.R. Nayak Committee: working capital requirements assessed at 25% of projected annual turnover, with bank financing min 20% and borrower margin min 5% for limits up to ₹5 Crore), Maximum Permissible Bank Finance (MPBF - Prakash Tandon & K.B. Chore Committees: Method I [Bank funds 75% of Working Capital Gap] and Method II [Bank funds 75% of Current Assets less Current Liabilities, mandating min 1.33 Current Ratio]), and the Cash Budget System (for seasonal industries like sugar, construction, tea).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-24-01',
        statement: 'Under the P.R. Nayak Committee Turnover Method (mandated by RBI for MSMEs with credit limits up to ₹5 Crore), a borrower\'s total working capital requirement is computed at a minimum of 25% of accepted projected annual turnover: the commercial bank provides a minimum of 20% of turnover as bank credit, while the borrower brings a minimum of 5% of turnover as promoter margin / Net Working Capital.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'P.R. Nayak Committee Report (1992); RBI Master Circular – Lending to Micro, Small & Medium Enterprises (MSMEs)',
        excerpt: 'Nayak Turnover Method: 25% turnover requirement = 20% Bank Finance + 5% Borrower Margin.',
      },
      {
        id: 'CLM-IIBF-24-02',
        statement: 'Under the Tandon Committee Maximum Permissible Bank Finance (MPBF) Method II (the standard method for large corporate borrowers), the borrower is required to finance at least 25% of Total Current Assets (TCA) from long-term funds (Net Working Capital), establishing a mathematical minimum Current Ratio of 1.33:1 (Current Assets / Current Liabilities = 1.33).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Report of the Study Group to Frame Guidelines for Follow-up of Bank Credit (Prakash Tandon Committee, 1975)',
        excerpt: 'Tandon Method II: Borrower brings 25% of Total Current Assets; mandates min 1.33 Current Ratio.',
      },
      {
        id: 'CLM-IIBF-24-03',
        statement: 'The Cash Budget System is mandatory for assessing working capital limits in seasonal, cyclical, and project-based industries (sugar mills, tea plantations, real estate, software contracting), where cash inflows and outflows are highly uneven throughout the year, fixing monthly peak credit limits based on projected monthly cash deficits.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Chore Committee Report (1979); RBI Master Circular on Working Capital Assessment',
        excerpt: 'Cash budget system assesses seasonal industries based on projected monthly peak cash deficit.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Financing the Operating Cycle: Raw Materials to Cash Recovery',
        body: 'A manufacturing firm buys steel, converts it into automobile parts over 30 days, sells them on 60 days credit, and finally collects cash from customers (**Operating Cycle / Working Capital Cycle = 90 Days**).\n\nDuring these 90 days, the company needs money to pay workers and electricity bills. Commercial banks step in to finance this **Working Capital Gap (Current Assets minus Current Liabilities)**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Working Capital Assessment Formulas',
        body: '### 1. Nayak Committee Turnover Method (Limits up to ₹5 Crore)\n$$\\mathbf{\\text{Total Working Capital Requirement} = 25\\% \\text{ of Projected Annual Turnover}}$$\n$$\\mathbf{\\text{Minimum Bank Finance (MPBF)} = 20\\% \\text{ of Projected Annual Turnover}}$$\n$$\\mathbf{\\text{Minimum Borrower Margin (NWC)} = 5\\% \\text{ of Projected Annual Turnover}}$$\n* *Example:* If an MSME has projected turnover of **₹100 Lakh**, Total Working Capital = **₹25 Lakh**; Bank Loan = **₹20 Lakh**; Borrower Margin = **₹5 Lakh**.\n\n### 2. Tandon Committee MPBF Methods\n* **Working Capital Gap (WCG):** $\\mathbf{\\text{WCG} = \\text{Total Current Assets (TCA)} - \\text{Other Current Liabilities (OCL)}}$.\n* **Tandon Method I:** $\\mathbf{\\text{MPBF} = 0.75 \\times (\\text{TCA} - \\text{OCL})}$. Borrower brings 25% of WCG. (Minimum Current Ratio = **1.17:1**).\n* **Tandon Method II:** $\\mathbf{\\text{MPBF} = (0.75 \\times \\text{TCA}) - \\text{OCL}}$. Borrower brings 25% of Total Current Assets. (Minimum Current Ratio = **1.33:1**).',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Working Capital Calculations',
        body: '1. **Nayak Method Threshold:** Nayak turnover method is applicable for working capital credit limits **up to ₹5 Crore** for MSMEs.\n2. **Tandon Method II Current Ratio:** Always remember that Tandon Method II mathematically forces a **Current Ratio of 1.33:1**.\n3. **Operating Cycle Formula:**\n   $$\\mathbf{\\text{Gross Operating Cycle} = \\text{Raw Material Storage Days} + \\text{WIP Days} + \\text{Finished Goods Days} + \\text{Debtor Collection Days}}$$\n   $$\\mathbf{\\text{Net Operating Cycle (Cash Conversion Cycle)} = \\text{Gross Operating Cycle} - \\text{Creditor Payment Days}}$$',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB) & Paper 3 (AFMB): Working Capital Assessment & Credit Evaluation',
        notes: 'Direct numerical problems: calculating MPBF under Nayak Method (20%/5%), Tandon Method II (1.33 ratio), and Operating Cycle days.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nayak Turnover Method (limits <=₹5 Cr): Total WC = 25% turnover; Bank credit = 20%; Borrower margin = 5%. Tandon Method I: MPBF = 0.75 * (TCA - OCL) [CR = 1.17]. Tandon Method II: MPBF = (0.75 * TCA) - OCL [CR = 1.33]. Cash Budget System = for seasonal/project businesses (peak monthly cash deficit). Cash Conversion Cycle = RM + WIP + FG + Debtors - Creditors.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'An MSME unit has an accepted projected annual turnover of ₹200 Lakh. Under the P.R. Nayak Committee Turnover Method, what is the maximum Bank Credit limit and minimum Borrower Margin required respectively?',
        options: [
          'Bank Credit of ₹50 Lakh and Borrower Margin of ₹10 Lakh',
          'Bank Credit of ₹40 Lakh and Borrower Margin of ₹10 Lakh',
          'Bank Credit of ₹30 Lakh and Borrower Margin of ₹20 Lakh',
          'Bank Credit of ₹40 Lakh and Borrower Margin of ₹20 Lakh',
        ],
        correctAnswer: 'Bank Credit of ₹40 Lakh and Borrower Margin of ₹10 Lakh',
        explanation: 'Under the Nayak Turnover Method, Total Working Capital = 25% of Turnover (₹50 Lakh). The Bank provides a minimum of 20% of Turnover as bank credit (₹200 Lakh * 20% = ₹40 Lakh), and the Borrower provides a minimum of 5% of Turnover as margin/NWC (₹200 Lakh * 5% = ₹10 Lakh).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-25',
    topicOrder: 43,
    topicSlug: 'iibf-principles-of-lending-and-credit-assessment',
    topicTitle: 'Principles of Lending, Credit Assessment & Working Capital Methods',
    topicDescription: 'Modes of creating charges on securities: Pledge, Hypothecation, Mortgage, Lien & Assignment.',
    slug: 'modes-of-creating-charges-on-securities-pledge-hypothecation-mortgage-lien-and-assignment',
    title: 'Modes of Creating Charges on Securities: Pledge vs Hypothecation vs Mortgage vs Assignment vs Lien',
    shortDefinition: 'The statutory mechanisms for creating legal security charges over borrower assets to secure bank advances: Pledge (Section 172 Indian Contract Act: bailment of movable goods with actual or constructive delivery of possession to bank; e.g. Gold loans, warehouse receipts), Hypothecation (Section 2(1)(n) SARFAESI Act 2002: charge on movable property without delivery of possession; borrower retains possession; e.g. stock, plant, vehicle), Mortgage (Section 58 Transfer of Property Act 1882: transfer of interest in specific immovable property; 6 types including Simple Mortgage and Equitable / Title Deed Mortgage), Assignment (Section 130 Transfer of Property Act: transfer of actionable claims like LIC policies, supply bills, book debts), and Banker\'s Lien.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-25-01',
        statement: 'Under Section 172 of the Indian Contract Act 1872, a Pledge is the bailment of movable goods as security for payment of a debt or performance of a promise, requiring physical or constructive delivery of possession of the goods to the lender (Pawnee / Pledgee), whereas under Section 2(1)(n) of the SARFAESI Act 2002, Hypothecation creates a charge on movable property in favor of a secured creditor without delivery of possession.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Contract Act, 1872 (Section 172); SARFAESI Act, 2002 (Section 2(1)(n))',
        excerpt: 'Pledge requires delivery of possession of movable goods; Hypothecation creates charge without possession.',
      },
      {
        id: 'CLM-IIBF-25-02',
        statement: 'Under Section 58(f) of the Transfer of Property Act 1882, an Equitable Mortgage (Mortgage by Deposit of Title Deeds) is created when a debtor delivers documents of title to immovable property to a creditor with intent to create a security thereon, valid only in notified towns without requiring mandatory registered instrument (saving heavy stamp duty, though CERSAI registration within 30 days is mandatory under SARFAESI).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Transfer of Property Act, 1882 (Section 58(f)); SARFAESI Act, 2002 (Section 23)',
        excerpt: 'Equitable mortgage created by deposit of title deeds in notified towns; requires CERSAI registration.',
      },
      {
        id: 'CLM-IIBF-25-03',
        statement: 'Under Section 130 of the Transfer of Property Act 1882, an Assignment is the legal transfer of an Actionable Claim (unsecured debts, life insurance policies, book debts, government supply bills) executed in writing signed by the assignor, where Notice of Assignment to the principal debtor/insurer is mandatory to protect the bank against prior equities.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Transfer of Property Act, 1882 (Sections 130 & 131); Insurance Act 1938 (Section 38)',
        excerpt: 'Assignment transfers actionable claims (LIC policy, book debts); notice to debtor is essential.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Matching the Legal Charge to the Physical Reality of the Asset',
        body: 'If a bank lends ₹50 Lakh against physical gold, the bank locks the gold in its branch vault (**Pledge: Possession with Bank**).\nIf a bank lends ₹50 Lakh against a fleet of trucks, locking the trucks in the bank vault would destroy the borrower\'s transport business (**Hypothecation: Possession with Borrower**).\nIf a bank lends ₹1 Crore against a commercial factory building, immovable land cannot be physically moved (**Mortgage**).\n\nThe law provides distinct legal mechanisms tailored to every asset class.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Security Charges Comparison Matrix',
        body: '| Mode of Charge | Nature of Security Property | Possession of Asset | Governing Statutory Act | Common Practical Examples |\n| :--- | :--- | :--- | :--- | :--- |\n| **PLEDGE** | **Movable Goods** | **With the BANK (Pledgee)** (Actual or Constructive delivery). | *Indian Contract Act, 1872 (Sec 172)*. | Gold Jewellery loans, Warehouse Receipts, Goods in bank lock & key. |\n| **HYPOTHECATION** | **Movable Goods / Assets** | **With the BORROWER (Hypothecator)**. | *SARFAESI Act, 2002 (Sec 2(1)(n))*. | Car / Vehicle loans, Factory raw material stocks, Working capital inventories. |\n| **MORTGAGE** | **Immovable Property** (Land, Buildings, Flats). | Typically with mortgagor (except English/Usufructuary). | *Transfer of Property Act, 1882 (Sec 58)*. | Housing loans, Factory land and building collateral. |\n| **ASSIGNMENT** | **Actionable Claims** (Intangible monetary rights). | N/A (Transfer of legal claim executed in writing). | *Transfer of Property Act, 1882 (Sec 130)*. | Loans against **Life Insurance Policies (LIC)**, Supply bills, National Savings Certificates (NSC). |\n| **LIEN** | Movable securities & credit balances. | With the Bank in ordinary course of banking. | *Indian Contract Act, 1872 (Sec 171)*. | Fixed Deposit receipts, shares/bonds held in bank accounts. |',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'The 6 Types of Mortgages (Section 58 Transfer of Property Act)',
        body: '| Mortgage Type | Key Legal Characteristics | Registration / Formalities |\n| :--- | :--- | :--- |\n| **1. Simple Mortgage (Sec 58b)** | Mortgagor personally binds to pay; property NOT delivered; on default, court decree required to sell. | **Mandatory Registered Mortgage Deed** + Stamp Duty. |\n| **2. Mortgage by Conditional Sale (Sec 58c)**| Ostensible sale of property that becomes absolute on default; becomes void on payment. | Mandatory Registered Mortgage Deed. |\n| **3. Usufructuary Mortgage (Sec 58d)** | Possession delivered to mortgagee; rents/profits harvested to pay interest and principal (No personal liability). | Mandatory Registered Mortgage Deed. |\n| **4. English Mortgage (Sec 58e)** | Absolute transfer of property to mortgagee with proviso to re-transfer upon repayment; personal covenant to pay. | Mandatory Registered Mortgage Deed. |\n| **5. Equitable Mortgage (Sec 58f)** | Created by **DEPOSIT OF TITLE DEEDS** in notified towns with intent to create security. | **NO registration deed required** (Memorandum recorded; CERSAI registered within 30 days). Most popular in Indian banking! |\n| **6. Anomalous Mortgage (Sec 58g)** | Any composite mortgage combining terms of above types. | Governed by custom and contract terms. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Security Charges',
        body: '1. **LIC Policy Charge:** A loan against a Life Insurance Policy is secured by **ASSIGNMENT** (under Section 38 of Insurance Act 1938), NOT pledge or mortgage!\n2. **Gold Loan vs Car Loan:** Gold Loan is a **PLEDGE** (bank keeps physical possession of gold). Car loan is **HYPOTHECATION** (borrower drives car).\n3. **CERSAI Registration:** All equitable mortgages, hypothecations, and factoring assignments must be registered with **CERSAI within 30 days**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module B - Modes of Creating Charges on Securities',
        notes: 'Guaranteed 3-4 MCQs: Match the charge (Gold->Pledge, Car/Stock->Hypothecation, LIC->Assignment, Land->Mortgage), 6 mortgage types, and Sec 58(f) Equitable Mortgage.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Pledge (Sec 172 Contract Act) = Movables, POSSESSION WITH BANK (Gold loans). Hypothecation (SARFAESI 2(1)(n)) = Movables, POSSESSION WITH BORROWER (Car, Stocks). Mortgage (Sec 58 TP Act) = IMMOVABLE property (Land/Flats). Equitable Mortgage (Sec 58f) = Deposit of Title Deeds in notified towns (no deed registration; CERSAI 30d). Assignment (Sec 130 TP Act) = Actionable claims (LIC policies, Supply bills). Lien (Sec 171) = Right to retain.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'When a bank grants a loan to a borrower against the security of an existing Life Insurance Policy (LIC), what is the exact legal mode of charge created on the policy?',
        options: [
          'Pledge under Section 172 of the Indian Contract Act',
          'Hypothecation under SARFAESI Act',
          'Assignment under Section 130 of the Transfer of Property Act and Section 38 of the Insurance Act',
          'Equitable Mortgage by Deposit of Title Deeds',
        ],
        correctAnswer: 'Assignment under Section 130 of the Transfer of Property Act and Section 38 of the Insurance Act',
        explanation: 'A life insurance policy is an "Actionable Claim" (an intangible monetary right). The only legal mode of transferring an actionable claim as security for a loan is through "Assignment" governed by Section 130 of the Transfer of Property Act 1882 and Section 38 of the Insurance Act 1938, where the policy is assigned in writing and notice is served on the insurance company.',
        trapExplanation: 'Candidates incorrectly assume that because the physical insurance policy bond is held by the bank, it is a pledge.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 44: NON-FUND BASED FACILITIES & TRADE FINANCE
  // =========================================================================
  {
    id: 'CON-IIBF-26',
    topicOrder: 44,
    topicSlug: 'iibf-non-fund-facilities-and-trade-finance',
    topicTitle: 'Non-Fund Based Facilities & Trade Finance Operations',
    topicDescription: 'Letters of Credit (LC) operational mechanisms, parties, UCPDC 600 rules, and Bank Guarantees (BG).',
    slug: 'letters-of-credit-operational-mechanism-parties-types-and-ucpdc-600-rules',
    title: 'Letters of Credit (LC): Operational Mechanism, Parties, Types & UCPDC 600 Rules',
    shortDefinition: 'The international and domestic trade finance architecture of Documentary Credits (Letters of Credit - LC) governed globally by the ICC Uniform Customs and Practice for Documentary Credits (UCPDC 600): The 6 key parties (Applicant [Buyer], Issuing Bank, Beneficiary [Seller], Advising Bank, Confirming Bank, Negotiating / Nominated Bank), Fundamental Doctrines (Autonomy of Credit [LC is independent of underlying sales contract] and Strict Compliance of Documents), Document Examination Standard (Art 14: max 5 banking days), and Types of LCs (Irrevocable, Confirmed, Sight vs Usance, Revolving, Transferable, Back-to-Back, Red Clause [pre-shipment advance], Green Clause [pre-shipment advance + storage/warehousing], Standby LC [ISPB / ISP98 as guarantee substitute]).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-26-01',
        statement: 'Under Article 4 and Article 5 of UCPDC 600, a Letter of Credit by its nature is a separate transaction from the sale or other contract on which it may be based; banks deal exclusively in DOCUMENTS and NOT in goods, services, or performance to which the documents may relate (Doctrine of Autonomy of Credit).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICC Uniform Customs and Practice for Documentary Credits (UCPDC 600, Articles 4 & 5)',
        excerpt: 'Banks deal with documents, not goods; LC is strictly autonomous from sales contract.',
      },
      {
        id: 'CLM-IIBF-26-02',
        statement: 'Under Article 14(b) of UCPDC 600, the issuing bank, confirming bank, or nominated bank shall each have a maximum of five banking days following the day of presentation to determine if a presentation is compliant; failure to notify refusal within 5 banking days precludes the bank from claiming document non-compliance.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UCPDC 600 (Article 14(b) & Article 16)',
        excerpt: 'Banks have exactly 5 banking days to examine documents and notify discrepancies.',
      },
      {
        id: 'CLM-IIBF-26-03',
        statement: 'A Red Clause LC contains a special clause authorizing the advising/negotiating bank to make unsecured pre-shipment cash advances to the beneficiary prior to shipment; a Green Clause LC provides pre-shipment advance PLUS storage/warehousing credit at the port of shipment against warehouse receipts.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UCPDC 600 Guidelines; IIBF International Banking & Trade Finance Manual',
        excerpt: 'Red clause = Pre-shipment advance; Green clause = Pre-shipment advance + Warehousing/storage.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Eliminating Cross-Border Distrust Between Strangers',
        body: 'An exporter in Mumbai does not know if an importer in London will pay after goods are shipped. An importer in London does not want to pay upfront before goods are manufactured.\n\nA **Letter of Credit (LC)** substitutes the creditworthiness of a global bank for the buyer. The issuing bank guarantees unconditional payment to the seller provided clean shipping documents are presented.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 6 Core Parties to a Letter of Credit',
        body: '```mermaid\ngraph TD\n    APP["1. APPLICANT (Buyer / Importer opens LC)"]\n    IB["2. ISSUING BANK (Buyer\'s Bank: Gives primary unconditional payment undertaking)"]\n    ADV["3. ADVISING BANK (Seller\'s local bank: Authenticates LC without financial commitment)"]\n    CONF["4. CONFIRMING BANK (Adds independent payment guarantee on top of Issuing Bank)"]\n    NEG["5. NEGOTIATING / NOMINATED BANK (Examines documents & pays seller)"]\n    BEN["6. BENEFICIARY (Seller / Exporter ships goods & submits shipping documents)"]\n    APP --> IB\n    IB --> ADV\n    ADV --> CONF\n    CONF --> BEN\n    BEN --> NEG\n    NEG --> IB\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Master Typology of Letters of Credit',
        body: '| LC Type | Key Operational & Legal Mechanism |\n| :--- | :--- |\n| **Irrevocable LC** | Cannot be amended or cancelled without the agreement of Issuing Bank, Confirming Bank, and Beneficiary (All LCs under UCPDC 600 are **deemed irrevocable** by default). |\n| **Confirmed LC** | A bank other than issuing bank (Confirming Bank) adds its own **irrevocable payment undertaking**, eliminating country/sovereign risk of the issuing bank. |\n| **Sight LC vs Usance LC** | **Sight LC:** Paid immediately upon presentation of compliant documents.<br>**Usance (Acceptance) LC:** Paid on a future determinable maturity date (e.g. 90 days from Bill of Lading). |\n| **Red Clause LC** | Permits the negotiating bank to grant **Pre-shipment Advance** to the beneficiary before shipment (printed in red ink historically). |\n| **Green Clause LC** | Permits **Pre-shipment Advance + Storage / Warehousing Facility** at port of shipment against warehouse receipts. |\n| **Transferable LC** | Beneficiary can instruct bank to make credit available in whole or part to one or more **Second Beneficiaries** (manufacturers). Can be transferred **ONLY ONCE**. |\n| **Back-to-Back LC** | A separate, new LC opened by middleman\'s bank in favor of actual supplier, backed by the primary master LC as collateral security. |\n| **Standby LC (SBLC)** | A financial safety net (ISP98 / UCPDC) that is drawn upon **ONLY IN THE EVENT OF DEFAULT** by applicant (substitute for Bank Guarantee). |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Letters of Credit',
        body: '1. **Document Examination Time Limit:** Under Article 14(b) of UCPDC 600, banks have **EXACTLY 5 BANKING DAYS** to examine documents and communicate discrepancies.\n2. **Default Irrevocability:** Under UCPDC 600, every LC is **irrevocable by default**, even if not explicitly stated.\n3. **Transferable LC Limitation:** A Transferable LC can be **transferred ONLY ONCE** (from First Beneficiary to Second Beneficiary; Second Beneficiary cannot transfer to a Third Beneficiary).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module B - Letters of Credit & UCPDC 600',
        notes: 'Direct MCQs on 5 banking days rule, Red vs Green clause distinction, Transferable LC (once only), and Autonomy of Credit doctrine.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'UCPDC 600: LCs are Irrevocable by default. Banks deal in documents, not goods (Autonomy of Credit). Examination window = max 5 BANKING DAYS (Art 14b). Red Clause = Pre-shipment advance. Green Clause = Pre-shipment advance + Warehousing at port. Transferable LC = Can be transferred ONLY ONCE. Standby LC = Operates as a guarantee on default (ISP98/UCP600).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 14(b) of the Uniform Customs and Practice for Documentary Credits (UCPDC 600), what is the MAXIMUM time period allowed to an Issuing Bank or Nominated Bank following the day of presentation to examine shipping documents and determine compliance?',
        options: [
          'Maximum 3 calendar days',
          'Maximum 5 banking days',
          'Maximum 7 business days',
          'Maximum 15 working days',
        ],
        correctAnswer: 'Maximum 5 banking days',
        explanation: 'Under Article 14(b) of UCPDC 600, each of the nominated bank, confirming bank, and issuing bank shall each have a maximum of five (5) banking days following the day of presentation to examine the documents and determine whether the presentation is compliant or discrepant.',
        trapExplanation: 'Candidates confuse 5 banking days with 7 business days or calendar days.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-27',
    topicOrder: 44,
    topicSlug: 'iibf-non-fund-facilities-and-trade-finance',
    topicTitle: 'Non-Fund Based Facilities & Trade Finance Operations',
    topicDescription: 'Bank Guarantees (Financial, Performance, Statutory), Invocation & Limitation Period (Section 28 Contract Act).',
    slug: 'bank-guarantees-financial-performance-statutory-invocations-and-co-acceptance',
    title: 'Bank Guarantees: Financial vs Performance, Statutory Invocations & Section 28 Limitation',
    shortDefinition: 'The legal framework of Bank Guarantees under the Indian Contract Act 1872 and judicial doctrines: Tripartite Contract of Guarantee (Section 126: Principal Debtor, Creditor, and Surety/Guarantor Bank), Financial Guarantees (100% credit risk for loan repayment/mobilization advance) vs Performance Guarantees (breach of contract/bid bonds/tender security), Unconditional vs Conditional guarantees, Invocation grounds and court injunctions (Supreme Court rules: injunction granted ONLY in cases of established egregiousness fraud or irretrievable injustice), and the Claim Limitation Period under Section 28 of the Indian Contract Act (minimum 1-year claim period post-expiry).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-27-01',
        statement: 'Under Section 126 of the Indian Contract Act 1872, a Contract of Guarantee is a tripartite contract to perform the promise, or discharge the liability, of a third person (Principal Debtor) in case of their default; under Section 128, the liability of the Surety (Guarantor Bank) is co-extensive with that of the Principal Debtor unless otherwise provided by the contract.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Contract Act, 1872 (Sections 126, 128); Bank of Bihar v Damodar Prasad (1969) 1 SCR 620',
        excerpt: 'Contract of Guarantee is tripartite; surety liability is co-extensive with principal debtor.',
      },
      {
        id: 'CLM-IIBF-27-02',
        statement: 'Under established Indian Supreme Court jurisprudence (UP State Sugar Corp v Sumac International, 1997), a bank guarantee is an independent contract between the bank and the beneficiary; civil courts will NOT grant an injunction restraining invocation or payment under an unconditional bank guarantee except on two narrow grounds: established Egregious Fraud to the knowledge of the bank, or Irretrievable Injustice/Harm.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UP State Sugar Corp v Sumac International Ltd (1997) 1 SCC 568; Svenska Handelsbanken v Indian Charge Chrome',
        excerpt: 'Court injunctions on BG invocation barred except in cases of egregious fraud or irretrievable injustice.',
      },
      {
        id: 'CLM-IIBF-27-03',
        statement: 'Under Section 28 of the Indian Contract Act 1872 (amended 2013), any agreement extinguishing the rights of a creditor or discharging liability before the statutory limitation period is void; for bank guarantees, the statute permits a specific exception allowing banks to stipulate a minimum Claim Period of not less than 1 year beyond the guarantee validity period.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Contract Act, 1872 (Section 28 Exception 3); Limitation Act, 1963',
        excerpt: 'Section 28 permits minimum 1-year claim period beyond guarantee expiry date.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Unconditional Sovereign and Commercial Creditworthiness',
        body: 'When the National Highways Authority of India (NHAI) awards a ₹1,000 Crore highway construction contract, it requires the contractor to submit a **Performance Bank Guarantee**.\n\nIf the contractor abandons the project half-finished, NHAI does not need to enter lengthy arbitration—it simply invokes the bank guarantee, and the guarantor bank must pay the full guaranteed amount immediately.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Financial Guarantees vs Performance Guarantees',
        body: '| Parameter | Financial Bank Guarantee | Performance Bank Guarantee |\n| :--- | :--- | :--- |\n| **Underlying Obligation** | Secures a direct **monetary debt or financial obligation** (e.g. Loan repayment, customs duty payment, mobilization advance). | Secures the **due performance of a contract / project execution** (e.g. Building a bridge, supplying machines, bid bonds). |\n| **Risk Weight in Capital Adequacy**| **100% Credit Conversion Factor (CCF)** (Higher capital requirement). | **50% Credit Conversion Factor (CCF)** (Lower capital requirement). |\n| **Common Examples** | Mobilization advance guarantee, Electricity bill guarantee, Advance payment guarantee. | Bid Bond guarantee, Performance bond for construction, Retention money guarantee. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Bank Guarantees',
        body: '1. **Limitation Period Exception:** Under Exception 3 to Section 28 of the Contract Act, a Bank Guarantee clause that restricts the claim period is valid ONLY if the claim period provided is **AT LEAST 1 YEAR from the date of expiry**.\n2. **Grounds for Court Injunction:** Injunctions against BG payment are **STRICTLY PROHIBITED** except for: (a) **Egregious Fraud** of a fundamental nature known to the bank, or (b) **Irretrievable Injustice**.\n3. **Co-Acceptance of Bills:** In Co-Acceptance, the bank signs on a bill of exchange along with the buyer, becoming **primarily and directly liable to pay the bill on maturity** as an acceptor.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module B - Bank Guarantees & Co-Acceptance',
        notes: 'Direct MCQs on Financial (100% CCF) vs Performance (50% CCF) guarantees, Section 28 1-year claim period, and court injunction bars.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bank Guarantees (Sec 126 Contract Act): Tripartite contract (Principal Debtor, Beneficiary, Guarantor Bank). Co-extensive liability (Sec 128). Financial BG = 100% CCF (monetary obligation). Performance BG = 50% CCF (project execution). Court injunctions strictly barred except for established fraud or irretrievable injustice. Section 28 claim period = minimum 1 year beyond validity date.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under established Indian Supreme Court case law and the Indian Contract Act, on which of the following grounds alone can a Civil Court legally grant an injunction restraining a bank from honoring an unconditional Bank Guarantee?',
        options: [
          'On grounds of ordinary contractual breach or delay by the supplier',
          'Only on grounds of established egregious fraud known to the bank, or irretrievable injustice',
          'Whenever the principal debtor files a civil suit challenging the contract',
          'Whenever arbitration proceedings are initiated between the buyer and seller',
        ],
        correctAnswer: 'Only on grounds of established egregious fraud known to the bank, or irretrievable injustice',
        explanation: 'The Supreme Court of India (in landmark rulings including UP State Sugar Corp v Sumac International) has established that bank guarantees are independent contracts. Courts will not grant an injunction restraining invocation/payment unless there is clear, established fraud of an egregious nature affecting the very foundation of the guarantee, or irretrievable harm/injustice.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-28',
    topicOrder: 44,
    topicSlug: 'iibf-non-fund-facilities-and-trade-finance',
    topicTitle: 'Non-Fund Based Facilities & Trade Finance Operations',
    topicDescription: 'Export Finance Mechanisms: Pre-shipment (Packing Credit), Post-shipment, PCFC & ECGC Cover.',
    slug: 'export-finance-mechanisms-pre-shipment-post-shipment-pcfc-and-ecgc-cover',
    title: 'Export Finance & Credit Insurance: Packing Credit (Rupee & PCFC), Post-Shipment & ECGC',
    shortDefinition: 'The specialized export credit architecture under RBI Master Directions and Foreign Trade Policy: Pre-Shipment Export Credit / Packing Credit (concessional working capital to purchase raw materials, manufacture, and pack export goods against confirmed order/LC, maximum tenor 270/360 days), Pre-Shipment Credit in Foreign Currency (PCFC benchmarked to SOFR / EURIBOR at international rates), Post-Shipment Export Credit (financing receivables after shipment against export bills, FOB/CIF bills discounted/purchased, Gold Card Scheme for exporters), and Export Credit Guarantee Corporation of India (ECGC: statutory credit insurance protecting banks against export credit default [Whole Turnover Post-Shipment Guarantee - WTPSG, 90% cover] and commercial/political cross-border buyer default).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-28-01',
        statement: 'Pre-Shipment Export Credit (Packing Credit) is granted by commercial banks to eligible exporters on the basis of a confirmed export order or irrevocable Letter of Credit for procuring, manufacturing, processing, and packing export goods, with a standard maximum repayment tenor of 270 days (extendable up to 360 days with bank sanction).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Rupee / Foreign Currency Export Credit & Customer Service to Exporters',
        excerpt: 'Packing credit is pre-shipment working capital against order/LC with standard max 270 days tenor.',
      },
      {
        id: 'CLM-IIBF-28-02',
        statement: 'Pre-Shipment Credit in Foreign Currency (PCFC) allows Indian exporters to avail export credit in convertible foreign currencies (USD, EUR, GBP, JPY) benchmarked to international risk-free reference rates (SOFR/EURIBOR), insulating exporters from domestic interest rate differentials.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Guidelines on Export Credit in Foreign Currency; FEDAI Rules',
        excerpt: 'PCFC provides pre-shipment credit in foreign currency benchmarked to SOFR.',
      },
      {
        id: 'CLM-IIBF-28-03',
        statement: 'The Export Credit Guarantee Corporation of India (ECGC, established 1957, wholly owned by Government of India) provides export credit insurance policies to exporters (protecting against commercial buyer insolvency and political transfer risks) and export credit guarantees to commercial banks (protecting banks up to 90% of losses on export credit defaults).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ECGC Operating Rules; Ministry of Commerce & Industry',
        excerpt: 'ECGC provides credit insurance to exporters and up to 90% guarantee cover to banks.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Financing the Nation\'s Sovereign Foreign Currency Inflows',
        body: 'Exporters bring foreign exchange into India, stabilizing the Current Account Deficit and building national forex reserves. However, an Indian handicraft exporter needs working capital upfront to buy wood and brass before goods are shipped to the US.\n\n**Export Finance** provides concessional, priority-backed liquidity before shipment (**Packing Credit**) and immediately after shipment (**Bill Discounting**), while **ECGC** shields the bank from overseas non-payment risk.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Pre-Shipment vs Post-Shipment Export Credit Matrix',
        body: '| Parameter | Pre-Shipment Credit (Packing Credit) | Post-Shipment Export Credit |\n| :--- | :--- | :--- |\n| **Timing of Finance** | **BEFORE goods are shipped** (Procurement, processing, manufacturing, packing). | **AFTER goods are physically shipped** (Bill of Lading generated). |\n| **Eligibility Proof** | Confirmed Export Order OR Irrevocable Letter of Credit. | Shipping documents (Commercial Invoice, Bill of Lading / Airway Bill, Customs Shipping Bill). |\n| **Standard Tenor** | **Up to 270 Days** (extendable to 360 days). | Normal Transit Period (NTP) + Usance period (max **9 months to 15 months** for realization). |\n| **Liquidation Mode** | Liquidated exclusively from **proceeds of post-shipment export bills** or outward foreign remittance. | Liquidated when foreign buyer remits payment through banking channels. |\n| **Foreign Currency Option**| **PCFC** (Pre-Shipment Credit in Foreign Currency). | **EBR** (Export Bills Rediscounting in foreign currency). |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Export Finance',
        body: '1. **Liquidation of Packing Credit:** Packing credit CANNOT be closed by domestic rupees from local sales; it **must be liquidated by submitting post-shipment export bills** or foreign exchange remittance.\n2. **Gold Card Scheme:** A fast-track scheme for creditworthy exporters with a 3-year track record, granting automatic 20% standby limits and faster processing within 25 days.\n3. **ECGC Cover to Banks:** Standard ECGC Whole Turnover Guarantees provide **up to 90% default loss cover** to commercial banks.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module B - Export Finance & ECGC Guidelines',
        notes: 'Direct MCQs on Packing Credit 270-day limit, liquidation rules, PCFC reference rate (SOFR), and ECGC 90% cover.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Pre-Shipment (Packing Credit): Working capital to manufacture/pack goods against order/LC; max 270 days; must be liquidated by post-shipment export bills. PCFC = Foreign currency packing credit benchmarked to SOFR. Post-Shipment: Financing against shipping bills/BL (max 9-15 months for realization). ECGC (1957, Govt 100%): Insures exporters against commercial/political risk; guarantees banks up to 90% of credit default. Gold Card Scheme = 20% standby credit.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the standard maximum repayment period for which "Pre-Shipment Export Credit (Packing Credit)" is initially granted to an exporter by a commercial bank under RBI guidelines?',
        options: [
          'Maximum 90 days',
          'Maximum 180 days',
          'Maximum 270 days',
          'Maximum 3 years',
        ],
        correctAnswer: 'Maximum 270 days',
        explanation: 'Under RBI Master Directions on Export Credit, packing credit is normally granted for a period not exceeding 270 days. Banks may provide extensions beyond 270 days (up to 360 days) on merits, but concessional interest rates apply up to 270 days.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 45: DIGITAL BANKING, PAYMENT RAILS & CYBER SECURITY
  // =========================================================================
  {
    id: 'CON-IIBF-29',
    topicOrder: 45,
    topicSlug: 'iibf-digital-banking-and-it-security',
    topicTitle: 'Digital Banking, Payment Rails & Information Security',
    topicDescription: 'Core Banking Systems (CBS), Data Centers, Disaster Recovery, RTO & RPO metrics.',
    slug: 'core-banking-systems-architecture-data-center-redundancy-and-disaster-recovery-rto-rpo',
    title: 'Core Banking Systems (CBS) & Business Continuity: Data Centers, RTO & RPO Metrics',
    shortDefinition: 'The enterprise technological infrastructure of modern banking: Core Banking Solutions (CBS: centralized database where branches act as access points, customer of the bank rather than customer of the branch; e.g. Finacle, BaNCS, Flexcube), Data Center (DC) and Disaster Recovery (DR) site architecture (geographic separation in different seismic zones), Business Continuity Planning (BCP), and the two foundational disaster metrics: Recovery Time Objective (RTO: maximum acceptable downtime to restore banking services) and Recovery Point Objective (RPO: maximum acceptable data loss measured in time, near-zero RPO using synchronous data replication).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-29-01',
        statement: 'Core Banking Solutions (CBS) centralize bank transaction processing on a single unified database server, transforming customer status from "Customer of the Branch" to "Customer of the Bank", enabling 24x7 multichannel access (ATM, Internet, Mobile, UPI) to real-time account balances.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Information Technology Framework for the Banking Sector; IDRBT Guidelines',
        excerpt: 'CBS centralizes database processing making customer a customer of the entire bank.',
      },
      {
        id: 'CLM-IIBF-29-02',
        statement: 'In banking business continuity, Recovery Time Objective (RTO) is the maximum acceptable duration of time within which critical IT systems and banking operations must be restored after a disaster, while Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (the point to which data must be recovered).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ISO 22301 Business Continuity Standard; RBI Master Direction on Information Security (2023)',
        excerpt: 'RTO = Maximum downtime to restore systems; RPO = Maximum data loss measured in time.',
      },
      {
        id: 'CLM-IIBF-29-03',
        statement: 'Under RBI Cybersecurity Framework, commercial banks must maintain a Disaster Recovery (DR) site located in a different seismic zone at a significant geographical distance from the Primary Data Center (PDC) and conduct live DR drills at least once every half-year (twice a year) to validate switch-over capabilities.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction on IT Governance, Risk, Controls and Assurance Practices (Nov 2023)',
        excerpt: 'DR site must be in different seismic zone; live DR drill mandatory at least once every 6 months.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'When a Mumbai Hurricane Floods the Data Center',
        body: 'If a massive cyclone floods the Primary Data Center in Mumbai where 100 million customer accounts are stored, the entire banking system could be crippled within seconds.\n\n**Business Continuity Management** ensures that every transaction committed in Mumbai is synchronously copied to a secondary **Disaster Recovery (DR) site** in Hyderabad or Chennai, allowing banking operations to failover instantly without losing a single rupee.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Disaster Recovery Metrics: RTO vs RPO',
        body: '```mermaid\ngraph LR\n    PAST["LAST VALID DATA BACKUP / REPLICATION POINT"]\n    CRASH["DISASTER OCCURS (PDC Fails)"]\n    RESTORE["SYSTEMS RESTORED AT DR SITE"]\n    PAST -- "RPO: Recovery Point Objective (Max allowable data loss: e.g. <15 mins)" --> CRASH\n    CRASH -- "RTO: Recovery Time Objective (Max allowable downtime: e.g. <2 hours)" --> RESTORE\n```',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in IT & Business Continuity',
        body: '1. **RTO vs RPO Definitions:**\n   * **RTO (Recovery Time Objective):** Measures **DOWNTIME (How fast you recover)**.\n   * **RPO (Recovery Point Objective):** Measures **DATA LOSS (How much data you lose)**.\n2. **DR Drill Frequency:** RBI mandates live DR drill switchover at least **ONCE EVERY HALF-YEAR (Every 6 Months)**.\n3. **Seismic Zone Rule:** Primary DC and DR sites **CANNOT be located in the same seismic zone or city**.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module C - Banking Technology & Information Security',
        notes: 'Direct MCQs on RTO vs RPO definitions, DR drill frequency (half-yearly), and CBS architecture.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'CBS: Centralized real-time database ("Customer of the Bank"). Business Continuity: RTO = Recovery Time Objective (maximum tolerable downtime). RPO = Recovery Point Objective (maximum tolerable data loss in time). Disaster Recovery (DR) site must be in different seismic zone; live DR drill mandatory every 6 months.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the context of Bank Business Continuity Planning and Disaster Recovery architecture, what does the metric "Recovery Point Objective (RPO)" specifically define?',
        options: [
          'The maximum time allowed to physically rebuild a damaged branch building',
          'The maximum acceptable period of data loss measured in time preceding the disruptive incident',
          'The maximum tolerable duration of system downtime before customer services are resumed',
          'The financial cost required to purchase replacement server hardware',
        ],
        correctAnswer: 'The maximum acceptable period of data loss measured in time preceding the disruptive incident',
        explanation: 'Recovery Point Objective (RPO) is the maximum acceptable data loss expressed in time (e.g. transactions lost between the last backup/replication point and the time of disaster). Recovery Time Objective (RTO) measures the duration of time needed to restore system availability.',
        trapExplanation: 'Candidates frequently invert RTO (time to restore) and RPO (data loss in time).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-30',
    topicOrder: 45,
    topicSlug: 'iibf-digital-banking-and-it-security',
    topicTitle: 'Digital Banking, Payment Rails & Information Security',
    topicDescription: 'Electronic Payment Systems (RTGS, NEFT, UPI, IMPS, NACH, AePS) and Central Bank Digital Currency (CBDC).',
    slug: 'electronic-payment-rails-rtgs-neft-upi-imps-nach-and-central-bank-digital-currency-cbdc',
    title: 'Electronic Payment Rails: RTGS, NEFT, IMPS, UPI, NACH, AePS & Digital Rupee (e₹)',
    shortDefinition: 'The digital payment clearing and settlement infrastructure of India operated by the Reserve Bank of India and the National Payments Corporation of India (NPCI under Payment and Settlement Systems Act 2007): RTGS (Real Time Gross Settlement: high-value wholesale, minimum ₹2 Lakh, continuous individual order settlement, 24x7x365) vs NEFT (National Electronic Funds Transfer: retail, half-hourly batched settlement across 48 batches daily, no minimum limit, zero customer charges online, 24x7), NPCI payment rails (IMPS: instant 24x7 up to ₹5 Lakh, UPI: Virtual Payment Address [VPA] / AutoPay, NACH: bulk ACH debit/credit mandate, AePS: Aadhaar biometric micro-ATMs), and the Central Bank Digital Currency (CBDC / Digital Rupee - e₹: sovereign tokenized legal tender issued directly by RBI on distributed ledger).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-30-01',
        statement: 'Under RBI Payment & Settlement Systems regulations, Real Time Gross Settlement (RTGS) operates on a continuous, individual transaction gross settlement basis 24x7x365 with a statutory minimum transaction threshold of ₹2 Lakh and no upper ceiling, while NEFT settles transactions on a net settlement basis in half-hourly batches (48 batches daily) 24x7x365 with no minimum or maximum limit.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Payment and Settlement Systems Act, 2007; RBI RTGS System Regulations 2020; RBI NEFT Directions',
        excerpt: 'RTGS: Min ₹2 Lakh, gross settlement, 24x7. NEFT: No min/max, 48 half-hourly batches, 24x7.',
      },
      {
        id: 'CLM-IIBF-30-02',
        statement: 'Immediate Payment Service (IMPS) operated by NPCI provides instant, 24x7 inter-bank electronic fund transfers with a standard per-transaction ceiling of ₹5 Lakh, utilizing Mobile Money Identifier (MMID: 7 digits) or Account + IFSC.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NPCI IMPS Operating Guidelines; RBI Master Direction on Digital Payment Transactions',
        excerpt: 'IMPS ceiling is ₹5 Lakh per transaction (increased from ₹2 Lakh in 2021) with 7-digit MMID.',
      },
      {
        id: 'CLM-IIBF-30-03',
        statement: 'The Digital Rupee (e₹) is a sovereign Central Bank Digital Currency (CBDC) issued by the Reserve Bank of India under the amended Section 22 of the RBI Act 1934 (Finance Act 2022), representing a direct legal claim on the central bank (sovereign liability), functioning as tokenized legal tender distinct from commercial bank deposits.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Act, 1934 (Section 22 amended by Finance Act 2022); RBI Concept Note on CBDC (Oct 2022)',
        excerpt: 'Digital Rupee (e₹) is sovereign tokenized central bank legal tender, not a commercial bank liability.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The World\'s Most Advanced Sovereign Payment Highway',
        body: 'In most developed countries, moving money between different banks takes 2 to 3 business days through legacy ACH networks.\n\nIndia revolutionized retail and wholesale finance by building world-class sovereign payment rails: **RTGS** for multi-crore corporate treasury settlements, **NEFT** for nationwide batch transfers, and **UPI / IMPS (NPCI)** for billions of instant peer-to-peer and merchant smartphone micro-transactions.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Comparison of Indian Payment Systems',
        body: '| Parameter | RTGS (Real Time Gross Settlement) | NEFT (National Electronic Funds Transfer) | IMPS / UPI (NPCI) |\n| :--- | :--- | :--- | :--- |\n| **Operator / Owner** | **Reserve Bank of India (RBI)**. | **Reserve Bank of India (RBI)**. | **NPCI** (National Payments Corp of India). |\n| **Settlement Type** | **Gross Settlement** (Individual transaction real-time). | **Deferred Net Settlement (DNS)** (Half-hourly batches). | **Instant Real-Time Settlement**. |\n| **Operating Hours** | **24x7x365** (Round the clock). | **24x7x365** (48 half-hourly batches per day). | **24x7x365** (Instant). |\n| **Minimum Limit** | **₹2,00,000 (₹2 Lakh)**. | **No Minimum Limit** (₹1). | **No Minimum Limit** (₹1). |\n| **Maximum Limit** | **No Upper Ceiling**. | **No Upper Ceiling** (Cash NEFT walk-in capped at ₹50,000). | IMPS: **₹5 Lakh**.<br>UPI: **₹1 Lakh** (₹5 Lakh for hospitals, educational inst, IPOs, tax). |\n| **Online Customer Fee** | **Zero / Free** (RBI abolished charges for online RTGS/NEFT). | **Zero / Free** (for savings bank customers online). | **Zero MDR** for UPI. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Payment Systems',
        body: '1. **RTGS Minimum Limit:** RTGS minimum transaction value is **EXACTLY ₹2 LAKH** (Transactions below ₹2 Lakh CANNOT be processed via RTGS).\n2. **NEFT Batches:** NEFT operates in **48 half-hourly settlement batches daily** (starting at 00:30 hours).\n3. **UPI Limit Exceptions:** Standard UPI limit is **₹1 Lakh**, but raised to **₹5 Lakh** for payments to Hospitals, Educational Institutions, IPO applications, and Capital Market/Tax payments.\n4. **CBDC vs Bank Deposits:** A bank deposit is a liability of the commercial bank (protected up to ₹5 Lakh by DICGC). The **Digital Rupee (e₹) is a direct sovereign liability of the RBI**.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module C - Electronic Payment Systems & NPCI Rails',
        notes: 'Direct MCQs on RTGS min ₹2L, NEFT 48 batches, IMPS ₹5L limit, and CBDC legal status under RBI Act Sec 22.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RTGS = RBI, Real-time Gross, Min ₹2 Lakh, no max, 24x7. NEFT = RBI, 48 half-hourly Net batches, no min/max, 24x7 (free online). IMPS = NPCI, instant, max ₹5 Lakh (7-digit MMID). UPI = NPCI, VPA based, standard limit ₹1 Lakh (₹5 Lakh for IPO/Hospitals/Edu/Tax). AePS = Biometric Aadhaar micro-ATM. CBDC (e₹) = Sovereign legal tender issued directly by RBI (Sec 22 RBI Act).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the MINIMUM transaction amount threshold required to execute a fund transfer through the Real Time Gross Settlement (RTGS) system in India?',
        options: [
          'No minimum limit (₹1)',
          'Minimum ₹50,000',
          'Minimum ₹1,00,000',
          'Minimum ₹2,00,000',
        ],
        correctAnswer: 'Minimum ₹2,00,000',
        explanation: 'Under RBI regulations, the RTGS system is primarily meant for high-value wholesale transactions. The minimum amount to be remitted through RTGS is ₹2,00,000 (₹2 Lakh) with no upper maximum ceiling. Transactions below ₹2 Lakh must be routed through NEFT or IMPS/UPI.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-31',
    topicOrder: 45,
    topicSlug: 'iibf-digital-banking-and-it-security',
    topicTitle: 'Digital Banking, Payment Rails & Information Security',
    topicDescription: 'Cyber Security Framework in Banks, SOC, CSIRT, ISO 27001 & Information Technology Act 2000.',
    slug: 'cyber-security-framework-in-banks-soc-csirt-iso-27001-and-it-act-2000-statutory-provisions',
    title: 'Cyber Security in Banks: SOC, CSIRT, ISO 27001 & IT Act 2000 Statutory Framework',
    shortDefinition: 'The cybersecurity governance and statutory compliance architecture for banking institutions: RBI Cyber Security Framework (June 2016 & Master Directions 2023: Security Operations Center [SOC 24x7], Cyber Security Incident Response Team [CSIRT], Chief Information Security Officer [CISO] reporting directly to Risk Committee), ISO/IEC 27001 Information Security Management System (ISMS: Confidentiality, Integrity, Availability - CIA Triad), mandatory reporting of cyber incidents to CERT-In and RBI within 6 hours, Customer Liability Framework for Unauthorized Electronic Transactions (Zero Liability vs Limited Liability based on 3-day reporting window), and penal provisions under the Information Technology Act 2000 (Sections 43, 66C [Identity Theft], 66D [Cheating by Impersonation], 72 [Breach of Confidentiality]).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-31-01',
        statement: 'Under RBI Cyber Security Framework, all commercial banks must establish a dedicated 24x7 Security Operations Center (SOC), a specialized Cyber Security Incident Response Team (CSIRT), and designate an independent Chief Information Security Officer (CISO) who reports directly to the Board / Executive Committee on Risk Management.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Cyber Security Framework in Banks (Circular DBS.CO/CSITE/BC.11/33.01.001/2015-16)',
        excerpt: 'Banks must maintain 24x7 SOC, CSIRT, and independent CISO reporting to Risk Committee.',
      },
      {
        id: 'CLM-IIBF-31-02',
        statement: 'Under RBI Customer Protection Directions on Unauthorized Electronic Banking Transactions: a customer has ZERO LIABILITY if fraud occurs due to bank deficiency or third-party breach reported within 3 working days; if reported between 4 to 7 working days, customer liability is capped at ₹5,000 to ₹25,000 (based on account type); if reported after 7 working days, liability is determined by bank policy.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions',
        excerpt: 'Zero customer liability if fraud reported within 3 days; capped liability if reported in 4-7 days.',
      },
      {
        id: 'CLM-IIBF-31-03',
        statement: 'Under the Information Technology Act 2000 (as amended 2008), Section 66C prescribes imprisonment up to 3 years and fine up to ₹1 Lakh for Identity Theft (fraudulent use of electronic signature, password, or biometric), while Section 66D penalizes cheating by personation using a computer resource with imprisonment up to 3 years and fine up to ₹1 Lakh.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Information Technology Act, 2000 (Sections 43, 66C, 66D, 72); Ministry of Electronics & IT',
        excerpt: 'IT Act Sec 66C (Identity Theft) & Sec 66D (Cheating by Impersonation): Up to 3 years prison + fine.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Defending the Digital Vault Against Global Cyber Syndicates',
        body: 'Bank robberies in the 21st century do not happen with guns in brick-and-mortar branches. They happen through ransomware, phishing, man-in-the-middle attacks, and SWIFT messaging hacks across global server networks.\n\n**Cybersecurity Frameworks** establish real-time 24x7 threat monitoring (**SOC**), automated behavioral anomaly detection, and legal safeguards protecting innocent retail customers from unauthorized digital fraud.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Customer Liability Matrix for Unauthorized Electronic Banking Fraud',
        body: '| Time of Customer Notification to Bank | Customer Liability Quantum | Reversal / Credit Timeline |\n| :--- | :--- | :--- |\n| **Within 3 Working Days** of receiving bank alert. | **ZERO LIABILITY (₹0)** (Bank reimburses 100% loss). | Bank must credit account within **10 working days** (Shadow / Provisional Credit). |\n| **Between 4 to 7 Working Days** of alert. | **Limited Liability**:<br>* Basic Savings (BSBD) / Small Accounts: **Max ₹5,000**.<br>* Savings, Current (turnover $\\le ₹25 \\text{L}$), Credit Cards limit $\\le ₹5 \\text{L}$: **Max ₹10,000**.<br>* Current / OD accounts with turnover $> ₹25 \\text{ Lakh}$ / Cards $> ₹5 \\text{L}$: **Max ₹25,000**. | Bank must resolve claim within **90 days**. |\n| **Beyond 7 Working Days** of alert. | As per **Bank\'s Board-approved Policy**. | Resolved within 90 days. |\n| **Bank\'s Contributory Fraud / System Deficiency**| **ZERO LIABILITY** (regardless of whether customer reports or not). | Immediate 100% refund. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Key Cyber Security Sections of IT Act 2000',
        body: '```mermaid\ngraph TD\n    IT["Information Technology Act 2000 Key Penal Provisions"]\n    IT --> S43["Section 43: Penalty for unauthorized access, data theft, virus introduction (Civil compensation up to ₹1 Crore)"]\n    IT --> S66C["Section 66C: Identity Theft - Fraudulent use of electronic signature, password, UPI PIN (Imprisonment up to 3 years + Fine up to ₹1 Lakh)"]\n    IT --> S66D["Section 66D: Cheating by Personation using computer resource / phishing (Imprisonment up to 3 years + Fine up to ₹1 Lakh)"]\n    IT --> S72["Section 72: Penalty for Breach of Confidentiality and Privacy (Imprisonment up to 2 years + Fine up to ₹1 Lakh)"]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Cyber Security Rules',
        body: '1. **Zero Liability 3-Day Rule:** If a customer reports unauthorized electronic transaction fraud **within 3 working days**, customer liability is **ABSOLUTELY ZERO**.\n2. **Shadow Credit Timeline:** The bank must provide **shadow credit / reversal within 10 working days** of customer complaint.\n3. **Incident Reporting to CERT-In / RBI:** Mandated to report cybersecurity incidents within **6 hours** of detection.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module C - Cyber Security, Customer Liability & IT Act',
        notes: 'Guaranteed MCQs: 3-day zero liability rule, 4-7 days max liability slabs (5k, 10k, 25k), 10-day shadow credit, and IT Act Sec 66C/66D.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RBI Cyber Framework: 24x7 SOC, CSIRT, CISO. Unauthorized Fraud Liability: Reported within 3 days = ZERO liability (shadow credit in 10 working days). Reported in 4-7 days = Max ₹5k (BSBD), ₹10k (SB/Cards <5L), ₹25k (Current/Cards >5L). Reported >7 days = Bank policy. IT Act 2000: Sec 66C (Identity Theft: 3 yrs prison), Sec 66D (Cheating by Impersonation/Phishing: 3 yrs prison), Sec 72 (Breach of Privacy: 2 yrs).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under RBI Master Directions on Limiting Customer Liability in Unauthorized Electronic Banking Transactions, what is the MAXIMUM financial liability of a savings bank account holder if an unauthorized third-party fraud is reported to the bank within 4 to 7 working days of receiving the SMS/email alert?',
        options: [
          'Zero liability',
          'Maximum ₹5,000',
          'Maximum ₹10,000',
          'Maximum ₹25,000',
        ],
        correctAnswer: 'Maximum ₹10,000',
        explanation: 'Under RBI Customer Protection Directions, if the customer notifies the bank of an unauthorized electronic transaction between 4 to 7 working days, the maximum customer liability is capped at ₹10,000 for standard Savings Bank accounts (and credit cards with limit up to ₹5 Lakh), ₹5,000 for Basic Savings (BSBD) accounts, and ₹25,000 for Current/Overdraft accounts with turnover >₹25 Lakh.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-32',
    topicOrder: 45,
    topicSlug: 'iibf-digital-banking-and-it-security',
    topicTitle: 'Digital Banking, Payment Rails & Information Security',
    topicDescription: 'Ethics in Banking, Business Values & Corporate Governance Standards.',
    slug: 'banking-ethics-whistleblower-framework-and-corporate-governance-standards',
    title: 'Banking Ethics & Corporate Governance: Whistleblower Mechanisms & Codes of Conduct',
    shortDefinition: 'The ethical, behavioral, and fiduciary governance architecture of banking institutions: Principles of Banking Ethics (Integrity, Transparency, Objectivity, Confidentiality, Conflict of Interest mitigation), Whistleblower Policy (Section 177 Companies Act 2013: Vigil Mechanism for directors/employees to report unethical behavior with safeguards against victimization), RBI Corporate Governance Guidelines for Commercial Banks (Uday Kotak Committee: Separation of Chairman and MD/CEO, independent directors, Audit Committee of Board [ACB], Committee on Customer Service), and Fair Practices Code (FPC: transparent loan sanction, non-coercive recovery, and BCRBI customer charters).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-32-01',
        statement: 'Under Section 177 of the Companies Act 2013 and SEBI (LODR) Regulations, every commercial bank must establish a robust Vigil Mechanism (Whistleblower Policy) providing direct access to the Chairperson of the Audit Committee for reporting genuine concerns regarding unethical conduct, fraud, or violations of code of conduct, ensuring absolute protection against employee victimization.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Companies Act, 2013 (Section 177(9)); SEBI (LODR) Regulations, 2015',
        excerpt: 'Vigil mechanism / Whistleblower policy mandatory under Section 177 with direct access to Audit Committee.',
      },
      {
        id: 'CLM-IIBF-32-02',
        statement: 'Under RBI Corporate Governance Guidelines for Commercial Banks (April 2021), the post of Chairperson of the Board must be separate from the Managing Director (MD) and Chief Executive Officer (CEO), the Chairperson must be an Independent Director, and the maximum continuous tenure of an MD/CEO (whether promoter or non-promoter) is capped at 15 years.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Circular on Corporate Governance in Banks – Appointment of Directors and Constitution of Committees of the Board (April 26, 2021)',
        excerpt: 'Chairperson and MD/CEO posts must be separate; max tenure of MD/CEO capped at 15 years.',
      },
      {
        id: 'CLM-IIBF-32-03',
        statement: 'The Fair Practices Code (FPC) formulated under RBI Master Directions mandates that banks must provide clear loan sanction terms in writing (including annual percentage rate - APR and all fees), maintain transparent non-discriminatory interest rate determination, and strictly prohibit coercive or harassing practices during loan recovery.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Fair Practices Code for Lenders; Banking Codes and Standards Board of India',
        excerpt: 'Fair Practices Code mandates transparent APR disclosure and bans coercive recovery practices.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Trust: The Single Ultimate Currency of the Financial System',
        body: 'A bank operates with leverage exceeding 10-to-1—over 90% of a bank\'s balance sheet consists of public depositors\' money.\n\nWithout uncompromising **Ethical Standards**, independent board oversight, and protection for whistleblowers, unchecked greed can precipitate systemic failure, destroying public life savings and destabilizing the macroeconomy.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Core Pillars of Banking Corporate Governance',
        body: '```mermaid\ngraph TD\n    GOV["Corporate Governance Architecture in Banks"]\n    GOV --> SEP["1. Separation of Powers: Non-Executive Independent Chairman distinct from MD & CEO (Max 15 yr tenure for MD/CEO)"]\n    GOV --> ACB["2. Audit Committee of Board (ACB): Chaired by Independent Director, oversees statutory audits & internal inspections"]\n    GOV --> WB["3. Whistleblower Policy: Direct confidential access to Audit Committee Chair; protection against victimization"]\n    GOV --> FPC["4. Fair Practices Code: Complete disclosure of All-Inclusive APR, Key Fact Statement (KFS), non-coercive recovery"]\n```',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Governance & Ethics',
        body: '1. **MD & CEO Tenure Cap:** Under RBI 2021 rules, an MD/CEO or Whole-Time Director in a private bank can hold office for a **maximum of 15 years**.\n2. **Upper Age Limit:** The upper age limit for MD/CEO and WTDs in private sector banks is **70 years**.\n3. **Key Fact Statement (KFS):** Effective October 2024, RBI mandates banks to provide an explicit **Key Fact Statement (KFS)** containing the all-inclusive Annual Percentage Rate (APR) before executing any retail or MSME loan agreement.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (PPB): Module D - Ethics in Banks & Corporate Governance',
        notes: 'Direct MCQs on MD/CEO 15-year tenure limit, age 70 cap, Section 177 Whistleblower policy, and Key Fact Statement rules.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Corporate Governance (RBI 2021): Split Chairman and MD/CEO; MD/CEO tenure max 15 years; max age 70 years. Whistleblower Policy (Sec 177 Companies Act): Direct access to Audit Committee Chairman. Fair Practices Code: Mandatory Key Fact Statement (KFS) with all-inclusive APR; zero coercive recovery practices.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s Corporate Governance Guidelines for Commercial Banks (2021), what is the MAXIMUM continuous tenure for which an individual can hold the post of Managing Director (MD) and Chief Executive Officer (CEO) in a private sector bank?',
        options: [
          'Maximum 5 years',
          'Maximum 10 years',
          'Maximum 15 years',
          'Maximum 20 years',
        ],
        correctAnswer: 'Maximum 15 years',
        explanation: 'Under RBI instructions on Corporate Governance in Banks (April 2021), the post of MD & CEO or Whole-Time Director (WTD) can be held by the same individual for a maximum continuous period of 15 years. Thereafter, the individual can be re-appointed only after a cooling-off period of at least three years.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },
];

export async function seedBatchB2IIBFCanonicalKnowledge() {
  console.log('Seeding Batch B2 IIBF Canonical Knowledge (Topics 42–45: 16 concepts)...');

  let subject = await db.subject.findFirst({
    where: { slug: 'iibf-banking-regulations' },
  });

  if (!subject) {
    throw new Error('Subject iibf-banking-regulations must exist before seeding Batch B2.');
  }

  const source = await db.source.upsert({
    where: { id: 'SRC-IIBF-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-IIBF-MASTER-2026',
      title: 'IIBF & Banking Regulations Master Corpus (2026)',
      sourceType: 'STATUTORY_REPORTS',
      authorityTier: 'PRIMARY_GOVERNMENT_RECORD',
      description: 'Authoritative IIBF, Banking Regulation Act 1949, RBI Master Directions, and DBF/JAIIB master repository.',
    },
  });

  const iibf = await db.exam.findFirst({ where: { slug: 'iibf-dbf' } });
  const upsc = await db.exam.findFirst({ where: { slug: 'upsc-cse' } });
  const rpsc = await db.exam.findFirst({ where: { slug: 'rpsc-ras' } });

  const examMap: Record<string, string> = {
    'iibf-dbf': iibf?.id || '',
    'upsc-cse': upsc?.id || '',
    'rpsc-ras': rpsc?.id || '',
  };

  const topicsMap: Record<string, { title: string; order: number; description: string; concepts: CanonicalConceptDefinition[] }> = {};
  for (const c of BATCH_B2_IIBF_CONCEPTS) {
    if (!topicsMap[c.topicSlug]) {
      topicsMap[c.topicSlug] = {
        title: c.topicTitle,
        order: c.topicOrder,
        description: c.topicDescription,
        concepts: [],
      };
    }
    topicsMap[c.topicSlug].concepts.push(c);
  }

  for (const [topicSlug, topicData] of Object.entries(topicsMap)) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: topicSlug,
        },
      },
      update: {
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
      create: {
        subjectId: subject.id,
        slug: topicSlug,
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
    });

    for (const cDef of topicData.concepts) {
      const concept = await db.concept.upsert({
        where: { id: cDef.id },
        update: {
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
        create: {
          id: cDef.id,
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
      });

      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      for (const clm of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: clm.id,
            conceptId: concept.id,
            statement: clm.statement,
            claimType: clm.claimType,
            epistemicLevel: clm.epistemicLevel,
            confidence: clm.confidence,
            status: 'CANONICAL_CLAIM',
          },
        });

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: source.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'STATUTORY_INSTRUMENT',
            authority: 'PRIMARY_GOVERNMENT_RECORD',
            evidentiarySupport: 'DIRECT_PROOF',
            extractionConfidence: 'CERTAIN',
          },
        });
      }

      for (const cb of cDef.contentBlocks) {
        await db.contentBlock.create({
          data: {
            conceptId: concept.id,
            type: cb.type,
            title: cb.title,
            body: cb.body,
            order: cb.order,
            visibility: 'CANONICAL_FULL',
          },
        });
      }

      for (const em of cDef.examMappings) {
        const examId = examMap[em.examCode];
        if (examId) {
          await db.examConceptMapping.create({
            data: {
              examId,
              conceptId: concept.id,
              syllabusUnit: em.syllabusUnit,
              relevance: em.relevance,
              priority: em.priority,
              requiredDepth: em.requiredDepth,
              notes: em.notes,
              frequentTraps: em.frequentTraps,
            },
          });
        }
      }

      for (const ru of cDef.revisionUnits) {
        await db.revisionUnit.create({
          data: {
            conceptId: concept.id,
            type: ru.type,
            content: ru.content,
            order: ru.order,
          },
        });
      }

      for (const q of cDef.questions) {
        await db.question.create({
          data: {
            conceptId: concept.id,
            type: q.type,
            stem: q.stem,
            options: JSON.stringify(q.options),
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            trapExplanation: q.trapExplanation,
            difficulty: q.difficulty,
            isPYQ: q.isPYQ,
          },
        });
      }
    }
  }
}
