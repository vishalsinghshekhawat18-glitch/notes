import React from 'react';
import { notFound } from 'next/navigation';
import { getConceptWithFullContext } from '@/lib/knowledge/web-data';
import { ConceptLearningView } from '@/components/learning/concept-learning-view';

interface ConceptPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    // Topic 9 (16 concepts)
    { slug: 'part-3-overview-nature-of-fundamental-rights' },
    { slug: 'article-12-definition-of-state' },
    { slug: 'article-13-judicial-review-doctrines' },
    { slug: 'article-14-equality-non-arbitrariness' },
    { slug: 'articles-15-16-reservations-protective-discrimination' },
    { slug: 'articles-17-18-abolition-untouchability-titles' },
    { slug: 'article-19-democratic-freedoms-civil-liberties' },
    { slug: 'article-20-conviction-protections' },
    { slug: 'article-21-21a-life-liberty-privacy-education' },
    { slug: 'article-22-arrest-safeguards-preventive-detention' },
    { slug: 'articles-23-24-right-against-exploitation' },
    { slug: 'articles-25-28-freedom-of-religion-essential-practices' },
    { slug: 'articles-29-30-minority-cultural-educational-rights' },
    { slug: 'articles-31-300a-property-due-process' },
    { slug: 'article-32-writs-constitutional-remedies' },
    { slug: 'articles-33-35-amendability-basic-structure' },
    // Topic 10 (5 concepts)
    { slug: 'dpsp-nature-justiciability-article-37' },
    { slug: 'dpsp-classification-socialistic-gandhian-liberal' },
    { slug: 'article-44-uniform-civil-code-jurisprudence' },
    { slug: 'part-3-part-4-conflict-harmonious-construction' },
    { slug: 'directivism-outside-part-4-implementation-schemes' },
    // Inflation (5 concepts)
    { slug: 'inflation-definition-distinctions-real-nominal' },
    { slug: 'price-indices-measurement-cpi-wpi-core-headline' },
    { slug: 'inflation-causes-mechanisms-demand-cost-structural' },
    { slug: 'inflation-distributional-impacts-growth-tradeoffs-phillips-curve' },
    { slug: 'inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side' },
  ];
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
