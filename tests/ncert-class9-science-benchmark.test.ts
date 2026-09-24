import { describe, it, expect } from 'vitest';
import { NCERT_CLASS9_SCIENCE_CONCEPTS } from '../lib/benchmark/batch-ncert-class9-science-seed';
import { db } from '../lib/db/client';

describe('NCERT Class 9 Science Foundation (Prashant Kirad) — Benchmark & Architecture Verification', () => {
  it('1. Concept Architecture: Exactly 12 Canonical Concepts (CON-SCI-121 to CON-SCI-132)', () => {
    expect(NCERT_CLASS9_SCIENCE_CONCEPTS).toHaveLength(12);

    const ids = NCERT_CLASS9_SCIENCE_CONCEPTS.map(c => c.id);
    for (let i = 0; i < 12; i++) {
      const expectedId = `CON-SCI-${121 + i}`;
      expect(ids[i]).toBe(expectedId);
    }

    const slugs = NCERT_CLASS9_SCIENCE_CONCEPTS.map(c => c.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(12);
  });

  it('2. Topic Integrity: Mapped to Canonical Topics in basic-science', () => {
    const validTopicSlugs = [
      'cell-structure-organelles-cell-division',
      'plant-and-animal-tissues-histology',
      'kinematics-motion-velocity-acceleration-graphs',
      'dynamics-force-newtons-laws-momentum-friction',
      'matter-states-phase-transitions-solutions-colloids',
      'atomic-structure-chemical-laws-formulae-mole',
      'gravitation-planetary-motion-and-fluid-mechanics',
      'work-energy-conservation-laws-and-power',
      'wave-mechanics-sound-propagation-acoustics',
      'ecology-agricultural-science-environmental-protection'
    ];

    NCERT_CLASS9_SCIENCE_CONCEPTS.forEach(c => {
      expect(validTopicSlugs).toContain(c.topicSlug);
      expect(c.topicTitle.length).toBeGreaterThan(5);
      expect(c.topicDescription.length).toBeGreaterThan(20);
    });
  });

  it('3. 4-Block Pedagogical Architecture: Exactly 4 Content Blocks per Concept (48 Total)', () => {
    const requiredTypes = ['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION'];
    let totalBlocks = 0;

    NCERT_CLASS9_SCIENCE_CONCEPTS.forEach(c => {
      expect(c.contentBlocks).toHaveLength(4);
      totalBlocks += c.contentBlocks.length;

      const types = c.contentBlocks.map(b => b.type);
      expect(types).toEqual(requiredTypes);

      c.contentBlocks.forEach(b => {
        expect(b.title.trim().length).toBeGreaterThan(5);
        expect(b.body.trim().length).toBeGreaterThan(100);
      });
    });

    expect(totalBlocks).toBe(48);
  });

  it('4. 3-Tier Revision Architecture: Exactly 3 Revision Units per Concept (36 Total)', () => {
    const requiredTypes = ['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M'];
    let totalRevisionUnits = 0;

    NCERT_CLASS9_SCIENCE_CONCEPTS.forEach(c => {
      expect(c.revisionUnits).toHaveLength(3);
      totalRevisionUnits += c.revisionUnits.length;

      const types = c.revisionUnits.map(r => r.type);
      expect(types).toEqual(requiredTypes);

      // Strict Flash 30s limit: <= 350 chars
      const flash = c.revisionUnits.find(r => r.type === 'FLASH_30S')!;
      expect(flash.content.length).toBeLessThanOrEqual(350);
      expect(flash.content.length).toBeGreaterThan(150);

      // Summary 2m
      const summary = c.revisionUnits.find(r => r.type === 'SUMMARY_2M')!;
      expect(summary.content.length).toBeGreaterThan(200);

      // Architecture 5m (Must contain structured ASCII diagram)
      const arch = c.revisionUnits.find(r => r.type === 'ARCHITECTURE_5M')!;
      expect(arch.content.length).toBeGreaterThan(250);
    });

    expect(totalRevisionUnits).toBe(36);
  });

  it('5. Assessment Architecture: Exactly 3 Diagnostic Questions per Concept (36 Total)', () => {
    let totalQuestions = 0;

    NCERT_CLASS9_SCIENCE_CONCEPTS.forEach(c => {
      expect(c.questions).toHaveLength(3);
      totalQuestions += c.questions.length;

      c.questions.forEach(q => {
        expect(q.stem.trim().length).toBeGreaterThan(20);
        expect(q.options).toHaveLength(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation.trim().length).toBeGreaterThan(50);
        expect(q.trapExplanation?.trim().length).toBeGreaterThan(15);
        expect(q.examinerTrapPattern?.trim().length).toBeGreaterThan(15);
      });
    });

    expect(totalQuestions).toBe(36);
  });

  it('6. Multi-Exam Lenses: Exactly 4 Exam Mappings per Concept (48 Total)', () => {
    const expectedExams = ['RPSC_RAS', 'RPSC_SUB_INSPECTOR', 'UPSC_APFC', 'SSC_CGL'];
    let totalMappings = 0;

    NCERT_CLASS9_SCIENCE_CONCEPTS.forEach(c => {
      expect(c.examMappings).toHaveLength(4);
      totalMappings += c.examMappings.length;

      const examCodes = c.examMappings.map(m => m.examCode);
      expect(examCodes.sort()).toEqual(expectedExams.sort());

      c.examMappings.forEach(m => {
        expect(m.syllabusUnit.length).toBeGreaterThan(5);
        expect(['VERY_HIGH', 'HIGH', 'MEDIUM']).toContain(m.relevance);
        expect(['CRITICAL', 'HIGH', 'MEDIUM']).toContain(m.priority);
        expect(['EXHAUSTIVE', 'DETAILED', 'FACTUAL_RECALL']).toContain(m.requiredDepth);
        expect(m.notes.length).toBeGreaterThan(10);
      });
    });

    expect(totalMappings).toBe(48);
  });

  it('7. Typographic Safety: Zero unescaped single dollar signs', () => {
    NCERT_CLASS9_SCIENCE_CONCEPTS.forEach(c => {
      const fullText = JSON.stringify(c);
      const matches = fullText.match(/(?<!\\|\$)\$(?!\$)/g);
      expect(matches).toBeNull();
    });
  });

  it('8. Database Persistence: Verified in SQLite DB', async () => {
    // Verify source
    const source = await db.source.findUnique({
      where: { id: 'src-ncert-class9-prashant-kirad' }
    });
    expect(source).not.toBeNull();
    expect(source?.author).toBe('Prashant Kirad (Exphub 9th & 10th)');

    // Verify 12 concepts in DB
    const dbConcepts = await db.concept.findMany({
      where: {
        id: {
          in: NCERT_CLASS9_SCIENCE_CONCEPTS.map(c => c.id)
        }
      },
      include: {
        claims: true,
        contentBlocks: true,
        revisionUnits: true,
        questions: true,
        examMappings: true
      }
    });

    expect(dbConcepts).toHaveLength(12);

    let totalDbClaims = 0;
    let totalDbBlocks = 0;
    let totalDbRevisionUnits = 0;
    let totalDbQuestions = 0;
    let totalDbMappings = 0;

    dbConcepts.forEach(c => {
      totalDbClaims += c.claims.length;
      totalDbBlocks += c.contentBlocks.length;
      totalDbRevisionUnits += c.revisionUnits.length;
      totalDbQuestions += c.questions.length;
      totalDbMappings += c.examMappings.length;
    });

    expect(totalDbBlocks).toBe(48);
    expect(totalDbRevisionUnits).toBe(36);
    expect(totalDbQuestions).toBe(36);
    expect(totalDbMappings).toBe(48);
    expect(totalDbClaims).toBeGreaterThanOrEqual(44);
  });
});
