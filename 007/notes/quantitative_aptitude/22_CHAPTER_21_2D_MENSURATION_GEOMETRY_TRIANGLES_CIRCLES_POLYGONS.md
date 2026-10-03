# CHAPTER 21: 2D MENSURATION & PLANAR GEOMETRY: TRIANGLES, QUADRILATERALS, CIRCLES & POLYGONS

**Domain**: Euclidean Geometry, Planar Mensuration & Topological Invariants  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: Axiomatic Geometry $\to$ Triangular Inradius/Circumradius $\to$ Quadrilateral & Pathway Formulations $\to$ Regular Polygons $\to$ Curvilinear Rolling Dynamics $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: TRIANGULAR GEOMETRY & AREA DERIVATIONS

Every planar rectilinear polygon decomposes into a simplicial complex of triangles. The triangle forms the fundamental building block of 2D geometry.

### The Triangle Existence Axiom
For any three line segments $a, b, c$ to form a non-degenerate triangle:
$$\mathbf{a + b > c, \quad b + c > a, \quad c + a > b} \iff \mathbf{|a - b| < c < a + b}$$

### Universal Area Formulations
Let $a, b, c$ be side lengths, $\Delta$ the area, and $s = \frac{a + b + c}{2}$ the semi-perimeter.

```
                      Vertex A
                         ▲
                        / \
                       /   \
             Side c   /  h  \   Side b
                     /   │   \
                    /    │    \
          Vertex B ◄─────┴─────► Vertex C
                     Side a (Base)
```

1. **Standard Base-Altitude**:
   $$\Delta = \frac{1}{2} \times \text{Base} \times \text{Height} = \mathbf{\frac{1}{2} a h_a}$$
2. **Trigonometric (SAS Form)**:
   $$\Delta = \mathbf{\frac{1}{2} a b \sin C = \frac{1}{2} b c \sin A = \frac{1}{2} c a \sin B}$$
3. **Heron’s Formula (Semi-Perimeter Product)**:
   $$\mathbf{\Delta = \sqrt{s(s - a)(s - b)(s - c)}}$$
4. **Inradius ($\mathbf{r}$) Formulation**:
   Connecting incenter $I$ to the three vertices partitions $\Delta$ into three triangles with common height $r$:
   $$\Delta = \frac{1}{2}ar + \frac{1}{2}br + \frac{1}{2}cr = r \left(\frac{a + b + c}{2}\right) = r \cdot s \implies \mathbf{r = \frac{\Delta}{s}}$$
5. **Circumradius ($\mathbf{R}$) Formulation**:
   From the extended Sine Rule ($\frac{a}{\sin A} = 2R$):
   $$\mathbf{R = \frac{a b c}{4\Delta}}$$

---

### Specialized Triangle Architectures

| Triangle Class | Area ($\Delta$) | Inradius ($r$) | Circumradius ($R$) | Key Invariant Ratio |
| :--- | :--- | :--- | :--- | :--- |
| **Equilateral ($a = b = c$)** | $\frac{\sqrt{3}}{4} a^2$ | $r = \frac{a}{2\sqrt{3}}$ | $R = \frac{a}{\sqrt{3}}$ | $\mathbf{R : r = 2 : 1}$<br/>$h = \frac{\sqrt{3}}{2} a$ |
| **Right-Angled ($a^2 + b^2 = c^2$)** | $\frac{1}{2} a b$ | $r = \frac{a + b - c}{2}$ | $R = \frac{c}{2}$ | Circumcenter lies at **hypotenuse midpoint**! |
| **Isosceles ($a = b$, base $c$)** | $\frac{c}{4} \sqrt{4a^2 - c^2}$ | $\frac{\Delta}{s}$ | $\frac{a^2 c}{4\Delta}$ | Altitude bisects base: $h = \sqrt{a^2 - \frac{c^2}{4}}$ |

---

## 2. MEDIANS, CENTROID & APOLLONIUS' THEOREM

- **Median**: A line segment joining a vertex to the midpoint of the opposite side.
- **Centroid ($\mathbf{G}$)**: The concurrency point of all three medians.
  - Divides each median in ratio $\mathbf{2 : 1}$ (measuring from vertex to base).
  - Partitions the parent triangle into **$6$ mutually equal-area triangles**.
- **Apollonius' Theorem**: For median $AD$ drawn to side $BC$:
  $$\mathbf{AB^2 + AC^2 = 2 \left(AD^2 + BD^2\right) = 2 \left(AD^2 + \left(\frac{BC}{2}\right)^2\right)}$$

---

## 3. QUADRILATERALS & PATHWAY FORMULATIONS

### General Quadrilateral
$$\mathbf{\Delta = \frac{1}{2} \cdot d \cdot (h_1 + h_2)}$$
Where $d$ is a diagonal and $h_1, h_2$ are perpendicular offsets dropped from opposing vertices.

### Parallelogram & Rhombus
- **Parallelogram**: $\Delta = \text{Base} \times \text{Height} = a b \sin \theta$.
  - Diagonal invariant: $\mathbf{d_1^2 + d_2^2 = 2(a^2 + b^2)}$.
- **Rhombus**: Diagonals bisect each other at **right angles ($90^\circ$)**.
  $$\mathbf{\Delta = \frac{1}{2} d_1 d_2}, \quad \mathbf{\text{Side } a = \frac{1}{2} \sqrt{d_1^2 + d_2^2} \iff 4a^2 = d_1^2 + d_2^2}$$

### Trapezium (Trapezoid)
$$\mathbf{\Delta = \frac{1}{2} (a + b) \cdot h}$$
Where $a, b$ are parallel bases and $h$ is the perpendicular distance between them.

---

### The Three Rectangular Pathway Theorems
Let a rectangular field have length $l$, breadth $b$, and a pathway of uniform width $w$:

```
    ┌─────────────────────────┐               ┌───────┬───┬───────┐
    │ ┌─────────────────────┐ │               │       │   │       │
    │ │                     │ │               ├───────┼───┼───────┤
    │ │     Field (l x b)   │ │               │       │ w │       │
    │ │                     │ │               ├───────┼───┼───────┤
    │ └─────────────────────┘ │               │       │   │       │
    └─────────────────────────┘               └───────┴───┴───────┘
     External Pathway (Width w)               Central Cross Roads
```

1. **Pathway Constructed OUTSIDE the Field**:
   $$\mathbf{\text{Area}_{\text{path}} = 2w (l + b + 2w)}$$
2. **Pathway Constructed INSIDE the Field**:
   $$\mathbf{\text{Area}_{\text{path}} = 2w (l + b - 2w)}$$
3. **Two Central Crossroads Running Perpendicularly**:
   $$\mathbf{\text{Area}_{\text{roads}} = w (l + b - w)}$$

---

## 4. REGULAR POLYGONS (THE $n$-GON MATRIX)

For any regular polygon possessing $n$ equal sides of length $a$:

$$\text{Sum of All Interior Angles} = \mathbf{(n - 2) \times 180^\circ}$$
$$\text{Each Interior Angle} = \mathbf{\frac{(n - 2) \times 180^\circ}{n}}$$
$$\text{Each Exterior Angle} = \mathbf{\frac{360^\circ}{n}}$$
$$\text{Total Number of Diagonals} = \mathbf{\frac{n(n - 3)}{2}}$$

### Regular Hexagon ($n = 6$)
A regular hexagon decomposes symmetrically into **$6$ congruent equilateral triangles**:
$$\mathbf{\Delta_{\text{hexagon}} = 6 \times \left(\frac{\sqrt{3}}{4} a^2\right) = \frac{3\sqrt{3}}{2} a^2}$$

---

## 5. CIRCULAR DYNAMICS & ROLLING KINEMATICS

- **Circle**: Area $\Delta = \pi r^2$, Perimeter $C = 2\pi r$.
- **Semicircle**: Area $= \frac{\pi r^2}{2}$, Perimeter $= \pi r + 2r = r(\pi + 2) = \mathbf{\frac{36}{7} r}$ (taking $\pi \approx \frac{22}{7}$).
- **Sector**: Arc length $L = \frac{\theta}{360^\circ} \times 2\pi r$, Area $= \frac{\theta}{360^\circ} \times \pi r^2 = \mathbf{\frac{1}{2} L \cdot r}$.
- **Circular Annulus (Ring)**: Area $= \pi(R^2 - r^2) = \pi(R - r)(R + r)$.

### Rolling Wheel Revolution Mechanics
When a wheel of radius $r$ executes $N$ complete non-slipping revolutions:
$$\mathbf{\text{Distance Traversed } D = N \times (2\pi r)}$$
$$\mathbf{N = \frac{D}{2\pi r}}$$

---

## 6. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Rhombus Diagonal-to-Perimeter Extraction (SBI PO Prelims)
**Problem**: The area of a rhombus is $2016 \text{ cm}^2$ and the length of one of its diagonals is $64 \text{ cm}$. Find the perimeter of the rhombus.

**Execution**:
Using $\Delta = \frac{1}{2} d_1 d_2$:
$$2016 = \frac{1}{2} \times 64 \times d_2 = 32 \cdot d_2 \implies d_2 = \frac{2016}{32} = \mathbf{63 \text{ cm}}$$

Using the diagonal-side orthogonality relation:
$$a = \frac{1}{2}\sqrt{d_1^2 + d_2^2} = \sqrt{\left(\frac{64}{2}\right)^2 + \left(\frac{63}{2}\right)^2} = \sqrt{32^2 + 31.5^2}$$
Alternatively, half-diagonals are $32$ and $31.5 = \frac{63}{2}$.
$$a = \sqrt{32^2 + \left(\frac{63}{2}\right)^2} = \sqrt{1024 + \frac{3969}{4}} = \sqrt{\frac{4096 + 3969}{4}} = \sqrt{\frac{8065}{4}}$$
Notice $65^2 = 4225$. Let's check $32^2 + 31.5^2$:
Notice $(2a)^2 = 64^2 + 63^2 = 4096 + 3969 = 8065$. But $89^2 = 7921$, $90^2 = 8100$.
Let's check if $64^2 + 63^2$ or if $d_1 = 56$:
Notice $65^2 - 63^2 = 256 = 16^2 \implies (16, 63, 65)$ is a Pythagorean triplet!
If half-diagonals were $16$ and $63$, then $d_1 = 32, d_2 = 126$.
Here with $d_1 = 64, d_2 = 63$:
$$a = \frac{\sqrt{8065}}{2} \approx 44.9 \text{ cm} \implies \text{Perimeter } 4a = 2\sqrt{8065} \text{ cm}$$

---

### Exemplar 2: Semicircle Perimeter vs Area (RBI Grade B Phase 1)
**Problem**: The perimeter of a semicircular lawn is $72 \text{ meters}$. Find the total area of the lawn (taking $\pi = \frac{22}{7}$).

**Execution via Semicircular Perimeter Formula**:
$$\text{Perimeter} = \pi r + 2r = r\left(\frac{22}{7} + 2\right) = r\left(\frac{36}{7}\right)$$
Given $\text{Perimeter} = 72 \text{ m}$:
$$r\left(\frac{36}{7}\right) = 72 \implies r = \frac{72 \times 7}{36} = \mathbf{14 \text{ meters}}$$

Area of the semicircular lawn:
$$\Delta = \frac{1}{2} \pi r^2 = \frac{1}{2} \times \frac{22}{7} \times 14 \times 14 = 11 \times 2 \times 14 = \mathbf{308 \text{ m}^2}$$

---

### Exemplar 3: Wheel Revolutions (UPSC CSAT)
**Problem**: A bicycle wheel makes $5,000$ revolutions in moving $11 \text{ km}$. Find the diameter of the wheel (take $\pi = \frac{22}{7}$).

**Execution**:
- Total distance $D = 11 \text{ km} = 11 \times 1,000 \text{ m} = 11,000 \text{ m}$.
- Number of revolutions $N = 5,000$.
- Distance per revolution (Circumference $C$):
  $$C = \frac{D}{N} = \frac{11000}{5000} = \frac{11}{5} = \mathbf{2.2 \text{ meters}}$$

Since $C = \pi \cdot d$:
$$\frac{22}{7} \cdot d = 2.2 \implies d = 2.2 \times \frac{7}{22} = \mathbf{0.7 \text{ meters} = 70 \text{ cm}}$$
The diameter of the wheel is **$70 \text{ cm}$**.

---

### Exemplar 4: Central Crossroads Pathway (CAT / Banking Mains)
**Problem**: A rectangular park $60 \text{ m}$ long and $40 \text{ m}$ wide has two concrete crossroads running in the middle of the park, each $5 \text{ m}$ wide, one parallel to the length and the other parallel to the breadth. Find the cost of gravelling the path at ₹$60/\text{m}^2$.

**Execution via Crossroads Invariant**:
Here $l = 60, b = 40, w = 5$.
$$\text{Area}_{\text{crossroads}} = w (l + b - w) = 5 (60 + 40 - 5) = 5 (95) = \mathbf{475 \text{ m}^2}$$

$$\text{Total Cost} = 475 \text{ m}^2 \times ₹60/\text{m}^2 = \mathbf{₹28,500}$$

---

## 7. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: Semicircle Perimeter Arc-Only Trap** | Computing perimeter of semicircle as $\pi r$ only. | A closed semicircle includes the diameter base: $\mathbf{\text{Perimeter} = \pi r + 2r = \frac{36}{7} r}$. |
| **Trap 2: Crossroads Overlap Double-Count** | Calculating crossroads area as $(l \cdot w) + (b \cdot w)$. | The square intersection of area $w^2$ is counted twice: $\mathbf{\text{Area} = w(l + b - w)}$. |
| **Trap 3: Rhombus Area Base-Diagonal Confusion** | Multiplying diagonals without dividing by 2 ($d_1 \times d_2$). | Rhombus area is half the product of diagonals: $\mathbf{\frac{1}{2} d_1 d_2}$. |
| **Trap 4: Triangle Inradius vs Height** | Confusing inradius $r = \frac{\Delta}{s}$ with altitude $h = \frac{2\Delta}{\text{base}}$. | Altitude connects a vertex to the base; inradius is perpendicular to all three sides from the incenter. |
| **Trap 5: Regular Polygon Exterior Angle Divisor** | Dividing $180^\circ$ instead of $360^\circ$ by $n$ for exterior angle. | The sum of all exterior angles of any convex polygon is **always $360^\circ$**: $\theta_{\text{ext}} = \frac{360^\circ}{n}$. |
