'use client';

import React, { useState } from 'react';

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
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  if (!questions || questions.length === 0) return null;

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="my-8 p-5 bg-stone-50 border border-stone-300 rounded-lg">
      <div className="mb-4 pb-2 border-b border-stone-200">
        <h3 className="text-base font-semibold text-stone-900">
          🧠 Active Recall & Self-Assessment
        </h3>
        <p className="text-xs text-stone-500">
          Attempt each question mentally before revealing the verified doctrinal explanation.
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((q, idx) => {
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
            <div key={q.id || idx} className="bg-white p-4 rounded-md border border-stone-200 text-xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] font-semibold uppercase bg-stone-200 text-stone-700 px-2 py-0.5 rounded">
                  {q.difficulty.replace(/_/g, ' ')}
                </span>
                <span className="text-stone-400 font-mono text-[10px]">
                  Question {idx + 1} of {questions.length}
                </span>
              </div>

              <div className="font-medium text-stone-900 text-sm leading-relaxed mb-3 whitespace-pre-line">
                {q.stem}
              </div>

              {parsedOptions.length > 0 && (
                <div className="space-y-1.5 mb-3 pl-2">
                  {parsedOptions.map((opt, oIdx) => {
                    const optText =
                      typeof opt === 'string'
                        ? opt
                        : opt?.text || opt?.statement || JSON.stringify(opt);
                    return (
                      <div key={oIdx} className="text-stone-700 font-sans text-xs flex items-start gap-2">
                        <span className="font-mono font-semibold text-stone-400">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        <span>{optText}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="pt-2 border-t border-stone-100">
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium rounded text-xs transition-colors cursor-pointer"
                >
                  {isRevealed ? '▲ Hide Answer & Explanation' : '▼ Reveal Answer & Explanation'}
                </button>

                {isRevealed && (
                  <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-950 space-y-2 animate-in fade-in-50 duration-150">
                    <div>
                      <span className="font-semibold text-emerald-900 block text-xs">
                        ✔️ Correct Answer:
                      </span>
                      <p className="font-medium mt-0.5">{q.correctAnswer}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-emerald-900 block text-xs">
                        📖 Doctrinal Explanation:
                      </span>
                      <p className="text-stone-800 leading-relaxed mt-0.5">{q.explanation}</p>
                    </div>

                    {q.trapExplanation && (
                      <div className="pt-1.5 border-t border-emerald-200 text-amber-900 text-[11px]">
                        <strong>⚠️ Examiner Trap Insight:</strong> {q.trapExplanation}
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
