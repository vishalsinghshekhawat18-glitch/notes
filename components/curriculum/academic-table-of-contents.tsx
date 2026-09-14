'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

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
  
  // Collect all topic IDs for expansion state
  const allTopicIds = useMemo(() => {
    return partGroups.flatMap((g) => g.topics.map((t) => t.id));
  }, [partGroups]);

  // Default: all topics expanded so lessons are immediately visible in book TOC
  const [expandedTopicIds, setExpandedTopicIds] = useState<Set<string>>(() => new Set(allTopicIds));

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
    if (!q) return partGroups;

    return partGroups
      .map((group) => {
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

        return {
          ...group,
          topics: matchingTopics,
        };
      })
      .filter((group) => group.topics.length > 0);
  }, [partGroups, searchQuery]);

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
    <div className="space-y-8">
      {/* Subject Academic Header */}
      <header className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-emerald-900 font-bold uppercase tracking-widest bg-emerald-100/70 px-2.5 py-1 rounded">
            {domainName}
          </span>
          <div className="flex items-center gap-2 text-stone-500">
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

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            {subjectName}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed font-sans">
            {subjectDescription ||
              'Complete canonical academic curriculum organized into structured thematic parts, chapters, and granular sub-lessons.'}
          </p>
        </div>

        {firstTopicSlug && (
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href={`/topics/${firstTopicSlug}/read`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold rounded-xl shadow-xs transition-all hover:shadow-md group"
            >
              <span>▶ Begin Sequential Reading</span>
              <span className="text-emerald-200 text-xs font-normal group-hover:translate-x-0.5 transition-transform">
                (Chapter 1)
              </span>
            </Link>

            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              Read all chapters continuously or jump directly to any sub-lesson below
            </span>
          </div>
        )}
      </header>

      {/* Editorial Table of Contents Bar: Live Search & Expand Controls */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chapters, sub-lessons, or keywords (e.g. § 138, CRR, GDP, Panch Prayag)..."
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
              Found {matchingTopicsCount} of {totalTopics} chapters
            </span>
          )}
          <button
            onClick={expandAll}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-medium text-[11px]"
            title="Show all nested sub-lessons across all chapters"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-medium text-[11px]"
            title="Hide nested sub-lessons and show chapter titles only"
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
                  {group.topics.length} {group.topics.length === 1 ? 'Chapter' : 'Chapters'}
                </span>
              </div>

              {/* Chapters & Sub-Lessons List */}
              <div className="divide-y divide-stone-200 border-b border-stone-200">
                {group.topics.map((topic) => {
                  const isExpanded = expandedTopicIds.has(topic.id) || searchQuery.trim().length > 0;
                  const topicConceptCount = topic.concepts.length;

                  return (
                    <div
                      key={topic.id}
                      className="py-5 hover:bg-stone-50/70 transition-colors rounded-xl px-3 sm:px-4 -mx-3 sm:-mx-4 space-y-3"
                    >
                      {/* Chapter Headline Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          {/* Toggle chevron */}
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className="mt-1 text-stone-400 hover:text-stone-700 transition-colors p-0.5 rounded shrink-0 focus:outline-none"
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
                                Chapter {topic.order < 10 ? `0${topic.order}` : topic.order}
                              </span>
                              <span>•</span>
                              <span className="text-stone-500 font-medium">
                                {topicConceptCount} {topicConceptCount === 1 ? 'Lesson' : 'Lessons'}
                              </span>
                              <span>•</span>
                              <span className="text-stone-400">~{topic.estimatedMinutes}m</span>
                            </div>

                            <Link href={`/topics/${topic.slug}/read`} className="group block">
                              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
                                {topic.title}
                              </h3>
                            </Link>

                            {topic.description && (
                              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-3xl">
                                {topic.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Direct Chapter Action Buttons */}
                        <div className="flex items-center gap-2 sm:self-start pl-7 sm:pl-0 shrink-0">
                          <Link
                            href={`/topics/${topic.slug}`}
                            className="px-3 py-1.5 text-xs font-mono font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors border border-stone-200"
                          >
                            Outline
                          </Link>
                          <Link
                            href={`/topics/${topic.slug}/read`}
                            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1.5"
                          >
                            <span>Read Chapter</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                      {/* Sub-Lessons Granular Directory (Indented Book Hierarchy) */}
                      {isExpanded && topic.concepts.length > 0 && (
                        <div className="ml-7 sm:ml-9 pl-3 sm:pl-5 border-l-2 border-stone-200 pt-1 space-y-2">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold mb-1">
                            Chapter Sub-Lessons ({topic.concepts.length}):
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            {topic.concepts.map((concept, cIdx) => (
                              <div
                                key={concept.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-2 rounded-lg hover:bg-stone-100/80 transition-colors group"
                              >
                                <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
                                  <span className="text-xs font-mono font-semibold text-stone-400 group-hover:text-emerald-800 shrink-0">
                                    § {topic.order}.{cIdx + 1}
                                  </span>
                                  <Link
                                    href={`/concepts/${concept.slug}`}
                                    className="text-xs sm:text-sm font-sans font-medium text-stone-800 group-hover:text-emerald-900 transition-colors truncate"
                                  >
                                    {concept.title}
                                  </Link>
                                </div>

                                <div className="flex items-center gap-2 shrink-0 pl-6 sm:pl-0">
                                  {getDifficultyBadge(concept.difficulty)}
                                  <Link
                                    href={`/concepts/${concept.slug}`}
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
