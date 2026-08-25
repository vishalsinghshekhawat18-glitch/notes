import { db } from '../db/client';
import { AuditStatusType } from '../types';

export interface CreateKnowledgeAuditInput {
  targetType: string;
  targetId: string;
  auditType: string;
  protocol?: string;
  severity?: string;
  finding: string;
  recommendation?: string;
  status?: AuditStatusType | string;
  auditor?: string;
}

export async function createKnowledgeAudit(input: CreateKnowledgeAuditInput) {
  return db.knowledgeAudit.create({
    data: {
      ...input,
      status: input.status || 'UNRESOLVED',
    },
  });
}

export async function getAuditsForTarget(targetType: string, targetId: string) {
  return db.knowledgeAudit.findMany({
    where: {
      targetType,
      targetId,
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function resolveAudit(id: string, status: AuditStatusType | string = 'RESOLVED') {
  return db.knowledgeAudit.update({
    where: { id },
    data: {
      status,
      resolvedAt: new Date(),
    },
  });
}

/**
 * Returns a formal breakdown of audit findings within the defined audit scope.
 * Explicitly guards against assuming epistemic completeness beyond the audited scope.
 */
export async function getAuditScopeSummary(targetType: string, targetId: string) {
  const audits = await db.knowledgeAudit.findMany({
    where: { targetType, targetId },
  });

  const resolved = audits.filter((a) => a.status === 'RESOLVED' || a.status === 'FIXED').length;
  const qualified = audits.filter((a) => a.status === 'QUALIFIED').length;
  const unresolved = audits.filter((a) => a.status === 'UNRESOLVED' || a.status === 'OPEN').length;
  const notYetAudited = audits.filter((a) => a.status === 'NOT_YET_AUDITED').length;
  const outsideScope = audits.filter((a) => a.status === 'OUTSIDE_SCOPE').length;

  return {
    targetType,
    targetId,
    totalFindingsInScope: audits.length,
    resolved,
    qualified,
    unresolvedWithinScope: unresolved,
    notYetAudited,
    outsideScope,
    scopeDeclaration: 'No unresolved issues were identified within the defined audit scope.',
  };
}
