# FORENSIC AUDIT & VERIFICATION REPORT — BW(8)
**Artifact ID**: `007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW(8)`  
**Scope**: Final Dividend Framework Correction & Binary Audit  
**Compiled Artifact**: [`007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf`](file:///c:/Users/visha/OneDrive/Documents/Notes/007/PRINT%20DESIGNER/007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf)  
**Date of Audit**: 8 October 2026  
**Final Status**: 🟢 **VERIFIED & LOCK-READY**

---

## 1. EXECUTIVE SUMMARY & REGULATORY SYNCHRONIZATION

Following the directives of **FINAL DIVIDEND-FRAMEWORK CORRECTION — BW(8)**, the obsolete commercial bank dividend caps and foreign bank branch remittance rules have been corrected to the canonical RBI 2026 Directions architecture across Chapter 02 (Q1-018, Summary Table) and Chapter 09 (MS-014, Exam Angle, MCQs). Additionally, the temporal completeness statement for the digital fraud compensation framework (one-year window) was synchronized into Chapter 02 (Q1-013, Status Check) and Chapter 09 (MS-013).

The compiled master binary (`007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf`) was audited directly on the resulting binary stream via [`audit_bw8_final.ts`](file:///c:/Users/visha/OneDrive/Documents/Notes/007/scripts/audit_bw8_final.ts) and [`verify_ca_codex.ts`](file:///c:/Users/visha/OneDrive/Documents/Notes/007/scripts/verify_ca_codex.ts).

### Summary Audit Scorecard
| Metric / Check | Required Value | Measured Value in Binary PDF | Status |
| :--- | :--- | :--- | :--- |
| Total PDF Pages | Exactly 319 | **319 pages** | 🟢 PASS |
| Page Geometry | ISO A4 (595.28 × 841.89 pt) | **100% (319/319 pages)** | 🟢 PASS |
| Body Folios | p. 1 to p. 315 continuous | **315 pages** | 🟢 PASS |
| Front Matter | 4 pages (Cover, CIP, TOC iii–iv) | **4 pages** | 🟢 PASS |
| Negative String: `CET1 13%` + `75%` | Exactly 0 | **0 occurrences** | 🟢 PASS |
| Negative String: `CET1 ratio ≥ 13.0%` + `75%` | Exactly 0 | **0 occurrences** | 🟢 PASS |
| Negative String: `80% for foreign branches` | Exactly 0 | **0 occurrences** | 🟢 PASS |
| Negative String: Obsolete `foreign bank branches may remit up to 80%` | Exactly 0 | **0 occurrences** | 🟢 PASS |
| Negative String: `Domestic vs Foreign Cap` | Exactly 0 | **0 occurrences** | 🟢 PASS |
| Negative String: `75% bank dividend payout cap (80%` | Exactly 0 | **0 occurrences** | 🟢 PASS |
| Positive String: `>12% to ≤14%` CET1 bucket | $\ge 2$ | **5 occurrences** | 🟢 PASS |
| Positive String: `40% of adjusted PAT` | $\ge 2$ | **4 occurrences** | 🟢 PASS |
| Positive String: Aggregate `75% of PAT` ceiling | $\ge 2$ | **5 occurrences** | 🟢 PASS |
| Positive String: Foreign bank remittance without prior RBI approval | $\ge 2$ | **2 occurrences** | 🟢 PASS |
| Positive String: Exam Trap (`CET1 bucket percentage ≠ aggregate 75% ceiling`) | $\ge 1$ | **1 occurrence** | 🟢 PASS |
| Positive String: Digital fraud one-year window sentence | $\ge 2$ | **4 occurrences** | 🟢 PASS |
| Regression Check: Operative Repo 5.50% & Calibrated Tightening | $\ge 3$ each | **7 / 9 occurrences** | 🟢 PASS |
| Regression Check: Zero generic `current repo rate = 5.25%` | Exactly 0 | **0 occurrences** | 🟢 PASS |
| Regression Check: Canonical Digital Fraud Formula | $\ge 2$ | **7 occurrences** | 🟢 PASS |

---

## 2. CANONICAL DIVIDEND & REMITTANCE MATRIX (RBI 2026 DIRECTIONS)

| Category / Entity | Canonical Regulatory Formulation | Exam Significance & Distractor Trap |
| :--- | :--- | :--- |
| **Banks Incorporated in India** | For banks incorporated in India, the RBI 2026 Directions prescribe CET1-linked dividend buckets expressed as a percentage of adjusted PAT. For a non-D-SIB: **>12% to ≤14% CET1 → 40% of adjusted PAT**. The aggregate dividend payment is subject to an **overall ceiling of 75% of PAT**. D-SIB buffer 'z' shifts the CET1 bucket thresholds. | **Exam Trap**: *CET1 bucket percentage ≠ aggregate 75% ceiling.* For >12% to ≤14% CET1, bucket payout is 40% of adjusted PAT (not 75%). |
| **Foreign Bank Branches** | An eligible foreign bank operating in India in branch mode may remit net profit / surplus (net of tax) earned from its Indian operations **without prior RBI approval**, subject to the conditions prescribed in the RBI 2026 Directions, including audited accounts and treatment of any excess remittance. | **Exam Trap**: Foreign bank branches have **NO 80% percentage cap** under the 2026 Commercial Bank Directions. |
| **Asset Quality Barrier** | Net Non-Performing Assets (NNPA) ratio must not exceed **6.0%** for the financial year for dividend eligibility or profit remittance. | Unchanged statutory filter. |

---

## 3. CHAPTER FOLIO & PHYSICAL PAGE CORRELATION

| Chapter | Title | Folio Range | Physical PDF Pages | Page Count |
| :--- | :--- | :--- | :--- | :--- |
| Front Matter | Cover + CIP Colophon | — | pp. 1–2 | 2 |
| Contents | Table of Contents (Parts I–IV) | pp. iii–iv | pp. 3–4 | 2 |
| Ch 01 | Static Banking / Regulatory Core | pp. 1–15 | pp. 5–19 | 15 |
| Ch 02 | Q1 2026 Dossier (Jan–Mar) | pp. 16–43 | pp. 20–47 | 28 |
| Ch 03 | April 2026 Dossier | pp. 44–58 | pp. 48–62 | 15 |
| Ch 04 | May 2026 Dossier | pp. 59–76 | pp. 63–80 | 18 |
| Ch 05 | June 2026 Dossier | pp. 77–103 | pp. 81–107 | 27 |
| Ch 06 | July 2026 Dossier | pp. 104–120 | pp. 108–124 | 17 |
| Ch 07 | August 2026 Dossier | pp. 121–161 | pp. 125–165 | 41 |
| Ch 08 | September 2026 Dossier | pp. 162–211 | pp. 166–215 | 50 |
| Ch 09 | IBPS 35+ Mega Compendium | pp. 212–288 | pp. 216–292 | 77 |
| Ch 10 | Computer Aptitude & Digital Banking | pp. 289–315 | pp. 293–319 | 27 |
| **Total** | **Master Sovereign Codex** | **pp. 1–315** | **pp. 1–319** | **319** |

---

## 4. CONCLUSION & LOCK DECLARATION

The final PDF binary text stream (`007_Book_06_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf`) has been programmatically inspected and verified across 1,266,341 characters. All obsolete dividend formulations return 0, positive canonical propositions are verified, and regression controls pass with 100% precision.

**Recommendation**: 🟢 **LOCK MASTER CODEX AS BW(8)**.
