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
  // CHAPTER 14
  {
    index: 14,
    filename: '14_CHAPTER_14_DELIVERY_CHANNELS_ATMS_BCS.md',
    fullTitle: 'DELIVERY CHANNELS: BRANCH ARCHITECTURE, ATMS & BUSINESS CORRESPONDENTS',
    shortHeader: 'CHAPTER 14 : BANKING DELIVERY CHANNELS',
    leadParagraph: 'Retail banking distribution has evolved from brick-and-mortar branch models into multi-channel digital networks. Optimizing delivery across Automated Teller Machines (ATMs), Point of Sale (POS) merchant terminals, internet banking, mobile banking apps, and rural Business Correspondent (BC) networks reduces per-transaction servicing costs while promoting financial inclusion.',
    content: `
## 1. Master Matrix: ATM Operating Models in India

| ATM Classification | Ownership of Hardware & Site | Cash Management & Banking Connectivity | Operational Features & Brand Identity |
| :--- | :--- | :--- | :--- |
| **Bank-Owned ATM** | Owned and leased by the bank | Managed directly by the sponsor bank | Bears sponsor bank logo; deployed on-site or off-site. |
| **Brown Label ATM (BLA)** | Hardware owned and maintained by service provider | Cash handling and network connectivity provided by sponsor bank | Bears sponsor bank brand logo; bank pays per-transaction fee to provider. |
| **White Label ATM (WLA)** | Owned and operated by non-bank entities authorized by RBI under PSS Act 2007 | Managed entirely by non-bank WLA operator (e.g., Tata Indicash, India1 Payments) | **Bears non-bank entity logo**; connects to National Financial Switch (NFS); serves all bank cards. |
| **Micro-ATM** | Handheld biometric Point of Sale device | Operated by Business Correspondents (BCs) using Aadhaar authentication (AePS) | Deployed in rural unbanked regions for instant cash deposit, withdrawal, and transfers. |

## 2. Business Correspondent (BC) Model for Financial Inclusion

- **Regulatory Origin:** RBI permitted banks in 2006 to engage non-governmental intermediaries as Business Facilitators (BFs) and Business Correspondents (BCs) to bridge the last-mile rural banking divide.
- **Permitted Entities:** NGOs, self-help groups, microfinance institutions, retired bank employees/teachers, kirana store owners, and Common Service Centers (CSCs).
- **Scope of BC Activities:** Cash deposits, cash withdrawals, opening basic savings accounts (BSBDA/PMJDY), biometric e-KYC, Aadhaar-enabled fund transfers, and collecting loan applications.
- **Cash Risk Mitigation:** BCs operate with a prepaid security deposit or working capital limit linked to a designated corporate BC account.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **White Label ATMs (WLAs)** are owned and operated by **non-bank entities** authorized by the RBI under the Payment and Settlement Systems Act 2007.
> 2. In **Brown Label ATMs**, the hardware is owned by an external vendor, but cash management and brand sponsorship belong to the bank.
> 3. Micro-ATMs operate primarily on the **Aadhaar Enabled Payment System (AePS)** network.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Automated Teller Machines (ATMs) owned and operated by non-bank entities authorized by the RBI, which do not display any bank logo, are termed:',
          options: ['(A) Brown Label ATMs', '(B) White Label ATMs', '(C) Green Label ATMs', '(D) Yellow Label ATMs'],
        },
        {
          q: 'In a Brown Label ATM model, which party is responsible for cash management and bank network connectivity?',
          options: [
            '(A) The hardware vendor',
            '(B) The sponsor commercial bank',
            '(C) The National Payments Corporation of India directly',
            '(D) The local police department',
          ],
        },
        {
          q: 'Under RBI guidelines, which of the following entities CANNOT be appointed as a Business Correspondent (BC)?',
          options: [
            '(A) Post Offices and Common Service Centers',
            '(B) Retired school teachers and bank staff',
            '(C) Non-Banking Financial Companies (NBFCs) taking public deposits',
            '(D) Individual kirana store proprietors',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) White Label ATMs. Non-bank entities authorized under PSS Act 2007 deploy White Label ATMs carrying their own independent brand logos.',
        'Q2 Correct Answer: (B) The sponsor commercial bank. Brown label arrangements outsource hardware installation and maintenance to a vendor while the sponsor bank manages cash logistics and network switching.',
        'Q3 Correct Answer: (C) NBFCs taking public deposits. RBI guidelines strictly prohibit deposit-taking NBFCs from acting as BCs to avoid conflicts of interest.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why is the per-transaction servicing cost of mobile banking significantly lower than a physical branch counter?',
        answer: 'Physical branches incur high fixed overheads (real estate rent, teller salaries, utilities, physical cash transit), costing ₹50–₹80 per transaction, whereas automated mobile banking transactions run on digital server infrastructure costing less than ₹1 per transaction.',
      },
      {
        prompt: 'What role does the National Financial Switch (NFS) play in ATM operations across India?',
        answer: 'Operated by NPCI, the NFS is the central inter-bank ATM switching network that routes transactions between the ATM terminal of an acquiring bank and the core banking system of the cardholder\'s issuing bank.',
      },
    ],
  },

  // CHAPTER 15
  {
    index: 15,
    filename: '15_CHAPTER_15_RELATIONSHIP_BANKING_CROSS_SELLING.md',
    fullTitle: 'RELATIONSHIP BANKING, CROSS-SELLING, UP-SELLING & CUSTOMER RETENTION',
    shortHeader: 'CHAPTER 15 : RELATIONSHIP BANKING & CROSS-SELLING',
    leadParagraph: 'Relationship banking transforms transactional customer interactions into long-term financial partnerships. By leveraging data analytics, Customer Relationship Management (CRM) engines, and Customer Lifetime Value (CLV) models, commercial banks lower customer acquisition costs through systematic cross-selling and up-selling while defending their retail deposit franchise against attrition.',
    content: `
## 1. Cross-Selling vs Up-Selling Dynamics

\`\`\`
  EXISTING RETAIL CUSTOMER (Home Loan Borrower)
         │
         ├── CROSS-SELLING (Ancillary Products) ──► Home Insurance, Credit Card, Mutual Fund SIP
         │
         └── UP-SELLING (Premium Tier Upgrades) ──► Upgrading Savings A/c to Preferred Wealth A/c
\`\`\`

| Strategy | Precise Conceptual Definition | Practical Banking Execution |
| :--- | :--- | :--- |
| **Cross-Selling** | Offering complementary, ancillary banking products to an existing client | Selling motor insurance, term life insurance, or a credit card to an auto loan borrower |
| **Up-Selling** | Persuading an existing customer to upgrade to a higher-value, premium-tier product | Encouraging a standard savings account holder to upgrade to a priority banking account with higher minimum balance |

## 2. Customer Lifetime Value (CLV) & Churn Management

- **Customer Lifetime Value (CLV):**
  $$\\text{CLV} = \\sum_{t=1}^n \\frac{\\text{Annual Net Margin earned from Customer}_t}{(1 + r)^t} - \\text{Customer Acquisition Cost}$$
  - Quantifies total projected net profit attributable to the entire future relationship with a customer.
- **Defensive Marketing Axiom:** Retaining an existing customer costs **one-fifth (1/5th)** of the capital required to acquire a new retail customer.
- **Product Holding Ratio (PHR):** Number of distinct bank products utilized by a single customer. As PHR increases from 1 to 4+, customer churn drops below 2% annually.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Selling insurance or a credit card to an existing loan borrower is **Cross-Selling**; moving a customer to a higher-tier wealth account is **Up-Selling**.
> 2. Higher product holding per customer significantly **reduces churn risk** and enhances Customer Lifetime Value.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'When a bank branch marketing officer offers a Mutual Fund Systematic Investment Plan (SIP) and term insurance to an existing home loan borrower, this is:',
          options: ['(A) Up-selling', '(B) Cross-selling', '(C) Penetration pricing', '(D) Defensive underwriting'],
        },
        {
          q: 'Persuading a customer holding a basic debit card to switch to a premium metal credit card carrying a higher annual fee and lifestyle benefits represents:',
          options: ['(A) Cross-selling', '(B) Up-selling', '(C) Cold calling', '(D) Product disintermediation'],
        },
        {
          q: 'What happens to customer attrition (churn rate) as the average number of banking products held per retail customer increases?',
          options: [
            '(A) Increases sharply',
            '(B) Decreases significantly',
            '(C) Remains unaffected',
            '(D) Becomes zero immediately',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Cross-selling. Selling complementary, ancillary financial products to existing customers constitutes cross-selling.',
        'Q2 Correct Answer: (B) Up-selling. Moving the customer up to a higher-margin, more sophisticated product tier is up-selling.',
        'Q3 Correct Answer: (B) Decreases significantly. Higher product integration increases switching costs and deepens the relationship, lowering attrition.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does Cross-Selling significantly improve bank Return on Equity (ROE)?',
        answer: 'Because cross-selling generates fee-based non-interest income (e.g., insurance distributor commissions, mutual fund fees) without consuming additional regulatory capital, directly expanding net profits on the existing operational base.',
      },
      {
        prompt: 'What is the role of CRM analytics in preventing retail deposit attrition?',
        answer: 'CRM predictive models analyze transaction patterns (such as falling average balances or diverted salary credits) to flag early churn risks, enabling relationship managers to intervene with customized retention offers before accounts close.',
      },
    ],
  },

  // CHAPTER 16
  {
    index: 16,
    filename: '16_CHAPTER_16_WEALTH_MANAGEMENT_PROCESS_PROFILING.md',
    fullTitle: 'WEALTH MANAGEMENT LIFECYCLE, ADVISORY & RISK PROFILING',
    shortHeader: 'CHAPTER 16 : WEALTH MANAGEMENT LIFECYCLE',
    leadParagraph: 'Wealth management is a comprehensive financial advisory discipline combining investment management, tax planning, estate administration, and risk mitigation for affluent clients. Governed by the SEBI (Investment Advisers) Regulations 2013, wealth managers follow a structured lifecycle—from wealth accumulation to preservation and distribution—anchored in systematic customer risk profiling.',
    content: `
## 1. The Three Stages of the Wealth Management Lifecycle

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                   THE WEALTH MANAGEMENT LIFECYCLE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. ACCUMULATION PHASE  : Early to mid-career; focus on wealth building,     │
│                          high risk tolerance, aggressive equity allocations │
│ 2. PRESERVATION PHASE  : Peak earnings & pre-retirement; capital protection,│
│                          debt assets, stable dividend income streams        │
│ 3. DISTRIBUTION PHASE  : Retirement & succession; estate planning, private  │
│                          trusts, tax-efficient legacy transfers to heirs    │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

| Lifecycle Phase | Chronological Stage | Investment Objective | Recommended Asset Allocation Mix |
| :--- | :--- | :--- | :--- |
| **1. Wealth Accumulation** | Age 25 to 45 (Career building) | Capital growth; aggressive wealth accumulation | High Equity (60–80%), Growth Funds, Real Estate, Low Debt |
| **2. Wealth Preservation** | Age 45 to 60 (Pre-retirement) | Capital preservation, moderate capital growth | Balanced Portfolio: 40–50% Debt, 30–40% Large-Cap Equity, Gold |
| **3. Wealth Distribution** | Age 60+ (Retirement & Legacy) | Regular income generation, capital security, succession planning | High Fixed Income / G-Secs (60–80%), Annuities, Liquid Funds, Private Family Trusts |

## 2. Risk Profiling Dimensions under SEBI IA Regulations 2013

- **Risk Tolerance:** Psychological willingness of the investor to endure market volatility and paper drawdowns.
- **Risk Capacity:** Financial ability to sustain losses without endangering essential lifestyle commitments (determined by income, net worth, liabilities, and investment horizon).
- **Client Risk Categories:**
  1. *Conservative / Risk-Averse:* Capital protection priority; allocations in G-Secs, bank FDs, liquid funds.
  2. *Moderate / Balanced:* Balanced growth; allocations in hybrid funds, dynamic asset allocation funds.
  3. *Aggressive / Growth:* Maximum long-term capital appreciation; allocations in mid/small-cap equities, AIFs.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In wealth planning, **Risk Capacity** (financial ability to absorb losses) takes precedence over subjective **Risk Tolerance** (emotional attitude).
> 2. The three sequential stages of wealth management are **Accumulation, Preservation, and Distribution**.
> 3. SEBI Investment Advisers Regulations enforce a strict segregation between fee-only **Advisory** services and commission-earning **Execution/Distribution** services.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'In the Wealth Management Lifecycle, which phase is characterized by an emphasis on capital preservation, tax efficiency, and succession/estate planning for heirs?',
          options: [
            '(A) Wealth Accumulation Phase',
            '(B) Wealth Transition Phase',
            '(C) Wealth Distribution Phase',
            '(D) Speculative Phase',
          ],
        },
        {
          q: 'Under SEBI Investment Advisers Regulations, the objective financial ability of a client to withstand investment losses without impacting current living standards is termed:',
          options: ['(A) Risk Tolerance', '(B) Risk Appetite', '(C) Risk Capacity', '(D) Risk Perception'],
        },
        {
          q: 'During the Wealth Accumulation phase (typically young investors aged 25–40), what asset allocation strategy is generally recommended?',
          options: [
            '(A) 100% in fixed deposits and liquid cash',
            '(B) Heavy allocation toward growth equities and equity mutual funds',
            '(C) High allocation toward post-office savings schemes',
            '(D) Exclusive investment in real estate land parcels',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) Wealth Distribution Phase. The final phase focuses on income reliability, estate distribution, private trusts, and succession.',
        'Q2 Correct Answer: (C) Risk Capacity. Risk capacity is an objective measure of wealth, income, and liabilities, distinct from subjective emotional risk tolerance.',
        'Q3 Correct Answer: (B) Heavy allocation toward growth equities and equity mutual funds. Longer horizons allow younger investors to absorb market cycles and pursue equity compounding.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why must SEBI-registered Investment Advisers separate advisory activities from product distribution?',
        answer: 'To eliminate conflicts of interest, ensuring advisers do not recommend financial products based on high third-party distributor commissions rather than the client best financial interests.',
      },
      {
        prompt: 'What distinguishes a Private Family Trust from a Will in wealth distribution planning?',
        answer: 'A Will takes effect only upon the testator\'s death and requires probate court validation, which can be contested. A Private Family Trust takes effect during the settlor\'s lifetime, avoids probate, and provides smooth, private wealth transfer to designated beneficiaries.',
      },
    ],
  },

  // CHAPTER 17
  {
    index: 17,
    filename: '17_CHAPTER_17_PORTFOLIO_MANAGEMENT_PMS_AIFS.md',
    fullTitle: 'PORTFOLIO MANAGEMENT SERVICES (PMS) & ALTERNATIVE INVESTMENT FUNDS (AIFS)',
    shortHeader: 'CHAPTER 17 : PMS & AIFS ARCHITECTURE',
    leadParagraph: 'High Net Worth Individuals (HNWIs) demand sophisticated investment architectures beyond standard retail mutual funds. Governed by SEBI regulations, Portfolio Management Services (PMS) provide bespoke equity/debt portfolio management, while Alternative Investment Funds (AIFs) pool private capital across venture capital, private equity, private credit, and hedge fund strategies.',
    content: `
## 1. Portfolio Management Services (PMS) Framework

- **Governing Regulation:** SEBI (Portfolio Managers) Regulations 2020.
- **Minimum Investment Ticket Size:** **₹50 Lakhs** (raised by SEBI from ₹25 Lakhs in 2020 to prevent unsophisticated retail entry).
- **Two Operating Modes:**
  1. *Discretionary PMS:* Portfolio Manager manages funds with complete independence on stock selection, timing, and execution without prior client consent for each trade.
  2. *Non-Discretionary PMS:* Portfolio Manager provides research ideas, but trades are executed **strictly upon prior client approval**.
  3. *Advisory PMS:* Manager provides investment recommendations; client executes trades independently.

## 2. Master Matrix: SEBI Alternative Investment Funds (AIFs)

- **Governing Regulation:** SEBI (Alternative Investment Funds) Regulations 2012.
- **Minimum Investment Ticket Size:** **₹1 Crore** for general investors (reduced to **₹25 Lakhs** for employees/directors of the AIF manager; **₹10 Crores** for Angel Funds).

| AIF Category | Investment Focus & Permitted Strategies | Representative Fund Structures |
| :--- | :--- | :--- |
| **Category I AIF** | Invests in start-ups, early-stage enterprises, social ventures, infrastructure, and SMEs that provide positive economic/social spillovers | Venture Capital Funds (VCFs), Angel Funds, Social Impact Funds, Infrastructure Funds |
| **Category II AIF** | Funds that do not fall under Cat I or III; does not undertake leverage other than for day-to-day operations | Private Equity (PE) Funds, Debt / Private Credit Funds, Real Estate Funds |
| **Category III AIF** | Employs diverse, complex trading strategies, short selling, and derivatives leverage for short-term alpha | Hedge Funds, PIPE Funds (Private Investment in Public Equity) |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Minimum ticket size for **Portfolio Management Services (PMS)** is **₹50 Lakhs** under SEBI 2020 regulations.
> 2. Minimum ticket size for **Alternative Investment Funds (AIFs)** is **₹1 Crore**.
> 3. **Category III AIFs** are the only category permitted to utilize complex trading strategies and leverage (Hedge Funds).
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under current SEBI regulations, what is the mandatory minimum investment ticket size required for an investor to subscribe to Portfolio Management Services (PMS)?',
          options: ['(A) ₹10 Lakhs', '(B) ₹25 Lakhs', '(C) ₹50 Lakhs', '(D) ₹1 Crore'],
        },
        {
          q: 'What is the minimum investment commitment required from an individual investor subscribing to a Category I or Category II Alternative Investment Fund (AIF)?',
          options: ['(A) ₹25 Lakhs', '(B) ₹50 Lakhs', '(C) ₹1 Crore', '(D) ₹5 Crores'],
        },
        {
          q: 'Under SEBI AIF Regulations 2012, which category of fund is permitted to employ short selling, derivatives leverage, and hedge fund trading strategies?',
          options: ['(A) Category I AIF', '(B) Category II AIF', '(C) Category III AIF', '(D) Infrastructure Debt Funds'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) ₹50 Lakhs. In 2020, SEBI doubled the minimum PMS investment threshold from ₹25 Lakhs to ₹50 Lakhs.',
        'Q2 Correct Answer: (C) ₹1 Crore. SEBI mandates a minimum ticket of ₹1 Crore for investors in Category I, II, and III AIFs.',
        'Q3 Correct Answer: (C) Category III AIF. Category III funds are authorized to deploy complex directional/arbitrage strategies and leverage.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What is the fundamental difference between Discretionary PMS and Non-Discretionary PMS?',
        answer: 'In Discretionary PMS, the manager makes security selection and trade execution decisions independently. In Non-Discretionary PMS, the manager advises on securities, but cannot execute any transaction without the client\'s explicit prior consent.',
      },
      {
        prompt: 'Why are Category I and Category II AIFs granted tax pass-through status in India?',
        answer: 'Under Section 115UB of the Income Tax Act, Category I and II AIFs enjoy tax pass-through, meaning income is taxed in the hands of the individual investor as if earned directly, rather than taxed at the fund trust level.',
      },
    ],
  },

  // CHAPTER 18
  {
    index: 18,
    filename: '18_CHAPTER_18_RERA_2016_ESCROW_REAL_ESTATE.md',
    fullTitle: 'REAL ESTATE REGULATION ACT (RERA 2016) & ESCROW ARCHITECTURE',
    shortHeader: 'CHAPTER 18 : RERA 2016 & REAL ESTATE',
    leadParagraph: 'Real estate constitutes the primary physical collateral backing bank retail mortgage books. The Real Estate (Regulation and Development) Act 2016 (RERA) transformed property development in India by introducing mandatory project registrations, standardizing carpet area sales, establishing strict 5-year defect liability periods, and requiring 70% of buyer realizations to be deposited in dedicated bank escrow accounts.',
    content: `
## 1. Master Statutory Mandates under RERA 2016

| RERA Statutory Mandate | Precise Legal Requirement & Threshold | Impact on Bank Housing Finance & Borrowers |
| :--- | :--- | :--- |
| **Mandatory Project Registration** | All commercial and residential real estate projects where land area **$\\ge 500\\text{ sq meters}$** or apartments **$\\ge 8$ units** must register with State RERA prior to marketing | Commercial banks are legally prohibited from financing unregistered projects or extending project loans without a valid RERA ID. |
| **Dedicated 70% Escrow Account** | Promoter must deposit **70% of all funds realized from allottees** into a separate dedicated scheduled bank escrow account | Funds can only be withdrawn for construction and land costs based on percentage completion certified by an engineer, architect, and chartered accountant. |
| **Carpet Area Mandate** | Units must be marketed and sold strictly on **Carpet Area** (usable floor area inside apartment walls, excluding common areas) | Eliminates inflated "super built-up" area claims; ensures transparent valuation. |
| **Defect Liability Period** | Promoter must rectify any structural defects or poor workmanship within **5 years** of handover without cost to the buyer | Protects property value and strengthens physical collateral quality for bank mortgages. |
| **Equal Interest for Delay** | Promoter and buyer pay identical compensatory interest rate (SBI MCLR + 2%) for project handover or payment delays | Protects homebuyers from unfair builder penalties. |

## 2. Operational Rules for Bank RERA Escrow Accounts

- **Withdrawal Certification:** Developers cannot freely withdraw funds from the 70% escrow account. Every withdrawal request submitted to the scheduled bank must be supported by three simultaneous certificates:
  1. *Engineer Certificate:* Certifying percentage of physical construction completed.
  2. *Architect Certificate:* Certifying construction milestones reached according to approved plans.
  3. *Chartered Accountant (CA) Certificate:* Certifying that the withdrawal amount matches proportional incurred construction and land expenses.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. RERA mandates that **70% of funds realized from allottees** must be deposited in the dedicated project bank account.
> 2. Mandatory RERA registration applies to projects exceeding **500 square meters** or containing **more than 8 apartments**.
> 3. Units must be sold strictly on **Carpet Area**, NOT super-built-up area.
> 4. Structural defect liability is enforced for **5 years** from the date of possession.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under Section 4(2)(l)(D) of the Real Estate (Regulation and Development) Act 2016 (RERA), what percentage of funds realized from allottees must be deposited in a separate dedicated bank account?',
          options: ['(A) 50%', '(B) 60%', '(C) 70%', '(D) 80%'],
        },
        {
          q: 'What are the statutory project size thresholds above which real estate projects must mandatorily register with RERA prior to advertising or sale?',
          options: [
            '(A) Land area > 1,000 sq meters or > 12 apartments',
            '(B) Land area exceeding 500 sq meters or containing more than 8 apartments',
            '(C) Land area > 250 sq meters or > 4 apartments',
            '(D) Total project cost exceeding ₹5 Crores',
          ],
        },
        {
          q: 'Under RERA 2016, for how many years from the date of handing over possession is the developer legally liable to rectify structural defects without cost to the buyer?',
          options: ['(A) 2 Years', '(B) 3 Years', '(C) 5 Years', '(D) 10 Years'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) 70%. RERA mandates a 70% deposit requirement in a scheduled bank escrow account to prevent fund diversion to other projects.',
        'Q2 Correct Answer: (B) Land area exceeding 500 sq meters or containing more than 8 apartments. These thresholds define mandatory RERA coverage.',
        'Q3 Correct Answer: (C) 5 Years. Section 14(3) of RERA enforces a 5-year structural defect warranty on developers.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Define "Carpet Area" under RERA 2016.',
        answer: 'Carpet Area is the net usable floor area of an apartment, excluding the area covered by external walls, areas under service shafts, exclusive balcony/verandah area, and open terrace area, but including area covered by internal partition walls.',
      },
      {
        prompt: 'Why are commercial banks required to verify RERA project registration before sanctioning individual housing loans?',
        answer: 'Unregistered projects are illegal under RERA, posing high risks of municipal demolition, construction stay orders, or title defects that could invalidate bank mortgage charges.',
      },
    ],
  },

  // CHAPTER 19
  {
    index: 19,
    filename: '19_CHAPTER_19_DIGITAL_BANKING_FINTECH_RISKS.md',
    fullTitle: 'DIGITAL BANKING TRENDS: FINTECH PARTNERSHIPS, NEOBANKS & CYBER RISKS',
    shortHeader: 'CHAPTER 19 : DIGITAL BANKING & FINTECH',
    leadParagraph: 'Digital banking has evolved beyond traditional online banking portals into integrated FinTech ecosystems, Open Banking APIs, Neobanking models, and Account Aggregator rails. While these partnerships accelerate retail customer acquisition and digital lending velocity, they introduce operational vulnerabilities that require compliance with RBI Digital Lending Guidelines and IT Governance directions.',
    content: `
## 1. Digital Lending Architecture & RBI Guidelines (2022)

- **Lending Service Providers (LSPs) & Digital Lending Apps (DLAs):** Third-party technology platforms facilitating sourcing, underwriting, and loan servicing.
- **Direct Disbursement Mandate:** All loan disbursals and repayments must execute **strictly between the bank/NBFC bank account and the borrower bank account**, with zero pass-through via third-party LSP/DLA pool accounts.
- **Key Fact Statement (KFS):** Lenders must furnish a standardized KFS to borrowers detailing the **Annual Percentage Rate (APR)**, recovery mechanisms, cooling-off period, and grievance redressal contacts before contract execution.
- **Look-Up / Cooling-Off Period:** Borrowers must be given a cooling-off window (typically 3 days for loans $\ge$ 7 days tenor) to exit the loan without penalty by repaying principal and proportionate APR.

## 2. Neobanks vs Traditional Scheduled Commercial Banks

| Feature Dimension | Traditional Commercial Banks | Neobanks (Digital-Only Banking Entities) |
| :--- | :--- | :--- |
| **Banking License** | Direct Full Banking License issued by RBI under Section 22 BR Act 1949 | **Do NOT hold independent banking licenses in India**; operate as digital front-ends partnered with licensed sponsor banks |
| **Physical Infrastructure** | Expansive physical branch and ATM networks | Completely digital; zero physical branches |
| **Deposit Mobilization** | Directly mobilizes CASA deposits insured under DICGC | Deposits reside on the balance sheet of the partnered licensed bank |

## 3. Account Aggregator (AA) Ecosystem in Retail Credit

- **Function of Non-Banking Financial Company - Account Aggregator (NBFC-AA):** Consolidates customer financial data from Financial Information Providers (FIPs: banks, mutual funds, insurance) and shares it with Financial Information Users (FIUs: lending banks) with **explicit, revocable user consent**.
- **Data Protection:** AAs cannot store, monetize, or decrypt user financial data; they operate as pure, encrypted data transit conduits.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In India, **Neobanks do NOT hold direct banking licenses** from the RBI; they operate as technology front-ends partnered with licensed scheduled commercial banks.
> 2. Under RBI Digital Lending Directions, loan funds **cannot pass through third-party LSP pool accounts**; transfers must be direct between bank and borrower accounts.
> 3. Account Aggregators (AAs) are data-blind intermediaries that **cannot store customer financial records**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under current Reserve Bank of India regulations, what legal status do "Neobanks" hold in the Indian financial system?',
          options: [
            '(A) Full commercial scheduled banks licensed under Section 22 BR Act',
            '(B) Differentiated digital banks holding specialized digital banking licenses',
            '(C) Technology entities partnering with licensed banks without independent RBI banking licenses',
            '(D) Category I Non-Banking Financial Companies',
          ],
        },
        {
          q: 'Under the RBI Digital Lending Guidelines (2022), loan disbursements and borrower repayments must flow:',
          options: [
            '(A) Through the pool account of the Lending Service Provider (LSP)',
            '(B) Directly between the bank/NBFC account and the borrower account without pass-through',
            '(C) Through an authorized payment gateway wallet',
            '(D) Through a designated credit bureau escrow',
          ],
        },
        {
          q: 'In the RBI Account Aggregator (AA) framework, which entity acts as a Financial Information Provider (FIP)?',
          options: [
            '(A) Credit rating agencies only',
            '(B) Depositor holding bank, mutual fund houses, and insurance repositories',
            '(C) Direct Recovery Agents',
            '(D) Debt Recovery Tribunals',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) Technology entities partnering with licensed banks without independent RBI banking licenses. The RBI has not issued stand-alone virtual banking licenses; neobanks rely on sponsor bank charters.',
        'Q2 Correct Answer: (B) Directly between the bank/NBFC account and the borrower account without pass-through. The RBI banned third-party pool accounts in digital lending to eliminate diversion and money laundering risks.',
        'Q3 Correct Answer: (B) Depositor holding bank, mutual fund houses, and insurance repositories. FIPs hold underlying financial data and transmit it securely via the AA rails upon customer consent.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What is the purpose of the Key Fact Statement (KFS) in retail digital lending?',
        answer: 'The KFS provides transparent disclosure of all credit terms—including the Annual Percentage Rate (APR), processing fees, interest computation methods, recovery contacts, and cooling-off periods—preventing hidden charges in digital loans.',
      },
      {
        prompt: 'Why are Account Aggregators termed "Data-Blind" intermediaries?',
        answer: 'Because data shared across the Account Aggregator network is end-to-end encrypted; the AA acts as a digital conduit without the cryptographic keys to decrypt, view, or store the underlying financial transactions.',
      },
    ],
  },

  // CHAPTER 20
  {
    index: 20,
    filename: '20_CHAPTER_20_THE_GRAND_SYNTHESIS_RBWM_REVISION_VAULT.md',
    fullTitle: 'THE GRAND SYNTHESIS: IIBF PAPER 4 (RBWM) MASTER REVISION VAULT',
    shortHeader: 'CHAPTER 20 : RBWM MASTER REVISION VAULT',
    leadParagraph: 'This Capstone Master Revision Vault synthesizes the complete 26-unit syllabus of IIBF Paper 4 (Retail Banking & Wealth Management). It integrates retail product guidelines, RBI housing finance LTV limits, recovery tribunal laws, the 7 Ps services marketing mix, wealth management asset allocations, and RERA real estate regulations into high-yield comparative matrices, 50 high-probability examiner traps, and rapid diagnostic recall triggers.',
    content: `
## 1. Master Formula & Regulatory Benchmark Matrix

| Regulatory / Technical Parameter | Statutory Guideline / Benchmark Formula | Governing Authority / Enactment |
| :--- | :--- | :--- |
| **Housing Loan LTV ($\le ₹30\text{L}$)** | **Maximum 90% LTV** *(Minimum 10% Margin)* | RBI Prudential Guidelines |
| **Housing Loan LTV ($> ₹30\text{L}$ to $₹75\text{L}$)** | **Maximum 80% LTV** *(Minimum 20% Margin)* | RBI Prudential Guidelines |
| **Housing Loan LTV ($> ₹75\text{L}$)** | **Maximum 75% LTV** *(Minimum 25% Margin)* | RBI Prudential Guidelines |
| **Education Loan Collateral Free Cap** | **Up to ₹4.00 Lakhs** *(0% Margin, No Collateral)* | IBA Model Education Loan Scheme |
| **DICGC Deposit Insurance Cap** | **₹5,00,000** *(Principal + Interest per depositor)* | DICGC Act 1961 / RBI |
| **Credit Score Standard Range** | **300 to 900 Points** *(Prime threshold: $\ge 750$)* | CICRA 2005 (CIBIL, Experian) |
| **Debt Recovery Tribunal (DRT) Limit** | Debts **$\ge$ ₹20 Lakhs** | RDBBFI Act 1993 (Ministry of Finance) |
| **Lok Adalat Monetary Cap** | Claims **up to ₹20 Lakhs** | Legal Services Authorities Act 1987 |
| **SARFAESI Notice Period** | **60 Days Demand Notice** under Section 13(2) | SARFAESI Act 2002 |
| **SARFAESI Exemption** | **Agricultural Land** completely exempt (Section 31) | SARFAESI Act 2002 |
| **DRA Contact Window** | **07:00 AM to 07:00 PM** *(Strictly enforced)* | RBI Fair Practices Code / IBA Code |
| **Securitization Min Retention (MRR)** | **10% of Pool Value** for loans > 24 months | RBI Master Directions |
| **Portfolio Management Services (PMS)** | **Minimum ₹50 Lakhs** investment ticket | SEBI (Portfolio Managers) Regulations 2020 |
| **Alternative Investment Funds (AIF)** | **Minimum ₹1 Crore** investment ticket | SEBI (AIF) Regulations 2012 |
| **RERA Dedicated Escrow Account** | **70% of Buyer Realizations** deposited in bank | Section 4(2)(l)(D), RERA 2016 |
| **RERA Registration Thresholds** | Land area **$\ge 500\text{ sq m}$** or units **$\ge 8$ apartments** | Section 3, RERA 2016 |
| **RERA Structural Warranty** | **5 Years** from date of handing over possession | Section 14(3), RERA 2016 |
| **Contactless Card Tap-and-Pay Cap** | **Up to ₹5,000** without PIN | RBI Card Directions |
| **Return on Assets (ROA) Benchmark** | Sound performance: **$\ge 1.0\%$** | Commercial Banking Metric |
| **DuPont Return on Equity** | $\\text{ROE} = \\text{ROA} \\times \\left( \\frac{\\text{Total Assets}}{\\text{Shareholder Equity}} \\right)$ | DuPont Identity |

## 2. 50 Essential Examiner Traps for IIBF Paper 4 (RBWM)

1. Retail banking possesses **low credit concentration risk** because loans are distributed across millions of borrowers.
2. The Strategic Business Unit (SBU) operates as an autonomous, self-contained profit-and-loss center.
3. Retail CASA deposits provide **low-cost, sticky funds** that stabilize commercial bank balance sheets.
4. According to the DuPont formula, $\\text{ROE} = \\text{ROA} \\times \\text{Equity Multiplier}$.
5. Loan loss provisions are **excluded** from operating expenses when calculating the Cost-to-Income ratio.
6. A sound Return on Assets (ROA) benchmark in commercial banking is **$\\ge 1.0\%$**.
7. In Abraham Maslow Hierarchy of Needs, housing loans fulfill the **Safety and Security Needs** tier.
8. Basic CASA transactional accounts satisfy the **Physiological Needs** tier.
9. Exclusive metal credit cards and private banking lounges satisfy **Esteem / Status Needs**.
10. Interest on Savings Bank accounts is computed on the **Daily Product Basis**.
11. BSBDA accounts permit a **minimum of 4 free withdrawals per month**.
12. The DICGC deposit insurance limit is **₹5,00,000 per depositor per bank**, covering principal and interest combined.
13. Foreign government and inter-bank deposits are **completely excluded** from DICGC insurance.
14. For housing loans **up to ₹30 Lakhs**, the maximum permissible LTV is **90%** (minimum 10% margin).
15. For housing loans **above ₹75 Lakhs**, the maximum permissible LTV is **75%** (minimum 25% margin).
16. For housing loans above ₹10 Lakhs, **stamp duty and registration fees cannot be included** in property cost for LTV.
17. Since October 1, 2019, all floating-rate personal and retail loans must link to an **External Benchmark** (e.g., Repo Rate).
18. For education loans **up to ₹4 Lakhs**, demanding collateral security or third-party guarantee is a **direct regulatory violation**.
19. Under the IBA education loan scheme, the repayment moratorium is **Course Duration + 1 Year** (or 6 months after employment).
20. Vehicle loans are secured via **Hypothecation**, with charge endorsement on the RC book under Section 51 Motor Vehicles Act.
21. A **Charge Card requires 100% payment** of the statement balance by due date; revolving credit is prohibited.
22. Minimum Amount Due (MAD) on credit cards is typically **5%** of the outstanding bill balance.
23. Paying only MAD eliminates late fees but **forfeits the interest-free grace period** on all new card purchases.
24. Contactless NFC card transactions without PIN are capped at **₹5,000 per transaction**.
25. RTGS has a statutory **minimum transaction threshold of ₹2,00,000 (₹2 Lakhs)**.
26. Both NEFT and RTGS operate **24x7x365** across India.
27. Demand Drafts and Bankers Cheques are legally valid for **3 Months** from date of issue.
28. Credit scores issued by CIBIL and authorized CICs range from **300 to 900 Points**.
29. **Past Repayment History (35%)** carries the highest weightage in determining credit scores.
30. Maintaining a Credit Utilization Ratio (CUR) below **30%** is optimal for credit score preservation.
31. Every citizen is entitled to **one Free Full Credit Report (FFCR)** annually from each CIC.
32. Consensual settlements before Lok Adalats have a monetary limit of **₹20 Lakhs**.
33. Lok Adalat awards are final, binding, and **cannot be appealed in any court**.
34. The minimum debt threshold for filing a recovery suit before the Debt Recovery Tribunal (DRT) is **₹20 Lakhs**.
35. An appeal before the Debt Recovery Appellate Tribunal (DRAT) requires a mandatory pre-deposit of **50% of the debt**.
36. SARFAESI demand notices under Section 13(2) give borrowers **60 Days** to discharge liabilities in full.
37. Under Section 31 of SARFAESI, **agricultural land is strictly exempt** from enforcement without court intervention.
38. SARFAESI cannot be invoked if the unpaid balance is **less than 20%** of principal and interest, or if debt is **under ₹1 Lakh**.
39. Direct Recovery Agents (DRAs) are permitted to contact borrowers **strictly between 07:00 AM and 07:00 PM**.
40. Recovery agents must hold mandatory **IIBF Direct Recovery Agent (DRA) Certification**.
41. Banks are **vicariously liable** for the unlawful or coercive acts of their appointed recovery agents (*Prakash Kaur case*).
42. Minimum Retention Requirement (MRR) for retail loan securitization (> 24 months tenor) is **10% of pool book value**.
43. The 3 extended elements of the Services Marketing Mix are **People, Process, and Physical Evidence**.
44. Selling complementary products (insurance/SIP) to a loan customer is **Cross-Selling**; upgrading to wealth tier is **Up-Selling**.
45. Retaining an existing banking customer costs approximately **one-fifth (1/5th)** of acquiring a new customer.
46. Minimum investment commitment for Portfolio Management Services (PMS) is **₹50 Lakhs** under SEBI regulations.
47. Minimum investment commitment for Alternative Investment Funds (AIFs) is **₹1 Crore**.
48. Under RERA 2016, developers must deposit **70% of realized buyer funds** into a dedicated scheduled bank escrow account.
49. Mandatory RERA registration applies to projects exceeding **500 square meters** or **more than 8 apartments**.
50. Units under RERA must be sold strictly on **Carpet Area**, with developers bound by a **5-Year Structural Defect Warranty**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under current regulatory guidelines, what are the respective minimum investment ticket sizes required for Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs)?',
          options: [
            '(A) PMS: ₹25 Lakhs; AIF: ₹50 Lakhs',
            '(B) PMS: ₹50 Lakhs; AIF: ₹1 Crore',
            '(C) PMS: ₹1 Crore; AIF: ₹2 Crores',
            '(D) PMS: ₹50 Lakhs; AIF: ₹50 Lakhs',
          ],
        },
        {
          q: 'Under Section 31 of the SARFAESI Act 2002, which category of collateral security is completely excluded from non-judicial bank enforcement?',
          options: [
            '(A) Residential villas',
            '(B) Commercial office buildings',
            '(C) Agricultural land parcels',
            '(D) Pledged company shares',
          ],
        },
        {
          q: 'Under the Real Estate (Regulation and Development) Act 2016 (RERA), what percentage of funds collected from homebuyers must a developer deposit in a separate bank escrow account?',
          options: ['(A) 50%', '(B) 60%', '(C) 70%', '(D) 80%'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) PMS: ₹50 Lakhs; AIF: ₹1 Crore. SEBI mandates ₹50L minimum for PMS and ₹1 Cr for AIFs.',
        'Q2 Correct Answer: (C) Agricultural land parcels. Section 31(i) explicitly bars SARFAESI enforcement against agricultural properties.',
        'Q3 Correct Answer: (C) 70%. Section 4(2)(l)(D) mandates depositing 70% of collections into a dedicated scheduled bank account.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why are Neobanks in India required to partner with licensed scheduled commercial banks rather than operating standalone?',
        answer: 'Because the RBI has not established a standalone virtual banking regulatory regime. To accept deposits insured under DICGC or route payments through national clearing networks, digital platforms must operate on the regulatory charter of a licensed partner bank.',
      },
      {
        prompt: 'How does the SARFAESI Act empower secured lenders without requiring court intervention?',
        answer: 'After issuing a 60-day demand notice under Section 13(2) on an NPA account, if the borrower fails to pay, Section 13(4) empowers the bank to take physical possession of the secured asset, take over management, and sell or lease the property at public auction.',
      },
    ],
  },
];

async function main() {
  console.log(`Generating chapters 14 to 20 for IIBF Paper 4 (RBWM)...`);
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
