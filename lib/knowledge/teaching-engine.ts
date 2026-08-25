import { db } from '../db/client';
import { ContentBlockTypeEnum } from '../types';

export interface AnalogyMetadata {
  analogy: string;
  intendedInsight: string;
  whereItBreaksDown: string;
}

export interface CreateTeachingBlockPayload {
  conceptId: string;
  type: ContentBlockTypeEnum | string;
  title?: string;
  body: string;
  order?: number;
  visibility?: 'STANDARD' | 'DEEP_DIVE' | 'ADVANCED_REFERENCE';
  analogyMetadata?: AnalogyMetadata;
  referencedClaimIds?: string[];
}

export interface AssembleConceptTeachingPayload {
  conceptId: string;
  blocks: CreateTeachingBlockPayload[];
}

/**
 * Assembles modular, composable teaching blocks for a canonical concept.
 */
export async function assembleConceptTeaching(payload: AssembleConceptTeachingPayload) {
  const concept = await db.concept.findUnique({
    where: { id: payload.conceptId },
  });

  if (!concept) {
    throw new Error(`Concept with ID "${payload.conceptId}" not found.`);
  }

  const createdBlocks = [];

  for (let i = 0; i < payload.blocks.length; i++) {
    const block = payload.blocks[i];
    const order = block.order ?? i + 1;

    let bodyContent = block.body.trim();

    // Enforce Analogy Safety Rule: Append structured breakdown if analogy metadata is provided
    if (block.analogyMetadata) {
      bodyContent = `${bodyContent}\n\n> **Analogy**: ${block.analogyMetadata.analogy}\n> **Core Insight**: ${block.analogyMetadata.intendedInsight}\n> **Where Analogy Breaks Down**: ${block.analogyMetadata.whereItBreaksDown}`;
    }

    const created = await db.contentBlock.create({
      data: {
        conceptId: concept.id,
        type: block.type,
        title: block.title?.trim() || null,
        body: bodyContent,
        order: order,
        visibility: block.visibility || 'STANDARD',
      },
    });

    createdBlocks.push(created);
  }

  // Update concept status to CANONICAL if it was in DRAFT/IN_REVIEW
  if (concept.status === 'DRAFT' || concept.status === 'IN_REVIEW') {
    await db.concept.update({
      where: { id: concept.id },
      data: { status: 'CANONICAL' },
    });
  }

  return {
    conceptId: concept.id,
    blocksCount: createdBlocks.length,
    blocks: createdBlocks,
  };
}

/**
 * Retrieves the pedagogical learning view of a concept with progressive depth control.
 */
export async function getConceptTeachingView(conceptId: string, depth: 'BEGINNER' | 'STANDARD' | 'ADVANCED' = 'STANDARD') {
  const concept = await db.concept.findUnique({
    where: { id: conceptId },
    include: {
      topic: {
        include: {
          subject: true,
        },
      },
      contentBlocks: {
        orderBy: { order: 'asc' },
      },
      claims: {
        where: { status: 'VERIFIED' },
        include: {
          evidence: {
            include: {
              source: true,
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
      outgoingConnections: {
        include: {
          targetConcept: true,
        },
      },
    },
  });

  if (!concept) {
    throw new Error(`Concept with ID "${conceptId}" not found.`);
  }

  // Filter blocks by learner depth
  const filteredBlocks = concept.contentBlocks.filter((block) => {
    if (depth === 'BEGINNER') {
      return block.visibility === 'STANDARD';
    }
    if (depth === 'STANDARD') {
      return block.visibility === 'STANDARD' || block.visibility === 'DEEP_DIVE';
    }
    return true; // ADVANCED includes all
  });

  return {
    conceptId: concept.id,
    title: concept.title,
    shortDefinition: concept.shortDefinition,
    difficulty: concept.difficulty,
    status: concept.status,
    topicTitle: concept.topic.title,
    subjectName: concept.topic.subject.name,
    blocks: filteredBlocks,
    verifiedClaimsCount: concept.claims.length,
    claims: concept.claims,
    examLensesCount: concept.examMappings.length,
    examMappings: concept.examMappings,
    revisionUnits: concept.revisionUnits,
  };
}
