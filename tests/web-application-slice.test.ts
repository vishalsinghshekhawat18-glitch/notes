import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';
import { seedTopic9CanonicalKnowledge } from '../lib/benchmark/topic-9-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '../lib/benchmark/topic-10-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';
import {
  getAllLibraryData,
  getTopicWithConcepts,
  getConceptWithFullContext,
  searchConcepts,
} from '../lib/knowledge/web-data';

describe('Web Application Slice: Library, Curriculum, and Concept Viewer Service', () => {
  beforeAll(async () => {
    // Clean DB and seed all benchmark topics for clean end-to-end web testing
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

    // seedBatchACanonicalKnowledge seeds Topics 1-4 (22 concepts)
    await seedBatchACanonicalKnowledge();
    // seedTopic9CanonicalKnowledge seeds Topic 9 (16 concepts)
    await seedTopic9CanonicalKnowledge();
    // seedTopic10CanonicalKnowledge seeds Topic 10 (5 concepts)
    await seedTopic10CanonicalKnowledge();
    // seedInflationCanonicalKnowledge seeds Inflation (5 concepts)
    await seedInflationCanonicalKnowledge();
  }, 45000);

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should load all Library domains and subjects with topics and concept counts', async () => {
    const domains = await getAllLibraryData();
    expect(domains.length).toBeGreaterThanOrEqual(2);

    const polityDomain = domains.find(
      (d) => d.slug === 'constitutional-law-governance' || d.slug === 'indian-governance-administration' || d.name.toLowerCase().includes('polity') || d.name.toLowerCase().includes('governance')
    );
    expect(polityDomain).toBeDefined();

    const politySubject = polityDomain?.subjects.find(
      (s) => s.slug === 'indian-polity' || s.name.toLowerCase().includes('polity')
    );
    expect(politySubject).toBeDefined();
    expect(politySubject?.topics.length).toBeGreaterThanOrEqual(1);

    const fundamentalRightsTopic = politySubject?.topics.find(
      (t) => t.slug === 'part-3-fundamental-rights' || t.title.toLowerCase().includes('fundamental rights')
    );
    expect(fundamentalRightsTopic).toBeDefined();
    expect(fundamentalRightsTopic?.concepts.length).toBe(16);
  });

  it('2. should load Topic 9 (Part III: Fundamental Rights) with all 16 concepts and exam mappings', async () => {
    const topic = await getTopicWithConcepts('part-3-fundamental-rights');
    expect(topic).toBeDefined();
    expect(topic?.concepts.length).toBe(16);

    // Verify first and last concept of Topic 9
    const firstConcept = topic?.concepts[0];
    expect(firstConcept?.slug).toBe('part-3-overview-nature-of-fundamental-rights');
    expect(firstConcept?.contentBlocks.length).toBeGreaterThan(0);

    const art14 = topic?.concepts.find((c) => c.slug === 'article-14-equality-non-arbitrariness');
    expect(art14).toBeDefined();
    expect(art14?.examMappings.length).toBeGreaterThanOrEqual(3); // UPSC, RPSC, APFC
  });

  it('3. should load full context for Article 14 concept (reading blocks, evidence, exams, revision, questions, sibling concepts)', async () => {
    const concept = await getConceptWithFullContext('article-14-equality-non-arbitrariness');
    expect(concept).toBeDefined();
    expect(concept?.title).toContain('Article 14');
    expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(2);
    expect(concept?.claims.length).toBeGreaterThanOrEqual(2);
    expect(concept?.examMappings.length).toBeGreaterThanOrEqual(3);
    expect(concept?.revisionUnits.length).toBe(3); // 30s, 2m, 5m
    expect(concept?.questions.length).toBeGreaterThanOrEqual(1);
    expect(concept?.topic.concepts?.length).toBe(16); // Sibling concepts loaded for navigation
  });

  it('4. should verify fast concept search across titles and short definitions', async () => {
    const equalityResults = await searchConcepts('Equality');
    expect(equalityResults.length).toBeGreaterThanOrEqual(1);
    expect(equalityResults.some((r) => r.slug === 'article-14-equality-non-arbitrariness')).toBe(true);

    const cpiResults = await searchConcepts('CPI');
    expect(cpiResults.length).toBeGreaterThanOrEqual(1);
    expect(cpiResults.some((r) => r.slug === 'price-indices-measurement-cpi-wpi-core-headline')).toBe(true);
  });
});
