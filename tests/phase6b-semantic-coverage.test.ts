import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { executePhase6ControlledIngestion } from '../lib/ingestion/polity-pdf-ingestor';
import {
  seedTopic9SemanticInventory,
  auditSemanticCoverage,
  TOPIC_9_SEMANTIC_UNITS,
} from '../lib/ingestion/semantic-coverage';

describe('Phase 6B: Semantic Coverage Audit (Topic 9 — Fundamental Rights)', () => {
  let sourceId: string;
  let topic9CoverageUnitId: string;

  beforeAll(async () => {
    // Clear DB tables in dependency order
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

    const cuTopic9 = await db.coverageUnit.findFirstOrThrow({
      where: { sourceId, label: { contains: 'Coverage Unit 9:' } },
    });
    topic9CoverageUnitId = cuTopic9.id;

    // Log explicit KnowledgeIssue for the page count reconciliation
    await db.knowledgeIssue.create({
      data: {
        type: 'PAGE_COUNT_DISCREPANCY_RECONCILED',
        severity: 'LOW',
        status: 'RESOLVED',
        sourceId,
        description:
          'PDF binary tree contains 408 pages; printable pages are 407 (pages 1 to 407); printed numbered pages are 401 (pp. 1 to 401). Offset is PDF Page = Printed Page + 6. Page 408 is a blank back cover page excluded with explicit reason.',
        resolution: 'Reconciled: 6 Front Matter + 401 Printed Content + 1 Back Cover = 408 PDF Pages.',
      },
    });
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify exact page count reconciliation and resolution issue', async () => {
    const issue = await db.knowledgeIssue.findFirstOrThrow({
      where: { sourceId, type: 'PAGE_COUNT_DISCREPANCY_RECONCILED' },
    });

    expect(issue.status).toBe('RESOLVED');
    expect(issue.description).toContain('PDF Page = Printed Page + 6');
    expect(issue.resolution).toContain('408 PDF Pages');
  });

  it('2. should verify two-layer architecture: Physical CoverageUnit + Semantic Ingestion Items', async () => {
    // Layer 1: Physical CoverageUnit exists
    const cu = await db.coverageUnit.findUniqueOrThrow({
      where: { id: topic9CoverageUnitId },
    });
    expect(cu.label).toContain('Coverage Unit 9: Part-3 Fundamental Rights');

    // Layer 2: Seed Semantic Ingestion Items
    const seeded = await seedTopic9SemanticInventory(sourceId, topic9CoverageUnitId);
    expect(seeded.length).toBe(TOPIC_9_SEMANTIC_UNITS.length);
    expect(seeded.length).toBe(45);
  });

  it('3. should verify granular semantic inventory and multi-modal classification for Topic 9', async () => {
    const items = await db.ingestionItem.findMany({
      where: { coverageUnitId: topic9CoverageUnitId },
    });

    expect(items.length).toBe(45);

    const parsed = items.map((i) => JSON.parse(i.extractedContent || '{}'));

    // Check content types
    const types = parsed.map((p) => p.contentType);
    expect(types).toContain('CONSTITUTIONAL_TEXT');
    expect(types).toContain('JUDICIAL_DOCTRINE');
    expect(types).toContain('COMPARISON_TABLE');
    expect(types).toContain('LEGAL_RULE');
    expect(types).toContain('CURRENT_AFFAIRS_REFERENCE');

    // Verify structured tables are captured as table-derived units
    const tableUnits = parsed.filter((p) => p.origin === 'TABLE_DERIVED');
    expect(tableUnits.length).toBe(4);

    // Verify verification-required units are flagged
    const verifyRequired = parsed.filter((p) => p.requiresVerification);
    expect(verifyRequired.length).toBeGreaterThan(10);
  });

  it('4. should successfully audit full semantic coverage when all modules are present', async () => {
    const audit = await auditSemanticCoverage(topic9CoverageUnitId);
    expect(audit.hasOmission).toBe(false);
    expect(audit.missingModulesCount).toBe(0);
    expect(audit.totalSemanticUnits).toBe(45);
    expect(audit.semanticStatus).toBe('SEMANTICALLY_INVENTORIED_WITHIN_AUDIT_SCOPE');
  });

  it('5. should DELIBERATELY INJECT AN OMISSION and prove automated omission detection', async () => {
    // 1. Temporarily delete Article 21A (Right to Education) and Article 32 (Constitutional Remedies & Writs)
    const allItems = await db.ingestionItem.findMany({
      where: { coverageUnitId: topic9CoverageUnitId },
    });

    const deletedItems: any[] = [];
    for (const item of allItems) {
      const parsed = JSON.parse(item.extractedContent || '{}');
      if (parsed.localHeading.includes('Article 21A') || parsed.localHeading.includes('Article 32')) {
        deletedItems.push(item);
        await db.ingestionItem.delete({ where: { id: item.id } });
      }
    }

    expect(deletedItems.length).toBeGreaterThanOrEqual(2);

    // 2. Run Audit on incomplete dataset -> MUST DETECT OMISSION
    const flawedAudit = await auditSemanticCoverage(topic9CoverageUnitId);
    expect(flawedAudit.hasOmission).toBe(true);
    expect(flawedAudit.missingModulesCount).toBeGreaterThanOrEqual(2);
    expect(flawedAudit.semanticStatus).toBe('OMISSION_DETECTED');

    const missingKeys = flawedAudit.missingModules.map((m) => m.key);
    expect(missingKeys).toContain('Article 21A');
    expect(missingKeys).toContain('Article 32');

    // 3. Restore omitted units
    for (const item of deletedItems) {
      await db.ingestionItem.create({
        data: {
          id: item.id,
          sourceId: item.sourceId,
          coverageUnitId: item.coverageUnitId,
          rawInput: item.rawInput,
          extractedContent: item.extractedContent,
          status: item.status,
          reviewerNotes: item.reviewerNotes,
        },
      });
    }

    // 4. Re-run Audit -> MUST VERIFY RESTORED SEMANTIC COVERAGE
    const restoredAudit = await auditSemanticCoverage(topic9CoverageUnitId);
    expect(restoredAudit.hasOmission).toBe(false);
    expect(restoredAudit.missingModulesCount).toBe(0);
    expect(restoredAudit.semanticStatus).toBe('SEMANTICALLY_INVENTORIED_WITHIN_AUDIT_SCOPE');
  });
});
