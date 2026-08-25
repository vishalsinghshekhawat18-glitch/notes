import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { registerSource, getSourceById } from '../lib/ingestion/source-registry';
import { decomposeSource } from '../lib/ingestion/decomposer';
import { transitionCoverageUnitState, stageIngestionItem, LedgerState } from '../lib/ingestion/coverage-ledger';
import { generateSourceCoverageReport } from '../lib/ingestion/coverage-report';

describe('Phase 2: Source Registration, Structure Decomposition & Coverage Ledger Engine', () => {
  beforeAll(async () => {
    // Clear test tables
    await db.ingestionItem.deleteMany();
    await db.coverageUnit.deleteMany();
    await db.sourceSection.deleteMany();
    await db.source.deleteMany();
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should register various source types with strict authority tiers and metadata', async () => {
    const primarySource = await registerSource({
      title: 'The Constitution of India (As on 1st May, 2024)',
      sourceType: 'CONSTITUTION',
      authorityTier: 'TIER_A_PRIMARY',
      author: 'Legislative Department, Ministry of Law and Justice, Government of India',
      publisher: 'Government of India',
      identifier: 'GOI-CONST-2024-ENG',
      url: 'https://legislative.gov.in/constitution-of-india',
      language: 'en',
    });

    expect(primarySource.id).toBeDefined();
    expect(primarySource.authorityTier).toBe('TIER_A_PRIMARY');
    expect(primarySource.identifier).toBe('GOI-CONST-2024-ENG');

    const secondarySource = await registerSource({
      title: 'Introduction to the Constitution of India (26th Edition)',
      sourceType: 'TEXTBOOK',
      authorityTier: 'TIER_B_SCHOLARLY',
      author: 'Dr. Durga Das Basu',
      publisher: 'LexisNexis',
      edition: '26th Edition',
    });

    expect(secondarySource.id).toBeDefined();
    expect(secondarySource.authorityTier).toBe('TIER_B_SCHOLARLY');

    // Reject empty title
    await expect(
      registerSource({
        title: '',
        sourceType: 'BOOK',
        authorityTier: 'TIER_C_EDUCATIONAL',
      })
    ).rejects.toThrow('Source title is required.');
  });

  it('2. should hierarchically decompose a source into nested SourceSections and trackable CoverageUnits', async () => {
    const source = await db.source.findFirstOrThrow({
      where: { authorityTier: 'TIER_A_PRIMARY' },
    });

    const result = await decomposeSource({
      sourceId: source.id,
      sections: [
        {
          title: 'Part III — Fundamental Rights',
          sectionType: 'PART',
          locator: 'Arts. 12 to 35',
          scopeDescription: 'Part III of the Constitution',
          createCoverageUnit: false, // Parent grouping node
          children: [
            {
              title: 'General (Articles 12-13)',
              sectionType: 'CHAPTER',
              locator: 'Arts. 12-13',
              createCoverageUnit: false,
              children: [
                {
                  title: 'Article 12: Definition of State',
                  sectionType: 'ARTICLE',
                  locator: 'Art. 12',
                  scopeDescription: 'Government and Parliament, State Legislature, local authorities',
                  createCoverageUnit: true,
                },
                {
                  title: 'Article 13: Laws inconsistent with or in derogation of Fundamental Rights',
                  sectionType: 'ARTICLE',
                  locator: 'Art. 13',
                  scopeDescription: 'Pre-constitutional and post-constitutional laws, doctrine of severability/eclipse',
                  createCoverageUnit: true,
                },
              ],
            },
            {
              title: 'Right to Equality (Articles 14-18)',
              sectionType: 'CHAPTER',
              locator: 'Arts. 14-18',
              createCoverageUnit: false,
              children: [
                {
                  title: 'Article 14: Equality before law and equal protection of laws',
                  sectionType: 'ARTICLE',
                  locator: 'Art. 14',
                  scopeDescription: 'Equality before law, equal protection, reasonable classification',
                  createCoverageUnit: true,
                },
                {
                  title: 'Article 15: Prohibition of discrimination & Special Provisions',
                  sectionType: 'ARTICLE',
                  locator: 'Art. 15',
                  scopeDescription: 'Clauses 15(1) through 15(6) affirmative action provisions',
                  createCoverageUnit: true,
                },
                {
                  title: 'Article 16: Equality of opportunity in public employment',
                  sectionType: 'ARTICLE',
                  locator: 'Art. 16',
                  scopeDescription: 'Clauses 16(1) through 16(6) reservation criteria',
                  createCoverageUnit: true,
                },
                {
                  title: 'Article 17: Abolition of Untouchability',
                  sectionType: 'ARTICLE',
                  locator: 'Art. 17',
                  scopeDescription: 'Abolition and penal consequences',
                  createCoverageUnit: true,
                },
                {
                  title: 'Article 18: Abolition of Titles',
                  sectionType: 'ARTICLE',
                  locator: 'Art. 18',
                  scopeDescription: 'Prohibition of titles with academic/military exceptions',
                  createCoverageUnit: true,
                },
              ],
            },
          ],
        },
      ],
    });

    expect(result.sectionsCreatedCount).toBe(10); // Part III, 2 chapters, 7 articles
    expect(result.coverageUnitsCreatedCount).toBe(7); // 7 terminal articles created as CoverageUnits

    const reloaded = await getSourceById(source.id);
    expect(reloaded?.sections.length).toBe(10);
    expect(reloaded?.coverageUnits.length).toBe(7);
  });

  it('3. should enforce state transitions and quarantine raw extractions into IngestionItems', async () => {
    const art14Unit = await db.coverageUnit.findFirstOrThrow({
      where: { label: { contains: 'Article 14' } },
    });

    expect(art14Unit.status).toBe('UNPROCESSED');

    // Stage raw AI extraction into IngestionItem quarantine
    const stagedItem = await stageIngestionItem({
      coverageUnitId: art14Unit.id,
      rawInput: 'Article 14. The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
      extractedClaims: [
        {
          statement: 'Article 14 applies to any person within Indian territory.',
          type: 'LEGAL',
          locator: 'Art. 14',
        },
        {
          statement: 'Guarantees both equality before the law and equal protection of the laws.',
          type: 'RULE',
          locator: 'Art. 14',
        },
      ],
      extractedTerms: [
        { term: 'Equality before law', definition: 'Absence of special privilege (British origin)' },
        { term: 'Equal protection of laws', definition: 'Equality of treatment under equal circumstances (American origin)' },
      ],
      reviewerNotes: 'Extracted directly from official PDF text.',
    });

    expect(stagedItem.id).toBeDefined();

    // Verify CoverageUnit moved to EXTRACTED automatically
    const updatedUnit = await db.coverageUnit.findUniqueOrThrow({ where: { id: art14Unit.id } });
    expect(updatedUnit.status).toBe('EXTRACTED');

    // Advance through the pipeline
    await transitionCoverageUnitState({
      coverageUnitId: art14Unit.id,
      nextState: LedgerState.REVIEW_REQUIRED,
    });

    await transitionCoverageUnitState({
      coverageUnitId: art14Unit.id,
      nextState: LedgerState.RECONCILING,
    });

    await transitionCoverageUnitState({
      coverageUnitId: art14Unit.id,
      nextState: LedgerState.MAPPED,
    });

    await transitionCoverageUnitState({
      coverageUnitId: art14Unit.id,
      nextState: LedgerState.VERIFIED,
    });

    const verifiedUnit = await db.coverageUnit.findUniqueOrThrow({ where: { id: art14Unit.id } });
    expect(verifiedUnit.status).toBe('VERIFIED');
  });

  it('4. should enforce the Zero Unaccounted-For Source Omission principle when excluding units', async () => {
    const art18Unit = await db.coverageUnit.findFirstOrThrow({
      where: { label: { contains: 'Article 18' } },
    });

    // Attempt to exclude without a reason -> Must throw error
    await expect(
      transitionCoverageUnitState({
        coverageUnitId: art18Unit.id,
        nextState: LedgerState.EXCLUDED_WITH_REASON,
        exclusionReason: '',
      })
    ).rejects.toThrow('Zero Unaccounted-For Source Omission violation: An explicit, non-empty exclusionReason is required');

    // Exclude with valid documented rationale
    await transitionCoverageUnitState({
      coverageUnitId: art18Unit.id,
      nextState: LedgerState.EXCLUDED_WITH_REASON,
      exclusionReason: 'Low conceptual complexity; factual points mapped directly to general notes review batch.',
    });

    const excludedUnit = await db.coverageUnit.findUniqueOrThrow({ where: { id: art18Unit.id } });
    expect(excludedUnit.status).toBe('EXCLUDED_WITH_REASON');
    expect(excludedUnit.exclusionReason).toContain('Low conceptual complexity');
  });

  it('5. should reject illegal state jumps in the coverage ledger state machine', async () => {
    const art17Unit = await db.coverageUnit.findFirstOrThrow({
      where: { label: { contains: 'Article 17' } },
    });

    // UNPROCESSED cannot jump directly to PUBLISHED
    await expect(
      transitionCoverageUnitState({
        coverageUnitId: art17Unit.id,
        nextState: LedgerState.PUBLISHED,
      })
    ).rejects.toThrow('Invalid ledger transition');
  });

  it('6. should generate an accurate Completeness and Coverage Report with unverified and unaccounted tracking', async () => {
    const source = await db.source.findFirstOrThrow({
      where: { authorityTier: 'TIER_A_PRIMARY' },
    });

    const report = await generateSourceCoverageReport(source.id);

    expect(report.sourceId).toBe(source.id);
    expect(report.totalCoverageUnits).toBe(7);
    expect(report.breakdown.verified).toBe(1); // Art 14
    expect(report.breakdown.excludedWithReason).toBe(1); // Art 18
    expect(report.breakdown.unprocessed).toBe(5); // Arts 12, 13, 15, 16, 17

    // Accounted = Verified (1) + Excluded (1) = 2
    expect(report.metrics.accountedUnitsCount).toBe(2);
    expect(report.metrics.unaccountedUnitsCount).toBe(5);
    expect(report.metrics.sourceCoverageIndexPercentage).toBe(28.57);
    expect(report.metrics.isFullyAccounted).toBe(false);

    expect(report.excludedUnitsSummary.length).toBe(1);
    expect(report.excludedUnitsSummary[0].reason).toContain('Low conceptual complexity');
    expect(report.unaccountedUnitsList.length).toBe(5);

    // Section summaries
    expect(report.sectionsSummary.length).toBe(10);
  });
});
