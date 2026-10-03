# CHAPTER 23: PERMUTATIONS, COMBINATIONS, PARTITIONING & DISTRIBUTION THEORY

**Domain**: Modern Discrete Mathematics, Combinatorial Synthesis & Allocation Topology  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: Fundamental Counting Principles $\to$ Permutations vs Combinations $\to$ The Gap and String Constrained Engines $\to$ Stars and Bars Distribution $\to$ Derangements & Geometric Combinatorics $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY: THE AXIOMATIC COUNTING SYSTEM

Combinatorics is the branch of discrete mathematics that quantifies arrangements, selections, and partitions of finite sets without physical enumeration.

### The Fundamental Principles of Counting (FPC)
1. **The Rule of Product (Multiplication Principle - Logical AND)**:
   If an operation can be performed in $m$ independent ways, and subsequent to this, a second operation can be performed in $n$ independent ways:
   $$\mathbf{\text{Total Sequences} = m \times n}$$
2. **The Rule of Sum (Addition Principle - Logical OR)**:
   If an operation can be performed in $m$ ways, and an alternative mutually exclusive operation can be performed in $n$ ways:
   $$\mathbf{\text{Total Alternatives} = m + n}$$

### Factorial Engine & Conventions
The product of the first $n$ positive natural numbers is denoted by $n!$ (read "$n$ factorial"):
$$n! = n \times (n - 1) \times (n - 2) \times \dots \times 2 \times 1$$
$$\text{Convention (Axiom of Empty Product)}: \mathbf{0! = 1}, \quad 1! = 1$$

---

## 2. PERMUTATIONS: ORDER-SENSITIVE ARRANGEMENTS

A **Permutation** is an ordered arrangement of elements chosen from a specified set. Here, the spatial sequence matters fundamentally ($AB \neq BA$).

### Linear Permutation of Distinct Items
The number of distinct arrangements of $n$ distinct items taken $r$ at a time ($0 \le r \le n$):
$$\mathbf{^nP_r = \frac{n!}{(n - r)!} = n(n - 1)(n - 2)\dots(n - r + 1)}$$

### Permutations with Repetition / Indistinguishable Elements
When arranging $n$ total items where $p$ items are indistinguishable duplicates of kind 1, $q$ of kind 2, and $r$ of kind 3:
$$\mathbf{\text{Total Arrangements} = \frac{n!}{p! \cdot q! \cdot r!}}$$

*Example*: The word $\text{ARRANGE}$ has $7$ letters ($2\text{ A's}, 2\text{ R's}, 1\text{ N}, 1\text{ G}, 1\text{ E}$):
$$\text{Arrangements} = \frac{7!}{2! \cdot 2!} = \frac{5040}{4} = \mathbf{1,260}$$

### Circular Permutations
Arranging $n$ distinct entities along a closed circular perimeter:
- **Directionally Distinguishable (Clockwise $\neq$ Anticlockwise)**:
  Fixing $1$ reference anchor reduces free degrees of freedom by $1$:
  $$\mathbf{P_{\text{circular}} = (n - 1)!}$$
- **Reversible Necklaces / Garlands of Beads (Clockwise $\equiv$ Anticlockwise)**:
  Flipping the ring in 3D space makes clockwise and counter-clockwise arrangements identical:
  $$\mathbf{P_{\text{necklace}} = \frac{(n - 1)!}{2}}$$

---

## 3. CONSTRAINED ARRANGEMENT ENGINES: STRING VS GAP

```
           THE STRING METHOD                              THE GAP METHOD
        (Items Kept Together)                         (Items Kept Apart)
      ┌─────────────────────────┐               _ C₁ _ C₂ _ C₃ _ C₄ _ C₅ _
      │  Entity A  +  Entity B  │               ▲    ▲    ▲    ▲    ▲    ▲
      └─────────────────────────┘               │    │    │    │    │    │
       Tied into 1 Single Unit                   6 Available Gaps for 2 Items
```

### Method 1: The String / Tie Method (Items Must Be Together)
1. Tie the constrained $k$ items together inside an imaginary bundle, treating it as a **single super-item**.
2. Count remaining free items: $(n - k)$ items $+ 1$ bundle $= (n - k + 1)$ entities.
3. Permute the $(n - k + 1)$ entities: $(n - k + 1)!$.
4. Unpack the bundle and permute internal elements: $k!$.
$$\mathbf{\text{Total Ways} = (n - k + 1)! \times k!}$$

### Method 2: The Gap Method (Items Must NEVER Be Adjacent)
1. Arrange all $(n - k)$ unconstrained items first in a line: $(n - k)!$ ways.
2. These items create exactly **$(n - k + 1)$ potential boundary gaps** (including ends).
3. Place the $k$ constrained items into these separate gaps:
$$\mathbf{\text{Total Ways} = (n - k)! \times \,^{n - k + 1}P_k = (n - k)! \times \,^{n - k + 1}C_k \times k!}$$

---

## 4. COMBINATIONS: ORDER-INVARIANT SELECTIONS

A **Combination** is a selection of elements where internal ordering is disregarded ($AB \equiv BA$).

$$\mathbf{^nC_r = \frac{n!}{r!(n - r)!} = \frac{^nP_r}{r!}}$$

### Fundamental Combinatorial Identities
1. **Complementary Symmetry**: $\mathbf{^nC_r = \,^nC_{n - r}}$
2. **Pascal’s Triangle Recursion**: $\mathbf{^nC_r + \,^nC_{r - 1} = \,^{n+1}C_r}$
3. **Equating Subsets**: If $^nC_x = \,^nC_y$, then either $\mathbf{x = y}$ or $\mathbf{x + y = n}$.
4. **Total Subsets (The Power Set Identity)**:
   $$\sum_{r=0}^n \,^nC_r = \,^nC_0 + \,^nC_1 + \dots + \,^nC_n = \mathbf{2^n}$$
   - Selection of **at least one item** from $n$ distinct items: $\mathbf{2^n - 1}$.

---

## 5. ADVANCED DISTRIBUTION THEORY: STARS AND BARS

The distribution of objects into containers depends fundamentally on whether the objects and boxes are distinct or identical.

### The Stars and Bars Theorems
Let $n$ **identical** objects be distributed among $k$ **distinct** recipients:

```
               Distribution of 7 Identical Balls into 3 Distinct Boxes
                    ★  ★  ★  |  ★  ★  |  ★  ★
                     Box 1       Box 2     Box 3
               7 Stars (n) and 2 Separators/Bars (k - 1)
```

1. **Non-Negative Integer Solutions ($x_i \ge 0$, Empty Boxes Permitted)**:
   The total number of ways to distribute $n$ identical items into $k$ distinct bins:
   $$\mathbf{N = \,^{n + k - 1}C_{k - 1}}$$
2. **Strictly Positive Integer Solutions ($x_i \ge 1$, No Empty Boxes)**:
   Every recipient must receive at least one item:
   $$\mathbf{N = \,^{n - 1}C_{k - 1}}$$

### Partitioning Distinct Items into Groups
Dividing $n$ distinct items into $k$ specified groups of sizes $p, q, r$ (where $p + q + r = n$):
$$\mathbf{\text{Number of Ways} = \frac{n!}{p! \cdot q! \cdot r!}}$$
- If groups are of **equal sizes** (say $m$ groups each of size $p$, so $n = m \cdot p$):
  - If groups are **distinct / labelled** (e.g., given to persons $A, B, C$): $\frac{n!}{(p!)^m}$.
  - If groups are **unlabelled / anonymous parcels**: $\mathbf{\frac{n!}{(p!)^m \cdot m!}}$.

---

## 6. DERANGEMENTS & GEOMETRIC COMBINATORICS

### The Subfactorial / Derangement Formulation ($!n$)
A **derangement** is a permutation of $n$ elements such that no element appears in its original natural position (e.g., putting $n$ letters into $n$ addressed envelopes such that every envelope receives the wrong letter):

$$\mathbf{D_n = !n = n! \left[ 1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + \frac{(-1)^n}{n!} \right]}$$

$$\mathbf{D_n = (n - 1)(D_{n-1} + D_{n-2})}$$

| Number of Items ($n$) | Total Permutations ($n!$) | Total Derangements ($D_n$) | Percentage ($D_n / n!$) |
| :--- | :--- | :--- | :--- |
| **$n = 1$** | $1$ | **$0$** | $0.00\%$ |
| **$n = 2$** | $2$ | **$1$** | $50.00\%$ |
| **$n = 3$** | $6$ | **$2$** | $33.33\%$ |
| **$n = 4$** | $24$ | **$9$** | $37.50\%$ |
| **$n = 5$** | $120$ | **$44$** | $36.67\%$ |
| **$n = 6$** | $720$ | **$265$** | $36.81\% \approx \frac{1}{e}$ |

### Geometric Combinatorics Matrix
From a planar configuration of $n$ points where $m$ points are strictly collinear:
- **Straight Lines Formed**: $\mathbf{^nC_2 - \,^mC_2 + 1}$
- **Triangles Formed**: $\mathbf{^nC_3 - \,^mC_3}$
- **Diagonals of Convex $n$-gon**: $\mathbf{^nC_2 - n = \frac{n(n - 3)}{2}}$
- **Parallelograms Formed**: Intersection of $m$ parallel lines and $n$ parallel lines:
  $$\mathbf{N = \,^mC_2 \times \,^nC_2 = \frac{m(m - 1)}{2} \times \frac{n(n - 1)}{2}}$$

---

## 7. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Constrained Committee Selection (SBI PO Prelims)
**Problem**: A committee of $5$ persons is to be formed from a group of $6$ men and $4$ women. In how many ways can this committee be chosen if it must contain at least $3$ men?

**Solution via Case Decomposition**:
- Total candidates: $6\text{ Men}, 4\text{ Women}$; Committee size $= 5$.
- Condition: $\text{Men} \ge 3$.

1. **Case 1 (3 Men, 2 Women)**:
   $$^6C_3 \times \,^4C_2 = \frac{6 \times 5 \times 4}{3 \times 2 \times 1} \times \frac{4 \times 3}{2 \times 1} = 20 \times 6 = \mathbf{120}$$
2. **Case 2 (4 Men, 1 Woman)**:
   $$^6C_4 \times \,^4C_1 = \,^6C_2 \times 4 = \frac{6 \times 5}{2} \times 4 = 15 \times 4 = \mathbf{60}$$
3. **Case 3 (5 Men, 0 Women)**:
   $$^6C_5 \times \,^4C_0 = 6 \times 1 = \mathbf{6}$$

$$\text{Total Permissible Formations} = 120 + 60 + 6 = \mathbf{186 \text{ ways}}$$

---

### Exemplar 2: The Gap Method in Seating (RBI Grade B Phase 1)
**Problem**: In how many ways can $5$ boys and $4$ girls be seated in a row such that no two girls sit adjacent to each other?

**Execution via Gap Engine**:
1. Seat the $5$ boys first:
   $$N_{\text{boys}} = 5! = \mathbf{120 \text{ ways}}$$
2. The $5$ boys create $5 + 1 = 6$ boundary gaps:
   $$\_ B_1 \_ B_2 \_ B_3 \_ B_4 \_ B_5 \_$$
3. Select and arrange the $4$ girls in these $6$ gaps:
   $$N_{\text{girls}} = \,^6P_4 = 6 \times 5 \times 4 \times 3 = \mathbf{360 \text{ ways}}$$
4. Total arrangements:
   $$\text{Total} = 120 \times 360 = \mathbf{43,200 \text{ ways}}$$

---

### Exemplar 3: Non-Negative Distribution via Stars & Bars (CAT)
**Problem**: How many non-negative integer solutions exist for the equation $x_1 + x_2 + x_3 + x_4 = 12$?

**Execution via Stars & Bars**:
Here $n = 12$ identical units, $k = 4$ distinct variables, $x_i \ge 0$.
$$N = \,^{n + k - 1}C_{k - 1} = \,^{12 + 4 - 1}C_{4 - 1} = \,^{15}C_3$$
$$N = \frac{15 \times 14 \times 13}{3 \times 2 \times 1} = 5 \times 7 \times 13 = 35 \times 13 = \mathbf{455 \text{ solutions}}$$

---

### Exemplar 4: Four-Letter Derangement Application (CSAT / Regulatory)
**Problem**: Four persons enter a restaurant and check their coats. Upon leaving, the attendant hands them their coats completely at random. In how many ways can exactly one person receive their own correct coat?

**Execution via Derangement Calculus**:
1. Choose which $1$ person receives their correct coat:
   $$^4C_1 = \mathbf{4 \text{ ways}}$$
2. The remaining $3$ persons must all receive the WRONG coat (Derangement of 3 items):
   $$D_3 = !3 = 3!\left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!}\right) = 6\left(\frac{1}{2} - \frac{1}{6}\right) = 6\left(\frac{2}{6}\right) = \mathbf{2 \text{ ways}}$$
3. Total configurations:
   $$\text{Total} = \,^4C_1 \times D_3 = 4 \times 2 = \mathbf{8 \text{ ways}}$$

---

## 8. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: String Method Internal Permutation Neglect** | Packing items into a bundle without permuting inside the bundle ($k!$). | The items within the bundle can permute among themselves: multiply by $\mathbf{k!}$. |
| **Trap 2: Gap Method Gap Under-count** | Assuming $n$ items create $n$ gaps. | $n$ items in a line create **$(n + 1)$ potential gaps** (including the two outer edges). |
| **Trap 3: Stars and Bars Condition Inversion** | Using $^{n-1}C_{k-1}$ when non-negative solutions ($x \ge 0$) are permitted. | For non-negative ($x \ge 0$), use $\mathbf{^{n+k-1}C_{k-1}}$; for positive ($x \ge 1$), use $\mathbf{^{n-1}C_{k-1}}$. |
| **Trap 4: Circular Directional Halving Error** | Halving $(n-1)!$ for seating people at a round table. | Human beings have distinct left/right sides; only divide by $2$ for **reversible physical items** (necklaces/beads). |
| **Trap 5: Collinear Straight Line Over-Subtraction** | Writing straight lines as $^nC_2 - \,^mC_2$. | The $m$ collinear points still form **one single straight line**: add $1$ back: $\mathbf{^nC_2 - \,^mC_2 + 1}$. |
