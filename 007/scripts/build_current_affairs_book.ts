import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), '007', "PDF's");
const destDir = path.join(process.cwd(), '007', 'notes', 'current_affairs');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

interface ChapterMapping {
  src: string;
  dest: string;
  title: string;
  subtitle: string;
}

const mapping: ChapterMapping[] = [
  {
    src: 'static_banking_regulatory_core.md',
    dest: '02_CHAPTER_01_STATIC_BANKING_REGULATORY_CORE.md',
    title: '# CHAPTER 01: STATIC BANKING, REGULATORY ACTS & PRUDENTIAL NORMS CORE',
    subtitle: '*Senior Paper-Setter Master Strike File: Verified Statutory Foundations, RBI Mandates & Banking Governance*',
  },
  {
    src: 'current_affairs_2026_q1_jan_mar.md',
    dest: '03_CHAPTER_02_CURRENT_AFFAIRS_2026_Q1_JAN_MAR.md',
    title: '# CHAPTER 02: CURRENT AFFAIRS — JANUARY TO MARCH 2026 (FULL Q1 CONSOLIDATED)',
    subtitle: '*Senior Paper-Setter Master Strike File: Q1 Comprehensive Dossier, ESI, Regulatory Directions & National Policy Anchors*',
  },
  {
    src: 'current_affairs_2026_april.md',
    dest: '04_CHAPTER_03_CURRENT_AFFAIRS_2026_APRIL.md',
    title: '# CHAPTER 03: CURRENT AFFAIRS — APRIL 2026 (COMPLETE CONSOLIDATED DOSSIER)',
    subtitle: '*Senior Paper-Setter Master Strike File: Verified Regulatory Directions, Banking Circulars & National Policy Anchors*',
  },
  {
    src: 'current_affairs_2026_may.md',
    dest: '05_CHAPTER_04_CURRENT_AFFAIRS_2026_MAY.md',
    title: '# CHAPTER 04: CURRENT AFFAIRS — MAY 2026 (PIB & REGULATORY DOSSIER)',
    subtitle: '*Senior Paper-Setter Master Strike File: Banking Regulations, Agrarian Markets, Clean Energy & Judicial Tech*',
  },
  {
    src: 'current_affairs_2026_june.md',
    dest: '06_CHAPTER_05_CURRENT_AFFAIRS_2026_JUNE.md',
    title: '# CHAPTER 05: CURRENT AFFAIRS — JUNE 2026 (COMPLETE CONSOLIDATED DOSSIER)',
    subtitle: '*Senior Paper-Setter Master Strike File: Verified RBI Master Directions, Banking Regulatory Circulars & National Financial Anchors*',
  },
  {
    src: 'current_affairs_2026_july.md',
    dest: '07_CHAPTER_06_CURRENT_AFFAIRS_2026_JULY.md',
    title: '# CHAPTER 06: CURRENT AFFAIRS — JULY 2026 (COMPLETE CONSOLIDATED DOSSIER)',
    subtitle: '*Senior Paper-Setter Master Strike File: Verified RBI Master Directions, Banking Regulatory Circulars & National Policy Anchors*',
  },
  {
    src: 'aug_ca_cgb1-31aug_pib1-18aug.md',
    dest: '08_CHAPTER_07_CURRENT_AFFAIRS_2026_AUGUST.md',
    title: '# CHAPTER 07: CURRENT AFFAIRS — AUGUST 2026 (FULL MONTH CONSOLIDATED & PIB)',
    subtitle: '*Senior Paper-Setter Master Strike File: Full Month Consolidated Dossier (1st–31st Aug, incl. PIB 1st–27th Aug)*',
  },
  {
    src: 'current_affairs_2026_september.md',
    dest: '09_CHAPTER_08_CURRENT_AFFAIRS_2026_SEPTEMBER.md',
    title: '# CHAPTER 08: CURRENT AFFAIRS — SEPTEMBER 2026 (FULL MONTH CONSOLIDATED DOSSIER — 120 CLUSTERS)',
    subtitle: '*Senior Paper-Setter Master Strike File: Verified Regulatory Directives, IFSCA Market Abuse Code, Sovereign Ratings, Central Counterparties, Multilateral Accords & Aerospace*',
  },
  {
    src: 'IBPS_MAINS_35PLUS_MASTER_JAN_SEPT.md',
    dest: '10_CHAPTER_09_IBPS_MAINS_35PLUS_MEGA_COMPENDIUM_JAN_SEPT.md',
    title: '# CHAPTER 09: IBPS PO / CLERK MAINS 35+ MARKS GUARANTEE DOSSIER (JANUARY – SEPTEMBER 2026)',
    subtitle: '*Senior Paper-Setter Master Strike File: Verified Policy Anchors, Prudential Directions, Sovereign Missions & Trap Matrices*',
  },
  {
    src: 'computer_aptitude_mains_master.md',
    dest: '11_CHAPTER_10_COMPUTER_APTITUDE_DIGITAL_BANKING_CYBERSECURITY.md',
    title: '# CHAPTER 10: COMPUTER APTITUDE, DIGITAL BANKING SYSTEMS & CYBERSECURITY MASTER',
    subtitle: '*Canonical Examination Study Dossier for IBPS PO/Clerk Mains, SBI PO Mains, RRB Scale-I & Regulatory Bodies (Units COMP-001 to COMP-018)*',
  },
];

console.log('Beginning sovereign book construction for Current Affairs...');

for (const m of mapping) {
  const rawPath = path.join(srcDir, m.src);
  if (!fs.existsSync(rawPath)) {
    console.error(`Source file missing: ${rawPath}`);
    continue;
  }
  const content = fs.readFileSync(rawPath, 'utf-8');

  // Preserve 100% of the content while adding neoclassical A4 print-ready page-break and unified header
  let formatted = '';
  if (content.startsWith('# ')) {
    const firstLineEnd = content.indexOf('\n');
    const rest = content.slice(firstLineEnd + 1).trimStart();
    formatted = `<div style="page-break-before: always;"></div>\n\n${m.title}\n${m.subtitle}\n\n${rest}\n`;
  } else {
    formatted = `<div style="page-break-before: always;"></div>\n\n${m.title}\n${m.subtitle}\n\n${content}\n`;
  }

  const outPath = path.join(destDir, m.dest);
  fs.writeFileSync(outPath, formatted, 'utf-8');
  const wordCount = formatted.split(/\s+/).filter(Boolean).length;
  console.log(`✓ ${m.dest}: ${formatted.length} bytes, ${wordCount} words (source: ${content.length} bytes)`);
}

console.log('Sovereign Current Affairs book chapters generated successfully.');
