'use client';

import React, { useState } from 'react';

interface PromptItem {
  prompt: string;
  hint: string;
}

const RECONSTRUCTION_PROMPTS: PromptItem[] = [
  {
    prompt: '1. What does Article 14 literally guarantee and who does it protect?',
    hint: 'Keywords: "Any person" (citizens + foreigners + legal entities), equality before law (UK) + equal protection (US).',
  },
  {
    prompt: '2. Why does Article 14 permit differential treatment rather than demanding mathematical sameness?',
    hint: 'Keywords: Substantive vs formal equality, equal treatment among equals, treating unequals identically produces injustice.',
  },
  {
    prompt: '3. What are the two mandatory prongs of the Reasonable Classification test (*Anwar Ali Sarkar, 1952*)?',
    hint: 'Keywords: Intelligible Differentia (distinguishing feature) + Rational Nexus (logical relation to statutory purpose).',
  },
  {
    prompt: '4. How did Article 14 evolve from 1952 to 1974 (*E.P. Royappa*) and 2017 (*Shayara Bano*)?',
    hint: 'Keywords: Shift to dynamic non-arbitrariness as an overarching umbrella, manifest arbitrariness striking down legislation.',
  },
  {
    prompt: '5. What are the critical qualifications regarding Article 361 and Article 31C?',
    hint: 'Keywords: Art 361 = procedural immunity for office of President/Governor (state acts remain reviewable); Art 31C = strictly limited to 39(b)/(c) via Minerva Mills (1980).',
  },
];

export function KnowledgeReconstruction() {
  const [openHints, setOpenHints] = useState<Record<number, boolean>>({});

  const toggleHint = (idx: number) => {
    setOpenHints((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="my-8 p-5 bg-stone-100 border border-stone-300 rounded-lg">
      <div className="mb-4 pb-2 border-b border-stone-200">
        <h3 className="text-base font-semibold text-stone-900">
          🎯 Knowledge Reconstruction Self-Test
        </h3>
        <p className="text-xs text-stone-600">
          Close your notes. Can you mentally answer these 5 foundational prompts in your own words?
        </p>
      </div>

      <div className="space-y-3">
        {RECONSTRUCTION_PROMPTS.map((item, idx) => {
          const isHintOpen = !!openHints[idx];
          return (
            <div key={idx} className="bg-white p-3.5 rounded border border-stone-200 text-xs">
              <div className="font-medium text-stone-900 mb-2">
                {item.prompt}
              </div>

              <div>
                <button
                  onClick={() => toggleHint(idx)}
                  className="text-stone-500 hover:text-stone-800 font-mono text-[11px] underline cursor-pointer"
                >
                  {isHintOpen ? 'Hide Structural Hint' : 'Show Structural Hint'}
                </button>

                {isHintOpen && (
                  <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-amber-900 text-[11px] font-mono animate-in fade-in-50 duration-150">
                    💡 {item.hint}
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
