# COMPUTERISED ACCOUNTING, CBS, BANK DISCLOSURES & BASEL III FRAMEWORK

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** B (Financial Mathematics and Bank Financial Statements)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
Modern commercial banking has completely transitioned from manual paper ledgers to 24x7 centralized Core Banking Systems (CBS). At the same time, international regulatory standards under the Basel Committee on Banking Supervision (BCBS) mandate stringent capital adequacy rules and transparent financial disclosures in published balance sheets. Understanding computerized accounting architecture, CBS security controls, notes to accounts disclosures, and Basel III capital pillars is vital for bank branch managers, auditors, and treasury officers.

## 2. Computerised Accounting Systems (CAS) & Core Banking Solutions (CBS)

```
+----------------------------------------------------------------------------------------------------+
|                                    MANUAL vs COMPUTERISED ACCOUNTING SYSTEMS                       |
+----------------------------------------------------------------------------------------------------+
| Dimension             | Manual Bookkeeping System             | Computerised Accounting System (CAS|
+-----------------------+---------------------------------------+------------------------------------+
| Recording & Posting   | Separate manual entries in Journal,   | Data input once at source voucher; |
|                       | Subsidiary Books, and Ledger Accounts | automated ledger posting & balancing|
| Speed & Calculations  | Prone to human arithmetical mistakes  | Instantaneous, error-free arithmeti|
| Trial Balance Tally   | Time-consuming manual extraction      | Auto-generated instantly at closing|
| Storage & Security    | Physical ledger books, vault storage  | Encrypted relational databases,    |
|                       | vulnerable to physical damage         | disaster recovery sites (DRS)      |
+-----------------------+---------------------------------------+------------------------------------+
```

### Core Banking Solutions (CBS) in Indian Banking
A Core Banking Solution (CBS) is a centralized software platform where all bank branches are networked to a single centralized database server (Data Centre). Customers are customers of the *bank*, not of a specific branch:
- **Key Characteristics:**
  1. *Centralized Processing:* Real-time, 24x7 straight-through processing (STP) of transactions across branches, ATMs, internet banking, UPI, and mobile banking.
  2. *Maker-Checker Control:* Segregation of duties where transaction entry is performed by a "Maker" and mandatory authorization is executed by a separate "Checker."
  3. *Audit Trail & Logging:* Automatic timestamping, user-ID tagging, and immutable transaction logs providing complete forensic audit trails.
  4. *Security & Access Control:* Role-based access control (RBAC), multi-factor authentication (MFA), end-to-end encryption, and daily end-of-day (EOD) and beginning-of-day (BOD) batch reconciliations.

## 3. Bank Financial Disclosures & Notes to Accounts
In addition to the 16 balance sheet and P&L schedules under the Third Schedule of the BR Act 1949, commercial banks are mandated by the RBI to provide comprehensive **Notes to Accounts** disclosing qualitative and quantitative metrics:
1. **CRAR Disclosures:** Disclosure of CET1, Tier 1, Tier 2 capital ratios, and risk-weighted assets (RWA).
2. **Asset Quality & NPA Movements:** Gross NPAs, Net NPAs, NPA ratios, additions during the year, recoveries, upgrades, write-offs, and provisions held.
3. **Sectoral & Exposure Concentration:** Exposure to real estate, capital markets, infrastructure, sensitive sectors, and single/group borrower exposure limits.
4. **Maturity Pattern of Assets & Liabilities (ALM):** Time-bucket structural liquidity mismatches (1-14 days, 15-28 days, up to >5 years) monitoring liquidity and interest rate sensitivity.
5. **Contingent Liabilities & Off-Balance Sheet Items:** Guarantees, Letters of Credit, forward exchange contracts, and interest rate swaps.

## 4. Basel III Capital Adequacy Framework
The Basel III norms, implemented in India through RBI Master Directions, establish a multi-tier regulatory capital framework designed to prevent bank insolvency during systemic stress:

```
+----------------------------------------------------------------------------------------------------+
|                                    BASEL III CAPITAL ADEQUACY MATRIX (RBI NORMS)                   |
+----------------------------------------------------------------------------------------------------+
| Regulatory Capital Component  | International Basel Minimum           | RBI Mandated Minimum in India      |
+-------------------------------+---------------------------------------+----------------------------+
| Common Equity Tier 1 (CET1)   | 4.50% of Risk-Weighted Assets (RWA)   | **5.50% of RWA**           |
| Additional Tier 1 (AT1)       | Max 1.50% of RWA                      | **Max 1.50% of RWA**       |
| Total Tier 1 Capital          | 6.00% of RWA                          | **7.00% of RWA**           |
| Tier 2 Capital (Subordinated) | Max 2.00% of RWA                      | **Max 2.00% of RWA**       |
| Minimum Total Capital (CRAR)  | 8.00% of RWA                          | **9.00% of RWA**           |
| Capital Conservation Buffer   | 2.50% of RWA (CET1)                   | **2.50% of RWA (CET1)**    |
| **Total Minimum CRAR + CCB**  | **10.50% of RWA**                     | **11.50% of RWA**          |
+-------------------------------+---------------------------------------+----------------------------+
```

### Basel III Capital Tiers Defined
1. **Common Equity Tier 1 (CET1):** Highest quality going-concern capital. Comprises paid-up equity share capital, share premium, statutory reserves, and other disclosed free reserves less goodwill and deferred tax assets.
2. **Additional Tier 1 (AT1):** Perpetual non-cumulative preference shares and perpetual debt instruments (PDI) with write-down or equity conversion triggers.
3. **Tier 2 Capital (Gone-Concern Capital):** Revaluation reserves (at a 55% discount), general provisions and loss reserves (up to 1.25% of credit RWA under standardized approach), and subordinated debt instruments with minimum initial maturity of 5 years.

### Basel III Leverage & Liquidity Standards
- **Basel III Leverage Ratio:** Non-risk-based backstop constraint. $\text{Leverage Ratio} = \frac{\text{Tier 1 Capital}}{\text{Total Exposure}} \ge 3.50\%$ (and **4.00%** for Domestic Systemically Important Banks - D-SIBs).
- **Liquidity Coverage Ratio (LCR):** Mandates that banks maintain an unencumbered stock of High-Quality Liquid Assets (HQLA) sufficient to survive a 30-day severe liquidity stress scenario:
  $$\text{LCR} = \frac{\text{Stock of High-Quality Liquid Assets (HQLA)}}{\text{Total Net Cash Outflows over 30 Days}} \ge 100\%$$
- **Net Stable Funding Ratio (NSFR):** Promotes long-term structural funding resilience over a 1-year horizon:
  $$\text{NSFR} = \frac{\text{Available Stable Funding (ASF)}}{\text{Required Stable Funding (RSF)}} \ge 100\%$$

## 5. Worked Numerical: Basel III CRAR Calculation
**Scenario:** A commercial bank has the following balance sheet parameters:
- Common Equity Tier 1 (CET1): ₹11,000 Crores
- Additional Tier 1 (AT1): ₹2,000 Crores
- Tier 2 Capital: ₹3,000 Crores
- Total Risk-Weighted Assets (RWA): ₹1,20,000 Crores

**Solution Step-by-Step:**
1. $\text{CET1 Ratio} = \frac{11,000}{1,20,000} \times 100 = \mathbf{9.17\%}$ (RBI minimum is 5.50% + 2.50% CCB = 8.00% -> **COMPLIANT**).
2. $\text{Tier 1 Ratio} = \frac{11,000 + 2,000}{1,20,000} \times 100 = \frac{13,000}{1,20,000} \times 100 = \mathbf{10.83\%}$ (RBI minimum is 7.00% -> **COMPLIANT**).
3. $\text{Total Capital (CRAR)} = \frac{11,000 + 2,000 + 3,000}{1,20,000} \times 100 = \frac{16,000}{1,20,000} \times 100 = \mathbf{13.33\%}$.
4. *Regulatory Assessment:* Minimum RBI requirement is 9.00% CRAR + 2.50% CCB = 11.50%. The bank's actual CRAR of 13.33% exceeds the regulatory hurdle, confirming capital adequacy.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. In India, RBI mandates a minimum **9.00% CRAR** for scheduled commercial banks (higher than the international Basel minimum of 8.00%).
> 2. With the mandatory 2.50% Capital Conservation Buffer (CCB), the total effective capital requirement in India is **11.50% of RWA**.
> 3. General provisions on standard assets can be included in Tier 2 capital only up to a maximum ceiling of **1.25% of Credit Risk-Weighted Assets**.
> 4. In CBS systems, **Maker-Checker** authorization is an internal operational control, while **Straight-Through Processing (STP)** eliminates manual intervention between connected systems.

## 6. Practice Questions & Solved Numerical Drills

**Q1.** Under RBI prudential guidelines for Basel III, what is the minimum Common Equity Tier 1 (CET1) capital ratio required for commercial banks in India (excluding CCB)?
- (A) 4.50%
- (B) 5.50%
- (C) 6.00%
- (D) 7.00%

**Q2.** The Liquidity Coverage Ratio (LCR) under Basel III mandates banks to hold high-quality liquid assets to cover stressed net cash outflows over what time horizon?
- (A) 7 Days
- (B) 14 Days
- (C) 30 Days
- (D) 90 Days

**Q3.** General provisions and loss reserves held against standard assets can be admitted as Tier 2 capital up to what maximum regulatory ceiling under the standardized approach?
- (A) 1.25% of Credit Risk-Weighted Assets
- (B) 2.00% of Total Risk-Weighted Assets
- (C) 0.50% of Total Assets
- (D) 5.00% of Tier 1 Capital

#### Solutions & Explanations
* Q1 Correct Answer: (B) 5.50%. International Basel minimum is 4.50%, but RBI prescribes a stricter minimum of 5.50% CET1 for Indian banks.
* Q2 Correct Answer: (C) 30 Days. LCR tests short-term liquidity survival over a 30-day catastrophic stress window.
* Q3 Correct Answer: (A) 1.25% of Credit Risk-Weighted Assets. Any standard asset provision exceeding 1.25% of credit RWA is ineligible for Tier 2 capital inclusion.

## 7. Active Recall & Self-Diagnostic Prompts

<details>
<summary>What is the difference between going-concern capital and gone-concern capital under Basel III?</summary>

Going-concern capital (Tier 1: CET1 and AT1) absorbs losses while the bank continues operating as a solvent entity. Gone-concern capital (Tier 2) absorbs losses upon insolvency/resolution, protecting depositors and senior creditors in liquidation.
</details>

<details>
<summary>What is the purpose of the Capital Conservation Buffer (CCB)?</summary>

The CCB requires banks to build up an additional 2.50% CET1 capital buffer during normal economic periods that can be drawn down when losses are incurred during stress periods, preventing dividend and bonus distributions if breached.
</details>

## 8. Last-Minute Revision Box
- CBS: Centralized 24x7 database, Maker-Checker authorization, immutable audit trail.
- RBI Basel III Hurdle: CET1 5.5%, Tier 1 7.0%, Total CRAR 9.0%, CCB 2.5% -> Total 11.5% of RWA.
- Leverage Ratio: Min 3.5% (4.0% for D-SIBs) Tier 1 / Total Exposure.
- LCR: HQLA / 30-day net cash outflow $\ge 100\%$.
- NSFR: Available Stable Funding / Required Stable Funding $\ge 100\%$ (1-year horizon).
- Tier 2 Cap on General Provisions: Maximum 1.25% of Credit RWA.
