import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db/client';
import { getSubjectWithTopics } from '@/lib/knowledge/web-data';
import { AcademicTableOfContents, TopicItem } from '@/components/curriculum/academic-table-of-contents';
import { getOrganizedPartGroups } from '@/lib/knowledge/curriculum-groups';

interface SubjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const subjects = await db.subject.findMany({
    select: { slug: true },
  });
  return subjects.map((s) => ({ slug: s.slug }));
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { slug } = await params;
  const subject = await getSubjectWithTopics(slug);

  if (!subject) {
    notFound();
  }

  const mappedTopics: TopicItem[] = subject.topics.map((t) => ({
    id: t.id,
    slug: t.slug,
    title: t.title,
    description: t.description,
    order: t.order,
    estimatedMinutes: t.concepts.length * 4,
    concepts: t.concepts.map((c) => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      shortDefinition: c.shortDefinition,
      difficulty: c.difficulty,
    })),
  }));

  const partGroups = getOrganizedPartGroups(subject.slug, mappedTopics);
  const firstTopicSlug = mappedTopics[0]?.slug;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10 font-sans space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-stone-900 transition-colors">
          Library
        </Link>
        <span>›</span>
        <span>{subject.domain.name}</span>
        <span>›</span>
        <span className="text-stone-800 font-semibold">{subject.name}</span>
      </nav>

      {/* Editorial Academic Table of Contents */}
      <AcademicTableOfContents
        subjectName={subject.name}
        subjectSlug={subject.slug}
        domainName={subject.domain.name}
        subjectDescription={subject.description || subject.scopeStatement}
        partGroups={partGroups}
        firstTopicSlug={firstTopicSlug}
      />
    </div>
  );
}
