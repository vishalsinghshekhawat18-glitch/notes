'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Shelf007PartGroup, Shelf007SubjectMeta, Shelf007ChapterItem } from '@/lib/shelf007/service';
import {
  Search,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Layers,
  Zap,
  Clock,
  ArrowRight,
  Sparkles,
  FileText,
  Calendar,
} from 'lucide-react';

interface Shelf007AcademicTOCProps {
  subject: Shelf007SubjectMeta;
  partGroups: Shelf007PartGroup[];
  firstReadSlug: string;
}

// Chronological timeline metadata for Current Affairs monthly dossiers
const CHRONO_META: Record<
  string,
  {
    tag: string;
    period: string;
    isLatest?: boolean;
    badgeStyle: string;
  }
> = {
  'chapter-02': {
    tag: 'Q1 2026',
    period: 'Jan – Mar 2026 (Full Q1)',
    badgeStyle: 'bg-[#F2EFE8] text-[#3D4F44] border-[#DCD5C5]',
  },
  'chapter-03': {
    tag: 'APR 2026',
    period: 'April 2026 Macro Prudential',
    badgeStyle: 'bg-[#F2EFE8] text-[#3D4F44] border-[#DCD5C5]',
  },
  'chapter-04': {
    tag: 'MAY 2026',
    period: 'May 2026 PIB & Regulators',
    badgeStyle: 'bg-[#F2EFE8] text-[#3D4F44] border-[#DCD5C5]',
  },
  'chapter-05': {
    tag: 'JUN 2026',
    period: 'June 2026 Stability & Benchmark',
    badgeStyle: 'bg-[#F2EFE8] text-[#3D4F44] border-[#DCD5C5]',
  },
  'chapter-06': {
    tag: 'JUL 2026',
    period: 'July 2026 Budget & Synthesis',
    badgeStyle: 'bg-[#F2EFE8] text-[#3D4F44] border-[#DCD5C5]',
  },
  'chapter-07': {
    tag: 'AUG 2026',
    period: 'August 2026 Gazette & Macro',
    badgeStyle: 'bg-[#F2EFE8] text-[#3D4F44] border-[#DCD5C5]',
  },
  'chapter-08': {
    tag: 'SEP 2026',
    period: 'September 2026 Monetary Corridor',
    badgeStyle: 'bg-[#F2EFE8] text-[#3D4F44] border-[#DCD5C5]',
  },
  'chapter-11': {
    tag: 'OCT 2026',
    period: 'October 1–13 (Latest Ingest)',
    isLatest: true,
    badgeStyle: 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold',
  },
};

function formatSectionButtonLabel(title: string): string {
  let clean = title
    .replace(/<[^>]+>/g, '')
    .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\uFE00-\u{FE0F}]/gu, '')
    .trim();
  clean = clean.replace(/^[\d\.\-\s:]+/, '').trim();
  if (clean === clean.toUpperCase() && clean.length > 3) {
    clean = clean
      .toLowerCase()
      .split(' ')
      .map((w) => {
        if (['and', '&', 'of', 'in', 'on', 'at', 'to', 'for'].includes(w)) return w;
        if (['rbi', 'sebi', 'pib', 'esi', 'fema', 'gdp', 'iibf', 'dbf', 'mof', 'po', 'clerk'].includes(w))
          return w.toUpperCase();
        return w.charAt(0).toUpperCase() + w.slice(1);
      })
      .join(' ');
  }
  return clean;
}

export function Shelf007AcademicTOC({
  subject,
  partGroups,
  firstReadSlug,
}: Shelf007AcademicTOCProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPartIndex, setSelectedPartIndex] = useState<number | 'all'>('all');
  const [viewMode, setViewMode] = useState<'compact' | 'detailed'>('detailed');

  // Collect all chapter slugs for expand/collapse state
  const allChapterSlugs = useMemo(() => {
    return partGroups.flatMap((g) => g.chapters.map((c) => c.slug));
  }, [partGroups]);

  // Collapsed by default to avoid vertical bloat
  const [expandedChapterSlugs, setExpandedChapterSlugs] = useState<Set<string>>(
    () => new Set()
  );

  const totalChapters = useMemo(() => {
    return partGroups.reduce((acc, g) => acc + g.chapters.length, 0);
  }, [partGroups]);

  const totalSections = useMemo(() => {
    return partGroups.reduce((acc, g) => {
      return acc + g.chapters.reduce((cAcc, c) => cAcc + c.sections.length, 0);
    }, 0);
  }, [partGroups]);

  const totalReadingMinutes = useMemo(() => {
    return Math.max(1, Math.ceil(subject.totalWords / 220));
  }, [subject.totalWords]);

  const toggleChapter = (chapterSlug: string) => {
    setExpandedChapterSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(chapterSlug)) {
        next.delete(chapterSlug);
      } else {
        next.add(chapterSlug);
      }
      return next;
    });
  };

  const expandAll = () => setExpandedChapterSlugs(new Set(allChapterSlugs));
  const collapseAll = () => setExpandedChapterSlugs(new Set());

  // Filter groups and chapters based on search query and selected part
  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return partGroups
      .map((group, idx) => {
        // If a specific part is selected and not searching, filter out other parts
        if (selectedPartIndex !== 'all' && selectedPartIndex !== idx && !q) {
          return null;
        }

        if (!q) {
          return group;
        }

        const matchingChapters = group.chapters.filter((chapter) => {
          const chapterMatches =
            chapter.title.toLowerCase().includes(q) ||
            chapter.shortTitle.toLowerCase().includes(q) ||
            chapter.description.toLowerCase().includes(q) ||
            `chapter ${chapter.order}`.includes(q);

          const sectionMatches = chapter.sections.some((s) =>
            s.title.toLowerCase().includes(q)
          );

          return chapterMatches || sectionMatches;
        });

        if (matchingChapters.length === 0) return null;

        return {
          ...group,
          chapters: matchingChapters,
        };
      })
      .filter((g): g is Shelf007PartGroup => g !== null);
  }, [partGroups, searchQuery, selectedPartIndex]);

  const matchingChaptersCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.chapters.length, 0);
  }, [filteredGroups]);

  // Helper to clean up titles for presentation
  const getDisplayTitle = (chapter: Shelf007ChapterItem) => {
    let t = chapter.title;
    // Strip redundant leading "CHAPTER XX:" if already displayed as a badge
    t = t.replace(/^CHAPTER\s+\d+[:•]\s*/i, '');
    // Strip redundant "RAPID REVISION MATRIX:\s*"
    t = t.replace(/^RAPID REVISION MATRIX[:\s]*/i, '');
    return t.trim();
  };

  return (
    <div className="space-y-6 font-sans max-w-full overflow-x-clip">
      {/* 1. Subject Sequential Reading Action Bar */}
      {firstReadSlug && (
        <header className="bg-[#FFFFFF] border border-[#E0D9CB] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/shelf-007/${subject.slug}/${firstReadSlug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] text-xs sm:text-sm font-serif font-semibold rounded-lg shadow-2xs transition-all hover:shadow-xs group cursor-pointer"
          >
            <span>▶ Begin Sequential Reading</span>
            <span className="text-[#C59B4B] text-xs font-mono font-normal group-hover:translate-x-0.5 transition-transform">
              (Chapter 01)
            </span>
          </Link>

          <span className="text-xs text-[#5A7365] font-mono hidden md:inline">
            Continuous vertical codex flow · Collapsible syllabus outline · Instant anchor jumps
          </span>
        </header>
      )}

      {/* 2. Interactive Part Jump Strip (Fast Spatial Orientation) */}
      {partGroups.length > 1 && (
        <nav
          aria-label="Curricular Parts Quick Navigation"
          className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono no-scrollbar"
        >
          <button
            onClick={() => setSelectedPartIndex('all')}
            className={`px-3 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              selectedPartIndex === 'all'
                ? 'bg-[#10251F] text-[#FAF8F3] border-[#10251F] font-semibold shadow-2xs'
                : 'bg-[#FFFFFF] text-[#2B3B33] border-[#E0D9CB] hover:bg-[#F5F2EB]'
            }`}
          >
            <span>All Parts</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded ${
                selectedPartIndex === 'all'
                  ? 'bg-[#1D4436] text-[#FAF8F3]'
                  : 'bg-[#F0ECE1] text-[#5A7365]'
              }`}
            >
              {totalChapters}
            </span>
          </button>

          {partGroups.map((group, idx) => {
            const isSelected = selectedPartIndex === idx;
            const label = group.partNumber || `Part ${idx + 1}`;
            const isChronoPart =
              group.partNumber === 'PART II' && subject.slug === 'current-affairs';
            const isRapidRev = group.partNumber === 'RAPID REVISION';

            return (
              <button
                key={idx}
                onClick={() => setSelectedPartIndex(idx)}
                title={`${group.groupTitle} (${group.chapters.length} chapters)`}
                className={`px-3 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer flex items-center gap-1.5 max-w-[280px] ${
                  isSelected
                    ? 'bg-[#10251F] text-[#FAF8F3] border-[#10251F] font-semibold shadow-2xs'
                    : 'bg-[#FFFFFF] text-[#2B3B33] border-[#E0D9CB] hover:bg-[#F5F2EB]'
                }`}
              >
                {isRapidRev ? (
                  <Zap className="w-3 h-3 text-[#9E722C] shrink-0" />
                ) : isChronoPart ? (
                  <Calendar className="w-3 h-3 text-emerald-600 shrink-0" />
                ) : null}

                <span className="font-semibold shrink-0">{label}</span>

                <span className="text-[11px] truncate hidden sm:inline text-stone-500 font-sans">
                  {isChronoPart
                    ? '2026 Dossiers'
                    : isRapidRev
                    ? 'Recall Matrices'
                    : group.groupTitle}
                </span>

                {isChronoPart && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="October 2026 Ingested" />
                )}

                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded shrink-0 ${
                    isSelected
                      ? 'bg-[#1D4436] text-[#FAF8F3]'
                      : 'bg-[#F0ECE1] text-[#5A7365]'
                  }`}
                >
                  {group.chapters.length}
                </span>
              </button>
            );
          })}
        </nav>
      )}

      {/* 3. Search Bar & Density Mode Switcher */}
      <div className="bg-[#FFFFFF] border border-[#E0D9CB] rounded-xl p-3 sm:p-4 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7365]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search across ${totalChapters} chapters, dossiers, and ${totalSections} sub-lessons...`}
            className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-[#FAF9F4] border border-[#E0D9CB] rounded-lg text-[#10251F] placeholder-[#8A9E92] focus:outline-none focus:ring-2 focus:ring-[#10251F]/30 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-[#5A7365] hover:text-[#10251F] font-mono cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* View Density Mode & Expand/Collapse Controls */}
        <div className="flex flex-wrap items-center justify-between md:justify-end gap-2 text-xs font-mono shrink-0">
          {searchQuery && (
            <span className="text-[#5A7365] font-medium mr-1 text-[11px]">
              Found {matchingChaptersCount} of {totalChapters} chapters
            </span>
          )}

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-lg border border-[#E0D9CB] p-0.5 bg-[#FAF9F4] text-xs">
            <button
              onClick={() => setViewMode('compact')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                viewMode === 'compact'
                  ? 'bg-[#10251F] text-[#FAF8F3] font-semibold shadow-2xs'
                  : 'text-[#5A7365] hover:text-[#10251F]'
              }`}
              title="Compact index (single-line rows for maximum speed)"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Compact</span>
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                viewMode === 'detailed'
                  ? 'bg-[#10251F] text-[#FAF8F3] font-semibold shadow-2xs'
                  : 'text-[#5A7365] hover:text-[#10251F]'
              }`}
              title="Bento & Curated layout with full metadata cards"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Bento Grid</span>
            </button>
          </div>

          <div className="h-4 w-px bg-[#E0D9CB] hidden sm:block mx-1" />

          <button
            onClick={expandAll}
            className="px-2.5 py-1 rounded-lg bg-[#F5F2EB] hover:bg-[#EAE4D7] text-[#10251F] transition-colors font-medium text-xs cursor-pointer border border-[#E0D9CB]"
            title="Expand all sub-lessons"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 rounded-lg bg-[#F5F2EB] hover:bg-[#EAE4D7] text-[#10251F] transition-colors font-medium text-xs cursor-pointer border border-[#E0D9CB]"
            title="Collapse all sub-lessons"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Filter Reset Banner (When Part is filtered) */}
      {selectedPartIndex !== 'all' && !searchQuery && (
        <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-[#F5F2EB] border border-[#E0D9CB] text-xs font-mono text-[#5A7365]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#10251F]">
              Showing: {partGroups[selectedPartIndex]?.partNumber || `Part ${selectedPartIndex + 1}`} (
              {partGroups[selectedPartIndex]?.chapters.length} chapters)
            </span>
          </div>
          <button
            onClick={() => setSelectedPartIndex('all')}
            className="text-[#9E722C] hover:text-[#10251F] font-semibold hover:underline cursor-pointer"
          >
            Show All Parts ({totalChapters} Chapters) →
          </button>
        </div>
      )}

      {/* 4. Main Curriculum Sections */}
      {filteredGroups.length === 0 ? (
        <div className="bg-[#FFFFFF] border border-[#E0D9CB] rounded-2xl p-8 text-center space-y-3">
          <p className="text-[#5A7365] text-sm font-sans">
            No curriculum chapters or sub-lessons match &ldquo;
            <span className="font-semibold text-[#10251F]">{searchQuery}</span>
            &rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedPartIndex('all');
            }}
            className="text-xs font-mono text-[#10251F] hover:underline font-semibold cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredGroups.map((group, groupIdx) => {
            const isRapidRev = group.partNumber === 'RAPID REVISION';
            const isChronoPart =
              group.partNumber === 'PART II' && subject.slug === 'current-affairs';

            return (
              <section key={groupIdx} className="space-y-4">
                {/* Part Section Heading */}
                <div className="border-b-2 border-[#10251F] pb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {group.partNumber && (
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${
                            isRapidRev
                              ? 'bg-amber-50 text-[#854D0E] border-amber-200'
                              : isChronoPart
                              ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                              : 'bg-[#F5F2EB] text-[#10251F] border-[#E0D9CB]'
                          }`}
                        >
                          {group.partNumber}
                        </span>
                      )}

                      <h2 className="text-lg sm:text-xl font-serif font-bold text-[#10251F] tracking-tight truncate">
                        {group.groupTitle}
                      </h2>

                      {isChronoPart && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
                          Q1–Q4 Synchronized
                        </span>
                      )}
                    </div>

                    {group.groupSubtitle && (
                      <p className="text-xs text-[#5A7365] font-sans italic truncate">
                        {group.groupSubtitle}
                      </p>
                    )}
                  </div>

                  <span className="text-xs font-mono text-[#5A7365] shrink-0 font-medium">
                    {group.chapters.length} {group.chapters.length === 1 ? 'Chapter' : 'Chapters'}
                  </span>
                </div>

                {/* =========================================================================
                    CASE A: RAPID REVISION MATRIX CONSOLE (Sleek Grid, Eliminates Bloat)
                   ========================================================================= */}
                {isRapidRev ? (
                  <div className="bg-[#FAF8F3] border border-[#E0D9CB] rounded-2xl p-4 sm:p-5 space-y-4">
                    {/* Console Header Strip */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#5A7365] border-b border-[#E8E2D5] pb-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#9E722C]" />
                        <span className="font-semibold text-[#10251F]">
                          60-Second Distinction Skeletons & Active Recall Matrices
                        </span>
                      </div>
                      <span className="text-[11px]">
                        Quick Pre-Exam Revision · {group.chapters.length} Modules
                      </span>
                    </div>

                    {/* Responsive Matrix Grid */}
                    <div
                      className={`grid gap-3 ${
                        viewMode === 'compact'
                          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
                      }`}
                    >
                      {group.chapters.map((chapter) => {
                        const isExpanded =
                          expandedChapterSlugs.has(chapter.slug) ||
                          searchQuery.trim().length > 0;
                        const displayTitle = getDisplayTitle(chapter);
                        const matchNum = chapter.slug.match(/(\d+)$/);
                        const matrixNum = matchNum ? matchNum[1] : String(chapter.order);

                        return (
                          <div
                            key={chapter.slug}
                            className="bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#9E722C] rounded-xl p-3.5 transition-all duration-150 group shadow-2xs hover:shadow-xs flex flex-col justify-between space-y-2.5"
                          >
                            <div className="space-y-1.5">
                              {/* Top Matrix Tag + Reading Time */}
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-bold text-[#9E722C] bg-[#FAF9F4] border border-[#E0D9CB] px-2 py-0.5 rounded text-[10px]">
                                  Matrix {matrixNum}
                                </span>
                                <span className="text-[#5A7365] text-[11px] flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  ~{chapter.readingMinutes}m
                                </span>
                              </div>

                              {/* Matrix Title */}
                              <Link
                                href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                                className="font-serif font-bold text-sm text-[#10251F] group-hover:text-[#9E722C] transition-colors line-clamp-2 block"
                              >
                                {displayTitle}
                              </Link>

                              {viewMode === 'detailed' && chapter.description && (
                                <p className="text-xs text-[#5A7365] font-sans line-clamp-2 leading-relaxed">
                                  {chapter.description}
                                </p>
                              )}
                            </div>

                            {/* Detailed Sub-Lessons Accordion Toggle */}
                            {viewMode === 'detailed' && chapter.sections.length > 0 && (
                              <div>
                                <button
                                  onClick={() => toggleChapter(chapter.slug)}
                                  className="text-[11px] font-mono text-[#5A7365] hover:text-[#10251F] flex items-center gap-1 cursor-pointer transition-colors"
                                >
                                  {isExpanded ? (
                                    <ChevronDown className="w-3 h-3" />
                                  ) : (
                                    <ChevronRight className="w-3 h-3" />
                                  )}
                                  <span>
                                    {chapter.sections.length} sub-sections {isExpanded ? '▲' : '▼'}
                                  </span>
                                </button>

                                {isExpanded && (
                                  <div className="mt-2 pt-2 border-t border-[#E8E2D5] space-y-1">
                                    {chapter.sections.map((sec, sIdx) => (
                                      <Link
                                        key={sec.id}
                                        href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                        className="flex items-center justify-between text-[11px] text-[#2B3B33] hover:text-[#10251F] p-1 rounded hover:bg-[#FAF9F4]"
                                      >
                                        <span className="truncate">
                                          § {sIdx + 1}. {sec.title}
                                        </span>
                                        <span className="text-[#9E722C] shrink-0 ml-1">›</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Action Link */}
                            <div className="border-t border-[#E8E2D5] pt-2 flex items-center justify-between text-xs">
                              <span className="text-[11px] font-mono text-[#5A7365]">
                                {chapter.sections.length} tables / matrices
                              </span>
                              <Link
                                href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                                className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#10251F] hover:text-[#9E722C] transition-colors cursor-pointer"
                              >
                                <span>Review</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : isChronoPart && viewMode === 'detailed' ? (
                  /* =========================================================================
                      CASE C: CHRONOLOGICAL DOSSIERS (Bento Grid with Recency Salience)
                     ========================================================================= */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.chapters.map((chapter) => {
                      const isExpanded =
                        expandedChapterSlugs.has(chapter.slug) ||
                        searchQuery.trim().length > 0;
                      const sectionCount = chapter.sections.length;
                      const chronoInfo = CHRONO_META[chapter.slug];
                      const isLatest = chronoInfo?.isLatest || chapter.slug === 'chapter-11';
                      const displayTitle = getDisplayTitle(chapter);

                      return (
                        <article
                          key={chapter.slug}
                          className={`rounded-2xl transition-all duration-200 group flex flex-col justify-between p-5 space-y-4 ${
                            isLatest
                              ? 'bg-gradient-to-br from-[#FFFFFF] via-[#F6FAF7] to-[#FAF9F4] border-2 border-emerald-600/50 shadow-xs ring-1 ring-emerald-600/20'
                              : 'bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] shadow-2xs hover:shadow-xs'
                          }`}
                        >
                          <div className="space-y-3">
                            {/* Chronological Header Strip */}
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {chronoInfo ? (
                                  <span
                                    className={`px-2.5 py-0.5 rounded text-[11px] border font-mono ${chronoInfo.badgeStyle}`}
                                  >
                                    {chronoInfo.tag}
                                  </span>
                                ) : (
                                  <span className="font-mono text-[11px] font-bold text-[#9E722C] bg-[#FAF9F4] border border-[#E0D9CB] px-2 py-0.5 rounded">
                                    Ch. {String(chapter.order).padStart(2, '0')}
                                  </span>
                                )}

                                {isLatest && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                                    <Sparkles className="w-3 h-3 text-emerald-700" />
                                    <span>Latest Ingest (Oct 1–13)</span>
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-2 text-[#5A7365] text-xs">
                                <span>{sectionCount} lessons</span>
                                <span>•</span>
                                <span>~{chapter.readingMinutes}m</span>
                              </div>
                            </div>

                            {/* Dossier Title */}
                            <div>
                              <Link
                                href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                                className="group/title block"
                              >
                                <h3
                                  className={`text-base sm:text-lg font-serif font-bold transition-colors leading-snug ${
                                    isLatest
                                      ? 'text-[#0E382B] group-hover/title:text-emerald-700'
                                      : 'text-[#10251F] group-hover/title:text-[#1B4D3C]'
                                  }`}
                                >
                                  {displayTitle}
                                </h3>
                              </Link>

                              {chronoInfo && (
                                <span className="text-[11px] font-mono text-[#5A7365] block mt-0.5">
                                  {chronoInfo.period} · {(chapter.wordCount / 1000).toFixed(1)}k words
                                </span>
                              )}
                            </div>

                            {/* Excerpt Synopsis */}
                            {chapter.description && (
                              <p className="text-xs font-sans text-[#2B3B33] leading-relaxed line-clamp-3">
                                {chapter.description}
                              </p>
                            )}

                            {/* Direct Section Selection Small Buttons */}
                            {sectionCount > 0 && (
                              <div className="pt-2 border-t border-[#E8E2D5] space-y-2">
                                <div className="flex items-center justify-between text-xs font-mono">
                                  <span className="font-semibold text-[#10251F] text-[11px] flex items-center gap-1.5">
                                    <span className="text-[#9E722C] font-bold">§</span>
                                    <span>Select Section ({sectionCount}):</span>
                                  </span>
                                  <button
                                    onClick={() => toggleChapter(chapter.slug)}
                                    className="text-[10px] font-mono text-[#5A7365] hover:text-[#10251F] flex items-center gap-1 cursor-pointer transition-colors"
                                    aria-label={isExpanded ? 'Hide outline' : 'Show outline'}
                                  >
                                    {isExpanded ? (
                                      <ChevronDown className="w-3 h-3" />
                                    ) : (
                                      <ChevronRight className="w-3 h-3" />
                                    )}
                                    <span>{isExpanded ? 'Hide List' : 'View List'}</span>
                                  </button>
                                </div>

                                {/* Small Pill Buttons for All Sections */}
                                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                                  {chapter.sections.map((sec, sIdx) => {
                                    const label = formatSectionButtonLabel(sec.title);
                                    return (
                                      <Link
                                        key={sec.id}
                                        href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                        title={`Jump directly to Section ${sIdx + 1}: ${sec.title}`}
                                        className="group/secbtn inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-[#FAF9F4] hover:bg-[#10251F] text-[#2B3B33] hover:text-[#FAF8F3] border border-[#E0D9CB] hover:border-[#10251F] transition-all duration-150 shadow-2xs active:scale-95 cursor-pointer"
                                      >
                                        <span className="font-mono text-[10px] font-bold text-[#9E722C] group-hover/secbtn:text-[#E8C582] shrink-0">
                                          § {sIdx + 1}
                                        </span>
                                        <span className="font-sans font-medium text-[11px] leading-tight truncate max-w-[160px] sm:max-w-[210px]">
                                          {label}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>

                                {/* Optional Expanded Full Outline */}
                                {isExpanded && (
                                  <div className="mt-2.5 pt-2 border-t border-[#E8E2D5] space-y-1 max-h-56 overflow-y-auto no-scrollbar pl-2 border-l-2 border-[#10251F]">
                                    {chapter.sections.map((sec, sIdx) => (
                                      <Link
                                        key={sec.id}
                                        href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                        className="flex items-center justify-between p-1 rounded hover:bg-[#FAF9F4] text-xs transition-colors group/sec gap-2"
                                      >
                                        <div className="flex items-center gap-1.5 min-w-0 truncate">
                                          <span className="font-mono text-[10px] font-semibold text-[#9E722C] shrink-0">
                                            § {sIdx + 1}
                                          </span>
                                          <span className="font-sans text-[#2B3B33] group-hover/sec:text-[#10251F] truncate text-[11px]">
                                            {sec.title}
                                          </span>
                                        </div>
                                        <span className="font-mono text-[10px] text-[#5A7365] group-hover/sec:text-[#10251F] shrink-0">
                                          jump ›
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Dossier Action Bar */}
                          <div className="border-t border-[#E8E2D5] pt-3 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-[#5A7365]">
                              {isLatest ? '153 Units Synthesized' : 'Canonical Evidence Base'}
                            </span>

                            <Link
                              href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                              className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer ${
                                isLatest
                                  ? 'bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] ring-1 ring-emerald-500/30'
                                  : 'bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3]'
                              }`}
                            >
                              <span>{isLatest ? 'Read Latest Dossier' : 'Read Dossier'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  /* =========================================================================
                      CASE D: STANDARD & COMPACT PRESENTATION MODES
                     ========================================================================= */
                  <div className="space-y-2">
                    {group.chapters.map((chapter) => {
                      const isExpanded =
                        expandedChapterSlugs.has(chapter.slug) ||
                        searchQuery.trim().length > 0;
                      const sectionCount = chapter.sections.length;
                      const chapterOrderText =
                        chapter.order > 0 ? String(chapter.order).padStart(2, '0') : '';
                      const chronoInfo = CHRONO_META[chapter.slug];
                      const isLatest = chronoInfo?.isLatest || chapter.slug === 'chapter-11';
                      const displayTitle = getDisplayTitle(chapter);

                      if (viewMode === 'compact') {
                        // COMPACT SINGLE-LINE ROW
                        return (
                          <article
                            key={chapter.slug}
                            className={`border rounded-xl transition-all duration-150 group shadow-2xs hover:shadow-xs overflow-hidden ${
                              isLatest
                                ? 'bg-[#FAFCF9] border-emerald-500/50 hover:border-emerald-600'
                                : 'bg-[#FFFFFF] border-[#E0D9CB] hover:border-[#10251F]'
                            }`}
                          >
                            <div className="p-3 sm:px-4 sm:py-3 flex items-center justify-between gap-3 min-w-0">
                              {/* Left: Expand Toggle + Number / Tag + Title */}
                              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                <button
                                  onClick={() => toggleChapter(chapter.slug)}
                                  className="p-1 rounded text-[#5A7365] hover:text-[#10251F] hover:bg-[#F5F2EB] transition-colors shrink-0 cursor-pointer"
                                  aria-label={
                                    isExpanded ? 'Collapse sub-lessons' : 'Expand sub-lessons'
                                  }
                                  title={
                                    isExpanded
                                      ? 'Collapse sub-lessons'
                                      : `Expand ${sectionCount} sub-lessons`
                                  }
                                >
                                  {isExpanded ? (
                                    <ChevronDown className="w-4 h-4 text-[#10251F]" />
                                  ) : (
                                    <ChevronRight className="w-4 h-4 text-[#5A7365]" />
                                  )}
                                </button>

                                {chronoInfo ? (
                                  <span
                                    className={`font-mono text-[10px] px-2 py-0.5 rounded border shrink-0 ${chronoInfo.badgeStyle}`}
                                  >
                                    {chronoInfo.tag}
                                  </span>
                                ) : chapterOrderText ? (
                                  <span className="font-mono text-[11px] font-bold text-[#9E722C] bg-[#FAF9F4] border border-[#E0D9CB] px-2 py-0.5 rounded shrink-0">
                                    Ch. {chapterOrderText}
                                  </span>
                                ) : null}

                                <Link
                                  href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                                  className={`font-serif font-bold text-sm sm:text-base transition-colors truncate min-w-0 flex-1 ${
                                    isLatest
                                      ? 'text-[#0E382B] hover:text-emerald-700'
                                      : 'text-[#10251F] hover:text-[#1B4D3C]'
                                  }`}
                                >
                                  {displayTitle}
                                </Link>

                                {isLatest && (
                                  <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.2 rounded bg-emerald-100 text-emerald-900 text-[10px] font-mono font-bold shrink-0">
                                    NEW
                                  </span>
                                )}
                              </div>

                              {/* Right: Quick Stats + Direct Read Button */}
                              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                                <span className="hidden md:inline font-mono text-xs text-[#5A7365]">
                                  {sectionCount} {sectionCount === 1 ? 'lesson' : 'lessons'} · ~
                                  {chapter.readingMinutes}m
                                </span>

                                <Link
                                  href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                                  className={`px-3 py-1.5 text-xs font-mono font-semibold text-[#FAF8F3] rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1 cursor-pointer shrink-0 ${
                                    isLatest
                                      ? 'bg-emerald-800 hover:bg-emerald-900'
                                      : 'bg-[#10251F] hover:bg-[#1B4D3C]'
                                  }`}
                                >
                                  <span>Read</span>
                                  <span>→</span>
                                </Link>
                              </div>
                            </div>

                            {/* Indented Sub-Lessons Ledger (When Toggled) */}
                            {isExpanded && chapter.sections.length > 0 && (
                              <div className="border-t border-[#E8E2D5] bg-[#FAF9F4] px-4 py-2.5 sm:px-6 space-y-1">
                                <div className="text-[10px] font-mono uppercase tracking-wider text-[#5A7365] font-semibold pb-1">
                                  Sub-Lessons ({sectionCount}):
                                </div>
                                <div className="space-y-1 pl-2 sm:pl-3 border-l-2 border-[#10251F]">
                                  {chapter.sections.map((sec, sIdx) => (
                                    <Link
                                      key={sec.id}
                                      href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                      className="flex items-center justify-between p-1.5 rounded hover:bg-[#FFFFFF] hover:shadow-2xs text-xs transition-colors group/sec gap-2"
                                    >
                                      <div className="flex items-center gap-2 min-w-0 truncate">
                                        <span className="font-mono text-[11px] font-semibold text-[#9E722C] shrink-0">
                                          §{' '}
                                          {chapter.order > 0
                                            ? `${chapter.order}.${sIdx + 1}`
                                            : `${sIdx + 1}`}
                                        </span>
                                        <span className="font-sans text-[#2B3B33] group-hover/sec:text-[#10251F] font-medium truncate">
                                          {sec.title}
                                        </span>
                                      </div>
                                      <span className="font-mono text-[11px] text-[#5A7365] group-hover/sec:text-[#10251F] shrink-0 font-medium">
                                        jump ›
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </article>
                        );
                      }

                      // DETAILED SYLLABUS MODE (Rich Curated Card)
                      return (
                        <article
                          key={chapter.slug}
                          className="bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] rounded-xl p-4 sm:p-5 transition-all duration-200 group shadow-2xs hover:shadow-xs space-y-3"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                              <button
                                onClick={() => toggleChapter(chapter.slug)}
                                className="mt-0.5 text-[#5A7365] hover:text-[#10251F] p-1 rounded-md shrink-0 focus:outline-none cursor-pointer hover:bg-[#F5F2EB] transition-colors"
                                aria-label={
                                  isExpanded ? 'Collapse sub-lessons' : 'Expand sub-lessons'
                                }
                              >
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </button>

                              <div className="space-y-1.5 flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#5A7365]">
                                  <span className="font-bold text-[#10251F]">
                                    {chapter.category}
                                  </span>
                                  <span>•</span>
                                  <span className="font-semibold text-[#9E722C]">
                                    {sectionCount} {sectionCount === 1 ? 'Lesson' : 'Lessons'}
                                  </span>
                                  <span>•</span>
                                  <span>~{chapter.readingMinutes}m read</span>
                                  <span>•</span>
                                  <span>~{(chapter.wordCount / 1000).toFixed(1)}k words</span>
                                </div>

                                <Link
                                  href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                                  className="group/title block"
                                >
                                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#10251F] group-hover/title:text-[#1B4D3C] transition-colors leading-snug">
                                    {displayTitle}
                                  </h3>
                                </Link>

                                {chapter.description && (
                                  <p className="text-xs sm:text-sm font-sans text-[#2B3B33] leading-relaxed max-w-4xl pt-0.5">
                                    {chapter.description}
                                  </p>
                                )}

                                {/* Direct Section Selector Buttons in Detailed View */}
                                {sectionCount > 0 && (
                                  <div className="pt-2 border-t border-[#E8E2D5]/70 space-y-1.5">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                      <span className="font-semibold text-[#10251F] text-[11px] flex items-center gap-1.5">
                                        <span className="text-[#9E722C] font-bold">§</span>
                                        <span>Select Section ({sectionCount}):</span>
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => toggleChapter(chapter.slug)}
                                        className="text-[10px] text-[#5A7365] hover:text-[#10251F] cursor-pointer"
                                      >
                                        {isExpanded ? 'Hide full curriculum ▲' : 'View full curriculum ▼'}
                                      </button>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                      {chapter.sections.map((sec, sIdx) => {
                                        const label = formatSectionButtonLabel(sec.title);
                                        return (
                                          <Link
                                            key={sec.id}
                                            href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                            title={`Jump directly to Section ${sIdx + 1}: ${sec.title}`}
                                            className="group/secbtn inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-[#FAF9F4] hover:bg-[#10251F] text-[#2B3B33] hover:text-[#FAF8F3] border border-[#E0D9CB] hover:border-[#10251F] transition-all duration-150 shadow-2xs active:scale-95 cursor-pointer"
                                          >
                                            <span className="font-mono text-[10px] font-bold text-[#9E722C] group-hover/secbtn:text-[#E8C582] shrink-0">
                                              § {sIdx + 1}
                                            </span>
                                            <span className="font-sans font-medium text-[11px] leading-tight truncate max-w-[160px] sm:max-w-[210px]">
                                              {label}
                                            </span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 sm:self-start pl-7 sm:pl-0 shrink-0">
                              <Link
                                href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                                className="px-3.5 py-1.5 text-xs font-mono font-semibold text-[#FAF8F3] bg-[#10251F] hover:bg-[#1B4D3C] rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                              >
                                <span>Read Chapter</span>
                                <span>→</span>
                              </Link>
                            </div>
                          </div>

                          {isExpanded && chapter.sections.length > 0 && (
                            <div className="ml-2 sm:ml-4 pl-4 sm:pl-6 border-l-2 border-[#10251F] pt-2 space-y-2">
                              <div className="text-[11px] font-mono uppercase tracking-wider text-[#5A7365] font-semibold">
                                Chapter Curriculum ({chapter.sections.length} Sub-Lessons):
                              </div>

                              <div className="grid grid-cols-1 gap-1.5">
                                {chapter.sections.map((sec, sIdx) => (
                                  <div
                                    key={sec.id}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded-lg bg-[#F7F5EE] border border-[#E8E2D5] hover:bg-[#FFFFFF] hover:border-[#10251F] transition-all group/sec"
                                  >
                                    <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
                                      <span className="text-xs font-mono font-bold text-[#9E722C] shrink-0">
                                        §{' '}
                                        {chapter.order > 0
                                          ? `${chapter.order}.${sIdx + 1}`
                                          : `${sIdx + 1}`}
                                      </span>
                                      <Link
                                        href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                        className="text-xs sm:text-sm font-sans font-medium text-[#112019] group-hover/sec:text-[#1B4D3C] transition-colors truncate"
                                      >
                                        {sec.title}
                                      </Link>
                                    </div>

                                    <div className="flex items-center gap-2.5 shrink-0 pl-6 sm:pl-0">
                                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#FFFFFF] text-[#5A7365] border border-[#E0D9CB]">
                                        Master Unit
                                      </span>
                                      <Link
                                        href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                        className="text-xs font-mono text-[#5A7365] group-hover/sec:text-[#10251F] transition-colors inline-flex items-center gap-0.5"
                                      >
                                        <span>view</span>
                                        <span>›</span>
                                      </Link>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
