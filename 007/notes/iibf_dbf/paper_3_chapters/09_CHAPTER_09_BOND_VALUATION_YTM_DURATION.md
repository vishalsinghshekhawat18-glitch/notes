# BONDS, YTM, DURATION & FIXED-INCOME MATHEMATICS

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** B (Financial Mathematics and Bank Financial Statements)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
Commercial banks in India maintain massive investment portfolios in Central and State Government Securities (G-Secs) to fulfill the Statutory Liquidity Ratio (SLR) mandate under Section 24 of the Banking Regulation Act 1949. Understanding fixed-income pricing, Yield to Maturity (YTM), and bond duration is vital for managing treasury yield-curve movements, mitigating portfolio mark-to-market (MTM) risks, and calculating Interest Rate Risk in the Banking Book (IRRBB).

## 2. Core Concepts: Bond Terminology & Price-Yield Mechanics

```
+----------------------------------------------------------------------------------------------------+
|                                    BOND PRICING RELATIONSHIPS MATRIX                               |
+----------------------------------------------------------------------------------------------------+
| Market Condition              | Coupon vs YTM                         | Price vs Face Value (Par)  |
+-------------------------------+---------------------------------------+----------------------------+
| Trading at Par                | $\text{Coupon Rate} = \text{YTM}$     | $\text{Price} = \text{Par}$|
| Trading at Premium            | $\text{Coupon Rate} > \text{YTM}$     | $\text{Price} > \text{Par}$|
| Trading at Discount           | $\text{Coupon Rate} < \text{YTM}$     | $\text{Price} < \text{Par}$|
+-------------------------------+---------------------------------------+----------------------------+
```

- **Fundamental Theorem of Bond Valuation:** Bond prices and market interest yields share an **INVERSE relationship**. When market yields rise, existing bond prices **FALL**; when market yields decline, existing bond prices **RISE**.
- **Convexity:** The price-yield relationship is not a straight line; it is convex to the origin. For a given basis point shift, price increases when yields fall are greater than price decreases when yields rise.

## 3. Mathematical Formulas for Fixed-Income Valuation

### Formula 1: Intrinsic Bond Value (Valuation Formula)
$$P_0 = \sum_{t=1}^n \frac{C}{(1 + y)^t} + \frac{M}{(1 + y)^n} = C \times \text{PVIFA}(y, n) + M \times \text{PVIF}(y, n)$$
- **Where:** $C$ = Annual coupon payment ($\text{Face Value} \times \text{Coupon Rate}$); $M$ = Face / Maturity value (Par); $y$ = Required yield / YTM; $n$ = Number of years to maturity.

### Formula 2: Current Yield
$$\text{Current Yield} = \frac{\text{Annual Coupon Payment}}{\text{Current Market Price}} \times 100$$
- *Limitation:* Measures only annual cash flow return; completely ignores capital gains/losses and the time value of money.

### Formula 3: Yield to Maturity (YTM) Approximation Shortcut
$$\text{YTM} \approx \frac{C + \frac{M - P}{n}}{\frac{M + P}{2}} \times 100$$
- **Where:** $C$ = Annual coupon; $M$ = Face value; $P$ = Current market purchase price; $n$ = Years to maturity.
- **When to Use:** Standard IIBF examination shortcut to estimate the internal rate of return on a bond without iterative trial-and-error.

### Formula 4: Macaulay Duration ($D$)
Developed by Frederick Macaulay (1938), it measures the weighted average maturity of the bond's cash flows:
$$D = \frac{\sum_{t=1}^n \frac{t \times C_t}{(1 + y)^t}}{\sum_{t=1}^n \frac{C_t}{(1 + y)^t}} = \frac{\sum_{t=1}^n t \times \text{PV}(C_t)}{\text{Current Bond Price } P}$$
- **Zero-Coupon Bond Theorem:** For a zero-coupon bond, because there are no intermediate coupon payments, the Macaulay Duration **equals its maturity period exactly** ($D = n$). For coupon-bearing bonds, duration is **always strictly less than maturity** ($D < n$).

### Formula 5: Modified Duration ($MD$) & Price Sensitivity
> **CRITICAL FORMULATION CORRECTION:**
> Modified Duration is strictly a **POSITIVE measure of interest rate risk**:
$$\mathbf{MD = \frac{\text{Macaulay Duration}}{1 + \frac{y}{m}}}$$
- Where $y$ is the YTM and $m$ is the annual coupon frequency.
- **Percentage Price Sensitivity Relationship:**
  The negative sign belongs strictly to the **price-change equation**, reflecting the inverse relationship between yield and price:
$$\mathbf{\frac{\Delta P}{P} \approx - MD \times \Delta y}$$
$$\mathbf{\Delta P \approx - P \times MD \times \Delta y}$$
- **Where:** $\Delta y$ is the change in yield (expressed as a decimal, e.g. $+100 \text{ bps} = +0.01$).

## 4. Master Comparative Framework: Macaulay vs. Modified Duration

| Dimension | Macaulay Duration | Modified Duration |
| :--- | :--- | :--- |
| **Unit of Measurement** | **Years** (Time dimension) | **Percentage / Decimal** (Sensitivity dimension) |
| **Core Economic Meaning** | Weighted average time to recover invested cash flows | Percentage change in bond price per 100 bps shift in yield |
| **Sign Convention** | Strictly positive ($D > 0$) | Strictly positive ($MD > 0$) |
| **Relationship to Yield** | Decreases as coupon and yield increase | Derived by dividing Macaulay Duration by $(1 + y/m)$ |
| **Zero-Coupon Bond** | Equal to maturity ($D = n$) | $MD = \frac{n}{1 + y}$ |

## 5. Worked Example: Step-by-Step Duration & Price Change
**Problem:** A 5-year commercial bond with a face value of ₹1,000 has a current market price of ₹1,000 (trading at par, YTM = 8%). Its Macaulay Duration is calculated as **4.31 years**.
1. Calculate the Modified Duration.
2. Estimate the percentage and rupee price change if market yields increase by **50 basis points (+0.50%)**.

**Solution Step-by-Step:**
- **Step 1: Calculate Modified Duration ($MD$):**
  $$MD = \frac{\text{Macaulay Duration}}{1 + YTM} = \frac{4.31}{1 + 0.08} = \frac{4.31}{1.08} = \mathbf{3.9907 \text{ years / \%}}$$
  *(Modified Duration is positive: 3.99)*
- **Step 2: Calculate Percentage Price Change:**
  - $\Delta y = +0.50\% = +0.0050$ (yield increases).
  $$\frac{\Delta P}{P} \approx -MD \times \Delta y = -3.9907 \times (+0.0050) = -0.01995 = \mathbf{-1.995\%}$$
- **Step 3: Calculate Rupee Price Change:**
  $$\Delta P \approx -1,000 \times 1.995\% = -\text{₹19.95}$$
  $$\text{New Estimated Bond Price} = ₹1,000 - ₹19.95 = \mathbf{\text{₹980.05}}$$
- **Step 4: Interpretation:**
  Because market interest rates rose by 50 bps, the existing bond fell in value by ~2.00% (₹19.95), reflecting interest rate price risk.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Modified Duration is a **positive metric** ($MD = \frac{D}{1 + YTM}$). The negative sign belongs to the price-change relationship: $\Delta P / P \approx -MD \times \Delta y$.
> 2. For a Zero-Coupon Bond, Macaulay Duration is **equal to its maturity** ($D = n$).
> 3. Higher coupon rates deliver cash flows earlier, resulting in **shorter duration and lower price volatility**.
> 4. Lower coupon bonds have **longer duration and higher interest-rate risk**.

## 6. Practice Questions & Solved Numerical Drills

**Q1.** A 10-year zero-coupon government security with a face value of ₹10,000 has a current market yield of 7% p.a. What is its Macaulay Duration?
- (A) 7.00 Years
- (B) 9.35 Years
- (C) 10.00 Years
- (D) 8.50 Years

**Q2.** An 8% annual coupon bond with a face value of ₹1,000 is currently trading in the secondary market at ₹950 and matures in 5 years. Using the approximation formula, what is the approximate YTM?
- (A) 8.00%
- (B) 9.23%
- (C) 8.42%
- (D) 9.85%

**Q3.** A bond portfolio has a Modified Duration of 4.5 years. If market interest rates decrease across the yield curve by 80 basis points (-0.80%), what is the approximate percentage change in the portfolio value?
- (A) -3.60%
- (B) +3.60%
- (C) +4.50%
- (D) -4.50%

#### Solutions & Explanations
* Q1 Correct Answer: (C) 10.00 Years. For zero-coupon instruments, all cash flow occurs at terminal maturity; therefore, Macaulay Duration equals maturity exactly ($D = n = 10$).
* Q2 Correct Answer: (B) 9.23%. $C = 80$, $M = 1000$, $P = 950$, $n = 5$.
  $$\text{YTM} \approx \frac{80 + \frac{1000 - 950}{5}}{\frac{1000 + 950}{2}} \times 100 = \frac{80 + 10}{975} \times 100 = \frac{90}{975} \times 100 = \mathbf{9.23\%}$$
* Q3 Correct Answer: (B) +3.60%. $\frac{\Delta P}{P} \approx -MD \times \Delta y = -4.5 \times (-0.0080) = +0.0360 = \mathbf{+3.60\%}$. Falling yields trigger a capital price gain.

## 7. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does a bond with a higher coupon rate have a shorter duration than a lower coupon bond of identical maturity?</summary>

Because higher periodic coupon cash flows return a larger portion of the invested capital earlier in the bond's lifespan, shifting the weighted average cash flow arrival time forward.
</details>

<details>
<summary>State the exact formula for Modified Duration and explain where the negative sign belongs.</summary>

$MD = \frac{\text{Macaulay Duration}}{1 + YTM}$. Modified Duration itself is positive. The negative sign appears in the price sensitivity relationship $\frac{\Delta P}{P} \approx -MD \times \Delta y$, indicating that price moves inversely to yield changes.
</details>

## 8. Last-Minute Revision Box
- Inverse Price-Yield Rule: Yields UP -> Prices DOWN; Yields DOWN -> Prices UP.
- YTM Approximation: $\text{YTM} \approx \frac{C + \frac{M - P}{n}}{\frac{M + P}{2}} \times 100$.
- Zero-Coupon Bond: Macaulay Duration = Maturity ($D = n$).
- Modified Duration: $MD = \frac{D}{1 + YTM}$ (Positive metric).
- Price Sensitivity: $\Delta P / P \approx -MD \times \Delta y$.
