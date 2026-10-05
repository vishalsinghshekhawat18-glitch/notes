# TIME VALUE OF MONEY (TVM) & COMPOUNDING ARITHMETIC

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Standard:** Macmillan 2023 Master Benchmark • Duplex A4 Monochrome Print Edition

The Time Value of Money (TVM) is the fundamental economic premise that a rupee received today possesses greater value than a rupee received in the future due to its earning capacity, inflation erosion, and default risk. In banking calculations, TVM governs deposit interest compounding, credit appraisal discounting, and the determination of the Effective Annual Rate (EAR).

## 1. Mathematical Formulas for Time Value of Money

### 1. Future Value (Compounding)
$$\text{FV} = \text{PV} \times (1 + r)^n = \text{PV} \times \left( 1 + \frac{r}{m} \right)^{m \times n}$$
- Where $\text{PV}$ = Present Value, $r$ = Annual interest rate, $n$ = Number of years, and $m$ = Number of compounding intervals per year (e.g., $m=4$ for quarterly compounding).

### 2. Present Value (Discounting)
$$\text{PV} = \frac{\text{FV}}{(1 + r)^n} = \text{FV} \times (1 + r)^{-n}$$

### 3. Continuous Compounding
$$\text{FV} = \text{PV} \times e^{r \times n}$$
- Where $e \approx 2.71828$ is Euler's mathematical constant.

### 4. Effective Annual Rate (EAR)
$$\text{EAR} = \left( 1 + \frac{r_{\text{nominal}}}{m} \right)^m - 1$$
- Reflects the true annualized yield realized by depositors when compounding occurs multiple times within a single year.

## 2. Rule of 72 and Rule of 114

| Shortcut Rule | Mathematical Objective | Computational Formula | Application Example |
| :--- | :--- | :--- | :--- |
| **Rule of 72** | Doubling Period of Investment | $$t_{\text{double}} \approx \frac{72}{r}$$ | At 8% interest p.a., funds double in approx $\frac{72}{8} = 9$ years. |
| **Rule of 114** | Tripling Period of Investment | $$t_{\text{triple}} \approx \frac{114}{r}$$ | At 6% interest p.a., funds triple in approx $\frac{114}{6} = 19$ years. |
| **Rule of 144** | Quadrupling Period of Investment | $$t_{\text{quadruple}} \approx \frac{144}{r}$$ | At 12% interest p.a., funds quadruple in approx $\frac{144}{12} = 12$ years. |

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In Indian commercial banking, **interest on term deposits is compounded quarterly** ($m=4$), while savings bank interest is calculated on a daily product basis and credited quarterly.
> 2. The Effective Annual Rate (EAR) is **always strictly greater** than the nominal rate whenever compounding occurs more frequently than once a year.
> 3. An increase in the discount rate decreases the Present Value of a given future cash flow.

## Practice Questions & Solved Numerical Drills

**Q1.** A customer deposits ₹1,00,000 in a fixed deposit for 1 year at a nominal interest rate of 12% per annum compounded quarterly. What is the Effective Annual Rate (EAR)?
- (A) 12.00%
- (B) 12.55%
- (C) 12.68%
- (D) 13.10%

**Q2.** Using the Rule of 72, approximately how many years will it take for an investment to double in value at an annual interest rate of 9%?
- (A) 7 Years
- (B) 8 Years
- (C) 9 Years
- (D) 10 Years

**Q3.** If the compounding frequency is increased from quarterly to monthly, what happens to the Future Value (FV) of an initial lump-sum deposit?
- (A) Decreases
- (B) Increases
- (C) Remains unchanged
- (D) Becomes zero

#### Solutions & Detailed Explanations

* Q1 Correct Answer: (B) 12.55%. EAR = (1 + r/m)^m − 1 = (1 + 0.12/4)^4 − 1 = (1.03)^4 − 1 = 1.125508 − 1 = 12.55%.

* Q2 Correct Answer: (B) 8 Years. Under the Rule of 72: Years = 72 / r = 72 / 9 = 8 years.

* Q3 Correct Answer: (B) Increases. More frequent compounding generates interest on accumulated interest earlier, systematically increasing the terminal Future Value.

## Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does an increase in the compounding frequency widen the gap between the Nominal Rate and the Effective Annual Rate?</summary>

Because interest earned in earlier intervals is added to the principal balance sooner, compounding over more periods and elevating the overall annual return above the stated nominal rate.
</details>

<details>
<summary>State the formula for calculating the Present Value under continuous discounting.</summary>

PV = FV × e^(−rt), where e is the base of natural logarithms (approx 2.71828), r is the annual discount rate, and t is the time horizon in years.
</details>

