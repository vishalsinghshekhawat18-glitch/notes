# 🎓 Previous Year Questions (PYQs): Advanced Banking & Civil Services Quantitative Master

> **A Rigorous Mathematical & Quantitative Reasoning Vault for High-Stakes Competitive Examinations.**
> Complete first-principles derivations, step-by-step algebraic resolutions, and analytical exam traps. Formatted for crystal-clear A4 monochrome printing.

---

## 📑 Master Index & Table of Contents

1. [Advanced Mensuration & Solid Geometry PYQs (SBI PO Mains 2022–2025)](#note-1)
2. [Work, Time & Complex Arithmetic Systems PYQs (SBI PO Mains 2025)](#note-2)
3. [Higher Algebra, Polynomial Roots & Factorial Series PYQs (SBI PO Mains 2022)](#note-3)

---

<a id="note-1"></a>

## 1. Advanced Mensuration & Solid Geometry PYQs

> 🧠 **Key Concept — First-Principles Solid Geometry Invariant**
> For any rectangular cuboid of dimensions \(l, b, h\), Total Surface Area is \(\text{TSA} = 2(lb + bh + hl)\), Lateral Surface Area is \(\text{LSA} = 2(l + b)h\), and Volume is \(V = lbh\). For a cylinder, \(V = \pi r^2 h\).

### 📐 1. Solved Benchmark Questions

**Worked Example:** Q1 (SBI PO Mains 2025). A cuboid has Total Surface Area \(\text{TSA} = 94\text{ cm}^2\) and Volume \(V = 60\text{ cm}^3\). The length, breadth, and height are positive consecutive integers with \(l < b < h\). Compare:
- **Quantity I:** Lateral Surface Area (LSA) of the cuboid.
- **Quantity II:** Total Surface Area (TSA) of a cube with side equal to \(b\).

**Step-by-Step Resolution:**
1. Let the consecutive positive integers be \(l = n - 1\), \(b = n\), and \(h = n + 1\).
2. Given Volume:
   $$V = (n - 1) \cdot n \cdot (n + 1) = 60\text{ cm}^3$$
   Factoring 60 into three consecutive positive integers:
   $$3 \times 4 \times 5 = 60 \implies n = 4$$
   Therefore: \(l = 3\text{ cm}\), \(b = 4\text{ cm}\), and \(h = 5\text{ cm}\).
3. Verification via TSA:
   $$\text{TSA} = 2(3 \times 4 + 4 \times 5 + 5 \times 3) = 2(12 + 20 + 15) = 2(47) = 94\text{ cm}^2$$
   The given condition holds identically.
4. Evaluation of Quantities:
   - **Quantity I (LSA of Cuboid):**
     $$\text{LSA} = 2(l + b)h = 2(3 + 4) \times 5 = 2(7) \times 5 = 70\text{ cm}^2$$
   - **Quantity II (TSA of Cube with side \(s = b = 4\text{ cm}\)):**
     $$\text{TSA}_{\text{cube}} = 6s^2 = 6 \times (4)^2 = 6 \times 16 = 96\text{ cm}^2$$
5. **Conclusion:** \(\text{Quantity I} (70) < \text{Quantity II} (96)\).

---

**Worked Example:** Q2 (SBI PO Mains 2022). A cylindrical vessel contains a mixture of milk and water in the ratio \(4 : 5\). After selling \(x\text{ ml}\) of the mixture and replacing it completely with pure milk, the ratio of milk to water becomes \(57 : 60\). The quantity of mixture sold (\(x\)) is \(108\text{ ml}\) less than the initial total quantity of the mixture. If the radius of the vessel is \(0.7\text{ cm}\) and \(37\text{ cm}^3\) of the vessel remains empty after replacement, determine the height of the cylindrical vessel (take \(\pi = 22/7\)).

**Step-by-Step Resolution:**
1. Let initial mixture volume be \(V_0\).
   Initial ratio: \(\text{Milk} : \text{Water} = 4 : 5\).
2. Given: Quantity sold \(x = V_0 - 108\text{ ml} \implies V_0 - x = 108\text{ ml}\).
   Thus, after removing \(x\text{ ml}\), the remaining mixture volume in the vessel is exactly \(108\text{ ml}\).
3. Since removing a uniform mixture preserves component ratios:
   $$\text{Remaining Milk} = \frac{4}{4 + 5} \times 108 = \frac{4}{9} \times 108 = 48\text{ ml}$$
   $$\text{Remaining Water} = \frac{5}{9} \times 108 = 60\text{ ml}$$
4. Now, \(x\text{ ml}\) of pure milk is added. Water content remains completely unchanged at \(60\text{ ml}\).
   New Milk \(= 48 + x\text{ ml}\).
   Given new ratio \(\text{Milk} : \text{Water} = 57 : 60\):
   $$\frac{48 + x}{60} = \frac{57}{60} \implies 48 + x = 57 \implies x = 9\text{ ml}$$
5. Initial total volume of mixture:
   $$V_0 = 108 + x = 108 + 9 = 117\text{ ml}$$
   Total liquid volume after replacement \(= 108 + 9 = 117\text{ ml} = 117\text{ cm}^3\).
6. Total internal capacity of the cylinder:
   $$V_{\text{cylinder}} = \text{Liquid Volume} + \text{Empty Volume} = 117 + 37 = 154\text{ cm}^3$$
7. Cylinder volume formula:
   $$V = \pi r^2 h = 154$$
   $$\frac{22}{7} \times (0.7)^2 \times h = 154 \implies \frac{22}{7} \times 0.49 \times h = 154$$
   $$1.54 \times h = 154 \implies h = \frac{154}{1.54} = 100\text{ cm}$$
8. **Conclusion:** The height of the vessel is **\(100\text{ cm}\) (or \(1\text{ meter}\))**.

> 🎯 **Quantitative Trap for Section 1:**
> - When replacing mixture with a pure component (milk), the *other* component (water) stays strictly constant in absolute volume. Never apply the replacement formula blindly when the amount of mixture remaining can be determined directly from the delta.

---

<a id="note-2"></a>

## 2. Work, Time & Complex Arithmetic Systems PYQs

> 🧠 **Key Concept — First-Principles Work & Rate Invariant**
> Total Work = Efficiency \(\times\) Time. When individual times are algebraically dependent on variable percentages, set up the time equation before calculating reciprocal efficiencies.

### ⏱️ 1. Solved Benchmark Questions

**Worked Example:** Q1 (SBI PO Mains 2025). \(A\) completes a piece of work alone in \(20\text{ days}\). \(B\) takes \(2x\%\) more days than \(A\) to complete the same work alone, and \(C\) takes \(x\%\) more days than \(B\) alone. The time taken by \(C\) alone is equal to the sum of the times taken by \(A\) and \(B\) alone. Determine the total time taken by \(A\), \(B\), and \(C\) working together to complete \(11\times\) the original work.

**Step-by-Step Resolution:**
1. Given \(T_A = 20\text{ days}\).
2. Time taken by \(B\):
   $$T_B = 20 \left(1 + \frac{2x}{100}\right) = 20 + \frac{2x}{5}$$
3. Time taken by \(C\):
   $$T_C = T_B \left(1 + \frac{x}{100}\right)$$
4. Given condition: \(T_C = T_A + T_B\):
   $$T_B \left(1 + \frac{x}{100}\right) = 20 + T_B \implies T_B + T_B \left(\frac{x}{100}\right) = 20 + T_B$$
   $$T_B \cdot \frac{x}{100} = 20 \implies T_B \cdot x = 2000$$
5. Substitute \(T_B = 20 + \frac{2x}{5}\):
   $$\left(20 + \frac{2x}{5}\right) x = 2000 \implies 20x + \frac{2x^2}{5} = 2000$$
   Multiply the equation through by 5:
   $$2x^2 + 100x - 10000 = 0 \implies x^2 + 50x - 5000 = 0$$
6. Solve the quadratic equation:
   $$(x + 100)(x - 50) = 0$$
   Since \(x\) must be positive, \(x = 50\).
7. Compute individual completion times:
   - \(T_A = 20\text{ days}\)
   - \(T_B = 20 \left(1 + \frac{100}{100}\right) = 40\text{ days}\)
   - \(T_C = T_A + T_B = 20 + 40 = 60\text{ days}\)
8. Assign standard LCM base for total units of 1-fold work:
   $$\text{Work Base} = \text{LCM}(20, 40, 60) = 120\text{ units}$$
   - Daily efficiency of \(A = \frac{120}{20} = 6\text{ units/day}\)
   - Daily efficiency of \(B = \frac{120}{40} = 3\text{ units/day}\)
   - Daily efficiency of \(C = \frac{120}{60} = 2\text{ units/day}\)
   - Combined efficiency \(E_{\text{combined}} = 6 + 3 + 2 = 11\text{ units/day}\)
9. Required task: Complete \(11\times\) the work:
   $$\text{Total Required Work} = 11 \times 120 = 1320\text{ units}$$
   $$\text{Total Days Required} = \frac{1320\text{ units}}{11\text{ units/day}} = 120\text{ days}$$
10. **Conclusion:** \(A, B\), and \(C\) working together will complete \(11\times\) the work in **\(120\text{ days}\)**.

> 🎯 **Quantitative Trap for Section 2:**
> - Avoid converting into fractions \(1/20, 1/T_B\) immediately; solving the duration equation \(T_C = T_A + T_B\) directly in terms of days simplifies the quadratic to a single step.

---

<a id="note-3"></a>

## 3. Higher Algebra, Polynomial Roots & Factorial Series PYQs

> 🧠 **Key Concept — Vieta's Formulas & Factorial Increments**
> For quadratic equation \(a x^2 + b x + c = 0\), sum of roots \(\alpha + \beta = -b/a\) and product \(\alpha \beta = c/a\). In factorial series differences, test consecutive terms \(n!\).

### 🔢 1. Solved Benchmark Questions

**Worked Example:** Q1 (SBI PO Mains 2022). Given two quadratic equations:
- Equation 1: \(a^2 - 7a + d = 0\), with roots \(x\) and \(y\).
- Equation 2: \(b^2 - 4b + (d - 9) = 0\), with roots \(x\) and \((y - x)\).
Find the numerical value of \(d\).

**Step-by-Step Resolution:**
1. Apply Vieta's formulas to Equation 1 (roots \(x\) and \(y\)):
   $$\text{Sum of roots: } x + y = -(-7) = 7 \implies y = 7 - x$$
   $$\text{Product of roots: } x \cdot y = d$$
2. Apply Vieta's formulas to Equation 2 (roots \(x\) and \(y - x\)):
   $$\text{Sum of roots: } x + (y - x) = -(-4) = 4$$
   Notice that \(x + y - x = y\). Therefore:
   $$y = 4$$
3. Substitute \(y = 4\) back into the sum of roots for Equation 1:
   $$x + 4 = 7 \implies x = 3$$
4. Compute \(d\):
   $$d = x \cdot y = 3 \times 4 = 12$$
5. Verification via product of roots of Equation 2:
   $$\text{Product} = x \cdot (y - x) = 3 \cdot (4 - 3) = 3 \times 1 = 3$$
   From Equation 2, product of roots \(= d - 9 = 12 - 9 = 3\).
   The equation is consistent and fully verified.
6. **Conclusion:** \(d = 12\).

---

**Worked Example:** Q2 (SBI PO Mains 2022). Find the wrong number in the following numerical sequence:
$$5,\ 6,\ 8,\ 14,\ 38,\ 168,\ 878,\ 5918$$

**Step-by-Step Resolution:**
1. Examine the consecutive differences between terms:
   $$6 - 5 = 1 = 1!$$
   $$8 - 6 = 2 = 2!$$
   $$14 - 8 = 6 = 3!$$
   $$38 - 14 = 24 = 4!$$
2. The sequence of differences follows the factorial progression: \(1!, 2!, 3!, 4!, 5!, 6!, 7!\).
3. The next expected term after 38 must add \(5! = 120\):
   $$38 + 120 = 158$$
   However, the given series lists **168**.
4. Test the subsequent terms with \(158\):
   $$158 + 6! = 158 + 720 = 878 \quad \text{(Matches given series)}$$
   $$878 + 7! = 878 + 5040 = 5918 \quad \text{(Matches given series)}$$
5. **Conclusion:** The wrong number in the sequence is **168** (the correct value is **158**).

> 🎯 **Quantitative Trap for Section 3:**
> - When analyzing rapidly expanding series with non-multiplicative gaps, compute the first difference and compare against factorials (\(1, 2, 6, 24, 120, 720, 5040\)) or cubes/squares plus constant.
