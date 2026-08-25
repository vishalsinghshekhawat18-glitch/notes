import React from 'react';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db/client';
import { seedArticle14Benchmark } from '@/lib/benchmark/article-14-seed';
import { seedTopic9CanonicalKnowledge } from '@/lib/benchmark/topic-9-canonical-seed';
import { ConceptLearningView } from '@/components/learning/concept-learning-view';

interface ConceptPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;

  let concept = await db.concept.findFirst({
    where: { slug },
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

  // Automatically ensure benchmark data is seeded if looking for article-14-equality or topic-9 concepts
  if (!concept) {
    if (slug === 'article-14-equality') {
      await seedArticle14Benchmark();
    } else {
      await seedTopic9CanonicalKnowledge();
    }
    concept = await db.concept.findFirst({
      where: { slug },
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

  if (!concept) {
    notFound();
  }

  // Format examMappings for view
  const formattedExamMappings = concept.examMappings.map((m) => ({
    examSlug: m.exam.slug,
    examName: m.exam.name,
    syllabusUnit: m.syllabusUnit || 'General Syllabus',
    relevance: m.relevance,
    priority: m.priority,
    requiredDepth: m.requiredDepth,
    questionStyle: m.questionStyle,
    frequentTraps: m.frequentTraps,
    notes: m.notes,
  }));

  const formattedConcept = {
    ...concept,
    examMappings: formattedExamMappings,
  };

  return <ConceptLearningView concept={formattedConcept as any} />;
}
