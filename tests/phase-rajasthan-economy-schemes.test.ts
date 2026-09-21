import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import {
  RAJASTHAN_ECO_SCHEMES_CONCEPTS,
  seedRajasthanEcoSchemes,
} from '../lib/benchmark/batch-rajasthan-economy-schemes-seed';

describe('Rajasthan Studies & Regional Heritage — Batch R-ECO: Rajasthan Economy & Flagship Schemes', () => {
  beforeAll(async () => {
    await seedRajasthanEcoSchemes();
  });

  describe('Structural & Quantitative Verification', () => {
    it('should contain exactly 5 canonical concepts under Topic 1', () => {
      expect(RAJASTHAN_ECO_SCHEMES_CONCEPTS.length).toBe(5);

      const topicOrders = new Set(RAJASTHAN_ECO_SCHEMES_CONCEPTS.map((c) => c.topicOrder));
      expect(topicOrders.size).toBe(1);
      expect(topicOrders.has(1)).toBe(true);

      const expectedIds = [
        'CON-RAJ-ECO-01',
        'CON-RAJ-ECO-02',
        'CON-RAJ-ECO-03',
        'CON-RAJ-ECO-04',
        'CON-RAJ-ECO-05',
      ];
      const actualIds = RAJASTHAN_ECO_SCHEMES_CONCEPTS.map((c) => c.id);
      expect(actualIds).toEqual(expectedIds);

      const slugs = new Set(RAJASTHAN_ECO_SCHEMES_CONCEPTS.map((c) => c.slug));
      expect(slugs.size).toBe(5);
    });

    it('should verify exam mappings for RPSC RAS and RPSC Sub Inspector', () => {
      for (const concept of RAJASTHAN_ECO_SCHEMES_CONCEPTS) {
        expect(concept.examMappings.length).toBeGreaterThanOrEqual(2);
        const examCodes = concept.examMappings.map((m) => m.examCode);
        expect(examCodes).toContain('RPSC_RAS');
        expect(examCodes).toContain('RPSC_SUB_INSPECTOR');

        for (const em of concept.examMappings) {
          expect(em.relevance).toBe('VERY_HIGH');
          expect(em.priority).toBe('HIGH');
          expect(em.requiredDepth).toBe('EXHAUSTIVE');
          expect(em.notes.length).toBeGreaterThan(10);
        }
      }
    });

    it('should verify each concept has at least 4 claims with authoritative administrative locators', () => {
      let totalClaims = 0;
      for (const concept of RAJASTHAN_ECO_SCHEMES_CONCEPTS) {
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
      for (const concept of RAJASTHAN_ECO_SCHEMES_CONCEPTS) {
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
      for (const concept of RAJASTHAN_ECO_SCHEMES_CONCEPTS) {
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
      for (const concept of RAJASTHAN_ECO_SCHEMES_CONCEPTS) {
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
      for (const concept of RAJASTHAN_ECO_SCHEMES_CONCEPTS) {
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
    it('should verify that all 5 concepts exist under Rajasthan Studies domain in SQLite', async () => {
      const subject = await db.subject.findFirst({
        where: { slug: 'rajasthan-economy-and-flagship-schemes' },
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
                  examMappings: {
                    include: {
                      exam: true,
                    },
                  },
                  revisionUnits: true,
                  questions: true,
                },
              },
            },
          },
        },
      });

      expect(subject).toBeDefined();
      expect(subject?.domain.slug).toBe('rajasthan-studies');
      expect(subject?.topics.length).toBe(1);

      const allConcepts = subject?.topics.flatMap((t) => t.concepts) ?? [];
      expect(allConcepts.length).toBe(5);

      for (const concept of allConcepts) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(4);
        for (const cl of concept.claims) {
          expect(cl.evidence.length).toBeGreaterThanOrEqual(1);
          expect(cl.evidence[0].sourceId).toBe('SRC-RAJASTHAN-ECONOMIC-REVIEW');
        }

        expect(concept.contentBlocks.length).toBe(4);
        expect(concept.revisionUnits.length).toBe(3);
        expect(concept.questions.length).toBe(3);

        // Verification of RPSC exam mappings
        expect(concept.examMappings.length).toBeGreaterThanOrEqual(2);
        const mappedExamSlugs = concept.examMappings.map((m) => m.exam.slug);
        expect(mappedExamSlugs).toContain('rpsc-ras');
        expect(mappedExamSlugs).toContain('rpsc-sub-inspector');
      }
    });

    it('should verify total claims, blocks, units, and questions count in database for Batch R-ECO', async () => {
      const subject = await db.subject.findFirst({
        where: { slug: 'rajasthan-economy-and-flagship-schemes' },
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
      expect(examMappingCount).toBe(10); // 5 concepts * 2 exam mappings each
    });

    it('should verify that questions are flagged as PYQs from the 2026 Sub Inspector paper', async () => {
      const pyqQuestions = await db.question.findMany({
        where: {
          concept: {
            id: {
              in: [
                'CON-RAJ-ECO-01',
                'CON-RAJ-ECO-02',
                'CON-RAJ-ECO-03',
                'CON-RAJ-ECO-04',
                'CON-RAJ-ECO-05',
              ],
            },
          },
          isPYQ: true,
        },
      });

      expect(pyqQuestions.length).toBe(15);
      for (const q of pyqQuestions) {
        expect(q.pyqYear).toBe(2026);
        expect(q.pyqPaper).toBe('RPSC Sub Inspector Paper II (GK & GS)');
      }
    });
  });
});
