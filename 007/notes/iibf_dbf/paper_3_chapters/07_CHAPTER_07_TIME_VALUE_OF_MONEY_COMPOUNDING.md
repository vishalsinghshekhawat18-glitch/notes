# TIME VALUE OF MONEY, INTEREST, COMPOUNDING & FINANCIAL MATHEMATICS

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** B (Financial Mathematics and Bank Financial Statements)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
The Time Value of Money (TVM) is the bedrock of banking and modern corporate finance. A rupee in hand today is worth more than a rupee promised in the future because of three universal economic realities: investment opportunity cost (earning power), purchasing power erosion (inflation), and counterparty default risk. In commercial banking, TVM governs the pricing of retail term deposits, calculating loan repayment schedules, discounting trade bills, evaluating term loans, and appraising project feasibility.

## 2. Core Principles: Simple vs. Compound Interest

```
+----------------------------------------------------------------------------------------------------+
|                                SIMPLE vs COMPOUND INTEREST IN BANKING                              |
+----------------------------------------------------------------------------------------------------+
| Parameter             | Simple Interest (SI)                  | Compound Interest (CI)             |
+-----------------------+---------------------------------------+------------------------------------+
| Principal Base        | Fixed on the original principal       | Grows as accrued interest is added |
| Annual Interest       | Constant every year                   | Increases each successive period   |
| Mathematical Formula  | $SI = \frac{P \times r \times t}{100}$| $CI = P \left(1 + \frac{r}{m}\right)^{m \cdot t} - P$|
| Banking Application   | Commercial paper yield; call loans    | Term deposits (quarterly compounding)|
+-----------------------+---------------------------------------+------------------------------------+
```

## 3. Mathematical Formula Architecture

### Formula 1: Future Value under Discrete Compounding
$$\text{FV} = \text{PV} \times \left(1 + \frac{r}{m}\right)^{m \times t}$$
- **Symbols:** $\text{PV}$ = Present Value; $r$ = Annual nominal interest rate (decimal); $m$ = Compounding frequency per year ($m=1$ Annual, $m=2$ Semi-annual, $m=4$ Quarterly, $m=12$ Monthly); $t$ = Tenor in years.
- **When to Use:** Evaluating terminal maturity amounts on recurring and fixed term deposits.
- **Common Mistake:** Forgetting to divide the annual rate by $m$ or forgetting to multiply time $t$ by $m$.

### Formula 2: Present Value under Discrete Discounting
$$\text{PV} = \frac{\text{FV}}{\left(1 + \frac{r}{m}\right)^{m \times t}} = \text{FV} \times \left(1 + \frac{r}{m}\right)^{-m \times t}$$
- **Symbols:** Same as Formula 1.
- **When to Use:** Determining what lump sum must be invested today to receive a target future amount, or discounting future project cash inflows to baseline date.
- **Common Mistake:** Applying a simple interest division instead of compounding denominator.

### Formula 3: Effective Annual Rate (EAR)
$$\text{EAR} = \left(1 + \frac{r_{\text{nominal}}}{m}\right)^m - 1$$
- **Symbols:** $r_{\text{nominal}}$ = Stated contractual rate; $m$ = Compounding intervals per annum.
- **When to Use:** Comparing loan products or deposit yields with different compounding frequencies on an apples-to-apples basis.
- **Common Mistake:** Assuming EAR equals nominal rate. Whenever $m > 1$, $\text{EAR} > r_{\text{nominal}}$.

### Formula 4: Continuous Compounding
$$\text{FV} = \text{PV} \times e^{r \times t} \quad \text{and} \quad \text{PV} = \text{FV} \times e^{-r \times t}$$
- **Symbols:** $e \approx 2.7182818$ (Euler's mathematical constant).
- **When to Use:** Theoretical finance, continuous cash flow models, derivatives pricing.
- **Common Mistake:** Confusing discrete quarterly compounding with continuous compounding.

## 4. Master Mathematical Shortcut Rules

| Rule | Purpose | Mathematical Formula | Banking Example |
| :--- | :--- | :--- | :--- |
| **Rule of 72** | Doubling Period | $t_{\text{double}} \approx \frac{72}{r}$ | At 8% interest p.a., capital doubles in approx $\frac{72}{8} = 9$ years. |
| **Rule of 114** | Tripling Period | $t_{\text{triple}} \approx \frac{114}{r}$ | At 6% interest p.a., capital triples in approx $\frac{114}{6} = 19$ years. |
| **Rule of 144** | Quadrupling Period | $t_{\text{quadruple}} \approx \frac{144}{r}$ | At 12% interest p.a., capital quadruples in approx $\frac{144}{12} = 12$ years. |

## 5. Worked Example: Step-by-Step Numerical
**Problem:** A depositor places ₹2,00,000 in a fixed deposit for 3 years at a nominal rate of 8% per annum compounded quarterly ($m=4$).
1. Calculate the maturity amount (Future Value).
2. Calculate the Effective Annual Rate (EAR).

**Solution Step-by-Step:**
- **Step 1: Identify inputs:**
  - $\text{PV} = \text{₹2,00,000}$
  - $r = 0.08$
  - $m = 4$
  - Periodic rate $i = \frac{0.08}{4} = 0.02$ (2% per quarter)
  - Total periods $N = 4 \times 3 = 12$ quarters
- **Step 2: Calculate Future Value:**
  $$\text{FV} = 2,00,000 \times (1 + 0.02)^{12} = 2,00,000 \times (1.02)^{12}$$
  - $(1.02)^{12} \approx 1.268242$
  $$\text{FV} = 2,00,000 \times 1.268242 = \text{₹2,53,648.40}$$
- **Step 3: Calculate Effective Annual Rate (EAR):**
  $$\text{EAR} = \left(1 + \frac{0.08}{4}\right)^4 - 1 = (1.02)^4 - 1 = 1.082432 - 1 = 0.082432 = \mathbf{8.243\%}$$
- **Step 4: Interpretation:**
  While the nominal stated rate is 8.00%, quarterly compounding delivers an actual annual return of 8.243%.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In Indian commercial banking, **term deposit interest is compounded quarterly** ($m=4$). Savings bank interest is calculated on a daily product basis and credited quarterly.
> 2. The Effective Annual Rate is **strictly greater** than the nominal rate whenever intra-year compounding occurs ($m > 1$).
> 3. An increase in the discount rate decreases the Present Value of a future cash flow.

## 6. Practice Questions & Solved Numerical Drills

**Q1.** What is the Effective Annual Rate (EAR) of a deposit offering 12% per annum compounded monthly ($m=12$)?
- (A) 12.00%
- (B) 12.68%
- (C) 12.55%
- (D) 13.04%

**Q2.** An investor wants to accumulate ₹10,00,000 after 5 years. If the bank offers 10% compounded annually, how much must be deposited today?
- (A) ₹6,20,921
- (B) ₹5,00,000
- (C) ₹6,66,667
- (D) ₹7,14,286

**Q3.** Using the Rule of 72, if an investment doubles in 6 years, what is the approximate annual compounding rate?
- (A) 8%
- (B) 10%
- (C) 12%
- (D) 14%

#### Solutions & Explanations
* Q1 Correct Answer: (B) 12.68%. Periodic rate = $12\% / 12 = 1\% = 0.01$. $\text{EAR} = (1 + 0.01)^{12} - 1 = (1.01)^{12} - 1 \approx 1.126825 - 1 = 12.68\%$.
* Q2 Correct Answer: (A) ₹6,20,921. $\text{PV} = \frac{10,00,000}{(1.10)^5} = \frac{10,00,000}{1.61051} = \text{₹6,20,921.32}$.
* Q3 Correct Answer: (C) 12%. Under Rule of 72: $r \approx \frac{72}{t} = \frac{72}{6} = 12\%$.

## 7. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does continuous compounding represent the mathematical upper limit of intra-year compounding?</summary>

Because as the compounding frequency $m$ approaches infinity, the term $(1 + r/m)^m$ converges mathematically to Euler's exponential constant $e^r$. No discrete interval (daily, hourly, or by the second) can yield more than $PV \times e^{rt}$.
</details>

<details>
<summary>How does the discount rate affect the Present Value of a distant cash flow?</summary>

The Present Value is inversely related to the discount rate. A higher discount rate exponentially compresses the present worth of future cash inflows.
</details>

## 8. Last-Minute Revision Box
- Discrete Compounding: $\text{FV} = \text{PV} (1 + r/m)^{mt}$.
- Effective Rate: $\text{EAR} = (1 + r/m)^m - 1$.
- Continuous Compounding: $\text{FV} = \text{PV} \cdot e^{rt}$; $\text{PV} = \text{FV} \cdot e^{-rt}$.
- Rule of 72: Doubling time $\approx 72/r$; Rule of 114: Tripling time $\approx 114/r$.
- Quarterly Compounding: Standard benchmark for Indian bank fixed deposits ($m=4$).
