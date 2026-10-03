# RAPID REVISION MATRIX: CHAPTER 20

**Topic**: Trains, Platforms, Boats, Streams, Escalators & Races  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Crossing Distances & Stream Velocities

| Physical Movement | Distance Metric ($D$) | Relative Velocity ($v_{\text{rel}}$) | Master Time Equation |
| :--- | :--- | :--- | :--- |
| **Train passes Pole/Man** | $D = L_{\text{train}}$ | $v_{\text{train}}$ | $T = \frac{L_{\text{train}}}{v_{\text{train}}}$ |
| **Train passes Platform/Bridge** | $D = L_{\text{train}} + L_{\text{platform}}$ | $v_{\text{train}}$ | $T = \frac{L_t + L_p}{v_t}$ |
| **Two Trains Cross (Opposite)** | $D = L_1 + L_2$ | $v_1 + v_2$ | $T = \frac{L_1 + L_2}{v_1 + v_2}$ |
| **Two Trains Cross (Same Dir)** | $D = L_1 + L_2$ | $\|v_1 - v_2\|$ | $T = \frac{L_1 + L_2}{\|v_1 - v_2\|}$ |
| **Train passes Seated Passenger** | $D = L_{\text{passing train}}$ | Frame relative speed | Ignores length of passenger's train! |
| **Boat Downstream** | Downward drift | $v_d = u + v$ | $u = \frac{v_d + v_u}{2}$ (Boat in still water) |
| **Boat Upstream** | Opposing resistance | $v_u = u - v$ | $v = \frac{v_d - v_u}{2}$ (Rate of current) |

---

### Matrix B: Circular Tracks & Race Handicaps

| Topology / Scenario | Mathematical Formulation | Operating Precondition |
| :--- | :--- | :--- |
| **Circular: First Meeting Anywhere** | $T_{\text{meet}} = \frac{L}{v_1 \pm v_2}$ | $(-)$ for same direction, $(+)$ for opposite. |
| **Circular: Meeting at Start Point** | $T_{\text{start}} = \text{LCM}\left(\frac{L}{v_1}, \frac{L}{v_2}\right)$ | LCM of individual lap completion times. |
| **Distinct Points on Circular Track** | Same Dir: $\|a - b\|$; Opp Dir: $a + b$ | Ratio $\frac{v_1}{v_2} = \frac{a}{b}$ in **coprime form** ($\gcd(a,b)=1$). |
| **Race: A beats B by $x$ m or $t$ s** | Speed of $B$: $v_B = \frac{x}{t}$ | Winner's duration $T_A = t \left(\frac{L - x}{x}\right)$. |
| **Escalator Step Conservation** | $N = (p \pm e) \times T$ | $(+)$ when walking along; $(-)$ when counter-flow. |

---

## 2. 60-Second Retrieval Skeleton

```text
Train Crossing Rule: Distance is ALWAYS Sum of Lengths (L₁ + L₂), NEVER difference!
➔ Seated Observer: Distance = Length of the PASSING train only
➔ Boat Vectors: u = (v_d + v_u) / 2 ; v = (v_d - v_u) / 2
➔ Upstream Time Multiplier: T_u / T_d = n ➔ u / v = (n + 1) / (n - 1)
➔ Circular Distinct Meeting Points: Reduce v₁/v₂ = a/b (coprime) ➔ Points = |a - b| (same) or a + b (opposite)
➔ Race Speed of Loser: v_loser = (Margin in meters) / (Margin in seconds)
```

---

## 3. Top 5 Instant Killer Traps

1. **Subtracting Train Lengths in Same Direction**: Thinking distance to overtake is $L_1 - L_2$. Distance to clear is **always $L_1 + L_2$**; only the speeds are subtracted ($v_1 - v_2$).
2. **Passenger Train Length Double-Count**: Adding the length of the observer's train when a train passes a man sitting in another train. The observer is a point!
3. **Circular Meeting Points without Co-prime Reduction**: Computing meeting points for speeds $6\text{ m/s}$ and $4\text{ m/s}$ as $6 - 4 = 2$. First reduce $\frac{6}{4} = \frac{3}{2} \implies 3 - 2 = \mathbf{1 \text{ point}}$.
4. **Upstream Inversion Sign**: Writing $v_u = v - u$. If river speed $v > u$, the boat is swept downstream, making upstream navigation physically impossible.
5. **Linear Race Proportion Base**: Assuming "A beats B by 20m in 100m" means B ran 20m. B ran $100 - 20 = \mathbf{80\text{m}}$.
