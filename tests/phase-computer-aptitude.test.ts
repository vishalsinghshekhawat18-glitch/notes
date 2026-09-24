import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchComputerAptitudeCanonicalKnowledge } from '../lib/benchmark/batch-computer-aptitude-canonical-seed';
import { getLibrarySubjectsOverview } from '../lib/knowledge/web-data';

describe('Computer Aptitude & Digital Banking Systems Certification Suite', () => {
  beforeAll(async () => {
    await seedBatchComputerAptitudeCanonicalKnowledge();
  }, 30000);

  it('1. should verify Subject existence and metadata', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'computer-aptitude' },
      include: {
        domain: true,
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(subject).toBeDefined();
    expect(subject?.name).toBe('Computer Aptitude & Digital Banking Systems');
    expect(subject?.domain.name).toBe('Quantitative Aptitude & Reasoning');
    expect(subject?.topics.length).toBe(7);

    const totalConcepts = subject?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBe(16);
  });

  it('2. should verify content blocks, claims, and evidence for CON-COMP-001', async () => {
    const concept = await db.concept.findUnique({
      where: { id: 'CON-COMP-001' },
      include: {
        contentBlocks: true,
        claims: {
          include: {
            evidence: true,
          },
        },
        examMappings: {
          include: {
            exam: true,
          },
        },
        revisionUnits: true,
        questions: true,
      },
    });

    expect(concept).toBeDefined();
    expect(concept?.title).toContain('Von Neumann Stored-Program Architecture');
    expect(concept?.contentBlocks.length).toBe(4);
    expect(concept?.claims.length).toBeGreaterThanOrEqual(1);
    expect(concept?.claims[0].evidence.length).toBeGreaterThanOrEqual(1);

    expect(concept?.examMappings.length).toBeGreaterThanOrEqual(2);
    expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(1);
    expect(concept?.questions.length).toBeGreaterThanOrEqual(1);
  });

  it('3. should verify all 16 concepts have questions and exam mappings', async () => {
    const concepts = await db.concept.findMany({
      where: {
        id: { startsWith: 'CON-COMP-' },
      },
      include: {
        questions: true,
        examMappings: true,
        contentBlocks: true,
      },
    });

    expect(concepts.length).toBe(16);
    for (const c of concepts) {
      expect(c.contentBlocks.length).toBe(4);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('4. should verify subject appears in library overview with CMP-01 code', async () => {
    const overview = await getLibrarySubjectsOverview();
    const quantDomain = overview.find((d) => d.name === 'Quantitative Aptitude & Reasoning');
    expect(quantDomain).toBeDefined();

    const compSubject = quantDomain?.subjects.find((s) => s.slug === 'computer-aptitude');
    expect(compSubject).toBeDefined();
    expect(compSubject?.code).toBe('CMP-01');
    expect(compSubject?.topicsCount).toBe(7);
    expect(compSubject?.conceptsCount).toBe(16);
  });
});
