# CHAPTER 18: PIPES, CISTERNS, LEAKAGE DYNAMICS & NEGATIVE WORK CYCLES

**Domain**: Hydrostatic Flow Rates, Negative Work Vectoring & Asymmetric Cyclical Boundaries  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: Vector Ingress/Egress $\to$ The Bottom-Leak Formula $\to$ Elevation-Segmented Tanks $\to$ The Alternating Monkey-Cistern Paradox $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: POSITIVE AND NEGATIVE WORK VECTORS

Problems in pipes and cisterns are structurally isomorphic to Time and Work, with one profound physical divergence: **the presence of negative work vectors (outlets, waste pipes, and structural leaks)**.

### Mathematical Formulation
Let the volumetric capacity of a reservoir be $V$.
- An **Inlet Pipe** delivers fluid into the cistern, performing positive work:
  $$r_{\text{in}} = +\frac{dV}{dt} > 0$$
- An **Outlet Pipe (Waste / Leak)** evacuates fluid from the cistern, performing negative work:
  $$r_{\text{out}} = -\frac{dV}{dt} < 0$$

The instantaneous net accumulation rate is the signed algebraic sum of all active conduits:
$$\mathbf{\frac{dV_{\text{net}}}{dt} = \sum_{i=1}^m r_{\text{inlet}, i} - \sum_{j=1}^k r_{\text{outlet}, j}}$$

If $\sum r_{\text{in}} > \sum r_{\text{out}}$, the cistern fills in time $T = \frac{V}{\sum r_{\text{in}} - \sum r_{\text{out}}}$.  
If $\sum r_{\text{in}} < \sum r_{\text{out}}$, a full cistern empties in time $T = \frac{V}{\sum r_{\text{out}} - \sum r_{\text{in}}}$.

```
                 Inlet Pipe A (+r_A)       Inlet Pipe B (+r_B)
                         │                         │
                         ▼                         ▼
                  ┌───────────────────────────────────────┐
                  │ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ │
                  │ ~ ~ ~ ~ Total Capacity V ~ ~ ~ ~ ~ ~ ~│
                  │ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ │
                  └───────────────────┬───────────────────┘
                                      │
                                      ▼
                             Outlet Pipe C (-r_C)
                             (or Structural Leak)
```

---

## 2. THE BOTTOM LEAKAGE DERIVATION

A classic examination model tests the retarding effect of an unknown bottom fissure:
- An inlet pump fills a cistern in $T$ hours when operating alone.
- Due to a structural leak at the bottom, the cistern requires $(T + \Delta T)$ hours to fill.

### Derivation of Emptying Time ($T_{\text{leak}}$)
Let the tank capacity be normalized to $1$.
- Inlet filling rate: $r_{\text{in}} = \frac{1}{T}$
- Net filling rate with leak: $r_{\text{net}} = \frac{1}{T + \Delta T}$

Since $r_{\text{net}} = r_{\text{in}} - r_{\text{leak}}$:
$$r_{\text{leak}} = r_{\text{in}} - r_{\text{net}} = \frac{1}{T} - \frac{1}{T + \Delta T} = \frac{(T + \Delta T) - T}{T(T + \Delta T)} = \mathbf{\frac{\Delta T}{T(T + \Delta T)}}$$

The time $T_{\text{leak}}$ required for the leak alone to drain a completely full tank is the reciprocal:
$$\mathbf{T_{\text{leak}} = \frac{T(T + \Delta T)}{\Delta T}}$$

*Example*: A pump fills a tank in $3$ hours. Due to a leak, it takes $3\frac{1}{2}$ hours ($3.5\text{ h}$).
$$T_{\text{leak}} = \frac{3 \times 3.5}{3.5 - 3} = \frac{10.5}{0.5} = \mathbf{21 \text{ hours}}$$

---

## 3. ELEVATION-SEGMENTED & MULTI-TIER TANKS

In standard problems, leaks are assumed to sit at the tank bottom ($h = 0$). In advanced CAT and Banking Mains problems, leaks or outlets are located at specific elevations along the tank wall.

> **The Elevation Invariance Principle**: An outlet positioned at height $h$ above the floor can only drain fluid located **above height $h$**. It exerts **zero effect** on fluid stored between the floor and height $h$.

### Analytical Framework
Let a cylindrical tank of total height $H$ and capacity $V$ have an outlet located at height $\frac{H}{3}$:
1. **Phase 1 ($0 \to \frac{H}{3}$)**: Volume to fill is $\frac{V}{3}$. Only inlet pipes are active. The outlet is submerged/inactive:
   $$T_1 = \frac{V/3}{\sum r_{\text{in}}}$$
2. **Phase 2 ($\frac{H}{3} \to H$)**: Volume to fill is $\frac{2V}{3}$. Both inlet pipes and the elevated outlet are active:
   $$T_2 = \frac{2V/3}{\sum r_{\text{in}} - r_{\text{outlet}}}$$
3. **Total Filling Time**:
   $$T_{\text{total}} = T_1 + T_2$$

---

## 4. THE ASYMMETRIC ALTERNATING CYCLE PARADOX (THE CISTERN MONKEY TRAP)

Consider an empty tank of capacity $V$.
- Pipe $A$ (Inlet) is opened for 1 minute: fills $+a$ units.
- Pipe $B$ (Outlet) is opened for 1 minute: empties $-b$ units ($a > b$).
- They operate alternately minute by minute.

### The Fatal Flaw of Naive Arithmetic
A student naively calculates:
- Net work in 2 minutes $= a - b$ units.
- Total time $= \frac{V}{a - b} \times 2$ minutes.

> **THE CISTERN MONKEY THEOREM**: The tank is declared FULL the very instant the liquid level touches capacity $V$. The outlet pipe $B$ **never opens once the tank is filled**.

### The Sovereign Resolution Algorithm
1. **Reserve the Final Surge**:
   Subtract the single-minute inlet capacity $a$ from total capacity:
   $$V_{\text{threshold}} = V - a$$
2. **Calculate Number of Full Alternating Cycles ($q$)**:
   Each complete cycle of $2$ minutes delivers $(a - b)$ units.
   $$q = \left\lceil \frac{V - a}{a - b} \right\rceil$$
3. **Account for State at End of $q$ Cycles**:
   - Time elapsed: $T_c = 2q$ minutes.
   - Volume accumulated: $V_c = q(a - b)$ units.
4. **Final Single-Step Filling**:
   Residual volume $R = V - V_c \le a$.
   Since $R \le a$, Pipe $A$ finishes filling the tank on its next turn in:
   $$\Delta t = \frac{R}{a} = \frac{V - q(a - b)}{a} \text{ minutes}$$
5. **Exact Terminal Time**:
   $$\mathbf{T_{\text{total}} = 2q + \frac{V - q(a - b)}{a} \text{ minutes}}$$

---

## 5. VOLUMETRIC CAPACITY RECOVERY (COUPLING TIME & PHYSICAL RATES)

When problems state that an emptying pipe discharges a specific physical flow rate (e.g., "$c$ litres per minute"):

1. Express all conduits in terms of fractional or LCM unit rates per minute.
2. Isolate the fractional rate of the waste pipe:
   $$r_{\text{waste}} = r_{\text{inlet}} - r_{\text{net}} \quad (\text{units/min})$$
3. Find the total time $T_{\text{empty}}$ required for the waste pipe alone to empty the tank:
   $$T_{\text{empty}} = \frac{V_{\text{units}}}{r_{\text{waste}}} \text{ minutes}$$
4. Multiply total emptying time by physical discharge speed:
   $$\mathbf{\text{True Reservoir Capacity (Litres)} = T_{\text{empty}} \times c \text{ litres/min}}$$

---

## 6. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Three-Conduit Ingress/Egress Network (SBI PO Prelims)
**Problem**: A cistern has two filling taps $A$ and $B$ which can fill it in $12$ minutes and $15$ minutes respectively. There is also an emptying waste pipe $C$. When all three pipes are opened simultaneously, the empty cistern is completely filled in $20$ minutes. How long will waste pipe $C$ take alone to empty the full cistern?

**Solution via LCM Total Volume**:
- Let Cistern Capacity $V = \text{LCM}(12, 15, 20) = \mathbf{60 \text{ units}}$.
- Flow rates:
  - $r_A = \frac{60}{12} = +5 \text{ units/min}$
  - $r_B = \frac{60}{15} = +4 \text{ units/min}$
  - $r_{\text{net}} = \frac{60}{20} = +3 \text{ units/min}$

Using $r_{\text{net}} = r_A + r_B - r_C$:
$$3 = 5 + 4 - r_C \implies 3 = 9 - r_C \implies \mathbf{r_C = 6 \text{ units/min}}$$

Time taken by $C$ alone to empty the full $60$ units:
$$T_C = \frac{V}{r_C} = \frac{60}{6} = \mathbf{10 \text{ minutes}}$$

---

### Exemplar 2: Physical Reservoir Volume Extraction (RBI Grade B Phase 1)
**Problem**: A leak in the bottom of a tank can empty it in $8$ hours. An inlet pipe fills water into the tank at the rate of $6$ litres per minute. When the tank is full, the inlet is opened, and due to the leak, the tank is emptied in $12$ hours. Find the capacity of the tank in litres.

**Mathematical Execution**:
- Emptying rate of leak alone: $r_L = -\frac{1}{8} \text{ tank/hr}$
- Net emptying rate with inlet open: $r_{\text{net}} = -\frac{1}{12} \text{ tank/hr}$

Rate of inlet pipe:
$$r_{\text{in}} = r_{\text{net}} - r_L = -\frac{1}{12} - \left(-\frac{1}{8}\right) = \frac{1}{8} - \frac{1}{12} = \frac{3 - 2}{24} = \mathbf{\frac{1}{24} \text{ tank/hr}}$$

- Time required for inlet pipe alone to fill empty tank: $T_{\text{in}} = 24 \text{ hours}$.
- Convert time to minutes: $24 \times 60 = 1,440 \text{ minutes}$.
- Given inlet discharge rate $= 6 \text{ litres/min}$.
$$\text{Capacity} = 1,440 \text{ min} \times 6 \text{ L/min} = \mathbf{8,640 \text{ litres}}$$

---

### Exemplar 3: The Alternating Cycle Cistern Paradox (CAT / CSAT)
**Problem**: Pipe $A$ can fill a tank in $6$ hours, and pipe $B$ can empty it in $8$ hours. If they are opened alternately for $1$ hour each starting with Pipe $A$, in how many hours will the tank be full?

**Solution via Threshold Reserve**:
- Capacity $V = \text{LCM}(6, 8) = \mathbf{24 \text{ units}}$.
- $r_A = +4 \text{ units/hr}$, $r_B = -3 \text{ units/hr}$.
- Net progress in 1 cycle of $2$ hours:
  $$\Delta = 4 - 3 = \mathbf{1 \text{ unit per 2 hours}}$$
- Reserve final fill surge of Pipe $A$:
  $$V_{\text{threshold}} = V - r_A = 24 - 4 = \mathbf{20 \text{ units}}$$
- Cycles needed to reach $20$ units:
  $$q = \frac{20}{1} = 20 \text{ full cycles}$$
- State after $20$ cycles:
  - Time elapsed: $T = 20 \times 2 = \mathbf{40 \text{ hours}}$.
  - Volume filled: $20 \times 1 = \mathbf{20 \text{ units}}$.
- On hour $41$, it is Pipe $A$'s turn:
  Pipe $A$ delivers $+4$ units in $1$ full hour:
  $$\text{Terminal Volume} = 20 + 4 = 24 \text{ units (TANK FULL!)}$$

$$\mathbf{T_{\text{total}} = 40 + 1 = 41 \text{ hours}}$$

*(Note: The naive trap answer is $\frac{24}{1} \times 2 = 48\text{ hours}$, which is completely erroneous by 7 full hours!)*

---

## 7. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: The Alternating Cycle Overshoot** | Dividing total capacity by 2-hour net output ($\frac{24}{1} \times 2 = 48\text{ h}$). | Stop before the final inlet burst ($V - a$). Tank is filled on an **inlet turn** and never reopened for the drain! |
| **Trap 2: Flow Rate Unit Inconsistency** | Multiplying inlet rate of $6\text{ L/min}$ by $24\text{ hours}$ without converting hours to minutes ($6 \times 24 = 144\text{ L}$). | Match dimensions: $24 \text{ hr} \times 60 \text{ min/hr} \times 6 \text{ L/min} = \mathbf{8,640 \text{ L}}$. |
| **Trap 3: Elevated Leak Neglect** | Assuming a leak situated at half-height drains the entire tank. | An elevated leak can only empty fluid **above its elevation level**. The bottom half remains unaffected. |
| **Trap 4: Leak Time Formula Inversion** | Writing leak formula as $\frac{T + \Delta T}{T \cdot \Delta T}$. | Leak rate is difference of rates; draining time is $\mathbf{\frac{T(T + \Delta T)}{\Delta T}}$. |
| **Trap 5: Negative Net Rate Ignored** | Calculating filling time when $\sum r_{\text{out}} > \sum r_{\text{in}}$. | When outlet rate exceeds inlet rate, an empty tank **can never be filled** ($\Delta V < 0$). |
