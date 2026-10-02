# IIBF DBF Paper 3: Module C — Financial Management, Capital Budgeting & Ratio Analysis

> **Paper:** 3 (Accounting and Financial Management for Bankers)
> **Module:** C (Financial Management)
> **Macmillan Source:** Units 21 to 28 (Capital Budgeting NPV/IRR/Payback/PI, Cost of Capital WACC, Capital Structure Theories, Leverages, Ratio Analysis for Credit Current/Quick/DSCR/TOL-TNW)

---

## 14. IIBF AFMB Unit 7: Capital Budgeting & Investment Decisions (NPV, IRR, Payback)

> 🧠 **Key Concept — Pivotal Concept: Capital Budgeting Decisions**
> Capital budgeting involves evaluating long-term capital investments whose returns are expected to accrue over multiple future years.

## 📊 1. Master Comparison of Capital Budgeting Appraisal Techniques

| Technique | Considers TVM? | Calculation Formula / Decision Rule | Key Strength & Limitation |
| --- | --- | --- | --- |
| Payback Period (PBP) | ❌ No | Time required to recover initial investment: \(\frac{\text{Initial Outlay}}{\text{Annual Cash Inflow}}\) | Simple liquidity measure; ignores cash flows after payback period. |
| Accounting Rate of Return (ARR) | ❌ No | \(\frac{\text{Average Annual Profit after Tax}}{\text{Average Investment}} \times 100\) | Uses accounting profit instead of cash flows; ignores TVM. |
| Net Present Value (NPV) | ✅ Yes | \(\text{NPV} = \sum_{t=1}^n \frac{C_t}{(1+k)^t} - C_0\). Accept if \(\text{NPV} > 0\) | Theoretically superior; assumes cash flows reinvested at Cost of Capital (\(k\)). |
| Internal Rate of Return (IRR) | ✅ Yes | Discount rate \(r\) where \(\text{NPV} = 0\). Accept if \(\text{IRR} > k\) | Popular with corporate boards; assumes reinvestment at IRR rate (unrealistic). |
| Profitability Index (PI / Benefit-Cost) | ✅ Yes | \(\text{PI} = \frac{\text{Present Value of Inflows}}{\text{Initial Investment}}\). Accept if \(\text{PI} > 1.0\) | Best for capital rationing with constrained investment budgets. |

> 🎯 **Exam Anchor & Trap:**
> 🎯 Top Exam Traps on Capital Budgeting:
1. **NPV vs IRR Conflict:** When evaluating mutually exclusive projects where NPV and IRR give conflicting rankings, **NPV method must ALWAYS be preferred** because it maximizes shareholder wealth.
2. **Cash Flows vs Accounting Profit:** In Capital Budgeting, we evaluate **Cash Inflows (Profit After Tax + Depreciation)**, NOT accounting profits.
3. **Reinvestment Rate Assumption:** NPV assumes cash flows are reinvested at the **Cost of Capital (\(k\))**, whereas IRR assumes reinvestment at the **IRR itself**.

---

---

## 15. IIBF AFMB Unit 8: Ratio Analysis for Credit & Financial Health Assessment

> 🧠 **Key Concept — Pivotal Concept: Financial Ratios as a Diagnostic Tool**
> Ratio analysis evaluates the financial stability, operational efficiency, liquidity, and debt-servicing capacity of borrowing enterprises by establishing mathematical relationships between financial statement line items.

## 📊 1. Master Formula Matrix for Credit Appraisal Ratios

| Ratio Category | Formula | Banking Benchmark / Target | Significance for Lenders |
| --- | --- | --- | --- |
| Current Ratio (CR) | \(\frac{\text{Current Assets (CA)}}{\text{Current Liabilities (CL)}}\) | **1.33 : 1** (Tandon Method 2) | Measures short-term solvency and working capital cushion. |
| Quick / Acid-Test Ratio | \(\frac{\text{Current Assets} - \text{Inventories} - \text{Prepaid Expenses}}{\text{Current Liabilities}}\) | **1.00 : 1** | Instant liquidity test excluding slow-moving inventory. |
| Debt-Equity Ratio (DER) | \(\frac{\text{Total Long-Term Debt}}{\text{Tangible Net Worth (Net Owned Funds)}}\) | **2 : 1** (or lower; 3:1 for infra projects) | Measures capital structure leverage and financial cushion of equity holders. |
| Interest Coverage Ratio (ICR) | \(\frac{\text{EBIT (Earnings Before Interest & Tax)}}{\text{Interest Expense}}\) | **\ge 2.00\text{ times}** | Measures ability to pay annual interest obligations from operating profits. |
| Debt Service Coverage Ratio (DSCR) | \(\frac{\text{PAT} + \text{Depreciation} + \text{Interest}}{\text{Interest} + \text{Principal Installment}}\) | **1.50 to 2.00** (Min 1.20) | Primary benchmark for sanctioning term loans. |
| Inventory Turnover Ratio (ITR) | \(\frac{\text{Cost of Goods Sold (COGS)}}{\text{Average Inventory}}\) | Higher indicates fast-moving stock | Detects inventory hoarding or obsolete stock build-up. |
| Debtors Collection Period | \(\frac{\text{Average Accounts Receivable}}{\text{Net Credit Sales}} \times 365\) | Within credit terms (e.g. 60–90 days) | Measures speed of realizing cash from credit customers. |

> 🎯 **Exam Anchor & Trap:**
> 🎯 Top Exam Traps on Ratio Analysis:
1. **Quick Ratio Exclusion:** When calculating Quick Assets, **Inventories and Prepaid Expenses are SUBTRACTED** from Current Assets.
2. **Tandon Committee Benchmark:** The standard minimum Current Ratio under Tandon Method 2 is **1.33:1**.
3. **Ideal Debt-Equity Ratio:** Standard acceptable commercial benchmark for Debt-Equity Ratio is **2:1**.

---

---

## 91. IIBF AFMB Unit 13: Capital Structure, Cost of Capital (WACC) & Leverage Mathematics

> 🧠 **Key Concept — IIBF Core Foundation: Financial Structuring & Leverage**
> Corporate finance evaluates the cost of debt versus equity and measures the risk magnification generated by fixed operating costs and financial obligations.

### 💰 1. Component Cost of Capital & WACC

• **Cost of Debt ($K_d$):**
  Interest payments on debt are tax-deductible, creating an effective corporate tax shield:
  $$K_d = I \times (1 - t)$$
  *(where $I$ = Interest rate on debt, $t$ = Corporate income tax rate)*.
• **Cost of Equity ($K_e$ via Capital Asset Pricing Model — CAPM):**
  $$K_e = R_f + \beta \times (R_m - R_f)$$
  *(where $R_f$ = Risk-free rate, $\beta$ = Beta coefficient of systematic risk, $R_m$ = Expected return of market portfolio, $(R_m - R_f)$ = Equity risk premium)*.
• **Weighted Average Cost of Capital (WACC / $K_o$):**
  $$\text{WACC} = \left(W_d \times K_d\right) + \left(W_e \times K_e\right) + \left(W_p \times K_p\right)$$
  *(where $W$ represents the proportion of each financing component in the capital structure)*.

### ⚙️ 2. The Three Dimensions of Leverage

```
  Sales Revenue ──(less Variable Costs)──► Contribution
         │
         ├── [Operating Leverage: Fixed Operating Costs]
         ▼
  EBIT (Earnings Before Interest & Taxes)
         │
         ├── [Financial Leverage: Fixed Financial Interest Charges]
         ▼
  EBT (Earnings Before Taxes) ──► Net Income ──► Earnings Per Share (EPS)
```

| Leverage Type | Mathematical Formula | Measures & Signifies |
| :--- | :--- | :--- |
| **Operating Leverage (OL)** | $$\text{OL} = \frac{\text{Contribution}}{\text{EBIT}}$$ | **Business Risk**: Magnification of EBIT resulting from changes in sales volume due to fixed operating costs. |
| **Financial Leverage (FL)** | $$\text{FL} = \frac{\text{EBIT}}{\text{EBT}} = \frac{\text{EBIT}}{\text{EBIT} - \text{Interest}}$$ | **Financial Risk**: Magnification of EPS resulting from changes in operating profit due to fixed debt interest charges. |
| **Combined Leverage (CL)** | $$\text{CL} = \text{OL} \times \text{FL} = \frac{\text{Contribution}}{\text{EBT}}$$ | **Total Risk**: Total percentage change in EPS for a given percentage change in sales revenue. |

> 🎯 **Top IIBF Traps for Unit 13:**
> 1. **Tax Shield on Dividends:** Interest on debt is **tax-deductible**; dividend payments on equity and preference shares are **NOT tax-deductible**.
> 2. **Zero Leverage Threshold:** If a firm has zero fixed operating costs, its **Operating Leverage is 1.0** (not 0). If a firm has no debt interest, its **Financial Leverage is 1.0**.

---
