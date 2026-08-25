import { db } from '../db/client';
import { ReconciliationOutcomeType } from '../types';

export interface ReconcileClaimsPayload {
  claimId: string;
  outcome: ReconciliationOutcomeType | string;
  reasoning: string;
  scopeConditions?: string;
  validFrom?: Date | null;
  validTo?: Date | null;
  conflictingSourceId?: string;
  conflictDescription?: string;
  reviewer: string;
}

export interface ReconcileDecisionResult {
  claimId: string;
  outcome: string;
  status: string;
  knowledgeIssueId?: string;
  reasoning: string;
}

/**
 * Reconciles a claim based on multi-source comparison, recording decisions and opening KnowledgeIssues when conflicts arise.
 */
export async function reconcileClaim(payload: ReconcileClaimsPayload): Promise<ReconcileDecisionResult> {
  const claim = await db.claim.findUnique({
    where: { id: payload.claimId },
    include: { evidence: { include: { source: true } } },
  });

  if (!claim) {
    throw new Error(`Claim with ID "${payload.claimId}" not found.`);
  }

  let nextClaimStatus = 'RECONCILED';
  let knowledgeIssueId: string | undefined;

  switch (payload.outcome) {
    case 'ACCEPTED':
      nextClaimStatus = 'VERIFIED';
      break;

    case 'ACCEPTED_WITH_SCOPE':
      nextClaimStatus = 'VERIFIED';
      break;

    case 'MULTIPLE_VALID_VIEWS':
      nextClaimStatus = 'VERIFIED'; // Validated that genuine academic debate exists
      // Log an informational KnowledgeIssue to document the competing views
      const debateIssue = await db.knowledgeIssue.create({
        data: {
          type: 'AMBIGUITY',
          severity: 'INFO',
          description: payload.conflictDescription || `Multiple credible views exist: ${payload.reasoning}`,
          status: 'QUALIFIED_IN_CANONICAL',
          resolution: payload.reasoning,
          claimId: claim.id,
          conceptId: claim.conceptId,
          sourceId: payload.conflictingSourceId || null,
        },
      });
      knowledgeIssueId = debateIssue.id;
      break;

    case 'UNRESOLVED':
      nextClaimStatus = 'DISPUTED';
      // Create active conflict issue
      const unresolvedIssue = await db.knowledgeIssue.create({
        data: {
          type: 'CONFLICT',
          severity: 'HIGH',
          description: payload.conflictDescription || `Unresolved discrepancy: ${payload.reasoning}`,
          status: 'OPEN',
          claimId: claim.id,
          conceptId: claim.conceptId,
          sourceId: payload.conflictingSourceId || null,
        },
      });
      knowledgeIssueId = unresolvedIssue.id;
      break;

    case 'SUPERSEDED':
      nextClaimStatus = 'SUPERSEDED';
      break;

    case 'REJECTED':
      nextClaimStatus = 'REJECTED';
      break;

    default:
      nextClaimStatus = 'RECONCILED';
  }

  await db.claim.update({
    where: { id: claim.id },
    data: {
      status: nextClaimStatus,
      confidence: payload.outcome === 'MULTIPLE_VALID_VIEWS' ? 'DEBATED' : claim.confidence,
      scopeConditions: payload.scopeConditions?.trim() || claim.scopeConditions,
      validFrom: payload.validFrom !== undefined ? payload.validFrom : claim.validFrom,
      validTo: payload.validTo !== undefined ? payload.validTo : claim.validTo,
    },
  });

  return {
    claimId: claim.id,
    outcome: payload.outcome,
    status: nextClaimStatus,
    knowledgeIssueId,
    reasoning: payload.reasoning,
  };
}
