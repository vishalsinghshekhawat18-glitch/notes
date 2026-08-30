import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { BATCH_E1_CONCEPTS, seedBatchE1CanonicalKnowledge } from '../lib/benchmark/batch-e1-canonical-seed';

describe('Economics Batch 1 (Foundations, Microeconomics & National Income) Verification Suite', () => {
  beforeAll(async () => {
    await seedBatchE1CanonicalKnowledge();
  });

  it('should contain exactly 17 canonical concepts in Batch E1 definition', () => {
    expect(BATCH_E1_CONCEPTS.length).toBe(17);
    const ids = BATCH_E1_CONCEPTS.map(c => c.id);
    for (let i = 1; i <= 17; i++) {
      const expectedId = `CON-ECO-${i.toString().padStart(2, '0')}`;
      expect(ids).toContain(expectedId);
    }
  });

  it('should have unique IDs, unique slugs, and valid difficulty levels', () => {
    const idSet = new Set<string>();
    const slugSet = new Set<string>();

    for (const c of BATCH_E1_CONCEPTS) {
      expect(idSet.has(c.id)).toBe(false);
      expect(slugSet.has(c.slug)).toBe(false);
      idSet.add(c.id);
      slugSet.add(c.slug);

      expect(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).toContain(c.difficulty);
      expect(c.title.length).toBeGreaterThan(15);
      expect(c.shortDefinition.length).toBeGreaterThan(30);
    }
  });

  it('should contain Topics 27 through 32 with proper ordering and non-empty descriptions', () => {
    const topicOrders = Array.from(new Set(BATCH_E1_CONCEPTS.map(c => c.topicOrder))).sort((a, b) => a - b);
    expect(topicOrders).toEqual([27, 28, 29, 30, 31, 32]);

    for (const c of BATCH_E1_CONCEPTS) {
      expect(c.topicTitle).toBeDefined();
      expect(c.topicTitle.length).toBeGreaterThan(5);
      expect(c.topicDescription.length).toBeGreaterThan(10);
    }
  });

  it('should enforce at least 3 claims per concept with non-empty locators and excerpts', () => {
    for (const c of BATCH_E1_CONCEPTS) {
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      for (const cl of c.claims) {
        expect(cl.id).toMatch(/^CLM-ECO-\d{2}-\d{2}$/);
        expect(cl.statement.length).toBeGreaterThan(20);
        expect(cl.locator.length).toBeGreaterThan(10);
        expect(cl.excerpt.length).toBeGreaterThan(15);
        expect(['ESTABLISHED_FACT', 'EMPIRICAL_RULE', 'SCHOLARLY_CONSENSUS']).toContain(cl.epistemicLevel);
        expect(['HIGH', 'MEDIUM']).toContain(cl.confidence);
      }
    }
  });

  it('should enforce 4 structured content blocks per concept with non-empty bodies', () => {
    for (const c of BATCH_E1_CONCEPTS) {
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(4);
      for (const cb of c.contentBlocks) {
        expect(cb.title.length).toBeGreaterThan(5);
        expect(cb.body.length).toBeGreaterThan(50);
        expect(cb.order).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('should have multi-exam mappings with required depth and syllabus units', () => {
    const validExams = ['RBI_GRADE_B', 'SEBI_GRADE_A', 'NABARD_GRADE_A', 'SBI_PO', 'IBPS_PO', 'RPSC_RAS', 'IIBF_DBF', 'UPSC_APFC'];
    for (const c of BATCH_E1_CONCEPTS) {
      expect(c.examMappings.length).toBeGreaterThanOrEqual(2);
      for (const em of c.examMappings) {
        expect(validExams).toContain(em.examCode);
        expect(['CORE_SYLLABUS', 'DIRECT_OVERLAY', 'ANCILLARY_COVERAGE']).toContain(em.relevance);
        expect(['EXPERT', 'PROFICIENT', 'AWARENESS']).toContain(em.requiredDepth);
        expect(em.syllabusUnit.length).toBeGreaterThan(5);
        expect(em.notes.length).toBeGreaterThan(10);
      }
    }
  });

  it('should enforce 3 revision units (30s, 2m, 5m) per concept', () => {
    for (const c of BATCH_E1_CONCEPTS) {
      expect(c.revisionUnits.length).toBe(3);
      const types = c.revisionUnits.map(r => r.type);
      expect(types).toContain('FLASH_30S');
      expect(types).toContain('SUMMARY_2M');
      expect(types).toContain('ARCHITECTURE_5M');
      for (const ru of c.revisionUnits) {
        expect(ru.content.length).toBeGreaterThan(30);
      }
    }
  });

  it('should enforce zero empty solutions and valid 4-option MCQs with explanations', () => {
    for (const c of BATCH_E1_CONCEPTS) {
      expect(c.questions.length).toBeGreaterThanOrEqual(2);
      for (const q of c.questions) {
        expect(q.stem.length).toBeGreaterThan(15);
        expect(q.options.length).toBe(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation.length).toBeGreaterThan(30);
        expect(q.trapExplanation).toBeDefined();
        expect(q.trapExplanation!.length).toBeGreaterThan(10);
        expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);

        if (q.isPYQ) {
          expect(q.pyqYear).toBeGreaterThanOrEqual(2015);
          expect(q.pyqPaper).toBeDefined();
          expect(q.pyqStage).toBeDefined();
          expect(q.pyqQuestionNumber).toBeDefined();
        }
      }
    }
  });

  it('should have balanced and valid mathematical delimiters in all text bodies', () => {
    for (const c of BATCH_E1_CONCEPTS) {
      for (const cb of c.contentBlocks) {
        const text = cb.body;
        // Count unescaped single dollars
        const dollarCount = (text.match(/(?<!\\)\$/g) || []).length;
        expect(dollarCount % 2).toBe(0); // Balanced math delimiters

        // Ensure no raw $GDP$ or $RBI$ or $5%$
        expect(text).not.toMatch(/\$GDP\$/);
        expect(text).not.toMatch(/\$RBI\$/);
        expect(text).not.toMatch(/\$5%\$/);
      }
    }
  });

  it('should verify database persistence of all 17 concepts with populated relational tables', async () => {
    const dbConcepts = await db.concept.findMany({
      where: {
        id: {
          in: BATCH_E1_CONCEPTS.map(c => c.id),
        },
      },
      include: {
        topic: true,
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
    });

    expect(dbConcepts.length).toBe(17);

    for (const c of dbConcepts) {
      expect(c.topic).toBeDefined();
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      for (const cl of c.claims) {
        expect(cl.evidence.length).toBeGreaterThanOrEqual(1);
      }
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(2);
      expect(c.revisionUnits.length).toBe(3);
      expect(c.questions.length).toBeGreaterThanOrEqual(2);
    }
  });
});
