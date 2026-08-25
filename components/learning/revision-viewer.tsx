'use client';

import React, { useState } from 'react';

export interface RevisionUnitData {
  id: string;
  type: string;
  content: string;
  priority: string;
}

interface RevisionViewerProps {
  revisionUnits: RevisionUnitData[];
}

export function RevisionViewer({ revisionUnits }: RevisionViewerProps) {
  const [selectedType, setSelectedType] = useState<string>(revisionUnits[0]?.type || 'ONE_MINUTE_RECALL');

  if (!revisionUnits || revisionUnits.length === 0) return null;

  const currentUnit = revisionUnits.find((u) => u.type === selectedType) || revisionUnits[0];

  return (
    <div className="my-8 p-5 bg-stone-50 border border-stone-300 rounded-lg">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200">
        <div>
          <h3 className="text-base font-semibold text-stone-900">
            ⚡ Efficient Revision & Retrieval Layers
          </h3>
          <p className="text-xs text-stone-500">
            Derived directly from canonical knowledge — zero note-shortening drift
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1 bg-stone-200 p-1 rounded-md">
          {revisionUnits.map((u) => {
            const isActive = u.type === selectedType;
            return (
              <button
                key={u.type}
                onClick={() => setSelectedType(u.type)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {u.type.replace(/_/g, ' ')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-4 rounded border border-stone-200 text-xs text-stone-800">
        <div className="whitespace-pre-line leading-relaxed font-sans">
          {currentUnit.content}
        </div>
      </div>
    </div>
  );
}
