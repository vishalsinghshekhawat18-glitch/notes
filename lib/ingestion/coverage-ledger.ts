import { db } from '../db/client';

export const LedgerState = {
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

export type LedgerStateType = (typeof LedgerState)[keyof typeof LedgerState];

const VALID_TRANSITIONS: Record<string, string[]> = {
  UNPROCESSED: ['QUEUED', 'EXTRACTING', 'EXCLUDED_WITH_REASON'],
  QUEUED: ['EXTRACTING', 'UNPROCESSED', 'EXCLUDED_WITH_REASON'],
  EXTRACTING: ['EXTRACTED', 'UNPROCESSED', 'EXCLUDED_WITH_REASON'],
  EXTRACTED: ['REVIEW_REQUIRED', 'RECONCILING', 'EXCLUDED_WITH_REASON'],
  REVIEW_REQUIRED: ['RECONCILING', 'EXTRACTED', 'EXCLUDED_WITH_REASON'],
  RECONCILING: ['MAPPED', 'REVIEW_REQUIRED', 'EXCLUDED_WITH_REASON'],
  MAPPED: ['VERIFIED', 'RECONCILING', 'EXCLUDED_WITH_REASON'],
  VERIFIED: ['PUBLISHED', 'RECONCILING', 'EXCLUDED_WITH_REASON'],
  PUBLISHED: ['RECONCILING', 'VERIFIED'],
  EXCLUDED_WITH_REASON: ['UNPROCESSED', 'QUEUED'],
};

export interface AdvanceUnitStatePayload {
  coverageUnitId: string;
  nextState: LedgerStateType | string;
  exclusionReason?: string;
  notes?: string;
  reviewer?: string;
}

export interface IngestionStagingPayload {
  coverageUnitId: string;
  rawInput: string;
  extractedClaims?: Array<{ statement: string; type?: string; locator?: string }>;
  extractedTerms?: Array<{ term: string; definition: string }>;
  reviewerNotes?: string;
}

/**
 * Transitions a CoverageUnit to a new state enforcing state machine rules and exclusion justification.
 */
export async function transitionCoverageUnitState(payload: AdvanceUnitStatePayload) {
  const unit = await db.coverageUnit.findUnique({
    where: { id: payload.coverageUnitId },
  });

  if (!unit) {
    throw new Error(`CoverageUnit with ID "${payload.coverageUnitId}" does not exist.`);
  }

  // Check state machine validity
  const allowed = VALID_TRANSITIONS[unit.status] || [];
  if (!allowed.includes(payload.nextState)) {
    throw new Error(
      `Invalid ledger transition: Cannot move CoverageUnit from "${unit.status}" to "${payload.nextState}". Allowed: [${allowed.join(', ')}]`
    );
  }

  // Zero Unaccounted-For Source Omission rule: If excluding, must have a explicit reason
  if (payload.nextState === LedgerState.EXCLUDED_WITH_REASON) {
    if (!payload.exclusionReason || payload.exclusionReason.trim() === '') {
      throw new Error(
        'Zero Unaccounted-For Source Omission violation: An explicit, non-empty exclusionReason is required to exclude any source coverage unit.'
      );
    }
  }

  return db.coverageUnit.update({
    where: { id: payload.coverageUnitId },
    data: {
      status: payload.nextState,
      exclusionReason: payload.nextState === LedgerState.EXCLUDED_WITH_REASON ? (payload.exclusionReason?.trim() ?? null) : null,
      notes: payload.notes ? (unit.notes ? `${unit.notes}\n${payload.notes}` : payload.notes) : unit.notes,
    },
  });
}

/**
 * Stages raw extracted content into the quarantined IngestionItem table and marks unit as EXTRACTED.
 */
export async function stageIngestionItem(payload: IngestionStagingPayload) {
  const unit = await db.coverageUnit.findUnique({
    where: { id: payload.coverageUnitId },
  });

  if (!unit) {
    throw new Error(`CoverageUnit with ID "${payload.coverageUnitId}" not found.`);
  }

  const ingestionItem = await db.ingestionItem.create({
    data: {
      sourceId: unit.sourceId,
      coverageUnitId: unit.id,
      rawInput: payload.rawInput,
      extractedClaims: payload.extractedClaims ? JSON.stringify(payload.extractedClaims) : null,
      extractedTerms: payload.extractedTerms ? JSON.stringify(payload.extractedTerms) : null,
      status: 'EXTRACTED',
      reviewerNotes: payload.reviewerNotes,
    },
  });

  // Advance unit state if valid
  if (unit.status === 'UNPROCESSED' || unit.status === 'QUEUED' || unit.status === 'EXTRACTING') {
    await db.coverageUnit.update({
      where: { id: unit.id },
      data: {
        status: 'EXTRACTED',
        extractionStatus: 'COMPLETE',
      },
    });
  }

  return ingestionItem;
}
