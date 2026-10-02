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

---

### Matrix B: Digital Root Verification Modulo 9

| Property | Modular Identity | Example | Critical Elimination Rule |
| :--- | :--- | :--- | :--- |
| **Sum Residue** | $D(A + B) = D(D(A) + D(B))$ | $35 + 47 = 82 \implies 8 + 2 = 10 \implies 1$; $82 \implies 10 \implies 1$ | If RHS digital sum does not match, option is 100% incorrect. |
| **Product Residue** | $D(A \times B) = D(D(A) \times D(B))$ | $14 \times 18 = 252 \implies 5 \times 9 = 45 \implies 9$; $252 \implies 9$ | Any term multiplied by a multiple of 9 yields digital root 9. |
| **Cast Out 9s** | $9 \equiv 0 \pmod{9}$ | In $495$, cast out $9$ and $(4+5) \implies$ Digital root $= 9$ (or 0) | Digital root 9 and 0 are isomorphic modulo 9. |
| **Non-Detection Flaw** | Invariance under permutation | $D(4672) = D(4762) = D(2764) = 1$ | Digital root cannot detect swapped digits or transposed numbers. |

---

## 2. 60-Second Retrieval Skeleton

```text
Working Base B = 10^k ➔ LHS = N1 + Dev(N2) ➔ RHS = Dev(N1) × Dev(N2) [Must have k digits] 
➔ Mixed Deviations: Borrow 1 from LHS (Worth B) and calculate (B - ab)
➔ 2×2 Criss-Cross: Units (b×d) ➔ Cross-Tens (ad + bc + carry) ➔ Left Hundreds (a×c + carry)
➔ Digital Root D(N) = N mod 9 ➔ Cast out 9s and pairs summing to 9
➔ Never divide digital sums directly: A/B = C ➔ Check D(B × C) = D(A)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Single-Digit RHS Trap**: Multiplying $103 \times 102$ in Base 100 yields $3 \times 2 = 6$. Writing $1056$ instead of $10506$. The base has two zeros, so RHS requires two places: `06`.
2. **The Base Multiplier Scaling Omission**: For Base 200 ($B = 2 \times 100$), multiplying $204 \times 206$: LHS is $204 + 6 = 210$. You **must multiply LHS by 2** before appending RHS ($210 \times 2 = 420 \implies 42,024$).
3. **The Transposition Blind Spot**: Relying solely on digital roots when options share identical digits in different orders (e.g. 5,432 vs 5,342). Always check the units digit and tens digit as a secondary filter.
4. **The Negative Digital Sum**: In subtraction, if $D(A) - D(B)$ is negative (e.g., $3 - 7 = -4$), add 9 to normalize: $-4 + 9 = 5$.
5. **Decimal Insensitivity**: Digital sums of $0.45$, $4.5$, and $450$ are all $9$. Always determine the magnitude bound using scientific powers of 10.
