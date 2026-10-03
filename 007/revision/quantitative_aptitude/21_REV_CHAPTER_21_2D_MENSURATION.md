# RAPID REVISION MATRIX: CHAPTER 21

**Topic**: 2D Mensuration & Planar Geometry: Triangles, Quadrilaterals, Circles & Polygons  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Triangular Invariants & Radii Formulations

| Triangle Archetype | Area Formula ($\Delta$) | Inradius ($r$) | Circumradius ($R$) |
| :--- | :--- | :--- | :--- |
| **Scalene (General)** | $\sqrt{s(s-a)(s-b)(s-c)}$ | $r = \frac{\Delta}{s}$ | $R = \frac{abc}{4\Delta}$ |
| **Equilateral** | $\frac{\sqrt{3}}{4} a^2$ | $r = \frac{a}{2\sqrt{3}}$ | $R = \frac{a}{\sqrt{3}} \implies \mathbf{R : r = 2 : 1}$ |
| **Right-Angled** | $\frac{1}{2} \cdot \text{base} \cdot \text{height}$ | $r = \frac{a + b - c}{2}$ | $R = \frac{c}{2} = \frac{\text{Hypotenuse}}{2}$ |
| **Apollonius' Theorem** | Median $AD$ to side $BC$ | $AB^2 + AC^2 = 2\left(AD^2 + BD^2\right)$ | Centroid divides median in $2 : 1$. |

---

### Matrix B: Quadrilaterals, Pathways & Polygons

| Geometric Feature | Operational Formula | Critical Constant / Rule |
| :--- | :--- | :--- |
| **Rhombus** | $\Delta = \frac{1}{2} d_1 d_2$ | $4a^2 = d_1^2 + d_2^2$ (Diagonals bisect at $90^\circ$). |
| **Trapezium** | $\Delta = \frac{1}{2} (a + b) h$ | $a, b$ parallel sides; $h$ perpendicular distance. |
| **Outside Path** | $\text{Area} = 2w(l + b + 2w)$ | $w$ = pathway width. |
| **Inside Path** | $\text{Area} = 2w(l + b - 2w)$ | $w$ = pathway width. |
| **Central Crossroads** | $\text{Area} = w(l + b - w)$ | Subtracts central square overlap $w^2$. |
| **Regular $n$-gon Diagonals** | $\frac{n(n - 3)}{2}$ | Exterior angle $= \frac{360^\circ}{n}$. |
| **Semicircle Perimeter** | $\pi r + 2r = \frac{36}{7} r$ | Includes straight boundary diameter $2r$! |

---

## 2. 60-Second Retrieval Skeleton

```text
Heron's Formula: Δ = √[s(s - a)(s - b)(s - c)]  [s = (a + b + c)/2]
➔ Inradius & Circumradius: r = Δ / s ; R = abc / (4Δ)
➔ Equilateral Invariants: Δ = (√3/4)a² ; h = (√3/2)a ; R : r = 2 : 1
➔ Rhombus Master Identity: Area = (1/2)d₁d₂ ; 4a² = d₁² + d₂²
➔ Pathway Short-codes:
    - Outside: 2w(l + b + 2w)
    - Inside:  2w(l + b - 2w)
    - Crossroads: w(l + b - w)
➔ Semicircle Perimeter: (36/7) · r  [for π ≈ 22/7]
➔ Wheel Rolling Revolutions: Distance = N × (2πr)
```

---

## 3. Top 5 Instant Killer Traps

1. **Semicircular Boundary Omission**: Omitting diameter ($2r$) in semicircle perimeter, using only arc length $\pi r$. Total perimeter is $\mathbf{\pi r + 2r = \frac{36}{7} r}$.
2. **Central Crossroads Double-Count**: Simply adding $(l \cdot w) + (b \cdot w)$. The central square $w^2$ must be subtracted: $\mathbf{w(l + b - w)}$.
3. **Right Triangle Circumradius Confusion**: Calculating circumradius using complex formulas instead of noticing circumcenter is the **midpoint of hypotenuse** ($R = c/2$).
4. **Rhombus Side-Diagonal Relation**: Writing $a^2 = d_1^2 + d_2^2$ instead of $a = \sqrt{(d_1/2)^2 + (d_2/2)^2} \iff \mathbf{4a^2 = d_1^2 + d_2^2}$.
5. **Exterior Angle Divisor Slip**: Dividing $180^\circ$ instead of $360^\circ$ by $n$ when computing regular polygon exterior angles.
