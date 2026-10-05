# ELECTRONIC PAYMENT SYSTEMS, NPCI PLATFORMS & DIGITAL RUPEE (e₹)

Retail and wholesale payments transitioned from paper clearing to real-time gross and net settlement architectures owned by the RBI and National Payments Corporation of India (NPCI). Spanning RTGS, NEFT, IMPS, UPI, and the sovereign Central Bank Digital Currency (CBDC / Digital Rupee), digital payments operate under statutory oversight of the PSS Act 2007.

## § 18.1 Comprehensive Operational & Legal Analysis

Electronic Payment Systems, NPCI Architecture & Digital Rupee

> **Key Concept — Pivotal Concept: Retail vs Large-Value Electronic Payment Systems**
> Under the Payment and Settlement Systems Act 2007 (PSS Act), RBI regulates electronic fund transfers, operating large-value settlement directly while retail payment rails are operated by the National Payments Corporation of India (NPCI).

## 1. Master Matrix: NEFT vs RTGS vs IMPS vs UPI

| Parameter | RTGS (RBI) | NEFT (RBI) | IMPS (NPCI) | UPI (NPCI) |
| --- | --- | --- | --- | --- |
| Settlement Mode | Gross Settlement in Real-Time | Deferred Net Settlement (DNS) in half-hourly batches | Real-Time Gross Immediate Credit | Real-Time Instant Credit via Virtual Payment Address (VPA) |
| Operating Hours | **24x7x365** (Round-the-clock) | **24x7x365** (48 half-hourly batches daily) | **24x7x365** (Instant real-time) | **24x7x365** (Instant real-time) |
| Minimum Amount | **₹2,00,000 (₹2 Lakhs)** | No Minimum (Re. 1) | No Minimum (Re. 1) | No Minimum (Re. 1) |
| Maximum Limit | No Maximum Ceiling | No Maximum Ceiling | **₹5,00,000 (₹5 Lakhs)** per transaction | **₹1,00,000** standard (₹5L for Hospitals/Educational/Tax payments) |
| Charges for Savings A/c | Free for online / digital transactions | Free for online / digital transactions | As decided by individual member banks | Zero transaction charges for retail peer-to-peer / peer-to-merchant |
| Operating Authority | Reserve Bank of India (RBI) | Reserve Bank of India (RBI) | NPCI | NPCI |

## 2. Other Core NPCI Retail Platforms

| Platform | Full Form | Primary Function / Operational Mechanism |
| --- | --- | --- |
| NACH | National Automated Clearing House | Centralized high-volume electronic clearing for interbank bulk recurring transactions (Direct Debit for EMIs/SIPs; Direct Credit for Salaries/Subsidies). Replaced regional ECS. |
| AePS | Aadhaar Enabled Payment System | Allows basic financial transactions (Cash Deposit, Cash Withdrawal, Balance Enquiry, Mini-statement) at Micro-ATMs/BC points using Aadhaar number and biometric authentication. |
| APBS | Aadhaar Payment Bridge System | Used for direct benefit transfer (DBT) of Government welfare subsidies directly into beneficiaries' Aadhaar-seeded bank accounts. |
| CTS-2010 | Cheque Truncation System | Online image-based cheque clearing replacing physical movement of paper cheques, featuring standardized security watermarks and faster clearing cycles. |

## 🪙 3. Central Bank Digital Currency (CBDC) — Digital Rupee (e₹)

• **Legal Tender Status:** Issued by RBI under amendments to Section 22 and Section 26 of the RBI Act 1934, recognized as sovereign digital legal tender.
• **Two Versions:**.
• • **e₹-W (Wholesale):** Launched Nov 2022 for interbank settlement of secondary market transactions in Government Securities.
• • **e₹-R (Retail):** Launched Dec 2022 as token-based digital currency in denominations identical to physical currency notes and coins, held in non-interest-bearing digital wallets.
• **Zero Interest Bearing:** Unlike bank deposits, CBDC does not earn interest to prevent sudden disintermediation of commercial bank deposits.

> **Exam Anchor & Trap:**
> Top Exam Traps on Payment Systems:
1. **RTGS Minimum Amount Limit:** The minimum limit for an RTGS transaction is **₹2,00,000**. There is NO minimum limit for NEFT.
2. **IMPS Maximum Transaction Limit:** The maximum transaction limit for IMPS is **₹5,00,000 (₹5 Lakhs)** (revised from ₹2 Lakhs in 2021).
3. **UPI Standard Limit:** Standard UPI limit is **₹1 Lakh** per transaction (extended to ₹5 Lakhs for tax payments, hospitals, and educational institutions).
4. **CBDC Interest Trap:** Digital Rupee (e₹) carries **ZERO interest** (same as physical cash in hand).

---

---

### Practice Questions & Solved Numerical Drills (IIBF Pattern)

**Q1:** What is the minimum transaction amount required for processing a payment through Real Time Gross Settlement (RTGS)?
• (A) ₹50,000
• (B) ₹1,00,000
• (C) ₹2,00,000
• (D) No minimum limit

**Q2:** National Electronic Funds Transfer (NEFT) operates on which operational settlement cycle and availability schedule?
• (A) Hourly batches during bank working hours
• (B) Half-hourly settlement batches, operating 24x7x365
• (C) Continuous gross settlement
• (D) End-of-day netting at 5:00 PM

**Q3:** What distinguishes Central Bank Digital Currency (CBDC / e₹) from private electronic bank balances and commercial UPI transactions?
• (A) CBDC is a direct sovereign liability of the Reserve Bank of India, not a commercial bank liability
• (B) CBDC requires physical gold backing at branch counters
• (C) CBDC earns higher interest than savings deposits
• (D) CBDC transactions cannot be performed without internet access

#### Solutions & Detailed Explanations

1. **(C) ₹2,00,000** — RTGS is reserved for high-value wholesale transactions with a minimum limit of ₹2,00,000 and zero upper cap. NEFT has no minimum limit.

2. **(B) Half-hourly settlement batches, operating 24x7x365** — NEFT operates around the clock in 48 half-hourly batches daily.

3. **(A) CBDC is a direct sovereign liability of the Reserve Bank of India, not a commercial bank liability** — Physical currency and CBDC are sovereign legal tender appearing on the RBI's balance sheet, eliminating commercial bank credit risk.

## § 18.2 Active Recall Diagnostic Vault

<details>
<summary>Construct the comparative matrix for RTGS vs NEFT vs IMPS vs UPI across: Settlement Mode, Minimum / Maximum Limits, and Operating Hours.</summary>
1. RTGS: Gross real-time; Min ₹2 Lakh / No Max; 24x7x365. 2. NEFT: Deferred net settlement (half-hourly batches); Min ₹1 / No Max; 24x7x365. 3. IMPS: Immediate real-time net; Min ₹1 / Max ₹5 Lakh; 24x7x365. 4. UPI: Immediate real-time net (VPA/mobile); Min ₹1 / Max ₹1 Lakh to ₹5 Lakh (standard ₹1L; capital markets/hospitals/institutions ₹5L); 24x7x365.
</details>

<details>
<summary>What are the two distinct operational variants of Central Bank Digital Currency (CBDC) launched by the RBI?</summary>
1. CBDC-Wholesale (e₹-W): Interbank wholesale settlement limited to financial institutions for secondary market transactions in Government Securities. 2. CBDC-Retail (e₹-R): Digital token representing sovereign currency issued to the public through two-tier distribution by commercial banks, held in digital token wallets.
</details>

