import { describe, it, expect } from 'vitest';
import { BATCH_E3_CONCEPTS } from '../lib/benchmark/batch-e3-canonical-seed';

describe('Economics Master — Batch 3 Verification Suite (Topics 40–48, Concepts CON-ECO-33 to CON-ECO-53)', () => {
  it('1. Topic Structure: exactly 9 distinct topics with correct ordering (40 to 48)', () => {
    const topics = Array.from(new Set(BATCH_E3_CONCEPTS.map(c => c.topicOrder))).sort((a, b) => a - b);
    expect(topics).toEqual([40, 41, 42, 43, 44, 45, 46, 47, 48]);
    expect(topics.length).toBe(9);

    for (const c of BATCH_E3_CONCEPTS) {
      expect(c.topicSlug).toBeTruthy();
      expect(c.topicTitle).toBeTruthy();
      expect(c.topicDescription).toBeTruthy();
    }
  });

  it('2. Concept Count & ID Sequence: exactly 21 canonical concepts spanning CON-ECO-33 to CON-ECO-53', () => {
    expect(BATCH_E3_CONCEPTS.length).toBe(21);
    const expectedIds = Array.from({ length: 21 }, (_, i) => `CON-ECO-${String(i + 33).padStart(2, '0')}`);
    const actualIds = BATCH_E3_CONCEPTS.map(c => c.id);
    expect(actualIds).toEqual(expectedIds);

    for (const c of BATCH_E3_CONCEPTS) {
      expect(c.title).toBeTruthy();
      expect(c.slug).toBeTruthy();
      expect(c.shortDefinition).toBeTruthy();
      expect(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).toContain(c.difficulty);
    }
  });

  it('3. Claim-Level Provenance: exactly 63 Class A/B claims with verified locators and excerpts', () => {
    let totalClaims = 0;
    for (const c of BATCH_E3_CONCEPTS) {
      expect(c.claims.length).toBe(3);
      totalClaims += c.claims.length;

      for (const cl of c.claims) {
        expect(cl.id).toMatch(/^CLM-ECO-\d{2}-\d{2}$/);
        expect(cl.statement.length).toBeGreaterThan(30);
        expect(cl.locator.length).toBeGreaterThan(10);
        expect(cl.excerpt.length).toBeGreaterThan(10);
        expect(['STATUTORY_RULE', 'CORE_PRINCIPLE', 'HISTORICAL_FACT', 'JUDICIAL_DOCTRINE']).toContain(cl.claimType);
        expect(['ESTABLISHED_FACT', 'EMPIRICAL_RULE', 'SCHOLARLY_CONSENSUS']).toContain(cl.epistemicLevel);
        expect(['HIGH', 'MEDIUM']).toContain(cl.confidence);
      }
    }
    expect(totalClaims).toBe(63);
  });

  it('4. Content Block Architecture: exactly 84 modular blocks across INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
    let totalBlocks = 0;
    for (const c of BATCH_E3_CONCEPTS) {
      expect(c.contentBlocks.length).toBe(4);
      totalBlocks += c.contentBlocks.length;

      const types = c.contentBlocks.map(cb => cb.type);
      expect(types).toEqual(['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION']);

      for (const cb of c.contentBlocks) {
        expect(cb.title).toBeTruthy();
        expect(cb.body.length).toBeGreaterThan(100);
      }
    }
    expect(totalBlocks).toBe(84);
  });

  it('5. Multi-Exam Overlay: all concepts mapped to 8 target competitive examinations (168 total mappings)', () => {
    const requiredExams = ['RBI_GRADE_B', 'SEBI_GRADE_A', 'NABARD_GRADE_A', 'SBI_PO', 'IBPS_PO', 'RPSC_RAS', 'IIBF_DBF', 'UPSC_APFC'];
    let totalMappings = 0;

    for (const c of BATCH_E3_CONCEPTS) {
      expect(c.examMappings.length).toBe(8);
      totalMappings += c.examMappings.length;
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
    expect(totalMappings).toBe(168);
  });

  it('6. Revision Hierarchy: exactly 63 Revision Units (FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M)', () => {
    let totalRevisionUnits = 0;
    for (const c of BATCH_E3_CONCEPTS) {
      expect(c.revisionUnits.length).toBe(3);
      totalRevisionUnits += c.revisionUnits.length;

      const types = c.revisionUnits.map(ru => ru.type);
      expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);

      for (const ru of c.revisionUnits) {
        expect(ru.content.length).toBeGreaterThan(50);
      }
    }
    expect(totalRevisionUnits).toBe(63);
  });

  it('7. Graded Assessment Pool: exactly 42 questions with explanations and trap rationales', () => {
    let totalQuestions = 0;
    for (const c of BATCH_E3_CONCEPTS) {
      expect(c.questions.length).toBe(2);
      totalQuestions += c.questions.length;

      for (const q of c.questions) {
        expect(q.stem.length).toBeGreaterThan(20);
        expect(q.options.length).toBe(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation.length).toBeGreaterThan(30);
        expect(q.trapExplanation).toBeTruthy();
        expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
      }
    }
    expect(totalQuestions).toBe(42);
  });

  it('8. KaTeX & Currency Notation Discipline: no raw unescaped dollar signs in prose', () => {
    for (const c of BATCH_E3_CONCEPTS) {
      for (const cb of c.contentBlocks) {
        // Ensure no raw $50 or $1000 without LaTeX context
        const rawUsDollarMatch = cb.body.match(/\$[0-9]+(\.[0-9]+)?(?![a-zA-Z\\])/);
        if (rawUsDollarMatch) {
          // If match exists, verify it is inside a valid LaTeX pair $...$
          const matches = cb.body.match(/\$([^$]+)\$/g);
          expect(matches).toBeTruthy();
        }
      }
    }
  });

  it('9. Statutory and Regulatory Verification: key statutes, committees, and thresholds correctly codified', () => {
    const allText = JSON.stringify(BATCH_E3_CONCEPTS);
    expect(allText).toContain('Banking Regulation Act, 1949');
    expect(allText).toContain('Reserve Bank of India Act, 1934');
    expect(allText).toContain('DICGC Act, 1961');
    expect(allText).toContain('SARFAESI Act, 2002');
    expect(allText).toContain('Insolvency and Bankruptcy Code, 2016');
    expect(allText).toContain('Payment and Settlement Systems Act, 2007');
    expect(allText).toContain('Narasimham');
    expect(allText).toContain('FSIB');
    expect(allText).toContain('Scale-Based Regulation');
    expect(allText).toContain('NaBFID');
  });
});
