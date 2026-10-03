# CHAPTER 19: TIME, SPEED, DISTANCE, RELATIVE VELOCITY & AVERAGE SPEED

**Domain**: Kinematic Proportionality, Frame Transformation & Interception Dynamics  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: First-Principles Kinematics $\to$ The Invariance Triangle $\to$ Average Speed Formulations $\to$ Early/Late Shift Engine $\to$ Cross-Meeting Theorem $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES KINEMATICS & DIMENSIONAL SYNCHRONIZATION

The physics of rectilinear motion is governed by the conservation of spatial displacement over elapsed time:

$$\text{Speed } (v) = \frac{d(\text{Distance})}{dt} = \frac{D}{T}$$

### Dimensional Conversion Axiom
Speed values are predominantly expressed in kilometers per hour ($\text{km/hr}$) or meters per second ($\text{m/s}$):

$$1 \text{ km/hr} = \frac{1000 \text{ meters}}{3600 \text{ seconds}} = \mathbf{\frac{5}{18} \text{ m/s}}$$
$$1 \text{ m/s} = \frac{\frac{1}{1000} \text{ km}}{\frac{1}{3600} \text{ hr}} = \mathbf{\frac{18}{5} \text{ km/hr} = 3.6 \text{ km/hr}}$$

| Speed in $\mathbf{km/hr}$ | Conversion Factor | Speed in $\mathbf{m/s}$ | Examination Utility |
| :--- | :--- | :--- | :--- |
| **$18 \text{ km/hr}$** | $\times \frac{5}{18}$ | **$5 \text{ m/s}$** | Base baseline |
| **$36 \text{ km/hr}$** | $\times \frac{5}{18}$ | **$10 \text{ m/s}$** | Standard city speed |
| **$54 \text{ km/hr}$** | $\times \frac{5}{18}$ | **$15 \text{ m/s}$** | Standard train problem speed |
| **$72 \text{ km/hr}$** | $\times \frac{5}{18}$ | **$20 \text{ m/s}$** | Express train velocity |
| **$90 \text{ km/hr}$** | $\times \frac{5}{18}$ | **$25 \text{ m/s}$** | High-speed transit |
| **$108 \text{ km/hr}$** | $\times \frac{5}{18}$ | **$30 \text{ m/s}$** | Superfast train / interceptor |

---

## 2. THE INVARIANCE TRIANGLE: THREE CONSERVATION LAWS

```
                     [Distance D = v × T]
                              ▲
                             / \
           Constant Time    /   \   Constant Distance
           D1 / D2 = v1 / v2     v1 / v2 = T2 / T1
                          /       \
                         /─────────\
             [Speed v]                 [Time T]
                     Constant Speed
                     D1 / D2 = T1 / T2
```

### Law 1: Constant Distance ($D = \text{Invariant}$)
When distance traversed remains unchanged:
$$v \propto \frac{1}{T} \implies \mathbf{v_1 \cdot T_1 = v_2 \cdot T_2} \implies \mathbf{\frac{v_1}{v_2} = \frac{T_2}{T_1}}$$

*The Fractional Velocity Shift*:  
If an agent travels at $\frac{a}{b}$ of their usual speed:
$$v_{\text{new}} = \frac{a}{b} v_{\text{usual}} \implies T_{\text{new}} = \frac{b}{a} T_{\text{usual}}$$

The delay or time saved $\Delta T$ is:
$$\mathbf{\Delta T = \left| \frac{b}{a} - 1 \right| T_{\text{usual}} \implies T_{\text{usual}} = \frac{\Delta T}{\left| \frac{b - a}{a} \right|}}$$

### Law 2: Constant Time ($T = \text{Invariant}$)
When multiple agents travel for the identical duration:
$$\mathbf{D \propto v \implies \frac{D_1}{D_2} = \frac{v_1}{v_2}}$$

### Law 3: Constant Speed ($v = \text{Invariant}$)
When travel speed is uniform:
$$\mathbf{D \propto T \implies \frac{D_1}{D_2} = \frac{T_1}{T_2}}$$

---

## 3. AVERAGE SPEED: HARMONIC VS ARITHMETIC MEAN

The average speed of any multi-phase journey is strictly defined by the global quotient:
$$\mathbf{v_{\text{avg}} = \frac{\text{Total Distance Traversed}}{\text{Total Time Elapsed}} = \frac{\sum D_i}{\sum T_i}}$$

### Theorem 1: Equal Distances Traversed (The Harmonic Mean)
When an agent covers two identical distances $D$ at speeds $v_1$ and $v_2$:
$$v_{\text{avg}} = \frac{D + D}{\frac{D}{v_1} + \frac{D}{v_2}} = \frac{2D}{D\left(\frac{v_1 + v_2}{v_1 v_2}\right)} = \mathbf{\frac{2 v_1 v_2}{v_1 + v_2}}$$

When an agent covers three equal distances $D$ at speeds $v_1, v_2, v_3$:
$$\mathbf{v_{\text{avg}} = \frac{3 v_1 v_2 v_3}{v_1 v_2 + v_2 v_3 + v_3 v_1}}$$

### Theorem 2: Equal Time Intervals (The Arithmetic Mean)
When an agent travels for identical durations $T$ at speeds $v_1$ and $v_2$:
$$v_{\text{avg}} = \frac{v_1 T + v_2 T}{2T} = \mathbf{\frac{v_1 + v_2}{2}}$$

> **Inequality of Motion**: For any fluctuating journey between the same points, Harmonic Mean $\le$ Geometric Mean $\le$ Arithmetic Mean. Average speed over equal distance is **always strictly less** than the arithmetic mean $\frac{v_1 + v_2}{2}$!

---

## 4. THE EARLY/LATE SPEED-SHIFT EQUATION

A staple problem archetype tests variable travel speeds yielding arrival discrepancies:
- Traveling at speed $v_1$, the traveler arrives $t_1$ minutes late.
- Traveling at speed $v_2$, the traveler arrives $t_2$ minutes early.

### Analytical Derivation
Let the exact distance be $D$, and the scheduled punctual travel time be $T_0$.
$$T_1 = \frac{D}{v_1}, \quad T_2 = \frac{D}{v_2}$$

The difference in travel times is $\Delta T = |T_1 - T_2|$:
$$\Delta T = \left| \frac{D}{v_1} - \frac{D}{v_2} \right| = D \cdot \frac{|v_2 - v_1|}{v_1 \cdot v_2}$$

Solving for distance $D$:
$$\mathbf{D = \frac{v_1 \cdot v_2}{|v_1 - v_2|} \times \Delta T}$$

### Net Time Gap ($\Delta T$) Rules (Watch the Signs!)
- **Case 1 (Late + Early)**: $\Delta T = \frac{t_{\text{late}} + t_{\text{early}}}{60} \text{ hours}$.
- **Case 2 (Late + Late)**: $\Delta T = \frac{|t_{\text{late1}} - t_{\text{late2}}|}{60} \text{ hours}$.
- **Case 3 (Early + Early)**: $\Delta T = \frac{|t_{\text{early1}} - t_{\text{early2}}|}{60} \text{ hours}$.

---

## 5. RELATIVE VELOCITY & INTERCEPTION DYNAMICS

By transforming coordinates into the reference frame of one moving entity, the second entity's velocity is adjusted relative to the first:

### Configuration A: Opposite Direction Motion (Converging or Diverging)
Entities move towards each other (or away from each other):
$$\mathbf{v_{\text{rel}} = v_1 + v_2}$$
$$\mathbf{T_{\text{meeting}} = \frac{\text{Initial Distance Separation}}{v_1 + v_2}}$$

### Configuration B: Same Direction Motion (Chasing / Pursuit)
Faster entity ($v_1$) pursues slower entity ($v_2$ where $v_1 > v_2$):
$$\mathbf{v_{\text{rel}} = v_1 - v_2}$$
$$\mathbf{T_{\text{catch-up}} = \frac{\text{Lead Distance Separation}}{v_1 - v_2}}$$

---

## 6. THE FAMOUS CROSS-MEETING THEOREM

Two bodies $A$ and $B$ start simultaneously from opposite terminal points $P$ and $Q$, moving towards each other. They pass each other at an intermediate meeting point $M$.  
Following their meeting, $A$ takes $T_A$ hours to reach destination $Q$, and $B$ takes $T_B$ hours to reach destination $P$.

```
P ───────────────────────► M ◄──────────────────────── Q
  [Body A at speed v_A]        [Body B at speed v_B]
  
  After meeting at M:
  Body A travels M ──► Q in time T_A
  Body B travels M ──► P in time T_B
```

### First-Principles Proof
Let $t$ be the time elapsed from start until the two bodies meet at $M$.
- Segment $PM$: Traveled by $A$ in time $t$, and by $B$ in time $T_B$:
  $$D_{PM} = v_A \cdot t = v_B \cdot T_B$$
- Segment $MQ$: Traveled by $B$ in time $t$, and by $A$ in time $T_A$:
  $$D_{MQ} = v_B \cdot t = v_A \cdot T_A$$

Multiplying the two spatial identities:
$$(v_A \cdot t)(v_B \cdot t) = (v_B \cdot T_B)(v_A \cdot T_A)$$
$$v_A v_B \cdot t^2 = v_A v_B \cdot T_A T_B$$
$$\mathbf{t = \sqrt{T_A \cdot T_B}}$$

Dividing the two spatial identities:
$$\frac{v_A \cdot t}{v_B \cdot t} = \frac{v_B \cdot T_B}{v_A \cdot T_A} \implies \frac{v_A}{v_B} = \frac{v_B T_B}{v_A T_A} \implies \left(\frac{v_A}{v_B}\right)^2 = \frac{T_B}{T_A}$$

Taking the square root gives the **Sovereign Cross-Meeting Ratio**:
$$\mathbf{\frac{v_A}{v_B} = \sqrt{\frac{T_B}{T_A}}}$$

---

## 7. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Equal Distances Harmonic Mean (SBI PO Prelims)
**Problem**: A motor car covers the journey from station $A$ to station $B$ at a uniform speed of $84 \text{ km/hr}$ and returns back to $A$ along the same path at a uniform speed of $56 \text{ km/hr}$. Calculate the average speed of the car for the complete round trip.

**Solution via Harmonic Mean**:
Since distances $A \to B$ and $B \to A$ are equal:
$$v_{\text{avg}} = \frac{2 v_1 v_2}{v_1 + v_2} = \frac{2 \times 84 \times 56}{84 + 56} = \frac{2 \times 84 \times 56}{140}$$
$$v_{\text{avg}} = \frac{2 \times 84 \times 4}{10} = \frac{672}{10} = \mathbf{67.2 \text{ km/hr}}$$

*(Note: The naive average is $\frac{84 + 56}{2} = 70 \text{ km/hr}$, which is incorrect!)*

---

### Exemplar 2: Fractional Speed Shift (RBI Grade B Phase 1)
**Problem**: Walking at $\frac{5}{6}$ of his usual speed, a man reaches his office $10$ minutes late. Find his usual time to cover the journey.

**Execution via Proportionality**:
- Speed ratio: $\frac{v_{\text{new}}}{v_{\text{usual}}} = \frac{5}{6}$.
- Since distance is constant, time ratio: $\frac{T_{\text{new}}}{T_{\text{usual}}} = \frac{6}{5}$.
- Ratio increment: $6 - 5 = 1 \text{ unit of delay}$.
- Given delay: $1 \text{ unit} = 10 \text{ minutes}$.
$$\text{Usual Time } T_{\text{usual}} = 5 \text{ units} = 5 \times 10 = \mathbf{50 \text{ minutes}}$$

---

### Exemplar 3: Early/Late Speed Formula (CAT / CSAT)
**Problem**: A student walks from his house to school at $2.5 \text{ km/hr}$ and reaches $6$ minutes late. Next day he walks at $3.5 \text{ km/hr}$ and reaches $6$ minutes early. How far is the school from his house?

**Execution via Master Shift Formula**:
- $v_1 = 2.5 \text{ km/hr} = \frac{5}{2}$, $v_2 = 3.5 \text{ km/hr} = \frac{7}{2}$.
- Speed difference: $|v_2 - v_1| = 3.5 - 2.5 = 1 \text{ km/hr}$.
- Net time discrepancy: Late by 6 min + Early by 6 min $\implies \Delta T = 6 + 6 = 12 \text{ minutes} = \frac{12}{60} = \frac{1}{5} \text{ hr}$.

$$D = \frac{v_1 \cdot v_2}{|v_1 - v_2|} \times \Delta T = \frac{2.5 \times 3.5}{1} \times \frac{1}{5} = \frac{8.75}{5} = \mathbf{1.75 \text{ km} = 1\frac{3}{4} \text{ km}}$$

---

### Exemplar 4: Cross-Meeting Theorem (Regulatory Bodies / CAT)
**Problem**: Two trains start at the same moment from Delhi and Mumbai and proceed towards each other at uniform speeds. After meeting along the tracks, they take $9$ hours and $16$ hours respectively to reach Mumbai and Delhi. If the Delhi train is traveling at $64 \text{ km/hr}$, find the speed of the Mumbai train.

**Execution via Cross-Meeting Ratio**:
Let Delhi train be $A$ and Mumbai train be $B$.
- $T_A = 9 \text{ hours}$, $T_B = 16 \text{ hours}$, $v_A = 64 \text{ km/hr}$.

$$\frac{v_A}{v_B} = \sqrt{\frac{T_B}{T_A}} = \sqrt{\frac{16}{9}} = \frac{4}{3}$$
$$\frac{64}{v_B} = \frac{4}{3} \implies 4 \cdot v_B = 64 \times 3 \implies v_B = 16 \times 3 = \mathbf{48 \text{ km/hr}}$$
The speed of the Mumbai train is **$48 \text{ km/hr}$**.

---

## 8. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: Arithmetic Mean Average Speed Trap** | Calculating average speed for round trip as $\frac{v_1 + v_2}{2}$. | Over equal distances, average speed is the **Harmonic Mean**: $\frac{2 v_1 v_2}{v_1 + v_2}$. |
| **Trap 2: Early/Late Net Time Sign Error** | Subtracting minutes when one scenario is late and the other early ($6 - 6 = 0$). | Late and early lie on opposite sides of punctuality: $\mathbf{\Delta T = t_{\text{late}} + t_{\text{early}}}$. |
| **Trap 3: Unit Inconsistency ($km/hr$ vs minutes)** | Multiplying speed difference in $\text{km/hr}$ directly by time in minutes without dividing by $60$. | Time difference must be converted to hours: $\Delta T = \frac{\text{minutes}}{60}$. |
| **Trap 4: Cross-Meeting Inversion** | Setting $\frac{v_A}{v_B} = \sqrt{\frac{T_A}{T_B}}$. | Speed and subsequent time are inversely related: $\mathbf{\frac{v_A}{v_B} = \sqrt{\frac{T_B}{T_A}}}$. |
| **Trap 5: Time Inversion with 3 Speeds** | Setting time ratio for speeds $2:3:4$ as $4:3:2$. | Inverse ratio of three terms is $\frac{1}{2} : \frac{1}{3} : \frac{1}{4} = \mathbf{6 : 4 : 3}$. |
