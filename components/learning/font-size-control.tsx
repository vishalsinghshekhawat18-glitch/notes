'use client';

import React, { useState, useEffect } from 'react';
import { Type } from 'lucide-react';

export type ReaderFontSize = 'sm' | 'md' | 'lg' | 'xl';

const FONT_SIZES: { id: ReaderFontSize; label: string; px: string }[] = [
  { id: 'sm', label: 'Compact', px: '14px' },
  { id: 'md', label: 'Default', px: '16px' },
  { id: 'lg', label: 'Large', px: '18px' },
  { id: 'xl', label: 'Extra Large', px: '20px' },
];

export function FontSizeControl({ className = '' }: { className?: string }) {
  const [fontSize, setFontSize] = useState<ReaderFontSize>('md');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('reading_hub_font_size') as ReaderFontSize | null;
      if (saved && ['sm', 'md', 'lg', 'xl'].includes(saved)) {
        setFontSize(saved);
        document.documentElement.setAttribute('data-font-size', saved);
      } else {
        document.documentElement.setAttribute('data-font-size', 'md');
      }
    } catch {
      // Ignore localStorage errors
    }

    const handleExternalChange = () => {
      try {
        const current = (document.documentElement.getAttribute('data-font-size') as ReaderFontSize) || 'md';
        setFontSize(current);
      } catch {
        // Ignore
      }
    };

    window.addEventListener('reading-font-size-changed', handleExternalChange);
    return () => window.removeEventListener('reading-font-size-changed', handleExternalChange);
  }, []);

  const updateFontSize = (newSize: ReaderFontSize) => {
    setFontSize(newSize);
    try {
      localStorage.setItem('reading_hub_font_size', newSize);
      document.documentElement.setAttribute('data-font-size', newSize);
      window.dispatchEvent(new Event('reading-font-size-changed'));
    } catch {
      // Ignore
    }
  };

  const currentIndex = FONT_SIZES.findIndex((s) => s.id === fontSize);

  const decrease = () => {
    if (currentIndex > 0) {
      updateFontSize(FONT_SIZES[currentIndex - 1].id);
    }
  };

  const increase = () => {
    if (currentIndex < FONT_SIZES.length - 1) {
      updateFontSize(FONT_SIZES[currentIndex + 1].id);
    }
  };

  const currentDef = FONT_SIZES[currentIndex] || FONT_SIZES[1];

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-stone-200 bg-white/90 p-0.5 shadow-2xs text-xs font-mono select-none ${className}`}
      role="group"
      aria-label="Reader text size controls"
    >
      {/* Decrease Button */}
      <button
        onClick={decrease}
        disabled={!mounted || currentIndex === 0}
        className="px-2 py-1 rounded text-stone-600 hover:text-stone-900 hover:bg-stone-100 disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-stone-600 transition-colors font-serif font-bold text-xs cursor-pointer disabled:cursor-not-allowed"
        title="Decrease text size (A-)"
        aria-label="Decrease text size"
      >
        A-
      </button>

      {/* Current Size Indicator & Cycle */}
      <button
        onClick={() => {
          const nextIndex = (currentIndex + 1) % FONT_SIZES.length;
          updateFontSize(FONT_SIZES[nextIndex].id);
        }}
        className="px-2 py-0.5 mx-0.5 rounded text-[11px] font-sans font-medium text-stone-700 hover:bg-stone-100 transition-colors flex items-center gap-1 cursor-pointer"
        title={`Current: ${currentDef.label} (${currentDef.px}). Click to cycle.`}
        aria-label={`Current text size ${currentDef.label} (${currentDef.px})`}
      >
        <Type className="w-3 h-3 text-emerald-800 shrink-0" />
        <span className="font-mono text-[10px] text-stone-600">{currentDef.px}</span>
      </button>

      {/* Increase Button */}
      <button
        onClick={increase}
        disabled={!mounted || currentIndex === FONT_SIZES.length - 1}
        className="px-2 py-1 rounded text-stone-600 hover:text-stone-900 hover:bg-stone-100 disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-stone-600 transition-colors font-serif font-bold text-sm cursor-pointer disabled:cursor-not-allowed"
        title="Increase text size (A+)"
        aria-label="Increase text size"
      >
        A+
      </button>
    </div>
  );
}
