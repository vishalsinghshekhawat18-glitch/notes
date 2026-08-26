# Phase 11A — Batch A Targeted Pedagogical Corrections Report

---

### Executive Summary

In strict accordance with the **Phase 11A Targeted Correction Pass**, we implemented **ONLY** the three explicitly authorized pedagogical corrections in Batch A (Topics 1–4). No architecture was altered, no database schemas were modified, no new topics or concepts were introduced, and Batch B remains strictly untouched at the Hard Stop gate.

---

### 1. Correction 1 — Constituent Assembly Committees (`CON-T2-04`)

#### What Changed:
- Replaced the flat, encyclopedic committee list with a **Functional Grouping Architecture** based on constitutional subject matter and leadership.
- Structured into 4 distinct functional groups:
  1. **National Governance & Federal Architecture (Chaired by Jawaharlal Nehru):**
     - *Union Powers Committee* (Demarcating national legislative scope)
     - *Union Constitution Committee* (Designing Central Executive, Parliament, Judiciary)
     - *States Committee* (Negotiating accession with Princely States)
  2. **State Governance, Rights & Minorities (Chaired by Sardar Vallabhbhai Patel):**
     - *Provincial Constitution Committee* (Designing State/Provincial governance)
     - *Advisory Committee on Fundamental Rights, Minorities & Tribal/Excluded Areas* (54-member umbrella body) with its 4 sub-committees:
       - *Fundamental Rights Sub-Committee:* **J.B. Kripalani**
       - *Minorities Sub-Committee:* **H.C. Mukherjee**
       - *North-East Frontier Tribal Areas Sub-Committee:* **Gopinath Bardoloi**
       - *Excluded & Partially Excluded Areas (Other than Assam) Sub-Committee:* **A.V. Thakkar**
  3. **Assembly Governance & Procedural Rules (Chaired by Dr. Rajendra Prasad):**
     - *Rules of Procedure Committee*
     - *Steering Committee* (Plus Finance & Staff and Ad Hoc National Flag committees)
  4. **Synthesis & Formal Drafting (Chaired by Dr. B.R. Ambedkar):**
     - *Drafting Committee* (August 29, 1947; 7 members scrutinizing B.N. Rau's draft).
- **Pedagogical Outcome:** The learner transitions from `LIST → MEMORIZE` to `UNDERSTANDING → GROUPING → RECALL`.

---

### 2. Correction 2 — Fifth Schedule vs Sixth Schedule (`CON-T4-03`)

#### What Changed:
- Added a dedicated conceptual bridge establishing the institutional logic before presenting the comparative matrix.
- Incorporated the core learner-facing distinction:
  > **"Different constitutional arrangements were designed for different tribal-administration contexts."**
- Contrasted the two distinct administrative contexts using source-backed institutional mechanics:
  1. **Fifth Schedule Context (10 Mainland States — Regulated Protection):**
     - *Context:* Tribal populations live interspersed with non-tribal populations within standard state boundaries.
     - *Institutional Strategy:* Uses **protective administrative oversight** via the Governor & advisory **Tribes Advisory Council (TAC)** to prevent land alienation and usurious moneylending without setting up parallel regional legislatures.
  2. **Sixth Schedule Context (4 North-Eastern States: AMTM — Autonomous Self-Governance):**
     - *Context:* Hill tribes (Khasi, Garo, Jaintia, Mizo, Bodo) historically formed compact, contiguous ethnic communities with distinct customary legal codes.
     - *Institutional Strategy:* Uses **statutory regional self-rule** via **Autonomous District Councils (ADCs)** acting as miniature local legislatures endowed with direct law-making, customary dispute resolution, and local taxation powers ("states within a state").
- **Pedagogical Outcome:** Eliminates mechanical memorization of TAC vs ADC numbers by rooting the difference in administrative purpose.

---

### 3. Correction 3 — Classical Language vs Eighth Schedule (`CON-T4-05`)

#### What Changed:
- Added an explicit **Misconception Shield**:
  > **CLASSICAL LANGUAGE STATUS ≠ EIGHTH SCHEDULE STATUS**
- Clearly demarcated the two separate legal frameworks:
  1. **Eighth Schedule (Constitutional Schedule):**
     - *Authority:* Articles 344(1) and 351 of the Constitution.
     - *Modification:* Requires an **Article 368 Constitutional Amendment Act passed by Parliament**.
     - *Scope:* **22 Languages** for official language representation and enriching Hindi.
  2. **Classical Language Status (Executive Classification):**
     - *Authority:* Executive notification by the **Ministry of Culture, Government of India**.
     - *Modification:* **Executive decision**; does *not* alter the text of the Constitution.
     - *Criteria:* High antiquity (1,500–2,000 years of recorded history), ancient literary heritage, original non-borrowed tradition.
     - *Scope:* **11 Languages** (including October 2024 additions).
  3. **The Non-Identity Rule in Practice:**
     - *Classical but NOT in 8th Schedule:* **Pali** and **Prakrit** (2024).
     - *In 8th Schedule but NOT Classical:* Hindi, Punjabi, Gujarati, Sindhi, Nepali, Konkani, Dogri, Maithili.
- **Pedagogical Outcome:** Prevents the pervasive student error of assuming every Classical Language is automatically in the 8th Schedule.

---

### 4. Source-Backed Rationale & Zero-Omission Compliance

- All 3 corrections strictly utilized existing facts from `Indian-Polity-English-[2026]-pdf.pdf` (PDF pp. 15, 35, 37–38).
- No new external facts or unverified speculations were introduced.
- 100% of the original 37 semantic units from PDF pages 7–40 remain fully accounted for in the coverage ledger.

---

### 5. Tests Added & Modified

- Modified `tests/phase11-batch-a-canonical.test.ts`:
  - Added assertion for **Correction 1**: Verifies presence of functional groupings (*"National Governance & Federal Architecture"*, *"State Governance, Rights & Minorities"*, *"Assembly Governance & Procedural Rules"*, *"Synthesis & Formal Drafting"*).
  - Added assertion for **Correction 2**: Verifies institutional logic bridge (*"Different constitutional arrangements were designed for different tribal-administration contexts."*, TAC, ADC).
  - Added assertion for **Correction 3**: Verifies misconception shield (*"CLASSICAL LANGUAGE STATUS ≠ EIGHTH SCHEDULE STATUS"*, Pali, Prakrit).
- No artificial test inflation was introduced.

---

### 6. Full Regression Verification Results

```bash
# 1. TypeScript Strict Typecheck
$ npm run typecheck
> tsc --noEmit
Exit Code: 0 (0 errors)

# 2. Automated Vitest Regression Suite
$ npm test
> vitest run
Test Files: 17 passed (17)
Tests:      115 passed (115)
Exit Code:  0 (PASSED)

# 3. Next.js Static SSG Production Build
$ npm run build
✓ Compiled successfully in 5.2s
✓ Generating static pages (59/59)
✓ Exporting static bundles to ./out
Exit Code: 0 (PASSED)
```

---

### 7. Remaining Known Issues

- None within the Batch A scope.
- Batch A is completely stabilized, tested, and pre-rendered.

---

### 8. Hard Stop Enforced

> [!IMPORTANT]
> **HARD STOP**: Phase 11A is complete. Development is halted at this gate. Batch B (Topics 5–8) will **NOT** commence until explicit human authorization is granted.
