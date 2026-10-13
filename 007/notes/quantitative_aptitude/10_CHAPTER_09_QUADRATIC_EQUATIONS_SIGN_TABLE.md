<div style="page-break-before: always;"></div>

# CHAPTER 10: QUADRATIC EQUATIONS, ROOT COMPARISON & THE CND INVARIANT

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 1: Numbers & Quadratics, pp. 3–50)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 4: Quadratic Equations & Inequations)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 7: Quadratic Equations & Root Comparisons)
* Banking PO / Regulatory Examination Corpus (SBI PO, IBPS PO, RBI Grade B Phase I Heuristics)

---

## 10.1 The Canonical Quadratic Form & The Sridharacharya Derivation

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

## 10.2 Discriminant Nature of Roots ($D = b^2 - 4ac$)

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

## 10.3 The Master Sign Table & Root Comparison Engine

In competitive examinations where candidates compare two quadratic variables ($x$ vs $y$), determining the signs and ranges of roots quickly is essential.

### Pre-Condition 1: Leading Coefficient Normalization
Before inspecting the signs of $b$ and $c$, **the leading coefficient must be normalized to be positive ($a > 0$)**.
* If the equation is presented with $a < 0$ (e.g. $-x^2 + 5x - 6 = 0$), multiply the entire equation by $-1$:
  $$-x^2 + 5x - 6 = 0 \iff x^2 - 5x + 6 = 0 \quad (a = 1 > 0)$$
  Applying sign rules without this normalization will invert all conclusions.

### Pre-Condition 2: Real Root Qualification ($D \ge 0$)
* For same-sign rows ($c > 0$), real roots exist **if and only if $D = b^2 - 4ac \ge 0$**.
* If $D < 0$, the equation possesses **no real roots**, and the standard sign table cannot be used to compare real values.
  * **Test Case**: For $x^2 + x + 1 = 0$, linear sign pattern is $(+, +)$, but $D = 1^2 - 4(1)(1) = -3 < 0$. No real roots exist.
* For opposite-sign rows ($c < 0$), notice that $-4ac = -4a(-|c|) = +4a|c| > 0$ when $a > 0$. Hence:
  $$D = b^2 - 4ac = b^2 + 4a|c| > 0 \quad \text{always}$$
  Therefore, two distinct real roots are mathematically guaranteed whenever $a > 0$ and $c < 0$.

---

### The Rebuilt Master Sign Table (Normalized $a > 0$)

| Equation Pattern | Standard Form ($b, c > 0$) | Real Root Condition | Root 1 Sign | Root 2 Sign | Real Number Line Ordering |
| :---: | :---: | :---: | :---: | :---: | :--- |
| **$(+, +)$** | $x^2 + bx + c = 0$ | $D = b^2 - 4c \ge 0$ | **Negative ($-$)** | **Negative ($-$)** | Both roots $\le 0$ (strictly negative if $c > 0$). |
| **$(-, +)$** | $x^2 - bx + c = 0$ | $D = b^2 - 4c \ge 0$ | **Positive ($+$)** | **Positive ($+$)** | Both roots $\ge 0$ (strictly positive if $c > 0$). |
| **$(+, -)$** | $x^2 + bx - c = 0$ | Always real ($D > 0$) | **Positive ($+$)** | **Negative ($-$)** | One positive root, one negative root. On the real number line, $x_{\text{pos}} > x_{\text{neg}}$. |
| **$(-, -)$** | $x^2 - bx - c = 0$ | Always real ($D > 0$) | **Positive ($+$)** | **Negative ($-$)** | One positive root, one negative root. On the real number line, $x_{\text{pos}} > x_{\text{neg}}$. |

---

### Clarification of Algebraic Comparison vs. Absolute Magnitude
When $c < 0$, the roots have opposite signs. On the real number line:
$$\mathbf{x_{\text{pos}} > 0 > x_{\text{neg}} \implies x_{\text{pos}} > x_{\text{neg}} \quad \text{always}}$$
The positive root is **always algebraically larger** than the negative root.

The sign of the linear coefficient $b$ dictates the **sum of roots** ($\alpha + \beta = -b/a$), which determines which root has the greater absolute magnitude (distance from zero):
1. **In $x^2 + bx - c = 0$ ($b > 0, c > 0$)**:
   * Sum of roots $= -b < 0 \implies |x_{\text{neg}}| > x_{\text{pos}}$.
   * The negative root is further from zero than the positive root.
   * **Explicit Exemplar**: $x^2 + 2x - 3 = 0 \implies (x + 3)(x - 1) = 0$.
     * Roots: $x_{\text{neg}} = -3, \quad x_{\text{pos}} = +1$.
     * Real line comparison: $+1 > -3$ ($x_{\text{pos}} > x_{\text{neg}}$).
     * Absolute magnitude: $|-3| = 3 > 1 = |+1|$.
2. **In $x^2 - bx - c = 0$ ($b > 0, c > 0$)**:
   * Sum of roots $= +b > 0 \implies x_{\text{pos}} > |x_{\text{neg}}|$.
   * The positive root is further from zero than the negative root.
   * **Explicit Exemplar**: $x^2 - 2x - 3 = 0 \implies (x - 3)(x + 1) = 0$.
     * Roots: $x_{\text{pos}} = +3, \quad x_{\text{neg}} = -1$.
     * Real line comparison: $+3 > -1$ ($x_{\text{pos}} > x_{\text{neg}}$).
     * Absolute magnitude: $|+3| = 3 > 1 = |-1|$.

---

### The Golden "CND" (Cannot Be Determined) Theorem
If the constant terms in **BOTH** equations are negative ($c_1 < 0$ and $c_2 < 0$) after normalizing to $a_1 > 0, a_2 > 0$:

$$\text{Equation 1: } a_1x^2 \pm b_1x - c_1 = 0 \implies x_{\text{pos}} > 0 > x_{\text{neg}}$$
$$\text{Equation 2: } a_2y^2 \pm b_2y - c_2 = 0 \implies y_{\text{pos}} > 0 > y_{\text{neg}}$$

* **Mathematical Proof**:
  * Cross-comparing positive and negative roots gives:
    $$x_{\text{pos}} > y_{\text{neg}} \quad (\text{positive} > \text{negative})$$
    $$y_{\text{pos}} > x_{\text{neg}} \quad (\text{positive} > \text{negative})$$
  * Because $x_{\text{pos}} > y_{\text{neg}}$ while $x_{\text{neg}} < y_{\text{pos}}$, the root intervals cross over around zero.
  * No global inequality ($x \ge y$ or $y \ge x$) can hold across all possible root pairings.
* **Core Invariant**: **When both normalized equations have negative constant terms, the relationship is Cannot Be Determined (CND) without computing the numerical roots.**
* **Boundary Restriction**: This shortcut applies **strictly when BOTH constant terms are negative**. If only one equation has a negative constant, direct root computation and comparison is mandatory.

---

## 10.4 Comparing Roots When Leading Coefficients Differ ($a_1 \neq a_2$)

When leading coefficients are unequal, candidates must follow mathematically sound methods rather than flawed shortcuts.

### Method 1: Direct Decimal / Fractional Comparison (Safe & Verified)
1. **Simplify First**: Always divide out $\gcd(a, b, c)$ from each equation if present.
2. **Compute Exact Roots**: Find the roots using standard factorization or the quadratic formula:
   $$\text{Roots of } x: \ \alpha_1, \beta_1; \quad \text{Roots of } y: \ \alpha_2, \beta_2$$
3. **Convert to Decimals / Simple Fractions**:
   * Example: $x_1 = \frac{6}{2} = 3.0, \ x_2 = \frac{5}{2} = 2.5$.
   * Example: $y_1 = \frac{7}{3} \approx 2.33, \ y_2 = \frac{6}{3} = 2.0$.
4. **Compare All 4 Pairwise Combinations on the Number Line**:
   * $3.0 > 2.33$ and $3.0 > 2.0$.
   * $2.5 > 2.33$ and $2.5 > 2.0$.
   * Since every possible root of $x$ strictly exceeds every possible root of $y$:
   * **Conclusion**: $\mathbf{x > y}$.

---

### Method 2: Common Denominator on Factor Numerators (Algebraic Method)
If factoring via split-the-middle-term gives:
$$a_1 x^2 + b_1 x + c_1 = 0 \implies x_1 = \frac{p_1}{a_1}, \ x_2 = \frac{p_2}{a_1}$$
$$a_2 y^2 + b_2 y + c_2 = 0 \implies y_1 = \frac{r_1}{a_2}, \ y_2 = \frac{r_2}{a_2}$$
To compare $\frac{p}{a_1}$ with $\frac{r}{a_2}$ (assuming $a_1, a_2 > 0$):
$$\frac{p}{a_1} > \frac{r}{a_2} \iff \mathbf{p \cdot a_2 > r \cdot a_1}$$
*Notice*: This scales the **factor numerators** $p$ and $r$ by the opposing denominators, exactly as in finding a common denominator $\frac{p \cdot a_2}{a_1 a_2}$ vs $\frac{r \cdot a_1}{a_1 a_2}$.

---

### ⚠️ THE DEADLY "CROSS-COEFFICIENT ROOT MULTIPLICATION" FALLACY
> **WARNING**: Some informal coaching materials instruct students to: *"Compute the actual roots of x and y, then multiply the roots of x by a_2 and roots of y by a_1."*  
> **THIS SHORTCUT IS MATHEMATICALLY INVALID AND INVERTS TRUTHS.**

#### Regression Counterexample:
Consider two equations:
* **Equation 1**: $x^2 - 9x + 20 = 0 \implies a_1 = 1$.
  * Roots: $x_1 = 4, \ x_2 = 5$.
* **Equation 2**: $10y^2 - 130y + 420 = 0 \implies a_2 = 10$.
  * Divide by 10: $y^2 - 13y + 42 = 0 \implies$ Roots: $y_1 = 6, \ y_2 = 7$.

* **The True Mathematical Relation**:
  * For all pairings: $4 < 6, \ 4 < 7, \ 5 < 6, \ 5 < 7$.
  * The true relationship is strictly $\mathbf{x < y}$.

* **The Broken Shortcut's Output**:
  * Multiply roots of $x$ by $a_2 = 10 \implies X \in \{40, 50\}$.
  * Multiply roots of $y$ by $a_1 = 1 \implies Y \in \{6, 7\}$.
  * Comparing $\{40, 50\}$ vs $\{6, 7\}$ falsely declares $\mathbf{x > y}$!
  * **Result**: An instant negative mark in an exam. Never multiply already-divided roots by opposing coefficients! Always compare roots directly in decimal/fraction form.

---

## 10.5 Maxima & Minima of Quadratic Functions

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

## 10.6 Top Examiner Traps in Quadratic Equations

1. **The Square Root vs Linear Degree Trap**:
   * $x^2 = 25 \implies x = \pm 5$ (Degree 2, two roots).
   * $y = \sqrt{25} \implies y = +5$ strictly (Principal square root, one root).
   * Comparing $x$ and $y$: since $x = -5, +5$ and $y = +5$, $x \le y$! Many students mistakenly think $x = y$.
2. **The Zero Constant Incomplete Equation**:
   In $x^2 - 5x = 0$, dividing by $x$ yields $x = 5$ while **destroying the root $x = 0$**. Never divide an equation by an unknown variable! Always factor: $x(x - 5) = 0 \implies x = 0, 5$.
3. **The Leading Negative Coefficient Inversion**:
   In $-x^2 + 5x - 6 = 0$, you must multiply through by $-1$ to get $x^2 - 5x + 6 = 0$ before applying the sign table. Applying the sign table to a negative leading coefficient reverses all sign rules!
