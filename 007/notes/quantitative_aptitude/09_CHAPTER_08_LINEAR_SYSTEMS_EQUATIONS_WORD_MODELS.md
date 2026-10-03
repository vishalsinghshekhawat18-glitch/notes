<div style="page-break-before: always;"></div>

# CHAPTER 08: LINEAR SYSTEMS, 2-VARIABLE EQUATIONS & WORD PROBLEM MODELING

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 7: Problems on Numbers, pp. 240–263; Ch. 8: Problems on Ages, pp. 264–277)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 4: Linear Equations & Word Systems)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 5: Problems on Numbers; Ch. 6: Problems on Ages)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 5: Linear Equations & Inequations)

---

## 8.1 Linear Systems & Consistency Criteria

A system of two linear equations in two variables $x$ and $y$ has the canonical form:
$$a_1x + b_1y + c_1 = 0$$
$$a_2x + b_2y + c_2 = 0$$

The geometric interaction of the lines determines the existence and uniqueness of solutions:

```
┌──────────────────────────────┬───────────────────────────────┬───────────────────────────────┬───────────────────────────────┐
│ System Condition             │ Ratio Test                    │ Geometric Representation      │ Number of Solutions           │
├──────────────────────────────┼───────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ 1. Consistent & Independent  │ a₁/a₂ ≠ b₁/b₂                 │ Intersecting Lines            │ Exactly ONE Unique Solution   │
│ 2. Consistent & Dependent    │ a₁/a₂ = b₁/b₂ = c₁/c₂         │ Coincident (Identical) Lines  │ Infinitely Many Solutions     │
│ 3. Inconsistent (Parallel)   │ a₁/a₂ = b₁/b₂ ≠ c₁/c₂         │ Parallel Non-Overlapping Lines│ ZERO Solutions                │
└──────────────────────────────┴───────────────────────────────┴───────────────────────────────┴───────────────────────────────┘
```

#### Multi-Tier Worked Exemplar:
Find the value of $k$ for which the system of equations has no solution:
$$kx + 3y = 1 \implies kx + 3y - 1 = 0$$
$$12x + ky = 2 \implies 12x + ky - 2 = 0$$

* For **No Solution**, the parallel line condition must hold:
  $$\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} \implies \frac{k}{12} = \frac{3}{k} \neq \frac{-1}{-2}$$
* Solve $\frac{k}{12} = \frac{3}{k}$:
  $$k^2 = 36 \implies k = \pm 6$$
* Test consistency with the constant ratio $\frac{c_1}{c_2} = \frac{1}{2}$:
  * If $k = +6$: $\frac{6}{12} = \frac{1}{2} = \frac{c_1}{c_2}$ (Yields *infinitely many solutions*!).
  * If $k = -6$: $\frac{-6}{12} = -\frac{1}{2} \neq \frac{1}{2} = \frac{c_1}{c_2}$ (Yields *no solution*!).
* **Conclusion**: For no solution, $\mathbf{k = -6}$. *(An absolute classic examiner trap where candidates choose $+6$!)*

---

## 8.2 Two-Digit and Three-Digit Reversible Number Invariants

Let a two-digit number have tens digit $t$ and units digit $u$. Its algebraic value is:
$$N = 10t + u$$

When the digits are reversed, the new number is:
$$N' = 10u + t$$

### The Two Fundamental Invariants:
1. **The Sum Invariant**:
   $$N + N' = (10t + u) + (10u + t) = 11(t + u)$$
   * **Axiom**: The sum of any two-digit number and its digit reversal is **always divisible by 11**, and the quotient equals the sum of the digits $(t + u)$.
2. **The Difference Invariant**:
   $$|N - N'| = |(10t + u) - (10u + t)| = 9|t - u|$$
   * **Axiom**: The difference between any two-digit number and its digit reversal is **always divisible by 9**, and the quotient equals the difference between the digits $|t - u|$.

---

### Three-Digit Reversible Number Invariant:
Let $N = 100h + 10t + u$. Reversing digits yields $N' = 100u + 10t + h$.
$$|N - N'| = |(100h + 10t + u) - (100u + 10t + h)| = 99|h - u|$$
* **Axiom**: The difference between a three-digit number and its reverse is **always divisible by 99**, and the quotient is the difference between the hundreds and units digits $|h - u|$.

#### Exemplar (R.S. Aggarwal Benchmark):
A number consists of two digits whose sum is 9. If 27 is subtracted from the number, its digits are reversed. Find the number.
1. Digits sum: $t + u = 9$.
2. Given $N - N' = 27$.
3. Since $N - N' = 9(t - u) = 27 \implies t - u = 3$.
4. Solve the linear system:
   $$t + u = 9, \quad t - u = 3 \implies 2t = 12 \implies t = 6, \quad u = 3$$
5. The number is $10(6) + 3 = \mathbf{63}$. *(Check: $63 - 27 = 36$. Digits reverse!)*

---

## 8.3 The Invariant Age Gap Principle & Ratio Progression

In all age-related problems, the most critical physical invariant is:
$$\mathbf{\text{The difference between the ages of two people remains CONSTANT across all time!}}$$

### The Rapid Ratio Unit Synchronization Engine
Suppose the present ratio of ages of $A$ and $B$ is $a : b$.  
After $T$ years, the ratio becomes $c : d$.

If the ratio unit difference $(c - a) \neq (d - b)$, **equalize the ratio gaps** by multiplying each ratio by the opposite age difference:
* Difference in first ratio $= |a - b|$.
* Difference in second ratio $= |c - d|$.
* Multiply ratio 1 by $|c - d|$, and ratio 2 by $|a - b|$.
* Now the vertical ratio increase $\Delta$ is identical for both people:
  $$\mathbf{1 \text{ Ratio Unit} = \frac{T \text{ years}}{\Delta}}$$

#### Multi-Tier Worked Exemplar:
The ratio of ages of father and son is currently $3 : 1$. Four years ago, the ratio was $4 : 1$. Find the present age of the father.
1. **Ratio 1 (4 years ago)**: $4 : 1$ (Gap $= 4 - 1 = 3$).
2. **Ratio 2 (Present)**: $3 : 1$ (Gap $= 3 - 1 = 2$).
3. **Synchronize Gaps**:
   * Multiply Ratio 1 by 2: $(4 : 1) \times 2 = \mathbf{8 : 2}$.
   * Multiply Ratio 2 by 3: $(3 : 1) \times 3 = \mathbf{9 : 3}$.
4. **Compare Vertical Ratio Movement**:
   * Father: $8 \to 9$ ($+1$ unit).
   * Son: $2 \to 3$ ($+1$ unit).
   * Time elapsed between 4 years ago and present $= 4 \text{ years}$.
   * Therefore: $1 \text{ Ratio Unit} = 4 \text{ years}$.
5. **Present Ages**:
   * Father's present units $= 9 \implies 9 \times 4 = \mathbf{36 \text{ years}}$.
   * Son's present units $= 3 \implies 3 \times 4 = \mathbf{12 \text{ years}}$.
   *(Check: 4 years ago, Father was 32, Son was 8. Ratio $32 : 8 = 4 : 1$. Exact match without writing equations!)*

---

## 8.4 Linear Diophantine Equations (Integer Constraints)

Equations of the form $ax + by = c$ with integer restrictions $(x, y \in \mathbb{Z}^+)$ are solvable even with two unknowns in a single equation:

### Solvability Criterion:
A linear Diophantine equation $ax + by = c$ has integer solutions if and only if:
$$\mathbf{\gcd(a, b) \mid c}$$

#### Exemplar: Find the number of positive integer solutions $(x, y > 0)$ for $3x + 5y = 101$.
1. Check solvability: $\gcd(3, 5) = 1$, which divides $101$.
2. Find the smallest positive integer $y$ such that $(101 - 5y)$ is divisible by $3$:
   * For $y = 1$: $101 - 5 = 96$. $96 \div 3 = 32$.
   * Base solution: $(x_0, y_0) = (32, 1)$.
3. General solution: As $y$ increases by $3$ (coefficient of $x$), $x$ decreases by $5$ (coefficient of $y$):
   * $(32, 1), (27, 4), (22, 7), (17, 10), (12, 13), (7, 16), (2, 19)$.
4. Next step would make $x = 2 - 5 = -3 < 0$.
5. **Total Positive Integer Solutions**: $\mathbf{7 \text{ solutions}}$.

---

## 8.5 Top Examiner Traps in Linear Systems & Ages

1. **The Parallel vs Coincident Line Parameter Fallacy**:
   When solving for parameter $k$ in parallel lines ($a_1/a_2 = b_1/b_2$), forgetting to verify the inequality with $c_1/c_2$. The positive root often yields overlapping identical lines (infinite solutions), making the negative root the only true "no solution" answer.
2. **The "Hence" vs "Ago" Chronological Sign Slip**:
   * "5 years ago": $A - 5$.
   * "5 years hence": $A + 5$.
   Mistaking "hence" for past time is a common linguistic error.
3. **The Fraction Difference Framing Trap**:
   *"One-fifth of a number exceeds one-sixth by 4"*:
   $$\frac{x}{5} - \frac{x}{6} = 4 \implies \frac{x}{30} = 4 \implies x = 120$$
   Do not reverse the minuend and subtrahend!
