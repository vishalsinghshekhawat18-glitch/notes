import { db } from '../db/client';
import { MODERN_HISTORY_PART1_CONCEPTS } from './batch-modern-history-part1';
import { MODERN_HISTORY_PART2_CONCEPTS } from './batch-modern-history-part2';
import { MODERN_HISTORY_PART3_CONCEPTS } from './batch-modern-history-part3';
import { MODERN_HISTORY_PART4_CONCEPTS } from './batch-modern-history-part4';

export interface ModernHistoryConceptDef {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  order: number;
  topicSlug: string;
  contentBlocks: {
    type: string;
    title: string;
    body: string;
    order: number;
    visibility: string;
  }[];
  claims: {
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }[];
  examMappings: {
    examCode: string;
    syllabusUnit: string;
    relevance: string;
    priority: string;
    requiredDepth: string;
    notes: string;
  }[];
  revisionUnits: {
    type: string;
    content: string;
    priority: string;
    order: number;
  }[];
  questions: {
    type: string;
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation: string;
    difficulty: string;
    isPYQ?: boolean;
    pyqYear?: number;
    pyqPaper?: string;
    pyqStage?: string;
    examinerTrapPattern?: string;
  }[];
}

export const MODERN_HISTORY_CONCEPTS: ModernHistoryConceptDef[] = [
  ...MODERN_HISTORY_PART1_CONCEPTS,
  ...MODERN_HISTORY_PART2_CONCEPTS,
  ...MODERN_HISTORY_PART3_CONCEPTS,
  ...MODERN_HISTORY_PART4_CONCEPTS,
];

export async function seedModernMasterCanonicalKnowledge(): Promise<void> {
  console.log('Seeding Modern Indian History Master Canonical Knowledge (21 concepts)...');

  // 1. Ensure Domain and Subject exist
  const domain = await db.domain.upsert({
    where: { slug: 'history-and-culture' },
    update: {
      name: 'History & Culture',
      description: 'Ancient, Medieval, Modern Indian History, Art, Culture, Architecture and World History.',
      order: 3,
      status: 'ACTIVE',
    },
    create: {
      slug: 'history-and-culture',
      name: 'History & Culture',
      description: 'Ancient, Medieval, Modern Indian History, Art, Culture, Architecture and World History.',
      order: 3,
      status: 'ACTIVE',
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'modern-indian-history' },
    update: {
      domainId: domain.id,
      name: 'Modern Indian History',
      description: 'European arrival, British expansion, socio-religious reform movements, the freedom struggle, Gandhian era, constitutional evolution, partition, and princely state integration.',
      order: 2,
      status: 'ACTIVE',
    },
    create: {
      domainId: domain.id,
      slug: 'modern-indian-history',
      name: 'Modern Indian History',
      scopeStatement: 'Comprehensive coverage of European penetration, Carnatic wars, Plassey and Buxar, colonial diplomatic instruments, land revenue systems, Drain of Wealth, 1857 Revolt, socio-religious reforms, early nationalism, Swadeshi, revolutionary nationalism, Subhas Chandra Bose, constitutional acts (1909, 1919, 1935), Gandhian mass movements, communal politics, partition, and princely state integration.',
      description: 'European arrival, British expansion, socio-religious reform movements, the freedom struggle, Gandhian era, constitutional evolution, partition, and princely state integration.',
      order: 2,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist (13 structured topics)
  const topicDefs = [
    {
      slug: 'european-penetration-and-carnatic-wars',
      title: 'European Penetration & The Carnatic Wars',
      description: 'Arrival of Portuguese, Dutch, English, and French East India Companies, factory systems, and the Anglo-French Carnatic Wars establishing British supremacy.',
      order: 1,
    },
    {
      slug: 'company-transformation-in-bengal',
      title: 'Company Transformation in Bengal: Plassey to Allahabad',
      description: 'Battle of Plassey (1757), Battle of Buxar (1764), Treaty of Allahabad (1765), Diwani rights, and the Dual System of Administration.',
      order: 2,
    },
    {
      slug: 'anglo-mysore-and-maratha-expansion',
      title: 'Anglo-Mysore & Anglo-Maratha Expansion',
      description: 'Four Anglo-Mysore Wars, Tipu Sultan, Three Anglo-Maratha Wars, Treaty of Bassein, and the dismantling of Maratha Confederacy.',
      order: 3,
    },
    {
      slug: 'colonial-diplomatic-instruments',
      title: 'Colonial Diplomatic Instruments: Subsidiary Alliance & Doctrine of Lapse',
      description: "Lord Wellesley's Subsidiary Alliance System and Lord Dalhousie's Doctrine of Lapse and annexation of Awadh.",
      order: 4,
    },
    {
      slug: 'colonial-land-revenue-systems',
      title: 'Colonial Land Revenue Settlements: Permanent, Ryotwari & Mahalwari',
      description: "Lord Cornwallis's Permanent Settlement (1793), Thomas Munro's Ryotwari System, Holt Mackenzie's Mahalwari System, and agrarian impacts.",
      order: 5,
    },
    {
      slug: 'colonial-economic-drain-and-deindustrialization',
      title: 'Colonial Economic Drain & De-industrialization',
      description: 'De-industrialization of handicrafts, commercialization of agriculture, famines, and the Drain of Wealth theory by Naoroji and Dutt.',
      order: 6,
    },
    {
      slug: 'revolt-of-1857-and-crown-rule',
      title: 'The Great Revolt of 1857 & The Government of India Act 1858',
      description: "Military, political, economic, socio-religious causes of 1857, Enfield rifle trigger, regional leadership, and Queen's Proclamation / Act of 1858.",
      order: 7,
    },
    {
      slug: 'socio-religious-reform-movements',
      title: 'Socio-Religious Reform Movements & Anti-Caste Struggles',
      description: '19th century renaissance: Brahmo Samaj, Arya Samaj, Prarthana Samaj, Satyashodhak Samaj (Phule), Ramakrishna Mission, and Aligarh Movement.',
      order: 8,
    },
    {
      slug: 'early-nationalism-and-swadeshi',
      title: 'Early Nationalism, Partition of Bengal & Swadeshi Movement',
      description: 'Foundation of INC (1885), Moderates vs Extremists, Partition of Bengal (1905), Swadeshi and Boycott Movement, and Surat Split (1907).',
      order: 9,
    },
    {
      slug: 'revolutionary-nationalism-and-bose',
      title: 'Revolutionary Nationalism & Subhas Chandra Bose\'s INA',
      description: 'Revolutionary movements in Bengal, Maharashtra, Punjab, HRA/HSRA (Bhagat Singh, Azad), Subhas Chandra Bose, Forward Bloc, and INA trials.',
      order: 10,
    },
    {
      slug: 'constitutional-acts-1909-to-1935',
      title: 'Constitutional Acts: Morley-Minto, Montagu-Chelmsford & GOI Act 1935',
      description: 'Indian Councils Act 1909 (separate electorates), Government of India Act 1919 (dyarchy in provinces), Simon Commission, and Government of India Act 1935 (provincial autonomy, proposed federation).',
      order: 11,
    },
    {
      slug: 'gandhian-movements-early-to-quit-india',
      title: 'The Gandhian Mass Movements (1917–1942)',
      description: 'Early satyagrahas (Champaran, Ahmedabad, Kheda), Non-Cooperation & Khilafat (1920-22), Civil Disobedience (1930-34), Poona Pact (1932), and Quit India Movement (1942).',
      order: 12,
    },
    {
      slug: 'communal-politics-partition-and-integration',
      title: 'Communal Politics, Partition & Princely State Integration',
      description: "Muslim League, Pakistan Resolution (1940), Cripps Mission, Cabinet Mission, Mountbatten Plan, Radcliffe Line, and Sardar Patel's integration of 565 princely states.",
      order: 13,
    },
  ];

  for (const t of topicDefs) {
    await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: t.slug,
        },
      },
      update: {
        title: t.title,
        description: t.description,
        order: t.order,
        status: 'ACTIVE',
      },
      create: {
        slug: t.slug,
        title: t.title,
        description: t.description,
        order: t.order,
        subjectId: subject.id,
        status: 'ACTIVE',
      },
    });
  }

  // Prune any legacy/obsolete topics for this subject that have no concepts attached
  const validSlugs = topicDefs.map((t) => t.slug);
  await db.topic.deleteMany({
    where: {
      subjectId: subject.id,
      slug: { notIn: validSlugs },
      concepts: { none: {} },
    },
  });

  // 3. Ensure Source exists
  const sourceModern = await db.source.upsert({
    where: { id: 'SRC-MODERN-HIST-2026' },
    update: {},
    create: {
      id: 'SRC-MODERN-HIST-2026',
      title: 'History & Culture Master Corpus — Modern India & National Movement (2026)',
      sourceType: 'COMPREHENSIVE_HISTORICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Canonical historical synthesis covering colonial expansion, agrarian settlements, freedom struggle, revolutionary movements, and constitutional integration.',
    },
  });

  // 4. Seed Concepts
  const examSlugMap: Record<string, string> = {
    SBI_PO: 'sbi-po',
    IBPS_PO: 'ibps-po',
    RBI_GRADE_B: 'rbi-grade-b',
    SSC_CGL: 'ssc-cgl',
    RPSC_RAS: 'rpsc-ras',
    UPSC_CSE: 'upsc-cse',
    UPSC_APFC: 'upsc-apfc',
    IIBF_DBF: 'iibf-dbf',
  };

  for (const c of MODERN_HISTORY_CONCEPTS) {
    const topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: c.topicSlug,
      },
    });
    if (!topic) {
      console.warn(`Topic not found for slug: ${c.topicSlug}, skipping concept: ${c.id}`);
      continue;
    }

    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        slug: c.slug,
        title: c.title,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
    });

    // Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const cb of c.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type as any,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: cb.visibility as any,
        },
      });
    }

    // Claims and Evidence
    for (const clm of c.claims) {
      const claim = await db.claim.upsert({
        where: { id: clm.id },
        update: {
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: clm.id,
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
      });

      await db.evidence.deleteMany({ where: { claimId: claim.id } });
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceModern.id,
          locator: clm.locator,
          excerpt: clm.excerpt,
          evidenceType: 'EXCERPT',
          authority: 'PRIMARY_REGULATORY_TEXT',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'CERTAIN',
        },
      });
    }

    // Exam Concept Mappings
    for (const em of c.examMappings) {
      const slug = examSlugMap[em.examCode] || em.examCode.toLowerCase().replace(/_/g, '-');
      const exam = await db.exam.upsert({
        where: { slug },
        update: {},
        create: {
          slug,
          name: em.examCode.replace(/_/g, ' '),
          conductingBody: em.examCode.split('_')[0],
          description: `Official competitive examination for ${em.examCode}`,
          syllabusSummary: `Syllabus for ${em.examCode}`,
        },
      });

      await db.examConceptMapping.upsert({
        where: {
          examId_conceptId: {
            examId: exam.id,
            conceptId: concept.id,
          },
        },
        update: {
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
          notes: em.notes,
        },
        create: {
          examId: exam.id,
          conceptId: concept.id,
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
          notes: em.notes,
        },
      });
    }

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of c.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type as any,
          content: ru.content,
          priority: ru.priority as any,
          order: ru.order,
        },
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of c.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type as any,
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty as any,
          isPYQ: q.isPYQ ?? false,
          pyqYear: q.pyqYear,
          pyqPaper: q.pyqPaper,
          pyqStage: q.pyqStage,
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }
  }

  console.log(`Successfully seeded ${MODERN_HISTORY_CONCEPTS.length} Modern History canonical concepts.`);
}
