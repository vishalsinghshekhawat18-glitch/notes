'use client';

import React, { useState } from 'react';

export interface EvidenceItem {
  id: string;
  sourceTitle: string;
  authorityTier: string;
  locator: string;
  excerpt?: string | null;
  evidentiarySupport: string;
}

interface EvidenceDrawerProps {
  claimStatement?: string;
  evidenceList: EvidenceItem[];
}

export function EvidenceDrawer({ claimStatement, evidenceList }: EvidenceDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!evidenceList || evidenceList.length === 0) return null;

  return (
    <div className="mt-2 text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-800 font-mono text-[11px] underline underline-offset-2 transition-colors cursor-pointer"
      >
        <span>{isOpen ? '▼ Hide Evidence & Provenance' : '▶ Why do we say this? (Inspect Evidence)'}</span>
        <span className="bg-stone-200 text-stone-700 px-1.5 py-0.2 rounded-full text-[10px]">
          {evidenceList.length} source{evidenceList.length > 1 ? 's' : ''}
        </span>
      </button>

      {isOpen && (
        <div className="mt-2.5 p-3.5 bg-stone-100 border border-stone-300 rounded-md space-y-3 font-sans text-stone-800 animate-in fade-in-50 duration-150">
          {claimStatement && (
            <div className="text-[12px] font-medium text-stone-900 pb-2 border-b border-stone-200">
              <span className="text-stone-500 font-mono text-[10px] uppercase block">Canonical Proposition</span>
              &ldquo;{claimStatement}&rdquo;
            </div>
          )}

          <div className="space-y-2.5">
            {evidenceList.map((ev, idx) => (
              <div key={ev.id || idx} className="bg-white p-2.5 rounded border border-stone-200 text-[12px]">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <span className="font-semibold text-stone-900">{ev.sourceTitle}</span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                      {ev.authorityTier}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                      {ev.evidentiarySupport}
                    </span>
                  </div>
                </div>

                <div className="text-stone-600 font-mono text-[11px] mb-1">
                  📍 Locator: <strong>{ev.locator}</strong>
                </div>

                {ev.excerpt && (
                  <div className="bg-stone-50 p-2 rounded text-stone-700 italic border-l-2 border-stone-400 text-[11px]">
                    &ldquo;{ev.excerpt}&rdquo;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
