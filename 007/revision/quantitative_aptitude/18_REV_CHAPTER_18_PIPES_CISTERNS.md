# RAPID REVISION MATRIX: CHAPTER 18

**Topic**: Pipes, Cisterns, Leakage Dynamics & Negative Work Cycles  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Conduit Rates & Leakage Formulations

| Conduit Type | Algebraic Sign | Rate Formula | Net Governing Equation |
| :--- | :--- | :--- | :--- |
| **Inlet Pipe** | **Positive (+)** | $r_{\text{in}} = +\frac{V}{T_{\text{in}}}$ | $r_{\text{net}} = \sum r_{\text{in}} - \sum r_{\text{out}}$ |
| **Outlet / Waste Pipe** | **Negative (-)** | $r_{\text{out}} = -\frac{V}{T_{\text{out}}}$ | Net Filling Time $T = \frac{V}{r_{\text{net}}}$ (if $r_{\text{net}} > 0$). |
| **Bottom Leakage** | Retards filling | $r_{\text{leak}} = \frac{1}{T} - \frac{1}{T + \Delta T}$ | Draining Time $T_{\text{leak}} = \frac{T(T + \Delta T)}{\Delta T}$ |
| **Elevated Leak (at height $h$)** | Segmented action | Active ONLY for $y > h$ | Base volume ($0 \to h$) filled at full inlet speed! |

---

### Matrix B: Alternating Flow vs Physical Capacity

| Scenario | Operational Algorithm | Key Mathematical Invariant |
| :--- | :--- | :--- |
| **Alternating Inlet/Outlet (Monkey Trap)** | (1) Reserve final surge: $V_{\text{target}} = V - a$<br/>(2) Find cycles $q = \lceil \frac{V - a}{a - b} \rceil$<br/>(3) Add remaining time: $\frac{V - q(a - b)}{a}$ | **Never let outlet operate once tank touches capacity $V$!** |
| **Volume Recovery from Discharge** | Capacity $= T_{\text{drain}} \times (\text{Litres / min}) \times 60$ | **Unit Synchronization**: Convert draining hours into minutes! |

---

## 2. 60-Second Retrieval Skeleton

```text
Net Flow Rate: r_net = ∑ r_inlet - ∑ r_outlet
➔ LCM Capacity Engine: Set V = LCM(T₁, T₂, ...) units
➔ Bottom Leak Master Formula: T_leak = (T · (T + ΔT)) / ΔT
➔ The Alternating Monkey-Cistern Rule:
    - 2-Minute Progress = a - b
    - Threshold to Full = V - a
    - Cycles q = ⌈(V - a) / (a - b)⌉
    - Terminal Time = 2q + (V - q(a - b)) / a
➔ Tank Capacity in Litres: (Emptying Time in Minutes) × (Flow Rate in L/min)
```

---

## 3. Top 5 Instant Killer Traps

1. **The Cistern Monkey Overshoot**: Calculating total alternating time as $\frac{V}{a - b} \times 2$. The tank reaches $100\%$ full during the inlet's positive phase; the subsequent drain phase never happens!
2. **Hour-to-Minute Conversion Omission**: Multiplying a discharge rate of $8\text{ L/min}$ directly by emptying time in hours ($15\text{ h} \times 8 = 120\text{ L}$). True capacity is $15 \times 60 \times 8 = \mathbf{7,200\text{ L}}$.
3. **Elevated Outlet Whole-Tank Assumption**: Factoring an outlet pipe situated at mid-height into the filling rate of the lower half of the tank. Elevated conduits have zero physical effect below their mounting level.
4. **Leak Rate Difference Inversion**: Dividing product by sum instead of difference when computing leak time ($T_{\text{leak}} = \frac{T_1 T_2}{T_2 - T_1}$).
5. **Negative Work Net Inversion**: Expecting an empty tank to fill when outlet rate exceeds inlet rate ($r_{\text{out}} > r_{\text{in}}$). The tank level remains zero.
