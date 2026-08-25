'use client';

import React, { useState } from 'react';
import { DepthSelector } from './depth-selector';
import { EvidenceDrawer, EvidenceItem } from './evidence-drawer';
import { ExamLensViewer, ExamLensData } from './exam-lens-viewer';
import { ActiveRecallViewer, QuestionData } from './active-recall-viewer';
import { RevisionViewer, RevisionUnitData } from './revision-viewer';
import { KnowledgeReconstruction } from './knowledge-reconstruction';

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
  importance: string;
  confidence: string;
  scopeConditions?: string | null;
  evidence: Array<{
    id: string;
    locator: string;
    excerpt?: string | null;
    evidentiarySupport: string;
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

export interface ConceptLearningViewProps {
  concept: {
    id: string;
    title: string;
    slug: string;
    shortDefinition: string;
    difficulty: string;
    status: string;
    topic: {
      title: string;
      subject: {
        name: string;
        domain: {
          name: string;
        };
      };
    };
    contentBlocks: ConceptBlock[];
    claims: ConceptClaim[];
    examMappings: Array<{
      examSlug: string;
      examName: string;
      syllabusUnit: string;
      relevance: string;
      priority: string;
      requiredDepth: string;
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
  const [depthLevel, setDepthLevel] = useState<number>(2); // Default to Level 2 (Understand basic idea)
  const [activeTab, setActiveTab] = useState<'READING' | 'EXAMS' | 'ACTIVE_RECALL' | 'REVISION' | 'EVIDENCE'>('READING');

  // Filter content blocks by depth level
  const displayedBlocks = concept.contentBlocks.filter((b) => {
    if (depthLevel === 1) {
      return b.type === 'CORE_IDEA';
    }
    if (depthLevel === 2) {
      return b.type === 'CORE_IDEA' || b.type === 'WHY_IT_MATTERS';
    }
    if (depthLevel === 3) {
      return b.type === 'CORE_IDEA' || b.type === 'WHY_IT_MATTERS' || b.type === 'MECHANISM';
    }
    if (depthLevel === 4) {
      return (
        b.type === 'CORE_IDEA' ||
        b.type === 'WHY_IT_MATTERS' ||
        b.type === 'MECHANISM' ||
        b.type === 'TIMELINE' ||
        b.type === 'COMPARISON'
      );
    }
    return true; // Levels 5 and 6 show all blocks
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-stone-900 font-sans">
      {/* Breadcrumb Header */}
      <div className="text-xs font-mono text-stone-500 mb-2 flex items-center gap-1.5">
        <span>{concept.topic.subject.domain.name}</span>
        <span>›</span>
        <span>{concept.topic.subject.name}</span>
        <span>›</span>
        <span className="text-stone-700 font-semibold">{concept.topic.title}</span>
      </div>

      {/* Main Title & Canonical Status */}
      <div className="border-b border-stone-300 pb-5 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="bg-emerald-100 text-emerald-900 font-mono text-[11px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
            Canonical Knowledge Base
          </span>
          <span className="text-xs font-mono text-stone-500">
            Difficulty: {concept.difficulty}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 leading-tight">
          {concept.title}
        </h1>
        <p className="text-sm md:text-base text-stone-700 font-serif italic mt-3 leading-relaxed bg-stone-100 p-3.5 rounded border-l-4 border-stone-500">
          &ldquo;{concept.shortDefinition}&rdquo;
        </p>
      </div>

      {/* Depth Ramp Selector */}
      <DepthSelector currentLevel={depthLevel} onSelectLevel={setDepthLevel} />

      {/* Mode Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-2 mb-6">
        {[
          { id: 'READING', label: '📖 Guided Reading' },
          { id: 'EXAMS', label: `🎯 Exam Lenses (${concept.examMappings.length})` },
          { id: 'ACTIVE_RECALL', label: `🧠 Active Recall (${concept.questions.length})` },
          { id: 'REVISION', label: `⚡ Revision Units (${concept.revisionUnits.length})` },
          { id: 'EVIDENCE', label: `🔍 Provenance & Claims (${concept.claims.length})` },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
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

      {/* Tab View: Guided Reading */}
      {activeTab === 'READING' && (
        <div className="space-y-8">
          {displayedBlocks.map((block) => {
            // Find any linked claims for this block type
            const relevantClaims = concept.claims.filter((c) => {
              if (block.type === 'CORE_IDEA' && c.claimType === 'LEGAL_PROVISION') return true;
              if (block.type === 'MECHANISM' && c.claimType === 'RULE') return true;
              if (block.type === 'TIMELINE' && c.claimType === 'PRINCIPLE') return true;
              if (block.type === 'EXCEPTION' && (c.claimType === 'EXCEPTION' || c.claimType === 'LEGAL_PROVISION')) return true;
              return false;
            });

            const evidenceItems: EvidenceItem[] = relevantClaims.flatMap((c) =>
              c.evidence.map((e) => ({
                id: e.id,
                sourceTitle: e.source.title,
                authorityTier: e.source.authorityTier,
                locator: e.locator,
                excerpt: e.excerpt,
                evidentiarySupport: e.evidentiarySupport,
              }))
            );

            return (
              <section key={block.id} className="prose prose-stone max-w-none">
                {block.title && (
                  <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-200 pb-1.5 mb-3">
                    {block.title}
                  </h2>
                )}
                <div className="text-sm md:text-[15px] leading-relaxed text-stone-800 whitespace-pre-line font-serif">
                  {block.body}
                </div>

                {/* Evidence Drawer */}
                {evidenceItems.length > 0 && (
                  <EvidenceDrawer
                    claimStatement={relevantClaims[0]?.statement}
                    evidenceList={evidenceItems}
                  />
                )}
              </section>
            );
          })}

          {/* Meaningful Cross-Domain Connections */}
          {concept.outgoingConnections && concept.outgoingConnections.length > 0 && (
            <div className="my-8 p-4 bg-stone-100 rounded-lg border border-stone-200">
              <h3 className="text-sm font-semibold text-stone-900 mb-2">
                🔗 Conceptual Cross-Connections
              </h3>
              <div className="space-y-2">
                {concept.outgoingConnections.map((conn) => (
                  <div key={conn.id} className="text-xs bg-white p-2.5 rounded border border-stone-200">
                    <span className="font-semibold text-stone-900 block">
                      Article 14 ➔ {conn.targetConcept.title} ({conn.type.replace(/_/g, ' ')})
                    </span>
                    <p className="text-stone-600 mt-1">{conn.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guided Knowledge Reconstruction Prompt */}
          <KnowledgeReconstruction />
        </div>
      )}

      {/* Tab View: Exam Lenses */}
      {activeTab === 'EXAMS' && (
        <div>
          <ExamLensViewer examLenses={concept.examMappings as any} />
        </div>
      )}

      {/* Tab View: Active Recall */}
      {activeTab === 'ACTIVE_RECALL' && (
        <div>
          <ActiveRecallViewer questions={concept.questions} />
        </div>
      )}

      {/* Tab View: Revision */}
      {activeTab === 'REVISION' && (
        <div>
          <RevisionViewer revisionUnits={concept.revisionUnits} />
        </div>
      )}

      {/* Tab View: Forensic Claims & Evidence */}
      {activeTab === 'EVIDENCE' && (
        <div className="space-y-4 my-6">
          <div className="pb-2 border-b border-stone-200">
            <h3 className="text-base font-semibold text-stone-900">
              🔍 Atomic Claims & Forensic Evidence Provenance
            </h3>
            <p className="text-xs text-stone-500">
              Direct audit trail linking every canonical proposition to primary constitutional and judicial sources.
            </p>
          </div>

          <div className="space-y-3">
            {concept.claims.map((claim, idx) => (
              <div key={claim.id || idx} className="bg-white p-4 rounded border border-stone-200 text-xs">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[10px] uppercase font-semibold bg-stone-100 text-stone-800 px-2 py-0.5 rounded">
                    {claim.claimType}
                  </span>
                  <div className="font-mono text-[10px] flex items-center gap-1.5">
                    <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                      {claim.confidence}
                    </span>
                    <span className="bg-stone-200 text-stone-700 px-1.5 py-0.5 rounded">
                      {claim.importance}
                    </span>
                  </div>
                </div>

                <p className="font-medium text-stone-900 text-sm mb-2">
                  &ldquo;{claim.statement}&rdquo;
                </p>

                {claim.scopeConditions && (
                  <div className="text-stone-600 font-mono text-[11px] mb-2">
                    Scope: {claim.scopeConditions}
                  </div>
                )}

                {/* Evidence List */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100">
                  <span className="text-stone-400 font-mono text-[10px] uppercase block">
                    Attached Evidence ({claim.evidence.length})
                  </span>
                  {claim.evidence.map((ev, eIdx) => (
                    <div key={ev.id || eIdx} className="bg-stone-50 p-2 rounded text-[11px] border border-stone-200">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-stone-800">{ev.source.title}</span>
                        <span className="text-emerald-700 font-mono text-[10px]">{ev.evidentiarySupport}</span>
                      </div>
                      <div className="text-stone-500 font-mono text-[10px]">Locator: {ev.locator}</div>
                      {ev.excerpt && (
                        <div className="text-stone-700 italic mt-1">&ldquo;{ev.excerpt}&rdquo;</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
