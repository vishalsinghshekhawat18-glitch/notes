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
  type?: string | null;
  isPYQ?: boolean;
  pyqYear?: number | null;
  pyqPaper?: string | null;
  pyqStage?: string | null;
  pyqMarks?: number | null;
  pyqQuestionNumber?: number | null;
  examinerTrapPattern?: string | null;
}

interface ActiveRecallViewerProps {
  questions: QuestionData[];
}

export function ActiveRecallViewer({ questions }: ActiveRecallViewerProps) {
  // Density-aware filter: keep questions that test substantive distinctions/mechanisms
  const substantiveQuestions = (questions || []).filter(
    (q) =>
      (q.stem && q.stem.trim().length >= 25) &&
      ((q.explanation && q.explanation.trim().length >= 20) ||
       (q.trapExplanation && q.trapExplanation.trim().length >= 15) ||
       (q.correctAnswer && q.correctAnswer.trim().length >= 15))
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
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900">
            🧠 Active Recall & PYQ Vault
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300">
            {substantiveQuestions.length} Questions
          </span>
        </div>
        <span className="text-[11px] font-mono text-stone-500">
          Attempt mentally or draft answer before revealing solution
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

          const isMains = q.pyqStage?.toUpperCase() === 'MAINS' || q.type?.startsWith('DESCRIPTIVE');
          const isObjective = parsedOptions.length > 0;

          // Exam badge styling
          const isRPSC = q.pyqPaper?.toUpperCase().includes('RPSC') || q.pyqPaper?.toUpperCase().includes('RAS');
          const isUPSC = q.pyqPaper?.toUpperCase().includes('UPSC');

          return (
            <div
              key={q.id || idx}
              className={`p-3.5 sm:p-4 rounded-lg border text-xs space-y-2.5 ${
                q.isPYQ ? 'bg-amber-50/20 border-amber-200/80' : 'bg-white border-stone-200/80'
              }`}
            >
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 pb-1 border-b border-stone-100">
                <div className="flex flex-wrap items-center gap-1.5">
                  {/* PYQ Badge */}
                  {q.isPYQ && (
                    <span
                      className={`font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                        isRPSC
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : isUPSC
                          ? 'bg-blue-100 text-blue-900 border-blue-300'
                          : 'bg-purple-100 text-purple-900 border-purple-300'
                      }`}
                    >
                      🏛️ {q.pyqPaper || 'PYQ'} {q.pyqYear ? `'${String(q.pyqYear).slice(-2)}` : ''}
                      {q.pyqStage ? ` • ${q.pyqStage}` : ''}
                    </span>
                  )}

                  {/* Marks & Format Badge */}
                  {isMains && (
                    <span className="font-mono text-[10px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded border border-rose-200">
                      ✍️ {q.pyqMarks ? `${q.pyqMarks} Marks` : 'Mains Descriptive'}
                      {q.pyqMarks === 2 ? ' (~15-20 words)' : q.pyqMarks === 5 ? ' (~50 words)' : q.pyqMarks === 10 ? ' (~100 words)' : ''}
                    </span>
                  )}

                  <span className="font-mono text-[10px] font-semibold uppercase bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200">
                    {q.difficulty.replace(/_/g, ' ')}
                  </span>
                </div>

                {substantiveQuestions.length > 1 && (
                  <span className="text-stone-400 font-mono text-[10px]">
                    Q{idx + 1} of {substantiveQuestions.length}
                  </span>
                )}
              </div>

              {/* Question Stem */}
              <div>
                <MarkdownContent
                  content={q.stem}
                  className="font-medium text-stone-900 text-xs sm:text-sm leading-relaxed"
                />
              </div>

              {/* Options if Multiple Choice */}
              {isObjective && (
                <div className="space-y-1.5 pt-1">
                  {parsedOptions.map((opt: any, optIdx: number) => {
                    const optKey = typeof opt === 'string' ? String.fromCharCode(65 + optIdx) : opt.key || String.fromCharCode(65 + optIdx);
                    const optText = typeof opt === 'string' ? opt : opt.text || opt.label;
                    return (
                      <div
                        key={optIdx}
                        className="flex items-start gap-2 p-2 rounded-md bg-stone-50/80 border border-stone-200/60 text-stone-800 text-[11px] sm:text-xs hover:bg-stone-100/80 transition-colors"
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
                  className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isRevealed
                      ? 'bg-stone-200 text-stone-900'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                  }`}
                >
                  <span>
                    {isRevealed
                      ? '▲ Hide Solution'
                      : isMains
                      ? '▼ Reveal Model Answer & Marking Scheme'
                      : '▼ Reveal Answer & Solution Doctrine'}
                  </span>
                </button>

                {isRevealed && (
                  <div className="mt-2.5 p-3.5 rounded-md bg-stone-50 border border-stone-300 space-y-2.5 animate-in fade-in-50 duration-150">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-1.5">
                      <div className="font-mono text-[11px] font-bold text-emerald-800">
                        {isMains ? '📋 Canonical Model Answer:' : `✓ Correct Answer: ${q.correctAnswer}`}
                      </div>
                      {isMains && q.pyqMarks && (
                        <span className="text-[10px] font-mono text-stone-500">
                          Target word limit: {q.pyqMarks === 2 ? '15–20 words' : q.pyqMarks === 5 ? '50 words' : '100 words'}
                        </span>
                      )}
                    </div>

                    <div className="text-stone-700 text-xs">
                      <MarkdownContent content={q.explanation} className="text-stone-700 text-xs leading-relaxed space-y-1.5" />
                    </div>

                    {(q.trapExplanation || q.examinerTrapPattern) && (
                      <div className="mt-2 p-2.5 bg-amber-50 rounded border border-amber-200 text-amber-900 text-[11px] space-y-1">
                        <span className="font-bold block flex items-center gap-1">
                          <span>⚠️ Examiner Trap / Evaluation Pitfall:</span>
                        </span>
                        <MarkdownContent
                          content={q.trapExplanation || q.examinerTrapPattern || ''}
                          className="text-amber-900 text-[11px] leading-relaxed"
                        />
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
