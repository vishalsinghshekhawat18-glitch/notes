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
  // CHAPTER 1
  {
    index: 1,
    filename: '01_CHAPTER_01_RETAIL_BANKING_OVERVIEW_MODELS.md',
    fullTitle: 'RETAIL BANKING: CHARACTERISTICS, BUSINESS MODELS & SEGMENTATION',
    shortHeader: 'CHAPTER 01 : RETAIL BANKING OVERVIEW',
    leadParagraph: 'Retail banking represents financial services rendered directly to individual consumers, households, and micro-enterprises rather than large corporate conglomerates or sovereign entities. Characterized by high transaction velocity, granular credit exposure, sticky low-cost CASA deposit funding, and multi-channel delivery architectures, retail banking serves as the balance sheet anchor of commercial banking profitability.',
    content: `
## 1. Master Comparison: Retail vs Corporate / Wholesale Banking

| Operational Parameter | Retail Banking | Corporate / Wholesale Banking |
| :--- | :--- | :--- |
| **Target Clientele** | Individual consumers, households, self-employed professionals, and micro-enterprises | Large corporate houses, multinational companies, public sector undertakings (PSUs), institutional entities |
| **Transaction Velocity & Ticket Size** | High volume of transactions, relatively small individual monetary ticket sizes | Low transaction volume, very large ticket sizes per facility |
| **Credit Risk Concentration** | **Granular / Low Concentration Risk** (Default by one individual does not endanger bank solvency) | **High Concentration Risk** (Default by a single corporate conglomerate can impair bank capital) |
| **Interest Spreads & Pricing** | Higher net interest margins (NIM) and wider interest rate spreads | Competitive, fine pricing with tighter interest margins |
| **Cost of Funds (Deposits)** | Low cost, sticky CASA deposits and retail term deposits | Higher cost, volatile bulk deposits and certificates of deposit |
| **Delivery Architecture** | Multi-channel: Branch network, ATMs, POS terminals, Mobile Apps, Internet Banking, Business Correspondents | Dedicated Corporate Relationship Managers (RMs) and specialized mid/large corporate branches |

## 2. Organizational Business Models in Retail Banking

- **Horizontally Integrated Model:**
  - Common distribution platform across different product lines.
  - Customer data and delivery channels are shared across business divisions, but product design remains segregated.
- **Vertically Integrated Model:**
  - Specialized, self-contained business units manage end-to-end processing, manufacturing, underwriting, and distribution for specific product categories (e.g., dedicated Auto Loan division, separate Credit Card division).
- **Predominantly Vertically Integrated Model:**
  - Hybrid architecture where back-end manufacturing and credit underwriting are vertically organized, but customer relationship management and branch distribution are horizontally coordinated.
- **Strategic Business Unit (SBU) Structure:** Autonomous profit center headed by a dedicated business president, accountable for its independent return on equity and profitability targets.

## 3. Customer Wealth Segmentation Hierarchy

| Clientele Segment | Annual Income / Investible Surplus Range | Typical Products & Preferred Delivery Channels |
| :--- | :--- | :--- |
| **Mass Banking** | Annual Income up to **₹10 Lakhs** | Basic savings bank accounts (BSBDA / PMJDY), micro-loans, UPI, Mobile Banking |
| **Mass Affluent** | Annual Income **₹10 Lakhs to ₹50 Lakhs** | Housing loans, Auto loans, Credit cards, Term deposits, Mutual Fund SIPs |
| **Super Affluent / Emerging HNWIs** | Annual Income **₹50 Lakhs to ₹2 Crores** | Preferred banking lounges, customized multi-asset investment portfolios, dedicated relationship managers |
| **High Net Worth Individuals (HNWIs)** | Investible Surplus **₹2 Crores to ₹25 Crores** | Private Banking, Portfolio Management Services (PMS), Estate Planning, Structured Products |
| **Ultra HNWIs (UHNWIs)** | Investible Surplus **> ₹25 Crores** | Dedicated Family Offices, Alternative Investment Funds (AIFs), Global asset diversification |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Credit risk in retail banking is **granular and dispersed**, giving it lower systemic concentration risk than wholesale lending.
> 2. Retail CASA deposits provide **sticky, low-cost liquidity**, reducing asset-liability mismatches during market interest rate cycles.
> 3. The **Strategic Business Unit (SBU)** model isolates business divisions as autonomous profit-and-loss centers.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Which of the following is a distinguishing operational characteristic of Retail Banking compared to Corporate Banking?',
          options: [
            '(A) High ticket size and low transaction volume',
            '(B) Granular credit risk spread across numerous small borrowers',
            '(C) Reliance on volatile wholesale certificates of deposit',
            '(D) Negligible processing costs per transaction',
          ],
        },
        {
          q: 'Under standard Indian retail banking customer segmentation, individuals having an investible surplus between ₹2 Crores and ₹25 Crores are categorized as:',
          options: [
            '(A) Mass Affluent',
            '(B) Super Affluent',
            '(C) High Net Worth Individuals (HNWIs)',
            '(D) Ultra HNWIs',
          ],
        },
        {
          q: 'In which organizational business model does an autonomous Strategic Business Unit (SBU) manage end-to-end product manufacturing, underwriting, and profitability targets?',
          options: [
            '(A) Horizontally Integrated Model',
            '(B) Vertically Integrated Model',
            '(C) Matrix Network Model',
            '(D) Functional Silo Model',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Granular credit risk spread across numerous small borrowers. Retail banking minimizes systemic single-name concentration risk by lending in smaller tickets across millions of retail consumers.',
        'Q2 Correct Answer: (C) High Net Worth Individuals (HNWIs). In wealth management standards, the ₹2 Crore to ₹25 Crore investible surplus bracket defines HNWIs.',
        'Q3 Correct Answer: (B) Vertically Integrated Model. Under vertical integration, individual product divisions operate as self-contained units controlling product design, underwriting, and direct performance.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why do retail deposits (CASA) provide a more stable funding base for commercial banks than wholesale corporate deposits?',
        answer: 'Because retail deposits are held by millions of individual households for routine transaction needs, making them sticky and insensitive to minor interest rate differentials, whereas corporate bulk deposits quickly migrate to competitors seeking higher yields.',
      },
      {
        prompt: 'Define the Predominantly Vertically Integrated organizational model in retail banking.',
        answer: 'It is a hybrid structure where product manufacturing, risk underwriting, and credit operations are managed vertically by specialized product groups, but customer sales and branch delivery are integrated horizontally across a shared branch/digital network.',
      },
    ],
  },

  // CHAPTER 2
  {
    index: 2,
    filename: '02_CHAPTER_02_BRANCH_PROFITABILITY_ROA_ROE.md',
    fullTitle: 'BRANCH PROFITABILITY, OPERATIONAL EFFICIENCY & ROA / ROE METRICS',
    shortHeader: 'CHAPTER 02 : BRANCH PROFITABILITY & ROA',
    leadParagraph: 'Commercial bank branch networks function as localized profit centers whose performance is evaluated through rigorous financial and operational metrics. Balancing interest margin generation, fee-based non-interest income, operating cost containment, and transfer pricing enables bank management to maximize Return on Assets (ROA) and Return on Equity (ROE).',
    content: `
## 1. Master Profitability & Efficiency Formulas

### 1. Return on Assets (ROA)
$$\\text{ROA} = \\frac{\\text{Net Profit After Tax}}{\\text{Average Total Assets}} \\times 100$$
- *Benchmark:* An ROA of **$\\ge 1.0\\%$** is considered sound for commercial banking operations; an ROA below 0.5% indicates severe profitability or asset quality strain.

### 2. Return on Equity (ROE) & DuPont Decomposition
$$\\text{ROE} = \\frac{\\text{Net Profit After Tax}}{\\text{Average Shareholder Equity}} \\times 100$$
$$\\text{DuPont Identity:} \\quad \\text{ROE} = \\text{ROA} \\times \\text{Equity Multiplier} = \\left( \\frac{\\text{Net Profit}}{\\text{Total Assets}} \\right) \\times \\left( \\frac{\\text{Total Assets}}{\\text{Shareholder Equity}} \\right)$$
- Reveals whether high equity returns are generated by superior operating profitability (ROA) or high financial leverage (Assets / Equity).

### 3. Net Interest Margin (NIM)
$$\\text{NIM} = \\frac{\\text{Interest Income} - \\text{Interest Expended}}{\\text{Average Earning Assets}} \\times 100 = \\frac{\\text{Net Interest Income (NII)}}{\\text{Average Earning Assets}} \\times 100$$
- Measures the core lending spread efficiency of the bank balance sheet.

### 4. Cost-to-Income Ratio (Efficiency Ratio)
$$\\text{Cost-to-Income Ratio} = \\frac{\\text{Operating Expenses (excluding provisions)}}{\\text{Net Total Income (NII} + \\text{Other Income)}} \\times 100$$
- Lower is better; a ratio between **40% and 50%** reflects high operational productivity.

## 2. Transfer Pricing Mechanism in Bank Branches

- **Funds Transfer Pricing (FTP):** Internal accounting mechanism allocating cost and revenue between deposit-surplus branches and credit-deploying branches.
  - *Deposit-Surplus Branch:* Receives an internal FTP transfer credit from Treasury for transferring surplus customer deposits.
  - *Lending-Surplus Branch:* Pays an internal FTP cost to Treasury for borrowing wholesale funds to finance local advances.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In the DuPont formula, $\\text{ROE} = \\text{ROA} \\times \\text{Equity Multiplier}$.
> 2. Provisions for loan losses (NPAs) are **excluded** from operating expenses when calculating the Cost-to-Income ratio.
> 3. An increase in CASA ratio directly widens Net Interest Margin (NIM) by lowering the weighted-average cost of deposits.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A commercial bank earns a Net Profit of ₹1,200 Crores on Average Total Assets of ₹1,00,000 Crores. What is its Return on Assets (ROA)?',
          options: ['(A) 0.80%', '(B) 1.20%', '(C) 1.50%', '(D) 2.00%'],
        },
        {
          q: 'According to the DuPont analysis for banks, Return on Equity (ROE) equals Return on Assets (ROA) multiplied by:',
          options: [
            '(A) Net Interest Margin',
            '(B) Equity Multiplier (Total Assets / Equity)',
            '(C) Cost-to-Income Ratio',
            '(D) Capital Adequacy Ratio',
          ],
        },
        {
          q: 'In branch profitability accounting, the internal mechanism used to compensate deposit-heavy branches for funds transferred to Treasury is known as:',
          options: [
            '(A) Marginal Cost Lending Rate',
            '(B) Funds Transfer Pricing (FTP)',
            '(C) Statutory Reserve Pricing',
            '(D) Capital Charge Allocation',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 1.20%. ROA = (Net Profit / Average Assets) × 100 = (1,200 / 1,00,000) × 100 = 1.20%.',
        'Q2 Correct Answer: (B) Equity Multiplier (Total Assets / Equity). The DuPont equation expresses ROE = ROA × (Total Assets / Equity).',
        'Q3 Correct Answer: (B) Funds Transfer Pricing (FTP). FTP assigns an internal rate of return to funds gathered and transferred across branch networks.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does an increase in high-cost bulk deposits compress a bank Net Interest Margin (NIM)?',
        answer: 'Because bulk deposits carry higher coupon rates than retail CASA accounts, increasing total interest expended without a commensurate increase in asset loan yields, thereby reducing Net Interest Income (NII).',
      },
      {
        prompt: 'State the benchmark healthy ranges for ROA and Cost-to-Income ratio in modern commercial banks.',
        answer: 'ROA: ≥ 1.0% (indicates solid asset profitability); Cost-to-Income Ratio: 40% to 50% (indicates strong operational cost containment relative to net revenues).',
      },
    ],
  },

  // CHAPTER 3
  {
    index: 3,
    filename: '03_CHAPTER_03_CUSTOMER_REQUIREMENTS_MASLOW_PLC.md',
    fullTitle: 'CUSTOMER REQUIREMENTS, PRODUCT LIFECYCLE & MASLOW HIERARCHY',
    shortHeader: 'CHAPTER 03 : CUSTOMER NEEDS & LIFECYCLE',
    leadParagraph: 'Retail banking product design aligns closely with behavioural psychology and developmental life stages. Applying Abraham Maslow Hierarchy of Human Needs to personal finance enables banks to map financial instruments from basic survival checking accounts up to estate planning, while managing the four stages of the Product Life Cycle (PLC).',
    content: `
## 1. Mapping Maslow Hierarchy of Needs to Retail Banking Products

\`\`\`
                     ┌──────────────────────────────────┐
                     │     SELF-ACTUALIZATION NEEDS     │  • Philanthropic Trusts, Legacy Planning,
                     │                                  │    Art & Heritage Asset Advisory
                     ├──────────────────────────────────┤
                     │           ESTEEM NEEDS           │  • Private Banking, Premium Metal Credit
                     │                                  │    Cards, Wealth Portfolio Advisory (PMS)
                     ├──────────────────────────────────┤
                     │         BELONGING NEEDS          │  • Consumer Loans, Vacation Travel Loans,
                     │                                  │    Co-Branded Lifestyle Cards, SIPs
                     ├──────────────────────────────────┤
                     │          SECURITY NEEDS          │  • Fixed Term Deposits, Life & Health
                     │                                  │    Insurance, Housing Loans, Pension/PPF
                     ├──────────────────────────────────┤
                     │       PHYSIOLOGICAL NEEDS        │  • Basic Savings Account, Salary Account,
                     │                                  │    ATM/Debit Card, Mobile Recharge / Utility
                     └──────────────────────────────────┘
\`\`\`

| Maslow Need Tier | Psychological Consumer Goal | Financial / Banking Product Alignment |
| :--- | :--- | :--- |
| **1. Physiological Needs** | Core financial survival, daily transactional liquidity, utility bills | Basic Savings Bank Deposit Account (BSBDA), Current A/c, Debit Card, UPI payments |
| **2. Security / Safety Needs** | Protection against uncertainty, emergency capital, shelter | Term Deposits, Recurring Deposits, Housing Loans, Health & Life Insurance policies, PPF |
| **3. Social / Belonging Needs** | Lifestyle enhancement, family mobility, leisure consumption | Auto Loans, Consumer Durable Loans, Vacation Travel Loans, Mutual Fund SIPs |
| **4. Esteem / Status Needs** | Social recognition, prestige, personalized VIP treatment | Platinum/Metal Credit Cards, Private Banking Lounges, Portfolio Management (PMS) |
| **5. Self-Actualization** | Personal legacy, philanthropy, ultimate financial freedom | Family Foundations, Philanthropic Trusts, Succession Planning, Estate Advisory |

## 2. Product Life Cycle (PLC) in Retail Banking

1. **Introduction Stage:** Product launched with high marketing and tech development costs; negative or low initial operating margins (e.g., Early launch of Digital Rupee e₹).
2. **Growth Stage:** Rapid customer adoption, expanding transaction volumes, economies of scale, entering profitability (e.g., UPI and contactless tap-and-pay cards).
3. **Maturity Stage:** Peak market penetration, intense price competition across banks, stable but decelerating growth (e.g., Standard Home Loans, Auto Loans, Term Deposits).
4. **Decline Stage:** Product becomes technologically obsolete, replaced by superior digital alternatives (e.g., Paper Travelers Cheques, Magnetic Stripe Only cards).

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Housing loans align with the **Security / Safety Needs** tier in Maslow hierarchy (providing foundational shelter and asset security).
> 2. Basic transactional CASA accounts satisfy the lowest tier: **Physiological Needs**.
> 3. Private Banking and exclusive metal credit cards satisfy **Esteem / Status Needs**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under Abraham Maslow Hierarchy of Needs applied to banking products, a Housing Loan satisfies which level of consumer needs?',
          options: [
            '(A) Physiological Needs',
            '(B) Safety and Security Needs',
            '(C) Social Needs',
            '(D) Esteem Needs',
          ],
        },
        {
          q: 'In which stage of the Product Life Cycle (PLC) does a retail banking product achieve peak market penetration, stable customer volumes, and face aggressive pricing competition?',
          options: ['(A) Introduction Stage', '(B) Growth Stage', '(C) Maturity Stage', '(D) Decline Stage'],
        },
        {
          q: 'Which of the following products is positioned at the Esteem / Status tier of retail banking customer needs?',
          options: [
            '(A) Basic Savings Bank Deposit Account',
            '(B) PMJDY Overdraft Facility',
            '(C) Super-Premium Metal Credit Card with Private Concierge',
            '(D) Public Provident Fund (PPF) Account',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Safety and Security Needs. Housing loans fulfill the psychological need for physical shelter and financial asset protection.',
        'Q2 Correct Answer: (C) Maturity Stage. At maturity, market penetration is maximized and growth stabilizes, leading competitors to compete primarily on interest rates and processing fee waivers.',
        'Q3 Correct Answer: (C) Super-Premium Metal Credit Card with Private Concierge. Esteem products emphasize prestige, exclusive privileges, and social recognition.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'How does customer age correlate with the transition across Maslow tiers in retail banking?',
        answer: 'Young adulthood starts with Physiological needs (salary accounts, debit cards). Middle adulthood advances to Security and Social needs (housing loans, insurance, child education funds). Pre-retirement and retirement advance to Esteem and Self-Actualization needs (wealth preservation, estate and trust planning).',
      },
      {
        prompt: 'What strategy should a bank employ for a product entering the Maturity stage of its Product Life Cycle?',
        answer: 'The bank should focus on product bundling, service differentiation, operational cost reduction through digital automation, and cross-selling higher-margin ancillary products.',
      },
    ],
  },

  // CHAPTER 4
  {
    index: 4,
    filename: '04_CHAPTER_04_RETAIL_LIABILITY_PRODUCTS_CASA.md',
    fullTitle: 'RETAIL LIABILITY PRODUCTS: CASA, TIME DEPOSITS & SPECIAL SCHEMES',
    shortHeader: 'CHAPTER 04 : RETAIL LIABILITIES & CASA',
    leadParagraph: 'Retail liability products constitute the financial lifeblood of commercial banks, providing low-cost Current and Savings Accounts (CASA) and stable Term Deposits. Governed by RBI Master Directions on Interest Rates on Deposits, these products must comply with regulatory requirements regarding interest calculation, premature withdrawal penalties, and the DICGC deposit insurance safety net.',
    content: `
## 1. Master Classification of Retail Deposit Products

| Product Category | Statutory Nature & Features | Regulatory Norms (RBI Directions) |
| :--- | :--- | :--- |
| **Current Accounts** | Demand liability; non-interest-bearing; high transaction turnover for businesses | **Interest Payment Prohibited** (except on balances of deceased depositors or under explicit RBI exemptions). |
| **Savings Bank (SB) Accounts** | Demand liability; combines liquidity with modest interest returns for individuals and trusts | Interest calculated on **Daily Product Basis** and credited at quarterly (or shorter) intervals. |
| **Basic Savings Bank Deposit Account (BSBDA)** | Zero-minimum-balance inclusion account; replaces "No-Frills" accounts | Free ATM card; **Minimum 4 free withdrawals per month** (including ATM); no requirement for initial minimum balance. |
| **Term / Fixed Deposits (FD)** | Time liability; funds placed for a contracted fixed tenor at contracted interest rate | Minimum tenor: **7 days** (for amounts $\ge$ ₹15 Lakhs, 7 days; otherwise standard 7 days up to 10 years). |
| **Recurring Deposits (RD)** | Time liability; regular monthly fixed installments accumulating toward terminal maturity | Tenors from **6 months to 120 months** (10 years); compound interest calculated quarterly. |
| **Flexi-Deposits (Auto-Sweep)** | Hybrid product linking Savings Account with Term Deposit | Surplus balance above a threshold auto-sweeps into FD; auto-reverse-sweeps upon deficit to prevent cheque return. |

## 2. DICGC Deposit Insurance Coverage Framework

- **Insuring Authority:** Deposit Insurance and Credit Guarantee Corporation (DICGC), a wholly owned subsidiary of the Reserve Bank of India (DICGC Act 1961).
- **Maximum Insured Limit:** **₹5,00,000 (Rupees Five Lakhs)** per depositor, per insured commercial/cooperative bank.
- **Coverage Rule:** The ₹5 Lakh limit covers **both Principal and Interest** combined, held in the same capacity and same right across all branches of a single bank.
- **Exclusions:** Deposits of foreign governments, central/state governments, and inter-bank deposits are **completely excluded** from DICGC insurance.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Interest on Savings Bank accounts is calculated on the **daily product balance**, not on minimum balances between the 10th and end of the month.
> 2. The DICGC insurance coverage limit is **₹5,00,000 per depositor per bank**, covering principal and interest combined.
> 3. BSBDA account holders are entitled to a **minimum of 4 free withdrawals per month** without penalty.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under current Reserve Bank of India guidelines, on what basis must commercial banks calculate interest payable on Savings Bank accounts?',
          options: [
            '(A) Minimum balance between 10th and 30th of the month',
            '(B) Daily end-of-day product balance',
            '(C) Average monthly balance',
            '(D) Closing balance on the last day of each quarter',
          ],
        },
        {
          q: 'What is the maximum insurance protection limit provided by DICGC per depositor across all accounts in the same right and capacity in a bank?',
          options: ['(A) ₹1,00,000', '(B) ₹2,00,000', '(C) ₹5,00,000', '(D) ₹10,00,000'],
        },
        {
          q: 'Under the Basic Savings Bank Deposit Account (BSBDA) guidelines, what is the minimum number of free withdrawals permitted to an account holder per month?',
          options: ['(A) 2 Withdrawals', '(B) 3 Withdrawals', '(C) 4 Withdrawals', '(D) Unlimited free withdrawals'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Daily end-of-day product balance. Since April 1, 2010, the RBI mandates interest computation on daily product balances.',
        'Q2 Correct Answer: (C) ₹5,00,000. In 2020, the DICGC insurance limit was raised from ₹1 Lakh to ₹5 Lakhs per depositor per bank (covering principal and accrued interest).',
        'Q3 Correct Answer: (C) 4 Withdrawals. BSBDA holders are legally entitled to at least 4 free withdrawals per month (across branch counters and ATMs).',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'If a depositor maintains ₹4 Lakhs in an individual savings account and ₹3 Lakhs in an individual term deposit in the same bank, what is the total DICGC insurance payout if the bank fails?',
        answer: '₹5,00,000 in total. Because both accounts are held in the "same capacity and same right" within the same bank, their combined balance of ₹7 Lakhs is capped at the maximum statutory DICGC insurance limit of ₹5 Lakhs.',
      },
      {
        prompt: 'How does an Auto-Sweep (Flexi-Deposit) account improve depositor returns while preserving liquidity?',
        answer: 'It automatically sweeps excess funds above a specified threshold from the low-yielding savings account into higher-yielding short-term fixed deposits. When a cheque or debit occurs that exceeds the savings balance, it automatically reverse-sweeps funds from the FD without penalty.',
      },
    ],
  },

  // CHAPTER 5
  {
    index: 5,
    filename: '05_CHAPTER_05_HOUSING_LOANS_LTV_PMAY.md',
    fullTitle: 'RETAIL LENDING PRODUCTS I: HOUSING LOANS, LTV RATIOS & PMAY',
    shortHeader: 'CHAPTER 05 : HOUSING FINANCE & LTV',
    leadParagraph: 'Housing finance constitutes the largest and most secure component of bank retail lending portfolios, supported by immovable collateral and low historical default rates. To curb real estate asset bubbles and ensure credit discipline, the Reserve Bank of India enforces strict Loan-to-Value (LTV) limits, borrower margin requirements, and risk-weight caps, aligned with interest subvention schemes like the Pradhan Mantri Awas Yojana (PMAY).',
    content: `
## 1. RBI Prudential Guidelines on Housing Loan LTV Ratios & Risk Weights

| Individual Housing Loan Ticket Slab | Maximum Permissible LTV Ratio | Minimum Borrower Margin | Standard Regulatory Risk Weight |
| :--- | :--- | :--- | :--- |
| **Loans up to ₹30 Lakhs** | **90%** | **10%** | **35%** (if LTV $\\le 80\\%$) / **50%** (if LTV > 80% to 90%) |
| **Loans > ₹30 Lakhs up to ₹75 Lakhs** | **80%** | **20%** | **35%** (if LTV $\\le 75\\%$) / **50%** (if LTV > 75% to 80%) |
| **Loans above ₹75 Lakhs** | **75%** | **25%** | **50%** (regardless of LTV) |

- **Valuation Rule for LTV Calculation:**
  - For housing loans **exceeding ₹10 Lakhs**, stamp duty, registration charges, and documentation expenses **cannot be included** in the total property cost for calculating the LTV ratio.
  - For small affordable housing loans **up to ₹10 Lakhs**, banks may include stamp duty and registration expenses in the cost of the house.

## 2. Borrower Affordability Ratios: FOIR and LTV

### 1. Fixed Obligation to Income Ratio (FOIR)
$$\\text{FOIR} = \\frac{\\text{Proposed Loan EMI} + \\text{Existing Fixed Monthly Debt Obligations}}{\\text{Gross / Net Monthly Income}} \\times 100$$
- *Standard Benchmark:* Banks generally restrict FOIR between **40% and 55%** (up to 60% for high-income earners) to ensure the borrower retains adequate disposable income for living expenses.

### 2. Loan-to-Value Ratio (LTV)
$$\\text{LTV} = \\frac{\\text{Sanctioned Loan Amount}}{\\text{Market Value / Registered Cost of Property}} \\times 100$$

## 3. Pradhan Mantri Awas Yojana (PMAY) Credit Linked Subsidy Scheme (CLSS)

| Beneficiary Category | Annual Household Income | Max Loan Eligible for Subsidy | Interest Subsidy Rate | Max Net Present Value (NPV) Subsidy |
| :--- | :--- | :--- | :--- | :--- |
| **Economically Weaker Section (EWS)** | Up to **₹3.00 Lakhs** | ₹6.00 Lakhs | **6.50%** | Approx ₹2.67 Lakhs |
| **Low Income Group (LIG)** | **₹3.01L to ₹6.00 Lakhs** | ₹6.00 Lakhs | **6.50%** | Approx ₹2.67 Lakhs |
| **Middle Income Group I (MIG-I)** | **₹6.01L to ₹12.00 Lakhs** | ₹9.00 Lakhs | **4.00%** | Approx ₹2.35 Lakhs |
| **Middle Income Group II (MIG-II)** | **₹12.01L to ₹18.00 Lakhs** | ₹12.00 Lakhs | **3.00%** | Approx ₹2.30 Lakhs |

- **Woman Ownership Mandate:** For EWS/LIG categories, the house must be registered with female head of household as sole or joint owner.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. For housing loans **above ₹75 Lakhs**, the maximum LTV ratio is **75%** (borrower margin minimum 25%).
> 2. For housing loans above ₹10 Lakhs, **stamp duty and registration charges cannot be added** to the property value for computing LTV.
> 3. Effective October 1, 2019, all new floating-rate personal and retail loans must be pegged to an **External Benchmark** (e.g., RBI Repo Rate).
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under RBI prudential guidelines, what is the maximum permissible Loan-to-Value (LTV) ratio for an individual housing loan of ₹25 Lakhs?',
          options: ['(A) 75%', '(B) 80%', '(C) 85%', '(D) 90%'],
        },
        {
          q: 'For an individual housing loan of ₹85 Lakhs, what is the minimum down payment (margin) required from the borrower under RBI regulations?',
          options: ['(A) 10%', '(B) 15%', '(C) 20%', '(D) 25%'],
        },
        {
          q: 'In retail credit appraisal, the ratio evaluating total monthly debt repayment commitments against the borrower net monthly income is:',
          options: [
            '(A) Loan-to-Value (LTV) Ratio',
            '(B) Fixed Obligation to Income Ratio (FOIR)',
            '(C) Debt-Equity Ratio (DER)',
            '(D) Current Ratio',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (D) 90%. For housing loans up to ₹30 Lakhs, the maximum permissible LTV is 90% (minimum 10% margin).',
        'Q2 Correct Answer: (D) 25%. For loans above ₹75 Lakhs, the maximum LTV is 75%, requiring a minimum borrower margin of 25%.',
        'Q3 Correct Answer: (B) Fixed Obligation to Income Ratio (FOIR). FOIR evaluates the borrower debt servicing capacity by comparing total EMI obligations against monthly income.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does the RBI prohibit adding stamp duty and registration charges to property cost when calculating LTV for loans above ₹10 Lakhs?',
        answer: 'To prevent artificial inflation of property valuations and ensure that borrowers maintain a genuine cash equity stake in the underlying physical asset, mitigating speculative borrowing.',
      },
      {
        prompt: 'What interest subsidy rate is provided under the PMAY CLSS scheme for Economically Weaker Section (EWS) borrowers?',
        answer: 'An upfront interest subsidy of 6.50% per annum on loan amounts up to ₹6.00 Lakhs for a maximum tenure of 20 years, discounted at an 8.00% NPV discount rate.',
      },
    ],
  },

  // CHAPTER 6
  {
    index: 6,
    filename: '06_CHAPTER_06_AUTO_PERSONAL_EDUCATION_LOANS.md',
    fullTitle: 'RETAIL LENDING PRODUCTS II: AUTO, PERSONAL & EDUCATION LOANS',
    shortHeader: 'CHAPTER 06 : AUTO & EDUCATION FINANCING',
    leadParagraph: 'Retail non-housing advances span vehicle financing, personal unsecured credit, and educational loans. While vehicle loans rely on hypothecation of mobile assets with RTO charge recording, the IBA Model Education Loan Scheme provides social empowerment through statutory caps on margins, moratorium periods, and a strict ban on collateral for loans up to ₹4 Lakhs.',
    content: `
## 1. IBA Model Education Loan Scheme Norms

| Loan Quantum Slab | Margin Requirement | Collateral & Security Mandate |
| :--- | :--- | :--- |
| **Up to ₹4.00 Lakhs** | **NIL (0% Margin)** | **No Collateral, No Third-Party Guarantee**. Parents / guardians as co-borrowers. |
| **Above ₹4.00 Lakhs up to ₹7.50 Lakhs** | • **5%** for studies in India<br>• **15%** for studies abroad | Co-obligation of parents + **Third-Party Guarantee** (or CGFSEL guarantee cover); **No tangible collateral**. |
| **Above ₹7.50 Lakhs** | • **5%** for studies in India<br>• **15%** for studies abroad | Co-obligation of parents + **Tangible Collateral Security** of suitable value. |

- **Moratorium / Repayment Holiday:** Course duration + **1 year** (or 6 months after securing employment, whichever is earlier).
- **Interest Concession:** 1% interest concession if simple interest is serviced during the study and moratorium period.
- **Maximum Repayment Tenure:** Up to **15 years** after completion of the moratorium period across all loan slabs.

## 2. Vehicle / Auto Loans & Hypothecation Architecture

- **Primary Security:** **Hypothecation** of the financed vehicle in favor of the lending bank.
- **Statutory Registration:** Bank charge must be registered with the Regional Transport Authority (RTA) and endorsed on the Vehicle Registration Certificate (RC Book) under Section 51 of the Motor Vehicles Act 1988.
- **Margin Benchmark:** Typically **10% to 15%** of on-road (or ex-showroom) vehicle cost.
- **Comprehensive Insurance:** The vehicle must carry comprehensive insurance with the bank hypothecation clause formally endorsed.

## 3. Unsecured Personal Loans

- **Characteristics:** Fast turnaround, no physical collateral, priced at higher interest margins.
- **Underwriting Parameters:** Primarily evaluated on CIBIL score ($\ge 750$), employer tier, FOIR ($\le 50\%$), and salary account stability.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. For education loans up to **₹4 Lakhs**, demanding collateral security or third-party guarantee is a **direct regulatory violation** of RBI/IBA guidelines.
> 2. The repayment moratorium for education loans is **Course Duration + 1 Year** (or 6 months after getting a job).
> 3. Vehicle loans are secured by **Hypothecation**, not pledge, because possession remains with the borrower.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under the IBA Model Education Loan Scheme, what collateral security or third-party guarantee can a bank demand for a loan of ₹3.50 Lakhs?',
          options: [
            '(A) Immovable property mortgage',
            '(B) Two government employee guarantees',
            '(C) No collateral and no third-party guarantee can be demanded',
            '(D) 50% cash collateral in fixed deposit',
          ],
        },
        {
          q: 'What is the repayment moratorium period permitted under the IBA Model Education Loan Scheme?',
          options: [
            '(A) 6 months fixed',
            '(B) Course duration only',
            '(C) Course duration + 1 year (or 6 months after employment, whichever is earlier)',
            '(D) 2 years after degree completion',
          ],
        },
        {
          q: 'What legal charge is created over a motor car financed by a commercial bank where possession remains with the borrower?',
          options: ['(A) Pledge', '(B) Hypothecation', '(C) Equitable Mortgage', '(D) Banker Lien'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) No collateral and no third-party guarantee can be demanded. Under IBA model norms, loans up to ₹4 Lakhs require only parental co-obligation with zero collateral and zero margin.',
        'Q2 Correct Answer: (C) Course duration + 1 year (or 6 months after employment, whichever is earlier). This statutory holiday protects students during their job search.',
        'Q3 Correct Answer: (B) Hypothecation. Hypothecation creates a security charge on movable assets while custody and usage remain with the borrower.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What margin is required for education loans of ₹6 Lakhs for studies in India vs studies abroad?',
        answer: 'Studies in India: 5% margin. Studies abroad: 15% margin. (For loans up to ₹4 Lakhs, the margin is Nil for both).',
      },
      {
        prompt: 'Why does Section 51 of the Motor Vehicles Act 1988 require hypothecation endorsement on the vehicle RC book?',
        answer: 'It provides public legal notice of the bank security interest, preventing the owner from transferring ownership or obtaining a duplicate RC without a formal No Objection Certificate (NOC) from the lending bank.',
      },
    ],
  },
];

async function main() {
  console.log(`Generating initial 6 chapters for IIBF Paper 4 (RBWM)...`);
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
