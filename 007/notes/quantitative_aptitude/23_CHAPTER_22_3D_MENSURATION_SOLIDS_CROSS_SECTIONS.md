# CHAPTER 22: 3D MENSURATION: SOLIDS, FRUSTUMS, CROSS-SECTIONS & VOLUME CONSERVATION

**Domain**: Spatial Geometry, Polyhedral Mensuration & Volumetric Transformations  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: Spatial Measure Theory $\to$ Prismatic vs Pyramidal Solids $\to$ Canonical Solids Matrix $\to$ Frustum Formulations $\to$ Melting/Immersion Invariants $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: SPATIAL MEASURE & BOUNDARY SURFACES

Three-dimensional mensuration governs the quantification of bounded continuous subsets in Euclidean 3-space ($\mathbb{R}^3$):

1. **Volume ($\mathbf{V}$)**: The measure of spatial extent occupied by the solid ($\text{units}^3$).
2. **Lateral / Curved Surface Area ($\mathbf{LSA}$ / $\mathbf{CSA}$)**: The total area of all exterior boundary faces excluding the top and bottom bases ($\text{units}^2$).
3. **Total Surface Area ($\mathbf{TSA}$)**: The complete boundary surface enclosing the manifold:
   $$\mathbf{\text{TSA} = \text{LSA} + \sum \text{Base Areas}}$$

---

### Universal Prismatic vs Pyramidal Taxonomy

```
        RIGHT PRISM                                  RIGHT PYRAMID
   (Parallel Congruent Bases)                      (Apex Convergence)
          ┌─────────┐                                      ▲ Apex
         /         /│                                     /│\
        /         / │                                    / │ \
       ┌─────────┐  │                                   /  │  \
       │         │  │ Height h                         /   │h  \ Slant l
       │  Base   │  │                                 /    │    \
       │         │ ─┘                                ┌─────┼─────┐
       │         │/                                 /      ▼      \
       └─────────┘                                 └───────────────┘
                                                       Base Area
   Volume = Base Area × Height              Volume = (1/3) × Base Area × Height
   LSA = Base Perimeter × Height            LSA = (1/2) × Base Perimeter × Slant l
```

---

## 2. CANONICAL SOLIDS MASTER INVENTORY

### A. Cuboids & Cubes
Let length be $l$, breadth $b$, height $h$.
- **Cuboid Volume**: $V = l \cdot b \cdot h$
- **Total Surface Area**: $\text{TSA} = 2(l b + b h + h l)$
- **Lateral Surface Area (Area of 4 Walls)**: $\text{LSA} = \mathbf{2(l + b)h}$
- **Space Diagonal (Longest Rigid Rod)**:
  $$\mathbf{D = \sqrt{l^2 + b^2 + h^2}}$$

For a **Cube** of side $a$:
- $V = a^3$, $\text{TSA} = 6a^2$, $\text{LSA} = 4a^2$
- Space Diagonal: $\mathbf{D = a\sqrt{3}}$

---

### B. Cylinders & Cones
Let base radius be $r$, height $h$, and slant height $l$.

- **Right Circular Cylinder**:
  - $V = \mathbf{\pi r^2 h}$
  - $\text{CSA} = \mathbf{2\pi r h}$
  - $\text{TSA} = 2\pi r h + 2\pi r^2 = \mathbf{2\pi r (r + h)}$
  - **Hollow Cylinder** (inner radius $r$, outer radius $R$):
    $$V = \mathbf{\pi (R^2 - r^2) h}$$
    $$\text{TSA} = \mathbf{2\pi(R + r)h + 2\pi(R^2 - r^2)}$$

- **Right Circular Cone**:
  - Slant height relation: $\mathbf{l = \sqrt{r^2 + h^2}}$
  - $V = \mathbf{\frac{1}{3} \pi r^2 h}$
  - $\text{CSA} = \mathbf{\pi r l}$
  - $\text{TSA} = \pi r l + \pi r^2 = \mathbf{\pi r (r + l)}$

---

### C. Frustum of a Cone (Truncated Conical Solid)
When a cone is cleaved by a plane parallel to its base:
- Top radius: $r$
- Bottom radius: $R$ (where $R > r$)
- Vertical height: $h$
- Slant height: $\mathbf{l = \sqrt{h^2 + (R - r)^2}}$

$$\mathbf{\text{Volume} = \frac{1}{3} \pi h \left(R^2 + r^2 + R r\right)}$$
$$\mathbf{\text{CSA} = \pi (R + r) l}$$
$$\mathbf{\text{TSA} = \pi (R + r) l + \pi R^2 + \pi r^2}$$

---

### D. Spherical Manifolds
- **Solid Sphere ($r$)**:
  - $\text{Volume} = \mathbf{\frac{4}{3} \pi r^3}$
  - $\text{Surface Area} = \mathbf{4\pi r^2}$
- **Solid Hemisphere ($r$)**:
  - $\text{Volume} = \mathbf{\frac{2}{3} \pi r^3}$
  - $\text{Curved Surface Area} = \mathbf{2\pi r^2}$
  - $\mathbf{\text{Total Surface Area}} = 2\pi r^2 + \pi r^2 = \mathbf{3\pi r^2}$ *(Never omit flat base circle!)*
- **Spherical Shell** (inner $r$, outer $R$):
  - Metal Volume $= \mathbf{\frac{4}{3} \pi (R^3 - r^3)}$

---

## 3. VOLUMETRIC CONSERVATION & MELTING INVARIANTS

### Invariant 1: Recasting and Melting
Matter is conserved under thermal phase change and mechanical reforming:
$$\mathbf{V_{\text{original}} = \sum_{i=1}^N V_{\text{recast}, i}}$$

When a single large parent solid is melted and recast into $N$ identical smaller spherical or polyhedral units:
$$\mathbf{N = \frac{\text{Volume of Large Solid}}{\text{Volume of Single Small Unit}}}$$

### Invariant 2: Surface Area Multiplication upon Sub-division
When a solid is cut into smaller pieces, total volume is strictly conserved, but **Total Surface Area escalates**:
- A cube of side $A$ is sliced into $n^3$ small cubes of side $a = \frac{A}{n}$:
  $$\text{Initial TSA} = 6A^2$$
  $$\text{New Combined TSA} = n^3 \times 6a^2 = n^3 \times 6 \left(\frac{A}{n}\right)^2 = \mathbf{n \times (6A^2)}$$
  > **Theorem**: Slicing an object along three orthogonal planes into $n^3$ pieces **multiplies total surface area by exactly $n$**.

### Invariant 3: Hydrostatic Immersion & Fluid Displacement
When an insoluble solid is submerged inside a container partially filled with liquid:
$$\mathbf{\text{Volume of Submerged Solid} = \text{Cross-Sectional Area of Tank} \times \Delta h}$$
Where $\Delta h$ represents the vertical rise in fluid level.

---

## 4. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Longest Interior Diagonal of a Room (SBI PO Prelims)
**Problem**: Find the length of the longest pole that can be placed inside a rectangular hall $10 \text{ m}$ long, $10 \text{ m}$ wide, and $5 \text{ m}$ high.

**Execution via Space Diagonal**:
$$D = \sqrt{l^2 + b^2 + h^2} = \sqrt{10^2 + 10^2 + 5^2} = \sqrt{100 + 100 + 25} = \sqrt{225} = \mathbf{15 \text{ meters}}$$

---

### Exemplar 2: Frustum Bucket Capacity & Metal Sheet (RBI Grade B Phase 1)
**Problem**: A metallic bucket of height $16 \text{ cm}$ has bottom and top radii of $8 \text{ cm}$ and $20 \text{ cm}$ respectively. Find the capacity of the bucket in litres and the curved surface area of the metal sheet used (take $\pi = 3.14$).

**Execution via Frustum Formulations**:
- Here $h = 16 \text{ cm}$, $r = 8 \text{ cm}$, $R = 20 \text{ cm}$.
- Slant height $l = \sqrt{h^2 + (R - r)^2} = \sqrt{16^2 + (20 - 8)^2} = \sqrt{256 + 144} = \sqrt{400} = \mathbf{20 \text{ cm}}$.

1. **Volume (Capacity)**:
   $$V = \frac{1}{3} \pi h \left(R^2 + r^2 + R \cdot r\right) = \frac{1}{3} \times 3.14 \times 16 \times \left(20^2 + 8^2 + (20 \times 8)\right)$$
   $$V = \frac{1}{3} \times 3.14 \times 16 \times (400 + 64 + 160) = \frac{1}{3} \times 3.14 \times 16 \times 624$$
   Notice $624 / 3 = 208$.
   $$V = 3.14 \times 16 \times 208 = 3.14 \times 3328 = \mathbf{10,449.92 \text{ cm}^3}$$
   Since $1 \text{ litre} = 1,000 \text{ cm}^3$:
   $$\text{Capacity} \approx \mathbf{10.45 \text{ litres}}$$

2. **Curved Surface Area**:
   $$\text{CSA} = \pi (R + r) l = 3.14 \times (20 + 8) \times 20 = 3.14 \times 28 \times 20 = 3.14 \times 560 = \mathbf{1,758.4 \text{ cm}^2}$$

---

### Exemplar 3: Spherical Melting & Count Determination (UPSC CSAT)
**Problem**: How many spherical lead bullets each $4 \text{ cm}$ in diameter can be manufactured from a rectangular block of lead of dimensions $44 \text{ cm} \times 24 \text{ cm} \times 12 \text{ cm}$? (Take $\pi = \frac{22}{7}$).

**Execution via Volumetric Conservation**:
- Volume of cuboid block: $V_{\text{block}} = 44 \times 24 \times 12 = \mathbf{12,672 \text{ cm}^3}$.
- Bullet diameter $= 4 \text{ cm} \implies$ Radius $r = 2 \text{ cm}$.
- Volume of 1 bullet:
  $$v = \frac{4}{3} \pi r^3 = \frac{4}{3} \times \frac{22}{7} \times 2^3 = \frac{4 \times 22 \times 8}{21} = \frac{704}{21} \text{ cm}^3$$

Number of bullets:
$$N = \frac{V_{\text{block}}}{v} = \frac{44 \times 24 \times 12}{\frac{704}{21}} = \frac{12672 \times 21}{704} = 18 \times 21 = \mathbf{378 \text{ bullets}}$$

---

### Exemplar 4: Fluid Displacement & Rise in Cylindrical Tank (CAT)
**Problem**: A spherical iron cannon ball of radius $6 \text{ cm}$ is lowered into a cylindrical bucket of radius $12 \text{ cm}$ containing water, such that it is completely submerged. By how much does the water level in the bucket rise?

**Execution via Fluid Displacement Invariant**:
$$\text{Volume of Sphere} = \text{Volume of Fluid Displaced}$$
$$\frac{4}{3} \pi r_{\text{sphere}}^3 = \pi r_{\text{cyl}}^2 \cdot \Delta h$$
$$\frac{4}{3} \times 6^3 = 12^2 \cdot \Delta h$$
$$\frac{4}{3} \times 216 = 144 \cdot \Delta h$$
$$288 = 144 \cdot \Delta h \implies \mathbf{\Delta h = \frac{288}{144} = 2 \text{ cm}}$$
The water level rises by exactly **$2 \text{ cm}$**.

---

## 5. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: Solid Hemisphere Total Surface Area** | Writing $\text{TSA} = 2\pi r^2$ for a solid hemisphere. | $2\pi r^2$ is only the curved dome; the circular cross-section adds $\pi r^2$, making $\mathbf{\text{TSA} = 3\pi r^2}$. |
| **Trap 2: Cone Volume Missing One-Third** | Using $V = \pi r^2 h$ for conical volume. | A cone occupies exactly one-third the volume of a cylinder with identical base and height: $\mathbf{V = \frac{1}{3}\pi r^2 h}$. |
| **Trap 3: Frustum Volume Average Base Trap** | Calculating frustum volume as $h \times \frac{\pi R^2 + \pi r^2}{2}$. | The middle term is the geometric mean $Rr$, yielding $\mathbf{V = \frac{1}{3}\pi h(R^2 + r^2 + Rr)}$. |
| **Trap 4: Diagonal Metric Inversion** | Using $a\sqrt{2}$ as the longest diagonal of a cube. | $a\sqrt{2}$ is the face diagonal of a 2D square; the 3D space diagonal is $\mathbf{a\sqrt{3}}$. |
| **Trap 5: Litre to Cubic Centimeter Miscount** | Setting $1 \text{ litre} = 100 \text{ cm}^3$ or $10,000 \text{ cm}^3$. | Exactly $\mathbf{1 \text{ litre} = 1,000 \text{ cm}^3 = 10^{-3} \text{ m}^3}$; $1 \text{ m}^3 = 1,000 \text{ litres}$. |
