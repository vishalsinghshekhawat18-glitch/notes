# RAPID REVISION MATRIX: CHAPTER 22

**Topic**: 3D Mensuration: Solids, Frustums, Cross-Sections & Volume Conservation  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Canonical Solids & Surface Areas

| Solid Archetype | Volume ($V$) | Curved / Lateral Area (CSA) | Total Surface Area (TSA) | Space Diagonal ($D$) |
| :--- | :--- | :--- | :--- | :--- |
| **Cuboid** | $l \cdot b \cdot h$ | $2(l + b)h$ (4 walls) | $2(lb + bh + hl)$ | $\sqrt{l^2 + b^2 + h^2}$ |
| **Cube** | $a^3$ | $4a^2$ | $6a^2$ | $a\sqrt{3}$ |
| **Cylinder** | $\pi r^2 h$ | $2\pi r h$ | $2\pi r (r + h)$ | — |
| **Cone** | $\frac{1}{3}\pi r^2 h$ | $\pi r l$ ($l = \sqrt{r^2 + h^2}$) | $\pi r (r + l)$ | — |
| **Sphere** | $\frac{4}{3}\pi r^3$ | $4\pi r^2$ | $4\pi r^2$ | Diameter $2r$ |
| **Solid Hemisphere** | $\frac{2}{3}\pi r^3$ | $2\pi r^2$ | $\mathbf{3\pi r^2}$ | Flat face adds $\pi r^2$! |

---

### Matrix B: Frustum Geometry & Conservation Mechanics

| Concept | Governing Formula | Key Operational Rule |
| :--- | :--- | :--- |
| **Frustum Slant Height ($l$)** | $l = \sqrt{h^2 + (R - r)^2}$ | $R, r$ = bottom and top radii; $h$ = vertical height. |
| **Frustum Volume** | $\frac{1}{3}\pi h (R^2 + r^2 + Rr)$ | Product term is $Rr$, NOT $2Rr$! |
| **Frustum CSA** | $\pi (R + r) l$ | Lateral surface excluding bases. |
| **Melting / Recasting** | $N = \frac{V_{\text{large}}}{v_{\text{small}}}$ | Total volume is strictly invariant. |
| **Hydrostatic Immersion** | $V_{\text{solid}} = \text{Base Area} \times \Delta h$ | $\Delta h$ = rise in water height. |
| **Unit Synchronizer** | $1 \text{ litre} = 1,000 \text{ cm}^3 = 10^{-3} \text{ m}^3$ | $1 \text{ m}^3 = 1,000 \text{ litres}$. |

---

## 2. 60-Second Retrieval Skeleton

```text
Prism vs Pyramid Rule:
    - Prism:   Volume = Base Area × Height  ; LSA = Perimeter × Height
    - Pyramid: Volume = (1/3)Base Area × Height ; LSA = (1/2)Perimeter × Slant_l
➔ Space Diagonal: Longest Rod in Room = √(l² + b² + h²)  [Cube: a√3]
➔ Solid Hemisphere TSA: 3πr²  [Dome 2πr² + Circular Base πr²]
➔ Frustum Volume: (1/3)πh · (R² + r² + Rr)  [Slant l = √[h² + (R - r)²]]
➔ Melting Invariant: Number of Units N = Volume_Original / Volume_Unit
➔ Liquid Displacement: Volume_Object = Tank_Base_Area × Rise_in_Height(Δh)
```

---

## 3. Top 5 Instant Killer Traps

1. **Solid Hemisphere TSA Omission**: Writing $2\pi r^2$ instead of $\mathbf{3\pi r^2}$. A solid hemisphere includes the flat circular base.
2. **Cube Space Diagonal vs Face Diagonal**: Using $a\sqrt{2}$ for the longest rod in a cube. $a\sqrt{2}$ is only a 2D face diagonal; the 3D space diagonal is $\mathbf{a\sqrt{3}}$.
3. **Frustum Volume Mixed Term Slip**: Writing $R^2 + r^2 + 2Rr$ instead of $\mathbf{R^2 + r^2 + Rr}$.
4. **Volume Sub-division Surface Inflation**: Believing total surface area remains constant when cutting solids. Total volume is conserved, but surface area multiplies!
5. **Metric Unit Scale Errors**: Confusing $1 \text{ m}^3$ with $100$ litres. $1 \text{ m}^3 = 1,000,000 \text{ cm}^3 = \mathbf{1,000 \text{ litres}}$.
