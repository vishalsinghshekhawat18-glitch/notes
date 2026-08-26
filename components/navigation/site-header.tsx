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
      <header className="sticky top-0 z-30 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 group-hover:scale-125 transition-transform" />
              <span className="font-serif font-bold text-stone-900 tracking-tight text-base">
                Mind of Aravalli
              </span>
              <span className="text-xs font-mono bg-stone-200 text-stone-700 px-1.5 py-0.5 rounded ml-1">
                Reading Hub
              </span>
            </Link>

            <nav className="hidden sm:flex items-center gap-4 text-xs font-medium text-stone-600">
              <Link
                href="/"
                className="hover:text-stone-900 transition-colors"
              >
                Library
              </Link>
              <Link
                href="/topics/part-3-fundamental-rights"
                className="hover:text-stone-900 transition-colors"
              >
                Fundamental Rights
              </Link>
              <Link
                href="/topics/part-4-directive-principles-of-state-policy"
                className="hover:text-stone-900 transition-colors"
              >
                Directive Principles
              </Link>
              <Link
                href="/topics/inflation-dynamics-measurement-policy"
                className="hover:text-stone-900 transition-colors"
              >
                Economics: Inflation
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-xs text-stone-500 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md px-2.5 py-1.5 transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search concepts...</span>
              <kbd className="hidden md:inline-block font-mono text-[10px] bg-stone-200 text-stone-600 px-1 py-0.5 rounded border border-stone-300">
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
