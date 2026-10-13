<div style="page-break-before: always;"></div>

# CHAPTER 27: ADVANCED MAINS DATA INTERPRETATION & CASELET LABORATORY

**Target Examination Relevance**:
* **SBI PO & IBPS PO (Mains)**: Typically 30–35 Questions in Data Analysis & Interpretation (45 minutes)
* **RBI Grade B (Phase I)**: Demanding multi-tier DI sets under tight 25-minute sectional pacing
* **IBPS RRB PO (Mains)**: Comprehensive tabular, caselet, and mixed-chart sets

---

## 27.1 What is it?
Mains-level Data Interpretation transforms elementary chart-reading into **multi-layered analytical deduction**. Rather than presenting complete raw datasets, modern examination sets embed:
1. **Missing Data Tables**: Omitted values that must be recovered through row/column conservation or footnote algebraic relations.
2. **Overlapping Caselets**: Unstructured narrative paragraphs requiring set-theoretic Venn decomposition.
3. **Arithmetic DI**: Graphical sets where data points represent rate, work, motion, or commercial variables governed by specific arithmetic laws.

---

## 27.2 Practice Set 1: Missing Data Table DI Laboratory

### Scenario & Dataset [EXAM-STYLE - Mains Difficulty]
The following table shows the production, sales distribution, selling price, and revenue of items manufactured by four companies ($P, Q, R, S$). Some data values are missing from the table.

| Company | Total Produced | Ratio of Sold to Unsold | Selling Price per Item (₹) | Total Revenue from Sold Items (₹) |
| :---: | :---: | :---: | :---: | :---: |
| **P** | $12,000$ | $3 : 1$ | ₹$50$ | — |
| **Q** | — | $4 : 1$ | ₹$40$ | ₹$3,20,000$ |
| **R** | $15,000$ | — | ₹$60$ | ₹$5,40,000$ |
| **S** | $20,000$ | $7 : 3$ | — | ₹$7,00,000$ |

---

### Step-by-Step Dataset Decompression (Upfront Master Table Recovery)

Before attempting the sub-questions, recover all missing parameters in 90 seconds:

1. **Company Q Recovery**:
   * Revenue $= ₹3,20,000$, $\text{SP} = ₹40 \implies \text{Items Sold} = \frac{3,20,000}{40} = \mathbf{8,000}$.
   * $\text{Sold} : \text{Unsold} = 4 : 1 \implies 4\text{ units} = 8,000 \implies 1\text{ unit} = \mathbf{2,000}$ unsold.
   * $\text{Total Produced by Q} = 8,000 + 2,000 = \mathbf{10,000}$.

2. **Company R Recovery**:
   * Revenue $= ₹5,40,000$, $\text{SP} = ₹60 \implies \text{Items Sold} = \frac{5,40,000}{60} = \mathbf{9,000}$.
   * $\text{Total Produced} = 15,000 \implies \text{Unsold} = 15,000 - 9,000 = \mathbf{6,000}$.
   * $\text{Ratio Sold to Unsold} = 9,000 : 6,000 = \mathbf{3 : 2}$.

3. **Company P Recovery**:
   * $\text{Total Produced} = 12,000$. $\text{Sold} : \text{Unsold} = 3 : 1 \implies \text{Sold} = \frac{3}{4} \times 12,000 = \mathbf{9,000}$; $\text{Unsold} = \mathbf{3,000}$.
   * $\text{Revenue from Sold Items} = 9,000 \times 50 = \mathbf{₹4,50,000}$.

4. **Company S Recovery**:
   * $\text{Total Produced} = 20,000$. $\text{Sold} : \text{Unsold} = 7 : 3 \implies \text{Sold} = \frac{7}{10} \times 20,000 = \mathbf{14,000}$; $\text{Unsold} = \mathbf{6,000}$.
   * $\text{SP per Item} = \frac{\text{Revenue}}{\text{Sold}} = \frac{7,00,000}{14,000} = \mathbf{₹50}$.

#### The Completed Master Reference Matrix:
| Company | Total Produced | Sold Items | Unsold Items | Ratio (Sold : Unsold) | SP per Item (₹) | Revenue (₹) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P** | $12,000$ | $9,000$ | $3,000$ | $3 : 1$ | ₹$50$ | ₹$4,50,000$ |
| **Q** | $10,000$ | $8,000$ | $2,000$ | $4 : 1$ | ₹$40$ | ₹$3,20,000$ |
| **R** | $15,000$ | $9,000$ | $6,000$ | $3 : 2$ | ₹$60$ | ₹$5,40,000$ |
| **S** | $20,000$ | $14,000$ | $6,000$ | $7 : 3$ | ₹$50$ | ₹$7,00,000$ |

---

### Questions 1–5 & Step-by-Step Solutions

#### Question 1
What is the total combined revenue earned by Company P and Company S from their sold items?  
(A) ₹$10,50,000$  
(B) ₹$11,50,000$  
(C) ₹$11,20,000$  
(D) ₹$12,00,000$  
(E) None of these  

* **Solution**:
  From the master table:
  $$\text{Revenue}_P = ₹4,50,000, \quad \text{Revenue}_S = ₹7,00,000$$
  $$\text{Total Combined Revenue} = 4,50,000 + 7,00,000 = \mathbf{₹11,50,000}$$
  **Answer: (B)**

---

#### Question 2
The number of unsold items of Company R is what percentage of the total items produced by Company Q?  
(A) $40\%$  
(B) $50\%$  
(C) $60\%$  
(D) $65\%$  
(E) $75\%$  

* **Solution**:
  From the master table:
  $$\text{Unsold}_R = 6,000, \quad \text{Produced}_Q = 10,000$$
  $$\text{Percentage} = \frac{6,000}{10,000} \times 100\% = \mathbf{60\%}$$
  **Answer: (C)**

---

#### Question 3
If Company Q sold each item at a profit of $25\%$ over its cost of production, what was the total cost price of all items sold by Company Q?  
(A) ₹$2,40,000$  
(B) ₹$2,56,000$  
(C) ₹$2,80,000$  
(D) ₹$3,00,000$  
(E) None of these  

* **Solution**:
  For Company Q:
  $$\text{Selling Price per item} = ₹40$$
  $$\text{Profit} = 25\% \implies \text{SP} = 1.25 \times \text{CP} \implies \text{CP} = \frac{40}{1.25} = ₹32 \text{ per item}$$
  $$\text{Total Cost of 8,000 items sold} = 8,000 \times 32 = \mathbf{₹2,56,000}$$
  *(Alternatively: $\text{Total Cost} = \frac{\text{Revenue}}{1.25} = \frac{3,20,000}{1.25} = \mathbf{₹2,56,000}$)*.  
  **Answer: (B)**

---

#### Question 4
What is the ratio of the number of items sold by Company P to the number of items unsold by Company S?  
(A) $3 : 2$  
(B) $4 : 3$  
(C) $5 : 3$  
(D) $2 : 1$  
(E) $7 : 4$  

* **Solution**:
  From the master table:
  $$\text{Sold}_P = 9,000, \quad \text{Unsold}_S = 6,000$$
  $$\text{Ratio} = \frac{9,000}{6,000} = \mathbf{3 : 2}$$
  **Answer: (A)**

---

#### Question 5
What is the weighted average selling price per item across all items sold by Companies P, Q, and R together?  
(A) ₹$48.50$  
(B) ₹$50.00$  
(C) ₹$50.38$  
(D) ₹$52.15$  
(E) None of these  

* **Solution**:
  Total revenue earned by P, Q, and R:
  $$\text{Total Revenue} = 4,50,000 + 3,20,000 + 5,40,000 = ₹13,10,000$$
  Total items sold by P, Q, and R:
  $$\text{Total Sold Items} = 9,000 + 8,000 + 9,000 = 26,000$$
  $$\text{Weighted Average SP} = \frac{13,10,000}{26,000} = \frac{1310}{26} = \frac{655}{13} \approx \mathbf{₹50.38}$$
  **Answer: (C)**

---

## 27.3 Practice Set 2: 3-Variable Overlapping Venn Caselet Laboratory

### Scenario & Narrative [EXAM-STYLE - Mains Difficulty]
In a coaching institute preparing candidates for banking examinations, a mock test survey was conducted across a cohort of **$1,200$ enrolled students**:
1. All $1,200$ students appeared for the examination across three sectional tests: **Reasoning (R)**, **Quantitative Aptitude (Q)**, and **English (E)**. The categories $R$, $Q$, and $E$ denote candidates who **passed** the respective test.
2. Total students passing Reasoning $= 650$.
3. Total students passing Quantitative Aptitude $= 580$.
4. Total students passing English $= 500$.
5. Students passing both Reasoning and Quantitative Aptitude $= 260$.
6. Students passing both Quantitative Aptitude and English $= 210$.
7. Students passing both Reasoning and English $= 220$.
8. Students passing all three sectional tests $= 100$.

---

### Step-by-Step Venn Region Decompression

Let the 3 circles be $R, Q, E$ with standard regions:
* Central intersection (All three): $g = R \cap Q \cap E = \mathbf{100}$.

Now compute the "Only Two" double-intersection regions:
* Only $R$ and $Q$ (not $E$): $d = n(R \cap Q) - g = 260 - 100 = \mathbf{160}$.
* Only $Q$ and $E$ (not $R$): $f = n(Q \cap E) - g = 210 - 100 = \mathbf{110}$.
* Only $R$ and $E$ (not $Q$): $e = n(R \cap E) - g = 220 - 100 = \mathbf{120}$.

Now compute the "Only One" single-category regions:
* Only Reasoning: $a = n(R) - (d + e + g) = 650 - (160 + 120 + 100) = 650 - 380 = \mathbf{270}$.
* Only Quantitative Aptitude: $b = n(Q) - (d + f + g) = 580 - (160 + 110 + 100) = 580 - 370 = \mathbf{210}$.
* Only English: $c = n(E) - (e + f + g) = 500 - (120 + 110 + 100) = 500 - 330 = \mathbf{170}$.

Verification:
$$\text{Total} = a + b + c + d + e + f + g = 270 + 210 + 170 + 160 + 120 + 110 + 100 = \mathbf{1,140}$$
Students failing all three tests: $1,200 - 1,140 = \mathbf{60}$.

#### Venn Summary Table:
| Region Description | Region Label | Number of Students |
| :--- | :---: | :---: |
| Only Reasoning | $a$ | $270$ |
| Only Quantitative Aptitude | $b$ | $210$ |
| Only English | $c$ | $170$ |
| Only Reasoning & Quantitative Aptitude | $d$ | $160$ |
| Only Reasoning & English | $e$ | $120$ |
| Only Quantitative Aptitude & English | $f$ | $110$ |
| All Three Sections | $g$ | $100$ |
| None of the Three Sections | $n$ | $60$ |
| **Total Enrolled Students** | **U** | **1,200** |

---

### Questions 6–10 & Step-by-Step Solutions

#### Question 6
How many students passed in **exactly two** of the three sectional tests?  
(A) $350$  
(B) $390$  
(C) $410$  
(D) $450$  
(E) None of these  

* **Solution**:
  $$\text{Exactly Two} = d + e + f = 160 + 120 + 110 = \mathbf{390}$$
  **Answer: (B)**

---

#### Question 7
How many students passed in **only one** sectional test?  
(A) $580$  
(B) $620$  
(C) $650$  
(D) $680$  
(E) $710$  

* **Solution**:
  $$\text{Exactly One} = a + b + c = 270 + 210 + 170 = \mathbf{650}$$
  **Answer: (C)**

---

#### Question 8
What percentage of the total enrolled students passed in both Reasoning and English but **failed** in Quantitative Aptitude?  
(A) $8\%$  
(B) $10\%$  
(C) $12\%$  
(D) $15\%$  
(E) $18\%$  

* **Solution**:
  This corresponds to the region "Only Reasoning and English", which is $e = 120$.
  $$\text{Percentage} = \frac{120}{1200} \times 100\% = \mathbf{10\%}$$
  **Answer: (B)**

---

#### Question 9
What is the ratio of students who passed only in Quantitative Aptitude to students who passed in all three tests?  
(A) $21 : 10$  
(B) $19 : 10$  
(C) $7 : 3$  
(D) $5 : 2$  
(E) $11 : 5$  

* **Solution**:
  $$\text{Only Q} = b = 210, \quad \text{All Three} = g = 100$$
  $$\text{Ratio} = \frac{210}{100} = \mathbf{21 : 10}$$
  **Answer: (A)**

---

#### Question 10
How many students passed in **at least two** sectional tests?  
(A) $390$  
(B) $450$  
(C) $490$  
(D) $510$  
(E) $530$  

* **Solution**:
  $$\text{At Least Two} = (\text{Exactly Two}) + (\text{All Three}) = (d + e + f) + g = 390 + 100 = \mathbf{490}$$
  **Answer: (C)**

---

## 27.4 Archetype 3: Arithmetic DI Framework (Rate & Commercial Models)

In Arithmetic DI sets, tables or graphs depict physical rates or commercial terms:
1. **Time & Work DI**: Charts provide individual days or relative efficiencies. Convert all values to **LCM work units** before evaluating questions.
2. **Boats & Streams DI**: Data provides still-water boat speeds and river flow rates across different streams. Apply vector formulas ($v_{\text{down}} = u + v, v_{\text{up}} = u - v$).
3. **Compound Interest DI**: Charts show principal and interest rates. Use tree-diagram multipliers rather than direct formula expansions.

---

## 27.5 Archetype 4: Radar / Spider Web Chart Protocols

1. **Axis Tracking**: Radial axes originate from center ($0$) to the perimeter. Ensure you trace concentric polygon levels carefully (e.g., increments of 10 vs. 20).
2. **Immediate Tabulation**: Rather than repeatedly reading concentric webs for 5 questions, spend 60 seconds copying the web values into a clean standard table.
