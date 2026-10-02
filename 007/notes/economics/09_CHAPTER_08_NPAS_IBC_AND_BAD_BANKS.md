<div style="page-break-before: always;"></div>

# CHAPTER 08: NON-PERFORMING ASSETS (NPAS), INSOLVENCY & BANKRUPTCY CODE (IBC) & BAD BANKS

**Canonical Sources Unified**:
* Vivek Singh, *Indian Economy* (7th Ed., Ch. 3, §§3.6–3.10)
* Ramesh Singh, *Indian Economy* (McGraw Hill, Ch. 12: NPA Resolution, SARFAESI & IBC)
* Sanjeev Verma, *The Indian Economy* (Ch. 4: Banking Stressed Assets)
* Reserve Bank of India: *Master Circular - Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC Norms)*
* Insolvency and Bankruptcy Code, 2016 (Sections 7, 9, 12, 29A, 53) & SARFAESI Act, 2002

---

## 8.1 The Lifecycle of Stressed Assets & The 90-Day Rule

A bank's primary assets are loans extended to borrowers. When borrowers service their interest and principal on schedule, the loan is a **Standard Performing Asset**. When debt servicing stops, it passes through a progressive degradation pipeline:

```
[Normal Loan] ──> Overdue 1–30 Days  ──> [SMA-0]
                        │
                        ▼
                  Overdue 31–60 Days ──> [SMA-1]
                        │
                        ▼
                  Overdue 61–90 Days ──> [SMA-2]  ★★★ CRITICAL EARLY WARNING ZONE ★★★
                        │
                        ▼ (Day 91: Crosses the Default Rubicon)
          ┌─────────────┴─────────────┐
          ▼                           ▼
[NON-PERFORMING ASSET (NPA)] ──> [Sub-Standard Asset] (NPA $\le$ 12 Months)
                                      │
                                      ▼
                                 [Doubtful Asset]     (Sub-Standard > 12 Months)
                                      │
                                      ▼
                                 [Loss Asset]         (Uncollectible / 100% Write-off)
```

---

### The Fundamental Statutory Definitions of an NPA:

An asset becomes a **Non-Performing Asset (NPA)** when it ceases to generate income for the bank:

```
┌─────────────────────────────────┬─────────────────────────────────────────────────────────────┐
│ Loan Category                   │ Precise Condition Triggering NPA Status                     │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 1. Term Loans (Commercial /     │ Interest and/or instalment of principal remains overdue for │
│    Retail Personal / Auto / Home│ a period of **more than 90 days**.                          │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 2. Cash Credit (CC) / Overdraft │ Account remains **"Out of Order" for more than 90 days**    │
│    (Working Capital Facilities) │ (outstanding balance exceeds sanctioned limit or no credits)│
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 3. Agricultural Loans           │ Aligned with crop cycles rather than the 90-day rule:      │
│    (Crop Production Credit)     │ • Short-Duration Crops (Kharif/Rabi: paddy, wheat): Overdue │
│                                 │   for **TWO crop seasons**.                                 │
│                                 │ • Long-Duration Crops (Crops > 1 yr: sugarcane, tea):       │
│                                 │   Overdue for **ONE crop season**.                          │
└─────────────────────────────────┴─────────────────────────────────────────────────────────────┘
```

---

### Special Mention Accounts (SMA) Framework
Instituted by the RBI in 2014 to prevent banks from hiding stress until Day 91:
* **SMA-0**: Principal or interest payment overdue between **1 and 30 days**.
* **SMA-1**: Principal or interest payment overdue between **31 and 60 days**.
* **SMA-2**: Principal or interest payment overdue between **61 and 90 days**.
* **Significance**: SMA-2 classification triggers the immediate convening of a joint lenders' committee to formulate a resolution plan before the loan deteriorates into an official NPA.

---

### The Three Progressive NPA Sub-Categories:

1. **Sub-Standard Asset**:
   * An asset that has remained an NPA for a period **less than or equal to 12 months**.
   * The bank faces well-defined credit weaknesses, but recovery of the principal is still plausible.
2. **Doubtful Asset**:
   * An asset that has remained in the sub-standard category for **more than 12 months**.
   * Split into three temporal sub-tiers:
     * **Doubtful 1 ($D_1$)**: Doubtful up to 1 year.
     * **Doubtful 2 ($D_2$)**: Doubtful between 1 and 3 years.
     * **Doubtful 3 ($D_3$)**: Doubtful for more than 3 years.
3. **Loss Asset**:
   * An asset where loss has been identified by the bank, internal/external auditors, or during an RBI inspection, but the amount has not been written off wholly. It is considered virtually uncollectible.

---

## 8.2 Provisioning Norms & Gross vs. Net NPA

Commercial banks cannot treat interest on NPAs as earned revenue (the **Income Recognition** rule). Furthermore, banks must set aside cash capital from their operating profits—known as **Provisioning**—to cushion against anticipated loan write-offs.

### Mandatory RBI Provisioning Percentages:

```
┌─────────────────────────────────┬─────────────────────────────────────────────────────────────┐
│ Asset Classification            │ Statutory Provisioning Requirement                          │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ Standard Asset                  │ • Agriculture & SME: **0.25%**                              │
│                                 │ • Residential Housing: **0.75%**                            │
│                                 │ • Commercial Real Estate (CRE): **1.00%**                   │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ Sub-Standard Asset              │ • Secured Portion: **15.0%**                                │
│                                 │ • Unsecured Portion: **25.0%**                              │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ Doubtful Asset 1 ($D_1$)        │ • Secured Portion: **25.0%**  |  Unsecured Portion: **100%**│
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ Doubtful Asset 2 ($D_2$)        │ • Secured Portion: **40.0%**  |  Unsecured Portion: **100%**│
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ Doubtful Asset 3 ($D_3$)        │ • **100.0% Provisioning** (Secured and Unsecured).          │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ Loss Asset                      │ • **100.0% Provisioning** (Entire book value written down). │
└─────────────────────────────────┴─────────────────────────────────────────────────────────────┘
```

---

### Gross NPA vs. Net NPA & Provisioning Coverage Ratio (PCR)

$$\mathbf{\text{Gross NPA (GNPA)}} = \text{Total book value of all non-performing loans on the bank's balance sheet}$$

$$\mathbf{\text{Net NPA (NNPA)}} = \text{Gross NPA} - \text{Cumulative Provisions} - \text{ECGC/DICGC claims}$$

* **Gross NPA Ratio**: $\frac{\text{Gross NPAs}}{\text{Total Gross Advances}} \times 100$. (Reflects historical underwriting quality).
* **Net NPA Ratio**: $\frac{\text{Net NPAs}}{\text{Total Net Advances}} \times 100$. (Reflects the actual un-cushioned financial risk threatening the bank).

### Provisioning Coverage Ratio (PCR):
$$\mathbf{\text{PCR}} = \frac{\text{Total Cumulative Provisions Held}}{\text{Total Gross NPAs}} \times 100$$
* A healthy bank maintains a **$\text{PCR} \ge 70.0\%$**. A high PCR indicates that even if all bad loans are written off to zero, the bank will not suffer fresh capital erosion because the losses have already been absorbed from past profits.

---

## 8.3 The Historical Evolution of Bad Loan Resolution (Pre-IBC)

Before 2016, India's debt recovery regime was heavily biased in favor of the debtor, resulting in rampant "promoter impunity" and the **Twin Balance Sheet Problem**:

```
┌─────────────────────────────────┬─────────────────────────────────────────────────────────────┐
│ Historical Framework            │ Mechanism & Fatal Structural Flaw                           │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 1. Debt Recovery Tribunals (DRT)│ Established under RDDBFI Act, 1993 for claims $\ge$ ₹20 L.   │
│                                 │ *Flaw*: Paralyzed by civil litigation; cases dragged for    │
│                                 │ 5 to 10 years without enforcement.                          │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 2. SARFAESI Act, 2002           │ Major statutory breakthrough: Empowers secured creditors to │
│                                 │ take possession of mortgaged collateral, change management, │
│                                 │ and auction assets **WITHOUT INTERVENTION OF A COURT**.     │
│                                 │ *Statutory Exemption*: **Agricultural land is strictly      │
│                                 │ EXEMPT** from attachment/seizure under SARFAESI!            │
├─────────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 3. Restructuring Schemes        │ CDR, SDR, S4A, 5/25 Scheme: Permitted banks to stretch loan │
│    (CDR, SDR, S4A)              │ tenures and convert debt to equity.                         │
│                                 │ *Flaw*: Led to chronic **"Evergreening"** (giving borrowers │
│                                 │ fresh loans to service old interest, hiding true NPAs).     │
└─────────────────────────────────┴─────────────────────────────────────────────────────────────┘
```

> **The Asset Quality Review (AQR, 2015)**:
> In 2015, RBI Governor Dr. Raghuram Rajan ended the regulatory forbearance and evergreening practices by launching the forensic **Asset Quality Review (AQR)**. Banks were forced to reclassify restructured loans as real NPAs, causing India's banking Gross NPA ratio to jump from $4.3\%$ in 2014 to a peak of **$11.5\%$ in March 2018**, exposing the overleveraged corporate-banking nexus.

---

## 8.4 The Insolvency & Bankruptcy Code (IBC, 2016)

Enacted in May 2016 based on the **Bankruptcy Law Reforms Committee (BLRC - T.K. Viswanathan Committee)**, the IBC revolutionized Indian corporate law by triggering a fundamental paradigm shift:

$$\mathbf{\text{From "Debtor-in-Possession" (Promoter stays in power while firm dies)} \longrightarrow \text{"Creditor-in-Control" (Promoter ousted immediately)}} $$

```
                                  THE 4-PILLAR IBC ECOSYSTEM
                                               │
         ┌─────────────────────────────────────┼─────────────────────────────────────┐
         ▼                                     ▼                                     ▼
┌──────────────────┐                 ┌──────────────────┐                  ┌──────────────────┐
│   REGULATOR      │                 │  ADJUDICATING    │                  │   OPERATIONAL    │
│     (IBBI)       │                 │   AUTHORITIES    │                  │  INFRASTRUCTURE  │
└────────┬─────────┘                 └────────┬─────────┘                  └────────┬─────────┘
         │                                    │                                     │
         ▼                                    ▼                                     ▼
Insolvency & Bankruptcy             ┌────────────────────┐                ┌────────────────────┐
Board of India                      │NCLT (Corporates/LLP│                │Insolvency Profess- │
• Formulates regulations            │Appellate: NCLAT ──>│                │ionals (IPs) & IPAs │
• Oversees IPs & IUs                │Supreme Court       │                ├────────────────────┤
                                    ├────────────────────┤                │Information Util-   │
                                    │DRT (Individuals/   │                │ities (IUs: NeSL)   │
                                    │Partnerships)       │                │• Verified debt data│
                                    │Appellate: DRAT     │                └────────────────────┘
                                    └────────────────────┘
```

---

### The Corporate Insolvency Resolution Process (CIRP): Step-by-Step

#### 1. The Threshold & Initiation
* **Default Threshold**: Raised from ₹1 Lakh to **₹1 Crore** (March 2020) to shield MSMEs from frivolous liquidation.
* **Who Can Initiate CIRP**:
  1. **Financial Creditors (Section 7)**: Banks, bondholders, financial institutions.
  2. **Operational Creditors (Section 9)**: Suppliers of goods, vendors, employees, statutory tax authorities (must serve a mandatory 10-day demand notice).
  3. **Corporate Debtor (Section 10)**: The defaulting company itself.

#### 2. The Moratorium & Resolution Professional (Section 14)
* The moment NCLT admits the insolvency application, an automatic **Moratorium** is declared: all debt recovery suits, legal executions, and asset alienations against the company are legally frozen.
* The Board of Directors is suspended, and control is handed over to an independent **Interim Resolution Professional (IRP)**. The promoter is completely ousted from management.

#### 3. Committee of Creditors (CoC) & Decision Thresholds
* The CoC consists **exclusively of Financial Creditors**. (Operational creditors may attend meetings if their aggregate debt exceeds $10\%$, but have **no voting rights**).
* **Voting Threshold**: A Resolution Plan must be approved by a **minimum 66% majority vote of the CoC**.

#### 4. The Statutory Time Limit (The 330-Day Outer Cap)
* Originally, CIRP was mandated to complete within 180 days (+90 day extension = 270 days).
* In 2019, Parliament amended Section 12 to mandate that the entire resolution process—**including all legal litigation in tribunals and courts—must strictly conclude within 330 days**.
* **Automatic Liquidation**: If no resolution plan is approved by the CoC within the statutory 330-day window, the NCLT orders the company into **mandatory liquidation**.

#### 5. Section 29A: Barring Wilful Defaulters & Promoters
* Added via amendment to prevent a perverse moral hazard: Defaulting promoters intentionally bankrupting their company, shedding 70% of the bank debt via haircuts, and buying back their own company for pennies on the dollar!
* **Section 29A explicitly debars**: Wilful defaulters, disqualified directors, promoters of companies that have been NPAs for over 1 year, and their connected persons from submitting a resolution plan.

---

### The "Waterfall Mechanism" in Liquidation (Section 53)

When a company is liquidated, assets are sold, and proceeds are distributed in a strict statutory hierarchy of priority:

```
[RANK 1] ──> Insolvency resolution process costs & liquidation expenses (Paid first in full)
                 │
                 ▼
[RANK 2] ──> Workmen's dues (past 24 months) & Secured Creditors (relinquishing security)
                 │
                 ▼
[RANK 3] ──> Wages and unpaid dues owed to other employees (past 12 months)
                 │
                 ▼
[RANK 4] ──> Unsecured Financial Creditors
                 │
                 ▼
[RANK 5] ──> Central and State Government dues & Remaining secured creditors
                 │
                 ▼
[RANK 6] ──> Operational Creditors & Other remaining debts
                 │
                 ▼
[RANK 7] ──> Preference Shareholders
                 │
                 ▼
[RANK 8] ──> Equity Shareholders (Paid last; absorb maximum residual risk)
```

---

## 8.5 The "Bad Bank" Architecture: NARCL & IDRCL

Announced in the Union Budget 2021–22, India established a specialized two-tier **National Asset Reconstruction Company** structure to clean up legacy wholesale NPAs (>₹500 Crore each) from bank balance sheets:

```
                            THE "BAD BANK" STRUCTURE
                                       │
         ┌─────────────────────────────┴─────────────────────────────┐
         ▼                                                           ▼
[NARCL - "THE ASSET AGGREGATOR"]                             [IDRCL - "THE TURNAROUND ENGINE"]
• National Asset Reconstruction Co. Ltd.                     • India Debt Resolution Co. Ltd.
• Ownership: **Majority 51% Public Sector Banks**            • Ownership: **Majority 51% Private Sector Banks**
• Function: Acquires stressed loans from banks               • Function: Manages, revives, and sells the
  under 15% Cash + 85% Security Receipts (SRs).                assets via professional turnaround experts.
```

### The Sovereign Backstop Guarantee:
* The Government of India provided a sovereign backstop guarantee of up to **₹30,600 Crore** backing the **Security Receipts (SRs)** issued by NARCL.
* **How the Guarantee Operates**:
  * NARCL acquires a ₹1,000 Crore stressed asset at an agreed valuation of ₹300 Crore.
  * NARCL pays the bank ₹45 Crore in cash ($15\%$) and issues Security Receipts worth ₹255 Crore ($85\%$).
  * If NARCL subsequently recovers only ₹200 Crore over its 5-year resolution period, the **Government of India guarantee covers the ₹55 Crore shortfall**, guaranteeing zero risk for the lending bank.

---

## 8.6 Multi-Examination Analytical Lenses

### 1. UPSC Civil Services & APFC Lens
* Evaluates the **Haircut Dilemma**: Banks taking haircuts of 60% to 80% on large corporate resolutions under IBC (e.g., Bhushan Steel, Essar Steel, DHFL). Is an 80% haircut an institutional failure, or an economic realization of past bad lending that frees up capital?
* Explores the friction between **Financial Creditors and Operational Creditors** in the Essar Steel Supreme Court ruling (which reaffirmed the commercial supremacy of the CoC).
* Analyzes the macroeconomic impact of resolving the **Twin Balance Sheet Problem** into the current **Twin Balance Sheet Advantage** (corporate debt at decade lows, bank balance sheets cleaned up with gross NPAs down to ~2.8%).

### 2. RPSC RAS & State PCS Lens
* **2-Marker Prompts**:
  * *What is an NPA?* (Loan where interest or principal is overdue for >90 days).
  * *Define Provisioning Coverage Ratio (PCR).* ($\frac{\text{Provisions}}{\text{Gross NPAs}} \times 100$).
  * *What is the role of Section 29A in IBC?* (Bars defaulting promoters and wilful defaulters from bidding for insolvent companies).
* **5-Marker Prompts**:
  * *Differentiate between Gross NPA and Net NPA.*
  * *Explain the 4-tier Special Mention Accounts (SMA) classification.*
  * *Describe the dual structure of NARCL and IDRCL.*
* **10-Marker Prompts**:
  * *Critically examine the working of the Insolvency and Bankruptcy Code (IBC) since 2016. Discuss how it transformed the credit culture in India from debtor-in-possession to creditor-in-control.*

### 3. Banking & RBI Grade B Lens
* Memorize exact provisioning percentages: **Standard CRE (1.0%)**, **Substandard Secured (15%)**, **Doubtful $D_1$ Secured (25%)**, **Doubtful $D_2$ Secured (40%)**, **Doubtful $D_3$ (100%)**.
* Precise knowledge of CIRP statutory timelines: **180 days + 90 days extension $\implies$ 330 days outer mandatory limit**.

---

## 8.7 Examiner Traps & Warning Vault

> [!WARNING]
> **TRAP 1: The 90-Day Agricultural Loan Trap**
> *Exam Trap*: "A crop loan given to a wheat farmer becomes an NPA if the instalment is overdue for more than 90 days."
> *Correction*: **ABSOLUTELY FALSE.** Agricultural loans do NOT follow the 90-day calendar rule! They follow **crop harvest cycles**: **Two crop seasons** for short-duration crops (paddy, wheat, mustard) and **One crop season** for long-duration crops (sugarcane).

> [!WARNING]
> **TRAP 2: Voting Rights of Operational Creditors in IBC**
> *Exam Trap*: "Operational creditors (suppliers and vendors) holding 25% of debt have equal voting rights in the Committee of Creditors (CoC)."
> *Correction*: **FALSE.** The CoC consists **exclusively of Financial Creditors**. Operational creditors have **ZERO voting rights** in the CoC. They may attend meetings only as observers if their debt is $\ge 10\%$, but cannot vote on resolution plans.

> [!WARNING]
> **TRAP 3: Agricultural Land Attachment under SARFAESI**
> *Exam Trap*: "A commercial bank can attach and auction a farmer's agricultural land under the SARFAESI Act, 2002 without court intervention."
> *Correction*: **FALSE.** Section 31(i) of the SARFAESI Act explicitly **EXEMPTS agricultural land** from the provisions of the Act. Banks cannot attach or auction agricultural land under SARFAESI; they must go through protracted civil court / state revenue court processes.

---

## 8.8 The 60-Second Memory Skeleton (Rapid Recall)

* **NPA Definition**: Overdue $>90$ days for term loans / out-of-order for CC/OD. Agricultural: 2 crop seasons (short) / 1 season (long).
* **Early Warning (SMA)**:
  * SMA-0: 1 to 30 days overdue.
  * SMA-1: 31 to 60 days overdue.
  * SMA-2: 61 to 90 days overdue.
* **NPA Tiers**: Sub-standard ($\le 12$ mos), Doubtful ($>12$ mos: $D_1$ 1 yr, $D_2$ 1–3 yrs, $D_3$ >3 yrs), Loss (uncollectible).
* **Net NPA**: $\text{Gross NPA} - \text{Provisions}$. $\text{PCR} = \frac{\text{Provisions}}{\text{Gross NPA}} \ge 70\%$.
* **SARFAESI (2002)**: Seize & auction collateral without courts; **Agricultural land is strictly EXEMPT**.
* **IBC (2016)**:
  * Paradigm: Debtor-in-possession $\rightarrow$ **Creditor-in-control**.
  * Ecosystem: IBBI (Regulator), NCLT (Companies/LLPs), DRT (Individuals), NeSL (Information Utility).
  * Threshold: **₹1 Crore**. CoC = Financial Creditors only (Vote = **66%**).
  * Time Limit: 180 + 90 days $\implies$ **330 days outer cap** (else liquidation).
  * Section 29A: Defaults promoters barred.
  * Waterfall (§53): Resolution costs $\rightarrow$ Workers (24 mos) & Secured $\rightarrow$ Wages (12 mos) $\rightarrow$ Unsecured $\rightarrow$ Taxes $\rightarrow$ Equity (last).
* **Bad Bank (2021)**: **NARCL** (51% PSBs, acquires loans via 15% Cash + 85% SRs) + **IDRCL** (51% Private, manages turnaround). Backed by **₹30,600 Cr Govt guarantee**.

---

## 8.9 Active Recall Diagnostic Cards

#### Card 1 (Statutory NPA Determination in Agriculture)
**Question**: In January 2025, Bank Omega disburses a short-term crop loan of ₹3,00,000 to a farmer in Punjab for growing wheat (Rabi crop, 4-month season), with principal and interest due upon harvest in May 2025. The farmer fails to repay on 31st May 2025. Exactly on what date will this loan officially turn into a Non-Performing Asset (NPA) under RBI prudential norms?
<details>
<summary>View Rigorous Causal Answer</summary>
The loan will turn into an NPA upon the completion of **TWO CROP SEASONS** following the due date, NOT after 90 days.<br/>
- <em>Due Date</em>: 31st May 2025 (at the end of the 2024–25 Rabi harvest).
- <em>First Crop Season Overdue</em>: The subsequent Kharif season (June 2025 to October/November 2025).
- <em>Second Crop Season Overdue</em>: The following Rabi season (November 2025 to April/May 2026).<br/>
<strong>Conclusion</strong>: The loan will become an official NPA only at the end of the **second consecutive crop season (May 2026)**, roughly **12 months after the initial missed due date**, because the loan is for a short-duration crop. Applying the standard 90-day rule to agricultural crop loans is a major regulatory and examination error.
</details>

#### Card 2 (Insolvency Voting & Promoter Exclusion)
**Question**: Company Delta defaults on a ₹200 Crore bank loan and enters CIRP under the IBC. The defaulting original promoter offers a resolution plan proposing a 40% haircut to reclaim the company. The Committee of Creditors consists of State Bank of India (holding 60% of the financial debt) and a syndicate of private lenders holding 40%. Can the CoC legally accept the promoter's resolution plan if SBI votes in favor?
<details>
<summary>View Rigorous Causal Answer</summary>
<strong>NO, the CoC CANNOT legally accept the promoter's plan, regardless of the vote.</strong><br/>
1. <em>Statutory Bar Under Section 29A</em>: Under Section 29A of the Insolvency and Bankruptcy Code, 2016, defaulting promoters whose accounts have remained classified as NPAs for more than one year are <strong>strictly debarred and legally disqualified from submitting a resolution plan</strong>. The resolution professional cannot even place the promoter's bid before the CoC.<br/>
2. <em>Voting Threshold Failure</em>: Even hypothetically if the promoter were an eligible bidder, SBI holds 60% of the voting share. Under Section 30(4), approving a resolution plan requires a <strong>mandatory minimum 66% majority vote of the CoC</strong>. SBI’s 60% vote alone falls short of the statutory 66% threshold, meaning the plan would fail even on voting arithmetic.
</details>

#### Card 3 (The Bad Bank Recovery Mechanism)
**Question**: Punjab National Bank transfers a legacy stressed asset of face value ₹1,000 Crore to the National Asset Reconstruction Company Limited (NARCL) at an agreed valuation of ₹250 Crore. Describe the exact payment instrument structure PNB receives immediately, and explain how the Central Government's sovereign guarantee protects PNB if NARCL recovers only ₹180 Crore after 5 years.
<details>
<summary>View Rigorous Causal Answer</summary>
1. <strong>Initial Payment Structure to PNB</strong>:
   - NARCL acquires the asset at the agreed resolution value of ₹250 Crore using a mandatory **15:85 formula**:
     * <em>15% Upfront Cash</em>: PNB receives $15\% \times ₹250 \text{ Crore} = \mathbf{₹37.5 \text{ Crore}}$ immediately in liquid cash.
     * <em>85% Security Receipts (SRs)</em>: PNB receives tradeable Security Receipts worth $85\% \times ₹250 \text{ Crore} = \mathbf{₹212.5 \text{ Crore}}$ redeemable upon asset recovery within 5 years.<br/>
2. <strong>Operation of the Government Guarantee</strong>:
   - Over the 5-year resolution window, IDRCL manages and liquidates the asset, recovering a total of only **₹180 Crore**.
   - Out of the ₹180 Crore recovered, PNB already received ₹37.5 Crore in upfront cash, leaving ₹142.5 Crore to redeem against the ₹212.5 Crore of Security Receipts.
   - This leaves a <strong>net recovery shortfall of ₹70 Crore</strong> ($₹212.5 \text{ Cr} - ₹142.5 \text{ Cr}$).
   - Under the Central Government’s **₹30,600 Crore sovereign backstop guarantee**, the Ministry of Finance pays the ₹70 Crore shortfall directly to PNB. The bank suffers zero loss beyond the initial agreed haircut.
</details>
