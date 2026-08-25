import { db } from '../db/client';

export type ExamEvidenceOrigin = 'OBSERVED_FROM_PYQ' | 'INFERRED_FROM_PATTERN' | 'GENERAL_EXAM_STRATEGY';

export interface ApplyExamLensPayload {
  examSlug: string;
  examName: string;
  conductingBody?: string;
  conceptId: string;
  syllabusUnit: string;
  relevance: 'CORE' | 'HIGH' | 'MEDIUM' | 'LOW' | 'BACKGROUND';
  priority: 'MUST_MASTER' | 'HIGH_YIELD' | 'STANDARD' | 'OPTIONAL_REFERENCE';
  requiredDepth: 'OVERVIEW' | 'FACTUAL_RECALL' | 'ANALYTICAL_MAINS' | 'PROBLEM_SOLVING' | 'CASE_LAW_DEPTH';
  questionStyle?: string;
  frequentTraps?: string;
  trendAnalysis?: string;
  evidenceOrigin?: ExamEvidenceOrigin;
  notes?: string;
}

/**
 * Applies an exam lens to an existing canonical concept without modifying canonical truth.
 */
export async function applyExamLens(payload: ApplyExamLensPayload) {
  // 1. Ensure exam exists
  const exam = await db.exam.upsert({
    where: { slug: payload.examSlug },
    update: {
      name: payload.examName,
      conductingBody: payload.conductingBody,
    },
    create: {
      slug: payload.examSlug,
      name: payload.examName,
      conductingBody: payload.conductingBody,
    },
  });

  const formattedNotes = payload.evidenceOrigin
    ? `[Intelligence Evidence Origin: ${payload.evidenceOrigin}]\n${payload.notes || ''}`.trim()
    : payload.notes;

  // 2. Map concept to exam
  const mapping = await db.examConceptMapping.upsert({
    where: {
      examId_conceptId: {
        examId: exam.id,
        conceptId: payload.conceptId,
      },
    },
    update: {
      syllabusUnit: payload.syllabusUnit,
      relevance: payload.relevance,
      priority: payload.priority,
      requiredDepth: payload.requiredDepth,
      questionStyle: payload.questionStyle,
      frequentTraps: payload.frequentTraps,
      trendAnalysis: payload.trendAnalysis,
      notes: formattedNotes,
    },
    create: {
      examId: exam.id,
      conceptId: payload.conceptId,
      syllabusUnit: payload.syllabusUnit,
      relevance: payload.relevance,
      priority: payload.priority,
      requiredDepth: payload.requiredDepth,
      questionStyle: payload.questionStyle,
      frequentTraps: payload.frequentTraps,
      trendAnalysis: payload.trendAnalysis,
      notes: formattedNotes,
    },
  });

  return {
    examId: exam.id,
    examSlug: exam.slug,
    mappingId: mapping.id,
    mapping,
  };
}

/**
 * Retrieves all exam lenses available for a concept.
 */
export async function getExamLensesForConcept(conceptId: string) {
  return db.examConceptMapping.findMany({
    where: { conceptId },
    include: {
      exam: true,
    },
    orderBy: { priority: 'asc' },
  });
}
