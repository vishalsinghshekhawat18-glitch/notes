'use client';

import React, { useState } from 'react';
import { MarkdownContent } from '@/components/ui/markdown-content';

export interface QuestionData {
  id: string;
  difficulty: string;
  stem: string;
  options?: string | null;
  correctAnswer: string;
  explanation: string;
  trapExplanation?: string | null;
}

interface ActiveRecallViewerProps {
  questions: QuestionData[];
}

export function ActiveRecallViewer({ questions }: ActiveRecallViewerProps) {
  // Density-aware filter: keep questions that test substantive distinctions/mechanisms
  const substantiveQuestions = (questions || []).filter(
    (q) =>
      (q.stem && q.stem.trim().length >= 30) &&
      ((q.explanation && q.explanation.trim().length >= 25) ||
       (q.trapExplanation && q.trapExplanation.trim().length >= 15))
  );

  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  // Content-density policy: suppress section if no substantive question exists
  if (substantiveQuestions.length === 0) return null;

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-emerald-50/20 border border-emerald-200/60 rounded-xl p-4 sm:p-5 space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-emerald-200/50">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900">
          🧠 Active Recall Check
        </span>
        <span className="text-[11px] font-mono text-stone-500">
          Attempt mentally before revealing explanation
        </span>
      </div>

      <div className="space-y-3.5">
        {substantiveQuestions.map((q, idx) => {
          const isRevealed = !!revealedIds[q.id];
          let parsedOptions: any[] = [];
          try {
            if (q.options) {
              const raw = JSON.parse(q.options);
              if (Array.isArray(raw)) {
                parsedOptions = raw;
              }
            }
          } catch {
            parsedOptions = [];
          }

          return (
            <div
              key={q.id || idx}
              className="bg-white p-3.5 sm:p-4 rounded-lg border border-stone-200/80 text-xs space-y-2.5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-semibold uppercase bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200">
                  {q.difficulty.replace(/_/g, ' ')}
                </span>
                {substantiveQuestions.length > 1 && (
                  <span className="text-stone-400 font-mono text-[10px]">
                    Question {idx + 1} of {substantiveQuestions.length}
                  </span>
                )}
              </div>

              <div>
                <MarkdownContent
                  content={q.stem}
                  className="font-medium text-stone-900 text-xs sm:text-sm leading-relaxed"
                />
              </div>

              {/* Options if Multiple Choice */}
              {parsedOptions.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  {parsedOptions.map((opt: any, optIdx: number) => {
                    const optKey = typeof opt === 'string' ? String.fromCharCode(65 + optIdx) : opt.key || String.fromCharCode(65 + optIdx);
                    const optText = typeof opt === 'string' ? opt : opt.text || opt.label;
                    return (
                      <div
                        key={optIdx}
                        className="flex items-start gap-2 p-2 rounded-md bg-stone-50/80 border border-stone-200/60 text-stone-800 text-[11px] sm:text-xs"
                      >
                        <span className="font-mono font-bold text-stone-500 shrink-0">{optKey}.</span>
                        <MarkdownContent content={optText} className="text-stone-800 text-[11px] sm:text-xs" />
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Reveal Explanation Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 font-mono text-[11px] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{isRevealed ? '▲ Hide Explanation' : '▼ Reveal Answer & Doctrine'}</span>
                </button>

                {isRevealed && (
                  <div className="mt-2.5 p-3 rounded-md bg-stone-50 border border-stone-300 space-y-2 animate-in fade-in-50 duration-150">
                    <div className="font-mono text-[11px] font-bold text-emerald-800">
                      ✓ Correct Answer: {q.correctAnswer}
                    </div>

                    <div className="text-stone-700 text-xs">
                      <MarkdownContent content={q.explanation} className="text-stone-700 text-xs leading-relaxed" />
                    </div>

                    {q.trapExplanation && (
                      <div className="mt-2 p-2 bg-amber-50 rounded border border-amber-200 text-amber-900 text-[11px]">
                        <span className="font-bold block mb-0.5">⚠️ Examiner Trap Pattern:</span>
                        <MarkdownContent content={q.trapExplanation} className="text-amber-900 text-[11px]" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
