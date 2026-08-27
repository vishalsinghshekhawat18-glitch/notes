import React from 'react';
import Link from 'next/link';
import { getLibrarySubjectsOverview } from '@/lib/knowledge/web-data';
import { GlobalSearchBar } from '@/components/navigation/global-search-bar';
import { ContinueReadingCard } from '@/components/navigation/continue-reading-card';

export default async function LibraryPage() {
  const domains = await getLibrarySubjectsOverview();

  const totalSubjects = domains.reduce((acc, d) => acc + d.subjects.length, 0);
  const totalTopics = domains.reduce(
    (acc, d) => acc + d.subjects.reduce((sAcc, s) => sAcc + s.topicsCount, 0),
    0
  );
  const totalConcepts = domains.reduce(
    (acc, d) => acc + d.subjects.reduce((sAcc, s) => sAcc + s.conceptsCount, 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 font-sans space-y-8">
      {/* Top Header & Orientation */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold">
            Mind of Aravalli • Reading Hub
          </div>
          <div className="text-xs font-mono text-stone-500 hidden sm:block">
            {totalSubjects} Subjects • {totalTopics} Topics • {totalConcepts} Concepts
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Personal Study Library
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
          Source-grounded canonical curriculum organized for uninterrupted, sequential mastery. Select a subject to explore its structured topics and start reading.
        </p>
      </div>

      {/* Prominent Global Search */}
      <div>
        <GlobalSearchBar />
      </div>

      {/* Lightweight Resume Reading Widget */}
      <ContinueReadingCard />

      {/* Structured Domain & Subject Grid */}
      <div className="space-y-10 pt-2">
        {domains.map((domain) => (
          <section key={domain.id} className="space-y-4">
            {/* Domain Group Header */}
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500 shrink-0">
                {domain.name}
              </h2>
              <span className="h-px bg-stone-200 flex-1" />
              <span className="text-[11px] font-mono text-stone-400">
                {domain.subjects.length} {domain.subjects.length === 1 ? 'Subject' : 'Subjects'}
              </span>
            </div>

            {/* Subject Cards Grid (Scalable to 20+ Subjects) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {domain.subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="bg-white border border-stone-200 hover:border-stone-400 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                      <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-medium">
                        {subject.topicsCount} Topics
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-semibold">
                        {subject.conceptsCount} Concepts
                      </span>
                    </div>

                    <Link href={`/subjects/${subject.slug}`} className="block group-hover:text-emerald-900 transition-colors">
                      <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                        {subject.name}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {subject.description || 'Comprehensive canonical knowledge base and examination lens curriculum.'}
                    </p>
                  </div>

                  {/* Subject Card Actions */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/subjects/${subject.slug}`}
                      className="text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      View Syllabus & Topics →
                    </Link>

                    {subject.firstTopicSlug && (
                      <Link
                        href={`/topics/${subject.firstTopicSlug}/read`}
                        className="text-xs font-semibold px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg shadow-2xs transition-colors inline-flex items-center gap-1"
                      >
                        <span>Start Reading</span>
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
