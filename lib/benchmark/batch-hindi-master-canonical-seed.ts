import { db } from '../db/client';
import { HINDI_MASTER_PART1_CONCEPTS } from './batch-hindi-master-part1';
import { HINDI_MASTER_PART2_CONCEPTS, MasterHindiConceptDefinition } from './batch-hindi-master-part2';

export const ALL_HINDI_MASTER_CONCEPTS: MasterHindiConceptDefinition[] = [
  ...HINDI_MASTER_PART1_CONCEPTS,
  ...HINDI_MASTER_PART2_CONCEPTS,
];

export async function seedHindiMasterCanonicalKnowledge(): Promise<void> {
  console.log(`Seeding General Hindi Master Canonical Knowledge (${ALL_HINDI_MASTER_CONCEPTS.length} concepts)...`);

  // 1. Ensure Domain and Subject exist
  const domain = await db.domain.upsert({
    where: { slug: 'humanities-and-communication' },
    update: {
      name: 'Humanities & Communication',
      description: 'Languages, Literature, Official Drafting, Communication, Philosophy, and Human Expression.',
      order: 4,
      status: 'ACTIVE',
    },
    create: {
      slug: 'humanities-and-communication',
      name: 'Humanities & Communication',
      description: 'Languages, Literature, Official Drafting, Communication, Philosophy, and Human Expression.',
      order: 4,
      status: 'ACTIVE',
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'general-hindi' },
    update: {
      domainId: domain.id,
      name: 'General Hindi',
      description: 'Comprehensive General Hindi for RPSC RAS Mains Paper IV (120 Marks) & civil services: Grammar, Administrative Vocabulary, Drafting, Précis, Idea Expansion, Translation, and Essays.',
      order: 1,
      status: 'ACTIVE',
    },
    create: {
      domainId: domain.id,
      slug: 'general-hindi',
      name: 'General Hindi',
      scopeStatement: 'Exhaustive syllabus coverage for RPSC RAS Mains Paper IV: Part A Grammar & Vocab (50 Marks), Part B Comprehension & Drafting (50 Marks), and Part C Essays (20 Marks).',
      description: 'Comprehensive General Hindi for RPSC RAS Mains Paper IV (120 Marks) & civil services: Grammar, Administrative Vocabulary, Drafting, Précis, Idea Expansion, Translation, and Essays.',
      order: 1,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist
  const topicDefs = [
  {
    "slug": "varn-vichar-aur-uccharan",
    "title": "वर्ण विचार एवं उच्चारण स्थान",
    "order": 1,
    "description": "ध्वनि, वर्ण, स्वर-व्यंजन का वर्गीकरण, प्रयत्न (आभ्यन्तर/बाह्य) एवं उच्चारण स्थान।"
  },
  {
    "slug": "sandhi-aur-sandhi-vichhed",
    "title": "सन्धि एवं सन्धि-विच्छेद",
    "order": 2,
    "description": "वर्णों के मेल से उत्पन्न विकार, स्वर सन्धि (दीर्घ, गुण, वृद्धि, यण, अयादि) के सूत्र व नियम।"
  },
  {
    "slug": "samas-aur-vigrah",
    "title": "समास एवं समास-विग्रह",
    "order": 3,
    "description": "पदों का संक्षेपीकरण, अव्ययीभाव एवं तत्पुरुष समास (कारकीय विभक्ति एवं उपभेद: कर्म, करण, संप्रदान, अपादान, संबंध, अधिकरण)।"
  },
  {
    "slug": "upsarg-aur-pratyay",
    "title": "उपसर्ग एवं प्रत्यय संरचना",
    "order": 4,
    "description": "संस्कृत के 22 तत्सम उपसर्ग, तद्भव हिन्दी उपसर्ग, आगत (उर्दू-फारसी-अंग्रेजी) उपसर्ग एवं उपसर्ग पृथक्करण।"
  },
  {
    "slug": "shabd-bhandar-aur-arth-vichar",
    "title": "पर्यायवाची एवं शब्द भंडार",
    "order": 5,
    "description": "प्रशासनिक, प्राकृतिक, पौराणिक एवं शास्त्रीय पर्यायवाची शब्दों के सूक्ष्म अर्थभेद एवं मानक रूप।"
  },
  {
    "slug": "vilom-shabd",
    "title": "विलोम शब्द एवं विलोमार्थी युग्म",
    "order": 6,
    "description": "विरोधाभासी, पूरक, उपसर्ग-परिवर्तन एवं लिंग-परिवर्तन जनित मानक विलोम युग्म।"
  },
  {
    "slug": "samshrut-bhinnarthak-shabd",
    "title": "समश्रुत भिन्नार्थक शब्द (शब्द-युग्म)",
    "order": 7,
    "description": "समान ध्वनि एवं वर्तनी वाले शब्दों के सूक्ष्म अर्थभेद एवं वाक्य प्रयोग।"
  },
  {
    "slug": "vakyansh-ke-liye-ek-shabd",
    "title": "वाक्यांश के लिए एक सार्थक शब्द",
    "order": 8,
    "description": "अनेक शब्दों अथवा वाक्यांशों के लिए मानक पारिभाषिक व शास्त्रीय एकल शब्द।"
  },
  {
    "slug": "shabd-shuddhi",
    "title": "शब्द-शुद्धि एवं मानक वर्तनी",
    "order": 9,
    "description": "मात्रा, वर्ण-व्यत्यय, सन्धि, समास, उपसर्ग, प्रत्यय एवं हलन्त जनित अशुद्धियाँ और मानक रूप।"
  },
  {
    "slug": "vakya-shuddhi",
    "title": "वाक्य-शुद्धि एवं रचना-दोष",
    "order": 10,
    "description": "पदक्रम, अन्विति (कर्ता-क्रिया-कर्म सामंजस्य), कारक, लिंग, वचन, काल एवं पुनरुक्ति दोष निवारण।"
  },
  {
    "slug": "idioms-proverbs-and-lexicon",
    "title": "व्यावहारिक व्याकरण, लोकोक्ति-मुहावरा एवं शब्द सामर्थ्य",
    "order": 11,
    "description": "प्रशासनिक व साहित्यिक हिन्दी में अर्थ-वैचित्र्य, लाक्षणिक व्यंजना, मुहावरों व लोकोक्तियों के सटीक वाक्य प्रयोग एवं सूक्ष्म अर्थ-बोध का अध्ययन।"
  },
  {
    "slug": "precis-and-expansion",
    "title": "संक्षेपण, पल्लवन एवं विचार-संश्लेषण",
    "order": 12,
    "description": "प्रशासनिक लेखन में सूचना का सार-ग्रहण, गागर में सागर भरने की कला, सटीक शीर्षक चयन एवं विचार-विस्तार की विधाएं।"
  },
  {
    "slug": "official-drafting-and-correspondence",
    "title": "कार्यालयी पत्र-व्यवहार एवं प्रारूपण (Official Drafting)",
    "order": 13,
    "description": "राजस्थान सचिवालय कार्यविधि निर्देशिका के अनुरूप शासकीय, अर्ध-शासकीय, आदेश, परिपत्र, अधिसूचना, विज्ञप्ति एवं निविदा प्रारूपण।"
  },
  {
    "slug": "functional-translation",
    "title": "भाषा-अनुवाद एवं वाक्य-संरचना (Functional Translation)",
    "order": 14,
    "description": "प्रशासनिक संसूचना, वाक्य विन्यास रूपांतरण, कर्मवाच्य (Passive Voice) का हिन्दीकरण एवं मानक अनुवाद।"
  },
  {
    "slug": "analytical-essay-discourse",
    "title": "सारगर्भित निबंध विधा एवं वैचारिक विमर्श (Analytical Essay)",
    "order": 15,
    "description": "आरपीएससी मुख्य परीक्षा भाग स निबंध लेखन (20 अंक, 250 शब्द) — राष्ट्रीय विकास, सुशासन एवं समसामयिकी।"
  }
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

  // 3. Ensure Canonical Source exists
  const sourceHindi = await db.source.upsert({
    where: { id: 'SRC-HINDI-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-HINDI-MASTER-2026',
      title: 'General Hindi Authoritative Lexicon & Grammar Corpus (Kamta Prasad Guru, Vasudev Nandan, Raghav Prakash, Secretariat Manual)',
      sourceType: 'COMPREHENSIVE_LINGUISTIC_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Authoritative grammatical and administrative linguistic corpus for civil services examinations.',
    },
  });

  const examSlugMap: Record<string, string> = {
    RPSC_RAS: 'rpsc-ras',
    UPSC_CSE: 'upsc-cse',
    UPPSC_PCS: 'uppsc-pcs',
    BPSC: 'bpsc',
    MPPSC: 'mppsc',
    RPSC_RJS: 'rpsc-rjs',
    RPSC_SI: 'rpsc-si',
    UPSC_APFC: 'upsc-apfc',
    DSSSB: 'dsssb',
    UKPSC: 'ukpsc',
    HPSC: 'hpsc',
    UPPSC: 'uppsc-pcs',
  };

  // 4. Seed Concepts
  for (const c of ALL_HINDI_MASTER_CONCEPTS) {
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
        difficulty: c.difficulty,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        slug: c.slug,
        title: c.title,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty,
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
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: cb.visibility || 'STANDARD',
        },
      });
    }

    // Claims and Evidence
    for (const [idx, clm] of c.claims.entries()) {
      const claimId = clm.id || `${c.id}-CLM-${idx + 1}`;
      const claim = await db.claim.upsert({
        where: { id: claimId },
        update: {
          statement: clm.statement,
          claimType: clm.claimType,
          epistemicLevel: clm.epistemicLevel,
          confidence: clm.confidence,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: claimId,
          statement: clm.statement,
          claimType: clm.claimType,
          epistemicLevel: clm.epistemicLevel,
          confidence: clm.confidence,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
      });

      await db.evidence.deleteMany({ where: { claimId: claim.id } });
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceHindi.id,
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
          relevance: em.relevance,
          priority: em.priority,
          requiredDepth: em.requiredDepth,
          notes: em.notes,
        },
        create: {
          examId: exam.id,
          conceptId: concept.id,
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance,
          priority: em.priority,
          requiredDepth: em.requiredDepth,
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
          type: ru.type,
          content: ru.content,
          priority: ru.priority || 'HIGH',
          order: ru.order,
        },
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of c.questions) {
      const isDescriptive = q.type.startsWith('DESCRIPTIVE');
      const ans = isDescriptive ? (q.modelAnswer || q.correctAnswer || '') : (q.correctAnswer || '');
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type,
          stem: q.stem,
          options: q.options ? JSON.stringify(q.options) : null,
          correctAnswer: ans,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation || null,
          difficulty: q.difficulty,
          isPYQ: false,
          pyqMarks: q.marks ? Number(q.marks) : null,
        },
      });
    }
  }

  console.log(`Successfully seeded ${ALL_HINDI_MASTER_CONCEPTS.length} General Hindi canonical concepts.`);
}
