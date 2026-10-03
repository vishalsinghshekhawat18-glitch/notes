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
    </div>
  );
}
