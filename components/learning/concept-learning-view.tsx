'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EvidenceDrawer, EvidenceItem } from './evidence-drawer';
import { ExamLensViewer, ExamLensData } from './exam-lens-viewer';
import { ActiveRecallViewer, QuestionData } from './active-recall-viewer';
import { RevisionViewer, RevisionUnitData } from './revision-viewer';
import { KnowledgeReconstruction } from './knowledge-reconstruction';
import { MarkdownContent } from '@/components/ui/markdown-content';

export interface ConceptBlock {
  id: string;
  type: string;
  title?: string | null;
  body: string;
  order: number;
  visibility: string;
}

export interface ConceptClaim {
  id: string;
  statement: string;
  claimType: string;
  importance?: string;
  confidence: string;
  epistemicLevel?: string;
  scopeConditions?: string | null;
  evidence: Array<{
    id: string;
    locator: string;
    excerpt?: string | null;
    evidentiarySupport?: string;
    notes?: string | null;
    source: {
      title: string;
      authorityTier: string;
    };
  }>;
}

export interface ConceptConnection {
  id: string;
  type: string;
  strength: string;
  explanation: string;
  targetConcept: {
    title: string;
    slug: string;
    shortDefinition: string;
  };
}

export interface SiblingConcept {
  id: string;
  slug: string;
  title: string;
  difficulty: string;
}

export interface ConceptLearningViewProps {
  concept: {
    id: string;
    title: string;
    slug: string;
    shortDefinition: string;
    difficulty: string;
    status: string;
    topic: {
      slug: string;
      title: string;
      subject: {
        slug: string;
        name: string;
        domain: {
          slug: string;
          name: string;
        };
      };
      concepts?: SiblingConcept[];
    };
    contentBlocks: ConceptBlock[];
    claims: ConceptClaim[];
    examMappings: Array<{
      examSlug: string;
      examName: string;
      syllabusUnit: string;
      relevance: string;
      priority: string;
      requiredDepth?: string;
      questionStyle?: string | null;
      frequentTraps?: string | null;
      notes?: string | null;
    }>;
    revisionUnits: RevisionUnitData[];
    questions: QuestionData[];
    outgoingConnections: ConceptConnection[];
  };
}

export function ConceptLearningView({ concept }: ConceptLearningViewProps) {
  const [activeTab, setActiveTab] = useState<'READING' | 'EXAMS' | 'ACTIVE_RECALL' | 'REVISION' | 'EVIDENCE' | 'CONNECTIONS'>('READING');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const siblingConcepts = concept.topic.concepts || [];
  const currentIndex = siblingConcepts.findIndex((c) => c.slug === concept.slug);
  const prevConcept = currentIndex > 0 ? siblingConcepts[currentIndex - 1] : null;
  const nextConcept = currentIndex >= 0 && currentIndex < siblingConcepts.length - 1 ? siblingConcepts[currentIndex + 1] : null;

  // Complete, un-gated canonical content blocks sorted by order
  const allBlocks = [...concept.contentBlocks].sort((a, b) => a.order - b.order);

  const getBlockBadge = (type: string) => {
    switch (type) {
      case 'INTUITION':
        return { label: 'Intuition & Context', bg: 'bg-amber-100 text-amber-900 border-amber-300' };
      case 'CORE_IDEA':
        return { label: 'Core Principle', bg: 'bg-emerald-100 text-emerald-900 border-emerald-300' };
      case 'MECHANISM':
        return { label: 'How It Works / Mechanism', bg: 'bg-blue-100 text-blue-900 border-blue-300' };
      case 'LEGAL_DISTINCTION':
        return { label: 'Legal & Constitutional Distinction', bg: 'bg-indigo-100 text-indigo-900 border-indigo-300' };
      case 'CASE_LAW':
        return { label: 'Judicial Precedent / Case Law', bg: 'bg-purple-100 text-purple-900 border-purple-300' };
      case 'EXAM_APPLICATION':
        return { label: 'Exam Trap & High-Yield Analysis', bg: 'bg-rose-100 text-rose-900 border-rose-300' };
      case 'COMPARISON':
        return { label: 'Comparative Synthesis', bg: 'bg-teal-100 text-teal-900 border-teal-300' };
      default:
        return { label: type.replace(/_/g, ' '), bg: 'bg-stone-100 text-stone-800 border-stone-300' };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 font-sans">
      <div className="flex gap-8 items-start">
        {/* Left Navigation Sidebar (Topic Concepts) */}
        <aside className="hidden lg:block w-72 shrink-0 sticky top-20 bg-white border border-stone-200 rounded-xl p-4 shadow-xs max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1">
            Topic Curriculum
          </div>
          <Link
            href={`/topics/${concept.topic.slug}`}
            className="font-serif font-bold text-sm text-stone-900 hover:text-emerald-800 transition-colors block mb-2"
          >
            {concept.topic.title}
          </Link>

          {/* Continuous Topic Reading CTA in Sidebar */}
          <Link
            href={`/topics/${concept.topic.slug}/read/#concept-${concept.slug}`}
            className="w-full mb-3 px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-medium flex items-center justify-between transition-colors group"
          >
            <span>▶ Continuous Chapter</span>
            <span className="text-[10px] font-mono group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>

          <div className="space-y-1 pt-2 border-t border-stone-100">
            {siblingConcepts.map((sc, index) => {
              const isCurrent = sc.slug === concept.slug;
              return (
                <Link
                  key={sc.id}
                  href={`/concepts/${sc.slug}`}
                  className={`flex items-baseline gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                    isCurrent
                      ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span className={`font-mono text-[10px] shrink-0 ${isCurrent ? 'text-emerald-200' : 'text-stone-400'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate leading-tight">{sc.title}</span>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 max-w-4xl">
          {/* Breadcrumbs & Continuous Mode Action */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500 mb-3">
            <nav className="flex items-center gap-1.5 truncate">
              <Link href="/" className="hover:text-stone-900 transition-colors">
                Library
              </Link>
              <span>›</span>
              <Link href={`/topics/${concept.topic.slug}`} className="hover:text-stone-900 transition-colors truncate">
                {concept.topic.title}
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href={`/topics/${concept.topic.slug}/read/#concept-${concept.slug}`}
                className="px-2.5 py-1 rounded bg-emerald-800 text-white hover:bg-emerald-900 font-medium text-xs flex items-center gap-1 transition-colors shadow-2xs"
              >
                <span>📖 Read in Continuous Mode</span>
                <span>→</span>
              </Link>

              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-xs text-stone-600 bg-stone-100 px-2 py-1 rounded border border-stone-300"
              >
                {siblingConcepts.length} Concepts ☰
              </button>
            </div>
          </div>

          {/* Mobile Concept Drawer */}
          {isSidebarOpen && (
            <div className="lg:hidden mb-6 p-4 bg-white border border-stone-300 rounded-xl shadow-md">
              <div className="font-serif font-bold text-sm mb-2">{concept.topic.title}</div>
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {siblingConcepts.map((sc, index) => (
                  <Link
                    key={sc.id}
                    href={`/concepts/${sc.slug}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`block px-2 py-1 rounded text-xs ${
                      sc.slug === concept.slug ? 'bg-emerald-800 text-white font-semibold' : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}. {sc.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Concept Title & Canonical Status */}
          <div className="border-b border-stone-200 pb-5 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="bg-emerald-100 text-emerald-900 font-mono text-[10px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                Full Canonical Concept
              </span>
              <span className="text-xs font-mono text-stone-500">
                Difficulty: <span className="font-semibold text-stone-700">{concept.difficulty}</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
              {concept.title}
            </h1>
            <p className="text-sm text-stone-700 font-serif italic mt-3 leading-relaxed bg-stone-100/80 p-3.5 rounded-lg border-l-3 border-stone-400">
              &ldquo;{concept.shortDefinition}&rdquo;
            </p>
          </div>

          {/* Mode Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-2 mb-6">
            {[
              { id: 'READING', label: '📖 Full Canonical Text' },
              { id: 'EXAMS', label: `🎯 Exam Lenses (${concept.examMappings.length})` },
              { id: 'ACTIVE_RECALL', label: `🧠 Active Recall (${concept.questions.length})` },
              { id: 'REVISION', label: `⚡ Revision (${concept.revisionUnits.length})` },
              { id: 'EVIDENCE', label: `🔍 Sources & Claims (${concept.claims.length})` },
              { id: 'CONNECTIONS', label: `🔗 Connections (${concept.outgoingConnections.length})` },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1: Full Guided Reading */}
          {activeTab === 'READING' && (
            <div className="space-y-8">
              {allBlocks.map((block) => {
                const badge = getBlockBadge(block.type);
                const relevantClaims = concept.claims.filter((c) => {
                  if (block.type === 'CORE_IDEA' && (c.claimType === 'LEGAL_PROVISION' || c.claimType === 'DEFINITION' || c.claimType === 'CONSTITUTIONAL_PROVISION')) return true;
                  if (block.type === 'MECHANISM' && (c.claimType === 'RULE' || c.claimType === 'CONCEPT' || c.claimType === 'PROCEDURAL_RULE')) return true;
                  if (block.type === 'CASE_LAW' && c.claimType === 'JUDICIAL_DOCTRINE') return true;
                  if (block.type === 'COMPARISON' && c.claimType === 'HISTORICAL_FACT') return true;
                  return false;
                });

                const evidenceItems: EvidenceItem[] = relevantClaims.flatMap((c) =>
                  c.evidence.map((e) => ({
                    id: e.id,
                    sourceTitle: e.source.title,
                    authorityTier: e.source.authorityTier,
                    locator: e.locator,
                    excerpt: e.excerpt,
                    evidentiarySupport: e.evidentiarySupport || e.notes || 'Direct evidentiary support.',
                  }))
                );

                return (
                  <section key={block.id} className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badge.bg}`}>
                        {badge.label}
                      </span>
                    </div>

                    {block.title && (
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-2 mb-3">
                        {block.title}
                      </h2>
                    )}

                    <MarkdownContent
                      content={block.body}
                      className="text-sm md:text-[15px] leading-relaxed text-stone-800 font-serif"
                    />

                    {/* Evidence Drawer Trigger */}
                    {evidenceItems.length > 0 && (
                      <div className="mt-5 pt-3 border-t border-stone-100">
                        <EvidenceDrawer
                          claimStatement={relevantClaims[0]?.statement}
                          evidenceList={evidenceItems}
                        />
                      </div>
                    )}
                  </section>
                );
              })}

              <KnowledgeReconstruction />
            </div>
          )}

          {/* TAB 2: Exam Lenses */}
          {activeTab === 'EXAMS' && (
            <div>
              <ExamLensViewer examLenses={concept.examMappings as any} />
            </div>
          )}

          {/* TAB 3: Active Recall MCQs */}
          {activeTab === 'ACTIVE_RECALL' && (
            <div>
              <ActiveRecallViewer questions={concept.questions} />
            </div>
          )}

          {/* TAB 4: Multi-Tier Revision */}
          {activeTab === 'REVISION' && (
            <div>
              <RevisionViewer revisionUnits={concept.revisionUnits} />
            </div>
          )}

          {/* TAB 5: Sources & Claim Provenance */}
          {activeTab === 'EVIDENCE' && (
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
                <h3 className="font-serif font-bold text-base text-stone-900 mb-1">
                  Claim-Level Epistemic Provenance
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  Every canonical claim is bound to explicit source evidence and authoritative locators.
                </p>

                <div className="space-y-4 divide-y divide-stone-100">
                  {concept.claims.map((claim) => (
                    <div key={claim.id} className="pt-3 first:pt-0 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-stone-500">{claim.id}</span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">
                          {claim.confidence} Confidence
                        </span>
                      </div>
                      <div className="text-sm font-serif font-medium text-stone-800">
                        <MarkdownContent content={claim.statement} />
                      </div>
                      {claim.scopeConditions && (
                        <p className="text-xs text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                          Scope: {claim.scopeConditions}
                        </p>
                      )}
                      <div className="space-y-1 text-xs text-stone-600 bg-stone-50 p-2.5 rounded border border-stone-200">
                        {claim.evidence.map((ev) => (
                          <div key={ev.id} className="flex flex-col gap-0.5">
                            <span className="font-semibold text-stone-900">
                              📚 {ev.source.title} ({ev.source.authorityTier})
                            </span>
                            <span className="font-mono text-[11px] text-stone-500">
                              Locator: {ev.locator}
                            </span>
                            {ev.excerpt && (
                              <div className="italic text-stone-700 mt-0.5">
                                <MarkdownContent content={ev.excerpt} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: Conceptual Connections */}
          {activeTab === 'CONNECTIONS' && (
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
                <h3 className="font-serif font-bold text-base text-stone-900 mb-1">
                  Conceptual Cross-Connections
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  Traces how this concept interacts with other constitutional and economic doctrines.
                </p>

                {concept.outgoingConnections.length === 0 ? (
                  <p className="text-xs text-stone-500 italic">No direct outgoing cross-connections recorded.</p>
                ) : (
                  <div className="space-y-3">
                    {concept.outgoingConnections.map((conn) => (
                      <div key={conn.id} className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex flex-col justify-between gap-2">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-serif font-bold text-sm text-stone-900">
                              {concept.title} ➔ {conn.targetConcept.title}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-200 text-stone-700">
                              {conn.type.replace(/_/g, ' ')}
                            </span>
                          </div>
                          <MarkdownContent content={conn.explanation} className="text-xs text-stone-600 mt-1" />
                        </div>
                        <Link
                          href={`/concepts/${conn.targetConcept.slug}`}
                          className="text-xs font-semibold text-emerald-800 self-end hover:underline inline-flex items-center gap-1"
                        >
                          <span>Explore {conn.targetConcept.title}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bottom Previous / Next Concept Navigation Bar */}
          <div className="mt-10 pt-6 border-t border-stone-200 flex items-center justify-between gap-4">
            {prevConcept ? (
              <Link
                href={`/concepts/${prevConcept.slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-stone-200 hover:border-stone-400 rounded-xl shadow-xs text-left group transition-all"
              >
                <span className="text-stone-400 group-hover:-translate-x-0.5 transition-transform">←</span>
                <div>
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Previous Concept</div>
                  <div className="text-xs font-serif font-bold text-stone-900 group-hover:text-emerald-800 truncate max-w-[200px]">
                    {prevConcept.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextConcept ? (
              <Link
                href={`/concepts/${nextConcept.slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-stone-200 hover:border-stone-400 rounded-xl shadow-xs text-right group transition-all"
              >
                <div>
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Next Concept</div>
                  <div className="text-xs font-serif font-bold text-stone-900 group-hover:text-emerald-800 truncate max-w-[200px]">
                    {nextConcept.title}
                  </div>
                </div>
                <span className="text-stone-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
