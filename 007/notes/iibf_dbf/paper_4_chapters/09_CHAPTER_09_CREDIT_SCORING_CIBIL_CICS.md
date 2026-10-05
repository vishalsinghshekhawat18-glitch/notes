# CREDIT SCORING ARCHITECTURE (CIBIL / CICS 300–900 POINT SYSTEM)

> **Paper:** 4 (Retail Banking and Wealth Management)
> **Standard:** Macmillan 2023 Master Benchmark • Duplex A4 Monochrome Print Edition

Credit Information Companies (CICs) operate under the Credit Information Companies (Regulation) Act 2005 (CICRA), collecting and analyzing borrower credit histories. The resulting credit score—ranging from 300 to 900 points—serves as the primary quantitative filter for retail underwriting. Maintaining a prime score (≥ 750) provides borrowers with faster turnarounds, lower margins, and competitive interest rate concessions.

## 1. Credit Information Companies (CICs) in India

Under CICRA 2005, four authorized Credit Information Companies operate under RBI regulatory oversight:
1. **TransUnion CIBIL** *(Credit Information Bureau India Limited, established 2000)*
2. **Experian India**
3. **Equifax India**
4. **CRIF High Mark**

- **Mandatory Membership:** All scheduled commercial banks, NBFCs, and housing finance companies must be members of all four CICs and submit monthly borrower credit data.
- **Free Annual Report:** Every citizen is legally entitled to receive **one full free credit report (FFCR)** with credit score once per calendar year from each CIC.

## 2. CIBIL Score Architecture (300 to 900 Points)

$$\text{Credit Score Range: } 300 \text{ to } 900 \text{ Points}$$

| Score Band | Category / Risk Level | Underwriting Treatment by Commercial Banks |
| :--- | :--- | :--- |
| **300 – 599** | **Poor / High Risk** | Loan applications typically rejected or subject to strict collateral requirements. |
| **600 – 749** | **Moderate / Sub-Prime** | Detailed manual scrutiny; higher interest margins; lower LTV / FOIR caps applied. |
| **750 – 900** | **Prime / Excellent** | **Gold standard for retail credit**; fast-track approvals; discounted interest rates. |
| **−1 / 0 (NH / NA)** | **No Credit History** | Borrower has less than 6 months of credit history; underwritten on surrogate financial criteria. |

## 3. Factor Weightages Determining the Credit Score

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 FACTOR WEIGHTAGES IN CREDIT SCORE MODEL                     │
| 1. PAST REPAYMENT HISTORY (35%) : On-time EMI & card settlements; defaults │
│ 2. CREDIT UTILIZATION RATIO (30%): Proportion of credit card limit utilized │
│ 3. CREDIT TENURE / HISTORY (15%) : Age of oldest open active credit facility│
│ 4. CREDIT MIX (10%)              : Balanced blend of Secured vs Unsecured   │
│ 5. RECENT CREDIT INQUIRIES (10%) : Number of hard credit checks in 90 days  │
└─────────────────────────────────────────────────────────────────────────────┘
```

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. **Past Payment History (35%)** has the **highest individual weightage** in determining credit scores.
> 2. The standard credit score scale ranges from **300 to 900 points** (benchmark prime threshold is **$\ge 750$**).
> 3. Hard inquiries triggered by frequent, simultaneous loan applications temporarily suppress credit scores.

## Practice Questions & Solved Numerical Drills

**Q1.** What is the numeric scoring range utilized by TransUnion CIBIL and authorized Credit Information Companies in India?
- (A) 100 to 1,000 Points
- (B) 300 to 900 Points
- (C) 0 to 100 Points
- (D) 400 to 800 Points

**Q2.** Which factor carries the highest weightage (approx 35%) in the algorithm that determines an individual credit score?
- (A) Number of credit cards held
- (B) Past repayment track record and timeliness of debt service
- (C) Age and employment tenure of borrower
- (D) Total annual gross salary

**Q3.** Under RBI regulations, how many Free Full Credit Reports (FFCR) is an individual entitled to receive from each registered CIC every calendar year?
- (A) One
- (B) Two
- (C) Four
- (D) Unlimited upon request

#### Solutions & Detailed Explanations

* Q1 Correct Answer: (B) 300 to 900 Points. The standard credit scoring spectrum ranges from 300 (lowest) to 900 (highest).

* Q2 Correct Answer: (B) Past repayment track record and timeliness of debt service. Punctual payment history constitutes 35% of the total score weighting.

* Q3 Correct Answer: (A) One. The RBI mandates that each CIC provide one free detailed credit report annually to consumers upon request.

## Active Recall & Self-Diagnostic Prompts

<details>
<summary>What constitutes an ideal "Credit Utilization Ratio" (CUR), and why does exceeding 30% harm a credit score?</summary>

CUR is the ratio of revolving card balance to the sanctioned credit limit. Maintaining CUR ≤ 30% is ideal. Exceeding 30% signals credit hunger and high leverage, which depresses the credit score even if payments are made on time.
</details>

<details>
<summary>Distinguish between a "Soft Inquiry" and a "Hard Inquiry" on a credit report.</summary>

A Soft Inquiry occurs when a borrower checks their own score or a bank pulls data for pre-approved marketing; it does not impact the score. A Hard Inquiry occurs when a bank reviews a formal loan/credit application; multiple hard inquiries within a short period lower the credit score.
</details>

