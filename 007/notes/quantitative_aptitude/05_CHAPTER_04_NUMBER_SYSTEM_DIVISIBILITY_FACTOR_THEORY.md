<div style="page-break-before: always;"></div>

# CHAPTER 04: DIVISIBILITY INVARIANTS, PRIME FACTORIZATION, FACTOR SUMS & TOTIENT THEORY

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 1: Numbers, pp. 3–50)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 3: The Realm of Numbers & Factor Theory)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 1: Number System & Prime Factorization)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 1: Number Systems)

---

## 4.1 Number Classification & Set Topography

Human mathematical systems organize real numbers into nested hierarchical sets:

```
Complex Numbers (ℂ)
  └── Real Numbers (ℝ)
        ├── Rational Numbers (ℚ) [p/q, q ≠ 0]
        │     ├── Integers (ℤ) [..., -2, -1, 0, 1, 2, ...]
        │     │     ├── Negative Integers (ℤ⁻)
        │     │     └── Whole Numbers (𝕎) [0, 1, 2, 3, ...]
        │     │           ├── Zero (Neither positive nor negative)
        │     │           └── Natural Numbers (ℕ) [1, 2, 3, ...]
        │     │                 ├── Prime Numbers [2, 3, 5, 7, 11, ...]
        │     │                 ├── Composite Numbers [4, 6, 8, 9, ...]
        │     │                 └── 1 (Neither prime nor composite)
        │     └── Non-Integral Fractions & Terminating/Recurring Decimals
        └── Irrational Numbers (ℚ') [Non-terminating, non-recurring: √2, π, e]
```

### Essential Categorical Definitions
1. **Prime Number**: A natural number greater than $1$ having strictly two distinct positive divisors: $1$ and itself.
   * **Only Even Prime**: $2$ (all other primes are odd).
   * **Primes up to 100 (Total: 25 primes)**:  
     `2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97`
   * Every prime $p > 3$ can be expressed in the form **$6k \pm 1$** (though the converse is not necessarily prime: e.g. $25 = 6(4) + 1$ is composite).
2. **Co-prime (Relatively Prime) Numbers**: Two integers $a, b$ are coprime if $\gcd(a, b) = 1$. They do not need to be individual prime numbers (e.g. $8$ and $9$ are coprime).
3. **Twin Primes**: Pairs of prime numbers differing by exactly $2$ (e.g., $(3, 5), (5, 7), (11, 13), (17, 19), (29, 31)$).

---

### The Primality Testing Algorithm
To test if an integer $N$ is prime:
1. Find the largest integer $k$ such that $k \le \sqrt{N}$.
2. Test divisibility of $N$ by all prime numbers $p \le k$.
3. If no prime $p \le \sqrt{N}$ divides $N$, then **$N$ is unconditionally prime**.

#### Exemplar: Is $197$ a prime number?
* $\sqrt{197} \approx 14.03 \implies k = 14$.
* Test primes $\le 14$: `2, 3, 5, 7, 11, 13`.
* $197$ is odd $\implies$ not divisible by $2$.
* Sum of digits $= 1 + 9 + 7 = 17 \implies$ not divisible by $3$.
* Last digit not $0$ or $5 \implies$ not divisible by $5$.
* $197 = 7 \times 28 + 1 \implies$ not divisible by $7$.
* Alternating sum $= (1 + 7) - 9 = -1 \implies$ not divisible by $11$.
* $197 = 13 \times 15 + 2 \implies$ not divisible by $13$.
* **Conclusion**: $197$ is prime!

---

## 4.2 Universal Divisibility Invariants & Modular Proofs

Divisibility tests are mathematical consequences of the decimal representation $N = \sum_{i=0}^{n} d_i 10^i$.

### 1. The Power-of-2 and Power-of-5 Family (Last Digits)
Since $10 = 2 \times 5$, $10^k$ is a multiple of $2^k$ and $5^k$. Therefore, powers of 10 leave zero remainder modulo $2^k$ and $5^k$:
* **Divisible by $2^k$**: The number formed by the **last $k$ digits** must be divisible by $2^k$.
  * By $2$ ($2^1$): Last 1 digit is even ($0, 2, 4, 6, 8$).
  * By $4$ ($2^2$): Last 2 digits form a multiple of $4$.
  * By $8$ ($2^3$): Last 3 digits form a multiple of $8$.
  * By $16$ ($2^4$): Last 4 digits form a multiple of $16$.
* **Divisible by $5^k$**: The number formed by the **last $k$ digits** must be divisible by $5^k$.
  * By $5$: Last digit is $0$ or $5$.
  * By $25$: Last 2 digits are $00, 25, 50,$ or $75$.
  * By $125$: Last 3 digits divisible by $125$.

---

### 2. The Sum of Digits Family (Modulo 3 and 9)
Since $10 \equiv 1 \pmod{3}$ and $10 \equiv 1 \pmod{9}$, it follows that $10^i \equiv 1^i \equiv 1 \pmod{9}$.
* **Divisibility by $3$**: The sum of all digits must be divisible by $3$.
* **Divisibility by $9$**: The sum of all digits must be divisible by $9$.

---

### 3. Divisibility by 11 (Alternating Sum of Digits)
Since $10 \equiv -1 \pmod{11}$, powers of 10 alternate residues:
$$10^0 \equiv 1, \quad 10^1 \equiv -1, \quad 10^2 \equiv 1, \quad 10^3 \equiv -1 \pmod{11}$$
* **Axiom**: A number is divisible by $11$ if and only if the difference between the **sum of digits at odd places** (from right) and the **sum of digits at even places** is either $0$ or a multiple of $11$:
  $$\Delta = |(d_0 + d_2 + d_4 + \dots) - (d_1 + d_3 + d_5 + \dots)| = 11k \quad (k \in \mathbb{Z})$$

---

### 4. The Universal 7, 11, 13 Combined Test (Group of 3 Digits)
Since $7 \times 11 \times 13 = \mathbf{1,001}$, and $1000 \equiv -1 \pmod{1001}$:
* **The Rule**: Split the number into blocks of $3$ digits from right to left. Take the alternating sum of these 3-digit blocks.
  $$\text{Block Difference } \Delta = (\text{Block}_1 + \text{Block}_3 + \dots) - (\text{Block}_2 + \text{Block}_4 + \dots)$$
* If $\Delta$ is divisible by $7$, the number is divisible by $7$.
* If $\Delta$ is divisible by $11$, the number is divisible by $11$.
* If $\Delta$ is divisible by $13$, the number is divisible by $13$.

#### Exemplar: Test $4,534,285$ for divisibility by 7, 11, and 13.
1. Split into 3-digit blocks from right: `[4]`, `[534]`, `[285]`.
2. Compute alternating sum:
   $$\Delta = (285 + 4) - 534 = 289 - 534 = -245$$
3. Test $|\Delta| = 245$:
   * $245 \div 7 = 35$ (Remainder 0) $\implies \mathbf{4,534,285 \text{ is divisible by 7}}$.
   * $245 \div 11 = 22$ (Remainder 3) $\implies$ Not divisible by 11.
   * $245 \div 13 = 18$ (Remainder 11) $\implies$ Not divisible by 13.

---

### 5. Composite Divisibility Rule (Coprime Factor Requirement)
If a composite number $C$ factors into $a \times b$:
$$C \mid N \iff a \mid N \quad \text{and} \quad b \mid N \quad \mathbf{\text{if and only if } \gcd(a, b) = 1}$$

| Divisor | Coprime Factor Pair | Test Conditions | Fatal False Factor Trap |
| :---: | :---: | :--- | :--- |
| **6** | $2 \times 3$ | Even number AND sum of digits divisible by 3 | — |
| **12** | $3 \times 4$ | Sum of digits divisible by 3 AND last 2 digits divisible by 4 | $2 \times 6$ ($\gcd(2,6)=2 \neq 1$) |
| **18** | $2 \times 9$ | Even number AND sum of digits divisible by 9 | — |
| **24** | $3 \times 8$ | Sum of digits divisible by 3 AND last 3 digits divisible by 8 | $4 \times 6$ ($\gcd(4,6)=2 \neq 1$) |
| **72** | $8 \times 9$ | Last 3 digits divisible by 8 AND sum of digits divisible by 9 | — |
| **88** | $8 \times 11$ | Last 3 digits divisible by 8 AND alternating digit sum rule | — |
| **99** | $9 \times 11$ | Sum of digits divisible by 9 AND alternating digit sum rule | — |

---

## 4.3 The Complete Factor Analysis Suite

By the **Fundamental Theorem of Arithmetic**, every integer $N > 1$ can be expressed uniquely as:
$$N = p_1^{a_1} p_2^{a_2} p_3^{a_3} \dots p_k^{a_k}$$
where $p_1, p_2, \dots, p_k$ are distinct prime numbers and $a_1, a_2, \dots, a_k \ge 1$.

```
┌──────────────────────────────────────┬────────────────────────────────────────────────────────────────────────┐
│ Factor Analytic Metric               │ Closed Formula                                                         │
├──────────────────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ 1. Total Number of Factors T(N)      │ T(N) = (a₁ + 1)(a₂ + 1)(a₃ + 1)...(aₖ + 1)                             │
│ 2. Number of Odd Factors T_odd(N)    │ Exclude the prime factor 2: Product of (aᵢ + 1) for all odd primes     │
│ 3. Number of Even Factors T_even(N)  │ T_even(N) = T(N) - T_odd(N) = a₁ · (a₂ + 1)(a₃ + 1)...(aₖ + 1) (p₁=2) │
│ 4. Sum of All Factors S(N)           │ S(N) = [(p₁^(a₁+1) - 1)/(p₁ - 1)] · [(p₂^(a₂+1) - 1)/(p₂ - 1)] ...    │
│ 5. Product of All Factors P(N)       │ P(N) = N^(T(N)/2)                                                      │
│ 6. Number of Ways to Factor N = a × b│ T(N) / 2  (if N is not a square); [T(N) + 1] / 2  (if N is a square)   │
│ 7. Number of Ways as Coprime Factors │ 2^(k - 1)  (where k is the count of distinct prime factors)            │
└──────────────────────────────────────┴────────────────────────────────────────────────────────────────────────┘
```

---

### Multi-Tier Worked Exemplar: Exhaustive Factor Analysis of $N = 360$
1. **Prime Factorization**:
   $$360 = 36 \times 10 = (2^2 \times 3^2) \times (2 \times 5) = \mathbf{2^3 \times 3^2 \times 5^1}$$
   Here: $p_1 = 2, a_1 = 3$; $p_2 = 3, a_2 = 2$; $p_3 = 5, a_3 = 1$.

2. **Total Number of Factors $T(360)$**:
   $$T(360) = (3 + 1)(2 + 1)(1 + 1) = 4 \times 3 \times 2 = \mathbf{24}$$

3. **Number of Odd and Even Factors**:
   * Odd factors (ignore $2^3$): $(2 + 1)(1 + 1) = 3 \times 2 = \mathbf{6}$.
   * Even factors: $T_{\text{even}} = 24 - 6 = \mathbf{18}$.  
     *(Check: $a_1 \times (a_2 + 1)(a_3 + 1) = 3 \times 3 \times 2 = 18$. Matches!)*

4. **Sum of All Factors $S(360)$**:
   $$S(360) = \left(\frac{2^{3+1} - 1}{2 - 1}\right) \times \left(\frac{3^{2+1} - 1}{3 - 1}\right) \times \left(\frac{5^{1+1} - 1}{5 - 1}\right)$$
   $$S(360) = \left(\frac{16 - 1}{1}\right) \times \left(\frac{27 - 1}{2}\right) \times \left(\frac{26 - 1}{4}\right) = 15 \times 13 \times 6 = \mathbf{1,170}$$

5. **Product of Factors $P(360)$**:
   $$P(360) = 360^{T(360)/2} = 360^{24/2} = \mathbf{360^{12}}$$

---

## 4.4 Euler's Totient Function $\phi(N)$

Euler's Totient function $\phi(N)$ counts the number of positive integers less than or equal to $N$ that are **coprime to $N$** (i.e., $\gcd(x, N) = 1$).

### The Totient Formula
If $N = p_1^{a_1} p_2^{a_2} \dots p_k^{a_k}$, then:
$$\phi(N) = N \left(1 - \frac{1}{p_1}\right)\left(1 - \frac{1}{p_2}\right)\dots\left(1 - \frac{1}{p_k}\right)$$

#### Invariants of the Totient Function:
1. For any prime $p$: $\phi(p) = p - 1$.
2. For prime power $p^a$: $\phi(p^a) = p^a - p^{a-1} = p^a \left(1 - \frac{1}{p}\right)$.
3. Multiplicative property: If $\gcd(a, b) = 1$, then $\phi(ab) = \phi(a)\phi(b)$.
4. **Sum of all numbers $\le N$ coprime to $N$**:
   $$\text{Sum} = \frac{1}{2} \times N \times \phi(N)$$

#### Exemplar: Find the count and sum of all integers $\le 60$ that are coprime to $60$.
1. Prime factorization of $60$: $60 = 2^2 \times 3^1 \times 5^1$.
2. Distinct prime factors: $2, 3, 5$.
3. Compute $\phi(60)$:
   $$\phi(60) = 60 \left(1 - \frac{1}{2}\right)\left(1 - \frac{1}{3}\right)\left(1 - \frac{1}{5}\right) = 60 \times \frac{1}{2} \times \frac{2}{3} \times \frac{4}{5} = \mathbf{16}$$
4. Compute the sum:
   $$\text{Sum} = \frac{1}{2} \times 60 \times 16 = \mathbf{480}$$

---

## 4.5 Top Examiner Traps in Divisibility & Factors

1. **The Non-Coprime Composite Divisibility Trap**:
   Assuming that a number divisible by both $4$ and $6$ is divisible by $24$. This is false! For example, $12$ is divisible by both $4$ and $6$, but NOT by $24$. You must factor into coprime parts: $3$ and $8$.
2. **The Perfect Square Factor Count Invariant**:
   The total number of factors $T(N)$ is **ODD if and only if $N$ is a perfect square**. For any non-square, factors exist in distinct pairs $(a, b)$ such that $a \cdot b = N$. In a square, $\sqrt{N} \cdot \sqrt{N} = N$ pairs with itself, producing an odd total.
3. **The Zero Divisibility Fallacy**:
   $0$ is divisible by every non-zero integer ($0 / a = 0$), but **no number is divisible by 0** ($a / 0$ is undefined).
