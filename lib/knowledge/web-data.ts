import { db } from '@/lib/db/client';
import { seedBatchACanonicalKnowledge } from '@/lib/benchmark/batch-a-canonical-seed';
import { seedBatchBCanonicalKnowledge } from '@/lib/benchmark/batch-b-canonical-seed';
import { seedBatchP1CanonicalKnowledge } from '@/lib/benchmark/batch-p1-canonical-seed';
import { seedBatchP2CanonicalKnowledge } from '@/lib/benchmark/batch-p2-canonical-seed';
import { seedBatchP3CanonicalKnowledge } from '@/lib/benchmark/batch-p3-canonical-seed';
import { seedBatchP4CanonicalKnowledge } from '@/lib/benchmark/batch-p4-canonical-seed';
import { seedBatchP5CanonicalKnowledge } from '@/lib/benchmark/batch-p5-canonical-seed';
import { seedBatchP6CanonicalKnowledge } from '@/lib/benchmark/batch-p6-canonical-seed';
import { seedBatchP7CanonicalKnowledge } from '@/lib/benchmark/batch-p7-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '@/lib/benchmark/topic-10-canonical-seed';
import { seedInflationCanonicalKnowledge } from '@/lib/benchmark/inflation-canonical-seed';

/**
 * Ensures that all canonical benchmark data (Batch A, Batch B, Batch P1-P7, Topic 9, Topic 10, Inflation)
 * is present in the database for web application rendering.
 */
export async function ensureCanonicalDataSeeded() {
  const conceptCount = await db.concept.count();
  if (conceptCount === 0) {
    await seedBatchACanonicalKnowledge();
    await seedBatchBCanonicalKnowledge();
    await seedTopic10CanonicalKnowledge();
    await seedBatchP1CanonicalKnowledge();
    await seedBatchP2CanonicalKnowledge();
    await seedBatchP3CanonicalKnowledge();
    await seedBatchP4CanonicalKnowledge();
    await seedBatchP5CanonicalKnowledge();
    await seedBatchP6CanonicalKnowledge();
    await seedBatchP7CanonicalKnowledge();
    await seedInflationCanonicalKnowledge();
  }
}

export async function getAllLibraryData() {
  await ensureCanonicalDataSeeded();

  return db.domain.findMany({
    orderBy: { name: 'asc' },
    include: {
      subjects: {
        orderBy: { name: 'asc' },
        include: {
          topics: {
            orderBy: { order: 'asc' },
            include: {
              concepts: {
                orderBy: { id: 'asc' },
                select: {
                  id: true,
                  slug: true,
                  title: true,
                  shortDefinition: true,
                  difficulty: true,
                  status: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

export async function getTopicWithConcepts(topicSlug: string) {
  await ensureCanonicalDataSeeded();

  return db.topic.findFirst({
    where: { slug: topicSlug },
    include: {
      subject: {
        include: {
          domain: true,
          topics: {
            orderBy: { order: 'asc' },
            select: { id: true, slug: true, title: true },
          },
        },
      },
      concepts: {
        orderBy: { id: 'asc' },
        include: {
          contentBlocks: {
            select: { id: true, type: true, title: true, order: true },
          },
          examMappings: {
            include: { exam: true },
          },
          questions: {
            select: { id: true, difficulty: true },
          },
        },
      },
    },
  });
}

export async function getTopicWithFullConcepts(topicSlug: string) {
  await ensureCanonicalDataSeeded();

  return db.topic.findFirst({
    where: { slug: topicSlug },
    include: {
      subject: {
        include: {
          domain: true,
          topics: {
            orderBy: { order: 'asc' },
            select: { id: true, slug: true, title: true, order: true },
          },
        },
      },
      concepts: {
        orderBy: { id: 'asc' },
        include: {
          contentBlocks: {
            orderBy: { order: 'asc' },
          },
          claims: {
            include: {
              evidence: {
                include: {
                  source: true,
                },
              },
            },
          },
          examMappings: {
            include: { exam: true },
          },
          revisionUnits: {
            orderBy: { order: 'asc' },
          },
          questions: {
            orderBy: { difficulty: 'asc' },
          },
          outgoingConnections: {
            include: {
              targetConcept: true,
            },
          },
        },
      },
    },
  });
}

export async function getConceptWithFullContext(conceptSlug: string) {
  await ensureCanonicalDataSeeded();

  return db.concept.findFirst({
    where: { slug: conceptSlug },
    include: {
      topic: {
        include: {
          subject: {
            include: {
              domain: true,
            },
          },
          concepts: {
            orderBy: { id: 'asc' },
            select: {
              id: true,
              slug: true,
              title: true,
              difficulty: true,
            },
          },
        },
      },
      contentBlocks: {
        orderBy: { order: 'asc' },
      },
      claims: {
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
      questions: {
        orderBy: { difficulty: 'asc' },
      },
      outgoingConnections: {
        include: {
          targetConcept: true,
        },
      },
    },
  });
}

export async function searchConcepts(query: string) {
  await ensureCanonicalDataSeeded();

  if (!query || query.trim() === '') return [];

  return db.concept.findMany({
    where: {
      OR: [
        { title: { contains: query } },
        { shortDefinition: { contains: query } },
        { slug: { contains: query } },
      ],
    },
    take: 12,
    include: {
      topic: {
        include: {
          subject: true,
        },
      },
    },
  });
}
