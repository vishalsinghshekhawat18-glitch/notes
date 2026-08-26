import fs from 'fs';
import path from 'path';
import { db } from '../db/client';

export interface TopicIndexEntry {
  topicNumber: number | string;
  topicName: string;
  pageStart: number;
  pageEnd: number;
  pdfStart: number;
  pdfEnd: number;
  rasPre: boolean;
  rasMains: boolean;
  psi: boolean;
  firstGrade: boolean;
}

export const POLITY_PDF_TOC: TopicIndexEntry[] = [
  { topicNumber: 1, topicName: 'Basic Concepts of Polity', pageStart: 1, pageEnd: 3, pdfStart: 7, pdfEnd: 9, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 2, topicName: 'Constituent Assembly', pageStart: 4, pageEnd: 13, pdfStart: 10, pdfEnd: 19, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 3, topicName: 'Preamble', pageStart: 14, pageEnd: 27, pdfStart: 20, pdfEnd: 33, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 4, topicName: 'Schedules of the Indian Constitution', pageStart: 28, pageEnd: 34, pdfStart: 34, pdfEnd: 40, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 5, topicName: 'Part 1 – Union and its territory (Articles 1- 4)', pageStart: 35, pageEnd: 38, pdfStart: 41, pdfEnd: 44, rasPre: false, rasMains: true, psi: false, firstGrade: false },
  { topicNumber: 6, topicName: 'Unification of India', pageStart: 39, pageEnd: 42, pdfStart: 45, pdfEnd: 48, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 7, topicName: 'Reorganisation of States', pageStart: 43, pageEnd: 47, pdfStart: 49, pdfEnd: 53, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 8, topicName: 'Part-2 : Citizenship (Articles 5 - 11)', pageStart: 48, pageEnd: 55, pdfStart: 54, pdfEnd: 61, rasPre: false, rasMains: false, psi: false, firstGrade: false },
  { topicNumber: 9, topicName: 'Part-3 Fundamental Rights (Articles- 12-35)', pageStart: 56, pageEnd: 82, pdfStart: 62, pdfEnd: 88, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 10, topicName: 'Directive Principles of State Policy', pageStart: 83, pageEnd: 93, pdfStart: 89, pdfEnd: 99, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 11, topicName: 'Part-IVA : Fundamental Duties', pageStart: 94, pageEnd: 97, pdfStart: 100, pdfEnd: 103, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 12, topicName: 'Part -V : The Union (Article 52 – 151)', pageStart: 98, pageEnd: 125, pdfStart: 104, pdfEnd: 131, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 13, topicName: 'Democratic Politics in India', pageStart: 126, pageEnd: 136, pdfStart: 132, pdfEnd: 142, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 14, topicName: 'Legislature', pageStart: 137, pageEnd: 198, pdfStart: 143, pdfEnd: 204, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 15, topicName: 'Part - V Supreme Court (Art. 124 to 147)', pageStart: 199, pageEnd: 215, pdfStart: 205, pdfEnd: 221, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: '15.A', topicName: 'Judicial Review', pageStart: 216, pageEnd: 219, pdfStart: 222, pdfEnd: 225, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: '15.B', topicName: 'Judicial Activism', pageStart: 220, pageEnd: 222, pdfStart: 226, pdfEnd: 228, rasPre: false, rasMains: true, psi: false, firstGrade: false },
  { topicNumber: '15.C', topicName: 'Public Interest Litigation (PIL)', pageStart: 223, pageEnd: 224, pdfStart: 229, pdfEnd: 230, rasPre: false, rasMains: false, psi: true, firstGrade: false },
  { topicNumber: 16, topicName: 'High Courts', pageStart: 225, pageEnd: 231, pdfStart: 231, pdfEnd: 237, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 17, topicName: 'Subordinate Courts', pageStart: 232, pageEnd: 234, pdfStart: 238, pdfEnd: 240, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 18, topicName: 'Federalism', pageStart: 235, pageEnd: 242, pdfStart: 241, pdfEnd: 248, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 19, topicName: 'Part - XVIII Emergency Articles', pageStart: 243, pageEnd: 247, pdfStart: 249, pdfEnd: 253, rasPre: false, rasMains: false, psi: true, firstGrade: true },
  { topicNumber: 20, topicName: 'Part - XX Amendment of the Constitution', pageStart: 248, pageEnd: 251, pdfStart: 254, pdfEnd: 257, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 21, topicName: 'Centre- State Relations', pageStart: 252, pageEnd: 267, pdfStart: 258, pdfEnd: 273, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 22, topicName: 'Central Vigilance Commission: CVC', pageStart: 268, pageEnd: 271, pdfStart: 274, pdfEnd: 277, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 23, topicName: 'NITI Aayog', pageStart: 272, pageEnd: 276, pdfStart: 278, pdfEnd: 282, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 24, topicName: 'National Human Rights Commission (NHRC)', pageStart: 277, pageEnd: 282, pdfStart: 283, pdfEnd: 288, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 25, topicName: 'Central Information Commission: CIC', pageStart: 283, pageEnd: 286, pdfStart: 289, pdfEnd: 292, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 26, topicName: 'Election Commission of India (ECI)', pageStart: 287, pageEnd: 294, pdfStart: 293, pdfEnd: 300, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 27, topicName: 'Union Public Service Commission', pageStart: 295, pageEnd: 297, pdfStart: 301, pdfEnd: 303, rasPre: false, rasMains: true, psi: false, firstGrade: true },
  { topicNumber: 28, topicName: 'Joint Public Service Commission (JPSC)', pageStart: 298, pageEnd: 298, pdfStart: 304, pdfEnd: 304, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 29, topicName: 'Lokpal and Lokayukta', pageStart: 299, pageEnd: 302, pdfStart: 305, pdfEnd: 308, rasPre: true, rasMains: false, psi: true, firstGrade: true },
  { topicNumber: 30, topicName: 'National Commission for Women (NCW)', pageStart: 303, pageEnd: 305, pdfStart: 309, pdfEnd: 311, rasPre: true, rasMains: false, psi: false, firstGrade: true },
  { topicNumber: 31, topicName: 'National Commission for Protection of Child Rights (NCPCR)', pageStart: 306, pageEnd: 309, pdfStart: 312, pdfEnd: 315, rasPre: true, rasMains: false, psi: false, firstGrade: true },
  { topicNumber: 32, topicName: 'Comptroller & Auditor- General', pageStart: 310, pageEnd: 313, pdfStart: 316, pdfEnd: 319, rasPre: true, rasMains: true, psi: true, firstGrade: true },
  { topicNumber: 33, topicName: 'Government of India Act 1919 & 1935', pageStart: 314, pageEnd: 320, pdfStart: 320, pdfEnd: 326, rasPre: false, rasMains: false, psi: true, firstGrade: false },
  { topicNumber: 34, topicName: 'Citizen Charter and Various Legal Rights', pageStart: 321, pageEnd: 331, pdfStart: 327, pdfEnd: 337, rasPre: true, rasMains: false, psi: true, firstGrade: false },
  { topicNumber: 35, topicName: 'Local Self Governance', pageStart: 332, pageEnd: 340, pdfStart: 338, pdfEnd: 346, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 36, topicName: 'Political Demography of Rajasthan', pageStart: 341, pageEnd: 346, pdfStart: 347, pdfEnd: 352, rasPre: false, rasMains: true, psi: false, firstGrade: false },
  { topicNumber: 37, topicName: 'Party System in Rajasthan', pageStart: 347, pageEnd: 352, pdfStart: 353, pdfEnd: 358, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 38, topicName: 'Different phases of Political competition in Rajasthan', pageStart: 353, pageEnd: 366, pdfStart: 359, pdfEnd: 372, rasPre: false, rasMains: true, psi: false, firstGrade: false },
  { topicNumber: 39, topicName: 'Dynamic Politics of India', pageStart: 367, pageEnd: 390, pdfStart: 373, pdfEnd: 396, rasPre: false, rasMains: true, psi: false, firstGrade: false },
  { topicNumber: 40, topicName: 'Coalition Government', pageStart: 391, pageEnd: 392, pdfStart: 397, pdfEnd: 398, rasPre: true, rasMains: true, psi: true, firstGrade: false },
  { topicNumber: 41, topicName: 'Non-Political Party Groups', pageStart: 393, pageEnd: 397, pdfStart: 399, pdfEnd: 403, rasPre: false, rasMains: true, psi: false, firstGrade: false },
  { topicNumber: 42, topicName: 'Issues related to the National Integration & security', pageStart: 398, pageEnd: 399, pdfStart: 404, pdfEnd: 405, rasPre: false, rasMains: true, psi: false, firstGrade: false },
  { topicNumber: 43, topicName: 'Potential Areas of Socio-Political Conflicts', pageStart: 400, pageEnd: 401, pdfStart: 406, pdfEnd: 407, rasPre: false, rasMains: true, psi: false, firstGrade: false },
];

/**
 * Executes Phase 6 controlled source registration and hierarchical decomposition.
 */
export async function executePhase6ControlledIngestion() {
  // 1. Register Source
  const source = await db.source.upsert({
    where: { id: 'source-ceramic-polity-2026' },
    update: {
      title: 'Indian Polity Notes [2026]',
      author: 'Ceramic Academy',
      publisher: 'Ceramic Academy | One Stop Solution For IAS, RAS, PSI',
      sourceType: 'EDUCATIONAL_NOTES',
      authorityTier: 'TIER_C_EDUCATIONAL',
      edition: '2026 Edition',
      identifier: 'CERAMIC-POLITY-2026',
      language: 'en',
      description: 'Comprehensive 408-page coaching treatise covering 43 major constitutional and governance topics for IAS, RAS, PSI, and 1st Grade.',
    },
    create: {
      id: 'source-ceramic-polity-2026',
      title: 'Indian Polity Notes [2026]',
      author: 'Ceramic Academy',
      publisher: 'Ceramic Academy | One Stop Solution For IAS, RAS, PSI',
      sourceType: 'EDUCATIONAL_NOTES',
      authorityTier: 'TIER_C_EDUCATIONAL',
      edition: '2026 Edition',
      identifier: 'CERAMIC-POLITY-2026',
      language: 'en',
      description: 'Comprehensive 408-page coaching treatise covering 43 major constitutional and governance topics for IAS, RAS, PSI, and 1st Grade.',
    },
  });

  // Clear existing sections & coverage units for fresh accounting in dependency order
  await db.evidence.deleteMany({ where: { sourceId: source.id } });
  await db.ingestionItem.deleteMany({ where: { sourceId: source.id } });
  await db.coverageUnit.deleteMany({ where: { sourceId: source.id } });
  await db.sourceSection.deleteMany({ where: { sourceId: source.id } });

  // 2. Front Matter Section
  const frontMatterSection = await db.sourceSection.create({
    data: {
      sourceId: source.id,
      title: 'Front Matter (Cover, Index & Syllabi)',
      sectionType: 'FRONT_MATTER',
      pageStart: 1,
      pageEnd: 6,
      locator: 'PDF pp. 1-6',
      order: 0,
    },
  });

  await db.coverageUnit.create({
    data: {
      sourceId: source.id,
      sourceSectionId: frontMatterSection.id,
      label: 'Front Matter: Cover, Index & Examination Mappings',
      scopeDescription: 'TOC indexing 43 topics and syllabus mapping for UPSC, RPSC RAS, and PSI.',
      status: 'EXTRACTED',
      extractionStatus: 'COMPLETE',
      verificationStatus: 'CHECKED',
      order: 0,
    },
  });

  // 3. Register All 43 Physical Source Topics & Create CoverageUnits
  let totalCoverageUnits = 1;

  for (let i = 0; i < POLITY_PDF_TOC.length; i++) {
    const entry = POLITY_PDF_TOC[i];
    const section = await db.sourceSection.create({
      data: {
        sourceId: source.id,
        title: `Topic ${entry.topicNumber}: ${entry.topicName}`,
        sectionType: 'CHAPTER',
        pageStart: entry.pdfStart,
        pageEnd: entry.pdfEnd,
        locator: `Printed pp. ${entry.pageStart}-${entry.pageEnd} (PDF pp. ${entry.pdfStart}-${entry.pdfEnd})`,
        order: i + 1,
      },
    });

    const cu = await db.coverageUnit.create({
      data: {
        sourceId: source.id,
        sourceSectionId: section.id,
        label: `Coverage Unit ${entry.topicNumber}: ${entry.topicName}`,
        scopeDescription: `Covers ${entry.topicName} across printed pages ${entry.pageStart}-${entry.pageEnd}. Source exam tags: ${[
          entry.rasPre ? 'RAS Pre' : null,
          entry.rasMains ? 'RAS Mains' : null,
          entry.psi ? 'PSI' : null,
          entry.firstGrade ? '1st Grade' : null,
        ].filter(Boolean).join(', ') || 'None'}`,
        status: 'QUEUED',
        extractionStatus: 'PENDING',
        verificationStatus: 'UNCHECKED',
        canonicalMappingStatus: 'UNMAPPED',
        order: i + 1,
      },
    });

    totalCoverageUnits++;
  }

  // 4. Back Matter Section (Page 408)
  const backMatterSection = await db.sourceSection.create({
    data: {
      sourceId: source.id,
      title: 'Back Matter (Back Cover)',
      sectionType: 'BACK_MATTER',
      pageStart: 408,
      pageEnd: 408,
      locator: 'PDF p. 408',
      order: POLITY_PDF_TOC.length + 1,
    },
  });

  await db.coverageUnit.create({
    data: {
      sourceId: source.id,
      sourceSectionId: backMatterSection.id,
      label: 'Back Matter: Back Cover',
      scopeDescription: 'Blank back cover page.',
      status: 'EXCLUDED_WITH_REASON',
      exclusionReason: 'Blank back cover page with zero pedagogical or constitutional content.',
      order: POLITY_PDF_TOC.length + 1,
    },
  });
  totalCoverageUnits++;

  return {
    sourceId: source.id,
    sourceTitle: source.title,
    sectionsCreatedCount: POLITY_PDF_TOC.length + 2, // 1 Front + 46 Topics + 1 Back Matter = 48
    coverageUnitsCreatedCount: totalCoverageUnits, // 48 total units
  };
}
