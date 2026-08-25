import { db } from '../db/client';

export interface GenerateRevisionPayload {
  conceptId: string;
  examId?: string | null;
  oneMinuteBullets?: string[];
  trapPoints?: string[];
  comparisonTableMarkdown?: string;
  mnemonicText?: string;
}

/**
 * Generates and stores derived revision assets from canonical knowledge.
 */
export async function generateRevisionLayers(payload: GenerateRevisionPayload) {
  const concept = await db.concept.findUnique({
    where: { id: payload.conceptId },
    include: { claims: { where: { status: 'VERIFIED' } } },
  });

  if (!concept) {
    throw new Error(`Concept with ID "${payload.conceptId}" not found.`);
  }

  const createdUnits = [];

  // 1. One-Minute Recall Sheet
  if (payload.oneMinuteBullets && payload.oneMinuteBullets.length > 0) {
    const content = payload.oneMinuteBullets.map((b) => `• ${b}`).join('\n');
    const unit = await db.revisionUnit.create({
      data: {
        conceptId: concept.id,
        examId: payload.examId || null,
        type: 'ONE_MINUTE_RECALL',
        content,
        priority: 'CRITICAL',
        order: 1,
      },
    });
    createdUnits.push(unit);
  }

  // 2. Trap Sheet
  if (payload.trapPoints && payload.trapPoints.length > 0) {
    const content = payload.trapPoints.map((t, idx) => `⚠️ **Trap ${idx + 1}**: ${t}`).join('\n\n');
    const unit = await db.revisionUnit.create({
      data: {
        conceptId: concept.id,
        examId: payload.examId || null,
        type: 'TRAP_SHEET',
        content,
        priority: 'HIGH',
        order: 2,
      },
    });
    createdUnits.push(unit);
  }

  // 3. Comparison Table
  if (payload.comparisonTableMarkdown) {
    const unit = await db.revisionUnit.create({
      data: {
        conceptId: concept.id,
        examId: payload.examId || null,
        type: 'COMPARISON_TABLE',
        content: payload.comparisonTableMarkdown.trim(),
        priority: 'HIGH',
        order: 3,
      },
    });
    createdUnits.push(unit);
  }

  // 4. Mnemonic (Optional, non-distorting)
  if (payload.mnemonicText) {
    const unit = await db.revisionUnit.create({
      data: {
        conceptId: concept.id,
        examId: payload.examId || null,
        type: 'MNEMONIC',
        content: payload.mnemonicText.trim(),
        priority: 'STANDARD',
        order: 4,
      },
    });
    createdUnits.push(unit);
  }

  return {
    conceptId: concept.id,
    revisionUnitsCreatedCount: createdUnits.length,
    revisionUnits: createdUnits,
  };
}

export async function getRevisionByConceptAndExam(conceptId: string, examSlug?: string) {
  return db.revisionUnit.findMany({
    where: {
      conceptId,
      ...(examSlug
        ? {
            OR: [{ exam: { slug: examSlug } }, { examId: null }],
          }
        : {}),
    },
    orderBy: { order: 'asc' },
  });
}
