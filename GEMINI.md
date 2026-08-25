# Workspace Rules: Mind of Aravalli (Reading Hub)

This workspace (`Notes`) is strictly dedicated to **Mind of Aravalli / Reading Hub**.

## 1. Project Boundaries & Isolation
- This project is completely isolated from all other projects and repositories.
- Do not inherit git configuration, remote repos, credentials, or assumptions from external projects.

## 2. Core Knowledge Philosophy
- **One Canonical Knowledge Base, Many Learning & Exam Views**: Universal canonical facts exist once; examinations (IIBF DBF, RPSC RAS, UPSC APFC, etc.) are applied as lenses.
- **Coverage Ledger Requirement**: Never synthesize or summarize without ledger tracking (`CoverageUnit`). Enforce the **Zero Unaccounted-For Source Omission principle** (every declared source unit must have an explicit processing/review state; source coverage and knowledge coverage remain strictly separate).
- **Four-Layer Separation**:
  1. *Source Truth* (Authoritative document text)
  2. *Extracted Claims & Evidence* (Atomic proposition + locator)
  3. *Canonical Knowledge* (Reconciled, verified concepts and claims)
  4. *Teaching Representation* (Pedagogical blocks, revision units, exam mappings)
- **Claim-Level Provenance & Auditability**: Trace all canonical claims back to explicit evidence.
- **No Giant Notes Blobs**: Maintain the strict structural hierarchy: `Domain → Subject → Topic → Concept → Claim → Evidence`.

## 3. Technical Constraints
- **DAL Abstraction**: All database access must go through the Data Access Layer services (`lib/knowledge`, `lib/db`). No direct DB manipulation from UI pages.
- **Modular Content Blocks**: Teaching materials are assembled from modular `ContentBlock` items rather than unstructured markdown walls.
- **Engineering Progression**: Build in strict stages (Foundation → Schema → Coverage Subsystem → Claims/Evidence → Canonical Knowledge → Benchmark Vertical Slice → Learning/Revision → Exams → Auditing → UI).
