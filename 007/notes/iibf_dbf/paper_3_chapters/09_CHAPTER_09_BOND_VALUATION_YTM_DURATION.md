# BOND VALUATION, YIELD TO MATURITY (YTM) & MODIFIED DURATION

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Standard:** Macmillan 2023 Master Benchmark • Duplex A4 Monochrome Print Edition

Fixed-income securities form the core statutory liquidity portfolio of commercial banks under Section 24 of the Banking Regulation Act 1949. Understanding the inverse relationship between market interest rates and bond prices, approximating Yield to Maturity (YTM), and managing interest rate sensitivity via Macaulay and Modified Duration are vital for bank treasury asset-liability management (ALM).

## 1. Core Bond Pricing Principles

### 1. Intrinsic Value of a Bond
$$V_0 = \sum_{t=1}^n \frac{C}{(1 + k_d)^t} + \frac{M}{(1 + k_d)^n} = C \times \left[ \frac{1 - (1 + k_d)^{-n}}{k_d} \right] + \frac{M}{(1 + k_d)^n}$$
- Where $C$ = Annual coupon payment, $M$ = Face / Maturity value, $k_d$ = Required rate of return (market yield), and $n$ = Years to maturity.

### 2. Relationship Between Coupon Rate, Yield, and Market Price
| Condition | Market Pricing State | Price vs Face Value |
| :--- | :--- | :--- |
| **Market Yield = Coupon Rate** | **Par Bond** | $\text{Market Price} = \text{Face Value}$ |
| **Market Yield > Coupon Rate** | **Discount Bond** | $\text{Market Price} < \text{Face Value}$ |
| **Market Yield < Coupon Rate** | **Premium Bond** | $\text{Market Price} > \text{Face Value}$ |

- **Inverse Price-Yield Rule:** When market interest yields **RISE**, existing bond market prices **FALL**; when market yields **FALL**, bond prices **RISE**.

## 2. Yield to Maturity (YTM) Approximation Formula

$$\text{YTM} \approx \frac{C + \frac{M - P}{n}}{\frac{M + P}{2}} \times 100$$
- Where $C$ = Annual coupon payment, $M$ = Maturity face value, $P$ = Current market purchase price, and $n$ = Years remaining until redemption.

## 3. Macaulay Duration & Modified Duration

### 1. Macaulay Duration ($D$)
Measures the weighted-average time (in years) required for a bondholder to recover the initial purchase price from coupon and principal cash flows:
$$D = \frac{\sum_{t=1}^n \frac{t \times C_t}{(1 + y)^t}}{\text{Bond Market Price}}$$

### 2. Modified Duration ($MD$)
Directly quantifies the percentage change in bond price for a 100 basis point (1%) shift in yield:
$$MD = \frac{D}{1 + y}$$
$$\% \Delta \text{ Bond Price} \approx -MD \times \Delta y$$

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. For a **Zero-Coupon Bond**, the Macaulay Duration is **exactly equal to its maturity period** ($D = n$).
> 2. Higher coupon rates result in a **shorter duration** because cash flows are recovered earlier.
> 3. Modified Duration carries a negative sign, reflecting the inverse relationship between yield and price.

## Practice Questions & Solved Numerical Drills

**Q1.** A 5-year zero-coupon bond has a face value of ₹1,000. What is its Macaulay Duration?
- (A) 2.5 Years
- (B) 4.2 Years
- (C) 5.0 Years
- (D) Zero

**Q2.** When prevailing market interest rates rise, what happens to the market price of existing fixed-rate bonds?
- (A) Increases
- (B) Decreases
- (C) Remains unchanged
- (D) Adjusts to double coupon rate

**Q3.** A bond has a Macaulay Duration of 4.4 years and a Yield to Maturity of 10%. What is its Modified Duration?
- (A) 4.40 Years
- (B) 4.00 Years
- (C) 4.84 Years
- (D) 3.60 Years

#### Solutions & Detailed Explanations

* Q1 Correct Answer: (C) 5.0 Years. Since a zero-coupon bond has no interim cash flows, 100% of its cash return occurs at maturity; thus, its duration equals its maturity period exactly.

* Q2 Correct Answer: (B) Decreases. Fixed coupon cash flows discounted at higher market rates yield lower present values, driving down market prices.

* Q3 Correct Answer: (B) 4.00 Years. Modified Duration = Macaulay Duration / (1 + y) = 4.4 / (1 + 0.10) = 4.4 / 1.10 = 4.00 years.

## Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does a bond with a higher coupon rate have a shorter duration than a bond with a lower coupon rate of identical maturity?</summary>

Higher coupon payments deliver more cash flow to the investor earlier in the bond lifecycle, pulling the weighted-average time of cash recovery closer to the present.
</details>

<details>
<summary>If a bank holds a bond portfolio with a Modified Duration of 5.0 years, and interest rates increase by 50 basis points (+0.50%), what is the expected portfolio price impact?</summary>

Δ Price ≈ −MD × Δy = −5.0 × (+0.50%) = −2.50%. The bond portfolio value will decline by approximately 2.50%.
</details>

