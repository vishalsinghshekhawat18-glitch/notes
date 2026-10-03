# RAPID REVISION MATRIX: CHAPTER 14

**Topic**: Simple Interest, Variable Rate Regimes & Debt Installments  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Multiplier Scaling & Partitioning Ratios

| Problem Structure | Given Condition | Master Identity | Operational Shortcut |
| :--- | :--- | :--- | :--- |
| **Sum Multiplies $N$ times** | Time $T$ years | $R \times T = 100(N - 1)$ | $R = \frac{100(N-1)}{T}$ |
| **Two-Epoch Scaling** | $N_1$ in $T_1$, $N_2$ in $T_2$ | $\frac{T_1}{T_2} = \frac{N_1 - 1}{N_2 - 1}$ | Multiply by ratio of **Interest Units $(N-1)$**, NOT $N$! |
| **Equal Interest Division** | $I_1 = I_2 = \dots = I_k$ | $P_1 : P_2 : \dots = \frac{1}{R_1 T_1} : \frac{1}{R_2 T_2} : \dots$ | Inversely proportional to $R \times T$. |
| **Equal Terminal Amounts** | $A_1 = A_2 = \dots = A_k$ | $P_1 : P_2 : \dots = \frac{1}{100 + R_1 T_1} : \frac{1}{100 + R_2 T_2} : \dots$ | Inversely proportional to $(100 + RT)$. |

---

### Matrix B: Debt Installment Mechanics & Day Counts

| Parameter | Mathematical Formulation | Standard Exam Benchmarks |
| :--- | :--- | :--- |
| **Annual Installment to Discharge Debt $A$** | $x = \frac{100 \cdot A}{100 \cdot n + \frac{R \cdot n(n - 1)}{2}}$ | $n = 3 \implies 3x + \frac{3Rx}{100} = A$<br/>$n = 4 \implies 4x + \frac{6Rx}{100} = A$ |
| **Standard 73-Day Divisors** | $T = \frac{\text{Days}}{365}$ | $73\text{d} = \frac{1}{5}\text{yr}$; $146\text{d} = \frac{2}{5}\text{yr}$; $219\text{d} = \frac{3}{5}\text{yr}$; $292\text{d} = \frac{4}{5}\text{yr}$ |
| **Variable Rate Summation** | $I = \frac{P}{100} \sum (R_i \cdot T_i)$ | Effective Rate $R_{\text{eff}} = \frac{\sum R_i T_i}{\sum T_i}$ |

---

## 2. 60-Second Retrieval Skeleton

```text
Fundamental Formula: SI = (P · R · T) / 100   [Amount A = P(1 + RT/100)]
➔ Two-Epoch Multiplier Rule: T₁ / T₂ = (N₁ - 1) / (N₂ - 1)  [Doubles in 7y ➔ 8x in 49y!]
➔ Capital Partitioning:
    - Equal Interests: P₁ : P₂ = (1 / R₁T₁) : (1 / R₂T₂)
    - Equal Amounts:   P₁ : P₂ = (1 / (100 + R₁T₁)) : (1 / (100 + R₂T₂))
➔ SI Debt Installment Formula: n · x + [x · R · n(n - 1)] / 200 = Due Debt A
➔ Calendar Rule: Count either start date OR end date, never both! (73-day table: 73/365 = 1/5)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Multiplier Proportionality Trap**: Doubling in $5$ years $\implies$ $4$ times in $10$ years (WRONG). Doubling gives $1$ unit of interest; $4$ times gives $3$ units of interest $\implies 3 \times 5 = \mathbf{15\text{ years}}$.
2. **Installment Direct Division**: Dividing terminal due debt directly by $n$ ($x = A/n$). This completely ignores the interest accrued on early installment payments.
3. **Equal Amount vs Equal Interest Formula Mix-up**: Using $\frac{1}{RT}$ when the question states "amount received by each son is equal" instead of $\frac{1}{100 + RT}$.
4. **Calendar Day Inclusive Overcount**: Counting both the deposit day and withdrawal day adds $1$ extra day, corrupting the $73$-day fraction.
5. **Effective Rate Weighting Trap**: Taking the simple unweighted average of rates when tenures differ ($\frac{R_1 + R_2}{2}$ instead of $\frac{R_1 T_1 + R_2 T_2}{T_1 + T_2}$).
