import { db } from '../lib/db/client';
import * as fs from 'fs';
import * as path from 'path';

async function updateStaticIndex() {
  console.log('Generating Unified Search & Navigation Index...');

  // 1. Fetch Subjects with Domain & Topic Counts
  const subjects = await db.subject.findMany({
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
      domain: true,
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
  });

  // 2. Fetch Topics with Subjects & Concept Counts
  const topics = await db.topic.findMany({
    where: {
      concepts: {
        some: {
          status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] },
        },
      },
    },
    orderBy: [{ order: 'asc' }, { id: 'asc' }],
    include: {
      subject: {
        include: {
          domain: true,
        },
      },
      concepts: {
        where: { status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] } },
        select: { id: true, slug: true, title: true },
      },
    },
  });

  // 3. Fetch Concepts with Topics & Subjects
  const concepts = await db.concept.findMany({
    where: {
      status: { in: ['ACTIVE', 'CANONICAL', 'DRAFT', 'PUBLISHED'] },
    },
    orderBy: [{ topic: { order: 'asc' } }, { id: 'asc' }],
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
    },
  });

  console.log(`Found ${subjects.length} active subjects, ${topics.length} active topics, and ${concepts.length} active concepts.`);

  // Build Unified Search Items
  const searchItems = [
    // Subjects
    ...subjects.map((s) => ({
      id: `subj-${s.id}`,
      type: 'SUBJECT' as const,
      title: s.name,
      slug: s.slug,
      url: `/subjects/${s.slug}`,
      description: s.description || s.scopeStatement || '',
      hierarchy: {
        domain: s.domain.name,
        subject: s.name,
      },
      badge: `${s.topics.length} Topics • ${s.topics.reduce((acc, t) => acc + t.concepts.length, 0)} Concepts`,
    })),
    // Topics
    ...topics.map((t) => ({
      id: `top-${t.id}`,
      type: 'TOPIC' as const,
      title: t.title,
      slug: t.slug,
      url: `/topics/${t.slug}/read`,
      description: t.description || '',
      hierarchy: {
        domain: t.subject.domain.name,
        subject: t.subject.name,
        topic: `Topic ${t.order || 1}: ${t.title}`,
      },
      badge: `${t.concepts.length} Concepts`,
    })),
    // Concepts
    ...concepts.map((c) => ({
      id: `con-${c.id}`,
      type: 'CONCEPT' as const,
      title: c.title,
      slug: c.slug,
      url: `/topics/${c.topic.slug}/read#${c.slug}`,
      description: c.shortDefinition,
      hierarchy: {
        domain: c.topic.subject.domain.name,
        subject: c.topic.subject.name,
        topic: c.topic.title,
        concept: c.title,
      },
      badge: c.difficulty,
    })),
  ];

  const legacyConceptItems = concepts.map((c) => ({
    id: c.id,
    slug: c.slug,
    title: c.title,
    shortDefinition: c.shortDefinition,
    difficulty: c.difficulty,
    topicTitle: c.topic.title,
    subjectName: c.topic.subject.name,
  }));

  const fileContent = `export type SearchResultType = 'SUBJECT' | 'TOPIC' | 'CONCEPT';

export interface UnifiedSearchItem {
  id: string;
  type: SearchResultType;
  title: string;
  slug: string;
  url: string;
  description: string;
  hierarchy: {
    domain?: string;
    subject?: string;
    topic?: string;
    concept?: string;
  };
  badge?: string;
}

export interface StaticConceptItem {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  topicTitle: string;
  subjectName: string;
}

export const UNIFIED_SEARCH_INDEX: UnifiedSearchItem[] = ${JSON.stringify(searchItems, null, 2)};

export const STATIC_CONCEPT_INDEX: StaticConceptItem[] = ${JSON.stringify(legacyConceptItems, null, 2)};
`;

  const targetPath = path.join(process.cwd(), 'components', 'navigation', 'static-concept-index.ts');
  fs.writeFileSync(targetPath, fileContent, 'utf-8');
  console.log(`Successfully generated Unified Search Index with ${searchItems.length} items at ${targetPath}.`);
  await db.$disconnect();
}

updateStaticIndex().catch((err) => {
  console.error('Error updating static index:', err);
  process.exit(1);
});
