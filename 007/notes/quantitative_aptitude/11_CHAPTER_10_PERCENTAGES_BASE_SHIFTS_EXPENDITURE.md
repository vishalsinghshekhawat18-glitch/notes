<div style="page-break-before: always;"></div>

# CHAPTER 10: PERCENTAGES: BASE SHIFTS, NET EFFECTIVE CHANGES & INVERSE PROPORTIONALITY

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 10: Percentage, pp. 308–373)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 5: Percentages & Base Scaling)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 9: Percentage & Applications)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 1: Percentages & Comparative Multipliers)

---

## 10.1 The Definition & Anatomy of Percentage

A **percentage** is a dimensionless ratio expressing a fraction of $100$. The term originates from the Latin *per centum* ("by the hundred"):
$$x\% = \frac{x}{100}$$

### The Universal Invariant: Denominator Baseline Sensitivity
Every percentage statement is meaningless without its **reference baseline**. In mathematical formulation:
$$\text{Percentage Change} = \frac{\text{Absolute Change}}{\mathbf{\text{Original Base Value}}} \times 100$$

> **The Examiner's Linguistic Trap**:
> * **"Increased BY 20%"**: New value is $100\% + 20\% = 120\%$ of base (Multiplying factor $= 1.20$).
> * **"Increased TO 120%"**: New value is $120\%$ of base (Identical to increased by 20%).
> * **"Increased TO 20%"**: New value is $20\%$ of base (A catastrophic $80\%$ reduction!).

---

## 10.2 The Base Shift Invariant (The Fractional Reciprocal Rule)

If quantity $A$ is greater than quantity $B$ by a certain percentage, by what percentage is $B$ smaller than $A$?  
Because the reference baseline shifts from $B$ to the larger quantity $A$, the return percentage is **strictly smaller**:

```
┌─────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Comparative Relation            │ Exact Closed Percentage Formula                        │
├─────────────────────────────────┼────────────────────────────────────────────────────────┤
│ If A is R% MORE than B          │ B is LESS than A by: [R / (100 + R)] × 100%            │
│ If A is R% LESS than B          │ B is MORE than A by: [R / (100 - R)] × 100%            │
└─────────────────────────────────┴────────────────────────────────────────────────────────┘
```

---

### The Fractional Shortcut: $\frac{a}{b} \leftrightarrow \frac{a}{b \pm a}$
Expressing percentages as reduced fractions eliminates all arithmetic:

$$\mathbf{\text{An Increase of } +\frac{a}{b} \iff \text{A Compensating Decrease of } -\frac{a}{b + a}}$$

$$\mathbf{\text{A Decrease of } -\frac{a}{b} \iff \text{A Compensating Increase of } +\frac{a}{b - a}}$$

```
┌───────────────────────────────┬───────────────────────────────┬────────────────────────────────────────┐
│ Upward Movement (+a/b)        │ Downward Movement (-a/(b+a))  │ Classic Problem Exemplar               │
├───────────────────────────────┼───────────────────────────────┼────────────────────────────────────────┤
│ +1/2  (+50.0%)                │ -1/3  (-33.33%)               │ Earnings ratio / Salary comparison     │
│ +1/3  (+33.33%)               │ -1/4  (-25.0%)                │ Tax rate increases                     │
│ +1/4  (+25.0%)                │ -1/5  (-20.0%)                │ Price of petrol / Sugar consumption    │
│ +1/5  (+20.0%)                │ -1/6  (-16.67%)               │ Speed and Time inverse trade-off       │
│ +1/6  (+16.67%)               │ -1/7  (-14.28%)               │ Production deficit                     │
└───────────────────────────────┴───────────────────────────────┴────────────────────────────────────────┘
```

#### Multi-Tier Worked Exemplar:
If $A$'s salary is $50\%$ more than that of $B$, then how much percent is $B$'s salary less than that of $A$?
* Convert $50\%$ to fraction: $+\frac{1}{2}$ ($a = 1, b = 2$).
* Compensating decrease $= -\frac{a}{b + a} = -\frac{1}{2 + 1} = -\mathbf{\frac{1}{3}} = \mathbf{33\frac{1}{3}\%}$.

---

## 10.3 Price, Consumption & Expenditure Invariants

In consumer economics, the fundamental relationship is:
$$\mathbf{\text{Expenditure} = \text{Price} \times \text{Consumption}}$$

When total expenditure is held constant, Price ($P$) and Consumption ($C$) are **inversely proportional**:
$$P \propto \frac{1}{C} \implies P \times C = \text{Constant}$$

### Standard Formulae:
1. If the price of a commodity increases by $R\%$, the reduction in consumption so as not to increase expenditure is:
   $$\mathbf{\text{Reduction \%} = \left[\frac{R}{100 + R} \times 100\right]\%}$$
2. If the price of a commodity decreases by $R\%$, the increase in consumption so as not to decrease expenditure is:
   $$\mathbf{\text{Increase \%} = \left[\frac{R}{100 - R} \times 100\right]\%}$$

#### Multi-Tier Worked Exemplar (R.S. Aggarwal Benchmark):
If the price of sugar rises from ₹6 per kg to ₹7.50 per kg, find by what percent a household must reduce its consumption so that its expenditure remains unchanged.
* Price increase: from ₹6 to ₹7.50.
* Absolute increase $= 7.50 - 6.00 = ₹1.50$.
* Percentage price rise: $\frac{1.50}{6.00} \times 100 = 25\% = +\frac{1}{4}$.
* Since price increased by $+\frac{1}{4}$, consumption must fall by:
  $$-\frac{1}{4 + 1} = -\frac{1}{5} = \mathbf{20\%}$$
*(Immediate mental resolution in 3 seconds without calculating equations!)*

---

## 10.4 Successive Percentage Changes & Net Effective Multiplier

When a quantity is changed successively by $a\%$ and then by $b\%$, the net effective percentage change is:

$$\mathbf{\text{Net \% Change} = \left(a + b + \frac{ab}{100}\right)\%}$$

*(Where increases are substituted as positive numbers and decreases as negative numbers).*

```
┌─────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Successive Operation            │ Net Formula Result                                     │
├─────────────────────────────────┼────────────────────────────────────────────────────────┤
│ Two successive increases (+a, +b)│ +a + b + (ab / 100)                                   │
│ Increase (+a), Decrease (-b)    │ +a - b - (ab / 100)                                   │
│ Two successive discounts (-a, -b)│ -(a + b - ab / 100)                                   │
│ Equal Increase & Decrease (±x)  │ +x - x - (x² / 100) = -(x / 10)² %  [ALWAYS A LOSS!]   │
└─────────────────────────────────┴────────────────────────────────────────────────────────┘
```

#### The Equal Increase-Decrease Law:
If the price of an article is first increased by $x\%$ and then decreased by $x\%$, the net result is **ALWAYS a decrease** equal to:
$$\mathbf{\text{Net Loss \%} = \left(\frac{x}{10}\right)^2\% = \frac{x^2}{100}\%}$$

* Increase by $20\%$ then decrease by $20\% \implies \text{Net Loss} = \left(\frac{20}{10}\right)^2 = \mathbf{4\% \text{ loss}}$.
* Increase by $30\%$ then decrease by $30\% \implies \text{Net Loss} = \left(\frac{30}{10}\right)^2 = \mathbf{9\% \text{ loss}}$.

---

## 10.5 Population Growth & Depreciation Invariants

### 1. Population Compound Growth
Let present population be $P$, growing at annual rate $R\%$:
* **Population after $n$ years**:
  $$P_n = \mathbf{P\left(1 + \frac{R}{100}\right)^n}$$
* **Population $n$ years ago**:
  $$P_{\text{past}} = \mathbf{\frac{P}{\left(1 + \frac{R}{100}\right)^n}}$$

---

### 2. Machine Depreciation
Let present value of a machine be $P$, depreciating at annual rate $R\%$:
* **Value after $n$ years**:
  $$V_n = \mathbf{P\left(1 - \frac{R}{100}\right)^n}$$
* **Value $n$ years ago**:
  $$V_{\text{past}} = \mathbf{\frac{P}{\left(1 - \frac{R}{100}\right)^n}}$$

#### Exemplar: The population of a town increases by 5% annually. If its present population is 185,220, what was it 3 years ago?
* Here $R = 5\% = \frac{1}{20} \implies$ Multiplier is $\left(1 + \frac{1}{20}\right) = \frac{21}{20}$.
* Population 3 years ago:
  $$P_0 = 185220 \div \left(\frac{21}{20}\right)^3 = 185220 \times \frac{8000}{9261}$$
* Since $185220 / 9261 = 20$:
  $$P_0 = 20 \times 8000 = \mathbf{160,000}$$

---

## 10.6 Top Examiner Traps in Percentage Questions

1. **The Election "Total Votes" vs "Valid Votes" Ambiguity**:
   * If question says *"A candidate got 60% of the VALID votes"*, calculate the base after subtracting invalid votes.
   * If question says *"A candidate got 60% of the TOTAL votes polled"*, the base includes invalid votes!
2. **The Successive Discount Addition Fallacy**:
   Two successive discounts of $20\%$ and $10\%$ do NOT equal a $30\%$ discount!  
   $$\text{Net Discount} = 20 + 10 - \frac{20 \times 10}{100} = 30 - 2 = \mathbf{28\%}$$
3. **The Passing Mark Margin Confusion**:
   If candidate $A$ gets $30\%$ and fails by $10$ marks, while candidate $B$ gets $40\%$ and gets $15$ marks more than the pass mark:
   $$\text{Difference in \%} = 40\% - 30\% = 10\%$$
   $$\text{Difference in Marks} = (+15) - (-10) = \mathbf{25 \text{ marks}} \quad \text{(NOT } 15 - 10 = 5!\text{)}$$
   $$10\% = 25 \implies \text{Total Marks} = \mathbf{250}$$.
