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
    <div className="bg-emerald-900/5 border border-emerald-800/20 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
      <div className="space-y-0.5">
        <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-emerald-800 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
          <span>Resume Reading</span>
          <span className="text-stone-400">•</span>
          <span className="text-stone-600 font-normal">{position.subjectName}</span>
        </div>
        <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
          {position.topicTitle}
        </h3>
        {position.conceptTitle && position.conceptTitle !== position.topicTitle && (
          <p className="text-xs text-stone-600 line-clamp-1">
            <span className="text-stone-400">Current section:</span> {position.conceptTitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={position.url}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
        >
          <span>Continue Reading</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
