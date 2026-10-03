# RAPID REVISION MATRIX: CHAPTER 09

**Topic**: Quadratic Equations, Discriminant Analysis & The Master Sign Table  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: The Master 4-Sign Table for $x^2 \pm bx \pm c = 0$

| Equation Pattern | Sign of Root 1 | Sign of Root 2 | Mental Memory Hook |
| :---: | :---: | :---: | :--- |
| **$(+, +)$** | **$-$** | **$-$** | Positive world produces all-negative roots. |
| **$(-, +)$** | **$+$** | **$+$** | Negative linear coefficient with positive constant yields all-positive roots. |
| **$(+, -)$** | **$-$ (Larger)** | **$+$ (Smaller)** | Negative constant splits signs; larger root takes opposite of $b$'s sign. |
| **$(-, -)$** | **$+$ (Larger)** | **$-$ (Smaller)** | Negative constant splits signs; larger root takes opposite of $b$'s sign. |

---

### Matrix B: Discriminant Spectrum ($D = b^2 - 4ac$)

| Value of $D$ | Nature of Roots | Parabola $y = ax^2 + bx + c$ Geometry |
| :--- | :--- | :--- |
| **$D > 0$ (Perfect Square)** | Real, distinct, rational | Crosses x-axis at 2 distinct rational coordinates. |
| **$D > 0$ (Non-Square)** | Real, distinct, irrational conjugates ($p \pm \sqrt{q}$) | Crosses x-axis at 2 irrational points. |
| **$D = 0$** | Real, equal, repeated ($\alpha = \beta = -b/2a$) | Tangent to x-axis at exactly 1 vertex point. |
| **$D < 0$** | Complex conjugate pairs ($p \pm iq$) | Floating parabola; never touches or crosses x-axis. |

---

## 2. 60-Second Retrieval Skeleton

```text
ax² + bx + c = 0 ➔ Roots: x = [-b ± √(b² - 4ac)] / (2a)
➔ Sum: α + β = -b/a ➔ Product: α · β = c/a ➔ Diff: |α - β| = √D / |a|
➔ Both Constants Negative (c₁ < 0 and c₂ < 0) ➔ ALWAYS CND (Relationship Cannot Be Determined)!
➔ Cross-Scaling Roots: Scale roots of x by a₂ and roots of y by a₁ to avoid fractional comparisons!
➔ Quadratic Extremum: Max/Min occurs at x = -b / (2a) ➔ Extremum Value = -D / (4a)
➔ Radical Degree Distinction: x² = 25 ➔ x = ±5 | y = √25 ➔ y = +5 strictly (x ≤ y!)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Instant CND Rule Ignorance**: Spending 2 minutes calculating roots when both $c_1 < 0$ and $c_2 < 0$. It is guaranteed to be CND every single time!
2. **The $x^2 = k$ vs $y = \sqrt{k}$ Trap**: $x^2 = 36 \implies x = +6, -6$. $y = \sqrt{36} \implies y = +6$. Here $x \le y$, not $x = y$!
3. **Destroying Roots by Cancelling $x$**: In $x^2 = 8x$, cancelling $x$ leaves $x = 8$ and destroys $x = 0$. You must write $x(x - 8) = 0$.
4. **Un-normalized Negative Leading Coefficient**: If equation starts with $-2x^2 + 5x - 2 = 0$, you must multiply by $-1$ to make $a > 0$ ($2x^2 - 5x + 2 = 0$) before using the Sign Table.
5. **Discriminant Fractional Denominator**: In computing vertex extremum value, the denominator is $4a$, not $2a$: $\text{Extremum} = \frac{4ac - b^2}{4a}$.
