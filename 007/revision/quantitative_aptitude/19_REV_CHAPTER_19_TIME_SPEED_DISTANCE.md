# RAPID REVISION MATRIX: CHAPTER 19

**Topic**: Time, Speed, Distance, Relative Velocity & Average Speed  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Dimensional Conversions & Invariance Triangle

| Metric Transition | Conversion Factor | Operating Rule |
| :--- | :--- | :--- |
| **$\text{km/hr} \to \text{m/s}$** | $\times \frac{5}{18}$ | $18 \text{ km/h} = 5 \text{ m/s}$; $54 \text{ km/h} = 15 \text{ m/s}$; $72 \text{ km/h} = 20 \text{ m/s}$. |
| **$\text{m/s} \to \text{km/hr}$** | $\times \frac{18}{5}$ | Reverse scale by $3.6$. |
| **Constant Distance ($D$)** | $v_1 \cdot T_1 = v_2 \cdot T_2$ | $\frac{v_1}{v_2} = \frac{T_2}{T_1}$ (Speed and time are inversely proportional). |
| **Constant Time ($T$)** | $\frac{D_1}{D_2} = \frac{v_1}{v_2}$ | Distance traversed is directly proportional to speed. |
| **Constant Speed ($v$)** | $\frac{D_1}{D_2} = \frac{T_1}{T_2}$ | Distance traversed is directly proportional to time. |

---

### Matrix B: Average Speed & Specialized Theorems

| Movement Architecture | Governing Formula | Key Operational Constraint |
| :--- | :--- | :--- |
| **Equal Distances ($D_1 = D_2$)** | $v_{\text{avg}} = \frac{2 v_1 v_2}{v_1 + v_2}$ | **Harmonic Mean**; strictly less than arithmetic mean $\frac{v_1+v_2}{2}$! |
| **Equal Times ($T_1 = T_2$)** | $v_{\text{avg}} = \frac{v_1 + v_2}{2}$ | **Arithmetic Mean** of the speeds. |
| **Early / Late Shift Equation** | $D = \frac{v_1 \cdot v_2}{|v_1 - v_2|} \times \Delta T$ | Late + Early $\implies \Delta T = \frac{t_1 + t_2}{60} \text{ hr}$. |
| **Cross-Meeting Theorem** | $\frac{v_A}{v_B} = \sqrt{\frac{T_B}{T_A}}$ | Meeting time $t = \sqrt{T_A \cdot T_B}$. |
| **Relative Speed (Opposite)** | $v_{\text{rel}} = v_1 + v_2$ | Time to intercept $= \frac{\text{Separation}}{v_1 + v_2}$. |
| **Relative Speed (Same Dir)** | $v_{\text{rel}} = |v_1 - v_2|$ | Time to overtake $= \frac{\text{Lead Distance}}{|v_1 - v_2|}$. |

---

## 2. 60-Second Retrieval Skeleton

```text
Kinematic Root: D = v · T  [km/h × 5/18 = m/s]
➔ Constant Distance: v₁/v₂ = T₂/T₁  [Walking at a/b speed ➔ takes b/a time]
➔ Average Speed (Equal D): v_avg = (2 · v₁ · v₂) / (v₁ + v₂)
➔ Early/Late Master Equation: Distance D = (v₁ · v₂ / |v₁ - v₂|) × ΔT_hours
➔ Cross-Meeting Invariant: v_A / v_B = √(T_B / T_A)   [Meeting Time t = √(T_A · T_B)]
➔ Relative Motion: Opposite ➔ v₁ + v₂ ; Same Direction ➔ |v₁ - v₂|
```

---

## 3. Top 5 Instant Killer Traps

1. **Arithmetic Mean Average Speed Fallacy**: Taking $\frac{v_1 + v_2}{2}$ for a round trip. Over equal distances, the average speed is always the **Harmonic Mean** $\frac{2v_1 v_2}{v_1 + v_2}$.
2. **Early/Late Time Net Sign Error**: Subtracting time gaps when one is late and the other early ($10\text{ min late} - 5\text{ min early} \neq 5\text{ min}$). True gap is $10 + 5 = \mathbf{15\text{ minutes}}$.
3. **Minutes-to-Hours Neglect**: Multiplying speed difference in $\text{km/hr}$ directly by time in minutes without dividing by $60$.
4. **Cross-Meeting Square Root Inversion**: Inverting the index: writing $\frac{v_A}{v_B} = \sqrt{\frac{T_A}{T_B}}$. Remember that faster body takes LESS time after crossing: $\frac{v_A}{v_B} = \sqrt{\frac{T_B}{T_A}}$.
5. **Relative Speed Frame Confusion**: Subtracting speeds when two vehicles travel towards each other. Converging bodies close the gap at the **sum** of their speeds ($v_1 + v_2$).
