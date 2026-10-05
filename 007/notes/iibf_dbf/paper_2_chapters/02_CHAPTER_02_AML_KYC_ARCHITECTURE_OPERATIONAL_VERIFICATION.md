# AML-KYC ARCHITECTURE & 2025 OPERATIONAL AMENDMENTS

Anti-Money Laundering (AML), Combating Financing of Terrorism (CFT), and Know Your Customer (KYC) norms constitute the statutory defense perimeter of modern banking. Anchored in the Prevention of Money Laundering Act 2002 (PMLA) and the RBI Master Direction on KYC, the framework mandates rigorous customer due diligence, continuous monitoring, and international regulatory reporting.

---

## § 2.1 Unit 02: AML-KYC Regulatory Framework

> **Curriculum Alignment — Official IIBF Paper 2 Benchmark (Unit 02)**  
> **Core Proposition:** Money laundering involves three sequential stages: Placement (introducing illicit funds into financial system), Layering (complex transactions to obscure audit trail), and Integration (reintroducing laundered money as legitimate wealth). Under PMLA 2002, reporting entities must verify identity, maintain records for 5 years, and report to FIU-IND.

### 1. Statutory Obligations Under PMLA, 2002 & Enforcement

| Statutory Entity / Instrument | Legal Mandate & Role | Examination Threshold / Parameter |
| :--- | :--- | :--- |
| **Financial Intelligence Unit (FIU-IND)** | Central national agency receiving, processing, and disseminating financial intelligence. | Reports must be submitted strictly in electronic format via FINnet portal. |
| **Cash Transaction Report (CTR)** | Mandatory monthly reporting of all cash transactions. | Value **> ₹10 Lakh** (or foreign equivalent) whether single or integrally connected in a calendar month. Due by **15th of succeeding month**. |
| **Suspicious Transaction Report (STR)** | Mandatory reporting of transactions suspected to involve proceeds of crime or terror funding. | To be filed within **7 working days** of arriving at suspicion at Principal Officer level. |
| **Counterfeit Currency Report (CCR)** | Reporting of forged banknotes detected at counters or currency chests. | Cash transactions with counterfeit notes; to be filed by **15th of succeeding month**. |
| **Cross-Border Wire Transfer (CBWT)** | Cross-border fund transfers into or out of India. | Transactions **> ₹5 Lakh** or foreign equivalent; monthly by 15th. |
| **Record Preservation Period** | Mandated retention of customer identification and transaction records. | **5 years** from date of cessation of transactions / account closure. |

### 2. FATF, Correspondent Banking & FATCA / CRS

• **FATF Jurisdictions:** Financial Action Task Force maintains high-risk jurisdictions:
  - **Black List (Call for Action):** High-risk jurisdictions with severe deficiencies; mandatory enhanced due diligence (EDD) and countermeasures.
  - **Grey List (Increased Monitoring):** Jurisdictions actively working with FATF to address deficiencies.
• **Correspondent Banking Safeguards:** Banks must gather sufficient information on respondent institutions, confirm AML/CFT controls, and strictly ensure that respondent banks **do not permit their accounts to be used by Shell Banks** (banks with no physical presence in any country).
• **FATCA / CRS Compliance:**
  - **FATCA (Foreign Account Tax Compliance Act):** Inter-governmental agreement with US IRS to identify and report US Persons (Green Card holders, US citizens, US tax residents).
  - **CRS (Common Reporting Standard):** OECD multilateral framework with 100+ countries for annual exchange of financial account information. Non-compliant accounts are subject to mandatory account blocking.

---

## § 2.2 Unit 03: Operational Aspects of KYC & 2025 Amendments

### 1. Risk-Based Categorization & Periodic Updation (Re-KYC)

Banks must adopt a **Risk-Based Approach (RBA)** to customer due diligence, categorizing customers into Low, Medium, and High risk based on parameters such as identity, social/financial status, nature of business, and geographical location.

| Risk Tier | Illustrative Higher-Risk Categories & Risk Indicators | Baseline Re-KYC Cadence |
| :--- | :--- | :--- |
| **High Risk** | Illustrative factors requiring Enhanced Due Diligence (EDD): Politically Exposed Persons (PEPs) of foreign origin, non-residents, trusts/charities with cross-border flows, high net-worth individuals with unexplained turnover, companies with complex shell shareholding structures. | **Every 2 Years** (Full KYC / fresh OVD documentation) |
| **Medium Risk** | Customers who do not fall into high risk but whose transaction profile requires regular monitoring: small businesses, partnership firms, rental income earners, retail traders. | **Every 8 Years** (Updated OVD verification) |
| **Low Risk** | Salaried individuals with clear source of income, government pensioners, basic savings bank deposit account holders with low turnover. | **Every 10 Years** (Self-declaration permitted if no change) |

### 2. The 12 June 2025 RBI KYC Amendments: Overdue Updation Relief

> **P0 Audit Fix — Stop-Ship Regulatory Clearance (C-06 & R3-08)**  
> On **12 June 2025**, the RBI amended the Master Direction on KYC, introducing targeted operational relief for pending periodic updation:
> 1. **Zero Abrupt Freezing for Low-Risk Overdue Accounts:** For low-risk individual customers whose periodic KYC updation is overdue, banks **shall not abruptly freeze operations or stop transactions**. Instead, a proportionate risk monitoring protocol is maintained.
> 2. **Outer Operational Window up to June 30, 2026:** Banks are provided an outer implementation timeframe extending up to **30 June 2026** to clear backlogs of pending periodic updations for low-risk individuals.
> 3. **BC-Enabled Self-Declaration (Specific June 2025 Mandate):** Where there is no change in KYC information, the 12 June 2025 amendment explicitly empowers low-risk individual customers to submit their self-declaration through authorized **Business Correspondents (BCs)** (via biometric / mobile-enabled confirmation) without traveling to bank branches. (Separate general circulars permit digital submissions via net banking, mobile apps, or registered email).
> 4. **No OVD Requirement for Unchanged Particulars:** A simple self-declaration confirming no change in status/address is legally sufficient; banks cannot demand fresh physical OVDs.

### 3. Officially Valid Documents (OVDs) & CKYCR Architecture

• **The Six Statutory OVDs (Rule 2(1)(d), PML Rules):**
  1. Passport
  2. Driving Licence
  3. Proof of possession of Aadhaar number (with first 8 digits masked)
  4. Voter's Identity Card (Election Commission of India)
  5. Job Card issued by NREGA duly signed by an officer of the State Government
  6. Letter issued by the National Population Register (NPR) containing details of name and address.
• **Central KYC Records Registry (CKYCR):** Operated by CERSAI. Reporting entities must upload customer KYC records within **10 days of account opening**. Issues a unique **14-digit KYC Identifier (KIN)**.
• **CKYCR Retrieval Rule & Exceptions:** Once a customer has a KIN, other reporting entities can retrieve the KYC record from CKYCR without demanding fresh physical documents, **EXCEPT when:** (i) customer's particulars or address have changed, (ii) the retrieved record is incomplete or unclear, or (iii) the bank requires additional verification under its Enhanced Due Diligence (EDD) risk policy.

---

## § 2.3 High-Yield Examination Drill

**Q1. Under the RBI Master Directions on KYC as amended in 2025, what is the mandatory regulatory treatment for a Low-Risk individual savings customer whose periodic KYC updation (re-KYC) has become overdue?**  
A. The bank must freeze all debit and credit operations immediately upon expiry of 10 years  
B. The bank must not freeze the account abruptly; it maintains continuous monitoring and permits completion via self-declaration through digital/BC channels under the relaxed June 30, 2026 window  
C. The bank must report the customer as a Suspicious Transaction Report (STR) to FIU-IND within 7 days  
D. The account must be closed and funds compulsorily transferred to the DEA Fund  

**Q2. Under the Prevention of Money Laundering Act, 2002, by which date must a commercial bank file the Cash Transaction Report (CTR) for transactions exceeding ₹10 Lakh executed during the month of August?**  
A. By 7 September  
B. By 15 September  
C. By 30 September  
D. Within 48 hours of each individual cash transaction  

**Q3. Which of the following documents is NOT recognized as an Officially Valid Document (OVD) for customer identification under Rule 2(1)(d) of the PML Rules?**  
A. Driving Licence issued by State Licensing Authority  
B. PAN Card (Permanent Account Number issued by Income Tax Department)  
C. NREGA Job Card signed by an officer of the State Government  
D. Letter issued by the National Population Register (NPR)  

---

## § 2.4 Answer Key & Detailed Explanatory Rationale

• **Q1 — Answer: B.** Under the 12 June 2025 RBI KYC Amendments, banks are strictly prohibited from abruptly freezing low-risk overdue accounts. Banks can accept self-declarations via BCs/digital channels, with an outer window provided up to 30 June 2026 for backlog clearance.  
• **Q2 — Answer: B.** Under PMLA Rules, Cash Transaction Reports (CTR) and Counterfeit Currency Reports (CCR) must be filed with FIU-IND on or before the **15th day of the succeeding month**. August transactions must be reported by 15 September.  
• **Q3 — Answer: B.** PAN Card is officially an **identity proof for tax purposes**, but it is **NOT an Officially Valid Document (OVD)** under PML Rules because it does NOT contain the residential address of the cardholder. The 6 OVDs are Passport, Driving Licence, Aadhaar, Voter ID, NREGA Job Card, and NPR Letter.
