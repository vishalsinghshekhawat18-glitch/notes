<div style="page-break-before: always;"></div>

# CHAPTER 04: BANKING NUMBER SERIES (MISSING & WRONG NUMBER MASTERY)

**Target Examination Relevance**:
* **SBI PO & IBPS PO (Prelims)**: High-frequency cluster (typically 5 questions in shifts where featured, alternating with simplification or quadratics; representation varies across shifts)
* **IBPS RRB PO / Officer Scale-I**: Variable presence in Prelims and Mains (topic presence and question weight vary across examination shifts and cycles; not a fixed statutory distribution)
* **RBI Grade B (Phase I)**: Variable presence (when featured, questions typically present multi-layer arithmetic, alternating differences, or decimal half-step series under strict 25-minute sectional pacing; presence varies across shifts and is not guaranteed)
* **SEBI Grade A & NABARD Grade A**: Variable basic-to-moderate pattern series in composite timing papers

---

## 4.1 What is it?
Number Series questions present a sequence of numbers governed by an underlying mathematical rule.
* **Missing Number Series**: One position is marked with `?`. The candidate must determine the generating rule and compute `?`.
* **Wrong Number Series**: One number in the series violates the underlying pattern. The candidate must isolate the exact erroneous number.

---

## 4.2 Core Idea & Progression Hierarchy
Never guess blindly. Analyze the **Growth Profile** of the series first:

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                               THE GROWTH PROFILE HIERARCHY                               │
├──────────────────────────────┬─────────────────────────────┬─────────────────────────────┤
│      GROWTH BEHAVIOR         │       PRIMARY SUSPECT       │      DIAGNOSTIC ACTION      │
├──────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ Slow, steady increase        │ Constant / Arithmetic Diff  │ Calculate Level 1 diff (Δ1) │
│ Irregular slow increase      │ Quadratic / Cubic Diff      │ Calculate Level 2 diff (Δ2) │
│ Rapid, steep growth          │ Multiplicative Factor       │ Test (× k + c) or (× n + n) │
│ Drops first, then explodes   │ Fractional Multipliers      │ Test (× 0.5, × 1, × 1.5...) │
│ Alternating up and down      │ Dual Interleaved / Mixed    │ Check alternate positions   │
│ Perfect squares/cubes close  │ n² ± c or n³ ± c            │ Compare against power table │
└──────────────────────────────┴─────────────────────────────┴─────────────────────────────┘
```

---

## 4.3 The 10 High-Frequency Examination Archetypes

### Archetype 1: Arithmetic Single & Multi-Tier Differences (Polynomials)
* **Level 1 Constant ($\Delta_1 = d$)**: Linear sequence ($an + b$).
* **Level 2 Constant ($\Delta_2 = d$)**: Quadratic sequence ($an^2 + bn + c$).
* **Level 3 Constant ($\Delta_3 = d$)**: Cubic sequence ($an^3 + bn^2 + cn + d$).
* **Worked Multi-Difference Sequence**: Consider $14, \ 29, \ 52, \ 85, \ 130$:
  * Level 1 differences ($\Delta_1$): $29 - 14 = 15, \ 52 - 29 = 23, \ 85 - 52 = 33, \ 130 - 85 = 45$.
  * Level 2 differences ($\Delta_2$): $23 - 15 = 8, \ 33 - 23 = 10, \ 45 - 33 = 12$.
  * Level 3 differences ($\Delta_3$): $10 - 8 = 2, \ 12 - 10 = 2$.
  * *Important Mathematical Fact*: Notice that Level 2 differences ($8, 10, 12$) are an arithmetic progression, not a constant. Taking differences **three times** yields the constant integer $\Delta_3 = 2$, identifying this as a cubic sequence.

### Archetype 2: Powers & Offset Differences ($\Delta = n^2 \pm c$ or $n^3 \pm c$)
* Differences between consecutive terms are squares or cubes:
  $$T_{n+1} = T_n + n^2 \quad \text{or} \quad T_{n+1} = T_n + n^3$$
* Example: $12, 21, 46, 95, 176 \implies \Delta = 9 (3^2), 25 (5^2), 49 (7^2), 81 (9^2)$.

### Archetype 3: Multiplication with Constant Offset ($T_{n+1} = T_n \times k \pm c$)
* The multiplier $k$ and offset $c$ remain fixed.
* Example: $5, 13, 29, 61, 125 \implies (\times 2 + 3)$.

### Archetype 4: Multiplication with Increasing Offset ($T_{n+1} = T_n \times k \pm n$)
* Fixed multiplier, incrementing addition/subtraction.
* Example: $4, 11, 26, 57, 120 \implies (\times 2 + 3, \times 2 + 4, \times 2 + 5, \times 2 + 6)$.

### Archetype 5: Progressive Multiplication ($T_{n+1} = T_n \times (n+1) \pm (n+1)$)
* Multiplier and offset increase together step-by-step: $(\times 2 + 2, \times 3 + 3, \times 4 + 4, \times 5 + 5)$.
* Example: $8, 18, 57, 232, 1165 \implies (8 \times 2 + 2 = 18; \ 18 \times 3 + 3 = 57; \ 57 \times 4 + 4 = 232; \ 232 \times 5 + 5 = 1165)$.

### Archetype 6: Decimal / Half-Step Series (The 0.5 Pattern)
* **The Visual Cue**: The sequence drops or stays equal from Term 1 to Term 2, then rapidly accelerates:
  $$T_{n+1} = T_n \times 0.5, \times 1, \times 1.5, \times 2, \times 2.5, \dots$$
* Example: $16, 8, 8, 12, 24, 60, \mathbf{180}$.

### Archetype 7: Prime Number Step Series
* Differences are consecutive prime numbers: $2, 3, 5, 7, 11, 13, 17, 19, 23 \dots$
* Example: $15, 17, 20, 25, 32, 43, \mathbf{56} \implies \Delta = 2, 3, 5, 7, 11, 13$.
* *Trap*: Candidates often mistake $9$ for a prime and guess $32 + 9 = 41$ instead of $32 + 11 = 43$.

### Archetype 8: Interleaved / Alternating Dual Series
* Odd positions follow Rule 1; Even positions follow Rule 2.
* Example: $6, 25, 11, 20, 16, 15, \mathbf{21}, \mathbf{10}$
  * Series A (Odd): $6 \xrightarrow{+5} 11 \xrightarrow{+5} 16 \xrightarrow{+5} \mathbf{21}$
  * Series B (Even): $25 \xrightarrow{-5} 20 \xrightarrow{-5} 15 \xrightarrow{-5} \mathbf{10}$

### Archetype 9: Fibonacci & Accumulative Sum / Product Series
* Each term is generated from the sum or product of the preceding terms:
  $$T_{n+1} = T_n + T_{n-1} \quad \text{or} \quad T_{n+1} = T_n \times T_{n-1}$$
* Example: $3, 5, 8, 13, 21, 34, \mathbf{55}$ (Standard addition).
* Example: $2, 3, 6, 18, 108, \mathbf{1944}$ (Accumulative product: $6 = 2 \times 3, 18 = 3 \times 6, 108 = 6 \times 18$).

### Archetype 10: Mixed Operations with Alternating Arithmetic Signs
* Operations alternate between multiplication/division and addition/subtraction:
  $$T_{n+1} = T_n \times a + b, \quad T_{n+2} = T_{n+1} \div c - d, \quad \dots$$
* Example: $10, 22, 11, 24, 12, 26, \mathbf{13} \implies (\times 2 + 2, \div 2, \times 2 + 2, \div 2 \dots)$.

---

## 4.4 Wrong Number Series: The Error-Pivot Invariant & Endpoint Exceptions

### The Dual-Flaw Pivot Mechanism (Interior Terms)
When an **interior term** $T_k$ ($2 \le k \le n-1$) is corrupted by an incorrect value $W$:
$$\dots T_{k-1}, \ \mathbf{W}, \ T_{k+1} \dots$$
* Difference $\Delta_{k-1} = W - T_{k-1}$ is **WRONG**.
* Difference $\Delta_k = T_{k+1} - W$ is **WRONG**.
* **The Interior Isolation Rule**: The wrong number is the **common pivot** between the two consecutive incorrect differences. All differences before $\Delta_{k-1}$ and after $\Delta_k$ conform strictly to the generating rule.

```text
Terms:       T1       T2       T3       [W]       T5       T6
Diff:            Δ1       Δ2       [Δ3*]    [Δ4*]     Δ5
Status:          OK       OK       FAIL     FAIL      OK
                                    ▲        ▲
                                    └────┬───┘
                           Wrong Term is [W] (Pivot)
```

### The Crucial Endpoint Exception
The "two corrupted consecutive differences" rule applies **strictly to interior terms**:
1. **Corrupt First Term ($T_1$)**: If the initial term is wrong, only the first difference $\Delta_1 = T_2 - W$ is corrupted. Differences $\Delta_2, \Delta_3, \dots, \Delta_{n-1}$ conform perfectly to the pattern.
2. **Corrupt Final Term ($T_n$)**: If the final term is wrong, only the final difference $\Delta_{n-1} = W - T_{n-1}$ is corrupted. All preceding differences $\Delta_1, \Delta_2, \dots, \Delta_{n-2}$ conform perfectly to the pattern. Do not search for a second corrupted difference when an endpoint fails!

---

## 4.5 Worked Multi-Tier Exam Archetypes

### Exemplar 1 [EXAM-STYLE - Prelims Pattern]: Missing Number
**Problem**: Find `?` in: $24, \ 28, \ 37, \ 53, \ 78, \ ?$
* **Step 1: Compute Level 1 Differences**:
  * $28 - 24 = 4$
  * $37 - 28 = 9$
  * $53 - 37 = 16$
  * $78 - 53 = 25$
* **Step 2: Recognize Pattern**:
  * $4 = 2^2, \ 9 = 3^2, \ 16 = 4^2, \ 25 = 5^2$.
* **Step 3: Predict Next Difference**:
  * Next difference $= 6^2 = 36$.
* **Step 4: Compute Result**:
  * $? = 78 + 36 = \mathbf{114}$.

### Exemplar 2 [EXAM-STYLE - Step Increment Multiplier]: Wrong Number
**Problem**: Identify the wrong number in: $5, \ 11, \ 24, \ \mathbf{53}, \ 106, \ 217$
* **Step 1: Test Generating Rule**:
  * $T_1 \to T_2$: $5 \times 2 + 1 = 11$ (Correct)
  * $T_2 \to T_3$: $11 \times 2 + 2 = 24$ (Correct)
  * $T_3 \to T_4$: $24 \times 2 + 3 = \mathbf{51}$ (The series displays $\mathbf{53}$)
* **Step 2: Downstream Verification with True Value ($51$)**:
  * $51 \times 2 + 4 = 106$ (Matches given $T_5$ perfectly!)
  * $106 \times 2 + 5 = 217$ (Matches given $T_6$ perfectly!)
* **Conclusion**: Replacing $53$ with $51$ repairs both adjacent transitions simultaneously. Therefore, the wrong term is uniquely isolated as **53**.

### Exemplar 3 [EXAM-STYLE - Pattern Calibrated to RBI Grade B Phase I]: Advanced Decimal Half-Step
**Problem**: Find `?` in: $18, \ 9, \ 9, \ 13.5, \ 27, \ 67.5, \ ?$
* **Step 1: Test Factor Multipliers**:
  * $18 \times 0.5 = 9$
  * $9 \times 1.0 = 9$
  * $9 \times 1.5 = 13.5$
  * $13.5 \times 2.0 = 27$
  * $27 \times 2.5 = 67.5$
* **Step 2: Next Multiplier**:
  * Factor increases by $0.5$ each step $\implies \text{Next is } \times 3.0$.
* **Step 3: Result**:
  * $? = 67.5 \times 3 = \mathbf{202.5}$.

---

## 4.6 Top Examiner Traps in Number Series

1. **The Prime Number False-Composite Trap**: Mistaking prime differences $(2, 3, 5, 7, 11)$ for odd numbers and expecting $9$. Always check if $2$ is the first difference!
2. **Stopping at Level 1 Differences**: If Level 1 differences look irregular ($7, 19, 37, 61$), never abandon the problem prematurely. Calculate Level 2 differences: $12, 18, 24 \implies$ multiples of 6!
3. **The Wrong Number Adjacent False-Accusation**: When differences $\Delta_3$ and $\Delta_4$ fail, candidates mistakenly flag $T_3$ or $T_5$ instead of the common pivot $T_4$.
4. **The 45-Second Pacing Trap**: In Banking Prelims, never spend more than 45 seconds on an unyielding series. Flag for review and move on; other section questions carry equal marks.
5. **Multiplication vs Power Ambiguity**: Sequences like $2, 4, 8, 16$ can follow powers of 2 ($2^n$) or a constant multiplier ($\times 2$). Inspect the 5th term to confirm the rule.

---

## 4.7 Timed Practice Drill & Verified Solutions (10 Exam Archetypes)

### Part A: Missing Number Series (Questions 1–5)
1. $12, \ 19, \ 35, \ 64, \ 110, \ ?$
2. $7, \ 16, \ 41, \ 90, \ 171, \ ?$
3. $6, \ 8, \ 18, \ 56, \ 226, \ ?$
4. $240, \ 120, \ 120, \ 180, \ 360, \ ?$
5. $15, \ 24, \ 49, \ 98, \ 179, \ ?$

### Part B: Wrong Number Series (Questions 6–10)
6. $8, \ 18, \ 56, \ 232, \ 1165, \ 6996$
7. $14, \ 26, \ 50, \ 98, \ 195, \ 386$
8. $10, \ 18, \ 45, \ 110, \ 234, \ 450$
9. $11, \ 18, \ 29, \ 42, \ 59, \ 80$
10. $100, \ 97, \ 90, \ 77, \ 56, \ 24$

---

### Step-by-Step Verified Solutions & Answer Key

* **1. Solution**: Differences are $+7, +16, +29, +46$. Second differences are $+9, +13, +17$ (increasing by 4). Next second difference $= 17 + 4 = 21$. Next first difference $= 46 + 21 = 67$. $? = 110 + 67 = \mathbf{177}$. **Ans: 177**.
* **2. Solution**: Differences are $+9, +25, +49, +81 \implies 3^2, 5^2, 7^2, 9^2$ (consecutive odd squares). Next difference $= 11^2 = 121$. $? = 171 + 121 = \mathbf{292}$. **Ans: 292**.
* **3. Solution**: Pattern is $\times 1 + 2, \times 2 + 2, \times 3 + 2, \times 4 + 2$. $6 \times 1 + 2 = 8; \ 8 \times 2 + 2 = 18; \ 18 \times 3 + 2 = 56; \ 56 \times 4 + 2 = 226$. Next term $= 226 \times 5 + 2 = 1130 + 2 = \mathbf{1132}$. **Ans: 1132**.
* **4. Solution**: Decimal multiplier pattern: $\times 0.5, \times 1.0, \times 1.5, \times 2.0$. Next multiplier is $\times 2.5$. $? = 360 \times 2.5 = \mathbf{900}$. **Ans: 900**.
* **5. Solution**: Differences are $+9, +25, +49, +81$ (odd squares). Next difference is $+121$. $? = 179 + 121 = \mathbf{300}$. **Ans: 300**.
* **6. Solution**: The series follows the progressive rule $T_{n+1} = T_n \times (n+1) + (n+1)$:
  * $T_1 \to T_2$: $8 \times 2 + 2 = 18$ (Correct)
  * $T_2 \to T_3$: $18 \times 3 + 3 = \mathbf{57}$ (The given term is **56**, which is wrong!)
  * Verification downstream with $57$:
    * $57 \times 4 + 4 = 228 + 4 = 232$ (Matches given $T_4$)
    * $232 \times 5 + 5 = 1160 + 5 = 1165$ (Matches given $T_5$)
    * $1165 \times 6 + 6 = 6990 + 6 = 6996$ (Matches given $T_6$)
  * Thus, **56** is the wrong term; it should be $57$. **Ans: 56**.
* **7. Solution**: Pattern is $\times 2 - 2$: $14 \times 2 - 2 = 26; \ 26 \times 2 - 2 = 50; \ 50 \times 2 - 2 = 98; \ 98 \times 2 - 2 = 194$. Given term is $195$. Downstream: $194 \times 2 - 2 = 386$ (matches given term). Wrong term is **195** (should be $194$). **Ans: 195**.
* **8. Solution**: Consecutive differences follow cubes of consecutive integers starting from $2^3$:
  * $18 - 10 = 8 = 2^3$
  * $45 - 18 = 27 = 3^3$
  * Expected next difference $= 4^3 = 64 \implies 45 + 64 = \mathbf{109}$ (The given term is $\mathbf{110}$)
  * Verification downstream with $109$:
    * $234 - 109 = 125 = 5^3$ (Matches!)
    * $450 - 234 = 216 = 6^3$ (Matches!)
  * The interior wrong term is **110**; it should be $109$. **Ans: 110**.
* **9. Solution**: Differences: $18 - 11 = 7; \ 29 - 18 = 11; \ 42 - 29 = 13; \ 59 - 42 = 17; \ 80 - 59 = 21$. The differences are prime numbers: $7, 11, 13, 17$. The next prime difference is $19$ (not $21$). Expected term $= 59 + 19 = 78$. Wrong term is **80** (should be $78$). **Ans: 80**.
* **10. Solution**: Differences:
  * First differences: $97 - 100 = -3, \ 90 - 97 = -7, \ 77 - 90 = -13, \ 56 - 77 = -21, \ 24 - 56 = -32$.
  * Second differences: $-7 - (-3) = -4, \ -13 - (-7) = -6, \ -21 - (-13) = -8, \ -32 - (-21) = \mathbf{-11}$.
  * The regular progression of second differences is $-4, -6, -8 \implies$ the next second difference must be $\mathbf{-10}$, not $-11$.
  * Required fifth first difference $= -21 + (-10) = -31$.
  * Expected final term $= 56 - 31 = \mathbf{25}$.
  * The given final term is **24**, which is an endpoint wrong term that corrupts only the final difference. Wrong term is **24** (should be $25$). **Ans: 24**.
