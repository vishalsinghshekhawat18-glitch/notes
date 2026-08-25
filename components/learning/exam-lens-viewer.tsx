'use client';

import React, { useState } from 'react';

export interface ExamLensData {
  examSlug: string;
  examName: string;
  syllabusUnit: string;
  relevance: string;
  priority: string;
  requiredDepth: string;
  questionStyle?: string | null;
  frequentTraps?: string | null;
  notes?: string | null;
}

interface ExamLensViewerProps {
  examLenses: ExamLensData[];
}

export function ExamLensViewer({ examLenses }: ExamLensViewerProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(examLenses[0]?.examSlug || 'rpsc-ras');

  if (!examLenses || examLenses.length === 0) return null;

  const currentLens = examLenses.find((l) => l.examSlug === selectedSlug) || examLenses[0];

  return (
    <div className="my-8 p-5 bg-stone-50 border border-stone-300 rounded-lg">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200">
        <div>
          <h3 className="text-base font-semibold text-stone-900">
            🎯 Target Examination Lenses
          </h3>
          <p className="text-xs text-stone-500">
            One canonical knowledge base — calibrated for distinct examination requirements
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-1 bg-stone-200 p-1 rounded-md">
          {examLenses.map((lens) => {
            const isActive = lens.examSlug === selectedSlug;
            return (
              <button
                key={lens.examSlug}
                onClick={() => setSelectedSlug(lens.examSlug)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {lens.examName.split(' ')[0]} {lens.examSlug.toUpperCase().replace('-', ' ')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lens Content */}
      <div className="space-y-3.5 text-xs font-sans">
        <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-3 rounded border border-stone-200">
          <div>
            <span className="font-semibold text-stone-900 text-sm block">{currentLens.examName}</span>
            <span className="text-stone-500 font-mono text-[11px]">{currentLens.syllabusUnit}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-semibold">
              {currentLens.priority}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              {currentLens.requiredDepth}
            </span>
          </div>
        </div>

        {currentLens.questionStyle && (
          <div className="bg-white p-3 rounded border border-stone-200">
            <span className="font-semibold text-stone-900 block mb-1">📝 Expected Question Pattern:</span>
            <p className="text-stone-700 leading-relaxed">{currentLens.questionStyle}</p>
          </div>
        )}

        {currentLens.frequentTraps && (
          <div className="bg-amber-50 p-3 rounded border border-amber-200 text-amber-900">
            <span className="font-semibold block mb-1">⚠️ High-Yield Traps to Avoid:</span>
            <p className="leading-relaxed">{currentLens.frequentTraps}</p>
          </div>
        )}

        {currentLens.notes && (
          <div className="bg-stone-100 p-2.5 rounded border border-stone-200 text-[11px] text-stone-600 font-mono whitespace-pre-line">
            {currentLens.notes}
          </div>
        )}
      </div>
    </div>
  );
}
