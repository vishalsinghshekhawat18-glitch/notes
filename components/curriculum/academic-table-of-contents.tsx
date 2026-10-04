'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronRight, BookOpen, Layers } from 'lucide-react';

export interface ConceptItem {
  id: string;
  slug: string;
  title: string;
  shortDefinition?: string | null;
  difficulty: string;
}

export interface TopicItem {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  order: number;
  concepts: ConceptItem[];
  estimatedMinutes: number;
}

export interface PartGroup {
  groupTitle: string;
  groupSubtitle?: string;
  partNumber?: string;
  topics: TopicItem[];
}

interface AcademicTableOfContentsProps {
  subjectName: string;
  subjectSlug: string;
  domainName: string;
  subjectDescription?: string | null;
  partGroups: PartGroup[];
  firstTopicSlug?: string;
}

export function AcademicTableOfContents({
  subjectName,
  subjectSlug,
  domainName,
  subjectDescription,
  partGroups,
  firstTopicSlug,
}: AcademicTableOfContentsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPartIndex, setSelectedPartIndex] = useState<number | 'all'>('all');
  const [viewMode, setViewMode] = useState<'compact' | 'detailed'>('compact');

  // Collect all topic IDs for expansion state
  const allTopicIds = useMemo(() => {
    return partGroups.flatMap((g) => g.topics.map((t) => t.id));
  }, [partGroups]);

  // Collapsed by default to avoid endless vertical scroll!
  const [expandedTopicIds, setExpandedTopicIds] = useState<Set<string>>(() => new Set());

  const totalTopics = useMemo(() => {
    return partGroups.reduce((acc, g) => acc + g.topics.length, 0);
  }, [partGroups]);

  const totalConcepts = useMemo(() => {
    return partGroups.reduce((acc, g) => {
      return acc + g.topics.reduce((tAcc, t) => tAcc + t.concepts.length, 0);
    }, 0);
  }, [partGroups]);

  const totalReadingMinutes = useMemo(() => {
    return totalConcepts * 4;
  }, [totalConcepts]);

  // Toggle individual topic expansion
  const toggleTopic = (topicId: string) => {
    setExpandedTopicIds((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  const expandAll = () => setExpandedTopicIds(new Set(allTopicIds));
  const collapseAll = () => setExpandedTopicIds(new Set());

  // Filter logic
  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return partGroups
      .map((group, idx) => {
        if (selectedPartIndex !== 'all' && selectedPartIndex !== idx && !q) {
          return null;
        }

        if (!q) {
          return group;
        }

        const matchingTopics = group.topics.filter((topic) => {
          const topicMatches =
            topic.title.toLowerCase().includes(q) ||
            (topic.description && topic.description.toLowerCase().includes(q)) ||
            `topic ${topic.order}`.includes(q) ||
            `chapter ${topic.order}`.includes(q);

          const conceptMatches = topic.concepts.some(
            (c) =>
              c.title.toLowerCase().includes(q) ||
              (c.shortDefinition && c.shortDefinition.toLowerCase().includes(q)) ||
              c.id.toLowerCase().includes(q)
          );

          return topicMatches || conceptMatches;
        });

        if (matchingTopics.length === 0) return null;

        return {
          ...group,
          topics: matchingTopics,
        };
      })
      .filter((g): g is PartGroup => g !== null);
  }, [partGroups, searchQuery, selectedPartIndex]);

  const matchingTopicsCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.topics.length, 0);
  }, [filteredGroups]);

  // Helper for difficulty badge
  const getDifficultyBadge = (difficulty: string) => {
    const d = difficulty.toUpperCase();
    if (d === 'BEGINNER' || d === 'EASY') {
      return (
        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
          Core
        </span>
      );
    }
    if (d === 'INTERMEDIATE') {
      return (
        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
          Proficient
        </span>
      );
    }
    return (
      <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
        Advanced
      </span>
    );
  };

  return (
    <div className="space-y-6 font-sans max-w-full overflow-x-clip">
      {/* Subject Academic Header */}
      <header className="bg-stone-50 border border-stone-200 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-emerald-900 font-bold uppercase tracking-widest bg-emerald-100/70 px-2.5 py-1 rounded">
            {domainName}
          </span>
          <div className="flex flex-wrap items-center gap-2 text-stone-500">
            <span className="bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded-md font-medium">
              {partGroups.length} {partGroups.length === 1 ? 'Part' : 'Parts'}
            </span>
            <span>•</span>
            <span className="bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded-md font-medium">
              {totalTopics} Chapters
            </span>
            <span>•</span>
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
              {totalConcepts} Sub-Lessons
            </span>
            <span>•</span>
            <span className="text-stone-600 font-medium">
              ~{totalReadingMinutes} mins total
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            {subjectName}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-4xl leading-relaxed font-sans">
            {subjectDescription ||
              'Complete canonical academic curriculum organized into structured thematic parts, chapters, and granular sub-lessons.'}
          </p>
        </div>

        {firstTopicSlug && (
          <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-stone-200">
            <Link
              href={`/topics/${firstTopicSlug}/read`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-2xs transition-all hover:shadow-xs group cursor-pointer"
            >
              <span>▶ Begin Sequential Reading</span>
              <span className="text-emerald-200 text-xs font-mono font-normal group-hover:translate-x-0.5 transition-transform">
                (Chapter 1)
              </span>
            </Link>

            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              Continuous vertical codex flow · Collapsible syllabus outline
            </span>
          </div>
        )}
      </header>

      {/* Interactive Part Jump Strip (Fast Spatial Orientation) */}
      {partGroups.length > 1 && (
        <nav
          aria-label="Curricular Parts Quick Navigation"
          className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono no-scrollbar"
        >
          <button
            onClick={() => setSelectedPartIndex('all')}
            className={`px-3 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              selectedPartIndex === 'all'
                ? 'bg-stone-900 text-stone-50 border-stone-900 font-semibold shadow-2xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
            }`}
          >
            <span>All Parts</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded ${selectedPartIndex === 'all' ? 'bg-stone-700 text-stone-100' : 'bg-stone-100 text-stone-600'}`}>
              {totalTopics}
            </span>
          </button>

          {partGroups.map((group, idx) => {
            const isSelected = selectedPartIndex === idx;
            const label = group.partNumber || `Part ${idx + 1}`;
            return (
              <button
                key={idx}
                onClick={() => setSelectedPartIndex(idx)}
                title={`${group.groupTitle} (${group.topics.length} chapters)`}
                className={`px-3 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer flex items-center gap-1.5 max-w-[240px] truncate ${
                  isSelected
                    ? 'bg-stone-900 text-stone-50 border-stone-900 font-semibold shadow-2xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="font-semibold">{label}</span>
                <span className="text-[11px] truncate hidden sm:inline text-stone-500 font-sans">
                  {group.groupTitle}
                </span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded shrink-0 ${isSelected ? 'bg-stone-700 text-stone-100' : 'bg-stone-100 text-stone-600'}`}>
                  {group.topics.length}
                </span>
              </button>
            );
          })}
        </nav>
      )}

      {/* Editorial Table of Contents Bar: Live Search & Expand Controls */}
      <div className="bg-white border border-stone-200 rounded-xl p-3 sm:p-4 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search across ${totalTopics} chapters and ${totalConcepts} sub-lessons...`}
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/30 focus:border-emerald-800 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-400 hover:text-stone-600 font-mono cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* View Density Mode & Expand / Collapse Controls */}
        <div className="flex flex-wrap items-center justify-between md:justify-end gap-2 text-xs font-mono shrink-0">
          {searchQuery && (
            <span className="text-stone-500 font-medium mr-1 text-[11px]">
              Found {matchingTopicsCount} of {totalTopics} chapters
            </span>
          )}

          {/* View Mode Switcher */}
          <div className="inline-flex rounded-lg border border-stone-200 p-0.5 bg-stone-50 text-xs">
            <button
              onClick={() => setViewMode('compact')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                viewMode === 'compact'
                  ? 'bg-stone-900 text-stone-50 font-semibold shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Compact book codex index (75% less vertical height)"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Compact</span>
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                viewMode === 'detailed'
                  ? 'bg-stone-900 text-stone-50 font-semibold shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Full curriculum syllabus view with descriptions"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Detailed</span>
            </button>
          </div>

          <div className="h-4 w-px bg-stone-200 hidden sm:block mx-1" />

          <button
            onClick={expandAll}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-medium text-xs cursor-pointer border border-stone-200"
            title="Show all nested sub-lessons across all chapters"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-medium text-xs cursor-pointer border border-stone-200"
            title="Hide nested sub-lessons and show chapter titles only"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Filter Reset Banner (When Part is filtered) */}
      {selectedPartIndex !== 'all' && !searchQuery && (
        <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-stone-100 border border-stone-200 text-xs font-mono text-stone-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900">
              Showing: {partGroups[selectedPartIndex]?.partNumber || `Part ${selectedPartIndex + 1}`} ({partGroups[selectedPartIndex]?.topics.length} chapters)
            </span>
          </div>
          <button
            onClick={() => setSelectedPartIndex('all')}
            className="text-emerald-800 hover:text-emerald-900 font-semibold hover:underline cursor-pointer"
          >
            Show All Parts ({totalTopics} Chapters) →
          </button>
        </div>
      )}

      {/* Main Table of Contents Body */}
      {filteredGroups.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center space-y-3">
          <p className="text-stone-500 text-sm font-sans">
            No curriculum chapters or sub-lessons match &ldquo;<span className="font-semibold text-stone-800">{searchQuery}</span>&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedPartIndex('all');
            }}
            className="text-xs font-mono text-emerald-800 hover:underline font-semibold cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredGroups.map((group, groupIdx) => (
            <section key={groupIdx} className="space-y-3">
              {/* Part Section Heading */}
              <div className="border-b-2 border-stone-900 pb-2 flex flex-wrap items-baseline justify-between gap-2">
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {group.partNumber && (
                      <span className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        {group.partNumber}
                      </span>
                    )}
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 tracking-tight truncate">
                      {group.groupTitle}
                    </h2>
                  </div>
                  {group.groupSubtitle && (
                    <p className="text-xs text-stone-500 font-sans italic truncate">
                      {group.groupSubtitle}
                    </p>
                  )}
                </div>
                <span className="text-xs font-mono text-stone-500 shrink-0 font-medium">
                  {group.topics.length} {group.topics.length === 1 ? 'Chapter' : 'Chapters'}
                </span>
              </div>

              {/* Chapters List */}
              <div className="space-y-2">
                {group.topics.map((topic) => {
                  const isExpanded = expandedTopicIds.has(topic.id) || searchQuery.trim().length > 0;
                  const topicConceptCount = topic.concepts.length;
                  const chapterOrderText = topic.order < 10 ? `0${topic.order}` : topic.order;

                  if (viewMode === 'compact') {
                    // =========================================================
                    // COMPACT BOOK CODEX MODE (80% Height Reduction)
                    // High-density, single-line rows with indented sub-lessons
                    // =========================================================
                    return (
                      <article
                        key={topic.id}
                        className="bg-white border border-stone-200 hover:border-stone-900 rounded-xl transition-all duration-150 group shadow-2xs hover:shadow-xs overflow-hidden"
                      >
                        {/* Compact Chapter Row */}
                        <div className="p-3 sm:px-4 sm:py-3 flex items-center justify-between gap-3 min-w-0">
                          {/* Left: Expand Toggle + Chapter Numeral + Title */}
                          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            <button
                              onClick={() => toggleTopic(topic.id)}
                              className="p-1 rounded text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors shrink-0 cursor-pointer"
                              aria-label={isExpanded ? 'Collapse sub-lessons' : 'Expand sub-lessons'}
                              title={isExpanded ? 'Collapse sub-lessons' : `Expand ${topicConceptCount} sub-lessons`}
                            >
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4 text-stone-900" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-stone-500" />
                              )}
                            </button>

                            <span className="font-mono text-[11px] font-bold text-stone-600 bg-stone-50 border border-stone-200 px-2 py-0.5 rounded shrink-0">
                              Ch. {chapterOrderText}
                            </span>

                            <Link
                              href={`/topics/${topic.slug}/read`}
                              className="font-serif font-bold text-sm sm:text-base text-stone-900 hover:text-emerald-900 transition-colors truncate min-w-0 flex-1"
                            >
                              {topic.title}
                            </Link>
                          </div>

                          {/* Right: Quick Stats + Direct Read Button */}
                          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <span className="hidden md:inline font-mono text-xs text-stone-500">
                              {topicConceptCount} {topicConceptCount === 1 ? 'lesson' : 'lessons'} · ~{topic.estimatedMinutes}m
                            </span>

                            <Link
                              href={`/topics/${topic.slug}/read`}
                              className="px-3 py-1.5 text-xs font-mono font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1 cursor-pointer shrink-0"
                            >
                              <span>Read</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>

                        {/* Indented Sub-Lessons Ledger (When Toggled) */}
                        {isExpanded && topic.concepts.length > 0 && (
                          <div className="border-t border-stone-200 bg-stone-50/70 px-4 py-2.5 sm:px-6 space-y-1">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold pb-1">
                              Sub-Lessons ({topicConceptCount}):
                            </div>
                            <div className="space-y-1 pl-2 sm:pl-3 border-l-2 border-emerald-800">
                              {topic.concepts.map((concept, cIdx) => (
                                <Link
                                  key={concept.id}
                                  href={`/concepts/${concept.slug}`}
                                  className="flex items-center justify-between p-1.5 rounded hover:bg-white hover:shadow-2xs text-xs transition-colors group/sec gap-2"
                                >
                                  <div className="flex items-center gap-2 min-w-0 truncate">
                                    <span className="font-mono text-[11px] font-semibold text-emerald-800 shrink-0">
                                      § {topic.order}.{cIdx + 1}
                                    </span>
                                    <span className="font-sans text-stone-700 group-hover/sec:text-stone-900 font-medium truncate">
                                      {concept.title}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    {getDifficultyBadge(concept.difficulty)}
                                    <span className="font-mono text-[11px] text-stone-400 group-hover/sec:text-stone-900 shrink-0 font-medium">
                                      view ›
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  }

                  // =========================================================
                  // DETAILED SYLLABUS MODE (Full Academic Cards)
                  // =========================================================
                  return (
                    <article
                      key={topic.id}
                      className="bg-white border border-stone-200 hover:border-stone-900 rounded-xl p-4 sm:p-5 transition-all duration-200 group shadow-2xs hover:shadow-xs space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className="mt-0.5 text-stone-400 hover:text-stone-800 p-1 rounded-md shrink-0 focus:outline-none cursor-pointer hover:bg-stone-100 transition-colors"
                            aria-label={isExpanded ? 'Collapse sub-lessons' : 'Expand sub-lessons'}
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-stone-900" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-stone-500" />
                            )}
                          </button>

                          <div className="space-y-1.5 flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500">
                              <span className="font-bold text-stone-700">
                                Chapter {chapterOrderText}
                              </span>
                              <span>•</span>
                              <span className="font-semibold text-emerald-800">
                                {topicConceptCount} {topicConceptCount === 1 ? 'Lesson' : 'Lessons'}
                              </span>
                              <span>•</span>
                              <span>~{topic.estimatedMinutes}m</span>
                            </div>

                            <Link href={`/topics/${topic.slug}/read`} className="group/title block">
                              <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 group-hover/title:text-emerald-900 transition-colors leading-snug">
                                {topic.title}
                              </h3>
                            </Link>

                            {topic.description && (
                              <p className="text-xs sm:text-sm font-sans text-stone-600 leading-relaxed max-w-3xl pt-0.5">
                                {topic.description}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 sm:self-start pl-7 sm:pl-0 shrink-0">
                          <Link
                            href={`/topics/${topic.slug}`}
                            className="px-3 py-1.5 text-xs font-mono font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors border border-stone-200"
                          >
                            Outline
                          </Link>
                          <Link
                            href={`/topics/${topic.slug}/read`}
                            className="px-3 py-1.5 text-xs font-mono font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Read Chapter</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                      {isExpanded && topic.concepts.length > 0 && (
                        <div className="ml-2 sm:ml-4 pl-4 sm:pl-6 border-l-2 border-emerald-800 pt-2 space-y-2">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                            Chapter Curriculum ({topicConceptCount} Sub-Lessons):
                          </div>

                          <div className="grid grid-cols-1 gap-1.5">
                            {topic.concepts.map((concept, cIdx) => (
                              <div
                                key={concept.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200 hover:bg-white hover:border-stone-900 transition-all group/sec"
                              >
                                <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
                                  <span className="text-xs font-mono font-bold text-emerald-800 shrink-0">
                                    § {topic.order}.{cIdx + 1}
                                  </span>
                                  <Link
                                    href={`/concepts/${concept.slug}`}
                                    className="text-xs sm:text-sm font-sans font-medium text-stone-800 group-hover/sec:text-emerald-900 transition-colors truncate"
                                  >
                                    {concept.title}
                                  </Link>
                                </div>

                                <div className="flex items-center gap-2.5 shrink-0 pl-6 sm:pl-0">
                                  {getDifficultyBadge(concept.difficulty)}
                                  <Link
                                    href={`/concepts/${concept.slug}`}
                                    className="text-xs font-mono text-stone-400 group-hover/sec:text-stone-900 transition-colors inline-flex items-center gap-0.5"
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
