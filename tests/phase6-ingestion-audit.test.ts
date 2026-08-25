import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { executePhase6ControlledIngestion, POLITY_PDF_TOC } from '../lib/ingestion/polity-pdf-ingestor';

describe('Phase 6: Controlled Source Ingestion Pilot (Indian Polity Notes [2026])', () => {
  let sourceId: string;

  beforeAll(async () => {
    // Clear existing DB tables in dependency order
    await db.knowledgeAudit.deleteMany();
    await db.question.deleteMany();
    await db.revisionUnit.deleteMany();
    await db.examConceptMapping.deleteMany();
    await db.exam.deleteMany();
    await db.connection.deleteMany();
    await db.contentBlock.deleteMany();
    await db.knowledgeIssue.deleteMany();
    await db.evidence.deleteMany();
    await db.ingestionItem.deleteMany();
    await db.coverageUnit.deleteMany();
    await db.sourceSection.deleteMany();
    await db.source.deleteMany();
    await db.claim.deleteMany();
    await db.concept.deleteMany();
    await db.topic.deleteMany();
    await db.subject.deleteMany();
    await db.domain.deleteMany();

    const result = await executePhase6ControlledIngestion();
    sourceId = result.sourceId;
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should register the 408-page source with complete metadata and tier classification', async () => {
    const source = await db.source.findUniqueOrThrow({
      where: { id: sourceId },
    });

    expect(source.title).toBe('Indian Polity Notes [2026]');
    expect(source.author).toBe('Ceramic Academy');
    expect(source.sourceType).toBe('EDUCATIONAL_NOTES');
    expect(source.authorityTier).toBe('TIER_C_EDUCATIONAL');
    expect(source.identifier).toBe('CERAMIC-POLITY-2026');
  });

  it('2. should reconstruct the physical structure with all 43 major topics from the TOC', async () => {
    const sections = await db.sourceSection.findMany({
      where: { sourceId },
      orderBy: { order: 'asc' },
    });

    // 1 Front Matter + 46 Physical Topics (43 numbers + 15.A, 15.B, 15.C) + 1 Back Matter = 48 Sections
    expect(sections.length).toBe(48);

    const frontMatter = sections.find((s) => s.sectionType === 'FRONT_MATTER');
    expect(frontMatter).toBeDefined();
    expect(frontMatter?.pageStart).toBe(1);
    expect(frontMatter?.pageEnd).toBe(6);

    const topic1 = sections.find((s) => s.title.includes('Topic 1:'));
    expect(topic1?.title).toContain('Basic Concepts of Polity');
    expect(topic1?.pageStart).toBe(7);
    expect(topic1?.pageEnd).toBe(9);

    const topic43 = sections.find((s) => s.title.includes('Topic 43:'));
    expect(topic43?.title).toContain('Potential Areas of Socio-Political Conflicts');
    expect(topic43?.pageStart).toBe(406);
    expect(topic43?.pageEnd).toBe(407);

    const backMatter = sections.find((s) => s.sectionType === 'BACK_MATTER');
    expect(backMatter).toBeDefined();
    expect(backMatter?.pageStart).toBe(408);
  });

  it('3. should create CoverageUnits for 100% of physical source sections (Zero-Omission Accounting)', async () => {
    const coverageUnits = await db.coverageUnit.findMany({
      where: { sourceId },
    });

    // 48 Coverage Units accounting for 100% of source sections
    expect(coverageUnits.length).toBe(48);

    // Verify all units have an explicit processing state
    const states = coverageUnits.map((cu) => cu.status);
    for (const state of states) {
      expect([
        'UNPROCESSED',
        'QUEUED',
        'EXTRACTING',
        'EXTRACTED',
        'REVIEW_REQUIRED',
        'RECONCILING',
        'MAPPED',
        'VERIFIED',
        'PUBLISHED',
        'EXCLUDED_WITH_REASON',
      ]).toContain(state);
    }

    // Verify back cover is explicitly EXCLUDED_WITH_REASON
    const excluded = coverageUnits.filter((cu) => cu.status === 'EXCLUDED_WITH_REASON');
    expect(excluded.length).toBe(1);
    expect(excluded[0].exclusionReason).toContain('Blank back cover');
  });

  it('4. should verify coverage accounting spans all 408 PDF pages without gaps', async () => {
    const sections = await db.sourceSection.findMany({
      where: { sourceId },
      orderBy: { order: 'asc' },
    });

    let expectedStart = 1;
    for (const section of sections) {
      expect(section.pageStart).toBe(expectedStart);
      expectedStart = (section.pageEnd ?? section.pageStart ?? 0) + 1;
    }
    // Final end page should be 408 + 1 = 409
    expect(expectedStart).toBe(409);
  });

  it('5. should preserve source exam tags as SOURCE-DERIVED metadata without canonical conflation', async () => {
    const cuTopic1 = await db.coverageUnit.findFirstOrThrow({
      where: { sourceId, label: { contains: 'Coverage Unit 1:' } },
    });
    expect(cuTopic1.scopeDescription).toContain('RAS Pre, RAS Mains, PSI, 1st Grade');

    const cuTopic8 = await db.coverageUnit.findFirstOrThrow({
      where: { sourceId, label: { contains: 'Coverage Unit 8:' } },
    });
    expect(cuTopic8.scopeDescription).toContain('Source exam tags: None');
  });
});
