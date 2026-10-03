'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, BookOpen } from 'lucide-react';

export type ReadingTheme = 'parchment' | 'obsidian' | 'ivory';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ReadingTheme>('parchment');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('reading_hub_theme') as ReadingTheme;
      if (stored && ['parchment', 'obsidian', 'ivory'].includes(stored)) {
        setTheme(stored);
        document.documentElement.setAttribute('data-theme', stored);
      } else {
        document.documentElement.setAttribute('data-theme', 'parchment');
      }
    } catch {
      // Ignore
    }
  }, []);

  const changeTheme = (newTheme: ReadingTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('reading_hub_theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    } catch {
      // Ignore
    }
    setIsOpen(false);
  };

  const themeMeta: Record<ReadingTheme, { name: string; icon: React.ReactNode; desc: string }> = {
    parchment: {
      name: 'Parchment',
      icon: <BookOpen className="w-3.5 h-3.5 text-amber-700" />,
      desc: 'Warm academic paper',
    },
    obsidian: {
      name: 'Obsidian',
      icon: <Moon className="w-3.5 h-3.5 text-emerald-400" />,
      desc: 'OLED dark sanctuary',
    },
    ivory: {
      name: 'Ivory',
      icon: <Sun className="w-3.5 h-3.5 text-amber-500" />,
      desc: 'Crisp minimal daylight',
    },
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#dcd6c8] bg-white/80 hover:bg-white text-xs font-mono text-stone-700 shadow-2xs hover:border-[#143227]/40 transition-all cursor-pointer"
        title="Change Reading Ambience"
      >
        {themeMeta[theme].icon}
        <span className="hidden sm:inline font-sans text-xs font-medium">{themeMeta[theme].name}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-1.5 w-48 rounded-xl bg-white border border-[#e5dfd3] shadow-lg py-1.5 z-50 text-xs font-sans animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold border-b border-stone-100">
              Reading Ambience
            </div>
            {(['parchment', 'obsidian', 'ivory'] as ReadingTheme[]).map((t) => (
              <button
                key={t}
                onClick={() => changeTheme(t)}
                className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors cursor-pointer ${
                  theme === t ? 'bg-[#ede8dc]/80 font-bold text-[#143227]' : 'hover:bg-stone-50 text-stone-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  {themeMeta[t].icon}
                  <div>
                    <div className="font-serif leading-tight">{themeMeta[t].name}</div>
                    <div className="text-[10px] font-mono text-stone-500">{themeMeta[t].desc}</div>
                  </div>
                </div>
                {theme === t && <span className="text-[10px] font-mono text-[#143227]">●</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
