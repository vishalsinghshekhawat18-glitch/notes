# RAPID REVISION MATRIX: CHAPTER 12

**Topic**: Averages, Weighted Mean, Net Deviation Balancing & Group Dynamics  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Member Inclusion, Exclusion, Replacement & Misread

| Scenario | Given Parameters | Fast Net-Deviation Formula | Directional Check |
| :--- | :--- | :--- | :--- |
| **New Entrant Joins** | $N$ original, average changes by $\Delta A$ | $\text{Value}_{\text{new}} = A_{\text{new}} + N \times (A_{\text{new}} - A_{\text{old}})$ | If average increases, new person is **heavier/older** than original average. |
| **Member Leaves** | $N$ original, average becomes $A_{\text{new}}$ | $\text{Value}_{\text{left}} = A_{\text{old}} + (N - 1) \times (A_{\text{old}} - A_{\text{new}})$ | If average rises after exit, the person who left was **lighter/younger** than average. |
| **Direct Replacement** | $N$ constant, old item $X$ replaced by $Y$ | $Y = X + N \times \Delta A$ | If average drops by $2$, replacement is $2N$ less than replaced person. |
| **Misread Observation** | Correct $X_{\text{true}}$, read $X_{\text{wrong}}$ | $A_{\text{correct}} = A_{\text{given}} + \frac{X_{\text{true}} - X_{\text{wrong}}}{N}$ | Add net error per capita algebraically. |

---

### Matrix B: Cricket Batting vs Bowling Invariants

| Domain | Definition | Critical Equation | Impact of Good Performance |
| :--- | :--- | :--- | :--- |
| **Batting Average** | $\frac{\text{Total Runs}}{\text{Total Dismissals (Outs)}}$ | $\text{Total Runs} = \text{Average} \times \text{Innings Out}$ | **Higher** is better. Not-outs reduce denominator, inflating average. |
| **Bowling Average** | $\frac{\text{Total Runs Conceded}}{\text{Total Wickets Taken}}$ | $\text{Total Runs Conceded} = \text{Average} \times \text{Wickets}$ | **Lower** is better. "Improving by $0.4$" means the average **decreases** by $0.4$! |

---

## 2. 60-Second Retrieval Skeleton

```text
Net Deviation Invariant: ∑ (xᵢ - A) = 0   [Algebraic sum of deviations from true mean is EXACTLY ZERO]
➔ Assumed Mean Engine: True Mean = A₀ + (∑ dᵢ) / N
➔ Weighted Mean: A_w = (n₁·A₁ + n₂·A₂ + ... + nₖ·Aₖ) / (n₁ + n₂ + ... + nₖ)
➔ Replacement Shortcut: New Value = Replaced Value + N × (Net Change in Average)
➔ Consecutive Numbers AP: If n is ODD ➔ Middle term. If n is EVEN ➔ Arithmetic mean of two central terms.
➔ Bowling Balance Equation: (Runs Conceded Before + New Runs) / (Wickets Before + New Wickets) = New Average
```

---

## 3. Top 5 Instant Killer Traps

1. **Bowling Average "Improvement" Sign Error**: If a bowler's average improves by $1.2$, the new average is $A_{\text{old}} - 1.2$, NOT $A_{\text{old}} + 1.2$! Bowling average measures runs conceded per wicket; lower is superior.
2. **Batting Average Denominator Fallacy**: Dividing total runs by total matches played when the batsman was "not out" in several innings. The true denominator is **Dismissals (Innings Out)**.
3. **Misread Multi-Item Sign Confusion**: When replacing multiple wrong readings, compute $\Delta_{\text{total}} = \sum \text{Correct} - \sum \text{Wrong}$. If $\Delta_{\text{total}} < 0$, the reported average must decrease.
4. **Consecutive Even/Odd Step Size**: In a set of consecutive odd or even numbers, the gap between consecutive terms is **$2$**, whereas in consecutive integers it is **$1$**.
5. **Weighted Average Sample Size Blindness**: Computing the simple mean of subgroup averages when group sizes differ: $\frac{A_1 + A_2}{2} \neq A_w$ unless $n_1 = n_2$.
