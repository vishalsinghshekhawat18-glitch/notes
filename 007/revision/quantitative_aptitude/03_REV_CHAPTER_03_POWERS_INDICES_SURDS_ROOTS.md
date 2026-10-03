# RAPID REVISION MATRIX: CHAPTER 03

**Topic**: Powers, Indices, Surds, Squares (1–50), Cubes (1–30) & Root Algorithms  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Nested Radical Closed Invariants

| Radical Form | Closed Mathematical Value | Condition / Operational Shortcut |
| :--- | :--- | :--- |
| $\sqrt{x\sqrt{x\sqrt{x\dots\infty}}}$ | $\mathbf{x}$ | Pure infinite product. |
| $\underbrace{\sqrt{x\sqrt{x\dots\sqrt{x}}}}_{n \text{ radicals}}$ | $\mathbf{x^{\frac{2^n - 1}{2^n}}}$ | Finite product with $n$ square roots. |
| $\sqrt{n(n+1) + \sqrt{n(n+1) + \dots\infty}}$ | $\mathbf{n + 1}$ | Plus sign $\implies$ Larger factor of consecutive pair. |
| $\sqrt{n(n+1) - \sqrt{n(n+1) - \dots\infty}}$ | $\mathbf{n}$ | Minus sign $\implies$ Smaller factor of consecutive pair. |
| $\sqrt{A \pm \sqrt{B}}$ | $\sqrt{\frac{A + C}{2}} \pm \sqrt{\frac{A - C}{2}}$ | Where $C = \sqrt{A^2 - B}$ is a rational integer. |

---

### Matrix B: Unit Digits of Powers & Roots

| Operation | Possible Unit Digits | Impossible Unit Digits |
| :--- | :--- | :--- |
| **Perfect Squares ($N^2$)** | $0, 1, 4, 5, 6, 9$ | **$2, 3, 7, 8$** (Instant elimination filter!) |
| **Perfect Cubes ($N^3$)** | All digits $0 \text{ through } 9$ (1-to-1 unique bijection) | None (Every unit digit is uniquely reversible). |
| **Cube Invariants** | $2 \leftrightarrow 8$ and $3 \leftrightarrow 7$ swap; all others self-map | $0\to0, 1\to1, 4\to4, 5\to5, 6\to6, 9\to9$ |

---

## 2. 60-Second Retrieval Skeleton

```text
Law of Indices: aᵐ · aⁿ = aᵐ⁺ⁿ ➔ aᵐ / aⁿ = aᵐ⁻ⁿ ➔ (aᵐ)ⁿ = aᵐⁿ ≠ a^(mⁿ) ➔ a⁰ = 1 ➔ a⁻ⁿ = 1/aⁿ
➔ Surds Comparison: Take LCM of orders ➔ Rewrite radicands to unified power ➔ Compare radicands directly
➔ Quadratic Surd Root: √(A ± √B) = √x ± √y where x, y = (A ± √(A² - B)) / 2
➔ Base-50 Square Shortcut: (50 ± x)² = (25 ± x) × 100 + x²
➔ Cube Root Algorithm: Split last 3 digits ➔ Identify unit digit from unique mapping ➔ Identify tens digit from bounding cube
➔ Perfect Square Elimination: If last digit is 2, 3, 7, or 8, it CANNOT be a square!
```

---

## 3. Top 5 Instant Killer Traps

1. **The Tower Exponent Fallacy**: $2^{3^2} = 2^9 = 512$, whereas $(2^3)^2 = 2^6 = 64$. An exponent without brackets evaluates top-down!
2. **Negative Under Radicals**: $\sqrt{-16}$ is not a real number ($4i$ in complex analysis). For real aptitude, even roots of negative numbers are undefined.
3. **Surd Addition Fallacy**: $\sqrt{9} + \sqrt{16} = 3 + 4 = 7 \neq \sqrt{25} = 5$. Never combine terms under a radical across addition or subtraction!
4. **Fractional Square Root Magnitude Trap**: For $0 < x < 1$, the square root is **larger** than the number itself: $\sqrt{0.49} = 0.7 > 0.49$.
5. **The Non-Square Digital Root Trap**: A perfect square must have digital root $1, 4, 7,$ or $9$ (mod 9). If digital root is $2, 3, 5, 6,$ or $8$, it is never a perfect square!
