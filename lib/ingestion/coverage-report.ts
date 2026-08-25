import { db } from '../db/client';

export interface CoverageReportSectionSummary {
  sectionId: string;
  title: string;
  sectionType: string;
  locator?: string | null;
  totalUnits: number;
  verifiedOrPublishedUnits: number;
  excludedUnits: number;
  unprocessedUnits: number;
  inProgressUnits: number;
  isFullyAccounted: boolean;
}

export interface SourceCompletenessReport {
  sourceId: string;
  sourceTitle: string;
  sourceType: string;
  authorityTier: string;
  totalCoverageUnits: number;
  breakdown: {
    unprocessed: number;
    queued: number;
    extracting: number;
    extracted: number;
    reviewRequired: number;
    reconciling: number;
    mapped: number;
    verified: number;
    published: number;
    excludedWithReason: number;
  };
  metrics: {
    accountedUnitsCount: number;
    unaccountedUnitsCount: number;
    sourceCoverageIndexPercentage: number;
    isFullyAccounted: boolean;
  };
  excludedUnitsSummary: Array<{
    id: string;
    label: string;
    reason: string;
  }>;
  unaccountedUnitsList: Array<{
    id: string;
    label: string;
    status: string;
  }>;
  sectionsSummary: CoverageReportSectionSummary[];
}

/**
 * Generates an authoritative completeness and coverage report for a source.
 */
export async function generateSourceCoverageReport(sourceId: string): Promise<SourceCompletenessReport> {
  const source = await db.source.findUnique({
    where: { id: sourceId },
    include: {
      sections: {
        orderBy: { order: 'asc' },
      },
      coverageUnits: {
        orderBy: { order: 'asc' },
      },
    },
  });

  if (!source) {
    throw new Error(`Source with ID "${sourceId}" not found.`);
  }

  const units = source.coverageUnits;
  const total = units.length;

  const breakdown = {
    unprocessed: 0,
    queued: 0,
    extracting: 0,
    extracted: 0,
    reviewRequired: 0,
    reconciling: 0,
    mapped: 0,
    verified: 0,
    published: 0,
    excludedWithReason: 0,
  };

  const excludedUnitsSummary: Array<{ id: string; label: string; reason: string }> = [];
  const unaccountedUnitsList: Array<{ id: string; label: string; status: string }> = [];

  for (const unit of units) {
    switch (unit.status) {
      case 'UNPROCESSED':
        breakdown.unprocessed += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
        break;
      case 'QUEUED':
        breakdown.queued += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
        break;
      case 'EXTRACTING':
        breakdown.extracting += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
        break;
      case 'EXTRACTED':
        breakdown.extracted += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
        break;
      case 'REVIEW_REQUIRED':
        breakdown.reviewRequired += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
        break;
      case 'RECONCILING':
        breakdown.reconciling += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
        break;
      case 'MAPPED':
        breakdown.mapped += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
        break;
      case 'VERIFIED':
        breakdown.verified += 1;
        break;
      case 'PUBLISHED':
        breakdown.published += 1;
        break;
      case 'EXCLUDED_WITH_REASON':
        breakdown.excludedWithReason += 1;
        excludedUnitsSummary.push({
          id: unit.id,
          label: unit.label,
          reason: unit.exclusionReason || 'No reason specified',
        });
        break;
      default:
        breakdown.unprocessed += 1;
        unaccountedUnitsList.push({ id: unit.id, label: unit.label, status: unit.status });
    }
  }

  const accountedCount = breakdown.verified + breakdown.published + breakdown.excludedWithReason;
  const unaccountedCount = total - accountedCount;
  const sci = total > 0 ? Number(((accountedCount / total) * 100).toFixed(2)) : 0;

  // Sections summary
  const sectionsSummary: CoverageReportSectionSummary[] = source.sections.map((sec) => {
    const secUnits = units.filter((u) => u.sourceSectionId === sec.id);
    const verifiedOrPublished = secUnits.filter((u) => u.status === 'VERIFIED' || u.status === 'PUBLISHED').length;
    const excluded = secUnits.filter((u) => u.status === 'EXCLUDED_WITH_REASON').length;
    const unprocessed = secUnits.filter((u) => u.status === 'UNPROCESSED').length;
    const inProgress = secUnits.length - (verifiedOrPublished + excluded + unprocessed);

    return {
      sectionId: sec.id,
      title: sec.title,
      sectionType: sec.sectionType,
      locator: sec.locator,
      totalUnits: secUnits.length,
      verifiedOrPublishedUnits: verifiedOrPublished,
      excludedUnits: excluded,
      unprocessedUnits: unprocessed,
      inProgressUnits: inProgress,
      isFullyAccounted: secUnits.length > 0 && verifiedOrPublished + excluded === secUnits.length,
    };
  });

  return {
    sourceId: source.id,
    sourceTitle: source.title,
    sourceType: source.sourceType,
    authorityTier: source.authorityTier,
    totalCoverageUnits: total,
    breakdown,
    metrics: {
      accountedUnitsCount: accountedCount,
      unaccountedUnitsCount: unaccountedCount,
      sourceCoverageIndexPercentage: sci,
      isFullyAccounted: unaccountedCount === 0 && total > 0,
    },
    excludedUnitsSummary,
    unaccountedUnitsList,
    sectionsSummary,
  };
}
