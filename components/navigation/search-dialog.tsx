'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UNIFIED_SEARCH_INDEX, UnifiedSearchItem, SearchResultType } from './static-concept-index';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<UnifiedSearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const filtered = UNIFIED_SEARCH_INDEX.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSlug = item.slug.toLowerCase().includes(q);
      const matchSubj = item.hierarchy.subject?.toLowerCase().includes(q);
      const matchTopic = item.hierarchy.topic?.toLowerCase().includes(q);
      const matchDomain = item.hierarchy.domain?.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchSlug || matchSubj || matchTopic || matchDomain;
    }).slice(0, 15);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      window.location.href = results[selectedIndex].url;
      onClose();
    }
  };

  if (!isOpen) return null;

  const getTypeBadge = (type: SearchResultType) => {
    switch (type) {
      case 'SUBJECT':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">SUBJECT</span>;
      case 'TOPIC':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">TOPIC</span>;
      case 'CONCEPT':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-300">CONCEPT</span>;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-950/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-stone-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 gap-3 bg-stone-50/50">
          <svg className="w-5 h-5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search across all Subjects, Topics & Concepts (e.g. Fundamental Rights, WDV, Monetary Policy)..."
            className="w-full text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden bg-transparent font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-stone-400 hover:text-stone-600 px-1.5 py-0.5"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] font-mono bg-stone-200/80 hover:bg-stone-300 text-stone-700 px-2 py-0.5 rounded border border-stone-300 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto divide-y divide-stone-100 p-2 focus:outline-hidden">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-xs text-stone-500">
              <p className="text-sm font-medium text-stone-700">No results found for &ldquo;{query}&rdquo;</p>
              <p className="mt-1 text-stone-500">Try searching for a subject name, statutory section, or economic concept.</p>
            </div>
          )}

          {!query && (
            <div className="p-4 space-y-4">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold mb-2">
                  Browse by Subject
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Link
                    href="/subjects/indian-polity"
                    onClick={onClose}
                    className="p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300 transition-all text-xs block"
                  >
                    <div className="font-serif font-bold text-stone-900">Indian Polity</div>
                    <div className="text-[10px] font-mono text-stone-500 mt-0.5">28 Topics • 133 Concepts</div>
                  </Link>
                  <Link
                    href="/subjects/indian-economy"
                    onClick={onClose}
                    className="p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300 transition-all text-xs block"
                  >
                    <div className="font-serif font-bold text-stone-900">Indian Economy</div>
                    <div className="text-[10px] font-mono text-stone-500 mt-0.5">12 Topics • 49 Concepts</div>
                  </Link>
                  <Link
                    href="/subjects/iibf-banking-regulations"
                    onClick={onClose}
                    className="p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300 transition-all text-xs block"
                  >
                    <div className="font-serif font-bold text-stone-900">IIBF & Banking</div>
                    <div className="text-[10px] font-mono text-stone-500 mt-0.5">14 Topics • 51 Concepts</div>
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold mb-2">
                  Frequent Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <Link
                    href="/topics/part-3-fundamental-rights/read"
                    onClick={onClose}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-900 rounded-lg text-xs border border-stone-200 transition-colors"
                  >
                    Part III: Fundamental Rights
                  </Link>
                  <Link
                    href="/topics/national-income-accounting-and-gdp-metrics/read"
                    onClick={onClose}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-900 rounded-lg text-xs border border-stone-200 transition-colors"
                  >
                    National Income & GDP
                  </Link>
                  <Link
                    href="/topics/iibf-indian-financial-system-architecture/read"
                    onClick={onClose}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-900 rounded-lg text-xs border border-stone-200 transition-colors"
                  >
                    IIBF: Financial System
                  </Link>
                  <Link
                    href="/topics/monetary-policy-and-central-banking/read"
                    onClick={onClose}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-900 rounded-lg text-xs border border-stone-200 transition-colors"
                  >
                    Monetary Policy & RBI
                  </Link>
                </div>
              </div>
            </div>
          )}

          {results.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <Link
                key={item.id}
                href={item.url}
                onClick={onClose}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`block p-3 rounded-xl transition-colors ${
                  isSelected ? 'bg-emerald-50/80 border-l-4 border-l-emerald-800' : 'hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="text-[11px] font-mono text-stone-500 flex items-center gap-1.5 flex-wrap">
                    <span className="font-semibold text-stone-700">{item.hierarchy.subject}</span>
                    {item.hierarchy.topic && (
                      <>
                        <span className="text-stone-300">›</span>
                        <span className="text-stone-600 truncate max-w-[280px]">{item.hierarchy.topic}</span>
                      </>
                    )}
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5">
                    {getTypeBadge(item.type)}
                    {item.badge && (
                      <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900">
                  {item.title}
                </h4>

                {item.description && (
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </Link>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 bg-stone-100/70 border-t border-stone-200 text-[11px] font-mono text-stone-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-white border border-stone-300 rounded text-[10px]">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 py-0.5 bg-white border border-stone-300 rounded text-[10px]">↵</kbd> Select</span>
            <span><kbd className="px-1 py-0.5 bg-white border border-stone-300 rounded text-[10px]">ESC</kbd> Close</span>
          </div>
          <span>Mind of Aravalli</span>
        </div>
      </div>
    </div>
  );
}
