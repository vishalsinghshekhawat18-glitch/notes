# ANNUITIES, EQUATED MONTHLY INSTALLMENTS (EMI) & SINKING FUNDS

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Standard:** Macmillan 2023 Master Benchmark • Duplex A4 Monochrome Print Edition

An annuity is a finite stream of equal cash flows occurring at regular intervals. In retail and corporate finance, annuity formulas govern term loan amortizations, equated monthly installments (EMIs), bond coupon streams, and corporate sinking funds established for debenture redemption.

## 1. Ordinary Annuity vs Annuity Due & Perpetuities

### 1. Ordinary Annuity (Payments at the END of each period)
$$\text{PV}_{\text{Ordinary Annuity}} = C \times \left[ \frac{1 - (1 + r)^{-n}}{r} \right]$$
$$\text{FV}_{\text{Ordinary Annuity}} = C \times \left[ \frac{(1 + r)^n - 1}{r} \right]$$

### 2. Annuity Due (Payments at the BEGINNING of each period)
$$\text{PV}_{\text{Annuity Due}} = \text{PV}_{\text{Ordinary Annuity}} \times (1 + r)$$
$$\text{FV}_{\text{Annuity Due}} = \text{FV}_{\text{Ordinary Annuity}} \times (1 + r)$$
- *Key Axiom:* The value of an Annuity Due is **always greater by a factor of $(1 + r)$** because every payment earns interest for one additional compounding period.

### 3. Perpetuity & Growing Perpetuity
$$\text{PV}_{\text{Perpetuity}} = \frac{C}{r}$$
$$\text{PV}_{\text{Growing Perpetuity}} = \frac{C}{r - g} \quad (\text{where } r > g)$$

## 2. Equated Monthly Installment (EMI) Formula

$$\text{EMI} = \frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}$$
- Where $P$ = Loan Principal sanctioned, $r$ = Monthly interest rate (Annual rate $/ 12$), and $n$ = Loan tenure in total months.
- **Loan Amortization Dynamics:**
  - In initial installments, the **Interest component is largest** and the Principal repayment component is smallest.
  - As outstanding principal declines over the loan tenure, the **Interest component steadily decreases** while the Principal repayment component steadily increases.

## 3. Sinking Fund Factor

$$\text{Annual Deposit (Sinking Fund)} = \text{Target Future Sum} \times \left[ \frac{r}{(1 + r)^n - 1} \right]$$
- Used by companies to systematically accumulate funds to redeem debentures or replace depreciated plant machinery at a targeted future date.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **Annuity Due Factor:** $\text{Value of Annuity Due} = \text{Value of Ordinary Annuity} \times (1 + r)$.
> 2. In EMI calculation, $r$ is the **monthly rate** ($r_{\text{annual}} / 12$), NOT the annual percentage rate, and $n$ is the **number of months**, not years.
> 3. For a perpetuity, the present value is simply the periodic payment divided by the interest rate ($C/r$).

## Practice Questions & Solved Numerical Drills

**Q1.** How does the Present Value of an Annuity Due compare to the Present Value of an Ordinary Annuity for the same cash flow, rate, and period?
- (A) Equal
- (B) Higher by a factor of (1 + r)
- (C) Lower by a factor of (1 + r)
- (D) Lower by half the periodic cash flow

**Q2.** An investor wishes to receive a perpetual annual payment of ₹50,000 forever. If the prevailing market discount rate is 10% per annum, what is the Present Value of this perpetuity?
- (A) ₹5,00,000
- (B) ₹50,000
- (C) ₹50,00,000
- (D) ₹5,50,000

**Q3.** In the repayment schedule of a standard housing loan with Equated Monthly Installments (EMI), over the passage of time:
- (A) Both interest and principal components remain constant
- (B) The interest component decreases while the principal component increases
- (C) The interest component increases while the principal component decreases
- (D) The EMI amount itself declines every month

#### Solutions & Detailed Explanations

* Q1 Correct Answer: (B) Higher by a factor of (1 + r). Because payments occur at the beginning of each interval, each cash flow is discounted by one fewer period, magnifying the total present value by (1 + r).

* Q2 Correct Answer: (A) ₹5,00,000. PV of Perpetuity = C / r = 50,000 / 0.10 = ₹5,00,000.

* Q3 Correct Answer: (B) The interest component decreases while the principal component increases. Because interest is charged on the outstanding loan balance, as the principal amortizes, the monthly interest portion drops, allowing a larger fraction of the fixed EMI to retire principal.

## Active Recall & Self-Diagnostic Prompts

<details>
<summary>What happens to the Present Value of a Growing Perpetuity if the growth rate (g) approaches the discount rate (r)?</summary>

The denominator (r − g) approaches zero, causing the Present Value to mathematically approach infinity. Hence, the formula PV = C / (r − g) is strictly valid only when r > g.
</details>

<details>
<summary>State the difference between an Ordinary Annuity and an Annuity Due in practical financial products.</summary>

Ordinary Annuity payments occur at period ends (e.g., bond coupon payments, loan EMIs). Annuity Due payments occur at period beginnings (e.g., apartment lease rentals, life insurance premiums).
</details>

