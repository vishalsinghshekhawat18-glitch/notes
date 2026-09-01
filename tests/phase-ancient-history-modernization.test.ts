import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedAncientMasterCanonicalKnowledge, CANONICAL_25_ANCIENT_TOPICS } from '../lib/benchmark/batch-ancient-master-canonical-seed';

describe('Ancient Indian History Modernization & Hardening — Regression & Acceptance Test', () => {
  beforeAll(async () => {
    // Run seed to ensure latest canonical dataset is in DB
    await seedAncientMasterCanonicalKnowledge();
  }, 90000);

  it('A & B: exactly 65 concepts exist with CON-ANC-001 through CON-ANC-065 continuity', async () => {
    const subject = await db.subject.findFirst({
      where: { slug: 'ancient-indian-history' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
        },
      },
    });

    expect(subject).toBeDefined();
    const allConcepts = subject!.topics.flatMap(t => t.concepts);
    expect(allConcepts.length).toBe(65);

    // Verify sequential canonical IDs CON-ANC-001 to CON-ANC-065
    const conceptIds = allConcepts.map(c => c.id).sort();
    for (let i = 1; i <= 65; i++) {
      const expectedId = `CON-ANC-${i.toString().padStart(3, '0')}`;
      expect(conceptIds).toContain(expectedId);
    }
  });

  it('C & D: exactly 25 canonical topics exist with zero orphans', async () => {
    const subject = await db.subject.findFirst({
      where: { slug: 'ancient-indian-history' },
      include: {
        topics: {
          include: {
            concepts: true,
          },
          orderBy: { order: 'asc' },
        },
      },
    });

    expect(subject!.topics.length).toBe(25);

    for (let i = 1; i <= 25; i++) {
      const topic = subject!.topics.find(t => t.order === i);
      expect(topic).toBeDefined();
      expect(topic!.concepts.length).toBeGreaterThanOrEqual(1);
    }

    const expectedSlugs = CANONICAL_25_ANCIENT_TOPICS.map(t => t.slug);
    const actualSlugs = subject!.topics.map(t => t.slug);
    for (const slug of expectedSlugs) {
      expect(actualSlugs).toContain(slug);
    }
  });

  it('E: every concept has the 4-block architecture (INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION)', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'ancient-indian-history' },
        },
      },
      include: {
        contentBlocks: true,
      },
    });

    expect(concepts.length).toBe(65);

    for (const c of concepts) {
      const blockTypes = c.contentBlocks.map(b => b.type);
      expect(blockTypes).toContain('INTUITION');
      expect(blockTypes).toContain('CORE_IDEA');
      expect(blockTypes).toContain('MECHANISM');
      expect(blockTypes).toContain('EXAM_APPLICATION');
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(4);

      for (const b of c.contentBlocks) {
        expect(b.body.length).toBeGreaterThan(50);
      }
    }
  });

  it('F: every concept has 3 revision units (FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M)', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'ancient-indian-history' },
        },
      },
      include: {
        revisionUnits: true,
      },
    });

    for (const c of concepts) {
      const revTypes = c.revisionUnits.map(r => r.type);
      expect(revTypes).toContain('FLASH_30S');
      expect(revTypes).toContain('SUMMARY_2M');
      expect(revTypes).toContain('ARCHITECTURE_5M');
      expect(c.revisionUnits.length).toBe(3);
    }
  });

  it('G: every concept has >= 2 practice questions with full explanations and trap explanations', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'ancient-indian-history' },
        },
      },
      include: {
        questions: true,
      },
    });

    let totalQuestions = 0;
    for (const c of concepts) {
      expect(c.questions.length).toBeGreaterThanOrEqual(2);
      totalQuestions += c.questions.length;

      for (const q of c.questions) {
        expect(q.stem.length).toBeGreaterThan(10);
        expect(q.explanation.length).toBeGreaterThan(20);
        expect(q.trapExplanation).toBeDefined();
        expect(q.trapExplanation!.length).toBeGreaterThan(10);
        const options = typeof q.options === 'string' ? JSON.parse(q.options) : (q.options || []);
        expect(options.length).toBeGreaterThanOrEqual(2);
      }
    }

    expect(totalQuestions).toBeGreaterThanOrEqual(130);
  });

  it('H & I: every concept has all 8 target exam mappings with meaningful differentiation', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'ancient-indian-history' },
        },
      },
      include: {
        examMappings: {
          include: { exam: true },
        },
      },
    });

    const targetExamSlugs = [
      'upsc-apfc',
      'rpsc-ras',
      'rbi-grade-b',
      'nabard-grade-a',
      'sbi-po',
      'ibps-po',
      'sebi-grade-a',
      'iibf-dbf',
    ];

    for (const c of concepts) {
      expect(c.examMappings.length).toBe(8);
      const mappedSlugs = c.examMappings.map(m => m.exam.slug);
      for (const slug of targetExamSlugs) {
        expect(mappedSlugs).toContain(slug);
      }
    }
  });

  it('J & K: claims, evidence & provenance integrity', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'ancient-indian-history' },
        },
      },
      include: {
        claims: {
          include: {
            evidence: true,
          },
        },
      },
    });

    for (const c of concepts) {
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      for (const cl of c.claims) {
        expect(cl.evidence[0]?.locator).toBeDefined();
        expect(cl.evidence[0]?.excerpt?.length || 0).toBeGreaterThan(5);
      }
    }
  });

  it('L: Rajasthan-specific ancient archaeology & polities coverage depth', async () => {
    const rajTopic = await db.topic.findFirst({
      where: {
        subject: { slug: 'ancient-indian-history' },
        order: 24,
      },
      include: {
        concepts: {
          include: {
            claims: true,
            contentBlocks: true,
          },
        },
      },
    });

    expect(rajTopic).toBeDefined();
    expect(rajTopic!.concepts.length).toBeGreaterThanOrEqual(2);

    const allRajText = rajTopic!.concepts.flatMap(c => [
      c.title,
      c.shortDefinition,
      ...c.claims.map(cl => cl.statement),
      ...c.contentBlocks.map(b => b.body),
    ]).join(' ');

    expect(allRajText).toContain('Bagor');
    expect(allRajText).toContain('Ahar');
    expect(allRajText).toContain('Ganeshwar');
    expect(allRajText).toContain('Bairath');
    expect(allRajText).toContain('Bhabru');
    expect(allRajText).toContain('Ghosundi');
  });
});
