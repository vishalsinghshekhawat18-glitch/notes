'use client';

import React, { useState } from 'react';
import { MarkdownContent } from '@/components/ui/markdown-content';

export interface ExamLensData {
  examSlug: string;
  examName: string;
  syllabusUnit: string;
  relevance: string;
  priority: string;
  requiredDepth?: string | null;
  questionStyle?: string | null;
  frequentTraps?: string | null;
  notes?: string | null;
}

interface ExamLensViewerProps {
  examLenses: ExamLensData[];
}

export function ExamLensViewer({ examLenses }: ExamLensViewerProps) {
  // Density-aware filter: keep lenses that offer genuine exam insights
  const substantiveLenses = (examLenses || []).filter(
    (lens) =>
      (lens.frequentTraps && lens.frequentTraps.trim().length >= 15) ||
      (lens.questionStyle && lens.questionStyle.trim().length >= 20) ||
      (lens.notes && lens.notes.trim().length >= 20) ||
      lens.priority === 'CRITICAL'
  );

  const [selectedSlug, setSelectedSlug] = useState<string>(
    substantiveLenses[0]?.examSlug || 'rpsc-ras'
  );

  // Content-density policy: suppress entire section if no substantive exam insight exists
  if (substantiveLenses.length === 0) return null;

  const currentLens =
    substantiveLenses.find((l) => l.examSlug === selectedSlug) || substantiveLenses[0];

  return (
    <div className="bg-amber-50/40 border border-amber-200/70 rounded-xl p-4 sm:p-5 space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-amber-200/60">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
            🎯 Target Exam Focus & Pitfalls
          </span>
        </div>

        {/* Tab Buttons (if multiple substantive exams exist) */}
        {substantiveLenses.length > 1 && (
          <div className="flex gap-1 bg-amber-100/60 p-0.5 rounded-lg border border-amber-200/60">
            {substantiveLenses.map((lens) => {
              const isActive = lens.examSlug === currentLens.examSlug;
              return (
                <button
                  key={lens.examSlug}
                  onClick={() => setSelectedSlug(lens.examSlug)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {lens.examName.split(' ')[0]} {lens.examSlug.toUpperCase().replace('-', ' ')}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Lens Content */}
      <div className="space-y-3 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 text-stone-700">
          <div className="font-semibold text-stone-900 text-xs sm:text-sm">
            {currentLens.examName} · <span className="font-normal font-mono text-[11px] text-stone-600">{currentLens.syllabusUnit}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span className="bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-semibold">
              {currentLens.priority} Priority
            </span>
          </div>
        </div>

        {currentLens.frequentTraps && (
          <div className="bg-amber-100/50 p-3 rounded-lg border border-amber-200 text-amber-950">
            <span className="font-bold block mb-0.5 text-xs text-amber-900">⚠️ High-Yield Trap / Confusion Point:</span>
            <MarkdownContent content={currentLens.frequentTraps} className="text-amber-950 text-xs leading-relaxed" />
          </div>
        )}

        {currentLens.questionStyle && (
          <div className="bg-white/80 p-2.5 rounded-lg border border-stone-200/80">
            <span className="font-semibold text-stone-900 block mb-0.5 text-[11px]">📝 Expected Question Pattern:</span>
            <MarkdownContent content={currentLens.questionStyle} className="text-stone-700 text-xs leading-relaxed" />
          </div>
        )}

        {currentLens.notes && (
          <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200 text-[11px] text-stone-600 font-mono">
            <MarkdownContent content={currentLens.notes} className="text-stone-600 text-[11px] font-mono" />
          </div>
        )}
      </div>
    </div>
  );
}
