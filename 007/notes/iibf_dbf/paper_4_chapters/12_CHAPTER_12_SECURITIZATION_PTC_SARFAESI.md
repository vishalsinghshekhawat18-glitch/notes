# SECURITIZATION OF RETAIL LOANS & PASS-THROUGH CERTIFICATES (PTCS)

> **Paper:** 4 (Retail Banking and Wealth Management)  
> **Standard:** Macmillan Courseware & IIBF 2026 Master Benchmark • Duplex A4 Monochrome Print Edition

Securitization is a structured financial mechanism through which illiquid, non-tradable retail loan assets (such as residential mortgages, auto loans, and micro-finance portfolios) are pooled, packaged, and converted into marketable debt securities. By transferring these asset pools to a bankruptcy-remote Special Purpose Vehicle (SPV), lending banks unlock regulatory capital, manage Asset-Liability Management (ALM) duration mismatches, and access non-deposit institutional liquidity. In India, securitization of standard retail assets is strictly governed by the **RBI Master Direction on Securitisation of Standard Assets (2021/2026)**.

---

## 1. The Tripartite Securitization Architecture

Securitization involves three core participants operating within a bankruptcy-remote legal structure:

```text
[1. Originator (Bank)] ──(True Sale of Loan Pool)──> [2. SPV (Bankruptcy-Remote Trust)]
       ▲                                                           │
       │                                                           ▼ (Issues PTCs)
[Collections & Servicing] <──(Investment Funds)────── [3. Institutional Investors]
```

1. **Originator (Lending Bank):** The original lender that originates retail loans, pools them, and transfers them to the SPV. The originator often continues to act as the **Servicing Agent** collecting EMIs from retail borrowers on behalf of the SPV.
2. **Special Purpose Vehicle (SPV):** A legal trust created exclusively for executing the securitization transaction. The SPV is **bankruptcy-remote**, ensuring that even if the originating bank goes into insolvency or liquidation, the assets held in trust cannot be attached by the bank's general creditors.
3. **Investors:** Institutional buyers (insurance companies, mutual funds, other banks meeting Priority Sector Lending targets) who purchase the securities issued by the SPV.

---

## 2. Securitization Instruments & Tranching: PTCs vs Pay-Throughs

- **Pass-Through Certificates (PTCs):** Securities that grant investors an undivided proportional direct interest in the underlying cash flows of the pool. Principal and interest repayments collected from borrowers are passed directly to investors, minus servicing fees.
- **Pay-Through Structure (Structured Collateralized Debt):** The SPV reconfigures cash flows into multiple classes of debt securities with differing seniorities, maturities, and coupon rates:
  - **Senior Tranche (Class A):** Highest credit rating (AAA), first right over incoming cash flows, lowest yield.
  - **Mezzanine Tranche (Class B):** Subordinated to senior tranche; absorbs losses after junior credit support is exhausted.
  - **Equity / Subordinated Tranche (Class C):** First-loss absorbing piece, typically retained by the originator.

### Credit Enhancement & Liquidity Support:
- **First-Loss Facility:** Absorbs initial borrower defaults, typically provided by the originator via cash collateral, over-collateralization, or excess interest spread (EIS).
- **Second-Loss Facility:** External credit support provided by a third-party financial institution to protect senior investors after first-loss credit enhancement is wiped out.

---

## 3. RBI Master Direction on Securitisation of Standard Assets (2021/2026)

To prevent subprime-style systemic risks, the Reserve Bank enforces strict prudential safeguards:

### 1. True Sale Criteria (Absolute Legal Separation)
For a securitization transaction to qualify as a **True Sale**, the originator must completely surrender control over the transferred assets:
- Transferred assets must be beyond the reach of the originator and its creditors, even in insolvency.
- The originator cannot have any legal or moral obligation to repurchase bad loans or make good investor losses.
- The transaction must be recognized as an off-balance-sheet sale under Indian Accounting Standards (Ind AS).

### 2. Minimum Holding Period (MHP)
To prevent originators from securitizing unseasoned, untested loans ("originate-to-distribute" moral hazard), assets must be held on the originator's balance sheet for a minimum seasoning period before securitization:

| Underlying Retail Loan Repayment Tenor | Mandatory Minimum Holding Period (MHP) |
| :--- | :--- |
| **Loans with Tenor up to 24 Months** | **Minimum 3 Months** (or 3 monthly installments paid regularly) |
| **Loans with Tenor exceeding 24 Months** | **Minimum 6 Months** (or 6 monthly installments paid regularly) |
| **Loans with Quarterly / Half-Yearly Installments** | Minimum **2 Installments** paid on or before due date |

### 3. Minimum Retention Requirement (MRR)
The originator must retain an ongoing financial stake in the securitized pool to ensure alignment of interest ("skin in the game"):

| Securitized Asset Tenor Category | Minimum Retention Requirement (MRR) |
| :--- | :--- |
| **Loans with Maturity up to 24 Months** | **5%** of the book value of loans securitized |
| **Loans with Maturity exceeding 24 Months** | **10%** of the book value of loans securitized |
| **Bullet Repayment Loans (Any Tenor)** | **15%** of the book value of loans securitized |

### 4. Non-Eligible Assets (Statutory Prohibition):
The RBI strictly prohibits securitization of:
- **Revolving Credit Facilities** (e.g., credit card receivables).
- Loans with **bullet repayment** of both principal and interest.
- Loans with unhedged foreign exchange exposure.
- Loans that have experienced restructuring or delinquency during the preceding 12 months.

---

> [!CAUTION]
> **Examiner Trap Alert & Regulatory Pitfalls:**
> 1. **Credit Cards Excluded:** Revolving credit facilities like credit card receivables **CANNOT** be securitized under RBI Master Directions.
> 2. **MHP Slabs:** Loans $\le 24\text{ months}$ require **3 months** MHP; loans $> 24\text{ months}$ require **6 months** MHP.
> 3. **MRR Slabs:** Standard long-tenor loans require **10% MRR**; bullet repayment loans require **15% MRR**.

---

## 4. Solved Examination Questions

**Q1.** Under RBI Master Directions on Securitisation of Standard Assets, what is the Minimum Holding Period (MHP) required for a retail housing loan with an original maturity of 20 years before it can be securitized?
- (A) 1 Month
- (B) 3 Months
- (C) 6 Months
- (D) 12 Months
*Answer:* **(C)**  
*Explanation:* For loans with a repayment tenor exceeding 24 months, the mandatory Minimum Holding Period (MHP) is 6 months of regular repayments.

**Q2.** Which of the following asset classes is strictly prohibited from being securitized under current Reserve Bank of India directives?
- (A) Individual residential housing loans
- (B) Passenger car auto loans
- (C) Revolving credit card receivables
- (D) Secured MSME term loans
*Answer:* **(C)**  
*Explanation:* RBI Master Directions prohibit the securitization of revolving credit facilities, including credit card receivables and cash credit accounts.

---

## 5. Active Recall & Self-Diagnostic Prompts

<details>
<summary>1. What is the fundamental purpose of the Minimum Retention Requirement (MRR) in securitization?</summary>

MRR forces the originating bank to maintain a permanent ongoing financial stake ("skin in the game") in the loan pool (typically 5% to 10%), ensuring that the originator does not originate poor-quality loans simply to offload them immediately onto secondary investors.
</details>

<details>
<summary>2. Explain the concept of a "Bankruptcy-Remote" Special Purpose Vehicle (SPV).</summary>

A bankruptcy-remote SPV is a legally independent trust structure whose assets are insulated from the originating bank. If the originator enters bankruptcy or liquidation, the creditors of the bank have no legal claim over the assets held by the SPV.
</details>
