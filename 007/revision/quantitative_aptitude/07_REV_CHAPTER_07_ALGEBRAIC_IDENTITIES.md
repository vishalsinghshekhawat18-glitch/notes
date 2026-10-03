# RAPID REVISION MATRIX: CHAPTER 07

**Topic**: Algebraic Identities, Symmetric Polynomials & Factorization  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Reciprocal Powers ($x + 1/x = k$) Cheat Table

| Target Exponent | Closed Formula | Worked Value for $k = 3$ | Worked Value for $k = 4$ |
| :--- | :--- | :--- | :--- |
| **$x^2 + \frac{1}{x^2}$** | $k^2 - 2$ | $3^2 - 2 = \mathbf{7}$ | $4^2 - 2 = \mathbf{14}$ |
| **$x^3 + \frac{1}{x^3}$** | $k^3 - 3k$ | $3^3 - 3(3) = 27 - 9 = \mathbf{18}$ | $4^3 - 3(4) = 64 - 12 = \mathbf{52}$ |
| **$x^4 + \frac{1}{x^4}$** | $(k^2 - 2)^2 - 2$ | $7^2 - 2 = \mathbf{47}$ | $14^2 - 2 = \mathbf{194}$ |
| **$x^5 + \frac{1}{x^5}$** | $(x^2 + 1/x^2)(x^3 + 1/x^3) - k$ | $7 \times 18 - 3 = 126 - 3 = \mathbf{123}$ | $14 \times 52 - 4 = 728 - 4 = \mathbf{724}$ |
| **$x - \frac{1}{x}$** | $\sqrt{k^2 - 4}$ | $\sqrt{9 - 4} = \mathbf{\sqrt{5}}$ | $\sqrt{16 - 4} = \sqrt{12} = \mathbf{2\sqrt{3}}$ |

---

### Matrix B: Cyclical Roots of Unity Shortcuts

| Given Condition | Invariant Power Identity | Implication on Polynomial Series |
| :--- | :--- | :--- |
| **$x + \frac{1}{x} = 1$** | $\mathbf{x^3 = -1}$ ($x^3 + 1 = 0$) | Terms with exponent difference of $3$ sum to $0$: $x^{n+3} + x^n = 0$. |
| **$x + \frac{1}{x} = -1$** | $\mathbf{x^3 = 1}$ ($x^3 - 1 = 0$) | Values repeat every $3$ powers. |
| **$x + \frac{1}{x} = \sqrt{3}$** | $\mathbf{x^6 = -1}$ ($x^6 + 1 = 0$) | Terms with exponent difference of $6$ sum to $0$: $x^{n+6} + x^n = 0$. |
| **$x + \frac{1}{x} = 2$** | $\mathbf{x = 1}$ | $x^n + 1/x^n = 2$ for all real exponents $n$. |

---

## 2. 60-Second Retrieval Skeleton

```text
(a + b)² - (a - b)² = 4ab ➔ (a + b)² + (a - b)² = 2(a² + b²)
➔ a³ + b³ = (a + b)(a² - ab + b²) ➔ a³ - b³ = (a - b)(a² + ab + b²)
➔ a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)
➔ If a + b + c = 0 ➔ a³ + b³ + c³ = 3abc
➔ If a² + b² + c² = ab + bc + ca ➔ a = b = c
➔ x + 1/x = k ➔ x² + 1/x² = k² - 2 ➔ x³ + 1/x³ = k³ - 3k
➔ (x + 1/x)² - (x - 1/x)² = 4 ➔ x² - 1/x² = (x + 1/x)(x - 1/x)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Difference of Squares Substitution Trap**: Writing $x^2 - 1/x^2 = k^2 - 2$. In reality, $k^2 - 2$ is $x^2 + 1/x^2$. To find $x^2 - 1/x^2$, you must multiply $(x + 1/x)$ by $(x - 1/x) = \sqrt{k^2 - 4}$.
2. **The $a + b + c = 0$ Exponent Misplacement**: Evaluating $a^3 + b^3 + c^3 = 3abc$ when $a + b + c \neq 0$. Always verify the base sum first!
3. **The Sum of Squares Zero Condition**: If $A^2 + B^2 = 0$ for real variables, $A = 0$ and $B = 0$ simultaneously. It cannot have non-zero compensating values.
4. **Cubic Expansion Sign Slips**: $(a - b)^3 = a^3 - b^3 - 3ab(a - b) = a^3 - b^3 - 3a^2b + 3ab^2$. Notice the $+3ab^2$ term!
5. **The $x^3 = -1 \implies x = -1$ Fallacy**: $x^3 = -1$ has roots $x = -1$ and two complex roots $\frac{1 \pm i\sqrt{3}}{2}$. In $x + 1/x = 1$, $x$ is complex, so $x^3 = -1$ holds even though $x \neq -1$.
