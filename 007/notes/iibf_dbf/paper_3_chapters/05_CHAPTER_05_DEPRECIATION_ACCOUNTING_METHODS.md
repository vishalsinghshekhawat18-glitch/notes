# DEPRECIATION, AMORTISATION & CAPITAL/REVENUE TREATMENT

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** A (Accounting Principles and Processes)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
Depreciation represents the systematic allocation of the depreciable amount of a tangible fixed asset over its estimated useful economic life. In banking, analyzing depreciation is critical for two distinct reasons: first, depreciation is a non-cash operating charge added back to net profit to compute Cash Flow After Tax (CFAT) for term loan and DSCR appraisal; second, tax depreciation under Section 32 of the Income Tax Act dictates the corporate tax shield and net cash flows of corporate borrowers.

## 2. Core Concepts: Causes & Governing Standards
Under **Ind AS 16 (Property, Plant and Equipment)** and **AS 10**, depreciation is mandated by the **Matching Concept** and the **Accrual Concept** to match the cost of an asset against the revenues it generates over its working life.
- **Causes of Value Decline:**
  1. *Physical Wear & Tear:* Deterioration arising from active usage and operations.
  2. *Passage of Time (Effluxion of Time):* Inevitable decline in value through ageing (e.g. leasehold rights, patents).
  3. *Obsolescence:* Technological advancements, market shifts, or regulatory prohibitions rendering an existing asset economically obsolete before physical breakdown.
  4. *Depletion:* Exhaustion of natural resources through commercial extraction (e.g. mines, oil wells, quarries).
- **Freehold Land vs. Finite Interests:**
  > Freehold land generally has an indefinite useful economic life and is normally not depreciated under accounting frameworks. However, assets or interests in land with finite useful lives—such as leasehold land, quarry sites, landfill properties, or mining concessions—require systematic amortisation or depletion over their contractual or productive terms.

## 3. Mathematical Methods of Depreciation

### Method 1: Straight Line Method (SLM) / Fixed Installment Method
A uniform, constant charge is written off each year against profits:
$$\text{Annual Depreciation} = \frac{\text{Original Cost} - \text{Estimated Residual (Scrap) Value}}{\text{Estimated Useful Economic Life (Years)}}$$
$$\text{Depreciation Rate (\%)} = \frac{\text{Annual Depreciation}}{\text{Original Cost}} \times 100$$
- *Terminal Characteristic:* Reduces the asset's book value to its exact salvage value or zero at the end of its life.

### Method 2: Written Down Value (WDV) / Diminishing Balance Method
A constant percentage is applied annually to the opening reducing book value:
$$\text{Annual Charge} = \text{Opening Book Value of Year } t \times r$$
$$\text{WDV Rate } r = 1 - \left( \frac{\text{Residual Value}}{\text{Original Cost}} \right)^{1/n}$$
- *Terminal Characteristic:* The book value mathematically approaches zero asymptotically but never reaches absolute zero.
- *Equalized Operating Burden:* In later years, as machine repair and maintenance costs escalate, the diminishing depreciation charge offsets the rising repair bills, stabilizing the combined annual burden on the P&L statement.

### Method 3: Sum of the Years' Digits (SYD) Method
An accelerated depreciation method applying a declining fraction to the total depreciable base $(\text{Cost} - \text{Scrap})$:
$$\text{Depreciation for Year } t = (\text{Cost} - \text{Scrap}) \times \frac{n - t + 1}{\sum_{i=1}^n i}$$
$$\text{Sum of Years' Digits } S = \frac{n(n + 1)}{2}$$

### Method 4: Units of Production / Machine Hour Method
Allocates depreciation directly proportional to actual machine hours logged or units produced during the period:
$$\text{Depreciation Charge} = (\text{Cost} - \text{Scrap}) \times \frac{\text{Hours Used / Units Produced in Year}}{\text{Total Estimated Lifetime Hours / Units}}$$

## 4. Master Comparative Framework: SLM vs. WDV

| Dimension | Straight Line Method (SLM) | Written Down Value (WDV) |
| :--- | :--- | :--- |
| **Calculation Base** | Constant on **Original Acquisition Cost** | Recomputed annually on **Reducing Book Value** |
| **Annual P&L Charge** | Uniform and constant every year | Declining each subsequent year |
| **Combined Burden (Depreciation + Repairs)** | **Unequal:** Combined burden escalates as repairs increase in later years | **Equalized:** Declining depreciation offsets rising repair bills |
| **Terminal Value** | Reduces precisely to salvage value or zero | Never reaches zero mathematically |
| **Statutory Tax Acceptance (Income Tax)** | Permitted only for power-generating entities opting for SLM under Section 32 | **Mandatorily enforced** across all corporate asset blocks |
| **Component Approach (Ind AS 16)** | Permitted for distinct parts with differing lives | Permitted; applied across asset components |

## 5. Ind AS 16 Accounting Estimates & Intangible Amortisation (Ind AS 38)
- **Change in Accounting Estimate:** Under Ind AS 8 and Ind AS 16, a change in depreciation method, useful life, or residual value is treated strictly as a **Change in Accounting Estimate**, applied **prospectively** across remaining life (NOT retrospectively).
- **Amortisation of Intangible Assets (Ind AS 38):** Systematic write-off of identifiable non-monetary assets without physical substance (Goodwill, Computer Software, Patents, Trademarks) over their estimated economic life. Indefinite-lived intangibles are tested annually for impairment rather than amortised.

## 6. Income Tax Framework: Section 32 & The Block of Assets
Under direct tax statutes (Income Tax Act 1961 / Income-tax Act 2025 framework):
1. **Block of Assets Concept:** Depreciation is calculated on the aggregate Written Down Value of a predefined "Block of Assets" having the same statutory percentage (e.g. Plant & Machinery 15%, Computers 40%, Buildings 10%), NOT on individual separate machines.
2. **The 180-Day Rule:** If an asset is acquired and put to commercial use for **fewer than 180 days** during the financial year of purchase, only **50% of the normal statutory depreciation percentage** is allowable for that tax year.

## 7. Worked Numerical: Partial Period & WDV Calculation
**Scenario:** On 1 October, a corporate borrower purchases plant for ₹10,00,000. Depreciation is charged at 20% p.a. under WDV. Financial year ends 31 March.
- *Year 1:* Asset put to use on 1 October (used for exactly 6 months = 182 days).
  $$\text{Depreciation Year 1} = 10,00,000 \times 20\% \times \frac{6}{12} = \text{₹1,00,000}$$
  $$\text{Closing WDV Year 1} = 10,00,000 - 1,00,000 = \text{₹9,00,000}$$
- *Year 2:* Asset used for full 12 months.
  $$\text{Depreciation Year 2} = 9,00,000 \times 20\% = \text{₹1,80,000}$$
  $$\text{Closing WDV Year 2} = 9,00,000 - 1,80,000 = \text{₹7,20,000}$$

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Do NOT state that "Land is never depreciated." **Freehold land** generally has an indefinite life, but leasehold land and quarries must be amortised or depleted.
> 2. Under the Income Tax Act, depreciation is calculated on the **WDV of the Block of Assets**, not on individual machines.
> 3. If an asset is put to use for **less than 180 days**, tax rules restrict depreciation to **50% of the normal rate**.
> 4. A change in depreciation method under Ind AS 16 is treated as a **change in accounting estimate (prospective)**, NOT a change in accounting policy (retrospective).

## 8. Practice Questions & Solved Numerical Drills

**Q1.** A manufacturing machine costing ₹4,00,000 has an estimated scrap value of ₹40,000 and an estimated life of 6 years. Under the Sum of the Years' Digits (SYD) method, what is the depreciation charge for the first year?
- (A) ₹60,000
- (B) ₹1,02,857
- (C) ₹1,14,286
- (D) ₹85,714

**Q2.** An asset purchased for ₹5,00,000 on 1 December is put to use immediately. For corporate income tax purposes, if the normal depreciation rate is 15%, what percentage is deductible in the year of acquisition?
- (A) 15.0%
- (B) 7.5%
- (C) 10.0%
- (D) 0.0%

**Q3.** Under Ind AS 16, a revision in the estimated useful economic life or residual value of a fixed asset is accounted for:
- (A) Retrospectively by adjusting opening retained earnings
- (B) Prospectively by allocating the unamortised balance over the remaining life
- (C) As an extraordinary item in the Profit & Loss statement
- (D) Through a prior-period adjustment routed via Suspense Account

#### Solutions & Explanations
* Q1 Correct Answer: (B) ₹1,02,857. Depreciable base = Cost − Scrap = ₹4,00,000 − ₹40,000 = ₹3,60,000. Sum of digits for 6 years = $6(7)/2 = 21$. First year fraction = $6/21$. Depreciation = $3,60,000 \times (6/21) = \text{₹1,02,857}$.
* Q2 Correct Answer: (B) 7.5%. From 1 December to 31 March is 121 days (< 180 days). Under Section 32, the allowable rate is halved to $15\% \times 50\% = 7.5\%$.
* Q3 Correct Answer: (B) Prospectively. Revisions of useful life or residual value are changes in accounting estimates, applied prospectively over remaining periods.

## 9. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does the WDV method provide a more stable total operating charge (depreciation + repairs) than SLM?</summary>

Because repair bills increase as an asset ages. Under WDV, depreciation charges decline every year, offsetting rising repair expenses and equalizing the combined burden across the asset's working life.
</details>

<details>
<summary>What is the difference between Depletion and Amortisation?</summary>

Depletion is the systematic write-off of natural resource exhaustion (mines, quarries, timber). Amortisation is the systematic write-off of finite-lived intangible assets (software, patents, trademarks).
</details>

## 10. Last-Minute Revision Box
- SLM: Equal annual installment; reduces book value to exact salvage value.
- WDV: Declining annual installment; equalizes total cost (depreciation + repairs); never reaches zero.
- SYD Method: Accelerated method using sum of years fraction $\frac{n(n+1)}{2}$.
- Ind AS 16: Change in method/life is a **Change in Accounting Estimate (Prospective)**.
- Income Tax Sec 32: WDV on **Block of Assets**; **180-Day Rule** restricts first-year rate to 50%.
- Freehold Land: Indefinite useful life (no depreciation); Leasehold Land: Amortised over lease term.
