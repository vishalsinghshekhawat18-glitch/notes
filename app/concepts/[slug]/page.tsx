import React from 'react';
import { notFound } from 'next/navigation';
import { getConceptWithFullContext } from '@/lib/knowledge/web-data';
import { ConceptLearningView } from '@/components/learning/concept-learning-view';

interface ConceptPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;
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
