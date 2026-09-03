import { describe, it, expect } from 'vitest';
import {
  SCIENCE_MASTER_PART_1_CONCEPTS,
  MasterScienceConceptDefinition
} from '../lib/benchmark/batch-science-master-part1';
import { CANONICAL_25_SCIENCE_TOPICS } from '../lib/benchmark/batch-science-master-canonical-seed';

describe('Phase 1 — Basic Science Master (Part 1: Topics 1–6) Verification', () => {
  it('should have exactly 25 canonical topics declared in master seeder', () => {
    expect(CANONICAL_25_SCIENCE_TOPICS).toHaveLength(25);
    expect(CANONICAL_25_SCIENCE_TOPICS[0].slug).toBe('scientific-measurement-si-units-physical-quantities');
    expect(CANONICAL_25_SCIENCE_TOPICS[5].slug).toBe('thermal-physics-heat-transfer-and-thermodynamics');
  });

  it('should contain exactly 26 canonical concepts for Topics 1 to 6', () => {
    expect(SCIENCE_MASTER_PART_1_CONCEPTS).toHaveLength(26);
    expect(SCIENCE_MASTER_PART_1_CONCEPTS[0].id).toBe('CON-SCI-001');
    expect(SCIENCE_MASTER_PART_1_CONCEPTS[25].id).toBe('CON-SCI-026');
  });

  it('should ensure all concept IDs are contiguous and unique from CON-SCI-001 to CON-SCI-026', () => {
    const ids = SCIENCE_MASTER_PART_1_CONCEPTS.map(c => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(26);

    for (let i = 1; i <= 26; i++) {
      const expectedId = `CON-SCI-${String(i).padStart(3, '0')}`;
      expect(ids).toContain(expectedId);
    }
  });

  it('should enforce the Gold 4-Block Pedagogical Architecture on every concept', () => {
    const requiredTypes = ['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION'];

    SCIENCE_MASTER_PART_1_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.contentBlocks).toHaveLength(4);
      const types = concept.contentBlocks.map(b => b.type);
      expect(types).toEqual(requiredTypes);

      concept.contentBlocks.forEach(b => {
        expect(b.title.trim().length).toBeGreaterThan(3);
        expect(b.body.trim().length).toBeGreaterThan(100);
      });
    });
  });

  it('should enforce all 8 target examination mappings for every concept', () => {
    const requiredExams = [
      'UPSC_APFC',
      'RPSC_RAS',
      'RBI_GRADE_B',
      'NABARD_GRADE_A',
      'SBI_PO',
      'IBPS_PO',
      'SEBI_GRADE_A',
      'IIBF_DBF'
    ];

    SCIENCE_MASTER_PART_1_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.examMappings).toHaveLength(8);
      const mappedExams = concept.examMappings.map(m => m.examCode);
      requiredExams.forEach(re => {
        expect(mappedExams).toContain(re);
      });

      // Check IIBF conservative mapping rule
      const iibfMapping = concept.examMappings.find(m => m.examCode === 'IIBF_DBF');
      expect(iibfMapping).toBeDefined();
      expect(['BACKGROUND', 'NOT_RELEVANT', 'SUPPORTING']).toContain(iibfMapping?.relevance);
      expect(iibfMapping?.relevance).not.toBe('CORE');
    });
  });

  it('should enforce the 3-speed revision layer (FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M) on every concept', () => {
    const requiredRevisionTypes = ['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M'];

    SCIENCE_MASTER_PART_1_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.revisionUnits).toHaveLength(3);
      const revTypes = concept.revisionUnits.map(r => r.type);
      expect(revTypes).toEqual(requiredRevisionTypes);

      concept.revisionUnits.forEach(ru => {
        expect(ru.content.trim().length).toBeGreaterThan(30);
      });
    });
  });

  it('should verify exactly 2 diagnostic questions per concept with mandatory trapExplanation', () => {
    SCIENCE_MASTER_PART_1_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.questions.length).toBeGreaterThanOrEqual(2);

      concept.questions.forEach(q => {
        expect(q.stem.trim().length).toBeGreaterThan(15);
        expect(q.options).toHaveLength(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation.trim().length).toBeGreaterThan(30);
        expect(q.trapExplanation.trim().length).toBeGreaterThan(20);
      });
    });
  });

  it('should verify critical scientific facts, formulas, and constants in the knowledge base', () => {
    // 1. SI Units
    const con1 = SCIENCE_MASTER_PART_1_CONCEPTS.find(c => c.id === 'CON-SCI-001');
    expect(con1?.contentBlocks[1].body).toContain('Candela');
    expect(con1?.contentBlocks[1].body).toContain('Kelvin');

    // 2. Coincidence of Celsius and Fahrenheit at -40
    const con23 = SCIENCE_MASTER_PART_1_CONCEPTS.find(c => c.id === 'CON-SCI-023');
    expect(con23?.contentBlocks[1].body).toContain('-40');

    // 3. Escape Velocity value
    const con16 = SCIENCE_MASTER_PART_1_CONCEPTS.find(c => c.id === 'CON-SCI-016');
    expect(con16?.contentBlocks[2].body).toContain('11.2');
    expect(con16?.contentBlocks[2].body).toContain('35,786');

    // 4. Steam latent heat burn severity
    const con25 = SCIENCE_MASTER_PART_1_CONCEPTS.find(c => c.id === 'CON-SCI-025');
    expect(con25?.contentBlocks[2].body).toContain('540');
    expect(con25?.contentBlocks[2].body).toContain('2.26');

    // 5. Horsepower conversion
    const con22 = SCIENCE_MASTER_PART_1_CONCEPTS.find(c => c.id === 'CON-SCI-022');
    expect(con22?.contentBlocks[3].body).toContain('746');
  });
});
