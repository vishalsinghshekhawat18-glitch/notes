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
  // CHAPTER 7
  {
    index: 7,
    filename: '07_CHAPTER_07_TIME_VALUE_OF_MONEY_COMPOUNDING.md',
    fullTitle: 'TIME VALUE OF MONEY (TVM) & COMPOUNDING ARITHMETIC',
    shortHeader: 'CHAPTER 07 : TIME VALUE OF MONEY',
    leadParagraph: 'The Time Value of Money (TVM) is the fundamental economic premise that a rupee received today possesses greater value than a rupee received in the future due to its earning capacity, inflation erosion, and default risk. In banking calculations, TVM governs deposit interest compounding, credit appraisal discounting, and the determination of the Effective Annual Rate (EAR).',
    content: `
## 1. Mathematical Formulas for Time Value of Money

### 1. Future Value (Compounding)
$$\\text{FV} = \\text{PV} \\times (1 + r)^n = \\text{PV} \\times \\left( 1 + \\frac{r}{m} \\right)^{m \\times n}$$
- Where $\\text{PV}$ = Present Value, $r$ = Annual interest rate, $n$ = Number of years, and $m$ = Number of compounding intervals per year (e.g., $m=4$ for quarterly compounding).

### 2. Present Value (Discounting)
$$\\text{PV} = \\frac{\\text{FV}}{(1 + r)^n} = \\text{FV} \\times (1 + r)^{-n}$$

### 3. Continuous Compounding
$$\\text{FV} = \\text{PV} \\times e^{r \\times n}$$
- Where $e \\approx 2.71828$ is Euler's mathematical constant.

### 4. Effective Annual Rate (EAR)
$$\\text{EAR} = \\left( 1 + \\frac{r_{\\text{nominal}}}{m} \\right)^m - 1$$
- Reflects the true annualized yield realized by depositors when compounding occurs multiple times within a single year.

## 2. Rule of 72 and Rule of 114

| Shortcut Rule | Mathematical Objective | Computational Formula | Application Example |
| :--- | :--- | :--- | :--- |
| **Rule of 72** | Doubling Period of Investment | $$t_{\\text{double}} \\approx \\frac{72}{r}$$ | At 8% interest p.a., funds double in approx $\\frac{72}{8} = 9$ years. |
| **Rule of 114** | Tripling Period of Investment | $$t_{\\text{triple}} \\approx \\frac{114}{r}$$ | At 6% interest p.a., funds triple in approx $\\frac{114}{6} = 19$ years. |
| **Rule of 144** | Quadrupling Period of Investment | $$t_{\\text{quadruple}} \\approx \\frac{144}{r}$$ | At 12% interest p.a., funds quadruple in approx $\\frac{144}{12} = 12$ years. |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In Indian commercial banking, **interest on term deposits is compounded quarterly** ($m=4$), while savings bank interest is calculated on a daily product basis and credited quarterly.
> 2. The Effective Annual Rate (EAR) is **always strictly greater** than the nominal rate whenever compounding occurs more frequently than once a year.
> 3. An increase in the discount rate decreases the Present Value of a given future cash flow.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A customer deposits ₹1,00,000 in a fixed deposit for 1 year at a nominal interest rate of 12% per annum compounded quarterly. What is the Effective Annual Rate (EAR)?',
          options: ['(A) 12.00%', '(B) 12.55%', '(C) 12.68%', '(D) 13.10%'],
        },
        {
          q: 'Using the Rule of 72, approximately how many years will it take for an investment to double in value at an annual interest rate of 9%?',
          options: ['(A) 7 Years', '(B) 8 Years', '(C) 9 Years', '(D) 10 Years'],
        },
        {
          q: 'If the compounding frequency is increased from quarterly to monthly, what happens to the Future Value (FV) of an initial lump-sum deposit?',
          options: ['(A) Decreases', '(B) Increases', '(C) Remains unchanged', '(D) Becomes zero'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 12.55%. EAR = (1 + r/m)^m − 1 = (1 + 0.12/4)^4 − 1 = (1.03)^4 − 1 = 1.125508 − 1 = 12.55%.',
        'Q2 Correct Answer: (B) 8 Years. Under the Rule of 72: Years = 72 / r = 72 / 9 = 8 years.',
        'Q3 Correct Answer: (B) Increases. More frequent compounding generates interest on accumulated interest earlier, systematically increasing the terminal Future Value.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does an increase in the compounding frequency widen the gap between the Nominal Rate and the Effective Annual Rate?',
        answer: 'Because interest earned in earlier intervals is added to the principal balance sooner, compounding over more periods and elevating the overall annual return above the stated nominal rate.',
      },
      {
        prompt: 'State the formula for calculating the Present Value under continuous discounting.',
        answer: 'PV = FV × e^(−rt), where e is the base of natural logarithms (approx 2.71828), r is the annual discount rate, and t is the time horizon in years.',
      },
    ],
  },

  // CHAPTER 8
  {
    index: 8,
    filename: '08_CHAPTER_08_ANNUITIES_EMI_SINKING_FUNDS.md',
    fullTitle: 'ANNUITIES, EQUATED MONTHLY INSTALLMENTS (EMI) & SINKING FUNDS',
    shortHeader: 'CHAPTER 08 : ANNUITIES & EMI MATHEMATICS',
    leadParagraph: 'An annuity is a finite stream of equal cash flows occurring at regular intervals. In retail and corporate finance, annuity formulas govern term loan amortizations, equated monthly installments (EMIs), bond coupon streams, and corporate sinking funds established for debenture redemption.',
    content: `
## 1. Ordinary Annuity vs Annuity Due & Perpetuities

### 1. Ordinary Annuity (Payments at the END of each period)
$$\\text{PV}_{\\text{Ordinary Annuity}} = C \\times \\left[ \\frac{1 - (1 + r)^{-n}}{r} \\right]$$
$$\\text{FV}_{\\text{Ordinary Annuity}} = C \\times \\left[ \\frac{(1 + r)^n - 1}{r} \\right]$$

### 2. Annuity Due (Payments at the BEGINNING of each period)
$$\\text{PV}_{\\text{Annuity Due}} = \\text{PV}_{\\text{Ordinary Annuity}} \\times (1 + r)$$
$$\\text{FV}_{\\text{Annuity Due}} = \\text{FV}_{\\text{Ordinary Annuity}} \\times (1 + r)$$
- *Key Axiom:* The value of an Annuity Due is **always greater by a factor of $(1 + r)$** because every payment earns interest for one additional compounding period.

### 3. Perpetuity & Growing Perpetuity
$$\\text{PV}_{\\text{Perpetuity}} = \\frac{C}{r}$$
$$\\text{PV}_{\\text{Growing Perpetuity}} = \\frac{C}{r - g} \\quad (\\text{where } r > g)$$

## 2. Equated Monthly Installment (EMI) Formula

$$\\text{EMI} = \\frac{P \\times r \\times (1 + r)^n}{(1 + r)^n - 1}$$
- Where $P$ = Loan Principal sanctioned, $r$ = Monthly interest rate (Annual rate $/ 12$), and $n$ = Loan tenure in total months.
- **Loan Amortization Dynamics:**
  - In initial installments, the **Interest component is largest** and the Principal repayment component is smallest.
  - As outstanding principal declines over the loan tenure, the **Interest component steadily decreases** while the Principal repayment component steadily increases.

## 3. Sinking Fund Factor

$$\\text{Annual Deposit (Sinking Fund)} = \\text{Target Future Sum} \\times \\left[ \\frac{r}{(1 + r)^n - 1} \\right]$$
- Used by companies to systematically accumulate funds to redeem debentures or replace depreciated plant machinery at a targeted future date.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **Annuity Due Factor:** $\\text{Value of Annuity Due} = \\text{Value of Ordinary Annuity} \\times (1 + r)$.
> 2. In EMI calculation, $r$ is the **monthly rate** ($r_{\\text{annual}} / 12$), NOT the annual percentage rate, and $n$ is the **number of months**, not years.
> 3. For a perpetuity, the present value is simply the periodic payment divided by the interest rate ($C/r$).
`,
    practiceQuestions: {
      questions: [
        {
          q: 'How does the Present Value of an Annuity Due compare to the Present Value of an Ordinary Annuity for the same cash flow, rate, and period?',
          options: [
            '(A) Equal',
            '(B) Higher by a factor of (1 + r)',
            '(C) Lower by a factor of (1 + r)',
            '(D) Lower by half the periodic cash flow',
          ],
        },
        {
          q: 'An investor wishes to receive a perpetual annual payment of ₹50,000 forever. If the prevailing market discount rate is 10% per annum, what is the Present Value of this perpetuity?',
          options: ['(A) ₹5,00,000', '(B) ₹50,000', '(C) ₹50,00,000', '(D) ₹5,50,000'],
        },
        {
          q: 'In the repayment schedule of a standard housing loan with Equated Monthly Installments (EMI), over the passage of time:',
          options: [
            '(A) Both interest and principal components remain constant',
            '(B) The interest component decreases while the principal component increases',
            '(C) The interest component increases while the principal component decreases',
            '(D) The EMI amount itself declines every month',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) Higher by a factor of (1 + r). Because payments occur at the beginning of each interval, each cash flow is discounted by one fewer period, magnifying the total present value by (1 + r).',
        'Q2 Correct Answer: (A) ₹5,00,000. PV of Perpetuity = C / r = 50,000 / 0.10 = ₹5,00,000.',
        'Q3 Correct Answer: (B) The interest component decreases while the principal component increases. Because interest is charged on the outstanding loan balance, as the principal amortizes, the monthly interest portion drops, allowing a larger fraction of the fixed EMI to retire principal.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What happens to the Present Value of a Growing Perpetuity if the growth rate (g) approaches the discount rate (r)?',
        answer: 'The denominator (r − g) approaches zero, causing the Present Value to mathematically approach infinity. Hence, the formula PV = C / (r − g) is strictly valid only when r > g.',
      },
      {
        prompt: 'State the difference between an Ordinary Annuity and an Annuity Due in practical financial products.',
        answer: 'Ordinary Annuity payments occur at period ends (e.g., bond coupon payments, loan EMIs). Annuity Due payments occur at period beginnings (e.g., apartment lease rentals, life insurance premiums).',
      },
    ],
  },

  // CHAPTER 9
  {
    index: 9,
    filename: '09_CHAPTER_09_BOND_VALUATION_YTM_DURATION.md',
    fullTitle: 'BOND VALUATION, YIELD TO MATURITY (YTM) & MODIFIED DURATION',
    shortHeader: 'CHAPTER 09 : BOND VALUATION & YTM',
    leadParagraph: 'Fixed-income securities form the core statutory liquidity portfolio of commercial banks under Section 24 of the Banking Regulation Act 1949. Understanding the inverse relationship between market interest rates and bond prices, approximating Yield to Maturity (YTM), and managing interest rate sensitivity via Macaulay and Modified Duration are vital for bank treasury asset-liability management (ALM).',
    content: `
## 1. Core Bond Pricing Principles

### 1. Intrinsic Value of a Bond
$$V_0 = \\sum_{t=1}^n \\frac{C}{(1 + k_d)^t} + \\frac{M}{(1 + k_d)^n} = C \\times \\left[ \\frac{1 - (1 + k_d)^{-n}}{k_d} \\right] + \\frac{M}{(1 + k_d)^n}$$
- Where $C$ = Annual coupon payment, $M$ = Face / Maturity value, $k_d$ = Required rate of return (market yield), and $n$ = Years to maturity.

### 2. Relationship Between Coupon Rate, Yield, and Market Price
| Condition | Market Pricing State | Price vs Face Value |
| :--- | :--- | :--- |
| **Market Yield = Coupon Rate** | **Par Bond** | $\\text{Market Price} = \\text{Face Value}$ |
| **Market Yield > Coupon Rate** | **Discount Bond** | $\\text{Market Price} < \\text{Face Value}$ |
| **Market Yield < Coupon Rate** | **Premium Bond** | $\\text{Market Price} > \\text{Face Value}$ |

- **Inverse Price-Yield Rule:** When market interest yields **RISE**, existing bond market prices **FALL**; when market yields **FALL**, bond prices **RISE**.

## 2. Yield to Maturity (YTM) Approximation Formula

$$\\text{YTM} \\approx \\frac{C + \\frac{M - P}{n}}{\\frac{M + P}{2}} \\times 100$$
- Where $C$ = Annual coupon payment, $M$ = Maturity face value, $P$ = Current market purchase price, and $n$ = Years remaining until redemption.

## 3. Macaulay Duration & Modified Duration

### 1. Macaulay Duration ($D$)
Measures the weighted-average time (in years) required for a bondholder to recover the initial purchase price from coupon and principal cash flows:
$$D = \\frac{\\sum_{t=1}^n \\frac{t \\times C_t}{(1 + y)^t}}{\\text{Bond Market Price}}$$

### 2. Modified Duration ($MD$)
Directly quantifies the percentage change in bond price for a 100 basis point (1%) shift in yield:
$$MD = \\frac{D}{1 + y}$$
$$\\% \\Delta \\text{ Bond Price} \\approx -MD \\times \\Delta y$$

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. For a **Zero-Coupon Bond**, the Macaulay Duration is **exactly equal to its maturity period** ($D = n$).
> 2. Higher coupon rates result in a **shorter duration** because cash flows are recovered earlier.
> 3. Modified Duration carries a negative sign, reflecting the inverse relationship between yield and price.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A 5-year zero-coupon bond has a face value of ₹1,000. What is its Macaulay Duration?',
          options: ['(A) 2.5 Years', '(B) 4.2 Years', '(C) 5.0 Years', '(D) Zero'],
        },
        {
          q: 'When prevailing market interest rates rise, what happens to the market price of existing fixed-rate bonds?',
          options: ['(A) Increases', '(B) Decreases', '(C) Remains unchanged', '(D) Adjusts to double coupon rate'],
        },
        {
          q: 'A bond has a Macaulay Duration of 4.4 years and a Yield to Maturity of 10%. What is its Modified Duration?',
          options: ['(A) 4.40 Years', '(B) 4.00 Years', '(C) 4.84 Years', '(D) 3.60 Years'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) 5.0 Years. Since a zero-coupon bond has no interim cash flows, 100% of its cash return occurs at maturity; thus, its duration equals its maturity period exactly.',
        'Q2 Correct Answer: (B) Decreases. Fixed coupon cash flows discounted at higher market rates yield lower present values, driving down market prices.',
        'Q3 Correct Answer: (B) 4.00 Years. Modified Duration = Macaulay Duration / (1 + y) = 4.4 / (1 + 0.10) = 4.4 / 1.10 = 4.00 years.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does a bond with a higher coupon rate have a shorter duration than a bond with a lower coupon rate of identical maturity?',
        answer: 'Higher coupon payments deliver more cash flow to the investor earlier in the bond lifecycle, pulling the weighted-average time of cash recovery closer to the present.',
      },
      {
        prompt: 'If a bank holds a bond portfolio with a Modified Duration of 5.0 years, and interest rates increase by 50 basis points (+0.50%), what is the expected portfolio price impact?',
        answer: 'Δ Price ≈ −MD × Δy = −5.0 × (+0.50%) = −2.50%. The bond portfolio value will decline by approximately 2.50%.',
      },
    ],
  },

  // CHAPTER 10
  {
    index: 10,
    filename: '10_CHAPTER_10_BANK_FINAL_ACCOUNTS_BALANCE_SHEET.md',
    fullTitle: 'BANK FINAL ACCOUNTS I: STATUTORY BALANCE SHEET (THIRD SCHEDULE)',
    shortHeader: 'CHAPTER 10 : BANK BALANCE SHEET (FORM A)',
    leadParagraph: 'Under Section 29 of the Banking Regulation Act 1949, commercial banks in India are legally mandated to draft their annual Balance Sheet strictly in accordance with Form A of the Third Schedule. The balance sheet structure comprises 12 statutory schedules: Schedules 1 to 5 for Capital and Liabilities, Schedules 6 to 11 for Assets, and Schedule 12 for Contingent Liabilities.',
    content: `
## 1. Master Architecture of Form A (Balance Sheet Schedules 1 to 12)

| Schedule | Category & Official Title | Statutory Composition & Inclusions |
| :--- | :--- | :--- |
| **Schedule 1** | **Capital** | Authorised Capital, Issued Capital, Subscribed Capital, Paid-Up Capital (separate disclosure for Nationalized vs Private banks). |
| **Schedule 2** | **Reserves & Surplus** | Statutory Reserves (Sec 17), Capital Reserves, Share Premium, Revenue & Other Reserves, Balance in P&L Account. |
| **Schedule 3** | **Deposits** | **I. Demand Deposits** (CASA, from banks and others); **II. Savings Bank Deposits**; **III. Term Deposits**. |
| **Schedule 4** | **Borrowings** | Borrowings in India (RBI, other banks, other institutions); Borrowings outside India. |
| **Schedule 5** | **Other Liabilities & Provisions** | Bills Payable, Inter-office adjustments (net credit), Interest accrued, Others (including Rebate on Bills Discounted). |
| **Schedule 6** | **Cash & Balances with RBI** | Cash in hand (including foreign currency notes), Balances with RBI in Current Account. |
| **Schedule 7** | **Balances with Banks & Call Money** | Balances with banks in India and abroad, Money at call and short notice. |
| **Schedule 8** | **Investments** | Government Securities (SLR), Other approved securities, Shares, Debentures and Bonds, Subsidiaries / JVs. |
| **Schedule 9** | **Advances** | Bills purchased and discounted, Cash credits, Overdrafts, Term loans (classified as Secured, Covered by Bank/Govt Guarantee, and Unsecured). |
| **Schedule 10** | **Fixed Assets** | Premises (at cost less depreciation), Other Fixed Assets (furniture, fixtures, motor vehicles, computers). |
| **Schedule 11** | **Other Assets** | Inter-office adjustments (net debit), Interest accrued on investments, Tax paid in advance, Non-Banking Assets acquired in satisfaction of claims. |
| **Schedule 12** | **Contingent Liabilities** | Claims against bank not acknowledged as debts, Liability on partly paid investments, Outstanding forward exchange contracts, Guarantees, Letters of Credit (LCs). |

## 2. Key Statutory Rules & Off-Balance Sheet Footnotes

- **Non-Banking Assets Acquired in Satisfaction of Claims (Section 9, BR Act):** Physical real estate or goods taken over from defaulted borrowers must be shown under **Schedule 11 (Other Assets)** and legally liquidated within **7 years** (RBI can extend by up to 5 additional years).
- **Bills for Collection:** Cheques, drafts, and bills handed over to the bank for collection are **NOT added to balance sheet totals**; they appear as a separate footnote below Schedule 12.
- **Inter-Office Adjustments:** Net debit balance is reported in **Schedule 11**; net credit balance is reported in **Schedule 5**.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Letters of Credit (LCs) and Bank Guarantees appear in **Schedule 12 (Contingent Liabilities)**, strictly outside balance sheet totals.
> 2. **Bills Payable** falls under **Schedule 5 (Other Liabilities)**, whereas **Bills Discounted** falls under **Schedule 9 (Advances)**.
> 3. Money at Call and Short Notice is part of **Schedule 7**, NOT Schedule 6.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under the Third Schedule of the Banking Regulation Act 1949, under which schedule are Letters of Credit and Bank Guarantees disclosed?',
          options: ['(A) Schedule 5', '(B) Schedule 9', '(C) Schedule 11', '(D) Schedule 12'],
        },
        {
          q: 'Under Section 9 of the Banking Regulation Act 1949, non-banking assets acquired in satisfaction of claims must be disposed of within a maximum period of:',
          options: ['(A) 3 Years', '(B) 5 Years', '(C) 7 Years', '(D) 10 Years'],
        },
        {
          q: 'In the Balance Sheet of a commercial bank, "Money at Call and Short Notice" is disclosed under which schedule?',
          options: [
            '(A) Schedule 6: Cash and Balances with RBI',
            '(B) Schedule 7: Balances with Banks and Money at Call',
            '(C) Schedule 8: Investments',
            '(D) Schedule 9: Advances',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (D) Schedule 12. Non-fund facilities represent off-balance sheet exposures, disclosed exclusively under Schedule 12: Contingent Liabilities.',
        'Q2 Correct Answer: (C) 7 Years. Section 9 mandates that banks cannot hold non-banking assets acquired from debtors for more than 7 years, subject to RBI discretionary extensions up to 5 years.',
        'Q3 Correct Answer: (B) Schedule 7: Balances with Banks and Money at Call and Short Notice.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why are "Bills for Collection" excluded from the balance sheet total in Form A?',
        answer: 'Because the bank acts purely as a collecting agent for its customer without acquiring ownership or accepting financial liability. They are reported in a footnote below Schedule 12 for informational disclosure.',
      },
      {
        prompt: 'Under which schedules of Form A do "Gold Bullion" and "Silver Bullion" held by a commercial bank appear?',
        answer: 'Gold bullion held for trading or investment appears under Schedule 8 (Investments) or Schedule 6 (Cash), while silver bullion is classified under Schedule 11 (Other Assets).',
      },
    ],
  },

  // CHAPTER 11
  {
    index: 11,
    filename: '11_CHAPTER_11_BANK_FINAL_ACCOUNTS_PROFIT_LOSS.md',
    fullTitle: 'BANK FINAL ACCOUNTS II: PROFIT & LOSS STATEMENT & PROVISIONS',
    shortHeader: 'CHAPTER 11 : BANK PROFIT & LOSS (FORM B)',
    leadParagraph: 'Commercial bank income and expenditure statements are governed by Form B of the Third Schedule under Section 29 of the Banking Regulation Act 1949. Form B encompasses Schedules 13 through 16 alongside dedicated non-scheduled lines for provisions and contingencies, enforcing mandatory transfers to Statutory Reserves under Section 17.',
    content: `
## 1. Master Architecture of Form B (Profit & Loss Schedules 13 to 16)

| Section | Schedule / Line | Description & Key Inclusions |
| :--- | :--- | :--- |
| **I. Income** | **Schedule 13: Interest Earned** | • Interest/discount on advances and bills.<br>• Income on investments (coupons, dividends).<br>• Interest on balances with RBI and other inter-bank funds. |
| | **Schedule 14: Other Income** | • Commission, exchange, and brokerage.<br>• Net profit on sale/revaluation of investments.<br>• Net profit on foreign exchange transactions.<br>• Dividends from subsidiaries and joint ventures. |
| **II. Expenditure** | **Schedule 15: Interest Expended** | • Interest paid on deposits (Savings, Term deposits).<br>• Interest on RBI and inter-bank borrowings. |
| | **Schedule 16: Operating Expenses** | • Employee payments, salaries, and allowances.<br>• Rent, taxes, lighting, printing, stationery.<br>• Depreciation on bank property and premises.<br>• Director fees, auditor remuneration, legal charges. |
| | *Provisions & Contingencies* | *(Direct Line Item in P&L, Not a Schedule)*:<br>• Provision for NPAs (Bad & Doubtful debts).<br>• Provision for Standard Assets.<br>• Provision for Income Tax. |
| **III. Profit / Loss** | Net Profit for the Year | Total Income (I) minus Total Expenditure (II). |
| **IV. Appropriations** | **Statutory Appropriations** | • Transfer to Statutory Reserve (Section 17 BR Act).<br>• Transfer to Other Reserves (Capital Reserve, Investment Reserve).<br>• Transfer to Government / Proposed Dividend. |

## 2. Mandatory Section 17 Statutory Reserve Rules

- **Statutory Benchmark (Section 17(1), BR Act 1949):** Every commercial banking company incorporated in India must transfer **at least 20% of its annual net profit** to a Statutory Reserve fund before declaring any dividend.
- **Operational RBI Benchmark:** Under RBI prudential guidelines, commercial banks are mandated to transfer **25% of annual net profit** to the Statutory Reserve.
- **Appropriation Source:** Transfers to the Statutory Reserve are made from post-tax net profit in Section IV (Appropriations) of Form B, not expensed as an operating cost.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **Provisions and Contingencies** is NOT a numbered schedule; it appears as an independent line item within Section II (Expenditure).
> 2. Transfer to Statutory Reserve under Section 17(1) is legally a **minimum of 20%**, while the RBI prudential enforcement is **25%**.
> 3. Profit on sale of investments is part of **Schedule 14 (Other Income)**, while coupon interest earned on investments is part of **Schedule 13 (Interest Earned)**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under Section 17 of the Banking Regulation Act 1949, what is the minimum statutory percentage of net profit that a banking company must transfer to the Statutory Reserve before declaring dividends?',
          options: ['(A) 10%', '(B) 20%', '(C) 25%', '(D) 30%'],
        },
        {
          q: 'In Form B of a bank Profit & Loss Account, under which schedule is Commission, Exchange, and Brokerage income recorded?',
          options: [
            '(A) Schedule 13: Interest Earned',
            '(B) Schedule 14: Other Income',
            '(C) Schedule 15: Interest Expended',
            '(D) Schedule 16: Operating Expenses',
          ],
        },
        {
          q: 'In the Profit & Loss Account of a commercial bank, "Provisions and Contingencies" is disclosed as:',
          options: [
            '(A) Schedule 17',
            '(B) A line item in Section II (Expenditure)',
            '(C) A footnote to Schedule 16',
            '(D) An appropriation in Section IV',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 20%. Section 17(1) of the BR Act establishes a 20% legal statutory minimum (though RBI prudential norms require 25%).',
        'Q2 Correct Answer: (B) Schedule 14: Other Income. Fee-based incomes including commission, brokerage, exchange profits, and locker rents are categorized under Schedule 14.',
        'Q3 Correct Answer: (B) A line item in Section II (Expenditure). Provisions and Contingencies is an unnumbered direct line in the expenditure block.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What is the distinction between Schedule 13 (Interest Earned) and Schedule 14 (Other Income) regarding investments?',
        answer: 'Periodic coupon interest and dividend yields on investments fall under Schedule 13 (Interest Earned). Capital gains or net profits realized from the sale or revaluation of investments fall under Schedule 14 (Other Income).',
      },
      {
        prompt: 'How is provision for bad and doubtful debts treated in Form B Profit & Loss Account?',
        answer: 'It is debited under "Provisions and Contingencies" in Section II (Expenditure) of Form B, and simultaneously deducted from gross advances in Schedule 9 (Advances) of Form A Balance Sheet.',
      },
    ],
  },

  // CHAPTER 12
  {
    index: 12,
    filename: '12_CHAPTER_12_FOREX_ARITHMETIC_EXCHANGE_RATES.md',
    fullTitle: 'FOREIGN EXCHANGE ARITHMETIC & QUOTATION MECHANICS',
    shortHeader: 'CHAPTER 12 : FOREX ARITHMETIC & QUOTATIONS',
    leadParagraph: 'Foreign exchange arithmetic governs currency trading, cross rates, forward margins, and merchant exchange rate determinations. In commercial banking treasury, understanding the shift from indirect to direct quotation, the spread mechanics between Bid and Ask rates, and forward premium or discount adjustments is vital for export-import financing.',
    content: `
## 1. Direct vs Indirect Quotation Systems

| Quotation Mechanism | Theoretical Definition | Domestic / International Benchmark | Trading Golden Rule |
| :--- | :--- | :--- | :--- |
| **Direct Quotation** | Home currency price of 1 unit of foreign currency (e.g., $1\\text{ USD} = 84.50\\text{ INR}$) | **Indian Market Practice** since **August 2, 1993** (RBI mandate) | **Buy Low, Sell High** (Bank buys foreign currency cheaper, sells dearer) |
| **Indirect Quotation** | Foreign currency price of 1 unit of home currency (e.g., $100\\text{ INR} = 1.18\\text{ USD}$) | London and Australian retail markets historically | **Buy High, Sell Low** |

## 2. Two-Way Quotes & Bid-Ask Spread

$$\\text{USD / INR} = 84.20 / 84.30$$
- **Bid Rate (Bank Buying Rate):** ₹84.20 *(Bank buys 1 USD from customer for ₹84.20)*.
- **Ask Rate (Bank Selling Rate):** ₹84.30 *(Bank sells 1 USD to customer for ₹84.30)*.
- **Spread Formula:**
  $$\\text{Bid-Ask Spread} = \\text{Ask Rate} - \\text{Bid Rate} = 84.30 - 84.20 = \\text{₹}0.10$$
  $$\\text{Spread Percentage} = \\frac{\\text{Ask Rate} - \\text{Bid Rate}}{\\text{Ask Rate}} \\times 100$$

## 3. Cross Rates via Chain Rule

When direct market trading does not exist between two currencies, the exchange rate is calculated via an intermediary vehicle currency (typically USD):
$$\\text{EUR / INR} = (\\text{USD / INR}) \\times (\\text{EUR / USD})$$
*Example:* If $\\text{USD / INR} = 84.00$ and $\\text{EUR / USD} = 1.08$, then:
$$\\text{EUR / INR} = 84.00 \\times 1.08 = \\text{₹}90.72$$

## 4. Forward Rates & Forward Margin Rules

$$\\text{Forward Rate} = \\text{Spot Rate} \\pm \\text{Forward Margin (Premium or Discount)}$$

| Forward Margin Pattern | Market State | Operational Rule in Direct Quotation |
| :--- | :--- | :--- |
| **Ascending Order** (e.g., $0.20 / 0.30$) | **Foreign Currency at Premium** | **ADD** margin points to Spot Bid and Spot Ask |
| **Descending Order** (e.g., $0.35 / 0.25$) | **Foreign Currency at Discount** | **SUBTRACT** margin points from Spot Bid and Spot Ask |

## 5. Classification of Merchant Card Rates

1. **TT Buying Rate:** Used for clean inward remittances where foreign currency is already credited to the bank Nostro account.
2. **Bills Buying Rate:** Used for purchasing or discounting foreign export documentary bills (deducts transit interest + margin).
3. **TT Selling Rate:** Used for clean outward remittances (foreign DD, wire transfer).
4. **Bills Selling Rate:** Used for settling foreign import bills.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In direct quotation: **Ascending points = Premium (ADD)**; **Descending points = Discount (SUBTRACT)**.
> 2. The bank **always gives fewer rupees when buying** foreign currency (lower rate) and **takes more rupees when selling** foreign currency (higher rate).
`,
    practiceQuestions: {
      questions: [
        {
          q: 'In the Indian foreign exchange market under direct quotation, if 1-month forward margins are quoted as 0.25 / 0.35 (in ascending order), the foreign currency is said to be at a:',
          options: ['(A) Discount', '(B) Par', '(C) Premium', '(D) Swap loss'],
        },
        {
          q: 'A bank quotes USD/INR spot rate as 83.50 / 83.60. An exporter visits the bank to convert clean USD received via inward wire transfer. Which rate will the bank apply?',
          options: [
            '(A) 83.60 (TT Selling Rate)',
            '(B) 83.50 (TT Buying Rate)',
            '(C) 83.55 (Mid Rate)',
            '(D) 83.40 (Bills Buying Rate)',
          ],
        },
        {
          q: 'Effective which date did the Indian foreign exchange market shift from indirect to direct quotation for all interbank and merchant dealings?',
          options: ['(A) 1 January 1991', '(B) 2 August 1993', '(C) 1 April 1998', '(D) 15 August 2000'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) Premium. In direct quotations, ascending forward margins indicate that the foreign currency is trading at a premium and must be added to the spot rates.',
        'Q2 Correct Answer: (B) 83.50 (TT Buying Rate). The bank is buying foreign currency from the exporter, applying the lower bid rate (TT Buying rate).',
        'Q3 Correct Answer: (B) 2 August 1993. On this date, the RBI mandated the direct quotation system for all foreign exchange transactions.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does a bank quote Bills Buying Rate lower than TT Buying Rate for an exporter?',
        answer: 'Because a documentary export bill involves a transit period before funds reach the overseas account, requiring the bank to deduct transit interest, handling charges, and exchange margin from the TT Buying rate.',
      },
      {
        prompt: 'How is the Bid-Ask spread calculated, and what does it represent for a bank treasury?',
        answer: 'Bid-Ask Spread = Ask Rate − Bid Rate. It represents the gross trading profit margin earned by the bank for providing two-way liquidity in the currency market.',
      },
    ],
  },
];

async function main() {
  console.log(`Generating chapters 7 to 12 for IIBF Paper 3 (AFMB)...`);
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
