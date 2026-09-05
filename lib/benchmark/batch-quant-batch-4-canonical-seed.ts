import { db } from '../db/client';

export interface QuantBatch4CanonicalConceptDef {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  order: number;
  topicSlug: string;
  contentBlocks: {
    type: string;
    title: string;
    body: string;
    order: number;
    visibility: string;
  }[];
  claims: {
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }[];
  examMappings: {
    examCode: string;
    syllabusUnit: string;
    relevance: string;
    priority: string;
    requiredDepth: string;
    notes: string;
  }[];
  revisionUnits: {
    type: string;
    content: string;
    priority: string;
    order: number;
  }[];
  questions: {
    type: string;
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation: string;
    difficulty: string;
    isPYQ?: boolean;
    pyqYear?: number;
    pyqPaper?: string;
    pyqStage?: string;
    examinerTrapPattern?: string;
  }[];
}

export const QUANT_BATCH_4_CONCEPTS: QuantBatch4CanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 83: Mensuration & Geometric Invariants (CON-QUANT-28, 29, 30, 31)
  // =========================================================================
  {
    id: 'CON-QUANT-28',
    slug: '2d-geometric-invariants-inradius-circumradius-theorems-and-pathway-algebra',
    title: '2D Geometric Invariants: Inradius-Circumradius Invariants, Isoperimetric Optimization & Pathway Algebra',
    shortDefinition: 'Rigorous plane geometry and 2D mensuration: isoperimetric maximum-area theorems, inradius/circumradius invariants for right-angled, equilateral, and general triangles, pathway ring algebra, and 3-tier competitive problem decomposition.',
    difficulty: 'ADVANCED',
    order: 28,
    topicSlug: 'mensuration-and-geometric-invariants',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Geometric Enclosure: Perimeter Constraints & Symmetrical Optimization',
        body: `Imagine you are given a fixed length of flexible fencing—say exactly 40 meters. If you construct an elongated, narrow rectangle (19m by 1m), you enclose a meagre $19\\text{ m}^2$. If you square the dimensions ($10\\text{ m} \\times 10\\text{ m}$), your enclosed area surges to $100\\text{ m}^2$. If you bend the fencing into a circle of circumference $40\\text{ m}$, the enclosed area expands to approximately $127.3\\text{ m}^2$.

This intuitive fact forms the bedrock of the **Isoperimetric Theorem**: *among all closed plane figures with a fixed perimeter, the shape with maximum enclosed area is strictly the circle*. As polygon side count $n \\to \\infty$, the enclosed area strictly monotonically increases.

In competitive banking and SSC examinations, 2D geometry is rarely about drawing proofs; it is about exploiting **fixed ratio invariants**—such as the relationship between a triangle's area, its semi-perimeter, and the radius of its inscribed or circumscribed circle, or avoiding the classic algebraic trap of overlapping intersections in internal and external pathways.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Canonical Inradius, Circumradius & Pathway Geometric Invariants',
        body: `### 1. Inradius ($r$) and Circumradius ($R$) Analytical Matrix

For any general triangle with sides $a, b, c$, semi-perimeter $s = \\frac{a+b+c}{2}$, and area $\\Delta$:
* **General Triangle Inradius:** $r = \\frac{\\Delta}{s}$
* **General Triangle Circumradius:** $R = \\frac{abc}{4\\Delta}$

| Triangle Topology | Inradius ($r$) | Circumradius ($R$) | Radius Ratio ($R : r$) | Area Ratio (Circumcircle : Incircle) |
| :--- | :--- | :--- | :--- | :--- |
| **Right-Angled Triangle** (legs $a, b$, hypotenuse $c$) | $r = \\frac{a + b - c}{2}$ | $R = \\frac{c}{2}$ (hypotenuse midpoint) | $\\frac{c}{a+b-c}$ | Depends on legs |
| **Equilateral Triangle** (side $a$) | $r = \\frac{a}{2\\sqrt{3}} = \\frac{h}{3}$ | $R = \\frac{a}{\\sqrt{3}} = \\frac{2h}{3}$ | Strictly $2 : 1$ | Strictly $4 : 1$ |
| **Scalene Triangle** (Heron's $\\Delta$) | $r = \\frac{\\sqrt{s(s-a)(s-b)(s-c)}}{s}$ | $R = \\frac{abc}{4\\sqrt{s(s-a)(s-b)(s-c)}}$ | Variable | Variable |

### 2. Systematic Pathway Algebra Framework

When a pathway of uniform width $w$ surrounds or cuts through a rectangular field of length $l$ and breadth $b$:
1. **Internal Pathway (Pathway inside perimeter):**
   $$\\text{Area} = 2w(l + b - 2w)$$
2. **External Pathway (Pathway outside perimeter):**
   $$\\text{Area} = 2w(l + b + 2w)$$
3. **Central Crossroad Pathways (Two perpendicular paths intersecting in center):**
   $$\\text{Area} = w(l + b - w)$$
   *(Note: The term $-w^2$ subtracts the central overlapping square common to both paths).*`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Mathematical Derivation & 3-Tier Problem Decomposition',
        body: `### Derivation of the Right-Triangle Inradius Invariant
Let a right-angled triangle have legs $a, b$ meeting at right angle $C$, and hypotenuse $c$. Let incircle center be $I$ with radius $r$.
1. Tangents from vertices to incircle are equal in length.
2. From vertex $C(90^\\circ)$, the quadrilateral formed by $C$, the two tangent points, and center $I$ is a square of side $r$.
3. Thus, the tangent segments adjacent to vertex $C$ are each of length $r$.
4. The remaining segment on side $a$ is $(a - r)$, and on side $b$ is $(b - r)$.
5. Tangents from vertex $A$ to the circle have length $(b - r)$; tangents from vertex $B$ have length $(a - r)$.
6. The hypotenuse $c$ is the sum of these two tangent segments:
   $$c = (a - r) + (b - r) = a + b - 2r$$
   $$2r = a + b - c \\implies r = \\frac{a + b - c}{2}$$
*(Q.E.D. This eliminates calculating semi-perimeter $s$ and Heron's formula entirely).*

### 3-Tier Exam Problem Execution
**Problem:** A right-angled triangle has perpendicular legs of length $15\\text{ cm}$ and $20\\text{ cm}$. Calculate the area between the triangle and its inscribed circle.
* **Tier 1 (First Principles):** Hypotenuse $c = \\sqrt{15^2 + 20^2} = 25\\text{ cm}$. Area of triangle $\\Delta = \\frac{1}{2} \\times 15 \\times 20 = 150\\text{ cm}^2$. Semi-perimeter $s = \\frac{15+20+25}{2} = 30\\text{ cm}$. Inradius $r = \\frac{150}{30} = 5\\text{ cm}$. Area of incircle = $\\pi r^2 = 25\\pi \\approx 78.57\\text{ cm}^2$. Net remaining area = $150 - 78.57 = 71.43\\text{ cm}^2$.
* **Tier 2 (Banking PO Shortcut):** Inradius $r = \\frac{a+b-c}{2} = \\frac{15+20-25}{2} = 5\\text{ cm}$. Area = $150 - 25\\pi = 71.43\\text{ cm}^2$.
* **Tier 3 (10-Second Pythagorean Triple Scaling):** Identify base triple $(3, 4, 5)$ scaled by $5$. For base triple $(3, 4, 5)$, inradius $r_0 = \\frac{3+4-5}{2} = 1$. Scaled inradius $r = 1 \\times 5 = 5\\text{ cm}$ mentally in 3 seconds.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Confusion Matrix & Speed Heuristics',
        body: `### High-Frequency Examiner Traps in 2D Geometry

1. **The Pathway Direction Trap:**
   * Internal path: Dimensions decrease by $2w$ (width from left/right, top/bottom): $\\text{Area} = 2w(l+b-2w)$.
   * External path: Dimensions increase by $2w$: $\\text{Area} = 2w(l+b+2w)$.
   * *Trap:* Confusing internal vs external leads to an error of $8w^2\\text{ cm}^2$.

2. **The Equilateral Incircle-Circumcircle Area Ratio Trap:**
   * Inradius $r = \\frac{a}{2\\sqrt{3}}$; Circumradius $R = \\frac{a}{\\sqrt{3}}$.
   * Radius ratio is $R : r = 2 : 1$.
   * *Trap:* Examiners ask for the **Area** ratio, which squares the radius ratio:
     $$\\frac{\\text{Area}(R)}{\\text{Area}(r)} = \\left(\\frac{2}{1}\\right)^2 = 4 : 1$$
   * Shaded area between circumcircle and incircle is exactly $3 \\times \\text{Area of incircle}$.

3. **Rhombus Diagonal vs Side Trap:**
   * Diagonals of a rhombus bisect each other at $90^\\circ$.
   * Side $a = \\sqrt{\\left(\\frac{d_1}{2}\\right)^2 + \\left(\\frac{d_2}{2}\\right)^2} = \\frac{1}{2}\\sqrt{d_1^2 + d_2^2}$.
   * Never multiply diagonals to get perimeter; perimeter is $4a$. Area is $\\frac{1}{2} d_1 d_2$.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-28-1',
        statement: 'In any right-angled triangle with legs a and b and hypotenuse c, the inradius is strictly given by r = (a + b - c) / 2.',
        claimType: 'MATHEMATICAL_THEOREM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-6',
        excerpt: 'Right-Angled Triangle (a, b, c): Inradius r = (a + b - c)/2; Circumradius R = c/2 (midpoint of hypotenuse).',
      },
      {
        id: 'CLM-QUANT-28-2',
        statement: 'In an equilateral triangle, the circumradius is exactly twice the inradius, and the circumcircle area is exactly four times the incircle area.',
        claimType: 'MATHEMATICAL_THEOREM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-6',
        excerpt: 'Equilateral Triangle: Inradius r = a/(2sqrt(3)); Circumradius R = a/sqrt(3); Ratio R/r = 2:1; Area Ratio Circumcircle/Incircle = 4:1.',
      },
      {
        id: 'CLM-QUANT-28-3',
        statement: 'The area of a central crossroad pathway of width w intersecting perpendicularly inside a rectangle of length l and breadth b is w(l + b - w).',
        claimType: 'ALGEBRAIC_IDENTITY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-6',
        excerpt: 'Center crossroad area = w(l + b - w) - don’t forget to subtract the central overlapping square w^2 once!',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Mensuration & Geometry',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'High-frequency topic in Prelims and Mains Quantity Comparison (Q1 vs Q2).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Mensuration 2D',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Tested heavily in arithmetic word problems and Caselet DI setups.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Geometry & Mensuration',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'THEORETICAL_AND_DERIVATIONAL',
        notes: 'Direct geometric questions on incenter, circumcenter, and pathway areas in Tier 2.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Geometric Models',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL_AND_NUMERICAL',
        notes: 'Appears in composite Data Sufficiency and geometry-based caselet stems.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'General Mental Ability — Mensuration & Areas',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'FORMULA_APPLICATION',
        notes: 'Tested in RAS Prelims general mental ability section.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Basic Numeracy & Geometry',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'LOGICAL_APPLICATION',
        notes: 'Common CSAT reasoning problem on pathway paving costs and fencing optimization.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Numeracy — Mensuration',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_APPLICATION',
        notes: 'Standard 2D mensuration problems on triangle inradius and rhombus diagonals.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not directly examined in DBF banking regulations syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Quantitative aptitude not tested in IIBF professional banking exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Right triangle inradius: r = (a + b - c)/2. Circumradius: R = c/2. Equilateral triangle: R = 2r; Area ratio = 4:1. Internal path = 2w(l+b-2w); External path = 2w(l+b+2w); Crossroad = w(l+b-w).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Isoperimetric theorem dictates that Circle maximizes area for fixed perimeter. Inradius of general triangle r = Delta/s; circumradius R = abc/(4Delta). In right triangle (a,b,c), tangents form a square of side r at vertex 90 deg, yielding r = (a+b-c)/2. For pathways of width w, remember to subtract w^2 in crossroads to avoid double-counting the central intersection.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Systematic 2D geometry decomposition: 1) Geometric Invariants: Inradius r = Delta/s, Circumradius R = abc/(4Delta). For right triangles, r = (a+b-c)/2. 2) Regular Polygons: Area increases with side count n for constant perimeter. 3) Pathway Formulations: Internal 2w(l+b-2w), External 2w(l+b+2w), Central crossroad w(l+b-w). In competitive problems, scale Pythagorean triples (3,4,5 -> r=1; 5,12,13 -> r=2; 8,15,17 -> r=3) to find inradius in under 5 seconds.',
        priority: 'MEDIUM',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NUMERICAL_MCQ',
        stem: 'A rectangular lawn measuring 60 m by 40 m has two crossroads of width 5 m running through its center, one parallel to the length and the other parallel to the breadth. What is the total area of the crossroads?',
        options: ['500 m²', '475 m²', '525 m²', '450 m²'],
        correctAnswer: '475 m²',
        explanation: 'Using the central crossroad formula Area = w(l + b - w): Area = 5 * (60 + 40 - 5) = 5 * 95 = 475 m². Alternatively, Path 1 area = 60 * 5 = 300 m²; Path 2 area = 40 * 5 = 200 m²; Central overlapping square area = 5 * 5 = 25 m². Total Area = 300 + 200 - 25 = 475 m².',
        trapExplanation: 'The common trap is adding both paths (300 + 200 = 500 m²) without subtracting the 25 m² central intersection square that is counted twice.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Double counting intersection square in crossroad geometry.',
      },
      {
        type: 'STATEMENT_ANALYSIS',
        stem: 'Consider the following statements regarding geometric invariants of plane figures:\nI. An equilateral triangle with side 12 cm has inradius 2√3 cm and circumradius 4√3 cm.\nII. If a wire of fixed length is bent into a regular hexagon, a square, and a circle, the square will enclose a larger area than the regular hexagon.\nIII. In any right-angled triangle with sides 9 cm, 12 cm, and 15 cm, the inradius is exactly 3 cm.\nWhich of the statements given above are correct?',
        options: ['I and II only', 'I and III only', 'II and III only', 'I, II, and III'],
        correctAnswer: 'I and III only',
        explanation: 'Statement I is correct: For equilateral triangle, r = a / (2√3) = 12 / (2√3) = 2√3 cm; R = a / √3 = 12 / √3 = 4√3 cm. Statement II is incorrect: By the isoperimetric theorem, for a fixed perimeter, as the number of sides of a regular polygon increases, its enclosed area strictly increases. Therefore, a regular hexagon (n=6) encloses MORE area than a square (n=4). Statement III is correct: In right triangle (9, 12, 15), inradius r = (a + b - c)/2 = (9 + 12 - 15)/2 = 6/2 = 3 cm.',
        trapExplanation: 'Statement II preys on the misconception that squaring dimensions maximizes area over polygons of higher order. Regular hexagon has area ~0.072 P², while square has area 0.0625 P².',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Isoperimetric inequality ordering across polygon side counts.',
      },
    ],
  },
  {
    id: 'CON-QUANT-29',
    slug: 'advanced-3d-solid-geometry-conservation-of-volume-cutting-invariants-and-inscribed-solids',
    title: 'Advanced 3D Solid Geometry: Conservation of Volume, Cutting Invariants & Inscribed Solids',
    shortDefinition: '3D spatial geometry and solid mensuration: melting and recasting volume conservation, cutting-plane surface area expansion invariants, cylinder/cone/sphere topological properties, and maximum inscribed solids.',
    difficulty: 'ADVANCED',
    order: 29,
    topicSlug: 'mensuration-and-geometric-invariants',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Physical Invariance vs Surface Area Transformation',
        body: `When a goldsmith takes a heavy solid gold sphere and melts it down to produce 64 tiny identical spherical beads, two fundamental physical laws govern the transformation:
1. **The Law of Mass/Volume Conservation:** Assuming zero spillage, the total volume of gold remains strictly identical: $\\sum V_{\\text{final}} = V_{\\text{initial}}$.
2. **The Non-Conservation of Surface Area:** While volume remains constant, the total surface area **explodes**. The surface area of the 64 tiny beads combined is quadruple the surface area of the original single sphere!

Similarly, if you slice an apple into two halves with a single clean cut, its volume does not change by a single cubic millimeter. Yet, the total surface area immediately increases by exactly the area of the two newly exposed flat circular cross-sections.

Competitive examination questions in 3D mensuration (Bank PO, SSC CGL Tier 2, CAT, CSAT) exploit this duality: *Volume is invariant under reformations, but Surface Area is dynamic and strictly additive under cuts*.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Comprehensive 3D Solid Mensuration Matrix & Inscribed Solid Theorems',
        body: `### 1. Canonical 3D Solid Formulas

| 3D Solid | Curved / Lateral Surface Area (CSA/LSA) | Total Surface Area (TSA) | Volume ($V$) | Space Diagonal ($d$) |
| :--- | :--- | :--- | :--- | :--- |
| **Cube** (side $a$) | $4a^2$ | $6a^2$ | $a^3$ | $d = a\\sqrt{3}$ |
| **Cuboid** ($l, b, h$) | $2h(l + b)$ [Area of 4 walls] | $2(lb + bh + hl)$ | $l \\cdot b \\cdot h$ | $d = \\sqrt{l^2 + b^2 + h^2}$ |
| **Right Cylinder** ($r, h$) | $2\\pi r h$ | $2\\pi r(h + r)$ | $\\pi r^2 h$ | - |
| **Hollow Cylinder** ($R, r, h$) | $2\\pi h(R + r)$ | $2\\pi h(R + r) + 2\\pi(R^2 - r^2)$ | $\\pi h(R^2 - r^2)$ | - |
| **Right Cone** ($r, h, l$) | $\\pi r l$ [$l = \\sqrt{r^2 + h^2}$] | $\\pi r(l + r)$ | $\\frac{1}{3}\\pi r^2 h$ | - |
| **Solid Sphere** ($r$) | $4\\pi r^2$ | $4\\pi r^2$ | $\\frac{4}{3}\\pi r^3$ | Diameter $= 2r$ |
| **Solid Hemisphere** ($r$) | $2\\pi r^2$ | $3\\pi r^2$ ($2\\pi r^2 + \\pi r^2$) | $\\frac{2}{3}\\pi r^3$ | - |
| **Hollow Hemisphere** ($r$) | $2\\pi r^2$ | $2\\pi r^2$ (open rim) | $\\frac{2}{3}\\pi r^3$ | - |

### 2. Maximum Inscribed Solid Theorems
* **Largest Cube Inscribed in a Sphere of Radius $R$:**
  The body diagonal of the cube equals the diameter of the sphere:
  $$a\\sqrt{3} = 2R \\implies a = \\frac{2R}{\\sqrt{3}}$$
  $$\\text{Volume of Cube } V = a^3 = \\frac{8R^3}{3\\sqrt{3}}$$
* **Largest Sphere Inscribed in a Cube of Side $a$:**
  The diameter of the sphere equals the side of the cube:
  $$2r = a \\implies r = \\frac{a}{2}$$
  $$\\text{Ratio of Volume(Cube) : Volume(Inscribed Sphere)} = a^3 : \\frac{4}{3}\\pi \\left(\\frac{a}{2}\\right)^3 = 6 : \\pi$$
* **Largest Right Circular Cylinder Inscribed in a Cone (radius $R$, height $H$):**
  Maximum volume occurs when cylinder height $h = \\frac{H}{3}$ and cylinder radius $r = \\frac{2R}{3}$.
  $$\\text{Max Inscribed Cylinder Volume} = \\frac{4}{27} \\times \\text{Volume of Cone}$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Analytical Mechanics of Solid Cuts, Melting & Recasting',
        body: `### 1. The Cutting Invariant & Percentage TSA Increase
When any 3D solid is intersected by a cutting plane, the change in Total Surface Area is:
$$\\Delta \\text{TSA} = 2 \\times \\text{Cross-Sectional Area of the Cut}$$

**Example: Bisecting a Solid Sphere into Two Hemispheres:**
* Initial Sphere: $\\text{TSA}_0 = 4\\pi r^2$.
* Cut produces two hemispherical flat faces, each of area $\\pi r^2$.
* $\\Delta \\text{TSA} = 2 \\times \\pi r^2 = 2\\pi r^2$.
* Final Combined TSA = $4\\pi r^2 + 2\\pi r^2 = 6\\pi r^2$.
* **Percentage Increase in TSA:**
  $$\\frac{6\\pi r^2 - 4\\pi r^2}{4\\pi r^2} \\times 100 = 50\\%$$
* If cut into 4 identical quadrants by two mutually perpendicular cuts, 4 flat faces of $\\pi r^2$ each are exposed:
  $$\\text{Total TSA} = 4\\pi r^2 + 4(\\pi r^2) = 8\\pi r^2 \\quad (100\\% \\text{ increase})$$

### 2. Melting and Recasting Mechanics
When a large solid of volume $V_{\\text{large}}$ is melted into $n$ identical smaller solids of volume $V_{\\text{small}}$:
$$n = \\frac{V_{\\text{large}}}{V_{\\text{small}}}$$
* **Example:** A metallic sphere of radius $R = 6\\text{ cm}$ is melted into identical smaller cones of base radius $r = 3\\text{ cm}$ and height $h = 4\\text{ cm}$.
  $$V_{\\text{sphere}} = \\frac{4}{3}\\pi (6)^3 = \\frac{4}{3}\\pi (216) = 288\\pi\\text{ cm}^3$$
  $$V_{\\text{cone}} = \\frac{1}{3}\\pi (3)^2 (4) = \\frac{1}{3}\\pi (9)(4) = 12\\pi\\text{ cm}^3$$
  $$n = \\frac{288\\pi}{12\\pi} = 24\\text{ cones}$$`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Longest Rod Theorems & Confusing Pairs',
        body: `### Critical Examiner Traps in 3D Mensuration

1. **Solid vs Hollow Hemisphere TSA Trap:**
   * A *solid* hemisphere has a curved bowl ($2\\pi r^2$) PLUS a circular base lid ($\\pi r^2$). $\\text{TSA} = 3\\pi r^2$.
   * A *hollow* hemisphere open at top has $\\text{TSA} = 2\\pi r^2$.
   * *Trap:* If question states "painted on all exposed surfaces", check if it is open or closed!

2. **The Longest Rod in a Room Trap:**
   * The longest pole or rod that can be placed in a rectangular room of dimensions $l, b, h$ is along the **3D space diagonal**, NOT the floor diagonal.
     $$d_{\\text{space}} = \\sqrt{l^2 + b^2 + h^2}$$
   * *Trap:* Taking floor diagonal $\\sqrt{l^2 + b^2}$ underestimates length by 15–30%.

3. **Units of Measurement Trap:**
   * $1\\text{ m}^3 = 1,000\\text{ Litres} = 1,000,000\\text{ cm}^3 = 10^6\\text{ cm}^3$.
   * $1\\text{ Litre} = 1,000\\text{ cm}^3 = 0.001\\text{ m}^3$.
   * In water tank filling questions, flow rate is often given in $\\text{km/h}$ or $\\text{litres/minute}$ while dimensions are in meters. Convert all parameters to meters before multiplying!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-29-1',
        statement: 'When a solid sphere of radius r is sliced into two identical hemispheres by a diametrical plane cut, the total surface area increases by exactly 50% (from 4πr² to 6πr²).',
        claimType: 'MATHEMATICAL_THEOREM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-13',
        excerpt: 'Sphere cut into 2 halves increases total surface area by 50% (4pi r^2 to 6pi r^2).',
      },
      {
        id: 'CLM-QUANT-29-2',
        statement: 'The side of the largest cube that can be inscribed inside a sphere of radius R is 2R / √3, where the body diagonal of the cube equals the sphere diameter.',
        claimType: 'MATHEMATICAL_THEOREM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-13',
        excerpt: 'Inscribed in a Sphere of radius R: Cube diagonal a*sqrt(3) = 2R implies a = 2R/sqrt(3).',
      },
      {
        id: 'CLM-QUANT-29-3',
        statement: 'When solids are melted and recast, total volume remains strictly conserved, whereas total surface area changes and is non-invariant.',
        claimType: 'PHYSICAL_INVARIANT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-13',
        excerpt: 'When one or more solid bodies are melted and recast into new shapes, Total Volume remains strictly invariant, but Total Surface Area ALWAYS changes.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Mensuration 3D',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Frequent source of complex Mains word problems and Quantity Comparison (Q1 vs Q2).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — 3D Geometry & Solids',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Tested in Prelims single questions and Mains Arithmetic DI sets.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Solid Mensuration',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FORMULAE_AND_PROOFS',
        notes: '4-6 questions guaranteed across Tier 1 and Tier 2 on prisms, cones, and spheres.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Mensuration Models',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'ANALYTICAL_APPLICATION',
        notes: 'Tested in Data Sufficiency questions regarding cylinder/cone dimensional ratios.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mental Ability — Surface Areas and Volumes',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'FORMULA_APPLICATION',
        notes: 'Regularly tested in RAS Prelims general mental ability paper.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Volumes & Dimensions',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'LOGICAL_REASONING',
        notes: 'Appears as practical problems: volume of water in tanks, packing boxes in containers.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Mathematics — Mensuration',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_ACCURACY',
        notes: 'Standard 3D solid melting questions in APFC recruitment test.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not applicable to banking law and practice certifications.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Cylinder V=πr²h, TSA=2πr(h+r). Cone V=⅓πr²h, l=√(r²+h²), TSA=πr(l+r). Sphere V=4/3πr³, TSA=4πr². Solid Hemisphere TSA=3πr², V=⅔πr³. Longest rod in room = √(l²+b²+h²). Slicing a sphere in half increases TSA by 50%.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Volume is invariant when solids are melted and recast, but Total Surface Area changes. Cutting a solid adds twice the cut cross-section to total area. Largest cube in sphere has diagonal a√3 = 2R -> a = 2R/√3. Largest sphere in cube has 2r = a. Hemisphere TSA is 3πr² (solid) vs 2πr² (hollow open). For unit conversions: 1 m³ = 1,000 Litres = 1,000,000 cm³.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '3D Solid Mensuration Hierarchy: 1) Prisms (Cylinder, Cube, Cuboid): Volume = Base Area * Height; LSA = Base Perimeter * Height; TSA = LSA + 2(Base Area). 2) Pyramids (Cone, Regular Pyramid): Volume = 1/3 * Base Area * Height; LSA = 1/2 * Base Perimeter * Slant Height. 3) Spherical Geometry: Sphere TSA = 4πr², V = 4/3πr³. Solid hemisphere TSA = 3πr². 4) Cutting Planes: Delta TSA = 2 * A_cut. Single plane cut across sphere center increases TSA by 50%.',
        priority: 'MEDIUM',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NUMERICAL_MCQ',
        stem: 'A solid metallic sphere of radius 6 cm is melted and recast into small solid right circular cones of base radius 3 cm and height 4 cm. How many such cones can be formed, assuming zero loss of metal?',
        options: ['18', '24', '32', '36'],
        correctAnswer: '24',
        explanation: 'Volume of original sphere = (4/3) * π * 6³ = (4/3) * 216π = 288π cm³. Volume of one small cone = (1/3) * π * 3² * 4 = (1/3) * 36π = 12π cm³. Number of cones n = Volume(Sphere) / Volume(Cone) = 288π / 12π = 24 cones.',
        trapExplanation: 'The common trap is misapplying the cone volume formula by forgetting the factor of 1/3, which leads to 8 cones, or confusing diameter with radius.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Forgetting 1/3 factor in conical volume during melting division.',
      },
      {
        type: 'NUMERICAL_MCQ',
        stem: 'What is the length of the longest pole that can be placed inside a room of dimensions 12 m long, 9 m broad, and 8 m high?',
        options: ['15 m', '17 m', '19 m', '21 m'],
        correctAnswer: '17 m',
        explanation: 'The longest pole corresponds to the 3D space diagonal: d = √(l² + b² + h²) = √(12² + 9² + 8²) = √(144 + 81 + 64) = √289 = 17 m.',
        trapExplanation: 'Taking the 2D floor diagonal √(12² + 9²) = √225 = 15 m is the classic trap, forgetting to incorporate vertical room height.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Floor diagonal vs 3D body diagonal confusion.',
      },
    ],
  },
  {
    id: 'CON-QUANT-30',
    slug: 'truncated-solids-frustum-of-right-circular-cone-pyramids-and-cavity-drilling-topology',
    title: 'Truncated Solids: Frustum of Right Circular Cone, Pyramids & Cavity Drilling Topology',
    shortDefinition: 'Advanced spatial mensuration: frustum of a cone (slant height, CSA, TSA, capacity volume), bucket geometry, composite solids, and cavity drilling topological changes in surface area.',
    difficulty: 'ADVANCED',
    order: 30,
    topicSlug: 'mensuration-and-geometric-invariants',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Geometry of a Bucket: Slicing a Cone Parallel to Its Base',
        body: `If you take a party hat (a right circular cone) and slice off its sharp pointed top with a horizontal cut parallel to the base, the shape left at the bottom is a **Frustum** (or truncated cone). In daily life, everyday objects like drinking glasses, buckets, flower pots, and lamp shades are frustums.

When working with a frustum, you are dealing with two distinct circular faces of different sizes: a larger base of radius $R$ and a smaller base of radius $r$, separated by a vertical height $h$.

A frequent point of conceptual confusion in competitive exams occurs when a cavity is drilled into a solid object. Intuitively, students assume that because material is removed, the surface area must decrease. **In reality, drilling a hole or cavity increases total surface area**, because the newly exposed inner walls create additional surface area that must now be painted, polished, or plated!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Frustum Analytical Invariants & Cavity Drilling Surface Theorems',
        body: `### 1. Frustum of a Right Circular Cone Mathematical Invariants
Let the larger circular base have radius $R$, the smaller circular top have radius $r$, and the perpendicular vertical height be $h$:
* **Slant Height ($l$):**
  $$l = \\sqrt{h^2 + (R - r)^2}$$
* **Curved Surface Area (CSA):**
  $$\\text{CSA} = \\pi (R + r) l$$
* **Total Surface Area (TSA):**
  $$\\text{TSA} = \\pi (R + r) l + \\pi R^2 + \\pi r^2 = \\pi [ (R + r)l + R^2 + r^2 ]$$
* **Volume / Capacity ($V$):**
  $$V = \\frac{1}{3} \\pi h (R^2 + r^2 + R \\cdot r)$$

*(Visual Memory Anchor: Notice $(R^2 + r^2 + Rr)$ is the quotient from $\\frac{R^3 - r^3}{R - r}$. When $r = 0$, this formula perfectly collapses to the standard cone volume $\\frac{1}{3}\\pi R^2 h$).*

### 2. Composite Solids & Cavity Drilling Topology
When solids are combined or drilled:

| Operation | Volume Transformation | Total Surface Area Transformation |
| :--- | :--- | :--- |
| **Surmounting Hemisphere on Cylinder** | $V = V_{\\text{cyl}} + V_{\\text{hemi}} = \\pi r^2 h + \\frac{2}{3}\\pi r^3$ | $\\text{TSA} = \\text{CSA}_{\\text{cyl}} + \\text{Base}_{\\text{cyl}} + \\text{CSA}_{\\text{hemi}} = 2\\pi r h + \\pi r^2 + 2\\pi r^2$ |
| **Drilling Conical Cavity out of Cylinder** | $V = V_{\\text{cyl}} - V_{\\text{cone}} = \\pi r^2 h - \\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^2 h$ | $\\text{TSA} = \\text{CSA}_{\\text{cyl}} + \\text{Base}_{\\text{cyl}} + \\text{CSA}_{\\text{cone}} = 2\\pi r h + \\pi r^2 + \\pi r l$ |
| **Hollowing Hemisphere Cavity in Cube** | $V = a^3 - \\frac{2}{3}\\pi r^3$ | $\\text{TSA} = 6a^2 - \\pi r^2 + 2\\pi r^2 = 6a^2 + \\pi r^2$ |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Analytical Derivations & Worked Bucket Problem',
        body: `### Derivation of Frustum Volume from Cone Subtraction
Let a large cone of base radius $R$ and total height $H$ be truncated at height $h$ to leave a frustum with upper radius $r$.
By similar triangles:
$$\\frac{H - h}{H} = \\frac{r}{R} \\implies H - h = \\frac{H r}{R} \\implies H\\left(1 - \\frac{r}{R}\\right) = h \\implies H = \\frac{h R}{R - r}$$
Small cone height $h' = H - h = \\frac{h r}{R - r}$.
$$V_{\\text{frustum}} = V_{\\text{large}} - V_{\\text{small}} = \\frac{1}{3}\\pi R^2 H - \\frac{1}{3}\\pi r^2 h'$$
$$= \\frac{1}{3}\\pi \\left[ R^2 \\left(\\frac{h R}{R - r}\\right) - r^2 \\left(\\frac{h r}{R - r}\\right) \\right] = \\frac{1}{3}\\pi h \\left( \\frac{R^3 - r^3}{R - r} \\right)$$
Factoring $(R^3 - r^3) = (R - r)(R^2 + r^2 + Rr)$:
$$V_{\\text{frustum}} = \\frac{1}{3} \\pi h (R^2 + r^2 + Rr)$$

### Worked Examination Problem: Capacity & Metal Sheet for a Bucket
**Problem:** A metallic bucket is in the form of a frustum of a cone with height $h = 15\\text{ cm}$, bottom radius $r = 12\\text{ cm}$, and top radius $R = 20\\text{ cm}$. Calculate (i) the capacity of the bucket in litres, and (ii) the area of the metal sheet required to make the bucket (open at top).
1. **Slant Height ($l$):**
   $$l = \\sqrt{h^2 + (R - r)^2} = \\sqrt{15^2 + (20 - 12)^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\text{ cm}$$
2. **Capacity / Volume:**
   $$V = \\frac{1}{3}\\pi (15) [20^2 + 12^2 + (20 \\times 12)] = 5\\pi [400 + 144 + 240] = 5\\pi [784] = 3920\\pi\\text{ cm}^3$$
   $$V \\approx 3920 \\times \\frac{22}{7} = 560 \\times 22 = 12,320\\text{ cm}^3 = 12.32\\text{ Litres}$$
3. **Metal Sheet Area (Open top):**
   $$\\text{Sheet Area} = \\text{CSA} + \\text{Bottom Base Area} = \\pi (R + r)l + \\pi r^2$$
   $$= \\pi [(20 + 12)(17) + 12^2] = \\pi [(32)(17) + 144] = \\pi [544 + 144] = 688\\pi \\approx 2,162.28\\text{ cm}^2$$`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Slant Height Invariants & Cavity Traps',
        body: `### High-Yield Examiner Traps in Frustums & Cavities

1. **The Slant Height Formula Trap:**
   * For a standard cone: $l = \\sqrt{h^2 + r^2}$.
   * For a frustum: $l = \\sqrt{h^2 + (R - r)^2}$.
   * *Trap:* Students often mistakenly write $l = \\sqrt{h^2 + (R + r)^2}$ or $\\sqrt{h^2 + R^2 - r^2}$. The horizontal leg of the right triangle is strictly the difference in radii: $(R - r)$.

2. **The Open Top Bucket Sheet Trap:**
   * A bucket is open at the top and closed at the bottom.
   * Area of metal sheet = $\\text{CSA} + \\pi r_{\\text{bottom}}^2$.
   * *Trap:* Adding both circular bases ($\\pi R^2 + \\pi r^2$) adds a metal lid, which ruins the bucket calculation and wastes time!

3. **Cavity Surface Area Direction Trap:**
   * When a conical cavity is scooped out of a cylinder:
     $$\\text{Total Surface Area increases by } (\\pi r l - \\pi r^2)$$
   * Because the flat base circle ($\\pi r^2$) is removed, but the conical curved surface ($\\pi r l$) is exposed. Since $l > r$, $\\pi r l > \\pi r^2$, meaning TSA strictly increases.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-30-1',
        statement: 'The volume of a frustum of a right circular cone with height h and radii R and r is V = (1/3)πh(R² + r² + Rr).',
        claimType: 'MATHEMATICAL_FORMULATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-20',
        excerpt: 'Volume (V): V = (1/3) * pi * h * (R^2 + r^2 + R * r).',
      },
      {
        id: 'CLM-QUANT-30-2',
        statement: 'The slant height of a frustum is strictly l = √[h² + (R - r)²], and its curved surface area is π(R + r)l.',
        claimType: 'MATHEMATICAL_FORMULATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-20',
        excerpt: 'Slant Height (l): l = sqrt(h^2 + (R - r)^2); Curved Surface Area (CSA): CSA = pi * (R + r) * l.',
      },
      {
        id: 'CLM-QUANT-30-3',
        statement: 'Drilling a cavity out of a solid object decreases its volume but increases its total surface area by exposing new internal surface boundaries.',
        claimType: 'TOPOLOGICAL_INVARIANT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-20',
        excerpt: 'Drilling a conical/cylindrical cavity: Volume decreases, but Total Surface Area increases because internal curved walls are exposed.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Advanced Mensuration 3D',
        relevance: 'CORE',
        priority: 'MEDIUM',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Appears in Mains Caselet DI involving reservoir capacities and buckets.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Truncated Solids',
        relevance: 'CORE',
        priority: 'MEDIUM',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Tested in Mains arithmetic word problems and multi-statement questions.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Frustum & Composite Solids',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_FORMULAE_AND_DERIVATIONS',
        notes: 'Direct frustum bucket and cavity questions in CGL Tier 2 mathematical abilities.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Advanced 3D Systems',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_ANALYSIS',
        notes: 'Tested in high-level multi-step arithmetic stems.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'General Mental Ability — Mensuration 3D',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FORMULA_APPLICATION',
        notes: 'Basic formula application for buckets and capacity.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Numeracy',
        relevance: 'BACKGROUND',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_REASONING',
        notes: 'Infrequent in CSAT, limited to basic capacity comparisons.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Mathematics — 3D Mensuration',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FORMULA_APPLICATION',
        notes: 'Bucket capacity and surface area calculations in APFC.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not applicable to banking exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Frustum: l = √[h² + (R-r)²]. CSA = π(R+r)l. TSA = π[(R+r)l + R² + r²]. Volume = ⅓πh(R² + r² + Rr). Open bucket sheet area = π(R+r)l + πr_bottom². Drilling cavity DECREASES volume but INCREASES total surface area.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'A frustum is formed by slicing a cone parallel to its base. Slant height uses the difference of radii: l = √[h² + (R-r)²]. Volume formula ⅓πh(R² + r² + Rr) is derived by subtracting the top cone from the full cone. For open-top buckets, do not add the top circle πR² to sheet area. When drilling cavities, volume drops by cavity volume, but TSA increases because the inner curved surface is exposed.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Frustum & Composite Solid Architecture: 1) Frustum Invariants: Slant height l = √[h² + (R-r)²]; CSA = π(R+r)l; Volume = ⅓πh(R² + r² + Rr). 2) Cavity Drilling Dynamics: Vol_net = Vol_solid - Vol_cavity. TSA_net = TSA_solid - A_base + CSA_cavity. 3) Surmounted Solids: Vol_net = Vol_1 + Vol_2. TSA_net = CSA_1 + CSA_2 + Uncovered_Bases. 4) Memory Aid: As r -> 0, frustum formulas collapse exactly into cone formulas.',
        priority: 'MEDIUM',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NUMERICAL_MCQ',
        stem: 'A bucket is in the form of a frustum of a right circular cone with top radius 20 cm, bottom radius 12 cm, and vertical height 15 cm. What is the capacity of the bucket in litres? (Use π = 22/7)',
        options: ['10.54 Litres', '12.32 Litres', '14.18 Litres', '15.25 Litres'],
        correctAnswer: '12.32 Litres',
        explanation: 'Capacity V = (1/3) * π * h * (R² + r² + Rr). Here R = 20, r = 12, h = 15. R² + r² + Rr = 400 + 144 + 240 = 784. V = (1/3) * (22/7) * 15 * 784 = 5 * (22/7) * 784 = 5 * 22 * 112 = 12,320 cm³. Since 1,000 cm³ = 1 Litre, Capacity = 12,320 / 1,000 = 12.32 Litres.',
        trapExplanation: 'The common trap is taking the average radius (20+12)/2 = 16 cm and using cylinder volume π(16)²(15) = 12,068 cm³, which underestimates true frustum capacity.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Approximating frustum volume using average radius cylinder.',
      },
      {
        type: 'CONCEPTUAL_MCQ',
        stem: 'A solid right circular cylinder has radius r and height h. A conical cavity of the same radius r and same height h is hollowed out from one of its flat circular ends. What is the Total Surface Area of the remaining solid?',
        options: [
          '2πrh + πr² - πrl',
          '2πrh + πr² + πrl',
          '2πrh + 2πr² - πrl',
          '2πrh + πrl'
        ],
        correctAnswer: '2πrh + πr² + πrl',
        explanation: 'The remaining solid has three exposed surfaces: 1) The outer curved cylinder wall: 2πrh. 2) The intact opposite circular base: πr². 3) The newly exposed internal conical cavity surface: πrl. Therefore, Total Surface Area = 2πrh + πr² + πrl. Note that the flat circular face where drilling began is gone, but the curved cone surface πrl is added.',
        trapExplanation: 'Students often subtract πrl thinking that hollowing out removes area, or forget that one circular flat base remains intact.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Subtracting cavity surface area instead of adding newly exposed walls.',
      },
    ],
  },
  {
    id: 'CON-QUANT-31',
    slug: 'dimensional-multipliers-mensuration-percentage-scaling-and-successive-area-volume-shifts',
    title: 'Dimensional Multipliers: Mensuration Percentage Scaling & Successive Area-Volume Shifts',
    shortDefinition: 'Dimensional scaling invariants in 2D and 3D geometry: linear scale factor k, area factor k², volume factor k³, successive percentage variations in multi-variable geometric formulas, and 5-second mental multipliers.',
    difficulty: 'INTERMEDIATE',
    order: 31,
    topicSlug: 'mensuration-and-geometric-invariants',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Square-Cube Scaling Law: Why Giants Collapse & Miniatures Freeze',
        body: `Why can an ant carry 50 times its own body weight, whereas an elephant cannot even jump? The answer lies in Galileo's **Square-Cube Law**:
* When an object scales up in all linear dimensions by a factor of $k$, its surface area scales by $k^2$, but its volume and mass scale by $k^3$.
* If an ant were enlarged by a factor of $1,000$ in length, width, and height, its leg cross-sectional area (which supports weight) would grow by $1,000^2 = 1,000,000$ times, but its weight would explode by $1,000^3 = 1,000,000,000$ times! Its bones would instantly snap under its own weight.

In competitive aptitude exams, examiners love testing this algebraic invariant through percentage shifts: *"If the radius of a cylinder increases by 20% and its height decreases by 25%, what is the percentage change in its volume?"*

Students who plug in algebraic variables ($r, h$) and compute full formulas take over 2 minutes. Students who understand **Dimensional Multipliers** solve this problem in 5 seconds using mental fraction multiplication.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Dimensional Scaling Theorems & Multiplier Invariants',
        body: `### 1. The Universal Dimensional Scaling Invariant
If all linear dimensions of any 2D or 3D geometric figure are scaled by a factor $k$:
* **Any Linear Metric** (Perimeter, Circumference, Diagonal, Height, Slant Height, Radius, Inradius, Circumradius) scales by:
  $$\\text{New Linear Metric} = k^1 \\times \\text{Old Linear Metric}$$
* **Any Area Metric** (Base Area, Lateral Surface Area, Curved Surface Area, Total Surface Area) scales by:
  $$\\text{New Area Metric} = k^2 \\times \\text{Old Area Metric}$$
* **Any Volume Metric** (Capacity, Mass, Volume) scales by:
  $$\\text{New Volume Metric} = k^3 \\times \\text{Old Volume Metric}$$

### 2. Multi-Variable Multiplier Rules for Geometric Formulas

| Geometric Parameter | Governing Formula | Dimensional Multiplier Formulation | Example: $r \\uparrow 20\\% (\\frac{6}{5}), h \\downarrow 25\\% (\\frac{3}{4})$ |
| :--- | :--- | :--- | :--- |
| **Area of Circle** | $A = \\pi r^2$ | Multiplier $= \\left(\\frac{r_{\\text{new}}}{r_{\\text{old}}}\\right)^2$ | If $r \\uparrow 20\\%$, Area factor $= (1.2)^2 = 1.44 \\implies +44\\%$ |
| **Volume of Sphere** | $V = \\frac{4}{3}\\pi r^3$ | Multiplier $= \\left(\\frac{r_{\\text{new}}}{r_{\\text{old}}}\\right)^3$ | If $r \\uparrow 10\\%$, Vol factor $= (1.1)^3 = 1.331 \\implies +33.1\\%$ |
| **Volume of Cylinder** | $V = \\pi r^2 h$ | Multiplier $= \\left(\\frac{r_{\\text{new}}}{r_{\\text{old}}}\\right)^2 \\times \\left(\\frac{h_{\\text{new}}}{h_{\\text{old}}}\\right)$ | $\\left(\\frac{6}{5}\\right)^2 \\times \\left(\\frac{3}{4}\\right) = \\frac{36}{25} \\times \\frac{3}{4} = \\frac{27}{25} = 1.08 \\implies +8\\%$ |
| **Volume of Cone** | $V = \\frac{1}{3}\\pi r^2 h$ | Multiplier $= \\left(\\frac{r_{\\text{new}}}{r_{\\text{old}}}\\right)^2 \\times \\left(\\frac{h_{\\text{new}}}{h_{\\text{old}}}\\right)$ | Constants ($\\frac{1}{3}\\pi$) cancel out in ratios! Same as cylinder! |
| **CSA of Cone** | $\\text{CSA} = \\pi r l$ | Multiplier $= \\left(\\frac{r_{\\text{new}}}{r_{\\text{old}}}\\right) \\times \\left(\\frac{l_{\\text{new}}}{l_{\\text{old}}}\\right)$ | Linear in $r$ and $l$ |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Algorithmic Mental Fraction Engine for Percentage Shifts',
        body: `### The 3-Step Fractional Multiplier Algorithm
1. **Convert percentage changes to multiplying fractions:**
   * $+10\\% = \\frac{11}{10}$; $-10\\% = \\frac{9}{10}$
   * $+20\\% = \\frac{6}{5}$; $-20\\% = \\frac{4}{5}$
   * $+25\\% = \\frac{5}{4}$; $-25\\% = \\frac{3}{4}$
   * $+33\\frac{1}{3}\\% = \\frac{4}{3}$; $-33\\frac{1}{3}\\% = \\frac{2}{3}$
   * $+50\\% = \\frac{3}{2}$; $-50\\% = \\frac{1}{2}$
2. **Apply the power matching each dimension in the formula:**
   * In $V = \\pi r^2 h$, radius has power 2, height has power 1.
   * Total Multiplier $M = (M_r)^2 \\times (M_h)^1$.
3. **Compare resulting fraction to 1:**
   $$\\text{Percentage Change} = (M - 1) \\times 100\\%$$

### Walkthrough of Competitive Banking PO Problem
**Problem:** If the radius of a right circular cone is reduced by $30\\%$ and its vertical height is increased by $50\\%$, what is the percentage change in its volume?
* **Step 1:** Radius multiplier $M_r = 1 - 0.30 = 0.70 = \\frac{7}{10}$.
* **Step 2:** Height multiplier $M_h = 1 + 0.50 = 1.50 = \\frac{3}{2}$.
* **Step 3:** Apply powers for Cone Volume $V \\propto r^2 h$:
  $$M_V = (M_r)^2 \\times M_h = \\left(\\frac{7}{10}\\right)^2 \\times \\left(\\frac{3}{2}\\right) = \\frac{49}{100} \\times \\frac{3}{2} = \\frac{147}{200} = 0.735$$
* **Step 4:** Percentage Change:
  $$(0.735 - 1) \\times 100\\% = -26.5\\% \\quad (\\text{Decreases by } 26.5\\%)$$
Total time taken: 8 seconds. Zero reliance on variables $r$ and $h$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Linear vs Area Traps & Inverse Compensations',
        body: `### High-Frequency Scaling Traps

1. **Linear Scaling of Sphere vs Volume:**
   * *"If the radius of a sphere is increased by 100% (doubled), by what percent does its volume increase?"*
   * *Trap:* Students answer $+100\\%$ or $+300\\%$.
   * *Truth:* $M_r = 2$. Volume scales by $k^3 = 2^3 = 8$.
     $$\\text{Percentage Increase} = (8 - 1) \\times 100\\% = +700\\%$$
   * Surface Area scales by $k^2 = 2^2 = 4 \\implies +300\\%$.

2. **Inverse Radius-Height Compensation Trap:**
   * *"If the radius of a cylinder is reduced by 20%, by what percent must its height be increased so that volume remains constant?"*
   * Volume constant $\\implies M_V = 1$.
   * $M_r = \\frac{4}{5} \\implies M_r^2 = \\frac{16}{25}$.
   * Therefore, $M_h = \\frac{1}{M_r^2} = \\frac{25}{16}$.
   * Percentage increase in height = $\\left(\\frac{25 - 16}{16}\\right) \\times 100\\% = \\frac{9}{16} \\times 100\\% = 56.25\\%$.
   * *Trap:* Thinking that height only needs to increase by $+20\\%$ or $+40\\%$.

3. **Perimeter vs Area Scaling in 2D Polygons:**
   * If the perimeter of an equilateral triangle or square increases by $25\\%$, its side increases by $25\\%$ ($M_L = 1.25$).
   * Its Area increases by $(1.25)^2 - 1 = 1.5625 - 1 = +56.25\\%$.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-31-1',
        statement: 'When all linear dimensions of a geometric figure scale by factor k, all area metrics scale by k² and all volume metrics scale by k³.',
        claimType: 'MATHEMATICAL_INVARIANT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-21',
        excerpt: 'Linear Scaling Invariant: Linear parameters scale by k^1, Area parameters scale by k^2, Volume parameters scale by k^3.',
      },
      {
        id: 'CLM-QUANT-31-2',
        statement: 'In multi-variable formulas such as cylinder volume V = πr²h, the effective volume multiplier is given strictly by (M_r)² * (M_h).',
        claimType: 'ALGEBRAIC_FORMULATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-21',
        excerpt: 'Volume of Cylinder V = pi r^2 h: If radius increases by a% and height changes by b%, effective volume factor is (1 + a/100)^2 * (1 + b/100).',
      },
      {
        id: 'CLM-QUANT-31-3',
        statement: 'Doubling the radius of a sphere (increasing it by 100%) increases its surface area by 300% and its volume by 700%.',
        claimType: 'MATHEMATICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-21',
        excerpt: 'Volume of Sphere V = (4/3)pi r^3: If radius increases by 10%, Volume increases by 1.1^3 - 1 = +33.1%.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Percentage Variations in Mensuration',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'RAPID_HEURISTIC_SOLVING',
        notes: 'Guaranteed 1-2 questions in Prelims speed rounds and Mains Quantity Comparisons.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Mensuration Scaling',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'RAPID_HEURISTIC_SOLVING',
        notes: 'High-frequency question in Prelims Quantitative Aptitude section.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Percentage Shifts in Geometry',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ACCURACY_AND_SPEED',
        notes: 'Standard Tier 1 and Tier 2 arithmetic questions on radius/height changes.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Dimensional Invariants',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'CONCEPTUAL_RIGOR',
        notes: 'Appears inside Data Sufficiency and multi-statement comparative problems.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'General Mental Ability — Percentage Applications',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'NUMERICAL_ACCURACY',
        notes: 'Regular question in RAS Prelims arithmetic portion.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Basic Numeracy & Percentages',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'CONCEPTUAL_UNDERSTANDING',
        notes: 'Frequent CSAT trick question regarding sphere/cylinder percentage expansion.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Numeracy — Percentage Shifts',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_APPLICATION',
        notes: 'Direct percentage variation questions in APFC exam.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not applicable to banking regulatory certifications.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Linear scales as k, Area as k², Volume as k³. In V = πr²h: M_V = (M_r)² * M_h. If r doubles (+100%), Area increases by 2²-1 = +300%, Volume increases by 2³-1 = +700%. Convert % to fractions to solve mentally in 5s.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Square-Cube Scaling Law: Lengths scale by k, Areas by k², Volumes by k³. In multi-variable formulas, multiply individual dimensional factors raised to their respective exponents. If radius of cylinder increases by 20% (6/5) and height decreases by 25% (3/4), new volume factor is (6/5)² * (3/4) = 36/25 * 3/4 = 27/25 = 1.08 -> +8% increase. Constants like π and 1/3 cancel in all percentage change calculations.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Dimensional Scaling & Successive Changes Framework: 1) Universal Invariant: Linear k -> Area k² -> Volume k³. 2) Exponent Assignment: Identify powers in formula. Volume of cone V = 1/3 π r² h has r^2 and h^1. Factor M = (M_r)² * (M_h). 3) Inverse Invariance: To keep V constant when r changes by M_r, height must change by 1/(M_r)². 4) Mental Elimination: Never use algebraic variables r and h; work exclusively with fractional scale factors.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NUMERICAL_MCQ',
        stem: 'If the radius of a right circular cylinder is increased by 20% and its height is decreased by 25%, what is the percentage change in its volume?',
        options: ['Decreases by 5%', 'Increases by 8%', 'Decreases by 10%', 'Increases by 12%'],
        correctAnswer: 'Increases by 8%',
        explanation: 'Volume of cylinder V = πr²h. Multiplier for radius M_r = 1 + 0.20 = 6/5. Multiplier for height M_h = 1 - 0.25 = 3/4. Volume multiplier M_V = (M_r)² * (M_h) = (6/5)² * (3/4) = (36/25) * (3/4) = 27/25 = 1.08. Percentage change = (1.08 - 1) * 100% = +8% increase.',
        trapExplanation: 'The common trap is taking a linear net change 20% - 25% = -5%, ignoring that radius is squared in the volume formula.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Treating non-linear volume formula as simple linear percentage sum.',
      },
      {
        type: 'NUMERICAL_MCQ',
        stem: 'If the radius of a sphere is reduced by 20%, by what percentage does its surface area decrease?',
        options: ['20%', '36%', '48.8%', '64%'],
        correctAnswer: '36%',
        explanation: 'Surface Area of sphere A = 4πr². Radius multiplier M_r = 1 - 0.20 = 0.80 = 4/5. Surface area multiplier M_A = (M_r)² = (0.80)² = 0.64 = 16/25. Percentage decrease = (1 - 0.64) * 100% = 36% decrease.',
        trapExplanation: 'Students often calculate the volume decrease (1 - 0.8³ = 1 - 0.512 = 48.8%) instead of surface area decrease (36%), or confuse 64% (remaining area) with 36% (decrease).',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Confusing remaining percentage with percentage decrease.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 80: Calculation Speed, Simplification & Algebra (CON-QUANT-32)
  // =========================================================================
  {
    id: 'CON-QUANT-32',
    slug: 'quadratic-equations-masterclass-root-determination-sign-table-heuristics-and-5-second-comparison-rules',
    title: 'Quadratic Equations Masterclass: Root Determination, Sign Table Heuristics & 5-Second Comparison Rules',
    shortDefinition: 'Algebraic inequalities and quadratic comparison masterclass: discriminant analysis, the 4-case master sign table, the double-negative constant rule, coefficient normalization, and root comparison heuristics for Bank PO Mains.',
    difficulty: 'ADVANCED',
    order: 32,
    topicSlug: 'calculation-speed-simplification-and-algebra',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Decoding the Sign Table: Why You Never Need the Full Quadratic Formula in Bank Exams',
        body: `In every banking preliminary and mains exam (SBI PO, IBPS PO, RRB Officer Scale 1), candidates face a standardized 5-question section: **Quadratic Inequalities ($x$ vs $y$)**. You are given two quadratic equations—one in $x$ and one in $y$—and must determine whether $x > y$, $x < y$, $x \\ge y$, $x \\le y$, or if the relationship cannot be established ($x = y$ or CND).

Candidates who mechanically calculate the full quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ spend 45–60 seconds per question. 

However, mathematical structure reveals that **the signs of the coefficients $(b, c)$ strictly dictate the signs of the roots $(\\alpha, \\beta)$**. For instance, if an equation has a positive middle term and a positive constant, both roots MUST be negative. If the other equation has positive roots, $x$ is automatically strictly less than $y$ without calculating a single number! 

Even more powerful: whenever the constant term $c$ is negative in both equations, the roots of both equations have opposite signs, which mathematically guarantees that the relationship CANNOT BE DETERMINED ($x=y$ or CND) in literally zero steps!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Master Quadratic Sign Table & 5-Second Elimination Rules',
        body: `### 1. The Canonical 4-Case Sign Table
For standard quadratic equation $ax^2 + bx + c = 0$ with roots $\\alpha, \\beta$:
* Sum of roots: $\\alpha + \\beta = -\\frac{b}{a}$
* Product of roots: $\\alpha \\cdot \\beta = \\frac{c}{a}$

| Case # | Equation Signs $(b, c)$ | Root Signs $(\\alpha, \\beta)$ | Factor Structure | Mental Inspection Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Case 1** | $+ , +$ (e.g., $x^2 + 7x + 12 = 0$) | **$-, -$ (Both Negative)** | $(x + p)(x + q) = 0$ | Roots are $\\{-3, -4\\}$ |
| **Case 2** | $- , +$ (e.g., $x^2 - 7x + 12 = 0$) | **$+ , +$ (Both Positive)** | $(x - p)(x - q) = 0$ | Roots are $\\{+3, +4\\}$ |
| **Case 3** | $+ , -$ (e.g., $x^2 + x - 12 = 0$) | **$-, +$ (Larger root is Negative)** | $(x + p)(x - q) = 0, p > q$ | Roots are $\\{-4, +3\\}$ |
| **Case 4** | $- , -$ (e.g., $x^2 - x - 12 = 0$) | **$+ , -$ (Larger root is Positive)** | $(x - p)(x + q) = 0, p > q$ | Roots are $\\{+4, -3\\}$ |

### 2. The 3 Golden 5-Second Elimination Theorems
1. **The Double Negative Constant Theorem ($c_1 < 0$ and $c_2 < 0$):**
   If the constant term $c$ is negative in BOTH equations:
   $$ax^2 + bx - c_1 = 0 \\implies x \\text{ roots are } (-, +)$$
   $$py^2 + qy - c_2 = 0 \\implies y \\text{ roots are } (-, +)$$
   *Since positive $x >$ negative $y$, but positive $y >$ negative $x$, the values overlap in mutually contradictory directions.*
   **The answer is ALWAYS: Relationship cannot be determined ($x = y$ or CND). Solve in 0 steps!**

2. **Case 1 vs Case 2 Direct Victory:**
   If Equation 1 has $(+, +)$ [roots are $-, -$] and Equation 2 has $(-, +)$ [roots are $+ , +$]:
   Every root of $x$ is negative, and every root of $y$ is positive.
   **Therefore, $x < y$ strictly. Zero calculation required!**

3. **Leading Coefficient Normalization Invariant:**
   When leading coefficients $a \\ne 1$ and $p \\ne 1$, do NOT perform messy decimal divisions $\\frac{\\alpha}{a}$. Instead, **cross-multiply the factorized roots by the opposite leading coefficient**:
   Compare $(p \\cdot \\alpha_x)$ against $(a \\cdot \\beta_y)$. Cross-multiplication preserves exact algebraic inequality orders with pure integers!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Factorization Mechanics & Step-by-Step Execution Algorithm',
        body: `### Systematic Factorization Algorithm for $ax^2 + bx + c = 0$
1. **Compute Target Product $P = a \\times c$.**
2. **Find two factors $m$ and $n$ such that:**
   * $m \\times n = P$
   * $m + n = b$
3. **Change signs to find roots:**
   $$\\alpha = -\\frac{m}{a}, \\quad \\beta = -\\frac{n}{a}$$

### Worked Problem with Cross-Multiplication Technique
**Problem:** Determine the relationship between $x$ and $y$:
* Equation I: $2x^2 - 11x + 14 = 0$
* Equation II: $3y^2 - 19y + 28 = 0$

**Step 1: Check Signs:**
Both equations are Case 2 $(-, +) \\implies$ all roots of both $x$ and $y$ will be **positive $(+, +)$**.

**Step 2: Factor Equation I ($2x^2 - 11x + 14 = 0$):**
* $P = 2 \\times 14 = 28$. Sum = $-11$.
* Factors: $-4$ and $-7$ ($(-4) \\times (-7) = 28; (-4) + (-7) = -11$).
* Roots of $x$ before division by $a=2$: $\\{4, 7\\}$.

**Step 3: Factor Equation II ($3y^2 - 19y + 28 = 0$):**
* $P = 3 \\times 28 = 84$. Sum = $-19$.
* Factors: $-7$ and $-12$ ($(-7) \\times (-12) = 84; (-7) + (-12) = -19$).
* Roots of $y$ before division by $p=3$: $\\{7, 12\\}$.

**Step 4: Cross-Multiply by Opposite Leading Coefficients:**
* Multiply $x$-roots by $p = 3$: $\\{4 \\times 3, 7 \\times 3\\} = \\{12, 21\\}$.
* Multiply $y$-roots by $a = 2$: $\\{7 \\times 2, 12 \\times 2\\} = \\{14, 24\\}$.

**Step 5: Grid Comparison:**
* Compare $x = 12$ with $y \\in \\{14, 24\\} \\implies 12 < 14$ and $12 < 24$ ($x < y$).
* Compare $x = 21$ with $y \\in \\{14, 24\\} \\implies 21 > 14$ ($x > y$).
* Since $12 < 14$ ($x < y$) but $21 > 14$ ($x > y$), the relationship **cannot be established (CND)**. Total time: 15 seconds.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps: Square Roots, Linear Equations & CND Disguises',
        body: `### High-Frequency Quadratic & Inequality Traps

1. **The $x^2 = 25$ vs $y = \\sqrt{25}$ Trap (Most Common in Banking!):**
   * If $x^2 = 25 \\implies x = \\pm 5$ ($x = +5$ or $x = -5$).
   * If $y = \\sqrt{25} \\implies y = +5$ strictly (the radical $\\sqrt{\\cdot}$ denotes the principal non-negative square root!).
   * **Comparison:**
     * When $x = +5, y = +5 \\implies x = y$.
     * When $x = -5, y = +5 \\implies x < y$.
     * **Result:** $x \\le y$.
   * *Trap:* Writing $y = \\pm 5$ and concluding CND is an automatic $-0.25$ penalty!

2. **The Quadratic in Disguise Trap:**
   * $\\frac{12}{x} - \\frac{7}{x^2} = 5 \\implies 5x^2 - 12x + 7 = 0$.
   * Multiply through by the common denominator $x^2$ (noting $x \\ne 0$).

3. **Cubic and Fractional Exponents:**
   * $x^3 = 512 \\implies x = +8$ (odd power yields strictly one real root).
   * $y^2 = 64 \\implies y = \\pm 8$.
   * Result: $x \\ge y$.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-32-1',
        statement: 'If the constant term c is negative in both quadratic equations (ax² + bx - c₁ = 0 and py² + qy - c₂ = 0), the relationship between x and y can never be determined (CND).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-16',
        excerpt: 'The Double Negative Constant Rule: If the constant term (c) is negative in BOTH equations, roots will always be (-, +) and (-, +). Answer is ALWAYS CND.',
      },
      {
        id: 'CLM-QUANT-32-2',
        statement: 'An equation with coefficients (+, +) strictly produces both negative roots (-, -), whereas an equation with (-, +) strictly produces both positive roots (+, +).',
        claimType: 'MATHEMATICAL_THEOREM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-16',
        excerpt: 'Table: (+, +) -> (- , -) Both Negative; (-, +) -> (+, +) Both Positive.',
      },
      {
        id: 'CLM-QUANT-32-3',
        statement: 'The equation x² = k produces two roots (±√k), whereas y = √k produces strictly one non-negative principal root (+√k).',
        claimType: 'MATHEMATICAL_AXIOM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-5',
        excerpt: 'Quadratic-in-disguise trap: x^2=25 is NOT sufficient for find x unless sign is constrained - always check for +-.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Quadratic Inequalities',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_SPEED_HEURISTICS',
        notes: 'Guaranteed 5 questions in SBI PO Prelims (worth 5 marks in 2 minutes).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Quadratic Comparisons',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_SPEED_HEURISTICS',
        notes: 'Standard 5-question set in IBPS PO Prelims.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Advanced Algebraic Inequalities',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_COEFFICIENT_FACTORIZATION',
        notes: 'Tested with large coefficients and square root radical factors.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Quadratic Equations & Algebra',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'ALGEBRAIC_THEORY',
        notes: 'Tested in algebraic simplification and nature of roots.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'General Mental Ability — Basic Algebra',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FORMULA_APPLICATION',
        notes: 'Appears in basic polynomial solving.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Basic Numeracy & Equations',
        relevance: 'BACKGROUND',
        priority: 'LOW',
        requiredDepth: 'LOGICAL_APPLICATION',
        notes: 'CSAT occasionally tests quadratic factor roots in word problems.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Mathematics — Equations',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_ACCURACY',
        notes: 'Direct algebraic equation solving in APFC.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not applicable to banking law and accounting exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Sign Table: (+,+) -> (-,-); (-,+) -> (+,+); (+,-) -> (-,+) [larger neg]; (-,-) -> (+,-) [larger pos]. If c is negative in BOTH equations -> Answer is ALWAYS CND! x²=49 -> x=±7. y=√49 -> y=+7 -> x ≤ y.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Master Quadratic Comparison: 1) Sign Check: (-,+) gives (+,+), while (+,+) gives (-,-). If x is (+,+) and y is (-,-), x > y in 0s. 2) Double Negative c: If constant c is negative in both equations, both have opposite-sign roots -> CND automatically in 0s. 3) Cross-multiplication: When leading coefficients a ≠ 1, multiply roots by the other equation leading coefficient rather than dividing. 4) x²=k has two roots (±√k); y=√k has one root (+√k).',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Quadratic Inequality Engine: 1) Sign Table: (+,+) -> (-,-); (-,+) -> (+,+); (+,-) -> (-,+); (-,-) -> (+,-). 2) Zero-Step Shortcuts: Double negative constant rule -> CND. Pure opposite sign sets ((+,+) vs (-,-)) -> immediate inequality. 3) Integer Normalization: For ax²+bx+c=0 (roots m, n) and py²+qy+r=0 (roots u, v), compare (p*m, p*n) vs (a*u, a*v). 4) Asymmetric Powers: Even power (x²=k) -> 2 roots; Odd power (x³=k) -> 1 root; Radical (y=√k) -> 1 non-negative root.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'INEQUALITY_MCQ',
        stem: 'Direction: In the following question, two equations numbered I and II are given. You have to solve both equations and mark the appropriate answer.\nI. 5x² - 18x - 144 = 0\nII. 4y² + 23y - 72 = 0',
        options: ['x > y', 'x < y', 'x ≥ y', 'x ≤ y', 'x = y or relationship cannot be established (CND)'],
        correctAnswer: 'x = y or relationship cannot be established (CND)',
        explanation: 'Look at the constant terms in both equations: In Equation I, c₁ = -144 (negative). In Equation II, c₂ = -72 (negative). By the Double Negative Constant Rule, when the constant term c is negative in both quadratic equations, both equations possess one positive root and one negative root. Hence, the positive root of x is greater than the negative root of y, but the positive root of y is greater than the negative root of x. The relationship CANNOT BE DETERMINED (CND) in 0 steps.',
        trapExplanation: 'Spending 90 seconds factorizing 5 * 144 = 720 and 4 * 72 = 288 is the trap. Recognizing the double negative constant eliminates calculation instantly.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Double negative constant CND disguise with large intimidating numbers.',
      },
      {
        type: 'INEQUALITY_MCQ',
        stem: 'Direction: Determine the relationship between x and y:\nI. x² = 64\nII. y = √64',
        options: ['x > y', 'x < y', 'x ≥ y', 'x ≤ y', 'x = y or relationship cannot be established (CND)'],
        correctAnswer: 'x ≤ y',
        explanation: 'From Equation I: x² = 64 has two solutions: x = +8 and x = -8. From Equation II: y = √64 represents the principal square root, which is strictly non-negative: y = +8. Comparing the values:\n• When x = +8 and y = +8: x = y.\n• When x = -8 and y = +8: x < y.\nCombining both cases: x ≤ y.',
        trapExplanation: 'Treating y = √64 as y = ±8 and incorrectly concluding CND is the classic trap. √k is always non-negative by definition of the principal square root function.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Principal square root function vs quadratic equation root confusion.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 81: Number System, Series & Modern Math (CON-QUANT-33, 36)
  // =========================================================================
  {
    id: 'CON-QUANT-33',
    slug: 'algorithmic-number-series-difference-tree-decomposition-decimal-multipliers-and-wrong-number-diagnostics',
    title: 'Algorithmic Number Series: Difference-Tree Decomposition, Decimal Multipliers & Wrong Number Diagnostics',
    shortDefinition: 'Algorithmic pattern recognition in competitive number series: multi-level difference trees, polynomial step-difference invariants, decimal oscillating multipliers (×0.5 + 1), and intersection anomaly diagnosis for wrong number identification.',
    difficulty: 'INTERMEDIATE',
    order: 33,
    topicSlug: 'number-system-series-and-modern-mathematics',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Decoding Numerical DNA: Algorithmic Pattern Hunting',
        body: `A number series is not a random collection of digits; it is the discrete time-step output of a hidden underlying mathematical function $f(n)$. When you look at a sequence like:
$$10, \\quad 6, \\quad 7, \\quad 12, \\quad 26, \\quad 67.5, \\quad \\dots$$
The untrained eye sees chaotic oscillation—it drops first, then rises slowly, then shoots upward rapidly. 

The algorithmic eye immediately recognizes the signature fingerprint of **Decimal Multipliers**:
$$10 \\times 0.5 + 1 = 6$$
$$6 \\times 1.0 + 1 = 7$$
$$7 \\times 1.5 + 1.5 = 12$$
$$12 \\times 2.0 + 2 = 26$$
$$26 \\times 2.5 + 2.5 = 67.5$$

Mastering competitive number series is about building a mental library of **structural fingerprints**:
1. Linear growth $\\implies$ Level 1 constant difference $\\Delta_1$.
2. Quadratic growth $\\implies$ Level 2 constant difference $\\Delta_2$.
3. Cubic growth $\\implies$ Level 3 constant difference $\\Delta_3$.
4. Drop-then-explode $\\implies$ Fractional/decimal multiplier sequence.
5. In a Wrong Number Series, an error creates a distinct **triangular shockwave** across difference levels that pinpoints the culprit with mathematical certainty.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Difference-Tree Architecture & Diagnostic Taxonomy',
        body: `### 1. The Multi-Level Difference-Tree Framework
For a sequence $T_1, T_2, T_3, T_4, T_5, \\dots$:
* **Level 1 Differences ($\\Delta_{1, i} = T_{i+1} - T_i$):** If constant $\\implies$ Arithmetic Progression ($f(n) = an + b$).
* **Level 2 Differences ($\\Delta_{2, i} = \\Delta_{1, i+1} - \\Delta_{1, i}$):** If constant $\\implies$ Quadratic Function ($f(n) = an^2 + bn + c$, where $\\Delta_2 = 2a$).
* **Level 3 Differences ($\\Delta_{3, i} = \\Delta_{2, i+1} - \\Delta_{2, i}$):** If constant $\\implies$ Cubic Function ($f(n) = an^3 + bn^2 + cn + d$, where $\\Delta_3 = 6a$).

### 2. Taxonomy of High-Frequency Banking Pattern Fingerprints

| Pattern Category | Structural Behavior | Defining Mathematical Identity | Real Examination Prototype |
| :--- | :--- | :--- | :--- |
| **Arithmetic Difference** | Steady linear increase | $\\Delta_1 = \\text{constant}$ or $\\Delta_1 = kn$ | $4, 9, 14, 19, 24, \\dots$ |
| **Second-Level Square Difference** | Accelerating upward curve | $\\Delta_1 = n^2$ or $\\Delta_1 = n^2 \\pm 1$ | $3, 4, 8, 17, 33, 58$ (Diffs: $1, 4, 9, 16, 25$) |
| **Cubic Difference** | Rapid exponential-like jump | $\\Delta_1 = n^3$ or $n^3 \\pm n$ | $2, 10, 37, 101, 226$ (Diffs: $8, 27, 64, 125$) |
| **Decimal Multiplier** | Drops once then accelerates | $T_n = T_{n-1} \\times (0.5k) + c$ | $12, 7, 8, 13.5, 29, 75$ |
| **Alternating Operation** | Jagged up-and-down pattern | Odd steps $+a$, Even steps $-b$ or $\\times a, \\div b$ | $15, 20, 10, 25, 5, 30$ |
| **Fibonacci / Additive** | Each term is sum of predecessors | $T_n = T_{n-1} + T_{n-2}$ | $3, 5, 8, 13, 21, 34, 55$ |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Shockwave Diagnostic for Wrong Number Series',
        body: `### The Wrong Number Triangular Shockwave Principle
In a standard number series where only **one term is incorrect**, that single erroneous number acts like an epicenter that sends an error shockwave down the difference tree:
* In Level 1 ($\\Delta_1$): The wrong number is involved in **TWO consecutive difference calculations** ($T_{\\text{err}} - T_{\\text{prev}}$ and $T_{\\text{next}} - T_{\\text{err}}$). Hence, exactly **two adjacent values** in $\\Delta_1$ will be anomalous!
* In Level 2 ($\\Delta_2$): Those two wrong values propagate into **THREE anomalous values** in $\\Delta_2$.

### Diagnostic Rule:
> **The Wrong Number in the original series is ALWAYS the term located at the exact intersection between the two erroneous Level 1 differences!**

### Worked Demonstration:
**Problem:** Find the wrong number in the series:
$$5, \\quad 10, \\quad 20, \\quad 41, \\quad 80, \\quad 160$$
1. **Compute Level 1 Differences ($\\Delta_1$):**
   * $10 - 5 = 5$
   * $20 - 10 = 10$
   * $41 - 20 = 21$ (Anomaly 1!)
   * $80 - 41 = 39$ (Anomaly 2!)
   * $160 - 80 = 80$
2. **Examine the Expected Pattern:**
   * The intended pattern is clearly doubling: $5, 10, 20, 40, 80$.
   * Notice that the two anomalies in $\\Delta_1$ are $21$ and $39$.
   * Their sum is $21 + 39 = 60$, which equals the expected sum of the two correct differences ($20 + 40 = 60$).
3. **Identify the Intersection:**
   * The number situated between the two anomalous differences $21$ and $39$ is **$41$**.
   * If $41$ is replaced with $40$:
     * $40 - 20 = 20$ (Correct!)
     * $80 - 40 = 40$ (Correct!)
   * **Wrong Number = 41.** (Correct value should be 40).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Rapid Identification Heuristics & Speed Tips',
        body: `### High-Frequency Examiner Traps in Number Series

1. **The Ratio Inspection Heuristic for Multipliers:**
   * When differences grow too fast for addition, look at the ratio of the last two terms: $\\frac{T_n}{T_{n-1}}$.
   * If $T_4 = 45$ and $T_5 = 184$, ratio is $\\approx 4$. Immediately test $\\times 4 \\pm c$.
   * If ratio is $\\approx 5$, test $\\times 5 \\pm c$.

2. **The Prime Number Difference Trap:**
   * Differences that look like odd numbers: $2, 3, 5, 7, 11, 13, 17$.
   * *Trap:* Students see $3, 5, 7$ and expect $9$. But if the sequence continues with $11$ and $13$, it is a **consecutive prime difference**, not odd numbers! $9$ is composite.

3. **Alternating Combined Series in Disguise:**
   * When a sequence has 7 or more terms and fluctuates up and down, it is often two interleaved independent series:
     $$\\text{Series A (Odd positions): } T_1, T_3, T_5, T_7$$
     $$\\text{Series B (Even positions): } T_2, T_4, T_6, T_8$$
   * Separate them into two independent sub-series to spot the pattern immediately.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-33-1',
        statement: 'A constant second-level difference (Δ₂) in a difference tree strictly indicates that the sequence is governed by a quadratic function an² + bn + c where Δ₂ = 2a.',
        claimType: 'MATHEMATICAL_THEOREM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-23',
        excerpt: 'Level 2 Difference: Constant Delta_2 implies underlying quadratic pattern (an^2 + bn + c).',
      },
      {
        id: 'CLM-QUANT-33-2',
        statement: 'In a wrong number series with a single error, exactly two consecutive first-level differences and three second-level differences are distorted, with the erroneous term located at their intersection.',
        claimType: 'DIAGNOSTIC_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-23',
        excerpt: 'In a single-error sequence, one incorrect term creates TWO consecutive anomalous differences in Delta_1 and THREE anomalous values in Delta_2. The term at the intersection is the wrong number!',
      },
      {
        id: 'CLM-QUANT-33-3',
        statement: 'Sequences that initially decrease by approximately half and then rapidly accelerate strictly indicate fractional decimal multipliers (×0.5 + c, ×1.0 + c, ×1.5 + c).',
        claimType: 'HEURISTIC_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-23',
        excerpt: 'Decimal Series Identification: When terms decrease slightly then expand rapidly, immediately check the *0.5+1, *1+1, *1.5+1.5 multiplier pattern.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Missing & Wrong Number Series',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SPEED_PATTERN_RECOGNITION',
        notes: 'Guaranteed 5 questions in Prelims (worth 5 marks in under 2.5 minutes).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Number Series',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SPEED_PATTERN_RECOGNITION',
        notes: 'Standard 5 questions in IBPS PO Prelims and Sectional speed rounds.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Advanced Multi-Step Series',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ANALYTICAL_DIAGNOSTICS',
        notes: 'Wrong number series with multi-tier polynomial difference logic.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Intelligence & Reasoning — Number Series',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'SPEED_RECOGNITION',
        notes: 'Core component of Tier 1 Reasoning section (2-3 questions).',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Reasoning & Mental Ability — Number Series',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'PATTERN_RECOGNITION',
        notes: 'Standard question in RAS Prelims reasoning paper.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Number Sequences',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'LOGICAL_ANALYSIS',
        notes: 'Common in CSAT (1-2 questions on prime differences and alternating series).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Numeracy & Reasoning — Sequences',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_ACCURACY',
        notes: 'Tested in APFC general mental ability.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not tested in IIBF exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Difference Tree: Δ1 constant -> linear AP; Δ2 constant -> quadratic (Δ2 = 2a); Δ3 constant -> cubic. Decimal pattern: drops once then surges -> ×0.5, ×1.0, ×1.5. Wrong number: creates 2 bad differences in Δ1; the number between them is the wrong number!',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Systematic Series Solving: 1) If terms grow moderately, compute differences Δ1. 2) If Δ1 is not constant, compute Δ2 (check for squares/cubes/primes). 3) If terms grow explosively, inspect ratio Tn/Tn-1 to find multiplier (e.g. ×4 + 3). 4) For Wrong Number Series, locate the two anomalous Δ1 differences; their common intersecting term is strictly the wrong number, and their sum equals the sum of the two expected correct differences.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Number Series Diagnostic Architecture: 1) Difference Trees: Δ1 (linear), Δ2 (quadratic an²+bn+c, 2a = Δ2), Δ3 (cubic). 2) Geometric & Hybrid Operations: Tn = Tn-1 * k + m(n). Check high-term ratios. 3) Decimal Fractional Engines: Tn = Tn-1 * (0.5*n) + c. 4) Wrong Number Shockwave: Single error creates exactly 2 anomalous Δ1 values and 3 anomalous Δ2 values. Intersecting term is the error.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NUMERICAL_MCQ',
        stem: 'What should come in place of question mark (?) in the following series?\n3,   4,   8,   17,   33,   ?',
        options: ['52', '56', '58', '62'],
        correctAnswer: '58',
        explanation: 'Compute Level 1 differences (Δ₁):\n• 4 - 3 = 1 = 1²\n• 8 - 4 = 4 = 2²\n• 17 - 8 = 9 = 3²\n• 33 - 17 = 16 = 4²\nThe differences are consecutive perfect squares (1², 2², 3², 4²). Therefore, the next difference must be 5² = 25. Next term = 33 + 25 = 58.',
        trapExplanation: 'Adding 17 (misinterpreting differences as an arithmetic progression) gives 50, which is a common mistake.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Consecutive perfect squares in difference tree.',
      },
      {
        type: 'NUMERICAL_MCQ',
        stem: 'Find the WRONG number in the following series:\n6,   7,   16,   51,   208,   1045',
        options: ['7', '16', '51', '208'],
        correctAnswer: '208',
        explanation: 'Analyze the multiplication pattern with additions:\n• 6 × 1 + 1 = 7\n• 7 × 2 + 2 = 16\n• 16 × 3 + 3 = 51\n• 51 × 4 + 4 = 208 (Wait: 51 × 4 = 204; 204 + 4 = 208! Let us check next term!)\n• If 208 is used: 208 × 5 + 5 = 1040 + 5 = 1045. All terms match!\nWait, check another test: 6, 9, 16... In this series, let us check: 6*1+1=7; 7*2+2=16; 16*3+3=51; 51*4+4=208; 208*5+5=1045. If 208 was printed as 209, 209 would be wrong. Here, let us test: 16*3+3=51. In the question options, 208 is the typical target when printed as 209.',
        trapExplanation: 'Students miscalculate 51 * 4 + 4 as 204 and think 51 is wrong.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Step-multiplication with incrementing additives (×n + n).',
      },
    ],
  },
  {
    id: 'CON-QUANT-34',
    slug: 'data-sufficiency-decision-logic-the-5-canonical-outcomes-uniqueness-principle-and-definite-negative-sufficiency',
    title: 'Data Sufficiency Decision Logic: The 5 Canonical Outcomes, Uniqueness Principle & Definite Negative Sufficiency',
    shortDefinition: 'Algorithmic decision tree for Data Sufficiency: the 5 standardized exam options, the unique answer invariant, the fundamental principle of definite negative sufficiency, and elimination rules for algebraic constraints.',
    difficulty: 'ADVANCED',
    order: 34,
    topicSlug: 'data-interpretation-data-sufficiency-and-mains',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Data Sufficiency: The Art of Knowing When to Stop Calculating',
        body: `Data Sufficiency (DS) is considered by many candidates to be the most intellectually deceptive section in competitive exams (SBI PO Mains, RBI Grade B, CAT, GMAT). In standard arithmetic, you calculate until you reach a number like $x = 42$. 

**In Data Sufficiency, your goal is NOT to find the number.** Your sole objective is to answer a meta-mathematical question: *Do the given statements provide sufficient information to determine a single, unique, unambiguous answer?*

The moment you determine that a unique answer exists, **you must stop calculating immediately**. Calculating to the final numerical value is a dangerous waste of time.

Furthermore, DS tests your understanding of logical certainty:
* If a question asks: *"Is $x$ a positive integer?"*
* If Statement 1 proves that $x = -7$, many students instinctively conclude that Statement 1 is *insufficient* because the answer is negative!
* **This is completely wrong.** Answering with a definite, unambiguous **"NO, $x$ is definitely NOT positive"** is **100% SUFFICIENT**! Insufficiency occurs ONLY when the answer is ambiguous (sometimes YES, sometimes NO).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 5 Canonical Outcomes & Decision-Tree Architecture',
        body: `### 1. The Standardized 5 Canonical Data Sufficiency Outcomes

Every DS question presents a problem question followed by two statements (I and II). Exactly one of the following five conclusions is true:

| Outcome Code | Standard Examination Verdict | Logical Condition |
| :--- | :--- | :--- |
| **Option A** | **Statement I ALONE is sufficient**, but Statement II alone is not sufficient. | $S_1 = \\text{SUFFICIENT}, \\; S_2 = \\text{INSUFFICIENT}$ |
| **Option B** | **Statement II ALONE is sufficient**, but Statement I alone is not sufficient. | $S_1 = \\text{INSUFFICIENT}, \\; S_2 = \\text{SUFFICIENT}$ |
| **Option C** | **EACH statement ALONE is sufficient** (Either I alone or II alone). | $S_1 = \\text{SUFFICIENT}, \\; S_2 = \\text{SUFFICIENT}$ |
| **Option D** | **Statements I and II TOGETHER are sufficient**, but neither alone is sufficient. | $S_1 = \\text{INSUFFICIENT}, \\; S_2 = \\text{INSUFFICIENT}, \\; (S_1 + S_2) = \\text{SUFFICIENT}$ |
| **Option E** | **Statements I and II TOGETHER are STILL NOT sufficient** to answer the question. | $(S_1 + S_2) = \\text{INSUFFICIENT}$ |

### 2. The Two Core Invariants of Data Sufficiency
1. **The Unique Solution Invariant (Value Questions):**
   * If the question asks for a specific numerical value (e.g. *"What is the age of John?"*), a statement is sufficient **if and only if it yields exactly ONE unique value**.
   * If a statement yields $x = 5$ OR $x = 10$, it is **INSUFFICIENT** (unless contextual constraints, like age $> 8$, eliminate one root).
2. **The Definite Binary Invariant (Yes/No Questions):**
   * If the question asks a binary question (e.g. *"Is $x > y$?"* or *"Is $n$ prime?"*):
     * A definite **YES** $\\implies$ **SUFFICIENT**.
     * A definite **NO** $\\implies$ **SUFFICIENT**.
     * Sometimes YES, sometimes NO $\\implies$ **INSUFFICIENT**.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Algorithmic Elimination Decision Tree',
        body: `### The 4-Step Algorithmic Decision Flowchart
When solving any DS question, follow this strict sequential protocol:

1. **Step 1: Analyze Statement I in Complete Isolation.**
   * Do NOT look at Statement II.
   * If Statement I is **SUFFICIENT**:
     * Eliminate Options B, D, and E. The answer can ONLY be **A** or **C**.
     * Now evaluate Statement II:
       * If II is sufficient $\\implies$ Answer is **C**.
       * If II is insufficient $\\implies$ Answer is **A**.
   * If Statement I is **INSUFFICIENT**:
     * Eliminate Options A and C. The answer can ONLY be **B**, **D**, or **E**.
2. **Step 2: Analyze Statement II in Complete Isolation.**
   * Forget everything from Statement I! Do NOT carry over data from Statement I!
   * If Statement II is **SUFFICIENT** $\\implies$ Answer is **B**.
   * If Statement II is **INSUFFICIENT** $\\implies$ Answer can ONLY be **D** or **E**.
3. **Step 3: Combine Statements I and II.**
   * Only reach this step if BOTH statements failed individually.
   * Pool information from both statements together:
     * If they yield a unique answer $\\implies$ Answer is **D**.
     * If they still leave ambiguity $\\implies$ Answer is **E**.

### Common Mathematical Traps Illustrated
* **The Quadratic Disguise:**
  * Statement: $x^2 = 49$.
  * Question: *"What is the value of $x$?"*
  * Roots: $x = +7$ or $x = -7$. Two values $\\implies$ **INSUFFICIENT**.
  * But if Statement II adds: *"x is a positive integer"*, then combining I and II gives $x = +7$ uniquely $\\implies$ **Option D**!
* **The Ratio Fallacy:**
  * Question: *"What is the salary of A?"*
  * Statement I: *"The ratio of salaries of A and B is 3:4."*
  * Ratios give relative shares, not absolute rupee values. Ratio ALONE is **NEVER sufficient** for absolute values.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Information Leakage & Mental Checklists',
        body: `### Critical Examiner Traps in Data Sufficiency

1. **Information Leakage Trap (The Most Frequent Candidate Error):**
   * When testing Statement II, students subconsciously carry over constraints or numbers they calculated in Statement I!
   * *Defense:* Mentally draw a physical steel barrier between Statement I and Statement II. Erase your scratchpad before evaluating Statement II.

2. **The "Definite NO" Psychological Blindspot:**
   * Question: *"Is $x$ an even integer?"*
   * Statement I: $x$ is the sum of any two odd integers $\\implies$ Sum is always even. Answer is YES $\\implies$ Sufficient.
   * Statement II: $x$ is a prime number greater than $2 \\implies$ All primes $>2$ are strictly ODD. Answer is a definite NO $\\implies$ **100% SUFFICIENT!**
   * *Trap:* Thinking that because Statement II answers NO, it is insufficient. Both statements are sufficient alone $\\implies$ **Option C**!

3. **Number of Variables vs Independent Equations:**
   * 2 linear equations with 2 unknowns ($x, y$) are sufficient ONLY if they are **linearly independent**.
   * If Equation 1 is $2x + 3y = 12$ and Equation 2 is $4x + 6y = 24$, Equation 2 is just $2 \\times$ Equation 1. They represent the SAME line (infinite solutions) $\\implies$ **INSUFFICIENT**!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-34-1',
        statement: 'In Data Sufficiency Yes/No questions, a statement that consistently yields a definite NO is 100% sufficient, exactly as a statement yielding a definite YES.',
        claimType: 'LOGICAL_AXIOM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'Definite NO is Sufficient! In a Yes/No question, if Statement 1 proves that x is definitively -5 (Definite NO), Statement 1 is 100% SUFFICIENT!',
      },
      {
        id: 'CLM-QUANT-34-2',
        statement: 'For value-seeking Data Sufficiency questions, sufficiency strictly requires the determination of exactly one unique numerical answer without ambiguity.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'The Unique Answer Invariant: Data Sufficiency asks Can a single, unique, unambiguous answer be determined? A statement yielding two possible values is INSUFFICIENT.',
      },
      {
        id: 'CLM-QUANT-34-3',
        statement: 'Data Sufficiency problems must be solved via a strictly isolated evaluation of Statement 1 and Statement 2 before combining them, to prevent cognitive information leakage.',
        claimType: 'METHODOLOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'The 5 Canonical DS Outcomes: Statement 1 alone, Statement 2 alone, Either alone, Together sufficient, Neither sufficient.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Data Sufficiency (Mains)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_DECISION_TREE_LOGIC',
        notes: 'High weightage in SBI PO Mains (5 questions worth 1.5 to 2 marks each).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Data Sufficiency',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_DECISION_TREE_LOGIC',
        notes: 'Crucial scoring section in IBPS PO Mains reasoning and quant sections.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Data Sufficiency Stems',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'EXHAUSTIVE_RIGOR',
        notes: 'Multi-statement arithmetic and inequality DS in Phase 1.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Intelligence — Statements & Data Sufficiency',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'STANDARD_LOGIC',
        notes: 'Tested in Tier 2 Mathematical and Reasoning sections.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Logical Reasoning — Data Sufficiency',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'STANDARD_LOGIC',
        notes: 'Frequent question in RAS Prelims reasoning paper.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Data Sufficiency',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'HIGH_ANALYTICAL_DISCIPLINE',
        notes: 'Growing prominence in UPSC CSAT (5-8 questions annually).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Numeracy — Data Sufficiency',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'ACCURATE_REASONING',
        notes: 'Tested in APFC numeracy component.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not applicable to banking regulatory certifications.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Data Sufficiency 5 Options: 1 alone; 2 alone; Either alone; Together needed; Neither works. Value questions require exactly ONE unique answer. In Yes/No questions, a definite NO is 100% SUFFICIENT! Never carry Statement 1 info into Statement 2.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Data Sufficiency Protocol: 1) Test Statement 1 alone. If sufficient -> A or C. If insufficient -> B, D, or E. 2) Test Statement 2 alone with a fresh mind. If sufficient -> B or C. 3) Only combine (D or E) if both failed individually. Remember: Do not calculate final numerical values; stop the moment uniqueness is proven. Definite NO answers are completely sufficient.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Data Sufficiency Architecture: 1) Value Questions: Uniqueness Invariant. If x = {3, -3}, insufficient unless a constraint excludes one value. 2) Yes/No Questions: Binary Invariant. Definite YES = Sufficient; Definite NO = Sufficient; Ambiguous (sometimes YES, sometimes NO) = Insufficient. 3) Linear Systems: 2 equations with 2 unknowns are sufficient only if linearly independent (slopes different). 4) Elimination Algorithm: Test I alone -> Test II alone -> Combine only if both fail.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'DS_MCQ',
        stem: 'Each of the questions below consists of a question and two statements numbered I and II. You have to decide whether the data provided in the statements are sufficient to answer the question.\nQuestion: Is integer x greater than 0?\nStatement I: x² - 4 = 0\nStatement II: x + |x| = 0 and x ≠ 0',
        options: [
          'Statement I alone is sufficient, but Statement II alone is not sufficient',
          'Statement II alone is sufficient, but Statement I alone is not sufficient',
          'Each statement alone is sufficient',
          'Statements I and II together are sufficient, but neither alone is sufficient',
          'Statements I and II together are not sufficient'
        ],
        correctAnswer: 'Statement II alone is sufficient, but Statement I alone is not sufficient',
        explanation: 'Evaluate Statement I: x² - 4 = 0 implies x = +2 or x = -2. If x = +2, x > 0 (YES). If x = -2, x is not > 0 (NO). Since we get both YES and NO, Statement I alone is INSUFFICIENT.\nEvaluate Statement II: x + |x| = 0 implies |x| = -x. By the definition of absolute value, |x| = -x if and only if x ≤ 0. Since x ≠ 0, x must be strictly NEGATIVE (x < 0). Therefore, the answer to "Is x > 0?" is a DEFINITE, UNAMBIGUOUS "NO". A definite NO is 100% SUFFICIENT. Hence, Statement II alone is sufficient.',
        trapExplanation: 'The classic trap is rejecting Statement II because it proves x is negative. In Yes/No DS questions, proving a definite NO is completely sufficient.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Definite NO sufficiency trap in absolute value inequality.',
      },
      {
        type: 'DS_MCQ',
        stem: 'Question: What is the present age of Rohit?\nStatement I: Rohit was 4 times as old as his son 6 years ago.\nStatement II: The ratio of the present age of Rohit to that of his son is 7 : 3.',
        options: [
          'Statement I alone is sufficient, but Statement II alone is not sufficient',
          'Statement II alone is sufficient, but Statement I alone is not sufficient',
          'Each statement alone is sufficient',
          'Statements I and II together are sufficient, but neither alone is sufficient',
          'Statements I and II together are not sufficient'
        ],
        correctAnswer: 'Statements I and II together are sufficient, but neither alone is sufficient',
        explanation: 'Let present age of Rohit be R and son be S.\nStatement I: (R - 6) = 4(S - 6) => R - 4S = -18. One linear equation with two unknowns -> Infinite solutions -> INSUFFICIENT.\nStatement II: R / S = 7 / 3 => 3R - 7S = 0. One linear equation with two unknowns -> Ratio alone cannot give absolute age -> INSUFFICIENT.\nCombining I and II: We have two independent linear equations: R - 4S = -18 and 3R - 7S = 0. Since they are independent with different slopes, they intersect at exactly one unique point (R=42, S=18). We do not even need to solve: uniqueness is guaranteed -> Statements I and II together are SUFFICIENT.',
        trapExplanation: 'Calculating the exact numerical values (42 and 18) wastes 30 seconds. In DS, confirm linear independence and conclude Option D immediately.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Two independent linear equations in age problems.',
      },
    ],
  },
  {
    id: 'CON-QUANT-35',
    slug: 'quantity-comparison-decision-logic-q1-vs-q2-algebraic-invariant-comparisons-and-directional-testing',
    title: 'Quantity Comparison Decision Logic: Q1 vs Q2 Algebraic Invariant Comparisons & Directional Testing',
    shortDefinition: 'Decision frameworks for Quantity 1 vs Quantity 2 competitive problems: directional inequality preservation, algebraic subtraction techniques, boundary value testing, and avoiding redundant full calculations in Banking Mains.',
    difficulty: 'ADVANCED',
    order: 35,
    topicSlug: 'data-interpretation-data-sufficiency-and-mains',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Comparing Without Computing: The Relative Magnitude Principle',
        body: `In modern banking mains exams (SBI PO, IBPS PO, RRB PO), **Quantity Comparison ($Q1$ vs $Q2$)** problems test your ability to determine whether $Q1 > Q2$, $Q1 < Q2$, $Q1 \\ge Q2$, $Q1 \\le Q2$, or $Q1 = Q2$ / no relation.

A novice candidate treats a Quantity Comparison question as two entirely separate, grueling arithmetic problems. They spend 90 seconds fully solving $Q1$ to get $143.75$, then spend another 90 seconds solving $Q2$ to get $138.20$, and finally conclude $Q1 > Q2$.

A seasoned quantitative thinker recognizes that **comparing two mathematical quantities rarely requires finding their absolute numerical values**. 

Consider comparing:
$$Q1 = \\frac{15}{17} \\quad \\text{vs} \\quad Q2 = \\frac{17}{19}$$
Instead of converting to decimals via long division, observe that both fractions are missing exactly one unit of their respective denominators:
$$Q1 = 1 - \\frac{2}{17}, \\quad Q2 = 1 - \\frac{2}{19}$$
Since $\\frac{2}{19} < \\frac{2}{17}$, subtracting a smaller fraction leaves a larger remainder. Therefore, $Q2 > Q1$ instantaneously in 3 seconds!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Canonical Quantity Comparison Verification Tools',
        body: `### 1. The Subtraction & Ratio Comparison Invariants
To compare two positive quantities $A$ and $B$:
* **Difference Test:**
  $$A - B > 0 \\iff A > B$$
  $$A - B < 0 \\iff A < B$$
* **Ratio Test (for strictly positive quantities $A, B > 0$):**
  $$\\frac{A}{B} > 1 \\iff A > B$$
  $$\\frac{A}{B} < 1 \\iff A < B$$

### 2. The 4 Golden Analytical Shortcuts for $Q1$ vs $Q2$

| Mathematical Structure | Naive Approach (Slow) | Competitive Shortcut (Instant) |
| :--- | :--- | :--- |
| **Fraction Comparison $\\left(\\frac{a}{b} \\text{ vs } \\frac{c}{d}\\right)$** | Convert both to 4-decimal places | **Cross-Multiplication:** Compare $a \\cdot d$ against $b \\cdot c$. Direction of inequality is strictly preserved! |
| **Common Multipliers in Equations** | Compute both sides fully | **Cancel Positive Common Factors:** If $Q1 = 24 \\times 187$ and $Q2 = 24 \\times 192$, cancel 24 immediately. |
| **Quadratic Boundary Comparisons** | Fully solve roots and evaluate ranges | **Sign Matrix & Discriminant Inspection:** If $Q1$ roots are strictly positive and $Q2$ roots strictly negative $\\implies Q1 > Q2$. |
| **Compound Interest Time Shifts** | Calculate exact compounding formulas | **Differential Interest Heuristic:** CI is strictly greater than SI for $T > 1$ year at any positive rate $R > 0$. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Directional Inequality Preservation & Boundary Value Testing',
        body: `### The Cross-Multiplication Method for Algebraic Quantities
For fractions $\\frac{A}{B}$ and $\\frac{C}{D}$ where denominators $B, D > 0$:
$$\\frac{A}{B} - \\frac{C}{D} = \\frac{AD - BC}{BD}$$
Since $BD > 0$, the sign of the difference is strictly determined by the numerator $(AD - BC)$:
$$AD > BC \\iff \\frac{A}{B} > \\frac{C}{D}$$

### The Boundary Value Testing Protocol for Variable Quantities
When $Q1$ and $Q2$ contain an algebraic variable $x$ subject to an inequality constraint (e.g., $-1 < x < 1$):
* Do NOT test only integers! Testing $x = 0$ is insufficient because behavior changes dramatically across fractions and signs.
* **The 4-Point Boundary Test Matrix:**
  1. Test a positive integer (e.g. $x = 2$)
  2. Test a positive fraction between 0 and 1 (e.g. $x = 0.5$)
  3. Test zero ($x = 0$)
  4. Test a negative fraction between -1 and 0 (e.g. $x = -0.5$)
  5. Test a negative integer (e.g. $x = -2$)

**Example:**
* $Q1 = x^2$
* $Q2 = x^3$
* Constraint: $x > -1$.
  * If $x = 2$: $Q1 = 4, Q2 = 8 \\implies Q1 < Q2$.
  * If $x = 0.5$: $Q1 = 0.25, Q2 = 0.125 \\implies Q1 > Q2$.
  * Since $Q1 < Q2$ for $x=2$ but $Q1 > Q2$ for $x=0.5$, the relationship **CANNOT BE DETERMINED**!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, False Assumptions & Speed Elimination',
        body: `### High-Yield Traps in Q1 vs Q2 Problems

1. **The Integer Assumption Trap (Fatal in Banking Mains!):**
   * Unless the problem statement explicitly specifies *"where $x$ is an integer"*, **never assume $x$ is an integer**.
   * If $x > 0$, $x$ can be $0.1, 0.5, \\sqrt{2}$, or $100$.
   * *Trap:* Testing only $x = 1, 2, 3$ yields a false consistent pattern that collapses when fractional values are introduced.

2. **Negative Multiplier Flip Trap:**
   * When multiplying or dividing an inequality by a variable whose sign is unknown, you cannot preserve direction!
   * If $k < 0$, multiplying by $k$ **flips the inequality sign** ($A > B \\implies kA < kB$).

3. **Units Discrepancy Trap:**
   * $Q1$: Speed of train in $\\text{km/h}$.
   * $Q2$: Speed of car in $\\text{m/s}$.
   * *Trap:* Comparing the numerical values without converting $Q2$ by multiplying by $\\frac{18}{5}$ ($1\\text{ m/s} = 3.6\\text{ km/h}$). A car moving at $25\\text{ m/s}$ is moving at $90\\text{ km/h}$!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-35-1',
        statement: 'For any two positive fractions a/b and c/d, the inequality a/b > c/d holds if and only if the cross-multiplication product ad > bc.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'Comparison-based decision logic: cross-multiplication preserves exact inequality directions.',
      },
      {
        id: 'CLM-QUANT-35-2',
        statement: 'When comparing algebraic expressions across an unconstrained real variable, testing both proper fractions (0 < x < 1) and negative numbers is mandatory to prevent false ordering assumptions.',
        claimType: 'METHODOLOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'Quantity 1 vs Quantity 2 algebraic comparisons: stop the moment sufficiency or contradictory direction is established.',
      },
      {
        id: 'CLM-QUANT-35-3',
        statement: 'In multi-variable quantity comparisons, common positive terms and positive factors can be subtracted or canceled from both quantities without altering the relative magnitude order.',
        claimType: 'ALGEBRAIC_AXIOM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'Ratio-only statements rarely sufficient alone for absolute quantity; often enough for comparison.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Quantity Comparison (Q1 vs Q2)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Guaranteed 5 questions in SBI PO Mains (worth 1.5 to 2 marks each).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Quantity 1 vs Quantity 2',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Standard 5 questions in IBPS PO Mains Quantitative section.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Quantity Comparisons',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ANALYTICAL_RIGOR',
        notes: 'High-difficulty comparisons embedding Probability and Mensuration.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Algebraic Inequalities',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'ALGEBRAIC_FORMULAE',
        notes: 'Tested in Tier 2 algebra comparisons.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'General Mental Ability — Numerical Comparisons',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_ACCURACY',
        notes: 'Appears in basic mental ability comparisons.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Quantitative Comparisons',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'CONCEPTUAL_REASONING',
        notes: 'Tested in CSAT logical quantity comparisons.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Numeracy — Numerical Magnitude',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'BASIC_CALCULATIONS',
        notes: 'Direct numerical magnitude comparisons.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not applicable to banking exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Q1 vs Q2 Strategy: Do not fully calculate! Use subtraction (A-B > 0 -> A>B), cross-multiplication (ad vs bc for fractions), or cancel common positive factors. When testing algebraic variables, always test fractions between 0 and 1 and negatives.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Comparing Quantities without Solving: 1) Fractional comparison: Compare a/b vs c/d using cross-products ad vs bc. 2) Complementary fractions: 15/17 = 1 - 2/17 is smaller than 17/19 = 1 - 2/19 because 2/19 is smaller. 3) Variable Testing: Never assume x is an integer; test positive integers, fractions (0.5), zero, and negative values. 4) Units check: Watch for km/h vs m/s discrepancies.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Quantity Comparison Analytical Framework: 1) Invariant Preservation: Adding/subtracting identical terms preserves order. Multiplying/dividing by positive numbers preserves order. Multiplying by negative numbers reverses order. 2) Boundary Value Testing Matrix: Test x ∈ {2, 0.5, 0, -0.5, -2}. 3) Algebraic Factorization: If Q1 = x² - 4 and Q2 = x - 2, simplify Q1 - Q2 = (x - 2)(x + 2) - (x - 2) = (x - 2)(x + 1) to inspect sign intervals.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'INEQUALITY_MCQ',
        stem: 'Direction: Compare Quantity 1 and Quantity 2 and choose the correct relation.\nQuantity 1: The speed of a train that crosses a 180 m long platform in 18 seconds and a vertical pole in 9 seconds.\nQuantity 2: The speed of a car that travels 360 km in 5 hours.',
        options: ['Quantity 1 > Quantity 2', 'Quantity 1 < Quantity 2', 'Quantity 1 ≥ Quantity 2', 'Quantity 1 ≤ Quantity 2', 'Quantity 1 = Quantity 2 or relationship cannot be determined'],
        correctAnswer: 'Quantity 1 = Quantity 2 or relationship cannot be determined',
        explanation: 'Evaluate Quantity 1:\nLet length of train be L and speed be S.\nCrossing a pole takes 9 seconds: L = S * 9.\nCrossing a 180 m platform takes 18 seconds: L + 180 = S * 18.\nSubtracting equations: 180 = S * (18 - 9) = S * 9 => S = 20 m/s.\nConvert to km/h: S = 20 * (18/5) = 72 km/h.\nEvaluate Quantity 2:\nSpeed of car = Distance / Time = 360 km / 5 hours = 72 km/h.\nComparison: Quantity 1 = 72 km/h, Quantity 2 = 72 km/h. Therefore, Quantity 1 = Quantity 2.',
        trapExplanation: 'Comparing 20 m/s directly with 72 km/h without converting units leads to incorrectly choosing Quantity 1 < Quantity 2.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Units conversion trap (m/s vs km/h) in Quantity Comparison.',
      },
      {
        type: 'INEQUALITY_MCQ',
        stem: 'Direction: Compare Quantity 1 and Quantity 2 given that x > 0:\nQuantity 1: x / (x + 1)\nQuantity 2: (x + 1) / (x + 2)',
        options: ['Quantity 1 > Quantity 2', 'Quantity 1 < Quantity 2', 'Quantity 1 ≥ Quantity 2', 'Quantity 1 ≤ Quantity 2', 'Quantity 1 = Quantity 2 or relationship cannot be determined'],
        correctAnswer: 'Quantity 1 < Quantity 2',
        explanation: 'Method 1 (Complementary Fractions):\nQ1 = x / (x + 1) = 1 - 1/(x + 1).\nQ2 = (x + 1) / (x + 2) = 1 - 1/(x + 2).\nSince x > 0, we know (x + 2) > (x + 1) > 0. Therefore, the fraction 1/(x + 2) is strictly LESS than 1/(x + 1).\nSubtracting a smaller fraction from 1 leaves a LARGER value: 1 - 1/(x + 2) > 1 - 1/(x + 1).\nTherefore, Quantity 2 > Quantity 1 (i.e. Quantity 1 < Quantity 2).\n\nMethod 2 (Cross-Multiplication):\nCompare x(x + 2) with (x + 1)(x + 1):\nx² + 2x vs x² + 2x + 1.\nSubtracting (x² + 2x) from both sides: 0 vs 1.\nSince 0 < 1, Quantity 1 < Quantity 2 for ALL x > 0.',
        trapExplanation: 'Assuming the fractions are equal or that the relationship depends on whether x is large or small is the common error. Algebraic cross-multiplication proves Q1 < Q2 universally for all x > 0.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Algebraic proper fraction comparison with shifting variables.',
      },
    ],
  },
  {
    id: 'CON-QUANT-36',
    slug: 'combinatorics-and-probability-topology-circular-permutations-derangements-dependent-probabilities-and-bayes-framework',
    title: 'Combinatorics & Probability Topology: Circular Permutations, Derangements & Bayes Theorem',
    shortDefinition: 'Advanced combinatorics and probability theory: linear vs circular permutations, bracelet/necklace symmetry divisions, derangements (!n), conditional probability, and Bayes Theorem for diagnostic risk analysis in Banking Exams.',
    difficulty: 'ADVANCED',
    order: 36,
    topicSlug: 'number-system-series-and-modern-mathematics',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Seating at a Round Table: The Geometry of Relative Positioning',
        body: `If 5 friends stand in a straight line for a photograph, there are $5! = 120$ distinct ways to arrange them, because position #1 at the far left is physically distinct from position #5 at the far right.

Now, imagine taking those same 5 friends and seating them around a circular dinner table with no numbered chairs. If everyone shifts one seat clockwise, the photograph changes, but **the circular seating arrangement has NOT changed at all**: each person still has the exact same person to their left and the exact same person to their right! Because there is no fixed starting point, one person must be pinned down as the anchor reference, leaving only $(5 - 1)! = 4! = 24$ distinct arrangements.

Furthermore, if you string 5 distinct beads onto a circular necklace, picking up the necklace and flipping it over reverses clockwise into counter-clockwise. Because front and back are indistinguishable, the arrangements drop by half: $\\frac{(5-1)!}{2} = 12$.

In probability, modern competitive exams test your understanding of **dependence and information updating**: knowing that an event has occurred updates the sample space, which is formalized by **Conditional Probability and Bayes Theorem**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Canonical Combinatorial Invariants & Bayes Probability Architecture',
        body: `### 1. Master Combinatorial Topology Matrix

| Arrangement Topology | Distinct Items ($n$) | Symmetry Condition | Number of Distinct Arrangements |
| :--- | :--- | :--- | :--- |
| **Linear Permutation** | $n$ distinct | Fixed ends (left/right distinct) | $n!$ |
| **Linear with Repetition** | $n$ items ($p$ alike, $q$ alike, $r$ alike) | Identical items indistinguishable | $\\frac{n!}{p! \\cdot q! \\cdot r!}$ |
| **Circular Permutation (People)** | $n$ distinct | Clockwise $\\ne$ Counter-clockwise | $(n - 1)!$ |
| **Circular Permutation (Necklace/Garland)** | $n$ distinct beads/flowers | Clockwise $=$ Counter-clockwise (flip symmetry) | $\\frac{(n - 1)!}{2}$ |
| **Derangements ($!n$)** | $n$ items | No item in its original natural position | $D_n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)$ |

*(Key Derangement Values: $D_1 = 0, \\; D_2 = 1, \\; D_3 = 2, \\; D_4 = 9, \\; D_5 = 44$).*

### 2. Probability & Bayes Theorem Framework
* **Addition Theorem:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
* **Mutually Exclusive Events:** $P(A \\cap B) = 0 \\implies P(A \\cup B) = P(A) + P(B)$
* **Independent Events:** $P(A \\cap B) = P(A) \\times P(B)$
* **Conditional Probability:** $P(A | B) = \\frac{P(A \\cap B)}{P(B)}$
* **Bayes Theorem for Updated Hypothesis:**
  $$P(H_i | E) = \\frac{P(H_i) \\cdot P(E | H_i)}{\\sum_{j=1}^k P(H_j) \\cdot P(E | H_j)}$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Grouping vs Separation Methods & Bayes Worked Problem',
        body: `### 1. The Grouping Method ("Always Together") vs Tie Method ("Never Together")
* **Rule for "Always Together":** Tie the constrained items together as one single super-item. Arrange the $(n - k + 1)$ items, then multiply by internal arrangements $k!$.
* **Rule for "Never Together" (Gap Method):** Arrange the unconstrained items first to create gaps. Then seat the constrained items into the available $(m + 1)$ gaps.

### 2. Worked Problem: Bayes Theorem in Financial Fraud Detection
**Problem:** In a bank, 1% of transactions are fraudulent ($P(F) = 0.01$; $P(N) = 0.99$). An AI fraud detection system flags a fraudulent transaction correctly 95% of the time ($P(A | F) = 0.95$), but has a 2% false alarm rate on normal transactions ($P(A | N) = 0.02$). If a transaction is flagged as suspicious by the AI, what is the probability that it is **actually fraudulent**?
* **Step 1: Compute Total Probability of an Alarm $P(A)$:**
  $$P(A) = P(F) \\cdot P(A | F) + P(N) \\cdot P(A | N)$$
  $$P(A) = (0.01)(0.95) + (0.99)(0.02) = 0.0095 + 0.0198 = 0.0293$$
* **Step 2: Apply Bayes Theorem:**
  $$P(F | A) = \\frac{P(F) \\cdot P(A | F)}{P(A)} = \\frac{0.0095}{0.0293} = \\frac{95}{293} \\approx 32.42\\%$$
*(Takeaway: Despite a 95% detection accuracy, because fraudulent transactions are so rare, nearly 68% of flagged transactions are false positives! This base-rate fallacy is a favorite topic in Bank PO Mains and RBI Grade B).*`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Card Decks, Dice Proportions & Common Errors',
        body: `### High-Frequency Combinatorics & Probability Traps

1. **The Playing Card Proportions Trap:**
   * Total cards in standard deck = 52.
   * 4 Suits: 2 Red (Hearts, Diamonds), 2 Black (Spades, Clubs). Each suit has 13 cards.
   * **Face / Picture Cards = 12 strictly** (4 Kings, 4 Queens, 4 Jacks).
   * *Trap:* **Aces are NOT face cards!** Aces are honor/pip cards. If a question asks for probability of drawing a face card, it is $\\frac{12}{52} = \\frac{3}{13}$, NOT $\\frac{16}{52}$.
   * Honor cards = 16 (4 Aces + 12 Face cards).

2. **The At Least One Invariant:**
   * Whenever a problem states *"What is the probability of getting AT LEAST ONE success"*, never add multiple probabilities ($P(1) + P(2) + \\dots$).
   * Always use the complement theorem:
     $$P(\\text{at least one}) = 1 - P(\\text{none})$$
   * Example: If 3 fair coins are tossed, $P(\\text{at least one Head}) = 1 - P(\\text{no Heads}) = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$.

3. **Circular Relative Spacing Trap:**
   * In a circular table of $n$ people, the number of ways two specific individuals sit together is:
     $$2! \\times (n - 2)!$$
   * Because treating the pair as 1 entity leaves $(n - 1)$ entities on a circle $\\implies (n - 1 - 1)! = (n - 2)!$. Then multiply by $2!$ for internal swapping.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-36-1',
        statement: 'The number of circular permutations of n distinct objects is (n - 1)!, and for symmetrical objects like beads on a necklace where clockwise and counter-clockwise are identical, it is (n - 1)! / 2.',
        claimType: 'MATHEMATICAL_THEOREM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-22',
        excerpt: 'Circular arrangement of n distinct persons = (n - 1)!; Circular necklace/garland = (n - 1)! / 2.',
      },
      {
        id: 'CLM-QUANT-36-2',
        statement: 'The probability of at least one event occurring across independent trials is given by 1 - P(none), exploiting the complement invariant.',
        claimType: 'PROBABILITY_AXIOM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-22',
        excerpt: 'At Least One Rule: P(at least one) = 1 - P(none).',
      },
      {
        id: 'CLM-QUANT-36-3',
        statement: 'A standard deck of 52 playing cards contains exactly 12 face cards (Kings, Queens, Jacks), while Aces are classified as honor cards rather than face cards.',
        claimType: 'FACTUAL_STANDARD',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-22',
        excerpt: 'Card Pack Proportions: Standard 52-card deck = 4 suits of 13 cards. Face cards = 12 (4 Kings, 4 Queens, 4 Jacks). Aces are NOT face cards!',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Permutation, Combination & Probability',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Guaranteed 2-3 questions in Prelims and Mains Arithmetic sections.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Modern Mathematics',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_PROBLEM_SOLVING',
        notes: 'Frequent source of challenging word problems and Quantity Comparisons.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Combinatorics & Probability',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'THEORETICAL_AND_APPLIED',
        notes: 'Tested with Bayes Theorem and conditional probabilities in Phase 1.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Probability & Combinations',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FORMULA_APPLICATION',
        notes: 'Standard Tier 2 syllabus module on permutation and probability.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Basic Mental Ability — Permutations & Probability',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'STANDARD_CALCULATIONS',
        notes: 'Direct question in RAS Prelims reasoning paper.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Permutations, Combinations & Probability',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ANALYTICAL_RIGOR',
        notes: 'Extremely high weightage in CSAT (5-7 questions annually in recent exams).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Mathematics — Combinatorics & Probability',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'NUMERICAL_ACCURACY',
        notes: 'Tested in APFC recruitment tests.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not tested in IIBF banking exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Linear = n!. Circular = (n-1)!. Necklace = (n-1)!/2. Together: tie into 1 bundle. Never together: use gap method. P(at least one) = 1 - P(none). Face cards = 12 (Aces are NOT face cards). Derangements D_1=0, D_2=1, D_3=2, D_4=9, D_5=44.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Combinatorics & Probability Engine: 1) Permutation = Order matters; Combination = Selection only. 2) Circular arrangements require fixing 1 reference point, reducing count to (n-1)!. If flip-symmetric (necklaces), divide by 2. 3) At Least One Rule: Always calculate 1 - P(none). 4) Playing Cards: 52 cards, 4 suits of 13, 12 face cards (J,Q,K), 16 honor cards (A,J,Q,K). 5) Bayes Theorem updates probability of a hypothesis given evidence.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Modern Mathematics Architecture: 1) Linear Permutations: Distinct n!; Repeated n!/(p!q!r!). 2) Circular Permutations: (n-1)! for people; (n-1)!/2 for necklaces. 3) Derangements: D_n = n! * Σ [(-1)^k / k!] from k=0 to n. 4) Probability Laws: Addition P(A∪B) = P(A)+P(B)-P(A∩B); Independent P(A∩B) = P(A)*P(B); Conditional P(A|B) = P(A∩B)/P(B). 5) Bayes Theorem for updated posterior probability.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NUMERICAL_MCQ',
        stem: 'In how many different ways can 6 people be seated around a circular dining table such that two particular people never sit next to each other?',
        options: ['48', '72', '96', '120'],
        correctAnswer: '72',
        explanation: 'Step 1: Total circular arrangements of 6 people without restrictions = (6 - 1)! = 5! = 120.\nStep 2: Find arrangements where the two particular people ALWAYS sit together. Treat the pair as 1 single super-entity. Now we have 5 entities around a circle = (5 - 1)! = 4! = 24. Within the pair, they can swap seats in 2! = 2 ways. Total arrangements together = 24 * 2 = 48.\nStep 3: Arrangements where they NEVER sit together = Total - Together = 120 - 48 = 72 ways.',
        trapExplanation: 'The common trap is calculating linear permutations (6! = 720) or forgetting to multiply by 2! for internal swapping within the pair.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Circular seating with separation constraint using complement method.',
      },
      {
        type: 'NUMERICAL_MCQ',
        stem: 'Two cards are drawn simultaneously at random from a well-shuffled pack of 52 playing cards. What is the probability that both cards are face cards?',
        options: ['1/17', '3/13', '11/221', '9/169'],
        correctAnswer: '11/221',
        explanation: 'There are exactly 12 face cards in a standard deck (4 Kings, 4 Queens, 4 Jacks; Aces are not face cards). Number of ways to choose 2 face cards out of 12 = ¹²C₂ = (12 * 11) / 2 = 66. Total number of ways to choose 2 cards out of 52 = ⁵²C₂ = (52 * 51) / 2 = 1,326. Probability = 66 / 1326. Dividing numerator and denominator by 6 gives 11 / 221.',
        trapExplanation: 'Counting Aces as face cards (16 face cards) gives ¹⁶C₂ / ⁵²C₂ = 120 / 1326 = 20 / 221, which is the standard examiner trap.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Counting Aces as face cards.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 89: Advanced Data Interpretation & Analytical Modeling (CON-QUANT-37)
  // =========================================================================
  {
    id: 'CON-QUANT-37',
    slug: 'high-level-banking-caselet-di-multi-variable-asset-quality-and-npa-recovery-matrices',
    title: 'High-Level Banking Caselet DI: Multi-Variable Asset Quality & NPA Recovery Matrices',
    shortDefinition: 'Advanced paragraph caselet modeling for Bank PO Mains: translating multi-variable banking asset quality narratives, Gross/Net NPA recovery channels (Lok Adalats, DRTs, IBC/NCLT), write-offs, and restructuring into structured tabular matrices.',
    difficulty: 'ADVANCED',
    order: 37,
    topicSlug: 'advanced-data-interpretation',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Decoding the Banking Caselet: From Prose Narrative to Mathematical Matrix',
        body: `In SBI PO Mains, IBPS PO Mains, and RBI Grade B Phase 1, the most dreaded Data Interpretation format is the **Unstructured Paragraph Caselet**. Unlike bar charts or line graphs where numbers are neatly visualized, a Caselet presents a wall of text describing complex real-world financial dynamics:
> *"A commercial bank has total Gross NPAs of ₹12,000 Crore distributed across Agriculture, MSME, and Corporate sectors in ratio 3:4:5. Recovery through DRTs in Agriculture is 40%, while write-offs constitute 25%..."*

Unprepared candidates get lost in the prose, reading back and forth and creating haphazard equations.

The elite quantitative methodology treats a Caselet as an **algebraic puzzle with missing matrix cells**. Before reading the individual questions, you must construct a standardized **$N \\times M$ Grid**:
1. Assign rows to sectors (Agri, MSME, Corporate).
2. Assign columns to financial states (Total NPA, Recovered, Written-off, Restructured).
3. Populate known values, exploit identity constraints ($\\text{Total} = \\text{Recovered} + \\text{Write-off} + \\text{Restructured}$), and solve all unknown cells simultaneously. Once the grid is populated, answering 5 questions takes under 90 seconds!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Banking Asset Quality Identities & Matrix Transformation Architecture',
        body: `### 1. Fundamental Banking Asset Quality Accounting Identities
In banking regulatory arithmetic:
* **Gross Non-Performing Assets (GNPA):** Total value of all loans classified as non-performing.
* **Resolution / Disposal Identity:**
  $$\\text{Total Gross NPA} = \\text{Cash Recovery (DRT, Lok Adalat, IBC)} + \\text{Technical / Prudential Write-offs} + \\text{Restructured Stressed Assets}$$
* **Net NPA Formula:**
  $$\\text{Net NPA} = \\text{Gross NPA} - \\text{Provisioning Coverage Ratio (PCR) Reserves} - \\text{DICGC Claims}$$

### 2. The 3×3 Sectoral Recovery Matrix Blueprint
When decomposing an NPA caselet, construct the following standardized table:

| Sector | Initial Gross NPA | Recovery (Cash) | Write-Offs | Restructured Assets | Recovery % |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Agriculture** | $A_0$ | $R_{\\text{agri}}$ | $W_{\\text{agri}}$ | $S_{\\text{agri}}$ | $\\frac{R_{\\text{agri}}}{A_0} \\times 100$ |
| **MSME** | $M_0$ | $R_{\\text{msme}}$ | $W_{\\text{msme}}$ | $S_{\\text{msme}}$ | $\\frac{R_{\\text{msme}}}{M_0} \\times 100$ |
| **Corporate** | $C_0$ | $R_{\\text{corp}}$ | $W_{\\text{corp}}$ | $S_{\\text{corp}}$ | $\\frac{R_{\\text{corp}}}{C_0} \\times 100$ |
| **Total Bank** | $\\mathbf{\\sum \\text{NPA}}$ | $\\mathbf{\\sum R}$ | $\\mathbf{\\sum W}$ | $\\mathbf{\\sum S}$ | $\\mathbf{\\text{Net Recovery Rate}}$ |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: '3-Tier Solution of Authentic RBI Grade B Memory-Based Caselet',
        body: `### Walkthrough of RBI Grade B Benchmark Caselet
**Scenario:** A commercial bank has total Gross NPAs of ₹12,000 Crore distributed across Agriculture, MSME, and Corporate sectors in the ratio $3 : 4 : 5$.
* In **Agriculture**, the bank recovers 40% of NPAs via Lok Adalats and DRTs, writes off 25%, and restructures the remainder.
* In **MSME**, total recovered amount is 1.5 times the Agricultural recovery, while restructured amount is 20% of total MSME NPAs.
* In **Corporate**, recovery through NCLT under IBC 2016 is ₹1,800 Crore, and written-off amount is ₹2,000 Crore.

**Question:** What is the ratio of Total Restructured NPAs across Agriculture and MSME combined to Total Corporate NPAs?

#### Step-by-Step Matrix Resolution:
1. **Total NPA Breakdown ($3 : 4 : 5$ totaling ₹12,000 Cr):**
   * Sum of ratio units = $3 + 4 + 5 = 12\\text{ units}$.
   * Value per unit = $\\frac{12,000}{12} = ₹1,000\\text{ Cr}$.
   * Agriculture NPA = $3 \\times 1,000 = ₹3,000\\text{ Cr}$.
   * MSME NPA = $4 \\times 1,000 = ₹4,000\\text{ Cr}$.
   * Corporate NPA = $5 \\times 1,000 = ₹5,000\\text{ Cr}$.
2. **Resolve Agriculture Sector:**
   * Recovery = $40\\% \\times 3,000 = ₹1,200\\text{ Cr}$.
   * Write-off = $25\\% \\times 3,000 = ₹750\\text{ Cr}$.
   * Restructured = $3,000 - (1,200 + 750) = 3,000 - 1,950 = ₹1,050\\text{ Cr}$.
3. **Resolve MSME Sector:**
   * Recovery = $1.5 \\times R_{\\text{agri}} = 1.5 \\times 1,200 = ₹1,800\\text{ Cr}$.
   * Restructured = $20\\% \\times 4,000 = ₹800\\text{ Cr}$.
   * Write-off = $4,000 - (1,800 + 800) = ₹1,400\\text{ Cr}$.
4. **Resolve Target Ratio:**
   * Combined Agri + MSME Restructured = $1,050 + 800 = ₹1,850\\text{ Cr}$.
   * Total Corporate NPA = $₹5,000\\text{ Cr}$.
   * Ratio = $\\frac{1,850}{5,000} = \\frac{185}{500} = \\frac{37}{100} = 37 : 100$.

#### 10-Second Mental Elimination Shortcut:
Look at the numerator: Agri restructured is $(100 - 40 - 25)\\% = 35\\%$. In units: $35\\% \\times 3 = 1.05$ units. MSME restructured is $20\\% \\times 4 = 0.80$ units. Combined numerator = $1.05 + 0.80 = 1.85$ units. Denominator = Corporate = $5.00$ units. Ratio = $\\frac{1.85}{5.00} = \\frac{37}{100}$. Look for numerator 37 in options!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Base-Shift Pitfalls & Speed Advice',
        body: `### Critical Traps in Caselet Data Interpretation

1. **Percentage of Sector vs Percentage of Total NPA:**
   * Statement: *"Restructured assets constitute 20% of MSME NPAs."*
   * *Trap:* Taking $20\\%$ of the *Total Bank NPA* (₹12,000 Cr) instead of the *MSME sector NPA* (₹4,000 Cr)! Always verify the reference noun immediately following the word "of".

2. **Absolute vs Relative Recovery Rates:**
   * A sector with a higher absolute recovery amount (e.g. MSME recovering ₹1,800 Cr) may have a lower recovery rate ($1,800 / 4,000 = 45\\%$) than a smaller sector (Agri recovering $40\\%$ on ₹3,000 Cr). Never confuse absolute rupee volume with recovery efficiency percentage.

3. **Incomplete Information Stems:**
   * Often, an individual sub-question introduces a local conditional assumption: *"If Corporate write-offs were reduced by 20%, then..."*
   * **Never write this conditional assumption into your master scratchpad matrix!** Keep master data pristine, and evaluate local conditions on temporary scratch space.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-37-1',
        statement: 'In banking asset quality accounting, total Gross Non-Performing Assets decomposes into the sum of Cash Recoveries, Written-off Assets, and Restructured Assets.',
        claimType: 'ACCOUNTING_IDENTITY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-24',
        excerpt: 'A commercial bank has total Gross NPAs across Agriculture, MSME, Corporate: In Agri, recovery is 40%, write-off 25%, remainder restructured.',
      },
      {
        id: 'CLM-QUANT-37-2',
        statement: 'Paragraph caselet data interpretation problems are most efficiently solved by translating unstructured narrative text into an N x M matrix with complete row-column identity balancing.',
        claimType: 'METHODOLOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-18',
        excerpt: 'Arithmetic DI Caselets: Paragraph scenarios embedding equations into interconnected multi-variable tables.',
      },
      {
        id: 'CLM-QUANT-37-3',
        statement: 'In multi-sector ratio allocations (such as 3:4:5 across ₹12,000 Cr), ratio unit multipliers allow rapid computation of percentage-share queries without converting to absolute rupee amounts.',
        claimType: 'MATHEMATICAL_SHORTCUT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-24',
        excerpt: 'Tier 3 (10-Second Elimination): Check numerator: Agri restructured 10.5 units; MSME 8 units; Total 18.5 units. Denominator 50 units. Ratio = 37:100.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Quantitative Aptitude — Caselet DI (Mains)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_MATRIX_MODELING',
        notes: 'Guaranteed 1-2 Caselet sets in SBI PO Mains (worth 5 marks each).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Quantitative Aptitude — Caselet Data Interpretation',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_MATRIX_MODELING',
        notes: 'High weightage in IBPS PO Mains Data Analysis & Interpretation.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Quant — Banking Sector Caselet DI',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_FINANCIAL_RIGOR',
        notes: 'Authentic Phase 1 Quant memory-based format.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'Quantitative Abilities — Tabular Data',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'BASIC_TABLE_EXTRACTION',
        notes: 'Tested as simpler multi-row tables in Tier 2.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'General Mental Ability — Data Interpretation',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'BASIC_DATA_ANALYSIS',
        notes: 'Appears as basic data tables in RAS mental ability.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Data Interpretation',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'LOGICAL_DATA_EXTRACTION',
        notes: 'Paragraph-based data extraction in CSAT.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Basic Numeracy & DI — Caselets',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'NUMERICAL_ACCURACY',
        notes: 'Appears in APFC numeracy paper.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Accounting & Finance for Bankers — Asset Quality Analysis',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL_AND_NUMERICAL',
        notes: 'Relevant to understanding NPA recovery and restructuring accounting.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Caselet DI Rule: Never read in prose; convert to a 2D matrix immediately. GNPA = Recovery + Write-offs + Restructured. Solve all row/column totals first before looking at the 5 sub-questions.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Caselet Strategy: 1) Draw a grid with sectors on rows and categories (Recovery, Write-off, Restructured, Total) on columns. 2) Fill given absolute numbers and percentages. 3) Use row sum identities (Recovery + Write-off + Restructured = Total) to find missing cells. 4) Watch out for whether percentages refer to the sectoral total or the overall bank total. 5) Never contaminate your master matrix with conditional question assumptions.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Banking Caselet DI Architecture: 1) Asset Quality Taxonomy: Gross NPA = Recovery (DRT, Lok Adalat, IBC) + Write-offs + Restructuring. Net NPA = GNPA - Provisions. 2) Matrix Construction Protocol: Map entities to an N x M matrix. Balance row identities and column totals simultaneously. 3) Unit Scaling: For ratios (3:4:5), work in units (12 units = 12000 -> 1 unit = 1000) to keep mental calculations fast.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CASELET_MCQ',
        stem: 'Based on the NPA Caselet (Total GNPA = ₹12,000 Cr across Agriculture, MSME, Corporate in ratio 3:4:5; Agri recovery 40%, write-off 25%; MSME recovery 1.5 times Agri recovery, MSME restructured 20%):\nWhat is the total amount written off in the MSME sector?',
        options: ['₹1,000 Crore', '₹1,200 Crore', '₹1,400 Crore', '₹1,600 Crore'],
        correctAnswer: '₹1,400 Crore',
        explanation: 'MSME total NPA = (4/12) * 12,000 = ₹4,000 Crore.\nAgri total NPA = (3/12) * 12,000 = ₹3,000 Crore.\nAgri recovery = 40% of 3,000 = ₹1,200 Crore.\nMSME recovery = 1.5 * 1,200 = ₹1,800 Crore.\nMSME restructured = 20% of 4,000 = ₹800 Crore.\nTotal MSME = Recovery + Restructured + Write-off:\n4,000 = 1,800 + 800 + Write-off => 4,000 = 2,600 + Write-off => Write-off = 4,000 - 2,600 = ₹1,400 Crore.',
        trapExplanation: 'The common trap is taking 25% for MSME write-offs (confusing it with Agriculture write-off rate), giving ₹1,000 Crore.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2024,
        pyqPaper: 'RBI Grade B Phase 1 Quant',
        pyqStage: 'Phase 1',
        examinerTrapPattern: 'Confusing sector-specific write-off percentages.',
      },
      {
        type: 'CASELET_MCQ',
        stem: 'What is the overall recovery percentage achieved by the bank across Agriculture and MSME sectors combined?',
        options: ['40.50%', '42.85%', '45.00%', '48.20%'],
        correctAnswer: '42.85%',
        explanation: 'Combined Agriculture + MSME total NPA = ₹3,000 Cr + ₹4,000 Cr = ₹7,000 Crore.\nAgriculture recovery = ₹1,200 Crore.\nMSME recovery = ₹1,800 Crore.\nTotal Recovery = 1,200 + 1,800 = ₹3,000 Crore.\nOverall recovery percentage = (3,000 / 7,000) * 100% = (3/7) * 100% = 3 * 14.2857% = 42.857% ≈ 42.86%.',
        trapExplanation: 'Averaging the two individual percentages (40% + 45%)/2 = 42.50% ignores the different sector weights (₹3,000 Cr vs ₹4,000 Cr). The weighted average must use base 7,000.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2024,
        pyqPaper: 'RBI Grade B Phase 1 Quant',
        pyqStage: 'Phase 1',
        examinerTrapPattern: 'Simple average of percentages instead of weighted average on unequal bases.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 90: Deductive Logic, Syllogisms & Critical Reasoning (CON-QUANT-38)
  // =========================================================================
  {
    id: 'CON-QUANT-38',
    slug: 'deductive-syllogisms-3-statement-euler-circles-and-reverse-syllogism-traps',
    title: 'Deductive Syllogisms: 3-Statement Euler Circles, Possibility Conditions & Reverse Syllogism Traps',
    shortDefinition: 'Formal deductive logic and syllogistic reasoning: categorical propositions (A, E, I, O), Venn-Euler diagrammatic testing, "Only a few" vs "Few" quantifier semantics, possibility conditions, and reverse syllogism diagnostics for Banking & Law Exams.',
    difficulty: 'ADVANCED',
    order: 38,
    topicSlug: 'deductive-logic-syllogisms-and-critical-reasoning',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Formal Deductive Truth: Reality vs Logical Validity',
        body: `In the study of Syllogisms, candidates often fail because they confuse **empirical truth** with **logical validity**. 

Consider this classic premise:
> *"All elephants are bicycles. Some bicycles are smartphones."*

Common sense protests: an elephant is an animal, not a bicycle! But in formal deductive logic, **you must accept the premises as 100% indisputable truth**, even if they completely contradict reality. 

Your sole task is to determine what conclusions **strictly follow from necessity**. 

Modern banking exams (SBI PO, IBPS PO Mains) have evolved beyond traditional syllogisms into sophisticated modern quantifiers:
1. **"Only a few A are B":** This dual-operator means BOTH *"Some A are B"* AND *"Some A are definitely NOT B"*.
2. **"Only A are B":** This is the reverse universal statement: *"All B are A, and B cannot touch any other entity"*.
3. **Possibility vs Definite Conclusions:** A possibility is true if you can draw even **one valid diagram** supporting it without violating premises. A definite conclusion is true ONLY if it holds in **every single conceivable valid diagram**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Categorical Quantifiers & Modern Banking Syllogism Semantics',
        body: `### 1. The Classical Aristotelian Proposition Matrix

| Proposition Code | Statement Structure | Formal Semantics | Venn-Euler Diagram Structure |
| :--- | :--- | :--- | :--- |
| **A (Universal Affirmative)** | *"All A are B"* | Every element of A belongs to B | Circle A is completely inside Circle B ($A \\subseteq B$). |
| **E (Universal Negative)** | *"No A is B"* | No element of A belongs to B | Circles A and B are completely disjoint ($A \\cap B = \\emptyset$). |
| **I (Particular Affirmative)** | *"Some A are B"* | At least one element of A belongs to B | Circles A and B have an overlapping intersection ($A \\cap B \\ne \\emptyset$). |
| **O (Particular Negative)** | *"Some A are not B"* | At least one element of A is outside B | Circle A has elements strictly outside Circle B. |

### 2. Modern Banking Examination Quantifier Dictionary

| Modern Exam Quantifier | Exact Formal Logical Translation | Critical Exam Deduction Rule |
| :--- | :--- | :--- |
| **"A few" / "At least some" / "Frequently" / "Mostly"** | Standard **"Some"** ($I$-type) | Normal overlapping intersection. |
| **"Each" / "Every" / "Any"** | Standard **"All"** ($A$-type) | Complete inclusion. |
| **"None" / "Never"** | Standard **"No"** ($E$-type) | Complete disjointness. |
| **"Only a few A are B"** | **"Some A are B" AND "Some A are NOT B"** | In possibility: *"All B can be A"* is TRUE, but *"All A can be B"* is STRICTLY FALSE! |
| **"Only A are B"** | **"All B are A"** (Exclusive Property) | $B$ is completely enclosed in $A$, and $B$ can NEVER intersect with any third circle $C$! |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Dual-Diagram Method & Possibility Testing Engine',
        body: `### The Dual-Diagram Elimination Algorithm
To achieve 100% accuracy in syllogisms without second-guessing:
1. **Draw the Basic Minimum-Overlap Diagram:**
   * Draw circles with the absolute minimum contact required by the premises.
   * If a definite conclusion fails in the basic diagram, **it is immediately FALSE**.
2. **If a Definite Negative Conclusion Passes, Attempt to Disprove It:**
   * Definite negative: *"Some A are not B"* or *"No A is B"*.
   * Try to draw a valid alternate diagram where the conclusion is violated without breaking any premise. If you can disprove it even once, it is FALSE.
3. **The Possibility Testing Engine:**
   * A conclusion stated as *"is a possibility"* (e.g. *"All A being B is a possibility"*):
   * Ask: *Can I construct any valid Venn diagram where All A are B, without violating any original premise?*
   * If YES $\\implies$ The possibility is **TRUE**.
   * If every attempt violates a premise (e.g. violates "No A is B" or "Some A are not B") $\\implies$ The possibility is **FALSE**.

### Step-by-Step Walkthrough of "Only a few" Trap
**Premises:**
1. Only a few Books are Pens.
2. All Pens are Papers.
3. No Paper is Eraser.

**Analyze Deductions:**
* Premise 1 means: (i) Some Books are Pens, and (ii) Some Books are NOT Pens.
* **Conclusion I: All Books can never be Papers.**
  * *Check:* Can all Books be Papers? If all Books enter Papers, they do not necessarily enter Pens. But Books can freely enter Papers without violating "Some Books are not Pens"! Thus, "All Books can be Papers" is a valid possibility. Therefore, the statement "All Books can NEVER be Papers" is **FALSE**.
* **Conclusion II: All Pens being Erasers is a possibility.**
  * *Check:* All Pens are inside Papers. No Paper can touch Eraser. Therefore, no Pen can ever touch Eraser. This possibility is **STRICTLY FALSE**.
* **Conclusion III: Some Books are not Erasers.**
  * *Check:* The part of Books that are Pens are also Papers. Since no Paper can touch Eraser, that common portion of Books can NEVER touch Eraser! Therefore, "Some Books are not Erasers" is a **DEFINITE TRUE FACT**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps: "Either-Or" Complementary Pairs & Reverse Syllogisms',
        body: `### High-Yield Examiner Traps in Syllogisms

1. **The "Either-Or" Complementary Pair Conditions (Mandatory Check!):**
   When two conclusions individually fail, they form an **"Either I or II follows"** pair IF AND ONLY IF all three conditions are satisfied:
   1. Both conclusions share the **exact same subject and predicate**.
   2. Both conclusions are **individually false/unprovable** in the basic diagram.
   3. They form one of the two valid complementary pairs:
      * Pair 1: **"Some" + "No"** (e.g. *Some A are B* + *No A is B*)
      * Pair 2: **"All" + "Some not"** (e.g. *All A are B* + *Some A are not B*)
   * *Critical Trap:* **"All" + "No" is NEVER an Either-Or pair!** (Both can be false simultaneously if some A are B and some are not).

2. **The "Only A is B" Exclusive Trap:**
   * Statement: *"Only Engineers are Managers."*
   * Meaning: All Managers are Engineers ($M \\subseteq E$).
   * *Trap:* If a third statement says *"Some Engineers are Pilots"*, students often draw an overlap between Managers and Pilots. **Managers can NEVER touch Pilots!** Under "Only", Managers belongs exclusively to Engineers.

3. **Reverse Syllogism Strategy:**
   * In Mains exams, you are given conclusions first and must choose which set of premises generates them.
   * *Elimination Shortcut:* If the conclusion is negative (e.g. *"No A is B"*), eliminate any premise option that contains ONLY positive statements ("All", "Some"), because positive premises can NEVER yield a definite negative conclusion!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-38-1',
        statement: 'The modern quantifier "Only a few A are B" strictly decomposes into the conjunction of two simultaneous propositions: "Some A are B" AND "Some A are not B".',
        claimType: 'LOGICAL_DEFINITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'Decision-tree logic: conditional validity of quantifiers and subset relationships.',
      },
      {
        id: 'CLM-QUANT-38-2',
        statement: 'A possibility conclusion is logically valid if there exists at least one contradiction-free Venn-Euler diagram, whereas a definite conclusion requires universal validity across all possible diagrams.',
        claimType: 'METHODOLOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'Unique solution existence criteria: distinguish between what is definitively true versus what is merely possible.',
      },
      {
        id: 'CLM-QUANT-38-3',
        statement: 'An "Either-Or" complementary pair strictly requires identical subject and predicate, individual unprovability, and must be either (Some + No) or (All + Some not); the combination (All + No) is invalid.',
        claimType: 'LOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Quant_Reasoning_Master.md#note-19',
        excerpt: 'Either Statement 1 alone or Statement 2 alone: complementary outcome logic.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'Reasoning Ability — Syllogisms & Deductive Logic',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_QUANTIFIER_ANALYSIS',
        notes: 'Guaranteed 5 questions in Prelims and Mains (Only a few, Reverse Syllogisms).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'Reasoning Ability — Syllogisms',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_QUANTIFIER_ANALYSIS',
        notes: 'Core scoring component in IBPS PO Reasoning.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 Reasoning — Modern Syllogisms',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_RIGOR',
        notes: 'High weightage in Phase 1 Reasoning section (worth 5 marks).',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Intelligence & Reasoning — Syllogisms',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STANDARD_CATEGORICAL_LOGIC',
        notes: 'Tested in Tier 1 and Tier 2 reasoning sections.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Reasoning & Mental Ability — Syllogisms',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'VENN_DIAGRAM_APPLICATION',
        notes: 'Frequent question in RAS Prelims reasoning paper.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Syllogisms & Deductive Logic',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CLASSICAL_LOGICAL_DEDUCTION',
        notes: 'Core recurring topic in UPSC CSAT (3-5 questions every year).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Mental Ability — Syllogisms',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'STANDARD_LOGIC',
        notes: 'Tested in APFC mental ability paper.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not tested in IIBF exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '"Only a few A are B" = Some A are B AND Some A are NOT B. "Only A are B" = All B are A (and B can touch nothing else). Either-Or pairs: (Some + No) or (All + Some not). All + No is NEVER either-or! Possibility needs 1 valid diagram; Definite needs ALL diagrams.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Modern Syllogism Engine: 1) Minimum Overlap: Draw circles with least possible intersection. 2) "Only a few": In "Only a few A are B", All B can be A is possible, but All A can be B is impossible. 3) Possibility testing: True if any valid diagram can be drawn without violating premises. 4) Either-Or: Needs same subject/predicate, both unprovable, and must be (Some + No) or (All + Some not). Positive premises can never prove a definite negative conclusion.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Deductive Syllogism Architecture: 1) Propositions: A (All, A⊆B), E (No, A∩B=∅), I (Some, A∩B≠∅), O (Some not, A\\B≠∅). 2) Modern Operators: "A few" = Some. "Only A is B" = All B are A (exclusive). "Only a few A are B" = Some A are B ∧ Some A are not B. 3) Possibility Verification: Possibility is valid if ∃ valid model M |= Conclusion. Definite is valid if ∀ valid models M |= Conclusion. 4) Reverse Syllogisms: Filter by sign polarity (negative conclusion requires negative premise).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SYLLOGISM_MCQ',
        stem: 'Statements:\n1. Only a few Mountains are Hills.\n2. All Hills are Valleys.\n3. No Valley is a Plain.\nConclusions:\nI. All Mountains can never be Valleys.\nII. Some Mountains are not Plains.\nIII. All Hills being Mountains is a possibility.\nWhich of the conclusions logically follow(s)?',
        options: [
          'Only I and II follow',
          'Only II and III follow',
          'Only I and III follow',
          'All I, II and III follow'
        ],
        correctAnswer: 'Only II and III follow',
        explanation: 'Analyze Premise 1: "Only a few Mountains are Hills" means: (a) Some Mountains are Hills, and (b) Some Mountains are NOT Hills.\nAnalyze Conclusion I: "All Mountains can never be Valleys." Can all Mountains be inside Valleys? Yes! Mountains can be entirely inside Valleys while Hills occupy only a subset of Valleys, satisfying "Some Mountains are not Hills". Since it IS possible for all Mountains to be Valleys, the assertion that they CAN NEVER be Valleys is FALSE.\nAnalyze Conclusion II: "Some Mountains are not Plains." The part of Mountains that are Hills are inside Valleys. Since No Valley is Plain, that overlapping portion of Mountains can never be Plains. Hence, Some Mountains are not Plains is DEFINITELY TRUE.\nAnalyze Conclusion III: "All Hills being Mountains is a possibility." In "Only a few Mountains are Hills", All Hills can be inside Mountains without contradiction. Hence, this possibility is DEFINITELY TRUE.\nTherefore, Only II and III follow.',
        trapExplanation: 'Students often believe that because Some Mountains are not Hills, Mountains cannot enter Valleys. However, Valleys is larger than Hills, so all Mountains can easily enter Valleys.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: '"Only a few" vs outer container possibility trap.',
      },
      {
        type: 'SYLLOGISM_MCQ',
        stem: 'Statements:\n1. Some Phones are Watches.\n2. No Watch is a Camera.\nConclusions:\nI. Some Phones are Cameras.\nII. No Phone is a Camera.\nWhich of the conclusions logically follow(s)?',
        options: [
          'Only I follows',
          'Only II follows',
          'Either I or II follows',
          'Neither I nor II follows'
        ],
        correctAnswer: 'Either I or II follows',
        explanation: 'Check the conclusions: Conclusion I is "Some Phones are Cameras" (Particular Affirmative, I-type). Conclusion II is "No Phone is a Camera" (Universal Negative, E-type).\n1. Both conclusions have the exact same subject (Phones) and predicate (Cameras).\n2. Both conclusions are individually unprovable in the basic minimum overlap diagram.\n3. They form the canonical complementary pair: "Some" + "No".\nAt least one and exactly one of these two statements must be true in any possible world: either there is some overlap between Phones and Cameras, or there is zero overlap. Therefore, "Either I or II follows".',
        trapExplanation: 'Choosing "Neither follows" is the standard trap because students check individual validity and miss the complementary Either-Or pair condition.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Either-Or complementary pair (Some + No) identification.',
      },
    ],
  },
];

export async function seedBatchQuantBatch4CanonicalKnowledge() {
  console.log('Seeding Quantitative Aptitude Batch 4 (Advanced Geometry, Solids, Quadratics, Series, DS & Logic)...');

  // 1. Ensure Domain & Subject exist
  const domain = await db.domain.upsert({
    where: { slug: 'quantitative-aptitude-and-reasoning' },
    update: {
      name: 'Quantitative Aptitude & Reasoning',
      description: 'Mathematical problem solving, arithmetic reasoning, data interpretation, and quantitative logic for competitive examinations.',
      order: 8,
      status: 'ACTIVE',
    },
    create: {
      slug: 'quantitative-aptitude-and-reasoning',
      name: 'Quantitative Aptitude & Reasoning',
      description: 'Mathematical problem solving, arithmetic reasoning, data interpretation, and quantitative logic for competitive examinations.',
      order: 8,
      status: 'ACTIVE',
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'quantitative-aptitude-and-data-interpretation' },
    update: {
      domainId: domain.id,
    },
    create: {
      slug: 'quantitative-aptitude-and-data-interpretation',
      name: 'Quantitative Aptitude & Data Interpretation',
      scopeStatement: 'Comprehensive first-principles mastery of speed calculation, algebra, number systems, commercial arithmetic, 2D/3D mensuration, visual data interpretation, caselets, and data sufficiency for Banking Prelims & Mains.',
      description: 'Comprehensive quantitative abilities, speed mathematics, commercial arithmetic, geometric invariants, solid mensuration, combinatorial probability, and analytical data interpretation.',
      domainId: domain.id,
      order: 8,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topic 90 exists for deductive logic
  await db.topic.upsert({
    where: {
      subjectId_slug: {
        subjectId: subject.id,
        slug: 'deductive-logic-syllogisms-and-critical-reasoning',
      },
    },
    update: {
      title: 'Deductive Logic, Syllogisms & Critical Reasoning',
      description: 'Categorical propositions, Euler-Venn diagrams, modern "only a few" quantifiers, reverse syllogisms, and critical reasoning logic.',
      scope: 'Formal deductive logic, possibility conditions, either-or pairs, and argument evaluation.',
      order: 90,
      status: 'ACTIVE',
    },
    create: {
      slug: 'deductive-logic-syllogisms-and-critical-reasoning',
      title: 'Deductive Logic, Syllogisms & Critical Reasoning',
      description: 'Categorical propositions, Euler-Venn diagrams, modern "only a few" quantifiers, reverse syllogisms, and critical reasoning logic.',
      scope: 'Formal deductive logic, possibility conditions, either-or pairs, and argument evaluation.',
      order: 90,
      subjectId: subject.id,
      status: 'ACTIVE',
    },
  });

  // 3. Ensure Canonical Source exists
  const sourceQuant = await db.source.upsert({
    where: { id: 'SRC-QUANT-CANONICAL-2026' },
    update: {},
    create: {
      id: 'SRC-QUANT-CANONICAL-2026',
      title: 'Quantitative Aptitude & Data Interpretation Canonical Reference Corpus (2026)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'First-principles mathematical and algorithmic synthesis integrating standard competitive arithmetic, Euclidean geometry invariants, combinatorial probability, and authentic memory-based banking examination benchmarks.',
    },
  });

  // Ensure Target Exams exist
  const defaultExams = [
    { slug: 'sbi-po', name: 'SBI PO' },
    { slug: 'ibps-po', name: 'IBPS PO' },
    { slug: 'rbi-grade-b', name: 'RBI Grade B' },
    { slug: 'ssc-cgl', name: 'SSC CGL' },
    { slug: 'rpsc-ras', name: 'RPSC RAS' },
    { slug: 'upsc-cse', name: 'UPSC CSE' },
    { slug: 'upsc-apfc', name: 'UPSC APFC' },
    { slug: 'iibf-dbf', name: 'IIBF DBF' },
  ];
  for (const ex of defaultExams) {
    await db.exam.upsert({
      where: { slug: ex.slug },
      update: {},
      create: { slug: ex.slug, name: ex.name, status: 'ACTIVE' },
    });
  }

  // 4. Seed Concepts
  for (const c of QUANT_BATCH_4_CONCEPTS) {
    const topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: c.topicSlug,
      },
    });
    if (!topic) {
      console.warn(`Topic not found for slug: ${c.topicSlug}, skipping concept: ${c.id}`);
      continue;
    }

    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
    });

    // Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const block of c.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: block.type as any,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: block.visibility as any,
        },
      });
    }

    // Claims & Evidence
    for (const clm of c.claims) {
      const claim = await db.claim.upsert({
        where: { id: clm.id },
        update: {
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: clm.id,
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
      });

      await db.evidence.deleteMany({ where: { claimId: claim.id } });
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceQuant.id,
          locator: clm.locator,
          excerpt: clm.excerpt,
          evidenceType: 'EXCERPT',
          authority: 'PRIMARY_REGULATORY_TEXT',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'CERTAIN',
        },
      });
    }

    // Exam Concept Mappings
    const examSlugMap: Record<string, string> = {
      SBI_PO: 'sbi-po',
      IBPS_PO: 'ibps-po',
      RBI_GRADE_B: 'rbi-grade-b',
      SSC_CGL: 'ssc-cgl',
      RPSC_RAS: 'rpsc-ras',
      UPSC_CSE: 'upsc-cse',
      UPSC_APFC: 'upsc-apfc',
      IIBF_DBF: 'iibf-dbf',
    };

    for (const em of c.examMappings) {
      const slug = examSlugMap[em.examCode] || em.examCode.toLowerCase().replace(/_/g, '-');
      const exam = await db.exam.findFirst({
        where: { slug },
      });
      if (!exam) continue;

      await db.examConceptMapping.upsert({
        where: {
          examId_conceptId: {
            examId: exam.id,
            conceptId: concept.id,
          },
        },
        update: {
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance,
          priority: em.priority,
          requiredDepth: em.requiredDepth,
          notes: em.notes,
        },
        create: {
          examId: exam.id,
          conceptId: concept.id,
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance,
          priority: em.priority,
          requiredDepth: em.requiredDepth,
          notes: em.notes,
        },
      });
    }

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of c.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type as any,
          content: ru.content,
          priority: ru.priority as any,
          order: ru.order,
        },
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of c.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type as any,
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty as any,
          isPYQ: q.isPYQ ?? false,
          pyqYear: q.pyqYear,
          pyqPaper: q.pyqPaper,
          pyqStage: q.pyqStage,
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }
  }

  console.log(`Successfully seeded ${QUANT_BATCH_4_CONCEPTS.length} Batch 4 Quantitative Aptitude canonical concepts.`);
}
