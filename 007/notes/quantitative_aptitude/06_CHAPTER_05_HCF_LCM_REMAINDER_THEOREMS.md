<div style="page-break-before: always;"></div>

# CHAPTER 05: HCF, LCM & REMAINDER THEOREMS (EULER, FERMAT, CHINESE REMAINDER THEOREM)

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 2: H.C.F. and L.C.M. of Numbers, pp. 51–68)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 3: Number Systems — HCF/LCM & Remainder Theorems)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 3: HCF and LCM of Numbers)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 1: Number Systems & Modular Arithmetic)

---

## 5.1 The Foundations of H.C.F. and L.C.M.

### 1. Mathematical Definitions
* **Highest Common Factor (H.C.F. / G.C.D.)**: The greatest positive integer that divides each of two or more given integers without leaving a remainder.
  * In prime factor form: Product of the **lowest powers** of common prime factors.
* **Lowest Common Multiple (L.C.M.)**: The smallest positive integer that is divisible by each of the given integers.
  * In prime factor form: Product of the **highest powers** of all prime factors involved.

---

### 2. Fundamental Algebraic Invariants
For any two positive integers $A$ and $B$:
$$\mathbf{\text{HCF}(A, B) \times \text{LCM}(A, B) = A \times B}$$

> **Warning (The 3-Number Trap)**:  
> The product invariant $\text{HCF} \times \text{LCM} = A \times B$ holds **ONLY for two numbers**.  
> For three numbers $A, B, C$: $\text{HCF}(A, B, C) \times \text{LCM}(A, B, C) \neq A \times B \times C$.

#### The Ratio-HCF Parameterization
Let $H = \text{HCF}(A, B)$. Then $A$ and $B$ can always be written as:
$$A = H \cdot x \quad \text{and} \quad B = H \cdot y \quad \mathbf{\text{where } \gcd(x, y) = 1}$$

From this parameterization:
$$\text{LCM}(A, B) = \mathbf{H \cdot x \cdot y}$$
$$\text{Sum } A + B = H(x + y)$$
$$\text{Difference } |A - B| = H|x - y|$$

---

## 5.2 H.C.F. & L.C.M. of Fractions and Decimals

### 1. Fractions Formula (Must be in Irreducible Form!)
Before calculating HCF or LCM of fractions, **every fraction must be reduced to its lowest terms**:

$$\mathbf{\text{HCF}\left(\frac{a}{b}, \frac{c}{d}, \frac{e}{f}\right) = \frac{\text{HCF of Numerators }(a, c, e)}{\text{LCM of Denominators }(b, d, f)}}$$

$$\mathbf{\text{LCM}\left(\frac{a}{b}, \frac{c}{d}, \frac{e}{f}\right) = \frac{\text{LCM of Numerators }(a, c, e)}{\text{HCF of Denominators }(b, d, f)}}$$

#### Multi-Tier Worked Exemplar (R.S. Aggarwal Benchmark):
Find the H.C.F. and L.C.M. of $\frac{2}{3}, \frac{8}{9}, \frac{16}{81}, \frac{10}{27}$.
* **Check Lowest Terms**: All four fractions are irreducible.
* **Compute H.C.F.**:
  $$\text{HCF} = \frac{\text{HCF}(2, 8, 16, 10)}{\text{LCM}(3, 9, 81, 27)} = \mathbf{\frac{2}{81}}$$
* **Compute L.C.M.**:
  $$\text{LCM} = \frac{\text{LCM}(2, 8, 16, 10)}{\text{HCF}(3, 9, 81, 27)} = \frac{80}{3} = \mathbf{26\frac{2}{3}}$$

---

### 2. The Decimal Place Equalization Rule
To find HCF or LCM of decimals (e.g. $0.63, 1.05, 2.1$):
1. **Count Maximum Decimal Places**: Here, max places $= 2$.
2. **Equalize by Appending Zeros**: Rewrite as $0.63, 1.05, 2.10$.
3. **Convert to Integers**: $63, 105, 210$.
4. **Compute Integer Metric**:
   * $\text{HCF}(63, 105, 210) = 21 \implies \mathbf{\text{HCF} = 0.21}$.
   * $\text{LCM}(63, 105, 210) = 630 \implies \mathbf{\text{LCM} = 6.30 = 6.3}$.

---

## 5.3 The Four Standard Word Problem Models

Competitive examinations frame HCF and LCM word problems around four canonical models:

```
┌────────┬───────────────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Model  │ Problem Formulation Description                                   │ Mathematical Closed Solution                           │
├────────┼───────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 1      │ Largest number that divides x, y, z leaving remainder r in each   │ HCF(x - r, y - r, z - r)                               │
├────────┼───────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 2      │ Largest number that divides x, y, z leaving SAME remainder r      │ HCF(|x - y|, |y - z|, |z - x|)                         │
│        │ (where r is unknown)                                              │                                                        │
├────────┼───────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 3      │ Smallest number which when divided by x, y, z leaves remainder r  │ [k · LCM(x, y, z)] + r                                 │
│        │ in each case                                                      │                                                        │
├────────┼───────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 4      │ Smallest number which when divided by x, y, z leaves remainders   │ [k · LCM(x, y, z)] - d                                 │
│        │ a, b, c such that (x - a) = (y - b) = (z - c) = d (common diff)   │                                                        │
└────────┴───────────────────────────────────────────────────────────────────┴────────────────────────────────────────────────────────┘
```

#### Multi-Tier Worked Exemplars:

* **Model 2 Exemplar**: Find the greatest number that will divide $43, 91,$ and $183$ so as to leave the same remainder in each case.
  * Form differences:
    $$|91 - 43| = 48, \quad |183 - 91| = 92, \quad |183 - 43| = 140$$
  * Find $\text{HCF}(48, 92, 140)$:
    $$48 = 4 \times 12, \quad 92 = 4 \times 23, \quad 140 = 4 \times 35 \implies \mathbf{\text{HCF} = 4}$$
  *(Check: $43 = 4(10)+3; 91 = 4(22)+3; 183 = 4(45)+3$. Remainder is always 3!)*

* **Model 4 Exemplar**: Find the least number which when divided by $20, 25, 35,$ and $40$ leaves remainders $14, 19, 29,$ and $34$ respectively.
  * Check the common difference $d$:
    $$20 - 14 = 6, \quad 25 - 19 = 6, \quad 35 - 29 = 6, \quad 40 - 34 = 6 \implies d = 6$$
  * Compute $\text{LCM}(20, 25, 35, 40)$:
    $$\text{LCM} = 1400$$
  * Required Least Number $= \text{LCM} - d = 1400 - 6 = \mathbf{1,394}$.

---

## 5.4 Remainder Theorems & Modular Arithmetic Engines

### 1. The Concept of Negative Remainders
When $17$ is divided by $19$:
* **Standard Positive Remainder**: $+17$
* **Equivalent Negative Remainder**: $17 - 19 = \mathbf{-2}$
Using negative remainders drastically reduces computation in large power expressions:
$$\text{Rem}\left(\frac{18^{100}}{19}\right) = \text{Rem}\left(\frac{(-1)^{100}}{19}\right) = \mathbf{1}$$

---

### 2. Fermat's Little Theorem
If $p$ is a prime number and $a$ is an integer such that $\gcd(a, p) = 1$:
$$\mathbf{a^{p-1} \equiv 1 \pmod{p}}$$

#### Exemplar: Find the remainder when $2^{100}$ is divided by $101$.
* Here, $p = 101$ is prime, and $\gcd(2, 101) = 1$.
* By Fermat's Little Theorem: $2^{101-1} = 2^{100} \equiv \mathbf{1} \pmod{101}$.
* Remainder $= \mathbf{1}$.

---

### 3. Euler's Totient Remainder Theorem
For any modulus $m$ (prime or composite), if $\gcd(a, m) = 1$:
$$\mathbf{a^{\phi(m)} \equiv 1 \pmod{m}}$$

#### Exemplar: Find the remainder when $7^{82}$ is divided by $100$.
1. Check coprimality: $\gcd(7, 100) = 1$.
2. Compute $\phi(100)$:
   $$100 = 2^2 \times 5^2 \implies \phi(100) = 100 \left(1 - \frac{1}{2}\right)\left(1 - \frac{1}{5}\right) = 100 \times \frac{1}{2} \times \frac{4}{5} = \mathbf{40}$$
3. By Euler's Theorem, $7^{40} \equiv 1 \pmod{100}$.
4. Decompose the exponent:
   $$7^{82} = 7^{2 \times 40 + 2} = (7^{40})^2 \times 7^2 \equiv (1)^2 \times 49 \equiv \mathbf{49} \pmod{100}$$
* Remainder $= \mathbf{49}$. *(Notice: This also proves the last two digits of $7^{82}$ are $49$!)*

---

### 4. Wilson's Theorem
For any prime number $p$:
$$\mathbf{(p - 1)! \equiv -1 \equiv p - 1 \pmod{p}}$$

* $\text{Rem}\left(\frac{28!}{29}\right) = 28$
* $\text{Rem}\left(\frac{96!}{97}\right) = 96$

---

## 5.5 Top Examiner Traps in HCF, LCM & Remainders

1. **The Irreducible Fraction Reduction Omission**:
   Calculating the HCF of $\frac{2}{4}$ and $\frac{3}{6}$ without simplifying:
   * Incorrect: $\frac{\text{HCF}(2, 3)}{\text{LCM}(4, 6)} = \frac{1}{12}$.
   * Correct: $\frac{2}{4} = \frac{1}{2}$ and $\frac{3}{6} = \frac{1}{2} \implies \text{HCF} = \mathbf{\frac{1}{2}}$.
2. **The Remainder Multiplication Scaling Fallacy**:
   When simplifying fractions by cancelling a common factor $k$:
   $$\frac{A \cdot k}{B \cdot k}$$
   If you cancel $k$ to compute the simplified remainder $r'$, the true remainder of the original division is **$r' \times k$**!
   * *Example*: $\text{Rem}(24 / 9)$. Cancelling $3 \implies \text{Rem}(8 / 3) = 2$.
   * True remainder $= 2 \times 3 = \mathbf{6}$.
3. **The Circular Track First Meeting Trap**:
   * Meeting at the **starting point**: $\text{LCM}(\text{Time}_1, \text{Time}_2, \dots)$.
   * Meeting anywhere on the track: $\frac{\text{Track Length}}{\text{Relative Speed}}$!
