# RAPID REVISION MATRIX: CHAPTER 13

**Topic**: Profit, Loss, Discount & Dishonest Dealer Dynamics  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Multipliers, Markup & Discounts

| Transaction Phase | Operational Equation | Key Invariant |
| :--- | :--- | :--- |
| **Golden Bridge** | $\frac{\text{MP}}{\text{CP}} = \frac{100 + P\%}{100 - D\%}$ | Direct calculation of Markup / Cost ratio bypassing Selling Price. |
| **Successive Discounts ($a\%, b\%$)** | $D_{\text{eq}} = \left(a + b - \frac{ab}{100}\right)\%$ | Net effective price multiplier $\mu = \left(1 - \frac{a}{100}\right)\left(1 - \frac{b}{100}\right)$. |
| **"Buy $X$ Get $Y$ Free"** | $\text{Discount \%} = \frac{Y}{X + Y} \times 100\%$ | Denominator must always be **Total Items Handed to Buyer ($X+Y$)**. |
| **Profit on SP $\to$ Profit on CP** | $p_{\text{cp}} = \frac{p_{\text{sp}}}{1 - p_{\text{sp}}}$ | If profit is $\frac{1}{n}$ on SP, it is $\frac{1}{n-1}$ on CP. |

---

### Matrix B: Dual-Article & Fraudulent Dealer Invariants

| Configuration | Condition | Net Result | Formula |
| :--- | :--- | :--- | :--- |
| **Same Cost Price** | $\text{CP}_1 = \text{CP}_2$, $+x\%$ and $-x\%$ | **No Profit, No Loss** | Net change $= 0\%$ |
| **Same Selling Price** | $\text{SP}_1 = \text{SP}_2$, $+x\%$ and $-x\%$ | **Always Net Loss** | $\text{Loss \%} = \left(\frac{x}{10}\right)^2\% = \frac{x^2}{100}\%$<br/>$\text{Loss ₹} = \frac{2 \cdot \text{SP} \cdot x^2}{10000 - x^2}$ |
| **Dishonest Scale (CP sale)** | Uses $W_{\text{act}}$ instead of $W_{\text{nom}}$ | **Guaranteed Profit** | $\text{Gain \%} = \frac{W_{\text{nom}} - W_{\text{act}}}{W_{\text{act}}} \times 100\%$ |
| **Compound Cheating** | Markup + Discount + Scale Fraud | **Multiplicative** | $\mu_{\text{net}} = \mu_{\text{markup}} \times \mu_{\text{discount}} \times \left(\frac{W_{\text{nom}}}{W_{\text{act}}}\right)$ |

---

## 2. 60-Second Retrieval Skeleton

```text
The Golden Bridge: MP / CP = (100 + P%) / (100 - D%)
➔ Cost vs Selling Price Goods Equivalence: CP(m) = SP(n) ➔ SP/CP = m/n ➔ Profit% = ((m - n)/n) × 100%
➔ Sold n, Gained SP of k: Gain% = k / (n - k) × 100%
➔ Sold n, Lost SP of k: Loss% = k / (n + k) × 100%
➔ Two items same SP at +x% & -x%: Net Loss% = (x/10)²%  [IMMUTABLE LAW: Always a loss!]
➔ Dishonest Dealer Ledger: Gain% = (Error / (True Weight - Error)) × 100% = ((Nominal - Actual) / Actual) × 100%
```

---

## 3. Top 5 Instant Killer Traps

1. **False Weight Denominator Blunder**: Dividing weight error by the nominal weight ($1000\text{g}$) instead of the actual dispensed weight ($900\text{g}$). Cost price is incurred only on the weight handed over.
2. **Same SP Loss Applied to SP**: Computing rupee loss as $\text{Loss \%} \times \text{Total SP}$. Percentage loss is ALWAYS defined on Cost Price ($\text{CP}$).
3. **Free Items Scheme Ratio**: Assuming "Buy 2 Get 1 Free" gives a $50\%$ discount. The customer receives $3$ items, yielding $\frac{1}{3} = 33.33\%$.
4. **Profit on SP Taken as True Profit**: Failing to convert profit on SP to profit on CP. A $20\%$ profit on SP means $\text{SP} = 5, \Pi = 1 \implies \text{CP} = 4$, making true profit $\frac{1}{4} = 25\%$.
5. **Successive Discount Addition**: Simply adding discounts ($20\% + 20\% = 40\%$). The true single equivalent discount is $36\%$.
