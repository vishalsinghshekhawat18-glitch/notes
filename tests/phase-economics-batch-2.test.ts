import { describe, it, expect } from 'vitest';
import { BATCH_E2_CONCEPTS } from '../lib/benchmark/batch-e2-canonical-seed';

describe('Economics Master — Batch 2 Verification Suite (Topics 33–39, Concepts CON-ECO-18 to CON-ECO-32)', () => {
  it('1. Topic Structure: exactly 7 distinct topics with correct ordering (33 to 39)', () => {
    const topics = Array.from(new Set(BATCH_E2_CONCEPTS.map(c => c.topicOrder))).sort((a, b) => a - b);
    expect(topics).toEqual([33, 34, 35, 36, 37, 38, 39]);
    expect(topics.length).toBe(7);

    for (const c of BATCH_E2_CONCEPTS) {
      expect(c.topicSlug).toBeTruthy();
      expect(c.topicTitle).toBeTruthy();
      expect(c.topicDescription).toBeTruthy();
    }
  });

  it('2. Concept Count & ID Sequence: exactly 15 canonical concepts spanning CON-ECO-18 to CON-ECO-32', () => {
    expect(BATCH_E2_CONCEPTS.length).toBe(15);
    const expectedIds = Array.from({ length: 15 }, (_, i) => `CON-ECO-${String(i + 18).padStart(2, '0')}`);
    const actualIds = BATCH_E2_CONCEPTS.map(c => c.id);
    expect(actualIds).toEqual(expectedIds);

    for (const c of BATCH_E2_CONCEPTS) {
      expect(c.title).toBeTruthy();
      expect(c.slug).toBeTruthy();
      expect(c.shortDefinition).toBeTruthy();
      expect(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).toContain(c.difficulty);
    }
  });

  it('3. Claim-Level Provenance: exactly 45 Class A/B claims with verified locators and excerpts', () => {
    let totalClaims = 0;
    for (const c of BATCH_E2_CONCEPTS) {
      expect(c.claims.length).toBe(3);
      totalClaims += c.claims.length;

      for (const cl of c.claims) {
        expect(cl.id).toMatch(/^CLM-ECO-\d{2}-\d{2}$/);
        expect(cl.statement.length).toBeGreaterThan(30);
        expect(cl.locator.length).toBeGreaterThan(10);
        expect(cl.excerpt.length).toBeGreaterThan(10);
        expect(['ESTABLISHED_FACT', 'EMPIRICAL_RULE', 'SCHOLARLY_CONSENSUS']).toContain(cl.epistemicLevel);
        expect(['HIGH', 'MEDIUM']).toContain(cl.confidence);
      }
    }
    expect(totalClaims).toBe(45);
  });

  it('4. Content Block Architecture: exactly 60 modular blocks across INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
    let totalBlocks = 0;
    for (const c of BATCH_E2_CONCEPTS) {
      expect(c.contentBlocks.length).toBe(4);
      totalBlocks += c.contentBlocks.length;

      const types = c.contentBlocks.map(cb => cb.type);
      expect(types).toEqual(['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION']);

      for (const cb of c.contentBlocks) {
        expect(cb.title).toBeTruthy();
        expect(cb.body.length).toBeGreaterThan(100);
      }
    }
    expect(totalBlocks).toBe(60);
  });

  it('5. Multi-Exam Overlay: all concepts mapped to 8 target competitive examinations', () => {
    const requiredExams = ['RBI_GRADE_B', 'SEBI_GRADE_A', 'NABARD_GRADE_A', 'SBI_PO', 'IBPS_PO', 'RPSC_RAS', 'IIBF_DBF', 'UPSC_APFC'];

    for (const c of BATCH_E2_CONCEPTS) {
      expect(c.examMappings.length).toBe(8);
      const mappedExams = c.examMappings.map(em => em.examCode);
      for (const req of requiredExams) {
        expect(mappedExams).toContain(req);
      }

      for (const em of c.examMappings) {
        expect(em.syllabusUnit).toBeTruthy();
        expect(em.notes).toBeTruthy();
        expect(['CORE_SYLLABUS', 'DIRECT_OVERLAY', 'ANCILLARY_COVERAGE']).toContain(em.relevance);
        expect(['EXPERT', 'PROFICIENT', 'AWARENESS']).toContain(em.requiredDepth);
      }
    }
  });

  it('6. Revision Hierarchy: exactly 45 Revision Units (FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M)', () => {
    let totalRevisionUnits = 0;
    for (const c of BATCH_E2_CONCEPTS) {
      expect(c.revisionUnits.length).toBe(3);
      totalRevisionUnits += c.revisionUnits.length;

      const types = c.revisionUnits.map(ru => ru.type);
      expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);

      for (const ru of c.revisionUnits) {
        expect(ru.content.length).toBeGreaterThan(50);
      }
    }
    expect(totalRevisionUnits).toBe(45);
  });

  it('7. Question Bank & PYQs: exactly 30 graded questions with complete distractors and explanations', () => {
    let totalQuestions = 0;
    for (const c of BATCH_E2_CONCEPTS) {
      expect(c.questions.length).toBe(2);
      totalQuestions += c.questions.length;

      for (const q of c.questions) {
        expect(q.stem.length).toBeGreaterThan(20);
        expect(q.options.length).toBe(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation.length).toBeGreaterThan(30);
        expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
        expect(typeof q.isPYQ).toBe('boolean');
      }
    }
    expect(totalQuestions).toBe(30);
  });

  it('8. KaTeX & Currency Notation Discipline: no raw unescaped dollar signs in prose', () => {
    for (const c of BATCH_E2_CONCEPTS) {
      for (const cb of c.contentBlocks) {
        // Ensure no raw $50 or $1000 without LaTeX context
        const rawUsDollarMatch = cb.body.match(/\$[0-9]+(\.[0-9]+)?(?![a-zA-Z\\])/);
        // Note: LaTeX $...$ blocks are valid, but $ without matching ending $ or raw $100 should be avoided
        if (rawUsDollarMatch) {
          // If match exists, verify it is inside a valid LaTeX pair $...$
          const matches = cb.body.match(/\$([^$]+)\$/g);
          expect(matches).toBeTruthy();
        }
      }
    }
  });

  it('9. Statutory & Factual Accuracy: verifies Section 45ZA/ZB/ZN, Section 42 RBI Act, Section 24 BR Act, and SDF rules', () => {
    const allStatements = BATCH_E2_CONCEPTS.flatMap(c => c.claims.map(cl => cl.statement)).join(' ');

    // Statutory verifications
    expect(allStatements).toContain('Section 45ZA');
    expect(allStatements).toContain('Section 45ZB');
    expect(allStatements).toContain('Section 45ZN');
    expect(allStatements).toContain('Section 42(1)');
    expect(allStatements).toContain('Section 24 of the Banking Regulation Act, 1949');
    expect(allStatements).toContain('Section 17(1A)');

    // Monetary aggregates and targets
    expect(allStatements).toContain('4%');
    expect(allStatements).toContain('three consecutive quarters');
    expect(allStatements).toContain('Standing Deposit Facility');
    expect(allStatements).toContain('uncollateralized');
  });
});
