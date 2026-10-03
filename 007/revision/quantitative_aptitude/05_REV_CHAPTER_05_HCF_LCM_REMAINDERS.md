# RAPID REVISION MATRIX: CHAPTER 05

**Topic**: HCF, LCM & Remainder Theorems (Euler, Fermat, Chinese Remainder Theorem)  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: HCF vs LCM Word Problem Archetypes

| Scenario Formulation | Core Condition | Operational Formula | Exam Trigger Words |
| :--- | :--- | :--- | :--- |
| **Model 1: Divides with fixed remainder** | Greatest number dividing $x, y, z$ with remainder $r$ | $\text{HCF}(x-r, y-r, z-r)$ | "Largest measuring tape", "maximum capacity" |
| **Model 2: Divides with unknown common remainder** | Same remainder $r$ in each case | $\text{HCF}(\|x-y\|, \|y-z\|, \|z-x\|)$ | "Leaves the same remainder in each case" |
| **Model 3: Divided by with fixed remainder** | Smallest number divided by $x, y, z$ with remainder $r$ | $[k \cdot \text{LCM}(x, y, z)] + r$ | "Least number of soldiers", "bells chime together" |
| **Model 4: Divided by with variable remainder** | $(x-a) = (y-b) = (z-c) = d$ | $[k \cdot \text{LCM}(x, y, z)] - d$ | "Remainder differs from divisors by constant gap" |

---

### Matrix B: Advanced Remainder Theorems

| Theorem | Condition | Algebraic Formulation | Rapid Exemplar |
| :--- | :--- | :--- | :--- |
| **Fermat's Little Theorem** | $p$ is prime, $\gcd(a, p) = 1$ | $a^{p-1} \equiv 1 \pmod{p}$ | $\text{Rem}(3^{18} / 19) = 1$ |
| **Euler's Totient Theorem** | Any modulus $m$, $\gcd(a, m) = 1$ | $a^{\phi(m)} \equiv 1 \pmod{m}$ | $\text{Rem}(7^{40} / 100) = 1$ |
| **Wilson's Theorem** | $p$ is prime | $(p-1)! \equiv -1 \equiv p - 1 \pmod{p}$ | $\text{Rem}(28! / 29) = 28$ |

---

## 2. 60-Second Retrieval Skeleton

```text
HCF × LCM = A × B  [ONLY for TWO numbers!]
➔ Let H = HCF(A, B) ➔ A = Hx, B = Hy where gcd(x, y) = 1 ➔ LCM = H · x · y
➔ Fractions: HCF = (HCF of Numerators) / (LCM of Denominators) [REDUCE TO LOWEST TERMS FIRST!]
➔ Fractions: LCM = (LCM of Numerators) / (HCF of Denominators)
➔ Common Diff Remainder Model: LCM(Divisors) - Common Difference
➔ Negative Remainder: Rem(17/19) = -2 ➔ (-2)^even = +positive
➔ Cancelled Factor Warning: If you divide by k to simplify Rem(A/B), multiply final remainder by k!
```

---

## 3. Top 5 Instant Killer Traps

1. **The Three-Number Product Fallacy**: $\text{HCF}(A, B, C) \times \text{LCM}(A, B, C) \neq A \times B \times C$. Never use the 2-number product identity for 3 or more variables!
2. **Unreduced Fractions Trap**: Applying fraction HCF/LCM to $\frac{4}{6}$ instead of $\frac{2}{3}$. You will get a corrupted denominator.
3. **The Simplified Remainder Restoration Deficit**: In $\text{Rem}(45 / 12)$, dividing numerator and denominator by 3 gives $\text{Rem}(15 / 4) = 3$. You **must multiply by 3** to restore the original remainder: $3 \times 3 = 9$.
4. **Fermat's Modulus Prime Prerequisite**: Applying Fermat's theorem when the divisor is composite (e.g. mod 15). Fermat applies **only to prime moduli**. Use Euler's totient theorem for composite moduli!
5. **Decimals Zero Padding Omission**: Finding LCM of $0.6$ and $0.06$. Treating them as $6$ and $6$ gives $0.6$. You must equalize places: $0.60$ and $0.06 \implies \text{LCM}(60, 6) = 60 \implies 0.60$.
