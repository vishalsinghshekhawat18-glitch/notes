# RAPID REVISION MATRIX: CHAPTER 04

**Topic**: Divisibility Invariants, Prime Factorization, Factor Sums & Totient Theory  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Universal Divisibility Rules

| Divisor | Mathematical Condition | Rapid Recognition Pattern | Common Trap |
| :---: | :--- | :--- | :--- |
| **$2^k$ ($2, 4, 8, 16$)** | Last $k$ digits divisible by $2^k$ | $4 \to$ last 2 digits; $8 \to$ last 3 digits | Checking sum of digits instead of positional blocks. |
| **$3, 9$** | Sum of all digits divisible by $3$ or $9$ | Digital root $D(N) \in \{3,6,9\}$ for 3; $D(N)=9$ for 9 | Digital root of 9 implies divisibility by 9 AND 3. |
| **$11$** | $\|S_{\text{odd}} - S_{\text{even}}\| = 0 \text{ or } 11k$ | Alternating sum of individual digits | Counting positions from the left instead of right. |
| **$7, 11, 13$** | Alternating sum of 3-digit blocks | Block difference divisible by $7, 11,$ or $13$ | Forgetting that $7 \times 11 \times 13 = 1001$. |
| **$72$** | Divisible by BOTH $8$ and $9$ | Last 3 digits $\div 8$ AND Sum of digits $\div 9$ | Factoring into non-coprime parts (e.g. $6 \times 12$). |

---

### Matrix B: Factor Metric Suite for $N = p_1^{a_1} p_2^{a_2} \dots p_k^{a_k}$

| Metric | Closed Mathematical Formula | Operational Shortcut |
| :--- | :--- | :--- |
| **Total Factors $T(N)$** | $(a_1 + 1)(a_2 + 1)\dots(a_k + 1)$ | Add 1 to each prime exponent and multiply. |
| **Odd Factors $T_{\text{odd}}$** | $(a_2 + 1)(a_3 + 1)\dots$ (ignore $p=2$) | Drop factor of 2 completely. |
| **Even Factors $T_{\text{even}}$** | $T(N) - T_{\text{odd}} = a_1(a_2 + 1)\dots$ | Keep $a_1$ unincremented. |
| **Sum of Factors $S(N)$** | $\prod_{i=1}^{k} \frac{p_i^{a_i+1} - 1}{p_i - 1}$ | Geometric series sum for each prime. |
| **Product of Factors** | $N^{T(N)/2}$ | Base raised to half of total factors count. |
| **Totient Function $\phi(N)$** | $N \prod (1 - 1/p_i)$ | Count of integers $\le N$ coprime to $N$. |

---

## 2. 60-Second Retrieval Skeleton

```text
Prime Testing: Test primes p ≤ ⌊√N⌋ ➔ If none divide N, N is prime!
➔ Prime Form: Every prime p > 3 is of the form 6k ± 1
➔ Coprime Pair Requirement: Divisibility by C = a × b holds iff gcd(a, b) = 1
➔ T(N) is ODD iff N is a perfect square! (Every non-square has an EVEN number of factors)
➔ Product of Factors = N^(T(N)/2)
➔ Euler Totient ϕ(N) = N(1 - 1/p₁)(1 - 1/p₂)... ➔ Sum of coprimes ≤ N = (1/2) · N · ϕ(N)
```

---

## 3. Top 5 Instant Killer Traps

1. **Composite Divisibility Non-Coprime Trap**: Testing divisibility by 12 using $2$ and $6$. A number like 18 is divisible by 2 and 6, but NOT by 12! Always use coprime factors: $3$ and $4$.
2. **The Number of Prime Factors vs Distinct Prime Factors**: In $360 = 2^3 \times 3^2 \times 5^1$:
   * Number of **distinct** prime factors $= 3$ (namely $2, 3, 5$).
   * Total number of prime factors (with multiplicity) $= 3 + 2 + 1 = 6$.
3. **The 1 is Not a Prime Axiom**: $1$ has only one factor ($1$ itself). By definition, a prime must have strictly two distinct factors. $1$ is neither prime nor composite!
4. **The Twin Prime vs Co-prime Confusion**: Twin primes must both be prime (diff = 2). Coprimes can both be composite (e.g. 15 and 28 are coprime since $\gcd(15, 28) = 1$).
5. **Alternating Block Signs in 7/11/13**: When evaluating 3-digit blocks, always take alternating signs from the rightmost block: $\text{Block}_1 - \text{Block}_2 + \text{Block}_3 - \dots$.
