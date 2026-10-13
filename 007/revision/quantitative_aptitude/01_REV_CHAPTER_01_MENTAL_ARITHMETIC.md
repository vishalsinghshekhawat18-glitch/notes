# RAPID REVISION MATRIX: CHAPTER 01

**Topic**: Mental Arithmetic Foundations, Base Multiplication & Vedic Engines  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Base Multiplication Operational Rules

| Case Pattern | Algebraic Signature | LHS Operation | RHS Operation & Zero Constraint | Edge-Case Trap |
| :--- | :--- | :--- | :--- | :--- |
| **Both Above Base** | $(B + a)(B + b)$ | Cross-add: $N_1 + b$ or $N_2 + a$ | $(+a) \times (+b)$ with exact $k$ digits (where $B = 10^k$) | Missing leading zeros (e.g. $102 \times 103 \implies 06$). |
| **Both Below Base** | $(B - a)(B - b)$ | Cross-subtract: $N_1 - b$ or $N_2 - a$ | $(-a) \times (-b) = +ab$ | Adding negative deviations instead of subtracting. |
| **Mixed Deviations** | $(B + a)(B - b)$ | Cross-operate: $N_1 - b$ or $N_2 + a$ | $(+a) \times (-b) = -ab$ (Borrow 1 from LHS $\implies B - ab$) | Forgetting to decrement LHS by 1 when borrowing base. |
| **Carry Normalisation** | $(B + a)(B + b)$ with $ab \ge 10^k$ | Add $\lfloor ab / 10^k \rfloor$ carry into LHS | Suffix retains exactly $ab \bmod 10^k$ | Forgetting to carry excess digits into LHS (e.g. $109 \times 117 \implies 126 \mid 153 \to 12,753$). |

---

### Matrix B: Digital Root $\text{dr}(n)$ vs. Residue Modulo 9 $r_9(n)$

| Concept / Property | Formal Definition | Value for $n = 18$ | Value for $n = 14$ | Critical Mathematical Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Residue Modulo 9 ($r_9(n)$)** | $n \bmod 9 \in \{0, 1, \dots, 8\}$ | $r_9(18) = 0$ | $r_9(14) = 5$ | Least non-negative remainder in Euclidean division by 9. |
| **Digital Root ($\text{dr}(n)$)** | Single-digit recursive digit sum; $\text{dr}(n) = 1 + ((n-1) \bmod 9)$ for $n > 0$; $\text{dr}(0) = 0$ | $\text{dr}(18) = 1 + 8 = 9$ | $\text{dr}(14) = 1 + 4 = 5$ | For positive multiples of 9, $\text{dr}(n) = 9$, whereas $r_9(n) = 0$! |
| **Sum Invariant** | $\text{dr}(A + B) = \text{dr}(\text{dr}(A) + \text{dr}(B))$ | - | - | If RHS digital root does not match LHS, option is 100% incorrect. |
| **Product Invariant** | $\text{dr}(A \times B) = \text{dr}(\text{dr}(A) \times \text{dr}(B))$ | - | - | Any number multiplied by a multiple of 9 yields digital root 9. |
| **Non-Detection Flaw** | Permutation invariance | $\text{dr}(4672) = \text{dr}(4762) = 1$ | - | Digital root cannot detect swapped digits or transpositions. |

---

## 2. 60-Second Retrieval Skeleton

```text
Working Base B = 10^k ➔ LHS = N1 + Dev(N2) ➔ RHS = Dev(N1) × Dev(N2) [Must have k digits] 
➔ Mixed Deviations: Borrow 1 from LHS (Worth B) and calculate (B - ab)
➔ Carry Normalisation: If ab >= 10^k, carry floor(ab / 10^k) into LHS (e.g. 109 × 117 ➔ LHS 126, RHS 153 ➔ 127 | 53 = 12,753)
➔ 2×2 Criss-Cross: Units (b×d) ➔ Cross-Tens (ad + bc + carry) ➔ Left Hundreds (a×c + carry)
➔ Residue r9(n) = n mod 9 (range 0–8) vs Digital Root dr(n) (range 1–9 for n > 0; dr(0) = 0)
➔ Positive multiples of 9 have dr(n) = 9 but r9(n) = 0. Closed formula: dr(n) = 1 + ((n - 1) mod 9)
➔ Never divide digital roots directly: A/B = C ➔ Check dr(B × C) = dr(A)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Single-Digit RHS Trap**: Multiplying $103 \times 102$ in Base 100 yields $3 \times 2 = 6$. Writing $1056$ instead of $10506$. The base has two zeros, so RHS requires two places: `06`.
2. **The Base Multiplier Scaling Omission**: For Base 200 ($B = 2 \times 100$), multiplying $204 \times 206$: LHS is $204 + 6 = 210$. You **must multiply LHS by 2** before appending RHS ($210 \times 2 = 420 \implies 42,024$).
3. **The Transposition Blind Spot**: Relying solely on digital roots when options share identical digits in different orders (e.g. 5,432 vs 5,342). Always check the units digit and tens digit as a secondary filter.
4. **The Negative Digital Root Shift**: In subtraction, if $\text{dr}(A) - \text{dr}(B)$ is negative (e.g., $3 - 7 = -4$), add 9 to normalize: $-4 + 9 = 5$.
5. **Decimal Insensitivity**: Digital roots of $0.045$, $0.45$, $4.5$, and $450$ are all $9$. Always determine the magnitude bound using scientific powers of 10.
