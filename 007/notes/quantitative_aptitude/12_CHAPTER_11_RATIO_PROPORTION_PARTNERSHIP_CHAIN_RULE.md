<div style="page-break-before: always;"></div>

# CHAPTER 11: RATIO, PROPORTION, VARIATION & PARTNERSHIP (CAPITAL × TIME)

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 12: Ratio & Proportion, pp. 426–475; Ch. 13: Partnership, pp. 476–492; Ch. 14: Chain Rule, pp. 493–509)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 6: Ratio, Proportion & Variation; Ch. 7: Partnership)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 11: Ratio & Proportion; Ch. 12: Partnership; Ch. 13: Chain Rule)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 3: Ratio, Proportion & Variation)

---

## 11.1 Ratio Axioms & Compound Ratios

A **ratio** is a comparative quotient between two quantities $a$ and $b$ of the **same physical units**:
$$a : b = \frac{a}{b} \quad (b \neq 0)$$
The first term $a$ is the **antecedent**; the second term $b$ is the **consequent**.

### Fundamental Properties:
1. **Multiplicative Invariance**: Multiplying or dividing both antecedent and consequent by any non-zero real scalar $k$ leaves the ratio unchanged:
   $$\frac{a}{b} = \frac{ka}{kb} = \frac{a/k}{b/k}$$
2. **Comparison of Ratios**: To compare $\frac{a}{b}$ and $\frac{c}{d}$, cross-multiply:
   $$\frac{a}{b} > \frac{c}{d} \iff ad > bc$$
3. **Compound Ratio**: For ratios $(a : b)$ and $(c : d)$, the compounded ratio is:
   $$\text{Compounded Ratio} = (ac) : (bd)$$

---

### Special Ratio Typologies
* **Duplicate Ratio**: $a^2 : b^2$
* **Sub-Duplicate Ratio**: $\sqrt{a} : \sqrt{b}$
* **Triplicate Ratio**: $a^3 : b^3$
* **Sub-Triplicate Ratio**: $\sqrt[3]{a} : \sqrt[3]{b}$
* **Reciprocal / Inverse Ratio**: The inverse of $a : b$ is $\frac{1}{a} : \frac{1}{b} = \mathbf{b : a}$.
  * For three terms: The inverse of $a : b : c$ is:
    $$\frac{1}{a} : \frac{1}{b} : \frac{1}{c} = \mathbf{bc : ca : ab}$$

---

### The Bridge Algorithm for Combining Ratios
Given $A : B = a : b$ and $B : C = c : d$:
$$\begin{array}{ccccc}
A & : & B & & \\
a & : & b & & \\
& & c & : & d \\
\hline
(a \times c) & : & (b \times c) & : & (b \times d)
\end{array}$$

$$\mathbf{A : B : C = (ac) : (bc) : (bd)}$$

#### Exemplar: If $A : B = 2 : 3$ and $B : C = 4 : 5$, find $A : B : C$.
$$A : B : C = (2 \times 4) : (3 \times 4) : (3 \times 5) = \mathbf{8 : 12 : 15}$$

---

## 11.2 Proportions & The Componendo-Dividendo (C&D) Rule

Four quantities $a, b, c, d$ are in **proportion** ($a : b :: c : d$) if:
$$\frac{a}{b} = \frac{c}{d} \iff \mathbf{ad = bc \quad (\text{Product of Extremes} = \text{Product of Means})}$$

### Canonical Proportional Terms:
* **Fourth Proportional** to $a, b, c$: Let fourth term be $x \implies \frac{a}{b} = \frac{c}{x} \implies \mathbf{x = \frac{bc}{a}}$.
* **Third Proportional** to $a, b$: $a, b, x$ are in continued proportion $\implies \frac{a}{b} = \frac{b}{x} \implies \mathbf{x = \frac{b^2}{a}}$.
* **Mean Proportional** between $a$ and $b$: Let mean be $m \implies \frac{a}{m} = \frac{m}{b} \implies m^2 = ab \implies \mathbf{m = \sqrt{ab}}$.

---

### The Componendo & Dividendo (C&D) Theorem
If $\frac{a}{b} = \frac{c}{d}$, then:
$$\mathbf{\frac{a + b}{a - b} = \frac{c + d}{c - d}}$$

#### Exemplar: Solve for $x$ given $\frac{\sqrt{x + 5} + \sqrt{x - 5}}{\sqrt{x + 5} - \sqrt{x - 5}} = \frac{3}{1}$.
* Apply Componendo & Dividendo directly:
  $$\frac{(\sqrt{x+5} + \sqrt{x-5}) + (\sqrt{x+5} - \sqrt{x-5})}{(\sqrt{x+5} + \sqrt{x-5}) - (\sqrt{x+5} - \sqrt{x-5})} = \frac{3 + 1}{3 - 1}$$
  $$\frac{2\sqrt{x + 5}}{2\sqrt{x - 5}} = \frac{4}{2} = 2 \implies \frac{\sqrt{x + 5}}{\sqrt{x - 5}} = 2$$
* Square both sides:
  $$\frac{x + 5}{x - 5} = 4 \implies x + 5 = 4x - 20 \implies 3x = 25 \implies \mathbf{x = \frac{25}{3}}$$

---

## 11.3 The Chain Rule: Unified Work-Time-Output Invariant

All compound proportionality problems in physical work, manpower, days, hours, and wages are unified under the **Universal Chain Rule Invariant**:

$$\mathbf{\frac{M_1 \times D_1 \times H_1 \times E_1}{W_1} = \frac{M_2 \times D_2 \times H_2 \times E_2}{W_2}}$$

Where:
* $M = \text{Number of men / workers}$
* $D = \text{Number of working days}$
* $H = \text{Number of working hours per day}$
* $E = \text{Relative efficiency of workers}$
* $W = \text{Work output, units produced, length of trench dug, or total wages paid}$

#### Multi-Tier Worked Exemplar (R.S. Aggarwal Benchmark):
If $36$ men can knit $200$ metres of cloth in $24$ days working $8$ hours a day, in how many days can $48$ men knit $300$ metres of cloth working $6$ hours a day?
1. **Identify Variables**:
   * $M_1 = 36, D_1 = 24, H_1 = 8, W_1 = 200$
   * $M_2 = 48, D_2 = ?, H_2 = 6, W_2 = 300$
2. **Apply Chain Invariant**:
   $$\frac{36 \times 24 \times 8}{200} = \frac{48 \times D_2 \times 6}{300}$$
3. **Cancel Factors**:
   $$\frac{36 \times 24 \times 8}{2} = \frac{48 \times 6 \times D_2}{3}$$
   $$18 \times 24 \times 8 = 16 \times 6 \times D_2 \implies 3456 = 96 \cdot D_2$$
   $$D_2 = \frac{3456}{96} = \mathbf{36 \text{ days}}$$

---

## 11.4 Partnership Mathematics (Capital × Time)

In a commercial partnership, net profits (or losses) are distributed in direct proportion to the **product of Capital Invested ($C$) and the Duration of Investment ($T$)**:

$$\mathbf{\text{Profit Ratio } P_A : P_B : P_C = (C_A \times T_A) : (C_B \times T_B) : (C_C \times T_C)}$$

```
┌──────────────────────────────┬───────────────────────────────┬────────────────────────────────────────────────────────┐
│ Partnership Case             │ Investment Condition          │ Profit Distribution Ratio                              │
├──────────────────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────┤
│ Simple Partnership           │ Same time duration (T₁=T₂=T₃) │ P_A : P_B : P_C = C_A : C_B : C_C                      │
│ Compound Partnership         │ Varying times & capitals      │ P_A : P_B : P_C = (C_A · T_A) : (C_B · T_B) : (C_C · T_C)│
│ Active (Working) Partner     │ Salary deducted before split  │ Remaining Profit split according to (C · T) ratio      │
└──────────────────────────────┴───────────────────────────────┴────────────────────────────────────────────────────────┘
```

#### Multi-Tier Worked Exemplar:
$A$ and $B$ enter into a partnership. $A$ invests ₹$50,000$ for $12$ months, while $B$ joins after $3$ months with ₹$60,000$. At the end of the year, total profit is ₹$33,000$. Find $B$'s share.
1. **Determine Time Durations**:
   * $T_A = 12 \text{ months}$
   * $B$ joined after 3 months $\implies T_B = 12 - 3 = 9 \text{ months}$.
2. **Compute Effective Capital-Time Product**:
   * $A = 50000 \times 12 = 600,000$
   * $B = 60000 \times 9 = 540,000$
3. **Profit Ratio**:
   $$P_A : P_B = 600000 : 540000 = 60 : 54 = \mathbf{10 : 9}$$
4. **Calculate $B$'s Share**:
   $$\text{Total Units} = 10 + 9 = 19 \implies B\text{'s share} = \frac{9}{19} \times 33000 = \text{₹}\mathbf{15,631.58}$$

---

## 11.5 The Coin Denomination Invariant

A standard aptitude problem involves a bag containing coins of ₹1, 50 paise, and 25 paise in a given ratio:
$$\text{Total Value in ₹} = \sum (\text{Number of Coins of Denomination } i) \times (\text{Face Value of Denomination } i \text{ in ₹})$$

#### Multi-Tier Worked Exemplar:
A bag contains ₹1, 50 paise, and 25 paise coins in the ratio $5 : 6 : 8$. If the total money in the bag is ₹$210$, find the number of 50 paise coins.
1. Let the number of coins be $5x, 6x, 8x$.
2. Express face values in Rupees:
   * ₹1 coin $= ₹1.00$
   * 50 paise coin $= ₹0.50 = ₹\frac{1}{2}$
   * 25 paise coin $= ₹0.25 = ₹\frac{1}{4}$
3. Total Rupee Value equation:
   $$(5x \times 1) + \left(6x \times \frac{1}{2}\right) + \left(8x \times \frac{1}{4}\right) = 210$$
   $$5x + 3x + 2x = 210 \implies 10x = 210 \implies x = 21$$
4. Number of 50 paise coins:
   $$\text{Count} = 6x = 6 \times 21 = \mathbf{126 \text{ coins}}$$

---

## 11.6 Top Examiner Traps in Ratio & Partnership

1. **The Inverse Ratio Linear Inversion Trap**:
   Assuming the inverse of $2 : 3 : 4$ is $4 : 3 : 2$. This is completely false! The true inverse is $\frac{1}{2} : \frac{1}{3} : \frac{1}{4} = \mathbf{6 : 4 : 3}$ (multiplying by $\text{LCM} = 12$).
2. **Work Output in Denominator in Chain Rule**:
   Placing work $W$ in the numerator of the chain rule. The invariant is $\frac{MDH}{W}$, because more men, days, and hours produce **more work** (direct variation). Work must be in the denominator!
3. **The Active Partner Gross Profit Omission**:
   Dividing the total profit first and then paying the working partner's salary from their share. The salary must be deducted from **gross total profit before any ratio split**!
