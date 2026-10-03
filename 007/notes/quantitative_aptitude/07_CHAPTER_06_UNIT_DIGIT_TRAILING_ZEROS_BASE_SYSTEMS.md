<div style="page-break-before: always;"></div>

# CHAPTER 06: UNIT DIGIT CYCLES, TENS DIGIT, TRAILING ZEROS & BASE SYSTEMS

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 1: Numbers, pp. 3–50)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 3: Number Systems — Unit Digits, Highest Powers & Base Conversion)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 1: Number System & Number Cycles)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 1: Number Systems — Base Theory & Trailing Zeros)

---

## 6.1 The Cyclicity of Unit Digits (Modulo 10)

The **unit digit** of a base-10 number $N$ raised to an integer power $p$ depends exclusively on the unit digit of $N$ and follows a periodic repeating cycle (**Cyclicity**):

```
┌──────────┬───────────┬──────────────────────────────────────────┬─────────────────────────────┐
│ Unit Base│ Cyclicity │ Exponential Unit Digit Cycle             │ Closed Modular Shortcut     │
├──────────┼───────────┼──────────────────────────────────────────┼─────────────────────────────┤
│ 0, 1, 5, 6│ 1         │ Always constant: [0], [1], [5], [6]     │ 0ⁿ ➔ 0, 1ⁿ ➔ 1, 5ⁿ ➔ 5, 6ⁿ ➔ 6│
├──────────┼───────────┼──────────────────────────────────────────┼─────────────────────────────┤
│ 4        │ 2         │ 4¹ = 4, 4² = 6                           │ 4^(odd) = 4, 4^(even) = 6   │
│ 9        │ 2         │ 9¹ = 9, 9² = 1                           │ 9^(odd) = 9, 9^(even) = 1   │
├──────────┼───────────┼──────────────────────────────────────────┼─────────────────────────────┤
│ 2        │ 4         │ 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 6           │ 2^(4k+r) ➔ 2ʳ (if r=0 ➔ 2⁴=6)│
│ 3        │ 4         │ 3¹ = 3, 3² = 9, 3³ = 7, 3⁴ = 1           │ 3^(4k+r) ➔ 3ʳ (if r=0 ➔ 3⁴=1)│
│ 7        │ 4         │ 7¹ = 7, 7² = 9, 7³ = 3, 7⁴ = 1           │ 7^(4k+r) ➔ 7ʳ (if r=0 ➔ 7⁴=1)│
│ 8        │ 4         │ 8¹ = 8, 8² = 4, 8³ = 2, 8⁴ = 6           │ 8^(4k+r) ➔ 8ʳ (if r=0 ➔ 8⁴=6)│
└──────────┴───────────┴──────────────────────────────────────────┴─────────────────────────────┘
```

### The Universal Modulo-4 Algorithm:
To find the unit digit of $N^p$:
1. Isolate the unit digit of the base: $d = N \pmod{10}$.
2. Divide the exponent $p$ by $4$ (using the last 2 digits of $p$) to find the remainder $r = p \pmod{4}$.
3. **If $r \neq 0$**: The unit digit is the unit digit of $d^r$.
4. **If $r = 0$ (Exact Multiple of 4)**: The unit digit is the unit digit of **$d^4$**! *(Never evaluate as $d^0 = 1$!)*

#### Multi-Tier Worked Exemplars:
* **Exemplar A**: Find the unit digit of $3^{105}$.
  * Base is $3$ (cycle length $4$).
  * Exponent $105 \div 4 = 26$ with remainder $r = 1$.
  * Unit digit $= 3^1 = \mathbf{3}$.
* **Exemplar B**: Find the unit digit of $7^{96}$.
  * Base is $7$. Exponent $96$ is an exact multiple of $4$ ($r = 0$).
  * Unit digit $= 7^4 = 2,401 \implies \mathbf{1}$.
* **Exemplar C**: Find the unit digit of $(264)^{102} + (264)^{103}$.
  * For base ending in $4$:
    * $4^{\text{even}} = 4^{102} \implies 6$.
    * $4^{\text{odd}} = 4^{103} \implies 4$.
  * Sum $= 6 + 4 = 10 \implies$ Unit digit is $\mathbf{0}$.

---

## 6.2 Determining the Last Two Digits (Tens & Units Digit)

Finding the last two digits corresponds mathematically to determining the residue modulo $100$.

### 1. Numbers Ending in 1: $(10a + 1)^n$
$$\text{Last Digit} = \mathbf{1}$$
$$\text{Tens Digit} = \mathbf{(a \times \text{last digit of } n) \pmod{10}}$$

#### Exemplar: Find the last two digits of $41^{73}$.
* Here $a = 4$ and the last digit of the exponent $73$ is $3$.
* Units digit $= 1$.
* Tens digit $= (4 \times 3) \pmod{10} = 12 \pmod{10} = 2$.
* Last two digits $= \mathbf{21}$.

---

### 2. Numbers Ending in 3, 7, 9 (Convert to Ending in 1)
Square or raise to power 4 to generate a base ending in 1:
* **Base 3**: $3^4 = 81 \implies 3^{4k} = (81)^k$.
* **Base 7**: $7^4 = 2401 \implies 7^{4k} = (\dots01)^k$.
* **Base 9**: $9^2 = 81 \implies 9^{2k} = (81)^k$.

#### Exemplar: Find the last two digits of $7^{2008}$.
1. Rewrite as $(7^4)^{502} = (2401)^{502} = (\dots01)^{502}$.
2. Units digit $= 1$.
3. Tens digit $= (0 \times 2) \pmod{10} = 0$.
4. Last two digits $= \mathbf{01}$.

---

### 3. Power of 2 Invariant: The $2^{10}$ Modular Engine
$$2^{10} = 1024 \equiv 24 \pmod{100}$$
$$2^{20} = (1024)^2 = (\dots24)^2 = \dots76 \equiv \mathbf{76} \pmod{100}$$

#### Critical Modulo 100 Properties of 76:
* $76^n$ always ends in $\mathbf{76}$ for all $n \ge 1$.
* **$76 \times 2^k$ always ends in the exact same last two digits as $2^k$!**
  * $2^{10 \times \text{even}}$ ends in $\mathbf{76}$.
  * $2^{10 \times \text{odd}}$ ends in $\mathbf{24}$.

---

## 6.3 Legendre's Formula: Highest Power of a Prime in $n!$

To find the highest power of a prime number $p$ dividing $n!$ (denoted $E_p(n!)$):

$$\mathbf{E_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \left\lfloor \frac{n}{p^3} \right\rfloor + \dots}$$

where $\lfloor x \rfloor$ denotes the greatest integer less than or equal to $x$, terminating when $p^k > n$.

#### Exemplar: Find the highest power of $3$ dividing $100!$.
$$E_3(100!) = \left\lfloor \frac{100}{3} \right\rfloor + \left\lfloor \frac{100}{9} \right\rfloor + \left\lfloor \frac{100}{27} \right\rfloor + \left\lfloor \frac{100}{81} \right\rfloor$$
$$E_3(100!) = 33 + 11 + 3 + 1 = \mathbf{48}$$
* $3^{48}$ completely divides $100!$, while $3^{49}$ does not.

---

## 6.4 Trailing Zeros in Factorials and Arbitrary Products

A trailing zero is produced exclusively by the prime factor pair **$2 \times 5 = 10$**.

In any factorial $n!$, multiples of $2$ appear far more frequently than multiples of $5$. Therefore, the prime $5$ is the **limiting factor**, and the number of trailing zeros equals $E_5(n!)$:

$$\mathbf{Z(n!) = \left\lfloor \frac{n}{5} \right\rfloor + \left\lfloor \frac{n}{25} \right\rfloor + \left\lfloor \frac{n}{125} \right\rfloor + \left\lfloor \frac{n}{625} \right\rfloor + \dots}$$

#### Multi-Tier Worked Exemplar:
Find the number of trailing zeros in $1000!$.
$$Z(1000!) = \left\lfloor \frac{1000}{5} \right\rfloor + \left\lfloor \frac{1000}{25} \right\rfloor + \left\lfloor \frac{1000}{125} \right\rfloor + \left\lfloor \frac{1000}{625} \right\rfloor$$
$$Z(1000!) = 200 + 40 + 8 + 1 = \mathbf{249 \text{ trailing zeros}}$$

---

## 6.5 Base Systems & Positional Number Systems

In any positional base $B \ge 2$, a number $N$ is represented using digits from $0$ to $B - 1$:
$$N = (d_k d_{k-1} \dots d_1 d_0)_B = \sum_{i=0}^{k} d_i B^i$$

### 1. Decimal to Base $B$ Conversion (Successive Division)
Repeatedly divide the decimal number by $B$, recording the remainders from bottom to top:

#### Exemplar: Convert $(137)_{10}$ into Base 8 (Octal).
1. $137 \div 8 = 17$, Remainder $= \mathbf{1}$
2. $17 \div 8 = 2$, Remainder $= \mathbf{1}$
3. $2 \div 8 = 0$, Remainder $= \mathbf{2}$
* Reading remainders bottom to top: $(137)_{10} = \mathbf{(211)_8}$.

---

### 2. Base $B$ to Decimal Conversion (Polynomial Expansion)
Multiply each digit by its positional power of $B$:
$$(211)_8 = 2 \times 8^2 + 1 \times 8^1 + 1 \times 8^0 = 2(64) + 8 + 1 = 128 + 9 = \mathbf{137}_{10}$$

---

## 6.6 Top Examiner Traps in Unit Digits & Trailing Zeros

1. **The Remainder Zero $d^0 = 1$ Fallacy**:
   When evaluating $2^{40}$, $40 \div 4 = 10$, Remainder $= 0$. If you compute $2^0 = 1$, you get an incorrect answer. A remainder of $0$ means the **fourth position in the cycle** ($2^4 \to 6$).
2. **The Non-Factorial Product Trailing Zeros Trap**:
   In arbitrary non-factorial products (such as $25 \times 12 \times 15 \times 40$), do not assume 5 is the limiting factor! Count the exact powers of both $2$ and $5$:
   * $25 = 5^2$
   * $12 = 2^2 \times 3$
   * $15 = 3 \times 5^1$
   * $40 = 2^3 \times 5^1$
   * Total $2$s: $2 + 3 = 5$. Total $5$s: $2 + 1 + 1 = 4$.
   * Trailing Zeros $= \min(5, 4) = \mathbf{4}$.
3. **The Factorial Sum Trailing Zeros Trap**:
   In expressions like $10! + 20! + 30!$, the number of trailing zeros is determined strictly by the **smallest factorial term** ($10!$ has $2$ zeros), because adding higher-power numbers cannot add zeros beyond the lowest trailing position.
