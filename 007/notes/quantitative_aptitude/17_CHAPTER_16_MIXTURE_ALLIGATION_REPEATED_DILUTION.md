# CHAPTER 16: ALLIGATION, MULTI-COMPONENT MIXTURES & REPEATED DILUTION INVARIANTS

**Domain**: Concentration Dynamics, Ratio Blending & Succession Calculus  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: First-Principles Derivation $\to$ The Alligation Cross $\to$ The Dimension Consistency Law $\to$ Repeated Dilution Invariant $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES DERIVATION OF THE ALLIGATION ENGINE

The Rule of Alligation (derived from Latin *alligare*, meaning "to bind together") is not an ad-hoc examination trick. It is the exact visual and algebraic transformation of the **Weighted Arithmetic Mean**.

### Mathematical Proof
Let two ingredients be mixed together:
- Cheaper component: Quantity $q_c$, unit cost/concentration $c$.
- Dearer component: Quantity $q_d$, unit cost/concentration $d$.
- Resultant homogeneous mixture: Mean cost/concentration $m$, where $c < m < d$.

By the Law of Conservation of Total Value:
$$\text{Total Value of Mixture} = \text{Value of Component 1} + \text{Value of Component 2}$$
$$(q_c + q_d) \cdot m = q_c \cdot c + q_d \cdot d$$

Expanding and rearranging terms:
$$q_c \cdot m + q_d \cdot m = q_c \cdot c + q_d \cdot d$$
$$q_d \cdot d - q_d \cdot m = q_c \cdot m - q_c \cdot c$$
$$q_d (d - m) = q_c (m - c)$$

Dividing both sides yields the **Fundamental Alligation Ratio**:
$$\mathbf{\frac{q_c}{q_d} = \frac{d - m}{m - c} = \frac{\text{Difference between Dearer and Mean}}{\text{Difference between Mean and Cheaper}}}$$

---

### The Canonical Alligation Cross Diagram

```
Price / Concentration of               Price / Concentration of
Cheaper Component (c)                  Dearer Component (d)
             \                                /
              \                              /
               ▼                            ▼
                 Mean Price / Concentration
                            (m)
               ▲                            ▲
              /                              \
             /                                \
      (d - m)                                   (m - c)
Quantity of Cheaper (q_c)              Quantity of Dearer (q_d)
```

$$\mathbf{q_c : q_d = (d - m) : (m - c)}$$

---

## 2. THE DIMENSION CONSISTENCY LAW (THE THREE-TERM AXIOM)

The single most fatal mistake in commercial arithmetic is mixing discordant metrics within the cross diagram.

> **The Dimension Consistency Law**: All three vertices ($c, d, m$) must represent the **exact same physical or financial metric** calculated on the **exact same reference base**.

| If $c$ and $d$ are... | Then Mean ($m$) MUST be... | Fatal Disallowed Trap |
| :--- | :--- | :--- |
| **Cost Price per kg** | **Cost Price per kg of the mixture** | Inserting the *Selling Price* of the mixture into $m$. |
| **Alcohol Percentage** | **Alcohol Percentage of the final blend** | Using water percentage on one side and alcohol on the other. |
| **Simple Interest Rate ($R_1\%, R_2\%$)** | **Overall Effective Interest Rate ($R_{\text{avg}}\%$)** | Using rupee interest on one side and percentage on the other. |
| **Average Speed ($v_1, v_2$)** | **Overall Average Speed ($v_{\text{avg}}$)** | Resulting ratio will be **Time**, NOT Distance! |

### The Mean Cost Price Correction Formula
When a question provides the Selling Price ($\text{SP}$) of the mixture and the Profit Percentage ($P\%$):
$$\mathbf{m = \text{CP}_{\text{mix}} = \frac{100}{100 + P\%} \times \text{SP}_{\text{mix}}}$$
Never begin the alligation cross before executing this price de-escalation!

### The Free Adulterant Axiom (Water Addition)
When water is added to milk, spirit, wine, or chemical solutions to dilute and inflate profit:
- **Cost Price of Water is strictly zero**: $c_{\text{water}} = ₹0/\text{litre}$.
- **Concentration of Solute in Water is zero**: $0\%$.

---

## 3. MULTI-VESSEL MIXTURES & FRACTIONAL ALLIGATION

When two or more vessels containing liquid solutions of varying ratios are blended:

### Method 1: Fractional Solute Alligation
- Vessel A contains milk and water in ratio $a_1 : b_1 \implies$ Milk concentration $C_A = \frac{a_1}{a_1 + b_1}$.
- Vessel B contains milk and water in ratio $a_2 : b_2 \implies$ Milk concentration $C_B = \frac{a_2}{a_2 + b_2}$.
- Desired mixture contains milk and water in ratio $a_m : b_m \implies$ Target concentration $C_M = \frac{a_m}{a_m + b_m}$.

Apply the alligation cross directly on the milk fractions:
$$\mathbf{\frac{V_A}{V_B} = \frac{C_B - C_M}{C_M - C_A}}$$

### Method 2: The LCM Volume Normalization Method (For Mixing Equal Capacities)
When equal quantities from $k$ vessels are mixed into a single vat:
1. Calculate the total unit capacity of each vessel: $T_i = a_i + b_i$.
2. Determine $L = \text{LCM}(T_1, T_2, \dots, T_k)$.
3. Scale each ratio by $\frac{L}{T_i}$ so that every vessel contains exactly $L$ total units.
4. Sum components linearly:
   $$\text{Total Component 1} = \sum a_i^{\prime}, \quad \text{Total Component 2} = \sum b_i^{\prime}$$

---

## 4. THE REPEATED DILUTION INVARIANT (SUCCESSIVE REPLACEMENT)

A classic problem archetype in CAT, Banking PO, and Regulatory exams involves repeated withdrawal and substitution.

### Analytical Theorem
A container initially holds $V$ units of pure liquid (e.g., pure milk, wine, or acid).  
From this, $x$ units of liquid are withdrawn and replaced with pure water.  
The mixture is thoroughly stirred, and the process of withdrawing $x$ units and replacing with water is repeated $n$ times in total.

### First-Principles Inductive Proof
1. **Cycle 1**:
   - Volume of pure liquid removed $= x$.
   - Residual pure liquid $Q_1 = V - x = V \left(1 - \frac{x}{V}\right)$.
   - Fraction of pure liquid remaining $= \frac{Q_1}{V} = \left(1 - \frac{x}{V}\right)$.
2. **Cycle 2**:
   - The mixture has pure liquid concentration $\left(1 - \frac{x}{V}\right)$.
   - Withdrawing $x$ units removes $x \left(1 - \frac{x}{V}\right)$ of pure liquid.
   - Residual pure liquid $Q_2$:
     $$Q_2 = Q_1 - x \left(1 - \frac{x}{V}\right) = V\left(1 - \frac{x}{V}\right) - x\left(1 - \frac{x}{V}\right) = (V - x)\left(1 - \frac{x}{V}\right)$$
     $$Q_2 = \mathbf{V \left(1 - \frac{x}{V}\right)^2}$$
3. **By Mathematical Induction after $n$ Operations**:
   $$\mathbf{Q_n = V \left(1 - \frac{x}{V}\right)^n}$$

### Universal Ratio Formulas
- **Fraction of Original Pure Liquid Remaining**:
  $$\mathbf{\frac{\text{Pure Liquid Residual}}{\text{Total Volume}} = \left(1 - \frac{x}{V}\right)^n}$$
- **Ratio of Pure Liquid to Diluent (Water) after $n$ Cycles**:
  $$\mathbf{\frac{\text{Pure Liquid}}{\text{Water}} = \frac{\left(1 - \frac{x}{V}\right)^n}{1 - \left(1 - \frac{x}{V}\right)^n}}$$

---

## 5. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: The SP De-Escalation Alligation (SBI PO Mains)
**Problem**: In what ratio must a grocer mix two varieties of tea costing ₹$60/\text{kg}$ and ₹$65/\text{kg}$ respectively so that by selling the mixture at ₹$68.20/\text{kg}$, he may gain $10\%$ profit?

**Solution via Cost Price Normalization**:
1. *De-escalate Selling Price to Mean Cost Price*:
   Given $\text{SP}_{\text{mix}} = ₹68.20$, $\text{Profit} = 10\%$.
   $$m = \text{CP}_{\text{mix}} = \frac{100}{100 + 10} \times 68.20 = \frac{68.20}{1.10} = \mathbf{₹62.00/\text{kg}}$$
2. *Construct Alligation Cross*:
   - Cheaper tea: $c = 60$
   - Dearer tea: $d = 65$
   - Mean price: $m = 62$

   $$\frac{q_{\text{cheaper}}}{q_{\text{dearer}}} = \frac{d - m}{m - c} = \frac{65 - 62}{62 - 60} = \mathbf{\frac{3}{2}}$$

The grocer must mix them in the ratio **$3 : 2$**.

---

### Exemplar 2: Blending Two Solutions to Achieve Parity (RBI Grade B Phase 1)
**Problem**: The milk and water in two vessels $A$ and $B$ are in the ratio $4 : 3$ and $2 : 3$ respectively. In what ratio must the liquids from both vessels be mixed to produce a new mixture containing half milk and half water?

**Solution via Fractional Milk Concentrations**:
- Vessel A milk concentration: $C_A = \frac{4}{4 + 3} = \frac{4}{7}$
- Vessel B milk concentration: $C_B = \frac{2}{2 + 3} = \frac{2}{5}$
- Target mean concentration: $C_M = \frac{1}{1 + 1} = \frac{1}{2}$

Constructing Alligation Cross:
$$\text{Difference 1} = |C_B - C_M| = \left|\frac{2}{5} - \frac{1}{2}\right| = \left|\frac{4 - 5}{10}\right| = \frac{1}{10}$$
$$\text{Difference 2} = |C_A - C_M| = \left|\frac{4}{7} - \frac{1}{2}\right| = \left|\frac{8 - 7}{14}\right| = \frac{1}{14}$$

$$\mathbf{\frac{V_A}{V_B} = \frac{\frac{1}{10}}{\frac{1}{14}} = \frac{14}{10} = \frac{7}{5}}$$
Liquids from A and B must be mixed in the ratio **$7 : 5$**.

---

### Exemplar 3: Repeated Dilution & Original Volume Recovery (CAT / CSAT)
**Problem**: A container contains $40$ litres of milk. From this container, $4$ litres of milk were taken out and replaced by water. This process was repeated two further times (total $3$ operations). How much pure milk is now contained by the container?

**Solution via Repeated Dilution Invariant**:
Here, total volume $V = 40\text{ L}$, replacement volume $x = 4\text{ L}$, operations $n = 3$.

$$Q_3 = V \left(1 - \frac{x}{V}\right)^n = 40 \left(1 - \frac{4}{40}\right)^3 = 40 \left(1 - \frac{1}{10}\right)^3 = 40 \left(\frac{9}{10}\right)^3$$
$$Q_3 = 40 \times \frac{729}{1000} = \frac{4 \times 729}{100} = \frac{2916}{100} = \mathbf{29.16 \text{ litres}}$$
The container now contains **$29.16$ litres** of pure milk.

---

### Exemplar 4: Reverse Solving Initial Capacity from Residual Ratio (CAT Advanced)
**Problem**: Eight litres are drawn from a cask full of wine and is then filled with water. This operation is performed three more times (total $4$ times). The ratio of the quantity of wine now left in the cask to that of water is $16 : 65$. How much wine did the cask originally hold?

**Solution via Fractional Extraction Power**:
Total cycles $n = 4$. Replacement volume $x = 8\text{ L}$.
Given $\frac{\text{Wine}}{\text{Water}} = \frac{16}{65}$.

The ratio of remaining wine to total cask capacity is:
$$\frac{\text{Wine}}{\text{Total Capacity}} = \frac{16}{16 + 65} = \frac{16}{81}$$

Equating to the invariant formula:
$$\left(1 - \frac{x}{V}\right)^4 = \frac{16}{81}$$

Taking the fourth root on both sides:
$$1 - \frac{8}{V} = \left(\frac{16}{81}\right)^{1/4} = \frac{2}{3}$$
$$\frac{8}{V} = 1 - \frac{2}{3} = \frac{1}{3} \implies V = 8 \times 3 = \mathbf{24 \text{ litres}}$$
The cask originally held **$24$ litres** of wine.

---

## 6. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: SP Entry in Alligation Cross** | Entering the Selling Price of mixture directly as the central node ($m$). | The mean node must be **Cost Price**: $m = \frac{100 \cdot \text{SP}}{100 + P\%}$. |
| **Trap 2: Dilution Invariant Denominator Confusion** | Setting $\left(1 - \frac{x}{V}\right)^n = \frac{\text{Liquid}}{\text{Water}} = \frac{16}{65}$. | The formula equates to $\frac{\text{Liquid}}{\mathbf{\text{Total Volume}}}$, which is $\frac{16}{16 + 65} = \frac{16}{81}$. |
| **Trap 3: Operation Count Underestimation** | Interpreting "done once and repeated twice more" as $n = 2$. | The total number of operations performed is $1 + 2 = \mathbf{3}$. |
| **Trap 4: Speed Alligation Ratio Interpretation** | Alligating speeds $v_1$ and $v_2$ with average speed $v_{\text{avg}}$ and assuming the weights give distance ratio. | Speed is $\frac{\text{Distance}}{\text{Time}}$. The weights derived from alligation are **Time intervals**, not distances! |
| **Trap 5: Asymmetric Fraction Choice** | Taking milk fraction $\frac{4}{7}$ for Vessel A and water fraction $\frac{3}{5}$ for Vessel B. | Choose **one single component** consistently across all nodes in the cross diagram. |
