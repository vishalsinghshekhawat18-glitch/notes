import { db } from '../db/client';

export interface ConceptSynthesisSummary {
  conceptId: string;
  conceptTitle: string;
  shortDefinition: string;
  topicTitle: string;
  subjectName: string;
  canonicalClaims: Array<{
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    importance: string;
    confidence: string;
    scopeConditions?: string | null;
    evidenceCount: number;
    sources: Array<{ title: string; authorityTier: string; locator: string }>;
  }>;
  qualificationsAndExceptions: string[];
  disputedOrDebatedPoints: Array<{
    claimStatement: string;
    issueDescription: string;
    status: string;
  }>;
  knowledgeMetrics: {
    totalClaimsExtracted: number;
    verifiedClaimsCount: number;
    debatedOrDisputedCount: number;
    inferencesCount: number;
    totalEvidenceLinks: number;
    openKnowledgeIssuesCount: number;
  };
}

/**
 * Builds an auditable preliminary synthesis bridge for a concept connecting canonical claims and evidence.
 */
export async function buildConceptSynthesisBridge(conceptId: string): Promise<ConceptSynthesisSummary> {
  const concept = await db.concept.findUnique({
    where: { id: conceptId },
    include: {
      topic: {
        include: {
          subject: true,
        },
      },
      claims: {
        include: {
          evidence: {
            include: {
              source: true,
            },
          },
          knowledgeIssues: true,
        },
      },
      knowledgeIssues: true,
    },
  });

  if (!concept) {
    throw new Error(`Concept with ID "${conceptId}" not found.`);
  }

  const canonicalClaims = concept.claims.map((claim) => ({
    id: claim.id,
    statement: claim.statement,
    claimType: claim.claimType,
    epistemicLevel: claim.epistemicLevel,
    importance: claim.importance,
    confidence: claim.confidence,
    scopeConditions: claim.scopeConditions,
    evidenceCount: claim.evidence.length,
    sources: claim.evidence.map((e) => ({
      title: e.source.title,
      authorityTier: e.source.authorityTier,
      locator: e.locator,
    })),
  }));

  const qualificationsAndExceptions = concept.claims
    .filter((c) => c.claimType === 'EXCEPTION' || c.scopeConditions !== null)
    .map((c) => (c.scopeConditions ? `${c.statement} [Conditions: ${c.scopeConditions}]` : c.statement));

  const disputedOrDebatedPoints = concept.claims
    .filter((c) => c.status === 'DISPUTED' || c.confidence === 'DEBATED')
    .map((c) => ({
      claimStatement: c.statement,
      issueDescription: c.knowledgeIssues[0]?.description || 'Marked as debated/disputed across sources',
      status: c.knowledgeIssues[0]?.status || c.status,
    }));

  const totalEvidenceLinks = concept.claims.reduce((acc, c) => acc + c.evidence.length, 0);
  const openIssues = concept.knowledgeIssues.filter((i) => i.status === 'OPEN').length;

  return {
    conceptId: concept.id,
    conceptTitle: concept.title,
    shortDefinition: concept.shortDefinition,
    topicTitle: concept.topic.title,
    subjectName: concept.topic.subject.name,
    canonicalClaims,
    qualificationsAndExceptions,
    disputedOrDebatedPoints,
    knowledgeMetrics: {
      totalClaimsExtracted: concept.claims.length,
      verifiedClaimsCount: concept.claims.filter((c) => c.status === 'VERIFIED').length,
      debatedOrDisputedCount: disputedOrDebatedPoints.length,
      inferencesCount: concept.claims.filter((c) => c.epistemicLevel === 'INFERENCE').length,
      totalEvidenceLinks,
      openKnowledgeIssuesCount: openIssues,
    },
  };
}
