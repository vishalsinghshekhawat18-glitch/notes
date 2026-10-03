import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBiotechCanonicalKnowledge } from '../lib/benchmark/batch-biotech-canonical-seed';
import {
  getAllLibraryData,
  getTopicWithConcepts,
  getConceptWithFullContext,
  searchConcepts,
} from '../lib/knowledge/web-data';

describe('Web Application Slice: Library, Curriculum, and Concept Viewer Service', () => {
  beforeAll(async () => {
    // Clean DB and seed biotech canonical knowledge for clean, ultra-fast web testing
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

    await seedBiotechCanonicalKnowledge();
  }, 15000);

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should load all Library domains and subjects with topics and concept counts', async () => {
    const domains = await getAllLibraryData();
    expect(domains.length).toBeGreaterThanOrEqual(1);

    const scienceDomain = domains.find(
      (d) => d.slug.includes('science') || d.name.toLowerCase().includes('science')
    );
    expect(scienceDomain).toBeDefined();

    const biotechSubject = scienceDomain?.subjects.find(
      (s) => s.slug.includes('biotechnology') || s.name.toLowerCase().includes('biotechnology')
    );
    expect(biotechSubject).toBeDefined();
    expect(biotechSubject?.topics.length).toBeGreaterThanOrEqual(1);

    const biotechTopic = biotechSubject?.topics[0];
    expect(biotechTopic).toBeDefined();
    expect(biotechTopic?.concepts.length).toBeGreaterThanOrEqual(5);
  });

  it('2. should load Biotech topic with concepts and exam mappings', async () => {
    const topic = await getTopicWithConcepts('applied-science-biotechnology-and-emerging-tech');
    expect(topic).toBeDefined();
    expect(topic?.concepts.length).toBe(5);

    const firstConcept = topic?.concepts[0];
    expect(firstConcept?.slug).toBe('recombinant-dna-technology-and-crispr-gene-editing');
    expect(firstConcept?.contentBlocks.length).toBeGreaterThan(0);

    const crisprConcept = topic?.concepts.find((c) => c.slug === 'recombinant-dna-technology-and-crispr-gene-editing');
    expect(crisprConcept).toBeDefined();
    expect(crisprConcept?.examMappings.length).toBeGreaterThanOrEqual(3);
  });

  it('3. should load full context for CRISPR concept (reading blocks, evidence, exams, revision, questions, sibling concepts)', async () => {
    const concept = await getConceptWithFullContext('recombinant-dna-technology-and-crispr-gene-editing');
    expect(concept).toBeDefined();
    expect(concept?.title).toContain('CRISPR');
    expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(2);
    expect(concept?.claims.length).toBeGreaterThanOrEqual(2);
    expect(concept?.examMappings.length).toBeGreaterThanOrEqual(3);
    expect(concept?.revisionUnits.length).toBe(3); // 30s, 2m, 5m
    expect(concept?.questions.length).toBeGreaterThanOrEqual(1);
    expect(concept?.topic.concepts?.length).toBe(5);
  });

  it('4. should verify fast concept search across titles and short definitions', async () => {
    const crisprResults = await searchConcepts('CRISPR');
    expect(crisprResults.length).toBeGreaterThanOrEqual(1);
    expect(crisprResults.some((r) => r.slug === 'recombinant-dna-technology-and-crispr-gene-editing')).toBe(true);

    const dnaResults = await searchConcepts('Recombinant');
    expect(dnaResults.length).toBeGreaterThanOrEqual(1);
  });
});
