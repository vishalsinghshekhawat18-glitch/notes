'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchDialog } from './search-dialog';

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#f7f5f0]/90 backdrop-blur-md border-b border-[#e5dfd3] shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-[#143227] text-[#f7f5f0] flex items-center justify-center font-bold text-xs shadow-xs group-hover:bg-[#c25e2e] transition-colors">
                ▲
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-stone-900 tracking-tight text-base leading-tight group-hover:text-[#143227] transition-colors">
                  Mind of Aravalli
                </span>
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                  Reading Hub • Ridge Library
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-4 text-xs font-medium text-stone-600">
              <Link
                href="/"
                className="hover:text-stone-900 transition-colors"
              >
                Shelves
              </Link>
              <Link
                href="/subjects/indian-polity"
                className="hover:text-stone-900 transition-colors"
              >
                Polity
              </Link>
              <Link
                href="/subjects/indian-economy"
                className="hover:text-stone-900 transition-colors"
              >
                Economy
              </Link>
              <Link
                href="/subjects/basic-science"
                className="hover:text-stone-900 transition-colors font-semibold text-emerald-800"
              >
                Science
              </Link>
              <Link
                href="/subjects/iibf-banking-regulations"
                className="hover:text-stone-900 transition-colors"
              >
                IIBF
              </Link>
              <Link
                href="/subjects/ancient-indian-history"
                className="hover:text-stone-900 transition-colors"
              >
                History
              </Link>
              <Link
                href="/subjects/quantitative-aptitude-and-data-interpretation"
                className="hover:text-stone-900 transition-colors"
              >
                Quant
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-xs text-stone-600 bg-white/80 hover:bg-white hover:text-stone-900 border border-[#dcd6c8] hover:border-[#c25e2e]/50 rounded-lg px-3 py-1.5 transition-all shadow-2xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search across the ridge...</span>
              <kbd className="hidden md:inline-block font-mono text-[10px] bg-[#ede8dc] text-stone-700 px-1.5 py-0.5 rounded border border-[#d6cebe]">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </header>

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
