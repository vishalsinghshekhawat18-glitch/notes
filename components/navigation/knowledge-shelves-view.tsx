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
    id: 'governance',
    title: 'Governance, Constitution & Public Policy',
    icon: '🏛️',
    badge: 'Constitutional Order',
    accentColor: 'text-indigo-900 bg-indigo-50 border-indigo-200',
    borderAccent: 'border-l-indigo-600',
    subjectSlugs: ['indian-polity', 'government-schemes'],
  },
  {
    id: 'economics-banking',
    title: 'Economics, Banking & Financial Regulations',
    icon: '🏦',
    badge: 'Macroeconomics & Finance',
    accentColor: 'text-emerald-900 bg-emerald-50 border-emerald-200',
    borderAccent: 'border-l-emerald-600',
    subjectSlugs: ['indian-economy', 'iibf-banking-regulations'],
  },
  {
    id: 'science-aptitude',
    title: 'Science, Technology & Quantitative Reasoning',
    icon: '🔬',
    badge: 'Empirical & Analytical',
    accentColor: 'text-teal-900 bg-teal-50 border-teal-200',
    borderAccent: 'border-l-teal-600',
    subjectSlugs: ['basic-science', 'quantitative-aptitude-and-data-interpretation'],
  },
  {
    id: 'civilization-language',
    title: 'Civilization, Language & General Studies',
    icon: '📜',
    badge: 'Heritage & Communication',
    accentColor: 'text-amber-900 bg-amber-50 border-amber-200',
    borderAccent: 'border-l-amber-600',
    subjectSlugs: ['ancient-indian-history', 'english-descriptive-writing', 'general-awareness'],
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
        className={`bg-white border border-stone-200 hover:border-stone-400 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between border-l-4 ${theme.border} group`}
      >
        <div className="space-y-2">
          {/* Header Row: Code & Counts */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${theme.badge}`}>
              {subject.code}
            </span>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                {subject.topicsCount} Topics
              </span>
              <span className="bg-emerald-50 text-emerald-800 font-bold px-1.5 py-0.5 rounded border border-emerald-100">
                {subject.conceptsCount} Concepts
              </span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/subjects/${subject.slug}`} className="block group-hover:text-emerald-900 transition-colors">
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
                  className="text-[10px] font-sans bg-stone-50 border border-stone-200/80 text-stone-600 px-1.5 py-0.5 rounded truncate max-w-[180px]"
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
        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-medium">
          <Link
            href={`/subjects/${subject.slug}`}
            className="text-stone-500 hover:text-stone-900 transition-colors"
          >
            Syllabus →
          </Link>

          {subject.firstTopicSlug && (
            <Link
              href={`/topics/${subject.firstTopicSlug}/read`}
              className={`px-2.5 py-1 rounded text-white text-[11px] font-semibold transition-colors inline-flex items-center gap-1 ${
                isFlagship
                  ? 'bg-emerald-800 hover:bg-emerald-900'
                  : 'bg-stone-800 hover:bg-stone-900'
              }`}
            >
              <span>Start Reading</span>
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
            Knowledge Shelves
          </span>
          <span className="text-xs text-stone-400 font-mono">•</span>
          <span className="text-xs text-stone-500 font-mono">
            {allSubjects.length} Curated Bodies of Knowledge
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick Filter */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter subjects..."
              className="bg-white border border-stone-200 focus:border-stone-400 rounded-lg px-2.5 py-1 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden transition-colors w-40 sm:w-48"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1.5 text-stone-400 hover:text-stone-600 text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center p-0.5 bg-stone-100 border border-stone-200 rounded-lg text-xs font-mono">
            <button
              onClick={() => setLayoutMode('SHELVES')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                layoutMode === 'SHELVES'
                  ? 'bg-white text-stone-900 font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Group similar subjects side-by-side in thematic shelf lines"
            >
              Shelf Rows
            </button>
            <button
              onClick={() => setLayoutMode('GRID')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                layoutMode === 'GRID'
                  ? 'bg-white text-stone-900 font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Compact 3-column unified grid"
            >
              Compact Grid
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

            const gridCols =
              shelfSubjects.length === 1
                ? 'grid-cols-1 md:grid-cols-2'
                : shelfSubjects.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-3';

            const totalShelfConcepts = shelfSubjects.reduce((acc, s) => acc + s.conceptsCount, 0);

            return (
              <div key={shelf.id} className="space-y-2.5">
                {/* Shelf Row Header */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{shelf.icon}</span>
                    <h3 className="text-xs sm:text-sm font-serif font-bold text-stone-900 tracking-tight">
                      {shelf.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {totalShelfConcepts} Concepts
                    </span>
                    <span className="h-px w-8 sm:w-16 bg-stone-200" />
                  </div>
                </div>

                {/* Subject Boxes in the Same Line */}
                <div className={`grid ${gridCols} gap-4`}>
                  {shelfSubjects.map(renderSubjectCard)}
                </div>
              </div>
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
