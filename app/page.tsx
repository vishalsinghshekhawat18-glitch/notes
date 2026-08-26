import React from 'react';
import Link from 'next/link';
import { getAllLibraryData } from '@/lib/knowledge/web-data';

export const revalidate = 0; // Dynamic data

export default async function LibraryPage() {
  const domains = await getAllLibraryData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-sans">
      {/* Hero Header */}
      <div className="mb-10 pb-6 border-b border-stone-200">
        <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-semibold mb-1">
          Mind of Aravalli — Academic Reading Hub
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Canonical Knowledge Library
        </h1>
        <p className="mt-2 text-sm text-stone-600 max-w-2xl leading-relaxed">
          Source-grounded, claim-verified concepts organized in strict hierarchical progression. Read deeply, inspect primary evidence, apply exam lenses, and test active recall.
        </p>

        {/* Quick Launch Cards */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          <span className="text-stone-500 font-mono self-center mr-1">Featured Pilot:</span>
          <Link
            href="/topics/part-3-fundamental-rights"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-900 text-stone-50 hover:bg-emerald-800 transition-colors font-medium shadow-xs"
          >
            <span>📜 Part III: Fundamental Rights</span>
            <span className="text-[10px] bg-stone-700 px-1.5 py-0.2 rounded">16 Concepts</span>
          </Link>
          <Link
            href="/topics/part-4-directive-principles-of-state-policy"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-colors"
          >
            <span>🏛️ Part IV: Directive Principles</span>
            <span className="text-[10px] bg-stone-200 px-1.5 py-0.2 rounded">5 Concepts</span>
          </Link>
          <Link
            href="/topics/inflation-dynamics-measurement-policy"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-colors"
          >
            <span>📈 Economics: Inflation Dynamics</span>
            <span className="text-[10px] bg-stone-200 px-1.5 py-0.2 rounded">5 Concepts</span>
          </Link>
        </div>
      </div>

      {/* Domain & Subject Sections */}
      <div className="space-y-12">
        {domains.map((domain) => (
          <section key={domain.id} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px bg-stone-300 flex-1" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
                {domain.name}
              </h2>
              <span className="h-px bg-stone-300 flex-1" />
            </div>

            {domain.subjects.map((subject) => (
              <div key={subject.id} className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-serif font-bold text-stone-900">
                    {subject.name}
                  </h3>
                  <span className="text-xs font-mono text-stone-500">
                    {subject.topics.reduce((acc, t) => acc + t.concepts.length, 0)} Canonical Concepts
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subject.topics.map((topic) => (
                    <div
                      key={topic.id}
                      className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-2">
                          <span>Topic {topic.order || 1}</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold text-[10px]">
                            {topic.concepts.length} Concepts
                          </span>
                        </div>
                        <Link href={`/topics/${topic.slug}`}>
                          <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-900 transition-colors">
                            {topic.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                          {topic.description || 'Comprehensive conceptual module.'}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                          <span>Sequential Progression</span>
                        </div>
                        <Link
                          href={`/topics/${topic.slug}`}
                          className="text-xs font-semibold text-emerald-800 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
                        >
                          <span>Explore Topic</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
