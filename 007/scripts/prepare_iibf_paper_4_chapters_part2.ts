import * as fs from 'fs';
import * as path from 'path';

const OUT_DIR = path.resolve('007', 'notes', 'iibf_dbf', 'paper_4_chapters');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

export interface ChapterSpec {
  index: number;
  filename: string;
  fullTitle: string;
  shortHeader: string;
  leadParagraph: string;
  content: string;
  practiceQuestions: {
    questions: Array<{ q: string; options: string[] }>;
    solutions: string[];
  };
  activeRecallCards: Array<{ prompt: string; answer: string }>;
}

const CHAPTERS: ChapterSpec[] = [
  // CHAPTER 7
  {
    index: 7,
    filename: '07_CHAPTER_07_PAYMENT_CARDS_CREDIT_DEBIT.md',
    fullTitle: 'PAYMENT CARDS: CREDIT CARDS, CHARGE CARDS & PREPAID INSTRUMENTS',
    shortHeader: 'CHAPTER 07 : PAYMENT CARDS & CREDIT CARDS',
    leadParagraph: 'Plastic and virtual payment cards form the digital backbone of consumer retail payments. From debit cards linking directly to bank CASA balances to revolving credit cards with interest-free grace periods and closed/open-loop prepaid instruments (PPIs), card operations generate vital interchange fees while demanding strict risk management under RBI Master Directions on Card Issuance and Conduct.',
    content: `
## 1. Master Classification: Credit Cards vs Charge Cards vs Debit Cards

| Card Type | Funding Source & Settlement Dynamic | Grace Period & Revolving Credit Features |
| :--- | :--- | :--- |
| **Debit Card** | Linked directly to depositor savings/current account; real-time account debit | **No credit feature**; immediate electronic settlement of transaction funds. |
| **Credit Card** | Bank sanctioned revolving credit limit; billed monthly | **Interest-Free Grace Period (20 to 50 days)**; permits revolving balance by paying **Minimum Amount Due (MAD)**. |
| **Charge Card** | Line of credit issued to cardholder | Cardholder **must pay entire statement balance in full** each month; **no revolving credit allowed**. |
| **Prepaid Payment Instrument (PPI)** | Pre-funded card/wallet (e.g., Gift card, Metro smart card) | Spend limited strictly to pre-loaded value (Closed, Semi-Closed, or Open Loop). |

## 2. Credit Card Mechanics & Revolving Credit Economics

- **Minimum Amount Due (MAD):**
  - Standard industry benchmark: **5% of the total outstanding statement balance** (plus taxes, fees, and overdue amounts).
  - *Critical Trap:* Paying only MAD avoids late fees and negative CIBIL reporting, but **cancels the interest-free grace period** on all new purchases. Interest is charged on the entire balance from the transaction date.
- **Card-Not-Present (CNP) Security:** Mandatory Additional Factor of Authentication (AFA / OTP) for all domestic online transactions.
- **Contactless (NFC) Tap-and-Pay Cap:** Up to **₹5,000 per transaction** permitted without entering PIN (RBI revised limit).

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. A **Charge Card** does not allow revolving credit; the cardholder must repay **100% of the statement balance** by the due date.
> 2. The contactless tap-and-pay limit without PIN is **₹5,000** (raised from ₹2,000).
> 3. Minimum Amount Due (MAD) is typically **5%** of the outstanding bill balance.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'What is the primary operational difference between a Credit Card and a Charge Card?',
          options: [
            '(A) A Credit Card requires full payment each month; a Charge Card allows revolving credit',
            '(B) A Charge Card requires 100% payment of statement balance by due date with no revolving credit',
            '(C) A Charge Card is linked directly to a savings deposit account',
            '(D) Credit cards cannot be used for international payments',
          ],
        },
        {
          q: 'Under current Reserve Bank of India directions, what is the maximum per-transaction limit for contactless card transactions (NFC tap-and-pay) without requiring a PIN?',
          options: ['(A) ₹2,000', '(B) ₹3,000', '(C) ₹5,000', '(D) ₹10,000'],
        },
        {
          q: 'If a credit card holder pays only the Minimum Amount Due (MAD) each month, what is the consequence?',
          options: [
            '(A) The account is classified as NPA immediately',
            '(B) The interest-free grace period on new purchases is forfeited, and interest accrues from the purchase date',
            '(C) The bank cancels the card immediately',
            '(D) No interest is charged on the remaining balance',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) A Charge Card requires 100% payment of statement balance by due date with no revolving credit. Unlike credit cards, charge cards do not permit rolling over an unpaid balance.',
        'Q2 Correct Answer: (C) ₹5,00,000 per transaction is the relaxed contactless limit without PIN.',
        'Q3 Correct Answer: (B) The interest-free grace period on new purchases is forfeited, and interest accrues from the purchase date. Revolving credit triggers finance charges from the actual transaction dates.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What constitutes the "Grace Period" on a credit card, and how can it range up to 50 days?',
        answer: 'The grace period is the interest-free window between a transaction date and the payment due date. If a transaction occurs on day 1 of a 30-day billing cycle, and the payment due date is 20 days after the statement date, the cardholder enjoys 30 + 20 = 50 interest-free days.',
      },
      {
        prompt: 'What is the regulatory rule regarding unsolicited credit card issuance or limit enhancements under RBI directions?',
        answer: 'Banks are strictly prohibited from issuing unsolicited credit cards or unsolicited credit limit upgrades. If an unsolicited card is activated without explicit consent, the issuer must pay a penalty of twice the billed amount to the customer.',
      },
    ],
  },

  // CHAPTER 8
  {
    index: 8,
    filename: '08_CHAPTER_08_REMITTANCE_PRODUCTS_DIGITAL_CHANNELS.md',
    fullTitle: 'REMITTANCE PRODUCTS, NPCI DIGITAL RAILS & CHANNEL MIGRATION',
    shortHeader: 'CHAPTER 08 : REMITTANCE & DIGITAL RAILS',
    leadParagraph: 'Remittance products facilitate funds transfers across domestic and cross-border corridors. Modern banking has transitioned from traditional paper Demand Drafts and Bankers Cheques to automated, 24x7 payment systems operated by the RBI and National Payments Corporation of India (NPCI), including NEFT, RTGS, IMPS, UPI, and the tokenized Central Bank Digital Currency (CBDC).',
    content: `
## 1. Master Matrix: Indian Electronic Payment Rails

| Payment Platform | Governing Operator | Settlement Mechanism | Operating Hours & Minimum / Maximum Limits |
| :--- | :--- | :--- | :--- |
| **NEFT (National Electronic Funds Transfer)** | **Reserve Bank of India (RBI)** | **Deferred Net Settlement (DNS)** in half-hourly batches (48 batches daily) | **24x7x365**; No minimum limit; No maximum ceiling for general transfers. |
| **RTGS (Real Time Gross Settlement)** | **Reserve Bank of India (RBI)** | **Gross Real-Time Settlement** (transaction by transaction on books of RBI) | **24x7x365**; **Minimum Limit: ₹2,00,000 (₹2 Lakhs)**; No maximum ceiling. |
| **IMPS (Immediate Payment Service)** | **NPCI** | Instant real-time gross settlement via mobile/account | **24x7x365**; Standard limit **up to ₹5,00,000 (₹5 Lakhs)** per transaction. |
| **UPI (Unified Payments Interface)** | **NPCI** | Virtual Payment Address (VPA) / mobile number overlay on IMPS rails | **24x7x365**; General limit **₹1 Lakh/day** (₹5 Lakhs for hospital/education/IPO). |
| **AePS (Aadhaar Enabled Payment System)** | **NPCI** | Biometric Aadhaar authentication at Business Correspondent (BC) micro-ATMs | Cash withdrawal, balance inquiry, fund transfer for rural financial inclusion. |

## 2. Demand Drafts (DD) vs Bankers Cheques (Pay Orders)

- **Demand Draft (Section 85A, NI Act):** Drawn by one branch of a bank upon another branch of the same bank; payable on demand; cannot be stopped by customer except under fraud/loss claims.
- **Bankers Cheque / Pay Order:** Drawn by a bank branch on itself, payable locally within the same clearing center.
- **Validity Period:** Both instruments are valid for **3 months** from the date of issue.
- **Name Mandate:** Purchaser name must be pre-printed on the face of DD/Pay Order under RBI AML directives.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. RTGS has a **statutory minimum threshold of ₹2,00,000 (₹2 Lakhs)**. NEFT has **no minimum limit**.
> 2. Both NEFT and RTGS operate **24x7x365** in India.
> 3. Demand Drafts and Bankers Cheques are valid for **3 months** from issue date.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'What is the statutory minimum transaction amount required to route a funds transfer through Real Time Gross Settlement (RTGS)?',
          options: ['(A) ₹50,000', '(B) ₹1,00,000', '(C) ₹2,00,000', '(D) ₹5,00,000'],
        },
        {
          q: 'National Electronic Funds Transfer (NEFT) processes inter-bank transactions based on which settlement mechanism?',
          options: [
            '(A) Continuous gross real-time settlement',
            '(B) Deferred Net Settlement (DNS) in half-hourly batches',
            '(C) End-of-day gross batch settlement',
            '(D) Bilateral net settlement once daily',
          ],
        },
        {
          q: 'What is the legal validity period of a Bank Demand Draft or Pay Order under current RBI regulations?',
          options: ['(A) 1 Month', '(B) 3 Months', '(C) 6 Months', '(D) 12 Months'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) ₹2,00,000. RTGS is designed for large-value transfers with a mandatory minimum ticket size of ₹2 Lakhs.',
        'Q2 Correct Answer: (B) Deferred Net Settlement (DNS) in half-hourly batches. NEFT operates 48 half-hourly batches round the clock 24x7.',
        'Q3 Correct Answer: (B) 3 Months. Effective April 1, 2012, the validity of cheques, drafts, and pay orders was reduced from 6 months to 3 months.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why are NEFT charges waived for individual savings bank account holders initiating transactions online?',
        answer: 'The RBI mandated zero charges on online NEFT transfers (via internet banking and mobile apps) for savings account holders to promote digital banking adoption and reduce cash usage.',
      },
      {
        prompt: 'What distinguishes an "On-Us" transaction from an "Off-Us" transaction in ATM and POS channel networks?',
        answer: 'An "On-Us" transaction occurs when a cardholder uses an ATM or terminal owned by their own issuing bank. An "Off-Us" transaction occurs when the card is used on a competitor bank terminal, routing through the National Financial Switch (NFS) and incurring interchange fees.',
      },
    ],
  },

  // CHAPTER 9
  {
    index: 9,
    filename: '09_CHAPTER_09_CREDIT_SCORING_CIBIL_CICS.md',
    fullTitle: 'CREDIT SCORING ARCHITECTURE (CIBIL / CICS 300–900 POINT SYSTEM)',
    shortHeader: 'CHAPTER 09 : CREDIT SCORING & CIBIL',
    leadParagraph: 'Credit Information Companies (CICs) operate under the Credit Information Companies (Regulation) Act 2005 (CICRA), collecting and analyzing borrower credit histories. The resulting credit score—ranging from 300 to 900 points—serves as the primary quantitative filter for retail underwriting. Maintaining a prime score (≥ 750) provides borrowers with faster turnarounds, lower margins, and competitive interest rate concessions.',
    content: `
## 1. Credit Information Companies (CICs) in India

Under CICRA 2005, four authorized Credit Information Companies operate under RBI regulatory oversight:
1. **TransUnion CIBIL** *(Credit Information Bureau India Limited, established 2000)*
2. **Experian India**
3. **Equifax India**
4. **CRIF High Mark**

- **Mandatory Membership:** All scheduled commercial banks, NBFCs, and housing finance companies must be members of all four CICs and submit monthly borrower credit data.
- **Free Annual Report:** Every citizen is legally entitled to receive **one full free credit report (FFCR)** with credit score once per calendar year from each CIC.

## 2. CIBIL Score Architecture (300 to 900 Points)

$$\\text{Credit Score Range: } 300 \\text{ to } 900 \\text{ Points}$$

| Score Band | Category / Risk Level | Underwriting Treatment by Commercial Banks |
| :--- | :--- | :--- |
| **300 – 599** | **Poor / High Risk** | Loan applications typically rejected or subject to strict collateral requirements. |
| **600 – 749** | **Moderate / Sub-Prime** | Detailed manual scrutiny; higher interest margins; lower LTV / FOIR caps applied. |
| **750 – 900** | **Prime / Excellent** | **Gold standard for retail credit**; fast-track approvals; discounted interest rates. |
| **−1 / 0 (NH / NA)** | **No Credit History** | Borrower has less than 6 months of credit history; underwritten on surrogate financial criteria. |

## 3. Factor Weightages Determining the Credit Score

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 FACTOR WEIGHTAGES IN CREDIT SCORE MODEL                     │
| 1. PAST REPAYMENT HISTORY (35%) : On-time EMI & card settlements; defaults │
│ 2. CREDIT UTILIZATION RATIO (30%): Proportion of credit card limit utilized │
│ 3. CREDIT TENURE / HISTORY (15%) : Age of oldest open active credit facility│
│ 4. CREDIT MIX (10%)              : Balanced blend of Secured vs Unsecured   │
│ 5. RECENT CREDIT INQUIRIES (10%) : Number of hard credit checks in 90 days  │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **Past Payment History (35%)** has the **highest individual weightage** in determining credit scores.
> 2. The standard credit score scale ranges from **300 to 900 points** (benchmark prime threshold is **$\\ge 750$**).
> 3. Hard inquiries triggered by frequent, simultaneous loan applications temporarily suppress credit scores.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'What is the numeric scoring range utilized by TransUnion CIBIL and authorized Credit Information Companies in India?',
          options: ['(A) 100 to 1,000 Points', '(B) 300 to 900 Points', '(C) 0 to 100 Points', '(D) 400 to 800 Points'],
        },
        {
          q: 'Which factor carries the highest weightage (approx 35%) in the algorithm that determines an individual credit score?',
          options: [
            '(A) Number of credit cards held',
            '(B) Past repayment track record and timeliness of debt service',
            '(C) Age and employment tenure of borrower',
            '(D) Total annual gross salary',
          ],
        },
        {
          q: 'Under RBI regulations, how many Free Full Credit Reports (FFCR) is an individual entitled to receive from each registered CIC every calendar year?',
          options: ['(A) One', '(B) Two', '(C) Four', '(D) Unlimited upon request'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 300 to 900 Points. The standard credit scoring spectrum ranges from 300 (lowest) to 900 (highest).',
        'Q2 Correct Answer: (B) Past repayment track record and timeliness of debt service. Punctual payment history constitutes 35% of the total score weighting.',
        'Q3 Correct Answer: (A) One. The RBI mandates that each CIC provide one free detailed credit report annually to consumers upon request.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What constitutes an ideal "Credit Utilization Ratio" (CUR), and why does exceeding 30% harm a credit score?',
        answer: 'CUR is the ratio of revolving card balance to the sanctioned credit limit. Maintaining CUR ≤ 30% is ideal. Exceeding 30% signals credit hunger and high leverage, which depresses the credit score even if payments are made on time.',
      },
      {
        prompt: 'Distinguish between a "Soft Inquiry" and a "Hard Inquiry" on a credit report.',
        answer: 'A Soft Inquiry occurs when a borrower checks their own score or a bank pulls data for pre-approved marketing; it does not impact the score. A Hard Inquiry occurs when a bank reviews a formal loan/credit application; multiple hard inquiries within a short period lower the credit score.',
      },
    ],
  },

  // CHAPTER 10
  {
    index: 10,
    filename: '10_CHAPTER_10_RETAIL_NPA_RECOVERY_FRAMEWORK.md',
    fullTitle: 'RETAIL NPA RECOVERY: LOK ADALATS, DRT & SARFAESI ACT 2002',
    shortHeader: 'CHAPTER 10 : RETAIL NPA RECOVERY LAWS',
    leadParagraph: 'Retail loan recovery involves balancing statutory debt enforcement powers with fair practices and customer dignity. When retail advances slip into Non-Performing Assets (NPAs), banks utilize three primary dispute resolution and recovery avenues: consensual compromise settlements through Lok Adalats, judicial adjudications before Debt Recovery Tribunals (DRT), and non-judicial enforcement against secured assets under the SARFAESI Act 2002.',
    content: `
## 1. Master Comparison of Recovery Mechanisms

| Recovery Forum | Legal Authority & Statues | Pecuniary Jurisdiction Limit | Key Operational Process & Powers |
| :--- | :--- | :--- | :--- |
| **Lok Adalat** | Legal Services Authorities Act 1987 | Matters up to **₹20 Lakhs** | Consensual compromise and settlement forum; **Court fee refunded in full**; Award is final, binding, and **cannot be appealed** in any court. |
| **Debt Recovery Tribunal (DRT)** | Recovery of Debts and Bankruptcy Act 1993 (RDBBFI) | Debts **$\\ge$ ₹20 Lakhs** (raised from ₹10 Lakhs in 2018) | Dedicated judicial tribunal headed by Presiding Officer; issues Recovery Certificate; appeal lies before DRAT upon pre-depositing **50% of debt**. |
| **SARFAESI Act 2002** | Securitisation & Reconstruction of Financial Assets Act 2002 | Secured debts **> ₹1 Lakh** where unpaid debt $\ge 20\%$ of principal + interest | **Enforcement without court intervention**; issues 60-day demand notice under Section 13(2); assumes physical possession under Section 13(4). |

## 2. SARFAESI Enforcement Protocol in Retail Advances

1. **Prerequisite:** Account must be formally classified as NPA; outstanding balance must exceed ₹1 Lakh; and remaining debt must be at least 20% of original principal and interest.
2. **Section 13(2) Notice:** 60-day statutory demand notice requiring borrower to discharge liabilities in full.
3. **Borrower Representation (Section 13(3A)):** Bank must reply to borrower objections within **15 days**.
4. **Section 13(4) Enforcement:** If dues remain unpaid after 60 days, bank can take physical possession of secured assets, take over asset management, or appoint a manager.
5. **CMM / DM Assistance (Section 14):** Bank can apply to Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) for taking physical possession.
6. **Exempted Collaterals (Section 31):** **Agricultural land is strictly exempt** from SARFAESI proceedings.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. DRT minimum pecuniary threshold is **₹20 Lakhs** (revised from ₹10 Lakhs).
> 2. SARFAESI Act cannot be invoked if the unpaid balance is **less than 20%** of principal and interest, or if the outstanding debt is **less than ₹1 Lakh**.
> 3. **Agricultural land is completely exempt** from SARFAESI enforcement under Section 31(i).
`,
    practiceQuestions: {
      questions: [
        {
          q: 'What is the minimum debt threshold required for a commercial bank to file a recovery application before the Debt Recovery Tribunal (DRT)?',
          options: ['(A) ₹5 Lakhs', '(B) ₹10 Lakhs', '(C) ₹20 Lakhs', '(D) ₹50 Lakhs'],
        },
        {
          q: 'Under Section 31 of the SARFAESI Act 2002, which category of security asset is completely EXCLUDED from enforcement without court intervention?',
          options: [
            '(A) Residential apartments',
            '(B) Commercial shopping plazas',
            '(C) Agricultural land',
            '(D) Factory plant and machinery',
          ],
        },
        {
          q: 'What is the statutory notice period given to a defaulted borrower under Section 13(2) of the SARFAESI Act to clear dues before enforcement measures are initiated?',
          options: ['(A) 15 Days', '(B) 30 Days', '(C) 45 Days', '(D) 60 Days'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) ₹20 Lakhs. The Ministry of Finance raised the minimum pecuniary jurisdiction for DRTs from ₹10 Lakhs to ₹20 Lakhs to reduce tribunal congestion.',
        'Q2 Correct Answer: (C) Agricultural land. Section 31(i) explicitly exempts all agricultural properties from SARFAESI action.',
        'Q3 Correct Answer: (D) 60 Days. Section 13(2) mandates a 60-day demand notice window for the borrower to discharge the full liability.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why is an award passed by a Lok Adalat considered final with zero appeal possibility?',
        answer: 'Because a Lok Adalat decree is formed on the voluntary, mutual consent of both debtor and creditor under the Legal Services Authorities Act 1987, carrying the status of a civil court decree with no appeal permitted under the Code of Civil Procedure.',
      },
      {
        prompt: 'What pre-deposit condition must a borrower satisfy before filing an appeal against a DRT order before the Debt Recovery Appellate Tribunal (DRAT)?',
        answer: 'Under Section 21 of the RDBBFI Act and Section 18 of SARFAESI, the borrower must pre-deposit 50% of the determined debt (which the Appellate Tribunal may reduce to a minimum of 25% for documented hardship).',
      },
    ],
  },

  // CHAPTER 11
  {
    index: 11,
    filename: '11_CHAPTER_11_DRA_CODE_OF_CONDUCT_REGULATIONS.md',
    fullTitle: 'DIRECT RECOVERY AGENTS (DRA): IBA CODE OF CONDUCT & RBI REGULATIONS',
    shortHeader: 'CHAPTER 11 : DRA REGULATIONS & CONDUCT',
    leadParagraph: 'Commercial banks frequently engage Direct Recovery Agents (DRAs) to recover retail loan dues. To curb coercive practices and safeguard borrower dignity, the Reserve Bank of India and Indian Banks Association (IBA) enforce a mandatory Code of Conduct governing calling hours, privacy protections, certification requirements, and bank vicarious liability.',
    content: `
## 1. IBA Model Code of Conduct & RBI Guidelines for DRAs

| Operational Dimension | Regulatory Mandate / Permissible Standard | Legal Authority & Reference |
| :--- | :--- | :--- |
| **Mandatory Certification** | All recovery agents must undergo 50/100-hour training and pass the **IIBF DRA Certification Exam** | RBI Master Directions on Recovery Agents |
| **Permitted Contact Hours** | Calling and physical visits permitted **STRICTLY between 07:00 AM and 07:00 PM** (07:00 to 19:00 hrs) | RBI Fair Practices Code |
| **Privacy & Conduct Standards** | Complete ban on abusive language, threats, public humiliation, harassment of family, or contacting employer | Section 35A BR Act & Consumer Protection Act 2019 |
| **Identification Mandate** | DRA must wear identity card, carry bank authorization letter, and identify agency upon contact | IBA Model Code of Conduct |
| **Grievance Redressal** | Bank must operate a dedicated complaints portal; bank is **vicariously liable** for agent misconduct | Supreme Court in *ICICI Bank v. Prakash Kaur (2007)* |
| **Call Recording Mandate** | All inbound and outbound recovery phone calls must be recorded for audit inspections | RBI Master Directions |

## 2. Supreme Court Doctrine on Bank Vicarious Liability

In *ICICI Bank Ltd. v. Prakash Kaur (2007)*, the Supreme Court of India ruled that banks cannot use musclemen or extra-judicial coercive tactics to recover debt or repossess assets. The lending bank remains **vicariously liable** for all tortious, civil, and criminal acts committed by its appointed recovery agents.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. DRA calling hours are **strictly 07:00 AM to 07:00 PM** (not 08:00 AM to 08:00 PM).
> 2. All recovery agents must hold **IIBF DRA Certification** before field deployment.
> 3. Banks cannot disclaim responsibility for recovery agent excesses; they remain **vicariously liable** under the law.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under RBI regulations and the IBA Code of Conduct, between what hours are Direct Recovery Agents permitted to contact borrowers via telephone or physical visits?',
          options: [
            '(A) 06:00 AM to 08:00 PM',
            '(B) 07:00 AM to 07:00 PM',
            '(C) 08:00 AM to 08:00 PM',
            '(D) 09:00 AM to 06:00 PM',
          ],
        },
        {
          q: 'Which certification must be mandatorily held by recovery personnel engaged by commercial banks in India prior to interacting with customers?',
          options: [
            '(A) NISM Investment Advisory Certification',
            '(B) IIBF Direct Recovery Agent (DRA) Certification',
            '(C) IRDAI Corporate Agent Certification',
            '(D) CISA Information Systems Audit Certification',
          ],
        },
        {
          q: 'In the landmark case of ICICI Bank Ltd. v. Prakash Kaur (2007), what legal doctrine was reaffirmed by the Supreme Court regarding bank debt recovery?',
          options: [
            '(A) Lenders hold absolute immunity for external agent actions',
            '(B) Commercial banks are vicariously liable for the coercive actions of their recovery agents',
            '(C) Recovery agents can repossess assets without formal authorization',
            '(D) Police authorities must conduct all asset repossessions',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 07:00 AM to 07:00 PM. Calls or visits before 7 AM or after 7 PM violate the RBI Fair Practices Code.',
        'Q2 Correct Answer: (B) IIBF Direct Recovery Agent (DRA) Certification. RBI guidelines mandate 100-hour (or 50-hour for graduates) training followed by IIBF certification.',
        'Q3 Correct Answer: (B) Commercial banks are vicariously liable for the coercive actions of their recovery agents. The Supreme Court banned coercive musclemen tactics and established bank vicarious liability.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What steps must a bank take if a customer registers a formal harassment complaint against a Direct Recovery Agent?',
        answer: 'The bank must immediately suspend the assigned recovery agent pending inquiry, record customer statements, review call recordings, resolve the complaint within 30 days, and notify credit bureaus if erroneous adverse reporting occurred.',
      },
      {
        prompt: 'Why does the IBA Code prohibit recovery agents from contacting friends, neighbors, or workplace colleagues of the debtor?',
        answer: 'To protect the constitutional and statutory right to privacy of the borrower and prevent unlawful public defamation and harassment. Inquiries with third parties are permitted solely to trace uncontactable debtors.',
      },
    ],
  },

  // CHAPTER 12
  {
    index: 12,
    filename: '12_CHAPTER_12_SECURITIZATION_PTC_SARFAESI.md',
    fullTitle: 'SECURITIZATION OF RETAIL LOANS & PASS-THROUGH CERTIFICATES (PTCS)',
    shortHeader: 'CHAPTER 12 : SECURITIZATION & PTCS',
    leadParagraph: 'Securitization enables commercial banks to pool illiquid retail credit assets—such as housing and auto loans—and repackage them into marketable securities. Governed by the SARFAESI Act 2002 and RBI Master Directions on Securitisation of Standard Assets, securitization improves balance sheet liquidity, releases regulatory capital, and mitigates asset-liability duration mismatches.',
    content: `
## 1. Master Securitization Mechanism & Architecture

\`\`\`
  ORIGINATOR               SPECIAL PURPOSE                INSTITUTIONAL
 (Lending Bank)             VEHICLE (SPV)                  INVESTORS
   │                              │                            │
   ├── Sells Loan Pool (True Sale)►│                            │
   │                              ├── Issues PTCs / Sec Papers─►│
   │◄── Receives Cash Upfront ────┤                            │
   │                              │◄── Pays Investment Capital ─┤
   │                              │                            │
[Borrowers pay EMIs to Bank] ──► [Transfers Collections] ───► [Receives Cash Flows]
\`\`\`

- **Originator (Bank):** Originates the retail loan portfolio and sells it to a trust (SPV).
- **Special Purpose Vehicle (SPV / Trust):** Bankruptcy-remote trust that acquires the asset pool and issues Pass-Through Certificates (PTCs).
- **True Sale Criteria:** The asset transfer must be absolute, legally isolating the pool from the originator bankruptcy estate.
- **Pass-Through Certificates (PTCs):** Securities issued by the SPV that distribute principal and interest collections directly to investors.

## 2. Minimum Holding Period (MHP) & Minimum Retention Requirement (MRR)

| Prudential Parameter | Regulatory Mandate under RBI Master Directions | Objective of Norm |
| :--- | :--- | :--- |
| **Minimum Holding Period (MHP)** | • Loans $\le$ 24 months tenor: **3 months** of repayments.<br>• Loans > 24 months tenor: **6 months** of repayments. | Ensures loan pool quality is seasoned and borrower repayment track record is validated before securitization. |
| **Minimum Retention Requirement (MRR)** | • Loans $\le$ 24 months tenor: **5%** of book value of pool.<br>• Loans > 24 months tenor: **10%** of book value of pool. | Ensures originator retains "skin in the game", preventing reckless origination and quick offloading. |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. The minimum retention requirement (MRR) for long-term retail loans (> 24 months) is **10% of the pool book value**.
> 2. The asset transfer to the SPV must constitute a **True Sale**, ensuring the pool is legally protected from originator bankruptcy.
> 3. Revolving credit facilities (such as credit card balances) face stricter retention rules.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'In the securitization of standard retail loans with tenure exceeding 24 months, what is the Minimum Retention Requirement (MRR) mandated by the RBI?',
          options: ['(A) 2% of pool value', '(B) 5% of pool value', '(C) 10% of pool value', '(D) 20% of pool value'],
        },
        {
          q: 'What is the primary function of establishing a Special Purpose Vehicle (SPV) as a "bankruptcy-remote" trust in securitization?',
          options: [
            '(A) To allow the bank to avoid paying income taxes',
            '(B) To legally isolate the securitized asset pool from the insolvency risk of the originator bank',
            '(C) To guarantee an 18% return to investors',
            '(D) To eliminate the need for credit rating',
          ],
        },
        {
          q: 'Under RBI securitization directives, what is the Minimum Holding Period (MHP) required for loans with bullet repayment tenors exceeding two years before they can be securitized?',
          options: ['(A) 3 Months', '(B) 6 Months', '(C) 12 Months', '(D) 24 Months'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) 10% of pool value. For loans with tenors exceeding 24 months, originators must retain at least 10% of the book value of the securitized pool.',
        'Q2 Correct Answer: (B) To legally isolate the securitized asset pool from the insolvency risk of the originator bank. Bankruptcy remoteness protects investor cash flows from originator insolvency claims.',
        'Q3 Correct Answer: (C) 12 Months. For bullet repayment loans, a full 12-month seasoning period is required to establish asset quality.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What is the difference between Pass-Through Certificates (PTCs) and Pay-Through Securities?',
        answer: 'Pass-Through Certificates pass collected cash flows (principal and interest) directly to investors as they are received. Pay-Through securities issue multi-tranche debt bonds (e.g., Collateralized Mortgage Obligations) with customized cash flow priority and varying maturities.',
      },
      {
        prompt: 'Why does the RBI enforce a Minimum Retention Requirement (MRR)?',
        answer: 'To align the originator incentives with long-term asset performance, ensuring banks conduct thorough initial credit underwriting rather than packaging risky subprime loans for immediate transfer to third-party investors.',
      },
    ],
  },

  // CHAPTER 13
  {
    index: 13,
    filename: '13_CHAPTER_13_MARKETING_MIX_7PS_BANKING.md',
    fullTitle: 'THE 7 PS EXTENDED MARKETING MIX FOR FINANCIAL SERVICES',
    shortHeader: 'CHAPTER 13 : 7 PS MARKETING MIX',
    leadParagraph: 'Services marketing requires specialized frameworks due to the intangibility, inseparability, perishability, and heterogeneity of financial products. In retail banking, the classical 4 Ps product model is expanded to the 7 Ps of Services Marketing, integrating People, Processes, and Physical Evidence into service quality delivery.',
    content: `
## 1. Master Framework: The 7 Ps of Banking Services Marketing

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE 7 Ps OF FINANCIAL SERVICES MARKETING                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. PRODUCT           : Savings deposits, personal loans, credit cards.      │
│ 2. PRICE             : Interest rate spread, processing fees, penal charges.│
│ 3. PLACE             : Physical branches, ATMs, mobile banking apps, BCs.   │
│ 4. PROMOTION         : Digital marketing, branding, financial literacy.     │
│ 5. PEOPLE            : Branch staff, tellers, certified relationship mgrs.  │
│ 6. PROCESS           : Instant digital onboarding, e-KYC, turnaround times. │
│ 7. PHYSICAL EVIDENCE : Modern branch architecture, secure UI/UX, passbooks. │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

| Dimension | Scope in Commercial Banking | Practical Operational Application |
| :--- | :--- | :--- |
| **1. Product** | Core benefit and augmented features | Bundled CASA accounts, auto-sweep FDs, contactless credit cards |
| **2. Price** | Financial cost of credit and deposit rewards | Lending interest rates (EBLR linked), processing fees, minimum balance penalties |
| **3. Place** | Multi-channel delivery accessibility | Physical branches, 24x7 off-site ATMs, mobile banking apps, BC micro-ATMs |
| **4. Promotion** | Communication and customer acquisition | Digital marketing, print advertisements, social media campaigns, branch financial literacy camps |
| **5. People** | Customer-facing personnel | Frontline branch tellers, certified relationship managers, wealth advisors |
| **6. Process** | Flow of activities and operational speed | Video-KYC account opening, STP loan sanctions, automated SMS alert rails |
| **7. Physical Evidence** | Tangible cues reflecting quality | Branch interior design, corporate logos, clean passbooks, secure mobile app UI/UX |

## 2. Unique Characteristics of Financial Services

- **Intangibility:** Banking products cannot be seen, touched, or tasted before purchase; customers rely on brand reputation, regulatory strength, and physical evidence.
- **Inseparability:** Production and consumption happen simultaneously (e.g., a customer deposit is accepted and ledger-posted concurrently).
- **Heterogeneity:** Service delivery varies based on teller demeanor, branch workload, and staff expertise, requiring standardization through digital workflows.
- **Perishability:** Unused service capacity cannot be warehoused or inventoried (e.g., an idle loan underwriting officer shift represents unrecoverable capacity).

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. The three extended elements of the Services Marketing Mix are **People, Process, and Physical Evidence**.
> 2. Passbooks, account statements, and branch aesthetics represent **Physical Evidence**, providing tangible quality cues for intangible services.
> 3. Standardized digital STP (Straight-Through Processing) workflows address service **Heterogeneity**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Which three additional "Ps" are added to the traditional 4 Ps marketing mix to formulate the extended 7 Ps framework for financial services?',
          options: [
            '(A) Planning, Performance, and Profit',
            '(B) People, Process, and Physical Evidence',
            '(C) Policy, Placement, and Packaging',
            '(D) Public Relations, Positioning, and Power',
          ],
        },
        {
          q: 'A customer judges the financial stability and security of a bank by examining its branch architecture, digital UI design, and formal passbook. In the 7 Ps mix, this represents:',
          options: ['(A) Process', '(B) Product', '(C) Physical Evidence', '(D) Promotion'],
        },
        {
          q: 'Because financial services cannot be manufactured in advance and stored in a warehouse for future sale, they are characterized by which service attribute?',
          options: ['(A) Intangibility', '(B) Perishability', '(C) Inseparability', '(D) Heterogeneity'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) People, Process, and Physical Evidence. Coined by Booms and Bitner, these three elements address the unique operational nature of service delivery.',
        'Q2 Correct Answer: (C) Physical Evidence. Physical evidence provides tangible touchpoints that substantiate the bank credibility.',
        'Q3 Correct Answer: (B) Perishability. Service perishability means unutilized capacity expires immediately without inventory storage.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'How does Straight-Through Processing (STP) resolve the challenge of service "Heterogeneity" in retail banking?',
        answer: 'By automating end-to-end customer onboarding and underwriting through algorithmic rules, STP removes human teller variations, delivering consistent service quality across all touchpoints.',
      },
      {
        prompt: 'Why is the "People" component more critical in wealth management than in basic transactional checking accounts?',
        answer: 'Because wealth management requires trust, personalized financial planning, and empathetic advice, making relationship manager integrity and expertise the central driver of customer loyalty.',
      },
    ],
  },
];

async function main() {
  console.log(`Generating chapters 7 to 13 for IIBF Paper 4 (RBWM)...`);
  for (const ch of CHAPTERS) {
    const fullPath = path.join(OUT_DIR, ch.filename);
    let md = `# ${ch.fullTitle}\n\n`;
    md += `> **Paper:** 4 (Retail Banking and Wealth Management)\n`;
    md += `> **Standard:** Macmillan 2023 Master Benchmark • Duplex A4 Monochrome Print Edition\n\n`;
    md += `${ch.leadParagraph}\n\n`;
    md += `${ch.content.trim()}\n\n`;

    if (ch.practiceQuestions) {
      md += `## Practice Questions & Solved Numerical Drills\n\n`;
      ch.practiceQuestions.questions.forEach((qObj, idx) => {
        md += `**Q${idx + 1}.** ${qObj.q}\n`;
        qObj.options.forEach(opt => {
          md += `- ${opt}\n`;
        });
        md += `\n`;
      });

      md += `#### Solutions & Detailed Explanations\n\n`;
      ch.practiceQuestions.solutions.forEach(sol => {
        md += `* ${sol}\n\n`;
      });
    }

    if (ch.activeRecallCards && ch.activeRecallCards.length > 0) {
      md += `## Active Recall & Self-Diagnostic Prompts\n\n`;
      for (const card of ch.activeRecallCards) {
        md += `<details>\n<summary>${card.prompt}</summary>\n\n${card.answer}\n</details>\n\n`;
      }
    }

    fs.writeFileSync(fullPath, md, 'utf-8');
    console.log(`✓ Wrote ${ch.filename}`);
  }
}

main().catch(console.error);
