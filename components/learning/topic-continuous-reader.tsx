'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { DepthSelector } from './depth-selector';
import { EvidenceDrawer, EvidenceItem } from './evidence-drawer';
import { ExamLensViewer, ExamLensData } from './exam-lens-viewer';
import { ActiveRecallViewer, QuestionData } from './active-recall-viewer';
import { RevisionViewer, RevisionUnitData } from './revision-viewer';

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
  const [depthLevels, setDepthLevels] = useState<Record<string, number>>({});
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
      const scrollPos = window.scrollY + 200;
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
      // Don't trigger if user is focused in an input/textarea
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

  const getDepthForConcept = (conceptId: string) => {
    return depthLevels[conceptId] ?? 2; // Default to Level 2
  };

  const setDepthForConcept = (conceptId: string, depth: number) => {
    setDepthLevels((prev) => ({ ...prev, [conceptId]: depth }));
  };

  const progressPercent =
    topic.concepts.length > 0
      ? Math.round(((activeConceptIndex + 1) / topic.concepts.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-24">
      {/* Sticky Reader Header & Reading Progress */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <Link
              href={`/topics/${topic.slug}`}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors text-xs font-mono flex items-center gap-1 shrink-0"
              title="Return to Topic Index"
            >
              <span>←</span>
              <span className="hidden sm:inline">Index</span>
            </Link>
            <div className="h-4 w-px bg-stone-300 shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 truncate">
                {topic.subject.name} • Continuous Reader
              </div>
              <h1 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                {topic.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Progress Badge */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[11px] font-mono font-medium text-stone-600">
                Concept {activeConceptIndex + 1} of {topic.concepts.length}
              </span>
              <div className="w-24 h-1.5 bg-stone-200 rounded-full overflow-hidden mt-0.5">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Quick Outline Dropdown */}
            <button
              onClick={() => setIsOutlineOpen(!isOutlineOpen)}
              className="px-2.5 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>📑 Outline ({topic.concepts.length})</span>
              <span className="text-[10px]">{isOutlineOpen ? '▲' : '▼'}</span>
            </button>
          </div>
        </div>

        {/* Outline Drawer / Dropdown */}
        {isOutlineOpen && (
          <div className="bg-stone-900 text-stone-100 border-b border-stone-800 px-4 py-4 animate-in slide-in-from-top-2 duration-150">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-stone-400">
                <span>CHAPTER OUTLINE • JUMP TO CONCEPT</span>
                <span className="text-[10px]">Shortcuts: J (Next), K (Prev)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
                {topic.concepts.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => scrollToConcept(i)}
                    className={`text-left p-2 rounded-lg text-xs transition-colors flex items-start gap-2 ${
                      i === activeConceptIndex
                        ? 'bg-emerald-800 text-white font-medium shadow-xs'
                        : 'hover:bg-stone-800 text-stone-300'
                    }`}
                  >
                    <span className="font-mono text-stone-400 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate">{c.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Continuous Reading Container */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        {/* Topic Introduction Hero */}
        <section className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <span>{topic.subject.domain.name}</span>
            <span>›</span>
            <span>{topic.subject.name}</span>
            <span>›</span>
            <span className="font-semibold text-emerald-800">Topic {topic.order || 1}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            {topic.title}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            {topic.description ||
              'A complete sequential chapter curriculum covering all core doctrines, mechanisms, examination overlays, and active recall.'}
          </p>

          <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">
                {topic.concepts.length} Canonical Concepts
              </span>
              <span>Sequential Continuous Reading</span>
            </div>
            <div className="text-stone-400">
              Estimated reading time: ~{topic.concepts.length * 4} mins
            </div>
          </div>
        </section>

        {/* Concepts Rendered Sequentially */}
        {topic.concepts.map((concept, index) => {
          const depth = getDepthForConcept(concept.id);
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

          const difficultyBadge =
            concept.difficulty === 'BEGINNER'
              ? 'bg-blue-50 text-blue-800 border-blue-200'
              : concept.difficulty === 'INTERMEDIATE'
              ? 'bg-amber-50 text-amber-800 border-amber-200'
              : 'bg-rose-50 text-rose-800 border-rose-200';

          return (
            <article
              key={concept.id}
              id={`concept-${index + 1}`}
              ref={(el) => {
                conceptRefs.current[index] = el;
              }}
              className="scroll-mt-20 bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden transition-all"
            >
              {/* Concept Section Header Boundary */}
              <div
                id={`concept-${concept.slug}`}
                className="bg-stone-900 text-stone-100 p-6 sm:p-7 border-b border-stone-800"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold">
                      CONCEPT {String(index + 1).padStart(2, '0')} OF {String(topic.concepts.length).padStart(2, '0')}
                    </span>
                    <span className={`px-2 py-0.5 rounded border text-[11px] font-semibold ${difficultyBadge}`}>
                      {concept.difficulty}
                    </span>
                  </div>
                  <Link
                    href={`/concepts/${concept.slug}`}
                    target="_blank"
                    className="text-stone-400 hover:text-stone-200 flex items-center gap-1 text-[11px] transition-colors"
                    title="Open standalone page in new tab"
                  >
                    <span>Standalone Page</span>
                    <span>↗</span>
                  </Link>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight mt-1">
                  {concept.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed font-sans">
                  {concept.shortDefinition}
                </p>
              </div>

              {/* Concept Pedagogical Body */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* 1. Depth Selector */}
                <div className="pb-4 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                    Explanation Depth
                  </div>
                  <DepthSelector
                    currentLevel={depth}
                    onSelectLevel={(newDepth) => setDepthForConcept(concept.id, newDepth)}
                  />
                </div>

                {/* 2. Content Blocks (Filtered by Depth) */}
                <div className="space-y-6">
                  {concept.contentBlocks
                    .filter((b) => {
                      if (depth === 1) return b.type === 'CORE_IDEA' || b.type === 'INTUITION';
                      if (depth === 2)
                        return (
                          b.type === 'CORE_IDEA' ||
                          b.type === 'INTUITION' ||
                          b.type === 'WHY_IT_MATTERS' ||
                          b.type === 'COMPARISON'
                        );
                      if (depth === 3)
                        return (
                          b.type === 'CORE_IDEA' ||
                          b.type === 'INTUITION' ||
                          b.type === 'WHY_IT_MATTERS' ||
                          b.type === 'COMPARISON' ||
                          b.type === 'MECHANISM'
                        );
                      if (depth === 4) return b.type !== 'ADVANCED_REFERENCE';
                      return true;
                    })
                    .map((block) => (
                      <div
                        key={block.id}
                        className="prose prose-stone max-w-none text-stone-800 leading-relaxed text-sm sm:text-base space-y-2"
                      >
                        {block.title && (
                          <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 border-l-3 border-emerald-800 pl-3 py-0.5">
                            {block.title}
                          </h4>
                        )}
                        <div className="whitespace-pre-line text-stone-700 leading-relaxed pl-1">
                          {block.body}
                        </div>
                      </div>
                    ))}
                </div>

                {/* 3. Claims & Evidence Verification Drawer */}
                {allEvidenceItems.length > 0 && (
                  <div className="pt-4 border-t border-stone-100">
                    <EvidenceDrawer
                      claimStatement={concept.claims[0]?.statement}
                      evidenceList={allEvidenceItems}
                    />
                  </div>
                )}

                {/* 4. Examination Overlays (UPSC / RPSC / IIBF) */}
                {formattedExamLenses.length > 0 && (
                  <div className="pt-4 border-t border-stone-100">
                    <ExamLensViewer examLenses={formattedExamLenses} />
                  </div>
                )}

                {/* 5. Fast Revision Layers (30s, 2m, 5m) */}
                {concept.revisionUnits.length > 0 && (
                  <div className="pt-4 border-t border-stone-100">
                    <RevisionViewer revisionUnits={concept.revisionUnits} />
                  </div>
                )}

                {/* 6. Active Recall Concept Checks */}
                {concept.questions.length > 0 && (
                  <div className="pt-4 border-t border-stone-100">
                    <ActiveRecallViewer questions={concept.questions} />
                  </div>
                )}

                {/* Concept Footer Navigation Controls */}
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  {index > 0 ? (
                    <button
                      onClick={() => scrollToConcept(index - 1)}
                      className="w-full sm:w-auto px-4 py-2 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>← Previous:</span>
                      <span className="truncate max-w-[200px]">{topic.concepts[index - 1].title}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {index < topic.concepts.length - 1 ? (
                    <button
                      onClick={() => scrollToConcept(index + 1)}
                      className="w-full sm:w-auto px-5 py-2 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 font-medium shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Next Concept:</span>
                      <span className="truncate max-w-[200px]">{topic.concepts[index + 1].title}</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const completeEl = document.getElementById('topic-completion');
                        if (completeEl) completeEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto px-5 py-2 rounded-lg bg-emerald-900 text-white hover:bg-emerald-950 font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>✓ Complete Topic</span>
                      <span>↓</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {/* Topic Completion Section */}
        <section
          id="topic-completion"
          className="bg-stone-900 text-stone-100 border border-stone-800 rounded-2xl p-8 text-center space-y-6 shadow-md"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-500 text-emerald-400 text-xl font-bold">
            ✓
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Topic Module Finished
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {topic.title} Complete
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-lg mx-auto leading-relaxed font-sans">
              You have completed all {topic.concepts.length} canonical concepts in this module with full source-grounded claims, examination overlays, and active recall.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-medium">
            <Link
              href={`/topics/${topic.slug}`}
              className="px-4 py-2.5 rounded-lg border border-stone-700 hover:bg-stone-800 text-stone-300 transition-colors"
            >
              ← Back to Topic Index
            </Link>

            {nextTopic && (
              <Link
                href={`/topics/${nextTopic.slug}/read`}
                className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Begin Next Topic: {nextTopic.title}</span>
                <span>→</span>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
