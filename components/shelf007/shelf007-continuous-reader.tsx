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
} from 'lucide-react';
import { Shelf007ChapterItem } from '@/lib/shelf007/service';
import { MarkdownContent } from '@/components/ui/markdown-content';
import { FontSizeControl } from '@/components/learning/font-size-control';
import { ThemeSwitcher } from '@/components/navigation/theme-switcher';

interface Shelf007ContinuousReaderProps {
  subject: 'economics' | 'iibf-dbf' | 'political-science' | 'history' | 'quantitative-aptitude' | 'general-science' | 'geography' | 'english-language';
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
    subject === 'english-language'
      ? 'English Language & Descriptive Writing'
      : subject === 'economics'
      ? 'Economics Master Treatise'
      : subject === 'iibf-dbf'
      ? 'IIBF Diploma in Banking & Finance'
      : subject === 'political-science'
      ? 'Political Science & Constitutional Governance'
      : subject === 'history'
      ? 'History: Ancient, Medieval, Modern, Rajasthan & World'
      : subject === 'quantitative-aptitude'
      ? 'Quantitative Aptitude & Mathematical Logic'
      : subject === 'general-science'
      ? 'General Science: Physics, Chemistry & Biology Unified'
      : 'Geography: India, World & Rajasthan Master Treatise';

  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync scroll position with active section index and progress bar
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

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save reading position to localStorage for Continue Reading
  useEffect(() => {
    try {
      const activeSec = currentChapter.sections[activeSectionIndex];
      const position = {
        subjectName: subjectTitle,
        subjectSlug: subject,
        topicTitle: currentChapter.title,
        topicSlug: currentChapter.slug,
        conceptTitle: activeSec ? activeSec.title : currentChapter.title,
        conceptSlug: activeSec ? activeSec.id : '',
        url: activeSec
          ? `/shelf-007/${subject}/${currentChapter.slug}#${activeSec.id}`
          : `/shelf-007/${subject}/${currentChapter.slug}`,
        timestamp: Date.now(),
      };
      localStorage.setItem('reading_hub_last_position', JSON.stringify(position));
    } catch {
      // Ignore
    }
  }, [subject, subjectTitle, currentChapter, activeSectionIndex]);

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
    <div className="min-h-screen bg-[#FAF9F4] text-[#1B211E] font-sans pb-24 overflow-x-hidden max-w-full">
      {/* Precision Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#E0D9CB] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#10251F] via-[#C59B4B] to-[#1B4D3C] transition-all duration-75 shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Top Reader Header (Forest Lectern Architectural Frame) */}
      <header className="sticky top-0 z-40 bg-[#10251F] text-[#FAF8F3] backdrop-blur-md border-b border-[#1E3A2E] shadow-sm">
        <div className="w-full px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Sidebar toggle button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-mono shrink-0 cursor-pointer ${
                isSidebarOpen
                  ? 'bg-[#1B4D3C] border-[#274E3E] text-[#FAF8F3] font-semibold'
                  : 'bg-[#16352A] border-[#234A3C] text-[#FAF8F3] hover:bg-[#1D4436]'
              }`}
              title="Toggle Chapters & Sections Sidebar"
              aria-label="Toggle Chapters & Sections Sidebar"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span className="hidden sm:inline font-sans font-medium text-[#FAF8F3]">Chapters</span>
              <span className="text-[10px] text-[#A1B8A9] font-mono">({allChapters.length})</span>
            </button>

            <div className="h-3.5 w-px bg-[#234A3C] shrink-0" />

            <div className="min-w-0">
              <Link
                href={`/shelf-007/${subject}`}
                className="text-[10px] font-mono uppercase tracking-wider text-[#C59B4B] hover:text-[#FAF8F3] transition-colors truncate block"
              >
                {subjectTitle}
              </Link>
              <h1 className="text-xs sm:text-sm font-bold text-[#FAF8F3] truncate">
                {currentChapter.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Progress indicator */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[10px] font-mono text-[#A1B8A9]">
                {activeSectionIndex + 1} / {currentChapter.sections.length} sections
              </span>
              <div className="w-20 h-1 bg-[#16352A] rounded-full overflow-hidden mt-0.5">
                <div
                  className="h-full bg-[#C59B4B] rounded-full transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Font Size Stepper Control */}
            <FontSizeControl />

            {/* Reading Ambience Switcher */}
            <ThemeSwitcher />

            {/* Quick Outline Jump Menu */}
            <button
              onClick={() => setIsOutlineOpen(!isOutlineOpen)}
              className="px-2.5 py-1 rounded-md border border-[#234A3C] bg-[#16352A] hover:bg-[#1D4436] text-[#FAF8F3] text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>📑 Jump</span>
              <span className="text-[9px]">{isOutlineOpen ? '▲' : '▼'}</span>
            </button>
          </div>
        </div>

        {/* Chapter Outline Drawer */}
        {isOutlineOpen && (
          <div className="bg-[#10251F] text-[#FAF8F3] border-b border-[#1E3A2E] px-4 py-3.5 animate-in slide-in-from-top-2 duration-150">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-[#A1B8A9]">
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
                        ? 'bg-[#1B4D3C] text-[#FAF8F3] font-medium shadow-2xs'
                        : 'hover:bg-[#16352A] text-[#D5DDD6]'
                    }`}
                  >
                    <span className="font-mono text-[#C59B4B] shrink-0 text-[10px]">
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

      {/* Floating Collapsible Left Index Toggle */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`fixed left-3 sm:left-5 top-20 z-30 bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] pl-3 pr-3.5 py-2 rounded-xl shadow-lg border border-[#1E3A2E] backdrop-blur-md flex items-center gap-2 text-xs font-mono font-medium transition-all hover:scale-105 cursor-pointer group ${
          isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        title="Open Table of Contents (Esc to close)"
        aria-label="Open Table of Contents"
      >
        <BookOpen className="w-3.5 h-3.5 text-[#C59B4B] group-hover:scale-110 transition-transform" />
        <span className="font-sans font-medium text-[#FAF8F3]">Index</span>
        <span className="text-[10px] text-[#A1B8A9] bg-[#16352A] px-1.5 py-0.5 rounded-full border border-[#234A3C]">
          § {activeSectionIndex + 1}/{currentChapter.sections.length}
        </span>
      </button>

      {/* Collapsible Left Index Navbar (Overlay Drawer) */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity animate-in fade-in duration-150"
          />

          {/* Slide-out Drawer */}
          <aside className="fixed left-0 top-0 bottom-0 w-80 sm:w-88 z-50 bg-[#FFFFFF] text-[#10251F] flex flex-col shadow-2xl border-r border-[#E0D9CB] animate-in slide-in-from-left duration-200 select-none">
            {/* 1. Header: Back Link, Title & Close Button */}
            <div className="p-4 border-b border-[#E0D9CB] bg-[#F7F5EE] backdrop-blur-xs flex items-center justify-between gap-2">
              <div className="min-w-0">
                <Link
                  href={`/shelf-007/${subject}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#5A7365] hover:text-[#10251F] transition-colors group mb-0.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-[#5A7365] group-hover:text-[#10251F]" />
                  <span>Subject Curriculum</span>
                </Link>
                <h2 className="font-serif font-bold text-sm text-[#10251F] leading-snug truncate max-w-[220px]">
                  {subjectTitle}
                </h2>
              </div>

              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1.5 rounded-lg text-[#5A7365] hover:text-[#10251F] hover:bg-[#EAE4D7] transition-colors cursor-pointer"
                title="Close Index (Esc)"
                aria-label="Close Index"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 2. Fast Search Bar */}
            <div className="p-2.5 border-b border-[#E0D9CB] bg-[#FAF9F4]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#5A7365]" />
                <input
                  type="text"
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  placeholder="Filter chapters & lessons..."
                  className="w-full pl-8 pr-7 py-1 text-xs bg-[#FFFFFF] border border-[#E0D9CB] rounded-md text-[#10251F] placeholder-[#8A9E92] focus:outline-none focus:ring-1 focus:ring-[#10251F] transition-all font-sans"
                />
                {sidebarSearch && (
                  <button
                    onClick={() => setSidebarSearch('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#5A7365] hover:text-[#10251F] text-xs cursor-pointer"
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
                          ? 'bg-[#10251F] text-[#FAF8F3] font-bold shadow-2xs'
                          : 'hover:bg-[#F7F5EE] text-[#10251F]'
                      }`}
                    >
                      <Link
                        href={`/shelf-007/${subject}/${ch.slug}`}
                        className="flex-1 truncate mr-1.5 flex items-baseline gap-2"
                        title={ch.title}
                      >
                        <span className={`font-mono text-[10px] shrink-0 ${isCurrent ? 'text-[#C59B4B]' : 'text-[#5A7365]'}`}>
                          {ch.order === 0 ? '••' : ch.order < 10 ? `0${ch.order}` : ch.order}
                        </span>
                        <span className="truncate leading-tight font-serif text-xs">
                          {ch.shortTitle}
                        </span>
                      </Link>

                      <button
                        onClick={() => toggleChapterExpand(ch.slug)}
                        className={`p-0.5 rounded cursor-pointer ${isCurrent ? 'text-[#C59B4B]' : 'text-[#5A7365] hover:text-[#10251F]'}`}
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
                      <div className="ml-4 pl-2 border-l border-[#E0D9CB] space-y-0.5 py-0.5">
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
                                  ? 'bg-[#10251F] text-[#FAF8F3] font-medium shadow-2xs'
                                  : 'text-[#5A7365] hover:bg-[#F7F5EE] hover:text-[#10251F]'
                              }`}
                              title={sec.title}
                            >
                              <span className="font-mono text-[9px] text-[#9E722C] shrink-0">
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
            <div className="p-3 border-t border-[#E0D9CB] bg-[#F7F5EE] text-[10px] font-mono text-[#5A7365] text-center">
              Press <kbd className="px-1 py-0.5 bg-[#FFFFFF] border border-[#E0D9CB] rounded text-[#10251F]">Esc</kbd> to close index
            </div>
          </aside>
        </>
      )}

      {/* Main Content Body: Centered right in the viewport center, orientation never shifts */}
      <div className="w-full min-h-[calc(100vh-3.5rem)]">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Chapter Introduction Hero */}
          <section className="border-b border-[#E0D9CB] pb-4 space-y-2.5">
            {/* Archival Breadcrumb */}
            <nav className="text-xs font-mono text-[#5A7365] flex items-center gap-2 flex-wrap pb-0.5">
              <Link href="/" className="hover:text-[#10251F] transition-colors">
                Catalogue
              </Link>
              <span className="text-[#C5BEAF]">/</span>
              <Link href="/shelf-007" className="hover:text-[#10251F] transition-colors font-medium">
                Shelf 007
              </Link>
              <span className="text-[#C5BEAF]">/</span>
              <Link href={`/shelf-007/${subject}`} className="hover:text-[#10251F] transition-colors font-medium">
                {subjectTitle}
              </Link>
              <span className="text-[#C5BEAF]">/</span>
              <span className="text-[#10251F] font-bold truncate max-w-xs">{currentChapter.shortTitle}</span>
            </nav>

            <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#10251F]">
              {subjectTitle} · {currentChapter.category}
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#10251F] tracking-tight">
              {currentChapter.title}
            </h2>

            {currentChapter.description && (
              <p className="text-xs sm:text-sm text-[#2B3B33] font-serif italic leading-relaxed max-w-3xl pt-0.5">
                {currentChapter.description}
              </p>
            )}

            <div className="pt-1.5 flex flex-wrap items-center gap-2 text-xs font-mono text-[#5A7365]">
              <span className="bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded">
                📚 {currentChapter.sections.length} Editorial Sections
              </span>
              <span>•</span>
              <span className="bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded">
                ⏱️ ~{currentChapter.readingMinutes} mins read
              </span>
              <span>•</span>
              <span className="bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded">
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
                className="scroll-mt-16 bg-[#FFFFFF] border border-[#E0D9CB] rounded-xl p-5 sm:p-6 shadow-2xs space-y-4 transition-all"
              >
                {/* Compact Editorial Section Header */}
                <header className="border-b border-[#E8E2D5] pb-2.5 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#10251F] mb-0.5">
                      {currentChapter.shortTitle} · Section {index + 1} of {currentChapter.sections.length}
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#10251F] tracking-tight leading-snug">
                      {section.title}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono text-[#5A7365] shrink-0">
                    ~{Math.max(1, Math.ceil(section.wordCount / 220))}m read
                  </span>
                </header>

                {/* Section Markdown Body */}
                <div className="space-y-3">
                  <MarkdownContent
                    content={section.body}
                    className="leading-relaxed text-[#1B211E] font-serif"
                  />
                </div>
              </article>
            );
          })}

          {/* Chapter Completion Footer */}
          <section className="bg-[#10251F] border border-[#1E3A2E] text-[#FAF8F3] rounded-xl p-5 sm:p-6 text-center space-y-2.5 shadow-2xs">
            <div className="inline-block px-2 py-0.5 rounded-full bg-[#16382D] border border-[#274E3E] text-[#C59B4B] font-mono text-[10px] font-semibold">
              ✓ {currentChapter.order > 0 ? `CHAPTER ${currentChapter.order}` : currentChapter.category.toUpperCase()} COMPLETE
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FAF8F3]">
              You&apos;ve Completed {currentChapter.title}
            </h3>

            <p className="text-xs text-[#D5DDD6] max-w-md mx-auto">
              You have reviewed all {currentChapter.sections.length} canonical sections in this master treatise unit.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              {prevChapter && (
                <Link
                  href={`/shelf-007/${subject}/${prevChapter.slug}`}
                  className="px-4 py-2 rounded-lg bg-[#16382D] hover:bg-[#1D4436] border border-[#274E3E] text-[#FAF8F3] font-medium text-xs font-mono transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>←</span>
                  <span>Previous: {prevChapter.shortTitle}</span>
                </Link>
              )}

              <Link
                href={`/shelf-007/${subject}`}
                className="px-4 py-2 rounded-lg bg-[#16382D] hover:bg-[#1D4436] border border-[#274E3E] text-[#FAF8F3] font-medium text-xs font-mono transition-colors"
              >
                Return to Curriculum Index
              </Link>

              {nextChapter ? (
                <Link
                  href={`/shelf-007/${subject}/${nextChapter.slug}`}
                  className="px-4 py-2 rounded-lg bg-[#C59B4B] hover:bg-[#D4AA5A] text-[#10251F] font-bold text-xs font-mono transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Read Next: {nextChapter.shortTitle}</span>
                  <span>→</span>
                </Link>
              ) : (
                <Link
                  href={`/shelf-007/${subject}`}
                  className="px-4 py-2 rounded-lg bg-[#C59B4B] hover:bg-[#D4AA5A] text-[#10251F] font-bold text-xs font-mono transition-colors flex items-center gap-1.5 shadow-xs"
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
