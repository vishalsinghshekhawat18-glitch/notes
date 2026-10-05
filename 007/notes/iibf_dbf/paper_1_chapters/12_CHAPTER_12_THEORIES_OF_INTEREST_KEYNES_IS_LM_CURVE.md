# THEORIES OF INTEREST, LIQUIDITY PREFERENCE & IS-LM CURVE

Interest represents the price paid for borrowed funds and the economic return for parting with liquidity. In commercial banking and macro-financial risk management, interest rate determination explains asset-liability management (ALM) spreads, bond valuation, monetary policy transmission, and investment cycles.

---

## § 12.1 Unit 15: Theories of Interest

> **Curriculum Alignment — Official IIBF Paper 1 Benchmark (Unit 15)**  
> **Core Proposition:** Theories of interest evolved from the real barter models of Classical economists (Savings-Investment equilibrium) to the Neo-Classical Loanable Funds theory, the Keynesian Liquidity Preference framework (Speculative motive and Liquidity Trap), and finally the Hicks-Hansen IS-LM synthesis uniting the Goods and Money markets.

### 1. Classical Theory of Interest (The Real Model)

• **Foundational Economists:** Alfred Marshall, Irving Fisher, A.C. Pigou, and Eugen von Böhm-Bawerk.  
• **Core Tenet:** Interest is a purely **real phenomenon** determined by real economic forces—productivity of capital and thrift/abstinence.  
• **Determinants:**
  - *Demand for Capital (Investment $I$):* Driven by the marginal productivity of capital. Inversely related to interest rate: $$\frac{dI}{dr} < 0$$
  - *Supply of Capital (Savings $S$):* Driven by time preference and abstinence from current consumption. Positively related to interest rate: $$\frac{dS}{dr} > 0$$
• **Equilibrium:** Attained at the interest rate where aggregate real savings equal aggregate real investment:
  $$S(r) = I(r)$$
• **Critical Flaw:** Fails to account for money supply, bank credit creation, and assumes a constant full-employment national income.

---

### 2. Neo-Classical Loanable Funds Theory

• **Foundational Economists:** Knut Wicksell, Dennis Robertson, Bertil Ohlin, and Gunnar Myrdal.  
• **Core Tenet:** Integrates real factors (savings and investment) with monetary factors (bank credit, hoarding, and dishoarding).  
• **Demand for Loanable Funds ($DL$):**
  $$DL = I + H + DS$$
  Where $I$ is Investment demand, $H$ is Hoarding of cash, and $DS$ is Dissaving by consumers.  
• **Supply of Loanable Funds ($SL$):**
  $$SL = S + BC + DH + DI$$
  Where $S$ is Real Savings, $BC$ is Net New Bank Credit, $DH$ is Dishoarding of idle cash, and $DI$ is Disinvestment.  
• **Equilibrium:** The market rate of interest equates total demand with total supply of loanable funds:
  $$DL(r) = SL(r)$$

---

### 3. Keynesian Liquidity Preference Theory (The Monetary Model)

• **Foundational Text:** John Maynard Keynes, *The General Theory of Employment, Interest and Money* (1936).  
• **Core Tenet:** Interest is a **purely monetary phenomenon**—it is the reward for parting with liquidity (cash) for a specified period, not the reward for saving per se.  
• **The Three Motives for Holding Cash (Liquidity Preference $L$):**

| Motive | Governing Economic Function | Determinant Variable | Interest Elasticity |
| :--- | :--- | :--- | :--- |
| **1. Transactions Motive ($M_t$)** | Cash held for day-to-day personal and business transactions between income receipts. | Function of National Income: $$M_t = f(Y)$$ | **Interest Inelastic** (Insensitive to interest rates). |
| **2. Precautionary Motive ($M_p$)** | Cash held as a contingency buffer for unexpected emergencies (illness, accidents). | Function of National Income: $$M_p = f(Y)$$ | **Interest Inelastic** (Driven by income levels). |
| **3. Speculative Motive ($M_{sp}$)** | Cash held to capitalize on future fluctuations in bond market prices and interest rates. | Function of Interest Rate: $$M_{sp} = f(r)$$ | **Highly Interest Elastic** (Inversely related to interest rate $r$). |

$$\text{Total Demand for Money } M_d = L(Y, r) = L_1(Y) + L_2(r) = (M_t + M_p) + M_{sp}$$

• **Inverse Speculative Mechanism:**
  - *When Interest Rates are High:* Bond prices are low; the public anticipates rates will fall and bond prices will rise, so they deploy cash into bonds (Speculative cash demand is minimal).
  - *When Interest Rates are Low:* Bond prices are at historic peaks; the public anticipates rates must rise and bond prices will crash, so they hold liquid cash to avoid capital losses (Speculative cash demand is high).

```
Interest Rate (r)
       ▲
       │        Keynesian Liquidity Preference
    r₁ ┼───────┐
       │       │\
       │       │ \
       │       │  \
    r* ┼───────┼───\──────── Money Supply (M/P)
       │       │    \
       │       │     \
   r_min ┼───────┴──────\════════════════════════════►  LIQUIDITY TRAP
       │                                              (Perfect Elasticity)
       └─────────────────────────────────────────────► Speculative Cash (M_sp)
```

• **The Liquidity Trap:**
  - Occurs at an irreducible floor interest rate ($r_{\text{min}}$) where the speculative demand curve becomes **infinitely elastic (completely horizontal)**.
  - The public believes bond prices can only fall, so every unit of money injected by the central bank is trapped in cash balances.
  - **Monetary Policy Impotence:** Central bank open market purchases cannot depress interest rates any further; **expansionary monetary policy becomes completely ineffective**, leaving expansionary fiscal policy as the sole effective stimulus tool.

---

### 4. The Hicks-Hansen Synthesis: The IS-LM Framework

Introduced by **John Hicks (1937)** and expanded by **Alvin Hansen**, the IS-LM model synthesizes the Goods Market (Classical $I=S$) and Money Market (Keynesian $L=M$) into a single simultaneous general equilibrium framework.

| Dimension | The IS Curve (Goods Market) | The LM Curve (Money Market) |
| :--- | :--- | :--- |
| **Equilibrium Condition** | $$\text{Planned Investment} = \text{Planned Savings } [I(r) = S(Y)]$$ | $$\text{Money Demand} = \text{Money Supply } [L(Y, r) = \bar{M}]$$ |
| **Curve Slope** | **Downward Sloping** ($\frac{\Delta r}{\Delta Y} < 0$) | **Upward Sloping** ($\frac{\Delta r}{\Delta Y} > 0$) |
| **Economic Logic of Slope** | A lower interest rate ($r \downarrow$) lowers capital financing costs, stimulating investment ($I \uparrow$), which raises equilibrium national output ($Y \uparrow$) via the Keynesian expenditure multiplier. | Higher national income ($Y \uparrow$) increases transaction demand for money ($M_t \uparrow$). Given a fixed money supply ($\bar{M}$), interest rates must rise ($r \uparrow$) to induce holders to release speculative cash. |
| **Shift Triggers** | **Fiscal Policy Actions:** Increased Government Spending ($G \uparrow$) or tax cuts shift the IS curve to the **RIGHT**. Tax increases shift it to the **LEFT**. | **Monetary Policy Actions:** Central bank expanding money supply ($\bar{M} \uparrow$) shifts the LM curve to the **RIGHT**. Monetary tightening shifts it to the **LEFT**. |

• **Simultaneous Macroeconomic Equilibrium:** The intersection of the IS and LM curves determines the unique pair of equilibrium interest rate ($r^*$) and equilibrium national income ($Y^*$).  
• **The Crowding-Out Effect:** When the government increases deficit-financed public spending, the IS curve shifts rightward, raising national income. However, higher income increases transaction money demand, driving interest rates up ($r^* \uparrow$). The higher interest rate suppresses private investment expenditure, partially offsetting the initial fiscal expansion.

---

### Examiner Trap Vault: Unit 15 High-Yield Distractors

1. **Trap — Speculative Demand Relationship:** Speculative demand for money is **INVERSELY related to the rate of interest**. When interest rates are very low, speculative money demand is at its maximum.
2. **Trap — Liquidity Trap Monetary Policy:** Inside a Liquidity Trap, **monetary policy is COMPLETELY INEFFECTIVE** because the LM curve is horizontal. Only fiscal policy can expand output.
3. **Trap — IS Curve Slope:** The IS curve slopes **DOWNWARD** (lower interest rate $\to$ higher investment $\to$ higher output). The LM curve slopes **UPWARD** (higher output $\to$ higher transaction demand $\to$ higher interest rate).
4. **Trap — Shift vs Movement in IS-LM:** A change in the **interest rate causes a movement along** the curves. A shift in the IS curve is caused by autonomous spending, taxes, or government expenditure; a shift in the LM curve is caused by central bank changes in real money supply.

---

### Unit 15 Practice Questions (IIBF DB&F Pattern)

**Q1. In Keynesian monetary economics, the speculative demand for money becomes perfectly interest elastic (horizontal) under which of the following conditions?**  
A. During peak economic expansion when interest rates reach historic highs  
B. Inside a Liquidity Trap when interest rates fall to an irreducible minimum floor  
C. When the central bank raises the statutory Cash Reserve Ratio to maximum levels  
D. Under hyperinflation when the purchasing power of money collapses to zero  

**Q2. In the Hicks-Hansen IS-LM general equilibrium framework, which of the following policy actions will cause the LM curve to shift to the right?**  
A. An increase in government infrastructure capital expenditure  
B. An increase in personal income tax rates by the Ministry of Finance  
C. An open market purchase of government securities by the central bank expanding the money supply  
D. An increase in the marginal propensity to save by households  

**Q3. Consider the following statements regarding the Classical versus Keynesian theories of interest:**  
Statement I: The Classical theory posits that the rate of interest is a purely monetary phenomenon determined by the demand for and supply of money.  
Statement II: Keynes asserted that the transactions demand for money is determined primarily by the level of national income and is largely interest inelastic.  
Which of the statements given above is/are correct?  
A. Statement I only  
B. Statement II only  
C. Both Statement I and Statement II  
D. Neither Statement I nor Statement II  

---

### Answer Key & Explanations

• **Q1 — Answer: B.** Inside a Liquidity Trap, nominal interest rates are so low that everyone anticipates bond prices will fall, making the speculative demand for money perfectly elastic (horizontal).  
• **Q2 — Answer: C.** The LM curve shifts rightward when the real money supply expands, which occurs when the central bank conducts open market purchases of G-Secs or reduces policy reserve ratios. Government spending shifts the IS curve, not the LM curve.  
• **Q3 — Answer: B.** Statement I is incorrect because the Classical theory treated interest as a **real phenomenon** (savings and investment), whereas Keynes treated it as a **monetary phenomenon**. Statement II is correct (transactions demand $M_t = f(Y)$ is income-determined).
