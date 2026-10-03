<div style="page-break-before: always;"></div>

# CHAPTER 03: POWERS, INDICES, SURDS, SQUARES (1–50), CUBES (1–30) & ROOT ALGORITHMS

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 5: Square Roots and Cube Roots, pp. 180–205; Ch. 9: Surds and Indices, pp. 278–296)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 2: Surds, Indices & Radicals)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 4: Square Root & Cube Root; Ch. 8: Surds & Indices)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 2: Progressions, Series & Number Operations)

---

## 3.1 The Axiomatic Foundations of Indices and Surds

### 1. Fundamental Laws of Indices
For any non-zero real bases $a, b$ and rational exponents $m, n$:

```
┌─────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Law of Indices                  │ First-Principles Mathematical Meaning                  │
├─────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 1. Product of Powers            │ aᵐ · aⁿ = aᵐ⁺ⁿ                                         │
│ 2. Quotient of Powers           │ aᵐ / aⁿ = aᵐ⁻ⁿ  (for a ≠ 0)                            │
│ 3. Power of a Power             │ (aᵐ)ⁿ = aᵐⁿ ≠ a^(mⁿ)                                   │
│ 4. Power of a Product           │ (ab)ⁿ = aⁿ · bⁿ                                        │
│ 5. Power of a Quotient          │ (a/b)ⁿ = aⁿ / bⁿ  (for b ≠ 0)                          │
│ 6. Zero Exponent Axiom          │ a⁰ = 1  (for a ≠ 0; 0⁰ is indeterminate)               │
│ 7. Negative Exponent Axiom      │ a⁻ⁿ = 1 / aⁿ                                           │
│ 8. Fractional Exponent / Radical│ a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ                              │
└─────────────────────────────────┴────────────────────────────────────────────────────────┘
```

> **The Tower Exponent Trap**:  
> Notice that $(a^m)^n \neq a^{m^n}$.  
> For example: $(2^3)^2 = 2^{3 \times 2} = 2^6 = 64$, whereas $2^{3^2} = 2^9 = 512$!

---

### 2. Operational Laws of Surds
A **surd** is an irrational root of a positive rational number. An expression of the form $\sqrt[n]{a}$ is a surd of order $n$ if $a$ is rational and $\sqrt[n]{a}$ is irrational.

1. **Multiplication under Same Order**: $\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{ab}$.
2. **Division under Same Order**: $\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}}$.
3. **Compound Radical Law**: $\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a} = \sqrt[n]{\sqrt[m]{a}}$.
4. **Order Equivalence**: $\sqrt[n]{a} = \sqrt[nk]{a^k}$ (used to equate orders when comparing surds).

---

## 3.2 Comparison of Surds: The LCM of Orders Algorithm

To compare surds of differing orders (e.g., arrange $\sqrt{2}, \sqrt[3]{3}, \sqrt[4]{4}, \sqrt[6]{6}$ in ascending order):

### The Step-by-Step Algorithm:
1. **Find the LCM of the Radical Orders**: The orders are $2, 3, 4, 6$.  
   $$\text{LCM}(2, 3, 4, 6) = 12$$
2. **Convert Every Surd to the Unified Order ($12$)**:
   * $\sqrt{2} = 2^{1/2} = 2^{6/12} = \sqrt[12]{2^6} = \sqrt[12]{\mathbf{64}}$
   * $\sqrt[3]{3} = 3^{1/3} = 3^{4/12} = \sqrt[12]{3^4} = \sqrt[12]{\mathbf{81}}$
   * $\sqrt[4]{4} = 4^{1/4} = 4^{3/12} = \sqrt[12]{4^3} = \sqrt[12]{\mathbf{64}}$
   * $\sqrt[6]{6} = 6^{1/6} = 6^{2/12} = \sqrt[12]{6^2} = \sqrt[12]{\mathbf{36}}$
3. **Compare the Radicands Directly**:  
   $$36 < 64 = 64 < 81 \implies \mathbf{\sqrt[6]{6} < \sqrt{2} = \sqrt[4]{4} < \sqrt[3]{3}}$$

---

## 3.3 Rationalization & Square Roots of Quadratic Surds

### 1. Conjugate Rationalization
To eliminate radicals from a denominator of the form $(a \pm \sqrt{b})$ or $(\sqrt{a} \pm \sqrt{b})$, multiply both numerator and denominator by its **conjugate**:
$$\frac{1}{\sqrt{a} + \sqrt{b}} = \frac{\sqrt{a} - \sqrt{b}}{(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b})} = \frac{\sqrt{a} - \sqrt{b}}{a - b}$$

---

### 2. Square Root of a Quadratic Surd: $\sqrt{A \pm \sqrt{B}}$
An expression $\sqrt{A \pm \sqrt{B}}$ can be simplified into $\sqrt{x} \pm \sqrt{y}$ if and only if $A^2 - B$ is a perfect square.

#### The First-Principles Algebraic Proof
Let $\sqrt{A + \sqrt{B}} = \sqrt{x} + \sqrt{y}$.  
Squaring both sides:
$$A + \sqrt{B} = (x + y) + 2\sqrt{xy} = (x + y) + \sqrt{4xy}$$

Equating rational and irrational parts:
$$x + y = A$$
$$4xy = B \implies xy = \frac{B}{4}$$

Since $(x - y)^2 = (x + y)^2 - 4xy = A^2 - B$, we define $C = \sqrt{A^2 - B}$.  
Then:
$$x = \frac{A + C}{2} \quad \text{and} \quad y = \frac{A - C}{2}$$

#### Multi-Tier Worked Exemplar:
Find the square root of $7 + 4\sqrt{3}$.
1. Rewrite as $A + \sqrt{B}$:  
   $$7 + 4\sqrt{3} = 7 + \sqrt{4^2 \times 3} = 7 + \sqrt{48} \implies A = 7, B = 48$$
2. Compute $C = \sqrt{A^2 - B} = \sqrt{49 - 48} = \sqrt{1} = 1$.
3. Compute $x$ and $y$:
   * $x = \frac{7 + 1}{2} = 4$
   * $y = \frac{7 - 1}{2} = 3$
4. Therefore:
   $$\sqrt{7 + 4\sqrt{3}} = \sqrt{4} + \sqrt{3} = \mathbf{2 + \sqrt{3}}$$

---

## 3.4 Infinite & Finite Nested Radicals: Closed-Form Invariants

Competitive examinations frequently feature self-similar nested radical expressions:

| Nested Radical Expression | Closed Mathematical Form | Derivation Mechanics / Condition |
| :--- | :--- | :--- |
| **Infinite Product**<br/>$\sqrt{x\sqrt{x\sqrt{x\dots\infty}}}$ | $\mathbf{x}$ | Let $y = \sqrt{x \cdot y} \implies y^2 = xy \implies y = x$. |
| **Finite Product ($n$ roots)**<br/>$\underbrace{\sqrt{x\sqrt{x\dots\sqrt{x}}}}_{n \text{ times}}$ | $\mathbf{x^{\frac{2^n - 1}{2^n}}}$ | Successive exponent sum: $\frac{1}{2} + \frac{1}{4} + \dots + \frac{1}{2^n} = \frac{2^n - 1}{2^n}$. |
| **Infinite Sum**<br/>$\sqrt{x + \sqrt{x + \sqrt{x\dots\infty}}}$ | $\mathbf{\frac{1 + \sqrt{1 + 4x}}{2}}$ | $y = \sqrt{x + y} \implies y^2 - y - x = 0$.<br/>If $x = n(n+1)$, then value $= \mathbf{n + 1}$. |
| **Infinite Difference**<br/>$\sqrt{x - \sqrt{x - \sqrt{x\dots\infty}}}$ | $\mathbf{\frac{-1 + \sqrt{1 + 4x}}{2}}$ | $y = \sqrt{x - y} \implies y^2 + y - x = 0$.<br/>If $x = n(n+1)$, then value $= \mathbf{n}$. |

#### Rapid Worked Exemplars:
* $\sqrt{72 + \sqrt{72 + \sqrt{72\dots\infty}}}$: Since $72 = 8 \times 9$, the value is the larger consecutive factor: $\mathbf{9}$.
* $\sqrt{42 - \sqrt{42 - \sqrt{42\dots\infty}}}$: Since $42 = 6 \times 7$, the value is the smaller consecutive factor: $\mathbf{6}$.
* $\sqrt{5\sqrt{5\sqrt{5\sqrt{5}}}}$ ($n = 4$):  
  $$5^{\frac{2^4 - 1}{2^4}} = 5^{15/16}$$

---

## 3.5 Squares Master Table ($1\text{--}50$) & The Base-50 Shortcut

Every competitive candidate must memorize squares up to $25$, after which the **Base-50 Invariant** yields squares $26\text{--}50$ mentally:

### The Base-50 Algebraic Engine
$$(50 \pm x)^2 = 2500 \pm 100x + x^2 = \mathbf{(25 \pm x) \times 100 + x^2}$$

* To square $46$: Deviation from $50$ is $x = -4$.  
  $$\text{LHS} = 25 - 4 = 21, \quad \text{RHS} = (-4)^2 = 16 \implies \mathbf{2,116}$$
* To square $57$: Deviation from $50$ is $x = +7$.  
  $$\text{LHS} = 25 + 7 = 32, \quad \text{RHS} = 7^2 = 49 \implies \mathbf{3,249}$$

---

### The Canonical Squares Table ($1\text{--}50$)

| $N$ | $N^2$ | $N$ | $N^2$ | $N$ | $N^2$ | $N$ | $N^2$ | $N$ | $N^2$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | 1 | **11** | 121 | **21** | 441 | **31** | 961 | **41** | 1681 |
| **2** | 4 | **12** | 144 | **22** | 484 | **32** | 1024 | **42** | 1764 |
| **3** | 9 | **13** | 169 | **23** | 529 | **33** | 1089 | **43** | 1849 |
| **4** | 16 | **14** | 196 | **24** | 576 | **34** | 1156 | **44** | 1936 |
| **5** | 25 | **15** | 225 | **25** | 625 | **35** | 1225 | **45** | 2025 |
| **6** | 36 | **16** | 256 | **26** | 676 | **36** | 1296 | **46** | 2116 |
| **7** | 49 | **17** | 289 | **27** | 729 | **37** | 1369 | **47** | 2209 |
| **8** | 64 | **18** | 324 | **28** | 784 | **38** | 1444 | **48** | 2304 |
| **9** | 81 | **19** | 361 | **29** | 841 | **39** | 1521 | **49** | 2401 |
| **10** | 100 | **20** | 400 | **30** | 900 | **40** | 1600 | **50** | 2500 |

---

## 3.6 Cubes Master Table ($1\text{--}30$) & Unit Digit Uniqueness

In cube roots of perfect cubes, the unit digit maps **one-to-one** uniquely across all ten digits:

```
Cube Unit Digit Invariant:
0³ ➔ 0     1³ ➔ 1     2³ ➔ 8     3³ ➔ 7     4³ ➔ 4
5³ ➔ 5     6³ ➔ 6     7³ ➔ 3     8³ ➔ 2     9³ ➔ 9
(Notice: 2↔8 and 3↔7 swap; all other digits 0, 1, 4, 5, 6, 9 remain self-identical!)
```

### The Canonical Cubes Table ($1\text{--}30$)

| $N$ | $N^3$ | $N$ | $N^3$ | $N$ | $N^3$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | 1 | **11** | 1,331 | **21** | 9,261 |
| **2** | 8 | **12** | 1,728 | **22** | 10,648 |
| **3** | 27 | **13** | 2,197 | **23** | 12,167 |
| **4** | 64 | **14** | 2,744 | **24** | 13,824 |
| **5** | 125 | **15** | 3,375 | **25** | 15,625 |
| **6** | 216 | **16** | 4,096 | **26** | 17,576 |
| **7** | 343 | **17** | 4,913 | **27** | 19,683 |
| **8** | 512 | **18** | 5,832 | **28** | 21,952 |
| **9** | 729 | **19** | 6,859 | **29** | 24,389 |
| **10** | 1,000 | **20** | 8,000 | **30** | 27,000 |

#### Mental Extraction of Cube Roots: Compute $\sqrt[3]{175616}$
1. **Split off the Last 3 Digits**: Group as $(175) \mid (616)$.
2. **Units Digit Determination**: Last digit is $6 \implies$ Cube root must end in **6**.
3. **Tens Digit Determination**: Look at the leading group $175$.  
   $5^3 = 125 \le 175 < 216 = 6^3 \implies$ Tens digit is **5**.
4. **Synthesized Cube Root**: $\mathbf{56}$.

---

## 3.7 Top Examiner Traps in Surds, Powers & Roots

1. **The Square Root Principal Value Trap**:
   In algebra, $\sqrt{x^2} = |x|$, NOT simply $x$. For instance, $\sqrt{(-5)^2} = \sqrt{25} = +5$. The radical symbol $\sqrt{}$ denotes exclusively the **principal (non-negative) square root**.
2. **The Imperfect Square Radical Inequality**:
   $\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$. In fact, by the triangle inequality, $\sqrt{a + b} < \sqrt{a} + \sqrt{b}$ for all positive $a, b$.
3. **The Non-Terminating Last-Digit Test for Squares**:
   A perfect square can **NEVER end in digits 2, 3, 7, or 8**. Furthermore, a perfect square can never end in an odd number of trailing zeros.
