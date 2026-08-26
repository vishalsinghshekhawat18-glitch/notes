import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';

describe('Phase 9.9A: Approved Pedagogical Corrections & System Transfer Validation Suite', () => {
  let topicId: string;

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

    // Seed upgraded Inflation Benchmark
    const result = await seedInflationCanonicalKnowledge();
    topicId = result.topicId;
  }, 30000);

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. [Patch 1] should verify monetary transmission details sectoral heterogeneity and cash-rich corporate indirect demand channels', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const transmissionBlock = blocks.find((b) => b.title?.includes('Transmission Mechanism & Sectoral Heterogeneity'));
    expect(transmissionBlock).toBeDefined();
    expect(transmissionBlock?.body).toContain('Stronger / More Direct Exposure');
    expect(transmissionBlock?.body).toContain('Weaker / Indirect Exposure');
    expect(transmissionBlock?.body).toContain('Cash-rich large corporations');
    expect(transmissionBlock?.body).toContain('neither instantaneous nor uniform');
  });

  it('2. [Patch 2] should verify WPI services explanation is methodologically safe and rejects the false physical rule', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const wpiBlock = blocks.find((b) => b.title?.includes('True Scope of WPI vs CPI'));
    expect(wpiBlock).toBeDefined();
    expect(wpiBlock?.body).toContain('WPI is India\'s wholesale price index for goods in its defined commodity basket');
    expect(wpiBlock?.body).toContain('Do not infer that "services cannot be bought or sold wholesale." That statement is false.');
    expect(wpiBlock?.body).toContain('Producer Price Index (PPI)');
  });

  it('3. [Patch 3] should verify Progressive Tax Bracket Creep is clearly modeled as a conditional fiscal gain for government', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const taxBlock = blocks.find((b) => b.title?.includes('Fiscal Bracket Creep'));
    expect(taxBlock).toBeDefined();
    expect(taxBlock?.body).toContain('bracket creep');
    expect(taxBlock?.body).toContain('nominal salary rises by 8%');
    expect(taxBlock?.body).toContain('adjusts tax thresholds by 2%');
    expect(taxBlock?.body).toContain('higher marginal income tax bracket');
  });

  it('4. [Patch 4] should verify Cost-Push Pass-Through is explicitly conditioned by input substitutability & pricing power', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const srasBlock = blocks.find((b) => b.title?.includes('Potential Output, Output Gap & The Factory Analogy'));
    expect(srasBlock).toBeDefined();
    expect(srasBlock?.body).toContain('input substitutability');
    expect(srasBlock?.body).toContain('market pricing power');
    expect(srasBlock?.body).toContain('inventories');
  });

  it('5. [System Transfer Validation Scenario] should correctly reason through a cash-rich firm affected indirectly by household mortgage EMI hikes', async () => {
    // Large cash-rich company with zero bank debt sells consumer goods to households facing higher mortgage EMIs
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const transmissionBlock = blocks.find((b) => b.title?.includes('Transmission Mechanism & Sectoral Heterogeneity'));
    expect(transmissionBlock?.body).toMatch(/indirectly.*consumer demand.*mortgage/i);
  });

  it('6. [System Transfer Validation Scenario] should correctly reason through WPI vs CPI scope on wholesale B2B logistics', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const wpiBlock = blocks.find((b) => b.title?.includes('True Scope of WPI vs CPI'));
    expect(wpiBlock?.body).toContain('business-to-business (B2B)');
    expect(wpiBlock?.body).toContain('Producer Price Index');
  });

  it('7. [System Transfer Validation Scenario] should correctly reason through fiscal bracket creep when nominal wages rise with unchanged real purchasing power', async () => {
    const claim = await db.claim.findFirst({
      where: { statement: { contains: 'bracket creep' } },
    });

    expect(claim).toBeDefined();
    expect(claim?.epistemicLevel).toBe('ESTABLISHED_FACT');
    expect(claim?.claimType).toBe('CONDITIONAL_RULE');
  });
});
