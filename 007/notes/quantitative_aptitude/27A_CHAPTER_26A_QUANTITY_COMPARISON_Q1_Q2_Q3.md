<div style="page-break-before: always;"></div>

# CHAPTER 29: QUANTITY COMPARISON LABORATORY (Q1 VS Q2 VS Q3)

**Target Examination Relevance**:
* **SBI PO & IBPS PO (Mains)**: High-yield format (typically 3–5 questions when featured in Data Analysis & Interpretation; exact representation varies across examination shifts and cycles)
* **IBPS RRB PO (Mains)**: Frequently featured (typically 3–5 questions depending on annual sectional composition)
* **RBI Grade B (Phase I)**: High-concept arithmetic questions occasionally structured as 2- or 3-quantity comparisons under tight 25-minute sectional pacing

---

## 29.1 What is it?
Quantity Comparison questions present two or three independent mathematical statements labeled:
$$\text{Quantity I } (Q_1), \quad \text{Quantity II } (Q_2), \quad \text{Quantity III } (Q_3)$$
The candidate must evaluate each quantity and identify the correct relational chain:
* $Q_1 > Q_2 > Q_3$
* $Q_1 \le Q_2 < Q_3$
* $Q_1 = Q_2 = Q_3$
* or "Relationship cannot be established"

---

## 29.2 Core Operational Strategy

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                               THE QUANTITY COMPARISON ENGINE                             │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Treat each Quantity as an independent mini-problem.                                   │
│ 2. Solve the simplest Quantity first (usually Q2 or Q3 is a single-step calculation).    │
│ 3. Use the computed value of the simple Quantity as a benchmark for remaining quantities.│
│ 4. If Q1 > Q2 is established, and a preliminary bound shows Q3 > Q1, the order is fixed  │
│    without calculating Q3 to exact decimals!                                             │
│ 5. Be vigilant with Quadratic or Square Root Quantities: x² = 16 ➔ x = ±4, whereas       │
│    x = √16 ➔ x = +4 ONLY!                                                                │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 29.3 High-Yield Multi-Tier Worked Exemplar

### Exemplar 1 [EXAM-STYLE — SBI PO Mains Arithmetic Synthesis]
**Directions**: Compare the three quantities below and choose the correct relation:

* **Quantity I ($Q_1$)**: A bag contains $4$ red, $5$ green, and $6$ blue balls. Three balls are drawn at random. What is the probability that at least two balls are green?
* **Quantity II ($Q_2$)**: A pipe can fill a tank in $12$ hours. Due to a leak in the bottom, it takes $16$ hours to fill the tank. How many hours will the leak alone take to empty a half-full tank?
* **Quantity III ($Q_3$)**: The simple interest on a certain sum of money for $3$ years at $8\%$ p.a. is ₹$720$. What is the compound interest on the same sum for $2$ years at $10\%$ p.a.?

#### Step-by-Step Solution:

**1. Evaluate Quantity I ($Q_1$)**:
* Total balls $= 4 + 5 + 6 = 15$. Total ways to draw $3$ balls $= \binom{15}{3} = \frac{15 \times 14 \times 13}{6} = 455$.
* "At least two green" means either **exactly 2 green** or **all 3 green**:
  * Case A (2 Green, 1 Non-Green): $\binom{5}{2} \times \binom{10}{1} = 10 \times 10 = 100$.
  * Case B (3 Green): $\binom{5}{3} = 10$.
  * Total favorable $= 100 + 10 = 110$.
* $Q_1 = \frac{110}{455} = \frac{22}{91} \approx \mathbf{0.2417}$.

**2. Evaluate Quantity II ($Q_2$)**:
* Pipe fill rate $= \frac{1}{12}$; Net rate with leak $= \frac{1}{16}$.
* Leak emptying rate $= \frac{1}{12} - \frac{1}{16} = \frac{4 - 3}{48} = \frac{1}{48}$ tank/hour.
* Time to empty **full** tank $= 48$ hours.
* Time to empty **half-full** tank $= \frac{48}{2} = \mathbf{24 \text{ hours}}$.
* Therefore, $Q_2 = \mathbf{24}$.

**3. Evaluate Quantity III ($Q_3$)**:
* $\text{SI} = \frac{P \times 8 \times 3}{100} = \frac{24P}{100} = 720 \implies P = \frac{720 \times 100}{24} = ₹3,000$.
* $\text{CI}$ on ₹$3,000$ for $2$ years at $10\%$:
  * Net effective rate $= 10 + 10 + \frac{100}{100} = 21\%$.
  * $\text{CI} = 21\% \text{ of } 3000 = 0.21 \times 3000 = \mathbf{₹630}$.
* Therefore, $Q_3 = \mathbf{630}$.

#### Relational Conclusion:
$$Q_1 \approx 0.24, \quad Q_2 = 24, \quad Q_3 = 630$$
$$\mathbf{Q_1 < Q_2 < Q_3}$$

---

## 29.4 Top 3 Traps in Quantity Comparisons

1. **The Square vs. Square Root Trap**:
   * $x^2 = 25 \implies x = \pm 5$.
   * $y = \sqrt{25} \implies y = +5$ strictly (Principal square root is non-negative!).
   * Comparing $x$ and $y$: Since $x$ can be $+5$ ($x = y$) or $-5$ ($x < y$), the relationship is $x \le y$ (NOT $x = y$!).
2. **Missing Negative Roots in Quadratics**: Comparing only the positive root and declaring $Q_1 > Q_2$ when the negative root violates the inequality.
3. **Unit Inconsistency**: Comparing Quantity I given in hours with Quantity II given in minutes or days without normalizing units.
