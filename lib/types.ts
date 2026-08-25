// Canonical Authority Tiers
export const AuthorityTier = {
  TIER_A_PRIMARY: 'TIER_A_PRIMARY',
  TIER_B_SCHOLARLY: 'TIER_B_SCHOLARLY',
  TIER_C_EDUCATIONAL: 'TIER_C_EDUCATIONAL',
  TIER_D_DISCOVERY: 'TIER_D_DISCOVERY',
} as const;
export type AuthorityTierType = (typeof AuthorityTier)[keyof typeof AuthorityTier];

// Coverage Unit Statuses (Enforcing Zero Unaccounted-For Source Omission principle)
export const CoverageStatus = {
  UNPROCESSED: 'UNPROCESSED',
  QUEUED: 'QUEUED',
  EXTRACTING: 'EXTRACTING',
  EXTRACTED: 'EXTRACTED',
  REVIEW_REQUIRED: 'REVIEW_REQUIRED',
  RECONCILING: 'RECONCILING',
  MAPPED: 'MAPPED',
  VERIFIED: 'VERIFIED',
  PUBLISHED: 'PUBLISHED',
  EXCLUDED_WITH_REASON: 'EXCLUDED_WITH_REASON',
} as const;
export type CoverageStatusType = (typeof CoverageStatus)[keyof typeof CoverageStatus];

// Epistemic Levels
export const EpistemicLevel = {
  SOURCE_STATEMENT: 'SOURCE_STATEMENT',
  CANONICAL_CLAIM: 'CANONICAL_CLAIM',
  SYNTHESIS: 'SYNTHESIS',
  INFERENCE: 'INFERENCE',
} as const;
export type EpistemicLevelType = (typeof EpistemicLevel)[keyof typeof EpistemicLevel];

// Semantic Claim Types
export const ClaimType = {
  FACT: 'FACT',
  DEFINITION: 'DEFINITION',
  RULE: 'RULE',
  PRINCIPLE: 'PRINCIPLE',
  MECHANISM: 'MECHANISM',
  CAUSAL_CLAIM: 'CAUSAL_CLAIM',
  QUANTITATIVE_CLAIM: 'QUANTITATIVE_CLAIM',
  CHRONOLOGICAL_CLAIM: 'CHRONOLOGICAL_CLAIM',
  LEGAL_PROVISION: 'LEGAL_PROVISION',
  INTERPRETATION: 'INTERPRETATION',
  EXAMPLE: 'EXAMPLE',
  COMPARISON: 'COMPARISON',
  APPLICATION: 'APPLICATION',
  INFERENCE: 'INFERENCE',
  OPINION: 'OPINION',
} as const;
export type ClaimTypeEnum = (typeof ClaimType)[keyof typeof ClaimType];

// Evidentiary Support Types
export const EvidentiarySupport = {
  DEFINITIVE: 'DEFINITIVE',
  STRONG_SUPPORT: 'STRONG_SUPPORT',
  PARTIAL_SUPPORT: 'PARTIAL_SUPPORT',
  ILLUSTRATIVE: 'ILLUSTRATIVE',
  ANALOGOUS: 'ANALOGOUS',
} as const;
export type EvidentiarySupportType = (typeof EvidentiarySupport)[keyof typeof EvidentiarySupport];

// Reconciliation Outcomes
export const ReconciliationOutcome = {
  ACCEPTED: 'ACCEPTED',
  ACCEPTED_WITH_SCOPE: 'ACCEPTED_WITH_SCOPE',
  MULTIPLE_VALID_VIEWS: 'MULTIPLE_VALID_VIEWS',
  UNRESOLVED: 'UNRESOLVED',
  REJECTED: 'REJECTED',
  SUPERSEDED: 'SUPERSEDED',
} as const;
export type ReconciliationOutcomeType = (typeof ReconciliationOutcome)[keyof typeof ReconciliationOutcome];

// Claim Similarity & Deduplication Relationship Types
export const ClaimRelationType = {
  SAME: 'SAME',
  RELATED: 'RELATED',
  PARENT_CHILD: 'PARENT_CHILD',
  COMPLEMENTARY: 'COMPLEMENTARY',
  CONTRADICTORY: 'CONTRADICTORY',
  DISTINCT: 'DISTINCT',
} as const;
export type ClaimRelationTypeEnum = (typeof ClaimRelationType)[keyof typeof ClaimRelationType];

// Composable Content Block Types
export const ContentBlockType = {
  CORE_IDEA: 'CORE_IDEA',
  WHY_IT_MATTERS: 'WHY_IT_MATTERS',
  INTUITION: 'INTUITION',
  MECHANISM: 'MECHANISM',
  PROCESS: 'PROCESS',
  EXAMPLE: 'EXAMPLE',
  COUNTEREXAMPLE: 'COUNTEREXAMPLE',
  TIMELINE: 'TIMELINE',
  COMPARISON: 'COMPARISON',
  EXCEPTION: 'EXCEPTION',
  CASE_STUDY: 'CASE_STUDY',
  EVIDENCE_SUMMARY: 'EVIDENCE_SUMMARY',
  FORMAL_MODEL: 'FORMAL_MODEL',
  MATHEMATICS: 'MATHEMATICS',
  DIAGRAM: 'DIAGRAM',
  MISCONCEPTION: 'MISCONCEPTION',
  DEBATE: 'DEBATE',
  EXAM_NOTE: 'EXAM_NOTE',
  SUMMARY: 'SUMMARY',
} as const;
export type ContentBlockTypeEnum = (typeof ContentBlockType)[keyof typeof ContentBlockType];

// Cross-Domain Connection Types
export const ConnectionType = {
  DIRECT_PHYSICAL_CONNECTION: 'DIRECT_PHYSICAL_CONNECTION',
  CAUSAL_CONNECTION: 'CAUSAL_CONNECTION',
  MATHEMATICAL_CONNECTION: 'MATHEMATICAL_CONNECTION',
  STRUCTURAL_ANALOGY: 'STRUCTURAL_ANALOGY',
  SHARED_PRINCIPLE: 'SHARED_PRINCIPLE',
  APPLICATION: 'APPLICATION',
  HISTORICAL_RELATIONSHIP: 'HISTORICAL_RELATIONSHIP',
  CONTRAST: 'CONTRAST',
} as const;
export type ConnectionTypeEnum = (typeof ConnectionType)[keyof typeof ConnectionType];

// Revision Unit Types
export const RevisionUnitType = {
  ONE_MINUTE_RECALL: 'ONE_MINUTE_RECALL',
  FIVE_MINUTE_OVERVIEW: 'FIVE_MINUTE_OVERVIEW',
  ARTICLE_SCHEDULE_LIST: 'ARTICLE_SCHEDULE_LIST',
  COMPARISON_TABLE: 'COMPARISON_TABLE',
  MNEMONIC: 'MNEMONIC',
  TRAP_SHEET: 'TRAP_SHEET',
  ACTIVE_RECALL_PROMPT: 'ACTIVE_RECALL_PROMPT',
  FLASHCARD: 'FLASHCARD',
  KEY_FACTS_BULLETS: 'KEY_FACTS_BULLETS',
} as const;
export type RevisionUnitTypeEnum = (typeof RevisionUnitType)[keyof typeof RevisionUnitType];

// Audit Status Semantics (Phase 4.6 Governance)
export const AuditStatus = {
  RESOLVED: 'RESOLVED',
  QUALIFIED: 'QUALIFIED',
  UNRESOLVED: 'UNRESOLVED',
  NOT_YET_AUDITED: 'NOT_YET_AUDITED',
  OUTSIDE_SCOPE: 'OUTSIDE_SCOPE',
} as const;
export type AuditStatusType = (typeof AuditStatus)[keyof typeof AuditStatus];

// Audit Protocols
export const AuditProtocol = {
  POLITY: 'POLITY',
  ECONOMICS: 'ECONOMICS',
  SCIENCE: 'SCIENCE',
  HISTORY: 'HISTORY',
  GENERAL: 'GENERAL',
} as const;
export type AuditProtocolEnum = (typeof AuditProtocol)[keyof typeof AuditProtocol];

