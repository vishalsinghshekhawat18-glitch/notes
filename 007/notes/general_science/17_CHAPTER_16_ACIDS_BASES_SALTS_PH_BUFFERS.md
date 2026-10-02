<div style="page-break-before: always;"></div>

# CHAPTER 16: ACIDS, BASES, SALTS, PH SCALE & BUFFER SYSTEMS

**Canonical Sources Unified**:
* NCERT Class 7 Science (Chapter 5: Acids, Bases and Salts)
* NCERT Class 10 Science (Chapter 2: Acids, Bases and Salts — Indicators, pH Scale, Common Industrial Salts)
* NCERT Class 11 Chemistry (Part 2, Chapter 7: Equilibrium — Ionic Equilibrium, Buffer Systems, Hydrolysis)
* Standard Academic Chemistry Treatises (Morrison & Boyd, NCERT Canon)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 16.1 The Three Classic Theories of Acids and Bases

The chemical definition of acids and bases evolved historically through three increasingly comprehensive models:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ACID-BASE THEORIES SPECTRUM                     │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Arrhenius (1884)    │ Brønsted-Lowry (1923)    │ Lewis (1923)          │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ Aqueous Media ONLY  │ Proton (H⁺) Transfer     │ Electron-Pair Transfer│
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ ACID: Produces H⁺   │ ACID: PROTON DONOR       │ ACID: ELECTRON-PAIR   │
│ (H₃O⁺) ions in water│ (Donates H⁺ to base)     │ ACCEPTOR (Electrophile)│
│ Ex: HCl, H₂SO₄, HNO₃│ Ex: HCl, NH₄⁺, H₃O⁺      │ Ex: BF₃, AlCl₃, Fe³⁺  │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ BASE: Produces OH⁻  │ BASE: PROTON ACCEPTOR    │ BASE: ELECTRON-PAIR   │
│ ions in water       │ (Accepts H⁺ from acid)   │ DONOR (Nucleophile)   │
│ Ex: NaOH, KOH, Ca(OH)₂│ Ex: NH₃, H₂O, Cl⁻, OH⁻ │ Ex: :NH₃, H₂O:, OH⁻   │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### 1. Svante Arrhenius Theory (1884)
* **Arrhenius Acid**: Dissociates in water to release Hydrogen ions ($\text{H}^+$). Because a bare proton is unstable, it instantly hydrates to form a **Hydronium Ion ($\text{H}_3\text{O}^+$)**:
  $$\text{HCl (aq)} + \text{H}_2\text{O (l)} \longrightarrow \mathbf{\text{H}_3\text{O}^+\text{ (aq)}} + \text{Cl}^-\text{ (aq)}$$
* **Arrhenius Base**: Dissociates in water to release Hydroxide ions ($\text{OH}^-$):
  $$\text{NaOH (s)} \xrightarrow{\text{H}_2\text{O}} \text{Na}^+\text{ (aq)} + \mathbf{\text{OH}^-\text{ (aq)}}$$
* *Limitation*: Applies strictly to aqueous solutions; fails to explain why gaseous Ammonia ($\text{NH}_3$) behaves as a base.

### 2. Brønsted-Lowry Proton Theory (1923)
* **Conjugate Acid-Base Pairs**: Differ from each other by exactly **ONE proton ($\text{H}^+$)**:

$$\underbrace{\text{NH}_3}_{\text{Base}} + \underbrace{\text{H}_2\text{O}}_{\text{Acid}} \rightleftharpoons \underbrace{\text{NH}_4^+}_{\text{Conjugate Acid}} + \underbrace{\text{OH}^-}_{\text{Conjugate Base}}$$

* **Amphoteric Substances**: Can act as either an acid or a base depending on the reacting partner. **Water ($\text{H}_2\text{O}$)** is the classic amphoteric solvent (acts as a base toward $HCl$, and as an acid toward $NH_3$).

### 3. G.N. Lewis Electron-Pair Theory (1923)
The most comprehensive theory, applicable to non-aqueous and gas-phase systems:
* **Lewis Acid**: Any chemical species with an incomplete octet or vacant orbital capable of **accepting a lone pair of electrons**:
  - Central atoms with incomplete octets: $\text{BF}_3, \text{AlCl}_3, \text{BCl}_3$.
  - Simple metal cations: $\text{Fe}^{3+}, \text{Cu}^{2+}, \text{Ag}^+$.
* **Lewis Base**: Any species possessing an unshared **lone pair of electrons** ready to donate:
  - Neutral molecules with lone pairs: $:\text{NH}_3, \text{H}_2\ddot{\text{O}}:, \text{R}-\ddot{\text{O}}\text{H}$.
  - Anions: $\text{F}^-, \text{Cl}^-, \text{OH}^-, \text{CN}^-$.
* **The Lewis Acid-Base Coordinate Bond**:
  $$\text{BF}_3\text{ (Lewis Acid)} + :\text{NH}_3\text{ (Lewis Base)} \longrightarrow \mathbf{\text{F}_3\text{B} \leftarrow :\text{NH}_3\text{ (Adduct)}}$$

---

## 16.2 The pH Scale, Auto-Ionization of Water & Indicators

```
          0 (Strongly Acidic)           7 (Neutral)          14 (Strongly Basic)
      ◄───|═════════════════════════════|════════════════════|───►
          Battery Acid, Gastric Juice   Pure Water at 25°C   Bleach, Caustic Soda
          [H⁺] = 1 M                    [H⁺] = [OH⁻] = 10⁻⁷ M[OH⁻] = 1 M
```

### Mathematical Definition of pH (Søren Sørensen, 1909)
The **pH (*Potenz de Hydrogen* - Power of Hydrogen)** is the negative logarithm to base 10 of the molar concentration of hydrated hydrogen ions:

$$\mathbf{\text{pH} = -\log_{10} [\text{H}^+] = -\log_{10} [\text{H}_3\text{O}^+] \quad \text{and} \quad [\text{H}^+] = 10^{-\text{pH}}}$$

$$\mathbf{\text{pOH} = -\log_{10} [\text{OH}^-] \quad \text{and} \quad \text{pH} + \text{pOH} = 14 \quad (\text{at } 25^\circ\text{C})}$$

* **Logarithmic Nature**: Every single unit change on the pH scale represents a **10-fold change** in hydrogen ion concentration! (A solution of $\text{pH} = 2$ is **$100\text{ times more acidic}$** than a solution of $\text{pH} = 4$).
* **Temperature Effect on Water Dissociation**:  
  Auto-ionization of water ($2\text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{OH}^-$) is endothermic. When temperature rises (e.g., at $60^\circ\text{C}$), ionic product $K_w$ increases, so neutral $\text{pH}$ drops to $\sim 6.5$. However, the water remains neutral because $[\text{H}^+] = [\text{OH}^-]$!

### High-Yield Biological & Natural pH Benchmarks

| Liquid / Biological Medium | Typical pH Value | Nature |
| :--- | :--- | :--- |
| **Battery Acid ($\text{H}_2\text{SO}_4$)** | $\sim \mathbf{0.5\text{ to } 1.0}$ | Strongly Acidic |
| **Human Gastric Juice (Stomach $HCl$)** | $\sim \mathbf{1.2\text{ to } 2.0}$ | Highly Acidic (Activates pepsin enzyme) |
| **Lemon Juice (Citric acid)** | $\sim \mathbf{2.2\text{ to } 2.4}$ | Acidic |
| **Vinegar (4–8% Acetic acid)** | $\sim \mathbf{2.8\text{ to } 3.0}$ | Acidic |
| **Acid Rain Threshold** | $\mathbf{< 5.6}$ | Environmentally Destructive |
| **Normal Human Saliva (before food)** | $\sim \mathbf{6.5\text{ to } 7.0}$ | Slightly Acidic to Neutral |
| **Pure Distilled Water (at 25°C)** | $\mathbf{7.0}$ | Strictly Neutral |
| **Human Blood Plasma** | $\mathbf{7.35\text{ to } 7.45}$ | Slightly Alkaline (Tightly buffered!) |
| **Tears** | $\sim \mathbf{7.4}$ | Slightly Alkaline |
| **Baking Soda Solution ($\text{NaHCO}_3$)** | $\sim \mathbf{8.4}$ | Mildly Alkaline |
| **Milk of Magnesia ($\text{Mg(OH)}_2$)** | $\sim \mathbf{10.5}$ | Basic Antacid |
| **Household Bleach / Caustic Soda ($NaOH$)**| $\sim \mathbf{13.0\text{ to } 14.0}$ | Strongly Alkaline |

---

### Acid-Base Indicators & Color Transitions

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CHEMICAL INDICATOR MATRIX                       │
├─────────────────────┬──────────────────┬───────────────┬───────────────┤
│ Indicator Name      │ Original Color   │ In ACID (pH<7)│ In BASE (pH>7)│
├─────────────────────┼──────────────────┼───────────────┼───────────────┤
│ Blue Litmus         │ Blue             │ RED           │ Remains Blue  │
│ Red Litmus          │ Red              │ Remains Red   │ BLUE          │
│ Phenolphthalein     │ COLORLESS        │ COLORLESS     │ VIVID PINK    │
│ Methyl Orange       │ Orange           │ RED           │ YELLOW        │
│ Turmeric Paste      │ Yellow           │ Remains Yellow│ REDDISH-BROWN │
│ Red Cabbage Extract │ Purple           │ Red / Pink    │ Green / Yellow│
└─────────────────────┴──────────────────┴───────────────┴───────────────┘
```

* **Natural Origin of Litmus**: Litmus solution is a natural dye extracted from **Lichens** (a symbiotic mutualism of algae and fungi belonging to the plant division *Thallophyta*). In neutral water, pure litmus solution has a **mauve (purple)** color.
* **Olfactory Indicators**: Substances whose characteristic smell changes in acidic or basic media:
  - **Onion extract, Vanilla essence, and Clove oil** retain their pleasant aroma in acids, but **completely lose their scent in basic alkaline solutions** (used by visually impaired chemistry students).

---

## 16.3 Natural Organic Acids & Everyday Chemistry

| Natural Source | Dominant Organic Acid Present | Chemical Formula / Significance |
| :--- | :--- | :--- |
| **Ant Sting & Nettle Leaves** | **Methanoic Acid (Formic Acid)** | $HCOOH$; causes burning pain; neutralized by rubbing mild baking soda ($\text{NaHCO}_3$) or dock plant leaf. |
| **Vinegar (Sirka)** | **Ethanoic Acid (Acetic Acid)** | $CH_3COOH$ ($4\text{--}8\%$ aqueous solution); food preservative. |
| **Citrus Fruits (Lemon, Orange)** | **Citric Acid** | $C_6H_8O_7$; natural antioxidant and acidulant. |
| **Tamarind (Imli), Grapes, Tartar**| **Tartaric Acid** | $C_4H_6O_6$; baking powder component. |
| **Curd / Sour Milk** | **Lactic Acid** | $C_3H_6O_3$; formed by *Lactobacillus* bacteria fermenting lactose. |
| **Tomato, Spinach** | **Oxalic Acid** | $H_2C_2O_4$; combines with calcium in kidneys forming **calcium oxalate stones**. |
| **Amla, Guava (Vitamin C)** | **Ascorbic Acid** | $C_6H_8O_6$; prevents scurvy; immune booster. |
| **Apple** | **Malic Acid** | $C_4H_6O_5$; tart fruit acid. |
| **Tea** | **Tannic Acid** | Astringent polyphenol. |

---

## 16.4 Industrial & Commercial Salts

A **Salt** is an ionic compound formed by the neutralization reaction between an acid and a base ($\text{Acid} + \text{Base} \longrightarrow \text{Salt} + \text{Water}$).

### The Four Salt Hydrolysis Families
1. **Strong Acid + Strong Base** (e.g., $HCl + NaOH \rightarrow NaCl + H_2O$): Neutral salt ($\mathbf{\text{pH} = 7}$).
2. **Strong Acid + Weak Base** (e.g., $HCl + NH_4OH \rightarrow NH_4Cl + H_2O$): Acidic salt ($\mathbf{\text{pH} < 7}$).
3. **Weak Acid + Strong Base** (e.g., $CH_3COOH + NaOH \rightarrow CH_3COONa + H_2O$): Basic salt ($\mathbf{\text{pH} > 7}$).
4. **Weak Acid + Weak Base**: pH depends on relative $K_a$ and $K_b$.

---

### High-Frequency Commercial Salts

#### 1. Baking Soda: Sodium Hydrogen Carbonate ($\text{NaHCO}_3$)
* **Manufacturing**: Solvay Process:
  $$\text{NaCl} + \text{H}_2\text{O} + \text{CO}_2 + \text{NH}_3 \longrightarrow \text{NH}_4\text{Cl} + \mathbf{\text{NaHCO}_3}$$
* **Difference Between Baking Soda and Baking Powder**:
  - **Baking Soda**: Pure $\text{NaHCO}_3$. Heating releases $\text{CO}_2$ gas, but leaves behind basic **Sodium Carbonate ($\text{Na}_2\text{CO}_3$)**, which tastes repulsive and **bitter**!
  - **Baking Powder**: A scientific mixture of **Baking Soda ($\text{NaHCO}_3$)** and a mild edible acid (such as **Tartaric Acid** or Potassium hydrogen tartrate):
    $$\text{NaHCO}_3 + \text{H}^+\text{ (from tartaric acid)} \longrightarrow \mathbf{\text{CO}_2\text{ (g)}} + \text{H}_2\text{O} + \text{Sodium Tartrate (tasteless)}$$
    The generated $\text{CO}_2$ gas bubbles make bread and cakes spongy and fluffy, while the tartaric acid neutralizes the bitter sodium carbonate!
* **Soda-Acid Fire Extinguishers**: Mixing $\text{NaHCO}_3$ solution with concentrated $\text{H}_2\text{SO}_4$ generates a violent stream of $\text{CO}_2$ gas and water that smothers flames.

#### 2. Washing Soda: Sodium Carbonate Decahydrate ($\text{Na}_2\text{CO}_3 \cdot 10\text{H}_2\text{O}$)
* Heating baking soda yields anhydrous soda ash ($\text{Na}_2\text{CO}_3$), which is recrystallized with 10 water molecules:
  $$\text{Na}_2\text{CO}_3 + 10\text{H}_2\text{O} \longrightarrow \mathbf{\text{Na}_2\text{CO}_3 \cdot 10\text{H}_2\text{O}}$$
* **Applications**: Cleansing agent for laundry, glass and paper manufacturing, and **removing permanent hardness of water** (precipitates calcium and magnesium ions as insoluble carbonates).

#### 3. Bleaching Powder: Calcium Hypochlorite / Oxychloride ($\text{CaOCl}_2$)
* **Preparation**: Passing Chlorine gas over dry slaked lime:
  $$\text{Ca(OH)}_2\text{ (dry slaked lime)} + \text{Cl}_2 \longrightarrow \mathbf{\text{CaOCl}_2\text{ (Bleaching Powder)}} + \text{H}_2\text{O}$$
* **Applications**: Bleaching cotton/linen textiles, wood pulp in paper factories, oxidizing agent in chemical plants, and **disinfecting drinking water** (releases germicidal nascent chlorine).

#### 4. Plaster of Paris (POP) vs. Gypsum
* **Gypsum**: Natural mineral Calcium Sulfate Dihydrate ($\mathbf{\text{CaSO}_4 \cdot 2\text{H}_2\text{O}}$).
* **Plaster of Paris (POP)**: Calcium Sulfate Hemihydrate ($\mathbf{\text{CaSO}_4 \cdot \frac{1}{2}\text{H}_2\text{O}}$).
* **Carefully Controlled Heating (at $373\text{ K} = 100^\circ\text{C}$)**:
  $$\text{CaSO}_4 \cdot 2\text{H}_2\text{O} \xrightarrow{\mathbf{373\text{ K}}} \mathbf{\text{CaSO}_4 \cdot \frac{1}{2}\text{H}_2\text{O}} + 1\frac{1}{2}\text{H}_2\text{O}$$
  *(If heated above $100^\circ\text{C}$, it loses all water of crystallization, turning into anhydrous "Dead Burnt Plaster" $\text{CaSO}_4$, which loses the property of setting into hard cement).*
* **Setting Reaction**: When POP powder is mixed with water, it rehydrates into Gypsum within 10–15 minutes, setting into a rock-hard solid with **slight expansion in volume** (making it perfect for casting smooth statues, ornamental ceiling moldings, and orthopedic casts for fractured bones).

---

## 16.5 Buffer Systems & Human Blood Homeostasis

A **Buffer Solution** is a chemical solution that resists any change in its pH when small quantities of strong acids or bases are added.
* **Composition**: Consists of a **Weak Acid + its Conjugate Salt** (e.g., $CH_3COOH + CH_3COONa$, Acidic Buffer) or a **Weak Base + its Conjugate Salt** (e.g., $NH_4OH + NH_4Cl$, Basic Buffer).
* **Human Blood Buffer (Carbonic Acid - Bicarbonate System)**:  
  Normal human arterial blood pH is tightly regulated between **$7.35$ and $7.45$**:
  $$\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \mathbf{\text{H}_2\text{CO}_3\text{ (Carbonic Acid)}} \rightleftharpoons \mathbf{\text{H}^+ + \text{HCO}_3^-\text{ (Bicarbonate Ion)}}$$
  If blood pH drops below $7.35$ (**Acidosis**) or rises above $7.45$ (**Alkalosis**), cellular enzymes denature and death follows within minutes. The lungs regulate $\text{CO}_2$ exhalation and kidneys regulate $\text{HCO}_3^-$ reabsorption to maintain this vital buffer.

---

## 16.6 Master Chapter Distinction Matrix

| Feature | Baking Soda | Baking Powder | Washing Soda | Plaster of Paris |
| :--- | :--- | :--- | :--- | :--- |
| **Chemical Name** | Sodium Hydrogen Carbonate | Mixture of $\text{NaHCO}_3$ + Tartaric acid | Sodium Carbonate Decahydrate | Calcium Sulfate Hemihydrate |
| **Formula** | $\text{NaHCO}_3$ | $\text{NaHCO}_3 + C_4H_6O_6$ | $\text{Na}_2\text{CO}_3 \cdot 10\text{H}_2\text{O}$ | $\text{CaSO}_4 \cdot \frac{1}{2}\text{H}_2\text{O}$ |
| **pH in Water** | Mildly basic ($\sim 8.4$). | Neutralized. | Highly basic ($\sim 11$). | Neutral. |
| **Primary Use** | Antacid, fire extinguishers. | Fluffy baking (cakes/bread). | Laundry, water softening. | Bone fractures, statues. |

---

## 16.7 High-Yield Diagnostic Examination Traps

1. **Plaster of Paris Half-Molecule Formula**:
   - *Trap*: "How can half a molecule of water ($\frac{1}{2}H_2O$) exist in $\text{CaSO}_4 \cdot \frac{1}{2}\text{H}_2\text{O}$?"
   - *Correction*: Two formula units of $\text{CaSO}_4$ share a single water molecule of crystallization ($2\text{CaSO}_4 \cdot \text{H}_2\text{O}$).
2. **Dead Burnt Plaster Trap**:
   - *Trap*: "Heating gypsum to $200^\circ\text{C}$ produces fast-setting POP."
   - *Correction*: **Zero setting ability!** Heating gypsum above $100^\circ\text{C}$ completely dehydrates it into **Dead Burnt Plaster ($\text{CaSO}_4$)**, which permanently loses its rehydration and setting properties.
3. **Baking Soda vs. Powder Taste**:
   - *Trap*: "Baking soda can be used alone to bake a sweet sponge cake."
   - *Correction*: Pure baking soda releases sodium carbonate upon heating, leaving a **foul, bitter, soapy taste**. Tartaric acid in **Baking Powder** is required to neutralize the carbonate.
4. **Blood pH Fluctuation Fallacy**:
   - *Trap*: "Drinking acidic lemon juice drops human blood pH to 5."
   - *Correction*: Human blood is tightly buffered by the **Bicarbonate buffer system ($\text{H}_2\text{CO}_3 / \text{HCO}_3^-$)**; blood pH remains locked between **$7.35$ and $7.45$**.
