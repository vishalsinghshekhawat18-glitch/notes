'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  Search,
  X,
  BookOpen,
  ArrowLeft,
  Layers,
} from 'lucide-react';

export interface SidebarConcept {
  id: string;
  slug: string;
  title: string;
  difficulty?: string;
  order?: number;
}

export interface SidebarTopic {
  id: string;
  slug: string;
  title: string;
  order: number;
  concepts: SidebarConcept[];
}

export interface ChapterNavigationSidebarProps {
  subjectName: string;
  subjectSlug: string;
  domainName?: string;
  currentTopicSlug: string;
  topics: SidebarTopic[];
  activeConceptIndex?: number;
  onSelectConcept?: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function ChapterNavigationSidebar({
  subjectName,
  subjectSlug,
  domainName,
  currentTopicSlug,
  topics,
  activeConceptIndex = 0,
  onSelectConcept,
  isOpen,
  onClose,
}: ChapterNavigationSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  // By default, expand the current topic and allow expanding others
  const [expandedTopicSlugs, setExpandedTopicSlugs] = useState<Set<string>>(
    () => new Set([currentTopicSlug])
  );
  const activeItemRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  // Keep current topic expanded when currentTopicSlug changes
  useEffect(() => {
    setExpandedTopicSlugs((prev) => {
      const next = new Set(prev);
      next.add(currentTopicSlug);
      return next;
    });
  }, [currentTopicSlug]);

  // Scroll active item into view within the sidebar when activeConceptIndex changes
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeConceptIndex]);

  const toggleTopic = (topicSlug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedTopicSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(topicSlug)) {
        next.delete(topicSlug);
      } else {
        next.add(topicSlug);
      }
      return next;
    });
  };

  // Filter topics and concepts based on search query
  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return topics;

    return topics
      .map((topic) => {
        const topicMatches =
          topic.title.toLowerCase().includes(q) ||
          `chapter ${topic.order}`.includes(q) ||
          `topic ${topic.order}`.includes(q);

        const matchingConcepts = topic.concepts.filter((concept) =>
          concept.title.toLowerCase().includes(q)
        );

        if (topicMatches) {
          return topic;
        }

        if (matchingConcepts.length > 0) {
          return {
            ...topic,
            concepts: matchingConcepts,
          };
        }

        return null;
      })
      .filter((t): t is SidebarTopic => t !== null);
  }, [topics, searchQuery]);

  // When search query is entered, auto-expand all matching topics
  useEffect(() => {
    if (searchQuery.trim()) {
      setExpandedTopicSlugs(new Set(filteredTopics.map((t) => t.slug)));
    }
  }, [searchQuery, filteredTopics]);

  const totalChapters = topics.length;
  const totalConcepts = useMemo(
    () => topics.reduce((acc, t) => acc + t.concepts.length, 0),
    [topics]
  );

  const sidebarContent = (
    <div className="flex flex-col h-full bg-stone-50/90 text-stone-800 select-none">
      {/* 1. Header: Back Link & Subject Title */}
      <div className="p-4 border-b border-stone-200/80 bg-white/70 backdrop-blur-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <Link
            href={`/subjects/${subjectSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-600 hover:text-emerald-800 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-stone-500 group-hover:text-emerald-800" />
            <span>Subject Curriculum</span>
          </Link>

          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Close navigation sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-semibold">
            {domainName || 'Course Curriculum'}
          </div>
          <h2 className="text-sm font-serif font-bold text-stone-900 line-clamp-1 leading-snug">
            {subjectName}
          </h2>
        </div>

        {/* 2. Quick Search Filter */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Filter chapters or sections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-stone-100/90 hover:bg-stone-100 focus:bg-white border border-stone-200/80 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              aria-label="Clear filter"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 3. Scrollable Tree: Chapters & Sections */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-xs scrollbar-thin scrollbar-thumb-stone-200 hover:scrollbar-thumb-stone-300">
        {filteredTopics.length === 0 ? (
          <div className="text-center py-8 text-stone-400 font-serif italic text-xs">
            No matching chapters or sections found.
          </div>
        ) : (
          filteredTopics.map((topic, tIndex) => {
            const isCurrentTopic = topic.slug === currentTopicSlug;
            const isExpanded = expandedTopicSlugs.has(topic.slug);
            const chapterNumber = topic.order || tIndex + 1;

            return (
              <div
                key={topic.id}
                className={`rounded-xl transition-all ${
                  isCurrentTopic
                    ? 'bg-white border border-emerald-200/90 shadow-xs'
                    : 'hover:bg-stone-100/70 border border-transparent'
                }`}
              >
                {/* Chapter Heading Row */}
                <div className="flex items-center justify-between gap-1 p-2">
                  <Link
                    href={`/topics/${topic.slug}/read`}
                    onClick={() => {
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={`flex-1 flex items-baseline gap-2 text-left font-serif leading-tight group ${
                      isCurrentTopic
                        ? 'font-bold text-stone-900'
                        : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    <span
                      className={`shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isCurrentTopic
                          ? 'bg-emerald-100 text-emerald-900 font-bold'
                          : 'bg-stone-200/70 text-stone-600 group-hover:bg-stone-200'
                      }`}
                    >
                      CH {chapterNumber}
                    </span>
                    <span className="line-clamp-2 text-xs">{topic.title}</span>
                  </Link>

                  {/* Toggle Chevron */}
                  <button
                    onClick={(e) => toggleTopic(topic.slug, e)}
                    className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors shrink-0"
                    title={isExpanded ? 'Collapse sections' : 'Expand sections'}
                    aria-label={`Toggle sections for ${topic.title}`}
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Sub-tree: Sections (Concepts) under this Chapter */}
                {isExpanded && topic.concepts.length > 0 && (
                  <div className="pl-3 pr-2 pb-2 pt-0.5 space-y-0.5 border-l-2 border-stone-200/80 ml-4 mb-1">
                    {topic.concepts.map((concept, cIndex) => {
                      const isActiveConcept =
                        isCurrentTopic && activeConceptIndex === cIndex;

                      if (isCurrentTopic) {
                        return (
                          <button
                            key={concept.id}
                            ref={isActiveConcept ? (activeItemRef as any) : null}
                            onClick={() => {
                              if (onSelectConcept) {
                                onSelectConcept(cIndex);
                              }
                              if (window.innerWidth < 1024) {
                                onClose();
                              }
                            }}
                            className={`w-full text-left flex items-start gap-1.5 py-1 px-2 rounded-md transition-colors ${
                              isActiveConcept
                                ? 'bg-emerald-50 text-emerald-950 font-semibold shadow-2xs border-l-2 border-emerald-700 pl-1.5'
                                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/90'
                            }`}
                          >
                            <span className="shrink-0 text-[10px] font-mono text-stone-400 mt-0.5">
                              {chapterNumber}.{concept.order || cIndex + 1}
                            </span>
                            <span className="line-clamp-2 leading-relaxed text-[11px] font-sans">
                              {concept.title}
                            </span>
                          </button>
                        );
                      }

                      // Link to section in another chapter
                      return (
                        <Link
                          key={concept.id}
                          href={`/topics/${topic.slug}/read#concept-${concept.slug}`}
                          onClick={() => {
                            if (window.innerWidth < 1024) onClose();
                          }}
                          className="w-full text-left flex items-start gap-1.5 py-1 px-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100/90 transition-colors"
                        >
                          <span className="shrink-0 text-[10px] font-mono text-stone-400 mt-0.5">
                            {chapterNumber}.{concept.order || cIndex + 1}
                          </span>
                          <span className="line-clamp-2 leading-relaxed text-[11px] font-sans">
                            {concept.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </nav>

      {/* 4. Footer: Chapter & Section Statistics */}
      <div className="p-3 border-t border-stone-200/80 bg-white/70 backdrop-blur-xs text-[11px] font-mono text-stone-500 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-emerald-800" />
          <span>
            {totalChapters} Chapters · {totalConcepts} Sections
          </span>
        </div>
        <span className="text-[10px] text-stone-400 hidden xl:inline">
          J / K to navigate
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar (lg:flex) */}
      <aside className="hidden lg:block w-72 xl:w-80 shrink-0 border-r border-stone-200 h-[calc(100vh-3.5rem)] sticky top-14 self-start shadow-xs">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (Overlay for small screens) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
            onClick={onClose}
          />

          {/* Drawer Slide */}
          <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl z-10 flex flex-col">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
