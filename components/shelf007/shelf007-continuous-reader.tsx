'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Search,
  X,
  Layers,
} from 'lucide-react';
import { Shelf007ChapterItem, Shelf007SectionItem } from '@/lib/shelf007/service';
import { MarkdownContent } from '@/components/ui/markdown-content';
import { FontSizeControl } from '@/components/learning/font-size-control';

interface Shelf007ContinuousReaderProps {
  subject: 'economics' | 'iibf-dbf' | 'political-science';
  currentChapter: Shelf007ChapterItem;
  prevChapter: Shelf007ChapterItem | null;
  nextChapter: Shelf007ChapterItem | null;
  allChapters: Shelf007ChapterItem[];
}

export function Shelf007ContinuousReader({
  subject,
  currentChapter,
  prevChapter,
  nextChapter,
  allChapters,
}: Shelf007ContinuousReaderProps) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const subjectTitle =
    subject === 'economics'
      ? 'Economics Master Treatise'
      : subject === 'iibf-dbf'
      ? 'IIBF Diploma in Banking & Finance'
      : 'Political Science & Constitutional Governance';

  // Sync scroll position with active section index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial hash deep linking (e.g. #sec-2)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, []);

  // Keyboard navigation: J (next section), K (prev section), Esc (close drawer)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'j' || e.key === 'J') {
        if (activeSectionIndex < currentChapter.sections.length - 1) {
          scrollToSection(activeSectionIndex + 1);
        }
      } else if (e.key === 'k' || e.key === 'K') {
        if (activeSectionIndex > 0) {
          scrollToSection(activeSectionIndex - 1);
        }
      } else if (e.key === 'Escape') {
        setIsSidebarOpen(false);
        setIsOutlineOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSectionIndex, currentChapter.sections.length]);

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSectionIndex(index);
      setIsOutlineOpen(false);
      setIsSidebarOpen(false);
    }
  };

  const progressPercent =
    currentChapter.sections.length > 0
      ? Math.round(((activeSectionIndex + 1) / currentChapter.sections.length) * 100)
      : 0;

  // Sidebar search & expand state
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(
    () => new Set([currentChapter.slug])
  );

  const toggleChapterExpand = (slug: string) => {
    setExpandedSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  const filteredChapters = allChapters.filter((c) => {
    if (!sidebarSearch.trim()) return true;
    const q = sidebarSearch.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.shortTitle.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.sections.some((s) => s.title.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-24 overflow-x-hidden max-w-full">
      {/* Sticky Top Reader Header (Identical to TopicContinuousReader) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
        <div className="w-full px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Sidebar toggle button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-mono shrink-0 cursor-pointer ${
                isSidebarOpen
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
              title="Toggle Chapters & Sections Sidebar"
              aria-label="Toggle Chapters & Sections Sidebar"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
              <span className="hidden sm:inline font-sans font-medium">Chapters</span>
              <span className="text-[10px] text-stone-500 font-mono">({allChapters.length})</span>
            </button>

            <div className="h-3.5 w-px bg-stone-300 shrink-0" />

            <div className="min-w-0">
              <Link
                href={`/shelf-007/${subject}`}
                className="text-[10px] font-mono uppercase tracking-wider text-stone-500 hover:text-emerald-800 transition-colors truncate block"
              >
                {subjectTitle}
              </Link>
              <h1 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                {currentChapter.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Progress indicator */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[10px] font-mono text-stone-500">
                {activeSectionIndex + 1} / {currentChapter.sections.length} sections
              </span>
              <div className="w-20 h-1 bg-stone-200 rounded-full overflow-hidden mt-0.5">
                <div
                  className="h-full bg-emerald-700 rounded-full transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Font Size Stepper Control */}
            <FontSizeControl />

            {/* Quick Outline Jump Menu */}
            <button
              onClick={() => setIsOutlineOpen(!isOutlineOpen)}
              className="px-2.5 py-1 rounded-md border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>📑 Jump</span>
              <span className="text-[9px]">{isOutlineOpen ? '▲' : '▼'}</span>
            </button>
          </div>
        </div>

        {/* Chapter Outline Drawer */}
        {isOutlineOpen && (
          <div className="bg-stone-900 text-stone-100 border-b border-stone-800 px-4 py-3.5 animate-in slide-in-from-top-2 duration-150">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-stone-400">
                <span>CHAPTER OUTLINE · JUMP TO SECTION</span>
                <span className="text-[10px]">Shortcuts: J (Next), K (Prev)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 max-h-64 overflow-y-auto pr-1">
                {currentChapter.sections.map((sec, i) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(i)}
                    className={`text-left p-2 rounded text-xs transition-colors flex items-baseline gap-2 cursor-pointer ${
                      i === activeSectionIndex
                        ? 'bg-emerald-800 text-white font-medium shadow-2xs'
                        : 'hover:bg-stone-800 text-stone-300'
                    }`}
                  >
                    <span className="font-mono text-stone-400 shrink-0 text-[10px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate leading-tight">{sec.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Collapsible Left Index Toggle (Accessible anywhere on the page, even middle of reading) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`fixed left-3 sm:left-5 top-20 z-30 bg-stone-900/90 hover:bg-stone-900 text-stone-100 pl-3 pr-3.5 py-2 rounded-xl shadow-lg border border-stone-700/80 backdrop-blur-md flex items-center gap-2 text-xs font-mono font-medium transition-all hover:scale-105 cursor-pointer group ${
          isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        title="Open Table of Contents (Esc to close)"
        aria-label="Open Table of Contents"
      >
        <BookOpen className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-300" />
        <span className="font-sans font-medium text-stone-200">Index</span>
        <span className="text-[10px] text-stone-400 bg-stone-800 px-1.5 py-0.5 rounded-full border border-stone-700">
          § {activeSectionIndex + 1}/{currentChapter.sections.length}
        </span>
      </button>

      {/* Collapsible Left Index Navbar (Overlay Drawer: Content stays right in centre at all times) */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-stone-950/30 backdrop-blur-xs z-50 transition-opacity animate-in fade-in duration-150"
          />

          {/* Slide-out Drawer */}
          <aside className="fixed left-0 top-0 bottom-0 w-80 sm:w-88 z-50 bg-stone-50 text-stone-800 flex flex-col shadow-2xl border-r border-stone-200 animate-in slide-in-from-left duration-200 select-none">
            {/* 1. Header: Back Link, Title & Close Button */}
            <div className="p-4 border-b border-stone-200 bg-white/90 backdrop-blur-xs flex items-center justify-between gap-2">
              <div className="min-w-0">
                <Link
                  href={`/shelf-007/${subject}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-600 hover:text-emerald-800 transition-colors group mb-0.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-stone-500 group-hover:text-emerald-800" />
                  <span>Subject Curriculum</span>
                </Link>
                <h2 className="font-serif font-bold text-sm text-stone-900 leading-snug truncate max-w-[220px]">
                  {subjectTitle}
                </h2>
              </div>

              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                title="Close Index (Esc)"
                aria-label="Close Index"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 2. Fast Search Bar */}
            <div className="p-2.5 border-b border-stone-200 bg-white/60">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  placeholder="Filter chapters & lessons..."
                  className="w-full pl-8 pr-7 py-1 text-xs bg-white border border-stone-200 rounded-md text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-emerald-700 transition-all font-sans"
                />
                {sidebarSearch && (
                  <button
                    onClick={() => setSidebarSearch('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 3. Scrollable Chapter List */}
            <nav className="flex-1 overflow-y-auto p-2.5 space-y-1 text-xs">
              {filteredChapters.map((ch) => {
                const isCurrent = ch.slug === currentChapter.slug;
                const isExpanded = expandedSlugs.has(ch.slug) || sidebarSearch.trim().length > 0;

                return (
                  <div key={ch.slug} className="space-y-0.5">
                    <div
                      className={`flex items-center justify-between rounded-lg px-2.5 py-2 transition-colors ${
                        isCurrent
                          ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200/80 shadow-2xs'
                          : 'hover:bg-stone-200/50 text-stone-700'
                      }`}
                    >
                      <Link
                        href={`/shelf-007/${subject}/${ch.slug}`}
                        className="flex-1 truncate mr-1.5 flex items-baseline gap-2"
                        title={ch.title}
                      >
                        <span className="font-mono text-[10px] text-stone-400 shrink-0">
                          {ch.order < 10 ? `0${ch.order}` : ch.order}
                        </span>
                        <span className="truncate leading-tight font-serif">
                          {ch.shortTitle}
                        </span>
                      </Link>

                      <button
                        onClick={() => toggleChapterExpand(ch.slug)}
                        className="text-stone-400 hover:text-stone-700 p-0.5 rounded cursor-pointer"
                        aria-label="Toggle sections"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Sub-sections list when expanded */}
                    {isExpanded && ch.sections.length > 0 && (
                      <div className="ml-5 pl-2 border-l border-stone-200 space-y-0.5 py-0.5">
                        {ch.sections.map((sec, sIdx) => {
                          const isSectionActive = isCurrent && sIdx === activeSectionIndex;

                          return (
                            <button
                              key={sec.id}
                              onClick={() => {
                                if (isCurrent) {
                                  scrollToSection(sIdx);
                                } else {
                                  window.location.href = `/shelf-007/${subject}/${ch.slug}#${sec.id}`;
                                }
                              }}
                              className={`w-full text-left px-2 py-1.5 rounded text-[11px] truncate flex items-center gap-1.5 transition-colors cursor-pointer ${
                                isSectionActive
                                  ? 'bg-emerald-800 text-white font-medium shadow-2xs'
                                  : 'text-stone-600 hover:bg-stone-200/60 hover:text-stone-900'
                              }`}
                              title={sec.title}
                            >
                              <span className="font-mono text-[9px] opacity-60 shrink-0">
                                § {sIdx + 1}
                              </span>
                              <span className="truncate">{sec.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Footer with shortcut hint */}
            <div className="p-3 border-t border-stone-200 bg-stone-100/60 text-[10px] font-mono text-stone-500 text-center">
              Press <kbd className="px-1 py-0.5 bg-white border border-stone-300 rounded text-stone-700">Esc</kbd> to close index
            </div>
          </aside>
        </>
      )}

      {/* Main Content Body: Centered right in the viewport center, orientation never shifts */}
      <div className="w-full min-h-[calc(100vh-3.5rem)]">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          {/* Chapter Introduction Hero */}
          <section className="border-b border-stone-200 pb-6 space-y-2">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-800">
              {subjectTitle} · {currentChapter.category}
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              {currentChapter.title}
            </h2>

            <p className="text-sm text-stone-600 font-serif italic leading-relaxed max-w-4xl pt-1">
              {currentChapter.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500">
              <span className="bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
                📚 {currentChapter.sections.length} Editorial Sections
              </span>
              <span>•</span>
              <span className="bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
                ⏱️ ~{currentChapter.readingMinutes} mins read
              </span>
              <span>•</span>
              <span className="bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
                📝 ~{(currentChapter.wordCount / 1000).toFixed(1)}k words
              </span>
            </div>
          </section>

          {/* Sections Rendered Sequentially as Textbook Sections */}
          {currentChapter.sections.map((section, index) => {
            return (
              <article
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="scroll-mt-16 bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-all"
              >
                {/* Compact Editorial Section Header */}
                <header className="border-b border-stone-200 pb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                      {currentChapter.shortTitle} · Section {index + 1} of {currentChapter.sections.length}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
                      {section.title}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-stone-400 shrink-0">
                    ~{Math.max(1, Math.ceil(section.wordCount / 220))}m read
                  </span>
                </header>

                {/* Section Markdown Body */}
                <div className="space-y-4">
                  <MarkdownContent
                    content={section.body}
                    className="leading-relaxed text-stone-800 font-serif"
                  />
                </div>
              </article>
            );
          })}

          {/* Chapter Completion Footer */}
          <section className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-xs">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-700 text-emerald-300 font-mono text-[11px] font-semibold">
              ✓ CHAPTER {currentChapter.order} COMPLETE
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              You&apos;ve Completed {currentChapter.title}
            </h3>

            <p className="text-xs text-stone-400 max-w-md mx-auto">
              You have reviewed all {currentChapter.sections.length} canonical sections in this master treatise unit.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/shelf-007/${subject}`}
                className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs transition-colors"
              >
                Return to Curriculum Index
              </Link>

              {nextChapter ? (
                <Link
                  href={`/shelf-007/${subject}/${nextChapter.slug}`}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Read Next: {nextChapter.shortTitle}</span>
                  <span>→</span>
                </Link>
              ) : (
                <Link
                  href={`/shelf-007/${subject}`}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Complete Course Review</span>
                  <span>→</span>
                </Link>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
