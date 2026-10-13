# RAPID REVISION MATRIX: CHAPTER 04

**Topic**: Banking Number Series (Missing & Wrong Number Mastery)  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: The Core Difference & Progression Archetypes

| Pattern Class | Mathematical Law | Visual Identification Cue | Immediate Solution Heuristic |
| :---: | :---: | :---: | :--- |
| **Arithmetic Difference** | $T_{n+1} = T_n + d_n$ where $d_n = \text{const}$ or AP | Moderate, steady growth across sequence | Compute 1st differences immediately. |
| **Multi-Tier Polynomial** | $d_n = an^2 + bn + c$ | Rapid non-linear rise; $\Delta_1$ differences non-constant | Compute 2nd & 3rd differences (e.g. cubic has constant $\Delta_3$). |
| **Geometric / Multiplier** | $T_{n+1} = T_n \times k \pm c_n$ | Terms grow aggressively (e.g. $8 \to 25 \to 76$) | Estimate ratio of adjacent terms $T_{n+1} / T_n \approx k$. |
| **Half-Step Multiplier** | $T_{n+1} = T_n \times (0.5, 1.5, 2.5 \dots)$ | Initial term decreases or stays flat, then explodes | Test $\times 0.5 + 0.5$ or $\times 0.5, \times 1, \times 1.5$. |
| **Cube / Square Offset** | $T_{n+1} = T_n + (n^3 \pm k)$ | Differences match $1, 8, 27, 64, 125 \dots \pm c$ | Check differences against standard cubes $n^3$. |
| **Fibonacci / Accumulative** | $T_{n+1} = T_n + T_{n-1}$ or $T_n \times T_{n-1}$ | Each term approximates sum or product of previous two | Add previous two terms to verify pattern. |
| **Alternating Operations** | $T_{n+1} = T_n \times a + b, T_{n+2} = T_{n+1} \div c - d$ | Step operations alternate between arithmetic and geometric | Track odd and even transitions separately. |

---

### Matrix B: Wrong Number Isolation Algorithm & Endpoint Exceptions

| Step | Action | Diagnostic Logic |
| :---: | :--- | :--- |
| **1. Difference Map** | Write down all consecutive differences $\Delta_1, \Delta_2, \dots, \Delta_{n-1}$. | An **interior** wrong term $T_k$ ($2 \le k \le n-1$) corrupts **two consecutive differences**: $\Delta_{k-1}$ and $\Delta_k$. |
| **2. Fault Isolation** | Identify the boundary where regularity breaks down. | The term sitting between the two erroneous differences is the corrupt interior term $T_k$. |
| **3. Endpoint Exception** | Check endpoints ($T_1$ or $T_n$). | If the corrupt term is $T_1$, only $\Delta_1$ fails. If the corrupt term is $T_n$, only $\Delta_{n-1}$ fails! Do not search for a second failure. |
| **4. Reconstruction** | Compute expected difference from surrounding regular pattern. | Reconstruct candidate $T^*_k$ and verify downstream agreement across the entire remaining sequence. |

---

## 2. 60-Second Retrieval Skeleton

```text
➔ Gentle Steady Rise ➔ Level 1 Differences (AP / Primes / Alternating ±d)
➔ Accelerating Rise ➔ Level 2/3 Differences (Polynomial sequences: Δ3 = const for cubic)
➔ Dramatic Jump ➔ Multiplier + Offset: T_(n+1) = T_n × k + c_n (Estimate k from rightmost pair)
➔ Dip then Rapid Rise ➔ Decimal Multipliers: ×0.5, ×1, ×1.5, ×2, ×2.5
➔ Alternating Rise/Fall ➔ Dual Interleaved Series (Odd positions vs Even positions)
➔ Interior Wrong Term ➔ Exactly 2 consecutive differences fail (W is the pivot)
➔ Endpoint Wrong Term ➔ Exactly 1 difference fails (at T1 or Tn)
➔ 45-Second Pacing Rule: If pattern remains undetected after 45 seconds, FLAG and SKIP!
```

---

## 3. Top 5 Instant Killer Traps

1. **Giving Up After Level 1 Difference**: Assuming a series has no pattern when 1st differences are $15, 23, 33, 45$. Taking 2nd differences gives $8, 10, 12$, and 3rd differences give constant $2$!
2. **The Wrong Number Dual-Difference Panic on Endpoints**: Expecting two differences to fail when the erroneous term is the first ($T_1$) or last ($T_n$). An endpoint error corrupts only ONE adjacent difference.
3. **The Prime Number Disguise**: Differences $2, 3, 5, 7, 11, 13$. Blindly writing $9$ after $7$ instead of recognising the prime sequence (no $9$).
4. **Neglecting the $\times 0.5$ Initial Dip**: In sequences like $16, 8, 8, 12, 24, 60$, candidates search for subtraction rules. Pattern is strictly $\times 0.5, \times 1, \times 1.5, \times 2, \times 2.5$.
5. **Pride-Driven Time Sinks**: Spending 3 minutes in Prelims attempting to force a single series. Fast pattern recognition is key; stubborn questions must be skipped after 45 seconds.
