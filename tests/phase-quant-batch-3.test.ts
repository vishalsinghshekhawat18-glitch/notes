import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchQuantBatch1CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-1-canonical-seed';
import { seedBatchQuantBatch2CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-2-canonical-seed';
import { seedBatchQuantBatch3PracticeBank, QUANT_BATCH_3_ADDITIONAL_QUESTIONS } from '../lib/benchmark/batch-quant-batch-3-practice-seed';

describe('Quantitative Aptitude & Data Interpretation (Batch 3: Practice & PYQ Consolidation) Canonical Verification', () => {
  beforeAll(async () => {
    await seedBatchQuantBatch1CanonicalKnowledge();
    await seedBatchQuantBatch2CanonicalKnowledge();
    await seedBatchQuantBatch3PracticeBank();
  }, 30000);

  it('verifies that Subject 8 contains all 10 Topics and 27 Concepts', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'quantitative-aptitude-and-data-interpretation' },
      include: {
        topics: {
          include: {
            concepts: {
              include: {
                questions: true,
              },
            },
          },
        },
      },
    });

    expect(subject).toBeDefined();
    expect(subject?.topics.length).toBe(10);

    const totalConcepts = subject?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBe(27);
  });

  it('verifies expanded Practice & PYQ repository size with zero empty solutions', async () => {
    const quantSubject = await db.subject.findUnique({
      where: { slug: 'quantitative-aptitude-and-data-interpretation' },
      include: {
        topics: {
          include: {
            concepts: {
              include: {
                questions: true,
              },
            },
          },
        },
      },
    });

    let totalQuestions = 0;
    let pyqCount = 0;

    for (const topic of quantSubject!.topics) {
      for (const concept of topic.concepts) {
        expect(concept.questions.length).toBeGreaterThanOrEqual(1);
        totalQuestions += concept.questions.length;

        for (const q of concept.questions) {
          // Zero empty solutions check
          expect(q.stem.trim().length).toBeGreaterThan(10);
          expect(q.correctAnswer.trim().length).toBeGreaterThan(0);
          expect(q.explanation.trim().length).toBeGreaterThan(15);
          expect(q.trapExplanation?.trim().length).toBeGreaterThan(10);

          if (q.isPYQ) {
            pyqCount++;
            expect(q.pyqPaper).toBeDefined();
            expect(q.pyqStage).toBeDefined();
          }
        }
      }
    }

    // Minimum target checks
    expect(totalQuestions).toBeGreaterThanOrEqual(50);
    expect(pyqCount).toBeGreaterThanOrEqual(25);
  });

  it('verifies mathematical solutions on new Batch 3 high-yield questions', async () => {
    // 1. Percentage / Fraction calculation check (CON-QUANT-01)
    const q1 = await db.question.findFirst({
      where: { stem: { contains: '14.28% of 4900' } },
    });
    expect(q1?.correctAnswer).toBe('-500');

    // 2. 72-divisibility check (CON-QUANT-03)
    const qDiv = await db.question.findFirst({
      where: { stem: { contains: '785x367y is divisible by 72' } },
    });
    expect(qDiv?.correctAnswer).toBe('9');

    // 3. Permutation Girls Bundle check (CON-QUANT-05)
    const qPerm = await db.question.findFirst({
      where: { stem: { contains: 'all 4 girls sit together' } },
    });
    expect(qPerm?.correctAnswer).toBe('17,280');

    // 4. Lemon transaction check (CON-QUANT-07)
    const qLemon = await db.question.findFirst({
      where: { stem: { contains: 'selling 45 lemons for ₹40' } },
    });
    expect(qLemon?.correctAnswer).toBe('18');

    // 5. Crossroad area check (CON-QUANT-12)
    const qCross = await db.question.findFirst({
      where: { stem: { contains: 'rectangular lawn 60m by 40m' } },
    });
    expect(qCross?.correctAnswer).toBe('196 m²');

    // 6. Cylinder dimensional scaling check (CON-QUANT-13)
    const qCyl = await db.question.findFirst({
      where: { stem: { contains: 'radius of a cylinder is decreased by 20%' } },
    });
    expect(qCyl?.correctAnswer).toBe('4% Decrease');
  });
});
