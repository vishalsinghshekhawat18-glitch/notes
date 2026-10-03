'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DomainWithSubjects, SubjectOverviewItem } from '@/lib/knowledge/web-data';

interface KnowledgeShelvesViewProps {
  domains: DomainWithSubjects[];
}

interface ThematicShelf {
  id: string;
  title: string;
  icon: string;
  badge: string;
  accentColor: string;
  borderAccent: string;
  subjectSlugs: string[];
}

const THEMATIC_SHELVES: ThematicShelf[] = [
  {
    id: 'shelf-007',
    title: 'Shelf 007: Sovereign Knowledge Bastion & Master Examination Series',
    icon: '🏛️',
    badge: 'Master Series • Release v007 Live',
    accentColor: 'text-[#143227] bg-[#ede8dc] border-[#d6cebe]',
    borderAccent: 'border-l-[#143227]',
    subjectSlugs: [],
  },
];

export function KnowledgeShelvesView({ domains }: KnowledgeShelvesViewProps) {
  const [layoutMode, setLayoutMode] = useState<'SHELVES' | 'GRID'>('SHELVES');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'GOV' | 'ECO' | 'SCI' | 'HUM'>('ALL');

  // Exclude legacy database subjects that were purged
  const DEPRECATED_SLUGS = useMemo(
    () => new Set([
      'indian-economy',
      'iibf-banking-regulations',
      'indian-polity',
      'geography-and-environment',
      'agriculture-and-rural-development',
      'rajasthan-history-culture-geography',
      'public-administration-and-laws',
      'ethics-behavior-sports',
      'general-hindi',
      'basic-science',
      'applied-science-and-biotechnology',
      'ancient-indian-history',
      'modern-indian-history',
      'medieval-indian-history',
      'world-history',
      'art-culture-rajasthan',
      'industrial-relations-and-labour-laws',
      'quantitative-aptitude-and-data-interpretation',
      'english-descriptive-writing',
      'computer-aptitude',
      'government-schemes',
      'general-awareness',
    ]),
    []
  );

  const allSubjects = useMemo(
    () => domains.flatMap((d) => d.subjects).filter((s) => !DEPRECATED_SLUGS.has(s.slug)),
    [domains, DEPRECATED_SLUGS]
  );

  // Map subjects by slug for instant lookup
  const subjectMap = useMemo(() => {
    const map = new Map<string, SubjectOverviewItem>();
    allSubjects.forEach((s) => map.set(s.slug, s));
    return map;
  }, [allSubjects]);

  // Theme badges by code
  const getSubjectTheme = (code: string) => {
    if (code.startsWith('GOV')) return { border: 'border-l-indigo-600', badge: 'bg-indigo-50 text-indigo-800 border-indigo-200' };
    if (code.startsWith('ECO')) return { border: 'border-l-emerald-600', badge: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
    if (code.startsWith('SCI')) return { border: 'border-l-teal-600', badge: 'bg-teal-50 text-teal-800 border-teal-200' };
    if (code.startsWith('BNK')) return { border: 'border-l-amber-600', badge: 'bg-amber-50 text-amber-900 border-amber-200' };
    if (code.startsWith('HIS')) return { border: 'border-l-orange-600', badge: 'bg-orange-50 text-orange-900 border-orange-200' };
    if (code.startsWith('APT') || code.startsWith('QNT')) return { border: 'border-l-blue-600', badge: 'bg-blue-50 text-blue-800 border-blue-200' };
    if (code.startsWith('CMP')) return { border: 'border-l-indigo-600', badge: 'bg-indigo-50 text-indigo-900 border-indigo-200' };
    if (code.startsWith('LAN')) return { border: 'border-l-purple-600', badge: 'bg-purple-50 text-purple-800 border-purple-200' };
    if (code.startsWith('PUB')) return { border: 'border-l-rose-600', badge: 'bg-rose-50 text-rose-800 border-rose-200' };
    if (code.startsWith('GEO')) return { border: 'border-l-cyan-600', badge: 'bg-cyan-50 text-cyan-800 border-cyan-200' };
    if (code.startsWith('ARD')) return { border: 'border-l-lime-600', badge: 'bg-lime-50 text-lime-800 border-lime-200' };
    if (code.startsWith('ART')) return { border: 'border-l-fuchsia-600', badge: 'bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200' };
    if (code.startsWith('IRL')) return { border: 'border-l-violet-600', badge: 'bg-violet-50 text-violet-800 border-violet-200' };
    if (code.startsWith('GEN')) return { border: 'border-l-sky-600', badge: 'bg-sky-50 text-sky-800 border-sky-200' };
    if (code.startsWith('RAJ')) return { border: 'border-l-amber-700', badge: 'bg-amber-100 text-amber-900 border-amber-300' };
    if (code.startsWith('PAD')) return { border: 'border-l-red-600', badge: 'bg-red-50 text-red-800 border-red-200' };
    if (code.startsWith('ETH')) return { border: 'border-l-emerald-700', badge: 'bg-emerald-50 text-emerald-900 border-emerald-300' };
    if (code.startsWith('HIN')) return { border: 'border-l-orange-700', badge: 'bg-orange-50 text-orange-950 border-orange-300' };
    return { border: 'border-l-stone-600', badge: 'bg-stone-100 text-stone-800 border-stone-200' };
  };

  const matchesSearch = (subject: SubjectOverviewItem) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();

    return (
      subject.name.toLowerCase().includes(q) ||
      subject.slug.toLowerCase().includes(q) ||
      subject.description.toLowerCase().includes(q) ||
      subject.domainName.toLowerCase().includes(q) ||
      subject.code.toLowerCase().includes(q) ||
      subject.featuredTopics.some((t) => t.toLowerCase().includes(q))
    );
  };

  // Compact Subject Card Component
  const renderSubjectCard = (subject: SubjectOverviewItem) => {
    const theme = getSubjectTheme(subject.code);
    const isFlagship = subject.conceptsCount >= 60;

    return (
      <article
        key={subject.id}
        className={`bg-white border border-[#e5dfd3] hover:border-[#c25e2e] rounded-xl p-4 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between border-l-4 ${theme.border} group`}
      >
        <div className="space-y-2">
          {/* Header Row: Code & Counts */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${theme.badge}`}>
              {subject.code}
            </span>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="text-stone-600 bg-[#f7f5f0] border border-[#e5dfd3] px-1.5 py-0.5 rounded">
                {subject.topicsCount} Peaks
              </span>
              <span className="bg-[#eef6f2] text-[#143227] font-bold px-1.5 py-0.5 rounded border border-[#cbe4d7]">
                {subject.conceptsCount} Waypoints
              </span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/subjects/${subject.slug}`} className="block group-hover:text-[#143227] transition-colors">
            <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
              {subject.name}
            </h4>
          </Link>

          {/* Compact Scope / Description */}
          <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
            {subject.description || 'Canonical knowledge syllabus.'}
          </p>

          {/* Topic Highlights Chips */}
          {subject.featuredTopics.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {subject.featuredTopics.slice(0, 3).map((topicTitle, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-sans bg-[#f7f5f0] border border-[#e8e2d5] text-stone-600 px-1.5 py-0.5 rounded truncate max-w-[180px]"
                >
                  {topicTitle}
                </span>
              ))}
              {subject.topicsCount > 3 && (
                <span className="text-[10px] font-mono text-stone-400 self-center">
                  +{subject.topicsCount - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-3 pt-2.5 border-t border-[#f0ebe1] flex items-center justify-between text-xs font-medium">
          <Link
            href={`/subjects/${subject.slug}`}
            className="text-stone-500 hover:text-[#143227] transition-colors"
          >
            Syllabus Map →
          </Link>

          {subject.firstTopicSlug && (
            <Link
              href={`/topics/${subject.firstTopicSlug}/read`}
              className={`px-2.5 py-1 rounded text-white text-[11px] font-semibold transition-colors inline-flex items-center gap-1 ${
                isFlagship
                  ? 'bg-[#143227] hover:bg-[#1f493b]'
                  : 'bg-[#292524] hover:bg-[#1c1917]'
              }`}
            >
              <span>Begin Ascent</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </article>
    );
  };

  // Sovereign Master Cards Data for Shelf 007
  const SOVEREIGN_CARDS = [
    {
      id: 'eco-007',
      code: 'ECO-007',
      category: 'ECO',
      categoryName: 'Macroeconomics & Public Policy',
      badgeText: '5-Author Sovereign Synthesis',
      badgeColor: 'text-[#9a3412] bg-[#fff7ed] border-[#ffedd5]',
      title: 'Economics Master Treatise (Penta-Treatise Synthesis)',
      authorText: 'Ramesh Singh • Vivek Singh • Nitin Singhania • Sanjeev Verma • K. Sankarganesh',
      countsText: '22 Master Chapters • 22 Revision Matrices',
      waypointsBadge: 'Release v005 Live',
      description:
        'Definitive macroeconomic architecture synthesizing 5 foundational treatises: National Income Accounting (2015 NSO SNA), Monetary Policy Corridor, Banking Architecture & NPAs, Public Finance & GST, Fiscal Federalism, PLFS Employment, Land Reforms, Food Processing (FPI), and External Sector.',
      chips: [
        'National Income (NSO 2015 SNA)',
        'Monetary Transmission & Repo',
        'NPAs, IBC 2016 & Bad Banks',
        'GST Architecture & FRBM Act',
        'Land Reforms & Food Processing',
        'Master Revision Vault (Ch 22)',
      ],
      syllabusUrl: '/shelf-007/economics',
      readUrl: '/shelf-007/economics/chapter-01',
    },
    {
      id: 'dbf-007',
      code: 'DBF-007',
      category: 'ECO',
      categoryName: 'Banking & Financial Regulations',
      badgeText: 'Official Macmillan Courseware',
      badgeColor: 'text-[#1e3a8a] bg-[#eff6ff] border-[#dbeafe]',
      title: 'IIBF Diploma in Banking & Finance (DBF / JAIIB)',
      authorText: 'Official Macmillan Courseware (IE&IFS • PPB • AFMB • RBWM)',
      countsText: '4 Papers • 16 Modules • 5 Revision Vaults',
      waypointsBadge: '23 Master Units',
      description:
        'Exhaustive 4-paper curriculum: Paper 1 (IE&IFS), Paper 2 (PPB), Paper 3 (AFMB), and Paper 4 (RBWM). Incorporates Banking Laws (Amendment) Act 2025, Ind AS, Basel III capital ratios, and 5 rapid revision formula vaults.',
      chips: [
        'Paper 1: IE&IFS (4 Modules)',
        'Paper 2: PPB (4 Modules)',
        'Paper 3: AFMB (4 Modules)',
        'Paper 4: RBWM (4 Modules)',
        '5 Rapid Revision Vaults',
      ],
      syllabusUrl: '/shelf-007/iibf-dbf',
      readUrl: '/shelf-007/iibf-dbf/01_paper_1_ie_ifs-01_module_a_indian_economic_architecture',
    },
    {
      id: 'pol-007',
      code: 'POL-007',
      category: 'GOV',
      categoryName: 'Constitutional Law & Governance',
      badgeText: 'Gold Standard Sovereign Synthesis',
      badgeColor: 'text-[#14532d] bg-[#f0fdf4] border-[#bbf7d0]',
      title: 'Political Science & Constitutional Governance',
      authorText: 'M. Laxmikanth (8th Ed., 2026) • M. Laxmikanth (Governance in India) • Bare Act',
      countsText: '36 Master Chapters • 36 Revision Sheets • 1,520 MCQ Bank',
      waypointsBadge: 'Release v007 Live',
      description:
        'Sovereign doctoral-depth master treatise covering Constitutional Framework, Federal Dynamics, Central & State Machinery, Field & District Administration, 2nd ARC 15-Report Compendium, Civil Services & Police Reforms, Sectoral Regulators, Social Justice Statutes, Comparative Constitutions, and the 1,520-question Objective Diagnostic Vault.',
      chips: [
        'Constitutional Framework & Basic Structure',
        'Field & District Administration (Ch 31)',
        '2nd ARC 15-Report Compendium (Ch 32)',
        'Civil Services & Police Reforms (Ch 33)',
        'Sectoral Regulatory State (Ch 34)',
        'Social Justice Statutes (Ch 35)',
        'Comparative Constitutions (Ch 36)',
        '50 Deadliest Traps & 1,520 MCQ Bank',
      ],
      syllabusUrl: '/shelf-007/political-science',
      readUrl: '/shelf-007/political-science/chapter-01',
    },
    {
      id: 'qnt-007',
      code: 'QNT-007',
      category: 'SCI',
      categoryName: 'Mathematical Logic & Aptitude',
      badgeText: 'Axiomatic & Speed Synthesis',
      badgeColor: 'text-[#1e3a8a] bg-[#eff6ff] border-[#bfdbfe]',
      title: 'Quantitative Aptitude & Mathematical Logic',
      authorText: 'Sarvesh K. Verma (Quantum CAT) • Arun Sharma • R.S. Aggarwal • Rajesh Verma',
      countsText: '27 Master Chapters • Formula Skeletons • Speed Drills',
      waypointsBadge: 'Release v009 Inception',
      description:
        'Sovereign mathematical logic and problem-solving architecture covering Mental Arithmetic, Base Multiplication, Number Theory & Invariants, Pure Algebra & Master Sign-Table, Commercial Arithmetic, Rates & Motion, Spatial Mensuration, Combinatorics, and Data Interpretation.',
      chips: [
        'Mental Calculation & Vedic Engines',
        'Number Theory & Divisibility Invariants',
        'Algebra & Master Sign-Table Heuristics',
        'Commercial Arithmetic & Cross-Alligation',
        'Time, Work, Rates & Motion Invariants',
        'Combinatorics & Probability',
        'Data Interpretation & Decision Trees',
      ],
      syllabusUrl: '/shelf-007/quantitative-aptitude',
      readUrl: '/shelf-007/quantitative-aptitude/chapter-01',
    },
    {
      id: 'sci-007',
      code: 'SCI-007',
      category: 'SCI',
      categoryName: 'Natural & Applied Sciences',
      badgeText: 'NCERT 6–12 + Competitive Fusion',
      badgeColor: 'text-[#164e3f] bg-[#eef6f2] border-[#cbe4d7]',
      title: 'General Science: Physics, Chemistry & Biology Unified',
      authorText: 'NCERT (Classes 6–12) • Halliday-Resnick • Campbell Biology • Morrison-Boyd',
      countsText: '28 Master Chapters • 27 Revision Cards • Capstone Vault',
      waypointsBadge: 'Release v011 Complete',
      description:
        'Sovereign 28-chapter publication-grade science master treatise covering Foundational & Applied Physics (Ch 01–11), Inorganic, Organic & Applied Chemistry (Ch 12–19), Biological Systems, Physiology & Genetics (Ch 20–27), and the Capstone Consolidated Revision Vault (Ch 28).',
      chips: [
        'Mechanics, Gravitation & Fluids (Part I)',
        'Thermal, Waves & Optics (Part I)',
        'Atomic Structure, Bonding & Reactions (Part II)',
        'Carbon, Metallurgy & Everyday Chemistry (Part II)',
        'Cell Biology, Biomolecules & Genetics (Part III)',
        'Plant & Human Physiology (Part III)',
        'Health, Immunity & Applied Biotech (Part III)',
        '50 Deadliest Traps & Capstone Vault (Part IV)',
      ],
      syllabusUrl: '/shelf-007/general-science',
      readUrl: '/shelf-007/general-science/chapter-01',
    },
    {
      id: 'hist-007',
      code: 'HIST-007',
      category: 'HUM',
      categoryName: 'Indian & World Civilizations',
      badgeText: 'Unified 5-Dimensional Master Treatise',
      badgeColor: 'text-[#854d0e] bg-[#fefce8] border-[#fef08a]',
      title: 'History: Ancient, Medieval, Modern, Rajasthan & World Combined',
      authorText: 'Upinder Singh • Satish Chandra • Bipan Chandra • Sekhar Bandyopadhyay • Spectrum • G.N. Sharma • Norman Lowe',
      countsText: '39 Master Chapters • Chronological Sync Vault',
      waypointsBadge: 'Release v012 Live',
      description:
        'Sovereign 39-chapter doctoral-depth historical synthesis integrating Ancient Civilizations & Epigraphy, Medieval Institutional Dynamics, Modern Freedom Struggle, Comprehensive Rajasthan Dynasties & Heritage (RPSC RAS), World History Revolutions, and Capstone Synchronized Revision Vault.',
      chips: [
        'Ancient India & Archaeological Edicts',
        'Medieval Institutions & Bhakti/Sufi Synthesis',
        'Modern India & Gandhian Freedom Struggle',
        'Rajasthan Dynasties, 1857 & Integration (RAS)',
        'World Revolutions & Global Transformations',
        'Grand Chronological Sync Vault',
      ],
      syllabusUrl: '/shelf-007/history',
      readUrl: '/shelf-007/history/chapter-01',
    },
    {
      id: 'geo-007',
      code: 'GEO-007',
      category: 'HUM',
      categoryName: 'Geomorphology & Environment',
      badgeText: 'Majid Husain • Shankar IAS • Savindra Singh • Bhalla',
      badgeColor: 'text-[#0f766e] bg-[#f0fdfa] border-[#99f6e4]',
      title: 'Geography: India, World & Rajasthan',
      authorText: 'Prof. Majid Husain • Shankar IAS Academy • Dr. Savindra Singh • Dr. L.R. Bhalla • NCERTs',
      countsText: '38 Master Chapters • 36 Revision Modules',
      waypointsBadge: 'Release v013 Live',
      description:
        'Sovereign 38-chapter doctoral-depth geographical codex integrating Geomorphology, Climatology, Oceanography, Environmental Ecology, World Regions & Strategic Chokepoints, Indian Morphotectonics & Monsoons, Rajasthan Regional Geography (RPSC RAS), Human Geographic Paradigms, and Capstone Revision Vault.',
      chips: [
        'Planetary Geomorphology & Plate Tectonics',
        'Climatology, Pressure Belts & Cyclones',
        'Oceanography, Currents & UNCLOS Zones',
        'Environmental Ecology & Climate Accords',
        'World Regions & Strategic Chokepoints',
        'Indian Physiography, Monsoons & Soils',
        'Rajasthan Geography (4 Divisions, IGNP, Minerals - RAS)',
      ],
      syllabusUrl: '/shelf-007/geography',
      readUrl: '/shelf-007/geography/01_geomorphology_earth_structure_and_plate_tectonics',
    },
    {
      id: 'eng-007',
      code: 'ENG-007',
      category: 'HUM',
      categoryName: 'Linguistic Logic & Descriptive Codex',
      badgeText: 'Black Book • Vocab Prodigy • Wren & Martin',
      badgeColor: 'text-[#431407] bg-[#fbf5ee] border-[#fed7aa]',
      title: 'English Language & Descriptive Writing Master Codex',
      authorText: 'Nikhil Gupta (Black Book) • Nimisha Bansal (Vocab Prodigy) • Wren & Martin • Strunk & White',
      countsText: '44 Master Chapters • 120 Golden Rules • Essay Lab',
      waypointsBadge: 'Release v014 Live',
      description:
        'Sovereign doctoral-depth treatise covering 120 Golden Rules of Grammar, Syntactic Inversion, Etymological Root Engine (1,000+ roots), Fixed Prepositions, Phrasal Verbs, Paronyms, Descriptive Essay Architecture (PESTLE-S & PEEL), Précis 1/3rd Distillation, Official Correspondence (Full-Block & Reports), and Capstone Revision Vault.',
      chips: [
        '120 Golden Grammar Rules',
        'Syntactic Inversion & Sentence Variety',
        'Etymological Roots (Cognition & Society)',
        'Fixed Prepositions & Phrasal Verbs',
        'Descriptive Essay Laboratory (PESTLE-S & PEEL)',
        'Précis Distillation & Official Reports',
        'Grand Synthesis Capstone Vault',
      ],
      syllabusUrl: '/shelf-007/english-language',
      readUrl: '/shelf-007/english-language/01_master_chapter_120_golden_grammar_rules',
    },
  ];

  const renderSovereignMasterCard = (cardMeta: (typeof SOVEREIGN_CARDS)[number]) => {
    return (
      <article
        key={cardMeta.id}
        className="bg-white border-2 border-[#d6cebe] hover:border-[#143227] rounded-xl p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between border-l-4 border-l-[#143227] group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#143227]/5 rounded-bl-full pointer-events-none" />

        <div className="space-y-2.5">
          {/* Header Row: Code, Category & Badge */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold border bg-[#ede8dc] text-[#143227] border-[#d6cebe]">
                {cardMeta.code}
              </span>
              <span className="text-[10px] font-sans font-medium text-stone-500 bg-stone-100 border border-stone-200/80 px-1.5 py-0.2 rounded hidden sm:inline">
                {cardMeta.categoryName}
              </span>
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${cardMeta.badgeColor}`}>
              {cardMeta.badgeText}
            </span>
          </div>

          {/* Title & Author Meta */}
          <div>
            <Link href={cardMeta.syllabusUrl} className="block group-hover:text-[#143227] transition-colors">
              <h4 className="font-serif font-bold text-lg sm:text-xl text-stone-900 leading-snug">
                {cardMeta.title}
              </h4>
            </Link>
            <div className="text-[11px] font-mono text-stone-500 pt-0.5">
              {cardMeta.authorText}
            </div>
          </div>

          {/* Counts Bar */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            <span className="bg-[#f7f5f0] border border-[#e5dfd3] text-stone-700 px-2 py-0.5 rounded font-medium">
              {cardMeta.countsText}
            </span>
            <span className="bg-[#eef6f2] text-[#143227] font-bold px-2 py-0.5 rounded border border-[#cbe4d7]">
              {cardMeta.waypointsBadge}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-stone-600 leading-relaxed font-sans">
            {cardMeta.description}
          </p>

          {/* Topic Highlights Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {cardMeta.chips.map((chip, cIdx) => (
              <span
                key={cIdx}
                className="text-[10px] font-mono bg-[#fdfbf7] border border-[#e5dfd3] text-stone-700 px-2 py-0.5 rounded"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-4 pt-3 border-t border-[#f0ebe1] flex items-center justify-between text-xs font-medium">
          <Link
            href={cardMeta.syllabusUrl}
            className="text-stone-600 hover:text-[#143227] font-semibold transition-colors flex items-center gap-1 font-mono"
          >
            <span>Master Syllabus</span>
            <span>→</span>
          </Link>

          <Link
            href={cardMeta.readUrl}
            className="px-3 py-1.5 rounded-lg text-white text-[11px] font-semibold transition-all inline-flex items-center gap-1.5 bg-[#143227] hover:bg-[#1f493b] shadow-xs hover:shadow font-mono"
          >
            <span>Read Master Treatise</span>
            <span>→</span>
          </Link>
        </div>
      </article>
    );
  };

  return (
    <div className="space-y-6">
      {/* View Switcher & Fast Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5dfd3] pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#143227]">
            ▲ Ridge Shelves
          </span>
          <span className="text-xs text-stone-300 font-mono">•</span>
          <span className="text-xs text-stone-600 font-mono">
            {allSubjects.length} Mountain Knowledge Escarpments
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick Filter */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter escarpments..."
              className="w-48 sm:w-64 text-xs bg-white border border-[#dcd6c8] focus:border-[#c25e2e] rounded-lg px-3 py-1.5 outline-none transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            )}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-[#ede8dc] p-0.5 rounded-lg text-xs font-mono">
            <button
              onClick={() => setLayoutMode('SHELVES')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                layoutMode === 'SHELVES'
                  ? 'bg-white text-stone-900 font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Shelves
            </button>
            <button
              onClick={() => setLayoutMode('GRID')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                layoutMode === 'GRID'
                  ? 'bg-white text-stone-900 font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Domains
            </button>
          </div>
        </div>
      </div>

      {/* Mode A: Thematic Shelf Rows (Similar Subjects in Same Line) */}
      {layoutMode === 'SHELVES' ? (
        <div className="space-y-6">
          {THEMATIC_SHELVES.map((shelf) => {
            if (shelf.id === 'shelf-007') {
              const matchesSovereign = (card: (typeof SOVEREIGN_CARDS)[number]) => {
                const matchesCategory = selectedCategory === 'ALL' || card.category === selectedCategory;
                if (!matchesCategory) return false;
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase();
                return (
                  card.title.toLowerCase().includes(q) ||
                  card.description.toLowerCase().includes(q) ||
                  card.authorText.toLowerCase().includes(q) ||
                  card.categoryName.toLowerCase().includes(q) ||
                  card.chips.some((c) => c.toLowerCase().includes(q))
                );
              };

              const filteredCards = SOVEREIGN_CARDS.filter(matchesSovereign);
              if (filteredCards.length === 0) return null;

              return (
                <section
                  key={shelf.id}
                  className="bg-[#ffffff] border-2 border-[#d6cebe] rounded-2xl p-4 sm:p-6 space-y-5 shadow-xs"
                >
                  {/* Shelf Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5dfd3] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl" role="img" aria-label={shelf.title}>
                        {shelf.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg tracking-tight">
                            {shelf.title}
                          </h3>
                          <Link
                            href="/shelf-007"
                            className="text-[11px] font-mono text-emerald-800 hover:text-emerald-950 font-bold underline"
                          >
                            Enter Sovereign Hub →
                          </Link>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-800 font-semibold">
                          8 Sovereign Master Disciplines • 232 Master Chapters • 1,520 MCQ Diagnostic Bank • Release v007 Live
                        </span>
                      </div>
                    </div>

                    <span className={`self-start sm:self-auto text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold uppercase tracking-wider ${shelf.accentColor}`}>
                      {shelf.badge}
                    </span>
                  </div>

                  {/* Thematic Category Filter Tabs */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
                    {[
                      { id: 'ALL', label: 'All 8 Treatises', count: 8, icon: '🏛️' },
                      { id: 'GOV', label: 'Governance & Law', count: 1, icon: '⚖️' },
                      { id: 'ECO', label: 'Macroeconomics & Banking', count: 2, icon: '📈' },
                      { id: 'SCI', label: 'STEM & Logic', count: 2, icon: '🔬' },
                      { id: 'HUM', label: 'Humanities & Codex', count: 3, icon: '🌍' },
                    ].map((tab) => {
                      const isActive = selectedCategory === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedCategory(tab.id as any)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#143227] text-amber-200 font-bold shadow-xs border border-[#143227]'
                              : 'bg-[#f7f5f0] text-stone-700 hover:bg-[#ede8dc] border border-[#e5dfd3]'
                          }`}
                        >
                          <span>{tab.icon}</span>
                          <span>{tab.label}</span>
                          <span
                            className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-stone-200 text-stone-600'
                            }`}
                          >
                            {tab.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Sovereign Subject Cards (3-Column Flagship Layout) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCards.map(renderSovereignMasterCard)}
                  </div>
                </section>
              );
            }

            const shelfSubjects = shelf.subjectSlugs
              .map((slug) => subjectMap.get(slug))
              .filter((s): s is SubjectOverviewItem => s !== undefined)
              .filter(matchesSearch);

            if (shelfSubjects.length === 0) return null;

            return (
              <section
                key={shelf.id}
                className="bg-[#ffffff] border border-[#e5dfd3] rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xs"
              >
                {/* Shelf Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f0ebe1] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl" role="img" aria-label={shelf.title}>
                      {shelf.icon}
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg tracking-tight">
                        {shelf.title}
                      </h3>
                      <span className="text-[11px] font-mono text-stone-600">
                        {shelfSubjects.length} Escarpments in this Ridge
                      </span>
                    </div>
                  </div>

                  <span className={`self-start sm:self-auto text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${shelf.accentColor}`}>
                    {shelf.badge}
                  </span>
                </div>

                {/* Subject Cards inside Shelf */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {shelfSubjects.map(renderSubjectCard)}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Mode B: Compact 3-Column Unified Grid */
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {SOVEREIGN_CARDS.map(renderSovereignMasterCard)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allSubjects.filter(matchesSearch).map(renderSubjectCard)}
          </div>
        </div>
      )}
    </div>
  );
}
