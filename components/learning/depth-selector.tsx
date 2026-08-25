'use client';

import React from 'react';

export interface DepthLevel {
  level: number;
  name: string;
  tagline: string;
}

const DEPTH_LEVELS: DepthLevel[] = [
  { level: 1, name: 'Level 1: Beginner', tagline: 'I have never studied Article 14' },
  { level: 2, name: 'Level 2: Basic Constitutional Idea', tagline: 'The core guarantee & why formal sameness fails' },
  { level: 3, name: 'Level 3: Reasonable Classification', tagline: 'Intelligible differentia & rational nexus' },
  { level: 4, name: 'Level 4: Judicial Evolution', tagline: '1952 Anwar Ali → 1974 Royappa → 2017 Shayara Bano' },
  { level: 5, name: 'Level 5: Exam Application & Traps', tagline: 'Immunities (Art 361), Art 31C limits & traps' },
  { level: 6, name: 'Level 6: Full Doctrinal Synthesis', tagline: 'Complete forensic depth with evidence provenance' },
];

interface DepthSelectorProps {
  currentLevel: number;
  onSelectLevel: (level: number) => void;
}

export function DepthSelector({ currentLevel, onSelectLevel }: DepthSelectorProps) {
  return (
    <div className="bg-stone-100 border border-stone-200 rounded-lg p-3 my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
          Learner Depth Ramp
        </span>
        <span className="text-xs text-stone-500 font-mono">
          Level {currentLevel} of 6
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-1.5">
        {DEPTH_LEVELS.map((dl) => {
          const isActive = currentLevel === dl.level;
          return (
            <button
              key={dl.level}
              onClick={() => onSelectLevel(dl.level)}
              className={`text-left px-2.5 py-2 rounded text-xs transition-colors border ${
                isActive
                  ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <div className="font-medium truncate">{dl.name.split(':')[0]}</div>
              <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>
                {dl.name.split(':')[1] || dl.tagline}
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-[12px] text-stone-600 mt-2 px-1">
        💡 <strong>Current Focus:</strong> {DEPTH_LEVELS[currentLevel - 1].tagline}
      </p>
    </div>
  );
}
