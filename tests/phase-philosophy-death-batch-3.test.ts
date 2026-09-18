import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { BATCH_P3_CONCEPTS, seedBatchP3PhilosophyKnowledge } from '../lib/benchmark/batch-p3-philosophy-seed';

describe('Philosophy Master — Batch P3: The Nature & Badness of Death, Deprivation, Symmetry & Immortality (Yale PHIL 176)', () => {
  beforeAll(async () => {
    await seedBatchP3PhilosophyKnowledge();
  });

  describe('Structural & Quantitative Verification', () => {
    it('should contain exactly 5 canonical concepts across Topics 5 and 6', () => {
      expect(BATCH_P3_CONCEPTS.length).toBe(5);

      const topicOrders = new Set(BATCH_P3_CONCEPTS.map((c) => c.topicOrder));
      expect(topicOrders.size).toBe(2);
      expect(topicOrders.has(5)).toBe(true);
      expect(topicOrders.has(6)).toBe(true);

      const expectedIds = ['CON-PHIL-11', 'CON-PHIL-12', 'CON-PHIL-13', 'CON-PHIL-14', 'CON-PHIL-15'];
      const actualIds = BATCH_P3_CONCEPTS.map((c) => c.id);
      expect(actualIds).toEqual(expectedIds);

      // Verify unique slugs
      const slugs = new Set(BATCH_P3_CONCEPTS.map((c) => c.slug));
      expect(slugs.size).toBe(5);
    });

    it('should verify each concept has at least 4 claims with authoritative lecture locators', () => {
      let totalClaims = 0;
      for (const concept of BATCH_P3_CONCEPTS) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(4);
        totalClaims += concept.claims.length;
        for (const claim of concept.claims) {
          expect(claim.statement.length).toBeGreaterThan(30);
          expect(claim.locator.length).toBeGreaterThan(5);
          expect(claim.locator).toContain('Yale PHIL 176');
          expect(claim.excerpt.length).toBeGreaterThan(5);
          expect(['CORE_PRINCIPLE', 'HISTORICAL_FACT']).toContain(claim.claimType);
          expect(claim.confidence).toBe('HIGH');
          expect(claim.epistemicLevel).toBe('ESTABLISHED_FACT');
        }
      }
      expect(totalClaims).toBe(20);
    });

    it('should verify each concept has exactly 4 content blocks with INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
      let totalBlocks = 0;
      for (const concept of BATCH_P3_CONCEPTS) {
        expect(concept.contentBlocks.length).toBe(4);
        totalBlocks += concept.contentBlocks.length;
        const types = concept.contentBlocks.map((b) => b.type);
        expect(types).toEqual(['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION']);

        for (const b of concept.contentBlocks) {
          expect(b.title.length).toBeGreaterThan(5);
          expect(b.body.length).toBeGreaterThan(50);
        }

        // MECHANISM block must contain an ASCII diagram
        const mechanismBlock = concept.contentBlocks.find((b) => b.type === 'MECHANISM');
        expect(mechanismBlock).toBeDefined();
        expect(mechanismBlock?.body).toContain('```');
      }
      expect(totalBlocks).toBe(20);
    });

    it('should verify each concept maps to all 3 target examinations', () => {
      const requiredExams = ['PHILOSOPHY_OPTIONAL', 'UPSC_GS4', 'ACADEMIC_PHILOSOPHY'];
      let totalMappings = 0;
      for (const concept of BATCH_P3_CONCEPTS) {
        expect(concept.examMappings.length).toBe(3);
        totalMappings += concept.examMappings.length;
        const examCodes = concept.examMappings.map((m) => m.examCode);
        for (const req of requiredExams) {
          expect(examCodes).toContain(req);
        }
        for (const em of concept.examMappings) {
          expect(em.syllabusUnit.length).toBeGreaterThan(10);
          expect(em.notes.length).toBeGreaterThan(10);
          expect(em.frequentTraps?.length).toBeGreaterThan(10);
        }
      }
      expect(totalMappings).toBe(15);
    });

    it('should verify each concept has 3 revision units: FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M', () => {
      let totalRevUnits = 0;
      for (const concept of BATCH_P3_CONCEPTS) {
        expect(concept.revisionUnits.length).toBe(3);
        totalRevUnits += concept.revisionUnits.length;
        const types = concept.revisionUnits.map((r) => r.type);
        expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);
        for (const ru of concept.revisionUnits) {
          expect(ru.content.length).toBeGreaterThan(30);
        }
      }
      expect(totalRevUnits).toBe(15);
    });

    it('should verify each concept has at least 3 graded questions with trap explanations and options', () => {
      let totalQuestions = 0;
      for (const concept of BATCH_P3_CONCEPTS) {
        expect(concept.questions.length).toBeGreaterThanOrEqual(3);
        totalQuestions += concept.questions.length;
        for (const q of concept.questions) {
          expect(q.stem.length).toBeGreaterThan(20);
          expect(q.options.length).toBe(4);
          expect(q.options).toContain(q.correctAnswer);
          expect(q.explanation.length).toBeGreaterThan(20);
          expect(q.trapExplanation?.length).toBeGreaterThan(10);
          expect(q.examinerTrapPattern?.length).toBeGreaterThan(10);
          expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
        }
      }
      expect(totalQuestions).toBe(15);
    });

    it('should verify math delimiters are balanced across all content blocks and revision units', () => {
      for (const concept of BATCH_P3_CONCEPTS) {
        for (const block of concept.contentBlocks) {
          const dollarCount = (block.body.match(/\\\$/g) || []).length;
          const rawDollarCount = (block.body.match(/\$/g) || []).length;
          const mathDollarCount = rawDollarCount - dollarCount;
          expect(mathDollarCount % 2).toBe(0);
        }
        for (const ru of concept.revisionUnits) {
          const dollarCount = (ru.content.match(/\\\$/g) || []).length;
          const rawDollarCount = (ru.content.match(/\$/g) || []).length;
          const mathDollarCount = rawDollarCount - dollarCount;
          expect(mathDollarCount % 2).toBe(0);
        }
      }
    });
  });

  describe('Database Persistence Verification', () => {
    it('should verify Domain and Subject records exist in SQLite dev.db', async () => {
      const domain = await db.domain.findFirst({ where: { slug: 'philosophy-ethics-human-values' } });
      expect(domain).toBeDefined();
      expect(domain?.name).toBe('Philosophy, Ethics & Human Values');

      const subject = await db.subject.findFirst({ where: { slug: 'western-philosophy-metaphysics-ethics' } });
      expect(subject).toBeDefined();
      expect(subject?.domainId).toBe(domain?.id);
    });

    it('should verify Topics 5 and 6 exist under western-philosophy-metaphysics-ethics', async () => {
      const subject = await db.subject.findFirst({ where: { slug: 'western-philosophy-metaphysics-ethics' } });
      const topics = await db.topic.findMany({
        where: { subjectId: subject?.id, order: { in: [5, 6] } },
        orderBy: { order: 'asc' },
      });
      expect(topics.length).toBe(2);
      expect(topics[0].slug).toBe('the-nature-and-badness-of-death-the-deprivation-account');
      expect(topics[1].slug).toBe('lucretius-symmetry-puzzle-and-the-puzzle-of-immortality');
    });

    it('should verify all 5 Concepts exist in database with child relations', async () => {
      for (const cDef of BATCH_P3_CONCEPTS) {
        const concept = await db.concept.findUnique({
          where: { id: cDef.id },
          include: {
            claims: { include: { evidence: true } },
            contentBlocks: true,
            examMappings: true,
            revisionUnits: true,
            questions: true,
          },
        });

        expect(concept).toBeDefined();
        expect(concept?.slug).toBe(cDef.slug);
        expect(concept?.claims.length).toBe(cDef.claims.length);
        expect(concept?.contentBlocks.length).toBe(4);
        expect(concept?.examMappings.length).toBe(3);
        expect(concept?.revisionUnits.length).toBe(3);
        expect(concept?.questions.length).toBe(cDef.questions.length);

        // Verify evidence links to SRC-YALE-PHIL-176
        for (const cl of concept!.claims) {
          expect(cl.evidence.length).toBeGreaterThanOrEqual(1);
          expect(cl.evidence[0].sourceId).toBe('SRC-YALE-PHIL-176');
        }
      }
    });

    it('should verify exams were registered and linked correctly', async () => {
      const exams = await db.exam.findMany({
        where: {
          slug: {
            in: ['philosophy-optional', 'upsc-gs4', 'academic-philosophy'],
          },
        },
      });
      expect(exams.length).toBe(3);
    });
  });
});
