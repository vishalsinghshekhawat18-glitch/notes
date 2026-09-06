'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DomainWithSubjects, SubjectOverviewItem } from '@/lib/knowledge/web-data';

interface KnowledgeShelvesViewProps {
  domains: DomainWithSubjects[];
}

interface ThematicShelf {
  id: string;
  title: string;
  icon: string;
  badge: string;
  accentColor: string;
  borderAccent: string;
  subjectSlugs: string[];
}

const THEMATIC_SHELVES: ThematicShelf[] = [
  {
    id: 'shelf-1',
    title: 'Shelf 1: Quantitative Logic, Communication & Welfare Architecture',
    icon: '📐',
    badge: 'Analytical & Policy Bastion',
    accentColor: 'text-[#143227] bg-[#ede8dc] border-[#d6cebe]',
    borderAccent: 'border-l-[#143227]',
    subjectSlugs: [
      'quantitative-aptitude-and-data-interpretation', // #6
      'english-descriptive-writing',                   // #7
      'government-schemes',                            // #10
    ],
  },
  {
    id: 'shelf-2',
    title: 'Shelf 2: Macroeconomics, Financial Systems & Global Affairs',
    icon: '🏦',
    badge: 'Banking & Macro Escarpment',
    accentColor: 'text-[#c25e2e] bg-[#fbf5ee] border-[#edd9cb]',
    borderAccent: 'border-l-[#c25e2e]',
    subjectSlugs: [
      'iibf-banking-regulations',                      // #4
      'indian-economy',                                // #1
      'agriculture-and-rural-development',             // #11 (Rural Finance & Agri)
      'general-awareness',                             // #12
    ],
  },
  {
    id: 'shelf-3',
    title: 'Shelf 3: Polity, Geography, Civilizations & World History',
    icon: '🏛️',
    badge: 'Statecraft & Heritage Highland',
    accentColor: 'text-[#854d0e] bg-[#fef9ee] border-[#fde68a]',
    borderAccent: 'border-l-[#b45309]',
    subjectSlugs: [
      'indian-polity',                                 // #2
      'ancient-indian-history',                        // #5
      'modern-indian-history',                         // #8
      'geography-and-environment',                     // #9
      'medieval-indian-history',                       // #13
      'world-history',                                 // #14
      'art-culture-rajasthan',                         // #15
    ],
  },
  {
    id: 'shelf-4',
    title: 'Shelf 4: Industrial Relations, Labour Codes & Social Security',
    icon: '⚖️',
    badge: 'Statutory Labour Bastion',
    accentColor: 'text-[#6b21a8] bg-[#fbf5ff] border-[#f3e8ff]',
    borderAccent: 'border-l-[#9333ea]',
    subjectSlugs: [
      'industrial-relations-and-labour-laws',          // #17
    ],
  },
  {
    id: 'shelf-5',
    title: 'Shelf 5: Empirical Science, Scientific Literacy & Biotechnology',
    icon: '🔬',
    badge: 'Science & Emerging Tech Peak',
    accentColor: 'text-[#164e3f] bg-[#eef6f2] border-[#cbe4d7]',
    borderAccent: 'border-l-[#164e3f]',
    subjectSlugs: [
      'basic-science',                                 // #3
      'applied-science-and-biotechnology',             // #16
    ],
  },
  {
    id: 'shelf-6',
    title: 'Shelf 6: Rajasthan Civil Services & State Governance (RPSC RAS Master)',
    icon: '👑',
    badge: 'RPSC RAS Complete Flagship',
    accentColor: 'text-[#9a3412] bg-[#fff7ed] border-[#ffedd5]',
    borderAccent: 'border-l-[#ea580c]',
    subjectSlugs: [
      'rajasthan-history-culture-geography',
      'public-administration-and-laws',
      'ethics-behavior-sports',
      'general-hindi',
    ],
  },
];

export function KnowledgeShelvesView({ domains }: KnowledgeShelvesViewProps) {
  const [layoutMode, setLayoutMode] = useState<'SHELVES' | 'GRID'>('SHELVES');
  const [searchQuery, setSearchQuery] = useState('');

  const allSubjects = useMemo(() => domains.flatMap((d) => d.subjects), [domains]);

  // Map subjects by slug for instant lookup
  const subjectMap = useMemo(() => {
    const map = new Map<string, SubjectOverviewItem>();
    allSubjects.forEach((s) => map.set(s.slug, s));
    return map;
  }, [allSubjects]);

  // Theme badges by code
  const getSubjectTheme = (code: string) => {
    if (code.startsWith('GOV')) return { border: 'border-l-indigo-600', badge: 'bg-indigo-50 text-indigo-800 border-indigo-200' };
    if (code.startsWith('ECO')) return { border: 'border-l-emerald-600', badge: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
    if (code.startsWith('SCI')) return { border: 'border-l-teal-600', badge: 'bg-teal-50 text-teal-800 border-teal-200' };
    if (code.startsWith('BNK')) return { border: 'border-l-amber-600', badge: 'bg-amber-50 text-amber-900 border-amber-200' };
    if (code.startsWith('HIS')) return { border: 'border-l-orange-600', badge: 'bg-orange-50 text-orange-900 border-orange-200' };
    if (code.startsWith('APT')) return { border: 'border-l-blue-600', badge: 'bg-blue-50 text-blue-800 border-blue-200' };
    if (code.startsWith('LAN')) return { border: 'border-l-purple-600', badge: 'bg-purple-50 text-purple-800 border-purple-200' };
    if (code.startsWith('PUB')) return { border: 'border-l-rose-600', badge: 'bg-rose-50 text-rose-800 border-rose-200' };
    if (code.startsWith('GEO')) return { border: 'border-l-cyan-600', badge: 'bg-cyan-50 text-cyan-800 border-cyan-200' };
    if (code.startsWith('ARD')) return { border: 'border-l-lime-600', badge: 'bg-lime-50 text-lime-800 border-lime-200' };
    if (code.startsWith('ART')) return { border: 'border-l-fuchsia-600', badge: 'bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200' };
    if (code.startsWith('IRL')) return { border: 'border-l-violet-600', badge: 'bg-violet-50 text-violet-800 border-violet-200' };
    if (code.startsWith('GEN')) return { border: 'border-l-sky-600', badge: 'bg-sky-50 text-sky-800 border-sky-200' };
    if (code.startsWith('RAJ')) return { border: 'border-l-amber-700', badge: 'bg-amber-100 text-amber-900 border-amber-300' };
    if (code.startsWith('PAD')) return { border: 'border-l-red-600', badge: 'bg-red-50 text-red-800 border-red-200' };
    if (code.startsWith('ETH')) return { border: 'border-l-emerald-700', badge: 'bg-emerald-50 text-emerald-900 border-emerald-300' };
    if (code.startsWith('HIN')) return { border: 'border-l-orange-700', badge: 'bg-orange-50 text-orange-950 border-orange-300' };
    return { border: 'border-l-stone-600', badge: 'bg-stone-100 text-stone-800 border-stone-200' };
  };

  const matchesSearch = (subject: SubjectOverviewItem) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      subject.name.toLowerCase().includes(q) ||
      subject.description.toLowerCase().includes(q) ||
      subject.domainName.toLowerCase().includes(q) ||
      subject.code.toLowerCase().includes(q) ||
      subject.featuredTopics.some((t) => t.toLowerCase().includes(q))
    );
  };

  // Compact Subject Card Component
  const renderSubjectCard = (subject: SubjectOverviewItem) => {
    const theme = getSubjectTheme(subject.code);
    const isFlagship = subject.conceptsCount >= 60;

    return (
      <article
        key={subject.id}
        className={`bg-white border border-[#e5dfd3] hover:border-[#c25e2e] rounded-xl p-4 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between border-l-4 ${theme.border} group`}
      >
        <div className="space-y-2">
          {/* Header Row: Code & Counts */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${theme.badge}`}>
              {subject.code}
            </span>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="text-stone-600 bg-[#f7f5f0] border border-[#e5dfd3] px-1.5 py-0.5 rounded">
                {subject.topicsCount} Peaks
              </span>
              <span className="bg-[#eef6f2] text-[#143227] font-bold px-1.5 py-0.5 rounded border border-[#cbe4d7]">
                {subject.conceptsCount} Waypoints
              </span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/subjects/${subject.slug}`} className="block group-hover:text-[#143227] transition-colors">
            <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
              {subject.name}
            </h4>
          </Link>

          {/* Compact Scope / Description */}
          <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
            {subject.description || 'Canonical knowledge syllabus.'}
          </p>

          {/* Topic Highlights Chips */}
          {subject.featuredTopics.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {subject.featuredTopics.slice(0, 3).map((topicTitle, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-sans bg-[#f7f5f0] border border-[#e8e2d5] text-stone-600 px-1.5 py-0.5 rounded truncate max-w-[180px]"
                >
                  {topicTitle}
                </span>
              ))}
              {subject.topicsCount > 3 && (
                <span className="text-[10px] font-mono text-stone-400 self-center">
                  +{subject.topicsCount - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-3 pt-2.5 border-t border-[#f0ebe1] flex items-center justify-between text-xs font-medium">
          <Link
            href={`/subjects/${subject.slug}`}
            className="text-stone-500 hover:text-[#143227] transition-colors"
          >
            Syllabus Map →
          </Link>

          {subject.firstTopicSlug && (
            <Link
              href={`/topics/${subject.firstTopicSlug}/read`}
              className={`px-2.5 py-1 rounded text-white text-[11px] font-semibold transition-colors inline-flex items-center gap-1 ${
                isFlagship
                  ? 'bg-[#143227] hover:bg-[#1f493b]'
                  : 'bg-[#292524] hover:bg-[#1c1917]'
              }`}
            >
              <span>Begin Ascent</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="space-y-6">
      {/* View Switcher & Fast Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5dfd3] pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#143227]">
            ▲ Ridge Shelves
          </span>
          <span className="text-xs text-stone-300 font-mono">•</span>
          <span className="text-xs text-stone-600 font-mono">
            {allSubjects.length} Mountain Knowledge Escarpments
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick Filter */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter escarpments..."
              className="w-48 sm:w-64 text-xs bg-white border border-[#dcd6c8] focus:border-[#c25e2e] rounded-lg px-3 py-1.5 outline-none transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            )}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-[#ede8dc] p-0.5 rounded-lg text-xs font-mono">
            <button
              onClick={() => setLayoutMode('SHELVES')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                layoutMode === 'SHELVES'
                  ? 'bg-white text-stone-900 font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Shelves
            </button>
            <button
              onClick={() => setLayoutMode('GRID')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                layoutMode === 'GRID'
                  ? 'bg-white text-stone-900 font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Domains
            </button>
          </div>
        </div>
      </div>

      {/* Mode A: Thematic Shelf Rows (Similar Subjects in Same Line) */}
      {layoutMode === 'SHELVES' ? (
        <div className="space-y-6">
          {THEMATIC_SHELVES.map((shelf) => {
            const shelfSubjects = shelf.subjectSlugs
              .map((slug) => subjectMap.get(slug))
              .filter((s): s is SubjectOverviewItem => s !== undefined)
              .filter(matchesSearch);

            if (shelfSubjects.length === 0) return null;

            return (
              <section
                key={shelf.id}
                className="bg-[#ffffff] border border-[#e5dfd3] rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xs"
              >
                {/* Shelf Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f0ebe1] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl" role="img" aria-label={shelf.title}>
                      {shelf.icon}
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg tracking-tight">
                        {shelf.title}
                      </h3>
                      <span className="text-[11px] font-mono text-stone-600">
                        {shelfSubjects.length} Escarpments in this Ridge
                      </span>
                    </div>
                  </div>

                  <span className={`self-start sm:self-auto text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${shelf.accentColor}`}>
                    {shelf.badge}
                  </span>
                </div>

                {/* Subject Cards inside Shelf */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {shelfSubjects.map(renderSubjectCard)}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Mode B: Compact 3-Column Unified Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allSubjects.filter(matchesSearch).map(renderSubjectCard)}
        </div>
      )}
    </div>
  );
}
