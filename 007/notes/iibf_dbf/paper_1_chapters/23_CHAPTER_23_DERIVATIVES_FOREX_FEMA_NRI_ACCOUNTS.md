# FINANCIAL DERIVATIVES, FOREX, FEMA & NRI ACCOUNTS

Foreign exchange and derivative markets enable cross-border trade settlements, currency risk hedging, and interest rate risk transformation. This chapter examines Foreign Exchange operations, FEMA, and Non-Resident Indian (NRI) deposit accounts (Unit 33) alongside Financial Derivatives and Credit Default Swaps (Unit 36).

---

## § 23.1 Unit 33: Foreign Exchange Markets

> **Curriculum Alignment — Official IIBF Paper 1 Benchmark (Unit 33)**  
> **Core Proposition:** The Indian foreign exchange market operates under the Foreign Exchange Management Act (FEMA), 1999, regulated by the RBI with market conventions established by FEDAI. Cross-border capital is channeled through specialized NRI deposit accounts (NRE, NRO, FCNR(B)).

### 1. Market Infrastructure & Exchange Quotation Conventions

• **Foreign Exchange Dealers' Association of India (FEDAI):** Established in **1958**; self-regulatory body formulating market conventions, uniform rules, and codes of conduct for Authorized Dealer banks in India.  
• **Authorized Persons (FEMA Categorization):**
  - *Authorized Dealer Category-I (AD Cat-I):* Commercial banks authorized to handle all current and capital account transactions.
  - *Authorized Dealer Category-II (AD Cat-II):* Upgraded money changers authorized to handle non-trade related personal remittances.
  - *Authorized Dealer Category-III (AD Cat-III):* Select financial institutions handling specific foreign exchange transactions.
• **Exchange Rate Quotations:**
  - *Direct Quotation:* Units of domestic currency per unit of foreign currency (e.g. $1\text{ USD} = ₹85.00$). In India, **all foreign exchange quotations are given as Direct Quotes** since 2 August 1993.
  - *Indirect Quotation:* Units of foreign currency per unit of domestic currency (e.g. $₹100 = 1.18\text{ USD}$).
• **Value Dates (Foreign Exchange Settlement):**
  - **Cash / Ready:** Settlement of funds on the **same day of the transaction ($T$)**.
  - **TOM (Tomorrow):** Settlement on the **next business day ($T+1$)**.
  - **SPOT:** Settlement on the **second working business day ($T+2$)** following the transaction date. Spot rate is the primary benchmark rate.
  - **FORWARD:** Settlement on any agreed date **beyond the Spot date ($> T+2$)**.

---

### 2. NRI Bank Accounts: Comprehensive Master Comparison Matrix

| Regulatory Parameter | Non-Resident External (NRE) Account | Non-Resident Ordinary (NRO) Account | Foreign Currency Non-Resident (FCNR-B) Account |
| :--- | :--- | :--- | :--- |
| **Permitted Currency** | **Indian Rupees (INR)** | **Indian Rupees (INR)** | **Designated Foreign Currencies** (USD, GBP, EUR, JPY, AUD, CAD) |
| **Permitted Account Types** | Savings, Current, Recurring, Fixed Deposit | Savings, Current, Recurring, Fixed Deposit | **Term / Fixed Deposit ONLY** (No Savings/Current accounts!) |
| **Permitted Deposit Source** | Inward remittances from abroad in foreign exchange, or transfers from another NRE/FCNR account. | Inward remittances AND **legitimate local Indian earnings** (rent, dividends, pension). | Inward remittances in designated foreign currency. |
| **Repatriability of Funds** | **100% Freely and Fully Repatriable** (Principal and interest can be sent abroad freely). | **Restricted Repatriability:** Current income is repatriable; capital is capped at **$1 Million USD per financial year** (with tax certificate Form 15CA/15CB). | **100% Freely and Fully Repatriable** (Principal and interest can be remitted overseas). |
| **Foreign Exchange Risk** | Borne by the **Depositor / NRI** (Currency converted to INR on deposit and converted back on withdrawal). | Borne by the **Depositor / NRI**. | Borne entirely by the **Bank**! The depositor faces **ZERO foreign exchange risk**. |
| **Indian Income Tax Status** | **Completely Tax-Free** (Interest earned is 100% exempt from Indian Income Tax under Section 10(4)). | **Taxable:** Subject to **TDS (Tax Deducted at Source)** at 30% plus surcharge/cess (or lower rate under DTAA). | **Completely Tax-Free** (Interest earned is 100% exempt from Indian Income Tax). |
| **Permitted Tenor Range** | Term deposits: Minimum **1 Year** up to Maximum **10 Years**. | Standard bank term deposit tenors (7 days up to 10 years). | **Minimum 1 Year up to Maximum 5 Years**. |
| **Joint Account Holding** | Permitted jointly with other NRIs, or with resident Indian relative on **'Former or Survivor' basis**. | Permitted jointly with other NRIs or resident Indian relatives. | Permitted with other NRIs, or with resident relative on **'Former or Survivor' basis**. |

---

### 3. FEMA 1999 vs. FERA 1973

• **Legislative Shift:** The Foreign Exchange Management Act (FEMA), 1999 replaced the draconian Foreign Exchange Regulation Act (FERA), 1973 with effect from **1 June 2000**.  
• **Decriminalization:** Violations under FERA were treated as **criminal offenses** with imprisonment. Violations under FEMA are treated as **civil infractions** remediable by monetary penalties, with compounding provisions administered by the RBI and the Directorate of Enforcement (ED).

---

## § 23.2 Unit 36: Derivatives Market

> **Curriculum Alignment — Official IIBF Paper 1 Benchmark (Unit 36)**  
> **Core Proposition:** Derivatives derive value from underlying assets. Market structures span OTC contracts (Forwards, Swaps, CDS) and exchange-traded standardized contracts (Futures, Options). Risk exposures are quantified via Option Greeks and governed by ISDA documentation.

### 1. Forwards vs. Futures Contracts

| Dimension | Forward Contracts | Futures Contracts |
| :--- | :--- | :--- |
| **Trading Venue** | Over-the-Counter (OTC) private bilateral market | Organized national exchanges (NSE, BSE, MCX) |
| **Contract Specifications** | **Customized** (Non-standardized amounts and settlement dates) | **Standardized** (Fixed contract size, expiration cycle) |
| **Counterparty Credit Risk** | High counterparty default risk (Bilateral settlement) | **Near zero**; guaranteed by exchange Clearing Corporation |
| **Settlement Mechanism** | Typically settled on maturity by physical delivery | Settled daily via **Mark-to-Market (MTM) Margin calls** |

---

### 2. Options Architecture & Option Greeks

An **Option** confers the right, but not the obligation, to buy (**Call Option**) or sell (**Put Option**) an underlying asset at a specified Strike Price ($K$) on or before expiration.

| Option Greek | Mathematical Partial Derivative | Financial Meaning & Interpretation |
| :--- | :--- | :--- |
| **Delta ($\Delta$)** | $$\Delta = \frac{\partial V}{\partial S}$$ | Measures the sensitivity of the option price ($V$) to a ₹1 change in the underlying asset price ($S$). Call Delta ranges between **0 and +1**; Put Delta ranges between **-1 and 0**. |
| **Gamma ($\Gamma$)** | $$\Gamma = \frac{\partial^2 V}{\partial S^2} = \frac{\partial \Delta}{\partial S}$$ | Measures the rate of change of Delta for a change in underlying price. Quantifies the curvature of the option price profile. |
| **Theta ($\Theta$)** | $$\Theta = \frac{\partial V}{\partial t}$$ | Measures **Time Decay**—the rate at which an option loses value as expiration approaches. Almost always negative for long option holders. |
| **Vega ($\nu$)** | $$\nu = \frac{\partial V}{\partial \sigma}$$ | Measures the sensitivity of the option price to a 1% change in the **implied volatility** ($\sigma$) of the underlying asset. |
| **Rho ($\rho$)** | $$\rho = \frac{\partial V}{\partial r}$$ | Measures the sensitivity of the option price to a change in the risk-free interest rate ($r$). |

---

### 3. Credit Default Swaps (CDS)

• **Mechanism:** A bilateral OTC contract where the **Protection Buyer** pays periodic premium fees to the **Protection Seller**. In return, if a defined **Credit Event** (Bankruptcy, Failure to Pay, Obligation Default, Debt Restructuring) occurs regarding the debt issuer (**Reference Entity**), the protection seller pays compensation (cash or physical delivery of defaulted bonds) to make the buyer whole.  
• **Documentation:** Transacted under the standardized **International Swaps and Derivatives Association (ISDA) Master Agreement**.  
• **RBI CDS Directions:** Commercial banks can act as Protection Buyers to hedge their credit exposures on corporate bonds. Capital adequacy charges must be maintained by protection sellers.

---

### Examiner Trap Vault: Unit 33 & Unit 36 High-Yield Distractors

1. **Trap — NRE vs NRO Tax Treatment:** Interest earned on **NRE accounts is 100% EXEMPT from Indian income tax**, whereas interest on **NRO accounts is TAXABLE (subject to 30% TDS)**.
2. **Trap — FCNR(B) Foreign Exchange Risk:** The depositor bears **ZERO exchange risk** in an FCNR(B) account because deposits and withdrawals are denominated in foreign currency; the commercial bank bears the currency risk.
3. **Trap — FCNR(B) Account Types:** FCNR(B) accounts can ONLY be opened as **Term / Fixed Deposits** (Minimum 1 year to Maximum 5 years). An option stating savings accounts are permitted in FCNR(B) is **false**.
4. **Trap — Spot Settlement Day:** Foreign exchange Spot transactions settle on the **second working business day ($T+2$)**, not next day ($T+1$).
5. **Trap — Option Delta Boundaries:** Call option Delta is bounded strictly between **0 and +1**; Put option Delta is bounded between **-1 and 0**. Delta of a deep in-the-money call approaches +1.

---

### Unit 33 & Unit 36 Practice Questions (IIBF DB&F Pattern)

**Q1. An NRI wishes to deposit overseas savings into an Indian commercial bank, earn tax-free interest in foreign currency without facing any currency exchange risk, and have 100% repatriation rights. Which account must they open?**  
A. Non-Resident Ordinary (NRO) Account  
B. Non-Resident External (NRE) Savings Account  
C. Foreign Currency Non-Resident Bank [FCNR(B)] Account  
D. Resident Foreign Currency (RFC) Account  

**Q2. Under the Foreign Exchange Management Act (FEMA), 1999, how are statutory violations classified in contrast to the earlier FERA, 1973?**  
A. Criminal offenses punishable with mandatory imprisonment without bail  
B. Non-compoundable economic offenses tried exclusively in Special Military Courts  
C. Civil contraventions remediable through monetary compounding and adjudication penalties  
D. Sovereign treason subject to immediate cancellation of passport  

**Q3. In financial derivatives risk management, which Option Greek measures the sensitivity of an option's price to the passage of time (time decay)?**  
A. Delta  
B. Gamma  
C. Theta  
D. Vega  

**Q4. Consider the following statements regarding Non-Resident Indian deposit accounts:**  
Statement I: Interest income earned on an NRE fixed deposit account is 100% exempt from Indian Income Tax under Section 10(4) of the Income Tax Act.  
Statement II: Capital funds held in an NRO account can be repatriated overseas up to a statutory ceiling of $1 Million USD per financial year.  
Which of the statements given above is/are correct?  
A. Statement I only  
B. Statement II only  
C. Both Statement I and Statement II  
D. Neither Statement I nor Statement II  

---

### Answer Key & Explanations

• **Q1 — Answer: C.** FCNR(B) deposits are maintained in foreign currencies (USD, GBP, etc.), earn tax-free interest, are 100% repatriable, and shield the depositor from rupee depreciation risk.  
• **Q2 — Answer: C.** FEMA transformed foreign exchange violations from criminal offenses under FERA into civil infractions remediable by monetary penalties.  
• **Q3 — Answer: C.** Theta ($\Theta$) measures the time decay of an option contract.  
• **Q4 — Answer: C.** Both statements are correct under RBI/FEMA regulations.
