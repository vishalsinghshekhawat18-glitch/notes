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
      {/* 1. Atmospheric Mountain Ridge Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-[#132e24] text-[#f7f5f0] border border-[#234c3d] shadow-lg p-6 sm:p-10">
        {/* Mountain Silhouette Background (SVG) */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <svg className="w-full h-full object-cover" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
            {/* Distant Ridge */}
            <path d="M0,280 L180,180 L350,260 L520,150 L720,240 L920,130 L1080,220 L1200,160 L1200,400 L0,400 Z" fill="#ffffff" opacity="0.15" />
            {/* Mid Ridge */}
            <path d="M0,320 L140,240 L300,310 L480,210 L640,290 L850,190 L1020,280 L1200,230 L1200,400 L0,400 Z" fill="#ffffff" opacity="0.25" />
            {/* Foreground Peak */}
            <path d="M0,370 L220,290 L420,360 L600,280 L800,340 L980,270 L1200,330 L1200,400 L0,400 Z" fill="#ffffff" opacity="0.4" />
          </svg>
        </div>

        {/* Ambient Warm Gradient Overlay */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#c25e2e]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Top Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-medium tracking-wider text-amber-200 shadow-xs">
              <span className="text-amber-400">▲</span>
              <span>ARAVALLI RIDGE • KNOWLEDGE OPERATING SYSTEM</span>
            </div>
            <div className="text-xs font-mono text-emerald-200 bg-black/20 backdrop-blur-md border border-white/10 px-3.5 py-1 rounded-full shadow-2xs">
              Elevation: 17 Escarpments • {totalTopics} Peaks • {totalConcepts} Waypoints
            </div>
          </div>

          {/* Hero Headlines */}
          <div className="max-w-3xl space-y-3 pt-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Ascend the Ridge of Knowledge
            </h1>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-serif max-w-2xl">
              An unyielding, source-grounded intellectual sanctuary carved into canonical truth. Traverse structured escarpments, master immutable propositions, and conquer competitive examinations without fragmented notes.
            </p>
          </div>

          {/* Global Search Input on Hero */}
          <div className="pt-2 max-w-2xl">
            <GlobalSearchBar />
          </div>
        </div>
      </section>

      {/* 2. Active Session Resumption */}
      <ContinueReadingCard />

      {/* 3. Interactive Knowledge Shelves (Filterable, Flagships & Domain Groups) */}
      <KnowledgeShelvesView domains={domains} />

      {/* 4. Multi-Exam Multi-Lens Epistemic Architecture */}
      <section className="bg-white border border-[#e5dfd3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f0ebe1] pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c25e2e]">
              Epistemic Bastion
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              One Bedrock Ridge • 8 Examination Vistas
            </h3>
          </div>
          <span className="text-xs font-mono text-[#143227] bg-[#eef6f2] border border-[#cbe4d7] px-3 py-1 rounded-md font-semibold">
            Zero Source Omission Guarantee
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl font-serif">
          Universal foundational knowledge exists once in immutable canonical form. Examinations apply selective analytical vantage points, interrogating distinct question depths and test-taker traps without fracturing truth into separate syllabus silos.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs font-mono">
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Union Public Service</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">🏛️ UPSC APFC / EPFO</div>
          </div>
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">State Public Service</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">🏰 RPSC RAS / RTS</div>
          </div>
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Central Banking</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">🏦 RBI Grade B</div>
          </div>
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Rural Development</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">🌾 NABARD Grade A</div>
          </div>
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Public Sector Banking</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">💳 SBI Probationary Officer</div>
          </div>
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">National Banking Selection</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">💼 IBPS PO / Management</div>
          </div>
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Securities Market</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">📈 SEBI Grade A (General)</div>
          </div>
          <div className="bg-[#f7f5f0] border border-[#e5dfd3] p-3.5 rounded-xl hover:border-[#c25e2e] transition-all group">
            <div className="text-stone-400 text-[10px] uppercase font-bold">Banking Professional</div>
            <div className="text-stone-900 font-bold mt-1 group-hover:text-[#c25e2e]">📜 IIBF DBF / JAIIB</div>
          </div>
        </div>
      </section>
    </div>
  );
}
