# CHAPTER 17: TIME, WORK, EFFICIENCY & ALTERNATE-DAY MECHANICS

**Domain**: Rate Dynamics, Discrete Labor Cycles & Output Conservation  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: First-Principles Conservation $\to$ The LCM Total-Work Engine $\to$ Dynamic Ingress/Egress Models $\to$ Modular Alternating Cycles $\to$ Chain Rule Equivalence $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: WORK CONSERVATION & EFFICIENCY

Physical work ($W$) is treated in quantitative aptitude as a conserved scalar quantity. The execution of work across continuous or discrete time ($T$) is governed by the rate of execution, termed **Efficiency ($\mathbf{\eta}$)**.

### Mathematical Formulation
$$\eta = \frac{dW}{dt} = \frac{W}{T}$$

When a single discrete job is normalized to unity ($W = 1$):
$$\mathbf{\eta = \frac{1}{T} \iff T = \frac{1}{\eta}}$$

### The Inversion Principle
If worker $A$ completes a job in $T_A$ days, then $A$'s 1-day work output is $\frac{1}{T_A}$.  
When total work $W$ is invariant, individual completion time is **strictly inversely proportional to individual efficiency**:
$$\mathbf{T_A : T_B = \frac{1}{\eta_A} : \frac{1}{\eta_B} = \eta_B : \eta_A}$$

For three agents $A, B, C$:
$$\mathbf{T_A : T_B : T_C = \frac{1}{\eta_A} : \frac{1}{\eta_B} : \frac{1}{\eta_C} = (\eta_B \eta_C) : (\eta_C \eta_A) : (\eta_A \eta_B)}$$

---

## 2. THE LCM TOTAL-WORK ENGINE (ELIMINATING FRACTIONAL DRAG)

The classical textbook method of adding fractional rates ($\frac{1}{a} + \frac{1}{b} + \frac{1}{c}$) introduces severe cognitive drag and error vulnerability. The sovereign standard is the **Integer LCM Work Paradigm**:

1. **Define Total Work ($W$)**: Set $W = \text{LCM}(T_1, T_2, \dots, T_k)$ discrete "units" or "parts".
2. **Compute Daily Efficiencies ($\eta_i$)**:
   $$\eta_i = \frac{W}{T_i} \quad (\text{Integer units per day})$$
3. **Combined Production Rate**:
   $$\eta_{\text{net}} = \sum_{i=1}^k \eta_i$$
4. **Completion Duration**:
   $$\mathbf{T_{\text{net}} = \frac{W}{\eta_{\text{net}}}}$$

```
               [Total Work W = LCM(T_A, T_B, T_C) Units]
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
   Worker A Rate             Worker B Rate             Worker C Rate
   η_A = W / T_A             η_B = W / T_B             η_C = W / T_C
   (Units / Day)             (Units / Day)             (Units / Day)
         └─────────────────────────┬─────────────────────────┘
                                   ▼
                   Combined Efficiency: η_net = ∑ η_i
                   Total Time: T_net = W / η_net
```

---

## 3. PAIRWISE WORK DECOMPOSITION NETWORKS

In high-difficulty competitive examinations, labor rates are frequently given in overlapping bilateral pairings:
- $(A + B)$ complete work in $T_{AB}$ days $\implies \eta_{AB} = \eta_A + \eta_B = \frac{W}{T_{AB}}$
- $(B + C)$ complete work in $T_{BC}$ days $\implies \eta_{BC} = \eta_B + \eta_C = \frac{W}{T_{BC}}$
- $(C + A)$ complete work in $T_{CA}$ days $\implies \eta_{CA} = \eta_C + \eta_A = \frac{W}{T_{CA}}$

Summing all three pairwise rate equations:
$$2(\eta_A + \eta_B + \eta_C) = \eta_{AB} + \eta_{BC} + \eta_{CA}$$
$$\mathbf{\eta_{ABC} = \eta_A + \eta_B + \eta_C = \frac{\eta_{AB} + \eta_{BC} + \eta_{CA}}{2}}$$

Isolate individual worker efficiencies by subtracting known pairs:
$$\mathbf{\eta_A = \eta_{ABC} - \eta_{BC}}, \quad \mathbf{\eta_B = \eta_{ABC} - \eta_{CA}}, \quad \mathbf{\eta_C = \eta_{ABC} - \eta_{AB}}$$

---

## 4. DYNAMIC LABOR INGRESS, EGRESS & PHANTOM EXTENSION

Real-world examination scenarios feature workers joining late or abandoning the site before completion.

### Case 1: Sequential Departure (Worker Leaves After $d$ Days)
Worker $A$ and $B$ work together for $d$ days, then $A$ departs. $B$ finishes the remaining work:
1. Work completed in initial phase: $W_{\text{initial}} = (\eta_A + \eta_B) \times d$.
2. Residual work: $W_{\text{rem}} = W - W_{\text{initial}}$.
3. Additional time taken by $B$: $T_{\text{rem}} = \frac{W_{\text{rem}}}{\eta_B}$.
4. Total project duration: $T_{\text{total}} = d + T_{\text{rem}}$.

### Case 2: Departure Before Completion (The Phantom Work Extension Shortcut)
Worker $A$ leaves the project $d$ days **before scheduled completion**.

*The Classical Long Method*: Set equation $(\eta_A + \eta_B)(T - d) + \eta_B(d) = W$.  
*The Phantom Work Extension (30 Seconds)*:
> **Theorem**: If $A$ had NOT left, how much additional work would $A$ have contributed in those final $d$ days?  
> $$\Delta W = \eta_A \times d$$
> Add this "phantom work" to total work, and let both workers work for the **entire uninterrupted duration**:
> $$\mathbf{T_{\text{total}} = \frac{W_{\text{actual}} + (\eta_A \times d)}{\eta_A + \eta_B}}$$

---

## 5. MODULAR ALTERNATING-DAY CYCLES

When workers execute tasks on successive days in rotation (e.g., $A$ on Day 1, $B$ on Day 2, $C$ on Day 3, $A$ on Day 4...):

1. **Calculate Cycle Block Work**:
   Let the repeat cycle contain $k$ days.
   $$W_{\text{cycle}} = \sum_{i=1}^k \eta_i \quad (\text{Output of 1 complete cycle})$$
2. **Compute Full Cycle Quotient**:
   $$q = \left\lfloor \frac{W}{W_{\text{cycle}}} \right\rfloor \quad (\text{Number of completed full cycles})$$
   - Total time elapsed during full cycles: $T_{\text{cycle}} = q \times k \text{ days}$.
   - Work executed during full cycles: $W_{\text{done}} = q \times W_{\text{cycle}}$.
3. **Resolve Residual Work ($R = W - W_{\text{done}}$)**:
   Deploy remaining workers strictly in chronological turn order:
   - Next worker $j$ performs up to $\eta_j$ units on Day $(T_{\text{cycle}} + 1)$.
   - If $R \le \eta_j$, the residual fractional time is:
     $$\Delta t = \frac{R}{\eta_j} \text{ days}$$
   - Total time: $T_{\text{total}} = (q \times k) + \Delta t$.

---

## 6. THE UNIVERSAL CHAIN RULE & MAN-HOUR EQUIVALENCE

For variable labor forces executing variable scales of work under fluctuating daily schedules:

$$\mathbf{\frac{M_1 \cdot D_1 \cdot H_1 \cdot E_1}{W_1} = \frac{M_2 \cdot D_2 \cdot H_2 \cdot E_2}{W_2}}$$

Where:
- $M$ = Number of workers (Men / Women / Children)
- $D$ = Number of working days
- $H$ = Daily working hours
- $E$ = Worker efficiency rating
- $W$ = Quantified physical output (Kilometers of road, number of books bound, volume dug)

### Gender & Demographic Equivalence Transformations
When questions state "$m_1$ men **or** $w_1$ women can complete a work in $D$ days":
$$m_1 \cdot \eta_m = w_1 \cdot \eta_w \implies \mathbf{\frac{\eta_m}{\eta_w} = \frac{w_1}{m_1}}$$

Convert all heterogeneous agents into normalized "Standard Labor Units" before applying the chain rule.

---

## 7. WAGE ALLOCATION INVARIANTS

Economic remuneration for contract work follows an immutable physical law:

> **The Sovereign Wage Principle**: Wages are divided strictly in proportion to **Total Physical Work Contributed ($\mathbf{W_i}$)** by each worker, NOT their nominal efficiency alone!
> $$\mathbf{\text{Wage}_i \propto W_i = \eta_i \times T_i}$$

- **Condition 1 (Equal Working Duration)**: If all workers begin together and work for the identical number of days ($T_A = T_B = T_C$), then:
  $$\text{Wage}_A : \text{Wage}_B : \text{Wage}_C = \mathbf{\eta_A : \eta_B : \eta_C = \frac{1}{T_A} : \frac{1}{T_B} : \frac{1}{T_C}}$$
- **Condition 2 (Unequal Working Duration)**: If workers join or depart at different times, multiply daily efficiency by the actual days each individual labored.

---

## 8. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Pairwise Network Decomposition (SBI PO Prelims)
**Problem**: $A$ and $B$ can complete a work in $12$ days; $B$ and $C$ in $15$ days; $C$ and $A$ in $20$ days. In how many days can $A$ alone complete the entire work?

**Solution via LCM Integer Work**:
- Total Work $W = \text{LCM}(12, 15, 20) = \mathbf{60 \text{ units}}$.
- Combined daily rates:
  - $\eta_{AB} = \frac{60}{12} = 5 \text{ units/day}$
  - $\eta_{BC} = \frac{60}{15} = 4 \text{ units/day}$
  - $\eta_{CA} = \frac{60}{20} = 3 \text{ units/day}$

Summing:
$$2(\eta_A + \eta_B + \eta_C) = 5 + 4 + 3 = 12 \implies \eta_{ABC} = 6 \text{ units/day}$$

Isolating worker $A$:
$$\eta_A = \eta_{ABC} - \eta_{BC} = 6 - 4 = \mathbf{2 \text{ units/day}}$$

Time taken by $A$ alone:
$$T_A = \frac{W}{\eta_A} = \frac{60}{2} = \mathbf{30 \text{ days}}$$

---

### Exemplar 2: Departure Before Completion via Phantom Extension (RBI Grade B Phase 1)
**Problem**: $A$ can do a piece of work in $14$ days and $B$ in $21$ days. They begin together, but $A$ leaves $3$ days before the work is finished. In how many days was the work completed?

**Solution via Phantom Work Extension**:
- $W = \text{LCM}(14, 21) = \mathbf{42 \text{ units}}$.
- $\eta_A = \frac{42}{14} = 3 \text{ units/day}$; $\eta_B = \frac{42}{21} = 2 \text{ units/day}$.
- If $A$ had not left for the final $3$ days, $A$ would have added:
  $$\Delta W = 3 \times 3 = 9 \text{ units}$$
- Total augmented work: $W_{\text{eff}} = 42 + 9 = \mathbf{51 \text{ units}}$.
- Both workers active throughout: $\eta_{A+B} = 3 + 2 = 5 \text{ units/day}$.
$$T_{\text{total}} = \frac{51}{5} = \mathbf{10\frac{1}{5} \text{ days} = 10.2 \text{ days}}$$

---

### Exemplar 3: Rotational Alternating Days (CAT / CSAT)
**Problem**: $A, B$, and $C$ can complete a job in $20, 30$, and $60$ days respectively. $A$ works on all days, but is assisted by $B$ and $C$ together on every third day. How many days will the entire work take?

**Execution**:
- $W = \text{LCM}(20, 30, 60) = \mathbf{60 \text{ units}}$.
- $\eta_A = \frac{60}{20} = 3$, $\eta_B = \frac{60}{30} = 2$, $\eta_C = \frac{60}{60} = 1$ units/day.
- Structure of 3-day cycle:
  - Day 1: $A$ alone $= 3$ units
  - Day 2: $A$ alone $= 3$ units
  - Day 3: $(A + B + C) = 3 + 2 + 1 = 6$ units
- Total work per 3-day cycle: $W_{\text{cycle}} = 3 + 3 + 6 = \mathbf{12 \text{ units}}$.
- Number of cycles to complete $60$ units:
  $$\text{Cycles} = \frac{60}{12} = 5 \text{ full cycles}$$
- Total time: $T = 5 \times 3 = \mathbf{15 \text{ days}}$.

---

### Exemplar 4: Universal Chain Rule with Multi-Variable Scaling (UPSC CSAT)
**Problem**: If $36$ men can knit $120$ blankets in $20$ days working $7$ hours a day, how many days will $42$ men take to knit $150$ blankets working $8$ hours a day?

**Execution via Master Chain Rule**:
$$\frac{M_1 \cdot D_1 \cdot H_1}{W_1} = \frac{M_2 \cdot D_2 \cdot H_2}{W_2}$$
$$\frac{36 \times 20 \times 7}{120} = \frac{42 \times D_2 \times 8}{150}$$

Simplifying Left-Hand Side:
$$\frac{36 \times 140}{120} = \frac{36 \times 7}{6} = 42$$

Equating to Right-Hand Side:
$$42 = \frac{42 \times D_2 \times 8}{150} \implies 1 = \frac{8 \cdot D_2}{150} \implies D_2 = \frac{150}{8} = \mathbf{18\frac{3}{4} \text{ days} = 18.75 \text{ days}}$$

---

## 9. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: Alternating Day Cycle Fractional End Trap** | Blindly dividing residual work by cycle sum ($R / W_{\text{cycle}}$) instead of allocating day-by-day to the specific worker on duty. | The final day's work is completed by an **individual worker**, not the cycle average rate! |
| **Trap 2: Phantom Work Sign Inversion** | Subtracting the departed worker's work from total work when worker leaves *before completion*. | Subtract when worker leaves *after starting*; **ADD** phantom work when worker leaves *before completion*. |
| **Trap 3: Work Variable Placement in Chain Rule** | Placing $W$ (blankets, km, ditch volume) in the numerator ($M \cdot D \cdot H \cdot W$). | Work output represents the accumulated product; it must strictly sit in the **denominator**! |
| **Trap 4: Wage Ratio Independent of Time** | Distributing ₹$1,000$ wages in ratio $\eta_A : \eta_B$ when $A$ worked for $5$ days and $B$ worked for $2$ days. | Wages follow total work delivered: $\text{Wage} \propto (\eta_i \times T_i)$. |
| **Trap 5: Three-Worker Time Inversion** | Setting $T_A : T_B : T_C = 2 : 3 : 4 \implies \eta_A : \eta_B : \eta_C = 4 : 3 : 2$. | The inverse ratio of $2 : 3 : 4$ is $\frac{1}{2} : \frac{1}{3} : \frac{1}{4} = \mathbf{6 : 4 : 3}$! |
