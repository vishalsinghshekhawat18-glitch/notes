// Ancient Indian History — Master Canonical Knowledge Seeder
// Consolidates 25 Canonical Topics & 65 Concepts (CON-ANC-001 to CON-ANC-065)
// Standardized 4-Block Architecture, 8-Exam Mappings & 2 Questions per Concept

import { db } from '../db/client';
import { ANCIENT_MASTER_PART_1_CONCEPTS } from './batch-ancient-master-part1';
import { ANCIENT_MASTER_PART_2_CONCEPTS } from './batch-ancient-master-part2';
import { ANCIENT_MASTER_PART_3_CONCEPTS } from './batch-ancient-master-part3';

export const CANONICAL_25_ANCIENT_TOPICS = [
  { order: 1, slug: 'prehistoric-cultures-and-stone-age', title: 'Prehistory & Stone Age Cultures: Palaeolithic, Mesolithic & Neolithic', description: 'Evolution of early hominids, tool typologies, rock art at Bhimbetka, and the Neolithic agricultural revolution across Mehrgarh, Burzahom, and Chirand.' },
  { order: 2, slug: 'chalcolithic-cultures-of-india-and-rajasthan', title: 'Chalcolithic Cultures of India & Rajasthan: Copper Age & Village Settlements', description: 'Copper-stone farming cultures: Ahar-Banas, Ganeshwar, Malwa, Kayatha, Jorwe, and Ochre Coloured Pottery (OCP) transitions.' },
  { order: 3, slug: 'harappan-civilization-origins-and-town-planning', title: 'Harappan Civilization: Origins, Urban Planning, Architecture & Major Sites', description: 'Mature Indus Valley urban planning, grid system, citadel/lower town division, drainage systems, Great Bath, granaries, and key excavations (Mohenjo-daro, Harappa, Dholavira, Lothal, Kalibangan, Rakhigarhi).' },
  { order: 4, slug: 'harappan-economy-society-religion-and-decline', title: 'Harappan Economy, Craft, Trade, Script, Religion & Decline Theories', description: 'Specialized bead-making, bronze metallurgy, seals, weights and measures, Meluhha trade with Mesopotamia, religious symbolism (Pashupati, Mother Goddess), and theories of environmental/hydrological collapse.' },
  { order: 5, slug: 'early-vedic-age-society-and-rigveda', title: 'Early Vedic Age: Rigvedic Society, Polity, Pastoral Economy & Sapta Sindhu', description: 'The Rigvedic pastoral economy, Sapta Sindhu geography, tribal assemblies (Sabha, Samiti, Vidatha), Rajan lineage, Battle of the Ten Kings, and naturalistic polytheism.' },
  { order: 6, slug: 'later-vedic-age-iron-and-social-evolution', title: 'Later Vedic Age: PGW Culture, Iron Technology, Varna & Upanishads', description: 'Painted Grey Ware (PGW) culture, expansion into the Ganga-Yamuna Doab, emergence of territorial states (Janapadas), monarchical rituals (Ashvamedha, Rajasuya), fourfold Varna hierarchy, and philosophical reaction in the Upanishads.' },
  { order: 7, slug: 'mahajanapadas-and-second-urbanisation', title: 'Mahajanapadas, Second Urbanisation & Rajasthan Janapadas', description: 'The Sixteen Mahajanapadas, rise of monarchies and Gana-Sanghas (Vajji, Malla), Northern Black Polished Ware (NBPW), monetization via punch-marked coins, and ancient Rajasthan Janapadas (Matsya, Shivi, Malava, Yaudheya).' },
  { order: 8, slug: 'rise-of-magadha-and-pre-mauryan-dynasties', title: 'Rise of Magadha: Haryankas to Nandas, Persian & Macedonian Invasions', description: 'Geostrategic factors behind Magadhan hegemony, Haryanka dynasty (Bimbisara, Ajatashatru), Shishunagas, Nanda empire, Persian Achaemenid contacts, and Alexander’s invasion (326 BCE).' },
  { order: 9, slug: 'buddhism-philosophy-councils-and-spread', title: 'Buddhism: Gautama Buddha, Core Philosophy, Sangha & Canonical Councils', description: 'Life of Gautama Buddha, Four Noble Truths, Noble Eightfold Path, Pratityasamutpada, Anatta, Sangha architecture, Four Buddhist Councils, Pali Tipitaka, and emergence of Hinayana and Mahayana.' },
  { order: 10, slug: 'jainism-and-heterodox-shramana-traditions', title: 'Jainism & Heterodox Shramana Traditions: Mahavira, Ajivikas & Charvakas', description: 'Vardhamana Mahavira, 24 Tirthankaras, Triratna, Five Mahavratas, Ahimsa, Anekantavada, Syadvada, Digambara-Svetambara schism, Jain Agamas, Ajivika fatalism (Makkhali Gosala), and Charvaka materialism.' },
  { order: 11, slug: 'mauryan-empire-foundation-and-sources', title: 'The Mauryan Empire: Foundation, Statecraft, Chandragupta & Bindusara', description: 'Foundation of the first subcontinental empire, Kautilya’s Arthashastra, Megasthenes’ Indica, Chandragupta’s conquest of the Nandas, Seleucid settlement (305 BCE), and Bindusara Amitraghata.' },
  { order: 12, slug: 'ashoka-the-great-dhamma-and-epigraphy', title: 'Ashoka the Great: Kalinga War, Dhamma, Inscriptions & Ethical Governance', description: 'Ashoka’s accession, Kalinga War (261 BCE), policy of Dhammavijaya, ethical tenets of Dhamma, Dhamma Mahamattas, epigraphic corpus (Major Rock Edicts, Bhabru Edict at Bairath, Maski, Pillar Edicts), and James Prinsep’s decipherment.' },
  { order: 13, slug: 'mauryan-administration-economy-and-art', title: 'Mauryan Imperial Administration, Revenue System, Court Art & Decline', description: 'Saptanga theory of state, central bureaucracy (Tirthas, Adhyakshas), espionage network (Gudhapurushas), revenue administration (Bhaga, Bali, Samaharta), court art (monolithic pillars, Lion Capital, Barabar caves), and causes of imperial decline.' },
  { order: 14, slug: 'post-mauryan-northern-and-western-dynasties', title: 'Post-Mauryan Northern & Western Polities: Shungas, Indo-Greeks & Shakas', description: 'Pushyamitra Shunga, Kanvas, Kharavela of Kalinga (Hathigumpha Inscription), Indo-Greek kingdoms, Menander I (Milindapanha), Shaka-Western Kshatrapas, and Rudradaman I’s Junagadh Rock Inscription (150 CE).' },
  { order: 15, slug: 'the-kushana-empire-silk-road-and-art', title: 'The Kushana Empire: Kanishka, Silk Road Trade, Gandhara & Mathura Art', description: 'Kushana state formation, Kujula and Vima Kadphises, Kanishka I (Shaka Era 78 CE), Fourth Buddhist Council in Kashmir, Silk Road transit trade, and stylistic divergence between Gandhara and Mathura art.' },
  { order: 16, slug: 'satavahanas-chedis-and-the-deccan', title: 'Satavahanas, Chedis & The Deccan: Gautamiputra Satakarni & Art', description: 'Rise of the Satavahana dynasty in the Deccan, Gautamiputra Satakarni (Nashik Prashasti), earliest inscriptional royal land grants, Prakrit literature (Gaha Sattasai), rock-cut Chaityas (Karle, Bhaja), and Amaravati stupa art.' },
  { order: 17, slug: 'sangam-age-literature-and-tamilakam', title: 'Sangam Age: Tamil Polities, Sangam Literature, Tinai & Maritime Trade', description: 'Early polities of Tamilakam (Cheras, Cholas, Pandyas), Sangam literary corpus (Ettuttokai, Pattuppattu, Tolkappiyam), fivefold Tinai ecological classification, and Indo-Roman maritime trade (Arikamedu, Muziris).' },
  { order: 18, slug: 'the-gupta-empire-imperial-consolidation', title: 'The Gupta Empire: Foundation, Samudragupta & Vikramaditya', description: 'Imperial rise under Chandragupta I (Gupta Era 319-320 CE), Samudragupta’s digvijaya conquest policy recorded in the Prayag Prashasti (Harishena), Chandragupta II Vikramaditya’s defeat of Shakas, and Skandagupta’s defense against Huna invasions (Bhitari Inscription).' },
  { order: 19, slug: 'gupta-administration-society-and-economy', title: 'Gupta Administration, Agrarian Structure, Land Grants & Social Order', description: 'Gupta administrative hierarchy (Bhuktis, Vishayas, Vithis), proliferation of religious land grants (Agraharas, Brahmadeya), forced labour (Vishti), changes in trade and urbanization, and Fa-Hien’s observations on Gupta society.' },
  { order: 20, slug: 'gupta-classical-age-art-literature-and-science', title: 'Gupta Cultural Golden Age: Literature, Science, Mathematics & Temple Architecture', description: 'Classical Sanskrit literature (Kalidasa, Vishakhadatta, Sudraka), scientific and mathematical breakthroughs (Aryabhata, Varahamihira, Brahmagupta), structural Hindu temple architecture (Nagara style, Deogarh Dashavatara), and metallurgical marvels (Mehrauli Iron Pillar).' },
  { order: 21, slug: 'post-gupta-north-india-harshavardhana', title: 'Post-Gupta North India: Pushyabhutis, Harshavardhana & Kannauj', description: 'Rise of the Pushyabhuti dynasty, Harshavardhana (606–647 CE), shifting of imperial capital to Kannauj, Kannauj Assembly and Prayag Mahamoksha Parishad, Xuanzang’s accounts, Bana Bhatta’s Harshacharita, and Harsha’s defeat on the Narmada by Pulakeshin II.' },
  { order: 22, slug: 'deccan-kingdoms-chalukyas-and-rashtrakutas', title: 'Deccan Kingdoms: Chalukyas of Badami & Rashtrakutas of Manyakheta', description: 'Early Chalukyas of Badami (Pulakeshin II, Ravikirti’s Aihole Prashasti, rock-cut architecture at Badami and Pattadakal), and Rashtrakutas of Manyakheta (Dantidurga, Krishna I’s monolithic Kailasanatha Temple at Ellora, Amoghavarsha I’s Kavirajamarga).' },
  { order: 23, slug: 'south-indian-classical-empires-pallavas-and-cholas', title: 'Classical South India: Pallavas of Kanchi & Imperial Cholas of Tanjore', description: 'Pallavas of Kanchi (Mahendravarman I, Narasimhavarman I Mamalla, Mahabalipuram monolithic Pancha Rathas and Shore Temple), and Imperial Cholas (Rajaraja I’s Brihadisvara Temple, Rajendra I’s naval expedition to Srivijaya, Uttaramerur Inscriptions on Kudavolai village autonomy, and Chola bronze Natarajas).' },
  { order: 24, slug: 'ancient-rajasthan-archaeology-and-polities', title: 'Ancient Rajasthan: Prehistoric Sites, Chalcolithic Cultures, Matsya & Mandore', description: 'Comprehensive coverage of Rajasthan ancient archaeology: Mesolithic Bagor (Bhilwara), Chalcolithic Ahar-Banas (Udaipur), Ganeshwar (Sikar copper culture), Bairath/Viratnagar (Matsya Janapada & Ashokan Bhabru Edict), Madhyamika/Nagari (Shivi Janapada & Ghosundi Inscription), and Early Gurjara-Pratiharas of Mandore and Bhinmal.' },
  { order: 25, slug: 'ancient-indian-philosophy-and-scientific-legacy', title: 'Ancient Indian Philosophy: Shad-Darshana & Scientific Legacy', description: 'The Six Orthodox Schools of Indian Philosophy (Samkhya, Yoga, Nyaya, Vaisheshika, Purva Mimamsa, Uttara Mimamsa/Vedanta), ancient medical traditions (Ayurveda, Charaka, Sushruta), and subcontinental civilizational legacy.' },
];

export const ALL_ANCIENT_MASTER_CONCEPTS: any[] = [
  ...ANCIENT_MASTER_PART_1_CONCEPTS,
  ...ANCIENT_MASTER_PART_2_CONCEPTS,
  ...ANCIENT_MASTER_PART_3_CONCEPTS,
];

// Helper maps
const CONCEPT_ID_TO_TOPIC_ORDER: Record<string, number> = {
  'CON-ANC-001': 1, 'CON-ANC-002': 1, 'CON-ANC-003': 1,
  'CON-ANC-004': 2, 'CON-ANC-005': 2,
  'CON-ANC-006': 3, 'CON-ANC-007': 3, 'CON-ANC-008': 3,
  'CON-ANC-009': 4, 'CON-ANC-010': 4, 'CON-ANC-011': 4,
  'CON-ANC-012': 5, 'CON-ANC-013': 5, 'CON-ANC-014': 5,
  'CON-ANC-015': 6, 'CON-ANC-016': 6, 'CON-ANC-017': 6,
  'CON-ANC-018': 7, 'CON-ANC-019': 7, 'CON-ANC-020': 7,
  'CON-ANC-021': 8, 'CON-ANC-022': 8, 'CON-ANC-023': 8,
  'CON-ANC-024': 9, 'CON-ANC-025': 9, 'CON-ANC-026': 9,
  'CON-ANC-027': 10, 'CON-ANC-028': 10, 'CON-ANC-029': 10,
  'CON-ANC-030': 11, 'CON-ANC-031': 11, 'CON-ANC-032': 11,
  'CON-ANC-033': 12, 'CON-ANC-034': 12, 'CON-ANC-035': 12,
  'CON-ANC-036': 13, 'CON-ANC-037': 13, 'CON-ANC-038': 13,
  'CON-ANC-039': 14, 'CON-ANC-040': 14, 'CON-ANC-041': 14,
  'CON-ANC-042': 15, 'CON-ANC-043': 15, 'CON-ANC-044': 15,
  'CON-ANC-045': 16, 'CON-ANC-046': 16,
  'CON-ANC-047': 17, 'CON-ANC-048': 17,
  'CON-ANC-049': 18, 'CON-ANC-050': 18, 'CON-ANC-051': 18,
  'CON-ANC-052': 19, 'CON-ANC-053': 19,
  'CON-ANC-054': 20, 'CON-ANC-055': 20, 'CON-ANC-056': 20,
  'CON-ANC-057': 21, 'CON-ANC-058': 21,
  'CON-ANC-059': 22, 'CON-ANC-060': 22,
  'CON-ANC-061': 23, 'CON-ANC-062': 23,
  'CON-ANC-063': 24, 'CON-ANC-064': 24,
  'CON-ANC-065': 25,
};

function normalizeClaimType(ct: string): any {
  if (ct === 'HISTORICAL_FACT' || ct === 'CORE_PRINCIPLE' || ct === 'CONSTITUTIONAL_PROVISION' || ct === 'STATUTORY_RULE' || ct === 'JUDICIAL_DOCTRINE' || ct === 'CENSUS_DATA') {
    return ct;
  }
  return 'HISTORICAL_FACT';
}

function normalizeRelevance(rel: string): any {
  if (rel === 'HIGH' || rel === 'VERY_HIGH' || rel === 'CORE') return 'CORE';
  if (rel === 'MEDIUM' || rel === 'ESSENTIAL') return 'ESSENTIAL';
  return 'ANCILLARY_COVERAGE';
}

function normalizePriority(pri: string): any {
  if (pri === 'P1' || pri === 'HIGH') return 'HIGH';
  return 'MEDIUM';
}

function normalizeRequiredDepth(dep: string): any {
  if (dep === 'EXHAUSTIVE' || dep === 'EXPERT') return 'EXPERT';
  if (dep === 'MODERATE' || dep === 'PROFICIENT') return 'PROFICIENT';
  return 'AWARENESS';
}

function normalizeQuestionType(qt: string): any {
  if (qt === 'CONCEPT_CHECK' || qt === 'APPLIED_SCENARIO' || qt === 'EXCEPTION_PROBE') return qt;
  return 'CONCEPT_CHECK';
}

export async function seedAncientMasterCanonicalKnowledge() {
  console.log(`Seeding Modernized Ancient Indian History Master Knowledge (${ALL_ANCIENT_MASTER_CONCEPTS.length} Concepts across 25 Topics)...`);

  // 1. Ensure Domain & Subject
  const domain = await db.domain.upsert({
    where: { slug: 'history-and-culture' },
    update: {
      name: 'History & Culture of India',
      description: 'Comprehensive historical, archaeological, artistic, and cultural heritage of the Indian subcontinent.',
    },
    create: {
      slug: 'history-and-culture',
      name: 'History & Culture of India',
      description: 'Comprehensive historical, archaeological, artistic, and cultural heritage of the Indian subcontinent.',
      order: 3,
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'ancient-indian-history' },
    update: {
      name: 'Ancient Indian History',
      domainId: domain.id,
      description: 'Master Canonical Corpus of Ancient Indian History: Prehistory, Harappa, Vedic Age, Mahajanapadas, Mauryas, Guptas, Harsha, Deccan, South India & Ancient Rajasthan.',
      scopeStatement: 'Comprehensive coverage of Indian prehistoric archaeology, protohistory, classical empires, cultural developments, regional polities, and state formations from Stone Age to 1200 CE.',
    },
    create: {
      slug: 'ancient-indian-history',
      name: 'Ancient Indian History',
      domainId: domain.id,
      description: 'Master Canonical Corpus of Ancient Indian History: Prehistory, Harappa, Vedic Age, Mahajanapadas, Mauryas, Guptas, Harsha, Deccan, South India & Ancient Rajasthan.',
      scopeStatement: 'Comprehensive coverage of Indian prehistoric archaeology, protohistory, classical empires, cultural developments, regional polities, and state formations from Stone Age to 1200 CE.',
      order: 3,
    },
  });

  // 2. Ensure Primary Authority Source
  const sourceAncient = await db.source.upsert({
    where: { id: 'source-ancient-india-archaeology-epigraphy' },
    update: {},
    create: {
      id: 'source-ancient-india-archaeology-epigraphy',
      title: 'Corpus Inscriptionum Indicarum, Epigraphia Indica & Archaeological Survey of India Reports',
      author: 'Archaeological Survey of India, Epigraphical Society of India & Renowned Historians',
      sourceType: 'ARCHAEOLOGY_AND_EPIGRAPHY',
      authorityTier: 'PRIMARY_AUTHORITY',
      description: 'The authoritative primary epigraphical inscriptions, numismatic evidence, excavation reports, and classical Sanskrit/Prakrit/Pali/Tamil texts governing Ancient Indian History.',
    },
  });

  // 3. Ensure Target Exams
  const targetExams = [
    { code: 'UPSC_APFC', name: 'UPSC APFC / EPFO', slug: 'upsc-apfc' },
    { code: 'RPSC_RAS', name: 'RPSC RAS / RTS', slug: 'rpsc-ras' },
    { code: 'RBI_GRADE_B', name: 'RBI Grade B Officer', slug: 'rbi-grade-b' },
    { code: 'NABARD_GRADE_A', name: 'NABARD Grade A', slug: 'nabard-grade-a' },
    { code: 'SBI_PO', name: 'SBI PO', slug: 'sbi-po' },
    { code: 'IBPS_PO', name: 'IBPS PO', slug: 'ibps-po' },
    { code: 'SEBI_GRADE_A', name: 'SEBI Grade A', slug: 'sebi-grade-a' },
    { code: 'IIBF_DBF', name: 'IIBF Diploma in Banking & Finance', slug: 'iibf-dbf' },
  ];

  const examMap: Record<string, string> = {};
  for (const ex of targetExams) {
    const examRecord = await db.exam.upsert({
      where: { slug: ex.slug },
      update: { name: ex.name },
      create: {
        slug: ex.slug,
        name: ex.name,
        conductingBody: ex.code.split('_')[0],
        description: `Official competitive examination for ${ex.name}`,
        syllabusSummary: `General Studies, History, Heritage and Public Administration syllabus for ${ex.name}`,
      },
    });
    examMap[ex.code] = examRecord.id;
  }

  // 4. Ensure Exactly 25 Canonical Topics
  const topicMapByOrder: Record<number, string> = {};
  const topicMapBySlug: Record<string, string> = {};
  for (const tDef of CANONICAL_25_ANCIENT_TOPICS) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: tDef.slug,
        },
      },
      update: {
        title: tDef.title,
        description: tDef.description,
        order: tDef.order,
      },
      create: {
        slug: tDef.slug,
        title: tDef.title,
        description: tDef.description,
        order: tDef.order,
        subjectId: subject.id,
      },
    });
    topicMapByOrder[tDef.order] = topic.id;
    topicMapBySlug[tDef.slug] = topic.id;
  }

  // Clean up legacy concepts and dependent tables for ancient-indian-history
  const existingAncientTopics = await db.topic.findMany({ where: { subjectId: subject.id } });
  const topicIds = existingAncientTopics.map(t => t.id);
  const existingAncientConcepts = await db.concept.findMany({ where: { topicId: { in: topicIds } } });
  const conceptIds = existingAncientConcepts.map(c => c.id);

  if (conceptIds.length > 0) {
    const existingClaims = await db.claim.findMany({ where: { conceptId: { in: conceptIds } } });
    const claimIds = existingClaims.map(cl => cl.id);
    await db.evidence.deleteMany({ where: { claimId: { in: claimIds } } });
    await db.claim.deleteMany({ where: { conceptId: { in: conceptIds } } });
    await db.contentBlock.deleteMany({ where: { conceptId: { in: conceptIds } } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: { in: conceptIds } } });
    await db.revisionUnit.deleteMany({ where: { conceptId: { in: conceptIds } } });
    await db.question.deleteMany({ where: { conceptId: { in: conceptIds } } });
    await db.concept.deleteMany({ where: { id: { in: conceptIds } } });
  }

  // Delete any non-canonical legacy topic records
  const canonicalSlugs = CANONICAL_25_ANCIENT_TOPICS.map(t => t.slug);
  for (const ext of existingAncientTopics) {
    if (!canonicalSlugs.includes(ext.slug)) {
      await db.topic.deleteMany({ where: { id: ext.id } });
    }
  }

  // 5. Seed / Upsert All 65 Modernized Canonical Concepts
  let conceptOrderInTopic: Record<number, number> = {};

  for (const cDef of ALL_ANCIENT_MASTER_CONCEPTS) {
    const topicOrder = cDef.topicOrder || CONCEPT_ID_TO_TOPIC_ORDER[cDef.id] || 1;
    const targetTopicId = topicMapByOrder[topicOrder] || (cDef.topicSlug ? topicMapBySlug[cDef.topicSlug] : undefined);
    if (!targetTopicId) {
      throw new Error(`Topic order ${topicOrder} / slug ${cDef.topicSlug} not found for concept ${cDef.id}`);
    }

    if (!conceptOrderInTopic[topicOrder]) {
      conceptOrderInTopic[topicOrder] = 1;
    }
    const currentOrder = conceptOrderInTopic[topicOrder]++;

    // Upsert Concept
    const concept = await db.concept.upsert({
      where: { id: cDef.id },
      update: {
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        topicId: targetTopicId,
        order: currentOrder,
      },
      create: {
        id: cDef.id,
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        topicId: targetTopicId,
        order: currentOrder,
      },
    });

    // Clear and Recreate Claims & Evidence
    await db.claim.deleteMany({ where: { conceptId: concept.id } });
    for (let cIdx = 0; cIdx < cDef.claims.length; cIdx++) {
      const cl = cDef.claims[cIdx];
      const claimId = cl.id || `CLM-ANC-${cDef.id.replace('CON-ANC-', '')}-${(cIdx + 1).toString().padStart(2, '0')}`;
      const claim = await db.claim.create({
        data: {
          id: claimId,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: normalizeClaimType(cl.claimType),
          epistemicLevel: 'ESTABLISHED_FACT',
          confidence: 'HIGH',
          status: 'VERIFIED',
        },
      });

      // Attach primary evidence
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceAncient.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'PRIMARY_SOURCE_EXCERPT',
          authority: 'PRIMARY_AUTHORITY',
          evidentiarySupport: 'EXPLICIT_CONFIRMATION',
          extractionConfidence: 'CERTAIN',
        },
      });
    }

    // Clear and Recreate Content Blocks (4-block architecture)
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const b of cDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: b.type,
          title: b.title,
          body: b.body,
          order: b.order,
          visibility: 'PUBLIC',
        },
      });
    }

    // Clear and Recreate 8-Exam Mappings
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    for (const em of cDef.examMappings) {
      const examDbId = examMap[em.examCode];
      if (examDbId) {
        await db.examConceptMapping.create({
          data: {
            conceptId: concept.id,
            examId: examDbId,
            syllabusUnit: em.syllabusUnit,
            relevance: normalizeRelevance(em.relevance),
            priority: normalizePriority(em.priority),
            requiredDepth: normalizeRequiredDepth(em.requiredDepth),
            notes: em.notes,
          },
        });
      }
    }

    // Clear and Recreate 3-Speed Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of cDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: ru.order,
        },
      });
    }

    // Clear and Recreate Practice Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of cDef.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: normalizeQuestionType(q.type),
          stem: q.stem,
          options: typeof q.options === 'string' ? q.options : JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation || 'Watch out for examiner chronological inversions and regional site traps.',
          difficulty: q.difficulty || 'INTERMEDIATE',
          isPYQ: !!q.isPYQ,
          pyqYear: q.pyqYear || null,
          pyqPaper: q.pyqPaper || null,
          pyqQuestionNumber: q.pyqQuestionNumber || null,
        },
      });
    }
  }

  console.log(`Successfully seeded ${ALL_ANCIENT_MASTER_CONCEPTS.length} Modernized Ancient Indian History Canonical Concepts.`);
}
