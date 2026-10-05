import * as fs from 'fs';
import * as path from 'path';

const SRC_DIR = path.resolve('007', 'notes', 'iibf_dbf', '02_PAPER_2_PPB');
const OUT_DIR = path.resolve('007', 'notes', 'iibf_dbf', 'paper_2_chapters');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const modA = fs.readFileSync(path.join(SRC_DIR, '01_MODULE_A_GENERAL_BANKING_OPERATIONS.md'), 'utf-8');
const modB = fs.readFileSync(path.join(SRC_DIR, '02_MODULE_B_FUNCTIONS_OF_BANKS_AND_LENDING.md'), 'utf-8');
const modC = fs.readFileSync(path.join(SRC_DIR, '03_MODULE_C_BANKING_TECHNOLOGY.md'), 'utf-8');
const modD = fs.readFileSync(path.join(SRC_DIR, '04_MODULE_D_ETHICS_IN_BANKS_AND_FINANCIAL_INSTITUTIONS.md'), 'utf-8');

const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}\u{200D}]/gu;

function sanitizeText(str: string): string {
  let res = str.replace(emojiRegex, '');
  res = res.replace(/^(#+)[ \t]+/gm, '$1 ');
  res = res.replace(/^(#+)\s*([0-9]+\.)/gm, '$1 $2');
  res = res.replace(/^>[ \t]+/gm, '> ');
  res = res.replace(/^>\s*([A-Za-z0-9_*])/gm, '> $1');
  res = res.replace(/[ \t]+$/gm, '');
  return res;
}

function extractUnits(content: string): { [unitNum: string]: string } {
  const units: { [unitNum: string]: string } = {};
  const regex = /##\s*(\d+)\.\s*IIBF\s*PPB\s*Unit\s*(\d+):([\s\S]*?)(?=(?:##\s*\d+\.\s*IIBF\s*PPB\s*Unit|\n#\s*IIBF|$))/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const unitNo = match[2].trim();
    const rawBody = match[3].trim();
    units[unitNo] = sanitizeText(rawBody);
  }
  return units;
}

const allUnits = {
  ...extractUnits(modA),
  ...extractUnits(modB),
  ...extractUnits(modC),
  ...extractUnits(modD),
};

interface ChapterSpec {
  index: number;
  filename: string;
  fullTitle: string;
  shortHeader: string;
  leadParagraph: string;
  unitKey: string;
  practiceQuestions?: {
    questions: Array<{ q: string; options: string[] }>;
    solutions: string[];
  };
  activeRecallCards: Array<{ prompt: string; answer: string }>;
}

const CHAPTER_SPECS: ChapterSpec[] = [
  // MODULE A
  {
    index: 1,
    filename: '01_CHAPTER_01_BANKER_CUSTOMER_RELATIONSHIP.md',
    fullTitle: 'BANKER-CUSTOMER RELATIONSHIP, RIGHTS & STATUTORY DUTIES',
    shortHeader: 'CHAPTER 01 : BANKER-CUSTOMER RELATIONSHIP & RIGHTS',
    leadParagraph: 'The banker-customer relationship forms the legal cornerstone of commercial banking operations under English Common Law, the Indian Contract Act 1872, and the Banking Regulation Act 1949. Depending upon the transaction, the relationship shifts dynamically from debtor-creditor in deposit accounts to bailor-bailee in safe custody, trustee-beneficiary in escrow, and principal-agent in collection mandates.',
    unitKey: '1',
    practiceQuestions: {
      questions: [
        {
          q: 'When a customer deposits cash into an operative current account, what is the precise legal relationship established between the bank and the customer?',
          options: ['(A) Trustee (Bank) and Beneficiary (Customer)', '(B) Debtor (Bank) and Creditor (Customer)', '(C) Bailee (Bank) and Bailor (Customer)', '(D) Agent (Bank) and Principal (Customer)']
        },
        {
          q: 'Under Section 171 of the Indian Contract Act 1872, a banker possesses a general lien over customer securities. Over which of the following does Banker’s General Lien NOT apply?',
          options: ['(A) Bills handed over for collection', '(B) Securities deposited for safe custody', '(C) Matured fixed deposits held in the bank’s custody', '(D) Cheques deposited for clearance']
        },
        {
          q: 'Under the landmark Tournier v. National Provincial Bank ruling and statutory norms, in which situation is a banker legally justified in disclosing customer account confidential details?',
          options: ['(A) Oral request by a local police sub-inspector without warrant', '(B) Demand by customer’s spouse for household expense verification', '(C) Compulsion of law under Section 133 of the Income Tax Act 1961', '(D) Commercial inquiry by a competing private finance company']
        }
      ],
      solutions: [
        '**(B) Debtor (Bank) and Creditor (Customer)** — Deposit money becomes the property of the bank, and the bank is indebted to the customer with an obligation to repay on demand (Foley v. Hill).',
        '**(B) Securities deposited for safe custody** — General Lien applies only to goods and securities coming into the bank\'s hands in the ordinary course of business as a banker. Safe custody is a bailment for a specific purpose, superseding general lien.',
        '**(C) Compulsion of law under Section 133 of the Income Tax Act 1961** — Banker\'s duty of secrecy is subject to four statutory exceptions: (1) Under compulsion of law, (2) Duty to the public, (3) Interests of the bank, and (4) Express/implied consent of the customer.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Distinguish between Banker\'s General Lien and Particular Lien, and identify when Banker\'s Lien operates as an "Implied Pledge".',
        answer: 'A Particular Lien (Section 170 Contract Act) gives the right to retain goods only for the specific claim/service rendered on those goods. A Banker\'s General Lien (Section 171) entitles the banker to retain any security handed over to them in the ordinary course of banking for any general balance of account. By judicial precedent (Brandao v. Barnett), a banker\'s general lien operates as an "implied pledge", granting the banker the right to sell the retained securities after giving reasonable statutory notice to the borrower.'
      },
      {
        prompt: 'What is the Clayton\'s Case Rule (1816) and how does it govern appropriation of payments in running overdraft accounts?',
        answer: 'Clayton\'s Case (Devaynes v. Noble) establishes the rule of chronological appropriation in a running broken account: in the absence of specific appropriation by the debtor or creditor, the earliest credit item satisfies the earliest debit item. In an unbroken running overdraft, deposits by an ongoing firm extinguish the old guaranteed debt first, potentially discharging existing guarantors unless the account is broken/frozen upon notice of death/retirement.'
      }
    ]
  },
  {
    index: 2,
    filename: '02_CHAPTER_02_AML_KYC_CUSTOMER_DUE_DILIGENCE.md',
    fullTitle: 'AML / KYC NORMS, RISK CATEGORIZATION & DUE DILIGENCE (CDD)',
    shortHeader: 'CHAPTER 02 : AML, KYC NORMS & DUE DILIGENCE',
    leadParagraph: 'Prevention of Money Laundering Act 2002 (PMLA) and RBI Master Directions on KYC mandate institutional frameworks to prevent banks from being used intentionally or unintentionally as conduits for money laundering and terrorist financing. Customer Due Diligence (CDD) operationalizes risk-based categorizations, verified through statutory Officially Valid Documents (OVDs).',
    unitKey: '2',
    practiceQuestions: {
      questions: [
        {
          q: 'Under RBI Master Directions on KYC, what is the mandatory frequency for periodic KYC updation for High-Risk, Medium-Risk, and Low-Risk customers respectively?',
          options: ['(A) Every 1 year, 3 years, and 5 years', '(B) Every 2 years, 8 years, and 10 years', '(C) Every 3 years, 5 years, and 7 years', '(D) Every 6 months, 2 years, and 5 years']
        },
        {
          q: 'Which of the following documents is NOT recognized as an Officially Valid Document (OVD) for individual proof of identity under PMLA Rules?',
          options: ['(A) Passport and Driving Licence', '(B) Voter’s Identity Card issued by Election Commission', '(C) PAN Card / e-PAN Card', '(D) Letter issued by National Population Register (NPR)']
        },
        {
          q: 'What is the regulatory filing timeline for submitting a Suspicious Transaction Report (STR) to the Financial Intelligence Unit - India (FIU-IND)?',
          options: ['(A) By 15th of the succeeding calendar month', '(B) Within 7 working days of arriving at a conclusion of suspicion', '(C) Within 24 hours of transaction execution', '(D) Within 30 calendar days from the date of quarterly audit']
        }
      ],
      solutions: [
        '**(B) Every 2 years, 8 years, and 10 years** — High-Risk accounts require re-KYC at least once every 2 years; Medium-Risk every 8 years; Low-Risk every 10 years.',
        '**(C) PAN Card / e-PAN Card** — PAN is an officially required document for financial transaction taxation, but under revised PMLA definitions, an OVD for individual CDD must contain both identity and address proof (Passport, DL, Voter ID, Aadhaar, MNREGA card, NPR letter). PAN alone does not verify address.',
        '**(B) Within 7 working days of arriving at a conclusion of suspicion** — Cash Transaction Reports (CTR) are filed by the 15th of the succeeding month; STRs must be furnished within 7 working days of the Principal Officer concluding the transaction is suspicious.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'State the three classical stages of Money Laundering and describe the operational mechanics of each stage.',
        answer: '1. Placement: Introducing illicit cash into the formal financial system (smurfing/structuring deposits below reporting caps). 2. Layering: Concealing the criminal source through complex chains of financial transactions, wire transfers, offshore shell companies, and fictitious trade invoices. 3. Integration: Re-injecting laundered funds into the legitimate economy through luxury assets, real estate, or lawful corporate investments.'
      },
      {
        prompt: 'What constitutes a "Small Account" under RBI KYC Directions, and what are its operational transaction ceilings?',
        answer: 'A Small Account is opened by an individual lacking officially valid documents, valid for 12 months (extendable to another 12 months upon proof of applying for an OVD). Ceilings: (1) Total credits in a financial year ≤ ₹1,00,000; (2) Total withdrawals and transfers in a calendar month ≤ ₹10,000; (3) Balance at any point in time ≤ ₹50,000; (4) Zero foreign remittances permitted.'
      }
    ]
  },
  {
    index: 3,
    filename: '03_CHAPTER_03_SPECIAL_CUSTOMERS_ACCOUNTS.md',
    fullTitle: 'OPERATIONS IN ACCOUNTS OF SPECIAL CATEGORIES OF CUSTOMERS',
    shortHeader: 'CHAPTER 03 : SPECIAL CUSTOMERS & FIDUCIARY ACCOUNTS',
    leadParagraph: 'Commercial banks handle varied customer profiles possessing varying contractual capacities under the Indian Contract Act 1872, Hindu Minority and Guardianship Act 1956, and the Indian Majority Act 1875. Banking operations for minors, visually impaired individuals, illiterate persons, joint survivorships, and partnerships necessitate strict procedural and statutory safeguards.',
    unitKey: '3',
    practiceQuestions: {
      questions: [
        {
          q: 'Under RBI guidelines, a literate minor who has attained which age is legally permitted to open and operate a savings bank account independently in their own name?',
          options: ['(A) 7 years', '(B) 10 years', '(C) 14 years', '(D) 16 years']
        },
        {
          q: 'In a joint deposit account operated under the survivorship mandate "Former or Survivor", who is authorized to withdraw funds during the lifetime of both depositors?',
          options: ['(A) Either depositor can withdraw at will', '(B) Only the first named accountholder (Former) during their lifetime', '(C) Only the second named accountholder (Survivor)', '(D) Both depositors must sign jointly']
        },
        {
          q: 'When an illiterate customer opens an account, how must their cheques or withdrawal slips be executed in the presence of bank officials?',
          options: ['(A) Digital thumb impression with zero witnesses', '(B) Left hand thumb impression (LTI) for males / Right hand thumb impression (RTI) for females, verified by an independent witness', '(C) Verbal confirmation over telephone banking', '(D) Written authorization by an advocate']
        }
      ],
      solutions: [
        '**(B) 10 years** — Minors who have attained the age of 10 years can open and operate savings accounts independently, subject to bank prudential turnover caps.',
        '**(B) Only the first named accountholder (Former) during their lifetime** — Under "Former or Survivor", only the Former can operate the account while alive; the Survivor can operate/claim funds only upon the Former’s death.',
        '**(B) Left hand thumb impression (LTI) for males / Right hand thumb impression (RTI) for females, verified by an independent witness** — Established banking practice requires physical thumb impression attested by an independent witness known to the bank.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'What is the legal effect of a minor partner in a Partnership firm under Section 30 of the Indian Partnership Act 1932?',
        answer: 'A minor cannot be a full partner because a minor’s agreement is void ab initio (Mohori Bibee v. Dharmodas Ghose). However, with the consent of all partners, a minor may be admitted to the benefits of partnership. The minor’s share in the firm’s property/profits is liable for partnership debts, but the minor is not personally liable. Upon attaining majority, the minor has 6 months to elect whether to become a full partner.'
      },
      {
        prompt: 'Explain the legal status of an account held by a Hindu Undivided Family (HUF) and the doctrine of Karta borrowing for Legal Necessity.',
        answer: 'An HUF account is operated exclusively by the Karta (the senior coparcener). The Karta has implied authority to bind the family estate for debts incurred for "Legal Necessity" (Patni/ancestral business upkeep, taxes, family welfare). Coparceners are liable only to the extent of their undivided share in the joint family property, whereas the Karta is personally liable for borrowings.'
      }
    ]
  },
  {
    index: 4,
    filename: '04_CHAPTER_04_COMPANIES_TRUSTS_SOCIETIES.md',
    fullTitle: 'ACCOUNTS OF COMPANIES, TRUSTS, CLUBS & CHARGE REGISTRATION',
    shortHeader: 'CHAPTER 04 : CORPORATE ACCOUNTS, TRUSTS & CHARGES',
    leadParagraph: 'Corporate banking involves legal personalities distinct from their shareholders (Salomon v. Salomon & Co Ltd). Account operations, borrowing authorizations, and security creations are governed by the Companies Act 2013, Indian Trusts Act 1882, and Societies Registration Act 1860, requiring scrutiny of constitutional documents (MoA, AoA, Trust Deeds) and statutory charge registrations.',
    unitKey: '4',
    practiceQuestions: {
      questions: [
        {
          q: 'Under Section 77 of the Companies Act 2013, within what initial statutory timeline must a company register a charge created on its assets with the Registrar of Companies (RoC)?',
          options: ['(A) 15 days', '(B) 30 days', '(C) 60 days', '(D) 90 days']
        },
        {
          q: 'What is the legal doctrine that protects innocent third-party outsiders dealing in good faith with a company from internal operational irregularities?',
          options: ['(A) Doctrine of Ultra Vires', '(B) Doctrine of Constructive Notice', '(C) Doctrine of Indoor Management (Turquand’s Rule)', '(D) Doctrine of Subrogation']
        },
        {
          q: 'Can a trustee delegate their fiduciary authority or duties to a co-trustee or third party under the Indian Trusts Act 1882?',
          options: ['(A) Yes, delegation is an inherent right of any fiduciary', '(B) No, the maxim "delegatus non potest delegare" applies, unless expressly permitted by the trust deed or regular necessity', '(C) Yes, with verbal consent of the local civil judge', '(D) Only if the beneficiary is a minor']
        }
      ],
      solutions: [
        '**(B) 30 days** — Charges must be registered with RoC within 30 days of creation. The RoC can permit registration within an additional 30 days (total 60 days) on payment of additional fees.',
        '**(C) Doctrine of Indoor Management (Turquand’s Rule)** — Established in Royal British Bank v. Turquand; outsiders dealing with a company are bound to know its public documents (MoA/AoA), but can presume internal regularity has been observed.',
        '**(B) No, the maxim "delegatus non potest delegare" applies, unless expressly permitted by the trust deed or regular necessity** — Section 47 of the Indian Trusts Act prohibits delegation of fiduciary duties unless authorized by the trust instrument.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Differentiate between the Doctrine of Constructive Notice and the Doctrine of Indoor Management in corporate banking.',
        answer: 'Constructive Notice is an equitable doctrine favoring the company: the Memorandum and Articles of Association are public documents registered with RoC; every person dealing with the company is presumed to have read and understood them. Conversely, Indoor Management (Turquand’s Rule) favors the outside creditor/banker: while outsiders must observe public limits in MoA/AoA, they are entitled to assume internal procedures and resolutions have been properly complied with.'
      },
      {
        prompt: 'What are the consequences of failing to register a company charge with the Registrar of Companies (RoC) under Section 77?',
        answer: 'If a charge is not registered within the permitted statutory period: (1) The charge is VOID against the liquidator and any other creditor of the company in winding-up; (2) The secured creditor loses priority and is relegated to an unsecured creditor status; (3) The underlying debt remains valid and immediately payable; (4) The company and defaulting officers face statutory penalties under Section 86.'
      }
    ]
  },
  {
    index: 5,
    filename: '05_CHAPTER_05_MANDATES_POAS_COURT_ORDERS.md',
    fullTitle: 'MANDATES, POWER OF ATTORNEY & COURT ORDERS (GARNISHEE / ATTACHMENT)',
    shortHeader: 'CHAPTER 05 : MANDATES, POAS & ATTACHMENT ORDERS',
    leadParagraph: 'Bankers frequently encounter delegated authorities (Mandates and Powers of Attorney) and judicial interventions impounding customer balances. Executing Garnishee Orders issued under Order XXI Rule 46 of the Code of Civil Procedure (CPC) 1908 and Attachment Orders issued by tax authorities requires strict adherence to legal priorities and claim settlement protocols.',
    unitKey: '5',
    practiceQuestions: {
      questions: [
        {
          q: 'A Garnishee Order Nisi served upon a bank attaches which of the following funds?',
          options: ['(A) Debts due or accruing due at the exact moment of service of the order', '(B) Deposits credited to the account on subsequent days after service', '(C) Safe custody packets containing gold ornaments', '(D) Shares held in the customer\'s demat account']
        },
        {
          q: 'How does an Income Tax Attachment Order issued under Section 226(3) of the Income Tax Act 1961 fundamentally differ from a civil court Garnishee Order?',
          options: ['(A) IT Attachment Order cannot attach fixed deposits', '(B) IT Attachment Order attaches both present debts and subsequent credits coming into the account after service', '(C) Garnishee orders carry higher legal priority than tax attachment orders', '(D) IT Attachment Order applies only to joint accounts']
        },
        {
          q: 'Under RBI guidelines on settlement of claims in deceased accounts without nomination or legal representation, up to what maximum threshold are banks encouraged to fix simplified claims procedures against indemnity?',
          options: ['(A) ₹50,000', '(B) ₹1,00,000', '(C) ₹5,00,000 (or board-approved limits)', '(D) ₹10,00,000']
        }
      ],
      solutions: [
        '**(A) Debts due or accruing due at the exact moment of service of the order** — A Garnishee Order attaches only funds existing as a debt due or accruing due at the time of service; it does not attach subsequent deposits.',
        '**(B) IT Attachment Order attaches both present debts and subsequent credits coming into the account after service** — Unlike a Garnishee Order, an IT Attachment Order under Section 226(3) is continuous and attaches subsequent deposits until the tax liability is fully satisfied.',
        '**(C) ₹5,00,000 (or board-approved limits)** — RBI mandates banks to formulate board-approved threshold limits (commonly ₹1 Lakh to ₹5 Lakh) for fast settlement of deceased claims without demanding succession certificates.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Distinguish between Garnishee Order Nisi and Garnishee Order Absolute.',
        answer: 'Garnishee Order Nisi is an interim order directing the bank (garnishee) to freeze the judgment debtor’s funds and appear in court to show cause why the funds should not be paid to the judgment creditor. Garnishee Order Absolute is the final judicial decree issued after the hearing, directing the bank to directly pay the attached sum to the court or judgment creditor.'
      },
      {
        prompt: 'State the rule governing applicability of a Garnishee Order against a Joint Account where only one accountholder is the judgment debtor.',
        answer: 'A Garnishee Order issued against an individual judgment debtor CANNOT attach a joint account held by the debtor along with other innocent joint holders, because the debt is joint whereas the liability is individual (unless the order explicitly names all joint holders or the joint mandate establishes individual ownership of funds).'
      }
    ]
  },
  {
    index: 6,
    filename: '06_CHAPTER_06_LOCKERS_SAFE_CUSTODY_NOMINATION.md',
    fullTitle: 'SAFE DEPOSIT LOCKERS, SAFE CUSTODY & NOMINATION NORMS',
    shortHeader: 'CHAPTER 06 : SAFE DEPOSIT LOCKERS & NOMINATION',
    leadParagraph: 'Safekeeping services encompass safe custody bailment contracts and safe deposit locker lease agreements. Regulated by Sections 45ZA to 45ZF of the Banking Regulation Act 1949 and revised RBI Master Directions (2023), banks operate under strict liability caps (100 times annual locker rent for negligence) and transparent survivor settlement mandates.',
    unitKey: '6',
    practiceQuestions: {
      questions: [
        {
          q: 'Under revised RBI Master Directions on Safe Deposit Lockers, what is the maximum statutory compensation liability of a bank for locker loss arising from bank negligence, burglary, or fire?',
          options: ['(A) Up to ₹1,00,000 flat', '(B) Up to 100 times the prevailing annual rent of the locker', '(C) Zero liability under locker lease agreements', '(D) 100% of the customer’s self-declared invoice value']
        },
        {
          q: 'Under Section 45ZA of the Banking Regulation Act 1949, how many nominees can be appointed for a single individual deposit account?',
          options: ['(A) Only 1 nominee', '(B) Up to 2 nominees', '(C) Up to 3 nominees', '(D) No statutory restriction']
        },
        {
          q: 'When a bank settles deposit balances to a registered nominee upon the death of the accountholder, what is the true legal status of the nominee under Indian law?',
          options: ['(A) Absolute legal owner of the funds, disinheriting all legal heirs', '(B) Fiduciary trustee receiving funds for the ultimate benefit of legal heirs', '(C) Court receiver under CPC', '(D) Joint tenant in equity']
        }
      ],
      solutions: [
        '**(B) Up to 100 times the prevailing annual rent of the locker** — In instances of fire, theft, burglary, dacoity, or building collapse due to bank negligence, bank liability is capped at 100 times annual rent.',
        '**(A) Only 1 nominee** — For deposit accounts, Section 45ZA permits only ONE nominee at any given point in time (two nominees are permitted only in joint safe deposit locker hirings under Section 45ZE).',
        '**(B) Fiduciary trustee receiving funds for the ultimate benefit of legal heirs** — Nomination provides valid discharge to the bank, but the nominee receives funds as a trustee holding the money subject to succession rights of legal heirs.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'What constitutes the legal difference between Safe Custody and Safe Deposit Locker facilities?',
        answer: 'Safe Custody is a contract of Bailment (Section 148 Contract Act); the customer hands over specific sealed articles to the bank, the bank takes physical possession and issues a safe custody receipt, knowing the container exists. Safe Deposit Locker is a contract of Licensor and Licensee (or Landlord and Tenant); the customer hires a steel compartment, the bank has no possession or knowledge of the contents, and access requires both customer and master keys.'
      },
      {
        prompt: 'State the procedure for locker break-open in case of non-payment of rent under RBI guidelines.',
        answer: 'If locker rent remains unpaid for 3 consecutive years: (1) Bank issues statutory registered notice giving 6 months time to clear arrears; (2) In case of non-response, bank issues public notice in two newspapers (English and vernacular); (3) Break-open is conducted before an independent magistrate/notary and two independent witnesses; (4) Inventory is sealed in a tamper-proof bag and videographed.'
      }
    ]
  },
  {
    index: 7,
    filename: '07_CHAPTER_07_CASH_OPERATIONS_CLEAN_NOTE_POLICY.md',
    fullTitle: 'CASH OPERATIONS, CLEAN NOTE POLICY & COUNTERFEIT CURRENCY',
    shortHeader: 'CHAPTER 07 : CASH OPERATIONS & COUNTERFEIT DETECTION',
    leadParagraph: 'Cash management represents the operational frontline of retail banking governed by RBI Clean Note Policy, Section 39 of the RBI Act 1934, and RBI (Note Refund) Rules 2009. Detection, impounding, and reporting of Fake Indian Currency Notes (FICN) are statutory duties enforceable under the Indian Penal Code (IPC) and PMLA.',
    unitKey: '7',
    practiceQuestions: {
      questions: [
        {
          q: 'When a forged or counterfeit banknote is detected across the counter in a bank branch, what is the mandatory immediate statutory action required?',
          options: ['(A) Return the note immediately to the presenter', '(B) Tear or destroy the note in the customer’s presence', '(C) Impound the note, stamp "COUNTERFEIT BANKNOTE IMPOUNDED", and issue a dated receipt', '(D) Deduct the amount from the customer\'s savings account']
        },
        {
          q: 'Under RBI guidelines on Counterfeit Notes, when must a bank lodge a First Information Report (FIR) with the local police?',
          options: ['(A) For even a single detected forged note of ₹10 denomination', '(B) When 5 or more pieces of counterfeit notes are detected in a single transaction', '(C) Only when counterfeit currency exceeds ₹1,00,000', '(D) Only upon written order from the Currency Officer, RBI']
        },
        {
          q: 'Under RBI (Note Refund) Rules 2009, what is the definition of a "Soiled Note"?',
          options: ['(A) A note which has become dirty due to normal circulation, including two pieces pasted together provided both belong to the same note', '(B) A note of which a portion is missing', '(C) A note which is completely burnt or brittle', '(D) A note containing political or religious slogans']
        }
      ],
      solutions: [
        '**(C) Impound the note, stamp "COUNTERFEIT BANKNOTE IMPOUNDED", and issue a dated receipt** — Bank notes detected as counterfeit must never be returned to the presenter or destroyed; they must be impounded and receipted immediately.',
        '**(B) When 5 or more pieces of counterfeit notes are detected in a single transaction** — For 1 to 4 pieces, consolidated monthly reporting is sent to police; for 5 or more pieces in a single transaction, an FIR must be lodged immediately.',
        '**(A) A note which has become dirty due to normal circulation, including two pieces pasted together provided both belong to the same note** — Soiled notes can be exchanged freely over bank counters for full value without payment of adjudication fees.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Distinguish between a Mutilated Note and an Imperfect Note under RBI (Note Refund) Rules.',
        answer: 'Mutilated Note: A banknote of which a portion is missing or which is composed of more than two pieces pasted together. Adjudicated based on minimum area percentages (single largest undivided piece). Imperfect Note: A banknote which is wholly or partially, obliterated, shrunk, washed, altered, or indecipherable, but of which no essential part is missing.'
      },
      {
        prompt: 'What are the minimum undivided surface area benchmarks required for full value refund on a mutilated note of ₹50 and above (Mahatma Gandhi New Series)?',
        answer: 'For denominations of ₹50, ₹100, ₹200, ₹500, and ₹2000: (1) Full Value: If the single largest undivided piece has an area ≥ 80% of the original note area; (2) Half Value: If the undivided area is ≥ 40% and < 80%; (3) Zero Value: If the undivided area is < 40%.'
      }
    ]
  },
  {
    index: 8,
    filename: '08_CHAPTER_08_NEGOTIABLE_INSTRUMENTS_ACT_1881.md',
    fullTitle: 'NEGOTIABLE INSTRUMENTS ACT 1881: CHEQUES, PROTECTION & SEC 138',
    shortHeader: 'CHAPTER 08 : NEGOTIABLE INSTRUMENTS & CHEQUES',
    leadParagraph: 'The Negotiable Instruments Act 1881 governs promissory notes, bills of exchange, and cheques. Statutory protections granted to paying bankers (Sections 10, 85, 89) and collecting bankers (Section 131) against forgery and converted instruments form the foundation of non-cash payment law, reinforced by criminal penalties for cheque dishonour under Section 138.',
    unitKey: '19',
    practiceQuestions: {
      questions: [
        {
          q: 'To claim statutory protection under Section 131 of the Negotiable Instruments Act 1881, a collecting banker must prove which two fundamental conditions?',
          options: ['(A) Acted as a holder in due course and paid cash immediately', '(B) Received payment in good faith and without negligence for a customer', '(C) Collected only open bearer cheques', '(D) Verified the financial net worth of the drawer']
        },
        {
          q: 'What is the statutory consequence when a cheque bearing a forged drawer’s signature is paid by the paying banker?',
          options: ['(A) The paying banker is fully protected under Section 85(1)', '(B) The payment is an absolute nullity, and the bank cannot debit the customer’s account', '(C) The customer must bear 50% of the loss under contributory negligence', '(D) The bank can recover funds from the RBI clearing house']
        },
        {
          q: 'Under Section 138 of the Negotiable Instruments Act 1881, within how many days of receiving dishonour information must the payee issue a statutory legal demand notice to the drawer?',
          options: ['(A) 7 days', '(B) 15 days', '(C) 30 days', '(D) 60 days']
        }
      ],
      solutions: [
        '**(B) Received payment in good faith and without negligence for a customer** — Section 131 protection against conversion is available only if the banker collected a crossed cheque in good faith, without negligence, and for an established customer.',
        '**(B) The payment is an absolute nullity, and the bank cannot debit the customer’s account** — A forged signature of the drawer is a total legal nullity (Section 26); the bank has no mandate to pay and cannot debit the customer (Young v. Grote exception applies only to negligent customer fraud in filling blanks).',
        '**(C) 30 days** — Payee must issue a written demand notice within 30 days of dishonour. The drawer gets 15 days to make payment; if unpaid, the complaint must be filed in court within 1 month thereafter.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Define "Payment in Due Course" under Section 10 of the Negotiable Instruments Act 1881.',
        answer: 'Payment in Due Course means payment made: (1) in accordance with the apparent tenor of the instrument; (2) in good faith and without negligence; (3) to any person in possession thereof under circumstances which do not afford reasonable ground for believing that they are not entitled to receive payment; and (4) payment in money only.'
      },
      {
        prompt: 'What constitutes a "Holder in Due Course" (HDC) under Section 9 of the NI Act, and what privileges does an HDC enjoy?',
        answer: 'An HDC is a person who for consideration became the possessor of an instrument before its maturity, in good faith, and without notice of any defect in the title of the person from whom they derived it. Privileges: (1) Possesses better title than the transferor; (2) Cleanses all prior defects of title; (3) Every prior party is liable to an HDC until the instrument is duly satisfied.'
      }
    ]
  },
  // MODULE B
  {
    index: 9,
    filename: '09_CHAPTER_09_PRINCIPLES_OF_LENDING_WORKING_CAPITAL.md',
    fullTitle: 'PRINCIPLES OF LENDING, WORKING CAPITAL & TERM LOAN APPRAISAL',
    shortHeader: 'CHAPTER 09 : LENDING PRINCIPLES & WORKING CAPITAL',
    leadParagraph: 'Commercial lending balances Safety, Liquidity, and Profitability. Working Capital finance assessment transitioned from security-oriented pledge limits to need-based appraisal models pioneered by the Tandon and Chore Committees (Maximum Permissible Bank Finance — MPBF) and the Nayak Committee Turnover Method for MSMEs.',
    unitKey: '8',
    practiceQuestions: {
      questions: [
        {
          q: 'Under the Tandon Committee Method II of Maximum Permissible Bank Finance (MPBF), what is the minimum Net Working Capital (NWC) contribution required from the borrower?',
          options: ['(A) 25% of the Working Capital Gap (WCG)', '(B) 25% of Total Current Assets (TCA)', '(C) 50% of Current Assets', '(D) 10% of Projected Turnover']
        },
        {
          q: 'For working capital limits up to ₹5 Crore for MSME manufacturing units, which appraisal methodology was mandated by the Nayak Committee?',
          options: ['(A) Tandon Method III', '(B) Cash Budget Method', '(C) Turnover Method (minimum bank finance of 20% of projected annual turnover)', '(D) Chore Committee Peak Deficit System']
        },
        {
          q: 'Which financial ratio serves as the most critical parameter for assessing the repayment capacity of a borrower in Term Loan appraisal?',
          options: ['(A) Current Ratio', '(B) Debt Service Coverage Ratio (DSCR)', '(C) Quick Ratio', '(D) Return on Equity (ROE)']
        }
      ],
      solutions: [
        '**(B) 25% of Total Current Assets (TCA)** — Under Tandon Method II: MPBF = 0.75(TCA) - Other Current Liabilities (OCL). The borrower must finance 25% of TCA from long-term funds, yielding a minimum Current Ratio of 1.33:1.',
        '**(C) Turnover Method (minimum bank finance of 20% of projected annual turnover)** — Nayak Committee requires total working capital to be 25% of projected turnover, with borrower contributing 5% and bank financing 20%.',
        '**(B) Debt Service Coverage Ratio (DSCR)** — DSCR measures earnings available for debt service against principal and interest repayment obligations (ideal benchmark: 1.50 to 2.00).'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Formulate the mathematical distinction between Tandon Committee MPBF Method I and Method II.',
        answer: 'Method I: Borrower contributes 25% of the Working Capital Gap (WCG) from long-term surplus funds. Formula: MPBF = 0.75 * (TCA - OCL). Benchmark Current Ratio = 1.17:1. Method II: Borrower contributes 25% of Total Current Assets (TCA) from long-term surplus funds. Formula: MPBF = (TCA - 0.25 * TCA) - OCL = 0.75 * TCA - OCL. Benchmark Current Ratio = 1.33:1.'
      },
      {
        prompt: 'Define the Debt Service Coverage Ratio (DSCR) formula and state the economic implication of a DSCR below 1.0.',
        answer: 'DSCR = (Net Profit after Tax + Depreciation + Term Loan Interest) / (Term Loan Installment Repayments + Term Loan Interest). A DSCR < 1.0 indicates that operating cash flows are insufficient to service contractual debt obligations, signifying imminent default or debt servicing distress.'
      }
    ]
  },
  {
    index: 10,
    filename: '10_CHAPTER_10_COLLATERALS_AND_CREATION_OF_CHARGES.md',
    fullTitle: 'COLLATERALS & CHARGES: PLEDGE, HYPOTHECATION, LIEN & MORTGAGES',
    shortHeader: 'CHAPTER 10 : COLLATERALS & SECURITY CHARGES',
    leadParagraph: 'Securing bank advances requires legally enforceable charges over tangible and intangible assets. Governed by the Indian Contract Act 1872, Transfer of Property Act 1882, and SARFAESI Act 2002, the five primary security charges—Pledge, Hypothecation, Mortgage, Lien, and Assignment—possess distinct possession, ownership, and enforcement attributes.',
    unitKey: '9',
    practiceQuestions: {
      questions: [
        {
          q: 'Under Section 172 of the Indian Contract Act 1872, what constitutes the fundamental legal ingredient of a "Pledge"?',
          options: ['(A) Transfer of ownership of goods to the bank without possession', '(B) Bailment of goods as security for payment of a debt with physical or constructive delivery of possession', '(C) Registration of charge with CERSAI without delivery', '(D) Assignment of actionable claims']
        },
        {
          q: 'Which type of mortgage under Section 58 of the Transfer of Property Act 1882 is created in notified towns by merely delivering title deeds of immovable property with intent to create a security?',
          options: ['(A) Simple Mortgage', '(B) English Mortgage', '(C) Equitable Mortgage (Mortgage by Deposit of Title Deeds)', '(D) Usufructuary Mortgage']
        },
        {
          q: 'Under the SARFAESI Act 2002, which security charge over movable assets is defined as a charge without delivery of possession?',
          options: ['(A) Pledge', '(B) Hypothecation', '(C) Banker’s Lien', '(D) Set-off']
        }
      ],
      solutions: [
        '**(B) Bailment of goods as security for payment of a debt with physical or constructive delivery of possession** — Delivery of possession is the essential test of a pledge. Ownership remains with the pledgor, while special property and possession pass to the pledgee.',
        '**(C) Equitable Mortgage (Mortgage by Deposit of Title Deeds)** — Section 58(f) T.P. Act allows mortgage by deposit of title deeds in specified towns without requiring registered mortgage deeds, saving stamp duty.',
        '**(B) Hypothecation** — Defined in Section 2(1)(n) of SARFAESI Act as a charge created on movable property without delivery of possession of the property to the creditor.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Construct the comparative matrix of the 5 primary security charges across: Nature of Asset, Possession, and Governing Statute.',
        answer: '1. Pledge: Movable goods; Possession with Bank; Indian Contract Act 1872. 2. Hypothecation: Movable goods/stocks; Possession with Borrower; SARFAESI Act 2002. 3. Mortgage: Immovable property; Possession with Borrower (usually); Transfer of Property Act 1882. 4. Lien: Goods/securities; Possession with Bank; Indian Contract Act 1872. 5. Assignment: Actionable claims/life insurance policies; Intangible right transferred; Transfer of Property Act 1882.'
      },
      {
        prompt: 'What are the essential legal requirements for creating a valid Equitable Mortgage by deposit of title deeds under Section 58(f) of the T.P. Act?',
        answer: 'Three indispensable requirements: (1) Existence of a debt; (2) Deposit of original documents of title to immovable property; (3) Intention that the deeds shall be security for the debt. Must be effected in towns specifically notified by the State Government.'
      }
    ]
  },
  {
    index: 11,
    filename: '11_CHAPTER_11_LETTERS_OF_CREDIT_UCPDC_600.md',
    fullTitle: 'NON-FUND FACILITIES I: LETTERS OF CREDIT (LC) & UCPDC 600',
    shortHeader: 'CHAPTER 11 : LETTERS OF CREDIT & UCPDC 600',
    leadParagraph: 'Letters of Credit (LC) serve as irrevocable documentary undertakings substituting the bank’s creditworthiness for that of the buyer. Governed universally by ICC Uniform Customs and Practice for Documentary Credits (UCPDC 600), LCs operate under the strict doctrines of Independence of Credit and Strict Documentary Compliance.',
    unitKey: '10',
    practiceQuestions: {
      questions: [
        {
          q: 'Under Article 14(b) of UCPDC 600, what is the maximum statutory period available to an issuing or confirming bank to determine whether documents comply with the credit?',
          options: ['(A) 3 banking days following the day of receipt', '(B) 5 banking days following the day of presentation', '(C) 7 calendar days', '(D) 10 banking days']
        },
        {
          q: 'Under UCPDC 600, every Letter of Credit is legally presumed to be which of the following unless expressly stipulated otherwise?',
          options: ['(A) Revocable', '(B) Irrevocable', '(C) Transferable', '(D) Revolving']
        },
        {
          q: 'What is the distinguishing feature of a "Red Clause Letter of Credit"?',
          options: ['(A) Provides advance credit to the seller before shipment of goods for purchasing raw materials', '(B) Permits storage of goods in bonded warehouses before clearance', '(C) Requires the issuing bank to guarantee export duty payments', '(D) Prohibits presentation of electronic transport documents']
        }
      ],
      solutions: [
        '**(B) 5 banking days following the day of presentation** — The nominated bank, confirming bank, and issuing bank each have a maximum of 5 banking days following presentation to examine documents.',
        '**(B) Irrevocable** — Under Article 3 of UCPDC 600, a credit is irrevocable even if there is no indication to that effect on the document.',
        '**(A) Provides advance credit to the seller before shipment of goods for purchasing raw materials** — Red Clause allows pre-shipment advance finance to the beneficiary by the advising/confirming bank under authorization from the issuing bank (historically written in red ink).'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'State the Doctrine of Independence of Credit and the Doctrine of Strict Compliance in Letter of Credit transactions.',
        answer: '1. Independence of Credit (Article 4): An LC is a separate transaction from the underlying commercial sale contract; banks deal only in documents and not in goods/services, and are unconcerned with disputes regarding underlying goods. 2. Strict Compliance (Equitable Trust Co v. Dawson Partners): Documents must strictly mirror the terms and conditions of the credit. "There is no room for documents which are almost the same or do just as well."'
      },
      {
        prompt: 'Differentiate between a Confirmed Letter of Credit and an Unconfirmed Letter of Credit.',
        answer: 'In an Unconfirmed LC, only the Issuing Bank provides an irrevocable undertaking to pay upon presentation of complying documents; the Advising Bank merely authenticates and transmits the credit. In a Confirmed LC, a second bank (Confirming Bank) adds its own independent irrevocable payment undertaking at the request of the issuing bank, eliminating cross-border country risk and issuing bank insolvency risk for the beneficiary.'
      }
    ]
  },
  {
    index: 12,
    filename: '12_CHAPTER_12_BANK_GUARANTEES_CO_ACCEPTANCE.md',
    fullTitle: 'NON-FUND FACILITIES II: BANK GUARANTEES (BG) & DEFERRED PAYMENTS',
    shortHeader: 'CHAPTER 12 : BANK GUARANTEES & CONTRACT LAWS',
    leadParagraph: 'A Bank Guarantee is a tripartite collateral contract of guarantee under Section 126 of the Indian Contract Act 1872, where the bank promises to discharge the liability of the applicant upon default. Divided into Financial and Performance Guarantees, BG operations are conditioned by Section 28 of the Contract Act and strict judicial rules on injunction restraint.',
    unitKey: '11',
    practiceQuestions: {
      questions: [
        {
          q: 'Under Section 28 of the Indian Contract Act 1872 (amended), what is the minimum statutory claim limitation period that a bank can contractually specify for invoking a guarantee?',
          options: ['(A) 6 months from the expiry of the validity period', '(B) 1 year from the expiry of the guarantee', '(C) 3 years from the date of default', '(D) 30 days from project commissioning']
        },
        {
          q: 'Under settled Supreme Court jurisprudence, in which exceptional circumstances will an Indian court issue an injunction restraining the invocation of an unconditional Bank Guarantee?',
          options: ['(A) Any commercial dispute between buyer and seller regarding quality of goods', '(B) Only in cases of established egregious fraud of a serious nature or irretrievable injustice/harm', '(C) If the customer files an insolvency petition under IBC', '(D) Delay in supply caused by transport strike']
        },
        {
          q: 'What is the maximum tenor up to which commercial banks are generally permitted by RBI to issue Bank Guarantees without special approvals?',
          options: ['(A) 3 years', '(B) 5 years', '(C) 10 years (subject to viability and risk mitigation)', '(D) 15 years']
        }
      ],
      solutions: [
        '**(B) 1 year from the expiry of the guarantee** — Section 28 permits parties to agree that rights will be extinguished if no suit is instituted within a specified period of not less than 1 year from the date of expiry.',
        '**(B) Only in cases of established egregious fraud of a serious nature or irretrievable injustice/harm** — An unconditional BG is an autonomous contract; courts will not interfere except in cases of egregious fraud known to the bank or irretrievable injustice (U.P. State Sugar Corp v. Sumac International).',
        '**(C) 10 years (subject to viability and risk mitigation)** — Banks should not normally issue guarantees with tenors exceeding 10 years unless supported by specific cash margin, government counter-guarantee, or infrastructure parameters.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Distinguish between a Financial Guarantee and a Performance Guarantee.',
        answer: 'Financial Guarantee: The bank guarantees the repayment of money or financial obligation by the borrower (e.g. advance payment guarantee, loan repayment guarantee); 100% credit risk, attracting higher risk weight and cash margin. Performance Guarantee: The bank guarantees the due performance of a technical, construction, or commercial contract; if the contractor fails to perform within timelines, the bank pays liquidated damages.'
      },
      {
        prompt: 'What is a Deferred Payment Guarantee (DPG) and how does it function in capital goods procurement?',
        answer: 'A DPG is issued when a buyer purchases costly machinery/capital equipment on installment credit. The seller delivers machinery immediately, and the buyer agrees to pay in periodic installments with interest over 3 to 7 years. The buyer’s bank issues a DPG guaranteeing that each installment will be paid on due dates; if the buyer defaults, the bank steps in and honors the installment.'
      }
    ]
  },
  {
    index: 13,
    filename: '13_CHAPTER_13_EXPORT_FINANCE_AND_FOREX_OPERATIONS.md',
    fullTitle: 'EXPORT FINANCE, PRE/POST-SHIPMENT CREDIT & ECGC POLICIES',
    shortHeader: 'CHAPTER 13 : EXPORT CREDIT & ECGC FRAMEWORK',
    leadParagraph: 'Export credit fuels international trade through rupee and foreign currency credit lines subsidized by RBI interest equalization schemes. Covering Pre-Shipment Packing Credit and Post-Shipment discounting (bills under collection/LCs), risk mitigation relies upon Export Credit Guarantee Corporation of India (ECGC) insurance umbrellas.',
    unitKey: '12',
    practiceQuestions: {
      questions: [
        {
          q: 'What is the primary purpose of Pre-Shipment Export Credit (Packing Credit)?',
          options: ['(A) Financing the customs duties on imported luxury consumer goods', '(B) Financing the procurement of raw materials, processing, manufacturing, and packing of export goods prior to shipment', '(C) Financing freight and insurance after cargo reaches the foreign port', '(D) Liquidating the importer\'s overdraft limit']
        },
        {
          q: 'Under RBI Export Credit guidelines, what is the normal maximum period for which Pre-Shipment Packing Credit in Rupees is granted without interest penalties?',
          options: ['(A) 90 days', '(B) 180 days (extendable up to 270/360 days on merits)', '(C) 30 days', '(D) 3 years']
        },
        {
          q: 'What is the primary role of the Export Credit Guarantee Corporation of India (ECGC)?',
          options: ['(A) Providing direct working capital rupee term loans to exporters', '(B) Issuing insurance covers to Indian exporters and commercial banks against commercial and political risks of overseas buyers', '(C) Regulating foreign exchange rates under FEMA', '(D) Handling customs cargo clearance at seaports']
        }
      ],
      solutions: [
        '**(B) Financing the procurement of raw materials, processing, manufacturing, and packing of export goods prior to shipment** — Packing credit funds the production cycle before export dispatch against a valid Letter of Credit or confirmed export order.',
        '**(B) 180 days (extendable up to 270/360 days on merits)** — Standard concessional export credit period is up to 180 days, extendable by banks based on manufacturing lead times.',
        '**(B) Issuing insurance covers to Indian exporters and commercial banks against commercial and political risks of overseas buyers** — ECGC protects exporters against buyer insolvency, protracted default, and political risks (war, foreign exchange transfer restrictions).'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Distinguish between Whole Turnover Packing Credit (WTPC) and Individual Packing Credit Guarantee issued by ECGC.',
        answer: 'Individual Packing Credit Guarantee covers a specific exporter’s credit facility; the bank selects accounts to insure and pays a higher premium. Whole Turnover Packing Credit Guarantee (WTPCG) covers the entire export packing credit portfolio of the bank across all eligible exporters; premium rates are lower, and the bank must submit regular turnover declarations and cannot cherry-pick risks.'
      },
      {
        prompt: 'What is the "Gold Card Scheme" for exporters introduced by the RBI?',
        answer: 'A simplified credit scheme for creditworthy exporters with a track record of good performance: (1) In-principle revolving limit sanctioned for 3 years; (2) Automatic 20% standby ad hoc limit for sudden export orders; (3) Concessional interest rates; (4) Faster appraisal within 25 days for fresh limits and 15 days for renewals.'
      }
    ]
  },
  {
    index: 14,
    filename: '14_CHAPTER_14_PRIORITY_SECTOR_MSME_CGTMSE.md',
    fullTitle: 'PRIORITY SECTOR LENDING (PSL), MSME MANDATES & CGTMSE',
    shortHeader: 'CHAPTER 14 : PSL TARGETS, MSMES & CGTMSE',
    leadParagraph: 'Priority Sector Lending (PSL) redirects formal institutional credit toward productive, labor-intensive segments. Revised by RBI in September 2020, domestic commercial banks operate under a 40% ANBC mandate (75% for RRBs/SFBs). MSME lending incorporates revised composite criteria and the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).',
    unitKey: '13',
    practiceQuestions: {
      questions: [
        {
          q: 'Under revised RBI Master Directions, what is the mandatory sub-target for lending to Agriculture for Domestic Scheduled Commercial Banks?',
          options: ['(A) 10% of ANBC', '(B) 12% of ANBC', '(C) 18% of ANBC (with 10% earmarked for Small and Marginal Farmers)', '(D) 25% of ANBC']
        },
        {
          q: 'Under the revised MSME classification effective 1 July 2020, what are the composite investment and turnover thresholds for a "Small Enterprise"?',
          options: ['(A) Investment ≤ ₹1 Cr & Turnover ≤ ₹5 Cr', '(B) Investment ≤ ₹10 Cr & Turnover ≤ ₹50 Cr', '(C) Investment ≤ ₹50 Cr & Turnover ≤ ₹250 Cr', '(D) Investment ≤ ₹100 Cr & Turnover ≤ ₹500 Cr']
        },
        {
          q: 'Under the CGTMSE framework, up to what maximum loan limit can collateral-free credit facilities for Micro and Small Enterprises be covered?',
          options: ['(A) ₹50 Lakh', '(B) ₹1 Crore', '(C) ₹2 Crore', '(D) ₹5 Crore (enhanced limit)']
        }
      ],
      solutions: [
        '**(C) 18% of ANBC (with 10% earmarked for Small and Marginal Farmers)** — Domestic banks must allocate 18% to agriculture, of which 10% is directed to SMFs.',
        '**(B) Investment ≤ ₹10 Cr & Turnover ≤ ₹50 Cr** — Micro is ₹1Cr / ₹5Cr; Small is ₹10Cr / ₹50Cr; Medium is ₹50Cr / ₹250Cr (export turnover excluded from calculation).',
        '**(D) ₹5 Crore (enhanced limit)** — The ceiling for credit guarantee coverage under CGTMSE was enhanced from ₹2 Crore to ₹5 Crore per eligible borrower.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'What are Priority Sector Lending Certificates (PSLCs) and state their four distinct trading categories?',
        answer: 'PSLCs are market-driven tradable instruments that enable banks to achieve PSL targets without transferring the underlying credit assets or loan risk. Buyers purchase certificates to offset shortfalls; sellers earn premiums for surplus lending. Four categories: (1) PSLC Agriculture; (2) PSLC Small and Marginal Farmers (SMF); (3) PSLC Micro Enterprises; (4) PSLC General.'
      },
      {
        prompt: 'What happens when a commercial bank fails to meet its statutory PSL targets at the close of the financial year?',
        answer: 'The shortfall amount is mandatorily deposited into rural and development infrastructure funds: (1) Rural Infrastructure Development Fund (RIDF) established with NABARD; (2) Urban Infrastructure Development Fund (UIDF) / Micro Enterprises development funds with SIDBI, MUDRA, or NHB. These funds carry low yields penalizing defaulting banks.'
      }
    ]
  },
  {
    index: 15,
    filename: '15_CHAPTER_15_NPA_MANAGEMENT_SARFAESI_DRT_IBC.md',
    fullTitle: 'NPA MANAGEMENT, ASSET CLASSIFICATION, SARFAESI ACT & DRT',
    shortHeader: 'CHAPTER 15 : NPAS, SARFAESI ACT & RECOVERY LAWS',
    leadParagraph: 'Asset classification adheres to the 90-day overdue benchmark, progressing from Special Mention Accounts (SMA-0/1/2) to Sub-standard, Doubtful, and Loss assets. Recovery enforcement utilizes the SARFAESI Act 2002 (enforcement without court intervention), Recovery of Debts and Bankruptcy Act 1993 (DRT), and the Insolvency and Bankruptcy Code 2016 (IBC).',
    unitKey: '14',
    practiceQuestions: {
      questions: [
        {
          q: 'Under RBI Prudential Norms, an account is classified as a "Sub-standard Asset" when it has remained in the Non-Performing Asset (NPA) category for a period of up to:',
          options: ['(A) 90 days', '(B) 12 months (≤ 12 months)', '(C) 18 months', '(D) 3 years']
        },
        {
          q: 'Under Section 13(2) of the SARFAESI Act 2002, what is the mandatory notice period granted to a defaulting borrower to discharge liabilities before the bank takes enforcement measures?',
          options: ['(A) 15 days', '(B) 30 days', '(C) 60 days', '(D) 90 days']
        },
        {
          q: 'What is the minimum pecuniary jurisdiction threshold for commercial banks and financial institutions to file an original recovery application before the Debt Recovery Tribunal (DRT)?',
          options: ['(A) ₹5 Lakh', '(B) ₹10 Lakh', '(C) ₹20 Lakh', '(D) ₹1 Crore']
        }
      ],
      solutions: [
        '**(B) 12 months (≤ 12 months)** — An asset remains Sub-standard for ≤ 12 months, after which it slips into the Doubtful category.',
        '**(C) 60 days** — Section 13(2) requires a 60-day demand notice. If unpaid, Section 13(4) empowers the bank to take physical possession of secured assets.',
        '**(C) ₹20 Lakh** — Central Government raised the pecuniary threshold for filing original applications before DRTs from ₹10 Lakh to ₹20 Lakh.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Detail the mandatory provisioning percentages for Sub-standard, Doubtful (D1, D2, D3), and Loss assets under RBI Prudential Norms.',
        answer: '1. Sub-standard: 15% for secured exposure; 25% for unsecured exposure (ab initio). 2. Doubtful 1 (up to 1 yr): 25% of secured + 100% of unsecured. 3. Doubtful 2 (1 to 3 yrs): 40% of secured + 100% of unsecured. 4. Doubtful 3 (> 3 yrs): 100% of secured + 100% of unsecured. 5. Loss Assets: 100% write-off or 100% provision.'
      },
      {
        prompt: 'State the types of properties and claims against which the SARFAESI Act 2002 CANNOT be enforced under Section 31.',
        answer: 'Section 31 exclusions: (1) Any lien on goods or pledge of movables; (2) Security interest created in agricultural land; (3) Properties where the remaining unpaid debt is < 20% of principal and interest; (4) Debts where total outstanding claim is < ₹1 Lakh; (5) Any vessel or aircraft security.'
      }
    ]
  },
  {
    index: 16,
    filename: '16_CHAPTER_16_CREDIT_MATH_AND_ELECTRONIC_TAT_RULES.md',
    fullTitle: 'CREDIT APPRAISAL MATHEMATICS & FAILED TRANSACTION TAT RULES',
    shortHeader: 'CHAPTER 16 : CREDIT MATH & ELECTRONIC TAT NORMS',
    leadParagraph: 'Sound banking balances mathematical financial appraisal with regulatory customer protection frameworks. Ratio analysis (Current Ratio, Debt-Equity, TOL/TNW) validates solvency, while the RBI Harmonisation of Turn Around Time (TAT) and customer compensation framework (2019) imposes strict auto-reversal and per-day penalty mandates for failed digital transactions.',
    unitKey: '20',
    practiceQuestions: {
      questions: [
        {
          q: 'Under RBI’s Harmonisation of Turn Around Time (TAT) framework, what is the mandatory penalty payable to a customer for delay beyond the stipulated TAT (T+1/T+5 days) in failed electronic transactions?',
          options: ['(A) ₹50 per day of delay', '(B) ₹100 per day of delay', '(C) ₹500 flat compensation', '(D) Bank savings interest rate']
        },
        {
          q: 'If a company has Total Current Assets of ₹800 Lakh, Other Current Liabilities of ₹200 Lakh, and Working Capital Term Loan of ₹100 Lakh, what is the Maximum Permissible Bank Finance under Tandon Method II?',
          options: ['(A) ₹600 Lakh', '(B) ₹400 Lakh', '(C) ₹450 Lakh', '(D) ₹500 Lakh']
        },
        {
          q: 'In ATM cash withdrawal transactions where the customer’s account is debited but cash is not dispensed, what is the statutory auto-reversal TAT (T being the date of transaction)?',
          options: ['(A) T + 1 day', '(B) T + 3 days', '(C) T + 5 days', '(D) T + 7 days']
        }
      ],
      solutions: [
        '**(B) ₹100 per day of delay** — RBI mandates banks to pay ₹100 per day penalty directly to the customer’s account if auto-reversal is not completed within the prescribed TAT.',
        '**(B) ₹400 Lakh** — Tandon Method II formula: MPBF = 0.75 * (TCA) - OCL = (0.75 * 800) - 200 = 600 - 200 = ₹400 Lakh.',
        '**(C) T + 5 days** — Auto-reversal for failed ATM transactions must be completed within Proactive Reversal TAT of T + 5 calendar days.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Formulate the Tangible Net Worth (TNW) and Total Outside Liabilities to Tangible Net Worth (TOL/TNW) ratio.',
        answer: 'TNW = Paid-up Capital + Free Reserves - Intangible Assets (Goodwill, patents) - Accumulated Losses. TOL/TNW = (Long-Term Debt + Short-Term Debt + Current Liabilities) / TNW. TOL/TNW measures the financial leverage and reliance on external creditors relative to owner equity; bankers prefer TOL/TNW ≤ 3.0:1 or 4.0:1.'
      },
      {
        prompt: 'State the Harmonisation TAT and compensation rules for failed UPI and IMPS transactions.',
        answer: 'UPI / IMPS failed transactions: TAT is T + 1 calendar day for auto-reversal into beneficiary or remitter account. If the bank fails to reverse within T + 1 day, it is statutorily liable to pay ₹100 per day penalty to the customer without requiring a formal grievance petition.'
      }
    ]
  },
  // MODULE C
  {
    index: 17,
    filename: '17_CHAPTER_17_CBS_DATA_CENTERS_DISASTER_RECOVERY.md',
    fullTitle: 'BANK COMPUTERIZATION, CORE BANKING (CBS) & DATA CENTERS',
    shortHeader: 'CHAPTER 17 : CBS ARCHITECTURE & DATA CENTERS',
    leadParagraph: 'Modern banking operates atop centralized database systems where branch offices act as distributed delivery nodes. Core Banking Solutions (CBS) demand high-availability infrastructure partitioned into Primary Data Centers (PDC), Near Disaster Recovery Sites, and Far Disaster Recovery Sites (DRS) governed by strict RPO and RTO metrics.',
    unitKey: '15',
    practiceQuestions: {
      questions: [
        {
          q: 'In banking business continuity and disaster recovery planning, what does "Recovery Point Objective" (RPO) measure?',
          options: ['(A) The maximum acceptable duration of system downtime before service is restored', '(B) The maximum acceptable age of data that must be recovered, measuring permissible data loss in time', '(C) The financial cost of hardware procurement', '(D) The percentage of network bandwidth utilized']
        },
        {
          q: 'What is the technological reason why a Far Disaster Recovery Site (DRS) is geographically located in a different seismic zone far away from the Primary Data Center (PDC)?',
          options: ['(A) To reduce municipal power tariffs', '(B) To protect against regional disasters (earthquakes, floods, grid failures) wiping out both data centers simultaneously', '(C) To comply with state sales tax exemptions', '(D) To enable faster branch broadband connectivity']
        },
        {
          q: 'Which protocol is commonly utilized for real-time synchronous data replication between a Primary Data Center and a Near Disaster Recovery Site?',
          options: ['(A) Batch FTP file transfer', '(B) Fibre Channel / Storage Area Network (SAN) synchronous replication', '(C) Dial-up modem connection', '(D) Public internet email attachments']
        }
      ],
      solutions: [
        '**(B) The maximum acceptable age of data that must be recovered, measuring permissible data loss in time** — RPO measures acceptable data loss (ideally near-zero for financial ledger systems); RTO measures acceptable downtime.',
        '**(B) To protect against regional disasters (earthquakes, floods, grid failures) wiping out both data centers simultaneously** — Geographical separation ensures business continuity even if an entire metropolitan area or power grid suffers catastrophic collapse.',
        '**(B) Fibre Channel / Storage Area Network (SAN) synchronous replication** — Near DR sites use synchronous replication over high-speed dedicated optical links ensuring zero data loss (RPO = 0).'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Distinguish between Recovery Point Objective (RPO) and Recovery Time Objective (RTO).',
        answer: 'RPO (Recovery Point Objective): Measures the maximum tolerable data loss expressed in time; defines how much transactional data the bank can afford to reconstruct manually if the primary site crashes. RTO (Recovery Time Objective): Measures the maximum tolerable downtime; defines how quickly secondary systems must be brought live to resume customer transactions.'
      },
      {
        prompt: 'What are the core functional modules integrated into a comprehensive Core Banking Solution (CBS)?',
        answer: 'Core modules: (1) General Ledger (GL) & Financial Accounting; (2) Deposit Operations (CASA, Term Deposits); (3) Loans & Credit Management; (4) Trade Finance & Forex; (5) Treasury Management; (6) Payment Gateway Integration (NEFT, RTGS, UPI); (7) Customer Relationship Management (CRM); (8) Regulatory Reporting & MIS Engine.'
      }
    ]
  },
  {
    index: 18,
    filename: '18_CHAPTER_18_ELECTRONIC_PAYMENTS_NPCI_DIGITAL_RUPEE.md',
    fullTitle: 'ELECTRONIC PAYMENT SYSTEMS, NPCI PLATFORMS & DIGITAL RUPEE (e₹)',
    shortHeader: 'CHAPTER 18 : PAYMENT SYSTEMS & NPCI PLATFORMS',
    leadParagraph: 'Retail and wholesale payments transitioned from paper clearing to real-time gross and net settlement architectures owned by the RBI and National Payments Corporation of India (NPCI). Spanning RTGS, NEFT, IMPS, UPI, and the sovereign Central Bank Digital Currency (CBDC / Digital Rupee), digital payments operate under statutory oversight of the PSS Act 2007.',
    unitKey: '16',
    practiceQuestions: {
      questions: [
        {
          q: 'What is the minimum transaction amount required for processing a payment through Real Time Gross Settlement (RTGS)?',
          options: ['(A) ₹50,000', '(B) ₹1,00,000', '(C) ₹2,00,000', '(D) No minimum limit']
        },
        {
          q: 'National Electronic Funds Transfer (NEFT) operates on which operational settlement cycle and availability schedule?',
          options: ['(A) Hourly batches during bank working hours', '(B) Half-hourly settlement batches, operating 24x7x365', '(C) Continuous gross settlement', '(D) End-of-day netting at 5:00 PM']
        },
        {
          q: 'What distinguishes Central Bank Digital Currency (CBDC / e₹) from private electronic bank balances and commercial UPI transactions?',
          options: ['(A) CBDC is a direct sovereign liability of the Reserve Bank of India, not a commercial bank liability', '(B) CBDC requires physical gold backing at branch counters', '(C) CBDC earns higher interest than savings deposits', '(D) CBDC transactions cannot be performed without internet access']
        }
      ],
      solutions: [
        '**(C) ₹2,00,000** — RTGS is reserved for high-value wholesale transactions with a minimum limit of ₹2,00,000 and zero upper cap. NEFT has no minimum limit.',
        '**(B) Half-hourly settlement batches, operating 24x7x365** — NEFT operates around the clock in 48 half-hourly batches daily.',
        '**(A) CBDC is a direct sovereign liability of the Reserve Bank of India, not a commercial bank liability** — Physical currency and CBDC are sovereign legal tender appearing on the RBI\'s balance sheet, eliminating commercial bank credit risk.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Construct the comparative matrix for RTGS vs NEFT vs IMPS vs UPI across: Settlement Mode, Minimum / Maximum Limits, and Operating Hours.',
        answer: '1. RTGS: Gross real-time; Min ₹2 Lakh / No Max; 24x7x365. 2. NEFT: Deferred net settlement (half-hourly batches); Min ₹1 / No Max; 24x7x365. 3. IMPS: Immediate real-time net; Min ₹1 / Max ₹5 Lakh; 24x7x365. 4. UPI: Immediate real-time net (VPA/mobile); Min ₹1 / Max ₹1 Lakh to ₹5 Lakh (standard ₹1L; capital markets/hospitals/institutions ₹5L); 24x7x365.'
      },
      {
        prompt: 'What are the two distinct operational variants of Central Bank Digital Currency (CBDC) launched by the RBI?',
        answer: '1. CBDC-Wholesale (e₹-W): Interbank wholesale settlement limited to financial institutions for secondary market transactions in Government Securities. 2. CBDC-Retail (e₹-R): Digital token representing sovereign currency issued to the public through two-tier distribution by commercial banks, held in digital token wallets.'
      }
    ]
  },
  {
    index: 19,
    filename: '19_CHAPTER_19_CYBER_SECURITY_ISO_IT_ACT.md',
    fullTitle: 'CYBER SECURITY IN BANKS, ISO 27001 & IT ACT 2000',
    shortHeader: 'CHAPTER 19 : CYBER SECURITY & IT LEGISLATION',
    leadParagraph: 'Digital banking infrastructure faces persistent advanced persistent threats (APTs), ransomware, and phishing. Regulated under the RBI Cyber Security Framework (2016), Information Technology Act 2000 (amended 2008), and ISO/IEC 27001 standards, banks maintain 24x7 Security Operations Centers (SOC) with strict mandatory incident reporting windows.',
    unitKey: '17',
    practiceQuestions: {
      questions: [
        {
          q: 'Under RBI Cyber Security Framework guidelines, within what maximum timeline must a commercial bank report any unusual cybersecurity incident or breach to the RBI?',
          options: ['(A) Within 2 to 6 hours of detection', '(B) Within 24 hours of investigation completion', '(C) Within 7 working days', '(D) In the quarterly compliance report']
        },
        {
          q: 'Which section of the Information Technology Act 2000 penalizes identity theft and fraudulent use of another person’s electronic signature or password?',
          options: ['(A) Section 43A', '(B) Section 66C', '(C) Section 66E', '(D) Section 72A']
        },
        {
          q: 'What is the role of the Indian Computer Emergency Response Team (CERT-In) under Section 70B of the Information Technology Act?',
          options: ['(A) Commercial audit of bank loan portfolios', '(B) National apex agency for collecting, analyzing, and disseminating cybersecurity incidents and emergency response', '(C) Setting bank interest subvention rates', '(D) Issuing credit cards to consumers']
        }
      ],
      solutions: [
        '**(A) Within 2 to 6 hours of detection** — Banks must report cyber incidents to the RBI within 2 to 6 hours of detection to allow coordinated containment across the financial sector.',
        '**(B) Section 66C** — Section 66C penalizes identity theft with imprisonment up to 3 years and fine up to ₹1 Lakh.',
        '**(B) National apex agency for collecting, analyzing, and disseminating cybersecurity incidents and emergency response** — CERT-In coordinates national cybersecurity incident response and mandates 6-hour incident reporting for critical entities.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'What are the core components of the "CIA Triad" in banking information security?',
        answer: '1. Confidentiality: Protecting sensitive financial and customer data from unauthorized access or disclosure (encryption, access controls). 2. Integrity: Guarding against unauthorized modification, deletion, or tampering of financial ledgers (hashing, checksums, digital signatures). 3. Availability: Ensuring authenticated users have timely and uninterrupted access to banking systems (redundant infrastructure, DDoS mitigation).'
      },
      {
        prompt: 'Explain the role of a 24x7 Security Operations Center (SOC) and Security Information and Event Management (SIEM) in banking.',
        answer: 'A SOC is a centralized facility staffed by cybersecurity analysts monitoring bank networks in real-time. It uses SIEM software to aggregate, correlate, and analyze log events from firewalls, servers, databases, and ATMs, triggering automated alerts on detecting anomalous behavioral patterns, unauthorized logins, or malware propagation.'
      }
    ]
  },
  // MODULE D
  {
    index: 20,
    filename: '20_CHAPTER_20_BANKING_ETHICS_CUSTOMER_RIGHTS.md',
    fullTitle: 'BANKING ETHICS, CUSTOMER RIGHTS CHARTER & GOVERNANCE',
    shortHeader: 'CHAPTER 20 : ETHICS & CUSTOMER RIGHTS CHARTER',
    leadParagraph: 'Banking functions as a high-trust fiduciary institution requiring ethical leadership, fair business practices, and sound corporate governance. Institutionalized via the RBI Charter of Customer Rights (2015), the Banking Ombudsman Scheme (Integrated Ombudsman 2021), and the Companies Act 2013, ethical banking prevents predatory misselling and insider malfeasance.',
    unitKey: '18',
    practiceQuestions: {
      questions: [
        {
          q: 'Which of the following is NOT one of the 5 core pillars of the RBI Charter of Customer Rights (2015)?',
          options: ['(A) Right to Fair Treatment', '(B) Right to Transparent, Fair and Honest Dealing', '(C) Right to Unconditional Loan Approval', '(D) Right to Suitability and Privacy']
        },
        {
          q: 'Under the RBI Integrated Ombudsman Scheme (2021), what is the maximum compensation an Ombudsman can award for mental agony and harassment to a complainant?',
          options: ['(A) Up to ₹50,000', '(B) Up to ₹1,00,000', '(C) Up to ₹5,00,000', '(D) Up to ₹20,00,000']
        },
        {
          q: 'What is the purpose of establishing "Chinese Walls" inside universal banking institutions?',
          options: ['(A) Physically segregating branches from currency chests', '(B) Ethical information barriers preventing sensitive price-sensitive data from flowing between commercial lending and treasury/investment advisory arms', '(C) Erecting border surveillance infrastructure', '(D) Enforcing strict dress codes for customer executives']
        }
      ],
      solutions: [
        '**(C) Right to Unconditional Loan Approval** — The 5 pillars are: (1) Right to Fair Treatment; (2) Right to Transparency, Fair and Honest Dealing; (3) Right to Suitability; (4) Right to Privacy; (5) Right to Grievance Redress and Compensation.',
        '**(B) Up to ₹1,00,000** — Ombudsman can award up to ₹20 Lakh for consequential financial loss and an additional compensation up to ₹1 Lakh for mental agony and loss of customer time.',
        '**(B) Ethical information barriers preventing sensitive price-sensitive data from flowing between commercial lending and treasury/investment advisory arms** — Chinese Walls eliminate conflicts of interest and prevent insider trading.'
      ]
    },
    activeRecallCards: [
      {
        prompt: 'Enumerate the 5 basic rights protected under the RBI Charter of Customer Rights (2015).',
        answer: '1. Right to Fair Treatment: Freedom from unfair discrimination on grounds of gender, age, religion, caste, or disability. 2. Right to Transparent, Fair and Honest Dealing: Clear, non-deceptive terms, tariff schedules, and contracts. 3. Right to Suitability: Products offered must match customer financial needs and risk appetite (prevents misselling). 4. Right to Privacy: Confidential customer data protected from unauthorized leakage. 5. Right to Grievance Redress: Timely, transparent grievance redressal.'
      },
      {
        prompt: 'Explain the "Whistleblower Policy" mandated under Section 177 of the Companies Act 2013 and RBI governance directives.',
        answer: 'A statutory vigil mechanism enabling employees, directors, and stakeholders to report genuine concerns, unethical practices, suspected fraud, or violations of code of conduct directly to the Audit Committee without fear of victimization, demotion, or retaliation. Ensures institutional protection and confidentiality for reporting personnel.'
      }
    ]
  },
  // CAPSTONE REVISION VAULT
  {
    index: 21,
    filename: '21_CHAPTER_21_THE_GRAND_SYNTHESIS_PPB_REVISION_VAULT.md',
    fullTitle: 'THE GRAND SYNTHESIS: IIBF PAPER 2 (PPB) MASTER REVISION VAULT',
    shortHeader: 'CHAPTER 21 : PPB MASTER REVISION VAULT',
    leadParagraph: 'This capstone synthesis unifies the four modules of IIBF Paper 2 (Principles & Practices of Banking) into a high-yield active revision vault. It brings together master statutory matrices across legal security charges, court orders, recovery forums, the 50 Deadliest PPB Examiner Traps, and active recall diagnostics.',
    unitKey: 'CAPSTONE',
    activeRecallCards: [
      {
        prompt: 'Construct the master comparison matrix across SARFAESI Act, Debt Recovery Tribunal (DRT), and Insolvency & Bankruptcy Code (IBC).',
        answer: '1. SARFAESI: Non-court out-of-court enforcement; secured creditors only; NPA account required; Sec 13(2) 60-day notice; borrower must not have paid 80% of debt; excludes agri land. 2. DRT: Specialized judicial recovery tribunal; debt ≥ ₹20 Lakh; secured or unsecured; recovery certificate issued; Sec 19 RDDBFI Act. 3. IBC: Corporate Insolvency Resolution Process; default ≥ ₹1 Crore; operational or financial creditors; time-bound 330-day statutory cap; company resolution or liquidation.'
      },
      {
        prompt: 'State the critical statutory time limits for: (1) Cheque legal demand notice; (2) RoC charge registration; (3) SARFAESI Sec 13(2) notice; (4) UCPDC document check; (5) High-risk Re-KYC.',
        answer: '(1) Cheque notice: 30 days of dishonour memo; (2) RoC charge: 30 days of creation (+30 days condonation); (3) SARFAESI 13(2): 60 days; (4) UCPDC 600 doc check: 5 banking days; (5) High-risk Re-KYC: Every 2 years.'
      }
    ]
  }
];

console.log(`\n======================================================`);
console.log(`GENERATING ALL 21 CHAPTER MARKDOWNS FOR IIBF PAPER 2 (PPB)`);
console.log(`======================================================\n`);

for (const spec of CHAPTER_SPECS) {
  const filePath = path.join(OUT_DIR, spec.filename);
  let content = `# ${spec.fullTitle}\n\n`;
  content += `${spec.leadParagraph}\n\n`;

  let sectionIdx = 1;

  if (spec.unitKey !== 'CAPSTONE') {
    const unitBody = allUnits[spec.unitKey] || '';
    content += `## § ${spec.index}.${sectionIdx} Comprehensive Operational & Legal Analysis\n\n`;
    sectionIdx++;
    content += `${unitBody}\n\n`;

    // Append Practice Questions if present
    if (spec.practiceQuestions) {
      content += `### Practice Questions & Solved Numerical Drills (IIBF Pattern)\n\n`;
      spec.practiceQuestions.questions.forEach((qItem, qIdx) => {
        content += `**Q${qIdx + 1}:** ${qItem.q}\n`;
        qItem.options.forEach(opt => {
          content += `• ${opt}\n`;
        });
        content += `\n`;
      });

      content += `#### Solutions & Detailed Explanations\n\n`;
      spec.practiceQuestions.solutions.forEach((sol, solIdx) => {
        content += `${solIdx + 1}. ${sol}\n\n`;
      });
    }
  } else {
    // CAPSTONE SYNTHESIS VAULT
    content += `## § 21.1 Master Legal & Regulatory Comparison Matrices\n\n`;
    sectionIdx++;
    content += `### 1. Comparative Matrix of the 5 Primary Security Charges\n\n`;
    content += `| Parameter | Pledge | Hypothecation | Mortgage | Banker's Lien | Assignment |\n`;
    content += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
    content += `| **Nature of Asset** | Movable Goods | Movable Goods / Stocks | Immovable Property | Goods / Securities | Actionable Claims / Policies |\n`;
    content += `| **Possession** | With Bank (Bailment) | With Borrower | With Borrower (Usually) | With Bank (Lawful) | Transferred in Law |\n`;
    content += `| **Governing Statute** | Contract Act §172 | SARFAESI Act §2(1)(n) | T.P. Act 1882 §58 | Contract Act §171 | T.P. Act 1882 §130 |\n`;
    content += `| **Right of Sale** | Yes, after reasonable notice | Yes, under SARFAESI / Court | Yes, through court decree / SARFAESI | Retain only (Implied pledge) | Sue in own name |\n\n`;

    content += `### 2. Comparative Recovery Forums: Lok Adalat vs. DRT vs. NCLT (IBC)\n\n`;
    content += `| Parameter | Lok Adalat | Debt Recovery Tribunal (DRT) | National Company Law Tribunal (IBC) |\n`;
    content += `| :--- | :--- | :--- | :--- |\n`;
    content += `| **Pecuniary Limit** | Up to ₹20 Lakh | Minimum ₹20 Lakh | Minimum ₹1 Crore default |\n`;
    content += `| **Governing Statute** | Legal Services Auth. Act 1987 | RDDBFI Act 1993 | Insolvency & Bankruptcy Code 2016 |\n`;
    content += `| **Nature of Remedy** | Compromise / Settlement | Adjudication & Recovery Certificate | Corporate Insolvency Resolution / Liquidation |\n`;
    content += `| **Appeal Forum** | No appeal lies (Final & binding) | DRAT (50% pre-deposit) | NCLAT (National Company Law Appellate) |\n\n`;

    content += `## § 21.2 Top 50 IIBF Paper 2 High-Yield Traps & Examiner Pitfalls\n\n`;
    sectionIdx++;
    content += `1. **Safe Custody vs Locker:** Safe Custody is Bailment (Bank has possession); Locker is Lease/License (Bank has NO possession or knowledge of contents).
2. **Banker's General Lien:** Does NOT apply to safe custody articles, specific purpose deposits, or shares left by mistake.
3. **Clayton's Rule:** In unbroken running overdrafts, earliest deposits extinguish earliest debits, discharging old guarantors unless the account is broken.
4. **Minor Contractual Capacity:** A minor’s contract is void ab initio; a minor cannot be a full partner, but can be admitted to benefits with consent of all partners.
5. **Minor Sole Account:** Literate minor of age 10+ can operate savings account independently in own name.
6. **HUF Liability:** Coparceners liable only to extent of undivided family property; Karta is personally liable for family debts.
7. **Companies Act Charge RoC:** Must be registered within 30 days under Section 77; extension permitted up to additional 30 days (total 60 days).
8. **Turquand’s Rule:** Protects outsiders against internal management irregularities; does not protect against forged signatures.
9. **Garnishee Order Scope:** Attaches debts due or accruing due at time of service; does NOT attach future credits or innocent joint accounts.
10. **Attachment Order Scope:** Income Tax Section 226(3) order attaches both present balances and future deposits until paid.
11. **Nomination Legal Nature:** Nominee receives funds as a fiduciary trustee for legal heirs; nomination does not alter law of succession.
12. **Deposit Nomination Limit:** Only 1 nominee allowed for deposit accounts under Section 45ZA (2 allowed only for joint lockers).
13. **Locker Compensation Cap:** Bank liability capped at 100 times annual locker rent for loss caused by bank negligence/burglary.
14. **Unpaid Locker Rent:** Bank can break open after 3 consecutive years of non-payment following 6-month notice and press advertisement.
15. **Counterfeit Notes:** NEVER return to presenter; impound immediately and issue dated receipt. FIR required if ≥ 5 pieces in a single transaction.
16. **Mutilated Note Area:** Full value if single largest piece ≥ 80% (for ₹50+ notes); half value if ≥ 40% and < 80%.
17. **Cheque Drawer Forgery:** Payment on forged drawer signature is a total nullity; bank cannot debit customer account under any circumstance.
18. **Collecting Banker Protection:** Section 131 NI Act requires good faith, no negligence, crossed cheque, and collection for an established customer.
19. **Cheque Dishonour Notice:** Payee must issue written demand notice within 30 days of dishonour memo; drawer has 15 days to pay.
20. **Tandon Method I vs II:** Method I requires 25% of WCG from NWC (CR 1.17); Method II requires 25% of TCA from NWC (CR 1.33).
21. **Nayak Committee Limit:** For MSME working capital limits up to ₹5 Crore, bank finance is minimum 20% of projected annual turnover.
22. **DSCR Benchmark:** Measures debt servicing capability for term loans; ideal benchmark is 1.50 to 2.00; DSCR < 1.0 means cash deficit.
23. **Equitable Mortgage:** Created by deposit of original title deeds in notified towns; no registered deed required under Section 58(f).
24. **SARFAESI Hypothecation:** Charge on movable property without delivery of possession (Section 2(1)(n)).
25. **UCPDC 600 Irrevocability:** All LCs are irrevocably binding even if silent on the face of the document.
26. **UCPDC Examination Time:** Maximum 5 banking days following day of presentation to accept or refuse documents.
27. **Red Clause LC:** Grants pre-shipment advance to the beneficiary before cargo is shipped.
28. **Green Clause LC:** Grants pre-shipment advance AND storage/warehousing finance at foreign seaport.
29. **Bank Guarantee Injunction:** Courts will not grant injunction against unconditional BG except for egregious fraud or irretrievable harm.
30. **Guarantee Claim Period:** Minimum claim limitation period cannot be less than 1 year under Section 28 Contract Act.
31. **Packing Credit Tenor:** Granted normally for 180 days; extendable based on export cycle.
32. **ECGC Role:** Insures Indian exporters and commercial banks against overseas buyer insolvency and sovereign transfer delays.
33. **Domestic Bank PSL Target:** 40% of ANBC or CEOBE; 18% for Agriculture (10% SMF), 8% Micro, 12% Weaker Sections.
34. **RRB & SFB PSL Target:** 75% of ANBC or CEOBE.
35. **MSME Small Enterprise:** Investment in Plant & Machinery ≤ ₹10 Crore AND Turnover ≤ ₹50 Crore (excluding exports).
36. **CGTMSE Limit:** Enhanced collateral-free credit guarantee limit is ₹5 Crore per eligible MSE borrower.
37. **Sub-standard Asset Period:** Remains sub-standard for ≤ 12 months with 15% secured provision.
38. **Doubtful Asset Provisions:** D1 (25% secured), D2 (40% secured), D3 (100% secured); 100% provision for unsecured portion in all.
39. **SARFAESI Notice:** Section 13(2) gives 60 days demand notice; Section 13(4) allows takeover of management/possession.
40. **SARFAESI Exemptions:** Agricultural land, debts < ₹1 Lakh, and cases where balance debt < 20% of original debt are exempt.
41. **Failed ATM TAT:** T + 5 days for auto-reversal; penalty of ₹100 per day of delay payable to customer.
42. **Failed UPI / IMPS TAT:** T + 1 day auto-reversal; penalty of ₹100 per day of delay beyond T + 1.
43. **RTGS Minimum:** Minimum ₹2,00,000; operates 24x7x365 on continuous gross settlement.
44. **NEFT Mechanics:** Half-hourly settlement batches (48 batches daily) on 24x7x365 schedule; zero minimum and zero maximum limit.
45. **CBDC Legal Status:** Sovereign liability of RBI directly on central bank balance sheet; not a bank deposit.
46. **Cyber Incident Window:** Mandatory reporting to RBI within 2 to 6 hours of incident detection.
47. **IT Act Sec 66C:** Identity theft, fraudulent use of electronic signatures/passwords (3 years imprisonment).
48. **Customer Rights Charter:** 5 pillars: Fair Treatment, Transparent Dealing, Suitability, Privacy, and Grievance Redressal.
49. **Integrated Ombudsman Compensation:** Up to ₹20 Lakh for financial loss + up to ₹1 Lakh for mental agony/harassment.
50. **Chinese Walls Purpose:** Ethical barriers preventing non-public material information flow between lending and capital market arms.\n\n`;
  }

  // Active Recall Diagnostic Vault
  if (spec.activeRecallCards.length > 0) {
    content += `## § ${spec.index}.${sectionIdx} Active Recall Diagnostic Vault\n\n`;
    for (const card of spec.activeRecallCards) {
      content += `<details>\n<summary>${card.prompt}</summary>\n${card.answer}\n</details>\n\n`;
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Chapter ${String(spec.index).padStart(2, '0')}: ${spec.filename} (${(content.length / 1024).toFixed(1)} KB)`);
}

console.log(`\n======================================================`);
console.log(`ALL 21 CHAPTERS GENERATED IN: ${OUT_DIR}`);
console.log(`======================================================\n`);
