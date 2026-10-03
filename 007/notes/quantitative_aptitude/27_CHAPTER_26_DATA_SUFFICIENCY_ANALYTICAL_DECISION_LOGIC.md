# CHAPTER 26: DATA SUFFICIENCY & ANALYTICAL DECISION LOGIC

**Domain**: Epistemic Sufficiency, Deterministic Existence Proofs & Meta-Mathematical Logic  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, GMAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: The Epistemic Sufficiency Axiom $\to$ The 5-Way Decision Matrix $\to$ Value vs Yes/No Propositions $\to$ System Redundancy & Degeneracy $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: THE EPISTEMIC SUFFICIENCY AXIOM

Data Sufficiency ($\mathbf{DS}$) is an advanced meta-mathematical discipline that tests **whether a unique mathematical solution exists**, rather than requiring the candidate to mechanically compute the final numerical value.

> **The Sovereign Law of Data Sufficiency**:  
> In Data Sufficiency, **computing the answer is a waste of time and an epistemic error**. Your sole objective is to establish whether the provided informational constraints bound the solution space to a **single unique value** or a **definitive, unshakeable binary truth (Yes or No)**.

```
                         [PROPOSED PROBLEM STATEMENT]
                                      │
                     Step 1: Test Statement (1) Alone
                                 /        \
                           SUFFICIENT    NOT SUFFICIENT
                              /              \
         Step 2: Test Stmt (2) Alone    Step 2: Test Stmt (2) Alone
             /                 \             /                 \
       SUFFICIENT         NOT SUFF     SUFFICIENT         NOT SUFF
           │                   │           │                   │
    [OPTION C: Either]   [OPTION A: (1)] [OPTION B: (2)]  Step 3: Combine (1) + (2)
                                                               /             \
                                                         SUFFICIENT       NOT SUFF
                                                             │                │
                                                      [OPTION D: Both] [OPTION E: Neither]
```

---

## 2. THE CANONICAL 5-WAY DECISION MATRIX

Every standard data sufficiency problem offers a target question followed by two informational constraints, Statement (1) and Statement (2):

| Designation | Formal Logical State | Practical Operational Rule |
| :---: | :--- | :--- |
| **Option A** | **Statement (1) ALONE is sufficient**, but Statement (2) alone is NOT sufficient. | Statement (1) yields a unique answer; Statement (2) fails. |
| **Option B** | **Statement (2) ALONE is sufficient**, but Statement (1) alone is NOT sufficient. | Statement (2) yields a unique answer; Statement (1) fails. |
| **Option C** | **EACH statement ALONE is sufficient**. | Statement (1) independently yields an answer, AND Statement (2) independently yields an answer. |
| **Option D** | **Statements (1) and (2) TOGETHER are sufficient**, but neither alone is sufficient. | Information from both statements must be merged simultaneously to eliminate degrees of freedom. |
| **Option E** | **Statements (1) and (2) TOGETHER are NOT sufficient**. | Even after combining all constraints, multiple answers remain possible. More data is required. |

*(Note: While some examinations like GMAT, Banking PO, or CAT alter the letter assignments A–E, the underlying logical decision tree remains completely invariant).*

---

## 3. VALUE PROPOSITIONS VS YES/NO PROPOSITIONS

Problems partition strictly into two epistemic categories:

### Category A: Value Questions ("What is the value of $X$?")
A statement is SUFFICIENT if and only if it generates **one and only one real numerical value**:
- If a statement leads to $X = 5$, it is **SUFFICIENT**.
- If a statement leads to $X = 5$ or $X = -5$, it is **NOT SUFFICIENT** (unless negative values are physically disallowed by context, such as human age, geometrical length, or speed).
- If a statement yields an infinite range (e.g., $X > 10$), it is **NOT SUFFICIENT**.

### Category B: Binary Yes/No Questions ("Is $X$ an even integer?")
A statement is SUFFICIENT if it generates a **definitive, unvarying answer**:
- A definitive, unambiguous **"YES"** $\implies$ **SUFFICIENT**.
- A definitive, unambiguous **"NO"** $\implies$ **EQUALLY SUFFICIENT**!
- An ambiguous outcome ("Sometimes Yes, Sometimes No") $\implies$ **NOT SUFFICIENT**.

> **The "NO" Sufficiency Theorem**: A common psychological error is believing that a "No" answer means the data is insufficient. If a statement proves conclusively that $X$ is NOT even, it has answered the question with $100\%$ certainty and is **completely sufficient**!

---

## 4. MATHEMATICAL DEGENERACY & SYSTEM REDUNDANCY

When evaluating algebraic constraints, look for hidden geometric or algebraic degeneracies:

### Degeneracy 1: Dependent / Collinear Equations
Two equations in two variables do NOT guarantee a unique solution if they represent the same line:
$$2x + 3y = 12 \quad \text{and} \quad 4x + 6y = 24$$
$$\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} \implies \text{Infinitely Many Solutions (NOT SUFFICIENT)}$$

### Degeneracy 2: Inconsistent / Parallel Equations
$$2x + 3y = 12 \quad \text{and} \quad 4x + 6y = 30$$
$$\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} \implies \text{Zero Solutions / Contradiction (INVALID)}$$

### Degeneracy 3: The Quadratic Sign Ambiguity
$$x^2 = 36 \implies x = \pm 6$$
Without boundary restrictions ($x \in \mathbb{N}$ or physical context), quadratic constraints introduce a 2-fold ambiguity.

---

## 5. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: The Linear System Trap (SBI PO Mains)
**Question**: What is the value of $(x + y)$?  
- **Statement (1)**: $2x + 3y = 18$
- **Statement (2)**: $4x + 6y = 36$

**Analytical Evaluation**:
- *Statement (1)*: $2x + 3y = 18$. Two variables, one equation. Cannot determine unique $(x + y)$. $\to$ **Insufficient**.
- *Statement (2)*: $4x + 6y = 36 \implies 2(2x + 3y) = 36 \implies 2x + 3y = 18$. Identical to Statement (1). $\to$ **Insufficient**.
- *Combining (1) + (2)*: Statement (2) provides zero new information (redundant). We still have only 1 unique equation for 2 unknowns.
$$\mathbf{\text{Correct Decision: Option E (Statements Together are NOT Sufficient)}}$$

---

### Exemplar 2: Binary Yes/No with Negative Numbers (CAT / GMAT)
**Question**: Is $x > y$?  
- **Statement (1)**: $x - y > 0$
- **Statement (2)**: $x^2 > y^2$

**Analytical Evaluation**:
- *Statement (1)*: $x - y > 0 \implies x > y$. Gives a 100% definitive "YES" for every possible real number. $\to$ **Sufficient**.
- *Statement (2)*: $x^2 > y^2 \implies |x| > |y|$.
  - Test positive numbers: $x = 3, y = 2 \implies 9 > 4$ and $x > y$ (YES).
  - Test negative numbers: $x = -4, y = 2 \implies 16 > 4$, but $x < y$ (NO).
  - Yields both Yes and No. $\to$ **Not Sufficient**.

$$\mathbf{\text{Correct Decision: Option A (Statement 1 Alone is Sufficient)}}$$

---

### Exemplar 3: Average Age with Integer Physical Constraint (UPSC CSAT)
**Question**: What is the age of the youngest child in a family of 3 children?  
- **Statement (1)**: The average age of the three children is $8$ years.
- **Statement (2)**: The product of their ages is $128$, and all children have distinct integer ages.

**Analytical Evaluation**:
- *Statement (1)*: $A + B + C = 24$. Infinitely many integer combinations. $\to$ **Insufficient**.
- *Statement (2)*: $A \cdot B \cdot C = 128 = 2^7$. Ages are distinct positive integers.
  - Prime factorization: $128 = 1 \times 2 \times 64 = 1 \times 4 \times 32 = 1 \times 8 \times 16 = 2 \times 4 \times 16 \dots$
  - Youngest child could be $1$ or $2$. Multiple possibilities. $\to$ **Insufficient**.
- *Combining (1) + (2)*:
  We need distinct integers summing to $24$ and multiplying to $128$:
  - Test $(2, 6, 16)$: Sum $= 24$, but product $= 192 \neq 128$.
  - Test $(2, \dots)$: Factor $128$:
    Possible distinct integer triplets multiplying to $128$:
    - $(1, 2, 64) \to \text{Sum } 67$
    - $(1, 4, 32) \to \text{Sum } 37$
    - $(1, 8, 16) \to \text{Sum } 25$
    - $(2, 4, 16) \to \text{Sum } 2 + 4 + 16 = \mathbf{22}$
    - $(2, 8, 8) \to$ Not distinct!
    - $(4, 4, 8) \to$ Not distinct!
  Notice no triplet of distinct integers gives sum $24$ and product $128$! (If distinct ages, sum $22$ gives $(2, 4, 16)$). Thus no valid integer family exists under both premises, meaning the data is either contradictory or insufficient!

$$\mathbf{\text{Correct Decision: Option E (Statements Together are NOT Sufficient)}}$$

---

### Exemplar 4: Speed and Distance Symmetry (RBI Grade B Phase 1)
**Question**: A train crosses a platform in $24$ seconds. What is the length of the train?  
- **Statement (1)**: The speed of the train is $72 \text{ km/hr}$.
- **Statement (2)**: The length of the platform is $180 \text{ meters}$.

**Analytical Evaluation**:
- Master relationship: $D = L_{\text{train}} + L_{\text{platform}} = v_{\text{train}} \times T$.
- *Statement (1) alone*: $v_{\text{train}} = 72 \text{ km/h} = 20 \text{ m/s}$. Total distance $= 20 \times 24 = 480 \text{ m}$. We know $L_t + L_p = 480$, but cannot isolate $L_t$. $\to$ **Insufficient**.
- *Statement (2) alone*: $L_p = 180 \text{ m}$. We have neither speed nor total distance. $\to$ **Insufficient**.
- *Combining (1) + (2)*:
  $L_t + 180 = 480 \implies L_t = 300 \text{ m}$.
  Both statements together uniquely identify the train's length.

$$\mathbf{\text{Correct Decision: Option D (Both Statements Together are Sufficient)}}$$

---

## 6. THE 6 DEADLY TRAPS OF DATA SUFFICIENCY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: Information Contamination (Leakage)** | Carrying numbers or facts learned from Statement (1) over into the evaluation of Statement (2). | Evaluate Statement (2) in **absolute cognitive isolation**, completely wiping Statement (1) from memory! |
| **Trap 2: The "Need to Calculate" Compulsion** | Spending 90 seconds carrying out long division to compute decimal answers. | The moment a system of non-redundant equations has a unique solution, **STOP IMMEDIATELY**. |
| **Trap 3: Quadratic Multi-Root Blindness** | Assuming $x^2 = 49$ uniquely answers "What is $x$?". | Unless specified as positive or physical length, $x = \pm 7$ produces **two answers (Insufficient)**. |
| **Trap 4: The "Definitive NO" Misconception** | Marking a statement insufficient because it proves the answer to "Is $x > 5$?" is "No". | A definitive "NO" answers the question with $100\%$ certainty; it is **completely sufficient**! |
| **Trap 5: Zero and Negative Number Exclusion** | Testing only positive integers ($1, 2, 3$) and forgetting $0$, $-1$, and fractions. | Always test the "ZONE" numbers: **Zero, One, Negative, Extreme, and Fractional**. |
| **Trap 6: System Redundancy Deception** | Counting two equations as sufficient without checking if one is a scalar multiple of the other. | Check coefficients $\frac{a_1}{a_2} = \frac{b_1}{b_2}$; proportional equations provide **zero new information**. |
