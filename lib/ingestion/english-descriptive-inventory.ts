/**
 * READING HUB — ENGLISH DESCRIPTIVE WRITING SOURCE INVENTORY & CLASSIFICATION LEDGER
 *
 * Enforces the Zero Unaccounted-For Source Omission Principle for:
 *   - English_Descriptive_Writing_Master.md (20 Master Notes)
 */

export interface SourceUnitRecord {
  noteIndex: number;
  sourceId: string;
  sourceTitle: string;
  classification:
    | 'CORE_WRITING_PRINCIPLE'
    | 'WRITING_TECHNIQUE'
    | 'ESSAY_ARGUMENTATION'
    | 'PRECIS'
    | 'LETTER_FORMAL_WRITING'
    | 'REPORT_OTHER_FORMAT'
    | 'INTRODUCTION_CONCLUSION'
    | 'STRUCTURE_COHERENCE'
    | 'EXAMPLES'
    | 'PRACTICE_EXERCISE'
    | 'EXAM_STRATEGY'
    | 'REVISION_QUICK_REFERENCE'
    | 'DUPLICATE'
    | 'WEAK_INCORRECT'
    | 'OUTDATED_EXAM_MATERIAL'
    | 'LOW_VALUE_FILLER';
  canonicalConceptTarget?: string;
  status: 'MIGRATED' | 'CONSOLIDATED' | 'REJECTED' | 'EXCLUDED_FILLER';
  epistemicAction: string;
}

export const ENGLISH_SOURCE_INVENTORY_LEDGER: SourceUnitRecord[] = [
  {
    noteIndex: 1,
    sourceId: 'eng-50-model-essays-bank-po-rbi',
    sourceTitle: '50 High-Yield Model Essay Blueprints (Bank PO, RBI & NABARD)',
    classification: 'ESSAY_ARGUMENTATION',
    canonicalConceptTarget: 'CON-ENG-05 / CON-ENG-13',
    status: 'CONSOLIDATED',
    epistemicAction: 'Extracted high-yield thematic clusters (FinTech, ESG, Agri, Fiscal, Social) and consolidated outlines with canonical model essays in Topic 58 and 61.',
  },
  {
    noteIndex: 2,
    sourceId: 'migrated-eng-ch-4',
    sourceTitle: '120 Golden Grammar Rules & Error Spotting Diagnostic Suite',
    classification: 'CORE_WRITING_PRINCIPLE',
    canonicalConceptTarget: 'CON-ENG-02',
    status: 'CONSOLIDATED',
    epistemicAction: 'Filtered out bulk objective MCQ drills; preserved and consolidated core descriptive syntax rules (Subject-Verb, Subjunctive, Parallelism, Dangling Modifiers, Zero Contractions) into CON-ENG-02.',
  },
  {
    noteIndex: 3,
    sourceId: 'bank-po-descriptive-precis-rc-vault',
    sourceTitle: 'Bank PO Rapid Précis Writing & Subjective RC Benchmark Vault',
    classification: 'PRECIS',
    canonicalConceptTarget: 'CON-ENG-08 / CON-ENG-09',
    status: 'MIGRATED',
    epistemicAction: 'Migrated 1/3rd compression walkthroughs and 2-sentence non-verbatim subjective RC models (ECL, Micro-insurance) into Topics 59.',
  },
  {
    noteIndex: 4,
    sourceId: 'bank-po-descriptive-model-essays-vault',
    sourceTitle: 'Bank PO Top 1% Benchmark Essays Vault (SBI PO & IBPS PO Mains)',
    classification: 'EXAMPLES',
    canonicalConceptTarget: 'CON-ENG-13',
    status: 'MIGRATED',
    epistemicAction: 'Migrated curated 250-word model essays (Bima Sugam, Silver Economy, ULI, Deepfakes, CBDC, Green Finance) with "Why It Works" annotations into CON-ENG-13.',
  },
  {
    noteIndex: 5,
    sourceId: 'bank-po-descriptive-letters-emails-memos-vault',
    sourceTitle: 'Bank PO Workplace Letters, Official Emails & Incident Memos Vault',
    classification: 'LETTER_FORMAL_WRITING',
    canonicalConceptTarget: 'CON-ENG-10 / CON-ENG-11 / CON-ENG-12 / CON-ENG-14',
    status: 'MIGRATED',
    epistemicAction: 'Migrated Modern Full-Block letters (Ombudsman, Branch Manager), official workplace emails (CPC SLA escalation, Forex AMC fee conciliation), and situation memos (ATM skimming, CBS outage).',
  },
  {
    noteIndex: 6,
    sourceId: 'descriptive-writing-masterbook-tier1-blueprints',
    sourceTitle: 'Descriptive Writing Masterbook — Tier 1: Exam Blueprints & Scoring Rubrics',
    classification: 'CORE_WRITING_PRINCIPLE',
    canonicalConceptTarget: 'CON-ENG-01 / CON-ENG-15',
    status: 'MIGRATED',
    epistemicAction: 'Migrated directive decoding (Discuss, Critically Analyze, Examine), 30/60/90-min clock splits, and labeled 5-D weightage as a coaching self-audit heuristic.',
  },
  {
    noteIndex: 7,
    sourceId: 'descriptive-writing-masterbook-tier2-discourse',
    sourceTitle: 'Descriptive Writing Masterbook — Tier 2: Discourse Mechanics & Structural Mastery',
    classification: 'STRUCTURE_COHERENCE',
    canonicalConceptTarget: 'CON-ENG-02 / CON-ENG-03 / CON-ENG-06',
    status: 'MIGRATED',
    epistemicAction: 'Migrated PEEL paragraph architecture, Tri-Sentence syntax variety, Academic Hedging, Balanced Dissent, and visual scannability into Topic 57.',
  },
  {
    noteIndex: 8,
    sourceId: 'descriptive-writing-masterbook-tier3-components',
    sourceTitle: 'Descriptive Writing Masterbook — Tier 3: Component-Wise Masterclasses',
    classification: 'WRITING_TECHNIQUE',
    canonicalConceptTarget: 'CON-ENG-04 / CON-ENG-05 / CON-ENG-08 / CON-ENG-09 / CON-ENG-10 / CON-ENG-11 / CON-ENG-12',
    status: 'MIGRATED',
    epistemicAction: 'Migrated C.A.S.H. and PESTLE-S deconstruction, 5 Golden Précis Taboos, 3-Step Paraphrase Engine, and NABARD administrative report layouts across Topics 58–60.',
  },
  {
    noteIndex: 9,
    sourceId: 'descriptive-writing-masterbook-tier4-fodder',
    sourceTitle: 'Descriptive Writing Masterbook — Tier 4: Thematic Essay Fodder & PYQ Dossiers',
    classification: 'ESSAY_ARGUMENTATION',
    canonicalConceptTarget: 'CON-ENG-05 / CON-ENG-07 / CON-ENG-13',
    status: 'CONSOLIDATED',
    epistemicAction: 'Consolidated domain dossiers (Macro, DPI, Poverty, Climate, Corporate Governance) into multi-dimensional argumentation models in Topic 58 and benchmark essays in Topic 61.',
  },
  {
    noteIndex: 10,
    sourceId: 'descriptive-writing-masterbook-tier5-value-additions',
    sourceTitle: 'Descriptive Writing Masterbook — Tier 5: Arsenal of Value Additions & F.A.C.T.S. Vault',
    classification: 'REVISION_QUICK_REFERENCE',
    canonicalConceptTarget: 'CON-ENG-06 / CON-ENG-14 / CON-ENG-15',
    status: 'CONSOLIDATED',
    epistemicAction: 'Preserved F.A.C.T.S. pre-submission checklist, Conversational-to-Policy register conversions, and quote-to-policy bridges while rejecting formulaic plug-and-play boilerplate.',
  },
  {
    noteIndex: 11,
    sourceId: 'descriptive-writing-sources-bibliography',
    sourceTitle: 'Descriptive Writing Sources, Syllabus Framework & Pedagogical Bibliography',
    classification: 'EXAM_STRATEGY',
    canonicalConceptTarget: 'N/A (Metacontent / Provenance)',
    status: 'MIGRATED',
    epistemicAction: 'Retained as source provenance and audit metadata.',
  },
  {
    noteIndex: 12,
    sourceId: 'migrated-eng-ch-3',
    sourceTitle: 'Formal Correspondence & Banking Ombudsman Representations',
    classification: 'DUPLICATE',
    canonicalConceptTarget: 'CON-ENG-10',
    status: 'CONSOLIDATED',
    epistemicAction: 'Deduplicated layout rules and Ombudsman model letter with Note 5 and unified into CON-ENG-10.',
  },
  {
    noteIndex: 13,
    sourceId: 'eng-report-writing-masterclass',
    sourceTitle: 'Formal Economic, Banking & Branch Inspection Report Writing',
    classification: 'REPORT_OTHER_FORMAT',
    canonicalConceptTarget: 'CON-ENG-12',
    status: 'MIGRATED',
    epistemicAction: 'Migrated 5-section administrative inspection report structure and NPA resolution audit model into CON-ENG-12.',
  },
  {
    noteIndex: 14,
    sourceId: 'migrated-eng-ch-5',
    sourceTitle: 'High-Yield Banking, Macroeconomic & Legal Vocabulary Bank',
    classification: 'CORE_WRITING_PRINCIPLE',
    canonicalConceptTarget: 'CON-ENG-02',
    status: 'CONSOLIDATED',
    epistemicAction: 'Extracted legal maxims (Ultra Vires, Prima Facie), economic jargon, and confusing word pairs into CON-ENG-02.',
  },
  {
    noteIndex: 15,
    sourceId: 'migrated-eng-ch-2',
    sourceTitle: 'Introduction Hooks, Thesis Blueprints & Circular Callbacks',
    classification: 'DUPLICATE',
    canonicalConceptTarget: 'CON-ENG-06',
    status: 'CONSOLIDATED',
    epistemicAction: 'Deduplicated hook/callback pairs with Notes 7 and 10 and unified into CON-ENG-06.',
  },
  {
    noteIndex: 16,
    sourceId: 'migrated-eng-ch-6',
    sourceTitle: 'Para Jumbles & Sentence Rearrangement Algorithms',
    classification: 'LOW_VALUE_FILLER',
    canonicalConceptTarget: 'N/A',
    status: 'EXCLUDED_FILLER',
    epistemicAction: 'Excluded objective para-jumble MCQ tricks from descriptive writing knowledge base per mandate.',
  },
  {
    noteIndex: 17,
    sourceId: 'migrated-eng-ch-7',
    sourceTitle: 'Precis Writing Masterclass — The 1/3rd Rule, Word-Budget & Titling Strategy',
    classification: 'DUPLICATE',
    canonicalConceptTarget: 'CON-ENG-08',
    status: 'CONSOLIDATED',
    epistemicAction: 'Deduplicated précis dos/don\'ts and negative filtering with Notes 3 and 8 and unified into CON-ENG-08.',
  },
  {
    noteIndex: 18,
    sourceId: 'vol5_essays',
    sourceTitle: 'RBI Grade B & Bank PO Volume 5: Macro Policy & Philosophical Essays Vault',
    classification: 'EXAMPLES',
    canonicalConceptTarget: 'CON-ENG-07 / CON-ENG-13',
    status: 'MIGRATED',
    epistemicAction: 'Migrated long-form model essays (Henry Ford quote, Startups vs Bharat, Climate Migration, Workplace Mental Health, Olympics costs) with structural annotations into Topics 58 and 61.',
  },
  {
    noteIndex: 19,
    sourceId: 'eng-reading-comprehension-critical-reasoning',
    sourceTitle: 'Reading Comprehension & Critical Reasoning Strategies',
    classification: 'CORE_WRITING_PRINCIPLE',
    canonicalConceptTarget: 'CON-ENG-09',
    status: 'CONSOLIDATED',
    epistemicAction: 'Extracted author tone classification (Analytical, Critical, Laudatory) and inference detection into Subjective RC in CON-ENG-09.',
  },
  {
    noteIndex: 20,
    sourceId: 'migrated-eng-ch-1',
    sourceTitle: 'The 250-Word / 18-Min Descriptive Essay Masterclass',
    classification: 'DUPLICATE',
    canonicalConceptTarget: 'CON-ENG-04 / CON-ENG-06 / CON-ENG-15',
    status: 'CONSOLIDATED',
    epistemicAction: 'De-rigidified "strict 3-sentence introduction" formula into a 3-part functional heuristic; merged 18-min clock split into CON-ENG-15.',
  },
];
