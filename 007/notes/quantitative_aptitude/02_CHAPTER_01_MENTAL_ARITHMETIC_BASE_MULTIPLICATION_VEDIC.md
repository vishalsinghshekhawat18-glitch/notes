<div style="page-break-before: always;"></div>

# CHAPTER 01: MENTAL ARITHMETIC FOUNDATIONS, BASE MULTIPLICATION & VEDIC ENGINES

**Canonical Sources Unified**:
* Sarvesh K. Verma, *Quantum CAT* (Ch. 1: Speed Arithmetic & Number Basics)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 1: Number System & Mental Calculations)
* Arun Sharma, *How to Prepare for Quantitative Aptitude for CAT* (Ch. 1: Speed Math)
* Swami Bharati Krishna Tirtha, *Vedic Mathematics* (Foundational Sutras: Ekadhikena, Anurupyena, Urdhva Tiryagbhyam)

---

## 1.1 The Epistemic Foundation: Cognitive Bandwidth & The Two-Speed Solver

In competitive aptitude examinations (SBI PO Mains, RBI Grade B Phase 1, CAT, UPSC CSAT), calculation speed is not merely about writing faster—it is about **preserving working memory**.

When a student spends 90 seconds performing long-form manual long division or multidigit multiplication on scratch paper, two compounding failures occur:
1. **Cognitive Fatigue**: The brain expends glucose and attention on mechanical grade-school arithmetic rather than higher-order problem modeling.
2. **Cascading Error Propagation**: A single mechanical error at step 3 destroys the downstream solution of an otherwise correct 5-step problem.

The **Two-Speed Framework** establishes:
* **The Analytical Layer**: Comprehending the word problem, formulating algebraic invariants, or selecting the proper geometric theorem.
* **The Execution Layer**: Resolving numerical operations mentally using base decomposition, digital sums, and invariant unit conversions.

---

## 1.2 Base Multiplication: The Symmetrical Deviation Method

Base multiplication relies on decomposing numbers relative to a proximate power of 10 (the **Working Base** $B = 100, 1000, 10000$).

### The First-Principles Algebraic Proof
Let the working base be $B$. Let two numbers to be multiplied be:
$$N_1 = B + a$$
$$N_2 = B + b$$

Their product is:
$$N_1 \times N_2 = (B + a)(B + b) = B^2 + B(a + b) + ab = B[B + a + b] + ab$$

Since $N_1 + b = (B + a) + b = B + a + b$, and symmetrically $N_2 + a = B + a + b$, the formula simplifies to:
$$N_1 \times N_2 = B \times (N_1 + b) + (a \times b) = B \times (N_2 + a) + (a \times b)$$

Thus, the product splits cleanly into two distinct parts:
* **Left-Hand Side (LHS)**: Cross-addition: $(N_1 + \text{deviation of } N_2)$ or $(N_2 + \text{deviation of } N_1)$.
* **Right-Hand Side (RHS)**: Product of deviations: $(a \times b)$. The number of digits reserved for the RHS must equal the number of zeros in base $B$.

---

### Case A: Both Deviations Positive (Numbers Above Base)

#### Exemplar: Compute $108 \times 112$ (Base $B = 100$)
1. **Identify Deviations**:
   * $N_1 = 108 \implies a = +8$
   * $N_2 = 112 \implies b = +12$
2. **Compute Left-Hand Side (LHS)**:
   * $\text{LHS} = 108 + 12 = 120$ (or $112 + 8 = 120$)
3. **Compute Right-Hand Side (RHS)**:
   * $\text{RHS} = (+8) \times (+12) = 96$ (exactly 2 digits for base 100)
4. **Synthesize Final Result**:
   * Result $= 120 \times 100 + 96 = \mathbf{12,096}$.

---

### Case B: Both Deviations Negative (Numbers Below Base)

#### Exemplar: Compute $94 \times 88$ (Base $B = 100$)
1. **Identify Deviations**:
   * $N_1 = 94 \implies a = -6$
   * $N_2 = 88 \implies b = -12$
2. **Compute Left-Hand Side (LHS)**:
   * $\text{LHS} = 94 + (-12) = 82$ (or $88 + (-6) = 82$)
3. **Compute Right-Hand Side (RHS)**:
   * $\text{RHS} = (-6) \times (-12) = +72$
4. **Synthesize Final Result**:
   * Result $= 82 \times 100 + 72 = \mathbf{8,272}$.

---

### Case C: Mixed Deviations (One Positive, One Negative)

When one number is above and the other is below the base, the product of deviations $(a \times b)$ is negative. In this case, we borrow $1$ unit (worth $B$) from the LHS.

#### Exemplar: Compute $106 \times 93$ (Base $B = 100$)
1. **Identify Deviations**:
   * $N_1 = 106 \implies a = +6$
   * $N_2 = 93 \implies b = -7$
2. **Compute Left-Hand Side (LHS)**:
   * $\text{LHS} = 106 + (-7) = 99$
3. **Compute Right-Hand Side (RHS)**:
   * $\text{RHS} = (+6) \times (-7) = -42$
4. **Apply Base Carry-Over**:
   * We rewrite $99 \times 100 - 42$ as:
   $$(99 - 1) \times 100 + (100 - 42) = 98 \times 100 + 58 = \mathbf{9,858}$$.

### Case D: Deviation Product Exceeding Suffix Width (Carry Normalisation)

When the product of deviations $(a \times b)$ produces more digits than the suffix width $k = \log_{10}(B)$ (the number of zeros in base $B = 10^k$), the excess leading digits cannot remain in the suffix. They must be carried forward and added directly into the left block (LHS):

$$\text{Product} = \left(\text{LHS} + \left\lfloor \frac{a \times b}{10^k} \right\rfloor\right) \times 10^k + \left((a \times b) \bmod 10^k\right)$$

#### Exemplar 1: Compute $109 \times 117$ (Base $B = 100$, Suffix Width $k = 2$)
1. **Identify Deviations**:
   * $N_1 = 109 \implies a = +9$
   * $N_2 = 117 \implies b = +17$
2. **Compute Unadjusted Left Block (LHS)**:
   * $\text{LHS} = 109 + 17 = 126$ (or symmetrically, $117 + 9 = 126$)
3. **Compute Deviation Product**:
   * $a \times b = (+9) \times (+17) = \mathbf{153}$
4. **Normalise Carry into Left Block**:
   * Base $100$ reserves exactly $2$ digits for the suffix ($k = 2$). The hundreds digit of $153$ (which is $1$) carries over into the left block:
   * $\text{Adjusted LHS} = 126 + 1 = \mathbf{127}$
   * $\text{Suffix (RHS)} = 153 \bmod 100 = \mathbf{53}$
5. **Synthesize Final Result**:
   * $\text{Result} = 127 \times 100 + 53 = \mathbf{12,753}$.

#### Exemplar 2: Deviation Product Equal to Base ($105 \times 120$, Base $B = 100$)
1. Deviations: $a = +5, b = +20$.
2. Unadjusted LHS: $105 + 20 = 125$.
3. Deviation product: $5 \times 20 = 100$.
4. Normalise carry: Carry the $+1$ into LHS $\implies 125 + 1 = 126$, Suffix $= 00$.
5. Result: $126 \times 100 + 00 = \mathbf{12,600}$.

---

## 1.3 Criss-Cross Multiplication: The General $2 \times 2$ and $3 \times 3$ Engine

When numbers are far apart or not close to a clean power of 10, the **Urdhva Tiryagbhyam (Vertically and Crosswise)** algorithm provides a universal single-line calculation engine.

### The $2 \times 2$ Algorithm: $(ab) \times (cd)$
Given two two-digit numbers represented by digits $a, b$ and $c, d$:

```
Step 1: Vertical right:       b × d               (Units digit, carry over tens)
Step 2: Cross multiplication: (a × d) + (b × c)   (Tens digit + carried value)
Step 3: Vertical left:        a × c               (Hundreds digit + carried value)
```

#### Multi-Tier Worked Exemplar: Compute $64 \times 73$
* **Step 1 (Units)**: $4 \times 3 = 12 \implies$ Write **2**, carry forward **1**.
* **Step 2 (Tens)**: $(6 \times 3) + (4 \times 7) + 1 = 18 + 28 + 1 = 47 \implies$ Write **7**, carry forward **4**.
* **Step 3 (Hundreds)**: $(6 \times 7) + 4 = 42 + 4 = 46 \implies$ Write **46**.
* **Synthesized Product**: $\mathbf{4,672}$.

---

## 1.4 Digital Sum vs. Residue Modulo 9: The Verification Engine

In competitive arithmetic verification, candidates frequently confuse the **conventional digital root** with the **residue modulo 9**. While deeply related through congruence arithmetic, they are distinct mathematical functions with different codomains and boundary behaviors.

### 1. Mathematical Definitions & Boundary Conditions

For any integer $n \ge 0$:

* **Least Non-Negative Residue Modulo 9 ($r_9(n)$)**:
  $$r_9(n) = n \bmod 9 \in \{0, 1, 2, 3, 4, 5, 6, 7, 8\}$$
  Defined as the remainder when $n$ is divided by 9 in Euclidean division.

* **Conventional Digital Root ($\text{dr}(n)$)**:
  The single digit obtained by summing the decimal digits of $n$ recursively until a single digit remains:
  $$\text{dr}(n) = \begin{cases} 0, & \text{if } n = 0 \\ 9, & \text{if } n > 0 \text{ and } n \equiv 0 \pmod{9} \\ n \bmod 9, & \text{if } n \not\equiv 0 \pmod{9} \end{cases}$$
  For strictly positive integers $n \in \mathbb{Z}^+$, $\text{dr}(n) \in \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$ and satisfies the closed formula:
  $$\text{dr}(n) = 1 + \left((n - 1) \bmod 9\right)$$

### 2. The Critical Divergence on Multiples of 9 and Zero

```text
┌─────────┬──────────────────────┬──────────────────────┬────────────────────────────────────────────────────────┐
│ Integer │ Residue Modulo 9     │ Digital Root dr(n)   │ Mathematical Rationale & Examination Impact            │
│ n       │ r₉(n) = n mod 9      │ Recursive Digit Sum  │                                                        │
├─────────┼──────────────────────┼──────────────────────┼────────────────────────────────────────────────────────┤
│ 0       │ 0                    │ 0                    │ By definition, 0 has digit sum 0.                      │
│ 9       │ 0                    │ 9                    │ 9 mod 9 = 0, but the single-digit digit sum is 9!      │
│ 18      │ 0                    │ 9                    │ 1 + 8 = 9 (dr = 9), while 18 is a multiple of 9 (r₉=0).│
│ 14      │ 5                    │ 5                    │ Non-multiples of 9 coincide: 1 + 4 = 5 = 14 mod 9.     │
│ 495     │ 0                    │ 9                    │ 4 + 9 + 5 = 18 ➔ 1 + 8 = 9 (dr = 9), residue is 0.     │
└─────────┴──────────────────────┴──────────────────────┴────────────────────────────────────────────────────────┘
```

> **The "Cast Out Nines" Heuristic**:
> Because $10 \equiv 1 \pmod{9}$, any digit `9` or pair of digits summing to `9` (e.g., $4 + 5$, $7 + 2$) contributes $0 \pmod{9}$. In computing $\text{dr}(n)$, casting out 9s speeds calculation; however, if all digits cancel out completely (such as in $99$ or $18$), the digital root is **$9$**, not $0$!

### 3. Operational Invariants of Digital Roots
For all positive integers $A, B$:
* **Addition Invariant**: $\text{dr}(A + B) = \text{dr}(\text{dr}(A) + \text{dr}(B))$
* **Multiplication Invariant**: $\text{dr}(A \times B) = \text{dr}(\text{dr}(A) \times \text{dr}(B))$
* **Power Invariant**: $\text{dr}(A^k) = \text{dr}((\text{dr}(A))^k)$

#### Audit of Worked Problem via Digital Root
Check whether $64 \times 73 = 4,672$:
* $\text{dr}(64) = \text{dr}(6 + 4) = \text{dr}(10) = 1$
* $\text{dr}(73) = \text{dr}(7 + 3) = \text{dr}(10) = 1$
* Expected Product Digital Root: $\text{dr}(1 \times 1) = \mathbf{1}$.
* Actual RHS Digital Root: $\text{dr}(4672) = \text{dr}(4 + 6 + 7 + 2) = \text{dr}(19) = \text{dr}(1 + 9) = \text{dr}(10) = \mathbf{1}$.
* Both LHS and RHS yield $1 \implies$ Product satisfies digital root modular verification.

---

## 1.5 Diagnostic Distinction Matrix: Method Suitability

| Method | Optimal Operational Domain | Speed Advantage | Critical Examiner Trap |
| :--- | :--- | :--- | :--- |
| **Base Multiplication** | Numbers proximate to powers of 10 ($92 \times 97$, $104 \times 109$) | **3 to 5 seconds** mental execution | Forgetting to pad RHS with leading zeros when deviations are small (e.g. $102 \times 103 \implies 2 \times 3 = 06$, not $6$). |
| **Criss-Cross ($2 \times 2$)** | Arbitrary 2-digit numbers without base proximity ($47 \times 83$) | **10 to 12 seconds** single-line writing | Carry-over accumulation errors during cross-product additions. |
| **Digital Sum Audit** | Verifying complex multi-term arithmetic without recalculating | **2 to 4 seconds** option elimination | Digital sum cannot detect transposition errors (e.g., writing 4,627 instead of 4,672, as both sum to 1). |

---

## 1.6 The Deadliest Mental Arithmetic Traps

1. **The RHS Digit Count Omission Trap**:
   When multiplying $102 \times 103$ in Base 100, the RHS is $2 \times 3 = 6$. Writing $1056$ instead of $10506$ results in a 10x magnitude error. Always fill leading zeros to match base zeros!
2. **The Division by Digital Sum Fallacy**:
   Digital roots cannot be divided directly ($D(A / B) \neq D(A) / D(B)$) because division requires modular multiplicative inverses. Always convert division into multiplication before applying digital root tests: if $A / B = C$, verify $D(B \times C) = D(A)$.
3. **The Decimal Shift Misplacement Trap**:
   Digital sums treat $0.04672$, $4.672$, and $4672$ identically because decimal points have zero effect on modular residue mod 9. Never rely on digital sums to verify decimal placement—use order-of-magnitude bounding ($60 \times 70 = 4200$).
