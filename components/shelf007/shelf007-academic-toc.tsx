'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Shelf007PartGroup, Shelf007SubjectMeta } from '@/lib/shelf007/service';
import { BookOpen, Search, X, ChevronRight, ChevronDown } from 'lucide-react';

interface Shelf007AcademicTOCProps {
  subject: Shelf007SubjectMeta;
  partGroups: Shelf007PartGroup[];
  firstReadSlug: string;
}

export function Shelf007AcademicTOC({
  subject,
  partGroups,
  firstReadSlug,
}: Shelf007AcademicTOCProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all chapter slugs for expand/collapse state
  const allChapterSlugs = useMemo(() => {
    return partGroups.flatMap((g) => g.chapters.map((c) => c.slug));
  }, [partGroups]);

  // Default: all chapters expanded so all sub-lessons are immediately visible
  const [expandedChapterSlugs, setExpandedChapterSlugs] = useState<Set<string>>(
    () => new Set(allChapterSlugs)
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

  // Filter groups and chapters based on search query
  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return partGroups;

    return partGroups
      .map((group) => {
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

        return {
          ...group,
          chapters: matchingChapters,
        };
      })
      .filter((group) => group.chapters.length > 0);
  }, [partGroups, searchQuery]);

  const matchingChaptersCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.chapters.length, 0);
  }, [filteredGroups]);

  return (
    <div className="space-y-8 font-sans">
      {/* Subject Academic Header (Identical to other shelves) */}
      <header className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-emerald-900 font-bold uppercase tracking-widest bg-emerald-100/70 px-2.5 py-1 rounded">
              SHELF 007 · SOVEREIGN MASTER
            </span>
            <span className="bg-[#ede8dc] text-[#143227] px-2 py-0.5 rounded font-bold border border-[#d6cebe]">
              {subject.code}
            </span>
          </div>

          <div className="flex items-center gap-2 text-stone-500">
            <span className="bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded-md font-medium">
              {partGroups.length} {partGroups.length === 1 ? 'Part' : 'Parts'}
            </span>
            <span>•</span>
            <span className="bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded-md font-medium">
              {totalChapters} Chapters
            </span>
            <span>•</span>
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
              {totalSections} Sub-Lessons
            </span>
            <span>•</span>
            <span className="text-stone-600 font-medium">
              ~{totalReadingMinutes} mins total (~{(subject.totalWords / 1000).toFixed(0)}k words)
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            {subject.name}
          </h1>
          <div className="text-xs sm:text-sm font-mono text-stone-500">
            {subject.authors}
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed font-sans">
            {subject.description}
          </p>
        </div>

        {firstReadSlug && (
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href={`/shelf-007/${subject.slug}/${firstReadSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold rounded-xl shadow-xs transition-all hover:shadow-md group"
            >
              <span>▶ Begin Sequential Reading</span>
              <span className="text-emerald-200 text-xs font-normal group-hover:translate-x-0.5 transition-transform">
                (Start from Beginning)
              </span>
            </Link>

            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              Read all chapters continuously with collapsible sidebar, font-size control, and jump outlines
            </span>
          </div>
        )}
      </header>

      {/* Editorial Table of Contents Bar: Live Search & Expand Controls */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chapters, sub-lessons, or keywords (e.g. GDP, Repo, NPAs, Basel III, GST, FRBM)..."
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/30 focus:border-emerald-800 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-400 hover:text-stone-600 font-mono"
            >
              ✕
            </button>
          )}
        </div>

        {/* Expand / Collapse Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-2 text-xs font-mono shrink-0">
          {searchQuery && (
            <span className="text-stone-500 font-medium mr-2">
              Found {matchingChaptersCount} of {totalChapters} chapters
            </span>
          )}

          <button
            onClick={expandAll}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-medium text-[11px]"
            title="Expand all nested sub-lessons"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-medium text-[11px]"
            title="Collapse nested sub-lessons and show chapter titles only"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Main Table of Contents Body */}
      {filteredGroups.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-3">
          <p className="text-stone-500 text-sm font-sans">
            No curriculum chapters or sub-lessons match &ldquo;<span className="font-semibold text-stone-800">{searchQuery}</span>&rdquo;.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs font-mono text-emerald-800 hover:underline font-semibold"
          >
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredGroups.map((group, groupIdx) => (
            <section key={groupIdx} className="space-y-6">
              {/* Part / Module Header */}
              <div className="border-b-2 border-stone-900 pb-3 flex flex-wrap items-baseline justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    {group.partNumber && (
                      <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {group.partNumber}
                      </span>
                    )}
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
                      {group.groupTitle}
                    </h2>
                  </div>
                  {group.groupSubtitle && (
                    <p className="text-xs sm:text-sm text-stone-600 font-sans italic">
                      {group.groupSubtitle}
                    </p>
                  )}
                </div>
                <span className="text-xs font-mono text-stone-500 shrink-0">
                  {group.chapters.length} {group.chapters.length === 1 ? 'Chapter' : 'Chapters'}
                </span>
              </div>

              {/* Chapters & Sub-Lessons List */}
              <div className="divide-y divide-stone-200 border-b border-stone-200">
                {group.chapters.map((chapter) => {
                  const isExpanded = expandedChapterSlugs.has(chapter.slug) || searchQuery.trim().length > 0;
                  const sectionCount = chapter.sections.length;

                  return (
                    <div
                      key={chapter.slug}
                      className="py-5 hover:bg-stone-50/70 transition-colors rounded-xl px-3 sm:px-4 -mx-3 sm:-mx-4 space-y-3"
                    >
                      {/* Chapter Headline Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          {/* Toggle chevron */}
                          <button
                            onClick={() => toggleChapter(chapter.slug)}
                            className="mt-1 text-stone-400 hover:text-stone-700 transition-colors p-0.5 rounded shrink-0 focus:outline-none cursor-pointer"
                            aria-label={isExpanded ? 'Collapse sub-lessons' : 'Expand sub-lessons'}
                          >
                            <svg
                              className={`w-4 h-4 transform transition-transform ${
                                isExpanded ? 'rotate-90' : 'rotate-0'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>

                          <div className="space-y-1.5 flex-1">
                            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                              <span className="font-bold text-stone-500">
                                {chapter.category}
                              </span>
                              <span>•</span>
                              <span className="text-stone-500 font-medium">
                                {sectionCount} {sectionCount === 1 ? 'Lesson' : 'Lessons'}
                              </span>
                              <span>•</span>
                              <span className="text-stone-400">~{chapter.readingMinutes}m read</span>
                              <span>•</span>
                              <span className="text-stone-400">~{(chapter.wordCount / 1000).toFixed(1)}k words</span>
                            </div>

                            <Link
                              href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                              className="group block"
                            >
                              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
                                {chapter.title}
                              </h3>
                            </Link>

                            {chapter.description && (
                              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-3xl">
                                {chapter.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Direct Chapter Action Buttons */}
                        <div className="flex items-center gap-2 sm:self-start pl-7 sm:pl-0 shrink-0">
                          <Link
                            href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1.5"
                          >
                            <span>Read Chapter</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                      {/* Sub-Lessons Granular Directory (Indented Book Hierarchy) */}
                      {isExpanded && chapter.sections.length > 0 && (
                        <div className="ml-7 sm:ml-9 pl-3 sm:pl-5 border-l-2 border-stone-200 pt-1 space-y-2">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold mb-1">
                            Chapter Sub-Lessons ({chapter.sections.length}):
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            {chapter.sections.map((sec, sIdx) => (
                              <div
                                key={sec.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-2 rounded-lg hover:bg-stone-100/80 transition-colors group"
                              >
                                <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
                                  <span className="text-xs font-mono font-semibold text-stone-400 group-hover:text-emerald-800 shrink-0">
                                    § {chapter.order > 0 ? `${chapter.order}.${sIdx + 1}` : `${sIdx + 1}`}
                                  </span>
                                  <Link
                                    href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                    className="text-xs sm:text-sm font-sans font-medium text-stone-800 group-hover:text-emerald-900 transition-colors truncate"
                                  >
                                    {sec.title}
                                  </Link>
                                </div>

                                <div className="flex items-center gap-2 shrink-0 pl-6 sm:pl-0">
                                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    Master
                                  </span>
                                  <Link
                                    href={`/shelf-007/${subject.slug}/${chapter.slug}#${sec.id}`}
                                    className="text-[11px] font-mono text-stone-400 group-hover:text-emerald-800 transition-colors inline-flex items-center gap-0.5"
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
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
