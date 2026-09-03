import { describe, it, expect } from 'vitest';
import { SCIENCE_MASTER_PART_2_CONCEPTS } from '../lib/benchmark/batch-science-master-part2';
import { CANONICAL_25_SCIENCE_TOPICS } from '../lib/benchmark/batch-science-master-canonical-seed';

describe('Basic Science & Scientific Literacy Master — Part 2 (Topics 7 to 12) Test Suite', () => {
  it('1. should verify exact structure and ordering of Topics 7 to 12', () => {
    const topics7To12 = CANONICAL_25_SCIENCE_TOPICS.filter(t => t.order >= 7 && t.order <= 12);
    expect(topics7To12.length).toBe(6);

    expect(topics7To12[0].slug).toBe('wave-mechanics-sound-propagation-acoustics');
    expect(topics7To12[1].slug).toBe('geometrical-optics-reflection-mirrors-lenses');
    expect(topics7To12[2].slug).toBe('human-eye-optics-vision-defects-atmospheric-optics');
    expect(topics7To12[3].slug).toBe('current-electricity-circuits-resistance');
    expect(topics7To12[4].slug).toBe('electromagnetism-motors-generators-domestic-wiring');
    expect(topics7To12[5].slug).toBe('matter-states-phase-transitions-solutions-colloids');
  });

  it('2. should verify all 34 Part 2 Concepts (CON-SCI-027 to CON-SCI-060) have continuous sequential IDs', () => {
    expect(SCIENCE_MASTER_PART_2_CONCEPTS.length).toBe(34);

    const ids = SCIENCE_MASTER_PART_2_CONCEPTS.map(c => c.id);
    expect(ids[0]).toBe('CON-SCI-027');
    expect(ids[ids.length - 1]).toBe('CON-SCI-060');

    // Verify continuous sequential progression with zero gaps or duplicates
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(34);

    for (let i = 27; i <= 60; i++) {
      const expectedId = `CON-SCI-${String(i).padStart(3, '0')}`;
      expect(ids).toContain(expectedId);
    }
  });

  it('3. should verify 4-Block Pedagogical Architecture for all 34 Part 2 Concepts', () => {
    const requiredBlockTypes = ['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION'];

    for (const concept of SCIENCE_MASTER_PART_2_CONCEPTS) {
      expect(concept.contentBlocks.length).toBeGreaterThanOrEqual(4);
      const blockTypes = concept.contentBlocks.map(b => b.type);

      for (const reqType of requiredBlockTypes) {
        expect(blockTypes).toContain(reqType);
      }

      for (const block of concept.contentBlocks) {
        expect(block.title).toBeDefined();
        expect(block.title.length).toBeGreaterThan(5);
        expect(block.body).toBeDefined();
        expect(block.body.length).toBeGreaterThan(50);
      }
    }
  });

  it('4. should verify 3-Speed Revision Layer for all 34 Part 2 Concepts', () => {
    const requiredRevisionTypes = ['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M'];

    for (const concept of SCIENCE_MASTER_PART_2_CONCEPTS) {
      expect(concept.revisionUnits.length).toBe(3);
      const revTypes = concept.revisionUnits.map(r => r.type);

      for (const reqType of requiredRevisionTypes) {
        expect(revTypes).toContain(reqType);
      }

      for (const rev of concept.revisionUnits) {
        expect(rev.content).toBeDefined();
        expect(rev.content.length).toBeGreaterThan(30);
      }
    }
  });

  it('5. should verify 8-Exam Multi-Lens Mapping Matrix across all 34 Part 2 Concepts', () => {
    const requiredExams = [
      'UPSC_APFC', 'RPSC_RAS', 'RBI_GRADE_B', 'NABARD_GRADE_A',
      'SBI_PO', 'IBPS_PO', 'SEBI_GRADE_A', 'IIBF_DBF'
    ];

    for (const concept of SCIENCE_MASTER_PART_2_CONCEPTS) {
      expect(concept.examMappings.length).toBe(8);
      const mappedExams = concept.examMappings.map(m => m.examCode);

      for (const exam of requiredExams) {
        expect(mappedExams).toContain(exam);
      }

      // Verify conservative IIBF DBF mapping
      const dbfMapping = concept.examMappings.find(m => m.examCode === 'IIBF_DBF');
      expect(dbfMapping).toBeDefined();
      expect(dbfMapping?.relevance).toBe('NOT_RELEVANT');
    }
  });

  it('6. should verify Practice Bank Diagnostic Questions (exactly 68 questions, 2 per concept)', () => {
    let totalQuestions = 0;

    for (const concept of SCIENCE_MASTER_PART_2_CONCEPTS) {
      expect(concept.questions.length).toBe(2);
      totalQuestions += concept.questions.length;

      for (const q of concept.questions) {
        expect(q.stem).toBeDefined();
        expect(q.stem.length).toBeGreaterThan(20);
        expect(q.options.length).toBe(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation).toBeDefined();
        expect(q.explanation.length).toBeGreaterThan(30);
        expect(q.trapExplanation).toBeDefined();
        expect(q.trapExplanation.length).toBeGreaterThan(20);
        expect(q.examinerTrapPattern).toBeDefined();
      }
    }

    expect(totalQuestions).toBe(68);
  });

  it('7. should verify core physical laws, formulas, and constants across Part 2 topics', () => {
    // Topic 7: Sound & Waves
    const c27 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-027');
    expect(c27?.claims.some(cl => cl.statement.includes('v = f · λ'))).toBe(true);

    const c31 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-031');
    expect(c31?.claims.some(cl => cl.statement.includes('17.2 metres'))).toBe(true);

    // Topic 8: Optics
    const c34 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-034');
    expect(c34?.claims.some(cl => cl.statement.includes('1/f = 1/v + 1/u'))).toBe(true);

    const c36 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-036');
    expect(c36?.claims.some(cl => cl.statement.includes('sin(θ_c) = 1 / n'))).toBe(true);

    const c37 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-037');
    expect(c37?.claims.some(cl => cl.statement.includes('Dioptre'))).toBe(true);

    // Topic 9: Human Eye
    const c38 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-038');
    expect(c38?.claims.some(cl => cl.statement.includes('25 cm'))).toBe(true);

    const c39 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-039');
    expect(c39?.claims.some(cl => cl.statement.includes('Myopia'))).toBe(true);
    expect(c39?.claims.some(cl => cl.statement.includes('CONCAVE'))).toBe(true);

    const c42 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-042');
    expect(c42?.claims.some(cl => cl.statement.includes('1 / λ⁴'))).toBe(true);

    // Topic 10: Electricity
    const c44 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-044');
    expect(c44?.claims.some(cl => cl.statement.includes('V = I · R'))).toBe(true);

    const c45 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-045');
    expect(c45?.claims.some(cl => cl.statement.includes('R = ρ · L / A'))).toBe(true);

    const c47 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-047');
    expect(c47?.claims.some(cl => cl.statement.includes('H = I² · R · t'))).toBe(true);

    // Topic 11: Electromagnetism
    const c50 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-050');
    expect(c50?.claims.some(cl => cl.statement.includes("Fleming's Left-Hand Rule"))).toBe(true);

    const c51 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-051');
    expect(c51?.claims.some(cl => cl.statement.includes('50 Hz'))).toBe(true);

    const c52 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-052');
    expect(c52?.claims.some(cl => cl.statement.includes('V_s / V_p = N_s / N_p = I_p / I_s'))).toBe(true);

    // Topic 12: Matter & Solutions
    const c54 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-054');
    expect(c54?.claims.some(cl => cl.statement.includes("Graham's Law"))).toBe(true);

    const c55 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-055');
    expect(c55?.claims.some(cl => cl.statement.includes('Bose-Einstein Condensate'))).toBe(true);

    const c59 = SCIENCE_MASTER_PART_2_CONCEPTS.find(c => c.id === 'CON-SCI-059');
    expect(c59?.claims.some(cl => cl.statement.includes('Tyndall Effect'))).toBe(true);
  });
});
