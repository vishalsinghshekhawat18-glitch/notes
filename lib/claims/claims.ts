import { db } from '../db/client';
import { EpistemicLevelType, ClaimTypeEnum, EvidentiarySupportType } from '../types';

export interface CreateClaimPayload {
  conceptId: string;
  statement: string;
  claimType?: ClaimTypeEnum | string;
  epistemicLevel?: EpistemicLevelType | string;
  importance?: 'MUST_KNOW' | 'SHOULD_KNOW' | 'USEFUL' | 'REFERENCE' | string;
  confidence?: 'ESTABLISHED_FACT' | 'CONSENSUS_INTERPRETATION' | 'DEBATED' | 'TENTATIVE' | 'INFERENCE' | string;
  status?: 'CANDIDATE' | 'DRAFT' | 'REVIEW_REQUIRED' | 'RECONCILED' | 'VERIFIED' | 'DISPUTED' | 'SUPERSEDED' | 'REJECTED' | string;
  scopeConditions?: string | null;
  jurisdiction?: string | null;
  validFrom?: Date | null;
  validTo?: Date | null;
}

export interface AttachEvidencePayload {
  claimId: string;
  sourceId: string;
  sourceSectionId?: string | null;
  locator: string;
  excerpt?: string | null;
  evidenceType?: string;
  authority?: string;
  evidentiarySupport?: EvidentiarySupportType | string;
  extractionConfidence?: 'HIGH' | 'MEDIUM' | 'LOW' | string;
  notes?: string | null;
}

/**
 * Creates an atomic claim with semantic typing and explicit epistemic level.
 */
export async function createClaim(payload: CreateClaimPayload) {
  if (!payload.statement || payload.statement.trim() === '') {
    throw new Error('Claim statement cannot be empty.');
  }

  // Enforce inference discipline: Inferences must be typed as INFERENCE
  const isLabeledInference = payload.epistemicLevel === 'INFERENCE' || payload.claimType === 'INFERENCE';
  const finalEpistemicLevel = isLabeledInference ? 'INFERENCE' : (payload.epistemicLevel || 'CANONICAL_CLAIM');
  const finalConfidence = isLabeledInference ? 'INFERENCE' : (payload.confidence || 'ESTABLISHED_FACT');

  return db.claim.create({
    data: {
      conceptId: payload.conceptId,
      statement: payload.statement.trim(),
      claimType: payload.claimType || 'FACT',
      epistemicLevel: finalEpistemicLevel,
      importance: payload.importance || 'MUST_KNOW',
      confidence: finalConfidence,
      status: payload.status || 'DRAFT',
      scopeConditions: payload.scopeConditions?.trim() || null,
      jurisdiction: payload.jurisdiction?.trim() || 'India',
      validFrom: payload.validFrom,
      validTo: payload.validTo,
    },
  });
}

/**
 * Attaches evidence to a claim, preserving exact locator, support strength, and authority.
 */
export async function attachEvidence(payload: AttachEvidencePayload) {
  if (!payload.locator || payload.locator.trim() === '') {
    throw new Error('Evidence must specify a locator (e.g. article clause, page, or section).');
  }

  const claim = await db.claim.findUnique({
    where: { id: payload.claimId },
  });
  if (!claim) {
    throw new Error(`Claim with ID "${payload.claimId}" not found.`);
  }

  const source = await db.source.findUnique({
    where: { id: payload.sourceId },
  });
  if (!source) {
    throw new Error(`Source with ID "${payload.sourceId}" not found.`);
  }

  return db.evidence.create({
    data: {
      claimId: payload.claimId,
      sourceId: payload.sourceId,
      sourceSectionId: payload.sourceSectionId,
      locator: payload.locator.trim(),
      excerpt: payload.excerpt?.trim() || null,
      evidenceType: payload.evidenceType || 'PRIMARY_STATUTORY_TEXT',
      authority: payload.authority || source.authorityTier,
      evidentiarySupport: payload.evidentiarySupport || 'STRONG_SUPPORT',
      extractionConfidence: payload.extractionConfidence || 'HIGH',
      notes: payload.notes?.trim() || null,
    },
  });
}

/**
 * Retrieves a claim with full forensic evidence provenance and linked issues.
 */
export async function getClaimWithFullProvenance(claimId: string) {
  return db.claim.findUnique({
    where: { id: claimId },
    include: {
      concept: {
        include: {
          topic: {
            include: {
              subject: true,
            },
          },
        },
      },
      evidence: {
        include: {
          source: true,
          sourceSection: true,
        },
      },
      knowledgeIssues: true,
    },
  });
}

export async function listClaimsByConcept(conceptId: string) {
  return db.claim.findMany({
    where: { conceptId },
    include: {
      evidence: {
        include: {
          source: true,
          sourceSection: true,
        },
      },
      knowledgeIssues: true,
    },
    orderBy: [{ importance: 'asc' }, { createdAt: 'asc' }],
  });
}
