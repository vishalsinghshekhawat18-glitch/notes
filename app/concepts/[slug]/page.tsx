import React from 'react';
import { notFound } from 'next/navigation';
import { getConceptWithFullContext } from '@/lib/knowledge/web-data';
import { ConceptLearningView } from '@/components/learning/concept-learning-view';

import { db } from '@/lib/db/client';

interface ConceptPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const concepts = await db.concept.findMany({
    select: { slug: true },
  });
  if (concepts.length === 0) {
    return [{ slug: '_empty' }];
  }
  return concepts.map((c) => ({ slug: c.slug }));
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  if (slug === '_empty') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-stone-500 font-mono text-sm">
        No concepts configured in active database.
      </div>
    );
  }
  const concept = await getConceptWithFullContext(slug);

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
