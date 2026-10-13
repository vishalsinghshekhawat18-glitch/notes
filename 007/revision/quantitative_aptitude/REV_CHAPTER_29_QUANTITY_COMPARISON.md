# RAPID REVISION MATRIX: CHAPTER 29

**Topic**: Quantity Comparison Laboratory (Q1 vs Q2 vs Q3)  
**Shelf**: 007 (Mind of Aravalli)

---

## 1. Core Distinction Matrices

### Matrix A: 3-Quantity Relational Decision Logic

| Pairwise Findings | Overall Relationship | Final Option Selection | Mathematical Basis |
| :---: | :---: | :---: | :--- |
| $Q_1 > Q_2$ and $Q_2 > Q_3$ | $Q_1 > Q_2 > Q_3$ | Option A | Pure Transitive Chain |
| $Q_1 < Q_2$ and $Q_2 < Q_3$ | $Q_1 < Q_2 < Q_3$ | Option B | Pure Transitive Chain |
| $Q_1 \ge Q_2$ and $Q_2 > Q_3$ | $Q_1 \ge Q_2 > Q_3$ | Option C | Semi-Strict Chain |
| $Q_1 \le Q_2$ and $Q_2 \le Q_3$ | $Q_1 \le Q_2 \le Q_3$ | Option D | Weak Inequality Chain |
| $Q_1 > Q_2$ and $Q_2 < Q_3$ | **CND** | Option E | Relation between $Q_1$ and $Q_3$ undetermined |
| Any Quantity Multi-Valued with Cross-Over | **CND** | Option E | Invariant violation |

---

### Matrix B: Quantity Evaluation Efficiency Strategies

| Question Setup | Standard Inefficient Approach | Optimized Exam Approach |
| :---: | :--- | :--- |
| **Identical Algebraic Structure** | Compute numerical value of each quantity independently (3 × 45 sec). | Simplify algebraically first; cancel identical terms across quantities before computing. |
| **Inequality / Ratio Comparison** | Perform full long division to get exact decimals. | Cross-multiply numerators or compare against common benchmark ($0, 1, 1/2$). |
| **Quadratic Quantities** | Compute roots and pair-match all possibilities blindly. | Check root signs and constant terms ($c < 0$); inspect intervals on number line. |

---

## 2. 60-Second Retrieval Skeleton

```text
➔ Transitive Law: Q₁ > Q₂ AND Q₂ > Q₃ ⟹ Q₁ > Q₃ (Monotonic Chain)
➔ Chain Break: Q₁ > Q₂ BUT Q₂ < Q₃ ⟹ Relationship between Q₁ and Q₃ CANNOT BE DETERMINED (CND)!
➔ Multiple Roots Trap: If Q₁ = ±5 and Q₂ = 4 ⟹ Q₁ can be greater (+5 > 4) OR smaller (-5 < 4) ⟹ CND!
➔ Boundary Zero Trap: Check if variables are specified as positive integers; 0 and negatives flip inequalities!
➔ Selective Evaluation: Often, solving Q₁ and Q₂ immediately eliminates 3 of the 5 answer options.
```

---

## 3. Top 5 Instant Killer Traps

1. **The Transitive Fallacy (Assuming $Q_1 > Q_3$)**: Seeing $Q_1 > Q_2$ and $Q_3 > Q_2$, and incorrectly deducing a relation between $Q_1$ and $Q_3$. Both can be greater than $Q_2$ while their mutual relation is unknown (CND).
2. **Negative Multiplier Sign Inversion**: When simplifying expressions across quantities, multiplying or dividing by an unknown variable $x$ without knowing whether $x > 0$ or $x < 0$ flips the inequality!
3. **Multi-Root Quadratic Overlook**: If $Q_1$ yields $x^2 = 36 \implies x \in \{+6, -6\}$, and $Q_2 = 0$. One root is positive, one is negative $\implies$ Relationship is CND, not $Q_1 > Q_2$.
4. **Unnecessary Full Decimal Evaluation**: Spending 2 minutes computing $\frac{137}{284}$ vs $\frac{141}{279}$. A 5-second cross-multiplication or benchmark estimation suffices.
5. **Ignoring Constraint Domains**: Overlooking statements like *"where $x$ is a positive integer"* which eliminates negative roots and resolves apparent CND ambiguity into a definitive strict inequality.
