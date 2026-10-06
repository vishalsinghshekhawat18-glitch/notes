# ANNUITIES, EQUATED MONTHLY INSTALLMENTS (EMI), SINKING FUNDS & PERPETUITIES

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** B (Financial Mathematics and Bank Financial Statements)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
An annuity is a sequence of equal cash flows occurring at equal time intervals. In retail and corporate banking, annuities form the mathematical infrastructure of recurring deposits, home and vehicle loans (EMIs), corporate bond sinking funds, retirement pensions, and perpetual preference shares. Understanding annuity timing (ordinary vs annuity due) and loan amortization mathematics ensures exact repayment structuring and interest calculation.

## 2. Master Taxonomy of Annuities

```
+----------------------------------------------------------------------------------------------------+
|                                    TAXONOMY OF ANNUITY STRUCTURES                                  |
+----------------------------------------------------------------------------------------------------+
| Category              | Cash Flow Timing                      | Core Banking Example               |
+-----------------------+---------------------------------------+------------------------------------+
| Ordinary Annuity      | Payments occur at the END of each peri| Term loan EMI payments; bond coupon|
| (Annuity Immediate)   |                                       |                                    |
| Annuity Due           | Payments occur at the BEGINNING of eac| Leases; advance rent; life insuranc|
| (Annuity in Advance)  | period                                | premiums; recurring deposit opening|
| Deferred Annuity      | Equal cash flows begin after an initia| Retirement pension plans; educatio |
|                       | deferment (grace / moratorium) period | loans after moratorium             |
| Perpetuity            | Equal cash flows continue indefinitely| British Consols; perpetual bonds;  |
|                       | without a terminal maturity date      | non-redeemable preference dividends|
| Growing Annuity       | Cash flows grow at a constant percenta| Inflation-adjusted pension payouts |
|                       | rate $g$ each period                  |                                    |
+-----------------------+---------------------------------------+------------------------------------+
```

## 3. Mathematical Formula Architecture

### Formula 1: Future Value of an Ordinary Annuity (FVOA)
$$\text{FVOA} = C \times \left[ \frac{(1 + r)^n - 1}{r} \right]$$
- **Where:** $C$ = Periodic cash flow; $r$ = Periodic interest rate; $n$ = Total number of periods.
- **Application:** Calculating the accumulated maturity corpus of a Recurring Deposit (RD).

### Formula 2: Present Value of an Ordinary Annuity (PVOA)
$$\text{PVOA} = C \times \left[ \frac{1 - (1 + r)^{-n}}{r} \right] = C \times \text{PVIFA}(r, n)$$
- **Where:** $\text{PVIFA}(r, n)$ is the Present Value Interest Factor of an Annuity.
- **Application:** Determining the loan sanction amount supportable by a given periodic repayment capacity.

### Formula 3: The Golden Annuity Due Rule
Because payments in an **Annuity Due** occur at the *beginning* of each period, every single cash flow is invested for one additional interest period compared to an Ordinary Annuity:
$$\mathbf{\text{FV of Annuity Due} = \text{FV of Ordinary Annuity} \times (1 + r)}$$
$$\mathbf{\text{PV of Annuity Due} = \text{PV of Ordinary Annuity} \times (1 + r)}$$

### Formula 4: Perpetuity & Growing Perpetuity
$$\text{PV of Perpetuity} = \frac{C}{r}$$
$$\text{PV of Growing Perpetuity} = \frac{C_1}{r - g} \quad (\text{where } r > g)$$
- **Application:** Valuation of perpetual debt, dividend discount model for common stock with constant growth $g$.

### Formula 5: Sinking Fund Payment
A sinking fund is an accumulating reserve established to repay a lump-sum debt at maturity:
$$\text{Annual Contribution } C = \text{Target Future Liability} \times \left[ \frac{r}{(1 + r)^n - 1} \right]$$

### Formula 6: Equated Monthly Installment (EMI)
$$\text{EMI} = P \times \frac{r \times (1 + r)^n}{(1 + r)^n - 1}$$
- **Where:** $P$ = Principal loan amount; $r$ = Periodic monthly interest rate ($\frac{\text{Annual Rate}}{12 \times 100}$); $n$ = Number of monthly installments ($\text{Years} \times 12$).

## 4. Loan Amortization Mechanics: Splitting Interest & Principal
In an Equated Monthly Installment (reducing balance loan):
1. **Total Monthly Payment:** Remains constant throughout the loan tenure.
2. **Monthly Interest Component:** Decreases over time as outstanding principal declines:
   $$\text{Interest for Month } t = \text{Outstanding Principal at Start of Month } t \times r$$
3. **Monthly Principal Repayment:** Increases over time:
   $$\text{Principal Repayment in Month } t = \text{EMI} - \text{Interest for Month } t$$
4. **Closing Outstanding Balance:**
   $$\text{Closing Balance at End of Month } t = \text{Opening Balance} - \text{Principal Repayment}$$

## 5. Worked Example: Loan EMI & First Month Amortization
**Problem:** A borrower receives a ₹10,00,000 retail home loan at 12% p.a. repayable over 10 years (120 monthly installments).
1. Calculate the monthly EMI.
2. Calculate the interest and principal split for Month 1.

**Solution Step-by-Step:**
- **Step 1: Determine inputs:**
  - $P = \text{₹10,00,000}$
  - Monthly rate $r = \frac{12\%}{12} = 1\% = 0.01$ per month
  - Total installments $n = 10 \times 12 = 120$
- **Step 2: Calculate $(1 + r)^n$:**
  - $(1.01)^{120} \approx 3.300387$
- **Step 3: Calculate EMI:**
  $$\text{EMI} = 10,00,000 \times \frac{0.01 \times 3.300387}{3.300387 - 1} = 10,00,000 \times \frac{0.03300387}{2.300387} = \mathbf{\text{₹14,347.09 per month}}$$
- **Step 4: Amortization Breakdown for Month 1:**
  - Interest for Month 1: $10,00,000 \times 1\% = \text{₹10,00,000} \times 0.01 = \mathbf{\text{₹10,000.00}}$
  - Principal Repaid in Month 1: $\text{₹14,347.09} - \text{₹10,000.00} = \mathbf{\text{₹4,347.09}}$
  - Outstanding Balance after Month 1: $\text{₹10,00,000} - \text{₹4,347.09} = \mathbf{\text{₹9,95,652.91}}$

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. $\text{Value of Annuity Due} = \text{Value of Ordinary Annuity} \times (1 + r)$. An annuity due is **always larger** than an ordinary annuity because payments occur at the beginning of periods.
> 2. In reducing balance loans, the interest component is **highest in the first installment** and declines steadily, while principal repayment starts smallest and grows exponentially.
> 3. For a Perpetuity, $PV = C / r$; there is NO future value because payments continue forever.

## 6. Practice Questions & Solved Numerical Drills

**Q1.** An ordinary annuity pays ₹20,000 at the end of each year for 5 years at an interest rate of 10% p.a. If the payments were made at the *beginning* of each year instead (Annuity Due), what would be the Present Value? (Given: PVIFA(10%, 5) = 3.7908)
- (A) ₹75,816
- (B) ₹83,398
- (C) ₹91,737
- (D) ₹68,234

**Q2.** A company must accumulate a sinking fund of ₹50,00,000 to redeem debentures maturing in 5 years. If the fund earns 10% compound interest p.a., what annual contribution must be deposited at the end of each year? (Given: FVIFA(10%, 5) = 6.1051)
- (A) ₹10,00,000
- (B) ₹8,18,987
- (C) ₹9,25,000
- (D) ₹7,50,000

**Q3.** An irredeemable perpetual bond pays an annual coupon of ₹800. If the investor's required yield is 8% per annum, what is the intrinsic value of the perpetuity?
- (A) ₹8,000
- (B) ₹10,000
- (C) ₹12,000
- (D) ₹6,400

#### Solutions & Explanations
* Q1 Correct Answer: (B) ₹83,398. $\text{PVOA} = 20,000 \times 3.7908 = \text{₹75,816}$. For Annuity Due: $\text{PV} = \text{PVOA} \times (1 + r) = 75,816 \times 1.10 = \mathbf{\text{₹83,397.60}}$.
* Q2 Correct Answer: (B) ₹818,987. Annual contribution $C = \frac{\text{Future Target}}{\text{FVIFA}(10\%, 5)} = \frac{50,00,000}{6.1051} = \mathbf{\text{₹8,18,987.40}}$.
* Q3 Correct Answer: (B) ₹10,000. Under Perpetuity formula: $\text{PV} = \frac{C}{r} = \frac{800}{0.08} = \mathbf{\text{₹10,000}}$.

## 7. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why is the Present Value of an Annuity Due strictly greater than that of an Ordinary Annuity?</summary>

Because under an Annuity Due, the first payment is received immediately at time $t=0$ (undiscounted), and all subsequent payments are received one period earlier, subjecting each cash flow to one less period of compound discounting.
</details>

<details>
<summary>How does the principal-to-interest ratio change as a retail loan nears maturity?</summary>

In early years, interest dominates the EMI because the outstanding debt is large. In late years, principal repayment dominates because the principal debt has been largely amortized, minimizing the monthly interest charge.
</details>

## 8. Last-Minute Revision Box
- Ordinary Annuity: Payments at period-end; Annuity Due: Payments at period-start.
- Multiplier Rule: $\text{Annuity Due} = \text{Ordinary Annuity} \times (1 + r)$.
- Perpetuity: $\text{PV} = C / r$; Growing Perpetuity: $\text{PV} = C_1 / (r - g)$.
- Sinking Fund: $\text{Payment} = \frac{\text{Target Liability}}{\text{FVIFA}(r, n)}$.
- EMI Formula: $\text{EMI} = P \times \frac{r(1+r)^n}{(1+r)^n - 1}$; Reducing balance reduces interest monthly.
