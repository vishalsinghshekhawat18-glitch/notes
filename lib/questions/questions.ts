import { db } from '../db/client';

export interface CreateQuestionInput {
  conceptId: string;
  claimId?: string | null;
  examId?: string | null;
  type?: string;
  stem: string;
  options?: string | null;
  correctAnswer: string;
  explanation: string;
  trapExplanation?: string | null;
  difficulty?: string;
  isPYQ?: boolean;
  pyqYear?: number | null;
  pyqPaper?: string | null;
  pyqStage?: string | null;
  pyqQuestionNumber?: number | null;
  pyqMarks?: number | null;
  examinerTrapPattern?: string | null;
}

export async function createQuestion(input: CreateQuestionInput) {
  return db.question.create({
    data: input,
  });
}

export async function getQuestionsByConcept(conceptId: string, isPYQOnly: boolean = false) {
  return db.question.findMany({
    where: {
      conceptId,
      ...(isPYQOnly ? { isPYQ: true } : {}),
    },
    include: {
      claim: true,
      exam: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}
