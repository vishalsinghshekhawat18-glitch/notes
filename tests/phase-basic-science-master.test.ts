import { describe, it, expect } from 'vitest';
import {
  SCIENCE_MASTER_PART_1_CONCEPTS,
  MasterScienceConceptDefinition
} from '../lib/benchmark/batch-science-master-part1';
import { SCIENCE_MASTER_PART_2_CONCEPTS } from '../lib/benchmark/batch-science-master-part2';
import { BATCH_SCIENCE_MASTER_PART3_CONCEPTS } from '../lib/benchmark/batch-science-master-part3';
import { BATCH_SCIENCE_MASTER_PART4_CONCEPTS } from '../lib/benchmark/batch-science-master-part4';
import {
  ALL_SCIENCE_MASTER_CONCEPTS,
  CANONICAL_25_SCIENCE_TOPICS
} from '../lib/benchmark/batch-science-master-canonical-seed';

describe('Basic Science & Scientific Literacy Master — Final Comprehensive QA & Freeze Verification', () => {
  it('1. Topic Architecture: Exactly 25 Canonical Science Topics', () => {
    expect(CANONICAL_25_SCIENCE_TOPICS).toHaveLength(25);
    expect(CANONICAL_25_SCIENCE_TOPICS[0].slug).toBe('scientific-measurement-si-units-physical-quantities');
    expect(CANONICAL_25_SCIENCE_TOPICS[11].slug).toBe('matter-states-phase-transitions-solutions-colloids');
    expect(CANONICAL_25_SCIENCE_TOPICS[17].slug).toBe('cell-structure-organelles-cell-division');
    expect(CANONICAL_25_SCIENCE_TOPICS[24].slug).toBe('ecology-agricultural-science-environmental-protection');
  });

  it('2. Concept Count & ID Continuity: Exactly 115 Canonical Concepts (CON-SCI-001 to CON-SCI-115)', () => {
    expect(ALL_SCIENCE_MASTER_CONCEPTS).toHaveLength(115);
    expect(SCIENCE_MASTER_PART_1_CONCEPTS).toHaveLength(26);
    expect(SCIENCE_MASTER_PART_2_CONCEPTS).toHaveLength(34);
    expect(BATCH_SCIENCE_MASTER_PART3_CONCEPTS).toHaveLength(37);
    expect(BATCH_SCIENCE_MASTER_PART4_CONCEPTS).toHaveLength(18);

    const ids = ALL_SCIENCE_MASTER_CONCEPTS.map((c: MasterScienceConceptDefinition) => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(115);

    for (let i = 1; i <= 115; i++) {
      const expectedId = `CON-SCI-${String(i).padStart(3, '0')}`;
      expect(ids[i - 1]).toBe(expectedId);
    }
  });

  it('3. 4-Block Pedagogical Architecture: Exactly 4 Content Blocks per Concept (460 Total)', () => {
    const requiredTypes = ['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION'];
    let totalBlocks = 0;

    ALL_SCIENCE_MASTER_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.contentBlocks).toHaveLength(4);
      totalBlocks += concept.contentBlocks.length;
      const types = concept.contentBlocks.map(b => b.type);
      expect(types).toEqual(requiredTypes);

      concept.contentBlocks.forEach(b => {
        expect(b.title.trim().length).toBeGreaterThan(3);
        expect(b.body.trim().length).toBeGreaterThan(50);
      });
    });

    expect(totalBlocks).toBe(460);
  });

  it('4. 8-Exam Multi-Lens Mapping: Exactly 8 Mappings per Concept (920 Total)', () => {
    const requiredExams = [
      'UPSC_APFC',
      'RPSC_RAS',
      'NABARD_GRADE_A',
      'RBI_GRADE_B',
      'SBI_PO',
      'IBPS_PO',
      'SEBI_GRADE_A',
      'IIBF_DBF'
    ];
    let totalMappings = 0;

    ALL_SCIENCE_MASTER_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.examMappings).toHaveLength(8);
      totalMappings += concept.examMappings.length;
      const mappedExams = concept.examMappings.map(m => m.examCode);
      requiredExams.forEach(exam => {
        expect(mappedExams).toContain(exam);
      });
    });

    expect(totalMappings).toBe(920);
  });

  it('5. 3-Speed Revision Units: Exactly 3 Units per Concept (345 Total)', () => {
    const requiredTypes = ['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M'];
    let totalRevisionUnits = 0;

    ALL_SCIENCE_MASTER_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.revisionUnits).toHaveLength(3);
      totalRevisionUnits += concept.revisionUnits.length;
      const types = concept.revisionUnits.map(r => r.type);
      expect(types).toEqual(requiredTypes);
    });

    expect(totalRevisionUnits).toBe(345);
  });

  it('6. Practice Bank Quality: Exactly 2 Questions per Concept (230 Total)', () => {
    let totalQuestions = 0;

    ALL_SCIENCE_MASTER_CONCEPTS.forEach((concept: MasterScienceConceptDefinition) => {
      expect(concept.questions).toHaveLength(2);
      totalQuestions += concept.questions.length;

      concept.questions.forEach(q => {
        expect(q.type).toBe('MCQ_SINGLE');
        expect(q.stem.trim().length).toBeGreaterThan(20);
        expect(q.options).toHaveLength(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation.trim().length).toBeGreaterThan(30);
        expect(q.trapExplanation.trim().length).toBeGreaterThan(15);
      });
    });

    expect(totalQuestions).toBe(230);
  });

  it('7. Scientific Precision Verifications: High-Priority Quality Spot Checks', () => {
    // Check ATP yield qualification in cellular respiration
    const respConcept = ALL_SCIENCE_MASTER_CONCEPTS.find(c => c.id === 'CON-SCI-102');
    expect(respConcept).toBeDefined();
    expect(respConcept?.claims[0].statement).toContain('36 to 38 ATP');
    expect(respConcept?.claims[0].statement).toContain('30 to 32 ATP');

    // Check Vitamin B12 cobalt coordination
    const vitConcept = ALL_SCIENCE_MASTER_CONCEPTS.find(c => c.id === 'CON-SCI-101');
    expect(vitConcept).toBeDefined();
    expect(vitConcept?.claims[2].statement).toContain('Cobalt cation coordinated within a corrin macrocycle');

    // Check Blood groups packed RBC universal donor
    const bloodConcept = ALL_SCIENCE_MASTER_CONCEPTS.find(c => c.id === 'CON-SCI-103');
    expect(bloodConcept).toBeDefined();
    expect(bloodConcept?.claims[2].statement).toContain('UNIVERSAL PACKED RED BLOOD CELL DONOR');

    // Check Phloem multidirectional source-to-sink
    const phloemConcept = ALL_SCIENCE_MASTER_CONCEPTS.find(c => c.id === 'CON-SCI-099');
    expect(phloemConcept).toBeDefined();
    expect(phloemConcept?.claims[0].statement).toContain('MULTIDIRECTIONALLY from physiological SOURCE regions');

    // Check Reptilian sex determination qualification
    const sexConcept = ALL_SCIENCE_MASTER_CONCEPTS.find(c => c.id === 'CON-SCI-111');
    expect(sexConcept).toBeDefined();
    expect(sexConcept?.claims[2].statement).toContain('CERTAIN reptile species');

    // Check Hemozoin description in malaria
    const malariaConcept = ALL_SCIENCE_MASTER_CONCEPTS.find(c => c.id === 'CON-SCI-113');
    expect(malariaConcept).toBeDefined();
    expect(malariaConcept?.claims[2].statement).toContain('biocrystallizing free toxic heme into insoluble HEMOZOIN');

    // Check Lindeman 10% ecological rule
    const ecoConcept = ALL_SCIENCE_MASTER_CONCEPTS.find(c => c.id === 'CON-SCI-115');
    expect(ecoConcept).toBeDefined();
    expect(ecoConcept?.claims[0].statement).toContain('Lindeman\'s 10% Ecological Efficiency Generalization');

    // Check Bioaccumulation vs Biomagnification
    expect(ecoConcept?.claims[1].statement).toContain('Bioaccumulation vs Biomagnification');
  });
});
