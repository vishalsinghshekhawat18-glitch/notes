# CHAPTER 15: COMPOUND INTEREST, COMPOUNDING INTERVALS, DIFFERENCE FORMULATIONS & AMORTIZATION

**Domain**: Exponential Capital Accumulation & Actuarial Valuation  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: Exponential Dynamics $\to$ Compounding Frequencies $\to$ Pascal Tree Decomposition $\to$ Difference Formulations $\to$ CI Loan Amortization $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: EXPONENTIAL VS LINEAR ACCRUAL

Compound Interest ($\mathbf{CI}$) embodies the principle of recursive capital reproduction. At the conclusion of each compounding cycle, accrued interest is capitalized—converted into principal—and thereafter generates secondary interest.

### Continuous vs Discrete Compounding Foundation
Let $P$ be the principal, $R$ the nominal annual interest rate in $\%$, and $n$ the time elapsed in years.

Let compounding occur $k$ times per year (compounding frequency). In each sub-period:
- Effective periodic interest rate: $r_{\text{period}} = \frac{R}{100 \cdot k}$
- Total compounding conversion epochs: $N = k \cdot n$

The terminal amount $\mathbf{A}$ is given by the recursive accumulation sequence:
$$\mathbf{A = P \left(1 + \frac{R}{100 \cdot k}\right)^{k \cdot n}}$$

The total **Compound Interest ($\mathbf{CI}$)** generated over the epoch is:
$$\mathbf{\text{CI} = A - P = P \left[ \left(1 + \frac{R}{100 \cdot k}\right)^{k \cdot n} - 1 \right]}$$

```
Capital Growth Trajectory
▲
│                                          Exponential Compound Interest
│                                          A = P(1 + R/100)^n
│                                               . '
│                                           . '
│                                       . '   / Linear Simple Interest
│                                   . '      /  A = P(1 + Rn/100)
│                               . '         /
│                           . '            /
│                       . '               /
│                   . '                  /
│               . '                     /
│           . '                        /
│  . - - - ' - - - - - - - - - - - - - - - - - - -  Principal P
└────────────────────────────────────────────────► Time (Years)
```

---

### Compounding Frequency Parameter Table

| Compounding Interval | Frequency ($k$) | Periodic Rate ($r_{\text{period}}$) | Total Conversion Cycles ($N$) | Operational Formula |
| :--- | :--- | :--- | :--- | :--- |
| **Annually** | $k = 1$ | $R\%$ | $n$ | $A = P \left(1 + \frac{R}{100}\right)^n$ |
| **Semi-Annually (Half-Yearly)** | $k = 2$ | $\frac{R}{2}\%$ | $2n$ | $A = P \left(1 + \frac{R}{200}\right)^{2n}$ |
| **Quarterly** | $k = 4$ | $\frac{R}{4}\%$ | $4n$ | $A = P \left(1 + \frac{R}{400}\right)^{4n}$ |
| **Monthly** | $k = 12$ | $\frac{R}{12}\%$ | $12n$ | $A = P \left(1 + \frac{R}{1200}\right)^{12n}$ |
| **Continuous Limit ($k \to \infty$)** | $\infty$ | Infinitesimal | $\infty$ | $A = P \cdot e^{\frac{R \cdot n}{100}}$ |

---

## 2. FRACTIONAL TENURES & VARIABLE RATE SEQUENCES

### A. Fractional Duration ($n + \frac{a}{b}$ Years Compounded Annually)
When money is invested for a non-integer duration, say $2\frac{3}{5}$ years, compounding occurs in whole units for the integer years, followed by simple accrual over the residual fraction:
$$\mathbf{A = P \left(1 + \frac{R}{100}\right)^n \times \left(1 + \frac{\frac{a}{b} \cdot R}{100}\right)}$$

### B. Successive Annual Rates ($R_1\%, R_2\%, R_3\%$)
When the monetary policy or agreement sets differing interest rates across consecutive years:
$$\mathbf{A = P \left(1 + \frac{R_1}{100}\right) \left(1 + \frac{R_2}{100}\right) \left(1 + \frac{R_3}{100}\right)}$$

---

## 3. THE PASCAL RATIO / TREE DECOMPOSITION ENGINE

For rapid problem-solving in banking and regulatory exams, binomial tree decomposition eliminates tedious decimal multiplication.

Let $r = \frac{R}{100}$.
- **Tier 1 (Base Interest on Principal $P$)**: $A = P \cdot r$
- **Tier 2 (Interest on Tier 1 Interest)**: $B = A \cdot r = P \cdot r^2$
- **Tier 3 (Interest on Tier 2 Interest)**: $C = B \cdot r = P \cdot r^3$

Using Pascal's Triangle coefficients:

| Duration | Pascal Weights | Simple Interest ($\text{SI}$) | Compound Interest ($\text{CI}$) | Difference ($\text{CI} - \text{SI}$) |
| :--- | :--- | :--- | :--- | :--- |
| **2 Years** | **$2 : 1$** | $2A$ | $2A + 1B$ | $\mathbf{1B = P \cdot r^2}$ |
| **3 Years** | **$3 : 3 : 1$** | $3A$ | $3A + 3B + 1C$ | $\mathbf{3B + 1C}$ |
| **4 Years** | **$4 : 6 : 4 : 1$** | $4A$ | $4A + 6B + 4C + 1D$ | $\mathbf{6B + 4C + 1D}$ |

*Practical Demonstration*: Find CI on ₹$10,000$ at $10\%$ for $3$ years.
- $r = 0.10$
- $A = 10,000 \times 0.10 = 1,000$
- $B = 1,000 \times 0.10 = 100$
- $C = 100 \times 0.10 = 10$
- $\text{CI} = 3(1,000) + 3(100) + 1(10) = 3,000 + 300 + 10 = \mathbf{₹3,310}$.
- $\text{CI} - \text{SI} = 3(100) + 1(10) = \mathbf{₹310}$.

---

## 4. THE MASTER $\text{CI} - \text{SI}$ DIFFERENCE IDENTITIES

The divergence between compound interest and simple interest forms the backbone of advanced examination questions.

### Theorem 1: The 2-Year Difference Identity
Let $D_2 = \text{CI}_2 - \text{SI}_2$ over $2$ years at rate $R\%$.
$$\text{SI}_2 = \frac{2PR}{100}$$
$$\text{CI}_2 = P\left[\left(1 + \frac{R}{100}\right)^2 - 1\right] = P\left[\frac{2R}{100} + \left(\frac{R}{100}\right)^2\right]$$

Subtracting yields:
$$\mathbf{D_2 = P \left(\frac{R}{100}\right)^2}$$

### Theorem 2: The 3-Year Difference Identity
Let $D_3 = \text{CI}_3 - \text{SI}_3$ over $3$ years at rate $R\%$.
$$D_3 = 3B + 1C = 3P\left(\frac{R}{100}\right)^2 + P\left(\frac{R}{100}\right)^3 = P\left(\frac{R}{100}\right)^2 \left[3 + \frac{R}{100}\right]$$

Rewriting in canonical examination form:
$$\mathbf{D_3 = P \left(\frac{R}{100}\right)^2 \left(\frac{300 + R}{100}\right)}$$

### Theorem 3: The Universal Ratio of Differences
Dividing the 3-year difference $D_3$ by the 2-year difference $D_2$:
$$\mathbf{\frac{D_3}{D_2} = \frac{300 + R}{100} = 3 + \frac{R}{100}}$$

> **The Sovereign Constant**: The ratio $\frac{D_3}{D_2}$ is **completely independent of Principal $P$**. When a question gives $D_3$ and $D_2$, the annual interest rate $R$ can be found instantly without calculating $P$:
> $$R = 100 \times \left(\frac{D_3}{D_2} - 3\right)$$

---

## 5. EXPONENTIAL MULTIPLIER SCALING (THE POWER LAW)

Unlike simple interest, where the sum scales linearly via $(N - 1)$, compound interest scales exponentially through powers of the base multiplier.

If a principal $P$ becomes $N$ times itself in $T$ years:
$$P \left(1 + \frac{R}{100}\right)^T = N \cdot P \implies \left(1 + \frac{R}{100}\right)^T = N$$

To determine the time $T_{\text{target}}$ required to become $N^k$ times:
$$\left(1 + \frac{R}{100}\right)^{T_{\text{target}}} = N^k = \left[\left(1 + \frac{R}{100}\right)^T\right]^k = \left(1 + \frac{R}{100}\right)^{k \cdot T}$$

$$\mathbf{T_{\text{target}} = k \cdot T \text{ years}}$$

| Event in CI | Multiplier | Equivalent Time | Contrast with SI ($T_{\text{SI}}$) |
| :--- | :--- | :--- | :--- |
| **Sum Doubles** | $2 = 2^1$ | $T$ | $T$ |
| **Sum Becomes 4 Times** | $4 = 2^2$ | $2T$ | $3T$ |
| **Sum Becomes 8 Times** | $8 = 2^3$ | $3T$ | $7T$ |
| **Sum Becomes 16 Times**| $16 = 2^4$ | $4T$ | $15T$ |
| **Sum Becomes $2^k$ Times**| $2^k$ | $\mathbf{k \cdot T}$ | $(2^k - 1) \cdot T$ |

---

## 6. PRESENT VALUE & COMPOUND LOAN AMORTIZATION (EQUAL INSTALLMENTS)

When a principal loan $P$ is amortized through $n$ equal annual payments of ₹$x$ each at $R\%$ compound interest per annum, the fundamental actuarial balance requires that the **Principal equals the sum of Present Values ($\mathbf{PV}$) of all installments**:

$$\mathbf{P = \frac{x}{\left(1 + \frac{R}{100}\right)^1} + \frac{x}{\left(1 + \frac{R}{100}\right)^2} + \dots + \frac{x}{\left(1 + \frac{R}{100}\right)^n}}$$

Let the discount factor be $v = \frac{1}{1 + \frac{R}{100}} = \frac{100}{100 + R}$.

The expression is a finite Geometric Progression:
$$P = x \cdot v \left[ \frac{1 - v^n}{1 - v} \right]$$

### The 2-Year Installment Master Formula
For $n = 2$ installments:
$$P = \frac{x}{1 + r} + \frac{x}{(1 + r)^2} = \frac{x(1 + r) + x}{(1 + r)^2} = \mathbf{\frac{x (2 + r)}{(1 + r)^2}}$$

Where $1 + r = \frac{100 + R}{100}$.

---

## 7. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Difference Ratio to Unlock Rate & Principal (SBI PO Mains)
**Problem**: The difference between compound and simple interest on a certain sum of money for $2$ years at $R\%$ p.a. is ₹$40$, and for $3$ years at the same rate is ₹$125$. Determine the annual interest rate $R$ and the principal sum $P$.

**Solution via Difference Ratio**:
Given $D_2 = 40$ and $D_3 = 125$.

Using $\frac{D_3}{D_2} = \frac{300 + R}{100}$:
$$\frac{125}{40} = \frac{25}{8} = 3 + \frac{1}{8} = \frac{300 + R}{100}$$
$$3 + \frac{R}{100} = 3 + \frac{1}{8} \implies \frac{R}{100} = \frac{1}{8} \implies \mathbf{R = 12.5\% \text{ p.a.}}$$

Now apply $D_2 = P \left(\frac{R}{100}\right)^2$:
$$40 = P \left(\frac{1}{8}\right)^2 = \frac{P}{64} \implies P = 40 \times 64 = \mathbf{₹2,560}$$

---

### Exemplar 2: Power Law vs Linear Multiplier (RBI Grade B Phase 1)
**Problem**: A sum of money placed at compound interest doubles itself in $5$ years. In how many years will it amount to $8$ times itself?

**Execution**:
- Target multiple: $8 = 2^3 \implies k = 3$.
- Given doubling epoch: $T = 5 \text{ years}$.
$$T_{\text{target}} = k \cdot T = 3 \times 5 = \mathbf{15 \text{ years}}$$

*(Note: Under Simple Interest, doubling in 5 years means $8$ times takes $(8-1) \times 5 = 35$ years).*

---

### Exemplar 3: Two-Year Amortization Installment (CAT / UPSC CSAT)
**Problem**: A loan of ₹$6,800$ is to be repaid in two equal annual installments at $12\frac{1}{2}\%$ compound interest per annum. Calculate the value of each installment.

**Execution via Discount Ratios**:
$R = 12.5\% = \frac{1}{8} \implies$ Growth factor $= 1 + \frac{1}{8} = \frac{9}{8}$.
The discount factor is $v = \frac{8}{9}$.

Equating Present Value of installments to loan principal:
$$P = \frac{x}{\frac{9}{8}} + \frac{x}{\left(\frac{9}{8}\right)^2} = \frac{8x}{9} + \frac{64x}{81} = \frac{72x + 64x}{81} = \frac{136x}{81}$$

Given $P = ₹6,800$:
$$\frac{136x}{81} = 6800 \implies x = \frac{6800 \times 81}{136} = 50 \times 81 = \mathbf{₹4,050}$$
Each annual installment is **₹$4,050$**.

---

### Exemplar 4: Half-Yearly vs Annual Yield Divergence (Regulatory Bodies)
**Problem**: Find the compound interest on ₹$16,000$ for $1\frac{1}{2}$ years at $10\%$ per annum, compounded semi-annually.

**Execution**:
- Principal $P = 16,000$
- Semi-annual rate $r = \frac{10\%}{2} = 5\% = \frac{1}{20}$
- Compounding periods $N = 1.5 \times 2 = 3 \text{ cycles}$

Using Pascal's Triangle ($3 : 3 : 1$):
- $A = 16,000 \times \frac{1}{20} = 800$
- $B = 800 \times \frac{1}{20} = 40$
- $C = 40 \times \frac{1}{20} = 2$

$$\text{CI} = 3(800) + 3(40) + 1(2) = 2,400 + 120 + 2 = \mathbf{₹2,522}$$

---

## 8. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: The Multiplier Power Law Confusion** | Applying simple interest multiplication: Doubling in $5$ yrs $\implies 8$ times in $5 \times 4 = 20$ yrs. | In CI, growth is exponential: $8 = 2^3 \implies 3 \times 5 = \mathbf{15\text{ yrs}}$. |
| **Trap 2: Semi-Annual Tenure Adjustment Omission** | Halving the rate to $\frac{R}{2}$ but forgetting to double the duration from $n$ to $2n$. | Both transformations are mandatory: $r \to r/2$, $n \to 2n$. |
| **Trap 3: CI Installment Formula Inversion** | Using simple interest installment formula ($n \cdot x + \dots$) for amortized compound loans. | CI installments discount each payment to present value: $P = \sum \frac{x}{(1+r)^t}$. |
| **Trap 4: 3-Year Difference Shortcut Error** | Using $D_3 = 3 \cdot D_2$. | $D_3 = 3 \cdot D_2 + P(R/100)^3$. The third-tier interest on interest cannot be ignored! |
| **Trap 5: Fractional Year Direct Proportion** | Calculating $A = P(1+R)^{2.5}$ using decimal approximations on non-scientific calculators. | Break into integer compounding and simple residual: $P(1+R)^2 \times (1 + 0.5R)$. |
