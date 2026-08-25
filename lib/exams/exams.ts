import { db } from '../db/client';

export interface CreateExamInput {
  slug: string;
  name: string;
  conductingBody?: string;
  description?: string;
  syllabusSummary?: string;
}

export interface MapConceptToExamInput {
  examId: string;
  conceptId: string;
  syllabusUnit?: string;
  relevance?: string;
  priority?: string;
  requiredDepth?: string;
  questionStyle?: string;
  frequentTraps?: string;
  trendAnalysis?: string;
  historicalWeight?: string;
  notes?: string;
}

export interface CreateRevisionUnitInput {
  conceptId: string;
  examId?: string | null;
  type: string;
  content: string;
  priority?: string;
  order?: number;
}

export async function createExam(input: CreateExamInput) {
  return db.exam.create({
    data: input,
  });
}

export async function mapConceptToExam(input: MapConceptToExamInput) {
  return db.examConceptMapping.upsert({
    where: {
      examId_conceptId: {
        examId: input.examId,
        conceptId: input.conceptId,
      },
    },
    update: input,
    create: input,
  });
}

export async function createRevisionUnit(input: CreateRevisionUnitInput) {
  return db.revisionUnit.create({
    data: input,
  });
}

export async function getConceptExamLens(conceptId: string, examSlug: string) {
  return db.examConceptMapping.findFirst({
    where: {
      conceptId,
      exam: {
        slug: examSlug,
      },
    },
    include: {
      exam: true,
    },
  });
}
