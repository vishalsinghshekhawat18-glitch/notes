# RAPID REVISION MATRIX: CHAPTER 16

**Topic**: Alligation, Multi-Component Mixtures & Repeated Dilution Invariants  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Alligation Configuration & Price Corrections

| Scenario | Given Parameters | Mandatory Transformation | Alligation Cross Ratio |
| :--- | :--- | :--- | :--- |
| **Commodity Blending** | Costs $c, d$, Mixture sold at $\text{SP}$ with Profit $P\%$ | De-escalate SP: $m = \frac{100 \cdot \text{SP}}{100 + P\%}$ | $\frac{q_c}{q_d} = \frac{d - m}{m - c}$ |
| **Water Adulteration** | Pure liquid cost $c$, water added for profit | Cost of water $c_{\text{water}} = ₹0/\text{unit}$ | $\frac{q_{\text{water}}}{q_{\text{liquid}}} = \frac{c - m}{m - 0}$ |
| **Two Solution Blending** | Vessel A ($a_1:b_1$), Vessel B ($a_2:b_2$), Blend ($a_m:b_m$) | Work in one component: $C_A = \frac{a_1}{a_1+b_1}, C_B = \frac{a_2}{a_2+b_2}$ | $\frac{V_A}{V_B} = \frac{|C_B - C_M|}{|C_A - C_M|}$ |
| **Speed Alligation** | Speeds $v_1, v_2$ and average speed $v_{\text{avg}}$ | Direct alligation on speeds | Ratio gives **Time ($t_1 : t_2$)**, NOT Distance! |

---

### Matrix B: Repeated Dilution & Succession Calculus

| Operation Phase | Mathematical Formulation | Practical Meaning |
| :--- | :--- | :--- |
| **Pure Liquid Remaining after $n$ Operations** | $Q_n = V \left(1 - \frac{x}{V}\right)^n$ | $V$ = Initial volume, $x$ = Replacement amount per cycle. |
| **Fraction of Original Liquid Residual** | $\frac{Q_n}{V} = \left(1 - \frac{x}{V}\right)^n$ | Base fraction after $n$ successive dilution withdrawals. |
| **Ratio of Pure Liquid to Diluent (Water)** | $\frac{\text{Pure Liquid}}{\text{Water}} = \frac{\left(1 - \frac{x}{V}\right)^n}{1 - \left(1 - \frac{x}{V}\right)^n}$ | Crucial: Denominator of total ratio is **$\text{Liquid} + \text{Water}$**! |

---

## 2. 60-Second Retrieval Skeleton

```text
The Alligation Law: (Quantity of Cheaper) / (Quantity of Dearer) = (Dearer - Mean) / (Mean - Cheaper)
➔ THE GOLDEN AXIOM: All three nodes MUST share the same dimension and base (Never enter SP into Mean node!)
➔ SP De-escalation: CP_mean = SP_mix / (1 + P%/100)
➔ Water Cost Axiom: Water CP = 0; Solute concentration in pure water = 0%
➔ Repeated Dilution Invariant: Remaining Liquid = V · (1 - x/V)ⁿ
➔ Reverse Extraction Power: (Remaining Liquid) / (Total Capacity) = (1 - x/V)ⁿ
```

---

## 3. Top 5 Instant Killer Traps

1. **Selling Price in Central Alligation Node**: Inserting the selling price of the mixture directly into $m$. The central node **must be the cost price** ($m = \text{CP}_{\text{mixture}}$).
2. **Dilution Ratio Base Fallacy**: Equating $\left(1 - \frac{x}{V}\right)^n$ to $\frac{\text{Milk}}{\text{Water}}$ instead of $\frac{\text{Milk}}{\mathbf{\text{Milk + Water}}}$.
3. **Repeated Operation Miscount**: Overlooking phrases like "repeated two *further* times", which yields $n = 1 + 2 = \mathbf{3}$, not $2$.
4. **Alligation Ratio Attribute Confusion**: Assuming alligation of speeds $v_1, v_2$ yields distance ratio. The weights correspond to the denominator variable, which is **Time**.
5. **Component Switching in Vessel Mixtures**: Taking milk fraction from Vessel A and water fraction from Vessel B. You must track the **same component** across all nodes.
