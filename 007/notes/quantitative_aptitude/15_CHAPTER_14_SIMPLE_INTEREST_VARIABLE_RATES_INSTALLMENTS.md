# CHAPTER 14: SIMPLE INTEREST, VARIABLE RATE REGIMES & DEBT INSTALLMENTS

**Domain**: Financial Mathematics & Linear Capital Dynamics  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: First-Principles Derivation $\to$ Linear Invariants $\to$ Capital Partitioning Theorems $\to$ Debt Installment Mechanics $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 1. FIRST-PRINCIPLES ONTOLOGY & LINEAR TIME DYNAMICS

Simple Interest ($\mathbf{SI}$) represents the purest form of linear monetary compensation for the temporal use of financial capital. Under simple interest, the principal capital base remains completely static across the entire investment epoch. Accumulated interest never merges into the principal to earn secondary interest.

### The Differential Foundation
Let $P$ be the principal capital borrowed or invested, $R$ the annual interest rate expressed in percentage per annum ($\%\text{ p.a.}$), and $T$ the elapsed time in years.

The rate of monetary accumulation per unit time is strictly invariant:
$$\frac{dI}{dt} = \frac{P \cdot R}{100} = \text{constant}$$

Integrating from time $t = 0$ to $t = T$:
$$I(T) = \int_0^T \frac{P \cdot R}{100} \, dt = \mathbf{\frac{P \cdot R \cdot T}{100}}$$

The total terminal value (Amount $\mathbf{A}$) at time $T$ is:
$$\mathbf{A = P + I = P \left(1 + \frac{R \cdot T}{100}\right)}$$

```
Total Capital (Amount A)
▲
│                                          / Terminal Amount A = P(1 + RT/100)
│                                         /
│                                        /
│                                       /  Slope = (P · R) / 100  [Constant Accrual Rate]
│                                      /
│  ───────────────────────────────────/
│  Principal P (Static Base Line)
│
└────────────────────────────────────────────────► Time (Years)
```

---

### Time-Fraction Conventions & Calendar Rules
In competitive examinations, fractional time periods are standard:
1. **Monthly Conversion**: $m \text{ months} = \frac{m}{12} \text{ years}$.
2. **Day-Count Conversion**: Standard non-leap years contain $365$ days. The key factor is $73$ ($73 \times 5 = 365$):
   $$\mathbf{73 \text{ days} = \frac{1}{5} \text{ year} = 0.20 \text{ yr}}, \quad \mathbf{146 \text{ days} = \frac{2}{5} \text{ year} = 0.40 \text{ yr}}$$
   $$\mathbf{219 \text{ days} = \frac{3}{5} \text{ year} = 0.60 \text{ yr}}, \quad \mathbf{292 \text{ days} = \frac{4}{5} \text{ year} = 0.80 \text{ yr}}$$
3. **The Banking Day-Count Axiom**: When counting elapsed days between two specific dates:
   > **Axiom**: The day on which money is deposited/borrowed is **excluded**, whereas the day on which money is withdrawn/repaid is **included** (or vice versa, giving $D_2 - D_1$ days).

---

## 2. THE MULTIPLIER PRINCIPLE & TWO-EPOCH SCALING

### Theorem 1: Capital Multiplication Epochs
When a principal sum $P$ becomes $N$ times its original value in $T$ years:
$$A = N \cdot P \implies I = A - P = (N - 1) P$$

Equating to the fundamental SI formula:
$$(N - 1) P = \frac{P \cdot R \cdot T}{100} \implies \mathbf{R \cdot T = 100(N - 1)}$$

### Theorem 2: Two-Epoch Proportionality Rule
If a sum triples ($N_1 = 3$) in $T_1$ years, in how many years $T_2$ will it become $N_2$ times at the same interest rate?

Since $I_1 = (N_1 - 1)P$ and $I_2 = (N_2 - 1)P$:
$$\frac{I_1}{I_2} = \frac{T_1}{T_2} \implies \mathbf{\frac{T_1}{T_2} = \frac{N_1 - 1}{N_2 - 1}}$$

> **Instant Calculation Rule**: Never divide by $N$. Always divide by the **interest multiples $(N - 1)$**. If a sum doubles ($N=2 \implies I=1$) in $5$ years, to become $8$ times ($N=8 \implies I=7$), it requires $7 \times 5 = \mathbf{35 \text{ years}}$.

---

## 3. PIECEWISE LINEAR & VARIABLE RATE REGIMES

When loan agreements stipulate escalating interest rates over successive time intervals (e.g., developmental credit or corporate debt):
- Rate $R_1\%$ for first $T_1$ years,
- Rate $R_2\%$ for next $T_2$ years,
- Rate $R_3\%$ for subsequent period beyond $(T_1 + T_2)$ years.

Total interest accrued across the entire tenure is strictly additive:
$$\mathbf{I_{\text{total}} = \frac{P}{100} \left[ R_1 T_1 + R_2 T_2 + R_3 T_3 + \dots + R_k T_k \right]}$$

The **Effective Annual Simple Interest Rate ($\mathbf{R_{\text{eff}}}$)** across total duration $T = \sum T_i$ is:
$$\mathbf{R_{\text{eff}} = \frac{\sum_{i=1}^k R_i T_i}{\sum_{i=1}^k T_i}}$$

---

## 4. CAPITAL PARTITIONING THEOREMS

When an aggregate capital sum $P$ is bifurcated or partitioned into multiple portions $P_1, P_2, \dots, P_k$ invested under different rates $R_i$ and durations $T_i$:

### Case A: Equal Simple Interest Generated ($I_1 = I_2 = \dots = I_k$)
$$\frac{P_1 R_1 T_1}{100} = \frac{P_2 R_2 T_2}{100} = \dots = \frac{P_k R_k T_k}{100} = K$$

Solving for each capital component $P_i$:
$$P_i = \frac{100 K}{R_i T_i} \implies \mathbf{P_1 : P_2 : \dots : P_k = \frac{1}{R_1 T_1} : \frac{1}{R_2 T_2} : \dots : \frac{1}{R_k T_k}}$$

### Case B: Equal Terminal Amounts ($A_1 = A_2 = \dots = A_k$)
$$P_1 \left(1 + \frac{R_1 T_1}{100}\right) = P_2 \left(1 + \frac{R_2 T_2}{100}\right) = \dots = K$$
$$P_1 (100 + R_1 T_1) = P_2 (100 + R_2 T_2) = \dots = 100K$$

Solving for $P_i$:
$$\mathbf{P_1 : P_2 : \dots : P_k = \frac{1}{100 + R_1 T_1} : \frac{1}{100 + R_2 T_2} : \dots : \frac{1}{100 + R_k T_k}}$$

---

## 5. THE DEBT INSTALLMENT ARCHITECTURE IN SIMPLE INTEREST

One of the most widely misunderstood areas of quantitative aptitude is the calculation of annual installments to discharge a debt under simple interest.

### Theoretical Context: Due Debt vs Present Value
Let an individual owe a terminal debt of ₹$A$, which falls due exactly $n$ years from today. The debtor negotiates to liquidate this obligation through $n$ equal annual installments of ₹$x$ each, the first installment payable at the end of Year 1, and the final installment at the end of Year $n$.

### First-Principles Derivation of the Installment Equation
Consider the terminal date (end of year $n$):
1. The $1^{\text{st}}$ installment of ₹$x$ paid at the end of Year 1 stays with the creditor for $(n - 1)$ years. At $R\%$ simple interest, its future value at year $n$ is:
   $$\text{FV}_1 = x + \frac{x \cdot R \cdot (n - 1)}{100}$$
2. The $2^{\text{nd}}$ installment paid at Year 2 stays with the creditor for $(n - 2)$ years:
   $$\text{FV}_2 = x + \frac{x \cdot R \cdot (n - 2)}{100}$$
3. The $k^{\text{th}}$ installment paid at Year $k$ stays with the creditor for $(n - k)$ years:
   $$\text{FV}_k = x + \frac{x \cdot R \cdot (n - k)}{100}$$
4. The final $n^{\text{th}}$ installment is paid at Year $n$ (the due date) and earns zero future interest:
   $$\text{FV}_n = x$$

To fully discharge the terminal due debt $A$, the sum of future values of all installments must exactly match $A$:
$$\sum_{k=1}^n \text{FV}_k = A$$

$$\left[ x + x + \dots + x \right] + \frac{x \cdot R}{100} \Big[ (n - 1) + (n - 2) + \dots + 1 + 0 \Big] = A$$

The summation of integers from $0$ to $(n - 1)$ is:
$$\sum_{j=1}^{n-1} j = \frac{n(n - 1)}{2}$$

Substituting this identity gives the **Universal Debt Installment Master Identity**:
$$\mathbf{n \cdot x + \frac{x \cdot R \cdot n(n - 1)}{200} = A}$$

Solving directly for the annual installment $x$:
$$\mathbf{x = \frac{100 \cdot A}{100 \cdot n + \frac{R \cdot n(n - 1)}{2}}}$$

---

## 6. MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Splitting Capital for Equal Interest (SBI PO Prelims)
**Problem**: A sum of ₹$1,550$ is lent out into two parts, one at $8\%$ p.a. and the other at $6\%$ p.a. simple interest. If the total annual interest income received is ₹$106$, determine the money lent at each rate.

**Method 1: Direct Algebraic Balance**:
Let the sum lent at $8\%$ be $x$. Then money lent at $6\%$ is $(1550 - x)$.
$$\frac{x \times 8 \times 1}{100} + \frac{(1550 - x) \times 6 \times 1}{100} = 106$$
$$8x + 9300 - 6x = 10600 \implies 2x = 1300 \implies \mathbf{x = ₹650}$$
Sum at $8\% = \mathbf{₹650}$; Sum at $6\% = 1550 - 650 = \mathbf{₹900}$.

**Method 2: Net Deviation / Alligation Engine (30 Seconds)**:
- Overall effective interest rate: $R_{\text{avg}} = \frac{106}{1550} \times 100\% = \frac{212}{31}\%$.
- Alligation between $8\%$ ($\frac{248}{31}\%$) and $6\%$ ($\frac{186}{31}\%$):
  $$\text{Ratio} = \left(\frac{212}{31} - \frac{186}{31}\right) : \left(\frac{248}{31} - \frac{212}{31}\right) = 26 : 36 = \mathbf{13 : 18}$$
- Sum at $8\% = 1550 \times \frac{13}{31} = 50 \times 13 = \mathbf{₹650}$.
- Sum at $6\% = 1550 \times \frac{18}{31} = 50 \times 18 = \mathbf{₹900}$.

---

### Exemplar 2: Two-Epoch Multiplier Dynamics (UPSC CSAT)
**Problem**: A certain sum of money doubles itself in $7$ years at simple interest. In how many years will it become $8$ times itself at the same rate of interest?

**Solution via First-Principles Multipliers**:
- In Epoch 1: Sum doubles $\implies N_1 = 2 \implies I_1 = (2 - 1)P = 1P$. Time $T_1 = 7\text{ yrs}$.
- In Epoch 2: Sum becomes 8 times $\implies N_2 = 8 \implies I_2 = (8 - 1)P = 7P$.
$$\frac{T_2}{T_1} = \frac{N_2 - 1}{N_1 - 1} = \frac{7}{1} = 7$$
$$T_2 = 7 \times T_1 = 7 \times 7 = \mathbf{49 \text{ years}}$$

---

### Exemplar 3: Debt Liquidation via Installments (RBI Grade B Phase 1)
**Problem**: What annual installment will discharge a debt of ₹$1,092$ due in $3$ years at $12\%$ simple interest per annum?

**Mathematical Execution**:
Here, due debt $A = ₹1,092$, number of installments $n = 3$, rate $R = 12\%$.

Using the Universal Debt Installment Identity:
$$n \cdot x + \frac{x \cdot R \cdot n(n - 1)}{200} = A$$
$$3x + \frac{x \cdot 12 \cdot 3 \cdot 2}{200} = 1092$$
$$3x + \frac{72x}{200} = 3x + \frac{9x}{25} = \frac{75x + 9x}{25} = \frac{84x}{25} = 1092$$

$$x = \frac{1092 \times 25}{84} = 13 \times 25 = \mathbf{₹325}$$
Each annual installment is **₹$325$**.

---

### Exemplar 4: Equal Amount Partitioning for Minor Beneficiaries (CAT / Banking Mains)
**Problem**: A father divides ₹$18,750$ between his two sons aged $12$ and $14$ years respectively, such that when each reaches $18$ years of age, both receive identical terminal amounts at $5\%$ simple interest. Find the initial share allocated to the younger son.

**Mathematical Execution**:
- Younger son ($12$ yrs) has $T_1 = 18 - 12 = 6 \text{ years}$ until maturity.
- Elder son ($14$ yrs) has $T_2 = 18 - 14 = 4 \text{ years}$ until maturity.
- Rate $R = 5\%$.

Since terminal amounts are equal ($A_1 = A_2$):
$$\frac{P_1}{P_2} = \frac{100 + R \cdot T_2}{100 + R \cdot T_1} = \frac{100 + (5 \times 4)}{100 + (5 \times 6)} = \frac{120}{130} = \mathbf{\frac{12}{13}}$$

Total ratio units $= 12 + 13 = 25 \text{ units} = ₹18,750$.
$$1 \text{ unit} = \frac{18750}{25} = 750$$
Younger son's share $P_1 = 12 \times 750 = \mathbf{₹9,000}$.  
Elder son's share $P_2 = 13 \times 750 = \mathbf{₹9,750}$.

---

## 7. HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: The Multiplier Proportionality Fallacy** | Doubling in $7$ yrs $\implies$ $8$ times in $7 \times 4 = 28$ yrs. | Simple interest grows on interest earned, not total amount. Interest grows from $1P$ to $7P$, requiring $7 \times 7 = \mathbf{49\text{ yrs}}$. |
| **Trap 2: Installment Debt Timing Blindness** | Dividing total debt by number of installments: $x = \frac{1092}{3} = ₹364$. | Installments paid early earn interest for the creditor up to the due date, reducing the nominal cash required to ₹$325$. |
| **Trap 3: Day-Count Divisor Confusion** | Dividing days by $360$ (commercial day count) instead of $365$ in standard banking questions. | Standard Indian examinations strictly use $365$ days ($73 \text{ days} = 0.2 \text{ yr}$) unless a leap year is specifically named. |
| **Trap 4: Equal Interest vs Equal Amount Inversion** | Using ratio $\frac{1}{R_1 T_1} : \frac{1}{R_2 T_2}$ when the problem specifies **equal terminal amounts**. | Equal interest yields $\frac{1}{RT}$; equal amounts requires $\mathbf{\frac{1}{100 + RT}}$. |
| **Trap 5: Date Inclusion Error** | Counting both the start date and end date when computing interest duration. | Only count one boundary: $(D_{\text{end}} - D_{\text{start}})$ elapsed days. |
