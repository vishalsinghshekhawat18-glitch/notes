# RAPID REVISION MATRIX: CHAPTER 10

**Topic**: Quadratic Equations, Root Comparison & The CND Invariant  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: The Rebuilt Master Sign Table for $x^2 \pm bx \pm c = 0$ (Normalized $a > 0$)

| Equation Pattern | Standard Form ($b, c > 0$) | Real Root Condition | Root Signs ($\alpha, \beta$) | Real Number Line Ordering |
| :---: | :---: | :---: | :---: | :--- |
| **$(+, +)$** | $x^2 + bx + c = 0$ | $D = b^2 - 4c \ge 0$ | **Negative ($-$), Negative ($-$)** | Both roots $\le 0$. If $D < 0$ (e.g. $x^2+x+1=0$), no real roots exist! |
| **$(-, +)$** | $x^2 - bx + c = 0$ | $D = b^2 - 4c \ge 0$ | **Positive ($+$), Positive ($+$)** | Both roots $\ge 0$. If $D < 0$, no real roots exist! |
| **$(+, -)$** | $x^2 + bx - c = 0$ | Always real ($D > 0$) | **Positive ($+$), Negative ($-$)** | $x_{\text{pos}} > x_{\text{neg}}$ always. Negative root has greater magnitude ($|x_{\text{neg}}| > x_{\text{pos}}$); e.g. $x^2+2x-3=0 \to +1, -3$. |
| **$(-, -)$** | $x^2 - bx - c = 0$ | Always real ($D > 0$) | **Positive ($+$), Negative ($-$)** | $x_{\text{pos}} > x_{\text{neg}}$ always. Positive root has greater magnitude ($x_{\text{pos}} > |x_{\text{neg}}|$); e.g. $x^2-2x-3=0 \to +3, -1$. |

*Pre-Condition*: Ensure leading coefficient is positive ($a > 0$) before applying table. If $a < 0$, multiply entire equation by $-1$.

---

### Matrix B: Discriminant Spectrum ($D = b^2 - 4ac$)

| Value of $D$ | Nature of Roots | Parabola $y = ax^2 + bx + c$ Geometry |
| :--- | :--- | :--- |
| **$D > 0$ (Perfect Square)** | Real, distinct, rational | Crosses x-axis at 2 distinct rational coordinates. |
| **$D > 0$ (Non-Square)** | Real, distinct, irrational conjugates ($p \pm \sqrt{q}$) | Crosses x-axis at 2 irrational points. |
| **$D = 0$** | Real, equal, repeated ($\alpha = \beta = -b/2a$) | Tangent to x-axis at exactly 1 vertex point. |
| **$D < 0$** | Complex conjugate pairs ($p \pm iq$, no real roots) | Floating parabola; never touches or crosses x-axis. |

---

## 2. 60-Second Retrieval Skeleton

```text
ax² + bx + c = 0 (a > 0) ➔ Roots: x = [-b ± √(b² - 4ac)] / (2a)
➔ Sum: α + β = -b/a ➔ Product: α · β = c/a ➔ Diff: |α - β| = √D / a
➔ Both Constants Negative (c₁ < 0 and c₂ < 0 with a > 0) ➔ ALWAYS CND (Intervals cross over zero)!
➔ Root Comparison (a₁ ≠ a₂): Convert roots to decimals/fractions directly. Never multiply divided roots by opposing a_i!
➔ Quadratic Extremum: Max/Min occurs at x = -b / (2a) ➔ Extremum Value = -D / (4a)
➔ Radical Degree Distinction: x² = 25 ➔ x = ±5 | y = √25 ➔ y = +5 strictly (x ≤ y!)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Instant CND Rule Ignorance**: Spending 2 minutes calculating roots when both $c_1 < 0$ and $c_2 < 0$. Root straddling around zero guarantees CND.
2. **The $x^2 = k$ vs $y = \sqrt{k}$ Trap**: $x^2 = 36 \implies x = +6, -6$. $y = \sqrt{36} \implies y = +6$. Here $x \le y$, not $x = y$!
3. **Destroying Roots by Cancelling $x$**: In $x^2 = 8x$, cancelling $x$ leaves $x = 8$ and destroys $x = 0$. You must write $x(x - 8) = 0$.
4. **Un-normalized Negative Leading Coefficient**: If equation starts with $-2x^2 + 5x - 2 = 0$, you must multiply by $-1$ to make $a > 0$ ($2x^2 - 5x + 2 = 0$) before applying sign rules.
5. **Assuming Real Roots for $(+, +)$ or $(-, +)$ without Checking $D \ge 0$**: For $x^2 + x + 1 = 0$, $D = -3 < 0$, so no real roots exist.
