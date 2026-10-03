# CHAPTER 20: TRAINS, PLATFORMS, BOATS, STREAMS, ESCALATORS & CIRCULAR RACES

**Domain**: Extended Body Kinematics, Moving Frames of Reference & Angular Periodicity  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: Extended Body Dynamics $\to$ Hydrodynamic Vectors $\to$ Escalator Kinematics $\to$ Linear Race Metrics $\to$ Circular Track Topology $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES KINEMATICS: EXTENDED BODIES & TRAIN TRANSLATION

Unlike point-particle mechanics, railway kinetics requires spatial accounting of the physical length of the moving vehicle ($L_{\text{train}}$) and the obstacle being crossed ($L_{\text{object}}$).

```
                      Direction of Motion ──►
      ┌───────────────────────┐
      │  Train (Length L_t)   │ ════════════════════════════════►
      └───────────────────────┘
                                     ┌─────────────────────────┐
                                     │  Platform (Length L_p)  │
                                     └─────────────────────────┘
      ◄────────────── Total Crossing Distance D = L_t + L_p ─────────────►
```

### The Crossing Distance Invariants
The total distance traversed from the instant the locomotive's front buffer strikes the obstacle to the instant the caboose's rear buffer clears the obstacle is:
$$\mathbf{D = L_{\text{train}} + L_{\text{object}}}$$

1. **Crossing a Point Object ($L_{\text{object}} \approx 0$)**:
   Telegraph pole, signal light, mile marker, standing pedestrian:
   $$D = L_{\text{train}}$$
   $$\mathbf{T = \frac{L_{\text{train}}}{v_{\text{train}}}}$$
2. **Crossing a Stationary Extended Structure**:
   Platform, bridge, tunnel, stationary rake:
   $$D = L_{\text{train}} + L_{\text{structure}}$$
   $$\mathbf{T = \frac{L_{\text{train}} + L_{\text{structure}}}{v_{\text{train}}}}$$
3. **Two Moving Trains Crossing Each Other**:
   Whether running in opposite directions or in the same direction, the physical distance required to clear each other is **strictly the sum of both lengths**:
   $$\mathbf{D = L_1 + L_2}$$
   - **Opposite Directions**: $T = \frac{L_1 + L_2}{v_1 + v_2}$
   - **Same Direction (Overtake)**: $T = \frac{L_1 + L_2}{|v_1 - v_2|}$
4. **Crossing an Observer Seated in Another Train**:
   The observer is a dimensionless point entity moving at the velocity of their carrier train:
   $$\mathbf{D = L_{\text{passing train}}}$$
   *(The length of the train housing the observer is completely irrelevant!)*

---

## 2. HYDRODYNAMIC VECTOR FRAMES: BOATS AND STREAMS

Motion on fluid surfaces operates under a Galilean velocity transformation where the medium itself possesses a drift velocity:
- Let $u$ = Speed of boat/swimmer in **still water**.
- Let $v$ = Speed of the **stream / current** ($u > v$ for upstream viability).

$$\text{Downstream Velocity (Concurrence)}: \mathbf{v_d = u + v}$$
$$\text{Upstream Velocity (Opposition)}: \mathbf{v_u = u - v}$$

### Inverse Structural Resolution
Given empirical values of downstream and upstream speeds:
$$\mathbf{u = \frac{v_d + v_u}{2} \quad (\text{Speed in Still Water})}$$
$$\mathbf{v = \frac{v_d - v_u}{2} \quad (\text{Rate of Stream / Current})}$$

### The Upstream/Downstream Time Multiplier
If the journey upstream over distance $D$ requires $n$ times the duration taken downstream:
$$\frac{T_u}{T_d} = n \implies \frac{\frac{D}{u - v}}{\frac{D}{u + v}} = n \implies \frac{u + v}{u - v} = n$$

Applying Componendo and Dividendo:
$$\mathbf{\frac{u}{v} = \frac{n + 1}{n - 1}}$$

*Example*: If rowing upstream takes $3$ times as long as downstream ($n = 3$):
$$\frac{u}{v} = \frac{3 + 1}{3 - 1} = \frac{4}{2} = 2 \implies u = 2v$$

---

## 3. ESCALATOR KINEMATICS (MOVING STAIRWAYS)

Moving escalators represent the discrete mechanical analog of stream currents:
- Let $N$ = Total visible stationary steps from bottom to top.
- Let $p$ = Speed of person walking on escalator ($\text{steps/sec}$).
- Let $e$ = Speed of mechanical escalator drive ($\text{steps/sec}$).

$$\text{Total Steps } N = \text{Steps Walked by Person} + \text{Steps Contributed by Escalator}$$

1. **Moving in the Direction of Escalator Motion**:
   $$\mathbf{N = (p + e) \cdot T_1 = (\text{Person's Steps}) + e \cdot T_1}$$
2. **Moving Against Escalator Motion**:
   $$\mathbf{N = (p - e) \cdot T_2 = (\text{Person's Steps}) - e \cdot T_2}$$

Equating total steps across two different walking rates allows immediate resolution of total step capacity $N$.

---

## 4. LINEAR RACES & HANDICAP METRICS

In competitive sprinting and sports handicaps over a course of length $L$:

### Terminology & Conversions
1. **"A gives B a start of $x$ meters"**:
   $A$ starts at origin $0$; $B$ starts at distance $x$.  
   To finish, $A$ covers $L$ meters, while $B$ covers $(L - x)$ meters in the same elapsed time:
   $$\frac{v_A}{v_B} = \frac{L}{L - x}$$
2. **"A gives B a start of $t$ seconds"**:
   $B$ departs $t$ seconds before $A$. $A$ takes $(T_B - t)$ seconds to complete the race.
3. **"A beats B by $x$ meters or $t$ seconds"**:
   At the instant $A$ crosses the terminal line $L$, $B$ is lagging by $x$ meters. $B$ requires an additional $t$ seconds to reach the line:
   $$\mathbf{v_B = \frac{x}{t}}$$
   Total race duration of winner $A$:
   $$T_A = T_B - t = \frac{L}{v_B} - t = \frac{L \cdot t}{x} - t = \mathbf{t \left(\frac{L - x}{x}\right)}$$

---

## 5. CIRCULAR TRACK TOPOLOGY & ANGULAR RECURRENCE

When two runners circulate around a closed loop of circumference $L$ with constant linear velocities $v_1$ and $v_2$ ($v_1 > v_2$):

```
                       12 o'clock
                           │
                 . ─── ─── │ ─── ─── .
             .             │             .
           .               │               .
          .                │                .
         .                 │                 .
         . ────────────────┼──────────────── .
         .                 │                 .
          .                │                .
           .               │               .
             .             │             .
                 . ─── ─── │ ─── ─── .
                           │
```

### A. Time to First Meeting Anywhere on the Track
- **Same Direction**: Relative velocity is $v_1 - v_2$. First interception occurs when the faster runner laps the slower runner by $1$ full perimeter:
  $$\mathbf{T_{\text{first}} = \frac{L}{v_1 - v_2}}$$
- **Opposite Directions**: Relative velocity is $v_1 + v_2$. First interception occurs when their combined paths equal $1$ full perimeter:
  $$\mathbf{T_{\text{first}} = \frac{L}{v_1 + v_2}}$$

### B. Time to First Meeting at the Exact Starting Point
Both runners must independently complete an integer number of full laps.
- Lap time of Runner 1: $t_1 = \frac{L}{v_1}$
- Lap time of Runner 2: $t_2 = \frac{L}{v_2}$

$$\mathbf{T_{\text{start}} = \text{LCM}\left(t_1, t_2\right) = \text{LCM}\left(\frac{L}{v_1}, \frac{L}{v_2}\right)}$$

### C. Number of Distinct Meeting Points on the Track
Reduce the ratio of speeds to lowest co-prime integers:
$$\frac{v_1}{v_2} = \frac{a}{b} \quad (\text{where } \gcd(a, b) = 1)$$

- **Same Direction**: Distinct meeting points $= \mathbf{|a - b|}$
- **Opposite Directions**: Distinct meeting points $= \mathbf{a + b}$

*(These points divide the circular track into $|a - b|$ or $a + b$ equal spatial arcs).*

---

## 6. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Train Crossing Moving Observer (SBI PO Prelims)
**Problem**: A train $150 \text{ m}$ long running at $68 \text{ km/hr}$ crosses a man running at $8 \text{ km/hr}$ in the same direction. How much time does the train take to pass the man?

**Execution via Relative Speed**:
- Both moving in same direction: $v_{\text{rel}} = 68 - 8 = \mathbf{60 \text{ km/hr}}$.
- Convert to $\text{m/s}$: $v_{\text{rel}} = 60 \times \frac{5}{18} = \frac{50}{3} \text{ m/s}$.
- Distance to cross man: $D = L_{\text{train}} = 150 \text{ m}$.

$$T = \frac{D}{v_{\text{rel}}} = \frac{150}{\frac{50}{3}} = 150 \times \frac{3}{50} = \mathbf{9 \text{ seconds}}$$

---

### Exemplar 2: Bridge Crossing Speed & Length Extraction (RBI Grade B Phase 1)
**Problem**: A man standing on a railway platform notices that a train passes him in $8$ seconds, but takes $20$ seconds to pass completely through a railway bridge $180 \text{ m}$ long. Determine the length of the train and its speed in $\text{km/hr}$.

**Solution via Incremental Distance**:
- Time to cross man (length $L$): $8 \text{ sec}$.
- Time to cross bridge (length $L + 180$): $20 \text{ sec}$.
- Extra time taken $= 20 - 8 = 12 \text{ seconds}$.
- Extra distance traversed $= 180 \text{ meters}$.

$$\text{Speed } v = \frac{\Delta D}{\Delta T} = \frac{180 \text{ m}}{12 \text{ s}} = \mathbf{15 \text{ m/s}}$$
Convert speed to $\text{km/hr}$: $v = 15 \times \frac{18}{5} = \mathbf{54 \text{ km/hr}}$.  
Train length $L = v \times T_{\text{man}} = 15 \text{ m/s} \times 8 \text{ s} = \mathbf{120 \text{ meters}}$.

---

### Exemplar 3: Stream Drift Round Trip (UPSC CSAT)
**Problem**: A man can row at $9 \text{ km/hr}$ in still water. He finds that it takes him twice as long to row up as to row down the river over the same distance. Find the speed of the river current.

**Execution via Upstream Multiplier**:
Here $u = 9 \text{ km/hr}$, time ratio $n = 2$.
$$\frac{u}{v} = \frac{n + 1}{n - 1} = \frac{2 + 1}{2 - 1} = \frac{3}{1} = 3$$
$$\frac{9}{v} = 3 \implies v = \frac{9}{3} = \mathbf{3 \text{ km/hr}}$$

---

### Exemplar 4: Dual Beating in Linear Race (CAT / SBI PO Mains)
**Problem**: In a $1000\text{ m}$ race, $A$ beats $B$ by $100\text{ m}$, and in a $400\text{ m}$ race, $B$ beats $C$ by $40\text{ m}$. By how many meters will $A$ beat $C$ in a $500\text{ m}$ race?

**Execution via Ratio of Distances**:
- Race 1: When $A$ runs $1000\text{ m}$, $B$ runs $900\text{ m} \implies \frac{D_A}{D_B} = \frac{10}{9}$.
- Race 2: When $B$ runs $400\text{ m}$, $C$ runs $360\text{ m} \implies \frac{D_B}{D_C} = \frac{400}{360} = \frac{10}{9}$.
- Compound ratio:
  $$\frac{D_A}{D_C} = \frac{D_A}{D_B} \times \frac{D_B}{D_C} = \frac{10}{9} \times \frac{10}{9} = \frac{100}{81}$$
- Over a $500\text{ m}$ course:
  When $A$ runs $500\text{ m}$ ($100 \times 5$):
  $C$ runs $81 \times 5 = \mathbf{405\text{ meters}}$.
- Distance beaten:
  $$\text{Margin} = 500 - 405 = \mathbf{95 \text{ meters}}$$

---

## 7. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: Passenger Train Length Trap** | Adding lengths of both trains when crossing a passenger seated inside one train. | The passenger is a dimensionless point; crossing distance is **only the length of the passing train**. |
| **Trap 2: Upstream Current Subtraction Inversion** | Writing $v_u = v - u$ (Stream speed minus boat speed). | Boat must exceed stream speed ($u > v$) for upward progress: $\mathbf{v_u = u - v}$. |
| **Trap 3: Linear Race Start Ratio Error** | Stating "A gives B a 10m start in 100m" means $v_A/v_B = 100/10$. | $B$ runs $100 - 10 = 90\text{m}$ while $A$ runs $100\text{m} \implies \frac{v_A}{v_B} = \frac{100}{90}$. |
| **Trap 4: Circular Track Meeting Points Reduction** | Setting distinct points for speeds $12\text{ km/h}$ and $8\text{ km/h}$ as $12 - 8 = 4$. | Speeds must be reduced to **coprime integers**: $\frac{12}{8} = \frac{3}{2} \implies 3 - 2 = \mathbf{1 \text{ point}}$! |
| **Trap 5: Distance in Same-Direction Train Passing** | Subtracting train lengths ($L_1 - L_2$) because they move in the same direction. | Distance to clear is **ALWAYS the sum of lengths ($L_1 + L_2$)**, regardless of relative direction! |
