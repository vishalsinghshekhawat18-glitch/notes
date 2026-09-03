// Basic Science & Scientific Literacy Master — Canonical Knowledge Seeder
// Consolidates 25 Canonical Topics & 115 Concepts (CON-SCI-001 to CON-SCI-115)
// Standardized 4-Block Architecture, 8-Exam Mappings & 2 Questions per Concept

import { db } from '../db/client';
import { SCIENCE_MASTER_PART_1_CONCEPTS } from './batch-science-master-part1';
import { SCIENCE_MASTER_PART_2_CONCEPTS } from './batch-science-master-part2';
import { BATCH_SCIENCE_MASTER_PART3_CONCEPTS } from './batch-science-master-part3';
import { BATCH_SCIENCE_MASTER_PART4_CONCEPTS } from './batch-science-master-part4';

export const CANONICAL_25_SCIENCE_TOPICS = [
  { order: 1, slug: 'scientific-measurement-si-units-physical-quantities', title: 'Scientific Measurement, SI Units & Physical Quantities', description: 'Base and derived SI units, dimensional analysis, precision measurement instruments (Vernier Calliper, Screw Gauge), scalar vs vector quantities, and metric prefixes.' },
  { order: 2, slug: 'kinematics-motion-velocity-acceleration-graphs', title: 'Kinematics: Motion, Velocity, Acceleration & Graphs', description: 'Frame of reference, distance vs displacement, speed and velocity, acceleration, graphical kinematic analysis, and the three equations of motion.' },
  { order: 3, slug: 'dynamics-force-newtons-laws-momentum-friction', title: "Dynamics: Force, Newton's Laws, Momentum & Friction", description: "Galileo's principle of inertia, Newton's three laws of motion, linear momentum, impulse, static/kinetic/rolling friction, and aerodynamic drag." },
  { order: 4, slug: 'gravitation-planetary-motion-and-fluid-mechanics', title: 'Gravitation, Planetary Motion, Solar System & Fluid Mechanics', description: "Universal law of gravitation, g variations, Kepler's laws, solar system planets and orbits, escape velocity, fluid pressure, Pascal's principle, and Archimedes' buoyancy." },
  { order: 5, slug: 'work-energy-conservation-laws-and-power', title: 'Work, Energy, Conservation Laws & Power', description: 'Scalar definition of work, kinetic and gravitational potential energy, conservation of mechanical energy, work-energy theorem, power in Watts, horsepower, and kWh billing.' },
  { order: 6, slug: 'thermal-physics-heat-transfer-and-thermodynamics', title: 'Thermal Physics, Heat Transfer & Thermodynamics', description: 'Temperature scales (Celsius, Fahrenheit, Kelvin), Zeroth law, conduction, convection (sea/land breeze), thermal radiation, latent heat of fusion/vaporisation, specific heat, and evaporative cooling.' },
  { order: 7, slug: 'wave-mechanics-sound-propagation-acoustics', title: 'Wave Mechanics, Sound Propagation & Acoustics', description: 'Longitudinal vs transverse waves, speed of sound in media, pitch vs loudness, reflection of sound, echo criteria, reverberation, and ultrasonic/SONAR applications.' },
  { order: 8, slug: 'geometrical-optics-reflection-mirrors-lenses', title: 'Geometrical Optics: Reflection, Mirrors & Lenses', description: "Laws of reflection, spherical mirrors (concave/convex), refraction, Snell's law, total internal reflection (TIR), optical fibres, spherical lenses, and lens power in Dioptres." },
  { order: 9, slug: 'human-eye-optics-vision-defects-atmospheric-optics', title: 'Human Eye Optics, Vision Defects & Atmospheric Optics', description: 'Anatomy of human eye, accommodation, vision defects (myopia, hypermetropia, presbyopia), prism dispersion, rainbow formation, atmospheric refraction, and Rayleigh light scattering.' },
  { order: 10, slug: 'current-electricity-circuits-resistance', title: 'Current Electricity, Circuits & Resistance', description: "Electric charge, current, potential difference, Ohm's law, resistivity, series and parallel resistor networks, Joule's heating effect, and electric power consumption." },
  { order: 11, slug: 'electromagnetism-motors-generators-domestic-wiring', title: 'Electromagnetism, Motors, Generators & Domestic Wiring', description: "Magnetic fields of conductors and solenoids, Lorentz force, Fleming's left-hand rule (motors), electromagnetic induction, Fleming's right-hand rule (generators), AC vs DC, and domestic wiring safety." },
  { order: 12, slug: 'matter-states-phase-transitions-solutions-colloids', title: 'Matter: States, Phase Transitions, Solutions & Colloids', description: 'Particulate nature of matter, five states of matter (solid, liquid, gas, plasma, BEC), phase transitions, true solutions, suspensions, colloids, Tyndall effect, and separation methods.' },
  { order: 13, slug: 'atomic-structure-chemical-laws-formulae-mole', title: 'Atomic Structure, Chemical Laws, Formulae & The Mole', description: "Laws of chemical combination, Dalton's atomic theory, chemical formulae, mole concept, subatomic particle discovery, Rutherford and Bohr models, electronic configuration, and isotopes." },
  { order: 14, slug: 'chemical-reactions-equations-redox-corrosion', title: 'Chemical Reactions, Equations, Redox & Corrosion', description: 'Chemical equation balancing, reaction types (combination, decomposition, displacement, double displacement), oxidation-reduction (redox), electrochemical corrosion, and rancidity.' },
  { order: 15, slug: 'acids-bases-ph-scale-industrial-salts', title: 'Acids, Bases, pH Scale & Industrial Salts', description: 'Properties of acids and bases (H+/OH- ions), indicators, pH scale significance, chlor-alkali process, bleaching powder, baking soda, washing soda, and Plaster of Paris.' },
  { order: 16, slug: 'metals-non-metals-reactivity-metallurgy-alloys', title: 'Metals, Non-Metals, Reactivity, Metallurgy & Alloys', description: 'Physical and chemical properties of metals, reactivity series, ionic bonding, metallurgy (roasting/calcination/thermite), electrolytic copper refining, and commercial alloys.' },
  { order: 17, slug: 'carbon-chemistry-hydrocarbons-polymers-soaps', title: 'Carbon Chemistry, Hydrocarbons, Polymers & Soaps', description: 'Covalent bonding, carbon allotropes (diamond, graphite, fullerenes), hydrocarbons (alkanes, alkenes, alkynes), functional groups, ethanol and ethanoic acid, soaps, detergents, and micelles.' },
  { order: 18, slug: 'cell-structure-organelles-cell-division', title: 'The Cell: Structure, Organelles & Cell Division', description: 'Cell discovery and theory, prokaryotic vs eukaryotic cells, plasma membrane and osmosis, nucleus, ER, Golgi, lysosomes, mitochondria (ATP), plastids, and cell division (mitosis vs meiosis).' },
  { order: 19, slug: 'plant-and-animal-tissues-histology', title: 'Plant & Animal Tissues (Histology)', description: 'Plant meristematic and permanent tissues (parenchyma, collenchyma, sclerenchyma, xylem, phloem), animal epithelial, connective (blood, bone, cartilage), muscular, and nervous tissues.' },
  { order: 20, slug: 'human-physiology-digestion-respiration-circulation', title: 'Human Physiology: Digestion, Respiration & Circulation', description: 'Human digestive system and enzymes, biochemical nutrients and vitamins, cellular respiration pathways (ATP), respiratory gas exchange, 4-chambered heart, double circulation, and lymph.' },
  { order: 21, slug: 'human-physiology-excretion-nervous-endocrine', title: 'Human Physiology: Excretion, Nervous & Endocrine Systems', description: 'Human excretory system and nephron filtration, plant vascular transport, central and peripheral nervous systems, reflex arcs, human endocrine glands and hormones, and plant phytohormones.' },
  { order: 22, slug: 'reproduction-in-organisms-human-reproductive-health', title: 'Reproduction in Organisms & Human Reproductive Health', description: 'Asexual reproduction modes, sexual reproduction in flowering plants (double fertilisation), human reproductive anatomy, menstrual cycle, fertilisation, placenta, contraception, and STIs.' },
  { order: 23, slug: 'genetics-mendelian-laws-evolution-principles', title: 'Genetics, Mendelian Laws & Evolution Principles', description: "Mendel's monohybrid and dihybrid crosses, laws of inheritance, DNA structure, gene expression, sex determination mechanisms, and evolutionary principles." },
  { order: 24, slug: 'microbiology-human-diseases-immunity-vaccines', title: 'Microbiology, Human Diseases, Immunity & Vaccines', description: 'Microbial groups (bacteria, viruses, fungi, protozoa), infectious pathogens and transmission, immune mechanisms, vaccines (Jenner, Pasteur), antibiotics, AMR, and food preservation.' },
  { order: 25, slug: 'ecology-agricultural-science-environmental-protection', title: 'Ecology, Agricultural Science & Environmental Protection', description: "Ecosystem dynamics, food chains, 10% energy law, biomagnification, biogeochemical cycles, agricultural agronomy (NPK nutrients, cropping systems), ozone depletion (Montreal protocol), and scientific instruments directory." }
];

export const ALL_SCIENCE_MASTER_CONCEPTS: any[] = [
  ...SCIENCE_MASTER_PART_1_CONCEPTS,
  ...SCIENCE_MASTER_PART_2_CONCEPTS,
  ...BATCH_SCIENCE_MASTER_PART3_CONCEPTS,
  ...BATCH_SCIENCE_MASTER_PART4_CONCEPTS,
];

// Helper mapping from Concept ID to Topic Order
const CONCEPT_ID_TO_TOPIC_ORDER: Record<string, number> = {
  'CON-SCI-001': 1, 'CON-SCI-002': 1, 'CON-SCI-003': 1, 'CON-SCI-004': 1,
  'CON-SCI-005': 2, 'CON-SCI-006': 2, 'CON-SCI-007': 2, 'CON-SCI-008': 2,
  'CON-SCI-009': 3, 'CON-SCI-010': 3, 'CON-SCI-011': 3, 'CON-SCI-012': 3, 'CON-SCI-013': 3,
  'CON-SCI-014': 4, 'CON-SCI-015': 4, 'CON-SCI-016': 4, 'CON-SCI-017': 4, 'CON-SCI-018': 4,
  'CON-SCI-019': 5, 'CON-SCI-020': 5, 'CON-SCI-021': 5, 'CON-SCI-022': 5,
  'CON-SCI-023': 6, 'CON-SCI-024': 6, 'CON-SCI-025': 6, 'CON-SCI-026': 6,
  'CON-SCI-027': 7, 'CON-SCI-028': 7, 'CON-SCI-029': 7, 'CON-SCI-030': 7, 'CON-SCI-031': 7,
  'CON-SCI-032': 8, 'CON-SCI-033': 8, 'CON-SCI-034': 8, 'CON-SCI-035': 8, 'CON-SCI-036': 8, 'CON-SCI-037': 8,
  'CON-SCI-038': 9, 'CON-SCI-039': 9, 'CON-SCI-040': 9, 'CON-SCI-041': 9, 'CON-SCI-042': 9,
  'CON-SCI-043': 10, 'CON-SCI-044': 10, 'CON-SCI-045': 10, 'CON-SCI-046': 10, 'CON-SCI-047': 10,
  'CON-SCI-048': 11, 'CON-SCI-049': 11, 'CON-SCI-050': 11, 'CON-SCI-051': 11, 'CON-SCI-052': 11, 'CON-SCI-053': 11,
  'CON-SCI-054': 12, 'CON-SCI-055': 12, 'CON-SCI-056': 12, 'CON-SCI-057': 12, 'CON-SCI-058': 12, 'CON-SCI-059': 12, 'CON-SCI-060': 12,
  'CON-SCI-061': 13, 'CON-SCI-062': 13, 'CON-SCI-063': 13, 'CON-SCI-064': 13, 'CON-SCI-065': 13,
  'CON-SCI-066': 14, 'CON-SCI-067': 14, 'CON-SCI-068': 14, 'CON-SCI-069': 14, 'CON-SCI-070': 14, 'CON-SCI-071': 14,
  'CON-SCI-072': 15, 'CON-SCI-073': 15, 'CON-SCI-074': 15, 'CON-SCI-075': 15, 'CON-SCI-076': 15, 'CON-SCI-077': 15,
  'CON-SCI-078': 16, 'CON-SCI-079': 16, 'CON-SCI-080': 16, 'CON-SCI-081': 16, 'CON-SCI-082': 16, 'CON-SCI-083': 16,
  'CON-SCI-084': 17, 'CON-SCI-085': 17, 'CON-SCI-086': 17, 'CON-SCI-087': 17, 'CON-SCI-088': 17, 'CON-SCI-089': 17,
  'CON-SCI-090': 18, 'CON-SCI-091': 18, 'CON-SCI-092': 18, 'CON-SCI-093': 18, 'CON-SCI-094': 18, 'CON-SCI-095': 18, 'CON-SCI-096': 18, 'CON-SCI-097': 18,
  'CON-SCI-098': 19, 'CON-SCI-099': 19, 'CON-SCI-100': 19,
  'CON-SCI-101': 20, 'CON-SCI-102': 20, 'CON-SCI-103': 20,
  'CON-SCI-104': 21, 'CON-SCI-105': 21, 'CON-SCI-106': 21,
  'CON-SCI-107': 22, 'CON-SCI-108': 22, 'CON-SCI-109': 22,
  'CON-SCI-110': 23, 'CON-SCI-111': 23, 'CON-SCI-112': 23,
  'CON-SCI-113': 24, 'CON-SCI-114': 24,
  'CON-SCI-115': 25,
};

function normalizeClaimType(ct: string): any {
  if (ct === 'SCIENTIFIC_LAW' || ct === 'SCIENTIFIC_DEFINITION' || ct === 'SCIENTIFIC_RULE' || ct === 'SCIENTIFIC_CONSTANT' || ct === 'SCIENTIFIC_FACT' || ct === 'SCIENTIFIC_APPLICATION') {
    return 'CORE_PRINCIPLE';
  }
  return 'FACT';
}

function normalizeRelevance(rel: string): any {
  if (rel === 'CORE') return 'HIGH';
  if (rel === 'SUPPORTING') return 'MEDIUM';
  if (rel === 'BACKGROUND') return 'LOW';
  return 'LOW';
}

function normalizePriority(pri: string): any {
  if (pri === 'HIGH_YIELD') return 'HIGH_YIELD';
  if (pri === 'CORE') return 'CORE';
  return 'STANDARD';
}

function normalizeRequiredDepth(dep: string): any {
  if (dep === 'EXPERT') return 'EXPERT';
  if (dep === 'PROFICIENT') return 'PROFICIENT';
  return 'AWARENESS';
}

export async function seedBasicScienceMasterCanonicalKnowledge() {
  console.log('Seeding Basic Science & Scientific Literacy Master Canonical Knowledge...');

  // 1. Ensure Domain exists
  const domain = await db.domain.upsert({
    where: { slug: 'general-science-and-technology' },
    update: {
      name: 'General Science & Technology Systems',
      description: 'The universal physical, chemical, biological, and technological knowledge foundation for competitive examinations.',
      order: 7,
      status: 'ACTIVE'
    },
    create: {
      slug: 'general-science-and-technology',
      name: 'General Science & Technology Systems',
      description: 'The universal physical, chemical, biological, and technological knowledge foundation for competitive examinations.',
      order: 7,
      status: 'ACTIVE'
    }
  });

  // 2. Ensure Subject exists
  const subject = await db.subject.upsert({
    where: { slug: 'basic-science' },
    update: {
      name: 'Basic Science & Scientific Literacy Master',
      domainId: domain.id,
      description: 'Exhaustive first-principles coverage of NCERT Classes 6 to 10 General Science augmented with high-yield competitive examination extensions.',
      scopeStatement: 'Canonical coverage of physics mechanics, electrodynamics, optics, physical/inorganic/organic chemistry, cell biology, human physiology, genetics, ecology, and space science across 25 functional topics.',
      order: 1,
      status: 'ACTIVE'
    },
    create: {
      slug: 'basic-science',
      name: 'Basic Science & Scientific Literacy Master',
      domainId: domain.id,
      description: 'Exhaustive first-principles coverage of NCERT Classes 6 to 10 General Science augmented with high-yield competitive examination extensions.',
      scopeStatement: 'Canonical coverage of physics mechanics, electrodynamics, optics, physical/inorganic/organic chemistry, cell biology, human physiology, genetics, ecology, and space science across 25 functional topics.',
      order: 1,
      status: 'ACTIVE'
    }
  });

  // 3. Ensure all 25 Topics exist
  const topicMap = new Map<string, string>();
  for (const top of CANONICAL_25_SCIENCE_TOPICS) {
    const t = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: top.slug
        }
      },
      update: {
        title: top.title,
        description: top.description,
        order: top.order,
        status: 'ACTIVE'
      },
      create: {
        subjectId: subject.id,
        slug: top.slug,
        title: top.title,
        description: top.description,
        order: top.order,
        status: 'ACTIVE'
      }
    });
    topicMap.set(top.slug, t.id);
  }

  // 4. Ensure Authoritative NCERT Science Source exists
  const source = await db.source.upsert({
    where: { id: 'src-ncert-science-master' },
    update: {
      title: 'NCERT Science (Classes 6 to 10) & National Curriculum Framework',
      author: 'National Council of Educational Research and Training (NCERT)',
      publisher: 'NCERT, New Delhi',
      sourceType: 'STATUTORY_STANDARD',
      authorityTier: 'TIER_1_PRIMARY',
      language: 'en',
      description: 'Authoritative National Science Textbook Corpus and Official Competitive Exam Syllabus Standards.'
    },
    create: {
      id: 'src-ncert-science-master',
      title: 'NCERT Science (Classes 6 to 10) & National Curriculum Framework',
      author: 'National Council of Educational Research and Training (NCERT)',
      publisher: 'NCERT, New Delhi',
      sourceType: 'STATUTORY_STANDARD',
      authorityTier: 'TIER_1_PRIMARY',
      language: 'en',
      description: 'Authoritative National Science Textbook Corpus and Official Competitive Exam Syllabus Standards.'
    }
  });

  // 5. Ensure Exams exist
  const examCodes = [
    { slug: 'UPSC_APFC', name: 'UPSC APFC / EPFO', conductingBody: 'Union Public Service Commission' },
    { slug: 'RPSC_RAS', name: 'RPSC RAS / RTS', conductingBody: 'Rajasthan Public Service Commission' },
    { slug: 'RBI_GRADE_B', name: 'RBI Grade B (General)', conductingBody: 'Reserve Bank of India' },
    { slug: 'NABARD_GRADE_A', name: 'NABARD Grade A', conductingBody: 'NABARD' },
    { slug: 'SBI_PO', name: 'SBI Probationary Officer', conductingBody: 'State Bank of India' },
    { slug: 'IBPS_PO', name: 'IBPS Probationary Officer / MT', conductingBody: 'IBPS' },
    { slug: 'SEBI_GRADE_A', name: 'SEBI Grade A (General)', conductingBody: 'SEBI' },
    { slug: 'IIBF_DBF', name: 'IIBF Diploma in Banking & Finance / JAIIB', conductingBody: 'Indian Institute of Banking and Finance' },
  ];

  const examMap = new Map<string, string>();
  for (const e of examCodes) {
    const ex = await db.exam.upsert({
      where: { slug: e.slug },
      update: { name: e.name, conductingBody: e.conductingBody },
      create: { slug: e.slug, name: e.name, conductingBody: e.conductingBody, status: 'ACTIVE' }
    });
    examMap.set(e.slug, ex.id);
  }

  // 6. Seed Concepts
  console.log(`Seeding ${ALL_SCIENCE_MASTER_CONCEPTS.length} canonical Basic Science concepts...`);

  for (const conceptDef of ALL_SCIENCE_MASTER_CONCEPTS) {
    const topicId = topicMap.get(conceptDef.topicSlug);
    if (!topicId) {
      throw new Error(`Topic slug not found: ${conceptDef.topicSlug} for concept ${conceptDef.id}`);
    }

    // Upsert Concept
    const concept = await db.concept.upsert({
      where: { id: conceptDef.id },
      update: {
        topicId: topicId,
        slug: conceptDef.slug,
        title: conceptDef.title,
        shortDefinition: conceptDef.shortDefinition,
        difficulty: conceptDef.difficulty,
        order: conceptDef.order,
        status: 'ACTIVE'
      },
      create: {
        id: conceptDef.id,
        topicId: topicId,
        slug: conceptDef.slug,
        title: conceptDef.title,
        shortDefinition: conceptDef.shortDefinition,
        difficulty: conceptDef.difficulty,
        order: conceptDef.order,
        status: 'ACTIVE'
      }
    });

    // Claims & Evidence
    for (const claimDef of conceptDef.claims) {
      const claim = await db.claim.upsert({
        where: { id: claimDef.id },
        update: {
          conceptId: concept.id,
          statement: claimDef.statement,
          claimType: normalizeClaimType(claimDef.claimType),
          epistemicLevel: claimDef.epistemicLevel || 'CANONICAL_CLAIM',
          confidence: claimDef.confidence || 'ESTABLISHED_FACT',
          status: 'VERIFIED',
          jurisdiction: 'Universal Physical Science'
        },
        create: {
          id: claimDef.id,
          conceptId: concept.id,
          statement: claimDef.statement,
          claimType: normalizeClaimType(claimDef.claimType),
          epistemicLevel: claimDef.epistemicLevel || 'CANONICAL_CLAIM',
          confidence: claimDef.confidence || 'ESTABLISHED_FACT',
          status: 'VERIFIED',
          jurisdiction: 'Universal Physical Science'
        }
      });

      // Link Evidence
      const evidenceId = `ev-${claim.id}`;
      await db.evidence.upsert({
        where: { id: evidenceId },
        update: {
          claimId: claim.id,
          sourceId: source.id,
          locator: claimDef.locator,
          excerpt: claimDef.excerpt,
          evidenceType: 'PRIMARY_STATUTORY_TEXT',
          authority: 'DIRECT_AUTHORITY',
          evidentiarySupport: 'STRONG_SUPPORT',
          extractionConfidence: 'HIGH'
        },
        create: {
          id: evidenceId,
          claimId: claim.id,
          sourceId: source.id,
          locator: claimDef.locator,
          excerpt: claimDef.excerpt,
          evidenceType: 'PRIMARY_STATUTORY_TEXT',
          authority: 'DIRECT_AUTHORITY',
          evidentiarySupport: 'STRONG_SUPPORT',
          extractionConfidence: 'HIGH'
        }
      });
    }

    // Content Blocks (Clean and Re-insert)
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const block of conceptDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: block.type,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: block.visibility || 'STANDARD'
        }
      });
    }

    // Exam Mappings
    for (const em of conceptDef.examMappings) {
      const examId = examMap.get(em.examCode);
      if (examId) {
        await db.examConceptMapping.upsert({
          where: {
            examId_conceptId: {
              examId: examId,
              conceptId: concept.id
            }
          },
          update: {
            syllabusUnit: em.syllabusUnit,
            relevance: normalizeRelevance(em.relevance),
            priority: normalizePriority(em.priority),
            requiredDepth: normalizeRequiredDepth(em.requiredDepth),
            notes: em.notes
          },
          create: {
            examId: examId,
            conceptId: concept.id,
            syllabusUnit: em.syllabusUnit,
            relevance: normalizeRelevance(em.relevance),
            priority: normalizePriority(em.priority),
            requiredDepth: normalizeRequiredDepth(em.requiredDepth),
            notes: em.notes
          }
        });
      }
    }

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of conceptDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          priority: ru.priority || 'HIGH',
          order: ru.order
        }
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (let qIdx = 0; qIdx < conceptDef.questions.length; qIdx++) {
      const q = conceptDef.questions[qIdx];
      await db.question.create({
        data: {
          id: `q-sci-${concept.id}-${qIdx + 1}`,
          conceptId: concept.id,
          type: q.type || 'MCQ_SINGLE',
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty || 'MODERATE',
          isPYQ: q.isPYQ || false,
          pyqYear: q.pyqYear || null,
          pyqPaper: q.pyqPaper || null,
          pyqStage: q.pyqStage || null,
          examinerTrapPattern: q.examinerTrapPattern || null
        }
      });
    }
  }

  console.log('Basic Science Canonical Seeding complete.');
}
