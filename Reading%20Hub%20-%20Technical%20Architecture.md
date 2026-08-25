# READING HUB — TECHNICAL & KNOWLEDGE ARCHITECTURE

## Version 1.0 — Design Before Implementation

This document converts the master philosophy in `Reading Hub.md` into an
implementation blueprint.

It is deliberately **architecture-first**.

No application code, database migration, or UI should be considered
final until this model has been reviewed.

------------------------------------------------------------------------

# 1. Architectural Principle

Reading Hub is not a document repository.

It is a **knowledge transformation system**.

The architecture must therefore preserve the distinction between:

1.  **What the source says**
2.  **What was extracted from the source**
3.  **What Reading Hub currently accepts as canonical knowledge**
4.  **How that knowledge is taught**
5.  **How that knowledge is used by an examination**
6.  **How that knowledge is revised**
7.  **How that knowledge is tested**
8.  **How confident we are that it is correct and complete**

These layers must not be collapsed into one giant `notes` table or one
giant AI-generated document.

------------------------------------------------------------------------

# 2. High-Level Architecture

``` text
                         ┌──────────────────────┐
                         │      SOURCES         │
                         │ PDFs / Books / Acts  │
                         │ Papers / Videos etc. │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ SOURCE STRUCTURE     │
                         │ sections / pages /   │
                         │ headings / tables    │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ COVERAGE LEDGER       │
                         │ what exists / what   │
                         │ was processed        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ ATOMIC EXTRACTION    │
                         │ claims / definitions │
                         │ facts / procedures   │
                         └──────────┬───────────┘
                                    │
                         ┌──────────┴───────────┐
                         ▼                      ▼
                  ┌─────────────┐       ┌─────────────┐
                  │  EVIDENCE   │       │   ISSUES    │
                  │ provenance  │       │ conflicts   │
                  └──────┬──────┘       │ omissions   │
                         │              └──────┬──────┘
                         └──────────┬──────────┘
                                    ▼
                         ┌──────────────────────┐
                         │ RECONCILIATION       │
                         │ compare / resolve /  │
                         │ qualify              │
                         └──────────┬───────────┘
                                    ▼
                         ┌──────────────────────┐
                         │ CANONICAL KNOWLEDGE  │
                         │ Domain → Subject →   │
                         │ Topic → Concept →    │
                         │ Claim                │
                         └──────────┬───────────┘
                                    │
               ┌────────────────────┼────────────────────┐
               ▼                    ▼                    ▼
       ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
       │ EXPLANATION  │     │ CONNECTIONS  │     │ EXAM MAPPING │
       │ teaching     │     │ graph        │     │ exam lenses  │
       └──────┬───────┘     └──────────────┘     └──────┬───────┘
              │                                         │
              └──────────────────┬──────────────────────┘
                                 ▼
                      ┌──────────────────────┐
                      │ LEARNING MATERIAL    │
                      │ Learn / Revise /     │
                      │ Apply                │
                      └──────────┬───────────┘
                                 ▼
                      ┌──────────────────────┐
                      │ AUDIT & FEEDBACK     │
                      │ accuracy / coverage  │
                      │ pedagogy / exam      │
                      └──────────┬───────────┘
                                 │
                                 └──────► update knowledge
```

------------------------------------------------------------------------

# 3. The Most Important Separation

The system must maintain four distinct levels.

## Level A — Source truth

Example:

> A Constitution PDF states a particular provision.

This is source material.

## Level B — Extracted claim

Example:

> Article X provides Y under conditions Z.

This is an extracted claim linked to source evidence.

## Level C — Canonical knowledge

Reading Hub decides:

> This claim is accepted as part of the current canonical
> representation.

This can include qualification, reconciliation and multiple sources.

## Level D — Teaching representation

The learner sees:

> A clear explanation, example, comparison, diagram, trap and revision
> unit.

These four things are related but are **not the same object**.

This separation is the primary defence against the earlier “dump PDF →
messy notes” failure.

------------------------------------------------------------------------

# 4. Knowledge Hierarchy

The canonical knowledge tree is:

``` text
DOMAIN
  └── SUBJECT
       └── TOPIC
            └── CONCEPT
                 ├── CLAIM
                 │    └── EVIDENCE
                 ├── EXPLANATION
                 ├── CONNECTION
                 ├── EXAM MAPPING
                 ├── REVISION UNIT
                 └── QUESTION
```

Important:

A `Concept` is not a paragraph.

A `Concept` is a stable unit of understanding.

A `Claim` is a meaningful proposition within that concept.

------------------------------------------------------------------------

# 5. Domain

A broad intellectual grouping.

Examples:

- Governance
- Economy
- Science
- Society
- History

Suggested fields:

``` text
id
slug
name
description
status
order
createdAt
updatedAt
```

A domain should not contain detailed content itself.

------------------------------------------------------------------------

# 6. Subject

A coherent subject.

Examples:

- Indian Polity
- Indian Economy
- Modern Indian History
- Labour & Social Security
- Banking

Fields:

``` text
id
domainId
slug
name
description
scopeStatement
status
order
createdAt
updatedAt
```

`scopeStatement` is important.

It defines what the subject intends to cover.

------------------------------------------------------------------------

# 7. Topic

A major subdivision of a subject.

Example:

``` text
Indian Polity
  ├── Constitutional Framework
  ├── Fundamental Rights
  ├── Parliament
  ├── Union Executive
  └── Judiciary
```

Fields:

``` text
id
subjectId
slug
title
description
scope
order
status
```

Topics may contain prerequisites and relationships later.

------------------------------------------------------------------------

# 8. Concept

The central learning object.

A concept should represent something the learner can understand,
explain, apply or recall.

Examples:

- Fundamental Rights
- Judicial Review
- Money Multiplier
- Fiscal Deficit
- Separation of Powers

Fields:

``` text
id
topicId
slug
title
shortDefinition
status
difficulty
order
createdAt
updatedAt
```

Potential statuses:

``` text
DRAFT
IN_REVIEW
CANONICAL
NEEDS_UPDATE
ARCHIVED
```

Do not store the entire teaching content as one giant text blob.

------------------------------------------------------------------------

# 9. Claims

A claim is a meaningful proposition.

Examples:

> The President of India is the constitutional head of the Union.

> Fundamental Rights are enforceable by courts subject to constitutional
> limitations.

A claim should have:

``` text
id
conceptId
statement
claimType
importance
status
confidence
validFrom
validTo
createdAt
updatedAt
```

Possible claim types:

``` text
FACT
DEFINITION
RULE
EXCEPTION
CAUSE
EFFECT
PROCESS
COMPARISON
INTERPRETATION
STATISTICAL
HISTORICAL
LEGAL
PROCEDURAL
```

The taxonomy can evolve.

------------------------------------------------------------------------

# 10. Why Claims Matter

Claims solve a major problem.

A 2,000-word note is difficult to audit.

A set of 80 meaningful claims can be:

- checked
- sourced
- compared
- updated
- marked outdated
- mapped to questions
- mapped to revision
- traced to pages in a source

This creates **auditability**.

------------------------------------------------------------------------

# 11. Evidence

Evidence connects claims to sources.

A claim may have:

- one supporting source
- multiple independent sources
- conflicting sources
- a primary source plus explanatory sources

Evidence should include:

``` text
id
claimId
sourceId
sourceLocation
pageNumber
section
excerpt
evidenceType
authority
notes
createdAt
```

Do not assume every source needs a literal excerpt.

For large structured sources, a precise location may be enough.

------------------------------------------------------------------------

# 12. Sources

A source represents the underlying material.

Fields:

``` text
id
title
author
publisher
sourceType
url
publicationDate
edition
identifier
authorityTier
description
language
createdAt
updatedAt
```

Potential `sourceType`:

``` text
BOOK
TEXTBOOK
LAW
REGULATION
GOVERNMENT_DOCUMENT
REPORT
JUDGMENT
PAPER
LECTURE
VIDEO
ARTICLE
COACHING
DATASET
OTHER
```

Never invent missing metadata.

------------------------------------------------------------------------

# 13. Source Locations

For large sources, provenance should not be stored only as free text.

Create a source-location abstraction where useful.

Example:

``` text
Source
  └── SourceSection
       ├── Chapter 1
       ├── Chapter 2
       └── Article 14
```

Possible fields:

``` text
id
sourceId
parentId
title
sectionType
pageStart
pageEnd
locator
order
```

This allows:

> Claim → Evidence → Article 14 → Constitution source

instead of:

> Claim → “somewhere in PDF”

------------------------------------------------------------------------

# 14. Coverage Ledger

This is one of the most important objects in the entire system.

A `CoverageUnit` represents a portion of a source that must be accounted
for.

Fields:

``` text
id
sourceId
sourceSectionId
label
order
status
extractionStatus
verificationStatus
canonicalMappingStatus
notes
```

Statuses can include:

``` text
UNPROCESSED
EXTRACTED
REVIEW_REQUIRED
MAPPED
VERIFIED
PUBLISHED
NOT_APPLICABLE
```

The system must make omission visible.

------------------------------------------------------------------------

# 15. Coverage Is Not the Same as Understanding

A source section can be:

**100% extracted**

but:

**0% properly understood.**

Therefore coverage and knowledge quality must remain separate.

Coverage answers:

> Did we account for the source?

Canonical knowledge answers:

> Did we turn the important material into reliable knowledge?

------------------------------------------------------------------------

# 16. Extraction Items

Raw AI extraction should never immediately become canonical.

Create an intermediate object:

``` text
IngestionItem
```

Fields:

``` text
id
sourceId
coverageUnitId
rawInput
extractedContent
status
createdAt
updatedAt
```

Possible states:

``` text
INBOX
PROCESSING
EXTRACTED
REVIEW
ACCEPTED
REJECTED
ARCHIVED
```

This creates a quarantine zone between AI processing and trusted
knowledge.

------------------------------------------------------------------------

# 17. Reconciliation

Different sources will disagree.

Never silently choose one.

Create a reconciliation process that identifies:

- agreement
- contradiction
- terminology difference
- scope difference
- date difference
- outdated information
- interpretation difference

Potential object:

``` text
KnowledgeIssue
```

Fields:

``` text
id
type
severity
description
status
createdAt
resolvedAt
```

Potential types:

``` text
CONFLICT
AMBIGUITY
OUTDATED
MISSING_CONTEXT
DUPLICATE
UNSUPPORTED
POTENTIAL_OMISSION
```

------------------------------------------------------------------------

# 18. Canonicalization

Canonicalization turns accepted evidence into trusted knowledge.

A canonical concept can contain multiple claims.

A claim can have multiple evidence records.

This means:

``` text
             SOURCE A ─┐
                       ├──► CLAIM
             SOURCE B ─┘      │
                              ▼
                         CONCEPT
```

The system must not copy entire source paragraphs into the canonical
layer.

Canonical knowledge is a synthesized representation.

------------------------------------------------------------------------

# 19. Teaching Content

Teaching content should be modular.

Avoid:

``` text
Concept.notes = "huge markdown document"
```

Prefer content blocks.

Example:

``` text
Concept
  ├── Core Idea
  ├── Why It Exists
  ├── Mechanism
  ├── Example
  ├── Exception
  ├── Comparison
  ├── Misconception
  ├── Diagram
  ├── Mathematical Model (optional)
  ├── Exam Relevance
  └── Revision
```

The exact blocks are selected per concept.

------------------------------------------------------------------------

# 20. Content Block Model

Potential structure:

``` text
ContentBlock

id
conceptId
type
title
body
order
visibility
```

Possible types:

``` text
CORE_IDEA
QUESTION
INTUITION
MECHANISM
PROCESS
EXAMPLE
COUNTEREXAMPLE
HISTORY
EVIDENCE
COMPARISON
TIMELINE
DIAGRAM
FORMAL_MODEL
MATHEMATICS
CASE_STUDY
APPLICATION
LIMITATION
MISCONCEPTION
DEBATE
EXAM_NOTE
SUMMARY
```

The list is extensible.

Do not implement every type on day one.

------------------------------------------------------------------------

# 21. Mathematics

Mathematics is simply another optional content block.

``` text
type = MATHEMATICS
```

No concept is required to have one.

The rendering system must therefore never assume:

> Every concept → Mathematics section.

------------------------------------------------------------------------

# 22. Exam Architecture

An `Exam` is independent of knowledge.

Examples:

``` text
IIBF DBF
RPSC RAS
UPSC APFC
```

Fields:

``` text
id
slug
name
description
status
```

An exam can have:

``` text
ExamSubject
ExamTopic
SyllabusUnit
```

where useful.

------------------------------------------------------------------------

# 23. ExamConceptMapping

A concept can map to many exams.

Fields:

``` text
id
examId
conceptId
relevance
priority
requiredDepth
questionStyle
notes
```

Potential relevance:

``` text
CORE
HIGH
MEDIUM
LOW
BACKGROUND
```

This is where examination lenses live.

The canonical concept remains shared.

------------------------------------------------------------------------

# 24. Exam-Specific Views

Example:

``` text
Canonical Concept:
"Fundamental Rights"
       │
       ├── RAS View
       ├── APFC View
       └── DBF View
```

These views should alter:

- emphasis
- depth
- revision priority
- question style

They should not create independent contradictory copies.

------------------------------------------------------------------------

# 25. Revision Units

Revision must be stored separately from full teaching content.

Examples:

- One-minute summary
- Five-minute revision
- Article list
- Comparison table
- Mnemonic
- Trap list
- Active recall
- Flashcard
- Quick facts

Potential fields:

``` text
id
conceptId
type
content
priority
order
examId nullable
```

Revision units can be exam-specific.

------------------------------------------------------------------------

# 26. Mnemonics

A mnemonic is a learning aid, not knowledge.

Therefore:

``` text
Concept
  └── RevisionUnit(type = MNEMONIC)
```

The canonical facts remain independent.

If the mnemonic is removed, the knowledge must still stand.

------------------------------------------------------------------------

# 27. Questions

Questions should link to knowledge.

Fields:

``` text
id
conceptId
examId
type
question
options
answer
explanation
difficulty
source
year
```

Potential question types:

``` text
MCQ
MULTIPLE_STATEMENT
MATCHING
ASSERTION_REASON
SHORT_ANSWER
DESCRIPTIVE
NUMERICAL
CASE_BASED
```

------------------------------------------------------------------------

# 28. PYQs

Previous-year questions should be identifiable as a source category.

Important fields:

``` text
exam
year
paper
questionNumber
question
answer
explanation
conceptMapping
```

The mapping is more valuable than simply storing the question.

------------------------------------------------------------------------

# 29. Connections

Connections are first-class objects.

Fields:

``` text
id
sourceConceptId
targetConceptId
type
strength
explanation
status
```

Types:

``` text
DIRECT_PHYSICAL_CONNECTION
CAUSAL_CONNECTION
MATHEMATICAL_CONNECTION
STRUCTURAL_ANALOGY
SHARED_PRINCIPLE
APPLICATION
CONTRAST
```

Every connection must have an explanation.

------------------------------------------------------------------------

# 30. Connection Quality Rule

A connection must answer:

> **Why should the learner care that these two things are connected?**

Bad:

> Democracy and ecosystems are both complex systems.

Good:

> Both can exhibit stability through distributed feedback rather than
> centralized control; however, the underlying mechanisms are different.

The second gives the learner a useful structure.

------------------------------------------------------------------------

# 31. Audit Architecture

Audits are first-class records.

Potential object:

``` text
Audit
```

Fields:

``` text
id
targetType
targetId
auditType
severity
finding
recommendation
status
reviewer
createdAt
resolvedAt
```

Audit types:

``` text
ACCURACY
SOURCE_FIDELITY
COMPLETENESS
REASONING
PEDAGOGY
EXAMINATION
MISCONCEPTION
COMPRESSION
CONNECTION
REVISION
```

Severity:

``` text
INFO
LOW
MEDIUM
HIGH
CRITICAL
```

------------------------------------------------------------------------

# 32. Versioning

Knowledge changes.

Especially:

- laws
- regulations
- schemes
- statistics
- current affairs
- policy
- scientific understanding

Do not overwrite history blindly.

At minimum, preserve:

- created date
- updated date
- validity period where relevant
- source publication date

More advanced versioning can be introduced after the core architecture
is stable.

------------------------------------------------------------------------

# 33. Temporal Knowledge

Some claims are time-sensitive.

Example:

> “The current statutory rate is X.”

That claim should not be treated like:

> “The Constitution was adopted on 26 November 1949.”

The model should eventually distinguish:

### Timeless / stable

### Historically bounded

### Current

### Periodically updated

This is essential for current affairs and law.

------------------------------------------------------------------------

# 34. Search Architecture

Search should index:

``` text
Domain
Subject
Topic
Concept
Claim
Source
Question
Connection
RevisionUnit
```

Search should support:

- exact search
- semantic search later
- subject filtering
- exam filtering
- content-type filtering
- priority filtering

Start simple.

Do not prematurely build a sophisticated AI search system.

------------------------------------------------------------------------

# 35. Data Access Layer

Application pages should never directly manipulate the database.

Use:

``` text
UI
 ↓
service / DAL
 ↓
database
```

Examples:

``` text
getSubject()
getTopic()
getConcept()
getConceptClaims()
getConceptEvidence()
getExamMappings()
getRevisionUnits()
getQuestions()
getConnections()
getCoverageStatus()
```

This keeps architecture replaceable.

------------------------------------------------------------------------

# 36. Processing Layer

Processing should be independent of UI.

Example:

``` text
processors/
  source-parser
  structure-extractor
  coverage-builder
  claim-extractor
  evidence-linker
  reconciler
  canonicalizer
  exam-mapper
  revision-generator
  question-generator
  auditor
```

Do not implement all of these immediately.

The architecture should permit them.

------------------------------------------------------------------------

# 37. Human Review Interface

The system should eventually provide review queues for:

- extracted claims
- conflicts
- missing coverage
- unsupported claims
- proposed connections
- proposed revisions
- proposed questions

A reviewer should be able to see:

``` text
SOURCE
   ↓
EXTRACTED CLAIM
   ↓
EVIDENCE
   ↓
CURRENT CANONICAL CLAIM
```

and approve, modify or reject.

------------------------------------------------------------------------

# 38. The Gold-Standard Polity Workflow

Polity should be the first major test.

Recommended sequence:

## Step 1

Create a complete Polity scope map.

## Step 2

Register authoritative sources.

## Step 3

Create source structure.

## Step 4

Build coverage ledger.

## Step 5

Extract atomic claims.

## Step 6

Attach evidence.

## Step 7

Reconcile sources.

## Step 8

Create canonical concepts.

## Step 9

Build teaching content.

## Step 10

Map examinations.

## Step 11

Map PYQs.

## Step 12

Create revision.

## Step 13

Run independent audits.

## Step 14

Publish.

Do not begin by writing a 300-page Polity note.

Build a **small, fully auditable vertical slice** first.

------------------------------------------------------------------------

# 39. Recommended First Vertical Slice

Instead of building the entire system and only then testing content
quality, implement one complete concept end-to-end.

Suggested benchmark:

**Fundamental Rights**

Pipeline:

``` text
Source
 ↓
Coverage
 ↓
Claims
 ↓
Evidence
 ↓
Canonical Concept
 ↓
Teaching Content
 ↓
Exam Mapping
 ↓
Revision
 ↓
PYQs
 ↓
Audit
 ↓
Reading UI
```

If this works exceptionally well, scale the architecture.

This prevents spending weeks building infrastructure around a flawed
knowledge model.

------------------------------------------------------------------------

# 40. Build Order

The actual engineering order should be:

### Stage A

Project foundation

### Stage B

Knowledge schema

### Stage C

Source + coverage subsystem

### Stage D

Claim + evidence subsystem

### Stage E

Canonical knowledge subsystem

### Stage F

One complete benchmark concept

### Stage G

Learning/revision/question subsystem

### Stage H

Exam mapping

### Stage I

Audit system

### Stage J

Search and connections

### Stage K

Full reading UI

This is intentionally different from building a large frontend first.

------------------------------------------------------------------------

# 41. MVP DEFINITION

The first meaningful MVP is **not**:

> “The website has many pages.”

It is:

> **One subject can be ingested, audited and transformed into genuinely
> excellent learning material without losing source coverage.**

The MVP must prove the knowledge pipeline.

------------------------------------------------------------------------

# 42. Definition of Done

A technical component is done when:

- implementation exists
- type-check passes
- lint passes
- build passes
- relevant runtime paths work
- errors are handled
- architecture is documented

A knowledge component is done when:

- scope is declared
- source coverage is accounted for
- important claims have evidence
- canonical representation exists
- explanation is pedagogically sound
- exam mapping exists where relevant
- revision exists
- appropriate questions exist
- audit findings are resolved

A UI component is done when:

- it renders correctly
- it is readable
- it works responsively
- it has appropriate hierarchy
- it does not compromise content
- it has been visually inspected

------------------------------------------------------------------------

# 43. Anti-Pattern: The Giant Notes Blob

Never build:

``` text
Subject
 └── notes.md
```

as the primary knowledge representation.

It may exist as an export.

It must not be the underlying system.

Instead:

``` text
Subject
 └── Topic
      └── Concept
           ├── Claims
           ├── Evidence
           ├── Teaching Blocks
           ├── Connections
           ├── Exam Maps
           ├── Revision
           └── Questions
```

------------------------------------------------------------------------

# 44. Anti-Pattern: AI as Final Authority

Never implement:

``` text
AI output → Published
```

Preferred:

``` text
AI output
   ↓
review
   ↓
evidence
   ↓
canonicalization
   ↓
audit
   ↓
published
```

For low-risk transformations, review can be lightweight.

For high-risk content, it must be stronger.

------------------------------------------------------------------------

# 45. Anti-Pattern: Source Replacement

A coaching PDF may be useful.

A coaching PDF must not automatically become the truth.

The system should preserve source identity and authority.

Multiple sources can contribute to one canonical concept.

------------------------------------------------------------------------

# 46. Anti-Pattern: Over-Engineering Too Early

Do not immediately implement:

- vector databases
- complex agents
- elaborate semantic graphs
- autonomous ingestion
- elaborate recommendation engines
- dozens of UI components

First prove:

**source → coverage → claims → evidence → canonical concept → learning →
exam → revision → audit**

Only then scale.

------------------------------------------------------------------------

# 47. First Technical Deliverables

Before the new application becomes large, create:

1.  `Reading Hub.md`
2.  `ARCHITECTURE.md`
3.  `README.md`
4.  database schema
5.  domain model types
6.  seed/test data
7.  validation utilities
8.  first vertical-slice implementation plan

No large UI should be built before these are coherent.

------------------------------------------------------------------------

# 48. Repository Structure — Initial Direction

A reasonable starting structure:

``` text
reading-hub/
├── app/
├── components/
├── lib/
│   ├── db/
│   ├── knowledge/
│   ├── ingestion/
│   ├── audit/
│   ├── exams/
│   ├── revision/
│   └── search/
├── prisma/
├── docs/
│   ├── ARCHITECTURE.md
│   └── decisions/
├── scripts/
├── tests/
├── public/
├── Reading Hub.md
├── README.md
├── package.json
└── ...
```

The exact framework and database can be selected after the requirements
are validated.

------------------------------------------------------------------------

# 49. Architecture Decision Rules

Whenever the agent proposes a technical choice, it should ask:

1.  Does this improve knowledge quality?
2.  Does this preserve provenance?
3.  Does this prevent omission?
4.  Does this make future updating easier?
5.  Does this improve learning efficiency?
6.  Does this support multiple exams without duplication?
7.  Is the complexity justified?

If not, do not add the complexity.

------------------------------------------------------------------------

# 50. Final Architectural Principle

The project should be built in this order of importance:

``` text
KNOWLEDGE QUALITY
      ↓
TRACEABILITY
      ↓
LEARNING QUALITY
      ↓
EXAM UTILITY
      ↓
REVISION EFFICIENCY
      ↓
USER EXPERIENCE
      ↓
VISUAL POLISH
```

Visual quality matters.

But a beautiful page containing incomplete or unreliable knowledge is a
failure.

------------------------------------------------------------------------

# 51. Final System Model

``` text
                 ┌─────────────────────────┐
                 │       SOURCES           │
                 └────────────┬────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │   COVERAGE / INVENTORY  │
                 └────────────┬────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │   ATOMIC EXTRACTION     │
                 └────────────┬────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │ CLAIMS + EVIDENCE       │
                 └────────────┬────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │ RECONCILIATION / AUDIT  │
                 └────────────┬────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │ CANONICAL KNOWLEDGE     │
                 │ Domain → Subject →      │
                 │ Topic → Concept         │
                 └────────────┬────────────┘
                              │
              ┌───────────────┼────────────────┐
              ▼               ▼                ▼
        ┌──────────┐    ┌───────────┐    ┌───────────┐
        │ TEACHING │    │ CONNECTION│    │ EXAM LENS │
        └────┬─────┘    └───────────┘    └─────┬─────┘
             │                                  │
             └────────────────┬─────────────────┘
                              ▼
                    ┌──────────────────┐
                    │ LEARNING SYSTEM  │
                    │ Learn / Revise / │
                    │ Apply            │
                    └────────┬─────────┘
                             ▼
                    ┌──────────────────┐
                    │ FINAL AUDIT      │
                    └────────┬─────────┘
                             ▼
                    ┌──────────────────┐
                    │ TRUSTED READING  │
                    │ HUB KNOWLEDGE    │
                    └──────────────────┘
```

**The database is infrastructure.**

**The AI is a worker.**

**The sources are evidence.**

**The knowledge model is the structure.**

**The learning engine is pedagogy.**

**The examination layer is application.**

**The audit system protects trust.**

**The interface is how the learner experiences the result.**

And the ultimate metric remains:

> **How much genuine understanding, recall and exam capability does the
> learner gain per unit of limited study time?**
