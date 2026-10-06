# CREDIT SCORING ARCHITECTURE (CIBIL / CICS 300–900 POINT SYSTEM)

> **Paper:** 4 (Retail Banking and Wealth Management)  
> **Standard:** Macmillan Courseware & IIBF 2026 Master Benchmark • Duplex A4 Monochrome Print Edition

Credit scoring represents the quantitative evaluation of retail borrower default risk, transforming historical repayment performance, debt leverage, and credit behavior into a single objective three-digit metric. In India, retail credit underwriting is governed by the **Credit Information Companies (Regulation) Act, 2005 (CICRA 2005)**, under which four licensed Credit Information Companies (CICs) collect monthly repayment records from credit institutions to compute scores ranging between 300 and 900.

---

## 1. Credit Information Companies (CICs) in India

Under CICRA 2005, four specialized credit rating bureaus operate under Reserve Bank of India licenses:

1. **TransUnion CIBIL:** The earliest and dominant credit bureau in India, established in 2000.
2. **Equifax Credit Information Services Private Limited:** Joint venture with global Equifax.
3. **Experian Credit Information Company of India Private Limited:** Operating extensive consumer scoring algorithms.
4. **CRIF High Mark Credit Information Services Private Limited:** Dominant bureau for microfinance (MFI) and rural borrower tracking.

### Mandatory Statutory Obligations under CICRA 2005:
- **Mandatory Monthly Reporting:** Every commercial bank, cooperative bank, NBFC, and HFC must submit monthly repayment and credit data for all borrowers to all four CICs.
- **Free Full Credit Report (FFCR):** Under RBI mandates, every individual citizen is entitled to receive **one Free Full Credit Report (FFCR)** once every calendar year from each of the four CICs upon request.
- **Confidentiality:** Credit data can be accessed only by authorized credit institutions for underwriting or by the individual borrower.

---

## 2. Credit Score Architecture: The 300–900 Point System

The standard bureau scoring model ranges from **300 to 900 points**, where higher scores indicate lower probability of default:

| Score Band | Qualitative Risk Category | Credit Approval Probability | Underwriting Terms & Pricing Spread |
| :--- | :--- | :--- | :--- |
| **750 to 900** | **Prime / Excellent** | **Very High ($\ge 90\%$)** | Preferred lowest interest rate spreads, zero processing fee waivers, pre-approved offers |
| **700 to 749** | **Good / Low Risk** | **High ($70\% - 85\%$)** | Standard interest rate spreads, routine underwriting approval |
| **650 to 699** | **Fair / Moderate Risk** | **Moderate ($40\% - 60\%$)** | Detailed scrutiny, lower LTV, higher borrower margins, moderate interest rate markups |
| **300 to 649** | **Poor / High Risk** | **Very Low ($< 20\%$)** | High likelihood of outright loan rejection; mandatory collateral or guarantor required |
| **-1 (NA / NH)** | **No History / Not Applicable** | **Requires Manual Appraisal** | First-time borrower with less than 6 months of credit history; underwritten using surrogate income proofs |

---

## 3. The 5 Core Score Components & Weighting Framework

A credit bureau score is computed using five proprietary weighting dimensions:

```text
[Past Repayment History: ~35%]   ───> DPD, 30/60/90 days defaults, write-offs
[Credit Utilization Ratio: ~30%] ───> Balance-to-limit ratio on credit cards (<30% ideal)
[Credit History Length: ~15%]    ───> Age of oldest active credit account
[Credit Product Mix: ~10%]       ───> Secured (home, auto) vs Unsecured (cards, personal)
[New Credit Inquiries: ~10%]     ───> Hard inquiries in recent 30-90 days
```

1. **Past Repayment History ($\approx 35\%$ Weightage):** The single most critical component. Evaluates Days Past Due (DPD) metrics across 36 months. Any entry showing 30, 60, or 90 DPD, or status tags like "Written Off" or "Settled" severely impairs the score.
2. **Credit Utilization Ratio - CUR ($\approx 30\%$ Weightage):**
   $$\text{CUR} = \frac{\text{Total Credit Card Balance Outstanding}}{\text{Total Aggregate Sanctioned Credit Card Limit}} \times 100$$
   - *Benchmark:* Ideal CUR is **$< 30\%$**. A utilization ratio exceeding $50\% - 70\%$ signals credit hunger and high leverage, depressing the score even if minimum payments are made on time.
3. **Credit History Length ($\approx 15\%$ Weightage):** Tracks the operational duration of the borrower's oldest active account. A longer history provides greater statistical reliability.
4. **Credit Product Mix ($\approx 10\%$ Weightage):** A healthy portfolio maintains a balanced mix of secured loans (housing, auto) and unsecured facilities (credit cards, personal loans). Relying entirely on unsecured loans depresses score trajectory.
5. **New Credit Applications & Hard Inquiries ($\approx 10\%$ Weightage):**
   - **Hard Inquiry:** Triggered when a bank reviews a borrower's credit report following a formal loan/card application. Multiple hard inquiries within a short period depress the score.
   - **Soft Inquiry:** When a borrower checks their own credit score or a bank runs a pre-approved promotional check. Soft inquiries have **zero impact** on the credit score.

---

## 4. Common Errors in Credit Reports & Dispute Resolution Mechanism

### Frequent Report Inaccuracies:
- **Identity Inaccuracies:** Wrong PAN, voter ID, or mixing files of individuals with similar names.
- **Reporting Delays:** Loans closed months ago still reflecting as active or overdue due to bank reporting lapses.
- **Incorrect DPD Tagging:** Bank misreporting an account as overdue despite timely payment.

### RBI Master Direction on CIC Dispute Resolution (2023):
- **Turnaround Time (TAT):** Credit institutions and CICs must resolve borrower dispute complaints within **30 calendar days**.
- **Statutory Delay Penalty:** If a dispute is not resolved within 30 days, the credit institution or CIC responsible for the delay must pay a compensation of **₹100 per calendar day of delay** directly to the aggrieved complainant.

---

> [!CAUTION]
> **Examiner Trap Alert & Regulatory Pitfalls:**
> 1. **Prime Score Benchmark:** A credit score of **$\ge 750$** is universally recognized as the prime benchmark in Indian retail underwriting.
> 2. **Inquiry Impact:** Checking one's own credit score is a **Soft Inquiry** and does **NOT** reduce the score. Only **Hard Inquiries** initiated by lenders impact the score.
> 3. **CIC Compensation Rule:** The statutory compensation for delay beyond 30 days in resolving credit report disputes is **₹100 per day**.

---

## 5. Solved Examination Questions

**Q1.** Under current Reserve Bank of India regulatory directives, what compensation must a credit institution or CIC pay to a consumer if a credit report dispute is not resolved within 30 calendar days?
- (A) ₹50 per day
- (B) ₹100 per day
- (C) ₹200 per day
- (D) ₹500 per day
*Answer:* **(B)**  
*Explanation:* Under RBI's 2023 Master Direction, failure to resolve credit score dispute complaints within 30 days attracts a mandatory penalty of ₹100 per calendar day of delay.

**Q2.** Which component carries the highest weightage (approximately 35%) in determining a consumer's credit bureau score?
- (A) Credit Product Mix
- (B) Total Number of Credit Inquiries
- (C) Past Repayment History
- (D) Total Sanctioned Credit Card Limit
*Answer:* **(C)**  
*Explanation:* Past repayment history accounts for approximately 35% of the total score, making timely loan and card payments the single most influential determinant.

---

## 6. Active Recall & Self-Diagnostic Prompts

<details>
<summary>1. Explain the Credit Utilization Ratio (CUR) and state its optimal benchmark.</summary>

The Credit Utilization Ratio measures total outstanding revolving credit card balances against total sanctioned credit limits, expressed as a percentage. The optimal benchmark is strictly below 30%. Maintaining utilization above 50% depresses credit scores by signaling potential credit distress.
</details>

<details>
<summary>2. What does a credit score entry of "-1" or "NA/NH" indicate?</summary>

It indicates that the individual has "No History" or "Not Applicable" credit track record, meaning they have fewer than six months of recorded borrowing activity with credit institutions, requiring lenders to evaluate alternative income and bank surrogate parameters.
</details>
