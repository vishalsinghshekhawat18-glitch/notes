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

export function ScholarlyLibraryHome() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [savedPosition, setSavedPosition] = useState<SavedPosition | null>(null);
  const [activeDomainFilter, setActiveDomainFilter] = useState<'ALL' | 'GOV' | 'ECO' | 'EARTH' | 'SCI' | 'LANG'>('ALL');

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
      // Ignore parse failure gracefully
    }
  }, []);

  const totalChapters = useMemo(() => MONOGRAPHS.reduce((acc, m) => acc + m.totalChapters, 0), []);
  const totalMCQs = useMemo(() => MONOGRAPHS.reduce((acc, m) => acc + m.mcqCount, 0), []);

  const filteredDomains = useMemo(() => {
    if (activeDomainFilter === 'ALL') {
      return KNOWLEDGE_DOMAINS;
    }
    return KNOWLEDGE_DOMAINS.filter((d) => d.id === activeDomainFilter);
  }, [activeDomainFilter]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12 sm:space-y-16 text-[#172720] min-w-0 overflow-x-clip">

      {/* =========================================================================
          LAYER B: THE LIBRARY ENTRANCE & EDITORIAL HERO
          Atmospheric, spatial, deep-forest pavilion overlooking the Aravallis.
          ========================================================================= */}
      <section className="relative rounded-3xl bg-[#0B1E18] text-[#FAF8F3] border border-[#1E3A2E] shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden w-full min-w-0">
        
        {/* Subtle Archival Atmosphere Texture & Topography Mountain Silhouette */}
        <div className="absolute inset-0 bg-radial from-[#1A4536]/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(197,155,75,0.08),transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[radial-gradient(circle_at_bottom_left,rgba(30,69,55,0.4),transparent_70%)] pointer-events-none" />

        {/* Decorative Aravalli Mountain Ridge Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none opacity-20 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
            <path
              d="M0 120L0 75C140 45 280 85 420 50C560 15 700 65 840 35C980 5 1100 45 1200 25L1200 120Z"
              fill="#C59B4B"
              fillOpacity="0.3"
            />
            <path
              d="M0 120L0 90C160 65 320 105 480 75C640 45 790 90 930 60C1070 30 1140 55 1200 50L1200 120Z"
              fill="#1B4D3C"
              fillOpacity="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 space-y-8 w-full min-w-0">
          
          {/* Top Archival Header Ledger Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono border-b border-[#1E3A2E] pb-4 min-w-0">
            <div className="inline-flex items-center gap-2 text-[#FAF8F3] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C59B4B] shadow-[0_0_8px_rgba(197,155,75,0.6)] shrink-0" />
              <span className="font-bold">MIND OF ARAVALLI</span>
              <span className="text-[#2A4D3E]">•</span>
              <span className="text-[#C59B4B] font-semibold">SOVEREIGN KNOWLEDGE LIBRARY</span>
              <span className="hidden sm:inline text-[#2A4D3E]">•</span>
              <span className="hidden sm:inline text-[#A1B8A9]">SHELF 007 CANONICAL SERIES</span>
            </div>

            <div className="inline-flex items-center gap-2 text-[#A1B8A9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A4D3E]" />
              <span>Universal Knowledge Core · Primary Statutory Grounding · Zero Abridgement</span>
            </div>
          </div>

          {/* Desktop 12-Column Editorial Grid: Hero Proposition + Accession Register */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end min-w-0">
            
            {/* Left 8 Cols: Institutional Monograph Opening */}
            <div className="lg:col-span-7 space-y-4 min-w-0">
              <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#FAF8F3] tracking-tight leading-[1.12]">
                A Sovereign Scholarly Library
              </h1>
              <p className="font-serif text-base sm:text-lg text-[#D5DDD6] leading-relaxed max-w-2xl">
                Ten canonical master treatises codified across {totalChapters} curriculum chapters and {totalMCQs.toLocaleString()} curated practice questions. Grounded in primary statutory bare acts, official inquiry reports, and authoritative university courseware.
              </p>
              <div className="pt-2 text-xs font-serif italic text-[#C59B4B] max-w-xl">
                &ldquo;Conceived and codified as an enduring intellectual sanctuary overlooking the ancient Aravalli ranges.&rdquo;
              </div>
            </div>

            {/* Right 5 Cols: The Archival Accession Ledger Tablet */}
            <div className="lg:col-span-5 rounded-2xl bg-[#133428]/80 border border-[#234A3C] p-4 sm:p-5 backdrop-blur-xs space-y-3.5 shadow-md">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#A1B8A9] border-b border-[#1E3A2E] pb-2">
                <span>Accession Register</span>
                <span className="text-[#C59B4B] font-semibold">Audited Corpus</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                <div className="p-2 rounded-lg bg-[#0E271F] border border-[#1E3A2E]">
                  <span className="text-[10px] text-[#A1B8A9] uppercase">Domains</span>
                  <div className="font-serif text-lg font-bold text-[#FAF8F3] mt-0.5">5</div>
                  <span className="text-[10px] text-[#C59B4B]">Knowledge Wings</span>
                </div>

                <div className="p-2 rounded-lg bg-[#0E271F] border border-[#1E3A2E]">
                  <span className="text-[10px] text-[#A1B8A9] uppercase">Treatises</span>
                  <div className="font-serif text-lg font-bold text-[#FAF8F3] mt-0.5">10</div>
                  <span className="text-[10px] text-[#C59B4B]">Master Codices</span>
                </div>

                <div className="p-2 rounded-lg bg-[#0E271F] border border-[#1E3A2E]">
                  <span className="text-[10px] text-[#A1B8A9] uppercase">Chapters</span>
                  <div className="font-serif text-lg font-bold text-[#FAF8F3] mt-0.5">{totalChapters}</div>
                  <span className="text-[10px] text-[#C59B4B]">Full Curriculum</span>
                </div>

                <div className="p-2 rounded-lg bg-[#0E271F] border border-[#1E3A2E]">
                  <span className="text-[10px] text-[#A1B8A9] uppercase">Questions</span>
                  <div className="font-serif text-lg font-bold text-[#FAF8F3] mt-0.5">{totalMCQs.toLocaleString()}</div>
                  <span className="text-[10px] text-[#C59B4B]">Practice MCQs</span>
                </div>

                <div className="p-2 rounded-lg bg-[#0E271F] border border-[#1E3A2E]">
                  <span className="text-[10px] text-[#A1B8A9] uppercase">Synthesis</span>
                  <div className="font-serif text-lg font-bold text-[#FAF8F3] mt-0.5">600K+</div>
                  <span className="text-[10px] text-[#C59B4B]">Compiled Words</span>
                </div>

                <div className="p-2 rounded-lg bg-[#0E271F] border border-[#1E3A2E]">
                  <span className="text-[10px] text-[#A1B8A9] uppercase">Sources</span>
                  <div className="font-serif text-xs font-bold text-[#FAF8F3] mt-1 leading-snug">Bare Acts</div>
                  <span className="text-[10px] text-[#C59B4B]">Zero Abridgement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER C: THE SCHOLAR'S STUDY DESK (Active Reading Waypoint)
          "Your bookmark is waiting for you." High visual prominence.
          ========================================================================= */}
      <section
        id="continue-reading"
        className="scroll-mt-20 p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8CEBC] hover:border-[#10251F]/40 transition-colors shadow-sm w-full min-w-0 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 min-w-0">
          
          {/* Active Bookmark Identification */}
          <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
            <div className="w-13 h-13 rounded-2xl bg-[#10251F] text-[#FAF8F3] border border-[#1E3A2E] flex items-center justify-center font-serif text-2xl font-bold shrink-0 shadow-2xs">
              {savedPosition ? '🔖' : '▲'}
            </div>

            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {savedPosition ? (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C59B4B] animate-pulse shrink-0" />
                    <span className="uppercase font-bold text-[#10251F] tracking-wide">
                      Your Study Bookmark
                    </span>
                    <span className="text-[#A1B8A9]">•</span>
                    <span className="text-[#5A7365] font-semibold truncate bg-[#F5F2EB] px-2 py-0.5 rounded border border-[#E0D9CB]">
                      {savedPosition.subjectName}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10251F] shrink-0" />
                    <span className="uppercase font-bold text-[#10251F] tracking-wide">
                      Recommended Starting Foundation
                    </span>
                    <span className="text-[#A1B8A9]">•</span>
                    <span className="text-[#5A7365] font-semibold bg-[#F5F2EB] px-2 py-0.5 rounded border border-[#E0D9CB]">
                      Volume I: Governance & Society
                    </span>
                  </>
                )}
              </div>

              <div className="font-serif font-bold text-lg sm:text-2xl text-[#10251F] tracking-tight truncate">
                {savedPosition ? savedPosition.topicTitle : 'Political Science & Constitutional Governance (Chapter 01)'}
              </div>

              <p className="text-xs font-mono text-[#5A7365] truncate">
                {savedPosition
                  ? 'Resumes exact reading position and scroll depth from your field notebook.'
                  : 'Constitutional Foundations, Historical Evolution & Preamble Juridical Doctrines.'}
              </p>
            </div>
          </div>

          {/* Primary Action Suite */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#E8E2D5]">
            {savedPosition ? (
              <Link
                href={savedPosition.url}
                className="px-6 py-3 rounded-xl bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] text-sm font-serif font-bold transition-all shadow-xs inline-flex items-center justify-center gap-2 flex-1 sm:flex-initial"
              >
                <span>Resume Reading Codex</span>
                <span>→</span>
              </Link>
            ) : (
              <Link
                href="/shelf-007/political-science/chapter-01"
                className="px-6 py-3 rounded-xl bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] text-sm font-serif font-bold transition-all shadow-xs inline-flex items-center justify-center gap-2 flex-1 sm:flex-initial"
              >
                <span>Begin Chapter 01</span>
                <span>→</span>
              </Link>
            )}

            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-4 py-3 rounded-xl bg-[#FAF9F4] hover:bg-[#F5F2EB] border border-[#D8CEBC] text-xs font-mono text-[#10251F] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-2xs shrink-0"
              title="Search entire library corpus"
            >
              <span>🔍</span>
              <span className="hidden sm:inline font-semibold">Search Library</span>
              <kbd className="text-[10px] bg-black/5 text-[#5A7365] px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER D: PRIMARY ACTION NAVIGATION STRIP
          Streamlined operational paths: Continue → Explore → Revise → Search.
          ========================================================================= */}
      <nav aria-label="Library Navigation Strip" className="p-3 sm:p-4 rounded-2xl bg-[#F5F2EB] border border-[#E0D9CB] w-full min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-[#5A7365] uppercase tracking-wider mr-1 shrink-0">
              Corpus Paths:
            </span>

            <a
              href="#continue-reading"
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#FAF9F4] border border-[#E0D9CB] text-[#10251F] font-semibold transition-colors inline-flex items-center gap-1.5 shadow-2xs shrink-0"
            >
              <span>📖</span>
              <span>Study Desk</span>
            </a>

            <Link
              href="/shelf-007"
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#FAF9F4] border border-[#E0D9CB] text-[#10251F] font-semibold transition-colors inline-flex items-center gap-1.5 shadow-2xs shrink-0"
            >
              <span>🏛️</span>
              <span>All 10 Treatises</span>
            </Link>

            <a
              href="#knowledge-terrain"
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#FAF9F4] border border-[#E0D9CB] text-[#10251F] font-semibold transition-colors inline-flex items-center gap-1.5 shadow-2xs shrink-0"
            >
              <span>🧭</span>
              <span>5 Thematic Wings</span>
            </a>

            <Link
              href="/shelf-007/political-science/chapter-30"
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#FAF9F4] border border-[#E0D9CB] text-[#10251F] font-semibold transition-colors inline-flex items-center gap-1.5 shadow-2xs shrink-0"
            >
              <span>⚡</span>
              <span>Rapid Revision Vaults</span>
            </Link>
          </div>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-xs font-mono text-[#9E722C] hover:text-[#10251F] font-semibold px-2 py-1 transition-colors cursor-pointer shrink-0"
          >
            ⌘K Global Search Dialog →
          </button>
        </div>
      </nav>

      {/* =========================================================================
          LAYER E: THE FIVE WINGS OF THE LIBRARY (Floorplan & Wing Navigator)
          Atlas-like spatial index. Major navigational moment.
          ========================================================================= */}
      <section id="knowledge-terrain" className="scroll-mt-20 space-y-6 w-full min-w-0">
        <div className="border-b-2 border-[#10251F] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2 min-w-0">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E722C] font-semibold">
              Archival Floorplan
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10251F] tracking-tight mt-0.5">
              The Five Wings of the Library
            </h2>
          </div>
          <p className="text-xs font-mono text-[#5A7365] max-w-md sm:text-right">
            Select a wing to isolate study or explore the unified library corpus across disciplines
          </p>
        </div>

        {/* The 5 Domain Wing Selectors (Interactive Spatial Navigation) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 w-full min-w-0 text-xs font-mono">
          <button
            onClick={() => setActiveDomainFilter('ALL')}
            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 shadow-2xs ${
              activeDomainFilter === 'ALL'
                ? 'bg-[#10251F] text-[#FAF8F3] border-[#10251F] shadow-sm'
                : 'bg-[#FFFFFF] text-[#172720] border-[#E0D9CB] hover:bg-[#FAF9F4] hover:border-[#10251F]/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg">🏛️</span>
              <span className={`text-[10px] font-bold ${activeDomainFilter === 'ALL' ? 'text-[#C59B4B]' : 'text-[#5A7365]'}`}>
                10 Treatises
              </span>
            </div>
            <div className="font-serif font-bold text-xs sm:text-sm leading-tight">All Library Wings</div>
            <span className={`text-[10px] ${activeDomainFilter === 'ALL' ? 'text-[#A1B8A9]' : 'text-[#5A7365]'}`}>
              Full Codex Sequence
            </span>
          </button>

          {KNOWLEDGE_DOMAINS.map((domain) => {
            const count = MONOGRAPHS.filter((m) => m.domainId === domain.id).length;
            const isSelected = activeDomainFilter === domain.id;

            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomainFilter(isSelected ? 'ALL' : domain.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 shadow-2xs ${
                  isSelected
                    ? 'bg-[#10251F] text-[#FAF8F3] border-[#10251F] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#172720] border-[#E0D9CB] hover:bg-[#FAF9F4] hover:border-[#10251F]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">{domain.emblem}</span>
                  <span className={`text-[10px] font-bold ${isSelected ? 'text-[#C59B4B]' : 'text-[#5A7365]'}`}>
                    Sec. {domain.numeral}
                  </span>
                </div>
                <div className="font-serif font-bold text-xs sm:text-sm leading-tight truncate">
                  {domain.name}
                </div>
                <span className={`text-[10px] ${isSelected ? 'text-[#A1B8A9]' : 'text-[#5A7365]'}`}>
                  {count} {count === 1 ? 'Treatise' : 'Treatises'}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          LAYER F: MASTER TREATISE PRESENTATION (DOMAIN-SPECIFIC VISUAL FRAMING)
          Breaks repetition! Each domain has distinct layout framing.
          ========================================================================= */}
      <div className="space-y-16 w-full min-w-0">

        {/* -----------------------------------------------------------------------
            WING I: GOVERNANCE & SOCIETY (Constitutional & Archival Framing)
            ----------------------------------------------------------------------- */}
        {(activeDomainFilter === 'ALL' || activeDomainFilter === 'GOV') && (
          <section id="domain-gov" className="space-y-6 scroll-mt-20 w-full min-w-0">
            {/* Wing Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F2EB] border-l-4 border-l-[#10251F] border-y border-r border-[#E0D9CB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#10251F] text-[#FAF8F3] flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  ⚖️
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#9E722C] font-bold">
                    Section I · Governance & Society
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] tracking-tight">
                    Governance & Society
                  </h3>
                </div>
              </div>
              <p className="text-xs font-serif italic text-[#5A7365] max-w-md sm:text-right">
                Constitutional jurisprudence, statecraft, administrative apparatus & universal civilizations.
              </p>
            </div>

            {/* Asymmetrical Folio Spread: POL-007 (Featured Grand Plate) & HIST-007 */}
            <div className="space-y-5 w-full min-w-0">
              {/* POL-007: Grand Constitutional Codex Plate */}
              {(() => {
                const pol = MONOGRAPHS.find((m) => m.id === 'pol-007')!;
                return (
                  <article className="w-full rounded-2xl bg-[#FFFFFF] border-2 border-[#E0D9CB] hover:border-[#10251F] p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md min-w-0 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left 8 Cols: Substantive Monograph Column */}
                      <div className="lg:col-span-8 space-y-3.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono border-b border-[#E8E2D5] pb-2.5">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#10251F] text-[#FAF8F3] font-bold text-[10px] tracking-wider shrink-0">
                            {pol.volumeRoman}
                          </span>
                          <span className="font-bold text-[#9E722C] text-xs shrink-0">
                            {pol.code}
                          </span>
                          <span className="text-[#C5BEAF]">•</span>
                          <span className="text-[11px] text-[#5A7365] font-sans truncate">
                            {pol.domainTitle}
                          </span>
                        </div>

                        <Link href={pol.hubUrl} className="block group">
                          <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors tracking-tight leading-snug">
                            {pol.title}
                          </h4>
                        </Link>

                        <div className="text-xs font-mono text-[#5A7365] leading-normal break-words bg-[#FAF9F4] p-2.5 rounded-xl border border-[#EBE5D8]">
                          <span className="font-bold text-[#10251F] uppercase text-[10px] tracking-wider mr-1.5">
                            Primary Sources:
                          </span>
                          {pol.authorText}
                        </div>

                        <p className="font-serif text-sm text-[#2B3B33] leading-relaxed break-words">
                          {pol.description}
                        </p>

                        <div className="text-[11px] font-mono text-[#4A6355] leading-normal break-words">
                          <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-2 py-0.5 rounded border border-[#E0D9CB]">
                            Curriculum Scope
                          </span>
                          <span>{pol.keyCoverage}</span>
                        </div>
                      </div>

                      {/* Right 4 Cols: Archival Ledger Rail & Actions */}
                      <div className="lg:col-span-4 p-5 rounded-xl bg-[#FAF9F4] border border-[#E0D9CB] space-y-4 flex flex-col justify-between h-full">
                        <div className="space-y-2.5 text-xs font-mono">
                          <div className="text-[10px] uppercase tracking-widest text-[#9E722C] font-bold border-b border-[#E8E2D5] pb-1.5">
                            Codex Metrics
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#5A7365]">Curriculum:</span>
                            <span className="font-bold text-[#10251F]">{pol.totalChapters} Chapters</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#5A7365]">Synthesis:</span>
                            <span className="font-bold text-[#10251F]">{pol.totalWordsText}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#5A7365]">Questions:</span>
                            <span className="font-bold text-[#9E722C]">{pol.mcqCount.toLocaleString()} MCQs</span>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-[#E8E2D5]">
                          <Link
                            href={pol.readUrl}
                            className="w-full px-4 py-2.5 rounded-xl bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs tracking-wide transition-all inline-flex items-center justify-center gap-2 shadow-2xs"
                          >
                            <span>Begin Reading Codex</span>
                            <span>→</span>
                          </Link>

                          <Link
                            href={pol.hubUrl}
                            className="w-full text-center text-[#5A7365] hover:text-[#10251F] font-semibold transition-colors inline-block text-xs py-1"
                          >
                            <span>Syllabus & TOC ({pol.totalChapters} Ch.)</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })()}

              {/* HIST-007: Archival Chronological Folio */}
              {(() => {
                const hist = MONOGRAPHS.find((m) => m.id === 'hist-007')!;
                return (
                  <article className="w-full rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-6 transition-all duration-200 shadow-xs hover:shadow-md min-w-0 overflow-hidden space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E2D5] pb-3 text-xs font-mono">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#10251F] text-[#FAF8F3] font-bold text-[10px] tracking-wider shrink-0">
                          {hist.volumeRoman}
                        </span>
                        <span className="font-bold text-[#9E722C] text-xs shrink-0">
                          {hist.code}
                        </span>
                        <span className="text-[#C5BEAF]">•</span>
                        <span className="text-[11px] text-[#5A7365] font-sans truncate">
                          {hist.domainTitle}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-[#5A7365] font-mono">
                        <span className="font-semibold text-[#10251F]">{hist.totalChapters} Chapters</span>
                        <span>•</span>
                        <span>{hist.totalWordsText}</span>
                        <span>•</span>
                        <span className="font-semibold text-[#9E722C]">{hist.mcqCount.toLocaleString()} MCQs</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Link href={hist.hubUrl} className="block group">
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors tracking-tight">
                          {hist.title}
                        </h4>
                      </Link>
                      <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2 rounded-lg border border-[#EBE5D8]">
                        <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1.5">Primary Sources:</span>
                        {hist.authorText}
                      </p>
                    </div>

                    <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                      {hist.description}
                    </p>

                    <div className="text-[11px] font-mono text-[#4A6355]">
                      <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-2 py-0.5 rounded border border-[#E0D9CB]">
                        Curriculum Scope
                      </span>
                      <span>{hist.keyCoverage}</span>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      <Link
                        href={hist.hubUrl}
                        className="text-[#5A7365] hover:text-[#10251F] font-semibold transition-colors"
                      >
                        Syllabus & Complete Table of Contents ({hist.totalChapters} Chapters) →
                      </Link>

                      <Link
                        href={hist.readUrl}
                        className="px-4 py-2 rounded-xl bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs transition-all shadow-2xs"
                      >
                        Begin Reading Codex →
                      </Link>
                    </div>
                  </article>
                );
              })()}
            </div>
          </section>
        )}

        {/* -----------------------------------------------------------------------
            WING II: ECONOMY & FINANCE (Twin Financial Spread + Compendium Dossier)
            ----------------------------------------------------------------------- */}
        {(activeDomainFilter === 'ALL' || activeDomainFilter === 'ECO') && (
          <section id="domain-eco" className="space-y-6 scroll-mt-20 w-full min-w-0">
            {/* Wing Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F2EB] border-l-4 border-l-[#9E722C] border-y border-r border-[#E0D9CB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#10251F] text-[#FAF8F3] flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  📈
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#9E722C] font-bold">
                    Section II · Economy & Finance
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] tracking-tight">
                    Economy & Finance
                  </h3>
                </div>
              </div>
              <p className="text-xs font-serif italic text-[#5A7365] max-w-md sm:text-right">
                Macroeconomic corridors, public finance, monetary transmission & banking courseware.
              </p>
            </div>

            {/* Twin Financial Spread (2 columns on desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full min-w-0">
              {/* ECO-007 */}
              {(() => {
                const eco = MONOGRAPHS.find((m) => m.id === 'eco-007')!;
                return (
                  <article className="rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between gap-4">
                    <div className="space-y-3 min-w-0">
                      <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px]">
                          {eco.volumeRoman} · {eco.code}
                        </span>
                        <span className="font-semibold text-[#10251F] text-[11px]">
                          {eco.totalChapters} Ch. · {eco.mcqCount} MCQs
                        </span>
                      </div>

                      <Link href={eco.hubUrl} className="block group">
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors leading-snug">
                          {eco.title}
                        </h4>
                      </Link>

                      <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2 rounded-lg border border-[#EBE5D8] line-clamp-2">
                        <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1">Sources:</span>
                        {eco.authorText}
                      </p>

                      <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                        {eco.description}
                      </p>

                      <div className="text-[11px] font-mono text-[#4A6355]">
                        <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#E0D9CB]">
                          Scope
                        </span>
                        <span>{eco.keyCoverage}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between gap-2 text-xs font-mono">
                      <Link href={eco.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                        Syllabus →
                      </Link>
                      <Link href={eco.readUrl} className="px-3.5 py-1.5 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                        Begin Reading →
                      </Link>
                    </div>
                  </article>
                );
              })()}

              {/* DBF-007 */}
              {(() => {
                const dbf = MONOGRAPHS.find((m) => m.id === 'dbf-007')!;
                return (
                  <article className="rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between gap-4">
                    <div className="space-y-3 min-w-0">
                      <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px]">
                          {dbf.volumeRoman} · {dbf.code}
                        </span>
                        <span className="font-semibold text-[#10251F] text-[11px]">
                          {dbf.totalChapters} Ch. · {dbf.mcqCount} MCQs
                        </span>
                      </div>

                      <Link href={dbf.hubUrl} className="block group">
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors leading-snug">
                          {dbf.title}
                        </h4>
                      </Link>

                      <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2 rounded-lg border border-[#EBE5D8] line-clamp-2">
                        <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1">Sources:</span>
                        {dbf.authorText}
                      </p>

                      <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                        {dbf.description}
                      </p>

                      <div className="text-[11px] font-mono text-[#4A6355]">
                        <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#E0D9CB]">
                          Scope
                        </span>
                        <span>{dbf.keyCoverage}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between gap-2 text-xs font-mono">
                      <Link href={dbf.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                        Syllabus →
                      </Link>
                      <Link href={dbf.readUrl} className="px-3.5 py-1.5 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                        Begin Reading →
                      </Link>
                    </div>
                  </article>
                );
              })()}
            </div>

            {/* Full-Width Compendium Dossier Plate: CA-007 */}
            {(() => {
              const ca = MONOGRAPHS.find((m) => m.id === 'ca-007')!;
              return (
                <article className="w-full rounded-2xl bg-[#FFFFFF] border-2 border-[#E0D9CB] hover:border-[#10251F] p-6 sm:p-7 transition-all duration-200 shadow-xs hover:shadow-md space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E2D5] pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#10251F] text-[#FAF8F3] font-bold text-[10px] tracking-wider">
                        {ca.volumeRoman}
                      </span>
                      <span className="font-bold text-[#9E722C] text-xs">
                        {ca.code}
                      </span>
                      <span className="text-[#C5BEAF]">•</span>
                      <span className="text-[11px] text-[#5A7365] font-sans">
                        {ca.domainTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#5A7365]">
                      <span className="font-semibold text-[#10251F]">{ca.totalChapters} Chapters</span>
                      <span>•</span>
                      <span>{ca.totalWordsText}</span>
                      <span>•</span>
                      <span className="font-semibold text-[#9E722C]">{ca.mcqCount.toLocaleString()} MCQs</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Link href={ca.hubUrl} className="block group">
                      <h4 className="font-serif font-bold text-lg sm:text-2xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors tracking-tight">
                        {ca.title}
                      </h4>
                    </Link>
                    <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2.5 rounded-xl border border-[#EBE5D8]">
                      <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1.5">Statutory & Gazette Sources:</span>
                      {ca.authorText}
                    </p>
                  </div>

                  <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                    {ca.description}
                  </p>

                  <div className="text-[11px] font-mono text-[#4A6355]">
                    <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-2 py-0.5 rounded border border-[#E0D9CB]">
                      Curriculum Scope
                    </span>
                    <span>{ca.keyCoverage}</span>
                  </div>

                  <div className="pt-3 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <Link href={ca.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                      Syllabus & Complete Table of Contents ({ca.totalChapters} Chapters) →
                    </Link>
                    <Link href={ca.readUrl} className="px-4 py-2 rounded-xl bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                      Begin Reading Codex →
                    </Link>
                  </div>
                </article>
              );
            })()}
          </section>
        )}

        {/* -----------------------------------------------------------------------
            WING III: EARTH & ENVIRONMENT (Topographical & Cartographic Folio)
            ----------------------------------------------------------------------- */}
        {(activeDomainFilter === 'ALL' || activeDomainFilter === 'EARTH') && (
          <section id="domain-earth" className="space-y-6 scroll-mt-20 w-full min-w-0">
            {/* Wing Banner with Topographic Contour Accent */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F2EB] border-l-4 border-l-[#1F493B] border-y border-r border-[#E0D9CB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#10251F] text-[#FAF8F3] flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  🌐
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#9E722C] font-bold">
                    Section III · Earth & Environment
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] tracking-tight">
                    Earth & Environment
                  </h3>
                </div>
              </div>
              <p className="text-xs font-serif italic text-[#5A7365] max-w-md sm:text-right">
                Planetary geomorphology, climatology, cartography, UNCLOS & regional divisions.
              </p>
            </div>

            {/* Expansive Cartographic Folio Plate: GEO-007 */}
            {(() => {
              const geo = MONOGRAPHS.find((m) => m.id === 'geo-007')!;
              return (
                <article className="w-full rounded-2xl bg-[#FFFFFF] border-2 border-[#E0D9CB] hover:border-[#10251F] p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E2D5] pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#10251F] text-[#FAF8F3] font-bold text-[10px] tracking-wider">
                        {geo.volumeRoman}
                      </span>
                      <span className="font-bold text-[#9E722C] text-xs">
                        {geo.code}
                      </span>
                      <span className="text-[#C5BEAF]">•</span>
                      <span className="text-[11px] text-[#5A7365] font-sans">
                        {geo.domainTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#5A7365]">
                      <span className="font-semibold text-[#10251F]">{geo.totalChapters} Chapters</span>
                      <span>•</span>
                      <span>{geo.totalWordsText}</span>
                      <span>•</span>
                      <span className="font-semibold text-[#9E722C]">{geo.mcqCount.toLocaleString()} MCQs</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Link href={geo.hubUrl} className="block group">
                      <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors tracking-tight">
                        {geo.title}
                      </h4>
                    </Link>
                    <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2.5 rounded-xl border border-[#EBE5D8]">
                      <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1.5">Authoritative Cartographic Sources:</span>
                      {geo.authorText}
                    </p>
                  </div>

                  <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                    {geo.description}
                  </p>

                  <div className="text-[11px] font-mono text-[#4A6355]">
                    <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-2 py-0.5 rounded border border-[#E0D9CB]">
                      Curriculum Scope
                    </span>
                    <span>{geo.keyCoverage}</span>
                  </div>

                  <div className="pt-3.5 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <Link href={geo.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                      Syllabus & Complete Table of Contents ({geo.totalChapters} Chapters) →
                    </Link>
                    <Link href={geo.readUrl} className="px-4 py-2 rounded-xl bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                      Begin Reading Codex →
                    </Link>
                  </div>
                </article>
              );
            })()}
          </section>
        )}

        {/* -----------------------------------------------------------------------
            WING IV: SCIENCE & LOGIC (Empirical & Mathematical Laboratory Grid)
            ----------------------------------------------------------------------- */}
        {(activeDomainFilter === 'ALL' || activeDomainFilter === 'SCI') && (
          <section id="domain-sci" className="space-y-6 scroll-mt-20 w-full min-w-0">
            {/* Wing Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F2EB] border-l-4 border-l-[#1E3A2E] border-y border-r border-[#E0D9CB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#10251F] text-[#FAF8F3] flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  🔬
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#9E722C] font-bold">
                    Section IV · Science & Logic
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] tracking-tight">
                    Science & Logic
                  </h3>
                </div>
              </div>
              <p className="text-xs font-serif italic text-[#5A7365] max-w-md sm:text-right">
                First-principles physics, chemistry, genetics, Vedic calculations & mathematical logic.
              </p>
            </div>

            {/* Dual Laboratory Grid (2 columns on desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full min-w-0">
              {/* SCI-007 */}
              {(() => {
                const sci = MONOGRAPHS.find((m) => m.id === 'sci-007')!;
                return (
                  <article className="rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between gap-4">
                    <div className="space-y-3 min-w-0">
                      <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px]">
                          {sci.volumeRoman} · {sci.code}
                        </span>
                        <span className="font-semibold text-[#10251F] text-[11px]">
                          {sci.totalChapters} Ch. · {sci.mcqCount} MCQs
                        </span>
                      </div>

                      <Link href={sci.hubUrl} className="block group">
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors leading-snug">
                          {sci.title}
                        </h4>
                      </Link>

                      <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2 rounded-lg border border-[#EBE5D8] line-clamp-2">
                        <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1">Sources:</span>
                        {sci.authorText}
                      </p>

                      <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                        {sci.description}
                      </p>

                      <div className="text-[11px] font-mono text-[#4A6355]">
                        <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#E0D9CB]">
                          Scope
                        </span>
                        <span>{sci.keyCoverage}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between gap-2 text-xs font-mono">
                      <Link href={sci.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                        Syllabus →
                      </Link>
                      <Link href={sci.readUrl} className="px-3.5 py-1.5 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                        Begin Reading →
                      </Link>
                    </div>
                  </article>
                );
              })()}

              {/* QNT-007 */}
              {(() => {
                const qnt = MONOGRAPHS.find((m) => m.id === 'qnt-007')!;
                return (
                  <article className="rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between gap-4">
                    <div className="space-y-3 min-w-0">
                      <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px]">
                          {qnt.volumeRoman} · {qnt.code}
                        </span>
                        <span className="font-semibold text-[#10251F] text-[11px]">
                          {qnt.totalChapters} Ch. · {qnt.mcqCount} MCQs
                        </span>
                      </div>

                      <Link href={qnt.hubUrl} className="block group">
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors leading-snug">
                          {qnt.title}
                        </h4>
                      </Link>

                      <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2 rounded-lg border border-[#EBE5D8] line-clamp-2">
                        <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1">Sources:</span>
                        {qnt.authorText}
                      </p>

                      <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                        {qnt.description}
                      </p>

                      <div className="text-[11px] font-mono text-[#4A6355]">
                        <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#E0D9CB]">
                          Scope
                        </span>
                        <span>{qnt.keyCoverage}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between gap-2 text-xs font-mono">
                      <Link href={qnt.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                        Syllabus →
                      </Link>
                      <Link href={qnt.readUrl} className="px-3.5 py-1.5 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                        Begin Reading →
                      </Link>
                    </div>
                  </article>
                );
              })()}
            </div>
          </section>
        )}

        {/* -----------------------------------------------------------------------
            WING V: LANGUAGE & COMMUNICATION (Bilingual Scriptorium Spread)
            ----------------------------------------------------------------------- */}
        {(activeDomainFilter === 'ALL' || activeDomainFilter === 'LANG') && (
          <section id="domain-lang" className="space-y-6 scroll-mt-20 w-full min-w-0">
            {/* Wing Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F2EB] border-l-4 border-l-[#C59B4B] border-y border-r border-[#E0D9CB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#10251F] text-[#FAF8F3] flex items-center justify-center text-xl shrink-0 shadow-2xs">
                  🖋️
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#9E722C] font-bold">
                    Section V · Language & Communication
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] tracking-tight">
                    Language & Communication
                  </h3>
                </div>
              </div>
              <p className="text-xs font-serif italic text-[#5A7365] max-w-md sm:text-right">
                120 Golden grammar rules, syntactic inversion, etymological root engines & descriptive essay laboratory.
              </p>
            </div>

            {/* Bilingual Scriptorium Spread (2 columns on desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full min-w-0">
              {/* ENG-007 */}
              {(() => {
                const eng = MONOGRAPHS.find((m) => m.id === 'eng-007')!;
                return (
                  <article className="rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between gap-4">
                    <div className="space-y-3 min-w-0">
                      <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px]">
                          {eng.volumeRoman} · {eng.code}
                        </span>
                        <span className="font-semibold text-[#10251F] text-[11px]">
                          {eng.totalChapters} Ch. · {eng.mcqCount} MCQs
                        </span>
                      </div>

                      <Link href={eng.hubUrl} className="block group">
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors leading-snug">
                          {eng.title}
                        </h4>
                      </Link>

                      <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2 rounded-lg border border-[#EBE5D8] line-clamp-2">
                        <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1">Sources:</span>
                        {eng.authorText}
                      </p>

                      <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                        {eng.description}
                      </p>

                      <div className="text-[11px] font-mono text-[#4A6355]">
                        <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#E0D9CB]">
                          Scope
                        </span>
                        <span>{eng.keyCoverage}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between gap-2 text-xs font-mono">
                      <Link href={eng.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                        Syllabus →
                      </Link>
                      <Link href={eng.readUrl} className="px-3.5 py-1.5 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                        Begin Reading →
                      </Link>
                    </div>
                  </article>
                );
              })()}

              {/* HIN-007 */}
              {(() => {
                const hin = MONOGRAPHS.find((m) => m.id === 'hin-007')!;
                return (
                  <article className="rounded-2xl bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between gap-4">
                    <div className="space-y-3 min-w-0">
                      <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-[#10251F] text-[#FAF8F3] font-bold text-[10px]">
                          {hin.volumeRoman} · {hin.code}
                        </span>
                        <span className="font-semibold text-[#10251F] text-[11px]">
                          {hin.totalChapters} Ch. · {hin.mcqCount} MCQs
                        </span>
                      </div>

                      <Link href={hin.hubUrl} className="block group">
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#10251F] group-hover:text-[#1B4D3C] transition-colors leading-snug">
                          {hin.title}
                        </h4>
                      </Link>

                      <p className="text-xs font-mono text-[#5A7365] bg-[#FAF9F4] p-2 rounded-lg border border-[#EBE5D8] line-clamp-2">
                        <span className="font-bold text-[#10251F] uppercase text-[10px] mr-1">Sources:</span>
                        {hin.authorText}
                      </p>

                      <p className="font-serif text-sm text-[#2B3B33] leading-relaxed">
                        {hin.description}
                      </p>

                      <div className="text-[11px] font-mono text-[#4A6355]">
                        <span className="font-bold uppercase tracking-wider text-[#10251F] text-[9px] mr-1.5 bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#E0D9CB]">
                          Scope
                        </span>
                        <span>{hin.keyCoverage}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between gap-2 text-xs font-mono">
                      <Link href={hin.hubUrl} className="text-[#5A7365] hover:text-[#10251F] font-semibold">
                        Syllabus →
                      </Link>
                      <Link href={hin.readUrl} className="px-3.5 py-1.5 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs shadow-2xs">
                        Begin Reading →
                      </Link>
                    </div>
                  </article>
                );
              })()}
            </div>
          </section>
        )}
      </div>

      {/* =========================================================================
          LAYER G: THE SCHOLAR\'S STUDY WORKBENCH & HIGH-YIELD VAULTS
          Visual metaphor of an indexed study desk with field notebooks and capstones.
          ========================================================================= */}
      <section className="p-7 sm:p-9 rounded-3xl bg-[#FAF9F4] border-2 border-[#D8CEBC] space-y-6 w-full min-w-0 overflow-hidden shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E0D9CB] pb-4 min-w-0">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E722C] font-bold">
              Field Study Workbench
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#10251F] tracking-tight mt-0.5">
              Curated Study Laboratories & Rapid Vaults
            </h3>
          </div>
          <span className="text-xs font-mono text-[#5A7365]">
            Dedicated examination pathways and capstone distinction matrices
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono w-full min-w-0">
          <Link
            href="/shelf-007/political-science/chapter-30"
            className="p-5 rounded-2xl bg-[#FFFFFF] hover:bg-[#F5F2EB] border border-[#E0D9CB] hover:border-[#10251F] transition-all group block shadow-2xs min-w-0"
          >
            <div className="flex items-center justify-between text-[#9E722C] text-[10px] font-bold">
              <span>VOL. I · POL-007</span>
              <span>30 Matrices →</span>
            </div>
            <div className="font-serif font-bold text-base text-[#10251F] group-hover:text-[#1B4D3C] transition-colors mt-1.5">
              Constitutional Governance Vault
            </div>
            <div className="text-[11px] text-[#5A7365] mt-1.5 line-clamp-2">
              Chapter 30: 30 High-Yield Distinction Matrices & Capstone Master Vault.
            </div>
          </Link>

          <Link
            href="/shelf-007/general-science/chapter-01"
            className="p-5 rounded-2xl bg-[#FFFFFF] hover:bg-[#F5F2EB] border border-[#E0D9CB] hover:border-[#10251F] transition-all group block shadow-2xs min-w-0"
          >
            <div className="flex items-center justify-between text-[#9E722C] text-[10px] font-bold">
              <span>VOL. VI · SCI-007</span>
              <span>Unified Science →</span>
            </div>
            <div className="font-serif font-bold text-base text-[#10251F] group-hover:text-[#1B4D3C] transition-colors mt-1.5">
              General Science Codex
            </div>
            <div className="text-[11px] text-[#5A7365] mt-1.5 line-clamp-2">
              Mechanics, Thermodynamics, Genetics, Biotechnology & Unified Science.
            </div>
          </Link>

          <Link
            href="/shelf-007/english-language/chapter-01"
            className="p-5 rounded-2xl bg-[#FFFFFF] hover:bg-[#F5F2EB] border border-[#E0D9CB] hover:border-[#10251F] transition-all group block shadow-2xs min-w-0"
          >
            <div className="flex items-center justify-between text-[#9E722C] text-[10px] font-bold">
              <span>VOL. VIII · ENG-007</span>
              <span>120 Rules →</span>
            </div>
            <div className="font-serif font-bold text-base text-[#10251F] group-hover:text-[#1B4D3C] transition-colors mt-1.5">
              English Descriptive Laboratory
            </div>
            <div className="text-[11px] text-[#5A7365] mt-1.5 line-clamp-2">
              120 Golden Rules, Root Engine, Fixed Prepositions & PEEL Essay Writing.
            </div>
          </Link>

          <Link
            href="/shelf-007/hindi/chapter-01"
            className="p-5 rounded-2xl bg-[#FFFFFF] hover:bg-[#F5F2EB] border border-[#E0D9CB] hover:border-[#10251F] transition-all group block shadow-2xs min-w-0"
          >
            <div className="flex items-center justify-between text-[#9E722C] text-[10px] font-bold">
              <span>VOL. IX · HIN-007</span>
              <span>RAS Paper 4 →</span>
            </div>
            <div className="font-serif font-bold text-base text-[#10251F] group-hover:text-[#1B4D3C] transition-colors mt-1.5">
              Administrative Hindi Lexicon
            </div>
            <div className="text-[11px] text-[#5A7365] mt-1.5 line-clamp-2">
              Sandhi, Shabd/Vakya Shuddhi, CSTT Terminology & Official Drafting.
            </div>
          </Link>

          <Link
            href="/shelf-007/iibf-dbf"
            className="p-5 rounded-2xl bg-[#FFFFFF] hover:bg-[#F5F2EB] border border-[#E0D9CB] hover:border-[#10251F] transition-all group block shadow-2xs min-w-0"
          >
            <div className="flex items-center justify-between text-[#9E722C] text-[10px] font-bold">
              <span>VOL. IV · DBF-007</span>
              <span>4 Papers →</span>
            </div>
            <div className="font-serif font-bold text-base text-[#10251F] group-hover:text-[#1B4D3C] transition-colors mt-1.5">
              IIBF Banking Qualification
            </div>
            <div className="text-[11px] text-[#5A7365] mt-1.5 line-clamp-2">
              IE&IFS, PPB, AFM, RBWM and statutory RBI Master Directions.
            </div>
          </Link>

          <Link
            href="/shelf-007/current-affairs/chapter-01"
            className="p-5 rounded-2xl bg-[#FFFFFF] hover:bg-[#F5F2EB] border border-[#E0D9CB] hover:border-[#10251F] transition-all group block shadow-2xs min-w-0"
          >
            <div className="flex items-center justify-between text-[#9E722C] text-[10px] font-bold">
              <span>VOL. X · CA-007</span>
              <span>2026 Dossiers →</span>
            </div>
            <div className="font-serif font-bold text-base text-[#10251F] group-hover:text-[#1B4D3C] transition-colors mt-1.5">
              Contemporary Banking & Dossiers
            </div>
            <div className="text-[11px] text-[#5A7365] mt-1.5 line-clamp-2">
              Static Prudential Norms, Monthly Dossiers & Computer CBS Master Codex.
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          LAYER H: SCHOLARLY COLOPHON & ENVIRONMENTAL CLOSING
          Dignified architectural seal honoring the Aravalli landscape.
          ========================================================================= */}
      <footer className="pt-8 pb-3 text-center text-xs font-mono text-[#5A7365] space-y-2.5 border-t border-[#E0D9CB] w-full min-w-0">
        <div className="flex items-center justify-center gap-2 text-[#10251F] font-serif font-bold text-sm sm:text-base">
          <span>▲</span>
          <span>Mind of Aravalli</span>
          <span className="text-[#C5BEAF]">•</span>
          <span>Sovereign Knowledge Library</span>
        </div>
        <p className="max-w-xl mx-auto text-xs text-[#5A7365] leading-relaxed">
          Conceived and codified as an enduring intellectual sanctuary overlooking the ancient Aravalli ranges. Every proposition grounded in verified statutory bare acts, administrative reports, and academic treatises.
        </p>
      </footer>

      {/* Global Search Dialog Modal */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
