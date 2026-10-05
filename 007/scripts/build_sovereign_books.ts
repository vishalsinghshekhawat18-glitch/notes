import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import { auditPdf } from './forensic_pdf_audit';

// Configure marked with KaTeX
marked.use(
  markedKatex({
    throwOnError: false,
    strict: false,
    output: 'html',
    nonStandard: true,
  })
);


export interface SubjectBookConfig {
  slug: string;
  code: string;
  bookNumber: number;
  outputPdfName: string;
  title: string;
  subtitle: string;
  category: string;
  emblem: string;
  authors: string;
  primarySources: string[];
  targetExams: string[];
  notesSubdir: string;
  isPaperModular?: boolean; // For IIBF DBF which has Paper 1..4 subfolders
  coverPledgeBadge?: string;
  colophonNotice?: string;
}

export const SOVEREIGN_SUBJECT_CATALOG: SubjectBookConfig[] = [
  {
    slug: 'economics',
    code: 'ECO-007',
    bookNumber: 1,
    outputPdfName: '007_Book_01_Economics_Master_Codex_A4_BW.pdf',
    title: 'ECONOMICS & SOCIAL ISSUES (ESI) SOVEREIGN MASTER CODEX',
    subtitle: 'Doctoral Macroeconomic Foundations, 2015 SNA, Monetary Corridors, Fiscal Architecture & Social Issues Synthesis',
    category: 'Macroeconomics, Public Finance & Social Development',
    emblem: '🏛️',
    authors: 'Vivek Singh • Ramesh Singh • Sanjeev Verma • K. Sankarganesh • Nitin Singhania • CGB Mentors ESI',
    primarySources: [
      'Vivek Singh, Indian Economy (7th Edition, 2025–26)',
      'Ramesh Singh, Indian Economy (McGraw Hill, 16th Edition)',
      'Sanjeev Verma, The Indian Economy (Unique Academy)',
      'K. Sankarganesh, Indian Economy: Key Concepts (McGraw Hill, 6th Edition)',
      'Nitin Singhania, Indian Economy (McGraw Hill, 4th Edition)',
      'Official Reports: Economic Survey of India 2024–25, Union Budget 2025–26, RBI Annual Report, MoSPI PLFS Bulletins',
      'CrackGradeB / CGB Mentors: Economic & Social Issues (ESI) Complete Module Series'
    ],
    targetExams: ['UPSC CSE (GS-3 & Optional)', 'RBI Grade B (Phase I & II ESI)', 'NABARD Grade A', 'RPSC RAS (Paper 1)', 'State PSCs', 'UGC-NET Economics'],
    notesSubdir: 'economics',
    coverPledgeBadge: 'Comprehensive 26-Chapter Curricular Synthesis • Authoritative Macroeconomic & Statistical Grounding',
    colophonNotice: 'Curricular Scope & Synthesis Notice: This volume provides a comprehensive curricular synthesis of Macroeconomics, Indian Economic Development, and Social Issues across 26 doctoral-depth chapters for rigorous study and examination revision. Official statistical datasets (MoSPI, RBI, Union Budget, Economic Survey) and statutory enactments are structured for canonical reference on Shelf 007.',
  },
  {
    slug: 'political_science',
    code: 'POL-007',
    bookNumber: 2,
    outputPdfName: '007_Book_02_Political_Science_Master_Codex_A4_BW.pdf',
    title: 'POLITICAL SCIENCE & CONSTITUTIONAL GOVERNANCE CODEX',
    subtitle: 'Doctoral-Depth Constitutional Law, Administrative Governance, 2nd ARC Compendium & Regulatory State Architecture',
    category: 'Indian Constitution, Administrative Law & Public Governance',
    emblem: '⚖️',
    authors: 'M. Laxmikanth (8th Edition, 2026) • M. Laxmikanth (Governance in India) • Bare Act • 2nd ARC Commission',
    primarySources: [
      'The Constitution of India (Official Bare Act with all 106 Constitutional Amendments through 2025)',
      'M. Laxmikanth, Indian Polity for Civil Services Examinations (McGraw Hill, 8th Edition, 2026)',
      'M. Laxmikanth, Governance in India (McGraw Hill, 2nd Edition)',
      'Second Administrative Reforms Commission (2nd ARC): Complete 15 Reports Compendium',
      'Landmark Supreme Court of India Rulings (Kesavananda, Minerva Mills, Bommai, Puttaswamy, Janhit Abhiyan, Electoral Bonds 2024)'
    ],
    targetExams: ['UPSC CSE (GS-2 & PSIR Optional)', 'RPSC RAS (Paper 3)', 'UPSC APFC / EPFO', 'State Public Service Commissions', 'UGC-NET Political Science'],
    notesSubdir: 'political_science',
  },
  {
    slug: 'geography',
    code: 'GEO-007',
    bookNumber: 3,
    outputPdfName: '007_Book_03_Geography_Master_Codex_A4_BW.pdf',
    title: 'GEOGRAPHY: INDIA, WORLD & RAJASTHAN SOVEREIGN ARCHITECTURE',
    subtitle: 'Planetary Geomorphology, Climatology, Oceanography, Environmental Ecology, Indian Monsoons & Regional Cartography',
    category: 'Physical, Human, Economic & Environmental Geography',
    emblem: '🌍',
    authors: 'Prof. Majid Husain • Shankar IAS Academy • Dr. Savindra Singh • Dr. L.R. Bhalla • NCERTs',
    primarySources: [
      'Prof. Majid Husain, Geography of India (McGraw Hill, 9th Edition)',
      'Dr. Savindra Singh, Physical Geography (Praveen Khatri)',
      'Shankar IAS Academy, Environment & Ecology (10th Revised Edition)',
      'Dr. L.R. Bhalla, Geography of Rajasthan (Kuldeep Publications)',
      'NCERT Class XI & XII: Fundamentals of Physical Geography, India: Physical Environment, Human Geography',
      'Official Survey Datasets: India State of Forest Report (ISFR 2023), Central Ground Water Board (CGWB 2024)'
    ],
    targetExams: ['UPSC CSE (GS-1 & Geography Optional)', 'RPSC RAS (Paper 1 Geography)', 'UPSC CDS / NDA', 'State Public Service Commissions'],
    notesSubdir: 'geography',
  },
  {
    slug: 'quantitative_aptitude',
    code: 'QNT-007',
    bookNumber: 4,
    outputPdfName: '007_Book_04_Quantitative_Aptitude_Master_Codex_A4_BW.pdf',
    title: 'QUANTITATIVE APTITUDE & MATHEMATICAL LOGIC CODEX',
    subtitle: 'First-Principles Vedic Engines, Number Invariants, Pure Algebra Sign-Tables, Commercial Cross-Alligation & Geometry',
    category: 'Mathematical Logic, Quantitative Reasoning & Arithmetic Foundations',
    emblem: '📐',
    authors: 'Sarvesh K. Verma (Quantum CAT) • Arun Sharma • Dr. R.S. Aggarwal • Rajesh Verma',
    primarySources: [
      'Sarvesh K. Verma, Quantum CAT: Quantitative Aptitude for CAT, GMAT, XAT (Arihant Publications)',
      'Arun Sharma, How to Prepare for Quantitative Aptitude for CAT (McGraw Hill)',
      'Dr. R.S. Aggarwal, Quantitative Aptitude for Competitive Examinations (S. Chand)',
      'Rajesh Verma, Fast Track Objective Arithmetic (Arihant)'
    ],
    targetExams: ['CAT / XAT / GMAT', 'Banking PO / Clerk (IBPS, SBI, RBI Grade B Phase I)', 'UPSC CSAT (Paper II)', 'SSC CGL Tier I & II', 'RPSC RAS CSAT'],
    notesSubdir: 'quantitative_aptitude',
  },
  {
    slug: 'general_science',
    code: 'SCI-007',
    bookNumber: 5,
    outputPdfName: '007_Book_05_General_Science_Master_Codex_A4_BW.pdf',
    title: 'GENERAL SCIENCE: PHYSICS, CHEMISTRY & BIOLOGY UNIFIED',
    subtitle: 'Comprehensive Conceptual Synthesis of Mechanics, Thermodynamics, Electromagnetism, Chemical Bonding, Physiology & Genetics',
    category: 'Physics, Inorganic/Organic Chemistry, Cell Biology & Applied BioTech',
    emblem: '🔬',
    authors: 'NCERT Class 6–12 • Halliday-Resnick • Campbell Biology • Morrison-Boyd',
    primarySources: [
      'NCERT Science Textbooks (Classes VI, VII, VIII, IX, and X Complete)',
      'NCERT Physics, Chemistry & Biology (Classes XI & XII Specialized Units)',
      'Standard Higher Treatises: Halliday, Resnick & Walker (Fundamentals of Physics), Campbell Biology (12th Edition)',
      'Competitive Multi-Exam Diagnostic Question Repositories & ISRO / DRDO / DST Science & Tech Bulletins'
    ],
    targetExams: ['UPSC CSE (GS-1 & GS-3 Science & Tech)', 'RPSC RAS (Paper 2 General Science & Technology)', 'UPSC CDS / CAPF', 'SSC CGL', 'Railway RRB NTPC'],
    notesSubdir: 'general_science',
  },
  {
    slug: 'english_language',
    code: 'ENG-007',
    bookNumber: 6,
    outputPdfName: '007_Book_06_English_Language_Master_Codex_A4_BW.pdf',
    title: 'ENGLISH LANGUAGE & DESCRIPTIVE WRITING MASTER CODEX',
    subtitle: '120 Golden Rules of Grammar, Syntactic Inversion, 1,000+ Etymological Root Engine, Full-Block Letters & PEEL Essay Laboratory',
    category: 'Applied Linguistics, Advanced Vocabulary & Descriptive Discourse',
    emblem: '🖋️',
    authors: 'Nikhil Gupta (Black Book) • Nimisha Bansal (Vocab Prodigy) • Wren & Martin • Strunk & White',
    primarySources: [
      'Nikhil Gupta, The Black Book of English Vocabulary (March 2024 Edition)',
      'Nimisha Bansal, Vocab Prodigy (2nd Edition, 2024)',
      'P.C. Wren & H. Martin, High School English Grammar and Composition (S. Chand)',
      'William Strunk Jr. & E.B. White, The Elements of Style',
      'Statutory & Institutional Frameworks: Reserve Bank - Integrated Ombudsman Scheme (RB-IOS 2021), Liberalised Remittance Scheme (LRS)'
    ],
    targetExams: ['RBI Grade B Phase II (Descriptive English)', 'NABARD Grade A (Paper I Descriptive)', 'SBI / IBPS PO Mains (Letter & Essay)', 'UPSC CSE (Compulsory English)'],
    notesSubdir: 'english_language',
  },
  {
    slug: 'iibf_dbf',
    code: 'DBF-007',
    bookNumber: 7,
    outputPdfName: '007_Book_07_IIBF_DBF_Banking_Finance_Master_Codex_A4_BW.pdf',
    title: 'IIBF DIPLOMA IN BANKING & FINANCE (DBF / JAIIB CODEX)',
    subtitle: 'Master 4-Paper Curriculum: Indian Economy & Financial System, Principles of Banking, Accounting & Financial Management, Retail Banking',
    category: 'Statutory Banking, Financial Mathematics & Regulatory Compliance',
    emblem: '🏦',
    authors: 'Indian Institute of Banking & Finance (IIBF) • Macmillan Education • Taxmann',
    primarySources: [
      'Official IIBF Macmillan Courseware: Paper 1 (IE&IFS), Paper 2 (PPB), Paper 3 (AFMB), Paper 4 (RBWM)',
      'Statutory Banking Acts: Banking Regulation Act 1949, RBI Act 1934, NI Act 1881, SARFAESI Act 2002, IBC 2016, Banking Laws (Amendment) Act 2025',
      'Master Directions & Circulars of the Reserve Bank of India on Capital Adequacy (Basel III), Priority Sector Lending (PSL), and IRAC Norms'
    ],
    targetExams: ['IIBF Diploma in Banking & Finance (DB&F)', 'IIBF JAIIB Examination', 'Bank Specialist Officer (IBPS SO IT / Law / Credit)', 'RBI Grade B General / Legal'],
    notesSubdir: 'iibf_dbf',
    isPaperModular: true,
    coverPledgeBadge: 'Comprehensive 4-Paper Curricular Synthesis • Authoritative Regulatory & Statutory Grounding',
    colophonNotice: 'Curricular Scope & Synthesis Notice: This volume provides a comprehensive curricular synthesis of the official IIBF Diploma in Banking & Finance (DB&F / JAIIB) 4-paper curriculum (IE&IFS, PPB, AFM, RBWM) for rigorous study and examination revision. Statutory enactments, RBI master directions, and regulatory frameworks are structured for canonical reference on Shelf 007.',
  },
  {
    slug: 'history',
    code: 'HIST-007',
    bookNumber: 8,
    outputPdfName: '007_Book_08_History_Master_Curriculum_A4_BW.pdf',
    title: 'HISTORY: ANCIENT, MEDIEVAL, MODERN, RAJASTHAN & WORLD CODEX',
    subtitle: 'Comprehensive 39-Chapter Master Curriculum Blueprint, Epigraphic Invariants, Dynastic Statecraft & Global Revolutions',
    category: 'Historiography, Epigraphy, Archaeological Records & Socio-Economic History',
    emblem: '📜',
    authors: 'Upinder Singh • Satish Chandra • Bipan Chandra • Sekhar Bandyopadhyay • Spectrum (Rajiv Ahir) • G.N. Sharma • Norman Lowe',
    primarySources: [
      'Upinder Singh, A History of Ancient and Early Medieval India (Pearson)',
      'Satish Chandra, History of Medieval India (Orient Blackswan)',
      'Bipan Chandra, India’s Struggle for Independence (Penguin)',
      'Sekhar Bandyopadhyay, From Plassey to Partition and After (Orient Blackswan)',
      'Rajiv Ahir (Spectrum Books), A Brief History of Modern India',
      'Dr. G.N. Sharma & Dr. Hukam Chand Jain, Rajasthan Ka Itihas (Rajasthan Hindi Granth Academy)',
      'Norman Lowe, Mastering Modern World History (Bloomsbury / Palgrave)'
    ],
    targetExams: ['UPSC CSE (GS-1 & History Optional)', 'RPSC RAS (Paper 1 History & Culture of Rajasthan)', 'UPSC APFC / EPFO', 'State Public Service Commissions'],
    notesSubdir: 'history',
  },
  {
    slug: 'hindi',
    code: 'HIN-007',
    bookNumber: 9,
    outputPdfName: '007_Book_09_General_Hindi_Master_Codex_A4_BW.pdf',
    title: 'GENERAL HINDI & ADMINISTRATIVE RHETORIC MASTER CODEX',
    subtitle: 'RPSC RAS Mains Paper 4 (120 Marks) Sovereign Epistemic Treatise: Phonetics, Grammar, Orthography, Terminology, Précis, Correspondence & Essay',
    category: 'Vyavaharik Hindi Vyakaran, Shabd Shuddhi, Prashasnik Karyalayi Alekhan & Nibandh',
    emblem: '📜',
    authors: 'Dr. Raghav Prakash • Dr. Hardev Bahri • Dr. Vasudevnandan Prasad • Pt. Kamta Prasad Guru • RBSE Classes 9–12 • CSTT',
    primarySources: [
      'Dr. Raghav Prakash, Vyavaharik Samanya Hindi (Pink City Publishers)',
      'Dr. Hardev Bahri, Samanya Hindi & Prashasnik Hindi Shabdavali (Rajkamal Prakashan)',
      'Dr. Vasudevnandan Prasad, Adhunik Hindi Vyakaran Aur Rachna (Bharati Bhawan)',
      'RBSE Classes 9-12, Naveen Hindi Vyakaran Evam Rachna Prabodh',
      'CSTT (Commission for Scientific and Technical Terminology), Administrative & Legal Glossary (GoI)',
      'Rajasthan Secretariat Manual of Office Procedure (Official Formats & Drafting Standards)',
      'RPSC RAS Mains Paper 4 Past Examination Question Autopsies (1995–2024)'
    ],
    targetExams: ['RPSC RAS Mains (Paper 4 — 120 Marks)', 'RPSC SI (Sub-Inspector)', 'UPPSC Mains (General Hindi)', 'MPPSC Mains', 'UPSC CSE (Compulsory Indian Language Hindi)'],
    notesSubdir: 'hindi',
    coverPledgeBadge: 'Zero Unaccounted-For Source Omission • Verified Statutory & Secretariat Grounding',
    colophonNotice: 'Curricular Scope & Synthesis Notice: This volume provides a comprehensive curricular synthesis of General Hindi for RPSC RAS Mains (Paper 4 — 120 Marks). All grammatical derivations, spelling rules, official drafting templates, and administrative vocabulary adhere strictly to Rajasthan High Court and RBSE recognized standards on Shelf 007.',
  },
  {
    slug: 'current_affairs',
    code: 'CA-007',
    bookNumber: 10,
    outputPdfName: '007_Book_10_Current_Affairs_Banking_Regulatory_Codex_A4_BW.pdf',
    title: 'CONTEMPORARY ISSUES, BANKING REGULATION & CURRENT AFFAIRS MASTER CODEX',
    subtitle: 'Senior Paper-Setter Master Strike Treatise: Static Banking Acts, Prudential Norms, 2026 Monthly/Quarterly Dossiers, IBPS 35+ Guarantee & Computer Aptitude',
    category: 'Banking Regulation, Monetary Policy, Contemporary National Affairs & Computer Aptitude',
    emblem: '🌐',
    authors: 'The Gazette of India • Reserve Bank of India • Supreme Court Constitution Bench • PIB • SEBI • PFRDA • IFSCA',
    primarySources: [
      'The Gazette of India (Bare Acts, Legislative Amendments & Ministry Determinations)',
      'Reserve Bank of India (RBI Master Directions, Circulars, Monetary Policy Bulletins & Prudential Norms)',
      'Supreme Court of India (Constitution Bench Judgments & Judicial Doctrines)',
      'Press Information Bureau (PIB), Union Budget 2026-27, Economic Survey & MoSPI Releases',
      'Securities and Exchange Board of India (SEBI) & IFSCA Market Abuse Regulations (GIFT IFSC)',
      'CrackGradeB / CGB Mentors & Senior Paper-Setter Master Dossiers (January–September 2026)',
      'Official National Curricula for Computer Aptitude, Core Banking Solutions (CBS) & Cybersecurity'
    ],
    targetExams: [
      'IBPS PO / Clerk Mains (35+ Marks Guarantee)',
      'SBI PO / Clerk Mains',
      'RBI Grade B (Phase I & II ESI / Finance & Management)',
      'SEBI Grade A & IFSCA Grade A',
      'NABARD Grade A',
      'UPSC CSE (GS-2 & GS-3 Contemporary Issues)',
      'RPSC RAS (Paper 1 & Paper 3 Current Affairs)'
    ],
    notesSubdir: 'current_affairs',
    coverPledgeBadge: 'Zero Unaccounted-For Source Omission • Verified Statutory Directions & Senior Paper-Setter Grounding',
    colophonNotice: 'Curricular Scope & Synthesis Notice: This volume provides a comprehensive curricular synthesis of Contemporary Issues, Banking Regulations, 2026 Monthly Dossiers (January to September), and Computer Aptitude for High-Scoring Mains Performance. All facts, thresholds, and directives adhere strictly to official gazette and regulatory publications on Shelf 007.'
  },
  {
    slug: 'rajasthan',
    code: 'RAJ-007',
    bookNumber: 11,
    outputPdfName: '007_Book_11_Rajasthan_Master_Codex_A4_BW.pdf',
    title: 'RAJASTHAN SOVEREIGN MASTER CODEX (THE MEGA BOOK)',
    subtitle: 'Doctoral Synthesis of Rajasthan History, Art, Culture, Morphotectonics, Drainage, Governance, and Economic Review for RPSC RAS',
    category: 'Rajasthan Comprehensive State Studies & Administrative Canon',
    emblem: '🏰',
    authors: 'Rajasthan Board (RBSE) • डॉ. गोपीनाथ शर्मा • डॉ. हुकुमचंद जैन • डॉ. एल.आर. भल्ला • डॉ. हरि मोहन सक्सेना • डॉ. जनक सिंह मीना • DES (आर्थिक समीक्षा)',
    primarySources: [
      'Rajasthan Board of Secondary Education (RBSE): Class 9 "Swatantrata Andolan", Class 10 "Itihas evam Sanskriti", Adhyayan 9–12',
      'Dr. Gopinath Sharma, Rajasthan Ka Itihas (Rajasthan Hindi Granth Academy)',
      'Dr. Hukum Chand Jain & Dr. Narayan Lal Mali, Rajasthan Ka Swatantrata Sangram evam Sanskritik Itihas (RHGA)',
      'Dr. L.R. Bhalla, Rajasthan Ka Bhugol (Kuldeep Publications)',
      'Dr. Hari Mohan Saxena, Rajasthan Ka Bhugol (Rajasthan Hindi Granth Academy)',
      'Dr. Janak Singh Meena & Dr. B.L. Fadia, Rajasthan Ki Rajnaitik evam Prashasnik Vyavastha (RHGA)',
      'Directorate of Economics & Statistics (DES), Rajasthan Economic Review (आर्थिक समीक्षा) & State Budget',
      'Official Rajasthan Bare Acts (Panchayati Raj Act 1994, Public Services Guarantee Act 2011, Right to Hearing Act 2012)'
    ],
    targetExams: [
      'RPSC RAS (Prelims & Mains Papers 1, 2, 3)',
      'RPSC Sub-Inspector',
      'College Lecturer (Paper 3)',
      'School Lecturer (Paper 1)',
      'State Engineering & Accounts Services'
    ],
    notesSubdir: 'rajasthan',
    coverPledgeBadge: 'Comprehensive 37-Chapter Master Synthesis • Official RBSE & Hindi Granth Academy Authoritative Grounding',
    colophonNotice: 'Curricular Scope & Synthesis Notice: This volume provides a comprehensive curricular synthesis of Rajasthan History, Art, Culture, Geography, Administrative Governance, and Macroeconomy across 37 doctoral-depth chapters for rigorous RPSC RAS examination preparation. Official RBSE and Rajasthan Hindi Granth Academy treatises and statutory enactments are structured for canonical reference on Shelf 007.'
  }
];

// Helper to gather all markdown files for a subject in logical order
export function collectSubjectMarkdownFiles(subject: SubjectBookConfig, baseNotesDir: string): string[] {
  const dir = path.join(baseNotesDir, subject.notesSubdir);
  if (!fs.existsSync(dir)) {
    console.warn(`[WARN] Subject directory not found: ${dir}`);
    return [];
  }

  if (subject.isPaperModular) {
    // Modular paper structure (like iibf_dbf)
    const files: string[] = [];
    const blueprintPath = path.join(dir, '01_SYLLABUS_AND_EXAM_BLUEPRINT.md');
    if (fs.existsSync(blueprintPath)) files.push(blueprintPath);

    // Scan Paper subfolders
    const subdirs = fs.readdirSync(dir, { withFileTypes: true })
      .filter(e => e.isDirectory())
      .map(e => e.name)
      .sort();

    for (const sub of subdirs) {
      const subDirPath = path.join(dir, sub);
      const modFiles = fs.readdirSync(subDirPath)
        .filter(f => f.endsWith('.md'))
        .sort()
        .map(f => path.join(subDirPath, f));
      files.push(...modFiles);
    }
    return files;
  }

  // Standard sequential folder: skip 00_COVER.md because the sovereign neoclassical cover and colophon are already generated
  const allEntries = fs.readdirSync(dir, { withFileTypes: true });
  const mdFiles = allEntries
    .filter(e => e.isFile() && e.name.endsWith('.md') && e.name !== '00_COVER.md')
    .map(e => path.join(dir, e.name))
    .sort();

  return mdFiles;
}

// Transform callouts, alerts, tables, and typography for luxury Oxford book & magazine printing
export function transformMarkdownToPrintHtml(rawMarkdown: string, subject: SubjectBookConfig, katexCssContent: string): string {
  // 1. Strip raw HTML frontmatter tags or metadata artifacts if present
  let text = rawMarkdown
    .replace(/\*\*Metadata:\*\*[\s\S]*?(?=\n\n|\n#|$)/g, '')
    .replace(/^Metadata:[\s\S]*?(?=\n\n|\n#|$)/gm, '')
    .replace(/^[•\-\*]\s+\*\*Item ID:\*\*.*$/gm, '')
    .replace(/^[•\-\*]\s+\*\*Target Exams:\*\*.*$/gm, '');

  // 2. Eliminate ghost blank pages by removing inline forced page breaks
  text = text.replace(/<div[^>]*style="[^"]*page-break-[^"]*"[^>]*>\s*<\/div>/gi, '');
  text = text.replace(/<div[^>]*class="[^"]*page-break[^"]*"[^>]*>\s*<\/div>/gi, '');

  // Ensure double newlines after <summary> tags so marked parses markdown and KaTeX inside details
  text = text.replace(/(<summary>[\s\S]*?<\/summary>)\s*\n/gi, '$1\n\n');

  // 3. Mathematical Formatting & Rupee Normalization

  // A. Display math blocks: multi-line capture, escape percent, normalize Rupee & PPP $
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (match, inner) => {
    let cleanInner = inner
      .replace(/\n+/g, ' ')
      .replace(/<\/?(em|strong|b|i|span)[^>]*>/gi, '')
      .replace(/\\mathbf\{₹([^}]*)\}/g, '\\text{₹}\\mathbf{$1}')
      .replace(/(?<!\\text\{)₹/g, '\\text{₹}')
      .replace(/(?<=[0-9])%/g, '\\%')
      .replace(/PPP\s*\\?\$/g, 'PPP \\$')
      .trim();
    return `\n\n$$ ${cleanInner} $$\n\n`;
  });

  // B. Currency Collision Defense: Protect isolated dollar currencies from KaTeX math parser
  text = text.replace(/\\(\$)/g, '___CURRENCY_USD___');
  text = text.replace(/(^|[\s\(\[\{>\-–+~])\$(\d+[\d,\.]*\s*(?:billion|million|trillion|crore|lakh|bn|m|b|k)\b)/gi, '$1___CURRENCY_USD___$2');
  text = text.replace(/(^|[\s\(\[\{>\-–+~])\$(\d[\d,\.]*)(?![^\n]*\$)/g, '$1___CURRENCY_USD___$2');
  text = text.replace(/\bUS\$/g, 'US___CURRENCY_USD_SIGN___');

  // C. Inline math blocks: escape percent and normalize Rupee
  text = text.replace(/(?<!\$)\$([^\$\n]+)\$(?!\$)/g, (m, inner) => {
    let clean = inner
      .replace(/\\mathbf\{₹([^}]*)\}/g, '\\text{₹}\\mathbf{$1}')
      .replace(/(?<!\\text\{)₹/g, '\\text{₹}')
      .replace(/(?<=[0-9])%/g, '\\%');
    return `$${clean}$`;
  });


  // 5. Fix parenthesized inline math: ensure clean boundaries
  text = text.replace(/\(\$([^\$\n]+)\$\)/g, (match, inner) => `( $${inner}$ )`);
  text = text.replace(/\[\$([^\$\n]+)\$\]/g, (match, inner) => `[ $${inner}$ ]`);

  // 6. Ensure tag boundaries around inline math $ have space
  text = text.replace(/(>)\$([^\$\n]+)\$/g, (match, tag, inner) => `${tag} $${inner}$`);
  text = text.replace(/\$([^\$\n]+)\$(<)/g, (match, inner, tag) => `$${inner}$ ${tag}`);
  text = text.replace(/\$([^\$\n]+)\$([;:,])/g, (match, inner, punct) => `$${inner}$ ${punct}`);


  // 8. Transform Table of Contents ASCII code tree into an Oxford Monograph Curricular Index
  text = text.replace(/```text\s*\n(PART I:[\s\S]*?)```/g, (match, tocContent) => {
    const lines = tocContent.split('\n');
    let tocHtml = '<div class="curriculum-toc-magazine">\n';
    let inPart = false;

    lines.forEach((line: string) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('PART ')) {
        if (inPart) {
          tocHtml += '</div>\n';
        }
        const colonIdx = trimmed.indexOf(':');
        const partTag = colonIdx > -1 ? trimmed.slice(0, colonIdx).trim() : trimmed;
        const partTitle = colonIdx > -1 ? trimmed.slice(colonIdx + 1).trim() : '';

        tocHtml += `<div class="toc-magazine-part-banner">\n<span class="toc-part-tag">${partTag}</span>\n<span class="toc-part-title">${partTitle}</span>\n</div>\n<div class="toc-magazine-chapters-group">\n`;
        inPart = true;
      } else if (trimmed.includes('Chapter ')) {
        const chMatch = trimmed.match(/Chapter\s+(\d+):\s*(.*)/i);
        if (chMatch) {
          const chNum = chMatch[1].padStart(2, '0');
          const chTitle = chMatch[2].trim();
          tocHtml += `<div class="toc-magazine-ch-row">\n<span class="toc-magazine-ch-pill">CHAPTER ${chNum}</span>\n<span class="toc-magazine-ch-name">${chTitle}</span>\n<span class="toc-magazine-leader"></span>\n</div>\n`;
        }
      }
    });

    if (inPart) {
      tocHtml += '</div>\n';
    }
    tocHtml += '</div>\n';
    return tocHtml;
  });

  // 9. Math escaping defense & bullet list normalization
  text = text.replace(/\\\\\$/g, '___DOUBLE_ESC_DOLLAR___');

  // Convert unicode bullets (•, ●, etc.) to standard markdown hyphens
  text = text.replace(/^([ \t]*)[•●○■◆]\s+/gm, '$1- ');

  // Move trailing colon inside bold asterisks so it doesn't dangle on the next line
  text = text.replace(/\*\*([^*\n\r]+)\*\*:[ \t]*/g, '**$1:** ');


  // Ensure clean separation for list items so marked doesn't merge paragraphs
  text = text.replace(/([^\n])\n([*\-]\s+)/g, '$1\n\n$2');
  text = text.replace(/([^\n])\n(\d+\.\s+)/g, '$1\n\n$2');

  // 10. Render Markdown through marked + KaTeX
  let html = marked.parse(text) as string;

  // Restore protected currency amounts
  html = html.replace(/___CURRENCY_USD___/g, '$');
  html = html.replace(/___CURRENCY_USD_SIGN___/g, '$');

  // Transform HTML <details><summary> active recall flashcards into full-fidelity print blocks
  html = html.replace(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi, (match, summaryText, bodyText) => {
    return `<div class="active-recall-card">\n<div class="card-prompt-bar">⚡ ACTIVE RECALL &amp; DIAGNOSTIC PROMPT</div>\n<div class="card-prompt-summary">${summaryText.trim()}</div>\n<div class="card-answer-box">\n<div class="card-answer-tag">RIGOROUS CAUSAL PROOF &amp; EXAM SOLUTION</div>\n<div class="card-answer-body">\n${bodyText.trim()}\n</div>\n</div>\n</div>\n`;
  });

  // 4. Transform blockquotes into high-impact Magazine & Academic Callout Featurettes
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (match, inner) => {
    // A. Exam Trap Feature (Magazine Alert)
    if (
      inner.includes('🎯') ||
      inner.includes('⚠️') ||
      inner.includes('KILLER TRAP') ||
      inner.includes('Trap Alert') ||
      inner.includes('Exam Trap') ||
      inner.includes('EXAM TRAP') ||
      inner.includes('High-Yield Trap')
    ) {
      return `
        <div class="exam-trap-feature">
          <div class="feature-bar-black">⚡ EXAM TRAP ALERT & AUDITOR'S PITFALL MATRIX</div>
          <div class="feature-body-content">${inner}</div>
        </div>
      `;
    }

    // B. Statutory Mandates & Constitutional Bare Act Articles (Law Review Style)
    if (
      inner.includes('⚖️') ||
      inner.includes('Article ') ||
      inner.includes('Section ') ||
      inner.includes('Bare Act') ||
      inner.includes('Statutory') ||
      inner.includes('Act, ') ||
      inner.includes('Constitution of India')
    ) {
      return `
        <div class="statute-feature">
          <div class="statute-bar-header">⚖️ STATUTORY MANDATE & CONSTITUTIONAL ARTICLES</div>
          <div class="statute-body-content">${inner}</div>
        </div>
      `;
    }

    // C. Transmission Mechanisms & Causal Models (Technical Monograph Style)
    if (
      inner.includes('⚡') ||
      inner.includes('Transmission Mechanism') ||
      inner.includes('Causal Mechanics') ||
      inner.includes('First-Principles') ||
      inner.includes('Proof:') ||
      inner.includes('Model:')
    ) {
      return `
        <div class="mechanism-feature">
          <div class="mechanism-bar-header">⚡ FIRST-PRINCIPLES TRANSMISSION MECHANISM</div>
          <div class="mechanism-body-content">${inner}</div>
        </div>
      `;
    }

    // Default Magazine Centered Pull Quote
    return `
      <div class="magazine-pull-quote">
        <div class="quote-text">${inner}</div>
      </div>
    `;
  });

  // 4.B Format Bullet Points so that bold bullet labels have their explanation content start on the NEXT LINE
  html = html.replace(/<li>\s*(?:<p>)?\s*<(?:strong|b)>([\s\S]*?)<\/(?:strong|b)>:?\s*([\s\S]*?)(?:<\/p>)?\s*<\/li>/g, (match, title, rest) => {
    const cleanRest = rest.trim();
    if (cleanRest.length > 0 && !cleanRest.startsWith('<ul') && !cleanRest.startsWith('<ol')) {
      return `<li><span class="bullet-heading"><strong>${title.replace(/:$/, '')}:</strong></span><div class="bullet-body">${cleanRest}</div></li>`;
    }
    return match;
  });

  // 5. Structure Chapter Headings (H1) with Pill Badges, Dual Rules, and Drop Caps
  let chapterIndex = 0;
  html = html.replace(/<h1(?: id="([^"]*)")?>([\s\S]*?)<\/h1>/g, (match, id, title) => {
    const isToc =
      title.toLowerCase().includes('table of contents') ||
      title.toLowerCase().includes('master curriculum') ||
      title.toLowerCase().includes('syllabus') ||
      title.toLowerCase().includes('blueprint');

    if (isToc) {
      const idAttr = id ? ` id="${id}"` : '';
      return `
        <div class="toc-header-wrapper">
          <div class="toc-masthead-tag">CURRICULAR ARCHITECTURE</div>
          <h1${idAttr} class="toc-h1-title">${title}</h1>
          <div class="toc-dual-rule"></div>
        </div>
      `;
    }

    chapterIndex++;
    const idAttr = id ? ` id="${id}"` : '';
    const chapterNumberStr = String(chapterIndex).padStart(2, '0');

    return `
      <div class="chapter-opener-spread">
        <div class="chapter-badge-strip">
          <span class="chapter-pill">CHAPTER ${chapterNumberStr}</span>
          <span class="chapter-bastion-tag">CANONICAL MONOGRAPH</span>
        </div>
        <h1${idAttr} class="chapter-h1-title">${title}</h1>
        <div class="chapter-ornament-rules">
          <div class="rule-heavy"></div>
          <div class="rule-hairline"></div>
        </div>
      </div>
    `;
  });

  // 6. Section Headings (H2) styled as Architectural Banners
  html = html.replace(/<h2(?: id="([^"]*)")?>([\s\S]*?)<\/h2>/g, (match, id, title) => {
    const isToc =
      title.toLowerCase().includes('table of contents') ||
      title.toLowerCase().includes('master index') ||
      title.toLowerCase().includes('part & chapter');

    const h2Class = isToc ? 'toc-part-banner' : 'section-architectural-banner';
    const idAttr = id ? ` id="${id}"` : '';
    return `
      <h2${idAttr} class="${h2Class}">
        <span class="sec-tag-marker">§</span>
        <span class="h2-title-text">${title}</span>
      </h2>
    `;
  });

  // 7. Inject Drop Cap wrapper onto the first paragraph following a chapter opener
  html = html.replace(/(<div class="chapter-ornament-rules">[\s\S]*?<\/div>\s*<\/div>\s*)(<p>)([\s\S]*?<\/p>)/g, (match, opener, pTag, pContent) => {
    return `${opener}<p class="drop-cap-lead">${pContent}`;
  });

  // 7.B Tag wide and ultrawide pre blocks for proportional scale-down
  html = html.replace(/<pre><code(?:\s+class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g, (match, lang, codeContent) => {
    const lines = codeContent.split('\n');
    const maxLine = Math.max(...lines.map((l: string) => l.length));
    let extraClass = '';
    if (maxLine > 130) {
      extraClass = ' pre-ultrawide';
    } else if (maxLine > 88) {
      extraClass = ' pre-wide';
    }
    return `<pre class="${extraClass}"><code${lang ? ` class="${lang}"` : ''}>${codeContent}</code></pre>`;
  });

  // 8. Inject Absolute KaTeX font paths
  const fontDirAbs = path.resolve('node_modules/katex/dist/fonts').replace(/\\/g, '/');
  const correctedKatexCss = katexCssContent.replace(/url\(\s*fonts\//g, `url(file:///${fontDirAbs}/`);

  // 9. Luxury Oxford Monograph & Magazine Print Stylesheet
  const luxuryPrintCss = `
    @page {
      size: A4 portrait;
      margin-top: 16mm;
      margin-bottom: 18mm;
      margin-left: 20mm; /* 20mm spine gutter for spiral/wiro/perfect binding */
      margin-right: 16mm;

      /* Top Headers: Completely suppressed across real chapter and content pages */
      @top-left {
        content: none;
        border: none;
      }

      @top-right {
        content: none;
        border: none;
      }

      /* Running Footers: All extra metadata & pagination consolidated in bottom footer */
      @bottom-left {
        content: "${subject.code} • ${subject.title.slice(0, 38)}... • Shelf 007";
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 8pt;
        letter-spacing: 0.04em;
        color: #555555;
        border-top: 0.5pt solid #888888;
        padding-top: 2.5mm;
      }

      @bottom-right {
        content: "Page " counter(page);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 8.5pt;
        font-weight: 700;
        color: #000000;
        border-top: 0.5pt solid #888888;
        padding-top: 2.5mm;
      }
    }

    /* Suppress Running Header & Footer on Cover Page */
    @page:first {
      @top-left { content: none; border: none; }
      @top-right { content: none; border: none; }
      @bottom-left { content: none; border: none; }
      @bottom-right { content: none; border: none; }
    }

    *, *:before, *:after {
      box-sizing: border-box !important;
      max-width: 100% !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      max-width: 100% !important;
      overflow-x: clip !important;
      background: #ffffff !important;
      color: #000000 !important;
      font-family: "Georgia", "Cambria", "Times New Roman", serif;
      font-size: 12pt;
      line-height: 1.50;
      text-rendering: optimizeLegibility;
    }

    /* High-Contrast Non-Bleed Semibold Typography */
    strong, b {
      font-weight: 700 !important;
      color: #000000 !important;
    }

    em, i {
      font-style: italic;
    }

    p {
      margin-top: 0;
      margin-bottom: 6.5pt;
      text-align: justify;
      text-justify: inter-word;
      hyphens: auto;
      orphans: 3;
      widows: 3;
    }

    /* Lists */
    ul, ol {
      margin-top: 4pt;
      margin-bottom: 8pt;
      padding-left: 20pt;
    }

    li {
      margin-bottom: 5.5pt;
      line-height: 1.48;
      orphans: 2;
      widows: 2;
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }

    /* Bullets: Bold label on line 1, explanation content starts on NEXT line */
    .bullet-heading,
    .bullet-label,
    li > strong:first-child,
    li > p:first-child > strong:first-child,
    li > b:first-child,
    li > p:first-child > b:first-child {
      display: block;
      font-weight: 700;
      margin-bottom: 2pt;
      color: #000000;
      break-after: avoid;
    }

    .bullet-body,
    .bullet-desc {
      display: block;
      line-height: 1.48;
      margin-top: 0;
      margin-bottom: 2pt;
    }

    li > p {
      margin-bottom: 3pt;
      text-align: justify;
    }

    /* ========================================================= */
    /* 1. NEOCLASSICAL ARCHITECTURAL COVER PAGE                  */
    /* ========================================================= */
    .sovereign-book-cover-container {
      width: 100% !important;
      max-width: 100% !important;
      min-height: 250mm;
      max-height: 258mm;
      border: 2pt solid #000000;
      box-shadow: inset 0 0 0 2.5mm #ffffff, inset 0 0 0 3.25pt #000000;
      padding: 10mm 12mm;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-after: always;
      break-after: page;
      margin: 0;
      box-sizing: border-box !important;
    }

    .cover-top-masthead {
      border-bottom: 1.5pt solid #000000;
      padding-bottom: 7pt;
    }

    .cover-masthead-org {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 9pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #000000;
      margin-bottom: 3pt;
    }

    .cover-masthead-shelf {
      font-family: "Courier New", Courier, monospace;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #333333;
    }

    .cover-center-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10pt 0;
    }

    .cover-emblem-medallion {
      display: inline-block;
      border: 1.5pt solid #000000;
      padding: 8pt 16pt;
      margin-bottom: 12pt;
      background: #fafafa !important;
    }

    .cover-emblem {
      font-size: 34pt;
      line-height: 1;
    }

    .cover-title {
      font-family: "Georgia", "Palatino", serif;
      font-size: 21pt;
      font-weight: 800;
      line-height: 1.22;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #000000;
      margin: 0 0 8pt 0;
      max-width: 95%;
    }

    .cover-subtitle {
      font-family: "Georgia", serif;
      font-size: 11pt;
      font-style: italic;
      line-height: 1.40;
      color: #222222;
      max-width: 90%;
      margin: 0 auto 12pt auto;
    }

    .cover-specification-strip {
      display: inline-block;
      border-top: 1.5pt solid #000000;
      border-bottom: 1.5pt solid #000000;
      background: #f4f4f4 !important;
      padding: 4pt 16pt;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8.5pt;
      font-weight: 800;
      letter-spacing: 0.10em;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 14pt;
    }

    .cover-grounding-box {
      border: 1pt solid #000000;
      background: #fafafa !important;
      padding: 8pt 14pt;
      max-width: 96%;
      text-align: left;
      margin: 0 auto;
      font-size: 9pt;
      line-height: 1.38;
    }

    .cover-grounding-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-weight: 800;
      font-size: 8.5pt;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-bottom: 0.75pt solid #888888;
      padding-bottom: 3pt;
      margin-bottom: 5pt;
      color: #000000;
    }

    .cover-grounding-list {
      margin: 0;
      padding-left: 14pt;
      color: #111111;
    }

    .cover-grounding-list li {
      margin-bottom: 2pt;
    }

    .cover-bottom-footer {
      border-top: 1.5pt solid #000000;
      padding-top: 7pt;
    }

    .cover-pledge-badge {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #000000;
    }

    .cover-pledge-sub {
      font-family: "Georgia", serif;
      font-size: 8.5pt;
      font-style: italic;
      color: #444444;
      margin-top: 2pt;
    }

    /* ========================================================= */
    /* 2. COMPACT COLOPHON & CIP DATA HEADER (VERSO)             */
    /* ========================================================= */
    .colophon-verso-page {
      border: 1pt solid #333333;
      padding: 9pt 12pt;
      margin-top: 30mm;
      margin-bottom: 16pt;
      background: #fafafa !important;
      font-size: 9pt;
      line-height: 1.40;
      color: #222222;
      break-inside: avoid;
      page-break-after: always;
      break-after: page;
    }

    .colophon-cip-header {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-weight: 800;
      font-size: 8.5pt;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-bottom: 0.5pt solid #888888;
      padding-bottom: 2pt;
      margin-bottom: 5pt;
      color: #000000;
    }

    .colophon-cip-content {
      font-family: "Courier New", Courier, monospace;
      font-size: 8.5pt;
      line-height: 1.38;
      color: #111111;
      margin-bottom: 5pt;
    }

    .colophon-imprint-text {
      font-family: "Georgia", serif;
      font-size: 8.5pt;
      line-height: 1.38;
      color: #444444;
      border-top: 0.5pt dashed #aaaaaa;
      padding-top: 4pt;
    }

    /* ========================================================= */
    /* 3. MAGAZINE-STYLE CHAPTER OPENERS & DROP CAPS             */
    /* ========================================================= */
    .chapter-opener-spread {
      margin-top: 0;
      margin-bottom: 12pt;
      page-break-before: always;
      break-before: page;
      break-after: avoid;
      page-break-after: avoid;
    }

    .chapter-badge-strip {
      display: flex;
      align-items: center;
      gap: 8pt;
      margin-bottom: 4pt;
    }

    .chapter-pill {
      background: #000000 !important;
      color: #ffffff !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 2.5pt 7pt;
      display: inline-block;
    }

    .chapter-bastion-tag {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #555555;
    }

    h1.chapter-h1-title {
      font-family: "Georgia", "Palatino", serif;
      font-size: 21pt;
      font-weight: 800;
      line-height: 1.20;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      color: #000000;
      margin: 4pt 0 8pt 0;
    }

    .chapter-ornament-rules {
      margin-bottom: 10pt;
    }

    .chapter-ornament-rules .rule-heavy {
      height: 2pt;
      background: #000000;
      margin-bottom: 1.5pt;
    }

    .chapter-ornament-rules .rule-hairline {
      height: 0.5pt;
      background: #000000;
    }

    /* The Classical 3-Line Drop Cap */
    p.drop-cap-lead::first-letter {
      float: left;
      font-family: "Georgia", "Palatino", serif;
      font-size: 3.2em;
      line-height: 0.82;
      padding-top: 2px;
      padding-right: 7px;
      padding-bottom: 1px;
      font-weight: 800;
      color: #000000;
    }

    /* TOC Headers */
    .toc-header-wrapper {
      page-break-before: always;
      break-before: page;
      break-after: avoid;
      margin-bottom: 12pt;
    }

    .toc-masthead-tag {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 0.14em;
      color: #555555;
      text-transform: uppercase;
      margin-bottom: 3pt;
    }

    h1.toc-h1-title {
      font-family: "Georgia", "Palatino", serif;
      font-size: 19pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin: 0 0 6pt 0;
    }

    .toc-dual-rule {
      border-top: 1.5pt solid #000;
      border-bottom: 0.5pt solid #000;
      height: 3px;
      margin-bottom: 10pt;
    }

    /* ========================================================= */
    /* 4. ARCHITECTURAL SECTION BANNERS (H2, H3, H4)             */
    /* ========================================================= */
    h2.section-architectural-banner {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 14pt;
      font-weight: 800;
      line-height: 1.25;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      border-top: 1.5pt solid #000000;
      border-bottom: 0.75pt solid #000000;
      background: #f7f7f7 !important;
      padding: 4.5pt 8pt;
      margin: 14pt 0 6pt 0;
      color: #000000;
      display: flex;
      align-items: center;
      break-after: avoid;
      page-break-after: avoid;
    }

    h2.section-architectural-banner .sec-tag-marker {
      background: #000000 !important;
      color: #ffffff !important;
      font-size: 8.5pt;
      font-weight: 700;
      padding: 1pt 5pt;
      margin-right: 6pt;
      display: inline-block;
    }

    h2.toc-part-banner {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 13pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: #eeeeee !important;
      border-left: 5pt solid #000000;
      padding: 4pt 8pt;
      margin: 12pt 0 6pt 0;
      color: #000000;
      break-after: avoid;
      page-break-after: avoid;
    }

    h3 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 13pt;
      font-weight: 700;
      line-height: 1.30;
      color: #000000;
      border-bottom: 0.5pt solid #cccccc;
      padding-bottom: 2pt;
      margin: 12pt 0 4pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h4 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 11.5pt;
      font-weight: 700;
      font-style: italic;
      color: #111111;
      margin: 8pt 0 3pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    /* ========================================================= */
    /* 5. SPECIALIZED EDITORIAL FEATURETTES                      */
    /* ========================================================= */
    /* Exam Trap Alert (Magazine Alert Box) */
    .exam-trap-feature {
      margin: 9pt 0 11pt 0;
      border: 1pt solid #000000;
      border-left: 4.5pt solid #000000;
      background: #fafafa !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    .exam-trap-feature .feature-bar-black {
      background: #000000 !important;
      color: #ffffff !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 10pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 3.5pt 8pt;
      break-after: avoid;
      page-break-after: avoid;
    }

    .exam-trap-feature .feature-body-content {
      padding: 6pt 10pt;
      font-size: 11.5pt;
      line-height: 1.48;
      color: #111111;
    }

    .exam-trap-feature .feature-body-content p {
      margin-bottom: 3.5pt;
    }

    /* Statutory Mandate Feature (Law Review Box) */
    .statute-feature {
      margin: 9pt 0 11pt 0;
      border: 1pt solid #333333;
      border-left: 4.5pt double #000000;
      background: #fbfbfb !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    .statute-feature .statute-bar-header {
      background: #f0f0f0 !important;
      border-bottom: 0.75pt solid #333333;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 10pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 3.5pt 8pt;
      color: #000000;
      break-after: avoid;
      page-break-after: avoid;
    }

    .statute-feature .statute-body-content {
      padding: 6pt 10pt;
      font-size: 11.5pt;
      line-height: 1.48;
    }

    .statute-feature .statute-body-content p {
      margin-bottom: 3.5pt;
    }

    /* First-Principles Mechanism Feature */
    .mechanism-feature {
      margin: 9pt 0 11pt 0;
      border: 1pt solid #444444;
      border-left: 4.5pt solid #111111;
      background: #fafafa !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    .mechanism-feature .mechanism-bar-header {
      background: #eeeeee !important;
      border-bottom: 0.75pt solid #444444;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 10pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 3.5pt 8pt;
      color: #000000;
      break-after: avoid;
      page-break-after: avoid;
    }

    .mechanism-feature .mechanism-body-content {
      padding: 6pt 10pt;
      font-size: 11.5pt;
      line-height: 1.48;
    }

    /* Magazine Centered Pull Quote */
    .magazine-pull-quote {
      margin: 10pt 16pt;
      padding: 7pt 12pt;
      border-top: 0.75pt solid #444444;
      border-bottom: 0.75pt solid #444444;
      text-align: center;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .magazine-pull-quote .quote-text {
      font-family: "Georgia", serif;
      font-style: italic;
      font-size: 11.5pt;
      line-height: 1.42;
      color: #111111;
    }

    .magazine-pull-quote p {
      margin-bottom: 0;
      text-align: center;
    }

    /* ========================================================= */
    /* 6. TUFTE / BOOKTABS ACADEMIC TABLES                       */
    /* ========================================================= */
    table {
      width: 100% !important;
      max-width: 100% !important;
      table-layout: fixed !important;
      box-sizing: border-box !important;
      border-collapse: collapse;
      margin: 9pt 0 12pt 0;
      font-size: 10.8pt;
      line-height: 1.40;
      border-top: 1.5pt solid #000000;
      border-bottom: 1.5pt solid #000000;
      break-inside: auto !important;
      page-break-inside: auto !important;
      word-break: break-word !important;
    }

    /* 2-Column Distinction Matrices: 28% Left Column, 72% Right Column */
    table tr th:first-child:nth-last-child(2),
    table tr td:first-child:nth-last-child(2) {
      width: 28%;
      font-weight: 700;
      border-right: 0.5pt solid #cccccc;
    }

    table tr th:last-child:nth-child(2),
    table tr td:last-child:nth-child(2) {
      width: 72%;
    }

    thead {
      display: table-header-group !important;
    }

    tbody {
      break-inside: auto !important;
      page-break-inside: auto !important;
    }

    tr {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }

    th {
      border-top: none;
      border-bottom: 0.75pt solid #000000;
      border-left: none;
      border-right: none;
      background-color: #eaeaea !important;
      color: #000000;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-weight: 700;
      font-size: 10.2pt;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 5.5pt 7pt;
      text-align: left;
      word-break: break-word !important;
      box-sizing: border-box !important;
    }

    td {
      border-top: none;
      border-bottom: 0.25pt solid #dddddd;
      border-left: none;
      border-right: none;
      padding: 5.5pt 7pt;
      vertical-align: top;
      font-size: 10.5pt;
      line-height: 1.40;
      word-break: break-word !important;
      box-sizing: border-box !important;
    }

    tr:nth-child(even) td {
      background-color: #fafafa !important;
    }

    /* Monospace Code & ASCII Diagrams */
    code {
      font-family: "Consolas", "Courier New", monospace;
      font-size: 9.8pt;
      font-weight: 600;
      background-color: #f2f2f2 !important;
      padding: 1pt 4pt;
      border: 0.5pt solid #cccccc;
      border-radius: 2px;
      color: #000000;
      word-break: break-word;
    }

    pre {
      font-family: "Consolas", "Courier New", monospace !important;
      background-color: #fafafa !important;
      border: 0.75pt solid #333333 !important;
      border-radius: 2px;
      padding: 5pt 7pt !important;
      font-size: 7.2pt !important;
      line-height: 1.25 !important;
      letter-spacing: -0.025em !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
      overflow-x: hidden !important;
      white-space: pre !important;
      word-break: normal !important;
      break-inside: avoid;
      page-break-inside: avoid;
      margin: 6pt 0 8pt 0 !important;
    }

    pre.pre-wide {
      font-size: 6.0pt !important;
      line-height: 1.20 !important;
      letter-spacing: -0.03em !important;
    }

    pre.pre-ultrawide {
      font-size: 4.8pt !important;
      line-height: 1.15 !important;
      letter-spacing: -0.035em !important;
    }

    pre code {
      background: none !important;
      border: none !important;
      padding: 0 !important;
      font-size: inherit !important;
      line-height: inherit !important;
      letter-spacing: inherit !important;
      white-space: pre !important;
      word-break: normal !important;
    }

    /* Active Recall Diagnostic Cards (Printed Full-Fidelity) */
    .active-recall-card {
      margin: 10pt 0 14pt 0;
      border: 1.25pt solid #000000;
      border-left: 4.5pt solid #000000;
      background: #ffffff !important;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .card-prompt-bar {
      background: #000000 !important;
      color: #ffffff !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 3.5pt 8pt;
    }

    .card-prompt-summary {
      font-family: "Georgia", serif;
      font-size: 10.5pt;
      font-weight: 700;
      font-style: italic;
      color: #000000;
      padding: 6pt 10pt 4pt 10pt;
      border-bottom: 0.75pt dashed #888888;
    }

    .card-answer-box {
      padding: 6pt 10pt 8pt 10pt;
      background: #fafafa !important;
    }

    .card-answer-tag {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #333333;
      margin-bottom: 4pt;
    }

    .card-answer-body {
      font-size: 10pt;
      line-height: 1.45;
      color: #000000;
    }

    .card-answer-body p {
      margin-bottom: 4pt;
      text-align: justify;
    }

    /* Magazine Table of Contents Grid */
    .curriculum-toc-magazine {
      margin: 10pt 0 16pt 0;
      width: 100%;
    }

    .toc-magazine-part-banner {
      background: #000000 !important;
      color: #ffffff !important;
      padding: 4.5pt 8pt;
      margin-top: 10pt;
      margin-bottom: 5pt;
      display: flex;
      align-items: center;
      gap: 8pt;
      break-after: avoid;
      page-break-after: avoid;
    }

    .toc-part-tag {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8.5pt;
      font-weight: 800;
      letter-spacing: 0.12em;
      background: #ffffff !important;
      color: #000000 !important;
      padding: 1.5pt 6pt;
    }

    .toc-part-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .toc-magazine-chapters-group {
      margin-bottom: 8pt;
      border-left: 1.25pt solid #cccccc;
      padding-left: 8pt;
    }

    .toc-magazine-ch-row {
      display: flex;
      align-items: baseline;
      padding: 2.5pt 0;
      font-size: 9.5pt;
      border-bottom: 0.25pt dashed #e0e0e0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .toc-magazine-ch-pill {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.05em;
      background: #f0f0f0 !important;
      color: #222222 !important;
      border: 0.5pt solid #cccccc;
      padding: 1pt 5pt;
      margin-right: 8pt;
      white-space: nowrap;
    }

    .toc-magazine-ch-name {
      font-family: "Georgia", serif;
      font-size: 9.5pt;
      color: #111111;
      flex: 1;
    }

    .toc-magazine-leader {
      flex: 1;
      border-bottom: 0.5pt dotted #999999;
      margin: 0 4pt;
      height: 1pt;
    }

    /* KaTeX Mathematical Formulas */
    .katex-display {
      margin: 6pt 0 !important;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    /* Horizontal Rules */
    hr {
      border: none;
      border-top: 0.75pt dashed #888888;
      margin: 14pt 0;
    }
  `;

  // 10. Assemble the Full Publication-Grade Document
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${subject.code} — ${subject.title}</title>
  <style>
    ${correctedKatexCss}
    ${luxuryPrintCss}
  </style>
</head>
<body>
  <!-- 1. NEOCLASSICAL ARCHITECTURAL COVER PAGE -->
  <div class="sovereign-book-cover-container">
    <div class="cover-top-masthead">
      <div class="cover-masthead-org">MIND OF ARAVALLI ACADEMIC MONOGRAPHS</div>
      <div class="cover-masthead-shelf">SHELF 007 — SOVEREIGN KNOWLEDGE BASTION</div>
    </div>

    <div class="cover-center-body">
      <div class="cover-emblem-medallion">
        <span class="cover-emblem">${subject.emblem}</span>
      </div>
      <div class="cover-title">${subject.title}</div>
      <div class="cover-subtitle">${subject.subtitle}</div>

      <div class="cover-specification-strip">
        ${subject.category} • MASTER STUDY-BOOK EDITION (A4 MONOCHROME)
      </div>

      <div class="cover-grounding-box">
        <div class="cover-grounding-title">Canonical Sources Unified & Authoritative Grounding</div>
        <ul class="cover-grounding-list">
          ${subject.primarySources.map(s => `<li>${s}</li>`).join('\n          ')}
        </ul>
      </div>
    </div>

    <div class="cover-bottom-footer">
      <div class="cover-pledge-badge">${subject.coverPledgeBadge || `Comprehensive Curricular Synthesis • Authoritative Grounding in ${subject.category}`}</div>
      <div class="cover-pledge-sub">Typeset in Classical Book Serif & Clean Sans • Dedicated 20mm Spine Gutter for Permanent Bookbinding</div>
    </div>
  </div>

  <!-- 2. FORMAL COLOPHON & CIP DATA BLOCK PAGE (VERSO) -->
  <div class="colophon-verso-page">
    <div class="colophon-cip-box">
      <div class="colophon-cip-header">Library & Curricular Cataloging-in-Publication Data</div>
      <div class="colophon-cip-content">
        Title: ${subject.title}<br>
        Curricular Identifier: ${subject.code} • Shelf 007 Series<br>
        Synthesis & Authorship: ${subject.authors}<br>
        Scope: ${subject.targetExams.join('; ')}<br>
        Publication Bastion: Mind of Aravalli Academic Press, Rajasthan<br>
        Physical Standard: ISO A4 (210 x 297 mm) Monochrome Laser Edition<br>
        Binding Architecture: 20mm Left Binding Gutter / Duplex Safe
      </div>
    </div>
    <div class="colophon-imprint-text">
      ${subject.colophonNotice ? `<strong>Curricular Scope & Synthesis Notice:</strong> ${subject.colophonNotice.replace(/^Curricular Scope & Synthesis Notice:\s*/, '')}` : `<strong>Curricular Scope & Synthesis Notice:</strong> This volume provides a comprehensive curricular synthesis of ${subject.title} for rigorous study and examination revision across Shelf 007.`}
    </div>
  </div>

  <!-- 3. BOOK BODY CHAPTERS & TOC -->
  ${html}
</body>
</html>`;
}

// Main execution function
export async function buildSubjectBookPdf(
  subject: SubjectBookConfig,
  options: {
    baseNotesDir?: string;
    outDir?: string;
    browserPath?: string;
  } = {}
) {
  const baseNotesDir = options.baseNotesDir || path.resolve('007', 'notes');
  const outDir = options.outDir || path.resolve('007', 'PDF\'s');
  const browserPath = options.browserPath ||
    (fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
      ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
      : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Load KaTeX CSS
  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCssContent = fs.existsSync(katexCssPath)
    ? fs.readFileSync(katexCssPath, 'utf-8')
    : '';

  console.log(`\n======================================================`);
  console.log(`[BOOK #${subject.bookNumber}] BUILDING SOVEREIGN STUDY-BOOK: ${subject.title}`);
  console.log(`Subject Code: ${subject.code} | Slug: ${subject.slug}`);
  console.log(`Output PDF: ${subject.outputPdfName}`);
  console.log(`======================================================`);

  // 1. Collect all markdown files
  const mdFiles = collectSubjectMarkdownFiles(subject, baseNotesDir);
  if (mdFiles.length === 0) {
    console.error(`[ERROR] No markdown files found for subject ${subject.slug}!`);
    return null;
  }

  console.log(`Gathered ${mdFiles.length} source markdown files in sequence.`);

  // 2. Concatenate markdown with clean chapter breaks
  let combinedMd = '';
  for (let i = 0; i < mdFiles.length; i++) {
    const filePath = mdFiles[i];
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Skip the subject's local 00_COVER.md since we render the master sovereign cover page in HTML
    if (path.basename(filePath) === '00_COVER.md') {
      continue;
    }

    combinedMd += `\n\n${fileContent}\n\n`;
  }

  // 3. Transform to Print HTML
  const finalHtml = transformMarkdownToPrintHtml(combinedMd, subject, katexCssContent);
  const htmlOutPath = path.join(outDir, subject.outputPdfName.replace('.pdf', '.html'));
  const pdfOutPath = path.join(outDir, subject.outputPdfName);

  fs.writeFileSync(htmlOutPath, finalHtml, 'utf-8');

  // 4. Render to PDF via headless browser
  console.log(`Compiling PDF via headless browser...`);
  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-pdf-profile-'));
  const htmlFileUrl = 'file:///' + htmlOutPath.replace(/\\/g, '/');
  const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --user-data-dir="${tempProfileDir}" --disable-background-networking --disable-sync --disable-extensions --no-first-run --print-to-pdf="${pdfOutPath}" "${htmlFileUrl}"`;
  
  const startTime = Date.now();
  try {
    execSync(cmd, { stdio: 'inherit' });
    const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);

    try {
      fs.rmSync(tempProfileDir, { recursive: true, force: true });
    } catch (e) {}

    // Clean up intermediate HTML
    if (fs.existsSync(htmlOutPath)) {
      fs.unlinkSync(htmlOutPath);
    }

    // 5. Inspect resulting PDF
    const stats = fs.statSync(pdfOutPath);
    const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`✓ COMPILED: ${subject.outputPdfName}`);
    console.log(`  Size: ${sizeMb} MB | Time: ${elapsedSec}s`);

    // 6. Automated Forensic Typography & Integrity Verification
    const auditRes = await auditPdf(pdfOutPath);
    const totalPages = auditRes ? auditRes.numPages : 0;

    return {
      bookNumber: subject.bookNumber,
      code: subject.code,
      title: subject.title,
      pdfFile: subject.outputPdfName,
      pages: totalPages,
      sizeMb: sizeMb + ' MB',
      duration: elapsedSec + 's',
    };
  } catch (err: any) {
    console.error(`✗ Error generating PDF for ${subject.slug}:`, err.message);
    return null;
  }
}

// CLI runner
async function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes('--all');
  const subjectArg = args.find(a => a.startsWith('--subject='));
  const subjectSlug = subjectArg ? subjectArg.split('=')[1] : null;
  const outDirArg = args.find(a => a.startsWith('--outDir='));
  const rawOutDir = outDirArg ? outDirArg.slice('--outDir='.length).replace(/^["']|["']$/g, '') : null;
  const targetOutDir = rawOutDir ? path.resolve(rawOutDir) : path.resolve('print_output');

  if (args.includes('--list')) {
    console.log('\nAvailable Shelf 007 Subjects:');
    SOVEREIGN_SUBJECT_CATALOG.forEach(s => {
      console.log(` [${s.bookNumber}] ${s.code.padEnd(8)} ${s.slug.padEnd(24)} -> ${s.title}`);
    });
    return;
  }

  if (args.includes('--help') || (!isAll && !subjectSlug)) {
    console.log(`
Usage:
  npx tsx 007/scripts/build_sovereign_books.ts --all                 (Build all subjects)
  npx tsx 007/scripts/build_sovereign_books.ts --subject=<slug>     (Build single subject)
  npx tsx 007/scripts/build_sovereign_books.ts --outDir=<path>      (Custom output directory)
  npx tsx 007/scripts/build_sovereign_books.ts --list               (List all subjects)

Examples:
  npx tsx 007/scripts/build_sovereign_books.ts --subject=iibf_dbf --outDir=print_output
  npx tsx 007/scripts/build_sovereign_books.ts --subject=economics
    `);
    return;
  }

  const manifest: any[] = [];

  if (isAll) {
    console.log(`\n======================================================`);
    console.log(`BUILDING ALL ${SOVEREIGN_SUBJECT_CATALOG.length} SOVEREIGN MASTER STUDY-BOOKS IN BATCH`);
    console.log(`Target Output Directory: ${targetOutDir}`);
    console.log(`======================================================`);

    for (const sub of SOVEREIGN_SUBJECT_CATALOG) {
      const res = await buildSubjectBookPdf(sub, { outDir: targetOutDir });
      if (res) manifest.push(res);
    }
  } else if (subjectSlug) {
    const target = SOVEREIGN_SUBJECT_CATALOG.find(
      s => s.slug === subjectSlug || s.slug.replace('_', '-') === subjectSlug
    );
    if (!target) {
      console.error(`Unknown subject slug: "${subjectSlug}". Use --list to see available subjects.`);
      process.exit(1);
    }
    const res = await buildSubjectBookPdf(target, { outDir: targetOutDir });
    if (res) manifest.push(res);
  }

  if (manifest.length > 0) {
    console.log(`\n======================================================`);
    console.log(`SOVEREIGN STUDY-BOOK COMPILATION COMPLETE!`);
    console.log(`Output Directory: ${targetOutDir}`);
    console.table(manifest);
  }
}

if (process.argv[1] && process.argv[1].includes('build_sovereign_books')) {
  main().catch(console.error);
}
