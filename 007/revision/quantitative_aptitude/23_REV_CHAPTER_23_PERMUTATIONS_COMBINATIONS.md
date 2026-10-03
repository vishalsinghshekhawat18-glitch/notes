# RAPID REVISION MATRIX: CHAPTER 23

**Topic**: Permutations, Combinations, Partitioning & Distribution Theory  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Selection, Arrangement & Constrained Engines

| Framework | Target Condition | Mathematical Formula | Key Operational Rule |
| :--- | :--- | :--- | :--- |
| **Permutation ($^nP_r$)** | Order **MATTERS** | $\frac{n!}{(n - r)!}$ | Seating, digits, ranks, arrangements. |
| **Combination ($^nC_r$)** | Order **IGNORED** | $\frac{n!}{r!(n - r)!}$ | Committees, groups, handshakes, selections. |
| **String Method** | Items kept **TOGETHER** | $(n - k + 1)! \times k!$ | Bundle items into 1 super-item, then multiply by internal $k!$. |
| **Gap Method** | Items kept **APART** | $(n - k)! \times \,^{n - k + 1}P_k$ | Arrange unconstrained items first; insert items into the $(n - k + 1)$ gaps. |
| **Circular Permutation** | Seating people | $(n - 1)!$ | Fix 1 reference anchor. |
| **Garland / Necklace** | Reversible ring | $\frac{(n - 1)!}{2}$ | Clockwise and anticlockwise are identical. |

---

### Matrix B: Distribution, Derangements & Geometry

| Combinatorial Architecture | Governing Formulation | Boundary Constraint |
| :--- | :--- | :--- |
| **Stars & Bars (Non-negative $x_i \ge 0$)** | $^{n + k - 1}C_{k - 1}$ | Empty bins allowed ($n$ identical items, $k$ distinct bins). |
| **Stars & Bars (Positive $x_i \ge 1$)** | $^{n - 1}C_{k - 1}$ | Every bin must receive at least 1 item. |
| **Derangements ($!n$)** | $D_n = n! \sum_{i=0}^n \frac{(-1)^i}{i!}$ | $D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$. |
| **Straight Lines ($m$ collinear)** | $^nC_2 - \,^mC_2 + 1$ | Add $+1$ for the single shared straight line! |
| **Triangles ($m$ collinear)** | $^nC_3 - \,^mC_3$ | Collinear points produce zero triangles. |
| **Parallelograms** | $^mC_2 \times \,^nC_2$ | Formed by $m$ parallel lines intersecting $n$ parallel lines. |

---

## 2. 60-Second Retrieval Skeleton

```text
Permutation vs Combination: ^nP_r = ^nC_r × r!
➔ Repetition in Words: n! / (p! · q! · r!)  [e.g., ARRANGE ➔ 7! / (2! · 2!)]
➔ Constrained Seating:
    - Together: String Method ➔ (n - k + 1)! × k!
    - Never Together: Gap Method ➔ (Unconstrained)! × ^(Gaps)P_(Constrained)
➔ Identical Items into Distinct Bins:
    - x₁ + x₂ + ... + x_k = n (x_i ≥ 0) ➔ ^(n + k - 1)C_(k - 1)
    - x₁ + x₂ + ... + x_k = n (x_i ≥ 1) ➔ ^(n - 1)C_(k - 1)
➔ Derangement Values: D₁=0, D₂=1, D₃=2, D₄=9, D₅=44, D₆=265
➔ Polygons: Diagonals = n(n - 3)/2 ; Lines = ^nC₂ - ^mC₂ + 1
```

---

## 3. Top 5 Instant Killer Traps

1. **String Method Internal Permutation Omission**: Forgetting to multiply by $k!$ for permutations occurring inside the bundle.
2. **Gap Count Under-estimation**: Taking $n$ gaps for $n$ items. $n$ objects in a row create **$(n + 1)$ distinct spaces**!
3. **Circular Seating Halving Trap**: Dividing $(n - 1)!$ by $2$ when arranging people around a table. Human beings are asymmetric; only divide by $2$ for necklaces/garlands.
4. **Stars and Bars Zero vs One Confusion**: Using $^{n-1}C_{k-1}$ when empty boxes are allowed. Non-negative requires $\mathbf{^{n+k-1}C_{k-1}}$.
5. **Collinear Points Line Lost**: Forgetting the $+1$ in $^nC_2 - \,^mC_2 + 1$. The collinear points themselves form 1 complete line.
