import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTopicWithConcepts } from '@/lib/knowledge/web-data';

interface TopicPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'part-3-fundamental-rights' },
    { slug: 'part-4-directive-principles-of-state-policy' },
    { slug: 'inflation-dynamics-measurement-policy' },
  ];
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = await getTopicWithConcepts(slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans">
      {/* Breadcrumb Header */}
      <nav className="text-xs font-mono text-stone-500 mb-3 flex items-center gap-2">
        <Link href="/" className="hover:text-stone-900 transition-colors">
          Library
        </Link>
        <span>›</span>
        <span>{topic.subject.domain.name}</span>
        <span>›</span>
        <span className="text-stone-700 font-semibold">{topic.subject.name}</span>
      </nav>

      {/* Topic Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 mb-8 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
          <span>{topic.subject.name} • Module</span>
          <span className="font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-900 rounded">
            {topic.concepts.length} Canonical Concepts
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
          {topic.title}
        </h1>
        <p className="text-sm text-stone-600 mt-2 leading-relaxed">
          {topic.description || 'Master all underlying constitutional doctrines, statutory texts, and examination lenses in sequential progression.'}
        </p>

        <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-2 text-xs">
          <span className="text-stone-500 self-center">Start Reading:</span>
          {topic.concepts.length > 0 && (
            <Link
              href={`/concepts/${topic.concepts[0].slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800 text-white hover:bg-emerald-900 rounded font-medium transition-colors"
            >
              <span>Begin Concept 1: {topic.concepts[0].title}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>

      {/* Concepts Sequential Progression */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-600">
            Sequential Learning Curriculum
          </h2>
          <span className="text-xs text-stone-500">
            Click any concept to begin deep reading
          </span>
        </div>

        <div className="divide-y divide-stone-200 bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
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
                    href={`/concepts/${c.slug}`}
                    className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-emerald-800 hover:text-white text-stone-800 rounded-md transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <span>→</span>
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
