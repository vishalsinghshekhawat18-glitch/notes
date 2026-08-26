import { db } from '@/lib/db/client';
import { seedTopic9CanonicalKnowledge } from '@/lib/benchmark/topic-9-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '@/lib/benchmark/topic-10-canonical-seed';
import { seedInflationCanonicalKnowledge } from '@/lib/benchmark/inflation-canonical-seed';

/**
 * Ensures that all canonical benchmark data (Topic 9, Topic 10, Inflation)
 * is present in the database for web application rendering.
 */
export async function ensureCanonicalDataSeeded() {
  const conceptCount = await db.concept.count();
  if (conceptCount < 26) {
    // Seed Topic 9 (Fundamental Rights - 16 concepts)
    await seedTopic9CanonicalKnowledge();
    // Seed Topic 10 (DPSPs - 5 concepts)
    await seedTopic10CanonicalKnowledge();
    // Seed Inflation (5 concepts)
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

export async function getConceptWithFullContext(conceptSlug: string) {
  await ensureCanonicalDataSeeded();

  let concept = await db.concept.findFirst({
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

  if (!concept) {
    // If concept not found in current DB state, reseed and re-query
    await seedTopic9CanonicalKnowledge();
    await seedTopic10CanonicalKnowledge();
    await seedInflationCanonicalKnowledge();

    concept = await db.concept.findFirst({
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

  return concept;
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
