'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SearchDialog } from '@/components/navigation/search-dialog';

interface SovereignSubjectCard {
  id: string;
  code: string;
  category: 'GOV' | 'ECO' | 'STEM' | 'HUM';
  categoryLabel: string;
  title: string;
  authorText: string;
  totalChapters: number;
  totalWordsText: string;
  badgeText: string;
  badgeStyle: string;
  accentBorder: string;
  accentColor: string;
  accentBg: string;
  emblem: string;
  description: string;
  chips: string[];
  hubUrl: string;
  readUrl: string;
}

const SOVEREIGN_SUBJECTS: SovereignSubjectCard[] = [
  {
    id: 'pol-007',
    code: 'POL-007',
    category: 'GOV',
    categoryLabel: 'Governance & Law',
    title: 'Political Science & Constitutional Governance',
    authorText: 'M. Laxmikanth (8th Ed., 2026) • 2nd ARC • Bare Act',
    totalChapters: 38,
    totalWordsText: '1.2M words',
    badgeText: 'Gold Standard Bare Act',
    badgeStyle: 'text-emerald-800 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800',
    accentBorder: 'border-l-[#14532d]',
    accentColor: '#14532d',
    accentBg: 'from-emerald-500/5 to-transparent',
    emblem: '⚖️',
    description: 'Constitutional framework, federalism, judicial review, 2nd ARC 15-report compendium, civil service reforms & 1,520 MCQ bank.',
    chips: ['Basic Structure', '2nd ARC (15 Reports)', '1,520 MCQs Bank'],
    hubUrl: '/shelf-007/political-science',
    readUrl: '/shelf-007/political-science/chapter-01',
  },
  {
    id: 'eco-007',
    code: 'ECO-007',
    category: 'ECO',
    categoryLabel: 'Economics & ESI',
    title: 'Economics & Social Issues Master Treatise',
    authorText: 'Ramesh Singh • Vivek Singh • Nitin Singhania • Sanjeev Verma',
    totalChapters: 28,
    totalWordsText: '950K words',
    badgeText: '5-Author Sovereign Synthesis',
    badgeStyle: 'text-amber-800 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800',
    accentBorder: 'border-l-[#9a3412]',
    accentColor: '#9a3412',
    accentBg: 'from-amber-500/5 to-transparent',
    emblem: '📈',
    description: '2015 SNA national income, monetary corridor, banking NPAs, GST & FRBM, FTP 2023, 4 labor codes, and urbanization.',
    chips: ['2015 SNA Corridor', 'FTP 2023 & GST', '4 New Labor Codes'],
    hubUrl: '/shelf-007/economics',
    readUrl: '/shelf-007/economics/chapter-01',
  },
  {
    id: 'dbf-007',
    code: 'DBF-007',
    category: 'ECO',
    categoryLabel: 'Banking & Finance',
    title: 'IIBF Diploma in Banking & Finance (DBF / JAIIB)',
    authorText: 'Official Macmillan Courseware (IE&IFS • PPB • AFMB • RBWM)',
    totalChapters: 23,
    totalWordsText: '820K words',
    badgeText: 'Official Macmillan 4-Paper',
    badgeStyle: 'text-blue-800 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-800',
    accentBorder: 'border-l-[#1e3a8a]',
    accentColor: '#1e3a8a',
    accentBg: 'from-blue-500/5 to-transparent',
    emblem: '🏦',
    description: 'IE&IFS, PPB, AFMB, and RBWM. Integrates Banking Laws (Amendment) Act 2025, Ind AS, Basel III capital ratios & rapid vaults.',
    chips: ['4 Core Papers', 'Basel III & Ind AS', 'Banking Act 2025'],
    hubUrl: '/shelf-007/iibf-dbf',
    readUrl: '/shelf-007/iibf-dbf/01_paper_1_ie_ifs-01_module_a_indian_economic_architecture',
  },
  {
    id: 'hist-007',
    code: 'HIST-007',
    category: 'HUM',
    categoryLabel: 'Civilizations & History',
    title: 'History: Ancient, Medieval, Modern, Rajasthan & World',
    authorText: 'Upinder Singh • Satish Chandra • Bipan Chandra • Norman Lowe',
    totalChapters: 39,
    totalWordsText: '1.4M words',
    badgeText: 'Unified 5D Master Codex',
    badgeStyle: 'text-yellow-800 bg-yellow-50 border-yellow-200 dark:text-yellow-300 dark:bg-yellow-950/40 dark:border-yellow-800',
    accentBorder: 'border-l-[#854d0e]',
    accentColor: '#854d0e',
    accentBg: 'from-yellow-500/5 to-transparent',
    emblem: '🏛️',
    description: 'Ancient edicts & epigraphy, medieval institutions, Gandhian freedom struggle, comprehensive Rajasthan heritage (RAS) & world revolutions.',
    chips: ['Ancient Inscriptions', 'Rajasthan Heritage (RAS)', 'Grand Sync Vault'],
    hubUrl: '/shelf-007/history',
    readUrl: '/shelf-007/history/chapter-01',
  },
  {
    id: 'geo-007',
    code: 'GEO-007',
    category: 'HUM',
    categoryLabel: 'Geomorphology & Earth',
    title: 'Geography: India, World & Rajasthan',
    authorText: 'Prof. Majid Husain • Shankar IAS • Savindra Singh • Bhalla',
    totalChapters: 38,
    totalWordsText: '1.3M words',
    badgeText: 'Physical & Human Codex',
    badgeStyle: 'text-teal-800 bg-teal-50 border-teal-200 dark:text-teal-300 dark:bg-teal-950/40 dark:border-teal-800',
    accentBorder: 'border-l-[#0f766e]',
    accentColor: '#0f766e',
    accentBg: 'from-teal-500/5 to-transparent',
    emblem: '🌐',
    description: 'Plate tectonics, climatology, oceanography & UNCLOS, environmental ecology, Indian morphotectonics & Rajasthan regional divisions.',
    chips: ['Plate Tectonics', 'UNCLOS & Ecology', 'Rajasthan (IGNP/Minerals)'],
    hubUrl: '/shelf-007/geography',
    readUrl: '/shelf-007/geography/01_geomorphology_earth_structure_and_plate_tectonics',
  },
  {
    id: 'sci-007',
    code: 'SCI-007',
    category: 'STEM',
    categoryLabel: 'Natural & Applied Sciences',
    title: 'General Science: Physics, Chemistry & Biology Unified',
    authorText: 'NCERT (6–12) • Halliday-Resnick • Campbell Biology',
    totalChapters: 30,
    totalWordsText: '1.1M words',
    badgeText: 'NCERT 6–12 + Competitive Fusion',
    badgeStyle: 'text-emerald-800 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800',
    accentBorder: 'border-l-[#164e3f]',
    accentColor: '#164e3f',
    accentBg: 'from-emerald-600/5 to-transparent',
    emblem: '🔬',
    description: 'Foundational physics, organic & inorganic chemistry, cellular biology, human physiology, genetics, immunity & biotechnology.',
    chips: ['Mechanics & Optics', 'Thermodynamics & Carbon', 'Genetics & Biotech'],
    hubUrl: '/shelf-007/general-science',
    readUrl: '/shelf-007/general-science/chapter-01',
  },
  {
    id: 'qnt-007',
    code: 'QNT-007',
    category: 'STEM',
    categoryLabel: 'Mathematical Logic',
    title: 'Quantitative Aptitude & Mathematical Logic',
    authorText: 'Sarvesh K. Verma (Quantum CAT) • Arun Sharma • R.S. Aggarwal',
    totalChapters: 29,
    totalWordsText: '980K words',
    badgeText: 'Axiomatic & Speed Synthesis',
    badgeStyle: 'text-indigo-800 bg-indigo-50 border-indigo-200 dark:text-indigo-300 dark:bg-indigo-950/40 dark:border-indigo-800',
    accentBorder: 'border-l-[#1d4ed8]',
    accentColor: '#1d4ed8',
    accentBg: 'from-blue-600/5 to-transparent',
    emblem: '📐',
    description: 'Vedic engines, number theory invariants, master sign-table heuristics, commercial arithmetic, motion invariants & DI decision trees.',
    chips: ['Vedic Calculation', 'Master Sign-Table', 'Alligation & Motion'],
    hubUrl: '/shelf-007/quantitative-aptitude',
    readUrl: '/shelf-007/quantitative-aptitude/chapter-01',
  },
  {
    id: 'eng-007',
    code: 'ENG-007',
    category: 'HUM',
    categoryLabel: 'Linguistic Logic & Codex',
    title: 'English Language & Descriptive Writing Master Codex',
    authorText: 'Nikhil Gupta • Nimisha Bansal • Wren & Martin • Strunk & White',
    totalChapters: 44,
    totalWordsText: '1.5M words',
    badgeText: 'Black Book • Vocab Prodigy',
    badgeStyle: 'text-amber-900 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800',
    accentBorder: 'border-l-[#78350f]',
    accentColor: '#78350f',
    accentBg: 'from-amber-700/5 to-transparent',
    emblem: '🖋️',
    description: '120 golden grammar rules, syntactic inversion, 1,000+ root engine, fixed prepositions, PESTLE-S essay lab & précis distillation.',
    chips: ['120 Golden Rules', '1,000+ Roots Engine', 'PESTLE-S Essay Lab'],
    hubUrl: '/shelf-007/english-language',
    readUrl: '/shelf-007/english-language/01_master_chapter_120_golden_grammar_rules',
  },
];

interface SavedPosition {
  subjectName: string;
  subjectSlug: string;
  topicTitle: string;
  topicSlug: string;
  conceptTitle: string;
  url: string;
}

export function ExecutiveSinglePageHub() {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'GOV' | 'ECO' | 'STEM' | 'HUM'>('ALL');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [savedPosition, setSavedPosition] = useState<SavedPosition | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('reading_hub_last_position');
      if (stored) {
        const parsed = JSON.parse(stored) as SavedPosition;
        if (parsed && parsed.url && parsed.topicTitle) {
          if (!parsed.url.startsWith('/subjects/') && !parsed.url.startsWith('/topics/')) {
            setSavedPosition(parsed);
          }
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const totalChapters = useMemo(() => SOVEREIGN_SUBJECTS.reduce((acc, s) => acc + s.totalChapters, 0), []);

  const categories = [
    { id: 'ALL' as const, label: 'All Disciplines', count: 8, icon: '🏛️' },
    { id: 'GOV' as const, label: 'Governance & Law', count: 1, icon: '⚖️' },
    { id: 'ECO' as const, label: 'Economics & Banking', count: 2, icon: '📈' },
    { id: 'STEM' as const, label: 'STEM & Logic', count: 2, icon: '🔬' },
    { id: 'HUM' as const, label: 'Humanities & Codex', count: 3, icon: '🌍' },
  ];

  return (
    <div className="h-[calc(100dvh-5.5rem)] min-h-[580px] max-w-[1620px] mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex flex-col justify-between overflow-hidden">
      {/* 1. Atmospheric Executive Command Bar (Ultra-Compact, ~52px) */}
      <section className="bg-white/85 dark:bg-[#121915]/85 backdrop-blur-md border border-[#e5dfd3] dark:border-[#24332c] rounded-xl px-3 sm:px-4 py-2 flex items-center justify-between gap-3 shadow-2xs shrink-0">
        {/* Left: Ridge Bastion Branding & Metrics */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#143227] text-amber-200 flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
            ▲
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base tracking-tight truncate leading-tight">
                Shelf 007: Sovereign Knowledge Bastion
              </h1>
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Release v014 Live
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 dark:text-stone-400 truncate">
              <span className="text-[#143227] dark:text-emerald-400 font-semibold">8 Master Treatises</span>
              <span>•</span>
              <span>{totalChapters} Chapters</span>
              <span>•</span>
              <span>1,520 MCQs</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-[#c25e2e] dark:text-amber-400 font-medium">Total Replacement Standard</span>
            </div>
          </div>
        </div>

        {/* Center/Right: Category Filter Pills */}
        <div className="hidden md:flex items-center gap-1.5 shrink-0 bg-[#f7f5f0] dark:bg-[#18231e] p-1 rounded-lg border border-[#e5dfd3] dark:border-[#25362e]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#143227] text-amber-100 font-bold shadow-2xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-white/60 dark:hover:bg-white/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Quick Resumption & Search Shortcut */}
        <div className="flex items-center gap-2 shrink-0">
          {savedPosition && (
            <Link
              href={savedPosition.url}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-[11px] font-mono font-medium hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 animate-pulse" />
              <span className="truncate max-w-[130px]">Resume: {savedPosition.topicTitle}</span>
              <span>→</span>
            </Link>
          )}

          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 text-[11px] text-stone-600 dark:text-stone-300 bg-white dark:bg-[#18231e] hover:bg-stone-50 dark:hover:bg-[#1e2c26] border border-[#dcd6c8] dark:border-[#2b3d34] rounded-lg px-2.5 py-1.5 transition-all shadow-2xs cursor-pointer font-mono"
          >
            <svg className="w-3.5 h-3.5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">Search...</span>
            <kbd className="font-mono text-[9px] bg-[#ede8dc] dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-1 py-0.2 rounded border border-[#d6cebe] dark:border-stone-700">
              ⌘K
            </kbd>
          </button>
        </div>
      </section>

      {/* 2. The Symmetrical 4 × 2 Sovereign Master Grid (Zero Scroll) */}
      <section className="flex-1 grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-2.5 sm:gap-3 min-h-0 py-1.5 sm:py-2">
        {SOVEREIGN_SUBJECTS.map((subject) => {
          const isCategoryMatch = selectedCategory === 'ALL' || subject.category === selectedCategory;
          const isCurrentActive = savedPosition?.url.includes(subject.id.replace('-007', ''));

          return (
            <article
              key={subject.id}
              className={`bg-white dark:bg-[#131a17] border-2 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between border-l-4 ${subject.accentBorder} relative overflow-hidden transition-all duration-200 group shadow-2xs hover:shadow-md ${
                isCategoryMatch
                  ? 'opacity-100 border-[#d6cebe] dark:border-[#273831] hover:border-[#143227] dark:hover:border-emerald-600'
                  : 'opacity-35 hover:opacity-90 border-[#e8e2d5] dark:border-[#1c2923] grayscale-30'
              }`}
            >
              {/* Subtle Ambient Watermark */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${subject.accentBg} rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60`}
              />

              {/* Card Top: Code, Category & Live Badges */}
              <div className="space-y-1.5 min-h-0">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border bg-[#ede8dc] dark:bg-[#1c2923] text-[#143227] dark:text-emerald-300 border-[#d6cebe] dark:border-[#2b3e34]">
                      {subject.code}
                    </span>
                    <span className="text-[10px] font-sans font-medium text-stone-500 dark:text-stone-400 hidden xl:inline">
                      {subject.categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {isCurrentActive && (
                      <span className="flex items-center gap-1 px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                        Active
                      </span>
                    )}
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${subject.badgeStyle} truncate max-w-[130px]`}>
                      {subject.badgeText}
                    </span>
                  </div>
                </div>

                {/* Title & Author */}
                <div>
                  <Link href={subject.hubUrl} className="block group-hover:text-[#143227] dark:group-hover:text-emerald-400 transition-colors">
                    <h2 className="font-serif font-bold text-xs sm:text-sm lg:text-[15px] text-stone-900 dark:text-stone-100 leading-snug line-clamp-2">
                      {subject.title}
                    </h2>
                  </Link>
                  <p className="text-[10px] font-mono text-stone-500 dark:text-stone-400 truncate pt-0.5">
                    {subject.authorText}
                  </p>
                </div>

                {/* Metric Strip */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className="bg-[#f7f5f0] dark:bg-[#18231e] border border-[#e5dfd3] dark:border-[#25362e] text-stone-700 dark:text-stone-300 px-1.5 py-0.2 rounded font-semibold">
                    {subject.totalChapters} Master Chapters
                  </span>
                  <span className="bg-[#eef6f2] dark:bg-emerald-950/40 text-[#143227] dark:text-emerald-300 font-semibold px-1.5 py-0.2 rounded border border-[#cbe4d7] dark:border-emerald-800">
                    {subject.totalWordsText}
                  </span>
                </div>

                {/* Scope Synopsis */}
                <p className="text-[11px] text-stone-600 dark:text-stone-300 leading-snug font-sans line-clamp-2 pt-0.5">
                  {subject.description}
                </p>

                {/* Hallmark Chips (Ultra-Dense) */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {subject.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono bg-[#fdfbf7] dark:bg-[#18231e] border border-[#e5dfd3] dark:border-[#273831] text-stone-700 dark:text-stone-300 px-1.5 py-0.2 rounded truncate max-w-[150px]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Action Dock */}
              <div className="pt-2 border-t border-[#f0ebe1] dark:border-[#23302a] flex items-center justify-between text-xs font-mono mt-1">
                <Link
                  href={subject.hubUrl}
                  className="text-stone-600 dark:text-stone-400 hover:text-[#143227] dark:hover:text-emerald-400 font-semibold text-[11px] transition-colors flex items-center gap-0.5"
                >
                  <span>Syllabus</span>
                  <span>→</span>
                </Link>

                <Link
                  href={subject.readUrl}
                  className="px-2.5 py-1 rounded-md text-white text-[11px] font-semibold transition-all inline-flex items-center gap-1 bg-[#143227] hover:bg-[#1f493b] dark:bg-emerald-900 dark:hover:bg-emerald-800 shadow-2xs hover:shadow-xs"
                >
                  <span>Read Treatise</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      {/* Global Search Dialog Modal */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
