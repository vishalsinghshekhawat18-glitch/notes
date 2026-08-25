# MIND OF ARAVALLI — MASTER SPECIFICATION

## 0. Executive Definition

**Mind of Aravalli** is a cross-domain personal knowledge and
examination-learning system.

Its purpose is to transform authoritative source material into a
**complete, verified, deeply understandable, interconnected and
exam-usable body of knowledge**.

It is not primarily: - a note-taking app - an AI summarizer - a document
library - a generic encyclopedia - a flashcard generator - a collection
of pretty cards

It is a **knowledge-engineering and learning system**.

The central transformation is:

`SOURCE → VERIFIED KNOWLEDGE → UNDERSTANDING → CONNECTIONS → EXAM VIEWS → REVISION → APPLICATION`

The system must preserve source coverage while improving explanation,
organization, retrieval and exam usefulness.

------------------------------------------------------------------------

# 1. The User Problem

The user faces a recurring problem:

Large amounts of material are available across: - books - PDFs -
coaching material - government documents - Acts and regulations -
reports - papers - lectures - current affairs - previous-year
questions - reference websites

Simply feeding these sources to an AI and requesting “comprehensive
notes” fails because an AI synthesis can: - skip small but important
details - merge unrelated information - introduce unsupported claims -
lose exceptions - flatten important distinctions - over-compress -
repeat information - produce attractive but shallow prose - fail to
expose omissions - make it impossible to know what was actually covered

Mind of Aravalli must be designed specifically to prevent these failure
modes.

------------------------------------------------------------------------

# 2. The Central Product Principle

## One canonical knowledge base, many learning and examination views.

The underlying knowledge should not be duplicated for every examination.

For example:

`INDIAN POLITY`

should exist once as canonical knowledge.

It can then generate:

- General Polity
- UPSC view
- RAS view
- APFC view
- IIBF/Banking-relevant view where applicable
- Rapid Revision
- One-minute revision
- PYQ practice
- Mains-oriented analytical view
- Objective-exam trap sheet

The examination is a **lens**, not a separate encyclopedia.

------------------------------------------------------------------------

# 3. Target Examinations

Initial target examinations include:

- IIBF DBF
- RPSC RAS
- UPSC APFC

The architecture must also support additional examinations later.

The knowledge base should therefore distinguish:

### Universal knowledge

Knowledge useful regardless of examination.

### Exam-relevant knowledge

Knowledge specifically relevant to one or more examinations.

### Exam-specific emphasis

The same knowledge may receive different priority, depth or application
depending on the examination.

Never create contradictory duplicate versions of the same underlying
fact merely because different exams emphasize it differently.

------------------------------------------------------------------------

# 4. Cross-Domain Scope

The project is explicitly cross-domain and cross-subject.

Potential domains include:

- Indian Polity
- Governance
- History
- Geography
- Economy
- Banking
- Finance
- Social Security
- Labour
- Environment
- Science & Technology
- Biology
- Physics
- Chemistry
- International Relations
- Rajasthan-specific knowledge
- Current Affairs
- Society
- Ethics
- Psychology
- Statistics
- Quantitative reasoning
- other subjects as required

The system must remain extensible.

The domain taxonomy is organizational, not an intellectual prison.

------------------------------------------------------------------------

# 5. What “Comprehensive” Means

Comprehensive does **not** mean:

> Include everything that exists.

It means:

> **No important conceptual, factual, procedural, exception-based,
> comparative or exam-relevant dimension is silently omitted within the
> declared scope.**

Every large subject therefore needs an explicit **scope map**.

Example:

`INDIAN POLITY` → Constitution → Constitutional development → Preamble →
Fundamental Rights → DPSP → Fundamental Duties → Union Executive →
Parliament → Judiciary → Federalism → State Government → Local
Government → Constitutional Bodies → Statutory Bodies → Elections →
Emergency → Amendments → etc.

Each scope unit receives a processing/verification state.

The system must be able to answer:

> What have we covered?

> What remains?

> What was extracted but not yet verified?

> What has canonical notes?

> What has exam mapping?

------------------------------------------------------------------------

# 6. Coverage Is a First-Class Requirement

The system must never rely on the model’s memory of a large source to
determine completeness.

Every substantial source passes through:

`SOURCE → INVENTORY → COVERAGE UNITS → EXTRACTION → VALIDATION → SYNTHESIS`

A **Coverage Ledger** records:

- source
- source section/unit
- page or location where available
- extracted status
- verification status
- canonical mapping
- unresolved issues
- reviewer status

This prevents silent omission.

A source can only be called “fully processed” when its coverage ledger
supports that claim.

------------------------------------------------------------------------

# 7. Knowledge Hierarchy

The core hierarchy is:

`DOMAIN → SUBJECT → TOPIC → CONCEPT → CLAIM → EVIDENCE`

### Domain

Broad intellectual area.

### Subject

A coherent examination or learning subject.

### Topic

Major subdivision of a subject.

### Concept

A meaningful unit of understanding.

### Claim

An individually meaningful factual, causal, interpretive or procedural
statement.

### Evidence

The source material supporting the claim.

This hierarchy is supplemented by:

`CONCEPT → CONNECTIONS`

and:

`CONCEPT → QUESTIONS`

and:

`CONCEPT → EXAM RELEVANCE`

and:

`CONCEPT → REVISION UNITS`

------------------------------------------------------------------------

# 8. Canonical Knowledge

Canonical knowledge is the trusted representation of what the system
currently accepts as the best-supported understanding.

It should preserve: - factual accuracy - qualifications - exceptions -
competing interpretations where relevant - source provenance -
uncertainty - temporal validity

Canonical does not mean infallible.

It means:

> reviewed, supported and suitable for downstream learning material.

------------------------------------------------------------------------

# 9. Source Architecture

Sources are first-class entities.

Supported sources may include:

- textbooks
- academic books
- research papers
- official government documents
- legislation
- regulations
- committee reports
- court judgments
- official statistics
- institutional publications
- lectures
- videos
- articles
- datasets
- coaching material

Source metadata should include where available:

- title
- author
- publisher/institution
- publication date
- edition
- URL
- document identifier
- source type
- authority level
- date relevance
- description

Never fabricate source metadata.

------------------------------------------------------------------------

# 10. Source Authority

Sources should have an authority/reliability classification appropriate
to the subject.

For example:

### Tier A — Primary / authoritative

- Constitution
- Acts
- official regulations
- government notifications
- Supreme Court judgments
- official statistical releases
- official institutional publications

### Tier B — Scholarly secondary

- peer-reviewed research
- academic textbooks
- established scholarly works

### Tier C — High-quality educational secondary

- reputable coaching material
- institutional teaching material
- established reference works

### Tier D — Discovery material

- blogs
- informal explanations
- forums
- unsourced summaries

Lower-tier sources can help discover questions but should not silently
override stronger evidence.

Authority is subject-dependent.

------------------------------------------------------------------------

# 11. Ingestion Pipeline

The ingestion system should never directly turn a raw source into
polished notes.

Required stages:

## Stage 1 — Acquisition

Register the source.

## Stage 2 — Structural extraction

Identify: - chapters - headings - sections - tables - figures - lists -
appendices - footnotes - references

## Stage 3 — Coverage inventory

Convert source structure into trackable coverage units.

## Stage 4 — Atomic extraction

Extract factual/meaningful units without premature summarization.

## Stage 5 — Evidence attachment

Preserve where each extracted unit came from.

## Stage 6 — Reconciliation

Compare against existing knowledge and other sources.

Identify: - agreement - conflict - terminology differences - outdated
claims - missing context

## Stage 7 — Canonicalization

Create or update canonical knowledge.

## Stage 8 — Teaching transformation

Build explanations suited to the concept.

## Stage 9 — Exam mapping

Map to examinations.

## Stage 10 — Revision generation

Create appropriate retrieval layers.

## Stage 11 — Audit

Run independent quality checks.

## Stage 12 — Publication

Only sufficiently verified material becomes learner-facing canonical
content.

------------------------------------------------------------------------

# 12. AI-Human Division of Responsibility

AI is excellent at: - extraction - organization - comparison - candidate
synthesis - question generation - identifying potential connections -
detecting inconsistencies - producing alternative explanations -
generating revision candidates

AI must not be treated as automatically authoritative.

Human review remains necessary for: - disputed claims - important
factual corrections - high-stakes exam content - source conflicts -
ambiguous interpretation - final canonicalization of sensitive material

The system should expose uncertainty instead of hiding it.

------------------------------------------------------------------------

# 13. Flexible Teaching Architecture

There is deliberately **no universal six-layer concept template**.

A concept receives the explanatory components that actually improve
understanding.

Possible components:

- Core idea
- Question/puzzle
- Mental model
- Historical context
- Mechanism
- Causal chain
- Process
- Example
- Counterexample
- Experiment
- Evidence
- Comparison
- Formal model
- Mathematics
- Diagram
- Timeline
- Case study
- Application
- Limitations
- Misconceptions
- Debate
- Cross-domain connections
- Exam relevance
- Revision
- Self-test

The engine should choose an appropriate structure.

------------------------------------------------------------------------

# 14. First-Principles Requirement

First-principles reasoning means:

- identify the fundamental elements
- identify constraints
- identify causal mechanisms
- identify assumptions
- derive consequences
- identify boundary conditions

It does not mean mathematics.

Mathematics should only be included where it provides genuine
explanatory value.

------------------------------------------------------------------------

# 15. Mathematics Policy

Mathematics is optional.

Use equations when they: - express an important invariant - make
relationships precise - enable prediction - permit derivation - clarify
a quantitative model - reveal structure

Do not include equations merely because a concept page needs a
“Mathematics” section.

A polity concept may contain no mathematics.

A history concept may contain no mathematics.

A biology concept may or may not.

An economics concept may benefit from mathematics.

The subject determines the method.

------------------------------------------------------------------------

# 16. Explanation Quality

Every explanation should be optimized for:

1.  Accuracy
2.  Clarity
3.  Causal understanding
4.  Appropriate depth
5.  Beginner accessibility
6.  Technical precision
7.  Useful examples
8.  Boundary conditions
9.  Exam usefulness
10. Recall

Do not confuse length with quality.

A 500-word explanation can be superior to a 3,000-word explanation if it
preserves the necessary structure.

------------------------------------------------------------------------

# 17. Expert Audit System

The project requires an independent multi-dimensional audit.

At minimum:

### Subject-Matter Accuracy Audit

Is the material factually and technically correct?

### Source-Fidelity Audit

Does the source support the claim?

### Completeness Audit

Was relevant source material omitted?

### Reasoning Audit

Are causal relationships and mechanisms valid?

### Pedagogy Audit

Can a beginner understand it?

### Examination Audit

Could wording cause an exam error?

### Misconception Audit

Could the explanation create a false mental model?

### Compression Audit

Can unnecessary words be removed without losing meaning?

### Connection Audit

Are interdisciplinary connections real and useful?

### Revision Audit

Can important information be retrieved efficiently?

For high-value subjects, these should conceptually behave like a
**multi-expert editorial board**.

------------------------------------------------------------------------

# 18. Claim-Level Provenance

The visible notes should remain readable.

Therefore, provenance need not appear after every sentence.

But internally, important claims should be traceable to:

- source
- source location
- evidence
- verification state
- reviewer
- review date
- confidence/authority where appropriate

This gives:

**clean reading + forensic traceability.**

------------------------------------------------------------------------

# 19. Cross-Domain Knowledge Graph

Connections are first-class knowledge.

Possible types:

- DIRECT_PHYSICAL_CONNECTION
- CAUSAL_CONNECTION
- MATHEMATICAL_CONNECTION
- STRUCTURAL_ANALOGY
- SHARED_PRINCIPLE
- APPLICATION
- CONTRAST

Each connection should contain an explanation.

Never create a connection merely because two concepts share a keyword.

Never equate analogy with identity.

Never equate mathematical similarity with physical identity.

Never equate correlation with causation.

------------------------------------------------------------------------

# 20. Exam Intelligence Layer

Every concept can have exam metadata.

Possible fields:

- examination
- syllabus area
- relevance
- priority
- factual importance
- conceptual importance
- likely question forms
- PYQ relationship
- common traps
- required depth
- revision frequency
- current-affairs sensitivity

The same concept can have different exam profiles.

------------------------------------------------------------------------

# 21. Learning Depths

The system must support different reading situations.

### 30-second recall

Absolute essentials.

### Rapid revision

High-yield compressed material.

### Standard learning

Complete exam-oriented explanation.

### Deep understanding

Mechanisms, examples, context and nuance.

### Reference

Detailed evidence, source context and advanced material.

### Application

PYQs, scenarios and reasoning problems.

This allows:

`LEARN DEEPLY ONCE → REVISE QUICKLY MANY TIMES`

------------------------------------------------------------------------

# 22. Revision Engine

Revision is not an afterthought.

It should generate appropriate retrieval material such as:

- one-minute revision
- five-minute revision
- short notes
- comparison tables
- mnemonics
- memory hooks
- common traps
- active recall
- fill-in-the-gap questions
- true/false discrimination
- PYQ-linked revision
- application questions

Mnemonics are allowed but must not distort the underlying knowledge.

Do not manufacture mnemonics for information that is easier to
understand naturally.

------------------------------------------------------------------------

# 23. Exam Question Engine

Questions should test:

- recall
- discrimination
- conceptual understanding
- causal reasoning
- application
- exceptions
- comparisons
- sequence
- source interpretation
- numerical reasoning where relevant

Avoid trivia unless the examination actually rewards it.

Questions should link back to the underlying knowledge objects.

------------------------------------------------------------------------

# 24. Previous-Year Questions

PYQs should not merely be stored as a question bank.

They should be mapped to:

`QUESTION → CONCEPT → TOPIC → SUBJECT → EXAM`

This enables:

> What concepts are repeatedly tested?

> How does this exam test this concept?

> Which parts of the knowledge are high-value?

> What misconceptions do examiners exploit?

PYQs therefore become **evidence about examination behavior**.

------------------------------------------------------------------------

# 25. Priority Model

Not all information deserves equal study time.

Knowledge should eventually receive a priority score based on factors
such as:

- exam frequency
- conceptual centrality
- prerequisite importance
- recurrence
- current relevance
- difficulty
- confusion risk
- downstream connections

This allows the system to distinguish:

**must know → should know → useful → reference**

The goal is maximum learning efficiency, not maximum reading time.

------------------------------------------------------------------------

# 26. Beginner-to-Expert Progression

The user may begin as a beginner in a subject.

The system should not assume expertise.

But it should not remain permanently beginner-level.

A good learning path is:

`ORIENTATION → INTUITION → MECHANISM → STRUCTURE → APPLICATION → EXAMINATION → DEPTH`

The reader should gradually become capable of reconstructing the subject
independently.

------------------------------------------------------------------------

# 27. The Gold-Standard Benchmark

The first serious subject should be **Indian Polity**.

Why:

- large source volume
- precise constitutional language
- article-level completeness
- amendments
- exceptions
- judicial interpretation
- conceptual understanding
- factual recall
- comparisons
- current relevance
- multiple examinations
- revision requirements
- PYQs

If the system can produce genuinely excellent polity material, the
architecture will have passed a difficult test.

The same architecture can then expand to other subjects.

------------------------------------------------------------------------

# 28. UI Philosophy

The interface should feel like:

**a serious personal library + laboratory + textbook + revision
system.**

It should be: - calm - scholarly - highly readable - restrained -
responsive - information-rich - easy to navigate

Avoid: - generic SaaS dashboards - excessive cards - unnecessary
animations - gamification for its own sake - visual noise - giant walls
of text - decorative complexity

The UI exists to support learning.

------------------------------------------------------------------------

# 29. Homepage

The homepage should answer:

> What is this system?

> What am I learning?

> What should I continue?

> What have I recently developed?

> What important connections exist?

> What questions remain?

Possible sections: - identity/thesis - current learning - Master
Library - recent concepts - connections - questions - revision entry
points

Every section must earn its space.

------------------------------------------------------------------------

# 30. Concept Page

The concept page is the central reading experience.

It should support: - clear introduction - appropriate teaching
sequence - deeper exploration - evidence - connections - related
questions - exam relevance - revision - self-testing - prerequisites -
related concepts

The page structure should adapt to the concept.

------------------------------------------------------------------------

# 31. Search

Search should operate across:

- concepts
- subjects
- topics
- chapters
- sources
- questions
- connections
- claims where useful

Search should help locate understanding, not merely files.

------------------------------------------------------------------------

# 32. Technical Architecture

The technical system should separate:

### Knowledge layer

Database models and relationships.

### Data Access Layer

All application data access.

### Processing layer

Ingestion, extraction, reconciliation, auditing.

### Content layer

Educational representations.

### Examination layer

Exam-specific views and mappings.

### Presentation layer

Web UI.

Do not make page components responsible for knowledge logic.

------------------------------------------------------------------------

# 33. Core Data Objects

At minimum:

### Domain

- name
- slug
- description

### Subject

- domain
- name
- slug
- scope
- status

### Topic

- subject
- title
- order
- scope

### Concept

- topic
- title
- slug
- difficulty
- status
- content blocks
- order

### Claim

- concept
- statement
- type
- confidence
- status

### Source

- metadata
- authority
- provenance

### Evidence

- source
- location
- excerpt/representation
- claim

### Connection

- source concept
- target concept
- type
- explanation
- strength

### Exam

- name
- syllabus

### ExamConceptMapping

- exam
- concept
- relevance
- priority
- expected depth

### RevisionUnit

- concept/topic
- format
- priority
- content

### Question

- question
- answer
- explanation
- concept
- exam
- type

### CoverageUnit

- source
- location
- status
- canonical mapping

### IngestionItem

- raw input
- extraction
- status
- review

### Audit

- target
- audit type
- finding
- severity
- resolution

The exact schema may evolve after implementation design.

------------------------------------------------------------------------

# 34. Quality Gates

A feature or content unit is not complete merely because it compiles.

For technical work:

- type-check
- lint
- build
- route verification
- error verification

For content:

- source coverage
- factual audit
- provenance
- conceptual audit
- pedagogical audit
- exam audit
- revision audit

For UI:

- actual rendered inspection
- responsive inspection
- typography
- spacing
- overflow
- navigation
- accessibility

------------------------------------------------------------------------

# 35. Development Phases

## Phase 0 — Specification

Skill + Master Specification + architecture decisions.

## Phase 1 — Technical Foundation

New repository, application skeleton, database, DAL, processing
foundations, quality tooling.

## Phase 2 — Knowledge Model

Domain → Subject → Topic → Concept → Claim → Evidence plus exams and
coverage.

## Phase 3 — Ingestion Engine

Source registration, structural extraction, coverage ledger, atomic
extraction and review workflow.

## Phase 4 — Canonical Knowledge Engine

Reconciliation, canonicalization, provenance and versioning.

## Phase 5 — Learning Engine

Flexible explanations, examples, comparisons, misconceptions, revision
and self-test.

## Phase 6 — Examination Engine

Exam mappings, priorities, PYQs, question generation and revision views.

## Phase 7 — Cross-Domain Graph

Connections, relationships, exploration and structural discovery.

## Phase 8 — Reading Interface

Homepage, subjects, topics, concept pages, source pages, revision
interface.

## Phase 9 — Gold-Standard Polity

Build and audit a small but exceptional section.

## Phase 10 — Expansion

Scale to remaining target subjects and examinations.

## Phase 11 — Full Audit

Technical, educational, factual, provenance, UX, accessibility and
performance audit.

------------------------------------------------------------------------

# 36. What We Must NOT Do

Never:

- dump an entire PDF into one synthesis prompt and call it comprehensive
- assume a long answer is complete
- force every concept into a universal template
- force mathematics into non-mathematical subjects
- fabricate citations
- create fake interdisciplinary connections
- create duplicate knowledge bases for every exam
- mass-generate shallow notes
- publish unreviewed AI extraction as canonical
- confuse recognition with understanding
- confuse coverage with mastery
- confuse memorization with understanding
- confuse beautiful UI with quality
- declare completion because build commands passed

------------------------------------------------------------------------

# 37. Failure Modes We Are Explicitly Designing Against

### Silent omission

Solved by coverage ledger.

### Hallucinated facts

Solved by evidence/provenance and audit.

### Over-compression

Solved by canonical claims and multi-depth learning.

### Source contradictions

Solved by reconciliation.

### Duplicate notes

Solved by canonical knowledge + exam views.

### Shallow explanations

Solved by pedagogical audit.

### Overly academic explanations

Solved by beginner-first teaching and depth control.

### Mathematics everywhere

Solved by flexible concept architecture.

### Fake connections

Solved by typed, justified relationships.

### Revision overload

Solved by priority and layered revision.

### Exam-only memorization

Solved by understanding + application.

### Encyclopedia without exam utility

Solved by exam mapping.

### Exam notes without durable understanding

Solved by canonical knowledge.

### Beautiful but useless interface

Solved by reading-first design and visual QA.

------------------------------------------------------------------------

# 38. Definition of “Excellent”

A subject is excellent when:

### Coverage

The declared scope has no unexplained major omissions.

### Accuracy

Claims survive subject-matter review.

### Traceability

Important claims can be traced to evidence.

### Understanding

A beginner can develop an accurate mental model.

### Depth

Advanced nuance is available without overwhelming the beginner.

### Connections

Important relationships are discoverable and defensible.

### Examination

The material reflects actual exam requirements and question patterns.

### Revision

The learner can revisit it efficiently.

### Application

The learner can answer unfamiliar questions using the knowledge.

### Retention

The structure supports retrieval rather than passive rereading.

### Maintainability

New evidence can update the knowledge without rebuilding everything from
scratch.

------------------------------------------------------------------------

# 39. The Ultimate Success Metric

The product should eventually make the learner feel:

> **“I don’t just have notes about this anymore. I understand what it
> is, why it works, how the pieces fit together, how an examiner can
> test it, what I am likely to confuse, and how to reconstruct it when I
> forget.”**

The system succeeds when it reduces the amount of time required to reach
that state.

------------------------------------------------------------------------

# 40. Final Product Model

The final architecture can be summarized as:

``` text
                    AUTHORITATIVE SOURCES
                           │
                           ▼
                    SOURCE INVENTORY
                           │
                           ▼
                    COVERAGE LEDGER
                           │
                           ▼
                    ATOMIC KNOWLEDGE
                    /      │                          /       │                     CLAIMS     EVIDENCE   QUESTIONS
                   \       │        /
                    \      │       /
                     ▼     ▼      ▼
                    CANONICAL KNOWLEDGE
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
       UNDERSTANDING   CONNECTIONS    EXAM MAPPING
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                    LEARNING ENGINE
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
          LEARN          REVISE        APPLY
             │             │             │
        Explanations    Recall       PYQs
        Examples        Mnemonics    Questions
        Mechanisms      Traps        Scenarios
             └─────────────┼─────────────┘
                           ▼
                         AUDIT
                           │
                           ▼
                     TRUSTED KNOWLEDGE
                           │
                           ▼
                    BETTER LEARNING
```

**The UI is the final expression of this system, not the system
itself.**

The database is infrastructure.

The AI is a worker.

The sources are evidence.

The knowledge graph is structure.

The learning engine is pedagogy.

The examination layer is application.

**The actual product is better understanding per unit of the user’s
limited time.**
