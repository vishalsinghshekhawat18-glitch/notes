import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { MODULE_U5_CONCEPTS, seedModuleU5FoodSystems } from '../lib/benchmark/batch-u5-food-systems-seed';

describe('Universal Knowledge & World Understanding — Module U5: The Biology, Psychology & Global Politics of Food', () => {
  beforeAll(async () => {
    await seedModuleU5FoodSystems();
  });

  describe('Structural & Quantitative Verification', () => {
    it('should contain exactly 5 canonical concepts under Topic 1', () => {
      expect(MODULE_U5_CONCEPTS.length).toBe(5);

      const topicOrders = new Set(MODULE_U5_CONCEPTS.map((c) => c.topicOrder));
      expect(topicOrders.size).toBe(1);
      expect(topicOrders.has(1)).toBe(true);

      const expectedIds = ['CON-FOOD-01', 'CON-FOOD-02', 'CON-FOOD-03', 'CON-FOOD-04', 'CON-FOOD-05'];
      const actualIds = MODULE_U5_CONCEPTS.map((c) => c.id);
      expect(actualIds).toEqual(expectedIds);

      const slugs = new Set(MODULE_U5_CONCEPTS.map((c) => c.slug));
      expect(slugs.size).toBe(5);
    });

    it('should enforce zero exam mappings (pure universal knowledge track)', () => {
      for (const concept of MODULE_U5_CONCEPTS) {
        expect(concept.examMappings).toEqual([]);
      }
    });

    it('should verify each concept has at least 4 claims with authoritative scientific locators', () => {
      let totalClaims = 0;
      for (const concept of MODULE_U5_CONCEPTS) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(4);
        totalClaims += concept.claims.length;
        for (const claim of concept.claims) {
          expect(claim.statement.length).toBeGreaterThan(30);
          expect(claim.locator.length).toBeGreaterThan(5);
          expect(claim.excerpt.length).toBeGreaterThan(5);
          expect(['CORE_PRINCIPLE', 'HISTORICAL_FACT', 'STATUTORY_RULE']).toContain(claim.claimType);
          expect(claim.confidence).toBe('HIGH');
          expect(['ESTABLISHED_FACT', 'SCHOLARLY_CONSENSUS']).toContain(claim.epistemicLevel);
        }
      }
      expect(totalClaims).toBe(20);
    });

    it('should verify each concept has exactly 4 content blocks with INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
      let totalBlocks = 0;
      for (const concept of MODULE_U5_CONCEPTS) {
        expect(concept.contentBlocks.length).toBe(4);
        totalBlocks += concept.contentBlocks.length;
        const types = concept.contentBlocks.map((b) => b.type);
        expect(types).toEqual(['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION']);

        for (const b of concept.contentBlocks) {
          expect(b.title.length).toBeGreaterThan(5);
          expect(b.body.length).toBeGreaterThan(50);
        }

        const mechanismBlock = concept.contentBlocks.find((b) => b.type === 'MECHANISM');
        expect(mechanismBlock).toBeDefined();
        expect(mechanismBlock?.body).toContain('```');
        expect(mechanismBlock?.body).toContain('+---');
        expect(mechanismBlock?.body).toContain('|');
      }
      expect(totalBlocks).toBe(20);
    });

    it('should verify each concept has exactly 3 multi-tiered revision units', () => {
      let totalUnits = 0;
      for (const concept of MODULE_U5_CONCEPTS) {
        expect(concept.revisionUnits.length).toBe(3);
        totalUnits += concept.revisionUnits.length;
        const types = concept.revisionUnits.map((r) => r.type);
        expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);

        const flash = concept.revisionUnits.find((r) => r.type === 'FLASH_30S')!;
        expect(flash.content.length).toBeGreaterThan(30);
        expect(flash.content.length).toBeLessThanOrEqual(350);

        const summary = concept.revisionUnits.find((r) => r.type === 'SUMMARY_2M')!;
        expect(summary.content.length).toBeGreaterThan(150);

        const arch = concept.revisionUnits.find((r) => r.type === 'ARCHITECTURE_5M')!;
        expect(arch.content.length).toBeGreaterThan(200);
        expect(arch.content).toMatch(/1\.|2\.|3\./);
      }
      expect(totalUnits).toBe(15);
    });

    it('should verify each concept has exactly 3 questions with distractor analysis and trap explanations', () => {
      let totalQuestions = 0;
      for (const concept of MODULE_U5_CONCEPTS) {
        expect(concept.questions.length).toBe(3);
        totalQuestions += concept.questions.length;

        for (const q of concept.questions) {
          expect(q.stem.length).toBeGreaterThan(20);
          expect(q.options.length).toBe(4);
          expect(q.options).toContain(q.correctAnswer);
          expect(q.explanation.length).toBeGreaterThan(30);
          expect(q.trapExplanation).toBeDefined();
          expect(q.trapExplanation!.length).toBeGreaterThan(15);
          expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
          expect(q.examinerTrapPattern).toBeDefined();
          expect(q.examinerTrapPattern!.length).toBeGreaterThan(10);
        }
      }
      expect(totalQuestions).toBe(15);
    });

    it('should enforce typographic safety: no unescaped single dollar signs in prose or diagrams', () => {
      for (const concept of MODULE_U5_CONCEPTS) {
        expect(concept.shortDefinition).not.toMatch(/(?<!\\)\$(?!\$)/);

        for (const claim of concept.claims) {
          expect(claim.statement).not.toMatch(/(?<!\\)\$(?!\$)/);
        }

        for (const block of concept.contentBlocks) {
          const lines = block.body.split('\n');
          for (const line of lines) {
            const rawDollars = (line.match(/\$/g) || []).length;
            const escapedDollars = (line.match(/\\\$/g) || []).length;
            expect((rawDollars - escapedDollars) % 2).toBe(0);
          }
        }

        for (const unit of concept.revisionUnits) {
          const rawDollars = (unit.content.match(/\$/g) || []).length;
          const escapedDollars = (unit.content.match(/\\\$/g) || []).length;
          expect((rawDollars - escapedDollars) % 2).toBe(0);
        }
      }
    });
  });

  describe('Database Persistence & Relationship Verification', () => {
    it('should verify that all 5 concepts exist under the World Understanding domain in SQLite', async () => {
      const subject = await db.subject.findFirst({
        where: { slug: 'biology-psychology-and-politics-of-food' },
        include: {
          domain: true,
          topics: {
            include: {
              concepts: {
                include: {
                  claims: {
                    include: {
                      evidence: true,
                    },
                  },
                  contentBlocks: true,
                  examMappings: true,
                  revisionUnits: true,
                  questions: true,
                },
              },
            },
          },
        },
      });

      expect(subject).toBeDefined();
      expect(subject?.domain.slug).toBe('world-understanding-and-universal-knowledge');
      expect(subject?.topics.length).toBe(1);

      const allConcepts = subject?.topics.flatMap((t) => t.concepts) ?? [];
      expect(allConcepts.length).toBe(5);

      for (const concept of allConcepts) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(4);
        for (const cl of concept.claims) {
          expect(cl.evidence.length).toBeGreaterThanOrEqual(1);
          expect(cl.evidence[0].sourceId).toBe('SRC-YALE-FOOD-PSYCHOLOGY-POLITICS');
        }

        expect(concept.contentBlocks.length).toBe(4);
        expect(concept.revisionUnits.length).toBe(3);
        expect(concept.questions.length).toBe(3);

        // Crucial: Must have zero exam mappings in the database
        expect(concept.examMappings.length).toBe(0);
      }
    });

    it('should verify total claims, blocks, units, and questions count in database for Module U5', async () => {
      const subject = await db.subject.findFirst({
        where: { slug: 'biology-psychology-and-politics-of-food' },
      });

      const [claimCount, blockCount, unitCount, questionCount, examMappingCount] = await Promise.all([
        db.claim.count({
          where: { concept: { topic: { subjectId: subject!.id } } },
        }),
        db.contentBlock.count({
          where: { concept: { topic: { subjectId: subject!.id } } },
        }),
        db.revisionUnit.count({
          where: { concept: { topic: { subjectId: subject!.id } } },
        }),
        db.question.count({
          where: { concept: { topic: { subjectId: subject!.id } } },
        }),
        db.examConceptMapping.count({
          where: { concept: { topic: { subjectId: subject!.id } } },
        }),
      ]);

      expect(claimCount).toBe(20);
      expect(blockCount).toBe(20);
      expect(unitCount).toBe(15);
      expect(questionCount).toBe(15);
      expect(examMappingCount).toBe(0);
    });

    it('should confirm strict isolation: universal food systems concepts do not leak into exam lenses', async () => {
      const examMappings = await db.examConceptMapping.findMany({
        where: {
          concept: {
            id: {
              in: ['CON-FOOD-01', 'CON-FOOD-02', 'CON-FOOD-03', 'CON-FOOD-04', 'CON-FOOD-05'],
            },
          },
        },
      });

      expect(examMappings.length).toBe(0);
    });
  });
});
