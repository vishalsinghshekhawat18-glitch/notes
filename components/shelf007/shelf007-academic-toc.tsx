'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Shelf007PartGroup, Shelf007SubjectMeta } from '@/lib/shelf007/service';
import { Search } from 'lucide-react';

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
    <div className="space-y-6 font-sans">
      {/* 1. Subject Academic Proscenium Header (Noble Parchment Folio Plate) */}
      <header className="bg-[#FFFFFF] border border-[#E0D9CB] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 relative overflow-hidden">
        {/* Subtle Ambient Watermark */}
        <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#10251F]/5 blur-3xl" />

        {/* Top Register Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-[#E8E2D5] pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px] tracking-wider">
              SHELF 007
            </span>
            <span className="font-bold text-[#9E722C] text-xs">
              {subject.code}
            </span>
            <span className="text-[#5A7365] hidden sm:inline text-xs">
              • {subject.badge}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#5A7365]">
            <span className="font-medium">
              {partGroups.length} {partGroups.length === 1 ? 'Curricular Part' : 'Curricular Parts'}
            </span>
            <span>•</span>
            <span className="font-semibold text-[#10251F]">
              {totalChapters} Chapters
            </span>
            <span>•</span>
            <span className="font-semibold text-[#9E722C]">
              {totalSections} Sub-Lessons
            </span>
            <span>•</span>
            <span>
              ~{totalReadingMinutes}m (~{(subject.totalWords / 1000).toFixed(0)}k words)
            </span>
          </div>
        </div>

        {/* Title, Authority & Synopsis */}
        <div className="space-y-2.5">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#10251F] tracking-tight leading-tight">
            {subject.name}
          </h1>

          <div className="text-xs font-mono text-[#5A7365] leading-relaxed">
            <span className="font-semibold text-[#10251F]">Canonical Primary Sources: </span>
            {subject.authors}
          </div>

          <p className="text-xs sm:text-sm text-[#2B3B33] max-w-4xl leading-relaxed font-serif">
            {subject.description}
          </p>
        </div>

        {/* Primary Sequential Reading Action */}
        {firstReadSlug && (
          <div className="flex flex-wrap items-center gap-3 border-t border-[#E8E2D5] pt-4">
            <Link
              href={`/shelf-007/${subject.slug}/${firstReadSlug}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] text-xs sm:text-sm font-serif font-semibold rounded-lg shadow-2xs transition-all hover:shadow-xs group cursor-pointer"
            >
              <span>▶ Begin Sequential Reading</span>
              <span className="text-[#C59B4B] text-xs font-mono font-normal group-hover:translate-x-0.5 transition-transform">
                (Start from Beginning)
              </span>
            </Link>

            <span className="text-xs text-[#5A7365] font-mono hidden md:inline">
              Continuous reading mode with collapsible syllabus drawer, dynamic font scaling & section jump outline
            </span>
          </div>
        )}
      </header>

      {/* 2. Editorial Search & Curricular Controls Bar */}
      <div className="bg-[#FFFFFF] border border-[#E0D9CB] rounded-xl p-3 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7365]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search across ${totalChapters} chapters, ${totalSections} sub-lessons, or keywords...`}
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

        {/* Expand / Collapse Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-2 text-xs font-mono shrink-0">
          {searchQuery && (
            <span className="text-[#5A7365] font-medium mr-2">
              Found {matchingChaptersCount} of {totalChapters} chapters
            </span>
          )}

          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-lg bg-[#F5F2EB] hover:bg-[#EAE4D7] text-[#10251F] transition-colors font-medium text-xs cursor-pointer border border-[#E0D9CB]"
            title="Expand all nested sub-lessons"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-lg bg-[#F5F2EB] hover:bg-[#EAE4D7] text-[#10251F] transition-colors font-medium text-xs cursor-pointer border border-[#E0D9CB]"
            title="Collapse nested sub-lessons and show chapter titles only"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* 3. Main Curriculum Body */}
      {filteredGroups.length === 0 ? (
        <div className="bg-[#FFFFFF] border border-[#E0D9CB] rounded-2xl p-8 text-center space-y-3">
          <p className="text-[#5A7365] text-sm font-sans">
            No curriculum chapters or sub-lessons match &ldquo;<span className="font-semibold text-[#10251F]">{searchQuery}</span>&rdquo;.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs font-mono text-[#10251F] hover:underline font-semibold cursor-pointer"
          >
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredGroups.map((group, groupIdx) => (
            <section key={groupIdx} className="space-y-4">
              {/* Part / Module Section Heading */}
              <div className="border-b-2 border-[#10251F] pb-2.5 flex flex-wrap items-baseline justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    {group.partNumber && (
                      <span className="text-[10px] font-mono font-bold text-[#10251F] uppercase tracking-wider bg-[#F5F2EB] px-2 py-0.5 rounded border border-[#E0D9CB]">
                        {group.partNumber}
                      </span>
                    )}
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#10251F] tracking-tight">
                      {group.groupTitle}
                    </h2>
                  </div>
                  {group.groupSubtitle && (
                    <p className="text-xs text-[#5A7365] font-sans italic">
                      {group.groupSubtitle}
                    </p>
                  )}
                </div>
                <span className="text-xs font-mono text-[#5A7365] shrink-0 font-medium">
                  {group.chapters.length} {group.chapters.length === 1 ? 'Chapter' : 'Chapters'}
                </span>
              </div>

              {/* Chapters & Sub-Lessons List */}
              <div className="space-y-3">
                {group.chapters.map((chapter) => {
                  const isExpanded = expandedChapterSlugs.has(chapter.slug) || searchQuery.trim().length > 0;
                  const sectionCount = chapter.sections.length;

                  return (
                    <article
                      key={chapter.slug}
                      className="bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] rounded-xl p-4 sm:p-5 transition-all duration-200 group shadow-2xs hover:shadow-xs space-y-3"
                    >
                      {/* Chapter Headline Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          {/* Toggle chevron */}
                          <button
                            onClick={() => toggleChapter(chapter.slug)}
                            className="mt-0.5 text-[#5A7365] hover:text-[#10251F] p-1 rounded-md shrink-0 focus:outline-none cursor-pointer hover:bg-[#F5F2EB] transition-colors"
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

                          <div className="space-y-1.5 flex-1 min-w-0">
                            {/* Breadcrumb Locator & Timing Strip */}
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

                            {/* Commanding Serif Chapter Title */}
                            <Link
                              href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                              className="group/title block"
                            >
                              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#10251F] group-hover/title:text-[#1B4D3C] transition-colors leading-snug">
                                {chapter.title}
                              </h3>
                            </Link>

                            {/* Substantive Description */}
                            {chapter.description && (
                              <p className="text-xs sm:text-sm font-sans text-[#2B3B33] leading-relaxed max-w-4xl pt-0.5">
                                {chapter.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Direct Chapter Read Action */}
                        <div className="flex items-center gap-2 sm:self-start pl-7 sm:pl-0 shrink-0">
                          <Link
                            href={`/shelf-007/${subject.slug}/${chapter.slug}`}
                            className="px-3 py-1.5 text-xs font-mono font-semibold text-[#FAF8F3] bg-[#10251F] hover:bg-[#1B4D3C] rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Read Chapter</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                      {/* Sub-Lessons Granular Breakdown (When Expanded) */}
                      {isExpanded && chapter.sections.length > 0 && (
                        <div className="ml-2 sm:ml-4 pl-4 sm:pl-6 border-l-2 border-[#10251F] pt-2 space-y-2.5">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[#5A7365] font-semibold">
                            Chapter Curriculum ({chapter.sections.length} Sub-Lessons):
                          </div>

                          <div className="grid grid-cols-1 gap-1.5">
                            {chapter.sections.map((sec, sIdx) => (
                              <div
                                key={sec.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-[#F7F5EE] border border-[#E8E2D5] hover:bg-[#FFFFFF] hover:border-[#10251F] transition-all group/sec"
                              >
                                <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
                                  <span className="text-xs font-mono font-bold text-[#9E722C] shrink-0">
                                    § {chapter.order > 0 ? `${chapter.order}.${sIdx + 1}` : `${sIdx + 1}`}
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
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
