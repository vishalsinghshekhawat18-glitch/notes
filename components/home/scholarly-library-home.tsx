'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SearchDialog } from '@/components/navigation/search-dialog';

interface MonographSubject {
  id: string;
  code: string;
  volumeRoman: string;
  domainId: 'GOV' | 'ECO' | 'EARTH' | 'SCI' | 'LANG';
  domainTitle: string;
  title: string;
  authorText: string;
  description: string;
  totalChapters: number;
  totalWordsText: string;
  mcqCount: number;
  primarySource: string;
  keyCoverage: string;
  hubUrl: string;
  readUrl: string;
}

const KNOWLEDGE_DOMAINS: {
  id: 'GOV' | 'ECO' | 'EARTH' | 'SCI' | 'LANG';
  numeral: string;
  name: string;
  tagline: string;
  emblem: string;
}[] = [
  {
    id: 'GOV',
    numeral: 'I',
    name: 'Governance & Society',
    tagline: 'Constitutional jurisprudence, statecraft, administrative apparatus & universal civilizations.',
    emblem: '⚖️',
  },
  {
    id: 'ECO',
    numeral: 'II',
    name: 'Economy & Finance',
    tagline: 'Macroeconomic corridors, public finance, monetary transmission & banking courseware.',
    emblem: '📈',
  },
  {
    id: 'EARTH',
    numeral: 'III',
    name: 'Earth & Environment',
    tagline: 'Planetary geomorphology, climatology, cartography, UNCLOS & regional divisions.',
    emblem: '🌐',
  },
  {
    id: 'SCI',
    numeral: 'IV',
    name: 'Science & Logic',
    tagline: 'First-principles physics, chemistry, genetics, Vedic calculations & mathematical logic.',
    emblem: '🔬',
  },
  {
    id: 'LANG',
    numeral: 'V',
    name: 'Language & Communication',
    tagline: '120 Golden grammar rules, syntactic inversion, etymological root engines & descriptive essay laboratory.',
    emblem: '🖋️',
  },
];

const MONOGRAPHS: MonographSubject[] = [
  {
    id: 'pol-007',
    code: 'POL-007',
    volumeRoman: 'VOL. I',
    domainId: 'GOV',
    domainTitle: 'Governance & Society',
    title: 'Political Science & Constitutional Governance',
    authorText: 'M. Laxmikanth (8th Ed., 2026) • The Constitution of India (Bare Act) • 2nd ARC',
    description:
      'Comprehensive constitutional treatise covering Basic Structure, Federal Dynamics, Union & State Machinery, Judiciary & PIL, 2nd ARC 15-Report Compendium, Field Administration, and 1,520 curated practice questions.',
    totalChapters: 38,
    totalWordsText: '126K words',
    mcqCount: 1520,
    primarySource: 'Laxmikanth 8th Ed. • Bare Act • 2nd ARC',
    keyCoverage: 'Basic Structure Doctrine · 2nd ARC Compendium · Judicial Review & PIL · Comparative Constitutions',
    hubUrl: '/shelf-007/political-science',
    readUrl: '/shelf-007/political-science/chapter-01',
  },
  {
    id: 'hist-007',
    code: 'HIST-007',
    volumeRoman: 'VOL. II',
    domainId: 'GOV',
    domainTitle: 'Governance & Society',
    title: 'History: Ancient, Medieval, Modern, Rajasthan & World Combined',
    authorText: 'Upinder Singh • Satish Chandra • Bipan Chandra • Sekhar Bandyopadhyay • Spectrum • Norman Lowe',
    description:
      'Unified historical synthesis integrating Ancient Civilizations & Inscriptional Edicts, Medieval Institutional Dynamics, Modern Freedom Struggle, Comprehensive Rajasthan Dynasties & Heritage (RPSC RAS), and World Revolutions.',
    totalChapters: 39,
    totalWordsText: 'Curriculum Blueprint',
    mcqCount: 780,
    primarySource: 'Upinder Singh • Satish Chandra • Bipan Chandra • Spectrum • Norman Lowe',
    keyCoverage: 'Indus & Vedic Archaeology · Delhi Sultanate & Mughals · Modern Freedom Struggle · Rajasthan Heritage · World Revolutions',
    hubUrl: '/shelf-007/history',
    readUrl: '/shelf-007/history/chapter-01',
  },
  {
    id: 'eco-007',
    code: 'ECO-007',
    volumeRoman: 'VOL. III',
    domainId: 'ECO',
    domainTitle: 'Economy & Finance',
    title: 'Economics & Social Issues Master Treatise',
    authorText: 'Mankiw • Ramesh Singh • Sanjiv Verma • Economic Survey 2025-26 • Union Budget',
    description:
      'Rigorous macroeconomic principles integrated with Indian economic policy, RBI monetary framework, fiscal federalism, poverty indices, foreign trade policy, and structural labor reforms.',
    totalChapters: 25,
    totalWordsText: '107K words',
    mcqCount: 420,
    primarySource: 'Economic Survey 2025-26 • Union Budget • RBI Bulletins',
    keyCoverage: 'Macro Foundations · Monetary Transmission · Balance of Payments · Social Infrastructure & Labor Codes',
    hubUrl: '/shelf-007/economics',
    readUrl: '/shelf-007/economics/chapter-01',
  },
  {
    id: 'dbf-007',
    code: 'DBF-007',
    volumeRoman: 'VOL. IV',
    domainId: 'ECO',
    domainTitle: 'Economy & Finance',
    title: 'IIBF Diploma in Banking & Finance (JAIIB Unified)',
    authorText: 'Macmillan IIBF Courseware (IE&IFS, PPB, AFM, RBWM) • RBI Master Directions',
    description:
      'Complete 4-paper banking qualification curriculum covering Indian Economic Architecture, Principles & Practices of Banking, Accounting & Financial Management, and Retail Banking & Wealth Management.',
    totalChapters: 35,
    totalWordsText: '114K words',
    mcqCount: 560,
    primarySource: 'IIBF Official Macmillan Courseware • RBI Master Directions',
    keyCoverage: 'IE&IFS Paper 1 · PPB Paper 2 · AFM Paper 3 · RBWM Paper 4 · Statutory Compliance',
    hubUrl: '/shelf-007/iibf-dbf',
    readUrl: '/shelf-007/iibf-dbf/01_paper_1_ie_ifs-01_module_a_indian_economic_architecture',
  },
  {
    id: 'geo-007',
    code: 'GEO-007',
    volumeRoman: 'VOL. V',
    domainId: 'EARTH',
    domainTitle: 'Earth & Environment',
    title: 'Geography: India, World & Rajasthan Master Treatise',
    authorText: 'Majid Husain • Savindra Singh • NCERT Classes 11–12 • Survey of India Maps',
    description:
      'Rigorous planetary physical geography, geomorphology, atmospheric dynamics, oceanography, Indian physiographic divisions, monsoon mechanisms, natural resources, and comprehensive Rajasthan state geography.',
    totalChapters: 29,
    totalWordsText: '78K words',
    mcqCount: 650,
    primarySource: 'Majid Husain • Savindra Singh • NCERT Classes 11–12',
    keyCoverage: 'Geomorphology & Tectonics · Climatology & Oceanography · Indian Drainage & Agriculture · Rajasthan Topography & Minerals',
    hubUrl: '/shelf-007/geography',
    readUrl: '/shelf-007/geography/chapter-01',
  },
  {
    id: 'sci-007',
    code: 'SCI-007',
    volumeRoman: 'VOL. VI',
    domainId: 'SCI',
    domainTitle: 'Science & Logic',
    title: 'General Science: Physics, Chemistry & Biology Unified',
    authorText: 'NCERT Science Classes 6–12 • Halliday-Resnick • Campbell Biology',
    description:
      'First-principles science curriculum connecting classical and modern mechanics, chemical reactions and atomic structures, cellular biology, genetics, human physiology, biotechnology, and space/nuclear programs.',
    totalChapters: 30,
    totalWordsText: '95K words',
    mcqCount: 890,
    primarySource: 'NCERT Classes 6–12 • Halliday-Resnick • Campbell Biology',
    keyCoverage: 'Newtonian & Modern Physics · Organic Mechanisms & Bonding · Cell Biology & CRISPR · Human Physiology & Biotech',
    hubUrl: '/shelf-007/general-science',
    readUrl: '/shelf-007/general-science/chapter-01',
  },
  {
    id: 'qnt-007',
    code: 'QNT-007',
    volumeRoman: 'VOL. VII',
    domainId: 'SCI',
    domainTitle: 'Science & Logic',
    title: 'Quantitative Aptitude & Mathematical Logic',
    authorText: 'Sarvesh K. Verma (Quantum CAT) • Arun Sharma • R.S. Aggarwal • Rajesh Verma',
    description:
      'Mathematical logic and problem-solving architecture covering Mental Arithmetic, Base Multiplication, Number Theory & Invariants, Pure Algebra & Master Sign-Table, Commercial Arithmetic, Rates, Motion, and Data Interpretation.',
    totalChapters: 29,
    totalWordsText: '45K words',
    mcqCount: 1100,
    primarySource: 'Quantum CAT • Arun Sharma • R.S. Aggarwal',
    keyCoverage: 'Vedic Arithmetic Engines · Number Theory & Divisibility · Master Sign-Table Algebra · Rates, Motion & Alligation',
    hubUrl: '/shelf-007/quantitative-aptitude',
    readUrl: '/shelf-007/quantitative-aptitude/chapter-01',
  },
  {
    id: 'eng-007',
    code: 'ENG-007',
    volumeRoman: 'VOL. VIII',
    domainId: 'LANG',
    domainTitle: 'Language & Communication',
    title: 'English Language & Descriptive Writing Master Codex',
    authorText: 'Nikhil Gupta (Black Book) • Nimisha Bansal • Wren & Martin • Strunk & White',
    description:
      'Comprehensive English language and composition treatise covering 120 Golden Rules of Grammar, Syntactic Inversion, Etymological Root Engine (1,000+ roots), Fixed Prepositions, Descriptive Essay Architecture (PESTLE-S & PEEL), Précis 1/3rd Distillation, and Official Reports.',
    totalChapters: 44,
    totalWordsText: '74K words',
    mcqCount: 950,
    primarySource: 'Black Book • Vocab Prodigy • Wren & Martin • Strunk & White',
    keyCoverage: '120 Golden Grammar Rules · Syntactic Inversion Engine · 1,000+ Etymological Roots · PESTLE-S Essay Laboratory · Précis 1/3rd',
    hubUrl: '/shelf-007/english-language',
    readUrl: '/shelf-007/english-language/chapter-01',
  },
  {
    id: 'hin-007',
    code: 'HIN-007',
    volumeRoman: 'VOL. IX',
    domainId: 'LANG',
    domainTitle: 'Language & Administrative Rhetoric',
    title: 'General Hindi & Administrative Rhetoric (RPSC RAS Paper 4 Master Codex)',
    authorText: 'डॉ. राघव प्रकाश • डॉ. हरदेव बाहरी • डॉ. वासुदेवनंदन प्रसाद • RBSE 9–12 • CSTT',
    description:
      'Sovereign 20-chapter doctoral-depth master treatise covering Phonetics & Sandhi (संधि), Affixes (उपसर्ग/प्रत्यय), Lexicon (पर्यायवाची/विलोम/युग्म), Orthography & Syntax (शब्द शुद्धि/वाक्य शुद्धि), Rhetoric (मुहावरे/कहावतें), CSTT Administrative Terminology, Précis, Expansion, Official Formats & Essays.',
    totalChapters: 42,
    totalWordsText: '61K words',
    mcqCount: 500,
    primarySource: 'Dr. Raghav Prakash • Dr. Hardev Bahri • RBSE 9–12 • CSTT • Secretariat Manual',
    keyCoverage: 'Sandhi & Phonetics · Shabd & Vakya Shuddhi · CSTT Glossary · Official Drafting & Formats · Essay Laboratory',
    hubUrl: '/shelf-007/hindi',
    readUrl: '/shelf-007/hindi/chapter-01',
  },
  {
    id: 'ca-007',
    code: 'CA-007',
    volumeRoman: 'VOL. X',
    domainId: 'ECO',
    domainTitle: 'Contemporary Affairs & Public Policy',
    title: 'Contemporary Issues, Banking Regulation & Current Affairs Master Codex',
    authorText: 'The Gazette of India • Reserve Bank of India • Supreme Court • PIB • SEBI',
    description:
      'Senior Paper-Setter master codex encompassing Static Banking Acts & Prudential Norms, 2026 Monthly & Quarterly Dossiers (January–September), Multi-Exam 35+ Marks Guarantee Mega-Compendium, and 18-Unit Computer Aptitude, CBS & Cybersecurity Master Treatise.',
    totalChapters: 22,
    totalWordsText: '183K words',
    mcqCount: 1200,
    primarySource: 'The Gazette of India • Reserve Bank of India • Supreme Court • PIB',
    keyCoverage: 'Static Banking Regulations · Q1–Q3 2026 Monthly Dossiers · IBPS Mains 35+ Mega-Compendium · Computer Aptitude & CBS',
    hubUrl: '/shelf-007/current-affairs',
    readUrl: '/shelf-007/current-affairs/chapter-01',
  },
];

interface SavedPosition {
  subjectName: string;
  subjectSlug: string;
  topicTitle: string;
  topicSlug: string;
  conceptTitle: string;
  url: string;
  timestamp?: number;
}

const RECENT_REVISIONS = [
  {
    subject: 'Constitutional Governance',
    focus: 'Chapter 32: 2nd ARC 15-Report Compendium',
    source: 'Official 2nd ARC Reports',
    time: 'Audited 2 days ago',
    url: '/shelf-007/political-science/chapter-32',
  },
  {
    subject: 'Economics & Social Issues',
    focus: 'Chapter 23: 4 New Labor Codes & Industrial Relations',
    source: 'Ministry of Labour & Employment',
    time: 'Audited 3 days ago',
    url: '/shelf-007/economics/chapter-23',
  },
  {
    subject: 'Banking & Financial Regulations',
    focus: 'Paper 3: Ind AS & Basel III Capital Ratios',
    source: 'IIBF Macmillan Courseware',
    time: 'Audited 4 days ago',
    url: '/shelf-007/iibf-dbf/03_paper_3_afmb-01_module_a_accounting_principles_and_processes',
  },
  {
    subject: 'General Science & Biotechnology',
    focus: 'Chapter 28: Capstone Consolidated Science Vault',
    source: 'NCERT & Halliday-Resnick',
    time: 'Audited 5 days ago',
    url: '/shelf-007/general-science/chapter-28',
  },
  {
    subject: 'Geography & Climatology',
    focus: 'Chapter 18: Global Environmental Accords & Ecology',
    source: 'Prof. Majid Husain & UNEP Accords',
    time: 'Audited 1 week ago',
    url: '/shelf-007/geography/chapter-18',
  },
];

export function ScholarlyLibraryHome() {
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

  const totalChapters = useMemo(() => MONOGRAPHS.reduce((acc, m) => acc + m.totalChapters, 0), []);
  const totalMCQs = useMemo(() => MONOGRAPHS.reduce((acc, m) => acc + m.mcqCount, 0), []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 text-[#172720] font-sans min-w-0 overflow-x-clip">
      
      {/* =========================================================================
          1. THE SCHOLARLY PROSCENIUM & LIBRARY MASTHEAD
          Compact, dignified, high information density.
          ========================================================================= */}
      <header className="relative border-b border-[#E0D9CB] pb-5 space-y-4 w-full min-w-0">
        
        {/* Archival Register Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono min-w-0">
          <div className="inline-flex items-center gap-2 text-[#10251F] font-medium tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E722C]" />
            <span>MIND OF ARAVALLI</span>
            <span className="text-[#C5BEAF]">•</span>
            <span>SHELF 007 CANONICAL SERIES</span>
          </div>

          <div className="text-[11px] font-mono text-[#5A7365]">
            Universal Knowledge Core · Primary Source Grounded
          </div>
        </div>

        {/* Central Dignified Header */}
        <div className="max-w-3xl space-y-2 min-w-0">
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#10251F] tracking-tight leading-tight">
            A Sovereign Scholarly Library
          </h1>
          <p className="font-serif text-sm sm:text-base text-[#2B3B33] leading-relaxed">
            Eight canonical treatises codified across 269 curriculum chapters and 6,870 practice questions. Grounded in primary statutory bare acts, official reports, and authoritative university courseware.
          </p>
        </div>

        {/* The Macro Register Strip (Key Numbers) */}
        <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-x-3 sm:gap-y-1.5 text-xs font-mono border-t border-[#E8E2D5] text-[#5A7365] w-full min-w-0">
          <span className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded shadow-2xs">
            <strong className="text-[#10251F] font-serif text-xs">5</strong>
            <span>Academic Domains</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded shadow-2xs">
            <strong className="text-[#10251F] font-serif text-xs">8</strong>
            <span>Master Treatises</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded shadow-2xs">
            <strong className="text-[#10251F] font-serif text-xs">{totalChapters}</strong>
            <span>Curriculum Chapters</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded shadow-2xs">
            <strong className="text-[#9E722C] font-serif text-xs">{totalMCQs.toLocaleString()}</strong>
            <span>Practice MCQs</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-2 py-0.5 rounded shadow-2xs">
            <strong className="text-[#10251F] font-serif text-xs">600K+</strong>
            <span>Compiled Words</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#F5F2EB] border border-[#E0D9CB] px-2 py-0.5 rounded text-[#10251F] font-semibold text-[11px] shadow-2xs">
            Bare Acts & Standard Texts
          </span>
        </div>
      </header>

      {/* =========================================================================
          2. THE SCHOLAR'S LECTERN (INTEGRATED ACTIVE STATION & SEARCH TOOLBAR)
          Compact, horizontal, cohesive. No sidebars, zero width blowout.
          ========================================================================= */}
      <section id="continue-reading" className="scroll-mt-20 my-6 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xs w-full min-w-0 overflow-hidden">
        
        {/* Left: Session Waypoint */}
        <div className="flex items-center gap-3.5 min-w-0 flex-1">
          <div className="w-9 h-9 rounded-xl bg-[#10251F] text-[#FAF8F3] border border-[#1E3A2E] flex items-center justify-center font-serif text-base font-bold shrink-0 shadow-2xs">
            ▲
          </div>

          <div className="min-w-0 flex-1">
            {savedPosition ? (
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#5A7365] min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#9E722C] animate-pulse shrink-0" />
                  <span className="uppercase font-semibold shrink-0">Active Reading Session</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">{savedPosition.subjectName}</span>
                </div>
                <div className="font-serif font-bold text-sm sm:text-base text-[#10251F] truncate">
                  {savedPosition.topicTitle}
                </div>
              </div>
            ) : (
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#5A7365]">
                  <span className="uppercase font-semibold">Recommended Starting Foundation</span>
                </div>
                <div className="font-serif font-bold text-sm sm:text-base text-[#10251F] truncate">
                  Political Science & Constitutional Governance (Chapter 01)
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Actions (Resume / Start & Quick Search) */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
          {savedPosition ? (
            <Link
              href={savedPosition.url}
              className="px-4 py-2 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] text-xs font-serif font-bold transition-all shadow-2xs inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <span>Resume Reading</span>
              <span>→</span>
            </Link>
          ) : (
            <Link
              href="/shelf-007/political-science/chapter-01"
              className="px-4 py-2 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] text-xs font-serif font-bold transition-all shadow-2xs inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <span>Begin Chapter 01</span>
              <span>→</span>
            </Link>
          )}

          <button
            onClick={() => setIsSearchOpen(true)}
            className="px-3 py-2 rounded-lg bg-[#FAF9F4] hover:bg-[#F5F2EB] border border-[#E0D9CB] text-xs font-mono text-[#10251F] transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs shrink-0"
            title="Search entire library corpus"
          >
            <span>🔍</span>
            <span className="hidden sm:inline">Search Library</span>
            <kbd className="text-[10px] bg-black/5 px-1.5 py-0.5 rounded">⌘K</kbd>
          </button>
        </div>
      </section>

      {/* =========================================================================
          3. DISCIPLINE FAST-DIRECTORY (HORIZONTAL SCHOLARLY JUMP ANCHORS)
          Instant spatial orientation across the 5 Academic Domains.
          ========================================================================= */}
      <nav id="knowledge-terrain" className="scroll-mt-20 mb-6 flex flex-wrap items-center gap-2 text-xs font-mono w-full min-w-0">
        <span className="text-[11px] font-semibold text-[#5A7365] uppercase tracking-wider mr-1 shrink-0">
          Catalog Index:
        </span>
        {KNOWLEDGE_DOMAINS.map((domain) => {
          const count = MONOGRAPHS.filter((m) => m.domainId === domain.id).length;
          return (
            <a
              key={domain.id}
              href={`#domain-${domain.id.toLowerCase()}`}
              className="px-2.5 py-1 rounded-lg bg-[#FFFFFF] hover:bg-[#F5F2EB] border border-[#E0D9CB] text-[#172720] transition-colors inline-flex items-center gap-1.5 shadow-2xs text-xs shrink-0"
            >
              <span>{domain.emblem}</span>
              <span className="font-medium">{domain.name}</span>
              <span className="text-[10px] text-[#5A7365] font-semibold">
                ({count})
              </span>
            </a>
          );
        })}
      </nav>

      {/* =========================================================================
          4. THE MASTER CORPUS: 5 SECTIONS / 8 ARCHITECTURAL FOLIO PLATES
          Pure vertical book-flow: each treatise is a unified, full-width codex plate.
          Zero column jumps, zero horizontal shifts.
          ========================================================================= */}
      <div className="space-y-8 w-full min-w-0">
        {KNOWLEDGE_DOMAINS.map((domain) => {
          const domainMonographs = MONOGRAPHS.filter((m) => m.domainId === domain.id);

          return (
            <section
              key={domain.id}
              id={`domain-${domain.id.toLowerCase()}`}
              className="space-y-4 scroll-mt-20 w-full min-w-0"
            >
              {/* Domain Masthead Banner */}
              <div className="border-b-2 border-[#10251F] pb-2 flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 min-w-0">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#10251F] flex items-center gap-2">
                    <span>Section {domain.numeral}</span>
                    <span>•</span>
                    <span>{domain.emblem} Academic Domain</span>
                  </div>
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] tracking-tight mt-0.5">
                    {domain.name}
                  </h2>
                </div>
                <p className="text-xs font-serif italic text-[#5A7365] max-w-lg sm:text-right">
                  {domain.tagline}
                </p>
              </div>

              {/* Continuous Book-Folio Sequence (Full-width authoritative plates) */}
              <div className="space-y-4 w-full min-w-0">
                {domainMonographs.map((m) => (
                  <article
                    key={m.id}
                    className="w-full rounded-xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-5 sm:p-6 transition-all duration-200 shadow-xs hover:shadow-sm group min-w-0 overflow-hidden flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3 min-w-0">
                      {/* Top Ribbon: Volume Stamp, Code & High-Level Scale */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E2D5] pb-2.5 text-xs font-mono min-w-0">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px] tracking-wider shrink-0">
                            {m.volumeRoman}
                          </span>
                          <span className="font-bold text-[#9E722C] text-xs shrink-0">
                            {m.code}
                          </span>
                          <span className="hidden sm:inline text-[#C5BEAF]">•</span>
                          <span className="hidden sm:inline text-[11px] text-[#5A7365] truncate font-sans">
                            {m.domainTitle}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 text-[11px] text-[#5A7365] shrink-0">
                          <span className="font-semibold text-[#10251F]">{m.totalChapters} Chapters</span>
                          <span>•</span>
                          <span>{m.totalWordsText}</span>
                          <span>•</span>
                          <span className="font-semibold text-[#9E722C]">{m.mcqCount.toLocaleString()} MCQs</span>
                        </div>
                      </div>

                      {/* Monograph Title & Author Sources */}
                      <div className="min-w-0">
                        <Link href={m.hubUrl} className="block group-hover:text-[#1B4D3C] transition-colors">
                          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] tracking-tight leading-snug">
                            {m.title}
                          </h3>
                        </Link>
                        <p className="text-xs font-mono text-[#5A7365] pt-1 leading-normal break-words">
                          <span className="font-semibold text-[#10251F]">Primary Sources: </span>
                          {m.authorText}
                        </p>
                      </div>

                      {/* Substantive Description */}
                      <p className="font-serif text-xs sm:text-sm text-[#2B3B33] leading-relaxed break-words">
                        {m.description}
                      </p>

                      {/* Editorial Key Coverage Breadcrumb */}
                      <div className="pt-1 text-[11px] font-mono text-[#4A6355] leading-normal break-words">
                        <span className="font-semibold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#E0D9CB]">
                          Curriculum Scope
                        </span>
                        {m.keyCoverage}
                      </div>
                    </div>

                    {/* Folio Bottom Action Ledger */}
                    <div className="pt-3 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-2 text-xs font-mono min-w-0">
                      <Link
                        href={m.hubUrl}
                        className="text-[#5A7365] hover:text-[#10251F] font-medium transition-colors inline-flex items-center gap-1.5 text-xs py-1"
                      >
                        <span>Syllabus & Table of Contents ({m.totalChapters} Chapters)</span>
                        <span>→</span>
                      </Link>

                      <Link
                        href={m.readUrl}
                        className="px-4 py-2 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-semibold text-xs tracking-wide transition-all inline-flex items-center gap-2 shadow-2xs shrink-0"
                      >
                        <span>Begin Reading Codex</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* =========================================================================
          5. CANONICAL AUDIT LEDGER (4-COLUMN GRAND REPOSITORIES)
          Grounded, verifiable, zero pseudo-percentages.
          ========================================================================= */}
      <section id="knowledge-health" className="mt-16 sm:mt-20 border-t-2 border-[#10251F] pt-8 sm:pt-10 space-y-6 scroll-mt-20 w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 min-w-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#10251F]">
              Canonical Provenance & Audit
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10251F] tracking-tight mt-0.5">
              Curriculum Completeness & Source Integrity
            </h2>
          </div>
          <p className="text-xs font-mono text-[#5A7365]">
            Comprehensive Syllabus & Primary Source Coverage
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full min-w-0">
          {[
            {
              title: 'Curriculum Scope',
              value: `${totalChapters} Chapters`,
              detail: `All 8 sovereign treatises codified across ${totalChapters} chapters without commercial abridgement.`,
            },
            {
              title: 'Question Bank',
              value: `${totalMCQs.toLocaleString()} MCQs`,
              detail: 'Curated question bank isolating core conceptual distinctions, traps, and statutory clauses.',
            },
            {
              title: 'Revision Layer',
              value: 'Structured Vaults',
              detail: 'High-yield distinction matrices, formula skeletons, and capstone revision vaults across disciplines.',
            },
            {
              title: 'Source Grounding',
              value: 'Primary Sources',
              detail: 'Every chapter grounded in statutory bare acts, official reports, and authoritative university press texts.',
            },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E0D9CB] space-y-2 flex flex-col justify-between shadow-xs min-w-0 overflow-hidden"
            >
              <div className="space-y-1 min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#5A7365]">
                  {metric.title}
                </span>
                <div className="font-serif font-bold text-2xl text-[#10251F] truncate">
                  {metric.value}
                </div>
                <p className="text-xs font-serif text-[#5A7365] leading-relaxed pt-1 break-words">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. RECENT LIBRARY AUDIT LOGS (HORIZONTAL ARCHIVAL LEDGER)
          ========================================================================= */}
      <section className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#F5F2EB] border border-[#E0D9CB] space-y-4 w-full min-w-0 overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#E0D9CB] pb-2.5 min-w-0">
          <span className="text-xs font-mono uppercase tracking-wider text-[#5A7365]">
            Recent Archival Revisions & Subject Audits
          </span>
          <span className="text-[11px] font-mono text-[#9E722C] font-semibold">
            All Verified Routes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono w-full min-w-0">
          {RECENT_REVISIONS.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className="p-3 rounded-lg bg-[#FFFFFF] hover:bg-[#FAF9F4] border border-[#E0D9CB] transition-colors group block shadow-2xs min-w-0 overflow-hidden"
            >
              <div className="font-serif font-bold text-sm text-[#10251F] group-hover:text-[#1B4D3C] truncate">
                {item.subject}
              </div>
              <div className="text-[11px] text-[#5A7365] truncate pt-0.5">
                {item.focus}
              </div>
              <div className="text-[10px] text-[#9E722C] pt-1 truncate">
                {item.time} · {item.source}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Global Search Dialog Modal */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
