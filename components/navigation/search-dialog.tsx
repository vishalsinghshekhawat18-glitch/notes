'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  topicTitle: string;
  subjectName: string;
}

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setIsLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-stone-900/40 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white border border-stone-300 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-stone-200 gap-3">
          <svg className="w-5 h-5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all canonical concepts (e.g. Article 14, CPI, UCC, Fisher)..."
            className="w-full text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="text-xs font-mono bg-stone-100 hover:bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded border border-stone-300 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto divide-y divide-stone-100 p-2">
          {isLoading && (
            <div className="py-6 text-center text-xs text-stone-500 font-mono">
              Searching canonical graph...
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div className="py-8 text-center text-xs text-stone-500">
              No concepts found matching &ldquo;<span className="font-semibold text-stone-700">{query}</span>&rdquo;
            </div>
          )}

          {!isLoading && !query && (
            <div className="p-4 text-xs text-stone-500">
              <div className="font-medium text-stone-700 mb-2">Quick Navigation</div>
              <div className="flex flex-wrap gap-1.5">
                <Link
                  href="/concepts/article-14-equality-non-arbitrariness"
                  onClick={onClose}
                  className="px-2 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 rounded text-xs border border-stone-200 transition-colors"
                >
                  Article 14 (Equality)
                </Link>
                <Link
                  href="/concepts/article-21-21a-life-liberty-privacy-education"
                  onClick={onClose}
                  className="px-2 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 rounded text-xs border border-stone-200 transition-colors"
                >
                  Article 21 (Life & Liberty)
                </Link>
                <Link
                  href="/concepts/article-32-writs-constitutional-remedies"
                  onClick={onClose}
                  className="px-2 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 rounded text-xs border border-stone-200 transition-colors"
                >
                  Article 32 (Writs)
                </Link>
                <Link
                  href="/concepts/price-indices-measurement-cpi-wpi-core-headline"
                  onClick={onClose}
                  className="px-2 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 rounded text-xs border border-stone-200 transition-colors"
                >
                  CPI vs WPI
                </Link>
                <Link
                  href="/concepts/inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side"
                  onClick={onClose}
                  className="px-2 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 rounded text-xs border border-stone-200 transition-colors"
                >
                  RBI Inflation Targeting
                </Link>
              </div>
            </div>
          )}

          {results.map((c) => (
            <Link
              key={c.id}
              href={`/concepts/${c.slug}`}
              onClick={onClose}
              className="block p-3 hover:bg-emerald-50/60 rounded-lg transition-colors group"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-serif font-bold text-sm text-stone-900 group-hover:text-emerald-900">
                  {c.title}
                </span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 shrink-0">
                  {c.difficulty}
                </span>
              </div>
              <div className="text-xs text-stone-500 font-mono mt-0.5">
                {c.subjectName} › {c.topicTitle}
              </div>
              <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                {c.shortDefinition}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
