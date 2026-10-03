import { db } from '@/lib/db/client';

export async function ensureCanonicalDataSeeded() {
  // Shelves 1 through 6 are fully purged.
  // Sovereign Shelf 007 operates independently.
}

export interface SubjectOverviewItem {
  id: string;
  slug: string;
  name: string;
  code: string;
  description: string;
  domainName: string;
  domainSlug: string;
  topicsCount: number;
  conceptsCount: number;
  firstTopicSlug: string;
  featuredTopics: string[];
}

export interface DomainWithSubjects {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  subjects: SubjectOverviewItem[];
}

const SUBJECT_CODE_MAP: Record<string, string> = {};


export async function getLibrarySubjectsOverview(): Promise<DomainWithSubjects[]> {
  await ensureCanonicalDataSeeded();

  const domains = await db.domain.findMany({
    where: {
      subjects: {
        some: {
          topics: {
            some: {
              concepts: {
                some: {
                  status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] },
                },
              },
            },
          },
        },
      },
    },
    orderBy: { order: 'asc' },
    include: {
      subjects: {
        where: {
          topics: {
            some: {
              concepts: {
                some: {
                  status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] },
                },
              },
            },
          },
        },
        orderBy: { order: 'asc' },
        include: {
          topics: {
            orderBy: { order: 'asc' },
            include: {
              concepts: {
                where: { status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] } },
                select: { id: true },
              },
            },
          },
        },
      },
    },
  });

  return domains.map((domain) => ({
    id: domain.id,
    name: domain.name,
    slug: domain.slug,
    description: domain.description,
    subjects: domain.subjects.map((s) => {
      const activeTopics = s.topics.filter((t) => t.concepts.length > 0);
      const firstTopic = activeTopics[0];
      const totalConcepts = activeTopics.reduce((acc, t) => acc + t.concepts.length, 0);
      const featuredTopics = activeTopics.slice(0, 4).map((t) => t.title);

      return {
        id: s.id,
        slug: s.slug,
        name: s.name,
        code: SUBJECT_CODE_MAP[s.slug] || `SUB-${s.slug.slice(0, 3).toUpperCase()}`,
        description: s.description || s.scopeStatement || '',
        domainName: domain.name,
        domainSlug: domain.slug,
        topicsCount: activeTopics.length,
        conceptsCount: totalConcepts,
        firstTopicSlug: firstTopic?.slug || '',
        featuredTopics,
      };
    }),
  }));
}

export async function getSubjectWithTopics(subjectSlug: string) {
  await ensureCanonicalDataSeeded();

  const subject = await db.subject.findFirst({
    where: { slug: subjectSlug },
    include: {
      domain: true,
      topics: {
        where: {
          concepts: {
            some: {
              status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] },
            },
          },
        },
        orderBy: { order: 'asc' },
        include: {
          concepts: {
            where: { status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] } },
            orderBy: { id: 'asc' },
            select: {
              id: true,
              slug: true,
              title: true,
              shortDefinition: true,
              difficulty: true,
            },
          },
        },
      },
    },
  });

  if (!subject) return null;

  return subject;
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
            select: {
              id: true,
              slug: true,
              title: true,
              order: true,
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
