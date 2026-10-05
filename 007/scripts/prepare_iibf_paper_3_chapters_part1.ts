import * as fs from 'fs';
import * as path from 'path';

const OUT_DIR = path.resolve('007', 'notes', 'iibf_dbf', 'paper_3_chapters');
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
  // CHAPTER 1
  {
    index: 1,
    filename: '01_CHAPTER_01_ACCOUNTING_CONCEPTS_GAAP_IND_AS.md',
    fullTitle: 'ACCOUNTING CONCEPTS, PRINCIPLES (GAAP) & IND AS FRAMEWORK',
    shortHeader: 'CHAPTER 01 : ACCOUNTING CONCEPTS & GAAP',
    leadParagraph: 'Generally Accepted Accounting Principles (GAAP) form the standardized theoretical bedrock that ensures financial statements across all business enterprises are uniform, consistent, verifiable, and legally comparable. In Indian banking, accounting standards have evolved from traditional AS to converged Indian Accounting Standards (Ind AS), introducing revolutionary prudential concepts such as Expected Credit Loss (ECL) under Ind AS 109.',
    content: `
## 1. Master Matrix of 11 Fundamental Accounting Concepts

| Accounting Concept | Core Theoretical Definition | Practical Accounting Application in Banking / Business |
| :--- | :--- | :--- |
| **Business Entity Concept** | Business and its owners are distinct, separate legal entities | Capital introduced by owner is treated as an internal liability; owner's personal drawings are debited to Drawings A/c. |
| **Money Measurement Concept** | Only transactions quantifiable in monetary terms are recorded in books of account | Employee skills, integrity, industrial relations, or brand loyalty are excluded from financial statements. |
| **Going Concern Concept** | Enterprise will continue operating indefinitely without liquidation intent | Fixed assets are recorded at historical cost less depreciation, rather than at current net liquidation value. |
| **Accounting Period Concept** | Economic life of an enterprise is partitioned into discrete time intervals (1 April to 31 March) | Mandates annual closure of books, determination of periodic profit or loss, and preparation of the Balance Sheet. |
| **Historical Cost Concept** | Assets are recorded at the original acquisition purchase price | Market value fluctuations in real estate or premises do not alter balance sheet asset value until realized. |
| **Dual Aspect Concept** | Every transaction affects at least two accounts with equal Debit and Credit legs | Forms the foundation of double-entry bookkeeping: Assets = Liabilities + Capital. |
| **Accrual Concept** | Revenue is recognized when earned; expenses are recognized when incurred, regardless of cash flow | Interest accrued on performing loans is credited as income even if not yet received in cash. |
| **Realization / Revenue Recognition** | Revenue is recognized when legal title and risks of ownership pass to buyer | Advance payment received from customers is recorded as a liability until goods/services are delivered. |
| **Matching Concept** | Revenues of a specific accounting period must be matched against expenses incurred to generate that revenue | Depreciation on bank computers used during the year is charged against the same financial year's operating income. |
| **Conservatism / Prudence Concept** | Anticipate no unrealized profits, but provide for all possible anticipated losses | Closing stock valued at Cost or Net Realizable Value (Market Price), whichever is lower; Provision for Bad Debts. |
| **Materiality Concept** | Items possessing significant economic impact must be disclosed; trivial items need not follow rigorous rules | Purchase of low-cost stationery items is expensed immediately rather than capitalized over useful life. |

## 2. Indian Accounting Standards (Ind AS) & IFRS Convergence

- **Ind AS Regulatory Mandate:** Issued by the Ministry of Corporate Affairs (MCA) under Section 133 of the Companies Act 2013, fully converged with International Financial Reporting Standards (IFRS).
- **Key Ind AS Standards Relevant for Commercial Banks:**
  - **Ind AS 109 (Financial Instruments):** Replaces the traditional "Incurred Loss Model" with the forward-looking **Expected Credit Loss (ECL)** model for loan asset classification and provisioning.
  - **Ind AS 115 (Revenue from Contracts with Customers):** Imposes a standardized 5-step model for revenue recognition from merchant fees, processing charges, and syndication fees.
  - **Ind AS 116 (Leases):** Mandates that all commercial lease contracts (e.g., leased bank branches and ATM sites) recognize a Right-of-Use (RoU) Asset and a corresponding Lease Liability on the balance sheet.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Valuing closing stock at *Cost or Market Price, whichever is lower* is a direct application of the **Prudence / Conservatism Concept**, NOT the Cost Concept.
> 2. Showing Capital as a Liability on the balance sheet is governed by the **Business Entity Concept**.
> 3. Recording accrued interest at year-end is governed by the **Accrual Concept** and the **Matching Concept**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Valuing closing stock at Cost or Net Realizable Value (Market Price), whichever is lower, is an application of which accounting convention?',
          options: ['(A) Realization Concept', '(B) Prudence / Conservatism Concept', '(C) Historical Cost Concept', '(D) Materiality Concept'],
        },
        {
          q: 'Under Ind AS 109, what loan provisioning framework replaces the traditional incurred loss model in commercial banking?',
          options: ['(A) Historical Default Average Model', '(B) Expected Credit Loss (ECL) Model', '(C) Mark-to-Market Liquidation Model', '(D) Dynamic Capital Buffer Model'],
        },
        {
          q: 'The accounting concept that mandates that capital introduced by the proprietor is shown on the liabilities side of the balance sheet is:',
          options: ['(A) Money Measurement Concept', '(B) Dual Aspect Concept', '(C) Business Entity Concept', '(D) Going Concern Concept'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Prudence / Conservatism Concept. The conservatism convention dictates that an accountant should anticipate no profits but provide for all anticipated losses, requiring inventory to be valued at the lower of cost or market value.',
        'Q2 Correct Answer: (B) Expected Credit Loss (ECL) Model. Ind AS 109 mandates forward-looking probability-weighted ECL provisioning based on macroeconomic factors rather than waiting for an actual 90-day default event.',
        'Q3 Correct Answer: (C) Business Entity Concept. The business entity principle views the firm as legally and operationally separate from its proprietors; hence, the owner is treated as an internal creditor for the capital invested.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What is the core distinction between the Accrual Concept and the Cash Basis of Accounting?',
        answer: 'Under the Accrual Concept, revenues are recognized when earned (when rights to receive arise) and expenses when incurred (when obligations arise), regardless of when cash is received or paid. Under Cash Basis, entries are recorded strictly upon physical receipt or disbursement of cash.',
      },
      {
        prompt: 'Why does the Going Concern Concept prevent valuing fixed assets at break-up or market liquidation prices?',
        answer: 'Because the enterprise is assumed to continue operating for an indefinite foreseeable future. Fixed assets are held to generate long-term operational cash flows rather than for immediate forced liquidation, justifying historical cost less accumulated depreciation.',
      },
    ],
  },

  // CHAPTER 2
  {
    index: 2,
    filename: '02_CHAPTER_02_GOLDEN_RULES_JOURNAL_LEDGER.md',
    fullTitle: 'GOLDEN RULES OF ACCOUNTING, JOURNALIZING & LEDGER POSTING',
    shortHeader: 'CHAPTER 02 : GOLDEN RULES & JOURNALIZING',
    leadParagraph: 'Double-entry bookkeeping, pioneered by Italian mathematician Luca Pacioli in 1494, operates on the foundational axiom that every financial transaction exerts a dual effect of equal magnitude. By categorizing all accounts into Personal, Real, and Nominal classes, the three Golden Rules establish unambiguous debit and credit determinations before transactions are posted from the Journal to the General Ledger.',
    content: `
## 1. Master Classification: 3 Account Types & Their Golden Rules

| Account Category | Scope / Representative Examples | Golden Rule for Debit (Dr) | Golden Rule for Credit (Cr) |
| :--- | :--- | :--- | :--- |
| **Personal Accounts** | Natural Persons (Ram A/c), Artificial Legal Entities (SBI A/c, Tata Steel Ltd), and Representative Personal Accounts (Outstanding Salaries A/c, Prepaid Insurance A/c) | **Debit the Receiver** *(Who receives value or economic benefit)* | **Credit the Giver** *(Who provides value or economic benefit)* |
| **Real Accounts** | Tangible Assets (Cash, Machinery, Building, Furniture) and Intangible Assets (Goodwill, Patents, Trademarks, Software Licenses) | **Debit what Comes In** *(Asset acquired or increased)* | **Credit what Goes Out** *(Asset sold, discarded, or decreased)* |
| **Nominal Accounts** | Expenses and Losses (Rent paid, Interest paid, Bad Debts) and Incomes and Gains (Commission received, Interest earned, Discount received) | **Debit all Expenses and Losses** | **Credit all Incomes and Gains** |

## 2. The Complete Accounting Cycle: Transaction to Balanced Ledger

1. **Source Documents:** Vouchers, invoices, debit notes, credit notes, and pay-in slips furnish documentary evidence of the transaction.
2. **Journalizing (Book of Original Entry):** Chronological recording of transactions specifying accounts debited, accounts credited, monetary amounts, and an explanatory narration.
3. **Sub-Division of Journal (Subsidiary Books):** High-volume transactions are segregated into specialized books:
   - *Cash Book:* Records all cash receipts and payments (serves as both Journal and Ledger).
   - *Purchase Book & Sales Book:* Records credit purchases and credit sales of trade inventory.
   - *Bills Receivable & Bills Payable Books:* Records negotiable instruments accepted or issued.
   - *Journal Proper:* Records opening entries, closing entries, rectification entries, and transfer entries.
4. **Ledger Posting (Principal Book of Accounts):** Systematic transfer of debits and credits from subsidiary books into individual T-shaped ledger accounts.
5. **Balancing of Accounts:**
   - *Debit Balance:* When total debit side exceeds total credit side (normal for Assets and Expenses).
   - *Credit Balance:* When total credit side exceeds total debit side (normal for Liabilities, Capital, and Incomes).

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **Outstanding Rent A/c** is a **Representative Personal Account**, NOT a Nominal Account. While Rent paid is Nominal, Outstanding Rent represents an amount owed to landlords.
> 2. **Bank Account** is a **Personal Account** (an artificial juridical person), NOT a Real Account.
> 3. **Proprietor Drawings A/c** is a **Personal Account** representing the owner withdrawing personal capital.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Outstanding Salary Account is classified under which category of accounts?',
          options: ['(A) Nominal Account', '(B) Real Account', '(C) Representative Personal Account', '(D) Artificial Personal Account'],
        },
        {
          q: 'Under the Golden Rules of double-entry bookkeeping, what is the rule applicable to Nominal Accounts?',
          options: [
            '(A) Debit the receiver, Credit the giver',
            '(B) Debit what comes in, Credit what goes out',
            '(C) Debit all expenses and losses, Credit all incomes and gains',
            '(D) Debit all assets, Credit all liabilities',
          ],
        },
        {
          q: 'A commercial bank account maintained by an enterprise with State Bank of India is classified as a:',
          options: ['(A) Real Account', '(B) Personal Account', '(C) Nominal Account', '(D) Valuation Account'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) Representative Personal Account. Although salary is a nominal expense, adding the prefix "Outstanding" transforms it into a representative personal account reflecting an accrued liability toward employees.',
        'Q2 Correct Answer: (C) Debit all expenses and losses, Credit all incomes and gains. This is the universal rule governing all nominal accounts.',
        'Q3 Correct Answer: (B) Personal Account. A bank is an artificial legal person recognized by law; transactions with it follow the personal account rule (Debit the receiver, Credit the giver).',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why is the Cash Book characterized as both a book of original entry and a principal book?',
        answer: 'Because cash transactions are entered directly into the Cash Book from source documents without passing through a separate journal (acting as a Journal), and cash and bank balances are extracted directly from it without maintaining separate cash accounts in the general ledger (acting as a Ledger).',
      },
      {
        prompt: 'State the exact accounting classification for: Prepaid Insurance, Bank Overdraft, and Machinery.',
        answer: 'Prepaid Insurance: Representative Personal Account; Bank Overdraft: Personal Account (liability to bank); Machinery: Real Account (tangible asset).',
      },
    ],
  },

  // CHAPTER 3
  {
    index: 3,
    filename: '03_CHAPTER_03_TRIAL_BALANCE_RECTIFICATION_ERRORS.md',
    fullTitle: 'TRIAL BALANCE, RECTIFICATION OF ERRORS & SUSPENSE ACCOUNT',
    shortHeader: 'CHAPTER 03 : TRIAL BALANCE & RECTIFICATION',
    leadParagraph: 'A Trial Balance is a diagnostic statement extracted from ledger accounts on a specified date to test arithmetical equilibrium. While a tallied Trial Balance proves equality of debits and credits, it does not guarantee complete absence of accounting errors. Understanding errors that affect versus those that do not affect the tally is crucial for audit integrity and correct suspense account deployment.',
    content: `
## 1. Master Classification of Accounting Errors

| Error Classification | Precise Mechanism & Nature | Impact on Trial Balance Tally | Rectification Protocol |
| :--- | :--- | :--- | :--- |
| **Error of Principle** | Transaction recorded in complete disregard of fundamental accounting principles (e.g., treating capital expenditure as revenue expense) | **Trial Balance Tallies** *(Debits and Credits remain equal)* | Debit correct Asset A/c; Credit erroneous Expense A/c (No Suspense Account) |
| **Error of Complete Omission** | A transaction is completely overlooked and omitted from both Journal and Ledger | **Trial Balance Tallies** | Pass the full original journal entry |
| **Compensating Errors** | Two or more separate errors mutually counteract and cancel each other out in monetary total | **Trial Balance Tallies** | Pass specific journal entries adjusting individual erroneous accounts |
| **Error of Commission (Wrong Account)** | Amount posted to the wrong account of the same class (e.g., debited to Shyam instead of Ram) | **Trial Balance Tallies** | Debit the correct personal account; Credit the erroneously debited account |
| **Error of Partial Omission** | Transaction entered in journal but posted to only one ledger account | **Trial Balance Fails to Tally** | Rectified through **Suspense Account** entry |
| **Error in Casting / Under-casting** | Arithmetical error in summing subsidiary books or balancing ledger accounts | **Trial Balance Fails to Tally** | Rectified through **Suspense Account** entry |
| **Posting to Wrong Side** | Debit item posted on the credit side (or vice versa), doubling the discrepancy | **Trial Balance Fails to Tally** | Discrepancy equals twice the transaction amount; rectified via Suspense Account |

## 2. Suspense Account Mechanics & Balance Sheet Treatment

- **Function of Suspense Account:** When a Trial Balance fails to tally at year-end, the unexplained difference is temporarily parked in a "Suspense Account" to permit timely preparation of final financial statements while investigations continue.
- **Balance Sheet Presentation:**
  - *Debit Balance in Suspense A/c:* Shown on the **Assets side** of the Balance Sheet.
  - *Credit Balance in Suspense A/c:* Shown on the **Liabilities side** of the Balance Sheet.
- **Rectification in Subsequent Accounting Periods:** When errors affecting profits are discovered in subsequent accounting periods after books have closed, the adjustments are routed through the **Profit & Loss Adjustment Account** to avoid distorting current-year operating figures.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Charging installation wages of new plant and machinery to "Wages Account" is an **Error of Principle**. It will **NOT** affect the Trial Balance tally.
> 2. An error of ₹500 debit posted as ₹50 credit causes a Trial Balance discrepancy of **₹550** (sum of both amounts), not ₹450.
> 3. Rectification of single-sided errors detected *before* preparing a Trial Balance requires an explanatory ledger note, NOT a journal entry.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Wages paid to workers for installing a new manufacturing plant were debited to the Wages Account. What category of error does this represent?',
          options: ['(A) Error of Commission', '(B) Error of Principle', '(C) Compensating Error', '(D) Error of Omission'],
        },
        {
          q: 'Which of the following errors will cause the Trial Balance to disagree (fail to tally)?',
          options: [
            '(A) Completely omitting a credit sale invoice from sales book',
            '(B) Posting an amount to the correct side of a wrong account',
            '(C) Under-casting the purchase day book by ₹10,000',
            '(D) Treating purchase of office furniture as office expenses',
          ],
        },
        {
          q: 'If a debit balance remains in the Suspense Account after final accounts are drafted, where does it appear on the Balance Sheet?',
          options: ['(A) Under Capital', '(B) Under Current Liabilities', '(C) Under Assets side', '(D) Under Provisions'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Error of Principle. Installation wages are capital expenditures that must be added to the cost of the asset under Ind AS 16. Charging them to revenue wages violates the capital vs revenue accounting principle.',
        'Q2 Correct Answer: (C) Under-casting the purchase day book by ₹10,000. Under-casting affects only the purchases account debit total without an offsetting credit entry, throwing the Trial Balance out of balance by ₹10,000.',
        'Q3 Correct Answer: (C) Under Assets side. A debit balance represents an unlocated debit amount, which is reported on the Assets side until fully reconciled and written off.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does an Error of Principle not disturb the arithmetical tally of a Trial Balance?',
        answer: 'Because the dual entry rule of equal debits and credits was mathematically executed; the error was qualitative (wrong account category: revenue instead of capital) rather than quantitative, leaving the arithmetical sums balanced.',
      },
      {
        prompt: 'What is the exact mathematical discrepancy created in the Trial Balance if a ₹2,000 credit item is accidentally posted to the debit side of an account?',
        answer: 'A discrepancy of ₹4,000 (twice the amount of the transaction), because the debit total is overstated by ₹2,000 and the credit total is understated by ₹2,000.',
      },
    ],
  },

  // CHAPTER 4
  {
    index: 4,
    filename: '04_CHAPTER_04_BANK_RECONCILIATION_STATEMENT.md',
    fullTitle: 'BANK RECONCILIATION STATEMENT (BRS) & TIMING DISCREPANCIES',
    shortHeader: 'CHAPTER 04 : BANK RECONCILIATION STATEMENT',
    leadParagraph: 'A Bank Reconciliation Statement (BRS) is a periodic comparative tool prepared by a depositor to reconcile discrepancies between the cash book bank column and the bank statement passbook. Because timing differentials and unnotified debits or credits routinely cause divergence, understanding the exact adjustment polarity (+ or −) under favorable and overdraft starting balances is essential for both corporate cash management and bank audits.',
    content: `
## 1. Master Reconciling Adjustments Architecture

| Transaction / Origin of Discrepancy | Cash Book Impact | Pass Book Impact | Adjustment when Starting with Cash Book Favorable Balance | Adjustment when Starting with Pass Book Favorable Balance |
| :--- | :--- | :--- | :--- | :--- |
| **Cheques issued to suppliers but not yet presented for payment** | Subtracted (−) | Not yet deducted (Higher) | **ADD (+)** | **SUBTRACT (−)** |
| **Cheques deposited into bank but not yet cleared / credited** | Added (+) | Not yet credited (Lower) | **SUBTRACT (−)** | **ADD (+)** |
| **Interest or dividends collected and credited directly by bank** | Not yet recorded (Lower) | Credited / Added (+) | **ADD (+)** | **SUBTRACT (−)** |
| **Direct debits by bank under standing instructions (EMI, Insurance)** | Not yet recorded (Higher) | Debited / Subtracted (−) | **SUBTRACT (−)** | **ADD (+)** |
| **Bank charges, folio charges, and processing fees debited** | Not yet recorded (Higher) | Debited / Subtracted (−) | **SUBTRACT (−)** | **ADD (+)** |
| **Direct cash/NEFT deposit by customer into bank account** | Not yet recorded (Lower) | Credited / Added (+) | **ADD (+)** | **SUBTRACT (−)** |
| **Dishonour of a discounted customer cheque debited by bank** | Recorded as cash inflow | Debited / Subtracted (−) | **SUBTRACT (−)** | **ADD (+)** |

## 2. Balance Terminology & Overdraft Concepts

- **Favorable Balances:**
  - *Cash Book Debit Balance:* Asset balance (Depositor holds money in the bank).
  - *Pass Book Credit Balance:* Liability of bank toward customer (Favorable balance for depositor).
- **Unfavorable / Overdraft Balances:**
  - *Cash Book Credit Balance:* Overdraft balance (Customer owes money to bank).
  - *Pass Book Debit Balance:* Overdraft balance (Bank has advanced overdraft funds to customer).
- **Adjusted Cash Book Procedure:** The modern audit approach mandates correcting the Cash Book first for all known omissions (bank charges, direct collections, interest, dishonoured cheques) before drafting the BRS purely for outstanding cheques and cheques in clearing.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. A **Debit Balance in Bank Passbook** signifies an **OVERDRAFT** (an adverse liability for the customer).
> 2. When starting a BRS with an **Overdraft Balance**, the adjustment directions reverse or are applied to the negative starting figure.
> 3. Errors committed solely by the bank (e.g., wrong debit to customer account) must be corrected by the bank in the passbook; they are not adjusted in the customer's cash book.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A debit balance in the customer Bank Passbook indicates:',
          options: ['(A) Favorable balance in hand', '(B) Overdraft balance', '(C) Fixed deposit balance', '(D) Undrawn credit limit'],
        },
        {
          q: 'When preparing a Bank Reconciliation Statement starting from a favorable Cash Book balance, how are cheques issued but not yet presented for payment treated?',
          options: ['(A) Subtracted from the balance', '(B) Added to the balance', '(C) Ignored as non-cash transactions', '(D) Debited to Suspense Account'],
        },
        {
          q: 'A customer deposited a cheque of ₹50,000 which was returned dishonoured by the drawee bank. In the reconciliation starting from the Cash Book balance, this amount must be:',
          options: ['(A) Added', '(B) Deducted', '(C) Multiplied by bank charges', '(D) Carried to profit & loss'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Overdraft balance. To the bank, a debit balance represents an amount receivable from the customer, signifying an overdraft facility.',
        'Q2 Correct Answer: (B) Added to the balance. When cheques were issued, the cash book was reduced immediately. Since the bank has not yet debited them, the passbook balance is higher; hence, the amount must be added back to reconcile.',
        'Q3 Correct Answer: (B) Deducted. The depositor debited the cash book upon deposit. Since the cheque was dishonoured, the bank did not credit the passbook; therefore, the cash book must be reduced by deducting the amount.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does a credit balance in the Cash Book indicate an overdraft?',
        answer: 'Because the Cash Book bank column is an asset account where debits represent deposits and credits represent withdrawals. A credit balance indicates that cumulative withdrawals have exceeded deposits, creating a debt owed to the bank.',
      },
      {
        prompt: 'What items are adjusted in the "Adjusted Cash Book" before drafting the final BRS?',
        answer: 'All items that appear in the passbook but were omitted from the cash book: bank charges, direct deposits by clients, interest credited, standing instructions paid, and dishonoured cheques. Only timing differences (unpresented cheques and uncollected deposits) remain in the BRS.',
      },
    ],
  },

  // CHAPTER 5
  {
    index: 5,
    filename: '05_CHAPTER_05_DEPRECIATION_ACCOUNTING_METHODS.md',
    fullTitle: 'DEPRECIATION ACCOUNTING & MATHEMATICAL METHODS (SLM & WDV)',
    shortHeader: 'CHAPTER 05 : DEPRECIATION ACCOUNTING',
    leadParagraph: 'Depreciation represents the systematic allocation of the depreciable amount of a tangible fixed asset over its estimated useful economic life in accordance with Ind AS 16. It reflects physical wear and tear, passage of time, and technological obsolescence. Understanding the divergent mathematical paths of the Straight Line Method (SLM) versus the Written Down Value (WDV) method is central to both statutory corporate accounting and Income Tax compliance.',
    content: `
## 1. Mathematical Formulas for Core Depreciation Methods

### 1. Straight Line Method (SLM / Fixed Installment Method)
$$\\text{Annual Depreciation (SLM)} = \\frac{\\text{Original Acquisition Cost} - \\text{Estimated Scrap Value}}{\\text{Useful Economic Life in Years}}$$
$$\\text{Rate of Depreciation (SLM)} = \\frac{\\text{Annual Depreciation}}{\\text{Original Cost}} \\times 100$$
- *Characteristic:* Constant depreciation amount is charged each year. Book value reaches exact scrap value (or zero) at the end of useful life.

### 2. Written Down Value Method (WDV / Reducing Balance Method)
$$D_t = r \\times \\text{Book Value}_{t-1}, \\quad \\text{where } r = 1 - \\sqrt[n]{\\frac{\\text{Scrap Value}}{\\text{Original Cost}}}$$
- *Characteristic:* Constant percentage is applied to the diminishing opening book value each year. Depreciation charges decline progressively over time. Mathematically, book value **never reaches absolute zero**.

### 3. Sum-of-the-Years'-Digits Method (SYD)
$$D_t = \\frac{\\text{Remaining Useful Life at Start of Year}}{\\frac{n(n+1)}{2}} \\times (\\text{Original Cost} - \\text{Scrap Value})$$
- *Characteristic:* Accelerated depreciation method allocating heavier write-offs in the initial productive years.

## 2. Master Comparison: SLM vs WDV Method

| Operational Parameter | Straight Line Method (SLM) | Written Down Value Method (WDV) |
| :--- | :--- | :--- |
| **Computation Base** | Fixed on **Original Cost** every year | Recomputed annually on the **Diminishing Book Value** |
| **Annual Charge** | Constant and uniform | Declining each year |
| **Combined Burden (Depreciation + Repairs)** | Unequal: Total burden rises in later years as repair expenses escalate | Equalized: Decreasing depreciation offsets escalating repair costs |
| **Terminal Asset Value** | Reduces to exact salvage value or zero | Never reaches zero mathematically |
| **Income Tax Act 1961 Recognition** | Allowed only for Power Generating units under Section 32 | **Mandatorily enforced** across all asset blocks |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **Land is never depreciated** because its useful economic life is legally and physically unlimited.
> 2. Under the Income Tax Act 1961, depreciation is computed on the **Written Down Value of the "Block of Assets"**, not on individual separate assets.
> 3. If an asset is acquired and put to use for **less than 180 days** in a financial year, the Income Tax Act allows only **50% of the standard depreciation rate**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A machine purchased for ₹2,00,000 has an estimated scrap value of ₹20,000 and an economic life of 10 years. Under the Straight Line Method (SLM), what is the annual depreciation charge?',
          options: ['(A) ₹20,000', '(B) ₹18,000', '(C) ₹22,000', '(D) ₹16,000'],
        },
        {
          q: 'Under which depreciation method does the book value of an asset never mathematically reach zero?',
          options: [
            '(A) Straight Line Method',
            '(B) Annuity Method',
            '(C) Written Down Value (WDV) Method',
            '(D) Depletion Method',
          ],
        },
        {
          q: 'For general business corporations under the Indian Income Tax Act 1961, depreciation must mandatorily be computed using:',
          options: ['(A) Sinking Fund Method', '(B) Straight Line Method', '(C) WDV Method on Block of Assets', '(D) Replacement Cost Method'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) ₹18,000. Annual Depreciation = (Cost − Scrap) / Life = (2,00,000 − 20,000) / 10 = 1,80,000 / 10 = ₹18,000.',
        'Q2 Correct Answer: (C) Written Down Value (WDV) Method. Applying a constant percentage to an ever-decreasing positive opening balance yields an asymptotically declining balance that never reaches zero.',
        'Q3 Correct Answer: (C) WDV Method on Block of Assets. Section 32 of the Income Tax Act mandates the WDV method applied to predefined blocks of assets (except for power-generating entities opting for SLM).',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does the WDV method provide a more equitable annual charge to the Profit & Loss statement compared to SLM?',
        answer: 'Because as an asset ages, its annual repair and maintenance expenses increase. Under WDV, depreciation charges decline over time, perfectly offsetting the rising repair bills and keeping the combined annual operating cost stable.',
      },
      {
        prompt: 'What is the "180-day rule" under Section 32 of the Income Tax Act 1961?',
        answer: 'If an asset is acquired and put to use for fewer than 180 days in the financial year of purchase, only 50% of the normal depreciation percentage is allowable for that tax year.',
      },
    ],
  },

  // CHAPTER 6
  {
    index: 6,
    filename: '06_CHAPTER_06_BILLS_OF_EXCHANGE_REBATE_DISCOUNT.md',
    fullTitle: 'BILLS OF EXCHANGE, ACCOMMODATION BILLS & REBATE ON BILLS DISCOUNTED',
    shortHeader: 'CHAPTER 06 : BILLS OF EXCHANGE & REBATE',
    leadParagraph: 'Commercial bills of exchange and promissory notes operate as primary credit instruments under the Negotiable Instruments Act 1881. In commercial banking, discounting trade bills provides working capital to corporate borrowers while generating fee and interest yields. At year-end, calculating the "Rebate on Bills Discounted" is a statutory necessity to eliminate unearned income extending beyond the accounting cut-off date.',
    content: `
## 1. Statutory Architecture: Bills of Exchange vs Promissory Notes

| Parameter | Bill of Exchange (Section 5, NI Act) | Promissory Note (Section 4, NI Act) |
| :--- | :--- | :--- |
| **Number of Parties** | **3 Parties:** Drawer (maker), Drawee (payer), and Payee | **2 Parties:** Maker (debtor) and Payee (creditor) |
| **Nature of Instrument** | Unconditional **Order** to pay a certain sum of money | Unconditional **Undertaking / Promise** to pay |
| **Acceptance Mandate** | Requires formal **Acceptance** by the drawee before liability attaches | Requires no acceptance (maker is already the primary obligor) |
| **Liability Hierarchy** | Drawer liability is secondary (attaches upon drawee dishonour) | Maker liability is primary and absolute |
| **Days of Grace** | **3 Days of Grace** mandatorily added to determine maturity date | **3 Days of Grace** added to usance notes |

## 2. Maturity Computation & Maturity Date Rules

$$\\text{Maturity Date} = \\text{Nominal Due Date} + 3 \\text{ Days of Grace}$$
- **Public Holiday Rule:** If the maturity date falls on a **Public Holiday** (under NI Act, e.g., Sunday, Independence Day), the bill becomes payable on the **Immediately Preceding Business Day**.
- **Emergency / Sudden Holiday Rule:** If the maturity date falls on a day declared an **Unforeseen / Emergency Holiday**, the bill becomes payable on the **Immediately Succeeding Business Day**.

## 3. Rebate on Bills Discounted (Unearned Discount)

When a bank discounts a bill of exchange, it deducts the entire discount upfront and credits the proceeds to the customer. When a bill matures *after* the close of the financial year (31 March), the discount portion relating to the post-closing period is unearned and must be deferred.

$$\\text{Rebate on Bills Discounted} = \\text{Face Value of Bill} \\times \\text{Discount Rate} \\times \\frac{\\text{Unexpired Days after 31 March}}{365}$$

- **Statutory Balance Sheet Treatment:**
  - *Deducted from Schedule 13 (Interest Earned)* in Form B Profit & Loss Account.
  - *Disclosed under Schedule 5 (Other Liabilities and Provisions)* in Form A Balance Sheet.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. An **Accommodation Bill** (kite flying bill) is drawn and accepted without any underlying commercial sale of goods, purely to raise mutual short-term finance.
> 2. **Noting and Protesting** under Sections 99 and 100 of the NI Act are carried out by a **Notary Public** to legally establish dishonour.
> 3. Rebate on Bills Discounted is essentially **Discount Received in Advance**; it represents a current liability for the bank.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A bill of exchange dated 1 January is drawn for 3 months. After adding statutory days of grace, its maturity date falls on 4 April. If 4 April is declared a Gazetted Public Holiday, when is the bill legally due?',
          options: ['(A) 5 April', '(B) 3 April', '(C) 6 April', '(D) 1 April'],
        },
        {
          q: 'How many days of grace are allowed under the Negotiable Instruments Act 1881 for computing the maturity date of usance bills?',
          options: ['(A) 2 Days', '(B) 3 Days', '(C) 5 Days', '(D) Nil for trade bills'],
        },
        {
          q: 'In the annual financial statements of a commercial bank, "Rebate on Bills Discounted" is presented under which schedule of Form A (Balance Sheet)?',
          options: ['(A) Schedule 1: Capital', '(B) Schedule 4: Borrowings', '(C) Schedule 5: Other Liabilities & Provisions', '(D) Schedule 12: Contingent Liabilities'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 3 April. Under Section 25 of the Negotiable Instruments Act 1881, if a maturity date falls on a scheduled public holiday, the instrument becomes payable on the immediately preceding business day.',
        'Q2 Correct Answer: (B) 3 Days. Section 22 of the NI Act provides that every instrument not payable on demand is entitled to 3 days of grace.',
        'Q3 Correct Answer: (C) Schedule 5: Other Liabilities & Provisions. Rebate on bills discounted represents unearned discount income attributable to the next financial year, constituting a current liability disclosed under Schedule 5.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What accounting journal entry is passed by a bank to record Rebate on Bills Discounted at year-end?',
        answer: 'Debit: Discount Account (reducing current year P&L Interest Earned); Credit: Rebate on Bills Discounted Account (creating a Schedule 5 liability). On 1 April of the new year, the entry is reversed.',
      },
      {
        prompt: 'What distinguishes an Accommodation Bill from a genuine Trade Bill?',
        answer: 'A Trade Bill arises from a genuine commercial sale and purchase of goods with real consideration. An Accommodation Bill is drawn, accepted, or endorsed without any underlying trade or consideration, executed solely to accommodate a party to raise short-term finance.',
      },
    ],
  },
];

async function main() {
  console.log(`Generating initial 6 chapters for IIBF Paper 3 (AFMB)...`);
  for (const ch of CHAPTERS) {
    const fullPath = path.join(OUT_DIR, ch.filename);
    let md = `# ${ch.fullTitle}\n\n`;
    md += `> **Paper:** 3 (Accounting & Financial Management for Bankers)\n`;
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
