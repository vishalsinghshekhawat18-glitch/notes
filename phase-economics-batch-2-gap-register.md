# Economics Master — Batch 2 Audit & Gap Register
**Scope: Inflation, Money, Monetary Economics & RBI Monetary Policy**
**Coverage:** Topics 33–39 | Concepts `CON-ECO-18` to `CON-ECO-32` (15 Concepts)

---

## 1. Executive Audit & Existing Codebase State

### 1.1 Pre-existing Artifacts & Inconsistencies
- **Legacy Files Inspected**:
  - `lib/benchmark/batch-e2-canonical-seed.ts` (Legacy): Contained public finance/banking/external sector drafts with mixed topic order numbers (Topics 30–32, colliding with Batch 1's Topic 30–32). Needs complete replacement with the new authoritative Topic 33–39 architecture.
  - `lib/benchmark/inflation-canonical-seed.ts` (Legacy): Old 5-concept prototype for inflation with non-standard schema types (`InflationConceptDefinition`, missing `CanonicalConceptDefinition` structure).
- **Batch 1 Baseline**:
  - Topics 27–32 (`CON-ECO-01` to `CON-ECO-17`) are completely frozen, validated, and passing all tests.
  - Total concepts in Batch 1: 17.
- **New Sequential ID Assignment**:
  - Batch 2 strictly begins at `CON-ECO-18` through `CON-ECO-32` across Topics 33–39.

---

## 2. Topic & Concept Architecture for Batch 2

| Topic Order | Topic Slug | Topic Title | Concepts | Key Exam Overlay |
| :--- | :--- | :--- | :--- | :--- |
| **Topic 33** | `money-origins-functions-and-aggregates` | **Money: Origins, Functions, Typology & Aggregates** | `CON-ECO-18`, `CON-ECO-19` | RBI Gr B, SEBI Gr A, NABARD, IIBF DBF |
| **Topic 34** | `commercial-banking-money-creation-and-multiplier` | **Commercial Banking Money Creation & The Money Multiplier** | `CON-ECO-20`, `CON-ECO-21` | RBI Gr B, IIBF DBF, SBI/IBPS PO |
| **Topic 35** | `inflation-dynamics-theories-and-measurement` | **Inflation Theories, Price Dynamics & Measurement** | `CON-ECO-22`, `CON-ECO-23`, `CON-ECO-24` | All Exams (Core Macro) |
| **Topic 36** | `interest-rate-theory-and-fisher-relation` | **Interest Rate Theory & The Fisher Relation** | `CON-ECO-25` | RBI Gr B, SEBI Gr A, APFC |
| **Topic 37** | `monetary-policy-foundations-and-transmission` | **Monetary Policy Foundations, Transmission & Stances** | `CON-ECO-26`, `CON-ECO-27` | RBI Gr B, SEBI Gr A, NABARD, RAS |
| **Topic 38** | `rbi-monetary-policy-framework-and-mpc` | **RBI Monetary Policy Institutional Framework & Flexible Inflation Targeting** | `CON-ECO-28`, `CON-ECO-29` | RBI Gr B, RAS, APFC, SBI PO |
| **Topic 39** | `rbi-monetary-policy-instruments-and-liquidity-management` | **RBI Monetary Policy Operating Framework & Instruments** | `CON-ECO-30`, `CON-ECO-31`, `CON-ECO-32` | RBI Gr B, IIBF DBF, SBI/IBPS PO, RAS |

---

## 3. Epistemic & Fact Verification Matrix

1. **Statutory Provisions**:
   - Section 42(1), RBI Act 1934: Cash Reserve Ratio (CRR) — statutory range restrictions (3%–20%) removed by RBI Amendment Act 2006 (RBI has discretionary power to set CRR without floor or ceiling).
   - Section 24, Banking Regulation Act 1949: Statutory Liquidity Ratio (SLR) — maximum statutory ceiling of 40% (floor of 25% removed by 2007 amendment).
   - Sections 45Z–45ZO, RBI Act 1934: Flexible Inflation Targeting framework & Monetary Policy Committee (MPC) constituted under Section 45ZB (inserted by Finance Act 2016).
   - Section 49, RBI Act 1934: Bank Rate definition.
2. **Institutional & Operational Parameters (Time-Anchored)**:
   - Inflation Target: 4% CPI-C with $\pm 2\%$ tolerance band (2% to 6%), notified by GoI in consultation with RBI for 5-year periods (current notification valid 2021–2026).
   - Failure of Target: CPI inflation average exceeds 6% or falls below 2% for 3 consecutive quarters.
   - Standing Deposit Facility (SDF): Introduced in April 2022 under amended Section 17(1A) of RBI Act 1934 as an uncollateralized liquidity absorption mechanism, replacing fixed-rate reverse repo as the lower bound of the LAF corridor (SDF = Policy Repo - 25 bps; MSF = Policy Repo + 25 bps).
   - Base Years: CPI-Combined (2012=100, MoSPI/NSO); WPI (2011-12=100, Office of Economic Adviser, DPIIT).
3. **Mathematical & Notation Integrity**:
   - Money multiplier: $m = \frac{1 + c}{c + r}$ where $c = C/D$ and $r = R/D$.
   - Quantity Theory of Money (Fisher): $M \cdot V = P \cdot Y$.
   - Fisher Equation: $1 + i = (1 + r)(1 + \pi^e) \implies r \approx i - \pi^e$.
   - All LaTeX escaped properly (`\\frac`, `\\cdot`, `\\approx`) without naked `$` symbols in prose.
