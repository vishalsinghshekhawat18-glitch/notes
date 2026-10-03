<div style="page-break-before: always;"></div>

# CHAPTER 07: ALGEBRAIC IDENTITIES, SYMMETRIC POLYNOMIALS & FACTORIZATION

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 1: Numbers, pp. 3–50; Ch. 4: Simplification Algebraic Identities, pp. 95–179)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 4: Algebra, Identities & Symmetric Polynomials)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 7: Algebraic Identities & Simplification)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 5: Algebra & Polynomials)

---

## 7.1 The Master Algebraic Identity Catalogue

Algebraic identities represent equations that hold unconditionally true for all real values of their constituent variables. In competitive examinations, complex multi-digit arithmetic expressions are almost always disguised algebraic identities:

```
┌───────────────────────────────────────┬────────────────────────────────────────────────────────────────────────┐
│ Degree & Family                       │ Algebraic Identity                                                     │
├───────────────────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ 1. Degree-2 Binomial Squares          │ (a + b)² = a² + 2ab + b²                                               │
│                                       │ (a - b)² = a² - 2ab + b²                                               │
│ 2. Sum and Difference Coupling        │ (a + b)² + (a - b)² = 2(a² + b²)                                       │
│                                       │ (a + b)² - (a - b)² = 4ab                                              │
│ 3. Difference of Squares              │ a² - b² = (a - b)(a + b)                                               │
│ 4. Three-Variable Square              │ (a + b + c)² = a² + b² + c² + 2(ab + bc + ca)                          │
│ 5. Degree-3 Binomial Cubes            │ (a + b)³ = a³ + b³ + 3ab(a + b)                                        │
│                                       │ (a - b)³ = a³ - b³ - 3ab(a - b)                                        │
│ 6. Sum and Difference of Cubes        │ a³ + b³ = (a + b)(a² - ab + b²)                                        │
│                                       │ a³ - b³ = (a - b)(a² + ab + b²)                                        │
└───────────────────────────────────────┴────────────────────────────────────────────────────────────────────────┘
```

---

### The Grand Three-Variable Cubic Identity
For any three real numbers $a, b, c$:

$$\mathbf{a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)}$$

Using the identity $a^2 + b^2 + c^2 - ab - bc - ca = \frac{1}{2}[(a - b)^2 + (b - c)^2 + (c - a)^2]$, the expression can be rewritten as:

$$\mathbf{a^3 + b^3 + c^3 - 3abc = \frac{1}{2}(a + b + c)\left[(a - b)^2 + (b - c)^2 + (c - a)^2\right]}$$

#### The Golden Conditional Invariant:
$$\mathbf{\text{If } a + b + c = 0 \implies a^3 + b^3 + c^3 = 3abc}$$

#### Symmetrical Zero Invariant:
If $a^2 + b^2 + c^2 - ab - bc - ca = 0$, then:
$$\frac{1}{2}[(a - b)^2 + (b - c)^2 + (c - a)^2] = 0 \implies \mathbf{a = b = c}$$
*(Because the sum of squares of real numbers can equal zero if and only if each term is individually zero!)*

---

## 7.2 The Reciprocal Invariant Suite ($x + 1/x = k$)

Problems of the form $x + \frac{1}{x} = k$ are core fixtures in competitive examinations:

```
┌─────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Exponent Level                  │ Recursive Closed Formula                               │
├─────────────────────────────────┼────────────────────────────────────────────────────────┤
│ Level 1: x + 1/x = k            │ Baseline                                               │
│ Level 2: x² + 1/x²              │ k² - 2                                                 │
│ Level 3: x³ + 1/x³              │ k³ - 3k                                                │
│ Level 4: x⁴ + 1/x⁴              │ (k² - 2)² - 2                                          │
│ Level 5: x⁵ + 1/x⁵              │ (x² + 1/x²)(x³ + 1/x³) - (x + 1/x) = (k² - 2)(k³ - 3k) - k │
│ Level 6: x⁶ + 1/x⁶              │ (x³ + 1/x³)² - 2 = (k³ - 3k)² - 2                      │
└─────────────────────────────────┴────────────────────────────────────────────────────────┘
```

### The Subtraction Reciprocal Suite ($x - 1/x = m$):
* $x^2 + \frac{1}{x^2} = m^2 + 2$
* $x^3 - \frac{1}{x^3} = m^3 + 3m$
* Transformation between $(x + 1/x)$ and $(x - 1/x)$:
  $$\left(x + \frac{1}{x}\right)^2 - \left(x - \frac{1}{x}\right)^2 = 4 \implies x - \frac{1}{x} = \sqrt{\left(x + \frac{1}{x}\right)^2 - 4}$$

---

## 7.3 Special Cyclic & Roots of Unity Shortcuts

Certain recurring reciprocal values induce cyclical cancellations:

| Given Reciprocal Condition | Algebraic Consequence | Immediate Value Invariant |
| :--- | :--- | :--- |
| **$x + \frac{1}{x} = 1$** | $x^2 - x + 1 = 0 \implies (x + 1)(x^2 - x + 1) = 0$ | $\mathbf{x^3 = -1} \iff x^3 + 1 = 0$ |
| **$x + \frac{1}{x} = -1$** | $x^2 + x + 1 = 0 \implies (x - 1)(x^2 + x + 1) = 0$ | $\mathbf{x^3 = 1} \iff x^3 - 1 = 0$ |
| **$x + \frac{1}{x} = \sqrt{3}$** | $x^3 + \frac{1}{x^3} = (\sqrt{3})^3 - 3\sqrt{3} = 0$ | $\mathbf{x^6 = -1} \iff x^6 + 1 = 0$ |
| **$x + \frac{1}{x} = 2$** | $(x - 1)^2 = 0$ | $\mathbf{x = 1}$ (for all powers: $x^n + 1/x^n = 2$) |
| **$x + \frac{1}{x} = -2$** | $(x + 1)^2 = 0$ | $\mathbf{x = -1}$ |

#### Exemplar: If $x + \frac{1}{x} = \sqrt{3}$, evaluate $x^{18} + x^{12} + x^6 + 1$.
* By the $x^6 = -1$ invariant:
  $$x^{18} + x^{12} + x^6 + 1 = (x^6)^3 + (x^6)^2 + (x^6) + 1 = (-1)^3 + (-1)^2 + (-1) + 1 = -1 + 1 - 1 + 1 = \mathbf{0}$$

---

## 7.4 Multi-Tier Worked Exemplars (R.S. Aggarwal Benchmark Traps)

### Exemplar 1 (Disguised Cubic Simplification):
Evaluate:
$$\frac{0.783 \times 0.783 \times 0.783 + 0.217 \times 0.217 \times 0.217}{0.783 \times 0.783 - 0.783 \times 0.217 + 0.217 \times 0.217}$$

* **Pattern Recognition**: Let $a = 0.783$ and $b = 0.217$.
* The expression is:
  $$\frac{a^3 + b^3}{a^2 - ab + b^2} = \frac{(a + b)(a^2 - ab + b^2)}{a^2 - ab + b^2} = a + b$$
* **Solution**:
  $$a + b = 0.783 + 0.217 = \mathbf{1.000} = \mathbf{1}$$

---

### Exemplar 2 (The $a + b + c = 0$ Disguise):
Evaluate:
$$(28)^3 + (-15)^3 + (-13)^3$$

* Let $a = 28, b = -15, c = -13$.
* Check condition:
  $$a + b + c = 28 + (-15) + (-13) = 28 - 28 = 0$$
* Since $a + b + c = 0$, $a^3 + b^3 + c^3 = 3abc$:
  $$3 \times (28) \times (-15) \times (-13) = 3 \times 28 \times 195 = 84 \times 195 = \mathbf{16,380}$$

---

## 7.5 Top Examiner Traps in Algebraic Identities

1. **The $(a - b)^2$ vs $a^2 - b^2$ Confusion**:
   $(a - b)^2 = a^2 - 2ab + b^2$, while $a^2 - b^2 = (a - b)(a + b)$. Substituting one for the other in polynomial cancellations destroys the solution.
2. **The Reciprocal Sign Reversal Fallacy**:
   When $x + 1/x = k$, finding $x^2 - 1/x^2$ requires calculating $(x + 1/x)(x - 1/x)$. Writing $x^2 - 1/x^2 = k^2 - 2$ is completely incorrect, as $k^2 - 2 = x^2 + 1/x^2$!
3. **The Sum of Squares Zero Condition**:
   If $(x - 3)^2 + (y - 4)^2 + (z - 5)^2 = 0$, you must equate each squared bracket to $0$ individually: $x = 3, y = 4, z = 5$. Do not attempt cross-variable substitution.
