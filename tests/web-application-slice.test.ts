import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import {
  getAllLibraryData,
  getTopicWithConcepts,
  getConceptWithFullContext,
  searchConcepts,
} from '../lib/knowledge/web-data';

describe('Web Application Slice: Library, Curriculum, and Concept Viewer Service', () => {
  beforeAll(async () => {
    // Clean DB and seed isolated test domain, subject, topic, and concept
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

    const domain = await db.domain.create({
      data: {
        slug: 'test-domain',
        name: 'Test Domain of Knowledge',
        description: 'Testing domain for web application services',
        order: 1,
      },
    });

    const subject = await db.subject.create({
      data: {
        slug: 'test-subject',
        name: 'Test Foundations Subject',
        description: 'Foundations for testing web data layers',
        scopeStatement: 'Foundational testing scope statement',
        domainId: domain.id,
        order: 1,
      },
    });

    const topic = await db.topic.create({
      data: {
        slug: 'test-topic-fundamentals',
        title: 'Test Topic: Architecture Fundamentals',
        description: 'Comprehensive architectural fundamentals for verification',
        subjectId: subject.id,
        order: 1,
      },
    });

    const source = await db.source.create({
      data: {
        id: 'SRC-TEST-001',
        title: 'Academic Test Source Specification',
        sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
        authorityTier: 'PEER_REVIEWED_ACADEMIC_REFERENCE',
      },
    });

    const concept = await db.concept.create({
      data: {
        id: 'CON-TEST-001',
        slug: 'test-concept-neumann-architecture',
        title: 'Test Concept: Von Neumann Architecture & Computing Foundations',
        shortDefinition: 'Theoretical foundations of Von Neumann stored-program computing and sequential instruction execution.',
        difficulty: 'INTERMEDIATE',
        status: 'CANONICAL',
        order: 1,
        topicId: topic.id,
      },
    });

    const claim = await db.claim.create({
      data: {
        id: 'CLM-TEST-001',
        conceptId: concept.id,
        statement: 'Von Neumann architecture specifies unified memory for data and instructions.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        status: 'CANONICAL_CLAIM',
      },
    });

    await db.evidence.create({
      data: {
        claimId: claim.id,
        sourceId: source.id,
        locator: 'Section 1.1',
        excerpt: 'Instructions and data share a common physical address space.',
        evidenceType: 'PRIMARY_COMPUTING_SPECIFICATION',
        authority: 'ACADEMIC_PEER_REVIEWED',
        evidentiarySupport: 'STRONG_SUPPORT',
        extractionConfidence: 'HIGH',
      },
    });

    await db.contentBlock.create({
      data: {
        conceptId: concept.id,
        type: 'CORE_IDEA',
        title: 'Core Architecture Overview',
        body: 'Von Neumann stored-program model revolutionized computation.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
    });

    await db.contentBlock.create({
      data: {
        conceptId: concept.id,
        type: 'MECHANISM',
        title: 'Execution Mechanics',
        body: 'Fetch-Decode-Execute instruction cycle operates sequentially.',
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
    });

    const exam = await db.exam.create({
      data: {
        slug: 'test-exam',
        name: 'Test Examination',
        conductingBody: 'National Testing Agency',
      },
    });

    await db.examConceptMapping.create({
      data: {
        examId: exam.id,
        conceptId: concept.id,
        syllabusUnit: 'Computer Systems',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
      },
    });

    await db.revisionUnit.create({
      data: {
        conceptId: concept.id,
        type: 'FLASHCARD',
        content: 'Von Neumann = Shared memory for code and data.',
        order: 1,
      },
    });

    await db.question.create({
      data: {
        conceptId: concept.id,
        type: 'MULTIPLE_CHOICE',
        stem: 'What is the key characteristic of Von Neumann architecture?',
        options: JSON.stringify(['Shared code and data memory', 'Separate buses only', 'Analog registers']),
        correctAnswer: 'Shared code and data memory',
        explanation: 'Unified memory architecture.',
        difficulty: 'EASY',
      },
    });
  }, 15000);

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should load all Library domains and subjects with topics and concept counts', async () => {
    const domains = await getAllLibraryData();
    expect(domains.length).toBeGreaterThanOrEqual(1);

    const testSubject = domains
      .flatMap((d) => d.subjects)
      .find((s) => s.slug === 'test-subject');
    expect(testSubject).toBeDefined();
    expect(testSubject?.topics.length).toBeGreaterThanOrEqual(1);

    const firstTopic = testSubject?.topics[0];
    expect(firstTopic).toBeDefined();
    expect(firstTopic?.concepts.length).toBeGreaterThanOrEqual(1);
  });

  it('2. should load Topic with concepts and exam mappings', async () => {
    const topic = await getTopicWithConcepts('test-topic-fundamentals');
    expect(topic).toBeDefined();
    expect(topic?.concepts.length).toBeGreaterThanOrEqual(1);

    const firstConcept = topic?.concepts[0];
    expect(firstConcept?.slug).toBe('test-concept-neumann-architecture');
    expect(firstConcept?.contentBlocks.length).toBeGreaterThan(0);

    const foundConcept = topic?.concepts.find((c) => c.slug === 'test-concept-neumann-architecture');
    expect(foundConcept).toBeDefined();
    expect(foundConcept?.examMappings.length).toBeGreaterThanOrEqual(1);
  });

  it('3. should load full context for concept (reading blocks, evidence, exams, revision, questions, sibling concepts)', async () => {
    const concept = await getConceptWithFullContext('test-concept-neumann-architecture');
    expect(concept).toBeDefined();
    expect(concept?.title).toContain('Von Neumann');
    expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(2);
    expect(concept?.claims.length).toBeGreaterThanOrEqual(1);
    expect(concept?.examMappings.length).toBeGreaterThanOrEqual(1);
    expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(1);
    expect(concept?.questions.length).toBeGreaterThanOrEqual(1);
    expect(concept?.topic.concepts?.length).toBeGreaterThanOrEqual(1);
  });

  it('4. should verify fast concept search across titles and short definitions', async () => {
    const neumannResults = await searchConcepts('Neumann');
    expect(neumannResults.length).toBeGreaterThanOrEqual(1);
    expect(neumannResults.some((r) => r.slug === 'test-concept-neumann-architecture')).toBe(true);

    const computingResults = await searchConcepts('Computing');
    expect(computingResults.length).toBeGreaterThanOrEqual(1);
  });
});
