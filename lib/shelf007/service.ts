import fs from 'fs';
import path from 'path';

export interface Shelf007ChapterItem {
  slug: string;
  title: string;
  category: string;
  filePath: string;
  order: number;
  wordCount: number;
  readingMinutes: number;
}

export interface Shelf007SubjectMeta {
  slug: 'economics' | 'iibf-dbf';
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

export function getShelf007Subjects(): Shelf007SubjectMeta[] {
  const econChapters = getEconomicsChapters();
  const dbfChapters = getIibfDbfChapters();

  const econWords = econChapters.reduce((acc, c) => acc + c.wordCount, 0);
  const dbfWords = dbfChapters.reduce((acc, c) => acc + c.wordCount, 0);

  return [
    {
      slug: 'economics',
      name: 'Economics Master Treatise (Penta-Treatise Synthesis)',
      badge: '5-Author Sovereign Synthesis',
      badgeColor: 'text-[#9a3412] bg-[#fff7ed] border-[#ffedd5]',
      code: 'ECO-007',
      authors: 'Ramesh Singh • Vivek Singh • Nitin Singhania • Sanjeev Verma • K. Sankarganesh',
      description:
        'Sovereign macroeconomic architecture covering National Income (2015 SNA), Monetary Transmission, Banking & NPAs, Public Finance & GST, Fiscal Federalism, PLFS Employment, Land Reforms, Food Processing, and External Sector.',
      totalChapters: econChapters.length,
      totalWords: econWords,
      chips: [
        'National Income (NSO 2015 SNA)',
        'Monetary Policy & Repo Corridor',
        'NPAs, IBC 2016 & Bad Banks',
        'GST Architecture & FRBM Act',
        'Land Reforms & Food Processing (FPI)',
        'Master Revision Vault (Ch 22)',
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
  ];
}

export function getEconomicsChapters(): Shelf007ChapterItem[] {
  const dir = path.join(process.cwd(), '007', 'notes', 'economics');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

  return files.map((fileName, idx) => {
    const fullPath = path.join(dir, fileName);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    let slug = fileName.replace(/\.md$/, '').toLowerCase();
    let category = 'Master Chapter';

    if (fileName.startsWith('00_')) {
      slug = 'cover';
      category = 'Front Matter';
    } else if (fileName.startsWith('01_')) {
      slug = 'table-of-contents';
      category = 'Front Matter';
    } else if (fileName.startsWith('23_')) {
      slug = 'master-revision-vault';
      category = 'Capstone Vault';
    } else {
      const chMatch = fileName.match(/CHAPTER_(\d+)/i);
      if (chMatch) {
        slug = `chapter-${chMatch[1].padStart(2, '0')}`;
        category = `Chapter ${parseInt(chMatch[1], 10)}`;
      }
    }

    const title = extractTitleFromMarkdown(content, fileName.replace(/\.md$/, ''));

    return {
      slug,
      title,
      category,
      filePath: fullPath,
      order: idx + 1,
      wordCount,
      readingMinutes: calculateReadingMinutes(wordCount),
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
      const title = extractTitleFromMarkdown(content, f.replace(/\.md$/, ''));

      items.push({
        slug,
        title,
        category,
        filePath: fullPath,
        order: order++,
        wordCount,
        readingMinutes: calculateReadingMinutes(wordCount),
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
        const title = extractTitleFromMarkdown(content, f.replace(/\.md$/, ''));

        items.push({
          slug: modSlug,
          title,
          category: paperName,
          filePath: fullPath,
          order: order++,
          wordCount,
          readingMinutes: calculateReadingMinutes(wordCount),
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
      const title = extractTitleFromMarkdown(content, f.replace(/\.md$/, ''));

      items.push({
        slug,
        title,
        category: 'Rapid Revision Vault',
        filePath: fullPath,
        order: order++,
        wordCount,
        readingMinutes: calculateReadingMinutes(wordCount),
      });
    }
  }

  return items;
}

export function getShelf007ChapterContent(subject: 'economics' | 'iibf-dbf', chapterSlug: string) {
  const chapters = subject === 'economics' ? getEconomicsChapters() : getIibfDbfChapters();
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
