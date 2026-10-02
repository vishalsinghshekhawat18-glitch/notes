# RAPID REVISION MATRIX: CHAPTER 15

**Topic**: Poverty Estimation Methodologies & Inequality Metrics in India  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Master Comparative Matrices

### Matrix A: Poverty Committee Methodologies (Tendulkar vs. Rangarajan)

| Parameter | Suresh Tendulkar Committee (2009) | C. Rangarajan Committee (2014) |
| :--- | :--- | :--- |
| **Calorie Norm** | **Completely Abandoned** calorie criteria | Re-introduced: **2,155 kcal (Rural), 2,090 kcal (Urban)** |
| **Survey Recall** | **Mixed Reference Period (MRP)** | **Modified Mixed Reference Period (MMRP)** |
| **Specific Inclusions** | Private spending on **Health and Education** | Normative nutrition (calories + fats + proteins) + non-food |
| **Poverty Line (2011–12)**| • Rural: **₹816 / month** (~₹27.20 / day)<br>• Urban: **₹1,000 / month** (~₹33.33 / day) | • Rural: **₹972 / month** (~₹32.40 / day)<br>• Urban: **₹1,407 / month** (~₹46.90 / day) |
| **Poverty Headcount Ratio**| **21.9%** (Rural: 25.7%, Urban: 13.7%) | **29.5%** (Rural: 30.9%, Urban: 26.4%) |
| **Statutory Status** | **Officially Adopted Benchmark** | Submitted, but **Never Officially Adopted** |

---

### Matrix B: Survey Recall Periods

| Methodology | Reference Window Specifications | Relative Recall Accuracy |
| :--- | :--- | :--- |
| **Uniform Reference (URP)** | **30-Day Recall** for ALL items across the board | Low accuracy; memory recall errors in seasonal/durable items |
| **Mixed Reference (MRP)** | **365 Days** for 5 non-food items; **30 Days** for rest | Medium accuracy; Tendulkar methodology |
| **Modified Mixed (MMRP)** | **7 Days** for perishables; **365 Days** for 5 non-food; **30 Days** rest | **Highest accuracy**; modern global & NSO standard |

---

### Matrix C: Multidimensional Poverty Index (Global vs. National)

| Dimension | Global MPI (UNDP / OPHI) | National MPI (NITI Aayog) |
| :--- | :--- | :--- |
| **Dimensions (1/3 wt each)** | Health, Education, Standard of Living | Health, Education, Standard of Living |
| **Total Indicators** | **10 Indicators** | **12 Indicators** |
| **India-Specific Indicators** | None | 1. **Antenatal Care** (under Health)<br>2. **Bank Account** (under Standard of Living) |
| **Poverty Cut-Off** | Deprived in $\ge \mathbf{33.33\%}$ of weighted indicators | Deprived in $\ge \mathbf{33.33\%}$ of weighted indicators |

---

## 2. Key Mathematical Identities & Ratios

$$\mathbf{\text{Multidimensional Poverty Index (MPI)}} = \mathbf{H \times A} = \text{Headcount Ratio} \times \text{Intensity of Poverty}$$

$$\mathbf{\text{Gini Coefficient}} = \frac{\mathbf{\text{Area } A}}{\mathbf{\text{Area } A + \text{Area } B}} \quad \Big[\mathbf{0} = \text{Perfect Equality}, \quad \mathbf{1} = \text{Perfect Inequality}\Big]$$

$$\mathbf{\text{Palma Ratio}} = \frac{\text{Income Share of Richest 10\%}}{\text{Income Share of Poorest 40\%}}$$

$$\mathbf{\text{Poverty Gap Index (PGI)}} = \frac{1}{N} \sum_{i=1}^{q} \left(\frac{z - y_i}{z}\right) \quad \Big[\text{Measures the depth / shortfall of poverty below line } z\Big]$$

---

## 3. High-Yield Examiner Traps (Quick Scan)

1. **Tendulkar Calorie Myth**: Tendulkar did **NOT** use the 2,100 or 2,400 calorie norm. Tendulkar explicitly decoupled poverty lines from calories, moving to an all-India urban consumption standard with health and education.
2. **Official Benchmark Status**: While Rangarajan estimated poverty at 29.5%, it was **never officially adopted**. The official baseline for 2011–12 remains the **Tendulkar line (21.9%)**.
3. **Poverty Metric Basis**: India measures poverty using **Monthly Per Capita Consumption Expenditure (MPCE)**, NOT income.
4. **National MPI Indicators**: Global MPI has **10 indicators**, whereas NITI Aayog's National MPI has **12 indicators** (added **Antenatal Care** and **Bank Accounts**).
5. **Gini Bounds**: The Gini coefficient is strictly bounded between **0 and 1** (or 0 to 100%). It cannot be negative.
