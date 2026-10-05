# CAPITAL BUDGETING & LONG-TERM INVESTMENT DECISIONS

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Standard:** Macmillan 2023 Master Benchmark • Duplex A4 Monochrome Print Edition

Capital budgeting involves evaluating long-term investment outlays whose expected returns accrue across multi-year operating horizons. Because capital commitments are substantial and largely irreversible, banks and corporate treasuries employ non-discounting and discounting appraisal criteria—principally Net Present Value (NPV), Internal Rate of Return (IRR), and the Profitability Index (PI)—to allocate capital efficiently.

## 1. Master Comparison of Capital Budgeting Appraisal Techniques

| Appraisal Technique | Considers TVM? | Mathematical Formula / Acceptance Rule | Core Strengths & Practical Limitations |
| :--- | :--- | :--- | :--- |
| **Payback Period (PBP)** | ❌ No | $$\text{PBP} = \frac{\text{Initial Investment Outlay}}{\text{Annual Cash Inflow}}$$ | Simple liquidity indicator; completely ignores cash flows generated after the payback cutoff date. |
| **Accounting Rate of Return (ARR)** | ❌ No | $$\text{ARR} = \frac{\text{Average Annual PAT}}{\text{Average Investment}} \times 100$$ | Utilizes accounting net income rather than cash flows; ignores time value of money. |
| **Net Present Value (NPV)** | ✅ Yes | $$\text{NPV} = \sum_{t=1}^n \frac{C_t}{(1 + k)^t} - C_0$$. Accept if $$\text{NPV} > 0$$ | Theoretically superior; maximizes shareholder net worth; assumes cash flows reinvested at Cost of Capital ($k$). |
| **Internal Rate of Return (IRR)** | ✅ Yes | Discount rate $r$ at which $$\text{NPV} = 0$$. Accept if $$\text{IRR} > k$$ | Highly intuitive rate of return; assumes unrealistic reinvestment at the project IRR. |
| **Profitability Index (PI)** | ✅ Yes | $$\text{PI} = \frac{\text{Present Value of Inflows}}{\text{Initial Outlay}}$$. Accept if $$\text{PI} > 1.0$$ | Essential for capital rationing when capital budget is constrained. |

## 2. Resolving NPV vs IRR Conflicts in Mutually Exclusive Projects

When two mutually exclusive capital projects give contradictory rankings under NPV and IRR (due to scale differences or timing of cash flows):
- **Superiority of NPV:** **NPV must ALWAYS be adopted** because it directly measures the absolute monetary addition to shareholder wealth, whereas IRR is a relative percentage rate that can mislead on project scale.
- **Reinvestment Rate Assumption:**
  - NPV realistically assumes project interim cash inflows are reinvested at the **firm's Cost of Capital ($k$)**.
  - IRR unrealistically assumes interim cash flows are reinvested at the project's own **Internal Rate of Return ($r$)**.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In capital budgeting, appraisal is performed on **Cash Inflows after Tax but BEFORE Depreciation** ($\text{CFAT} = \text{PAT} + \text{Depreciation}$), never on accounting profits.
> 2. Depreciation itself is not a cash outflow, but it creates a valuable **Tax Shield** ($D \times t$).
> 3. Sunk costs (prior expenditures that cannot be altered) must be **completely excluded** from project evaluation.

## Practice Questions & Solved Numerical Drills

**Q1.** When evaluating two mutually exclusive investment projects with conflicting rankings between Net Present Value (NPV) and Internal Rate of Return (IRR), which criteria should be followed?
- (A) Follow IRR because it is a percentage rate
- (B) Follow Payback Period to ensure liquidity
- (C) Follow NPV because it maximizes absolute shareholder wealth
- (D) Take an arithmetic average of NPV and IRR

**Q2.** In capital budgeting cash flow forecasting, Cash Flow After Tax (CFAT) is calculated as:
- (A) Operating Profit − Taxes
- (B) Profit After Tax + Depreciation
- (C) Profit Before Tax + Interest
- (D) Sales Revenue − Total Fixed Cost

**Q3.** A project costs ₹10,00,000 and generates a constant annual cash inflow of ₹2,50,000. What is its simple Payback Period?
- (A) 2.5 Years
- (B) 4.0 Years
- (C) 5.0 Years
- (D) 3.5 Years

#### Solutions & Detailed Explanations

* Q1 Correct Answer: (C) Follow NPV because it maximizes absolute shareholder wealth. Corporate financial theory dictates that NPV is universally superior under mutually exclusive scenarios.

* Q2 Correct Answer: (B) Profit After Tax + Depreciation. Because depreciation is a non-cash expense deducted to calculate taxes, it must be added back to PAT to determine actual operational cash generation.

* Q3 Correct Answer: (B) 4.0 Years. Payback Period = Initial Outlay / Annual Cash Inflow = 10,00,000 / 2,50,000 = 4.0 years.

## Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does the Profitability Index (PI) serve as the optimal decision rule under capital rationing?</summary>

Because when an enterprise has a fixed capital budget ceiling, PI ranks projects by the present value generated per rupee of capital expenditure (Benefit-Cost ratio), allowing maximization of aggregate NPV within the budget limit.
</details>

<details>
<summary>What is a "Sunk Cost", and why is it excluded from capital budgeting cash flows?</summary>

A sunk cost is an expenditure already incurred in the past that cannot be recovered or altered regardless of future decisions (e.g., preliminary feasibility study costs). It is excluded because it does not represent an incremental future cash flow.
</details>

