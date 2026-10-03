# CHAPTER 13: PROFIT, LOSS, DISCOUNT & DISHONEST DEALER DYNAMICS

**Domain**: Commercial Arithmetic & Financial Equilibrium  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: First-Principles Proofs $\to$ Proportional Multipliers $\to$ The Golden Bridge Equation $\to$ Fraudulent Merchant Ledger $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY & FOUNDATIONAL IDENTITIES

Commercial transactions govern the exchange of economic commodities against monetary currency. Every problem in profit, loss, and commercial discounting reduces strictly to ratios and base-tracking across three fundamental price anchors:

1. **Cost Price ($\mathbf{CP}$)**: The total capital invested to acquire, produce, transport, or refurbish an article:
   $$\text{CP}_{\text{total}} = \text{Purchase Cost} + \text{Overhead Expenses (Freight, Repair, Octroi, Packaging)}$$
2. **Selling Price ($\mathbf{SP}$)**: The actual terminal monetary compensation received upon transferring ownership of the article.
3. **Marked Price ($\mathbf{MP}$ / List Price / Printed Price)**: The nominal label price affixed to the article prior to offering promotional or commercial concessions.

```
                    ┌─────── Markup (+M%) ───────┐
                    │                            ▼
             [Cost Price (CP)] ───────────► [Marked Price (MP)]
                    │                            │
                    │   Profit (+P%) /           │   Discount (-D%)
                    │   Loss (-L%)               │
                    ▼                            ▼
             [Selling Price (SP)] ◄──────────────┘
```

---

### Core Accounting Identities

$$\text{Profit} (\Pi) = \text{SP} - \text{CP} \quad (\text{Valid when } \text{SP} > \text{CP})$$
$$\text{Loss} (\Lambda) = \text{CP} - \text{SP} \quad (\text{Valid when } \text{CP} > \text{SP})$$
$$\text{Discount} (\Delta) = \text{MP} - \text{SP} \quad (\text{Valid when } \text{MP} \ge \text{SP})$$

### The Sovereign Base Rule
Unless explicitly stipulated otherwise in the problem statement:
- **Profit Percentage ($\mathbf{P\%}$)** and **Loss Percentage ($\mathbf{L\%}$)** are **always calculated upon the Cost Price ($\text{CP}$)**:
  $$\mathbf{P\%} = \frac{\text{SP} - \text{CP}}{\text{CP}} \times 100\% = \left(\frac{\text{SP}}{\text{CP}} - 1\right) \times 100\%$$
  $$\mathbf{L\%} = \frac{\text{CP} - \text{SP}}{\text{CP}} \times 100\% = \left(1 - \frac{\text{SP}}{\text{CP}}\right) \times 100\%$$
- **Discount Percentage ($\mathbf{D\%}$)** is **always calculated upon the Marked Price ($\text{MP}$)**:
  $$\mathbf{D\%} = \frac{\text{MP} - \text{SP}}{\text{MP}} \times 100\% = \left(1 - \frac{\text{SP}}{\text{MP}}\right) \times 100\%$$
- **Markup Percentage ($\mathbf{M\%}$)** is **always calculated upon the Cost Price ($\text{CP}$)**:
  $$\mathbf{M\%} = \frac{\text{MP} - \text{CP}}{\text{CP}} \times 100\%$$

---

### Base-Shift Calculus: Profit on CP vs Profit on SP
In advanced banking and regulatory examinations, questions frequently quote profit calculated as a percentage of Selling Price.

Let profit fraction on CP be $p_{\text{cp}} = \frac{\Pi}{\text{CP}}$, and profit fraction on SP be $p_{\text{sp}} = \frac{\Pi}{\text{SP}}$.

Since $\text{SP} = \text{CP} + \Pi$:
$$p_{\text{sp}} = \frac{\Pi}{\text{CP} + \Pi} = \frac{\frac{\Pi}{\text{CP}}}{1 + \frac{\Pi}{\text{CP}}} = \mathbf{\frac{p_{\text{cp}}}{1 + p_{\text{cp}}}}$$

Conversely, to convert profit on SP to true profit on CP:
$$\mathbf{p_{\text{cp}} = \frac{p_{\text{sp}}}{1 - p_{\text{sp}}}}$$

| Profit on Cost Price ($p_{\text{cp}}$) | Profit on Selling Price ($p_{\text{sp}}$) | Practical Calculation Example |
| :--- | :--- | :--- |
| $\frac{1}{2} = 50\%$ | $\frac{1}{2+1} = \frac{1}{3} \approx 33.33\%$ | $\text{CP} = 100, \Pi = 50 \implies \text{SP} = 150 \implies \frac{50}{150} = 33.33\%$ |
| $\frac{1}{3} \approx 33.33\%$ | $\frac{1}{3+1} = \frac{1}{4} = 25.00\%$ | $\text{CP} = 300, \Pi = 100 \implies \text{SP} = 400 \implies \frac{100}{400} = 25\%$ |
| $\frac{1}{4} = 25\%$ | $\frac{1}{4+1} = \frac{1}{5} = 20.00\%$ | $\text{CP} = 400, \Pi = 100 \implies \text{SP} = 500 \implies \frac{100}{500} = 20\%$ |
| $\frac{1}{5} = 20\%$ | $\frac{1}{5+1} = \frac{1}{6} \approx 16.67\%$ | $\text{CP} = 500, \Pi = 100 \implies \text{SP} = 600 \implies \frac{100}{600} = 16.67\%$ |
| $\frac{1}{n}$ | $\frac{1}{n+1}$ | Universal upward step on fractional scale |

---

## 2. THE MULTIPLICATIVE FACTOR (MF) ENGINE

Avoid writing multi-step additive equations. Express every commercial transition as a multiplicative operator:

$$\text{SP} = \text{CP} \times \left(1 + \frac{P}{100}\right) \quad \text{or} \quad \text{SP} = \text{CP} \times \left(1 - \frac{L}{100}\right)$$
$$\text{SP} = \text{MP} \times \left(1 - \frac{D}{100}\right)$$
$$\text{MP} = \text{CP} \times \left(1 + \frac{M}{100}\right)$$

### The Golden Bridge Equation
Equating the two independent expressions for Selling Price ($\text{SP}$):
$$\text{SP} = \text{CP} \cdot \left(\frac{100 + P}{100}\right) = \text{MP} \cdot \left(\frac{100 - D}{100}\right)$$

Canceling the common denominator $100$ yields the most versatile operational identity in commercial arithmetic:
$$\mathbf{\frac{\text{MP}}{\text{CP}} = \frac{100 + P\%}{100 - D\%}}$$

If the merchant incurs a loss of $L\%$ instead of a profit:
$$\mathbf{\frac{\text{MP}}{\text{CP}} = \frac{100 - L\%}{100 - D\%}}$$

> **Strategic Utility**: In problems specifying discount and net profit percentages, calculate the ratio $\text{MP} : \text{CP}$ in a single step without computing intermediate numerical values of Selling Price.

---

## 3. SUCCESSIVE DISCOUNTS & PROMOTIONAL MECHANICS

When a series of successive discounts $d_1\%, d_2\%, \dots, d_k\%$ are applied in sequence:
$$\text{SP} = \text{MP} \times \left(1 - \frac{d_1}{100}\right) \times \left(1 - \frac{d_2}{100}\right) \times \dots \times \left(1 - \frac{d_k}{100}\right)$$

The **Single Equivalent Discount ($\mathbf{D_{\text{eq}}}$)** is:
$$D_{\text{eq}} = \left[1 - \prod_{i=1}^k \left(1 - \frac{d_i}{100}\right)\right] \times 100\%$$

For two successive discounts $a\%$ and $b\%$:
$$\mathbf{D_{\text{eq}} = \left(a + b - \frac{ab}{100}\right)\%}$$

### Commercial Free-Item Schemes ("Buy $X$ Get $Y$ Free")
Retailers frequently disguise discounts using article volume incentives:

$$\text{Discount Fraction} = \frac{\text{Free Articles}}{\text{Total Articles Transferred to Buyer}} = \mathbf{\frac{Y}{X + Y}}$$

| Scheme Announced | Total Goods Handed Over | Effective Discount Rate ($D\%$) |
| :--- | :--- | :--- |
| **Buy 1 Get 1 Free** | $1 + 1 = 2$ | $\frac{1}{2} = \mathbf{50.00\%}$ |
| **Buy 2 Get 1 Free** | $2 + 1 = 3$ | $\frac{1}{3} = \mathbf{33.33\%}$ |
| **Buy 3 Get 2 Free** | $3 + 2 = 5$ | $\frac{2}{5} = \mathbf{40.00\%}$ |
| **Buy 5 Get 3 Free** | $5 + 3 = 8$ | $\frac{3}{8} = \mathbf{37.50\%}$ |
| **Buy 4 Get 1 Free + 20% Extra Off** | Scheme 1: $\frac{1}{5} = 20\%$ | Combined: $20 + 20 - \frac{400}{100} = \mathbf{36.00\%}$ |

---

## 4. ARTICLE EQUIVALENCE & MONETARY INVARIANTS

### Type 1: Cost Price of $m$ Articles Equals Selling Price of $n$ Articles
$$\text{CP} \times m = \text{SP} \times n \implies \mathbf{\frac{\text{SP}}{\text{CP}} = \frac{m}{n}}$$

$$\mathbf{\text{Gain / Loss \%} = \left(\frac{m - n}{n}\right) \times 100\%}$$
- If $m > n$: Net **Gain** (the merchant recovers full cost after selling fewer items, retaining $m - n$ articles as pure surplus).
- If $m < n$: Net **Loss**.

### Type 2: Gain or Loss Stated in Terms of Selling Price of $k$ Articles
When selling $n$ articles, the transaction results in:

1. **Gain equal to the SP of $k$ articles**:
   $$\text{Profit} = \text{SP}(n) - \text{CP}(n) = \text{SP}(k) \implies \text{CP}(n) = \text{SP}(n - k)$$
   $$\frac{\text{SP}}{\text{CP}} = \frac{n}{n - k} \implies \mathbf{\text{Gain \%} = \frac{k}{n - k} \times 100\%}$$
2. **Loss equal to the SP of $k$ articles**:
   $$\text{Loss} = \text{CP}(n) - \text{SP}(n) = \text{SP}(k) \implies \text{CP}(n) = \text{SP}(n + k)$$
   $$\frac{\text{SP}}{\text{CP}} = \frac{n}{n + k} \implies \mathbf{\text{Loss \%} = \frac{k}{n + k} \times 100\%}$$
3. **Gain equal to the CP of $k$ articles**:
   $$\text{Profit} = \text{CP}(k) \implies \mathbf{\text{Gain \%} = \frac{\text{CP}(k)}{\text{CP}(n)} \times 100\% = \frac{k}{n} \times 100\%}$$

---

## 5. DUAL ARTICLE TRANSACTIONS: SAME CP VS SAME SP

### Scenario A: Same Cost Price ($\text{CP}_1 = \text{CP}_2 = \text{CP}$)
One article sold at $+x\%$ profit, the second sold at $-x\%$ loss:
$$\text{Total CP} = 2\text{CP}$$
$$\text{Total SP} = \text{CP}\left(1 + \frac{x}{100}\right) + \text{CP}\left(1 - \frac{x}{100}\right) = 2\text{CP}$$
$$\mathbf{\text{Overall Result: No Profit, No Loss (0\%)}}$$

### Scenario B: Same Selling Price ($\text{SP}_1 = \text{SP}_2 = \text{SP}$)
One article sold at $+x\%$ profit, the second sold at $-x\%$ loss:
$$\text{CP}_1 = \frac{\text{SP}}{1 + \frac{x}{100}} = \frac{100\text{SP}}{100 + x}$$
$$\text{CP}_2 = \frac{\text{SP}}{1 - \frac{x}{100}} = \frac{100\text{SP}}{100 - x}$$

$$\text{Total CP} = 100\text{SP} \left[\frac{1}{100 + x} + \frac{1}{100 - x}\right] = \frac{20000 \cdot \text{SP}}{10000 - x^2}$$
$$\text{Total SP} = 2\text{SP}$$

$$\text{Total Loss} = \text{Total CP} - \text{Total SP} = 2\text{SP} \left[\frac{10000}{10000 - x^2} - 1\right] = \mathbf{\frac{2\text{SP} \cdot x^2}{10000 - x^2}}$$

$$\mathbf{\text{Overall Net Loss \%} = \left(\frac{x}{10}\right)^2\% = \frac{x^2}{100}\%}$$

> **Theorem of Invariant Loss**: Whenever two articles are sold at identical selling prices, one yielding $x\%$ profit and the other $x\%$ loss, the overall transaction **always results in a net loss**. The numerical value of the selling price has zero bearing on the net percentage loss!

---

## 6. DISHONEST MERCHANT & FALSE WEIGHT ALGEBRA

A fraudulent trader extracts illicit profit through two distinct levers:
1. **Pricing Manipulations**: Declaring a markup ($M\%$) or discount ($D\%$).
2. **Physical Quantity Fraud**: Using calibrated weights or altered scales that deliver less commodity than claimed.

### The Unified Multiplier Formulation
Let:
- $\mu_{\text{price}} = \frac{\text{Nominal SP}}{\text{Nominal CP}}$ (e.g., $1.20$ if marked up $20\%$).
- $\mu_{\text{weight}} = \frac{\text{Nominal Weight Claimed}}{\text{Actual Weight Delivered}} = \frac{W_{\text{claimed}}}{W_{\text{actual}}}$.

The overall commercial transaction multiplier is strictly multiplicative:
$$\mathbf{\mu_{\text{net}} = \mu_{\text{price}} \times \mu_{\text{weight}}}$$
$$\mathbf{\text{Net Profit \%} = (\mu_{\text{net}} - 1) \times 100\%}$$

### Case 1: Merchant Professes to Sell at Cost Price ($\mu_{\text{price}} = 1$)
The trader claims to sell at cost price, but substitutes a true $1000\text{g}$ weight with a fraudulent weight $W_{\text{actual}}$:
$$\mu_{\text{net}} = \frac{W_{\text{claimed}}}{W_{\text{actual}}} = \frac{1000}{W_{\text{actual}}}$$

$$\mathbf{\text{Gain \%} = \frac{\text{Error}}{\text{True Value} - \text{Error}} \times 100\% = \frac{W_{\text{claimed}} - W_{\text{actual}}}{W_{\text{actual}}} \times 100\%}$$

*Example*: Using $960\text{g}$ in place of $1000\text{g}$:
$$\text{Gain \%} = \frac{1000 - 960}{960} \times 100\% = \frac{40}{960} \times 100\% = \frac{1}{24} \times 100\% = \mathbf{4\frac{1}{6}\% \approx 4.167\%}$$

### Case 2: Compound Cheating (Fraudulent Purchase and Sale)
If a trader cheats by $x\%$ while purchasing (taking $(100 + x)\text{g}$ while paying for $100\text{g}$) and cheats by $y\%$ while selling (giving $(100 - y)\text{g}$ while charging for $100\text{g}$):
$$\mu_{\text{buy}} = \frac{100 + x}{100}, \quad \mu_{\text{sell}} = \frac{100}{100 - y}$$
$$\mathbf{\mu_{\text{net}} = \frac{100 + x}{100 - y} \implies \text{Gain \%} = \left(\frac{x + y}{100 - y}\right) \times 100\%}$$

---

## 7. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: The Golden Bridge in Action (SBI PO Mains)
**Problem**: A merchant marks his goods at such a price that after allowing a discount of $12.5\%$, he still achieves a profit of $25\%$. If the marked price of an article is ₹$1,200$, find its cost price.

**Solution via Golden Bridge**:
Using $\frac{\text{MP}}{\text{CP}} = \frac{100 + P\%}{100 - D\%}$:
$$\frac{\text{MP}}{\text{CP}} = \frac{1 + \frac{1}{4}}{1 - \frac{1}{8}} = \frac{\frac{5}{4}}{\frac{7}{8}} = \frac{5}{4} \times \frac{8}{7} = \frac{10}{7}$$

Given $\text{MP} = ₹1,200 \implies 10 \text{ units} = 1200 \implies 1 \text{ unit} = 120$.
$$\text{CP} = 7 \text{ units} = 7 \times 120 = \mathbf{₹840}$$

---

### Exemplar 2: Double Transaction with Variable Quantities (RBI Grade B Phase 1)
**Problem**: A vendor buys lemons at the rate of $6$ for ₹$10$ and sells them at the rate of $4$ for ₹$9$. What is his overall profit or loss percentage?

**First-Principles Unitary vs LCM Method**:
To eliminate fractional division, equate article quantities using $\text{LCM}(6, 4) = 12$ lemons.
- Cost Price of $12$ lemons: $\text{CP} = 12 \times \frac{10}{6} = \mathbf{₹20}$
- Selling Price of $12$ lemons: $\text{SP} = 12 \times \frac{9}{4} = \mathbf{₹27}$
- Absolute Profit: $\Pi = 27 - 20 = ₹7$
$$\text{Profit \%} = \frac{7}{20} \times 100\% = \mathbf{35.00\%}$$

---

### Exemplar 3: Same Selling Price with Monetary Rupee Recovery (CAT / UPSC CSAT)
**Problem**: A house and a shop were sold for ₹$1$ lakh each. On the house, the transaction resulted in a $20\%$ loss, and on the shop, a $20\%$ profit. Find the entire transaction's net gain or loss in rupees.

**Mathematical Execution**:
1. Percentage Net Loss:
   $$\text{Loss \%} = \left(\frac{20}{10}\right)^2\% = 4\% = \frac{1}{25}$$
2. Ratio Analysis:
   - $\text{CP} = 25 \text{ units}$, $\text{Loss} = 1 \text{ unit} \implies \text{Total SP} = 24 \text{ units}$.
   - Given $\text{Total SP} = 1 \text{ lakh} + 1 \text{ lakh} = ₹2 \text{ lakhs}$.
   $$24 \text{ units} = ₹2 \text{ lakhs} \implies 1 \text{ unit} = \frac{2}{24} = \mathbf{\frac{1}{12} \text{ lakh} = ₹8,333.33}$$
   The entire transaction incurred a **net loss of ₹$\frac{1}{12}$ lakh**.

---

### Exemplar 4: Compound Dishonest Dealer with Markup & Discount (CAT Advanced)
**Problem**: A dishonest trader marks up the price of rice by $20\%$ and gives a discount of $10\%$. Furthermore, he uses a faulty weight that measures $800\text{g}$ for every $1000\text{g}$ kilogram. What is his exact net profit percentage?

**Multiplicative Factor Ledger**:
- Markup Factor: $\mu_{\text{markup}} = 1 + \frac{20}{100} = \frac{6}{5}$
- Discount Factor: $\mu_{\text{discount}} = 1 - \frac{10}{100} = \frac{9}{10}$
- Weight Factor: $\mu_{\text{weight}} = \frac{1000}{800} = \frac{5}{4}$

Compute overall net multiplier:
$$\mu_{\text{net}} = \left(\frac{6}{5}\right) \times \left(\frac{9}{10}\right) \times \left(\frac{5}{4}\right) = \frac{6 \times 9 \times 5}{5 \times 10 \times 4} = \frac{54}{40} = \frac{27}{20} = 1.35$$

$$\text{Net Profit \%} = (1.35 - 1) \times 100\% = \mathbf{35.00\%}$$

---

## 8. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: The False Weight Base Fallacy** | Calculating false weight gain as $\frac{\text{Error}}{\text{True Weight}} = \frac{100}{1000} = 10\%$ when giving $900\text{g}$. | The merchant's cost is tied to the **goods actually given** ($900\text{g}$). Profit is $\frac{100}{900} = \mathbf{11\frac{1}{9}\%}$. |
| **Trap 2: Same SP Rupee Loss Over-simplification** | Applying $4\%$ loss directly on the combined Selling Price ₹$200$: $\text{Loss} = 200 \times 0.04 = ₹8$. | $4\%$ loss is on **Cost Price ($\text{CP}$)**, not Selling Price. $\text{Loss} = \frac{4}{96} \times 200 = ₹8.33$. |
| **Trap 3: Free Items Denominator Trap** | Computing "Buy 3 Get 1 Free" discount as $\frac{1}{3} = 33.33\%$. | The customer walks away with $3 + 1 = 4$ items. Effective discount is $\frac{1}{4} = \mathbf{25.00\%}$. |
| **Trap 4: Additive Discount Fallacy** | Treating successive discounts of $20\%$ and $10\%$ as $30\%$. | Successive discounts compound multiplicatively: $20 + 10 - \frac{200}{100} = \mathbf{28.00\%}$. |
| **Trap 5: Profit on SP Confusion** | Equating a "25% profit on selling price" to a standard $25\%$ profit on cost price. | $25\%$ on SP is $\frac{1}{4}$ on SP $\implies \text{CP} = 3, \Pi = 1 \implies$ True profit on CP is $\frac{1}{3} = \mathbf{33.33\%}$. |
