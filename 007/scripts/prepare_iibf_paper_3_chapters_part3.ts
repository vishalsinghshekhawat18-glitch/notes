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
  // CHAPTER 13
  {
    index: 13,
    filename: '13_CHAPTER_13_CAPITAL_BUDGETING_DECISIONS.md',
    fullTitle: 'CAPITAL BUDGETING & LONG-TERM INVESTMENT DECISIONS',
    shortHeader: 'CHAPTER 13 : CAPITAL BUDGETING TECHNIQUES',
    leadParagraph: 'Capital budgeting involves evaluating long-term investment outlays whose expected returns accrue across multi-year operating horizons. Because capital commitments are substantial and largely irreversible, banks and corporate treasuries employ non-discounting and discounting appraisal criteria—principally Net Present Value (NPV), Internal Rate of Return (IRR), and the Profitability Index (PI)—to allocate capital efficiently.',
    content: `
## 1. Master Comparison of Capital Budgeting Appraisal Techniques

| Appraisal Technique | Considers TVM? | Mathematical Formula / Acceptance Rule | Core Strengths & Practical Limitations |
| :--- | :--- | :--- | :--- |
| **Payback Period (PBP)** | ❌ No | $$\\text{PBP} = \\frac{\\text{Initial Investment Outlay}}{\\text{Annual Cash Inflow}}$$ | Simple liquidity indicator; completely ignores cash flows generated after the payback cutoff date. |
| **Accounting Rate of Return (ARR)** | ❌ No | $$\\text{ARR} = \\frac{\\text{Average Annual PAT}}{\\text{Average Investment}} \\times 100$$ | Utilizes accounting net income rather than cash flows; ignores time value of money. |
| **Net Present Value (NPV)** | ✅ Yes | $$\\text{NPV} = \\sum_{t=1}^n \\frac{C_t}{(1 + k)^t} - C_0$$. Accept if $$\\text{NPV} > 0$$ | Theoretically superior; maximizes shareholder net worth; assumes cash flows reinvested at Cost of Capital ($k$). |
| **Internal Rate of Return (IRR)** | ✅ Yes | Discount rate $r$ at which $$\\text{NPV} = 0$$. Accept if $$\\text{IRR} > k$$ | Highly intuitive rate of return; assumes unrealistic reinvestment at the project IRR. |
| **Profitability Index (PI)** | ✅ Yes | $$\\text{PI} = \\frac{\\text{Present Value of Inflows}}{\\text{Initial Outlay}}$$. Accept if $$\\text{PI} > 1.0$$ | Essential for capital rationing when capital budget is constrained. |

## 2. Resolving NPV vs IRR Conflicts in Mutually Exclusive Projects

When two mutually exclusive capital projects give contradictory rankings under NPV and IRR (due to scale differences or timing of cash flows):
- **Superiority of NPV:** **NPV must ALWAYS be adopted** because it directly measures the absolute monetary addition to shareholder wealth, whereas IRR is a relative percentage rate that can mislead on project scale.
- **Reinvestment Rate Assumption:**
  - NPV realistically assumes project interim cash inflows are reinvested at the **firm's Cost of Capital ($k$)**.
  - IRR unrealistically assumes interim cash flows are reinvested at the project's own **Internal Rate of Return ($r$)**.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In capital budgeting, appraisal is performed on **Cash Inflows after Tax but BEFORE Depreciation** ($\\text{CFAT} = \\text{PAT} + \\text{Depreciation}$), never on accounting profits.
> 2. Depreciation itself is not a cash outflow, but it creates a valuable **Tax Shield** ($D \\times t$).
> 3. Sunk costs (prior expenditures that cannot be altered) must be **completely excluded** from project evaluation.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'When evaluating two mutually exclusive investment projects with conflicting rankings between Net Present Value (NPV) and Internal Rate of Return (IRR), which criteria should be followed?',
          options: [
            '(A) Follow IRR because it is a percentage rate',
            '(B) Follow Payback Period to ensure liquidity',
            '(C) Follow NPV because it maximizes absolute shareholder wealth',
            '(D) Take an arithmetic average of NPV and IRR',
          ],
        },
        {
          q: 'In capital budgeting cash flow forecasting, Cash Flow After Tax (CFAT) is calculated as:',
          options: [
            '(A) Operating Profit − Taxes',
            '(B) Profit After Tax + Depreciation',
            '(C) Profit Before Tax + Interest',
            '(D) Sales Revenue − Total Fixed Cost',
          ],
        },
        {
          q: 'A project costs ₹10,00,000 and generates a constant annual cash inflow of ₹2,50,000. What is its simple Payback Period?',
          options: ['(A) 2.5 Years', '(B) 4.0 Years', '(C) 5.0 Years', '(D) 3.5 Years'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) Follow NPV because it maximizes absolute shareholder wealth. Corporate financial theory dictates that NPV is universally superior under mutually exclusive scenarios.',
        'Q2 Correct Answer: (B) Profit After Tax + Depreciation. Because depreciation is a non-cash expense deducted to calculate taxes, it must be added back to PAT to determine actual operational cash generation.',
        'Q3 Correct Answer: (B) 4.0 Years. Payback Period = Initial Outlay / Annual Cash Inflow = 10,00,000 / 2,50,000 = 4.0 years.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does the Profitability Index (PI) serve as the optimal decision rule under capital rationing?',
        answer: 'Because when an enterprise has a fixed capital budget ceiling, PI ranks projects by the present value generated per rupee of capital expenditure (Benefit-Cost ratio), allowing maximization of aggregate NPV within the budget limit.',
      },
      {
        prompt: 'What is a "Sunk Cost", and why is it excluded from capital budgeting cash flows?',
        answer: 'A sunk cost is an expenditure already incurred in the past that cannot be recovered or altered regardless of future decisions (e.g., preliminary feasibility study costs). It is excluded because it does not represent an incremental future cash flow.',
      },
    ],
  },

  // CHAPTER 14
  {
    index: 14,
    filename: '14_CHAPTER_14_COST_OF_CAPITAL_WACC.md',
    fullTitle: 'COST OF CAPITAL (WACC) & CAPITAL STRUCTURE DECISIONS',
    shortHeader: 'CHAPTER 14 : COST OF CAPITAL & WACC',
    leadParagraph: 'Cost of capital represents the minimum rate of return a business enterprise must earn on its investments to maintain market valuation and satisfy capital providers. Because corporate capital combines debt, preference equity, and common equity, computing the Weighted Average Cost of Capital (WACC) accounts for the corporate tax shield on debt interest and the systematic equity risk premium.',
    content: `
## 1. Master Formulas for Specific Component Costs of Capital

### 1. After-Tax Cost of Debt ($K_d$)
Because interest on debt is a tax-deductible business expense under corporate tax laws:
$$K_d = I \\times (1 - t)$$
- Where $I$ = Pre-tax contractual coupon / interest rate, and $t$ = Corporate income tax rate.
- *Effective Cost:* If a company borrows at 10% interest and the corporate tax rate is 30%, the true after-tax cost is $10\\% \\times (1 - 0.30) = 7.0\\%$.

### 2. Cost of Irredeemable Preference Share Capital ($K_p$)
$$K_p = \\frac{D_p}{P_0}$$
- Where $D_p$ = Fixed annual preference dividend, and $P_0$ = Net issue price of preference shares. (Note: Preference dividends are paid out of post-tax profits; hence, no tax shield applies).

### 3. Cost of Equity ($K_e$) via Capital Asset Pricing Model (CAPM)
$$K_e = R_f + \\beta \\times (R_m - R_f)$$
- Where $R_f$ = Risk-Free rate (91-day T-Bill yield), $\\beta$ = Beta coefficient of systematic risk, $R_m$ = Expected return on market portfolio, and $(R_m - R_f)$ = Market Equity Risk Premium.

### 4. Cost of Equity via Gordon Dividend Growth Model
$$K_e = \\frac{D_1}{P_0} + g = \\frac{D_0 \\times (1 + g)}{P_0} + g$$
- Where $D_1$ = Expected dividend at year 1, $P_0$ = Current stock market price, and $g$ = Constant annual dividend growth rate.

## 2. Weighted Average Cost of Capital (WACC / $K_o$)

$$\\text{WACC} = \\left( W_d \\times K_d \\right) + \\left( W_p \\times K_p \\right) + \\left( W_e \\times K_e \\right)$$
- Where $W_d, W_p, W_e$ represent the proportional market value (or book value) weights of debt, preference capital, and equity in the aggregate capital structure ($\\sum W = 1.0$).

## 3. Overview of Capital Structure Theories

- **Net Income (NI) Theory (Durand):** Financial leverage matters; higher debt lowers WACC and increases firm value due to the lower cost of debt.
- **Net Operating Income (NOI) Theory:** Capital structure is irrelevant; overall WACC and total firm value remain constant regardless of the debt-equity ratio.
- **Modigliani-Miller (MM) Hypothesis (1958 without Taxes):** Value of leveraged firm equals value of unleveraged firm ($V_L = V_U$) through the market arbitrage process.
- **MM Hypothesis with Corporate Taxes (1963):** Value of leveraged firm exceeds unleveraged firm by the present value of the debt tax shield ($V_L = V_U + t \\times D$).

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Debt interest is **tax-deductible**; dividend payments on equity and preference shares are **NOT tax-deductible**.
> 2. Cost of retained earnings ($K_r$) is equal to the cost of equity ($K_e$), excluding personal taxes and flotation costs ($K_r = K_e$).
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A corporate borrower issues debentures at an interest rate of 12% per annum. If the corporate tax rate is 30%, what is the after-tax cost of debt (Kd)?',
          options: ['(A) 12.0%', '(B) 8.4%', '(C) 9.6%', '(D) 7.2%'],
        },
        {
          q: 'Under the Capital Asset Pricing Model (CAPM), if the risk-free rate is 6%, market return is 14%, and company beta is 1.25, what is the Cost of Equity (Ke)?',
          options: ['(A) 14.0%', '(B) 16.0%', '(C) 17.5%', '(D) 15.2%'],
        },
        {
          q: 'According to the Modigliani-Miller (MM) hypothesis in the presence of corporate income taxes, the value of a levered firm (VL) equals:',
          options: [
            '(A) VU − (Tax rate × Debt)',
            '(B) VU + (Tax rate × Debt)',
            '(C) VU / (1 − Tax rate)',
            '(D) Exactly equal to VU without change',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 8.4%. Kd = I × (1 − t) = 12% × (1 − 0.30) = 12% × 0.70 = 8.4%.',
        'Q2 Correct Answer: (B) 16.0%. Ke = Rf + β(Rm − Rf) = 6% + 1.25 × (14% − 6%) = 6% + 1.25 × 8% = 6% + 10% = 16.0%.',
        'Q3 Correct Answer: (B) VU + (Tax rate × Debt). Corporate taxes create an annual interest tax shield; the capitalized present value of this permanent shield is t × D, increasing firm value.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why is debt financing generally cheaper than equity financing for a commercial enterprise?',
        answer: 'First, debt holders have a prior legal claim on assets and income, making their risk lower and required return lower. Second, interest on debt is tax-deductible, creating an explicit corporate tax shield that further lowers effective cost.',
      },
      {
        prompt: 'What is the "Arbitrage Process" under the Modigliani-Miller theorem?',
        answer: 'Arbitrage is the mechanism where investors substitute personal leverage (borrowing on personal account) for corporate leverage by selling overvalued levered shares and buying undervalued unlevered shares, driving both firm values to equality.',
      },
    ],
  },

  // CHAPTER 15
  {
    index: 15,
    filename: '15_CHAPTER_15_LEVERAGE_ANALYSIS_EBIT_EPS.md',
    fullTitle: 'BUSINESS & FINANCIAL LEVERAGES (EBIT-EPS ANALYSIS)',
    shortHeader: 'CHAPTER 15 : LEVERAGE & EBIT-EPS ANALYSIS',
    leadParagraph: 'Leverage in financial management quantifies the magnification of corporate returns and risks arising from fixed operating and financial costs. While Operating Leverage measures business risk stemming from fixed manufacturing and administrative expenses, Financial Leverage quantifies financial risk stemming from contractual debt interest. Together, Combined Leverage measures the total sensitivity of Earnings Per Share (EPS) to variations in sales revenue.',
    content: `
## 1. The Three Dimensions of Leverage

$$\\text{Sales Revenue} - \\text{Variable Costs} = \\text{Contribution}$$
$$\\text{Contribution} - \\text{Fixed Operating Costs} = \\text{EBIT}$$
$$\\text{EBIT} - \\text{Interest Charges} = \\text{EBT}$$
$$\\text{EBT} - \\text{Taxes} = \\text{EAT (PAT)} \\longrightarrow \\text{EPS}$$

| Leverage Classification | Mathematical Formula | Risk Dimension Measured | Significance for Lenders & Analysts |
| :--- | :--- | :--- | :--- |
| **Operating Leverage (OL)** | $$\\text{OL} = \\frac{\\text{Contribution}}{\\text{EBIT}} = \\frac{\\% \\Delta \\text{ EBIT}}{\\% \\Delta \\text{ Sales}}$$ | **Business Risk** | Quantifies how fixed operating expenses amplify percentage changes in operating profits (EBIT) for a given shift in sales. |
| **Financial Leverage (FL)** | $$\\text{FL} = \\frac{\\text{EBIT}}{\\text{EBT}} = \\frac{\\% \\Delta \\text{ EPS}}{\\% \\Delta \\text{ EBIT}}$$ | **Financial Risk** | Quantifies how fixed debt servicing costs amplify percentage changes in EPS for a given shift in EBIT. |
| **Combined Leverage (CL)** | $$\\text{CL} = \\text{OL} \\times \\text{FL} = \\frac{\\text{Contribution}}{\\text{EBT}}$$ | **Total Risk** | Quantifies total percentage shift in EPS resulting from a 1% shift in gross sales volume. |

## 2. EBIT-EPS Indifference Point

The Indifference Point represents the specific level of Earnings Before Interest and Taxes (EBIT) at which two alternative financing plans yield the exact same Earnings Per Share (EPS).

$$\\frac{(\\text{EBIT}^* - I_1) \\times (1 - t) - D_{p1}}{N_1} = \\frac{(\\text{EBIT}^* - I_2) \\times (1 - t) - D_{p2}}{N_2}$$
- Where $I$ = Interest charges under plan, $t$ = Tax rate, $D_p$ = Preference dividends, and $N$ = Number of common equity shares outstanding.
- **Decision Rule:**
  - If expected EBIT is **higher than the indifference point**, the plan with **higher financial leverage (debt)** delivers superior EPS.
  - If expected EBIT is **lower than the indifference point**, the plan with **lower leverage (equity)** is safer and yields higher EPS.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. When Fixed Operating Costs are zero, **Operating Leverage is exactly 1.0** (not zero).
> 2. When Debt Interest is zero, **Financial Leverage is exactly 1.0**.
> 3. High Operating Leverage combined with High Financial Leverage creates an explosive risk profile for corporate solvency.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A firm has Sales of ₹20 Lakhs, Variable Costs of ₹12 Lakhs, and Fixed Operating Costs of ₹4 Lakhs. What is its Degree of Operating Leverage (DOL)?',
          options: ['(A) 1.5', '(B) 2.0', '(C) 2.5', '(D) 3.0'],
        },
        {
          q: 'Financial Leverage is computed as the ratio of:',
          options: [
            '(A) Sales to Contribution',
            '(B) Contribution to EBIT',
            '(C) EBIT to EBT',
            '(D) EBIT to Sales',
          ],
        },
        {
          q: 'If a company has an Operating Leverage of 2.5 and a Financial Leverage of 2.0, what is its Combined Leverage?',
          options: ['(A) 4.5', '(B) 5.0', '(C) 1.25', '(D) 0.5'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 2.0. Contribution = Sales − Variable Cost = 20L − 12L = ₹8 Lakhs. EBIT = Contribution − Fixed Cost = 8L − 4L = ₹4 Lakhs. DOL = Contribution / EBIT = 8L / 4L = 2.0.',
        'Q2 Correct Answer: (C) EBIT to EBT. Degree of Financial Leverage = EBIT / EBT (or EBIT / (EBIT − Interest)).',
        'Q3 Correct Answer: (B) 5.0. Combined Leverage = Operating Leverage × Financial Leverage = 2.5 × 2.0 = 5.0.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why does an enterprise with zero fixed operating costs have an Operating Leverage of 1.0 rather than 0?',
        answer: 'Because if fixed costs are zero, Contribution equals EBIT. The ratio DOL = Contribution / EBIT becomes 1.0, signifying that a 1% change in sales results in an exact 1% change in operating profit without any magnification.',
      },
      {
        prompt: 'What does a Combined Leverage of 4.0 signify to a credit rating analyst?',
        answer: 'It indicates that for every 1% change in the company\'s sales revenue, its net earnings per share (EPS) will fluctuate by 4.0% in the same direction, reflecting the joint volatility of operating and financing leverage.',
      },
    ],
  },

  // CHAPTER 16
  {
    index: 16,
    filename: '16_CHAPTER_16_FINANCIAL_RATIOS_CREDIT_APPRAISAL.md',
    fullTitle: 'FINANCIAL RATIO ANALYSIS FOR CREDIT & SOLVENCY APPRAISAL',
    shortHeader: 'CHAPTER 16 : FINANCIAL RATIO ANALYSIS',
    leadParagraph: 'Financial ratio analysis is the primary analytical technique utilized by commercial bank credit officers to evaluate the liquidity, operational efficiency, solvency, and debt-servicing capability of corporate borrowers. Establishing benchmarks—such as the Tandon Committee Current Ratio of 1.33:1 and the Debt Service Coverage Ratio (DSCR) for term loans—ensures credit discipline and mitigates non-performing asset formation.',
    content: `
## 1. Master Formula Matrix for Bank Credit Appraisal Ratios

| Ratio Category | Exact Mathematical Formula | Banking Benchmark / Target | Primary Significance for Credit Sanctions |
| :--- | :--- | :--- | :--- |
| **Current Ratio (CR)** | $$\\frac{\\text{Current Assets (CA)}}{\\text{Current Liabilities (CL)}}$$ | **1.33 : 1** *(Tandon Method 2)* | Measures short-term solvency; ensures 25% of current assets financed by long-term funds. |
| **Quick / Acid-Test Ratio** | $$\\frac{\\text{Current Assets} - \\text{Inventories} - \\text{Prepaid Expenses}}{\\text{Current Liabilities}}$$ | **1.00 : 1** | Evaluates immediate liquidity excluding illiquid inventories and prepayments. |
| **Debt-Equity Ratio (DER)** | $$\\frac{\\text{Total Long-Term Debt}}{\\text{Tangible Net Worth (TNW)}}$$ | **2.00 : 1** *(3:1 for infra projects)* | Measures capital structure cushion and relative financial stakes of lenders vs promoters. |
| **Total Outside Liabilities to TNW (TOL/TNW)** | $$\\frac{\\text{Total Outside Liabilities (Long-Term + Short-Term)}}{\\text{Tangible Net Worth}}$$ | **3.00 : 1 to 4.00 : 1** | Measures total indebtedness of the borrower against own equity funds. |
| **Interest Coverage Ratio (ICR)** | $$\\frac{\\text{EBIT}}{\\text{Interest Expense}}$$ | **\\ge 2.00\\text{ times}** | Assesses ability to service annual debt interest charges from operational earnings. |
| **Debt Service Coverage Ratio (DSCR)** | $$\\frac{\\text{PAT} + \\text{Depreciation} + \\text{Annual Interest}}{\\text{Annual Interest} + \\text{Annual Principal Installment}}$$ | **1.50 to 2.00** *(Min 1.20)* | **Universal term loan benchmark**; evaluates total cash flow adequacy to repay loan installments. |
| **Debtors Turnover (Collection Period)** | $$\\frac{\\text{Average Accounts Receivable}}{\\text{Net Credit Sales}} \\times 365$$ | Within credit terms (60–90 days) | Detects credit quality, customer recovery speed, and potential bad debts. |
| **Inventory Turnover Ratio (ITR)** | $$\\frac{\\text{Cost of Goods Sold (COGS)}}{\\text{Average Inventory}}$$ | Higher indicates fast movement | Identifies inventory hoarding or obsolete, unsellable stock. |

## 2. Tangible Net Worth (TNW) Definition for Bankers

$$\\text{Tangible Net Worth (TNW)} = \\text{Paid-Up Equity Capital} + \\text{Free Reserves} - \\text{Intangible Assets} - \\text{Accumulated Losses}$$
- Intangible assets deducted: Goodwill, Patents, Trademarks, Preliminary expenses, Deferred tax assets.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. When computing Quick Assets, **Inventories and Prepaid Expenses must be deducted** from Current Assets.
> 2. The standard minimum Current Ratio mandated under **Tandon Committee Method 2** is **1.33:1**.
> 3. DSCR evaluates **Total Debt Service** (Principal + Interest), whereas ICR evaluates **Interest alone**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under the Tandon Committee Method 2 of working capital appraisal, what is the minimum required Current Ratio benchmark?',
          options: ['(A) 1.00 : 1', '(B) 1.25 : 1', '(C) 1.33 : 1', '(D) 2.00 : 1'],
        },
        {
          q: 'Which of the following items is EXCLUDED from Current Assets when calculating the Quick (Acid-Test) Ratio?',
          options: [
            '(A) Cash in Hand and at Bank',
            '(B) Trade Debtors',
            '(C) Marketable Government Securities',
            '(D) Inventories and Prepaid Expenses',
          ],
        },
        {
          q: 'A corporate borrower applies for a term loan. Which financial ratio is the primary benchmark evaluated by banks to assess the borrower’s ability to service annual principal installments and interest?',
          options: [
            '(A) Current Ratio',
            '(B) Debt Service Coverage Ratio (DSCR)',
            '(C) Operating Profit Ratio',
            '(D) Return on Capital Employed',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) 1.33 : 1. Tandon Committee Method 2 mandates that borrowers provide a minimum 25% of total current assets as net working capital from long-term sources, resulting in a current ratio of 1.33:1.',
        'Q2 Correct Answer: (D) Inventories and Prepaid Expenses. Inventories cannot be realized immediately at full book value and prepaid expenses cannot be converted to cash; both are excluded.',
        'Q3 Correct Answer: (B) Debt Service Coverage Ratio (DSCR). DSCR evaluates total operational cash flow availability against full annual debt obligations (principal repayment + interest).',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What is the formula for calculating Net Working Capital (NWC), and what does a negative NWC indicate to a bank lender?',
        answer: 'NWC = Current Assets − Current Liabilities. A negative NWC indicates that current liabilities exceed current assets—meaning short-term funds have been diverted to acquire long-term assets, causing acute liquidity stress.',
      },
      {
        prompt: 'Why do bank credit appraisal standards stipulate that Debt Service Coverage Ratio (DSCR) should ideally be between 1.50 and 2.00?',
        answer: 'A DSCR of 1.50 means the borrower produces ₹1.50 in operational cash flow for every ₹1.00 of debt service due, providing a safety margin of 50% against adverse shocks in business revenue.',
      },
    ],
  },

  // CHAPTER 17
  {
    index: 17,
    filename: '17_CHAPTER_17_MARGINAL_COSTING_BREAK_EVEN.md',
    fullTitle: 'FUNDAMENTALS OF COSTING, MARGINAL COSTING & BREAK-EVEN ANALYSIS',
    shortHeader: 'CHAPTER 17 : MARGINAL COSTING & BEP',
    leadParagraph: 'Cost accounting classifies corporate expenses to facilitate managerial decision-making, product pricing, and cost control. Marginal costing is a specialized technique that segregates total costs strictly into Variable Costs (which vary in direct proportion to production volume) and Fixed Costs (which remain constant over a relevant range). Understanding the Contribution margin, Profit-Volume (P/V) Ratio, and the Break-Even Point (BEP) is vital for evaluating credit viability.',
    content: `
## 1. Master Mathematical Formulas for Marginal Costing

### 1. Contribution
$$\\text{Contribution} = \\text{Sales Revenue} - \\text{Variable Costs}$$
$$\\text{Contribution} = \\text{Fixed Costs} + \\text{Profit}$$

### 2. Profit-Volume Ratio (P/V Ratio)
$$\\text{P/V Ratio} = \\frac{\\text{Contribution}}{\\text{Sales}} \\times 100 = \\frac{\\text{Sales} - \\text{Variable Costs}}{\\text{Sales}} \\times 100$$
$$\\text{P/V Ratio} = \\frac{\\Delta \\text{ Profit}}{\\Delta \\text{ Sales}} \\times 100 = \\frac{\\Delta \\text{ Contribution}}{\\Delta \\text{ Sales}} \\times 100$$
- *Significance:* Expresses profitability per rupee of sales volume. An increase in selling price or reduction in variable cost directly elevates the P/V ratio.

### 3. Break-Even Point (BEP)
The sales volume at which Total Revenue equals Total Cost (Profit = 0):
$$\\text{BEP (in physical units)} = \\frac{\\text{Total Fixed Costs}}{\\text{Contribution per Unit}}$$
$$\\text{BEP (in sales monetary value)} = \\frac{\\text{Total Fixed Costs}}{\\text{P/V Ratio}}$$

### 4. Margin of Safety (MoS)
The buffer by which actual sales volume exceeds the break-even volume:
$$\\text{Margin of Safety (Value)} = \\text{Actual Sales} - \\text{Break-Even Sales} = \\frac{\\text{Profit}}{\\text{P/V Ratio}}$$
$$\\text{Margin of Safety Ratio} = \\frac{\\text{Actual Sales} - \\text{Break-Even Sales}}{\\text{Actual Sales}} \\times 100$$

## 2. Cost Dynamics Comparison

| Cost Category | Behavior in Total Amount | Behavior on a Per-Unit Basis |
| :--- | :--- | :--- |
| **Fixed Cost** | **Constant / Unchanged** regardless of output volume | **Decreases progressively** as production volume expands |
| **Variable Cost** | **Increases proportionally** with production volume | **Constant / Unchanged** per unit of output |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Total Fixed Cost remains constant, but **Fixed Cost per unit DECREASES** as production expands.
> 2. Variable Cost per unit remains **CONSTANT**, but total variable cost increases with output.
> 3. Margin of Safety formula: $\\text{MoS} = \\frac{\\text{Profit}}{\\text{P/V Ratio}}$.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'A manufacturing firm has Fixed Costs of ₹6,00,000, Selling Price of ₹100 per unit, and Variable Cost of ₹60 per unit. What is the Break-Even Point in physical units?',
          options: ['(A) 10,000 Units', '(B) 15,000 Units', '(C) 20,000 Units', '(D) 25,000 Units'],
        },
        {
          q: 'If the Profit-Volume (P/V) Ratio is 40% and the enterprise earns a net profit of ₹2,00,000, what is the Margin of Safety in monetary value?',
          options: ['(A) ₹80,000', '(B) ₹5,00,000', '(C) ₹8,00,000', '(D) ₹4,00,000'],
        },
        {
          q: 'As production and sales volume expand beyond the break-even point, what happens to the Fixed Cost per unit?',
          options: ['(A) Increases proportionally', '(B) Decreases progressively', '(C) Remains unchanged', '(D) Drops to zero immediately'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) 15,000 Units. Contribution per Unit = Selling Price − Variable Cost = 100 − 60 = ₹40. BEP (Units) = Fixed Cost / Contribution per Unit = 6,00,000 / 40 = 15,000 units.',
        'Q2 Correct Answer: (B) ₹5,00,000. Margin of Safety = Profit / P/V Ratio = 2,00,000 / 0.40 = ₹5,00,000.',
        'Q3 Correct Answer: (B) Decreases progressively. Because total fixed cost is divided across a greater number of manufactured units, the per-unit fixed cost asymptotically declines.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why is a high Margin of Safety (MoS) considered a positive indicator by a bank term-lending officer?',
        answer: 'A high MoS indicates that the borrower\'s actual sales can drop significantly before reaching the break-even threshold where losses begin, providing strong operational insulation against market downturns.',
      },
      {
        prompt: 'How can the P/V ratio be calculated when only sales and profits of two successive periods are known?',
        answer: 'P/V Ratio = (Change in Profit / Change in Sales) × 100. This formula relies on the fact that change in fixed costs is zero, so the entire change in profit is driven by contribution.',
      },
    ],
  },

  // CHAPTER 18
  {
    index: 18,
    filename: '18_CHAPTER_18_STANDARD_COSTING_BUDGETARY_CONTROL.md',
    fullTitle: 'STANDARD COSTING, VARIANCE ANALYSIS & BUDGETARY CONTROL',
    shortHeader: 'CHAPTER 18 : STANDARD COSTING & BUDGETS',
    leadParagraph: 'Standard costing and budgetary control establish quantitative performance benchmarks against which actual business expenditures are compared. In commercial banking and corporate financial analysis, variance analysis pinpoints operational inefficiencies in materials, labor, and overheads, while cash budgets serve as vital instruments for monitoring working capital drawdowns.',
    content: `
## 1. Master Variance Analysis Architecture

Variances represent the difference between standard costs and actual costs:
- **Favourable Variance (F):** When Actual Cost is *less* than Standard Cost (Actual Cost < Standard Cost), enhancing profitability.
- **Adverse / Unfavourable Variance (A):** When Actual Cost *exceeds* Standard Cost (Actual Cost > Standard Cost), reducing profitability.

### 1. Direct Material Variances
$$\\text{Material Cost Variance (MCV)} = (\\text{Standard Quantity} \\times \\text{Standard Price}) - (\\text{Actual Quantity} \\times \\text{Actual Price})$$
$$\\text{Material Price Variance (MPV)} = \\text{Actual Quantity} \\times (\\text{Standard Price} - \\text{Actual Price})$$
$$\\text{Material Usage Variance (MUV)} = \\text{Standard Price} \\times (\\text{Standard Quantity} - \\text{Actual Quantity})$$
$$\\text{Verification Axiom:} \\quad \\text{MCV} = \\text{MPV} + \\text{MUV}$$

### 2. Direct Labour Variances
$$\\text{Labour Cost Variance (LCV)} = (\\text{Standard Hours} \\times \\text{Standard Rate}) - (\\text{Actual Hours} \\times \\text{Actual Rate})$$
$$\\text{Labour Rate Variance (LRV)} = \\text{Actual Hours} \\times (\\text{Standard Rate} - \\text{Actual Rate})$$
$$\\text{Labour Efficiency Variance (LEV)} = \\text{Standard Rate} \\times (\\text{Standard Hours} - \\text{Actual Hours})$$
$$\\text{Verification Axiom:} \\quad \\text{LCV} = \\text{LRV} + \\text{LEV}$$

## 2. Budgetary Control: Fixed vs Flexible Budgets & Cash Budgets

| Budget Type | Core Architectural Characteristic | Analytical Utility in Banking & Business |
| :--- | :--- | :--- |
| **Fixed Budget** | Prepared for a single predetermined level of activity; remains unadjusted for volume changes | Unrealistic in dynamic markets; fails to provide meaningful variance comparisons. |
| **Flexible Budget** | Automatically adjusts fixed, semi-variable, and variable cost allowances to the actual level of capacity utilized | Essential for fair managerial evaluation across variable operational loads. |
| **Cash Budget** | Detailed month-by-month projection of anticipated cash receipts and disbursements | **Mandatory working capital tool**; predicts cash deficits, cash surplus, and seasonal bank credit requirements. |
| **Zero-Based Budget (ZBB)** | Demands complete justification of every line item from scratch (base zero) every cycle | Eliminates historical cost bloat and redundant corporate expenses. |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In variance formulas, **Material Price Variance** is multiplied by **Actual Quantity** ($\\text{AQ} \\times (\\text{SP} - \\text{AP})$).
> 2. Material Usage Variance is evaluated at the **Standard Price**, NOT the actual price.
> 3. Depreciation is a non-cash expense and is **completely excluded from Cash Budgets**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Standard price of material is ₹20 per kg. Actual material purchased and consumed is 1,000 kg at ₹22 per kg. What is the Material Price Variance (MPV)?',
          options: ['(A) ₹2,000 Favourable', '(B) ₹2,000 Adverse', '(C) ₹22,000 Adverse', '(D) Nil'],
        },
        {
          q: 'Which budgeting approach demands that every operational manager justify their entire budget request from base zero, treating every program as new?',
          options: [
            '(A) Flexible Budgeting',
            '(B) Incremental Budgeting',
            '(C) Zero-Based Budgeting (ZBB)',
            '(D) Master Budgeting',
          ],
        },
        {
          q: 'Which of the following items is EXCLUDED when preparing a monthly Cash Budget for working capital credit monitoring?',
          options: [
            '(A) Cash sales receipts',
            '(B) Depreciation on machinery',
            '(C) Dividend payment to shareholders',
            '(D) Monthly factory rent disbursement',
          ],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (B) ₹2,00,00 Adverse. MPV = Actual Quantity × (Standard Price − Actual Price) = 1,000 × (20 − 22) = 1,000 × (−2) = ₹2,000 Adverse (A).',
        'Q2 Correct Answer: (C) Zero-Based Budgeting (ZBB). Developed by Peter Pyhrr, ZBB requires complete justification from base zero without assuming historical baselines.',
        'Q3 Correct Answer: (B) Depreciation on machinery. Cash budgets track physical liquidity inflows and outflows; depreciation is an accounting write-off that involves no physical cash movement.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'State the mathematical relationship linking Material Cost Variance, Material Price Variance, and Material Usage Variance.',
        answer: 'Material Cost Variance (MCV) = Material Price Variance (MPV) + Material Usage Variance (MUV). The total variance is the algebraic sum of the price effect and the consumption efficiency effect.',
      },
      {
        prompt: 'Why are Flexible Budgets superior to Fixed Budgets for performance evaluation?',
        answer: 'Because a Fixed Budget evaluates costs against a static output target. A Flexible Budget recalibrates allowable costs to the actual production volume achieved, ensuring differences reflect operational efficiency rather than simple output discrepancies.',
      },
    ],
  },

  // CHAPTER 19
  {
    index: 19,
    filename: '19_CHAPTER_19_TAXATION_GST_TDS_IN_BANKING.md',
    fullTitle: 'DIRECT & INDIRECT TAXATION: GST & TDS IN BANKING OPERATIONS',
    shortHeader: 'CHAPTER 19 : TAXATION, GST & TDS',
    leadParagraph: 'Commercial banks operate as pivotal withholding, collection, and reporting intermediaries under both direct (Income Tax Act 1961) and indirect (Goods and Services Tax Act 2017) taxation regimes. Complying with Tax Deducted at Source (TDS) thresholds under Section 194A and Section 194N, managing Form 15G/15H exemptions, and navigating the 50% Input Tax Credit restriction under GST Section 17(4) are critical bank responsibilities.',
    content: `
## 1. TDS on Bank Term Deposits (Section 194A, Income Tax Act)

| Depositor Category | Annual Interest Threshold for TDS | Standard TDS Rate (Valid PAN) | Higher TDS Rate without PAN (Sec 206AA) | Exemption Declaration Forms |
| :--- | :--- | :--- | :--- | :--- |
| **General Individuals / Entities** | **₹40,000** per financial year per bank | **10%** | **20%** | **Form 15G** (Age < 60 years, total taxable income is below basic exemption limit) |
| **Senior Citizens (Age 60+ Years)** | **₹50,000** per financial year (under Section 80TTB) | **10%** | **20%** | **Form 15H** (Age 60+ years, final tax liability on total income is NIL) |

- **Time of Deduction:** TDS is deducted at the time of credit of interest to the account or at payment, whichever occurs earlier.
- **Remittance to Government:** Must be deposited by the **7th of the succeeding month** (30 April for March deductions).
- **TDS Certificates:** Issued quarterly in **Form 16A**; details are reflected annually in the taxpayer's **Form 26AS** and Annual Information Statement (AIS).

## 2. Section 194N: TDS on Cash Withdrawals

To discourage high-value cash transactions and promote digital banking rails:
- **General Threshold:** TDS at **2%** on aggregate cash withdrawals exceeding **₹1 Crore** in a financial year from one or more accounts in a bank.
- **Non-Filers Threshold (No ITR filed for past 3 years):**
  - **2% TDS** on cash withdrawals between **₹20 Lakhs and ₹1 Crore**.
  - **5% TDS** on cash withdrawals exceeding **₹1 Crore**.

## 3. Goods and Services Tax (GST) Architecture in Banking

- **Applicable GST Rate:** Most banking fee-based services (processing charges, folio charges, locker rent, ATM fees beyond free limit, DD issuance) attract standard GST at **18%**.
- **Exempt Banking Services:** Pure interest income on loans, deposits, advances, and savings accounts is **completely exempt from GST**.
- **Input Tax Credit (ITC) Rule for Banks (Section 17(4), CGST Act 2017):**
  - Banks are given a special statutory option: either comply with detailed two-way reconciliation or avail an **automatic 50% of eligible Input Tax Credit** every month on inputs, capital goods, and input services, foregoing the remaining 50%.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. The interest TDS threshold for Senior Citizens (60+ years) is **₹50,000** under Section 194A / 80TTB, compared to **₹40,000** for general citizens.
> 2. If a customer fails to submit PAN, TDS must be deducted at **20%** under Section 206AA.
> 3. Interest earned on bank deposits is exempt from GST, but **service fees, commissions, and charges attract 18% GST**.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under Section 194A of the Income Tax Act 1961, what is the annual interest threshold above which a bank must deduct TDS on term deposits of Senior Citizens (age 60+)?',
          options: ['(A) ₹10,000', '(B) ₹40,000', '(C) ₹50,000', '(D) ₹1,00,000'],
        },
        {
          q: 'If a bank customer eligible for TDS deduction on term deposit interest fails to furnish a valid Permanent Account Number (PAN), what is the mandatory TDS rate under Section 206AA?',
          options: ['(A) 10%', '(B) 15%', '(C) 20%', '(D) 30%'],
        },
        {
          q: 'Under Section 17(4) of the CGST Act 2017, banking companies have the statutory option to avail what fixed percentage of eligible Input Tax Credit (ITC) every month?',
          options: ['(A) 100%', '(B) 75%', '(C) 50%', '(D) 25%'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (C) ₹50,000. Under Section 194A read with Section 80TTB, the threshold for senior citizens is ₹50,000 per financial year (compared to ₹40,000 for non-senior citizens).',
        'Q2 Correct Answer: (C) 20%. Section 206AA mandates that failure to submit a valid PAN attracts a minimum withholding rate of 20% (or the rate in force, whichever is higher).',
        'Q3 Correct Answer: (C) 50%. Section 17(4) permits financial institutions to claim a flat 50% of eligible input tax credit every month to avoid complex input apportionment.',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'What is the distinction between Form 15G and Form 15H?',
        answer: 'Form 15G is for individuals below 60 years and Hindu Undivided Families whose estimated total taxable income is below the basic tax exemption limit. Form 15H is strictly for Senior Citizens (60 years and above) whose final tax liability on total income is zero (even if interest exceeds basic exemption).',
      },
      {
        prompt: 'What are the TDS rates under Section 194N for cash withdrawals by a customer who has not filed income tax returns for the past three years?',
        answer: 'TDS is 2% on aggregate cash withdrawals between ₹20 Lakhs and ₹1 Crore, and escalates to 5% on aggregate cash withdrawals exceeding ₹1 Crore.',
      },
    ],
  },

  // CHAPTER 20
  {
    index: 20,
    filename: '20_CHAPTER_20_THE_GRAND_SYNTHESIS_AFMB_REVISION_VAULT.md',
    fullTitle: 'THE GRAND SYNTHESIS: IIBF PAPER 3 (AFMB) MASTER REVISION VAULT',
    shortHeader: 'CHAPTER 20 : AFMB MASTER REVISION VAULT',
    leadParagraph: 'This Capstone Master Revision Vault synthesizes the entire 35-unit curricular spectrum of IIBF Paper 3 (Accounting & Financial Management for Bankers). It integrates statutory accounting standards, financial mathematics, bank balance sheet schedules, corporate finance formulas, and operational tax mandates into high-yield comparative matrices, 50 high-probability examiner traps, and rapid diagnostic recall triggers.',
    content: `
## 1. Master Formula & Benchmark Matrix

| Domain & Concept | Mathematical Formula / Statutory Benchmark | Core Examination Application |
| :--- | :--- | :--- |
| **Fundamental Accounting Equation** | $\\text{Assets} = \\text{Liabilities} + \\text{Capital}$ | Governs balance sheet equilibrium and dual aspect accounting. |
| **Straight Line Depreciation (SLM)** | $\\text{Depreciation} = \\frac{\\text{Cost} - \\text{Scrap}}{\\text{Useful Life}}$ | Fixed annual write-off; book value reaches scrap value. |
| **Effective Annual Rate (EAR)** | $\\text{EAR} = \\left( 1 + \\frac{r}{m} \\right)^m - 1$ | Quantifies true annual yield under intra-year compounding. |
| **Rule of 72** | $t_{\\text{double}} \\approx \\frac{72}{r}$ | Approximation shortcut for doubling period of capital. |
| **Annuity Due Factor** | $\\text{Value of Annuity Due} = \\text{Value of Ordinary Annuity} \\times (1 + r)$ | Payments made at beginning of periods earn one extra interval of interest. |
| **Perpetuity Present Value** | $\\text{PV} = \\frac{C}{r}$ | Value of indefinite stream of equal payments. |
| **Bond YTM Approximation** | $\\text{YTM} \\approx \\frac{C + \\frac{M - P}{n}}{\\frac{M + P}{2}} \\times 100$ | Approximates internal rate of return on fixed-income instruments. |
| **Modified Duration** | $MD = \\frac{\\text{Macaulay Duration}}{1 + YTM}$ | Measures percentage price change per 100 bps shift in yield. |
| **Statutory Reserve Transfer** | **Section 17 BR Act: Min 20%** *(RBI operational norm: 25%)* | Mandatory deduction from net profit before dividend distribution. |
| **After-Tax Cost of Debt** | $K_d = I \\times (1 - t)$ | Reflects corporate interest tax shield. |
| **Cost of Equity (CAPM)** | $K_e = R_f + \\beta \\times (R_m - R_f)$ | Quantifies required return factoring systematic beta risk. |
| **Degree of Operating Leverage** | $\\text{DOL} = \\frac{\\text{Contribution}}{\\text{EBIT}}$ | Quantifies business risk and fixed operating cost amplification. |
| **Degree of Financial Leverage** | $\\text{DFL} = \\frac{\\text{EBIT}}{\\text{EBT}}$ | Quantifies financial risk and debt servicing amplification. |
| **Current Ratio Benchmark** | **1.33 : 1** | Tandon Committee Method 2 working capital minimum. |
| **Debt Service Coverage Ratio** | $\\text{DSCR} = \\frac{\\text{PAT} + \\text{Depreciation} + \\text{Interest}}{\\text{Interest} + \\text{Principal Installment}}$ | Benchmark 1.50 to 2.00; mandatory for term loan sanctions. |
| **Break-Even Point (Value)** | $\\text{BEP} = \\frac{\\text{Fixed Cost}}{\\text{P/V Ratio}}$ | Sales revenue at which total cost equals total revenue. |
| **Margin of Safety (MoS)** | $\\text{MoS} = \\frac{\\text{Profit}}{\\text{P/V Ratio}}$ | Cushion between actual sales and break-even sales. |
| **TDS on Bank Deposit Interest** | **₹40,000** *(General)* / **₹50,000** *(Senior Citizens Sec 80TTB)* | Threshold for mandatory 10% withholding under Section 194A. |

## 2. 50 Essential Examiner Traps for IIBF Paper 3 (AFMB)

1. Valuing closing stock at Cost or Market Price, whichever is lower, is governed by the **Prudence / Conservatism Concept**.
2. Showing capital as a balance sheet liability is mandated by the **Business Entity Concept**.
3. **Outstanding Rent Account** is a **Representative Personal Account**, NOT a Nominal Account.
4. Double-entry bookkeeping was first published by **Luca Pacioli in 1494**.
5. Charging plant installation wages to the Wages Account is an **Error of Principle**; it does **NOT affect the Trial Balance tally**.
6. When a Trial Balance fails to tally at final accounts stage, a debit balance in the Suspense Account is shown on the **Assets side** of the Balance Sheet.
7. A **Debit balance in a Bank Passbook** signifies an **Overdraft** (liability for customer).
8. **Land is never depreciated** because its useful economic life is legally unlimited.
9. Under the Income Tax Act 1961, depreciation must be computed using the **WDV method on blocks of assets**.
10. If an asset is used for **fewer than 180 days** in the purchase year, only **50% of normal depreciation** is deductible for tax.
11. Under Section 22 of the NI Act, negotiable usance instruments receive **3 Days of Grace**.
12. If a bill maturity falls on a public holiday, it is due on the **Immediately Preceding Business Day**; if on an emergency holiday, on the **Immediately Succeeding Business Day**.
13. **Rebate on Bills Discounted** is disclosed under **Schedule 5 (Other Liabilities & Provisions)** in the bank balance sheet.
14. The Effective Annual Rate (EAR) is **always strictly greater** than the nominal rate when compounding is intra-year.
15. $\\text{Value of Annuity Due} = \\text{Value of Ordinary Annuity} \\times (1 + r)$.
16. For a zero-coupon bond, the Macaulay Duration **equals its maturity period exactly** ($D = n$).
17. When market interest yields rise, existing bond prices **fall**.
18. Form A of the Third Schedule of the BR Act 1949 comprises **Schedules 1 to 12**.
19. Letters of Credit and Bank Guarantees appear in **Schedule 12 (Contingent Liabilities)**, outside balance sheet totals.
20. Non-Banking Assets acquired in satisfaction of claims (Section 9 BR Act) appear in **Schedule 11** and must be sold within **7 years**.
21. "Bills for Collection" are **not added to the balance sheet total**; they appear as a footnote below Schedule 12.
22. In Form B Profit & Loss Account, **Provisions and Contingencies** is an unnumbered direct line in Section II (Expenditure).
23. Section 17(1) of the BR Act mandates transferring at least **20% of net profits** to Statutory Reserves (RBI enforces **25%**).
24. Commission, exchange, and brokerage appear under **Schedule 14 (Other Income)**.
25. Effective **2 August 1993**, India shifted to **Direct Quotation** for all forex transactions.
26. In direct forex quotes, ascending forward margins indicate a **Premium (ADD)**; descending margins indicate a **Discount (SUBTRACT)**.
27. When banks buy foreign exchange, they apply the **lower buying rate**; when selling, they apply the **higher selling rate**.
28. When evaluating mutually exclusive projects where NPV and IRR conflict, **NPV must always be preferred**.
29. In capital budgeting, appraisal evaluates **Cash Flow After Tax (PAT + Depreciation)**, not accounting profit.
30. NPV assumes cash flows are reinvested at the **Cost of Capital ($k$)**, whereas IRR assumes reinvestment at the **IRR itself**.
31. Sunk costs must be **completely excluded** from capital budgeting cash flows.
32. Interest on debt is **tax-deductible**, creating an after-tax cost of $K_d = I \\times (1 - t)$.
33. Dividend payments on equity and preference shares are **NOT tax-deductible**.
34. When fixed operating costs are zero, **Operating Leverage is 1.0** (not zero).
35. When debt interest is zero, **Financial Leverage is 1.0**.
36. **Combined Leverage** equals Operating Leverage multiplied by Financial Leverage ($\\text{CL} = \\text{OL} \\times \\text{FL}$).
37. When calculating Quick Assets, **Inventories and Prepaid Expenses are deducted** from Current Assets.
38. Tandon Committee Method 2 establishes a minimum **Current Ratio of 1.33:1**.
39. Debt Service Coverage Ratio (DSCR) evaluates **both Principal and Interest**, whereas Interest Coverage evaluates Interest alone.
40. Tangible Net Worth excludes **intangible assets** (Goodwill, Patents) and accumulated losses.
41. Total Fixed Cost remains constant, but **Fixed Cost per unit decreases** as production expands.
42. Variable Cost per unit remains **constant**, while total variable cost increases proportionally with volume.
43. $\\text{Margin of Safety} = \\frac{\\text{Profit}}{\\text{P/V Ratio}}$.
44. Material Price Variance is evaluated on **Actual Quantity** ($\\text{AQ} \\times (\\text{SP} - \\text{AP})$).
45. Material Usage Variance is evaluated at the **Standard Price** ($\\text{SP} \\times (\\text{SQ} - \\text{AQ})$).
46. Depreciation is a non-cash item and is **completely excluded from Cash Budgets**.
47. The annual interest TDS threshold under Section 194A is **₹40,000 for general depositors** and **₹50,000 for Senior Citizens** (Section 80TTB).
48. Failure to furnish a valid PAN triggers mandatory **20% TDS** under Section 206AA.
49. **Form 15G** is for individuals under 60 years; **Form 15H** is strictly for Senior Citizens (60+ years).
50. Banks can claim an automatic **50% of eligible Input Tax Credit (ITC)** every month under Section 17(4) of the CGST Act 2017.
`,
    practiceQuestions: {
      questions: [
        {
          q: 'Under Section 29 of the Banking Regulation Act 1949, commercial banks prepare their Balance Sheet and Profit & Loss Account strictly under which schedules of the Third Schedule?',
          options: [
            '(A) Form A (Schedules 1 to 12) & Form B (Schedules 13 to 16)',
            '(B) Form A (Schedules 1 to 10) & Form B (Schedules 11 to 15)',
            '(C) Form 1 (Schedules 1 to 14) & Form 2 (Schedules 15 to 18)',
            '(D) Form C (Schedules 1 to 16) & Form D (Schedules 17 to 20)',
          ],
        },
        {
          q: 'Which of the following statements correctly describes the reinvestment rate assumptions of Net Present Value (NPV) and Internal Rate of Return (IRR)?',
          options: [
            '(A) Both assume reinvestment at the risk-free rate',
            '(B) NPV assumes reinvestment at Cost of Capital; IRR assumes reinvestment at the project IRR',
            '(C) NPV assumes reinvestment at the project IRR; IRR assumes reinvestment at Cost of Capital',
            '(D) Neither technique makes any reinvestment assumption',
          ],
        },
        {
          q: 'A banking company earns a post-tax net profit of ₹100 Crores. Under Section 17(1) of the Banking Regulation Act 1949, what is the minimum statutory amount that must be transferred to the Statutory Reserve fund?',
          options: ['(A) ₹10 Crores', '(B) ₹20 Crores', '(C) ₹25 Crores', '(D) ₹50 Crores'],
        },
      ],
      solutions: [
        'Q1 Correct Answer: (A) Form A (Schedules 1 to 12) & Form B (Schedules 13 to 16). Form A contains the 12 balance sheet schedules; Form B contains the 4 P&L schedules.',
        'Q2 Correct Answer: (B) NPV assumes reinvestment at Cost of Capital; IRR assumes reinvestment at the project IRR. This fundamental theoretical difference explains why NPV is superior for mutually exclusive choices.',
        'Q3 Correct Answer: (B) ₹20 Crores. Section 17(1) mandates a 20% minimum statutory transfer (₹20 Crores), while the RBI prudential norm enforces 25% (₹25 Crores).',
      ],
    },
    activeRecallCards: [
      {
        prompt: 'Why is the Debt Service Coverage Ratio (DSCR) the pivotal metric for bank term loan appraisals rather than the Interest Coverage Ratio (ICR)?',
        answer: 'Because ICR tests only the borrower\'s capacity to pay periodic interest charges. DSCR evaluates operational cash flow adequacy against total compulsory debt commitments—both interest obligations and principal installment amortizations.',
      },
      {
        prompt: 'How does an increase in the corporate income tax rate affect the Weighted Average Cost of Capital (WACC) for a firm with debt in its capital structure?',
        answer: 'A higher tax rate enhances the value of the debt interest tax shield, lowering the after-tax cost of debt [Kd = I × (1 − t)]. This reduces the overall weighted average cost of capital (WACC).',
      },
    ],
  },
];

async function main() {
  console.log(`Generating chapters 13 to 20 for IIBF Paper 3 (AFMB)...`);
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
