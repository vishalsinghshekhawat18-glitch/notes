/**
 * Batch B3 IIBF Canonical Knowledge Seed (Topics 46–51: 19 Concepts)
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers:
 * - Paper 3: Accounting & Financial Management for Bankers (AFMB: CON-IIBF-33 to CON-IIBF-42)
 * - Paper 4: Retail Banking & Wealth Management (RBWM: CON-IIBF-43 to CON-IIBF-46)
 * - Banking Regulations & Statutory Governance (CON-IIBF-47 to CON-IIBF-49)
 * - RBI Grade B FM Management & Communication Vault (CON-IIBF-50 to CON-IIBF-51)
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const BATCH_B3_IIBF_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 46: ACCOUNTING FOUNDATIONS & FINANCIAL STATEMENTS (AFMB)
  // =========================================================================
  {
    id: 'CON-IIBF-33',
    topicOrder: 46,
    topicSlug: 'iibf-accounting-principles-and-financial-statements',
    topicTitle: 'Accounting Foundations & Financial Statements Architecture',
    topicDescription: 'GAAP principles, accounting concepts and conventions, Ind AS / IFRS convergence, and regulatory reporting.',
    slug: 'accounting-foundations-gaap-conventions-and-ind-as-ifrs-convergence',
    title: 'Accounting Foundations: GAAP Principles, Accounting Conventions & Ind AS Framework',
    shortDefinition: 'The bedrock concepts and conventions of financial accounting: The 4 Core Accounting Assumptions (Business Entity, Going Concern, Money Measurement, Accounting Period), Accounting Principles (Historical Cost, Dual Aspect [$Assets = Liabilities + Capital$], Revenue Realization, Matching Principle), Accounting Conventions (Conservatism / Prudence [anticipate no profits, provide for all possible losses], Full Disclosure, Consistency, Materiality), and the Indian Accounting Standards (Ind AS) aligned with International Financial Reporting Standards (IFRS) under the Companies (Indian Accounting Standards) Rules 2015.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-33-01',
        statement: 'Under the Business Entity Concept, a commercial enterprise is treated as a completely distinct legal and financial person from its owners/promoters; consequently, capital invested by the proprietor is treated as a liability of the business entity, and personal expenses drawn by the owner are debited as Drawings.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI Accounting Standard 1 (AS-1); ICAI Conceptual Framework for Financial Reporting',
        excerpt: 'Business entity concept treats business separate from owners; owner capital is a business liability.',
      },
      {
        id: 'CLM-IIBF-33-02',
        statement: 'The Principle of Conservatism (Prudence) dictates that financial statements must anticipate no future profits, but must provide for all possible known losses and liabilities; this convention forms the accounting basis for valuing closing stock at "Cost or Net Realizable Value (NRV), whichever is lower" and creating Provisions for Doubtful Debts.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI AS-1 & Ind AS 1; IIBF AFMB Module A',
        excerpt: 'Prudence dictates recognizing all anticipated losses and no unrealized profits.',
      },
      {
        id: 'CLM-IIBF-33-03',
        statement: 'Under the Dual Aspect Concept, every financial transaction has a simultaneous two-fold effect on the balance sheet, maintaining the immutable Fundamental Accounting Equation: Total Assets = Total Liabilities + Owner\'s Equity (Capital + Retained Earnings).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Luca Pacioli (1494); ICAI Module on Double-Entry Bookkeeping',
        excerpt: 'Dual aspect maintains the fundamental equation: Assets = Liabilities + Capital.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Grammar of Global Commerce',
        body: 'Accounting is not just arithmetic; it is the universal language of business. Without consistent rules, a company could claim future hypothetical sales as current profit, misleading lenders and investors.\n\n**GAAP Concepts and Conventions** provide the rigorous philosophical framework that ensures financial statements are honest, standardized, and comparable across continents.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Matrix of Accounting Concepts & Conventions',
        body: '| Concept / Convention | Fundamental Rule | Practical Accounting Application |\n| :--- | :--- | :--- |\n| **1. Business Entity Concept** | Business is legally separate from owner. | Owner\'s capital is recorded on the **Liabilities side** of the balance sheet. |\n| **2. Going Concern Concept** | Enterprise will continue operating indefinitely. | Fixed assets are recorded at **Historical Cost less Depreciation**, NOT at liquidation / breakup value. |\n| **3. Money Measurement Concept** | Only transactions expressible in monetary terms are recorded. | Employee morale, management capability, or labor strikes are **NOT recorded** in balance sheets. |\n| **4. Matching Principle** | Expenses of an accounting period must be matched against revenues earned in that same period. | Pre-paid expenses and accrued revenues are adjusted at year-end. |\n| **5. Conservatism (Prudence)** | Anticipate NO profits; provide for ALL probable losses. | **Closing Stock valued at Cost or Market Price (NRV), whichever is LOWER**; creating bad debt provisions. |\n| **6. Materiality Convention** | Only items of financial significance need detailed disclosure. | Purchasing a ₹200 stapler is expensed immediately rather than capitalized and depreciated over 10 years. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Accounting Principles',
        body: '1. **Closing Stock Valuation:** Valuing closing stock at *"Cost or Market Price, whichever is LOWER"* is based strictly on the **CONVENTION OF CONSERVATISM (PRUDENCE)**.\n2. **Historical Cost Basis:** Fixed assets are recorded at cost (not resale value) due to the **GOING CONCERN CONCEPT**.\n3. **Accrual vs Cash Basis:** Under the Accrual Concept (Ind AS 1), revenue is recognized when **EARNED** (goods delivered), not when physical cash is received.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module A - Accounting Concepts & Conventions',
        notes: 'Direct MCQs: Match concepts (Conservatism->Cost or NRV lower, Going Concern->Historical cost, Matching->Accruals, Entity->Owner capital as liability).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Accounting Concepts: Business Entity (owner capital = liability), Going Concern (historical cost, not liquidation value), Money Measurement (only monetary items), Matching (expenses match revenue in same period). Conventions: Conservatism/Prudence (Anticipate no gains, provide for all losses -> Stock at lower of cost or NRV), Materiality (insignificant items expensed). Fundamental Equation: Assets = Liabilities + Capital.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under standard accounting principles (GAAP), on which foundational accounting convention is the rule of valuing Closing Stock at "Cost Price or Net Realizable Value (Market Price), whichever is lower" specifically based?',
        options: [
          'Convention of Full Disclosure',
          'Convention of Conservatism (Prudence)',
          'Convention of Consistency',
          'Convention of Materiality',
        ],
        correctAnswer: 'Convention of Conservatism (Prudence)',
        explanation: 'The convention of conservatism (also known as the doctrine of prudence) states that an accountant should anticipate no future profits, but provide for all possible losses. Valuing inventory at the lower of cost or market price ensures that unrealized gains are never recorded, while potential inventory losses are recognized immediately.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-34',
    topicOrder: 46,
    topicSlug: 'iibf-accounting-principles-and-financial-statements',
    topicTitle: 'Accounting Foundations & Financial Statements Architecture',
    topicDescription: 'Golden Rules of Accounting, Double-entry system, Journal entries & Ledger balancing.',
    slug: 'double-entry-bookkeeping-golden-rules-journal-entries-and-ledger-balancing',
    title: 'Double-Entry Bookkeeping: The 3 Golden Rules, Journalizing & Ledger Balancing',
    shortDefinition: 'The mechanics of double-entry financial recordkeeping: Classification of accounts into Real, Personal, and Nominal accounts, The 3 Traditional Golden Rules of Accounting (Personal: "Debit the Receiver, Credit the Giver"; Real: "Debit what comes in, Credit what goes out"; Nominal: "Debit all Expenses & Losses, Credit all Incomes & Gains"), Modern US Classification (Assets/Expenses [Debit increases, Credit decreases] vs Liabilities/Capital/Revenues [Credit increases, Debit decreases]), Journalizing transactions, and Ledger posting and balancing (Debit balance vs Credit balance).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-34-01',
        statement: 'In traditional double-entry bookkeeping, accounts are classified into Personal Accounts (natural persons, artificial legal entities, representative personal accounts), Real Accounts (tangible and intangible physical assets), and Nominal Accounts (expenses, losses, incomes, gains).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI Foundation Course – Principles and Practice of Accounting; IIBF AFMB Module A',
        excerpt: '3 Account types: Personal, Real, Nominal.',
      },
      {
        id: 'CLM-IIBF-34-02',
        statement: 'The 3 Golden Rules of Accounting govern all journal entries: Personal Accounts ("Debit the Receiver, Credit the Giver"), Real Accounts ("Debit what comes in, Credit what goes out"), and Nominal Accounts ("Debit all Expenses and Losses, Credit all Incomes and Gains").',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Double-Entry System Standard Doctrine; NCERT Class 11 Accountancy, Ch 3',
        excerpt: 'Golden Rules: Personal (Dr receiver, Cr giver), Real (Dr what comes in, Cr what goes out), Nominal (Dr expenses, Cr incomes).',
      },
      {
        id: 'CLM-IIBF-34-03',
        statement: 'Representative Personal Accounts represent an individual or group of persons whose names are represented by an account title (e.g. Outstanding Salaries Account, Prepaid Rent Account, Accrued Interest Account), and follow the Golden Rule for Personal Accounts.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI Accounting Guidelines on Account Classification',
        excerpt: 'Outstanding/Prepaid expense accounts are Representative Personal Accounts.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Perfect Symmetry of Double Entry',
        body: 'Every economic exchange is a two-way transaction: if a business buys a computer for ₹50,000 cash, it gains an Asset (**Computer comes in: Debit**) and gives up another Asset (**Cash goes out: Credit**).\n\nDouble-entry bookkeeping ensures that for every debit there is an equal and opposite credit, preserving mathematical equilibrium across the entire enterprise ledger.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 3 Traditional Golden Rules of Accounting',
        body: '```mermaid\ngraph TD\n    ACC["CLASSIFICATION OF ACCOUNTS"]\n    ACC --> PERS["1. PERSONAL ACCOUNTS (Individuals, Firms, Companies, Bank)<br>★ RULE: Debit the Receiver, Credit the Giver"]\n    ACC --> REAL["2. REAL ACCOUNTS (Assets: Cash, Machinery, Land, Patents)<br>★ RULE: Debit what comes in, Credit what goes out"]\n    ACC --> NOM["3. NOMINAL ACCOUNTS (Expenses, Losses, Revenue, Profit)<br>★ RULE: Debit all Expenses & Losses, Credit all Incomes & Gains"]\n```',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Account Classification',
        body: '1. **Bank Account Classification:** A Bank Account is a **PERSONAL ACCOUNT** (an artificial legal person), NOT a real account!\n2. **Salary vs Outstanding Salary:**\n   * **Salary Account:** **Nominal Account** (an expense).\n   * **Outstanding Salary Account:** **Representative Personal Account** (represents employees to whom salary is owed).\n   * **Prepaid Rent Account:** **Representative Personal Account**.\n3. **Goodwill / Patents / Trademarks:** Intangible assets are **REAL ACCOUNTS** (property of the business).',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module A - Double Entry & Golden Rules',
        notes: 'Classic trap questions: Classify Bank (Personal), Outstanding Wages (Representative Personal), Prepaid Insurance (Representative Personal), and Goodwill (Real).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Golden Rules: Personal (Dr Receiver, Cr Giver - e.g. Bank, Debtors, Creditors). Real (Dr what comes in, Cr what goes out - e.g. Cash, Machinery, Goodwill). Nominal (Dr Expenses/Losses, Cr Incomes/Gains - e.g. Salary, Rent, Interest). Outstanding/Prepaid expense accounts = Representative Personal Accounts. Debit balance = Assets & Expenses; Credit balance = Liabilities, Capital & Incomes.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under traditional double-entry bookkeeping rules, how is the "Outstanding Salaries Account" (salaries due to employees but not yet paid at year-end) correctly classified?',
        options: [
          'Nominal Account',
          'Real Account',
          'Representative Personal Account',
          'Artificial Personal Account',
        ],
        correctAnswer: 'Representative Personal Account',
        explanation: 'While "Salaries Account" is a Nominal Account (recording an expense), when an adjective like "Outstanding" or "Prepaid" is prefixed to a nominal item, it becomes a "Representative Personal Account" because it represents the group of employees to whom money is owed by the business.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-35',
    topicOrder: 46,
    topicSlug: 'iibf-accounting-principles-and-financial-statements',
    topicTitle: 'Accounting Foundations & Financial Statements Architecture',
    topicDescription: 'Trial Balance preparation, Types of Accounting Errors, and Rectification Entries.',
    slug: 'trial-balance-preparation-classification-of-accounting-errors-and-rectification-entries',
    title: 'Trial Balance & Rectification of Errors: Classification of Errors & Suspense Account',
    shortDefinition: 'The verification of ledger arithmetic and error rectification in accounting: Trial Balance (statement of debit and credit ledger balances proving arithmetical accuracy), The 4 Classical Types of Accounting Errors (Errors of Omission [Complete vs Partial], Errors of Commission [wrong amount/wrong side/casting error], Errors of Principle [violating capital vs revenue expenditure], Compensating Errors [two errors neutralizing each other]), Errors affecting vs not affecting Trial Balance agreement, and the Suspense Account (temporary ledger account created to artificially balance the trial balance pending error investigation).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-35-01',
        statement: 'A Trial Balance is a statement prepared with debit and credit balances of ledger accounts on a specific date to test arithmetical accuracy; however, agreement of a trial balance is NOT conclusive proof of accounting accuracy, as several categories of errors (Errors of Principle, Complete Omission, Compensating Errors, and Errors of Original Entry) do not disrupt the equality of debits and credits.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI Accounting Guidelines; IIBF AFMB Module A',
        excerpt: 'Trial balance agreement proves arithmetic equality but does not detect Errors of Principle or Omission.',
      },
      {
        id: 'CLM-IIBF-35-02',
        statement: 'An Error of Principle occurs when an accounting transaction is recorded in fundamental violation of accounting principles (such as treating Capital Expenditure as Revenue Expenditure, e.g. debiting Machinery Repairs Account instead of Machinery Account for installation costs); Errors of Principle DO NOT affect the agreement of the Trial Balance.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Principles of Financial Accounting; ICAI Study Material',
        excerpt: 'Error of Principle treats Capital as Revenue (or vice versa); Trial Balance still agrees.',
      },
      {
        id: 'CLM-IIBF-35-03',
        statement: 'When a Trial Balance fails to agree due to one-sided errors and financial statements must be closed, the difference is temporarily transferred to a "Suspense Account"; upon subsequent discovery and rectification of the one-sided errors, the Suspense Account is automatically cleared and closed.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI AS-5 (Net Profit or Loss for the Period, Prior Period Items and Changes in Accounting Policies)',
        excerpt: 'Suspense account temporarily holds trial balance differences until one-sided errors are rectified.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why a Balanced Ledger Can Still Be Completely Wrong',
        body: 'If you debit ₹10,000 to "Office Rent" instead of capitalizing it as "Building Improvement", your debit column and credit column will balance with mathematical perfection to the exact rupee.\n\nYet, your reported annual profit will be understated by ₹10,000. Understanding the **4 Types of Accounting Errors** is crucial for auditing financial health and detecting bookkeeping fraud.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Classification of Accounting Errors',
        body: '| Error Category | Definition & Nature | Effect on Trial Balance Agreement? |\n| :--- | :--- | :--- |\n| **1. Errors of Principle** | Violation of fundamental accounting concepts (treating **Capital expenditure as Revenue expenditure** or vice-versa). *Example:* Debiting Machinery purchase to Purchases A/c. | **TRIAL BALANCE AGREES (No Disagreement)**. |\n| **2. Errors of Complete Omission**| A transaction is completely omitted from both journal and ledger. *Example:* Credit sale of ₹5,000 completely forgotten. | **TRIAL BALANCE AGREES (No Disagreement)**. |\n| **3. Compensating Errors** | One error cancels out another error on the opposite side. *Example:* Debiting A by ₹100 less and Crediting B by ₹100 less. | **TRIAL BALANCE AGREES (No Disagreement)**. |\n| **4. Errors of Commission (One-Sided)**| Arithmetic mistakes, wrong posting to wrong side, casting (addition) errors, or posting wrong amount in one account. *Example:* Total of Sales book undercast by ₹1,000. | **TRIAL BALANCE FAILS TO AGREE** (Requires **Suspense Account**). |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Rectification of Errors',
        body: '1. **Wages Paid for Installation of Machinery:** Wages paid to install a new machine MUST BE DEBITED to **Machinery Account** (Capital Expenditure). If debited to Wages Account, it is an **ERROR OF PRINCIPLE**.\n2. **Suspense Account Usage:** A Suspense Account is used to rectify **ONE-SIDED ERRORS ONLY**. Two-sided errors (like Errors of Principle) are rectified directly through journal entries without touching the Suspense Account.\n3. **Post-Finalization Prior Period Items:** Errors discovered after the annual accounts are closed must be routed through the **Profit & Loss Adjustment Account**.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module A - Trial Balance & Rectification of Errors',
        notes: 'Guaranteed MCQs: Identify error type (Wages for installation in Wages A/c -> Error of Principle; Sales book undercast -> Error of Commission; Suspense A/c usage).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Trial Balance: Proves arithmetic equality, NOT absolute correctness. Errors NOT affecting TB: Errors of Principle (Capital vs Revenue), Complete Omission, Compensating Errors, Error of Original Entry. Errors AFFECTING TB: One-sided errors (Casting, posting wrong side/amount) -> Difference put in Suspense Account. Wages for machine installation debited to wages = Error of Principle.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'An accountant debited ₹25,000 paid as freight and installation charges for newly purchased factory machinery to the "Freight / Expenses Account" instead of capitalizing it to the "Machinery Account". How is this error classified and how does it affect the agreement of the Trial Balance?',
        options: [
          'It is an Error of Commission; the Trial Balance will fail to agree by ₹25,000',
          'It is an Error of Principle; the Trial Balance will still agree',
          'It is a Compensating Error; the Trial Balance will fail to agree',
          'It is an Error of Omission; the Trial Balance will still agree',
        ],
        correctAnswer: 'It is an Error of Principle; the Trial Balance will still agree',
        explanation: 'Treating a capital expenditure (freight and installation to bring machinery to working condition) as a revenue expense is a fundamental violation of accounting principles (an Error of Principle). Because an equal debit of ₹25,000 was entered (though in the wrong account), the Trial Balance debit and credit totals will remain perfectly equal and agree.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-36',
    topicOrder: 46,
    topicSlug: 'iibf-accounting-principles-and-financial-statements',
    topicTitle: 'Accounting Foundations & Financial Statements Architecture',
    topicDescription: 'Bank Reconciliation Statement (BRS) mechanics, timing differences, and reconciliation rules.',
    slug: 'bank-reconciliation-statement-brs-mechanics-timing-differences-and-reconciliation-rules',
    title: 'Bank Reconciliation Statement (BRS): Timing Differences, Direct Entries & Reconciliation Rules',
    shortDefinition: 'The reconciliation mechanics between the Cash Book (Bank Column maintained by the customer/firm) and the Pass Book / Bank Statement (maintained by the bank): Causes of disagreement (Timing Differences [Cheques issued but not presented for payment, Cheques deposited but not cleared/collected], Direct Bank Transactions [Interest credited by bank, Bank charges/commission debited, Direct collections from debtors, Direct standing order payments], and Errors in Cash Book or Pass Book), Favorable Balances (Debit balance in Cash Book = Credit balance in Pass Book) vs Overdraft / Unfavorable Balances (Credit balance in Cash Book = Debit balance in Pass Book), and Adjusted Cash Book method.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-36-01',
        statement: 'A Bank Reconciliation Statement (BRS) is a periodic statement prepared by a customer to explain and reconcile the discrepancy between the Bank balance shown in their Cash Book and the balance shown in the Bank Pass Book / Statement on a particular date.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI Guidelines on Bank Reconciliation; IIBF AFMB Module A',
        excerpt: 'BRS reconciles differences between customer Cash Book and Bank Pass Book.',
      },
      {
        id: 'CLM-IIBF-36-02',
        statement: 'In banking terminology, a Favorable balance is represented by a DEBIT balance in the customer\'s Cash Book and a CREDIT balance in the Bank Pass Book; an Overdraft (Unfavorable) balance is represented by a CREDIT balance in the Cash Book and a DEBIT balance in the Pass Book.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Standard Double-Entry Bookkeeping Rules; NCERT Class 11 Accountancy, Ch 5',
        excerpt: 'Favorable = Dr in Cash Book / Cr in Pass Book; Overdraft = Cr in Cash Book / Dr in Pass Book.',
      },
      {
        id: 'CLM-IIBF-36-03',
        statement: 'In BRS calculations starting from Cash Book (Favorable Debit Balance): Cheques issued but not presented for payment are ADDED (+), Direct deposits by customers are ADDED (+), Interest credited by bank is ADDED (+); Cheques deposited but not cleared are DEDUCTED (-), Bank charges debited are DEDUCTED (-), and Direct payments by bank are DEDUCTED (-).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'BRS Calculation Algorithms; IIBF Paper 3 AFMB Guide',
        excerpt: 'Starting from Cash Book: Add unpresented cheques; deduct uncollected cheques and bank charges.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Your Checkbook Rarely Matches Your Bank Statement',
        body: 'On December 31, your company checkbook shows ₹10,00,000 in the bank. You login to net banking, and the bank statement shows ₹12,50,000.\n\nDid the bank make a mistake? Almost never. You wrote a ₹3,00,000 cheque to a vendor who hasn\'t cashed it yet (**Cheque Issued but Not Presented**), and the bank charged ₹50,000 for annual term loan interest (**Direct Debit**).\n\nA **Bank Reconciliation Statement (BRS)** maps every rupee of timing difference.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master BRS Operational Rules Matrix',
        body: '| Transaction / Event | Starting from Cash Book (Dr Balance) | Starting from Pass Book (Cr Balance) |\n| :--- | :--- | :--- |\n| **1. Cheques issued but not yet presented for payment** | **ADD (+)** (Cash Book had reduced it; Pass book hasn\'t). | **DEDUCT (-)** |\n| **2. Cheques deposited / paid in but not yet cleared/collected** | **DEDUCT (-)** (Cash Book had increased it; Pass book hasn\'t).| **ADD (+)** |\n| **3. Interest credited by Bank in Pass Book only** | **ADD (+)** | **DEDUCT (-)** |\n| **4. Bank charges / SMS fees / Commission debited by Bank** | **DEDUCT (-)** | **ADD (+)** |\n| **5. Direct deposit by a customer into Bank account** | **ADD (+)** | **DEDUCT (-)** |\n| **6. Direct payment made by Bank as per Standing Instruction** | **DEDUCT (-)** | **ADD (+)** |\n| **7. Cheque deposited dishonored (debited in Pass Book only)** | **DEDUCT (-)** | **ADD (+)** |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in BRS Numericals',
        body: '1. **Favorable vs Overdraft Notation:**\n   * **Cash Book Debit = Favorable** (+)\n   * **Cash Book Credit = Overdraft** (-)\n   * **Pass Book Credit = Favorable** (+)\n   * **Pass Book Debit = Overdraft** (-)\n2. **Overdraft Rule:** If starting with an **Overdraft balance**, simply reverse the signs or treat the opening balance as negative and apply standard addition/deductions algebraically.\n3. **Adjusted Cash Book First:** In modern corporate accounting, all genuine errors in the Cash Book and direct entries (bank charges, direct deposits) are first recorded in an **Adjusted Cash Book**, and only pure timing differences (unpresented/uncollected cheques) are reconciled in BRS.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module A - Bank Reconciliation Statement',
        notes: 'High-frequency numericals: calculate Pass Book balance given Cash Book balance with unpresented cheques, uncollected cheques, and bank charges.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'BRS: Reconciles Cash Book (bank column) with Pass Book. Favorable = Dr Cash Book / Cr Pass Book. Overdraft = Cr Cash Book / Dr Pass Book. From Cash Book balance: ADD (Cheques issued not presented, Direct customer deposits, Interest credited). DEDUCT (Cheques deposited not cleared, Bank charges, Standing instruction payments, Dishonored cheques).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A firm\'s Cash Book shows a favorable bank balance of ₹50,000 on March 31. Investigation reveals: (1) Cheques issued amounting to ₹15,000 have not yet been presented to the bank for payment, and (2) Bank charges of ₹1,000 debited in the Pass Book are not recorded in the Cash Book. What is the balance as per the Bank Pass Book?',
        options: [
          '₹64,000 (Credit Balance)',
          '₹36,000 (Debit Balance)',
          '₹66,000 (Credit Balance)',
          '₹34,000 (Credit Balance)',
        ],
        correctAnswer: '₹64,000 (Credit Balance)',
        explanation: 'Starting with Cash Book Favorable Balance = ₹50,000. Add: Cheques issued but not presented = +₹15,000. Less: Bank charges debited by bank = -₹1,000. Balance as per Pass Book = ₹50,000 + ₹15,000 - ₹1,000 = ₹64,000 (Credit / Favorable Balance).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 47: FINANCIAL MATHEMATICS & CAPITAL BUDGETING (AFMB)
  // =========================================================================
  {
    id: 'CON-IIBF-37',
    topicOrder: 47,
    topicSlug: 'iibf-financial-mathematics-and-capital-budgeting',
    topicTitle: 'Financial Mathematics, Depreciation & Capital Budgeting Architecture',
    topicDescription: 'Depreciation methods (SLM, WDV, Sinking Fund), Time Value of Money (TVM), and Capital Budgeting techniques.',
    slug: 'depreciation-accounting-methods-straight-line-slm-written-down-value-wdv-and-sinking-fund',
    title: 'Depreciation Accounting: Straight Line (SLM), Written Down Value (WDV) & Sinking Fund Methods',
    shortDefinition: 'The statutory and mathematical allocation of depreciable asset cost over its estimated useful economic life under Ind AS 16 / AS 6 and Companies Act 2013 (Schedule II): Causes of depreciation (Wear and Tear, Efflux of Time, Obsolescence), Straight Line Method (SLM: constant fixed annual depreciation charge, asset book value reaches zero or scrap value), Written Down Value / Diminishing Balance Method (WDV: constant percentage applied to diminishing book value, higher depreciation in initial years, asset book value never reaches zero mathematically; recognized under Income Tax Act 1961 Section 32), and Sinking Fund / Annuity Methods.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-37-01',
        statement: 'Under the Straight Line Method (SLM), annual depreciation is a constant fixed amount computed as: Annual Depreciation = (Cost of Asset - Estimated Scrap Value) / Estimated Useful Life in Years, resulting in an equal charge to the Profit & Loss statement every year.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICAI Ind AS 16 (Property, Plant and Equipment); Companies Act 2013 (Schedule II)',
        excerpt: 'SLM charges equal fixed annual depreciation: (Cost - Scrap) / Useful Life.',
      },
      {
        id: 'CLM-IIBF-37-02',
        statement: 'Under the Written Down Value (WDV) Method, depreciation is charged at a fixed percentage on the diminishing book value of the asset at the beginning of each year, resulting in high depreciation in early years and progressively lower depreciation in later years; the WDV method is the ONLY depreciation method recognized for corporate tax deductions under Section 32 of the Income Tax Act 1961 (block of assets system).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Income Tax Act, 1961 (Section 32); Companies Act 2013',
        excerpt: 'WDV charges fixed % on reducing balance; recognized for tax depreciation under Sec 32.',
      },
      {
        id: 'CLM-IIBF-37-03',
        statement: 'Under the Sinking Fund Method of depreciation, an equal annual depreciation amount is charged to P&L and simultaneously invested in outside interest-earning securities so that the accumulated principal plus compound interest exactly equals the cost of replacing the asset upon expiry of its useful life.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Principles of Financial Management; IIBF AFMB Module B',
        excerpt: 'Sinking Fund invests annual depreciation externally to accumulate replacement cost at maturity.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Spreading the Burden of Long-Term Wear and Tear',
        body: 'When a bank purchases an enterprise mainframe server for ₹10 Crore with an expected 5-year life, expensing the entire ₹10 Crore in Year 1 would wipe out profits falsely.\n\n**Depreciation Accounting** systematically matches the cost of the asset against the revenues it generates across its 5-year operational lifetime.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Depreciation Formulas Suite',
        body: '### 1. Straight Line Method (SLM)\n$$\\mathbf{\\text{Annual Depreciation (SLM)} = \\frac{\\text{Original Cost} - \\text{Scrap / Residual Value}}{\\text{Estimated Useful Life in Years}}}$$\n$$\\mathbf{\\text{Rate of Depreciation (SLM)} = \\frac{\\text{Annual Depreciation}}{\\text{Original Cost}} \\times 100}$$\n\n### 2. Written Down Value Method (WDV)\n$$\\mathbf{\\text{Rate of Depreciation (WDV) } (r) = \\left[ 1 - \\left( \\frac{S}{C} \\right)^{\\frac{1}{n}} \\right] \\times 100}$$\n* $S$: Scrap Value | $C$: Original Cost | $n$: Useful Life in Years.\n* **Book Value at Year $t$:** $\\mathbf{\\text{Book Value}_t = C \\times (1 - r)^t}$.',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'SLM vs WDV Comparison Matrix',
        body: '| Feature | Straight Line Method (SLM) | Written Down Value Method (WDV) |\n| :--- | :--- | :--- |\n| **Depreciation Base** | **Original Cost** throughout asset life. | **Reducing Book Value (WDV)** at start of each year. |\n| **Annual Depreciation Amount**| **Constant / Equal** every year. | **Declines progressively** every year. |\n| **Total Burden on P&L (Depreciation + Repairs)** | **Unequal** (Low repairs in early years + fixed dep = low burden; High repairs in later years + fixed dep = heavy burden). | **Equitable / Balanced** (High dep + low repairs early; Low dep + high repairs later = level annual burden). |\n| **Can Book Value Reach Zero?**| **YES**, reaches scrap value or zero. | **NO**, mathematically never reaches absolute zero. |\n| **Tax Law Recognition** | **Not accepted** by Income Tax Department (except power units). | **MANDATORILY ACCEPTED** under Indian Income Tax Act (Sec 32). |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Depreciation',
        body: '1. **Income Tax Method:** In India, corporate tax depreciation under Section 32 of Income Tax Act is **MANDATORILY calculated under WDV method** on "Block of Assets".\n2. **Profit on Sale of Asset:**\n   $$\\mathbf{\\text{Profit / Loss on Sale} = \\text{Net Sale Proceeds} - \\text{Book Value on Date of Sale}}$$\n3. **Depreciation on Land:** **Land is NEVER depreciated** because land has an infinite useful life (only buildings/improvements are depreciated).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module B - Depreciation Accounting & Methods',
        notes: 'Direct numericals: Calculate Year 3 book value under SLM and WDV, profit/loss on asset sale, and formula for WDV rate.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Depreciation: SLM = (Cost - Scrap) / Life (fixed annual amount, can reach zero). WDV = Fixed % on reducing balance (high initial dep, never reaches zero, mandatory under Sec 32 Income Tax Act). Sinking Fund = Invests depreciation externally to accumulate asset replacement fund. Land is never depreciated. Profit on sale = Sale proceeds minus WDV at sale date.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A company purchases a machine for ₹1,00,000 on April 1, 2023. The company charges depreciation at 20% per annum under the Written Down Value (WDV) method. What will be the Written Down Value (Book Value) of the machine on March 31, 2025 (after 2 years)?',
        options: [
          '₹60,000',
          '₹64,000',
          '₹80,000',
          '₹68,000',
        ],
        correctAnswer: '₹64,000',
        explanation: 'Year 1 (2023-24): Depreciation = 20% of ₹1,00,000 = ₹20,000. Book Value on March 31, 2024 = ₹1,00,000 - ₹20,000 = ₹80,000. Year 2 (2024-25): Depreciation = 20% of ₹80,000 = ₹16,000. Book Value on March 31, 2025 = ₹80,000 - ₹16,000 = ₹64,000 (or directly: ₹1,00,000 * (0.80)^2 = ₹64,000).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-38',
    topicOrder: 47,
    topicSlug: 'iibf-financial-mathematics-and-capital-budgeting',
    topicTitle: 'Financial Mathematics, Depreciation & Capital Budgeting Architecture',
    topicDescription: 'Time Value of Money (TVM), Compounding, Discounting, Ordinary Annuity & Annuity Due.',
    slug: 'time-value-of-money-compounding-discounting-annuities-sinking-funds-and-amortization',
    title: 'Time Value of Money (TVM): Compounding, Discounting, Annuities & Loan Amortization',
    shortDefinition: 'The core quantitative engine of financial mathematics and banking: Future Value ($FV = PV(1+r)^n$), Present Value ($PV = \\frac{FV}{(1+r)^n}$), Rule of 72 ($t \\approx \\frac{72}{r}$) and Rule of 114 (tripling money), Effective Annual Rate (EAR: $EAR = (1 + \\frac{r}{m})^m - 1$), Ordinary Annuity (cash flows at end of period) vs Annuity Due (cash flows at beginning of period, $PV_{\\text{Due}} = PV_{\\text{Ord}} \\times (1+r)$), Sinking Funds, Perpetuities ($PV = \\frac{C}{r}$ and Growing Perpetuity $PV = \\frac{C}{r - g}$), and Equated Monthly Installments (EMI loan amortization formula).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-38-01',
        statement: 'The Time Value of Money principle establishes that a sum of money received today is worth more than the identical sum received in the future due to its earning capacity (interest), inflation, and risk preference; future cash flows must be discounted to present value using an appropriate discount rate.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Eugene F. Brigham, Financial Management: Theory & Practice; IIBF AFMB Module B',
        excerpt: 'Money has time value due to interest, inflation, and opportunity cost.',
      },
      {
        id: 'CLM-IIBF-38-02',
        statement: 'An Ordinary Annuity consists of a series of equal periodic payments made at the END of each period; an Annuity Due consists of payments made at the BEGINNING of each period, where the Present Value and Future Value of an Annuity Due are exactly equal to the Ordinary Annuity value multiplied by (1 + r).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Mathematical Finance Standards; IIBF Treasury and AFMB Compendium',
        excerpt: 'Ordinary annuity pays at end of period; Annuity due pays at beginning (Value Due = Value Ord * (1+r)).',
      },
      {
        id: 'CLM-IIBF-38-03',
        statement: 'Equated Monthly Installment (EMI) for retail and term loan amortizations is computed using the Present Value of an Ordinary Annuity formula: EMI = [P * r * (1+r)^n] / [(1+r)^n - 1], where P is Principal, r is monthly interest rate, and n is number of monthly installments.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Retail Lending Mathematics; RBI Master Direction on Loans and Advances',
        excerpt: 'EMI formula: [P * r * (1+r)^n] / [(1+r)^n - 1].',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why a Rupee Today is Always Worth More than a Rupee Tomorrow',
        body: 'If someone offers you ₹1,00,000 today or ₹1,00,000 five years from now, you will instantly take the money today.\n\nWhy? Because ₹1,00,000 placed in a 7% bank fixed deposit today will grow into ₹1,40,255 in 5 years. **Time Value of Money (TVM)** translates all future financial commitments across decades into comparable present-day rupees.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master TVM Formula Suite',
        body: '### 1. Basic Compounding & Discounting\n$$\\mathbf{FV = PV \\times (1 + r)^n} \\qquad \\mathbf{PV = \\frac{FV}{(1 + r)^n}}$$\n$$\\mathbf{\\text{Effective Annual Rate (EAR)} = \\left( 1 + \\frac{r}{m} \\right)^m - 1}$$\n* $m$: Compounding frequency per year (e.g. $m=4$ for quarterly, $m=12$ for monthly).\n\n### 2. Annuity Formulas\n* **Future Value of Ordinary Annuity (FVOA):** $\\mathbf{\\text{FVOA} = C \\times \\left[ \\frac{(1 + r)^n - 1}{r} \\right]}$\n* **Present Value of Ordinary Annuity (PVOA):** $\\mathbf{\\text{PVOA} = C \\times \\left[ \\frac{1 - (1 + r)^{-n}}{r} \\right]}$\n* **Annuity Due Relationship:** $\\mathbf{\\text{Value}_{\\text{Due}} = \\text{Value}_{\\text{Ordinary}} \\times (1 + r)}$\n\n### 3. Perpetuity & EMI Formulas\n* **Perpetuity PV:** $\\mathbf{PV = \\frac{C}{r}}$\n* **Growing Perpetuity PV:** $\\mathbf{PV = \\frac{C}{r - g}}$\n* **Equated Monthly Installment (EMI):** $\\mathbf{\\text{EMI} = \\frac{P \\times r \\times (1 + r)^n}{(1 + r)^n - 1}}$ ($r$ = Monthly interest rate $= \\frac{\\text{Annual Rate}}{12 \\times 100}$).',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in TVM Calculations',
        body: '1. **Rule of 72 vs Rule of 114:**\n   * **Doubling Time:** $\\mathbf{t \\approx \\frac{72}{\\text{Interest Rate } (r)}}$\n   * **Tripling Time:** $\\mathbf{t \\approx \\frac{114}{\\text{Interest Rate } (r)}}$\n   * **Quadrupling Time:** $\\mathbf{t \\approx \\frac{144}{\\text{Interest Rate } (r)}}$\n2. **Ordinary Annuity vs Annuity Due:** Standard bank loan EMIs and bonds are **Ordinary Annuities (paid at end)**; Lease rents and Insurance premiums are **Annuities Due (paid in advance at beginning)**.\n3. **Monthly Rate in EMI:** Remember to divide the annual interest rate by **12** and multiply years by **12** to get monthly parameters!',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module B - Time Value of Money & Annuities',
        notes: 'Guaranteed 4-5 numerical MCQs: PV/FV calculation, Ordinary vs Due conversion (multiply by 1+r), Rule of 72/114, and Perpetuity formula.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'TVM: FV = PV*(1+r)^n; PV = FV/(1+r)^n. Rule of 72 = 72/r (doubles); Rule of 114 = 114/r (triples). Effective Rate (EAR) = (1 + r/m)^m - 1. Ordinary Annuity = Cash flow at end of period. Annuity Due = Cash flow at start (Value Due = Value Ord * (1+r)). Perpetuity PV = C / r. Growing Perpetuity = C / (r - g). EMI = [P*r*(1+r)^n] / [(1+r)^n - 1].',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'An investor deposits ₹10,000 at the END of every year into a Public Provident Fund (PPF) account earning a constant 8% compound interest per annum. If the Present Value of this Ordinary Annuity for 5 years is calculated as ₹39,927, what would be the Present Value if the deposits were made at the BEGINNING of each year (Annuity Due)?',
        options: [
          '₹39,927',
          '₹43,121',
          '₹47,185',
          '₹50,000',
        ],
        correctAnswer: '₹43,121',
        explanation: 'The relationship between the Present Value of an Annuity Due and an Ordinary Annuity is: PV(Annuity Due) = PV(Ordinary Annuity) * (1 + r). Here: PV(Annuity Due) = ₹39,927 * (1 + 0.08) = ₹39,927 * 1.08 = ₹43,121.16 ≈ ₹43,121.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-39',
    topicOrder: 47,
    topicSlug: 'iibf-financial-mathematics-and-capital-budgeting',
    topicTitle: 'Financial Mathematics, Depreciation & Capital Budgeting Architecture',
    topicDescription: 'Capital Budgeting techniques: Payback period, Discounted Payback, NPV, IRR, and Profitability Index (PI).',
    slug: 'capital-budgeting-techniques-payback-npv-irr-profitability-index-and-discounted-payback',
    title: 'Capital Budgeting Techniques: Payback Period, Net Present Value (NPV), IRR & PI Rules',
    shortDefinition: 'The appraisal and decision-making framework for long-term capital investments: Non-Discounted Techniques (Payback Period [PBP], Accounting Rate of Return [ARR]) vs Discounted Cash Flow (DCF) Techniques (Discounted Payback Period, Net Present Value [$\\text{NPV} = \\sum \\frac{CF_t}{(1+k)^t} - C_0$], Internal Rate of Return [IRR: discount rate where $\\text{NPV} = 0$], and Profitability Index [$\\text{PI} = \\frac{\\text{PV of Future Cash Inflows}}{\\text{Initial Outflow}}$]), Decision rules (Accept project if $\\text{NPV} > 0$, $\\text{IRR} > k$, $\\text{PI} > 1.0$), and resolving NPV vs IRR conflicts in mutually exclusive projects (Superiority of NPV due to realistic reinvestment rate assumption at cost of capital $k$).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-39-01',
        statement: 'Net Present Value (NPV) is the theoretically superior capital budgeting appraisal criterion because it measures absolute shareholder wealth addition ($NPV = \\sum \\frac{CF_t}{(1+k)^t} - C_0$) and assumes realistic cash flow reinvestment at the firm\'s Cost of Capital ($k$), whereas Internal Rate of Return (IRR) unrealistically assumes reinvestment at the IRR rate.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Richard Brealey & Stewart Myers, Principles of Corporate Finance; IIBF AFMB Module B',
        excerpt: 'NPV is superior to IRR; NPV assumes reinvestment at cost of capital (k); IRR assumes reinvestment at IRR.',
      },
      {
        id: 'CLM-IIBF-39-02',
        statement: 'The Internal Rate of Return (IRR) is the unique discount rate ($r$) that equates the Present Value of expected future cash inflows exactly to the initial capital outlay, resulting in a Net Present Value of exactly zero ($NPV = 0$); a project is acceptable if IRR exceeds the hurdle rate / Cost of Capital ($IRR > k$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Corporate Finance Standards; IIBF Project Appraisal Guidelines',
        excerpt: 'IRR is the discount rate where NPV = 0; project accepted if IRR > Cost of Capital.',
      },
      {
        id: 'CLM-IIBF-39-03',
        statement: 'The Profitability Index (PI / Benefit-Cost Ratio) is the ratio of the present value of future cash inflows to the initial cash outlay ($PI = \\frac{\\text{PV of Inflows}}{\\text{Initial Outflow}}$); a project is accepted if $PI > 1.0$, providing the optimal ranking metric under Capital Rationing constraints.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Principles of Capital Rationing; IIBF AFMB Module B',
        excerpt: 'PI = PV of Inflows / Initial Outflow; Accept if PI > 1.0; used for Capital Rationing.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Evaluating Multi-Crore Long-Term Capital Commitments',
        body: 'If a bank borrower proposes a ₹50 Crore automated warehouse expansion project promising cash flows over the next 10 years, how does the credit committee decide whether to finance it?\n\n**Capital Budgeting Techniques** discount all future revenues back to today\'s rupees, testing whether the project creates genuine economic value (**NPV > 0**) above the bank\'s lending rate.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Capital Budgeting Decision Rules',
        body: '| Technique | Formula / Definition | Accept / Reject Criterion | Key Strength / Limitation |\n| :--- | :--- | :--- | :--- |\n| **1. Payback Period (PBP)** | Time required to recover initial investment: $\\mathbf{\\text{PBP} = \\frac{\\text{Initial Outflow}}{\\text{Annual Cash Inflow}}}$. | Accept if $\\mathbf{\\text{PBP} < \\text{Target Cutoff}}$. | Simple liquidity measure; **Ignores TVM** and cash flows after payback! |\n| **2. Net Present Value (NPV)** | $\\mathbf{\\text{NPV} = \\sum_{t=1}^n \\frac{CF_t}{(1+k)^t} - C_0}$. | Accept if $\\mathbf{\\text{NPV} > 0}$. | **Gold Standard:** Measures wealth creation; assumes reinvestment at Cost of Capital ($k$). |\n| **3. Internal Rate of Return (IRR)**| Discount rate where $\\mathbf{\\text{NPV} = 0}$. | Accept if $\\mathbf{\\text{IRR} > k}$ (Hurdle Rate). | Popular percentage metric; suffers from multiple IRRs in non-normal cash flows. |\n| **4. Profitability Index (PI)** | $\\mathbf{\\text{PI} = \\frac{\\text{PV of Cash Inflows}}{C_0} = 1 + \\frac{\\text{NPV}}{C_0}}$. | Accept if $\\mathbf{\\text{PI} > 1.0}$. | **Best for Capital Rationing** (selecting projects under fixed budget ceiling). |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Capital Budgeting',
        body: '1. **NPV vs IRR Conflict:** For mutually exclusive projects (where you can choose only one), if NPV and IRR give conflicting rankings, **ALWAYS CHOOSE THE PROJECT WITH HIGHER NPV** (NPV maximizes absolute shareholder wealth).\n2. **Reinvestment Rate Assumptions:**\n   * **NPV assumes reinvestment at Cost of Capital ($k$)** (Realistic).\n   * **IRR assumes reinvestment at the IRR rate** (Unrealistic when IRR is high, e.g. 40%).\n3. **Relationship:** When $\\text{NPV} = 0$, $\\text{IRR} = k$ and $\\text{PI} = 1.0$.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module B - Capital Budgeting & Investment Decisions',
        notes: 'Direct numericals: compute Payback period, NPV at 10% discount rate, Profitability Index, and resolve NPV vs IRR conflicts.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Capital Budgeting: Payback Period = time to recover initial cost (ignores TVM). NPV = PV of Inflows - Initial Outflow (Accept if NPV > 0; gold standard, reinvests at k). IRR = Discount rate where NPV = 0 (Accept if IRR > Cost of Capital k). PI = PV of Inflows / Outflow = 1 + (NPV/C0) [Accept if PI > 1.0, best for Capital Rationing]. If NPV and IRR conflict in mutually exclusive projects, ALWAYS pick HIGHER NPV.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A capital investment project requires an initial cash outlay of ₹10,00,000. The present value of future cash inflows discounted at the company\'s cost of capital (10%) is calculated as ₹12,50,000. What are the Net Present Value (NPV) and Profitability Index (PI) of the project?',
        options: [
          'NPV = ₹2,50,000 and PI = 1.25',
          'NPV = ₹2,50,000 and PI = 0.80',
          'NPV = ₹12,50,000 and PI = 1.25',
          'NPV = -₹2,50,000 and PI = 1.20',
        ],
        correctAnswer: 'NPV = ₹2,50,000 and PI = 1.25',
        explanation: 'Net Present Value (NPV) = PV of Cash Inflows - Initial Outflow = ₹12,50,000 - ₹10,00,000 = ₹2,50,000. Profitability Index (PI) = PV of Cash Inflows / Initial Outflow = ₹12,50,000 / ₹10,00,000 = 1.25. Since NPV > 0 and PI > 1.0, the project is financially viable and acceptable.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 48: FINANCIAL ANALYSIS & BANKING TAXATION (AFMB)
  // =========================================================================
  {
    id: 'CON-IIBF-40',
    topicOrder: 48,
    topicSlug: 'iibf-financial-analysis-and-taxation',
    topicTitle: 'Financial Ratio Analysis & Banking Taxation Architecture',
    topicDescription: 'Liquidity, Solvency, Turnover, Profitability ratios, and DSCR metrics.',
    slug: 'financial-ratio-analysis-liquidity-solvency-profitability-turnover-and-dscr-metrics',
    title: 'Financial Ratio Analysis: Liquidity, Solvency, Turnover & Debt Service Coverage (DSCR)',
    shortDefinition: 'The quantitative financial statement analysis architecture used in bank credit underwriting: Liquidity Ratios (Current Ratio [$\\text{CR} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$, benchmark 1.33:1 under Tandon Method II], Quick / Acid-Test Ratio [$\\text{QR} = \\frac{\\text{Quick Assets (CA - Stock - Prepaid)}}{\\text{Current Liabilities}}$, benchmark 1:1]), Solvency / Leverage Ratios (Debt-Equity Ratio [$\\text{DER} = \\frac{\\text{Total Debt}}{\\text{Tangible Net Worth}}$, benchmark 2:1], Interest Coverage Ratio [$\\text{ICR} = \\frac{\\text{EBIT}}{\\text{Interest}}$]), Debt Service Coverage Ratio (DSCR: the supreme term-lending metric, $\\text{DSCR} = \\frac{\\text{PAT} + \\text{Depreciation} + \\text{Interest on Term Loan}}{\\text{Term Loan Installment} + \\text{Interest on Term Loan}}$, benchmark 1.5 to 2.0), and Turnover / Efficiency Ratios (Inventory Turnover, Debtors Collection Period).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-40-01',
        statement: 'The Debt Service Coverage Ratio (DSCR) is the paramount credit appraisal ratio for evaluating a term loan borrower\'s repayment capacity: DSCR = (Profit After Tax + Depreciation + Non-cash charges + Interest on Term Loans) / (Principal Term Loan Repayment Installments + Interest on Term Loans); commercial banks typically mandate a minimum average DSCR of 1.50 to 2.00 over the loan tenure.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Guidelines on Project Finance and Term Lending; IIBF AFMB Module C',
        excerpt: 'DSCR = (PAT + Dep + Term Loan Interest) / (Principal Repayment + Term Loan Interest); benchmark 1.5-2.0.',
      },
      {
        id: 'CLM-IIBF-40-02',
        statement: 'The Current Ratio (Current Assets / Current Liabilities) evaluates short-term liquidity and solvency; under Tandon Committee Method II of working capital financing, commercial banks enforce a minimum benchmark Current Ratio of 1.33:1, while the Quick / Acid-Test Ratio (excluding Inventory and Prepaid Expenses from Current Assets) carries a standard benchmark of 1.0:1.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Tandon Committee Report (1975); Standard Financial Statement Analysis Doctrine',
        excerpt: 'Current Ratio benchmark is 1.33:1 (Tandon II); Quick Ratio benchmark is 1.0:1.',
      },
      {
        id: 'CLM-IIBF-40-03',
        statement: 'The Debt-to-Equity Ratio (DER = Total Long-Term Debt / Tangible Net Worth) measures financial leverage and promoter capital cushion; commercial banks generally accept a maximum benchmark DER of 2:1 for general manufacturing and up to 3:1 or 4:1 for capital-intensive infrastructure projects.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Credit Policy Guidelines of Commercial Banks; IIBF Credit Risk Manual',
        excerpt: 'Debt-Equity Ratio benchmark is 2:1 for general industry (higher for infrastructure).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Decoding the Solvency Health of a Corporate Borrower',
        body: 'A corporate borrower can report a high net profit of ₹10 Crore, yet go bankrupt the next month if all its money is tied up in slow-moving unsold inventory while bank loans mature tomorrow.\n\n**Financial Ratios** dissect the balance sheet into four vital signs: Can they pay tomorrow\'s bills? (**Liquidity**), Can they survive long-term debt? (**Solvency & DSCR**), Are they utilizing machines efficiently? (**Turnover**), and Are operations profitable? (**Margins**).',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Banking Financial Ratios Formula Suite',
        body: '### 1. Liquidity Ratios\n$$\\mathbf{\\text{Current Ratio (CR)} = \\frac{\\text{Current Assets (CA)}}{\\text{Current Liabilities (CL)}}} \\quad (\\text{Benchmark } \\ge 1.33:1)$$\n$$\\mathbf{\\text{Quick / Acid-Test Ratio} = \\frac{\\text{CA} - \\text{Inventory} - \\text{Prepaid Expenses}}{\\text{Current Liabilities}}} \\quad (\\text{Benchmark } \\ge 1.0:1)$$\n\n### 2. Term Lending Solvency & Coverage Ratios\n$$\\mathbf{\\text{Debt-Equity Ratio (DER)} = \\frac{\\text{Total Long-Term Debt}}{\\text{Tangible Net Worth (TNW)}}} \\quad (\\text{Benchmark } \\le 2.0:1)$$\n$$\\mathbf{\\text{Interest Coverage Ratio (ICR)} = \\frac{\\text{EBIT}}{\\text{Interest Charges}}} \\quad (\\text{Benchmark } \\ge 2.0)$$\n$$\\mathbf{\\text{DSCR} = \\frac{\\text{PAT} + \\text{Depreciation} + \\text{Interest on Term Loan}}{\\text{Principal Installment Due} + \\text{Interest on Term Loan}}} \\quad (\\text{Benchmark } 1.5 - 2.0)$$\n\n### 3. Operating & Efficiency Ratios\n* **Debtors Velocity (Collection Period in Days):** $\\mathbf{\\frac{\\text{Trade Debtors}}{\\text{Net Credit Sales}} \\times 365}$\n* **Inventory Turnover Ratio:** $\\mathbf{\\frac{\\text{Cost of Goods Sold (COGS)}}{\\text{Average Inventory}}}$',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Ratio Calculations',
        body: '1. **DSCR Numerator Components:** Always remember to **ADD BACK Depreciation** (a non-cash expense) and **Term Loan Interest** to Profit After Tax (PAT) in the DSCR numerator!\n2. **Tangible Net Worth (TNW):**\n   $$\\mathbf{\\text{TNW} = \\text{Paid-up Equity Capital} + \\text{Free Reserves} - \\text{Revaluation Reserves} - \\text{Intangible Assets (Goodwill)} - \\text{Accumulated Losses}}$$\n3. **Quick Ratio Exclusions:** In Quick Assets, **Inventory (Stock) and Prepaid Expenses are ALWAYS EXCLUDED**.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module C - Financial Statement Analysis & Ratio Calculations',
        notes: 'Guaranteed 4-5 numerical MCQs: Compute DSCR, Current Ratio, Quick Ratio, Debt-Equity Ratio, and Debtors Collection Period.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Ratios: Current Ratio = CA / CL (min 1.33:1). Quick Ratio = (CA - Stock - Prepaid) / CL (min 1:1). Debt-Equity = Debt / TNW (max 2:1). Interest Coverage = EBIT / Interest. DSCR = (PAT + Depreciation + Term Loan Interest) / (Principal Repayment + Term Loan Interest) [Benchmark 1.5-2.0]. Tangible Net Worth = Capital + Reserves - Intangibles - Losses. Collection Period = (Debtors / Sales) * 365.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A company\'s financial statements reveal: Profit After Tax (PAT) = ₹40 Lakh, Depreciation = ₹15 Lakh, Interest on Term Loan = ₹25 Lakh, and Annual Term Loan Principal Repayment Installment = ₹20 Lakh. What is the Debt Service Coverage Ratio (DSCR) for the company?',
        options: [
          'DSCR = 1.78',
          'DSCR = 2.00',
          'DSCR = 1.33',
          'DSCR = 2.40',
        ],
        correctAnswer: 'DSCR = 1.78',
        explanation: 'DSCR = (PAT + Depreciation + Term Loan Interest) / (Principal Repayment + Term Loan Interest) = (₹40 Lakh + ₹15 Lakh + ₹25 Lakh) / (₹20 Lakh + ₹25 Lakh) = ₹80 Lakh / ₹45 Lakh = 1.777... ≈ 1.78. Since DSCR is 1.78 (within the benchmark 1.5–2.0 range), the loan repayment capacity is satisfactory.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-41',
    topicOrder: 48,
    topicSlug: 'iibf-financial-analysis-and-taxation',
    topicTitle: 'Financial Ratio Analysis & Banking Taxation Architecture',
    topicDescription: 'Cost Accounting, Marginal Costing, Break-Even Point (BEP) & Margin of Safety.',
    slug: 'cost-accounting-and-marginal-costing-break-even-point-bep-margin-of-safety-and-pv-ratio',
    title: 'Marginal Costing & Break-Even Analysis: Contribution, PV Ratio, BEP & Margin of Safety',
    shortDefinition: 'The cost accounting and managerial decision-making framework: Fixed Costs (remain constant regardless of production volume) vs Variable Costs (vary directly with production output), Contribution ($C = \\text{Sales} - \\text{Variable Cost} = \\text{Fixed Cost} + \\text{Profit}$), Profit-Volume Ratio (PV Ratio: $\\text{PVR} = \\frac{\\text{Contribution}}{\\text{Sales}} \\times 100$), Break-Even Point in Units ($\\text{BEP}_{\\text{units}} = \\frac{\\text{Fixed Cost}}{\\text{Contribution per Unit}}$), Break-Even Point in Value ($\\text{BEP}_{\\text{Rs}} = \\frac{\\text{Fixed Cost}}{\\text{PV Ratio}}$), Margin of Safety (MOS: $\\text{MOS} = \\text{Actual Sales} - \\text{Break-Even Sales} = \\frac{\\text{Profit}}{\\text{PV Ratio}}$), and Cost-Volume-Profit (CVP) analysis.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-41-01',
        statement: 'Under Marginal Costing, Contribution is the excess of Sales Revenue over Variable Costs ($C = S - V$), which first recovers Fixed Costs and thereafter contributes towards profit; Marginal Cost equation is: Sales - Variable Cost = Fixed Cost + Profit ($S - V = F + P$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ICMAI Cost Accounting Standards; IIBF AFMB Module C',
        excerpt: 'Marginal Costing equation: Sales - Variable Cost = Contribution = Fixed Cost + Profit.',
      },
      {
        id: 'CLM-IIBF-41-02',
        statement: 'The Break-Even Point (BEP) is the level of sales output at which total revenues exactly equal total costs (Total Revenue = Fixed Cost + Variable Cost), resulting in zero profit and zero loss (Contribution = Fixed Cost); BEP in sales value is computed as: BEP (₹) = Fixed Cost / PV Ratio.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Cost-Volume-Profit Analysis Standards; IIBF AFMB Module C',
        excerpt: 'BEP is no-profit no-loss point where Contribution = Fixed Cost; BEP (₹) = Fixed Cost / PV Ratio.',
      },
      {
        id: 'CLM-IIBF-41-03',
        statement: 'The Margin of Safety (MOS) represents the buffer of safety by which actual/budgeted sales exceed the Break-Even sales ($MOS = \\text{Actual Sales} - \\text{Break-Even Sales}$), measuring the maximum drop in sales that can occur before the firm begins incurring financial losses; Margin of Safety (₹) = Profit / PV Ratio.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Management Accounting Standards; IIBF Paper 3 Master Guide',
        excerpt: 'Margin of Safety = Actual Sales - BEP Sales = Profit / PV Ratio.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Knowing the Exact Survival Threshold of a Business',
        body: 'A restaurant pays ₹2,00,000 monthly rent whether it serves 1 customer or 1,000 customers (**Fixed Cost**). Each meal served costs ₹100 in ingredients (**Variable Cost**) and sells for ₹300.\n\nEach meal contributes ₹200 towards paying the rent (**Contribution**). How many meals must the restaurant sell each month just to survive without losing money? Exactly 1,000 meals (**Break-Even Point**).\n\n**Marginal Costing** answers these critical operational and lending risk questions.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Marginal Costing Formula Suite',
        body: '### 1. The Fundamental Marginal Cost Equations\n$$\\mathbf{\\text{Contribution } (C) = \\text{Sales } (S) - \\text{Variable Cost } (V) = \\text{Fixed Cost } (F) + \\text{Profit } (P)}$$\n$$\\mathbf{\\text{PV Ratio (Profit-Volume Ratio)} = \\frac{\\text{Contribution}}{\\text{Sales}} \\times 100 = \\frac{\\Delta \\text{Profit}}{\\Delta \\text{Sales}} \\times 100}$$\n\n### 2. Break-Even Point (BEP)\n$$\\mathbf{\\text{BEP (in Units)} = \\frac{\\text{Fixed Cost}}{\\text{Contribution per Unit}} = \\frac{F}{S_{\\text{unit}} - V_{\\text{unit}}}}$$\n$$\\mathbf{\\text{BEP (in Sales Value ₹)} = \\frac{\\text{Fixed Cost}}{\\text{PV Ratio}} = \\frac{F}{\\text{PVR}}}$$\n\n### 3. Margin of Safety (MOS) & Required Sales for Target Profit\n$$\\mathbf{\\text{Margin of Safety (MOS ₹)} = \\text{Actual Sales} - \\text{Break-Even Sales} = \\frac{\\text{Profit}}{\\text{PV Ratio}}}$$\n$$\\mathbf{\\text{MOS } (\\%) = \\frac{\\text{Actual Sales} - \\text{BEP Sales}}{\\text{Actual Sales}} \\times 100}$$\n$$\\mathbf{\\text{Required Sales for Target Profit } (P_{\\text{target}}) = \\frac{\\text{Fixed Cost} + P_{\\text{target}}}{\\text{PV Ratio}}}$$',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Marginal Costing',
        body: '1. **PV Ratio from Two Periods:** When given sales and profits for two consecutive years:\n   $$\\mathbf{\\text{PV Ratio} = \\frac{\\text{Change in Profit}}{\\text{Change in Sales}} \\times 100}$$\n2. **Profit at Margin of Safety:** Profit is generated **EXCLUSIVELY by the Margin of Safety sales** ($Profit = MOS \\times PV Ratio$), because Fixed Costs are already 100% recovered at the Break-Even point!\n3. **High vs Low Margin of Safety:** A high MOS indicates strong business health (can survive economic downturns); a low MOS indicates high vulnerability to insolvency.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module C - Marginal Costing & Break-Even Analysis',
        notes: 'Guaranteed 3-4 numerical MCQs: Calculate PV ratio from 2 periods, BEP in units and value, Margin of Safety %, and sales required for target profit.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Marginal Costing: Contribution = Sales - Variable Cost = Fixed Cost + Profit. PV Ratio = (Contribution / Sales) * 100 = (Change in Profit / Change in Sales) * 100. BEP (Units) = Fixed Cost / Contribution per unit. BEP (₹) = Fixed Cost / PV Ratio. Margin of Safety = Actual Sales - BEP Sales = Profit / PV Ratio. Sales for Target Profit = (Fixed Cost + Target Profit) / PV Ratio.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A manufacturing firm has Fixed Costs of ₹2,00,000 per annum, sells its product at ₹50 per unit, and incurs a Variable Cost of ₹30 per unit. What is the Break-Even Point in Units and the PV Ratio of the firm?',
        options: [
          'BEP = 10,000 Units and PV Ratio = 40%',
          'BEP = 10,000 Units and PV Ratio = 60%',
          'BEP = 4,000 Units and PV Ratio = 40%',
          'BEP = 6,667 Units and PV Ratio = 50%',
        ],
        correctAnswer: 'BEP = 10,000 Units and PV Ratio = 40%',
        explanation: 'Contribution per unit = Selling Price - Variable Cost = ₹50 - ₹30 = ₹20 per unit. PV Ratio = (Contribution per unit / Selling Price) * 100 = (₹20 / ₹50) * 100 = 40%. Break-Even Point (in Units) = Fixed Cost / Contribution per unit = ₹2,00,000 / ₹20 = 10,000 Units.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-42',
    topicOrder: 48,
    topicSlug: 'iibf-financial-analysis-and-taxation',
    topicTitle: 'Financial Ratio Analysis & Banking Taxation Architecture',
    topicDescription: 'Direct and Indirect Taxation, TDS under Income Tax Act & GST on Banking Services.',
    slug: 'banking-taxation-architecture-tds-under-income-tax-act-and-gst-applicability-on-banking-services',
    title: 'Banking Taxation Architecture: TDS Provisions (Sec 194A, 194N) & GST on Banking Services',
    shortDefinition: 'The statutory tax withholding and indirect taxation regime applicable to banking operations: Tax Deducted at Source (TDS under Income Tax Act 1961: Section 194A for interest on bank fixed deposits [threshold ₹40,000 for standard individuals, ₹50,000 for Senior Citizens; Form 15G / 15H self-declarations; 10% standard TDS or 20% under Section 206AA if PAN is not provided], Section 194N for cash withdrawals [2% TDS on cash withdrawals >₹1 Crore per year, or >₹20 Lakh for non-filers]), and Goods and Services Tax (GST: 18% standard rate on banking fee-based services [processing fees, locker rent, ATM fees, card charges]; interest on loans/deposits is exempt from GST).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-42-01',
        statement: 'Under Section 194A of the Income Tax Act 1961, commercial banks must deduct TDS at 10% on interest paid on time deposits (fixed/recurring deposits) if aggregate annual interest exceeds ₹40,000 for general individuals and ₹50,000 for Senior Citizens (aged 60+), unless the depositor submits a valid self-declaration in Form 15G (for non-senior citizens with nil tax) or Form 15H (for senior citizens).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Income Tax Act, 1961 (Section 194A & Section 197A); Central Board of Direct Taxes (CBDT)',
        excerpt: 'TDS on bank interest: ₹40k limit (general), ₹50k (senior citizens); 10% rate; Form 15G/15H.',
      },
      {
        id: 'CLM-IIBF-42-02',
        statement: 'Under Section 206AA of the Income Tax Act 1961, if a payee fails to furnish a valid Permanent Account Number (PAN) to the bank, TDS must be deducted at the penal rate of 20% (or the applicable statutory rate, whichever is higher).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Income Tax Act, 1961 (Section 206AA); CBDT Circulars',
        excerpt: 'Section 206AA mandates penal TDS of 20% if PAN is not furnished.',
      },
      {
        id: 'CLM-IIBF-42-03',
        statement: 'Under the Goods and Services Tax (GST) Act, fee-based and service-charge banking transactions (loan processing fees, locker rent, debit card annual fees, issuance charges) are subject to 18% GST (9% CGST + 9% SGST / 18% IGST), whereas core interest transactions (interest on loans, advances, deposits, and savings accounts) are statutorily EXEMPT from GST.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Central Goods and Services Tax Act, 2017 (Notification No. 12/2017-Central Tax (Rate)); GST Council',
        excerpt: '18% GST on banking fee services; interest on loans and deposits is 100% exempt from GST.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Banker as the Government\'s Frontline Tax Collector',
        body: 'To prevent widespread tax evasion on passive investment incomes, the Government mandates commercial banks to withhold income tax at source (**TDS**) before crediting interest to depositors\' accounts.\n\nSimultaneously, banks must bifurcate their service charges (taxable under **GST at 18%**) from core lending interest (which is legally **GST-exempt**).',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Banking Taxation Thresholds & Rules',
        body: '| Statutory Provision | Tax Scope & Trigger Threshold | Applicable Tax Rate | Exemption / Relief Form |\n| :--- | :--- | :--- | :--- |\n| **TDS on FD Interest (Sec 194A)** | Annual interest on bank time deposits **$> ₹40,000$** (General individuals) or **$> ₹50,000$** (Senior Citizens aged $\\ge 60$). | **10.0%** (if PAN provided). | **Form 15G** (Age $<60$, total income $<$ taxable limit).<br>**Form 15H** (Senior Citizens $\\ge 60$). |\n| **Penal TDS (Sec 206AA)** | Triggered when depositor **fails to furnish valid PAN**. | **20.0%** (Penal rate). | None (Invalidates Form 15G/15H). |\n| **TDS on Cash Withdrawals (Sec 194N)**| Aggregate cash withdrawals from bank accounts exceeding **₹1 Crore in a FY** (or $> ₹20 \\text{ Lakh}$ for non-filers). | **2.0%** on amount $> ₹1 \\text{ Cr}$ (5% for non-filers $> ₹1 \\text{ Cr}$). | Normal banking business exemptions. |\n| **GST on Banking Services** | All **Fee-based banking charges** (Locker rent, processing fees, ATM charges, DD charges). | **18.0% GST** | **Interest on loans, advances & deposits is 100% EXEMPT from GST**. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Banking Taxation',
        body: '1. **Form 15G vs Form 15H:**\n   * **Form 15G:** For individuals **BELOW 60 years** whose estimated total income is below basic taxable exemption limit.\n   * **Form 15H:** For Senior Citizens **AGED 60 YEARS OR ABOVE** (tax liability on total income must be zero).\n2. **TDS Threshold for Savings Account:** TDS under Section 194A applies **ONLY to Time Deposits (FD/RD)**. **Savings Bank account interest is NOT SUBJECT TO TDS** (Deduction up to ₹10,000 available to depositor under Sec 80TTA / ₹50,000 for seniors under Sec 80TTB).\n3. **GST on Interest:** Core interest earned on bank loans or paid on deposits is **COMPLETELY EXEMPT FROM GST**.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 3 (AFMB): Module D - Taxation in Banking & TDS Provisions',
        notes: 'Direct MCQs on TDS limits (₹40k / ₹50k seniors), Form 15G vs 15H, Sec 206AA 20% penal rate, and 18% GST fee rate.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Banking Taxation: Sec 194A TDS on FD interest > ₹40,000 (general) or > ₹50,000 (Senior citizens 60+) at 10% rate. Form 15G (under 60) & Form 15H (senior 60+) exempt from TDS. Sec 206AA: No PAN = 20% penal TDS. Sec 194N: 2% TDS on cash withdrawals > ₹1 Crore/yr. Savings account interest = NO TDS. GST = 18% on fees/charges (Interest on loans/deposits is GST-exempt).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Section 194A of the Income Tax Act 1961, what is the annual interest threshold on bank fixed/time deposits beyond which a commercial bank is mandatorily required to deduct Tax Deducted at Source (TDS) for a Senior Citizen customer (aged 65 years)?',
        options: [
          'Interest exceeding ₹10,000 in a financial year',
          'Interest exceeding ₹40,000 in a financial year',
          'Interest exceeding ₹50,000 in a financial year',
          'Interest exceeding ₹1,00,000 in a financial year',
        ],
        correctAnswer: 'Interest exceeding ₹50,000 in a financial year',
        explanation: 'Under Section 194A of the Income Tax Act, the threshold limit for deduction of TDS on interest from bank fixed/time deposits is ₹50,000 per financial year for Senior Citizens (individuals aged 60 years and above). For general/non-senior citizen individuals, the threshold is ₹40,000.',
        trapExplanation: 'Candidates confuse the general ₹40,000 threshold with the senior citizen ₹50,000 threshold.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 49: RETAIL BANKING & WEALTH MANAGEMENT (RBWM)
  // =========================================================================
  {
    id: 'CON-IIBF-43',
    topicOrder: 49,
    topicSlug: 'iibf-retail-banking-products-and-wealth-management',
    topicTitle: 'Retail Banking Products & Wealth Management Architecture',
    topicDescription: 'Retail Banking characteristics, customer segmentation models, and cross-selling strategies.',
    slug: 'retail-banking-architecture-customer-segmentation-business-models-and-cross-selling',
    title: 'Retail Banking Architecture: Customer Segmentation Models & Cross-Selling Metrics',
    shortDefinition: 'The operational and structural framework of Retail Banking under IIBF RBWM: Characteristics (B2C mass retail, multiple products, low ticket size, high customer volume, diversified risk spread), Customer Segmentation Models (Mass Market [<₹10 Lakh income], Mass Affluent [₹10-50 Lakh], High Net Worth Individuals [HNI: ₹50 Lakh - ₹5 Crore], Ultra-HNI [>₹5 Crore investable surplus]), Organizational Business Models (Horizontally Organized, Vertically Organized, Regionally Organized, Matrix Structure), and Cross-Selling / Upselling (Cross-sell ratio = Products per customer; target > 3.0).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-43-01',
        statement: 'Retail Banking is characterized by a mass market B2C orientation providing standardized consumer financial products (liabilities, consumer credit, bancassurance, wealth advisory) to large numbers of individual customers, providing commercial banks with a high-margin, diversified asset base with low individual default concentration.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'IIBF RBWM Master Curriculum; BCBS Guidance on Retail Banking Risks',
        excerpt: 'Retail banking is high volume, low ticket, low default concentration consumer banking.',
      },
      {
        id: 'CLM-IIBF-43-02',
        statement: 'Under customer segmentation models in Indian wealth management: Mass Market covers individuals with annual income up to ₹10 Lakh; Mass Affluent covers income between ₹10 Lakh and ₹50 Lakh; High Net Worth Individuals (HNIs) possess investable assets between ₹50 Lakh and ₹5 Crore; Ultra-HNIs possess investable surplus exceeding ₹5 Crore (or USD 1 Million).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Wealth Management Association Guidelines; IIBF RBWM Module A',
        excerpt: 'Segmentation: Mass (<₹10L), Mass Affluent (₹10-50L), HNI (₹50L-5Cr), Ultra-HNI (>₹5Cr).',
      },
      {
        id: 'CLM-IIBF-43-03',
        statement: 'In bank business model architecture: a Vertically Organized Model organizes banking operations by product lines across the entire country (e.g. specialized Retail Lending Centers - RLCs); a Horizontally Organized Model organizes operations by customer segments (e.g. separate HNI, corporate, and retail divisions).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'IIBF RBWM Module A (Retail Business Models)',
        excerpt: 'Vertical model organizes by product line; Horizontal model organizes by customer segment.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Wholesale Corporate Loans to 500 Million Retail Smartphones',
        body: 'Lending ₹1,000 Crore to a single corporate steel tycoon carries catastrophic risk if the promoter defaults. Lending that same ₹1,00,000 Crore across 200,000 individual home buyers and car owners ensures that even if 1,000 borrowers lose their jobs, 199,000 continue paying their EMIs.\n\n**Retail Banking** powers bank balance sheets through risk diversification, sticky CASA deposits, and lucrative fee income from **Bancassurance and Cross-Selling**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Customer Segmentation Matrix in Retail Banking',
        body: '| Customer Segment | Annual Income / Investable Assets | Core Banking & Investment Product Strategy |\n| :--- | :--- | :--- |\n| **1. Mass Market** | Annual Income $< ₹10 \\text{ Lakh}$. | Basic Savings (BSBDA), Jan Dhan, UPI, Micro-loans, Gold loans, Two-wheeler loans. |\n| **2. Mass Affluent** | Annual Income **₹10 Lakh to ₹50 Lakh**. | Premium Credit Cards, Home Loans, Auto Loans, SIP Mutual Funds, Term Insurance. |\n| **3. High Net Worth (HNI)**| Investable Assets **₹50 Lakh to ₹5 Crore**. | Dedicated Relationship Manager, Wealth Management, Portfolio Management Services (PMS), AIFs. |\n| **4. Ultra-HNI** | Investable Surplus **$> ₹5 \\text{ Crore}$ ($> \\$1 \\text{ Million}$)**. | Family Office, Estate Planning, Private Equity, Offshore Trusts, Structured Debt. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Retail Banking Models',
        body: '1. **Vertical vs Horizontal Model:**\n   * **Vertical Model = By Product Lines** (Home loan branch, Auto loan branch).\n   * **Horizontal Model = By Customer Segment** (Mass division, HNI private banking division).\n2. **Cross-Sell Ratio:** Defined as $\\mathbf{\\text{Cross-Sell Ratio} = \\frac{\\text{Total Products Sold}}{\\text{Total Customer Base}}}$. A ratio $>3.0$ indicates high customer loyalty and profitability.\n3. **Bancassurance:** Distribution of insurance products through bank branch networks under IRDAI Corporate Agency guidelines (a bank can tie up with up to 9 life, 9 general, and 9 health insurers).',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 4 (RBWM): Module A - Retail Banking Architecture & Segmentation',
        notes: 'Direct MCQs on Segmentation income tiers (Mass/Affluent/HNI/Ultra-HNI), Vertical vs Horizontal models, and Bancassurance 9+9+9 rule.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Retail Banking: High volume, low ticket, low default risk spread. Segments: Mass (<₹10L), Mass Affluent (₹10-50L), HNI (₹50L-5Cr), Ultra-HNI (>₹5Cr). Business Models: Vertical = product lines (RLC); Horizontal = customer segment. Bancassurance (IRDAI): Bank can tie up with up to 9 Life + 9 General + 9 Health insurers. Cross-sell ratio = Products per customer.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under IRDAI (Registration of Corporate Agents) Regulations, what is the maximum number of insurance companies from each category (Life, General, and Health) that a commercial bank acting as a Corporate Agent is legally permitted to tie up with for Bancassurance distribution?',
        options: [
          'Maximum 3 Life, 3 General, and 3 Health insurers',
          'Maximum 9 Life, 9 General, and 9 Health insurers',
          'Maximum 1 Life, 1 General, and 1 Health insurer (Open Architecture prohibition)',
          'Unlimited tie-ups with no regulatory ceiling',
        ],
        correctAnswer: 'Maximum 9 Life, 9 General, and 9 Health insurers',
        explanation: 'Under the revised IRDAI Corporate Agency Regulations (effective 2022), a commercial bank acting as a corporate agent can partner with up to nine (9) Life Insurance companies, nine (9) General Insurance companies, and nine (9) Standalone Health Insurance companies (the "9+9+9 Open Architecture Model") to offer wider choice to bank customers.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-44',
    topicOrder: 49,
    topicSlug: 'iibf-retail-banking-products-and-wealth-management',
    topicTitle: 'Retail Banking Products & Wealth Management Architecture',
    topicDescription: 'Retail Lending Products: Housing Loans (LTV limits), Auto Loans, Education Loans & Credit Cards.',
    slug: 'retail-lending-products-home-loans-ltv-emi-credit-cards-and-education-loans',
    title: 'Retail Lending Products: Home Loans (LTV & Risk Weights), Auto, Education & Credit Cards',
    shortDefinition: 'The underwriting parameters, regulatory ceilings, and statutory norms for major retail asset products: Housing Loans under RBI Prudential Norms (Loan-to-Value [LTV] ceilings: up to ₹30 Lakh loan = max 90% LTV; >₹30 Lakh to ₹75 Lakh = max 80% LTV; >₹75 Lakh = max 75% LTV; prohibition on adding stamp duty/registration to property cost for LTV calculations on loans >₹10 Lakh), Floating vs Fixed Interest Rates (no foreclosure/prepayment penalties on floating rate retail term loans to individuals), Education Loans (Model IBA Scheme: up to ₹4 Lakh no margin/collateral; >₹4 Lakh to ₹7.5 Lakh 5% margin with third-party guarantee; >₹7.5 Lakh 15% margin with tangible collateral), and Credit Cards (20 to 50 days interest-free credit, Minimum Amount Due - MAD 5%, Most Important Terms and Conditions - MITC).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-44-01',
        statement: 'Under RBI Prudential Regulations on Housing Finance, the Loan-to-Value (LTV) ratio for individual housing loans is capped at: (a) 90% for loans up to ₹30 Lakh, (b) 80% for loans between >₹30 Lakh and ₹75 Lakh, and (c) 75% for loans above ₹75 Lakh.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Housing Finance (Circular RBI/2017-18/193 & LTV Rationalization 2020/2022)',
        excerpt: 'LTV ceilings for home loans: <=₹30L is 90%; ₹30-75L is 80%; >₹75L is 75%.',
      },
      {
        id: 'CLM-IIBF-44-02',
        statement: 'Under RBI Fair Practices Code, commercial banks and NBFCs are strictly PROHIBITED from levying any Foreclosure Charges or Pre-payment Penalties on floating-rate term loans (including home loans, vehicle loans, and personal loans) sanctioned to individual borrowers for purposes other than business.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Circular – Levy of Foreclosure Charges / Pre-payment Penalty on Floating Rate Term Loans',
        excerpt: 'Foreclosure/prepayment penalties prohibited on floating-rate retail loans to individuals.',
      },
      {
        id: 'CLM-IIBF-44-03',
        statement: 'Under the IBA Model Educational Loan Scheme, educational loans up to ₹4 Lakh require NO borrower margin and NO collateral security/third-party guarantee; loans from >₹4 Lakh to ₹7.5 Lakh require 5% margin for studies in India (15% abroad) and third-party guarantee (or CGFSEL credit guarantee); loans above ₹7.5 Lakh require tangible collateral security.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Banks\' Association (IBA) Model Educational Loan Scheme; Credit Guarantee Fund for Educational Loans (CGFSEL)',
        excerpt: 'Education loans: <=₹4 Lakh (No margin/collateral); ₹4-7.5L (5% margin + guarantee); >₹7.5L (Collateral).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Prudential Guardrails Against Retail Asset Bubbles',
        body: 'If banks lent 100% of a home\'s purchase price with zero down-payment from the buyer, real estate speculation would surge. If home prices fell 10%, every borrower would default and walk away from negative-equity properties (the root cause of the *2008 US Subprime Crisis*).\n\n**Loan-to-Value (LTV) limits and Margin Requirements** ensure that borrowers always have genuine personal equity skin-in-the-game.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Retail Loan Underwriting Parameters',
        body: '| Retail Loan Product | Maximum Loan-to-Value (LTV) / Margin | Mandatory Collateral / Security Norms | Special Regulatory Rules |\n| :--- | :--- | :--- | :--- |\n| **Housing Loan ( $\\le ₹30 \\text{ L}$)** | **Max 90% LTV** (Borrower margin 10%). | Equitable Mortgage of residential house/flat (Title Deeds). | Risk weight standardized by RBI. |\n| **Housing Loan ($> ₹30 \\text{ L} \\text{ to } ₹75 \\text{ L}$)**| **Max 80% LTV** (Borrower margin 20%). | Equitable Mortgage of residential property. | Stamp duty cannot be capitalized for LTV if loan $>₹10\\text{L}$. |\n| **Housing Loan ($> ₹75 \\text{ Lakh}$)** | **Max 75% LTV** (Borrower margin 25%). | Equitable Mortgage of residential property. | Maximum LTV is strictly 75%. |\n| **Education Loan ( $\\le ₹4 \\text{ Lakh}$)** | **Zero Margin (100% Finance)**. | **NO Collateral & NO Third-Party Guarantee** (Parents co-borrower). | Moratorium: Course duration + 1 year (or 6 months after job). |\n| **Education Loan ($> ₹4 \\text{ L} \\text{ to } ₹7.5 \\text{ L}$)**| **5% Margin** (India) / **15%** (Abroad). | Third-party guarantee / CGFSEL cover. | Concessional interest rate for girls (0.50% rebate). |\n| **Education Loan ($> ₹7.5 \\text{ Lakh}$)** | **5% Margin** (India) / **15%** (Abroad). | **Tangible Collateral Security** matching loan value. | Repayment tenor up to 15 years. |\n| **Credit Cards** | Credit limit based on income & CIBIL score. | Unsecured revolving credit. | Minimum Amount Due (MAD) = 5% of outstanding bill; 20-50 days grace. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Retail Lending',
        body: '1. **LTV Slabs for Home Loans:** Remember the exact 3 tiers: **90% for $\\le ₹30\\text{L}$**, **80% for ₹30–75L**, and **75% for $> ₹75\\text{L}$**.\n2. **Pre-payment Penalty Rule:** Banks **CANNOT charge pre-payment/foreclosure penalties on FLOATING RATE retail loans** to individuals (can be charged on fixed-rate loans or loans to business entities).\n3. **Education Loan Moratorium:** Repayment starts **1 year after course completion, OR 6 months after securing employment, whichever is EARLIER**.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 4 (RBWM): Module B - Retail Lending Products & Housing Finance',
        notes: 'Direct MCQs on 90%/80%/75% LTV home loan slabs, Education loan ₹4L / ₹7.5L security rules, and foreclosure charge bans.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Home Loan LTV: <=₹30L = max 90% LTV; ₹30-75L = max 80%; >₹75L = max 75%. Floating rate retail loans = Zero foreclosure/prepayment penalty. Education Loans: <=₹4 Lakh (0% margin, no collateral/guarantee); ₹4-7.5L (5% margin India/15% abroad, third-party guarantee); >₹7.5L (Collateral required). Moratorium = Course + 1 yr (or 6m after job). Credit Cards: MAD = 5%.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s prudential guidelines on individual Housing Loans, what is the MAXIMUM permissible Loan-to-Value (LTV) ratio for a home loan of ₹25 Lakh sanctioned to an individual borrower?',
        options: [
          'Maximum 75% LTV',
          'Maximum 80% LTV',
          'Maximum 85% LTV',
          'Maximum 90% LTV',
        ],
        correctAnswer: 'Maximum 90% LTV',
        explanation: 'Under RBI Prudential Guidelines on Housing Finance, for individual housing loans up to ₹30 Lakh, the maximum Loan-to-Value (LTV) ratio permitted is 90% (meaning the borrower must contribute a minimum 10% margin). For loans between ₹30 Lakh and ₹75 Lakh, max LTV is 80%; for loans above ₹75 Lakh, max LTV is 75%.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-45',
    topicOrder: 49,
    topicSlug: 'iibf-retail-banking-products-and-wealth-management',
    topicTitle: 'Retail Banking Products & Wealth Management Architecture',
    topicDescription: 'Credit Information Companies (CICs), CIBIL scoring, Recovery & Debt Recovery Agent (DRA) code.',
    slug: 'credit-information-companies-cics-cibil-scoring-and-debt-recovery-agent-dra-guidelines',
    title: 'Credit Information Companies (CICs): CIBIL Scoring & RBI Debt Recovery Agent (DRA) Code',
    shortDefinition: 'The credit scoring, credit reporting, and recovery governance architecture under the Credit Information Companies (Regulation) Act 2005 (CICRA) and RBI guidelines: The 4 Licensed CICs in India (TransUnion CIBIL, Equifax, Experian, CRIF High Mark), CIBIL TransUnion Score (numeric score ranging from 300 to 900; scores $\\ge 750$ considered prime benchmark), Credit Information Report (CIR: trade lines, DPD [Days Past Due], settled/written-off flags), RBI Debt Recovery Agent (DRA) Guidelines (mandatory IIBF 100/50-hour DRA training and certification, calling hours strictly between 8:00 AM and 7:00 PM, ban on intimidation/harassment/abusive language, maintaining recording of recovery calls).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-45-01',
        statement: 'Under the Credit Information Companies (Regulation) Act 2005 (CICRA), all Credit Institutions (Banks, NBFCs, HFCs) are mandatorily required to be members of ALL four RBI-licensed Credit Information Companies (TransUnion CIBIL, Equifax, Experian, CRIF High Mark) and furnish monthly borrower credit data to all 4 CICs.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Credit Information Companies (Regulation) Act, 2005 (Section 15); RBI Master Direction on CICs',
        excerpt: 'Banks must be members of all 4 licensed CICs (CIBIL, Equifax, Experian, CRIF) and report monthly.',
      },
      {
        id: 'CLM-IIBF-45-02',
        statement: 'Under RBI Master Directions on Recovery Agents engaged by Regulated Entities, recovery agents and bank staff are strictly prohibited from contacting borrowers before 8:00 AM and after 7:00 PM, cannot visit borrower residence without prior notice, cannot threaten or publicly humiliate borrowers, and must hold mandatory IIBF Debt Recovery Agent (DRA) certification.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Circular – Outsourcing of Financial Services / Guidelines on Recovery Agents (August 2022)',
        excerpt: 'DRA calling hours strictly 8 AM to 7 PM; harassment strictly banned; IIBF DRA certification mandatory.',
      },
      {
        id: 'CLM-IIBF-45-03',
        statement: 'A CIBIL credit score is a 3-digit numeric summary of an individual\'s credit payment history ranging from 300 to 900, where 300 represents highest credit risk and 900 represents lowest credit risk; commercial banks generally mandate a minimum score of 700 to 750 for prime retail loan interest pricing.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'CIBIL Credit Scoring Methodology; IIBF RBWM Module B',
        excerpt: 'CIBIL score ranges from 300 to 900; score >= 750 is prime benchmark.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Digital Reputation Ledger of 1 Billion Borrowers',
        body: 'Before 2000, a borrower could take a ₹10 Lakh loan from Bank A, default, and walk across the street to get another ₹10 Lakh loan from Bank B because banks did not share customer default data.\n\n**Credit Information Companies (CICs)** created a centralized national repository where every loan repayment, credit card payment, and default is logged, generating an objective **Credit Score (300 to 900)**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Licensed Credit Information Companies in India',
        body: '| Credit Bureau (CIC) | Primary Sponsor / International Parent | Key Operational Focus in India |\n| :--- | :--- | :--- |\n| **1. TransUnion CIBIL** | TransUnion International (India\'s 1st credit bureau, setup 2000). | Largest retail and commercial credit database in India. |\n| **2. Equifax India** | Equifax Inc. (USA) & Indian financial institutions. | Retail credit, microfinance bureau, fraud prevention analytics. |\n| **3. Experian India** | Experian Plc (UK). | Consumer credit scoring, commercial business data, credit analytics. |\n| **4. CRIF High Mark** | CRIF S.p.A. (Italy) & Indian banks. | Pioneer in Microfinance (MFI) credit bureau data and retail scoring. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'RBI Debt Recovery Agent (DRA) Code of Conduct',
        body: '```mermaid\ngraph TD\n    DRA["RBI Debt Recovery Agent Mandatory Standards"]\n    DRA --> HRS["1. Calling Hours: Strictly between 8:00 AM and 7:00 PM (Calling before 8 AM or after 7 PM is a severe regulatory violation)"]\n    DRA --> CERT["2. IIBF Certification: 100 hours training (for 10+2) or 50 hours (for graduates) + IIBF DRA Exam certification"]\n    DRA --> NO_INTIM["3. Zero Harassment: No verbal abuse, public shaming, anonymous calls, or visiting workplace without consent"]\n    DRA --> REC["4. Mandatory Call Recording: Banks must record and store all recovery phone calls for audit inspection"]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Credit Reporting & Recovery',
        body: '1. **DRA Calling Hours:** The statutory permissible calling window is **8:00 AM to 7:00 PM ONLY** (NOT 9 AM to 6 PM or 7 AM to 9 PM).\n2. **Free Annual CIR:** Under RBI mandate, every Indian citizen is entitled to **ONE FREE Full Credit Information Report (CIR)** from every CIC once every calendar year.\n3. **CIBIL Score Range:** Score ranges from **300 to 900** (score of -1 or 0 indicates no credit history / less than 6 months history).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 4 (RBWM): Module B - Credit Information Companies & Debt Recovery',
        notes: 'Direct MCQs on 4 CICs list, CIBIL 300-900 range, DRA calling hours (8 AM to 7 PM), and One Free CIR per year.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '4 CICs (CICRA 2005): TransUnion CIBIL, Equifax, Experian, CRIF High Mark. CIBIL score = 300 to 900 (>=750 prime). 1 free credit report per year from each CIC. RBI DRA Guidelines: Permitted calling hours = 8:00 AM to 7:00 PM only. Zero harassment/intimidation; mandatory IIBF DRA certification and call recording.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s directives on Recovery Agents and Fair Practices Code for Lenders, what are the STRICTLY PERMISSIBLE hours during which bank recovery agents or staff can contact borrowers telephonically for loan recovery?',
        options: [
          'Between 9:00 AM and 6:00 PM only',
          'Between 8:00 AM and 7:00 PM only',
          'Between 7:00 AM and 9:00 PM only',
          'Between 10:00 AM and 5:00 PM only',
        ],
        correctAnswer: 'Between 8:00 AM and 7:00 PM only',
        explanation: 'Under RBI Master Directions on Recovery Agents engaged by banks and NBFCs, recovery agents must strictly follow the time window of 8:00 AM to 7:00 PM for contacting borrowers. Contacting borrowers before 8:00 AM or after 7:00 PM is an explicit regulatory violation attracting penal action.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-46',
    topicOrder: 49,
    topicSlug: 'iibf-retail-banking-products-and-wealth-management',
    topicTitle: 'Retail Banking Products & Wealth Management Architecture',
    topicDescription: 'Wealth Management, Portfolio Allocation, Estate Planning & Real Estate (RERA) Regulations.',
    slug: 'wealth-management-portfolio-allocation-estate-planning-and-rera-regulations',
    title: 'Wealth Management & Estate Planning: Asset Allocation, Trusts, Wills & RERA Act 2016',
    shortDefinition: 'The wealth advisory, fiduciary planning, and real estate governance architecture: The Wealth Management Process (Financial Profiling, Risk Profiling [Conservative, Moderate, Aggressive], Asset Allocation [Strategic Asset Allocation - SAA vs Tactical Asset Allocation - TAA], Portfolio Rebalancing), Estate Planning (Wills under Indian Succession Act 1925: Attestation by 2 witnesses, Probate, Codicil, and Private Family Trusts under Indian Trusts Act 1882 for asset protection), and Real Estate (Regulation and Development) Act 2016 (RERA: mandatory registration of projects $>500 \\text{ sq m}$ or $>8$ apartments, 70% of buyer funds deposited in dedicated escrow account, Carpet Area definition, 5-year defect liability period).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-46-01',
        statement: 'Under Strategic Asset Allocation (SAA), an investor\'s portfolio is distributed across asset classes (Equity, Fixed Income, Gold, Real Estate) according to long-term risk tolerance and time horizon (e.g. Rule of Thumb: Equity % = 100 - Age), while Tactical Asset Allocation (TAA) allows short-term opportunistic deviations to exploit temporary market mispricings.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Harry Markowitz, Modern Portfolio Theory (1952); IIBF RBWM Module C',
        excerpt: 'SAA sets long-term asset mix based on risk profile; TAA takes short-term tactical tilts.',
      },
      {
        id: 'CLM-IIBF-46-02',
        statement: 'Under Section 63 of the Indian Succession Act 1925, a valid Will must be in writing, signed by the testator (or marked with thumb impression), and attested by at least TWO independent witnesses who saw the testator sign (witnesses need not know the contents of the Will); a Codicil is a formal legal instrument executed with identical formalities to alter or add to an existing Will.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Succession Act, 1925 (Sections 2(b), 63); Landmark Rulings on Estate Planning',
        excerpt: 'Will requires signature of testator and attestation by minimum 2 independent witnesses; Codicil alters Will.',
      },
      {
        id: 'CLM-IIBF-46-03',
        statement: 'Under Section 4(2)(l)(D) of the Real Estate (Regulation and Development) Act 2016 (RERA), real estate promoters must mandatorily deposit 70% of all amounts realized from allottees for a real estate project into a separate bank Escrow Account to cover the cost of construction and land cost, withdrawable only in proportion to the percentage of project completion certified by an architect, engineer, and chartered accountant.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Real Estate (Regulation and Development) Act, 2016 (Section 4(2)(l)(D) & Section 14)',
        excerpt: 'RERA mandates 70% of project buyer receipts must be deposited into dedicated escrow account.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Preserving Generational Wealth and Protecting Home Buyers',
        body: 'Building wealth is only half the battle; preserving it against inflation, taxes, market crashes, family disputes, and real estate fraud is the other half.\n\n**Wealth Management and Estate Planning** construct an airtight fiduciary bridge—optimizing asset allocation during life, securing smooth legal transfer to heirs through **Wills and Family Trusts**, and safeguarding home investments under **RERA**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master RERA Act 2016 Key Statutory Provisions',
        body: '| RERA Provision | Statutory Mandate / Requirement | Practical Impact on Real Estate |\n| :--- | :--- | :--- |\n| **1. Mandatory Registration** | All commercial and residential real estate projects where **land area $> 500 \\text{ sq meters}$ OR number of apartments $> 8$** must be registered with RERA before advertising or selling. | Eliminates unapproved rogue builders. |\n| **2. 70% Escrow Account** | **70% of all buyer receipts must be deposited in a separate bank Escrow Account** to be used strictly for construction and land costs. | Prevents builders from diverting buyer money to other land deals. |\n| **3. Carpet Area Sale** | Properties must be sold strictly on the basis of **Carpet Area** (net usable floor area excluding external walls/balcony), NOT super built-up area. | Transparent pricing per square foot. |\n| **4. Defect Liability Period** | Builder is legally responsible for rectifying any structural defects for **5 YEARS from date of handing over possession** at zero cost. | Protects buyers against poor construction quality. |\n| **5. Equal Interest on Delay** | If builder delays delivery, builder must pay **SAME interest rate** to buyer as buyer pays for payment default (SBI MCLR + 2%). | Parity between buyer and developer. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Estate Planning & RERA',
        body: '1. **Will Attestation Requirement:** A Will must be attested by a **MINIMUM OF 2 WITNESSES**. (Registration of a Will is OPTIONAL in India, but strongly recommended).\n2. **RERA Escrow Percentage:** Always remember that **70% of funds** must go into the RERA separate bank escrow account.\n3. **Codicil Definition:** A Codicil is an **amendment / addition to an existing Will**, NOT a new independent Will.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 4 (RBWM): Module C & D - Wealth Management, Estate Planning & RERA',
        notes: 'Direct MCQs on RERA 70% escrow rule, 5-year structural defect period, Will 2-witness rule, and SAA vs TAA.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Wealth Management: Strategic Asset Allocation (SAA - long term) vs Tactical (TAA - short term). Will (Indian Succession Act): Must be in writing, signed, and attested by at least 2 independent witnesses; Codicil = amendment to Will. RERA Act 2016: Mandatory registration for projects >500 sq m or >8 flats. 70% buyer funds in separate Escrow Account. Sale strictly on Carpet Area. 5-year structural defect liability.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Section 4(2)(l)(D) of the Real Estate (Regulation and Development) Act 2016 (RERA), what MINIMUM percentage of the amounts realized for the real estate project from the allottees is the promoter mandatorily required to deposit in a separate bank escrow account to cover construction and land costs?',
        options: [
          '50% of realized amounts',
          '60% of realized amounts',
          '70% of realized amounts',
          '90% of realized amounts',
        ],
        correctAnswer: '70% of realized amounts',
        explanation: 'Under RERA 2016, seventy percent (70%) of the amounts realized from allottees for a project must be deposited in a separate bank account (Escrow Account) to cover the cost of construction and land, ensuring funds cannot be siphoned or diverted to other projects.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 50: BANKING REGULATIONS & STATUTORY GOVERNANCE
  // =========================================================================
  {
    id: 'CON-IIBF-47',
    topicOrder: 50,
    topicSlug: 'iibf-banking-regulations-and-statutory-governance',
    topicTitle: 'Banking Regulation Act 1949 & Statutory Powers of RBI',
    topicDescription: 'Banking Regulation Act 1949 core sections, licensing, inspection, management removal, and resolution powers.',
    slug: 'banking-regulation-act-1949-licensing-governance-and-reserve-bank-regulatory-powers',
    title: 'Banking Regulation Act 1949: Statutory Powers, Licensing & Reserve Bank Governance Oversight',
    shortDefinition: 'The foundational statutory statute governing commercial and cooperative banking in India: Banking Regulation Act 1949: Definition of Banking (Section 5(b): accepting deposits of money from public withdrawable by cheque/draft for lending or investment), Permitted vs Prohibited businesses (Section 6 [permitted banking activities] vs Section 8 [prohibition of trading in goods] and Section 9 [disposal of non-banking assets within 7 years]), Licensing of Banking Companies (Section 22), Reserve Bank\'s Inspection and Audit Powers (Section 35), Power to Supersede Board of Directors and Remove Management (Section 36AA & 36ACA), Power to give binding directions (Section 35A), and Compulsory Amalgamation and Moratorium (Section 45).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-47-01',
        statement: 'Under Section 5(b) of the Banking Regulation Act 1949, "Banking" is defined as the accepting, for the purpose of lending or investment, of deposits of money from the public, repayable on demand or otherwise, and withdrawable by cheque, draft, order or otherwise; accepting deposits without lending or investment does not constitute banking.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Banking Regulation Act, 1949 (Section 5(b)); Sajjan Bank v RBI (1961)',
        excerpt: 'Section 5(b) defines banking: Accepting deposits from public for lending/investment, withdrawable by cheque.',
      },
      {
        id: 'CLM-IIBF-47-02',
        statement: 'Under Section 8 of the BR Act 1949, a banking company is strictly prohibited from engaging directly or indirectly in any trade, or buying/selling goods (except in connection with realization of security held); under Section 9, a bank cannot hold any immovable property acquired in satisfaction of claims (non-banking asset) for more than 7 years (extendable up to 5 years by RBI).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Banking Regulation Act, 1949 (Sections 8 & 9)',
        excerpt: 'Section 8 prohibits trading in goods; Section 9 limits holding non-banking assets to max 7 years.',
      },
      {
        id: 'CLM-IIBF-47-03',
        statement: 'Under Section 35A of the BR Act 1949, the Reserve Bank of India is vested with broad statutory power to issue binding directions to all banking companies in the public interest, in the interest of banking policy, or to prevent the affairs of any bank from being conducted in a manner detrimental to depositors.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Banking Regulation Act, 1949 (Section 35A); Supreme Court ruling in Central Bank of India v Ravindra',
        excerpt: 'Section 35A gives RBI power to issue binding regulatory directions in the public interest.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Sovereign Charter of Banking Solvency',
        body: 'Because a bank accepts trillions of rupees from ordinary citizens, anyone running a bank holds a sovereign public trust.\n\nThe **Banking Regulation Act, 1949** serves as the supreme rulebook—defining what a bank is legally allowed to do (**Section 6**), strictly banning banks from trading in commodities (**Section 8**), and giving the Reserve Bank of India ironclad authority to inspect books (**Section 35**), remove corrupt chairmen (**Section 36AA**), or merge failing banks (**Section 45**).',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Most Critical High-Yield Sections of the Banking Regulation Act 1949',
        body: '| Section of BR Act 1949 | Statutory Subject Matter | Regulatory Mandate / Rule |\n| :--- | :--- | :--- |\n| **Section 5(b)** | **Definition of "Banking"** | Accepting deposits from public for lending/investment, withdrawable by cheque/draft. |\n| **Section 6** | **Forms of Business Permitted** | Borrowing, lending, bills, guarantees, foreign exchange, safe deposit vaults, agency business. |\n| **Section 8** | **Prohibition of Trading** | Banks **CANNOT buy or sell goods or engage in trade** (except realizing loan security). |\n| **Section 9** | **Disposal of Non-Banking Assets** | Immovable property acquired for debt recovery must be sold within **7 YEARS** (RBI can extend by 5 yrs). |\n| **Section 10B / 10BB** | **Whole-Time Chairman & Directors** | Qualification, appointment, and tenure of bank Chairman and Chief Executive. |\n| **Section 19** | **Subsidiary Companies Restrictions**| Banks cannot form subsidiaries except for approved financial activities; limits shareholding in other firms. |\n| **Section 20** | **Restrictions on Loans to Directors** | Banks **CANNOT grant loans to their own Directors** or firms in which directors have substantial interest. |\n| **Section 22** | **Licensing of Banking Companies** | No company can commence banking business in India without a written license from RBI. |\n| **Section 24** | **Statutory Liquidity Ratio (SLR)** | Mandates maintenance of unencumbered liquid assets (G-Secs/Cash/Gold; max 40%, currently 18%). |\n| **Section 35** | **Inspection of Banks by RBI** | RBI officers have full power to inspect books, records, and branches of any banking company. |\n| **Section 35A** | **Power of RBI to Issue Directions** | Apex power to issue binding regulatory master directions and guidelines to banks. |\n| **Section 36AA / 36ACA**| **Removal of Management & Supersession**| RBI can **remove any director/officer** and **supersede the Board of Directors** of a bank. |\n| **Section 45** | **Moratorium & Compulsory Mergers** | Central Govt on RBI application can place bank under **Moratorium** and frame an amalgamation scheme. |',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Banking Regulation Act',
        body: '1. **Section 9 Non-Banking Asset Disposal:** Maximum period for holding mortgaged property acquired by bank is **7 YEARS** (extendable up to 5 years by RBI).\n2. **Section 20 Loans to Directors:** Banks are **STRICTLY BARRED from granting loans/advances to their own Directors** (with nominal exceptions for employee-directors).\n3. **Section 35A vs Section 35:** **Section 35 = Inspection**; **Section 35A = Issuing Directions** (Both are frequently tested in IIBF DBF).',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): Banking Regulation Act 1949 Key Sections',
        notes: 'Guaranteed 3-4 MCQs: Match Section numbers (5b Definition, 8 Trading ban, 9 Non-banking asset 7 yrs, 20 Director loan ban, 22 Licensing, 35A Directions, 36AA Removal).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'BR Act 1949: Sec 5b (Definition of Banking), Sec 6 (Permitted business), Sec 8 (Trading in goods prohibited), Sec 9 (Non-banking assets must be sold within 7 years), Sec 20 (Loans to directors banned), Sec 22 (RBI License mandatory), Sec 24 (SLR), Sec 35 (RBI Inspection), Sec 35A (Power to issue directions), Sec 36AA (Power to remove directors), Sec 45 (Moratorium and compulsory merger).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Section 9 of the Banking Regulation Act 1949, what is the MAXIMUM statutory time period within which a banking company must dispose of any immovable property (Non-Banking Asset) acquired by it in satisfaction of its claims/debts?',
        options: [
          'Within 3 years from date of acquisition',
          'Within 5 years from date of acquisition',
          'Within 7 years from date of acquisition',
          'Within 10 years from date of acquisition',
        ],
        correctAnswer: 'Within 7 years from date of acquisition',
        explanation: 'Under Section 9 of the Banking Regulation Act 1949, no banking company shall hold any immovable property howsoever acquired, except such as is required for its own use, for any period exceeding seven (7) years from the date of acquisition thereof. The RBI may extend this period by up to a further five (5) years in special circumstances.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-48',
    topicOrder: 50,
    topicSlug: 'iibf-banking-regulations-and-statutory-governance',
    topicTitle: 'Banking Regulation Act 1949 & Statutory Powers of RBI',
    topicDescription: 'Prudential exposure norms, Large Exposure Framework (LEF), and connected lending curbs.',
    slug: 'prudential-exposure-norms-large-exposure-framework-lef-and-connected-lending-curbs',
    title: 'Prudential Exposure Norms & Large Exposure Framework (LEF): Single & Group Borrower Limits',
    shortDefinition: 'The statutory concentration risk and exposure management architecture under Basel III and RBI Master Directions: Large Exposure Framework (LEF: aligned with BCBS standards since April 2019), Exposure defined on Eligible Capital Base (Tier 1 Capital only), Single Counterparty Exposure limit (strictly capped at 20% of Tier 1 Capital; extendable up to 25% with Board approval in exceptional infrastructure cases), Group of Connected Counterparties limit (strictly capped at 25% of Tier 1 Capital), Large Exposure definition (any counterparty exposure $\\ge 10\\%$ of Tier 1 Capital), and connected lending curbs.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-48-01',
        statement: 'Under the RBI Large Exposure Framework (LEF, effective April 1, 2019), the sum of all exposure values of a bank to a Single Counterparty must not exceed 20% of the bank\'s available Tier 1 Capital base at all times (extendable up to 25% in exceptional cases approved by bank board for infrastructure projects).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Large Exposures Framework (Circular DBR.No.BP.BC.43/21.01.003/2018-19)',
        excerpt: 'LEF single counterparty limit is 20% of Tier 1 capital (extendable to 25% for infrastructure).',
      },
      {
        id: 'CLM-IIBF-48-02',
        statement: 'Under the LEF, the sum of all exposure values of a bank to a Group of Connected Counterparties must not exceed 25% of the bank\'s available Tier 1 Capital base at all times.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction on Large Exposures; BCBS Standards on Large Exposure Measurement',
        excerpt: 'LEF group of connected counterparties limit is strictly 25% of Tier 1 capital.',
      },
      {
        id: 'CLM-IIBF-48-03',
        statement: 'A "Large Exposure" is statutorily defined as any exposure to a counterparty or group of connected counterparties that is equal to or higher than 10% of the bank\'s Tier 1 Capital base; the aggregate sum of all Large Exposures cannot exceed 800% of Tier 1 Capital.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI LEF Guidelines (Section 3 - Definition of Large Exposure)',
        excerpt: 'Large exposure = Any exposure >= 10% of Tier 1 Capital; Aggregate large exposures <= 800% of Tier 1.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Preventing the Entire Bank from Sinking with One Corporate Giant',
        body: 'If a commercial bank with ₹10,000 Crore capital lends ₹8,000 Crore to a single industrial conglomerate and that conglomerate defaults, the entire bank\'s equity is destroyed in one stroke.\n\nThe **Large Exposure Framework (LEF)** establishes rigid legal concentration ceilings—preventing banks from placing too many eggs in a single corporate basket.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Large Exposure Framework (LEF) Ceilings',
        body: '```mermaid\ngraph TD\n    LEF["RBI Large Exposure Framework (LEF) Based on Tier 1 Capital"]\n    LEF --> SNG["1. SINGLE COUNTERPARTY: Max 20% of Tier 1 Capital (Extendable to 25% for infrastructure with Board approval)"]\n    LEF --> GRP["2. GROUP OF CONNECTED COUNTERPARTIES: Max 25% of Tier 1 Capital (Strict hard ceiling)"]\n    LEF --> DEF["3. LARGE EXPOSURE THRESHOLD: Any exposure >= 10% of Tier 1 Capital is tagged as Large Exposure"]\n    LEF --> AGG["4. AGGREGATE CEILING: Sum of all Large Exposures must not exceed 800% of Tier 1 Capital"]\n```',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in LEF Rules',
        body: '1. **Capital Base for LEF:** Exposure is calculated as a percentage of **TIER 1 CAPITAL ONLY**, NOT Total Capital (Tier 1 + Tier 2)!\n2. **Legacy vs Current Limits:**\n   * **Legacy Limits (Pre-2019):** Single 15% / Group 40% of Total Capital.\n   * **Current LEF Limits (2019 onwards):** **Single 20% / Group 25% of TIER 1 CAPITAL**.\n3. **Connected Counterparties:** Two or more entities constitute a group if one controls the other (ownership $>50\\%$) or economic interdependence is so tight that default by one triggers default by the other.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): Large Exposure Framework (LEF)',
        notes: 'Direct MCQs on LEF single limit (20% of Tier 1), group limit (25% of Tier 1), and 10% large exposure trigger.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Large Exposure Framework (LEF): Capital base = Tier 1 Capital ONLY. Single Counterparty = Max 20% of Tier 1 (25% for infra). Group of Connected Counterparties = Max 25% of Tier 1. Large Exposure defined as any exposure >= 10% of Tier 1 Capital. Aggregate Large Exposures cap = Max 800% of Tier 1.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s Large Exposure Framework (LEF), what is the MAXIMUM permissible exposure limit of a scheduled commercial bank to a "Group of Connected Counterparties"?',
        options: [
          '15% of Total Capital',
          '20% of Tier 1 Capital',
          '25% of Tier 1 Capital',
          '40% of Total Capital',
        ],
        correctAnswer: '25% of Tier 1 Capital',
        explanation: 'Under the RBI Large Exposure Framework (LEF) aligned with BCBS standards, the exposure limit for a Group of Connected Counterparties is capped at 25% of the bank\'s available Tier 1 Capital base. (For a single counterparty, the limit is 20% of Tier 1 Capital).',
        trapExplanation: 'Candidates confuse the modern LEF limit (25% of Tier 1) with the pre-2019 legacy limit (40% of Total Capital).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-49',
    topicOrder: 50,
    topicSlug: 'iibf-banking-regulations-and-statutory-governance',
    topicTitle: 'Banking Regulation Act 1949 & Statutory Powers of RBI',
    topicDescription: 'Deposit Insurance under DICGC Act 1961, ₹5 Lakh coverage, and claim settlement timelines.',
    slug: 'deposit-insurance-dicgc-act-1961-rs-5-lakh-coverage-and-claim-settlement-timelines',
    title: 'Deposit Insurance Architecture: DICGC Act 1961, ₹5 Lakh Coverage & 90-Day Payout Rules',
    shortDefinition: 'The statutory deposit safety net under the Deposit Insurance and Credit Guarantee Corporation Act 1961: DICGC as a wholly-owned subsidiary of RBI (established 1961/1978), Coverage Quantum (increased from ₹1 Lakh to ₹5 Lakh per depositor per bank in same right and capacity, effective February 4, 2020), Insured Deposits (Savings, Current, Fixed, Recurring deposits across Commercial Banks, RRBs, LABs, Payments Banks, SFBs, and Cooperative Banks), Insurance Premium (12 paise per ₹100 of assessable deposits per annum, borne 100% by the bank without passing to customer), and the landmark DICGC (Amendment) Act 2021 mandating Interim Claim Payout within 90 days to depositors of banks placed under RBI Directions / Moratorium.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-49-01',
        statement: 'Under the DICGC Act 1961 (amended February 2020), every depositor in an insured bank is insured up to a maximum statutory ceiling of ₹5,00,000 (₹5 Lakh) for both principal and interest held in the same right and capacity across all branches of the same bank.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Deposit Insurance and Credit Guarantee Corporation Act, 1961 (Section 16(1)); Gazette Notification Feb 2020',
        excerpt: 'DICGC insurance covers up to ₹5 Lakh per depositor per bank in same right and capacity.',
      },
      {
        id: 'CLM-IIBF-49-02',
        statement: 'Under the Deposit Insurance and Credit Guarantee Corporation (Amendment) Act 2021 (effective September 1, 2021), when a bank is placed under all-inclusive directions / moratorium by RBI with deposit withdrawal restrictions, the DICGC must pay the insured deposit amount (up to ₹5 Lakh) to depositors within a strictly mandated timeline of 90 days (Bank submits claims in 45 days + DICGC verifies and pays in next 45 days).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'DICGC (Amendment) Act, 2021 (Act No. 30 of 2021, inserting Section 18A)',
        excerpt: 'DICGC Amendment 2021 mandates insured payout up to ₹5 Lakh within 90 days of bank moratorium.',
      },
      {
        id: 'CLM-IIBF-49-03',
        statement: 'The deposit insurance premium payable to DICGC is fixed at 12 paise per ₹100 of assessable deposits per annum (0.12% per year), which must be borne entirely by the insured bank as an operational expense; banks are strictly prohibited from recovering this premium from depositors.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'DICGC Rules & Operating Manual (Premium Calculation Regulations)',
        excerpt: 'DICGC premium is 12 paise per ₹100 per annum, paid 100% by the bank.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Sovereign Guarantee on Retail Life Savings',
        body: 'When a bank collapses into insolvency or is placed under an RBI moratorium, depositors panic and rush to branch counters.\n\nThe **Deposit Insurance and Credit Guarantee Corporation (DICGC)** steps in as the ultimate sovereign safety net—guaranteeing that every depositor recovers up to **₹5,00,000 within 90 days**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 90-Day Payout Architecture (DICGC Amendment Act 2021)',
        body: '```mermaid\ngraph LR\n    DAY0["DAY 0: RBI places failing bank under Moratorium / All-Inclusive Directions"]\n    DAY45["DAY 45: Failing Bank compiles depositor ledger and submits verified claims to DICGC"]\n    DAY90["DAY 90: DICGC disburses up to ₹5 Lakh directly into depositor bank accounts in alternate banks"]\n    DAY0 -- "First 45 Days (Bank Claim Processing)" --> DAY45\n    DAY45 -- "Next 45 Days (DICGC Verification & Payout)" --> DAY90\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: '"Same Right & Capacity" Aggregation Rules',
        body: '| Account Holding Setup | How DICGC Insures the Accounts | Total Insurance Coverage Granted |\n| :--- | :--- | :--- |\n| **Account 1: Savings (₹4 Lakh)**<br>**Account 2: Fixed Deposit (₹3 Lakh)**<br>*(Both in name of \'Mr. A\' in same bank)* | **Aggregated Together** (Same capacity: Individual). Total = ₹7 Lakh. | **Max ₹5,00,000 (₹5 Lakh)** (Remaining ₹2L subject to liquidation). |\n| **Account 1: Individual \'Mr. A\' (₹5 Lakh)**<br>**Account 2: Sole Proprietor \'M/s A Traders\' (₹5 Lakh)** | **Aggregated Together** (Sole proprietorship is not a separate legal person). | **Max ₹5,00,000 (₹5 Lakh)** in aggregate. |\n| **Account 1: Individual \'Mr. A\' (₹5 Lakh)**<br>**Account 2: Joint \'Mr. A & Mrs. B\' (₹5 Lakh)** | **Treated as SEPARATE Capacities**. | **₹5 Lakh for Individual A + ₹5 Lakh for Joint A&B = Total ₹10 Lakh insured**! |\n| **Account 1: Mr. A in SBI (₹5 Lakh)**<br>**Account 2: Mr. A in HDFC Bank (₹5 Lakh)** | **Treated as SEPARATE Banks**. | **₹5 Lakh at SBI + ₹5 Lakh at HDFC = Total ₹10 Lakh insured**! |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in DICGC Insurance',
        body: '1. **Coverage Ceiling:** Exactly **₹5,00,000 (₹5 Lakh)** per depositor per bank (covers both Principal and Interest).\n2. **Exclusions from DICGC Cover:**\n   * Deposits of Foreign Governments.\n   * Deposits of Central and State Governments.\n   * Inter-bank deposits.\n   * Deposits of State Land Development Banks with State Cooperative Banks.\n   * **NBFC deposits are NOT INSURED by DICGC**.\n3. **Premium Rate:** **12 paise per ₹100 per annum** (0.12%), borne 100% by the bank.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS) & Paper 2 (PPB): DICGC Act & Deposit Insurance',
        notes: 'Direct MCQs on ₹5 Lakh limit, 90-day payout timeline (45+45), 12 paise premium, and DICGC exclusions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'DICGC Act 1961 (RBI 100% subsidiary): Insures deposits up to ₹5 Lakh per depositor per bank in same right & capacity (Principal + Interest). Premium = 12 paise per ₹100 per year (paid 100% by bank). DICGC Amendment 2021: Mandatory payout within 90 days (45 days bank claim + 45 days DICGC payout). Exclusions: Govt deposits, Inter-bank deposits, NBFC deposits.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Deposit Insurance and Credit Guarantee Corporation (Amendment) Act 2021, within what MAXIMUM total timeframe is the DICGC legally mandated to disburse the insured deposit amount (up to ₹5 Lakh) to eligible depositors of a bank placed under RBI Moratorium / all-inclusive directions?',
        options: [
          'Within 30 days',
          'Within 45 days',
          'Within 90 days',
          'Within 180 days',
        ],
        correctAnswer: 'Within 90 days',
        explanation: 'Under Section 18A inserted by the DICGC (Amendment) Act 2021, when a bank is placed under directions/moratorium by the RBI, the failing bank must submit depositor claims within 45 days, and the DICGC must verify and disburse the insurance claims within the next 45 days, completing the entire payout process within a strict statutory ceiling of 90 days.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 51: RBI GRADE B (FM) MANAGEMENT & OB VAULT
  // =========================================================================
  {
    id: 'CON-IIBF-50',
    topicOrder: 51,
    topicSlug: 'rbi-management-and-organisational-behaviour',
    topicTitle: 'Management Theories, Leadership Models & Organisational Behaviour',
    topicDescription: 'Classical, Neo-classical, Modern management theories, motivation models, and leadership frameworks.',
    slug: 'management-theories-classical-neo-classical-and-modern-leadership-models',
    title: 'Management Foundations: Classical, Neo-Classical, Motivation Theories & Leadership Models',
    shortDefinition: 'The core descriptive management and organizational behavior models tested in RBI Grade B (FM): Classical Theories (Henri Fayol\'s 14 Principles of Administrative Management, F.W. Taylor\'s Scientific Management, Max Weber\'s Bureaucratic Model), Neo-Classical / Human Relations Movement (Elton Mayo\'s Hawthorne Studies 1924-1932: social and informal group dynamics), Motivation Theories (Maslow\'s Hierarchy of Needs, Herzberg\'s Two-Factor Motivation-Hygiene Theory, McGregor\'s Theory X & Theory Y, McClelland\'s Three Needs Theory, Vroom\'s Expectancy Theory, Adam\'s Equity Theory), and Leadership Models (Blake & Mouton Managerial Grid [9,9 Team Management], Fiedler\'s Contingency Model, Hersey & Blanchard Situational Leadership Model).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-IIBF-50-01',
        statement: 'Henri Fayol formulated the 14 Principles of Management and identified the five primary functions of management (Planning, Organizing, Commanding, Coordinating, Controlling - POCCC), establishing the Administrative Management school of thought.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Henri Fayol, General and Industrial Management (1916); RBI Grade B FM Syllabus',
        excerpt: 'Fayol 14 principles and 5 functions: Planning, Organizing, Commanding, Coordinating, Controlling.',
      },
      {
        id: 'CLM-IIBF-50-02',
        statement: 'Frederick Herzberg\'s Two-Factor (Dual-Factor) Theory establishes that job satisfaction and job dissatisfaction are driven by two independent sets of factors: Hygiene Factors (extrinsic: company policy, salary, working conditions, supervision; their presence prevents dissatisfaction but does not motivate) and Motivating Factors (intrinsic: achievement, recognition, responsibility, growth; their presence creates genuine satisfaction and high performance).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Frederick Herzberg, The Motivation to Work (1959); Stephen Robbins, Organizational Behavior',
        excerpt: 'Herzberg 2-Factor: Hygiene factors prevent dissatisfaction; Motivators create genuine motivation.',
      },
      {
        id: 'CLM-IIBF-50-03',
        statement: 'The Hersey-Blanchard Situational Leadership Model matches leader behavior (Task Behavior vs Relationship Behavior) to the Maturity / Readiness level of followers across four evolutionary styles: Directing/Telling (S1 for R1 low competence/low commitment), Coaching/Selling (S2 for R2 some competence/high commitment), Supporting/Participating (S3 for R3 high competence/variable commitment), and Delegating (S4 for R4 high competence/high commitment).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Hersey & Ken Blanchard, Management of Organizational Behavior (1969/1988)',
        excerpt: 'Hersey-Blanchard Situational Leadership: S1 Telling, S2 Selling, S3 Participating, S4 Delegating.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Guiding Human Potential in Complex Financial Institutions',
        body: 'A central bank or large commercial bank is not just software and balance sheets; it is an ecosystem of tens of thousands of human beings.\n\n**Management and Organizational Behaviour Theories** analyze how human beings are motivated, how organizational structures coordinate complex tasks, and how leaders inspire excellence under extreme pressure.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Motivation Theories Comparative Matrix',
        body: '| Motivation Theory | Core Theorist | Primary Premise / Framework |\n| :--- | :--- | :--- |\n| **1. Hierarchy of Needs** | **Abraham Maslow** (1943) | 5 Hierarchical Levels: Physiological $\\rightarrow$ Safety $\\rightarrow$ Social/Love $\\rightarrow$ Esteem $\\rightarrow$ **Self-Actualization**. Lower-level needs must be satisfied before higher needs motivate. |\n| **2. Two-Factor Theory** | **Frederick Herzberg** (1959) | **Hygiene Factors** (Salary, job security, conditions) prevent dissatisfaction.<br>**Motivators** (Achievement, growth, responsibility) drive satisfaction. |\n| **3. Theory X & Theory Y** | **Douglas McGregor** (1960) | **Theory X:** Employees are inherently lazy, avoid work, require coercion.<br>**Theory Y:** Employees are self-motivated, seek responsibility, creative. |\n| **4. Acquired Needs Theory** | **David McClelland** (1961) | 3 Core Needs: **Need for Achievement ($n\\text{Ach}$)**, **Need for Power ($n\\text{Pow}$)**, **Need for Affiliation ($n\\text{Aff}$)**. |\n| **5. Expectancy Theory** | **Victor Vroom** (1964) | $\\mathbf{\\text{Motivation} = \\text{Expectancy} \\times \\text{Instrumentality} \\times \\text{Valence}}$ ($M = E \\times I \\times V$). |\n| **6. Equity Theory** | **J. Stacy Adams** (1963) | Employees seek fairness by comparing their Output/Input ratio with reference peers. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Leadership Models & Managerial Grid',
        body: '### 1. Blake & Mouton Managerial Grid (Task vs People)\n* **(1,1) Impoverished Management:** Low concern for production, low concern for people.\n* **(9,1) Authoritarian / Task Management:** High production, low people.\n* **(1,9) Country Club Management:** Low production, high people.\n* **(5,5) Middle of the Road:** Balanced compromise.\n* **(9,9) Team Management (IDEAL STYLE):** High production, high people.\n\n### 2. Transformational vs Transactional Leadership\n* **Transactional:** Operates through contingent rewards, management-by-exception, and routine task fulfillment.\n* **Transformational (4 Is):** Idealized Influence (Charisma), Inspirational Motivation, Intellectual Stimulation, Individualized Consideration.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Management & OB',
        body: '1. **Herzberg\'s Salary Classification:** In Herzberg\'s theory, **MONEY / SALARY IS A HYGIENE FACTOR**, NOT a motivator! (Paying a fair salary eliminates dissatisfaction, but does not provide long-term intrinsic motivation).\n2. **Hawthorne Effect:** The phenomenon where employees increase productivity simply because they know they are being observed and given attention by management (**Elton Mayo**).\n3. **Vroom\'s Multiplicative Formula:** Since $M = E \\times I \\times V$, if **ANY single component is zero, total Motivation is ZERO**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'RBI Grade B (FM) & Bank Management: Management & OB Theories',
        notes: 'High-yield for RBI Grade B Phase 2 FM and Bank Promotion: Herzberg 2 factors (salary as hygiene), Maslow 5 tiers, Vroom M=E*I*V, and Blake-Mouton (9,9).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Management: Fayol (14 principles, POCCC), Taylor (Scientific management), Mayo (Hawthorne studies - social dynamics). Motivation: Maslow (Physiological to Self-Actualization), Herzberg (Hygiene = salary/conditions prevents dissatisfaction; Motivators = achievement/growth), McGregor (Theory X lazy vs Theory Y self-driven), Vroom (Motivation = Expectancy * Instrumentality * Valence). Leadership: Blake-Mouton (9,9 Team Management is ideal), Hersey-Blanchard Situational (Telling S1, Selling S2, Participating S3, Delegating S4).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Frederick Herzberg\'s Two-Factor (Motivation-Hygiene) Theory of workplace motivation, how is "Salary / Remuneration" specifically categorized?',
        options: [
          'Intrinsic Motivator Factor',
          'Extrinsic Hygiene Factor',
          'Self-Actualization Factor',
          'Organizational Growth Factor',
        ],
        correctAnswer: 'Extrinsic Hygiene Factor',
        explanation: 'In Herzberg\'s Two-Factor Theory, salary, working conditions, company policy, and job security are classified as "Hygiene Factors" (extrinsic factors). Their presence does not create active motivation or job satisfaction, but their absence causes severe job dissatisfaction.',
        trapExplanation: 'Candidates intuitively assume money/salary is a primary motivator in Herzberg\'s model.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-IIBF-51',
    topicOrder: 51,
    topicSlug: 'rbi-management-and-organisational-behaviour',
    topicTitle: 'Management Theories, Leadership Models & Organisational Behaviour',
    topicDescription: 'Organisational Communication channels, barriers, corporate governance, and Johari Window.',
    slug: 'organisational-communication-barriers-channels-and-corporate-governance-mechanisms',
    title: 'Organisational Communication & Interpersonal Dynamics: Barriers, Channels & Johari Window',
    shortDefinition: 'The organizational communication and corporate governance dynamics in banking institutions: The Communication Process (Sender, Encoding, Channel, Receiver, Decoding, Feedback, Noise), Communication Directions (Downward [orders/policies], Upward [grievances/reports], Horizontal / Lateral [inter-departmental coordination], Diagonal), Communication Barriers (Filtering, Selective Perception, Information Overload, Semantic barriers, Cultural barriers), Informal Communication (Grapevine: Single Strand, Gossip, Probability, Cluster chain), and the Johari Window interpersonal awareness model (Open Area [Arena], Blind Spot, Hidden Area [Facade], Unknown Area).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-IIBF-51-01',
        statement: 'The Communication Process consists of seven core stages: Sender (source), Encoding (converting thought to message), Message (physical product), Channel (medium), Receiver (target), Decoding (interpreting symbols into meaning), and Feedback (reversing communication loop to verify understanding), all subject to environmental Noise.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Claude Shannon & Warren Weaver, Mathematical Theory of Communication; RBI FM Guide',
        excerpt: '7 stages of communication: Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback.',
      },
      {
        id: 'CLM-IIBF-51-02',
        statement: 'The Johari Window (developed by Joseph Luft and Harry Ingham, 1955) maps interpersonal awareness into four quadrants based on what is known/unknown to oneself and known/unknown to others: Quadrant 1 (Open / Arena), Quadrant 2 (Blind Spot: known to others, unknown to self), Quadrant 3 (Hidden / Facade: known to self, unknown to others), and Quadrant 4 (Unknown).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Joseph Luft & Harry Ingham (1955); Stephen Robbins, Organizational Behavior',
        excerpt: 'Johari Window 4 panes: Open (Arena), Blind Spot, Hidden (Facade), Unknown.',
      },
      {
        id: 'CLM-IIBF-51-03',
        statement: 'In informal communication (Grapevine networks), the Cluster Chain is the most dominant pattern in modern corporate organizations, where one individual selectively shares information with a chosen group of trusted colleagues, each of whom in turn shares with another select cluster.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Keith Davis, Management Communication and the Grapevine (Harvard Business Review)',
        excerpt: 'Cluster chain is the dominant grapevine communication pattern in organizations.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Perfectly Written Directives Can Still Be Completely Misunderstood',
        body: 'When a bank CEO issues a 50-page policy manual, why do branch managers often execute the exact opposite of what was intended?\n\n**Communication Theory** reveals that communication is not simply sending words—it is the complex psychological process of encoding, transmitting, decoding, and filtering across institutional **Noise** and perceptual biases.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Johari Window Framework (Luft & Ingham, 1955)',
        body: '```mermaid\ngraph TD\n    JW["THE JOHARI WINDOW (4 Quadrants)"]\n    JW --> Q1["QUADRANT 1: OPEN / ARENA<br>(Known to Self & Known to Others) - Shared transparent communication"]\n    JW --> Q2["QUADRANT 2: BLIND SPOT<br>(Unknown to Self, but Known to Others) - Fixed via Seeking Constructive Feedback"]\n    JW --> Q3["QUADRANT 3: HIDDEN / FACADE<br>(Known to Self, but Unknown to Others) - Fixed via Self-Disclosure"]\n    JW --> Q4["QUADRANT 4: UNKNOWN<br>(Unknown to Self & Unknown to Others) - Latent potential/unconscious traits"]\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'The 4 Grapevine (Informal Communication) Networks',
        body: '| Grapevine Pattern | Transmission Mechanism | Corporate Impact |\n| :--- | :--- | :--- |\n| **1. Single Strand Chain** | Person A tells B, who tells C, who tells D in a linear sequence. | Highly distorted; longest transmission time. |\n| **2. Gossip Chain** | One central person actively seeks and tells EVERYONE. | Slow diffusion; centralized rumor source. |\n| **3. Probability Chain** | Person A randomly tells anyone in the office on a random probability basis. | Unpredictable information spread. |\n| **4. Cluster Chain (DOMINANT)**| Person A tells a **select group of trusted individuals**, who each tell another select group. | **Fastest and most prevalent** informal network in corporate institutions. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Communication Theory',
        body: '1. **Johari Window Blind Spot:** The Blind Spot represents what is **KNOWN TO OTHERS, BUT UNKNOWN TO YOURSELF** (e.g. an annoying speech habit or blind prejudice).\n2. **Grapevine Dominance:** The **Cluster Chain** is the most common pattern in business organizations.\n3. **Filtering:** The deliberate manipulation of information by a sender so that it will be seen more favorably by the receiver (e.g. a branch manager hiding NPAs in reports to the regional head).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'iibf-dbf',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'RBI Grade B (FM) & Bank Management: Organisational Communication',
        notes: 'Direct MCQs on Johari Window 4 quadrants (Blind Spot definition), Cluster chain grapevine, and Filtering barrier.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Communication: 7 stages (Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback). Barriers: Filtering (sugarcoating), Information Overload, Semantics. Grapevine: Cluster chain is dominant pattern. Johari Window (Luft & Ingham): Open/Arena (known to all), Blind Spot (known to others, unknown to self), Hidden/Facade (known to self, hidden from others), Unknown (latent).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the Johari Window model of interpersonal communication and self-awareness developed by Joseph Luft and Harry Ingham, what does the "Blind Spot" quadrant represent?',
        options: [
          'Information known both to yourself and to others in the group',
          'Information known to others about you, but unknown to yourself',
          'Information known to yourself, but deliberately kept hidden from others',
          'Information that is unknown both to yourself and to others',
        ],
        correctAnswer: 'Information known to others about you, but unknown to yourself',
        explanation: 'In the Johari Window, Quadrant 2 (the Blind Spot) represents information, behaviors, blind spots, or mannerisms about an individual that are perceptible and known to others in the organization, but of which the individual remains completely unaware.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },
];

export async function seedBatchB3IIBFCanonicalKnowledge() {
  console.log('Seeding Batch B3 IIBF Canonical Knowledge (Topics 46–51: 19 concepts)...');

  let subject = await db.subject.findFirst({
    where: { slug: 'iibf-banking-regulations' },
  });

  if (!subject) {
    throw new Error('Subject iibf-banking-regulations must exist before seeding Batch B3.');
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
  for (const c of BATCH_B3_IIBF_CONCEPTS) {
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
