import { db } from '../db/client';

export interface CreateTopicInput {
  subjectId: string;
  slug: string;
  title: string;
  description?: string;
  scope?: string;
  order?: number;
}

export interface CreateConceptInput {
  topicId: string;
  parentId?: string | null;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty?: string;
  status?: string;
  order?: number;
}

export interface CreateContentBlockInput {
  conceptId: string;
  type: string;
  title?: string;
  body: string;
  order?: number;
  visibility?: string;
}

export async function createTopic(input: CreateTopicInput) {
  return db.topic.create({
    data: input,
  });
}

export async function createConcept(input: CreateConceptInput) {
  return db.concept.create({
    data: input,
  });
}

export async function createContentBlock(input: CreateContentBlockInput) {
  return db.contentBlock.create({
    data: input,
  });
}

export async function getFullConceptForLearning(conceptId: string) {
  return db.concept.findUnique({
    where: { id: conceptId },
    include: {
      topic: {
        include: {
          subject: {
            include: {
              domain: true,
            },
          },
        },
      },
      parent: true,
      children: {
        orderBy: { order: 'asc' },
      },
      contentBlocks: {
        orderBy: { order: 'asc' },
      },
      claims: {
        orderBy: { createdAt: 'asc' },
        include: {
          evidence: {
            include: {
              source: true,
              sourceSection: true,
            },
          },
        },
      },
      examMappings: {
        include: {
          exam: true,
        },
      },
      revisionUnits: {
        orderBy: { order: 'asc' },
      },
      questions: {
        include: {
          exam: true,
        },
      },
      outgoingConnections: {
        include: {
          targetConcept: true,
        },
      },
      incomingConnections: {
        include: {
          sourceConcept: true,
        },
      },
      knowledgeIssues: {
        where: { status: 'OPEN' },
      },
    },
  });
}

export async function getConceptByTopicAndSlug(topicId: string, slug: string) {
  return db.concept.findUnique({
    where: {
      topicId_slug: {
        topicId,
        slug,
      },
    },
  });
}

export interface CreateConnectionInput {
  sourceConceptId: string;
  targetConceptId: string;
  type: string;
  strength?: string;
  explanation: string;
  status?: string;
}

export async function createConnection(input: CreateConnectionInput) {
  return db.connection.create({
    data: {
      ...input,
      strength: input.strength || 'STRONG',
      status: input.status || 'ACTIVE',
    },
  });
}

