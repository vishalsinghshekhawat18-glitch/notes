# RAPID REVISION MATRIX: CHAPTER 15

**Topic**: Compound Interest, Compounding Intervals, Difference Formulations & Amortization  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Compounding Intervals & Pascal Decomposition

| Interval / Duration | Frequency ($k$) | Rate & Periods | Pascal Ratio | Effective CI Formula |
| :--- | :--- | :--- | :--- | :--- |
| **Annual (2 Years)** | $k = 1$ | $R\%, n = 2$ | **$2 : 1$** | $\text{CI} = 2A + 1B$ |
| **Annual (3 Years)** | $k = 1$ | $R\%, n = 3$ | **$3 : 3 : 1$** | $\text{CI} = 3A + 3B + 1C$ |
| **Half-Yearly** | $k = 2$ | $\frac{R}{2}\%, 2n$ cycles | Depends on $2n$ | $A = P \left(1 + \frac{R}{200}\right)^{2n}$ |
| **Quarterly** | $k = 4$ | $\frac{R}{4}\%, 4n$ cycles | Depends on $4n$ | $A = P \left(1 + \frac{R}{400}\right)^{4n}$ |

*Definitions*: $A = P \cdot r$, $B = A \cdot r$, $C = B \cdot r$ where $r = \frac{R}{100}$.

---

### Matrix B: Difference Identifiers & CI Loan Amortization

| Metric | Mathematical Identity | Key Invariant |
| :--- | :--- | :--- |
| **2-Year Difference ($D_2$)** | $D_2 = P \left(\frac{R}{100}\right)^2$ | Directly proportional to $R^2$ and $P$. |
| **3-Year Difference ($D_3$)** | $D_3 = P \left(\frac{R}{100}\right)^2 \left(\frac{300 + R}{100}\right)$ | Equivalent to $3 \cdot D_2 + P(R/100)^3$. |
| **Difference Ratio ($\frac{D_3}{D_2}$)** | $\frac{D_3}{D_2} = 3 + \frac{R}{100}$ | **Independent of Principal $P$**; unlocks $R$ instantly! |
| **2-Year Equal Installment ($x$)** | $P = \frac{x}{1+r} + \frac{x}{(1+r)^2} = \frac{x(2+r)}{(1+r)^2}$ | Sum of present values must equal principal loan. |
| **Exponential Multiplier** | Sum doubles in $T$ yrs $\implies 2^k$ times in $k \cdot T$ yrs | Power law scaling (powers of 2, 3, etc.). |

---

## 2. 60-Second Retrieval Skeleton

```text
Fundamental CI Amount: A = P(1 + R/(100k))^(kn)
➔ 2-Year CI-SI Difference: D₂ = P(R/100)²
➔ 3-Year CI-SI Difference: D₃ = P(R/100)² · ((300 + R)/100)
➔ Difference Ratio: D₃ / D₂ = 3 + (R/100)  [Rate R = 100 × (D₃/D₂ - 3)]
➔ Pascal Tree Fast CI:
    - 2 Years (2:1): CI = 2A + B, Difference = B
    - 3 Years (3:3:1): CI = 3A + 3B + C, Difference = 3B + C
➔ CI Multiplier Law: Doubles in T yrs ➔ 8 times (2³) in 3T yrs!
➔ 2-Year Loan Amortization: P = x/(1+r) + x/(1+r)²
```

---

## 3. Top 5 Instant Killer Traps

1. **The Multiplier Scaling Confusion**: Applying SI rule $(N-1)$ to CI questions. In CI, doubling in $5$ years means $8$ times ($2^3$) requires $3 \times 5 = \mathbf{15\text{ years}}$, not $35$ years.
2. **Semi-Annual Period Neglect**: Dividing the annual rate by $2$ but failing to multiply the number of years by $2$ ($n \to 2n$).
3. **Difference Ratio $P$-Dependency Fallacy**: Searching for principal $P$ to calculate $R$ from 2-year and 3-year differences. The ratio $\frac{D_3}{D_2}$ is purely a function of $R$!
4. **CI vs SI Installment Formula Swapping**: Using $n \cdot x + \dots$ on compound loans. CI loan installments require discounting cash flows: $P = \sum x / (1+r)^t$.
5. **Fractional Year Compounding**: Using $(1 + R)^{2.5}$ without a calculator. The correct decomposed form is $(1+R)^2 \times (1 + 0.5R)$.
