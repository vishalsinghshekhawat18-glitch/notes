# RAPID REVISION MATRIX: CHAPTER 06

**Topic**: Unit Digit Cycles, Tens Digit, Trailing Zeros & Base Systems  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Unit Digit Cyclicity Groups

| Cyclicity | Digits | Exponential Behavior | Critical Trap Condition |
| :---: | :---: | :--- | :--- |
| **Cycle 1** | $0, 1, 5, 6$ | Invariant: $0^n=0, 1^n=1, 5^n=5, 6^n=6$ | None (Self-identical). |
| **Cycle 2** | $4, 9$ | $4^{\text{odd}}=4, 4^{\text{even}}=6$; $9^{\text{odd}}=9, 9^{\text{even}}=1$ | Forgetting parity of exponent. |
| **Cycle 4** | $2, 3, 7, 8$ | Check $r = p \pmod 4$: $d^r$ | If $r = 0$, evaluate as $d^4$ (NOT $d^0 = 1$!). |

---

### Matrix B: Last Two Digits Shortcuts

| Base Pattern | Algebraic Invariant | Worked Exemplar |
| :--- | :--- | :--- |
| **Ending in 1**<br/>$(10a + 1)^n$ | Units $= 1$<br/>Tens $= (a \times \text{last digit of } n) \pmod{10}$ | $31^{42} \implies \text{Units } 1, \text{ Tens } (3 \times 2) = 6 \implies \mathbf{61}$ |
| **Ending in 3, 7, 9** | Convert to ending in 1 via $3^4 = 81, 7^4 = \dots01, 9^2 = 81$ | $7^{40} = (01)^{10} = \mathbf{01}$ |
| **Power of 2** | $2^{10\times\text{even}} \equiv 76$; $2^{10\times\text{odd}} \equiv 24$<br/>$76 \times 2^k \equiv 2^k \pmod{100}$ | $2^{54} = 2^{50} \times 2^4 = 24 \times 16 = 384 \implies \mathbf{84}$ |

---

## 2. 60-Second Retrieval Skeleton

```text
Unit Digit Algorithm: Check last digit of base d ➔ Divide power p by 4 ➔ Remainder r
➔ If r > 0 ➔ dʳ ➔ If r = 0 ➔ d⁴ (NEVER d⁰!)
➔ Legendre's Formula: E_p(n!) = ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ...
➔ Trailing Zeros in n! = E_5(n!) = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...
➔ Trailing Zeros in Arbitrary Products = min(Total 2s, Total 5s)
➔ Trailing Zeros in Sums (A! + B! with A < B) = Zeros in A! (Smallest term dominates!)
➔ Base Conversion: Decimal ➔ Base B: Repeated division by B (read remainders upward)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Remainder 0 Equals 4 Rule**: In $3^{40}$, $40 \pmod 4 = 0$. Writing $3^0 = 1$ is a lucky coincidence for 3, but for $2^{40}$, $2^0 = 1$ is fatal! Correct is $2^4 = 16 \implies 6$.
2. **Trailing Zeros in Additions**: $1000 + 10 = 1010$ (1 zero, NOT $3 + 1 = 4$ zeros!). In addition, the term with the fewest zeros dictates the trailing count.
3. **Non-Factorial Trailing Zeros**: In $5 \times 10 \times 15 \times \dots \times 50$, 5 is no longer the limiting factor—**2 is the limiting factor!** You must count factors of 2.
4. **Base Conversion Digits Range**: In base $B$, the digits range strictly from $0$ to $B - 1$. A digit equal to or greater than $B$ (e.g. digit 8 in base 8) is invalid!
5. **Legendre Prime Condition**: Legendre’s formula applies **strictly to prime numbers**. To find the highest power of 12 in $n!$, factor $12 = 2^2 \times 3^1$. Find $\lfloor E_2(n!) / 2 \rfloor$ and $E_3(n!)$, and take their minimum.
