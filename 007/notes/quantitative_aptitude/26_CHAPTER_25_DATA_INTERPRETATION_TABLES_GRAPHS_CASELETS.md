# CHAPTER 25: DATA INTERPRETATION: TABLES, BAR CHARTS, PIE CHARTS, LINE GRAPHS & CASELETS

**Domain**: Applied Statistical Analytics, Graphical Information Decompression & Quantitative Reasoning  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1 & 2), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: The Four Fundamental DI Operations $\to$ Graphical Archetypes $\to$ Dual Pie Chart Conversion $\to$ 3-Set Venn Caselet Algebra $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: THE FOUR ATOMIC DI OPERATIONS

Data Interpretation ($\mathbf{DI}$) is not a distinct branch of mathematics; it is the **rapid computational extraction of commercial arithmetic from compressed graphical representations**. In every competitive examination, more than $85\%$ of all DI questions resolve into one of four elemental mathematical operations:

```
                          ┌───────────────────────────┐
                          │   Raw Graphical Dataset   │
                          └─────────────┬─────────────┘
                                        │
         ┌──────────────────┬───────────┴───────────┬──────────────────┐
         ▼                  ▼                       ▼                  ▼
  [Absolute & %      [Ratio Comparison       [Average & Net      [Sub-Segment
     Change]          & Proportions]          Deviations]           Share]
  Δ = (F - I)/I × 100   a/b vs c/d             ∑ x_i / n           (Part / Total) × 100
```

### The Four Operational Identities
1. **Percentage Increase / Decrease**:
   $$\mathbf{\Delta\% = \left(\frac{\text{Final Value} - \text{Initial Value}}{\text{Initial Base Value}}\right) \times 100\%}$$
   - *Axiom of Base Selection*: The denominator is **ALWAYS the initial (reference) baseline**, introduced by the preposition *"over"* or *"compared to"*.
2. **Ratio Evaluation & Sizing**:
   $$\mathbf{R = \frac{\text{Quantity}_A}{\text{Quantity}_B}}$$
3. **Arithmetic Mean & Deviation**:
   $$\mathbf{\mu = \frac{\sum_{i=1}^n x_i}{n} = A_0 + \frac{\sum (x_i - A_0)}{n}}$$
4. **Proportional Contribution (Share of Total)**:
   $$\mathbf{\text{Share\%} = \left(\frac{\text{Sub-Component}}{\text{Aggregate Total}}\right) \times 100\%}$$

---

## 2. GRAPHICAL ARCHETYPES & COMPRESSION PROTOCOLS

### A. Tabular Matrices
- **Structure**: Cross-tabulation along orthogonal row and column dimensions.
- **Protocol**: Verify whether row/column sums are inclusive of sub-segments. Inspect for missing data fields that must be deduced algebraically before attempting questions.

### B. Bar Charts (Clustered, Stacked & Percentage)
- **Clustered Bars**: Compare distinct entities across multiple attributes.
- **Stacked (Subdivided) Bars**: Display both the overall aggregate magnitude (top boundary of the bar) and internal segmental distribution (heights of individual colored segments).
- **Percentage Bar Charts**: All vertical bars normalized to $100\%$ height. The vertical length of each segment represents its relative percentage share.

### C. Line Graphs & Continuous Trends
- Continuous curves or line segments tracking temporal movement.
- **Slope as Rate of Change**:
  $$\text{Slope} = \mathbf{\frac{\Delta y}{\Delta t} = \frac{y_2 - y_1}{t_2 - t_1}}$$
- **Compound Annual Growth Rate (CAGR)**:
  $$\text{CAGR} = \mathbf{\left(\frac{V_n}{V_0}\right)^{\frac{1}{n}} - 1 \approx \frac{1}{n} \left(\frac{V_n - V_0}{V_0}\right) \quad (\text{Linear Approximation})}$$

---

## 3. PIE CHART MECHANICS & ANGULAR TRANSFORMATION

A pie chart maps quantitative proportions onto the circular angular topology of $360^\circ$.

### The Angular-Percentage Sovereign Equivalence
$$\mathbf{100\% \equiv 360^\circ \iff 1\% \equiv 3.6^\circ \iff 1^\circ \equiv \frac{5}{18}\% \approx 0.2778\%}$$

$$\mathbf{\text{Sector Angle } \theta = \left(\frac{\text{Value}}{\text{Total Aggregate}}\right) \times 360^\circ = \text{Percentage} \times 3.6^\circ}$$

| Percentage ($\%$) | Sector Central Angle ($\theta$) | Operational Utility |
| :---: | :---: | :--- |
| **$5\%$** | **$18^\circ$** | Baseline unit |
| **$10\%$** | **$36^\circ$** | Standard decimal shift |
| **$12.5\%$** | **$45^\circ$** | Octant ($\frac{1}{8}$ of circle) |
| **$16\frac{2}{3}\%$** | **$60^\circ$** | Sextant ($\frac{1}{6}$ of circle) |
| **$20\%$** | **$72^\circ$** | One-fifth ($\frac{1}{5}$) |
| **$25\%$** | **$90^\circ$** | Quadrant ($\frac{1}{4}$ of circle) |
| **$33\frac{1}{3}\%$** | **$120^\circ$** | One-third ($\frac{1}{3}$) |
| **$50\%$** | **$180^\circ$** | Semicircle ($\frac{1}{2}$) |

---

### The Dual Pie Chart Base Multiplier Law
A pervasive pitfall in SBI PO and CAT occurs when comparing sectors across two pie charts possessing different aggregate baselines ($P_1 \neq P_2$):

> **THE DUAL PIE CHART LAW**: You **CANNOT compare raw percentage slices** between two pie charts! A slice of $25\%$ in Pie Chart 1 is NOT necessarily greater than a slice of $20\%$ in Pie Chart 2.
> $$\mathbf{\text{Absolute Magnitude} = \text{Percentage Slice} \times \text{Chart Total Base}}$$

$$\mathbf{\frac{\text{Absolute}_A}{\text{Absolute}_B} = \left(\frac{\%_A}{\%_B}\right) \times \left(\frac{\text{Base}_1}{\text{Base}_2}\right)}$$

---

## 4. CASELETS & 3-SET VENN DIAGRAM ALGEBRA

Unstructured prose narratives in DI require conversion into an algebraic Venn matrix:

```
                            Set A           Set B
                           ┌───────┬───────┬───────┐
                           │   a   │   d   │   b   │
                           ├───────┼───────┼───────┤
                           │   f   │   g   │   e   │
                           └───────┴───────┴───────┘
                                   │   c   │
                                   └───────┘
                                     Set C
```

Where:
- $a, b, c$ = Exactly one set only
- $d, e, f$ = Exactly two sets only
- $g$ = All three sets ($A \cap B \cap C$)

### Fundamental Set Identities
$$\text{Total Elements } n(A \cup B \cup C) = \mathbf{(a + b + c) + (d + e + f) + g}$$
$$\sum n(A) = n(A) + n(B) + n(C) = \mathbf{(a + b + c) + 2(d + e + f) + 3g}$$

$$\mathbf{\text{Exactly One Set} = a + b + c = \sum n(A) - 2(d + e + f) - 3g}$$
$$\mathbf{\text{Exactly Two Sets} = d + e + f = \sum n(A \cap B) - 3g}$$
$$\mathbf{\text{At Least Two Sets} = (d + e + f) + g = \sum n(A \cap B) - 2g}$$

---

## 5. HIGH-SPEED RATIO & PERCENTAGE ESTIMATION ENGINES

When comparing multiple large fractions in Data Interpretation without a calculator:

### Tool 1: Cross-Multiplication Comparison
To determine whether $\frac{a}{b} > \frac{c}{d}$:
$$\mathbf{\frac{a}{b} \lessgtr \frac{c}{d} \iff a \cdot d \lessgtr b \cdot c}$$

### Tool 2: Percentage Base-Splitting (The Anchor Method)
To calculate $\frac{382}{1,450}$ rapidly:
- $10\%$ of $1,450 = 145$
- $20\%$ of $1,450 = 290$
- Residual needed: $382 - 290 = 92$
- $5\%$ of $1,450 = 72.5$
- Residual needed: $92 - 72.5 = 19.5$
- $1\%$ of $1,450 = 14.5 \implies$ Total $\approx 20\% + 5\% + 1.3\% = \mathbf{26.3\%}$.

---

## 6. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Percentage Increase Across Bar Graph (SBI PO Prelims)
**Data**: A country's foreign exchange reserves (in million US\$) across years:
- 1991–92: $2,640$
- 1992–93: $3,720$
- 1993–94: $2,520$
- 1994–95: $3,360$
- 1996–97: $4,320$
- 1997–98: $5,040$

**Problem 1**: The foreign exchange reserves in 1997–98 were how many times that of 1994–95?  
**Execution**:
$$\text{Ratio} = \frac{5040}{3360} = \frac{504}{336} = \frac{3}{2} = \mathbf{1.5 \text{ times}}$$

**Problem 2**: What was the percentage increase in reserves in 1997–98 over 1993–94?  
**Execution**:
- Initial Base (1993–94): $2,520$
- Final Value (1997–98): $5,040$
$$\Delta\% = \frac{5040 - 2520}{2520} \times 100\% = \frac{2520}{2520} \times 100\% = \mathbf{100\%}$$

---

### Exemplar 2: Dual Pie Chart Sizing (RBI Grade B Phase 1)
**Data**:
- Pie Chart 1 (Total Expenditure 2024 = ₹$40 \text{ Crores}$): Raw Materials $= 30\%$.
- Pie Chart 2 (Total Expenditure 2025 = ₹$60 \text{ Crores}$): Raw Materials $= 25\%$.

**Problem**: What is the percentage increase in absolute expenditure on Raw Materials from 2024 to 2025?

**Execution**:
- Raw Material Expenditure in 2024 $= 30\% \text{ of } 40 = 0.30 \times 40 = \mathbf{₹12 \text{ Crores}}$.
- Raw Material Expenditure in 2025 $= 25\% \text{ of } 60 = 0.25 \times 60 = \mathbf{₹15 \text{ Crores}}$.
$$\Delta\% = \frac{15 - 12}{12} \times 100\% = \frac{3}{12} \times 100\% = \mathbf{25.00\%}$$

*(Note: If one blindly compared percentages, $30\% \to 25\%$ would look like a decrease, while in reality it grew by ₹3 Crores!)*

---

### Exemplar 3: 3-Set Venn Diagram Caselet (CAT / SBI PO Mains)
**Problem**: In an examination of $500$ students:
- $240$ passed in Mathematics ($M$)
- $220$ passed in Physics ($P$)
- $200$ passed in Chemistry ($C$)
- $90$ passed in both $M$ and $P$
- $80$ passed in both $P$ and $C$
- $70$ passed in both $M$ and $C$
- $40$ passed in all three subjects.

Find the number of students who passed in **exactly two subjects**.

**Execution via Venn Intersection Identity**:
Using the formula for exactly two subjects:
$$\text{Exactly Two} = \sum n(A \cap B) - 3 \times n(A \cap B \cap C)$$
$$\text{Exactly Two} = (90 + 80 + 70) - 3(40) = 240 - 120 = \mathbf{120 \text{ students}}$$

---

## 7. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: The Dual Pie Base Fallacy** | Concluding that a $30\%$ slice in Chart 1 is larger than a $20\%$ slice in Chart 2. | Absolute value $= \% \times \text{Base}$. If Chart 2 has a much larger base, its absolute value may be significantly greater. |
| **Trap 2: Percentage Point vs Percentage Change** | Saying an interest rate rising from $4\%$ to $5\%$ increased by $1\%$. | It increased by **$1$ percentage point**, but the percentage increase is $\frac{5 - 4}{4} \times 100\% = \mathbf{25\%}$! |
| **Trap 3: Denominator Base Inversion** | Dividing by the final year instead of the initial base when calculating percentage growth over year $X$. | Growth *"over year X"* means year $X$ is the **initial reference denominator**: $\frac{Y - X}{X}$. |
| **Trap 4: Missing Category Assumption in Tables** | Assuming categories in a table are mutually exclusive without verifying row sum. | Look for footnotes stating whether multi-category participation or overlapping attributes exist. |
| **Trap 5: Venn "Only" vs "Total" Confusion** | Treating "passed in Math and Physics" ($M \cap P$) as "passed in Math and Physics ONLY". | $M \cap P$ includes students who passed all three; "Math and Physics ONLY" $= (M \cap P) - (M \cap P \cap C)$. |
