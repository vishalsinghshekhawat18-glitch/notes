import { db } from '../db/client';

export interface RegisterSourceInput {
  title: string;
  author?: string;
  publisher?: string;
  sourceType: string;
  authorityTier: string;
  url?: string;
  publicationDate?: Date;
  edition?: string;
  identifier?: string;
  language?: string;
  description?: string;
}

export interface CreateSourceSectionInput {
  sourceId: string;
  parentId?: string | null;
  title: string;
  sectionType: string;
  locator?: string;
  pageStart?: number;
  pageEnd?: number;
  order?: number;
}

export interface CreateCoverageUnitInput {
  sourceId: string;
  sourceSectionId?: string | null;
  label: string;
  scopeDescription?: string;
  order?: number;
  status?: string;
  exclusionReason?: string;
  notes?: string;
}

export async function registerSource(input: RegisterSourceInput) {
  return db.source.create({
    data: input,
  });
}

export async function addSourceSection(input: CreateSourceSectionInput) {
  return db.sourceSection.create({
    data: input,
  });
}

export async function createCoverageUnit(input: CreateCoverageUnitInput) {
  return db.coverageUnit.create({
    data: input,
  });
}

export async function updateCoverageUnitStatus(
  id: string,
  status: string,
  extra?: {
    exclusionReason?: string;
    extractionStatus?: string;
    verificationStatus?: string;
    canonicalMappingStatus?: string;
    notes?: string;
  }
) {
  return db.coverageUnit.update({
    where: { id },
    data: {
      status,
      ...extra,
    },
  });
}

/**
 * Calculates the Source Coverage Index (SCI) based on the Zero Unaccounted-For Source Omission principle.
 */
export async function calculateSourceCoverageMetrics(sourceId: string) {
  const units = await db.coverageUnit.findMany({
    where: { sourceId },
  });

  const total = units.length;
  if (total === 0) {
    return {
      total: 0,
      processedCount: 0,
      accountedCount: 0,
      coverageIndexPercentage: 0,
      unprocessedCount: 0,
      isFullyAccounted: false,
    };
  }

  const accountedUnits = units.filter(
    (u) =>
      u.status === 'VERIFIED' ||
      u.status === 'PUBLISHED' ||
      u.status === 'EXCLUDED_WITH_REASON'
  );

  const unprocessed = units.filter((u) => u.status === 'UNPROCESSED');

  const coverageIndex = (accountedUnits.length / total) * 100;

  return {
    total,
    accountedCount: accountedUnits.length,
    unprocessedCount: unprocessed.length,
    coverageIndexPercentage: Number(coverageIndex.toFixed(2)),
    isFullyAccounted: accountedUnits.length === total,
  };
}
