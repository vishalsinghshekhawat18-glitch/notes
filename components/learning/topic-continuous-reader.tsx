'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { EvidenceDrawer, EvidenceItem } from './evidence-drawer';
import { ExamLensViewer, ExamLensData } from './exam-lens-viewer';
import { ActiveRecallViewer, QuestionData } from './active-recall-viewer';
import { RevisionViewer, RevisionUnitData } from './revision-viewer';
import { MarkdownContent } from '@/components/ui/markdown-content';

export interface ContinuousReaderConcept {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  contentBlocks: Array<{
    id: string;
    type: string;
    title?: string | null;
    body: string;
    order: number;
    visibility: string;
  }>;
  claims: Array<{
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel?: string;
    confidence: string;
    evidence: Array<{
      id: string;
      locator: string;
      excerpt?: string | null;
      evidentiarySupport?: string;
      source: {
        title: string;
        authorityTier: string;
      };
    }>;
  }>;
  examMappings: Array<{
    exam: {
      slug: string;
      name: string;
    };
    syllabusUnit?: string | null;
    relevance: string;
    priority: string;
    requiredDepth?: string | null;
    questionStyle?: string | null;
    frequentTraps?: string | null;
    notes?: string | null;
  }>;
  revisionUnits: RevisionUnitData[];
  questions: QuestionData[];
  outgoingConnections?: Array<{
    id: string;
    type: string;
    strength: string;
    explanation: string;
    targetConcept: {
      title: string;
      slug: string;
      shortDefinition: string;
    };
  }>;
}

export interface ContinuousReaderTopic {
  id: string;
  slug: string;
  title: string;
  description?: string | null;
  order: number;
  subject: {
    slug: string;
    name: string;
    domain: {
      slug: string;
      name: string;
    };
    topics: Array<{
      id: string;
      slug: string;
      title: string;
      order: number;
    }>;
  };
  concepts: ContinuousReaderConcept[];
}

interface TopicContinuousReaderProps {
  topic: ContinuousReaderTopic;
}

export function TopicContinuousReader({ topic }: TopicContinuousReaderProps) {
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);
  const conceptRefs = useRef<(HTMLElement | null)[]>([]);

  // Find next topic in the same subject
  const currentTopicIndex = topic.subject.topics.findIndex((t) => t.slug === topic.slug);
  const nextTopic =
    currentTopicIndex >= 0 && currentTopicIndex < topic.subject.topics.length - 1
      ? topic.subject.topics[currentTopicIndex + 1]
      : null;

  // Sync scroll position with active concept index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = conceptRefs.current.length - 1; i >= 0; i--) {
        const el = conceptRefs.current[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveConceptIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial hash deep linking (e.g. #concept-02 or #concept-slug)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const targetElement =
          document.getElementById(hash) ||
          document.getElementById(`concept-${hash}`) ||
          document.getElementById(hash.replace('concept-', ''));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, []);

  // Keyboard navigation: J (next concept), K (prev concept)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'j' || e.key === 'J') {
        if (activeConceptIndex < topic.concepts.length - 1) {
          scrollToConcept(activeConceptIndex + 1);
        }
      } else if (e.key === 'k' || e.key === 'K') {
        if (activeConceptIndex > 0) {
          scrollToConcept(activeConceptIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeConceptIndex, topic.concepts.length]);

  const scrollToConcept = (index: number) => {
    const el = conceptRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveConceptIndex(index);
      setIsOutlineOpen(false);
    }
  };

  const progressPercent =
    topic.concepts.length > 0
      ? Math.round(((activeConceptIndex + 1) / topic.concepts.length) * 100)
      : 0;

  const getBlockBadge = (type: string) => {
    switch (type) {
      case 'INTUITION':
        return { label: 'Intuition & Context', bg: 'text-amber-800 bg-amber-50 border-amber-200' };
      case 'CORE_IDEA':
        return { label: 'Core Principle', bg: 'text-emerald-800 bg-emerald-50 border-emerald-200' };
      case 'MECHANISM':
        return { label: 'Mechanism & Operational Rule', bg: 'text-blue-800 bg-blue-50 border-blue-200' };
      case 'LEGAL_DISTINCTION':
        return { label: 'Constitutional Distinction', bg: 'text-indigo-800 bg-indigo-50 border-indigo-200' };
      case 'CASE_LAW':
        return { label: 'Judicial Precedent', bg: 'text-purple-800 bg-purple-50 border-purple-200' };
      case 'EXAM_APPLICATION':
        return { label: 'Exam Application & Traps', bg: 'text-rose-800 bg-rose-50 border-rose-200' };
      case 'COMPARISON':
        return { label: 'Comparative Analysis', bg: 'text-teal-800 bg-teal-50 border-teal-200' };
      default:
        return { label: type.replace(/_/g, ' '), bg: 'text-stone-700 bg-stone-100 border-stone-200' };
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-24">
      {/* Sticky Top Reader Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <Link
              href={`/topics/${topic.slug}`}
              className="p-1 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors text-xs font-mono flex items-center gap-1 shrink-0"
              title="Return to Topic Index"
            >
              <span>←</span>
              <span className="hidden sm:inline">Index</span>
            </Link>
            <div className="h-3.5 w-px bg-stone-300 shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 truncate">
                {topic.subject.name}
              </div>
              <h1 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                {topic.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Progress indicator */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[10px] font-mono text-stone-500">
                {activeConceptIndex + 1} / {topic.concepts.length} concepts
              </span>
              <div className="w-20 h-1 bg-stone-200 rounded-full overflow-hidden mt-0.5">
                <div
                  className="h-full bg-emerald-700 rounded-full transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Chapter Outline Jump Menu */}
            <button
              onClick={() => setIsOutlineOpen(!isOutlineOpen)}
              className="px-2.5 py-1 rounded-md border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>📑 Chapters</span>
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
                {topic.concepts.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => scrollToConcept(i)}
                    className={`text-left p-2 rounded text-xs transition-colors flex items-baseline gap-2 cursor-pointer ${
                      i === activeConceptIndex
                        ? 'bg-emerald-800 text-white font-medium shadow-2xs'
                        : 'hover:bg-stone-800 text-stone-300'
                    }`}
                  >
                    <span className="font-mono text-stone-400 shrink-0 text-[10px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate leading-tight">{c.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Chapter Content Body */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* Chapter Introduction Hero */}
        <section className="border-b border-stone-200 pb-6">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-800 mb-1">
            {topic.subject.name} · Topic {topic.order || 1}
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            {topic.title}
          </h2>

          <p className="text-sm text-stone-600 font-serif italic mt-2 leading-relaxed max-w-3xl">
            {topic.description ||
              'A complete sequential chapter curriculum covering all core doctrines, mechanisms, examination overlays, and active recall.'}
          </p>
        </section>

        {/* Concepts Rendered Sequentially as Textbook Sections */}
        {topic.concepts.map((concept, index) => {
          const formattedExamLenses: ExamLensData[] = concept.examMappings.map((m) => ({
            examSlug: m.exam.slug,
            examName: m.exam.name,
            syllabusUnit: m.syllabusUnit || 'General Syllabus',
            relevance: m.relevance,
            priority: m.priority,
            requiredDepth: m.requiredDepth || 'PROFICIENT',
            questionStyle: m.questionStyle,
            frequentTraps: m.frequentTraps,
            notes: m.notes,
          }));

          const allEvidenceItems: EvidenceItem[] = concept.claims.flatMap((c) =>
            c.evidence.map((ev) => ({
              id: ev.id,
              sourceTitle: ev.source.title,
              authorityTier: ev.source.authorityTier,
              locator: ev.locator,
              excerpt: ev.excerpt,
              evidentiarySupport: ev.evidentiarySupport || 'DIRECT_STATUTORY',
            }))
          );

          const sortedBlocks = [...concept.contentBlocks].sort((a, b) => a.order - b.order);

          return (
            <article
              key={concept.id}
              id={`concept-${index + 1}`}
              ref={(el) => {
                conceptRefs.current[index] = el;
              }}
              className="scroll-mt-16 bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-7 transition-all"
            >
              {/* Compact Editorial Concept Header */}
              <header id={`concept-${concept.slug}`} className="border-b border-stone-200 pb-4">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                  {topic.title} · Concept {index + 1} of {topic.concepts.length}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
                  {concept.title}
                </h3>

                {concept.shortDefinition && (
                  <p className="text-xs sm:text-sm text-stone-600 font-serif italic mt-2 leading-relaxed">
                    {concept.shortDefinition}
                  </p>
                )}
              </header>

              {/* Full Canonical Content Blocks */}
              <div className="space-y-6">
                {sortedBlocks.map((block) => {
                  const badge = getBlockBadge(block.type);
                  return (
                    <div
                      key={block.id}
                      className="bg-stone-50/60 border border-stone-200/70 rounded-xl p-5 sm:p-6"
                    >
                      <div className="mb-2">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badge.bg}`}>
                          {badge.label}
                        </span>
                      </div>

                      {block.title && (
                        <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-200/60 pb-1">
                          {block.title}
                        </h4>
                      )}

                      <MarkdownContent
                        content={block.body}
                        className="text-sm md:text-[15px] leading-relaxed text-stone-800 font-serif"
                      />
                    </div>
                  );
                })}
              </div>

              {/* 2. Target Exam Lenses */}
              {formattedExamLenses.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <ExamLensViewer examLenses={formattedExamLenses} />
                </div>
              )}

              {/* 3. Fast Multi-Tier Revision */}
              {concept.revisionUnits.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <RevisionViewer revisionUnits={concept.revisionUnits} />
                </div>
              )}

              {/* 4. Active Recall Interactive Quiz */}
              {concept.questions.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <ActiveRecallViewer questions={concept.questions} />
                </div>
              )}

              {/* 5. Claim-Level Provenance */}
              {allEvidenceItems.length > 0 && (
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-mono text-[11px]">Provenance: {concept.claims.length} canonical claims verified</span>
                  <EvidenceDrawer
                    claimStatement={concept.claims[0]?.statement}
                    evidenceList={allEvidenceItems}
                  />
                </div>
              )}
            </article>
          );
        })}

        {/* Chapter Completion Footer */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-xs">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-700 text-emerald-300 font-mono text-[11px] font-semibold">
            ✓ CHAPTER {topic.order || 1} COMPLETE
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            You&apos;ve Completed {topic.title}
          </h3>
          <p className="text-xs text-stone-400 max-w-md mx-auto">
            You have reviewed all {topic.concepts.length} canonical concepts in this chapter.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/topics/${topic.slug}`}
              className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs transition-colors"
            >
              Return to Topic Index
            </Link>

            {nextTopic ? (
              <Link
                href={`/topics/${nextTopic.slug}/read/`}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Read Next: {nextTopic.title}</span>
                <span>→</span>
              </Link>
            ) : (
              <Link
                href="/"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Browse Full Library</span>
                <span>→</span>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
