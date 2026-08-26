import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';

describe('Phase 9.8: Inflation Pedagogical Bridges & Cognitive Scaffolding Suite', () => {
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

  it('1. should verify Expectation Formation Bridge is present with labor market qualifications', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const expectationBlock = blocks.find((b) => b.body.includes('Inflation Expectations') && b.body.includes('Worker'));
    expect(expectationBlock).toBeDefined();
    expect(expectationBlock?.body).toContain('negotiating annual wage contracts');
    expect(expectationBlock?.body).toContain('bargaining power');
  });

  it('2. should verify Monetary Transmission Friction Layer is present with asymmetric repricing & small savings floor', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const transmissionBlock = blocks.find((b) => b.title?.includes('Transmission Real-World Friction') || b.body.includes('Asymmetric Repricing'));
    expect(transmissionBlock).toBeDefined();
    expect(transmissionBlock?.body).toContain('EBLR');
    expect(transmissionBlock?.body).toContain('Small Savings');
  });

  it('3. should verify Potential GDP & Output Gap factory overdrive analogy is present', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const factoryBlock = blocks.find((b) => b.body.includes('manufacturing factory') && b.body.includes('1,000 shirts'));
    expect(factoryBlock).toBeDefined();
    expect(factoryBlock?.body).toContain('Output Gap');
    expect(factoryBlock?.body).toContain('Potential GDP');
  });

  it('4. should verify Exchange-Rate Pass-Through numerical bridge ($100 at ₹75 vs ₹85) is present', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const fxBlock = blocks.find((b) => b.body.includes('₹7,500 per barrel') && b.body.includes('₹8,500 per barrel'));
    expect(fxBlock).toBeDefined();
  });

  it('5. should verify Fixed vs Floating Debt contrast is clearly articulated', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const debtBlock = blocks.find((b) => b.body.includes('Fixed-Rate Loan') && b.body.includes('Floating-Rate Loan'));
    expect(debtBlock).toBeDefined();
  });

  it('6. should verify WPI service exclusion conceptual origin is explained', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const wpiBlock = blocks.find((b) => b.body.includes('Why WPI Excludes Services'));
    expect(wpiBlock).toBeDefined();
  });

  it('7. should verify Base Effect 3-step numerical price ladder is present', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const baseEffectBlock = blocks.find((b) => b.body.includes('Year 1') && b.body.includes('114.4'));
    expect(baseEffectBlock).toBeDefined();
    expect(baseEffectBlock?.body).toContain('Prices did NOT fall');
  });

  it('8. should verify Bond-Financed vs Monetized deficit distinction is present', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const deficitBlock = blocks.find((b) => b.body.includes('Bond-Financed Deficit') && b.body.includes('Monetized Deficit'));
    expect(deficitBlock).toBeDefined();
  });

  it('9. should verify Two Hands of Policy limitation (monetary rate hikes cannot create onions) is explicitly noted', async () => {
    const blocks = await db.contentBlock.findMany({
      where: { concept: { topicId } },
    });

    const policyBlock = blocks.find((b) => b.body.includes('Monetary Brake') && b.body.includes('Supply Lever'));
    expect(policyBlock).toBeDefined();
    expect(policyBlock?.body).toContain('cannot produce more onions');
  });
});
