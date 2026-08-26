import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTopicWithConcepts } from '@/lib/knowledge/web-data';
import { db } from '@/lib/db/client';

interface TopicPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const topics = await db.topic.findMany({
    select: { slug: true },
  });
  return topics.map((t) => ({ slug: t.slug }));
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = await getTopicWithConcepts(slug);

  if (!topic) {
    notFound();
  }

  const estimatedMinutes = topic.concepts.length * 4;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans space-y-10">
      {/* Breadcrumb Header */}
      <nav className="text-xs font-mono text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-stone-900 transition-colors">
          Library
        </Link>
        <span>›</span>
        <span>{topic.subject.domain.name}</span>
        <span>›</span>
        <span className="text-stone-700 font-semibold">{topic.subject.name}</span>
      </nav>

      {/* Redesigned Topic Hero & Primary Action */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500">
          <span className="font-semibold text-emerald-800 uppercase tracking-wider">
            {topic.subject.name} • Topic {topic.order || 1}
          </span>
          <div className="flex items-center gap-2 font-medium">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              {topic.concepts.length} Concepts
            </span>
            <span>·</span>
            <span>~{estimatedMinutes} mins reading</span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            {topic.title}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed max-w-3xl">
            {topic.description ||
              'A complete sequential chapter curriculum covering all core doctrines, statutory frameworks, examination overlays, and active recall.'}
          </p>
        </div>

        {/* Primary CTA: START READING (Continuous Mode) */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link
            href={`/topics/${topic.slug}/read`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-sm sm:text-base rounded-xl shadow-xs transition-all hover:shadow-md group"
          >
            <span>▶ START READING</span>
            <span className="text-emerald-300 text-xs font-mono group-hover:translate-x-0.5 transition-transform">
              (Continuous Chapter Mode)
            </span>
          </Link>

          <span className="text-xs text-stone-400 font-mono hidden sm:inline">
            Read all {topic.concepts.length} concepts sequentially without interruption
          </span>
        </div>
      </div>

      {/* Sequential Contents Outline */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
            CHAPTER CONTENTS OUTLINE
          </h2>
          <span className="text-xs font-mono text-stone-500">
            Click any section to jump directly in reader
          </span>
        </div>

        <div className="divide-y divide-stone-200/70">
          {topic.concepts.map((c, index) => (
            <Link
              key={c.id}
              href={`/topics/${topic.slug}/read/#concept-${index + 1}`}
              className="py-3 px-2 flex items-center justify-between hover:bg-white hover:rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <span className="text-xs font-mono font-bold text-stone-400 group-hover:text-emerald-700 transition-colors shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-serif font-bold text-stone-900 group-hover:text-emerald-900 transition-colors truncate">
                  {c.title}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0 text-xs font-mono text-stone-400 group-hover:text-emerald-800 transition-colors">
                <span className="text-[11px] hidden sm:inline">{c.difficulty}</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Individual Concepts Deep Exploration Cards */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
            INDIVIDUAL CONCEPT DIRECTORY (STANDALONE EXPLORATION)
          </h2>
          <span className="text-xs text-stone-400">
            Direct routes for revision, search & deep-linking
          </span>
        </div>

        <div className="divide-y divide-stone-200 bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden">
          {topic.concepts.map((c, index) => {
            const difficultyBg =
              c.difficulty === 'BEGINNER'
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : c.difficulty === 'INTERMEDIATE'
                ? 'bg-amber-50 text-amber-700 border-amber-200'
                : 'bg-rose-50 text-rose-700 border-rose-200';

            return (
              <div
                key={c.id}
                className="p-5 hover:bg-stone-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-stone-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${difficultyBg}`}
                    >
                      {c.difficulty}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      {c.contentBlocks.length} Blocks • {c.questions.length} MCQs
                    </span>
                  </div>

                  <Link href={`/concepts/${c.slug}`}>
                    <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {c.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {c.shortDefinition}
                  </p>

                  {/* Exam Tags */}
                  {c.examMappings && c.examMappings.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {c.examMappings.map((em) => (
                        <span
                          key={em.id}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200"
                        >
                          {em.exam.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start md:self-center">
                  <Link
                    href={`/topics/${topic.slug}/read/#concept-${index + 1}`}
                    className="px-3 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 rounded-lg transition-colors"
                  >
                    <span>Read in Chapter</span>
                  </Link>
                  <Link
                    href={`/concepts/${c.slug}`}
                    className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    <span>Standalone</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
