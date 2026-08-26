'use client';

import React, { useState } from 'react';
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
    (u) => u.content && u.content.trim().length >= 25
  );

  const [selectedType, setSelectedType] = useState<string>(
    substantiveUnits[0]?.type || 'ONE_MINUTE_RECALL'
  );

  // Content-density policy: suppress if no substantive revision content exists
  if (substantiveUnits.length === 0) return null;

  const currentUnit =
    substantiveUnits.find((u) => u.type === selectedType) || substantiveUnits[0];

  const formatUnitType = (type: string) => {
    switch (type) {
      case 'FLASH_30S':
      case 'THIRTY_SECOND_FLASH':
        return '⚡ 30-Sec Flash';
      case 'SUMMARY_2M':
      case 'TWO_MINUTE_SUMMARY':
      case 'ONE_MINUTE_RECALL':
        return '⏱️ 2-Min Summary';
      case 'ARCHITECTURE_5M':
      case 'FIVE_MINUTE_MAP':
        return '🏛️ 5-Min Architecture';
      default:
        return type.replace(/_/g, ' ');
    }
  };

  return (
    <div className="bg-stone-50/80 border border-stone-200/90 rounded-xl p-4 sm:p-5 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-stone-200/70">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
          ⚡ Key Revision & Architecture
        </div>

        {/* Tab Switcher (if multiple tiers exist) */}
        {substantiveUnits.length > 1 && (
          <div className="flex flex-wrap gap-1 bg-stone-200/70 p-0.5 rounded-lg">
            {substantiveUnits.map((u) => {
              const isActive = u.type === currentUnit.type;
              return (
                <button
                  key={u.type}
                  onClick={() => setSelectedType(u.type)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {formatUnitType(u.type)}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white p-3.5 sm:p-4 rounded-lg border border-stone-200/80 text-xs sm:text-sm text-stone-800">
        <MarkdownContent
          content={currentUnit.content}
          className="text-xs sm:text-[13px] leading-relaxed font-serif"
        />
      </div>
    </div>
  );
}
