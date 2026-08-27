'use client';

import React, { useState } from 'react';
import { SearchDialog } from './search-dialog';

export function GlobalSearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-400 rounded-xl shadow-xs transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center gap-3 text-stone-500 group-hover:text-stone-700">
            <svg className="w-4 h-4 text-emerald-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs sm:text-sm text-stone-500 font-sans">
              Search across all Subjects, Topics, Statutory Sections & Doctrines...
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-stone-400 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-md">
            <span>⌘K</span>
            <span className="text-stone-300">/</span>
            <span>Ctrl+K</span>
          </div>
        </button>
      </div>

      <SearchDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
