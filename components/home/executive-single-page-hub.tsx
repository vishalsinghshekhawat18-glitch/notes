'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SearchDialog } from '@/components/navigation/search-dialog';

export interface SovereignMonograph {
  id: string;
  code: string;
  volumeRoman: string;
  facultyId: 'LAW' | 'ECO' | 'HIST' | 'SCI' | 'RHET';
  facultyName: string;
  title: string;
  shortTitle: string;
  authorText: string;
  totalChapters: number;
  totalWordsText: string;
  mcqCount: number;
  editionStamp: string;
  description: string;
  keyPillars: {
    term: string;
    detail: string;
  }[];
  quickChapters: {
    label: string;
    slug: string;
  }[];
  hubUrl: string;
  readUrl: string;
}

const MONOGRAPHS: SovereignMonograph[] = [
  {
    id: 'pol-007',
    code: 'POL-007',
    volumeRoman: 'VOL. I',
    facultyId: 'LAW',
    facultyName: 'Public Law & Constitutional Statecraft',
    title: 'Political Science & Constitutional Governance',
    shortTitle: 'Constitutional Governance',
    authorText: 'M. Laxmikanth (8th Ed., 2026) • Governance in India (2nd Ed.) • The Constitution of India (Bare Act)',
    totalChapters: 38,
    totalWordsText: '1.24M words',
    mcqCount: 1520,
    editionStamp: 'Gold Standard Sovereign Synthesis • 8th Edition',
    description:
      'A sovereign 38-chapter doctoral-depth master treatise codifying Constitutional Framework, Federal Dynamics, Union & State Machinery, Judiciary & PIL, 2nd ARC 15-Report Compendium, Field Administration, Sectoral Regulators, Social Justice Statutes, Comparative Constitutions, and the 1,520-question Objective Diagnostic Vault.',
    keyPillars: [
      { term: 'Basic Structure Doctrine', detail: 'Evolution from Shankari Prasad to Kesavananda & Minerva Mills.' },
      { term: '2nd ARC 15-Report Matrix', detail: 'Complete administrative reforms compendium (Reports 1 through 15).' },
      { term: 'Federal & Field Governance', detail: 'Emergency provisions, 5th/6th schedules & district administration.' },
      { term: '1,520 MCQ Diagnostic Vault', detail: 'Rigorous objective question bank isolating 50 deadly traps.' },
    ],
    quickChapters: [
      { label: 'Front Matter', slug: 'cover' },
      { label: 'Master Table of Contents', slug: 'table-of-contents' },
      { label: 'Ch 01: Historical Background', slug: 'chapter-01' },
      { label: 'Ch 32: 2nd ARC Compendium', slug: 'chapter-32' },
      { label: 'Capstone Revision Vault', slug: 'chapter-30' },
    ],
    hubUrl: '/shelf-007/political-science',
    readUrl: '/shelf-007/political-science/chapter-01',
  },
  {
    id: 'eco-007',
    code: 'ECO-007',
    volumeRoman: 'VOL. II',
    facultyId: 'ECO',
    facultyName: 'Political Economy & Social Issues',
    title: 'Economics & Social Issues Master Treatise',
    shortTitle: 'Economics & Social Issues',
    authorText: 'Ramesh Singh • Vivek Singh • Nitin Singhania • Sanjeev Verma • K. Sankarganesh',
    totalChapters: 28,
    totalWordsText: '960K words',
    mcqCount: 420,
    editionStamp: '5-Author Macroeconomic Synthesis',
    description:
      'Definitive macroeconomic and socio-economic architecture synthesizing 5 foundational treatises: 2015 NSO SNA National Income, Monetary Policy Corridor, Banking Architecture & NPAs, Public Finance, GST & Fiscal Federalism, Foreign Trade Policy 2023, 4 New Labor Codes (2020), Urbanization, Migration & Pluralism.',
    keyPillars: [
      { term: '2015 SNA Corridor', detail: 'NSO constant vs current prices, GVA at basic prices & deflators.' },
      { term: 'Monetary Transmission & NPAs', detail: 'Repo corridor, SDF, VRR/VRRR, IBC 2016 & bad bank structures.' },
      { term: 'Foreign Trade Policy 2023', detail: 'Rupee internationalization, EPCG, advance authorizations & districts as hubs.' },
      { term: '4 New Labor Codes (2020)', detail: 'Wages, industrial relations, social security, and OSH codes unified.' },
    ],
    quickChapters: [
      { label: 'Front Matter', slug: 'cover' },
      { label: 'Table of Contents', slug: 'table-of-contents' },
      { label: 'Ch 01: National Income', slug: 'chapter-01' },
      { label: 'Ch 23: 4 Labor Codes', slug: 'chapter-23' },
      { label: 'Capstone Revision Vault', slug: 'master-revision-vault' },
    ],
    hubUrl: '/shelf-007/economics',
    readUrl: '/shelf-007/economics/chapter-01',
  },
  {
    id: 'dbf-007',
    code: 'DBF-007',
    volumeRoman: 'VOL. III',
    facultyId: 'ECO',
    facultyName: 'Political Economy & Social Issues',
    title: 'IIBF Diploma in Banking & Finance (DBF / JAIIB)',
    shortTitle: 'Banking & Financial Institutions',
    authorText: 'Official Macmillan Courseware (IE&IFS • PPB • AFMB • RBWM)',
    totalChapters: 23,
    totalWordsText: '840K words',
    mcqCount: 560,
    editionStamp: 'Official Macmillan 4-Paper Curriculum',
    description:
      'Exhaustive 4-paper curriculum covering IE&IFS, PPB, AFMB, and RBWM. Incorporates Banking Laws (Amendment) Act 2025, Ind AS compliance, Basel III capital ratios, financial mathematics formulas, credit appraisal heuristics, and 5 rapid revision vaults.',
    keyPillars: [
      { term: 'Paper 1: IE&IFS', detail: 'Indian economic architecture, financial systems & regulatory authorities.' },
      { term: 'Paper 2: PPB', detail: 'Principles & practices of banking, operational risk, AML/CFT & ethics.' },
      { term: 'Paper 3: AFMB', detail: 'Accounting standards, Ind AS, YTM, depreciation, bonds & cost accounting.' },
      { term: 'Paper 4: RBWM', detail: 'Retail banking, wealth management, asset products & recovery mechanisms.' },
    ],
    quickChapters: [
      { label: 'Paper 1: IE&IFS Module A', slug: '01_paper_1_ie_ifs-01_module_a_indian_economic_architecture' },
      { label: 'Paper 2: PPB Module A', slug: '02_paper_2_ppb-01_module_a_general_banking_operations' },
      { label: 'Paper 3: AFMB Module A', slug: '03_paper_3_afmb-01_module_a_accounting_principles_and_processes' },
      { label: 'Paper 4: RBWM Module A', slug: '04_paper_4_rbwm-01_module_a_retail_banking_overview' },
      { label: '5 Rapid Revision Vaults', slug: '05_rapid_revision_vaults-01_paper_1_ie_ifs_rapid_revision' },
    ],
    hubUrl: '/shelf-007/iibf-dbf',
    readUrl: '/shelf-007/iibf-dbf/01_paper_1_ie_ifs-01_module_a_indian_economic_architecture',
  },
  {
    id: 'hist-007',
    code: 'HIST-007',
    volumeRoman: 'VOL. IV',
    facultyId: 'HIST',
    facultyName: 'Historical Civilizations & Cartography',
    title: 'History: Ancient, Medieval, Modern, Rajasthan & World',
    shortTitle: 'Universal History & Civilizations',
    authorText: 'Upinder Singh • Satish Chandra • Bipan Chandra • Sekhar Bandyopadhyay • Spectrum • Norman Lowe',
    totalChapters: 39,
    totalWordsText: '1.42M words',
    mcqCount: 780,
    editionStamp: 'Unified 5-Dimensional Master Treatise',
    description:
      'Sovereign 39-chapter doctoral-depth historical synthesis integrating Ancient Civilizations & Epigraphy, Medieval Institutional Dynamics, Modern Freedom Struggle, Comprehensive Rajasthan Dynasties & Heritage (RPSC RAS), World History Revolutions, and Capstone Synchronized Revision Vault.',
    keyPillars: [
      { term: 'Ancient Epigraphy & Edicts', detail: 'Ashokan rock edicts, numismatics, Harappan urban layout & Sangam literature.' },
      { term: 'Medieval Agrarian Order', detail: 'Delhi Sultanate iqtas, Mughal mansabdari, land revenue systems & Bhakti synthesis.' },
      { term: 'Freedom Struggle & Gandhi', detail: 'Constitutional developments (1773–1947), mass movements & subaltern agency.' },
      { term: 'Rajasthan Heritage (RAS)', detail: 'Pratiharas, Chauhans, Mewar, Marwar, 1857 mutiny, prajamandals & integration.' },
    ],
    quickChapters: [
      { label: 'Front Matter', slug: 'cover' },
      { label: 'Table of Contents', slug: 'table-of-contents' },
      { label: 'Ch 01: Prehistoric Roots', slug: 'chapter-01' },
      { label: 'Ch 23: Rajasthan History', slug: 'chapter-23' },
      { label: 'Ch 39: Grand Sync Vault', slug: 'chapter-39' },
    ],
    hubUrl: '/shelf-007/history',
    readUrl: '/shelf-007/history/chapter-01',
  },
  {
    id: 'geo-007',
    code: 'GEO-007',
    volumeRoman: 'VOL. V',
    facultyId: 'HIST',
    facultyName: 'Historical Civilizations & Cartography',
    title: 'Geography: India, World & Rajasthan',
    shortTitle: 'Earth Systems & Regional Geography',
    authorText: 'Prof. Majid Husain • Shankar IAS Academy • Dr. Savindra Singh • Dr. L.R. Bhalla • NCERTs',
    totalChapters: 38,
    totalWordsText: '1.31M words',
    mcqCount: 650,
    editionStamp: 'Physical, Human & Environmental Codex',
    description:
      'Sovereign 38-chapter geographical codex integrating Geomorphology, Climatology, Oceanography, Environmental Ecology, World Regions & Strategic Chokepoints, Indian Morphotectonics & Monsoons, Rajasthan Regional Divisions (RPSC RAS), Human Geographic Paradigms, and Capstone Revision Vault.',
    keyPillars: [
      { term: 'Planetary Geomorphology', detail: 'Plate tectonics, Wilson cycle, paleomagnetism & polycyclic landforms.' },
      { term: 'Climatology & Monsoons', detail: 'Walker circulation, El Niño/IOD, jet streams, Madden-Julian oscillation & cyclones.' },
      { term: 'Oceanography & UNCLOS', detail: 'Thermohaline conveyor, EEZ boundaries, polymetallic nodules & maritime chokepoints.' },
      { term: 'Rajasthan Divisions (RAS)', detail: 'Thar Desert, Aravalli Range, Eastern Plains & Hadoti Plateau with IGNP network.' },
    ],
    quickChapters: [
      { label: 'Front Matter', slug: 'cover' },
      { label: 'Table of Contents', slug: 'table-of-contents' },
      { label: 'Ch 01: Geomorphology', slug: '01_geomorphology_earth_structure_and_plate_tectonics' },
      { label: 'Ch 18: Indian Monsoons', slug: '18_indian_climate_monsoon_mechanism_and_cyclones' },
      { label: 'Ch 36: Grand Capstone Vault', slug: 'chapter-36' },
    ],
    hubUrl: '/shelf-007/geography',
    readUrl: '/shelf-007/geography/01_geomorphology_earth_structure_and_plate_tectonics',
  },
  {
    id: 'sci-007',
    code: 'SCI-007',
    volumeRoman: 'VOL. VI',
    facultyId: 'SCI',
    facultyName: 'Natural Philosophy & Applied Sciences',
    title: 'General Science: Physics, Chemistry & Biology Unified',
    shortTitle: 'Natural & Applied Sciences',
    authorText: 'NCERT (Classes 6–12) • Halliday-Resnick • Campbell Biology • Morrison-Boyd',
    totalChapters: 30,
    totalWordsText: '1.15M words',
    mcqCount: 890,
    editionStamp: 'NCERT 6–12 + Competitive Fusion',
    description:
      'Sovereign 30-chapter publication-grade science master treatise covering Foundational & Applied Physics (Ch 01–11), Inorganic, Organic & Applied Chemistry (Ch 12–19), Biological Systems, Physiology & Genetics (Ch 20–27), Health & Applied Biotechnology, and the Capstone Consolidated Revision Vault.',
    keyPillars: [
      { term: 'Physics & Mechanics', detail: 'Newtonian dynamics, fluid statics, thermodynamic cycles, wave optics & modern physics.' },
      { term: 'Chemical Foundations', detail: 'Periodic invariants, coordination bonding, organic mechanisms & functional metallurgy.' },
      { term: 'Cell Biology & Genetics', detail: 'Central dogma, CRISPR-Cas9, Mendelian inheritance & epigenetic modulation.' },
      { term: 'Human Physiology & Health', detail: 'Cardiovascular, neural & endocrine regulation, immunity cascades & vaccines.' },
    ],
    quickChapters: [
      { label: 'Front Matter', slug: 'cover' },
      { label: 'Table of Contents', slug: 'table-of-contents' },
      { label: 'Ch 01: Physical World & Mechanics', slug: 'chapter-01' },
      { label: 'Ch 12: Atomic Structure', slug: 'chapter-12' },
      { label: 'Ch 28: Capstone Science Vault', slug: 'chapter-28' },
    ],
    hubUrl: '/shelf-007/general-science',
    readUrl: '/shelf-007/general-science/chapter-01',
  },
  {
    id: 'qnt-007',
    code: 'QNT-007',
    volumeRoman: 'VOL. VII',
    facultyId: 'SCI',
    facultyName: 'Natural Philosophy & Applied Sciences',
    title: 'Quantitative Aptitude & Mathematical Logic',
    shortTitle: 'Mathematical Logic & Axiomatics',
    authorText: 'Sarvesh K. Verma (Quantum CAT) • Arun Sharma • R.S. Aggarwal • Rajesh Verma',
    totalChapters: 29,
    totalWordsText: '980K words',
    mcqCount: 1100,
    editionStamp: 'Axiomatic & Speed Synthesis',
    description:
      'Sovereign mathematical logic and problem-solving architecture covering Mental Arithmetic, Base Multiplication, Number Theory & Invariants, Pure Algebra & Master Sign-Table, Commercial Arithmetic, Rates & Motion, Spatial Mensuration, Combinatorics, and Data Interpretation.',
    keyPillars: [
      { term: 'Vedic Calculation Engines', detail: 'Base multiplications, digital roots, duplex squaring & reciprocal conversions.' },
      { term: 'Number Theory Invariants', detail: 'Divisibility rules, cyclicity of remainders, Chinese Remainder Theorem & totients.' },
      { term: 'Master Sign-Table Algebra', detail: 'Quadratic roots without quadratic formula, AM-GM inequalities & functional bounds.' },
      { term: 'Motion & Rate Invariants', detail: 'Harmonic mean for round trips, relative velocity vectors, circular tracks & clocks.' },
    ],
    quickChapters: [
      { label: 'Front Matter', slug: 'cover' },
      { label: 'Table of Contents', slug: 'table-of-contents' },
      { label: 'Ch 01: Mental Arithmetic', slug: 'chapter-01' },
      { label: 'Ch 07: Pure Algebra', slug: 'chapter-07' },
      { label: 'Ch 27: Capstone Speed Vault', slug: 'chapter-27' },
    ],
    hubUrl: '/shelf-007/quantitative-aptitude',
    readUrl: '/shelf-007/quantitative-aptitude/chapter-01',
  },
  {
    id: 'eng-007',
    code: 'ENG-007',
    volumeRoman: 'VOL. VIII',
    facultyId: 'RHET',
    facultyName: 'Classical Rhetoric & Linguistic Codex',
    title: 'English Language & Descriptive Writing Master Codex',
    shortTitle: 'Linguistic Logic & Descriptive Codex',
    authorText: 'Nikhil Gupta (Black Book) • Nimisha Bansal • Wren & Martin • Strunk & White',
    totalChapters: 44,
    totalWordsText: '1.48M words',
    mcqCount: 950,
    editionStamp: 'Doctoral Descriptive & Etymological Codex',
    description:
      'Sovereign doctoral-depth treatise covering 120 Golden Rules of Grammar, Syntactic Inversion, Etymological Root Engine (1,000+ roots), Fixed Prepositions, Phrasal Verbs, Paronyms, Descriptive Essay Architecture (PESTLE-S & PEEL), Précis 1/3rd Distillation, Official Correspondence, and Capstone Vault.',
    keyPillars: [
      { term: '120 Golden Grammar Rules', detail: 'Subjunctive mood, dangling modifiers, parallel structures & inversion triggers.' },
      { term: 'Etymological Root Engine', detail: 'Latin and Greek morphosyntactic prefixes, roots & contextual derivatives.' },
      { term: 'PESTLE-S Essay Laboratory', detail: 'Multidimensional policy essays with PEEL paragraph structural integrity.' },
      { term: 'Précis & Official Reports', detail: 'Exact 1/3rd condensation, formal memorandum architecture & statutory formats.' },
    ],
    quickChapters: [
      { label: 'Ch 01: 120 Golden Rules', slug: '01_master_chapter_120_golden_grammar_rules' },
      { label: 'Ch 02: Syntactic Inversion', slug: '02_master_chapter_advanced_syntactic_inversion' },
      { label: 'Ch 05: Etymological Roots', slug: '05_master_chapter_etymological_root_engine_cognition' },
      { label: 'Ch 13: Descriptive Essay Lab', slug: '13_master_chapter_descriptive_essay_laboratory' },
      { label: 'Ch 21: Capstone Revision Vault', slug: 'chapter-21' },
    ],
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
  const [selectedMonographId, setSelectedMonographId] = useState<string>('pol-007');
  const [viewMode, setViewMode] = useState<'LECTERN' | 'BROADSHEET'>('LECTERN');
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
            const matchingMono = MONOGRAPHS.find((m) => parsed.url.includes(m.id.replace('-007', '')));
            if (matchingMono) {
              setSelectedMonographId(matchingMono.id);
            }
          }
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const activeMonograph = useMemo(() => {
    return MONOGRAPHS.find((m) => m.id === selectedMonographId) || MONOGRAPHS[0];
  }, [selectedMonographId]);

  const totalChapters = useMemo(() => MONOGRAPHS.reduce((acc, m) => acc + m.totalChapters, 0), []);
  const totalMCQs = useMemo(() => MONOGRAPHS.reduce((acc, m) => acc + m.mcqCount, 0), []);

  return (
    <div className="h-[calc(100dvh-5.5rem)] min-h-[580px] max-w-[1620px] mx-auto px-3 sm:px-5 py-2 flex flex-col justify-between overflow-hidden font-sans select-none">
      {/* 1. ARCHIVAL LIBRARY FRIEZE (Top Header Strip) */}
      <header className="bg-[#FAF9F4] dark:bg-[#101915] border border-[#DCD7C9] dark:border-[#22332B] rounded-xl px-4 py-2 flex items-center justify-between gap-4 shadow-2xs shrink-0">
        {/* Left: Library Emblem & Archival Declaration */}
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-8 h-8 rounded-md bg-[#10251F] text-[#FAF9F4] border border-[#173A2F] flex items-center justify-center font-serif text-sm font-bold shrink-0 shadow-xs">
            ▲
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-bold text-base sm:text-lg text-[#10251F] dark:text-[#F3F0E7] tracking-tight truncate leading-tight">
                Mind of Aravalli
              </h1>
              <span className="text-[#A8783A] dark:text-[#B39A5A] font-serif text-xs italic hidden md:inline">
                — Sovereign Scholarly Library
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D5946] dark:text-[#A8B5A1] bg-[#F3F0E7] dark:bg-[#17261F] px-2 py-0.5 rounded border border-[#DCD7C9] dark:border-[#24352D] hidden lg:inline">
                Shelf 007 • Canonical Master Series
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#617A61] dark:text-[#A8B5A1] truncate">
              8 Sovereign Treatises • {totalChapters} Chapters • {totalMCQs.toLocaleString()} MCQs • Total Source Replacement
            </p>
          </div>
        </div>

        {/* Center/Right: Library Controls & Navigation */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Active Reading Waypoint Beacon */}
          {savedPosition && (
            <Link
              href={savedPosition.url}
              className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F3F0E7] dark:bg-[#17261F] border border-[#A8783A]/40 text-[#10251F] dark:text-[#F3F0E7] text-[11px] font-mono hover:border-[#A8783A] transition-colors shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#A8783A] animate-pulse" />
              <span className="text-[#617A61] dark:text-[#A8B5A1]">Resume:</span>
              <span className="font-semibold truncate max-w-[140px]">{savedPosition.topicTitle}</span>
              <span className="text-[#A8783A] group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          )}

          {/* Quick Catalogue Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2.5 text-xs text-[#10251F] dark:text-[#F3F0E7] bg-white dark:bg-[#17261F] hover:bg-[#F3F0E7] dark:hover:bg-[#1C2E25] border border-[#DCD7C9] dark:border-[#24352D] rounded-lg px-3 py-1.5 transition-all shadow-2xs cursor-pointer font-mono"
            title="Search across all 8 monographs, statutory doctrines and questions"
          >
            <svg className="w-3.5 h-3.5 text-[#617A61]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline text-[11px]">Search Library Catalogue...</span>
            <kbd className="font-mono text-[9px] bg-[#F3F0E7] dark:bg-[#101915] text-[#10251F] dark:text-[#A8B5A1] px-1.5 py-0.5 rounded border border-[#DCD7C9] dark:border-[#25352D]">
              ⌘K
            </kbd>
          </button>

          {/* View Mode Switcher (Scholar's Desk vs Broadsheet) */}
          <div className="flex items-center bg-[#F3F0E7] dark:bg-[#17261F] p-0.5 rounded-lg border border-[#DCD7C9] dark:border-[#24352D] text-xs font-mono">
            <button
              onClick={() => setViewMode('LECTERN')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer text-[11px] ${
                viewMode === 'LECTERN'
                  ? 'bg-[#10251F] text-[#FAF9F4] font-semibold shadow-2xs'
                  : 'text-[#617A61] dark:text-[#A8B5A1] hover:text-[#10251F] dark:hover:text-[#FAF9F4]'
              }`}
            >
              Scholar’s Desk
            </button>
            <button
              onClick={() => setViewMode('BROADSHEET')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer text-[11px] ${
                viewMode === 'BROADSHEET'
                  ? 'bg-[#10251F] text-[#FAF9F4] font-semibold shadow-2xs'
                  : 'text-[#617A61] dark:text-[#A8B5A1] hover:text-[#10251F] dark:hover:text-[#FAF9F4]'
              }`}
            >
              Broadsheet
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN SCHOLARLY READING WORKSPACE */}
      {viewMode === 'LECTERN' ? (
        /* MODE A: THE SCHOLAR'S DESK (Interactive Split Folio: Stacks + Lectern) */
        <div className="flex-1 grid grid-cols-12 gap-3 min-h-0 py-2">
          {/* Left Column: Archival Stacks Directory (5/12 width) */}
          <aside className="col-span-12 lg:col-span-5 bg-[#FAF9F4] dark:bg-[#101915] border border-[#DCD7C9] dark:border-[#22332B] rounded-xl p-3 flex flex-col justify-between overflow-hidden shadow-2xs">
            <div className="space-y-1 overflow-hidden flex flex-col h-full">
              <div className="flex items-center justify-between border-b border-[#DCD7C9] dark:border-[#22332B] pb-1.5 mb-1 px-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#617A61] dark:text-[#A8B5A1]">
                  Canonical Treatises (8 Volumes)
                </span>
                <span className="text-[10px] font-mono text-[#A8783A] dark:text-[#B39A5A] font-semibold">
                  Examine to Inspect
                </span>
              </div>

              {/* Monograph Catalogue Rows */}
              <div className="space-y-1 flex-1 overflow-y-auto pr-1">
                {MONOGRAPHS.map((m) => {
                  const isSelected = m.id === selectedMonographId;
                  const isResumeTarget = savedPosition?.url.includes(m.id.replace('-007', ''));

                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMonographId(m.id)}
                      className={`w-full text-left p-2 rounded-lg transition-all border flex items-center justify-between gap-2.5 cursor-pointer group ${
                        isSelected
                          ? 'bg-[#10251F] text-[#FAF9F4] border-[#10251F] shadow-xs'
                          : 'bg-[#F3F0E7]/60 dark:bg-[#14201A]/60 hover:bg-[#F3F0E7] dark:hover:bg-[#182820] border-transparent hover:border-[#DCD7C9] dark:hover:border-[#2A3F34]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Volume Roman Stamp */}
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                            isSelected
                              ? 'bg-[#173A2F] text-[#B39A5A] border border-[#B39A5A]/30'
                              : 'bg-white dark:bg-[#101915] text-[#1D5946] dark:text-[#A8B5A1] border border-[#DCD7C9] dark:border-[#22332B]'
                          }`}
                        >
                          {m.volumeRoman}
                        </span>

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h2
                              className={`font-serif font-bold text-xs sm:text-[13px] leading-snug truncate ${
                                isSelected
                                  ? 'text-[#FAF9F4]'
                                  : 'text-[#10251F] dark:text-[#F3F0E7] group-hover:text-[#1D5946]'
                              }`}
                            >
                              {m.shortTitle}
                            </h2>
                            {isResumeTarget && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A8783A] shrink-0 animate-pulse" />
                            )}
                          </div>
                          <p
                            className={`text-[10px] font-mono truncate ${
                              isSelected ? 'text-[#A8B5A1]' : 'text-[#617A61] dark:text-[#A8B5A1]'
                            }`}
                          >
                            {m.authorText}
                          </p>
                        </div>
                      </div>

                      {/* Chapter Count Gauge */}
                      <div className="text-right shrink-0">
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-semibold ${
                            isSelected
                              ? 'bg-white/10 text-[#FAF9F4]'
                              : 'bg-white dark:bg-[#101915] text-[#10251F] dark:text-[#A8B5A1] border border-[#DCD7C9] dark:border-[#22332B]'
                          }`}
                        >
                          {m.totalChapters} Ch
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stacks Footer: Scholarly Ledger Note */}
            <div className="pt-2 border-t border-[#DCD7C9] dark:border-[#22332B] flex items-center justify-between text-[10px] font-mono text-[#617A61] dark:text-[#A8B5A1]">
              <span>Universal Source Grounding</span>
              <span className="text-[#A8783A] dark:text-[#B39A5A] font-semibold">Zero Hallucination Standard</span>
            </div>
          </aside>

          {/* Right Column: The Scholar's Lectern / Detailed Codex Folio (7/12 width) */}
          <main className="col-span-12 lg:col-span-7 bg-[#FAF9F4] dark:bg-[#101915] border border-[#DCD7C9] dark:border-[#22332B] rounded-xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-2xs relative">
            {/* Ambient Watermark Background */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#1D5946]/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="space-y-3 min-h-0 flex-1 overflow-hidden flex flex-col justify-between">
              {/* Monograph Folio Header */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#617A61] dark:text-[#A8B5A1] pb-1 border-b border-[#DCD7C9] dark:border-[#22332B]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#A8783A] dark:text-[#B39A5A] uppercase tracking-wider text-[11px]">
                      {activeMonograph.volumeRoman} • {activeMonograph.code}
                    </span>
                    <span>•</span>
                    <span className="italic font-serif text-[12px]">{activeMonograph.facultyName}</span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#F3F0E7] dark:bg-[#17261F] text-[#1D5946] dark:text-[#A8B5A1] px-2 py-0.5 rounded border border-[#DCD7C9] dark:border-[#24352D]">
                    {activeMonograph.editionStamp}
                  </span>
                </div>

                <div className="pt-2">
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] dark:text-[#FAF9F4] tracking-tight leading-snug">
                    {activeMonograph.title}
                  </h2>
                  <p className="text-[11px] font-mono text-[#617A61] dark:text-[#A8B5A1] pt-1">
                    <span className="font-semibold text-[#10251F] dark:text-[#F3F0E7]">Canonical Sources Unified:</span>{' '}
                    {activeMonograph.authorText}
                  </p>
                </div>
              </div>

              {/* Monograph Scope Synopsis */}
              <div className="bg-[#F3F0E7]/60 dark:bg-[#14201A]/60 border-l-3 border-l-[#1D5946] p-2.5 rounded-r-lg">
                <p className="text-xs sm:text-[13px] text-[#10251F] dark:text-[#F3F0E7] font-serif leading-relaxed line-clamp-3">
                  {activeMonograph.description}
                </p>
              </div>

              {/* Core Doctrinal Pillars (2x2 Quad) */}
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#617A61] dark:text-[#A8B5A1] pb-1.5">
                  Core Doctrinal Pillars & Epistemic Vaults
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeMonograph.keyPillars.map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-white dark:bg-[#131F19] border border-[#DCD7C9] dark:border-[#24352D] rounded-lg p-2 flex flex-col justify-between"
                    >
                      <span className="font-serif font-bold text-xs text-[#10251F] dark:text-[#F3F0E7] leading-tight">
                        {pillar.term}
                      </span>
                      <p className="text-[11px] text-[#617A61] dark:text-[#A8B5A1] font-sans pt-0.5 line-clamp-2 leading-snug">
                        {pillar.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rapid Chapter Jump Ledger */}
              <div className="pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#617A61] dark:text-[#A8B5A1] pb-1">
                  <span className="uppercase tracking-widest">Waypoint Fast Navigation:</span>
                  <span>{activeMonograph.totalChapters} Chapters Total • {activeMonograph.totalWordsText}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeMonograph.quickChapters.map((qc, qcIdx) => (
                    <Link
                      key={qcIdx}
                      href={`/shelf-007/${activeMonograph.hubUrl.split('/').pop()}/${qc.slug}`}
                      className="text-[11px] font-mono bg-white dark:bg-[#131F19] hover:bg-[#10251F] hover:text-[#FAF9F4] dark:hover:bg-[#1D5946] border border-[#DCD7C9] dark:border-[#24352D] px-2.5 py-1 rounded transition-colors"
                    >
                      {qc.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Lectern Action Bar */}
            <div className="pt-3 border-t border-[#DCD7C9] dark:border-[#22332B] flex items-center justify-between gap-3 text-xs font-mono mt-2">
              <Link
                href={activeMonograph.hubUrl}
                className="text-[#10251F] dark:text-[#F3F0E7] hover:text-[#1D5946] font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Browse Full Table of Contents & Syllabus</span>
                <span>→</span>
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href={activeMonograph.readUrl}
                  className="px-4 py-2 rounded-lg bg-[#10251F] hover:bg-[#173A2F] dark:bg-[#1D5946] dark:hover:bg-[#236853] text-[#FAF9F4] font-serif font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow transition-all inline-flex items-center gap-2 border border-[#173A2F]"
                >
                  <span>Open Master Treatise in Reader</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      ) : (
        /* MODE B: THE LIBRARY BROADSHEET (Typographic 8-Monograph Matrix) */
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-2.5 min-h-0 py-2">
          {MONOGRAPHS.map((m) => (
            <article
              key={m.id}
              className="bg-[#FAF9F4] dark:bg-[#101915] border border-[#DCD7C9] dark:border-[#22332B] hover:border-[#10251F] dark:hover:border-[#1D5946] rounded-xl p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all group relative overflow-hidden"
            >
              <div className="space-y-1.5 min-h-0">
                {/* Header: Roman Stamp & Code */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#10251F] text-[#FAF9F4]">
                      {m.volumeRoman}
                    </span>
                    <span className="text-[10px] font-bold text-[#A8783A] dark:text-[#B39A5A]">
                      {m.code}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#617A61] dark:text-[#A8B5A1]">
                    {m.totalChapters} Chapters
                  </span>
                </div>

                {/* Monograph Title */}
                <div>
                  <Link href={m.hubUrl} className="block group-hover:text-[#1D5946] transition-colors">
                    <h2 className="font-serif font-bold text-sm lg:text-[15px] text-[#10251F] dark:text-[#FAF9F4] leading-snug line-clamp-2">
                      {m.title}
                    </h2>
                  </Link>
                  <p className="text-[10px] font-mono text-[#617A61] dark:text-[#A8B5A1] truncate pt-0.5">
                    {m.authorText}
                  </p>
                </div>

                {/* Academic Faculty Tag */}
                <div className="pt-0.5">
                  <span className="text-[10px] font-serif italic text-[#A8783A] dark:text-[#B39A5A]">
                    {m.facultyName}
                  </span>
                </div>

                {/* Brief Scope Synopsis */}
                <p className="text-[11px] font-serif text-[#10251F] dark:text-[#F3F0E7] line-clamp-2 leading-snug pt-0.5">
                  {m.description}
                </p>

                {/* Key Pillar Chips */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {m.keyPillars.slice(0, 2).map((kp, kIdx) => (
                    <span
                      key={kIdx}
                      className="text-[9px] font-mono bg-[#F3F0E7] dark:bg-[#17261F] text-[#10251F] dark:text-[#A8B5A1] px-1.5 py-0.5 rounded border border-[#DCD7C9] dark:border-[#24352D] truncate max-w-[150px]"
                    >
                      {kp.term}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Examine Folio */}
              <div className="pt-2 border-t border-[#DCD7C9] dark:border-[#22332B] flex items-center justify-between text-xs font-mono mt-1">
                <Link
                  href={m.hubUrl}
                  className="text-[#617A61] dark:text-[#A8B5A1] hover:text-[#10251F] dark:hover:text-[#FAF9F4] text-[11px] font-medium"
                >
                  Syllabus →
                </Link>

                <Link
                  href={m.readUrl}
                  className="px-2.5 py-1 rounded bg-[#10251F] hover:bg-[#173A2F] dark:bg-[#1D5946] text-[#FAF9F4] text-[11px] font-serif font-bold transition-colors"
                >
                  Read Treatise →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Global Search Dialog Modal */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
