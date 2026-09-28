'use client';

import React from 'react';
import { MarkdownContent } from '@/components/ui/markdown-content';

export interface RevisionUnitData {
  id: string;
  type: string;
  content: string;
  priority: string;
}

interface RevisionViewerProps {
  revisionUnits: RevisionUnitData[];
  compact?: boolean;
}

export function RevisionViewer({ revisionUnits, compact = false }: RevisionViewerProps) {
  // Density-aware filter: keep units with genuine revision content
  const substantiveUnits = (revisionUnits || []).filter(
    (u) =>
      u.content &&
      u.content.trim().length >= 25 &&
      u.type !== 'FLASH_30S' &&
      u.type !== 'THIRTY_SECOND_FLASH' &&
      !u.type.includes('15_SEC') &&
      !u.type.includes('AXIOM')
  );

  // Content-density policy: suppress if no substantive revision content exists
  if (substantiveUnits.length === 0) return null;

  // Single unified revision: prioritize comprehensive Architecture map, fallback to summary
  const bestUnit =
    substantiveUnits.find((u) => u.type === 'ARCHITECTURE_5M' || u.type === 'FIVE_MINUTE_MAP') ||
    substantiveUnits.find((u) => u.type === 'SUMMARY_2M' || u.type === 'TWO_MINUTE_SUMMARY') ||
    substantiveUnits[0];

  return (
    <div className="bg-stone-50/90 border border-stone-200/90 rounded-xl p-4 sm:p-5 space-y-2.5">
      <div className="flex items-center justify-between pb-2 border-b border-stone-200/70">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
          📌 Quick Concept Revision
        </span>
        <span className="text-[11px] font-mono text-stone-500">
          Key Takeaway
        </span>
      </div>

      <div className="bg-white p-3.5 sm:p-4 rounded-lg border border-stone-200/80 text-xs sm:text-sm text-stone-800">
        <MarkdownContent
          content={bestUnit.content}
          className="text-xs sm:text-[13px] leading-relaxed font-serif"
        />
      </div>
    </div>
  );
}
