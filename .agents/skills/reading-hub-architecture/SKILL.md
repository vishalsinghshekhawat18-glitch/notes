---
name: reading-hub-architecture
description: >-
  Technical architecture, database schema, data access layer (DAL), and implementation blueprints for Reading Hub / Mind of Aravalli. Use whenever designing, implementing, refactoring, or reviewing the database models, DAL services, ingestion processors, exam lenses, or UI components.
---

# Reading Hub — Technical & Knowledge Architecture
**Status: ARCHITECTURALLY FROZEN (Phases 0 & 0.5 Finalized)**

---

## 1. System Separation of Concerns & Non-Overengineering Principle

```text
UI (Next.js / React)
  ↓
Service / DAL (Strictly mediates all data access)
  ↓
Database (Prisma / PostgreSQL / SQLite)
```

### Core Non-Overengineering Principle
> **"Reading Hub should not become an ontology project."**
> Infrastructure and abstractions must justify themselves by improving at least one of:
> 1. Source fidelity
> 2. Omission detection
> 3. Knowledge accuracy
> 4. Learning quality
> 5. Mental-model formation
> 6. Cross-domain transfer
> 7. Exam utility
> 8. Revision efficiency
> 9. Auditability
>
> If a proposed abstraction does not materially improve one of these, defer it. Prefer the simplest architecture that preserves knowledge quality.

---

## 2. Source Authority Hierarchy & Operational Rules

Classify all source material into explicit authority tiers:

- **TIER A — PRIMARY / OFFICIAL**:
  - Constitution of India
  - Acts and statutory regulations
  - Supreme Court / High Court judgments
  - Official government notifications and gazettes
  - RBI / SEBI / official regulator documents
  - Official statistical datasets (MoSPI, Census, RBI bulletins)
  - Official committee reports
- **TIER B — SCHOLARLY**:
  - Peer-reviewed research papers
  - Academic monographs and university press publications
  - Recognized scholarly reference treatises
- **TIER C — EDUCATIONAL**:
  - Standard textbooks (e.g., standard reference works)
  - Reputable institutional educational material
  - Established coaching material
- **TIER D — DISCOVERY / SECONDARY**:
  - Blogs and general websites
  - Videos and podcasts
  - Informal explanations and discussions
  - AI-generated candidate material

### Operational Rules for Source Tiers:
1. **Discovery Role**: Lower-tier material may help *discover* a question, concept, or claim.
2. **Authority Bar**: Lower-tier material must not automatically establish a claim when a higher-authority source exists.
3. **Statutory Precedence**: Primary sources (Tier A) take absolute precedence for legal, procedural, and statutory wording.
4. **Scholarly Precedence**: Scholarly consensus (Tier B) takes precedence over popular simplification for academic and scientific claims.
5. **Conflict Tracking**: Conflicts between tiers must generate a `KnowledgeIssue` rather than being silently resolved or smoothed over.
6. **Pedagogical Value**: Educational sources (Tier C) remain valuable for teaching intuition and pedagogical examples even when they are not the ultimate legal authority.

---

## 3. Final Optimized Relational Model (Entities & Justifications)

An entity is kept as an independent relational structure when its lifecycle, relationships, provenance, querying, auditability, or independent status materially benefit from persistence.

### Entity Catalog:
1. **`Domain`**: Intellectual partition (`id`, `slug`, `name`, `description`, `order`).
2. **`Subject`**: Academic discipline defining global scope (`id`, `domainId`, `slug`, `name`, `description`, `scopeStatement`, `status`, `order`).
3. **`Topic`**: Major navigational unit within a subject (`id`, `subjectId`, `slug`, `title`, `description`, `scope`, `order`, `status`).
4. **`Concept`**: Stable unit of understanding with recursive self-relation (`id`, `topicId`, `parentId?`, `slug`, `title`, `shortDefinition`, `status`, `difficulty`, `order`).
5. **`Claim`**: Atomic proposition for verification and auditability (`id`, `conceptId`, `statement`, `claimType`, `importance`, `confidence`, `status`, `validFrom?`, `validTo?`).
6. **`Evidence`**: Provenance link connecting claim to source (`id`, `claimId`, `sourceId`, `sourceSectionId?`, `locator`, `excerpt?`, `evidenceType`, `authority`, `notes?`).
7. **`Source`**: Authoritative external document/book/statute (`id`, `title`, `author`, `publisher`, `sourceType`, `authorityTier`, `url?`, `publicationDate?`, `edition?`, `identifier?`, `language`, `description?`).
8. **`SourceSection`**: Hierarchical structural breakdown of source (`id`, `sourceId`, `parentId?`, `title`, `sectionType`, `locator?`, `pageStart?`, `pageEnd?`, `order`).
9. **`CoverageUnit`**: Anti-omission ledger item enforcing the **Zero Unaccounted-For Source Omission principle** (`id`, `sourceId`, `sourceSectionId?`, `label`, `scopeDescription`, `status`, `exclusionReason?`, `extractionStatus`, `verificationStatus`, `canonicalMappingStatus`, `notes?`).
10. **`IngestionItem`**: Quarantined staging area for raw AI extraction (`id`, `sourceId`, `coverageUnitId`, `rawInput`, `extractedClaims` [JSON], `extractedTerms` [JSON], `status`, `reviewerNotes?`).
11. **`KnowledgeIssue`**: Discrepancies, ambiguities, and conflicts (`id`, `type`, `severity`, `description`, `status`, `resolution?`, `claimId?`, `conceptId?`, `sourceId?`).
12. **`ContentBlock`**: Modular pedagogical presentation chunks (`id`, `conceptId`, `type`, `title`, `body`, `order`, `visibility`).
13. **`Connection`**: Cross-domain relational graph with explicit justification (`id`, `sourceConceptId`, `targetConceptId`, `type`, `strength`, `explanation`, `status`).
14. **`Exam`**: External examination registry (`id`, `slug`, `name`, `conductingBody`, `description`, `syllabusSummary`, `status`).
15. **`ExamConceptMapping`**: Exam lens uniting syllabus mapping and V1 exam intelligence (`id`, `examId`, `conceptId`, `syllabusUnit`, `relevance`, `priority`, `requiredDepth`, `questionStyle`, `frequentTraps?`, `trendAnalysis?`, `historicalWeight?`, `notes?`).
16. **`RevisionUnit`**: Dedicated rapid review sheets (`id`, `conceptId`, `examId?`, `type`, `content`, `priority`, `order`).
17. **`Question`**: Active recall assessments & PYQ integration (`id`, `conceptId`, `claimId?`, `examId?`, `type`, `stem`, `options?` [JSON], `correctAnswer`, `explanation`, `trapExplanation?`, `difficulty`, `isPYQ`, `pyqYear?`, `pyqPaper?`, `pyqStage?`, `pyqQuestionNumber?`, `pyqMarks?`).
18. **`KnowledgeAudit`**: Subject-specific quality audit records (`id`, `targetType`, `targetId`, `auditType`, `protocol`, `severity`, `finding`, `recommendation`, `status`, `auditor`).

---

## 4. Composable Teaching Architecture (No Rigid Universal Template)

> **Rule: CONTENT BLOCKS ARE OPTIONAL AND COMPOSABLE.**
> There is NO universal concept-page template. The teaching structure adapts dynamically to the nature of the subject.

### Available Content Block Types:
- `CORE_IDEA`
- `WHY_IT_MATTERS`
- `INTUITION`
- `MECHANISM`
- `PROCESS`
- `EXAMPLE`
- `COUNTEREXAMPLE`
- `TIMELINE`
- `COMPARISON`
- `EXCEPTION`
- `CASE_STUDY`
- `EVIDENCE_SUMMARY`
- `FORMAL_MODEL`
- `MATHEMATICS` (Optional; included only where quantitative precision aids understanding)
- `DIAGRAM`
- `MISCONCEPTION`
- `DEBATE`
- `EXAM_NOTE`
- `SUMMARY`

### Subject-Specific Composition Examples:
- **Polity / Law**: `Core Idea → Constitutional Problem → Mechanism (Judicial Test) → Exceptions → Case Law → Exam Traps`
- **Economics**: `Core Idea → Incentive Structure → Mechanism → Model/Equations → Concrete Graph/Example → Limitations`
- **History**: `Context & Background → Chronology → Causal Drivers → Competing Interpretations → Long-Term Consequences`
- **Science & Technology**: `Phenomenon → Underlying Mechanism → Empirical Evidence → Boundary Conditions → Applications → Common Myths`

---

## 5. Exam Intelligence V1 Specification

- **Syllabus Mapping**: *"What part of the exam does this knowledge belong to?"* (Handled by `ExamConceptMapping.syllabusUnit`, `relevance`, `requiredDepth`).
- **Exam Intelligence**: *"How has this examination historically tested this knowledge?"* (Embedded in `ExamConceptMapping.frequentTraps`, `trendAnalysis`, and `Question.pyq*` fields for V1).
- **Evolution Path**: If cumulative historical exam data expands in later phases, Exam Intelligence can be factored out into a dedicated relational entity via an explicit Architecture Decision Record (ADR).

---

## 6. Implementation Stages & Build Order

- **Phase 0 & 0.5**: Knowledge & Technical Architecture (FROZEN).
- **Phase 1**: Project Foundation, Prisma Relational Schema, and DAL Core Services.
- **Phase 2**: Source Registration, Structure Decomposition & Coverage Ledger Engine.
- **Phase 3**: Atomic Claim Extraction, Evidence Provenance & Reconciliation Engine.
- **Phase 4**: Canonical Concept Assembly & Composable ContentBlock Builder.
- **Phase 5**: Benchmark Vertical Slice (*Indian Polity $\rightarrow$ Fundamental Rights $\rightarrow$ Right to Equality*).
- **Phase 6**: Calm, Focused Reading Experience UI.
- **Phase 7**: Examination Lenses (RAS, APFC, DBF) & PYQ Integration.
- **Phase 8**: Layered Revision Engine & Diagnostic Active Recall.
- **Phase 9**: Subject-Specific Audit Protocols Execution.
- **Phase 10**: Scaling to Additional Subjects & Cross-Domain Graph Exploration.
