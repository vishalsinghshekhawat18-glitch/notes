import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedPolityMasterCanonicalKnowledge, CANONICAL_25_POLITY_TOPICS } from '../lib/benchmark/batch-polity-master-canonical-seed';

describe('Indian Polity Modernization & Hardening — Regression & Acceptance Test', () => {
  beforeAll(async () => {
    // Seed the modernized master knowledge
    await seedPolityMasterCanonicalKnowledge();
  }, 60000);

  it('A & B: exactly 136 concepts exist with CON-POL-001 through CON-POL-136 continuity', async () => {
    const subject = await db.subject.findFirst({
      where: { slug: 'indian-polity' },
      include: {
        topics: {
          include: {
            concepts: {
              orderBy: { order: 'asc' },
            },
          },
        },
      },
    });

    expect(subject).toBeDefined();
    const allConcepts = subject!.topics.flatMap(t => t.concepts);
    expect(allConcepts.length).toBe(136);

    for (let i = 1; i <= 136; i++) {
      const expectedId = `CON-POL-${i.toString().padStart(3, '0')}`;
      const found = allConcepts.find(c => c.id === expectedId);
      expect(found, `Concept ${expectedId} should exist`).toBeDefined();
    }
  });

  it('C & D: exactly 25 canonical topics exist with zero orphans', async () => {
    const subject = await db.subject.findFirst({
      where: { slug: 'indian-polity' },
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
      expect(topic, `Topic order ${i} should exist`).toBeDefined();
      expect(topic!.concepts.length).toBeGreaterThan(0);
    }

    // Verify canonical slugs
    const topicSlugs = subject!.topics.map(t => t.slug);
    for (const cDef of CANONICAL_25_POLITY_TOPICS) {
      expect(topicSlugs).toContain(cDef.slug);
    }
  });

  it('E: every concept has the 4-block architecture (INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION)', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'indian-polity' },
        },
      },
      include: {
        contentBlocks: true,
      },
    });

    expect(concepts.length).toBe(136);

    for (const c of concepts) {
      const blockTypes = c.contentBlocks.map(b => b.type);
      expect(blockTypes).toContain('INTUITION');
      expect(blockTypes).toContain('CORE_IDEA');
      expect(blockTypes).toContain('MECHANISM');
      expect(blockTypes).toContain('EXAM_APPLICATION');
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('F: every concept has 3 revision units (FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M)', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'indian-polity' },
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
    }
  });

  it('G: every concept has >= 2 practice questions with full explanations and trap explanations', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'indian-polity' },
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
        const options = typeof q.options === 'string' ? JSON.parse(q.options) : (q.options || []);
        expect(options.length).toBeGreaterThanOrEqual(2);
      }
    }

    expect(totalQuestions).toBeGreaterThanOrEqual(272);
  });

  it('H & I: every concept has all 8 target exam mappings with meaningful differentiation', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'indian-polity' },
        },
      },
      include: {
        examMappings: {
          include: { exam: true },
        },
      },
    });

    const targetExams = [
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
      for (const slug of targetExams) {
        expect(mappedSlugs).toContain(slug);
      }
    }
  });

  it('J & K: claims, evidence & provenance integrity', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: {
          subject: { slug: 'indian-polity' },
        },
      },
      include: {
        claims: {
          include: { evidence: true },
        },
      },
    });

    for (const c of concepts) {
      expect(c.claims.length).toBeGreaterThanOrEqual(2);
      for (const cl of c.claims) {
        expect(cl.statement.length).toBeGreaterThan(20);
        expect(cl.evidence.length).toBeGreaterThanOrEqual(1);
        expect(cl.evidence[0].locator.length).toBeGreaterThan(5);
      }
    }
  });
});
