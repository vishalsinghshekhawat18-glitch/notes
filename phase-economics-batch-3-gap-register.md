# Economics Master — Batch 3 Audit & Gap Register
**Scope: Banking System, Financial Intermediation & Indian Banking Architecture**
**Coverage:** Topics 40–48 | Concepts `CON-ECO-33` to `CON-ECO-53` (21 Concepts)

---

## 1. Executive Audit & Existing Codebase State

### 1.1 Pre-existing Artifacts & Inconsistencies
- **Frozen Baselines**:
  - Economics Batch 1: Topics 27–32 (`CON-ECO-01` to `CON-ECO-17`) are completely frozen, validated, and passing all tests.
  - Economics Batch 2: Topics 33–39 (`CON-ECO-18` to `CON-ECO-32`) are completely frozen, validated, and passing all tests.
- **Legacy Files Inspected**:
  - `lib/benchmark/batch-e3-canonical-seed.ts` (Legacy): Contained an older, non-canonical draft for agriculture/industry/poverty with conflicting Topic IDs (Topics 33–37) that overlapped with Batch 2.
  - This file will be completely replaced with the authoritative Topic 40–48 Banking & Financial Intermediation canonical seed.
- **New Sequential ID Assignment**:
  - Batch 3 strictly begins at `CON-ECO-33` and runs through `CON-ECO-53` across Topics 40–48.

---

## 2. Topic & Concept Architecture for Batch 3

| Topic Order | Topic Slug | Topic Title | Concepts | Key Exam Overlay |
| :--- | :--- | :--- | :--- | :--- |
| **Topic 40** | `financial-system-and-intermediation` | **Financial System & Financial Intermediation** | `CON-ECO-33`, `CON-ECO-34` | RBI Gr B, SEBI Gr A, IIBF DBF, APFC |
| **Topic 41** | `commercial-banking-structure-and-functions` | **Commercial Banking: Structure, Functions & Balance Sheet** | `CON-ECO-35`, `CON-ECO-36` | IIBF DBF, SBI/IBPS PO, RBI Gr B, RAS |
| **Topic 42** | `indian-banking-structure-and-typology` | **Indian Banking Institutional Architecture & Typology** | `CON-ECO-37`, `CON-ECO-38`, `CON-ECO-39` | NABARD, SBI/IBPS PO, RBI Gr B, RAS |
| **Topic 43** | `rbi-regulation-and-banking-supervision` | **RBI Regulation & Banking Supervision** | `CON-ECO-40`, `CON-ECO-41` | RBI Gr B, IIBF DBF, SEBI Gr A, APFC |
| **Topic 44** | `bank-capital-basel-framework-and-npa` | **Bank Capital, Basel Framework, NPAs & Asset Quality** | `CON-ECO-42`, `CON-ECO-43`, `CON-ECO-44` | RBI Gr B, IIBF DBF, SEBI Gr A, SBI/IBPS PO |
| **Topic 45** | `banking-reforms-and-financial-evolution` | **Banking Reforms & Structural Evolution in India** | `CON-ECO-45`, `CON-ECO-46` | RBI Gr B, NABARD, RPSC RAS, APFC |
| **Topic 46** | `financial-inclusion-digital-banking-and-payments` | **Financial Inclusion, Digital Banking & Payment Systems** | `CON-ECO-47`, `CON-ECO-48` | NABARD, SBI/IBPS PO, RBI Gr B, RAS |
| **Topic 47** | `nbfcs-and-shadow-banking-ecosystem` | **NBFCs & Shadow Banking Ecosystem** | `CON-ECO-49`, `CON-ECO-50` | RBI Gr B, SEBI Gr A, IIBF DBF |
| **Topic 48** | `financial-stability-crises-and-safety-nets` | **Financial Stability, Banking Crises, Safety Nets & AIFIs** | `CON-ECO-51`, `CON-ECO-52`, `CON-ECO-53` | RBI Gr B, SEBI Gr A, NABARD, IIBF DBF |

---

## 3. Epistemic & Fact Verification Matrix

1. **Statutory & Regulatory Provisions**:
   - Banking Regulation Act, 1949: Section 5(b) (definition of banking), Section 6 (permitted forms of business), Section 22 (licensing), Section 29/30 (accounts & audit), Section 35A (directions power), Section 36AAA (supersession of board), Section 45 (amalgamation/moratorium).
   - Reserve Bank of India Act, 1934: Section 45-IA to 45-QB (Chapter III-B: provisions relating to NBFCs), Section 45L (power to call for information from financial institutions), Section 45MA (auditor duty to report).
   - Deposit Insurance and Credit Guarantee Corporation Act, 1961: Section 16 (deposit insurance limit of ₹5 Lakh per depositor per bank, amended 2020/2021).
   - Regional Rural Banks Act, 1976: Section 3 & 6 (shareholding: 50% Central Govt, 15% State Govt, 35% Sponsor Bank).
   - Payment and Settlement Systems Act, 2007 (PSSA): Section 4 (RBI authorization for payment system operators).
   - Insolvency and Bankruptcy Code, 2016 (IBC): Section 7, 9, 14, 29A, 53 (waterfall mechanism) and FSP Rules 2019.
2. **Regulatory Master Directions & Committees (Time-Anchored)**:
   - Basel III Capital Regulations (RBI Master Circular): Minimum total CRAR 9% for scheduled commercial banks (11.5% including 2.5% Capital Conservation Buffer / CCB; PSBs maintained at 12%); CET1 5.5% (8% with CCB); Tier 1 7% (9.5% with CCB); Minimum Leverage Ratio 3.5% (4% for D-SIBs).
   - Asset Classification & Provisioning: Standard (0.25%–1.0%), Sub-Standard (NPA $\le$ 12 months, 15% secured / 25% unsecured), Doubtful (D1 25%/100%, D2 40%/100%, D3 100%), Loss (100% write-off/provision); SMA-0 (1–30 days), SMA-1 (31–60 days), SMA-2 (61–90 days), NPA (> 90 days overdue).
   - Scale-Based Regulation (SBR) for NBFCs (effective October 2022): Base Layer (NBFC-BL, asset size < ₹1,000 Crore), Middle Layer (NBFC-ML), Upper Layer (NBFC-UL), Top Layer (NBFC-TL).
   - Priority Sector Lending (PSL) Targets: 40% of ANBC for Domestic Commercial Banks & Foreign Banks with $\ge$ 20 branches; 75% for RRBs and SFBs.
   - PCA Framework (Revised 2021/2022): Trigger parameters based on Capital (CRAR/CET1), Asset Quality (Net NPA ratio), and Leverage.
   - D-SIBs Framework: Annual identification of Domestic Systemically Important Banks (SBI, HDFC Bank, ICICI Bank) with additional CET1 surcharges.
3. **Cross-Batch First-Principles Linkages**:
   - Explicitly links Batch 2's High-Powered Money ($M_0$), fractional reserves, and policy repo rate with Batch 3's bank balance sheet, lending spreads, asset-liability management, credit risk, Basel capital ratios, and macroprudential stability.
