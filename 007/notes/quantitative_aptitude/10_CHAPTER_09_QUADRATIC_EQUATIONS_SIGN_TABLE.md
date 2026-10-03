<div style="page-break-before: always;"></div>

# CHAPTER 09: QUADRATIC EQUATIONS, DISCRIMINANT ANALYSIS & THE MASTER SIGN TABLE

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 1: Numbers & Quadratics, pp. 3–50)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 4: Quadratic Equations & Inequations)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 7: Quadratic Equations & Root Comparisons)
* Banking PO / Regulatory Examination Corpus (SBI PO, IBPS PO, RBI Grade B Mains Heuristics)

---

## 9.1 The Canonical Quadratic Form & The Sridharacharya Derivation

A quadratic equation in variable $x$ has the standard canonical form:
$$\mathbf{ax^2 + bx + c = 0 \quad (a, b, c \in \mathbb{R}, \ a \neq 0)}$$

### The First-Principles Derivation (Completing the Square)
Divide the entire equation by the non-zero leading coefficient $a$:
$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0 \implies x^2 + 2\left(\frac{b}{2a}\right)x = -\frac{c}{a}$$

Add the square of half the linear coefficient, $\left(\frac{b}{2a}\right)^2 = \frac{b^2}{4a^2}$, to both sides:
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}$$

Taking the square root on both sides:
$$x + \frac{b}{2a} = \frac{\pm \sqrt{b^2 - 4ac}}{2a} \implies \mathbf{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}$$

---

### Fundamental Root Relations (Vieta's Formulas)
Let the two roots of $ax^2 + bx + c = 0$ be $\alpha$ and $\beta$:

```
┌─────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Root Relationship Metric        │ Exact Mathematical Formula                             │
├─────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 1. Sum of Roots (α + β)         │ -b / a                                                 │
│ 2. Product of Roots (α · β)     │ c / a                                                  │
│ 3. Difference of Roots |α - β|  │ √D / |a| = √(b² - 4ac) / |a|                           │
│ 4. Sum of Squares (α² + β²)     │ (α + β)² - 2αβ = (b² - 2ac) / a²                       │
│ 5. Sum of Cubes (α³ + β³)       │ (α + β)³ - 3αβ(α + β) = (-b³ + 3abc) / a³              │
│ 6. Equation Reconstruction      │ x² - (Sum of Roots)x + (Product of Roots) = 0          │
└─────────────────────────────────┴────────────────────────────────────────────────────────┘
```

---

## 9.2 Discriminant Nature of Roots ($D = b^2 - 4ac$)

The discriminant $D$ controls the nature, multiplicity, and geometry of the parabolic roots:

```
┌─────────────────┬───────────────────────────────┬───────────────────────────────────────────────┐
│ Value of D      │ Nature of Roots               │ Graphical Geometry of y = ax² + bx + c        │
├─────────────────┼───────────────────────────────┼───────────────────────────────────────────────┤
│ D > 0           │ Real and Distinct (α ≠ β)     │ Parabola intersects x-axis at TWO points      │
│   • D is square │ Rational roots                │ Roots are clean integers or fractions         │
│   • Not square  │ Irrational conjugate pairs    │ Roots occur as p ± √q                         │
├─────────────────┼───────────────────────────────┼───────────────────────────────────────────────┤
│ D = 0           │ Real and Equal (α = β = -b/2a)│ Parabola is TANGENT to x-axis at ONE point    │
├─────────────────┼───────────────────────────────┼───────────────────────────────────────────────┤
│ D < 0           │ Complex Conjugate (No Real)   │ Parabola does NOT intersect x-axis            │
│                 │ Roots occur as p ± iq         │ (Entirely above x-axis if a>0, below if a<0)  │
└─────────────────┴───────────────────────────────┴───────────────────────────────────────────────┘
```

---

## 9.3 The Master Sign Table Heuristic for Competitive Speed

In banking and aptitude examinations (where candidates compare two quadratic variables $x$ vs $y$), solving equations fully is too slow. The **Master Sign Table** determines root signs in **2 seconds**:

### The Canonical 4-Sign Table

| Equation Sign Pattern | General Equation Form | Sign of Root 1 ($\alpha$) | Sign of Root 2 ($\beta$) | Rule Memory Anchor |
| :---: | :---: | :---: | :---: | :--- |
| **$(+, +)$** | $x^2 + bx + c = 0$ | **$-$ (Negative)** | **$-$ (Negative)** | Both roots are negative. |
| **$(-, +)$** | $x^2 - bx + c = 0$ | **$+$ (Positive)** | **$+$ (Positive)** | Both roots are positive. |
| **$(+, -)$** | $x^2 + bx - c = 0$ | **$-$ (Larger)** | **$+$ (Smaller)** | Opposite signs; larger root is negative. |
| **$(-, -)$** | $x^2 - bx - c = 0$ | **$+$ (Larger)** | **$-$ (Smaller)** | Opposite signs; larger root is positive. |

---

### The Golden "CND" (Cannot Be Determined) Instant Filter
If the constant terms in **BOTH** equations are negative ($c_1 < 0$ and $c_2 < 0$):

$$\text{Equation 1: } a_1x^2 \pm b_1x - c_1 = 0 \implies x_1 > 0, \ x_2 < 0$$
$$\text{Equation 2: } a_2y^2 \pm b_2y - c_2 = 0 \implies y_1 > 0, \ y_2 < 0$$

* Since both $x$ and $y$ have one positive and one negative root, the positive $x$ is greater than the negative $y$, but the positive $y$ is greater than the negative $x$.
* **Axiom**: **If the constant terms of both quadratics are negative, the answer is GUARANTEED to be "Relationship Cannot Be Established / CND" without performing ANY calculation!**

---

## 9.4 Cross-Coefficient Scaling in Root Comparisons

When leading coefficients $a_1 \neq a_2$ (e.g., $2x^2 - 7x + 6 = 0$ and $3y^2 - 11y + 10 = 0$), dividing by $a$ creates fractions that cause comparison errors. Instead, **multiply the roots by the opposite leading coefficient**:

### The Algorithm:
1. Find raw root factors of Equation 1: $\alpha_1, \beta_1$ (divide by $a_1$).
2. Find raw root factors of Equation 2: $\alpha_2, \beta_2$ (divide by $a_2$).
3. **Cross-Multiply Invariant**: Multiply the raw roots of $x$ by $a_2$, and the raw roots of $y$ by $a_1$.
4. Compare clean integers directly on the number line!

#### Multi-Tier Worked Exemplar:
Compare $x$ and $y$:
* Equation 1: $2x^2 - 11x + 15 = 0$
* Equation 2: $3y^2 - 13y + 14 = 0$

1. **Solve for $x$**:
   * Product $= 2 \times 15 = 30$. Sum $= -11$.
   * Factors: $-6, -5 \implies$ Roots of $x$ are $+\frac{6}{2}, +\frac{5}{2}$.
   * Scaled by $a_2 = 3$:
     $$X_1 = 3 \times \frac{6}{2} = 9, \quad X_2 = 3 \times \frac{5}{2} = 7.5$$
2. **Solve for $y$**:
   * Product $= 3 \times 14 = 42$. Sum $= -13$.
   * Factors: $-7, -6 \implies$ Roots of $y$ are $+\frac{7}{3}, +\frac{6}{3}$.
   * Scaled by $a_1 = 2$:
     $$Y_1 = 2 \times \frac{7}{3} = 4.67, \quad Y_2 = 2 \times \frac{6}{3} = 4$$
3. **Compare Integer Scaled Values**:
   * $X_1 = 9 > 4.67$ and $9 > 4$.
   * $X_2 = 7.5 > 4.67$ and $7.5 > 4$.
   * Every value of $x$ is strictly greater than every value of $y$.
   * **Conclusion**: $\mathbf{x > y}$.

---

## 9.5 Maxima & Minima of Quadratic Functions

For the quadratic function $f(x) = ax^2 + bx + c$:

```
┌──────────────────┬───────────────────────────────┬────────────────────────────────────────────────────────┐
│ Leading Coeff    │ Extremum Type                 │ Extremum Location & Maximum / Minimum Value            │
├──────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────┤
│ a > 0 (Upward)   │ Global Minimum                │ Occurs at x = -b / (2a)                                │
│                  │                               │ Minimum Value = (4ac - b²) / (4a) = -D / (4a)          │
├──────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────┤
│ a < 0 (Downward) │ Global Maximum                │ Occurs at x = -b / (2a)                                │
│                  │                               │ Maximum Value = (4ac - b²) / (4a) = -D / (4a)          │
└──────────────────┴───────────────────────────────┴────────────────────────────────────────────────────────┘
```

#### Exemplar: Find the maximum value of $f(x) = -2x^2 + 8x + 15$.
* Here $a = -2 < 0$, so the function attains a maximum.
* Location: $x = -\frac{b}{2a} = -\frac{8}{2(-2)} = 2$.
* Maximum Value:
  $$f(2) = -2(2)^2 + 8(2) + 15 = -8 + 16 + 15 = \mathbf{23}$$

---

## 9.6 Top Examiner Traps in Quadratic Equations

1. **The Square Root vs Linear Degree Trap**:
   * $x^2 = 25 \implies x = \pm 5$ (Degree 2, two roots).
   * $y = \sqrt{25} \implies y = +5$ strictly (Principal square root, one root).
   * Comparing $x$ and $y$: since $x = -5, +5$ and $y = +5$, $x \le y$! Many students mistakenly think $x = y$.
2. **The Zero Constant Incomplete Equation**:
   In $x^2 - 5x = 0$, dividing by $x$ yields $x = 5$ while **destroying the root $x = 0$**. Never divide an equation by an unknown variable! Always factor: $x(x - 5) = 0 \implies x = 0, 5$.
3. **The Leading Negative Coefficient Inversion**:
   In $-x^2 + 5x - 6 = 0$, you must multiply through by $-1$ to get $x^2 - 5x + 6 = 0$ before applying the sign table. Applying the sign table to a negative leading coefficient reverses all sign rules!
