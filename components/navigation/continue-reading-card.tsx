'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SavedPosition {
  subjectName: string;
  subjectSlug: string;
  topicTitle: string;
  topicSlug: string;
  conceptTitle: string;
  conceptSlug: string;
  url: string;
  timestamp: number;
}

export function ContinueReadingCard() {
  const [position, setPosition] = useState<SavedPosition | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('reading_hub_last_position');
      if (stored) {
        const parsed = JSON.parse(stored) as SavedPosition;
        if (parsed && parsed.url && parsed.topicTitle) {
          setPosition(parsed);
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  if (!position) return null;

  return (
    <div className="bg-[#ffffff] border border-[#e2dcd0] border-l-4 border-l-[#c25e2e] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs hover:border-[#c25e2e]/40 transition-colors animate-in fade-in duration-200">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-[#143227] uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#c25e2e] animate-pulse" />
          <span>▲ Resume Reading Trail</span>
          <span className="text-stone-300">•</span>
          <span className="text-stone-600 font-medium">{position.subjectName}</span>
        </div>
        <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
          {position.topicTitle}
        </h3>
        {position.conceptTitle && position.conceptTitle !== position.topicTitle && (
          <p className="text-xs text-stone-600 line-clamp-1 font-serif">
            <span className="text-stone-400 font-sans">Current waypoint:</span> {position.conceptTitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={position.url}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#143227] hover:bg-[#1f493b] text-[#f7f5f0] text-xs font-semibold rounded-lg shadow-xs transition-colors"
        >
          <span>Ascend to Waypoint</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
