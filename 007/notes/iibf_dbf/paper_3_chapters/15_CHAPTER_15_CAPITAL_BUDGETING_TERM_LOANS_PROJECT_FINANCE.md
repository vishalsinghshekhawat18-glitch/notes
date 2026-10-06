# CAPITAL BUDGETING, TERM LOANS & PROJECT FINANCE APPRAISAL

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** C (Financial Management)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
Capital budgeting decisions represent irreversible long-term financial commitments in physical plant, machinery, infrastructure, and technology. For commercial banks, term loan and project finance underwriting requires evaluating whether a proposed industrial or infrastructure project will generate sufficient future cash flows to service term debt interest and principal repayments without default. Understanding discounted cash flow (DCF) techniques, project viability pillars, and Deferred Payment Guarantees (DPGs) is pivotal for term lending operations.

## 2. Core Framework: Relevant Cash Flows & The CFAT Metric
In capital budgeting appraisal, decisions are based strictly on **incremental economic cash flows**, NOT accounting net profits:
- **Cash Flow After Tax (CFAT):**
  $$\mathbf{\text{CFAT} = \text{Profit After Tax (PAT)} + \text{Depreciation}}$$
  $$\text{Alternatively: } \text{CFAT} = (\text{EBIT} - \text{Interest}) \times (1 - t) + \text{Depreciation} = (\text{Revenues} - \text{Cash Costs}) \times (1 - t) + (\text{Depreciation} \times t)$$
  - *Depreciation Tax Shield:* Although depreciation is a non-cash expense, it provides a valuable tax shield equal to $\text{Depreciation} \times t$.
- **Cash Flow Components of a Project:**
  1. *Initial Outlay (Year 0):* Asset purchase cost + Freight + Installation + Initial working capital margin − Salvage value of old asset (net of tax).
  2. *Operating Cash Inflows (Years 1 to $n$):* Annual CFAT generated from operations.
  3. *Terminal Cash Flow (Year $n$):* Final year CFAT + Net salvage value realized + Recovery of initial working capital margin.
- **Cash Flow Rules:**
  - *Sunk Costs:* Historical costs already incurred (e.g. preliminary market research fees) must be **completely excluded**.
  - *Opportunity Costs:* Benefits foregone by deploying existing assets in the project must be **included**.
  - *Financing Costs:* Interest charges are normally excluded from operating cash flows because they are incorporated in the discount rate (Cost of Capital).

## 3. Master Capital Budgeting Appraisal Techniques

```
+----------------------------------------------------------------------------------------------------+
|                                CAPITAL BUDGETING APPRAISAL TECHNIQUES                              |
+----------------------------------------------------------------------------------------------------+
| Technique             | Decision Rule for Acceptance          | Key Theoretical Merit / Limitation |
+-----------------------+---------------------------------------+------------------------------------+
| Payback Period (PBP)  | Accept if PBP $\le$ Target Cutoff     | Simple liquidity gauge; ignores TVM|
|                       |                                       | and post-payback cash flows        |
| Accounting Rate of    | Accept if ARR $\ge$ Target Cutoff     | Uses accounting profit; ignores    |
| Return (ARR)          | $\text{ARR} = \frac{\text{Average PAT}}{\text{Average Investment}} \times 100$ | cash flows and time value of money |
| Net Present Value     | Accept if **NPV > 0**                 | Direct measure of shareholder      |
| (NPV)                 | $\text{NPV} = \sum \frac{C_t}{(1+k)^t} - I_0$ | wealth creation; accounts for TVM  |
| Internal Rate of      | Accept if **IRR > Cost of Capital ($k$)**| Discount rate equating NPV to ZERO;|
| Return (IRR)          | $NPV = 0 \iff \sum \frac{C_t}{(1+r)^t} = I_0$ | Assumes reinvestment at IRR itself |
| Profitability Index   | Accept if **PI > 1.00**               | Evaluates efficiency per rupee     |
| (PI / Benefit-Cost)   | $\text{PI} = \frac{\text{PV of Cash Inflows}}{\text{Initial Investment}}$ | invested; crucial under rationing  |
+-----------------------+---------------------------------------+------------------------------------+
```

## 4. Mutually Exclusive Projects: The NPV vs. IRR Conflict
When evaluating mutually exclusive projects (choosing Project A precludes Project B), NPV and IRR rankings can conflict due to differences in project scale, cash flow timing, or useful economic life:
- **Theoretical Reinvestment Rate Assumption:**
  - **NPV assumes** cash inflows are reinvested at the firm's **Cost of Capital ($k$)**, which is realistic and achievable in capital markets.
  - **IRR assumes** cash inflows are reinvested at the **project's internal rate of return (IRR)**, which is often unrealistic when IRR is exceptionally high (e.g. 40%).
- **Decision Hierarchy:**
  > For mutually exclusive projects with equal scale and life, **NPV is generally preferred** because it measures the absolute economic value added to shareholder wealth. However, method selection depends on project constraints, capital rationing, and specific decision context.

## 5. Bank Term Loans & Project Appraisal Framework
Unlike short-term working capital facilities (Cash Credit/Overdraft), term loans are extended for capital assets (plant, machinery, construction) with repayment spread over 3 to 15 years:
- **Repayment Amortization:** Executed via equated quarterly or monthly installments, typically including an initial **Moratorium / Grace Period** during project construction.
- **Project Appraisal Pillars in Commercial Banking:**
  1. *Technical Feasibility:* Suitability of technology, plant location, availability of raw materials, power, and environmental clearances.
  2. *Commercial Feasibility:* Market demand, competition, pricing power, and supply chain logistics.
  3. *Financial Viability:* Debt-Equity ratio (normally 2:1 or lower), Debt Service Coverage Ratio (DSCR benchmark 1.50–2.00), Sensitivity analysis, and Break-Even Point.
  4. *Managerial Competence:* Track record, integrity, CIBIL/bureau standing, and promoter capital commitment.
  5. *Economic & Environmental Viability:* Employment generation, foreign exchange earnings, and ESG compliance.

## 6. Deferred Payment Guarantees (DPG)
- **Concept:** A guarantee issued by a bank on behalf of an industrial borrower purchasing capital goods (machinery) on deferred payment credit terms from domestic or foreign machinery manufacturers.
- **Banking Role:** The supplier provides delivery of machinery, and the bank guarantees that the buyer will pay the periodic installments over the credit tenure. If the buyer defaults, the bank makes the payment to the supplier and recovers the debt from the buyer.
- **Credit Assessment:** DPGs carry the same credit risk as a funded term loan; banks evaluate them against term loan appraisal criteria and require adequate security margins.

## 7. Worked Numerical: NPV, IRR & PI Appraisal
**Scenario:** A company evaluates an equipment investment requiring an initial outlay of ₹2,00,000. Expected cash inflows (CFAT) over 3 years: Year 1 = ₹1,00,000; Year 2 = ₹80,000; Year 3 = ₹60,000. The cost of capital is 10%.
- PV Factors at 10%: Year 1 = 0.909; Year 2 = 0.826; Year 3 = 0.751.

**Solution Step-by-Step:**
1. **Calculate Present Value of Inflows:**
   $$\text{PV Year 1} = 1,00,000 \times 0.909 = \text{₹90,900}$$
   $$\text{PV Year 2} = 80,000 \times 0.826 = \text{₹66,080}$$
   $$\text{PV Year 3} = 60,000 \times 0.751 = \text{₹45,060}$$
   $$\text{Total PV of Inflows} = 90,900 + 66,080 + 45,060 = \mathbf{\text{₹2,02,040}}$$
2. **Calculate Net Present Value (NPV):**
   $$\text{NPV} = \text{PV of Inflows} - \text{Initial Investment} = 2,02,040 - 2,00,000 = \mathbf{+\text{₹2,040}}$$
   *(Since NPV > 0, project is financially acceptable).*
3. **Calculate Profitability Index (PI):**
   $$\text{PI} = \frac{\text{PV of Inflows}}{\text{Initial Investment}} = \frac{2,02,040}{2,00,000} = \mathbf{1.0102}$$
   *(Since PI > 1.00, project generates a positive net surplus per rupee invested).*

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In capital budgeting, appraisal is performed on **Cash Flow After Tax (CFAT = PAT + Depreciation)**, NOT accounting net profit.
> 2. Sunk costs (historical money already spent) must be **completely excluded** from project cash flows.
> 3. NPV assumes cash flows are reinvested at the **Cost of Capital ($k$)**, whereas IRR assumes reinvestment at the **IRR itself**.
> 4. For mutually exclusive projects, NPV is **generally preferred** because it measures absolute economic wealth added.

## 8. Practice Questions & Solved Numerical Drills

**Q1.** A project requires an initial investment of ₹5,00,000 and yields annual Cash Flow After Tax (CFAT) of ₹1,25,000 for 6 years. What is its simple Payback Period?
- (A) 3.5 Years
- (B) 4.0 Years
- (C) 4.5 Years
- (D) 5.0 Years

**Q2.** Which capital budgeting technique assumes that interim project cash inflows are reinvested at the firm's cost of capital?
- (A) Internal Rate of Return (IRR)
- (B) Net Present Value (NPV)
- (C) Accounting Rate of Return (ARR)
- (D) Simple Payback Period

**Q3.** In commercial bank project appraisal, a Deferred Payment Guarantee (DPG) issued for machinery purchase is treated for risk appraisal purposes as:
- (A) A risk-free non-funded agency transaction
- (B) Equivalent to a funded term loan with identical credit appraisal standards
- (C) A short-term clean overdraft
- (D) A trade bill of exchange

#### Solutions & Explanations
* Q1 Correct Answer: (B) 4.0 Years. $\text{Payback Period} = \frac{\text{Initial Outlay}}{\text{Annual CFAT}} = \frac{5,00,000}{1,25,000} = \mathbf{4.0 \text{ Years}}$.
* Q2 Correct Answer: (B) Net Present Value (NPV). NPV assumes reinvestment at the cost of capital, whereas IRR assumes reinvestment at the internal rate of return.
* Q3 Correct Answer: (B) Equivalent to a funded term loan with identical credit appraisal standards. If the buyer defaults on installment payments, the bank must pay the supplier, creating funded exposure.

## 9. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why is the Profitability Index (PI) superior to NPV when selecting projects under Capital Rationing?</summary>

Because under capital rationing (where capital budget is fixed and limited), PI measures the benefit generated per rupee of capital outlay, allowing the firm to rank and select the combination of projects that maximizes total wealth within the capital ceiling.
</details>

<details>
<summary>What is the difference between Technical Feasibility and Financial Viability in project appraisal?</summary>

Technical feasibility tests whether the project can physically function (technology, inputs, location, capacity). Financial viability tests whether the project will generate sufficient cash flows and returns (NPV, IRR, DSCR) to service debt and yield a profit.
</details>

## 10. Last-Minute Revision Box
- Cash Flow Metric: $\text{CFAT} = \text{PAT} + \text{Depreciation} = (\text{EBIT} - I)(1 - t) + \text{Depreciation}$.
- Decision Rules: $\text{NPV} > 0$; $\text{IRR} > k$; $\text{PI} > 1.00$.
- Reinvestment Rate: NPV assumes Cost of Capital ($k$); IRR assumes IRR itself.
- Sunk Costs: Excluded from cash flows; Opportunity Costs: Included.
- Deferred Payment Guarantee (DPG): Evaluated with the same credit rigor as a funded term loan.
