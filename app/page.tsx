import React from 'react';
import Link from 'next/link';
import { getLibrarySubjectsOverview } from '@/lib/knowledge/web-data';
import { GlobalSearchBar } from '@/components/navigation/global-search-bar';
import { ContinueReadingCard } from '@/components/navigation/continue-reading-card';
import { KnowledgeShelvesView } from '@/components/navigation/knowledge-shelves-view';

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
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 font-sans space-y-8">
      {/* 1. Academic Library Hero & Identity */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-mono font-medium tracking-wide shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MIND OF ARAVALLI • KNOWLEDGE OPERATING SYSTEM</span>
          </div>
          <div className="text-xs font-mono text-stone-600 bg-white border border-stone-200 px-3 py-1 rounded-full shadow-2xs">
            {totalSubjects} Curated Subjects • {totalTopics} Topics • {totalConcepts} Canonical Concepts
          </div>
        </div>

        <div className="max-w-3xl space-y-2 pt-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-none">
            Shelves of Knowledge
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-serif max-w-2xl">
            A source-grounded intellectual publishing platform and canonical academic library. Select any shelf below to enter continuous, distraction-free study.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="pt-1 max-w-2xl">
          <GlobalSearchBar />
        </div>
      </section>

      {/* 2. Active Session Resumption */}
      <ContinueReadingCard />

      {/* 3. Interactive Knowledge Shelves (Filterable, Flagships & Domain Groups) */}
      <KnowledgeShelvesView domains={domains} />

      {/* 4. Multi-Exam Multi-Lens Epistemic Architecture */}
      <section className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-800">
              Epistemic Framework
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              One Canonical Knowledge Base • 8 Examination Lenses
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-400 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-md">
            Zero Source Omission Guarantee
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
          Universal foundational knowledge exists once in canonical form. Examinations apply selective analytical lenses, emphasizing distinct question patterns, depth tiers, and examiner traps without fragmenting notes across different books.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Union Public Service</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">🏛️ UPSC APFC / EPFO</div>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">State Public Service</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">🏰 RPSC RAS / RTS</div>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Central Banking</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">🏦 RBI Grade B</div>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Rural Development</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">🌾 NABARD Grade A</div>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Public Sector Banking</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">💳 SBI Probationary Officer</div>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">National Banking Selection</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">💼 IBPS PO / Management</div>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Securities Market</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">📈 SEBI Grade A (General)</div>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl hover:border-emerald-700 transition-colors group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Banking Professional</div>
            <div className="text-stone-900 font-bold mt-0.5 group-hover:text-emerald-900">📜 IIBF DBF / JAIIB</div>
          </div>
        </div>
      </section>
    </div>
  );
}
