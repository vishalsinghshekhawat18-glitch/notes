import fs from 'fs';
import path from 'path';

export interface Shelf007SectionItem {
  id: string;
  slug: string;
  title: string;
  order: number;
  body: string;
  wordCount: number;
}

export interface Shelf007ChapterItem {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  filePath: string;
  order: number;
  wordCount: number;
  readingMinutes: number;
  sections: Shelf007SectionItem[];
}

export interface Shelf007PartGroup {
  partNumber?: string;
  groupTitle: string;
  groupSubtitle?: string;
  chapters: Shelf007ChapterItem[];
}

export interface Shelf007SubjectMeta {
  slug: 'economics' | 'iibf-dbf' | 'political-science' | 'history' | 'quantitative-aptitude' | 'general-science' | 'geography';
  name: string;
  badge: string;
  badgeColor: string;
  code: string;
  authors: string;
  description: string;
  totalChapters: number;
  totalWords: number;
  chips: string[];
}

function extractTitleFromMarkdown(content: string, fallback: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  if (match) {
    return match[1].replace(/<[^>]+>/g, '').trim();
  }
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    return h1Match[1].replace(/<[^>]+>/g, '').trim();
  }
  return fallback;
}

function calculateReadingMinutes(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 220));
}

function extractSectionsFromMarkdown(content: string): Shelf007SectionItem[] {
  const lines = content.split('\n');
  const sections: Shelf007SectionItem[] = [];
  let currentTitle = 'Overview & Epistemic Foundations';
  let currentLines: string[] = [];
  let order = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      if (currentLines.length > 0) {
        const body = currentLines.join('\n').trim();
        if (body.length > 0) {
          sections.push({
            id: `sec-${order}`,
            slug: `sec-${order}`,
            title: currentTitle,
            order,
            body,
            wordCount: body.split(/\s+/).filter(Boolean).length,
          });
          order++;
        }
      }
      currentTitle = match[1].replace(/<[^>]+>/g, '').trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  if (currentLines.length > 0) {
    const body = currentLines.join('\n').trim();
    if (body.length > 0) {
      sections.push({
        id: `sec-${order}`,
        slug: `sec-${order}`,
        title: currentTitle,
        order,
        body,
        wordCount: body.split(/\s+/).filter(Boolean).length,
      });
    }
  }

  if (sections.length === 0) {
    sections.push({
      id: 'sec-1',
      slug: 'sec-1',
      title: 'Complete Text',
      order: 1,
      body: content,
      wordCount: content.split(/\s+/).filter(Boolean).length,
    });
  }

  return sections;
}

function extractDescriptionFromMarkdown(content: string, fallback: string): string {
  // Look for blockquotes
  const quoteMatch = content.match(/^>\s+([\s\S]*?)(?=\n\n|\n##|$)/m);
  if (quoteMatch) {
    const clean = quoteMatch[1]
      .replace(/\n>\s*/g, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/[*_`]/g, '')
      .trim();
    if (clean.length > 30) {
      return clean.slice(0, 260) + (clean.length > 260 ? '...' : '');
    }
  }

  // Look for paragraph after Sources Unified or H1
  const pMatch = content.match(/(?:Canonical Sources Unified:[\s\S]*?\n\n|#.*?\n\n)([\s\S]*?)(?=\n\n|\n##|$)/);
  if (pMatch && pMatch[1].trim()) {
    const text = pMatch[1]
      .replace(/<[^>]+>/g, '')
      .replace(/[*_`]/g, '')
      .replace(/\[.*?\]\(.*?\)/g, '')
      .trim();
    if (text.length > 30) {
      return text.slice(0, 260) + (text.length > 260 ? '...' : '');
    }
  }

  return fallback;
}

export function getShelf007Subjects(): Shelf007SubjectMeta[] {
  const econChapters = getEconomicsChapters();
  const dbfChapters = getIibfDbfChapters();
  const psChapters = getPoliticalScienceChapters();

  const econWords = econChapters.reduce((acc, c) => acc + c.wordCount, 0);
  const dbfWords = dbfChapters.reduce((acc, c) => acc + c.wordCount, 0);
  const psWords = psChapters.reduce((acc, c) => acc + c.wordCount, 0);

  return [
    {
      slug: 'economics',
      name: 'Economics & Social Issues Master Treatise (ESI Sovereign Synthesis)',
      badge: '5-Author + ESI Sovereign Synthesis',
      badgeColor: 'text-[#9a3412] bg-[#fff7ed] border-[#ffedd5]',
      code: 'ECO-007',
      authors: 'Ramesh Singh • Vivek Singh • Nitin Singhania • Sanjeev Verma • K. Sankarganesh • CGB Mentors ESI',
      description:
        'Sovereign macroeconomic and social issues architecture covering National Income (2015 SNA), Monetary Transmission, Banking & NPAs, Public Finance, Foreign Trade Policy 2023, Five-Year Plans & NITI Aayog, 4 New Labor Codes (2020), Urbanization & Migration, Multiculturalism, and Capstone Revision Vault.',
      totalChapters: econChapters.length,
      totalWords: econWords,
      chips: [
        'National Income & Monetary Corridor',
        'Foreign Trade Policy 2023 (FTP)',
        'Economic Planning & NITI Aayog (Ch 22)',
        '4 New Labor Codes 2020 (Ch 23)',
        'Urbanization & Migration (Ch 24)',
        'Multiculturalism & Pluralism (Ch 25)',
        'Capstone Revision Vault (Ch 26)',
      ],
    },
    {
      slug: 'iibf-dbf',
      name: 'IIBF Diploma in Banking & Finance (DBF / JAIIB)',
      badge: 'Official Macmillan Courseware',
      badgeColor: 'text-[#1e3a8a] bg-[#eff6ff] border-[#dbeafe]',
      code: 'DBF-007',
      authors: 'Official IIBF Macmillan Courseware (IE&IFS • PPB • AFMB • RBWM)',
      description:
        'Exhaustive 4-paper curriculum covering IE&IFS, PPB, AFMB, and RBWM. Incorporates Banking Laws (Amendment) Act 2025, Ind AS, Basel III ratios, and 5 rapid revision vaults.',
      totalChapters: dbfChapters.length,
      totalWords: dbfWords,
      chips: [
        'Paper 1: IE&IFS (4 Modules)',
        'Paper 2: PPB (4 Modules)',
        'Paper 3: AFMB (4 Modules)',
        'Paper 4: RBWM (4 Modules)',
        '5 Rapid Revision Vaults',
      ],
    },
    {
      slug: 'political-science',
      name: 'Political Science & Constitutional Governance',
      badge: 'Gold Standard Sovereign Synthesis',
      badgeColor: 'text-[#14532d] bg-[#f0fdf4] border-[#bbf7d0]',
      code: 'POL-007',
      authors: 'M. Laxmikanth (8th Edition, 2026) • M. Laxmikanth (Governance in India, 2nd Ed.) • The Constitution of India (Bare Act)',
      description:
        'Sovereign 36-chapter doctoral-depth master treatise covering Constitutional Framework, Federal Dynamics, Central & State Government Machinery, Judiciary & PIL, Constitutional & Statutory Bodies, Field & District Administration, 2nd ARC 15-Report Compendium, Civil Services & Police Reforms, Sectoral Regulators, Social Justice Statutes, Comparative Constitutions, and Capstone Revision Vault.',
      totalChapters: psChapters.length,
      totalWords: psWords,
      chips: [
        'Constitutional Framework & Basic Structure',
        'Parliament & Legislative Procedure',
        'Supreme Court & Judicial Review',
        'Field & District Administration (Ch 31)',
        '2nd ARC 15-Report Compendium (Ch 32)',
        'Civil Services & Police Reforms (Ch 33)',
        'Sectoral Regulatory State (Ch 34)',
        'Social Justice Statutes (Ch 35)',
        'Comparative Constitutions (Ch 36)',
        '50 Deadliest Traps & 1,520 MCQ Question Bank',
      ],
    },
    {
      slug: 'history',
      name: 'History: Ancient, Medieval, Modern, Rajasthan & World Combined',
      badge: 'Unified 5-Dimensional Master Treatise',
      badgeColor: 'text-[#854d0e] bg-[#fefce8] border-[#fef08a]',
      code: 'HIST-007',
      authors: 'Upinder Singh • Satish Chandra • Bipan Chandra • Sekhar Bandyopadhyay • Spectrum • G.N. Sharma • Norman Lowe',
      description:
        'Sovereign 39-chapter doctoral-depth historical synthesis integrating Ancient Civilizations & Epigraphy, Medieval Institutional Dynamics, Modern Freedom Struggle, Comprehensive Rajasthan Dynasties & Heritage (RPSC RAS), World History Revolutions, and Capstone Synchronized Revision Vault.',
      totalChapters: getHistoryChapters().length,
      totalWords: getHistoryChapters().reduce((acc, c) => acc + c.wordCount, 0),
      chips: [
        'Ancient India & Archaeological Edicts',
        'Medieval Institutions & Bhakti/Sufi Synthesis',
        'Modern India & Gandhian Freedom Struggle',
        'Rajasthan Dynasties, 1857 & Integration (RAS)',
        'World Revolutions & Global Transformations',
        'Grand Chronological Sync Vault (Ch 39)',
      ],
    },
    {
      slug: 'quantitative-aptitude',
      name: 'Quantitative Aptitude & Mathematical Logic (Sovereign Treatise)',
      badge: 'Axiomatic & Speed Synthesis',
      badgeColor: 'text-[#1e3a8a] bg-[#eff6ff] border-[#bfdbfe]',
      code: 'QNT-007',
      authors: 'Sarvesh K. Verma (Quantum CAT) • Arun Sharma • R.S. Aggarwal • Rajesh Verma',
      description:
        'Sovereign mathematical logic and problem-solving architecture covering Mental Arithmetic, Base Multiplication, Number Theory & Invariants, Pure Algebra & Master Sign-Table, Commercial Arithmetic, Rates & Motion, Spatial Mensuration, Combinatorics, and Data Interpretation.',
      totalChapters: getQuantitativeAptitudeChapters().length,
      totalWords: getQuantitativeAptitudeChapters().reduce((acc, c) => acc + c.wordCount, 0),
      chips: [
        'Mental Calculation & Vedic Engines',
        'Number Theory & Divisibility Invariants',
        'Algebra & Master Sign-Table Heuristics',
        'Commercial Arithmetic & Cross-Alligation',
        'Time, Work, Rates & Motion Invariants',
        'Combinatorics & Probability',
        'Data Interpretation & Decision Trees',
      ],
    },
    {
      slug: 'general-science',
      name: 'General Science: Physics, Chemistry & Biology Unified',
      badge: 'NCERT Classes 6–12 + Competitive Fusion',
      badgeColor: 'text-[#164e3f] bg-[#eef6f2] border-[#cbe4d7]',
      code: 'SCI-007',
      authors: 'NCERT (Classes 6–12) • Halliday-Resnick • Campbell Biology • Morrison-Boyd',
      description:
        'Sovereign 28-chapter publication-grade science master treatise covering Foundational & Applied Physics (Ch 01–11), Inorganic, Organic & Applied Chemistry (Ch 12–19), Biological Systems, Physiology & Genetics (Ch 20–27), and the Capstone Consolidated Revision Vault (Ch 28).',
      totalChapters: getGeneralScienceChapters().length,
      totalWords: getGeneralScienceChapters().reduce((acc, c) => acc + c.wordCount, 0),
      chips: [
        'Mechanics, Gravitation & Fluids (Part I)',
        'Thermal, Waves, Optics & Modern Physics (Part I)',
        'Atomic Structure, Bonding & Reactions (Part II)',
        'Carbon, Metallurgy & Everyday Chemistry (Part II)',
        'Cell Biology, Biomolecules & Genetics (Part III)',
        'Plant & Human Physiology (Part III)',
        'Health, Immunity & Applied Biotech (Part III)',
        '50 Deadliest Traps & Capstone Vault (Part IV)',
      ],
    },
    {
      slug: 'geography',
      name: 'Geography: India, World & Rajasthan (Physical, Human, Social & Environmental Master Architecture)',
      badge: 'Majid Husain • Shankar IAS • Savindra Singh • Bhalla',
      badgeColor: 'text-[#0f766e] bg-[#f0fdfa] border-[#99f6e4]',
      code: 'GEO-007',
      authors: 'Prof. Majid Husain • Shankar IAS Academy • Dr. Savindra Singh • Dr. L.R. Bhalla • NCERTs',
      description:
        'Sovereign 36-chapter doctoral-depth geographical codex integrating Geomorphology, Climatology, Oceanography, Environmental Ecology, World Regions & Strategic Chokepoints, Indian Morphotectonics & Monsoons, Rajasthan Regional Geography (RPSC RAS), Human Geographic Paradigms, and Capstone Revision Vault.',
      totalChapters: getGeographyChapters().length,
      totalWords: getGeographyChapters().reduce((acc, c) => acc + c.wordCount, 0),
      chips: [
        'Planetary Geomorphology & Plate Tectonics',
        'Climatology, Pressure Belts & Cyclones',
        'Oceanography, Currents & UNCLOS Zones',
        'Environmental Ecology & Climate Accords',
        'World Regions & Strategic Chokepoints',
        'Indian Physiography, Monsoons & Soils',
        'Rajasthan Geography (4 Divisions, IGNP, Minerals - RAS)',
        'Human Geography & Demographic Models',
        'Grand Capstone Revision Vault (Ch 36)',
      ],
    },
  ];
}

export function getGeographyChapters(): Shelf007ChapterItem[] {
  const dir = path.join(process.cwd(), '007', 'notes', 'geography');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

  return files.map((fileName, idx) => {
    const fullPath = path.join(dir, fileName);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    const baseName = fileName.replace(/\.md$/, '');
    let slug = baseName.toLowerCase();
    let category = 'Master Chapter';
    let shortTitle = baseName.replace(/^\d+_/, '').replace(/_/g, ' ');
    let chapterOrder = idx + 1;

    if (fileName.startsWith('00_')) {
      slug = 'cover';
      category = 'Front Matter';
      shortTitle = 'Cover & Master Declaration';
      chapterOrder = 0;
    } else if (fileName.startsWith('01_')) {
      slug = 'table-of-contents';
      category = 'Front Matter';
      shortTitle = 'Master Table of Contents';
      chapterOrder = 0;
    } else if (fileName.includes('CAPSTONE') || fileName.includes('GRAND_SYNTHESIS')) {
      slug = 'chapter-36';
      category = 'Capstone Vault';
      shortTitle = 'Chapter 36: The Grand Synthesis Master Revision Vault';
      chapterOrder = 36;
    } else {
      const chMatch = fileName.match(/CHAPTER_(\d+)/i);
      if (chMatch) {
        const num = parseInt(chMatch[1], 10);
        slug = `chapter-${chMatch[1].padStart(2, '0')}`;
        category = `Chapter ${num}`;
        shortTitle = `Chapter ${num}: ${baseName.replace(/^\d+_CHAPTER_\d+_/, '').replace(/_/g, ' ')}`;
        chapterOrder = num;
      }
    }

    const title = extractTitleFromMarkdown(content, shortTitle);
    const description = extractDescriptionFromMarkdown(
      content,
      `Comprehensive sovereign synthesis of physical, human, regional and environmental geography, causal models, and high-yield examination matrices.`
    );
    const sections = extractSectionsFromMarkdown(content);

    return {
      slug,
      title,
      shortTitle,
      category,
      description,
      filePath: fullPath,
      order: chapterOrder,
      wordCount,
      readingMinutes: calculateReadingMinutes(wordCount),
      sections,
    };
  });
}

export function getGeneralScienceChapters(): Shelf007ChapterItem[] {
  const dir = path.join(process.cwd(), '007', 'notes', 'general_science');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

  return files.map((fileName, idx) => {
    const fullPath = path.join(dir, fileName);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    const baseName = fileName.replace(/\.md$/, '');
    let slug = baseName.toLowerCase();
    let category = 'Master Chapter';
    let shortTitle = baseName.replace(/^\d+_/, '').replace(/_/g, ' ');
    let chapterOrder = idx + 1;

    if (fileName.startsWith('00_')) {
      slug = 'cover';
      category = 'Front Matter';
      shortTitle = 'Cover & Master Declaration';
      chapterOrder = 0;
    } else if (fileName.startsWith('01_')) {
      slug = 'table-of-contents';
      category = 'Front Matter';
      shortTitle = 'Master Table of Contents';
      chapterOrder = 0;
    } else if (fileName.includes('CAPSTONE') || fileName.includes('CONSOLIDATED_REVISION_VAULT')) {
      slug = 'chapter-28';
      category = 'Capstone Vault';
      shortTitle = 'Chapter 28: Capstone Master Consolidated Revision Vault';
      chapterOrder = 28;
    } else {
      const chMatch = fileName.match(/CHAPTER_(\d+)/i);
      if (chMatch) {
        const num = parseInt(chMatch[1], 10);
        slug = `chapter-${chMatch[1].padStart(2, '0')}`;
        category = `Chapter ${num}`;
        shortTitle = `Chapter ${num}: ${baseName.replace(/^\d+_CHAPTER_\d+_/, '').replace(/_/g, ' ')}`;
        chapterOrder = num;
      }
    }

    const title = extractTitleFromMarkdown(content, shortTitle);
    const description = extractDescriptionFromMarkdown(
      content,
      `Comprehensive sovereign synthesis of first-principles scientific concepts, mathematical laws, comparative matrices, and high-yield examination trap avoidance.`
    );
    const sections = extractSectionsFromMarkdown(content);

    return {
      slug,
      title,
      shortTitle,
      category,
      description,
      filePath: fullPath,
      order: chapterOrder,
      wordCount,
      readingMinutes: calculateReadingMinutes(wordCount),
      sections,
    };
  });
}

export function getQuantitativeAptitudeChapters(): Shelf007ChapterItem[] {
  const dir = path.join(process.cwd(), '007', 'notes', 'quantitative_aptitude');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

  return files.map((fileName, idx) => {
    const fullPath = path.join(dir, fileName);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    const baseName = fileName.replace(/\.md$/, '');
    let slug = baseName.toLowerCase();
    let category = 'Master Chapter';
    let shortTitle = baseName.replace(/^\d+_/, '').replace(/_/g, ' ');
    let chapterOrder = idx + 1;

    if (fileName.startsWith('00_')) {
      slug = 'cover';
      category = 'Front Matter';
      shortTitle = 'Cover & Master Declaration';
      chapterOrder = 0;
    } else if (fileName.startsWith('01_')) {
      slug = 'table-of-contents';
      category = 'Front Matter';
      shortTitle = 'Master Table of Contents';
      chapterOrder = 0;
    } else if (fileName.includes('CAPSTONE') || fileName.includes('GRAND_SYNTHESIS') || fileName.includes('TRAP_VAULT')) {
      slug = 'chapter-27';
      category = 'Capstone Vault';
      shortTitle = 'Chapter 27: The Grand Synthesis Master Revision & Trap Vault';
      chapterOrder = 27;
    } else {
      const chMatch = fileName.match(/CHAPTER_(\d+)/i);
      if (chMatch) {
        const num = parseInt(chMatch[1], 10);
        slug = `chapter-${chMatch[1].padStart(2, '0')}`;
        category = `Chapter ${num}`;
        shortTitle = `Chapter ${num}: ${baseName.replace(/^\d+_CHAPTER_\d+_/, '').replace(/_/g, ' ')}`;
        chapterOrder = num;
      }
    }

    const title = extractTitleFromMarkdown(content, shortTitle);
    const description = extractDescriptionFromMarkdown(
      content,
      `Comprehensive sovereign synthesis of first-principles mathematical derivations, dual-speed problem heuristics, and high-yield examination trap avoidance.`
    );
    const sections = extractSectionsFromMarkdown(content);

    return {
      slug,
      title,
      shortTitle,
      category,
      description,
      filePath: fullPath,
      order: chapterOrder,
      wordCount,
      readingMinutes: calculateReadingMinutes(wordCount),
      sections,
    };
  });
}

export function getHistoryChapters(): Shelf007ChapterItem[] {
  const dir = path.join(process.cwd(), '007', 'notes', 'history');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

  return files.map((fileName, idx) => {
    const fullPath = path.join(dir, fileName);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    const baseName = fileName.replace(/\.md$/, '');
    let slug = baseName.toLowerCase();
    let category = 'Master Chapter';
    let shortTitle = baseName.replace(/^\d+_/, '').replace(/_/g, ' ');
    let chapterOrder = idx + 1;

    if (fileName.startsWith('00_')) {
      slug = 'cover';
      category = 'Front Matter';
      shortTitle = 'Cover & Master Declaration';
      chapterOrder = 0;
    } else if (fileName.startsWith('01_')) {
      slug = 'table-of-contents';
      category = 'Front Matter';
      shortTitle = 'Master Table of Contents';
      chapterOrder = 0;
    } else if (fileName.includes('CAPSTONE') || fileName.includes('GRAND_SYNTHESIS')) {
      slug = 'chapter-39';
      category = 'Capstone Vault';
      shortTitle = 'Chapter 39: The Grand Synthesis Master Revision Vault';
      chapterOrder = 39;
    } else {
      const chMatch = fileName.match(/CHAPTER_(\d+)/i);
      if (chMatch) {
        const num = parseInt(chMatch[1], 10);
        slug = `chapter-${chMatch[1].padStart(2, '0')}`;
        category = `Chapter ${num}`;
        shortTitle = `Chapter ${num}: ${baseName.replace(/^\d+_CHAPTER_\d+_/, '').replace(/_/g, ' ')}`;
        chapterOrder = num;
      }
    }

    const title = extractTitleFromMarkdown(content, shortTitle);
    const description = extractDescriptionFromMarkdown(
      content,
      `Comprehensive sovereign synthesis of historical epochs, primary inscriptional evidence, socio-economic transitions, and high-yield examination matrices.`
    );
    const sections = extractSectionsFromMarkdown(content);

    return {
      slug,
      title,
      shortTitle,
      category,
      description,
      filePath: fullPath,
      order: chapterOrder,
      wordCount,
      readingMinutes: calculateReadingMinutes(wordCount),
      sections,
    };
  });
}

export function getPoliticalScienceChapters(): Shelf007ChapterItem[] {
  const dir = path.join(process.cwd(), '007', 'notes', 'political_science');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

  return files.map((fileName, idx) => {
    const fullPath = path.join(dir, fileName);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    const baseName = fileName.replace(/\.md$/, '');
    let slug = baseName.toLowerCase();
    let category = 'Master Chapter';
    let shortTitle = baseName.replace(/^\d+_/, '').replace(/_/g, ' ');
    let chapterOrder = idx + 1;

    if (fileName.startsWith('00_')) {
      slug = 'cover';
      category = 'Front Matter';
      shortTitle = 'Cover & Master Declaration';
      chapterOrder = 0;
    } else if (fileName.startsWith('01_')) {
      slug = 'table-of-contents';
      category = 'Front Matter';
      shortTitle = 'Master Table of Contents';
      chapterOrder = 0;
    } else if (fileName.includes('CAPSTONE')) {
      slug = 'chapter-30';
      category = 'Capstone Vault';
      shortTitle = 'Chapter 30: The Grand Synthesis Master Revision Vault';
      chapterOrder = 30;
    } else {
      const chMatch = fileName.match(/CHAPTER_(\d+)/i);
      if (chMatch) {
        const num = parseInt(chMatch[1], 10);
        slug = `chapter-${chMatch[1].padStart(2, '0')}`;
        category = `Chapter ${num}`;
        shortTitle = `Chapter ${num}: ${baseName.replace(/^\d+_CHAPTER_\d+_/, '').replace(/_/g, ' ')}`;
        chapterOrder = num;
      }
    }

    const title = extractTitleFromMarkdown(content, shortTitle);
    const description = extractDescriptionFromMarkdown(
      content,
      `Comprehensive sovereign synthesis of constitutional doctrines, bare act clauses, judicial precedents, and high-yield examination matrices.`
    );
    const sections = extractSectionsFromMarkdown(content);

    return {
      slug,
      title,
      shortTitle,
      category,
      description,
      filePath: fullPath,
      order: chapterOrder,
      wordCount,
      readingMinutes: calculateReadingMinutes(wordCount),
      sections,
    };
  });
}

export function getEconomicsChapters(): Shelf007ChapterItem[] {
  const dir = path.join(process.cwd(), '007', 'notes', 'economics');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

  return files.map((fileName, idx) => {
    const fullPath = path.join(dir, fileName);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    const baseName = fileName.replace(/\.md$/, '');
    let slug = baseName.toLowerCase();
    let category = 'Master Chapter';
    let shortTitle = baseName.replace(/^\d+_/, '').replace(/_/g, ' ');
    let chapterOrder = idx + 1;

    if (fileName.startsWith('00_')) {
      slug = 'cover';
      category = 'Front Matter';
      shortTitle = 'Cover & Master Declaration';
      chapterOrder = 0;
    } else if (fileName.startsWith('01_')) {
      slug = 'table-of-contents';
      category = 'Front Matter';
      shortTitle = 'Master Table of Contents';
      chapterOrder = 0;
    } else if (fileName.includes('REVISION_VAULT')) {
      slug = 'master-revision-vault';
      category = 'Capstone Vault';
      shortTitle = 'Chapter 26: The Grand Synthesis Master Revision Vault';
      chapterOrder = 26;
    } else {
      const chMatch = fileName.match(/CHAPTER_(\d+)/i);
      if (chMatch) {
        const num = parseInt(chMatch[1], 10);
        slug = `chapter-${chMatch[1].padStart(2, '0')}`;
        category = `Chapter ${num}`;
        shortTitle = `Chapter ${num}: ${baseName.replace(/^\d+_CHAPTER_\d+_/, '').replace(/_/g, ' ')}`;
        chapterOrder = num;
      }
    }

    const title = extractTitleFromMarkdown(content, shortTitle);
    const description = extractDescriptionFromMarkdown(
      content,
      `Comprehensive sovereign synthesis of canonical doctrines, models, examination overlays, and high-yield matrices.`
    );
    const sections = extractSectionsFromMarkdown(content);

    return {
      slug,
      title,
      shortTitle,
      category,
      description,
      filePath: fullPath,
      order: chapterOrder,
      wordCount,
      readingMinutes: calculateReadingMinutes(wordCount),
      sections,
    };
  });
}

export function getIibfDbfChapters(): Shelf007ChapterItem[] {
  const notesDir = path.join(process.cwd(), '007', 'notes', 'iibf_dbf');
  const revDir = path.join(process.cwd(), '007', 'revision', 'iibf_dbf');
  const items: Shelf007ChapterItem[] = [];
  let order = 1;

  if (fs.existsSync(notesDir)) {
    // 1. Root files (Cover, Syllabus)
    const rootFiles = fs.readdirSync(notesDir).filter((f) => f.endsWith('.md')).sort();
    for (const f of rootFiles) {
      const fullPath = path.join(notesDir, f);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const wordCount = content.split(/\s+/).filter(Boolean).length;
      const slug = f.startsWith('00_') ? 'cover' : 'syllabus-blueprint';
      const category = 'Curriculum Blueprint';
      const shortTitle = f.startsWith('00_') ? 'Cover & Master Certification' : 'Complete 4-Paper Blueprint';
      const title = extractTitleFromMarkdown(content, shortTitle);
      const description = extractDescriptionFromMarkdown(
        content,
        'Official IIBF diploma courseware schema, syllabus breakdowns, and exam preparation methodology.'
      );
      const sections = extractSectionsFromMarkdown(content);

      items.push({
        slug,
        title,
        shortTitle,
        category,
        description,
        filePath: fullPath,
        order: order++,
        wordCount,
        readingMinutes: calculateReadingMinutes(wordCount),
        sections,
      });
    }

    // 2. Paper Folders (Paper 1 to 4)
    const subDirs = fs.readdirSync(notesDir, { withFileTypes: true }).filter((d) => d.isDirectory()).sort();
    for (const d of subDirs) {
      const paperPath = path.join(notesDir, d.name);
      const paperFiles = fs.readdirSync(paperPath).filter((f) => f.endsWith('.md')).sort();
      const paperName = d.name.replace(/^\d+_/, '').replace(/_/g, ' ');

      for (const f of paperFiles) {
        const fullPath = path.join(paperPath, f);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const wordCount = content.split(/\s+/).filter(Boolean).length;
        const modSlug = `${d.name.toLowerCase()}-${f.replace(/\.md$/, '').toLowerCase()}`;
        const shortTitle = `${paperName} · ${f.replace(/^\d+_/, '').replace(/\.md$/, '').replace(/_/g, ' ')}`;
        const title = extractTitleFromMarkdown(content, shortTitle);
        const description = extractDescriptionFromMarkdown(
          content,
          `Official IIBF Macmillan curriculum module covering foundational concepts, operational rules, and banking frameworks.`
        );
        const sections = extractSectionsFromMarkdown(content);

        items.push({
          slug: modSlug,
          title,
          shortTitle,
          category: paperName,
          description,
          filePath: fullPath,
          order: order++,
          wordCount,
          readingMinutes: calculateReadingMinutes(wordCount),
          sections,
        });
      }
    }
  }

  // 3. Revision Vaults
  if (fs.existsSync(revDir)) {
    const revFiles = fs.readdirSync(revDir).filter((f) => f.endsWith('.md')).sort();
    for (const f of revFiles) {
      const fullPath = path.join(revDir, f);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const wordCount = content.split(/\s+/).filter(Boolean).length;
      const slug = `revision-${f.replace(/\.md$/, '').toLowerCase()}`;
      const shortTitle = `Rapid Revision: ${f.replace(/^\d+_/, '').replace(/\.md$/, '').replace(/_/g, ' ')}`;
      const title = extractTitleFromMarkdown(content, shortTitle);
      const description = extractDescriptionFromMarkdown(
        content,
        'High-speed numerical formulas, legal time limits, statutory sections, and rapid revision recall sheet.'
      );
      const sections = extractSectionsFromMarkdown(content);

      items.push({
        slug,
        title,
        shortTitle,
        category: 'Rapid Revision Vault',
        description,
        filePath: fullPath,
        order: order++,
        wordCount,
        readingMinutes: calculateReadingMinutes(wordCount),
        sections,
      });
    }
  }

  return items;
}

export function getShelf007PartGroups(
  subject: 'economics' | 'iibf-dbf' | 'political-science' | 'history' | 'quantitative-aptitude' | 'general-science' | 'geography'
): Shelf007PartGroup[] {
  if (subject === 'economics') {
    const allChapters = getEconomicsChapters();
    const chapterMap = new Map(allChapters.map((c) => [c.slug, c]));

    const groups: Array<{
      partNumber: string;
      groupTitle: string;
      groupSubtitle: string;
      slugs: string[];
    }> = [
      {
        partNumber: 'FRONT MATTER',
        groupTitle: 'Curriculum Blueprint & Sovereign Synthesis Architecture',
        groupSubtitle: 'Orientation, multi-author integration ledger, and master structural index',
        slugs: ['cover', 'table-of-contents'],
      },
      {
        partNumber: 'PART I',
        groupTitle: 'Foundations of Macroeconomics & National Income Accounting',
        groupSubtitle: 'Scarcity, economic organization, sectors, goods typology, GDP metrics, and 2015 NSO SNA base revision',
        slugs: ['chapter-01', 'chapter-02', 'chapter-03'],
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Monetary Architecture, Inflation Dynamics & RBI Policy Corridor',
        groupSubtitle: 'Money aggregates, RBI governance, flexible inflation targeting, policy transmission, and price indices (CPI/WPI)',
        slugs: ['chapter-04', 'chapter-05', 'chapter-06', 'chapter-13'],
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Commercial Banking Architecture, Stressed Assets & Financial Markets',
        groupSubtitle: 'Basel III capital adequacy, NPAs, IBC 2016, Bad Banks, money markets, and government securities (G-Secs)',
        slugs: ['chapter-07', 'chapter-08', 'chapter-09'],
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Public Finance, Taxation Architecture, GST & Fiscal Federalism',
        groupSubtitle: 'Union budget, deficit metrics, FRBM Act, direct & indirect taxation, GST Council, and 16th Finance Commission',
        slugs: ['chapter-10', 'chapter-11', 'chapter-12'],
      },
      {
        partNumber: 'PART V',
        groupTitle: 'Demographic Dynamics, Employment, Poverty & Human Development',
        groupSubtitle: 'Periodic Labour Force Survey (PLFS), unemployment typologies, Tendulkar/Rangarajan methodology, and MPI',
        slugs: ['chapter-14', 'chapter-15'],
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'External Sector, Balance of Payments & Global Institutions',
        groupSubtitle: 'Current and capital account dynamics, forex reserves, NEER/REER, rupee convertibility, IMF, and WTO agreements',
        slugs: ['chapter-16', 'chapter-17', 'chapter-18'],
      },
      {
        partNumber: 'PART VII',
        groupTitle: 'Agrarian Architecture, Land Reforms & Food Processing',
        groupSubtitle: 'Agricultural capital formation, Minimum Support Price (MSP), PM-KISAN, and Food Processing Industries (FPI)',
        slugs: ['chapter-19'],
      },
      {
        partNumber: 'PART VIII',
        groupTitle: 'Industrial Strategy, Infrastructure, Logistics & Energy Transition',
        groupSubtitle: 'Manufacturing architecture, MSME classification, PLI schemes, National Monetisation Pipeline, and green energy',
        slugs: ['chapter-20', 'chapter-21'],
      },
      {
        partNumber: 'PART IX',
        groupTitle: 'Economic Planning, Labor Architecture & Social Issues (ESI)',
        groupSubtitle: 'Planning history, NITI Aayog, 4 Labor Codes (2020), Urbanization, Internal Migration, and Multiculturalism',
        slugs: ['chapter-22', 'chapter-23', 'chapter-24', 'chapter-25'],
      },
      {
        partNumber: 'PART X',
        groupTitle: 'Capstone Sovereign Synthesis & High-Yield Matrices',
        groupSubtitle: 'All-inclusive multidimensional revision vault, formulas, comparative matrices, and rapid examination recall across all 25 chapters',
        slugs: ['master-revision-vault'],
      },
    ];

    return groups.map((g) => ({
      partNumber: g.partNumber,
      groupTitle: g.groupTitle,
      groupSubtitle: g.groupSubtitle,
      chapters: g.slugs
        .map((slug) => chapterMap.get(slug))
        .filter((c): c is Shelf007ChapterItem => c !== undefined),
    }));
  }

  if (subject === 'political-science') {
    const allChapters = getPoliticalScienceChapters();
    const chapterMap = new Map(allChapters.map((c) => [c.slug, c]));

    const groups: Array<{
      partNumber: string;
      groupTitle: string;
      groupSubtitle: string;
      slugs: string[];
    }> = [
      {
        partNumber: 'FRONT MATTER',
        groupTitle: 'Curriculum Blueprint & Sovereign Synthesis Architecture',
        groupSubtitle: 'Orientation, gold-standard treatise foundation, and 30-chapter master curriculum blueprint',
        slugs: ['cover', 'table-of-contents'],
      },
      {
        partNumber: 'PART I',
        groupTitle: 'Constitutional Framework & Philosophy',
        groupSubtitle: 'Historical underpinnings, constituent assembly, salient features, preamble, citizenship, fundamental rights, DPSP, and basic structure doctrine',
        slugs: ['chapter-01', 'chapter-02', 'chapter-03', 'chapter-04', 'chapter-05', 'chapter-06'],
      },
      {
        partNumber: 'PART II',
        groupTitle: 'System of Government & Federal Dynamics',
        groupSubtitle: 'Parliamentary vs presidential models, centre-state legislative/administrative/financial relations, inter-state councils, and emergency provisions',
        slugs: ['chapter-07', 'chapter-08', 'chapter-09', 'chapter-10'],
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Central Government Machinery',
        groupSubtitle: 'President of India, Vice-President, Prime Minister, Union Council of Ministers, Cabinet Committees, and Parliament of India legislative procedure',
        slugs: ['chapter-11', 'chapter-12', 'chapter-13'],
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'State Executive, State Legislature & Local Governance',
        groupSubtitle: 'Governor, Chief Minister, State Legislature bicameral dynamics, 73rd Amendment Panchayati Raj, PESA 1996, and 74th Amendment Urban Local Bodies',
        slugs: ['chapter-14', 'chapter-15', 'chapter-16', 'chapter-17'],
      },
      {
        partNumber: 'PART V',
        groupTitle: 'Judicial Architecture & Rights Jurisprudence',
        groupSubtitle: 'Supreme Court collegium & jurisdictions, High Courts, Subordinate Courts, ADR / Lok Adalats, and Judicial Activism & PIL doctrine',
        slugs: ['chapter-18', 'chapter-19', 'chapter-20'],
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'Constitutional, Statutory & Regulatory Bodies',
        groupSubtitle: 'ECI, CAG, UPSC/SPSC, Finance Commission, GST Council, NITI Aayog, NHRC, CIC, CVC, Lokpal, CBI, NIA, and Tribunals (CAT/NGT)',
        slugs: ['chapter-21', 'chapter-22', 'chapter-23'],
      },
      {
        partNumber: 'PART VII',
        groupTitle: 'Political Dynamics, Elections & Governance Mechanisms',
        groupSubtitle: 'Electoral systems, RPA 1950/1951, Anti-Defection 10th Schedule, Pressure Groups, FCRA 2020, RTI Act 2005, and Good Governance dynamics',
        slugs: ['chapter-24', 'chapter-25', 'chapter-26', 'chapter-27'],
      },
      {
        partNumber: 'PART VIII',
        groupTitle: 'Political Theory & Comparative Governance',
        groupSubtitle: 'Theories of liberty (Mill, Berlin), equality (Dworkin, Sen), justice (Rawls, Nozick), rights, sovereignty (Austin vs Laski), and major political ideologies',
        slugs: ['chapter-28', 'chapter-29'],
      },
      {
        partNumber: 'PART IX',
        groupTitle: 'The Capstone: Master Consolidated Revision & Grand Synthesis Vault',
        groupSubtitle: 'Master article topography, 12 schedules, major amendments, majority formulas, 35 landmark cases, 50 deadliest traps, and 100-question active recall diagnostic',
        slugs: ['chapter-30'],
      },
      {
        partNumber: 'PART X',
        groupTitle: 'Public Administration, Governance & Institutional Architecture',
        groupSubtitle: 'Field & district administration, 2nd ARC 15-report master compendium, civil services & police reforms, modern sectoral regulatory state, social justice enactments, and comparative constitutions',
        slugs: ['chapter-31', 'chapter-32', 'chapter-33', 'chapter-34', 'chapter-35', 'chapter-36'],
      },
    ];

    return groups.map((g) => ({
      partNumber: g.partNumber,
      groupTitle: g.groupTitle,
      groupSubtitle: g.groupSubtitle,
      chapters: g.slugs
        .map((slug) => chapterMap.get(slug))
        .filter((c): c is Shelf007ChapterItem => c !== undefined),
    }));
  }

  if (subject === 'history') {
    const allChapters = getHistoryChapters();
    const chapterMap = new Map(allChapters.map((c) => [c.slug, c]));

    const groups: Array<{
      partNumber: string;
      groupTitle: string;
      groupSubtitle: string;
      slugs: string[];
    }> = [
      {
        partNumber: 'FRONT MATTER',
        groupTitle: 'Curriculum Blueprint & Sovereign Synthesis Architecture',
        groupSubtitle: 'Orientation, multi-author canonical fusion, and 39-chapter master curriculum blueprint',
        slugs: ['cover', 'table-of-contents'],
      },
      {
        partNumber: 'PART I',
        groupTitle: 'Ancient Indian Civilizations & Cultural Foundations',
        groupSubtitle: 'Pre-history, Indus Valley Civilization, Vedic transitions, heterodox movements (Buddhism/Jainism), Mauryan statecraft, Post-Mauryan trade, Guptas, and South Indian antiquity',
        slugs: ['chapter-01', 'chapter-02', 'chapter-03', 'chapter-04', 'chapter-05', 'chapter-06', 'chapter-07'],
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Medieval India & Institutional Synthesis',
        groupSubtitle: 'Tripartite struggle, Delhi Sultanate market/iqta systems, Vijayanagara Nayankara administration, Bhakti/Sufi movements, Mughal Empire, and 18th-century Maratha transition',
        slugs: ['chapter-08', 'chapter-09', 'chapter-10', 'chapter-11', 'chapter-12', 'chapter-13', 'chapter-14'],
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Modern India & The Freedom Struggle',
        groupSubtitle: 'Colonial expansion, drain of wealth, 1857 revolt, socio-religious reforms, early nationalist emergence, Gandhian mass movements, revolutionary currents, and 1947 independence',
        slugs: ['chapter-15', 'chapter-16', 'chapter-17', 'chapter-18', 'chapter-19', 'chapter-20', 'chapter-21', 'chapter-22', 'chapter-23'],
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Rajasthan History, Dynasties & Heritage (RPSC RAS Master Lens)',
        groupSubtitle: 'Ancient sites (Kalibangan/Ahar), Mewar/Marwar/Amber dynasties, 1857 in Rajasthan, peasant/tribal movements (Bijolia/Eki), Prajamandals, 7-stage integration, and hill forts',
        slugs: ['chapter-24', 'chapter-25', 'chapter-26', 'chapter-27', 'chapter-28', 'chapter-29', 'chapter-30'],
      },
      {
        partNumber: 'PART V',
        groupTitle: 'World History & Global Transformations (UPSC Mains GS-1 Lens)',
        groupSubtitle: 'Renaissance, Atlantic revolutions (American/French), Industrial Revolution, Italian/German unification, imperialism, World War I, Russian Revolution, Fascism/Nazism, and WWII',
        slugs: ['chapter-31', 'chapter-32', 'chapter-33', 'chapter-34', 'chapter-35', 'chapter-36', 'chapter-37', 'chapter-38'],
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'Capstone Grand Synthesis & Master Revision Vault',
        groupSubtitle: 'Global, Pan-Indian & Rajasthan synchronized timelines, 60-second retrieval skeletons, master distinction matrices, top 50 deadly traps, and diagnostic active recall bank',
        slugs: ['chapter-39'],
      },
    ];

    const matchedSlugs = new Set(groups.flatMap((g) => g.slugs));
    const unmapped = allChapters.filter((c) => !matchedSlugs.has(c.slug));

    const result = groups.map((g) => ({
      partNumber: g.partNumber,
      groupTitle: g.groupTitle,
      groupSubtitle: g.groupSubtitle,
      chapters: g.slugs
        .map((slug) => chapterMap.get(slug))
        .filter((c): c is Shelf007ChapterItem => c !== undefined),
    }));

    if (unmapped.length > 0) {
      result.push({
        partNumber: 'STAGED',
        groupTitle: 'Staged Chapters',
        groupSubtitle: 'Additional staged chapters in synthesis pipeline',
        chapters: unmapped,
      });
    }

    return result;
  }

  if (subject === 'quantitative-aptitude') {
    const allChapters = getQuantitativeAptitudeChapters();
    const chapterMap = new Map(allChapters.map((c) => [c.slug, c]));

    const groups: Array<{
      partNumber: string;
      groupTitle: string;
      groupSubtitle: string;
      slugs: string[];
    }> = [
      {
        partNumber: 'FRONT MATTER',
        groupTitle: 'Curriculum Blueprint & Sovereign Synthesis Architecture',
        groupSubtitle: 'Orientation, axiomatic math manifesto, and 27-chapter master curriculum blueprint',
        slugs: ['cover', 'table-of-contents'],
      },
      {
        partNumber: 'PART I',
        groupTitle: 'Mental Calculation, Speed Engines & Number Sense',
        groupSubtitle: 'Mental arithmetic foundations, base multiplication, Vedic engines, fraction-percentage tables, indices, and square/cube roots',
        slugs: ['chapter-01', 'chapter-02', 'chapter-03'],
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Number Theory & Arithmetic Invariants',
        groupSubtitle: 'Divisibility invariants, prime factorization, factor sums, totient theory, HCF-LCM arithmetic models, remainder theorems, and trailing zeros',
        slugs: ['chapter-04', 'chapter-05', 'chapter-06'],
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Algebraic Architecture & Equations',
        groupSubtitle: 'Algebraic identities, symmetric polynomials, 2-variable linear systems, quadratic equations, discriminant nature of roots, and Master Sign Table',
        slugs: ['chapter-07', 'chapter-08', 'chapter-09'],
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Commercial Arithmetic: Ratios, Percentages & Proportionality',
        groupSubtitle: 'Base shifts, net percentage changes, ratio compounding, partnership capital-time models, weighted averages, and age progression',
        slugs: ['chapter-10', 'chapter-11', 'chapter-12'],
      },
      {
        partNumber: 'PART V',
        groupTitle: 'Commercial Arithmetic: Financial Dynamics & Mixtures',
        groupSubtitle: 'CP/SP/MP, discounts, dishonest dealer mechanics, Simple & Compound Interest, compounding intervals, CI-SI differences, and cross-alligation',
        slugs: ['chapter-13', 'chapter-14', 'chapter-15', 'chapter-16'],
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'Work, Motion & Physical Rates',
        groupSubtitle: 'Time & Work LCM unitary models, alternate day cycles, pipes & cisterns negative cycles, relative speed, trains, boats, escalators, and circular tracks',
        slugs: ['chapter-17', 'chapter-18', 'chapter-19', 'chapter-20'],
      },
      {
        partNumber: 'PART VII',
        groupTitle: 'Geometry & Spatial Mensuration',
        groupSubtitle: '2D plane figures, incircles/circumcircles, pathways, 3D solids, melting/recasting volume invariants, frustums, and percentage scaling multipliers',
        slugs: ['chapter-21', 'chapter-22'],
      },
      {
        partNumber: 'PART VIII',
        groupTitle: 'Modern Mathematics & Combinatorics',
        groupSubtitle: 'Permutations, combinations, circular arrangements, tie methods, classical/conditional probability, and Bayes Theorem heuristics',
        slugs: ['chapter-23', 'chapter-24'],
      },
      {
        partNumber: 'PART IX',
        groupTitle: 'Data Interpretation & Decision Logic',
        groupSubtitle: 'Tabular, line, bar, pie, radar/funnel charts, caselet Venn diagrams, 2-statement Data Sufficiency decision trees, and Quantity Comparisons (Q1 vs Q2 vs Q3)',
        slugs: ['chapter-25', 'chapter-26'],
      },
      {
        partNumber: 'PART X',
        groupTitle: 'The Capstone: Master Consolidated Revision & Trap Vault',
        groupSubtitle: 'All-chapter 60-second formula retrieval skeletons, Grand Master Distinction Matrices, The 50 Deadliest Traps in Aptitude, and diagnostic drills',
        slugs: ['chapter-27'],
      },
    ];

    const matchedSlugs = new Set(groups.flatMap((g) => g.slugs));
    const unmapped = allChapters.filter((c) => !matchedSlugs.has(c.slug));

    const result = groups.map((g) => ({
      partNumber: g.partNumber,
      groupTitle: g.groupTitle,
      groupSubtitle: g.groupSubtitle,
      chapters: g.slugs
        .map((slug) => chapterMap.get(slug))
        .filter((c): c is Shelf007ChapterItem => c !== undefined),
    }));

    if (unmapped.length > 0) {
      result.push({
        partNumber: 'STAGED',
        groupTitle: 'Staged Chapters',
        groupSubtitle: 'Additional staged chapters in synthesis pipeline',
        chapters: unmapped,
      });
    }

    return result;
  }

  if (subject === 'general-science') {
    const allChapters = getGeneralScienceChapters();
    const chapterMap = new Map(allChapters.map((c) => [c.slug, c]));

    const groups: Array<{
      partNumber: string;
      groupTitle: string;
      groupSubtitle: string;
      slugs: string[];
    }> = [
      {
        partNumber: 'FRONT MATTER',
        groupTitle: 'Corpus Architecture & Epistemic Pledge',
        groupSubtitle: 'Sovereign front cover, academic declaration, and 4-Part 28-Chapter curriculum syllabus mapping',
        slugs: ['cover', 'table-of-contents'],
      },
      {
        partNumber: 'PART I',
        groupTitle: 'Foundational & Applied Physics',
        groupSubtitle: 'Measurements, kinematics, gravitation, fluid mechanics, thermodynamics, acoustics, optics, electromagnetism, and modern semiconductor physics',
        slugs: [
          'chapter-01', 'chapter-02', 'chapter-03', 'chapter-04', 'chapter-05',
          'chapter-06', 'chapter-07', 'chapter-08', 'chapter-09', 'chapter-10', 'chapter-11'
        ],
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Inorganic, Organic & Applied Chemistry',
        groupSubtitle: 'Matter & colloids, atomic structure, periodic trends, chemical bonding, reactions & redox, acids/bases/salts, metallurgy & carbon allotropes',
        slugs: [
          'chapter-12', 'chapter-13', 'chapter-14', 'chapter-15', 'chapter-16',
          'chapter-17', 'chapter-18', 'chapter-19'
        ],
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Biological Systems, Physiology & Life Sciences',
        groupSubtitle: 'Cytology, cell division, biomolecules, classification & microorganisms, plant physiology, human organ systems, genetics, and immunology',
        slugs: [
          'chapter-20', 'chapter-21', 'chapter-22', 'chapter-23', 'chapter-24',
          'chapter-25', 'chapter-26', 'chapter-27'
        ],
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Capstone Master Consolidated Revision Vault',
        groupSubtitle: '60-second retrieval skeletons (Ch 01–27), Grand Cross-Domain Distinction Matrix, 50 Deadliest Test-Maker Traps, and Active-Recall Bank',
        slugs: ['chapter-28'],
      },
    ];

    const matchedSlugs = new Set(groups.flatMap((g) => g.slugs));
    const unmapped = allChapters.filter((c) => !matchedSlugs.has(c.slug));

    const result = groups.map((g) => ({
      partNumber: g.partNumber,
      groupTitle: g.groupTitle,
      groupSubtitle: g.groupSubtitle,
      chapters: g.slugs
        .map((slug) => chapterMap.get(slug))
        .filter((c): c is Shelf007ChapterItem => c !== undefined),
    }));

    if (unmapped.length > 0) {
      result.push({
        partNumber: 'STAGED',
        groupTitle: 'Staged Chapters',
        groupSubtitle: 'Additional staged chapters in synthesis pipeline',
        chapters: unmapped,
      });
    }

    return result;
  }

  if (subject === 'geography') {
    const allChapters = getGeographyChapters();
    const chapterMap = new Map(allChapters.map((c) => [c.slug, c]));

    const groups: Array<{
      partNumber: string;
      groupTitle: string;
      groupSubtitle: string;
      slugs: string[];
    }> = [
      {
        partNumber: 'FRONT MATTER',
        groupTitle: 'Curriculum Blueprint & Sovereign Synthesis Architecture',
        groupSubtitle: 'Orientation, multi-author integration ledger, and 36-chapter master curriculum roadmap',
        slugs: ['cover', 'table-of-contents'],
      },
      {
        partNumber: 'PART I',
        groupTitle: 'Physical Geomorphology & Earth Dynamics',
        groupSubtitle: 'Planetary accretion, Earth interior, seismic discontinuities, continental drift, seafloor spreading, plate tectonics, endogenic/exogenic processes, and landforms',
        slugs: ['chapter-01', 'chapter-02', 'chapter-03', 'chapter-04', 'chapter-05'],
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Climatology & Atmospheric Systems',
        groupSubtitle: 'Atmosphere composition, thermal stratification, insolation, heat budget, planetary pressure belts, Coriolis, tri-cellular circulation, moisture, cyclones, and Köppen classification',
        slugs: ['chapter-06', 'chapter-07', 'chapter-08', 'chapter-09', 'chapter-10'],
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Oceanography & Marine Hydrology',
        groupSubtitle: 'Bathymetric relief, ocean temperature, salinity, density stratification, planetary current gyres, ENSO/IOD, tides, coral reefs, and UNCLOS maritime zones',
        slugs: ['chapter-11', 'chapter-12', 'chapter-13', 'chapter-14'],
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Environmental Geography, Ecology & Biogeography',
        groupSubtitle: 'Levels of ecological organization, trophic dynamics, bio-geochemical cycles, biodiversity hotspots, protected areas, pedogenesis/soils, climate change, and global conventions',
        slugs: ['chapter-15', 'chapter-16', 'chapter-17', 'chapter-18'],
      },
      {
        partNumber: 'PART V',
        groupTitle: 'World Regional, Economic & Strategic Geography',
        groupSubtitle: 'Global morphotectonics, major drainage basins, metallic/energy minerals, Whittlesey agricultural realms, and maritime chokepoints',
        slugs: ['chapter-19', 'chapter-20', 'chapter-21', 'chapter-22', 'chapter-23'],
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'Geography of India: Physical, Drainage & Spatial Systems',
        groupSubtitle: 'Morphotectonic divisions, Himalayas, Northern Plains, Peninsular Shield, drainage systems & river interlinking, monsoon dynamics, soils, and transport corridors',
        slugs: ['chapter-24', 'chapter-25', 'chapter-26', 'chapter-27', 'chapter-28'],
      },
      {
        partNumber: 'PART VII',
        groupTitle: 'Geography of Rajasthan (RPSC RAS Master Lens)',
        groupSubtitle: '4 physical divisions, Thar desert geomorphology, Aravalli ranges, drainage basins & lakes, IGNP & ERCP, agro-climate, scientific soils, and mineral wealth',
        slugs: ['chapter-29', 'chapter-30', 'chapter-31', 'chapter-32', 'chapter-33'],
      },
      {
        partNumber: 'PART VIII',
        groupTitle: 'Human, Social & Economic Geography Paradigms',
        groupSubtitle: 'Philosophical paradigms (determinism, possibilism, neo-determinism), demographic transition, migration models, urban settlements, and central place/spatial theories',
        slugs: ['chapter-34', 'chapter-35'],
      },
      {
        partNumber: 'PART IX',
        groupTitle: 'The Capstone: Sovereign Synthesis & Master Revision Vault',
        groupSubtitle: 'All-chapter 60-second retrieval skeletons, Grand Master Distinction Matrices, Top 50 Deadliest Geography Traps, and diagnostic active recall elimination drills',
        slugs: ['chapter-36'],
      },
    ];

    const matchedSlugs = new Set(groups.flatMap((g) => g.slugs));
    const unmapped = allChapters.filter((c) => !matchedSlugs.has(c.slug));

    const result = groups.map((g) => ({
      partNumber: g.partNumber,
      groupTitle: g.groupTitle,
      groupSubtitle: g.groupSubtitle,
      chapters: g.slugs
        .map((slug) => chapterMap.get(slug))
        .filter((c): c is Shelf007ChapterItem => c !== undefined),
    }));

    if (unmapped.length > 0) {
      result.push({
        partNumber: 'STAGED',
        groupTitle: 'Staged Chapters',
        groupSubtitle: 'Additional staged chapters in synthesis pipeline',
        chapters: unmapped,
      });
    }

    return result;
  }

  // IIBF DBF
  const allChapters = getIibfDbfChapters();
  const chapterMap = new Map(allChapters.map((c) => [c.slug, c]));

  const groups: Array<{
    partNumber: string;
    groupTitle: string;
    groupSubtitle: string;
    filterPrefix: string;
    slugs?: string[];
  }> = [
    {
      partNumber: 'BLUEPRINT',
      groupTitle: 'Curriculum Blueprint & Official Exam Structure',
      groupSubtitle: 'IIBF DBF examination schema, mark distributions, cutoffs, and 4-paper syllabus mapping',
      filterPrefix: '',
      slugs: ['cover', 'syllabus-blueprint'],
    },
    {
      partNumber: 'PAPER 1',
      groupTitle: 'Indian Economy & Indian Financial System (IE&IFS)',
      groupSubtitle: 'Macroeconomic architecture, planning, economic reforms, monetary & fiscal policies, and banking structure',
      filterPrefix: '01_paper_1_ie_ifs',
    },
    {
      partNumber: 'PAPER 2',
      groupTitle: 'Principles & Practices of Banking (PPB)',
      groupSubtitle: 'General banking operations, customer relations, operational guidelines, loans & advances, and ethics in banking',
      filterPrefix: '02_paper_2_ppb',
    },
    {
      partNumber: 'PAPER 3',
      groupTitle: 'Accounting & Financial Management for Bankers (AFMB)',
      groupSubtitle: 'Financial mathematics, bond valuation, trial balance, depreciation, banking company final accounts, and Ind AS',
      filterPrefix: '03_paper_3_afmb',
    },
    {
      partNumber: 'PAPER 4',
      groupTitle: 'Retail Banking & Wealth Management (RBWM)',
      groupSubtitle: 'Retail banking foundations, mortgage & personal credit, recovery & SARFAESI, and wealth management',
      filterPrefix: '04_paper_4_rbwm',
    },
    {
      partNumber: 'REVISION',
      groupTitle: 'Rapid Revision Formula & Master Recall Vaults',
      groupSubtitle: 'High-yield numerical formulas, legal time limits, statutory sections, and rapid revision sheets for all 4 papers',
      filterPrefix: 'revision',
    },
  ];

  return groups.map((g) => {
    let matchedChapters: Shelf007ChapterItem[] = [];
    if (g.slugs) {
      matchedChapters = g.slugs
        .map((slug) => chapterMap.get(slug))
        .filter((c): c is Shelf007ChapterItem => c !== undefined);
    } else {
      matchedChapters = allChapters.filter((c) => c.slug.startsWith(g.filterPrefix));
    }
    return {
      partNumber: g.partNumber,
      groupTitle: g.groupTitle,
      groupSubtitle: g.groupSubtitle,
      chapters: matchedChapters,
    };
  });
}

export function getShelf007ChapterContent(
  subject: 'economics' | 'iibf-dbf' | 'political-science' | 'history' | 'quantitative-aptitude' | 'general-science' | 'geography',
  chapterSlug: string
) {
  const chapters =
    subject === 'economics'
      ? getEconomicsChapters()
      : subject === 'iibf-dbf'
      ? getIibfDbfChapters()
      : subject === 'political-science'
      ? getPoliticalScienceChapters()
      : subject === 'history'
      ? getHistoryChapters()
      : subject === 'quantitative-aptitude'
      ? getQuantitativeAptitudeChapters()
      : subject === 'general-science'
      ? getGeneralScienceChapters()
      : getGeographyChapters();
  const currentIdx = chapters.findIndex((c) => c.slug === chapterSlug);

  if (currentIdx === -1) {
    return null;
  }

  const current = chapters[currentIdx];
  const content = fs.readFileSync(current.filePath, 'utf-8');
  const prev = currentIdx > 0 ? chapters[currentIdx - 1] : null;
  const next = currentIdx < chapters.length - 1 ? chapters[currentIdx + 1] : null;

  return {
    subject,
    current,
    content,
    prev,
    next,
    allChapters: chapters,
  };
}
